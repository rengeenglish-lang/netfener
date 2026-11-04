import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClipboardList, Compass } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getActiveGoal } from "@/server/services/diagnostic-goals.service";
import { getSubsiteExam, countExamPractice } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { EmptyState, FeatureCard, SubsiteCard, SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";
import { SwitchExamButton } from "@/components/exams/subsite/ExamContextBanner";

type Props = { params: Promise<{ examSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} Pratik Sorular`, alternates: { canonical: subsiteHref(exam.slug, "pratik") } } : { title: "Sınav Bulunamadı" };
}

export default async function ExamPracticePage({ params }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const user = await getAuthContext();
  const [{ practice }, goal] = await Promise.all([countExamPractice(exam), user ? getActiveGoal(user.id) : null]);
  const goalMatches = goal?.examTypeId === exam.id;
  const nf = new Intl.NumberFormat("tr-TR");

  return (
    <>
      <SubsiteHeader eyebrow="Pratik" title={`${exam.name} pratik soruları`} copy="Konu konu soru çöz; her sorunun açıklamasını incele, yanlışların Hatalarım’a eklenir." />
      {practice ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {user && !goalMatches ? (
            <div className="flex flex-col justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <div><p className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{nf.format(practice)} soru</p><p className="mt-1 text-lg font-extrabold">{exam.name} pratiğine geç</p><p className="mt-1.5 text-sm text-[color:var(--muted)]">Pratik sorular aktif sınavına göre gelir. Tek tıkla {exam.name}’e geç ve sorulara başla.</p></div>
              <div className="mt-4"><SwitchExamButton exam={exam.slug} next="/dashboard/practice" label={`${exam.name} ile pratiğe başla`} /></div>
            </div>
          ) : <FeatureCard
            href={!user ? `/register?next=${encodeURIComponent(subsiteHref(exam.slug, "pratik"))}` : "/dashboard/practice"}
            eyebrow={`${nf.format(practice)} soru`}
            title={user ? "Pratiğe devam et" : "Ücretsiz üye ol, pratiğe başla"}
            copy="Soru tipleri ve konular sınavın gerçek formatına göre."
            cta={user ? "Sorulara git" : "Üye ol"}
            color={exam.color}
            icon={ClipboardList}
          />}
          <SubsiteCard href={user ? "/seviye-tespit" : `/register?next=${encodeURIComponent("/seviye-tespit")}`} className="flex flex-col justify-between">
            <div><Compass aria-hidden="true" className="text-[color:var(--accent-strong)]" /><p className="mt-3 font-bold">Önce seviyeni ölç</p><p className="text-sm text-[color:var(--muted)]">Seviye tespiti, hangi konulardan başlaman gerektiğini gösterir.</p></div>
            <span className="mt-4 text-sm font-bold text-[color:var(--accent-strong)]">Seviye tespitine git →</span>
          </SubsiteCard>
        </div>
      ) : (
        <EmptyState icon={ClipboardList} title={`${exam.name} pratik soruları hazırlanıyor`} copy="Bu sınav için soru havuzu henüz yayında değil. Konu anlatımlarıyla başlayabilirsin." action={<Link href={subsiteHref(exam.slug, "konular")} className="secondary-button">Konu anlatımı</Link>} />
      )}
    </>
  );
}
