import type { Metadata } from "next";
import { getAuthContext } from "@/server/auth/context";
import { getActiveGoal } from "@/server/services/diagnostic-goals.service";
import { examFamilyForCode } from "@/lib/diagnostics/exam-family";
import { SectionHub } from "@/components/dashboard/SectionHub";

export const metadata: Metadata = { title: "Sözlük ve araçlar" };

export default async function Page() {
  const user = await getAuthContext();
  if (!user) return null;
  const goal = await getActiveGoal(user.id);
  return <SectionHub id="araclar" examFamily={goal ? examFamilyForCode(goal.examType.code) : null} />;
}
