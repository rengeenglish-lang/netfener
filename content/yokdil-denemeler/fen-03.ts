import type { YokdilDeneme } from "./types";

export const FEN_03: YokdilDeneme = {
  no: 3,
  field: "fen",
  vocab: [
    [
      "The engineers ---- that the dam could fail if water levels rose above a certain point.",
      ["warned", "celebrated", "denied", "forgot", "pretended"],
      "Barajın çökebileceği bir tehlike bildirildiği için 'uyardı' (warned) uygundur. 'celebrated' ve 'forgot' anlamsızdır.",
    ],
    [
      "Diamonds are the hardest natural substance, which makes them extremely ---- to scratches.",
      ["resistant", "vulnerable", "sensitive", "attractive", "similar"],
      "En sert doğal madde olmak çiziklere 'dayanıklı' (resistant) olmak demektir. 'vulnerable' anlamı tersine çevirir.",
    ],
    [
      "The rover will ---- samples of Martian soil and send the results back to Earth.",
      ["analyse", "ignore", "bury", "decorate", "forget"],
      "Sonuçları Dünya'ya göndermek için önce toprak örneklerini 'analiz etmek' gerekir.",
    ],
    [
      "Scientists hope to ---- a cure for the disease within the next ten years.",
      ["come up with", "put up with", "get rid of", "look down on", "run away from"],
      "Bir tedavi 'bulmak, geliştirmek' 'come up with' ile ifade edilir. 'get rid of' (kurtulmak) hastalık için kullanılabilir ama tedavi için değil.",
    ],
    [
      "Heat is transferred ---- from the warmer object to the cooler one until both reach the same temperature.",
      ["gradually", "randomly", "loudly", "rarely", "carelessly"],
      "Isının sıcaklıklar eşitlenene kadar 'yavaş yavaş' (gradually) aktarılması fiziksel olarak doğrudur.",
    ],
    [
      "The new vaccine proved to be ---- against all known strains of the virus.",
      ["effective", "harmful", "irrelevant", "visible", "expensive"],
      "Aşının virüsün bilinen tüm türlerine karşı 'etkili' olduğu anlatılır; 'against' ile anlamlı birleşen sıfat budur.",
    ],
  ],
  grammar: [
    [
      "The first artificial satellite ---- into orbit by the Soviet Union in 1957.",
      ["was launched", "launched", "has been launched", "is launched", "had launched"],
      "Uydu fırlatılan şeydir (edilgen) ve olay geçmişte belli bir yılda olmuştur: 'was launched'.",
    ],
    [
      "If engineers had tested the material more carefully, the bridge ----.",
      ["would not have collapsed", "will not collapse", "did not collapse", "would not collapse", "has not collapsed"],
      "Type 3 koşul: if cümlesi Past Perfect, ana cümle 'would not have + V3'.",
    ],
    [
      "The machine is so complex ---- only a few specialists know how to repair it.",
      ["that", "which", "as", "than", "so"],
      "'so + sıfat + that' yapısı: makine o kadar karmaşık ki yalnızca birkaç uzman onarabilir.",
    ],
    [
      "---- the experiment failed, the researchers learned valuable lessons from it.",
      ["Although", "Because", "Unless", "So that", "In case"],
      "Deneyin başarısız olmasına 'rağmen' değerli dersler çıkarılması zıtlıktır: 'Although'.",
    ],
    [
      "Neither the old satellites nor the new one ---- able to detect the signal.",
      ["was", "were", "are", "have", "being"],
      "'Neither … nor' yapısında fiil yakındaki özneye uyar; 'the new one' tekil ve olay geçmişte: 'was'.",
    ],
    [
      "The scientist ---- discovered the new element received the Nobel Prize.",
      ["who", "which", "whose", "whom", "what"],
      "İnsanlardan söz eden ve 'discovered' fiilinin öznesi olan ilgi zamiri 'who'dur.",
    ],
    [
      "By 2040, electric cars ---- more common than petrol cars in many countries.",
      ["will have become", "became", "have become", "had become", "become"],
      "'By 2040' gelecekteki bir zamana kadar tamamlanmış olacak durumu bildirir: 'will have become'.",
    ],
    [
      "Little ---- that the discovery would change the course of medicine.",
      ["did they realise", "they realised", "they did realise", "realised they", "had realised they"],
      "Olumsuz anlamlı 'Little' cümle başına geldiğinde devrik yapı gerekir: 'did they realise'.",
    ],
    [
      "The team is trying to find out ---- the bacteria survive in such extreme conditions.",
      ["how", "what", "which", "whom", "whose"],
      "Bakterilerin aşırı koşullarda 'nasıl' hayatta kaldığı araştırılır; cümle tamdır, dolayısıyla 'how' gerekir.",
    ],
    [
      "Plastic bags, ---- take hundreds of years to decompose, are banned in many countries.",
      ["which", "that", "what", "who", "where"],
      "Virgülle ayrılmış açıklayıcı ilgi cümlesinde nesneler için 'which' kullanılır.",
    ],
    [
      "The data suggest that the climate ---- faster now than at any time in the past ten thousand years.",
      ["is changing", "changed", "had changed", "will have changed", "has been changed"],
      "'now' ifadesi şu anda süren bir değişimi bildirir: 'is changing'.",
    ],
    [
      "It is important that the samples ---- at a constant temperature.",
      ["be stored", "are stored", "will be stored", "stored", "have stored"],
      "'It is important that' sonrası subjunctive ve edilgen gerekir: 'be stored'.",
    ],
    [
      "Copper is used in electrical wiring ---- it conducts electricity very well.",
      ["because", "although", "unless", "so that", "in spite of"],
      "Bakırın kablolarda kullanılmasının nedeni elektriği iyi iletmesidir: 'because'.",
    ],
    [
      "The higher you climb, ---- the air becomes.",
      ["the thinner", "thinner", "the thinnest", "more thin", "as thin"],
      "'The higher …, the thinner …' karşılaştırma kalıbı: ne kadar yükseğe çıkarsanız hava o kadar incelir.",
    ],
  ],
  cloze: [
    {
      text:
        "Volcanoes form where molten rock, known as magma, rises to the Earth's surface. Most are found along the boundaries of tectonic plates, {1} plates either move apart or collide. When pressure builds up beneath the surface, the volcano may erupt, releasing lava, ash and gases. Some eruptions are relatively gentle, {2} others are extremely violent. The explosive eruption of Mount Vesuvius in 79 AD buried the Roman city of Pompeii, preserving it so well that archaeologists can still see {3} daily life looked like two thousand years ago. Today, scientists monitor active volcanoes using instruments that detect small earthquakes and changes in the shape of the ground. {4} eruptions cannot be predicted precisely, these warning signs often allow authorities {5} nearby residents in time.",
      blanks: [
        [
          "(21) ----",
          ["where", "which", "who", "whose", "what"],
          "'boundaries' bir yer bildirir ve ardından tam cümle gelir: 'where'.",
        ],
        [
          "(22) ----",
          ["while", "because", "so", "unless", "since"],
          "Bazı patlamaların sakin, diğerlerinin şiddetli olması karşılaştırmadır: 'while'.",
        ],
        [
          "(23) ----",
          ["what", "how", "which", "that", "where"],
          "'what … looked like' kalıbı: günlük yaşamın 'neye benzediği'.",
        ],
        [
          "(24) ----",
          ["Although", "Because", "Unless", "Since", "So that"],
          "Patlamalar kesin tahmin edilemese 'de' uyarı işaretleri zamanında tahliyeye olanak verir: 'Although'.",
        ],
        [
          "(25) ----",
          ["to evacuate", "evacuating", "evacuate", "evacuated", "to evacuating"],
          "'allow someone to do something' kalıbı mastar ister: 'allow authorities to evacuate'.",
        ],
      ],
    },
    {
      text:
        "The James Webb Space Telescope, launched in 2021, is the largest and most powerful space telescope ever built. Unlike the Hubble telescope, {1} mainly observes visible light, Webb is designed to detect infrared radiation. This allows it to see through clouds of dust and to observe light from the most distant galaxies, {2} has been stretched into infrared wavelengths as the universe has expanded. To work properly, the telescope must be kept extremely cold, {3} it is protected by a sunshield the size of a tennis court. Since it began operating, Webb has captured images of galaxies {4} formed only a few hundred million years after the Big Bang. Its observations are expected to transform our understanding of how stars and planets form, {5} it may also help scientists search for signs of life on distant planets.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "what", "whose"],
          "Virgülden sonra Hubble teleskobu hakkında bilgi veren ve 'observes' fiilinin öznesi olan ilgi zamiri 'which'tir.",
        ],
        [
          "(27) ----",
          ["which", "that", "what", "where", "who"],
          "Virgülden sonra 'light' hakkında bilgi veren açıklayıcı ilgi zamiri 'which'tir.",
        ],
        [
          "(28) ----",
          ["so", "although", "unless", "because of", "despite"],
          "Teleskobun çok soğuk tutulması gerektiği için güneş kalkanıyla korunur: sonuç bildiren 'so'.",
        ],
        [
          "(29) ----",
          ["that", "what", "where", "whose", "when"],
          "'galaxies' sonrası 'formed' fiilinin öznesini isteyen tanımlayıcı ilgi cümlesi: 'that'.",
        ],
        [
          "(30) ----",
          ["and", "but", "unless", "so that", "because"],
          "İki olumlu beklenti birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although wind power is clean and renewable, ----.",
      [
        "it cannot provide a steady supply of electricity when the wind stops blowing",
        "modern wind turbines are often more than a hundred metres tall",
        "many countries have built large wind farms along their coasts",
        "it converts the energy of moving air into electrical power",
        "engineers have improved the design of turbine blades over time",
      ],
      "'Although' zıtlık ister: rüzgâr enerjisi temiz olsa da rüzgâr durduğunda sürekli elektrik sağlayamaz.",
    ],
    [
      "If the Earth's magnetic field disappeared, ----.",
      [
        "harmful radiation from the Sun would reach the surface more easily",
        "compasses were used by sailors for many centuries",
        "the magnetic field is produced by the movement of molten iron",
        "scientists will measure it more accurately in the future",
        "birds had used it to navigate during migration",
      ],
      "Type 2 koşul ana cümlede 'would + V1' ister: zararlı radyasyon yüzeye daha kolay ulaşırdı.",
    ],
    [
      "The new battery can be charged in just ten minutes, ----.",
      [
        "which could make electric cars much more convenient to use",
        "although it was developed by a team of engineers in Korea",
        "because many people drive long distances every day",
        "unless the temperature had dropped below freezing",
        "so that the factory had to close for several weeks",
      ],
      "'which' önceki cümlenin tamamına atıf yapar: on dakikada şarj olabilmesi elektrikli araçları daha kullanışlı kılabilir.",
    ],
    [
      "Because water expands when it freezes, ----.",
      [
        "pipes can burst during very cold winters",
        "it boils at one hundred degrees Celsius",
        "most of the Earth's surface is covered by oceans",
        "it is made of hydrogen and oxygen atoms",
        "plants need it to grow and survive",
      ],
      "Donan suyun genleşmesinin doğrudan sonucu çok soğuk kışlarda boruların patlayabilmesidir.",
    ],
    [
      "Unless more is done to protect pollinators such as bees, ----.",
      [
        "the production of many fruits and vegetables could fall",
        "honey was used as a medicine in ancient times",
        "bees live in colonies of thousands of individuals",
        "many farmers had kept bees on their land",
        "flowers produce nectar to attract insects",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: birçok meyve ve sebzenin üretimi düşebilir.",
    ],
    [
      "While some scientists believe that artificial intelligence will create many new jobs, ----.",
      [
        "others fear that it will replace large numbers of workers",
        "computers have become much faster over the last decade",
        "many companies use AI to analyse customer data",
        "artificial intelligence was first studied in the 1950s",
        "robots are already used in many car factories",
      ],
      "'While' karşıt görüşleri bağlar: bazıları yeni iş yaratacağını düşünürken diğerleri işçilerin yerini alacağından korkar.",
    ],
    [
      "The rocket was launched at night ----.",
      [
        "because that was when the target orbit could be reached most efficiently",
        "which was built by a private company in the United States",
        "although many people came to watch it from nearby beaches",
        "so that the astronauts had been trained for several years",
        "unless the weather conditions were suitable for flight",
      ],
      "Roketin gece fırlatılmasının nedeni hedef yörüngeye en verimli o zaman ulaşılabilmesidir.",
    ],
    [
      "As the number of satellites in orbit increases, ----.",
      [
        "the risk of collisions between them also grows",
        "the first satellite was launched in 1957",
        "satellites were used mainly for military purposes",
        "astronomers had observed many distant galaxies",
        "television signals are sent around the world",
      ],
      "'As' paralel değişim bildirir: uydu sayısı arttıkça çarpışma riski de artar.",
    ],
    [
      "Even though the medicine worked well in mice, ----.",
      [
        "it had no effect when it was tested on humans",
        "it was developed in a university laboratory",
        "mice are often used in scientific experiments",
        "it was given to the animals every morning",
        "the researchers published their results",
      ],
      "'Even though' beklenmedik bir sonuç ister: farelerde işe yarasa da insanlarda etkisiz kaldı.",
    ],
    [
      "Engineers add steel bars to concrete ----.",
      [
        "to make it strong enough to resist bending and stretching",
        "which is produced by mixing cement, sand and water",
        "although steel is much more expensive than concrete",
        "because concrete was first used by the ancient Romans",
        "unless the building is located in an earthquake zone",
      ],
      "Betona çelik çubuk eklemenin amacı onu bükülme ve gerilmeye dayanacak kadar güçlü kılmaktır.",
    ],
    [
      "Not only are LED lights more energy-efficient than traditional bulbs, ----.",
      [
        "but they also last many times longer",
        "because they were invented in the 1960s",
        "although they are more expensive at first",
        "which are sold in most supermarkets",
        "so people should buy them",
      ],
      "'Not only … but also' yapısı tamamlanmalıdır: LED'ler daha verimli olmakla kalmaz, çok daha uzun da dayanır.",
    ],
  ],
  enTr: [
    [
      "Scientists have found that some plants can communicate with each other by releasing chemicals into the air.",
      [
        "Bilim insanları, bazı bitkilerin havaya kimyasal maddeler salarak birbirleriyle iletişim kurabildiğini bulmuştur.",
        "Bilim insanları, bitkilerin havadaki kimyasal maddelerden zarar gördüğünü bulmuştur.",
        "Bazı bitkiler, bilim insanlarıyla kimyasal maddeler aracılığıyla iletişim kurar.",
        "Havadaki kimyasal maddeler bitkilerin büyümesini engellemektedir.",
        "Bilim insanları bitkilerin iletişim kuramadığını kanıtlamıştır.",
      ],
      "'can communicate with each other by releasing chemicals' 'kimyasal salarak birbirleriyle iletişim kurabildiğini' demektir.",
    ],
    [
      "The more carbon dioxide the oceans absorb, the more acidic they become.",
      [
        "Okyanuslar ne kadar çok karbondioksit emerse o kadar asidik hâle gelir.",
        "Okyanuslar asidik hâle geldikçe daha az karbondioksit emer.",
        "Okyanusların emdiği karbondioksit asitliği azaltır.",
        "Asidik okyanuslar havaya daha fazla karbondioksit verir.",
        "Okyanuslar karbondioksit emmez, bu yüzden asitlik değişmez.",
      ],
      "'The more …, the more …' 'ne kadar … o kadar …' karşılaştırmasıdır.",
    ],
    [
      "Although the spacecraft was designed to operate for two years, it is still sending data after fifteen.",
      [
        "Uzay aracı iki yıl çalışmak üzere tasarlanmış olsa da on beş yıl sonra hâlâ veri göndermektedir.",
        "Uzay aracı iki yıl sonra veri göndermeyi bıraktı.",
        "Uzay aracı on beş yıl çalışacak şekilde tasarlandı ama iki yıl sonra bozuldu.",
        "Uzay aracının gönderdiği veriler on beş yıl boyunca incelendi.",
        "Uzay aracı iki yıl içinde on beş kez veri gönderdi.",
      ],
      "'Although … designed to operate for two years, it is still sending data after fifteen' zıtlığı doğru aktarılmalıdır.",
    ],
    [
      "Most of the world's fresh water is locked up in glaciers and ice sheets.",
      [
        "Dünyadaki tatlı suyun çoğu buzullarda ve buz tabakalarında hapsolmuş durumdadır.",
        "Buzullar ve buz tabakaları dünyanın tuzlu suyunu oluşturur.",
        "Dünyadaki tatlı suyun çok azı buzullarda bulunur.",
        "Buzullar eridikçe tatlı su miktarı azalmaktadır.",
        "Dünyadaki suyun çoğu tatlı sudur.",
      ],
      "'Most of the world's fresh water is locked up in glaciers' 'tatlı suyun çoğu buzullarda hapsolmuştur' demektir.",
    ],
    [
      "Had the warning been issued earlier, more people could have been evacuated.",
      [
        "Uyarı daha erken yapılmış olsaydı daha fazla insan tahliye edilebilirdi.",
        "Uyarı erken yapıldığı için herkes tahliye edildi.",
        "İnsanlar tahliye edildikten sonra uyarı yapıldı.",
        "Uyarı yapılmasaydı daha fazla insan tahliye edilirdi.",
        "Tahliye edilen insanlar uyarının geç yapıldığını söyledi.",
      ],
      "'Had … been issued earlier' gerçekleşmemiş geçmiş koşuldur; ana cümle 'tahliye edilebilirdi' olur.",
    ],
    [
      "Recycling one tonne of paper can save around seventeen trees.",
      [
        "Bir ton kâğıdın geri dönüştürülmesi yaklaşık on yedi ağacı kurtarabilir.",
        "On yedi ağaçtan bir ton kâğıt üretilebilir.",
        "Bir ton kâğıt üretmek için on yedi ton ağaç gerekir.",
        "Kâğıt geri dönüştürüldüğünde ağaçların sayısı azalır.",
        "On yedi ton kâğıt geri dönüştürülerek bir ağaç kurtarılabilir.",
      ],
      "'Recycling one tonne of paper can save around seventeen trees' cümlesindeki sayılar ve yön doğru aktarılmalıdır.",
    ],
  ],
  trEn: [
    [
      "Araştırmacılar, yeni malzemenin sudan hidrojen üretiminde kullanılabileceğini öne sürüyor.",
      [
        "Researchers suggest that the new material could be used to produce hydrogen from water.",
        "Researchers have proven that hydrogen cannot be produced from water.",
        "The new material is made from hydrogen and water.",
        "Researchers produced water from hydrogen using the new material.",
        "The new material prevents water from producing hydrogen.",
      ],
      "'öne sürüyor' 'suggest', 'kullanılabileceğini' 'could be used' karşılığıdır.",
    ],
    [
      "Depremler önceden kesin olarak tahmin edilemese de riskli bölgeler belirlenebilir.",
      [
        "Although earthquakes cannot be predicted precisely in advance, risky areas can be identified.",
        "Earthquakes can be predicted precisely, so risky areas are evacuated in advance.",
        "Risky areas cannot be identified because earthquakes are unpredictable.",
        "Earthquakes occur only in areas that have been identified as risky.",
        "Scientists have stopped trying to identify risky areas.",
      ],
      "'-se de' zıtlığı 'Although' ile verilir: kesin tahmin yapılamasa da riskli bölgeler belirlenebilir.",
    ],
    [
      "Güneş, dünyadaki neredeyse tüm yaşamın temel enerji kaynağıdır.",
      [
        "The Sun is the main source of energy for almost all life on Earth.",
        "Life on Earth would exist without energy from the Sun.",
        "The Sun provides energy for only a small part of life on Earth.",
        "Most of the Earth's energy comes from its core.",
        "The Sun will stop producing energy in the near future.",
      ],
      "'neredeyse tüm yaşamın temel enerji kaynağı' 'the main source of energy for almost all life' karşılığıdır.",
    ],
    [
      "Mühendisler, binanın deprem sırasında hafifçe sallanacak şekilde tasarlandığını açıkladı.",
      [
        "The engineers explained that the building had been designed to sway slightly during an earthquake.",
        "The engineers said that the building would collapse during an earthquake.",
        "The building was designed by engineers who had experienced an earthquake.",
        "The engineers explained that the building does not move at all during earthquakes.",
        "During the earthquake, the engineers were working inside the building.",
      ],
      "'hafifçe sallanacak şekilde tasarlandığını' 'had been designed to sway slightly' karşılığıdır.",
    ],
    [
      "Antibiyotiklerin aşırı kullanımı, dirençli bakterilerin ortaya çıkmasına neden olmaktadır.",
      [
        "The overuse of antibiotics is causing resistant bacteria to emerge.",
        "Resistant bacteria are the reason why antibiotics are overused.",
        "Antibiotics are no longer used because bacteria have become resistant.",
        "The overuse of antibiotics has destroyed all resistant bacteria.",
        "Resistant bacteria can be treated easily with more antibiotics.",
      ],
      "'aşırı kullanımı … neden olmaktadır' 'The overuse … is causing' karşılığıdır.",
    ],
    [
      "Uzay araştırmaları, günlük hayatta kullandığımız pek çok teknolojinin geliştirilmesine katkıda bulunmuştur.",
      [
        "Space research has contributed to the development of many technologies that we use in daily life.",
        "Most technologies used in daily life were developed before space research began.",
        "Space research has had no effect on everyday technology.",
        "Everyday technologies are now used to explore space.",
        "Many people use space technology to plan their daily lives.",
      ],
      "'katkıda bulunmuştur' 'has contributed to', 'günlük hayatta kullandığımız' 'that we use in daily life' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Nanotechnology involves working with materials at the scale of atoms and molecules, typically between 1 and 100 nanometres. At this tiny scale, materials can behave very differently from the way they do in larger amounts. Gold, for example, appears red or purple when divided into nanoparticles, and some substances that are normally inactive become highly reactive. Scientists are using these properties to develop new products, from stain-resistant fabrics to more efficient solar cells. In medicine, nanoparticles are being designed to carry drugs directly to cancer cells, reducing damage to healthy tissue. However, because nanoparticles are so small, they can enter the body and the environment in ways that are not yet fully understood, and some researchers have called for stricter safety testing.",
      questions: [
        [
          "According to the passage, materials at the nanoscale ----.",
          [
            "may show properties that differ from those of larger amounts",
            "always behave in exactly the same way as larger pieces",
            "cannot be used in any commercial products",
            "lose all their colour and become transparent",
            "are always less reactive than normal materials",
          ],
          "Parça bu küçük ölçekte malzemelerin büyük miktarlardakinden çok farklı davranabildiğini söyler.",
        ],
        [
          "In medicine, nanoparticles are being developed to ----.",
          [
            "deliver drugs directly to cancer cells",
            "replace surgery for all types of cancer",
            "make healthy tissue more resistant to drugs",
            "detect gold in the human body",
            "produce stain-resistant fabrics for hospitals",
          ],
          "Tıpta nanoparçacıklar ilaçları doğrudan kanser hücrelerine taşımak için tasarlanmaktadır.",
        ],
        [
          "Some researchers call for stricter safety testing because ----.",
          [
            "the effects of nanoparticles on the body and environment are not fully known",
            "nanoparticles have already been proven to cause cancer in humans",
            "nanotechnology products are too expensive for most ordinary consumers",
            "gold nanoparticles change colour",
            "solar cells are inefficient",
          ],
          "Nanoparçacıklar çok küçük olduğu için vücuda ve çevreye henüz tam anlaşılmamış yollarla girebilir.",
        ],
      ],
    },
    {
      text:
        "Earth's climate has changed many times over its history, but the current warming is unusual in its speed. During past natural changes, such as the end of the last ice age, global temperatures rose by about four to seven degrees over roughly ten thousand years. Today, temperatures have risen by more than one degree in just over a century. Scientists attribute most of this rapid warming to human activities, especially the burning of fossil fuels, which releases carbon dioxide and other greenhouse gases. These gases trap heat in the atmosphere. Evidence for this conclusion comes from many independent sources, including temperature records, ice cores, satellite measurements and computer models.",
      questions: [
        [
          "According to the passage, what makes the current warming unusual is ----.",
          [
            "how quickly it is happening",
            "the total amount of warming",
            "the fact that it is natural",
            "that it started ten thousand years ago",
            "that it has occurred only once before",
          ],
          "Parça mevcut ısınmanın hızı bakımından olağandışı olduğunu söyler.",
        ],
        [
          "The writer mentions the end of the last ice age in order to ----.",
          [
            "compare the speed of past natural changes with today's warming",
            "show that the Earth's climate had never changed before modern times",
            "argue that the current warming is entirely natural and not caused by humans",
            "describe how glaciers formed",
            "explain how ice cores are collected",
          ],
          "Son buzul çağının sonundaki yavaş değişim, bugünkü hızlı ısınmayla karşılaştırmak için verilmiştir.",
        ],
        [
          "According to the passage, the evidence that humans are causing warming ----.",
          [
            "comes from a variety of independent sources",
            "is based only on computer models",
            "has not yet been studied by scientists",
            "comes mainly from ancient historical records",
            "has been rejected by most researchers",
          ],
          "Kanıtlar sıcaklık kayıtları, buz çekirdekleri, uydu ölçümleri ve bilgisayar modelleri gibi birçok bağımsız kaynaktan gelir.",
        ],
      ],
    },
    {
      text:
        "Most mammals sleep, but the way they do so varies widely. Some animals, such as dolphins and certain seals, can sleep with one half of their brain at a time while the other half remains alert. This allows them to keep swimming and watch for predators. Giraffes sleep for only about four or five hours a day, often in short naps, while some bats sleep up to twenty hours. Scientists are still debating why sleep evolved in the first place. One leading theory suggests that sleep allows the brain to remove waste products that build up during waking hours. Another proposes that it helps to strengthen memories. Most researchers believe that sleep probably serves several functions at once.",
      questions: [
        [
          "According to the passage, dolphins can ----.",
          [
            "rest one half of their brain while the other stays awake",
            "stay awake for twenty hours a day without needing any sleep",
            "sleep only on land for a few hours",
            "remove all waste products from their brains within a few minutes",
            "sleep in groups with seals and bats",
          ],
          "Parça yunusların beynin bir yarısıyla uyurken diğer yarısının uyanık kalabildiğini söyler.",
        ],
        [
          "The examples of giraffes and bats are used to show that ----.",
          [
            "the amount of sleep differs greatly between species",
            "large animals always sleep more than small ones",
            "all mammals sleep for exactly eight hours",
            "sleep is not necessary for most animals",
            "short naps are dangerous for animals",
          ],
          "Zürafa ve yarasa örnekleri türler arasında uyku süresinin büyük ölçüde değiştiğini gösterir.",
        ],
        [
          "Most researchers believe that sleep ----.",
          [
            "is likely to have more than one purpose",
            "exists only to strengthen memories",
            "has no known function",
            "evolved only in marine mammals",
            "causes waste to build up in the brain",
          ],
          "Son cümle araştırmacıların çoğunun uykunun muhtemelen birkaç işlevi aynı anda gördüğüne inandığını söyler.",
        ],
      ],
    },
    {
      text:
        "Vertical farming involves growing crops in stacked layers inside buildings, using artificial light and carefully controlled temperature and humidity. Supporters argue that it could help feed growing urban populations while using far less land and water than traditional agriculture. Because the crops are grown indoors, they are protected from pests and extreme weather, and pesticides are rarely needed. However, vertical farms consume large amounts of electricity for lighting and climate control, which can make their produce expensive and, depending on the energy source, increase carbon emissions. At present, most vertical farms grow high-value leafy greens and herbs, as staple crops such as wheat and rice are not yet economical to produce in this way.",
      questions: [
        [
          "According to the passage, one advantage of vertical farming is that it ----.",
          [
            "requires much less land and water than conventional farming",
            "uses no electricity at all",
            "is cheaper than traditional agriculture for all crops",
            "depends on natural sunlight only",
            "needs large amounts of pesticides",
          ],
          "Destekçilere göre dikey tarım geleneksel tarımdan çok daha az arazi ve su kullanır.",
        ],
        [
          "A disadvantage of vertical farms mentioned in the passage is that ----.",
          [
            "they use a lot of electricity",
            "they are easily damaged by storms",
            "they attract many pests",
            "they can only be built in rural areas",
            "they produce food that is unsafe to eat",
          ],
          "Dikey çiftlikler aydınlatma ve iklim kontrolü için çok fazla elektrik tüketir.",
        ],
        [
          "It is implied in the passage that wheat and rice ----.",
          [
            "are currently too costly to grow in vertical farms",
            "grow better indoors than outdoors",
            "are the main crops grown in vertical farms",
            "require no light to grow",
            "are more valuable than herbs",
          ],
          "Son cümle buğday ve pirinç gibi temel ürünlerin bu yöntemle üretilmesinin henüz ekonomik olmadığını belirtir.",
        ],
      ],
    },
    {
      text:
        "Electric vehicles produce no exhaust emissions, but whether they are better for the climate depends on how their electricity is generated and how their batteries are made. Manufacturing a battery requires mining metals such as lithium, nickel and cobalt and uses a considerable amount of energy. As a result, an electric car typically starts its life with a larger carbon footprint than a petrol car. Over time, however, this 'carbon debt' is usually repaid, because driving an electric car produces far fewer emissions, especially in countries that generate much of their electricity from renewable sources. Studies suggest that, over its entire lifetime, an average electric car produces significantly less carbon dioxide than a comparable petrol car.",
      questions: [
        [
          "According to the passage, electric cars begin their lives with a larger carbon footprint because ----.",
          [
            "making their batteries requires mining and a lot of energy",
            "they produce large exhaust emissions when they are first driven",
            "they are heavier than petrol cars",
            "they use petrol during the first year",
            "the electricity used to charge them always comes from coal",
          ],
          "Pil üretimi madencilik ve önemli miktarda enerji gerektirdiği için elektrikli araçlar daha büyük bir karbon ayak iziyle başlar.",
        ],
        [
          "The 'carbon debt' mentioned in the passage is repaid ----.",
          [
            "gradually as the car is driven and produces fewer emissions",
            "immediately when the car is sold to its first owner",
            "only if the battery is recycled at the end of its life",
            "when the car is driven in cities",
            "by paying a special tax",
          ],
          "Karbon borcu zamanla ödenir, çünkü elektrikli araç sürüldükçe çok daha az emisyon üretir.",
        ],
        [
          "The writer's overall conclusion is that electric cars ----.",
          [
            "generally produce less carbon dioxide over their lifetime than petrol cars",
            "are always worse for the climate than comparable petrol cars",
            "have no effect on carbon emissions",
            "should not be used in countries that generate renewable energy",
            "produce more emissions the longer they are driven",
          ],
          "Son cümleye göre ortalama bir elektrikli araç tüm ömrü boyunca benzer bir benzinli araçtan önemli ölçüde daha az karbondioksit üretir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Sound travels as a wave through a medium such as air or water. ---- This is why sound travels about four times faster in water than in air.",
      [
        "It moves faster in denser materials, where particles are closer together.",
        "Musical instruments produce sound in many different ways.",
        "Some animals can hear sounds that humans cannot detect.",
        "Thunder is the sound produced by lightning.",
        "Loud noise can damage people's hearing over time.",
      ],
      "'This is why … faster in water' ifadesi, sesin yoğun ortamlarda daha hızlı yayıldığını söyleyen bir öncül gerektirir.",
    ],
    [
      "---- They help to break down dead plants and animals, returning nutrients to the soil. Without them, forests would be buried under fallen leaves and branches.",
      [
        "Fungi play a vital role in many ecosystems.",
        "Some mushrooms are poisonous to humans.",
        "Trees produce oxygen through photosynthesis.",
        "Many forests have been cut down for farmland.",
        "Bread is made with yeast, a type of fungus.",
      ],
      "İkinci cümledeki 'They' ölü bitki ve hayvanları parçalayan organizmalara atıf yapar; açılış cümlesi mantarları ve ekosistemdeki rollerini tanıtmalıdır.",
    ],
    [
      "Lightning is a giant electrical discharge between clouds or between a cloud and the ground. ---- This sudden heating causes the air to expand explosively, producing the sound we hear as thunder.",
      [
        "It can heat the surrounding air to around 30,000 degrees Celsius.",
        "Thunderstorms are most common in tropical regions.",
        "Benjamin Franklin conducted famous experiments with electricity.",
        "People should stay indoors during storms.",
        "Some buildings have lightning rods on their roofs.",
      ],
      "'This sudden heating' ifadesi, havanın aşırı ısındığını söyleyen bir öncül gerektirir.",
    ],
    [
      "Many medicines were originally discovered in nature. ---- More recently, scientists have begun searching the deep sea and the soil for new antibiotics produced by microorganisms.",
      [
        "Penicillin, for example, was first found in a type of mould.",
        "Hospitals store medicines in special rooms.",
        "Some medicines must be taken with food.",
        "Pharmacists advise patients about side effects.",
        "Many people prefer natural remedies.",
      ],
      "Doğadan keşfedilen ilaçlara bir örnek gerekir: penisilinin bir küf türünde bulunması. Ardından 'More recently' ile güncel arayışlara geçilir.",
    ],
    [
      "Recycling plastic is more difficult than recycling metal or glass. ---- As a result, only a small percentage of plastic waste is actually recycled worldwide.",
      [
        "There are many different types of plastic, and they often cannot be processed together.",
        "Glass bottles can be reused many times.",
        "Metal cans are usually made of aluminium or steel and are easy to collect.",
        "Plastic was invented in the early twentieth century and quickly became popular.",
        "Many beaches are covered with plastic waste.",
      ],
      "'As a result' bir neden ister: plastiğin birçok türü olması ve birlikte işlenememesi.",
    ],
    [
      "The human brain uses about twenty percent of the body's energy, even though it makes up only about two percent of body weight. ---- For this reason, a steady supply of blood is essential, and even a short interruption can cause damage.",
      [
        "Brain cells need a constant supply of oxygen and glucose to function.",
        "The brain is protected by the skull.",
        "Some people are left-handed and others are right-handed.",
        "Sleep is important for memory.",
        "The heart pumps blood around the body.",
      ],
      "'For this reason, a steady supply of blood is essential' cümlesi, beyin hücrelerinin sürekli oksijen ve glikoza ihtiyaç duyduğunu söyleyen bir gerekçe gerektirir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Wetlands are among the most productive ecosystems on Earth.",
        "They provide habitats for many species of birds, fish and plants.",
        "They also act as natural filters, removing pollutants from water.",
        "Many people enjoy watching birds in their gardens.",
        "In addition, wetlands help to reduce flooding by absorbing excess water.",
      ],
      odd: 3,
      why: "Parça sulak alanların ekolojik işlevlerini anlatır. Bahçede kuş izlemekten söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Quantum computers use qubits instead of ordinary bits.",
        "Classical computers have become much cheaper over time.",
        "Qubits can exist in more than one state at once.",
        "This could allow quantum computers to solve certain problems much faster.",
        "However, they are extremely sensitive to disturbances.",
      ],
      odd: 1,
      why: "Parça kuantum bilgisayarların işleyişini anlatır. Klasik bilgisayarların ucuzladığını söyleyen II. cümle akışı bozar.",
    },
    {
      sentences: [
        "Acid rain forms when sulphur dioxide and nitrogen oxides mix with water in the atmosphere.",
        "These gases are released mainly by burning fossil fuels.",
        "Acid rain can damage forests, lakes and buildings.",
        "Many lakes are popular places for swimming in summer.",
        "Stricter emission controls have reduced acid rain in many countries.",
      ],
      odd: 3,
      why: "Parça asit yağmurunun oluşumunu, etkilerini ve azaltılmasını anlatır. Göllerin yüzme için popüler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Desert plants have developed many ways to survive with little water.",
        "Cacti store water in their thick stems.",
        "Many have spines instead of leaves to reduce water loss.",
        "Some open their pores only at night, when it is cooler.",
        "Sand is used to make glass.",
      ],
      odd: 4,
      why: "Parça çöl bitkilerinin suya uyum yollarını anlatır. Kumun cam yapımında kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hurricanes form over warm ocean waters near the equator.",
        "As warm, moist air rises, it creates an area of low pressure.",
        "Many tourists visit tropical islands in winter.",
        "Air rushes in to fill this space and begins to spin.",
        "If conditions remain favourable, the storm can grow into a hurricane.",
      ],
      odd: 2,
      why: "Parça kasırgaların oluşum sürecini adım adım anlatır. Turistlerin tropik adaları ziyaret ettiğini söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "The periodic table organises chemical elements by their atomic number.",
        "Elements with similar properties appear in the same columns.",
        "Dmitri Mendeleev created an early version of the table in 1869.",
        "He even left gaps for elements that had not yet been discovered.",
        "Russia is the largest country in the world by area.",
      ],
      odd: 4,
      why: "Parça periyodik tabloyu ve Mendeleyev'in katkısını anlatır. Rusya'nın yüzölçümünden söz eden V. cümle konu dışıdır.",
    },
  ],
};
