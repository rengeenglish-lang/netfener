/** Pure helpers for strong emphasis in Konu Anlatımı prose (YDS/YÖKDİL); see components/topics/emphasis.tsx. */

/** Sentences with these cues state a rule, a warning or an exam tip. */
const KEY_POINT_CUE =
  /(?<!\p{L})(dikkat|önemli|unutma|mutlaka|asla|her zaman|daima|kesinlikle|ipucu|püf|tuzak|en sık|sık çık|anahtar|kural|sonuç olarak)/iu;

export function isKeyPoint(sentence: string) {
  return KEY_POINT_CUE.test(sentence);
}

/** Acronyms are written in capitals anyway; they are not emphasis. */
const ACRONYMS = new Set(["YDS", "YÖKDİL", "ÖSYM", "KPDS", "ÜDS", "SVO", "TOEFL", "IELTS", "PTE", "OK", "UFO", "VIP", "ABD", "AB", "BM"]);
/** English contractions keep their apostrophe inside a quoted term ('can't', 'it's', 'they're'). */
const CONTRACTION_TAIL = /^(t|s|re|ve|ll|d|m)(?!\p{L})/u;

export type Token = { kind: "text" | "term" | "quote"; value: string };

function closingQuote(text: string, from: number, close: string): number {
  for (let j = from; j < text.length && j - from <= 70; j++) {
    const ch = text[j];
    if (ch === "\n") return -1;
    if (ch !== close) continue;
    if (j === from || /\s/.test(text[j - 1])) continue;
    if (close === "'" && /\p{L}/u.test(text[j - 1]) && CONTRACTION_TAIL.test(text.slice(j + 1))) continue;
    return j;
  }
  return -1;
}

/**
 * Splits prose into plain text, key terms and quoted sentences. A term is a short quoted form
 * ('must have V3', "hinder") or a word in capitals (MUTLAKA); longer quotes are example sentences.
 * Apostrophes in Turkish suffixes (YDS'de) and English contractions are left alone.
 */
export function tokenizeKeyTerms(text: string): Token[] {
  const tokens: Token[] = [];
  let buffer = "";
  const flush = () => {
    if (buffer) tokens.push({ kind: "text", value: buffer });
    buffer = "";
  };
  const pairs: Record<string, string> = { "'": "'", '"': '"', "“": "”", "‘": "’" };
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    const close = pairs[ch];
    const prev = i > 0 ? text[i - 1] : " ";
    if (close && !/[\p{L}\p{N}]/u.test(prev) && i + 1 < text.length && !/\s/.test(text[i + 1])) {
      const j = closingQuote(text, i + 1, close);
      if (j > i) {
        const inner = text.slice(i + 1, j);
        flush();
        const words = inner.trim().split(/\s+/).length;
        tokens.push({ kind: words <= 5 ? "term" : "quote", value: text.slice(i, j + 1) });
        i = j + 1;
        continue;
      }
    }
    const caps = /^\p{Lu}{3,}(?!\p{L})/u.exec(text.slice(i));
    if (caps && !/\p{L}/u.test(prev) && !ACRONYMS.has(caps[0]) && caps[0] === caps[0].toLocaleUpperCase("tr")) {
      flush();
      tokens.push({ kind: "term", value: caps[0] });
      i += caps[0].length;
      continue;
    }
    buffer += ch;
    i++;
  }
  flush();
  return tokens;
}
