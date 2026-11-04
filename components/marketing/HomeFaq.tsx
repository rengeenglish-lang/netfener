import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { faqJsonLd, homeFaqItems } from "@/lib/home-faq";
import { jsonLdScript } from "@/lib/seo/publishing";
import styles from "./MaterialsHome.module.css";

/** Sık sorulan sorular. Answers come from the Yardım Masası data; the structured data mirrors the visible text exactly. */
export function HomeFaq() {
  const items = homeFaqItems();
  if (!items.length) return null;
  return (
    <section className={`${styles.section} ${styles.faq}`} aria-labelledby="home-faq-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd(items)) }} />
      <div className={styles.faqIntro}>
        <p className={styles.eyebrow}>Sık sorulanlar</p>
        <h2 id="home-faq-title" className={styles.heading}>Başlamadan önce merak edilenler.</h2>
        <p className={styles.copy}>Üyelik, ödeme ve iade hakkında kısa yanıtlar. Aradığını bulamazsan Yardım Masası’ndan bize yaz.</p>
        <Link href="/yardim" className="secondary-button mt-6 inline-flex">Tüm sorular ve canlı destek</Link>
      </div>
      <div className={styles.faqList}>
        {items.map((item) => (
          <details key={item.q} className={styles.faqItem}>
            <summary>
              <span>{item.q}</span>
              <ChevronDown size={18} aria-hidden="true" className={styles.faqChevron} />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
