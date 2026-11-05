import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Check, Lock } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getSubsiteExam, getExamTopicsWithProgress, skillProgress } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { konuAnlatimHref } from "@/lib/konu-links";
import { EmptyState, ProgressBar, SkillTile, SubsiteCard, SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";

type Props = { params: Promise<{ examSlug: string }>; searchParams: Promise<{ beceri?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} Konu Anlatımı`, alternates: { canonical: subsiteHref(exam.slug, "konular") } } : { title: "Sınav Bulunamadı" };
}

/** Konular: the skill / question-type cards only; a card opens its own page with every topic and lesson in it. */
export default async function ExamTopicsPage({ params, searchParams }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const { beceri } = await searchParams;
  const user = await getAuthContext();
  const all = await getExamTopicsWithProgress(exam.id, user?.id);
  const skills = skillProgress(all);
  const skill = skills.find((s) => s.key === beceri);
  const firstId = all[0]?.id;
  const base = subsiteHref(exam.slug, "konular");
  const byQuestionType = !all.some((t) => t.category);

  if (!skill) {
    return (
      <>
        <SubsiteHeader eyebrow="Konu anlatımı" title={`${exam.name} konuları`} copy={`${byQuestionType ? "Bir soru tipi" : "Bir beceri"} seç, içindeki tüm konu ve dersleri gör. İlk konu ücretsiz, tamamı planına dahil.`} />
        {skills.length ? (
          <ul className={`grid gap-3 sm:grid-cols-2 ${skills.length > 4 ? "lg:grid-cols-3" : ""}`}>
            {skills.map((s) => (
              <li key={s.key}>
                <SubsiteCard href={`${base}?beceri=${s.key}`} className="flex h-full items-center gap-4">
                  <SkillTile skillKey={s.key} color={exam.color} />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold">{s.title}</p>
                    <p className="text-sm text-[color:var(--muted)]">{s.topics ? `${s.topics} konu · ${s.lessons} ders` : s.copy}</p>
                    {user && s.lessons ? <ProgressBar percent={s.percent} label="İlerleme" /> : null}
                  </div>
                </SubsiteCard>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon={BookOpen} title="Henüz konu yok" copy="Bu sınavın konu anlatımları hazırlanıyor." />
        )}
      </>
    );
  }

  const topics = all.filter((t) => skill.topicIds.includes(t.id));
  return (
    <>
      <Link href={base} className="mb-4 inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--muted)] hover:text-[color:var(--foreground)]">
        <ArrowLeft size={15} aria-hidden="true" /> Tüm konular
      </Link>
      <div className="mb-6 flex items-center gap-4 [&>header]:mb-0">
        <SkillTile skillKey={skill.key} color={exam.color} size={60} />
        <SubsiteHeader eyebrow={`${exam.name} · Konu anlatımı`} title={skill.title} copy={`${topics.length} konu · ${skill.lessons} ders`} />
      </div>
      {topics.length ? (
        <ol className="grid gap-4">
          {topics.map((t) => {
            const locked = t.id !== firstId && !user;
            return (
              <li key={t.id} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_1px_3px_rgb(var(--shadow-rgb)/.08)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="flex flex-wrap items-center gap-2 text-lg font-extrabold">
                      {t.name}
                      {t.id === firstId ? <span className="rounded-full bg-[color:var(--accent-soft)] px-2 py-0.5 text-[11px] font-bold text-[color:var(--accent-strong)]">Ücretsiz</span> : null}
                      {locked ? <Lock size={15} aria-label="Plan gerekir" className="text-[color:var(--muted)]" /> : null}
                    </h2>
                    <p className="mt-0.5 text-xs text-[color:var(--muted)]">{t.lessonCount} ders{user && t.lessonCount ? ` · ${t.completed}/${t.lessonCount} tamamlandı` : ""}</p>
                  </div>
                  <Link href={konuAnlatimHref(exam.slug, t.slug)} className="secondary-button !py-2 text-sm">Konuyu aç</Link>
                </div>
                {t.lessons.length ? (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {t.lessons.map((l, i) => (
                      <li key={l.id}>
                        <Link href={konuAnlatimHref(exam.slug, t.slug)} className="flex items-center gap-3 rounded-xl border border-[color:var(--border)] px-3 py-2.5 text-sm transition hover:border-[color:rgb(var(--accent-rgb)/.35)] hover:bg-[color:var(--canvas)]">
                          <span className="grid size-7 shrink-0 place-items-center rounded-lg text-xs font-bold" style={{ background: `color-mix(in srgb, ${exam.color} 14%, transparent)`, color: exam.color }}>
                            {l.done ? <Check size={14} aria-label="Tamamlandı" /> : i + 1}
                          </span>
                          <span className="min-w-0 flex-1 font-semibold">{l.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ol>
      ) : (
        <EmptyState icon={BookOpen} title="Bu alanda henüz konu yok" copy="Diğer başlıklara göz atabilirsin." action={<Link href={base} className="secondary-button">Tüm konular</Link>} />
      )}
    </>
  );
}
