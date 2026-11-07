import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Headphones, Lock, Mic2, Monitor, PenLine, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { IELTS_LIBRARY, IELTS_TESTS, MODULE_META, ieltsTestHref, questionCount } from "@/content/ielts-tests/registry";
import type { IeltsModuleId } from "@/content/ielts-tests/types";

export const metadata: Metadata = {
  title: "IELTS Test Kütüphanesi",
  description: "Bilgisayarda IELTS ekranını birebir hissettiren Listening, Reading, Writing ve Speaking pratik testleri: geri sayım, soru gezgini, Review işareti, sesli examiner ve anında sonuç.",
  alternates: { canonical: "/ielts/testler" },
};

const ICONS: Record<IeltsModuleId, LucideIcon> = { listening: Headphones, reading: BookOpen, writing: PenLine, speaking: Mic2 };
const ORDER: IeltsModuleId[] = ["listening", "reading", "writing", "speaking"];

export default function IeltsLibraryPage() {
  return (
    <main className="inner-page mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
      <PageHero>
        <p className="eyebrow">IELTS</p>
        <h1 className="page-title">IELTS test kütüphanesi</h1>
        <p className="page-copy">Bir modül seç ve başla.</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Monitor size={16} aria-hidden="true" /> Bilgisayar ekranı</span>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-[color:var(--border)] px-4 py-2"><Clock size={16} aria-hidden="true" /> Gerçek süre akışı</span>
        </div>
      </PageHero>

      {IELTS_LIBRARY.map((shelf) => (
        <section key={shelf.track} className="mt-12">
          <h2 className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">IELTS {shelf.name}</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: shelf.slots }, (_, i) => i + 1).map((no) => {
              const test = IELTS_TESTS.find((t) => t.track === shelf.track && t.no === no);
              return (
                <article key={no} className={`panel flex flex-col ${test ? "" : "opacity-70"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow">{shelf.name}</p>
                      <h3 className="mt-1 text-lg font-black text-[color:var(--foreground)]">Practice Test {no}</h3>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${test ? "bg-[color:var(--brand-soft)] text-[color:var(--foreground)]" : "border border-[color:var(--border)] text-[color:var(--muted)]"}`}>
                      {test ? "Tam test · ücretsiz" : "Yakında"}
                    </span>
                  </div>
                  <ul className="mt-4 divide-y divide-[color:var(--border)] rounded-xl border border-[color:var(--border)]">
                    {ORDER.map((id) => {
                      const Icon = ICONS[id];
                      const meta = MODULE_META[id];
                      const mod = test?.modules.find((m) => m.id === id);
                      return (
                        <li key={id} className="flex items-center justify-between gap-3 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <Icon size={18} aria-hidden="true" className="text-[color:var(--muted)]" />
                            <div>
                              <p className="text-sm font-extrabold">{meta.name}</p>
                              <p className="text-xs text-[color:var(--muted)]">
                                {test && mod ? `${mod.minutes} dk · ${id === "writing" ? `${questionCount(test, id)} görev` : id === "speaking" ? meta.fullQuestions : `${questionCount(test, id)} soru`}` : `${meta.fullMinutes} dk · ${meta.fullQuestions}`}
                              </p>
                            </div>
                          </div>
                          {test && mod ? (
                            <Link href={ieltsTestHref(test.id, id)} className="primary-button !px-4 !py-1.5 text-sm">Başla</Link>
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
        </section>
      ))}

      <p className="mt-10 text-sm text-[color:var(--muted)]">
        Ek konuşma alıştırmaları için <Link href="/exams/ielts/pratik" className="font-bold underline">IELTS Pratik</Link> sayfasına bak. Netfener’in kendi içeriğidir; resmi IELTS materyali değildir.
      </p>
    </main>
  );
}
