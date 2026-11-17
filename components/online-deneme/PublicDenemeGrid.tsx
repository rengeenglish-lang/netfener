"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Lock, Timer } from "lucide-react";

/** open: go straight in · guest: ask to sign up / sign in · plan: signed in but needs a paid plan. */
export type TileState = "open" | "guest" | "plan";

export type PublicTile = { local: number; title: string; href: string; free: boolean; released: boolean; state: TileState };
export type PublicBatch = { label: string; tiles: PublicTile[] };

export function PublicDenemeGrid({ batches }: { batches: PublicBatch[] }) {
  const [picked, setPicked] = useState<PublicTile | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!picked) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPicked(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [picked]);

  const next = picked ? encodeURIComponent(picked.href) : "";

  return (
    <>
      {batches.map((batch) => (
        <section key={batch.label} className="mt-8" aria-label={batch.label}>
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-extrabold text-[color:var(--foreground)]">{batch.label}</h2>
            {batch.tiles.every((t) => !t.released) ? <span className="text-xs font-bold text-[color:var(--muted)]">Yakında</span> : null}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {batch.tiles.map((tile) => {
              if (!tile.released) {
                return (
                  <div key={tile.local} className="flex items-center justify-between rounded-2xl border border-dashed border-[color:var(--border)] p-4 text-[color:var(--muted)]">
                    <span className="font-bold">Deneme {tile.local}</span>
                    <Lock size={14} aria-label="yakında" />
                  </div>
                );
              }
              const body = (
                <>
                  <span className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 font-extrabold text-[color:var(--foreground)]">
                    <span className="whitespace-nowrap">Deneme {tile.local}</span>
                    {tile.free ? (
                      <span className="rounded-full bg-[color:var(--success-soft)] px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-[color:var(--success)]">Ücretsiz</span>
                    ) : tile.state !== "open" ? (
                      <Lock size={14} className="text-[color:var(--muted)]" aria-label="Plan gerekli" />
                    ) : null}
                  </span>
                  <span className="text-xs font-semibold text-[color:var(--muted)]">80 soru · 180 dk</span>
                </>
              );
              const cls = "flex flex-col gap-1 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-left transition hover:border-[color:var(--accent)] hover:shadow-md";
              return tile.state === "open" ? (
                <Link key={tile.local} href={tile.href} className={cls}>{body}</Link>
              ) : (
                <button key={tile.local} type="button" onClick={() => setPicked(tile)} className={cls} aria-haspopup="dialog">{body}</button>
              );
            })}
          </div>
        </section>
      ))}

      {picked ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 p-4" role="presentation" onClick={(e) => { if (e.target === e.currentTarget) setPicked(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="deneme-gate-title" className="relative w-full max-w-md rounded-3xl bg-[color:var(--surface)] p-6 shadow-[0_24px_60px_rgba(15,23,42,.35)] sm:p-8">
            <button ref={closeRef} type="button" onClick={() => setPicked(null)} aria-label="Kapat" className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full text-2xl text-[color:var(--muted)] transition hover:bg-[color:var(--border)]">×</button>
            <p className="eyebrow">{picked.title}</p>
            {picked.state === "guest" ? (
              <>
                <h2 id="deneme-gate-title" className="mt-2 text-2xl font-black text-[color:var(--foreground)]">Başlamak için üye ol</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  {picked.free
                    ? "Bu deneme ücretsiz. Ücretsiz bir hesap aç ya da giriş yap; deneme hemen açılır."
                    : "Denemeyi çözmek için önce hesap açmalısın. Bu deneme Deneme Sınavı planlarına dahildir; üye olduktan sonra plan seçebilirsin."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/register?next=${next}`} className="primary-button"><Timer size={16} aria-hidden="true" /> Üye ol</Link>
                  <Link href={`/sign-in?next=${next}`} className="secondary-button">Giriş yap</Link>
                </div>
              </>
            ) : (
              <>
                <h2 id="deneme-gate-title" className="mt-2 text-2xl font-black text-[color:var(--foreground)]">Bu deneme planla açılır</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">Bu deneme Deneme Sınavı planlarına dahildir. Bir plan seçtiğinde tüm denemeler açılır.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/dashboard/mock-exam#planlar" className="primary-button">Planları gör</Link>
                  <button type="button" onClick={() => setPicked(null)} className="secondary-button">Vazgeç</button>
                </div>
              </>
            )}
          </section>
        </div>
      ) : null}
    </>
  );
}
