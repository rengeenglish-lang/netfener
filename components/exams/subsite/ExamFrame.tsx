import { db } from "@/server/db";
import { EXAM_META } from "@/lib/exam-types";
import { PLATFORM_EXAMS } from "@/lib/platform";
import { TRACK_LABELS, YOKDIL_CODES, isYokdil } from "@/lib/exam-subsite";
import { ExamSubsiteBar } from "./ExamSubsiteBar";
import { ExamSubsiteSidebar } from "./ExamSubsiteSidebar";

type NavExam = { slug: string; name: string; color: string };

/** Navigation data for an exam subsite (or the YÖKDİL hub), shared by every frame and bar. */
export async function loadSubsiteNav(where: { slug?: string; id?: string }) {
  if (where.slug === "yokdil") {
    const tracks = await yokdilTracks();
    return { exam: { slug: "yokdil", name: "YÖKDİL", color: PLATFORM_EXAMS.find((e) => e.slug === "yokdil")?.color ?? "#5b4fe0" }, tracks, hub: true };
  }
  const exam = await db.examType.findFirst({ where: where.id ? { id: where.id } : { slug: where.slug }, select: { slug: true, name: true, code: true, active: true } });
  if (!exam?.active) return null;
  const yok = isYokdil(exam.code);
  return {
    exam: { slug: exam.slug, name: yok ? "YÖKDİL" : exam.name, color: EXAM_META[exam.code]?.solid ?? "#138a43" } satisfies NavExam,
    tracks: yok ? await yokdilTracks() : [],
    hub: false,
  };
}
async function yokdilTracks() {
  return (await db.examType.findMany({ where: { code: { in: [...YOKDIL_CODES] }, active: true }, orderBy: { displayOrder: "asc" }, select: { slug: true, code: true } })).map((t) => ({ slug: t.slug, label: TRACK_LABELS[t.code as keyof typeof TRACK_LABELS] }));
}
const EXAMS = PLATFORM_EXAMS.map((e) => ({ slug: e.slug, name: e.name, color: e.color }));

/**
 * Exam subsite frame: a sticky left sidebar on desktop and the slim top bar on phones, with the
 * page in the remaining column. Renders the page alone when the exam is unknown.
 */
export async function ExamFrame({ slug, children, contentClassName = "mx-auto w-full max-w-[1100px] px-4 pb-20 pt-8 lg:px-8" }: { slug: string; children: React.ReactNode; contentClassName?: string }) {
  const nav = await loadSubsiteNav({ slug });
  if (!nav) return <>{children}</>;
  return (
    <div className="exam-subsite min-h-[70vh] bg-[color:var(--canvas)] lg:grid lg:grid-cols-[256px_minmax(0,1fr)]">
      <aside className="exam-subsite-sidebar sticky top-[76px] hidden h-[calc(100vh-76px)] overflow-y-auto border-r border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-6 lg:block">
        <ExamSubsiteSidebar exam={nav.exam} exams={EXAMS} tracks={nav.tracks} hideSections={nav.hub} />
      </aside>
      <div className="min-w-0">
        <div className="lg:hidden">
          <ExamSubsiteBar exam={nav.exam} exams={EXAMS} tracks={nav.tracks} hideSections={nav.hub} />
        </div>
        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
}
