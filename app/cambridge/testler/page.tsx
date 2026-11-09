import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Headphones, PenLine, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CAMBRIDGE_SLOTS, CAMBRIDGE_TESTS, LEVELS, cambridgeTestHref, taskItems } from "@/content/cambridge-tests/registry";

export const metadata: Metadata = {
  title: "Cambridge Sınavları Test Kütüphanesi",
  description: "Pre A1 Starters, A1 Movers, A2 Flyers, A2 Key (KET) ve B1 Preliminary (PET) için renkli, resimli Reading & Writing deneme testleri: anında puan, kalkan (shield) ve Cambridge ölçeği tahmini.",
  alternates: { canonical: "/cambridge/testler" },
};

export default function CambridgeLibraryPage() {
  return (
    <main className="inner-page mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
      <PageHero>
        <p className="eyebrow">Cambridge English</p>
        <h1 className="page-title">Cambridge sınavları test kütüphanesi</h1>
        <p className="page-copy">
          Young Learners (Starters, Movers, Flyers) ile A2 Key ve B1 Preliminary için gerçek sınav bölümlerini izleyen pratik testler. Resimli kartlar, renkli sahneler ve
          anında geri bildirim: çocuklar doğru cevabı hemen görür, büyükler Cambridge ölçeğinde tahmini puan alır. Pre A1 Starters testlerinde Listening de var; diğer seviyelerin Listening ve Speaking bölümleri yakında eklenecek.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Sparkles size={16} aria-hidden="true" /> Resimli görevler</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Clock size={16} aria-hidden="true" /> Gerçek süreler</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2">Şimdilik tüm testler ücretsiz</span>
        </div>
      </PageHero>

      {LEVELS.map((lv) => (
        <section key={lv.id} id={lv.id} className="mt-12 scroll-mt-24">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl" style={{ background: `${lv.colour}22` }} aria-hidden="true">{lv.e}</span>
              <div>
                <h2 className="text-2xl font-black text-[color:var(--foreground)]" lang="en">{lv.name}</h2>
                <p className="text-sm font-bold text-[color:var(--muted)]">{lv.cefr} · {lv.age}</p>
              </div>
            </div>
            <p className="max-w-xl text-sm text-[color:var(--muted)]">{lv.blurb}</p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Array.from({ length: CAMBRIDGE_SLOTS }, (_, i) => i + 1).map((no) => {
              const test = CAMBRIDGE_TESTS.find((t) => t.level === lv.id && t.no === no);
              return (
                <article key={no} className={`flex flex-col rounded-3xl border-2 p-5 ${test ? "bg-[color:var(--surface)]" : "opacity-60"}`} style={{ borderColor: test ? `${lv.colour}55` : "var(--border)" }}>
                  <p className="text-xs font-black uppercase tracking-wider" style={{ color: lv.colour }}>Test {no}</p>
                  {test ? (
                    <>
                      <ul className="mt-3 flex-1 space-y-1.5 text-sm" lang="en">
                        {test.papers.map((paper) => {
                          const items = paper.parts.reduce((n, p) => n + taskItems(p.task), 0);
                          return (
                            <li key={paper.id} className="flex flex-wrap items-center gap-x-2">
                              {paper.id === "writing" ? <PenLine size={15} aria-hidden="true" /> : paper.id === "listening" ? <Headphones size={15} aria-hidden="true" /> : <BookOpen size={15} aria-hidden="true" />}
                              <span className="font-bold">{paper.name}</span>
                              <span className="text-[color:var(--muted)]">· {paper.minutes} min{items ? ` · ${items} Q` : ""}</span>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {test.papers.map((paper) => (
                          <Link key={paper.id} href={cambridgeTestHref(test.id, test.papers.length > 1 ? paper.id : undefined)} className="rounded-full px-4 py-1.5 text-sm font-black text-white" style={{ background: lv.colour }} lang="en">
                            {test.papers.length > 1 ? paper.name : "Start"}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="mt-3 text-sm font-bold text-[color:var(--muted)]">Yakında</p>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-12 text-sm text-[color:var(--muted)]">
        Netfener’in kendi içeriğidir; Cambridge University Press &amp; Assessment ile bağlantılı değildir ve resmi sınav materyali değildir. Puan tahminleri yaklaşıktır.
      </p>
    </main>
  );
}
