import "server-only";
import { getAuthContext } from "@/server/auth/context";
import { getPlanAccess } from "@/server/services/plans.service";
import { practiceTestGate } from "@/lib/practice-test-access";

/** The signed-in visitor (if any) and whether their plan opens the premium IELTS/TOEFL tests. */
export async function practiceTestAccess() {
  const user = await getAuthContext();
  const access = await getPlanAccess(user);
  const hasPlan = access.can("MOCK_EXAMS");
  return { user, hasPlan, gate: (no: number) => practiceTestGate(no, Boolean(user), hasPlan) };
}
