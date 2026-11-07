/**
 * IELTS and TOEFL practice tests: Test 1 of each library shelf is a free preview; the rest need a
 * plan that includes Deneme Sınavları (the same plans that unlock YDS denemeleri 6+).
 */
export const FREE_PRACTICE_TEST_NO = 1;

export const isFreePracticeTest = (no: number) => no === FREE_PRACTICE_TEST_NO;

export const PRACTICE_PLANS_HREF = "/dashboard/mock-exam#planlar";

export type PracticeTestGate = "open" | "sign-in" | "plan";

/** What stands between a visitor and a test: nothing, signing in, or a plan. */
export function practiceTestGate(no: number, signedIn: boolean, hasPlan: boolean): PracticeTestGate {
  if (isFreePracticeTest(no) || hasPlan) return "open";
  return signedIn ? "plan" : "sign-in";
}
