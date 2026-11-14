import type { YokdilDeneme } from "./types";

export const SAGLIK_55: YokdilDeneme = {
  no: 55,
  field: "saglik",
  vocab: [
    [
      "The student was looking for a substance that would speed up clotting, but he found one that ---- it instead.",
      ["prevented", "measured", "imitated", "described", "accelerated"],
      "Öğrencinin pıhtılaşmayı hızlandıracak bir madde ararken onun yerine pıhtılaşmayı 'önleyen' (prevented) bir madde bulduğu anlatılır.",
    ],
    [
      "Patients taking the blood pressure pill noticed an ---- side effect: hair began to grow on their bodies.",
      ["unexpected", "invisible", "ancient", "official", "expensive"],
      "Tansiyon hapı alan hastaların 'beklenmedik' (unexpected) bir yan etki fark ettiği anlatılır.",
    ],
    [
      "The plant had traditionally been used as a ---- for diabetes.",
      ["remedy", "decoration", "weapon", "fuel", "currency"],
      "Bitkinin geleneksel olarak diyabet için bir 'çare' (remedy) olarak kullanıldığı anlatılır.",
    ],
    [
      "The drug works only if patients take it ---- every day.",
      ["consistently", "rarely", "loudly", "secretly", "accidentally"],
      "İlacın yalnızca hastalar onu her gün 'düzenli olarak' (consistently) alırsa işe yaradığı anlatılır.",
    ],
    [
      "Collecting enough bark to treat every patient would have ---- the remaining forests.",
      ["threatened", "protected", "decorated", "nourished", "measured"],
      "Her hastayı tedavi edecek kadar kabuk toplamanın kalan ormanları 'tehdit edeceği' (threatened) anlatılır.",
    ],
    [
      "The chemists decided to ---- the new anaesthetic on themselves before giving it to patients.",
      ["try out", "give up", "put off", "turn down", "look after"],
      "Kimyacıların yeni anesteziği hastalara vermeden önce kendi üzerlerinde 'denemeye' (try out) karar verdiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the substance was purified, nearly twenty years ---- since its discovery.",
      ["had passed", "pass", "have passed", "will pass", "are passing"],
      "Geçmişteki bir andan önce tamamlanmış süre: 'had passed'.",
    ],
    [
      "If patients had not reported the side effect, the hair treatment ---- at all.",
      ["might never have been developed", "will never be developed", "is never developed", "had never been developed", "would never develop"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might never have been developed'.",
    ],
    [
      "The leaves ---- to the researchers by a doctor in Jamaica.",
      ["were sent", "sent", "have sent", "send", "are sending"],
      "Yapraklar gönderilmiştir; edilgen geçmiş zaman: 'were sent'.",
    ],
    [
      "---- the drug reduced the white blood cell count, it had no effect on blood sugar.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Akyuvar sayısını düşürmesi ile kan şekerine etkisizliği karşılaştırılır: 'Although'.",
    ],
    [
      "The chemist, ---- wife used the drug before playing tennis, named it after her.",
      ["whose", "who", "which", "whom", "where"],
      "Kimyacının eşi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after he drank wine at a dinner ---- the researcher notice the reaction.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Each patient needed the bark of several old trees, ---- made the drug extremely scarce.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more of the drug the patient took, ---- the reaction to alcohol became.",
      ["the stronger", "the strongest", "stronger", "strongest", "so strong"],
      "'The more ..., the stronger ...' paralel yapısı: 'the stronger'.",
    ],
    [
      "The company insisted that the product ---- tested further before it was sold.",
      ["be", "is", "was", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
    [
      "The anaesthetic is estimated ---- one of the most widely used drugs in the world.",
      ["to have become", "becoming", "to become", "became", "having become"],
      "Geçmişte başlayıp gerçekleşmiş bir durum için mastarın geçmiş biçimi: 'to have become'.",
    ],
    [
      "Scientists produced the drug from the needles of a common yew ---- the rare trees would not be destroyed.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The researchers were testing the compound as a way of ---- intestinal worms.",
      ["treating", "to treat", "treat", "treated", "to treating"],
      "'a way of doing sth' kalıbı: 'treating'.",
    ],
    [
      "Had the plant not been sent from abroad, the drugs ---- for many more years.",
      ["might not have been found", "are not found", "will not be found", "had not been found", "would not find"],
      "Devrik üçüncü tip koşul cümlesi, edilgen: 'might not have been found'.",
    ],
    [
      "Neither the student nor his professor ---- what they had discovered at first.",
      ["realised", "realising", "to realise", "have realise", "realises"],
      "'Neither ... nor' yapısında geçmiş zaman: 'realised'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1916, Jay McLean, a second-year medical student at Johns Hopkins University, was working in the laboratory of the physiologist William Howell. His task was to study substances extracted from animal tissues that were thought to help blood to clot. Instead, he found that an extract from the liver of a dog had the opposite effect: it prevented blood from clotting, {1} its effect weakened as the extract was stored. Howell continued the research, {2} in 1918 he named the substance heparin, from the Greek word for liver. Early preparations, however, were impure and caused side effects, {3} it was not until the 1930s that researchers in Canada and Sweden were able to purify heparin sufficiently for use in patients. It soon became essential in medicine. Heparin allows blood to flow through machines outside the body without clotting, {4} made possible open-heart surgery and kidney dialysis. It is also used to prevent and treat dangerous clots in the legs and lungs. Today, most heparin is extracted from the intestines of pigs. In 2008, contaminated supplies were linked to the deaths of patients in several countries, {5} led regulators to introduce stricter tests on its production.",
      blanks: [
        [
          "(21) ----",
          ["although", "because", "unless", "so that", "until"],
          "Pıhtılaşmayı önlemesi ile etkisinin saklandıkça zayıflaması arasında zıtlık vardır: 'although'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Araştırmanın sürmesi ve maddenin adlandırılması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "or", "although"],
          "Saf olmamaları ve yan etkiler; ancak 1930'larda saflaştırılabilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(25) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra önceki olayı niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "In the 1960s, chemists at an American pharmaceutical company were testing a new compound called minoxidil, originally as a possible treatment for stomach ulcers. It proved ineffective for ulcers, {1} it was found to widen blood vessels, and in 1979 it was approved as a tablet for patients with severe high blood pressure that did not respond to other medicines. Doctors soon noticed an unusual side effect. Many patients taking the drug began to grow hair on their faces, arms and backs, {2} some who had been bald found that hair was growing on their heads again. The company recognised the commercial potential of this effect, {3} it developed a solution that could be applied directly to the scalp. In 1988, this became the first medicine approved in the United States for treating baldness in men, {4} a version for women followed a few years later. The solution does not work for everyone, and hair that has regrown is usually lost again if treatment stops. Remarkably, the way the drug stimulates hair follicles is still not completely clear, {5} it remains widely used decades after its discovery.",
      blanks: [
        [
          "(26) ----",
          ["but", "and", "so", "or", "for"],
          "Ülsere etkisiz olması ile kan damarlarını genişlettiğinin bulunması zıttır: 'but'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Vücutta tüy çıkması ve kel hastaların saçlarının yeniden çıkması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Şirketin ticari potansiyeli görmesi ve bir çözelti geliştirmesi birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "or", "until"],
          "Erkekler için onay ve kadınlar için sürümün ardından gelmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["although", "because", "unless", "so that", "until"],
          "Mekanizmasının tam anlaşılmaması ile yaygın kullanılması zıttır: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the student was searching for a substance that promoted clotting, ----.",
      [
        "he discovered one that did the opposite",
        "dogs have livers",
        "Johns Hopkins is a university",
        "blood is red",
        "researchers in Canada and Sweden later purified the substance sufficiently for use in patients",
      ],
      "'Although' zıtlık ister: öğrenci pıhtılaşmayı artıran bir madde ararken tam tersini yapan bir madde keşfetti.",
    ],
    [
      "If minoxidil had worked against ulcers, ----.",
      [
        "its effect on hair might never have been noticed",
        "ulcers are painful",
        "hair grows slowly",
        "blood vessels carry blood",
        "the company would have developed a solution for women before the version for men",
      ],
      "Üçüncü tip koşul: minoksidil ülsere karşı işe yarasaydı saç üzerindeki etkisi hiç fark edilmeyebilirdi.",
    ],
    [
      "----, the researchers tested the plant extract on rats.",
      [
        "Hoping to confirm its traditional use against diabetes",
        "Although rats are small",
        "Unless the leaves arrived",
        "Since Madagascar is an island",
        "While survival rates for children with leukaemia were rising thanks to combination treatments",
      ],
      "Geleneksel olarak diyabete karşı kullanımını doğrulamayı umarak araştırmacılar bitki özütünü sıçanlar üzerinde denedi.",
    ],
    [
      "The researchers took the compound themselves ----.",
      [
        "to check whether it was safe to use against worms",
        "although the dinner was late",
        "unless the company agreed",
        "because Copenhagen is a city",
        "while the rubber industry was using the same chemical to make tyres and other products",
      ],
      "Araştırmacılar bileşiğin solucanlara karşı kullanımının güvenli olup olmadığını kontrol etmek için onu kendileri aldılar.",
    ],
    [
      "Since each patient required the bark of several mature trees, ----.",
      [
        "conservationists were concerned about the future of the forests",
        "yew trees grow slowly",
        "bark protects trees",
        "the forests were in Washington",
        "a scientist later showed that the drug works by stabilising structures inside dividing cells",
      ],
      "'Since' neden bildirir: her hasta için birkaç yetişkin ağacın kabuğu gerektiğinden doğa korumacılar ormanların geleceğinden endişe ediyordu.",
    ],
    [
      "Not only was the new anaesthetic safer than cocaine, ----.",
      [
        "but it also caused fewer allergic reactions than earlier alternatives",
        "and Sweden is in Scandinavia",
        "since chemists are careful",
        "so dentists use it",
        "unless the company had marketed it under a different name in other countries",
      ],
      "'Not only ... but also' yapısı tamamlanır: yeni anestezik kokainden daha güvenli olmakla kalmadı, önceki alternatiflerden daha az alerjik tepkiye de yol açtı.",
    ],
    [
      "Once the drug's effect on white blood cells had been noticed, ----.",
      [
        "researchers began to investigate its use against leukaemia",
        "plants have leaves",
        "rats are used in laboratories",
        "diabetes is common",
        "the plant had been used as a traditional remedy in several countries for many generations",
      ],
      "İlacın akyuvarlar üzerindeki etkisi fark edilince araştırmacılar lösemiye karşı kullanımını incelemeye başladı.",
    ],
    [
      "Unless patients take the drug regularly, ----.",
      [
        "it will not deter them from drinking",
        "alcohol is harmful",
        "doctors prescribe drugs",
        "dinners are enjoyable",
        "the researchers who discovered its effects will be unable to publish their findings",
      ],
      "'Unless' olumsuz koşul: hastalar ilacı düzenli almazsa onları içmekten caydırmaz.",
    ],
    [
      "The early preparations of heparin were so impure ----.",
      [
        "that they could not be safely given to patients",
        "although livers are large",
        "because dogs are friendly",
        "unless the student agreed",
        "while surgeons were developing machines that could pump blood outside the body during operations",
      ],
      "Heparinin ilk preparatları o kadar saf değildi ki hastalara güvenle verilemiyordu.",
    ],
    [
      "Even though the drug was discovered in the 1960s, ----.",
      [
        "it was not approved for cancer treatment until 1992",
        "yew trees are old",
        "cancer is serious",
        "botanists collect plants",
        "a programme run by the government had been testing thousands of plant extracts for activity against tumours",
      ],
      "'Even though' zıtlık ister: ilaç 1960'larda keşfedilse de kanser tedavisi için 1992'ye kadar onaylanmadı.",
    ],
    [
      "As the hair grown with the treatment usually falls out when it stops, ----.",
      [
        "patients must continue using it to keep the benefit",
        "hair is made of protein",
        "baldness is common",
        "the scalp is sensitive",
        "the drug was originally approved as a tablet for patients with severe high blood pressure",
      ],
      "Tedaviyle çıkan saç tedavi bırakılınca genellikle döküldüğü için hastaların faydayı korumak için kullanmaya devam etmesi gerekir.",
    ],
  ],
  enTr: [
    [
      "The extract from the dog's liver prevented blood from clotting.",
      [
        "Köpeğin karaciğerinden alınan özüt kanın pıhtılaşmasını önledi.",
        "Köpeğin karaciğerinden alınan özüt kanın pıhtılaşmasını hızlandırdı.",
        "Kanın pıhtılaşmasını önleyen özütü bulan öğrenci, bunun hiçbir tıbbi değeri olmadığını düşündü.",
        "Kan köpeğin karaciğerini korudu.",
        "Özüt yalnızca köpeklerde işe yaradı.",
      ],
      "'The extract from the dog's liver' 'köpeğin karaciğerinden alınan özüt', 'prevented blood from clotting' 'kanın pıhtılaşmasını önledi' karşılığıdır.",
    ],
    [
      "The mechanism by which the drug acts remains only partly understood.",
      [
        "Bilim insanları ilacın nasıl etki ettiğini hâlâ tam olarak anlamıyor.",
        "Bilim insanları ilacın nasıl etki ettiğini tamamen açıkladı.",
        "İlacın nasıl etki ettiğini anlayan bilim insanları, daha etkili bir sürüm geliştirmeyi başardı.",
        "İlaç bilim insanlarını anlamıyor.",
        "Bilim insanları ilacı hiç incelemedi.",
      ],
      "'The mechanism by which the drug acts' 'ilacın nasıl etki ettiği', 'remains only partly understood' 'hâlâ ancak kısmen anlaşılmaktadır' karşılığıdır.",
    ],
    [
      "Survival rates for children with this type of leukaemia rose dramatically.",
      [
        "Bu tür lösemisi olan çocukların hayatta kalma oranları çarpıcı biçimde arttı.",
        "Bu tür lösemisi olan çocukların hayatta kalma oranları düştü.",
        "Hayatta kalma oranları artan çocuklar, tedaviye rağmen birkaç yıl içinde yeniden hastalandı.",
        "Çocuklar lösemiyi tedavi etti.",
        "Lösemi çocukları etkilemez.",
      ],
      "'Survival rates for children with this type of leukaemia' 'bu tür lösemisi olan çocukların hayatta kalma oranları', 'rose dramatically' 'çarpıcı biçimde arttı' karşılığıdır.",
    ],
    [
      "The drug causes unpleasant symptoms if the patient drinks alcohol.",
      [
        "İlaç, hasta alkol içerse hoş olmayan belirtilere yol açar.",
        "İlaç, alkolün etkilerini tamamen ortadan kaldırır.",
        "Hoş olmayan belirtilere yol açan alkol, ilacın etkisini artırdığı için hastalara önerilir.",
        "Alkol ilacı üretir.",
        "İlaç alkolle birlikte alındığında hiçbir etki göstermez.",
      ],
      "'The drug causes unpleasant symptoms' 'ilaç hoş olmayan belirtilere yol açar', 'if the patient drinks alcohol' 'hasta alkol içerse' karşılığıdır.",
    ],
    [
      "The drug is now made partly from the needles of a common species of yew.",
      [
        "İlaç artık kısmen yaygın bir porsuk ağacı türünün iğne yapraklarından üretiliyor.",
        "İlaç artık yalnızca nadir ağaçların kabuğundan üretiliyor.",
        "Yaygın porsuk ağaçlarının iğne yapraklarından üretilen ilacın, kabuktan yapılandan daha az etkili olduğu anlaşıldı.",
        "Porsuk ağaçları ilaçla korunuyor.",
        "İlaç ağaçlardan yapılmaz.",
      ],
      "'The drug is now made partly' 'ilaç artık kısmen üretiliyor', 'from the needles of a common species of yew' 'yaygın bir porsuk ağacı türünün iğne yapraklarından' karşılığıdır.",
    ],
    [
      "Earlier local anaesthetics were derived from cocaine.",
      [
        "Daha önceki lokal anestezikler kokainden elde ediliyordu.",
        "Kokain, daha önceki lokal anesteziklerden elde ediliyordu.",
        "Kokainden elde edilen lokal anestezikler, güvenli oldukları için bugün hâlâ yaygın biçimde kullanılır.",
        "Lokal anestezikler hiç kullanılmadı.",
        "Kokain bir anestezik değildir.",
      ],
      "'Earlier local anaesthetics' 'daha önceki lokal anestezikler', 'were derived from cocaine' 'kokainden elde ediliyordu' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Heparin, kanın vücut dışındaki makinelerden pıhtılaşmadan akmasını sağlar.",
      [
        "Heparin allows blood to flow through machines outside the body without clotting.",
        "Heparin causes blood to clot inside machines.",
        "Heparin was expected to help blood flow through machines, but it caused dangerous clots in patients.",
        "Machines produce heparin outside the body.",
        "Heparin is used only inside the body.",
      ],
      "'Heparin sağlar' 'heparin allows', 'kanın vücut dışındaki makinelerden pıhtılaşmadan akmasını' 'blood to flow through machines outside the body without clotting' karşılığıdır.",
    ],
    [
      "Şirket, bu yan etkinin ticari potansiyelini fark etti.",
      [
        "The company recognised the commercial potential of the side effect.",
        "The company ignored the side effect completely.",
        "The company noticed the side effect, but it decided that there was no market for such a product.",
        "The side effect recognised the company.",
        "The company sold its business.",
      ],
      "'Şirket fark etti' 'the company recognised', 'bu yan etkinin ticari potansiyelini' 'the commercial potential of the side effect' karşılığıdır.",
    ],
    [
      "Yapraklar kan şekerini düşürmedi ama akyuvar sayısını azalttı.",
      [
        "The leaves did not lower blood sugar, but they reduced the number of white blood cells.",
        "The leaves lowered blood sugar but had no effect on white blood cells.",
        "The leaves lowered both blood sugar and the number of white blood cells in all the animals tested.",
        "White blood cells reduced the leaves.",
        "The leaves were not tested.",
      ],
      "'Yapraklar kan şekerini düşürmedi' 'the leaves did not lower blood sugar', 'ama akyuvar sayısını azalttı' 'but they reduced the number of white blood cells' karşılığıdır.",
    ],
    [
      "Araştırmacı, bir akşam yemeğinde şarap içtikten sonra kendini kötü hissetti.",
      [
        "The researcher felt ill after drinking wine at a dinner.",
        "The researcher refused to drink wine at the dinner.",
        "The researcher drank wine at a dinner and felt perfectly well, which surprised his colleagues.",
        "The wine was made by the researcher.",
        "The dinner was cancelled.",
      ],
      "'Araştırmacı kendini kötü hissetti' 'the researcher felt ill', 'bir akşam yemeğinde şarap içtikten sonra' 'after drinking wine at a dinner' karşılığıdır.",
    ],
    [
      "İlaç, bölünen hücrelerin içindeki yapıları sabitleyerek etki eder.",
      [
        "The drug works by stabilising structures inside dividing cells.",
        "The drug works by speeding up the division of cells.",
        "The drug was thought to stabilise structures inside cells, but this theory was later shown to be wrong.",
        "Dividing cells produce the drug.",
        "The drug destroys the outer wall of cells.",
      ],
      "'İlaç etki eder' 'the drug works', 'bölünen hücrelerin içindeki yapıları sabitleyerek' 'by stabilising structures inside dividing cells' karşılığıdır.",
    ],
    [
      "Kimyacılar, yeni bileşiği önce kendilerine enjekte etti.",
      [
        "The chemists first injected the new compound into themselves.",
        "The chemists refused to test the new compound on themselves.",
        "The chemists wanted to inject the compound into themselves, but the company did not allow it.",
        "The compound injected the chemists.",
        "The compound was tested only on animals.",
      ],
      "'Kimyacılar önce kendilerine enjekte etti' 'the chemists first injected into themselves', 'yeni bileşiği' 'the new compound' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The Madagascar periwinkle, a small plant with pink or white flowers, has long been used in traditional medicine in several countries, including as a tea for diabetes. In the 1950s, Robert Noble and Charles Beer, researchers at the University of Western Ontario in Canada, received leaves of the plant from a doctor in Jamaica and tested extracts on rats to see whether they lowered blood sugar. They did not. However, the animals' white blood cell counts fell sharply, and their bone marrow was suppressed. Realising that a substance able to reduce white blood cells might be useful against leukaemia and other cancers of the blood, the researchers isolated an active compound, which they called vinblastine. At about the same time, scientists at an American pharmaceutical company were also studying the plant and isolated a related compound, vincristine. Both became important cancer drugs. Vincristine, combined with other medicines, transformed the treatment of the most common childhood leukaemia: survival rates, which had been very low in the early 1960s, rose to around ninety per cent in many countries. The story has also raised questions about fairness. Although the plant is now grown in many countries, it is native to Madagascar, one of the world's poorest nations, which received no share of the large profits made from the drugs.",
      questions: [
        [
          "According to the passage, Noble and Beer originally tested the plant because ----.",
          [
            "of its traditional use in treating diabetes",
            "it was known to cure cancer",
            "it was rare",
            "a pharmaceutical company had asked them to find a new treatment for leukaemia",
            "it had pink flowers",
          ],
          "Metne göre diyabet için geleneksel kullanımı nedeniyle kan şekerini düşürüp düşürmediğini sınadılar.",
        ],
        [
          "The researchers realised the plant might be useful against cancer because ----.",
          [
            "it reduced the number of white blood cells",
            "it lowered blood sugar",
            "it killed the rats",
            "doctors in Jamaica had been using it to treat patients with leukaemia",
            "it grew quickly",
          ],
          "Akyuvar sayısını düşürmesi kan kanserlerinde işe yarayabileceğini düşündürdü.",
        ],
        [
          "The writer mentions Madagascar's poverty in order to highlight ----.",
          [
            "an unequal distribution of the benefits of the discovery",
            "the cost of the drugs",
            "the plant's beauty",
            "the high survival rates of children with leukaemia in that country",
            "a lack of scientists",
          ],
          "Bitkinin anavatanı ilaçlardan elde edilen büyük kârlardan pay almadı.",
        ],
      ],
    },
    {
      text:
        "In the 1940s, two researchers at a pharmaceutical company in Copenhagen, Jens Hald and Erik Jacobsen, were investigating a chemical called disulfiram, which was used in the rubber industry, as a possible treatment for intestinal worms. As was common at the time, they tested it on themselves to check its safety. Shortly afterwards, Jacobsen attended a dinner and, after drinking some alcohol, felt surprisingly unwell, with a flushed face, a racing heart and nausea. Hald had a similar experience. The researchers realised that the chemical must interact with alcohol, and they began to study the effect systematically. They found that disulfiram blocks an enzyme that the body uses to break down a substance produced when alcohol is processed in the liver. When this substance builds up, it causes the unpleasant symptoms. In 1948, they published their findings and suggested that the drug could be used to help people with alcohol dependence, since the expectation of feeling ill would discourage them from drinking. The drug, marketed under the name Antabuse, became one of the first medicines approved for this purpose. Its effectiveness, however, depends heavily on patients taking it regularly, and many stop doing so. For this reason, it works best when patients take it under supervision, for example by a family member, as part of a wider programme of treatment.",
      questions: [
        [
          "According to the passage, the researchers were originally studying disulfiram as a treatment for ----.",
          [
            "worms in the intestines",
            "alcohol dependence",
            "liver disease",
            "the skin problems suffered by workers in the rubber industry",
            "heart disease",
          ],
          "Metne göre bağırsak solucanlarına karşı olası bir tedavi olarak inceleniyordu.",
        ],
        [
          "The unpleasant symptoms are caused by ----.",
          [
            "the build-up of a substance that the body normally breaks down",
            "an allergy to rubber",
            "the worms",
            "the high temperature in the room where the dinner was held",
            "the drug itself without alcohol",
          ],
          "Bir enzimin engellenmesiyle normalde parçalanan bir maddenin birikmesi.",
        ],
        [
          "It can be understood from the passage that the drug is most effective when ----.",
          [
            "someone else helps to ensure it is taken",
            "it is taken occasionally",
            "patients take it with alcohol",
            "it is given to people who have never drunk alcohol",
            "it is used alone",
          ],
          "Örneğin bir aile üyesinin gözetiminde alındığında en iyi sonucu verir.",
        ],
      ],
    },
    {
      text:
        "In 1962, a botanist working for the United States Department of Agriculture collected samples of bark from Pacific yew trees in a forest in Washington State as part of a government programme that screened thousands of plants for substances active against cancer. Two years later, tests showed that an extract of the bark could kill tumour cells. Chemists Monroe Wall and Mansukh Wani isolated the active compound and in 1971 determined its complex structure; it was named paclitaxel, later sold as Taxol. Development was slow, partly because the compound was difficult to obtain and to dissolve. In 1979, the pharmacologist Susan Horwitz discovered that it worked in an unusual way: it stabilised the tiny tubes inside cells that pull chromosomes apart during cell division, so that cancer cells could not divide. Interest grew, but supply became a serious problem. The Pacific yew grows slowly, and stripping its bark kills the tree; treating a single patient required the bark of several mature trees. Environmental groups warned that large-scale harvesting would damage old forests that were already under threat. The drug was approved for ovarian cancer in 1992 and later for breast and other cancers. The supply problem was eventually solved by producing the compound partly from the needles of the more common European yew, which can be harvested without killing the tree, and later by growing yew cells in large tanks.",
      questions: [
        [
          "According to the passage, the bark was collected as part of ----.",
          [
            "a programme to test plants for anti-cancer activity",
            "a study of forest conservation",
            "a search for new timber",
            "an effort to find a treatment for heart disease using traditional remedies",
            "a pharmaceutical company's project",
          ],
          "Metne göre binlerce bitkiyi kansere karşı etkili maddeler için tarayan bir hükümet programının parçasıydı.",
        ],
        [
          "Horwitz's discovery was significant because it showed that the drug ----.",
          [
            "acted in a way not seen in earlier cancer drugs",
            "was easy to produce",
            "could be dissolved easily",
            "came from the needles of the European yew rather than from bark",
            "did not affect cancer cells",
          ],
          "İlacın hücre bölünmesini alışılmadık bir yolla engellediğini gösterdi.",
        ],
        [
          "It can be understood from the passage that the supply problem was solved by ----.",
          [
            "finding sources that did not require killing trees",
            "planting more Pacific yews",
            "importing bark",
            "reducing the number of patients who received the drug each year",
            "using synthetic chemicals only",
          ],
          "Ağacı öldürmeden toplanabilen iğne yapraklar ve hücre kültürü kullanıldı.",
        ],
      ],
    },
    {
      text:
        "The first effective local anaesthetic, introduced in the 1880s, was cocaine, which numbed tissue when applied or injected but was toxic and addictive. Chemists soon produced safer substitutes, the most famous of which, procaine, was introduced in 1905 and became widely used in dentistry. Procaine, however, was relatively weak, wore off quickly and caused allergic reactions in some patients. In 1943, the Swedish chemist Nils Löfgren synthesised a new compound while studying substances related to a chemical found in barley that had a numbing effect. With his student Bengt Lundqvist, he tested it by injecting it into himself. The new compound, later called lidocaine, acted faster, lasted longer and caused fewer allergic reactions than procaine. A Swedish company bought the rights and began selling it in 1948. It quickly became the most widely used local anaesthetic in the world, employed in dentistry, minor surgery, childbirth and many other procedures. Doctors later discovered that it could also be used to treat certain dangerous disturbances of the heart's rhythm. The World Health Organization includes it in its list of essential medicines. Although many newer local anaesthetics have since been developed, lidocaine remains a standard against which others are compared.",
      questions: [
        [
          "According to the passage, cocaine was replaced as a local anaesthetic because ----.",
          [
            "it was dangerous and addictive",
            "it was too expensive",
            "it did not numb tissue",
            "it could be used only in dentistry and not in other kinds of surgery",
            "it lasted too long",
          ],
          "Metne göre zehirli ve bağımlılık yapıcıydı.",
        ],
        [
          "Compared with procaine, lidocaine ----.",
          [
            "worked more quickly and for longer",
            "was weaker",
            "caused more allergies",
            "was made from barley and could therefore be produced more cheaply",
            "was more addictive",
          ],
          "Daha hızlı etki ediyor, daha uzun sürüyor ve daha az alerji yapıyordu.",
        ],
        [
          "It can be understood from the passage that lidocaine ----.",
          [
            "has uses beyond numbing tissue",
            "is no longer used",
            "was discovered by accident in a dental surgery",
            "was first sold by an American company",
            "is the newest local anaesthetic",
          ],
          "Kalp ritmi bozukluklarının tedavisinde de kullanılabildiği keşfedildi.",
        ],
      ],
    },
    {
      text:
        "In 1964, a Canadian scientific expedition to Easter Island, in the remote Pacific, collected soil samples. Years later, Suren Sehgal, a researcher at a pharmaceutical company in Montreal, found that one of the samples contained a bacterium that produced a compound with strong antifungal properties. It was named rapamycin, after the island's local name, Rapa Nui. Further studies showed that it also suppressed the immune system. In 1983, however, the company closed the laboratory and ended the project. Convinced of the compound's potential, Sehgal took samples of the bacterium home and kept them in his freezer. Several years later, after the company merged with another firm, he persuaded his new employers to resume the research. Rapamycin, under the name sirolimus, was approved in 1999 to prevent the rejection of transplanted kidneys. Because it stops cells from dividing, it was also used to coat the small mesh tubes, called stents, that are placed in narrowed arteries, reducing the risk that they would become blocked again. More recently, studies in which rapamycin extended the lifespan of mice have made it a subject of research into ageing, although its effects in humans are uncertain and it has significant side effects.",
      questions: [
        [
          "According to the passage, the compound was named after ----.",
          [
            "the place where the soil sample was collected",
            "the scientist who discovered it",
            "the company",
            "the disease that it was first used to treat in patients",
            "a bacterium",
          ],
          "Metne göre adını adanın yerel adı Rapa Nui'den aldı.",
        ],
        [
          "Sehgal's decision to keep samples at home was important because ----.",
          [
            "it allowed research to continue after the original project was stopped",
            "it was required by law",
            "the laboratory had no freezer",
            "the company had asked him to take the samples to a university in Canada",
            "it destroyed the bacterium",
          ],
          "Proje durdurulduktan sonra araştırmanın yeniden başlamasını sağladı.",
        ],
        [
          "It can be understood from the passage that rapamycin's role in human ageing ----.",
          [
            "has not yet been established",
            "has been proved",
            "has been ruled out",
            "was the reason for its approval in 1999",
            "is well understood",
          ],
          "Farelerde ömrü uzattı ama insanlardaki etkileri belirsizdir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the 1960s, a team at a British chemical company was developing a drug called tamoxifen as a possible contraceptive. ---- Its leader, Arthur Walpole, persuaded the company to test it against breast cancer instead, and it went on to save millions of lives.",
      [
        "It failed for that purpose, but because it blocked the effects of the hormone oestrogen, it seemed likely to slow the growth of certain tumours.",
        "Hormones regulate many processes.",
        "Chemical companies make many products.",
        "The compound had been synthesised by a young chemist named Dora Richardson, who was a member of the team.",
        "Breast cancer is common.",
      ],
      "Boşluk ilacın kontraseptif olarak başarısızlığını ve kansere karşı mantığını anlatan cümle gerektirir; boşluğa östrojeni engellediği için bazı tümörleri yavaşlatabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1944, the Swiss chemist Leandro Panizzon synthesised a stimulant called methylphenidate. ---- The drug was later widely prescribed for children with attention deficit hyperactivity disorder.",
      [
        "His wife, Marguerite, known as Rita, took it before playing tennis, and the drug was named Ritalin in her honour.",
        "Switzerland is famous for chemistry.",
        "Tennis is a popular sport.",
        "Panizzon worked for a chemical company in Basel that later merged with another firm to form a major pharmaceutical group.",
        "Children need exercise.",
      ],
      "Boşluk ilacın adının kökenini anlatan bir cümle gerektirir; boşluğa eşi Rita'nın tenisten önce aldığını ve ilaca onun adının verildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1947, two allergy specialists in Baltimore gave a new antihistamine to a patient with an itchy rash. ---- The drug was later tested on soldiers crossing the Atlantic by ship and was sold as a treatment for travel sickness.",
      [
        "The patient reported that the drug had also cured the car sickness she had suffered from all her life.",
        "Baltimore is a port city.",
        "Rashes can be itchy.",
        "Antihistamines had been developed in the 1930s, mainly to treat hay fever and other allergic conditions.",
        "Ships cross oceans.",
      ],
      "Boşluk ilacın yeni kullanımının nasıl keşfedildiğini anlatan bir cümle gerektirir; boşluğa hastanın ilacın ömür boyu çektiği araba tutmasını da geçirdiğini bildirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Chronic myeloid leukaemia is caused by an abnormal chromosome that produces a faulty enzyme driving the uncontrolled growth of white blood cells. ---- Approved in 2001, it greatly increased the proportion of patients who survived for many years.",
      [
        "In the 1990s, researchers designed a drug, imatinib, that specifically blocked this enzyme.",
        "Chromosomes contain DNA.",
        "Leukaemia affects the blood.",
        "The abnormal chromosome had been discovered in 1960 by two researchers in Philadelphia, after whom it was named.",
        "Enzymes speed up reactions.",
      ],
      "Boşluktan sonra 'it' ile onaylanan ilaç anlatılır; boşluğa araştırmacıların bu enzimi özgül olarak engelleyen imatinib'i tasarladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In about a fifth of breast cancers, the tumour cells produce too much of a protein called HER2, which makes them grow aggressively. ---- It was approved in 1998 and became one of the first successful targeted cancer therapies.",
      [
        "Researchers developed an antibody, trastuzumab, which attaches to this protein and blocks its effects.",
        "Proteins are made of amino acids.",
        "Cancer can affect many organs.",
        "Patients whose tumours did not produce high levels of the protein gained no benefit from the new drug.",
        "Antibodies fight infections.",
      ],
      "Boşluktan sonra 'it' ile onaylanan tedavi anlatılır; boşluğa araştırmacıların bu proteine bağlanıp etkisini engelleyen trastuzumab antikorunu geliştirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Ziconotide, a powerful painkiller approved in 2004, is a synthetic version of a substance found in the venom of a tropical sea creature. ---- Because it does not cause addiction, it is used for patients with severe long-term pain.",
      [
        "Cone snails use the venom to paralyse fish, injecting it through a sharp, harpoon-like tooth.",
        "The tropics are warm.",
        "Snails move slowly.",
        "The drug must be injected directly into the fluid around the spinal cord, which limits its use.",
        "Fish live in water.",
      ],
      "Boşluk zehrin kaynağını açıklayan bir cümle gerektirir; boşluğa koni salyangozlarının zehri zıpkın benzeri bir dişle balıkları felç etmek için kullandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In the 1960s, a Brazilian scientist found that the venom of a local snake contained substances that lowered blood pressure.",
        "Brazil is famous for its carnival.",
        "Researchers used his findings to design a new drug.",
        "Captopril, approved in 1981, was the first of a group of medicines that are now widely used for high blood pressure.",
        "It works by blocking an enzyme that narrows blood vessels.",
      ],
      odd: 1,
      why: "Parça yılan zehrinden geliştirilen kaptopril ilacını anlatır. Brezilya'nın karnavalıyla ünlü olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The blood of horseshoe crabs contains cells that react to bacterial toxins.",
        "A test made from the blood is used to check that vaccines and injections are free of contamination.",
        "Many beaches are crowded in summer.",
        "The crabs are caught, some of their blood is removed, and they are returned to the sea.",
        "Conservationists are concerned about the effects on crab populations.",
      ],
      odd: 2,
      why: "Parça at nalı yengecinin kanından yapılan testi anlatır. Pek çok plajın yazın kalabalık olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Trabectedin is a cancer drug originally obtained from a small sea creature found in the Caribbean.",
        "Huge quantities of the animal were needed to produce a small amount.",
        "The Caribbean is popular with divers.",
        "Chemists later found ways to produce the drug in the laboratory.",
        "It was approved in Europe in 2007 for certain rare cancers.",
      ],
      odd: 2,
      why: "Parça trabektedin ilacını anlatır. Karayiplerin dalgıçlar arasında popüler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the 1970s, researchers found a powerful painkilling substance in the skin of a frog from Ecuador.",
        "It was about two hundred times more potent than morphine.",
        "Frogs lay their eggs in water.",
        "Unfortunately, it was too toxic to be used as a medicine.",
        "Its discovery nevertheless encouraged research into new types of painkillers.",
      ],
      odd: 2,
      why: "Parça bir kurbağanın derisinden elde edilen ağrı kesici maddeyi anlatır. Kurbağaların yumurtalarını suya bıraktığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The saliva of medicinal leeches contains a substance that prevents blood from clotting.",
        "Many rivers flow into lakes.",
        "Scientists identified the substance in the nineteenth century and named it hirudin.",
        "Drugs based on it are used to prevent clots in certain patients.",
        "Leeches themselves are still sometimes used after surgery to improve blood flow.",
      ],
      odd: 1,
      why: "Parça sülük salyasındaki hirudini anlatır. Pek çok nehrin göllere döküldüğünü söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many important medicines come from substances produced by living things.",
        "Scientists search forests, oceans and soils for new compounds.",
        "The destruction of natural habitats may mean that potential medicines are lost.",
        "This is one argument for protecting biodiversity.",
        "Forests produce timber for building.",
      ],
      odd: 4,
      why: "Parça doğadan elde edilen ilaçları ve biyoçeşitliliği anlatır. Ormanların inşaat için kereste ürettiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
