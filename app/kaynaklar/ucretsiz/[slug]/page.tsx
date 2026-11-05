import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FREE_WORD_LIST_SLUGS, getFreeWordList, posLabel } from "@/lib/free-word-lists";
import { PrintButton } from "@/components/orders/PrintButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FREE_WORD_LIST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const list = getFreeWordList((await params).slug);
  if (!list) return { title: "Kaynak bulunamadı" };
  return { title: `${list.title} — Ücretsiz Kelime Listesi`, description: list.description, alternates: { canonical: `/kaynaklar/ucretsiz/${list.slug}` } };
}

const sectionId = (i: number) => `bolum-${i + 1}`;

export default async function FreeWordListPage({ params }: Props) {
  const list = getFreeWordList((await params).slug);
  if (!list) notFound();
  const total = list.sections.reduce((sum, s) => sum + s.entries.length, 0);

  return (
    <main className="inner-page mx-auto w-full max-w-[1100px] px-4 py-12 sm:px-6">
      <Link className="ghost-button mb-5 print:hidden" href="/tools/free-resources">← Ücretsiz kaynaklar</Link>
      <section className="panel">
        <p className="eyebrow">Ücretsiz kaynak · {list.exam}</p>
        <h1 className="page-title mt-3">{list.title}</h1>
        <p className="page-copy mt-3">{list.description}</p>
        {list.intro.map((p) => (
          <p key={p.slice(0, 24)} className="mt-3 leading-7 text-[color:var(--foreground)]">{p}</p>
        ))}
        <div className="mt-5 flex flex-wrap items-center gap-3 print:hidden">
          <PrintButton />
          <span className="text-sm font-semibold text-[color:var(--muted)]">{total} kelime · {list.sections.length} bölüm</span>
        </div>
        <nav aria-label="Bölümler" className="mt-5 flex flex-wrap gap-2 print:hidden">
          {list.sections.map((s, i) => (
            <a key={s.title} href={`#${sectionId(i)}`} className="rounded-full border border-[color:var(--border)] px-3 py-1 text-sm font-bold text-[color:var(--accent)] hover:border-[color:var(--accent)]">
              {s.title} ({s.entries.length})
            </a>
          ))}
        </nav>
      </section>

      {list.sections.map((section, i) => (
        <section key={section.title} id={sectionId(i)} className="mt-8 scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-[color:var(--foreground)]">{section.title}</h2>
          {section.note ? <p className="mt-1 text-sm text-[color:var(--muted)]">{section.note}</p> : null}
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {section.entries.map((e) => (
              <li key={`${e.word}-${e.pos}`} className="break-inside-avoid rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3">
                <p>
                  <mark className="key-term">{e.word}</mark>{" "}
                  <span className="text-xs font-bold uppercase tracking-wide text-[color:var(--muted)]">{posLabel(e.pos)}</span>
                </p>
                <p className="mt-1 font-semibold text-[color:var(--foreground)]">{e.tr}</p>
                {e.en ? (
                  <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">
                    <span className="italic">{e.en}</span>
                    {e.trEx ? <> — {e.trEx}</> : null}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section className="panel mt-10 text-center print:hidden">
        <h2 className="text-xl font-bold">Kelimeleri konu anlatımıyla pekiştirin</h2>
        <p className="my-3 text-sm text-[color:var(--muted)]">Konu anlatımlarında bu kelimeler örnek sorular ve açıklamalarla birlikte işlenir.</p>
        <Link className="primary-button" href={list.slug.startsWith("yds") ? "/exams/yds/konular?beceri=kelime" : "/exams/yokdil-saglik-bilimleri/konular"}>Konu anlatımına git</Link>
      </section>
    </main>
  );
}
