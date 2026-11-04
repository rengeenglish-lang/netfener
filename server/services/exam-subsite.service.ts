import "server-only";
import { cache } from "react";
import { db } from "@/server/db";
import { EXAM_META } from "@/lib/exam-types";
import { EXAM_LANDING_CONTENT } from "@/lib/exam-landing";
import { examFamilyForCode } from "@/lib/diagnostics/exam-family";
import { skillCards, topicMatchesSkill } from "@/lib/exam-subsite";

/** The exam behind /exams/{slug}, with its family, colour and landing copy. Null when unknown or inactive. */
export const getSubsiteExam = cache(async (slug: string) => {
  const exam = await db.examType.findUnique({ where: { slug } });
  if (!exam || !exam.active) return null;
  return {
    ...exam,
    family: examFamilyForCode(exam.code),
    color: EXAM_META[exam.code]?.solid ?? "#138a43",
    content: EXAM_LANDING_CONTENT[exam.code] ?? null,
  };
});
export type SubsiteExam = NonNullable<Awaited<ReturnType<typeof getSubsiteExam>>>;

/** Topics with lesson counts, plus this user's completed lessons for the exam (none when signed out). */
export async function getExamTopicsWithProgress(examTypeId: string, userId?: string) {
  const topics = await db.examTopic.findMany({
    where: { examTypeId },
    orderBy: { displayOrder: "asc" },
    select: { id: true, slug: true, name: true, category: true, skillsTested: true, description: true, questionCount: true, lessons: { select: { id: true } } },
  });
  const done = userId
    ? new Set(
        (await db.topicLessonProgress.findMany({
          where: { userId, completedAt: { not: null }, topicLesson: { topic: { examTypeId } } },
          select: { topicLessonId: true },
        })).map((p) => p.topicLessonId),
      )
    : new Set<string>();
  return topics.map((t) => ({ ...t, lessonCount: t.lessons.length, completed: t.lessons.filter((l) => done.has(l.id)).length }));
}

/** Real per-skill numbers for the exam home: topics, lessons and (signed in) completed lessons. */
export function skillProgress(exam: SubsiteExam, topics: Awaited<ReturnType<typeof getExamTopicsWithProgress>>) {
  return skillCards(exam.family).map((skill) => {
    const matched = topics.filter((t) => topicMatchesSkill(t, skill));
    const lessons = matched.reduce((n, t) => n + t.lessonCount, 0);
    const completed = matched.reduce((n, t) => n + t.completed, 0);
    return { ...skill, topics: matched.length, lessons, completed, percent: lessons ? Math.round((completed / lessons) * 100) : 0 };
  });
}

export async function countExamPractice(exam: SubsiteExam) {
  const scope = { isActive: true, examFamily: exam.family, OR: [{ examTypeId: exam.id }, { examTypeId: null }] };
  const [practice, mockSets] = await Promise.all([
    db.diagnosticQuestion.count({ where: { ...scope, mockSetNumber: null } }),
    db.diagnosticQuestion.findMany({ where: { ...scope, mockSetNumber: { not: null } }, distinct: ["mockSetNumber"], select: { mockSetNumber: true } }),
  ]);
  return { practice, mockSets: mockSets.length };
}
