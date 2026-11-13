import type { YokdilDeneme } from "./types";

export const FEN_32: YokdilDeneme = {
  no: 32,
  field: "fen",
  vocab: [
    [
      "Every few hundred kilometres, the crew stopped the ship to measure the ---- of the ocean.",
      ["depth", "colour", "price", "noise", "taste"],
      "Mürettebatın birkaç yüz kilometrede bir okyanusun 'derinliğini' (depth) ölçmek için gemiyi durdurduğu anlatılır.",
    ],
    [
      "The steel sphere was lowered on a cable to a depth that no human had ever ---- before.",
      ["reached", "measured", "avoided", "described", "forbidden"],
      "Çelik kürenin daha önce hiçbir insanın 'ulaşmadığı' (reached) bir derinliğe kabloyla indirildiği anlatılır.",
    ],
    [
      "At the bottom of the trench, the water ---- is over a thousand times what we feel at sea level.",
      ["pressure", "temperature", "colour", "speed", "salt"],
      "Çukurun dibinde su 'basıncının' (pressure) yüzeydekinden bin kat fazla olduğu anlatılır.",
    ],
    [
      "The toys were carried by ocean currents and washed ---- on beaches thousands of kilometres away.",
      ["ashore", "abroad", "aloud", "aside", "awake"],
      "Oyuncakların okyanus akıntılarıyla taşınıp binlerce kilometre uzaktaki plajlarda 'kıyıya vurduğu' (ashore) anlatılır.",
    ],
    [
      "Around the vents lived ---- communities of worms, clams and crabs.",
      ["thriving", "extinct", "frozen", "imaginary", "lonely"],
      "Bacaların çevresinde solucan, midye ve yengeçlerden oluşan 'gelişen/zengin' (thriving) toplulukların yaşadığı anlatılır.",
    ],
    [
      "The new device allowed divers to ---- underwater for much longer than before.",
      ["stay down", "give up", "take off", "turn out", "look after"],
      "Yeni cihazın dalgıçların su altında öncekinden çok daha uzun süre 'kalmasına' (stay down) olanak tanıdığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "HMS Challenger ---- nearly 130,000 kilometres by the time it returned to Britain in 1876.",
      ["had sailed", "sails", "will sail", "is sailing", "has been sailed"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had sailed'.",
    ],
    [
      "Beebe ---- what he saw through a telephone line while Barton watched the instruments.",
      ["described", "has described", "describes", "will describe", "was described"],
      "Geçmişte tamamlanmış eylem: 'described'.",
    ],
    [
      "If the cracked window had broken completely, the two men ----.",
      ["would have been killed", "will be killed", "are killed", "had been killed", "would be killing"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would have been killed'.",
    ],
    [
      "Thousands of plastic toys ---- into the Pacific when containers fell from a ship in 1992.",
      ["were released", "released", "have released", "are releasing", "will release"],
      "Oyuncaklar okyanusa salınmıştır; edilgen geçmiş zaman: 'were released'.",
    ],
    [
      "---- adult eels have never been seen spawning in the Sargasso Sea, scientists believe they breed there.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Hiç görülmemeleri ile orada ürediklerine inanılması zıttır: 'Although'.",
    ],
    [
      "The scientists found animals ---- survive without any sunlight at all.",
      ["that", "who", "whose", "what", "where"],
      "'animals' sözcüğünü niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
    ],
    [
      "The device supplied air only when the diver breathed in, ---- saved a great deal of air.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The deeper the submersible descended, ---- the water became.",
      ["the colder", "the coldest", "colder than", "much colder", "so cold"],
      "'The deeper ..., the colder ...' paralel yapısı: 'the colder'.",
    ],
    [
      "Not until 2012 ---- anyone return to the deepest point of the ocean.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Maury collected thousands of old logbooks ---- he could chart winds and currents.",
      ["so that", "even though", "unless", "whereas", "as if"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The raft drifted for more than three months ---- reaching an island in Polynesia.",
      ["before", "until", "unless", "since", "while"],
      "Polinezya'daki bir adaya ulaşmadan önce sürüklendiği anlatılır: 'before'.",
    ],
    [
      "The bottle had been floating in the sea for more than a century ---- it was found.",
      ["when", "unless", "since", "until", "so that"],
      "Bulunduğu zamana kadar geçen süre; zaman bildiren bağlaç: 'when'.",
    ],
    [
      "Most of the plastic in the ocean consists of fragments ---- small to be seen from a ship.",
      ["too", "so", "very", "enough", "such"],
      "'too small to be seen' yapısı: 'too'.",
    ],
    [
      "It is important that ships ---- their position accurately when collecting samples.",
      ["record", "records", "recorded", "to record", "recording"],
      "'It is important that' sonrası yalın fiil (subjunctive): 'record'.",
    ],
  ],
  cloze: [
    {
      text:
        "In December 1872, the British warship HMS Challenger set out from Portsmouth on a voyage that would last almost three and a half years. Its guns had been removed to make room for laboratories, {1} the ship carried a team of scientists led by the naturalist Charles Wyville Thomson. Their task was to investigate the deep ocean, about which almost nothing was known; some scientists even believed that no life could exist at great depths. At hundreds of stations across every ocean except the Arctic, the crew sounded the bottom with weighted lines, took the temperature of the water and dredged up samples of mud and animals from the sea floor. In the western Pacific, they recorded a depth of more than 8,000 metres, {2} part of what is now known as the Challenger Deep. The expedition discovered about 4,700 new species of marine life, {3} that animals live even in the deepest parts of the sea. The results were so extensive {4} the official report, published in fifty volumes, took nineteen years to complete. Many historians date modern oceanography from this voyage, {5} many of its samples are still studied today.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "yet"],
          "Topların kaldırılması ve bilim ekibinin taşınması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["in", "at", "on", "by", "from"],
          "'in part of' ifadesi: o bölgede ölçüm yapıldığı anlatılır: 'in'.",
        ],
        [
          "(23) ----",
          ["proving", "proved", "to prove", "proves", "having proved"],
          "Önceki cümlenin sonucunu bildiren -ing yapısı: 'proving'.",
        ],
        [
          "(24) ----",
          ["that", "as", "than", "which", "so"],
          "'so ... that' sonuç yapısı: 'that'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "so"],
          "Modern oşinografinin başlangıcı sayılması ve örneklerin hâlâ incelenmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the early 1930s, the American naturalist William Beebe wanted to observe deep-sea animals in their natural surroundings rather than as dead specimens hauled up in nets. With the engineer Otis Barton, {1} designed and paid for the vessel, he developed the bathysphere, a hollow steel ball about one and a half metres across with small windows of thick quartz. It had no engine and was lowered from a ship on a steel cable, {2} the two men inside communicated with the surface by telephone. In August 1934, off the coast of Bermuda, they descended to a depth of 923 metres, {3} remained the deepest dive by humans for fifteen years. Beebe described to the crew above the strange creatures he saw glowing in the darkness, many of {4} had never been recorded. Some scientists later doubted his descriptions, since no specimens could be collected to confirm them, and it was suggested that condensation on the windows may have affected what he saw. {5}, Beebe's dives captured public imagination and showed that direct observation of the deep sea was possible.",
      blanks: [
        [
          "(26) ----",
          ["who", "which", "whose", "where", "what"],
          "Virgülden sonra Barton'ı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(27) ----",
          ["while", "unless", "although", "until", "because"],
          "Küre indirilirken içerideki adamların telefonla iletişim kurduğu anlatılır: 'while'.",
        ],
        [
          "(28) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra derinlik rekorunu niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["which", "who", "what", "whose", "them"],
          "'many of which' yapısı: 'which'.",
        ],
        [
          "(30) ----",
          ["Nevertheless", "Therefore", "Similarly", "For example", "In other words"],
          "Şüphelere rağmen dalışların kamuoyunun ilgisini çektiği anlatılır: 'Nevertheless'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although some scientists believed that nothing could live in the deep ocean, ----.",
      [
        "animals were found deep down",
        "the ship left Portsmouth in 1872",
        "the guns had been removed",
        "the report took nineteen years",
        "the crew dredged up mud",
      ],
      "'Although' zıtlık ister: bazı bilim insanları derin okyanusta yaşam olamayacağına inansa da sefer büyük derinliklerde hayvanlar buldu.",
    ],
    [
      "The bathysphere was fitted with thick quartz windows ----.",
      [
        "to resist the pressure",
        "although Bermuda has warm water",
        "unless the cable had broken",
        "because Beebe was a naturalist",
        "while Barton paid for the vessel",
      ],
      "'so that' amaç bildirir: batisfere büyük basınca dayanabilmesi için kalın kuvars pencereler takıldı.",
    ],
    [
      "If a submersible's window cracks at great depth, ----.",
      [
        "the crew must return to the surface at once",
        "the trench is in the Pacific Ocean",
        "the vessel was designed in Switzerland",
        "the dive took five hours",
        "the navy bought the vessel",
      ],
      "Birinci tip koşul: bir denizaltı aracının penceresi büyük derinlikte çatlarsa mürettebat hemen yüzeye dönmelidir.",
    ],
    [
      "----, oceanographers used the toys to test their models of ocean currents.",
      [
        "By recording where and when they washed ashore",
        "Although the containers were made of steel",
        "Unless the storm had been very strong",
        "Because the toys were brightly coloured",
        "Since the ship was sailing from Hong Kong",
      ],
      "Oyuncakların nerede ve ne zaman kıyıya vurduğunu kaydederek oşinograflar akıntı modellerini test etti.",
    ],
    [
      "Schmidt concluded that eels breed in the Sargasso Sea ----.",
      [
        "because the smallest larvae were found there",
        "although eels live in European rivers",
        "unless the larvae had been carried by ships",
        "so that the expedition took many years",
        "while the sea is surrounded by currents",
      ],
      "Schmidt, en küçük larvalar orada bulunduğu için yılan balıklarının Sargasso Denizi'nde ürediği sonucuna vardı.",
    ],
    [
      "The animals around the vents can survive without sunlight ----.",
      [
        "as bacteria use chemicals",
        "although the water is very deep",
        "unless the vents stop flowing",
        "so that scientists were surprised",
        "while the submarine was called Alvin",
      ],
      "Bacaların çevresindeki hayvanlar, oradaki bakteriler kimyasallardan besin ürettiği için güneş ışığı olmadan yaşayabilir.",
    ],
    [
      "Not only did the Aqua-Lung allow divers to move freely, ----.",
      [
        "but it also aided filming",
        "and it was developed in France",
        "since air is a mixture of gases",
        "so the regulator came from a car",
        "unless the diver was very skilled",
      ],
      "'Not only ... but also' yapısı tamamlanır: Aqua-Lung dalgıçların özgürce hareket etmesini sağlamakla kalmadı, su altı çekimini de mümkün kıldı.",
    ],
    [
      "Since Maury could no longer go to sea because of an injury, ----.",
      [
        "he studied ships' records",
        "he was an officer in the navy",
        "winds blow in regular patterns",
        "his book was published in 1855",
        "ships carried logbooks",
      ],
      "'Since' neden bildirir: Maury bir yaralanma nedeniyle artık denize açılamadığı için kendini gemi kayıtlarını incelemeye adadı.",
    ],
    [
      "The so-called garbage patch is not a solid island of rubbish ----.",
      [
        "but an area of tiny fragments",
        "because the Pacific is the largest ocean",
        "although plastic floats on water",
        "unless ships pass through it",
        "so that it was discovered in 1997",
      ],
      "'not ... but' yapısı tamamlanır: sözde çöp adası katı bir çöp adası değil, küçük plastik parçacıkların toplandığı geniş bir alandır.",
    ],
    [
      "Although Heyerdahl showed that such a voyage was possible, ----.",
      [
        "genes point mainly to Asia",
        "the raft was made of balsa wood",
        "the voyage began in Peru",
        "the journey took over three months",
        "his crew consisted of six men",
      ],
      "'Although' zıtlık ister: Heyerdahl böyle bir yolculuğun mümkün olduğunu gösterse de genetik kanıtlar Polinezyalıların esas olarak Asya'dan geldiğini düşündürüyor.",
    ],
    [
      "Unless plastic waste is prevented from reaching the sea, ----.",
      [
        "it will harm sea life",
        "most ships are made of steel",
        "the ocean covers most of the planet",
        "many people live near the coast",
        "beaches are popular in summer",
      ],
      "'Unless' olumsuz koşul: plastik atığın denize ulaşması önlenmezse deniz yaşamına yüzyıllarca zarar vermeye devam eder.",
    ],
  ],
  enTr: [
    [
      "The expedition proved that life exists even in the deepest parts of the ocean.",
      [
        "Sefer, okyanusun en derin kısımlarında bile yaşam bulunduğunu kanıtladı.",
        "Sefer, okyanusun derin kısımlarında yaşam olmadığını gösterdi.",
        "Okyanusun en derin kısımları, seferden önce zaten biliniyordu.",
        "Sefer, yalnızca okyanus yüzeyindeki yaşamı inceledi.",
        "Sefer, okyanusun en derin kısımlarında yaşam bulunduğu iddialarının yanlış olduğunu açıkça kanıtladı.",
      ],
      "'proved that life exists' 'yaşam bulunduğunu kanıtladı', 'even in the deepest parts of the ocean' 'okyanusun en derin kısımlarında bile' karşılığıdır.",
    ],
    [
      "The two men could see glowing creatures through the small windows of the sphere.",
      [
        "İki adam, kürenin küçük pencerelerinden parlayan canlıları görebiliyordu.",
        "İki adam, parlayan canlılar yüzünden pencereden dışarı bakamadı.",
        "Kürenin pencereleri, canlıların parlamasını engelliyordu.",
        "Parlayan canlılar, küreye girmeye çalıştı.",
        "Kürenin küçük pencereleri, iki adamın dışarıdaki parlayan canlıları görmesini tamamen engelliyordu.",
      ],
      "'could see glowing creatures' 'parlayan canlıları görebiliyordu', 'through the small windows of the sphere' 'kürenin küçük pencerelerinden' karşılığıdır.",
    ],
    [
      "It took nearly five hours for the vessel to reach the bottom of the trench.",
      [
        "Aracın çukurun dibine ulaşması yaklaşık beş saat sürdü.",
        "Araç, çukurun dibinde yaklaşık beş saat kaldı.",
        "Çukurun dibi, yüzeyden beş saat uzaklıktaydı.",
        "Araç, beş saat içinde iki kez çukurun dibine indi.",
        "Çukurun dibine ulaşmak beş dakikadan kısa sürdü.",
      ],
      "'It took nearly five hours' 'yaklaşık beş saat sürdü', 'for the vessel to reach the bottom of the trench' 'aracın çukurun dibine ulaşması' karşılığıdır.",
    ],
    [
      "Some of the toys travelled through the Arctic and ended up in the Atlantic years later.",
      [
        "Oyuncakların bir kısmı Kuzey Kutbu'ndan geçerek yıllar sonra Atlantik'e ulaştı.",
        "Oyuncakların tamamı yıllarca Kuzey Kutbu'nda buzların arasında kaldı.",
        "Oyuncaklar, Atlantik'ten Kuzey Kutbu'na doğru sürüklendi.",
        "Oyuncakların hiçbiri Pasifik'ten çıkamadı.",
        "Oyuncakların bir kısmı Atlantik'ten geçerek yıllar sonra Kuzey Kutbu'ndaki buzların arasında bulundu.",
      ],
      "'travelled through the Arctic' 'Kuzey Kutbu'ndan geçerek', 'ended up in the Atlantic years later' 'yıllar sonra Atlantik'e ulaştı' karşılığıdır.",
    ],
    [
      "The discovery showed that life can be supported by chemical energy rather than sunlight.",
      [
        "Keşif, yaşamın güneş ışığı yerine kimyasal enerjiyle de sürdürülebildiğini gösterdi.",
        "Keşif, yaşamın güneş ışığı olmadan sürdürülemeyeceğini kanıtladı.",
        "Kimyasal enerji, güneş ışığının yaşam üzerindeki etkisini azaltır.",
        "Güneş ışığı, kimyasal enerjinin üretilmesine yol açar.",
        "Keşif, güneş ışığı olmadan yalnızca kimyasal enerjiyle yaşamın sürdürülemeyeceğini açıkça gösterdi.",
      ],
      "'can be supported by chemical energy' 'kimyasal enerjiyle de sürdürülebildiğini', 'rather than sunlight' 'güneş ışığı yerine' karşılığıdır.",
    ],
    [
      "By studying old logbooks, he was able to suggest faster routes across the oceans.",
      [
        "Eski seyir defterlerini inceleyerek okyanuslarda daha hızlı rotalar önerebildi.",
        "Okyanuslarda daha hızlı rotalar bulmak için yeni seyir defterleri yazdı.",
        "Eski seyir defterleri, okyanuslardaki rotaların yavaşladığını gösteriyordu.",
        "Daha hızlı rotalar, eski seyir defterlerinin kaybolmasına yol açtı.",
        "Seyir defterlerini incelemek, rotaları uzattı.",
      ],
      "'By studying old logbooks' 'eski seyir defterlerini inceleyerek', 'was able to suggest faster routes across the oceans' 'okyanuslarda daha hızlı rotalar önerebildi' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Seferin raporu elli cilt tuttu ve tamamlanması on dokuz yıl sürdü.",
      [
        "The expedition's report filled fifty volumes and took nineteen years to complete.",
        "The expedition lasted nineteen years and produced fifty ships.",
        "Fifty scientists took nineteen years to plan the expedition.",
        "The report was completed in nineteen days by fifty writers.",
        "The expedition visited fifty countries and its scientists took nineteen years to write the report.",
      ],
      "'elli cilt tuttu' 'filled fifty volumes', 'tamamlanması on dokuz yıl sürdü' 'took nineteen years to complete' karşılığıdır.",
    ],
    [
      "Bazı bilim insanları, hiçbir örnek toplanamadığı için onun anlattıklarından şüphe etti.",
      [
        "Some scientists doubted his descriptions because no specimens could be collected.",
        "Some scientists collected specimens to prove his descriptions.",
        "His descriptions were based entirely on specimens he collected.",
        "No scientists doubted his descriptions of deep-sea animals.",
        "He refused to describe the deep-sea animals because no specimens could be brought to the surface.",
      ],
      "'hiçbir örnek toplanamadığı için' 'because no specimens could be collected', 'anlattıklarından şüphe etti' 'doubted his descriptions' karşılığıdır.",
    ],
    [
      "Yılan balığı larvaları, akıntılarla binlerce kilometre taşınarak Avrupa kıyılarına ulaşır.",
      [
        "Eel larvae reach the coasts of Europe after being carried thousands of kilometres by currents.",
        "Eel larvae swim against the currents to reach the Sargasso Sea.",
        "European currents carry eels away from the coast.",
        "Eel larvae are born on the coasts of Europe.",
        "Ocean currents prevent eel larvae from travelling the thousands of kilometres to the coasts of Europe.",
      ],
      "'akıntılarla binlerce kilometre taşınarak' 'after being carried thousands of kilometres by currents', 'Avrupa kıyılarına ulaşır' 'reach the coasts of Europe' karşılığıdır.",
    ],
    [
      "Bu cihaz, dalgıçlara yalnızca nefes aldıklarında hava sağlıyordu.",
      [
        "This device supplied divers with air only when they breathed in.",
        "This device prevented divers from breathing underwater.",
        "Divers had to stop breathing to use the device.",
        "The device supplied air continuously, even when divers did not need it.",
        "Divers used the device only on the surface.",
      ],
      "'yalnızca nefes aldıklarında' 'only when they breathed in', 'dalgıçlara hava sağlıyordu' 'supplied divers with air' karşılığıdır.",
    ],
    [
      "Rüzgârlar yüzey suyunu kıyıdan uzaklaştırınca besin açısından zengin soğuk su yükselir.",
      [
        "When winds push surface water away from the coast, cold water rich in nutrients rises.",
        "Cold water rich in nutrients sinks when winds blow towards the coast.",
        "Winds make surface water warmer and poorer in nutrients.",
        "Nutrients in cold water cause the winds to change direction.",
        "When there are no winds near the coast, warm surface water rises and nutrients disappear.",
      ],
      "'Rüzgârlar yüzey suyunu kıyıdan uzaklaştırınca' 'when winds push surface water away from the coast', 'besin açısından zengin soğuk su yükselir' 'cold water rich in nutrients rises' karşılığıdır.",
    ],
    [
      "Şişe, okyanus akıntılarını incelemek için yürütülen bir deneyin parçası olarak denize atılmıştı.",
      [
        "The bottle had been thrown into the sea as part of an experiment to study ocean currents.",
        "The bottle was found during an experiment on ocean pollution.",
        "Ocean currents carried the bottle back to the ship.",
        "The experiment was designed to find lost bottles.",
        "The bottle was thrown into the sea by a passenger who wanted to study how ocean currents moved.",
      ],
      "'denize atılmıştı' 'had been thrown into the sea', 'okyanus akıntılarını incelemek için yürütülen bir deneyin parçası olarak' 'as part of an experiment to study ocean currents' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The Trieste was a bathyscaphe, a deep-diving vessel designed by the Swiss physicist Auguste Piccard. It consisted of a large float filled with petrol, which is lighter than water and does not compress under pressure, with a small steel sphere for the crew attached underneath. To descend, the vessel carried tonnes of iron pellets as ballast; to rise again, the crew released them. The United States Navy bought the Trieste in 1958, and on 23 January 1960, Piccard's son Jacques and a naval officer, Don Walsh, set out to reach the deepest known point in the oceans, the Challenger Deep in the Mariana Trench in the western Pacific. The descent took almost five hours. At a depth of about 9,000 metres the men heard a loud crack, and they later discovered that one of the outer windows had split, but they decided to continue. They reached the bottom at nearly 11,000 metres, where the pressure was more than a thousand times that at the surface. Because the vessel had stirred up a cloud of fine sediment, they could see very little, and they stayed only about twenty minutes. No one returned to the Challenger Deep until 2012, when the film director James Cameron made a solo dive in a specially built submersible.",
      questions: [
        [
          "According to the passage, petrol was used in the float because it ----.",
          [
            "is lighter than water and keeps its volume under pressure",
            "was cheap and easy to obtain",
            "could be burned to power the vessel",
            "made the vessel heavier so that it sank faster",
            "protected the crew from cold",
          ],
          "Metne göre benzin sudan hafiftir ve basınç altında sıkışmaz.",
        ],
        [
          "When the men heard a crack, they ----.",
          [
            "chose to carry on with the dive",
            "returned to the surface at once",
            "released all the ballast",
            "called for help by telephone",
            "repaired the window",
          ],
          "Bir pencerenin çatladığını fark etmelerine rağmen devam etmeye karar verdiler.",
        ],
        [
          "It can be understood from the passage that the men's view at the bottom was limited because ----.",
          [
            "the vessel had disturbed the sediment",
            "their lights had failed",
            "the windows were covered with ice",
            "it was night-time",
            "the water was too salty",
          ],
          "Araç ince tortu bulutu kaldırdığı için çok az şey görebildiler.",
        ],
      ],
    },
    {
      text:
        "In January 1992, during a storm in the North Pacific, several shipping containers fell from a cargo ship travelling from Hong Kong to the United States. One of them broke open and released tens of thousands of floating toys made of plastic, among them ducks, turtles, frogs and beavers. Because the toys floated and were not affected much by the wind, they behaved like ideal markers of ocean currents. The American oceanographer Curtis Ebbesmeyer and his colleague James Ingraham, who had developed a computer model of currents in the North Pacific, began collecting reports from beachcombers who found the toys. The first ones reached the coast of Alaska about ten months after the accident, close to where the model predicted, and many others were carried around the North Pacific in a great circular current. Some toys appear to have drifted north through the Bering Strait, become trapped in Arctic ice and been carried slowly across the top of the world; years later, a few were reported on the shores of the North Atlantic. The 'Friendly Floatees', as they became known, helped scientists to improve their models and also drew public attention to the vast amount of plastic that is lost or dumped at sea.",
      questions: [
        [
          "According to the passage, the toys were useful for studying currents because they ----.",
          [
            "floated and were little affected by the wind",
            "were brightly coloured and easy to see",
            "contained small radio transmitters",
            "sank slowly to the sea floor",
            "were made of natural materials",
          ],
          "Metne göre oyuncaklar yüzüyor ve rüzgârdan pek etkilenmiyordu.",
        ],
        [
          "The arrival of the first toys in Alaska ----.",
          [
            "roughly matched the scientists' predictions",
            "proved the computer model completely wrong",
            "took more than ten years",
            "was caused by a second storm",
            "happened before the accident",
          ],
          "İlk oyuncaklar modelin tahmin ettiği yere yakın bir yerde kıyıya ulaştı.",
        ],
        [
          "It can be inferred from the passage that the toys found in the North Atlantic ----.",
          [
            "had made a very long journey through polar regions",
            "came from a different accident",
            "were thrown there by beachcombers",
            "had never been in the Pacific",
            "sank before reaching land",
          ],
          "Bazı oyuncaklar Bering Boğazı'ndan geçip Arktik buzunda sıkışarak yıllar sonra Kuzey Atlantik'e ulaştı.",
        ],
      ],
    },
    {
      text:
        "For centuries, the life cycle of the European eel was a mystery. Eels were found in rivers and lakes across Europe, but no one had ever seen them breed or found their eggs. In the late nineteenth century, scientists discovered that small, transparent, leaf-shaped creatures that had been classified as a separate species were in fact the larvae of eels. In 1904, the Danish biologist Johannes Schmidt began a long search for the place where the larvae were born. Over the following two decades, using research ships and the help of merchant vessels, he collected thousands of eel larvae across the Atlantic, carefully recording their size and location. He noticed that the larvae became steadily smaller the further west and south he went, and the very smallest, only a few millimetres long and therefore recently hatched, were found in the Sargasso Sea, a region of the western Atlantic near Bermuda. Schmidt concluded that adult eels must travel more than 5,000 kilometres from Europe to breed there, and that the larvae then drift back to Europe on ocean currents, a journey that takes months or even years. Remarkably, although satellite tags have since tracked adult eels heading towards the area, no one has yet observed them spawning in the wild.",
      questions: [
        [
          "According to the passage, the leaf-shaped creatures were at first thought to be ----.",
          [
            "a different species",
            "young salmon",
            "eel eggs",
            "plants",
            "adult eels",
          ],
          "Metne göre ayrı bir tür olarak sınıflandırılmışlardı.",
        ],
        [
          "Schmidt's conclusion was based mainly on ----.",
          [
            "the changing size of the larvae in different places",
            "observations of adult eels spawning",
            "the discovery of eel eggs in rivers",
            "information from satellite tags",
            "reports from local fishermen working near Bermuda",
          ],
          "Larvaların konuma göre giderek küçülmesi, en küçüklerin bulunduğu yeri gösteriyordu.",
        ],
        [
          "It can be inferred from the passage that the breeding of eels ----.",
          [
            "has still not been directly witnessed",
            "takes place in European rivers",
            "was filmed by Schmidt",
            "happens only once every ten years",
            "has been fully explained",
          ],
          "Hiç kimse yılan balıklarının vahşi doğada yumurtladığını henüz gözlemlememiştir.",
        ],
      ],
    },
    {
      text:
        "In February 1977, a team of geologists aboard the small submersible Alvin dived to the Galápagos Rift, a volcanic ridge on the floor of the Pacific Ocean about 2,500 metres deep. They were looking for hot springs, which they believed must exist where seawater seeped into the hot rocks beneath the sea floor and rose again. They found the springs, but they also found something that no one had expected. Around the openings, where warm water rich in minerals flowed out, were dense communities of animals: giant tube worms more than a metre long, large clams, mussels, crabs and fish. Because none of the scientists on board was a biologist, they had brought few suitable containers and had to preserve some specimens in vodka. Life in the deep sea had been thought to depend entirely on the slow rain of dead material from the sunlit waters above, but these communities were far too rich for that. Later research showed that they were supported by bacteria that obtain energy from chemicals such as hydrogen sulphide in the vent water, a process called chemosynthesis. Many of the animals carry these bacteria inside their bodies. The discovery transformed ideas about where life can exist, and it has influenced the search for life on other worlds.",
      questions: [
        [
          "According to the passage, the 1977 expedition was originally looking for ----.",
          [
            "hot springs on the sea floor",
            "new species of tube worms",
            "evidence of life on other planets",
            "a lost submarine",
            "sources of vodka",
          ],
          "Metne göre jeologlar deniz tabanındaki sıcak su kaynaklarını arıyordu.",
        ],
        [
          "The mention of vodka shows that the scientists ----.",
          [
            "had not prepared for finding living things",
            "were celebrating their discovery",
            "used it to attract animals",
            "believed it was good for science",
            "were all trained biologists with suitable equipment",
          ],
          "Gemide biyolog olmadığı ve uygun kap getirilmediği için örnekler votkada saklandı; canlı bulmaya hazırlıklı değillerdi.",
        ],
        [
          "It can be understood from the passage that the vent communities ----.",
          [
            "do not depend on food from the surface",
            "receive most of their energy from sunlight",
            "contain no bacteria",
            "are found only near the Galápagos",
            "were known before 1977",
          ],
          "Topluluklar kimyasallardan enerji elde eden bakterilerle beslenir; yüzeyden gelen besine bağlı değildir.",
        ],
      ],
    },
    {
      text:
        "Before the Second World War, anyone hoping to remain below the surface for a long time had to wear heavy suits and helmets connected to the surface by an air hose, which severely limited their movement. In 1943, in occupied France, a young naval officer, Jacques-Yves Cousteau, found an answer with the help of Émile Gagnan, an engineer. Gagnan had designed a valve that controlled the flow of gas into car engines, and the two men adapted it so that it released compressed air from a tank carried on the diver's back, but only when the diver breathed in, and at the same pressure as the surrounding water. This 'demand regulator' allowed divers to swim freely for an hour or more and to breathe naturally at depth. Cousteau and his companions tested the Aqua-Lung, as it was called, in the Mediterranean, gradually diving deeper and learning about the dangers of pressure. After the war, the device was manufactured commercially and made recreational diving possible for millions of people. Cousteau also became a pioneer of underwater filming; The Silent World, a documentary he made, collected important prizes in 1956, and his later television series made him one of the best-known advocates for protecting the oceans.",
      questions: [
        [
          "The passage suggests that older diving suits were unsatisfactory because they ----.",
          [
            "restricted the diver's movement",
            "could not supply enough air",
            "was too expensive for the navy",
            "could only be used in rivers",
            "was dangerous in cold water",
          ],
          "Metne göre ağır giysiler ve yüzeye bağlı hava hortumu hareketi ciddi şekilde kısıtlıyordu.",
        ],
        [
          "The demand regulator was based on ----.",
          [
            "a device originally used in car engines",
            "the design of a submarine",
            "an aircraft oxygen mask",
            "a diving helmet",
            "a fire extinguisher used on ships",
          ],
          "Gagnan'ın araba motorlarına gaz akışını kontrol eden valfi uyarlandı.",
        ],
        [
          "It can be inferred from the passage that Cousteau's films ----.",
          [
            "helped raise public concern for the oceans",
            "were made before the Aqua-Lung was invented",
            "were not popular with audiences",
            "showed only the Mediterranean",
            "were produced by the navy",
          ],
          "Televizyon dizileri onu okyanusların korunmasının en tanınmış savunucularından biri yaptı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1839, the American naval officer Matthew Fontaine Maury injured his leg in a coach accident and could no longer serve at sea. ---- From thousands of these records he produced charts of winds and currents that allowed ships to shorten their voyages by days or even weeks.",
      [
        "He was put in charge of the navy's collection of old ships' logbooks.",
        "Coaches were the main form of land transport at that time.",
        "Many naval officers came from wealthy families.",
        "Charts are also used by pilots.",
        "In the 1830s, most ships were still powered by sails rather than by steam engines.",
      ],
      "Boşluktan sonra 'these records' denir; boşluğa Maury'nin donanmanın eski seyir defteri koleksiyonunun başına getirildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1997, the American sailor Charles Moore was returning from a race in Hawaii when he took a shortcut through a calm area of the North Pacific. ---- What he had found became known as the Great Pacific Garbage Patch, although most of it consists of fragments too small to see from a ship.",
      [
        "For days, he passed through water scattered with pieces of floating plastic.",
        "Hawaii is made up of volcanic islands.",
        "Many sailors take part in long-distance races.",
        "The Pacific is the deepest of the oceans.",
        "Calm seas are pleasant for sailing but can slow down racing yachts considerably.",
      ],
      "Boşluktan sonra 'What he had found' denir; boşluğa Moore'un günlerce yüzen plastik parçalarla dolu sulardan geçtiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Thor Heyerdahl, a Norwegian adventurer, left the coast with five companions in 1947 from Peru on a raft made of balsa logs. ---- Heyerdahl wanted to show that people from South America could have settled the islands of Polynesia in ancient times.",
      [
        "After 101 days and nearly 7,000 kilometres, they reached an island in Polynesia.",
        "Balsa trees grow quickly in tropical forests.",
        "Norway has a long coastline with many fjords.",
        "Peru is famous for its ancient cities.",
        "Rafts made of logs are among the oldest kinds of boats used by humans.",
      ],
      "Boşluktan sonra Heyerdahl'ın amacı anlatılır; boşluğa 101 gün ve yaklaşık 7.000 km sonra Polinezya'daki bir adaya ulaştıklarını söyleyen cümle gelmelidir.",
    ],
    [
      "Off the coast of Peru, winds regularly push warm surface water away from the shore. ---- These nutrients feed vast amounts of plankton, which in turn support one of the largest fisheries in the world.",
      [
        "Cold water rich in nutrients then rises from the depths to replace it.",
        "Peru has a long coastline on the Pacific.",
        "Fishing boats leave port early in the morning.",
        "Some winds blow from the mountains.",
        "Most kinds of plankton are invisible to the naked eye and drift with the currents.",
      ],
      "Boşluktan sonra 'These nutrients' denir; boşluğa derinlerden besin açısından zengin soğuk suyun yükseldiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In some species of deep-sea anglerfish, the males are tiny compared with the females. ---- Over time, their bodies fuse, and the male becomes a permanent source of sperm that shares the female's blood supply.",
      [
        "When a male finds a female in the darkness, he bites onto her body and never lets go.",
        "Anglerfish have a glowing lure on their heads.",
        "The deep sea is completely dark.",
        "Many fish lay thousands of eggs.",
        "Some species of fish live and travel together in very large groups called shoals.",
      ],
      "Boşluktan sonra 'their bodies fuse' denir; boşluğa erkeğin dişiyi bulunca onun bedenine ısırıp bir daha bırakmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2018, a woman walking on a beach in Western Australia found an old bottle containing a rolled-up piece of paper. ---- It had been thrown overboard from a German ship in 1886, making it the oldest message in a bottle ever found.",
      [
        "The paper turned out to be a form from an experiment to track ocean currents.",
        "Western Australia is a very large state.",
        "Many people walk on beaches at weekends.",
        "Glass bottles can last for a long time.",
        "At the end of the nineteenth century, Germany had a large and growing merchant fleet.",
      ],
      "Boşluktan sonra 'It had been thrown overboard' ile şişenin geçmişi anlatılır; boşluğa kâğıdın okyanus akıntılarını izlemek için yapılan bir deneyin formu olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1967, the biologist Roger Payne listened to recordings of humpback whales made by a navy engineer.",
        "He and a colleague discovered that the whales' sounds formed long, repeated patterns, like songs.",
        "An album of the recordings, released in 1970, sold more than a hundred thousand copies.",
        "Many albums of the 1970s were recorded in London.",
        "The songs helped to build public support for ending commercial whaling.",
      ],
      odd: 3,
      why: "Parça kambur balina şarkılarını anlatır. 1970'lerin pek çok albümünün Londra'da kaydedildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2023, scientists filmed a snailfish swimming at a depth of more than 8,300 metres off the coast of Japan.",
        "It is the deepest fish ever recorded.",
        "Tokyo is the capital of Japan.",
        "Researchers believe that fish cannot survive much deeper, because of the effects of pressure on their bodies.",
        "Below this limit, other animals such as shrimp-like creatures are still found.",
      ],
      odd: 2,
      why: "Parça en derinde görülen balığı anlatır. Tokyo'nun Japonya'nın başkenti olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A constant shower of small particles falls from the surface waters to the deep sea.",
        "This 'marine snow' consists of dead plankton, waste from animals and other organic material.",
        "Snow is common in winter in northern countries.",
        "It provides food for many creatures living far below the reach of sunlight.",
        "It also carries large amounts of carbon to the sea floor, where it may be stored for centuries.",
      ],
      odd: 2,
      why: "Parça deniz karını anlatır. Kuzey ülkelerinde kışın kar yağışının yaygın olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Seagrass beds occupy just a small part of the ocean bottom.",
        "Yet they store a large share of the carbon held in ocean sediments.",
        "They also provide shelter for young fish and protect coasts from erosion.",
        "Grass is eaten by many farm animals.",
        "Unfortunately, these meadows are disappearing in many regions because of pollution and coastal development.",
      ],
      odd: 3,
      why: "Parça deniz çayırlarını anlatır. Otun pek çok çiftlik hayvanı tarafından yendiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tiny floating plants called phytoplankton live in the sunlit upper layer of the ocean.",
        "Like plants on land, they use sunlight to make food and release oxygen.",
        "By some estimates, they release about fifty per cent of the air's oxygen.",
        "Oxygen tanks are used by divers and mountaineers.",
        "They also form the base of most marine food chains.",
      ],
      odd: 3,
      why: "Parça fitoplanktonu anlatır. Oksijen tüplerinin dalgıçlar ve dağcılarca kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Since 1992, satellites have measured the height of the sea surface with great precision.",
        "They send radar pulses down to the ocean and time how long the signals take to return.",
        "The measurements show that global sea level is rising by several millimetres a year.",
        "The rate of rise appears to be increasing as the climate warms.",
        "Many satellites are launched from sites near the equator.",
      ],
      odd: 4,
      why: "Parça uydularla deniz seviyesi ölçümünü anlatır. Pek çok uydunun ekvatora yakın yerlerden fırlatıldığını söyleyen V. cümle konu dışıdır.",
    },
  ],
};
