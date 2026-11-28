import "server-only";
import { cookies } from "next/headers";
import { db } from "@/server/db";
import {
  FREE_YEAR_COOKIE,
  FREE_YEAR_COOKIE_SECONDS,
  FREE_YEAR_MONTHLY_SPOTS,
  FREE_YEAR_MONTHS,
  FREE_YEAR_TIER,
  encodeFreeYearNotice,
  freeYearMonth,
  nextFreeYearOpening,
  type FreeYearNotice,
} from "@/lib/free-year";
import { addMonths } from "@/lib/plans";
import { notify } from "@/server/services/notifications.service";

/**
 * Gives a new student this month's next free spot, if any is left. Safe to repeat: a student who
 * already has a spot gets the same answer and no second plan.
 */
export async function grantFreeYear(userId: string, now = new Date()): Promise<FreeYearNotice | null> {
  const month = freeYearMonth(now);
  return db.$transaction(
    async (tx) => {
      // One lock per month, so simultaneous sign-ups can't share a number or pass the limit.
      await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${`free-year:${month}`}))`;
      const existing = await tx.freeYearSpot.findUnique({ where: { userId }, include: { subscription: true } });
      if (existing) return { position: existing.position, expiresAt: existing.subscription.expiresAt };

      const student = await tx.user.findFirst({ where: { id: userId, role: "STUDENT", isActive: true }, select: { id: true } });
      if (!student) return null;
      const last = await tx.freeYearSpot.aggregate({ where: { month }, _max: { position: true } });
      const position = (last._max.position ?? 0) + 1;
      if (position > FREE_YEAR_MONTHLY_SPOTS) return null;

      const expiresAt = addMonths(now, FREE_YEAR_MONTHS);
      const subscription = await tx.planSubscription.create({ data: { userId, tier: FREE_YEAR_TIER, startsAt: now, expiresAt } });
      await tx.freeYearSpot.create({ data: { userId, month, position, subscriptionId: subscription.id } });
      return { position, expiresAt };
    },
    { maxWait: 10_000, timeout: 15_000 },
  );
}

/**
 * Called right after an account is created: grants the spot, leaves an in-app notification and
 * hands the result to the sign-up popup. Never blocks or fails a sign-up.
 */
export async function welcomeWithFreeYear(userId: string): Promise<void> {
  try {
    const notice = await grantFreeYear(userId);
    if (!notice) return;
    (await cookies()).set(FREE_YEAR_COOKIE, encodeFreeYearNotice(notice), {
      path: "/",
      maxAge: FREE_YEAR_COOKIE_SECONDS,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    await notify(userId, {
      category: "PURCHASE",
      key: "free-year",
      title: "Başlangıç planın 1 yıl ücretsiz",
      body: `Bu ay kayıt olan ${notice.position}. üyesin. Başlangıç planın ${notice.expiresAt.toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul" })} tarihine kadar ücretsiz. Online grup dersleri dahil değildir.`,
      href: "/dashboard/mock-exam",
    });
  } catch (error) {
    console.error("[free-year] grant failed", error);
  }
}

export type FreeYearStatus = { limit: number; taken: number; remaining: number; nextOpening: Date };

/** This month's counter, as shown on the site. */
export async function getFreeYearStatus(now = new Date()): Promise<FreeYearStatus> {
  const last = await db.freeYearSpot.aggregate({ where: { month: freeYearMonth(now) }, _max: { position: true } });
  const taken = Math.min(last._max.position ?? 0, FREE_YEAR_MONTHLY_SPOTS);
  return { limit: FREE_YEAR_MONTHLY_SPOTS, taken, remaining: FREE_YEAR_MONTHLY_SPOTS - taken, nextOpening: nextFreeYearOpening(now) };
}
