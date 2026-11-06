import { ACADEMIC_1 } from "./academic-1";
import { ACADEMIC_2 } from "./academic-2";
import { ACADEMIC_3 } from "./academic-3";
import { ACADEMIC_4 } from "./academic-4";
import { GENERAL_1 } from "./general-1";
import { GENERAL_2 } from "./general-2";
import type { IeltsModuleId, IeltsTest, IeltsTrack } from "./types";

export const IELTS_TESTS: IeltsTest[] = [ACADEMIC_1, ACADEMIC_2, ACADEMIC_3, ACADEMIC_4, GENERAL_1, GENERAL_2];

/** Library slots: released tests are open, the rest are shown as coming soon. */
export const IELTS_LIBRARY: { track: IeltsTrack; name: string; slots: number }[] = [
  { track: "academic", name: "Academic", slots: 6 },
  { track: "general", name: "General Training", slots: 4 },
];

export const MODULE_META: Record<IeltsModuleId, { name: string; fullMinutes: number; fullQuestions: string }> = {
  listening: { name: "Listening", fullMinutes: 30, fullQuestions: "40 soru · 4 bölüm" },
  reading: { name: "Reading", fullMinutes: 60, fullQuestions: "40 soru · 3 metin" },
  writing: { name: "Writing", fullMinutes: 60, fullQuestions: "2 görev" },
};

export function findIeltsTest(id: string) {
  return IELTS_TESTS.find((t) => t.id === id) ?? null;
}

export function ieltsTestHref(id: string, module: IeltsModuleId) {
  return `/ielts/testler/${id}/${module}`;
}

/** Number of questions in a listening or reading module. */
export function questionCount(test: IeltsTest, module: IeltsModuleId) {
  const m = test.modules.find((x) => x.id === module);
  if (!m) return 0;
  if (m.id === "writing") return m.tasks.length;
  return m.parts.reduce((sum, p) => sum + p.groups.reduce((s, g) => s + (g.kind === "notes" ? g.gaps.length : g.items.length), 0), 0);
}
