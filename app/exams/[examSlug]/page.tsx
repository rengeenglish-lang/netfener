import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClipboardList, Compass, Library, Mic2, Timer, Type, Users } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { getSubsiteExam, getExamTopicsWithProgress, skillProgress } from "@/server/services/exam-subsite.service";
import { subsiteHref, isYokdil } from "@/lib/exam-subsite";
import { FeatureCard, ProgressBar, SectionLabel, SkillTile, SubsiteCard } from "@/components/exams/subsite/SubsiteUi";

type Props = { params: Promise<{ examSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) return { title: "Sınav Bulunamadı" };
  const title = `${exam.name} Hazırlık`;
  const description = exam.shortDescription ?? exam.content?.description ?? `${exam.name} sınavına konu anlatımları, pratik sorular ve deneme sınavlarıyla hazırlanın.`;
  return { title, description, alternates: { canonical: `/exams/${exam.slug}` }, openGraph: { title, description, type: "website" } };
}

const SPEAKING: Partial<Record<string, string>> = { IELTS: "/dashboard/speaking-practice/ielts", TOEFL: "/dashboard/speaking-practice/toefl" };

export default async function ExamHomePage({ params }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const user = await getAuthContext();
  const topics = await getExamTopicsWithProgress(exam.id, user?.id);
  const skills = skillProgress(exam, topics);
  const member = (href: string) => (user ? href : `/register?next=${encodeURIComponent(href)}`);
  const name = isYokdil(exam.code) ? exam.name.replace(/^YÖKDİL\s*/i, "YÖKDİL · ") : exam.name;
  const speaking = SPEAKING[exam.code];
  const first = user?.name?.split(" ")[0];

  return (
    <>
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-[color:var(--muted)]">{user ? "Tekrar hoş geldin" : exam.content?.badge ?? `${exam.name} hazırlık`}</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-[-.025em] sm:text-4xl">{first ? `Merhaba, ${first} 👋` : exam.content?.headline ?? `${exam.name} hazırlığın burada.`}</h1>
          <p className="mt-2 max-w-2xl text-[color:var(--muted)]">{user ? `${name} hazırlığın` : exam.content?.description}</p>
        </div>
        {!user ? (
          <div className="flex flex-wrap gap-2">
            <Link href={`/register?next=${encodeURIComponent(subsiteHref(exam.slug))}`} className="primary-button">Ücretsiz başla</Link>
            <Link href={subsiteHref(exam.slug, "konular")} className="secondary-button">Konulara göz at</Link>
          </div>
        ) : null}
      </header>

      <SectionLabel>Beceriler</SectionLabel>
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((s) => (
          <li key={s.key}>
            <SubsiteCard href={`${subsiteHref(exam.slug, "konular")}?beceri=${s.key}`} className="flex h-full items-center gap-4">
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

      <div className="mt-4">
        <FeatureCard href={subsiteHref(exam.slug, "denemeler")} eyebrow="Tam deneme" title={`${name} deneme sınavları`} copy="Gerçek sınav süresiyle tam deneme çöz, sonucunu hemen gör." cta="Denemelere git" color={exam.color} icon={Timer} />
      </div>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        <li><FeatureCard href={subsiteHref(exam.slug, "pratik")} title="Pratik sorular" copy="Konu konu soru çöz, açıklamaları incele." cta="Pratiğe başla" color={exam.color} icon={ClipboardList} /></li>
        {speaking ? (
          <li><FeatureCard href={member(speaking)} eyebrow="Yeni" title="Speaking pratiği" copy="Sınav formatında konuşma görevleriyle pratik yap." cta="Konuşmaya başla" color={exam.color} icon={Mic2} /></li>
        ) : (
          <li><FeatureCard href={member("/dashboard/kelime-motoru")} title="Kelime Motoru" copy="Seviyene göre kelime setleri, kartlar ve notlar." cta="Kelimelere başla" color={exam.color} icon={Type} /></li>
        )}
      </ul>

      <SectionLabel>Hazırlığını tamamla</SectionLabel>
      <ul className="grid gap-3 sm:grid-cols-3">
        <li><SubsiteCard href={member("/seviye-tespit")} className="h-full"><Compass aria-hidden="true" className="text-[color:var(--accent-strong)]" /><p className="mt-3 font-bold">Seviye tespiti</p><p className="text-sm text-[color:var(--muted)]">Eksiklerini gör, nereden başlayacağını öğren.</p></SubsiteCard></li>
        <li><SubsiteCard href={subsiteHref(exam.slug, "canli-dersler")} className="h-full"><Users aria-hidden="true" className="text-[color:var(--accent-strong)]" /><p className="mt-3 font-bold">Canlı grup dersleri</p><p className="text-sm text-[color:var(--muted)]">{name} için küçük gruplarda programlı ders.</p></SubsiteCard></li>
        <li><SubsiteCard href={subsiteHref(exam.slug, "kaynaklar")} className="h-full"><Library aria-hidden="true" className="text-[color:var(--accent-strong)]" /><p className="mt-3 font-bold">Kaynaklar</p><p className="text-sm text-[color:var(--muted)]">{name} kitapları ve çalışma paketleri.</p></SubsiteCard></li>
      </ul>

      {exam.content?.stats.length ? (
        <>
          <SectionLabel>Sınavı tanı</SectionLabel>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {exam.content.stats.map((s) => (
              <SubsiteCard key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-extrabold" style={{ color: exam.color }}>{s.value}</dd>
                <dd className="mt-1 text-xs text-[color:var(--muted)]">{s.label}</dd>
              </SubsiteCard>
            ))}
          </dl>
        </>
      ) : null}
    </>
  );
}
