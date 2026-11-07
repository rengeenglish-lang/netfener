import {
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  Calculator,
  ClipboardCheck,
  ClipboardList,
  Compass,
  Gift,
  Heart,
  History,
  Home,
  HelpCircle,
  Hourglass,
  Languages,
  Layers,
  LineChart,
  Library,
  ListChecks,
  MessageCircle,
  Mic2,
  PenLine,
  Pencil,
  ShoppingBag,
  Target,
  Timer,
  TrendingUp,
  UserRound,
  Users,
  GraduationCap,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ExamFamily } from "@/lib/generated/prisma/enums";

export type StudentNavItem = { href: string; label: string; desc: string; icon: LucideIcon };
export type StudentSectionId = "ogren" | "soru-coz" | "gelisimim" | "araclar" | "hesabim";
export type StudentSection = {
  id: StudentSectionId;
  href: string;
  label: string;
  /** One plain-language line shown under the label in the sidebar and as the hub page intro. */
  desc: string;
  icon: LucideIcon;
  items: StudentNavItem[];
};

export const NOTIFICATIONS_HREF = "/dashboard/notifications";

export const STUDENT_HOME = { href: "/dashboard", label: "Ana sayfa", desc: "Planın ve günün özeti", icon: Home };
export const STUDENT_HELP = { href: "/yardim", label: "Yardım al", icon: HelpCircle };

/**
 * The student menu: four plain-language sections (home, learn, practise, progress) plus tools and
 * account. Each section has its own hub page listing its items with a sentence each, so the
 * sidebar stays short. Konuşma pratiği only applies to IELTS/TOEFL-style exams, so it is dropped
 * once the student's goal is a YDS/YÖKDİL one.
 */
export function studentSections(examFamily: ExamFamily | null): StudentSection[] {
  return [
    {
      id: "ogren",
      href: "/dashboard/ogren",
      label: "Öğren",
      desc: "Konu anlatımı, dersler, kitaplar",
      icon: GraduationCap,
      items: [
        { href: "/dashboard/konu-anlatimi", label: "Konu Anlatımı", desc: "Konuları adım adım, örneklerle öğren.", icon: Library },
        { href: "/dashboard/lessons", label: "Derslerim", desc: "Kayıtlı olduğun derslere devam et.", icon: BookOpen },
        { href: "/dashboard/books", label: "Kitaplarım", desc: "Aldığın kitaplar ve ücretsiz e-kitaplar.", icon: BookOpen },
        { href: "/dashboard/live-sessions", label: "Canlı Derslerim", desc: "Canlı ders programın ve katılım bağlantıların.", icon: CalendarDays },
        { href: "/dashboard/kelime-motoru", label: "Kelime Motoru", desc: "Kelimeleri tekrar ederek kalıcı hale getir.", icon: Layers },
        { href: "/dashboard/kocluk", label: "Ücretsiz Koçluk", desc: "Sana özel çalışma planı ve haftalık takip.", icon: Compass },
      ],
    },
    {
      id: "soru-coz",
      href: "/dashboard/soru-coz",
      label: "Soru çöz",
      desc: "Pratik, deneme, konuşma, yazma",
      icon: Pencil,
      items: [
        { href: "/dashboard/practice", label: "Pratik Bankası", desc: "Konuya göre kısa soru setleri çöz.", icon: ListChecks },
        { href: "/dashboard/mock-exam", label: "Deneme Sınavı", desc: "Gerçek sınav süresiyle tam deneme çöz.", icon: Timer },
        ...(examFamily === "ACADEMIC_SKILLS" ? [] : [{ href: "/dashboard/yds-denemeleri", label: "Online YDS Denemeleri", desc: "YDS formatında online denemeler.", icon: ClipboardList }]),
        ...(examFamily === "TRANSLATION_GRAMMAR"
          ? []
          : [
              { href: "/dashboard/speaking-practice", label: "Konuşma pratiği", desc: "Sesli soruları yanıtla, anında geri bildirim al.", icon: Mic2 },
              { href: "/dashboard/ielts-speaking", label: "IELTS Speaking sonuçlarım", desc: "Speaking denemelerinin puanları ve notları.", icon: Mic2 },
            ]),
        { href: "/dashboard/speaking-club", label: "Speaking Club", desc: "Arkadaşlarınla konuşma pratiği yap.", icon: Users },
        { href: "/dashboard/yazma-geri-bildirim", label: "Yazma geri bildirimi", desc: "Yazdığın metni gönder, düzeltmelerle geri al.", icon: PenLine },
      ],
    },
    {
      id: "gelisimim",
      href: "/dashboard/gelisimim",
      label: "Gelişimim",
      desc: "Sonuçların ve hataların",
      icon: LineChart,
      items: [
        { href: "/dashboard/progress", label: "İlerleme Raporu", desc: "Nerede olduğunu ve neyi geliştirmen gerektiğini gör.", icon: TrendingUp },
        { href: "/dashboard/hatalarim", label: "Hatalarım", desc: "Yanlış yaptığın soruları tekrar çöz.", icon: History },
        { href: "/seviye-tespit", label: "Seviye Tespit", desc: "Seviyeni öğren, eksik konularını bul.", icon: ClipboardCheck },
        { href: "/dashboard/sinavlarim", label: "Sınavlarım", desc: "Hazırlandığın sınavlar ve hedef puanın.", icon: Hourglass },
        { href: "/dashboard/hedeflerim", label: "Hedef Geçmişim", desc: "Önceki hedeflerin ve ulaştığın sonuçlar.", icon: Target },
        { href: "/dashboard/sertifikalarim", label: "Sertifikalarım", desc: "Kazandığın sertifikaları indir.", icon: Award },
      ],
    },
    {
      id: "araclar",
      href: "/dashboard/araclar",
      label: "Sözlük ve araçlar",
      desc: "Sözlük, kaynaklar, puan hesaplama",
      icon: Wrench,
      items: [
        { href: "/sozluk", label: "Sözlük", desc: "İngilizce kelimelerin Türkçe karşılıklarını ve örneklerini bul.", icon: Languages },
        { href: "/kaynaklar", label: "Kaynaklar", desc: "Ücretsiz ve ücretli çalışma materyalleri.", icon: ShoppingBag },
        { href: "/tools/score-calculator", label: "Puan hesaplama", desc: "Doğru sayından sınav puanını hesapla.", icon: Calculator },
      ],
    },
    {
      id: "hesabim",
      href: "/dashboard/hesabim",
      label: "Hesabım",
      desc: "Bildirimler, mesajlar, siparişler",
      icon: UserRound,
      items: [
        { href: NOTIFICATIONS_HREF, label: "Bildirimlerim", desc: "Duyurular, hatırlatmalar ve ödeme bildirimleri.", icon: Bell },
        { href: "/dashboard/mesajlar", label: "Mesajlarım", desc: "Öğretmenlerinle yazışmaların.", icon: MessageCircle },
        { href: "/dashboard/orders", label: "Siparişlerim", desc: "Satın aldıkların ve faturaların.", icon: ShoppingBag },
        { href: "/dashboard/favoriler", label: "Favorilerim", desc: "Kaydettiğin içerikler.", icon: Heart },
        { href: "/dashboard/davet", label: "Arkadaşını davet et", desc: "Arkadaşlarını getir, indirim kazan.", icon: Gift },
        { href: "/dashboard/profile", label: "Hesap bilgilerim", desc: "Adın, e-postan ve şifren.", icon: UserRound },
      ],
    },
  ];
}

/** The four sections that earn a place in the main list; tools and account sit below a divider. */
export const MAIN_SECTION_IDS: StudentSectionId[] = ["ogren", "soru-coz", "gelisimim"];
