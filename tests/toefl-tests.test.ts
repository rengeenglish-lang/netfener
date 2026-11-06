import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { TOEFL_TESTS, practiceBand, stageItems, toeflSpeakingModule, wordGaps } from "../content/toefl-tests/registry";
import type { AdaptiveSection, Choice, ListeningTask, ReadingTask } from "../content/toefl-tests/types";

const ROOT = join(import.meta.dirname, "..");
const manifest = JSON.parse(readFileSync(join(ROOT, "content/ielts-tests/audio-manifest.json"), "utf8"));
const built = (audio: string | undefined) => Boolean(audio && manifest[audio] && existsSync(join(ROOT, "public", audio)));
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

function checkChoice(c: Choice, where: string) {
  assert.equal(c.options.length, 4, `${where}: four options`);
  assert.ok(Number.isInteger(c.answer) && c.answer >= 0 && c.answer < 4, `${where}: answer in range`);
  assert.equal(new Set(c.options).size, 4, `${where}: options are different`);
}

test("the library has unique ids and numbers", () => {
  assert.equal(new Set(TOEFL_TESTS.map((t) => t.id)).size, TOEFL_TESTS.length);
  assert.deepEqual(TOEFL_TESTS.map((t) => t.no), TOEFL_TESTS.map((_, i) => i + 1));
});

for (const t of TOEFL_TESTS) {
  test(`${t.id} reading: Stage 1 has 20 items, both Stage 2 routes have 18, every gap and key is valid`, () => {
    const r: AdaptiveSection<ReadingTask> = t.reading;
    assert.equal(stageItems(r.stage1), 20);
    assert.equal(stageItems(r.easier), 18);
    assert.equal(stageItems(r.harder), 18);
    for (const [name, stage] of [["s1", r.stage1], ["easier", r.easier], ["harder", r.harder]] as const) {
      for (const task of stage.tasks) {
        if (task.kind === "complete-words") {
          const gaps = wordGaps(task.text);
          assert.equal(gaps.length, 10, `${name} ${task.title}: ten gaps`);
          for (const g of gaps) assert.ok(g.shown.length >= 1 && g.missing.length >= 1, `${name} ${task.title}: ${g.shown}|${g.missing}`);
          assert.equal((task.text.match(/\{\{/g) ?? []).length, 10, `${name} ${task.title}: no malformed gaps`);
        } else {
          task.questions.forEach((q, i) => checkChoice(q, `${name} ${task.title} Q${i + 1}`));
          if (task.kind === "academic") assert.equal(task.questions.length, 5, `${name} ${task.title}: five questions`);
          else assert.ok([2, 3].includes(task.questions.length), `${name} ${task.title}: 2 or 3 questions`);
        }
      }
    }
  });

  test(`${t.id} listening: 16 items in Stage 1, 12 on either route, every recording built`, () => {
    const l: AdaptiveSection<ListeningTask> = t.listening;
    assert.equal(stageItems(l.stage1), 16);
    assert.equal(stageItems(l.easier), 12);
    assert.equal(stageItems(l.harder), 12);
    for (const stage of [l.stage1, l.easier, l.harder]) {
      for (const task of stage.tasks) {
        assert.ok(built(task.audio), `${task.audio} is built`);
        if (task.kind === "choose-response") checkChoice({ text: task.line, options: task.options, answer: task.answer }, `“${task.line}”`);
        else {
          task.questions.forEach((q, i) => checkChoice(q, `${task.title} Q${i + 1}`));
          for (const line of task.script) if (line.who !== "N") assert.ok(task.cast[line.who], `${task.title}: voice for ${line.who}`);
        }
      }
    }
    assert.ok(l.stage1.minutes + l.harder.minutes <= 30, "listening fits the section time");
  });

  test(`${t.id} writing: ten Build a Sentence items, an email with three tasks and a discussion`, () => {
    const w = t.writing;
    assert.equal(w.build.length, 10);
    for (const b of w.build) assert.ok(b.chunks.length >= 4 && new Set(b.chunks).size === b.chunks.length, `${b.prompt}: distinct chunks`);
    assert.equal(w.email.tasks.length, 3);
    assert.ok(words(w.email.sample) >= 80, "email sample length");
    assert.equal(w.discussion.students.length, 2);
    assert.ok(words(w.discussion.sample) >= 100, "discussion sample has at least 100 words");
    assert.equal(w.buildMinutes + w.emailMinutes + w.discussionMinutes, 23);
  });

  test(`${t.id} speaking: seven sentences to repeat, four interview questions, every clip built`, () => {
    assert.equal(t.speaking.repeat.sentences.length, 7);
    assert.equal(t.speaking.interview.questions.length, 4);
    for (const q of t.speaking.interview.questions) assert.ok(words(q.sample) >= 50, `sample for "${q.text}"`);
    const lengths = t.speaking.repeat.sentences.map(words);
    assert.ok(lengths[6] > lengths[0], "sentences get longer");
    const m = toeflSpeakingModule(t);
    const clips = [m.outroAudio, ...m.parts.flatMap((p) => [p.introAudio, ...p.prompts.map((q) => q.audio)])];
    for (const c of clips) assert.ok(built(c), `${c} is built`);
  });
}

test("practice band: half bands, and the easier route tops out at 4.5", () => {
  assert.equal(practiceBand(1, "harder"), 6);
  assert.equal(practiceBand(0.9, "harder"), 5.5);
  assert.equal(practiceBand(1, "easier"), 4.5);
  assert.equal(practiceBand(0.55, "easier"), 3.5);
  assert.equal(practiceBand(0, "harder"), 1);
});
