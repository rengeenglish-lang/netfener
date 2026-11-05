import type { ExamCode, ExamFamily } from "@/lib/generated/prisma/enums";

/** Each exam is its own subsite under /exams/{slug}; these are its sections, in nav order. */
export const SUBSITE_SECTIONS = [
  { key: "home", label: "Ana sayfa", path: "" },
  { key: "konular", label: "Konu anlatımı", path: "/konular" },
  { key: "pratik", label: "Pratik", path: "/pratik" },
  { key: "denemeler", label: "Denemeler", path: "/denemeler" },
  { key: "kaynaklar", label: "Kaynaklar", path: "/kaynaklar" },
  { key: "canli-dersler", label: "Canlı dersler", path: "/canli-dersler" },
  { key: "ilerleme", label: "İlerleme", path: "/ilerleme" },
] as const;
export type SubsiteSectionKey = (typeof SUBSITE_SECTIONS)[number]["key"];

export function subsiteHref(slug: string, section: SubsiteSectionKey = "home") {
  return `/exams/${slug}${SUBSITE_SECTIONS.find((s) => s.key === section)!.path}`;
}

export const YOKDIL_CODES = ["YOKDIL_SOSYAL", "YOKDIL_SAGLIK", "YOKDIL_FEN"] as const satisfies readonly ExamCode[];
export const isYokdil = (code: string) => (YOKDIL_CODES as readonly string[]).includes(code);
export const TRACK_LABELS: Record<(typeof YOKDIL_CODES)[number], string> = {
  YOKDIL_SOSYAL: "Sosyal Bilimler",
  YOKDIL_SAGLIK: "Sağlık Bilimleri",
  YOKDIL_FEN: "Fen Bilimleri",
};

type TopicLike = { id: string; name: string; category: string | null; skillsTested?: string | null; slug: string };
export type Skill = { key: string; title: string; copy: string; topicIds: string[] };

const CATEGORY_LABELS: Record<string, { title: string; copy: string }> = {
  READING: { title: "Reading", copy: "Okuma görevleri ve soru tipleri" },
  LISTENING: { title: "Listening", copy: "Dinleme görevleri ve not alma" },
  WRITING: { title: "Writing", copy: "Yazma görevleri ve değerlendirme" },
  SPEAKING: { title: "Speaking", copy: "Konuşma görevleri ve pratik" },
};

/**
 * YDS / YÖKDİL question-type sections, in exam order. Each topic joins the first section whose
 * keywords it contains (specific names such as "Paragraf Tamamlama" are matched before "Paragraf").
 */
const QUESTION_TYPES: { key: string; title: string; copy: string; keywords: string[] }[] = [
  { key: "kelime", title: "Kelime", copy: "Kelime, deyim ve phrasal verb soruları", keywords: ["kelime", "vocabulary", "phrasal"] },
  { key: "dil-bilgisi", title: "Dil bilgisi", copy: "Tense, yapı, bağlaç ve edat soruları", keywords: ["tense", "zaman", "modal", "kiplik", "passive", "edilgen", "gerund", "infinitive", "mastar", "adjective", "adverb", "sıfat", "zarf", "clause", "cümlecik", "conditional", "koşul", "wish", "conjunction", "bağlaç", "inversion", "devrik", "quantifier", "miktar", "preposition", "edat", "grammar", "dil bilgisi", "gramer"] },
  { key: "cloze-test", title: "Cloze test", copy: "Paragrafta boşluk doldurma", keywords: ["cloze", "boşluk doldurma"] },
  { key: "cumle-tamamlama", title: "Cümle tamamlama", copy: "Yarım cümleyi doğru tamamlama", keywords: ["cümle tamamlama", "sentence completion"] },
  { key: "ceviri", title: "Çeviri", copy: "İngilizce ↔ Türkçe çeviri soruları", keywords: ["çeviri", "translation"] },
  { key: "paragraf", title: "Paragraf", copy: "Okuduğunu anlama soruları", keywords: ["paragraf soru", "okuma", "reading comprehension"] },
  { key: "paragraf-tamamlama", title: "Paragraf tamamlama", copy: "Paragraftaki boşluğu tamamlama", keywords: ["paragraf tamamlama"] },
  { key: "diyalog", title: "Diyalog tamamlama", copy: "Konuşmayı anlamlı sürdürme", keywords: ["diyalog", "dialog"] },
  { key: "yakin-anlam", title: "Yakın anlamlı cümle", copy: "Anlamca en yakın cümleyi bulma", keywords: ["yakın anlam"] },
  { key: "anlam-butunlugu", title: "Anlam bütünlüğü", copy: "Akışı bozan cümleyi bulma", keywords: ["bütünlüğ"] },
  { key: "strateji", title: "Stratejiler", copy: "Süre yönetimi ve çözüm taktikleri", keywords: ["strateji"] },
];
/** Order in which question types are tried (most specific first); display order stays exam order. */
const MATCH_ORDER = ["paragraf-tamamlama", "cumle-tamamlama", "diyalog", "yakin-anlam", "anlam-butunlugu", "cloze-test", "ceviri", "strateji", "kelime", "paragraf", "dil-bilgisi"];

const lower = (v: string) => `${v.toLowerCase()} ${v.toLocaleLowerCase("tr-TR")}`;
function questionTypeOf(topic: TopicLike) {
  const hay = lower(`${topic.name} ${topic.slug.replace(/-/g, " ")}`);
  for (const key of MATCH_ORDER) {
    const qt = QUESTION_TYPES.find((q) => q.key === key)!;
    if (qt.keywords.some((k) => hay.includes(k))) return qt;
  }
  return null;
}

/**
 * The skill areas of an exam, built from its real topics: by topic category when the exam has
 * categories (IELTS, TOEFL, PTE), otherwise by YDS/YÖKDİL question type. Only areas that have
 * topics are returned; a topic that fits no known type becomes its own area.
 */
export function buildSkills(topics: TopicLike[]): Skill[] {
  if (topics.some((t) => t.category)) {
    const order: string[] = [];
    const byCat = new Map<string, string[]>();
    for (const t of topics) {
      const cat = (t.category ?? "DİĞER").toUpperCase();
      if (!byCat.has(cat)) (order.push(cat), byCat.set(cat, []));
      byCat.get(cat)!.push(t.id);
    }
    return order.map((cat) => ({
      key: cat.toLowerCase(),
      title: CATEGORY_LABELS[cat]?.title ?? cat.charAt(0) + cat.slice(1).toLocaleLowerCase("tr-TR"),
      copy: CATEGORY_LABELS[cat]?.copy ?? "",
      topicIds: byCat.get(cat)!,
    }));
  }
  const grouped = new Map<string, string[]>();
  const own: Skill[] = [];
  for (const t of topics) {
    const qt = questionTypeOf(t);
    if (qt) grouped.set(qt.key, [...(grouped.get(qt.key) ?? []), t.id]);
    else own.push({ key: t.slug, title: t.name, copy: "", topicIds: [t.id] });
  }
  return [
    ...QUESTION_TYPES.filter((q) => grouped.has(q.key)).map((q) => ({ key: q.key, title: q.title, copy: q.copy, topicIds: grouped.get(q.key)! })),
    ...own,
  ];
}

/** Darkened gradient from an exam colour so white text stays readable on feature cards. */
export function featureGradient(color: string) {
  return `linear-gradient(115deg, color-mix(in srgb, ${color} 72%, #000) 0%, ${color} 100%)`;
}

/** Shared learning pages that belong to the active exam's subsite, mapped to the section they highlight. */
export const SHARED_SECTION_PATHS: [string, SubsiteSectionKey][] = [
  ["/dashboard/practice", "pratik"],
  ["/dashboard/mock-exam", "denemeler"],
  ["/dashboard/yds-denemeleri", "denemeler"],
  ["/dashboard/progress", "ilerleme"],
  ["/dashboard/konu-anlatimi", "konular"],
  ["/dashboard/speaking-practice", "pratik"],
  ["/konu-anlatim", "konular"],
];

/** Which section of the exam's subsite a path belongs to (null when it is not an exam page). */
export function sectionForPath(pathname: string, slug: string): SubsiteSectionKey | null {
  const base = `/exams/${slug}`;
  if (pathname === base) return "home";
  for (const s of SUBSITE_SECTIONS) if (s.path && (pathname === base + s.path || pathname.startsWith(base + s.path + "/"))) return s.key;
  for (const [prefix, key] of SHARED_SECTION_PATHS) if (pathname === prefix || pathname.startsWith(prefix + "/")) return key;
  return null;
}
