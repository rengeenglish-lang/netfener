import Link from "next/link";
import { ArrowRight, BookOpen, Compass, LineChart, Library, Play, Users, type LucideIcon } from "lucide-react";
import styles from "./MaterialsHome.module.css";

type Feature = { icon: LucideIcon; title: string; copy: string; href: string; cta: string };

/** Every card describes an existing feature and links to its real page. */
export function WhyNetfener({ levelTestHref, memberHref }: { levelTestHref: string; memberHref: (href: string) => string }) {
  const features: Feature[] = [
    { icon: BookOpen, title: "Konu anlatımları", copy: "Her sınavın ilk konusu ücretsiz. Konuları kendi hızında öğren.", href: "/konu-anlatim", cta: "Konulara bak" },
    { icon: Compass, title: "Seviye tespiti", copy: "Eksiklerini gör, hedefine uygun çalışma yolunu seç.", href: levelTestHref, cta: "Seviyeni öğren" },
    { icon: Play, title: "Pratik ve deneme", copy: "Soru tiplerini tanı, süreli görevlerle gerçek sınava hazırlan.", href: memberHref("/dashboard/mock-exam"), cta: "Pratiğe başla" },
    { icon: Library, title: "Kelime Motoru", copy: "Seviyene göre kelime setleri, kartlar ve kendi notların.", href: memberHref("/dashboard/kelime-motoru"), cta: "Kelimelere başla" },
    { icon: Users, title: "Canlı grup dersleri", copy: "Sınavına özel küçük gruplarda programlı ve canlı ilerle.", href: "/group-lessons", cta: "Programları gör" },
    { icon: LineChart, title: "İlerleme ve koçluk", copy: "İlerleme raporun ve hata defterinle neyi çalışacağını bil; öğrenci koçluğu ücretsiz.", href: "/kocluk", cta: "Koçluğu incele" },
  ];
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <p className={styles.eyebrow}>Neden Netfener</p>
      <h2 id="why-title" className={styles.heading}>Hazırlığın için gereken her şey, tek yerde.</h2>
      <p className={styles.copy}>Öğren, pratik yap, canlı derse katıl ve ilerlemeni takip et.</p>
      <ul className={styles.why}>
        {features.map(({ icon: Icon, title, copy, href, cta }) => (
          <li key={title}>
            <Link href={href} className={styles.whyCard}>
              <span className={styles.whyIcon}><Icon size={22} aria-hidden="true" /></span>
              <span className={styles.whyTitle}>{title}</span>
              <span className={styles.whyCopy}>{copy}</span>
              <span className={styles.whyLink}>{cta} <ArrowRight size={14} aria-hidden="true" className="inline" /></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
