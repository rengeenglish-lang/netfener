import { DENEME_LOADERS } from "@/content/yds-denemeler/registry";
import { YOKDIL_LOADERS } from "@/content/yokdil-denemeler/registry";
import { denemeNo, splitDenemeNo, TRACKS, type Track } from "./tracks";

/** Released local numbers of a track, in order. */
export function releasedNumbers(track: Track): number[] {
  const loaders = track.family === "yds" ? DENEME_LOADERS : YOKDIL_LOADERS[track.field!];
  return Object.keys(loaders).map(Number).sort((a, b) => a - b);
}

export const releasedCount = (track: Track) => releasedNumbers(track).length;

/** Whether a stored (global) test number exists. */
export function hasDeneme(no: number): boolean {
  const s = splitDenemeNo(no);
  return Boolean(s && releasedNumbers(s.track).includes(s.local));
}

/** The next released test of the same track, or null. */
export function nextDeneme(no: number): number | null {
  const s = splitDenemeNo(no);
  if (!s) return null;
  const next = releasedNumbers(s.track).find((n) => n > s.local);
  return next ? denemeNo(s.track, next) : null;
}

export const RELEASED_BY_TRACK = () => Object.fromEntries(TRACKS.map((t) => [t.slug, releasedCount(t)])) as Record<Track["slug"], number>;
