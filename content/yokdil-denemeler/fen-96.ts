import type { YokdilDeneme } from "./types";

export const FEN_96: YokdilDeneme = {
  no: 96,
  field: "fen",
  vocab: [
    [
      "The fish's head is covered by a ---- shield, through which its eyes can be clearly seen.",
      ["transparent", "rigid", "colourful", "rough", "heavy"],
      "Balığın başının, gözlerinin açıkça görülebildiği 'saydam' (transparent) bir kalkanla örtülü olduğu anlatılır.",
    ],
    [
      "The water in the pool is so salty that animals which ---- into it are quickly killed.",
      ["stray", "climb", "hide", "settle", "dig"],
      "Havuzdaki suyun o kadar tuzlu olduğu ki içine 'yanlışlıkla giren, yolunu şaşırıp dalan' (stray) hayvanların çabucak öldüğü anlatılır.",
    ],
    [
      "Exploring the deepest caves requires months of planning and great physical ----.",
      ["endurance", "weakness", "comfort", "luxury", "speed"],
      "En derin mağaraları keşfetmenin aylarca planlama ve büyük fiziksel 'dayanıklılık' (endurance) gerektirdiği anlatılır.",
    ],
    [
      "Because the cave had been sealed off for millions of years, its microbes had evolved in almost complete ----.",
      ["isolation", "competition", "abundance", "light", "warmth"],
      "Mağara milyonlarca yıl kapalı kaldığından mikroplarının neredeyse tam bir 'yalıtılmışlık' (isolation) içinde evrimleştiği anlatılır.",
    ],
    [
      "Fish living in total darkness gradually ---- their eyes over many generations.",
      ["lost", "sharpened", "enlarged", "coloured", "doubled"],
      "Tamamen karanlıkta yaşayan balıkların pek çok kuşak boyunca gözlerini yavaş yavaş 'kaybettiği' (lost) anlatılır.",
    ],
    [
      "The animal can ---- food for several years by slowing down its body processes.",
      ["do without", "look into", "take after", "make up for", "put away"],
      "Hayvanın vücut süreçlerini yavaşlatarak birkaç yıl yiyeceksiz 'idare edebildiği' (do without) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the cavers reached the bottom, they ---- underground for almost a month.",
      ["had been living", "live", "have lived", "will live", "are living"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been living'.",
    ],
    [
      "If the cave had not been sealed by rock, its walls ---- by water from the surface.",
      ["would have been polluted", "are polluted", "will be polluted", "had been polluted", "pollute"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin edilgen ana yan cümlesi: 'would have been polluted'.",
    ],
    [
      "The fish ---- alive for the first time in 2009, when a robot submarine filmed it.",
      ["was observed", "observed", "has observed", "observes", "is observing"],
      "Balık gözlemleyen değil gözlemlenendir; edilgen geçmiş zaman: 'was observed'.",
    ],
    [
      "---- they live in complete darkness, the fish still have a working body clock.",
      ["Although", "Because", "Unless", "So that", "In case"],
      "Balıkların tam karanlıkta yaşaması ile çalışan bir biyolojik saate sahip olması zıtlık bildirir: 'Although'.",
    ],
    [
      "The biologist ---- studied the cave microbes found that some resist modern antibiotics.",
      ["who", "whose", "which", "whom", "where"],
      "Kişiye gönderme yapan özne konumundaki ilgi zamiri: 'who'.",
    ],
    [
      "Not until 2017 ---- any cave known to extend more than two thousand two hundred metres below its entrance.",
      ["was there", "there was", "were there", "had there", "did there"],
      "'Not until' ile başlayan cümlede devrik yapı: 'was there'.",
    ],
    [
      "The lake ---- the animals were found lies at the bottom of the sea.",
      ["in which", "which", "whose", "when", "what"],
      "Hayvanların gölün içinde bulunduğu belirtilir; edat + ilgi zamiri: 'in which'.",
    ],
    [
      "The deeper animals live in the ocean, ---- food reaches them from the surface.",
      ["the less", "the fewer", "less", "the least", "so little"],
      "'The more ..., the less ...' paralel yapısı; sayılamayan 'food' ile: 'the less'.",
    ],
    [
      "The park authorities require that every visitor to the cave ---- a permit.",
      ["obtain", "obtains", "obtained", "to obtain", "obtaining"],
      "'require that' sonrasında yalın fiil (subjunctive) kullanılır: 'obtain'.",
    ],
    [
      "The cave is thought ---- by acid rising from oil deposits deep below the ground.",
      ["to have been formed", "forming", "to form", "was formed", "having form"],
      "Geçmişte gerçekleşmiş edilgen olay için geçmiş edilgen mastar: 'to have been formed'.",
    ],
    [
      "The animal's skin is so pale ---- the blood vessels beneath it can be seen.",
      ["that", "which", "as", "than", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The researchers had the samples ---- to a laboratory for analysis.",
      ["sent", "send", "sending", "to send", "sends"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'sent'.",
    ],
    [
      "Were the pool's water less salty, many more animals ---- in it.",
      ["would survive", "will survive", "have survived", "had survived", "survive"],
      "Devrik ikinci tip koşul cümlesinin ana yan cümlesi: 'would survive'.",
    ],
    [
      "Each of the expedition members ---- carrying more than twenty kilograms of equipment.",
      ["was", "were", "have been", "are being", "be"],
      "'Each of' yapısı tekil fiil gerektirir: 'was'.",
    ],
  ],
  cloze: [
    {
      text:
        "Off the coast of Belize, in Central America, a nearly perfect circle of deep blue water about three hundred metres across stands out against the pale turquoise of the surrounding reef. Known as the Great Blue Hole, it is a sinkhole about a hundred and twenty-five metres deep. It was formed during the last ice age, when sea levels were much lower than today, {1} the area was dry land. At that time, rainwater dissolved the limestone underground to form a cave, {2} eventually the roof of the cave collapsed, leaving a deep circular pit. When the ice sheets melted, sea levels rose by more than a hundred metres, {3} the pit was flooded. The hole became famous after the French explorer Jacques Cousteau visited it in 1971 and declared it one of the best diving sites in the world. Divers who descend into it find huge stalactites hanging from ledges about forty metres below the surface, {4} such formations can grow only in air, so they prove that the cave was once dry. In 2018, a small submarine reached the bottom of the hole for the first time, {5} its crew found that the deepest water contains no oxygen and is covered with a layer of hydrogen sulphide, beneath which lay the remains of animals that had sunk into it.",
      blanks: [
        [
          "(21) ----",
          ["and", "unless", "although", "or", "until"],
          "Bölgenin buzul çağında kara olması ve deniz seviyesinin düşük olması birbirine bağlı olgulardır: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "so that"],
          "Yağmur suyunun mağara oluşturması ve sonunda tavanın çökmesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "until"],
          "Deniz seviyesinin yükselmesi ve çukurun su altında kalması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "until"],
          "Sarkıtların su altında bulunması ve yalnızca havada oluşabilmeleri birbirine eklenen kanıtlardır: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "although", "or", "until"],
          "Denizaltının dibe ulaşması ve mürettebatın oksijensiz suyu bulması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "Octopuses are usually thought of as animals of shallow coastal waters, but some species live at great depths. The deepest-living of all belong to a group known as dumbo octopuses, named after a cartoon elephant because of the pair of fins on their heads, which resemble large ears. Dumbo octopuses swim slowly through the water by flapping these fins, {1} they use their arms, which are connected by a web of skin, to steer. Unlike most octopuses, they have no ink sac, {2} there is little point in producing ink in a place where there is almost no light. They feed on small animals such as worms and crustaceans, {3} they swallow their prey whole rather than tearing it apart. In 2020, scientists reported that a camera lowered into a deep trench in the Indian Ocean had filmed a dumbo octopus at a depth of about seven thousand metres, {4} this is the deepest that any octopus has ever been observed. At that depth, the pressure is about seven hundred times that at the surface. Because they live so deep, dumbo octopuses are rarely seen, {5} much about their lives, including how long they live and how often they breed, remains unknown.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Yüzgeçlerini çırparak yüzmeleri ve kollarını dümen olarak kullanmaları birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["because", "although", "unless", "so that", "or"],
          "Mürekkep keselerinin olmamasının nedeni ışığın neredeyse hiç olmadığı bir yerde mürekkebin işe yaramamasıdır: 'because'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "until"],
          "Küçük hayvanlarla beslenmeleri ve avlarını bütün olarak yutmaları birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "unless", "although", "or", "so that"],
          "Yedi bin metrede görüntülenmesi ve bunun en derin gözlem olması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["so", "although", "unless", "or", "until"],
          "Nadiren görülmelerinin sonucu yaşamlarına dair pek çok şeyin bilinmemesidir: 'so'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the fish's eyes are inside its transparent head, ----.",
      [
        "they can rotate to look upwards or forwards",
        "fish live in water",
        "the head is small",
        "the ocean is deep",
        "they are completely blind and cannot detect any light",
      ],
      "'Although' zıtlık ister: balığın gözleri saydam başının içinde olsa da yukarıya ya da ileriye bakmak için dönebilir.",
    ],
    [
      "If the pool's water were not so salty, ----.",
      [
        "animals that fell into it might be able to escape",
        "salt is found in the sea",
        "the pool lies on the seabed",
        "crabs have shells",
        "it would be much denser than the water of the surrounding ocean",
      ],
      "İkinci tip koşul: havuzun suyu bu kadar tuzlu olmasaydı içine düşen hayvanlar kaçabilirdi.",
    ],
    [
      "----, the cavers had to camp for days in cold, wet passages far below the surface.",
      [
        "Carrying all their food and equipment with them",
        "Because caves are dark",
        "Unless it rained",
        "In spite of being cavers",
        "Since they had already reached the bottom on the first day",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: tüm yiyecek ve donanımlarını yanlarında taşıyan mağaracılar günlerce soğuk, ıslak geçitlerde kamp yapmak zorunda kaldı.",
    ],
    [
      "Because the cave's entrance is kept locked, ----.",
      [
        "only a small number of scientists are allowed to enter it each year",
        "locks are made of metal",
        "the cave is in New Mexico",
        "caves are cold",
        "thousands of tourists visit it every day without any permission",
      ],
      "Neden-sonuç: mağaranın girişi kilitli tutulduğu için her yıl yalnızca az sayıda bilim insanının girmesine izin verilir.",
    ],
    [
      "The divers laid a thin guide line behind them ----.",
      [
        "so that they could find their way back through the dark passages",
        "because lines are cheap",
        "although the water was clear",
        "unless they were lost",
        "since they wanted to make the passages more difficult to follow",
      ],
      "Amaç bildiren yapı: dalgıçlar karanlık geçitlerde geri dönüş yolunu bulabilmek için arkalarında ince bir kılavuz ip bıraktı.",
    ],
    [
      "The deepest known cave lies in the mountains of the western Caucasus, ----.",
      [
        "where several deep shafts have been explored since the 1960s",
        "which are mountains",
        "that the cave",
        "whose shafts",
        "when the first people arrived in Europe",
      ],
      "Yer bildiren ilgi cümlesi: bilinen en derin mağara 1960'lardan beri birkaç derin kuyunun keşfedildiği Batı Kafkasya dağlarındadır.",
    ],
    [
      "Unlike most sinkholes, which form on land and remain dry, ----.",
      [
        "this one now lies beneath the sea and is filled with salt water",
        "most sinkholes are round",
        "land is dry",
        "the sea is blue",
        "this one lies on a high mountain far from any water",
      ],
      "'Unlike' karşıtlık kurar: karada oluşup kuru kalan çoğu obruğun aksine bu obruk artık denizin altındadır ve tuzlu suyla doludur.",
    ],
    [
      "The pools on the seabed form ----.",
      [
        "where salty water seeps up from ancient layers of salt beneath the sediment",
        "although the sea is salty",
        "so that animals can drink",
        "unless the water is warm",
        "because rivers carry fresh water down to the deepest parts of the ocean",
      ],
      "Yer bildiren yapı: deniz tabanındaki havuzlar tortunun altındaki eski tuz katmanlarından tuzlu suyun sızdığı yerlerde oluşur.",
    ],
    [
      "Scarcely had the robot submarine switched on its lights ----.",
      [
        "when the scientists noticed the fish's glowing green eyes",
        "than the robot",
        "that the fish",
        "before the lights",
        "when the fish attacked and destroyed the camera",
      ],
      "'Scarcely ... when' yapısı: robot denizaltı ışıklarını yakar yakmaz bilim insanları balığın parlayan yeşil gözlerini fark etti.",
    ],
    [
      "While the bacteria in the cave had never been exposed to modern medicines, ----.",
      [
        "many of them were resistant to antibiotics",
        "the cave is very old",
        "medicines are expensive",
        "bacteria are small",
        "none of them could survive without large amounts of sunlight",
      ],
      "'While' zıtlık bildirir: mağaradaki bakteriler modern ilaçlarla hiç karşılaşmamış olsa da birçoğu antibiyotiklere dirençliydi.",
    ],
    [
      "The water in the deepest passages is so cold ----.",
      [
        "that divers can stay in it for only a short time",
        "because the water",
        "than the surface",
        "although the divers",
        "so that the cavers enjoyed swimming in it for hours",
      ],
      "'so ... that' sonuç yapısı: en derin geçitlerdeki su o kadar soğuktur ki dalgıçlar içinde yalnızca kısa süre kalabilir.",
    ],
  ],
  enTr: [
    [
      "The fish's tubular eyes are extremely sensitive to the faint light of other animals.",
      [
        "Balığın tüp biçimli gözleri diğer hayvanların soluk ışığına son derece duyarlıdır.",
        "Balığın gözleri güneş ışığına karşı tamamen duyarsızdır.",
        "Diğer hayvanlar balığın gözlerinden ışık alır.",
        "Balığın hiç gözü yoktur.",
        "Balığın tüp biçimli gözleri yalnızca renkleri ayırt edebilir ve ışığı hiç algılamaz.",
      ],
      "'The fish's tubular eyes' 'balığın tüp biçimli gözleri', 'are extremely sensitive to the faint light of other animals' 'diğer hayvanların soluk ışığına son derece duyarlıdır' karşılığıdır.",
    ],
    [
      "Mussels near the edge of the pool feed on bacteria that live inside their gills.",
      [
        "Havuzun kenarındaki midyeler solungaçlarının içinde yaşayan bakterilerle beslenir.",
        "Havuzun ortasındaki midyeler bakterileri öldürür.",
        "Bakteriler midyelerin kabuklarıyla beslenir.",
        "Havuzda hiç midye yoktur.",
        "Havuzun kenarındaki midyeler yalnızca yüzeyden düşen bitkilerle beslenir.",
      ],
      "'Mussels near the edge of the pool' 'havuzun kenarındaki midyeler', 'feed on bacteria that live inside their gills' 'solungaçlarının içinde yaşayan bakterilerle beslenir' karşılığıdır.",
    ],
    [
      "The expedition took several weeks to reach the bottom of the cave and return.",
      [
        "Keşif ekibinin mağaranın dibine ulaşıp geri dönmesi birkaç hafta sürdü.",
        "Keşif ekibi mağaranın dibine birkaç saatte ulaştı.",
        "Mağara keşif ekibini birkaç hafta bekledi.",
        "Hiç keşif yapılmadı.",
        "Keşif ekibi mağaranın girişine bile ulaşamadan geri döndü.",
      ],
      "'The expedition took several weeks' 'keşif ekibinin ... birkaç hafta sürdü', 'to reach the bottom of the cave and return' 'mağaranın dibine ulaşıp geri dönmesi' karşılığıdır.",
    ],
    [
      "The cave's formations include some of the largest gypsum crystals ever found.",
      [
        "Mağaranın oluşumları şimdiye kadar bulunmuş en büyük alçıtaşı kristallerinden bazılarını içerir.",
        "Mağarada hiç kristal bulunmamıştır.",
        "Alçıtaşı kristalleri mağarayı oluşturmuştur.",
        "Mağarada yalnızca küçük taşlar vardır.",
        "Mağaranın oluşumları tamamen buzdan yapılmıştır ve her yaz erir.",
      ],
      "'The cave's formations include' 'mağaranın oluşumları içerir', 'some of the largest gypsum crystals ever found' 'şimdiye kadar bulunmuş en büyük alçıtaşı kristallerinden bazılarını' karşılığıdır.",
    ],
    [
      "The divers spent almost ten hours underwater before they found the connecting passage.",
      [
        "Dalgıçlar bağlantı geçidini bulmadan önce yaklaşık on saat su altında kaldı.",
        "Dalgıçlar bağlantı geçidini on dakikada buldu.",
        "Bağlantı geçidi dalgıçları on saat bekledi.",
        "Hiç dalgıç yoktu.",
        "Dalgıçlar geçidi bulamadılar ve hemen yüzeye döndüler, bir daha da hiç dalmadılar.",
      ],
      "'The divers spent almost ten hours underwater' 'dalgıçlar yaklaşık on saat su altında kaldı', 'before they found the connecting passage' 'bağlantı geçidini bulmadan önce' karşılığıdır.",
    ],
    [
      "Water flooded the lower passages and trapped the cavers for several days.",
      [
        "Su alt geçitleri doldurdu ve mağaracıları birkaç gün mahsur bıraktı.",
        "Mağaracılar alt geçitleri suyla doldurdu.",
        "Su birkaç gün boyunca mağaracıları geçitlerden çıkardı.",
        "Geçitlerde hiç su yoktu.",
        "Su üst geçitleri doldurdu, ancak mağaracılar hemen yüzeye çıktı.",
      ],
      "'Water flooded the lower passages' 'su alt geçitleri doldurdu', 'and trapped the cavers for several days' 've mağaracıları birkaç gün mahsur bıraktı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Balık 600 ile 800 metre derinlikte yaşar.",
      [
        "The fish lives at depths of between 600 and 800 metres.",
        "The fish lives near the surface of rivers.",
        "Depths of 800 metres live in the fish.",
        "The fish does not exist.",
        "The fish lives at depths of between 6 and 8 metres in lakes.",
      ],
      "'Balık yaşar' 'the fish lives', '600 ile 800 metre derinlikte' 'at depths of between 600 and 800 metres' karşılığıdır.",
    ],
    [
      "Havuz çevresindeki sudan çok daha yoğundur.",
      [
        "The pool is much denser than the surrounding water.",
        "The pool is much lighter than the surrounding air.",
        "The surrounding water is inside the pool.",
        "There is no pool.",
        "The pool is exactly the same as the surrounding water.",
      ],
      "'Havuz çok daha yoğundur' 'the pool is much denser', 'çevresindeki sudan' 'than the surrounding water' karşılığıdır.",
    ],
    [
      "Mağaracılar 2.212 metre derinliğe ulaştı.",
      [
        "The cavers reached a depth of 2,212 metres.",
        "The cavers climbed a mountain 2,212 metres high.",
        "A depth of 2,212 metres reached the cavers.",
        "There were no cavers.",
        "The cavers reached a depth of only 22 metres.",
      ],
      "'Mağaracılar ulaştı' 'the cavers reached', '2.212 metre derinliğe' 'a depth of 2,212 metres' karşılığıdır.",
    ],
    [
      "Mağara 1986'da keşfedildi.",
      [
        "The cave was discovered in 1986.",
        "The cave was closed in 1986.",
        "1986 discovered the cave.",
        "There was no cave.",
        "The cave was discovered in 1886 by farmers.",
      ],
      "'Mağara keşfedildi' 'the cave was discovered', '1986'da' 'in 1986' karşılığıdır.",
    ],
    [
      "Mağaralar tatlı ve tuzlu su katmanları içerir.",
      [
        "The caves contain layers of fresh and salt water.",
        "The caves contain no water at all.",
        "Layers of water contain the caves.",
        "There are no caves.",
        "The caves contain only hot water from volcanoes.",
      ],
      "'Mağaralar içerir' 'the caves contain', 'tatlı ve tuzlu su katmanları' 'layers of fresh and salt water' karşılığıdır.",
    ],
    [
      "Bilim insanları balığı canlı olarak inceleyemedi.",
      [
        "The scientists were unable to study the fish alive.",
        "The scientists studied the fish alive for many years.",
        "The fish studied the scientists.",
        "There were no scientists.",
        "The scientists caught thousands of the fish in nets.",
      ],
      "'Bilim insanları inceleyemedi' 'the scientists were unable to study', 'balığı canlı olarak' 'the fish alive' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "For decades, biologists who studied the barreleye, a small fish that lives at depths of between six hundred and eight hundred metres in the Pacific Ocean, were puzzled by its eyes. The fish has two large, tubular eyes, which are extremely sensitive to the dim glow given off by neighbouring creatures, but in specimens brought up in nets they appeared to point only straight upwards. Since the fish's mouth is at the front of its head, it was hard to see how it could watch its prey while eating. The mystery was solved in 2009, when researchers at an oceanographic institute in California filmed a living barreleye with a camera on a remotely operated submarine. The footage revealed that the top of the fish's head is covered by a transparent, fluid-filled shield, like the canopy of a fighter aircraft, through which the eyes can be clearly seen. The structure had always been destroyed when the fish were hauled to the surface, which is why nobody had noticed it before. The researchers also discovered that the eyes are not fixed. While the fish hangs almost motionless in the water, its eyes point upwards, looking for the silhouettes of small animals against the dim light from above. When it spots a target, it can rotate its eyes forwards while it turns its body and moves in to feed. The scientists suggested that the shield might protect the eyes from the stinging cells of jellyfish-like animals, from which the barreleye may steal food. The two green spheres in the eyes are lenses, which may help to filter out the sunlight coming from above, so that the fish can detect the light of other animals more easily.",
      questions: [
        [
          "According to the passage, the transparent shield had not been noticed before 2009 because ----.",
          [
            "it was always destroyed when the fish were brought to the surface",
            "the fish had never been caught before",
            "it is visible only in sunlight",
            "it grows only on adult fish",
            "scientists had never looked at the fish's head",
          ],
          "Saydam kalkan balıklar yüzeye çekildiğinde her zaman parçalandığı için daha önce kimse fark etmemişti.",
        ],
        [
          "The passage states that the barreleye's eyes ----.",
          [
            "can rotate forwards when the fish moves to feed",
            "are permanently fixed facing downwards",
            "cannot detect any light at all",
            "are located outside its head",
            "produce a bright light to attract prey",
          ],
          "Gözler sabit değildir; balık bir hedef görünce gözlerini ileriye doğru döndürebilir.",
        ],
        [
          "It can be inferred from the passage that the remotely operated submarine was important because ----.",
          [
            "it allowed the fish to be observed alive in its natural environment",
            "it caught more fish than nets could",
            "it brought the fish safely to the surface",
            "it destroyed the fish's shield",
            "it produced light similar to that of the fish",
          ],
          "Uzaktan kumandalı denizaltı canlı balığı doğal ortamında görüntüleyerek ağlarla çıkarılan örneklerin gösteremediğini ortaya koydu.",
        ],
      ],
    },
    {
      text:
        "In a few places on the floor of the ocean, there are lakes. They form where water seeps up from ancient layers of salt buried beneath the sediment, dissolving the salt on its way, so that it becomes several times saltier than ordinary sea water. Because this brine is much denser than the surrounding water, it does not mix with it but collects in hollows in the seabed, forming pools with clearly defined shores, and sometimes even small waves when disturbed. One such pool in the Gulf of Mexico, about a thousand metres deep, is only a few metres across, but others in the Mediterranean and the Red Sea cover several square kilometres. The brine contains almost no oxygen, and it is often rich in methane and hydrogen sulphide, which are poisonous to most animals. Fish, crabs and other creatures that stray into it are often killed almost immediately, and their bodies may be preserved for a long time because there are few organisms to break them down. Researchers who explored the pool in the Gulf of Mexico with a submarine in 2015 nicknamed it the 'Jacuzzi of despair'. Yet the pools are not lifeless. Their shores are often lined with dense beds of mussels, which feed on bacteria that live inside their gills and that obtain energy from the methane seeping from the pool. Shrimps, worms and fish gather around the mussels, and the brine itself contains microbes adapted to its extreme conditions. Scientists are interested in the pools partly because the conditions in them may resemble those on early Earth, or in the salty water that may exist beneath the surface of some other worlds in the solar system, which could help them to understand how life might survive there.",
      questions: [
        [
          "According to the passage, the brine collects in pools because ----.",
          [
            "it is much denser than the surrounding sea water",
            "it is warmer than the surrounding water",
            "it is held in place by mussels",
            "it is pumped there by bacteria",
            "it contains a large amount of oxygen",
          ],
          "Tuzlu su çevresindeki deniz suyundan çok daha yoğun olduğundan onunla karışmaz ve deniz tabanındaki çukurlarda toplanır.",
        ],
        [
          "The passage states that the bodies of animals killed in the brine ----.",
          [
            "may be preserved for a long time because few organisms break them down",
            "are immediately eaten by mussels",
            "float to the surface of the ocean",
            "dissolve completely within minutes",
            "are carried away by strong currents",
          ],
          "Onları parçalayacak organizma az olduğundan bedenleri uzun süre korunabilir.",
        ],
        [
          "It can be inferred from the passage that the mussels can live beside the pools because ----.",
          [
            "they rely on bacteria that use the energy of the methane",
            "they are protected from the brine by thick shells",
            "they feed on the animals killed by the brine",
            "they need very little food",
            "the water near the shore contains no salt",
          ],
          "Midyeler sızan metandan enerji elde eden ve solungaçlarında yaşayan bakterilerle beslenir.",
        ],
      ],
    },
    {
      text:
        "In the Arabika Massif, a limestone mountain range in the western Caucasus, near the coast of the Black Sea, lie the deepest known caves on Earth. Water seeping through cracks in the limestone over millions of years has dissolved the rock to form enormous systems of vertical shafts and passages. Cavers have explored the area since the 1960s, and for many years the record was held by a cave known as Krubera, or Voronya, which in 2012 became the first known cave deeper than two kilometres. In 2017, however, a team exploring a nearby cave called Veryovkina reached an even greater depth, and the following year they reached a point 2,212 metres below the entrance. Exploring such caves is extremely demanding. The expeditions, usually made up of several dozen people, last several weeks, and the cavers must descend hundreds of metres of vertical shafts on ropes, squeeze through narrow cracks and swim through cold water, carrying all their food, equipment and supplies with them. They set up underground camps, where they sleep in tents in temperatures of only a few degrees above freezing. At the bottom of both caves, the passages end in flooded tunnels called sumps, and divers have pushed further through them. The caves can also be dangerous. In 2018, a sudden flood surged through the lower passages of Veryovkina, forcing the expedition to escape upwards as fast as possible; the water rose more than a hundred metres in a few hours, and some equipment was lost. By studying dye placed in the water underground, researchers have shown that water from the caves eventually emerges from springs near the coast and even on the seabed.",
      questions: [
        [
          "According to the passage, the caves of the Arabika Massif were formed by ----.",
          [
            "water dissolving the limestone over millions of years",
            "volcanic activity beneath the mountains",
            "miners digging for metals",
            "earthquakes splitting the rock apart",
            "glaciers carving out the valleys",
          ],
          "Kireçtaşındaki çatlaklardan sızan su milyonlarca yıl boyunca kayayı çözerek dikey kuyular ve geçitler oluşturdu.",
        ],
        [
          "The passage states that, during the flood of 2018, ----.",
          [
            "the water rose more than a hundred metres in a few hours",
            "the cavers were trapped for several months",
            "the cave collapsed completely",
            "the expedition reached a new record depth",
            "the water drained away to the sea immediately",
          ],
          "Ani sel alt geçitlerde birkaç saat içinde yüz metreden fazla yükseldi ve ekip yukarı kaçmak zorunda kaldı.",
        ],
        [
          "It can be inferred from the passage that the experiments with dye showed that ----.",
          [
            "the water in the caves is connected to springs on the coast and seabed",
            "the caves contain no water at all",
            "the deepest point of the cave is above sea level",
            "the two caves are not connected to the sea",
            "the water in the caves is poisonous",
          ],
          "Yeraltında suya bırakılan boya kıyıdaki ve deniz tabanındaki kaynaklardan çıktı; bu da bağlantıyı gösterir.",
        ],
      ],
    },
    {
      text:
        "Lechuguilla Cave, in the US state of New Mexico, is one of the longest and most beautiful caves in the world. For a long time, only a small pit near its entrance was known, and it was mined for bat droppings, which were used as fertiliser. In 1986, however, cavers who had felt air blowing through the rubble at the bottom of the pit dug through it and discovered an enormous network of passages beyond. More than two hundred and twenty kilometres of passages have since been mapped. Unlike most caves, which are formed by rainwater that becomes slightly acidic as it seeps through the soil, Lechuguilla is thought to have been formed by sulphuric acid, produced when gases rising from oil deposits deep below reacted with oxygen in groundwater. The process created spectacular formations, including some of the largest gypsum crystals ever found, as well as delicate structures that are rarely seen elsewhere. To protect these formations and the cave's pristine environment, access is strictly controlled. The entrance is kept locked, and only a small number of scientists, surveyors and specialists are allowed to enter each year. Visitors must follow strict rules, such as staying on marked routes and carrying out all their waste. The cave has attracted particular interest from microbiologists. Because no surface water entered it for millions of years, its microbes evolved in almost complete isolation. Surprisingly, researchers found that many of the bacteria were resistant to a wide range of antibiotics, including some developed only recently, even though they had never been exposed to them. The discovery suggests that resistance to antibiotics is an ancient feature of bacteria, which naturally compete with one another by producing such chemicals.",
      questions: [
        [
          "According to the passage, the main part of the cave was discovered when ----.",
          [
            "cavers dug through rubble after feeling air blowing through it",
            "miners broke into it while collecting bat droppings",
            "an earthquake opened a new entrance",
            "oil workers drilled into it",
            "rainwater washed away the entrance",
          ],
          "1986'da çukurun dibindeki molozdan hava geldiğini hisseden mağaracılar kazarak geniş bir geçit ağı buldu.",
        ],
        [
          "The passage states that Lechuguilla differs from most caves in that it ----.",
          [
            "is thought to have been formed by sulphuric acid",
            "was formed by ordinary rainwater",
            "contains no crystals",
            "is open to large numbers of tourists",
            "lies beneath the sea",
          ],
          "Çoğu mağara hafif asitli yağmur suyuyla oluşurken Lechuguilla'nın sülfürik asitle oluştuğu düşünülür.",
        ],
        [
          "It can be inferred from the passage that the cave bacteria were resistant to antibiotics because ----.",
          [
            "bacteria have long competed with one another using similar chemicals",
            "they had been exposed to modern medicines",
            "scientists had accidentally carried medicines into the cave",
            "the gypsum crystals contain antibiotics",
            "they had been brought into the cave by tourists",
          ],
          "Direnç bakterilerin birbirleriyle bu tür kimyasallar üreterek rekabet etmesinden kaynaklanan eski bir özelliktir.",
        ],
      ],
    },
    {
      text:
        "Beneath the flat limestone country near Mexico's Caribbean coast lies a vast maze of flooded caves. They took shape during glacial periods: with the ocean far below its present height, rainwater dissolved passages in the rock; when the ice melted, rising seas filled them with water. Today they contain layers of fresh water floating on top of denser salt water that has seeped in from the sea. Divers have explored the caves since the 1980s, often spending many hours underwater in narrow, completely dark passages, where a single mistake can be fatal. In 2018, a team of divers announced that they had found a connection between two large cave systems, which together form the longest known underwater cave in the world, with more than three hundred and forty kilometres of mapped passages. The caves are important not only to explorers but also to archaeologists. In 2007, divers exploring a deep pit inside one of the caves, which they called Hoyo Negro, meaning 'black hole', found the skeleton of a teenage girl lying on a ledge about forty metres below the present water level, along with the bones of extinct animals such as giant ground sloths and sabre-toothed cats. Dating of her bones and teeth showed that she had lived about thirteen thousand years ago, when the cave was dry, and that she had probably fallen into the pit while searching for water. Few skeletons of comparable age and completeness have been recovered anywhere in the Americas, and her DNA has helped scientists to understand the origins of the first Americans. The caves are now threatened by pollution from the rapidly growing tourist resorts on the coast, since waste water can seep easily through the porous limestone, and by the construction of a new railway across the region.",
      questions: [
        [
          "According to the passage, the caves of the Yucatán Peninsula became flooded when ----.",
          [
            "sea levels rose after the ice ages ended",
            "rivers changed their course",
            "divers pumped water into them",
            "a new railway was built across the region",
            "earthquakes opened cracks in the seabed",
          ],
          "Mağaralar buzul çağlarında oluştu; buzlar eriyince yükselen deniz onları suyla doldurdu.",
        ],
        [
          "The passage states that the skeleton found in Hoyo Negro ----.",
          [
            "belonged to a girl who probably fell into the pit while searching for water",
            "was carried into the cave by divers in the 1980s",
            "belonged to a Maya priest buried as an offering",
            "had been eaten by sabre-toothed cats",
            "was found floating in the salt water",
          ],
          "Kemikleri on üç bin yıllık olan kız muhtemelen su ararken çukura düşmüştü.",
        ],
        [
          "It can be inferred from the passage that the growth of tourist resorts threatens the caves because ----.",
          [
            "polluted water can easily pass through the porous rock into them",
            "tourists are allowed to dive in the deepest passages",
            "the resorts pump all the fresh water out of the caves",
            "the resorts are built directly inside the caves",
            "tourists remove the skeletons as souvenirs",
          ],
          "Atık su gözenekli kireçtaşından kolayca sızabildiği için kıyıdaki tatil yerleri mağaraları kirletme tehlikesi yaratır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In some parts of the ocean floor, methane and other chemicals slowly leak from the sediment. ---- These communities can include tube worms that live for more than two hundred years.",
      [
        "Bacteria use the chemicals as a source of energy, supporting communities of animals that live without sunlight.",
        "Methane is a gas.",
        "The ocean is very deep.",
        "Some of these places were discovered entirely by accident during surveys carried out by companies searching for new reserves of oil and gas.",
        "Worms have long bodies.",
      ],
      "Boşluk 'These communities' ifadesinin gönderme yapacağı toplulukları tanıtan bir cümle gerektirir; boşluğa bakterilerin kimyasalları enerji kaynağı olarak kullanıp güneş ışığı olmadan yaşayan hayvan topluluklarını desteklediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Stalagmites grow very slowly as water drips onto the floor of a cave and leaves behind tiny amounts of minerals. ---- By analysing these layers, scientists can reconstruct changes in rainfall and temperature over hundreds of thousands of years.",
      [
        "Over time, they build up layers, rather like the rings of a tree, which record the conditions at the time they formed.",
        "Caves are dark.",
        "Water drips from the ceiling.",
        "Visitors to caves are often asked not to touch the formations, as oil from the skin can stop them from growing.",
        "Minerals are found in rocks.",
      ],
      "Boşluk 'these layers' ifadesinin gönderme yapacağı katmanları tanıtan bir cümle gerektirir; boşluğa sarkıtların zamanla ağaç halkaları gibi oluştukları dönemin koşullarını kaydeden katmanlar biriktirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Sea pigs are small, pink animals related to sea cucumbers that live on the deep ocean floor. ---- They often gather in large groups, all facing the same direction, perhaps so that they can detect the smell of food carried by the current.",
      [
        "They walk across the mud on rows of tube-like legs, feeding on the remains of dead plants and animals that sink from above.",
        "Pigs are farm animals.",
        "The ocean floor is muddy.",
        "Young crabs of one species are sometimes found riding on their backs or hiding beneath them, although biologists are still not certain why they do this.",
        "Cucumbers are vegetables.",
      ],
      "Boşluk hayvanların nasıl yaşayıp beslendiğini açıklayıp gruplar halinde toplanmalarına bağlanan bir cümle gerektirir; boşluğa tüp benzeri bacaklarla çamurda yürüyüp yukarıdan batan kalıntılarla beslendiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "The deepest parts of the ocean, known as the hadal zone, lie in narrow trenches more than six kilometres below the surface. ---- Even so, scientists have found shrimp-like animals there in enormous numbers.",
      [
        "The pressure is crushing, the water is close to freezing and food is extremely scarce.",
        "Trenches are long and narrow.",
        "Shrimps are eaten by many people.",
        "Most of these trenches lie around the edges of the Pacific Ocean, where one of the great plates of the Earth's crust slides slowly beneath another.",
        "The ocean covers most of the planet.",
      ],
      "Boşluk 'Even so' ile hayvanların varlığına zıtlık kuracak zorlu koşulları tanıtan bir cümle gerektirir; boşluğa basıncın ezici, suyun donmaya yakın ve yiyeceğin çok kıt olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "When lava flows from a volcano, its outer surface often cools and hardens while the molten rock inside continues to flow. ---- Some of these tunnels are many kilometres long and large enough to drive a bus through.",
      [
        "When the eruption ends, the liquid rock may drain away, leaving behind a hollow tube.",
        "Volcanoes are found on every continent.",
        "Lava is very hot.",
        "Scientists believe that similar structures may exist on the Moon and Mars, where they could shelter future astronauts.",
        "Buses carry passengers.",
      ],
      "Boşluk 'these tunnels' ifadesinin gönderme yapacağı tünellerin nasıl oluştuğunu açıklayan bir cümle gerektirir; boşluğa püskürme bitince sıvı kayanın akıp boş bir tüp bıraktığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1981, a British expedition exploring the caves of Gunung Mulu National Park in Sarawak, on the island of Borneo, entered a chamber so large that their lamps could not reach its walls. ---- It is often said that it could hold about forty jumbo jets.",
      [
        "Known as the Sarawak Chamber, it is about seven hundred metres long and more than four hundred metres wide, making it one of the largest underground chambers in the world.",
        "Borneo is a large island.",
        "Lamps produce light.",
        "The national park is also famous for the millions of bats that pour out of one of its caves every evening in long, twisting columns to hunt insects over the forest.",
        "Aircraft are large.",
      ],
      "Boşluk 'it' zamirinin gönderme yapacağı odayı ve büyüklüğünü tanıtan bir cümle gerektirir; boşluğa Sarawak Odası'nın yedi yüz metre uzunluğunda ve dört yüz metreden geniş olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Many deep-sea animals produce their own light.",
        "They use it to attract prey, to find mates or to confuse predators.",
        "Some even use it to hide their silhouettes against the faint light from above.",
        "Fireflies produce light on summer evenings.",
        "Scientists estimate that most animals in the deep ocean can glow.",
      ],
      odd: 3,
      why: "Parça derin deniz hayvanlarının kendi ışıklarını üretmesini anlatır. Ateşböceklerinin yaz akşamları ışık ürettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cave diving is one of the most dangerous forms of exploration.",
        "Divers cannot swim straight to the surface in an emergency.",
        "Visibility can drop to zero if mud on the floor is disturbed.",
        "Divers therefore lay guide lines to help them find their way back.",
        "Scuba diving was developed in the 1940s.",
      ],
      odd: 4,
      why: "Parça mağara dalışının tehlikelerini ve alınan önlemleri anlatır. Tüplü dalışın 1940'larda geliştirildiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Animals that live permanently in caves share several features.",
        "Eyes and pigment have disappeared in many of them.",
        "Bats sleep in caves during the day.",
        "They often have long legs or antennae for sensing their surroundings.",
        "Most of them also grow and reproduce very slowly.",
      ],
      odd: 2,
      why: "Parça mağaralarda kalıcı olarak yaşayan hayvanların ortak özelliklerini anlatır. Yarasaların gündüz mağaralarda uyuduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Studying the deep sea is extremely difficult.",
        "Vehicles must withstand enormous pressure and cold.",
        "Animals brought to the surface are often damaged or killed.",
        "Fishing boats often return to port at dawn.",
        "As a result, remotely operated cameras have become essential tools.",
      ],
      odd: 3,
      why: "Parça derin denizi incelemenin güçlüklerini anlatır. Balıkçı teknelerinin genellikle şafakta limana döndüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Most caves are formed in limestone.",
        "Rainwater absorbs carbon dioxide and becomes slightly acidic.",
        "As it seeps through cracks, it slowly dissolves the rock.",
        "Over thousands of years, small cracks grow into passages and chambers.",
        "Limestone is also used to make cement.",
      ],
      odd: 4,
      why: "Parça mağaraların kireçtaşında nasıl oluştuğunu anlatır. Kireçtaşının çimento yapımında da kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Food is scarce in the deep ocean.",
        "Much of it arrives as a slow fall of particles from the surface.",
        "Fish markets sell many kinds of seafood.",
        "Many animals therefore grow slowly and use energy sparingly.",
        "Some can go for months without eating.",
      ],
      odd: 2,
      why: "Parça derin okyanusta yiyeceğin kıtlığını ve hayvanların buna uyumunu anlatır. Balık pazarlarının pek çok deniz ürünü sattığını söyleyen III. cümle konu dışıdır.",
    },
  ],
};
