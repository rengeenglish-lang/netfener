import type { YokdilDeneme } from "./types";

export const FEN_78: YokdilDeneme = {
  no: 78,
  field: "fen",
  vocab: [
    [
      "The dark soils are remarkably ----, even though the surrounding soils are poor.",
      ["fertile", "frozen", "toxic", "dry", "shallow"],
      "Koyu toprakların çevredeki topraklar verimsiz olsa da dikkat çekici derecede 'verimli' (fertile) olduğu anlatılır.",
    ],
    [
      "The machine placed seeds in neat rows at an even depth, so that fewer were ----.",
      ["wasted", "planted", "harvested", "sold", "counted"],
      "Makinenin tohumları düzgün sıralar hâlinde eşit derinliğe yerleştirdiği ve böylece daha azının 'boşa harcandığı' (wasted) anlatılır.",
    ],
    [
      "The farmers built the fields by ---- layers of lake-bed mud and rotting vegetation.",
      ["piling up", "washing away", "burning", "selling", "freezing"],
      "Çiftçilerin tarlaları göl tabanından aldıkları çamur ve bitki katmanlarını 'yığarak' (piling up) yaptığı anlatılır.",
    ],
    [
      "The terraces were carved into the steep mountainsides ---- hand, without machines.",
      ["by", "with", "of", "under", "from"],
      "Terasların dik dağ yamaçlarına makine olmadan 'elle' (by hand) oyulduğu anlatılır.",
    ],
    [
      "The bean plants ---- nitrogen to the soil, which helps the maize to grow.",
      ["supply", "remove", "hide", "deny", "steal"],
      "Fasulye bitkilerinin toprağa azot 'sağladığı' (supply) ve bunun mısırın büyümesine yardım ettiği anlatılır.",
    ],
    [
      "Strong winds ---- the dry topsoil and carried it hundreds of kilometres away.",
      ["picked up", "put off", "turned down", "gave in", "looked after"],
      "Güçlü rüzgârların kuru üst toprağı 'kaldırıp' (picked up) yüzlerce kilometre uzağa taşıdığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time Europeans arrived, the dark soils ---- by people for many centuries.",
      ["had been created", "create", "have created", "were creating", "will be created"],
      "Geçmişteki bir andan önce tamamlanan edilgen eylem: 'had been created'.",
    ],
    [
      "If farmers had not ploughed up the grasslands, the dust storms ---- so severe.",
      ["might not have been", "are not", "will not be", "had not been", "were not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have been'.",
    ],
    [
      "The rice terraces ---- to the list of World Heritage Sites in 1995.",
      ["were added", "added", "have added", "add", "are adding"],
      "Teraslar eklenmiştir; edilgen geçmiş zaman: 'were added'.",
    ],
    [
      "---- the seed drill saved seed, many farmers were slow to adopt it.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Tohum ekme makinesinin tohum tasarrufu sağlaması ile çiftçilerin onu benimsemekte yavaş kalması zıttır: 'Although'.",
    ],
    [
      "The fern, ---- roots contain bacteria that fix nitrogen, grows on the surface of rice fields.",
      ["whose", "who", "which", "whom", "where"],
      "Eğreltiotunun kökleri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the storms of the 1930s ---- the government create a soil conservation service.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The city was built on an island in a lake, ---- farmers created fields in the shallow water.",
      ["where", "which", "when", "whose", "that"],
      "'an island in a lake' yer bildirir; çiftçiler orada sığ suda tarla oluşturur: 'where'.",
    ],
    [
      "The more charcoal the soil contains, ---- nutrients it seems to hold.",
      ["the more", "the most", "more", "most", "so many"],
      "'The more ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Experts recommend that farmers ---- across slopes rather than up and down them.",
      ["plough", "ploughs", "ploughed", "to plough", "ploughing"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'plough'.",
    ],
    [
      "The terraces are believed ---- more than two thousand years ago.",
      ["to have been built", "building", "to build", "built", "having build"],
      "Geçmişe ait edilgen eylem için mastarın geçmiş edilgen biçimi: 'to have been built'.",
    ],
    [
      "Farmers grew turnips and clover ---- the soil could recover between grain crops.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Şalgam ve yonca yetiştirmenin amacı toprağın tahıl ürünleri arasında toparlanabilmesidir: 'so that'.",
    ],
    [
      "The government had trees ---- across the plains to break the force of the wind.",
      ["planted", "plant", "planting", "to plant", "plants"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'planted'.",
    ],
    [
      "Had the young people stayed in the villages, the terraces ---- so badly neglected.",
      ["might not have been", "are not", "will not be", "had not been", "are not being"],
      "Devrik üçüncü tip koşul cümlesi, edilgen: 'might not have been'.",
    ],
    [
      "Neither the archaeologists nor the soil scientists ---- the soils to be so old.",
      ["had expected", "expecting", "to expect", "has expected", "expect to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had expected'.",
    ],
  ],
  cloze: [
    {
      text:
        "The soils of the Amazon rainforest are generally poor. Heavy rainfall washes nutrients out of them, {1} much of the fertility of the forest is stored in the living plants rather than in the ground. In some parts of the Amazon, however, there are patches of remarkably dark, fertile soil, known in Portuguese as terra preta, or 'black earth', which can be up to two metres deep. Scientists now believe that these soils were created by people, many of them between around five hundred and two and a half thousand years ago. They contain large amounts of charcoal, together with fragments of pottery, bones and other waste, {2} it appears that they were formed gradually as people added the remains of cooking fires and household rubbish to the ground around their settlements. The charcoal is particularly important, since its porous structure holds water and nutrients and provides a home for useful microorganisms, {3} it can remain in the soil for hundreds or even thousands of years. The existence of these soils suggests that parts of the Amazon supported much larger populations in the past than was once thought, {4} it has led some researchers to argue that the forest was shaped by human activity to a greater extent than previously believed. Today, scientists are studying whether adding charcoal made from plant waste, known as biochar, could improve poor soils elsewhere, {5} such charcoal could also store carbon in the ground and help to slow climate change.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Yağmurun besinleri yıkaması ve verimliliğin bitkilerde depolanması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Toprakların kömür ve atık içermesi ve bunların yavaş yavaş oluştuğunun anlaşılması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Kömürün suyu ve besinleri tutması ve toprakta uzun süre kalması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Toprakların geçmişte büyük nüfusları düşündürmesi ve bazı araştırmacıların bir sonuca varması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Biyokömürün toprakları iyileştirebilmesi ve karbon depolayabilmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the early eighteenth century, most farmers in Britain sowed seed by scattering it by hand across the fields, a method that wasted large amounts of seed, {1} much of it fell where it could not grow or was eaten by birds. Around 1701, an English farmer named Jethro Tull developed a horse-drawn machine, known as a seed drill, that cut channels in the soil, dropped seeds into them at regular intervals and then covered them over. Because the seeds were planted in straight rows at an even depth, more of them germinated, {2} weeds could be removed more easily from the spaces between the rows. Tull described his methods in a book published in 1731, {3} many farmers were slow to adopt the drill, which was expensive and difficult to make. Over the same period, farmers in eastern England were developing new systems of crop rotation. Instead of leaving fields empty for a year to recover, as had long been common, they grew a sequence of crops, such as wheat, turnips, barley and clover, {4} the turnips and clover provided food for animals during the winter, and the clover enriched the soil. The politician Charles Townshend became so closely associated with promoting turnips that he was nicknamed 'Turnip Townshend'. Together with other changes, such as the enclosure of open fields and improved breeding of animals, these innovations increased food production considerably, {5} historians continue to debate exactly how important each of them was.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "until", "so that"],
          "Yöntemin tohum israf etmesinin nedeni tohumun çoğunun büyüyemeyeceği yere düşmesidir: 'because'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Daha çok tohumun çimlenmesi ve yabancı otların daha kolay temizlenmesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["but", "and", "so", "because", "unless"],
          "Yöntemlerini kitapta anlatması ile çiftçilerin makineyi benimsemekte yavaş kalması karşıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Bir ürün dizisi yetiştirmeleri ve şalgam ile yoncanın hayvanlara besin sağlaması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["although", "because", "unless", "until", "so that"],
          "Yeniliklerin üretimi artırması ile tarihçilerin önemlerini tartışması zıttır: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although most soils in the Amazon are poor, ----.",
      [
        "some patches of dark earth are remarkably fertile",
        "the forest is green",
        "rain falls heavily",
        "rivers are long",
        "the charcoal can remain in the soil for thousands of years",
      ],
      "'Although' zıtlık ister: Amazon'daki toprakların çoğu verimsiz olsa da bazı koyu toprak alanları dikkat çekici derecede verimlidir.",
    ],
    [
      "If the seeds had been scattered by hand, ----.",
      [
        "more of them would have been wasted",
        "hands are useful",
        "fields are large",
        "birds fly",
        "the farmer would have written a book about his methods in 1731",
      ],
      "Üçüncü tip koşul: tohumlar elle saçılsaydı daha çoğu boşa giderdi.",
    ],
    [
      "----, the farmers grew maize, beans and squash in the same field.",
      [
        "Following an ancient tradition",
        "Although maize is tall",
        "Unless it rained",
        "Since Mexico is large",
        "While scientists were studying the nutritional value of the crops",
      ],
      "Eski bir geleneği izleyen çiftçiler mısır, fasulye ve kabağı aynı tarlada yetiştirdi.",
    ],
    [
      "Many terraces have been abandoned in recent decades ----.",
      [
        "because young people have left the villages to find work in cities",
        "although rice is popular",
        "unless it rains",
        "so that tourists can visit",
        "while the terraces were added to the list of World Heritage Sites",
      ],
      "Pek çok teras son on yıllarda terk edilmiştir, çünkü gençler iş bulmak için köylerden kentlere gitmiştir.",
    ],
    [
      "Since the fern supplies nitrogen to the rice, ----.",
      [
        "farmers need to use less chemical fertiliser",
        "rice grows in water",
        "ferns are green",
        "fields are flat",
        "the plant has been used in parts of Asia for centuries",
      ],
      "'Since' neden bildirir: eğreltiotu pirince azot sağladığından çiftçilerin daha az kimyasal gübre kullanması gerekir.",
    ],
    [
      "Not only did the floating fields produce several harvests a year, ----.",
      [
        "but they also helped to feed a large city",
        "and lakes are shallow",
        "since mud is soft",
        "so canals are long",
        "unless the city had been built on an island",
      ],
      "'Not only ... but also' yapısı tamamlanır: yüzen tarlalar yalnızca yılda birkaç ürün vermekle kalmadı, büyük bir kenti beslemeye de yardım etti.",
    ],
    [
      "Once the grasslands had been ploughed up, ----.",
      [
        "there was nothing to hold the soil in place during the drought",
        "grass is green",
        "wheat is grown",
        "the plains are flat",
        "the government had created a new conservation service",
      ],
      "Çayırlar sürülünce kuraklık sırasında toprağı yerinde tutacak hiçbir şey kalmadı.",
    ],
    [
      "Unless the terraces are regularly repaired, ----.",
      [
        "their walls and irrigation channels may collapse",
        "rice grows",
        "mountains are steep",
        "tourists visit",
        "they would not have been built two thousand years ago",
      ],
      "'Unless' olumsuz koşul: teraslar düzenli olarak onarılmadıkça duvarları ve sulama kanalları çökebilir.",
    ],
    [
      "The dust storms were so severe ----.",
      [
        "that they darkened the sky over cities far to the east",
        "although it was summer",
        "because the plains are flat",
        "unless it rained",
        "while farmers were planting new crops",
      ],
      "Toz fırtınaları o kadar şiddetliydi ki çok doğudaki kentlerin üzerindeki gökyüzünü kararttı.",
    ],
    [
      "Even though the three crops are grown together, ----.",
      [
        "each benefits the others in different ways",
        "maize is tall",
        "beans are small",
        "squash is heavy",
        "they are planted at the start of the rainy season",
      ],
      "'Even though' zıtlık ister: üç ürün birlikte yetiştirilse de her biri diğerlerine farklı biçimlerde yarar sağlar.",
    ],
    [
      "As the charcoal holds water and nutrients, ----.",
      [
        "it makes the soil more fertile",
        "charcoal is black",
        "fires are hot",
        "pottery breaks",
        "it was added to the ground around settlements",
      ],
      "Kömür suyu ve besinleri tuttuğu için toprağı daha verimli kılar.",
    ],
  ],
  enTr: [
    [
      "Heavy rainfall washes nutrients out of the soil.",
      [
        "Şiddetli yağmur besinleri topraktan yıkar.",
        "Şiddetli yağmur toprağa besin ekler.",
        "Besinler yağmuru topraktan yıkar.",
        "Yağmur toprağı hiç etkilemez.",
        "Yağmur yoktur.",
      ],
      "'Heavy rainfall washes nutrients' 'şiddetli yağmur besinleri yıkar', 'out of the soil' 'topraktan' karşılığıdır.",
    ],
    [
      "The machine dropped seeds into channels at regular intervals.",
      [
        "Makine tohumları düzenli aralıklarla oluklara bıraktı.",
        "Makine tohumları rastgele tarlaya saçtı.",
        "Oluklar tohumları makineye bıraktı.",
        "Makine hiç tohum ekmedi.",
        "Makine yoktu.",
      ],
      "'The machine dropped seeds into channels' 'makine tohumları oluklara bıraktı', 'at regular intervals' 'düzenli aralıklarla' karşılığıdır.",
    ],
    [
      "Canoes travelled along the canals between the fields.",
      [
        "Kanolar tarlalar arasındaki kanallar boyunca ilerledi.",
        "Tarlalar kanolar arasında ilerledi.",
        "Kanallar kanoları tarlalara taşıdı ve batırdı.",
        "Kanallarda hiç kano yoktu.",
        "Kanal yoktu.",
      ],
      "'Canoes travelled along the canals' 'kanolar kanallar boyunca ilerledi', 'between the fields' 'tarlalar arasındaki' karşılığıdır.",
    ],
    [
      "Water flows down from one terrace to the next.",
      [
        "Su bir terastan diğerine aşağı doğru akar.",
        "Su teraslardan yukarı doğru pompalanır.",
        "Teraslar suyu yukarı iter.",
        "Teraslarda hiç su yoktur.",
        "Teras yoktur.",
      ],
      "'Water flows down' 'su aşağı doğru akar', 'from one terrace to the next' 'bir terastan diğerine' karşılığıdır.",
    ],
    [
      "The squash leaves shade the ground and keep weeds down.",
      [
        "Kabak yaprakları toprağı gölgeler ve yabancı otları bastırır.",
        "Kabak yaprakları yabancı otların büyümesine yardım eder.",
        "Yabancı otlar kabak yapraklarını gölgeler.",
        "Kabağın hiç yaprağı yoktur.",
        "Kabak yoktur.",
      ],
      "'The squash leaves shade the ground' 'kabak yaprakları toprağı gölgeler', 'and keep weeds down' 've yabancı otları bastırır' karşılığıdır.",
    ],
    [
      "Farmers were encouraged to plough along the contours of the land.",
      [
        "Çiftçiler arazinin eş yükselti çizgileri boyunca sürmeye teşvik edildi.",
        "Çiftçilerin araziyi sürmesi yasaklandı.",
        "Arazi çiftçileri sürmeye teşvik etti.",
        "Çiftçiler yamaçları yukarıdan aşağı sürmeye zorlandı.",
        "Çiftçi yoktu.",
      ],
      "'Farmers were encouraged to plough' 'çiftçiler sürmeye teşvik edildi', 'along the contours of the land' 'arazinin eş yükselti çizgileri boyunca' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Bu toprakların insanlar tarafından oluşturulduğu düşünülmektedir.",
      [
        "These soils are thought to have been created by people.",
        "These soils are thought to have destroyed people.",
        "People are thought to have been created by these soils.",
        "These soils were formed only by volcanoes.",
        "There are no soils.",
      ],
      "'Bu toprakların oluşturulduğu düşünülmektedir' 'these soils are thought to have been created', 'insanlar tarafından' 'by people' karşılığıdır.",
    ],
    [
      "Yeni ürün nöbeti tarlaların boş bırakılması ihtiyacını ortadan kaldırdı.",
      [
        "The new crop rotation removed the need to leave fields empty.",
        "The new crop rotation required fields to be left empty for longer.",
        "Empty fields removed the crop rotation.",
        "Fields were never used for crops.",
        "There were no fields.",
      ],
      "'Yeni ürün nöbeti ortadan kaldırdı' 'the new crop rotation removed', 'tarlaların boş bırakılması ihtiyacını' 'the need to leave fields empty' karşılığıdır.",
    ],
    [
      "Tarlalar göl tabanından alınan çamurla yapıldı.",
      [
        "The fields were made with mud taken from the bottom of the lake.",
        "The lake was made with mud taken from the fields.",
        "The fields were made of stone.",
        "Mud took the fields from the lake.",
        "There was no lake.",
      ],
      "'Tarlalar yapıldı' 'the fields were made', 'göl tabanından alınan çamurla' 'with mud taken from the bottom of the lake' karşılığıdır.",
    ],
    [
      "Teraslar, onlara bakacak yeterli insan olmadığı için bozulmaktadır.",
      [
        "The terraces are deteriorating because there are not enough people to look after them.",
        "The terraces are improving because many people look after them.",
        "People are deteriorating because of the terraces.",
        "The terraces have never needed care.",
        "There are no terraces.",
      ],
      "'Teraslar bozulmaktadır' 'the terraces are deteriorating', 'onlara bakacak yeterli insan olmadığı için' 'because there are not enough people to look after them' karşılığıdır.",
    ],
    [
      "Fasulyeler mısır saplarına tırmanır.",
      [
        "The beans climb up the maize stalks.",
        "The maize climbs up the bean stalks.",
        "The beans grow under the ground.",
        "The stalks climb the beans.",
        "There are no beans.",
      ],
      "'Fasulyeler tırmanır' 'the beans climb', 'mısır saplarına' 'up the maize stalks' karşılığıdır.",
    ],
    [
      "Toz fırtınaları milyonlarca ton üst toprağı taşıdı.",
      [
        "The dust storms carried away millions of tonnes of topsoil.",
        "The dust storms added millions of tonnes of topsoil.",
        "Topsoil carried the dust storms.",
        "The dust storms carried only a little sand.",
        "There were no storms.",
      ],
      "'Toz fırtınaları taşıdı' 'the dust storms carried away', 'milyonlarca ton üst toprağı' 'millions of tonnes of topsoil' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "When the Spanish arrived in the Valley of Mexico in 1519, they found the Aztec capital, Tenochtitlan, built on an island in a shallow lake and home to perhaps two hundred thousand people, which made it larger than almost any European city of the day. Much of the food needed to support this population was grown on chinampas, long, narrow fields built in the shallow waters of the lakes around the city. Farmers created them by driving stakes into the lake bed to form a rectangular enclosure and filling it with alternating layers of mud from the bottom of the lake and decaying vegetation, until the surface rose above the water. Willow trees were planted along the edges, and their roots helped to hold the fields in place. The chinampas were separated by canals, along which farmers travelled by canoe, and because the soil was constantly supplied with water from below and renewed with fresh mud from the canals, it remained extremely fertile. Farmers could grow several crops a year, including maize, beans, squash, peppers and flowers, and they often raised seedlings in nurseries before transplanting them. The system also provided fish and water birds. After the Spanish conquest, the lakes were gradually drained, and most chinampas disappeared. A few survive today in the district of Xochimilco, on the southern edge of Mexico City, where some farmers still use the traditional methods. However, the canals are threatened by pollution, the spread of the city and falling water levels, and researchers and local groups are working to preserve them, both as part of the region's heritage and as an example of sustainable farming.",
      questions: [
        [
          "According to the passage, chinampas were created by ----.",
          [
            "piling layers of mud and vegetation inside enclosures in the lake",
            "cutting terraces into hillsides",
            "clearing forests",
            "draining the lakes after the Spanish conquest",
            "building stone walls on dry land",
          ],
          "Metne göre göl tabanına kazıklar çakılarak oluşturulan alanlar göl çamuru ve çürüyen bitki katmanlarıyla dolduruldu.",
        ],
        [
          "The soil of the chinampas remained fertile because ----.",
          [
            "it was constantly supplied with water and renewed with fresh mud",
            "it was left empty every other year",
            "chemical fertilisers were used",
            "it rained every day",
            "the fields were very small",
          ],
          "Toprak alttan sürekli suyla besleniyor ve kanallardan alınan taze çamurla yenileniyordu.",
        ],
        [
          "It can be understood from the passage that the surviving chinampas ----.",
          [
            "are threatened but valued as a model of sustainable farming",
            "are no longer used by anyone",
            "cover most of Mexico City",
            "were built after the Spanish conquest",
            "produce only flowers",
          ],
          "Kirlilik, kentin yayılması ve su seviyesinin düşmesiyle tehdit altındadırlar ama sürdürülebilir tarımın örneği olarak korunmaya çalışılır.",
        ],
      ],
    },
    {
      text:
        "In the mountains of northern Luzon in the Philippines, the steep slopes are covered with thousands of rice terraces, rising like giant steps from the valleys to heights of more than a thousand metres. They were built by the Ifugao people, and while estimates of their age vary, some researchers believe that construction began around two thousand years ago, although recent archaeological studies suggest that many were built more recently, perhaps a few centuries before the arrival of the Spanish. The terraces were carved into the mountainsides by hand, and their walls, made of stone or earth, follow the contours of the land. They are watered by an ingenious system of channels and bamboo pipes that carries water from the forests at the tops of the mountains down from one terrace to the next. The forests are essential to the system, since they collect and store rainwater, and traditionally the Ifugao protected them carefully. The terraces are maintained through cooperation between families, and the cycle of planting and harvesting is accompanied by rituals and ceremonies. In 1995, the rice terraces were added to UNESCO's list of World Heritage Sites, but in 2001 they were placed on its list of sites in danger. Many young people had left the villages to seek work in cities, and without enough people to maintain them, walls were collapsing and terraces were being abandoned. Other threats included the cutting of forests, the arrival of pests such as giant earthworms that damage the walls, and changes in rainfall. After efforts by the government, local communities and international organisations, including programmes to encourage tourism and to support traditional farming, the terraces were removed from the danger list in 2012, although concerns about their future remain.",
      questions: [
        [
          "According to the passage, the forests at the tops of the mountains are important because ----.",
          [
            "they collect and store the water used by the terraces",
            "they provide wood for the walls",
            "they attract tourists",
            "they protect the terraces from giant earthworms that damage the walls",
            "they are used for rituals only",
          ],
          "Metne göre ormanlar yağmur suyunu toplar ve depolar; su kanallar ve bambu borularla teraslara iner.",
        ],
        [
          "The terraces were placed on the list of sites in danger mainly because ----.",
          [
            "there were not enough people to maintain them",
            "they were damaged by an earthquake",
            "too many tourists visited",
            "rice was no longer grown in the Philippines",
            "the government wanted to build roads",
          ],
          "Pek çok genç köyleri terk etmişti ve onlara bakacak yeterli insan olmadan duvarlar çöküyordu.",
        ],
        [
          "It can be understood from the passage that the age of the terraces ----.",
          [
            "is still uncertain",
            "is exactly two thousand years",
            "has been proved to be very recent",
            "is unimportant to researchers",
            "is recorded in ancient documents",
          ],
          "Tahminler değişir; bazıları iki bin yıl önce başladığını düşünürken son çalışmalar pek çoğunun daha yakın zamanda yapıldığını öne sürer.",
        ],
      ],
    },
    {
      text:
        "For thousands of years, farmers in Mexico and Central America have grown crops in a system known as the milpa, in which maize, beans and squash, along with other plants, are grown together in the same field. In North America, a similar combination was widely used by many Native American peoples, who sometimes referred to the three crops as the 'three sisters'. The crops benefit one another in several ways. The tall maize stalks provide a natural support for the climbing beans. The beans, like other members of their plant family, host bacteria in their roots that capture nitrogen from the air and convert it into a form that plants can use, which helps to maintain the fertility of the soil. The broad leaves of the squash spread across the ground, shading it, which helps to keep the soil moist and prevents weeds from growing. The combination is also valuable for human nutrition. Maize provides energy, but it lacks certain important nutrients, which beans supply, and together the crops form a more balanced diet than any one of them alone. Traditionally, maize in the region was also cooked with a mineral substance such as lime, a process that makes certain vitamins in the grain available to the body. Researchers studying the milpa have found that fields planted with a mixture of crops can produce more food in total than the same area divided between single crops, and that they may be more resistant to pests and to unpredictable weather. For this reason, some agricultural scientists see such traditional systems as a source of ideas for developing more sustainable forms of farming today.",
      questions: [
        [
          "According to the passage, the beans help the maize by ----.",
          [
            "improving the fertility of the soil",
            "shading the ground",
            "providing support",
            "making certain vitamins in the grain available to the body",
            "attracting birds",
          ],
          "Metne göre fasulyeler köklerinde havadaki azotu bitkilerin kullanabileceği biçime çeviren bakteriler barındırır.",
        ],
        [
          "The writer mentions nutrition in order to show that ----.",
          [
            "the crops together form a more balanced diet",
            "maize is the best food",
            "squash is poisonous",
            "beans provide energy",
            "the crops are unhealthy",
          ],
          "Mısır enerji sağlar ama bazı besinlerden yoksundur; fasulye bunları sağlar ve birlikte daha dengeli bir beslenme oluştururlar.",
        ],
        [
          "It can be understood from the passage that some scientists see the milpa as ----.",
          [
            "a source of ideas for sustainable farming",
            "an outdated method",
            "suitable only for small gardens",
            "harmful to the soil",
            "less productive than single crops",
          ],
          "Bazı tarım bilimciler bu geleneksel sistemleri bugün daha sürdürülebilir tarım biçimleri geliştirmek için bir fikir kaynağı olarak görür.",
        ],
      ],
    },
    {
      text:
        "In the early twentieth century, farmers in the dry heartland of America ploughed up millions of hectares of natural grassland to grow wheat, encouraged by high prices and a series of unusually wet years. For millennia, the long roots of wild prairie grasses had anchored the earth against the fierce winds of the region. In the early 1930s, however, a long period of severe drought began. Crops failed, and with nothing to hold it down, gales lifted the parched earth into vast clouds of dust. Some of the storms carried dust hundreds or even thousands of kilometres, darkening the sky over cities on the east coast. People in the affected areas suffered from breathing problems, and countless households abandoned their land and headed for California. The disaster became known as the Dust Bowl. In 1935, as a huge dust storm from the plains reached Washington, the soil scientist Hugh Bennett, who had long warned about the dangers of soil erosion, persuaded members of Congress to create a government agency devoted to soil conservation. The agency encouraged and paid farmers to adopt methods designed to protect the soil, such as ploughing along the contours of the land rather than in straight lines, rotating crops, leaving the remains of crops on the fields and planting belts of trees to break the force of the wind. Over the following years, these methods, together with the return of the rains, greatly reduced erosion. The Dust Bowl is still often cited as an example of how farming practices that ignore local conditions can turn a natural event into an environmental disaster.",
      questions: [
        [
          "According to the passage, the dust storms occurred because ----.",
          [
            "the natural grassland had been ploughed up before a long drought",
            "too many trees had been planted",
            "the rains were unusually heavy",
            "the government paid farmers to plough along the contours",
            "the soil was too wet",
          ],
          "Metne göre doğal çayırlar buğday için sürülmüştü ve uzun bir kuraklık başlayınca toprağı tutacak bir şey kalmadı.",
        ],
        [
          "The writer mentions the dust storm reaching Washington to show that ----.",
          [
            "it helped to persuade Congress to act",
            "Washington was badly damaged",
            "Bennett caused the storm",
            "the storms were small",
            "the plains are near Washington",
          ],
          "Büyük bir toz fırtınası Washington'a ulaşırken Bennett Kongre üyelerini bir toprak koruma kurumu kurmaya ikna etti.",
        ],
        [
          "It can be understood from the passage that the Dust Bowl is often cited as an example of ----.",
          [
            "how poor farming practices can worsen a natural event",
            "a disaster caused only by drought",
            "the benefits of growing wheat",
            "successful government planning",
            "a problem that cannot be solved",
          ],
          "Yerel koşulları göz ardı eden tarım uygulamalarının doğal bir olayı çevresel felakete dönüştürebileceğinin örneği olarak gösterilir.",
        ],
      ],
    },
    {
      text:
        "Azolla is a small floating fern, only a centimetre or two across, that grows on the surface of ponds, ditches and rice fields in warm parts of the world. It has an unusual partnership with a type of microorganism that lives inside small cavities in its leaves. The microorganism captures nitrogen from the air and converts it into a form that plants can use, and in return the fern provides it with a protected place to live. As a result, Azolla can grow extremely quickly without any added fertiliser, sometimes doubling its mass in a few days. For centuries, farmers in parts of China and Vietnam have grown Azolla in their rice fields. When the fern dies and decomposes, the nitrogen it contains is released into the water and the soil, acting as a natural fertiliser for the rice. A thick layer of Azolla on the surface of the water can also help to block the light that weeds need to grow. In some places, farmers combine rice and Azolla with ducks, which eat the fern, insects and weeds, while their droppings further fertilise the field. Azolla is also used as feed for animals and fish. Scientists have taken a particular interest in the plant because of an event that may have occurred around fifty million years ago, when, according to one theory, vast mats of Azolla grew on the surface of the Arctic Ocean, which at that time was partly covered by a layer of fresh water. As the plants died and sank to the sea floor, they may have removed large amounts of carbon dioxide from the atmosphere, contributing to a cooling of the global climate. Today, researchers are investigating whether the fern could be used more widely to reduce the use of chemical fertilisers.",
      questions: [
        [
          "According to the passage, Azolla can grow without added fertiliser because ----.",
          [
            "a microorganism in its leaves captures nitrogen from the air",
            "it grows in the Arctic",
            "ducks eat it",
            "it blocks the light that weeds need to grow",
            "it has very deep roots",
          ],
          "Metne göre yapraklarındaki küçük boşluklarda yaşayan bir mikroorganizma havadaki azotu bitkilerin kullanabileceği biçime çevirir.",
        ],
        [
          "Farmers use ducks in rice fields with Azolla because ----.",
          [
            "they eat weeds and insects and fertilise the field",
            "they protect the fern",
            "they plant the rice",
            "they produce nitrogen",
            "they keep the water warm",
          ],
          "Ördekler eğreltiotunu, böcekleri ve yabancı otları yer; dışkıları da tarlayı ayrıca gübreler.",
        ],
        [
          "It can be understood from the passage that the theory about the Arctic suggests Azolla ----.",
          [
            "may once have helped to cool the climate",
            "caused global warming",
            "never grew in the Arctic",
            "was eaten by ducks in the ocean",
            "produced fresh water",
          ],
          "Bitkiler ölüp deniz tabanına battıkça atmosferden büyük miktarda karbondioksit uzaklaştırmış ve iklimin soğumasına katkıda bulunmuş olabilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1831, the American inventor Cyrus McCormick demonstrated a horse-drawn machine for cutting grain. ---- The machine made it possible for farmers to harvest much larger fields than before.",
      [
        "One machine could do the work of several men using hand tools.",
        "Horses were used on many farms.",
        "Grain is used to make bread.",
        "McCormick later built a large factory in Chicago and sold machines all over the world.",
        "Harvests take place in late summer.",
      ],
      "Boşluk makinenin verimliliğini anlatıp daha büyük tarlaların hasat edilmesine bağlanan bir cümle gerektirir; boşluğa tek bir makinenin el aletleri kullanan birkaç adamın işini yapabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The combine harvester gets its name from the fact that it combines several tasks in a single machine. ---- Modern combines are guided by satellite navigation and record the yield in each part of the field.",
      [
        "It cuts the crop, separates the grain from the stalks and cleans it as it moves across the field.",
        "Fields are often large.",
        "Machines need fuel.",
        "Early combines were pulled by teams of more than twenty horses or mules.",
        "Grain is stored in silos.",
      ],
      "Boşluk makinenin hangi işleri birleştirdiğini açıklayıp modern biçimlerine bağlanan bir cümle gerektirir; boşluğa tarlada ilerlerken ürünü kestiğini, taneyi saptan ayırdığını ve temizlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1920s, the Northern Irish engineer Harry Ferguson developed a new way of attaching ploughs and other tools to tractors. ---- His design made tractors much safer and more efficient, and tractors around the world still rely on it.",
      [
        "His system allowed the tractor's weight to help hold the plough in the ground and reduced the risk of the tractor tipping over.",
        "Northern Ireland is part of the United Kingdom.",
        "Tractors replaced horses.",
        "Ferguson also built and flew one of the first aeroplanes in Ireland.",
        "Ploughs are made of steel.",
      ],
      "Boşluk sistemin nasıl çalıştığını açıklayıp güvenlik ve verimliliğe bağlanan bir cümle gerektirir; boşluğa sistemin traktör ağırlığının pulluğu toprakta tutmasına yardım ettiğini ve devrilme riskini azalttığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1930s, the American scientist William Gericke showed that plants could be grown without soil, with their roots in water containing dissolved nutrients. ---- Today, the method is used to grow vegetables in greenhouses and even on the International Space Station.",
      [
        "During the following decade, the technique was used to grow fresh vegetables for soldiers on remote Pacific islands with no fertile soil.",
        "Soil contains many minerals.",
        "Plants need sunlight.",
        "He gave the method the name hydroponics, from Greek words meaning 'water' and 'work'.",
        "Islands are surrounded by water.",
      ],
      "Boşluk yöntemin ilk pratik kullanımını anlatıp bugünkü kullanımına bağlanan bir cümle gerektirir; boşluğa izleyen on yılda tekniğin verimli toprağı olmayan uzak Pasifik adalarında askerler için sebze yetiştirmekte kullanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In aquaponic systems, fish and plants are raised together. ---- The plants absorb these nutrients and clean the water, which is then returned to the fish.",
      [
        "Water from the fish tanks, which contains nutrients from the fish waste, is pumped to the plants.",
        "Fish live in water.",
        "Plants have roots.",
        "Supporters say the systems use much less water than conventional farming.",
        "Tanks are made of glass.",
      ],
      "Boşluk suyun bitkilere nasıl ulaştığını anlatıp bitkilerin besinleri emmesine bağlanan bir cümle gerektirir; boşluğa balık atığından besin içeren tank suyunun bitkilere pompalandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the nineteenth century, the droppings of seabirds that had built up over thousands of years on islands off the coast of Peru became one of the most valuable fertilisers in the world. ---- The trade collapsed once the deposits had been largely used up and chemical fertilisers became available.",
      [
        "Ships carried millions of tonnes of the material to Europe and North America, bringing great wealth to Peru.",
        "Peru is in South America.",
        "Seabirds eat fish.",
        "Workers digging the deposits often laboured in terrible conditions.",
        "Islands are often rocky.",
      ],
      "Boşluk ticaretin büyüklüğünü anlatıp çöküşüne bağlanan bir cümle gerektirir; boşluğa gemilerin milyonlarca ton malzemeyi Avrupa ve Kuzey Amerika'ya taşıdığını ve Peru'ya büyük servet getirdiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Quinoa has been grown in the Andes for thousands of years.",
        "It can survive frost, drought and salty soils.",
        "Its seeds contain more protein than most grains.",
        "Llamas are kept by many farmers in the Andes.",
        "Rising demand in other countries has raised its price.",
      ],
      odd: 3,
      why: "Parça kinoayı anlatır. Andlar'da pek çok çiftçinin lama beslediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Teff is a tiny grain that is a staple food in Ethiopia.",
        "It is used to make a soft, flat bread.",
        "Ethiopia has its own calendar.",
        "The grain contains no gluten.",
        "It can be grown in poor soils and under difficult conditions.",
      ],
      odd: 2,
      why: "Parça teff tahılını anlatır. Etiyopya'nın kendi takvimi olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sorghum is one of the most important cereal crops in Africa.",
        "It tolerates heat and drought better than maize.",
        "Its grain is used for food, animal feed and brewing.",
        "Some varieties have sweet stems used to make syrup.",
        "Africa is the second-largest continent.",
      ],
      odd: 4,
      why: "Parça Afrika'nın önemli tahıllarından sorgumu anlatır. Afrika'nın ikinci büyük kıta olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Breadfruit trees can produce hundreds of large fruits each year.",
        "The fruit is rich in starch and can be cooked like potatoes.",
        "In the eighteenth century, British ships carried young trees from the Pacific to the Caribbean.",
        "Ships at that time depended on the wind.",
        "Today, breadfruit is being promoted as a crop that could help to improve food security.",
      ],
      odd: 3,
      why: "Parça ekmek ağacını anlatır. O dönem gemilerin rüzgâra bağlı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Duckweed is one of the fastest-growing plants in the world.",
        "It floats on the surface of ponds and slow-moving water.",
        "Ponds are home to frogs and insects.",
        "It contains a high proportion of protein.",
        "Researchers are studying it as a possible food and animal feed.",
      ],
      odd: 2,
      why: "Parça su mercimeğini anlatır. Göletlerin kurbağalara ve böceklere ev sahipliği yaptığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In parts of East Africa, farmers protect maize from pests using a method called push-pull.",
        "A plant grown between the maize rows releases chemicals that drive insects away.",
        "A grass planted around the field attracts the insects and traps them.",
        "Maize was first grown in Mexico.",
        "The method has greatly increased harvests on many small farms.",
      ],
      odd: 3,
      why: "Parça Doğu Afrika'daki 'it-çek' zararlı denetim yöntemini anlatır. Mısırın ilk Meksika'da yetiştirildiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
