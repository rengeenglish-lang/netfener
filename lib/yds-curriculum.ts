import type { LexiconEntry } from "@/content/vocabulary/types";
import { A1 } from "@/content/vocabulary/a1";
import { A2 } from "@/content/vocabulary/a2";
import { B1 } from "@/content/vocabulary/b1";
import { B2 } from "@/content/vocabulary/b2";
import { C1 } from "@/content/vocabulary/c1";
import { CORE_WORDS } from "@/content/dictionary/core";
import { ACADEMIC_WORDS } from "@/content/dictionary/academic";
import { EXTENDED_WORDS } from "@/content/dictionary/extended";
import { BULK_WORDS } from "@/content/dictionary/bulk";
import { YDS_CORE_EXTRA, YDS_CORE_HEADWORDS } from "@/content/yds-vocabulary/core";
import { PAST_EXAM_WORDS } from "@/content/yds-vocabulary/past-exam-words";
import { PAST_EXAM_MEANINGS_1 } from "@/content/yds-vocabulary/past-exam-meanings-1";
import { PAST_EXAM_MEANINGS_2 } from "@/content/yds-vocabulary/past-exam-meanings-2";
import { PAST_EXAM_MEANINGS_3 } from "@/content/yds-vocabulary/past-exam-meanings-3";
import { YDS_GRAMMAR_1 } from "@/content/yds-grammar/topics-1";
import { YDS_GRAMMAR_2 } from "@/content/yds-grammar/topics-2";
import type { GrammarTopic } from "@/content/yds-grammar/types";
import { POS_LABELS } from "@/lib/vocabulary/levels";

/**
 * The YDS Kelime and Dil bilgisi curriculum added on top of prisma/seed.ts: five vocabulary topics
 * (core verbs / nouns / adjectives / adverbs and the past-exam word list) and the grammar sequence
 * from "Temel Cümle Yapısı" to "Karma Soru ve Metin Çalışmaları". Pure data → lesson builders here;
 * scripts/seed-yds-curriculum.mts and prisma/seed.ts write them to the database.
 */

export type LessonDef = { title: string; durationMinutes: number; contentBody: string };
export type TopicDef = { slug: string; name: string; difficulty: string | null; questionCount: number | null; lessons: LessonDef[] };

type Entry = { word: string; pos: string; tr: string; en?: string; trEx?: string };

let lexiconCache: Map<string, Entry> | null = null;
/** Netfener's own lexicon, keyed by "word|pos" and by "word" (first match wins, most advanced source first). */
function lexicon() {
  if (lexiconCache) return lexiconCache;
  const map = new Map<string, Entry>();
  const put = (e: Entry) => {
    const w = e.word.toLowerCase();
    if (!map.has(`${w}|${e.pos}`)) map.set(`${w}|${e.pos}`, e);
    if (!map.has(w)) map.set(w, e);
  };
  const fromLexicon = (arr: LexiconEntry[]) => arr.forEach(([word, pos, tr, en, trEx]) => put({ word, pos, tr, en, trEx }));
  fromLexicon(YDS_CORE_EXTRA);
  [ACADEMIC_WORDS, EXTENDED_WORDS, CORE_WORDS, C1, B2, B1, A2, A1].forEach(fromLexicon);
  BULK_WORDS.forEach(([, word, pos, tr, en, trEx]) => put({ word, pos, tr, en, trEx }));
  lexiconCache = map;
  return map;
}

const PAST_EXAM_MEANINGS: Record<string, [string, string]> = { ...PAST_EXAM_MEANINGS_1, ...PAST_EXAM_MEANINGS_2, ...PAST_EXAM_MEANINGS_3 };

export function resolveCoreWord(word: string, pos: string): Entry | undefined {
  return lexicon().get(`${word.toLowerCase()}|${pos}`);
}

export function resolvePastExamWord(word: string): Entry | undefined {
  const own = PAST_EXAM_MEANINGS[word];
  if (own) return { word, pos: own[0], tr: own[1] };
  const hit = lexicon().get(word.toLowerCase());
  return hit ? { ...hit, word } : undefined;
}

function formatEntry(e: Entry) {
  const label = POS_LABELS[e.pos] ?? e.pos;
  const head = `${e.word} (${label}) – ${e.tr}`;
  return e.en ? `${head}\nÖrnek: "${e.en}" (${e.trEx})` : head;
}

const initial = (w: string) => w.replace(/^[^a-z]+/i, "").charAt(0).toUpperCase();

/** Splits an alphabetical list into `parts` roughly equal chunks that never cut a letter in two. */
function splitByLetter<T>(items: T[], word: (t: T) => string, parts: number) {
  const target = Math.ceil(items.length / parts);
  const chunks: T[][] = [];
  let current: T[] = [];
  items.forEach((item, i) => {
    current.push(item);
    const next = items[i + 1];
    if (current.length >= target && next && initial(word(next)) !== initial(word(item))) {
      chunks.push(current);
      current = [];
    }
  });
  if (current.length) chunks.push(current);
  return chunks;
}

function glossaryLessons(topicName: string, entries: Entry[], parts: number, minutesPerWord = 0.3): LessonDef[] {
  const sorted = [...entries].sort((a, b) => a.word.localeCompare(b.word, "en", { sensitivity: "base" }));
  const chunks = splitByLetter(sorted, (e) => e.word, parts);
  return chunks.map((chunk, i) => {
    const from = initial(chunk[0].word);
    const to = initial(chunk[chunk.length - 1].word);
    return {
      title: `${topicName} – Kelime Sözlüğü (${i + 1}/${chunks.length}): ${from === to ? from : `${from}–${to}`}`,
      durationMinutes: Math.max(8, Math.round(chunk.length * minutesPerWord)),
      contentBody: chunk.map(formatEntry).join("\n\n"),
    };
  });
}

const intro = (topicName: string, blocks: string[]): LessonDef => ({ title: `${topicName} – Konuya Giriş`, durationMinutes: 8, contentBody: blocks.join("\n\n") });

const CORE_INTROS: Record<keyof typeof YDS_CORE_HEADWORDS, { slug: string; name: string; parts: number; blocks: string[] }> = {
  v: {
    slug: "kelime-sik-cikan-fiiller",
    name: "Kelime – Sık Çıkan Fiiller",
    parts: 3,
    blocks: [
      "YDS'nin kelime bölümündeki soruların en büyük payı fiillere aittir ve bu fiillerin çoğu akademik metinlerden gelir: 'alleviate, undermine, exacerbate, facilitate, hinder, sustain' gibi. Bu liste, Netfener'in YDS ve akademik okuma metinlerinde en sık karşılaştığı fiillerden derlenmiştir; her fiilin Türkçe anlamı ve özgün bir örnek cümlesi vardır.",
      "Sınavda nasıl karşınıza çıkar?\nKelime sorusunda boşluğa uyan fiili bulmak için cümledeki nesneye ve bağlama bakın: 'to ---- the effects of the disease' boşluğu olumsuz bir şeyi azaltan bir fiil ('alleviate, mitigate') ister. Fiillerin aldığı edatlar da ipucudur: 'attribute A to B', 'comply with', 'deprive sb of sth', 'adhere to'.",
      "Nasıl çalışmalısınız?\nHer gün bir bölümden 20–30 fiil seçin; Türkçe anlamı kapatıp örnek cümleden anlamı tahmin edin. Olumlu/olumsuz anlam yönünü (artırmak mı, azaltmak mı; desteklemek mi, engellemek mi) not edin; YDS'de seçenekler çoğunlukla bu yön üzerinden ayrışır.",
      "Sonuç olarak, fiilleri tek tek ezberlemek yerine eş ve zıt anlamlı gruplar hâlinde (hinder – impede – hamper / facilitate – foster – promote) tekrar etmek hem kelime sorularında hem de paragraf ve çeviri sorularında hız kazandırır.",
    ],
  },
  n: {
    slug: "kelime-sik-cikan-isimler",
    name: "Kelime – Sık Çıkan İsimler",
    parts: 2,
    blocks: [
      "Akademik metinler soyut isimlerle doludur: 'consequence, implication, prevalence, threshold, consensus, drawback'. YDS'de bu isimler hem kelime sorusu olarak hem de paragraf ve çeviri sorularındaki kilit kavramlar olarak karşınıza çıkar. Bu liste, Netfener'in YDS düzeyindeki metinlerde en sık gördüğü isimlerden oluşur.",
      "Sınavda nasıl karşınıza çıkar?\nİsim sorularında boşluk genellikle bir belirleyiciden (the, a, its) ya da sıfattan sonra gelir. Doğru ismi bulmak için çevresindeki edatlara bakın: 'a decline IN', 'an obstacle TO', 'the prevalence OF', 'susceptibility TO'. İsimlerin sabit edatları çoğu zaman tek doğru seçeneği belirler.",
      "Nasıl çalışmalısınız?\nHer ismi kendi fiil ve sıfat ailesiyle birlikte öğrenin: 'emerge – emergence – emergent', 'vulnerable – vulnerability'. Böylece bir kelimeyi öğrenirken üç dört kelime kazanırsınız ve 'sözcük türü' sorularında da avantaj sağlarsınız.",
      "Sonuç olarak, soyut isimler paragraf sorularındaki ana fikir cümlelerinin anahtarıdır; bu listeyi düzenli tekrar etmek hem kelime sorularında hem de okuduğunu anlamada doğrudan puan getirir.",
    ],
  },
  adj: {
    slug: "kelime-sik-cikan-sifatlar",
    name: "Kelime – Sık Çıkan Sıfatlar",
    parts: 2,
    blocks: [
      "YDS'deki sıfat soruları çoğunlukla bir şeyin niteliğini değerlendiren akademik sıfatları ölçer: 'adverse, detrimental, feasible, inevitable, prevalent, robust, negligible'. Bu liste, Netfener'in YDS metinlerinde en sık karşılaştığı sıfatları özgün örnek cümlelerle bir araya getirir.",
      "Sınavda nasıl karşınıza çıkar?\nSıfat sorularında bağlamın olumlu mu olumsuz mu olduğuna ve sıfatın aldığı edata bakın: 'prone TO', 'susceptible TO', 'consistent WITH', 'eligible FOR', 'detrimental TO'. Cümlede 'despite, although' gibi zıtlık bildiren bir öğe varsa, boşluğa beklenenin tersi anlamda bir sıfat gelir.",
      "Nasıl çalışmalısınız?\nSıfatları eş anlamlı ve zıt anlamlı çiftler hâlinde tekrar edin: 'scarce – abundant', 'explicit – implicit', 'tentative – definitive'. YDS'de çeldiricilerin çoğu, doğru cevabın zıt anlamlısı ya da aynı harfle başlayan benzer görünümlü kelimelerdir (eminent – imminent).",
      "Sonuç olarak, akademik sıfatlar paragraflardaki yazar tutumunu ve vurguyu taşır; bu listeyi bilmek hem kelime sorularında hem de 'yazarın tutumu' ve 'yakın anlam' türü sorularda doğru seçeneği hızla bulmanızı sağlar.",
    ],
  },
  adv: {
    slug: "kelime-sik-cikan-zarflar",
    name: "Kelime – Sık Çıkan Zarflar",
    parts: 2,
    blocks: [
      "Zarflar, YDS kelime sorularının düzenli olarak sorduğu ama adayların en az çalıştığı gruptur: 'merely, readily, invariably, barely, presumably, inadvertently, ultimately'. Bu liste, YDS düzeyindeki metinlerde sık geçen zarfları ve cümleleri birbirine bağlayan 'consequently, nevertheless, likewise, conversely' gibi geçiş ifadelerini özgün örneklerle sunar.",
      "Sınavda nasıl karşınıza çıkar?\nZarf sorularında cümlenin genel anlamına ve vurgusuna bakın: 'barely / hardly / scarcely' neredeyse olumsuz bir anlam verir; 'virtually' neredeyse tamamen, 'merely / solely' yalnızca, 'arguably' tartışmaya açık olsa da anlamı taşır. Geçiş zarfları (however, consequently, likewise) ise iki cümle arasındaki mantık ilişkisini kurar ve cloze testte de sık sorulur.",
      "Nasıl çalışmalısınız?\nZarfları anlam gruplarına ayırarak tekrar edin: derece (considerably, markedly, drastically), sıklık (invariably, seldom), tutum (apparently, presumably, allegedly), bağlantı (consequently, nevertheless, likewise). Her grubun içindeki ince farkları örnek cümlelerle pekiştirin.",
      "Sonuç olarak, zarfları bilmek yalnızca kelime sorularında değil, paragraf sorularında yazarın kesinlik derecesini (kesin mi söylüyor, tahmin mi ediyor) anlamada da belirleyicidir.",
    ],
  },
};

const PAST_EXAM_TOPIC = {
  slug: "kelime-cikmis-kelimeler",
  name: "Kelime – KPDS, ÜDS ve YDS'de Çıkmış Kelimeler",
  parts: 10,
  blocks: [
    "Bu bölüm, geçmiş KPDS, ÜDS ve YDS sınavlarında çıkmış 1124 kelimeyi alfabetik sırayla bir araya getirir. Kelimelerin bir kısmı temel düzeydedir, bir kısmı ise akademik metinlerde sık geçen ileri düzey kelimelerdir; liste, sınavın kelime düzeyini tanımanız ve eksiklerinizi görmeniz için hazırlandı. Türkçe anlamlar ve örnek cümleler Netfener tarafından yazılmıştır.",
    "Sınavda nasıl karşınıza çıkar?\nBu kelimeler kelime sorularında doğrudan seçenek olarak; cümle tamamlama, çeviri ve paragraf sorularında ise metnin içinde karşınıza çıkar. Çok anlamlı kelimelerde (ör. 'found': kurmak / bulmak fiilinin geçmişi, 'resume': yeniden başlamak / özgeçmiş) her iki anlamı da öğrenmek önemlidir; YDS bu tür kelimelerin daha az bilinen anlamını sormayı sever.",
    "Nasıl çalışmalısınız?\nHer gün yaklaşık 40 kelimelik bir bölüm seçin ve sesli okuyun. Türkçe anlamı kapatıp hatırlamaya çalışın; hatırlayamadığınız kelimeleri bir deftere ya da Kelime Motoru'na ekleyin. Bu tempoyla liste 4–6 haftada bitirilir; ikinci turda yalnızca işaretlediğiniz kelimelere dönün.",
    "Sonuç olarak, çıkmış kelimeler listesi sınavın kelime havuzunu tanımanın en kısa yoludur. Bu listeyi 'Sık Çıkan Fiiller, İsimler, Sıfatlar ve Zarflar' bölümleriyle birlikte çalışmak, hem temel hem de akademik kelime ihtiyacınızı birlikte karşılar.",
  ],
};

export function buildYdsVocabularyTopics(): TopicDef[] {
  const core = (Object.keys(CORE_INTROS) as (keyof typeof YDS_CORE_HEADWORDS)[]).map((pos) => {
    const meta = CORE_INTROS[pos];
    const entries = YDS_CORE_HEADWORDS[pos].map((w) => {
      const e = resolveCoreWord(w, pos);
      if (!e) throw new Error(`YDS core word missing from the lexicon: ${w} (${pos})`);
      return e;
    });
    return { slug: meta.slug, name: meta.name, difficulty: "Orta", questionCount: null, lessons: [intro(meta.name, meta.blocks), ...glossaryLessons(meta.name, entries, meta.parts, 0.4)] };
  });
  const past = PAST_EXAM_WORDS.map((w) => {
    const e = resolvePastExamWord(w);
    if (!e) throw new Error(`Past-exam word has no meaning: ${w}`);
    return e;
  });
  const pastTopic: TopicDef = {
    slug: PAST_EXAM_TOPIC.slug,
    name: PAST_EXAM_TOPIC.name,
    difficulty: "Orta",
    questionCount: null,
    lessons: [intro(PAST_EXAM_TOPIC.name, PAST_EXAM_TOPIC.blocks), ...glossaryLessons(PAST_EXAM_TOPIC.name, past, PAST_EXAM_TOPIC.parts, 0.15)],
  };
  return [...core, pastTopic];
}

function grammarTopic(t: GrammarTopic): TopicDef {
  const rules = t.rules.map(([rule, explanation, en, tr]) => `${rule} – ${explanation}\nÖrnek: "${en}" (${tr})`).join("\n\n");
  const examples = t.examples
    .map((x, i) => {
      const opts = x.options.map((o, j) => `(${"ABCD"[j]}) ${o}`).join(" ");
      const correct = x.options["ABCD".indexOf(x.answer)];
      return `Örnek ${i + 1}: Örnek soru: "${x.q}"\n${opts}\nDoğru cevap (${x.answer}) '${correct}' — ${x.why}`;
    })
    .join("\n\n");
  return {
    slug: t.slug,
    name: t.name,
    difficulty: "Orta",
    questionCount: null,
    lessons: [
      intro(t.name, t.intro),
      { title: `${t.name} – ${t.rulesTitle ?? "Kurallar Referansı"}`, durationMinutes: 12, contentBody: rules },
      { title: `${t.name} – Örnek Sorular ve Çözümler`, durationMinutes: 10, contentBody: examples },
    ],
  };
}

export function buildYdsGrammarTopics(): TopicDef[] {
  return [...YDS_GRAMMAR_1, ...YDS_GRAMMAR_2].map(grammarTopic);
}

/**
 * Final order of every YDS topic: the Kelime group, then the grammar sequence the way it is taught,
 * then the remaining question types. Existing topics keep their slugs (and student progress);
 * tense-sorulari and preposition-sorulari take their place in the grammar sequence.
 */
export const YDS_TOPIC_ORDER = [
  "kelime-phrasal-verb",
  "kelime-sik-cikan-fiiller",
  "kelime-sik-cikan-isimler",
  "kelime-sik-cikan-sifatlar",
  "kelime-sik-cikan-zarflar",
  "kelime-cikmis-kelimeler",
  "gramer-temel-cumle-yapisi",
  "tense-sorulari",
  "gramer-modals",
  "gramer-passive-voice",
  "gramer-conjunctions",
  "gramer-relative-clauses",
  "gramer-noun-clauses",
  "gramer-adverbial-clauses",
  "gramer-conditionals-wish",
  "gramer-gerund-infinitive",
  "gramer-participles-reduced",
  "preposition-sorulari",
  "gramer-karma",
  "cloze-test",
  "cumle-tamamlama",
  "ceviri",
  "paragraf",
  "diyalog-tamamlama",
  "yakin-anlamli-cumle",
  "paragraf-tamamlama",
  "anlatim-butunlugunu-bozan-cumle",
  "yds-stratejileri",
];

/** New names for the two existing grammar topics so they read as steps of the sequence. */
export const YDS_TOPIC_RENAMES: Record<string, string> = {
  "tense-sorulari": "Tenses (Zamanlar)",
  "preposition-sorulari": "Prepositions ve Diğer Tamamlayıcı Yapılar",
};

type Db = {
  examTopic: {
    upsert(args: unknown): Promise<{ id: string }>;
    updateMany(args: unknown): Promise<unknown>;
  };
  topicLesson: {
    findFirst(args: unknown): Promise<{ id: string } | null>;
    update(args: unknown): Promise<unknown>;
    create(args: unknown): Promise<unknown>;
    deleteMany(args: unknown): Promise<{ count: number }>;
  };
};

/** Idempotent: upserts the new topics and lessons, renames the two grammar topics and sets the order. */
export async function seedYdsCurriculum(db: Db, ydsExamTypeId: string) {
  const topics = [...buildYdsVocabularyTopics(), ...buildYdsGrammarTopics()];
  let lessons = 0;
  for (const def of topics) {
    const displayOrder = YDS_TOPIC_ORDER.indexOf(def.slug);
    const topic = await db.examTopic.upsert({
      where: { examTypeId_slug: { examTypeId: ydsExamTypeId, slug: def.slug } },
      update: { name: def.name, questionCount: def.questionCount, difficulty: def.difficulty, displayOrder },
      create: { examTypeId: ydsExamTypeId, slug: def.slug, name: def.name, questionCount: def.questionCount, difficulty: def.difficulty, displayOrder },
    });
    for (const [position, lesson] of def.lessons.entries()) {
      const existing = await db.topicLesson.findFirst({ where: { topicId: topic.id, position } });
      // contentBodyEn is a cached translation of the old text: clear it when the text changes.
      if (existing) await db.topicLesson.update({ where: { id: existing.id }, data: { ...lesson, contentBodyEn: null } });
      else await db.topicLesson.create({ data: { topicId: topic.id, position, ...lesson } });
      lessons++;
    }
    await db.topicLesson.deleteMany({ where: { topicId: topic.id, position: { gte: def.lessons.length } } });
  }
  for (const [slug, name] of Object.entries(YDS_TOPIC_RENAMES)) {
    await db.examTopic.updateMany({ where: { examTypeId: ydsExamTypeId, slug }, data: { name } });
  }
  for (const [displayOrder, slug] of YDS_TOPIC_ORDER.entries()) {
    await db.examTopic.updateMany({ where: { examTypeId: ydsExamTypeId, slug }, data: { displayOrder } });
  }
  return { topics: topics.length, lessons };
}

/** The YDS core list (verbs, nouns, adjectives, adverbs) resolved to meanings and examples — the free "YDS Önemli Kelimeler" list. */
export function ydsCoreWordList(): { pos: "v" | "n" | "adj" | "adv"; entries: { word: string; tr: string; en?: string; trEx?: string }[] }[] {
  return (["v", "n", "adj", "adv"] as const).map((pos) => ({
    pos,
    entries: YDS_CORE_HEADWORDS[pos].flatMap((word) => {
      const hit = resolveCoreWord(word, pos) ?? resolveCoreWord(word, "");
      return hit ? [{ word, tr: hit.tr, en: hit.en, trEx: hit.trEx }] : [];
    }),
  }));
}
