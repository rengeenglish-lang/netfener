import { test } from "node:test";
import assert from "node:assert/strict";
import { CAMBRIDGE_TESTS, CAMBRIDGE_SLOTS, LEVELS, gapNumbers, normalise, scaleEstimate, shields, taskItems } from "@/content/cambridge-tests/registry";
import type { Task } from "@/content/cambridge-tests/types";

const PARTS: Record<string, Record<string, number>> = {
  starters: { "reading-writing": 5 },
  movers: { "reading-writing": 6 },
  flyers: { "reading-writing": 7 },
  key: { "reading-writing": 7 },
  preliminary: { reading: 6, writing: 3 },
};

const words = (s: string) => s.trim().split(/\s+/).length;
const distinct = (xs: string[]) => new Set(xs.map(normalise)).size === xs.length;

test("library ids are unique and test numbers run 1..n within each level", () => {
  assert.equal(new Set(CAMBRIDGE_TESTS.map((t) => t.id)).size, CAMBRIDGE_TESTS.length);
  for (const lv of LEVELS) {
    const nos = CAMBRIDGE_TESTS.filter((t) => t.level === lv.id).map((t) => t.no).sort((a, b) => a - b);
    assert.ok(nos.length >= 1 && nos.length <= CAMBRIDGE_SLOTS, lv.id);
    nos.forEach((n, i) => assert.equal(n, i + 1, `${lv.id} test numbers`));
  }
});

function checkTask(t: Task, tag: string) {
  const gapsOk = (text: string[], n: number) => assert.deepEqual(gapNumbers(text), Array.from({ length: n }, (_, i) => i + 1), `${tag}: gaps {1}..{${n}}`);
  const optsOk = (opts: string[], answer: number, what: string) => {
    assert.ok(opts.length >= 3 && opts.length <= 4, `${tag} ${what}: 3–4 options`);
    assert.ok(distinct(opts), `${tag} ${what}: duplicate options`);
    assert.ok(answer >= 0 && answer < opts.length, `${tag} ${what}: answer index`);
  };
  switch (t.kind) {
    case "picture-yesno":
    case "scene-yesno":
      assert.ok(t.items.length >= 5, tag);
      assert.ok(t.items.some((i) => i.answer) && t.items.some((i) => !i.answer), `${tag}: mix of yes and no`);
      break;
    case "spell":
      for (const i of t.items) assert.match(i.answer, /^[a-z]+$/, `${tag}: spelling answers are lower-case words`);
      break;
    case "word-bank":
      gapsOk(t.text, t.answers.length);
      assert.ok(distinct(t.answers), `${tag}: answers distinct`);
      for (const a of t.answers) assert.ok(t.bank.some((b) => b.word === a), `${tag}: '${a}' in bank`);
      assert.ok(t.bank.length >= t.answers.length + 2, `${tag}: extra words in the bank`);
      if (t.titleQuestion) optsOk(t.titleQuestion.options, t.titleQuestion.answer, "title");
      break;
    case "short-answer":
      for (const i of t.items) assert.ok(i.answers.length && i.answers.every((a) => a === normalise(a)), `${tag}: answers present and normalised`);
      break;
    case "definitions":
      assert.ok(distinct(t.items.map((i) => i.answer)), `${tag}: answers distinct`);
      for (const i of t.items) assert.ok(t.bank.some((b) => b.word === i.answer), `${tag}: '${i.answer}' in bank`);
      assert.ok(t.bank.length > t.items.length, `${tag}: extra words`);
      break;
    case "dialogue":
    case "mcq":
      t.items.forEach((i, k) => optsOk(i.options, i.answer, `#${k + 1}`));
      break;
    case "cloze-mc":
      gapsOk(t.text, t.gaps.length);
      t.gaps.forEach((g, k) => optsOk(g.options, g.answer, `gap ${k + 1}`));
      break;
    case "open-cloze":
      gapsOk(t.text, t.answers.length);
      for (const acc of t.answers) assert.ok(acc.length && acc.every((a) => a === normalise(a) && !a.includes(" ")), `${tag}: one-word answers`);
      break;
    case "matching":
      for (const i of t.items) assert.ok(i.answer >= 0 && i.answer < t.options.length, `${tag}: answer index`);
      break;
    case "gapped-text":
      gapsOk(t.text, t.answers.length);
      assert.equal(new Set(t.answers).size, t.answers.length, `${tag}: answers distinct`);
      assert.ok(t.sentences.length >= t.answers.length + 2, `${tag}: extra sentences`);
      break;
    case "writing":
      assert.ok(words(t.sample) >= t.minWords * 0.9, `${tag}: sample answer long enough (${words(t.sample)} words)`);
      assert.ok(t.checklist.length >= 2, `${tag}: checklist`);
      break;
  }
}

for (const t of CAMBRIDGE_TESTS) {
  test(`${t.id}: papers follow the real exam layout and every task is well formed`, () => {
    assert.deepEqual(Object.fromEntries(t.papers.map((p) => [p.id, p.parts.length])), PARTS[t.level]);
    for (const paper of t.papers) {
      assert.ok(paper.minutes > 0);
      paper.parts.forEach((part, k) => checkTask(part.task, `${t.id} ${paper.id} part ${k + 1}`));
    }
    const scored = t.papers.reduce((n, p) => n + p.parts.reduce((m, part) => m + taskItems(part.task), 0), 0);
    assert.ok(scored >= 20, `${t.id}: at least 20 scored items (${scored})`);
  });
}

test("results: shields for young learners, scale estimates for Key and Preliminary", () => {
  assert.equal(shields(1), 5);
  assert.equal(shields(0.8), 4);
  assert.equal(shields(0.1), 1);
  assert.equal(scaleEstimate("key", 1).score, 150);
  assert.equal(scaleEstimate("key", 0.8).grade, "Grade A (B1)");
  assert.equal(scaleEstimate("preliminary", 0.5).grade, "Grade C (B1)");
  assert.equal(normalise("  His T-Shirt. "), "his t-shirt");
});
