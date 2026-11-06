"use client";

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Flag, Highlighter, Maximize2, Minimize2, Volume2, Wifi } from "lucide-react";
import type { IeltsModule, QuestionGroup, QuestionPart, WritingTask } from "@/content/ielts-tests/types";

type Props = { testTitle: string; module: IeltsModule; candidate: string; libraryHref: string };
type Phase = "intro" | "test" | "done";

const LETTERS = ["A", "B", "C", "D", "E"];
const TFNG = ["TRUE", "FALSE", "NOT GIVEN"] as const;
const YNNG = ["YES", "NO", "NOT GIVEN"] as const;
const MODULE_NAME = { listening: "Listening", reading: "Reading", writing: "Writing" } as const;

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,]$/, "");
const wordCount = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

function groupNumbers(g: QuestionGroup) {
  return g.kind === "notes" ? g.gaps.map((x) => x.n) : g.items.map((x) => x.n);
}
function partNumbers(p: QuestionPart) {
  return p.groups.flatMap(groupNumbers);
}
function rangeLabel(nums: number[]) {
  return nums.length > 1 ? `Questions ${nums[0]}–${nums[nums.length - 1]}` : `Question ${nums[0]}`;
}
function correctText(g: QuestionGroup, n: number) {
  if (g.kind === "notes") return g.gaps.find((x) => x.n === n)?.answers[0] ?? "";
  const it = g.items.find((x) => x.n === n);
  if (!it) return "";
  return g.kind === "choice" ? LETTERS[(it as { answer: number }).answer] : (it as { answer: string }).answer;
}
function isCorrect(g: QuestionGroup, n: number, given: string | undefined) {
  if (!given) return false;
  if (g.kind === "notes") return (g.gaps.find((x) => x.n === n)?.answers ?? []).some((a) => norm(a) === norm(given));
  return correctText(g, n) === given;
}

/** Rough raw-to-band guide, scaled to a 40-question paper. */
function bandFor(correct: number, total: number) {
  const raw40 = Math.round((correct / Math.max(1, total)) * 40);
  const table: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [6, 3.5], [4, 3], [2, 2.5]];
  return table.find(([min]) => raw40 >= min)?.[1] ?? 0;
}

function formatLeft(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  if (m >= 1) return `${m} minute${m === 1 ? "" : "s"} left`;
  return `${s} seconds left`;
}

export function IeltsRunner({ testTitle, module, candidate, libraryHref }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [partIdx, setPartIdx] = useState(0);
  const [current, setCurrent] = useState<number>(1);
  const [endAt, setEndAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [hideTime, setHideTime] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [full, setFull] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [audio, setAudio] = useState<"idle" | "playing" | "ended" | "unavailable">("idle");
  const playing = audio === "playing";
  const rootRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const passageRef = useRef<HTMLDivElement>(null);

  const isWriting = module.id === "writing";
  const parts = useMemo(() => (module.id === "writing" ? [] : module.parts), [module]);
  const tasks: WritingTask[] = module.id === "writing" ? module.tasks : [];
  const partCount = isWriting ? tasks.length : parts.length;
  const allNumbers = useMemo(() => parts.flatMap(partNumbers), [parts]);
  const left = endAt - now;

  // Lock page scroll while the test window is open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      audioRef.current?.pause();
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    const onFs = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const finish = useCallback(() => {
    setConfirm(false);
    setPhase("done");
    audioRef.current?.pause();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setAudio((a) => (a === "playing" ? "ended" : a));
    if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined);
  }, []);

  // Ticks the clock and ends the test when time runs out.
  useEffect(() => {
    if (phase !== "test") return;
    const t = window.setInterval(() => {
      const at = Date.now();
      setNow(at);
      if (endAt && at >= endAt) finish();
    }, 1000);
    return () => window.clearInterval(t);
  }, [phase, endAt, finish]);

  // The volume slider works while the recording plays.
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  /** Plays each part's recording once, in order, as in the real test: no pause or replay. */
  const playRecordings = useCallback(
    (vol: number) => {
      if (module.id !== "listening") return false;
      const tracks = module.parts.map((p) => p.audio);
      if (!tracks.every(Boolean)) return false;
      audioRef.current?.pause();
      const el = new Audio();
      audioRef.current = el;
      el.preload = "auto";
      el.volume = vol;
      const play = (i: number) => {
        el.src = tracks[i]!;
        // Follow the recording: show the part that is being played.
        setPartIdx(i);
        const first = partNumbers(module.parts[i])[0];
        if (first) setCurrent(first);
        el.onended = () => (i + 1 < tracks.length ? play(i + 1) : setAudio("ended"));
        el.play().catch(() => setAudio("unavailable"));
        // Warm the cache for the next part so it starts without a gap.
        if (i + 1 < tracks.length) void fetch(tracks[i + 1]!).catch(() => undefined);
      };
      el.onerror = () => setAudio("unavailable");
      setAudio("playing");
      play(0);
      return true;
    },
    [module],
  );

  /** Fallback when a part has no recording: the browser reads the script aloud. */
  const playAudio = useCallback(
    (vol: number) => {
      if (module.id !== "listening") return;
      if (playRecordings(vol)) return;
      if (!("speechSynthesis" in window)) {
        setAudio("unavailable");
        return;
      }
      setAudio("playing");
      const synth = window.speechSynthesis;
      synth.cancel();
      const voices = synth.getVoices().filter((v) => v.lang.startsWith("en"));
      const lines = module.parts.flatMap((p) => p.script ?? []).filter((l) => l.who !== "N");
      lines.forEach((line, i) => {
        const u = new SpeechSynthesisUtterance(line.text);
        u.lang = "en-GB";
        u.rate = 0.95;
        u.volume = vol;
        u.pitch = line.who === "A" ? 1.05 : 0.85;
        const voice = voices[line.who === "A" ? 0 : Math.min(1, voices.length - 1)];
        if (voice) u.voice = voice;
        if (i === lines.length - 1) u.onend = () => setAudio("ended");
        synth.speak(u);
      });
    },
    [module, playRecordings],
  );

  function start() {
    const el = rootRef.current;
    if (el?.requestFullscreen) void el.requestFullscreen().catch(() => undefined);
    setEndAt(Date.now() + module.minutes * 60_000);
    setNow(Date.now());
    setPhase("test");
    setCurrent(allNumbers[0] ?? 1);
    playAudio(volume);
  }

  function toggleFull() {
    if (document.fullscreenElement) void document.exitFullscreen().catch(() => undefined);
    else void rootRef.current?.requestFullscreen?.().catch(() => undefined);
  }

  function goTo(n: number) {
    const p = parts.findIndex((x) => partNumbers(x).includes(n));
    if (p >= 0) setPartIdx(p);
    setCurrent(n);
    requestAnimationFrame(() => {
      const el = document.getElementById(`ielts-q-${n}`);
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      (el?.querySelector("input,textarea") as HTMLElement | null)?.focus({ preventScroll: true });
    });
  }

  function step(dir: 1 | -1) {
    if (isWriting) {
      setPartIdx((i) => Math.min(partCount - 1, Math.max(0, i + dir)));
      return;
    }
    const i = allNumbers.indexOf(current);
    const next = allNumbers[i + dir];
    if (next !== undefined) goTo(next);
  }

  function setAnswer(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function toggleFlag(key: string) {
    setFlagged((f) => {
      const next = new Set(f);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  /** Wraps the selected passage text in a highlight, as on the test screen. */
  function highlight() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    if (!passageRef.current?.contains(range.commonAncestorContainer)) return;
    try {
      const mark = document.createElement("mark");
      mark.className = "rounded-sm bg-yellow-200 text-inherit dark:bg-yellow-500/40";
      range.surroundContents(mark);
      sel.removeAllRanges();
    } catch {
      /* selection crosses paragraphs: ignore */
    }
  }

  const flagKey = isWriting ? `w${partIdx}` : String(current);

  // ---------- intro ----------
  if (phase === "intro") {
    return (
      <div ref={rootRef} className="fixed inset-0 z-[90] overflow-y-auto bg-[color:var(--background)]">
        <TopBar candidate={candidate} />
        <div className="mx-auto max-w-2xl px-5 py-12">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{testTitle}</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.02em]">IELTS {MODULE_NAME[module.id]}</h1>
          <p className="mt-1 text-sm font-bold text-[color:var(--muted)]">Time: {module.minutes} minutes</p>
          <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm leading-7">
            <p className="font-extrabold">INSTRUCTIONS TO CANDIDATES</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {module.id === "listening" ? (
                <>
                  <li>There are four parts. The recording plays once only. You cannot pause or replay it.</li>
                  <li>Before each part you have time to read the questions. Answer them while you listen. Use the volume control in the top bar.</li>
                  <li>At the end you have two minutes to check your answers.</li>
                </>
              ) : null}
              {module.id === "reading" ? <li>Read the text on the left and answer the questions on the right. Select text and press the highlighter to mark it.</li> : null}
              {module.id === "writing" ? <li>Answer both parts. Your word count is shown under each answer.</li> : null}
              <li>Use the question numbers at the bottom of the screen to move between questions. Flag a question with “Review” to come back to it.</li>
              <li>The test ends automatically when time runs out.</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={start} className="primary-button">Start test</button>
            <Link href={libraryHref} className="secondary-button">Kütüphaneye dön</Link>
          </div>
        </div>
      </div>
    );
  }

  // ---------- result ----------
  if (phase === "done") {
    return (
      <div ref={rootRef} className="fixed inset-0 z-[90] overflow-y-auto bg-[color:var(--background)]">
        <TopBar candidate={candidate} />
        <div className="mx-auto max-w-3xl px-5 py-10">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{testTitle}</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.02em]">{MODULE_NAME[module.id]} tamamlandı</h1>
          {isWriting ? <WritingSummary tasks={tasks} answers={answers} /> : <ScoreTable parts={parts} answers={answers} />}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={libraryHref} className="primary-button">Kütüphaneye dön</Link>
            <button type="button" className="secondary-button" onClick={() => { setAnswers({}); setFlagged(new Set()); setPartIdx(0); setPhase("intro"); }}>
              Tekrar çöz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- test ----------
  const part = parts[partIdx];
  const task = tasks[partIdx];

  return (
    <div ref={rootRef} className="fixed inset-0 z-[90] flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)]">
      <TopBar candidate={candidate}>
        <div className="flex items-center gap-2">
          <span className={`min-w-36 text-center text-sm font-extrabold tabular-nums ${left < 5 * 60_000 ? "text-red-300" : ""}`} aria-live="polite">
            {hideTime ? "" : formatLeft(left)}
          </span>
          <IconButton label={hideTime ? "Show time" : "Hide time"} onClick={() => setHideTime((h) => !h)}>{hideTime ? <Eye size={16} /> : <EyeOff size={16} />}</IconButton>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="hidden items-center gap-1 text-xs text-white/70 sm:inline-flex"><Wifi size={14} aria-hidden="true" /> Online</span>
          {module.id === "listening" ? (
            <label className="ml-2 inline-flex items-center gap-1.5 text-xs">
              <Volume2 size={16} aria-hidden="true" className={playing ? "animate-pulse" : ""} />
              <span className="sr-only">Volume</span>
              <input type="range" min={0} max={1} step={0.1} value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-20 accent-white" />
            </label>
          ) : null}
          {module.id === "reading" ? <IconButton label="Highlight selected text" onClick={highlight}><Highlighter size={16} /></IconButton> : null}
          <IconButton label={full ? "Exit full screen" : "Full screen"} onClick={toggleFull}>{full ? <Minimize2 size={16} /> : <Maximize2 size={16} />}</IconButton>
        </div>
      </TopBar>

      {/* part banner */}
      <div className="border-b border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3">
        <p className="text-sm font-extrabold">{isWriting ? task.title : part.title}</p>
        <p className="text-sm text-[color:var(--muted)]">
          {isWriting ? `You should spend about ${task.suggestedMinutes} minutes on this task. Write at least ${task.minWords} words.` : part.intro}
          {module.id === "listening" ? <span className="ml-2 font-semibold">{audio === "playing" ? "· Audio playing" : audio === "unavailable" ? "· Audio is not supported in this browser" : "· Audio finished"}</span> : null}
        </p>
      </div>

      {/* body */}
      <div className="min-h-0 flex-1">
        {module.id === "listening" ? (
          <div className="h-full overflow-y-auto px-5 py-6">
            <div className="mx-auto max-w-3xl space-y-8">
              {part.groups.map((g, i) => <Group key={i} group={g} answers={answers} setAnswer={setAnswer} current={current} setCurrent={setCurrent} />)}
            </div>
          </div>
        ) : module.id === "reading" ? (
          <div className="grid h-full grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div ref={passageRef} className="overflow-y-auto border-b border-[color:var(--border)] px-6 py-6 lg:border-b-0 lg:border-r">
              <h2 className="text-xl font-black">{part.passage?.title}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7">
                {part.passage?.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div className="overflow-y-auto px-6 py-6">
              <div className="space-y-8">
                {part.groups.map((g, i) => <Group key={i} group={g} answers={answers} setAnswer={setAnswer} current={current} setCurrent={setCurrent} />)}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid h-full grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div className="overflow-y-auto border-b border-[color:var(--border)] px-6 py-6 lg:border-b-0 lg:border-r">
              <div className="space-y-3 text-[15px] leading-7">
                {task.prompt.map((p, i) => <p key={i} className={i === 0 ? "font-semibold" : ""}>{p}</p>)}
              </div>
              {task.chart ? <BarChart chart={task.chart} /> : null}
            </div>
            <div className="flex min-h-0 flex-col px-6 py-6">
              <label htmlFor={`ielts-w-${partIdx}`} className="sr-only">Your answer for {task.title}</label>
              <textarea
                id={`ielts-w-${partIdx}`}
                value={answers[`w${partIdx}`] ?? ""}
                onChange={(e) => setAnswer(`w${partIdx}`, e.target.value)}
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="off"
                className="min-h-0 flex-1 resize-none rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-[15px] leading-7 outline-none focus:border-[color:var(--accent)]"
              />
              <p className="mt-2 text-right text-sm font-bold text-[color:var(--muted)]">Word count: {wordCount(answers[`w${partIdx}`] ?? "")}</p>
            </div>
          </div>
        )}
      </div>

      {/* bottom navigation */}
      <nav aria-label="Question navigation" className="flex flex-wrap items-center gap-3 border-t border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2.5">
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={flagged.has(flagKey)} onChange={() => toggleFlag(flagKey)} className="size-4 accent-[color:var(--accent)]" />
          <Flag size={14} aria-hidden="true" /> Review
        </label>
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-2">
          {isWriting
            ? tasks.map((t, i) => (
                <button key={i} type="button" onClick={() => setPartIdx(i)} className={`rounded-md px-3 py-1.5 text-sm font-bold ${i === partIdx ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : "border border-[color:var(--border)]"}`}>
                  {t.title} {flagged.has(`w${i}`) ? "⚑" : ""}
                  <span className="ml-2 text-xs font-semibold opacity-75">{wordCount(answers[`w${i}`] ?? "")} words</span>
                </button>
              ))
            : parts.map((p, pi) => {
                const nums = partNumbers(p);
                const done = nums.filter((n) => answers[n]).length;
                return (
                  <div key={pi} className="flex flex-wrap items-center gap-1.5">
                    <button type="button" onClick={() => goTo(nums[0])} className="mr-1 text-sm font-extrabold">
                      {p.title} <span className="ml-1 font-semibold text-[color:var(--muted)]">{done} of {nums.length}</span>
                    </button>
                    {pi === partIdx
                      ? nums.map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => goTo(n)}
                            aria-label={`Question ${n}${answers[n] ? ", answered" : ""}${flagged.has(String(n)) ? ", flagged for review" : ""}`}
                            aria-current={n === current ? "true" : undefined}
                            className={`relative grid size-8 place-items-center rounded-md border text-sm font-bold transition ${
                              n === current ? "border-[color:var(--accent)] ring-2 ring-[color:var(--accent)]" : "border-[color:var(--border)]"
                            } ${answers[n] ? "bg-[color:var(--foreground)] text-[color:var(--background)]" : ""} ${flagged.has(String(n)) ? "rounded-full" : ""}`}
                          >
                            {n}
                          </button>
                        ))
                      : null}
                  </div>
                );
              })}
        </div>
        <div className="flex items-center gap-1.5">
          <button type="button" onClick={() => step(-1)} aria-label="Previous" className="grid size-9 place-items-center rounded-md border border-[color:var(--border)]"><ArrowLeft size={16} /></button>
          <button type="button" onClick={() => step(1)} aria-label="Next" className="grid size-9 place-items-center rounded-md bg-[color:var(--foreground)] text-[color:var(--background)]"><ArrowRight size={16} /></button>
          <button type="button" onClick={() => setConfirm(true)} className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-md bg-[color:var(--accent)] px-3 text-sm font-bold text-[color:var(--on-accent)]">
            <Check size={16} aria-hidden="true" /> Submit
          </button>
        </div>
      </nav>

      {confirm ? (
        <div className="fixed inset-0 z-[95] grid place-items-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="ielts-confirm">
          <div className="w-full max-w-md rounded-2xl bg-[color:var(--surface)] p-6 shadow-xl">
            <p id="ielts-confirm" className="text-lg font-extrabold">Submit your answers?</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {isWriting
                ? tasks.map((t, i) => `${t.title}: ${wordCount(answers[`w${i}`] ?? "")} words`).join(" · ")
                : `${allNumbers.filter((n) => answers[n]).length} of ${allNumbers.length} questions answered.`}{" "}
              You cannot change your answers after submitting.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button type="button" className="secondary-button" onClick={() => setConfirm(false)}>Back to test</button>
              <button type="button" className="primary-button" onClick={finish}>Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function TopBar({ candidate, children }: { candidate: string; children?: React.ReactNode }) {
  return (
    <header className="flex min-h-12 flex-wrap items-center justify-between gap-3 bg-[#1d2733] px-4 py-2 text-white">
      <div className="flex items-center gap-3">
        <span className="rounded bg-white/10 px-2 py-1 text-xs font-black tracking-wide">NETFENER</span>
        <span className="text-sm font-semibold text-white/85">Candidate: {candidate}</span>
      </div>
      {children}
    </header>
  );
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} title={label} className="grid size-8 place-items-center rounded-md text-white/85 hover:bg-white/10">
      {children}
    </button>
  );
}

type GroupProps = {
  group: QuestionGroup;
  answers: Record<string, string>;
  setAnswer: (k: string, v: string) => void;
  current: number;
  setCurrent: (n: number) => void;
};

function Group({ group, answers, setAnswer, current, setCurrent }: GroupProps) {
  const nums = groupNumbers(group);
  const ring = (n: number) => (n === current ? "ring-2 ring-[color:var(--accent)]/40 rounded-lg" : "");
  return (
    <section>
      <p className="text-base font-extrabold">{rangeLabel(nums)}</p>
      <p className="mt-1 text-sm text-[color:var(--muted)]">{group.instruction}</p>
      {group.kind === "notes" ? (
        <div className="mt-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
          {group.heading ? <p className="mb-3 text-center font-extrabold">{group.heading}</p> : null}
          <ul className="space-y-3 text-[15px] leading-8">
            {group.lines.map((line, i) => (
              <li key={i}>
                {line.split(/\[\[(\d+)\]\]/).map((piece, j) => {
                  if (j % 2 === 0) return <Fragment key={j}>{piece}</Fragment>;
                  const n = Number(piece);
                  return (
                    <span key={j} id={`ielts-q-${n}`} className={`mx-1 inline-flex ${ring(n)}`}>
                      <input
                        aria-label={`Question ${n}`}
                        placeholder={String(n)}
                        value={answers[n] ?? ""}
                        onFocus={() => setCurrent(n)}
                        onChange={(e) => setAnswer(String(n), e.target.value)}
                        autoComplete="off"
                        spellCheck={false}
                        className="h-8 w-40 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-2 text-center text-sm font-semibold outline-none placeholder:font-bold placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)]"
                      />
                    </span>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ol className="mt-4 space-y-5">
          {group.items.map((it) => {
            const fixed = group.kind === "tfng" ? TFNG : group.kind === "ynng" ? YNNG : null;
            const options = fixed ? [...fixed] : (it as { options: string[] }).options;
            return (
              <li key={it.n} id={`ielts-q-${it.n}`} className={`p-1 ${ring(it.n)}`}>
                <p className="text-[15px] font-semibold"><span className="mr-2 font-black">{it.n}</span>{it.text}</p>
                <div className="mt-2 grid gap-1.5" role="radiogroup" aria-label={`Question ${it.n}`}>
                  {options.map((opt, oi) => {
                    const value = fixed ? opt : LETTERS[oi];
                    const checked = answers[it.n] === value;
                    return (
                      <label key={oi} className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-2 text-sm ${checked ? "border-[color:var(--accent)] bg-[color:var(--brand-soft)]" : "border-[color:var(--border)]"}`}>
                        <input type="radio" name={`q-${it.n}`} checked={checked} onFocus={() => setCurrent(it.n)} onChange={() => { setCurrent(it.n); setAnswer(String(it.n), value); }} className="mt-0.5 accent-[color:var(--accent)]" />
                        {fixed ? <span className="font-bold">{opt}</span> : <span><span className="mr-1.5 font-black">{LETTERS[oi]}</span>{opt}</span>}
                      </label>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}

function BarChart({ chart }: { chart: NonNullable<WritingTask["chart"]> }) {
  const max = Math.max(...chart.rows.flatMap((r) => r.values)) * 1.15;
  const W = 420, H = 230, pad = 34, bw = 26;
  const slot = (W - pad * 2) / chart.rows.length;
  return (
    <figure className="mt-6 rounded-xl border border-[color:var(--border)] bg-white p-4 text-slate-800">
      <figcaption className="text-center text-sm font-extrabold">{chart.title}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 w-full" role="img" aria-label={`${chart.title}: ${chart.rows.map((r) => `${r.label} ${r.values[0]}${chart.unit} in ${chart.series[0]}, ${r.values[1]}${chart.unit} in ${chart.series[1]}`).join("; ")}`}>
        {[0, 5, 10, 15].map((t) => {
          const y = H - pad - (t / max) * (H - pad * 2);
          return (
            <g key={t}>
              <line x1={pad} x2={W - 8} y1={y} y2={y} stroke="#e2e8f0" />
              <text x={pad - 6} y={y + 4} fontSize="11" textAnchor="end" fill="#64748b">{t}</text>
            </g>
          );
        })}
        {chart.rows.map((r, i) => {
          const x0 = pad + i * slot + slot / 2 - bw - 2;
          return (
            <g key={r.label}>
              {r.values.map((v, k) => {
                const h = (v / max) * (H - pad * 2);
                return <rect key={k} x={x0 + k * (bw + 4)} y={H - pad - h} width={bw} height={h} rx="3" fill={k === 0 ? "#94a3b8" : "#0f9b8e"} />;
              })}
              <text x={pad + i * slot + slot / 2} y={H - pad + 16} fontSize="12" textAnchor="middle" fill="#334155">{r.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-1 flex justify-center gap-4 text-xs font-semibold">
        <span className="inline-flex items-center gap-1.5"><span className="size-3 rounded-sm bg-[#94a3b8]" /> {chart.series[0]}</span>
        <span className="inline-flex items-center gap-1.5"><span className="size-3 rounded-sm bg-[#0f9b8e]" /> {chart.series[1]}</span>
      </div>
    </figure>
  );
}

function ScoreTable({ parts, answers }: { parts: QuestionPart[]; answers: Record<string, string> }) {
  const rows = parts.flatMap((p) => p.groups.flatMap((g) => groupNumbers(g).map((n) => ({ n, given: answers[n], right: correctText(g, n), ok: isCorrect(g, n, answers[n]) }))));
  const correct = rows.filter((r) => r.ok).length;
  return (
    <>
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-[.12em] text-[color:var(--muted)]">Doğru</p>
          <p className="text-3xl font-black">{correct} / {rows.length}</p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-4">
          <p className="text-xs font-bold uppercase tracking-[.12em] text-[color:var(--muted)]">Tahmini band</p>
          <p className="text-3xl font-black">{bandFor(correct, rows.length).toFixed(1)}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-[color:var(--muted)]">Band, doğru sayısının resmî 40 soruluk ölçekteki yaklaşık karşılığıdır; gerçek sınav puanı değildir.</p>
      <table className="mt-6 w-full overflow-hidden rounded-xl border border-[color:var(--border)] text-sm">
        <thead className="bg-[color:var(--surface)] text-left">
          <tr><th className="px-3 py-2">#</th><th className="px-3 py-2">Senin cevabın</th><th className="px-3 py-2">Doğru cevap</th><th className="px-3 py-2"></th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.n} className="border-t border-[color:var(--border)]">
              <td className="px-3 py-2 font-bold">{r.n}</td>
              <td className="px-3 py-2">{r.given || <span className="text-[color:var(--muted)]">—</span>}</td>
              <td className="px-3 py-2 font-semibold">{r.right}</td>
              <td className={`px-3 py-2 font-black ${r.ok ? "text-emerald-600" : "text-red-600"}`}>{r.ok ? "✓" : "✗"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function WritingSummary({ tasks, answers }: { tasks: WritingTask[]; answers: Record<string, string> }) {
  return (
    <div className="mt-6 space-y-4">
      {tasks.map((t, i) => {
        const words = wordCount(answers[`w${i}`] ?? "");
        return (
          <div key={i} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
            <p className="font-extrabold">{t.title}: {words} words</p>
            <p className={`mt-1 text-sm ${words >= t.minWords ? "text-emerald-600" : "text-red-600"}`}>
              {words >= t.minWords ? `En az ${t.minWords} kelime şartı karşılandı.` : `En az ${t.minWords} kelime gerekiyor; ${t.minWords - words} kelime eksik.`}
            </p>
          </div>
        );
      })}
      <p className="text-sm text-[color:var(--muted)]">Yazılarını puanlatmak için metni kopyalayıp <Link href="/dashboard/yazma-geri-bildirim" className="font-bold underline">Yazma geri bildirimi</Link> sayfasına yapıştırabilirsin.</p>
    </div>
  );
}
