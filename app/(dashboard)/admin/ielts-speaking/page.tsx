import type { Metadata } from "next";
import Link from "next/link";
import { listSpeakingForStaff } from "@/server/services/ielts-speaking.service";
import { SpeakingStatus, speakingTestTitle } from "@/components/ielts/SpeakingSubmissionParts";

export const metadata: Metadata = { title: "IELTS Speaking Değerlendirmeleri" };

export default async function AdminSpeakingPage() {
  const submissions = await listSpeakingForStaff();
  const date = new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" });
  const waiting = submissions.filter((s) => s.status === "PENDING").length;

  return (
    <div>
      <p className="eyebrow">Yönetim</p>
      <h1 className="page-title">IELTS Speaking değerlendirmeleri</h1>
      <p className="page-copy">{waiting ? `${waiting} gönderim değerlendirme bekliyor. En eskisi en üstte.` : "Bekleyen gönderim yok."}</p>
      <div className="dashboard-panel mt-8 overflow-x-auto">
        <table className="dashboard-table">
          <thead>
            <tr><th>Öğrenci</th><th>Test</th><th>Gönderim</th><th>Durum</th><th>Band</th><th></th></tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id}>
                <td>
                  <span className="font-bold text-[color:var(--foreground)]">{s.user.name}</span>
                  <span className="block text-xs text-[color:var(--muted)]">{s.user.email}</span>
                </td>
                <td>{speakingTestTitle(s.testId)}</td>
                <td>{date.format(s.submittedAt)}</td>
                <td><SpeakingStatus status={s.status} /></td>
                <td className="font-black">{s.overall?.toFixed(1) ?? "—"}</td>
                <td><Link href={`/admin/ielts-speaking/${s.id}`} className="ghost-button">{s.status === "REVIEWED" ? "Görüntüle" : "Değerlendir"}</Link></td>
              </tr>
            ))}
            {submissions.length === 0 ? (
              <tr><td colSpan={6} className="py-8 text-center text-slate-400">Henüz gönderim yok.</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
