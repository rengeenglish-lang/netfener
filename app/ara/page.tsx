import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Lock, Search } from "lucide-react";
import { getAuthContext } from "@/server/auth/context";
import { searchSite, type SearchResult } from "@/server/services/site-search.service";

export const metadata: Metadata = { title: "Sitede Ara", robots: { index: false, follow: true } };

type Props = { searchParams: Promise<{ q?: string }> };

function AccessBadge({ access }: { access: SearchResult["access"] }) {
  if (access === "free") {
    return <span className="rounded-full bg-[color:var(--brand-soft)] px-2.5 py-0.5 text-xs font-bold text-[color:var(--accent-strong)]">Ücretsiz</span>;
  }
  if (access === "granted") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--success-soft)] px-2.5 py-0.5 text-xs font-bold text-[color:var(--success)]">
        <CheckCircle2 size={13} aria-hidden="true" /> Erişimin var
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--danger-soft)] px-2.5 py-0.5 text-xs font-bold text-[color:var(--danger)]">
      <Lock size={13} aria-hidden="true" /> Erişimin yok
    </span>
  );
}

export default async function SearchPage({ searchParams }: Props) {
  const q = ((await searchParams).q ?? "").trim().slice(0, 80);
  const user = await getAuthContext();
  const results = q.length >= 2 ? await searchSite(q, user ? { id: user.id, role: user.role } : null) : [];

  return (
    <main className="inner-page mx-auto w-full max-w-[900px] px-4 py-12 sm:px-6">
      <h1 className="page-title">Sitede ara</h1>
      <form action="/ara" method="get" role="search" className="mt-5 flex gap-2">
        <label htmlFor="site-search" className="sr-only">Aranacak kelime</label>
        <input
          id="site-search"
          name="q"
          type="search"
          defaultValue={q}
          autoFocus
          placeholder="Konu, deneme, kitap, paket, kelime…"
          className="auth-input min-h-12 flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 text-base"
        />
        <button type="submit" className="primary-button min-h-12 px-5"><Search size={18} aria-hidden="true" /> Ara</button>
      </form>

      {q.length >= 2 ? (
        <section aria-live="polite" className="mt-8">
          <p className="text-sm font-semibold text-[color:var(--muted)]">
            &ldquo;{q}&rdquo; için {results.length} sonuç
            {!user ? " · Ücretli içeriklerde erişimini görmek için giriş yap." : ""}
          </p>
          {results.length ? (
            <ul className="mt-4 space-y-3">
              {results.map((r) => (
                <li key={`${r.kind}-${r.href}-${r.title}`} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[.12em] text-[color:var(--muted)]">{r.kind}</span>
                    <AccessBadge access={r.access} />
                  </div>
                  <Link href={r.href} className="mt-1.5 block text-lg font-extrabold text-[color:var(--foreground)] hover:text-[color:var(--accent-strong)] hover:underline">
                    {r.title}
                  </Link>
                  {r.snippet ? <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{r.snippet}</p> : null}
                  {r.access === "denied" && r.unlockHref ? (
                    <p className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-[color:var(--muted)]">Bu içerik {user ? "planına ya da satın aldıklarına dahil değil." : "üyelere açık."}</span>
                      <Link href={r.unlockHref} className="font-bold text-[color:var(--accent-strong)] underline-offset-2 hover:underline">{r.unlockLabel ?? "Erişim al"} →</Link>
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 rounded-2xl border border-dashed border-[color:var(--border)] p-6 text-center text-[color:var(--muted)]">
              Sonuç bulunamadı. Daha kısa ya da farklı bir kelime dene.
            </p>
          )}
        </section>
      ) : (
        <p className="mt-6 text-sm text-[color:var(--muted)]">En az iki harf yaz. Konu anlatımları, denemeler, e-kitaplar, paketler, blog yazıları ve sözlükte arama yapılır.</p>
      )}
    </main>
  );
}
