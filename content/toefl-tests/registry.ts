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
import { TOEFL_11 } from "./toefl-11";
import { TOEFL_12 } from "./toefl-12";
import { TOEFL_13 } from "./toefl-13";
import { TOEFL_14 } from "./toefl-14";
import { TOEFL_15 } from "./toefl-15";
import { TOEFL_16 } from "./toefl-16";
import { TOEFL_17 } from "./toefl-17";
import { TOEFL_18 } from "./toefl-18";
import { TOEFL_19 } from "./toefl-19";
import { TOEFL_20 } from "./toefl-20";
import { TOEFL_21 } from "./toefl-21";
import { TOEFL_22 } from "./toefl-22";
import { TOEFL_23 } from "./toefl-23";
import { TOEFL_24 } from "./toefl-24";
import { TOEFL_25 } from "./toefl-25";
import { TOEFL_26 } from "./toefl-26";
import { TOEFL_27 } from "./toefl-27";
import { TOEFL_28 } from "./toefl-28";
import { TOEFL_29 } from "./toefl-29";
import { TOEFL_30 } from "./toefl-30";
import { TOEFL_31 } from "./toefl-31";
import { TOEFL_32 } from "./toefl-32";
import { TOEFL_33 } from "./toefl-33";
import { TOEFL_34 } from "./toefl-34";
import { TOEFL_35 } from "./toefl-35";
import { TOEFL_36 } from "./toefl-36";
import { TOEFL_37 } from "./toefl-37";
import { TOEFL_38 } from "./toefl-38";
import { TOEFL_39 } from "./toefl-39";
import { TOEFL_40 } from "./toefl-40";
import { TOEFL_41 } from "./toefl-41";
import { TOEFL_42 } from "./toefl-42";
import { TOEFL_43 } from "./toefl-43";
import { TOEFL_44 } from "./toefl-44";
import { TOEFL_45 } from "./toefl-45";
import { TOEFL_46 } from "./toefl-46";
import { TOEFL_47 } from "./toefl-47";
import { TOEFL_48 } from "./toefl-48";
import { TOEFL_49 } from "./toefl-49";
import { TOEFL_50 } from "./toefl-50";
import { TOEFL_51 } from "./toefl-51";
import { TOEFL_52 } from "./toefl-52";
import { TOEFL_53 } from "./toefl-53";
import { TOEFL_54 } from "./toefl-54";
import { TOEFL_55 } from "./toefl-55";
import { TOEFL_56 } from "./toefl-56";
import { TOEFL_57 } from "./toefl-57";
import { TOEFL_58 } from "./toefl-58";
import { TOEFL_59 } from "./toefl-59";
import { TOEFL_60 } from "./toefl-60";
import { TOEFL_61 } from "./toefl-61";
import { TOEFL_62 } from "./toefl-62";
import { TOEFL_63 } from "./toefl-63";
import { TOEFL_64 } from "./toefl-64";
import { TOEFL_65 } from "./toefl-65";
import { TOEFL_66 } from "./toefl-66";
import { TOEFL_67 } from "./toefl-67";
import { TOEFL_68 } from "./toefl-68";
import { TOEFL_69 } from "./toefl-69";
import { TOEFL_70 } from "./toefl-70";
import { TOEFL_71 } from "./toefl-71";
import { TOEFL_72 } from "./toefl-72";
import { TOEFL_73 } from "./toefl-73";
import { TOEFL_74 } from "./toefl-74";
import { TOEFL_75 } from "./toefl-75";
import { TOEFL_76 } from "./toefl-76";
import { TOEFL_77 } from "./toefl-77";
import { TOEFL_78 } from "./toefl-78";
import { TOEFL_79 } from "./toefl-79";
import { TOEFL_80 } from "./toefl-80";
import { TOEFL_81 } from "./toefl-81";
import { TOEFL_82 } from "./toefl-82";
import { TOEFL_83 } from "./toefl-83";
import { TOEFL_84 } from "./toefl-84";
import { TOEFL_85 } from "./toefl-85";

/** Fills in the audio path of every listening item from its position in the test. */
function withAudio(test: ToeflTest): ToeflTest {
  const dir = `/audio/toefl/${test.id}/listening`;
  const stage = (key: string, s: Stage<ListeningTask>): Stage<ListeningTask> => ({
    ...s,
    tasks: s.tasks.map((t, i) => ({ ...t, audio: `${dir}/${key}-${String(i + 1).padStart(2, "0")}.mp3` })),
  });
  const l = test.listening;
  if (!l) return test;
  return { ...test, listening: { ...l, stage1: stage("s1", l.stage1), easier: stage("s2e", l.easier), harder: stage("s2h", l.harder) } };
}

export const TOEFL_TESTS: ToeflTest[] = [TOEFL_1, TOEFL_2, TOEFL_3, TOEFL_4, TOEFL_5, TOEFL_6, TOEFL_7, TOEFL_8, TOEFL_9, TOEFL_10, TOEFL_11, TOEFL_12, TOEFL_13, TOEFL_14, TOEFL_15, TOEFL_16, TOEFL_17, TOEFL_18, TOEFL_19, TOEFL_20, TOEFL_21, TOEFL_22, TOEFL_23, TOEFL_24, TOEFL_25, TOEFL_26, TOEFL_27, TOEFL_28, TOEFL_29, TOEFL_30, TOEFL_31, TOEFL_32, TOEFL_33, TOEFL_34, TOEFL_35, TOEFL_36, TOEFL_37, TOEFL_38, TOEFL_39, TOEFL_40, TOEFL_41, TOEFL_42, TOEFL_43, TOEFL_44, TOEFL_45, TOEFL_46, TOEFL_47, TOEFL_48, TOEFL_49, TOEFL_50, TOEFL_51, TOEFL_52, TOEFL_53, TOEFL_54, TOEFL_55, TOEFL_56, TOEFL_57, TOEFL_58, TOEFL_59, TOEFL_60, TOEFL_61, TOEFL_62, TOEFL_63, TOEFL_64, TOEFL_65, TOEFL_66, TOEFL_67, TOEFL_68, TOEFL_69, TOEFL_70, TOEFL_71, TOEFL_72, TOEFL_73, TOEFL_74, TOEFL_75, TOEFL_76, TOEFL_77, TOEFL_78, TOEFL_79, TOEFL_80, TOEFL_81, TOEFL_82, TOEFL_83, TOEFL_84, TOEFL_85].map(withAudio);

/** Library slots: every released test, rounded up to a row of ten; the rest are shown as coming soon. */
export const TOEFL_SLOTS = Math.max(10, Math.ceil(TOEFL_TESTS.length / 10) * 10);

/**
 * Tests whose Speaking clips have not been built yet (Azure Speech unavailable): the speaking screen
 * reads each line with the browser's voice meanwhile. Remove an id once scripts/build-ielts-audio.mts has run.
 */
export const TOEFL_AUDIO_PENDING = new Set<string>(["toefl-11", "toefl-12", "toefl-13", "toefl-14", "toefl-15", "toefl-16", "toefl-17", "toefl-18", "toefl-19", "toefl-20", "toefl-21", "toefl-22", "toefl-23", "toefl-24", "toefl-25", "toefl-26", "toefl-27", "toefl-28", "toefl-29", "toefl-30", "toefl-31", "toefl-32", "toefl-33", "toefl-34", "toefl-35", "toefl-36", "toefl-37", "toefl-38", "toefl-39", "toefl-40", "toefl-41", "toefl-42", "toefl-43", "toefl-44", "toefl-45", "toefl-46", "toefl-47", "toefl-48", "toefl-49", "toefl-50", "toefl-51", "toefl-52", "toefl-53", "toefl-54", "toefl-55", "toefl-56", "toefl-57", "toefl-58", "toefl-59", "toefl-60", "toefl-61", "toefl-62", "toefl-63", "toefl-64", "toefl-65", "toefl-66", "toefl-67", "toefl-68", "toefl-69", "toefl-70", "toefl-71", "toefl-72", "toefl-73", "toefl-74", "toefl-75", "toefl-76", "toefl-77", "toefl-78", "toefl-79", "toefl-80", "toefl-81", "toefl-82", "toefl-83", "toefl-84", "toefl-85"]);

/** The sections a test actually has, in exam order. */
export const testSections = (test: ToeflTest) => SECTION_ORDER.filter((id) => id !== "listening" || Boolean(test.listening));

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
