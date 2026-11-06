import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { IELTS_TESTS, questionCount } from "../content/ielts-tests/registry";
import type { QuestionGroup } from "../content/ielts-tests/types";

const ROOT = join(import.meta.dirname, "..");
const numbers = (g: QuestionGroup) => (g.kind === "notes" ? g.gaps.map((x) => x.n) : g.items.map((x) => x.n));

for (const t of IELTS_TESTS) {
  for (const m of t.modules) {
    if (m.id === "writing") continue;

    test(`${t.id} ${m.id}: questions are numbered 1–40 in order`, () => {
      const nums = m.parts.flatMap((p) => p.groups.flatMap(numbers));
      assert.deepEqual(nums, Array.from({ length: 40 }, (_, i) => i + 1));
      assert.equal(questionCount(t, m.id), 40);
    });

    test(`${t.id} ${m.id}: every question has a valid key`, () => {
      for (const p of m.parts)
        for (const g of p.groups) {
          if (g.kind === "notes") {
            const markers = g.lines.join(" ").match(/\[\[(\d+)\]\]/g)?.map((x) => Number(x.slice(2, -2))) ?? [];
            assert.deepEqual(markers, g.gaps.map((x) => x.n), `${p.title}: gap markers match gaps`);
            for (const gap of g.gaps) assert.ok(gap.answers.length && gap.answers.every((a) => a === a.toLowerCase()), `Q${gap.n}: lower-case answers`);
          } else if (g.kind === "choice") {
            for (const it of g.items) assert.ok(it.answer >= 0 && it.answer < it.options.length, `Q${it.n}: answer in range`);
          }
        }
    });
  }

  const listening = t.modules.find((m) => m.id === "listening");
  if (listening && listening.id !== "writing") {
    test(`${t.id} listening: every part has a built recording and a voice per speaker`, () => {
      const manifest = JSON.parse(readFileSync(join(ROOT, "content/ielts-tests/audio-manifest.json"), "utf8"));
      for (const p of listening.parts) {
        assert.ok(p.audio, `${p.title}: audio path`);
        assert.ok(existsSync(join(ROOT, "public", p.audio)), `${p.title}: ${p.audio} exists`);
        assert.ok(manifest[p.audio], `${p.title}: built by scripts/build-ielts-audio.mts`);
        for (const line of p.script ?? []) if (line.who !== "N") assert.ok(p.cast?.[line.who], `${p.title}: voice for ${line.who}`);
      }
      const seconds = listening.parts.reduce((s, p) => s + manifest[p.audio!].seconds, 0);
      assert.ok(seconds / 60 < listening.minutes, "the timer outlasts the recording");
    });
  }
}
