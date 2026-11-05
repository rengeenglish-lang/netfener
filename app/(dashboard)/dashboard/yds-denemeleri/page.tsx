import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ListChecks, Lock, Timer } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getPlanAccess } from "@/server/services/plans.service";
import { denemeOverview } from "@/server/services/online-deneme.service";
import { releasedNumbers } from "@/lib/online-denemeler/catalog";
import { denemeNo, FREE_YDS_DENEME_COUNT, isFreeDeneme, listHref, startHref, trackBySlug, TRACKS } from "@/lib/online-denemeler/tracks";

export const metadata: Metadata = { title: "Online Denemeler" };

const formatScore = (n: number) => n.toLocaleString("tr-TR", { maximumFractionDigits: 2 });

export default async function OnlineDenemelerPage({ searchParams }: { searchParams: Promise<{ sinav?: string }> }) {
  const track = trackBySlug((await searchParams).sinav) ?? TRACKS[0];
  const user = await getAuthContext();
  if (!user) return null;
  const released = new Set(releasedNumbers(track));
  const RELEASED_DENEME_COUNT = released.size;
  const PLANNED_DENEME_COUNT = Math.max(track.planned, Math.ceil(RELEASED_DENEME_COUNT / 10) * 10);
  const [access, overview] = await Promise.all([getPlanAccess(user), denemeOverview(user.id)]);
  const batches = Array.from({ length: PLANNED_DENEME_COUNT / 10 }, (_, b) => b);

  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6">
      <section className="rounded-3xl bg-[color:var(--night)] p-8 text-white sm:p-10">
        <p className="text-xs font-extrabold tracking-[0.22em] text-white/70">{track.short.toLocaleUpperCase("tr")} · TAM DENEME</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">Online {track.name} Denemeleri</h1>
        <p className="mt-3 max-w-2xl text-white/80">
          Her biri 80 soru ve 180 dakika. Sınav portalında çözersin, bitirdiğin anda puanın ve her sorunun çözümü açılır. Süre sunucuda tutulur; 180 dakika dolunca deneme kilitlenir.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2"><ListChecks size={16} aria-hidden="true" /> 80 soru · A–E</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2"><Clock size={16} aria-hidden="true" /> 180 dakika</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2">
            {RELEASED_DENEME_COUNT} / {PLANNED_DENEME_COUNT} deneme yayında
          </span>
        </div>
      </section>

      <nav aria-label="Sınav" className="flex flex-wrap gap-2">
        {TRACKS.map((t) => (
          <Link
            key={t.slug}
            href={listHref(t)}
            aria-current={t.slug === track.slug ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${t.slug === track.slug ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--on-accent)]" : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--accent)]"}`}
          >
            {t.name} ({releasedNumbers(t).length})
          </Link>
        ))}
      </nav>

      {!access.can("MOCK_EXAMS") ? (
        <div className="dashboard-panel flex flex-wrap items-center justify-between gap-4">
          <p className="page-copy">{track.slug === "yds" ? `İlk ${FREE_YDS_DENEME_COUNT} YDS denemesi ücretsiz. Diğer denemeler Deneme Sınavı planlarına dahildir.` : "Online denemeler tüm Deneme Sınavı planlarına dahildir. Başlamak için bir plan seç."}</p>
          <Link href="/dashboard/mock-exam#planlar" className="primary-button">Planları gör</Link>
        </div>
      ) : null}

      {batches.map((b) => {
        const from = b * 10 + 1;
        const batchReleased = Array.from({ length: 10 }, (_, i) => from + i).some((n) => released.has(n));
        return (
          <section key={b} aria-labelledby={`paket-${b}`}>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 id={`paket-${b}`} className="text-lg font-extrabold text-[color:var(--foreground)]">
                {b + 1}. paket · Deneme {from}–{from + 9}
              </h2>
              {!batchReleased ? <span className="text-xs font-bold text-[color:var(--muted)]">Yakında</span> : null}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: 10 }, (_, i) => from + i).map((no) => {
                if (!released.has(no)) {
                  return (
                    <div key={no} className="flex items-center justify-between rounded-2xl border border-dashed border-[color:var(--border)] p-4 text-[color:var(--muted)]">
                      <span className="font-bold">Deneme {no}</span>
                      <Lock size={14} aria-label="yakında" />
                    </div>
                  );
                }
                const e = overview.get(denemeNo(track, no));
                return (
                  <Link
                    key={no}
                    href={startHref(denemeNo(track, no))}
                    className="group flex flex-col gap-1 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition hover:border-[color:var(--accent)] hover:shadow-md"
                  >
                    <span className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 font-extrabold text-[color:var(--foreground)]">
                      <span className="whitespace-nowrap">Deneme {no}</span>
                      {isFreeDeneme(denemeNo(track, no)) ? (
                        <span className="rounded-full bg-[color:var(--success-soft)] px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-[color:var(--success)]">Ücretsiz</span>
                      ) : !access.can("MOCK_EXAMS") ? (
                        <Lock size={14} className="text-[color:var(--muted)]" aria-label="Plan gerekli" />
                      ) : null}
                    </span>
                    {e?.openId ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--accent-strong)]">
                        <Timer size={12} aria-hidden="true" /> Devam ediyor
                      </span>
                    ) : e?.latestScore != null ? (
                      <span className="text-xs font-semibold text-[color:var(--muted)]">
                        Son puan <strong className="text-[color:var(--foreground)]">{formatScore(e.latestScore)}</strong>
                        {e.finished > 1 ? ` · en iyi ${formatScore(e.bestScore ?? 0)}` : ""}
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-[color:var(--muted)]">Başlanmadı</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
