/**
 * TOEFL iBT practice tests in the format used from 21 January 2026 (Netfener's own content).
 * Reading and Listening are two-stage adaptive: everyone takes Stage 1, then an easier or harder
 * Stage 2 depending on the Stage 1 score. Writing and Speaking are linear.
 */

export type ToeflSectionId = "reading" | "listening" | "writing" | "speaking";

export type Choice = { text: string; options: string[]; answer: number };

// ---------- Reading ----------

/** A paragraph in which some words are missing their second half: write `acti{{vities}}`. Each gap is one item. */
export type CompleteTheWords = { kind: "complete-words"; title: string; text: string };

/** A short everyday text (notice, email, message, advert…) with 2 or 3 questions. */
export type DailyLife = { kind: "daily-life"; genre: string; title: string; text: string[]; questions: Choice[] };

/** A short academic passage with 5 questions. */
export type AcademicPassage = { kind: "academic"; title: string; paragraphs: string[]; questions: Choice[] };

export type ReadingTask = CompleteTheWords | DailyLife | AcademicPassage;

// ---------- Listening ----------

export type Voice = string;
export type Speaker = "A" | "B";
export type Line = { who: "N" | Speaker; text: string; pause?: number };

/** One sentence is heard; choose the best reply from four written options. */
export type ChooseResponse = { kind: "choose-response"; voice: Voice; line: string; options: string[]; answer: number; /** Set by the registry. */ audio?: string };

/** A conversation, campus announcement or academic talk, followed by questions. */
export type ListeningSet = {
  kind: "conversation" | "announcement" | "talk";
  title: string;
  cast: Partial<Record<Speaker, Voice>>;
  script: Line[];
  questions: Choice[];
  /** Set by the registry. */
  audio?: string;
};

export type ListeningTask = ChooseResponse | ListeningSet;

// ---------- Stages ----------

export type Stage<T> = { minutes: number; tasks: T[] };

export type AdaptiveSection<T> = {
  /** Stage 1, then Stage 2 is chosen by the Stage 1 score. */
  stage1: Stage<T>;
  easier: Stage<T>;
  harder: Stage<T>;
  /** Share of Stage 1 items needed to be routed to the harder Stage 2. */
  routeAt: number;
};

// ---------- Writing ----------

/** Someone says `prompt`; put the word chunks in order to make the reply. `chunks` is in the correct order. */
export type BuildSentence = { prompt: string; promptBy: string; chunks: string[]; end: "." | "?" };

export type WriteEmail = { scenario: string; to: string; subject: string; tasks: string[]; sample: string };

export type AcademicDiscussion = {
  course: string;
  professor: { name: string; text: string };
  students: { name: string; text: string }[];
  sample: string;
};

export type WritingSection = {
  buildMinutes: number;
  build: BuildSentence[];
  emailMinutes: number;
  email: WriteEmail;
  discussionMinutes: number;
  discussion: AcademicDiscussion;
};

// ---------- Speaking ----------

export type SpeakingSection = {
  examiner: Voice;
  repeat: { scene: string; sentences: string[] };
  interview: { topic: string; questions: { text: string; sample: string }[] };
};

export type ToeflTest = {
  id: string;
  no: number;
  title: string;
  reading: AdaptiveSection<ReadingTask>;
  listening: AdaptiveSection<ListeningTask>;
  writing: WritingSection;
  speaking: SpeakingSection;
};
