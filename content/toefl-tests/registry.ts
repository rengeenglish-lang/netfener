import type { SpeakingModule } from "@/content/ielts-tests/types";
import type { AdaptiveSection, ListeningTask, ReadingTask, Stage, ToeflSectionId, ToeflTest } from "./types";
import { TOEFL_1 } from "./toefl-1";
import { TOEFL_2 } from "./toefl-2";
import { TOEFL_3 } from "./toefl-3";
import { TOEFL_4 } from "./toefl-4";
import { TOEFL_5 } from "./toefl-5";
import { TOEFL_6 } from "./toefl-6";
import { TOEFL_7 } from "./toefl-7";
import { TOEFL_8 } from "./toefl-8";
import { TOEFL_9 } from "./toefl-9";
import { TOEFL_10 } from "./toefl-10";

/** Fills in the audio path of every listening item from its position in the test. */
function withAudio(test: ToeflTest): ToeflTest {
  const dir = `/audio/toefl/${test.id}/listening`;
  const stage = (key: string, s: Stage<ListeningTask>): Stage<ListeningTask> => ({
    ...s,
    tasks: s.tasks.map((t, i) => ({ ...t, audio: `${dir}/${key}-${String(i + 1).padStart(2, "0")}.mp3` })),
  });
  const l = test.listening;
  return { ...test, listening: { ...l, stage1: stage("s1", l.stage1), easier: stage("s2e", l.easier), harder: stage("s2h", l.harder) } };
}

export const TOEFL_TESTS: ToeflTest[] = [TOEFL_1, TOEFL_2, TOEFL_3, TOEFL_4, TOEFL_5, TOEFL_6, TOEFL_7, TOEFL_8, TOEFL_9, TOEFL_10].map(withAudio);

/** Ten slots in the library; tests not yet released are shown as coming soon. */
export const TOEFL_SLOTS = 10;

export const SECTION_META: Record<ToeflSectionId, { name: string; minutes: number; tasks: string }> = {
  reading: { name: "Reading", minutes: 30, tasks: "Complete the Words · Read in Daily Life · Academic Passage" },
  listening: { name: "Listening", minutes: 29, tasks: "Choose a Response · Conversation · Announcement · Academic Talk" },
  writing: { name: "Writing", minutes: 23, tasks: "Build a Sentence · Write an Email · Academic Discussion" },
  speaking: { name: "Speaking", minutes: 8, tasks: "Listen and Repeat · Take an Interview" },
};

export const SECTION_ORDER: ToeflSectionId[] = ["reading", "listening", "writing", "speaking"];

export function findToeflTest(id: string) {
  return TOEFL_TESTS.find((t) => t.id === id) ?? null;
}

export const toeflTestHref = (id: string, section: ToeflSectionId) => `/toefl/testler/${id}/${section}`;

/** Each gap in a Complete the Words paragraph, in order. */
export function wordGaps(text: string) {
  return [...text.matchAll(/(\w*)\{\{(\w+)\}\}/g)].map((m) => ({ shown: m[1], missing: m[2] }));
}

/** Scored items in one task. */
export function taskItems(task: ReadingTask | ListeningTask) {
  if (task.kind === "complete-words") return wordGaps(task.text).length;
  if (task.kind === "choose-response") return 1;
  return task.questions.length;
}

export const stageItems = (s: Stage<ReadingTask | ListeningTask>) => s.tasks.reduce((n, t) => n + taskItems(t), 0);

/** Items a candidate answers in a section: Stage 1 plus either Stage 2 (both are the same length). */
export const sectionItems = (s: AdaptiveSection<ReadingTask | ListeningTask>) => stageItems(s.stage1) + stageItems(s.harder);

/**
 * Practice band (1–6, half bands) from the share of items answered correctly. A candidate routed to
 * the easier Stage 2 cannot reach the top bands, as in the real two-stage test.
 */
export function practiceBand(share: number, route: "easier" | "harder") {
  const table: [number, number][] = [[0.95, 6], [0.88, 5.5], [0.8, 5], [0.7, 4.5], [0.6, 4], [0.5, 3.5], [0.4, 3], [0.3, 2.5], [0.2, 2], [0.1, 1.5]];
  const band = table.find(([min]) => share >= min)?.[1] ?? 1;
  return route === "easier" ? Math.min(band, 4.5) : band;
}

/** TOEFL Speaking in the shape the shared speaking screen uses: Listen and Repeat, then Take an Interview. */
export function toeflSpeakingModule(test: ToeflTest): SpeakingModule {
  const dir = `/audio/toefl/${test.id}/speaking`;
  const s = test.speaking;
  // About 8 to 12 seconds to repeat a sentence, depending on its length.
  const repeatSeconds = (sentence: string) => Math.min(12, Math.max(8, Math.ceil(sentence.split(/\s+/).length * 0.5) + 5));
  return {
    id: "speaking",
    minutes: 8,
    examiner: s.examiner,
    parts: [
      {
        title: "Listen and Repeat",
        hideText: true,
        intro: `Listen and repeat. ${s.repeat.scene} Listen to each sentence and repeat it exactly as you hear it. You will hear each sentence only once.`,
        introAudio: `${dir}/repeat-intro.mp3`,
        prompts: s.repeat.sentences.map((text, i) => ({ text, seconds: repeatSeconds(text), sample: text, audio: `${dir}/repeat-${i + 1}.mp3` })),
      },
      {
        title: "Take an Interview",
        intro: `Take an interview. ${s.interview.topic} You will have forty-five seconds to answer each question.`,
        introAudio: `${dir}/interview-intro.mp3`,
        prompts: s.interview.questions.map((q, i) => ({ text: q.text, seconds: 45, sample: q.sample, audio: `${dir}/interview-${i + 1}.mp3` })),
      },
    ],
    outro: "This is the end of the Speaking section.",
    outroAudio: `${dir}/outro.mp3`,
  };
}
