import Link from "next/link";
import { getAuthContext } from "@/server/auth/context";
import { getActiveGoal } from "@/server/services/diagnostic-goals.service";
import { viewerExamAccess } from "@/server/services/exam-access";
import { canOpenExam } from "@/lib/exam-interests";
import { switchToExamAction } from "@/app/actions/exam-switch";
import type { SubsiteExam } from "@/server/services/exam-subsite.service";

/**
 * Tells a signed-in student how this subsite relates to their study: outside their chosen exams
 * (study material stays closed, public pages stay open), or not their active exam (one click to
 * switch). Shows nothing when this already is their exam, or for guests and staff.
 */
export async function ExamContextBanner({ exam }: { exam: SubsiteExam }) {
  const user = await getAuthContext();
  if (!user || user.role !== "STUDENT") return null;
  const [{ allowed }, goal] = await Promise.all([viewerExamAccess(), getActiveGoal(user.id)]);
  if (!canOpenExam(allowed, exam.slug))
    return (
      <div role="status" className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm">
        <span><strong>{exam.name}</strong> seçtiğin sınavlar arasında değil. Bilgi sayfalarını gezebilirsin; konu anlatımı ve pratik için sınavlarını güncelle.</span>
        <Link href="/dashboard/sinavlarim" className="ghost-button !min-h-9 text-sm">Sınavlarım</Link>
      </div>
    );
  if (goal?.examTypeId === exam.id) return null;
  return (
    <form action={switchToExamAction} className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[color:rgb(var(--accent-rgb)/.35)] bg-[color:var(--accent-soft)] px-4 py-3 text-sm">
      <input type="hidden" name="exam" value={exam.slug} />
      <span>{goal ? <>Aktif sınavın <strong>{goal.examType.name}</strong>. Pratik, deneme ve ilerleme aktif sınavına göre gelir.</> : <>Henüz aktif sınavın yok. Pratik ve denemeler için {exam.name} ile başla.</>}</span>
      <button className="primary-button !min-h-9 !px-4 !py-2 text-sm">{exam.name} ile çalış</button>
    </form>
  );
}

/** Action button that switches to this exam, then continues to `next` (used on Pratik / Denemeler). */
export function SwitchExamButton({ exam, next, label }: { exam: string; next: string; label: string }) {
  return (
    <form action={switchToExamAction}>
      <input type="hidden" name="exam" value={exam} />
      <input type="hidden" name="next" value={next} />
      <button className="primary-button">{label}</button>
    </form>
  );
}
