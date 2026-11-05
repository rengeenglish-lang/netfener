import type { Q, Cloze, Irrelevant } from "../yds-denemeler/types";

export type { Q, Cloze, Irrelevant };

/**
 * Özgün YÖKDİL denemeleri (Sosyal, Sağlık, Fen). Every sentence, passage and question was written
 * for Netfener; only the exam's question types and order are borrowed. As in the YDS tests, the
 * CORRECT option is written FIRST and the builder places it (each letter A–E is correct 16 times).
 */

/** A YÖKDİL reading passage with three questions. */
export type YokdilReading = { text: string; questions: [Q, Q, Q] };

/** One YÖKDİL test in exam order (questions 1–80). Texts are drawn from the test's field. */
export type YokdilDeneme = {
  no: number;
  field: "sosyal" | "saglik" | "fen";
  /** 1–6 kelime (one phrasal verb) */
  vocab: [Q, Q, Q, Q, Q, Q];
  /** 7–20 dil bilgisi */
  grammar: [Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q];
  /** 21–30 iki cloze metni */
  cloze: [Cloze, Cloze];
  /** 31–41 cümle tamamlama */
  completion: [Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q];
  /** 42–47 İngilizce → Türkçe çeviri */
  enTr: [Q, Q, Q, Q, Q, Q];
  /** 48–53 Türkçe → İngilizce çeviri */
  trEn: [Q, Q, Q, Q, Q, Q];
  /** 54–68 beş okuma parçası × 3 soru */
  reading: [YokdilReading, YokdilReading, YokdilReading, YokdilReading, YokdilReading];
  /** 69–74 paragraf tamamlama ("----" where the sentence goes) */
  paragraph: [Q, Q, Q, Q, Q, Q];
  /** 75–80 anlam bütünlüğünü bozan cümle */
  irrelevant: [Irrelevant, Irrelevant, Irrelevant, Irrelevant, Irrelevant, Irrelevant];
};

export const YOKDIL_SECTIONS = [
  { key: "vocab", from: 1, to: 6, title: "Kelime Bilgisi", instruction: "1 – 6. sorularda, cümlede boş bırakılan yere uygun düşen sözcük ya da ifadeyi bulunuz." },
  { key: "grammar", from: 7, to: 20, title: "Dil Bilgisi", instruction: "7 – 20. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz." },
  { key: "cloze", from: 21, to: 30, title: "Cloze Test", instruction: "21 – 30. sorularda, aşağıdaki parçalarda numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz." },
  { key: "completion", from: 31, to: 41, title: "Cümle Tamamlama", instruction: "31 – 41. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz." },
  { key: "enTr", from: 42, to: 47, title: "Çeviri (İngilizce → Türkçe)", instruction: "42 – 47. sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz." },
  { key: "trEn", from: 48, to: 53, title: "Çeviri (Türkçe → İngilizce)", instruction: "48 – 53. sorularda, verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz." },
  { key: "reading", from: 54, to: 68, title: "Okuduğunu Anlama", instruction: "54 – 68. soruları, aşağıdaki parçalara göre cevaplayınız." },
  { key: "paragraph", from: 69, to: 74, title: "Paragraf Tamamlama", instruction: "69 – 74. sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz." },
  { key: "irrelevant", from: 75, to: 80, title: "Anlam Bütünlüğünü Bozan Cümle", instruction: "75 – 80. sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz." },
] as const;
