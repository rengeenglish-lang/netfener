import { DashboardHelp } from "@/components/dashboard/DashboardHelp";
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/social";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { getAuthContext } from "@/server/auth/context";
import { DashboardShell } from "@/components/admin/AdminShell";
import { getActiveGoal } from "@/server/services/diagnostic-goals.service";
import { examFamilyForCode } from "@/lib/diagnostics/exam-family";
import { syncBillingNotices } from "@/server/services/billing.service";
import { db } from "@/server/db";
import { refreshAndNotify } from "@/server/services/coaching/coaching.service";
import { syncEngagement } from "@/server/services/engagement.service";
import { VerifyEmailBanner } from "@/components/auth/VerifyEmailBanner";
import { emailConfigured } from "@/server/email/send";
import { countUnreadNotifications } from "@/server/services/notifications.service";
import { getExamInterests } from "@/server/services/exam-interests.service";
import { ChooseExamsBanner } from "@/components/exam-interests/ChooseExamsBanner";
import type { StudentSidebarInfo } from "@/components/dashboard/StudentSidebar";
import { ActiveExamBar } from "@/components/exams/subsite/ActiveExamBar";

/** Name, the one "next step", and the three first-visit steps shown in the student sidebar. */
async function buildStudentInfo(user: { id: string; name: string | null }, hasGoal: boolean): Promise<StudentSidebarInfo> {
  const [level, plan] = await Promise.all([
    db.diagnosticAttempt.findFirst({ where: { userId: user.id, kind: "FULL_DIAGNOSTIC", status: "COMPLETED" }, select: { id: true } }).catch(() => null),
    db.coachingProfile.findUnique({ where: { userId: user.id }, select: { id: true } }).catch(() => null),
  ]);
  const steps = [
    { label: "Sınavını seç", href: "/dashboard/sinavlarim", done: hasGoal },
    { label: "Seviyeni öğren (10 dk)", href: "/seviye-tespit", done: Boolean(level) },
    { label: "Çalışma planını kur", href: "/dashboard/kocluk", done: Boolean(plan) },
  ];
  const next = steps.find((s) => !s.done);
  return {
    firstName: user.name?.trim().split(/\s+/)[0] ?? null,
    today: next ? { eyebrow: "Bugün için", label: next.label, href: next.href } : { eyebrow: "Bugün için", label: "Soru çözmeye devam et", href: "/dashboard/soru-coz" },
    steps,
  };
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getAuthContext();
  if (!user) redirect("/sign-in");
  // Lazily sends any due "ödeme zamanı geldi" notice before the page renders, so it is already in
  // the student's notifications (the daily cron covers students who don't log in).
  const [goal] = await Promise.all([getActiveGoal(user.id), syncBillingNotices(user.id).catch(() => 0)]);
  const unreadCount = await countUnreadNotifications(user.id).catch(() => 0);
  const studentInfo = user.role === "STUDENT" ? await buildStudentInfo(user, Boolean(goal)) : undefined;
  const examFamily = goal ? examFamilyForCode(goal.examType.code) : null;
  // Coaching follow-ups run after the response is sent, so they never slow a page down. The
  // daily cron covers students who don't visit; the delivery log's unique key stops duplicates.
  after(async () => {
    const coaching = await db.coachingProfile.findUnique({ where: { userId: user.id }, select: { enabled: true } });
    if (coaching?.enabled) await refreshAndNotify(user).catch((e) => console.error("coaching follow-ups failed", e));
    // New badges are announced as soon as they are earned, not only when Başarılar is opened.
    if (user.role === "STUDENT") await syncEngagement(user.id).catch((e) => console.error("badge sync failed", e));
  });

  // Students only: staff accounts are created by hand, and without email set up there is no link to send.
  const needsExams = user.role === "STUDENT" && (await getExamInterests(user.id).catch(() => [{}])).length === 0;
  const showVerify = user.role === "STUDENT" && !user.emailVerifiedAt && emailConfigured();
  const freeBookAccess = user.role === "STUDENT" && Boolean(await db.userEbookSelection.findFirst({ where: { userId: user.id }, select: { userId: true } }));
  return (
    <DashboardShell role={user.role} examFamily={examFamily} unreadCount={unreadCount} studentInfo={studentInfo}>
      {user.role === "STUDENT" && goal ? <ActiveExamBar examTypeId={goal.examTypeId} wrapperClassName="-mx-4 -mt-4 mb-6 sm:-mx-6 sm:-mt-6 lg:-mx-8 lg:-mt-8" /> : null}
      {showVerify ? <VerifyEmailBanner email={user.email} /> : null}
      {needsExams ? <ChooseExamsBanner /> : null}
      {children}
      {user.role === "STUDENT" ? <DashboardHelp userKey={user.id} whatsappUrl={whatsappLink(WHATSAPP_NUMBER, "Öğrenci paneli")} freeAccess={freeBookAccess} /> : null}
    </DashboardShell>
  );
}
