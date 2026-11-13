import type { YokdilDeneme } from "./types";

export const FEN_15: YokdilDeneme = {
  no: 15,
  field: "fen",
  vocab: [
    [
      "Lehmann noticed that some earthquake waves were ---- in a way that could only be explained by a solid inner core.",
      ["reflected", "invented", "forgotten", "ignored", "frozen"],
      "Lehmann'ın bazı deprem dalgalarının ancak katı bir iç çekirdekle açıklanabilecek biçimde 'yansıdığını' (reflected) fark ettiği anlatılır.",
    ],
    [
      "Keeling's measurements showed a ---- rise in carbon dioxide, with a small seasonal rise and fall each year.",
      ["steady", "sudden", "temporary", "slight", "random"],
      "Keeling'in ölçümlerinin her yıl küçük mevsimsel iniş çıkışlarla birlikte karbondioksitte 'istikrarlı' (steady) bir artış gösterdiği anlatılır.",
    ],
    [
      "According to the theory, ice may once have ---- the entire surface of the planet, even near the equator.",
      ["covered", "warmed", "watered", "lit", "shaped"],
      "Kurama göre buzun bir zamanlar ekvatora yakın yerler dahil gezegenin tüm yüzeyini 'kaplamış' (covered) olabileceği anlatılır.",
    ],
    [
      "Small changes in the Earth's orbit ---- the amount of sunlight that reaches different parts of the planet.",
      ["alter", "stop", "destroy", "create", "double"],
      "Dünya'nın yörüngesindeki küçük değişikliklerin gezegenin farklı bölgelerine ulaşan güneş ışığı miktarını 'değiştirdiği' (alter) anlatılır.",
    ],
    [
      "Rainwater that is slightly acidic slowly ---- limestone, creating caves and underground rivers.",
      ["dissolves", "builds", "colours", "freezes", "polishes"],
      "Hafif asidik yağmur suyunun kireçtaşını yavaşça 'çözdüğü' (dissolves) ve mağaralar ile yeraltı nehirleri oluşturduğu anlatılır.",
    ],
    [
      "The layers of rock in the canyon walls make it possible to ---- the history of the region over hundreds of millions of years.",
      ["piece together", "give away", "turn down", "put off", "run over"],
      "Kanyon duvarlarındaki kaya katmanlarının bölgenin yüz milyonlarca yıllık tarihini 'bir araya getirerek ortaya koymayı' (piece together) mümkün kıldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The existence of the Earth's inner core ---- in 1936 by a Danish seismologist.",
      ["was proposed", "proposed", "has proposed", "was proposing", "had proposed"],
      "Varlık önerilen bir şeydir ve olay 1936'da olmuştur: edilgen geçmiş zaman 'was proposed'.",
    ],
    [
      "If Keeling had not chosen such a remote site, his measurements ---- by local pollution.",
      ["would have been affected", "would be affected", "will be affected", "were affected", "had been affected"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have been + V3' ister.",
    ],
    [
      "By the time Milankovitch's ideas were confirmed in the 1970s, he ---- for more than a decade.",
      ["had been dead", "has been dead", "is dead", "will be dead", "was dying"],
      "Fikirlerin doğrulanmasından (geçmiş) önce süregelen durum: Past Perfect 'had been dead'.",
    ],
    [
      "Mohorovičić, ---- study of an earthquake in 1909 revealed the boundary beneath the crust, was a Croatian scientist.",
      ["whose", "who", "which", "whom", "where"],
      "Çalışma Mohorovičić'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only when the ice began to melt ---- life able to spread again across the oceans.",
      ["was", "did", "had", "has", "it was"],
      "'Only when' ile başlayan cümlede ana cümle devrik olur: 'was life able'.",
    ],
    [
      "The canyon is so deep ---- its floor can be several degrees warmer than its rim.",
      ["that", "which", "as", "such", "than"],
      "'so deep that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- the changes in the Earth's orbit are very small, they can trigger the start and end of ice ages.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Yörünge değişikliklerinin çok küçük olması ile buzul çağlarını tetikleyebilmesi zıttır: 'Although'.",
    ],
    [
      "Homes ---- foundations rest on limestone may be at risk from sinkholes.",
      ["whose", "who", "which", "whom", "where"],
      "Temeller evlere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "The Earth is believed ---- almost completely frozen around seven hundred million years ago.",
      ["to have been", "was", "being", "be", "to be"],
      "Olay geçmişte kalmıştır; 'be believed to have been' yapısı gerekir: 'is believed to have been frozen'.",
    ],
    [
      "The waves travel through solid rock ---- slow down when they reach liquid.",
      ["but", "and so", "or", "unless", "because"],
      "Dalgaların katı kayada ilerlemesi ile sıvıya ulaşınca yavaşlaması karşıtlık bildirir: 'but'.",
    ],
    [
      "Air samples ---- at the observatory are analysed every hour.",
      ["collected", "collecting", "which collect", "to collect", "have collected"],
      "Hava örnekleri toplanan şeylerdir; edilgen anlamlı geçmiş ortaç 'collected' gerekir.",
    ],
    [
      "Scientists drill deep into the ice ---- they can study the air trapped in it.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The layers of rock look as if they ---- painted in bands of different colours.",
      ["had been", "are", "will be", "have", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır ve önceki bir duruma gönderme yapılır: 'had been'.",
    ],
    [
      "The deeper the waves travel into the Earth, ---- they become.",
      ["the faster", "faster", "the fastest", "more fast", "the more fast"],
      "'The deeper …, the faster …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Because no one can travel deep inside the Earth, scientists learn about its structure by studying how earthquake waves travel through it. There are two main types of wave: P-waves, which can pass through both solids and liquids, and S-waves, {1} can travel only through solids. In the early twentieth century, scientists noticed that S-waves did not reach certain parts of the Earth's surface on the opposite side from an earthquake. They concluded {2} the planet must have a liquid core that blocks them. In 1936, the Danish seismologist Inge Lehmann, studying records of a large earthquake in New Zealand, noticed that some weak P-waves appeared in a region where none should have been detected. She suggested that they had been reflected by a solid inner core {3} the liquid outer core. Her idea was soon accepted, and it has been confirmed by many later studies. Lehmann, {4} worked largely in her spare time during the early years of her career, continued to publish research until she was over ninety. She lived to the age of 104, {5} she is remembered today as one of the pioneers of seismology.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'S-waves' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(22) ----",
          ["that", "what", "which", "whose", "whom"],
          "'concluded that …' yapısında isim cümlesi bağlacı 'that' gerekir.",
        ],
        [
          "(23) ----",
          ["within", "without", "except", "beyond", "despite"],
          "Katı iç çekirdeğin sıvı dış çekirdeğin 'içinde' olduğu anlatılır: 'within'.",
        ],
        [
          "(24) ----",
          ["who", "which", "whose", "whom", "where"],
          "Boşluk virgülle ayrılan 'Lehmann' kişisini niteleyen ve özne görevindeki ilgi zamiridir: 'who'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Uzun yaşamı ile öncü olarak anılması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In 1958, the American scientist Charles David Keeling began measuring the concentration of carbon dioxide in the air at an observatory on Mauna Loa, a volcano in Hawaii. He chose the site {1} it was high above the ocean and far from cities and forests, so the air there was well mixed and represented the atmosphere as a whole. Within a few years, his measurements revealed two clear patterns. First, the level of carbon dioxide rose and fell every year: it decreased in the northern summer, {2} plants absorb carbon dioxide as they grow, and increased in winter, when many plants lose their leaves and decay. Second, and more importantly, the average level rose steadily from one year to the next. The graph of his results, {3} looks like a rising line with a regular zigzag, became known as the Keeling Curve. It provided the first clear evidence that people, chiefly by burning coal, oil and gas, were raising the amount of carbon dioxide in the atmosphere. Keeling's work was not always well funded, {4} he had to fight several times to keep the measurements going. {5}, the record continues today and is one of the most important data sets in climate science.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Yerin seçilme nedeni okyanusun yükseğinde ve kentlerden uzak olmasıdır: 'because'.",
        ],
        [
          "(27) ----",
          ["when", "unless", "although", "until", "whereas"],
          "Karbondioksitin bitkilerin büyüdüğü kuzey yazında azaldığı anlatılır: zaman bildiren 'when'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk virgülle ayrılan 'the graph' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "although", "or"],
          "Fonun yetersizliği ile ölçümleri sürdürmek için mücadele etmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["Nevertheless", "Therefore", "Similarly", "For example", "In other words"],
          "Fon sorunlarına rağmen kaydın bugün sürmesi karşıtlıktır: 'Nevertheless'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the Snowball Earth theory was controversial at first, ----.",
      [
        "it is now supported by evidence from many parts of the world",
        "it was proposed by geologists studying ancient rocks",
        "it suggests that ice once reached the equator",
        "the frozen period may have lasted millions of years",
        "volcanoes released carbon dioxide into the air",
      ],
      "'Although' zıtlık ister: kartopu Dünya kuramı başta tartışmalı olsa da bugün dünyanın pek çok yerinden elde edilen kanıtlarca desteklenmektedir.",
    ],
    [
      "If the Earth's orbit did not change over time, ----.",
      [
        "ice ages might not follow cycles",
        "the Sun had been brighter",
        "most glaciers will melt",
        "the planet rotated faster",
        "winters are cold",
      ],
      "Type 2 koşul cümlesi ana cümlede 'might + yalın fiil' ister: buzul çağları düzenli döngüler hâlinde gerçekleşmeyebilirdi.",
    ],
    [
      "Visitors to the canyon can see rocks of very different ages ----.",
      [
        "because the river has cut through layer after layer",
        "so that the canyon becomes deeper every year",
        "although the rocks are all exactly the same",
        "unless they walk to the bottom",
        "even if the river is dry",
      ],
      "Ziyaretçilerin çok farklı yaşlarda kayaları görebilmesinin nedeni nehrin katman katman aşındırmasıdır: 'because'.",
    ],
    [
      "Since Keeling began his measurements in 1958, ----.",
      [
        "carbon dioxide has risen by a third",
        "scientists had studied the atmosphere",
        "most volcanoes would have erupted",
        "the curve will be published",
        "few people lived in Hawaii",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has risen'.",
    ],
    [
      "Unless the ground above a cave is checked before building, ----.",
      [
        "a sinkhole may open",
        "the cave would have been filled",
        "most builders had used limestone",
        "the river will flow underground",
        "the house was very old",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: bir evin altında aniden bir obruk açılabilir.",
    ],
    [
      "The change in the speed of the waves was so sudden ----.",
      [
        "that it pointed to a sharp boundary inside the Earth",
        "because the waves travelled through different materials",
        "although the earthquake was very far away",
        "unless the instruments were faulty",
        "while the crust is only a few kilometres thick",
      ],
      "'so sudden that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Geologists have found that when glaciers melted at the end of the frozen period, ----.",
      [
        "unusual rock layers formed",
        "the planet would have stayed cold",
        "most oceans had dried up",
        "life will spread quickly",
        "the Sun was very weak",
      ],
      "'when' ile genel bir bulgu anlatılır: buz dönemi sonunda buzullar eridiğinde buz çökellerinin üzerinde kalın, alışılmadık kaya katmanları oluştu.",
    ],
    [
      "So slowly does the river cut into the rock ----.",
      [
        "that the canyon took millions of years to form",
        "because the rock is very hard in some places",
        "although it carries large amounts of sand",
        "while tourists visit the canyon every day",
        "unless there is heavy rain",
      ],
      "Devrik 'So slowly does … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While P-waves can travel through liquids, ----.",
      [
        "S-waves are stopped by them",
        "earthquakes happen all over the world",
        "seismographs record the waves",
        "the Earth's crust is solid",
        "the waves were named by scientists",
      ],
      "'While' iki dalga türünü karşılaştırır: P-dalgaları sıvılardan geçebilirken S-dalgaları onlar tarafından durdurulur.",
    ],
    [
      "Once Milankovitch had completed his calculations, ----.",
      [
        "he could date past ice ages",
        "the ice ages will begin again",
        "the Earth would have stopped moving",
        "the planet orbits the Sun",
        "most scientists had accepted them",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: geçmiş buzul çağlarının ne zaman olması gerektiğini öngörebildi.",
    ],
    [
      "No sooner had the earthquake struck ----.",
      [
        "than seismographs recorded it",
        "when the scientists had arrived",
        "that the waves will travel",
        "before the instruments had been built",
        "so the buildings fell down",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Scientists learn about the Earth's interior by studying how earthquake waves travel through it.",
      [
        "Bilim insanları, deprem dalgalarının Dünya'nın içinden nasıl geçtiğini inceleyerek onun iç yapısını öğrenir.",
        "Bilim insanları, Dünya'nın iç yapısını öğrenmek için deprem dalgaları oluşturur.",
        "Deprem dalgaları, bilim insanlarının Dünya'nın içine girmesini engeller.",
        "Bilim insanları, Dünya'nın iç yapısını doğrudan gözlemleyerek öğrenir.",
        "Deprem dalgaları, Dünya'nın yüzeyi dışında hiçbir yerden geçmez.",
      ],
      "'learn about the Earth's interior' 'Dünya'nın iç yapısını öğrenir', 'by studying how earthquake waves travel through it' 'deprem dalgalarının onun içinden nasıl geçtiğini inceleyerek' demektir.",
    ],
    [
      "The level of carbon dioxide falls in summer, when plants absorb it as they grow.",
      [
        "Karbondioksit düzeyi, bitkilerin büyürken onu soğurduğu yaz aylarında düşer.",
        "Karbondioksit düzeyi, bitkilerin büyümediği yaz aylarında yükselir.",
        "Bitkiler, karbondioksit düzeyi düştüğünde büyümeyi bırakır.",
        "Yazın bitkiler, havaya büyük miktarda karbondioksit salar.",
        "Karbondioksit düzeyi, mevsimlere göre hiç değişmez.",
      ],
      "'falls in summer' 'yaz aylarında düşer', 'when plants absorb it as they grow' 'bitkilerin büyürken onu soğurduğu' demektir.",
    ],
    [
      "Volcanoes may have helped to end the frozen period by releasing carbon dioxide.",
      [
        "Volkanlar, karbondioksit salarak donmuş dönemin sona ermesine yardım etmiş olabilir.",
        "Volkanlar, karbondioksit salarak donmuş dönemin başlamasına neden olmuştur.",
        "Donmuş dönem, volkanların karbondioksit salmasını engellemiştir.",
        "Karbondioksit, volkanların donmuş dönemde patlamasını önlemiştir.",
        "Volkanların donmuş dönemle hiçbir ilgisi olmamıştır.",
      ],
      "'may have helped to end the frozen period' 'donmuş dönemin sona ermesine yardım etmiş olabilir', 'by releasing carbon dioxide' 'karbondioksit salarak' demektir.",
    ],
    [
      "The cycles affect how much sunlight reaches high northern latitudes in summer.",
      [
        "Döngüler, yazın kuzeydeki yüksek enlemlere ne kadar güneş ışığı ulaştığını etkiler.",
        "Döngüler, kışın güney yarımküreye ulaşan güneş ışığını tamamen keser.",
        "Kuzeydeki yüksek enlemler, döngülerin uzunluğunu belirler.",
        "Güneş ışığı, yazın kuzeydeki yüksek enlemlere hiç ulaşmaz.",
        "Döngülerin güneş ışığı üzerinde hiçbir etkisi yoktur.",
      ],
      "'affect how much sunlight reaches' 'ne kadar güneş ışığı ulaştığını etkiler', 'high northern latitudes in summer' 'yazın kuzeydeki yüksek enlemler' demektir.",
    ],
    [
      "The oldest rocks at the bottom of the canyon are almost two billion years old.",
      [
        "Kanyonun dibindeki en yaşlı kayalar neredeyse iki milyar yaşındadır.",
        "Kanyonun tepesindeki en genç kayalar neredeyse iki milyar yaşındadır.",
        "Kanyonun dibindeki kayalar, en üsttekilerden daha gençtir.",
        "Kanyondaki kayaların yaşı belirlenememiştir.",
        "Kanyon, yaklaşık iki milyar yıl önce tamamen kaybolmuştur.",
      ],
      "'The oldest rocks at the bottom of the canyon' 'kanyonun dibindeki en yaşlı kayalar', 'are almost two billion years old' 'neredeyse iki milyar yaşındadır' demektir.",
    ],
    [
      "Water flowing through cracks in limestone gradually widens them into caves.",
      [
        "Kireçtaşındaki çatlaklardan akan su, onları yavaş yavaş mağaralara dönüşecek şekilde genişletir.",
        "Kireçtaşındaki mağaralar, içlerinden akan su nedeniyle yavaş yavaş daralır.",
        "Çatlaklardaki su, kireçtaşının mağara oluşturmasını engeller.",
        "Mağaralar, kireçtaşının üzerine düşen yağmurla değil rüzgârla oluşur.",
        "Kireçtaşı, su ile temas ettiğinde hiçbir değişikliğe uğramaz.",
      ],
      "'Water flowing through cracks in limestone' 'kireçtaşındaki çatlaklardan akan su', 'gradually widens them into caves' 'onları yavaş yavaş mağaralara dönüşecek şekilde genişletir' demektir.",
    ],
  ],
  trEn: [
    [
      "Lehmann, Dünya'nın katı bir iç çekirdeği olduğunu öne sürdü.",
      [
        "Lehmann suggested that the Earth has a solid inner core.",
        "Lehmann proved that the Earth has no core at all.",
        "Lehmann suggested that the Earth's core is completely liquid.",
        "The Earth's inner core was discovered long before Lehmann.",
        "Lehmann suggested that the Earth is hollow.",
      ],
      "'katı bir iç çekirdeği olduğunu öne sürdü' 'suggested that the Earth has a solid inner core' karşılığıdır.",
    ],
    [
      "Keeling eğrisi, atmosferdeki karbondioksitin sürekli arttığını gösterir.",
      [
        "The Keeling Curve shows that carbon dioxide in the atmosphere is rising continuously.",
        "The Keeling Curve shows that carbon dioxide in the atmosphere is falling.",
        "Carbon dioxide in the atmosphere was used to draw the first maps.",
        "The Keeling Curve shows the temperature of the oceans.",
        "Carbon dioxide levels have not changed since the Keeling Curve began.",
      ],
      "'karbondioksitin sürekli arttığını gösterir' 'shows that carbon dioxide … is rising continuously' karşılığıdır.",
    ],
    [
      "Bazı bilim insanları, Dünya'nın bir zamanlar tamamen buzla kaplı olduğuna inanır.",
      [
        "Some scientists believe that the Earth was once completely covered in ice.",
        "Some scientists believe that the Earth has never had any ice.",
        "All scientists agree that the Earth is still completely covered in ice.",
        "Some scientists believe that the ice on Earth will never melt.",
        "Ice once covered only the highest mountains on Earth.",
      ],
      "'bir zamanlar tamamen buzla kaplı olduğuna inanır' 'believe that the Earth was once completely covered in ice' karşılığıdır.",
    ],
    [
      "Dünya'nın yörüngesindeki değişiklikler, buzul çağlarının zamanlamasını etkiler.",
      [
        "Changes in the Earth's orbit affect the timing of ice ages.",
        "Ice ages change the shape of the Earth's orbit.",
        "The timing of ice ages has nothing to do with the Earth's orbit.",
        "Changes in the Earth's orbit prevent ice ages from occurring.",
        "Ice ages happen only when the Earth stops moving.",
      ],
      "'yörüngesindeki değişiklikler' 'changes in the Earth's orbit', 'buzul çağlarının zamanlamasını etkiler' 'affect the timing of ice ages' karşılığıdır.",
    ],
    [
      "Kanyonun duvarları, yüz milyonlarca yıllık jeolojik tarihi gözler önüne serer.",
      [
        "The walls of the canyon reveal hundreds of millions of years of geological history.",
        "The walls of the canyon were built hundreds of years ago.",
        "Geological history is hidden by the walls of the canyon.",
        "The canyon was formed in a few hundred years.",
        "The walls of the canyon show no signs of geological history.",
      ],
      "'yüz milyonlarca yıllık jeolojik tarihi gözler önüne serer' 'reveal hundreds of millions of years of geological history' karşılığıdır.",
    ],
    [
      "Obruklar, yeraltındaki kayalar çözündüğünde aniden oluşabilir.",
      [
        "Sinkholes can form suddenly when rocks underground dissolve.",
        "Sinkholes are filled in when rocks underground dissolve.",
        "Rocks underground are created when sinkholes form.",
        "Sinkholes can only form over many millions of years.",
        "Underground rocks never dissolve.",
      ],
      "'aniden oluşabilir' 'can form suddenly', 'yeraltındaki kayalar çözündüğünde' 'when rocks underground dissolve' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1960s and 1970s, geologists studying ancient rocks found a puzzling pattern. In many parts of the world, including places that were once close to the equator, they discovered deposits left by glaciers that were between about 720 and 635 million years old. Some of these deposits were covered by thick layers of limestone, a rock that normally forms in warm, shallow seas. In 1992, the American geologist Joseph Kirschvink proposed an explanation that became known as the 'Snowball Earth' hypothesis. He suggested that ice had spread from the poles almost to the equator, covering nearly the entire planet. Once a large area was covered, the white ice reflected so much sunlight back into space that the Earth became even colder, allowing the ice to spread further. The planet may have remained frozen for millions of years. Eventually, volcanoes, which continued to erupt through the ice, released enough carbon dioxide to trap heat and melt the ice. The sudden warming could explain the limestone layers above the glacial deposits. The hypothesis remains debated, and some scientists argue that a narrow band of open water may have survived near the equator, allowing simple life to continue.",
      questions: [
        [
          "According to the passage, the hypothesis was proposed to explain ----.",
          [
            "ancient ice deposits near the equator",
            "the origin of volcanoes",
            "why the Earth is warm today",
            "how limestone is formed in deep oceans",
            "why the poles are covered in ice",
          ],
          "Metne göre jeologlar bir zamanlar ekvatora yakın olan yerler dahil dünyanın pek çok bölgesinde buzul çökelleri buldu.",
        ],
        [
          "The writer explains that once ice covered a large area, ----.",
          [
            "more sunlight was reflected",
            "the volcanoes stopped erupting",
            "the oceans became warmer",
            "the ice began to melt quickly",
            "limestone formed on top of it",
          ],
          "Metinde beyaz buzun çok fazla güneş ışığını uzaya yansıtması nedeniyle Dünya'nın daha da soğuduğu belirtilir.",
        ],
        [
          "It can be understood from the passage that scientists ----.",
          [
            "still debate the extent of freezing",
            "have proved that no water remained liquid",
            "believe the ice lasted only a few years",
            "reject the idea of ancient glaciers",
            "think that volcanoes caused the freezing",
          ],
          "Kuramın hâlâ tartışılması ve bazılarının ekvator yakınında açık su kalmış olabileceğini savunması, donmanın ne kadar tam olduğu konusunda anlaşmazlık olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "In the early twentieth century, the Serbian mathematician Milutin Milanković set out to explain the causes of the ice ages. He knew that the Earth's orbit around the Sun is not fixed but changes in three ways over long periods. The shape of the orbit varies from nearly circular to slightly oval over a cycle of about a hundred thousand years. The tilt of the Earth's axis changes between about 22 and 24.5 degrees over around forty-one thousand years. And the direction in which the axis points slowly wobbles over a cycle of about twenty-three thousand years. None of these changes alters the total amount of sunlight the Earth receives very much, but together they change how that sunlight is distributed between seasons and latitudes. Milanković argued that the most important factor was the amount of summer sunshine at high northern latitudes: if summers there were cool, snow from the winter would not melt completely and would gradually build up into ice sheets. He spent years calculating these cycles by hand, often working in difficult conditions during the First World War. His theory received little support during his lifetime, but in 1976, studies of ocean sediments revealed climate cycles that matched his predictions closely.",
      questions: [
        [
          "According to the passage, the three changes in the Earth's orbit ----.",
          [
            "change where sunlight falls",
            "greatly increase the total sunlight the Earth receives",
            "all follow the same cycle of a hundred thousand years",
            "were discovered by studying ocean sediments",
            "have no effect on the climate",
          ],
          "Metinde bu değişikliklerin toplam güneş ışığını pek değiştirmediği ama mevsimler ve enlemler arasındaki dağılımını değiştirdiği belirtilir.",
        ],
        [
          "According to Milanković, ice sheets grow when ----.",
          [
            "northern summers are cool",
            "the Earth receives more sunlight overall",
            "the axis of the Earth stops moving",
            "the orbit becomes perfectly circular",
            "winters become warmer",
          ],
          "Milanković'e göre kuzeydeki yüksek enlemlerde yazlar serin olursa kış karları tamamen erimez ve zamanla buz tabakalarına dönüşür.",
        ],
        [
          "It can be inferred from the passage that the 1976 studies ----.",
          [
            "provided strong support for Milanković's theory",
            "showed that his calculations were wrong",
            "were carried out by Milanković himself",
            "proved that ice ages never occurred",
            "were based on calculations made by hand",
          ],
          "Okyanus tortularındaki iklim döngülerinin öngörüleriyle yakından örtüşmesi, kuramına güçlü destek sağladığını gösterir.",
        ],
      ],
    },
    {
      text:
        "The Grand Canyon in Arizona is around 450 kilometres long and, in places, more than 1.8 kilometres deep. It was carved mainly by the Colorado River, which has been cutting down through the rock for several million years as the surrounding land has slowly been pushed upwards. As a result, its walls expose a remarkable sequence of rock layers, like the pages of a book. The rocks at the bottom of the canyon are almost two billion years old, while those at the top are around 270 million years old. Most of the layers were formed from sediments deposited in seas, rivers, deserts and swamps that covered the region at different times, and many contain fossils of the plants and animals that lived there. By studying the layers from bottom to top, geologists can reconstruct how the environment of the region changed over hundreds of millions of years. However, the record is not complete. In several places, large gaps exist between layers, where rocks were worn away before new sediments were deposited. One of these gaps, known as the Great Unconformity, represents more than a billion years of missing history, and its cause is still debated.",
      questions: [
        [
          "According to the passage, the canyon was formed by ----.",
          [
            "a river cutting down as the land rose",
            "an earthquake that split the ground",
            "glaciers that moved across the region",
            "the wind blowing sand against the rocks",
            "the collapse of underground caves",
          ],
          "Metne göre kanyon çevredeki arazi yavaşça yükselirken kayaları aşındıran Colorado Nehri tarafından oluşturuldu.",
        ],
        [
          "The comparison with 'the pages of a book' is used to suggest that the rock layers ----.",
          [
            "record history in sequence",
            "are easy to remove",
            "contain written records",
            "are all the same age",
            "were made by humans",
          ],
          "'Bir kitabın sayfaları' benzetmesi, kaya katmanlarının bölgenin tarihini sırayla kaydettiğini anlatır.",
        ],
        [
          "It can be understood from the passage that the Great Unconformity ----.",
          [
            "marks a long missing period",
            "contains the oldest fossils in the canyon",
            "was formed by the Colorado River",
            "is the youngest layer in the canyon",
            "has been fully explained by geologists",
          ],
          "Büyük Uyumsuzluğun bir milyar yılı aşan kayıp tarihi temsil etmesi, kaya kaydının günümüze ulaşmadığı uzun bir dönemi gösterdiğini belirtir.",
        ],
      ],
    },
    {
      text:
        "Karst is the name given to landscapes formed on soluble rocks, especially limestone. Rainwater absorbs carbon dioxide from the air and soil, forming a weak acid that slowly dissolves limestone as it seeps through cracks. Over thousands of years, these cracks widen into underground channels and caves, and rivers may disappear underground for long distances. In some places, the roofs of caves collapse, creating sinkholes, which can range from small hollows to huge pits hundreds of metres across. Inside caves, the process can also work in reverse: water dripping from the ceiling releases carbon dioxide and leaves behind tiny amounts of calcite, which gradually build up into stalactites hanging from the roof and stalagmites rising from the floor. Karst landscapes cover around a tenth of the Earth's land surface and provide drinking water for a large part of the world's population. However, because water flows quickly through karst without being filtered by soil, pollution from farms, factories and sewage can spread rapidly into underground supplies. Sinkholes also pose a hazard to buildings and roads, particularly when the removal of groundwater for human use causes the ground to weaken.",
      questions: [
        [
          "According to the passage, limestone is dissolved by ----.",
          [
            "slightly acidic rainwater",
            "the heat of the Sun",
            "the roots of trees",
            "underground volcanoes",
            "strong winds",
          ],
          "Metne göre yağmur suyu havadan ve topraktan karbondioksit emerek kireçtaşını yavaşça çözen zayıf bir asit oluşturur.",
        ],
        [
          "The writer explains that stalactites and stalagmites form when ----.",
          [
            "dripping water leaves mineral",
            "the roof of a cave collapses",
            "rivers disappear underground",
            "acid dissolves limestone",
            "pollution enters the water",
          ],
          "Metinde tavandan damlayan suyun karbondioksit salarak geride küçük miktarlarda kalsit bıraktığı ve bunların sarkıt ve dikitleri oluşturduğu belirtilir.",
        ],
        [
          "It can be inferred from the passage that water supplies in karst areas ----.",
          [
            "are easily polluted",
            "are cleaner than in other regions",
            "are filtered carefully by the soil",
            "cannot be used for drinking",
            "are found only in caves",
          ],
          "Suyun toprakla süzülmeden hızla akması nedeniyle kirliliğin yeraltı kaynaklarına hızla yayılabilmesi, bu kaynakların kirlenmeye karşı özellikle savunmasız olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "In October 1909, a strong earthquake struck the Kupa valley in Croatia. The Croatian scientist Andrija Mohorovičić collected the records produced by seismographs at stations across Europe and studied how long the waves had taken to reach each one. He noticed something unexpected: at stations more than about two hundred kilometres from the earthquake, two different sets of waves arrived, one slightly before the other. He concluded that some of the waves had travelled directly through the upper layer of the Earth, while others had gone deeper and been bent back up after passing through a layer of denser rock in which they could travel faster. This showed that there was a sharp boundary between the Earth's crust and the mantle beneath it. The boundary, now called the Mohorovičić discontinuity or simply the 'Moho', lies at a depth of about thirty-five kilometres beneath the continents but only five to ten kilometres beneath the oceans. In the 1950s and 1960s, scientists in the United States attempted to drill through the ocean floor to reach it, but the project was abandoned because of rising costs. No one has yet drilled through the crust to the mantle.",
      questions: [
        [
          "According to the passage, Mohorovičić noticed that at distant stations ----.",
          [
            "two sets of waves arrived",
            "no waves were recorded at all",
            "the waves arrived before the earthquake",
            "the waves were much stronger than expected",
            "only one type of wave was detected",
          ],
          "Metne göre depremden yaklaşık iki yüz kilometreden uzak istasyonlarda biri diğerinden biraz önce olmak üzere iki farklı dalga kümesi ulaştı.",
        ],
        [
          "It can be understood from the passage that the Moho ----.",
          [
            "is shallower under the oceans",
            "is deeper beneath the oceans",
            "was reached by drilling in the 1960s",
            "lies at the centre of the Earth",
            "was discovered in the 1950s",
          ],
          "Moho'nun kıtaların altında yaklaşık otuz beş kilometre, okyanusların altında ise yalnızca beş ila on kilometre derinlikte olması bu sonucu verir.",
        ],
        [
          "The writer mentions the drilling project in order to show that ----.",
          [
            "reaching the mantle is hard",
            "the Moho does not really exist",
            "the project was a great success",
            "earthquakes are caused by drilling",
            "the crust is thicker beneath the oceans",
          ],
          "Sondaj projesinin artan maliyetler nedeniyle terk edilmesi ve henüz kimsenin mantoya ulaşamaması, mantoya doğrudan ulaşmanın son derece zor olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Large boulders are sometimes found far from any rocks of the same type. ---- Such boulders, known as erratics, provided early evidence that ice sheets had once covered much of northern Europe.",
      [
        "Geologists realised that they had been carried there by glaciers.",
        "Many boulders are used as landmarks by walkers and climbers.",
        "Some rocks are much harder than others and resist weathering.",
        "Northern Europe has a cool and often wet climate.",
        "Rocks can be classified as igneous, sedimentary or metamorphic.",
      ],
      "Boşluktan sonra 'Such boulders' ile buzul taşlarının buz tabakalarına kanıt oluşturduğu söylenir; boşluğa jeologların bunların buzullarla taşındığını anladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Obsidian is a type of volcanic glass that forms when lava cools very quickly. ---- For this reason, it was used by many ancient peoples to make knives and arrowheads.",
      [
        "When it breaks, it produces extremely sharp edges.",
        "Many volcanoes sit near plate boundaries.",
        "Lava can reach temperatures of more than a thousand degrees.",
        "Glass is also made by humans from sand.",
        "Some volcanoes erupt only once every few thousand years.",
      ],
      "Boşluktan sonra 'For this reason' ile bıçak ve ok ucu yapımında kullanıldığı söylenir; boşluğa kırıldığında son derece keskin kenarlar oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "A river flowing across flat land often develops wide loops called meanders. ---- Eventually, the river may cut across the narrow neck of a loop, leaving behind a curved lake.",
      [
        "The loops slowly grow as the outer bank erodes.",
        "Rivers provide water for farming, industry and drinking.",
        "Many cities have been built beside large rivers.",
        "Fish and birds are attracted to rivers and lakes.",
        "Some rivers flood every year after heavy rain.",
      ],
      "Boşluktan önce menderesler tanıtılır, sonra nehrin dar boğazı kestiği anlatılır; boşluğa döngülerin dış kıyının aşınmasıyla zamanla büyüdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "Basalt is the most common rock on the Earth's surface. ---- It forms when lava rich in iron and magnesium cools relatively quickly.",
      [
        "It makes up most of the ocean floor.",
        "Many famous buildings are made of granite or marble.",
        "Rocks are worn away by wind, rain and ice.",
        "Some rocks contain fossils of ancient plants.",
        "Diamonds are formed deep inside the Earth.",
      ],
      "Boşluktan önce bazaltın en yaygın kaya olduğu, sonra nasıl oluştuğu anlatılır; boşluğa okyanus tabanının büyük kısmını oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Diamonds form about a hundred and fifty kilometres below the surface, where temperatures and pressures are extremely high. ---- These eruptions happened millions of years ago and left behind deep pipes of rock that are now mined.",
      [
        "They reach the surface in rare, violent eruptions.",
        "Diamonds are the hardest natural substance on Earth.",
        "Many diamonds are used in industry to cut and drill.",
        "The value of a diamond depends on its size and clarity.",
        "Some diamonds are coloured by small amounts of other elements.",
      ],
      "Boşluktan sonra 'These eruptions' (bu patlamalar) belirli bir olgu olarak anılır; boşluğa elmasların nadir ve çok hızlı volkanik patlamalarla yüzeye taşındığını söyleyen cümle gelmelidir.",
    ],
    [
      "Fjords are long, narrow inlets of the sea with steep sides. ---- When the ice melted, the sea flooded in, filling the deep valleys.",
      [
        "They were carved by glaciers during the ice ages.",
        "Norway is famous for its many fjords.",
        "Tourists often visit fjords by boat in the summer.",
        "Cruise ships often sail into the largest fjords.",
        "Fishing is an important industry along many coasts.",
      ],
      "Boşluktan sonra 'When the ice melted' ile denizin derin vadileri doldurduğu söylenir; boşluğa fiyortların buzul çağlarında buzullarca oyulduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Geysers are hot springs that regularly shoot columns of water and steam into the air.",
        "They occur where groundwater is heated by hot rock deep below the surface.",
        "Many hotels in volcanic regions offer spa treatments.",
        "Pressure builds up in narrow underground channels until the water bursts out.",
        "Fewer than a thousand active geysers are known in the world.",
      ],
      odd: 2,
      why: "Parça gayzerlerin oluşumunu anlatır. Volkanik bölgelerdeki otellerin kaplıca hizmeti sunduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sand dunes are shaped by the wind.",
        "Grains of sand are blown up the gentle side and fall down the steeper side.",
        "In this way, dunes can slowly move across the desert.",
        "Desert nights can be surprisingly cold.",
        "Some large dunes travel several metres each year.",
      ],
      odd: 3,
      why: "Parça kum tepelerinin rüzgârla şekillenmesini anlatır. Develerin binlerce yıldır çölleri geçmek için kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Amber is fossilised tree resin.",
        "Insects and small animals sometimes became trapped in the sticky resin.",
        "Many kinds of jewellery are sold in tourist shops.",
        "As the resin hardened, it preserved them in remarkable detail.",
        "Scientists study these fossils to learn about ancient ecosystems.",
      ],
      odd: 2,
      why: "Parça kehribarı ve içinde korunan fosilleri anlatır. Turistik dükkânlarda pek çok takı satıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Quartz is one of the most common minerals in the Earth's crust.",
        "It is very hard and resistant to weathering.",
        "When it is squeezed, it produces a small electric charge.",
        "Many people keep crystals in their homes as decorations.",
        "This property is used in watches to keep accurate time.",
      ],
      odd: 3,
      why: "Parça kuvarsın özelliklerini ve saatlerde kullanımını anlatır. İnsanların evlerinde süs olarak kristal tuttuğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "River deltas form where rivers enter the sea and deposit their sediment.",
        "They are often very fertile and support large populations.",
        "Many deltas are now sinking because dams upstream trap the sediment.",
        "Some famous rivers flow through several countries.",
        "Rising sea levels add to the threat facing these regions.",
      ],
      odd: 3,
      why: "Parça nehir deltalarını ve karşılaştıkları tehditleri anlatır. Bazı ünlü nehirlerin birkaç ülkeden geçtiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hoodoos are tall, thin spires of rock found in dry regions.",
        "Visitors often photograph them at sunset.",
        "They form when a hard layer of rock protects the softer rock beneath it.",
        "Rain and frost gradually wear away the surrounding rock.",
        "Over time, this leaves behind columns with a cap on top.",
      ],
      odd: 1,
      why: "Parça peri bacası benzeri kaya sütunlarını (hoodoo) anlatır. Pek çok milli parkın giriş ücreti aldığını söyleyen II. cümle konu dışıdır.",
    },
  ],
};
