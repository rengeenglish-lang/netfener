import type { YokdilDeneme } from "./types";

export const FEN_06: YokdilDeneme = {
  no: 6,
  field: "fen",
  vocab: [
    [
      "Nuclear fusion could ---- almost unlimited clean energy if scientists can overcome the technical challenges.",
      ["provide", "prevent", "waste", "reduce", "conceal"],
      "Füzyonun neredeyse sınırsız temiz enerji 'sağlayabileceği' (provide) anlatılır.",
    ],
    [
      "The transistor made it possible to build electronic devices that were far smaller and more ---- than those using vacuum tubes.",
      ["reliable", "fragile", "expensive", "dangerous", "primitive"],
      "Transistörlü cihazların vakum tüplülere göre daha küçük ve 'güvenilir' (reliable) olduğu anlatılır.",
    ],
    [
      "As glaciers ----, communities that depend on their meltwater may face serious water shortages.",
      ["shrink", "expand", "freeze", "multiply", "strengthen"],
      "Buzullar 'küçüldükçe' (shrink) erime suyuna bağımlı toplulukların su sıkıntısı yaşayabileceği anlatılır.",
    ],
    [
      "Astronomers ---- many exoplanets by observing the slight dimming of a star as a planet passes in front of it.",
      ["have detected", "have destroyed", "have invented", "have ignored", "have avoided"],
      "Gökbilimcilerin ötegezegenleri 'tespit ettiği' (have detected) anlatılır.",
    ],
    [
      "Carbon capture technology aims to ---- carbon dioxide before it is released into the atmosphere.",
      ["trap", "release", "create", "heat", "spread"],
      "Karbon yakalama teknolojisi karbondioksiti atmosfere salınmadan 'tutmayı' (trap) amaçlar.",
    ],
    [
      "As seawater becomes more acidic, it is increasingly ---- for shellfish to build their shells.",
      ["difficult", "easy", "pleasant", "cheap", "common"],
      "Deniz suyu asitleştikçe kabuklu canlıların kabuk yapması 'zorlaşır' (difficult).",
    ],
  ],
  grammar: [
    [
      "Before the transistor was invented in 1947, computers ---- thousands of fragile vacuum tubes.",
      ["had relied on", "have relied on", "rely on", "will rely on", "are relying on"],
      "Transistörün icadından önceki geçmiş durum Past Perfect ile anlatılır: 'had relied on'.",
    ],
    [
      "If fusion reactors ---- commercially viable, they would transform the world's energy supply.",
      ["became", "become", "had become", "will become", "would become"],
      "Ana cümle 'would transform' olduğundan Type 2 koşul gerekir: if + Past 'became'.",
    ],
    [
      "The telescope detected a planet ---- orbit lies within the star's habitable zone.",
      ["whose", "which", "where", "who", "that"],
      "Gezegenin yörüngesinden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- decades of research, fusion power has not yet produced more energy than it consumes on a commercial scale.",
      ["Despite", "Because of", "Thanks to", "Due to", "Owing to"],
      "Onlarca yıllık araştırmaya 'rağmen' ticari başarı sağlanamaması zıtlıktır: 'Despite'.",
    ],
    [
      "Researchers are trying to determine how quickly the glaciers ----.",
      ["are melting", "are they melting", "do they melt", "melting are", "they melting"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'how quickly the glaciers are melting'.",
    ],
    [
      "Only recently ---- able to print complex objects such as human tissue.",
      ["have scientists been", "scientists have been", "scientists were", "were scientists being", "scientists had been"],
      "'Only recently' cümle başında devrik yapı gerektirir: 'have scientists been'.",
    ],
    [
      "Fusion requires heating hydrogen to temperatures hotter than the Sun's core, which is extremely difficult ----.",
      ["to achieve", "achieving", "achieve", "achieved", "for achieve"],
      "'difficult to do' kalıbı mastar ister.",
    ],
    [
      "Much of the carbon dioxide ---- by power plants could be stored underground.",
      ["produced", "producing", "which produces", "to produce", "has produced"],
      "Santrallerce üretilen karbondioksit edilgen anlamlı geçmiş ortaçla nitelenir: 'produced'.",
    ],
    [
      "The committee insisted that all data from the experiment ---- publicly available.",
      ["be made", "is made", "was made", "will be made", "making"],
      "'insist that' sonrası subjunctive ve edilgen gerekir: 'be made'.",
    ],
    [
      "The oceans have absorbed about a quarter of human carbon dioxide emissions, ---- has slowed global warming.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
    ],
    [
      "---- 3D printing is fast and flexible, it is still too slow for mass production of many products.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Hızlı ve esnek olmasına rağmen seri üretim için yavaş kalması zıtlıktır: 'Although'.",
    ],
    [
      "Engineers are planning ---- the first commercial carbon capture plant in the region next year.",
      ["to open", "opening", "open", "opened", "to opening"],
      "'plan to do' kalıbı mastar ister.",
    ],
    [
      "The planet is ---- far away that it would take thousands of years to reach it with current technology.",
      ["so", "such", "too", "enough", "very"],
      "Zarf (far) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By the end of the century, many small glaciers ---- completely.",
      ["will have disappeared", "have disappeared", "disappeared", "had disappeared", "disappear"],
      "'By the end of the century' gelecekte tamamlanmış olacak bir durumu bildirir: 'will have disappeared'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1947, three physicists at Bell Laboratories in the United States built the first working transistor, a small device that can amplify electrical signals or switch them on and off. Before this invention, electronic equipment depended on vacuum tubes, {1} were large, used a lot of power and frequently burned out. Transistors, {2} contrast, were small, durable and energy-efficient. At first, they were used mainly in radios and hearing aids, {3} engineers soon realised that they could be combined in large numbers. In the late 1950s, the invention of the integrated circuit made it possible to place many transistors on a single chip of silicon. {4} then, the number of transistors on a chip has increased enormously, {5} the powerful computers and smartphones we use today.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'vacuum tubes' sözcüğüne atıf yapan ve 'were' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(22) ----",
          ["by", "in", "on", "at", "for"],
          "'by contrast' (buna karşılık) kalıbı kullanılır.",
        ],
        [
          "(23) ----",
          ["but", "so", "because", "unless", "or"],
          "İlk kullanımların sınırlı olması ile mühendislerin büyük potansiyeli fark etmesi karşılaştırılır: 'but'.",
        ],
        [
          "(24) ----",
          ["Since", "Until", "Before", "During", "Unless"],
          "O zamandan bu yana süren artış Present Perfect ile anlatılır: 'Since then'.",
        ],
        [
          "(25) ----",
          ["making possible", "made possible", "to be possible", "makes possible", "being possible"],
          "Virgülden sonra önceki gelişmenin sonucu etken ortaçla verilir: 'making possible the powerful computers'.",
        ],
      ],
    },
    {
      text:
        "Carbon capture and storage, or CCS, is a technology designed to prevent carbon dioxide from power plants and factories from entering the atmosphere. The gas is separated from other emissions, compressed and transported, usually by pipeline, to a site {1} it can be injected deep underground, for example into old oil and gas fields. Supporters argue that CCS is essential for reducing emissions from industries such as cement and steel production, {2} are difficult to decarbonise in other ways. {3}, the technology has developed more slowly than many hoped. Projects are expensive, and capturing carbon requires a significant amount of energy. Critics also worry that CCS could be used {4} an excuse to continue burning fossil fuels {5} than switching to renewable energy.",
      blanks: [
        [
          "(26) ----",
          ["where", "which", "what", "whose", "when"],
          "'a site' sözcüğünü yer anlamıyla niteleyen ilgi zarfı 'where' gerekir.",
        ],
        [
          "(27) ----",
          ["which", "who", "what", "where", "whose"],
          "Virgülden sonra 'industries' sözcüğüne atıf yapan ve 'are' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(28) ----",
          ["However", "Therefore", "Similarly", "For example", "As a result"],
          "Destekçilerin olumlu görüşünden sonra teknolojinin yavaş gelişmesi gibi olumsuz bir duruma geçilir: 'However'.",
        ],
        [
          "(29) ----",
          ["as", "like", "for", "by", "to"],
          "'be used as an excuse' (bahane olarak kullanılmak) kalıbı 'as' ister.",
        ],
        [
          "(30) ----",
          ["rather", "more", "less", "other", "better"],
          "'rather than' kalıbı 'yerine' anlamındadır.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although nuclear fusion powers the Sun and other stars, ----.",
      [
        "reproducing it on Earth has proved extremely difficult",
        "it involves joining light atoms such as hydrogen together",
        "it produces far less radioactive waste than fission",
        "several countries are building experimental reactors",
        "it releases enormous amounts of energy as light and heat",
      ],
      "'Although' zıtlık ister: füzyon Güneş'e güç verse de Dünya'da yeniden üretmek son derece zor olmuştur.",
    ],
    [
      "Many glaciologists believe that mountain glaciers ----.",
      [
        "are among the clearest indicators of a warming climate",
        "although they are found on every continent except Australia",
        "which move slowly downhill under their own weight",
        "unless temperatures fall again in the coming decades",
        "so that rivers would have flowed throughout the year",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'are among the clearest indicators …' cümleyi tamamlar.",
    ],
    [
      "If the telescope had not been launched into space, ----.",
      [
        "astronomers would have discovered far fewer exoplanets",
        "the telescope was designed by several space agencies",
        "astronomers will launch a new telescope next year",
        "the first exoplanet was found in the 1990s",
        "many stars had been observed from the ground",
      ],
      "Type 3 koşul cümlesi 'would have + V3' ile tamamlanır.",
    ],
    [
      "While 3D printing is widely used to make prototypes, ----.",
      [
        "it is increasingly used to manufacture final products as well",
        "it builds objects layer by layer from a digital design",
        "many printers use plastic as their main material",
        "the technology was first developed in the 1980s",
        "some schools now have 3D printers for students",
      ],
      "'While' iki durumu karşılaştırır: prototip için yaygın kullanılırken artık nihai ürünlerde de kullanılmaktadır.",
    ],
    [
      "Some power plants have installed carbon capture equipment ----.",
      [
        "in order to reduce the amount of carbon dioxide they release",
        "which engineers had been designing since the nineteenth century",
        "although most power plants are located near large cities",
        "because carbon dioxide is used to produce electricity",
        "unless the government provides financial support",
      ],
      "Ekipmanın amacı salınan karbondioksit miktarını azaltmaktır: 'in order to'.",
    ],
    [
      "Unless carbon dioxide emissions are reduced, ----.",
      [
        "the oceans will continue to become more acidic",
        "the oceans had absorbed less carbon in the past",
        "coral reefs are found in warm, shallow waters",
        "seawater is slightly alkaline by nature",
        "many fish live near the ocean floor",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: okyanuslar asitleşmeye devam edecektir.",
    ],
    [
      "Since the first exoplanet around a Sun-like star was discovered in 1995, ----.",
      [
        "astronomers have identified more than five thousand of them",
        "the discovery had surprised many scientists at the time",
        "two astronomers were awarded the Nobel Prize for it",
        "new telescopes will search for Earth-like planets",
        "most astronomers believed planets were rare",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have identified'.",
    ],
    [
      "Even though fusion produces little radioactive waste, ----.",
      [
        "building a working fusion power plant remains enormously expensive",
        "it involves heating hydrogen to millions of degrees",
        "the reaction takes place inside a strong magnetic field",
        "several international teams are working on the problem",
        "it is the same process that takes place inside stars",
      ],
      "'Even though' beklenmedik bir sonuç ister: az radyoaktif atık üretse de çalışan bir füzyon santrali kurmak son derece pahalıdır.",
    ],
    [
      "The more transistors that can be placed on a chip, ----.",
      [
        "the more powerful the computer can be",
        "because silicon is a semiconductor",
        "although chips can become very hot",
        "which engineers have achieved for decades",
        "since transistors are extremely small",
      ],
      "'The more …, the more …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As the oceans absorb more carbon dioxide, ----.",
      [
        "their water becomes increasingly acidic",
        "most marine life had lived near the coast",
        "the oceans cover most of the planet",
        "whales are the largest animals on Earth",
        "sea levels have been measured for centuries",
      ],
      "'As' paralel bir değişim bildirir: okyanuslar daha fazla karbondioksit emdikçe suları giderek asitleşir.",
    ],
    [
      "Scarcely had the experiment begun ----.",
      [
        "when the reactor's temperature rose sharply",
        "than the scientists were very pleased",
        "because the reactor was new",
        "so the team recorded the data",
        "although it lasted only seconds",
      ],
      "'Scarcely … when …' kalıbı 'when' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Fusion reactions occur when light atomic nuclei combine to form heavier ones, releasing large amounts of energy.",
      [
        "Füzyon tepkimeleri, hafif atom çekirdekleri birleşerek daha ağır çekirdekler oluşturduğunda büyük miktarda enerji açığa çıkararak gerçekleşir.",
        "Füzyon tepkimeleri, ağır atom çekirdekleri bölünerek hafif çekirdekler oluşturduğunda enerji tüketir.",
        "Hafif atom çekirdekleri, enerji açığa çıkmadan önce birbirinden ayrılır.",
        "Füzyon tepkimeleri yalnızca ağır elementlerin bulunduğu yerlerde görülür.",
        "Atom çekirdekleri birleştiğinde enerji miktarı her zaman azalır.",
      ],
      "'when light atomic nuclei combine to form heavier ones, releasing large amounts of energy' 'hafif atom çekirdekleri birleşerek daha ağır çekirdekler oluşturduğunda büyük miktarda enerji açığa çıkararak' demektir.",
    ],
    [
      "Millions of people in Asia and South America rely on glaciers for their drinking water during the dry season.",
      [
        "Asya ve Güney Amerika'da milyonlarca insan kurak mevsimde içme suyu için buzullara bağımlıdır.",
        "Asya ve Güney Amerika'daki buzullar kurak mevsimde tamamen kurur.",
        "Milyonlarca insan, buzulları korumak için kurak mevsimde su içmez.",
        "Kurak mevsimde Asya ve Güney Amerika'da yeni buzullar oluşur.",
        "Buzullar, yalnızca yağmurlu mevsimde içme suyu sağlar.",
      ],
      "'rely on glaciers for their drinking water during the dry season' 'kurak mevsimde içme suyu için buzullara bağımlıdır' demektir.",
    ],
    [
      "Most exoplanets have been discovered indirectly, by measuring their effects on the stars they orbit.",
      [
        "Ötegezegenlerin çoğu, yörüngesinde döndükleri yıldızlar üzerindeki etkileri ölçülerek dolaylı yoldan keşfedilmiştir.",
        "Ötegezegenlerin çoğu, teleskoplarla doğrudan fotoğraflanarak keşfedilmiştir.",
        "Yıldızlar, ötegezegenlerin yörüngelerini doğrudan değiştirir.",
        "Ötegezegenler, yıldızlar üzerinde hiçbir ölçülebilir etki bırakmaz.",
        "Yıldızların çoğu, ötegezegenlerin etrafında döner.",
      ],
      "'have been discovered indirectly, by measuring their effects on the stars they orbit' 'yörüngesinde döndükleri yıldızlar üzerindeki etkileri ölçülerek dolaylı yoldan keşfedilmiştir' karşılığıdır.",
    ],
    [
      "3D printing allows doctors to create implants that match the exact shape of a patient's body.",
      [
        "3B baskı, doktorların hastanın vücudunun tam şekline uyan implantlar üretmesini sağlar.",
        "3B baskı, doktorların implant kullanmasını tamamen gereksiz kılmıştır.",
        "Hastalar, implantlarını 3B yazıcılarla evde üretmektedir.",
        "3B baskıyla üretilen implantlar vücudun şekline asla uymaz.",
        "Doktorlar, 3B baskıyı yalnızca vücut ölçümleri için kullanır.",
      ],
      "'allows doctors to create implants that match the exact shape' 'doktorların tam şekline uyan implantlar üretmesini sağlar' demektir.",
    ],
    [
      "Carbon dioxide that is stored deep underground must be monitored to ensure that it does not leak.",
      [
        "Yer altının derinliklerinde depolanan karbondioksit, sızıntı yapmadığından emin olmak için izlenmelidir.",
        "Yer altında depolanan karbondioksit hiçbir zaman sızıntı yapmadığı için izlenmesine gerek yoktur.",
        "Karbondioksit, yer altından sızdıktan sonra depolanmalıdır.",
        "Yer altındaki karbondioksit, sızıntıları önlemek için atmosfere bırakılır.",
        "Karbondioksitin depolanması, sızıntıların artmasına neden olur.",
      ],
      "'must be monitored to ensure that it does not leak' 'sızıntı yapmadığından emin olmak için izlenmelidir' demektir.",
    ],
    [
      "Seawater has become about thirty percent more acidic since the start of the Industrial Revolution.",
      [
        "Deniz suyu, Sanayi Devrimi'nin başlangıcından bu yana yaklaşık yüzde otuz daha asidik hâle gelmiştir.",
        "Deniz suyu, Sanayi Devrimi'nden bu yana yüzde otuz daha az asidik hâle gelmiştir.",
        "Sanayi Devrimi, deniz suyunun asitliğini etkilememiştir.",
        "Deniz suyunun yüzde otuzu Sanayi Devrimi sırasında buharlaşmıştır.",
        "Sanayi Devrimi'nden önce deniz suyu bugünkünden daha asidikti.",
      ],
      "'has become about thirty percent more acidic since the start of' '… başlangıcından bu yana yaklaşık yüzde otuz daha asidik hâle gelmiştir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Füzyon enerjisi, fisyona göre çok daha az radyoaktif atık üretir.",
      [
        "Fusion energy produces far less radioactive waste than fission.",
        "Fusion energy produces far more radioactive waste than fission.",
        "Fission and fusion produce exactly the same amount of waste.",
        "Radioactive waste is used to produce fusion energy.",
        "Fusion energy produces no energy without fission.",
      ],
      "'fisyona göre çok daha az radyoaktif atık üretir' 'produces far less radioactive waste than fission' karşılığıdır.",
    ],
    [
      "Transistör, yirminci yüzyılın en önemli icatlarından biri olarak kabul edilir.",
      [
        "The transistor is considered one of the most important inventions of the twentieth century.",
        "The transistor is considered a minor invention of the twentieth century.",
        "The transistor was invented at the beginning of the nineteenth century.",
        "Most important inventions of the twentieth century did not use transistors.",
        "The transistor replaced the computer in the twentieth century.",
      ],
      "'en önemli icatlarından biri olarak kabul edilir' 'is considered one of the most important inventions' karşılığıdır.",
    ],
    [
      "Buzulların erimesi, deniz seviyesinin yükselmesine katkıda bulunur.",
      [
        "The melting of glaciers contributes to rising sea levels.",
        "The melting of glaciers causes sea levels to fall.",
        "Rising sea levels prevent glaciers from melting.",
        "Glaciers grow larger as sea levels rise.",
        "Sea levels have no connection with glaciers.",
      ],
      "'katkıda bulunur' 'contributes to', 'deniz seviyesinin yükselmesi' 'rising sea levels' karşılığıdır.",
    ],
    [
      "Gökbilimciler, yaşama elverişli olabilecek birkaç ötegezegen keşfetti.",
      [
        "Astronomers have discovered several exoplanets that might be suitable for life.",
        "Astronomers have proved that no exoplanets are suitable for life.",
        "Life has been found on several exoplanets by astronomers.",
        "Astronomers have travelled to several exoplanets.",
        "Exoplanets are too close to their stars to be studied.",
      ],
      "'yaşama elverişli olabilecek' 'that might be suitable for life', 'birkaç ötegezegen keşfetti' 'have discovered several exoplanets' karşılığıdır.",
    ],
    [
      "Karbon yakalama teknolojisi henüz büyük ölçekte uygulanmamaktadır.",
      [
        "Carbon capture technology is not yet being used on a large scale.",
        "Carbon capture technology has been used on a large scale for centuries.",
        "Carbon capture technology is used only in small homes.",
        "Large-scale carbon capture has been banned in most countries.",
        "Carbon capture technology increases carbon emissions.",
      ],
      "'henüz büyük ölçekte uygulanmamaktadır' 'is not yet being used on a large scale' karşılığıdır.",
    ],
    [
      "Okyanus asitlenmesi, mercanların ve kabuklu deniz canlılarının hayatta kalmasını tehdit ediyor.",
      [
        "Ocean acidification threatens the survival of corals and shellfish.",
        "Ocean acidification helps corals and shellfish to survive.",
        "Corals and shellfish cause the acidification of the oceans.",
        "Ocean acidification affects only fish in cold waters.",
        "Shellfish protect the oceans from acidification.",
      ],
      "'hayatta kalmasını tehdit ediyor' 'threatens the survival of' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Nuclear fusion is the process that powers the Sun: light atomic nuclei, such as those of hydrogen, combine to form heavier ones, releasing enormous amounts of energy. If it could be harnessed on Earth, fusion would offer an almost limitless source of electricity with no carbon emissions and far less long-lived radioactive waste than conventional nuclear power. The challenge is that fusion only occurs at extreme temperatures, over one hundred million degrees Celsius, at which matter becomes a plasma that must be held in place by powerful magnetic fields. In 2022, scientists in the United States announced that, for the first time, a fusion experiment had produced more energy than the lasers delivered to the fuel. However, experts caution that commercial fusion power stations are still likely to be decades away.",
      questions: [
        [
          "According to the passage, one advantage of fusion compared with conventional nuclear power is that it ----.",
          [
            "produces far less long-lived radioactive waste",
            "can be carried out at normal room temperature",
            "does not require any fuel to operate",
            "has already been used in many power stations",
            "produces large amounts of carbon dioxide",
          ],
          "Füzyon, geleneksel nükleer enerjiye göre çok daha az uzun ömürlü radyoaktif atık üretir.",
        ],
        [
          "It is stated in the passage that the plasma used in fusion ----.",
          [
            "must be held in place by strong magnetic fields",
            "can be stored easily in ordinary containers",
            "is produced at very low temperatures",
            "is a type of liquid hydrogen",
            "releases energy only when it is cooled",
          ],
          "Aşırı sıcaklıklarda madde plazmaya dönüşür ve güçlü manyetik alanlarla yerinde tutulmalıdır.",
        ],
        [
          "The experts mentioned at the end of the passage believe that ----.",
          [
            "commercial fusion power is still probably many years away",
            "fusion power stations will open within a few months",
            "the 2022 experiment was a complete failure",
            "fusion research should be stopped",
            "lasers are no longer needed for fusion",
          ],
          "Uzmanlar ticari füzyon santrallerinin muhtemelen hâlâ onlarca yıl uzakta olduğu konusunda uyarır.",
        ],
      ],
    },
    {
      text:
        "Mountain glaciers are sometimes called 'water towers' because they store water as ice during the cold season and release it gradually as meltwater during warmer months. In regions such as the Himalayas and the Andes, this meltwater feeds rivers that supply drinking water, irrigation and hydroelectric power to hundreds of millions of people, especially during dry periods. As global temperatures rise, however, most of the world's glaciers are shrinking. In the short term, faster melting can actually increase river flows, but scientists warn that this is temporary. Once a glacier has lost much of its mass, the amount of meltwater will decline, a turning point sometimes called 'peak water'. Communities that depend on glaciers may then face serious shortages, particularly in late summer.",
      questions: [
        [
          "Glaciers are called 'water towers' because they ----.",
          [
            "store water as ice and release it gradually",
            "are located only in very high towers",
            "produce rain over large areas",
            "prevent rivers from flowing in winter",
            "are used to generate electricity directly",
          ],
          "Buzullar soğuk mevsimde suyu buz olarak depolayıp sıcak aylarda yavaş yavaş saldıkları için 'su kuleleri' olarak adlandırılır.",
        ],
        [
          "According to the passage, in the short term, faster melting can ----.",
          [
            "increase the amount of water flowing in rivers",
            "make glaciers grow larger",
            "cause rivers to dry up completely",
            "reduce the risk of floods",
            "lower global temperatures",
          ],
          "Kısa vadede daha hızlı erime aslında nehir akışlarını artırabilir.",
        ],
        [
          "The term 'peak water' refers to the point at which ----.",
          [
            "meltwater from a glacier begins to decrease",
            "a glacier reaches its largest size",
            "rivers flood after heavy rain",
            "temperatures in the mountains stop rising",
            "all glaciers have completely disappeared",
          ],
          "'Zirve su', buzul kütlesinin çoğunu kaybettikten sonra erime suyunun azalmaya başladığı dönüm noktasıdır.",
        ],
      ],
    },
    {
      text:
        "Until the 1990s, astronomers had no direct evidence that planets existed around stars other than the Sun. Since then, more than five thousand such 'exoplanets' have been confirmed. Because planets are tiny and faint compared with their stars, most are detected indirectly. The transit method measures the slight dimming of a star's light when a planet passes in front of it, while the radial velocity method detects the small wobble a planet causes in its star's motion. These discoveries have revealed a remarkable variety of worlds, including 'hot Jupiters', giant planets that orbit extremely close to their stars, and rocky planets several times larger than Earth. Scientists are now trying to study the atmospheres of some of these planets in search of chemical signs that might indicate life.",
      questions: [
        [
          "According to the passage, most exoplanets are detected indirectly because ----.",
          [
            "they are very small and faint compared with their stars",
            "they are much brighter than the stars they orbit",
            "telescopes cannot observe distant stars",
            "they move too slowly to be seen",
            "they are hidden behind other planets",
          ],
          "Gezegenler yıldızlarına göre çok küçük ve sönük olduğu için çoğu dolaylı yoldan tespit edilir.",
        ],
        [
          "The transit method detects planets by ----.",
          [
            "measuring the slight dimming of a star as a planet passes in front",
            "photographing the surface of the planet directly",
            "listening for radio signals from the planet",
            "measuring the temperature of the planet's atmosphere",
            "observing the planet's moons",
          ],
          "Geçiş yöntemi, bir gezegen önünden geçerken yıldızın ışığındaki hafif kararmayı ölçer.",
        ],
        [
          "Scientists are studying the atmospheres of some exoplanets in order to ----.",
          [
            "look for chemical signs that might suggest life",
            "measure how quickly the planets are moving",
            "find out how many moons they have",
            "prepare for human travel to these planets",
            "calculate the age of their stars",
          ],
          "Bilim insanları yaşama işaret edebilecek kimyasal izler aramak için bazı gezegenlerin atmosferlerini incelemektedir.",
        ],
      ],
    },
    {
      text:
        "3D printing, also known as additive manufacturing, creates objects by building them up layer by layer from a digital design, rather than by cutting material away from a larger block. Originally used mainly to make prototypes, the technology is now employed to manufacture final products in many fields. In medicine, surgeons use 3D-printed models of patients' organs to plan complex operations, and custom implants can be produced to fit an individual's body exactly. In aerospace, printed parts can be lighter than traditional ones because they can have complex internal structures. However, 3D printing is still relatively slow and expensive for large production runs, so it is most useful for producing small numbers of complex or customised items.",
      questions: [
        [
          "According to the passage, 3D printing differs from traditional manufacturing in that it ----.",
          [
            "builds objects up layer by layer instead of cutting material away",
            "can be used only to produce simple objects",
            "requires no digital design at all",
            "is always faster for large production runs",
            "uses only metal as a material",
          ],
          "3B baskı, büyük bir bloktan malzeme kesmek yerine nesneleri katman katman inşa eder.",
        ],
        [
          "It is stated in the passage that 3D-printed parts in aerospace can be lighter because ----.",
          [
            "they can have complex internal structures",
            "they are made from paper and plastic",
            "they are smaller than traditional parts",
            "they do not need to be tested",
            "they are hollow and contain no material",
          ],
          "Basılan parçalar karmaşık iç yapılara sahip olabildiği için daha hafif olabilir.",
        ],
        [
          "We can understand from the passage that 3D printing is most useful for ----.",
          [
            "making small numbers of complex or customised items",
            "producing millions of identical products cheaply",
            "replacing all traditional factories",
            "cutting large blocks of metal",
            "manufacturing food on a large scale",
          ],
          "3B baskı az sayıda karmaşık ya da kişiye özel ürün üretmek için en yararlıdır.",
        ],
      ],
    },
    {
      text:
        "Since the Industrial Revolution, the oceans have absorbed roughly a quarter of the carbon dioxide released by human activities. This has slowed the rate of global warming, but it has also changed the chemistry of seawater. When carbon dioxide dissolves in water, it forms carbonic acid, lowering the water's pH. This process, known as ocean acidification, reduces the availability of carbonate ions, which many marine organisms, including corals, oysters and some types of plankton, need to build their shells and skeletons. Experiments show that under more acidic conditions, these organisms grow more slowly and their shells may even begin to dissolve. Because plankton form the base of many marine food chains, scientists fear that acidification could have effects throughout the ocean ecosystem.",
      questions: [
        [
          "According to the passage, the absorption of carbon dioxide by the oceans ----.",
          [
            "has slowed warming but changed the chemistry of seawater",
            "has had no effect on marine life",
            "has made seawater less acidic",
            "has stopped global warming completely",
            "has increased the number of corals",
          ],
          "Okyanusların karbondioksiti emmesi küresel ısınmayı yavaşlatmış, ancak deniz suyunun kimyasını değiştirmiştir.",
        ],
        [
          "Ocean acidification affects shell-building organisms because it ----.",
          [
            "reduces the carbonate ions they need",
            "increases the temperature of the water",
            "removes oxygen from seawater",
            "makes the water too salty",
            "increases the amount of plankton",
          ],
          "Asitlenme, kabuk ve iskelet yapmak için gereken karbonat iyonlarının miktarını azaltır.",
        ],
        [
          "Scientists fear that acidification could affect the whole ocean ecosystem because ----.",
          [
            "plankton form the base of many marine food chains",
            "corals are the largest animals in the ocean",
            "most fish live in coral reefs",
            "oysters are eaten by humans",
            "the ocean is becoming warmer",
          ],
          "Plankton pek çok deniz besin zincirinin temelini oluşturduğu için etkiler tüm ekosisteme yayılabilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the nineteenth century, many scientists believed that light travelled through an invisible substance called 'ether'. ---- This result surprised physicists and eventually helped Albert Einstein develop his theory of relativity.",
      [
        "In 1887, however, a famous experiment found no evidence that such a substance existed.",
        "Light from the Sun takes about eight minutes to reach the Earth.",
        "Many famous scientists of that century worked in Germany and Britain.",
        "Einstein was born in Germany in 1879.",
        "Light can be split into different colours by a prism.",
      ],
      "'This result' ifadesi öncesinde bir deney sonucunu gerektirir: 1887'deki deneyin eterin varlığına dair kanıt bulamaması.",
    ],
    [
      "Many species of birds can sense the Earth's magnetic field. ---- This ability allows them to navigate over thousands of kilometres during migration.",
      [
        "Scientists believe that special molecules in their eyes may be responsible.",
        "Some birds can fly at very high altitudes.",
        "Many people enjoy watching birds in their gardens.",
        "The Earth's magnetic field protects the planet from solar radiation.",
        "Birds build nests from twigs, grass and mud.",
      ],
      "Boşluk kuşların manyetik alanı nasıl algıladığını açıklamalıdır; ardından bu yeteneğin göçte yön bulmayı sağladığı söylenir.",
    ],
    [
      "---- For instance, a single teaspoon of healthy soil can contain more microorganisms than there are people on Earth.",
      [
        "Soil is home to an astonishing variety of life.",
        "Soil is formed slowly from weathered rock.",
        "Many crops grow best in soil that drains well.",
        "Farmers often add fertiliser to their fields.",
        "Some soils are red because they contain iron.",
      ],
      "'For instance' ile verilen örnek, toprağın şaşırtıcı bir yaşam çeşitliliğine ev sahipliği yaptığını söyleyen bir genelleme gerektirir.",
    ],
    [
      "LED lights have largely replaced traditional light bulbs in many countries. ---- Moreover, they last many times longer, reducing waste and replacement costs.",
      [
        "They use far less electricity to produce the same amount of light.",
        "The first light bulbs were invented in the nineteenth century.",
        "Many homes have lights in every room.",
        "Some LED lights can change colour.",
        "Light pollution is a problem in many cities.",
      ],
      "'Moreover' ile ikinci bir yarar eklenir; boşlukta LED'lerin ilk yararı (çok daha az elektrik kullanması) yer almalıdır.",
    ],
    [
      "The International Space Station orbits the Earth at a speed of about 28,000 kilometres per hour. ---- As a result, astronauts on board see around sixteen sunrises and sunsets every day.",
      [
        "It completes one orbit roughly every ninety minutes.",
        "The station was built by several countries working together.",
        "Astronauts must exercise every day to keep their muscles strong.",
        "The first person in space was Yuri Gagarin.",
        "Many people can see the station from the ground at night.",
      ],
      "'As a result' öncesinde günde on altı gün doğumu görülmesinin nedeni gerekir: istasyonun her doksan dakikada bir tur atması.",
    ],
    [
      "Some scientists have proposed bringing extinct species, such as the woolly mammoth, back to life using genetic engineering. ---- Critics, however, argue that the money would be better spent protecting species that are still alive.",
      [
        "Supporters believe that such animals could help restore damaged ecosystems.",
        "Woolly mammoths lived during the last ice age.",
        "Many museums display the bones of extinct animals.",
        "Genetic engineering is also used in agriculture.",
        "Elephants are the largest land animals alive today.",
      ],
      "'Critics, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Coral bleaching occurs when corals expel the algae that live inside them.",
        "These algae provide corals with food and give them their colour.",
        "Many tourists go snorkelling on their holidays.",
        "Bleaching is usually caused by water that is warmer than normal.",
        "If high temperatures continue for too long, the corals may die.",
      ],
      odd: 2,
      why: "Parça mercan beyazlamasını anlatır. Turistlerin şnorkelle dalmasından söz eden III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Magnets have two poles, called north and south.",
        "Opposite poles attract each other, while like poles repel.",
        "The Earth itself behaves like a giant magnet.",
        "Many families keep photographs on their refrigerators.",
        "This is why a compass needle points towards the north.",
      ],
      odd: 3,
      why: "Parça mıknatısları ve Dünya'nın manyetizmasını anlatır. Buzdolaplarındaki fotoğraflardan söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Sand dunes are formed by wind carrying and depositing sand.",
        "They are common in deserts and along some coastlines.",
        "Some dunes move several metres every year.",
        "In certain areas, moving dunes threaten roads and villages.",
        "Many children enjoy building sandcastles at the beach.",
      ],
      odd: 4,
      why: "Parça kum tepelerinin oluşumunu anlatır. Çocukların kumdan kale yapmasından söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Electric cars use batteries instead of petrol or diesel.",
        "Charging infrastructure has expanded rapidly in many countries.",
        "Traditional cars were first produced in the late nineteenth century.",
        "Battery prices have also fallen significantly in the past decade.",
        "As a result, electric cars are becoming more affordable.",
      ],
      odd: 2,
      why: "Parça elektrikli arabaların yaygınlaşmasını anlatır. Geleneksel arabaların ilk üretiminden söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Hurricanes form over warm ocean waters.",
        "Football matches are sometimes cancelled because of bad weather.",
        "As warm, moist air rises, it creates an area of low pressure.",
        "The Earth's rotation causes the storm to spin.",
        "Hurricanes weaken when they move over land or cooler water.",
      ],
      odd: 1,
      why: "Parça kasırgaların oluşumunu anlatır. Futbol maçlarının iptalinden söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Stem cells are cells that can develop into many different types of tissue.",
        "Scientists hope to use them to repair damaged organs.",
        "For example, they might one day be used to treat heart disease or spinal injuries.",
        "Many hospitals have large car parks for visitors.",
        "However, much more research is needed before such treatments become routine.",
      ],
      odd: 3,
      why: "Parça kök hücreleri anlatır. Hastanelerin otoparklarından söz eden IV. cümle akışı bozar.",
    },
  ],
};
