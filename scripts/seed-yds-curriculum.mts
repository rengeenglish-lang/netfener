/**
 * Writes the YDS Kelime + Dil bilgisi curriculum (lib/yds-curriculum.ts) to the database in DATABASE_URL.
 * Idempotent and scoped to the YDS exam: safe to run again after editing the content files.
 *   npx tsx scripts/seed-yds-curriculum.mts            (dry run: prints what would be written)
 *   npx tsx scripts/seed-yds-curriculum.mts --write
 */
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/prisma/client";
import { buildYdsGrammarTopics, buildYdsVocabularyTopics, seedYdsCurriculum } from "../lib/yds-curriculum";

const topics = [...buildYdsVocabularyTopics(), ...buildYdsGrammarTopics()];
for (const t of topics) console.log(`${t.slug.padEnd(30)} ${String(t.lessons.length).padStart(2)} ders  ${t.name}`);
console.log(`${topics.length} topics, ${topics.reduce((n, t) => n + t.lessons.length, 0)} lessons`);

if (process.argv.includes("--write")) {
  const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
  const yds = await db.examType.findUnique({ where: { code: "YDS" } });
  if (!yds) throw new Error("YDS exam type not found");
  console.log("written:", await seedYdsCurriculum(db as never, yds.id));
  await db.$disconnect();
}
