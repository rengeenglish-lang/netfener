import "server-only";
import { db } from "@/server/db";
import { getPlanAccess } from "@/server/services/plans.service";
import { hasCourseAccess } from "@/server/services/access.service";
import { hasEbookAccess } from "@/server/services/ebooks.service";
import { NETFENER_EBOOKS } from "@/lib/netfener-ebooks";
import { isEbookFreePromoActive } from "@/lib/netfener-ebook-promo";
import { FREE_WORD_LIST_SLUGS, getFreeWordList } from "@/lib/free-word-lists";
import { TRACKS, listHref } from "@/lib/online-denemeler/tracks";
import { releasedCount } from "@/lib/online-denemeler/catalog";
import { SITE_PAGES } from "@/lib/site-search-pages";
import { termSlug } from "@/lib/dictionary/text";

/**
 * Site-wide search (the header's search icon → /ara). Everything a visitor can open is listed; paid
 * things say whether this viewer can open them right now ("granted") or not ("denied").
 */
export type SearchAccess = "free" | "granted" | "denied";
export type SearchResult = {
  kind: string;
  title: string;
  snippet?: string;
  href: string;
  access: SearchAccess;
  /** Where to go when access is denied (plans, product page, sign-in). */
  unlockHref?: string;
  unlockLabel?: string;
};

type Viewer = { id: string; role: string } | null;

const MAX_PER_KIND = 8;

/** Lower-cased, Turkish-aware form used for matching. */
export const fold = (s: string) =>
  s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i")
    .replace(/\s+/g, " ")
    .trim();

/** Every word of the query must appear in the text. */
export function matches(query: string, ...texts: (string | null | undefined)[]) {
  const hay = fold(texts.filter(Boolean).join(" "));
  return fold(query)
    .split(" ")
    .filter(Boolean)
    .every((w) => hay.includes(w));
}

function words(q: string) {
  return q.split(/\s+/).filter((w) => w.length >= 2).slice(0, 5);
}

/** `contains` on every query word (case-insensitive), for Prisma filters on one or more fields. */
function containsAll(q: string, fields: string[]) {
  return words(q).map((w) => ({ OR: fields.map((f) => ({ [f]: { contains: w, mode: "insensitive" as const } })) }));
}

export async function searchSite(rawQuery: string, viewer: Viewer): Promise<SearchResult[]> {
  const q = rawQuery.trim().slice(0, 80);
  if (q.length < 2) return [];
  const signedIn = Boolean(viewer);
  const access = await getPlanAccess(viewer);
  const signIn = (next: string) => `/sign-in?next=${encodeURIComponent(next)}`;
  const planGate = (feature: Parameters<typeof access.can>[0], href: string): Pick<SearchResult, "access" | "unlockHref" | "unlockLabel"> =>
    access.can(feature)
      ? { access: "granted" }
      : signedIn
        ? { access: "denied", unlockHref: "/planlar", unlockLabel: "Planları gör" }
        : { access: "denied", unlockHref: signIn(href), unlockLabel: "Giriş yap" };

  const [topics, products, posts] = await Promise.all([
    db.examTopic.findMany({
      where: { AND: containsAll(q, ["name", "description"]) },
      select: { id: true, name: true, slug: true, description: true, examTypeId: true, examType: { select: { slug: true, name: true } } },
      orderBy: { displayOrder: "asc" },
      take: 30,
    }),
    db.product.findMany({
      where: { isPublished: true, AND: containsAll(q, ["title", "subtitle", "shortDescription"]) },
      select: { id: true, slug: true, title: true, subtitle: true, shortDescription: true, category: true, salePrice: true, planTier: true, course: { select: { id: true } } },
      orderBy: { displayOrder: "asc" },
      take: 20,
    }),
    db.blogPost.findMany({
      where: { status: "PUBLISHED", AND: containsAll(q, ["title", "excerpt"]) },
      select: { slug: true, title: true, excerpt: true },
      orderBy: { publishedAt: "desc" },
      take: MAX_PER_KIND,
    }),
  ]);

  const results: SearchResult[] = [];

  // Pages and tools.
  for (const p of SITE_PAGES.filter((p) => matches(q, p.title, p.keywords, p.snippet)).slice(0, MAX_PER_KIND)) {
    results.push({ kind: "Sayfa", title: p.title, snippet: p.snippet, href: p.href, access: "free" });
  }

  // Online denemeler (plan feature).
  for (const t of TRACKS.filter((t) => releasedCount(t) > 0 && matches(q, `${t.name} deneme denemeler deneme sınavı mock exam`))) {
    const href = listHref(t);
    results.push({ kind: "Deneme", title: `${t.name} online denemeleri`, snippet: `${releasedCount(t)} tam deneme · 80 soru · 180 dakika`, href, ...planGate("MOCK_EXAMS", href) });
  }

  // Konu anlatımı: the first topic of every exam is a free preview.
  if (topics.length) {
    const firstByExam = new Map(
      (
        await db.examTopic.findMany({
          where: { examTypeId: { in: [...new Set(topics.map((t) => t.examTypeId))] } },
          orderBy: { displayOrder: "asc" },
          distinct: ["examTypeId"],
          select: { id: true, examTypeId: true },
        })
      ).map((t) => [t.examTypeId, t.id]),
    );
    for (const t of topics.slice(0, MAX_PER_KIND * 2)) {
      const href = `/konu-anlatim?exam=${t.examType.slug}&topic=${t.slug}`;
      const free = firstByExam.get(t.examTypeId) === t.id;
      results.push({
        kind: "Konu anlatımı",
        title: `${t.examType.name} · ${t.name}`,
        snippet: t.description?.slice(0, 140) ?? undefined,
        href,
        ...(free ? { access: "free" as const } : planGate("KONU_ANLATIMI", href)),
      });
    }
  }

  // Netfener e-books: owned editions (or the free campaign) open the book.
  const promo = isEbookFreePromoActive();
  for (const book of NETFENER_EBOOKS.filter((b) => matches(q, b.title, b.subtitle, b.description, "e-kitap kitap")).slice(0, MAX_PER_KIND)) {
    const href = `/kaynaklar/e-kitaplar/onizleme/${book.slug}`;
    const owns = viewer ? (await hasEbookAccess(viewer.id, book.slug, "online")) || (await hasEbookAccess(viewer.id, book.slug, "pdf")) : false;
    results.push({
      kind: "E-kitap",
      title: book.title,
      snippet: book.subtitle,
      href: owns || promo ? `/kaynaklar/e-kitaplar/oku/${book.slug}` : href,
      ...(owns || promo ? { access: "granted" as const } : { access: "denied" as const, unlockHref: href, unlockLabel: "Önizle ve satın al" }),
    });
  }

  // Packages, group lessons and plans.
  const plan = access.plan;
  for (const p of products.filter((p) => p.category !== "BOOK").slice(0, MAX_PER_KIND)) {
    if (p.category === "PLAN") {
      const owned = plan?.tier && plan.tier === p.planTier;
      results.push({ kind: "Plan", title: p.title, snippet: p.shortDescription ?? undefined, href: "/planlar", ...(owned ? { access: "granted" as const } : { access: "denied" as const, unlockHref: "/planlar", unlockLabel: "Planı incele" }) });
      continue;
    }
    const href = `/packages/${p.slug}`;
    const free = Number(p.salePrice) <= 0;
    const owned = !free && viewer && p.course ? await hasCourseAccess(viewer.id, p.course.id) : false;
    results.push({
      kind: p.category === "PREP_GROUP" ? "Grup dersi" : "Paket",
      title: p.title,
      snippet: p.subtitle ?? p.shortDescription ?? undefined,
      href,
      ...(free ? { access: "free" as const } : owned ? { access: "granted" as const } : { access: "denied" as const, unlockHref: href, unlockLabel: "Satın al" }),
    });
  }

  // Free word lists.
  for (const slug of FREE_WORD_LIST_SLUGS) {
    const list = getFreeWordList(slug)!;
    if (matches(q, list.title, list.exam, list.description, "kelime listesi ücretsiz kaynak")) {
      results.push({ kind: "Ücretsiz kaynak", title: list.title, snippet: list.description, href: `/kaynaklar/ucretsiz/${slug}`, access: "free" });
    }
  }

  for (const post of posts) {
    results.push({ kind: "Blog", title: post.title, snippet: post.excerpt.slice(0, 140), href: `/blog/${post.slug}`, access: "free" });
  }

  // A single English word also gets a dictionary entry.
  if (/^[a-zA-Z][a-zA-Z' -]{1,40}$/.test(q) && q.split(/\s+/).length <= 3) {
    results.push({ kind: "Sözlük", title: `"${q}" sözlükte`, snippet: "Türkçe anlamı, örnek cümleler ve eş anlamlılar", href: `/sozluk/${encodeURIComponent(termSlug(q))}`, access: "free" });
  }

  return results;
}
