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
      kind: "choice";
      instruction: string;
      items: { n: number; text: string; options: string[]; answer: number }[];
    };

export type Line = { who: "A" | "B"; text: string };

export type QuestionPart = {
  title: string;
  intro: string;
  /** Reading only: the passage shown in the left pane. */
  passage?: { title: string; paragraphs: string[] };
  /** Listening only: what the audio says (read aloud by the browser). */
  script?: Line[];
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
