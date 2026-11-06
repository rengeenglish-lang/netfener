import type { Metadata } from "next";
import Link from "next/link";
import { getAuthContext } from "@/server/auth/context";
import { listMySpeaking } from "@/server/services/ielts-speaking.service";
import { SpeakingStatus, speakingTestTitle } from "@/components/ielts/SpeakingSubmissionParts";

export const metadata: Metadata = { title: "IELTS Speaking Değerlendirmelerim" };

export default async function MySpeakingPage() {
  const user = await getAuthContext();
  if (!user) return null;
  const submissions = await listMySpeaking(user.id);
  const date = new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium" });

  return (
    <div>
      <p className="eyebrow">IELTS</p>
      <h1 className="page-title">Speaking değerlendirmelerim</h1>
      <p className="page-copy">IELTS test kütüphanesindeki Speaking bölümlerini öğretmene gönderdiğinde, sonuçların burada görünür.</p>
      <div className="dashboard-panel mt-8 overflow-x-auto">
        <table className="dashboard-table">
          <thead>
            <tr><th>Test</th><th>Gönderim</th><th>Durum</th><th>Band</th><th></th></tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id}>
                <td className="font-bold text-[color:var(--foreground)]">{speakingTestTitle(s.testId)}</td>
                <td>{date.format(s.submittedAt)}</td>
                <td><SpeakingStatus status={s.status} /></td>
                <td className="font-black">{s.overall?.toFixed(1) ?? "—"}</td>
                <td><Link href={`/dashboard/ielts-speaking/${s.id}`} className="ghost-button">Görüntüle</Link></td>
              </tr>
            ))}
            {submissions.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  Henüz gönderim yok. <Link href="/ielts/testler" className="font-bold text-[color:var(--accent)] underline">Bir Speaking testi çöz</Link>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
