import { test, after } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { db } from "../server/db";
import { buildSkills, sectionForPath, subsiteHref } from "../lib/exam-subsite";
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

const t = (id: string, name: string, category: string | null = null) => ({ id, name, category, slug: id });

test("YDS topics become their real question-type sections, in exam order", () => {
  const yds = [
    t("a", "Kelime – Phrasal Verb Soruları"), t("b", "Tense (Zaman) Soruları"), t("c", "Preposition (Edat) Soruları"),
    t("d", "Cloze Test Soruları"), t("e", "Cümle Tamamlama Soruları"), t("f", "Çeviri Soruları"), t("g", "Paragraf Soruları"),
    t("h", "Diyalog Tamamlama Soruları"), t("i", "Yakın Anlamlı Cümle Soruları"), t("j", "Paragraf Tamamlama Soruları"),
    t("k", "Anlatım Bütünlüğünü Bozan Cümle Soruları"), t("l", "YDS Stratejileri"),
  ];
  const skills = buildSkills(yds);
  assert.deepEqual(skills.map((s) => s.key), ["kelime", "dil-bilgisi", "cloze-test", "cumle-tamamlama", "ceviri", "paragraf", "paragraf-tamamlama", "diyalog", "yakin-anlam", "anlam-butunlugu", "strateji"]);
  assert.deepEqual(skills.find((s) => s.key === "dil-bilgisi")!.topicIds, ["b", "c"]);
  assert.deepEqual(skills.find((s) => s.key === "paragraf")!.topicIds, ["g"]);
  assert.deepEqual(skills.find((s) => s.key === "paragraf-tamamlama")!.topicIds, ["j"]);
  assert.equal(skills.flatMap((s) => s.topicIds).length, yds.length); // every topic placed exactly once
});

test("YÖKDİL grammar subtopics group under Dil bilgisi; unknown topics keep their own card", () => {
  const yokdil = [
    t("a", "Kelime Bilgisi (Vocabulary)"), t("b", "Modality (Kiplik Fiiller)"), t("c", "Adjective Clauses (Sıfat Cümlecikleri)"),
    t("d", "Conjunctions & Adverbial Clauses & Inversions (Bağlaçlar, Zarf Cümlecikleri ve Devrik Yapılar)"), t("e", "Quantifiers (Miktar Belirteçleri)"),
    t("f", "Cloze Test (Boşluk Doldurma)"), t("g", "Cümle Tamamlama (Sentence Completion)"), t("h", "Çeviri (İngilizce↔Türkçe Translation)"),
    t("i", "Paragraf Okuma Anlama (Reading Comprehension)"), t("j", "Anlam Bütünlüğünü Bozan Cümle"), t("k", "YÖKDİL Sağlık Stratejileri"), t("z", "Tıbbi Terminoloji Atölyesi"),
  ];
  const skills = buildSkills(yokdil);
  assert.deepEqual(skills.find((s) => s.key === "dil-bilgisi")!.topicIds, ["b", "c", "d", "e"]);
  assert.deepEqual(skills.find((s) => s.key === "paragraf")!.topicIds, ["i"]);
  assert.equal(skills.at(-1)!.title, "Tıbbi Terminoloji Atölyesi");
  assert.equal(skills.flatMap((s) => s.topicIds).length, yokdil.length);
});

test("exams with topic categories keep category skills (IELTS, TOEFL, PTE)", () => {
  const skills = buildSkills([t("a", "Matching", "READING"), t("b", "Task 1", "WRITING"), t("c", "Gap fill", "READING"), t("d", "Part 2", "SPEAKING")]);
  assert.deepEqual(skills.map((s) => [s.key, s.title, s.topicIds.length]), [["reading", "Reading", 2], ["writing", "Writing", 1], ["speaking", "Speaking", 1]]);
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

test("uppercase Turkish names still match their question type", () => {
  assert.equal(buildSkills([t("a", "İNGİLİZCE-TÜRKÇE ÇEVİRİ")])[0].key, "ceviri");
  assert.equal(buildSkills([t("a", "KELİME BİLGİSİ")])[0].key, "kelime");
});
