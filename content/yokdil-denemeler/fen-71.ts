import type { YokdilDeneme } from "./types";

export const FEN_71: YokdilDeneme = {
  no: 71,
  field: "fen",
  vocab: [
    [
      "The long, tube-shaped cloud can ---- for hundreds of kilometres across the sky.",
      ["stretch", "shrink", "vanish instantly", "freeze solid", "collapse"],
      "Uzun, boru biçimli bulutun gökyüzünde yüzlerce kilometre boyunca 'uzanabildiği' (stretch) anlatılır.",
    ],
    [
      "These clouds are so high that they remain ---- by the sun after the ground below has become dark.",
      ["illuminated", "hidden", "frozen", "destroyed", "polluted"],
      "Bu bulutların o kadar yüksekte olduğu, aşağıdaki yer karardıktan sonra da güneşle 'aydınlanmış' (illuminated) kaldığı anlatılır.",
    ],
    [
      "The flashes last only a fraction of a second, which makes them very difficult to ----.",
      ["photograph", "ignore", "produce", "prevent", "heat"],
      "Işık çakmalarının saniyenin çok küçük bir bölümü sürdüğü ve bu yüzden 'fotoğraflanmalarının' (photograph) çok zor olduğu anlatılır.",
    ],
    [
      "The fine threads of ice grow on rotting wood only when the ---- conditions are right.",
      ["weather", "economic", "political", "legal", "musical"],
      "İnce buz ipliklerinin çürümekte olan odun üzerinde yalnızca 'hava' (weather) koşulları uygun olduğunda büyüdüğü anlatılır.",
    ],
    [
      "The wall of dust approached the city ----, turning day into night within minutes.",
      ["rapidly", "politely", "quietly and slowly", "rarely", "invisibly"],
      "Toz duvarının kente 'hızla' (rapidly) yaklaşarak dakikalar içinde gündüzü geceye çevirdiği anlatılır.",
    ],
    [
      "The storm ---- power lines and flattened crops across several states.",
      ["knocked down", "turned up", "gave in", "looked after", "put up with"],
      "Fırtınanın birkaç eyalette elektrik hatlarını 'devirdiği' (knocked down) ve ekinleri yerle bir ettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the scientists reviewed the film, the storm ---- far away.",
      ["had moved", "moves", "has moved", "will move", "is moving"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had moved'.",
    ],
    [
      "If the camera had not been pointed above the storm, the flash ---- recorded.",
      ["would not have been", "is not", "will not be", "had not been", "was not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'would not have been'.",
    ],
    [
      "The term 'derecho' ---- by an American scientist in the 1880s.",
      ["was introduced", "introduced", "has introduced", "introduces", "is introducing"],
      "Terim tanıtılmıştır; edilgen geçmiş zaman: 'was introduced'.",
    ],
    [
      "---- the clouds had been reported for centuries, scientists only recently began to explain them.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Bulutların yüzyıllardır bildirilmesi ile bilim insanlarının ancak yakın zamanda açıklamaya başlaması zıttır: 'Although'.",
    ],
    [
      "The scientist, ---- theory of drifting continents is now famous, also studied ice on wood.",
      ["whose", "who", "which", "whom", "where"],
      "Bilim insanının kuramı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only in 2015 ---- researchers identify the fungus responsible for the ice.",
      ["did", "had", "were", "have", "do"],
      "'Only in' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The cloud is most often seen over a gulf in northern Australia, ---- it appears in spring.",
      ["where", "which", "when", "whose", "that"],
      "'a gulf' yer bildirir; bulut orada görülür: 'where'.",
    ],
    [
      "The drier the air, ---- the ice blades grow.",
      ["the taller", "the tallest", "taller", "tallest", "so tall"],
      "'The drier ..., the taller ...' paralel yapısı: 'the taller'.",
    ],
    [
      "Officials recommend that drivers ---- off the road when a dust storm approaches.",
      ["pull", "pulls", "pulled", "to pull", "pulling"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'pull'.",
    ],
    [
      "The physicist is known ---- the first artificial snow crystals in a laboratory.",
      ["to have made", "making", "to be made", "made", "having make"],
      "Geçmişte yapılan eylem için mastarın geçmiş biçimi: 'to have made'.",
    ],
    [
      "Glider pilots travel to the region every year ---- they can ride the wave of air.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Pilotların bölgeye gitmesinin amacı hava dalgasına binebilmektir: 'so that'.",
    ],
    [
      "The researchers had samples of the wood ---- for traces of fungus.",
      ["tested", "test", "testing", "to test", "tests"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'tested'.",
    ],
    [
      "Had the residents been warned earlier, many accidents ---- avoided.",
      ["could have been", "are", "will be", "had been", "are being"],
      "Devrik üçüncü tip koşul cümlesi, edilgen: 'could have been'.",
    ],
    [
      "Neither the pilots nor the scientists ---- a flash of that kind before.",
      ["had seen", "seeing", "to see", "has seen", "see to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had seen'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the spring, early in the morning, residents of the small town of Burketown in northern Australia sometimes see a remarkable sight: a single, enormously long cloud, shaped like a rolling tube, moving rapidly across the sky towards them from the sea. Known locally as the Morning Glory, the cloud can be up to a thousand kilometres long, {1} it often travels at speeds of around forty to sixty kilometres per hour. Sometimes several such clouds appear one behind the other, like waves approaching a beach. Scientists believe that the clouds form when breezes blowing in from the sea on opposite sides of the peninsula meet during the night, {2} the collision creates a wave in a layer of cool, moist air near the ground. As the air rises at the front of the wave, it cools and forms cloud, {3} as it sinks again at the back, the cloud evaporates, so the cloud appears to roll backwards as it moves forward. Similar 'roll clouds' have been seen in other parts of the world, {4} nowhere are they as regular and as spectacular as in this region. In recent decades, the Morning Glory has attracted glider pilots from around the world, {5} they are able to ride the rising air at the front of the cloud for long distances, much as surfers ride an ocean wave.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Bulutun bin kilometre uzunluğa ulaşabilmesi ve hızla ilerlemesi birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Esintilerin buluşması ve çarpışmanın bir dalga yaratması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["while", "because", "unless", "until", "so that"],
          "Havanın önde yükselip bulut oluşturması ile arkada çöküp buharlaşması karşılaştırılır: 'while'.",
        ],
        [
          "(24) ----",
          ["but", "and", "so", "because", "unless"],
          "Benzer bulutların başka yerlerde görülmesi ile hiçbir yerde bu kadar düzenli olmaması karşıttır: 'but'.",
        ],
        [
          "(25) ----",
          ["because", "although", "unless", "until", "so that"],
          "Pilotların ilgisinin nedeni bulutun önündeki yükselen havaya uzun mesafeler binebilmeleridir: 'because'.",
        ],
      ],
    },
    {
      text:
        "Noctilucent clouds, whose name means 'night-shining', are the highest clouds in Earth's atmosphere, forming at a height of around eighty kilometres, far above ordinary weather. They are usually seen in summer at latitudes between about fifty and seventy degrees, shortly after sunset or before sunrise, {1} the sun has set for observers on the ground but is still shining on the clouds high above, which glow with a pale blue or silvery light against the dark sky. The first widely reported sightings were made in 1885, two years after the huge eruption of the Krakatoa volcano in Indonesia, {2} some scientists at first assumed that they were caused by volcanic dust. However, the clouds continued to appear long after the dust from the eruption had settled. They are now known to consist of tiny crystals of ice that form around particles of dust, much of which probably comes from meteors burning up in the upper atmosphere, {3} the air at that height is extremely dry and cold, with temperatures that can fall below minus 120 degrees Celsius in summer. In recent decades, noctilucent clouds appear to have become brighter and more frequent, {4} they have been seen further from the poles than before. Some scientists have suggested that this may be linked to rising levels of methane, which produces water vapour when it breaks down in the upper atmosphere, {5} others point out that changes in the sun's activity may also play a part.",
      blanks: [
        [
          "(26) ----",
          ["when", "unless", "although", "until", "so that"],
          "Bulutların, güneş yerdeki gözlemciler için batmışken yukarıdaki bulutları aydınlattığı zamanda görüldüğü anlatılır: 'when'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "İlk gözlemlerin patlamadan sonra yapılması ve bazı bilim insanlarının volkanik toza bağlaması birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["although", "because", "unless", "so that", "until"],
          "Buz kristallerinin oluşması ile o yükseklikteki havanın son derece kuru olması zıttır: 'although'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Bulutların parlaklaşması ve kutuplardan daha uzakta görülmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["but", "and", "so", "because", "unless"],
          "Bazılarının metanla bağlantı önermesi ile diğerlerinin güneş etkinliğine işaret etmesi karşıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although roll clouds have been seen in other parts of the world, ----.",
      [
        "nowhere are they as regular as in northern Australia",
        "clouds are white",
        "Australia is large",
        "the sea is blue",
        "glider pilots travel to the region every spring to ride the rising air",
      ],
      "'Although' zıtlık ister: kayan bulutlar dünyanın başka yerlerinde görülmüş olsa da hiçbir yerde kuzey Avustralya'daki kadar düzenli değildir.",
    ],
    [
      "If the clouds had been caused only by volcanic dust, ----.",
      [
        "they would have disappeared once the dust had settled",
        "volcanoes erupt",
        "dust is fine",
        "Indonesia has many islands",
        "they would have formed at a height of around eighty kilometres",
      ],
      "Üçüncü tip koşul: bulutlar yalnızca volkanik tozdan kaynaklansaydı toz çöktükten sonra ortadan kalkarlardı.",
    ],
    [
      "----, the scientists noticed two bright columns of light above a distant storm.",
      [
        "Reviewing the images frame by frame",
        "Although storms are loud",
        "Unless it rained",
        "Since cameras are expensive",
        "While pilots had reported similar flashes for many years",
      ],
      "Görüntüleri kare kare inceleyen bilim insanları uzaktaki bir fırtınanın üzerinde iki parlak ışık sütunu fark etti.",
    ],
    [
      "Hair ice forms only on certain pieces of wood ----.",
      [
        "because a particular fungus must be living inside them",
        "although wood is brown",
        "unless it is summer",
        "so that trees grow",
        "while the air temperature is just below freezing",
      ],
      "Saç buzu yalnızca bazı odun parçalarında oluşur, çünkü içlerinde belirli bir mantar yaşıyor olmalıdır.",
    ],
    [
      "Since the snow sublimates rather than melting, ----.",
      [
        "tall, sharp blades of ice can be left behind",
        "snow is cold",
        "mountains are high",
        "the sun shines",
        "the formations were first described by a famous naturalist in 1835",
      ],
      "'Since' neden bildirir: kar erimek yerine doğrudan buharlaştığından geride uzun, keskin buz bıçakları kalabilir.",
    ],
    [
      "Not only did the dust storm reduce visibility to almost nothing, ----.",
      [
        "but it also caused delays at the airport",
        "and dust is dry",
        "since deserts are hot",
        "so wind blows",
        "unless the storm had been caused by a collapsing thunderstorm",
      ],
      "'Not only ... but also' yapısı tamamlanır: toz fırtınası yalnızca görüşü neredeyse sıfıra indirmekle kalmadı, havalimanında gecikmelere de yol açtı.",
    ],
    [
      "Once the line of storms had passed, ----.",
      [
        "hundreds of thousands of homes were left without electricity",
        "storms are dangerous",
        "the sky is grey",
        "winds blow",
        "the scientist had already given the phenomenon its name",
      ],
      "Fırtına hattı geçince yüz binlerce ev elektriksiz kaldı.",
    ],
    [
      "Unless the air near the ground is cool and moist, ----.",
      [
        "the wave cannot produce a cloud",
        "air is invisible",
        "clouds are white",
        "the sea is warm",
        "the glider pilots would not have travelled to Burketown",
      ],
      "'Unless' olumsuz koşul: yere yakın hava serin ve nemli olmadıkça dalga bulut oluşturamaz.",
    ],
    [
      "The temperatures in the upper atmosphere are so low ----.",
      [
        "that water vapour freezes into ice crystals",
        "although it is summer",
        "because meteors burn",
        "unless the sun shines",
        "while the clouds glow with a pale blue light",
      ],
      "Üst atmosferdeki sıcaklıklar o kadar düşüktür ki su buharı buz kristallerine donar.",
    ],
    [
      "Even though sprites are very large, ----.",
      [
        "they were not photographed until 1989",
        "storms are large",
        "they are red",
        "the sky is dark",
        "they occur high above thunderstorms",
      ],
      "'Even though' zıtlık ister: spritelar çok büyük olsa da 1989'a kadar fotoğraflanmadılar.",
    ],
    [
      "As the crystals grow differently at different temperatures, ----.",
      [
        "a snowflake's shape records the conditions it passed through",
        "snow is white",
        "winter is cold",
        "crystals are small",
        "the physicist grew the first artificial snow crystals in 1936",
      ],
      "Kristaller farklı sıcaklıklarda farklı büyüdüğü için bir kar tanesinin biçimi geçtiği koşulları kaydeder.",
    ],
  ],
  enTr: [
    [
      "The cloud appears to roll backwards as it moves forward.",
      [
        "Bulut ilerlerken geriye doğru yuvarlanıyor gibi görünür.",
        "Bulut geriye giderken ileri doğru yuvarlanır.",
        "Bulut hiç hareket etmez.",
        "Bulut ilerlemeyi durdurur.",
        "Bulut yoktur.",
      ],
      "'The cloud appears to roll backwards' 'bulut geriye doğru yuvarlanıyor gibi görünür', 'as it moves forward' 'ilerlerken' karşılığıdır.",
    ],
    [
      "The clouds glow with a pale blue light against the dark sky.",
      [
        "Bulutlar karanlık gökyüzüne karşı soluk mavi bir ışıkla parlar.",
        "Karanlık gökyüzü bulutları soluk maviye boyar.",
        "Bulutlar karanlıkta hiç görünmez.",
        "Mavi ışık bulutları karartır.",
        "Bulut yoktur.",
      ],
      "'The clouds glow with a pale blue light' 'bulutlar soluk mavi bir ışıkla parlar', 'against the dark sky' 'karanlık gökyüzüne karşı' karşılığıdır.",
    ],
    [
      "The flashes occur high above powerful thunderstorms.",
      [
        "Çakmalar güçlü fırtınaların çok yukarısında oluşur.",
        "Çakmalar güçlü fırtınaların altında oluşur.",
        "Fırtınalar çakmaların yukarısında oluşur.",
        "Çakmalar hiçbir zaman oluşmaz.",
        "Fırtına yoktur.",
      ],
      "'The flashes occur' 'çakmalar oluşur', 'high above powerful thunderstorms' 'güçlü fırtınaların çok yukarısında' karşılığıdır.",
    ],
    [
      "The ice looks like fine white hair.",
      [
        "Buz ince beyaz saça benzer.",
        "Saç ince beyaz buza dönüşür.",
        "Buz kalın siyah kayaya benzer.",
        "Buz hiç görünmez.",
        "Buz yoktur.",
      ],
      "'The ice looks like' 'buz benzer', 'fine white hair' 'ince beyaz saça' karşılığıdır.",
    ],
    [
      "Drivers were advised to pull off the road and turn off their lights.",
      [
        "Sürücülere yoldan çekilip farlarını kapatmaları önerildi.",
        "Sürücülere hızlanıp farlarını açmaları önerildi.",
        "Farlar sürücüleri yoldan çekti.",
        "Sürücülere hiçbir öneride bulunulmadı.",
        "Sürücü yoktu.",
      ],
      "'Drivers were advised' 'sürücülere önerildi', 'to pull off the road and turn off their lights' 'yoldan çekilip farlarını kapatmaları' karşılığıdır.",
    ],
    [
      "The winds were as strong as those of a hurricane.",
      [
        "Rüzgârlar bir kasırgadakiler kadar güçlüydü.",
        "Rüzgârlar bir kasırgadakilerden çok daha zayıftı.",
        "Kasırga rüzgârları güçlendirdi.",
        "Rüzgâr hiç esmedi.",
        "Rüzgâr yoktu.",
      ],
      "'The winds were as strong' 'rüzgârlar kadar güçlüydü', 'as those of a hurricane' 'bir kasırgadakiler' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Planör pilotları bulutun önündeki yükselen havaya biner.",
      [
        "Glider pilots ride the rising air at the front of the cloud.",
        "Glider pilots avoid the air at the front of the cloud.",
        "The cloud rides the glider pilots.",
        "Glider pilots fly only at night.",
        "There are no glider pilots.",
      ],
      "'Planör pilotları biner' 'glider pilots ride', 'bulutun önündeki yükselen havaya' 'the rising air at the front of the cloud' karşılığıdır.",
    ],
    [
      "Toz parçacıklarının çoğu muhtemelen meteorlardan gelir.",
      [
        "Much of the dust probably comes from meteors.",
        "Meteors probably come from the dust.",
        "None of the dust comes from space.",
        "The dust produces meteors.",
        "There is no dust.",
      ],
      "'Toz parçacıklarının çoğu' 'much of the dust', 'muhtemelen meteorlardan gelir' 'probably comes from meteors' karşılığıdır.",
    ],
    [
      "Bilim insanları bu olayı kazara fotoğrafladı.",
      [
        "The scientists photographed the phenomenon by accident.",
        "The scientists deliberately avoided photographing the phenomenon.",
        "The phenomenon photographed the scientists.",
        "No photograph was ever taken.",
        "There were no scientists.",
      ],
      "'Bilim insanları fotoğrafladı' 'the scientists photographed', 'bu olayı kazara' 'the phenomenon by accident' karşılığıdır.",
    ],
    [
      "Mantar ortadan kaldırıldığında buz oluşmadı.",
      [
        "When the fungus was removed, the ice did not form.",
        "When the ice was removed, the fungus did not grow.",
        "The fungus formed more ice after it was removed.",
        "The ice removed the fungus.",
        "There was no fungus.",
      ],
      "'Mantar ortadan kaldırıldığında' 'when the fungus was removed', 'buz oluşmadı' 'the ice did not form' karşılığıdır.",
    ],
    [
      "Bu buz oluşumları yüksek, kuru dağlarda bulunur.",
      [
        "These ice formations are found on high, dry mountains.",
        "These ice formations are found in warm, wet valleys.",
        "High mountains are found in these ice formations.",
        "These formations exist only in laboratories.",
        "There are no mountains.",
      ],
      "'Bu buz oluşumları bulunur' 'these ice formations are found', 'yüksek, kuru dağlarda' 'on high, dry mountains' karşılığıdır.",
    ],
    [
      "Fırtına birkaç saat içinde yüzlerce kilometre yol aldı.",
      [
        "The storm travelled hundreds of kilometres within a few hours.",
        "The storm stayed in one place for several days.",
        "Hundreds of kilometres travelled the storm.",
        "The storm moved only a few metres.",
        "There was no storm.",
      ],
      "'Fırtına yol aldı' 'the storm travelled', 'birkaç saat içinde yüzlerce kilometre' 'hundreds of kilometres within a few hours' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "For many years, airline pilots occasionally reported seeing brief flashes of light high above thunderstorms, but scientists generally treated these reports with caution, since there was no reliable evidence that such flashes existed. This changed in July 1989, when researchers from the University of Minnesota, who were testing a sensitive camera intended for a rocket flight, happened to point it towards the distant horizon at night. When they reviewed the footage, they noticed two bright columns of light lasting only a fraction of a second, appearing far above a thunderstorm. Over the following years, scientists recorded thousands of similar events, using cameras on aircraft, on mountains and on the space shuttle. The flashes, which became known as sprites, are typically reddish in colour and can extend from a height of around fifty kilometres to around ninety kilometres, so that some are larger than the storms beneath them. They often take shapes resembling jellyfish, carrots or columns, and they last for only a few thousandths of a second. Sprites are triggered by particularly powerful lightning strikes between a cloud and the ground, which cause a sudden change in the electric field above the storm and make the thin air of the upper atmosphere glow briefly, rather like the gas in a neon light. Scientists have since discovered other related phenomena, including blue jets, which shoot upwards from the tops of storm clouds, and huge rings of light called elves. Together, these discoveries have shown that thunderstorms affect not only the lower atmosphere but also the regions far above them, and researchers are now studying whether such events have any effect on the chemistry of the upper atmosphere.",
      questions: [
        [
          "According to the passage, the first sprite was recorded when ----.",
          [
            "researchers testing a camera happened to point it at the horizon",
            "pilots took photographs from their aircraft",
            "a rocket was launched into a storm",
            "the space shuttle recorded thousands of similar events above thunderstorms",
            "scientists were studying jellyfish",
          ],
          "Metne göre roket uçuşu için hassas bir kamerayı deneyen araştırmacılar onu tesadüfen ufka çevirmişti.",
        ],
        [
          "Sprites are triggered by ----.",
          [
            "powerful lightning strikes between a cloud and the ground",
            "meteors burning in the atmosphere",
            "neon lights",
            "blue jets",
            "changes in the sun",
          ],
          "Bulut ile yer arasındaki özellikle güçlü yıldırımlar fırtınanın üzerindeki elektrik alanında ani bir değişikliğe yol açar.",
        ],
        [
          "It can be understood from the passage that these discoveries showed ----.",
          [
            "thunderstorms also affect the atmosphere far above them",
            "pilots' reports were false",
            "sprites are caused by aircraft",
            "the upper atmosphere is unaffected by storms",
            "elves are a type of cloud",
          ],
          "Fırtınalar yalnızca alt atmosferi değil, çok yukarılarındaki bölgeleri de etkiler.",
        ],
      ],
    },
    {
      text:
        "On damp winter mornings in woodlands in parts of Europe, people sometimes find pieces of dead wood covered in what looks like fine white hair or candyfloss. On closer inspection, the 'hair' turns out to be made of ice, formed into extremely thin, silky threads, each only about a hundredth of a millimetre thick but sometimes several centimetres long. The threads grow from the surface of the wood without touching one another and can keep their shape for hours. This phenomenon, known as hair ice, forms only under particular conditions: the wood must be wet and rotting, usually from broadleaf trees, the air must be humid and the temperature must be just below freezing. In 1918, the German scientist Alfred Wegener, better known for his theory that the continents move slowly across the surface of the Earth, suggested that a fungus living in the wood might be responsible, since he had noticed fine threads of mould on the surface of wood bearing hair ice. His idea was largely forgotten until the early twenty-first century, when researchers in Switzerland and Germany investigated the question in detail. In a study published in 2015, they reported that they had found a particular fungus in every sample of wood that produced hair ice. When they killed the fungus by heating the wood or treating it with chemicals, hair ice no longer formed, and ordinary ice crusts appeared instead. The researchers suggested that substances produced by the fungus prevent the tiny ice crystals from joining together into larger crystals, so that the threads can grow long and thin. However, the exact chemical process involved is still not fully understood.",
      questions: [
        [
          "According to the passage, hair ice forms only when ----.",
          [
            "wet, rotting wood is exposed to humid air just below freezing",
            "the weather is very cold and dry",
            "living trees are covered in snow",
            "the wood has been heated and treated with chemicals to kill any fungus",
            "the sun is shining",
          ],
          "Metne göre odun ıslak ve çürümekte olmalı, hava nemli ve sıcaklık donma noktasının hemen altında olmalıdır.",
        ],
        [
          "The researchers found that when the fungus was killed ----.",
          [
            "hair ice no longer formed",
            "more hair ice formed",
            "the wood turned white",
            "the threads grew longer",
            "the ice melted immediately",
          ],
          "Mantar ısıtma ya da kimyasallarla öldürüldüğünde saç buzu oluşmadı ve yerine sıradan buz kabukları belirdi.",
        ],
        [
          "The writer mentions Wegener's better-known theory in order to ----.",
          [
            "identify him for the reader",
            "show that hair ice moves",
            "criticise his work on continents",
            "explain how the fungus works",
            "suggest that his idea was wrong",
          ],
          "Yazar Wegener'i okura tanıtmak için kıtaların hareket ettiği kuramıyla daha iyi bilindiğini belirtir.",
        ],
      ],
    },
    {
      text:
        "In 1835, while travelling through the Andes mountains of South America, the British naturalist Charles Darwin described fields of tall, thin blades of compacted snow and ice, all pointing towards the sun and separated by deep hollows. Similar formations had long been known to local people, and Spanish speakers called them penitentes, because they reminded them of the tall, pointed hoods worn by people taking part in religious processions. Penitentes can range in height from a few centimetres to more than five metres, and they are found mainly on high mountains in dry regions, particularly in the Andes, at altitudes above about four thousand metres. For many years, their formation was not fully understood. Scientists now believe that the process depends on the very dry air and intense sunlight found at high altitudes. Under such conditions, snow can turn straight into vapour, skipping the liquid stage altogether, in what is called sublimation. Small irregularities in the surface of the snow cause some areas to receive slightly more sunlight than others, and once a hollow begins to form, sunlight reflected from its sides concentrates more energy in it, so that it deepens more quickly, leaving the ridges between hollows standing as blades. Where the air is more humid, melting rather than sublimation occurs, and the water fills the hollows and destroys the pattern. Penitentes can make travel across mountain glaciers very difficult for climbers. In 2013, scientists suggested that similar formations, but on a much larger scale, might exist on Jupiter's moon Europa, and in 2017 researchers reported that giant blade-like structures observed on Pluto might have formed in a comparable way.",
      questions: [
        [
          "According to the passage, the formations were named penitentes because they ----.",
          [
            "resembled the hoods worn in religious processions",
            "were discovered by Darwin",
            "pointed away from the sun",
            "were found on Pluto and on Jupiter's moon Europa",
            "were made by local people",
          ],
          "Metne göre dinî törenlere katılanların giydiği uzun, sivri başlıkları anımsatıyorlardı.",
        ],
        [
          "Penitentes form mainly through sublimation because ----.",
          [
            "the air at high altitudes is very dry",
            "the temperature is very high",
            "the snow is very wet",
            "there is no sunlight",
            "the mountains are low",
          ],
          "Yüksek irtifalarda çok kuru hava ve yoğun güneş ışığı karın erimeden doğrudan buharlaşmasını sağlar.",
        ],
        [
          "It can be understood from the passage that in more humid conditions ----.",
          [
            "penitentes are unlikely to form",
            "penitentes grow taller",
            "sublimation increases",
            "the hollows become deeper",
            "the blades point away from the sun",
          ],
          "Nemli havada buharlaşma yerine erime olur, su çukurları doldurur ve deseni bozar.",
        ],
      ],
    },
    {
      text:
        "In parts of the Sahara, the Arabian Peninsula and other dry regions, people have long been familiar with sudden, violent dust storms that arrive as a towering wall of dust, sometimes more than a kilometre high. In Sudan, such storms are known as haboobs, from an Arabic word meaning 'blowing', and the term is now used by meteorologists around the world. A haboob usually forms when a large thunderstorm collapses. As rain falls from the storm into the hot, dry air below, much of it evaporates before reaching the ground, cooling the air, which becomes denser and plunges downwards. When this cold air hits the ground, it spreads outwards at high speed, picking up dust and sand as it goes and pushing it ahead in a dense wall. The storm can arrive with little warning, reducing visibility to almost nothing within minutes and turning day into a darkness resembling night. Haboobs usually last only an hour or so, but they can cause serious problems. Dust can damage engines and machinery, disrupt air travel, and lead to road accidents when drivers suddenly find themselves unable to see. For this reason, authorities in some areas advise drivers who are caught in a dust storm to pull off the road, turn off their lights and keep their feet off the brake pedal, so that other drivers do not follow their lights and crash into them. Haboobs are also a health concern, since the fine dust can irritate the lungs and may carry fungal spores that cause disease. In recent decades, haboobs have regularly been reported in the south-western United States, particularly around the city of Phoenix, Arizona.",
      questions: [
        [
          "According to the passage, a haboob usually forms when ----.",
          [
            "cold air from a collapsing thunderstorm spreads outwards",
            "the desert becomes very cold",
            "rain reaches the ground",
            "drivers turn on their lights and press the brake pedal while caught in a dust storm",
            "winds blow from the sea",
          ],
          "Metne göre yağmur buharlaşıp havayı soğutur; yoğunlaşan hava aşağı iner ve yere çarpınca hızla yayılır.",
        ],
        [
          "Drivers are advised to turn off their lights so that ----.",
          [
            "other drivers do not follow them and crash",
            "they can see better",
            "the dust settles",
            "they save fuel",
            "the storm passes more quickly",
          ],
          "Böylece diğer sürücüler ışıklarını izleyip onlara çarpmaz.",
        ],
        [
          "It can be understood from the passage that haboobs are a health concern because ----.",
          [
            "the dust can irritate the lungs and carry spores",
            "they cause floods",
            "they last for many days",
            "they bring extreme cold",
            "they occur only at night",
          ],
          "İnce toz akciğerleri tahriş edebilir ve hastalık yapan mantar sporları taşıyabilir.",
        ],
      ],
    },
    {
      text:
        "Most people are familiar with tornadoes, which can cause devastating damage along a narrow path. Less well known are derechos, widespread windstorms able to sweep across vast distances within a single afternoon or night and cause damage over a much larger area. The name was introduced in 1888 by Gustavus Hinrichs, a physics professor in the American state of Iowa, who chose a Spanish word meaning 'straight' to distinguish these winds from the rotating winds of tornadoes. Derechos are produced by a long line or cluster of severe thunderstorms that moves rapidly across the land. As the storms advance, cold air rushing down from them spreads out along the ground in a powerful surge, and in a derecho these winds can reach speeds similar to those of a hurricane over a wide area. Meteorologists usually classify a storm as a derecho only if it produces damaging winds along a path at least several hundred kilometres long. Derechos are most common in summer in parts of North America, but they also occur in Europe, South America and Asia. Because they affect such large areas, they can cause enormous damage. In June 2012, a derecho travelled more than a thousand kilometres from the Midwest of the United States to the Atlantic coast in around twelve hours, leaving millions of people without electricity during a heatwave. In August 2020, another derecho crossed Iowa and neighbouring states, flattening millions of hectares of crops and damaging buildings, with some winds estimated at more than 160 kilometres per hour. Because derechos often develop quickly and are less familiar to the public than tornadoes, meteorologists are working to improve both forecasts and public awareness.",
      questions: [
        [
          "According to the passage, Hinrichs chose the name 'derecho' to ----.",
          [
            "distinguish these winds from the rotating winds of tornadoes",
            "honour a Spanish scientist",
            "describe storms in Spain",
            "show that they are rare",
            "describe the storm that crossed Iowa and neighbouring states in 2020",
          ],
          "Metne göre bu rüzgârları hortumların dönen rüzgârlarından ayırmak için 'düz' anlamına gelen İspanyolca bir kelime seçti.",
        ],
        [
          "A storm is usually classified as a derecho if it ----.",
          [
            "produces damaging winds along a very long path",
            "includes at least one tornado",
            "occurs only in winter",
            "lasts for several days",
            "brings heavy snow",
          ],
          "En az birkaç yüz kilometre uzunluğunda bir hat boyunca zarar verici rüzgârlar üretmelidir.",
        ],
        [
          "It can be understood from the passage that meteorologists want to improve public awareness of derechos because ----.",
          [
            "they develop quickly and are less familiar than tornadoes",
            "they never cause damage",
            "they occur only in Iowa",
            "they are easy to forecast",
            "they rotate like tornadoes",
          ],
          "Derecholar çoğu zaman hızla gelişir ve halk tarafından hortumlardan daha az tanınır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1936, the Japanese physicist Ukichiro Nakaya became the first person to grow artificial snow crystals in a laboratory. ---- He described this by saying that snow crystals are letters sent from the sky.",
      [
        "By changing the temperature and humidity, he showed that each set of conditions produced crystals of a particular shape.",
        "Japan has heavy snow in winter.",
        "Physicists study matter and energy.",
        "He grew the crystals on a rabbit hair, which provided a fine surface on which ice could form.",
        "Snow is white.",
      ],
      "Boşluk deneyin bulgusunu anlatıp 'kar kristalleri gökten gönderilen mektuplardır' benzetmesine bağlanan bir cümle gerektirir; boşluğa sıcaklık ve nemi değiştirerek her koşulun belirli biçimde kristaller ürettiğini gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Snow rollers are natural cylinders of snow that form when strong winds push a layer of snow across the ground. ---- Because they require very particular conditions, they are rarely seen.",
      [
        "As the snow rolls, it gathers more snow, sometimes leaving a hollow centre like a doughnut.",
        "Wind is moving air.",
        "Snow falls in winter.",
        "Photographs of fields covered in hundreds of snow rollers have attracted attention on the internet.",
        "Cylinders have two circular ends.",
      ],
      "Boşluk kar rulolarının nasıl büyüdüğünü anlatıp nadir görülmelerine bağlanan bir cümle gerektirir; boşluğa kar yuvarlandıkça daha çok kar topladığını ve bazen ortası boş kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "On cold nights, columns of ice sometimes grow out of damp soil, lifting small stones and the surface of the ground. ---- This process, known as needle ice, can damage young plants by pushing them out of the soil.",
      [
        "Water from deeper in the soil is drawn upwards and freezes at the surface, forming long, thin needles.",
        "Soil contains many minerals.",
        "Nights are cold in winter.",
        "The needles usually melt during the day, leaving the surface of the soil loose and broken.",
        "Stones are heavy.",
      ],
      "Boşluk buz sütunlarının nasıl oluştuğunu açıklayıp sürecin adına bağlanan bir cümle gerektirir; boşluğa topraktaki suyun yukarı çekilip yüzeyde donarak uzun ince iğneler oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Graupel is a type of soft hail that forms when tiny droplets of supercooled water freeze onto falling snowflakes. ---- It is sometimes mistaken for hail, although it is much softer and usually breaks apart when it lands.",
      [
        "The result is a small white pellet that has lost the shape of the original snowflake.",
        "Hail can damage crops.",
        "Water freezes at zero degrees.",
        "Scientists believe that collisions involving graupel inside storm clouds help to produce lightning.",
        "Snowflakes fall slowly.",
      ],
      "Boşluk oluşum sürecinin sonucunu anlatıp doluyla karıştırılmasına bağlanan bir cümle gerektirir; boşluğa sonucun asıl kar tanesinin biçimini yitirmiş küçük beyaz bir tanecik olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Thunder and lightning are normally associated with warm weather, but they can also occur during snowstorms. ---- Snow muffles the sound of thunder, so that it can usually be heard only a few kilometres away.",
      [
        "This rare phenomenon, known as thundersnow, often occurs in very intense winter storms.",
        "Snowstorms make roads dangerous.",
        "Lightning is very hot.",
        "Some meteorologists have become famous on social media for their excited reactions to it.",
        "Winter is the coldest season.",
      ],
      "Boşluk olgunun adını veren ve karın sesi bastırmasına bağlanan bir cümle gerektirir; boşluğa bu nadir olgunun 'gök gürültülü kar' olarak bilindiğini ve çok şiddetli kış fırtınalarında görüldüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "A waterspout is a rotating column of air and mist that forms over a body of water. ---- Most are weaker than tornadoes over land, but they can still be dangerous to boats.",
      [
        "Waterspouts often form beneath developing clouds in warm, calm weather.",
        "Boats are used for fishing.",
        "Water covers most of the Earth.",
        "Sailors in the past sometimes believed that waterspouts were sea monsters.",
        "Mist is made of tiny droplets.",
      ],
      "Boşluk hortumun nasıl oluştuğunu anlatıp karadaki hortumlarla karşılaştırmaya bağlanan bir cümle gerektirir; boşluğa su hortumlarının çoğu zaman ılık ve sakin havada gelişmekte olan bulutların altında oluştuğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Mammatus clouds hang from the underside of a cloud in rounded pouches.",
        "They are often seen beneath the anvil-shaped tops of thunderstorms.",
        "Their name comes from a Latin word meaning 'breast'.",
        "Many people photograph sunsets.",
        "They form when cold, wet air sinks into drier air below.",
      ],
      odd: 3,
      why: "Parça memeli bulutları anlatır. Pek çok insanın gün batımını fotoğrafladığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Shaped like a lens, lenticular clouds often sit above mountain peaks.",
        "They remain in the same place even when strong winds are blowing.",
        "Mountains are formed by movements of the Earth's crust.",
        "Observers have occasionally reported them as UFOs.",
        "Pilots of sailplanes seek out the lifting air near them.",
      ],
      odd: 2,
      why: "Parça mercek biçimli bulutları anlatır. Dağların yer kabuğu hareketleriyle oluştuğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Climbers on misty mountains sometimes see a huge shadow surrounded by coloured rings.",
        "The shadow is their own, cast onto the mist below them.",
        "The rings are formed when sunlight is scattered by water droplets.",
        "The effect is named after a mountain in Germany.",
        "Germany has many forests.",
      ],
      odd: 4,
      why: "Parça sisli dağlarda görülen dev gölge olgusunu anlatır. Almanya'nın pek çok ormanı olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A moonbow is a rainbow produced by moonlight rather than sunlight.",
        "It is much fainter than an ordinary rainbow.",
        "The moon orbits the Earth about once a month.",
        "To the human eye, it often appears white.",
        "Moonbows are often seen near large waterfalls on bright nights.",
      ],
      odd: 2,
      why: "Parça ay ışığıyla oluşan gökkuşağını anlatır. Ay'ın Dünya çevresinde yaklaşık ayda bir döndüğünü söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On very cold, calm days, delicate ice structures called frost flowers can grow on new sea ice.",
        "They form when water vapour freezes onto small bumps on the ice.",
        "The flowers contain high levels of salt.",
        "Seals give birth to their pups in spring.",
        "Scientists are studying their role in the chemistry of the polar atmosphere.",
      ],
      odd: 3,
      why: "Parça deniz buzunda oluşan buz çiçeklerini anlatır. Fokların ilkbaharda yavruladığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Strong winds can carve the surface of snow into sharp ridges called sastrugi.",
        "The ridges usually lie parallel to the direction of the wind.",
        "They can be more than a metre high in Antarctica.",
        "Explorers have long found them a serious obstacle to travel.",
        "Antarctica is the coldest continent on Earth.",
      ],
      odd: 4,
      why: "Parça rüzgârın karda oyduğu sırtları anlatır. Antarktika'nın en soğuk kıta olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
