import { test } from "node:test";
import assert from "node:assert/strict";
import { buildYdsGrammarTopics, buildYdsVocabularyTopics, YDS_TOPIC_ORDER, YDS_TOPIC_RENAMES } from "@/lib/yds-curriculum";
import { buildSkills } from "@/lib/exam-subsite";
import { parseExampleBlocks } from "@/components/topics/parseExampleBlock";
import { parseGlossaryEntries } from "@/components/topics/parseGlossaryEntries";
import { PAST_EXAM_WORDS } from "@/content/yds-vocabulary/past-exam-words";

const vocab = buildYdsVocabularyTopics();
const grammar = buildYdsGrammarTopics();
const asTopic = (slug: string, name: string) => ({ id: slug, slug, name, category: null });

test("every past-exam word becomes exactly one glossary entry", () => {
  const past = vocab.find((t) => t.slug === "kelime-cikmis-kelimeler")!;
  const entries = past.lessons.filter((l) => /Sözlüğü/.test(l.title)).flatMap((l) => parseGlossaryEntries(l.contentBody));
  assert.equal(entries.length, PAST_EXAM_WORDS.length);
  assert.ok(entries.every((e) => / – \S/.test(e.split("\n")[0])));
});

test("vocabulary topics land on the Kelime card, grammar topics on Dil bilgisi", () => {
  const skills = buildSkills([...vocab.map((t) => asTopic(t.slug, t.name)), ...grammar.map((t) => asTopic(t.slug, t.name)), ...Object.entries(YDS_TOPIC_RENAMES).map(([s, n]) => asTopic(s, n))]);
  assert.deepEqual(skills.map((s) => s.key), ["kelime", "dil-bilgisi"]);
  assert.equal(skills[0].topicIds.length, vocab.length);
  assert.equal(skills[1].topicIds.length, grammar.length + 2);
});

test("every grammar example parses as a four-option question with a verdict", () => {
  for (const t of grammar) {
    const lesson = t.lessons.find((l) => /Örnek Sorular/.test(l.title))!;
    const parsed = parseExampleBlocks(lesson.contentBody);
    assert.ok(parsed.length >= 4, t.slug);
    for (const p of parsed) {
      assert.equal(p.kind, "mcq", `${t.slug}: ${JSON.stringify(p).slice(0, 120)}`);
      if (p.kind === "mcq") assert.equal(p.options.length, 4, t.slug);
    }
  }
});

test("lesson titles match the layouts the lesson page renders", () => {
  for (const t of [...vocab, ...grammar]) {
    assert.match(t.lessons[0].title, /Konuya Giriş$/);
    for (const l of t.lessons.slice(1)) assert.match(l.title, /Sözlüğü|Referansı|Örnek Sorular/, l.title);
    assert.ok(YDS_TOPIC_ORDER.includes(t.slug), `${t.slug} has no place in the topic order`);
  }
});
