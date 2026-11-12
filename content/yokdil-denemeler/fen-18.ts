import type { YokdilDeneme } from "./types";

export const FEN_18: YokdilDeneme = {
  no: 18,
  field: "fen",
  vocab: [
    [
      "Carson argued that pesticides sprayed on crops could ---- in the bodies of birds and fish, harming them over time.",
      ["accumulate", "evaporate", "disappear", "dissolve", "freeze"],
      "Carson'ın ekinlere püskürtülen tarım ilaçlarının kuş ve balıkların vücudunda 'birikebileceğini' (accumulate) savunduğu anlatılır.",
    ],
    [
      "Drip irrigation delivers water directly to the roots of plants, so very little is ---- through evaporation.",
      ["wasted", "produced", "stored", "cleaned", "measured"],
      "Damla sulamanın suyu doğrudan köklere ilettiği için buharlaşmayla çok az suyun 'boşa gittiği' (wasted) anlatılır.",
    ],
    [
      "When the dams were removed, sediment that had been ---- behind them for a century was carried down to the sea.",
      ["trapped", "created", "burned", "invented", "planted"],
      "Barajlar kaldırıldığında yüz yıl boyunca arkalarında 'hapsolmuş' (trapped) tortunun denize taşındığı anlatılır.",
    ],
    [
      "The lake has ---- by around ninety per cent since the 1960s because of drought and the overuse of water.",
      ["shrunk", "grown", "frozen", "risen", "deepened"],
      "Gölün kuraklık ve suyun aşırı kullanımı nedeniyle 1960'lardan bu yana yaklaşık yüzde doksan 'küçüldüğü' (shrunk) anlatılır.",
    ],
    [
      "In no-till farming, the remains of the previous crop are left on the field, where they ---- the soil from wind and rain.",
      ["shield", "remove", "expose", "drain", "heat"],
      "Toprakta bırakılan önceki ürün kalıntılarının toprağı rüzgâr ve yağmurdan 'koruduğu' (shield) anlatılır.",
    ],
    [
      "Bridges built over motorways allow wild animals to cross safely instead of being ---- by vehicles.",
      ["run over", "looked after", "taken up", "brought up", "put up with"],
      "Otoyolların üzerine yapılan köprülerin yaban hayvanlarının araçlar tarafından 'ezilmek' (run over) yerine güvenle geçmesini sağladığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "Silent Spring ---- in 1962 and quickly became a best-seller.",
      ["was published", "published", "has published", "was publishing", "had published"],
      "Kitap yayımlanan bir eserdir ve olay 1962'de olmuştur: edilgen geçmiş zaman 'was published'.",
    ],
    [
      "If the dams had not been removed, the salmon ---- to their old spawning grounds.",
      ["could not have returned", "could not return", "will not return", "did not return", "had not returned"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'could not have + V3' ister.",
    ],
    [
      "By the time Blass developed his system, he ---- that a leaking pipe had made one tree grow much larger than the others.",
      ["had noticed", "has noticed", "notices", "will notice", "was noticed"],
      "Sistemin geliştirilmesinden (geçmiş) önce tamamlanmış eylem: Past Perfect 'had noticed'.",
    ],
    [
      "Carson, ---- book helped to launch the modern environmental movement, had trained as a marine biologist.",
      ["whose", "who", "which", "whom", "where"],
      "Kitap Carson'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the dams were removed ---- the full amount of sediment they had held back.",
      ["did scientists realise", "scientists realised", "realised scientists", "scientists did realise", "did realise scientists"],
      "'Only after' ile başlayan cümlede ana cümle devrik olur: 'did scientists realise'.",
    ],
    [
      "The lake is so shallow ---- small changes in rainfall can greatly change its size.",
      ["that", "which", "as", "such", "than"],
      "'so shallow that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- golden rice was developed more than twenty years ago, it has only recently been approved for farming.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Yirmi yıl önce geliştirilmesi ile ancak yakın zamanda onaylanması zıttır: 'Although'.",
    ],
    [
      "Farmers ---- fields are not ploughed often save fuel and time.",
      ["whose", "who", "which", "whom", "where"],
      "Tarlalar çiftçilere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Bacteria are known ---- part of the oil released into the sea.",
      ["to have broken down", "to break up them", "breaking down", "to be broken", "to have been broken"],
      "Bakteriler petrolü parçalayan taraftır (etken) ve olay geçmişte kalmıştır: 'be known to have + V3'.",
    ],
    [
      "The pesticide killed harmful insects ---- harmless ones.",
      ["as well as", "instead of", "because of", "rather than", "unless"],
      "İlacın zararlı böceklerle birlikte zararsız böcekleri de öldürdüğü anlatılır: 'as well as'.",
    ],
    [
      "Rice ---- to contain extra vitamin A has a yellow colour.",
      ["modified", "modifying", "which modifies", "to modify", "has modified"],
      "Pirinç değiştirilen bir üründür; edilgen anlamlı geçmiş ortaç 'modified' gerekir.",
    ],
    [
      "Fences were built along the motorway ---- animals would use the bridges instead of crossing the road.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "After the dams were removed, the river looked as if it ---- never been blocked.",
      ["had", "has", "was", "will have", "were"],
      "'as if' ile gerçek dışı ve geçmişe ait bir durum anlatılır: 'had never been'.",
    ],
    [
      "The less the soil is disturbed, ---- carbon it is able to store.",
      ["the more", "more", "the most", "less", "the less more"],
      "'The less …, the more …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the years after the Second World War, chemical pesticides such as DDT were widely used to protect crops and to kill mosquitoes that spread disease. They were cheap and effective, and few people questioned their safety. In 1962, the American marine biologist Rachel Carson published Silent Spring, a book {1} argued that the uncontrolled use of these chemicals was causing serious harm to wildlife and possibly to people. She described how pesticides could remain in the environment for years and build up in the bodies of animals at the top of the food chain, {2} birds of prey whose eggshells became so thin that they broke. The title referred to a future spring {3} no birds would sing. The chemical industry attacked the book fiercely, and some critics tried to damage Carson's reputation. {4}, the book was widely read, and it led to a government investigation that largely supported her conclusions. In 1972, the United States banned the use of DDT in agriculture. Carson did not live to see this, {5} she died of cancer in 1964, but her work is often credited with inspiring the modern environmental movement.",
      blanks: [
        [
          "(21) ----",
          ["that", "who", "where", "whose", "when"],
          "Boşluk 'a book' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(22) ----",
          ["such as", "instead of", "apart from", "because of", "in spite of"],
          "Besin zincirinin tepesindeki hayvanlara örnek verilir: 'such as'.",
        ],
        [
          "(23) ----",
          ["in which", "which", "by which", "of whom", "whose"],
          "'a future spring in which no birds would sing' = 'hiçbir kuşun ötmeyeceği bir bahar': 'in which'.",
        ],
        [
          "(24) ----",
          ["Nevertheless", "Therefore", "Similarly", "For example", "In addition"],
          "Sert saldırılara rağmen kitabın çok okunması karşıtlıktır: 'Nevertheless'.",
        ],
        [
          "(25) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Carson'ın bunu görememesinin nedeni 1964'te ölmesidir: 'because'.",
        ],
      ],
    },
    {
      text:
        "In the 1930s, the Polish-born engineer Simcha Blass noticed a large tree growing beside a fence in a dry area, {1} the trees around it were much smaller. Looking more closely, he found that a small leak in a nearby water pipe was dripping steadily onto its roots. The observation gave him an idea: instead of flooding entire fields, water could be delivered slowly and directly to each plant. It took him many years to turn the idea into a practical system, {2} early metal and plastic pipes tended to become blocked. In the 1960s, after moving to Israel, he worked with a farming community to develop plastic tubes with small openings {3} released water in a controlled way. Drip irrigation, as the method became known, can reduce water use by between thirty and sixty per cent compared with traditional methods, {4} it also allows fertiliser to be delivered with the water. It is now used on millions of hectares around the world, particularly in dry regions. {5}, the cost of the equipment means that many small farmers in poorer countries still cannot afford it, and several organisations are working to produce cheaper systems.",
      blanks: [
        [
          "(26) ----",
          ["while", "because", "unless", "so that", "since"],
          "Büyük ağaç ile çevresindeki çok daha küçük ağaçlar karşılaştırılır: 'while'.",
        ],
        [
          "(27) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Fikri sisteme dönüştürmenin yıllar sürmesinin nedeni boruların tıkanmasıdır: 'because'.",
        ],
        [
          "(28) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'small openings' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "although", "or"],
          "Su tasarrufu ile gübrenin suyla birlikte verilebilmesi birbirine eklenen avantajlardır: 'and'.",
        ],
        [
          "(30) ----",
          ["However", "Therefore", "Similarly", "For example", "As a result"],
          "Yaygın kullanım ile yoksul çiftçilerin ekipmanı karşılayamaması karşıtlıktır: 'However'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the bacteria in the sea broke down much of the oil, ----.",
      [
        "some of it remained on the sea floor for years",
        "the spill took place in the Gulf of Mexico in 2010",
        "the oil came from a well deep beneath the sea",
        "many birds were covered with oil",
        "the company was ordered to pay compensation",
      ],
      "'Although' zıtlık ister: denizdeki bakteriler petrolün çoğunu parçalasa da bir kısmı yıllarca deniz tabanında kaldı.",
    ],
    [
      "If more countries grew golden rice, ----.",
      [
        "fewer children might go blind",
        "the rice had been yellow",
        "most farmers will grow wheat",
        "the crop was developed in Switzerland",
        "vitamin A is found in carrots",
      ],
      "Type 2 koşul cümlesi ana cümlede 'might + yalın fiil' ister: daha az çocuk A vitamini eksikliği çekebilirdi.",
    ],
    [
      "Many farmers have switched to no-till methods ----.",
      [
        "because they reduce soil erosion and save fuel",
        "so that the soil would become drier",
        "although they increase the cost of ploughing",
        "unless the government pays them",
        "even if they have no fields",
      ],
      "Pek çok çiftçinin toprak sürmeden tarıma geçmesinin nedeni erozyonu azaltması ve yakıt tasarrufu sağlamasıdır: 'because'.",
    ],
    [
      "Since the dams on the Elwha were removed, ----.",
      [
        "salmon have returned to parts of the river",
        "the river had been blocked for a century",
        "most fish would have disappeared",
        "the sediment will reach the sea",
        "few people visited the area",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have returned'.",
    ],
    [
      "Unless the use of water from the rivers that feed Lake Chad is reduced, ----.",
      [
        "the lake may continue to shrink",
        "the farmers would have moved away",
        "most fish had disappeared",
        "the rainfall will increase",
        "the lake was very large",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: göl küçülmeye devam edebilir.",
    ],
    [
      "The eggshells of some birds became so thin ----.",
      [
        "that they broke when the parents sat on them",
        "because the birds had eaten contaminated fish",
        "although the birds continued to lay eggs",
        "unless the nests were protected",
        "while the chicks were still inside",
      ],
      "'so thin that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Ecologists have found that when animals have safe crossings over roads, ----.",
      [
        "the number killed by traffic falls sharply",
        "the motorway would have been closed",
        "most drivers had slowed down",
        "the animals will stop moving",
        "the bridges were very expensive",
      ],
      "'when' ile genel bir bulgu anlatılır: hayvanların yolların üzerinden güvenli geçişleri olduğunda trafikte ölenlerin sayısı hızla düşer.",
    ],
    [
      "So much sediment had built up behind the dams ----.",
      [
        "that it took years to be carried downstream",
        "because the river carries soil from the mountains",
        "although the dams had produced electricity",
        "while the salmon could not swim upstream",
        "unless the water level was very high",
      ],
      "Devrik 'So much sediment had built up … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While supporters of golden rice say it could save lives, ----.",
      [
        "critics prefer a more varied diet",
        "rice is the main food of billions of people",
        "vitamin A is important for healthy eyes",
        "the rice gets its colour from beta-carotene",
        "Asia produces most of the world's rice",
      ],
      "'While' iki görüşü karşılaştırır: destekçiler hayat kurtarabileceğini söylerken eleştirmenler daha çeşitli bir beslenmenin daha iyi bir çözüm olacağını savunur.",
    ],
    [
      "Once the farmers had stopped ploughing their fields, ----.",
      [
        "soil quality began to improve",
        "the crops will grow faster",
        "the soil would have blown away",
        "rain falls in the spring",
        "most tractors had broken down",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: topraktaki organik madde miktarı artmaya başladı.",
    ],
    [
      "No sooner had the book been published ----.",
      [
        "than chemical companies attacked it",
        "when Carson had finished writing",
        "that DDT will be banned",
        "before Carson had become a biologist",
        "so it became very popular",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Pesticides can remain in the environment for many years.",
      [
        "Tarım ilaçları çevrede uzun yıllar kalabilir.",
        "Tarım ilaçları çevrede hızla yok olur.",
        "Çevre, tarım ilaçlarını yıllarca üretir.",
        "Tarım ilaçlarının çevre üzerinde hiçbir etkisi yoktur.",
        "Tarım ilaçları yalnızca birkaç gün etkili olur.",
      ],
      "'can remain in the environment for many years' 'çevrede uzun yıllar kalabilir' demektir.",
    ],
    [
      "Drip irrigation can reduce water use considerably compared with traditional methods.",
      [
        "Damla sulama, eski yöntemlere göre çok daha az su harcar.",
        "Damla sulama, geleneksel yöntemlere kıyasla çok daha fazla su kullanır.",
        "Geleneksel yöntemler, damla sulamadan daha az su kullanır.",
        "Damla sulama, su kullanımını hiç etkilemez.",
        "Damla sulama yalnızca yağmurlu bölgelerde kullanılabilir.",
      ],
      "'can reduce water use considerably' 'su kullanımını önemli ölçüde azaltabilir', 'compared with traditional methods' 'geleneksel yöntemlere kıyasla' demektir.",
    ],
    [
      "The removal of the dams was the largest project of its kind ever carried out.",
      [
        "Barajların kaldırılması, türünün şimdiye kadar gerçekleştirilmiş en büyük projesiydi.",
        "Barajların inşası, türünün şimdiye kadar gerçekleştirilmiş en büyük projesiydi.",
        "Barajların kaldırılması, küçük ve önemsiz bir projeydi.",
        "Barajlar, şimdiye kadar yapılmış en büyük barajlardı.",
        "Barajların kaldırılması projesi hiçbir zaman gerçekleştirilmedi.",
      ],
      "'The removal of the dams' 'barajların kaldırılması', 'the largest project of its kind ever carried out' 'türünün şimdiye kadar gerçekleştirilmiş en büyük projesi' demektir.",
    ],
    [
      "Millions of people depend on the lake for fishing, farming and drinking water.",
      [
        "Milyonlarca insan balıkçılık, tarım ve içme suyu için göle bağımlıdır.",
        "Göl, milyonlarca insanın balıkçılık ve tarım yapmasını engeller.",
        "Milyonlarca insan, gölün suyunu içmeyi reddeder.",
        "Göl, yalnızca birkaç bin insana su sağlar.",
        "Milyonlarca insan, gölden uzaklaşmak için tarımı bırakmıştır.",
      ],
      "'Millions of people depend on the lake' 'milyonlarca insan göle bağımlıdır', 'for fishing, farming and drinking water' 'balıkçılık, tarım ve içme suyu için' demektir.",
    ],
    [
      "Leaving crop remains on the surface helps the soil to hold more water.",
      [
        "Yüzeyde kalan ürün artıkları toprağın daha çok su tutmasını sağlar.",
        "Ürün kalıntılarını yüzeyde bırakmak, toprağın kurumasına neden olur.",
        "Toprak, yüzeydeki ürün kalıntılarını suyla temizler.",
        "Ürün kalıntıları, toprağın su tutmasını tamamen engeller.",
        "Su, ürün kalıntılarının yüzeyde kalmasını önler.",
      ],
      "'Leaving crop remains on the surface' 'ürün kalıntılarını yüzeyde bırakmak', 'helps the soil to hold more water' 'toprağın daha fazla su tutmasına yardım eder' demektir.",
    ],
    [
      "Wildlife bridges reconnect habitats that have been divided by roads.",
      [
        "Yaban hayatı köprüleri, yolların böldüğü alanları yeniden birleştirir.",
        "Yaban hayatı köprüleri, yaşam alanlarını yollarla bölmek için yapılır.",
        "Yollar, yaban hayatı köprülerini yaşam alanlarından ayırır.",
        "Yaban hayatı köprüleri yalnızca insanların kullanımı içindir.",
        "Yaşam alanları, köprüler yapıldıktan sonra tamamen yok olmuştur.",
      ],
      "'reconnect habitats' 'yaşam alanlarını yeniden birbirine bağlar', 'that have been divided by roads' 'yollarla bölünmüş' demektir.",
    ],
  ],
  trEn: [
    [
      "Sessiz Bahar, modern çevre hareketinin başlamasına yardım etti.",
      [
        "Silent Spring helped to start the modern environmental movement.",
        "Silent Spring was written after the environmental movement had ended.",
        "The environmental movement prevented Silent Spring from being published.",
        "Silent Spring had no effect on the environmental movement.",
        "The modern environmental movement was started by chemical companies.",
      ],
      "'modern çevre hareketinin başlamasına yardım etti' 'helped to start the modern environmental movement' karşılığıdır.",
    ],
    [
      "Damla sulama, suyu doğrudan bitkilerin köklerine iletir.",
      [
        "Drip irrigation delivers water directly to the roots of plants.",
        "Drip irrigation floods entire fields with water.",
        "The roots of plants deliver water to drip irrigation systems.",
        "Drip irrigation delivers water only to the leaves of plants.",
        "Drip irrigation prevents water from reaching the roots.",
      ],
      "'suyu doğrudan bitkilerin köklerine iletir' 'delivers water directly to the roots of plants' karşılığıdır.",
    ],
    [
      "Barajların kaldırılmasından sonra somonlar nehre geri döndü.",
      [
        "After the dams were removed, salmon returned to the river.",
        "After the dams were built, salmon returned to the river.",
        "Salmon removed the dams from the river.",
        "Salmon disappeared from the river after the dams were removed.",
        "The dams were removed because there were no salmon.",
      ],
      "'Barajların kaldırılmasından sonra' 'after the dams were removed', 'somonlar nehre geri döndü' 'salmon returned to the river' karşılığıdır.",
    ],
    [
      "Çad Gölü son altmış yılda büyük ölçüde küçüldü.",
      [
        "Lake Chad has shrunk greatly over the past sixty years.",
        "Lake Chad has grown greatly over the past sixty years.",
        "Lake Chad was created sixty years ago.",
        "Lake Chad has not changed in size for sixty years.",
        "Lake Chad disappeared completely sixty years ago.",
      ],
      "'son altmış yılda büyük ölçüde küçüldü' 'has shrunk greatly over the past sixty years' karşılığıdır.",
    ],
    [
      "Altın pirinç, A vitamininin öncüsü olan beta-karoten içerir.",
      [
        "Golden rice contains beta-carotene, a precursor of vitamin A.",
        "Golden rice contains no vitamins at all.",
        "Vitamin A is used to make rice golden in colour.",
        "Golden rice prevents the body from absorbing vitamin A.",
        "Beta-carotene is removed from golden rice before it is eaten.",
      ],
      "'A vitamininin öncüsü olan beta-karoten içerir' 'contains beta-carotene, a precursor of vitamin A' karşılığıdır.",
    ],
    [
      "Bazı bakteriler, denizdeki petrolü parçalayabilir.",
      [
        "Some bacteria can break down oil in the sea.",
        "Some bacteria produce oil in the sea.",
        "Oil in the sea kills all types of bacteria.",
        "Bacteria cannot survive in the sea.",
        "Oil is used to feed bacteria in laboratories.",
      ],
      "'denizdeki petrolü parçalayabilir' 'can break down oil in the sea' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "For about a century, two large dams on the Elwha River in Washington State blocked the passage of salmon, which had once returned from the sea in huge numbers to lay their eggs upstream. The dams, built in the early twentieth century to provide electricity for local industry, had no passages that would allow fish to swim past them. As a result, salmon populations fell to a tiny fraction of their former size, which also affected the bears, eagles and other animals that fed on them, and the Native American communities for whom salmon had cultural and economic importance. After decades of campaigning, the dams were removed between 2011 and 2014, in what was then the largest dam removal project in history. One of the biggest challenges was the enormous amount of sediment, around twenty million cubic metres, that had built up behind the dams. As it was carried downstream, it rebuilt beaches and created new habitats at the river mouth. Within a few years, salmon had begun to return to parts of the river they had not reached for a hundred years, and scientists have been studying the recovery closely as a model for other rivers.",
      questions: [
        [
          "According to the passage, the dams harmed salmon populations because ----.",
          [
            "fish could not swim past them",
            "they made the water too warm",
            "they released chemicals into the river",
            "they increased the number of bears",
            "they produced electricity",
          ],
          "Metne göre barajlarda balıkların geçebileceği geçitler yoktu ve somonlar yumurta bırakmak için yukarıya ulaşamıyordu.",
        ],
        [
          "The writer mentions bears and eagles in order to show that ----.",
          [
            "the decline of salmon affected other species",
            "they were responsible for the decline of salmon",
            "they returned before the salmon",
            "they live only near dams",
            "they were removed with the dams",
          ],
          "Somonla beslenen ayıların ve kartalların etkilenmesi, somonların azalmasının diğer türleri de etkilediğini gösterir.",
        ],
        [
          "It can be understood from the passage that the sediment released by the removal of the dams ----.",
          [
            "had some positive effects on the coast",
            "killed all the fish in the river",
            "was removed by trucks",
            "prevented salmon from returning",
            "was too small to measure",
          ],
          "Tortunun aşağı taşınırken plajları yeniden oluşturması ve nehir ağzında yeni yaşam alanları yaratması, kıyıda olumlu etkileri olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "Lake Chad, on the edge of the Sahara Desert in central Africa, was once one of the largest lakes on the continent. In the early 1960s, it covered around twenty-five thousand square kilometres. Because it is very shallow, with an average depth of only a few metres, its size changes greatly with rainfall, and a series of severe droughts in the 1970s and 1980s caused it to shrink dramatically. At the same time, growing populations in the four countries that surround it, Chad, Cameroon, Niger and Nigeria, took increasing amounts of water from the lake and the rivers that feed it for irrigation. By the early 2000s, the lake had lost around ninety per cent of its surface area, although some studies suggest it has stabilised or partly recovered in recent years. The decline has had serious consequences for the many millions who rely on the lake for fishing, farming and drinking water. Competition for the remaining resources has contributed to poverty, displacement and conflict in the region. Several plans have been proposed to refill the lake by transferring water from rivers further south, but they would be extremely expensive and could have environmental effects of their own.",
      questions: [
        [
          "According to the passage, the size of Lake Chad varies greatly because ----.",
          [
            "it is very shallow",
            "it is fed by melting glaciers",
            "it is connected to the sea",
            "it lies in a deep valley",
            "it freezes in winter",
          ],
          "Metne göre göl ortalama yalnızca birkaç metre derinliğinde olduğu için boyutu yağışla büyük ölçüde değişir.",
        ],
        [
          "The writer mentions the four countries around the lake in order to show ----.",
          [
            "that people used too much water",
            "where the Sahara Desert is located",
            "why the lake is shallow",
            "how much rain falls in the region",
            "that the lake has been refilled",
          ],
          "Gölü çevreleyen dört ülkedeki artan nüfusun sulama için giderek daha fazla su alması, insan kullanımının küçülmeye katkıda bulunduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that plans to refill the lake ----.",
          [
            "face both financial and environmental obstacles",
            "have already been completed",
            "would be cheap and easy",
            "are supported by all scientists",
            "would increase conflict in the region",
          ],
          "Planların son derece pahalı olacağı ve kendi çevresel etkileri olabileceği belirtilir.",
        ],
      ],
    },
    {
      text:
        "For thousands of years, farmers have ploughed their fields before planting, turning over the soil to bury weeds and the remains of previous crops. Ploughing, however, has disadvantages. It leaves the soil bare and exposed to wind and rain, which can wash or blow it away, and it breaks up the structure that allows the soil to hold water and air. It also releases carbon stored in the soil into the atmosphere. In no-till farming, by contrast, seeds are placed directly into the undisturbed soil through narrow slots cut by special machines, and the remains of the previous crop are left on the surface. This layer protects the soil from erosion, keeps it moist and provides food for earthworms and other organisms that improve its structure. No-till farming also saves fuel and labour, since tractors make fewer passes over the field. It has been widely adopted in parts of North and South America and Australia. However, it has drawbacks: without ploughing, weeds must often be controlled with herbicides, and in some cold, wet regions the covered soil warms up more slowly in spring, which can delay planting.",
      questions: [
        [
          "According to the passage, one disadvantage of ploughing is that it ----.",
          [
            "leaves the soil unprotected against erosion",
            "increases the amount of carbon in the soil",
            "requires the use of herbicides",
            "keeps the soil too moist",
            "prevents seeds from being planted",
          ],
          "Metne göre sürmek toprağı çıplak ve rüzgâr ile yağmura açık bırakır; bu da toprağın akıp gitmesine ya da savrulmasına yol açabilir.",
        ],
        [
          "The writer mentions earthworms in order to show ----.",
          [
            "how crop remains help the soil",
            "why ploughing is necessary",
            "how seeds are planted",
            "why herbicides are used",
            "what farmers feed their animals",
          ],
          "Yüzeydeki kalıntıların toprağın yapısını iyileştiren solucanlar ve diğer canlılar için besin sağlaması, ürün kalıntılarının toprağı nasıl iyileştirdiğini gösterir.",
        ],
        [
          "It can be understood from the passage that no-till farming ----.",
          [
            "has both advantages and disadvantages",
            "is suitable for every climate",
            "requires more fuel than ploughing",
            "has been rejected by most farmers",
            "eliminates the need to control weeds",
          ],
          "Metinde yöntemin pek çok yararı ile herbisit gereksinimi ve soğuk bölgelerde gecikmeli ekim gibi sakıncaları birlikte anlatılır.",
        ],
      ],
    },
    {
      text:
        "Vitamin A deficiency is a serious problem in many low-income countries, especially among young children. It weakens the immune system and is a leading cause of preventable blindness. The problem is most common in places where rice, which contains no vitamin A, makes up most of the diet. In the 1990s, two European scientists, Ingo Potrykus and Peter Beyer, developed a genetically modified variety of rice that produces beta-carotene, a substance the body converts into vitamin A, in the edible part of the grain. The beta-carotene gives the rice a yellow colour, which is why it became known as 'golden rice'. Supporters argued that it could prevent a great deal of illness and death cheaply, since farmers could save and replant the seeds. However, the project faced many obstacles. Some environmental groups opposed it as part of a wider campaign against genetically modified crops, and it took many years of testing before regulators approved it. In 2021, the Philippines became the first country to allow golden rice to be grown commercially. Critics, meanwhile, argue that encouraging a more varied diet and distributing vitamin supplements would be better long-term solutions.",
      questions: [
        [
          "According to the passage, vitamin A deficiency is most common where ----.",
          [
            "people eat mainly rice",
            "people eat a varied diet",
            "genetically modified crops are grown",
            "vitamin supplements are available",
            "rice is coloured yellow",
          ],
          "Metne göre sorun, A vitamini içermeyen pirincin beslenmenin büyük kısmını oluşturduğu yerlerde en yaygındır.",
        ],
        [
          "The rice is called 'golden' because ----.",
          [
            "the beta-carotene in it gives it a yellow colour",
            "it is very expensive to produce",
            "it was developed in a golden laboratory",
            "it is mixed with gold",
            "it grows only in sunny climates",
          ],
          "Metinde beta-karotenin pirince sarı bir renk verdiği ve bu yüzden 'altın pirinç' olarak bilindiği belirtilir.",
        ],
        [
          "It can be inferred from the passage that the approval of golden rice ----.",
          [
            "was delayed by opposition and lengthy testing",
            "happened immediately after it was developed",
            "was opposed by the Philippines",
            "made vitamin supplements illegal",
            "was supported by all environmental groups",
          ],
          "Bazı çevre gruplarının karşı çıkması ve düzenleyicilerin onayından önce yıllarca test yapılması, onayın geciktiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Roads and motorways divide natural habitats into smaller pieces, making it difficult for animals to find food, mates and new territories. Every year, millions of animals are killed by vehicles, and collisions with large animals such as deer, elk and bears also injure and kill many drivers. To address this problem, engineers and ecologists have developed wildlife crossings, structures that allow animals to pass over or under roads safely. Overpasses are bridges covered with soil, grass and shrubs so that they resemble the surrounding landscape, while underpasses are tunnels or culverts beneath the road. Fences are usually built along the road to guide animals towards the crossings. One of the best-known examples is Banff National Park in Canada, where dozens of crossings have been built along a busy motorway since the 1980s. Cameras have recorded hundreds of thousands of crossings by animals including bears, wolves, deer and cougars, and collisions with large animals have fallen by more than eighty per cent. Different species prefer different types of crossing: some large animals avoid narrow tunnels, for example, and prefer wide, open bridges. As a result, planners now design networks of crossings suited to the local wildlife.",
      questions: [
        [
          "According to the passage, wildlife crossings are designed to ----.",
          [
            "let animals cross safely",
            "keep animals away from national parks",
            "help drivers travel faster",
            "provide food for wild animals",
            "replace motorways completely",
          ],
          "Metne göre yaban hayatı geçitleri hayvanların yolların üzerinden ya da altından güvenle geçmesini sağlayan yapılardır.",
        ],
        [
          "The fences built along roads are intended to ----.",
          [
            "lead animals towards the crossings",
            "stop drivers from leaving the road",
            "keep bears inside the park",
            "protect the cameras",
            "mark the edge of the forest",
          ],
          "Metinde yol boyunca yapılan çitlerin hayvanları geçitlere yönlendirdiği belirtilir.",
        ],
        [
          "It can be understood from the passage that the type of crossing chosen ----.",
          [
            "should depend on the animals that live in the area",
            "makes no difference to the animals",
            "is always a narrow tunnel",
            "was decided by the drivers",
            "is the same in every country",
          ],
          "Farklı türlerin farklı geçitleri tercih etmesi ve planlamacıların yerel yaban hayatına uygun geçitler tasarlaması bu sonucu verir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 2010, an explosion on an oil platform in the Gulf of Mexico caused one of the largest oil spills in history. ---- Scientists were surprised to discover how quickly naturally occurring bacteria began to feed on the oil.",
      [
        "Millions of barrels of oil poured into the sea over almost three months.",
        "The Gulf of Mexico is surrounded by the United States, Mexico and Cuba.",
        "Oil is used to make petrol, plastics and many other products.",
        "Many people enjoy holidays on the beaches of the region.",
        "Platforms are used to drill for oil beneath the sea floor.",
      ],
      "Boşluktan önce patlama ve büyük sızıntı, sonra bakterilerin petrolle beslenmesi anlatılır; boşluğa milyonlarca varil petrolün yaklaşık üç ay boyunca denize aktığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some plants can absorb harmful metals such as lead and zinc from contaminated soil. ---- This method, known as phytoremediation, is much cheaper than digging up the soil and removing it.",
      [
        "The plants are later harvested and removed.",
        "Lead was used in paint and petrol for many years.",
        "Plants need sunlight, water and nutrients to grow.",
        "Soil contains minerals, organic matter and living organisms.",
        "Many gardens are planted with colourful flowers.",
      ],
      "Boşluktan sonra 'This method' (bu yöntem) bitkisel arıtma olarak adlandırılır; boşluğa bitkiler büyüdükten sonra hasat edilip güvenle bertaraf edilebildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Cover crops are plants grown between the main crops to protect and enrich the soil. ---- Some types, such as clover and beans, also add nitrogen to the soil, reducing the need for fertiliser.",
      [
        "Their roots hold the soil in place.",
        "Farmers usually harvest their main crops in late summer.",
        "Many crops are grown in large, flat fields.",
        "Fertiliser prices have risen in recent years.",
        "Soil can take hundreds of years to form.",
      ],
      "Boşluktan sonra 'also' ile bazı türlerin toprağa azot da kattığı söylenir; boşluğa örtü bitkilerinin köklerinin toprağı yerinde tutup akıp gitmesini önlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Seed banks store seeds of crops and wild plants at low temperatures. ---- If a variety is lost because of disease, war or climate change, it can be grown again from the stored seeds.",
      [
        "This allows the seeds to remain alive for decades or even centuries.",
        "Many farmers buy new seeds every year from companies.",
        "Some seeds are carried long distances by the wind.",
        "Plants produce seeds after their flowers have been pollinated.",
        "Wheat and rice are among the most important crops in the world.",
      ],
      "Boşluktan sonra bir çeşit kaybolursa depolanan tohumlardan yeniden yetiştirilebileceği söylenir; boşluğa düşük sıcaklığın tohumların onlarca, hatta yüzlerce yıl canlı kalmasını sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Mangrove forests grow along tropical coasts, where their roots are covered by seawater at high tide. ---- For this reason, coastal communities with healthy mangroves often suffer less damage from storms.",
      [
        "Their dense roots weaken incoming waves.",
        "Many tropical countries attract large numbers of tourists.",
        "Mangrove wood has been used for building and fuel.",
        "The tide rises and falls twice a day in most places.",
        "Some fish lay their eggs in shallow coastal waters.",
      ],
      "Boşluktan sonra 'For this reason' ile sağlıklı mangrovları olan toplulukların fırtınalardan daha az zarar gördüğü söylenir; boşluğa yoğun köklerin dalgaların gücünü azalttığını ve erozyonu önlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Large glass windows can be deadly for birds, which often fail to see them and fly straight into them. ---- Covering the glass with small dots or lines spaced a few centimetres apart makes it visible to birds and greatly reduces collisions.",
      [
        "Birds may also see reflections of trees and sky and mistake them for open space.",
        "Glass is made by melting sand at very high temperatures.",
        "Many modern office buildings are covered almost entirely in glass.",
        "Birdwatching is a popular hobby in many countries.",
        "Some birds can fly at more than a hundred kilometres per hour.",
      ],
      "Boşluktan önce kuşların camı göremeyip çarptığı, sonra camı noktalarla kaplamanın çarpışmaları azalttığı anlatılır; boşluğa kuşların ağaç ve gökyüzü yansımalarını açık alan sanabildiğini söyleyen ek açıklama cümlesi gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Wind turbines can kill birds and bats that fly into their blades.",
        "Researchers are testing ways of reducing these deaths.",
        "Many birds migrate south for the winter.",
        "One simple method is to paint one of the three blades black, which makes them easier for birds to see.",
        "Turbines can also be stopped temporarily when large numbers of birds are passing.",
      ],
      odd: 2,
      why: "Parça rüzgâr türbinlerinin kuş ve yarasa ölümlerine yol açmasını ve önlemleri anlatır. Pek çok kuşun kışın güneye göç ettiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Composting turns food and garden waste into a rich material that improves soil.",
        "Microorganisms break down the waste in the presence of air.",
        "Many people grow vegetables in their gardens.",
        "Composting also keeps waste out of rubbish tips.",
        "In landfill sites, food waste produces methane, a powerful greenhouse gas.",
      ],
      odd: 2,
      why: "Parça kompostlamayı ve yararlarını anlatır. Pek çok kişinin bahçesinde sebze yetiştirdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cigarette filters are among the most common items of litter found on beaches.",
        "Although they look like cotton, most are made of a type of plastic.",
        "They can take years to break down and release toxic chemicals into the water.",
        "Many beaches have cafés that serve drinks and snacks.",
        "Some cities now fine smokers who drop them on the ground.",
      ],
      odd: 3,
      why: "Parça sigara filtrelerinin çevre kirliliğine etkisini anlatır. Pek çok plajda içecek ve atıştırmalık sunan kafeler bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Invasive plants can spread rapidly and crowd out native species.",
        "Japanese knotweed, for example, can grow through concrete.",
        "Gardening programmes are popular on television.",
        "In some countries, it is illegal to allow it to spread.",
        "Removing it completely can take several years.",
      ],
      odd: 2,
      why: "Parça istilacı bitkileri ve Japon düğümotunu anlatır. Bahçecilik programlarının televizyonda popüler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Electric buses produce no exhaust fumes in city streets.",
        "They are also much quieter than buses with diesel engines.",
        "Many cities are replacing their old buses with electric ones.",
        "Batteries can be charged overnight or at stops along the route.",
        "Some people prefer to cycle to work in summer.",
      ],
      odd: 4,
      why: "Parça elektrikli otobüsleri anlatır. Bazı insanların yazın işe bisikletle gitmeyi tercih ettiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Road salt is spread on icy roads in winter to make them safer.",
        "Hot chocolate is a popular drink on cold days.",
        "However, the salt is washed into nearby streams and lakes when the ice melts.",
        "High levels of salt can harm freshwater plants and animals.",
        "Some cities now use alternatives, such as sand or beet juice, to reduce the damage.",
      ],
      odd: 1,
      why: "Parça yol tuzunun çevreye etkilerini anlatır. Sıcak çikolatanın soğuk günlerde popüler bir içecek olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
