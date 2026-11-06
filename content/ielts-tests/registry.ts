import { ACADEMIC_1 } from "./academic-1";
import { ACADEMIC_2 } from "./academic-2";
import { ACADEMIC_3 } from "./academic-3";
import { ACADEMIC_4 } from "./academic-4";
import { ACADEMIC_5 } from "./academic-5";
import { ACADEMIC_6 } from "./academic-6";
import { GENERAL_1 } from "./general-1";
import { GENERAL_2 } from "./general-2";
import { GENERAL_3 } from "./general-3";
import { GENERAL_4 } from "./general-4";
import { SPEAKING } from "./speaking";
import type { IeltsModuleId, IeltsTest, IeltsTrack } from "./types";

/** Each test with its Speaking module (kept in speaking.ts) added after Writing. */
const withSpeaking = (t: IeltsTest): IeltsTest => (SPEAKING[t.id] ? { ...t, modules: [...t.modules, SPEAKING[t.id]] } : t);

export const IELTS_TESTS: IeltsTest[] = [ACADEMIC_1, ACADEMIC_2, ACADEMIC_3, ACADEMIC_4, ACADEMIC_5, ACADEMIC_6, GENERAL_1, GENERAL_2, GENERAL_3, GENERAL_4].map(withSpeaking);

/** Library slots: released tests are open, the rest are shown as coming soon. */
export const IELTS_LIBRARY: { track: IeltsTrack; name: string; slots: number }[] = [
  { track: "academic", name: "Academic", slots: 6 },
  { track: "general", name: "General Training", slots: 4 },
];

export const MODULE_META: Record<IeltsModuleId, { name: string; fullMinutes: number; fullQuestions: string }> = {
  listening: { name: "Listening", fullMinutes: 30, fullQuestions: "40 soru · 4 bölüm" },
  reading: { name: "Reading", fullMinutes: 60, fullQuestions: "40 soru · 3 metin" },
  writing: { name: "Writing", fullMinutes: 60, fullQuestions: "2 görev" },
  speaking: { name: "Speaking", fullMinutes: 14, fullQuestions: "3 bölüm" },
};

export function findIeltsTest(id: string) {
  return IELTS_TESTS.find((t) => t.id === id) ?? null;
}

export function ieltsTestHref(id: string, module: IeltsModuleId) {
  return `/ielts/testler/${id}/${module}`;
}

/** Questions in a listening or reading module, tasks in writing, examiner questions in speaking. */
export function questionCount(test: IeltsTest, module: IeltsModuleId) {
  const m = test.modules.find((x) => x.id === module);
  if (!m) return 0;
  if (m.id === "writing") return m.tasks.length;
  if (m.id === "speaking") return m.parts.reduce((sum, p) => sum + p.prompts.length, 0);
  return m.parts.reduce((sum, p) => sum + p.groups.reduce((s, g) => s + (g.kind === "notes" ? g.gaps.length : g.items.length), 0), 0);
}
