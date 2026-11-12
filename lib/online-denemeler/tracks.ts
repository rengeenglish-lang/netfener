/**
 * Online deneme tracks. Attempts store one number per test; each track owns a block of numbers so
 * YDS and the three YÖKDİL fields share the same attempt tables, runner and result page:
 *   YDS 1–999 · YÖKDİL Sosyal 1001–1999 · YÖKDİL Sağlık 2001–2999 · YÖKDİL Fen 3001–3999.
 */
export type TrackSlug = "yds" | "yokdil-sosyal-bilimler" | "yokdil-saglik-bilimleri" | "yokdil-fen-bilimleri";
export type YokdilField = "sosyal" | "saglik" | "fen";

export type Track = {
  slug: TrackSlug;
  /** First global number is base + 1. */
  base: number;
  name: string;
  /** Short label for compact places (header chip, cards). */
  short: string;
  /** Exam subsite slug and ExamType code. */
  examSlug: TrackSlug;
  examCode: "YDS" | "YOKDIL_SOSYAL" | "YOKDIL_SAGLIK" | "YOKDIL_FEN";
  family: "yds" | "yokdil";
  field?: YokdilField;
  /** How many tests are planned for this track (released ones are counted from the content registry). */
  planned: number;
};

export const TRACKS: Track[] = [
  { slug: "yds", base: 0, name: "YDS", short: "YDS", examSlug: "yds", examCode: "YDS", family: "yds", planned: 100 },
  { slug: "yokdil-sosyal-bilimler", base: 1000, name: "YÖKDİL Sosyal Bilimler", short: "YÖKDİL Sosyal", examSlug: "yokdil-sosyal-bilimler", examCode: "YOKDIL_SOSYAL", family: "yokdil", field: "sosyal", planned: 100 },
  { slug: "yokdil-saglik-bilimleri", base: 2000, name: "YÖKDİL Sağlık Bilimleri", short: "YÖKDİL Sağlık", examSlug: "yokdil-saglik-bilimleri", examCode: "YOKDIL_SAGLIK", family: "yokdil", field: "saglik", planned: 100 },
  { slug: "yokdil-fen-bilimleri", base: 3000, name: "YÖKDİL Fen Bilimleri", short: "YÖKDİL Fen", examSlug: "yokdil-fen-bilimleri", examCode: "YOKDIL_FEN", family: "yokdil", field: "fen", planned: 100 },
];

export const DENEME_BASE_PATH = "/dashboard/yds-denemeleri";

/** YDS Deneme 1–5 are open to every signed-in member; the rest need a paid plan. */
export const FREE_YDS_DENEME_COUNT = 5;

export function isFreeDeneme(no: number): boolean {
  const s = splitDenemeNo(no);
  return Boolean(s && s.track.slug === "yds" && s.local <= FREE_YDS_DENEME_COUNT);
}

export function trackBySlug(slug: string | null | undefined): Track | undefined {
  return TRACKS.find((t) => t.slug === slug);
}

export function trackByCode(code: string | null | undefined): Track | undefined {
  return TRACKS.find((t) => t.examCode === code);
}

/** Which track a stored test number belongs to, and its number within the track. */
export function splitDenemeNo(no: number): { track: Track; local: number } | null {
  if (!Number.isInteger(no) || no < 1) return null;
  const track = TRACKS.find((t) => no > t.base && no < t.base + 1000);
  return track ? { track, local: no - track.base } : null;
}

export const denemeNo = (track: Track, local: number) => track.base + local;

/** "YÖKDİL Sağlık Denemesi 3" */
export function denemeTitle(no: number) {
  const s = splitDenemeNo(no);
  return s ? `${s.track.name} Denemesi ${s.local}` : `Deneme ${no}`;
}

export const listHref = (track: Track) => (track.slug === "yds" ? DENEME_BASE_PATH : `${DENEME_BASE_PATH}?sinav=${track.slug}`);
export const startHref = (no: number) => `${DENEME_BASE_PATH}/${no}`;
