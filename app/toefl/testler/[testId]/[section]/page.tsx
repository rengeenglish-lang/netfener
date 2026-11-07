import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceTestAccess } from "@/server/services/practice-test-access.service";
import { LockedPracticeTest } from "@/components/practice/LockedPracticeTest";
import { ToeflRunner } from "@/components/toefl/ToeflRunner";
import { IeltsSpeakingRunner } from "@/components/ielts/IeltsSpeakingRunner";
import { SECTION_META, findToeflTest, toeflSpeakingModule, toeflTestHref } from "@/content/toefl-tests/registry";
import type { ToeflSectionId } from "@/content/toefl-tests/types";

type Props = { params: Promise<{ testId: string; section: string }> };

const isSection = (s: string): s is ToeflSectionId => s in SECTION_META;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId, section } = await params;
  const test = findToeflTest(testId);
  return test && isSection(section) ? { title: `${test.title} — ${SECTION_META[section].name}`, robots: { index: false } } : { title: "Test bulunamadı" };
}

export default async function ToeflTestPage({ params }: Props) {
  const { testId, section } = await params;
  const test = findToeflTest(testId);
  if (!test || !isSection(section)) notFound();
  const library = "/toefl/testler";
  const { user, gate } = await practiceTestAccess();
  const lock = gate(test.no);
  if (lock !== "open") {
    return <LockedPracticeTest gate={lock} exam="TOEFL" testTitle={test.title} returnTo={toeflTestHref(test.id, section)} libraryHref={library} freeHref={toeflTestHref("toefl-1", section)} />;
  }

  if (section === "speaking") {
    return (
      <IeltsSpeakingRunner
        brand="toefl"
        testId={test.id}
        testTitle={test.title}
        module={toeflSpeakingModule(test)}
        candidate={user?.name?.trim() || "Misafir"}
        libraryHref={library}
        signedIn={Boolean(user)}
        signInHref={`/sign-in?next=${encodeURIComponent(`/toefl/testler/${test.id}/speaking`)}`}
        teacherReview={false}
      />
    );
  }
  const data =
    section === "reading" ? { id: "reading" as const, data: test.reading } : section === "listening" ? { id: "listening" as const, data: test.listening } : { id: "writing" as const, data: test.writing };
  return <ToeflRunner testTitle={test.title} section={data} libraryHref={library} />;
}
