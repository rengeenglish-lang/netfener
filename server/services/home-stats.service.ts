import "server-only";
import { db } from "@/server/db";
import { PLATFORM_EXAMS } from "@/lib/platform";
import { availableLevels } from "@/lib/vocabulary/content";
import type { HomeStatsInput } from "@/lib/home-stats";

let memo: { at: number; value: HomeStatsInput } | null = null;
const TTL_MS = 10 * 60_000;

/** Real counts from the database and the vocabulary content, memoized for 10 minutes. Falls back to what it can verify if a query fails. */
export async function getHomeStats(): Promise<HomeStatsInput> {
  if (memo && Date.now() - memo.at < TTL_MS) return memo.value;
  const words = availableLevels().reduce((sum, l) => sum + l.count, 0);
  let topics = 0;
  let questions = 0;
  try {
    [topics, questions] = await Promise.all([db.examTopic.count(), db.diagnosticQuestion.count({ where: { isActive: true } })]);
  } catch {
    // Counts stay 0 and their tiles are omitted rather than guessed.
  }
  const value = { exams: PLATFORM_EXAMS.length, topics, questions, words };
  memo = { at: Date.now(), value };
  return value;
}
