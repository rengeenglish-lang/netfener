import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { listProducts } from "@/server/services/catalog.service";
import { favoriteProductIds } from "@/server/services/favorites.service";
import { getSubsiteExam } from "@/server/services/exam-subsite.service";
import { subsiteHref } from "@/lib/exam-subsite";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { SectionLabel, SubsiteHeader } from "@/components/exams/subsite/SubsiteUi";

type Props = { params: Promise<{ examSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exam = await getSubsiteExam((await params).examSlug);
  return exam ? { title: `${exam.name} Kitap ve Kaynaklar`, alternates: { canonical: subsiteHref(exam.slug, "kaynaklar") } } : { title: "Sınav Bulunamadı" };
}

export default async function ExamResourcesPage({ params }: Props) {
  const exam = await getSubsiteExam((await params).examSlug);
  if (!exam) notFound();
  const [books, packages, favoriteIds] = await Promise.all([
    listProducts({ examTypeId: exam.id, category: "BOOK" }),
    listProducts({ examTypeId: exam.id, category: "STUDY_PACKAGE" }),
    favoriteProductIds((await auth())?.user?.id),
  ]);
  return (
    <>
      <SubsiteHeader eyebrow="Kaynaklar" title={`${exam.name} kitap ve kaynakları`} copy="Yalnızca bu sınav için hazırlanmış kitaplar ve çalışma paketleri." />
      <SectionLabel>Kitaplar</SectionLabel>
      <ProductGrid favoriteIds={favoriteIds} products={books} emptyLabel={`${exam.name} kitapları yakında eklenecek.`} />
      <SectionLabel>Çalışma paketleri</SectionLabel>
      <ProductGrid favoriteIds={favoriteIds} products={packages} emptyLabel={`${exam.name} çalışma paketleri yakında eklenecek.`} />
    </>
  );
}
