import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceTestAccess } from "@/server/services/practice-test-access.service";
import { LockedPracticeTest } from "@/components/practice/LockedPracticeTest";
import { IeltsRunner } from "@/components/ielts/IeltsRunner";
import { IeltsSpeakingRunner } from "@/components/ielts/IeltsSpeakingRunner";
import { speakingReviewAvailable } from "@/server/services/ielts-speaking.service";
import { IELTS_TESTS, MODULE_META, findIeltsTest, ieltsTestHref } from "@/content/ielts-tests/registry";
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
  const { user, gate } = await practiceTestAccess();
  const lock = gate(test.no);
  if (lock !== "open") {
    const free = IELTS_TESTS.find((t) => t.track === test.track && t.no === 1) ?? test;
    return <LockedPracticeTest gate={lock} exam="IELTS" testTitle={test.title} returnTo={ieltsTestHref(test.id, mod.id)} libraryHref="/ielts/testler" freeHref={ieltsTestHref(free.id, mod.id)} />;
  }
  const candidate = user?.name?.trim() || "Misafir";
  if (mod.id === "speaking") {
    return (
      <IeltsSpeakingRunner
        testId={test.id}
        testTitle={test.title}
        module={mod}
        candidate={candidate}
        libraryHref="/ielts/testler"
        signedIn={Boolean(user)}
        signInHref={`/sign-in?next=${encodeURIComponent(`/ielts/testler/${test.id}/speaking`)}`}
        teacherReview={speakingReviewAvailable()}
      />
    );
  }
  return <IeltsRunner testTitle={test.title} module={mod} candidate={candidate} libraryHref="/ielts/testler" />;
}
