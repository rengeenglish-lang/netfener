import { notFound } from "next/navigation";
import { db } from "@/server/db";
import { PLATFORM_EXAMS } from "@/lib/platform";
import { TRACK_LABELS, YOKDIL_CODES, isYokdil } from "@/lib/exam-subsite";
import { getSubsiteExam } from "@/server/services/exam-subsite.service";
import { ExamSubsiteBar } from "@/components/exams/subsite/ExamSubsiteBar";

/** Every page under /exams/{slug} is part of that exam's own subsite: its own bar, only its content. */
export default async function ExamSubsiteLayout({ children, params }: { children: React.ReactNode; params: Promise<{ examSlug: string }> }) {
  const { examSlug } = await params;
  const exam = await getSubsiteExam(examSlug);
  if (!exam) notFound();
  const tracks = isYokdil(exam.code)
    ? (await db.examType.findMany({ where: { code: { in: [...YOKDIL_CODES] }, active: true }, orderBy: { displayOrder: "asc" }, select: { slug: true, code: true } })).map((t) => ({ slug: t.slug, label: TRACK_LABELS[t.code as keyof typeof TRACK_LABELS] }))
    : [];
  const name = isYokdil(exam.code) ? "YÖKDİL" : exam.name;
  return (
    <div className="exam-subsite min-h-[70vh] bg-[color:var(--canvas)]">
      <ExamSubsiteBar exam={{ slug: exam.slug, name, color: exam.color }} exams={PLATFORM_EXAMS.map((e) => ({ slug: e.slug, name: e.name, color: e.color }))} tracks={tracks} />
      <div className="mx-auto w-full max-w-[1100px] px-4 pb-20 pt-8">{children}</div>
    </div>
  );
}
