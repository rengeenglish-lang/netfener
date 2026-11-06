import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { IELTS_TESTS, questionCount } from "../content/ielts-tests/registry";
import { speakingBand, isBand, baseAudioType } from "../lib/ielts-speaking";
import type { QuestionGroup } from "../content/ielts-tests/types";

const ROOT = join(import.meta.dirname, "..");
const numbers = (g: QuestionGroup) => (g.kind === "notes" ? g.gaps.map((x) => x.n) : g.items.map((x) => x.n));

for (const t of IELTS_TESTS) {
  for (const m of t.modules) {
    if (m.id === "writing" || m.id === "speaking") continue;

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
  if (listening && listening.id === "listening") {
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

  test(`${t.id} speaking: three parts, a cue card in Part 2, a sample answer and an examiner clip for every line`, () => {
    const speaking = t.modules.find((m) => m.id === "speaking");
    assert.ok(speaking && speaking.id === "speaking", "has a Speaking module");
    assert.deepEqual(speaking.parts.map((p) => p.title), ["Part 1", "Part 2", "Part 3"]);
    const [p1, p2, p3] = speaking.parts;
    assert.ok(p1.prompts.length >= 5, "Part 1 has several questions");
    assert.ok(p2.cueCard && p2.cueCard.points.length === 4 && p2.cueCard.prepSeconds === 60, "Part 2 cue card with four points and one minute to prepare");
    assert.equal(p2.prompts[0].seconds, 120, "the long turn lasts up to two minutes");
    assert.ok(p3.prompts.length >= 3, "Part 3 has a discussion");
    const manifest = JSON.parse(readFileSync(join(ROOT, "content/ielts-tests/audio-manifest.json"), "utf8"));
    const clips = [speaking.outroAudio, ...speaking.parts.flatMap((p) => [p.introAudio, ...p.prompts.map((q) => q.audio)])];
    assert.equal(new Set(clips).size, clips.length, "clip paths are unique");
    for (const clip of clips) assert.ok(manifest[clip] && existsSync(join(ROOT, "public", clip)), `${clip} is built`);
    for (const q of speaking.parts.flatMap((p) => p.prompts)) assert.ok(q.sample.split(/\s+/).length >= 20, `sample answer for "${q.text}"`);
  });
}

test("speaking band: mean of four criteria, rounded down to a half band", () => {
  assert.equal(speakingBand({ fluency: 7, lexical: 6, grammar: 6, pronunciation: 7 }), 6.5);
  assert.equal(speakingBand({ fluency: 7, lexical: 7, grammar: 6, pronunciation: 7 }), 6.5); // 6.75 → 6.5
  assert.equal(speakingBand({ fluency: 6, lexical: 6, grammar: 6, pronunciation: 7 }), 6); // 6.25 → 6
  assert.equal(speakingBand({ fluency: 9, lexical: 9, grammar: 9, pronunciation: 9 }), 9);
  assert.ok(isBand(6.5) && isBand(0) && isBand(9));
  assert.ok(!isBand(6.3) && !isBand(9.5) && !isBand(-1) && !isBand(Number.NaN));
  assert.equal(baseAudioType("audio/webm;codecs=opus"), "audio/webm");
});
