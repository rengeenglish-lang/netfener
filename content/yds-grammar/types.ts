/**
 * One YDS grammar topic, written for Netfener. It becomes three Konu Anlatımı lessons:
 * "Konuya Giriş" (intro blocks: first = overview, middle = "Title\nbody", last = conclusion),
 * "Kurallar Referansı" (rule – explanation + example, rendered as an accordion glossary) and
 * "Örnek Sorular ve Çözümler" (multiple-choice questions with a worked answer).
 */
export type GrammarRule = [rule: string, explanation: string, exampleEn: string, exampleTr: string];

export type GrammarQuestion = {
  /** The stem with "----" for the blank. Options must not contain "(" (the lesson parser splits on it). */
  q: string;
  options: [string, string, string, string];
  answer: "A" | "B" | "C" | "D";
  why: string;
};

export type GrammarTopic = {
  slug: string;
  name: string;
  /** Title of the reference lesson; defaults to "Kurallar Referansı". Must contain "Referansı" or "Sözlüğü". */
  rulesTitle?: string;
  intro: string[];
  rules: GrammarRule[];
  examples: GrammarQuestion[];
};
