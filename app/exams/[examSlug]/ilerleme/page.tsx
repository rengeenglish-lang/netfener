import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BarChart3 } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getSubsiteExam, getExamTopicsWithProgress, skillProgress } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { EmptyState, ProgressBar, SkillTile, SubsiteCard, SubsiteHeader, SectionLabel } from "@/components/exams/subsite/SubsiteUi";

type Props = { params: Promise<{ examSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} İlerlemem`, robots: { index: false, follow: true } } : { title: "Sınav Bulunamadı" };
}

export default async function ExamProgressPage({ params }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const user = await getAuthContext();
  if (!user)
    return (
      <>
        <SubsiteHeader eyebrow="İlerleme" title={`${exam.name} ilerlemen`} />
        <EmptyState icon={BarChart3} title="İlerlemeni görmek için giriş yap" copy="Tamamladığın dersler, beceri bazında ilerleme ve deneme sonuçların burada görünür." action={<Link href={`/sign-in?next=${encodeURIComponent(subsiteHref(exam.slug, "ilerleme"))}`} className="primary-button">Giriş yap</Link>} />
      </>
    );
  const topics = await getExamTopicsWithProgress(exam.id, user.id);
  const skills = skillProgress(topics);
  const total = topics.reduce((n, t) => n + t.lessonCount, 0);
  const done = topics.reduce((n, t) => n + t.completed, 0);
  const started = topics.filter((t) => t.completed > 0 && t.completed < t.lessonCount);

  return (
    <>
      <SubsiteHeader eyebrow="İlerleme" title={`${exam.name} ilerlemen`} copy="Konu anlatımı derslerinde tamamladıkların; deneme ve pratik sonuçların İlerleme Raporu’nda.">
        <Link href="/dashboard/progress" className="secondary-button">İlerleme raporu</Link>
      </SubsiteHeader>
      <SubsiteCard>
        <p className="text-sm text-[color:var(--muted)]">Tamamlanan dersler</p>
        <p className="mt-1 text-3xl font-extrabold">{done}<span className="text-base font-semibold text-[color:var(--muted)]"> / {total}</span></p>
        <ProgressBar percent={total ? Math.round((done / total) * 100) : 0} label="Genel ilerleme" />
      </SubsiteCard>
      <SectionLabel>{topics.some((t) => t.category) ? "Beceriler" : "Soru tipleri"}</SectionLabel>
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((s) => (
          <li key={s.key}>
            <SubsiteCard className="flex items-center gap-4">
              <SkillTile skillKey={s.key} color={exam.color} size={44} />
              <div className="min-w-0 flex-1">
                <p className="font-bold">{s.title}</p>
                {s.lessons ? <ProgressBar percent={s.percent} label={`${s.completed}/${s.lessons} ders`} /> : <p className="text-sm text-[color:var(--muted)]">Bu beceride henüz ders yok.</p>}
              </div>
            </SubsiteCard>
          </li>
        ))}
      </ul>
      {started.length ? (
        <>
          <SectionLabel>Devam eden konular</SectionLabel>
          <ul className="grid gap-2">
            {started.slice(0, 6).map((t) => (
              <li key={t.id}><SubsiteCard href={`/konu-anlatim?exam=${exam.slug}&topic=${t.slug}`} className="flex items-center justify-between gap-3 !p-4"><span className="font-semibold">{t.name}</span><span className="text-sm text-[color:var(--muted)]">{t.completed}/{t.lessonCount}</span></SubsiteCard></li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
}
