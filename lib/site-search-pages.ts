/** Public pages and tools the site search can point to (all free to open). */
export type SitePage = { href: string; title: string; snippet: string; keywords: string };

export const SITE_PAGES: SitePage[] = [
  { href: "/exams", title: "Sınavlar", snippet: "YDS, YÖKDİL, IELTS, TOEFL ve PTE sınav sayfaları", keywords: "sınav sinav exams yds yökdil yokdil ielts toefl pte" },
  { href: "/exams/yds", title: "YDS", snippet: "YDS konu anlatımı, pratik, denemeler ve kaynaklar", keywords: "yds yabancı dil sınavı e-yds" },
  { href: "/exams/yokdil-sosyal-bilimler", title: "YÖKDİL Sosyal Bilimler", snippet: "Sosyal bilimler alanında YÖKDİL hazırlığı", keywords: "yökdil yokdil sosyal" },
  { href: "/exams/yokdil-saglik-bilimleri", title: "YÖKDİL Sağlık Bilimleri", snippet: "Sağlık bilimleri alanında YÖKDİL hazırlığı", keywords: "yökdil yokdil sağlık saglik tıp" },
  { href: "/exams/yokdil-fen-bilimleri", title: "YÖKDİL Fen Bilimleri", snippet: "Fen bilimleri alanında YÖKDİL hazırlığı", keywords: "yökdil yokdil fen mühendislik" },
  { href: "/exams/ielts", title: "IELTS", snippet: "IELTS Reading, Listening, Writing ve Speaking", keywords: "ielts" },
  { href: "/exams/toefl", title: "TOEFL", snippet: "TOEFL iBT hazırlığı", keywords: "toefl ibt" },
  { href: "/exams/pte", title: "PTE", snippet: "PTE Academic hazırlığı", keywords: "pte pearson" },
  { href: "/denemeler", title: "Denemeler", snippet: "YDS ve YÖKDİL online deneme sınavları, 80 soru, 180 dakika", keywords: "deneme denemeler deneme sınavı mock exam test" },
  { href: "/konu-anlatim", title: "Konu anlatımı", snippet: "Sınavına göre konu konu ders anlatımları", keywords: "konu anlatımı ders gramer kelime" },
  { href: "/planlar", title: "Planlar", snippet: "Başlangıç, Çırak ve Uzman planları", keywords: "plan planlar fiyat üyelik abonelik" },
  { href: "/group-lessons", title: "Grup dersleri", snippet: "Canlı hazırlık grupları", keywords: "grup dersi canlı ders kurs" },
  { href: "/kocluk", title: "Koçluk", snippet: "Ücretsiz sınav koçluğu görüşmesi", keywords: "koçluk koç danışmanlık rehberlik" },
  { href: "/packages", title: "Paketler", snippet: "Hazırlık paketleri ve kamplar", keywords: "paket paketler kamp" },
  { href: "/kaynaklar", title: "Kaynaklar", snippet: "E-kitaplar, ücretsiz kaynaklar ve çalışma materyalleri", keywords: "kaynak kaynaklar materyal" },
  { href: "/kaynaklar/e-kitaplar", title: "E-kitaplar", snippet: "Netfener e-kitapları ve ücretsiz önizlemeler", keywords: "e-kitap ekitap kitap pdf" },
  { href: "/tools/free-resources", title: "Ücretsiz kaynaklar", snippet: "YDS ve YÖKDİL için ücretsiz kelime listeleri", keywords: "ücretsiz kaynak kelime listesi" },
  { href: "/sozluk", title: "Sözlük", snippet: "İngilizce–Türkçe sözlük, örnek cümlelerle", keywords: "sözlük sozluk dictionary kelime anlam" },
  { href: "/thesaurus", title: "Thesaurus", snippet: "Eş ve zıt anlamlı kelimeler", keywords: "thesaurus eş anlamlı zıt anlamlı synonym" },
  { href: "/tools/exam-calendar", title: "Sınav takvimi", snippet: "YDS ve YÖKDİL sınav, başvuru ve sonuç tarihleri", keywords: "takvim tarih sınav tarihi başvuru sonuç" },
  { href: "/tools/score-calculator", title: "Puan hesaplama", snippet: "YDS ve YÖKDİL puan hesaplama aracı", keywords: "puan hesaplama hesapla net" },
  { href: "/seviye-tespit", title: "Seviye tespit", snippet: "Seviyeni ölç, nereden başlayacağını gör", keywords: "seviye tespit sınavı placement" },
  { href: "/blog", title: "Blog", snippet: "Sınav stratejileri ve çalışma ipuçları", keywords: "blog yazı makale ipucu" },
  { href: "/yardim", title: "Yardım", snippet: "Sık sorulan sorular ve destek", keywords: "yardım destek sss soru iletişim" },
];
