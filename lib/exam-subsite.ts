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

export type SkillCard = { key: string; title: string; copy: string; keywords: string[] };
/** The four skill areas shown on an exam home, by exam family. Keywords match topic names/categories. */
export function skillCards(family: ExamFamily): SkillCard[] {
  if (family === "TRANSLATION_GRAMMAR")
    return [
      { key: "kelime", title: "Kelime", copy: "Sınavda çıkan kelime ve deyimler", keywords: ["kelime", "vocabulary", "deyim", "phrasal"] },
      { key: "gramer", title: "Dil bilgisi", copy: "Tense, yapı ve bağlaç soruları", keywords: ["gramer", "grammar", "dil bilgisi", "tense", "bağlaç", "preposition", "edat"] },
      { key: "ceviri", title: "Çeviri", copy: "İngilizce–Türkçe çeviri soruları", keywords: ["çeviri", "translation"] },
      { key: "paragraf", title: "Paragraf", copy: "Okuma, anlam ve paragraf tamamlama", keywords: ["paragraf", "okuma", "reading", "anlam", "cloze"] },
    ];
  return [
    { key: "reading", title: "Reading", copy: "Okuma görevleri ve soru tipleri", keywords: ["reading", "okuma"] },
    { key: "listening", title: "Listening", copy: "Dinleme görevleri ve not alma", keywords: ["listening", "dinleme"] },
    { key: "writing", title: "Writing", copy: "Yazma görevleri ve değerlendirme", keywords: ["writing", "yazma", "essay"] },
    { key: "speaking", title: "Speaking", copy: "Konuşma görevleri ve pratik", keywords: ["speaking", "konuşma"] },
  ];
}

type TopicLike = { name: string; category: string | null; skillsTested: string | null; slug: string };
export function topicMatchesSkill(topic: TopicLike, skill: SkillCard) {
  const hay = `${topic.name} ${topic.category ?? ""} ${topic.skillsTested ?? ""} ${topic.slug}`.toLocaleLowerCase("tr-TR");
  return skill.keywords.some((k) => hay.includes(k));
}

/** Darkened gradient from an exam colour so white text stays readable on feature cards. */
export function featureGradient(color: string) {
  return `linear-gradient(115deg, color-mix(in srgb, ${color} 72%, #000) 0%, ${color} 100%)`;
}
