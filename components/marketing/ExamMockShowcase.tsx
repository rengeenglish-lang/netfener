"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Flag, Maximize2, Timer } from "lucide-react";

/** Mock-test counts, read from the content registries on the server so the badges never go stale. */
export type MockCounts = {
  yds: number;
  yokdil: { sosyal: number; saglik: number; fen: number };
  ielts: { academic: number; general: number };
  toefl: number;
  cambridge: { level: string; count: number }[];
};

type ExamId = "yds" | "yokdil" | "ielts" | "toefl" | "cambridge";

const LETTERS = ["A", "B", "C", "D", "E"];

export function ExamMockShowcase({ counts }: { counts: MockCounts }) {
  const yokdil = counts.yokdil.sosyal + counts.yokdil.saglik + counts.yokdil.fen;
  const ielts = counts.ielts.academic + counts.ielts.general;
  const cambridge = counts.cambridge.reduce((s, l) => s + l.count, 0);
  const exams: { id: ExamId; name: string; total: number; unit: string; detail: string; format: string; href: string }[] = [
    { id: "yds", name: "YDS", total: counts.yds, unit: "deneme", detail: "Her deneme 80 soru · 180 dakika", format: "Elektronik sınav görünümü ve optik cevap kâğıdı", href: "/denemeler" },
    { id: "yokdil", name: "YÖKDİL", total: yokdil, unit: "deneme", detail: `Sosyal ${counts.yokdil.sosyal} · Sağlık ${counts.yokdil.saglik} · Fen ${counts.yokdil.fen}`, format: "Alanına göre 80 soruluk deneme, optik cevap kâğıdıyla", href: "/denemeler?sinav=yokdil-sosyal-bilimler" },
    { id: "ielts", name: "IELTS", total: ielts, unit: "tam test", detail: `Academic ${counts.ielts.academic} · General Training ${counts.ielts.general}`, format: "Bilgisayarda IELTS ekranı: metin solda, sorular sağda", href: "/ielts/testler" },
    { id: "toefl", name: "TOEFL", total: counts.toefl, unit: "tam test", detail: "Reading, Listening, Writing ve Speaking", format: "2026 TOEFL iBT formatında, uyarlanabilir bölümlerle", href: "/toefl/testler" },
    { id: "cambridge", name: "Cambridge", total: cambridge, unit: "test", detail: counts.cambridge.map((l) => `${l.level} ${l.count}`).join(" · "), format: "Starters'tan Preliminary'ye beş seviye", href: "/cambridge/testler" },
  ];
  const [active, setActive] = useState<ExamId>("yds");
  const exam = exams.find((e) => e.id === active)!;

  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between gap-3 border-b border-[color:var(--border)] bg-[color:var(--canvas)] px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[color:var(--muted)]">Deneme sınavı ekranı</p>
          <p className="mt-1 text-sm font-semibold" style={{ color: "var(--brand-ink)" }}>{exam.name} · {exam.format}</p>
        </div>
        <p className="shrink-0 text-right">
          <span className="block text-2xl font-black leading-none tabular-nums">{exam.total}</span>
          <span className="text-[11px] font-semibold text-[color:var(--muted)]">{exam.unit}</span>
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto border-b border-[color:var(--border)] px-5 py-3" role="tablist" aria-label="Sınav seç">
        {exams.map((e) => (
          <button
            key={e.id}
            type="button"
            role="tab"
            id={`mock-tab-${e.id}`}
            aria-selected={active === e.id}
            aria-controls="mock-panel"
            onClick={() => setActive(e.id)}
            className={`flex min-h-10 shrink-0 items-center gap-2 rounded-xl px-3.5 text-xs font-semibold transition ${active === e.id ? "" : "bg-[color:var(--canvas)] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"}`}
            style={active === e.id ? { background: "var(--accent)", color: "var(--on-accent)" } : undefined}
          >
            {e.name}
            <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${active === e.id ? "bg-white/20" : "bg-[color:var(--surface)]"}`}>{e.total}</span>
          </button>
        ))}
      </div>

      <div id="mock-panel" role="tabpanel" aria-labelledby={`mock-tab-${active}`} className="p-4 sm:p-5">
        {/* A miniature of the real test screen; decorative, so screen readers get the summary below instead. */}
        <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden rounded-xl border border-slate-300 bg-white text-slate-800 shadow-sm">
          {active === "yds" ? <DenemeScreen title="YDS Deneme 1" passage={YDS_PASSAGE} question={YDS_QUESTION} /> : null}
          {active === "yokdil" ? <DenemeScreen title="YÖKDİL Fen Bilimleri Deneme 1" passage={YOKDIL_PASSAGE} question={YOKDIL_QUESTION} /> : null}
          {active === "ielts" ? <IeltsScreen /> : null}
          {active === "toefl" ? <ToeflScreen /> : null}
          {active === "cambridge" ? <CambridgeScreen counts={counts.cambridge} /> : null}
        </div>
        <p className="sr-only">{exam.name}: {exam.total} {exam.unit}. {exam.detail}. {exam.format}.</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[color:var(--muted)]">{exam.detail}</p>
          <Link href={exam.href} className="primary-button">
            {exam.total} {exam.unit} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        {active === "yokdil" ? (
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold">
            <Link className="underline underline-offset-2" href="/denemeler?sinav=yokdil-sosyal-bilimler">Sosyal Bilimler</Link>
            <Link className="underline underline-offset-2" href="/denemeler?sinav=yokdil-saglik-bilimleri">Sağlık Bilimleri</Link>
            <Link className="underline underline-offset-2" href="/denemeler?sinav=yokdil-fen-bilimleri">Fen Bilimleri</Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}

const YDS_PASSAGE = "Although the first public libraries were established to serve scholars, they gradually ---- institutions open to everyone.";
const YDS_QUESTION = ["became", "have become", "would become", "had become", "are becoming"];
const YOKDIL_PASSAGE = "The telescope was placed in an orbit far from Earth ---- the planet's heat would not affect its instruments.";
const YOKDIL_QUESTION = ["so that", "unless", "although", "whereas", "as if"];

/** YDS and YÖKDİL: the e-sınav bar with the "Kalan süre" clock, the booklet page and the optik form. */
function DenemeScreen({ title, passage, question }: { title: string; passage: string; question: string[] }) {
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto] items-center gap-2 border-b-4 border-[#0f766e] bg-[#0b1f33] px-3 py-2 text-white sm:grid-cols-[1fr_auto_1fr]">
        <div className="min-w-0">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-white/60">Elektronik sınav görünümü</p>
          <p className="truncate text-xs font-extrabold">{title}</p>
          <p className="text-[10px] font-semibold text-white/70">12/80 cevaplandı · Kaydedildi</p>
        </div>
        <div className="flex flex-col items-center rounded-md border-2 border-white/30 bg-black/30 px-2 py-0.5 sm:px-3">
          <span className="flex items-center gap-1 text-[8px] font-extrabold uppercase tracking-[0.2em] opacity-80"><Timer size={9} /> Kalan süre</span>
          <span className="font-mono text-lg font-black leading-none tabular-nums">2:41:07</span>
        </div>
        <div className="hidden justify-end gap-1.5 sm:flex">
          <span className="inline-flex items-center gap-1 rounded-md border border-white/40 px-2 py-1 text-[10px] font-bold"><Maximize2 size={10} /> Tam ekran</span>
          <span className="rounded-md bg-[#dc2626] px-2 py-1 text-[10px] font-extrabold">Sınavı bitir</span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-3 p-3">
        <div className="min-w-0 rounded-lg border border-slate-200 bg-[#fbfaf7] p-2.5 font-serif text-[11.5px] leading-5 sm:p-3 sm:text-[13px] sm:leading-6">
          <p className="mb-1 font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400">Sayfa 1 · Sorular 1–6</p>
          <p className="flex gap-1.5"><b>1.</b><span lang="en">{passage}</span></p>
          <ol className="mt-1.5 space-y-0.5 pl-4">
            {question.map((o, i) => (
              <li key={o} className={`flex gap-2 rounded px-1 ${i === 0 ? "bg-[#ccfbf1]" : ""}`} lang="en">
                <span className="font-bold">{LETTERS[i]})</span>
                {o}
              </li>
            ))}
          </ol>
          <p className="mt-2 hidden gap-1.5 text-slate-400 sm:flex"><b>2.</b><span lang="en">Many species of birds ---- thousands of kilometres…</span></p>
        </div>
        <div className="w-[8.5rem] rounded-lg border-2 border-slate-800 p-2 sm:w-[9.5rem]">
          <p className="text-[10px] font-black tracking-wide">CEVAP KÂĞIDI</p>
          <div className="mt-1.5 flex items-center gap-1 pl-4 text-[8px] font-black text-slate-400">
            {LETTERS.map((l) => <span key={l} className="w-3.5 text-center sm:w-4">{l}</span>)}
          </div>
          <ol className="space-y-0.5">
            {[0, 3, 1, null, 4, null, 2].map((filled, i) => (
              <li key={i} className={`flex items-center gap-1 rounded ${i === 0 ? "bg-[#ccfbf1]" : ""}`}>
                <span className="w-3 text-right text-[8px] font-bold tabular-nums">{i + 1}</span>
                {LETTERS.map((l, k) => (
                  <span key={l} className={`grid size-3.5 place-items-center rounded-full border sm:size-4 ${filled === k ? "border-slate-800 bg-slate-800" : "border-slate-300"}`} />
                ))}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/** IELTS: the dark candidate bar, passage on the left, questions on the right, question navigator at the bottom. */
function IeltsScreen() {
  return (
    <div lang="en">
      <div className="flex items-center justify-between gap-2 bg-[#1d2733] px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-black tracking-wide">NETFENER</span>
          <span className="text-[11px] font-semibold text-white/85">Candidate: Misafir</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold"><Clock size={11} /> 58 minutes left</span>
      </div>
      <div className="border-b border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px]"><b>Part 1</b> <span className="text-slate-500">Read the text and answer questions 1–13.</span></div>
      <div className="grid grid-cols-2 divide-x divide-slate-200">
        <div className="p-3 text-[11.5px] leading-5">
          <p className="mb-1 text-[13px] font-extrabold">Why cities are warmer</p>
          <p className="text-slate-600">On a calm summer evening, the centre of a large city can be several degrees warmer than the countryside only a few kilometres away. The difference is often greatest after sunset, when rural areas cool quickly…</p>
        </div>
        <div className="p-3 text-[11.5px] leading-5">
          <p className="font-extrabold">Questions 1–6</p>
          <p className="text-[10.5px] text-slate-500">Choose TRUE, FALSE or NOT GIVEN.</p>
          {["The difference is usually greatest at midday.", "Dark roofs absorb more energy than light ones."].map((t, i) => (
            <div key={t} className={`mt-1.5 ${i ? "hidden sm:block" : ""}`}>
              <p><b>{i + 1}</b> {t}</p>
              <div className="mt-0.5 flex gap-1">
                {["TRUE", "FALSE", "NOT GIVEN"].map((o, k) => (
                  <span key={o} className={`whitespace-nowrap rounded border px-1.5 py-0.5 text-[9px] font-bold ${(i === 0 && k === 1) || (i === 1 && k === 0) ? "border-[#0f9b8e] bg-[#e2f7f5]" : "border-slate-300"}`}>{o}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 overflow-hidden border-t border-slate-200 bg-slate-50 px-3 py-1.5">
        <span className="mr-1 text-[10px] font-bold">Part 1</span>
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i} className={`grid size-4 shrink-0 place-items-center rounded-sm text-[8px] font-bold ${i < 2 ? "bg-[#1d2733] text-white" : "border border-slate-300 bg-white"}`}>{i + 1}</span>
        ))}
        <span className="ml-1 text-[10px] font-bold text-slate-400">Part 2 · Part 3</span>
      </div>
    </div>
  );
}

/** TOEFL: the blue iBT bar with Back/Next, the counter strip and a Complete the Words task. */
function ToeflScreen() {
  return (
    <div lang="en">
      <div className="flex items-center justify-between gap-2 bg-[#1f3347] px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-black tracking-wider">NETFENER</span>
          <span className="text-[11px] font-extrabold">TOEFL iBT <span className="font-semibold text-white/70">practice</span></span>
          <span className="text-[11px] text-white/60">|</span>
          <span className="text-[11px] font-bold">Reading</span>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-full border border-white/40 px-2.5 py-0.5 text-[10px] font-bold">Back</span>
          <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-[#1f3347]">Next</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#2a4560] px-3 py-1 text-[10px] font-bold text-white">
        <span>Question 3 of 20</span>
        <span className="inline-flex items-center gap-1 tabular-nums"><Clock size={10} /> 14:52</span>
      </div>
      <div className="p-3 text-[12px] leading-6">
        <p className="font-extrabold">Complete the Words</p>
        <p className="text-[10.5px] text-slate-500">Fill in the missing letters in the paragraph.</p>
        <p className="mt-1.5">
          Honeybees communicate the location of food through a pattern of movement kno
          <Gap filled="wn" /> as the waggle dance. The an
          <Gap filled="gle" /> of the dance shows the dire
          <Gap filled="ction" /> of the flowers, wh
          <Gap filled="" /> its length indicates the dist
          <Gap filled="" />…
        </p>
      </div>
      <div className="flex gap-1 border-t border-slate-200 px-3 py-1.5 text-[9px] font-bold text-slate-500">
        {["Reading", "Listening", "Writing", "Speaking"].map((s, i) => (
          <span key={s} className={`rounded-full px-2 py-0.5 ${i === 0 ? "bg-[#1f3347] text-white" : "bg-slate-100"}`}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Gap({ filled }: { filled: string }) {
  return <span className="mx-0.5 inline-block min-w-8 border-b-2 border-[#3b6fed] px-0.5 text-center font-bold text-[#3b6fed]">{filled || " "}</span>;
}

/** Cambridge: the five levels, as the young-learner library shows them, with a picture task. */
function CambridgeScreen({ counts }: { counts: { level: string; count: number }[] }) {
  const colours = ["#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ef4444"];
  return (
    <div>
      <div className="flex items-center justify-between gap-2 bg-[#fef3c7] px-3 py-2">
        <span className="text-[12px] font-black text-amber-900">Pre A1 Starters · Reading &amp; Writing</span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900"><Flag size={10} /> Part 1 of 5</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-3 p-3" lang="en">
        <div className="grid size-16 place-items-center rounded-xl bg-amber-50 text-4xl">🦒</div>
        <div className="text-[12px]">
          <p className="font-bold">Look and read. Put a tick or a cross in the box.</p>
          <p className="mt-1">This is a giraffe.</p>
          <div className="mt-1 flex gap-1.5">
            <span className="grid size-6 place-items-center rounded-md border-2 border-emerald-500 bg-emerald-50 text-xs font-black text-emerald-700">✓</span>
            <span className="grid size-6 place-items-center rounded-md border-2 border-slate-300 text-xs font-black text-slate-300">✗</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1.5 border-t border-slate-200 p-2">
        {counts.map((l, i) => (
          <div key={l.level} className="rounded-lg px-1 py-1.5 text-center text-white" style={{ background: colours[i % colours.length] }}>
            <p className="text-[9px] font-black leading-tight">{l.level}</p>
            <p className="text-[9px] font-semibold opacity-90">{l.count} test</p>
          </div>
        ))}
      </div>
    </div>
  );
}
