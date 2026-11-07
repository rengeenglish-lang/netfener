"use client";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronRight, HelpCircle, X } from "lucide-react";
import { MAIN_SECTION_IDS, NOTIFICATIONS_HREF, STUDENT_HELP, STUDENT_HOME, studentSections, type StudentSection } from "@/lib/student-nav";
import type { ExamFamily } from "@/lib/generated/prisma/enums";

export type StudentSidebarInfo = {
  firstName: string | null;
  /** The one thing to do next: where it leads and how it reads on the card. */
  today: { eyebrow: string; label: string; href: string };
  /** First-visit steps; the guide hides itself once all are done or the student dismisses it. */
  steps: { label: string; href: string; done: boolean }[];
};

const GUIDE_KEY = "netfener-first-visit-guide-dismissed";

function Guide({ steps, onNavigate }: { steps: StudentSidebarInfo["steps"]; onNavigate?: () => void }) {
  // Server render and first paint assume "dismissed" so the guide never flashes for students who closed it.
  const dismissed = useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return localStorage.getItem(GUIDE_KEY) === "1";
      } catch {
        return false;
      }
    },
    () => true,
  );
  const [closedNow, setHidden] = useState(false);
  const hidden = dismissed || closedNow;
  const next = steps.findIndex((s) => !s.done);
  if (hidden || next === -1) return null;
  return (
    <section aria-label="İlk adımlar" className="glass-card mt-4 p-3.5">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-sm font-extrabold text-white">İlk kez mi buradasın?</h2>
        <button
          type="button"
          aria-label="Bu kutuyu kapat"
          onClick={() => {
            setHidden(true);
            try {
              localStorage.setItem(GUIDE_KEY, "1");
            } catch {}
          }}
          className="-m-1 rounded-md p-1 text-white/70 hover:text-white focus-ring"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-1 text-xs leading-5 text-white/70">Üç adımda başla. Bitirince bu kutu kaybolur.</p>
      <ol className="mt-2.5">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center gap-2.5 border-t border-white/10 py-2 text-[13px] text-white/90">
            <span className={`grid size-5 shrink-0 place-items-center rounded-full border text-[11px] font-bold ${s.done ? "border-emerald-400 bg-emerald-400 text-slate-900" : "border-white/40"}`}>
              {s.done ? <Check size={12} aria-hidden="true" /> : i + 1}
            </span>
            <span className={s.done ? "text-white/60 line-through" : ""}>{s.label}</span>
          </li>
        ))}
      </ol>
      <Link href={steps[next].href} onClick={onNavigate} className="glass-button mt-2.5 block text-center">
        {next + 1}. adıma geç
      </Link>
    </section>
  );
}

export function StudentSidebar({
  examFamily,
  unreadCount,
  info,
  onNavigate,
}: {
  examFamily: ExamFamily | null;
  unreadCount: number;
  info: StudentSidebarInfo;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const sections = studentSections(examFamily);
  const main = MAIN_SECTION_IDS.map((id) => sections.find((s) => s.id === id)!);
  const secondary = sections.filter((s) => !MAIN_SECTION_IDS.includes(s.id));
  const inSection = (s: StudentSection) =>
    pathname === s.href || pathname.startsWith(s.href + "/") || s.items.some((i) => pathname === i.href || pathname.startsWith(i.href + "/"));
  const homeActive = pathname === STUDENT_HOME.href;
  const HomeIcon = STUDENT_HOME.icon;
  return (
    <>
      <p className="mb-2.5 px-1 text-[13px] text-white/70">
        Merhaba{info.firstName ? <> <b className="font-bold text-white">{info.firstName}</b></> : null}
      </p>
      <Link href={info.today.href} onClick={onNavigate} className="glass-today mb-3 block">
        <span className="block text-[11px] font-semibold text-white/75">{info.today.eyebrow}</span>
        <span className="flex items-center justify-between gap-2 text-[15px] font-extrabold text-white">
          {info.today.label}
          <ChevronRight size={16} aria-hidden="true" />
        </span>
      </Link>
      <nav aria-label="Öğrenci menüsü" className="space-y-1">
        <Link href={STUDENT_HOME.href} onClick={onNavigate} aria-current={homeActive ? "page" : undefined} className={"glass-item " + (homeActive ? "glass-item-active" : "")}>
          <HomeIcon size={20} aria-hidden="true" />
          <span>
            <span className="block text-sm font-bold">{STUDENT_HOME.label}</span>
            <span className="glass-desc">{STUDENT_HOME.desc}</span>
          </span>
        </Link>
        {main.map((s) => {
          const on = inSection(s);
          const Icon = s.icon;
          return (
            <Link key={s.id} href={s.href} onClick={onNavigate} aria-current={on ? "page" : undefined} className={"glass-item " + (on ? "glass-item-active" : "")}>
              <Icon size={20} aria-hidden="true" />
              <span>
                <span className="block text-sm font-bold">{s.label}</span>
                <span className="glass-desc">{s.desc}</span>
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="my-3 border-t border-white/15" />
      <div className="space-y-0.5">
        {secondary.map((s) => {
          const on = inSection(s);
          const Icon = s.icon;
          const unreadHere = s.items.some((i) => i.href === NOTIFICATIONS_HREF) && unreadCount > 0;
          return (
            <Link key={s.id} href={s.href} onClick={onNavigate} aria-current={on ? "page" : undefined} className={"glass-item glass-item-small " + (on ? "glass-item-active" : "")}>
              <Icon size={18} aria-hidden="true" />
              <span className="text-[13px] font-semibold">{s.label}</span>
              {unreadHere ? (
                <span className="ml-auto rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-slate-900" aria-label={`${unreadCount} yeni bildirim`}>
                  {unreadCount > 99 ? "99+" : unreadCount}
                </span>
              ) : null}
            </Link>
          );
        })}
        <Link href={STUDENT_HELP.href} onClick={onNavigate} className="glass-item glass-item-small">
          <HelpCircle size={18} aria-hidden="true" />
          <span className="text-[13px] font-semibold">{STUDENT_HELP.label}</span>
        </Link>
      </div>
      <Guide steps={info.steps} onNavigate={onNavigate} />
    </>
  );
}
