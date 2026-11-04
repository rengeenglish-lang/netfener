import type { Metadata } from "next";
import { auth } from "@/auth";
import { MaterialsHome } from "@/components/marketing/MaterialsHome";
import { listHomepageProducts, listHomepageGroups } from "@/server/services/catalog.service";
import { getHomeStats } from "@/server/services/home-stats.service";
import { listPublishedSiteReviews } from "@/server/services/site-reviews.service";

export const metadata: Metadata = {
  title: {
    absolute: "Netfener — IELTS, TOEFL, PTE, YDS ve YÖKDİL Hazırlık Platformu",
  },
  description:
    "IELTS, TOEFL, PTE, YDS ve YÖKDİL için konu anlatımları, deneme sınavları, seviye tespit, canlı grup dersleri ve çalışma materyalleri tek platformda.",
};

export default async function HomePage() {
  // Only real, approved reviews are shown (featured first); three fill one row of the grid.
  const [products, groups, reviews, session, stats] = await Promise.all([
    listHomepageProducts(),
    listHomepageGroups(),
    listPublishedSiteReviews(3),
    auth(),
    getHomeStats(),
  ]);
  return (
    <MaterialsHome
      products={products}
      groups={groups}
      reviews={reviews}
      isSignedIn={Boolean(session?.user)}
      stats={stats}
    />
  );
}
