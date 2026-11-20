import "server-only";
import { IELTS_TESTS } from "@/content/ielts-tests/registry";
import { TOEFL_TESTS } from "@/content/toefl-tests/registry";
import { CAMBRIDGE_TESTS, LEVELS } from "@/content/cambridge-tests/registry";
import { releasedCount } from "@/lib/online-denemeler/catalog";
import { trackBySlug } from "@/lib/online-denemeler/tracks";
import type { MockCounts } from "@/components/marketing/ExamMockShowcase";

const released = (slug: string) => {
  const track = trackBySlug(slug);
  return track ? releasedCount(track) : 0;
};

/** How many mock tests each exam has, counted from the released content (shown on the homepage). */
export function mockCounts(): MockCounts {
  return {
    yds: released("yds"),
    yokdil: { sosyal: released("yokdil-sosyal-bilimler"), saglik: released("yokdil-saglik-bilimleri"), fen: released("yokdil-fen-bilimleri") },
    ielts: { academic: IELTS_TESTS.filter((t) => t.track === "academic").length, general: IELTS_TESTS.filter((t) => t.track === "general").length },
    toefl: TOEFL_TESTS.length,
    cambridge: LEVELS.map((l) => ({ level: l.name.replace(/^(Pre A1|A1|A2|B1) /, "").replace(/ \(.*\)$/, ""), count: CAMBRIDGE_TESTS.filter((t) => t.level === l.id).length })),
  };
}
