import { test } from "node:test";
import assert from "node:assert/strict";
import { isFreePracticeTest, practiceTestGate } from "@/lib/practice-test-access";

test("only Practice Test 1 is a free preview", () => {
  assert.ok(isFreePracticeTest(1));
  for (const no of [2, 3, 6, 10]) assert.ok(!isFreePracticeTest(no));
});

test("Test 1 is open to everyone; later tests need sign-in, then a plan", () => {
  assert.equal(practiceTestGate(1, false, false), "open");
  assert.equal(practiceTestGate(2, false, false), "sign-in");
  assert.equal(practiceTestGate(2, true, false), "plan");
  assert.equal(practiceTestGate(2, true, true), "open");
  assert.equal(practiceTestGate(10, true, true), "open");
});
