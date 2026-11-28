"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { PartyPopper } from "lucide-react";
import { FREE_YEAR_COOKIE, FREE_YEAR_MONTHLY_SPOTS, decodeFreeYearNotice, readFreeYearCookie } from "@/lib/free-year";

const noSubscription = () => () => {};

/**
 * Shown once, right after signing up, to a member who took one of this month's free spots: their
 * number and what they got. Reads the cookie set at sign-up; it is re-read on every navigation.
 */
export function FreeYearPopup() {
  const pathname = usePathname();
  const raw = useSyncExternalStore(noSubscription, () => readFreeYearCookie(document.cookie), () => null);
  const [dismissed, setDismissed] = useState<string | null>(null);
  const button = useRef<HTMLButtonElement>(null);
  const notice = raw === dismissed ? null : decodeFreeYearNotice(raw);
  const open = Boolean(notice);

  function close() {
    document.cookie = `${FREE_YEAR_COOKIE}=; path=/; max-age=0; samesite=lax`;
    setDismissed(raw);
  }

  useEffect(() => {
    if (open) button.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!notice || pathname?.startsWith("/admin")) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="free-year-title" className="relative w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-[0_24px_60px_rgba(15,23,42,.35)] sm:p-8">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <PartyPopper size={28} aria-hidden="true" />
        </span>
        <p className="mt-4 text-sm font-bold text-slate-600">Bu ay kayıt olan</p>
        <p className="text-5xl font-black text-emerald-700">{notice.position}. üyesin</p>
        <h2 id="free-year-title" className="mt-4 text-xl font-extrabold leading-snug text-slate-900">
          Tebrikler! Başlangıç planı 1 yıl boyunca ücretsiz.
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Her ay ilk {FREE_YEAR_MONTHLY_SPOTS} üyeye özel erişimin tanımlandı: 10 deneme sınavı ve konu anlatımları.{" "}
          <strong>{notice.expiresAt.toLocaleDateString("tr-TR", { timeZone: "Europe/Istanbul" })}</strong> tarihine kadar geçerli. Online grup dersleri dahil değildir.
        </p>
        <button ref={button} type="button" onClick={close} className="primary-button mt-6 w-full justify-center">
          {pathname === "/sign-in" ? "Giriş yap ve başla" : "Harika, devam et"}
        </button>
        <Link href="/planlar" onClick={close} className="mt-3 inline-block text-sm font-bold text-slate-500 underline">
          Başlangıç planında neler var?
        </Link>
      </section>
    </div>
  );
}
