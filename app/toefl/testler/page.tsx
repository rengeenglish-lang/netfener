import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Headphones, Lock, Mic2, Monitor, PenLine, Route, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SECTION_META, SECTION_ORDER, TOEFL_SLOTS, TOEFL_TESTS, sectionItems, toeflTestHref } from "@/content/toefl-tests/registry";
import type { ToeflSectionId } from "@/content/toefl-tests/types";

export const metadata: Metadata = {
  title: "TOEFL iBT Deneme Kütüphanesi",
  description: "2026 TOEFL iBT formatında tam denemeler: iki aşamalı adaptif Reading ve Listening, Build a Sentence, Write an Email, Academic Discussion, Listen and Repeat ve Take an Interview. 1–6 band tahmini.",
  alternates: { canonical: "/toefl/testler" },
};

const ICONS: Record<ToeflSectionId, LucideIcon> = { reading: BookOpen, listening: Headphones, writing: PenLine, speaking: Mic2 };

export default function ToeflLibraryPage() {
  return (
    <main className="inner-page mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
      <PageHero>
        <p className="eyebrow">TOEFL iBT</p>
        <h1 className="page-title">TOEFL iBT deneme kütüphanesi</h1>
        <p className="page-copy">
          Denemeler, 21 Ocak 2026’dan beri uygulanan yeni TOEFL iBT formatını izler: Reading ve Listening iki aşamalıdır ve ikinci aşama ilk aşamadaki performansına göre
          kolay ya da zor gelir; Writing ve Speaking yeni görev tipleriyle sabit akışlıdır. Sonuçta 1–6 ölçeğinde tahmini band görürsün.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Monitor size={16} aria-hidden="true" /> Bilgisayar sınav ekranı</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Route size={16} aria-hidden="true" /> Adaptif ikinci aşama</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Clock size={16} aria-hidden="true" /> Yaklaşık 90 dakika</span>
        </div>
      </PageHero>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: TOEFL_SLOTS }, (_, i) => i + 1).map((no) => {
          const test = TOEFL_TESTS.find((t) => t.no === no);
          return (
            <article key={no} className={`panel flex flex-col ${test ? "" : "opacity-70"}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow">TOEFL iBT</p>
                  <h2 className="mt-1 text-lg font-black text-[color:var(--foreground)]">Practice Test {no}</h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${test ? "bg-[color:var(--brand-soft)] text-[color:var(--foreground)]" : "border border-[color:var(--border)] text-[color:var(--muted)]"}`}>
                  {test ? "Tam test · ücretsiz" : "Yakında"}
                </span>
              </div>
              <ul className="mt-4 divide-y divide-[color:var(--border)] rounded-xl border border-[color:var(--border)]">
                {SECTION_ORDER.map((id) => {
                  const Icon = ICONS[id];
                  const meta = SECTION_META[id];
                  const detail = !test
                    ? `${meta.minutes} dk`
                    : id === "reading" || id === "listening"
                      ? `${meta.minutes} dk · ${sectionItems(test[id])} soru · 2 aşama`
                      : id === "writing"
                        ? `${meta.minutes} dk · ${test.writing.build.length + 2} görev`
                        : `${meta.minutes} dk · ${test.speaking.repeat.sentences.length + test.speaking.interview.questions.length} görev`;
                  return (
                    <li key={id} className="flex items-center justify-between gap-3 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Icon size={18} aria-hidden="true" className="text-[color:var(--muted)]" />
                        <div>
                          <p className="text-sm font-extrabold">{meta.name}</p>
                          <p className="text-xs text-[color:var(--muted)]">{detail}</p>
                        </div>
                      </div>
                      {test ? (
                        <Link href={toeflTestHref(test.id, id)} className="primary-button !px-4 !py-1.5 text-sm">Başla</Link>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[color:var(--muted)]"><Lock size={13} aria-hidden="true" /> Kapalı</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>

      <p className="mt-10 text-sm text-[color:var(--muted)]">
        Netfener’in kendi içeriğidir; ETS ile bağlantılı değildir ve resmi TOEFL materyali değildir. Band tahminleri yaklaşıktır.
      </p>
    </main>
  );
}
