"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthContext } from "@/server/auth/context";
import { toggleTopicLessonProgress, saveTopicNote, getOrCreateLessonEnglish } from "@/server/services/topics.service";
import { getPlanAccess } from "@/server/services/plans.service";
import { recordTopicStudy } from "@/server/services/skill-analysis.service";
import { syncCertificates } from "@/server/services/certificates.service";

export async function toggleTopicLessonProgressAction(topicLessonId: string) {
  const user = await getAuthContext();
  if (!user) redirect("/sign-in");

  await toggleTopicLessonProgress(user.id, topicLessonId);
  // Ticking the last lesson of a track issues its certificate (and notifies the student).
  await syncCertificates(user.id).catch((e) => console.error("[certificates] sync failed", e));
  revalidatePath("/konu-anlatim");
}

export type SaveNoteResult = { status: "success" | "error"; message?: string };

export async function saveTopicNoteAction(examTopicId: string, content: string): Promise<SaveNoteResult> {
  const user = await getAuthContext();
  if (!user) return { status: "error", message: "Not alabilmek için giriş yapmalısınız." };

  await saveTopicNote(user.id, examTopicId, content.slice(0, 4000));
  revalidatePath("/konu-anlatim");
  return { status: "success" };
}

/** Reading timer on Konu Anlatımı: reports active seconds on a topic. Guests aren't tracked. */
export async function recordTopicStudyAction(examTopicId: string, seconds: number): Promise<void> {
  const user = await getAuthContext();
  if (!user || typeof examTopicId !== "string" || !examTopicId || examTopicId.length > 64) return;
  await recordTopicStudy(user.id, examTopicId, Number(seconds));
}

export type LessonEnglishResult = { status: "success"; text: string } | { status: "error"; message: string };

/** "Read in English" (TOEFL, IELTS, PTE): the lesson's English text, translated once and then stored. */
export async function getLessonEnglishAction(topicLessonId: string): Promise<LessonEnglishResult> {
  const user = await getAuthContext();
  if (!user) return { status: "error", message: "İngilizce okumak için giriş yapmalısınız." };
  if (typeof topicLessonId !== "string" || !topicLessonId || topicLessonId.length > 64) {
    return { status: "error", message: "Ders bulunamadı." };
  }
  try {
    const access = await getPlanAccess(user);
    const text = await getOrCreateLessonEnglish(topicLessonId, access.can("KONU_ANLATIMI"));
    return text ? { status: "success", text } : { status: "error", message: "Bu dersin İngilizcesi şu an açılamıyor." };
  } catch (error) {
    console.error("[lesson-english]", error);
    return { status: "error", message: "Çeviri şu an hazırlanamadı. Biraz sonra tekrar dene." };
  }
}
