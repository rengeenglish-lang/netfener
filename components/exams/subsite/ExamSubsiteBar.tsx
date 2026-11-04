"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpen, ChevronDown, ClipboardList, Home, Library, Timer, Users, type LucideIcon } from "lucide-react";
import { SUBSITE_SECTIONS, subsiteHref, type SubsiteSectionKey } from "@/lib/exam-subsite";

const ICONS: Record<SubsiteSectionKey, LucideIcon> = {
  home: Home,
  konular: BookOpen,
  pratik: ClipboardList,
  denemeler: Timer,
  kaynaklar: Library,
  "canli-dersler": Users,
  ilerleme: BarChart3,
};

type Exam = { slug: string; name: string; color: string };

/** Sticky subsite bar: exam switcher, YÖKDİL track switch and section navigation (active = solid pill). */
export function ExamSubsiteBar({ exam, exams, tracks, hideSections = false }: { exam: Exam; exams: Exam[]; tracks: { slug: string; label: string }[]; hideSections?: boolean }) {
  const pathname = usePathname();
  const active = (href: string, isHome: boolean) => (isHome ? pathname === href : pathname === href || pathname.startsWith(href + "/"));
  return (
    <div className="exam-subsite-bar sticky top-[76px] z-30 border-b border-[color:var(--border)] bg-[color:var(--surface)]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1100px] items-center gap-3 px-4 py-2.5">
        <details className="group relative shrink-0">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-2.5 py-1.5 text-base font-extrabold tracking-tight hover:bg-[color:var(--canvas)] focus-ring">
            <span className="size-2.5 rounded-full" style={{ background: exam.color }} aria-hidden="true" />
            {exam.name}
            <ChevronDown size={16} aria-hidden="true" className="transition group-open:rotate-180" />
            <span className="sr-only">: sınav değiştir</span>
          </summary>
          <ul className="absolute left-0 top-full z-40 mt-2 w-56 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-1.5 shadow-[0_18px_40px_rgb(var(--shadow-rgb)/.16)]">
            {exams.map((e) => (
              <li key={e.slug}>
                <Link href={subsiteHref(e.slug)} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-[color:var(--canvas)]">
                  <span className="size-2 rounded-full" style={{ background: e.color }} aria-hidden="true" />
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        {hideSections ? <p className="text-sm text-[color:var(--muted)]">Çalışmak istediğin alanı seç</p> : <nav aria-label={`${exam.name} bölümleri`} className="-mx-1 flex min-w-0 flex-1 gap-1 overflow-x-auto px-1 [scrollbar-width:none]">
          {SUBSITE_SECTIONS.map((s) => {
            const href = subsiteHref(exam.slug, s.key);
            const on = active(href, s.key === "home");
            const Icon = ICONS[s.key];
            return (
              <Link
                key={s.key}
                href={href}
                aria-current={on ? "page" : undefined}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-[10px] px-3 py-2 text-sm font-semibold transition ${on ? "bg-[color:var(--accent)] text-[color:var(--on-accent)] shadow-[0_6px_16px_-8px_rgb(var(--accent-rgb)/.7)]" : "text-[color:var(--muted)] hover:bg-[color:var(--canvas)] hover:text-[color:var(--foreground)]"}`}
              >
                <Icon size={16} aria-hidden="true" />
                {s.label}
              </Link>
            );
          })}
        </nav>}
      </div>
      {tracks.length ? (
        <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center gap-2 px-4 pb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--muted)]">Alan</span>
          {tracks.map((t) => {
            const on = t.slug === exam.slug;
            const section = SUBSITE_SECTIONS.find((s) => s.key !== "home" && pathname.startsWith(subsiteHref(exam.slug, s.key)))?.key ?? "home";
            return (
              <Link key={t.slug} href={subsiteHref(t.slug, section)} aria-current={on ? "page" : undefined} className={`rounded-full border px-3 py-1 text-xs font-bold transition ${on ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--on-accent)]" : "border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--foreground)]"}`}>
                {t.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
