import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Monitor, Timer } from "lucide-react";
import { auth } from "@/auth";
import { getAuthContext } from "@/server/auth/context";
import { getActiveGoal } from "@/server/services/diagnostic-goals.service";
import { SwitchExamButton } from "@/components/exams/subsite/ExamContextBanner";
import { listProducts } from "@/server/services/catalog.service";
import { favoriteProductIds } from "@/server/services/favorites.service";
import { getSubsiteExam, countExamPractice } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { EmptyState, FeatureCard, SectionLabel, SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";
import { listHref, trackByCode } from "@/lib/online-denemeler/tracks";
import { releasedCount } from "@/lib/online-denemeler/catalog";

type Props = { params: Promise<{ examSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} Deneme Sınavları`, alternates: { canonical: subsiteHref(exam.slug, "denemeler") } } : { title: "Sınav Bulunamadı" };
}

export default async function ExamMocksPage({ params }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const user = await getAuthContext();
  const [{ mockSets }, camps, favoriteIds] = await Promise.all([
    countExamPractice(exam),
    listProducts({ examTypeId: exam.id, category: "MOCK_CAMP" }),
    favoriteProductIds((await auth())?.user?.id),
  ]);
  const goal = user ? await getActiveGoal(user.id) : null;
  const goalMatches = goal?.examTypeId === exam.id;
  const track = trackByCode(exam.code);
  const onlineCount = track ? releasedCount(track) : 0;
  const online = track && onlineCount ? listHref(track) : "/dashboard/mock-exam";
  const href = user ? online : `/register?next=${encodeURIComponent(online)}`;

  return (
    <>
      <SubsiteHeader eyebrow="Denemeler" title={`${exam.name} deneme sınavları`} copy="Gerçek sınav süresiyle tam deneme çöz; sonucunu ve yanlışlarını hemen gör." />
      {exam.slug === "ielts" ? (
        <div className="mb-5">
          <FeatureCard href="/ielts/testler" eyebrow="IELTS test kütüphanesi" title="Bilgisayar ekranında IELTS testi" copy="Listening, Reading ve Writing: kalan süre, soru gezgini ve Review işaretiyle gerçek test ekranı düzeni." cta="Kütüphaneyi aç" color={exam.color} icon={Monitor} />
        </div>
      ) : null}
      {mockSets || onlineCount ? (
        user && !goalMatches ? (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <div><p className="text-lg font-extrabold">{exam.name} denemelerine geç</p><p className="mt-1 text-sm text-[color:var(--muted)]">Denemeler aktif sınavına göre açılır. Tek tıkla {exam.name}’e geç.</p></div>
            <SwitchExamButton exam={exam.slug} next={online} label={`${exam.name} denemelerine başla`} />
          </div>
        ) : <FeatureCard href={href} eyebrow={onlineCount ? `${onlineCount} online ${exam.name} denemesi` : `${mockSets} online deneme`} title={user ? "Denemeye başla" : "Ücretsiz üye ol, denemeleri gör"} copy="Süre tutulur, otomatik puanlanır ve kaldığın yerden devam edebilirsin." cta={user ? "Denemelere git" : "Üye ol"} color={exam.color} icon={Timer} />
      ) : (
        <EmptyState icon={Timer} title={`${exam.name} online denemeleri hazırlanıyor`} copy="Bu sınav için online deneme henüz yayında değil." action={<Link href={subsiteHref(exam.slug, "pratik")} className="secondary-button">Pratik sorulara git</Link>} />
      )}
      {camps.length ? (
        <>
          <SectionLabel>Deneme kampları</SectionLabel>
          <ProductGrid favoriteIds={favoriteIds} products={camps} emptyLabel="" />
        </>
      ) : null}
    </>
  );
}
