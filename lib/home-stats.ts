export type HomeStatsInput = { exams: number; topics: number; questions: number; words: number };
export type StatTile = { value: string; label: string };

const nf = new Intl.NumberFormat("tr-TR");
/** Rounds down to a clean step so the page never claims more than exists ("1.250+" for 1.287). */
export function floorTo(n: number, step: number) {
  return Math.floor(n / step) * step;
}
function step(n: number) {
  return n >= 5000 ? 500 : n >= 1000 ? 250 : n >= 200 ? 100 : n >= 50 ? 10 : 5;
}
/** Only tiles backed by a real, non-trivial count are returned; a value that rounds to zero is dropped, never shown as 0. */
export function statTiles(s: HomeStatsInput): StatTile[] {
  const tiles: StatTile[] = [];
  if (s.exams > 0) tiles.push({ value: String(s.exams), label: "Sınav, tek platform" });
  for (const [count, label] of [
    [s.topics, "konu anlatımı"],
    [s.questions, "pratik ve deneme sorusu"],
    [s.words, "kelime, A1–C1 setlerinde"],
  ] as const) {
    const v = floorTo(count, step(count));
    if (v > 0) tiles.push({ value: `${nf.format(v)}+`, label });
  }
  return tiles;
}
