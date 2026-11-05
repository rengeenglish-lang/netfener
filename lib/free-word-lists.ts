import { DOMAIN_GLOSSARY } from "@/content/dictionary/domains";
import { BULK_003_HEALTH_MEDICINE } from "@/content/dictionary/bulk/003-health-medicine";
import { ydsCoreWordList } from "@/lib/yds-curriculum";
import { POS_LABELS } from "@/lib/vocabulary/levels";

/** Free word lists behind /tools/free-resources (Netfener's own meanings and example sentences). */
export type WordListEntry = { word: string; pos: string; tr: string; en?: string; trEx?: string };
export type WordList = {
  slug: string;
  title: string;
  exam: string;
  description: string;
  intro: string[];
  sections: { title: string; note?: string; entries: WordListEntry[] }[];
};

const SECTION_TITLES: Record<string, string> = {
  v: "Fiiller",
  n: "İsimler",
  adj: "Sıfatlar",
  adv: "Zarflar ve bağlayıcılar",
};

function ydsList(): WordList {
  const groups = ydsCoreWordList();
  const total = groups.reduce((sum, g) => sum + g.entries.length, 0);
  return {
    slug: "yds-onemli-kelimeler",
    title: "YDS Önemli Kelimeler",
    exam: "YDS",
    description: `YDS kelime, cümle tamamlama ve paragraf sorularında en sık karşılaşılan ${total} akademik kelime: Türkçe anlamları ve örnek cümleleriyle.`,
    intro: [
      "Bu liste YDS'nin kelime sorularında doğrudan, cümle tamamlama ve paragraf sorularında ise anlamı çözmek için sürekli karşınıza çıkan akademik kelimelerden oluşur. Her kelimenin Türkçe anlamı ve kelimeyi bağlamında gösteren bir örnek cümlesi vardır.",
      "Önerilen çalışma: her gün bir bölümden 15–20 kelime seçin, örnek cümleyi sesli okuyun, sonra anlamı kapatıp kendinizi sınayın. Eş anlamlı kelimeleri (hinder – impede – hamper gibi) birlikte öğrenmek, seçeneklerdeki tuzakları görmenizi kolaylaştırır.",
    ],
    sections: groups.map((g) => ({ title: SECTION_TITLES[g.pos], entries: g.entries.map((e) => ({ ...e, pos: g.pos })) })),
  };
}

function healthList(): WordList {
  const seen = new Set<string>();
  const take = (rows: [string, string, string, string, string?, string?][]) =>
    rows.flatMap(([field, word, pos, tr, en, trEx]) => {
      const key = word.toLowerCase();
      if (field !== "HEALTH" || seen.has(key)) return [];
      seen.add(key);
      return [{ word, pos, tr, en, trEx }];
    });
  const research = take(DOMAIN_GLOSSARY);
  const clinical = take(BULK_003_HEALTH_MEDICINE).sort((a, b) => a.word.localeCompare(b.word, "en"));
  return {
    slug: "yokdil-saglik-kelimeleri",
    title: "YÖKDİL Sağlık Kelimeleri",
    exam: "YÖKDİL Sağlık Bilimleri",
    description: `YÖKDİL Sağlık Bilimleri metinlerinde geçen ${research.length + clinical.length} tıp ve sağlık terimi: araştırma dili ve A–Z tıbbi terminoloji, örnek cümleleriyle.`,
    intro: [
      "YÖKDİL Sağlık Bilimleri okuma parçaları çoğunlukla tıbbi araştırma özetlerinden ve sağlık haberlerinden seçilir. Bu metinleri hızlı anlamak için iki tür kelime gerekir: araştırmanın dili (prevalence, clinical trial, placebo gibi) ve hastalık, organ, tedavi adları.",
      "İlk bölüm araştırma ve klinik çalışma terimlerini, ikinci bölüm A–Z tıbbi terminolojiyi içerir. Latince ve Yunanca kökenli ekleri (cardio- kalp, -itis iltihap, hepat- karaciğer) tanımak bilmediğiniz terimleri de tahmin etmenizi sağlar.",
    ],
    sections: [
      { title: "Araştırma ve klinik çalışma dili", note: "Makale özetlerinde ve sonuç cümlelerinde en sık geçen terimler.", entries: research },
      { title: "Tıbbi terminoloji (A–Z)", note: "Hastalıklar, organlar, belirtiler ve tedaviler.", entries: clinical },
    ],
  };
}

const BUILDERS: Record<string, () => WordList> = {
  "yds-onemli-kelimeler": ydsList,
  "yokdil-saglik-kelimeleri": healthList,
};

export const FREE_WORD_LIST_SLUGS = Object.keys(BUILDERS);

export function getFreeWordList(slug: string): WordList | null {
  return BUILDERS[slug]?.() ?? null;
}

export const posLabel = (pos: string) => POS_LABELS[pos] ?? pos;
