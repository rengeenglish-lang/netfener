import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import type { FreeYearStatus } from "@/server/services/free-year.service";

/** The public "Her ay ilk 100 üye" counter: how many of this month's free spots are left. */
export function FreeYearCounter({ status, showSignUp = true }: { status: FreeYearStatus; showSignUp?: boolean }) {
  const full = status.remaining === 0;
  const opening = status.nextOpening.toLocaleDateString("tr-TR", { day: "numeric", month: "long", timeZone: "Europe/Istanbul" });
  return (
    <section aria-labelledby="free-year-counter-title" className="rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-700 p-5 text-white shadow-[0_18px_45px_rgba(6,78,59,.25)] sm:p-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-emerald-200">
            <Gift size={16} aria-hidden="true" />Her ay ilk {status.limit} üyeye
          </p>
          <h2 id="free-year-counter-title" className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Başlangıç planı 1 yıl ücretsiz</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-100">10 deneme sınavı ve konu anlatımları. Online grup dersleri dahil değildir.</p>
        </div>
        <div className="w-full shrink-0 lg:w-80">
          <p className="flex items-baseline gap-2">
            <span className="text-5xl font-black tabular-nums">{status.remaining}</span>
            <span className="text-sm font-bold text-emerald-100">/ {status.limit} kontenjan kaldı</span>
          </p>
          <div role="progressbar" aria-label="Bu ay dolan kontenjan" aria-valuemin={0} aria-valuemax={status.limit} aria-valuenow={status.taken} className="mt-2 h-3 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-emerald-300" style={{ width: `${(status.taken / status.limit) * 100}%` }} />
          </div>
          <p className="mt-2 text-xs text-emerald-100">
            {full ? `Bu ayın kontenjanı doldu. Yeni kontenjan ${opening} günü açılır.` : `Bu ay ${status.taken} üye yerini aldı.`}
          </p>
          {showSignUp && !full ? (
            <Link href="/register" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-emerald-900 transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50">
              Ücretsiz yerini al <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
