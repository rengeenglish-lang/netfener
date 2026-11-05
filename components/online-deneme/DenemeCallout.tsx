import Link from "next/link";
import { Timer } from "lucide-react";
import { releasedCount } from "@/lib/online-denemeler/catalog";
import { listHref, type Track } from "@/lib/online-denemeler/tracks";

/** "Denemeler" block shown under Pratik for YDS and YÖKDİL: full 80-question tests with a live timer. */
export function DenemeCallout({ track, signedIn }: { track: Track; signedIn: boolean }) {
  const count = releasedCount(track);
  const target = listHref(track);
  const href = signedIn ? target : `/register?next=${encodeURIComponent(target)}`;
  return (
    <section aria-labelledby={`denemeler-${track.slug}`} className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
      <div className="flex min-w-0 items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]">
          <Timer aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[color:var(--muted)]">Denemeler</p>
          <h2 id={`denemeler-${track.slug}`} className="mt-0.5 text-lg font-extrabold text-[color:var(--foreground)]">
            {count ? `${count} tam ${track.name} denemesi` : `${track.name} denemeleri hazırlanıyor`}
          </h2>
          <p className="mt-1 text-sm text-[color:var(--muted)]">80 soru, 180 dakika, e-sınav ekranına benzer geri sayım. Bitirince puanın ve tüm çözümler açılır.</p>
        </div>
      </div>
      {count ? (
        <Link href={href} className="primary-button">
          {signedIn ? "Denemelere git" : "Üye ol, denemeleri gör"}
        </Link>
      ) : null}
    </section>
  );
}
