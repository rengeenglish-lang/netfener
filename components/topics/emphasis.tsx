"use client";

import { createContext, useContext, type ReactNode } from "react";

export { isKeyPoint, tokenizeKeyTerms } from "@/lib/key-terms";

/**
 * How strongly lesson prose is marked up. "strong" (YDS and YÖKDİL) puts a marker highlight on key
 * terms — quoted English forms, glossary headwords, words written in CAPITALS for emphasis — and turns
 * sentences that carry a rule or warning into highlighted key points.
 */
export type Emphasis = "normal" | "strong";

const EmphasisContext = createContext<Emphasis>("normal");

export function EmphasisProvider({ value, children }: { value: Emphasis; children: ReactNode }) {
  return <EmphasisContext.Provider value={value}>{children}</EmphasisContext.Provider>;
}

export const useEmphasis = () => useContext(EmphasisContext);

/** Exams whose Konu Anlatımı uses strong emphasis. */
export const emphasisForExam = (examSlug: string): Emphasis => (/^(yds|yokdil)/.test(examSlug) ? "strong" : "normal");
