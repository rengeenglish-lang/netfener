-- CreateEnum
CREATE TYPE "SpeakingReviewStatus" AS ENUM ('PENDING', 'REVIEWED');

-- CreateTable
CREATE TABLE "ielts_speaking_submissions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "testId" TEXT NOT NULL,
    "recordings" JSONB NOT NULL,
    "status" "SpeakingReviewStatus" NOT NULL DEFAULT 'PENDING',
    "fluency" DOUBLE PRECISION,
    "lexical" DOUBLE PRECISION,
    "grammar" DOUBLE PRECISION,
    "pronunciation" DOUBLE PRECISION,
    "overall" DOUBLE PRECISION,
    "feedback" TEXT,
    "reviewedById" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),

    CONSTRAINT "ielts_speaking_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ielts_speaking_submissions_status_submittedAt_idx" ON "ielts_speaking_submissions"("status", "submittedAt");

-- CreateIndex
CREATE INDEX "ielts_speaking_submissions_userId_submittedAt_idx" ON "ielts_speaking_submissions"("userId", "submittedAt");

-- AddForeignKey
ALTER TABLE "ielts_speaking_submissions" ADD CONSTRAINT "ielts_speaking_submissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ielts_speaking_submissions" ADD CONSTRAINT "ielts_speaking_submissions_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

