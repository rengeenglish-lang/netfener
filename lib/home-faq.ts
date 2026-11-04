import { HELP_FAQ } from "@/content/help-faq";

/** Questions shown on the homepage, looked up by their exact text in the Yardım Masası data so the answers stay single-sourced. */
export const HOME_FAQ_QUESTIONS = [
  "Nasıl üye olurum?",
  "Konu anlatımları ücretli mi?",
  "Seviye tespit sınavı ücretli mi?",
  "Hangi ödeme yöntemlerini kullanabilirim?",
  "İade hakkım var mı?",
  "Bir gruba nasıl katılırım?",
  "Sonucum resmî bir sınav puanı mı?",
] as const;

export function homeFaqItems(source = HELP_FAQ, questions: readonly string[] = HOME_FAQ_QUESTIONS) {
  const all = source.flatMap((c) => c.items);
  return questions.flatMap((q) => {
    const hit = all.find((i) => i.q === q);
    return hit ? [hit] : [];
  });
}

/** FAQPage structured data for exactly the questions rendered on the page. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}
