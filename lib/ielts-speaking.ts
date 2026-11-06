/** Shared by the Speaking test screen, the teacher review form and the server. */

export const SPEAKING_CRITERIA = [
  { key: "fluency", name: "Fluency and Coherence", tr: "Akıcılık ve tutarlılık" },
  { key: "lexical", name: "Lexical Resource", tr: "Kelime bilgisi" },
  { key: "grammar", name: "Grammatical Range and Accuracy", tr: "Dil bilgisi çeşitliliği ve doğruluğu" },
  { key: "pronunciation", name: "Pronunciation", tr: "Telaffuz" },
] as const;

export type SpeakingCriterion = (typeof SPEAKING_CRITERIA)[number]["key"];
export type SpeakingScores = Record<SpeakingCriterion, number>;

/** A short summary of what each band looks like, for self-review (based on the public band descriptors). */
export const SPEAKING_BAND_GUIDE: { band: number; points: Record<SpeakingCriterion, string> }[] = [
  {
    band: 8,
    points: {
      fluency: "Konuşur, nadiren duraksar; fikirleri doğal ve mantıklı bağlar.",
      lexical: "Geniş kelime dağarcığını esnek kullanır; deyim ve kalıpları doğal yerleştirir.",
      grammar: "Karmaşık yapıları rahat kullanır; hataların çoğu küçük ve seyrektir.",
      pronunciation: "Anlaşılması kolaydır; vurgu ve tonlamayı etkili kullanır.",
    },
  },
  {
    band: 7,
    points: {
      fluency: "Uzun konuşur, fazla çaba göstermeden; bağlaçları çeşitli kullanır.",
      lexical: "Farklı konularda esnek konuşur; daha az yaygın kelimeler kullanır.",
      grammar: "Basit ve karmaşık cümleleri karıştırır; hatasız cümleler sık görülür.",
      pronunciation: "Genelde kolay anlaşılır; ana dil etkisi anlamı nadiren bozar.",
    },
  },
  {
    band: 6,
    points: {
      fluency: "Uzun konuşmaya isteklidir ama tekrar, düzeltme ve duraksamalar olur.",
      lexical: "Konuları tartışacak kadar kelime bilir; anlamı açıklamak için dolaylı anlatır.",
      grammar: "Basit ve karmaşık yapıları karıştırır ama karmaşık yapılarda hata yapar.",
      pronunciation: "Genel olarak anlaşılır; bazı sesler ve vurgu sorun çıkarır.",
    },
  },
  {
    band: 5,
    points: {
      fluency: "Akışı sürdürür ama sık tekrar, yavaşlık ve kendini düzeltme vardır.",
      lexical: "Tanıdık konularda yeterli; az tanıdık konularda kelime bulmakta zorlanır.",
      grammar: "Basit cümleleri oldukça doğru kurar; karmaşık yapılar sınırlı ve hatalıdır.",
      pronunciation: "Anlaşılır ama sık yanlış telaffuz dinleyeni zorlar.",
    },
  },
];

/** Valid criterion bands: 0–9 in half bands. */
export function isBand(value: number) {
  return Number.isFinite(value) && value >= 0 && value <= 9 && Math.round(value * 2) === value * 2;
}

/** Speaking band: the mean of the four criteria, rounded down to the nearest half band. */
export function speakingBand(scores: SpeakingScores) {
  const mean = SPEAKING_CRITERIA.reduce((sum, c) => sum + scores[c.key], 0) / SPEAKING_CRITERIA.length;
  return Math.floor(mean * 2 + 1e-9) / 2;
}

export const SPEAKING_AUDIO_TYPES = ["audio/webm", "audio/mp4", "audio/ogg", "audio/mpeg"] as const;
export const SPEAKING_MAX_BYTES = 10 * 1024 * 1024;
/** How many unreviewed submissions one learner may have waiting at once. */
export const SPEAKING_MAX_PENDING = 2;

/** The plain MIME type the browser recorded, without codec parameters ("audio/webm;codecs=opus" → "audio/webm"). */
export function baseAudioType(type: string) {
  return type.split(";")[0].trim().toLowerCase();
}
