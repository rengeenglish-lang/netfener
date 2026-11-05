import { ROMAN, answerPlan, place, type Printed } from "../yds-denemeler/paper";
import type { Q } from "../yds-denemeler/types";
import type { YokdilDeneme } from "./types";

/** All 80 questions of a YÖKDİL test in exam order with final option order. */
export function printedYokdil(d: YokdilDeneme, seed: number): Printed[] {
  const plan = answerPlan(seed, d.irrelevant.map((x) => x.odd));
  let k = 0;
  const out: Printed[] = [];
  const push = (section: Printed["section"], q: Q, passage?: number) => {
    const target = plan[k++];
    out.push({ n: out.length + 1, section, stem: q[0], options: place(q, target), answer: target, why: q[2], passage });
  };
  d.vocab.forEach((q) => push("vocab", q));
  d.grammar.forEach((q) => push("grammar", q));
  d.cloze.forEach((c, i) => c.blanks.forEach((q) => push("cloze", q, i)));
  d.completion.forEach((q) => push("completion", q));
  d.enTr.forEach((q) => push("enTr", q));
  d.trEn.forEach((q) => push("trEn", q));
  d.reading.forEach((r, i) => r.questions.forEach((q) => push("reading", q, i)));
  d.paragraph.forEach((q) => push("paragraph", q));
  d.irrelevant.forEach((x) => out.push({ n: out.length + 1, section: "irrelevant", stem: "", options: [...ROMAN], answer: x.odd, why: x.why, sentences: x.sentences }));
  return out;
}
