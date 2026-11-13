import type { YokdilDeneme } from "./types";

export const FEN_49: YokdilDeneme = {
  no: 49,
  field: "fen",
  vocab: [
    [
      "Steam and gas began to ---- from cracks near the summit of the volcano.",
      ["escape", "decorate", "apologise", "negotiate", "postpone"],
      "Yanardağın zirvesindeki çatlaklardan buhar ve gazın 'çıkmaya' (escape) başladığı anlatılır.",
    ],
    [
      "The residents were ---- by fishing boats within a few hours of the eruption's start.",
      ["evacuated", "entertained", "elected", "employed", "educated"],
      "Sakinlerin patlamanın başlamasından birkaç saat içinde balıkçı tekneleriyle 'tahliye edildiği' (evacuated) anlatılır.",
    ],
    [
      "The mudflow was so ---- that it destroyed almost everything in its path.",
      ["destructive", "fragile", "delicate", "predictable", "transparent"],
      "Çamur akıntısının yolundaki neredeyse her şeyi yok edecek kadar 'yıkıcı' (destructive) olduğu anlatılır.",
    ],
    [
      "After centuries of being ----, the volcano suddenly returned to life in 1995.",
      ["dormant", "crowded", "famous", "artificial", "fertile"],
      "Yanardağın yüzyıllarca 'uykuda' (dormant) kaldıktan sonra 1995'te birden canlandığı anlatılır.",
    ],
    [
      "The ash cloud caused ---- disruption to air travel across Europe.",
      ["widespread", "minor", "imaginary", "delicious", "ancient"],
      "Kül bulutunun Avrupa genelinde hava yolculuğunda 'yaygın' (widespread) aksamaya yol açtığı anlatılır.",
    ],
    [
      "The pumps were switched off, and the cave soon ---- with water again.",
      ["filled up", "gave in", "turned down", "set off", "looked into"],
      "Pompalar kapatılınca mağaranın kısa sürede yeniden suyla 'dolduğu' (filled up) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By 1991, the couple ---- more than a hundred eruptions around the world.",
      ["had filmed", "film", "have filmed", "will film", "are filming"],
      "Geçmişteki bir zamana kadar tamamlanmış eylem: 'had filmed'.",
    ],
    [
      "If the authorities had acted on the hazard map, thousands of lives ---- saved.",
      ["could have been", "can be", "will be", "had been", "are being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'could have been'.",
    ],
    [
      "The town ---- after the volcano buried it under ash in 1997.",
      ["was abandoned", "abandoned", "has abandoned", "abandons", "is abandoning"],
      "Kasaba terk edilmiştir; edilgen geçmiş zaman: 'was abandoned'.",
    ],
    [
      "---- the lava was moving towards the harbour, the islanders decided to fight it.",
      ["As", "Although", "Unless", "Whereas", "Until"],
      "Lavın limana doğru ilerlemesi kararın nedenidir: 'As'.",
    ],
    [
      "The prisoner, ---- cell had thick stone walls, was one of the few survivors.",
      ["whose", "who", "which", "whom", "where"],
      "Mahkûmun hücresi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Seldom ---- scientists had the chance to watch a volcano erupt so closely.",
      ["have", "did", "were", "has", "do"],
      "'Seldom' ile devrik yapı; çoğul özneyle 'have'.",
    ],
    [
      "The ash can melt inside jet engines, ---- is why planes were not allowed to fly.",
      ["which", "what", "that", "who", "where"],
      "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more seawater they pumped onto the lava, ---- it became.",
      ["the harder", "the hardest", "harder", "hardest", "so hard"],
      "'The more ..., the harder ...' paralel yapısı: 'the harder'.",
    ],
    [
      "The couple had filmed eruptions for years ---- they were killed in Japan.",
      ["before", "unless", "so that", "whereas", "as if"],
      "Yıllarca film çekmeleri ölümlerinden öncedir: 'before'.",
    ],
    [
      "The explosion was so powerful ---- its pressure wave travelled around the world several times.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The officials are said ---- people not to leave the town before the election.",
      ["to have encouraged", "encouraging", "to encourage", "encouraged", "having encouraged"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have encouraged'.",
    ],
    [
      "Rangers can predict the geyser's next eruption ---- the length of the previous one.",
      ["on the basis of", "in spite of", "instead of", "in case of", "regardless of"],
      "Tahminin dayanağı bir önceki patlamanın süresidir: 'on the basis of'.",
    ],
    [
      "Had the boats not been in the harbour that night, the evacuation ---- much more difficult.",
      ["would have been", "will be", "is", "had been", "would be"],
      "Devrik üçüncü tip koşul cümlesi: 'would have been'.",
    ],
    [
      "The officials considered ---- the town before the eruption but decided against it.",
      ["evacuating", "to evacuate", "evacuate", "evacuated", "to evacuating"],
      "'consider doing sth' kalıbı: 'evacuating'.",
    ],
  ],
  cloze: [
    {
      text:
        "Katia and Maurice Krafft, two French scientists from Alsace, met at the University of Strasbourg in the 1960s and discovered that they shared a passion for volcanoes. They married in 1970, {1} for the next two decades they travelled to well over a hundred eruptions on every continent. Rather than working for a university, they supported themselves by selling their photographs and films and by writing popular books, {2} made them famous in France. Their work was not only spectacular. They believed that most deaths caused by volcanoes could be prevented if people and governments understood the dangers, {3} they made educational films showing the different kinds of volcanic hazard. One of these films was shown to officials in the Philippines in 1991, a few weeks before a major eruption there, and is credited with helping to persuade them to evacuate tens of thousands of people. By then, the Kraffts were in Japan, filming Mount Unzen, {4} had begun to erupt after nearly two hundred years of quiet. On 3 June 1991, a pyroclastic flow travelled much further down the mountain than expected and swept over the place {5} they were standing. The couple were killed together with the American volcanologist Harry Glicken and about forty journalists, firefighters and local residents. Footage they had shot was later collected in documentary films about their lives.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Evlenmeleri ve sonraki yıllarda birlikte yolculuk etmeleri birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(23) ----",
          ["so", "but", "or", "yet", "although"],
          "Tehlikelerin anlaşılması gerektiği inancının sonucu eğitici filmler yapmalarıdır: 'so'.",
        ],
        [
          "(24) ----",
          ["which", "who", "whose", "whom", "where"],
          "Virgülden sonra Unzen Dağı'nı niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(25) ----",
          ["where", "which", "when", "whose", "who"],
          "Yeri niteleyen ilgi zamiri: 'where'.",
        ],
      ],
    },
    {
      text:
        "In the early hours of 23 January 1973, a crack nearly two kilometres long opened on the island of Heimaey, off the south coast of Iceland, only a short distance from the edge of its only town. Fountains of lava shot into the air. Fortunately, a storm the previous day had kept the island's fishing fleet in the harbour, {1} almost all of the roughly five thousand residents were taken to the mainland within hours. Over the following weeks, ash buried many houses, {2} a new volcano, later named Eldfell, rose more than two hundred metres. The greatest danger, however, was to the harbour, {3} was essential to the island's fishing industry. A flow of lava was advancing slowly towards its narrow entrance, {4} if it closed, the town would have little reason to exist. A physicist proposed an unusual solution: cooling the front of the flow with seawater to make it solidify. Using pumps mounted on boats and, later, powerful pumps brought from the United States, workers sprayed about six million tonnes of seawater onto the lava over five months. The flow eventually stopped, {5} the harbour entrance was left narrower but even more sheltered than before. Heat from the cooling lava was later used to warm homes on the island.",
      blanks: [
        [
          "(26) ----",
          ["so", "but", "or", "yet", "nor"],
          "Balıkçı filosunun limanda olmasının sonucu sakinlerin saatler içinde tahliye edilmesidir: 'so'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "because"],
          "Evlerin gömülmesi ve yeni yanardağın yükselmesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "when"],
          "Virgülden sonra limanı niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "whereas"],
          "Lavın ilerlemesi ve limanın kapanmasının doğuracağı sonuç bilgileri eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Akışın durması ve liman girişinin daha korunaklı kalması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although they had no university positions, ----.",
      [
        "the Kraffts became well-known volcanologists",
        "France has universities",
        "volcanoes are dangerous",
        "Alsace is in France",
        "the officials in the Philippines who watched one of their films decided to evacuate tens of thousands of people",
      ],
      "'Although' zıtlık ister: üniversitede görevleri olmasa da Krafftlar tanınmış volkanbilimciler oldu.",
    ],
    [
      "If the harbour entrance had been closed by lava, ----.",
      [
        "the island's fishing industry would have been ruined",
        "Iceland is in the north",
        "the sea is cold",
        "boats are useful",
        "the storm that kept the fishing fleet in the harbour would have arrived several days earlier",
      ],
      "Üçüncü tip koşul: liman girişi lavla kapansaydı adanın balıkçılık sektörü çökerdi.",
    ],
    [
      "----, officials did not order the town to be evacuated.",
      [
        "Even though a hazard map had shown the danger",
        "Because the volcano was quiet",
        "Unless the river flooded",
        "Since the town was small",
        "While a thirteen-year-old girl who had been trapped in the ruins of her house was waiting to be rescued",
      ],
      "'Even though' zıtlık ister: bir tehlike haritası riski göstermiş olmasına rağmen yetkililer kasabanın tahliyesini emretmedi.",
    ],
    [
      "Planes were kept on the ground during the eruption ----.",
      [
        "because volcanic ash can damage jet engines",
        "although the weather was fine",
        "unless passengers complained",
        "so that Iceland is an island",
        "while the authorities were changing the rules to allow flights through areas with low concentrations of ash",
      ],
      "Volkanik kül jet motorlarına zarar verebileceği için patlama sırasında uçaklar yerde tutuldu.",
    ],
    [
      "Since the volcano had been quiet for centuries, ----.",
      [
        "many people did not expect it to erupt",
        "the island is in the Caribbean",
        "the capital was small",
        "volcanoes are mountains",
        "scientists established an observatory to monitor its activity only after the eruptions had already destroyed the capital",
      ],
      "'Since' neden bildirir: yanardağ yüzyıllardır sessiz olduğu için pek çok kişi patlamasını beklemiyordu.",
    ],
    [
      "Not only did the eruption produce a tsunami, ----.",
      [
        "but it also cut the island's undersea communications cable",
        "and Tonga is in the Pacific",
        "since the ocean is deep",
        "so the volcano was underwater",
        "unless scientists had been studying the volcano for many years before the explosion occurred",
      ],
      "'Not only ... but also' yapısı tamamlanır: patlama tsunami oluşturmakla kalmadı, adanın denizaltı iletişim kablosunu da kopardı.",
    ],
    [
      "Once the pumps that kept the mine dry were switched off, ----.",
      [
        "the cave of giant crystals flooded again",
        "Mexico has many mines",
        "crystals are beautiful",
        "the cave was hot",
        "miners had been searching for silver and lead in the mountain for more than a century",
      ],
      "Madeni kuru tutan pompalar kapatılınca dev kristal mağarası yeniden su altında kaldı.",
    ],
    [
      "Unless observers record the length of each eruption, ----.",
      [
        "they cannot predict when the next one will occur",
        "geysers are hot",
        "the park is large",
        "tourists enjoy the show",
        "the rangers who work in the park will be unable to provide visitors with maps of the main walking paths",
      ],
      "'Unless' olumsuz koşul: gözlemciler her püskürmenin süresini kaydetmezse bir sonrakinin ne zaman olacağını öngöremezler.",
    ],
    [
      "The explosion was so loud ----.",
      [
        "that it was heard thousands of kilometres away",
        "although Tonga is small",
        "because the ocean is wide",
        "unless the wind blew",
        "while a large part of the volcano had already been lying hidden beneath the surface of the sea",
      ],
      "Patlama o kadar gürültülüydü ki binlerce kilometre öteden duyuldu.",
    ],
    [
      "Even though they knew the risks, ----.",
      [
        "the two volcanologists went close to active volcanoes to film them",
        "Japan has many volcanoes",
        "France is in Europe",
        "films are popular",
        "the journalists who had travelled to the mountain to report on the eruption stayed in a safe area several kilometres away",
      ],
      "'Even though' zıtlık ister: riskleri bilmelerine rağmen iki volkanbilimci etkin yanardağlara yaklaşarak film çekti.",
    ],
    [
      "As the cave's ceiling had collapsed in places, ----.",
      [
        "sunlight entered and allowed a forest to grow inside",
        "Vietnam has many caves",
        "the cave is large",
        "rivers flow through it",
        "a local man who had found its entrance in the early 1990s was unable to locate it again for many years",
      ],
      "Mağaranın tavanı yer yer çöktüğü için güneş ışığı girdi ve içeride bir orman büyüdü.",
    ],
  ],
  enTr: [
    [
      "The flow travelled much further down the mountain than expected.",
      [
        "Akıntı, dağdan beklenenden çok daha aşağıya kadar ilerledi.",
        "Akıntı, dağın zirvesinde beklenenden uzun süre kaldı.",
        "Dağdan beklenenden çok daha aşağıya ilerleyen akıntıyı gören gazeteciler, güvenli bir bölgeye kaçmayı başardı.",
        "Dağ akıntıdan daha uzundu.",
        "Akıntı hiç beklenmedik değildi.",
      ],
      "'The flow travelled much further down the mountain' 'akıntı dağdan çok daha aşağıya kadar ilerledi', 'than expected' 'beklenenden' karşılığıdır.",
    ],
    [
      "Workers sprayed seawater onto the front of the lava flow.",
      [
        "İşçiler, lav akıntısının ön kısmına deniz suyu püskürttü.",
        "İşçiler, lavı denize döktü.",
        "Lav akıntısının ön kısmına püskürtülen deniz suyu, işçilerin beklediğinin aksine lavın daha hızlı ilerlemesine yol açtı.",
        "Lav işçilerin üzerine aktı.",
        "Deniz suyu lavı ısıttı.",
      ],
      "'Workers sprayed seawater' 'işçiler deniz suyu püskürttü', 'onto the front of the lava flow' 'lav akıntısının ön kısmına' karşılığıdır.",
    ],
    [
      "The mudflow reached the town about two and a half hours after the eruption.",
      [
        "Çamur akıntısı, kasabaya patlamadan yaklaşık iki buçuk saat sonra ulaştı.",
        "Çamur akıntısı, kasabaya patlamadan iki buçuk gün önce ulaştı.",
        "Patlamadan iki buçuk saat sonra kasabaya ulaşan yetkililer, çamur akıntısının yön değiştirdiğini görerek rahatladı.",
        "Kasaba çamur akıntısından iki buçuk saat uzaktaydı.",
        "Patlama kasabada başladı.",
      ],
      "'The mudflow reached the town' 'çamur akıntısı kasabaya ulaştı', 'about two and a half hours after the eruption' 'patlamadan yaklaşık iki buçuk saat sonra' karşılığıdır.",
    ],
    [
      "About two-thirds of the island's population left after the eruptions began.",
      [
        "Patlamalar başladıktan sonra adanın nüfusunun yaklaşık üçte ikisi ayrıldı.",
        "Patlamalar başladıktan sonra adanın nüfusu üçte iki oranında arttı.",
        "Adanın nüfusunun üçte ikisinin ayrılmasından sonra başlayan patlamalar, adada kalanlara hiçbir zarar vermedi.",
        "Adada yalnızca iki üç kişi yaşıyordu.",
        "Ada nüfusu patlamalardan etkilenmedi.",
      ],
      "'About two-thirds of the island's population left' 'adanın nüfusunun yaklaşık üçte ikisi ayrıldı', 'after the eruptions began' 'patlamalar başladıktan sonra' karşılığıdır.",
    ],
    [
      "The ash cloud forced airlines to cancel about a hundred thousand flights.",
      [
        "Kül bulutu, havayollarını yaklaşık yüz bin uçuşu iptal etmeye zorladı.",
        "Kül bulutu, havayollarının yüz bin yeni uçuş eklemesini sağladı.",
        "Yaklaşık yüz bin uçuşu iptal eden havayolları, kül bulutunun yolcular için hiçbir tehlike oluşturmadığını açıkladı.",
        "Havayolları kül bulutunu yüz bin kez gözlemledi.",
        "Kül bulutu uçuşları etkilemedi.",
      ],
      "'forced airlines to cancel' 'havayollarını iptal etmeye zorladı', 'about a hundred thousand flights' 'yaklaşık yüz bin uçuşu' karşılığıdır.",
    ],
    [
      "The crystals grew slowly over hundreds of thousands of years in hot, mineral-rich water.",
      [
        "Kristaller, sıcak ve mineral bakımından zengin suda yüz binlerce yıl boyunca yavaşça büyüdü.",
        "Kristaller, soğuk suda birkaç yıl içinde hızla büyüdü.",
        "Sıcak ve mineral bakımından zengin suyu yüz binlerce yıl boyunca temizleyen kristaller, sonunda tamamen eriyerek yok oldu.",
        "Su kristallerin içinde büyüdü.",
        "Kristaller madenciler tarafından yapıldı.",
      ],
      "'The crystals grew slowly' 'kristaller yavaşça büyüdü', 'over hundreds of thousands of years in hot, mineral-rich water' 'sıcak ve mineral bakımından zengin suda yüz binlerce yıl boyunca' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Çift, kendilerini fotoğraf ve film satarak geçindirdi.",
      [
        "The couple supported themselves by selling photographs and films.",
        "The couple bought photographs and films from other scientists.",
        "The couple took many photographs and films, but they refused to sell any of them because they wanted to give them away.",
        "Photographs and films supported the couple's university.",
        "The couple were paid by a university.",
      ],
      "'Çift kendilerini geçindirdi' 'the couple supported themselves', 'fotoğraf ve film satarak' 'by selling photographs and films' karşılığıdır.",
    ],
    [
      "Soğuyan lavın ısısı daha sonra adadaki evleri ısıtmak için kullanıldı.",
      [
        "Heat from the cooling lava was later used to warm homes on the island.",
        "The homes on the island were used to cool the lava.",
        "The islanders planned to use heat from the cooling lava to warm their homes, but the scheme proved too expensive and was abandoned.",
        "The lava destroyed all the homes on the island.",
        "The island had no homes.",
      ],
      "'Soğuyan lavın ısısı' 'heat from the cooling lava', 'daha sonra adadaki evleri ısıtmak için kullanıldı' 'was later used to warm homes on the island' karşılığıdır.",
    ],
    [
      "Yetkililer, kasabayı tahliye etmeleri yönündeki uyarıları dikkate almadı.",
      [
        "The authorities ignored warnings that they should evacuate the town.",
        "The authorities evacuated the town immediately.",
        "The authorities warned the people of the town to leave, but most residents ignored the warnings and stayed in their homes.",
        "The town warned the authorities.",
        "No warnings were given.",
      ],
      "'Yetkililer dikkate almadı' 'the authorities ignored', 'kasabayı tahliye etmeleri yönündeki uyarıları' 'warnings that they should evacuate the town' karşılığıdır.",
    ],
    [
      "Patlama, modern aletlerle kaydedilen en büyük patlamaydı.",
      [
        "The eruption was the largest explosion ever recorded by modern instruments.",
        "The eruption was too small to be recorded by modern instruments.",
        "Modern instruments failed to record the eruption, so scientists had to estimate its size from reports by witnesses.",
        "Modern instruments caused the explosion.",
        "The explosion destroyed modern instruments.",
      ],
      "'modern aletlerle kaydedilen' 'ever recorded by modern instruments', 'en büyük patlamaydı' 'was the largest explosion' karşılığıdır.",
    ],
    [
      "Çift, yanardağların tehlikelerini göstermek için filmler çekti.",
      [
        "The couple made films to show the dangers of volcanoes.",
        "The couple refused to film volcanoes.",
        "The couple made films about volcanoes, but they always insisted that volcanoes posed little danger to people living nearby.",
        "The films were made by volcanoes.",
        "The dangers of the films were shown.",
      ],
      "'Çift filmler çekti' 'the couple made films', 'yanardağların tehlikelerini göstermek için' 'to show the dangers of volcanoes' karşılığıdır.",
    ],
    [
      "Mağaradaki sıcaklık ve nem, insanların orada ancak kısa süre kalabilmesine izin veriyordu.",
      [
        "The heat and humidity in the cave allowed people to stay there for only a short time.",
        "People could live comfortably in the cave for months.",
        "The cave was cold and dry, so researchers were able to remain there for as long as they wished without any special equipment.",
        "People caused the heat in the cave.",
        "The cave had no humidity.",
      ],
      "'Mağaradaki sıcaklık ve nem' 'the heat and humidity in the cave', 'insanların orada ancak kısa süre kalabilmesine izin veriyordu' 'allowed people to stay there for only a short time' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "On the evening of 13 November 1985, the Nevado del Ruiz volcano in Colombia erupted. The eruption itself was relatively small, but hot rock and gas melted part of the ice and snow covering the summit. The meltwater mixed with loose ash and rock to form lahars, fast-moving flows of mud with the consistency of wet concrete, which rushed down the river valleys on the volcano's slopes. About two and a half hours later, the largest of them reached the town of Armero, some seventy kilometres away, and buried most of it. Of its roughly 29,000 inhabitants, more than 20,000 were killed. The disaster was all the more tragic because it had been foreseen. The volcano had shown signs of unrest for a year, and a hazard map published in October had shown that Armero lay in the path of possible mudflows. However, the warnings were not acted upon effectively: officials hesitated, partly because of the cost of an evacuation and the fear of causing panic, and on the evening of the eruption some residents were told to remain calm and stay indoors. Images of a thirteen-year-old girl, Omayra Sánchez, trapped in the debris for three days before she died, were seen around the world. The disaster led to the creation of an international programme to help countries respond to volcanic crises.",
      questions: [
        [
          "According to the passage, the lahars formed because ----.",
          [
            "the eruption melted ice and snow on the summit",
            "heavy rain had fallen",
            "a dam had burst",
            "the volcano produced an unusually large amount of lava that flowed directly into the town",
            "the river was blocked",
          ],
          "Metne göre sıcak kaya ve gaz zirvedeki buz ve karın bir kısmını eritti.",
        ],
        [
          "The writer describes the disaster as especially tragic because ----.",
          [
            "the danger had been identified in advance",
            "the eruption was large",
            "the town was close to the volcano",
            "nobody had ever studied the volcano or prepared any maps of the dangers that it posed",
            "it happened at night",
          ],
          "Ekim ayında yayımlanan bir tehlike haritası Armero'nun olası çamur akıntılarının yolunda olduğunu göstermişti.",
        ],
        [
          "It can be understood from the passage that the officials ----.",
          [
            "failed to respond adequately to the warnings",
            "evacuated the town",
            "had no information",
            "persuaded most of the residents to leave the town several days before the eruption",
            "caused the eruption",
          ],
          "Yetkililer tahliyenin maliyeti ve panik korkusu nedeniyle tereddüt etti.",
        ],
      ],
    },
    {
      text:
        "The Soufrière Hills volcano on the Caribbean island of Montserrat, a British overseas territory, had been quiet for centuries when it began to erupt in July 1995. Over the following two years, its activity increased. A dome of thick lava grew in the crater, and parts of it repeatedly collapsed, sending pyroclastic flows, avalanches of hot gas, ash and rock moving at high speed, down the volcano's slopes. The capital, Plymouth, which lay a few kilometres from the volcano, was evacuated and then gradually buried beneath ash and mud; by 1997 it had been abandoned, and it remains a ghost town today. In June 1997, a large collapse sent flows into an area that had been declared unsafe, killing nineteen people who had returned to tend their farms. The southern part of the island, which had contained most of its homes, roads, airport and port, was declared an exclusion zone. With nowhere to live and few jobs, about two-thirds of the island's population of around eleven thousand people left, many moving to Britain. A new observatory was set up to monitor the volcano, and a new town, airport and port have been built in the safer north. The volcano has remained active, though less so, since the early 2010s.",
      questions: [
        [
          "According to the passage, the nineteen deaths in 1997 occurred because ----.",
          [
            "people had entered a zone that had been declared dangerous",
            "the capital was not evacuated",
            "there was no observatory",
            "the volcano erupted without any warning after centuries of quiet",
            "the airport was destroyed",
          ],
          "Metne göre güvensiz ilan edilen bir bölgeye çiftliklerine bakmak için dönmüşlerdi.",
        ],
        [
          "Many people left Montserrat mainly because ----.",
          [
            "the area where most of them had lived and worked became unusable",
            "they were ordered to move to Britain",
            "the north was too crowded",
            "the British government had offered large sums of money to anyone who agreed to leave",
            "the volcano destroyed the whole island",
          ],
          "Evlerin, yolların, havaalanının ve limanın bulunduğu güney kesim yasak bölge ilan edildi.",
        ],
        [
          "It can be understood from the passage that Plymouth ----.",
          [
            "has not been reoccupied since the eruptions",
            "was rebuilt in the north",
            "was never evacuated",
            "is now the location of the observatory that was set up to monitor the volcano",
            "was destroyed by an earthquake",
          ],
          "Bugün hâlâ terk edilmiş bir hayalet kasabadır.",
        ],
      ],
    },
    {
      text:
        "In the spring of 1902, Mount Pelée, a volcano on the French Caribbean island of Martinique, began to show alarming signs of activity. Ash fell on the nearby town of Saint-Pierre, the island's commercial centre, and a mudflow destroyed a sugar factory, killing more than twenty workers. Yet many residents stayed. An election was due to be held on 11 May, and some historians argue that the authorities, anxious that it should go ahead, played down the danger; a scientific commission reported that the town was not at risk. On the morning of 8 May, the side of the mountain exploded, and a glowing cloud of superheated gas and ash swept down the slopes at great speed. It reached Saint-Pierre within minutes and destroyed it, killing nearly all of its roughly 28,000 inhabitants. Ships in the harbour caught fire. Among the very few survivors was a prisoner, Ludger Sylbaris, who had been held in a cell with thick stone walls and a single small opening. Badly burned, he was rescued four days later, and he later toured with an American circus as 'the man who survived Doomsday'. The French geologist Alfred Lacroix, who studied the eruption, named such glowing clouds 'nuées ardentes'. The disaster made scientists aware of the deadly danger of what are now called pyroclastic flows.",
      questions: [
        [
          "According to the passage, many residents remained in Saint-Pierre partly because ----.",
          [
            "the danger was played down by those in authority",
            "they could not afford to leave",
            "the volcano was far away",
            "ships in the harbour refused to carry passengers to other islands before the election",
            "there had been no warning signs",
          ],
          "Metne göre yetkililer seçimin yapılmasını istediği için tehlikeyi küçümsedi.",
        ],
        [
          "Sylbaris probably survived because ----.",
          [
            "his cell protected him from most of the heat",
            "he was on a ship",
            "he escaped before the eruption",
            "he had been released from prison a few days earlier and had left the town",
            "he was far from the town",
          ],
          "Kalın taş duvarlı ve tek küçük açıklığı olan hücresi onu korudu.",
        ],
        [
          "It can be understood from the passage that the eruption ----.",
          [
            "increased scientific understanding of a particular volcanic hazard",
            "caused few deaths",
            "was predicted correctly",
            "produced slow-moving lava flows that gave the residents of the town time to escape",
            "occurred without warning",
          ],
          "Afet bilim insanlarını bugün piroklastik akıntılar denen olgunun ölümcül tehlikesinden haberdar etti.",
        ],
      ],
    },
    {
      text:
        "On 15 January 2022, the underwater volcano Hunga Tonga–Hunga Ha'apai in the South Pacific erupted with extraordinary force. It was the largest explosion recorded by modern instruments, far more powerful than any nuclear test. The plume of ash and gas rose about fifty-seven kilometres, reaching the mesosphere, higher than any previously observed. The blast produced a pressure wave in the atmosphere that travelled around the Earth several times and was recorded by weather stations everywhere, and the sound was heard as far away as Alaska, about ten thousand kilometres distant. The eruption also generated tsunamis that struck the coasts of Tonga and crossed the Pacific; in Peru, two people drowned. Scientists were surprised to find that the eruption had injected an enormous quantity of water vapour into the stratosphere, increasing the amount there by about ten per cent. Because water vapour traps heat, this may slightly warm the planet for several years, unlike most large eruptions, which cool the climate by releasing sulphur gases. The eruption also cut the undersea cable linking Tonga to the global internet, so for days the outside world had little information about the damage on the islands, which were covered in ash. Remarkably, the number of deaths in Tonga was small.",
      questions: [
        [
          "According to the passage, the eruption's plume was remarkable because ----.",
          [
            "it reached a greater height than any observed before",
            "it contained no ash",
            "it was visible from Peru",
            "it remained over Tonga for several years and cooled the climate of the entire region",
            "it travelled around the Earth",
          ],
          "Metne göre daha önce gözlenenlerin hepsinden yükseğe, mezosfere ulaştı.",
        ],
        [
          "The writer suggests that this eruption may differ from most large eruptions in that ----.",
          [
            "it may warm rather than cool the climate",
            "it produced a tsunami",
            "it was underwater",
            "it released more sulphur gases than any eruption recorded since the beginning of the twentieth century",
            "it caused many deaths",
          ],
          "Su buharı ısıyı hapsettiği için gezegeni hafifçe ısıtabilir.",
        ],
        [
          "It can be understood from the passage that, after the eruption, Tonga ----.",
          [
            "was cut off from the rest of the world for a time",
            "was evacuated",
            "lost most of its population",
            "immediately sent detailed reports about the damage to governments around the world",
            "disappeared",
          ],
          "Denizaltı kablosu koptuğu için günlerce dış dünyaya az bilgi ulaştı.",
        ],
      ],
    },
    {
      text:
        "In April 2010, an eruption of Eyjafjallajökull, a volcano beneath an ice cap in southern Iceland, caused the greatest disruption to air travel in Europe since the Second World War. Because the eruption took place under ice, meltwater cooled the magma rapidly and shattered it into extremely fine particles of glassy ash, which were carried high into the atmosphere. Winds blew the ash cloud south-east over Europe. Aviation authorities were concerned because volcanic ash can melt inside jet engines and stick to their internal parts, causing them to fail; in 1982, a British Airways jumbo jet had lost power in all four engines after flying through ash over Indonesia. Under the rules then in force, aircraft were not allowed to fly through any ash at all. As a result, airspace over much of northern and western Europe was closed for about six days, more than a hundred thousand flights were cancelled and some ten million passengers were stranded. Airlines, which lost large sums of money, argued that the restrictions were excessive. Test flights were carried out, and engine manufacturers were asked to state how much ash their engines could tolerate. Within a week, the authorities introduced new rules allowing aircraft to fly through areas with low concentrations of ash.",
      questions: [
        [
          "According to the passage, the ash from this eruption was particularly fine because ----.",
          [
            "the magma was cooled quickly by meltwater",
            "the volcano was very large",
            "the wind was strong",
            "the eruption lasted for many months and produced more ash than any previous eruption",
            "it was mixed with snow",
          ],
          "Metne göre buzul altında gerçekleştiği için eriyen su magmayı hızla soğutup parçaladı.",
        ],
        [
          "The incident of 1982 is mentioned to show that ----.",
          [
            "volcanic ash posed a real danger to aircraft",
            "the 2010 rules were unnecessary",
            "Indonesia has many volcanoes",
            "airlines had lost a great deal of money because of volcanic eruptions in the past",
            "jumbo jets are reliable",
          ],
          "Volkanik külün uçaklar için gerçek bir tehlike olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that the rules on flying through ash ----.",
          [
            "were relaxed after pressure and further testing",
            "were made stricter",
            "were never changed",
            "had been introduced in 2010 because no aircraft had ever experienced problems with ash before",
            "applied only to Iceland",
          ],
          "Havayollarının baskısı ve testlerden sonra düşük kül yoğunluğunda uçuşa izin verildi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1982, the volcanologists Chris Newhall and Stephen Self proposed a scale for comparing the size of explosive eruptions, called the Volcanic Explosivity Index. ---- An eruption at the top of the scale, which has not occurred in recorded history, would throw out more than a thousand cubic kilometres of material.",
      [
        "It runs from 0 to 8, and above the lowest levels each step represents roughly a tenfold increase in the volume of material ejected.",
        "Volcanoes are found on every continent.",
        "Scientists like to compare things.",
        "The two scientists also used the scale to estimate how often eruptions of different sizes had occurred over the past ten thousand years.",
        "Eruptions can be very loud.",
      ],
      "Boşluk ölçeğin işleyişini açıklayan bir cümle gerektirir; boşluğa 0'dan 8'e uzandığını ve her basamağın yaklaşık on katlık artış gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1912, the American geologist Thomas Jaggar founded an observatory on the rim of Kīlauea, one of the most active volcanoes in Hawaii. ---- Its records have helped scientists learn how to recognise the signs that an eruption is approaching.",
      [
        "Unlike earlier scientists, who usually studied volcanoes only after they had erupted, his staff monitored the volcano continuously.",
        "Hawaii is in the Pacific Ocean.",
        "Geologists study rocks.",
        "Jaggar had decided to devote his life to volcanoes after visiting the ruins of a town in the Caribbean that had been destroyed by an eruption.",
        "Many tourists visit Hawaii.",
      ],
      "Boşluk gözlemevinin yeniliğini açıklayan bir cümle gerektirir; boşluğa çalışanlarının yanardağı sürekli izlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Old Faithful, a geyser in Yellowstone National Park in the United States, erupts roughly every hour and a half, shooting hot water up to about fifty metres into the air. ---- Rangers use this relationship to predict the next eruption, usually to within about ten minutes.",
      [
        "The interval before an eruption depends largely on how long the previous eruption lasted.",
        "Yellowstone was the first national park.",
        "Hot water is used for bathing.",
        "The geyser was named by members of an expedition in 1870, who were impressed by the regularity of its eruptions.",
        "Bears live in the park.",
      ],
      "Boşluktan sonra 'this relationship' ifadesi gelir; boşluğa bir sonraki püskürmeye kadar geçen sürenin bir öncekinin uzunluğuna bağlı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In the early 1990s, a local man named Hồ Khanh found the entrance to a large cave in the jungle of central Vietnam, but he was later unable to find it again. ---- They discovered that Son Doong is the largest known cave passage in the world, large enough to contain a city block of skyscrapers.",
      [
        "In 2009, after he had relocated it, he led a team of British cave explorers inside.",
        "Vietnam has a tropical climate.",
        "Caves are formed by water.",
        "He had taken shelter near the entrance during a storm, and he remembered hearing the sound of a river and feeling a cold wind coming out of it.",
        "Jungles contain many animals.",
      ],
      "Boşluktan sonra 'they' ile mağarayı keşfedenler anlatılır; boşluğa onun 2009'da girişi yeniden bulup bir İngiliz mağaracı ekibine rehberlik ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2000, miners working nearly three hundred metres underground at Naica, in northern Mexico, broke into a cave filled with enormous crystals of the mineral selenite. ---- Because the air inside was close to 50 °C and almost completely humid, researchers could stay inside for only short periods, even with special cooling suits.",
      [
        "Some of the crystals were more than ten metres long, the largest natural crystals ever found.",
        "Mexico produces silver.",
        "Minerals are found in rocks.",
        "The mining company had been pumping water out of the mountain for many years so that miners could reach deeper deposits of lead and silver.",
        "Many miners work underground.",
      ],
      "Boşluk kristallerin büyüklüğünü anlatan bir cümle gerektirir; boşluğa bazı kristallerin on metreden uzun olduğunu ve bulunmuş en büyük doğal kristaller olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "The Dallol area in the Danakil Depression of Ethiopia lies more than a hundred metres below sea level and is one of the hottest inhabited places on Earth. ---- Scientists study its extremely acidic, salty pools to learn about the limits of life.",
      [
        "Hot springs there have created a landscape of brightly coloured yellow, green and orange mineral deposits.",
        "Ethiopia is in Africa.",
        "Sea level is rising.",
        "Traders from nearby regions have travelled through the area with camels for centuries in order to collect blocks of salt from the surface of the desert.",
        "Deserts are dry.",
      ],
      "Boşluk bölgenin görünümünü anlatan bir cümle gerektirir; boşluğa sıcak su kaynaklarının parlak renkli mineral birikintileri oluşturduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "When lava erupts under water, its surface cools very quickly.",
        "Scuba diving is a popular hobby.",
        "A hard skin forms, but molten lava inside breaks through it and forms a new rounded lobe.",
        "Repeated many times, this produces a pile of shapes known as pillow lava.",
        "Finding pillow lava on land shows that the rocks once formed under the sea.",
      ],
      odd: 1,
      why: "Parça yastık lavların oluşumunu anlatır. Tüplü dalışın popüler bir hobi olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Lightning is often seen in the ash clouds above erupting volcanoes.",
        "Particles of ash and ice collide and become electrically charged.",
        "Thunderstorms are common in summer.",
        "The separation of these charges eventually produces lightning.",
        "Scientists can use the lightning to monitor eruptions, even when clouds hide the volcano.",
      ],
      odd: 2,
      why: "Parça volkanik şimşeklerin oluşumunu anlatır. Gök gürültülü fırtınaların yazın yaygın olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "At Kawah Ijen, a volcano in Indonesia, blue flames can be seen at night.",
        "They are produced by sulphur-rich gases that catch fire as they leave the ground.",
        "Some of the sulphur turns into liquid and flows down the rocks, burning with the same colour.",
        "Indonesia has a large population.",
        "Local miners carry heavy loads of solid sulphur out of the crater.",
      ],
      odd: 3,
      why: "Parça Kawah Ijen'deki mavi alevleri anlatır. Endonezya'nın kalabalık bir nüfusu olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Lake Natron in Tanzania is fed by hot springs and volcanic minerals.",
        "Its water is so alkaline that it can burn the skin of most animals.",
        "Tanzania is home to Mount Kilimanjaro.",
        "Yet it is the main breeding site of lesser flamingos in East Africa.",
        "The harsh conditions protect their nests from predators.",
      ],
      odd: 2,
      why: "Parça Natron Gölü'nü ve flamingoları anlatır. Tanzanya'da Kilimanjaro Dağı bulunduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ol Doinyo Lengai in Tanzania is the only active volcano known to erupt a rare type of lava rich in sodium.",
        "This lava is the coolest on Earth, at about 500 °C.",
        "It is so runny that it flows almost like water.",
        "It is black when it erupts but turns white within days.",
        "White is a popular colour for houses.",
      ],
      odd: 4,
      why: "Parça Ol Doinyo Lengai'nin sıra dışı lavını anlatır. Beyazın evler için popüler bir renk olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Mount Fuji, Japan's highest mountain, last erupted in 1707.",
        "The eruption followed a major earthquake by only a few weeks.",
        "Ash fell on the city that is now Tokyo, about a hundred kilometres away.",
        "Tokyo hosted the Olympic Games in 1964.",
        "Scientists consider the volcano still active and monitor it closely.",
      ],
      odd: 3,
      why: "Parça Fuji Dağı'nın son patlamasını anlatır. Tokyo'nun 1964'te Olimpiyat Oyunları'na ev sahipliği yaptığını söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
