import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, Check, Lock } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getSubsiteExam, getExamTopicsWithProgress } from "@/server/services/exam-subsite.service";
import { skillCards, subsiteHref, topicMatchesSkill } from "@/lib/exam-subsite";
import { konuAnlatimHref } from "@/lib/konu-links";
import { EmptyState, SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";

type Props = { params: Promise<{ examSlug: string }>; searchParams: Promise<{ beceri?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} Konu Anlatımı`, alternates: { canonical: subsiteHref(exam.slug, "konular") } } : { title: "Sınav Bulunamadı" };
}

export default async function ExamTopicsPage({ params, searchParams }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const { beceri } = await searchParams;
  const user = await getAuthContext();
  const all = await getExamTopicsWithProgress(exam.id, user?.id);
  const skills = skillCards(exam.family);
  const skill = skills.find((s) => s.key === beceri);
  const topics = skill ? all.filter((t) => topicMatchesSkill(t, skill)) : all;
  const firstId = all[0]?.id;
  const base = subsiteHref(exam.slug, "konular");

  return (
    <>
      <SubsiteHeader eyebrow="Konu anlatımı" title={skill ? `${skill.title} konuları` : `${exam.name} konuları`} copy={`${topics.length} konu${skill ? ` (toplam ${all.length})` : ""} · İlk konu ücretsiz, tamamı planına dahil.`} />
      <nav aria-label="Beceri filtresi" className="mb-5 flex flex-wrap gap-2">
        <Link href={base} aria-current={!skill ? "page" : undefined} className={`pill-tab ${!skill ? "pill-tab-active" : ""}`}>Tümü</Link>
        {skills.map((s) => (
          <Link key={s.key} href={`${base}?beceri=${s.key}`} aria-current={skill?.key === s.key ? "page" : undefined} className={`pill-tab ${skill?.key === s.key ? "pill-tab-active" : ""}`}>{s.title}</Link>
        ))}
      </nav>
      {topics.length ? (
        <ol className="grid gap-3 sm:grid-cols-2">
          {topics.map((t, i) => {
            const done = t.lessonCount > 0 && t.completed === t.lessonCount;
            return (
              <li key={t.id}>
                <Link href={konuAnlatimHref(exam.slug, t.slug)} className="flex h-full items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_1px_3px_rgb(var(--shadow-rgb)/.08)] transition hover:-translate-y-0.5 hover:border-[color:rgb(var(--accent-rgb)/.35)]">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl text-sm font-bold" style={{ background: `color-mix(in srgb, ${exam.color} 14%, transparent)`, color: exam.color }}>{done ? <Check size={16} aria-label="Tamamlandı" /> : i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2 font-bold">
                      {t.name}
                      {t.id === firstId ? <span className="rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-[11px] font-bold text-[color:var(--accent-strong)]">Ücretsiz</span> : null}
                    </span>
                    <span className="mt-0.5 block text-xs text-[color:var(--muted)]">
                      {t.category ? `${t.category} · ` : ""}{t.lessonCount} ders{user && t.lessonCount ? ` · ${t.completed}/${t.lessonCount} tamamlandı` : ""}
                    </span>
                  </span>
                  {t.id !== firstId && !user ? <Lock size={15} aria-label="Plan gerekir" className="mt-1 shrink-0 text-[color:var(--muted)]" /> : null}
                </Link>
              </li>
            );
          })}
        </ol>
      ) : (
        <EmptyState icon={BookOpen} title="Bu alanda henüz konu yok" copy="Diğer becerilere göz atabilir ya da tüm konuları görebilirsin." action={<Link href={base} className="secondary-button">Tüm konular</Link>} />
      )}
    </>
  );
}
