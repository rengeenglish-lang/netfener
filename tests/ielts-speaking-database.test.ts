import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { db } from "../server/db";
import {
  createSpeakingUploads,
  deleteMySpeaking,
  recordingsOf,
  reviewSpeaking,
  speakingRecordingUrl,
  submitSpeaking,
} from "../server/services/ielts-speaking.service";
import { findIeltsTest } from "../content/ielts-tests/registry";

const target = new URL(process.env.DATABASE_URL!);
if (!["localhost", "127.0.0.1"].includes(target.hostname) || !target.pathname.endsWith("_test")) throw new Error("Requires an isolated localhost *_test database");

const TEST_ID = "academic-1";
const speaking = findIeltsTest(TEST_ID)!.modules.find((m) => m.id === "speaking");
if (!speaking || speaking.id !== "speaking") throw new Error("academic-1 has no Speaking module");
const PROMPTS = speaking.parts.reduce((n, p) => n + p.prompts.length, 0);

const users: string[] = [];
const originalFetch = globalThis.fetch;
/** R2 is replaced by a recorder: HEAD answers with a small WebM file, DELETE is logged. */
const r2Calls: { method: string; url: string }[] = [];

before(() => {
  process.env.R2_ACCOUNT_ID = "isolated-test";
  process.env.R2_ACCESS_KEY_ID = "test";
  process.env.R2_SECRET_ACCESS_KEY = "test";
  process.env.R2_REVIEWS_BUCKET = "reviews-test";
  globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
    const request = input instanceof Request ? input : new Request(input, init);
    r2Calls.push({ method: request.method, url: request.url });
    if (request.method === "HEAD") return new Response(null, { status: 200, headers: { "content-length": "48000", "content-type": "audio/webm" } });
    return new Response(null, { status: 204 });
  }) as typeof fetch;
});

after(async () => {
  globalThis.fetch = originalFetch;
  await db.user.deleteMany({ where: { id: { in: users } } });
  await db.$disconnect();
});

async function account(role: "STUDENT" | "TEACHER" = "STUDENT") {
  const user = await db.user.create({ data: { name: role === "TEACHER" ? "Öğretmen Testi" : "Speaking Testi", email: `speaking-${randomUUID()}@example.test`, role } });
  users.push(user.id);
  return user;
}

const files = (n = PROMPTS) => Array.from({ length: n }, () => ({ contentType: "audio/webm;codecs=opus", size: 48_000 }));

async function sendMock(user: { id: string; name: string }) {
  const uploads = await createSpeakingUploads(user.id, TEST_ID, files());
  return submitSpeaking(user, TEST_ID, { consent: true, recordings: uploads.map((u, i) => ({ key: u.key, seconds: 20 + i })) });
}

test("uploads are signed per recording, only for the learner's own folder and supported audio", async () => {
  const student = await account();
  await assert.rejects(createSpeakingUploads(student.id, TEST_ID, files(PROMPTS - 1)), /eşleşmiyor/);
  await assert.rejects(createSpeakingUploads(student.id, "no-such-test", files()), /bulunamadı/);
  await assert.rejects(createSpeakingUploads(student.id, TEST_ID, [{ contentType: "video/mp4", size: 1000 }, ...files(PROMPTS - 1)]), /desteklenmiyor/);
  await assert.rejects(createSpeakingUploads(student.id, TEST_ID, [{ contentType: "audio/webm", size: 50 * 1024 * 1024 }, ...files(PROMPTS - 1)]), /büyük/);

  const uploads = await createSpeakingUploads(student.id, TEST_ID, files());
  assert.equal(uploads.length, PROMPTS);
  for (const u of uploads) {
    assert.ok(u.key.startsWith(`ielts-speaking/${student.id}/`));
    assert.equal(u.contentType, "audio/webm", "codec parameters are dropped from the signed type");
    assert.match(u.url, /X-Amz-Signature=/);
  }
});

test("a submission needs consent, the learner's own files, and notifies teachers", async () => {
  const student = await account();
  const other = await account();
  const teacher = await account("TEACHER");
  const uploads = await createSpeakingUploads(student.id, TEST_ID, files());
  const recordings = uploads.map((u) => ({ key: u.key, seconds: 25 }));

  await assert.rejects(submitSpeaking(student, TEST_ID, { consent: false, recordings }), /onaylamalısın/);
  await assert.rejects(submitSpeaking(other, TEST_ID, { consent: true, recordings }), /bulunamadı/, "another learner's files are refused");

  const submission = await submitSpeaking(student, TEST_ID, { consent: true, recordings });
  const saved = recordingsOf(submission.recordings);
  assert.equal(saved.length, PROMPTS);
  assert.deepEqual([saved[0].part, saved[0].prompt], [1, 1]);
  assert.equal(saved[0].question, speaking.parts[0].prompts[0].text);
  assert.equal(saved.at(-1)!.part, 3);
  assert.equal(submission.status, "PENDING");

  const note = await db.notification.findFirst({ where: { userId: teacher.id, href: `/admin/ielts-speaking/${submission.id}` } });
  assert.ok(note, "teachers are notified");
});

test("a learner can have at most two submissions waiting", async () => {
  const student = await account();
  await sendMock(student);
  await sendMock(student);
  await assert.rejects(createSpeakingUploads(student.id, TEST_ID, files()), /bekleyen 2/);
});

test("a teacher's review stores four bands, the rounded-down overall band and feedback, and tells the learner", async () => {
  const student = await account();
  const teacher = await account("TEACHER");
  const submission = await sendMock(student);
  const feedback = "Akıcılığın iyi; Part 3'te fikirlerini daha çok örnekle desteklemelisin.";

  await assert.rejects(reviewSpeaking(submission.id, teacher.id, { scores: { fluency: 7, lexical: 6.3, grammar: 6, pronunciation: 7 }, feedback }), /Lexical Resource/);
  await assert.rejects(reviewSpeaking(submission.id, teacher.id, { scores: { fluency: 7, lexical: 7, grammar: 6, pronunciation: 7 }, feedback: "İyi." }), /geri bildirim/);

  const overall = await reviewSpeaking(submission.id, teacher.id, { scores: { fluency: "7", lexical: "7", grammar: "6", pronunciation: "7" }, feedback });
  assert.equal(overall, 6.5, "6.75 is rounded down to 6.5");
  const row = await db.ieltsSpeakingSubmission.findUniqueOrThrow({ where: { id: submission.id } });
  assert.equal(row.status, "REVIEWED");
  assert.deepEqual([row.fluency, row.lexical, row.grammar, row.pronunciation, row.overall], [7, 7, 6, 7, 6.5]);
  assert.equal(row.reviewedById, teacher.id);
  assert.ok(row.reviewedAt);
  const note = await db.notification.findFirst({ where: { userId: student.id, href: `/dashboard/ielts-speaking/${submission.id}` } });
  assert.ok(note, "the learner is notified");
});

test("recordings play only for their learner and teachers; deleting removes the files and the row", async () => {
  const student = await account();
  const other = await account();
  const teacher = await account("TEACHER");
  const submission = await sendMock(student);

  assert.match((await speakingRecordingUrl(submission.id, 0, { id: student.id, role: "STUDENT" }))!, /X-Amz-Signature=/);
  assert.match((await speakingRecordingUrl(submission.id, 0, { id: teacher.id, role: "TEACHER" }))!, /X-Amz-Signature=/);
  assert.equal(await speakingRecordingUrl(submission.id, 0, { id: other.id, role: "STUDENT" }), null);
  assert.equal(await speakingRecordingUrl(submission.id, 99, { id: student.id, role: "STUDENT" }), null);

  await assert.rejects(deleteMySpeaking(other.id, submission.id), /bulunamadı/);
  r2Calls.length = 0;
  await deleteMySpeaking(student.id, submission.id);
  assert.equal(r2Calls.filter((c) => c.method === "DELETE").length, PROMPTS);
  assert.equal(await db.ieltsSpeakingSubmission.findUnique({ where: { id: submission.id } }), null);
});
