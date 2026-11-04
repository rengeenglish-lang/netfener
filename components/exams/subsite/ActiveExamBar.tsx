import { PLATFORM_EXAMS } from "@/lib/platform";
import { ExamSubsiteBar } from "./ExamSubsiteBar";
import { loadSubsiteNav } from "./ExamFrame";

/**
 * Slim exam bar for the student dashboard's learning pages (practice, mocks, progress), which
 * already have their own sidebar. It hides itself on pages that are not part of an exam section.
 */
export async function ActiveExamBar({ examTypeId, wrapperClassName }: { examTypeId: string; wrapperClassName?: string }) {
  const nav = await loadSubsiteNav({ id: examTypeId });
  if (!nav) return null;
  return (
    <ExamSubsiteBar
      sharedOnly
      wrapperClassName={wrapperClassName}
      exam={nav.exam}
      exams={PLATFORM_EXAMS.map((e) => ({ slug: e.slug, name: e.name, color: e.color }))}
      tracks={nav.tracks}
    />
  );
}
