import type { YokdilDeneme } from "./types";

export const SAGLIK_21: YokdilDeneme = {
  no: 21,
  field: "saglik",
  vocab: [
    [
      "Koch showed that a particular bacterium was the ---- of tuberculosis by growing it in pure culture.",
      ["cause", "cure", "symptom", "victim", "treatment"],
      "Koch'un belirli bir bakterinin tüberkülozun 'nedeni' (cause) olduğunu saf kültürde üreterek gösterdiği anlatılır.",
    ],
    [
      "The cells continued to ---- in the laboratory long after the patient's death.",
      ["multiply", "disappear", "recover", "complain", "relax"],
      "Hücrelerin hastanın ölümünden çok sonra laboratuvarda 'çoğalmaya' (multiply) devam ettiği anlatılır.",
    ],
    [
      "Doctors had to ---- the patient's immune system with drugs so that his body would not reject the new heart.",
      ["suppress", "strengthen", "examine", "replace", "describe"],
      "Vücudun yeni kalbi reddetmemesi için doktorların hastanın bağışıklık sistemini ilaçlarla 'baskılamak' (suppress) zorunda kaldığı anlatılır.",
    ],
    [
      "Radiation can be ---- to people who are exposed to it over long periods without protection.",
      ["harmful", "grateful", "familiar", "reluctant", "eager"],
      "Uzun süre korumasız biçimde maruz kalanlar için radyasyonun 'zararlı' (harmful) olabileceği anlatılır.",
    ],
    [
      "The children in the trial were ---- assigned to receive either the vaccine or a harmless injection.",
      ["randomly", "rarely", "loudly", "proudly", "angrily"],
      "Denemedeki çocukların aşıya ya da zararsız bir enjeksiyona 'rastgele' (randomly) atandığı anlatılır.",
    ],
    [
      "It took several weeks for the patient to ---- the operation.",
      ["get over", "put off", "give up", "look into", "run out of"],
      "Hastanın ameliyatı 'atlatmasının' (get over) birkaç hafta sürdüğü anlatılır.",
    ],
  ],
  grammar: [
    [
      "The Canon of Medicine ---- into Latin in the twelfth century and used in European universities for centuries.",
      ["was translated", "translated", "has translated", "was translating", "had translated"],
      "Kitap çevrilen bir eserdir ve olay geçmiştedir: edilgen geçmiş zaman 'was translated'.",
    ],
    [
      "If the trial had not shown the vaccine to be safe and effective, mass vaccination ---- .",
      ["would not have begun so quickly", "would not begin so quickly", "will not begin so quickly", "did not begin so quickly", "had not begun so quickly"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have + V3' ister.",
    ],
    [
      "By the time the first heart transplant was performed in 1967, surgeons ---- the technique on animals for years.",
      ["had been practising", "have been practising", "are practising", "will practise", "practise"],
      "Geçmişteki bir olaydan önce süregelen eylem: Past Perfect Continuous 'had been practising'.",
    ],
    [
      "Marie Curie, ---- research on radioactivity won her two Nobel Prizes, also organised mobile X-ray units during the war.",
      ["whose", "who", "which", "whom", "where"],
      "Araştırma Curie'ye aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until the 1950s ---- scientists able to keep human cells alive and dividing outside the body.",
      ["were", "did", "had", "have", "they were"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur: 'were scientists able'.",
    ],
    [
      "The disease spread ---- quickly that many hospitals ran out of beds.",
      ["so", "such", "too", "very", "as"],
      "Zarftan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the patient lived for only eighteen days, the operation was considered a success.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Hastanın yalnızca on sekiz gün yaşaması ile ameliyatın başarılı sayılması zıttır: 'Although'.",
    ],
    [
      "Avicenna is said to have memorised the whole Qur'an by the age of ten and ---- medicine at sixteen.",
      ["to have begun studying", "began studying", "begins to study", "beginning to study", "has begun studying"],
      "'is said to have memorised … and to have begun' yapısında paralellik korunur.",
    ],
    [
      "The cells ---- from the tumour were sent to laboratories around the world.",
      ["taken", "taking", "which took", "to take", "have taken"],
      "Hücreler alınan şeylerdir; edilgen anlamlı geçmiş ortaç 'taken' gerekir.",
    ],
    [
      "Koch was able to see the bacteria only after he ---- a new method of staining them.",
      ["had developed", "develops", "will develop", "has developed", "is developing"],
      "Bakterileri görmesinden önce tamamlanmış eylem: 'had developed'.",
    ],
    [
      "Neither the parents ---- the doctors knew which children had received the real vaccine.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Patients are given drugs ---- their bodies do not reject the transplanted organ.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some early researchers handled radioactive materials as if they ---- completely harmless.",
      ["were", "are", "will be", "have been", "being"],
      "'as if' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The earlier the condition is diagnosed, ---- support the child and family can receive.",
      ["the sooner", "sooner", "the soonest", "more soon", "the more soon"],
      "'The earlier …, the sooner …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Ibn Sina, whom medieval Europeans called Avicenna, was born near Bukhara, in present-day Uzbekistan, in about 980. He was a remarkably gifted student, and by his own account he had mastered logic, mathematics and medicine by the age of eighteen. He worked as a physician and adviser to several rulers, {1} his life was often unsettled by political conflicts. His most famous medical work, The Canon of Medicine, was an enormous encyclopaedia in five books {2} brought together the medical knowledge of the Greek, Roman, Persian and Indian traditions, together with what he himself had observed. The work discussed hundreds of illnesses and remedies and discussed topics such as anatomy, hygiene and the importance of diet and exercise. Ibn Sina also recognised that some diseases could be spread through water and soil, and he recommended that new drugs should be tested carefully {3} they were widely used. After the Canon was translated into Latin in the twelfth century, it became one of the main textbooks in European medical schools, {4} it remained in use until the seventeenth century. {5}, some of its ideas, based on the ancient theory of the four humours, were eventually abandoned as modern science developed.",
      blanks: [
        [
          "(21) ----",
          ["although", "because", "so that", "unless", "in case"],
          "Hükümdarlara hekimlik yapması ile hayatının siyasi çatışmalarla sık sık sarsılması zıttır: 'although'.",
        ],
        [
          "(22) ----",
          ["that", "who", "where", "whose", "what"],
          "Boşluk 'an encyclopaedia' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(23) ----",
          ["before", "after", "unless", "although", "whereas"],
          "Yeni ilaçların yaygın kullanılmadan 'önce' dikkatle denenmesi önerilir: 'before'.",
        ],
        [
          "(24) ----",
          ["and", "but", "unless", "although", "or"],
          "Ana ders kitabı olması ve on yedinci yüzyıla kadar kullanılması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["However", "Therefore", "For example", "Similarly", "In addition"],
          "Kitabın uzun süre kullanılması ile bazı fikirlerinin sonunda terk edilmesi karşıtlıktır: 'However'.",
        ],
      ],
    },
    {
      text:
        "In the 1870s and 1880s, the German doctor Robert Koch played a central role in proving that specific microorganisms cause specific diseases. Working at first in a small laboratory in his home, he studied anthrax, a disease of cattle and sheep that can also affect humans. He showed that the anthrax bacterium could form tough spores {1} survived in the soil for long periods, which explained how the disease could appear in fields where infected animals had once grazed. In 1882, he announced that he had identified the bacterium {2} causes tuberculosis, which at that time killed more Europeans than almost any other illness. To do this, he had to develop new methods of staining bacteria so that they could be seen under the microscope, {3} of growing them on solid materials. Koch and his colleagues also set out a series of conditions, later known as Koch's postulates, for proving that a particular organism causes a disease: it must be found in every case of the disease, it must be grown in pure culture, and it must cause the same disease {4} introduced into a healthy animal. These postulates were enormously influential, {5} scientists later found that they do not apply to every disease; some microorganisms, for example, cannot be grown in the laboratory.",
      blanks: [
        [
          "(26) ----",
          ["that", "who", "where", "whose", "what"],
          "Boşluk 'spores' sözcüğünü niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(27) ----",
          ["which", "who", "where", "whose", "whom"],
          "Boşluk 'the bacterium' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(28) ----",
          ["as well as", "instead", "rather than", "in spite", "because"],
          "Boyama yöntemlerine ek olarak üretme yöntemleri geliştirmesi anlatılır: 'as well as'.",
        ],
        [
          "(29) ----",
          ["when", "unless", "although", "because", "so that"],
          "Organizmanın sağlıklı bir hayvana verildiği 'zaman' aynı hastalığa yol açması gerekir: 'when'.",
        ],
        [
          "(30) ----",
          ["although", "because", "so", "unless", "since"],
          "Kuralların çok etkili olması ile her hastalığa uymadığının anlaşılması zıttır: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Henrietta Lacks's cells made a huge contribution to medical research, ----.",
      [
        "her family was not told about their use for many years",
        "the cells were taken from a tumour in her cervix",
        "she was treated at a hospital in Baltimore",
        "many laboratories requested samples of the cells",
        "the cells were used to develop vaccines",
      ],
      "'Although' zıtlık ister: hücreleri tıbbi araştırmalara büyük katkı yapsa da ailesine yıllarca bilgi verilmedi.",
    ],
    [
      "If doctors had had better drugs to prevent rejection in 1967, ----.",
      [
        "the first heart transplant patient might have lived much longer",
        "the operation will be performed again tomorrow in the same hospital",
        "most surgeons refuse to work on the human heart",
        "the patient had been a grocer from Cape Town",
        "the heart is a muscle that pumps blood",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister: ilk kalp nakli hastası çok daha uzun yaşayabilirdi.",
    ],
    [
      "The polio vaccine trial of 1954 was designed ----.",
      [
        "so that its results could be trusted by doctors and the public",
        "although nobody in the country was worried about the disease",
        "unless the parents of the children refused to take part",
        "because the vaccine had already been in use for many years",
        "even if most children did not want an injection",
      ],
      "Denemenin amacı sonuçların doktorlar ve kamuoyu tarafından güvenilir bulunmasıdır: 'so that'.",
    ],
    [
      "Since Koch identified the cause of tuberculosis in 1882, ----.",
      [
        "scientists have developed vaccines and drugs against the disease",
        "the disease had been one of the main causes of death",
        "most patients would have recovered without any treatment",
        "the bacterium will be studied in many new laboratories",
        "Koch was working in a small laboratory in his home",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have developed'.",
    ],
    [
      "Unless workers using X-rays are properly protected, ----.",
      [
        "they may suffer serious damage from long exposure",
        "the machines would have been switched off at night",
        "most hospitals had stopped using them completely",
        "the images will be printed on special paper",
        "the war was fought in many parts of Europe",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: uygun biçimde korunmadıkça uzun maruziyetten ciddi zarar görebilirler.",
    ],
    [
      "The demand for HeLa cells was so great ----.",
      [
        "that a factory was set up to produce them in large quantities",
        "because they continued to divide in the laboratory for many years",
        "although they had been taken without permission",
        "while scientists were looking for a polio vaccine",
        "unless other cells with the same qualities were found by scientists",
      ],
      "'so great that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Researchers have found that when children with Down syndrome receive early support, ----.",
      [
        "their development and independence can improve considerably",
        "they would have been born with an extra chromosome",
        "most of them had been diagnosed before birth",
        "the condition will disappear completely within a few years",
        "the syndrome was first described in the nineteenth century",
      ],
      "'when' ile genel bir bulgu anlatılır: erken destek aldıklarında gelişimleri ve bağımsızlıkları önemli ölçüde iyileşebilir.",
    ],
    [
      "So many soldiers were helped by the mobile X-ray units ----.",
      [
        "that they became an essential part of military medicine",
        "because they could find bullets and broken bones",
        "although the equipment was heavy and difficult to move",
        "while Marie Curie learned to drive a car",
        "unless the units were attacked",
      ],
      "'So many … that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While the Canon of Medicine was based partly on ancient Greek ideas, ----.",
      [
        "it also included many of Ibn Sina's own observations",
        "Bukhara was an important city on the Silk Road",
        "the Greeks had built many schools of philosophy",
        "medicine was also studied in India and Persia",
        "Latin was the language of European universities",
      ],
      "'While' iki durumu karşılaştırır: kitap kısmen antik Yunan fikirlerine dayanırken İbn Sina'nın kendi gözlemlerini de içeriyordu.",
    ],
    [
      "Once the results of the trial had been announced in 1955, ----.",
      [
        "millions of children were vaccinated across the country",
        "the vaccine will be tested on a small number of monkeys",
        "the parents would have kept their children at home",
        "polio is caused by a virus that attacks the nerves",
        "most of the children had been born in the 1940s",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: ülke genelinde milyonlarca çocuk aşılandı.",
    ],
    [
      "No sooner had news of the transplant spread ----.",
      [
        "than surgeons in other countries began to attempt the operation",
        "when the patient had been moved to a quiet ward to recover",
        "that the heart will stop beating again a few hours after the operation",
        "before the surgeon had trained in the United States",
        "so the hospital became famous throughout South Africa and abroad",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Koch argued that an organism must be found in every case of a disease before it can be considered its cause.",
      [
        "Koch, bir organizmanın bir hastalığın nedeni sayılabilmesi için o hastalığın her vakasında bulunması gerektiğini savundu.",
        "Koch, bir organizmanın bir hastalığın yalnızca bazı vakalarında bulunmasının yeterli olduğunu savundu.",
        "Koch, hastalıkların organizmalar tarafından değil kötü havadan kaynaklandığını savundu.",
        "Koch, her hastalığın birden fazla organizma tarafından oluşturulduğunu kanıtladı.",
        "Koch, hastalıkların nedenlerinin hiçbir zaman bulunamayacağını düşünüyordu.",
      ],
      "'must be found in every case of a disease' 'hastalığın her vakasında bulunmalı', 'before it can be considered its cause' 'nedeni sayılabilmesi için' demektir.",
    ],
    [
      "The cells were taken without the patient's knowledge, which was common practice at the time.",
      [
        "Hücreler hastanın bilgisi olmadan alındı ve bu, o dönemde yaygın bir uygulamaydı.",
        "Hücreler hastanın izniyle alındı ve bu, o dönemde çok nadir bir uygulamaydı.",
        "Hasta, hücrelerinin alınmasını kendisi istedi.",
        "O dönemde hastalardan hücre almak kesinlikle yasaktı.",
        "Hücreler, hasta öldükten sonra ailesinin izniyle alındı.",
      ],
      "'were taken without the patient's knowledge' 'hastanın bilgisi olmadan alındı', 'which was common practice at the time' 'bu, o dönemde yaygın bir uygulamaydı' demektir.",
    ],
    [
      "Neither the children's families nor the doctors giving the injections knew who had received the vaccine.",
      [
        "Ne çocukların aileleri ne de enjeksiyonları yapan doktorlar kimin aşı aldığını biliyordu.",
        "Çocukların aileleri kimin aşı aldığını biliyordu ama doktorlar bilmiyordu.",
        "Enjeksiyonları yapan doktorlar, aşıyı alan çocukları ailelerine bildirdi.",
        "Hem aileler hem de doktorlar kimin aşı aldığını biliyordu.",
        "Çocuklar, hangi enjeksiyonu istediklerini kendileri seçti.",
      ],
      "'Neither … nor …' 'ne … ne de …', 'knew who had received the vaccine' 'kimin aşı aldığını biliyordu' demektir.",
    ],
    [
      "The patient died of pneumonia because the drugs used to prevent rejection had weakened his immune system.",
      [
        "Reddi önlemek için kullanılan ilaçlar bağışıklık sistemini zayıflattığı için hasta zatürreden öldü.",
        "Hasta zatürreden kurtuldu çünkü ilaçlar bağışıklık sistemini güçlendirmişti.",
        "Hastanın vücudu yeni kalbi reddettiği için ilaçlar kullanılmadı.",
        "Zatürre, hastanın yeni kalbini reddetmesini önledi.",
        "Hasta, ilaçları almayı reddettiği için zatürreye yakalandı.",
      ],
      "'died of pneumonia' 'zatürreden öldü', 'because the drugs used to prevent rejection had weakened his immune system' 'reddi önlemek için kullanılan ilaçlar bağışıklık sistemini zayıflattığı için' demektir.",
    ],
    [
      "The vehicles allowed surgeons near the front to locate bullets and fragments inside wounded soldiers' bodies.",
      [
        "Araçlar, cepheye yakın cerrahların yaralı askerlerin vücutlarındaki kurşun ve parçaların yerini saptamasını sağladı.",
        "Araçlar, yaralı askerleri cepheden uzaktaki hastanelere taşımak için kullanıldı.",
        "Cerrahlar, kurşunları bulmak için araçlara ihtiyaç duymuyordu.",
        "Araçlar, askerlerin cepheye kurşun taşımasına yardım etti.",
        "Yaralı askerler, araçlarla cepheye geri gönderildi.",
      ],
      "'allowed surgeons near the front' 'cepheye yakın cerrahların … sağladı', 'to locate bullets and fragments' 'kurşun ve parçaların yerini saptamasını' demektir.",
    ],
    [
      "People with this condition have an extra copy of chromosome 21 in most or all of their cells.",
      [
        "Bu durumdaki kişilerin hücrelerinin çoğunda ya da tamamında 21. kromozomun fazladan bir kopyası bulunur.",
        "Bu durumdaki kişilerin hücrelerinde 21. kromozom hiç bulunmaz.",
        "Bu durumdaki kişilerin yalnızca birkaç hücresi kromozom içerir.",
        "Bu durum, 21 yaşından sonra ortaya çıkar.",
        "Bu durumdaki kişilerin hücrelerinde 21 kromozom bulunur.",
      ],
      "'have an extra copy of chromosome 21' '21. kromozomun fazladan bir kopyası bulunur', 'in most or all of their cells' 'hücrelerinin çoğunda ya da tamamında' demektir.",
    ],
  ],
  trEn: [
    [
      "İbn Sina'nın eseri, yüzyıllarca Avrupa tıp okullarında okutuldu.",
      [
        "Ibn Sina's work was taught in European medical schools for centuries.",
        "Ibn Sina studied medicine in Europe for several centuries.",
        "European medical schools refused to teach Ibn Sina's work.",
        "Ibn Sina's work was forgotten soon after his death.",
        "Ibn Sina founded several medical schools in Europe.",
      ],
      "'yüzyıllarca … okutuldu' 'was taught … for centuries' karşılığıdır.",
    ],
    [
      "Koch, bakterileri mikroskop altında görmek için yeni boyama yöntemleri geliştirdi.",
      [
        "Koch developed new staining methods in order to see bacteria under the microscope.",
        "Koch used the microscope to develop new kinds of paint.",
        "Koch could see bacteria without using any special methods.",
        "Koch's staining methods made bacteria impossible to see.",
        "Koch invented the microscope in order to study bacteria.",
      ],
      "'görmek için yeni boyama yöntemleri geliştirdi' 'developed new staining methods in order to see' karşılığıdır.",
    ],
    [
      "Deneme, aşının güvenli ve etkili olduğunu gösterdi.",
      [
        "The trial showed that the vaccine was safe and effective.",
        "The trial showed that the vaccine was dangerous and useless.",
        "The vaccine was never tested before it was used.",
        "The trial was stopped because the vaccine was unsafe.",
        "The trial could not show whether the vaccine worked.",
      ],
      "'güvenli ve etkili olduğunu gösterdi' 'showed that … was safe and effective' karşılığıdır.",
    ],
    [
      "Hastanın vücudu nakledilen organı reddedebilir.",
      [
        "The patient's body may reject the transplanted organ.",
        "The patient's body always accepts the transplanted organ.",
        "The transplanted organ may damage the patient's body.",
        "The patient may refuse to have the organ transplanted.",
        "Transplanted organs cannot be rejected by the body.",
      ],
      "'reddedebilir' 'may reject', 'nakledilen organı' 'the transplanted organ' karşılığıdır.",
    ],
    [
      "Curie, radyasyona uzun süre maruz kalmanın neden olduğu bir hastalıktan öldü.",
      [
        "Curie died of an illness caused by long exposure to radiation.",
        "Curie was cured of her illness by radiation.",
        "Curie avoided all exposure to radiation throughout her life.",
        "Radiation was discovered after Curie's death.",
        "Curie's illness had nothing to do with her work.",
      ],
      "'radyasyona uzun süre maruz kalmanın neden olduğu bir hastalıktan öldü' 'died of an illness caused by long exposure to radiation' karşılığıdır.",
    ],
    [
      "Bu hücreler, pek çok tıbbi buluşa katkıda bulundu.",
      [
        "These cells contributed to many medical discoveries.",
        "These cells prevented many medical discoveries.",
        "Many medical discoveries were made without any cells.",
        "These cells were discovered by many different doctors.",
        "Medical discoveries have destroyed these cells.",
      ],
      "'pek çok tıbbi buluşa katkıda bulundu' 'contributed to many medical discoveries' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the early 1950s, few illnesses frightened American parents as much as polio. Each summer, outbreaks paralysed thousands of people, most of them children, and some patients could breathe only with the help of large machines known as iron lungs. In 1952, a team led by Jonas Salk at the University of Pittsburgh produced a vaccine made from polio viruses that had been killed with a chemical, so that they could no longer cause disease but could still train the immune system. Before it could be used widely, however, it had to be tested. In 1954, one of the largest medical experiments in history began. More than one and a half million children took part, many of them in a carefully designed section of the trial in which some received the vaccine and others received an injection of a harmless solution. Neither the children's families nor the doctors knew who had received which injection. The results, announced in April 1955, showed that the vaccine was safe and highly effective, and church bells rang in some towns when the news was announced. Within a few years, the number of cases had fallen dramatically. Interviewed on television about who held the patent, Salk famously answered that the vaccine belonged to the people.",
      questions: [
        [
          "According to the passage, Salk's vaccine ----.",
          [
            "contained viruses that could no longer cause the disease",
            "was made from living viruses that caused mild illness",
            "was tested only on a small group of adults",
            "was used before any trial took place",
            "was given to patients in iron lungs",
          ],
          "Metne göre aşı, kimyasal maddeyle öldürülmüş ve artık hastalığa yol açamayan virüslerden yapılmıştı.",
        ],
        [
          "The writer mentions that neither families nor doctors knew who had received which injection in order to show ----.",
          [
            "how the trial was designed to produce reliable results",
            "that the trial was badly organised and produced confusing results",
            "why many parents refused to let their children take part",
            "that the vaccine was not effective",
            "how the vaccine was produced in large quantities by companies",
          ],
          "Kimin hangi enjeksiyonu aldığının bilinmemesi, denemenin güvenilir sonuçlar verecek biçimde tasarlandığını gösterir.",
        ],
        [
          "It can be inferred from Salk's answer about the patent that he ----.",
          [
            "did not intend to profit personally from the vaccine",
            "had sold the vaccine to a large company",
            "did not know what a patent was or how it could be obtained",
            "wanted the government to pay him for the years of research he had done",
            "was unhappy with the results of the trial",
          ],
          "Aşının halka ait olduğunu söylemesi, ondan kişisel kazanç sağlamayı amaçlamadığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1951, Henrietta Lacks, a thirty-one-year-old African American mother of five, received treatment for cervical cancer at Johns Hopkins Hospital in Baltimore. During her treatment, a doctor took a small sample of tissue from her tumour without her consent, as doctors routinely did in that era. Until then, scientists had been unable to keep human cells alive for long in the laboratory, but these cells, later named HeLa after the first two letters of her first and last names, not only survived but divided again and again. Henrietta Lacks died later that year, but her cells continued to live. Because they grew so well, they were soon sent to laboratories around the world, and they were used in the development of the polio vaccine, in research on cancer, viruses and the effects of radiation, and in thousands of other studies. Her family, however, did not learn about the cells until the 1970s, and they received no payment from the many companies that sold them. The story became widely known after the publication of a popular book in 2010, and it has raised important questions about consent, privacy and the ownership of human tissue. In 2013, an agreement was reached giving her family a voice in decisions about how the cells' genetic information is used.",
      questions: [
        [
          "According to the passage, the HeLa cells were unusual because ----.",
          [
            "they continued to divide in the laboratory",
            "they were taken from a healthy patient",
            "they could not be sent to other laboratories",
            "they died very quickly",
            "they were the first cells ever studied",
          ],
          "Metne göre o zamana kadar insan hücreleri laboratuvarda uzun süre canlı tutulamıyordu, ama bu hücreler hayatta kalıp tekrar tekrar bölündü.",
        ],
        [
          "The writer mentions the polio vaccine in order to show ----.",
          [
            "the wide range of research in which the cells were used",
            "that Henrietta Lacks herself had suffered from polio as a child",
            "why her family was paid by the companies that sold the cells",
            "how the cells were taken from the tumour by her doctor",
            "that the cells were harmful",
          ],
          "Çocuk felci aşısının anılması, hücrelerin kullanıldığı geniş araştırma alanını örnekler.",
        ],
        [
          "It can be understood from the passage that the 2013 agreement ----.",
          [
            "gave her relatives some control over the use of the cells' genetic data",
            "ended all research on HeLa cells",
            "paid her family for all past sales of the cells",
            "was made before the cells were taken",
            "made it illegal to publish books about her",
          ],
          "Metne göre anlaşma ailesine hücrelerin genetik bilgisinin nasıl kullanılacağına dair kararlarda söz hakkı verdi.",
        ],
      ],
    },
    {
      text:
        "On 3 December 1967, at Groote Schuur Hospital in Cape Town, South Africa, the surgeon Christiaan Barnard and his team carried out the first transplant of a heart from one human being to another. The patient, a fifty-three-year-old grocer named Louis Washkansky, was suffering from severe heart disease and was expected to die soon. The donor was a young woman who had been fatally injured in a road accident. The operation lasted about five hours, and the new heart began to beat after an electric shock. The news made Barnard famous around the world overnight. To prevent Washkansky's body from rejecting the new heart, however, doctors gave him drugs that suppressed his immune system, and as a result he developed pneumonia and died eighteen days later. In the following year, surgeons in many countries performed more than a hundred heart transplants, but most patients survived only a short time, and many hospitals stopped carrying out the operation. It was only in the 1980s, after the introduction of a more effective anti-rejection drug called ciclosporin, that heart transplantation became a widely accepted treatment. Today, thousands of heart transplants are performed every year, and many patients live for more than a decade afterwards.",
      questions: [
        [
          "According to the passage, Washkansky died because ----.",
          [
            "the drugs given to him made him vulnerable to infection",
            "the new heart never started beating",
            "the operation lasted far longer than the surgeons had expected",
            "he was injured in a road accident",
            "the surgeons made a serious mistake while connecting the new heart",
          ],
          "Metne göre bağışıklık sistemini baskılayan ilaçlar nedeniyle zatürreye yakalanıp öldü.",
        ],
        [
          "It can be understood from the passage that in the years immediately after 1967, ----.",
          [
            "results were so poor that many hospitals gave up the operation",
            "heart transplants became completely safe",
            "no other surgeons attempted the operation",
            "most patients lived for more than ten years",
            "ciclosporin was widely used",
          ],
          "Hastaların çoğunun kısa süre yaşaması ve pek çok hastanenin ameliyatı bırakması, sonuçların kötü olduğunu gösterir.",
        ],
        [
          "The writer mentions ciclosporin in order to explain ----.",
          [
            "why heart transplants eventually became a standard treatment",
            "how the first operation was performed by Barnard and his team",
            "why Barnard became famous",
            "how the donor was chosen after her accident on the road",
            "why pneumonia is dangerous for patients who have had surgery",
          ],
          "Daha etkili bir ret önleyici ilaç olan siklosporinin ardından kalp naklinin kabul gören bir tedavi hâline geldiği belirtilir.",
        ],
      ],
    },
    {
      text:
        "In 1914, as war spread across Europe, Marie Curie, already famous for her discovery of the elements polonium and radium, decided to use her scientific knowledge to help wounded soldiers. She realised that X-ray machines, which had been invented less than twenty years earlier, could help surgeons to find bullets, pieces of shell and broken bones, but very few military hospitals had them. With the help of donations, she fitted ordinary cars with X-ray equipment and electric generators powered by the car's engine, so that they could be driven close to the front lines. Soldiers called these vehicles 'petites Curies', or 'little Curies'. Curie learned to drive and to repair the cars herself and often travelled to the front with her seventeen-year-old daughter Irène. She also trained around a hundred and fifty women to operate the equipment. By the end of the war, the mobile units and some two hundred fixed X-ray stations that she helped to set up had been used to examine more than a million soldiers. Curie and her assistants, however, had little protection from the radiation they worked with, and she died in 1934 of a blood disease that was almost certainly caused by long exposure to it.",
      questions: [
        [
          "According to the passage, Curie equipped cars with X-ray machines because ----.",
          [
            "few military hospitals had such equipment",
            "she wanted to become a racing driver",
            "the machines were too small for hospitals",
            "soldiers asked her to do so",
            "the government ordered her to",
          ],
          "Metne göre röntgen cihazları cerrahlara yardım edebilirdi ama çok az askerî hastanede vardı.",
        ],
        [
          "The writer mentions the training of women in order to show ----.",
          [
            "that Curie helped to create a team to run the equipment",
            "that women were not allowed to drive cars during the war",
            "why the cars were called 'little Curies'",
            "how radium was discovered by Curie and her husband",
            "that the machines were so easy to use that no training was needed",
          ],
          "Yüz elli kadar kadının cihazları kullanmak üzere eğitilmesi, Curie'nin ekipmanı işletecek bir ekip oluşturduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that Curie's death ----.",
          [
            "was probably related to her work with radiation",
            "was caused by an accident at the front",
            "had nothing to do with her research",
            "happened during the war",
            "was caused by a car crash",
          ],
          "Metne göre uzun süreli radyasyona maruz kalmanın neredeyse kesin olarak neden olduğu bir kan hastalığından öldü.",
        ],
      ],
    },
    {
      text:
        "Down syndrome is a genetic condition that occurs in about one in every seven hundred births worldwide. It was first described in detail in 1866 by the English doctor John Langdon Down, who noticed that some of the patients in the institution he ran shared certain physical features and learning difficulties. Its cause, however, remained unknown for almost a century. In 1959, the French researcher Jérôme Lejeune and his colleagues discovered that people with the condition have an extra copy of chromosome 21, giving them forty-seven chromosomes instead of the usual forty-six. For this reason, the condition is also known as trisomy 21. The likelihood of having a child with Down syndrome increases with the age of the mother, although most babies with the condition are born to younger women, simply because younger women have more babies. People with Down syndrome usually have some degree of intellectual disability and a higher risk of certain health problems, such as heart defects. Life expectancy has risen dramatically in recent decades, from around ten years in the 1960s to around sixty today in many countries, thanks to better medical care, early support and greater inclusion in education and society.",
      questions: [
        [
          "According to the passage, Lejeune's discovery ----.",
          [
            "identified the genetic cause of the condition",
            "was made before Down described the condition",
            "showed that the condition is caused by infection",
            "proved that the condition does not exist",
            "was ignored by other scientists",
          ],
          "Metne göre Lejeune durumun nedeninin 21. kromozomun fazladan bir kopyası olduğunu keşfetti.",
        ],
        [
          "The writer explains that most babies with Down syndrome are born to younger women because ----.",
          [
            "younger women give birth to more children overall",
            "the risk is higher for younger mothers",
            "older women never have children with the condition",
            "the condition is caused by the father",
            "younger women are not tested",
          ],
          "Metne göre risk anne yaşıyla artsa da genç kadınlar daha çok bebek dünyaya getirdiği için çoğu bebek genç annelerden doğar.",
        ],
        [
          "It can be understood from the passage that the rise in life expectancy ----.",
          [
            "is partly the result of improved care and support",
            "has been caused by a new genetic treatment",
            "has happened only in the last year",
            "has been the same in every country",
            "is due to a fall in heart defects at birth",
          ],
          "Metne göre beklenen yaşam süresindeki artış daha iyi tıbbi bakım, erken destek ve toplumsal katılım sayesindedir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the nineteenth century, many surgeons operated in their ordinary clothes and did not wash their hands between patients. ---- As a result, a large proportion of patients died of infections after their operations.",
      [
        "They did not yet understand that germs could be carried from one patient to another.",
        "Most operations at that time were performed in large hospitals in the cities.",
        "Some surgeons became famous for the speed of their work.",
        "Medical students often watched operations from raised seats around the table.",
        "Hospitals were often crowded and noisy places.",
      ],
      "Boşluktan sonra 'As a result' ile hastaların büyük bölümünün enfeksiyondan öldüğü söylenir; boşluğa mikropların bir hastadan diğerine taşınabileceğinin henüz anlaşılmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "Jet lag occurs when travellers cross several time zones quickly. ---- As a result, they may feel sleepy during the day and lie awake at night.",
      [
        "Their internal body clock remains set to the time at home for several days.",
        "Long flights are often uncomfortable for passengers sitting in small seats.",
        "Many airlines now offer flights that travel directly between continents.",
        "Some travellers prefer to fly at night so that they can sleep on the plane.",
        "Airports in large cities are usually busy at every hour of the day.",
      ],
      "Boşluktan sonra 'As a result' ile gündüz uykulu olup gece uyuyamadıkları söylenir; boşluğa iç biyolojik saatin birkaç gün evdeki saate göre kalmaya devam ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Blood donors are asked a series of questions about their health and recent travel before they give blood. ---- In addition, every donation is tested in a laboratory before it is used.",
      [
        "This helps to ensure that infections are not passed on to patients.",
        "Many people choose to donate blood several times every year.",
        "Donated blood can be separated into several useful parts.",
        "Donors are often given a drink and a biscuit before they go home.",
        "Blood donation centres are found in most cities.",
      ],
      "Boşluktan sonra 'In addition' ile her bağışın laboratuvarda test edildiği eklenir; boşluğa soruların enfeksiyonların hastalara geçmemesini sağlamaya yardım ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Higher up a mountain, the air contains less oxygen than at sea level. ---- For this reason, climbers are advised to ascend slowly and rest for a day or two at certain heights.",
      [
        "People who climb too quickly may develop headaches, nausea and, in rare cases, dangerous swelling of the brain.",
        "Many of the world's highest mountains are found in the Himalayas between Nepal and China.",
        "Climbing equipment has become lighter and much more comfortable in recent decades.",
        "Some mountain villages are visited by thousands of tourists each summer.",
        "Weather conditions on high mountains can change very quickly.",
      ],
      "Boşluktan sonra 'For this reason' ile yavaş tırmanma tavsiyesi verilir; boşluğa çok hızlı tırmananların baş ağrısı, bulantı ve beyin ödemi geliştirebileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "Lupus is a disease in which the immune system attacks the body's own tissues. ---- This variety of symptoms often makes the disease difficult to diagnose.",
      [
        "It can affect the skin, joints, kidneys, heart and many other organs.",
        "The immune system normally protects the body against bacteria and viruses.",
        "Many diseases are treated with drugs that are taken as tablets every morning.",
        "Doctors usually ask patients about the medical history of their family.",
        "Some hospitals have special departments for diseases of the skin.",
      ],
      "Boşluktan sonra 'This variety of symptoms' ile tanı güçlüğü söylenir; boşluğa hastalığın deri, eklemler, böbrekler, kalp ve diğer organları etkileyebildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Frostbite occurs when skin and the tissue beneath it freeze in extreme cold. ---- In severe cases, the damaged tissue may die and have to be removed.",
      [
        "The fingers, toes, nose and ears are most at risk because they are furthest from the centre of the body.",
        "Many people enjoy winter sports such as skiing and skating in the mountains.",
        "Temperatures in some parts of Siberia can fall below minus fifty degrees.",
        "Warm clothing has been made from animal fur for thousands of years.",
        "Snow is formed when water vapour freezes in the clouds.",
      ],
      "Boşluktan sonra en ağır vakalarda dokunun ölebileceği söylenir; boşluğa vücudun merkezinden en uzak olan parmakların, burnun ve kulakların en çok risk altında olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Iron lungs were large machines that helped polio patients to breathe.",
        "The patient lay inside a metal tank with only the head outside.",
        "Changes in air pressure inside the tank made the lungs expand and contract.",
        "Many old factories were built from iron and brick.",
        "Some patients spent years or even decades inside these machines.",
      ],
      odd: 3,
      why: "Parça çocuk felci hastalarının solunumuna yardım eden demir akciğerleri anlatır. Pek çok eski fabrikanın demir ve tuğladan yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Anaphylaxis is a severe allergic reaction that can develop within minutes.",
        "It may be triggered by foods such as peanuts, by insect stings or by certain drugs.",
        "Symptoms include swelling of the throat and difficulty breathing.",
        "Peanut butter is a popular breakfast food in North America.",
        "Patients at risk often carry an injection of adrenaline for emergencies.",
      ],
      odd: 3,
      why: "Parça anafilaksiyi anlatır. Fıstık ezmesinin Kuzey Amerika'da sevilen bir kahvaltılık olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Scoliosis is a condition in which the spine curves to one side.",
        "It most often develops in children during periods of rapid growth.",
        "School sports teams usually train several times a week.",
        "Mild cases may need only regular check-ups.",
        "More serious curves may be treated with a brace or, occasionally, surgery.",
      ],
      odd: 2,
      why: "Parça omurganın yana eğrilmesi olan skolyozu anlatır. Okul spor takımlarının haftada birkaç kez antrenman yaptığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tennis elbow is a painful condition affecting the tendons on the outer side of the elbow.",
        "Despite its name, it is often caused by activities such as painting, typing or using tools.",
        "Tennis was first played on grass courts in nineteenth-century England.",
        "Rest and gentle exercises usually allow the tendons to heal within months.",
        "In persistent cases, doctors may recommend physiotherapy or injections.",
      ],
      odd: 2,
      why: "Parça dirseğin dış tarafındaki tendonları etkileyen tenisçi dirseğini anlatır. Tenisin ilk kez on dokuzuncu yüzyıl İngiltere'sinde çim kortlarda oynandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Radiotherapy uses high-energy radiation to destroy cancer cells.",
        "The radiation is carefully aimed at the tumour.",
        "This limits damage to the surrounding healthy tissue.",
        "Treatment is often given in short daily sessions over several weeks.",
        "The sun gives off many kinds of radiation.",
      ],
      odd: 4,
      why: "Parça radyoterapiyi anlatır. Güneşin pek çok türde radyasyon yaydığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Whiplash is a neck injury caused by a sudden backward and forward movement of the head.",
        "It most commonly results from a car being hit from behind.",
        "Symptoms such as neck pain and stiffness may not appear until the following day.",
        "Many modern cars are fitted with satellite navigation systems.",
        "Most people recover within a few weeks with gentle movement and pain relief.",
      ],
      odd: 3,
      why: "Parça başın ani öne arkaya hareketiyle oluşan boyun yaralanmasını (whiplash) anlatır. Pek çok modern otomobilde uydu navigasyon sistemi bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
