/** Computer-delivered IELTS-style practice tests (Netfener's own content). */

export type IeltsModuleId = "listening" | "reading" | "writing" | "speaking";
export type IeltsTrack = "academic" | "general";

export type Gap = { n: number; answers: string[] };

export type QuestionGroup =
  | {
      kind: "notes";
      instruction: string;
      heading?: string;
      /** Each line may hold gap markers written as [[n]]. */
      lines: string[];
      gaps: Gap[];
    }
  | {
      kind: "tfng";
      instruction: string;
      items: { n: number; text: string; answer: "TRUE" | "FALSE" | "NOT GIVEN" }[];
    }
  | {
      /** Writer's views: YES / NO / NOT GIVEN. */
      kind: "ynng";
      instruction: string;
      items: { n: number; text: string; answer: "YES" | "NO" | "NOT GIVEN" }[];
    }
  | {
      kind: "choice";
      instruction: string;
      items: { n: number; text: string; options: string[]; answer: number }[];
    };

export type Speaker = "A" | "B" | "C";

/** One line of a listening recording. "N" is the exam narrator; `pause` is silence after the line, in seconds. */
export type Line = { who: "N" | Speaker; text: string; pause?: number };

export type QuestionPart = {
  title: string;
  intro: string;
  /** Reading only: the passage shown in the left pane. */
  passage?: { title: string; paragraphs: string[] };
  /** Listening only: what the recording says. */
  script?: Line[];
  /** Listening only: Azure neural voice for each speaker (the narrator voice is set by the audio script). */
  cast?: Partial<Record<Speaker, string>>;
  /** Listening only: MP3 under /public, built from `script` by scripts/build-ielts-audio.mts. */
  audio?: string;
  groups: QuestionGroup[];
};

export type WritingTask = {
  title: string;
  suggestedMinutes: number;
  minWords: number;
  prompt: string[];
  chart?: { title: string; unit: string; series: [string, string]; rows: { label: string; values: [number, number] }[] };
};

/** One examiner question; the candidate's answer is recorded for `seconds`. */
export type SpeakingPrompt = {
  /** The question as shown on screen afterwards. */
  text: string;
  /** What the examiner says, when it differs from `text` (e.g. "Now let's talk about music. …"). */
  spoken?: string;
  seconds: number;
  /** A model answer the candidate can compare with afterwards. */
  sample: string;
  /** Examiner MP3 under /public, built by scripts/build-ielts-audio.mts. */
  audio: string;
};

export type SpeakingPart = {
  title: string;
  /** What the examiner says before the first question of the part. */
  intro: string;
  introAudio: string;
  /** Part 2 only: the task card, read during the preparation time. */
  cueCard?: { topic: string; points: string[]; prepSeconds: number };
  /** Keep the question text hidden during the test (e.g. TOEFL Listen and Repeat, where the text is the answer). */
  hideText?: boolean;
  prompts: SpeakingPrompt[];
};

export type SpeakingModule = {
  id: "speaking";
  minutes: number;
  /** Azure neural voice used for the examiner. */
  examiner: string;
  parts: SpeakingPart[];
  /** The examiner's closing words. */
  outro: string;
  outroAudio: string;
};

export type IeltsModule =
  | { id: "listening" | "reading"; minutes: number; parts: QuestionPart[] }
  | { id: "writing"; minutes: number; tasks: WritingTask[] }
  | SpeakingModule;

export type IeltsTest = {
  id: string;
  track: IeltsTrack;
  no: number;
  title: string;
  modules: IeltsModule[];
};
