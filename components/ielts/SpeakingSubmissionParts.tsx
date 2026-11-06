import { findIeltsTest } from "@/content/ielts-tests/registry";
import { SPEAKING_CRITERIA } from "@/lib/ielts-speaking";
import type { SpeakingRecording } from "@/server/services/ielts-speaking.service";

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s) % 60).padStart(2, "0")}`;

export function speakingTestTitle(testId: string) {
  return findIeltsTest(testId)?.title ?? testId;
}

/** Every recording of a submission, grouped by part, with the question and the sample answer. */
export function SpeakingRecordingList({ id, testId, recordings, showSamples = true }: { id: string; testId: string; recordings: SpeakingRecording[]; showSamples?: boolean }) {
  const speaking = findIeltsTest(testId)?.modules.find((m) => m.id === "speaking");
  const parts = [1, 2, 3];
  return (
    <div className="space-y-8">
      {parts.map((part) => {
        const items = recordings.map((r, i) => ({ ...r, i })).filter((r) => r.part === part);
        if (!items.length) return null;
        const cueCard = speaking?.id === "speaking" ? speaking.parts[part - 1]?.cueCard : undefined;
        return (
          <section key={part}>
            <h2 className="text-xl font-black">Part {part}</h2>
            {cueCard ? (
              <div className="mt-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm">
                <p className="font-extrabold">{cueCard.topic}</p>
                <p className="mt-1 text-[color:var(--muted)]">You should say: {cueCard.points.join("; ")}</p>
              </div>
            ) : null}
            <ol className="mt-3 space-y-4">
              {items.map((r) => {
                const sample = speaking?.id === "speaking" ? speaking.parts[r.part - 1]?.prompts[r.prompt - 1]?.sample : undefined;
                return (
                  <li key={r.i} className="rounded-xl border border-[color:var(--border)] p-4">
                    <p className="text-[15px] font-semibold">{r.question}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <audio controls preload="none" src={`/api/ielts-speaking/${id}/${r.i}`} className="h-10 max-w-full" />
                      <span className="text-xs font-bold text-[color:var(--muted)]">{clock(r.seconds)}</span>
                    </div>
                    {showSamples && sample ? (
                      <details className="mt-3">
                        <summary className="cursor-pointer text-sm font-bold text-[color:var(--accent)]">Örnek cevap</summary>
                        <p className="mt-2 text-sm leading-7">{sample}</p>
                      </details>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

type Scored = { fluency: number | null; lexical: number | null; grammar: number | null; pronunciation: number | null; overall: number | null };

export function SpeakingScoreCard({ scores }: { scores: Scored }) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--brand-soft)] px-6 py-4">
        <p className="text-xs font-bold uppercase tracking-[.12em] text-[color:var(--muted)]">Speaking band</p>
        <p className="text-3xl font-black">{scores.overall?.toFixed(1) ?? "—"}</p>
      </div>
      {SPEAKING_CRITERIA.map((c) => (
        <div key={c.key} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4">
          <p className="text-xs font-bold text-[color:var(--muted)]">{c.name}</p>
          <p className="text-2xl font-black">{scores[c.key]?.toFixed(1) ?? "—"}</p>
        </div>
      ))}
    </div>
  );
}

export function SpeakingStatus({ status }: { status: "PENDING" | "REVIEWED" }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${status === "REVIEWED" ? "bg-[color:var(--success-soft)] text-[color:var(--success)]" : "bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]"}`}>
      {status === "REVIEWED" ? "Değerlendirildi" : "Beklemede"}
    </span>
  );
}
