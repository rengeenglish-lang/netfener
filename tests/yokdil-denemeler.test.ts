import { test } from "node:test";
import assert from "node:assert/strict";
import { YOKDIL_LOADERS } from "@/content/yokdil-denemeler/registry";
import { printedYokdil } from "@/content/yokdil-denemeler/paper";
import { YOKDIL_SECTIONS } from "@/content/yokdil-denemeler/types";
import { denemeNo, splitDenemeNo, trackBySlug, TRACKS } from "@/lib/online-denemeler/tracks";

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

test("track numbers round-trip", () => {
  for (const t of TRACKS) {
    const s = splitDenemeNo(denemeNo(t, 7));
    assert.equal(s?.track.slug, t.slug);
    assert.equal(s?.local, 7);
  }
  assert.equal(splitDenemeNo(1000), null);
  assert.equal(trackBySlug("yokdil-fen-bilimleri")?.base, 3000);
});

test("every YÖKDİL deneme is a well-formed 80-question test", async () => {
  let total = 0;
  for (const [field, loaders] of Object.entries(YOKDIL_LOADERS)) {
    for (const [local, load] of Object.entries(loaders)) {
      const d = await load();
      const tag = `${field} ${local}`;
      assert.equal(d.field, field, tag);
      assert.equal(d.no, Number(local), tag);
      const rows = printedYokdil(d, Number(local));
      assert.equal(rows.length, 80, tag);
      for (const s of YOKDIL_SECTIONS) {
        assert.ok(rows.slice(s.from - 1, s.to).every((r) => r.section === s.key), `${tag}: section ${s.key}`);
      }
      const letters = [0, 0, 0, 0, 0];
      for (const r of rows) {
        letters[r.answer]++;
        assert.equal(r.options.length, 5, `${tag} #${r.n}`);
        assert.equal(new Set(r.options.map(norm)).size, 5, `${tag} #${r.n}: duplicate options`);
        assert.ok(r.why.length >= 30, `${tag} #${r.n}: explanation too short`);
        if (["vocab", "grammar", "completion", "paragraph"].includes(r.section)) assert.ok(r.stem.includes("----"), `${tag} #${r.n}: no blank`);
      }
      assert.deepEqual(letters, [16, 16, 16, 16, 16], `${tag}: answer letters`);
      for (const c of d.cloze) for (let k = 1; k <= 5; k++) assert.ok(c.text.includes(`{${k}}`), `${tag}: cloze gap ${k}`);
      // The correct option must not give itself away by being clearly the longest too often (YDS rule: ≤ 20).
      const written = [...d.vocab, ...d.grammar, ...d.cloze.flatMap((c) => c.blanks), ...d.completion, ...d.enTr, ...d.trEn, ...d.reading.flatMap((r) => r.questions), ...d.paragraph];
      const longest = written.filter(([, o]) => o[0].length > Math.max(...o.slice(1).map((x) => x.length)) + 8).length;
      assert.ok(longest <= 20, `${tag}: correct option clearly longest in ${longest}/74`);
      total++;
    }
  }
  assert.ok(total >= 1);
});

test("YÖKDİL papers load through the shared runner path", async () => {
  const { loadPaper } = await import("@/lib/online-denemeler/paper");
  for (const t of TRACKS.filter((x) => x.family === "yokdil")) {
    const paper = await loadPaper(denemeNo(t, 1));
    assert.ok(paper, t.slug);
    assert.equal(paper.questions.length, 80);
    assert.equal(paper.title, `${t.name} Denemesi 1`);
    assert.equal(paper.passages.filter((p) => p.kind === "reading").length, 5);
    const covered = paper.pages.flatMap((p) => Array.from({ length: p.to - p.from + 1 }, (_, i) => p.from + i));
    assert.deepEqual(covered, Array.from({ length: 80 }, (_, i) => i + 1));
  }
});

test("only YDS Deneme 1–5 are free", async () => {
  const { isFreeDeneme } = await import("@/lib/online-denemeler/tracks");
  assert.ok(isFreeDeneme(1) && isFreeDeneme(5));
  assert.ok(!isFreeDeneme(6));
  assert.ok(!isFreeDeneme(1001) && !isFreeDeneme(2001) && !isFreeDeneme(3001));
});
