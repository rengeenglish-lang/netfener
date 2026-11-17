import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ListChecks, Timer } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { getAuthContext } from "@/server/auth/context";
import { getPlanAccess } from "@/server/services/plans.service";
import { releasedCount, releasedNumbers } from "@/lib/online-denemeler/catalog";
import { denemeNo, denemeTitle, FREE_YDS_DENEME_COUNT, isFreeDeneme, startHref, trackBySlug, TRACKS } from "@/lib/online-denemeler/tracks";
import { PublicDenemeGrid, type PublicBatch, type TileState } from "@/components/online-deneme/PublicDenemeGrid";

export const metadata: Metadata = {
  title: "YDS ve YÖKDİL Online Denemeler",
  description: "Gerçek sınav formatında 80 soruluk YDS ve YÖKDİL (Sosyal, Sağlık, Fen) denemeleri: 180 dakikalık geri sayım, anında puan ve soru soru çözümler.",
  alternates: { canonical: "/denemeler" },
};

export default async function DenemelerHubPage({ searchParams }: { searchParams: Promise<{ sinav?: string }> }) {
  const track = trackBySlug((await searchParams).sinav) ?? TRACKS[0];
  const user = await getAuthContext();
  const access = await getPlanAccess(user);
  const released = new Set(releasedNumbers(track));
  const planned = Math.max(track.planned, Math.ceil(released.size / 10) * 10);
  const batches: PublicBatch[] = Array.from({ length: planned / 10 }, (_, b) => {
    const from = b * 10 + 1;
    return {
      label: `${b + 1}. paket · Deneme ${from}–${from + 9}`,
      tiles: Array.from({ length: 10 }, (_, i) => {
        const local = from + i;
        const no = denemeNo(track, local);
        const free = isFreeDeneme(no);
        const state: TileState = !user ? "guest" : free || access.can("MOCK_EXAMS") ? "open" : "plan";
        return { local, title: denemeTitle(no), href: startHref(no), free, released: released.has(local), state };
      }),
    };
  });

  return (
    <main className="inner-page mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
      <PageHero>
        <p className="eyebrow">Denemeler</p>
        <h1 className="page-title">YDS ve YÖKDİL online denemeleri</h1>
        <p className="page-copy">Her deneme gerçek sınavın soru tiplerini ve sırasını izler: 80 soru, 180 dakika. e-sınav ekranına benzer geri sayımla çöz, bitirdiğin anda puanını ve her sorunun çözümünü gör.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><ListChecks size={16} aria-hidden="true" /> 80 soru · A–E</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Clock size={16} aria-hidden="true" /> 180 dakika</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2">İlk {FREE_YDS_DENEME_COUNT} YDS denemesi ücretsiz</span>
        </div>
      </PageHero>

      <nav aria-label="Sınav" className="mt-10 flex flex-wrap gap-2">
        {TRACKS.map((t) => (
          <Link
            key={t.slug}
            href={t.slug === "yds" ? "/denemeler" : `/denemeler?sinav=${t.slug}`}
            scroll={false}
            aria-current={t.slug === track.slug ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${t.slug === track.slug ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--on-accent)]" : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--accent)]"}`}
          >
            {t.name} ({releasedCount(t)})
          </Link>
        ))}
      </nav>

      <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
        {track.family === "yds"
          ? "Kelime, dil bilgisi, cloze, çeviri, okuma, diyalog ve paragraf soruları."
          : "Okuma ve cloze metinleri bu alanın akademik konularından seçilir."}{" "}
        {!user
          ? "Tüm denemeleri inceleyebilirsin; çözmeye başlamak için üye olman yeterli."
          : track.slug === "yds" && !access.can("MOCK_EXAMS")
            ? `İlk ${FREE_YDS_DENEME_COUNT} deneme ücretsiz; diğerleri Deneme Sınavı planıyla açılır.`
            : !access.can("MOCK_EXAMS")
              ? "Bu denemeler Deneme Sınavı planlarına dahildir."
              : null}{" "}
        <Link href={`/exams/${track.examSlug}/denemeler`} className="font-bold underline">Sınav sayfası</Link>
      </p>

      <PublicDenemeGrid batches={batches} />

      <div className="mt-12" />
      <section className="panel mt-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">IELTS</p>
          <h2 className="mt-2 text-xl font-black text-[color:var(--foreground)]">IELTS test kütüphanesi</h2>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">Bilgisayarda yapılan IELTS ekranının düzeninde Listening, Reading, Writing ve Speaking testleri.</p>
        </div>
        <Link href="/ielts/testler" className="primary-button"><Timer size={16} aria-hidden="true" /> Kütüphaneyi aç</Link>
      </section>

      <section className="panel mt-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">TOEFL iBT</p>
          <h2 className="mt-2 text-xl font-black text-[color:var(--foreground)]">TOEFL iBT deneme kütüphanesi</h2>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">2026 formatında adaptif Reading ve Listening, yeni Writing ve Speaking görevleriyle tam denemeler.</p>
        </div>
        <Link href="/toefl/testler" className="primary-button"><Timer size={16} aria-hidden="true" /> Kütüphaneyi aç</Link>
      </section>
    </main>
  );
}
