/**
 * Builds the MP3 recordings for IELTS listening parts with Azure Speech (neural TTS).
 *
 *   npx tsx scripts/build-ielts-audio.mts            # build parts whose script changed
 *   npx tsx scripts/build-ielts-audio.mts --dry      # print SSML size only, no API calls
 *   npx tsx scripts/build-ielts-audio.mts --force    # rebuild everything
 *
 * Each part with an `audio` path is turned into one SSML document: the narrator (British) reads the
 * exam instructions, `pause` becomes real silence, and each speaker uses the voice in `cast`.
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
import type { Line, QuestionPart } from "../content/ielts-tests/types";

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

function lineSsml(line: Line, part: QuestionPart) {
  const voice = line.who === "N" ? NARRATOR : part.cast?.[line.who];
  if (!voice) throw new Error(`${part.title}: no voice in cast for speaker ${line.who}`);
  const rate = line.who === "N" ? "-8%" : "-5%";
  const gap = line.pause ?? (line.who === "N" ? 0.8 : 0.35);
  return `<voice name="${voice}"><prosody rate="${rate}">${speakable(line.text)}</prosody>${silence(gap)}</voice>`;
}

function partSsml(part: QuestionPart) {
  const body = (part.script ?? []).map((l) => lineSsml(l, part)).join("");
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-GB">${body}</speak>`;
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

const manifest: Record<string, Entry> = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
let spent = 0;

for (const test of IELTS_TESTS) {
  const listening = test.modules.find((m) => m.id === "listening");
  if (!listening || listening.id === "writing") continue;
  for (const part of listening.parts) {
    if (!part.audio || !part.script?.length) continue;
    const ssml = partSsml(part);
    const hash = createHash("sha256").update(ssml).digest("hex").slice(0, 16);
    const file = join(ROOT, "public", part.audio);
    const label = `${test.id} ${part.title}`;
    if (dry) {
      console.log(`${label}: ${ssml.length} characters`);
      spent += ssml.length;
      continue;
    }
    if (!force && manifest[part.audio]?.hash === hash && existsSync(file)) {
      console.log(`${label}: up to date`);
      continue;
    }
    const mp3 = await synthesize(ssml);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, mp3);
    const seconds = Math.round(duration(file, mp3.length) * 10) / 10;
    manifest[part.audio] = { hash, chars: ssml.length, seconds };
    spent += ssml.length;
    console.log(`${label}: ${ssml.length} characters → ${part.audio} (${seconds} s)`);
    writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  }
}

console.log(`${dry ? "Would use" : "Used"} ${spent} characters.`);
