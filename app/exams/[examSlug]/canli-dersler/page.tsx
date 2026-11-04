import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { listProducts } from "@/server/services/catalog.service";
import { favoriteProductIds } from "@/server/services/favorites.service";
import { getSubsiteExam } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { examGroupHref } from "@/lib/platform";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";

type Props = { params: Promise<{ examSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} Canlı Grup Dersleri`, alternates: { canonical: subsiteHref(exam.slug, "canli-dersler") } } : { title: "Sınav Bulunamadı" };
}

export default async function ExamGroupsPage({ params }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const [groups, favoriteIds] = await Promise.all([
    listProducts({ examTypeId: exam.id, category: "PREP_GROUP" }),
    favoriteProductIds((await auth())?.user?.id),
  ]);
  const umbrella = exam.code.startsWith("YOKDIL") ? "yokdil" : exam.slug;
  return (
    <>
      <SubsiteHeader eyebrow="Canlı dersler" title={`${exam.name} grup dersleri`} copy="Küçük gruplarda, eğitmenle programlı ve canlı ilerle.">
        <Link href={examGroupHref(umbrella)} className="secondary-button">Haftalık ders takvimi</Link>
      </SubsiteHeader>
      <ProductGrid favoriteIds={favoriteIds} products={groups} emptyLabel={`${exam.name} için açık grup şu an yok. Haftalık takvimden yeni grupları takip edebilirsin.`} />
    </>
  );
}
