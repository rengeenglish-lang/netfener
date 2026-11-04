"use server";

import { redirect } from "next/navigation";
import { getAuthContext } from "@/server/auth/context";
import { getSubsiteExam } from "@/server/services/exam-subsite.service";
import { reactivateGoalForExam } from "@/server/services/diagnostic-goals.service";
import { viewerExamAccess } from "@/server/services/exam-access";
import { canOpenExam } from "@/lib/exam-interests";
import { safeNextPath } from "@/lib/availability";
import { subsiteHref } from "@/lib/exam-subsite";

/**
 * "Bu sınavla çalış": makes the exam the student's active one. Reuses their earlier goal for it
 * (target score and dates intact); without one, opens the goal wizard rather than guessing a target.
 * Exams outside the student's chosen exams are refused and sent back with the notice.
 */
export async function switchToExamAction(formData: FormData) {
  const slug = String(formData.get("exam") ?? "");
  const next = safeNextPath(formData.get("next"));
  const exam = await getSubsiteExam(slug);
  if (!exam) redirect("/exams");
  const user = await getAuthContext();
  if (!user) redirect(`/sign-in?next=${encodeURIComponent(next ?? subsiteHref(exam.slug))}`);
  const { allowed } = await viewerExamAccess();
  if (!canOpenExam(allowed, exam.slug)) redirect(subsiteHref(exam.slug));
  const switched = await reactivateGoalForExam(user.id, exam.id);
  redirect(switched ? (next ?? subsiteHref(exam.slug)) : "/seviye-tespit/hedef");
}
