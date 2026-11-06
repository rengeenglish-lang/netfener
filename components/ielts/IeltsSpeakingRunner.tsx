"use client";

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Check, Eye, EyeOff, Mic, Send, Volume2 } from "lucide-react";
import type { SpeakingModule } from "@/content/ielts-tests/types";
import { TopBar } from "@/components/ielts/IeltsRunner";
import { ToeflBar } from "@/components/toefl/ToeflChrome";
import { SPEAKING_BAND_GUIDE, SPEAKING_CRITERIA, baseAudioType } from "@/lib/ielts-speaking";
import { requestSpeakingUploadsAction, submitSpeakingAction } from "@/app/actions/ielts-speaking";

type Props = {
  testId: string;
  testTitle: string;
  module: SpeakingModule;
  candidate: string;
  libraryHref: string;
  signedIn: boolean;
  signInHref: string;
  /** False when recording storage isn't configured on the server. */
  teacherReview: boolean;
  /** "toefl": TOEFL header and directions, no IELTS band guide or teacher review. */
  brand?: "ielts" | "toefl";
};

type Step =
  | { kind: "say"; part: number; audio: string; text: string }
  | { kind: "prep"; part: number; seconds: number }
  | { kind: "ask"; part: number; index: number; audio: string; spoken: string; seconds: number; minSeconds: number };

type Recording = { blob: Blob; url: string; seconds: number };
type Sub = "examiner" | "prep" | "recording";
type SendState = { status: "idle" | "sending" | "sent" | "error"; message?: string; done?: number; id?: string };

function clock(seconds: number) {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/** The browser's best supported recording type: Opus in WebM where possible, MP4/AAC on Safari. */
function recorderType() {
  if (typeof MediaRecorder === "undefined") return undefined;
  return ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"].find((t) => MediaRecorder.isTypeSupported(t));
}

export function IeltsSpeakingRunner({ testId, testTitle, module, candidate, libraryHref, signedIn, signInHref, teacherReview, brand = "ielts" }: Props) {
  const toefl = brand === "toefl";
  const header = (extra?: React.ReactNode) => (toefl ? <ToeflBar section="Speaking" extra={extra} /> : <TopBar candidate={candidate}>{extra}</TopBar>);
  const [phase, setPhase] = useState<"intro" | "test" | "done">("intro");
  const [stepIdx, setStepIdx] = useState(0);
  const [sub, setSub] = useState<Sub>("examiner");
  const [deadline, setDeadline] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [micError, setMicError] = useState("");
  const [level, setLevel] = useState(0);
  const [notes, setNotes] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [consent, setConsent] = useState(false);
  const [send, setSend] = useState<SendState>({ status: "idle" });

  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const clipRef = useRef<HTMLAudioElement | null>(null);
  const runRef = useRef(0);
  const stepRef = useRef(0);
  const timerRef = useRef(0);
  const urlsRef = useRef<string[]>([]);

  const steps = useMemo<Step[]>(() => {
    const out: Step[] = [];
    let index = 0;
    module.parts.forEach((part, p) => {
      out.push({ kind: "say", part: p, audio: part.introAudio, text: part.intro });
      if (part.cueCard) out.push({ kind: "prep", part: p, seconds: part.cueCard.prepSeconds });
      part.prompts.forEach((q) => {
        out.push({ kind: "ask", part: p, index: index++, audio: q.audio, spoken: q.spoken ?? q.text, seconds: q.seconds, minSeconds: q.seconds >= 90 ? 60 : q.seconds < 15 ? 1 : 3 });
      });
    });
    out.push({ kind: "say", part: module.parts.length - 1, audio: module.outroAudio, text: module.outro });
    return out;
  }, [module]);

  const prompts = useMemo(() => module.parts.flatMap((part, p) => part.prompts.map((q) => ({ ...q, part: p }))), [module]);
  const step = steps[Math.min(stepIdx, steps.length - 1)];
  const part = module.parts[step.part];

  const stopEverything = useCallback(() => {
    runRef.current += 1;
    window.clearTimeout(timerRef.current);
    clipRef.current?.pause();
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  // Lock page scroll while the test window is open; release the microphone and recordings on exit.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const urls = urlsRef.current;
    return () => {
      document.body.style.overflow = prev;
      stopEverything();
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [stopEverything]);

  // Recordings only live in this tab until they are sent, so warn before leaving.
  useEffect(() => {
    if (phase === "intro" || send.status === "sent") return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [phase, send.status]);

  /** Plays an examiner clip (or reads it aloud if the clip is missing), then calls `done`. */
  const playClip = useCallback((src: string, text: string, done: () => void) => {
    const run = runRef.current;
    const next = () => {
      if (runRef.current === run) done();
    };
    const speakInstead = () => {
      if (typeof window.speechSynthesis === "undefined") return void window.setTimeout(next, 1500);
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.95;
      u.onend = next;
      window.speechSynthesis.speak(u);
    };
    const clip = new Audio(src);
    clipRef.current = clip;
    clip.onended = next;
    clip.onerror = speakInstead;
    clip.play().catch(speakInstead);
  }, []);

  /** Moves on from step `from`; ignored when the test has already moved past it. */
  function advance(from: number) {
    if (stepRef.current === from) runStep(from + 1);
  }

  /** Starts step `i`: the examiner speaks, the preparation clock runs, or (after a question) recording begins. */
  function runStep(i: number) {
    window.clearTimeout(timerRef.current);
    runRef.current += 1;
    stepRef.current = i;
    const current = steps[i];
    if (!current) {
      stopEverything();
      setPhase("done");
      return;
    }
    setStepIdx(i);
    if (current.kind === "prep") {
      const t = Date.now();
      setStartedAt(t);
      setDeadline(t + current.seconds * 1000);
      setNow(t);
      setSub("prep");
      timerRef.current = window.setTimeout(() => advance(i), current.seconds * 1000);
      return;
    }
    setSub("examiner");
    if (current.kind === "say") playClip(current.audio, current.text, () => advance(i));
    else playClip(current.audio, current.spoken, () => startRecording(current.index, current.seconds, i));
  }

  function startRecording(index: number, seconds: number, at: number) {
    const stream = streamRef.current;
    if (!stream) return;
    const type = recorderType();
    const recorder = type ? new MediaRecorder(stream, { mimeType: type }) : new MediaRecorder(stream);
    const chunks: Blob[] = [];
    const began = Date.now();
    recorder.ondataavailable = (e) => {
      if (e.data.size) chunks.push(e.data);
    };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: recorder.mimeType || type || "audio/webm" });
      const url = URL.createObjectURL(blob);
      urlsRef.current.push(url);
      setRecordings((list) => {
        const copy = [...list];
        copy[index] = { blob, url, seconds: Math.round((Date.now() - began) / 1000) };
        return copy;
      });
      advance(at);
    };
    recorderRef.current = recorder;
    recorder.start();
    setStartedAt(began);
    setDeadline(began + seconds * 1000);
    setNow(began);
    setSub("recording");
    // When the answer time is up, recording stops and the test moves on.
    timerRef.current = window.setTimeout(() => {
      if (recorder.state === "recording") recorder.stop();
    }, seconds * 1000);
  }

  // Ticks the on-screen clock during preparation and answers.
  useEffect(() => {
    if (phase !== "test" || (sub !== "prep" && sub !== "recording")) return;
    const t = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(t);
  }, [phase, sub]);

  // A simple input level meter, so the candidate can see the microphone is working.
  useEffect(() => {
    if (phase !== "test" || !streamRef.current) return;
    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    ctx.createMediaStreamSource(streamRef.current).connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    let frame = 0;
    const tick = () => {
      analyser.getByteTimeDomainData(data);
      let peak = 0;
      for (const v of data) peak = Math.max(peak, Math.abs(v - 128));
      setLevel(Math.min(1, peak / 64));
      frame = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(frame);
      void ctx.close();
    };
  }, [phase]);

  async function start() {
    setMicError("");
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setMicError("Bu tarayıcı ses kaydını desteklemiyor. Güncel Chrome, Edge, Firefox ya da Safari kullan.");
      return;
    }
    try {
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    } catch {
      setMicError("Mikrofona erişilemedi. Tarayıcının adres çubuğundan bu site için mikrofon iznini aç ve tekrar dene.");
      return;
    }
    setRecordings([]);
    setNotes("");
    setSend({ status: "idle" });
    setPhase("test");
    runStep(0);
  }

  function finishAnswer() {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
  }

  async function sendToTeacher() {
    if (!consent || recordings.length !== prompts.length || recordings.some((r) => !r)) return;
    setSend({ status: "sending", done: 0 });
    const files = recordings.map((r) => ({ contentType: baseAudioType(r.blob.type || "audio/webm"), size: r.blob.size }));
    const start = await requestSpeakingUploadsAction(testId, files);
    if (!start.ok) return setSend({ status: "error", message: start.message });
    for (const [i, up] of start.uploads.entries()) {
      const res = await fetch(up.url, { method: "PUT", headers: { "content-type": up.contentType }, body: recordings[i].blob }).catch(() => null);
      if (!res?.ok) return setSend({ status: "error", message: "Bir kayıt yüklenemedi. İnternet bağlantını kontrol edip tekrar dene." });
      setSend({ status: "sending", done: i + 1 });
    }
    const saved = await submitSpeakingAction(testId, consent, start.uploads.map((u, i) => ({ key: u.key, seconds: recordings[i].seconds })));
    setSend(saved.ok ? { status: "sent", id: saved.id } : { status: "error", message: saved.message });
  }

  // ---------- intro ----------
  if (phase === "intro") {
    return (
      <div className="fixed inset-0 z-[90] overflow-y-auto bg-[color:var(--background)]">
        {header()}
        <div className="mx-auto max-w-2xl px-5 py-12">
          <p lang="en" className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{testTitle}</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.02em]">{toefl ? "TOEFL iBT Speaking" : "IELTS Speaking"}</h1>
          <p className="mt-1 text-sm font-bold text-[color:var(--muted)]">Time: about {module.minutes} minutes · 3 parts</p>
          <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm leading-7">
            <p className="font-extrabold">{toefl ? "SPEAKING SECTION DIRECTIONS" : "INSTRUCTIONS TO CANDIDATES"}</p>
            {toefl ? (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Listen and Repeat: you will hear seven sentences, one at a time. Repeat each sentence exactly as you hear it. You hear each sentence only once.</li>
                <li>Take an Interview: an interviewer asks four questions. You have 45 seconds to answer each one.</li>
                <li>Your answer is recorded straight after each recording. Press “Finish answer” when you have finished speaking.</li>
                <li>Use headphones if you can, and find a quiet room.</li>
              </ul>
            ) : (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>The examiner asks each question aloud. Your answer is recorded straight after the question.</li>
                <li>Part 1: short answers about yourself. Part 2: one minute to prepare, then speak for up to two minutes. Part 3: a discussion.</li>
                <li>Each answer has a time limit. Press “Finish answer” when you have finished speaking.</li>
                <li>Use headphones if you can, and find a quiet room.</li>
              </ul>
            )}
            <p className={`mt-4 rounded-xl bg-[color:var(--brand-soft)] px-4 py-3 text-[13px] font-semibold ${toefl ? "hidden" : ""}`}>
              Sonunda kayıtlarını örnek cevaplarla karşılaştırabilirsin. İstersen kayıtları bir Netfener öğretmenine gönderip dört kriterde band puanı ve yazılı geri bildirim alabilirsin
              {signedIn ? "." : " (bunun için testten önce giriş yapmalısın; kayıtlar sayfadan çıkınca silinir)."}
            </p>
          </div>
          {micError ? <p className="mt-4 text-sm font-semibold text-[color:var(--danger)]">{micError}</p> : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={start} className="primary-button"><Mic size={18} aria-hidden="true" /> Allow microphone and start</button>
            {!signedIn && !toefl ? <Link href={signInHref} className="secondary-button">Önce giriş yap</Link> : null}
            <Link href={libraryHref} className="secondary-button">Kütüphaneye dön</Link>
          </div>
        </div>
      </div>
    );
  }

  // ---------- review ----------
  if (phase === "done") {
    const complete = recordings.length === prompts.length && recordings.every(Boolean);
    return (
      <div className="fixed inset-0 z-[90] overflow-y-auto bg-[color:var(--background)]">
        {header()}
        <div className="mx-auto max-w-3xl px-5 py-10">
          <p lang="en" className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{testTitle}</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.02em]">Speaking tamamlandı</h1>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
            {toefl ? "Kayıtlarını dinle: Listen and Repeat’te cümleyi kelimesi kelimesine tekrar edebildin mi, Take an Interview’da örnek cevaplarla karşılaştır." : "Kayıtlarını dinle, örnek cevaplarla karşılaştır ve aşağıdaki band rehberiyle kendini değerlendir."}
          </p>

          <section className={`mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 ${toefl ? "hidden" : ""}`}>
            <p className="font-extrabold">Öğretmen değerlendirmesi</p>
            {!teacherReview ? (
              <p className="mt-2 text-sm text-[color:var(--muted)]">Öğretmen değerlendirmesi şu anda kapalı. Kayıtlarını bu sayfada dinleyebilirsin.</p>
            ) : !signedIn ? (
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Kayıtları öğretmene göndermek için giriş yapmış olman gerekiyor. <Link href={signInHref} className="font-bold text-[color:var(--accent)] underline">Giriş yap</Link> ve testi yeniden çöz.
              </p>
            ) : send.status === "sent" ? (
              <p className="mt-2 text-sm font-semibold text-[color:var(--success)]">
                Gönderildi. Öğretmenin değerlendirince bildirim alacaksın. <Link href={`/dashboard/ielts-speaking/${send.id}`} className="underline">Gönderimini gör</Link>
              </p>
            ) : (
              <>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Bir Netfener öğretmeni kayıtlarını dinler; dört kriterde band puanı ve yazılı geri bildirim verir.</p>
                <label className="mt-3 flex items-start gap-3 text-sm leading-6">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-[color:var(--accent)]" />
                  <span>
                    Ses kayıtlarımın değerlendirme amacıyla Netfener öğretmenleriyle paylaşılmasını ve hesabımda saklanmasını onaylıyorum. Gönderimi istediğim zaman silebilirim. Ayrıntılar için{" "}
                    <Link href="/legal/aydinlatma-metni" className="underline">Aydınlatma Metni</Link>.
                  </span>
                </label>
                {send.status === "error" ? <p className="mt-2 text-sm font-semibold text-[color:var(--danger)]">{send.message}</p> : null}
                <button type="button" onClick={sendToTeacher} disabled={!consent || !complete || send.status === "sending"} className="primary-button mt-3">
                  <Send size={16} aria-hidden="true" />
                  {send.status === "sending" ? `Yükleniyor… ${send.done ?? 0}/${prompts.length}` : "Öğretmene gönder"}
                </button>
              </>
            )}
          </section>

          {module.parts.map((p, pi) => (
            <section key={pi} className="mt-8">
              <h2 className="text-xl font-black">{p.title}</h2>
              {p.cueCard ? <CueCard card={p.cueCard} /> : null}
              <ol className="mt-3 space-y-4">
                {prompts.map((q, i) =>
                  q.part !== pi ? null : (
                    <li key={i} className="rounded-xl border border-[color:var(--border)] p-4">
                      <p className="text-[15px] font-semibold">{q.text}</p>
                      {recordings[i] ? (
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <audio controls src={recordings[i].url} className="h-10 max-w-full" />
                          <span className="text-xs font-bold text-[color:var(--muted)]">{clock(recordings[i].seconds)} / {clock(q.seconds)}</span>
                        </div>
                      ) : (
                        <p className="mt-2 text-sm text-[color:var(--muted)]">Kayıt yok.</p>
                      )}
                      <details className="mt-3">
                        <summary className="cursor-pointer text-sm font-bold text-[color:var(--accent)]">{p.hideText ? "Duyduğun cümle" : "Örnek cevap"}</summary>
                        <p className="mt-2 text-sm leading-7">{q.sample}</p>
                      </details>
                    </li>
                  ),
                )}
              </ol>
            </section>
          ))}

          {toefl ? (
            <section className="mt-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-sm leading-6">
              <h2 className="text-xl font-black">Kendini değerlendir</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li><b>Listen and Repeat:</b> Cümleyi eksiksiz ve doğru sırayla tekrarladın mı? Vurgu ve tonlama duyduğuna benziyor mu?</li>
                <li><b>Take an Interview:</b> Soruyu doğrudan yanıtladın mı? Bir neden ve somut bir örnek verdin mi?</li>
                <li>45 saniyeyi verimli kullandın mı? Uzun duraksamalar ve “umm” sesleri az mı?</li>
                <li>Telaffuzun dinleyen için kolay anlaşılır mı? Dil bilgisi hataları anlamı bozuyor mu?</li>
              </ul>
            </section>
          ) : null}
          <section className={`mt-10 ${toefl ? "hidden" : ""}`}>
            <h2 className="text-xl font-black">Band rehberi</h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">IELTS Speaking dört kriterle puanlanır. Kayıtlarını dinlerken hangi satır sana en çok benziyor?</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] overflow-hidden rounded-xl border border-[color:var(--border)] text-sm">
                <thead className="bg-[color:var(--surface)] text-left">
                  <tr>
                    <th className="px-3 py-2">Band</th>
                    {SPEAKING_CRITERIA.map((c) => <th key={c.key} className="px-3 py-2">{c.name}<span className="block text-xs font-semibold text-[color:var(--muted)]">{c.tr}</span></th>)}
                  </tr>
                </thead>
                <tbody>
                  {SPEAKING_BAND_GUIDE.map((row) => (
                    <tr key={row.band} className="border-t border-[color:var(--border)] align-top">
                      <td className="px-3 py-2 font-black">{row.band}</td>
                      {SPEAKING_CRITERIA.map((c) => <td key={c.key} className="px-3 py-2 leading-6">{row.points[c.key]}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={libraryHref} className="primary-button">Kütüphaneye dön</Link>
            <button type="button" className="secondary-button" onClick={() => { setPhase("intro"); setConsent(false); }}>Tekrar çöz</button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- test ----------
  const left = (deadline - now) / 1000;
  const elapsed = (now - startedAt) / 1000;
  const ask = step.kind === "ask" ? step : null;
  const canFinish = sub === "recording" && ask !== null && elapsed >= ask.minSeconds;
  const showCard = Boolean(part.cueCard) && (step.kind === "prep" || (ask !== null && ask.seconds >= 90));

  return (
    <div className="fixed inset-0 z-[90] flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
      {header(

        <div className="flex items-center gap-3 text-sm font-extrabold tabular-nums">
          {sub === "prep" ? <span>Preparation {clock(left)}</span> : sub === "recording" ? <span className="text-red-300">● Recording {clock(left)}</span> : <span className="inline-flex items-center gap-1.5"><Volume2 size={16} aria-hidden="true" className="animate-pulse" /> Examiner</span>}
          <span className="h-2 w-20 overflow-hidden rounded-full bg-white/15" aria-hidden="true"><span className="block h-full bg-emerald-400 transition-[width]" style={{ width: `${Math.round(level * 100)}%` }} /></span>
        </div>
      )}

      <div className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3">
        <p className="text-sm font-extrabold">{part.title}</p>
        <p className="text-sm text-[color:var(--muted)]">
          {sub === "examiner" ? "Listen to the examiner." : sub === "prep" ? "Prepare your talk. You can make notes." : "Speak now. Your answer is being recorded."}
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {showCard && part.cueCard ? (
            <div className="w-full text-left">
              <CueCard card={part.cueCard} />
              <label htmlFor="ielts-sp-notes" className="mt-4 block text-sm font-bold">Notes</label>
              <textarea
                id="ielts-sp-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                readOnly={step.kind !== "prep"}
                rows={5}
                className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-sm outline-none focus:border-[color:var(--accent)]"
              />
            </div>
          ) : (
            <div className={`grid size-28 place-items-center rounded-full ${sub === "recording" ? "bg-red-500/10 text-red-500" : "bg-[color:var(--brand-soft)] text-[color:var(--accent)]"}`}>
              {sub === "recording" ? <Mic size={44} aria-hidden="true" className="animate-pulse" /> : <Volume2 size={44} aria-hidden="true" />}
            </div>
          )}

          {ask && !part.hideText ? (
            <div className="mt-6">
              <button type="button" onClick={() => setShowQuestion((s) => !s)} className="inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--muted)]">
                {showQuestion ? <EyeOff size={15} aria-hidden="true" /> : <Eye size={15} aria-hidden="true" />} {showQuestion ? "Hide question" : "Show question"}
              </button>
              {showQuestion ? <p className="mt-2 text-lg font-semibold">{prompts[ask.index].text}</p> : null}
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {sub === "prep" ? <button type="button" onClick={() => advance(stepIdx)} className="secondary-button">I&apos;m ready to speak</button> : null}
            {sub === "recording" ? (
              <button type="button" onClick={finishAnswer} disabled={!canFinish} className="primary-button">
                <Check size={18} aria-hidden="true" /> Finish answer
              </button>
            ) : null}
          </div>
          {sub === "recording" && ask && !canFinish ? <p className="mt-2 text-xs text-[color:var(--muted)]">Keep going: try to speak for at least {ask.minSeconds} seconds.</p> : null}
        </div>
      </div>

      <footer className="flex items-center gap-2 border-t border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-xs font-bold text-[color:var(--muted)]">
        {module.parts.map((p, i) => (
          <Fragment key={i}>
            {i > 0 ? <span aria-hidden="true">›</span> : null}
            <span className={i === step.part ? "text-[color:var(--foreground)]" : ""}>{p.title}</span>
          </Fragment>
        ))}
        <span className="ml-auto">{recordings.filter(Boolean).length} / {prompts.length} answers</span>
      </footer>
    </div>
  );
}

function CueCard({ card }: { card: NonNullable<SpeakingModule["parts"][number]["cueCard"]> }) {
  return (
    <div className="mt-3 rounded-xl border-2 border-[color:var(--foreground)]/70 bg-[color:var(--surface)] p-5 text-left">
      <p className="text-[15px] font-extrabold">{card.topic}</p>
      <p className="mt-3 text-sm">You should say:</p>
      <ul className="mt-1 space-y-0.5 pl-5 text-sm">
        {card.points.map((pt) => <li key={pt} className={pt.startsWith("and ") ? "-ml-5" : "list-disc"}>{pt}</li>)}
      </ul>
    </div>
  );
}
