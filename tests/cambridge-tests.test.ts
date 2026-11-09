import { test } from "node:test";
import assert from "node:assert/strict";
import { CAMBRIDGE_TESTS, CAMBRIDGE_SLOTS, LEVELS, gapNumbers, normalise, scaleEstimate, shields, taskItems } from "@/content/cambridge-tests/registry";
import type { Task } from "@/content/cambridge-tests/types";

const PARTS: Record<string, Record<string, number>> = {
  starters: { "reading-writing": 5, listening: 4 },
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
  const tagsOf = (items: { tag?: string }[]) => items.flatMap((i) => (i.tag ? [i.tag] : []));
  switch (t.kind) {
    case "listen-lines": {
      const tags = tagsOf(t.scene.items);
      assert.equal(new Set(tags).size, tags.length, `${tag}: tags unique`);
      assert.ok(distinct(t.items.map((i) => i.answer)) && distinct(t.items.map((i) => i.name)), `${tag}: names and answers distinct`);
      for (const i of t.items) assert.ok(tags.includes(i.answer), `${tag}: ${i.name} → ${i.answer} is a tagged person`);
      assert.ok(tags.length >= t.items.length + 2, `${tag}: two extra people`);
      break;
    }
    case "listen-tick":
      t.items.forEach((i, k) => {
        assert.equal(i.pics.length, 3, `${tag} #${k + 1}: three pictures`);
        assert.ok(distinct(i.pics.map((pic) => pic.e)), `${tag} #${k + 1}: different pictures`);
        assert.ok(i.answer >= 0 && i.answer < 3, `${tag} #${k + 1}: answer index`);
      });
      assert.ok(new Set(t.items.map((i) => i.answer)).size >= 2, `${tag}: answers in different positions`);
      break;
    case "listen-colour": {
      const tags = tagsOf(t.scene.items);
      assert.equal(new Set(tags).size, tags.length, `${tag}: tags unique`);
      assert.ok(distinct(t.items.map((i) => i.answer)) && distinct(t.items.map((i) => i.colour)), `${tag}: objects and colours distinct`);
      for (const i of t.items) {
        assert.ok(tags.includes(i.answer), `${tag}: ${i.answer} is a tagged object`);
        assert.ok(t.colours.includes(i.colour), `${tag}: ${i.colour} is offered`);
      }
      assert.ok(tags.length > t.items.length, `${tag}: extra objects`);
      break;
    }
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

/** Official Cambridge English Reading & Writing layouts: [task kind, scored items, options per question]. */
type Spec = [Task["kind"], number, number?];
const FORMAT: Record<string, Record<string, Spec[]>> = {
  starters: {
    "reading-writing": [["picture-yesno", 5], ["scene-yesno", 5], ["spell", 5], ["word-bank", 5], ["short-answer", 5]],
    listening: [["listen-lines", 5], ["short-answer", 5], ["listen-tick", 5], ["listen-colour", 5]],
  },
  movers: { "reading-writing": [["definitions", 5], ["dialogue", 6, 3], ["word-bank", 6], ["cloze-mc", 5, 3], ["short-answer", 7], ["writing", 0]] },
  flyers: { "reading-writing": [["definitions", 10], ["dialogue", 5], ["word-bank", 6], ["cloze-mc", 10, 3], ["short-answer", 7], ["open-cloze", 5], ["writing", 0]] },
  key: { "reading-writing": [["mcq", 6, 3], ["matching", 7, 3], ["mcq", 5, 3], ["cloze-mc", 6, 3], ["open-cloze", 6], ["writing", 0], ["writing", 0]] },
  preliminary: {
    reading: [["mcq", 5, 3], ["matching", 5, 8], ["mcq", 5, 4], ["gapped-text", 5, 8], ["cloze-mc", 6, 4], ["open-cloze", 6]],
    writing: [["writing", 0], ["writing", 0], ["writing", 0]],
  },
};

function optionCounts(t: Task): number[] {
  switch (t.kind) {
    case "mcq":
    case "dialogue":
      return t.items.map((i) => i.options.length);
    case "cloze-mc":
      return t.gaps.map((g) => g.options.length);
    case "matching":
      return [t.options.length];
    case "gapped-text":
      return [t.sentences.length];
    default:
      return [];
  }
}

test("every test follows the official Cambridge part layout, question counts and option counts", () => {
  for (const ct of CAMBRIDGE_TESTS) {
    for (const paper of ct.papers) {
      const spec = FORMAT[ct.level][paper.id];
      assert.ok(spec, `${ct.id}/${paper.id}: no format`);
      paper.parts.forEach((part, i) => {
        const [kind, items, opts] = spec[i];
        const tag = `${ct.id}/${paper.id} ${part.title}`;
        assert.equal(part.task.kind, kind, `${tag}: kind`);
        assert.equal(taskItems(part.task), items, `${tag}: questions`);
        if (opts) for (const n of optionCounts(part.task)) assert.equal(n, opts, `${tag}: options`);
      });
    }
  }
});

const spoken = (part: { script?: { text: string }[] }) => normalise((part.script ?? []).map((l) => l.text).join(" ")).replace(/[^a-z0-9 ]/g, " ");

test("listening parts have audio, a voiced script, and every answer is actually said", () => {
  for (const ct of CAMBRIDGE_TESTS) {
    for (const paper of ct.papers.filter((p) => p.id === "listening")) {
      for (const part of paper.parts) {
        const tag = `${ct.id} listening ${part.title}`;
        assert.match(part.audio ?? "", new RegExp(`^/audio/cambridge/${ct.id}/part-\\d\\.mp3$`), `${tag}: audio path`);
        assert.ok(part.script?.length, `${tag}: script`);
        for (const l of part.script ?? []) assert.ok(l.who === "N" || part.cast?.[l.who], `${tag}: voice for ${l.who}`);
        const said = ` ${spoken(part)} `;
        const t = part.task;
        const has = (w: string) => said.includes(` ${normalise(w)} `);
        if (t.kind === "listen-lines") for (const i of t.items) assert.ok(has(i.name), `${tag}: '${i.name}' is said`);
        if (t.kind === "listen-colour") for (const i of t.items) assert.ok(has(i.colour), `${tag}: '${i.colour}' is said`);
        if (t.kind === "short-answer") for (const i of t.items) assert.ok(i.answers.some(has), `${tag}: an answer to '${i.question}' is said`);
      }
    }
  }
});
