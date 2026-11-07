import Link from "next/link";
import { Lock } from "lucide-react";
import { PRACTICE_PLANS_HREF, type PracticeTestGate } from "@/lib/practice-test-access";

type Props = {
  gate: Exclude<PracticeTestGate, "open">;
  exam: "IELTS" | "TOEFL";
  testTitle: string;
  /** Where to come back to after signing in. */
  returnTo: string;
  libraryHref: string;
  freeHref: string;
};

/** Shown in place of a premium practice test the visitor cannot open yet. */
export function LockedPracticeTest({ gate, exam, testTitle, returnTo, libraryHref, freeHref }: Props) {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
      <div className="panel text-center">
        <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--brand-soft)]">
          <Lock size={22} aria-hidden="true" />
        </span>
        <p className="eyebrow mt-4">{exam} · Premium deneme</p>
        <h1 className="mt-1 text-2xl font-black" lang="en">{testTitle}</h1>
        <p className="page-copy mt-3">
          {gate === "sign-in"
            ? `Practice Test 1 herkese ücretsiz. Diğer ${exam} denemeleri Deneme Sınavı planlarına dahildir; önce giriş yap.`
            : `Practice Test 1 herkese ücretsiz. Diğer ${exam} denemeleri Deneme Sınavı planlarına dahildir.`}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {gate === "sign-in" ? (
            <Link href={`/sign-in?next=${encodeURIComponent(returnTo)}`} className="primary-button">Giriş yap</Link>
          ) : (
            <Link href={PRACTICE_PLANS_HREF} className="primary-button">Planları gör</Link>
          )}
          <Link href={freeHref} className="secondary-button">Ücretsiz Test 1’i çöz</Link>
        </div>
        <p className="mt-6 text-sm"><Link href={libraryHref} className="font-bold underline">← Kütüphaneye dön</Link></p>
      </div>
    </main>
  );
}
