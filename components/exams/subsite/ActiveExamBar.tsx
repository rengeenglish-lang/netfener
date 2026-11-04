import { db } from "@/server/db";
import { PLATFORM_EXAMS } from "@/lib/platform";
import { TRACK_LABELS, YOKDIL_CODES, isYokdil } from "@/lib/exam-subsite";
import { EXAM_META } from "@/lib/exam-types";
import { ExamSubsiteBar } from "./ExamSubsiteBar";

/**
 * The exam bar for shared learning pages (practice, mocks, progress, lesson reader): shows the
 * given exam's subsite navigation so students stay "inside" their exam. Renders nothing for
 * unknown exams; on pages that are not part of an exam section the bar hides itself.
 */
export async function ActiveExamBar({ examTypeId, slug, wrapperClassName }: { examTypeId?: string; slug?: string; wrapperClassName?: string }) {
  if (!examTypeId && !slug) return null;
  const exam = await db.examType.findFirst({ where: examTypeId ? { id: examTypeId } : { slug }, select: { slug: true, name: true, code: true, active: true } });
  if (!exam?.active) return null;
  const tracks = isYokdil(exam.code)
    ? (await db.examType.findMany({ where: { code: { in: [...YOKDIL_CODES] }, active: true }, orderBy: { displayOrder: "asc" }, select: { slug: true, code: true } })).map((t) => ({ slug: t.slug, label: TRACK_LABELS[t.code as keyof typeof TRACK_LABELS] }))
    : [];
  return (
    <ExamSubsiteBar
      sharedOnly
      wrapperClassName={wrapperClassName}
      exam={{ slug: exam.slug, name: isYokdil(exam.code) ? "YÖKDİL" : exam.name, color: EXAM_META[exam.code]?.solid ?? "#138a43" }}
      exams={PLATFORM_EXAMS.map((e) => ({ slug: e.slug, name: e.name, color: e.color }))}
      tracks={tracks}
    />
  );
}
