"use client";

import { useActionState, useEffect, useState } from "react";
import { LogOut, MailCheck, MessageCircle } from "lucide-react";
import { resendVerificationAction, type ResendVerificationState } from "@/app/actions/email-verification";
import { signOutAction } from "@/app/actions/sign-out";
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/social";

const MESSAGES: Record<ResendVerificationState["status"], string | null> = {
  idle: null,
  sent: "Yeni doğrulama bağlantısı gönderildi. Gelen kutunu (ve Spam klasörünü) kontrol et.",
  verified: "E-posta adresin zaten doğrulanmış. Sayfayı yenileyebilirsin.",
  limited: "Son bir saatte birkaç bağlantı gönderdik. Lütfen biraz sonra tekrar dene.",
  failed: "E-posta şu an gönderilemedi. Lütfen biraz sonra tekrar dene.",
};

/**
 * Escalation, counted per visit (a new visit starts after 30 minutes away):
 *  1st visit  → the banner glows and flickers like a neon sign,
 *  2nd visit  → it also keeps shaking to ask for attention,
 *  3rd+ visit → a full-screen lock that only closes once the student acts (asks for a new link).
 * Acting resets the count, so the cycle starts again if the address is still not verified.
 */
type Stage = "neon" | "animate" | "lock";
const VISIT_GAP_MS = 30 * 60 * 1000;

function storageKey(email: string) {
  return `nf-verify-nag:${email.toLowerCase()}`;
}

function readVisits(email: string): number {
  try {
    const raw = localStorage.getItem(storageKey(email));
    const saved = raw ? (JSON.parse(raw) as { visits: number; lastSeen: number }) : { visits: 0, lastSeen: 0 };
    const now = Date.now();
    const visits = now - saved.lastSeen > VISIT_GAP_MS ? saved.visits + 1 : Math.max(saved.visits, 1);
    localStorage.setItem(storageKey(email), JSON.stringify({ visits, lastSeen: now }));
    return visits;
  } catch {
    return 1;
  }
}

function resetVisits(email: string) {
  try {
    localStorage.setItem(storageKey(email), JSON.stringify({ visits: 0, lastSeen: Date.now() }));
  } catch {
    /* storage unavailable: nothing to reset */
  }
}

/** Shown in the dashboard until the student opens the link from their welcome email. */
export function VerifyEmailBanner({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState(resendVerificationAction, { status: "idle" } as ResendVerificationState);
  const [stage, setStage] = useState<Stage>("neon");
  const [locked, setLocked] = useState(false);
  const message = MESSAGES[state.status];
  const acted = state.status !== "idle";

  useEffect(() => {
    const visits = readVisits(email);
    const next: Stage = visits >= 3 ? "lock" : visits === 2 ? "animate" : "neon";
    setStage(next); // eslint-disable-line react-hooks/set-state-in-effect -- reading the device-only visit count after hydration
    setLocked(next === "lock");
  }, [email]);

  useEffect(() => {
    if (acted) resetVisits(email);
  }, [acted, email]);

  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [locked]);

  const effect = acted ? "verify-neon-calm" : stage === "neon" ? "verify-neon" : "verify-neon verify-nudge";

  return (
    <>
      <div className={`mb-5 flex flex-wrap items-center gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 ${effect}`} role="region" aria-label="E-posta doğrulama">
        <MailCheck size={20} aria-hidden="true" className="shrink-0 text-amber-700" />
        <p className="min-w-0 flex-1">
          <strong>E-posta adresini doğrula.</strong> {email} adresine gönderdiğimiz bağlantıya tıkla; şifreni unutursan hesabına bu adresle geri dönebilirsin.
          {message ? <span className="mt-1 block font-semibold" role="status">{message}</span> : null}
        </p>
        {state.status !== "sent" && state.status !== "verified" ? (
          <form action={formAction}>
            <button type="submit" disabled={pending} className="secondary-button text-xs">
              {pending ? "Gönderiliyor…" : "Bağlantıyı tekrar gönder"}
            </button>
          </form>
        ) : null}
      </div>

      {locked ? (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="verify-lock-title">
          <div className="verify-neon w-full max-w-md rounded-2xl border-2 border-amber-300 bg-white p-6 text-center text-slate-900 shadow-2xl">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-amber-100 text-amber-700"><MailCheck size={28} aria-hidden="true" /></span>
            <h2 id="verify-lock-title" className="mt-4 text-xl font-bold">Önce e-posta adresini doğrula</h2>
            <p className="mt-2 text-sm text-slate-600">
              <strong className="text-slate-900">{email}</strong> adresini hâlâ doğrulamadın. Şifreni unutursan hesabına yalnızca bu adresle dönebilirsin. Devam etmek için yeni bir doğrulama bağlantısı iste.
            </p>
            {message ? <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-950" role="status">{message}</p> : null}
            <div className="mt-5 flex flex-col items-center gap-3">
              {acted ? (
                <button type="button" className="primary-button" onClick={() => setLocked(false)} autoFocus>Tamam, gelen kutuma bakacağım</button>
              ) : (
                <form action={formAction}>
                  <button type="submit" disabled={pending} className="primary-button" autoFocus>
                    {pending ? "Gönderiliyor…" : "Doğrulama bağlantısını gönder"}
                  </button>
                </form>
              )}
              <a href={whatsappLink(WHATSAPP_NUMBER, "E-posta adresim yanlış")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 underline">
                <MessageCircle size={16} aria-hidden="true" /> E-posta adresim yanlış — destek al
              </a>
              <form action={signOutAction}>
                <button type="submit" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 underline">
                  <LogOut size={14} aria-hidden="true" /> Çıkış yap
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
