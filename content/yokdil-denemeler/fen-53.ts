import type { YokdilDeneme } from "./types";

export const FEN_53: YokdilDeneme = {
  no: 53,
  field: "fen",
  vocab: [
    [
      "The drilling had to stop because the rock at the bottom of the hole was far hotter than scientists had ----.",
      ["anticipated", "painted", "borrowed", "forgiven", "decorated"],
      "Deliğin dibindeki kayanın bilim insanlarının 'öngördüğünden' (anticipated) çok daha sıcak olduğu için sondajın durdurulduğu anlatılır.",
    ],
    [
      "The engineers set the gas on fire, hoping it would burn away within a few days, but it is still ---- today.",
      ["burning", "sleeping", "singing", "shrinking", "freezing"],
      "Mühendislerin gazın birkaç günde yanıp biteceğini umduğu ama bugün hâlâ 'yandığı' (burning) anlatılır.",
    ],
    [
      "For decades, nobody could explain how the heavy rocks ---- across the flat surface of the dry lake.",
      ["moved", "grew", "spoke", "dissolved", "flew"],
      "On yıllarca kimsenin ağır kayaların kuru gölün düz yüzeyinde nasıl 'hareket ettiğini' (moved) açıklayamadığı anlatılır.",
    ],
    [
      "The water is ---- with iron, which turns red when it meets the air.",
      ["rich", "empty", "careful", "proud", "fond"],
      "Suyun demir bakımından 'zengin' (rich) olduğu ve havayla karşılaşınca kızardığı anlatılır.",
    ],
    [
      "The cave was ---- from the outside world for millions of years.",
      ["sealed off", "picked up", "given up", "brought about", "looked after"],
      "Mağaranın milyonlarca yıl dış dünyadan 'yalıtılmış/kapalı' (sealed off) kaldığı anlatılır.",
    ],
    [
      "Pilots use the frequent flashes of lightning over the lake to ---- their way at night.",
      ["find", "lose", "hide", "build", "sell"],
      "Pilotların göl üzerindeki sık şimşekleri gece yollarını 'bulmak' (find) için kullandığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the project was abandoned, the hole ---- to a depth of more than twelve kilometres.",
      ["had been drilled", "is drilled", "has been drilled", "will be drilled", "drills"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been drilled'.",
    ],
    [
      "If the engineers had known how much gas there was, they ---- set it on fire.",
      ["might not have", "will not", "do not", "had not", "would not"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have'.",
    ],
    [
      "The movement of the stones ---- on camera for the first time in 2013.",
      ["was recorded", "recorded", "has recorded", "records", "is recording"],
      "Taşların hareketi kaydedilmiştir; edilgen geçmiş zaman: 'was recorded'.",
    ],
    [
      "---- the lake lies beneath thick ice, its water is not frozen.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Gölün kalın buz altında olması ile suyunun donmamış olması zıttır: 'Although'.",
    ],
    [
      "The scientist, ---- team first entered the cave, found many unknown species.",
      ["whose", "who", "which", "whom", "where"],
      "Bilim insanının ekibi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the ice had been studied for many years ---- scientists understand why the water was red.",
      ["did", "had", "were", "have", "do not"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "Lake Baikal contains roughly twenty per cent of the planet's liquid fresh water, ---- makes it extremely important.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki ifadenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The deeper the drill went, ---- the rock became.",
      ["the hotter", "the hottest", "hotter", "hottest", "so hot"],
      "'The deeper ..., the hotter ...' paralel yapısı: 'the hotter'.",
    ],
    [
      "The geologist recommended that the gas ---- before it could poison nearby villages.",
      ["be burned", "is burned", "was burned", "to be burned", "being burned"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be burned'.",
    ],
    [
      "The stones are thought ---- by thin sheets of ice pushed by the wind.",
      ["to be moved", "moving", "to move", "moved", "having moved"],
      "'are thought to be moved' kalıbında edilgen mastar: 'to be moved'.",
    ],
    [
      "The lightning is so frequent ---- the area has been called the lightning capital of the world.",
      ["that", "unless", "although", "whereas", "as if"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The researchers watched the stones ---- slowly across the mud.",
      ["slide", "to sliding", "slid", "be slid", "to have slid"],
      "Algı fiili 'watch sb/sth do sth' kalıbında yalın fiil: 'slide'.",
    ],
    [
      "Had the drilling continued, the scientists ---- even more about the Earth's crust.",
      ["might have learned", "learn", "will learn", "had learned", "are learning"],
      "Devrik üçüncü tip koşul cümlesi: 'might have learned'.",
    ],
    [
      "Neither the heat nor the lack of oxygen ---- the creatures living in the cave.",
      ["harms", "harming", "to harm", "have harm", "harm to"],
      "'Neither ... nor' yapısında fiil yakın özneye göre çekimlenir; tekil özne: 'harms'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1970, Soviet scientists began drilling a narrow hole in the Kola Peninsula, in the far north-west of Russia. Their aim was not to find oil or minerals {1} to learn as much as possible about the Earth's crust by going deeper than anyone had gone before. The work continued for about two decades, {2} by 1989 the hole had reached a depth of 12,262 metres, which made it the deepest artificial hole on Earth. The results surprised geologists. They had expected to find a layer of basalt at a certain depth, {3} instead they found granite that had been cracked and filled with water, which had been squeezed out of the rock by enormous pressure. They also found tiny fossils of plankton several kilometres below the surface. The temperature at the bottom reached about 180 degrees Celsius, far higher than predicted, {4} the hot rock behaved more like plastic than solid stone, making further drilling impossible. The project was abandoned in the 1990s, {5} the hole, only about twenty-three centimetres wide, was sealed with a metal cap. Although it is a record for depth, it penetrated only about a third of the way through the continental crust.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "or", "for"],
          "'not ... but' yapısı: amaç petrol bulmak değil, yer kabuğunu öğrenmekti: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Çalışmanın yirmi yıl sürmesi ve deliğin rekor derinliğe ulaşması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["but", "and", "so", "or", "since"],
          "Bazalt beklemeleri ile granit bulmaları zıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Sıcaklığın yüksekliği ve kayanın plastik gibi davranması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Projenin terk edilmesi ve deliğin bir kapakla kapatılması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the desert of Turkmenistan, near the village of Darvaza, there is a crater about seventy metres wide that has been burning continuously for decades. Its origin is uncertain. According to the most common account, Soviet geologists drilling for natural gas in 1971 accidentally broke into an underground cave, {1} the ground beneath their equipment collapsed. Worried that the escaping methane would harm people and animals in the area, they set it on fire, {2} they expected the gas to burn away within a few weeks. Some local geologists, however, have said that the crater formed in the 1960s {3} was set alight only in the 1980s. Whatever its origin, the fire has never gone out, {4} the glowing crater has become known as the 'Door to Hell'. It attracts many tourists, especially at night, when the flames are most impressive. In 2013, a Canadian explorer became the first person to climb down to the bottom, where he collected samples of soil and found bacteria that could survive the intense heat. The government of Turkmenistan has announced several times that it plans to put out the fire, {5} it would prefer to use the gas rather than waste it.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Mağaraya rastlamaları ve donanımın altındaki zeminin çökmesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["because", "unless", "although", "until", "so that"],
          "Gazı yakmalarının gerekçesi birkaç haftada yanıp biteceğini beklemeleridir: 'because'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "so"],
          "Kraterin 1960'larda oluşması ve 1980'lerde tutuşturulması birbirine bağlanan iki iddiadır: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Yangının hiç sönmemesi ve kraterin 'Cehennem Kapısı' olarak bilinmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["since", "unless", "although", "until", "so that"],
          "Hükümetin yangını söndürmek istemesinin nedeni gazı boşa harcamak yerine kullanmayı tercih etmesidir: 'since'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the hole is the deepest ever drilled, ----.",
      [
        "it reached only a fraction of the way through the crust",
        "Russia is large",
        "drills are made of steel",
        "geologists study rocks",
        "the scientists found tiny fossils of plankton several kilometres below the surface of the ground",
      ],
      "'Although' zıtlık ister: delik şimdiye dek açılan en derin delik olsa da yer kabuğunun yalnızca küçük bir bölümünü geçti.",
    ],
    [
      "If the geologists had not set the gas on fire, ----.",
      [
        "the methane might have harmed people and animals nearby",
        "deserts are dry",
        "gas is invisible",
        "tourists like fire",
        "the explorer from Canada would have climbed down to the bottom of the crater a long time before 2013",
      ],
      "Üçüncü tip koşul: jeologlar gazı yakmasaydı metan yakındaki insanlara ve hayvanlara zarar verebilirdi.",
    ],
    [
      "----, the stones leave long trails in the mud.",
      [
        "As they are pushed slowly across the lake bed",
        "Although rocks are heavy",
        "Unless the wind is strong",
        "Since deserts are hot",
        "While visitors to the national park are taking photographs of the mountains around the dry lake",
      ],
      "Taşlar göl tabanında yavaşça itilirken çamurda uzun izler bırakır.",
    ],
    [
      "The water flowing out of the glacier is red ----.",
      [
        "because the iron it contains rusts when it meets the air",
        "although ice is white",
        "unless the sun is shining",
        "so that tourists can see it",
        "while scientists in Antarctica are studying the movement of glaciers towards the coast",
      ],
      "Buzuldan akan su, içerdiği demir havayla karşılaşınca paslandığı için kırmızıdır.",
    ],
    [
      "Since the cave had been cut off from the surface for millions of years, ----.",
      [
        "the animals inside it had evolved in complete isolation",
        "caves are dark",
        "Romania is in Europe",
        "scientists use lamps",
        "the workers who discovered it had been looking for a place to build a power station in the 1980s",
      ],
      "'Since' neden bildirir: mağara milyonlarca yıl yüzeyden kopuk kaldığından içindeki hayvanlar tam bir yalıtım içinde evrimleşmişti.",
    ],
    [
      "Not only is Lake Baikal the deepest lake in the world, ----.",
      [
        "but it is also one of the oldest",
        "and Siberia is cold",
        "since lakes hold water",
        "so seals live in the sea",
        "unless scientists had studied the creatures that live in it and nowhere else on Earth",
      ],
      "'Not only ... but also' yapısı tamamlanır: Baykal Gölü yalnızca dünyanın en derin gölü değil, aynı zamanda en eskilerinden biridir.",
    ],
    [
      "Once warm, moist air from the sea meets the cold air from the mountains, ----.",
      [
        "storms form over the lake almost every night",
        "mountains are high",
        "the sea is salty",
        "Venezuela is in South America",
        "fishermen living in houses built on stilts above the water have learned to live with the noise",
      ],
      "Denizden gelen sıcak, nemli hava dağlardan gelen soğuk havayla buluşunca göl üzerinde neredeyse her gece fırtınalar oluşur.",
    ],
    [
      "Unless the conditions are exactly right, ----.",
      [
        "the stones do not move at all",
        "the desert is quiet",
        "rocks are brown",
        "winter is cold",
        "the researchers would have placed cameras and GPS devices on the stones much earlier than they did",
      ],
      "'Unless' olumsuz koşul: koşullar tam uygun olmazsa taşlar hiç hareket etmez.",
    ],
    [
      "The air inside the cave contains so little oxygen ----.",
      [
        "that humans can stay there for only a short time",
        "although caves are cool",
        "because the rocks are old",
        "unless the scientists are careful",
        "while bacteria living on the surface of the water produce food for the other creatures",
      ],
      "Mağaranın içindeki hava o kadar az oksijen içerir ki insanlar orada yalnızca kısa süre kalabilir.",
    ],
    [
      "Even though the glacier is extremely cold, ----.",
      [
        "the salty water beneath it does not freeze",
        "Antarctica is large",
        "ice is hard",
        "penguins live there",
        "the geologist who first described the red stain in 1911 believed that it was caused by algae",
      ],
      "'Even though' zıtlık ister: buzul aşırı soğuk olsa da altındaki tuzlu su donmaz.",
    ],
    [
      "As the lake contains so many species found nowhere else, ----.",
      [
        "it has been described as the Galápagos of Russia",
        "fish swim",
        "lakes freeze",
        "trains cross Siberia",
        "the water is so clear that objects can be seen at a depth of about forty metres in some seasons",
      ],
      "Göl başka hiçbir yerde bulunmayan pek çok tür barındırdığı için Rusya'nın Galápagos'u olarak nitelendirilmiştir.",
    ],
  ],
  enTr: [
    [
      "The temperature at the bottom of the hole was far higher than predicted.",
      [
        "Deliğin dibindeki sıcaklık öngörülenden çok daha yüksekti.",
        "Deliğin dibindeki sıcaklık öngörülenden çok daha düşüktü.",
        "Öngörüldüğü gibi yüksek olan sıcaklık, sondajın hızlanmasını sağladı.",
        "Delik sıcaklığı öngördü.",
        "Deliğin dibinde hiç ısı yoktu.",
      ],
      "'The temperature at the bottom of the hole' 'deliğin dibindeki sıcaklık', 'was far higher than predicted' 'öngörülenden çok daha yüksekti' karşılığıdır.",
    ],
    [
      "The geologists expected the gas to burn away within a few weeks.",
      [
        "Jeologlar gazın birkaç hafta içinde yanıp bitmesini bekliyordu.",
        "Jeologlar gazın yıllarca yanmasını bekliyordu.",
        "Birkaç hafta içinde yanıp biten gaz, jeologların beklentilerini doğruladı.",
        "Gaz jeologları birkaç hafta bekledi.",
        "Jeologlar gazı hiç yakmadı.",
      ],
      "'The geologists expected the gas to burn away' 'jeologlar gazın yanıp bitmesini bekliyordu', 'within a few weeks' 'birkaç hafta içinde' karşılığıdır.",
    ],
    [
      "The stones are pushed by thin sheets of ice blown by the wind.",
      [
        "Taşlar, rüzgârın sürüklediği ince buz tabakalarıyla itilir.",
        "Buz tabakaları, rüzgârın sürüklediği taşlarla itilir.",
        "Rüzgârın sürüklediği taşlar, ince buz tabakalarını kırarak gölün kıyısına ulaşır.",
        "Rüzgâr taşları buzdan yapar.",
        "Taşlar hiç hareket etmez.",
      ],
      "'The stones are pushed' 'taşlar itilir', 'by thin sheets of ice blown by the wind' 'rüzgârın sürüklediği ince buz tabakalarıyla' karşılığıdır.",
    ],
    [
      "The bacteria survive without sunlight by using chemicals from the rocks.",
      [
        "Bakteriler, kayalardaki kimyasalları kullanarak güneş ışığı olmadan hayatta kalır.",
        "Bakteriler, güneş ışığını kullanarak kayaları kimyasala dönüştürür.",
        "Güneş ışığı olmadan yaşayamayan bakteriler, kayalardaki kimyasallar nedeniyle ölür.",
        "Kayalar bakterileri kullanır.",
        "Bakteriler yalnızca güneşte yaşar.",
      ],
      "'The bacteria survive without sunlight' 'bakteriler güneş ışığı olmadan hayatta kalır', 'by using chemicals from the rocks' 'kayalardaki kimyasalları kullanarak' karşılığıdır.",
    ],
    [
      "Lake Baikal contains more water than all the Great Lakes of North America combined.",
      [
        "Baykal Gölü, Kuzey Amerika'daki Büyük Göllerin toplamından daha fazla su içerir.",
        "Kuzey Amerika'daki Büyük Göller, Baykal Gölü'nden daha fazla su içerir.",
        "Büyük Göllerin toplamı kadar su içeren Baykal Gölü, her yıl biraz daha küçülmektedir.",
        "Baykal Gölü Kuzey Amerika'dadır.",
        "Baykal Gölü hiç su içermez.",
      ],
      "'Lake Baikal contains more water' 'Baykal Gölü daha fazla su içerir', 'than all the Great Lakes of North America combined' 'Kuzey Amerika'daki Büyük Göllerin toplamından' karşılığıdır.",
    ],
    [
      "Lightning strikes over the lake on about half the nights of the year.",
      [
        "Göl üzerinde yılın yaklaşık yarısındaki gecelerde şimşek çakar.",
        "Göl üzerinde yılda yalnızca bir gece şimşek çakar.",
        "Yılın yarısında şimşek çakan göl, balıkçılar tarafından tamamen terk edilmiştir.",
        "Şimşek gölü yılda iki kez vurur.",
        "Göl üzerinde hiç şimşek çakmaz.",
      ],
      "'Lightning strikes over the lake' 'göl üzerinde şimşek çakar', 'on about half the nights of the year' 'yılın yaklaşık yarısındaki gecelerde' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Sondaj, kaya plastik gibi davranmaya başladığı için durduruldu.",
      [
        "The drilling was stopped because the rock began to behave like plastic.",
        "The rock was stopped because the drilling began to behave like plastic.",
        "The drilling continued even though the rock began to behave like plastic at great depth.",
        "Plastic stopped the rock from drilling.",
        "The drilling was never stopped.",
      ],
      "'Sondaj durduruldu' 'the drilling was stopped', 'kaya plastik gibi davranmaya başladığı için' 'because the rock began to behave like plastic' karşılığıdır.",
    ],
    [
      "Krater, özellikle alevlerin en etkileyici olduğu gece saatlerinde pek çok turist çeker.",
      [
        "The crater attracts many tourists, especially at night, when the flames are most impressive.",
        "Tourists set fire to the crater at night to make the flames more impressive.",
        "The crater attracted many tourists, but the government closed it because the flames were dangerous.",
        "The flames attract the crater at night.",
        "Nobody visits the crater.",
      ],
      "'Krater pek çok turist çeker' 'the crater attracts many tourists', 'özellikle alevlerin en etkileyici olduğu gece saatlerinde' 'especially at night, when the flames are most impressive' karşılığıdır.",
    ],
    [
      "Araştırmacılar, taşlara GPS cihazları yerleştirerek hareketlerini izledi.",
      [
        "The researchers tracked the movements of the stones by fitting them with GPS devices.",
        "The stones tracked the researchers with GPS devices.",
        "The researchers fitted GPS devices to the stones, but none of the stones moved during the study.",
        "GPS devices moved the stones.",
        "The researchers never studied the stones.",
      ],
      "'Araştırmacılar hareketlerini izledi' 'the researchers tracked the movements', 'taşlara GPS cihazları yerleştirerek' 'by fitting them with GPS devices' karşılığıdır.",
    ],
    [
      "Buzulun altındaki su, milyonlarca yıldır hava ile temas etmemiştir.",
      [
        "The water beneath the glacier has not been in contact with air for millions of years.",
        "The air beneath the glacier has been in contact with water for millions of years.",
        "The water beneath the glacier is exposed to the air for a few months every summer.",
        "The glacier has been under water for millions of years.",
        "There is no water beneath the glacier.",
      ],
      "'Buzulun altındaki su' 'the water beneath the glacier', 'milyonlarca yıldır hava ile temas etmemiştir' 'has not been in contact with air for millions of years' karşılığıdır.",
    ],
    [
      "Mağaradaki türlerin çoğu başka hiçbir yerde bulunmaz.",
      [
        "Most of the species in the cave are found nowhere else.",
        "Most of the species found elsewhere live in the cave.",
        "A few of the species in the cave are also found in many other caves around the world.",
        "The cave is found in many species.",
        "No species live in the cave.",
      ],
      "'Mağaradaki türlerin çoğu' 'most of the species in the cave', 'başka hiçbir yerde bulunmaz' 'are found nowhere else' karşılığıdır.",
    ],
    [
      "Kış aylarında göl, üzerinde araç sürülebilecek kadar kalın bir buzla kaplanır.",
      [
        "In winter, the lake is covered with ice thick enough to drive vehicles on.",
        "In winter, vehicles are used to cover the lake with thick ice.",
        "In winter, the lake is covered with ice, but it is never thick enough to walk on safely.",
        "Vehicles freeze the lake in winter.",
        "The lake never freezes.",
      ],
      "'Kış aylarında göl kaplanır' 'in winter, the lake is covered', 'üzerinde araç sürülebilecek kadar kalın bir buzla' 'with ice thick enough to drive vehicles on' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Racetrack Playa is a dry lake bed in Death Valley National Park in California, so flat that its surface varies in height by only a few centimetres over several kilometres. Scattered across it are rocks, some weighing hundreds of kilograms, each lying at the end of a long trail in the cracked mud, showing that it has moved, sometimes for hundreds of metres. For decades, nobody had ever seen them move, and theories ranged from strong winds to magnetic forces and even pranks. Some researchers proposed that the rocks were frozen into large sheets of ice that were pushed by the wind, but the trails sometimes ran in different directions, which seemed difficult to explain. In 2011, a team of scientists placed GPS devices on some rocks, installed cameras and a weather station, and waited. In December 2013, they were lucky. After rain had formed a shallow pond on the playa, the water froze overnight into a thin layer of ice only a few millimetres thick. As the sun rose, the ice broke into large, floating panels, which were pushed by light winds and slowly carried the rocks with them, at a speed of only a few metres a minute. The researchers realised that the rocks moved so slowly, and on such rare occasions, that people visiting the area would probably not have noticed.",
      questions: [
        [
          "According to the passage, it was clear that the rocks had moved because ----.",
          [
            "they left trails in the mud",
            "visitors had seen them",
            "cameras had recorded them in the past",
            "the GPS devices had been placed on them several years before they first moved",
            "they changed colour",
          ],
          "Metne göre her biri çamurda uzun bir izin sonunda duruyordu.",
        ],
        [
          "The movement observed in 2013 was caused by ----.",
          [
            "thin panels of ice driven by gentle winds",
            "a strong storm",
            "magnetic forces",
            "the weight of the rocks pressing on the mud after a period of heavy rain",
            "a prank",
          ],
          "Hafif rüzgârların ittiği ince buz panelleri kayaları sürükledi.",
        ],
        [
          "It can be understood from the passage that visitors had not seen the rocks moving because ----.",
          [
            "the movement was slow and happened only rarely",
            "the park was closed",
            "the rocks moved only at night",
            "the researchers had prevented people from walking on the surface of the playa",
            "the rocks were too small",
          ],
          "Kayalar çok yavaş ve çok seyrek hareket ettiği için ziyaretçiler muhtemelen fark etmezdi.",
        ],
      ],
    },
    {
      text:
        "At the end of the Taylor Glacier in Antarctica, a stream of bright red water slowly flows out of the ice and stains the white surface below it. When the feature was discovered in 1911, the geologist who described it believed that the colour was caused by red algae. In fact, the explanation is quite different. About two million years ago, the glacier moved over a lake of salty water and trapped it beneath the ice. The water, which is several times saltier than the sea, has been isolated from the air and from sunlight ever since. Because salt lowers the freezing point of water, the lake has remained liquid despite temperatures far below zero. As the water flowed over the rock beneath, it dissolved large amounts of iron. When it finally emerges from the glacier and meets the air, the iron reacts with oxygen and rusts, giving the water its blood-red colour; the feature is therefore known as Blood Falls. Remarkably, scientists have found that the water contains living microbes. With no light and almost no oxygen, they survive by using iron and sulphur compounds to obtain energy. Researchers believe that such organisms may help to show how life could survive in similar conditions elsewhere in the solar system, for example beneath the ice of Mars or of moons such as Europa.",
      questions: [
        [
          "According to the passage, the red colour of the water is caused by ----.",
          [
            "iron that rusts when it meets the air",
            "red algae",
            "blood from animals",
            "sunlight shining through the ice of the glacier at a low angle",
            "volcanic rocks",
          ],
          "Metne göre demir havadaki oksijenle tepkimeye girip paslanır.",
        ],
        [
          "The trapped water has not frozen because ----.",
          [
            "it is very salty",
            "it is warmed by the sun",
            "it is constantly moving",
            "microbes living in it produce enough heat to keep it at a temperature above zero",
            "it is deep underground",
          ],
          "Tuz suyun donma noktasını düşürdüğü için sıvı kalmıştır.",
        ],
        [
          "It can be understood from the passage that the microbes are of interest because ----.",
          [
            "they suggest how life might exist on other worlds",
            "they are dangerous",
            "they produce oxygen",
            "they were first discovered by the geologist who described the feature in 1911",
            "they turn water red",
          ],
          "Güneş sisteminin başka yerlerinde benzer koşullarda yaşamın nasıl sürebileceğini gösterebilir.",
        ],
      ],
    },
    {
      text:
        "Lake Baikal, in southern Siberia, is remarkable in many ways. It is the deepest lake in the world, reaching more than 1,600 metres, and probably the oldest, having existed for about twenty-five million years. Although its surface area is smaller than that of several other lakes, its great depth means that it holds about a fifth of all the unfrozen fresh water on the Earth's surface, more than all the Great Lakes of North America combined. The lake lies in a rift, a zone in which the crust is slowly being pulled apart, and it is still widening by a few millimetres each year. Its long isolation has allowed an extraordinary range of life to evolve. Of the many species of plants and animals that live in it, a large proportion are found nowhere else, including a small freshwater seal, whose ancestors are thought to have reached the lake from the Arctic Ocean along rivers. Much of the water's famous clarity is due to a tiny crustacean that feeds on algae and bacteria, effectively filtering the water. In winter, the lake freezes so thickly that vehicles can drive across it. In recent decades, however, scientists have become concerned about pollution from industry and towns, the spread of algae along the shore and the effects of climate change, which is shortening the period during which the lake is covered with ice.",
      questions: [
        [
          "According to the passage, Lake Baikal holds so much water because ----.",
          [
            "it is extremely deep",
            "it has the largest surface area",
            "it is fed by melting glaciers",
            "the crust beneath it is being pulled apart by a few centimetres every year",
            "it never freezes",
          ],
          "Metne göre yüzey alanı daha küçük olsa da büyük derinliği nedeniyle çok su tutar.",
        ],
        [
          "The seal mentioned in the passage is thought to have ----.",
          [
            "travelled from the Arctic along rivers long ago",
            "been brought by humans",
            "evolved from fish",
            "filtered the water by feeding on the algae and bacteria that grow along the shore",
            "lived in the sea recently",
          ],
          "Atalarının nehirler boyunca Arktik Okyanusu'ndan göle ulaştığı düşünülür.",
        ],
        [
          "It can be understood from the passage that the clarity of the water ----.",
          [
            "depends partly on a small animal",
            "is caused by the cold",
            "has been increasing",
            "is due mainly to the pollution produced by industries and towns near the lake",
            "is found only in winter",
          ],
          "Suyu süzen küçük bir kabuklu sayesindedir.",
        ],
      ],
    },
    {
      text:
        "In 1986, workers in southern Romania who were testing the ground for the construction of a power station broke into a cave that had been sealed off from the outside world for about five million years. Named Movile Cave, it turned out to contain one of the most unusual ecosystems ever found. The air inside has about half the normal amount of oxygen and high levels of carbon dioxide and hydrogen sulphide, a gas that smells of rotten eggs, and the warm water is rich in sulphur. Since no sunlight reaches the cave, there are no plants. Instead, the food chain depends on bacteria that float on the surface of the water in a thick mat and obtain energy from chemical reactions involving sulphur and methane. These bacteria are eaten by tiny animals, which are in turn eaten by spiders, centipedes, scorpions and other predators. Scientists have identified dozens of species of invertebrates in the cave, most of which are found nowhere else on Earth. Many have lost their eyes and the colour of their bodies, and have developed long legs and antennae to help them find their way in the dark. Access to the cave is strictly controlled, and only a small number of scientists have entered it, partly to protect the ecosystem and partly because of the danger posed by the poisonous air.",
      questions: [
        [
          "According to the passage, the cave was discovered when ----.",
          [
            "workers were investigating a site for a power station",
            "scientists were searching for new species",
            "a group of tourists got lost",
            "an earthquake opened a crack in the rocks of southern Romania five million years ago",
            "miners were looking for sulphur",
          ],
          "Metne göre işçiler bir elektrik santrali için zemini incelerken keşfedildi.",
        ],
        [
          "The food chain in the cave is based on ----.",
          [
            "bacteria that obtain energy from chemicals",
            "plants that grow on the walls",
            "sunlight entering through cracks",
            "insects that fly in from the surface through small openings in the roof",
            "fish in the water",
          ],
          "Kükürt ve metan içeren kimyasal tepkimelerden enerji elde eden bakterilere dayanır.",
        ],
        [
          "It can be understood from the passage that many animals in the cave ----.",
          [
            "have adapted to living without light",
            "have very good eyesight",
            "are brightly coloured",
            "were introduced by the scientists who first entered the cave in the 1980s",
            "need more oxygen than usual",
          ],
          "Gözlerini ve renklerini yitirmiş, karanlıkta yollarını bulmak için uzun bacaklar ve antenler geliştirmişlerdir.",
        ],
      ],
    },
    {
      text:
        "In north-western Venezuela, near the point at which a river called the Catatumbo enters Lake Maracaibo, an extraordinary display of lightning takes place on about half the nights of the year. The storms typically begin soon after dark and can continue for many hours, with as many as twenty-eight flashes a minute at their peak. Seen from a distance, the silent flashes light up the sky so regularly that for centuries sailors used them to navigate, and the phenomenon has been called the 'Lighthouse of Maracaibo'. In 2016, scientists analysing satellite data confirmed that the area experiences more lightning per square kilometre than anywhere else on Earth. The reason lies in its geography. The lake is surrounded on three sides by high mountains. During the day, the sun heats the water, and warm, moist air rises from it. At night, cool air flows down from the mountains and meets the warm air over the lake, forcing it upwards rapidly and creating huge thunderclouds. Winds from the Caribbean Sea add further moisture. Local people living in houses built on stilts over the water have long been used to the storms. The phenomenon is not constant, however; in 2010, during a severe drought linked to a climate pattern in the Pacific Ocean, the lightning stopped for several weeks, causing concern among residents.",
      questions: [
        [
          "According to the passage, the lightning was historically useful because ----.",
          [
            "it helped sailors to find their way",
            "it provided electricity",
            "it warned of earthquakes",
            "it allowed scientists to study the satellites that passed over the lake at night",
            "it frightened enemies",
          ],
          "Metne göre denizciler yüzyıllarca yön bulmak için kullandı.",
        ],
        [
          "The storms form mainly because ----.",
          [
            "cool mountain air meets warm, moist air over the lake",
            "the lake is very cold",
            "there are no mountains nearby",
            "the houses built on stilts over the water attract lightning during the night",
            "the sun shines at night",
          ],
          "Dağlardan inen serin hava göl üzerindeki sıcak, nemli havayla buluşur.",
        ],
        [
          "It can be understood from the passage that the events of 2010 showed that ----.",
          [
            "the phenomenon depends on weather conditions",
            "the lightning is permanent",
            "satellites were not working",
            "the people living on the lake had decided to move to the mountains around it",
            "droughts increase lightning",
          ],
          "Kuraklık sırasında şimşeklerin haftalarca durması olgunun hava koşullarına bağlı olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the Sahara Desert of Mauritania, there is a huge circular feature about forty kilometres wide, which is easily visible from space. ---- Geologists now believe that it was formed when a dome of rock was pushed up and then worn away by erosion, exposing rings of rock of different hardness.",
      [
        "It was once thought to be the crater left by a meteorite, but no evidence of an impact has been found.",
        "The Sahara is very hot.",
        "Astronauts take many photographs.",
        "It has sometimes been called the 'Eye of the Sahara' because of its striking appearance.",
        "Mauritania is in Africa.",
      ],
      "Boşluk eski ve yeni açıklama arasında geçiş sağlayan bir cümle gerektirir; boşluğa bir zamanlar göktaşı krateri sanıldığını ama çarpma kanıtı bulunmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "As a child, a Peruvian geologist heard stories of a river in the Amazon that was so hot that it boiled. ---- His studies showed that the water, which reaches more than ninety degrees Celsius in places, is heated by hot springs fed by water that has travelled deep underground.",
      [
        "Years later, he found the river and spent several years measuring its temperature and investigating the source of the heat.",
        "The Amazon is a large river.",
        "Peru has many mountains.",
        "Animals that fall into the river are said to be cooked quickly in the scalding water.",
        "Geologists study rocks.",
      ],
      "Boşluk hikâyeden araştırmaya geçişi anlatan bir cümle gerektirir; boşluğa yıllar sonra nehri bulup birkaç yıl boyunca sıcaklığını ölçtüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "On an island off the coast of Western Australia, there is a lake whose water is bright pink. ---- Unlike many other pink lakes, it keeps its colour throughout the year, and even water taken from it in a bottle remains pink.",
      [
        "Scientists have found that the colour is produced mainly by a type of algae and bacteria that thrive in its very salty water.",
        "Australia has many beaches.",
        "Pink is a popular colour.",
        "The lake can be seen only from the air, because the island has no roads or hotels.",
        "Islands are surrounded by water.",
      ],
      "Boşluk rengin nedenini açıklayan bir cümle gerektirir; boşluğa rengin çok tuzlu suda gelişen bir alg ve bakteri türünden kaynaklandığını söyleyen cümle gelmelidir.",
    ],
    [
      "The largest salt flat in the world, in the Andes of Bolivia, covers more than ten thousand square kilometres. ---- For this reason, it is used by scientists to check the accuracy of satellite instruments that measure surface heights.",
      [
        "Its surface is so flat that its height varies by less than a metre over its entire area.",
        "Bolivia has no coastline.",
        "Salt is used in cooking.",
        "After rain, the surface becomes a vast mirror that reflects the sky, attracting many tourists.",
        "The Andes are very high.",
      ],
      "Boşluk 'bu nedenle' ifadesine bağlanan bir neden gerektirir; boşluğa yüzeyin tüm alanında bir metreden az değişecek kadar düz olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "The island of Socotra, in the Arabian Sea, has been isolated from the mainland for millions of years. ---- The best known of these is the dragon's blood tree, which has a shape like an umbrella and red sap.",
      [
        "As a result, roughly a third of the island's plants grow nowhere else in the world.",
        "The Arabian Sea is warm.",
        "Islands are often small.",
        "Traders once sold its resin as a colouring and as a remedy.",
        "Trees produce oxygen.",
      ],
      "Boşluk ünlü bitkiye geçiş sağlayan bir cümle gerektirir; boşluğa bunun sonucunda bitki türlerinin yaklaşık üçte birinin başka hiçbir yerde bulunmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In British Columbia in Canada, there is a lake that becomes covered in hundreds of coloured spots each summer. ---- The colours vary from green to yellow and blue, depending on the minerals in each pool.",
      [
        "As the water evaporates in the heat, it leaves behind small pools rich in minerals, separated by ridges of salt.",
        "Canada has many lakes.",
        "Summer is a warm season.",
        "The lake has long been regarded as sacred by the local Indigenous people.",
        "Colours can be bright.",
      ],
      "Boşluk lekelerin nasıl oluştuğunu açıklayan bir cümle gerektirir; boşluğa su buharlaştıkça tuz sırtlarıyla ayrılmış mineral bakımından zengin küçük havuzlar bıraktığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "One of the deepest mines in the world is a gold mine in South Africa.",
        "It reaches a depth of almost four kilometres below the surface.",
        "The rock at the bottom has a temperature of about sixty degrees Celsius.",
        "Gold is used to make jewellery and electronic devices.",
        "To keep miners safe, ice and cold air are pumped into the tunnels.",
      ],
      odd: 3,
      why: "Parça dünyanın en derin madenlerinden birini anlatır. Altının mücevher ve elektronik aygıtlarda kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "At Pamukkale in Türkiye, hot springs have created white terraces on a hillside.",
        "The water is rich in calcium carbonate, which forms a white rock called travertine.",
        "Many people enjoy visiting Türkiye in summer.",
        "The terraces have built up slowly over many millennia.",
        "To protect them, visitors must now walk barefoot.",
      ],
      odd: 2,
      why: "Parça Pamukkale travertenlerini anlatır. Pek çok kişinin yazın Türkiye'yi ziyaret etmekten hoşlandığını söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "In northern Australia, a long, tube-shaped cloud sometimes rolls across the sky in spring.",
        "Its length may reach about a thousand kilometres.",
        "It forms when sea breezes meet over the peninsula.",
        "Glider pilots travel to the area to ride on the rising air in front of it.",
        "Australia is home to many unusual animals.",
      ],
      odd: 4,
      why: "Parça kuzey Avustralya'daki tüp biçimli bulutu anlatır. Avustralya'nın pek çok ilginç hayvana ev sahipliği yaptığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A river in southern Spain has water that is red and extremely acidic.",
        "This is because of the iron and other metals that have dissolved from the rocks around it.",
        "Spain is famous for its oranges.",
        "Mining has taken place in the area for about five thousand years.",
        "Scientists study the microbes that live in the river to learn about possible life on Mars.",
      ],
      odd: 2,
      why: "Parça kırmızı ve asidik bir İspanyol nehrini anlatır. İspanya'nın portakallarıyla ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In northern Brazil, there is an area of white sand dunes stretching for kilometres.",
        "During the rainy season, the hollows between the dunes fill with clear blue lagoons.",
        "Remarkably, fish appear in the lagoons each year.",
        "Brazil has a very long Atlantic coastline.",
        "Their eggs are thought to be carried in by birds or to survive in the mud during the dry season.",
      ],
      odd: 3,
      why: "Parça Brezilya'daki kum tepeleri arasındaki lagünleri anlatır. Brezilya'nın Güney Amerika'nın en büyük ülkesi olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In Kazakhstan, a lake was formed after an earthquake in 1911 caused a landslide that blocked a valley.",
        "The trunks of tall spruce trees still stick out of the water.",
        "Mountains cover much of the region.",
        "Beneath the surface, the cold water has preserved the branches of the trees.",
        "Divers visit the lake to see this underwater forest.",
      ],
      odd: 2,
      why: "Parça bir heyelanla oluşan ve batık orman barındıran gölü anlatır. Dağların bölgenin büyük kısmını kapladığını söyleyen III. cümle akışı bozar.",
    },
  ],
};
