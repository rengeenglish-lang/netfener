import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Timer } from "lucide-react";
import { auth } from "@/auth";
import { getAuthContext } from "@/server/auth/context";
import { listProducts } from "@/server/services/catalog.service";
import { favoriteProductIds } from "@/server/services/favorites.service";
import { getSubsiteExam, countExamPractice } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { EmptyState, FeatureCard, SectionLabel, SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";

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
  const online = exam.code === "YDS" ? "/dashboard/yds-denemeleri" : "/dashboard/mock-exam";
  const href = user ? online : `/register?next=${encodeURIComponent(online)}`;

  return (
    <>
      <SubsiteHeader eyebrow="Denemeler" title={`${exam.name} deneme sınavları`} copy="Gerçek sınav süresiyle tam deneme çöz; sonucunu ve yanlışlarını hemen gör." />
      {mockSets || exam.code === "YDS" ? (
        <FeatureCard href={href} eyebrow={exam.code === "YDS" ? "Online YDS denemeleri" : `${mockSets} online deneme`} title={user ? "Denemeye başla" : "Ücretsiz üye ol, denemeleri gör"} copy="Süre tutulur, otomatik puanlanır ve kaldığın yerden devam edebilirsin." cta={user ? "Denemelere git" : "Üye ol"} color={exam.color} icon={Timer} />
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
