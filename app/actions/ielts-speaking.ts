"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthContext, requireStaff } from "@/server/auth/context";
import {
  SpeakingReviewError,
  createSpeakingUploads,
  deleteMySpeaking,
  reviewSpeaking,
  submitSpeaking,
} from "@/server/services/ielts-speaking.service";
import type { AdminFormState } from "@/app/actions/admin-testimonials";

const message = (e: unknown, fallback: string) => (e instanceof SpeakingReviewError ? e.message : fallback);

export type SpeakingUploadResult = { ok: true; uploads: { key: string; url: string; contentType: string }[] } | { ok: false; message: string };

/** Step 1 of sending a Speaking mock to a teacher: signed URLs the browser uploads each recording to. */
export async function requestSpeakingUploadsAction(testId: string, files: { contentType: string; size: number }[]): Promise<SpeakingUploadResult> {
  const user = await getAuthContext();
  if (!user) return { ok: false, message: "Öğretmene göndermek için giriş yapman gerekiyor." };
  try {
    return { ok: true, uploads: await createSpeakingUploads(user.id, testId, files) };
  } catch (e) {
    return { ok: false, message: message(e, "Yükleme başlatılamadı. Lütfen tekrar dene.") };
  }
}

export type SpeakingSubmitResult = { ok: true; id: string } | { ok: false; message: string };

/** Step 2: saves the uploaded recordings as a submission waiting for a teacher. */
export async function submitSpeakingAction(testId: string, consent: boolean, recordings: { key: string; seconds: number }[]): Promise<SpeakingSubmitResult> {
  const user = await getAuthContext();
  if (!user) return { ok: false, message: "Öğretmene göndermek için giriş yapman gerekiyor." };
  try {
    const submission = await submitSpeaking(user, testId, { consent, recordings });
    revalidatePath("/dashboard/ielts-speaking");
    revalidatePath("/admin/ielts-speaking");
    return { ok: true, id: submission.id };
  } catch (e) {
    return { ok: false, message: message(e, "Gönderilemedi. Lütfen tekrar dene.") };
  }
}

export async function reviewSpeakingAction(id: string, _prev: AdminFormState, form: FormData): Promise<AdminFormState> {
  const staff = await requireStaff();
  try {
    await reviewSpeaking(id, staff.id, {
      scores: { fluency: form.get("fluency"), lexical: form.get("lexical"), grammar: form.get("grammar"), pronunciation: form.get("pronunciation") },
      feedback: form.get("feedback"),
    });
  } catch (e) {
    return { status: "error", message: message(e, "Kaydedilemedi.") };
  }
  revalidatePath("/admin/ielts-speaking");
  revalidatePath(`/admin/ielts-speaking/${id}`);
  revalidatePath(`/dashboard/ielts-speaking/${id}`);
  redirect("/admin/ielts-speaking");
}

export async function deleteMySpeakingAction(id: string) {
  const user = await getAuthContext();
  if (!user) redirect("/sign-in");
  await deleteMySpeaking(user.id, id).catch(() => undefined);
  revalidatePath("/dashboard/ielts-speaking");
  redirect("/dashboard/ielts-speaking");
}
