"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Hourglass, X } from "lucide-react";
import type { Countdown } from "@/lib/exam-interests";

const SETTINGS_HREF = "/dashboard/sinavlarim";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}

/** Ticks every second once mounted; the server render shows whole days so the first paint matches. */
function Remaining({ target, initialDays }: { target: string; initialDays: number }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return <strong>{initialDays} gün</strong>;
  const ms = new Date(target).getTime() - now;
  if (ms <= 0) return <strong>Sınav günü — başarılar!</strong>;
  const p = parts(ms);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <strong className="tabular-nums">
      {p.d} gün {pad(p.h)}:{pad(p.m)}:{pad(p.s)}
    </strong>
  );
}

const fmt = new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Big day / hour / minute / second tiles for the popup; same ticking source as the bar. */
function BigClock({ target }: { target: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return <div className="h-[84px]" aria-hidden="true" />;
  const ms = new Date(target).getTime() - now;
  if (ms <= 0) return <p className="py-4 text-center text-2xl font-extrabold">Sınav günü — başarılar!</p>;
  const p = parts(ms);
  const tiles: [number, string][] = [[p.d, "gün"], [p.h, "saat"], [p.m, "dakika"], [p.s, "saniye"]];
  return (
    <div className="grid grid-cols-4 gap-2" role="timer" aria-label={`${p.d} gün ${p.h} saat ${p.m} dakika kaldı`}>
      {tiles.map(([n, label]) => (
        <div key={label} className="rounded-2xl bg-[color:var(--brand)] px-1 py-3 text-center text-white">
          <span className="block text-3xl font-extrabold tabular-nums leading-none sm:text-4xl">{String(n).padStart(2, "0")}</span>
          <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-white/75">{label}</span>
        </div>
      ))}
    </div>
  );
}

const SEEN_KEY = "netfener-exam-countdown-popup-at";
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Exam countdown as a popup plus a corner pill. The popup opens when the student arrives, but at
 * most once per 24 hours (per browser) so it never nags; closing it folds it into the pill, which
 * stays visible bottom-left and reopens the popup on click.
 */
export function ExamCountdownBar({ items, initialDays }: { items: Countdown[]; initialDays: Record<string, number> }) {
  const [mode, setMode] = useState<"hidden" | "open" | "min">("hidden");
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    // Deferred so the popup arrives just after the page paints instead of in the first frame.
    const id = setTimeout(() => {
      let show = false;
      try {
        const last = Number(localStorage.getItem(SEEN_KEY));
        show = !last || Date.now() - last > DAY_MS;
        if (show) localStorage.setItem(SEEN_KEY, String(Date.now()));
      } catch {
        show = false; // storage blocked: stay quiet rather than reopen on every page
      }
      setMode(show ? "open" : "min");
    }, 500);
    return () => clearTimeout(id);
  }, []);
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (mode === "open" && !d.open) d.showModal();
    if (mode !== "open" && d.open) d.close();
  }, [mode]);

  const dated = items.filter((c): c is Extract<Countdown, { state: "DATE" }> => c.state === "DATE");
  const soonest = dated.slice().sort((a, b) => a.target.localeCompare(b.target))[0];
  return (
    <>
      <dialog
        ref={dialog}
        aria-labelledby="exam-countdown-title"
        onClose={() => setMode("min")}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMode("min");
        }}
        className="fixed inset-0 m-auto w-[min(94vw,520px)] rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface,#fff)] p-0 text-[color:var(--foreground)] shadow-2xl backdrop:bg-slate-950/55 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6 sm:p-8">
          <button type="button" onClick={() => setMode("min")} aria-label="Kapat" className="absolute right-4 top-4 rounded-lg p-2 text-[color:var(--muted)] hover:bg-[color:var(--canvas)] focus-ring">
            <X size={20} aria-hidden="true" />
          </button>
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.14em] text-[color:var(--brand)]">
            <Hourglass size={16} aria-hidden="true" /> Sınav geri sayımı
          </p>
          <h2 id="exam-countdown-title" className="mt-2 text-2xl font-extrabold tracking-tight">Sınavına kalan süre</h2>
          <div className="mt-5 space-y-6">
            {items.map((c) => (
              <section key={c.code}>
                {c.state === "DATE" ? (
                  <>
                    <p className="mb-2 text-sm">
                      <span className="font-extrabold text-[color:var(--brand)]">{c.label}</span>
                      <span className="text-[color:var(--muted)]"> · {c.source === "OSYM" ? c.examName : "Sınavın"} · {fmt.format(new Date(`${c.dateKey}T00:00:00Z`))}</span>
                    </p>
                    <BigClock target={c.target} />
                  </>
                ) : c.state === "AWAITING_CALENDAR" ? (
                  <p className="text-sm"><span className="font-extrabold text-[color:var(--brand)]">{c.label}</span> · <Link href="/tools/exam-calendar" className="underline">Yeni ÖSYM takvimi bekleniyor</Link></p>
                ) : (
                  <p className="text-sm"><span className="font-extrabold text-[color:var(--brand)]">{c.label}</span> · <Link href={SETTINGS_HREF} className="font-semibold underline">Sınav tarihini ekle</Link></p>
                )}
              </section>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Link href={SETTINGS_HREF} className="text-sm font-semibold text-[color:var(--muted)] underline">Sınavlarımı düzenle</Link>
            <button type="button" onClick={() => setMode("min")} className="primary-button">Çalışmaya başla</button>
          </div>
        </div>
      </dialog>

      {mode === "min" && items.length ? (
        <button
          type="button"
          onClick={() => setMode("open")}
          aria-label="Sınav geri sayımını aç"
          className="no-print fixed bottom-4 left-4 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-white/25 bg-[color:var(--brand)] px-4 py-2.5 text-left text-white shadow-xl transition hover:-translate-y-0.5 focus-ring"
        >
          <Hourglass size={18} aria-hidden="true" className="shrink-0" />
          {soonest ? (
            <span className="min-w-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-white/75">
                {soonest.label}{dated.length > 1 ? ` +${dated.length - 1}` : ""}
              </span>
              <span className="block text-sm"><Remaining target={soonest.target} initialDays={initialDays[soonest.code] ?? 0} /></span>
            </span>
          ) : (
            <span className="text-sm font-bold">Sınav tarihini ekle</span>
          )}
        </button>
      ) : null}
    </>
  );
}
