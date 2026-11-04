import { test, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { db } from "../server/db";
import { sectionForPath, skillCards, subsiteHref, topicMatchesSkill } from "../lib/exam-subsite";
import { reactivateGoalForExam } from "../server/services/diagnostic-goals.service";
import { studentLandingPath } from "../server/services/exam-subsite.service";

const url = new URL(process.env.DATABASE_URL!);
if (!["localhost", "127.0.0.1"].includes(url.hostname) || !url.pathname.endsWith("_test"))
  throw new Error("Requires isolated local *_test database");
after(() => db.$disconnect());

test("paths map to the right subsite section, and only exam pages get one", () => {
  assert.equal(subsiteHref("ielts"), "/exams/ielts");
  assert.equal(subsiteHref("ielts", "denemeler"), "/exams/ielts/denemeler");
  assert.equal(sectionForPath("/exams/ielts", "ielts"), "home");
  assert.equal(sectionForPath("/exams/ielts/konular", "ielts"), "konular");
  assert.equal(sectionForPath("/exams/ielts/pratik/x", "ielts"), "pratik");
  assert.equal(sectionForPath("/exams/ieltsx/konular", "ielts"), null);
  assert.equal(sectionForPath("/dashboard/practice", "yds"), "pratik");
  assert.equal(sectionForPath("/dashboard/yds-denemeleri/3", "yds"), "denemeler");
  assert.equal(sectionForPath("/dashboard/progress", "yds"), "ilerleme");
  assert.equal(sectionForPath("/konu-anlatim", "yds"), "konular");
  assert.equal(sectionForPath("/dashboard/orders", "yds"), null);
  assert.equal(sectionForPath("/dashboard", "yds"), null);
});

test("skill cards match topics by name, category or slug, per exam family", () => {
  const [reading] = skillCards("ACADEMIC_SKILLS");
  assert.equal(topicMatchesSkill({ name: "Matching Headings", category: "READING", skillsTested: null, slug: "x" }, reading), true);
  assert.equal(topicMatchesSkill({ name: "Task 2", category: "WRITING", skillsTested: null, slug: "y" }, reading), false);
  assert.deepEqual(skillCards("TRANSLATION_GRAMMAR").map((s) => s.key), ["kelime", "gramer", "ceviri", "paragraf"]);
});

test("switching exam reuses the student's own earlier goal and never invents one", async () => {
  const stamp = randomUUID();
  const user = await db.user.create({ data: { name: "Switch student", email: `switch-${stamp}@example.test` } });
  const [a, b] = await db.examType.findMany({ where: { active: true }, orderBy: { displayOrder: "asc" }, take: 2 });
  assert.ok(a && b, "seeded exam types required");
  try {
    assert.equal(await studentLandingPath(user.id), "/dashboard"); // no goal yet
    assert.equal(await reactivateGoalForExam(user.id, a.id), false); // nothing to reuse
    assert.equal(await db.examGoal.count({ where: { userId: user.id } }), 0);
    const goalA = await db.examGoal.create({ data: { userId: user.id, examTypeId: a.id, targetScoreRaw: "7.0", isActive: false } });
    const goalB = await db.examGoal.create({ data: { userId: user.id, examTypeId: b.id, targetScoreRaw: "80", isActive: true } });
    assert.equal(await studentLandingPath(user.id), `/exams/${b.slug}`);
    assert.equal(await reactivateGoalForExam(user.id, a.id), true);
    const after = await db.examGoal.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" } });
    assert.deepEqual(after.map((g) => [g.id, g.isActive, g.targetScoreRaw]), [[goalA.id, true, "7.0"], [goalB.id, false, "80"]]);
    assert.equal(await db.examGoal.count({ where: { userId: user.id, isActive: true } }), 1);
    assert.equal(await studentLandingPath(user.id), `/exams/${a.slug}`);
    assert.equal(await reactivateGoalForExam(user.id, a.id), true); // already active: no change
    assert.equal(await db.examGoal.count({ where: { userId: user.id } }), 2);
  } finally {
    await db.examGoal.deleteMany({ where: { userId: user.id } });
    await db.user.deleteMany({ where: { id: user.id } });
  }
});

test("uppercase English and Turkish labels both match", () => {
  const [reading] = skillCards("ACADEMIC_SKILLS");
  const ceviri = skillCards("TRANSLATION_GRAMMAR")[2];
  assert.equal(topicMatchesSkill({ name: "X", category: "READING", skillsTested: null, slug: "a" }, reading), true);
  assert.equal(topicMatchesSkill({ name: "İngilizce-Türkçe ÇEVİRİ", category: null, skillsTested: null, slug: "b" }, ceviri), true);
});
