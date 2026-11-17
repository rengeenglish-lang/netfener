import type { YokdilDeneme } from "./types";

export const FEN_74: YokdilDeneme = {
  no: 74,
  field: "fen",
  vocab: [
    [
      "Over thousands of years, wind and rain have ---- the soft rock into tall, pointed towers.",
      ["carved", "painted", "frozen", "melted", "polished with oil"],
      "Binlerce yıl boyunca rüzgâr ve yağmurun yumuşak kayayı uzun, sivri kulelere 'oyduğu' (carved) anlatılır.",
    ],
    [
      "The colourful layers of rock were ---- by minerals deposited in ancient lakes.",
      ["stained", "removed", "hidden", "cooled", "weighed"],
      "Renkli kaya katmanlarının eski göllerde biriken minerallerce 'boyandığı' (stained) anlatılır.",
    ],
    [
      "The circular structure is so large that it is most clearly ---- from space.",
      ["visible", "audible", "edible", "portable", "invisible"],
      "Dairesel yapının o kadar büyük olduğu ki en net uzaydan 'görülebildiği' (visible) anlatılır.",
    ],
    [
      "Because their summits are ----, many plants on these mountains are found nowhere else.",
      ["isolated", "crowded", "polluted", "flooded", "flat"],
      "Zirveleri 'yalıtılmış' (isolated) olduğu için bu dağlardaki pek çok bitkinin başka hiçbir yerde bulunmadığı anlatılır.",
    ],
    [
      "The flat surface of the salt makes it ideal for ---- the instruments on satellites.",
      ["calibrating", "launching", "repairing", "painting", "selling"],
      "Tuzun düz yüzeyinin uydulardaki aletleri 'ayarlamak' (calibrating) için ideal olduğu anlatılır.",
    ],
    [
      "The acidic water of the river ---- many of the metals in the surrounding rocks.",
      ["breaks down", "puts off", "turns down", "looks after", "gives up"],
      "Nehrin asitli suyunun çevredeki kayalardaki pek çok metali 'çözdüğü' (breaks down) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the first Christians arrived, the volcanic ash ---- into soft rock.",
      ["had hardened", "hardens", "has hardened", "will harden", "is hardening"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had hardened'.",
    ],
    [
      "If the rock had been harder, people ---- homes and churches inside it so easily.",
      ["could not have carved", "cannot carve", "will not carve", "had not carved", "do not carve"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'could not have carved'.",
    ],
    [
      "The structure ---- by astronauts on early space missions.",
      ["was photographed", "photographed", "has photographed", "photographs", "is photographing"],
      "Yapı fotoğraflanmıştır; edilgen geçmiş zaman: 'was photographed'.",
    ],
    [
      "---- the structure looks like a crater, it was not formed by an impact.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Yapının kratere benzemesi ile çarpmayla oluşmaması zıttır: 'Although'.",
    ],
    [
      "The mountains, ---- cliffs rise almost vertically from the forest, are difficult to climb.",
      ["whose", "who", "which", "whom", "where"],
      "Dağların uçurumları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only in the 1990s ---- scientists realise that the sinkholes formed a ring.",
      ["did", "had", "were", "have", "do"],
      "'Only in' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The Maya built their cities near sinkholes ---- they could obtain fresh water.",
      ["where", "which", "when", "whose", "that"],
      "'sinkholes' yer bildirir; Mayalar orada tatlı su elde eder: 'where'.",
    ],
    [
      "The flatter a surface is, ---- it is for measuring the height of the ground from space.",
      ["the more useful", "the most useful", "more useful", "most useful", "so useful"],
      "'The flatter ..., the more ...' paralel yapısı: 'the more useful'.",
    ],
    [
      "Scientists suggested that the river ---- as a model for conditions on Mars.",
      ["be studied", "is studied", "was studied", "to be studied", "studying"],
      "'suggest that' sonrası yalın fiil (subjunctive), edilgen: 'be studied'.",
    ],
    [
      "The river is said ---- red for thousands of years.",
      ["to have been", "being", "to be been", "was", "having be"],
      "Geçmişten süren durum için mastarın geçmiş biçimi: 'to have been'.",
    ],
    [
      "The inhabitants carved deep tunnels ---- they could hide from invaders.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Derin tünel oymalarının amacı istilacılardan saklanabilmektir: 'so that'.",
    ],
    [
      "The government had the area ---- as a geological park in 2009.",
      ["protected", "protect", "protecting", "to protect", "protects"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'protected'.",
    ],
    [
      "Had the asteroid struck elsewhere, the ring of sinkholes ---- formed.",
      ["would not have", "does not", "will not", "had not", "is not"],
      "Devrik üçüncü tip koşul cümlesi: 'would not have'.",
    ],
    [
      "Neither the explorers nor the scientists ---- such colourful rocks before.",
      ["had seen", "seeing", "to see", "has seen", "see to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had seen'.",
    ],
  ],
  cloze: [
    {
      text:
        "The landscape of Cappadocia, in central Türkiye, is famous for its tall, cone-shaped rock formations, often called fairy chimneys, which rise in their hundreds from the valleys. Millions of years ago, a series of volcanic eruptions covered the region with thick layers of ash, {1} over time the ash was compressed into a soft rock known as tuff. In some places, the tuff was covered by a layer of harder rock, such as basalt. As rain, wind and melting snow gradually wore away the soft tuff, the harder rock protected the material directly beneath it, {2} tall columns were left standing, often with a cap of harder rock balanced on top. Because the tuff was so soft, humans found it simple to dig into as well, {3} for many centuries the inhabitants of the region cut homes, storerooms, churches and monasteries into the rock. Many of the churches, particularly those in the valley of Göreme, are decorated with wall paintings dating from the Byzantine period, {4} the area is now protected as a UNESCO World Heritage Site. Today, Cappadocia is one of Türkiye's most popular tourist destinations, {5} visitors can see the landscape from hot-air balloons that rise above the valleys at dawn. However, erosion continues, and some formations are slowly being worn away.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Patlamaların bölgeyi külle kaplaması ve külün zamanla sıkışarak tüfe dönüşmesi birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["so", "but", "although", "unless", "until"],
          "Sert kayanın altındaki malzemeyi korumasının sonucu uzun sütunların kalmasıdır: 'so'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Kayanın oyulmasının kolay olması ve insanların yüzyıllarca oyması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Kiliselerin duvar resimleriyle süslenmesi ve bölgenin korunması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Bölgenin popüler olması ve ziyaretçilerin balonlardan izlemesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In parts of China, particularly in the north-western province of Gansu, there are hills whose slopes are striped with bands of red, orange, yellow, green and blue, so that from a distance they look as if they have been painted. These landscapes are an example of what Chinese geologists call Danxia landforms, a term used for scenery formed from red sandstone and similar rocks. The rocks were laid down as layers of sand, mud and gravel in ancient lakes and rivers millions of years ago, {1} each layer contains different minerals, which give it its distinctive colour. Iron compounds, for example, produce red and yellow colours, {2} other minerals produce greens and blues. Later, movements of the Earth's crust pushed the layers upwards and tilted them, {3} wind and rain then eroded the rocks, exposing the coloured bands on the slopes of the hills. The colours are often most striking after rain or in the low light of early morning and evening, {4} the area attracts large numbers of photographers. In 2010, several Danxia landscapes in southern China gained World Heritage status, {5} the colourful hills of Gansu have been protected as a geological park. However, the rapid growth of tourism has caused damage in some places, and visitors are now required to stay on raised walkways.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Katmanların birikmesi ve her katmanın farklı mineraller içermesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["while", "because", "unless", "until", "so that"],
          "Demir bileşiklerinin kırmızı ve sarı, diğer minerallerin yeşil ve mavi renk vermesi karşılaştırılır: 'while'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Katmanların yükselip eğilmesi ve sonra aşınması birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Renklerin belirli ışıkta çarpıcı olması ve bölgenin fotoğrafçıları çekmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "although"],
          "Bazı alanların listeye eklenmesi ve Gansu tepelerinin korunması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the soft rock is easily worn away, ----.",
      [
        "a cap of harder rock can protect the material beneath it",
        "rain is wet",
        "volcanoes erupt",
        "valleys are deep",
        "the inhabitants carved homes and churches into it for centuries",
      ],
      "'Although' zıtlık ister: yumuşak kaya kolayca aşınsa da sert bir kaya başlığı altındaki malzemeyi koruyabilir.",
    ],
    [
      "If the layers had not been pushed upwards and tilted, ----.",
      [
        "the coloured bands might not have been exposed on the hillsides",
        "rocks are hard",
        "rain falls",
        "minerals are colourful",
        "the area would have been added to UNESCO's World Heritage List in 2010",
      ],
      "Üçüncü tip koşul: katmanlar yükselip eğilmeseydi renkli bantlar yamaçlarda ortaya çıkmayabilirdi.",
    ],
    [
      "----, the structure looks like a giant target in the desert.",
      [
        "Seen from space",
        "Although deserts are dry",
        "Unless it rained",
        "Since sand is yellow",
        "While geologists were studying the different layers of rock",
      ],
      "Uzaydan görüldüğünde yapı çölde dev bir hedef tahtasına benzer.",
    ],
    [
      "Many species on the summits are found nowhere else ----.",
      [
        "because the mountains have been isolated for millions of years",
        "although the forest is large",
        "unless it rains",
        "so that climbers can see them",
        "while the novel described dinosaurs living on such a mountain",
      ],
      "Zirvelerdeki pek çok tür başka hiçbir yerde bulunmaz, çünkü dağlar milyonlarca yıldır yalıtılmış durumdadır.",
    ],
    [
      "Since there are almost no rivers on the peninsula, ----.",
      [
        "the sinkholes were the main source of fresh water for the Maya",
        "the peninsula is flat",
        "the Maya built cities",
        "rain is common",
        "an asteroid struck the region around sixty-six million years ago",
      ],
      "'Since' neden bildirir: yarımadada neredeyse hiç nehir olmadığından obruklar Mayaların başlıca tatlı su kaynağıydı.",
    ],
    [
      "Not only is the salt flat the largest in the world, ----.",
      [
        "but it is also one of the flattest places on Earth",
        "and salt is white",
        "since Bolivia is high",
        "so tourists visit",
        "unless the rainy season had covered it with water",
      ],
      "'Not only ... but also' yapısı tamamlanır: tuz düzlüğü yalnızca dünyanın en büyüğü olmakla kalmaz, Dünya'nın en düz yerlerinden biridir.",
    ],
    [
      "Once a thin layer of water covers the salt, ----.",
      [
        "the surface reflects the sky like a giant mirror",
        "salt dissolves",
        "water is clear",
        "the sky is blue",
        "the satellites had been calibrated using the flat surface",
      ],
      "Tuzun üzerini ince bir su tabakası kaplayınca yüzey gökyüzünü dev bir ayna gibi yansıtır.",
    ],
    [
      "Unless microorganisms can survive in very acidic water, ----.",
      [
        "they cannot live in the river",
        "rivers flow",
        "water is wet",
        "rocks contain iron",
        "the mines would not have been worked for thousands of years",
      ],
      "'Unless' olumsuz koşul: mikroorganizmalar çok asitli suda yaşayamadıkça nehirde var olamazlar.",
    ],
    [
      "The cliffs of the mountains are so steep ----.",
      [
        "that few people reached the summits before the twentieth century",
        "although forests surround them",
        "because rain falls",
        "unless climbers are careful",
        "while waterfalls pour down their sides into the forest",
      ],
      "Dağların uçurumları o kadar diktir ki yirminci yüzyıldan önce zirvelere pek az kişi ulaştı.",
    ],
    [
      "Even though the river looks lifeless, ----.",
      [
        "it contains many kinds of microorganisms",
        "it is red",
        "it flows into the sea",
        "mines are old",
        "its water is extremely acidic",
      ],
      "'Even though' zıtlık ister: nehir cansız görünse de pek çok mikroorganizma türü barındırır.",
    ],
    [
      "As the structure is around forty kilometres across, ----.",
      [
        "it is difficult to recognise from the ground",
        "deserts are large",
        "sand moves",
        "the rocks are old",
        "it was once thought to have been formed by a meteorite",
      ],
      "Yapı yaklaşık kırk kilometre çapında olduğu için yerden tanınması zordur.",
    ],
  ],
  enTr: [
    [
      "The harder rock protected the soft rock beneath it.",
      [
        "Daha sert kaya altındaki yumuşak kayayı korudu.",
        "Yumuşak kaya üstündeki sert kayayı korudu.",
        "Sert kaya yumuşak kayayı aşındırdı.",
        "Hiçbir kaya korunmadı.",
        "Kaya yoktu.",
      ],
      "'The harder rock protected' 'daha sert kaya korudu', 'the soft rock beneath it' 'altındaki yumuşak kayayı' karşılığıdır.",
    ],
    [
      "Iron compounds give the rocks their red colour.",
      [
        "Demir bileşikleri kayalara kırmızı rengini verir.",
        "Kayalar demir bileşiklerine kırmızı rengini verir.",
        "Demir bileşikleri kayaları maviye boyar.",
        "Kayaların hiç rengi yoktur.",
        "Kaya yoktur.",
      ],
      "'Iron compounds give the rocks' 'demir bileşikleri kayalara verir', 'their red colour' 'kırmızı rengini' karşılığıdır.",
    ],
    [
      "The rings were formed by the erosion of rock layers of different hardness.",
      [
        "Halkalar farklı sertlikteki kaya katmanlarının aşınmasıyla oluştu.",
        "Halkalar bir göktaşı çarpmasıyla oluştu.",
        "Kaya katmanları halkaları aşındırdı.",
        "Halkalar hiç oluşmadı.",
        "Halka yoktu.",
      ],
      "'The rings were formed' 'halkalar oluştu', 'by the erosion of rock layers of different hardness' 'farklı sertlikteki kaya katmanlarının aşınmasıyla' karşılığıdır.",
    ],
    [
      "Waterfalls pour down the cliffs into the forest below.",
      [
        "Şelaleler uçurumlardan aşağıdaki ormana dökülür.",
        "Orman şelalelere doğru yükselir.",
        "Uçurumlar şelaleleri durdurur.",
        "Orada hiç şelale yoktur.",
        "Orman yoktur.",
      ],
      "'Waterfalls pour down the cliffs' 'şelaleler uçurumlardan dökülür', 'into the forest below' 'aşağıdaki ormana' karşılığıdır.",
    ],
    [
      "The salt crust is several metres thick in places.",
      [
        "Tuz kabuğu yer yer birkaç metre kalınlığındadır.",
        "Tuz kabuğu her yerde birkaç santimetre incedir.",
        "Birkaç metre tuz kabuğunu kaplar.",
        "Tuz kabuğu yoktur.",
        "Tuz yoktur.",
      ],
      "'The salt crust is several metres thick' 'tuz kabuğu birkaç metre kalınlığındadır', 'in places' 'yer yer' karşılığıdır.",
    ],
    [
      "The water is as acidic as lemon juice.",
      [
        "Su limon suyu kadar asitlidir.",
        "Su limon suyundan çok daha tatlıdır.",
        "Limon suyu suyu asitli yapar.",
        "Su hiç asitli değildir.",
        "Su yoktur.",
      ],
      "'The water is as acidic' 'su kadar asitlidir', 'as lemon juice' 'limon suyu' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "İnsanlar yüzyıllar boyunca yumuşak kayaya evler ve kiliseler oydu.",
      [
        "For centuries, people carved homes and churches into the soft rock.",
        "For centuries, the soft rock carved homes and churches into people.",
        "People never lived in the rock.",
        "Churches carved the soft rock.",
        "There were no people.",
      ],
      "'İnsanlar yüzyıllar boyunca oydu' 'for centuries, people carved', 'yumuşak kayaya evler ve kiliseler' 'homes and churches into the soft rock' karşılığıdır.",
    ],
    [
      "Renkler en çok yağmurdan sonra çarpıcıdır.",
      [
        "The colours are most striking after rain.",
        "The colours disappear completely after rain.",
        "Rain is most striking after the colours.",
        "The rocks have no colour.",
        "There is no rain.",
      ],
      "'Renkler en çok çarpıcıdır' 'the colours are most striking', 'yağmurdan sonra' 'after rain' karşılığıdır.",
    ],
    [
      "Yapı bir zamanlar bir göktaşı çarpmasıyla oluştuğu sanılıyordu.",
      [
        "The structure was once thought to have been formed by a meteorite impact.",
        "The structure was once thought to have formed a meteorite.",
        "A meteorite thought about the structure.",
        "Nobody has ever studied the structure.",
        "There is no structure.",
      ],
      "'Yapı bir zamanlar sanılıyordu' 'the structure was once thought', 'bir göktaşı çarpmasıyla oluştuğu' 'to have been formed by a meteorite impact' karşılığıdır.",
    ],
    [
      "Obruklar dev bir kraterin kenarı boyunca yarım daire oluşturur.",
      [
        "The sinkholes form a half-circle along the edge of a giant crater.",
        "The crater forms a half-circle along the edge of the sinkholes.",
        "The sinkholes are spread randomly across the region.",
        "The half-circle forms the sinkholes.",
        "There are no sinkholes.",
      ],
      "'Obruklar yarım daire oluşturur' 'the sinkholes form a half-circle', 'dev bir kraterin kenarı boyunca' 'along the edge of a giant crater' karşılığıdır.",
    ],
    [
      "Tuz düzlüğünün altında büyük miktarda lityum bulunur.",
      [
        "Large amounts of lithium are found beneath the salt flat.",
        "The salt flat is found beneath large amounts of lithium.",
        "There is no lithium in the region.",
        "Lithium forms the salt flat.",
        "There is no salt flat.",
      ],
      "'Büyük miktarda lityum bulunur' 'large amounts of lithium are found', 'tuz düzlüğünün altında' 'beneath the salt flat' karşılığıdır.",
    ],
    [
      "Bilim insanları nehri Mars'taki koşulların bir modeli olarak inceler.",
      [
        "Scientists study the river as a model for conditions on Mars.",
        "Scientists study Mars as a model for conditions in the river.",
        "The river studies the scientists.",
        "Nobody studies the river.",
        "There is no river.",
      ],
      "'Bilim insanları nehri inceler' 'scientists study the river', 'Mars'taki koşulların bir modeli olarak' 'as a model for conditions on Mars' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the Sahara Desert of Mauritania, in north-western Africa, lies a huge circular feature around forty kilometres across, consisting of a series of rings of rock, one inside another, rather like a target. Known as the Richat Structure, or more popularly as the Eye of the Sahara, it is difficult to recognise from the ground but stands out clearly in images taken from space, and astronauts on early space missions used it as a landmark. Because of its circular shape, scientists at first suspected that it might be a crater formed by the impact of a meteorite. However, detailed studies found none of the features typical of impact craters, such as rocks that have been melted or shocked by enormous pressure. Geologists now believe that the structure was formed by processes within the Earth. Around a hundred million years ago, molten rock rising from below pushed the overlying layers of rock upwards into a dome. Over millions of years, the top of the dome was gradually eroded by wind and water, exposing the layers of rock beneath. Since these layers differ in their hardness, they were worn away at different rates: the harder layers remained as ridges, while the softer layers were eroded into valleys, producing the pattern of concentric rings visible today. The structure has attracted the attention not only of scientists but also of people with more unusual ideas, some of whom have claimed that it was the site of the legendary lost city of Atlantis. Geologists reject such claims, pointing out that the rings are made of natural rock formations and that there is no archaeological evidence of a city.",
      questions: [
        [
          "According to the passage, scientists at first thought the structure might be ----.",
          [
            "a crater formed by a meteorite",
            "an ancient city",
            "a dried-up lake",
            "a series of ridges and valleys formed by erosion of rock layers of different hardness",
            "the remains of a volcano",
          ],
          "Metne göre dairesel biçimi nedeniyle başlangıçta bir göktaşı çarpmasıyla oluşmuş bir krater olabileceğinden şüphelendiler.",
        ],
        [
          "The rings of the structure were formed because ----.",
          [
            "layers of rock of different hardness eroded at different rates",
            "a meteorite struck the desert",
            "people built walls",
            "water filled the valleys",
            "the rocks melted",
          ],
          "Sert katmanlar sırt olarak kaldı, yumuşak katmanlar vadilere aşındı.",
        ],
        [
          "It can be understood from the passage that geologists ----.",
          [
            "reject the idea that the structure was a lost city",
            "believe it was Atlantis",
            "have found evidence of a city",
            "cannot explain the structure at all",
            "think it was built by astronauts",
          ],
          "Halkaların doğal kaya oluşumları olduğunu ve bir kente dair arkeolojik kanıt olmadığını belirtirler.",
        ],
      ],
    },
    {
      text:
        "In the region where Venezuela, Brazil and Guyana meet, enormous flat-topped mountains rise abruptly from the surrounding rainforest, their sheer cliffs often hundreds of metres high. These mountains are known by a local word, tepui, meaning 'house of the gods'. The most famous, Mount Roraima, rises to a height of around 2,800 metres, and its summit plateau covers more than thirty square kilometres. The tepuis are made of sandstone that is among the oldest rock on Earth, laid down as sand more than a billion years ago. Over immense periods of time, the surrounding rock was gradually eroded away, leaving these blocks standing like islands. Their summits are often shrouded in cloud and receive very heavy rainfall, and waterfalls pour down their sides; the world's highest waterfall, Angel Falls, plunges almost a kilometre from the edge of one of them. Because the summits are cut off from the forest below by the steep cliffs, and from one another by great distances, they have been compared to islands in the sky. Many of the plants and animals found on them, including carnivorous plants, small frogs and unusual insects, are found nowhere else, sometimes only on a single tepui. In the late nineteenth century, reports of Roraima's strange landscape are said to have inspired the British writer Arthur Conan Doyle to write a novel about explorers who discover dinosaurs living on an isolated plateau in South America. In reality, no dinosaurs survive there, but scientists exploring the tepuis continue to discover new species, and many of the summits remain largely unexplored.",
      questions: [
        [
          "According to the passage, tepuis were formed when ----.",
          [
            "the surrounding rock was eroded away over long periods",
            "volcanoes erupted in the rainforest",
            "glaciers carved the mountains",
            "dinosaurs and other animals survived on an isolated plateau in South America",
            "the sea level rose",
          ],
          "Metne göre çevredeki kaya çok uzun sürelerde aşınarak bu bloklar adalar gibi ayakta kaldı.",
        ],
        [
          "The summits of tepuis are compared to islands because ----.",
          [
            "they are isolated from the forest and from one another",
            "they are surrounded by water",
            "they are covered in sand",
            "they float in the clouds",
            "they are very small",
          ],
          "Zirveler dik uçurumlarla aşağıdaki ormandan ve büyük mesafelerle birbirinden ayrılmıştır.",
        ],
        [
          "It can be understood from the passage that the tepuis ----.",
          [
            "are still not fully explored",
            "contain living dinosaurs",
            "have been completely studied",
            "are made of young rock",
            "have no unique species",
          ],
          "Bilim insanları yeni türler keşfetmeyi sürdürmekte ve zirvelerin çoğu büyük ölçüde keşfedilmemiş kalmaktadır.",
        ],
      ],
    },
    {
      text:
        "The Yucatán Peninsula in south-eastern Mexico has almost no rivers or lakes on its surface, since rainwater quickly sinks through the porous limestone rock into underground channels and caves. In many places, however, the roofs of these caves have collapsed, creating deep natural pits that expose the groundwater below. These sinkholes, known locally as cenotes, from a Maya word meaning 'well', were the main source of fresh water for the ancient Maya, and many of their cities were built near them. Some cenotes were also regarded as sacred, and archaeologists have found offerings, including pottery, jewellery and human remains, at the bottom of a famous cenote at the ancient city of Chichén Itzá. In the late twentieth century, scientists noticed something remarkable about the distribution of cenotes in the region. Maps showed that many of them were arranged in a great arc, around 170 kilometres across, curving through the northern part of the peninsula. This arc was found to mark the edge of an enormous buried crater, which had been formed when an asteroid around ten kilometres wide hit the planet some sixty-six million years in the past. The collision is widely believed to have caused the mass extinction that killed the dinosaurs and many other forms of life. The crater, named after a nearby village called Chicxulub, is now buried beneath hundreds of metres of younger rock, and the ring of cenotes is thought to have formed because the rocks along its edge were fractured, allowing water to dissolve the limestone more easily. Today, the cenotes are popular with swimmers and cave divers, although scientists warn that pollution from rapid development threatens the groundwater.",
      questions: [
        [
          "According to the passage, the Yucatán Peninsula has few rivers because ----.",
          [
            "rainwater sinks quickly through the limestone",
            "it rarely rains there",
            "the Maya drained them",
            "an asteroid struck the region around sixty-six million years ago",
            "the land is very high",
          ],
          "Metne göre yağmur suyu gözenekli kireçtaşından yeraltı kanallarına hızla süzülür.",
        ],
        [
          "The writer mentions the arc of cenotes in order to show that ----.",
          [
            "it reveals the edge of a buried crater",
            "the Maya built them",
            "the region has many rivers",
            "divers prefer it",
            "the cenotes are all sacred",
          ],
          "Yay, büyük bir gömülü kraterin kenarını işaret eder.",
        ],
        [
          "It can be understood from the passage that scientists are concerned that ----.",
          [
            "development may pollute the groundwater",
            "the cenotes will dry up because of the Maya",
            "too few people visit the cenotes",
            "the crater is still active",
            "the asteroid will return",
          ],
          "Hızlı gelişmeden kaynaklanan kirlilik yeraltı suyunu tehdit etmektedir.",
        ],
      ],
    },
    {
      text:
        "High in the Andes mountains of south-western Bolivia, at an altitude of around 3,600 metres, lies the largest salt flat in the world. Salar de Uyuni covers more than ten thousand square kilometres, an area larger than some small countries, and its surface is a brilliant white crust of salt that is several metres thick in places. The salt flat formed from a series of prehistoric lakes that once covered the area; as the climate became drier, the lakes evaporated, leaving behind the dissolved salts they had contained. Salar de Uyuni is also one of the flattest places on Earth: across its whole area, the height of the surface varies by less than a metre. This flatness, along with clear skies and bright salt, allows engineers to check satellite sensors that record the height of the Earth's surface and the thickness of ice sheets, since scientists can compare the satellite measurements with an area whose shape is accurately known. In wet months, shallow water often spreads over parts of the salt, turning the flat into a vast mirror that reflects the sky so perfectly that the horizon seems to disappear, a sight that attracts many tourists. Beneath the crust lies a layer of salty water that contains large amounts of lithium, a metal used in the batteries of mobile phones and electric cars. Bolivia has begun to develop the resource, but the process of extraction requires large amounts of water in an extremely dry region, and some local communities and scientists have raised concerns about its possible effects on the environment and on the flat itself.",
      questions: [
        [
          "According to the passage, the salt flat formed when ----.",
          [
            "prehistoric lakes evaporated and left their salts behind",
            "the sea flooded the mountains",
            "volcanoes produced salt",
            "a thin layer of water covered the salt during the rainy season",
            "miners extracted lithium",
          ],
          "Metne göre iklim kuraklaştıkça göller buharlaştı ve içerdikleri çözünmüş tuzları geride bıraktı.",
        ],
        [
          "Salar de Uyuni is useful for calibrating satellites because ----.",
          [
            "its surface is extremely flat and reflective",
            "it is very cold",
            "it is close to the sea",
            "it contains lithium",
            "it is often cloudy",
          ],
          "Yüzeyin yüksekliği bir metreden az değişir ve tuzun yansıtıcı yüzeyi ile açık gökyüzü idealdir.",
        ],
        [
          "It can be understood from the passage that lithium extraction ----.",
          [
            "has raised environmental concerns",
            "requires no water",
            "has been stopped",
            "is supported by everyone",
            "has made the flat larger",
          ],
          "Çıkarma son derece kuru bir bölgede büyük miktarda su gerektirir ve çevre kaygıları dile getirilmiştir.",
        ],
      ],
    },
    {
      text:
        "On the north-eastern coast of Brazil lies one of the strangest landscapes in South America: an area of more than a thousand square kilometres covered by tall white sand dunes, between which lie thousands of lagoons of clear blue and green water. The area, known as Lençóis Maranhenses, from a Portuguese word for bed sheets, looks like a desert, but it receives a great deal of rain. Most of the rain falls between January and June, and because a layer of rock beneath the sand prevents the water from draining away, the water collects in the hollows between the dunes, forming lagoons that can be several metres deep and up to a hundred metres long. The lagoons are at their fullest around July and August, after which the strong winds and the heat of the dry season cause many of them to shrink or dry up completely, while the wind slowly moves the dunes inland. Remarkably, many of the lagoons contain fish, even though they may have been completely dry a few months earlier. Scientists believe that some of the fish are carried into the lagoons from nearby rivers when the land floods, and that birds may bring in the eggs of others. In addition, at least one species of fish appears to survive the dry season by burying itself in the damp mud at the bottom of a lagoon and remaining inactive until the rains return. The area has been protected as a national park since 1981, and it has become increasingly popular with tourists. However, scientists point out that changes in rainfall patterns could affect the delicate balance on which the lagoons depend.",
      questions: [
        [
          "According to the passage, the lagoons form because ----.",
          [
            "rock beneath the sand stops rainwater from draining away",
            "the sea floods the dunes",
            "rivers flow into the area all year",
            "strong winds and the heat of the dry season move the dunes inland",
            "people dig them",
          ],
          "Metne göre kumun altındaki kaya tabakası suyun süzülmesini önler ve su kum tepeleri arasındaki çukurlarda toplanır.",
        ],
        [
          "The writer mentions fish in the lagoons to highlight ----.",
          [
            "how life survives in lagoons that dry up each year",
            "why tourists visit",
            "the depth of the lagoons",
            "the colour of the water",
            "how dunes move",
          ],
          "Lagünler birkaç ay önce tamamen kuru olsa bile pek çoğunda balık bulunur ve bilim insanları bunun nasıl olduğunu açıklamaya çalışır.",
        ],
        [
          "It can be understood from the passage that scientists are concerned that ----.",
          [
            "changes in rainfall could upset the balance of the lagoons",
            "the dunes will disappear because of fish",
            "too few tourists visit the park",
            "the rock layer will dissolve",
            "the area will become a forest",
          ],
          "Yağış desenlerindeki değişiklikler lagünlerin bağlı olduğu hassas dengeyi etkileyebilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the Waitomo caves in New Zealand, the ceilings are lit up by thousands of tiny blue lights. ---- Insects attracted by the light become caught in the threads and are eaten.",
      [
        "The lights are produced by the larvae of a small fly, which hang sticky threads from the cave roof.",
        "New Zealand has many caves.",
        "Blue is a cool colour.",
        "Visitors travel through the caves in small boats, in silence, so as not to disturb the larvae.",
        "Insects have six legs.",
      ],
      "Boşluk ışıkların kaynağını açıklayıp böceklerin ipliklere yakalanmasına bağlanan bir cümle gerektirir; boşluğa ışıkların mağara tavanından yapışkan iplikler sarkıtan küçük bir sineğin larvalarınca üretildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the Nevada desert stands a small, brightly coloured mound from which jets of hot water continuously spray into the air. ---- Minerals in the water have since built up the mound, and algae give it its colours.",
      [
        "It formed accidentally after a well was drilled in the area in the twentieth century and hot water began to escape.",
        "Nevada is a dry state.",
        "Deserts are hot during the day.",
        "The site is on private land, and visitors can see it only on guided tours.",
        "Water boils at a hundred degrees.",
      ],
      "Boşluk tümseğin nasıl oluştuğunu anlatıp minerallerin birikmesine bağlanan bir cümle gerektirir; boşluğa tümseğin yirminci yüzyılda bölgede bir kuyu açıldıktan sonra kazara oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "One of the largest hot springs in the world, in Yellowstone National Park, is surrounded by rings of brilliant orange, yellow and green. ---- The water at the centre is too hot for them, so it remains a deep blue.",
      [
        "The colours are produced by mats of microorganisms, each type living at a particular temperature.",
        "Yellowstone was the first national park.",
        "Hot springs attract tourists.",
        "In 2016, the park authorities warned visitors to stay on the boardwalks after a man fell into a hot spring.",
        "Water can be very hot.",
      ],
      "Boşluk renklerin kaynağını açıklayıp merkezdeki suyun 'onlar' için çok sıcak olmasına bağlanan bir cümle gerektirir; boşluğa renklerin her biri belirli bir sıcaklıkta yaşayan mikroorganizma katmanlarınca üretildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In Western Australia, a granite cliff around fifteen metres high has a curved shape that resembles a giant ocean wave about to break. ---- Streaks of different colours, caused by minerals washed down by rain, add to the effect.",
      [
        "Scientists believe the shape was formed as the rock beneath the soil was slowly worn away by water before the surrounding ground was eroded.",
        "Australia is a large country.",
        "Granite is a hard rock.",
        "The rock is part of a larger outcrop that attracts many visitors each year.",
        "Waves break on beaches.",
      ],
      "Boşluk biçimin nasıl oluştuğunu açıklayıp renk çizgilerine bağlanan bir cümle gerektirir; boşluğa biçimin çevredeki toprak aşınmadan önce toprağın altındaki kayanın suyla yavaşça aşınmasıyla oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Blue holes are deep, roughly circular openings in the sea floor, often found in shallow coastal waters. ---- Their deep blue colour contrasts sharply with the pale turquoise of the shallow water around them.",
      [
        "Most were formed as caves during ice ages, when sea levels were lower, and were later flooded as the sea rose.",
        "The sea is salty.",
        "Coastal waters are often warm.",
        "Divers explore them, although the lack of oxygen at depth can make this dangerous.",
        "Blue is a popular colour.",
      ],
      "Boşluk mavi deliklerin nasıl oluştuğunu açıklayıp renk karşıtlığına bağlanan bir cümle gerektirir; boşluğa çoğunun buzul çağlarında deniz seviyesi düşükken mağara olarak oluşup sonra su altında kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Under the ground in Cappadocia lie entire underground cities, carved out of the soft rock over many centuries. ---- Some could shelter thousands of people, along with livestock and stored grain.",
      [
        "The cities had many levels, connected by narrow passages and ventilation shafts.",
        "Cappadocia is in central Türkiye.",
        "Rock is heavy.",
        "One of the largest was rediscovered in 1963 when a resident knocked down a wall in his house.",
        "Animals need food.",
      ],
      "Boşluk kentlerin yapısını anlatıp barındırma kapasitesine bağlanan bir cümle gerektirir; boşluğa kentlerin dar geçitler ve havalandırma bacalarıyla bağlanan çok katlı yapıda olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The Stone Forest in south-western China consists of thousands of tall limestone pillars.",
        "They were formed as rainwater slowly dissolved the rock.",
        "Rain falls heavily in some parts of China in summer.",
        "Some pillars are more than thirty metres high.",
        "Local legends describe the pillars as people turned to stone.",
      ],
      odd: 2,
      why: "Parça Çin'deki Taş Orman'ı anlatır. Çin'in bazı bölgelerinde yazın şiddetli yağmur yağdığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On a beach in New Zealand lie dozens of large, almost perfectly round boulders.",
        "They formed millions of years ago in mud on the sea floor.",
        "Minerals gradually built up around a central core.",
        "Rugby is a popular sport in New Zealand.",
        "Erosion of the cliffs has since exposed them on the beach.",
      ],
      odd: 3,
      why: "Parça Yeni Zelanda'daki yuvarlak kayaları anlatır. Ragbinin Yeni Zelanda'da popüler bir spor olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some of the highest sand dunes in the world are found in Namibia.",
        "Their red colour comes from iron oxide coating the sand grains.",
        "The dunes are constantly reshaped by the wind.",
        "Visitors climb them to watch the sunrise.",
        "Namibia became independent in 1990.",
      ],
      odd: 4,
      why: "Parça Namibya'daki yüksek kum tepelerini anlatır. Namibya'nın 1990'da bağımsız olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On the shore of a lake in Patagonia are caves with walls of smooth, swirling marble.",
        "They were carved by waves over thousands of years.",
        "The walls reflect the blue water of the lake.",
        "Marble is used to make statues.",
        "Visitors can reach the caves only by boat.",
      ],
      odd: 3,
      why: "Parça Patagonya'daki mermer mağaraları anlatır. Mermerin heykel yapımında kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ha Long Bay in northern Vietnam contains nearly two thousand limestone islands.",
        "Many rise steeply from the water and are covered in forest.",
        "Vietnam exports large amounts of rice.",
        "The islands were formed as the limestone was dissolved over millions of years.",
        "Some contain large caves with impressive rock formations.",
      ],
      odd: 2,
      why: "Parça Ha Long Körfezi'ndeki kireçtaşı adaları anlatır. Vietnam'ın büyük miktarda pirinç ihraç ettiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some volcanic eruptions produce long, thin strands of glass.",
        "They form when wind stretches drops of molten lava.",
        "The strands are sometimes called 'Pele's hair', after a Hawaiian goddess.",
        "Hawaii is a popular holiday destination.",
        "They can be sharp and irritate the skin and eyes.",
      ],
      odd: 3,
      why: "Parça volkanik camdan ince iplikleri anlatır. Hawaii'nin popüler bir tatil yeri olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
