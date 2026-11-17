import type { YokdilDeneme } from "./types";

export const FEN_65: YokdilDeneme = {
  no: 65,
  field: "fen",
  vocab: [
    [
      "The paint maker expected to produce red, but because his materials were ----, the mixture turned deep blue.",
      ["contaminated", "expensive", "fashionable", "invisible", "inherited"],
      "Boya üreticisinin kırmızı üretmeyi beklediği, ama malzemeleri 'kirlenmiş' (contaminated) olduğu için karışımın koyu maviye döndüğü anlatılır.",
    ],
    [
      "Because its compounds have so many different colours, the new metal was ---- after the Greek word for colour.",
      ["named", "punished", "hidden", "sold", "measured"],
      "Bileşikleri çok farklı renklerde olduğu için yeni metale renk anlamına gelen Yunanca sözcükten 'ad verildiği' (named) anlatılır.",
    ],
    [
      "The ancient blue pigment gives off invisible light, which allows researchers to ---- even tiny traces of it.",
      ["detect", "destroy", "sell", "repair", "imitate"],
      "Eski mavi pigmentin görünmez ışık yaydığı ve bunun araştırmacıların çok küçük izlerini bile 'saptamasına' (detect) olanak verdiği anlatılır.",
    ],
    [
      "The paintings have remained bright for centuries because the pigment is ---- to heat, acid and sunlight.",
      ["resistant", "sensitive", "attractive", "similar", "unknown"],
      "Pigment ısıya, aside ve güneş ışığına 'dayanıklı' (resistant) olduğu için resimlerin yüzyıllarca parlak kaldığı anlatılır.",
    ],
    [
      "The stone was so ---- that the blue made from it cost more than gold.",
      ["rare", "soft", "common", "heavy", "dark"],
      "Taşın o kadar 'nadir' (rare) olduğu anlatılır ki ondan yapılan mavi altından pahalıydı.",
    ],
    [
      "Other artists were angry when one sculptor was allowed to ---- the use of the new black for his work alone.",
      ["take over", "give up", "look up", "turn down", "run out of"],
      "Bir heykeltıraşın yeni siyahın kullanımını yalnızca kendi işi için 'üstlenmesine' (take over) izin verilince diğer sanatçıların kızdığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the chemist realised what had happened, he ---- a completely new pigment.",
      ["had made", "makes", "has made", "will make", "is making"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had made'.",
    ],
    [
      "If the potash had been pure, the paint maker ---- the blue.",
      ["might never have discovered", "never discovers", "will never discover", "had never discovered", "would never discover"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might never have discovered'.",
    ],
    [
      "The yellow pigment ---- by many painters in the nineteenth century.",
      ["was used", "used", "has used", "uses", "is using"],
      "Pigment kullanılmıştır; edilgen geçmiş zaman: 'was used'.",
    ],
    [
      "---- the pigment had been made for thousands of years, the method of making it was later forgotten.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Pigmentin binlerce yıl üretilmesi ile yapım yönteminin sonra unutulması zıttır: 'Although'.",
    ],
    [
      "The student, ---- experiment produced the new blue, had been trying to make materials for electronics.",
      ["whose", "who", "which", "whom", "where"],
      "Öğrencinin deneyi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after a prize had been offered ---- chemists find a way to make the blue artificially.",
      ["did", "had", "were", "have", "does"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The stone came from mines in the mountains of Afghanistan, ---- it had been dug for thousands of years.",
      ["where", "which", "when", "whose", "that"],
      "'mines' yer bildirir; taş orada çıkarılıyordu: 'where'.",
    ],
    [
      "The longer the painting was exposed to light, ---- the yellow became.",
      ["the darker", "the darkest", "darker", "darkest", "so dark"],
      "'The longer ..., the darker ...' paralel yapısı: 'the darker'.",
    ],
    [
      "The artist insisted that nobody else ---- allowed to use the black.",
      ["be", "is", "was", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be allowed'.",
    ],
    [
      "The mineral is said ---- from a mine in Siberia.",
      ["to have contained", "containing", "to be contained", "contained", "having contain"],
      "Geçmişe ait durum için mastarın geçmiş biçimi: 'to have contained'.",
    ],
    [
      "The Maya heated the dye with clay ---- the colour would last.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Boyayı kille ısıtmalarının amacı rengin kalıcı olmasıdır: 'so that'.",
    ],
    [
      "The museum had the statues ---- with a special camera to find traces of paint.",
      ["photographed", "photograph", "photographing", "to photograph", "photographs"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'photographed'.",
    ],
    [
      "Had the student not taken the sample out of the furnace, the new colour ---- unnoticed.",
      ["might have gone", "goes", "will go", "had gone", "is going"],
      "Devrik üçüncü tip koşul cümlesi: 'might have gone'.",
    ],
    [
      "Neither the painters nor the buyers ---- that the yellow would darken.",
      ["realised", "realising", "to realise", "has realised", "realise to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'realised'.",
    ],
  ],
  cloze: [
    {
      text:
        "Around 1706, a paint maker in Berlin named Johann Jacob Diesbach was trying to make a red pigment from cochineal, a dye obtained from insects. To do so, he needed a chemical called potash, {1} he borrowed some from his landlord, the alchemist Johann Konrad Dippel. Unknown to Diesbach, the potash had been contaminated with an oil that Dippel made from animal blood, {2} when the chemicals were mixed, the result was not red but an intense dark blue. Without realising it, Diesbach had produced iron ferrocyanide, which became known as Prussian blue. It was the first modern synthetic pigment, {3} it quickly became popular with artists, because natural blues were either very expensive or faded easily. Prussian blue was also used to dye the uniforms of the Prussian army. In the nineteenth century, the astronomer John Herschel discovered that paper coated with certain iron compounds turned blue where it was exposed to light, {4} this process was used for more than a century to copy architectural and engineering drawings, which became known as 'blueprints'. More surprisingly, Prussian blue has an important medical use. It can trap atoms of certain poisonous metals, such as thallium and radioactive caesium, in the intestines, {5} doctors give it to patients to help remove these substances from the body.",
      blanks: [
        [
          "(21) ----",
          ["so", "but", "or", "unless", "although"],
          "Potaşa ihtiyaç duymasının sonucu ev sahibinden ödünç almasıdır: 'so'.",
        ],
        [
          "(22) ----",
          ["so", "but", "or", "unless", "although"],
          "Potaşın kirlenmiş olmasının sonucu karışımın maviye dönmesidir: 'so'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "İlk modern sentetik pigment olması ve sanatçılar arasında popüler olması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Herschel'in keşfi ve sürecin çizimleri kopyalamakta kullanılması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["so", "but", "or", "unless", "although"],
          "Zehirli metalleri bağırsakta tutabilmesinin sonucu doktorların onu hastalara vermesidir: 'so'.",
        ],
      ],
    },
    {
      text:
        "In 1797, the French chemist Louis-Nicolas Vauquelin was studying a bright orange-red mineral from the mines of Siberia, known at the time as Siberian red lead. He found that it contained lead combined with a previously unknown metal, {1} because its compounds displayed such a wide range of colours, he named it chromium, from the Greek word for colour. Chemists soon learned to make a compound of lead and chromium, lead chromate, which produced a strong, bright yellow, {2} by the 1820s chrome yellow was being sold to artists as a cheaper and more brilliant alternative to older yellow pigments. It was used widely by nineteenth-century painters, {3} it was a favourite of Vincent van Gogh, who used it in many of his best-known works. In the twentieth century, a similar pigment was chosen for school buses in the United States, {4} the colour, which is easy to see in the early morning, became a national standard in 1939. However, lead chromate is toxic, and its use in paints has since been restricted in many countries. In 2011, a team of scientists studying samples from Van Gogh's paintings found that some of his chrome yellow had darkened over time, {5} they showed that exposure to light could cause a chemical change in the pigment, turning parts of it brown.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Yeni bir metal bulması ve ona renk anlamına gelen bir ad vermesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Kurşun kromat yapılması ve krom sarısının sanatçılara satılması birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Ressamlarca yaygın kullanılması ve Van Gogh'un gözdesi olması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Okul otobüsleri için seçilmesi ve rengin ulusal standart olması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Sarının koyulaştığını bulmaları ve ışığın kimyasal değişikliğe yol açtığını göstermeleri birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Diesbach was trying to make a red pigment, ----.",
      [
        "he accidentally produced a blue one",
        "red is a bright colour",
        "Berlin is a large city",
        "insects produce dyes",
        "he had borrowed some potash from his landlord, an alchemist named Dippel",
      ],
      "'Although' zıtlık ister: Diesbach kırmızı bir pigment yapmaya çalışsa da kazara mavi bir pigment üretti.",
    ],
    [
      "If the paintings had been kept away from light, ----.",
      [
        "the yellow might not have darkened",
        "paintings hang on walls",
        "yellow is bright",
        "museums are large",
        "the painter would have chosen a cheaper pigment for his pictures of sunflowers",
      ],
      "Üçüncü tip koşul: resimler ışıktan uzak tutulsaydı sarı koyulaşmayabilirdi.",
    ],
    [
      "----, researchers can find traces of Egyptian blue on ancient statues.",
      [
        "Because the pigment glows in infrared light",
        "Although statues are old",
        "Unless the museum is open",
        "Since Egypt is hot",
        "While the method of making the pigment was forgotten after Roman times",
      ],
      "Pigment kızılötesi ışıkta parladığı için araştırmacılar eski heykellerde Mısır mavisi izleri bulabilir.",
    ],
    [
      "The colours of the Maya murals have survived ----.",
      [
        "because the pigment is extremely durable",
        "although the jungle is humid",
        "unless it rains",
        "so that tourists can visit",
        "while archaeologists were studying offerings found at the bottom of a sacred well",
      ],
      "Maya duvar resimlerinin renkleri pigment son derece dayanıklı olduğu için günümüze ulaştı.",
    ],
    [
      "Since natural ultramarine was so expensive, ----.",
      [
        "painters often used it only for the most important parts of a picture",
        "blue is a cool colour",
        "Afghanistan is mountainous",
        "gold is valuable",
        "a French chemist won a prize for making an artificial version in the 1820s",
      ],
      "'Since' neden bildirir: doğal ultramarin çok pahalı olduğundan ressamlar onu çoğunlukla resmin en önemli bölümleri için kullanırdı.",
    ],
    [
      "Not only does the new blue keep its colour, ----.",
      [
        "but it also reflects heat and stays cool in sunlight",
        "and blue is popular",
        "since furnaces are hot",
        "so students like it",
        "unless it was discovered by chance in a university laboratory in Oregon",
      ],
      "'Not only ... but also' yapısı tamamlanır: yeni mavi yalnızca rengini korumakla kalmaz, ısıyı da yansıtır ve güneşte serin kalır.",
    ],
    [
      "Once the sculptor had obtained exclusive rights to the black material, ----.",
      [
        "another artist released a pink paint that anyone could buy except him",
        "black absorbs light",
        "sculptors use stone",
        "paint is sold in shops",
        "it had been developed by a company for use in telescopes and satellites",
      ],
      "Heykeltıraş siyah malzemenin özel haklarını alınca başka bir sanatçı onun dışında herkesin satın alabileceği pembe bir boya çıkardı.",
    ],
    [
      "Unless the pigment is handled carefully, ----.",
      [
        "the toxic lead it contains may cause harm",
        "paint is colourful",
        "artists work in studios",
        "brushes are soft",
        "it would not have been chosen for school buses in the United States in 1939",
      ],
      "'Unless' olumsuz koşul: pigment dikkatle kullanılmazsa içerdiği zehirli kurşun zarar verebilir.",
    ],
    [
      "The new black absorbs so much light ----.",
      [
        "that objects coated in it look like flat, empty holes",
        "although it is expensive",
        "because it is thin",
        "unless the room is dark",
        "while the company was licensing it to a famous sculptor for his work",
      ],
      "Yeni siyah o kadar çok ışık soğurur ki onunla kaplanan nesneler düz, boş delikler gibi görünür.",
    ],
    [
      "Even though Prussian blue was invented as a pigment, ----.",
      [
        "it is now also used as a medicine",
        "blue is a colour",
        "Prussia was a kingdom",
        "medicines are expensive",
        "it was first produced in Berlin by a paint maker at the beginning of the eighteenth century",
      ],
      "'Even though' zıtlık ister: Prusya mavisi bir pigment olarak icat edilmiş olsa da artık ilaç olarak da kullanılmaktadır.",
    ],
    [
      "As the blue pigment was cheap, ----.",
      [
        "it soon replaced more expensive natural blues",
        "pigments are made from minerals",
        "soldiers wore uniforms",
        "artists are poor",
        "it was later used by an astronomer to copy drawings with the help of sunlight",
      ],
      "Mavi pigment ucuz olduğu için kısa sürede daha pahalı doğal mavilerin yerini aldı.",
    ],
  ],
  enTr: [
    [
      "The mixture turned an intense dark blue.",
      [
        "Karışım yoğun, koyu bir maviye döndü.",
        "Karışım açık bir kırmızıya döndü.",
        "Koyu maviye dönen karışım hemen atıldı.",
        "Mavi karışımı döndürdü.",
        "Karışım hiç renk değiştirmedi.",
      ],
      "'The mixture turned' 'karışım döndü', 'an intense dark blue' 'yoğun, koyu bir maviye' karşılığıdır.",
    ],
    [
      "School buses were painted yellow because the colour is easy to see.",
      [
        "Okul otobüsleri, rengin kolay görülmesi nedeniyle sarıya boyandı.",
        "Okul otobüsleri, rengin zor görülmesi nedeniyle siyaha boyandı.",
        "Sarıya boyanan okul otobüsleri, sabahları hiç görülmüyordu.",
        "Renk okul otobüslerini kolay gördü.",
        "Okul otobüsleri hiç boyanmadı.",
      ],
      "'School buses were painted yellow' 'okul otobüsleri sarıya boyandı', 'because the colour is easy to see' 'rengin kolay görülmesi nedeniyle' karşılığıdır.",
    ],
    [
      "The method of making the pigment was lost for many centuries.",
      [
        "Pigmentin yapım yöntemi yüzyıllar boyunca unutuldu.",
        "Pigmentin yapım yöntemi yüzyıllar boyunca geliştirildi.",
        "Yüzyıllarca unutulan pigment, hiçbir zaman yeniden yapılamadı.",
        "Yöntem pigmenti yüzyıllarca kaybetti.",
        "Pigment hiç yapılmadı.",
      ],
      "'The method of making the pigment' 'pigmentin yapım yöntemi', 'was lost for many centuries' 'yüzyıllar boyunca unutuldu' karşılığıdır.",
    ],
    [
      "A thick layer of blue was found at the bottom of the well.",
      [
        "Kuyunun dibinde kalın bir mavi tabaka bulundu.",
        "Kuyunun ağzında ince bir kırmızı tabaka bulundu.",
        "Kuyunun dibindeki mavi tabaka, kazı sırasında yok oldu.",
        "Mavi kuyuyu dipte buldu.",
        "Kuyuda hiçbir şey bulunmadı.",
      ],
      "'A thick layer of blue was found' 'kalın bir mavi tabaka bulundu', 'at the bottom of the well' 'kuyunun dibinde' karşılığıdır.",
    ],
    [
      "The colour was often reserved for the robes of important figures.",
      [
        "Renk çoğunlukla önemli figürlerin giysilerine ayrılırdı.",
        "Renk çoğunlukla önemsiz figürlerin arka planlarında kullanılırdı.",
        "Önemli figürlerin giysileri bu renkte boyanmaktan kaçınılırdı.",
        "Giysiler rengi önemli figürlere ayırdı.",
        "Renk hiç kullanılmadı.",
      ],
      "'The colour was often reserved' 'renk çoğunlukla ayrılırdı', 'for the robes of important figures' 'önemli figürlerin giysilerine' karşılığıdır.",
    ],
    [
      "The material absorbs almost all the light that falls on it.",
      [
        "Malzeme üzerine düşen ışığın neredeyse tamamını soğurur.",
        "Malzeme üzerine düşen ışığın neredeyse tamamını yansıtır.",
        "Malzeme, üzerine düşen ışığı iki katına çıkarır.",
        "Işık malzemenin neredeyse tamamını soğurur.",
        "Malzemeye hiç ışık düşmez.",
      ],
      "'The material absorbs almost all the light' 'malzeme ışığın neredeyse tamamını soğurur', 'that falls on it' 'üzerine düşen' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Doğal maviler ya çok pahalıydı ya da kolayca soluyordu.",
      [
        "Natural blues were either very expensive or faded easily.",
        "Natural blues were cheap and never faded.",
        "Expensive blues faded more easily than cheap natural ones.",
        "Natural blues made the price fade.",
        "There were no natural blues.",
      ],
      "'Doğal maviler ya çok pahalıydı' 'natural blues were either very expensive', 'ya da kolayca soluyordu' 'or faded easily' karşılığıdır.",
    ],
    [
      "Pigmentin boyalarda kullanımı pek çok ülkede kısıtlandı.",
      [
        "The use of the pigment in paints has been restricted in many countries.",
        "The pigment has been used to restrict paints in many countries.",
        "The pigment is now required in all paints in many countries.",
        "Many countries restricted the paint's colour.",
        "The pigment has never been used.",
      ],
      "'Pigmentin boyalarda kullanımı kısıtlandı' 'the use of the pigment in paints has been restricted', 'pek çok ülkede' 'in many countries' karşılığıdır.",
    ],
    [
      "Pigment, görünür ışıkla aydınlatıldığında kızılötesi ışık yayar.",
      [
        "The pigment gives off infrared light when it is lit by visible light.",
        "Visible light gives off the pigment when it is lit by infrared.",
        "The pigment absorbs all light and gives off nothing.",
        "Infrared light lights the visible pigment.",
        "The pigment cannot be lit.",
      ],
      "'Pigment kızılötesi ışık yayar' 'the pigment gives off infrared light', 'görünür ışıkla aydınlatıldığında' 'when it is lit by visible light' karşılığıdır.",
    ],
    [
      "Boyanın bileşimi ancak yirminci yüzyılda anlaşıldı.",
      [
        "The composition of the paint was understood only in the twentieth century.",
        "The paint was invented only in the twentieth century.",
        "The composition of the paint has always been well known.",
        "The twentieth century understood the paint's colour.",
        "There was no paint.",
      ],
      "'Boyanın bileşimi anlaşıldı' 'the composition of the paint was understood', 'ancak yirminci yüzyılda' 'only in the twentieth century' karşılığıdır.",
    ],
    [
      "Yapay ultramarin, doğal taştan çok daha ucuzdu.",
      [
        "Artificial ultramarine was much cheaper than the natural stone.",
        "The natural stone was much cheaper than artificial ultramarine.",
        "Artificial ultramarine cost exactly the same as the natural stone.",
        "The stone made ultramarine cheaper.",
        "There was no ultramarine.",
      ],
      "'Yapay ultramarin çok daha ucuzdu' 'artificial ultramarine was much cheaper', 'doğal taştan' 'than the natural stone' karşılığıdır.",
    ],
    [
      "Sanatçı, yeni boyayı heykeltıraş dışında herkese satmaya karar verdi.",
      [
        "The artist decided to sell the new paint to everyone except the sculptor.",
        "The sculptor decided to sell the new paint to every artist.",
        "The artist decided to sell the new paint only to the sculptor.",
        "The paint decided to sell the artist.",
        "The artist never made paint.",
      ],
      "'Sanatçı satmaya karar verdi' 'the artist decided to sell', 'yeni boyayı heykeltıraş dışında herkese' 'the new paint to everyone except the sculptor' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Egyptian blue is widely regarded as the oldest man-made pigment. It was being made in Egypt by about 3000 BC, by heating a mixture of sand, a copper mineral, lime and natron, a natural salt, to around 850 degrees Celsius. The result was a blue glassy material that could be ground into powder and used to paint tombs, statues, coffins and pottery. Its use spread around the Mediterranean, and it was widely employed by the Greeks and Romans. After the end of the Roman period, however, the method of making it was forgotten, and it was not rediscovered until the nineteenth century. In 2009, scientists found that Egyptian blue has an unusual property. When it is lit by ordinary visible light, it gives off infrared light, which is invisible to the human eye but can be recorded by a special camera. In images taken this way, even tiny particles of the pigment appear to glow brightly against a dark background. The discovery has given archaeologists and museum scientists a simple, non-destructive way to find traces of paint on ancient objects. Researchers at the British Museum and elsewhere have used it to show that many Greek and Roman sculptures, which have long been admired as pure white marble, were originally painted in bright colours, and to reveal hidden details in Egyptian wall paintings. More recently, scientists have suggested that the pigment's ability to give off infrared light could be useful in new technologies, such as fingerprint detection and security inks.",
      questions: [
        [
          "According to the passage, Egyptian blue was made by ----.",
          [
            "heating a mixture of minerals and salts",
            "grinding lapis lazuli",
            "mixing plant dyes with clay",
            "drying the shells of sea creatures in the sun for many weeks",
            "boiling copper in water",
          ],
          "Metne göre kum, bakır minerali, kireç ve natronun karışımı yaklaşık 850 dereceye ısıtılarak yapılıyordu.",
        ],
        [
          "The infrared property of the pigment is useful because ----.",
          [
            "it makes even tiny traces of the pigment visible to cameras",
            "it makes the pigment brighter to the eye",
            "it protects statues",
            "it cleans marble",
            "it was known to the Romans",
          ],
          "Özel kameralarla çekilen görüntülerde en küçük parçacıklar bile karanlık zemin üzerinde parlar.",
        ],
        [
          "It can be understood from the passage that many ancient sculptures ----.",
          [
            "were originally brightly painted",
            "were made of blue glass",
            "were never painted",
            "were made in the nineteenth century",
            "have been destroyed by cameras",
          ],
          "Saf beyaz mermer olarak beğenilen pek çok heykel aslında parlak renklerle boyanmıştı.",
        ],
      ],
    },
    {
      text:
        "The ancient Maya of Central America and Mexico used a brilliant blue pigment, now known as Maya blue, to paint murals, pottery, sculptures and books, and to decorate the bodies of people and objects offered to their gods. When archaeologists dredged a sacred natural well at the city of Chichén Itzá in the early twentieth century, they found a layer of blue sediment several metres thick at the bottom, apparently the remains of pigment that had covered offerings thrown into the water. What has impressed scientists most is the pigment's extraordinary durability. Paintings coloured with it have survived for centuries in a hot, humid climate, and the pigment resists acids, alkalis, heat and even modern chemical solvents, which normally destroy organic dyes. For a long time, its composition was a mystery. In the 1960s, researchers established that it consisted of indigo, a blue dye obtained from plants, combined with a particular type of clay called palygorskite, which has a structure containing tiny channels. Later studies showed that when the two are heated together, molecules of indigo become trapped in or attached to the channels of the clay, protecting them from attack and producing a stable compound. Some researchers believe that the Maya may have made the pigment during religious ceremonies, by burning indigo, clay and a resin used as incense together. The discovery has inspired chemists to develop new materials that combine organic dyes with clays to create long-lasting colours.",
      questions: [
        [
          "According to the passage, the layer of blue at the bottom of the well probably came from ----.",
          [
            "pigment on offerings thrown into the water",
            "natural minerals in the rock",
            "paint used by archaeologists",
            "a mural that had fallen into the well during an earthquake many years earlier",
            "dyed clothing",
          ],
          "Metne göre suya atılan adakları kaplayan pigmentin kalıntısıydı.",
        ],
        [
          "Maya blue is unusually durable because ----.",
          [
            "the indigo is protected inside the structure of the clay",
            "it contains no dye",
            "it was painted indoors",
            "it is made of metal",
            "the climate is dry",
          ],
          "Isıtıldığında indigo molekülleri kilin kanallarında hapsolur ya da bağlanır ve korunur.",
        ],
        [
          "It can be understood from the passage that the study of Maya blue ----.",
          [
            "has led to ideas for new long-lasting colours",
            "has been abandoned",
            "proved it was made of copper",
            "showed that it fades quickly",
            "is complete",
          ],
          "Kimyacılara organik boyaları kille birleştiren yeni dayanıklı malzemeler geliştirmeleri için ilham vermiştir.",
        ],
      ],
    },
    {
      text:
        "For centuries, the finest blue available to European painters was ultramarine, a name meaning 'beyond the sea', because it was made from lapis lazuli, a deep blue stone that came from remote mines in the mountains of north-eastern Afghanistan. Turning the stone into pigment was a long and difficult process. Simply grinding it produced a greyish powder, so the stone had to be crushed and mixed with wax, resin and oil into a dough, which was then kneaded in a weak alkaline solution. The blue particles gradually separated and sank, leaving impurities behind. The best quality could cost more than gold. As a result, contracts for paintings sometimes specified exactly how much ultramarine an artist was to use, and painters often reserved it for the most important parts of a picture, such as the robes of the Virgin Mary. Some artists who used it lavishly, such as the Dutch painter Johannes Vermeer, may have been driven into debt by it. In 1824, a French society offered a prize of six thousand francs to anyone who could invent an artificial version costing less than three hundred francs per kilogram. In 1828, the prize was awarded to the chemist Jean-Baptiste Guimet, who had found a way to make it by heating a mixture of clay, soda, sulphur and charcoal. A German chemist claimed to have made it first, but the prize was not taken from Guimet. Artificial ultramarine, chemically identical to the natural pigment, became cheap and widely available, and it is still used today in paints, cosmetics and even as a whitening agent in laundry.",
      questions: [
        [
          "According to the passage, the name 'ultramarine' refers to ----.",
          [
            "the distant origin of the stone",
            "the colour of the sea",
            "the name of a painter",
            "the French chemist who first found a way to make it artificially",
            "a type of wax",
          ],
          "Metne göre 'denizin ötesinden' anlamına gelir; taş uzak Afganistan madenlerinden gelirdi.",
        ],
        [
          "The writer mentions contracts for paintings to show that ----.",
          [
            "ultramarine was extremely valuable",
            "painters were dishonest",
            "the Virgin Mary was popular",
            "Vermeer worked slowly",
            "pigments were cheap",
          ],
          "Sözleşmeler sanatçının ne kadar ultramarin kullanacağını belirliyordu; bu, pigmentin çok değerli olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that artificial ultramarine ----.",
          [
            "made the colour available to many more people",
            "was chemically different from the natural pigment",
            "was more expensive than gold",
            "is no longer used",
            "was invented by Vermeer",
          ],
          "Doğal pigmentle kimyasal olarak aynıydı; ucuz ve yaygın biçimde bulunur hâle geldi.",
        ],
      ],
    },
    {
      text:
        "In 2009, Mas Subramanian, a chemist at Oregon State University, was investigating new materials for use in electronics. One of his graduate students, Andrew Smith, mixed together oxides of three elements, yttrium, indium and manganese, and heated the mixture in a furnace to more than a thousand degrees Celsius. When the sample was taken out, it had turned a brilliant blue. Subramanian, who had worked in industry for many years, immediately recognised that the result was unusual. Inorganic blue pigments are rare, and many of those in use have disadvantages: some contain toxic substances, such as cobalt, while others fade or are unstable. The new compound, named YInMn blue after the chemical symbols of its elements, proved to be very stable. It did not fade when exposed to heat or light, did not react with water or acids, and contained no highly toxic elements. It also reflects a large proportion of infrared radiation, which means that surfaces painted with it stay cooler in sunlight, a property that could help to reduce the energy needed to cool buildings. It was the first new inorganic blue pigment to be discovered in about two hundred years. The pigment attracted great interest from artists and manufacturers, and in 2017 a crayon company introduced a new colour inspired by it. Its high cost, partly because indium is expensive, has limited its use, but it was approved for use in commercial paints and coatings in the United States in 2020.",
      questions: [
        [
          "According to the passage, the new blue was discovered while researchers were ----.",
          [
            "working on materials for electronics",
            "looking for a new pigment",
            "studying ancient paintings",
            "trying to find a cheaper replacement for the expensive metal indium",
            "making crayons",
          ],
          "Metne göre elektronik için yeni malzemeler araştırırken keşfedildi.",
        ],
        [
          "Subramanian recognised that the discovery was important because ----.",
          [
            "stable, non-toxic inorganic blues are rare",
            "blue is his favourite colour",
            "the sample was very large",
            "indium is cheap",
            "it contained cobalt",
          ],
          "İnorganik mavi pigmentler nadirdir ve kullanılanların çoğunun zehirlilik ya da solma gibi sakıncaları vardır.",
        ],
        [
          "It can be understood from the passage that the pigment's use has been limited by ----.",
          [
            "its high cost",
            "its toxicity",
            "its tendency to fade",
            "a lack of interest",
            "its reaction with water",
          ],
          "Kısmen indiyumun pahalı olması nedeniyle yüksek maliyeti kullanımını sınırlamıştır.",
        ],
      ],
    },
    {
      text:
        "In 2014, a British company, Surrey NanoSystems, announced a material it called Vantablack, made of a forest of tiny carbon tubes, each thousands of times thinner than a human hair, grown on a surface. Light entering the forest is trapped and bounced between the tubes until it is absorbed, and at the time the material absorbed more than 99.9 per cent of visible light, making it one of the darkest substances ever produced. Objects coated with it lose their apparent shape: a crumpled sheet of foil, for example, looks like a flat black hole. The material was developed for scientific uses, such as reducing stray light in telescopes and cameras on satellites, but it soon attracted the attention of artists. In 2016, the company granted the sculptor Anish Kapoor the exclusive right to use a spray version of it in art. Many artists were angered by the decision, arguing that no individual should own a colour. In response, the British artist Stuart Semple produced a bright pink paint, which he described as the pinkest in the world, and offered it for sale to anyone except Anish Kapoor. Buyers had to confirm that they were not Kapoor and were not buying it on his behalf. Kapoor nevertheless obtained some of the paint and posted a photograph of his middle finger dipped in it on social media. Semple later produced a range of very dark paints of his own, available to all artists. The dispute raised wider questions about whether materials and colours used in art should be protected as private property.",
      questions: [
        [
          "According to the passage, Vantablack was originally developed for ----.",
          [
            "scientific instruments such as telescopes",
            "fashion",
            "artists",
            "making foil sheets that look flat when they have been crumpled",
            "painting cars",
          ],
          "Metne göre uydulardaki teleskop ve kameralarda istenmeyen ışığı azaltmak gibi bilimsel kullanımlar için geliştirildi.",
        ],
        [
          "Semple produced his pink paint in order to ----.",
          [
            "protest against Kapoor's exclusive rights",
            "help Kapoor",
            "test carbon tubes",
            "advertise Vantablack",
            "win a prize",
          ],
          "Kapoor'a verilen özel haklara tepki olarak boyayı Kapoor dışında herkese sattı.",
        ],
        [
          "It can be understood from the passage that the dispute ----.",
          [
            "raised the question of whether colours can be owned",
            "was settled in court",
            "ended Kapoor's career",
            "led to Vantablack being banned",
            "involved only scientists",
          ],
          "Sanatta kullanılan malzeme ve renklerin özel mülk olarak korunup korunmaması sorusunu gündeme getirdi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "For centuries, artists used a bright yellow pigment called Indian yellow, imported from India. ---- In 1883, an Indian researcher reported that it was made from the urine of cows fed only on mango leaves, although some historians have since questioned this story.",
      [
        "Its origin was long a mystery to the European painters who bought it.",
        "India has a very large population.",
        "Mangoes are a popular fruit.",
        "The pigment glows under ultraviolet light.",
        "Cows give milk.",
      ],
      "Boşluk 1883'teki açıklamaya zemin hazırlayan bir cümle gerektirir; boşluğa pigmentin kökeninin onu satın alan Avrupalı ressamlar için uzun süre bir gizem olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "From the sixteenth to the nineteenth century, some artists used a brown paint known as 'mummy brown'. ---- When the painter Edward Burne-Jones learned this, he was so shocked that he buried his tube of the paint in his garden.",
      [
        "It was made by grinding up the remains of ancient Egyptian mummies.",
        "Brown is a common colour in nature.",
        "Gardens need regular care.",
        "The paint was also used to colour wood.",
        "Egypt is famous for its pyramids.",
      ],
      "Boşluk 'bunu öğrenince' ifadesine bağlanan bir cümle gerektirir; boşluğa boyanın eski Mısır mumyalarının kalıntılarının öğütülmesiyle yapıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "During the First World War, Norwegian chemists developed a way to produce titanium dioxide as a white pigment. ---- Today, it is used not only in paints but also in paper, plastics, toothpaste and sun creams.",
      [
        "Because it was bright and far less toxic than lead white, it gradually replaced the older pigment.",
        "Norway has many fjords.",
        "White is often worn at weddings.",
        "It is now the most widely used white pigment in the world.",
        "Chemists work in laboratories.",
      ],
      "Boşluk eski pigmentin yerini nasıl aldığını anlatıp 'bugün' ile bağlanan bir cümle gerektirir; boşluğa parlak ve kurşun beyazından çok daha az zehirli olduğu için eski pigmentin yerini aldığını söyleyen cümle gelmelidir.",
    ],
    [
      "More than two thousand years ago, Chinese craftsmen made a synthetic purple pigment containing barium and copper. ---- Traces of it have been found on the clay soldiers buried with China's first emperor.",
      [
        "Known as Han purple, it was used to colour objects such as beads, pottery and figures.",
        "China has a very long history.",
        "Purple is often associated with royalty.",
        "Scientists have recently found that it has unusual magnetic properties.",
        "Clay is used to make bricks.",
      ],
      "Boşluk pigmenti adlandırıp kullanımını anlatan bir cümle gerektirir; boşluğa Han moru olarak bilinen pigmentin boncuk, çömlek ve figürleri renklendirmekte kullanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Vermilion, a brilliant red, was made for centuries from cinnabar, a mineral containing mercury. ---- In some paintings, however, it has slowly turned dark grey or black.",
      [
        "It was highly valued by painters in China, Rome and medieval Europe.",
        "Mercury is the only metal that is liquid at room temperature.",
        "Red is often associated with danger.",
        "Chemists later learned to make it artificially.",
        "Minerals are found in rocks.",
      ],
      "Boşluk 'ancak bazı resimlerde koyulaştı' karşıtlığına zemin hazırlayan bir cümle gerektirir; boşluğa Çin, Roma ve ortaçağ Avrupası'ndaki ressamlarca çok değer verildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The red colouring known as carmine is made from small insects that live on cactus plants in Mexico and South America. ---- Today, it is still used to colour foods, drinks and cosmetics, although some people object to it.",
      [
        "After the Spanish conquest, it became one of the most valuable exports from the Americas.",
        "Cactus plants store water.",
        "Mexico has a warm climate.",
        "About seventy thousand insects go into a single pound of the colouring.",
        "Insects have six legs.",
      ],
      "Boşluk tarihî önemi anlatıp bugüne geçen bir cümle gerektirir; boşluğa İspanyol fethinden sonra Amerika'nın en değerli ihraç ürünlerinden biri olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "For centuries, a red dye was obtained from the roots of the madder plant.",
        "In 1868, two German chemists found a way to make its colouring substance artificially.",
        "The artificial dye was much cheaper.",
        "Germany is famous for its cars.",
        "Within a few years, farmers who grew madder in France had lost their markets.",
      ],
      odd: 3,
      why: "Parça kökboyası bitkisinden elde edilen boyanın yapay olarak üretilmesini anlatır. Almanya'nın otomobilleriyle ünlü olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Before indigo was widely imported, Europeans obtained blue dye from a plant called woad.",
        "Its leaves were crushed and left to ferment.",
        "The process produced a terrible smell.",
        "Queen Elizabeth I is said to have banned it near the places she visited.",
        "Many plants have green leaves.",
      ],
      odd: 4,
      why: "Parça çivit otu bitkisinden mavi boya elde edilmesini anlatır. Pek çok bitkinin yeşil yaprakları olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The colour magenta was named after a battle.",
        "A new purple-red dye was introduced in 1859.",
        "In the same year, French and Sardinian forces won a victory near the Italian town of Magenta.",
        "Italy has a long coastline.",
        "The dye's makers named it after the battle to make it more popular.",
      ],
      odd: 3,
      why: "Parça macenta renginin adının bir savaştan gelmesini anlatır. İtalya'nın uzun bir kıyı şeridi olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1880, the German chemist Adolf von Baeyer found a way to make indigo in the laboratory.",
        "It took many years to develop a process cheap enough for factories.",
        "Synthetic indigo went on sale in 1897.",
        "It soon replaced the natural dye grown on plantations in India.",
        "Many people enjoy wearing comfortable clothes.",
      ],
      odd: 4,
      why: "Parça indigonun yapay olarak üretilmesini anlatır. Pek çok kişinin rahat giysiler giymekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Several major chemical firms started out producing dyes.",
        "Several German firms founded in the 1860s first produced synthetic colours.",
        "Their research laboratories later developed medicines, fertilisers and plastics.",
        "Laboratories need good lighting.",
        "The dye industry thus helped to create the modern chemical industry.",
      ],
      odd: 3,
      why: "Parça boya üreticilerinin büyük kimya şirketlerine dönüşmesini anlatır. Laboratuvarların iyi aydınlatmaya ihtiyaç duyduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some modern pigments change colour with temperature.",
        "They are used in mugs that reveal a picture when hot drinks are poured in.",
        "Hot drinks are popular in winter.",
        "They are also used in labels that show when food has become too warm.",
        "Such pigments contain substances that change their structure at a particular temperature.",
      ],
      odd: 2,
      why: "Parça sıcaklıkla renk değiştiren pigmentleri anlatır. Sıcak içeceklerin kışın popüler olduğunu söyleyen III. cümle konu dışıdır.",
    },
  ],
};
