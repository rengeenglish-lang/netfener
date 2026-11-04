import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";

/** Compact "Sınav: X ▾" switcher (no JS: native details/summary) replacing a row of exam pills. */
export function ExamPickerDropdown({ current, exams, hrefFor, allHref }: { current: { slug: string; name: string }; exams: { slug: string; name: string }[]; hrefFor: (slug: string) => string; allHref?: string }) {
  return (
    <details className="group relative">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-bold shadow-[0_1px_3px_rgb(var(--shadow-rgb)/.08)] hover:border-[color:rgb(var(--accent-rgb)/.35)] focus-ring">
        <span className="font-semibold text-[color:var(--muted)]">Sınav:</span>
        {current.name}
        <ChevronDown size={16} aria-hidden="true" className="text-[color:var(--muted)] transition group-open:rotate-180" />
      </summary>
      <ul className="absolute right-0 top-full z-40 mt-2 w-64 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-1.5 shadow-[0_18px_40px_rgb(var(--shadow-rgb)/.16)]">
        {exams.map((e) => {
          const on = e.slug === current.slug;
          return (
            <li key={e.slug}>
              <Link href={hrefFor(e.slug)} aria-current={on ? "page" : undefined} className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-[color:var(--canvas)] ${on ? "text-[color:var(--accent-strong)]" : ""}`}>
                {e.name}
                {on ? <Check size={15} aria-hidden="true" /> : null}
              </Link>
            </li>
          );
        })}
        {allHref ? (
          <li className="mt-1 border-t border-[color:var(--border)] pt-1">
            <Link href={allHref} className="block rounded-xl px-3 py-2 text-sm font-semibold text-[color:var(--muted)] hover:bg-[color:var(--canvas)]">← Tüm sınavlar</Link>
          </li>
        ) : null}
      </ul>
    </details>
  );
}
