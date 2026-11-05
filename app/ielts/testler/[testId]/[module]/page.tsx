import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAuthContext } from "@/server/auth/context";
import { IeltsRunner } from "@/components/ielts/IeltsRunner";
import { MODULE_META, findIeltsTest } from "@/content/ielts-tests/registry";
import type { IeltsModuleId } from "@/content/ielts-tests/types";

type Props = { params: Promise<{ testId: string; module: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId, module } = await params;
  const test = findIeltsTest(testId);
  const name = MODULE_META[module as IeltsModuleId]?.name;
  return test && name ? { title: `${test.title} — ${name}`, robots: { index: false } } : { title: "Test bulunamadı" };
}

export default async function IeltsTestPage({ params }: Props) {
  const { testId, module } = await params;
  const test = findIeltsTest(testId);
  const mod = test?.modules.find((m) => m.id === module);
  if (!test || !mod) notFound();
  const user = await getAuthContext();
  return <IeltsRunner testTitle={test.title} module={mod} candidate={user?.name?.trim() || "Misafir"} libraryHref="/ielts/testler" />;
}
