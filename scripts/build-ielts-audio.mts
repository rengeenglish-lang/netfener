/**
 * Builds the MP3 recordings for the IELTS and TOEFL practice tests with Azure Speech (neural TTS).
 *
 *   npx tsx scripts/build-ielts-audio.mts            # build parts whose script changed
 *   npx tsx scripts/build-ielts-audio.mts --dry      # characters the next build would use, no API calls
 *   npx tsx scripts/build-ielts-audio.mts --force    # rebuild everything
 *
 * Listening: each part with an `audio` path is turned into one SSML document: the narrator (British) reads the
 * exam instructions, `pause` becomes real silence, and each speaker uses the voice in `cast`.
 * Speaking: every examiner line (part intros, questions, closing) becomes its own short MP3.
 * A manifest stores a hash of each SSML document, so unchanged parts never spend characters again
 * (the free F0 tier allows 500,000 characters a month, SSML markup included).
 *
 * Auth: set AZURE_SPEECH_KEY locally. In the cloud dev environment the proxy adds the key itself;
 * there, run with NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt so fetch uses the proxy.
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";
import { IELTS_TESTS } from "../content/ielts-tests/registry";
import { TOEFL_TESTS, toeflSpeakingModule } from "../content/toefl-tests/registry";
import type { Line, SpeakingModule } from "../content/ielts-tests/types";

/** Anything read from a script with a cast: an IELTS listening part or a TOEFL listening set. */
type Scripted = { title: string; cast?: Partial<Record<string, string>>; script?: Line[] };

const REGION = process.env.AZURE_SPEECH_REGION ?? "swedencentral";
const ENDPOINT = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
const FORMAT = "audio-24khz-96kbitrate-mono-mp3";
const NARRATOR = "en-GB-RyanNeural";
const ROOT = join(import.meta.dirname, "..");
const MANIFEST = join(ROOT, "content/ielts-tests/audio-manifest.json");

type Entry = { hash: string; chars: number; seconds: number };
const args = new Set(process.argv.slice(2));
const dry = args.has("--dry");
const force = args.has("--force");

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Azure allows at most 5 s per <break>, so longer silences are chained. */
function silence(seconds: number) {
  let ms = Math.round(seconds * 1000);
  let out = "";
  while (ms > 0) {
    const step = Math.min(5000, ms);
    out += `<break time="${step}ms"/>`;
    ms -= step;
  }
  return out;
}

/** Speaks spelled-out letters ("C, O, double L") with short gaps, as an examiner would. */
function speakable(text: string) {
  return esc(text).replace(/\b([A-Z]), (?=(?:double [A-Z]|[A-Z])\b)/g, '$1, <break time="150ms"/>');
}

function lineSsml(line: Line, part: Scripted, narrator = NARRATOR) {
  const voice = line.who === "N" ? narrator : part.cast?.[line.who];
  if (!voice) throw new Error(`${part.title}: no voice in cast for speaker ${line.who}`);
  const rate = line.who === "N" ? "-8%" : "-5%";
  const gap = line.pause ?? (line.who === "N" ? 0.8 : 0.35);
  return `<voice name="${voice}"><prosody rate="${rate}">${speakable(line.text)}</prosody>${silence(gap)}</voice>`;
}

function partSsml(part: Scripted, narrator = NARRATOR, lang = "en-GB") {
  const body = (part.script ?? []).map((l) => lineSsml(l, part, narrator)).join("");
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${lang}">${body}</speak>`;
}

async function synthesize(ssml: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/ssml+xml",
    "X-Microsoft-OutputFormat": FORMAT,
    "User-Agent": "netfener-tts",
  };
  if (process.env.AZURE_SPEECH_KEY) headers["Ocp-Apim-Subscription-Key"] = process.env.AZURE_SPEECH_KEY;
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(ENDPOINT, { method: "POST", headers, body: ssml });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    const transient = res.status === 429 || res.status >= 500;
    const auth = res.status === 401 || res.status === 403;
    if (attempt >= 2 || !(transient || auth)) throw new Error(`Azure TTS ${res.status}: ${(await res.text()).slice(0, 300)}`);
    await new Promise((r) => setTimeout(r, auth ? 60_000 : 5_000));
  }
}

function duration(file: string, bytes: number) {
  try {
    return Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]).toString().trim());
  } catch {
    return (bytes * 8) / 96_000; // constant bitrate estimate
  }
}

/** One examiner line for Speaking: a single voice, a natural pace and a short tail of silence. */
function examinerSsml(voice: string, text: string) {
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB"><voice name="${voice}"><prosody rate="-5%">${speakable(text)}</prosody>${silence(0.3)}</voice></speak>`;
}

type Job = { label: string; audio: string; ssml: string };

const TOEFL_NARRATOR = "en-US-BrianNeural";

/** Speaking: every examiner line (part intros, questions, closing) is its own short clip. */
function speakingJobs(out: Job[], testId: string, m: SpeakingModule) {
  const say = (label: string, audio: string, text: string) => out.push({ label: `${testId} Speaking ${label}`, audio, ssml: examinerSsml(m.examiner, text) });
  for (const part of m.parts) {
    say(`${part.title} intro`, part.introAudio, part.intro);
    part.prompts.forEach((q, i) => say(`${part.title} Q${i + 1}`, q.audio, q.spoken ?? q.text));
  }
  say("outro", m.outroAudio, m.outro);
}

function jobs(): Job[] {
  const out: Job[] = [];
  for (const test of IELTS_TESTS) {
    for (const m of test.modules) {
      if (m.id === "listening") {
        for (const part of m.parts) {
          if (part.audio && part.script?.length) out.push({ label: `${test.id} ${part.title}`, audio: part.audio, ssml: partSsml(part) });
        }
      } else if (m.id === "speaking") {
        speakingJobs(out, test.id, m);
      }
    }
  }
  for (const test of TOEFL_TESTS) {
    const l = test.listening;
    for (const [stage, tasks] of [["Stage 1", l.stage1.tasks], ["Stage 2 easier", l.easier.tasks], ["Stage 2 harder", l.harder.tasks]] as const) {
      tasks.forEach((t, i) => {
        const label = `${test.id} Listening ${stage} #${i + 1}`;
        if (!t.audio) throw new Error(`${label}: no audio path`);
        out.push({ label, audio: t.audio, ssml: t.kind === "choose-response" ? examinerSsml(t.voice, t.line) : partSsml(t, TOEFL_NARRATOR, "en-US") });
      });
    }
    speakingJobs(out, test.id, toeflSpeakingModule(test));
  }
  return out;
}

// The free (F0) tier allows 20 requests a minute, so requests are spaced out.
const MIN_GAP_MS = 3_200;
let lastCall = 0;
async function paced<T>(fn: () => Promise<T>) {
  const wait = lastCall + MIN_GAP_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastCall = Date.now();
  return fn();
}

const manifest: Record<string, Entry> = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
let spent = 0;

for (const job of jobs()) {
  const hash = createHash("sha256").update(job.ssml).digest("hex").slice(0, 16);
  const file = join(ROOT, "public", job.audio);
  if (dry) {
    if (force || manifest[job.audio]?.hash !== hash) {
      console.log(`${job.label}: ${job.ssml.length} characters`);
      spent += job.ssml.length;
    }
    continue;
  }
  if (!force && manifest[job.audio]?.hash === hash && existsSync(file)) {
    console.log(`${job.label}: up to date`);
    continue;
  }
  const mp3 = await paced(() => synthesize(job.ssml));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, mp3);
  const seconds = Math.round(duration(file, mp3.length) * 10) / 10;
  manifest[job.audio] = { hash, chars: job.ssml.length, seconds };
  spent += job.ssml.length;
  console.log(`${job.label}: ${job.ssml.length} characters → ${job.audio} (${seconds} s)`);
  writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
}

console.log(`${dry ? "Would use" : "Used"} ${spent} characters.`);
