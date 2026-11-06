import "server-only";
import { randomBytes } from "node:crypto";
import { db } from "@/server/db";
import { deleteObject, headObject, presignDownload, presignUpload, r2Configured } from "@/server/storage/r2";
import { notify } from "@/server/services/notifications.service";
import { findIeltsTest } from "@/content/ielts-tests/registry";
import type { SpeakingModule } from "@/content/ielts-tests/types";
import {
  SPEAKING_AUDIO_TYPES,
  SPEAKING_CRITERIA,
  SPEAKING_MAX_BYTES,
  SPEAKING_MAX_PENDING,
  baseAudioType,
  isBand,
  speakingBand,
  type SpeakingScores,
} from "@/lib/ielts-speaking";

/**
 * IELTS Speaking mocks sent for teacher review. Recordings go straight from the browser to the
 * private R2 "reviews" bucket (under ielts-speaking/) through signed URLs; every playback is a
 * short-lived signed URL issued after checking that the viewer is the learner or a teacher.
 */

const BUCKET = "reviews" as const;
const PREFIX = "ielts-speaking";

export class SpeakingReviewError extends Error {}

export type SpeakingRecording = { key: string; part: number; prompt: number; question: string; seconds: number; contentType: string };

export const speakingReviewAvailable = () => r2Configured(BUCKET);

function speakingModule(testId: string): { title: string; module: SpeakingModule } {
  const test = findIeltsTest(testId);
  const speaking = test?.modules.find((m) => m.id === "speaking");
  if (!test || !speaking || speaking.id !== "speaking") throw new SpeakingReviewError("Test bulunamadı.");
  return { title: test.title, module: speaking };
}

const promptCount = (m: SpeakingModule) => m.parts.reduce((sum, p) => sum + p.prompts.length, 0);

const extension = (type: string) => (type === "audio/mp4" ? "m4a" : type === "audio/ogg" ? "ogg" : type === "audio/mpeg" ? "mp3" : "webm");

/** Step 1: one signed upload URL per recording. */
export async function createSpeakingUploads(userId: string, testId: string, files: { contentType: string; size: number }[]) {
  if (!speakingReviewAvailable()) throw new SpeakingReviewError("Öğretmen değerlendirmesi şu anda kapalı.");
  const { module: speaking } = speakingModule(testId);
  if (files.length !== promptCount(speaking)) throw new SpeakingReviewError("Kayıt sayısı testle eşleşmiyor.");
  const pending = await db.ieltsSpeakingSubmission.count({ where: { userId, status: "PENDING" } });
  if (pending >= SPEAKING_MAX_PENDING) throw new SpeakingReviewError(`Değerlendirme bekleyen ${SPEAKING_MAX_PENDING} gönderin var. Sonuçlar gelince yenisini gönderebilirsin.`);
  const batch = `${Date.now()}-${randomBytes(6).toString("hex")}`;
  return Promise.all(
    files.map(async (file, i) => {
      const type = baseAudioType(file.contentType);
      if (!(SPEAKING_AUDIO_TYPES as readonly string[]).includes(type)) throw new SpeakingReviewError("Bu tarayıcının ses kaydı biçimi desteklenmiyor.");
      if (!Number.isFinite(file.size) || file.size <= 0 || file.size > SPEAKING_MAX_BYTES) throw new SpeakingReviewError("Bir kayıt çok büyük ya da boş.");
      const key = `${PREFIX}/${userId}/${batch}/${String(i + 1).padStart(2, "0")}.${extension(type)}`;
      return { key, contentType: type, url: await presignUpload(BUCKET, key, type) };
    }),
  );
}

/** Step 2: checks every uploaded file and saves the submission for review. */
export async function submitSpeaking(
  user: { id: string; name: string },
  testId: string,
  input: { consent: boolean; recordings: { key: string; seconds: number }[] },
) {
  if (!input.consent) throw new SpeakingReviewError("Kayıtlarının öğretmenle paylaşılmasını onaylamalısın.");
  const { title, module: speaking } = speakingModule(testId);
  const questions = speaking.parts.flatMap((part, p) => part.prompts.map((q, i) => ({ part: p + 1, prompt: i + 1, question: q.text })));
  if (input.recordings.length !== questions.length) throw new SpeakingReviewError("Kayıt sayısı testle eşleşmiyor.");

  const recordings: SpeakingRecording[] = [];
  for (const [i, rec] of input.recordings.entries()) {
    if (typeof rec.key !== "string" || !rec.key.startsWith(`${PREFIX}/${user.id}/`)) throw new SpeakingReviewError("Kayıt bulunamadı.");
    const head = await headObject(BUCKET, rec.key);
    if (!head || head.size === 0) throw new SpeakingReviewError("Bir kaydın yüklenmesi tamamlanmamış. Lütfen tekrar dene.");
    if (head.size > SPEAKING_MAX_BYTES) {
      await deleteObject(BUCKET, rec.key).catch(() => undefined);
      throw new SpeakingReviewError("Bir kayıt çok büyük.");
    }
    const seconds = Number.isFinite(rec.seconds) ? Math.max(0, Math.min(600, Math.round(rec.seconds))) : 0;
    recordings.push({ key: rec.key, ...questions[i], seconds, contentType: baseAudioType(head.contentType) });
  }

  const submission = await db.ieltsSpeakingSubmission.create({ data: { userId: user.id, testId, recordings } });

  const staff = await db.user.findMany({ where: { isActive: true, role: { in: ["TEACHER", "ADMIN", "SUPER_ADMIN"] } }, select: { id: true } });
  for (const s of staff) {
    await notify(s.id, {
      category: "ADMIN",
      key: `ielts-speaking-new:${submission.id}`,
      title: "Yeni IELTS Speaking gönderimi",
      body: `${user.name} · ${title}`,
      href: `/admin/ielts-speaking/${submission.id}`,
    }).catch(() => null);
  }
  return submission;
}

const listSelect = {
  id: true,
  testId: true,
  status: true,
  overall: true,
  submittedAt: true,
  reviewedAt: true,
} as const;

export function listMySpeaking(userId: string) {
  return db.ieltsSpeakingSubmission.findMany({ where: { userId }, orderBy: { submittedAt: "desc" }, select: listSelect, take: 50 });
}

export function getMySpeaking(userId: string, id: string) {
  return db.ieltsSpeakingSubmission.findFirst({ where: { id, userId }, include: { reviewedBy: { select: { name: true } } } });
}

/** Waiting submissions first (oldest first), then recently reviewed ones. */
export async function listSpeakingForStaff() {
  const [pending, reviewed] = await Promise.all([
    db.ieltsSpeakingSubmission.findMany({ where: { status: "PENDING" }, orderBy: { submittedAt: "asc" }, select: { ...listSelect, user: { select: { name: true, email: true } } } }),
    db.ieltsSpeakingSubmission.findMany({ where: { status: "REVIEWED" }, orderBy: { reviewedAt: "desc" }, take: 50, select: { ...listSelect, user: { select: { name: true, email: true } } } }),
  ]);
  return [...pending, ...reviewed];
}

export function getSpeakingForStaff(id: string) {
  return db.ieltsSpeakingSubmission.findUnique({ where: { id }, include: { user: { select: { name: true, email: true } }, reviewedBy: { select: { name: true } } } });
}

export async function reviewSpeaking(id: string, reviewerId: string, input: { scores: Record<string, unknown>; feedback: unknown }) {
  const scores = {} as SpeakingScores;
  for (const c of SPEAKING_CRITERIA) {
    const value = Number(input.scores[c.key]);
    if (!isBand(value)) throw new SpeakingReviewError(`${c.name} için 0 ile 9 arasında bir band seç.`);
    scores[c.key] = value;
  }
  const feedback = String(input.feedback ?? "").trim();
  if (feedback.length < 20) throw new SpeakingReviewError("Öğrenciye en az birkaç cümlelik geri bildirim yaz.");
  if (feedback.length > 6000) throw new SpeakingReviewError("Geri bildirim çok uzun.");

  const existing = await db.ieltsSpeakingSubmission.findUnique({ where: { id }, select: { userId: true, testId: true } });
  if (!existing) throw new SpeakingReviewError("Gönderim bulunamadı.");
  const overall = speakingBand(scores);
  await db.ieltsSpeakingSubmission.update({
    where: { id },
    data: { ...scores, overall, feedback, status: "REVIEWED", reviewedById: reviewerId, reviewedAt: new Date() },
  });
  await notify(existing.userId, {
    category: "RESULT",
    key: `ielts-speaking:${id}`,
    title: "IELTS Speaking değerlendirmen hazır",
    body: `Öğretmenin Speaking bandını ${overall.toFixed(1)} olarak değerlendirdi.`,
    href: `/dashboard/ielts-speaking/${id}`,
  }).catch(() => null);
  return overall;
}

/** The learner removes a submission; its recordings are deleted from storage too. */
export async function deleteMySpeaking(userId: string, id: string) {
  const submission = await db.ieltsSpeakingSubmission.findFirst({ where: { id, userId }, select: { recordings: true } });
  if (!submission) throw new SpeakingReviewError("Gönderim bulunamadı.");
  for (const rec of recordingsOf(submission.recordings)) await deleteObject(BUCKET, rec.key).catch(() => undefined);
  await db.ieltsSpeakingSubmission.delete({ where: { id } });
}

export function recordingsOf(value: unknown): SpeakingRecording[] {
  return Array.isArray(value) ? (value as SpeakingRecording[]) : [];
}

/** Signed playback URL for recording `index`, for the learner who made it or a teacher. */
export async function speakingRecordingUrl(id: string, index: number, viewer: { id: string; role: string }) {
  const submission = await db.ieltsSpeakingSubmission.findUnique({ where: { id }, select: { userId: true, recordings: true } });
  if (!submission) return null;
  const staff = viewer.role === "TEACHER" || viewer.role === "ADMIN" || viewer.role === "SUPER_ADMIN";
  if (!staff && submission.userId !== viewer.id) return null;
  const rec = recordingsOf(submission.recordings)[index];
  return rec ? presignDownload(BUCKET, rec.key, 60 * 30) : null;
}
