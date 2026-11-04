import { test } from "node:test";
import assert from "node:assert/strict";
import { floorTo, statTiles } from "../lib/home-stats";

test("stat tiles round down, never overstate and omit empty counts", () => {
  assert.equal(floorTo(1287, 250), 1250);
  assert.equal(floorTo(49, 10), 40);
  const tiles = statTiles({ exams: 5, topics: 127, questions: 1287, words: 5600 });
  assert.deepEqual(tiles.map((t) => t.value), ["5", "120+", "1.250+", "5.500+"]);
  for (const t of tiles) assert.ok(!/^0\+?$/.test(t.value));
  // A failed or empty query drops its tile instead of showing 0 or a guess.
  assert.deepEqual(statTiles({ exams: 5, topics: 0, questions: 0, words: 3200 }).map((t) => t.value), ["5", "3.000+"]);
  assert.deepEqual(statTiles({ exams: 0, topics: 0, questions: 0, words: 0 }), []);
  assert.equal(statTiles({ exams: 5, topics: 3, questions: 4, words: 2 }).filter((t) => t.label !== "Sınav, tek platform").length, 0); // too small to brag about
});
