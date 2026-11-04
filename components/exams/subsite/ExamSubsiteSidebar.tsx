"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpen, ChevronDown, ClipboardList, Home, Library, Timer, Users, type LucideIcon } from "lucide-react";
import { SUBSITE_SECTIONS, sectionForPath, subsiteHref, type SubsiteSectionKey } from "@/lib/exam-subsite";

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

/** Desktop sidebar for an exam subsite: exam switcher, YÖKDİL tracks, sections (active = solid pill). */
export function ExamSubsiteSidebar({ exam, exams, tracks, hideSections = false }: { exam: Exam; exams: Exam[]; tracks: { slug: string; label: string }[]; hideSections?: boolean }) {
  const pathname = usePathname();
  const current = sectionForPath(pathname, exam.slug) ?? "home";
  return (
    <div className="flex h-full flex-col gap-5">
      <details className="group relative">
        <summary className="flex cursor-pointer list-none items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-base font-extrabold tracking-tight shadow-[0_1px_3px_rgb(var(--shadow-rgb)/.08)] hover:border-[color:rgb(var(--accent-rgb)/.35)] focus-ring">
          <span className="size-2.5 shrink-0 rounded-full" style={{ background: exam.color }} aria-hidden="true" />
          <span className="flex-1 truncate">{exam.name}</span>
          <ChevronDown size={16} aria-hidden="true" className="text-[color:var(--muted)] transition group-open:rotate-180" />
          <span className="sr-only">: sınav değiştir</span>
        </summary>
        <ul className="absolute inset-x-0 top-full z-40 mt-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-1.5 shadow-[0_18px_40px_rgb(var(--shadow-rgb)/.16)]">
          {exams.map((e) => (
            <li key={e.slug}>
              <Link href={subsiteHref(e.slug)} aria-current={e.slug === exam.slug ? "true" : undefined} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-[color:var(--canvas)]">
                <span className="size-2 rounded-full" style={{ background: e.color }} aria-hidden="true" />
                {e.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      {tracks.length ? (
        <div>
          <p className="mb-1.5 px-1 text-[11px] font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">Alan</p>
          <ul className="grid gap-1">
            {tracks.map((t) => {
              const on = t.slug === exam.slug;
              return (
                <li key={t.slug}>
                  <Link href={subsiteHref(t.slug, current)} aria-current={on ? "page" : undefined} className={`block rounded-[10px] px-3 py-2 text-sm font-semibold transition ${on ? "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]" : "text-[color:var(--muted)] hover:bg-[color:var(--canvas)] hover:text-[color:var(--foreground)]"}`}>
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {hideSections ? (
        <p className="px-1 text-sm text-[color:var(--muted)]">Çalışmak istediğin alanı seç.</p>
      ) : (
        <nav aria-label={`${exam.name} bölümleri`}>
          <p className="mb-1.5 px-1 text-[11px] font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">Menü</p>
          <ul className="grid gap-1">
            {SUBSITE_SECTIONS.map((s) => {
              const on = current === s.key;
              const Icon = ICONS[s.key];
              return (
                <li key={s.key}>
                  <Link
                    href={subsiteHref(exam.slug, s.key)}
                    aria-current={on ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-sm font-semibold transition ${on ? "bg-[color:var(--accent)] text-[color:var(--on-accent)] shadow-[0_6px_16px_-8px_rgb(var(--accent-rgb)/.7)]" : "text-[color:var(--muted)] hover:bg-[color:var(--canvas)] hover:text-[color:var(--foreground)]"}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
