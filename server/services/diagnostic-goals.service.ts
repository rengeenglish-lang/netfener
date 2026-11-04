import "server-only";
import { db } from "@/server/db";
import { examGoalSchema } from "@/lib/validation/diagnostics";

export function getActiveGoal(userId: string) {
  return db.examGoal.findFirst({
    where: { userId, isActive: true },
    include: { examType: true },
    orderBy: { createdAt: "desc" },
  });
}

export function getGoalHistory(userId: string) {
  return db.examGoal.findMany({
    where: { userId },
    include: { examType: true },
    orderBy: { createdAt: "desc" },
  });
}

/** Setting a new goal supersedes any other active goal for this user — one journey at a time. */
export async function setActiveGoal(userId: string, raw: Record<string, unknown>) {
  const input = examGoalSchema.parse(raw);
  return db.$transaction(async (tx) => {
    await tx.examGoal.updateMany({ where: { userId, isActive: true }, data: { isActive: false } });
    return tx.examGoal.create({
      data: {
        userId,
        examTypeId: input.examTypeId,
        currentScoreKnown: input.currentScoreKnown,
        currentScoreRaw: input.currentScoreRaw || null,
        targetScoreRaw: input.targetScoreRaw,
        targetTimeframe: input.targetTimeframe,
        targetDate: input.targetDate ? new Date(input.targetDate) : null,
        isActive: true,
      },
    });
  });
}

/**
 * Switches the active journey back to an exam the student already set a goal for, keeping that
 * goal's own target score and dates. Returns false when there is no earlier goal for the exam —
 * the caller then sends the student to the goal wizard instead of inventing a target.
 */
export async function reactivateGoalForExam(userId: string, examTypeId: string) {
  return db.$transaction(async (tx) => {
    const previous = await tx.examGoal.findFirst({ where: { userId, examTypeId }, orderBy: { createdAt: "desc" } });
    if (!previous) return false;
    if (previous.isActive) return true;
    await tx.examGoal.updateMany({ where: { userId, isActive: true }, data: { isActive: false } });
    await tx.examGoal.update({ where: { id: previous.id }, data: { isActive: true } });
    return true;
  });
}
