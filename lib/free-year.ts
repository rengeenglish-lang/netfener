/**
 * "Her ay ilk 100 üye": the first new members of each Istanbul calendar month get the Başlangıç
 * plan free for a year. Online group lessons are not part of Başlangıç, so they are never included.
 * Shared by the server (granting, counter) and the browser (sign-up popup).
 */
export const FREE_YEAR_MONTHLY_SPOTS = 100;
export const FREE_YEAR_MONTHS = 12;
export const FREE_YEAR_TIER = "BASLANGIC";

/** Short-lived, readable cookie that carries the sign-up result to the popup. Display only: access lives in the database. */
export const FREE_YEAR_COOKIE = "nf_free_year";
export const FREE_YEAR_COOKIE_SECONDS = 60 * 60;

export type FreeYearNotice = { position: number; expiresAt: Date };

// Türkiye is UTC+3 all year (no daylight saving).
const ISTANBUL_OFFSET_MS = 3 * 3_600_000;

/** "2026-12" for the Istanbul calendar month that `now` falls in. */
export function freeYearMonth(now: Date): string {
  return new Date(now.getTime() + ISTANBUL_OFFSET_MS).toISOString().slice(0, 7);
}

/** The instant the next month's spots open (00:00 on the 1st, Istanbul time). */
export function nextFreeYearOpening(now: Date): Date {
  const local = new Date(now.getTime() + ISTANBUL_OFFSET_MS);
  return new Date(Date.UTC(local.getUTCFullYear(), local.getUTCMonth() + 1, 1) - ISTANBUL_OFFSET_MS);
}

export function encodeFreeYearNotice(notice: FreeYearNotice): string {
  return `${notice.position}_${notice.expiresAt.getTime()}`;
}

/** Null for anything that is not a well-formed notice, including a number outside the monthly spots. */
export function decodeFreeYearNotice(value: string | null | undefined): FreeYearNotice | null {
  const match = /^(\d{1,3})_(\d{13})$/.exec(value ?? "");
  if (!match) return null;
  const position = Number(match[1]);
  if (position < 1 || position > FREE_YEAR_MONTHLY_SPOTS) return null;
  return { position, expiresAt: new Date(Number(match[2])) };
}

/** The raw notice value out of a `document.cookie` string. */
export function readFreeYearCookie(cookies: string): string | null {
  const found = cookies.split("; ").find((part) => part.startsWith(`${FREE_YEAR_COOKIE}=`));
  return found ? found.slice(FREE_YEAR_COOKIE.length + 1) : null;
}
