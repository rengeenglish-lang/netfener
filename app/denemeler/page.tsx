import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ListChecks, Timer } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { getAuthContext } from "@/server/auth/context";
import { releasedCount } from "@/lib/online-denemeler/catalog";
import { listHref, TRACKS } from "@/lib/online-denemeler/tracks";

export const metadata: Metadata = {
  title: "YDS ve YÖKDİL Online Denemeler",
  description: "Gerçek sınav formatında 80 soruluk YDS ve YÖKDİL (Sosyal, Sağlık, Fen) denemeleri: 180 dakikalık geri sayım, anında puan ve soru soru çözümler.",
  alternates: { canonical: "/denemeler" },
};

export default async function DenemelerHubPage() {
  const user = await getAuthContext();
  return (
    <main className="inner-page mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
      <PageHero>
        <p className="eyebrow">Denemeler</p>
        <h1 className="page-title">YDS ve YÖKDİL online denemeleri</h1>
        <p className="page-copy">Her deneme gerçek sınavın soru tiplerini ve sırasını izler: 80 soru, 180 dakika. e-sınav ekranına benzer geri sayımla çöz, bitirdiğin anda puanını ve her sorunun çözümünü gör.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><ListChecks size={16} aria-hidden="true" /> 80 soru · A–E</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Clock size={16} aria-hidden="true" /> 180 dakika</span>
        </div>
      </PageHero>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {TRACKS.map((track) => {
          const count = releasedCount(track);
          const target = listHref(track);
          const href = user ? target : `/register?next=${encodeURIComponent(target)}`;
          return (
            <section key={track.slug} id={track.family === "yokdil" && track.field === "sosyal" ? "yokdil" : undefined} className="panel flex flex-col justify-between scroll-mt-24">
              <div>
                <p className="eyebrow">{track.family === "yds" ? "YDS" : "YÖKDİL"}</p>
                <h2 className="mt-2 text-xl font-black text-[color:var(--foreground)]">{track.name} Denemeleri</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  {count ? `${count} tam deneme yayında.` : "İlk denemeler hazırlanıyor."}{" "}
                  {track.family === "yds"
                    ? "Kelime, dil bilgisi, cloze, çeviri, okuma, diyalog ve paragraf soruları."
                    : "Okuma ve cloze metinleri bu alanın akademik konularından seçilir."}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {count ? (
                  <Link href={href} className="primary-button"><Timer size={16} aria-hidden="true" /> {user ? "Denemelere git" : "Üye ol, başla"}</Link>
                ) : null}
                <Link href={`/exams/${track.examSlug}/denemeler`} className="secondary-button">Sınav sayfası</Link>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
