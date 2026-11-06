import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getMySpeaking, recordingsOf } from "@/server/services/ielts-speaking.service";
import { deleteMySpeakingAction } from "@/app/actions/ielts-speaking";
import { ActionButton } from "@/components/coaching/ActionButton";
import { SpeakingRecordingList, SpeakingScoreCard, SpeakingStatus, speakingTestTitle } from "@/components/ielts/SpeakingSubmissionParts";

export const metadata: Metadata = { title: "IELTS Speaking Değerlendirmesi" };

type Props = { params: Promise<{ id: string }> };

export default async function MySpeakingDetailPage({ params }: Props) {
  const { id } = await params;
  const user = await getAuthContext();
  if (!user) return null;
  const s = await getMySpeaking(user.id, id);
  if (!s) notFound();
  const date = new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" });

  return (
    <div>
      <Link href="/dashboard/ielts-speaking" className="ghost-button mb-4 -ml-4"><ArrowLeft size={18} /> Tüm gönderimler</Link>
      <p className="eyebrow">IELTS Speaking</p>
      <h1 className="page-title">{speakingTestTitle(s.testId)}</h1>
      <p className="mt-1 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
        Gönderim: {date.format(s.submittedAt)} <SpeakingStatus status={s.status} />
      </p>

      {s.status === "REVIEWED" ? (
        <div className="panel mt-6 space-y-4">
          <SpeakingScoreCard scores={s} />
          <div>
            <p className="eyebrow">Öğretmen geri bildirimi{s.reviewedBy?.name ? ` · ${s.reviewedBy.name}` : ""}</p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7">{s.feedback}</p>
          </div>
          <p className="text-xs text-[color:var(--muted)]">Bu puanlar bir öğretmenin tahminidir; resmî IELTS sonucu değildir.</p>
        </div>
      ) : (
        <p className="panel mt-6 text-sm leading-6">Kayıtların bir öğretmen tarafından dinleniyor. Değerlendirme tamamlanınca bildirim alacaksın.</p>
      )}

      <div className="mt-8">
        <SpeakingRecordingList id={s.id} testId={s.testId} recordings={recordingsOf(s.recordings)} />
      </div>

      <div className="mt-10 border-t border-[color:var(--border)] pt-6">
        <p className="mb-3 text-sm text-[color:var(--muted)]">Bu gönderimi ve tüm ses kayıtlarını kalıcı olarak silebilirsin.</p>
        <ActionButton
          action={deleteMySpeakingAction.bind(null, s.id)}
          label="Gönderimi ve kayıtları sil"
          pendingLabel="Siliniyor…"
          confirm="Bu gönderim ve tüm ses kayıtları kalıcı olarak silinecek. Emin misin?"
        />
      </div>
    </div>
  );
}
