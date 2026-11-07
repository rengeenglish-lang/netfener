"use client";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  Home,
  UserRound,
  ShoppingBag,
  Calculator,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Settings,
  Mic2,
  ClipboardCheck,
  ListChecks,
  TrendingUp,
  History,
  Timer,
  Library,
  MessageCircle,
  Heart,
  Target,
  Compass,
  Layers,
  PenLine,
  ChevronDown,
  LayoutDashboard,
  BarChart3,
  Users,
  Inbox,
  FileCheck2,
  Sparkles,
  ClipboardList,
  Package,
  TicketPercent,
  Newspaper,
  Search,
  Quote,
  Scale,
  Bell,
  FileText,
  Award,
  Gift,
  type LucideIcon,
  Hourglass,
  Star,
  Languages,
  Wallet,
  GraduationCap,
} from "lucide-react";
import { signOutAction } from "@/app/actions/sign-out";
import type { ExamFamily } from "@/lib/generated/prisma/enums";
import { Logo } from "@/components/brand/Logo";
import { StudentSidebar, type StudentSidebarInfo } from "@/components/dashboard/StudentSidebar";

const DEFAULT_STUDENT_INFO: StudentSidebarInfo = {
  firstName: null,
  today: { eyebrow: "Bugün için", label: "Çalışmaya başla", href: "/dashboard/practice" },
  steps: [],
};

type Role = "STUDENT" | "TEACHER" | "ADMIN" | "SUPER_ADMIN";

const NOTIFICATIONS_HREF = "/dashboard/notifications";
/** Admin pages grouped by job; `adminOnly` pages are hidden from teachers. */
const STAFF_GROUPS: { label: string; items: { href: string; label: string; icon: LucideIcon; adminOnly?: boolean }[] }[] = [
  {
    label: "GENEL",
    items: [
      { href: "/admin", label: "Genel bakış", icon: LayoutDashboard },
      { href: "/admin/analitik", label: "Analitik", icon: BarChart3 },
      { href: NOTIFICATIONS_HREF, label: "Bildirimler", icon: Bell },
    ],
  },
  {
    label: "ÖĞRENCİLER",
    items: [
      { href: "/admin/students", label: "Öğrenciler", icon: Users },
      { href: "/admin/mesajlar", label: "Öğrenci mesajları", icon: MessageCircle },
      { href: "/admin/leads", label: "Gelen talepler", icon: Inbox },
      { href: "/admin/yorumlar", label: "Öğrenci yorumları", icon: Star, adminOnly: true },
      { href: "/admin/submissions", label: "Deneme değerlendirmeleri", icon: FileCheck2 },
      { href: "/admin/ielts-speaking", label: "IELTS Speaking değerlendirmeleri", icon: Mic2 },
    ],
  },
  {
    label: "KOÇLUK VE CANLI DERS",
    items: [
      { href: "/admin/kocluk/oneriler", label: "Gelen koçluk önerileri", icon: Sparkles, adminOnly: true },
      { href: "/admin/speaking-club", label: "Speaking Club", icon: Mic2, adminOnly: true },
      { href: "/admin/group-availability", label: "Grup uygunluğu", icon: CalendarDays, adminOnly: true },
    ],
  },
  {
    label: "İÇERİK",
    items: [
      { href: "/admin/konu-anlatim", label: "Konu anlatımı", icon: Library },
      { href: "/admin/diagnostik/konular", label: "Seviye tespit: konular", icon: ClipboardCheck },
      { href: "/admin/diagnostik/sorular", label: "Seviye tespit: sorular", icon: ListChecks },
      { href: "/admin/diagnostik/degerlendirmeler", label: "Seviye tespit: sonuçlar", icon: ClipboardList },
      { href: "/admin/kaynaklar", label: "Kaynaklar", icon: BookOpen },
      { href: "/admin/curricula", label: "250 saatlik programlar", icon: GraduationCap, adminOnly: true },
    ],
  },
  {
    label: "SATIŞ",
    items: [
      { href: "/admin/orders", label: "Siparişler", icon: ShoppingBag, adminOnly: true },
      { href: "/admin/commerce", label: "Üyelik satışları", icon: Wallet, adminOnly: true },
      { href: "/admin/products", label: "Ürünler", icon: Package },
      { href: "/admin/coupons", label: "Kuponlar", icon: TicketPercent },
      { href: "/admin/faturalar", label: "Faturalar", icon: FileText, adminOnly: true },
    ],
  },
  {
    label: "PAZARLAMA",
    items: [
      { href: "/admin/blog", label: "Blog", icon: Newspaper },
      { href: "/admin/seo", label: "SEO Autopilot", icon: Search, adminOnly: true },
      { href: "/admin/testimonials", label: "Katılımcı görüşleri", icon: Quote },
    ],
  },
  {
    label: "AYARLAR",
    items: [
      { href: "/admin/settings", label: "Ödeme ayarları", icon: Settings },
      { href: "/admin/legal", label: "Hukuki belgeler", icon: Scale, adminOnly: true },
    ],
  },
];

function UnreadBadge({ href, count }: { href: string; count: number }) {
  if (href !== NOTIFICATIONS_HREF || count <= 0) return null;
  return (
    <span className="ml-auto rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-slate-900" aria-label={`${count} yeni bildirim`}>
      {count > 99 ? "99+" : count}
    </span>
  );
}

function SidebarContent({
  role,
  examFamily,
  unreadCount,
  studentInfo,
  onNavigate,
}: {
  role: Role;
  examFamily: ExamFamily | null;
  unreadCount: number;
  studentInfo: StudentSidebarInfo;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isAdmin = role === "ADMIN" || role === "SUPER_ADMIN";
  // Staff groups start open; a group holding the current page cannot be collapsed.
  const [closedGroups, setClosedGroups] = useState<Set<string>>(() => new Set());
  const toggleGroup = (label: string) =>
    setClosedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  const active = (href: string) =>
    !href.includes("#") &&
    (pathname === href ||
      (href !== "/dashboard" &&
        href !== "/admin" &&
        pathname.startsWith(href + "/")));
  return (
    <>
      <Link
        href={isAdmin ? "/admin" : "/dashboard"}
        onClick={onNavigate}
        className="mb-7 flex items-center gap-3 px-3 py-2 text-white"
      >
        <Logo size={40} tone="dark" subtitle={isAdmin ? "Yönetim paneli" : "Öğrenme alanınız"} />
      </Link>
      {isAdmin ? null : <StudentSidebar examFamily={examFamily} unreadCount={unreadCount} info={studentInfo} onNavigate={onNavigate} />}
      <nav aria-label="Yönetim menüsü" className={isAdmin ? "space-y-4" : "mt-4 space-y-3"}>
        {role !== "STUDENT"
          ? STAFF_GROUPS.map((group) => {
              const items = group.items.filter((item) => role === "ADMIN" || role === "SUPER_ADMIN" || !item.adminOnly);
              if (!items.length) return null;
              const hasActive = items.some((item) => active(item.href));
              const open = hasActive || !closedGroups.has(group.label);
              return (
                <div key={group.label}>
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.label)}
                    aria-expanded={open}
                    className="mb-1 flex w-full items-center justify-between rounded-md px-3 py-1 text-[10px] font-bold tracking-widest text-blue-200/80 transition hover:text-white"
                  >
                    {group.label}
                    <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${open ? "" : "-rotate-90"}`} />
                  </button>
                  {open ? (
                    <div className="space-y-0.5">
                      {items.map(({ href, label, icon: Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={onNavigate}
                          aria-current={active(href) ? "page" : undefined}
                          className={"dashboard-nav-item " + (active(href) ? "dashboard-nav-item-active" : "")}
                        >
                          <Icon size={17} aria-hidden="true" />
                          {label}
                          <UnreadBadge href={href} count={unreadCount} />
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </nav>
      <form
        action={signOutAction}
        className="mt-auto border-t border-white/15 pt-5 mt-8"
      >
        <button type="submit" className="dashboard-nav-item w-full">
          <LogOut size={18} aria-hidden="true" />
          Çıkış yap
        </button>
      </form>
    </>
  );
}
export function DashboardShell({
  role,
  examFamily = null,
  unreadCount = 0,
  studentInfo = DEFAULT_STUDENT_INFO,
  children,
}: {
  role: Role;
  examFamily?: ExamFamily | null;
  unreadCount?: number;
  studentInfo?: StudentSidebarInfo;
  children: React.ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const close = () => dialog.current?.close();
  const isAdmin = role === "ADMIN" || role === "SUPER_ADMIN";
  const menuLabel = isAdmin ? "Yönetim menüsü" : "Öğrenci menüsü";
  return (
    <div className="dashboard-frame lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className={"dashboard-sidebar hidden p-4 lg:flex " + (isAdmin ? "" : "dashboard-sidebar--glass")}>
        <SidebarContent role={role} examFamily={examFamily} unreadCount={unreadCount} studentInfo={studentInfo} />
      </aside>
      <dialog
        ref={dialog}
        id="learning-menu"
        aria-label={menuLabel}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="fixed inset-y-0 left-0 m-0 h-dvh max-h-none w-[min(320px,90vw)] max-w-none border-0 bg-[color:var(--brand)] p-0 text-white backdrop:bg-black/40 lg:hidden"
      >
        <div className={"dashboard-sidebar relative h-full w-full p-4 " + (isAdmin ? "" : "dashboard-sidebar--glass")}>
          <button
            onClick={close}
            aria-label="Menüyü kapat"
            className="mb-3 ml-auto rounded-lg p-2 text-white focus-ring"
          >
            <X size={22} />
          </button>
          <SidebarContent role={role} examFamily={examFamily} unreadCount={unreadCount} studentInfo={studentInfo} onNavigate={close} />
        </div>
      </dialog>
      <div className="flex min-w-0 flex-col">
        <div className="no-print flex h-14 items-center gap-3 border-b border-[color:var(--border)] bg-white px-4 lg:hidden">
          <button
            type="button"
            aria-label={`${menuLabel}nü aç`}
            aria-expanded={open}
            aria-controls="learning-menu"
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
            }}
            className="ghost-button"
          >
            <Menu size={21} />
          </button>
          <span className="text-sm font-bold">{isAdmin ? "Yönetim Paneli" : "Çalışma alanım"}</span>
        </div>
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
