import type { YokdilDeneme } from "./types";

export const FEN_13: YokdilDeneme = {
  no: 13,
  field: "fen",
  vocab: [
    [
      "The toads were introduced to Australia in 1935 in the hope that they would ---- beetles that were damaging sugar cane crops.",
      ["control", "feed", "attract", "protect", "breed"],
      "Kurbağaların şeker kamışına zarar veren böcekleri 'kontrol altına alacağı' (control) umuduyla Avustralya'ya getirildiği anlatılır.",
    ],
    [
      "Zebra mussels attach themselves to hard surfaces and can ---- water pipes so badly that power stations have to shut down.",
      ["block", "clean", "heat", "paint", "measure"],
      "Zebra midyelerinin su borularını o kadar kötü 'tıkayabildiği' (block) ve santrallerin kapanmak zorunda kaldığı anlatılır.",
    ],
    [
      "Native fish in the Atlantic do not recognise the lionfish as a ----, so they make no attempt to escape from it.",
      ["threat", "friend", "partner", "relative", "meal"],
      "Atlantik'teki yerli balıkların aslan balığını bir 'tehdit' (threat) olarak tanımadığı ve kaçmaya çalışmadığı anlatılır.",
    ],
    [
      "If a planarian is cut into several pieces, each piece can ---- into a complete new worm.",
      ["develop", "shrink", "dissolve", "freeze", "collapse"],
      "Planaryanın birkaç parçaya kesilmesi durumunda her parçanın tam bir yeni solucana 'dönüşebileceği/gelişebileceği' (develop into) anlatılır.",
    ],
    [
      "Elephants can communicate over long distances using sounds that are too low for humans to ----.",
      ["detect", "produce", "imagine", "describe", "repeat"],
      "Fillerin insanların 'algılayamayacağı' (detect) kadar alçak seslerle uzun mesafelerde iletişim kurabildiği anlatılır.",
    ],
    [
      "When Paine removed the sea stars from the rocks, the mussels began to ---- the space previously used by other species.",
      ["take over", "give up", "look into", "put off", "turn down"],
      "Paine deniz yıldızlarını kayalardan uzaklaştırınca midyelerin daha önce diğer türlerin kullandığı alanı 'ele geçirmeye' (take over) başladığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "About a hundred cane toads ---- from Hawaii to Queensland in 1935.",
      ["were brought", "brought", "have brought", "were bringing", "had brought"],
      "Kurbağalar getirilen canlılardır ve olay geçmişte olmuştur: edilgen geçmiş zaman 'were brought'.",
    ],
    [
      "If ships had cleaned their ballast water more carefully, zebra mussels ---- the Great Lakes.",
      ["might never have reached", "might never reach", "will never reach", "never reached", "had never reached"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time scientists realised the scale of the problem, lionfish ---- along much of the eastern coast of the United States.",
      ["had already spread", "have already spread", "already spread", "will already spread", "were already spread"],
      "Bilim insanlarının sorunun boyutunu fark etmesinden (geçmiş) önce tamamlanmış eylem: Past Perfect 'had already spread'.",
    ],
    [
      "Paine, ---- experiments on the Washington coast became famous, introduced the idea of a keystone species.",
      ["whose", "who", "which", "whom", "where"],
      "Deneyler Paine'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the toads had spread across northern Australia ---- the damage they caused to native animals.",
      ["did scientists recognise", "scientists recognised", "recognised scientists", "scientists did recognise", "did recognise scientists"],
      "'Only after' ile başlayan cümlede ana cümle devrik olur: 'did scientists recognise'.",
    ],
    [
      "Planarians are so good at regenerating ---- they have been called 'immortal under the edge of a knife'.",
      ["that", "which", "as", "such", "than"],
      "'so good … that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- the lionfish is beautiful, it is a serious threat to coral reef ecosystems in the Atlantic.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Aslan balığının güzel olması ile ciddi bir tehdit oluşturması zıttır: 'Although'.",
    ],
    [
      "Predators ---- try to eat the toads often die from their poison.",
      ["that", "whose", "where", "what", "whom"],
      "Boşluk 'predators' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
    ],
    [
      "Birds are thought ---- the Earth's magnetic field to find their way during migration.",
      ["to use", "using", "used", "to be used", "to have been used"],
      "Kuşlar yön bulmak için manyetik alanı kullanan taraftır (etken) ve genel bir durum anlatılır: 'be thought to + yalın fiil'.",
    ],
    [
      "Elephants feel the vibrations through their feet ---- trunks.",
      ["and", "but", "or else", "unless", "so that"],
      "Titreşimlerin hem ayaklarla hem de hortumla algılandığı anlatılır: 'and'.",
    ],
    [
      "Pipes ---- by zebra mussels must be cleaned at great expense.",
      ["blocked", "blocking", "which block", "to block", "have blocked"],
      "Borular tıkanan nesnelerdir; edilgen anlamlı geçmiş ortaç 'blocked' gerekir.",
    ],
    [
      "Divers are encouraged to catch lionfish ---- their numbers can be kept under control.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The elephants stopped and lifted their feet as if they ---- listening to something.",
      ["were", "are", "will be", "have", "be"],
      "'as if' ile gerçek dışı ya da belirsiz bir durum anlatılır: 'were'.",
    ],
    [
      "The more species there are in an ecosystem, ---- it tends to be.",
      ["the more stable", "more stable", "the most stable", "stabler more", "the stablest"],
      "'The more …, the more stable …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early twentieth century, sugar cane farmers in Queensland, Australia, were losing a large part of their crops to beetles whose larvae fed on the roots of the plants. In 1935, about a hundred cane toads were brought from Hawaii, {1} they had apparently been used successfully against similar pests. The toads were released into the fields, {2} the plan failed almost immediately. The beetles lived high on the cane stalks, out of reach of the toads, and the toads preferred to eat other insects. Worse, the toads bred rapidly, {3} each female can lay tens of thousands of eggs at a time, and they had few natural enemies in Australia. They also produce a powerful poison in glands on their shoulders. Native predators such as snakes, lizards and quolls, {4} had never encountered the toads before, often die after attacking them. Today, there are estimated to be hundreds of millions of cane toads in Australia, and they continue to spread westwards. Scientists are testing several methods of control, including teaching predators to avoid toads by giving them small, harmless pieces of toad meat {5} make them feel sick.",
      blanks: [
        [
          "(21) ----",
          ["where", "which", "who", "whose", "when"],
          "Boşluk 'Hawaii' yerini niteleyen ilgi zarfıdır: 'where'.",
        ],
        [
          "(22) ----",
          ["but", "because", "so", "unless", "since"],
          "Kurbağaların tarlalara salınması ile planın hemen başarısız olması karşıtlıktır: 'but'.",
        ],
        [
          "(23) ----",
          ["since", "although", "unless", "so that", "whereas"],
          "Hızlı üremenin nedeni dişilerin bir seferde on binlerce yumurta bırakabilmesidir: 'since'.",
        ],
        [
          "(24) ----",
          ["which", "whose", "where", "what", "when"],
          "Boşluk virgülle ayrılan 'native predators' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["that", "who", "where", "whose", "what"],
          "Boşluk 'pieces of toad meat' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
      ],
    },
    {
      text:
        "Zebra mussels are small freshwater shellfish native to lakes and rivers in southern Russia and Ukraine. In the late 1980s, they were discovered in the Great Lakes of North America, {1} they are thought to have arrived in the ballast water of ships from Europe. Ships take on water to keep themselves stable and release it when they reach port, {2} this water often contains living organisms from distant places. Once established, zebra mussels spread quickly. They attach themselves to rocks, boats and pipes in enormous numbers, {3} up to several hundred thousand per square metre. They have blocked the water intake pipes of power stations and water treatment plants, costing billions of dollars to clean. They have also changed the ecosystem of the lakes. Each mussel filters large amounts of water, removing the tiny plants and animals {4} form the base of the food chain. As a result, the water has become clearer, {5} allows sunlight to reach greater depths and has encouraged the growth of plants on the lake bottom, but it has reduced the food available for native fish.",
      blanks: [
        [
          "(26) ----",
          ["where", "which", "who", "whose", "what"],
          "Boşluk 'the Great Lakes' yerini niteleyen ilgi zarfıdır: 'where'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Gemilerin suyu limanda boşaltması ve bu suyun uzak yerlerden canlılar içermesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["sometimes", "hardly", "never", "rarely", "seldom"],
          "Midyelerin metrekare başına 'bazen' yüz binlerce sayıya ulaştığı anlatılır: 'sometimes'.",
        ],
        [
          "(29) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'the tiny plants and animals' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(30) ----",
          ["which", "who", "that", "what", "where"],
          "Boşluk virgülden sonra önceki cümleyi (suyun berraklaşmasını) niteler: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although lionfish are popular in home aquariums, ----.",
      [
        "they cause harm in the wild",
        "they are native to the Indian and Pacific Oceans",
        "they have long spines that contain venom",
        "they can eat fish more than half their own size",
        "they are often found near coral reefs",
      ],
      "'Although' zıtlık ister: aslan balıkları akvaryumlarda popüler olsa da Atlantik'te doğada ciddi bir sorun hâline geldi.",
    ],
    [
      "If humans could regenerate like planarians, ----.",
      [
        "lost limbs might be able to grow back",
        "the worms had been cut into pieces",
        "most scientists will study them",
        "planarians lived in fresh water",
        "stem cells are found in the body",
      ],
      "Type 2 koşul cümlesi ana cümlede 'might + yalın fiil' ister: kaybedilen uzuvlar yeniden büyüyebilirdi.",
    ],
    [
      "Elephants use low-frequency sounds to communicate ----.",
      [
        "because these sounds travel far",
        "so that other animals cannot hear them at all",
        "although they cannot hear such sounds themselves",
        "unless they are standing very close together",
        "even if there are no other elephants nearby",
      ],
      "Fillerin alçak frekanslı sesler kullanmasının nedeni bu seslerin havada ve yerde uzun mesafeler kat etmesidir: 'because'.",
    ],
    [
      "Since zebra mussels were first discovered in the Great Lakes, ----.",
      [
        "they have spread widely",
        "ships had carried ballast water from Europe",
        "most native fish would have disappeared",
        "the mussels will be removed",
        "few people lived near the lakes",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have spread'.",
    ],
    [
      "Unless a keystone species is protected, ----.",
      [
        "its ecosystem may change",
        "the sea stars would have eaten the mussels",
        "most species had lived on the rocks",
        "the mussels will disappear",
        "the experiment was successful",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: desteklediği tüm ekosistem büyük ölçüde değişebilir.",
    ],
    [
      "The cane toad's poison is so powerful ----.",
      [
        "that it can kill a crocodile within minutes",
        "because it is produced in glands on the shoulders",
        "although the toads themselves are not harmed by it",
        "unless the predator is very large",
        "while the tadpoles are also poisonous",
      ],
      "'so powerful that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Researchers have found that when a bird's eyes are exposed to certain types of light, ----.",
      [
        "its magnetic sense may weaken",
        "the bird would have migrated earlier",
        "most birds had flown south",
        "the bird will lose its feathers",
        "the bird was very young",
      ],
      "'when' ile genel bir bulgu anlatılır: bir kuşun gözleri belirli ışık türlerine maruz kaldığında manyetik alanı algılama yeteneği etkilenebilir.",
    ],
    [
      "So quickly do lionfish reproduce ----.",
      [
        "that a single female can release millions of eggs a year",
        "because they have no natural predators in the Atlantic",
        "although they live for only around fifteen years",
        "while they are found in warm coastal waters",
        "unless divers catch them regularly",
      ],
      "Devrik 'So quickly do … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While most animals can only heal small wounds, ----.",
      [
        "planarians can rebuild their entire bodies",
        "the human body contains trillions of cells",
        "some wounds take many weeks to heal",
        "worms live in many different habitats",
        "doctors use stitches to close large cuts",
      ],
      "'While' iki durumu karşılaştırır: çoğu hayvan yalnızca küçük yaraları iyileştirebilirken planaryalar tüm vücutlarını yeniden oluşturabilir.",
    ],
    [
      "Once the sea stars had been removed from the area, ----.",
      [
        "species numbers fell",
        "Paine will return them to the rocks",
        "the mussels would have disappeared",
        "sea stars eat mussels and barnacles",
        "most of the rocks had been empty",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: orada yaşayan tür sayısı hızla düştü.",
    ],
    [
      "No sooner had the toads been released into the fields ----.",
      [
        "than they began to breed rapidly",
        "when the beetles had disappeared",
        "that the farmers will be happy",
        "before they had arrived in Australia",
        "so the plan was a success",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The toads had few natural enemies in their new environment.",
      [
        "Kurbağaların yeni ortamlarında çok az doğal düşmanı vardı.",
        "Kurbağaların yeni ortamlarında çok sayıda doğal düşmanı vardı.",
        "Kurbağalar, yeni ortamlarındaki doğal düşmanlarını yok etti.",
        "Kurbağaların doğal düşmanları, onları yeni ortama getirdi.",
        "Kurbağalar yeni ortamlarında hiç yaşayamadı.",
      ],
      "'had few natural enemies' 'çok az doğal düşmanı vardı', 'in their new environment' 'yeni ortamlarında' demektir.",
    ],
    [
      "By filtering large amounts of water, the mussels remove the food that native species depend on.",
      [
        "Midyeler, büyük miktarda suyu süzerek yerli türlerin bağımlı olduğu besini ortadan kaldırır.",
        "Midyeler, büyük miktarda suyu süzerek yerli türler için daha fazla besin üretir.",
        "Yerli türler, midyelerin süzdüğü sudan hiç yararlanmaz.",
        "Midyeler, yerli türlerin besinlerini yemediği için suyu süzmez.",
        "Yerli türler, midyelerin suyu süzmesini engellemek için besin depolar.",
      ],
      "'By filtering large amounts of water' 'büyük miktarda suyu süzerek', 'remove the food that native species depend on' 'yerli türlerin bağımlı olduğu besini ortadan kaldırır' demektir.",
    ],
    [
      "Lionfish have no natural predators in the Atlantic, which allows their numbers to grow rapidly.",
      [
        "Aslan balıklarının Atlantik'te doğal avcısı yoktur, bu da sayılarının hızla artmasına olanak tanır.",
        "Aslan balıklarının Atlantik'te çok sayıda doğal avcısı vardır, bu yüzden sayıları hızla azalır.",
        "Atlantik'teki doğal avcılar, aslan balıklarının sayısını kontrol altında tutar.",
        "Aslan balıkları, Atlantik'teki doğal avcıların sayısını hızla artırır.",
        "Aslan balıklarının sayısı Atlantik'te hiçbir zaman artmamıştır.",
      ],
      "'have no natural predators in the Atlantic' 'Atlantik'te doğal avcısı yoktur', 'which allows their numbers to grow rapidly' 'bu da sayılarının hızla artmasına olanak tanır' demektir.",
    ],
    [
      "Planarians contain large numbers of stem cells that can become any type of cell in the body.",
      [
        "Planaryalar, vücuttaki her tür hücreye dönüşebilen çok sayıda kök hücre içerir.",
        "Planaryalar, yalnızca tek bir hücre türüne dönüşebilen az sayıda kök hücre içerir.",
        "Vücuttaki her hücre türü, planaryaların kök hücrelerini yok edebilir.",
        "Planaryalar, kök hücrelerini başka canlılardan alır.",
        "Planaryaların kök hücreleri, başka hücrelere dönüşemez.",
      ],
      "'contain large numbers of stem cells' 'çok sayıda kök hücre içerir', 'that can become any type of cell in the body' 'vücuttaki her tür hücreye dönüşebilen' demektir.",
    ],
    [
      "Some of the elephants' calls can be detected several kilometres away.",
      [
        "Fillerin bazı çağrıları birkaç kilometre öteden algılanabilir.",
        "Fillerin çağrıları yalnızca birkaç metre öteden duyulabilir.",
        "Filler, birkaç kilometre öteden gelen sesleri algılayamaz.",
        "Birkaç kilometre uzaktaki filler, çağrı yapmayı bırakır.",
        "Fillerin çağrıları, kilometrelerce öteye ulaştığında daha yüksek olur.",
      ],
      "'Some of the elephants' calls' 'fillerin bazı çağrıları', 'can be detected several kilometres away' 'birkaç kilometre öteden algılanabilir' demektir.",
    ],
    [
      "Removing a single predator caused the number of species on the rocks to fall by half.",
      [
        "Tek bir avcının uzaklaştırılması, kayalardaki tür sayısının yarı yarıya düşmesine neden oldu.",
        "Tek bir avcının eklenmesi, kayalardaki tür sayısının iki katına çıkmasına neden oldu.",
        "Kayalardaki türlerin yarısı, tek bir avcıyı uzaklaştırmak için birlikte çalıştı.",
        "Tek bir avcının uzaklaştırılması, kayalardaki türleri hiç etkilemedi.",
        "Kayalardaki tür sayısı, avcılar geldiğinde yarı yarıya azaldı.",
      ],
      "'Removing a single predator' 'tek bir avcının uzaklaştırılması', 'caused the number of species … to fall by half' 'tür sayısının yarı yarıya düşmesine neden oldu' demektir.",
    ],
  ],
  trEn: [
    [
      "Şeker kamışı kurbağaları, Avustralya'da ciddi bir istilacı tür hâline geldi.",
      [
        "Cane toads have become a serious invasive species in Australia.",
        "Cane toads were driven out of Australia by native species.",
        "Australia introduced cane toads to protect native species.",
        "Cane toads are found only in a few small parts of Australia.",
        "Cane toads have been eliminated from Australia.",
      ],
      "'ciddi bir istilacı tür hâline geldi' 'have become a serious invasive species' karşılığıdır.",
    ],
    [
      "Zebra midyeleri, gemilerin balast suyuyla Kuzey Amerika'ya taşındı.",
      [
        "Zebra mussels were carried to North America in ships' ballast water.",
        "Zebra mussels were carried from North America to Europe by ships.",
        "Ships were damaged by zebra mussels in North America.",
        "Zebra mussels were introduced to North America to clean the water.",
        "Zebra mussels swam across the ocean to North America.",
      ],
      "'gemilerin balast suyuyla … taşındı' 'were carried … in ships' ballast water' karşılığıdır.",
    ],
    [
      "Dalgıçlar, aslan balıklarını yakalamaya teşvik ediliyor.",
      [
        "Divers are being encouraged to catch lionfish.",
        "Divers are being prevented from catching lionfish.",
        "Lionfish are encouraging divers to leave the reefs.",
        "Divers are being paid to release lionfish into the sea.",
        "Lionfish cannot be caught by divers.",
      ],
      "'yakalamaya teşvik ediliyor' 'are being encouraged to catch' karşılığıdır.",
    ],
    [
      "Planaryalar, kesilen her parçadan yeni bir birey oluşturabilir.",
      [
        "Planarians can form a new individual from each piece that is cut off.",
        "Planarians die when they are cut into pieces.",
        "Each new individual cuts a planarian into pieces.",
        "Planarians can form a new individual only from the head.",
        "Planarians cannot be cut into pieces.",
      ],
      "'kesilen her parçadan yeni bir birey oluşturabilir' 'can form a new individual from each piece that is cut off' karşılığıdır.",
    ],
    [
      "Kuşlar, göç sırasında yön bulmak için Dünya'nın manyetik alanını kullanabilir.",
      [
        "Birds may use the Earth's magnetic field to find their way during migration.",
        "The Earth's magnetic field prevents birds from migrating.",
        "Birds create magnetic fields when they migrate.",
        "Birds use only the stars to find their way during migration.",
        "Migration changes the Earth's magnetic field.",
      ],
      "'yön bulmak için … manyetik alanını kullanabilir' 'may use … magnetic field to find their way', 'göç sırasında' 'during migration' karşılığıdır.",
    ],
    [
      "Kilit taşı türler, ekosistemlerinde boyutlarına göre orantısız bir etkiye sahiptir.",
      [
        "Keystone species have an effect on their ecosystems that is out of proportion to their size.",
        "Keystone species are always the largest animals in their ecosystems.",
        "Keystone species have no effect on their ecosystems.",
        "Ecosystems determine the size of their keystone species.",
        "Keystone species are found only in deserts.",
      ],
      "'boyutlarına göre orantısız bir etkiye sahiptir' 'have an effect … that is out of proportion to their size' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Lionfish are striking fish with red and white stripes and long, venomous spines. They are native to the Indian and Pacific Oceans, but since the 1980s they have spread throughout the western Atlantic, the Caribbean and the Gulf of Mexico. Genetic studies suggest that the invasion began with just a few fish, probably released from home aquariums in Florida. Lionfish have proved remarkably successful in their new environment. They have no natural predators there, they reproduce throughout the year, and a single female can release around two million eggs annually. They are also highly effective hunters: they use their large fins to trap small fish against the reef and then swallow them whole. Because the native fish of the Atlantic have never encountered them before, they do not recognise them as dangerous. In some areas, lionfish have reduced the number of young reef fish by around eighty per cent within a few weeks. Since they cannot be eliminated completely, authorities now encourage divers to catch them and restaurants to serve them, as their flesh is safe to eat once the spines have been removed.",
      questions: [
        [
          "According to the passage, the lionfish invasion probably started ----.",
          [
            "when a few fish were released from aquariums",
            "when ships carried them across the ocean",
            "after scientists introduced them to control other fish",
            "because the oceans became warmer",
            "when they escaped from fish farms",
          ],
          "Metne göre genetik çalışmalar istilanın muhtemelen Florida'daki ev akvaryumlarından salınan birkaç balıkla başladığını gösteriyor.",
        ],
        [
          "It can be understood from the passage that native Atlantic fish are vulnerable to lionfish because ----.",
          [
            "they do not see them as a danger",
            "they are larger than lionfish",
            "they eat lionfish eggs",
            "they live in different habitats",
            "they are protected by venom",
          ],
          "Atlantik'teki yerli balıkların aslan balıklarıyla daha önce karşılaşmadığı ve onları tehlikeli olarak tanımadığı belirtilir.",
        ],
        [
          "The writer mentions restaurants in order to show ----.",
          [
            "one of the ways in which numbers are being controlled",
            "that lionfish are poisonous to eat",
            "why the fish were first brought to Florida",
            "how lionfish trap small fish",
            "that the invasion has ended",
          ],
          "Restoranların aslan balığı servis etmeye teşvik edilmesi, sayılarını kontrol etme yollarından biri olarak anılır.",
        ],
      ],
    },
    {
      text:
        "Planarians are small flatworms that live in ponds and streams. They have attracted the attention of biologists for more than a century because of their extraordinary ability to regenerate. If a planarian is cut in half, the front half grows a new tail and the back half grows a new head, complete with a brain and eyes, within about a week. In some experiments, a single worm has been cut into more than two hundred pieces, and many of them have developed into complete new animals. This ability depends on cells called neoblasts, a type of stem cell that makes up around a quarter of all the cells in the worm's body. Unlike most stem cells in adult animals, which can produce only a limited range of cell types, neoblasts can produce every type of cell the worm needs. Researchers have also found that the worms somehow 'know' which part is missing: chemical signals and electrical patterns across the body tell the neoblasts whether to build a head or a tail. By altering these signals, scientists have even produced worms with two heads. Studying planarians may help researchers to understand why humans cannot regenerate in the same way and whether this could one day change.",
      questions: [
        [
          "According to the passage, the regenerative ability of planarians depends mainly on ----.",
          [
            "stem cells that can become any type of cell",
            "the size of the pieces that are cut",
            "the water in which they live",
            "their brain and eyes",
            "the food they eat",
          ],
          "Metne göre bu yetenek, solucanın ihtiyaç duyduğu her hücre türünü üretebilen neoblast adlı kök hücrelere bağlıdır.",
        ],
        [
          "The writer mentions worms with two heads in order to show that ----.",
          [
            "the signals that guide regeneration can be changed",
            "planarians naturally have two heads",
            "neoblasts are dangerous",
            "the experiments had failed",
            "worms cannot regenerate their heads",
          ],
          "Sinyaller değiştirilerek iki başlı solucanlar üretilmesi, yenilenmeyi yönlendiren sinyallerin değiştirilebileceğini gösterir.",
        ],
        [
          "It can be inferred from the passage that research on planarians ----.",
          [
            "might eventually contribute to human medicine",
            "has already allowed humans to regrow limbs",
            "is of no interest to biologists",
            "began only in the last few years",
            "has shown that regeneration is impossible",
          ],
          "Araştırmanın insanların neden aynı şekilde yenilenemediğini ve bunun bir gün değişip değişmeyeceğini anlamaya yardım edebileceğinin belirtilmesi, ileride insan tıbbına katkı sağlayabileceğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Elephants produce a wide range of sounds, including the trumpeting calls that most people are familiar with. Many of their calls, however, are infrasonic: they are too low in pitch for humans to hear. These low-frequency sounds have long wavelengths and lose little energy as they travel, so they can carry for several kilometres through the air, especially in the cool, still conditions of early morning and evening. Some of the sound also travels through the ground as vibrations. Researchers have discovered that elephants can detect these vibrations through sensitive cells in their feet and trunks, and they have been observed lifting one foot or pressing their trunks against the ground, apparently to listen more carefully. This form of communication allows elephants to keep in contact with family members who are out of sight, to warn one another of danger and to find mates. In one experiment, elephants responded to recorded alarm calls played through the ground from a distance, gathering together and moving away. Such findings suggest that human noise, such as traffic and machinery, may interfere with elephant communication in areas close to roads and settlements.",
      questions: [
        [
          "According to the passage, low-frequency sounds are useful for elephants because ----.",
          [
            "they can travel long distances with little loss of energy",
            "humans can hear them easily",
            "they are louder than trumpeting calls",
            "they can only be heard at night",
            "they frighten predators away",
          ],
          "Metne göre alçak frekanslı seslerin dalga boyları uzundur ve yol alırken az enerji kaybeder; bu yüzden kilometrelerce taşınabilir.",
        ],
        [
          "The writer mentions elephants lifting one foot in order to show ----.",
          [
            "that they may be listening to vibrations through the ground",
            "that they are preparing to run",
            "how they produce infrasonic sounds",
            "that they are injured",
            "how they find water",
          ],
          "Fillerin bir ayağını kaldırması ya da hortumunu yere bastırması, yerdeki titreşimleri daha dikkatli dinlediklerini gösterir.",
        ],
        [
          "It can be inferred from the passage that human noise ----.",
          [
            "could make it harder for elephants to communicate",
            "helps elephants to find mates",
            "has no effect on elephants",
            "is used by elephants as a warning",
            "travels further than elephant calls",
          ],
          "Trafik ve makine gibi insan gürültüsünün fillerin iletişimine engel olabileceği belirtilir.",
        ],
      ],
    },
    {
      text:
        "Many birds migrate thousands of kilometres each year, often returning to the same place with remarkable accuracy. They use several sources of information to find their way, including the position of the Sun and stars, landmarks and smells. Laboratory studies indicate that a large number of species respond to the planet's magnetism as well. When migrating birds are caged at the time of year when they would normally travel, they tend to hop in the direction they would normally fly, and if the magnetic field around the cage is changed, they change direction accordingly. How birds detect the field is still debated. One leading theory involves a protein called cryptochrome, found in the cells of the eye. When light strikes this protein, it triggers a chemical reaction whose outcome may be influenced by the direction of the magnetic field, possibly allowing birds to 'see' it as a pattern overlaid on their normal vision. Supporting this idea, some studies have found that birds' magnetic sense is disrupted by certain wavelengths of light and by weak electromagnetic noise from electronic equipment. Another theory suggests that tiny particles of iron in the beak may also play a role, although evidence for this has been mixed.",
      questions: [
        [
          "According to the passage, experiments with caged birds showed that ----.",
          [
            "they respond to changes in the magnetic field",
            "they cannot sense the direction of migration",
            "they prefer to stay in cages during migration",
            "they navigate only by the stars",
            "the magnetic field has no effect on them",
          ],
          "Metne göre kafesin çevresindeki manyetik alan değiştirildiğinde kuşlar yönlerini buna göre değiştirir.",
        ],
        [
          "According to the cryptochrome theory, birds may ----.",
          [
            "perceive the magnetic field through their eyes",
            "detect the field with particles in their feet",
            "hear the magnetic field as a sound",
            "smell the direction of the field",
            "produce their own magnetic field",
          ],
          "Kriptokrom kuramına göre kuşlar manyetik alanı normal görüşlerinin üzerine bindirilmiş bir desen olarak 'görebilir'.",
        ],
        [
          "It can be understood from the passage that the theory about iron in the beak ----.",
          [
            "has not been clearly supported by the evidence",
            "has been proved beyond doubt",
            "was rejected because birds have no beaks",
            "explains how birds use the stars",
            "is the only accepted explanation",
          ],
          "Gagadaki demir parçacıklarıyla ilgili kanıtların karışık olduğunun belirtilmesi, bu kuramın açıkça desteklenmediğini gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1963, the American ecologist Robert Paine began a simple but influential experiment on a rocky shore in Washington State. On one stretch of rock, he regularly removed all the purple sea stars, which feed on mussels, barnacles and other small animals; on a nearby stretch, he left them alone. Within a year, the number of species on the rocks without sea stars had begun to fall. Mussels, no longer controlled by their main predator, spread rapidly and crowded out many other species, including algae, sponges and snails. After several years, the area had changed from a diverse community to one dominated almost entirely by mussels. On the untouched stretch, the community remained varied. Paine concluded that some species have an effect on their ecosystems far greater than their numbers would suggest, and in 1969 he called them 'keystone species', after the central stone that holds an arch together. The idea has since been applied to many other ecosystems. Sea otters, for example, keep sea urchin populations in check, allowing kelp forests to thrive, and wolves in Yellowstone National Park influence the behaviour of deer and the growth of trees along rivers.",
      questions: [
        [
          "According to the passage, after the sea stars were removed, ----.",
          [
            "mussels took over the space and other species declined",
            "the number of species on the rocks increased",
            "barnacles and snails became more common",
            "algae replaced the mussels",
            "the sea stars returned within a year",
          ],
          "Metne göre ana avcıları tarafından kontrol edilmeyen midyeler hızla yayılarak pek çok başka türü alandan çıkardı.",
        ],
        [
          "The term 'keystone species' refers to a species that ----.",
          [
            "has an outsized effect on its ecosystem",
            "is the most common in an ecosystem",
            "lives only on rocky shores",
            "is eaten by all other species",
            "was discovered by Paine in Washington",
          ],
          "Paine bazı türlerin ekosistemleri üzerinde sayılarının gösterdiğinden çok daha büyük bir etkiye sahip olduğu sonucuna varmış ve onlara bu adı vermiştir.",
        ],
        [
          "The writer mentions sea otters and wolves in order to ----.",
          [
            "give more examples of the idea",
            "show that Paine's experiment was wrong",
            "explain how mussels spread",
            "describe animals that eat sea stars",
            "compare land and sea ecosystems",
          ],
          "Su samurları ve kurtlar, kilit taşı tür fikrinin başka ekosistemlere uygulanmasına örnek olarak verilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Every species of fig tree depends on a particular species of tiny wasp for pollination. ---- In return, the tree provides a safe place for the wasp's young to develop.",
      [
        "The female wasp enters the fig, carrying pollen from the tree where she was born.",
        "Figs have been eaten by humans for thousands of years.",
        "Many trees produce flowers that are pollinated by bees and butterflies.",
        "Wasps are often regarded as pests because they can sting.",
        "Fig trees grow best in warm climates with plenty of sunshine.",
      ],
      "Boşluktan sonra 'In return' (karşılığında) ağacın yavrulara güvenli yer sağladığı söylenir; boşluğa eşek arısının ağaca yaptığı hizmeti, yani doğduğu ağaçtan polen taşıyarak incire girdiğini anlatan cümle gelmelidir.",
    ],
    [
      "Many harmless hoverflies have black and yellow stripes like wasps. ---- As a result, birds that have been stung by wasps tend to leave the hoverflies alone too.",
      [
        "This colouring makes predators mistake them for insects that can sting.",
        "Hoverflies feed on nectar and help to pollinate many flowers.",
        "Some hoverflies can stay almost perfectly still in the air.",
        "Wasps build nests from chewed wood mixed with saliva.",
        "Many insects are most active on warm, sunny days.",
      ],
      "Boşluktan sonra 'As a result' ile yaban arısından sokulmuş kuşların sirfid sineklerine de dokunmadığı söylenir; boşluğa bu renklenmenin yırtıcıları sokabilen böceklerle karıştırmaya yönelttiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The archerfish hunts insects that sit on leaves above the surface of the water. ---- The insect falls into the water, where the fish quickly swallows it.",
      [
        "It knocks them down by shooting a powerful jet of water from its mouth.",
        "Archerfish are found in mangrove swamps in Southeast Asia and Australia.",
        "Many fish feed on insect larvae that live underwater.",
        "Light bends when it passes from air into water.",
        "Some people keep archerfish in large home aquariums.",
      ],
      "Boşluktan sonra böceğin suya düştüğü ve balığın onu yuttuğu anlatılır; boşluğa balığın ağzından güçlü bir su fışkırtarak böcekleri düşürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "The kiwi is a flightless bird found only in New Zealand. ---- This is unusual among birds, most of which rely mainly on their eyesight.",
      [
        "It has nostrils at the tip of its long beak and finds food largely by smell.",
        "New Zealand has many species of birds found nowhere else.",
        "The kiwi is a national symbol of New Zealand.",
        "Many flightless birds are threatened by introduced predators.",
        "Kiwis are active mainly at night.",
      ],
      "Boşluktan sonra bunun kuşlar arasında alışılmadık olduğu ve çoğunun görme duyusuna dayandığı söylenir; boşluğa kivinin gagasının ucundaki burun delikleriyle besinini koku yoluyla bulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Woodpeckers strike trees with their beaks up to twenty times a second. ---- Scientists are studying these features to design better protective helmets.",
      [
        "Special bones and muscles in their heads help to protect their brains from injury.",
        "Woodpeckers feed mainly on insects that live under the bark.",
        "Trees provide homes for many different kinds of animals.",
        "Woodpeckers are found on every continent except Australia and Antarctica.",
        "The sound of a woodpecker can be heard from far away.",
      ],
      "Boşluktan sonra 'these features' (bu özellikler) koruyucu kask tasarımında incelenir; boşluğa başlarındaki özel kemik ve kasların beyinlerini yaralanmadan koruduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Albatrosses can fly for hours without flapping their wings. ---- In this way, they can travel thousands of kilometres across the ocean using very little energy.",
      [
        "They use the wind above the waves to glide in long, curving paths.",
        "Albatrosses have the largest wingspan of any living bird.",
        "Many seabirds are threatened by fishing lines and plastic waste.",
        "Albatrosses usually return to the same island to breed.",
        "Some species of albatross can live for more than sixty years.",
      ],
      "Boşluktan sonra 'In this way' ile çok az enerjiyle binlerce kilometre yol aldıkları söylenir; boşluğa dalgaların üzerindeki rüzgârı kullanarak uzun, kavisli yollarla süzüldüklerini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Lichens are partnerships between a fungus and an alga or bacterium.",
        "The fungus provides shelter, while the partner produces food through photosynthesis.",
        "Mushrooms are a popular ingredient in many dishes.",
        "Together, they can survive in harsh places such as bare rock and Arctic tundra.",
        "Some lichens are very sensitive to air pollution and are used to monitor air quality.",
      ],
      odd: 2,
      why: "Parça likenleri anlatır. Mantarların pek çok yemekte popüler bir malzeme olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cleaner fish remove parasites and dead skin from larger fish.",
        "Larger fish visit 'cleaning stations' on the reef and wait to be cleaned.",
        "Aquariums are popular tourist attractions in many cities.",
        "Both sides benefit: the cleaner gets food and the client stays healthy.",
        "Remarkably, the larger fish rarely try to eat the cleaners.",
      ],
      odd: 2,
      why: "Parça temizleyici balıkları anlatır. Akvaryumların popüler turistik yerler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The platypus is one of the few mammals that lay eggs.",
        "It hunts in rivers with its eyes, ears and nostrils closed.",
        "Rivers in eastern Australia often flood after heavy rain.",
        "Instead, it finds prey by detecting tiny electric fields with its bill.",
        "Males also have venomous spurs on their back legs.",
      ],
      odd: 2,
      why: "Parça ornitorenkin özelliklerini anlatır. Doğu Avustralya'daki nehirlerin yoğun yağmurdan sonra taştığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hummingbirds have the fastest metabolism of any bird.",
        "To get enough energy, they must feed on nectar every few minutes.",
        "At night, they enter a state called torpor, in which their body temperature drops.",
        "Many gardeners plant flowers to attract birds and butterflies.",
        "In this way, they conserve fuel through the cold hours of darkness.",
      ],
      odd: 3,
      why: "Parça sinek kuşlarının metabolizmasını anlatır. Bahçıvanların kuş ve kelebekleri çekmek için çiçek diktiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Termite mounds in Africa can be several metres tall.",
        "They are built from soil, saliva and dung.",
        "Their network of tunnels helps to keep the temperature inside stable.",
        "Engineers have studied the mounds to design buildings that need less air conditioning.",
        "Many African countries have rapidly growing cities.",
      ],
      odd: 4,
      why: "Parça termit tepelerini anlatır. Pek çok Afrika ülkesinde kentlerin hızla büyüdüğünü söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Penguins are birds that cannot fly but are excellent swimmers.",
        "Public swimming pools are often busy during school holidays.",
        "Their wings have evolved into stiff flippers.",
        "Some species can dive to depths of more than five hundred metres.",
        "A thick layer of fat and dense feathers keeps them warm in cold water.",
      ],
      odd: 1,
      why: "Parça penguenleri anlatır. Yüzmenin her yaştan insan için popüler bir egzersiz olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
