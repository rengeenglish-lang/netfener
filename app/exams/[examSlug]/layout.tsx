import { notFound } from "next/navigation";
import { getSubsiteExam } from "@/server/services/exam-subsite.service";
import { ExamFrame } from "@/components/exams/subsite/ExamFrame";
import { ExamContextBanner } from "@/components/exams/subsite/ExamContextBanner";

/** Every page under /exams/{slug} is part of that exam's own subsite: its own sidebar, only its content. */
export default async function ExamSubsiteLayout({ children, params }: { children: React.ReactNode; params: Promise<{ examSlug: string }> }) {
  const { examSlug } = await params;
  const exam = await getSubsiteExam(examSlug);
  if (!exam) notFound();
  return (
    <ExamFrame slug={exam.slug}>
      <ExamContextBanner exam={exam} />
      {children}
    </ExamFrame>
  );
}
