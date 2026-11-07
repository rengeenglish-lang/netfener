import Link from "next/link";
import { notFound } from "next/navigation";
import { studentSections, type StudentSectionId } from "@/lib/student-nav";
import type { ExamFamily } from "@/lib/generated/prisma/enums";

/** Landing page for one sidebar section: every item in it, with a plain sentence each. */
export function SectionHub({ id, examFamily }: { id: StudentSectionId; examFamily: ExamFamily | null }) {
  const section = studentSections(examFamily).find((s) => s.id === id);
  if (!section) notFound();
  return (
    <div className="space-y-6">
      <div>
        <p className="eyebrow">{section.label}</p>
        <h1 className="page-title">{section.desc}</h1>
        <p className="page-copy">Ne yapmak istediğini seç.</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {section.items.map(({ href, label, desc, icon: Icon }) => (
          <li key={href}>
            <Link href={href} className="dashboard-panel flex h-full items-start gap-4 transition hover:-translate-y-0.5 focus-ring">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[color:var(--brand-soft)] text-[color:var(--brand)]">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-base font-extrabold">{label}</span>
                <span className="mt-1 block text-sm leading-6 text-[color:var(--muted)]">{desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
