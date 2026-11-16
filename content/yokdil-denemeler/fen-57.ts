import type { YokdilDeneme } from "./types";

export const FEN_57: YokdilDeneme = {
  no: 57,
  field: "fen",
  vocab: [
    [
      "The tree had been known only from fossils and was believed to have been ---- for millions of years.",
      ["extinct", "famous", "visible", "delicious", "generous"],
      "Ağacın yalnızca fosillerden bilindiği ve milyonlarca yıldır 'nesli tükenmiş' (extinct) sanıldığı anlatılır.",
    ],
    [
      "The fungus is carried from tree to tree by beetles that ---- beneath the bark.",
      ["breed", "sing", "paint", "vote", "shine"],
      "Mantarın kabuğun altında 'üreyen' (breed) böceklerce ağaçtan ağaca taşındığı anlatılır.",
    ],
    [
      "Because all the plants are genetically identical, a single disease can ---- an entire crop.",
      ["wipe out", "look after", "take up", "put on", "bring up"],
      "Bütün bitkiler genetik olarak özdeş olduğundan tek bir hastalığın tüm ürünü 'yok edebildiği' (wipe out) anlatılır.",
    ],
    [
      "The plant has only two leaves, which keep growing ---- throughout its long life.",
      ["continuously", "rarely", "loudly", "suddenly", "politely"],
      "Bitkinin yalnızca iki yaprağı olduğu ve bunların uzun ömrü boyunca 'sürekli' (continuously) uzadığı anlatılır.",
    ],
    [
      "Even rainwater dripping from the leaves of the tree can ---- the skin.",
      ["irritate", "decorate", "comfort", "measure", "feed"],
      "Ağacın yapraklarından damlayan yağmur suyunun bile cildi 'tahriş edebildiği' (irritate) anlatılır.",
    ],
    [
      "Scientists managed to ---- a living plant from tissue found in seeds buried in the frozen ground.",
      ["regenerate", "punish", "dissolve", "advertise", "melt"],
      "Bilim insanlarının donmuş toprağa gömülü tohumlarda bulunan dokudan canlı bir bitkiyi 'yeniden oluşturmayı' (regenerate) başardığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the trees were found in 1994, they ---- only from fossils.",
      ["had been known", "are known", "have been known", "will be known", "know"],
      "Geçmişteki bir andan önce süregelmiş edilgen durum: 'had been known'.",
    ],
    [
      "If the disease had not reached Britain, millions of elm trees ---- today.",
      ["might still be standing", "will stand", "stand", "had stood", "would have stood"],
      "Karma koşul: geçmişteki koşulun bugüne etkisi: 'might still be standing'.",
    ],
    [
      "The exact location of the trees ---- secret to protect them from disease.",
      ["has been kept", "has kept", "keeps", "is keeping", "kept"],
      "Yer gizli tutulmuştur; edilgen yapı: 'has been kept'.",
    ],
    [
      "---- the fruit looks like a small apple, it is extremely poisonous.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Meyvenin küçük bir elmaya benzemesi ile son derece zehirli olması zıttır: 'Although'.",
    ],
    [
      "The ranger, ---- discovery surprised botanists, was exploring a deep canyon.",
      ["whose", "who", "which", "whom", "where"],
      "Korucunun keşfi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the old variety had been destroyed by disease ---- growers switch to a new one.",
      ["did", "had", "were", "have", "do not"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The plant grows in the Namib Desert, ---- it may receive almost no rain for years.",
      ["where", "which", "when", "whose", "that"],
      "'Namib Desert' yer bildirir; orada yıllarca yağmur almayabilir: 'where'.",
    ],
    [
      "The more the leaves are touched, ---- the pain becomes.",
      ["the worse", "the worst", "worse", "worst", "so bad"],
      "'The more ..., the worse ...' paralel yapısı: 'the worse'.",
    ],
    [
      "The authorities insisted that visitors ---- the trees.",
      ["not touch", "do not touch", "did not touch", "not to touch", "not touching"],
      "'insist that' sonrası olumsuz yalın fiil (subjunctive): 'not touch'.",
    ],
    [
      "The seeds are thought ---- by squirrels about 32,000 years ago.",
      ["to have been buried", "burying", "to bury", "buried", "having buried"],
      "Geçmişe ait edilgen eylem için mastarın geçmiş edilgen biçimi: 'to have been buried'.",
    ],
    [
      "The fungus blocks the vessels that carry water, ---- the tree slowly dies.",
      ["so", "unless", "although", "whereas", "as if"],
      "Damarların tıkanmasının sonucu ağacın yavaş yavaş ölmesidir: 'so'.",
    ],
    [
      "Botanists had the ranger ---- them to the canyon.",
      ["lead", "leading", "to lead", "led", "be led"],
      "'have sb do sth' ettirgen yapısında yalın fiil: 'lead'.",
    ],
    [
      "Had the growers planted more varieties, the disease ---- so much damage.",
      ["might not have caused", "causes", "will cause", "had caused", "is causing"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have caused'.",
    ],
    [
      "Both the bark and the sap of the tree ---- dangerous to humans.",
      ["are", "is", "being", "to be", "has been"],
      "'Both ... and' çoğul özne alır: 'are'.",
    ],
  ],
  cloze: [
    {
      text:
        "In September 1994, a park ranger named David Noble was exploring a remote, steep-sided canyon in a national park in the Blue Mountains, west of Sydney, {1} he noticed a group of tall trees with strange, bubbly bark. He took a small branch home to identify it, {2} when botanists examined it, they could hardly believe what they saw. The tree belonged to a group of conifers that had been known only from fossils and were thought to have died out about two million years ago. The discovery was compared to finding a living dinosaur. Fewer than a hundred adult Wollemi pines exist in the wild, all growing in a few small groups in canyons, {3} genetic studies have shown that they are almost identical to one another. To protect them from visitors and disease, the exact location has been kept secret, {4} plants grown from cuttings have been sold to the public around the world, so that the species is less likely to disappear. In 2019, when huge bushfires swept through the area, firefighters were lowered from helicopters to set up a watering system in the canyon, {5} the trees survived.",
      blanks: [
        [
          "(21) ----",
          ["when", "until", "unless", "although", "so that"],
          "Korucunun kanyonu keşfetmesi sırasında ağaçları fark etmesi zaman bildirir: 'when'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Dalı eve götürmesi ve botanikçilerin incelemesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Az sayıda olmaları ve genetik olarak neredeyse özdeş olmaları birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["but", "and", "so", "or", "for"],
          "Yerin gizli tutulması ile fidanların dünyaya satılması karşılaştırılır: 'but'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Sulama sisteminin kurulması ve ağaçların hayatta kalması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "For centuries, elm trees were among the most familiar sights of the European countryside, lining roads and fields and growing in the parks of cities. In the early twentieth century, however, a fungal disease began to kill large numbers of them. It was first studied in detail in the Netherlands, {1} it became known as Dutch elm disease, although it probably originated in Asia. The fungus is spread by bark beetles, which breed beneath the bark of dying elms {2} then fly to healthy trees, carrying the spores of the fungus on their bodies. Once inside a tree, the fungus spreads through the vessels that carry water. The tree responds by blocking these vessels, {3} this prevents water from reaching the leaves, which turn yellow and wither. In the late 1960s, a much more aggressive form of the fungus arrived in Britain, probably in a shipment of logs from North America, {4} within about fifteen years more than twenty-five million elms had died. The landscape of many areas was permanently changed. Scientists have since developed varieties of elm that are resistant to the disease, {5} a few old trees that have survived are being studied to find out why they were not affected.",
      blanks: [
        [
          "(26) ----",
          ["so", "but", "or", "unless", "although"],
          "Hastalığın Hollanda'da incelenmesinin sonucu 'Hollanda karaağaç hastalığı' adını almasıdır: 'so'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Böceklerin kabuk altında üremesi ve sonra sağlıklı ağaçlara uçması birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["but", "and", "so", "or", "since"],
          "Ağacın damarları tıkayarak tepki vermesi ile bunun suyun yapraklara ulaşmasını engellemesi beklenmedik bir zıtlıktır: 'but'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Daha saldırgan türün gelmesi ve on beş yılda milyonlarca ağacın ölmesi birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Dayanıklı türlerin geliştirilmesi ve hayatta kalan ağaçların incelenmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although fewer than a hundred adult Wollemi pines survive in the wild, ----.",
      [
        "the species has been spread around the world in gardens",
        "pines are trees",
        "Australia has many parks",
        "canyons are deep",
        "the park ranger who found them had been exploring a remote canyon west of Sydney in 1994",
      ],
      "'Although' zıtlık ister: doğada yüzden az yetişkin Wollemi çamı kalmış olsa da tür bahçeler aracılığıyla dünyaya yayılmıştır.",
    ],
    [
      "If the beetles did not carry the spores from tree to tree, ----.",
      [
        "the disease would spread much more slowly",
        "elms are tall",
        "fungi grow in the dark",
        "beetles have wings",
        "the aggressive form of the fungus would have reached Britain in a shipment of logs",
      ],
      "İkinci tip koşul: böcekler sporları ağaçtan ağaca taşımasaydı hastalık çok daha yavaş yayılırdı.",
    ],
    [
      "----, the banana industry switched to a different variety.",
      [
        "After the disease had destroyed plantations of the old variety",
        "Although bananas are yellow",
        "Unless the fruit was sweet",
        "Since bananas grow in the tropics",
        "While the growers were exporting large quantities of fruit to Europe and North America",
      ],
      "Hastalık eski çeşidin plantasyonlarını yok ettikten sonra muz sektörü farklı bir çeşide geçti.",
    ],
    [
      "The plant can survive in the desert ----.",
      [
        "because it absorbs moisture from the fog that drifts in from the sea",
        "although deserts are large",
        "unless it rains every day",
        "so that tourists can visit it",
        "while the Namib Desert stretches along the coast of south-western Africa for many hundreds of kilometres",
      ],
      "Bitki, denizden sürüklenen sisten nem soğurduğu için çölde hayatta kalabilir.",
    ],
    [
      "Since the sap of the tree can blister the skin, ----.",
      [
        "people are warned not to shelter beneath it during rain",
        "trees produce sap",
        "the Caribbean is warm",
        "beaches are sandy",
        "the explorer who was killed by a poisoned arrow had sailed to Florida in the early sixteenth century",
      ],
      "'Since' neden bildirir: ağacın özsuyu cildi kabartabildiğinden insanlar yağmurda altına sığınmamaları konusunda uyarılır.",
    ],
    [
      "Not only does the plant's sting cause intense pain, ----.",
      [
        "but the pain can also return for months afterwards",
        "and Australia is hot",
        "since leaves are green",
        "so hairs are tiny",
        "unless the scientists had found that the poison was similar to that of spiders",
      ],
      "'Not only ... but also' yapısı tamamlanır: bitkinin batması yalnızca yoğun acıya neden olmakla kalmaz, acı aylarca tekrarlayabilir.",
    ],
    [
      "Once the scientists had grown the tissue in the laboratory, ----.",
      [
        "it developed into plants that produced flowers and seeds",
        "laboratories are clean",
        "Siberia is cold",
        "squirrels eat seeds",
        "the seeds had been buried in a burrow about forty metres below the surface of the ground",
      ],
      "Bilim insanları dokuyu laboratuvarda büyütünce doku çiçek ve tohum veren bitkilere dönüştü.",
    ],
    [
      "Unless growers develop a variety that resists the new strain of the disease, ----.",
      [
        "the banana industry may face serious problems",
        "bananas are popular",
        "fruit is healthy",
        "farmers work hard",
        "the old variety would not have been replaced by a new one in the middle of the twentieth century",
      ],
      "'Unless' olumsuz koşul: yetiştiriciler hastalığın yeni türüne dayanıklı bir çeşit geliştirmezse muz sektörü ciddi sorunlarla karşılaşabilir.",
    ],
    [
      "The leaves of the plant are so tough ----.",
      [
        "that they can survive being battered by wind and sand for centuries",
        "although the desert is dry",
        "because the plant is old",
        "unless the leaves are young",
        "while scientists were trying to work out exactly how old the largest plants really are",
      ],
      "Bitkinin yaprakları o kadar dayanıklıdır ki yüzyıllarca rüzgâr ve kum tarafından dövülmeye dayanabilir.",
    ],
    [
      "Even though the tree is extremely poisonous, ----.",
      [
        "its wood has sometimes been used to make furniture",
        "the fruit is green",
        "trees grow near beaches",
        "Florida is warm",
        "warning signs have been placed on many of the trees in areas visited by tourists",
      ],
      "'Even though' zıtlık ister: ağaç son derece zehirli olsa da kerestesi zaman zaman mobilya yapımında kullanılmıştır.",
    ],
    [
      "As the bananas sold in shops are clones that cannot reproduce from seeds, ----.",
      [
        "they cannot easily evolve resistance to disease",
        "shops sell fruit",
        "bananas are long",
        "seeds are small",
        "the earlier variety was said to have a richer flavour than the one that is sold today",
      ],
      "Dükkânlarda satılan muzlar tohumla üreyemeyen klonlar olduğundan hastalığa kolayca direnç evrimleştiremezler.",
    ],
  ],
  enTr: [
    [
      "The trees were thought to have died out about two million years ago.",
      [
        "Ağaçların yaklaşık iki milyon yıl önce yok olduğu düşünülüyordu.",
        "Ağaçların yaklaşık iki milyon yıl daha yaşayacağı düşünülüyordu.",
        "İki milyon yıl önce yok olan ağaçlar, fosil olarak da hiç bulunamadı.",
        "İki milyon yıl ağaçları yok etti.",
        "Ağaçların hiç yok olmadığı biliniyordu.",
      ],
      "'The trees were thought to have died out' 'ağaçların yok olduğu düşünülüyordu', 'about two million years ago' 'yaklaşık iki milyon yıl önce' karşılığıdır.",
    ],
    [
      "The fungus spreads through the vessels that carry water.",
      [
        "Mantar, su taşıyan damarlar aracılığıyla yayılır.",
        "Su, mantar taşıyan damarlar aracılığıyla yayılır.",
        "Su taşıyan damarlar, mantarın yayılmasını tamamen engeller.",
        "Damarlar mantarı taşır.",
        "Mantar hiç yayılmaz.",
      ],
      "'The fungus spreads' 'mantar yayılır', 'through the vessels that carry water' 'su taşıyan damarlar aracılığıyla' karşılığıdır.",
    ],
    [
      "All the bananas of this variety are genetically identical.",
      [
        "Bu çeşide ait bütün muzlar genetik olarak özdeştir.",
        "Bu çeşide ait bütün muzlar genetik olarak farklıdır.",
        "Genetik olarak özdeş olmayan muzlar, hastalıklara karşı daha savunmasızdır.",
        "Genetik muzları özdeşleştirir.",
        "Bu çeşidin hiç muzu yoktur.",
      ],
      "'All the bananas of this variety' 'bu çeşide ait bütün muzlar', 'are genetically identical' 'genetik olarak özdeştir' karşılığıdır.",
    ],
    [
      "Botanists believe that some individuals have lived for over a millennium.",
      [
        "Botanikçiler, bazı bireylerin bin yılı aşkın süredir yaşadığına inanmaktadır.",
        "Bitkilerden bazılarının bin yıl sonra öleceği düşünülmektedir.",
        "Bin yaşından büyük bitkilerin hepsi, son yıllarda kuraklık nedeniyle ölmüştür.",
        "Bin yıl bitkileri düşünür.",
        "Bitkilerin hiçbiri yaşlı değildir.",
      ],
      "'Botanists believe that some individuals' 'botanikçiler bazı bireylerin ... inanır', 'have lived for over a millennium' 'bin yılı aşkın süredir yaşadığına' karşılığıdır.",
    ],
    [
      "The tree is said to be one of the most dangerous in the world.",
      [
        "Ağacın dünyanın en tehlikeli ağaçlarından biri olduğu söylenir.",
        "Ağacın dünyanın en zararsız ağaçlarından biri olduğu söylenir.",
        "Dünyanın en tehlikeli ağaçlarından biri olan bu tür, yalnızca adalarda yetişmez.",
        "Dünya ağacı tehlikeli bulur.",
        "Ağaç hiç tehlikeli değildir.",
      ],
      "'The tree is said to be' 'ağacın olduğu söylenir', 'one of the most dangerous in the world' 'dünyanın en tehlikeli ağaçlarından biri' karşılığıdır.",
    ],
    [
      "The seeds had been stored by squirrels in their burrows.",
      [
        "Tohumlar sincaplar tarafından yuvalarında depolanmıştı.",
        "Sincaplar tohumlar tarafından yuvalarında depolanmıştı.",
        "Sincapların yuvalarında depolanan tohumlar, kısa sürede çürüyüp yok oldu.",
        "Yuvalar sincapları depoladı.",
        "Tohumlar hiç depolanmamıştı.",
      ],
      "'The seeds had been stored by squirrels' 'tohumlar sincaplar tarafından depolanmıştı', 'in their burrows' 'yuvalarında' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Ağaçları ziyaretçilerden korumak için yerleri gizli tutulmuştur.",
      [
        "Their location has been kept secret to protect the trees from visitors.",
        "The visitors have been kept secret to protect the location of the trees.",
        "Their location was kept secret, but visitors soon found the trees and damaged them.",
        "The trees keep the visitors secret.",
        "Everyone knows where the trees are.",
      ],
      "'Yerleri gizli tutulmuştur' 'their location has been kept secret', 'ağaçları ziyaretçilerden korumak için' 'to protect the trees from visitors' karşılığıdır.",
    ],
    [
      "Hastalık, birkaç on yıl içinde milyonlarca karaağacı öldürdü.",
      [
        "The disease killed millions of elm trees within a few decades.",
        "Millions of elm trees killed the disease within a few decades.",
        "The disease killed a few elm trees, but most of them recovered within a decade.",
        "A few decades killed the disease.",
        "The disease did not affect elm trees.",
      ],
      "'Hastalık milyonlarca karaağacı öldürdü' 'the disease killed millions of elm trees', 'birkaç on yıl içinde' 'within a few decades' karşılığıdır.",
    ],
    [
      "Eski çeşidin bugün satılan muzdan daha lezzetli olduğu söylenirdi.",
      [
        "The old variety was said to be tastier than the banana sold today.",
        "The banana sold today is said to be tastier than the old variety.",
        "The old variety was said to be less tasty, so growers were happy to replace it.",
        "Today's banana said that it was tasty.",
        "The old variety had no taste.",
      ],
      "'Eski çeşidin ... olduğu söylenirdi' 'the old variety was said to be', 'bugün satılan muzdan daha lezzetli' 'tastier than the banana sold today' karşılığıdır.",
    ],
    [
      "Bitkinin iki yaprağı rüzgârla zamanla şeritlere ayrılır.",
      [
        "The plant's two leaves are gradually split into strips by the wind.",
        "The wind is gradually split into strips by the plant's two leaves.",
        "The plant's two leaves protect it from the wind and never become damaged.",
        "The strips split the plant's wind.",
        "The plant has no leaves.",
      ],
      "'Bitkinin iki yaprağı ayrılır' 'the plant's two leaves are split', 'rüzgârla zamanla şeritlere' 'gradually into strips by the wind' karşılığıdır.",
    ],
    [
      "Kâşifin zehirli bir okla yaralandığı ve kısa süre sonra öldüğü söylenir.",
      [
        "The explorer is said to have been wounded by a poisoned arrow and to have died soon afterwards.",
        "The explorer is said to have made poisoned arrows and sold them soon afterwards.",
        "The explorer was wounded by an arrow, but the poison had no effect on him.",
        "The arrow is said to have explored the island.",
        "The explorer never left Spain.",
      ],
      "'Kâşifin ... yaralandığı ... söylenir' 'the explorer is said to have been wounded', 'zehirli bir okla ... ve kısa süre sonra öldüğü' 'by a poisoned arrow and to have died soon afterwards' karşılığıdır.",
    ],
    [
      "Yaprakları ve gövdesi, iğne gibi ince kıllarla kaplıdır.",
      [
        "Its leaves and stems are covered with fine, needle-like hairs.",
        "Fine, needle-like hairs are covered with its leaves and stems.",
        "Its leaves and stems are smooth, although its fruit has a few fine hairs.",
        "The needles cover its hair.",
        "It has no leaves or stems.",
      ],
      "'Yaprakları ve gövdesi kaplıdır' 'its leaves and stems are covered', 'iğne gibi ince kıllarla' 'with fine, needle-like hairs' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Nearly every banana exported for sale abroad comes from one variety, called the Cavendish. Like other cultivated bananas, it has no fertile seeds, and new plants are grown from cuttings taken from existing ones, which means that every Cavendish banana is essentially a clone, genetically identical to all the others. This makes the industry extremely vulnerable. Until the 1950s, the dominant export variety was a different one, the Gros Michel, which many people who remember it say had a richer, creamier flavour. From the early twentieth century, however, plantations in Central America were devastated by a soil fungus that causes a condition known as Panama disease, in which the plant wilts and dies. Because the fungus survives in the soil for decades, growers could not simply replant the same fields. Exporters eventually replaced it with the Cavendish, which that strain of the fungus could not infect, although it bruised more easily and required changes in the way bananas were packed and transported. In recent decades, a different form of the fungus, called Tropical Race 4, has appeared, and it can kill the Cavendish. First identified in South-East Asia, it has spread to Africa, the Middle East and, in 2019, to Colombia. Scientists are trying to develop resistant varieties through traditional breeding and genetic modification, but finding one that is also commercially attractive has proved difficult.",
      questions: [
        [
          "According to the passage, the banana industry is vulnerable mainly because ----.",
          [
            "most bananas are genetically identical",
            "bananas bruise easily",
            "there are too many varieties",
            "the Gros Michel was replaced by a variety with a richer, creamier flavour",
            "plantations are too small",
          ],
          "Metne göre her Cavendish muzu esasen bir klondur.",
        ],
        [
          "Growers could not simply replant infected fields because ----.",
          [
            "the fungus remains in the soil for a long time",
            "the land was sold",
            "there were no cuttings",
            "the new variety required changes in the way the fruit was packed and transported",
            "the government forbade it",
          ],
          "Mantar onlarca yıl toprakta yaşamını sürdürür.",
        ],
        [
          "It can be understood from the passage that finding a replacement for the Cavendish ----.",
          [
            "is complicated by the need for commercial success",
            "has already been achieved",
            "is unnecessary",
            "was the main reason why the disease spread to Colombia in 2019",
            "depends only on genetic modification",
          ],
          "Ticari açıdan da çekici olan dayanıklı bir çeşit bulmak zor olmuştur.",
        ],
      ],
    },
    {
      text:
        "In the Namib Desert of south-western Africa grows one of the strangest plants on Earth. Welwitschia mirabilis consists of a short, woody stem, which rises only a little above the ground, and just two leaves. These leaves are produced when the seedling first sprouts and continue to grow from their base for the whole of the plant's life, which may last for well over a thousand years. Over time, the leaves, which are tough and leathery, are torn into long strips by the wind and worn away at their tips by sand, so that an old plant looks like a tangled heap of ribbons several metres across. The plant is remarkably well adapted to its harsh surroundings. In parts of the Namib, rain may not fall for years, but fog regularly drifts in from the Atlantic Ocean, and it has long been suggested that the plant absorbs some of this moisture through its leaves, although its long root also reaches water deep underground. Genetic research published in 2021 found that, millions of years ago, the plant's entire set of genes was duplicated during a period of extreme stress, which may have helped it to adapt. It also found that its genes are protected in ways that reduce the energy needed to maintain them. The plant is a national symbol of Namibia and appears on the country's coat of arms.",
      questions: [
        [
          "According to the passage, Welwitschia ----.",
          [
            "keeps the same two leaves throughout its life",
            "produces new leaves every year",
            "has no roots",
            "grows only in areas where rain falls regularly throughout the year",
            "lives for only a few years",
          ],
          "Metne göre fide ilk filizlendiğinde oluşan iki yaprak ömür boyu büyür.",
        ],
        [
          "An old plant looks like a heap of ribbons because ----.",
          [
            "its leaves have been torn by the wind",
            "it produces many small leaves",
            "animals eat its leaves",
            "it absorbs moisture from the fog that drifts in from the Atlantic",
            "it is covered with sand",
          ],
          "Yapraklar rüzgârla uzun şeritlere ayrılır.",
        ],
        [
          "It can be understood from the passage that the genetic research suggested that ----.",
          [
            "a past duplication of its genes may have helped the plant to survive",
            "the plant is very young",
            "the plant needs a lot of energy",
            "the plant was originally a symbol of the people living along the Atlantic coast",
            "the plant cannot adapt",
          ],
          "Aşırı stres döneminde tüm genlerinin çoğalması uyum sağlamasına yardım etmiş olabilir.",
        ],
      ],
    },
    {
      text:
        "Along the beaches of the Caribbean, Florida and parts of Central and South America grows a tree with a reputation as perhaps the deadliest on the planet. The manchineel has small green fruits that look and smell rather like apples, and the Spanish name for it means 'little apple of death'. Eating even a small piece of the fruit can cause severe burning and swelling of the mouth and throat. Every part of the tree contains a milky sap that can cause painful blisters on the skin, and people who shelter beneath it during rain may be injured by water dripping from its leaves, which carries the sap. Burning the wood is also dangerous, since the smoke can injure the eyes. According to some historical accounts, the indigenous people of the Caribbean used the sap to poison the tips of their arrows, and a Spanish explorer who was wounded by an arrow in Florida in 1521 is said to have died from the poison. Despite its dangers, the tree plays a useful role, because its roots help to protect beaches from erosion, and so it is usually not cut down. Instead, many trees in areas visited by tourists are marked with red paint or warning signs. Carpenters in the Caribbean have even used its wood to make furniture, after carefully drying it in the sun to remove the sap.",
      questions: [
        [
          "According to the passage, the tree's fruit ----.",
          [
            "resembles an apple but is poisonous",
            "is safe to eat when ripe",
            "smells unpleasant",
            "is used by carpenters in the Caribbean to remove the sap from wood",
            "is large and red",
          ],
          "Metne göre elmaya benzeyen küçük yeşil meyveleri zehirlidir.",
        ],
        [
          "The tree is usually not cut down because ----.",
          [
            "it helps to protect beaches",
            "it is very rare",
            "its wood is valuable",
            "tourists enjoy sitting in its shade when it is raining on the beach",
            "the law forbids it",
          ],
          "Kökleri kumsalları erozyondan korur.",
        ],
        [
          "It can be understood from the passage that the tree's wood ----.",
          [
            "can be used if it is treated carefully",
            "is completely useless",
            "is safe to burn",
            "was used by indigenous people to make the arrows that killed the explorer",
            "is red",
          ],
          "Özsuyu gidermek için güneşte dikkatle kurutulduktan sonra mobilya yapımında kullanılmıştır.",
        ],
      ],
    },
    {
      text:
        "In the rainforests of north-eastern Australia grows a plant whose sting is said to be among the most painful in the natural world. The gympie-gympie, a shrub with large, heart-shaped leaves, is covered with fine hairs that act like tiny hypodermic needles. When the hairs touch the skin, they break off and inject a toxin. Victims describe an intense burning pain, which can be severe enough to require treatment in hospital and may continue for days. Even worse, the pain can return for weeks or months afterwards when the affected area is touched or exposed to cold water. Because the hairs are so small, they are difficult to remove, and people who work in the forest are advised to use sticky tape or hair-removal wax to pull them out. There are stories of horses that were stung and became so distressed that they had to be put down. For a long time, the cause of the pain was not understood. In 2020, researchers in Australia found that the toxin contains a previously unknown family of small proteins, which they named gympietides. Surprisingly, these molecules have a structure similar to that of toxins produced by spiders and cone snails, even though plants and animals evolved them independently. The researchers hope that studying how the toxin affects nerves may help in the development of new pain-relieving drugs.",
      questions: [
        [
          "According to the passage, the plant causes pain by ----.",
          [
            "injecting a toxin through tiny hairs",
            "releasing a poisonous gas",
            "producing a milky sap",
            "attracting spiders and cone snails that sting people walking in the forest",
            "scratching the skin with thorns",
          ],
          "Metne göre ince kıllar deriye değince kırılır ve bir toksin enjekte eder.",
        ],
        [
          "Sticky tape is recommended because ----.",
          [
            "the hairs are too small to remove easily by other means",
            "it reduces the pain immediately",
            "it contains a medicine",
            "it prevents the pain from returning when the area is exposed to cold water",
            "it protects horses",
          ],
          "Kıllar çok küçük olduğundan çıkarılmaları zordur.",
        ],
        [
          "It can be understood from the passage that the 2020 research was surprising because ----.",
          [
            "a plant toxin resembled toxins of certain animals",
            "the plant was found to be harmless",
            "the toxin was very large",
            "the researchers discovered that the plant grows only in the rainforests of Africa",
            "the pain was imaginary",
          ],
          "Bitki toksini örümcek ve koni salyangozu toksinlerine benzer yapıdaydı.",
        ],
      ],
    },
    {
      text:
        "In 2012, a team of Russian scientists announced that they had grown living plants from material that had been frozen in the ground for about 32,000 years. The material came from the burrows of ancient squirrels, discovered in the banks of a river in north-eastern Siberia, about forty metres below the present surface. The squirrels had stored hundreds of thousands of seeds and fruits there, and the burrows had quickly been buried and frozen, remaining at temperatures below zero ever since. The scientists tried to germinate the seeds, but without success. They then turned to tissue taken from inside the immature fruits of a small flowering plant called the narrow-leafed campion. Using techniques normally applied to propagate plants in laboratories, they grew this tissue into complete plants. The plants grew normally, produced white flowers and set seeds, which also germinated successfully. The flowers of the ancient plants were slightly different in shape from those of the modern species, which still grows in the same region. The age of the material was confirmed by radiocarbon dating. Although some other scientists called for the experiment to be repeated independently, it is widely regarded as the oldest plant ever regenerated. Researchers suggest that the permafrost may contain a natural bank of ancient genetic material.",
      questions: [
        [
          "According to the passage, the plant material was preserved because ----.",
          [
            "it had remained frozen since it was buried",
            "it was dried in the sun",
            "it was stored in a laboratory",
            "the scientists had grown it using techniques normally used to propagate plants",
            "it was kept in water",
          ],
          "Metne göre yuvalar hızla gömülüp donmuş ve o zamandan beri sıfırın altında kalmıştır.",
        ],
        [
          "The scientists used tissue from the fruits because ----.",
          [
            "their attempts to germinate the seeds had failed",
            "the fruits were larger",
            "the seeds had been eaten",
            "the modern species no longer grows in the same region of north-eastern Siberia",
            "it was cheaper",
          ],
          "Tohumları çimlendirme girişimleri başarısız olmuştu.",
        ],
        [
          "It can be understood from the passage that the ancient plants ----.",
          [
            "were not exactly the same as the modern species",
            "were unable to reproduce",
            "had red flowers",
            "had been planted by the squirrels in their burrows about forty metres below the surface",
            "died soon after flowering",
          ],
          "Çiçeklerinin biçimi modern türünkinden biraz farklıydı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Giant hogweed, a plant that can grow more than five metres tall, was brought to Britain from the Caucasus in the nineteenth century as an ornamental plant. ---- When exposed to sunlight, the affected skin can develop severe burns and blisters.",
      [
        "Its sap, however, contains chemicals that make the skin extremely sensitive to sunlight.",
        "Britain has many gardens.",
        "The Caucasus is a mountainous region.",
        "It has since spread along rivers and become an invasive species in many countries.",
        "Plants need water.",
      ],
      "Boşluk 'etkilenen cilt' ifadesine bağlanan bir cümle gerektirir; boşluğa özsuyunun cildi güneş ışığına aşırı duyarlı kılan kimyasallar içerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In tropical forests, the seeds of some fig trees are dropped by birds onto the branches of other trees. ---- Eventually, the host tree dies and rots away, leaving the fig standing on its own with a hollow centre.",
      [
        "The young fig sends roots down to the ground, which gradually surround the host and cut off its light.",
        "Birds eat fruit.",
        "Forests are home to many animals.",
        "The figs produced by these trees are an important source of food for many animals.",
        "Trees grow tall.",
      ],
      "Boşluk ev sahibi ağacın ölümüne giden süreci anlatan bir cümle gerektirir; boşluğa genç incirin toprağa kök saldığını ve ev sahibini sararak ışığını kestiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The sandbox tree of tropical America is sometimes called 'the dynamite tree'. ---- The seeds can be thrown more than forty metres from the tree.",
      [
        "When its pumpkin-shaped fruits are ripe and dry, they explode with a loud bang.",
        "Dynamite was invented in Sweden.",
        "Tropical trees grow quickly.",
        "Its trunk is covered with sharp spines, and its sap is poisonous.",
        "Seeds are planted in spring.",
      ],
      "Boşluk lakabı açıklayan ve fırlatılmaya bağlanan bir cümle gerektirir; boşluğa olgun ve kuru meyvelerinin yüksek bir patlamayla açıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Pitcher plants grow in poor soils, where they cannot obtain enough nutrients through their roots. ---- Insects attracted by its colour and nectar slip on the waxy rim, fall in and are digested.",
      [
        "To make up for this, each has leaves shaped into a deep container filled with liquid.",
        "Soil is made of rock and organic matter.",
        "Many insects can fly.",
        "Some large species in Asia have been found to contain the remains of small rats.",
        "Plants produce flowers.",
      ],
      "Boşluk sorunla çözümü bağlayan bir cümle gerektirir; boşluğa bunu telafi etmek için yapraklarının sıvıyla dolu derin bir kaba dönüştüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "The leaves of sundews are covered with tentacles, each tipped with a drop of sticky liquid that glistens like dew. ---- Over the following hours, the leaf slowly curls around its victim and releases enzymes that digest it.",
      [
        "When an insect lands on a leaf, attracted by the shining drops, it becomes stuck.",
        "Dew forms on cold mornings.",
        "Insects have six legs.",
        "Darwin spent many years carrying out experiments on these plants in his greenhouse.",
        "Leaves are usually green.",
      ],
      "Boşluk 'kurbanı' ifadesine bağlanan bir cümle gerektirir; boşluğa parlak damlaların çektiği bir böceğin yaprağa konunca yapışıp kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "By volume, the giant sequoias that grow in the Sierra Nevada are the biggest trees in the world. ---- In fact, their cones often open only after a fire, releasing seeds onto the cleared ground.",
      [
        "Their thick, spongy bark protects them from the forest fires that regularly sweep through the area.",
        "California has many forests.",
        "Trees produce oxygen.",
        "The largest, known as General Sherman, is thought to be about 2,200 years old.",
        "Forests are home to bears.",
      ],
      "Boşluk 'aslında' ifadesiyle pekiştirilen yangın konusuna giriş yapan bir cümle gerektirir; boşluğa kalın, süngerimsi kabuklarının onları yangınlardan koruduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Dodder is a parasitic plant with no leaves or roots of its own.",
        "When a seedling sprouts, it must find a host within a few days.",
        "Research has shown that it can detect chemicals released by nearby plants.",
        "Many people grow tomatoes in their gardens.",
        "It then grows towards the host and wraps itself around it.",
      ],
      odd: 3,
      why: "Parça asalak bitki küskütü anlatır. Pek çok kişinin bahçesinde domates yetiştirdiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some desert plants can survive losing almost all of the water in their tissues.",
        "They curl up and appear dead during long dry periods.",
        "Deserts can be cold at night.",
        "When it rains, they unfold and turn green within hours.",
        "They are sometimes called resurrection plants.",
      ],
      odd: 2,
      why: "Parça kuraklıkta ölü gibi görünüp yağmurda canlanan bitkileri anlatır. Çöllerin geceleri soğuk olabileceğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The squirting cucumber is found around the Mediterranean.",
        "Pressure builds up inside its ripe fruit.",
        "Cucumbers are often used in salads.",
        "Eventually the fruit breaks off its stalk.",
        "Its seeds are then shot out in a jet of liquid.",
      ],
      odd: 2,
      why: "Parça tohumlarını sıvıyla fışkırtan bitkiyi anlatır. Salatalığın salatalarda sıkça kullanıldığını söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Bladderworts are carnivorous plants that live in water.",
        "They have tiny bags that capture small animals.",
        "When an animal touches a trigger hair, the bag opens and sucks it in.",
        "This happens in less than a thousandth of a second.",
        "Many lakes are popular with swimmers in summer.",
      ],
      odd: 4,
      why: "Parça suda yaşayan etçil bitkileri anlatır. Pek çok gölün yazın yüzücüler arasında popüler olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Baobab trees can store large amounts of water in their thick trunks.",
        "This helps them to survive long dry seasons in Africa.",
        "Some of the largest are thought to be over a thousand years old.",
        "In recent years, several of the oldest baobabs have died suddenly.",
        "Africa is home to many large mammals.",
      ],
      odd: 4,
      why: "Parça baobab ağaçlarını anlatır. Afrika'nın pek çok büyük memeliye ev sahipliği yaptığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the early twentieth century, a fungus from Asia reached North America.",
        "It killed billions of American chestnut trees.",
        "Chestnuts are often roasted in winter.",
        "The tree had once been one of the most common in eastern forests.",
        "Scientists are now trying to breed resistant trees.",
      ],
      odd: 2,
      why: "Parça Amerikan kestanesini yok eden mantarı anlatır. Kestanenin kışın sıklıkla közlendiğini söyleyen III. cümle konu dışıdır.",
    },
  ],
};
