"use client";

import { useActionState, useState } from "react";
import type { AdminFormState } from "@/app/actions/admin-testimonials";
import { SPEAKING_BAND_GUIDE, SPEAKING_CRITERIA, speakingBand, type SpeakingCriterion } from "@/lib/ielts-speaking";

const initialState: AdminFormState = { status: "idle" };
const BANDS = Array.from({ length: 19 }, (_, i) => i / 2).reverse();

type Existing = Record<SpeakingCriterion, number | null> & { feedback: string | null };

/** Teacher's scoring form: a band for each of the four criteria, the overall band, and written feedback. */
export function SpeakingReviewForm({ action, existing }: { action: (state: AdminFormState, form: FormData) => Promise<AdminFormState>; existing: Existing }) {
  const [state, formAction, pending] = useActionState(action, initialState);
  const [scores, setScores] = useState<Record<SpeakingCriterion, string>>({
    fluency: existing.fluency?.toString() ?? "",
    lexical: existing.lexical?.toString() ?? "",
    grammar: existing.grammar?.toString() ?? "",
    pronunciation: existing.pronunciation?.toString() ?? "",
  });
  const complete = SPEAKING_CRITERIA.every((c) => scores[c.key] !== "");
  const overall = complete ? speakingBand({ fluency: Number(scores.fluency), lexical: Number(scores.lexical), grammar: Number(scores.grammar), pronunciation: Number(scores.pronunciation) }) : null;

  return (
    <form action={formAction} className="panel space-y-4">
      <p className="eyebrow">Değerlendirme</p>
      {SPEAKING_CRITERIA.map((c) => (
        <div key={c.key}>
          <label className="label" htmlFor={`sp-${c.key}`}>{c.name}</label>
          <select
            id={`sp-${c.key}`}
            name={c.key}
            required
            value={scores[c.key]}
            onChange={(e) => setScores((s) => ({ ...s, [c.key]: e.target.value }))}
            className="auth-input"
          >
            <option value="" disabled>Band seç</option>
            {BANDS.map((b) => <option key={b} value={b}>{b.toFixed(1)}</option>)}
          </select>
          <details className="mt-1 text-xs text-[color:var(--muted)]">
            <summary className="cursor-pointer">Band rehberi</summary>
            <ul className="mt-1 space-y-1">
              {SPEAKING_BAND_GUIDE.map((g) => <li key={g.band}><b>{g.band}:</b> {g.points[c.key]}</li>)}
            </ul>
          </details>
        </div>
      ))}
      <p className="rounded-xl bg-[color:var(--brand-soft)] px-4 py-3 text-sm font-bold">
        Speaking band: {overall === null ? "—" : overall.toFixed(1)}
        <span className="block text-xs font-semibold text-[color:var(--muted)]">Dört kriterin ortalaması, en yakın yarım banda aşağı yuvarlanır.</span>
      </p>
      <div>
        <label className="label" htmlFor="sp-feedback">Öğrenciye geri bildirim</label>
        <textarea
          id="sp-feedback"
          name="feedback"
          required
          minLength={20}
          rows={9}
          defaultValue={existing.feedback ?? ""}
          placeholder="Güçlü yönler, en önemli 2–3 gelişim alanı ve somut örnekler (hangi cevapta, hangi hata)."
          className="auth-input"
        />
      </div>
      {state.status === "error" ? <p className="text-sm font-semibold text-[color:var(--danger)]">{state.message}</p> : null}
      <button type="submit" disabled={pending} className="primary-button w-full">{pending ? "Kaydediliyor…" : "Değerlendirmeyi gönder"}</button>
    </form>
  );
}
