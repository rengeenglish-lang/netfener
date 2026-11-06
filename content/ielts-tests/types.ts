/** Computer-delivered IELTS-style practice tests (Netfener's own content). */

export type IeltsModuleId = "listening" | "reading" | "writing";
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

export type IeltsModule =
  | { id: "listening" | "reading"; minutes: number; parts: QuestionPart[] }
  | { id: "writing"; minutes: number; tasks: WritingTask[] };

export type IeltsTest = {
  id: string;
  track: IeltsTrack;
  no: number;
  title: string;
  modules: IeltsModule[];
};
