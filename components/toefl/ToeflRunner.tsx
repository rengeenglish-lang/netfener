"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Headphones, Volume2 } from "lucide-react";
import type {
  AcademicDiscussion,
  AcademicPassage,
  AdaptiveSection,
  BuildSentence,
  ChooseResponse,
  CompleteTheWords,
  DailyLife,
  ListeningSet,
  ListeningTask,
  ReadingTask,
  Stage,
  WritingSection,
} from "@/content/toefl-tests/types";
import { practiceBand, wordGaps } from "@/content/toefl-tests/registry";
import { ToeflBar } from "@/components/toefl/ToeflChrome";

export type ToeflSectionData =
  | { id: "reading"; data: AdaptiveSection<ReadingTask> }
  | { id: "listening"; data: AdaptiveSection<ListeningTask> }
  | { id: "writing"; data: WritingSection };

type Props = { testTitle: string; section: ToeflSectionData; libraryHref: string };

type StageKey = "s1" | "s2e" | "s2h";
const STAGE_NAME: Record<StageKey, string> = { s1: "Part 1", s2e: "Part 2", s2h: "Part 2" };

type Screen =
  | { kind: "cw"; task: CompleteTheWords; t: number }
  | { kind: "read"; task: DailyLife | AcademicPassage; t: number; q: number }
  | { kind: "cr"; task: ChooseResponse; t: number }
  | { kind: "listen"; task: ListeningSet; t: number }
  | { kind: "lq"; task: ListeningSet; t: number; q: number };

const key = (stage: StageKey, t: number, q: number | string) => `${stage}:${t}:${q}`;
const LETTERS = ["A", "B", "C", "D"];
const words = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const SECTION_LABEL = { reading: "Reading", listening: "Listening", writing: "Writing" } as const;

function screensFor(tasks: (ReadingTask | ListeningTask)[]): Screen[] {
  const out: Screen[] = [];
  tasks.forEach((task, t) => {
    if (task.kind === "complete-words") out.push({ kind: "cw", task, t });
    else if (task.kind === "daily-life" || task.kind === "academic") task.questions.forEach((_, q) => out.push({ kind: "read", task, t, q }));
    else if (task.kind === "choose-response") out.push({ kind: "cr", task, t });
    else {
      out.push({ kind: "listen", task, t });
      task.questions.forEach((_, q) => out.push({ kind: "lq", task, t, q }));
    }
  });
  return out;
}

/** Every scored item of a stage: its answer key, what was expected, and a short label for the results. */
function itemsOf(stage: StageKey, tasks: (ReadingTask | ListeningTask)[]) {
  const out: { key: string; expected: string; shown: string; label: string; isText: boolean }[] = [];
  tasks.forEach((task, t) => {
    if (task.kind === "complete-words") wordGaps(task.text).forEach((g, i) => out.push({ key: key(stage, t, i), expected: g.missing.toLowerCase(), shown: `${g.shown}${g.missing}`, label: `${task.title}: ${g.shown}___`, isText: true }));
    else if (task.kind === "choose-response") out.push({ key: key(stage, t, 0), expected: String(task.answer), shown: task.options[task.answer], label: `“${task.line}”`, isText: false });
    else task.questions.forEach((q, i) => out.push({ key: key(stage, t, i), expected: String(q.answer), shown: q.options[q.answer], label: q.text, isText: false }));
  });
  return out;
}

/** A fixed shuffle for Build a Sentence, never the correct order. */
function shuffled(n: number, seed: number) {
  const order = Array.from({ length: n }, (_, i) => i);
  let x = seed * 9301 + 49297;
  for (let i = n - 1; i > 0; i--) {
    x = (x * 9301 + 49297) % 233280;
    const j = Math.floor((x / 233280) * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  if (order.every((v, i) => v === i)) order.reverse();
  return order;
}

export function ToeflRunner(props: Props) {
  return props.section.id === "writing" ? <WritingRunner {...props} data={props.section.data} /> : <AdaptiveRunner {...props} />;
}

// =====================================================================
// Reading and Listening: two-stage adaptive
// =====================================================================

function AdaptiveRunner({ testTitle, section, libraryHref }: Props) {
  const isListening = section.id === "listening";
  const data = section.data as AdaptiveSection<ReadingTask | ListeningTask>;
  const label = SECTION_LABEL[section.id];

  const [phase, setPhase] = useState<"intro" | "stage" | "between" | "done">("intro");
  const [stage, setStage] = useState<StageKey>("s1");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [endAt, setEndAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [hideTime, setHideTime] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [heard, setHeard] = useState<Record<string, boolean>>({});
  const [confirmEnd, setConfirmEnd] = useState(false);
  const [route, setRoute] = useState<"easier" | "harder">("harder");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef(0);
  const stageRef = useRef<StageKey>("s1");
  const answersRef = useRef<Record<string, string>>({});

  const stageData = (k: StageKey): Stage<ReadingTask | ListeningTask> => (k === "s1" ? data.stage1 : k === "s2e" ? data.easier : data.harder);
  const screens = useMemo(() => screensFor(stageData(stage).tasks), [stage, data]); // eslint-disable-line react-hooks/exhaustive-deps
  const screen = screens[Math.min(idx, screens.length - 1)];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(timerRef.current);
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (phase !== "stage") return;
    const t = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(t);
  }, [phase]);

  function play(src: string | undefined, onEnd: () => void) {
    audioRef.current?.pause();
    if (!src) return onEnd();
    const a = new Audio(src);
    a.volume = volume;
    audioRef.current = a;
    a.onended = onEnd;
    a.onerror = onEnd;
    a.play().catch(onEnd);
  }

  /** Shows screen `i` of the current stage; listening audio starts on its own. */
  function show(i: number, list: Screen[], k: StageKey) {
    setIdx(i);
    const s = list[i];
    if (!isListening || !s) return;
    if (s.kind === "cr" || s.kind === "listen") {
      const id = `${k}:${s.t}`;
      play(s.task.audio, () => {
        if (stageRef.current !== k) return;
        setHeard((h) => ({ ...h, [id]: true }));
        if (s.kind === "listen") show(i + 1, list, k);
      });
    }
  }

  function startStage(k: StageKey) {
    stageRef.current = k;
    setStage(k);
    setConfirmEnd(false);
    const st = stageData(k);
    const t = Date.now();
    setEndAt(t + st.minutes * 60_000);
    setNow(t);
    setPhase("stage");
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => endStage(k), st.minutes * 60_000);
    show(0, screensFor(st.tasks), k);
  }

  function endStage(k: StageKey) {
    if (stageRef.current !== k) return;
    window.clearTimeout(timerRef.current);
    audioRef.current?.pause();
    setConfirmEnd(false);
    if (k === "s1") {
      const a = answersRef.current;
      const items = itemsOf("s1", data.stage1.tasks);
      const share = items.filter((it) => (it.isText ? (a[it.key] ?? "").trim().toLowerCase() === it.expected : a[it.key] === it.expected)).length / Math.max(1, items.length);
      setRoute(share >= data.routeAt ? "harder" : "easier");
      stageRef.current = "s2h"; // blocks a late timer; the real Stage 2 is set when it starts
      setPhase("between");
    } else {
      stageRef.current = "s1";
      setPhase("done");
    }
  }

  function setAnswer(k: string, v: string) {
    answersRef.current = { ...answersRef.current, [k]: v };
    setAnswers(answersRef.current);
  }

  // ---------- intro ----------
  if (phase === "intro") {
    return (
      <Frame>
        <ToeflBar section={label} onNext={() => startStage("s1")} nextLabel="Begin" />
        <Directions title={`${label} Section`}>
          {isListening ? (
            <>
              <p>In this section, you will hear short sentences, conversations, announcements and academic talks. You will hear each recording only once.</p>
              <p>After each recording, answer the questions. You cannot return to a question after you move on.</p>
              <p>The section has two parts. The second part is chosen based on how you do in the first part. It takes about {data.stage1.minutes + data.harder.minutes} minutes.</p>
              <p className="text-sm">Use the Volume control at the top of the screen. Headphones are recommended.</p>
            </>
          ) : (
            <>
              <p>In this section, you will complete words in a paragraph, read everyday texts, and read a short academic passage.</p>
              <p>For “Complete the Words”, type the missing letters to complete each word. For other questions, choose the best answer.</p>
              <p>The section has two parts. The second part is chosen based on how you do in the first part. It takes about {data.stage1.minutes + data.harder.minutes} minutes. Within each part, you can use Back to review your answers.</p>
            </>
          )}
          <p className="font-bold">Click Begin when you are ready.</p>
        </Directions>
      </Frame>
    );
  }

  // ---------- between stages ----------
  if (phase === "between") {
    const next: StageKey = route === "harder" ? "s2h" : "s2e";
    return (
      <Frame>
        <ToeflBar section={label} onNext={() => startStage(next)} nextLabel="Continue" />
        <Directions title={`${label}: Part 2`}>
          <p>You have finished the first part of the {label} section.</p>
          <p>The next part has a time limit of {stageData(next).minutes} minutes. Click Continue to begin.</p>
        </Directions>
      </Frame>
    );
  }

  // ---------- results ----------
  if (phase === "done") {
    const s2: StageKey = route === "harder" ? "s2h" : "s2e";
    const groups = [
      { name: "Part 1", items: itemsOf("s1", data.stage1.tasks) },
      { name: `Part 2 (${route === "harder" ? "harder" : "easier"} route)`, items: itemsOf(s2, stageData(s2).tasks) },
    ];
    const ok = (it: { key: string; expected: string; isText: boolean }) => (it.isText ? (answers[it.key] ?? "").trim().toLowerCase() === it.expected : answers[it.key] === it.expected);
    const all = groups.flatMap((g) => g.items);
    const correct = all.filter(ok).length;
    const band = practiceBand(correct / Math.max(1, all.length), route);
    return (
      <Frame scroll>
        <ToeflBar section={`${label}: results`} />
        <div className="mx-auto max-w-3xl px-5 py-10">
          <p lang="en" className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{testTitle}</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.02em]">{label} tamamlandı</h1>
          <div className="mt-6 flex flex-wrap gap-4">
            <Stat label="Doğru" value={`${correct} / ${all.length}`} />
            <Stat label="Tahmini band (1–6)" value={band.toFixed(1)} />
            <Stat english label="Part 2" value={route === "harder" ? "Zor" : "Kolay"} />
          </div>
          <p className="mt-2 text-xs leading-5 text-[color:var(--muted)]">
            Band, doğru oranından yaklaşık olarak hesaplanır; gerçek sınavda olduğu gibi Part 1’de iyi yapanlar daha zor Part 2’ye yönlendirilir ve kolay yoldan en fazla 4.5 alınabilir. Resmî TOEFL puanı değildir.
          </p>
          {groups.map((g) => (
            <section key={g.name} className="mt-8">
              <h2 className="text-lg font-black">{g.name}</h2>
              <table className="mt-3 w-full overflow-hidden rounded-xl border border-[color:var(--border)] text-sm">
                <thead className="bg-[color:var(--surface)] text-left">
                  <tr><th className="px-3 py-2">Soru</th><th className="px-3 py-2">Senin cevabın</th><th className="px-3 py-2">Doğru cevap</th><th className="px-3 py-2"></th></tr>
                </thead>
                <tbody>
                  {g.items.map((it) => {
                    const given = answers[it.key];
                    return (
                      <tr key={it.key} className="border-t border-[color:var(--border)] align-top">
                        <td className="max-w-xs px-3 py-2">{it.label}</td>
                        <td className="px-3 py-2">{given === undefined || given === "" ? <span className="text-[color:var(--muted)]">—</span> : it.isText ? given : LETTERS[Number(given)]}</td>
                        <td className="px-3 py-2 font-semibold">{it.isText ? it.shown : `${LETTERS[Number(it.expected)]}. ${it.shown}`}</td>
                        <td className={`px-3 py-2 font-black ${ok(it) ? "text-emerald-600" : "text-red-600"}`}>{ok(it) ? "✓" : "✗"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={libraryHref} className="primary-button">Kütüphaneye dön</Link>
            <button type="button" className="secondary-button" onClick={() => { answersRef.current = {}; setAnswers({}); setHeard({}); setPhase("intro"); }}>Tekrar çöz</button>
          </div>
        </div>
      </Frame>
    );
  }

  // ---------- test ----------
  const st = stageData(stage);
  // Items on each screen: a Complete the Words paragraph holds several; a listening recording holds none.
  const size = (s: Screen) => (s.kind === "cw" ? wordGaps(s.task.text).length : s.kind === "listen" ? 0 : 1);
  const first = screens.slice(0, idx).reduce((n, s) => n + size(s), 0) + 1;
  const itemTotal = screens.reduce((n, s) => n + size(s), 0);
  const counter = screen.kind === "listen" ? "Listening…" : size(screen) > 1 ? `Questions ${first}–${first + size(screen) - 1} of ${itemTotal}` : `Question ${first} of ${itemTotal}`;
  const last = idx >= screens.length - 1;
  const answerKey = screen.kind === "read" || screen.kind === "lq" ? key(stage, screen.t, screen.q) : screen.kind === "cr" ? key(stage, screen.t, 0) : "";
  const crHeard = screen.kind === "cr" && heard[`${stage}:${screen.t}`];
  const needsAnswer = isListening && (screen.kind === "lq" || screen.kind === "cr");
  const nextDisabled = (isListening && screen.kind === "listen") || (screen.kind === "cr" && !crHeard) || (needsAnswer && answers[answerKey] === undefined);

  function next() {
    if (last) {
      if (isListening) endStage(stage);
      else setConfirmEnd(true);
      return;
    }
    show(idx + 1, screens, stage);
  }

  return (
    <Frame>
      <ToeflBar
        section={`${label} · ${STAGE_NAME[stage]}`}
        counter={counter}
        timeLeft={(endAt - now) / 1000}
        hideTime={hideTime}
        onToggleTime={() => setHideTime((h) => !h)}
        volume={isListening ? volume : undefined}
        onVolume={isListening ? setVolume : undefined}
        onBack={isListening ? undefined : () => setIdx((i) => Math.max(0, i - 1))}
        backDisabled={idx === 0}
        onNext={next}
        nextDisabled={nextDisabled}
      />
      <div className="min-h-0 flex-1 overflow-hidden bg-white text-slate-900">
        {screen.kind === "cw" ? (
          <CompleteWordsScreen task={screen.task} value={(i) => answers[key(stage, screen.t, i)] ?? ""} onChange={(i, v) => setAnswer(key(stage, screen.t, i), v)} />
        ) : screen.kind === "read" ? (
          <ReadingScreen task={screen.task} q={screen.q} value={answers[answerKey]} onChange={(v) => setAnswer(answerKey, v)} />
        ) : screen.kind === "listen" ? (
          <ListeningScreen title={screen.task.title} kind={screen.task.kind} />
        ) : screen.kind === "cr" ? (
          <div className="mx-auto max-w-2xl px-6 py-10">
            <p className="text-sm font-bold text-slate-500">Listen and choose a response</p>
            <p className="mt-1 text-sm text-slate-600">Choose the best response to what you hear.</p>
            {crHeard ? (
              <Options options={screen.task.options} value={answers[answerKey]} onChange={(v) => setAnswer(answerKey, v)} />
            ) : (
              <div className="mt-10 flex items-center gap-3 text-slate-500"><Volume2 className="animate-pulse" aria-hidden="true" /> Listening…</div>
            )}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl px-6 py-10">
            <p className="text-sm font-bold text-slate-500">{screen.task.title}</p>
            <p className="mt-3 text-[17px] font-semibold">{screen.task.questions[screen.q].text}</p>
            <Options options={screen.task.questions[screen.q].options} value={answers[answerKey]} onChange={(v) => setAnswer(answerKey, v)} />
          </div>
        )}
      </div>
      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-500">
        {testTitle} · {label} {STAGE_NAME[stage]} · {st.minutes} minutes
      </footer>
      {confirmEnd ? (
        <Modal>
          <p className="text-lg font-black">End this part?</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">You have reached the end of {STAGE_NAME[stage]}. Once you continue, you cannot return to these questions.</p>
          <div className="mt-5 flex justify-end gap-3">
            <button type="button" className="secondary-button" onClick={() => setConfirmEnd(false)}>Return</button>
            <button type="button" className="primary-button" onClick={() => endStage(stage)}>Continue</button>
          </div>
        </Modal>
      ) : null}
    </Frame>
  );
}

function CompleteWordsScreen({ task, value, onChange }: { task: CompleteTheWords; value: (i: number) => string; onChange: (i: number, v: string) => void }) {
  const pieces = task.text.split(/(\w*\{\{\w+\}\})/g);
  // The gap number of each piece (or -1 for plain text), worked out before rendering.
  const gapNo = pieces.map((p, i) => (/^\w*\{\{\w+\}\}$/.test(p) ? pieces.slice(0, i).filter((x) => /^\w*\{\{\w+\}\}$/.test(x)).length : -1));
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <p className="text-sm font-bold text-slate-500">Complete the words</p>
        <p className="mt-1 text-sm text-slate-600">Fill in the missing letters in the paragraph.</p>
        <h2 className="mt-6 text-lg font-black">{task.title}</h2>
        <p className="mt-3 text-[17px] leading-[2.6rem]">
          {pieces.map((piece, i) => {
            const m = piece.match(/^(\w*)\{\{(\w+)\}\}$/);
            if (!m) return <Fragment key={i}>{piece}</Fragment>;
            const g = gapNo[i];
            return (
              <span key={i} className="whitespace-nowrap">
                {m[1]}
                <input
                  aria-label={`Complete the word beginning “${m[1]}”`}
                  value={value(g)}
                  maxLength={m[2].length}
                  onChange={(e) => onChange(g, e.target.value.replace(/[^a-zA-Z]/g, ""))}
                  autoComplete="off"
                  spellCheck={false}
                  style={{ width: `${m[2].length * 0.85 + 0.8}em` }}
                  className="mx-0.5 border-b-2 border-dashed border-slate-400 bg-sky-50 px-1 font-mono text-[16px] tracking-[0.2em] outline-none focus:border-sky-700"
                />
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

function ReadingScreen({ task, q, value, onChange }: { task: DailyLife | AcademicPassage; q: number; value?: string; onChange: (v: string) => void }) {
  const question = task.questions[q];
  return (
    <div className="grid h-full grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div className="overflow-y-auto border-b border-slate-200 px-6 py-6 lg:border-b-0 lg:border-r">
        {task.kind === "daily-life" ? (
          <>
            <p className="text-sm font-bold text-slate-500">Read in daily life · {task.genre}</p>
            <div className="mt-4 rounded-xl border border-slate-300 bg-slate-50 p-5 text-[15px] leading-7">
              {task.text.map((p, i) => <p key={i} className={`whitespace-pre-line ${i === 0 && p === p.toUpperCase() ? "text-center font-black" : "mt-2"}`}>{p}</p>)}
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-bold text-slate-500">Read an academic passage</p>
            <h2 className="mt-3 text-xl font-black">{task.title}</h2>
            <div className="mt-3 space-y-4 text-[15px] leading-7">{task.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
          </>
        )}
      </div>
      <div className="overflow-y-auto px-6 py-6">
        <p className="text-[17px] font-semibold">{question.text}</p>
        <Options options={question.options} value={value} onChange={onChange} />
      </div>
    </div>
  );
}

function ListeningScreen({ title, kind }: { title: string; kind: ListeningSet["kind"] }) {
  const what = kind === "conversation" ? "Listen to a conversation" : kind === "announcement" ? "Listen to an announcement" : "Listen to an academic talk";
  return (
    <div className="grid h-full place-items-center px-6">
      <div className="text-center">
        <span className="mx-auto grid size-28 place-items-center rounded-full bg-sky-50 text-sky-800"><Headphones size={48} aria-hidden="true" /></span>
        <p className="mt-6 text-sm font-bold uppercase tracking-[.14em] text-slate-500">{what}</p>
        <p className="mt-1 text-xl font-black">{title}</p>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-500"><Volume2 size={16} className="animate-pulse" aria-hidden="true" /> The questions appear when the recording ends.</p>
      </div>
    </div>
  );
}

function Options({ options, value, onChange }: { options: string[]; value?: string; onChange: (v: string) => void }) {
  return (
    <div className="mt-5 grid gap-2" role="radiogroup">
      {options.map((opt, i) => {
        const checked = value === String(i);
        return (
          <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-[15px] ${checked ? "border-sky-700 bg-sky-50" : "border-slate-300 hover:bg-slate-50"}`}>
            <input type="radio" checked={checked} onChange={() => onChange(String(i))} className="mt-1 accent-sky-800" />
            <span>{opt}</span>
          </label>
        );
      })}
    </div>
  );
}

// =====================================================================
// Writing: Build a Sentence, Write an Email, Academic Discussion
// =====================================================================

type WritingPart = "intro" | "build" | "email" | "discussion" | "done";

function WritingRunner({ testTitle, libraryHref, data }: Props & { data: WritingSection }) {
  const [part, setPart] = useState<WritingPart>("intro");
  const [idx, setIdx] = useState(0);
  const [placed, setPlaced] = useState<Record<number, number[]>>({});
  const [email, setEmail] = useState("");
  const [discussion, setDiscussion] = useState("");
  const [endAt, setEndAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [hideTime, setHideTime] = useState(false);
  const timerRef = useRef(0);
  const partRef = useRef<WritingPart>("intro");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (part !== "build" && part !== "email" && part !== "discussion") return;
    const t = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(t);
  }, [part]);

  const NEXT: Record<WritingPart, WritingPart> = { intro: "build", build: "email", email: "discussion", discussion: "done", done: "done" };
  const MINUTES: Partial<Record<WritingPart, number>> = { build: data.buildMinutes, email: data.emailMinutes, discussion: data.discussionMinutes };

  function startPart(p: WritingPart) {
    window.clearTimeout(timerRef.current);
    partRef.current = p;
    setPart(p);
    setIdx(0);
    const minutes = MINUTES[p];
    if (!minutes) return;
    const t = Date.now();
    setEndAt(t + minutes * 60_000);
    setNow(t);
    timerRef.current = window.setTimeout(() => {
      if (partRef.current === p) startPart(NEXT[p]);
    }, minutes * 60_000);
  }

  const buildOk = (i: number) => (placed[i] ?? []).length === data.build[i].chunks.length && (placed[i] ?? []).every((v, j) => v === j);

  if (part === "intro") {
    return (
      <Frame>
        <ToeflBar section="Writing" onNext={() => startPart("build")} nextLabel="Begin" />
        <Directions title="Writing Section">
          <p>The Writing section has three tasks and takes about {data.buildMinutes + data.emailMinutes + data.discussionMinutes} minutes.</p>
          <ul className="list-disc space-y-1 pl-5">
            <li><b>Build a Sentence</b> ({data.build.length} questions, {data.buildMinutes} minutes): put the words in the correct order to make a reply.</li>
            <li><b>Write an Email</b> ({data.emailMinutes} minutes): write an email that does everything listed in the task.</li>
            <li><b>Write for an Academic Discussion</b> ({data.discussionMinutes} minutes): give and support your opinion in an online class discussion.</li>
          </ul>
          <p>Each task has its own time limit. When time runs out, the next task starts automatically.</p>
          <p className="font-bold">Click Begin when you are ready.</p>
        </Directions>
      </Frame>
    );
  }

  if (part === "done") {
    const correct = data.build.filter((_, i) => buildOk(i)).length;
    return (
      <Frame scroll>
        <ToeflBar section="Writing: results" />
        <div className="mx-auto max-w-3xl px-5 py-10">
          <p lang="en" className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{testTitle}</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.02em]">Writing tamamlandı</h1>
          <div className="mt-6 flex flex-wrap gap-4"><Stat english label="Build a Sentence" value={`${correct} / ${data.build.length}`} /></div>

          <section className="mt-8">
            <h2 className="text-lg font-black">Build a Sentence</h2>
            <ol className="mt-3 space-y-2 text-sm">
              {data.build.map((b, i) => (
                <li key={i} className="rounded-lg border border-[color:var(--border)] p-3">
                  <p className="text-[color:var(--muted)]">{b.promptBy}: “{b.prompt}”</p>
                  <p className="mt-1"><span className={`mr-2 font-black ${buildOk(i) ? "text-emerald-600" : "text-red-600"}`}>{buildOk(i) ? "✓" : "✗"}</span>{sentence(b, (placed[i] ?? []).map((c) => b.chunks[c])) || "—"}</p>
                  {buildOk(i) ? null : <p className="mt-1 font-semibold">Doğrusu: {sentence(b, b.chunks)}</p>}
                </li>
              ))}
            </ol>
          </section>

          <WritingReview title="Write an Email" text={email} sample={data.email.sample} checklist={data.email.tasks.map((t) => `Görev: ${t}`).concat(["Uygun bir hitap ve kapanış", "Kibar, açık ve kısa paragraflar"])} />
          <WritingReview title="Write for an Academic Discussion" text={discussion} sample={data.discussion.sample} checklist={["Profesörün sorusuna net bir görüşle başla", "En az bir öğrencinin fikrine atıf yap ve yeni bir fikir ekle", "Görüşünü bir örnek ya da açıklamayla destekle", "Yaklaşık 100 kelime veya daha fazla"]} />

          <p className="mt-6 rounded-xl bg-[color:var(--brand-soft)] px-4 py-3 text-sm font-semibold">
            Email ve tartışma cevaplarını <Link href="/dashboard/yazma-geri-bildirim" className="underline">Yazma geri bildirimi</Link> sayfasına yapıştırarak TOEFL kriterlerine göre tahmini puan ve düzeltmeler alabilirsin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={libraryHref} className="primary-button">Kütüphaneye dön</Link>
            <button type="button" className="secondary-button" onClick={() => { setPlaced({}); setEmail(""); setDiscussion(""); setPart("intro"); }}>Tekrar çöz</button>
          </div>
        </div>
      </Frame>
    );
  }

  const timeLeft = (endAt - now) / 1000;
  const barCommon = { timeLeft, hideTime, onToggleTime: () => setHideTime((h) => !h) };

  if (part === "build") {
    const b = data.build[idx];
    const mine = placed[idx] ?? [];
    const order = shuffled(b.chunks.length, idx + 7);
    const lastQ = idx === data.build.length - 1;
    return (
      <Frame>
        <ToeflBar
          section="Writing · Build a Sentence"
          counter={`Question ${idx + 1} of ${data.build.length}`}
          {...barCommon}
          onBack={() => setIdx((i) => Math.max(0, i - 1))}
          backDisabled={idx === 0}
          onNext={() => (lastQ ? startPart("email") : setIdx((i) => i + 1))}
        />
        <div className="min-h-0 flex-1 overflow-y-auto bg-white px-6 py-8 text-slate-900">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-bold text-slate-500">Make an appropriate sentence.</p>
            <div className="mt-6 flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-100 text-sm font-black text-sky-800">{b.promptBy[0]}</span>
              <p className="rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3 text-[16px]">{b.prompt}</p>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-black text-emerald-800">You</span>
              <div className="flex min-h-14 flex-1 flex-wrap items-center gap-2 rounded-2xl rounded-tl-sm border-2 border-dashed border-slate-300 px-3 py-2">
                {mine.map((c, j) => (
                  <button key={j} type="button" onClick={() => setPlaced((p) => ({ ...p, [idx]: mine.filter((_, k) => k !== j) }))} className="rounded-lg bg-sky-800 px-3 py-1.5 text-[15px] font-semibold text-white" title="Remove">
                    {j === 0 ? cap(b.chunks[c]) : b.chunks[c]}
                  </button>
                ))}
                {Array.from({ length: b.chunks.length - mine.length }, (_, j) => <span key={`e${j}`} className="h-8 w-16 rounded-lg border border-slate-200 bg-slate-50" />)}
                <span className="text-xl font-black text-slate-500">{b.end}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {order.map((c) => (
                <button key={c} type="button" disabled={mine.includes(c)} onClick={() => setPlaced((p) => ({ ...p, [idx]: [...mine, c] }))} className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[15px] font-semibold shadow-sm hover:border-sky-700 disabled:opacity-30">
                  {b.chunks[c]}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">Click the words in order. Click a word in your sentence to remove it.</p>
          </div>
        </div>
      </Frame>
    );
  }

  const isEmail = part === "email";
  return (
    <Frame>
      <ToeflBar section={isEmail ? "Writing · Write an Email" : "Writing · Academic Discussion"} counter={isEmail ? "Task 2 of 3" : "Task 3 of 3"} {...barCommon} onNext={() => startPart(NEXT[part])} nextLabel={isEmail ? "Next" : "Finish"} />
      <div className="grid min-h-0 flex-1 grid-rows-2 bg-white text-slate-900 lg:grid-cols-2 lg:grid-rows-1">
        <div className="overflow-y-auto border-b border-slate-200 px-6 py-6 lg:border-b-0 lg:border-r">
          {isEmail ? <EmailPrompt email={data.email} minutes={data.emailMinutes} /> : <DiscussionPrompt d={data.discussion} minutes={data.discussionMinutes} />}
        </div>
        <div className="flex min-h-0 flex-col px-6 py-6">
          {isEmail ? (
            <div className="mb-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
              <p><span className="font-bold">To:</span> {data.email.to}</p>
              <p><span className="font-bold">Subject:</span> {data.email.subject}</p>
            </div>
          ) : null}
          <label htmlFor="toefl-writing" className="sr-only">Your response</label>
          <textarea
            id="toefl-writing"
            value={isEmail ? email : discussion}
            onChange={(e) => (isEmail ? setEmail(e.target.value) : setDiscussion(e.target.value))}
            spellCheck={false}
            className="min-h-0 w-full flex-1 resize-none rounded-lg border border-slate-300 p-4 text-[15px] leading-7 outline-none focus:border-sky-700"
          />
          <p className="mt-2 text-right text-xs font-bold text-slate-500">Word count: {words(isEmail ? email : discussion)}</p>
        </div>
      </div>
    </Frame>
  );
}

function EmailPrompt({ email, minutes }: { email: WritingSection["email"]; minutes: number }) {
  return (
    <>
      <p className="text-sm font-bold text-slate-500">Write an email · {minutes} minutes</p>
      <p className="mt-4 text-[15px] leading-7">{email.scenario}</p>
      <p className="mt-4 text-[15px] font-semibold">Write an email to {email.to}. In your email, do the following:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px]">{email.tasks.map((t) => <li key={t}>{t}</li>)}</ul>
      <p className="mt-4 text-sm text-slate-500">Write as much as you can and in complete sentences.</p>
    </>
  );
}

function DiscussionPrompt({ d, minutes }: { d: AcademicDiscussion; minutes: number }) {
  return (
    <>
      <p className="text-sm font-bold text-slate-500">Write for an academic discussion · {minutes} minutes</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">Your professor is teaching a class on {d.course.toLowerCase()}. Write a post responding to the professor’s question. In your response, express and support your opinion and make a contribution to the discussion. An effective response will contain at least 100 words.</p>
      <div className="mt-5 rounded-xl border border-slate-300 p-4">
        <p className="text-sm font-black">{d.professor.name}</p>
        <p className="mt-1 text-[15px] leading-7">{d.professor.text}</p>
      </div>
      {d.students.map((s) => (
        <div key={s.name} className="mt-3 ml-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-black">{s.name}</p>
          <p className="mt-1 text-[15px] leading-7">{s.text}</p>
        </div>
      ))}
    </>
  );
}

function WritingReview({ title, text, sample, checklist }: { title: string; text: string; sample: string; checklist: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-black">{title}</h2>
      <p className="mt-1 text-xs font-bold text-[color:var(--muted)]">{words(text)} kelime</p>
      <div className="mt-2 whitespace-pre-wrap rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm leading-7">{text || "—"}</div>
      <p className="mt-3 text-sm font-bold">Kontrol listesi</p>
      <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm">{checklist.map((c) => <li key={c}>{c}</li>)}</ul>
      <details className="mt-3">
        <summary className="cursor-pointer text-sm font-bold text-[color:var(--accent)]">Örnek cevap</summary>
        <p className="mt-2 whitespace-pre-wrap text-sm leading-7">{sample}</p>
      </details>
    </section>
  );
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
function sentence(b: BuildSentence, chunks: string[]) {
  return chunks.length ? `${cap(chunks.join(" "))}${b.end}` : "";
}

// =====================================================================
// Shared bits
// =====================================================================

function Frame({ children, scroll }: { children: React.ReactNode; scroll?: boolean }) {
  return <div className={`fixed inset-0 z-[90] flex flex-col bg-[color:var(--background)] text-[color:var(--foreground)] ${scroll ? "overflow-y-auto" : ""}`}>{children}</div>;
}

function Directions({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto bg-white text-slate-900">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-black">{title}</h1>
        <div className="mt-4 space-y-3 text-[15px] leading-7">{children}</div>
      </div>
    </div>
  );
}

function Stat({ label, value, english }: { label: string; value: string; english?: boolean }) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-4">
      <p lang={english ? "en" : undefined} className="text-xs font-bold uppercase tracking-[.12em] text-[color:var(--muted)]">{label}</p>
      <p className="text-3xl font-black">{value}</p>
    </div>
  );
}

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[95] grid place-items-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-slate-900 shadow-xl">{children}</div>
    </div>
  );
}
