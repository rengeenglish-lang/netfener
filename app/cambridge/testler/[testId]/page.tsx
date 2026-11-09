import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CambridgeRunner } from "@/components/cambridge/CambridgeRunner";
import { cambridgeTestHref, findCambridgeTest, levelMeta } from "@/content/cambridge-tests/registry";

type Props = { params: Promise<{ testId: string }>; searchParams: Promise<{ paper?: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const test = findCambridgeTest((await params).testId);
  return test ? { title: test.title, robots: { index: false } } : { title: "Test bulunamadı" };
}

export default async function CambridgeTestPage({ params, searchParams }: Props) {
  const [{ testId }, { paper: paperId }] = await Promise.all([params, searchParams]);
  const test = findCambridgeTest(testId);
  if (!test) notFound();
  const paper = test.papers.find((p) => p.id === paperId) ?? test.papers[0];
  const others = test.papers.filter((p) => p.id !== paper.id).map((p) => ({ href: cambridgeTestHref(test.id, p.id), name: p.name }));
  const meta = levelMeta(test.level);
  return (
    <CambridgeRunner
      key={paper.id}
      testTitle={test.title}
      level={test.level}
      levelName={meta.name}
      colour={meta.colour}
      paper={paper}
      libraryHref={`/cambridge/testler#${test.level}`}
      otherPapers={others}
    />
  );
}
