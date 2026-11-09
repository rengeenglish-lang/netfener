/**
 * Cambridge English practice tests (Pre A1 Starters, A1 Movers, A2 Flyers, A2 Key, B1 Preliminary).
 * Original Netfener content: only the papers' task types and order follow the real exams.
 * Listening is built for Pre A1 Starters (Azure neural voices); Speaking is not included yet.
 */

export type CambridgeLevel = "starters" | "movers" | "flyers" | "key" | "preliminary";

/** A picture drawn with emoji on a coloured card, so no image files are needed. */
export type Pic = { e: string; label?: string };

/** A scene: emoji placed on a background at x/y percentages (0–100). */
export type Scene = { bg: "park" | "room" | "beach" | "kitchen" | "classroom" | "street" | "garden" | "farm"; items: { e: string; x: number; y: number; size?: number; /** letter shown on the item, for listening tasks */ tag?: string }[] };

/** Starters 1: a picture and a sentence; is the sentence right? */
export type PictureYesNo = { kind: "picture-yesno"; instruction: string; items: { pic: Pic; text: string; answer: boolean }[] };

/** Starters 2: one scene, several statements to answer yes or no. */
export type SceneYesNo = { kind: "scene-yesno"; instruction: string; scene: Scene; items: { text: string; answer: boolean }[] };

/** Starters 3: look at the picture and spell the word from jumbled letters. */
export type Spell = { kind: "spell"; instruction: string; items: { pic: Pic; answer: string }[] };

/** A text with numbered gaps {1}…{n}, filled from a word bank (Starters 4, Movers 3, Flyers 3). */
export type WordBank = {
  kind: "word-bank";
  instruction: string;
  title?: string;
  /** Paragraphs; gaps are written {1}, {2} … and an example may be shown in the text already. */
  text: string[];
  bank: { word: string; e?: string }[];
  answers: string[];
  /** Optional last question: choose the best title for the story. */
  titleQuestion?: { options: string[]; answer: number };
};

/** One-word to few-word answers typed by the learner (Starters 5, Movers 5, Flyers 5). */
export type ShortAnswer = {
  kind: "short-answer";
  instruction: string;
  /** Optional reading text the questions are about. */
  text?: string[];
  scene?: Scene;
  items: { pic?: Pic; question: string; /** accepted answers, compared case-insensitively */ answers: string[] }[];
};

/** Movers 1, Flyers 1: read the definition and choose the word. */
export type Definitions = { kind: "definitions"; instruction: string; bank: { word: string; e?: string }[]; items: { text: string; answer: string }[] };

/** Movers 2, Flyers 2: choose the best reply in a conversation. */
export type Dialogue = { kind: "dialogue"; instruction: string; speakers: [string, string]; items: { line: string; options: string[]; answer: number }[] };

/** Multiple-choice questions, with or without a text (Key 1 and 3, Preliminary 1 and 3). */
export type Mcq = {
  kind: "mcq";
  instruction: string;
  /** Each item may carry its own short text (a notice or message), or the whole part shares `text`. */
  text?: { title?: string; paragraphs: string[] };
  items: { notice?: { genre: string; lines: string[] }; question: string; options: string[]; answer: number }[];
};

/** Multiple-choice cloze: a text with gaps, three or four options per gap (Movers 4, Flyers 4, Key 4, Preliminary 5). */
export type ClozeMc = { kind: "cloze-mc"; instruction: string; title?: string; text: string[]; gaps: { options: string[]; answer: number }[] };

/** Open cloze: one word per gap (Flyers 6, Key 5, Preliminary 6). */
export type OpenCloze = { kind: "open-cloze"; instruction: string; title?: string; text: string[]; answers: string[][] };

/** Matching questions to texts or people to options (Key 2, Preliminary 2). */
export type Matching = {
  kind: "matching";
  instruction: string;
  /** The options learners choose between, labelled A, B, C … */
  options: { title: string; text: string }[];
  items: { text: string; answer: number }[];
};

/** Preliminary 4: sentences removed from a text. */
export type GappedText = { kind: "gapped-text"; instruction: string; title: string; text: string[]; sentences: string[]; answers: number[] };

/** Productive writing, checked by the learner against a sample answer. */
export type Writing = {
  kind: "writing";
  instruction: string;
  /** Pictures for a picture story (Flyers 7, Key 7) or one scene (Movers 6). */
  pics?: Pic[];
  scene?: Scene;
  /** Message or task the learner answers (Key 6, Preliminary 1). */
  input?: { from?: string; subject?: string; lines: string[] };
  /** Optional short questions to answer before the free sentences (Movers 6). */
  prompts?: string[];
  minWords: number;
  checklist: string[];
  sample: string;
};

/** Starters Listening 1: listen and match each name to a person in the picture (by tag). */
export type ListenLines = { kind: "listen-lines"; instruction: string; scene: Scene; items: { name: string; answer: string }[] };

/** Starters Listening 3: listen and choose the right picture of three. */
export type ListenTick = { kind: "listen-tick"; instruction: string; items: { question: string; pics: Pic[]; answer: number }[] };

/** Starters Listening 4: listen and colour; each instruction names one tagged object and a colour. */
export type ListenColour = { kind: "listen-colour"; instruction: string; scene: Scene; colours: string[]; items: { answer: string; colour: string }[] };

export type Task = ListenLines | ListenTick | ListenColour | PictureYesNo | SceneYesNo | Spell | WordBank | ShortAnswer | Definitions | Dialogue | Mcq | ClozeMc | OpenCloze | Matching | GappedText | Writing;

/** One line of a listening script: N is the narrator; other speakers are voiced through `cast`. */
export type Line = { who: string; text: string; pause?: number };

export type Part = {
  title: string;
  task: Task;
  /** Listening only: the MP3 under /public, its script and the voice for each speaker. */
  audio?: string;
  cast?: Partial<Record<string, string>>;
  script?: Line[];
};

/** One paper: Reading & Writing for the young learners and Key; Reading or Writing for Preliminary. */
export type Paper = { id: "reading-writing" | "reading" | "writing" | "listening"; name: string; minutes: number; parts: Part[] };

export type CambridgeTest = { id: string; level: CambridgeLevel; no: number; title: string; papers: Paper[] };
