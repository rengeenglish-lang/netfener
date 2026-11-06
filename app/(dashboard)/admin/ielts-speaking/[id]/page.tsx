import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getSpeakingForStaff, recordingsOf } from "@/server/services/ielts-speaking.service";
import { reviewSpeakingAction } from "@/app/actions/ielts-speaking";
import { SpeakingRecordingList, SpeakingStatus, speakingTestTitle } from "@/components/ielts/SpeakingSubmissionParts";
import { SpeakingReviewForm } from "@/components/admin/SpeakingReviewForm";

export const metadata: Metadata = { title: "IELTS Speaking Değerlendirmesi" };

type Props = { params: Promise<{ id: string }> };

export default async function AdminSpeakingDetailPage({ params }: Props) {
  const { id } = await params;
  const s = await getSpeakingForStaff(id);
  if (!s) notFound();
  const date = new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" });

  return (
    <div>
      <Link href="/admin/ielts-speaking" className="ghost-button mb-4 -ml-4"><ArrowLeft size={18} /> Tüm gönderimler</Link>
      <p className="eyebrow">IELTS Speaking</p>
      <h1 className="page-title">{speakingTestTitle(s.testId)}</h1>
      <p className="mt-1 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
        {s.user.name} · {s.user.email} · {date.format(s.submittedAt)} <SpeakingStatus status={s.status} />
        {s.reviewedBy?.name ? <span>Değerlendiren: {s.reviewedBy.name}</span> : null}
      </p>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_380px]">
        <SpeakingRecordingList id={s.id} testId={s.testId} recordings={recordingsOf(s.recordings)} />
        <div className="xl:sticky xl:top-6 xl:self-start">
          <SpeakingReviewForm
            action={reviewSpeakingAction.bind(null, s.id)}
            existing={{ fluency: s.fluency, lexical: s.lexical, grammar: s.grammar, pronunciation: s.pronunciation, feedback: s.feedback }}
          />
        </div>
      </div>
    </div>
  );
}
