import type { YokdilDeneme } from "./types";

export const FEN_79: YokdilDeneme = {
  no: 79,
  field: "fen",
  vocab: [
    [
      "The leaves of the water lily are so ---- that they can support the weight of a small child.",
      ["sturdy", "fragile", "tiny", "transparent", "poisonous"],
      "Nilüfer yapraklarının küçük bir çocuğun ağırlığını taşıyabilecek kadar 'sağlam' (sturdy) olduğu anlatılır.",
    ],
    [
      "The plant grows for decades before it finally produces a single, enormous ---- of flowers.",
      ["spike", "root", "shadow", "seed", "thorn"],
      "Bitkinin sonunda tek ve devasa bir çiçek 'başağı' (spike) üretmeden önce on yıllarca büyüdüğü anlatılır.",
    ],
    [
      "Water droplets roll off the leaf, ---- dirt as they go.",
      ["collecting", "creating", "hiding", "painting", "selling"],
      "Su damlacıklarının yapraktan yuvarlanırken kiri 'topladığı' (collecting) anlatılır.",
    ],
    [
      "After being dropped many times without harm, the plants stopped ---- their leaves.",
      ["folding", "growing", "colouring", "eating", "counting"],
      "Zarar görmeden pek çok kez düşürüldükten sonra bitkilerin yapraklarını 'katlamayı' (folding) bıraktığı anlatılır.",
    ],
    [
      "The fig's roots gradually ---- the host tree, which eventually dies.",
      ["surround", "feed", "protect", "water", "repair"],
      "İncirin köklerinin konak ağacı yavaş yavaş 'sardığı' (surround) ve ağacın sonunda öldüğü anlatılır.",
    ],
    [
      "When the researchers ---- the parasitic plants, many birds disappeared from the woodland.",
      ["got rid of", "took after", "looked up to", "gave in to", "ran into"],
      "Araştırmacılar parazit bitkileri 'ortadan kaldırınca' (got rid of) pek çok kuşun ormandan kaybolduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the plant flowered, the gardener ---- it for several years.",
      ["had been growing", "grows", "has grown", "will grow", "is growing"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been growing'.",
    ],
    [
      "If the botanist had not examined the leaves under a microscope, he ---- the bumps.",
      ["would not have noticed", "does not notice", "will not notice", "had not noticed", "is not noticing"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would not have noticed'.",
    ],
    [
      "The tallest known tree ---- by two naturalists in 2006.",
      ["was discovered", "discovered", "has discovered", "discovers", "is discovering"],
      "Ağaç keşfedilmiştir; edilgen geçmiş zaman: 'was discovered'.",
    ],
    [
      "---- mistletoe takes water from its host, it is important for many animals.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Ökseotunun konağından su alması ile pek çok hayvan için önemli olması zıttır: 'Although'.",
    ],
    [
      "The plant, ---- flowers open only at night, is pollinated by beetles.",
      ["whose", "who", "which", "whom", "where"],
      "Bitkinin çiçekleri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after many weeks ---- the plants begin to fold their leaves again.",
      ["did", "had", "were", "have", "do"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The seed lands in the branches of a tree, ---- it begins to grow.",
      ["where", "which", "when", "whose", "that"],
      "'the branches of a tree' yer bildirir; tohum orada büyümeye başlar: 'where'.",
    ],
    [
      "The more often the plants were dropped, ---- they reacted.",
      ["the less", "the least", "less", "least", "so little"],
      "'The more ..., the less ...' paralel yapısı: 'the less'.",
    ],
    [
      "The park authorities ask that visitors ---- away from the tree.",
      ["stay", "stays", "stayed", "to stay", "staying"],
      "'ask that' sonrası yalın fiil (subjunctive): 'stay'.",
    ],
    [
      "The meadow is thought ---- from a single seed thousands of years ago.",
      ["to have grown", "growing", "to be grown", "grew", "having grow"],
      "Geçmişte gerçekleşen eylem için mastarın geçmiş biçimi: 'to have grown'.",
    ],
    [
      "The researchers used a special device ---- the plants would fall the same distance each time.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Özel bir cihaz kullanmanın amacı bitkilerin her seferinde aynı mesafeden düşmesidir: 'so that'.",
    ],
    [
      "The gardener had a special glasshouse ---- for the giant water lily.",
      ["built", "build", "building", "to build", "builds"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'built'.",
    ],
    [
      "Had the mistletoe not been removed, the number of birds ---- so sharply.",
      ["would not have fallen", "does not fall", "will not fall", "had not fallen", "is not falling"],
      "Devrik üçüncü tip koşul cümlesi: 'would not have fallen'.",
    ],
    [
      "Neither the hikers nor the scientists ---- that the tree was the tallest in the world.",
      ["had known", "knowing", "to know", "has known", "know to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had known'.",
    ],
  ],
  cloze: [
    {
      text:
        "The giant water lily of the Amazon has some of the largest leaves of any plant. They are round, with upturned edges like the rim of a tray, and can grow to more than two and a half metres across, {1} each leaf can grow by as much as half a metre in a single day. The underside of each leaf is supported by a network of thick ribs filled with air, which allow it to float, {2} sharp spines protect it from fish and other animals that might eat it. The leaves are strong enough to support the weight of a small child, provided that the weight is spread evenly. The flowers are equally remarkable. Each one opens at dusk as a white flower giving off a sweet, fruity smell, {3} it attracts beetles, which crawl inside. During the night, the flower closes, trapping the beetles, which feed on its tissues and become covered in pollen. On the second evening, the flower opens again, now pink in colour, {4} the beetles fly off to another white flower, carrying pollen with them. In the nineteenth century, the plant caused great excitement in Europe, {5} gardeners competed to be the first to make it flower in a glasshouse. The structure of its leaves is said to have inspired the design of large iron and glass buildings of the period.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Yaprakların iki buçuk metreyi aşabilmesi ve bir günde yarım metre büyüyebilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["while", "because", "unless", "until", "so that"],
          "Kaburgaların yaprağın yüzmesini sağlaması ile dikenlerin onu koruması karşılaştırılır: 'while'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Çiçeğin akşam açılıp koku vermesi ve böcekleri çekmesi birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Çiçeğin ikinci akşam yeniden açılması ve böceklerin başka bir çiçeğe uçması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Bitkinin heyecan yaratması ve bahçıvanların yarışması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "On cold Andean slopes in Peru and Bolivia, at altitudes of around four thousand metres, grows one of the most extraordinary plants in the world. Puya raimondii, sometimes called the queen of the Andes, is a relative of the pineapple, {1} for most of its life it consists of a large rosette of stiff, spiny leaves that can be more than two metres across. The plant grows very slowly in the harsh, cold conditions of the high mountains, {2} it may take many decades, perhaps eighty years or more, before it flowers. When it finally does, it produces an enormous flower spike that can reach a height of around ten metres, {3} the spike may carry thousands of individual flowers, which are visited by hummingbirds and other birds. After producing millions of seeds, the plant dies. Puya raimondii is now rare, and its populations are scattered across a small number of sites, {4} in some places it has been damaged by fires lit by farmers to improve grazing, and by cattle that eat the young plants. Studies have also found that many populations have very little genetic variety, {5} this may make them less able to adapt to changes in their environment, such as a warming climate. Conservationists are working with local communities to protect the remaining plants.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Ananasla akraba olması ve yaşamının çoğunda bir yaprak rozeti olması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Bitkinin yavaş büyümesi ve çiçeklenmesinin on yıllar sürmesi birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "Devasa bir başak üretmesi ve başağın binlerce çiçek taşıması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Bitkinin nadir olması ve bazı yerlerde zarar görmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "although"],
          "Genetik çeşitliliğin az olması ve bunun uyumu güçleştirebilmesi birbirini izler: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the leaves of the water lily look delicate, ----.",
      [
        "they are strong enough to support a small child",
        "the Amazon is a river",
        "flowers are colourful",
        "beetles are insects",
        "their undersides are protected by sharp spines",
      ],
      "'Although' zıtlık ister: nilüfer yaprakları narin görünse de küçük bir çocuğu taşıyacak kadar güçlüdür.",
    ],
    [
      "If the beetles had not been trapped overnight, ----.",
      [
        "they might not have become covered in pollen",
        "beetles fly",
        "nights are dark",
        "flowers smell sweet",
        "the flower would have turned pink on the second evening",
      ],
      "Üçüncü tip koşul: böcekler gece boyunca hapsedilmeseydi polene bulanmayabilirlerdi.",
    ],
    [
      "----, the botanist discovered that the leaf surfaces were covered in tiny bumps.",
      [
        "Examining the leaves under a powerful microscope",
        "Although lotus flowers are pink",
        "Unless it rained",
        "Since water is wet",
        "While companies were developing self-cleaning paints",
      ],
      "Yaprakları güçlü bir mikroskop altında inceleyen botanikçi yüzeylerin küçük çıkıntılarla kaplı olduğunu keşfetti.",
    ],
    [
      "The researchers concluded that the plants could 'learn' ----.",
      [
        "because they stopped reacting to a harmless repeated disturbance",
        "although plants have no brains",
        "unless they were watered",
        "so that leaves could grow",
        "while the plants were kept in a laboratory in Australia",
      ],
      "Araştırmacılar bitkilerin 'öğrenebildiği' sonucuna vardı, çünkü zararsız ve tekrarlanan bir rahatsızlığa tepki vermeyi bıraktılar.",
    ],
    [
      "Since the fig begins life high in the branches of another tree, ----.",
      [
        "it receives plenty of sunlight from the start",
        "trees are tall",
        "figs are sweet",
        "forests are dark",
        "its roots eventually form a hollow lattice",
      ],
      "'Since' neden bildirir: incir yaşama başka bir ağacın dallarında yüksekte başladığından en baştan bol güneş ışığı alır.",
    ],
    [
      "Not only does mistletoe provide food for birds, ----.",
      [
        "but its fallen leaves also enrich the soil",
        "and birds fly",
        "since trees are tall",
        "so forests are green",
        "unless the plants had been removed from the woodland",
      ],
      "'Not only ... but also' yapısı tamamlanır: ökseotu yalnızca kuşlara besin sağlamakla kalmaz, dökülen yaprakları toprağı da zenginleştirir.",
    ],
    [
      "Once the location of the tree was published online, ----.",
      [
        "large numbers of visitors began to trample the area around it",
        "trees are tall",
        "the internet is popular",
        "parks are large",
        "the naturalists had measured its height using lasers",
      ],
      "Ağacın yeri internette yayımlanınca çok sayıda ziyaretçi çevresini çiğnemeye başladı.",
    ],
    [
      "Unless the fires and grazing are controlled, ----.",
      [
        "the remaining plants may continue to decline",
        "fires are hot",
        "cattle eat grass",
        "mountains are high",
        "the plant would not have flowered after eighty years",
      ],
      "'Unless' olumsuz koşul: yangınlar ve otlatma denetlenmedikçe kalan bitkiler azalmayı sürdürebilir.",
    ],
    [
      "The tree is so tall ----.",
      [
        "that its top cannot be seen clearly from the ground",
        "although it is old",
        "because it is a redwood",
        "unless it rains",
        "while its location is kept secret",
      ],
      "Ağaç o kadar uzundur ki tepesi yerden net görülemez.",
    ],
    [
      "Even though the plants were dropped many times, ----.",
      [
        "they were not harmed",
        "they were small",
        "the device was simple",
        "plants have leaves",
        "they were kept in different light conditions",
      ],
      "'Even though' zıtlık ister: bitkiler pek çok kez düşürülse de zarar görmediler.",
    ],
    [
      "As the bumps on the leaf trap tiny pockets of air, ----.",
      [
        "water forms round droplets that roll off easily",
        "air is invisible",
        "leaves are green",
        "lotus plants grow in water",
        "the effect was named after the lotus plant",
      ],
      "Yapraktaki çıkıntılar küçük hava cepleri hapsettiği için su kolayca yuvarlanan yuvarlak damlalar oluşturur.",
    ],
  ],
  enTr: [
    [
      "A leaf may expand by fifty centimetres within twenty-four hours.",
      [
        "Bir yaprak yirmi dört saat içinde elli santimetre büyüyebilir.",
        "Her yaprak tek bir yılda yarım santimetre büyür.",
        "Yarım metre her yaprağı büyütür.",
        "Yapraklar hiç büyümez.",
        "Yaprak yoktur.",
      ],
      "'A leaf may expand by fifty centimetres' 'bir yaprak elli santimetre büyüyebilir', 'within twenty-four hours' 'yirmi dört saat içinde' karşılığıdır.",
    ],
    [
      "The plant dies after producing millions of seeds.",
      [
        "Bitki milyonlarca tohum ürettikten sonra ölür.",
        "Bitki milyonlarca tohum üretmeden önce ölür.",
        "Tohumlar bitkiyi milyonlarca kez üretir.",
        "Bitki hiç tohum üretmez.",
        "Bitki yoktur.",
      ],
      "'The plant dies' 'bitki ölür', 'after producing millions of seeds' 'milyonlarca tohum ürettikten sonra' karşılığıdır.",
    ],
    [
      "The leaves stay clean because water carries the dirt away.",
      [
        "Yapraklar temiz kalır, çünkü su kiri alıp götürür.",
        "Yapraklar kirlenir, çünkü su kiri getirir.",
        "Kir suyu yapraklardan uzaklaştırır.",
        "Yapraklar hiç temizlenmez.",
        "Yaprak yoktur.",
      ],
      "'The leaves stay clean' 'yapraklar temiz kalır', 'because water carries the dirt away' 'çünkü su kiri alıp götürür' karşılığıdır.",
    ],
    [
      "The plants remembered the experience for several weeks.",
      [
        "Bitkiler deneyimi birkaç hafta boyunca hatırladı.",
        "Bitkiler deneyimi hemen unuttu.",
        "Deneyim bitkileri birkaç hafta hatırladı.",
        "Bitkiler hiçbir şey yaşamadı.",
        "Bitki yoktu.",
      ],
      "'The plants remembered the experience' 'bitkiler deneyimi hatırladı', 'for several weeks' 'birkaç hafta boyunca' karşılığıdır.",
    ],
    [
      "The roots grow down the trunk until they reach the ground.",
      [
        "Kökler yere ulaşana kadar gövde boyunca aşağı büyür.",
        "Kökler yerden gövdeye doğru yukarı büyür.",
        "Gövde köklerin içinde büyür.",
        "Kökler hiç büyümez.",
        "Kök yoktur.",
      ],
      "'The roots grow down the trunk' 'kökler gövde boyunca aşağı büyür', 'until they reach the ground' 'yere ulaşana kadar' karşılığıdır.",
    ],
    [
      "The exact location of the tree has been kept secret.",
      [
        "Ağacın tam yeri gizli tutulmuştur.",
        "Ağacın tam yeri herkese duyurulmuştur.",
        "Gizli yer ağacı saklamıştır.",
        "Ağacın yeri hiç bilinmiyordu ve kimse aramadı.",
        "Ağaç yoktur.",
      ],
      "'The exact location of the tree' 'ağacın tam yeri', 'has been kept secret' 'gizli tutulmuştur' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Çiçekler gece boyunca böcekleri içeride hapseder.",
      [
        "The flowers trap the beetles inside overnight.",
        "The beetles trap the flowers inside overnight.",
        "The flowers release the beetles at once.",
        "The night traps the flowers.",
        "There are no beetles.",
      ],
      "'Çiçekler hapseder' 'the flowers trap', 'gece boyunca böcekleri içeride' 'the beetles inside overnight' karşılığıdır.",
    ],
    [
      "Bitki çiçek açmadan önce seksen yıl kadar yaşayabilir.",
      [
        "The plant may live for around eighty years before it flowers.",
        "The plant flowers every year for eighty years.",
        "Eighty years live before the plant.",
        "The plant dies before it is a year old.",
        "There is no plant.",
      ],
      "'Bitki yaşayabilir' 'the plant may live', 'çiçek açmadan önce seksen yıl kadar' 'for around eighty years before it flowers' karşılığıdır.",
    ],
    [
      "Bu buluş kendi kendini temizleyen boyaların geliştirilmesine yol açtı.",
      [
        "This discovery led to the development of self-cleaning paints.",
        "Self-cleaning paints led to this discovery.",
        "This discovery prevented the development of new paints.",
        "Paints discovered the development.",
        "There was no discovery.",
      ],
      "'Bu buluş yol açtı' 'this discovery led', 'kendi kendini temizleyen boyaların geliştirilmesine' 'to the development of self-cleaning paints' karşılığıdır.",
    ],
    [
      "Bitkiler tehlike olmadığını öğrendi ve yapraklarını açık tuttu.",
      [
        "The plants learned that there was no danger and kept their leaves open.",
        "The plants learned that there was great danger and closed their leaves.",
        "Danger learned to keep the plants open.",
        "The plants never opened their leaves.",
        "There were no plants.",
      ],
      "'Bitkiler tehlike olmadığını öğrendi' 'the plants learned that there was no danger', 've yapraklarını açık tuttu' 'and kept their leaves open' karşılığıdır.",
    ],
    [
      "Konak ağaç sonunda ölür ve içi boş bir kafes bırakır.",
      [
        "The host tree eventually dies, leaving a hollow lattice.",
        "The host tree eventually grows, filling the lattice.",
        "A hollow lattice eventually kills the fig.",
        "The host tree never dies.",
        "There is no tree.",
      ],
      "'Konak ağaç sonunda ölür' 'the host tree eventually dies', 've içi boş bir kafes bırakır' 'leaving a hollow lattice' karşılığıdır.",
    ],
    [
      "Ağacın yakınına girenlere büyük para cezası verilebilir.",
      [
        "People who go near the tree can be given large fines.",
        "People who go near the tree are given large rewards.",
        "The tree fines the people.",
        "Anyone may climb the tree freely.",
        "There is no tree.",
      ],
      "'Büyük para cezası verilebilir' 'can be given large fines', 'ağacın yakınına girenlere' 'people who go near the tree' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The sacred lotus, which grows in ponds and lakes across much of Asia, has long been regarded as a symbol of purity, because its leaves and flowers always seem to stay clean, even though the plant grows in muddy water. In the 1970s, the German botanist Wilhelm Barthlott began studying the surfaces of plant leaves using a scanning electron microscope, which can show details far too small to be seen with ordinary microscopes. He noticed that the leaves of the lotus and some other plants that stayed particularly clean were not smooth, as might be expected, but were covered with a dense pattern of tiny bumps, each of which carried a fine coating of waxy crystals. Barthlott and his colleagues showed that this rough, waxy surface is extremely water-repellent. Because the bumps trap tiny pockets of air, water touches the leaf only at the tips of the bumps, so it forms almost perfectly round droplets that roll off the surface at the slightest tilt. As the droplets roll, particles of dirt, which also touch the surface only at a few points, stick to the water and are carried away. Barthlott published his findings in the 1990s and called the phenomenon the 'lotus effect'. The discovery led to the development of products that copy the structure of the lotus leaf, including paints for the outside of buildings that stay clean in the rain, glass and textiles that repel water, and coatings for other materials. However, many such surfaces are easily damaged, since the tiny structures can be worn away by rubbing, and researchers are working to develop more durable versions.",
      questions: [
        [
          "According to the passage, the lotus has been regarded as a symbol of purity because ----.",
          [
            "it stays clean even though it grows in muddy water",
            "it has white flowers",
            "it grows only in clean water",
            "its surface is covered with a dense pattern of tiny bumps coated in wax",
            "it is used in medicine",
          ],
          "Metne göre bitki çamurlu suda yetişse de yaprakları ve çiçekleri hep temiz görünür.",
        ],
        [
          "Water forms round droplets on the lotus leaf because ----.",
          [
            "the bumps trap air, so the water touches only their tips",
            "the leaf is perfectly smooth",
            "the leaf absorbs water",
            "the leaf is warm",
            "the droplets contain wax",
          ],
          "Çıkıntılar küçük hava cepleri hapseder ve su yaprağa yalnızca çıkıntıların uçlarında dokunur.",
        ],
        [
          "It can be understood from the passage that many artificial self-cleaning surfaces ----.",
          [
            "can be damaged easily",
            "are stronger than lotus leaves",
            "are made from lotus plants",
            "attract dirt",
            "were developed before Barthlott's work",
          ],
          "Küçük yapılar sürtünmeyle aşınabildiği için bu yüzeylerin çoğu kolayca zarar görür.",
        ],
      ],
    },
    {
      text:
        "The sensitive plant, a small tropical shrub, is well known for an unusual behaviour: when its leaves are touched or shaken, they quickly fold up, probably as a way of defending themselves against animals that might eat them. In 2014, a team of researchers led by Monica Gagliano at the University of Western Australia used this behaviour to ask whether plants are capable of a simple form of learning. They placed potted sensitive plants in a device that dropped them a short distance onto a soft surface, a disturbance that caused them to fold their leaves but did not harm them. The plants were dropped repeatedly, sixty times in a session. At first they folded their leaves each time, but after a few drops many of them began to keep their leaves open, as if they had 'learned' that the disturbance was harmless. To check that the plants were not simply exhausted, the researchers then shook them in a different way, and the plants folded their leaves again immediately. Remarkably, when the plants were dropped again after several days, and even after four weeks, many of them still did not fold their leaves, suggesting that they had retained the information for a surprisingly long time. The researchers also found that plants kept in low light, for which closing their leaves was more costly, stopped reacting more quickly. The study attracted wide attention and provoked debate. Some scientists welcomed it as evidence that organisms without a brain can learn, while others argued that terms such as 'learning' and 'memory' should be used with caution when describing plants, and that the results need to be repeated by other researchers.",
      questions: [
        [
          "According to the passage, the plants were dropped onto a soft surface so that ----.",
          [
            "they would be disturbed but not harmed",
            "they would grow faster",
            "they would flower",
            "researchers could check whether they were simply exhausted",
            "their leaves would fall off",
          ],
          "Metne göre düşürülme yapraklarını katlamalarına yol açan ama onlara zarar vermeyen bir rahatsızlıktı.",
        ],
        [
          "The researchers shook the plants in a different way in order to ----.",
          [
            "check that they were not simply exhausted",
            "harm them",
            "make them flower",
            "measure their height",
            "test their roots",
          ],
          "Bitkilerin yalnızca yorulmadığını doğrulamak için farklı biçimde salladılar ve bitkiler yapraklarını hemen katladı.",
        ],
        [
          "It can be understood from the passage that some scientists believe ----.",
          [
            "terms such as 'learning' should be used carefully for plants",
            "plants have brains",
            "the study proved plants can think",
            "the results have been widely repeated",
            "plants cannot respond to touch",
          ],
          "Bazı bilim insanları bitkiler için 'öğrenme' ve 'bellek' terimlerinin dikkatli kullanılması gerektiğini savunur.",
        ],
      ],
    },
    {
      text:
        "In tropical forests, where competition for light is intense, strangler figs have evolved a remarkable way of reaching the sun. Their life begins high in the canopy, when a bird, bat or monkey that has eaten fig fruit leaves a seed in the branches of another tree. The seed germinates there, and the young fig grows as a small plant perched on its host, obtaining water and nutrients from rain and from the decaying material that collects in the branches. It then sends long, thin roots down along the trunk of the host tree towards the ground. Once these roots reach the soil, the fig grows much more rapidly. Its roots thicken and join together, forming a network around the host's trunk, while its leaves spread out above, competing with the host for light. Over many years, the fig's roots may completely surround the host, preventing its trunk from growing wider, and the host tree, deprived of light and space, often dies and rots away. What remains is a hollow lattice of fig roots, standing like a column where the host tree once stood. Although strangler figs can be harmful to their hosts, they play an important role in the forest. They produce large crops of fruit at different times of year, providing food for many animals during periods when other fruit is scarce, and the hollow spaces inside their trunks provide shelter for bats, birds and other creatures. For this reason, scientists regard them as keystone species in many tropical forests, meaning that a large number of other species depend on them.",
      questions: [
        [
          "According to the passage, a strangler fig begins life ----.",
          [
            "in the branches of another tree",
            "on the forest floor",
            "in a river",
            "inside the hollow lattice of roots that remains after the host tree has died",
            "underground",
          ],
          "Metne göre incir meyvesini yiyen bir kuş, yarasa ya da maymun tohumu başka bir ağacın dallarına bırakır.",
        ],
        [
          "The host tree often dies because ----.",
          [
            "it is deprived of light and space",
            "the fig poisons it",
            "animals eat it",
            "it is struck by lightning",
            "it produces too much fruit",
          ],
          "Konak ağaç ışık ve alandan yoksun kalır ve çoğu zaman ölüp çürür.",
        ],
        [
          "It can be understood from the passage that strangler figs are regarded as keystone species because ----.",
          [
            "many other species depend on them",
            "they kill all other trees",
            "they grow very slowly",
            "they are rare",
            "they have no fruit",
          ],
          "Diğer meyvelerin az olduğu dönemlerde besin, içi boş gövdeleri de barınak sağlar; pek çok tür onlara bağlıdır.",
        ],
      ],
    },
    {
      text:
        "Mistletoe is often thought of as a harmful parasite. It grows on the branches of trees, attaching itself with special structures that penetrate the host's tissues and draw water and nutrients from it, and heavy infestations can weaken or even kill trees. However, mistletoe is only partly parasitic: it has green leaves and makes much of its own food through photosynthesis. In recent decades, ecologists have argued that it plays a surprisingly important role in many forests and woodlands. Its berries, flowers and leaves provide food for a wide range of birds, mammals and insects, and many birds nest in its dense clumps. In 2012, the Australian ecologist David Watson published the results of an unusual experiment designed to test the importance of mistletoe. In a region of south-eastern Australia, he and his colleagues removed all the mistletoe from a number of patches of woodland, while leaving it in place in other, similar patches. Over the following three years, they found that the number of bird species in the woodland without mistletoe fell by around a quarter, and the birds most affected were not only those that feed on mistletoe but also those that feed on insects living in the leaf litter on the ground. The researchers suggested that this was because mistletoe sheds large amounts of leaves that are rich in nutrients, enriching the soil and supporting the insects on which many birds feed. The study supported the view that mistletoe should be regarded as a keystone resource in some ecosystems, and it has encouraged some land managers to reconsider attempts to remove it.",
      questions: [
        [
          "According to the passage, mistletoe is only partly parasitic because ----.",
          [
            "it makes much of its own food through photosynthesis",
            "it does not attach to trees",
            "it lives on the ground",
            "its fallen leaves are rich in nutrients and enrich the soil",
            "it has no leaves",
          ],
          "Metne göre yeşil yaprakları vardır ve besininin çoğunu fotosentezle kendisi üretir.",
        ],
        [
          "In Watson's experiment, the birds most affected by the removal of mistletoe included those that ----.",
          [
            "feed on insects in the leaf litter",
            "nest on the ground in open fields",
            "migrate to other countries",
            "eat only seeds",
            "live near rivers",
          ],
          "Yalnızca ökseotuyla beslenenler değil, yere düşmüş yaprakların arasında yaşayan böceklerle beslenen kuşlar da etkilendi.",
        ],
        [
          "It can be understood from the passage that the study has encouraged some land managers to ----.",
          [
            "reconsider removing mistletoe",
            "remove all mistletoe",
            "plant more trees",
            "kill insects",
            "stop studying birds",
          ],
          "Çalışma bazı arazi yöneticilerini ökseotunu ortadan kaldırma girişimlerini yeniden düşünmeye yöneltmiştir.",
        ],
      ],
    },
    {
      text:
        "In August 2006, two naturalists exploring a remote valley in Redwood National Park in northern California came across a coast redwood that seemed unusually tall. When its height was measured, it was found to be around 115 metres, making it the tallest known living tree in the world. The tree was given the name Hyperion, after a giant of Greek mythology. Coast redwoods are able to grow so tall partly because they live in a region with a mild climate and frequent fog, which supplies moisture to their leaves during the dry summer months. However, scientists believe that there is a limit to how tall trees can grow, because it becomes increasingly difficult to lift water from the roots to the highest leaves. Studies of the tallest redwoods have found that their highest leaves are smaller and tougher than those lower down, apparently because they receive less water, and some researchers have calculated that the maximum possible height for a redwood is around 120 to 130 metres. In addition, the top of Hyperion appears to have been damaged by woodpeckers, which may prevent it from growing much taller. To protect the tree, its exact location was not officially disclosed. Nevertheless, information about how to find it spread on the internet, and increasing numbers of visitors began to make their way to the site, trampling the vegetation, damaging the soil around its shallow roots and leaving rubbish. In 2022, the park authorities closed the area around the tree, warning that anyone who entered it could face a large fine or even a prison sentence, and urging people to enjoy the many other giant trees that can be visited along official trails.",
      questions: [
        [
          "According to the passage, coast redwoods can grow so tall partly because ----.",
          [
            "fog supplies moisture to their leaves in summer",
            "they live in very dry regions",
            "woodpeckers protect them",
            "visitors trample the soil around their shallow roots",
            "they have very deep roots",
          ],
          "Metne göre ılıman bir iklimde yaşarlar ve sık sis kuru yaz aylarında yapraklarına nem sağlar.",
        ],
        [
          "Scientists believe there is a limit to the height of trees because ----.",
          [
            "it becomes harder to lift water to the highest leaves",
            "trees stop growing after a hundred years",
            "the wind breaks tall trees",
            "the soil is too poor",
            "fog prevents growth",
          ],
          "Suyu köklerden en yüksek yapraklara kaldırmak giderek zorlaşır.",
        ],
        [
          "It can be understood from the passage that the area around Hyperion was closed because ----.",
          [
            "visitors were damaging the site",
            "the tree had died",
            "the tree was cut down",
            "it was too dangerous to climb",
            "scientists wanted to measure it again",
          ],
          "Ziyaretçiler bitki örtüsünü çiğniyor, sığ köklerin çevresindeki toprağa zarar veriyor ve çöp bırakıyordu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The flower of the bee orchid looks remarkably like a female bee. ---- In Britain, however, where the right bees are rare, the plant usually pollinates itself.",
      [
        "In parts of southern Europe, male bees attempt to mate with the flowers and carry pollen from one plant to another.",
        "Bees make honey.",
        "Orchids grow in many countries.",
        "The flowers also give off a scent similar to that of female bees.",
        "Britain has a mild climate.",
      ],
      "Boşluk benzerliğin işlevini anlatıp 'ancak İngiltere'de' karşıtlığına bağlanan bir cümle gerektirir; boşluğa güney Avrupa'da erkek arıların çiçeklerle çiftleşmeye çalışıp polen taşıdığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some species of agave grow for decades before producing a single tall flower stalk, after which the plant dies. ---- The plants are also used to make several alcoholic drinks.",
      [
        "Because of the long wait, they are sometimes called 'century plants', although most flower after ten to thirty years.",
        "Agaves grow in dry regions.",
        "Plants need water.",
        "Their flowers are pollinated mainly by bats, which feed on the nectar at night.",
        "Deserts are hot.",
      ],
      "Boşluk uzun bekleyişi bitkinin takma adına bağlayan bir cümle gerektirir; boşluğa uzun bekleyiş nedeniyle bazen 'yüzyıl bitkisi' denildiğini ama çoğunun on-otuz yılda çiçek açtığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2022, scientists reported that a huge underwater meadow of seagrass in Shark Bay, Western Australia, is a single plant. ---- This makes it the largest known plant on Earth.",
      [
        "Genetic tests showed that it had spread from one seedling over thousands of years and now covers around two hundred square kilometres.",
        "Australia has many beaches.",
        "Seagrass grows in shallow water.",
        "The meadow provides food and shelter for dugongs, turtles and many kinds of fish.",
        "Sharks live in the sea.",
      ],
      "Boşluk tek bir bitki olduğunun kanıtını anlatıp en büyük bitki olmasına bağlanan bir cümle gerektirir; boşluğa genetik testlerin onun binlerce yılda tek bir fideden yayıldığını ve yaklaşık iki yüz kilometrekare kapladığını gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Banyan trees send roots down from their branches to the ground. ---- One famous banyan in India covers an area larger than a football pitch and looks like a small forest.",
      [
        "These roots thicken into new trunks, allowing the tree to spread outwards over a huge area.",
        "India has many large cities.",
        "Trees produce oxygen.",
        "Banyans are regarded as sacred by many people in South Asia.",
        "Football is popular in India.",
      ],
      "Boşluk köklerin işlevini anlatıp ünlü örneğe bağlanan bir cümle gerektirir; boşluğa bu köklerin kalınlaşarak yeni gövdelere dönüştüğünü ve ağacın geniş bir alana yayılmasını sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "The sandbox tree of the Americas spreads its seeds in a dramatic way. ---- For this reason, it is sometimes called the 'dynamite tree'.",
      [
        "Its fruits explode with a loud bang, throwing the seeds as far as forty metres.",
        "Trees grow in forests.",
        "Seeds need water to grow.",
        "Its trunk is also covered in sharp spines, and its sap is poisonous.",
        "Dynamite was invented in the nineteenth century.",
      ],
      "Boşluk tohumların yayılma biçimini anlatıp ağacın takma adına bağlanan bir cümle gerektirir; boşluğa meyvelerinin yüksek bir patlamayla tohumları kırk metreye kadar fırlattığını söyleyen cümle gelmelidir.",
    ],
    [
      "The coco de mer, a palm tree found only on two islands in the Seychelles, produces the largest seed of any plant. ---- Before the tree was discovered, the seeds were sometimes found floating in the sea and were thought to grow on underwater trees.",
      [
        "A single seed can weigh more than twenty kilograms and take years to mature.",
        "The Seychelles are in the Indian Ocean.",
        "Palm trees grow in warm places.",
        "The trees are now protected, and the seeds can be exported only with a licence.",
        "Islands are surrounded by water.",
      ],
      "Boşluk tohumun büyüklüğünü anlatıp denizde bulunan tohumlara bağlanan bir cümle gerektirir; boşluğa tek bir tohumun yirmi kilogramdan fazla gelebildiğini ve olgunlaşmasının yıllar aldığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The cork oak grows mainly in Portugal and Spain.",
        "Its thick bark can be stripped every nine years without harming the tree.",
        "Portugal is famous for its tiles.",
        "The bark is used to make bottle stoppers and floor coverings.",
        "Cork oak forests are also home to many rare animals.",
      ],
      odd: 2,
      why: "Parça mantar meşesini anlatır. Portekiz'in çinileriyle ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The jade vine produces long hanging clusters of blue-green flowers.",
        "It grows in the rainforests of the Philippines.",
        "Its flowers are pollinated by bats.",
        "The Philippines has more than seven thousand islands.",
        "It has become rare because its forests have been cleared.",
      ],
      odd: 3,
      why: "Parça yeşim sarmaşığını anlatır. Filipinler'in yedi binden fazla adası olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The ghost plant is a white flowering plant that contains no green pigment.",
        "It cannot make its own food from sunlight.",
        "Instead, it obtains nutrients from fungi in the soil.",
        "Many fungi are edible.",
        "It can grow in dark forests where other plants cannot.",
      ],
      odd: 3,
      why: "Parça yeşil pigmenti olmayan hayalet bitkiyi anlatır. Pek çok mantarın yenebildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The resurrection fern can lose almost all of its water during a drought.",
        "Its leaves curl up and turn brown, as if dead.",
        "When it rains, the leaves uncurl and turn green within hours.",
        "Ferns reproduce using spores.",
        "Scientists are studying how its cells survive drying out.",
      ],
      odd: 3,
      why: "Parça kuraklıkta kuruyup yağmurla yeniden canlanan eğreltiotunu anlatır. Eğreltiotlarının sporla çoğaldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The talipot palm flowers only once, after living for several decades.",
        "Its flower cluster is one of the largest of any plant.",
        "It contains millions of small flowers.",
        "After the fruits ripen, the palm dies.",
        "Palms are common in tropical countries.",
      ],
      odd: 4,
      why: "Parça bir kez çiçek açıp ölen talipot palmiyesini anlatır. Palmiyelerin tropik ülkelerde yaygın olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Rattan is a climbing palm that grows in the forests of Southeast Asia.",
        "Its long, flexible stems are used to make furniture.",
        "Furniture is sold in many shops.",
        "The plants climb by using hooks on their leaves.",
        "Harvesting rattan can provide income without cutting down trees.",
      ],
      odd: 2,
      why: "Parça Güneydoğu Asya'daki tırmanıcı palmiye rattanı anlatır. Mobilyanın pek çok dükkânda satıldığını söyleyen III. cümle konu dışıdır.",
    },
  ],
};
