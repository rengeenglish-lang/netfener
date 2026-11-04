import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { db } from "@/server/db";
import { EXAM_META } from "@/lib/exam-types";
import { PLATFORM_EXAMS } from "@/lib/platform";
import { TRACK_LABELS, YOKDIL_CODES, subsiteHref, featureGradient } from "@/lib/exam-subsite";
import { ExamSubsiteBar } from "@/components/exams/subsite/ExamSubsiteBar";
import { SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";

export const metadata: Metadata = {
  title: "YÖKDİL Hazırlık",
  description: "YÖKDİL Sosyal, Sağlık ve Fen Bilimleri için alanına özel konu anlatımı, pratik sorular ve deneme sınavları.",
  alternates: { canonical: "/exams/yokdil" },
};

/** YÖKDİL is one subsite with three tracks; this hub only asks which track to open. */
export default async function YokdilHubPage() {
  const branches = await db.examType.findMany({ where: { code: { in: [...YOKDIL_CODES] }, active: true }, orderBy: { displayOrder: "asc" } });
  const color = PLATFORM_EXAMS.find((e) => e.slug === "yokdil")?.color ?? "#5b4fe0";
  return (
    <div className="exam-subsite min-h-[70vh] bg-[color:var(--canvas)]">
      <ExamSubsiteBar
        exam={{ slug: "yokdil", name: "YÖKDİL", color }}
        exams={PLATFORM_EXAMS.map((e) => ({ slug: e.slug, name: e.name, color: e.color }))}
        tracks={branches.map((b) => ({ slug: b.slug, label: TRACK_LABELS[b.code as keyof typeof TRACK_LABELS] }))}
        hideSections
      />
      <div className="mx-auto w-full max-w-[1100px] px-4 pb-20 pt-8">
        <SubsiteHeader eyebrow="YÖKDİL" title="Alanını seç" copy="YÖKDİL’in üç alanı ayrı terminoloji ve metin türleri kullanır. Alanını seç; konular, pratik ve denemeler yalnızca o alana göre gelsin." />
        <ul className="grid gap-3 sm:grid-cols-3">
          {branches.map((b) => {
            const c = EXAM_META[b.code]?.solid ?? color;
            return (
              <li key={b.id}>
                <Link href={subsiteHref(b.slug)} className="group flex h-full min-h-44 flex-col justify-between rounded-2xl p-6 text-white shadow-[0_18px_36px_-22px_rgb(0_0_0/.6)] transition hover:-translate-y-0.5" style={{ background: featureGradient(c) }}>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[.14em] text-white/75">YÖKDİL</p>
                    <h2 className="mt-1 text-xl font-extrabold">{TRACK_LABELS[b.code as keyof typeof TRACK_LABELS]}</h2>
                    {b.shortDescription ? <p className="mt-1.5 text-sm leading-6 text-white/85">{b.shortDescription}</p> : null}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold">Bu alanla çalış <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-1" /></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
