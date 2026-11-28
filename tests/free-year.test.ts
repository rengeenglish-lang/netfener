import { after, test } from "node:test";
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { db } from "../server/db";
import { grantFreeYear, getFreeYearStatus } from "../server/services/free-year.service";
import { availablePerkForCourse, getPlanAccess } from "../server/services/plans.service";
import { decodeFreeYearNotice, encodeFreeYearNotice, freeYearMonth, nextFreeYearOpening, readFreeYearCookie } from "../lib/free-year";

const target = new URL(process.env.DATABASE_URL!);
if (!["localhost", "127.0.0.1"].includes(target.hostname) || !target.pathname.endsWith("_test")) throw new Error("Requires an isolated localhost *_test database");
const users: string[] = [];
after(async () => {
  await db.user.deleteMany({ where: { id: { in: users } } });
  await db.$disconnect();
});
async function account(role: "STUDENT" | "TEACHER" = "STUDENT") {
  const user = await db.user.create({ data: { name: "Kontenjan Testi", email: `free-year-${randomUUID()}@example.test`, role } });
  users.push(user.id);
  return user;
}
/** A month of its own for each test, far from anything real. */
const monthAt = (year: number) => new Date(Date.UTC(year, 2, 10, 12));
const clear = (now: Date) => db.freeYearSpot.deleteMany({ where: { month: freeYearMonth(now) } });

test("months and the next opening follow Istanbul time", () => {
  assert.equal(freeYearMonth(new Date("2026-11-30T20:59:59Z")), "2026-11");
  assert.equal(freeYearMonth(new Date("2026-11-30T21:00:00Z")), "2026-12");
  assert.equal(nextFreeYearOpening(new Date("2026-12-31T20:00:00Z")).toISOString(), "2026-12-31T21:00:00.000Z");
});

test("the popup cookie round-trips and rejects anything else", () => {
  const notice = { position: 7, expiresAt: new Date("2027-11-28T10:00:00Z") };
  const value = encodeFreeYearNotice(notice);
  assert.deepEqual(decodeFreeYearNotice(readFreeYearCookie(`a=1; nf_free_year=${value}; b=2`)), notice);
  for (const bad of [null, "", "7", "0_1827396000000", "101_1827396000000", "<b>_1827396000000"]) assert.equal(decodeFreeYearNotice(bad), null);
});

test("a new student gets Başlangıç for a year, without live or group lesson perks", async () => {
  const now = new Date();
  const user = await account();
  const notice = await grantFreeYear(user.id, now);
  assert.ok(notice, "this month must still have a free spot in the test database");
  assert.equal(notice.expiresAt.getUTCFullYear(), now.getUTCFullYear() + 1);
  const access = await getPlanAccess(user);
  assert.equal(access.plan?.tier, "BASLANGIC");
  assert.equal(access.can("MOCK_EXAMS"), true);
  assert.equal(access.can("KONU_ANLATIMI"), true);
  assert.equal(access.can("LIVE_LESSON_PERKS"), false);
  assert.equal(access.can("UNLIMITED_MOCK_EXAMS"), false);
  assert.equal(await availablePerkForCourse(user.id, "any-course"), null);
  assert.equal(await db.enrollment.count({ where: { userId: user.id } }), 0);
  assert.equal(await db.accessGrant.count({ where: { userId: user.id } }), 0);
});

test("repeating a grant keeps the same number and one plan; staff get nothing", async () => {
  const now = monthAt(2090);
  await clear(now);
  const user = await account();
  const [first, second] = await Promise.all([grantFreeYear(user.id, now), grantFreeYear(user.id, now)]);
  assert.deepEqual(first, second);
  assert.equal(first?.position, 1);
  assert.equal(await db.planSubscription.count({ where: { userId: user.id } }), 1);
  assert.equal(await grantFreeYear((await account("TEACHER")).id, now), null);
  assert.equal((await getFreeYearStatus(now)).remaining, 99);
});

test("simultaneous sign-ups are numbered 1 to 100 and the rest get no plan; the next month starts again", async () => {
  const now = monthAt(2091);
  await clear(now);
  const ids: string[] = [];
  for (let i = 0; i < 104; i++) ids.push((await account()).id);
  const results: Awaited<ReturnType<typeof grantFreeYear>>[] = [];
  for (let i = 0; i < ids.length; i += 8) results.push(...(await Promise.all(ids.slice(i, i + 8).map((id) => grantFreeYear(id, now)))));
  const positions = results.flatMap((r) => (r ? [r.position] : [])).sort((a, b) => a - b);
  assert.deepEqual(positions, Array.from({ length: 100 }, (_, i) => i + 1));
  assert.equal(await db.planSubscription.count({ where: { userId: { in: ids } } }), 100);
  const full = await getFreeYearStatus(now);
  assert.equal(full.remaining, 0);
  assert.equal(full.taken, 100);

  const nextMonth = new Date(Date.UTC(2091, 3, 10, 12));
  await clear(nextMonth);
  const unlucky = ids[results.findIndex((r) => r === null)];
  assert.equal((await grantFreeYear(unlucky, nextMonth))?.position, 1);
});
