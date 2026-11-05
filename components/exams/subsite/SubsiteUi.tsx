import Link from "next/link";
import { AlignLeft, ArrowRight, BookOpen, FileText, Headphones, Languages, Lightbulb, ListChecks, MessagesSquare, Mic2, PenLine, Repeat, ScanSearch, SpellCheck, Type, type LucideIcon } from "lucide-react";
import { featureGradient } from "@/lib/exam-subsite";

const SKILL_ICONS: Record<string, LucideIcon> = {
  reading: BookOpen,
  listening: Headphones,
  writing: PenLine,
  speaking: Mic2,
  kelime: Type,
  "dil-bilgisi": SpellCheck,
  "cloze-test": ListChecks,
  "cumle-tamamlama": AlignLeft,
  ceviri: Languages,
  paragraf: BookOpen,
  "paragraf-tamamlama": FileText,
  diyalog: MessagesSquare,
  "yakin-anlam": Repeat,
  "anlam-butunlugu": ScanSearch,
  strateji: Lightbulb,
};

/** Page heading used on every subsite page: small eyebrow, bold title, muted subtitle. */
export function SubsiteHeader({ eyebrow, title, copy, children }: { eyebrow?: string; title: string; copy?: string; children?: React.ReactNode }) {
  return (
    <header className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow ? <p className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{eyebrow}</p> : null}
        <h1 className="mt-1 text-2xl font-extrabold tracking-[-.02em] sm:text-3xl">{title}</h1>
        {copy ? <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[color:var(--muted)]">{copy}</p> : null}
      </div>
      {children}
    </header>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 mt-9 text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">{children}</h2>;
}

export function SkillTile({ skillKey, color, size = 52 }: { skillKey: string; color: string; size?: number }) {
  const Icon = SKILL_ICONS[skillKey] ?? BookOpen;
  return (
    <span className="grid shrink-0 place-items-center rounded-2xl text-white shadow-[0_8px_18px_-10px_rgb(0_0_0/.5)]" style={{ width: size, height: size, background: featureGradient(color) }} aria-hidden="true">
      <Icon size={Math.round(size * 0.46)} />
    </span>
  );
}

/** Thin progress bar; renders nothing when there is nothing to measure. */
export function ProgressBar({ percent, label }: { percent: number; label: string }) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-xs text-[color:var(--muted)]">
        <span>{label}</span>
        <span>%{percent}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[color:var(--canvas)]" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
        <div className="h-full rounded-full" style={{ width: `${percent}%`, background: "var(--accent)" }} />
      </div>
    </div>
  );
}

/** Bold gradient card in the exam's colour (Gabble-style feature card). */
export function FeatureCard({ href, eyebrow, title, copy, cta, color, icon: Icon }: { href: string; eyebrow?: string; title: string; copy: string; cta: string; color: string; icon?: LucideIcon }) {
  return (
    <Link href={href} className="group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-2xl p-6 text-white shadow-[0_18px_36px_-22px_rgb(0_0_0/.6)] transition hover:-translate-y-0.5" style={{ background: featureGradient(color) }}>
      <div className="relative z-10 max-w-[80%]">
        {eyebrow ? <p className="text-[11px] font-bold uppercase tracking-[.14em] text-white/75">{eyebrow}</p> : null}
        <h3 className="mt-1 text-lg font-extrabold tracking-[-.01em]">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-white/85">{copy}</p>
      </div>
      <span className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-sm font-bold">{cta} <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-1" /></span>
      {Icon ? <Icon aria-hidden="true" size={92} className="absolute -bottom-3 right-3 text-white/15" /> : null}
    </Link>
  );
}

/** Plain white card used for lists and secondary actions. */
export function SubsiteCard({ href, children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) {
  const cls = `block rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_1px_3px_rgb(var(--shadow-rgb)/.08)] ${href ? "transition hover:-translate-y-0.5 hover:border-[color:rgb(var(--accent-rgb)/.35)] hover:shadow-[0_14px_30px_-14px_rgb(var(--accent-rgb)/.38)]" : ""} ${className}`;
  return href ? <Link href={href} className={cls}>{children}</Link> : <div className={cls}>{children}</div>;
}

/** Friendly empty state: icon in a bordered square, one line, optional action. */
export function EmptyState({ icon: Icon, title, copy, action }: { icon: LucideIcon; title: string; copy: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-12 text-center">
      <span className="grid size-12 place-items-center rounded-xl border border-[color:var(--border)] text-[color:var(--muted)]"><Icon size={22} aria-hidden="true" /></span>
      <p className="mt-3 font-bold">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-[color:var(--muted)]">{copy}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
