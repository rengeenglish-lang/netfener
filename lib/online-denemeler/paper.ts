import "server-only";
import { DENEME_LOADERS } from "@/content/yds-denemeler/registry";
import { printed, type Printed } from "@/content/yds-denemeler/paper";
import { SECTIONS } from "@/content/yds-denemeler/types";
import { YOKDIL_LOADERS } from "@/content/yokdil-denemeler/registry";
import { printedYokdil } from "@/content/yokdil-denemeler/paper";
import { YOKDIL_SECTIONS } from "@/content/yokdil-denemeler/types";
import { packBooklet } from "./booklet";
import { denemeTitle, splitDenemeNo } from "./tracks";
import type { Paper, PaperPassage, PaperQuestion, PaperSection } from "./types";

export type KeyedQuestion = PaperQuestion & { answer: number; why: string };

type Source = { rows: Printed[]; clozeText: (i: number) => string; readingText: (i: number) => string; sections: readonly PaperSection[] };

/** Loads a test of any track as printed rows plus its passage texts and section list. */
async function loadSource(no: number): Promise<Source | null> {
  const split = splitDenemeNo(no);
  if (!split) return null;
  if (split.track.family === "yds") {
    const load = DENEME_LOADERS[split.local];
    if (!load) return null;
    const d = await load();
    return { rows: printed(d), clozeText: (i) => d.cloze[i].text, readingText: (i) => d.reading[i].text, sections: SECTIONS };
  }
  const load = YOKDIL_LOADERS[split.track.field!][split.local];
  if (!load) return null;
  const d = await load();
  return { rows: printedYokdil(d, no), clozeText: (i) => d.cloze[i].text, readingText: (i) => d.reading[i].text, sections: YOKDIL_SECTIONS };
}

/** The full test with answers and explanations. Server only: never pass this to a client component. */
export async function loadKeyedDeneme(no: number): Promise<{ questions: KeyedQuestion[]; passages: PaperPassage[]; sections: PaperSection[] } | null> {
  const source = await loadSource(no);
  if (!source) return null;
  const rows = source.rows;

  const passages: PaperPassage[] = [];
  const passageIndex = new Map<string, number>();
  for (const r of rows) {
    if (r.passage === undefined || (r.section !== "cloze" && r.section !== "reading")) continue;
    const key = `${r.section}-${r.passage}`;
    const existing = passageIndex.get(key);
    if (existing !== undefined) {
      passages[existing].to = r.n;
      continue;
    }
    const text =
      r.section === "cloze"
        ? source.clozeText(r.passage).replace(/\{(\d)\}/g, (_, k) => `(${r.n + Number(k) - 1}) ----`)
        : source.readingText(r.passage);
    passageIndex.set(key, passages.length);
    passages.push({ kind: r.section, text, from: r.n, to: r.n });
  }

  const questions: KeyedQuestion[] = rows.map((r) => ({
    n: r.n,
    section: r.section,
    stem: r.stem,
    options: r.options,
    passage: r.passage === undefined ? undefined : passageIndex.get(`${r.section}-${r.passage}`),
    sentences: r.sentences,
    answer: r.answer,
    why: r.why,
  }));
  const sections = source.sections.map((x) => ({ key: x.key, from: x.from, to: x.to, title: x.title, instruction: x.instruction }));
  return { questions, passages, sections };
}

/** The answer-free paper sent to the browser for a sitting. */
export async function loadPaper(no: number): Promise<Paper | null> {
  const keyed = await loadKeyedDeneme(no);
  if (!keyed) return null;
  const questions: PaperQuestion[] = keyed.questions.map((q) => {
    const item: PaperQuestion = { n: q.n, section: q.section, stem: q.stem, options: q.options };
    if (q.passage !== undefined) item.passage = q.passage;
    if (q.sentences) item.sentences = q.sentences;
    return item;
  });
  return {
    no: splitDenemeNo(no)?.local ?? no,
    title: denemeTitle(no),
    questions,
    passages: keyed.passages,
    sections: keyed.sections,
    pages: packBooklet(questions, keyed.passages),
  };
}
