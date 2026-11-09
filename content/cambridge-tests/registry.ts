import type { CambridgeLevel, CambridgeTest, Task } from "./types";
import { STARTERS_1 } from "./starters-1";
import { MOVERS_1 } from "./movers-1";
import { FLYERS_1 } from "./flyers-1";
import { KEY_1 } from "./key-1";
import { PRELIMINARY_1 } from "./preliminary-1";
import { STARTERS_2 } from "./starters-2";
import { MOVERS_2 } from "./movers-2";
import { FLYERS_2 } from "./flyers-2";
import { KEY_2 } from "./key-2";
import { PRELIMINARY_2 } from "./preliminary-2";
import { STARTERS_3 } from "./starters-3";
import { MOVERS_3 } from "./movers-3";
import { FLYERS_3 } from "./flyers-3";
import { KEY_3 } from "./key-3";
import { PRELIMINARY_3 } from "./preliminary-3";

export const CAMBRIDGE_TESTS: CambridgeTest[] = [STARTERS_1, MOVERS_1, FLYERS_1, KEY_1, PRELIMINARY_1, STARTERS_2, MOVERS_2, FLYERS_2, KEY_2, PRELIMINARY_2, STARTERS_3, MOVERS_3, FLYERS_3, KEY_3, PRELIMINARY_3];

/** Five tests are planned per level; slots not yet released are shown as coming soon. */
export const CAMBRIDGE_SLOTS = 5;

export const LEVELS: { id: CambridgeLevel; name: string; cefr: string; age: string; colour: string; e: string; blurb: string }[] = [
  { id: "starters", name: "Pre A1 Starters", cefr: "Pre A1", age: "7–8 yaş", colour: "#f59e0b", e: "🐣", blurb: "İlk sınav: resimlerle evet–hayır, harf harf kelime yazma ve kısa cevaplar." },
  { id: "movers", name: "A1 Movers", cefr: "A1", age: "8–11 yaş", colour: "#10b981", e: "🚲", blurb: "Tanımdan kelime bulma, diyalog, hikâye boşlukları ve resim hakkında cümle yazma." },
  { id: "flyers", name: "A2 Flyers", cefr: "A2", age: "9–12 yaş", colour: "#3b82f6", e: "🪁", blurb: "Daha uzun hikâyeler, bilgi metinleri ve üç resimden kısa bir hikâye yazma." },
  { id: "key", name: "A2 Key (KET)", cefr: "A2", age: "11 yaş ve üzeri", colour: "#8b5cf6", e: "🔑", blurb: "Kısa notlar, eşleştirme, uzun metin, iki çeşit boşluk doldurma, e-posta ve resimli hikâye." },
  { id: "preliminary", name: "B1 Preliminary (PET)", cefr: "B1", age: "12 yaş ve üzeri", colour: "#ef4444", e: "🎓", blurb: "Altı bölümlük Reading ve iki görevli Writing: e-posta ile makale ya da hikâye." },
];

export const levelMeta = (id: CambridgeLevel) => LEVELS.find((l) => l.id === id)!;

export function findCambridgeTest(id: string) {
  return CAMBRIDGE_TESTS.find((t) => t.id === id) ?? null;
}

export const cambridgeTestHref = (id: string, paper?: string) => (paper ? `/cambridge/testler/${id}?paper=${paper}` : `/cambridge/testler/${id}`);

/** Gaps in a text, written {1}, {2} … */
export function gapNumbers(paragraphs: string[]) {
  return [...paragraphs.join("\n").matchAll(/\{(\d+)\}/g)].map((m) => Number(m[1]));
}

/** Scored items in one task (writing is self-checked, so it scores nothing). */
export function taskItems(task: Task): number {
  switch (task.kind) {
    case "word-bank":
      return task.answers.length + (task.titleQuestion ? 1 : 0);
    case "cloze-mc":
      return task.gaps.length;
    case "open-cloze":
      return task.answers.length;
    case "gapped-text":
      return task.answers.length;
    case "writing":
      return 0;
    default:
      return task.items.length;
  }
}

export const normalise = (s: string) => s.toLowerCase().replace(/[’']/g, "'").replace(/[.!?,]/g, "").replace(/\s+/g, " ").trim();

/** Young learners' results are given in shields (1–5) per paper. */
export function shields(share: number) {
  if (share >= 0.9) return 5;
  if (share >= 0.75) return 4;
  if (share >= 0.6) return 3;
  if (share >= 0.4) return 2;
  return 1;
}

/** A rough practice estimate on the Cambridge English Scale for Key and Preliminary. */
export function scaleEstimate(level: "key" | "preliminary", share: number) {
  if (level === "key") {
    const score = Math.round(100 + share * 50);
    const grade = score >= 140 ? "Grade A (B1)" : score >= 133 ? "Grade B (A2)" : score >= 120 ? "Grade C (A2)" : "A1 level";
    return { score, grade };
  }
  const score = Math.round(120 + share * 50);
  const grade = score >= 160 ? "Grade A (B2)" : score >= 153 ? "Grade B (B1)" : score >= 140 ? "Grade C (B1)" : "A2 level";
  return { score, grade };
}
