import type { YokdilDeneme } from "./types";

export const SAGLIK_16: YokdilDeneme = {
  no: 16,
  field: "saglik",
  vocab: [
    [
      "The nurse's hands became so ---- from the strong chemicals used in the operating theatre that she considered giving up her job.",
      ["irritated", "polished", "relaxed", "decorated", "frozen"],
      "Ameliyathanede kullanılan güçlü kimyasallar yüzünden hemşirenin ellerinin 'tahriş olduğu' (irritated) anlatılır.",
    ],
    [
      "For more than a century, the family kept the design of their instrument a closely ---- secret.",
      ["guarded", "printed", "shared", "abandoned", "broken"],
      "Ailenin aletin tasarımını yüz yılı aşkın süre 'sıkı korunan' (closely guarded) bir sır olarak sakladığı anlatılır.",
    ],
    [
      "Blackwell's application was accepted only because the students, thinking it was a joke, voted ---- to admit her.",
      ["unanimously", "secretly", "reluctantly", "rarely", "partially"],
      "Öğrencilerin bunun bir şaka olduğunu düşünerek onu kabul etmek için 'oy birliğiyle' (unanimously) oy verdiği anlatılır.",
    ],
    [
      "The murders led Parliament to pass a law that ---- a legal supply of bodies for medical schools.",
      ["guaranteed", "prohibited", "concealed", "reduced", "punished"],
      "Cinayetlerin parlamentoyu tıp okulları için yasal bir kadavra teminini 'güvence altına alan' (guaranteed) bir yasa çıkarmaya yönelttiği anlatılır.",
    ],
    [
      "Adding the vitamin to flour has ---- reduced the number of babies born with defects of the spine.",
      ["dramatically", "barely", "falsely", "accidentally", "politely"],
      "Vitaminin una eklenmesinin omurga kusurlarıyla doğan bebek sayısını 'büyük ölçüde' (dramatically) azalttığı anlatılır.",
    ],
    [
      "Hamilton refused to ---- when factory owners denied that their workers were being poisoned.",
      ["back down", "show off", "take after", "look up", "get over"],
      "Fabrika sahipleri işçilerin zehirlendiğini inkâr ettiğinde Hamilton'un 'geri adım atmayı' (back down) reddettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first pair of rubber surgical gloves ---- by a tyre company at the request of an American surgeon.",
      ["was made", "made", "has made", "was making", "had made"],
      "Eldivenler yapılan nesnelerdir ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was made'.",
    ],
    [
      "If the Chamberlens had shared their invention, many more mothers and babies ---- during difficult births.",
      ["might have been saved", "might be saved", "will be saved", "were saved", "had been saved"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have been + V3' ister.",
    ],
    [
      "By the time Blackwell graduated in 1849, she ---- by more than a dozen medical schools.",
      ["had been rejected", "has been rejected", "is rejected", "will be rejected", "had rejected"],
      "Mezuniyetten (geçmiş) önce tamamlanmış edilgen durum: Past Perfect Passive 'had been rejected'.",
    ],
    [
      "Koller, ---- experiments on the eyes of frogs proved the drug's effect, presented his results in 1884.",
      ["whose", "who", "which", "whom", "where"],
      "Deneyler Koller'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the murders were discovered ---- reform the way medical schools obtained bodies.",
      ["did the government decide to", "the government decided to", "decided the government to", "the government did decide to", "did decide the government to"],
      "'Only after' ile başlayan cümlede ana cümle devrik olur: 'did the government decide to'.",
    ],
    [
      "The gloves were so thin ---- the surgeon could still feel the tissues clearly.",
      ["that", "which", "as", "such", "than"],
      "'so thin that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- the vitamin is found in green vegetables, many women do not get enough of it from their diet.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Vitaminin yeşil sebzelerde bulunması ile pek çok kadının yeterince alamaması zıttır: 'Although'.",
    ],
    [
      "Workers ---- health was damaged by lead were often dismissed without compensation.",
      ["whose", "who", "which", "whom", "where"],
      "Sağlık işçilere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "The forceps are believed ---- by Peter Chamberlen in the early seventeenth century.",
      ["to have been invented", "to invent", "inventing", "to be inventing", "to have invented"],
      "Forseps icat edilen bir alettir ve olay geçmişte kalmıştır: 'be believed to have been + V3'.",
    ],
    [
      "Blackwell faced hostility from some classmates ---- support from others.",
      ["as well as", "instead of", "because of", "rather than", "unless"],
      "Düşmanlıkla birlikte destek de gördüğü anlatılır: 'as well as'.",
    ],
    [
      "Bodies ---- from graves were sold to anatomy teachers for high prices.",
      ["stolen", "stealing", "which stole", "to steal", "have stolen"],
      "Cesetler çalınan şeylerdir; edilgen anlamlı geçmiş ortaç 'stolen' gerekir.",
    ],
    [
      "Doctors placed a few drops of the solution in the eye ---- the patient would feel no pain during the operation.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The Chamberlens behaved as if they ---- the only people in the world able to deal with a difficult birth.",
      ["were", "are", "will be", "have", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır: 'were'.",
    ],
    [
      "The more women took the vitamin before pregnancy, ---- the number of affected babies became.",
      ["the lower", "lower", "the lowest", "more low", "the more low"],
      "'The more …, the lower …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the late nineteenth century, surgeons began to accept that germs caused infections in wounds, and they washed their hands and instruments in strong antiseptic solutions. At Johns Hopkins Hospital in Baltimore, the chief surgeon William Halsted insisted on particularly strict procedures. One of his nurses, Caroline Hampton, developed a severe rash on her hands and arms {1} the chemicals used in the operating theatre, and she considered leaving her job. Halsted, who was fond of her, asked the Goodyear Rubber Company to make two pairs of thin rubber gloves {2} would protect her skin. The gloves worked so well {3} other members of the team soon began to wear them as well. At first, the gloves were used to protect the staff rather than the patients, and some surgeons refused to wear them, arguing that they reduced their sense of touch. {4}, over the following decades, studies showed that wearing gloves reduced infections after surgery, and by the early twentieth century they had become standard practice. The story has a happy ending in another sense: Halsted and Hampton married in 1890, {5} the gloves are sometimes described as a gift of love.",
      blanks: [
        [
          "(21) ----",
          ["because of", "instead of", "in spite of", "in addition to", "apart from"],
          "Döküntünün nedeni ameliyathanede kullanılan kimyasallardır: 'because of'.",
        ],
        [
          "(22) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'thin rubber gloves' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(23) ----",
          ["that", "as", "which", "such", "than"],
          "'so well that' sonuç bildiren yapıdır: 'that'.",
        ],
        [
          "(24) ----",
          ["However", "Therefore", "For example", "Similarly", "In other words"],
          "Bazı cerrahların eldivenleri reddetmesi ile sonraki çalışmaların enfeksiyonun azaldığını göstermesi karşıtlıktır: 'However'.",
        ],
        [
          "(25) ----",
          ["and", "but", "unless", "although", "or"],
          "Evlilik ile eldivenlerin bir aşk hediyesi olarak anılması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Obstetric forceps are an instrument used to help deliver a baby when labour is prolonged or the baby is in difficulty. They consist of two curved blades that are placed around the baby's head {1} the doctor can guide it gently through the birth canal. The forceps were probably invented in England in the early seventeenth century by Peter Chamberlen, a member of a family of surgeons who had fled from France. Rather than publishing the invention, the family kept it secret for over a hundred years, {2} it gave them a great advantage over other doctors and midwives. When they were called to a difficult birth, they reportedly asked everyone to leave the room and blindfolded the mother, {3} no one could see the instrument. They also carried it in a large, decorated box to make it seem more mysterious. The design was not widely known {4} the early eighteenth century, when it began to be used by other doctors. In 1813, a box containing several pairs of forceps was found hidden under the floor of a house {5} had once belonged to the family.",
      blanks: [
        [
          "(26) ----",
          ["so that", "in order to", "because of", "instead of", "as a result of"],
          "Ardından tam bir cümle gelir ve amaç bildirilir: 'so that'.",
        ],
        [
          "(27) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Buluşu gizli tutmalarının nedeni diğer doktorlara karşı büyük avantaj sağlamasıdır: 'because'.",
        ],
        [
          "(28) ----",
          ["so that", "unless", "although", "because of", "despite"],
          "Anneye göz bağı takılmasının amacı kimsenin aleti görememesidir: 'so that'.",
        ],
        [
          "(29) ----",
          ["until", "since", "by", "during", "for"],
          "Tasarımın on sekizinci yüzyılın başına 'kadar' yaygın bilinmediği anlatılır: 'until'.",
        ],
        [
          "(30) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'a house' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Blackwell graduated at the top of her class, ----.",
      [
        "many hospitals refused to give her a job",
        "she had studied at a small college in New York State",
        "her family had moved from England to the United States",
        "she was the first woman to receive a medical degree in America",
        "her classmates had voted to admit her to the course",
      ],
      "'Although' zıtlık ister: Blackwell sınıf birincisi olarak mezun olsa da pek çok hastane ona iş vermeyi reddetti.",
    ],
    [
      "If medical schools had been allowed to use more bodies legally, ----.",
      [
        "the trade in stolen corpses might never have developed",
        "the students would study anatomy",
        "most teachers will buy bodies",
        "Burke and Hare lived in Edinburgh",
        "the murders were discovered",
      ],
      "Type 3 koşul cümlesi ana cümlede 'might have + V3' ister: çalıntı ceset ticareti hiç gelişmeyebilirdi.",
    ],
    [
      "Hamilton visited factories herself ----.",
      [
        "because she wanted to see the conditions with her own eyes",
        "so that she could avoid talking to the workers",
        "although she had no interest in industrial diseases",
        "unless the owners refused to let her in",
        "even if the factories had closed",
      ],
      "Hamilton'un fabrikaları bizzat ziyaret etmesinin nedeni koşulları kendi gözleriyle görmek istemesidir: 'because'.",
    ],
    [
      "Since flour was first fortified with folic acid in the late 1990s, ----.",
      [
        "the rate of spina bifida has fallen in many countries",
        "women had been advised to eat green vegetables",
        "most babies would have been born healthy",
        "the vitamin will be added to rice",
        "few doctors knew about the condition",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has fallen'.",
    ],
    [
      "Unless a woman takes folic acid before she becomes pregnant, ----.",
      [
        "it may be too late to protect the baby's developing spine",
        "the baby would have been born early",
        "most doctors had recommended it",
        "the vitamin will be added to bread",
        "the spine was formed",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: bebeğin gelişen omurgasını korumak için çok geç olabilir.",
    ],
    [
      "The demand for bodies in Edinburgh was so great ----.",
      [
        "that some people were prepared to commit murder to supply them",
        "because the city had one of the best medical schools in Europe",
        "although only the bodies of executed criminals could be used",
        "unless the families of the dead agreed to donate them",
        "while students paid high fees to attend anatomy lectures",
      ],
      "'so great that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Koller found that when a few drops of the solution were placed on the eye, ----.",
      [
        "the surface became completely numb within minutes",
        "the patient would have needed general anaesthesia",
        "most frogs had died",
        "the operation will be painless",
        "his colleagues were impressed",
      ],
      "'when' ile genel bir bulgu anlatılır: çözeltiden birkaç damla göze konduğunda yüzey dakikalar içinde tamamen uyuşuyordu.",
    ],
    [
      "So dangerous were the conditions in some lead factories ----.",
      [
        "that workers suffered from paralysis and even died",
        "because lead was used to make paint and batteries",
        "although few workers complained about them",
        "while the owners lived in comfortable houses",
        "unless the workers wore protective masks",
      ],
      "Devrik 'So dangerous were … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While the gloves were at first intended to protect the nurse's skin, ----.",
      [
        "they were later shown to reduce infections in patients",
        "Halsted worked at a famous hospital in Baltimore",
        "rubber was produced from the sap of trees",
        "many surgeons washed their hands in antiseptic",
        "the operating theatre was cleaned every day",
      ],
      "'While' iki durumu karşılaştırır: eldivenler başta hemşirenin derisini korumak içinken sonradan hastalardaki enfeksiyonları azalttığı gösterildi.",
    ],
    [
      "Once the secret of the forceps had become widely known, ----.",
      [
        "other doctors began to use and improve the design",
        "the Chamberlens will publish a book",
        "the mothers would have been blindfolded",
        "the instrument is kept in a box",
        "most babies had been born at home",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: diğer doktorlar tasarımı kullanıp geliştirmeye başladı.",
    ],
    [
      "No sooner had Blackwell entered the lecture hall ----.",
      [
        "than the noisy students fell silent",
        "when she had received her degree",
        "that the professor will begin",
        "before the course had started",
        "so she sat in the front row",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "At first, the gloves were worn to protect the staff rather than the patients.",
      [
        "Eldivenler başlangıçta hastalardan çok personeli korumak için giyiliyordu.",
        "Eldivenler başlangıçta personelden çok hastaları korumak için giyiliyordu.",
        "Personel, hastaları korumak için eldiven giymeyi başlangıçta reddetti.",
        "Hastalar, personeli korumak için eldiven giymek zorundaydı.",
        "Eldivenler, ne personeli ne de hastaları korumak için tasarlanmıştı.",
      ],
      "'were worn to protect the staff rather than the patients' 'hastalardan çok personeli korumak için giyiliyordu' demektir.",
    ],
    [
      "The family kept their invention secret because it gave them an advantage over their rivals.",
      [
        "Aile, rakiplerine karşı avantaj sağladığı için buluşlarını gizli tuttu.",
        "Aile, rakipleri onları geride bıraktığı için buluşlarını gizli tuttu.",
        "Rakipler, ailenin buluşunu gizli tutması için onlara baskı yaptı.",
        "Aile, rakiplerine avantaj sağlamak amacıyla buluşlarını herkesle paylaştı.",
        "Ailenin buluşu, rakiplerinin çalışmalarını tamamen durdurdu.",
      ],
      "'kept their invention secret' 'buluşlarını gizli tuttu', 'because it gave them an advantage over their rivals' 'rakiplerine karşı avantaj sağladığı için' demektir.",
    ],
    [
      "Blackwell went on to found a hospital run by women for poor women and children.",
      [
        "Blackwell daha sonra yoksul kadınlar ve çocuklar için kadınlar tarafından yönetilen bir hastane kurdu.",
        "Blackwell daha sonra kadınlar tarafından kurulan bir hastanede yoksul çocukları tedavi etmeyi bıraktı.",
        "Yoksul kadınlar ve çocuklar, Blackwell'in hastane kurmasına karşı çıktı.",
        "Blackwell, kadınların yönettiği hastanelerin yoksullara hizmet vermemesi gerektiğini savundu.",
        "Blackwell, hastane kurmak yerine yoksul kadınlara evlerinde ders verdi.",
      ],
      "'went on to found a hospital' 'daha sonra bir hastane kurdu', 'run by women for poor women and children' 'yoksul kadınlar ve çocuklar için kadınlar tarafından yönetilen' demektir.",
    ],
    [
      "Before the law changed, only the bodies of executed criminals could be used for dissection.",
      [
        "Yasa değişmeden önce, kadavra incelemesi için yalnızca idam edilen suçluların cesetleri kullanılabiliyordu.",
        "Yasa değiştikten sonra, kadavra incelemesi için yalnızca idam edilen suçluların cesetleri kullanılabildi.",
        "İdam edilen suçluların cesetleri, yasa değişmeden önce hiçbir zaman incelenemiyordu.",
        "Yasa, suçluların cesetlerinin kadavra incelemesinde kullanılmasını tamamen yasakladı.",
        "Kadavra incelemesi, yasa değişene kadar yalnızca hayvanlar üzerinde yapılıyordu.",
      ],
      "'Before the law changed' 'yasa değişmeden önce', 'only the bodies of executed criminals could be used' 'yalnızca idam edilen suçluların cesetleri kullanılabiliyordu' demektir.",
    ],
    [
      "The drug blocks the nerves that carry pain signals from the eye to the brain.",
      [
        "İlaç, ağrı sinyallerini gözden beyne taşıyan sinirleri engeller.",
        "İlaç, beynin göze ağrı sinyalleri göndermesini kolaylaştırır.",
        "Sinirler, ilacın gözden beyne ulaşmasını engeller.",
        "İlaç, gözdeki sinirleri onarmak için kullanılır.",
        "Ağrı sinyalleri, ilaç verildiğinde daha hızlı taşınır.",
      ],
      "'blocks the nerves' 'sinirleri engeller', 'that carry pain signals from the eye to the brain' 'ağrı sinyallerini gözden beyne taşıyan' demektir.",
    ],
    [
      "Hamilton's investigations persuaded several states to pass laws protecting workers.",
      [
        "Hamilton'un araştırmaları, birkaç eyaleti işçileri koruyan yasalar çıkarmaya ikna etti.",
        "Hamilton'un araştırmaları, birkaç eyaletin işçileri koruyan yasaları kaldırmasına yol açtı.",
        "Birkaç eyalet, Hamilton'u işçileri korumak için araştırma yapmaya ikna etti.",
        "İşçiler, Hamilton'un araştırmalarını yasalarla engellemeye çalıştı.",
        "Hamilton'un araştırmaları hiçbir eyalette yasal bir değişikliğe yol açmadı.",
      ],
      "'persuaded several states to pass laws' 'birkaç eyaleti yasalar çıkarmaya ikna etti', 'protecting workers' 'işçileri koruyan' demektir.",
    ],
  ],
  trEn: [
    [
      "Cerrahi eldivenler, ameliyattan sonra görülen enfeksiyonları azalttı.",
      [
        "Surgical gloves reduced the infections seen after operations.",
        "Surgical gloves increased the infections seen after operations.",
        "Infections after operations made surgical gloves unnecessary.",
        "Surgical gloves were worn only after operations had finished.",
        "Infections were rarely seen after operations before gloves were introduced.",
      ],
      "'Cerrahi eldivenler' 'surgical gloves', 'ameliyattan sonra görülen enfeksiyonları azalttı' 'reduced the infections seen after operations' karşılığıdır.",
    ],
    [
      "Forseps, zor doğumlarda bebeğin doğmasına yardım etmek için kullanılır.",
      [
        "Forceps are used to help deliver the baby in difficult births.",
        "Forceps are used to prevent difficult births from happening.",
        "Difficult births make it impossible to use forceps.",
        "Babies born in difficult births are later examined with forceps.",
        "Forceps are used only when the birth is easy.",
      ],
      "'zor doğumlarda' 'in difficult births', 'bebeğin doğmasına yardım etmek için kullanılır' 'are used to help deliver the baby' karşılığıdır.",
    ],
    [
      "Blackwell, Amerika'da tıp diploması alan ilk kadındı.",
      [
        "Blackwell was the first woman to receive a medical degree in America.",
        "Blackwell was the first woman to open a medical school in America.",
        "Blackwell was the last woman to study medicine in America.",
        "Blackwell refused to receive a medical degree in America.",
        "Blackwell received her medical degree in England before moving to America.",
      ],
      "'tıp diploması alan ilk kadın' 'the first woman to receive a medical degree' karşılığıdır.",
    ],
    [
      "Yeni yasa, tıp okullarına sahipsiz cesetleri kullanma izni verdi.",
      [
        "The new law allowed medical schools to use unclaimed bodies.",
        "The new law prevented medical schools from using any bodies.",
        "Medical schools asked the new law to protect unclaimed bodies.",
        "The new law required medical schools to bury unclaimed bodies.",
        "Unclaimed bodies were sold to medical schools before the new law.",
      ],
      "'tıp okullarına … kullanma izni verdi' 'allowed medical schools to use', 'sahipsiz cesetler' 'unclaimed bodies' karşılığıdır.",
    ],
    [
      "Kokain, bir zamanlar göz ameliyatlarında yerel anestezik olarak kullanılıyordu.",
      [
        "Cocaine was once used as a local anaesthetic in eye operations.",
        "Cocaine is still the most common anaesthetic in eye operations.",
        "Eye operations were once performed to treat cocaine addiction.",
        "Cocaine was never used in medicine because it was too dangerous.",
        "Local anaesthetics were developed to replace eye operations.",
      ],
      "'bir zamanlar … kullanılıyordu' 'was once used', 'yerel anestezik olarak' 'as a local anaesthetic' karşılığıdır.",
    ],
    [
      "Folik asit, gebeliğin ilk haftalarında özellikle önemlidir.",
      [
        "Folic acid is especially important in the first weeks of pregnancy.",
        "Folic acid is important only in the last weeks of pregnancy.",
        "Folic acid should be avoided during the first weeks of pregnancy.",
        "The first weeks of pregnancy are not affected by folic acid at all.",
        "Folic acid becomes important only after the baby is born.",
      ],
      "'gebeliğin ilk haftalarında' 'in the first weeks of pregnancy', 'özellikle önemlidir' 'is especially important' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Elizabeth Blackwell was born in England in 1821 and moved with her family to the United States as a child. She decided to become a doctor partly after a dying friend told her that she would have suffered less if she had been treated by a woman. At the time, no American medical school had ever admitted a woman, and Blackwell's applications were rejected by more than a dozen institutions. In 1847, Geneva Medical College in New York State passed her application to its students, who were asked to vote on whether to accept her. Believing that the request was a joke played by a rival college, they voted in favour. Blackwell faced hostility and isolation at first, but she gradually won the respect of many classmates, and in 1849 she graduated at the top of her class, becoming the first woman to receive a medical degree in the United States. Because hospitals would not employ her, she continued her training in Europe. She later opened a small clinic in New York and, with her sister Emily, who had also become a doctor, founded a hospital run by women for poor women and children, which also trained female doctors.",
      questions: [
        [
          "According to the passage, one reason Blackwell decided to study medicine was that ----.",
          [
            "a friend suggested that women would benefit from female doctors",
            "her father was a famous doctor in England",
            "she had been offered a place at a college in Europe",
            "her sister had already become a doctor",
            "she wanted to play a joke on a rival college",
          ],
          "Metne göre ölmek üzere olan bir arkadaşı, bir kadın tarafından tedavi edilseydi daha az acı çekeceğini söylemişti.",
        ],
        [
          "It can be understood from the passage that Blackwell was admitted to Geneva Medical College ----.",
          [
            "because the students did not take her application seriously",
            "after the college's teachers voted in her favour",
            "because she had already studied medicine in Europe",
            "although the students voted against her",
            "after she had founded her own hospital",
          ],
          "Öğrencilerin başvurunun rakip bir kolejin şakası olduğunu düşünerek lehte oy vermesi, başvuruyu ciddiye almadıklarını gösterir.",
        ],
        [
          "The hospital founded by Blackwell and her sister ----.",
          [
            "both treated patients and educated women doctors",
            "was open only to wealthy patients",
            "was located in England",
            "refused to employ female staff",
            "was closed soon after it opened",
          ],
          "Metinde hastanenin yoksul kadın ve çocukları tedavi ettiği ve kadın doktorlar yetiştirdiği belirtilir.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, Edinburgh was one of the leading centres of medical education in Europe, and its anatomy schools needed a constant supply of human bodies for dissection. By law, however, only the bodies of executed criminals could be used, and these were far too few. As a result, a trade developed in bodies stolen from fresh graves by so-called 'resurrection men', and families sometimes guarded the graves of their relatives at night or placed iron cages over them. In 1827 and 1828, two men, William Burke and William Hare, went further. After selling the body of a lodger who had died of natural causes, they began to murder vulnerable people, usually by suffocation so that the bodies showed no signs of violence, and sold them to a well-known anatomy teacher. They killed sixteen people before they were caught. Hare gave evidence against his partner in return for his freedom, and Burke was hanged; his own body was then publicly dissected. The case caused public outrage and contributed to the passing of the Anatomy Act of 1832, which allowed medical schools to use unclaimed bodies from workhouses and hospitals, and largely ended the trade in stolen corpses.",
      questions: [
        [
          "According to the passage, the trade in stolen bodies developed because ----.",
          [
            "the legal supply of bodies did not meet the demand",
            "families wanted to sell the bodies of their relatives",
            "medical students refused to study anatomy",
            "criminals were no longer executed in Scotland",
            "anatomy teachers were paid by the government",
          ],
          "Metne göre yasal olarak yalnızca idam edilen suçluların cesetleri kullanılabiliyordu ve bunlar çok azdı.",
        ],
        [
          "The writer mentions iron cages over graves in order to show ----.",
          [
            "how people tried to protect the dead from theft",
            "how bodies were transported to medical schools",
            "what happened to executed criminals",
            "how Burke and Hare killed their victims",
            "why the Anatomy Act was passed",
          ],
          "Ailelerin geceleri mezarları beklemesi ya da üzerlerine demir kafes koyması, ölüleri hırsızlığa karşı koruma çabasını gösterir.",
        ],
        [
          "It can be inferred from the passage that Burke and Hare chose suffocation because ----.",
          [
            "it made the deaths harder to detect",
            "it was the method used by resurrection men",
            "anatomy teachers asked them to use it",
            "it was the law in Edinburgh",
            "their victims were already ill",
          ],
          "Cesetlerde şiddet izi kalmaması için boğmayı seçmeleri, ölümlerin fark edilmesini zorlaştırmak istediklerini gösterir.",
        ],
      ],
    },
    {
      text:
        "Until the late nineteenth century, the only way to prevent pain during surgery was to give a general anaesthetic such as ether or chloroform, which made the patient unconscious. For eye operations, this created a problem, because patients often vomited as they woke up, and the movement could damage the delicate stitches. In 1884, a young Austrian doctor named Carl Koller was working in Vienna with his friend Sigmund Freud, who was studying the effects of cocaine, a substance extracted from the leaves of the coca plant. Koller noticed that the drug made his tongue numb and realised that it might be used to block pain in a specific part of the body. He placed a solution of cocaine in the eyes of frogs and other animals, and then in his own eyes, and found that he could touch the surface without feeling anything. His findings were presented at a conference later that year and spread rapidly around the world. Cocaine soon became widely used as a local anaesthetic in eye surgery and dentistry. However, it was later recognised to be highly addictive and toxic, and it was gradually replaced by safer synthetic drugs such as procaine, introduced in 1905.",
      questions: [
        [
          "According to the passage, general anaesthesia caused problems in eye surgery because ----.",
          [
            "patients' vomiting after waking could harm the stitches",
            "patients could still feel pain during the operation",
            "the eyes were damaged by ether and chloroform",
            "doctors were unable to see the surface of the eye",
            "it was too expensive for most hospitals",
          ],
          "Metne göre hastalar uyanırken sık sık kusuyor ve bu hareket hassas dikişlere zarar verebiliyordu.",
        ],
        [
          "Koller first realised the potential of cocaine when ----.",
          [
            "he noticed that it caused numbness in his tongue",
            "Freud asked him to test it on patients",
            "he read about it at a conference",
            "a patient complained about eye pain",
            "he saw it used in dentistry",
          ],
          "Metinde Koller'in ilacın dilini uyuşturduğunu fark ettiği ve bunun belirli bir bölgede ağrıyı engelleyebileceğini düşündüğü belirtilir.",
        ],
        [
          "It can be understood from the passage that cocaine was eventually replaced because ----.",
          [
            "its harmful effects became clear",
            "it did not work in eye operations",
            "it was too difficult to extract",
            "Koller stopped producing it",
            "patients preferred general anaesthesia",
          ],
          "Kokainin bağımlılık yapıcı ve zehirli olduğunun anlaşılması üzerine daha güvenli ilaçlarla değiştirildiği belirtilir.",
        ],
      ],
    },
    {
      text:
        "Spina bifida is a birth defect in which the bones of the spine do not close completely around the spinal cord during the early weeks of pregnancy. It belongs to a group of conditions known as neural tube defects, which can cause paralysis, problems with bladder control and, in the most severe cases, death. In the 1980s and early 1990s, studies showed that women who took the B vitamin folic acid before and during early pregnancy were much less likely to have a baby with such a defect. Because the spine forms within the first four weeks, often before a woman knows that she is pregnant, health authorities advised all women who might become pregnant to take supplements. However, many pregnancies are unplanned, and this advice alone had limited effect. In 1998, the United States and Canada therefore began to require that folic acid be added to flour and other cereal products. Within a few years, the rate of neural tube defects had fallen by around a quarter in the United States and by nearly half in parts of Canada. Today, more than eighty countries fortify flour in this way, although some others have been slower to follow, partly because of concerns about adding substances to the whole population's food.",
      questions: [
        [
          "According to the passage, folic acid must be taken early because ----.",
          [
            "the spine develops before many women realise they are pregnant",
            "it takes several months to be absorbed by the body",
            "it is only available at the start of pregnancy",
            "it is harmful in the later stages of pregnancy",
            "babies cannot absorb it after birth",
          ],
          "Metne göre omurga ilk dört hafta içinde, çoğu zaman kadın hamile olduğunu bilmeden önce oluşur.",
        ],
        [
          "The writer mentions unplanned pregnancies in order to explain ----.",
          [
            "why advice to take supplements was not enough",
            "why spina bifida is a common condition",
            "how folic acid is added to flour",
            "why some countries oppose fortification",
            "how the spine forms in early pregnancy",
          ],
          "Pek çok gebeliğin plansız olması, takviye alma tavsiyesinin tek başına sınırlı etki yapmasının nedenini açıklar.",
        ],
        [
          "It can be inferred from the passage that the countries which have not fortified flour ----.",
          [
            "may be concerned about changing everyone's diet",
            "have no cases of spina bifida",
            "do not grow wheat or other cereals",
            "have banned folic acid supplements",
            "were the first to discover the link",
          ],
          "Bazı ülkelerin kısmen tüm halkın gıdasına madde eklenmesi kaygısıyla daha yavaş davranması, herkesin beslenmesini değiştirmekten çekindiklerini gösterir.",
        ],
      ],
    },
    {
      text:
        "Alice Hamilton, born in 1869, was one of the founders of industrial medicine in the United States. After training as a doctor, she lived and worked at Hull House, a settlement in a poor area of Chicago, where she met many immigrant families whose members suffered from illnesses that seemed to be connected with their work. At the time, American doctors paid little attention to such problems, and employers rarely accepted responsibility for them. In 1910, Hamilton was appointed to lead a survey of industrial diseases in Illinois. Rather than relying on official records, she visited factories, mines and workers' homes, and examined hospital records to trace cases of poisoning by lead and other substances. She found lead being used in dozens of industries, from paint and batteries to pottery, and showed how workers absorbed it through dust and fumes. Her reports were based on careful evidence, and she often persuaded employers to improve conditions by showing them the facts rather than by attacking them. In 1919, she became the first woman appointed to the faculty of Harvard University, although she was not allowed to attend certain events or to march in graduation ceremonies.",
      questions: [
        [
          "According to the passage, Hamilton became interested in industrial diseases while ----.",
          [
            "working with poor immigrant families in Chicago",
            "teaching students at Harvard University",
            "running a paint factory in Illinois",
            "studying medicine in Europe",
            "working as a miner",
          ],
          "Metne göre Hamilton, Chicago'da yoksul bir bölgedeki Hull House'ta çalışırken işleriyle bağlantılı hastalıklardan muzdarip göçmen ailelerle tanıştı.",
        ],
        [
          "It can be understood from the passage that Hamilton's methods ----.",
          [
            "relied on direct observation rather than official figures",
            "involved attacking employers in the newspapers",
            "were based mainly on interviews with factory owners",
            "ignored hospital records",
            "were rejected by most employers",
          ],
          "Resmî kayıtlara güvenmek yerine fabrikaları, madenleri ve işçi evlerini ziyaret etmesi, yönteminin doğrudan gözleme dayandığını gösterir.",
        ],
        [
          "The writer mentions the restrictions Hamilton faced at Harvard in order to show that ----.",
          [
            "she still faced discrimination despite her achievement",
            "she did not want to teach at the university",
            "Harvard had many female teachers at the time",
            "she preferred working in factories",
            "she was dismissed after a short time",
          ],
          "Harvard'da ilk kadın öğretim üyesi olmasına rağmen bazı etkinliklere katılmasına izin verilmemesi, başarısına rağmen ayrımcılıkla karşılaştığını gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1897, the Polish-German surgeon Jan Mikulicz began to wear a cloth mask over his mouth during operations. ---- The practice spread slowly, and masks did not become standard in operating theatres until the 1920s.",
      [
        "He believed that droplets from the surgeon's breath could infect wounds.",
        "Operating theatres were often built with large windows to let in natural light.",
        "Many surgeons of the time were also skilled teachers and wrote textbooks.",
        "Cloth was produced in large quantities in the factories of central Europe.",
        "Patients often waited many weeks before they could have an operation.",
      ],
      "Boşluktan önce Mikulicz'in maske taktığı anlatılır; boşluğa bunun nedenini, yani cerrahın nefesindeki damlacıkların yaraları enfekte edebileceği inancını anlatan cümle gelmelidir.",
    ],
    [
      "The Canadian physician William Osler believed that medical students learned best from patients rather than from books. ---- This approach, known as bedside teaching, is still central to medical education.",
      [
        "He therefore took his students onto the hospital wards to examine patients themselves.",
        "Osler was born in Canada and later worked in the United States and England.",
        "Many medical textbooks of the time were long and difficult to understand.",
        "Hospital wards were often crowded and noisy in the nineteenth century.",
        "Medical students usually study for five or six years before they qualify.",
      ],
      "Boşluktan sonra 'This approach' (bu yaklaşım) yatak başı eğitim olarak adlandırılır; boşluğa Osler'in öğrencilerini hastaları bizzat muayene etmeleri için koğuşlara götürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "The textbook known as Gray's Anatomy was first published in 1858. ---- It has since been revised dozens of times and remains in use today.",
      [
        "Its clear text and detailed illustrations made it popular with students.",
        "Anatomy is the study of the structure of living things.",
        "Many medical students find anatomy one of the hardest subjects.",
        "Printing became much cheaper in the nineteenth century.",
        "The author died young, only a few years after the book appeared.",
      ],
      "Boşluktan sonra kitabın onlarca kez gözden geçirilip hâlâ kullanıldığı söylenir; boşluğa kitabın açık metni ve ayrıntılı çizimleri sayesinde öğrenciler arasında popüler olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "An epidural is a type of anaesthetic often used to relieve pain during childbirth. ---- As a result, the mother remains awake and can take an active part in the birth.",
      [
        "It numbs the lower part of the body without affecting consciousness.",
        "Childbirth can last for many hours, especially for a first baby.",
        "Some mothers choose a home birth attended by a midwife.",
        "Hospitals usually have special rooms for women in labour.",
        "Many mothers choose to breastfeed their babies after birth.",
      ],
      "Boşluktan sonra 'As a result' ile annenin uyanık kaldığı söylenir; boşluğa epiduralin bilinci etkilemeden vücudun alt kısmını uyuşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Babies with a low birth weight, usually defined as less than 2.5 kilograms, face a higher risk of health problems. ---- Improving the health and diet of pregnant women is therefore an important way of reducing these risks.",
      [
        "Low birth weight is often linked to the mother's poor nutrition, smoking or illness.",
        "Most babies weigh between three and four kilograms when they are born.",
        "Babies usually double their birth weight within the first five months.",
        "Many parents weigh their babies regularly to check their growth.",
        "Twins are often born earlier and smaller than single babies.",
      ],
      "Boşluktan sonra 'therefore' ile gebe kadınların sağlığını ve beslenmesini iyileştirmenin önemi vurgulanır; boşluğa düşük doğum ağırlığının annenin kötü beslenmesi, sigara içmesi ya da hastalığıyla bağlantılı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "The caesarean section is a surgical procedure in which a baby is delivered through a cut in the mother's abdomen. ---- Nowadays, however, it is performed millions of times a year and is generally very safe.",
      [
        "For centuries, it was performed only when the mother had died or was dying.",
        "The procedure is named after a Latin word whose meaning is still debated.",
        "Most babies are born naturally after about forty weeks of pregnancy.",
        "Many hospitals now allow fathers to be present during the birth.",
        "Doctors usually recommend rest for several weeks after any operation.",
      ],
      "Boşluktan sonra 'however' ile bugün yılda milyonlarca kez yapıldığı ve genellikle güvenli olduğu söylenir; boşluğa bununla karşıtlık oluşturan geçmiş durumu, yani yüzyıllarca yalnızca anne ölmüşken ya da ölmek üzereyken yapıldığını anlatan cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Patient wristbands help hospital staff to identify patients correctly.",
        "They usually show the patient's name, date of birth and hospital number.",
        "Some also carry a barcode that can be scanned before medicines are given.",
        "Many people wear watches on their left wrist.",
        "Using wristbands has helped to reduce serious errors in hospitals.",
      ],
      odd: 3,
      why: "Parça hasta bilekliklerini anlatır. İnsanların saatlerini sol bileklerine taktığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Surgeons and operating theatre staff usually wear green or blue clothing.",
        "Painters often mix colours on a wooden palette.",
        "These colours are thought to reduce glare under the bright lights.",
        "They may also help surgeons to see the red of blood more clearly.",
        "White clothing, which was common in the past, could tire the eyes.",
      ],
      odd: 1,
      why: "Parça ameliyathane giysilerinin renklerini anlatır. Ressamların tahta palet üzerinde renk karıştırdığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Bad breath is a common problem that can affect people of all ages.",
        "In most cases, it is caused by bacteria in the mouth.",
        "Chewing gum was first sold commercially in the nineteenth century.",
        "Brushing the teeth and tongue regularly usually solves the problem.",
        "Persistent bad breath, however, may be a sign of gum disease.",
      ],
      odd: 2,
      why: "Parça ağız kokusunu anlatır. Sakızın on dokuzuncu yüzyılda ticari olarak satılmaya başlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hospital food plays an important part in patients' recovery.",
        "Patients who eat well tend to heal more quickly and leave hospital sooner.",
        "However, many patients do not eat enough during their stay.",
        "Some hospitals now offer a wider choice of meals to encourage them.",
        "Restaurants in large cities often serve food from many countries.",
      ],
      odd: 4,
      why: "Parça hastane yemeklerinin iyileşmedeki önemini anlatır. Büyük kentlerdeki restoranların farklı ülkelerin yemeklerini sunduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Night sweats are episodes of heavy sweating during sleep.",
        "They can be caused by infections, hormonal changes or certain medicines.",
        "Most people change their bedding once a week.",
        "Occasionally, they point to an underlying disease that needs treatment.",
        "People who experience them regularly should consult a doctor.",
      ],
      odd: 2,
      why: "Parça gece terlemelerini anlatır. İnsanların çoğunun yatak takımlarını haftada bir değiştirdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Medical students today often practise on realistic models before treating real patients.",
        "Some models can breathe, bleed and respond to medicines.",
        "This allows students to make mistakes without putting anyone at risk.",
        "Wax museums display models of famous people.",
        "Studies suggest that training with models improves students' confidence and skills.",
      ],
      odd: 3,
      why: "Parça tıp öğrencilerinin gerçekçi modellerle pratik yapmasını anlatır. Balmumu müzelerinde ünlülerin modellerinin sergilendiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
