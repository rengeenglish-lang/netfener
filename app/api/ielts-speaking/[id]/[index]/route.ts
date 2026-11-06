import { NextResponse } from "next/server";
import { getAuthContext } from "@/server/auth/context";
import { speakingRecordingUrl } from "@/server/services/ielts-speaking.service";

/**
 * Plays one recording of a Speaking submission: redirects the <audio> element to a short-lived
 * signed R2 URL, only for the learner who made it or a teacher.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ id: string; index: string }> }) {
  const { id, index } = await params;
  const user = await getAuthContext();
  const i = Number(index);
  if (!user || !Number.isInteger(i) || i < 0) return new NextResponse("Not found", { status: 404 });
  const url = await speakingRecordingUrl(id, i, { id: user.id, role: user.role }).catch(() => null);
  if (!url) return new NextResponse("Not found", { status: 404 });
  return NextResponse.redirect(url, { status: 302, headers: { "cache-control": "private, no-store" } });
}
