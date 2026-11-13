import type { YokdilDeneme } from "./types";

export const FEN_40: YokdilDeneme = {
  no: 40,
  field: "fen",
  vocab: [
    [
      "Within a few days of the first eruption, a new island had ---- from the sea off the coast of Iceland.",
      ["emerged", "vanished", "borrowed", "frozen", "hesitated"],
      "İzlanda kıyısı açıklarında denizden yeni bir adanın 'ortaya çıktığı' (emerged) anlatılır.",
    ],
    [
      "The gas that escaped from the lake was ----, so the villagers did not notice it until it was too late.",
      ["odourless", "colourful", "noisy", "edible", "fragrant"],
      "Gölden çıkan gazın 'kokusuz' (odourless) olduğu, bu yüzden köylülerin onu çok geç fark ettiği anlatılır.",
    ],
    [
      "The geologist's theory was ---- for decades before other scientists finally accepted it.",
      ["ridiculed", "celebrated", "funded", "printed", "protected"],
      "Jeoloğun kuramının diğer bilim insanları kabul edene kadar onlarca yıl 'alay konusu olduğu' (ridiculed) anlatılır.",
    ],
    [
      "The tiny crystals are extremely ---- and have survived almost unchanged for more than four billion years.",
      ["durable", "delicate", "soluble", "temporary", "flexible"],
      "Küçük kristallerin son derece 'dayanıklı' (durable) olduğu ve dört milyar yıldan uzun süre neredeyse değişmeden kaldığı anlatılır.",
    ],
    [
      "As the sea water ----, it left behind thick layers of salt on the floor of the basin.",
      ["evaporated", "multiplied", "exploded", "froze", "accelerated"],
      "Deniz suyu 'buharlaştıkça' (evaporated) havzanın tabanında kalın tuz katmanları bıraktığı anlatılır.",
    ],
    [
      "Engineers have had to ---- the risk that loose, wet soil may behave like a liquid during an earthquake.",
      ["take into account", "run out of", "look down on", "give away", "put off"],
      "Mühendislerin gevşek ve ıslak toprağın deprem sırasında sıvı gibi davranabileceği riskini 'hesaba katmak' (take into account) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The farmer ---- his field when the ground suddenly began to crack and smoke.",
      ["was ploughing", "has ploughed", "ploughs", "will plough", "had been ploughed"],
      "Geçmişte süren bir eylem sırasında başka bir olay gerçekleşmiştir: 'was ploughing'.",
    ],
    [
      "When the volcanic activity finally stopped in 1967, the new land ---- almost three square kilometres in size.",
      ["had reached", "reaches", "will reach", "is reaching", "has been reached"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had reached'.",
    ],
    [
      "If the gas had been released during the day, many more people ---- in time.",
      ["might have escaped", "will escape", "escape", "had escaped", "are escaping"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have escaped'.",
    ],
    [
      "Since 1963, the island ---- by scientists as a natural laboratory.",
      ["has been used", "used", "is using", "was using", "will use"],
      "Geçmişten bugüne süren edilgen eylem: 'has been used'.",
    ],
    [
      "---- the evidence was clear to him, most geologists refused to accept Bretz's explanation.",
      ["Although", "Because", "Unless", "Once", "So that"],
      "Kanıtın onun için açık olması ile jeologların açıklamayı reddetmesi zıttır: 'Although'.",
    ],
    [
      "The volcano, ---- began in a cornfield, grew to a height of more than four hundred metres.",
      ["which", "who", "whose", "where", "what"],
      "Virgüller arasında yanardağı niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The crystals, ---- age was measured using uranium, are the oldest known pieces of the Earth.",
      ["whose", "which", "who", "that", "where"],
      "Kristallerin yaşı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The deeper the drill went into the sea floor, ---- salt the scientists found.",
      ["the more", "the most", "more than", "much more", "so much"],
      "'The deeper ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Only after other scientists studied satellite images ---- that Bretz had been right.",
      ["did they accept", "they accepted", "had accepted", "they had accepted", "accepted they"],
      "'Only after' ile başlayan cümlede devrik yapı: 'did they accept'.",
    ],
    [
      "The earthquake was so strong ---- it caused a tsunami that crossed the entire Pacific Ocean.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Scientists installed pipes in the lake ---- the gas could escape slowly and safely.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The researchers wished they ---- more samples before the island became overgrown with plants.",
      ["had collected", "collected", "have collected", "would collect", "collect"],
      "Geçmişle ilgili pişmanlık bildiren 'wish' yapısı: 'had collected'.",
    ],
    [
      "Visitors are not allowed ---- the island without special permission.",
      ["to land on", "landing on", "land on", "landed on", "to landing on"],
      "'be allowed to' kalıbı mastarla kullanılır: 'to land on'.",
    ],
    [
      "It is likely that the Mediterranean ---- almost completely several times during this period.",
      ["dried up", "dries up", "will dry up", "has dried up", "drying up"],
      "Geçmişte tamamlanmış ve bitmiş bir olay: 'dried up'.",
    ],
  ],
  cloze: [
    {
      text:
        "Early one morning in November 1963, fishermen working south of Iceland spotted black smoke climbing out of the water. At first they thought a ship was on fire, {1} they soon realised that they were watching a volcanic eruption. An undersea volcano had broken through the surface of the water, and within days a new island had formed. It was named Surtsey, after a fire giant in Norse mythology. The eruption continued until 1967, by which time the island covered an area of nearly three square kilometres. Since then, waves and wind have worn much of it away, {2} the island is now only about half its original size. From the beginning, scientists recognised that Surtsey offered a rare opportunity: they could observe {3} plants and animals colonise completely new land. To keep the island as undisturbed as possible, access has been strictly limited to a small number of researchers. The first plant, a sea rocket, was found in 1965, and seabirds began nesting there in the 1970s. {4} gulls arrived, the soil was enriched by their droppings, and plant life spread much more rapidly. Today, dozens of plant species grow on the island, {5} insects, spiders and earthworms have also been recorded.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "or", "so", "for"],
          "Gemide yangın olduğunu düşünmeleri ile bir yanardağ patlaması izlediklerini fark etmeleri zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "or", "unless", "although", "until"],
          "Rüzgâr ve dalgaların adayı aşındırması ile adanın küçülmesi birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["how", "what", "which", "whose", "whom"],
          "Bitki ve hayvanların yeni araziyi 'nasıl' kolonileştirdiğini gözlemleme: 'how'.",
        ],
        [
          "(24) ----",
          ["Once", "Unless", "Although", "Whereas", "Even if"],
          "Martılar geldikten sonra toprağın zenginleştiği anlatılır: 'Once'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Bitki türlerinin varlığına böcek ve solucanların kaydedildiği bilgisi eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "On 20 February 1943, a Mexican farmer named Dionisio Pulido was preparing his cornfield near the village of Parícutin for planting {1} he noticed a crack in the ground. As he watched, the ground swelled, and smoke and ash began to pour out of the opening, accompanied by a smell of sulphur. Within a day, a cone of ash about fifty metres high had formed where his field had been. Over the following months, the new volcano grew rapidly, and lava flows eventually buried the villages of Parícutin and San Juan Parangaricutiro. Fortunately, the lava moved slowly enough for the inhabitants to escape, {2} no one was killed directly by the flows. Only the tower of San Juan's church remained visible above the cooled rock. The eruption continued for nine years, {3} the volcano reached a height of more than four hundred metres above the surrounding land. Parícutin was of great interest to scientists {4} it was the first time that the entire life of a volcano had been observed from its birth. Geologists were able to study {5} the cone developed, how the lava changed in composition and how the eruption gradually came to an end in 1952.",
      blanks: [
        [
          "(26) ----",
          ["when", "unless", "although", "until", "so that"],
          "Tarlasını hazırlarken bir çatlak fark ettiğinde: 'when'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Lavın yavaş akması ve kimsenin ölmemesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["during which", "in spite of which", "unless", "whose", "where"],
          "Dokuz yıl süren patlama 'boyunca' yanardağın büyüdüğü anlatılır: 'during which'.",
        ],
        [
          "(29) ----",
          ["because", "although", "unless", "whereas", "so that"],
          "Bilim insanlarının ilgisinin nedeni açıklanır: 'because'.",
        ],
        [
          "(30) ----",
          ["how", "what", "which", "whom", "whose"],
          "Koninin 'nasıl' geliştiğini inceleme: 'how'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Surtsey has been shrinking for decades, ----.",
      [
        "it remains valuable for research",
        "Iceland lies in the North Atlantic",
        "it was named after a giant",
        "volcanoes can form under water",
        "fishermen first saw the smoke from their boat in the early morning",
      ],
      "'Although' zıtlık ister: Surtsey on yıllardır küçülse de araştırma için değerli olmaya devam eder.",
    ],
    [
      "----, the villagers were able to leave before the lava reached their homes.",
      [
        "Because the flows advanced slowly",
        "Although the volcano was in Mexico",
        "Unless the farmer had warned them",
        "Since churches are built of stone",
        "While the cone of ash was growing taller and taller over the next several days",
      ],
      "Lav akıntıları yavaş ilerlediği için köylüler lav evlerine ulaşmadan ayrılabildi.",
    ],
    [
      "Had the gas cloud reached the town during the day, ----.",
      [
        "more people might have survived",
        "the lake was very deep",
        "Cameroon is in Africa",
        "the gas was carbon dioxide",
        "the cattle grazing near the shore of the lake were usually brought in at night",
      ],
      "Devrik üçüncü tip koşul: gaz bulutu kasabaya gündüz ulaşsaydı daha fazla kişi hayatta kalabilirdi.",
    ],
    [
      "Bretz argued that the strange landscape had been formed ----.",
      [
        "by a sudden, enormous flood",
        "although he was a teacher",
        "unless the ice was very thick",
        "because Washington is a large state",
        "while most geologists of his time believed that all change was slow and gradual",
      ],
      "Bretz garip arazinin ani ve devasa bir selle oluştuğunu savundu.",
    ],
    [
      "If the Strait of Gibraltar were closed today, ----.",
      [
        "the Mediterranean would slowly dry out",
        "Spain is close to Africa",
        "the strait was formed long ago",
        "salt is found in sea water",
        "ships passing between the Atlantic and the Mediterranean had to pay high taxes",
      ],
      "İkinci tip koşul: Cebelitarık Boğazı bugün kapansaydı Akdeniz yavaş yavaş kururdu.",
    ],
    [
      "The zircon crystals are important ----.",
      [
        "because they record early conditions",
        "although they are very small",
        "unless they are found in Australia",
        "so that they were collected in the 1980s",
        "while the rocks around them have been heated, folded and broken many times since",
      ],
      "Zirkon kristalleri erken dönem koşullarını kaydettikleri için önemlidir.",
    ],
    [
      "Not only did the 1960 earthquake destroy towns in Chile, ----.",
      [
        "but it also caused deaths in Japan",
        "and Chile is a long, narrow country",
        "since earthquakes are common there",
        "so it was measured by scientists",
        "unless the buildings had been made of wood and the people had moved to higher ground",
      ],
      "'Not only ... but also' yapısı tamamlanır: 1960 depremi Şili'deki kasabaları yıkmakla kalmadı, Japonya'da da ölümlere yol açtı.",
    ],
    [
      "Once Shoemaker found the rare minerals at the crater, ----.",
      [
        "the impact theory gained support",
        "Arizona is a desert state",
        "the crater is privately owned",
        "minerals are found in rocks",
        "mining companies had spent many years searching for a buried mass of iron there",
      ],
      "Shoemaker kraterde nadir mineralleri bulduktan sonra çarpma kuramı destek kazandı.",
    ],
    [
      "Unless buildings stand on solid rock, ----.",
      [
        "shaking may damage them more severely",
        "many cities are built near rivers",
        "earthquakes occur in Japan",
        "soil contains water",
        "engineers in the past usually preferred to build with heavy stone and brick",
      ],
      "'Unless' olumsuz koşul: binalar sağlam kaya üzerinde durmazsa sarsıntı onlara daha ağır zarar verebilir.",
    ],
    [
      "The columns at the Giant's Causeway have regular shapes ----.",
      [
        "because the lava cooled and shrank evenly",
        "although they are in Northern Ireland",
        "unless they are covered by the sea",
        "so that tourists visited them",
        "while local legends claim that a giant built them as a path across the sea to Scotland",
      ],
      "Devin Geçidi'ndeki sütunlar lav eşit biçimde soğuyup büzüldüğü için düzenli şekillere sahiptir.",
    ],
    [
      "The geologists set the gas crater alight ----.",
      [
        "to stop poisonous gas from spreading",
        "although Turkmenistan is a desert country",
        "unless the drilling rig collapsed",
        "because tourists wanted to see it",
        "while they expected the fire to burn out within a few days and then go out completely",
      ],
      "Jeologlar zehirli gazın yayılmasını önlemek için gaz kraterini ateşe verdi.",
    ],
  ],
  enTr: [
    [
      "The island offered scientists a rare chance to watch life arrive on completely new land.",
      [
        "Ada, bilim insanlarına yaşamın tamamen yeni bir karaya ulaşmasını izleme konusunda nadir bir fırsat sundu.",
        "Bilim insanları, adadaki yaşamı korumak için yeni bir kara parçası oluşturma fırsatı buldu.",
        "Ada, yaşamın tamamen yeni topraklarda hiçbir zaman gelişemeyeceğini bilim insanlarına gösteren ender ve önemli bir örnek oldu.",
        "Bilim insanları, adaya ulaşmak için nadir bir fırsat bekledi.",
        "Ada, yeni canlı türlerinin keşfedildiği tek yer oldu.",
      ],
      "'offered scientists a rare chance' 'bilim insanlarına nadir bir fırsat sundu', 'to watch life arrive on completely new land' 'yaşamın tamamen yeni bir karaya ulaşmasını izleme' karşılığıdır.",
    ],
    [
      "Because carbon dioxide is heavier than air, the cloud flowed down the valleys like water.",
      [
        "Karbondioksit havadan ağır olduğu için bulut vadilerden su gibi aşağı aktı.",
        "Karbondioksit havadan hafif olduğu için bulut hızla gökyüzüne yükseldi.",
        "Bulut vadilerden aşağı aktığında karbondioksit havadan daha hafif hale gelerek yavaş yavaş dağılmaya ve gözden kaybolmaya başladı.",
        "Vadilerdeki su, karbondioksit bulutunu durdurdu.",
        "Karbondioksit, vadilerdeki suyla karışarak ağırlaştı.",
      ],
      "'Because carbon dioxide is heavier than air' 'karbondioksit havadan ağır olduğu için', 'flowed down the valleys like water' 'vadilerden su gibi aşağı aktı' karşılığıdır.",
    ],
    [
      "For decades, few geologists were willing to take the idea of a giant flood seriously.",
      [
        "Onlarca yıl boyunca çok az jeolog dev bir sel fikrini ciddiye almaya istekliydi.",
        "Jeologların çoğu onlarca yıl boyunca dev bir sel fikrini hemen kabul etti.",
        "Onlarca yıl boyunca jeologlar, dev bir selin ciddi hasara yol açmasını önlemek için büyük çaba harcadı ve çeşitli önlemler aldı.",
        "Birkaç jeolog, dev selin onlarca yıl sürdüğünü ileri sürdü.",
        "Jeologlar, sel fikrini ciddiye almak için onlarca yıl bekledi.",
      ],
      "'For decades' 'onlarca yıl boyunca', 'few geologists were willing to take ... seriously' 'çok az jeolog ciddiye almaya istekliydi' karşılığıdır.",
    ],
    [
      "The layers of salt beneath the sea floor are more than a kilometre thick in places.",
      [
        "Deniz tabanının altındaki tuz katmanları yer yer bir kilometreden daha kalındır.",
        "Deniz tabanındaki tuz katmanları her yerde bir kilometreden incedir.",
        "Deniz tabanının altında, yer yer bir kilometreden daha derinde, tuzdan çok daha kalın başka kaya katmanları da bulunmaktadır.",
        "Tuz katmanları deniz tabanının bir kilometre üzerinde yer alır.",
        "Deniz tabanındaki tuz, bir kilometre uzaklıktan görülebilir.",
      ],
      "'The layers of salt beneath the sea floor' 'deniz tabanının altındaki tuz katmanları', 'more than a kilometre thick in places' 'yer yer bir kilometreden daha kalın' karşılığıdır.",
    ],
    [
      "The crystals suggest that liquid water existed on the Earth much earlier than once believed.",
      [
        "Kristaller, Dünya'da sıvı suyun bir zamanlar sanıldığından çok daha önce var olduğunu gösteriyor.",
        "Kristaller, Dünya'daki sıvı suyun sanıldığından çok daha sonra oluştuğunu gösteriyor.",
        "Bir zamanlar sanıldığı gibi kristaller, Dünya'da sıvı su bulunmadan çok önce, son derece sıcak koşullarda oluşmuş olmalıdır.",
        "Kristaller, sıvı suyun içinde çok uzun süre çözünmeden kalabilir.",
        "Dünya'daki sıvı su, kristallerin oluşmasını engellemiştir.",
      ],
      "'suggest that liquid water existed on the Earth' 'Dünya'da sıvı suyun var olduğunu gösteriyor', 'much earlier than once believed' 'bir zamanlar sanıldığından çok daha önce' karşılığıdır.",
    ],
    [
      "The tsunami took about twenty-two hours to cross the Pacific and reach the coast of Japan.",
      [
        "Tsunaminin Pasifik'i geçip Japonya kıyısına ulaşması yaklaşık yirmi iki saat sürdü.",
        "Tsunami Japonya kıyısından başlayıp yirmi iki saatte Pasifik'i geçti.",
        "Japonya kıyısındaki halk, tsunaminin Pasifik'i geçeceğini yaklaşık yirmi iki saat önceden öğrenmiş ve güvenli yerlere taşınmıştı.",
        "Tsunami, Pasifik'i geçemeden yirmi iki saat içinde etkisini yitirdi.",
        "Japonya'dan gelen tsunami yirmi iki saat sonra Şili'ye ulaştı.",
      ],
      "'took about twenty-two hours' 'yaklaşık yirmi iki saat sürdü', 'to cross the Pacific and reach the coast of Japan' 'Pasifik'i geçip Japonya kıyısına ulaşması' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Adaya yalnızca az sayıda araştırmacının girmesine izin veriliyor.",
      [
        "Permission to enter the island is given to only a few researchers.",
        "A small number of researchers are not allowed to leave the island.",
        "Researchers are allowed to bring only a small number of plants and animals with them when they visit the island each summer.",
        "Many researchers have been allowed to live on the island.",
        "The island allows researchers to enter only once.",
      ],
      "'yalnızca az sayıda araştırmacının girmesine izin veriliyor' 'permission to enter is given to only a few researchers' karşılığıdır.",
    ],
    [
      "Lav akıntıları sonunda iki köyü tamamen gömdü.",
      [
        "Lava flows eventually buried two villages completely.",
        "The two villages eventually stopped the lava flows.",
        "Lava flows eventually reached the edges of two villages but stopped before they could cause any serious damage to the houses.",
        "Two villages were built on top of old lava flows.",
        "The lava flowed slowly between the two villages.",
      ],
      "'Lav akıntıları sonunda' 'lava flows eventually', 'iki köyü tamamen gömdü' 'buried two villages completely' karşılığıdır.",
    ],
    [
      "Uydu görüntüleri, arazinin büyük bir selle şekillendiğini açıkça gösterdi.",
      [
        "Satellite images clearly showed that the landscape had been shaped by a great flood.",
        "Satellite images could not show how the landscape had been shaped.",
        "A great flood clearly damaged the satellites that had been sending images of the landscape back to scientists on the ground.",
        "The landscape was clearly visible only after the flood.",
        "Satellite images showed that floods never shape landscapes.",
      ],
      "'Uydu görüntüleri açıkça gösterdi' 'satellite images clearly showed', 'arazinin büyük bir selle şekillendiğini' 'that the landscape had been shaped by a great flood' karşılığıdır.",
    ],
    [
      "Akdeniz, yaklaşık beş milyon yıl önce Atlantik'ten gelen suyla yeniden doldu.",
      [
        "About five million years ago, the Mediterranean was refilled with water from the Atlantic.",
        "About five million years ago, the Atlantic was filled with water from the Mediterranean.",
        "The Mediterranean has been slowly losing water to the Atlantic for about five million years, and it may eventually become a dry and salty desert.",
        "The Mediterranean dried up completely five million years from now.",
        "Water from the Atlantic has never reached the Mediterranean.",
      ],
      "'yaklaşık beş milyon yıl önce' 'about five million years ago', 'Atlantik'ten gelen suyla yeniden doldu' 'was refilled with water from the Atlantic' karşılığıdır.",
    ],
    [
      "Bu kristallerin bazıları 4,4 milyar yıl önce oluşmuştur.",
      [
        "Some of these crystals formed 4.4 billion years ago.",
        "These crystals will form in 4.4 billion years.",
        "Some of these crystals have been carefully studied by scientists for more than forty years using many different methods.",
        "All of these crystals are less than 4.4 billion years old.",
        "These crystals were destroyed 4.4 billion years ago.",
      ],
      "'Bu kristallerin bazıları' 'some of these crystals', '4,4 milyar yıl önce oluşmuştur' 'formed 4.4 billion years ago' karşılığıdır.",
    ],
    [
      "Deprem, kaydedilen en güçlü deprem olarak bilinmektedir.",
      [
        "The earthquake is known as the most powerful one ever recorded.",
        "The earthquake was not recorded because it was too weak.",
        "The earthquake is known to have been recorded by more instruments than any earlier one in the history of the science.",
        "The most powerful earthquakes are never recorded.",
        "The earthquake is known as the first one recorded.",
      ],
      "'kaydedilen en güçlü deprem olarak' 'as the most powerful one ever recorded', 'bilinmektedir' 'is known' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Late in the evening of 21 August 1986, an enormous cloud of gas burst out of Lake Nyos, a deep crater lake in north-western Cameroon. The cloud, consisting mainly of carbon dioxide, rose about a hundred metres above the water and then, being heavier than air, poured down into the surrounding valleys. It travelled up to twenty-five kilometres from the lake, displacing the oxygen that people and animals needed to breathe. About 1,700 people and 3,500 cattle died, most of them in their sleep. Survivors described waking up to find their families and neighbours dead around them. At first, some suspected a volcanic eruption or even a chemical weapon, but investigators eventually concluded that the gas had been building up in the lake for years. Carbon dioxide seeping from volcanic rock beneath the lake had dissolved in the cold, deep water, where the pressure kept it in solution, much as gas is held in a sealed bottle of fizzy drink. Something, possibly a landslide, disturbed the layers of water, and the gas came out of solution almost at once. To prevent a repeat of the disaster, engineers have since installed pipes that carry gas-rich water up from the depths so that the dissolved gas can be released a little at a time.",
      questions: [
        [
          "According to the passage, most of the victims of the disaster ----.",
          [
            "died while they were asleep",
            "were killed by a volcanic eruption",
            "drowned in the waters of the lake",
            "were poisoned by a chemical weapon used during a war in the region",
            "lived more than fifty kilometres away",
          ],
          "Metne göre ölenlerin çoğu uykularında hayatını kaybetti.",
        ],
        [
          "The comparison with a bottle of fizzy drink is used to explain ----.",
          [
            "how gas could stay dissolved under pressure",
            "why the lake water tasted unusual",
            "how the pipes were designed",
            "why survivors were unable to wake their families and neighbours that night",
            "where the landslide began",
          ],
          "Gazın derin ve soğuk suda basınç altında çözünmüş halde nasıl kalabildiğini açıklamak için kullanılır.",
        ],
        [
          "It can be inferred from the passage that the pipes in the lake are intended to ----.",
          [
            "stop gas from building up again",
            "supply water to nearby villages",
            "measure the depth of the lake",
            "carry oxygen from the surface down to the deepest parts of the lake to help the fish",
            "cool the volcanic rock",
          ],
          "Borular gazın yavaş yavaş çıkmasını sağlayarak yeniden birikmesini önlemeyi amaçlar.",
        ],
      ],
    },
    {
      text:
        "In the 1920s, the American geologist J Harlen Bretz studied an unusual area of eastern Washington State known as the Channeled Scablands. Here, the soil had been stripped away from huge areas, leaving bare rock cut by deep channels, dry waterfalls and enormous ripples of gravel. Bretz argued that this landscape could only have been formed by a single catastrophic flood of unimaginable size. At the time, however, most geologists believed firmly that the Earth's surface had been shaped by slow, gradual processes acting over very long periods, and they regarded appeals to sudden catastrophes as unscientific. Bretz's idea was rejected, and at a meeting in 1927 he faced a room of hostile critics. One problem was that he could not explain where so much water had come from. The answer was eventually supplied by another geologist, Joseph Pardee, who showed that during the last ice age a dam of ice had blocked a river in Montana, creating a huge lake, now called Glacial Lake Missoula. When the ice dam failed, the lake emptied in a matter of days. Later research suggested that this happened dozens of times. Aerial photographs and further fieldwork gradually convinced the scientific community, and in 1979, at the age of ninety-six, Bretz received the highest award of the Geological Society of America.",
      questions: [
        [
          "According to the passage, most geologists in the 1920s ----.",
          [
            "favoured explanations based on slow change",
            "believed that floods were common",
            "had visited the Channeled Scablands",
            "agreed with Bretz but were unable to prove that the flood had taken place",
            "were experts on ice ages",
          ],
          "Metne göre jeologların çoğu yeryüzünün yavaş ve kademeli süreçlerle biçimlendiğine inanıyordu.",
        ],
        [
          "Pardee's contribution was important because it ----.",
          [
            "identified the source of the floodwater",
            "proved that Bretz was wrong",
            "explained how gravel ripples form",
            "showed that the region had been covered by the sea for many thousands of years",
            "ended the ice age",
          ],
          "Pardee büyük miktardaki suyun nereden geldiğini, yani Missoula Buzul Gölü'nü ortaya koydu.",
        ],
        [
          "It can be understood from the passage that Bretz ----.",
          [
            "lived long enough to see his ideas accepted",
            "never visited Montana",
            "abandoned his theory after 1927",
            "was given an award for his work on ice ages before his flood theory was accepted",
            "took the aerial photographs himself",
          ],
          "Bretz doksan altı yaşında en yüksek ödülü aldı; fikirlerinin kabul edildiğini görecek kadar yaşadı.",
        ],
      ],
    },
    {
      text:
        "In 1970, scientists aboard the drilling ship Glomar Challenger made a puzzling discovery beneath the floor of the Mediterranean Sea. Their drills brought up layers of salt and gypsum, minerals that form when sea water evaporates. Later surveys showed that these deposits are, in places, more than a kilometre thick. The scientists concluded that around six million years ago, the connection between the Mediterranean and the Atlantic Ocean had been cut off, probably because of movements of the Earth's crust near what is now the Strait of Gibraltar. Because the Mediterranean loses far more water through evaporation than it receives from rivers, the sea began to shrink. Over hundreds of thousands of years, it may have dried out almost completely several times, leaving a deep basin covered with salt flats and scattered salty lakes, lying in places two or three kilometres below the level of the ocean. This event is known as the Messinian salinity crisis. It ended about 5.3 million years ago, when the barrier at Gibraltar gave way. Some researchers believe that the Atlantic then poured back into the basin in a gigantic flood, possibly refilling the Mediterranean within as little as two years, although others argue that the process was more gradual.",
      questions: [
        [
          "According to the passage, the salt and gypsum found by the drilling ship ----.",
          [
            "indicated that sea water had evaporated",
            "had been carried there by rivers",
            "were less than a metre thick",
            "came from the Atlantic Ocean after the barrier at Gibraltar finally gave way",
            "formed only in the last thousand years",
          ],
          "Metne göre tuz ve alçıtaşı deniz suyunun buharlaşmasıyla oluşan minerallerdir.",
        ],
        [
          "The Mediterranean began to shrink after it was cut off because ----.",
          [
            "evaporation exceeded the inflow from rivers",
            "its rivers became much larger",
            "the climate became much colder",
            "the drilling ship removed large amounts of salt and gypsum from the bottom of the sea",
            "the Atlantic began to freeze",
          ],
          "Akdeniz buharlaşma yoluyla nehirlerden aldığından çok daha fazla su kaybettiği için küçülmeye başladı.",
        ],
        [
          "It can be understood from the passage that researchers ----.",
          [
            "disagree about how quickly the basin refilled",
            "have proved that the flood lasted two years",
            "believe the crisis is happening again",
            "agree that the Mediterranean was refilled gradually by rivers over many thousands of years",
            "have never found salt in the Atlantic",
          ],
          "Bazı araştırmacılar havzanın iki yılda dolduğunu, diğerleri sürecin daha kademeli olduğunu savunur; yani anlaşmazlık vardır.",
        ],
      ],
    },
    {
      text:
        "In the Jack Hills of Western Australia, geologists have found some of the oldest known fragments of the Earth. They are not whole rocks but tiny crystals of a mineral called zircon, most of them narrower than a human hair. The crystals originally formed in molten rock, but the rocks in which they formed were later worn away, and the zircons were carried by rivers and eventually became part of a much younger sandstone. Zircon is extremely hard and resistant to chemical change, and when it forms, it traps small amounts of uranium, which slowly decays into lead at a known rate. By measuring the ratio of uranium to lead, scientists can calculate when a crystal formed. In 2001, researchers reported a Jack Hills zircon that was about 4.4 billion years old, only about 150 million years younger than the Earth itself. Even more surprising was the chemistry of the crystal. The proportions of different forms of oxygen it contained suggested that it had formed from material that had been in contact with liquid water near the surface. If this interpretation is correct, the early Earth cooled much more quickly than scientists had assumed and may have had oceans, and perhaps conditions suitable for life, far earlier than previously believed.",
      questions: [
        [
          "According to the passage, the Jack Hills zircons are now found in ----.",
          [
            "a sandstone younger than the crystals themselves",
            "the molten rock in which they formed",
            "the bottom of an ancient ocean",
            "large pieces of rock that have remained in exactly the same place since they formed",
            "the beds of modern rivers",
          ],
          "Metne göre zirkonlar nehirlerle taşınıp çok daha genç bir kumtaşının parçası haline geldi.",
        ],
        [
          "The uranium in zircon crystals is useful because it ----.",
          [
            "allows scientists to work out the crystals' age",
            "makes the crystals extremely hard",
            "shows where the crystals were formed",
            "protects the crystals from chemical change and from being worn away by rivers",
            "contains different forms of oxygen",
          ],
          "Uranyumun bilinen bir hızla kurşuna dönüşmesi kristalin yaşının hesaplanmasını sağlar.",
        ],
        [
          "It can be inferred from the passage that the oxygen in the 2001 zircon ----.",
          [
            "challenged assumptions about the early Earth",
            "proved that life existed 4.4 billion years ago",
            "was added by modern contamination",
            "showed that the Earth was much older than scientists had calculated from earlier studies",
            "was identical to that in other zircons",
          ],
          "Oksijen kimyası erken Dünya'nın sanıldığından daha hızlı soğuduğunu düşündürerek varsayımları sorguladı.",
        ],
      ],
    },
    {
      text:
        "On 22 May 1960, the most powerful earthquake ever recorded struck southern Chile. Its magnitude was estimated at about 9.5. The shaking, which lasted around ten minutes, was preceded by a series of strong foreshocks the day before, and many people had already left damaged buildings, which helped to reduce the number of deaths. Even so, between one and six thousand people are thought to have died, and the city of Valdivia was severely damaged; parts of it sank permanently by up to two metres. The earthquake was caused by a sudden movement along a boundary where one part of the Earth's crust slides beneath another, and the rupture extended for roughly a thousand kilometres along the coast. It also produced a tsunami that devastated Chilean coastal towns and then crossed the Pacific Ocean. Fifteen hours later, waves struck Hawaii, killing sixty-one people in the town of Hilo, and after about twenty-two hours they reached Japan, where some 140 people died. The disaster led to major improvements in the warning system for tsunamis in the Pacific. It also provided scientists with valuable data: instruments around the world recorded the whole Earth vibrating like a bell for days afterwards, allowing researchers to learn more about its internal structure.",
      questions: [
        [
          "According to the passage, the foreshocks on the previous day ----.",
          [
            "may have helped to save lives",
            "caused most of the deaths",
            "were felt only in Japan",
            "made scientists predict the exact time and place of the main earthquake the next day",
            "produced the tsunami",
          ],
          "Metne göre önceki günkü öncü sarsıntılar insanların hasarlı binaları terk etmesine yol açarak ölü sayısını azalttı.",
        ],
        [
          "It can be understood from the passage that the tsunami ----.",
          [
            "reached Hawaii before it reached Japan",
            "affected only the coast of Chile",
            "was caused by a landslide",
            "killed more people in Japan than the earthquake itself killed in the whole of Chile",
            "struck Hilo after twenty-two hours",
          ],
          "Dalgalar on beş saat sonra Hawaii'ye, yaklaşık yirmi iki saat sonra Japonya'ya ulaştı.",
        ],
        [
          "According to the passage, scientists benefited from the earthquake because ----.",
          [
            "it helped them study the Earth's interior",
            "it raised Valdivia above sea level",
            "it ended the use of tsunami warnings",
            "it proved that earthquakes can be predicted accurately several days before they happen",
            "it lasted for several days",
          ],
          "Dünya'nın günlerce bir çan gibi titreşmesi iç yapısı hakkında bilgi edinmeyi sağladı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Meteor Crater in Arizona is a bowl in the desert more than a kilometre wide. For decades, many scientists believed it had been formed by a volcanic steam explosion. ---- Shoemaker found forms of quartz that can be created only by the extreme pressure of a sudden impact, settling the question.",
      [
        "In 1960, however, the geologist Eugene Shoemaker examined the rocks there in detail.",
        "Arizona is famous for its deserts.",
        "Many tourists visit the crater each year.",
        "Mining companies, which were convinced that a huge mass of valuable iron lay buried beneath the floor of the crater, drilled there for many years.",
        "Volcanoes are found on every continent.",
      ],
      "Boşluktan sonra Shoemaker'ın bulgusu anlatılır; boşluğa 1960'ta jeolog Eugene Shoemaker'ın oradaki kayaları ayrıntılı incelediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Instruments measure an earthquake's magnitude, but earlier scales described its effects. ---- At level two, for example, a few people at rest might feel the shaking, while at level twelve, damage is almost total and objects are thrown into the air.",
      [
        "The Mercalli scale, developed around 1900, ranks shaking by what people observe and feel.",
        "Earthquakes are common in Italy.",
        "Some earthquakes cause tsunamis.",
        "Modern instruments are very accurate.",
        "Many scientists in the nineteenth century travelled to the sites of earthquakes so that they could interview survivors and record the damage to buildings.",
      ],
      "Boşluktan sonra ölçeğin düzeyleri anlatılır; boşluğa 1900 civarında geliştirilen ve sarsıntıyı insanların gözlemine göre sıralayan Mercalli ölçeğini tanıtan cümle gelmelidir.",
    ],
    [
      "The Giant's Causeway in Northern Ireland consists of about 40,000 interlocking stone columns, most of them six-sided. ---- As the lava cooled and contracted, it cracked into regular shapes in much the same way that drying mud splits into polygons.",
      [
        "They formed around 60 million years ago from a thick flow of basalt lava.",
        "Northern Ireland has a mild climate.",
        "Many visitors walk along the coast.",
        "According to a well-known local legend, the columns were built by a giant who wanted to cross the sea to fight a rival living in Scotland.",
        "Some columns have four or eight sides.",
      ],
      "Boşluktan sonra lavın soğuyup büzülmesi anlatılır; boşluğa sütunların yaklaşık 60 milyon yıl önce kalın bir bazalt lav akıntısından oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1971, Soviet geologists drilling for natural gas in the desert of Turkmenistan accidentally broke into an underground cavern, and the ground collapsed into a large crater. ---- More than fifty years later, it is still burning, and the 'Door to Hell' has become a tourist attraction.",
      [
        "To prevent poisonous gas from spreading, they set it on fire, expecting it to burn out within weeks.",
        "Turkmenistan is mostly desert.",
        "Natural gas is used for heating.",
        "The drilling equipment and the camp that the geologists had built nearby were lost when the ground beneath them suddenly gave way during the night.",
        "Many countries search for gas.",
      ],
      "Boşluktan sonra kraterin hâlâ yandığı anlatılır; boşluğa jeologların zehirli gazın yayılmasını önlemek için onu ateşe verdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "During the 1964 earthquake in Niigata, Japan, several blocks of flats tipped over on their sides, yet the buildings themselves remained largely undamaged. ---- When saturated sand is shaken, the water pressure between the grains rises, and the ground temporarily loses its strength.",
      [
        "The cause was liquefaction of the wet, sandy soil beneath their foundations.",
        "Niigata is a city on the coast.",
        "Many buildings in Japan are tall.",
        "Engineers had designed the blocks of flats to resist shaking, and the strong concrete frames survived the earthquake with only very minor cracks and damage.",
        "Earthquakes can last several minutes.",
      ],
      "Boşluktan sonra suya doygun kumun sarsıldığında dayanımını yitirmesi anlatılır; boşluğa nedenin temellerin altındaki ıslak kumlu toprağın sıvılaşması olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Old Norse sagas mention a 'sunstone' that sailors used to locate the sun when the sky was overcast. ---- Experiments have shown that, by turning such a crystal until two images seen through it look equally bright, a navigator can find the sun's direction with surprising accuracy.",
      [
        "Many researchers think it was a clear form of calcite known as Iceland spar.",
        "The Vikings sailed as far as North America.",
        "Clouds cover the North Atlantic for much of the year.",
        "In 2013, a crystal of this kind was found among the equipment of an English warship that had sunk near the Channel Islands in the late sixteenth century.",
        "Some crystals are transparent.",
      ],
      "Boşluktan sonra 'such a crystal' ifadesiyle kristalin kullanımı anlatılır; boşluğa bu taşın İzlanda spatı denen berrak bir kalsit olduğunu düşündüren cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "When lightning strikes sand, it can heat it to more than 1,800 degrees Celsius in a fraction of a second.",
        "The sand melts and quickly cools, forming hollow, branching tubes of glass called fulgurites.",
        "Some fulgurites are several metres long and trace the path of the lightning through the ground.",
        "Thunderstorms are most common in tropical regions.",
        "Scientists study them to learn about ancient storms and the composition of the soil.",
      ],
      odd: 3,
      why: "Parça yıldırımın kumda oluşturduğu fulgurit adlı cam tüpleri anlatır. Fırtınaların en çok tropik bölgelerde görüldüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In some deserts, sand dunes produce a deep, loud hum that can be heard several kilometres away.",
        "The sound occurs when dry sand slides down the steep face of a dune in an avalanche.",
        "Camels can travel for days across the desert without drinking.",
        "Researchers believe that the grains moving together vibrate in step, like the strings of an instrument.",
        "Marco Polo described such sounds in the thirteenth century and thought they were made by spirits.",
      ],
      odd: 2,
      why: "Parça şarkı söyleyen kum tepelerini anlatır. Pek çok çölün yılda 250 milimetreden az yağış aldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Uluru, a huge sandstone rock in central Australia, rises about 350 metres above the surrounding plain.",
        "For the local Anangu people, it is a place of deep spiritual importance.",
        "Its colour seems to change during the day, glowing bright red at sunrise and sunset.",
        "This effect is caused by iron minerals in the rock, which reflect red light when the sun is low.",
        "Australia exports large quantities of iron ore to Asia.",
      ],
      odd: 4,
      why: "Parça Uluru kayasını ve renginin değişmesini anlatır. Avustralya'nın Asya'ya büyük miktarda demir cevheri ihraç ettiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Pumice is a volcanic rock filled with so many gas bubbles that it can float on water.",
        "After some underwater eruptions, vast rafts of pumice cover hundreds of square kilometres of ocean.",
        "Many ships today use satellite navigation.",
        "These rafts can drift for months or even years across the sea.",
        "Along the way, they carry small marine organisms to new coastlines, helping species spread.",
      ],
      odd: 2,
      why: "Parça okyanusta sürüklenen pomza sallarını anlatır. Günümüzde pek çok geminin uydu navigasyonu kullandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Iceland lies on the boundary between two of the Earth's great plates, which are slowly moving apart.",
        "At Þingvellir, visitors can walk through a valley where the gap between them can be clearly seen.",
        "Iceland's parliament was founded in 930 and still meets today.",
        "The plates separate by about two centimetres each year, and the valley is gradually widening.",
        "Divers can even swim in a clear, cold fissure that lies between the two plates.",
      ],
      odd: 2,
      why: "Parça İzlanda'daki iki levhanın ayrılmasını anlatır. İzlanda parlamentosunun dünyanın en eskilerinden biri olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Between 1983 and 2018, the Kilauea volcano in Hawaii erupted almost without a break.",
        "Hawaii attracts millions of tourists every year.",
        "Lava flowing into the ocean has added hundreds of hectares of new land to the island.",
        "In 2018, a series of eruptions destroyed more than 700 homes.",
        "Scientists monitor the volcano closely using instruments that detect changes in the shape of the ground.",
      ],
      odd: 1,
      why: "Parça Kilauea yanardağının etkinliğini anlatır. Hawaii'nin her yıl milyonlarca turist çektiğini söyleyen II. cümle konu dışıdır.",
    },
  ],
};
