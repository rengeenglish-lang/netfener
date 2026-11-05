import "server-only";
import { db } from "@/server/db";

export function listExamTopicsWithLessons(examTypeId: string) {
  return db.examTopic.findMany({
    where: { examTypeId },
    orderBy: { displayOrder: "asc" },
    include: { lessons: { orderBy: { position: "asc" } } },
  });
}

export async function getCompletedTopicLessonIdsForUser(userId: string) {
  const progresses = await db.topicLessonProgress.findMany({
    where: { userId, completedAt: { not: null } },
    select: { topicLessonId: true },
  });
  return new Set(progresses.map((progress) => progress.topicLessonId));
}

export async function toggleTopicLessonProgress(userId: string, topicLessonId: string) {
  const existing = await db.topicLessonProgress.findUnique({
    where: { userId_topicLessonId: { userId, topicLessonId } },
  });
  if (existing) {
    return db.topicLessonProgress.update({
      where: { id: existing.id },
      data: { completedAt: existing.completedAt ? null : new Date() },
    });
  }
  return db.topicLessonProgress.create({ data: { userId, topicLessonId, completedAt: new Date() } });
}

export async function getTopicNotesForUser(userId: string, examTypeId: string) {
  const notes = await db.topicNote.findMany({
    where: { userId, topic: { examTypeId } },
    select: { examTopicId: true, content: true },
  });
  return Object.fromEntries(notes.map((note) => [note.examTopicId, note.content]));
}

export function saveTopicNote(userId: string, examTopicId: string, content: string) {
  return db.topicNote.upsert({
    where: { userId_examTopicId: { userId, examTopicId } },
    update: { content },
    create: { userId, examTopicId, content },
  });
}

/** Exams whose Konu Anlatımı lessons offer "Read in English". */
export const ENGLISH_TOGGLE_EXAM_SLUGS = ["toefl", "ielts", "pte"] as const;

/**
 * English text of a lesson for "Read in English": the stored translation, or — when the offline batch
 * hasn't reached the lesson yet — a fresh translation that is saved so it's made only once.
 * Returns null when the viewer may not read the lesson (outside their plan beyond the free first topic).
 */
export async function getOrCreateLessonEnglish(topicLessonId: string, hasPlanAccess: boolean): Promise<string | null> {
  const lesson = await db.topicLesson.findUnique({
    where: { id: topicLessonId },
    select: {
      contentBody: true,
      contentBodyEn: true,
      topic: { select: { id: true, examTypeId: true, examType: { select: { slug: true } } } },
    },
  });
  if (!lesson?.contentBody) return null;
  if (!(ENGLISH_TOGGLE_EXAM_SLUGS as readonly string[]).includes(lesson.topic.examType.slug)) return null;
  if (!hasPlanAccess) {
    const first = await db.examTopic.findFirst({
      where: { examTypeId: lesson.topic.examTypeId },
      orderBy: { displayOrder: "asc" },
      select: { id: true },
    });
    if (first?.id !== lesson.topic.id) return null;
  }
  if (lesson.contentBodyEn) return lesson.contentBodyEn;
  const { translateLessonBody } = await import("@/lib/google-translate");
  const english = await translateLessonBody(lesson.contentBody);
  await db.topicLesson.update({ where: { id: topicLessonId }, data: { contentBodyEn: english } });
  return english;
}
