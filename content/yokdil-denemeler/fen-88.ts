import type { YokdilDeneme } from "./types";

export const FEN_88: YokdilDeneme = {
  no: 88,
  field: "fen",
  vocab: [
    [
      "When the tide rises, a wave can travel ---- up the river, against the direction of its flow.",
      ["upstream", "downwards", "abroad", "underground", "sideways"],
      "Gelgit yükseldiğinde bir dalganın nehrin akış yönünün tersine 'akıntıya karşı' (upstream) ilerleyebildiği anlatılır.",
    ],
    [
      "The river never reaches the sea; instead, its water spreads out and ---- in the desert.",
      ["evaporates", "freezes", "boils", "multiplies", "hardens"],
      "Nehrin denize hiç ulaşmadığı, suyunun çölde yayılıp 'buharlaştığı' (evaporates) anlatılır.",
    ],
    [
      "Dams can block the routes that large fish use to ---- to their breeding grounds.",
      ["migrate", "retire", "hide", "shrink", "rest"],
      "Barajların büyük balıkların üreme alanlarına 'göç etmek' (migrate) için kullandığı yolları kapatabildiği anlatılır.",
    ],
    [
      "The two rivers flow side by side for several kilometres without ----.",
      ["mixing", "moving", "flowing", "changing colour suddenly", "stopping"],
      "İki nehrin birkaç kilometre boyunca 'karışmadan' (mixing) yan yana aktığı anlatılır.",
    ],
    [
      "Walls built along the river prevented floods but stopped the river from ---- mud on the land.",
      ["depositing", "removing", "warming", "measuring", "hiding"],
      "Nehir boyunca yapılan duvarların taşkınları önlediği ama nehrin karaya çamur 'biriktirmesini' (depositing) durdurduğu anlatılır.",
    ],
    [
      "Overfishing has caused the numbers of the fish to ---- dramatically.",
      ["drop off", "look after", "give in", "take over", "put up"],
      "Aşırı avlanmanın balık sayısının çarpıcı biçimde 'düşmesine' (drop off) yol açtığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the wave reached the town, it ---- more than thirty kilometres up the river.",
      ["had travelled", "travels", "has travelled", "will travel", "is travelling"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had travelled'.",
    ],
    [
      "If the rains had not fallen in the highlands months earlier, the delta ---- in the dry season.",
      ["would not have flooded", "does not flood", "will not flood", "had not flooded", "is not flooding"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would not have flooded'.",
    ],
    [
      "The enormous fish ---- by fishermen on the Mekong in 2005.",
      ["was caught", "caught", "has caught", "catches", "is catching"],
      "Balık yakalanmıştır; edilgen geçmiş zaman: 'was caught'.",
    ],
    [
      "---- the two rivers meet, their waters remain separate for several kilometres.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Nehirlerin buluşması ile sularının ayrı kalması zıttır: 'Although'.",
    ],
    [
      "The dolphin, ---- skin turns pink as it grows older, lives in the rivers of the Amazon.",
      ["whose", "who", "which", "whom", "where"],
      "Yunusun derisi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the levees were built ---- the delta begin to shrink.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The fish return to the rivers ---- they were born in order to lay their eggs.",
      ["where", "which", "when", "whose", "that"],
      "'the rivers' yer bildirir; balıklar orada doğmuştur: 'where'.",
    ],
    [
      "The narrower the river channel becomes, ---- the wave grows.",
      ["the higher", "the highest", "higher", "highest", "so high"],
      "'The ... -er, the ... -er' paralel yapısı: 'the higher'.",
    ],
    [
      "Conservationists recommended that fishing for the species ---- banned completely.",
      ["be", "is", "was being", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be banned'.",
    ],
    [
      "The river dolphin of China is believed ---- extinct in the early 2000s.",
      ["to have become", "becoming", "to be become", "became", "having become to"],
      "Geçmişte gerçekleşen durum için mastarın geçmiş biçimi: 'to have become'.",
    ],
    [
      "Engineers plan to open gaps in the levees ---- the river can carry mud back into the marshes.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Setlerde açıklık açılmasının amacı nehrin çamuru bataklıklara geri taşıyabilmesidir: 'so that'.",
    ],
    [
      "The researchers had the fish ---- with small tags before releasing them.",
      ["fitted", "fit", "fitting", "to fit", "fits"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'fitted'.",
    ],
    [
      "Had the dam not been built, the fish ---- able to reach their spawning grounds.",
      ["would have been", "have been", "will be", "had been", "are"],
      "Devrik üçüncü tip koşul cümlesi: 'would have been'.",
    ],
    [
      "Neither the fishermen nor the scientists ---- seen such a large fish before.",
      ["had", "having", "to have", "was", "has"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had seen'.",
    ],
  ],
  cloze: [
    {
      text:
        "In a few rivers around the world, the rising tide does not simply raise the level of the water gradually. Instead, it forms a single large wave, or a series of waves, that travels upstream against the current. Such waves, known as tidal bores, form only where the tide rises and falls by a great height, {1} where the river mouth is shaped like a funnel, so that the incoming sea water is squeezed into an ever narrower channel. The best known is the pororoca, which travels up rivers near the mouth of the Amazon in Brazil. Its name comes from a local indigenous word meaning 'great roar', {2} the wave can be heard long before it is seen. During the spring tides, the wave may reach a height of several metres, {3} it can travel tens of kilometres inland, uprooting trees, damaging boats and flooding the banks. In recent decades, the pororoca has attracted surfers from around the world, who compete to ride the wave for as long as possible, {4} some have managed to stay on it for more than thirty minutes, covering more than ten kilometres. Similar waves occur on the River Severn in England and the Qiantang River in China, where crowds gather each autumn to watch the bore, which has sometimes swept away spectators standing too close to the water. Bores can also be affected by human activity. Dredging, the building of embankments and changes in the shape of river mouths can make bores larger or smaller, {5} on some rivers they have disappeared altogether after engineering works.",
      blanks: [
        [
          "(21) ----",
          ["and", "unless", "or", "although", "until"],
          "Gelgit farkının büyük olması ve nehir ağzının huni biçiminde olması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "or", "although", "until"],
          "Adının 'büyük kükreme' anlamına gelmesi ve dalganın görülmeden önce duyulması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "or", "although", "until"],
          "Dalganın birkaç metreye ulaşması ve kilometrelerce içeri ilerlemesi birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "or", "although", "so that"],
          "Sörfçülerin dalgaya binmesi ve bazılarının otuz dakikadan fazla kalması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "or", "although", "until"],
          "Mühendislik çalışmalarının dalgaları değiştirmesi ve bazı nehirlerde tamamen yok etmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "While nearly every river ends in a lake or an ocean, the Okavango comes to an end among the sands of a desert. Its source lies in the Angolan uplands, from which it flows south-east for more than a thousand kilometres, {1} when it reaches the flat sands of the Kalahari in northern Botswana, it spreads out into a vast maze of channels, lagoons, islands and swamps covering thousands of square kilometres. Almost all of its water eventually evaporates or is taken up by plants, {2} very little ever flows out of the other side. One of the most remarkable features of the delta is the timing of its floods. The rains fall in the Angolan highlands between November and March, {3} because the land is so flat and the vegetation slows the water down, the flood takes several months to travel through the delta. It reaches its greatest extent between June and August, in the middle of the dry season in Botswana, when the surrounding land is at its driest. As a result, huge numbers of animals, including elephants, buffalo, zebras and many kinds of birds, gather in the delta just when water is scarce elsewhere, {4} the area has one of the greatest concentrations of wildlife in Africa. The delta's islands are also partly the work of termites, whose mounds provide raised ground on which trees can grow. In 2014, the Okavango Delta gained recognition as a World Heritage Site, {5} conservationists warn that plans to take more water from the river upstream for farming and other uses could threaten the whole system.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "or", "although", "until"],
          "Nehrin bin kilometreden fazla akması ve çöle ulaşınca yayılması birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["so", "but", "or", "although", "unless"],
          "Suyun neredeyse tamamının buharlaşmasının sonucu çok azının öbür taraftan çıkmasıdır: 'so'.",
        ],
        [
          "(28) ----",
          ["but", "and", "so", "because", "unless"],
          "Yağmurların kasım ile mart arasında yağması ile selin aylar sonra ulaşması karşıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["and", "unless", "or", "although", "until"],
          "Hayvanların deltada toplanması ve bölgenin yaban hayatı açısından zengin olması birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["but", "and", "so", "because", "unless"],
          "Deltanın Dünya Mirası listesine eklenmesi ile tehditlere ilişkin uyarılar karşıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although tidal bores can be dangerous, ----.",
      [
        "they have attracted surfers from around the world",
        "the Amazon is a large river",
        "the tide rises twice a day",
        "the river mouth is shaped like a funnel",
        "the wave can be heard long before it is seen by people standing on the banks",
      ],
      "'Although' zıtlık ister: gelgit dalgaları tehlikeli olabilse de dünyanın dört bir yanından sörfçüleri çekmiştir.",
    ],
    [
      "If the flood arrived during the rainy season, ----.",
      [
        "fewer animals would need to gather in the delta",
        "deserts are dry",
        "elephants drink water",
        "Angola is north of Botswana",
        "the delta would have been recognised as a World Heritage Site in 2014",
      ],
      "İkinci tip koşul: sel yağmurlu mevsimde gelseydi deltada toplanması gereken hayvan sayısı daha az olurdu.",
    ],
    [
      "----, the giant catfish may become nearly as long as a small car.",
      [
        "Feeding mainly on algae and plants",
        "Although the river is wide",
        "Unless it is caught",
        "Since the Mekong flows through several countries in South-East Asia",
        "While fishermen were using nets",
      ],
      "Çoğunlukla alg ve bitkilerle beslenen dev yayın balığı yaklaşık üç metre uzunluğa ulaşabilir.",
    ],
    [
      "The two rivers do not mix immediately ----.",
      [
        "because they differ in temperature, speed and the amount of material they carry",
        "although they flow in the same direction",
        "unless it rains",
        "so that tourists can see them",
        "while tourist boats are crossing them near the city of Manaus",
      ],
      "İki nehir hemen karışmaz, çünkü sıcaklık, hız ve taşıdıkları malzeme miktarı bakımından farklıdır.",
    ],
    [
      "Since the land of the delta is slowly sinking, ----.",
      [
        "it needs a regular supply of new mud to stay above water",
        "deltas are flat",
        "the river is long",
        "marshes contain birds",
        "the levees were built after a disastrous flood in the 1920s",
      ],
      "'Since' neden bildirir: deltanın toprağı yavaş yavaş çöktüğünden su üstünde kalmak için düzenli yeni çamur gerekir.",
    ],
    [
      "Not only are river dolphins threatened by fishing nets, ----.",
      [
        "but they are also harmed by dams and pollution",
        "and rivers flow to the sea",
        "since dolphins are mammals",
        "so the Amazon is large",
        "unless they had been studied by scientists",
      ],
      "'Not only ... but also' yapısı tamamlanır: nehir yunusları yalnızca balık ağlarıyla tehdit edilmekle kalmaz, barajlar ve kirlilikten de zarar görür.",
    ],
    [
      "Once the levees had been built along the river, ----.",
      [
        "floods no longer spread fresh mud across the delta",
        "rivers carry water",
        "the delta is in Louisiana",
        "people live near rivers",
        "oil companies had cut canals through many of the marshes",
      ],
      "Nehir boyunca setler yapıldıktan sonra taşkınlar artık deltaya taze çamur yaymadı.",
    ],
    [
      "Unless fishing for sturgeon is strictly controlled, ----.",
      [
        "some species may disappear in the wild",
        "sturgeon are large",
        "caviar is expensive",
        "rivers flow into the sea",
        "farmed caviar would not have become popular in China, Italy and the United States",
      ],
      "'Unless' olumsuz koşul: mersin balığı avı sıkı biçimde denetlenmedikçe bazı türler doğada yok olabilir.",
    ],
    [
      "The flood moves so slowly through the delta ----.",
      [
        "that it takes several months to reach its greatest extent",
        "although the land is flat",
        "because elephants drink",
        "unless the rains stop",
        "while termites are building mounds on the islands of the delta",
      ],
      "Sel delta boyunca o kadar yavaş ilerler ki en geniş haline ulaşması birkaç ay sürer.",
    ],
    [
      "Even though the Chinese river dolphin had lived in the river for millions of years, ----.",
      [
        "it disappeared within a few decades of rapid industrial development",
        "dolphins are intelligent",
        "the river is long",
        "fishermen used nets",
        "it was almost blind and relied on echolocation to find fish",
      ],
      "'Even though' zıtlık ister: Çin nehir yunusu milyonlarca yıl nehirde yaşamış olsa da hızlı sanayileşmenin birkaç on yılı içinde yok oldu.",
    ],
    [
      "As female sturgeon take many years to reach maturity, ----.",
      [
        "their populations recover very slowly from overfishing",
        "sturgeon live in rivers",
        "eggs are small",
        "caviar is salty",
        "the largest species live in the Caspian Sea and the Black Sea",
      ],
      "Dişi mersin balıklarının olgunlaşması uzun yıllar aldığı için nüfusları aşırı avlanmadan çok yavaş toparlanır.",
    ],
  ],
  enTr: [
    [
      "The wave can be heard long before it is seen.",
      [
        "Dalga görülmeden çok önce duyulabilir.",
        "Dalga duyulmadan çok önce görülebilir.",
        "Dalga hiçbir ses çıkarmaz.",
        "Duyulan ses dalgayı görür.",
        "Dalga yoktur.",
      ],
      "'The wave can be heard' 'dalga duyulabilir', 'long before it is seen' 'görülmeden çok önce' karşılığıdır.",
    ],
    [
      "Termite mounds provide raised ground on which trees can grow.",
      [
        "Termit tümsekleri ağaçların büyüyebileceği yükseltilmiş zemin sağlar.",
        "Ağaçlar termitlerin tümsek yapmasını engeller.",
        "Termit tümsekleri ağaçları yok eder.",
        "Termitler ağaçların üzerinde yaşar.",
        "Termit tümsekleri, ağaçların köklerine zarar verdiği için adalarda hiçbir bitkinin büyümesine izin vermez.",
      ],
      "'Termite mounds provide raised ground' 'termit tümsekleri yükseltilmiş zemin sağlar', 'on which trees can grow' 'ağaçların büyüyebileceği' karşılığıdır.",
    ],
    [
      "Dams prevent the fish from reaching their breeding grounds upstream.",
      [
        "Barajlar balıkların akıntının yukarısındaki üreme alanlarına ulaşmasını engeller.",
        "Barajlar balıkların üreme alanlarına daha kolay ulaşmasını sağlar.",
        "Balıklar barajların yapılmasını engeller.",
        "Balıkların hiç üreme alanı yoktur.",
        "Barajlar, balıkların denize inmesini engeller ama yukarıdaki üreme alanlarına ulaşmalarını kolaylaştırır.",
      ],
      "'Dams prevent the fish from reaching' 'barajlar balıkların ulaşmasını engeller', 'their breeding grounds upstream' 'akıntının yukarısındaki üreme alanlarına' karşılığıdır.",
    ],
    [
      "The dark water of one river is warmer and flows more slowly than the other.",
      [
        "Nehirlerden birinin koyu suyu diğerinden daha sıcaktır ve daha yavaş akar.",
        "Nehirlerden birinin koyu suyu diğerinden daha soğuktur ve daha hızlı akar.",
        "Diğer nehir koyu suyu ısıtır.",
        "İki nehrin suyu tamamen aynıdır.",
        "Nehir yoktur.",
      ],
      "'The dark water of one river is warmer' 'nehirlerden birinin koyu suyu daha sıcaktır', 'and flows more slowly than the other' 've diğerinden daha yavaş akar' karşılığıdır.",
    ],
    [
      "Every year, an area of land the size of many football pitches disappears.",
      [
        "Her yıl pek çok futbol sahası büyüklüğünde bir arazi yok oluyor.",
        "Her yıl pek çok futbol sahası inşa ediliyor.",
        "Futbol sahaları her yıl araziyi yok ediyor.",
        "Hiç arazi kaybolmuyor.",
        "Her yıl yeni çamurla birlikte pek çok futbol sahası büyüklüğünde arazi oluşuyor.",
      ],
      "'Every year, an area of land' 'her yıl bir arazi', 'the size of many football pitches disappears' 'pek çok futbol sahası büyüklüğünde yok oluyor' karşılığıdır.",
    ],
    [
      "Most caviar sold today comes from fish raised on farms.",
      [
        "Bugün satılan havyarın çoğu çiftliklerde yetiştirilen balıklardan gelir.",
        "Bugün satılan havyarın çoğu doğada yakalanan balıklardan gelir.",
        "Çiftlikler havyardan balık yetiştirir.",
        "Bugün hiç havyar satılmaz.",
        "Bugün satılan havyarın tamamı, yasak olmasına rağmen Hazar Denizi'nde yakalanan yabani balıklardan gelir.",
      ],
      "'Most caviar sold today' 'bugün satılan havyarın çoğu', 'comes from fish raised on farms' 'çiftliklerde yetiştirilen balıklardan gelir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Dalga ağaçları kökünden söküp tekneleri hasara uğratabilir.",
      [
        "The wave can uproot trees and damage boats.",
        "The trees can stop the wave and protect boats.",
        "The boats can uproot the wave.",
        "The wave is too small to cause any damage.",
        "There is no wave.",
      ],
      "'Dalga sökebilir' 'the wave can uproot', 'ağaçları kökünden ve tekneleri hasara uğratabilir' 'trees and damage boats' karşılığıdır.",
    ],
    [
      "Sel kurak mevsimin ortasında en geniş haline ulaşır.",
      [
        "The flood reaches its greatest extent in the middle of the dry season.",
        "The flood reaches its greatest extent in the middle of the rainy season.",
        "The dry season reaches the flood.",
        "The flood never reaches the delta.",
        "The flood disappears completely in the middle of the dry season, leaving the delta empty.",
      ],
      "'Sel en geniş haline ulaşır' 'the flood reaches its greatest extent', 'kurak mevsimin ortasında' 'in the middle of the dry season' karşılığıdır.",
    ],
    [
      "Balıkçılar şimdiye kadar kaydedilen en büyük tatlı su balığını yakaladı.",
      [
        "Fishermen caught the largest freshwater fish ever recorded.",
        "The largest freshwater fish caught the fishermen.",
        "Fishermen caught a small fish from the sea.",
        "Fishermen released all the fish they caught.",
        "Fishermen caught a fish that was much smaller than the record holder from the previous year.",
      ],
      "'Balıkçılar yakaladı' 'fishermen caught', 'şimdiye kadar kaydedilen en büyük tatlı su balığını' 'the largest freshwater fish ever recorded' karşılığıdır.",
    ],
    [
      "Yunusun gözleri küçüktür ve görme yeteneği zayıftır.",
      [
        "The dolphin has small eyes and poor eyesight.",
        "The dolphin has large eyes and excellent eyesight.",
        "The dolphin's eyesight makes its eyes small.",
        "The dolphin has no eyes.",
        "The dolphin's eyes are larger than those of any other animal living in the river.",
      ],
      "'Yunusun gözleri küçüktür' 'the dolphin has small eyes', 've görme yeteneği zayıftır' 'and poor eyesight' karşılığıdır.",
    ],
    [
      "Setler kentleri taşkınlardan korudu.",
      [
        "The levees protected the cities from floods.",
        "The floods protected the levees from the cities.",
        "The levees caused floods in the cities.",
        "The cities had no protection.",
        "There were no levees.",
      ],
      "'Setler korudu' 'the levees protected', 'kentleri taşkınlardan' 'the cities from floods' karşılığıdır.",
    ],
    [
      "Mersin balıkları dinozorlardan bu yana çok az değişmiştir.",
      [
        "Sturgeon have changed very little since the time of the dinosaurs.",
        "Sturgeon have changed completely since the time of the dinosaurs.",
        "Dinosaurs changed the sturgeon.",
        "Sturgeon appeared only recently.",
        "There are no sturgeon.",
      ],
      "'Mersin balıkları çok az değişmiştir' 'sturgeon have changed very little', 'dinozorlardan bu yana' 'since the time of the dinosaurs' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The Mekong River, which flows through China, Myanmar, Laos, Thailand, Cambodia and Vietnam, is home to some of the largest freshwater fish on Earth. The Mekong giant catfish, which may grow nearly as long as a small car and heavier than two hundred and fifty kilograms, feeds mainly on algae and plants, and it undertakes long journeys up the river to breed. In 2005, fishermen in northern Thailand caught one weighing almost three hundred kilograms, which was then recognised as the largest freshwater fish ever recorded. In 2022, however, a fisherman in Cambodia caught a giant freshwater stingray, a flat fish that lives on the bed of the river, weighing around three hundred kilograms, which became the new record holder. Scientists working with local fishermen measured the stingray, fitted it with a small electronic tag and released it back into the river, so that its movements could be followed. The fish of the Mekong are an important source of food for tens of millions of people, and the river supports one of the largest inland fisheries in the world. Many of the giant species, however, are now endangered. They take many years to reach maturity, and they have been caught in large numbers. A bigger threat comes from the dams that have been built, or are planned, on the river and its tributaries to produce electricity. Dams block the routes that migrating fish use to reach their breeding grounds, change the flow of the water and trap the sediment that carries nutrients downstream. Researchers have called for dams to be designed with passages that allow fish to pass, although such passages have had limited success with very large fish, and for some parts of the river to be left free of dams.",
      questions: [
        [
          "According to the passage, the giant stingray caught in 2022 ----.",
          [
            "became the new record holder for the largest freshwater fish",
            "was smaller than the catfish caught in 2005",
            "was kept in an aquarium",
            "was the first fish to be fitted with an electronic tag in the Mekong in 2005",
            "fed mainly on algae",
          ],
          "Metne göre yaklaşık üç yüz kilogramlık vatoz yeni rekor sahibi oldu.",
        ],
        [
          "Dams threaten the giant fish because they ----.",
          [
            "block migration routes, change water flow and trap sediment",
            "provide too much food",
            "make the water too cold",
            "attract fishermen",
            "help the fish to breed",
          ],
          "Barajlar göç yollarını kapatır, suyun akışını değiştirir ve besin taşıyan tortuyu tutar.",
        ],
        [
          "It can be understood from the passage that fish passages in dams ----.",
          [
            "have had limited success with very large fish",
            "work perfectly for all fish",
            "have never been tried",
            "are illegal",
            "make dams unnecessary",
          ],
          "Balık geçitleri çok büyük balıklarda sınırlı başarı göstermiştir.",
        ],
      ],
    },
    {
      text:
        "Near the city of Manaus, in the heart of the Brazilian Amazon, two great rivers meet. The Rio Negro, whose name means 'black river', has dark water the colour of strong tea, while the Solimões, as the upper Amazon is known in Brazil, is a pale, sandy brown. Remarkably, the two rivers do not mix immediately when they meet. Instead, they flow side by side in the same channel for around six kilometres, with a clearly visible line between the dark and the light water, before gradually blending together. The phenomenon, known as the Meeting of the Waters, has become a popular tourist attraction. The two rivers remain separate because they are very different. The Rio Negro flows from regions of sandy soil and dense forest, where decaying leaves release substances that stain the water dark and make it slightly acidic, but it carries very little sediment. It is also warmer and flows more slowly. The Solimões, by contrast, flows down from the Andes mountains, carrying huge amounts of mud and sand, which make it denser, and it is cooler and faster. Because of these differences in temperature, speed and density, the waters resist mixing for a considerable distance. The differences between the rivers also affect the life they contain. The acidic, nutrient-poor water of the Rio Negro supports fewer fish and far fewer mosquitoes than the muddy waters of the Solimões, which are rich in nutrients. The waters of the Solimões also flood the surrounding forests for several months each year, forming vast areas of seasonally flooded forest in which fish swim among the trees and feed on fallen fruit and seeds.",
      questions: [
        [
          "According to the passage, the Rio Negro's water is dark because ----.",
          [
            "decaying leaves release substances that stain it",
            "it carries large amounts of mud",
            "it flows from the Andes",
            "it is cooler and faster than the Solimões and carries more sand",
            "it is polluted by the city",
          ],
          "Metne göre çürüyen yaprakların saldığı maddeler suyu koyulaştırır.",
        ],
        [
          "The Solimões is denser than the Rio Negro because ----.",
          [
            "it carries huge amounts of mud and sand",
            "it is warmer",
            "it flows more slowly",
            "it contains more acid",
            "it comes from sandy soil",
          ],
          "And Dağları'ndan muazzam miktarda çamur ve kum taşıdığı için daha yoğundur.",
        ],
        [
          "It can be understood from the passage that the Rio Negro has fewer mosquitoes because ----.",
          [
            "its water is acidic and poor in nutrients",
            "it is colder",
            "it has more fish",
            "it is used by tourists",
            "it floods the forest",
          ],
          "Asidik ve besince fakir suyu daha az balık ve çok daha az sivrisinek barındırır.",
        ],
      ],
    },
    {
      text:
        "For thousands of years, the Mississippi River built up the land of southern Louisiana by depositing mud and sand at its mouth. During floods, the river overflowed its banks and spread fresh sediment across the surrounding marshes, while the soft ground of the delta slowly sank under its own weight. As long as new sediment kept arriving, the land remained above water. In the twentieth century, however, this balance was broken. After a disastrous flood in 1927, engineers built high walls of earth, known as levees, along much of the river to protect towns and farms from flooding. The levees succeeded in their purpose, but they also confined the river to a single channel, so that most of its sediment was carried straight out into the deep waters of the Gulf of Mexico instead of being spread across the marshes. At the same time, dams on the river and its tributaries trapped large amounts of sediment upstream. The oil and gas industry also cut thousands of kilometres of canals through the marshes, allowing salt water to flow in and kill the plants whose roots held the soil together. As a result, Louisiana has lost more than five thousand square kilometres of land since the 1930s, at times at a rate equivalent to a football pitch every hour. Rising sea levels are making the problem worse. The loss of the marshes is serious because they protect cities such as New Orleans from the waves and storm surges caused by hurricanes. The state has developed a large plan to restore the coast, which includes cutting openings in the levees in some places to allow the river to carry sediment back into the marshes, although some fishermen oppose the plan because the fresh water could harm the oysters and shrimp on which they depend.",
      questions: [
        [
          "According to the passage, the delta remained above water in the past because ----.",
          [
            "floods regularly spread new sediment across it",
            "the ground did not sink",
            "levees protected it",
            "the Gulf of Mexico was shallow",
            "canals carried salt water to the marshes",
          ],
          "Metne göre taşkınlar düzenli olarak bataklıklara taze tortu yayıyordu.",
        ],
        [
          "The writer mentions canals cut by the oil and gas industry as a cause of land loss because ----.",
          [
            "they allowed salt water to kill the plants that held the soil together",
            "they carried sediment to the marshes",
            "they protected the coast",
            "they lowered sea levels",
            "they were used by fishermen",
          ],
          "Kanallar tuzlu suyun içeri akıp toprağı tutan bitkileri öldürmesine yol açtı.",
        ],
        [
          "It can be understood from the passage that some fishermen oppose the restoration plan because ----.",
          [
            "the fresh water could harm the oysters and shrimp they depend on",
            "it would increase flooding in New Orleans",
            "it would raise sea levels",
            "it would remove the levees completely",
            "it is too cheap",
          ],
          "Tatlı su geçimlerini sağladıkları istiridye ve karidese zarar verebilir.",
        ],
      ],
    },
    {
      text:
        "Several species of dolphin live not in the sea but in large rivers in South America and Asia. The best known is the Amazon river dolphin, or boto, which is the largest of them. Adults, especially males, are often bright pink, a colour that seems to become stronger with age and may be partly caused by scars from fighting. River dolphins have long, narrow beaks lined with many teeth, which they use to catch fish, and unlike ocean dolphins, the bones in their necks are not fused, so they can turn their heads to the side. This helps them to move through flooded forests, where they swim among the trunks and roots of trees. Their eyes are small, and some species are almost blind, since the water of many rivers is so muddy that sight is of little use. Instead, they rely mainly on echolocation, producing clicks and listening for the echoes. Almost all river dolphins are endangered. They are often caught accidentally in fishing nets, and in some places they are deliberately killed to be used as bait for fishing. Dams divide their populations, while pollution, boat traffic and the extraction of sand from river beds damage their habitat. The most tragic example is the Yangtze river dolphin of China, which had lived in the river for millions of years. As China developed rapidly after 1950, the river became crowded with ships and boats of every kind, and the dolphin's numbers fell sharply. In 2006, an expedition spent six weeks searching the river with boats and underwater microphones but found no dolphins, and the species was declared probably extinct. It is often described as the first large mammal to have been driven to extinction largely as a result of human activity in modern times.",
      questions: [
        [
          "According to the passage, river dolphins can turn their heads to the side because ----.",
          [
            "the bones in their necks are not fused",
            "they have long beaks",
            "they are pink",
            "they rely mainly on echolocation instead of sight in muddy water",
            "they are blind",
          ],
          "Metne göre okyanus yunuslarının aksine boyun kemikleri kaynaşmamıştır.",
        ],
        [
          "Some river dolphins are almost blind because ----.",
          [
            "the water of many rivers is so muddy that sight is of little use",
            "they live in the sea",
            "they are often caught in nets",
            "they are very old",
            "they have no teeth",
          ],
          "Pek çok nehrin suyu o kadar çamurludur ki görme pek işe yaramaz.",
        ],
        [
          "It can be understood from the passage that the Yangtze river dolphin ----.",
          [
            "was probably driven to extinction largely by human activity",
            "is still common",
            "lives in the Amazon",
            "was never studied",
            "has recovered since 2006",
          ],
          "2006'daki aramada hiç yunus bulunamadı ve tür büyük ölçüde insan etkinliğiyle yok olmuş olarak nitelenir.",
        ],
      ],
    },
    {
      text:
        "Sturgeon are large, slow-growing fish with bony plates along their bodies instead of scales, and they have changed remarkably little since the time of the dinosaurs. Some species may survive for over a century and grow to several metres in length. Most spend much of their lives in the sea or in large lakes but swim up rivers to lay their eggs. For centuries, sturgeon have been caught for their eggs, which are salted and sold as caviar, a luxury that commands extraordinary prices. The largest and most valuable species, the beluga, lives in the Caspian Sea and the Black Sea and in the rivers that flow into them. After the break-up of the Soviet Union in 1991, controls on fishing in the Caspian Sea weakened, and illegal fishing increased enormously, since a single large female could carry eggs worth tens of thousands of dollars. Dams built on rivers such as the Volga had already blocked many of the routes the fish used to reach their breeding grounds, and pollution further harmed their populations. Because female sturgeon take many years, sometimes more than fifteen, to reach maturity, populations recover very slowly once they have been reduced. Today, almost all species of sturgeon are listed as threatened, and several are critically endangered. International trade in wild caviar has been banned or strictly limited, and most caviar sold today comes from sturgeon raised on fish farms in countries such as China, Italy and the United States. Conservationists hope that farming will reduce the pressure on wild fish, but they warn that illegal fishing continues, and that some caviar sold as farmed may in fact come from wild sturgeon. Genetic tests have been developed to identify the species and origin of caviar.",
      questions: [
        [
          "According to the passage, illegal fishing in the Caspian Sea increased after 1991 because ----.",
          [
            "controls on fishing weakened after the break-up of the Soviet Union",
            "dams were removed",
            "sturgeon became more common",
            "farmed caviar became available in China, Italy and the United States",
            "caviar became cheaper",
          ],
          "Metne göre Sovyetler Birliği'nin dağılmasından sonra Hazar Denizi'nde avcılık denetimleri zayıfladı.",
        ],
        [
          "Sturgeon populations recover slowly because ----.",
          [
            "females take many years to reach maturity",
            "they eat too much",
            "they live only in rivers",
            "they lay too many eggs",
            "they have no predators",
          ],
          "Dişilerin olgunlaşması bazen on beş yılı aşar; bu yüzden nüfuslar azaldıktan sonra çok yavaş toparlanır.",
        ],
        [
          "It can be understood from the passage that genetic tests are used to ----.",
          [
            "identify the species and origin of caviar",
            "make sturgeon grow faster",
            "breed sturgeon on farms",
            "measure the age of the fish",
            "remove pollution from rivers",
          ],
          "Çiftlik ürünü diye satılan bazı havyarlar aslında yabani balıklardan gelebildiği için havyarın türü ve kaynağı genetik testlerle belirlenir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The Congo River in central Africa is the deepest river in the world, with parts of its channel more than two hundred metres deep. ---- As a result, scientists have found many species of fish that live only on one side of the river.",
      [
        "In some places, its powerful currents are so strong that they act as barriers that fish cannot cross.",
        "Africa has many rivers.",
        "Fish live in water.",
        "The river crosses the equator twice on its journey to the Atlantic Ocean.",
        "Many people fish in the river.",
      ],
      "Boşluk akıntıların etkisini anlatıp balık türlerinin nehrin yalnızca bir yakasında yaşamasına bağlanan bir cümle gerektirir; boşluğa güçlü akıntıların balıkların geçemediği engeller oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 2016, scientists announced the discovery of a large coral reef near the mouth of the Amazon. ---- Some scientists had believed that this made the area unsuitable for such reefs.",
      [
        "It lies beneath the muddy plume of fresh water that the river pours into the Atlantic Ocean.",
        "Coral reefs are colourful.",
        "The Amazon is a long river.",
        "Its existence had been suspected after fishermen reported catching reef fish in the area.",
        "Oceans are salty.",
      ],
      "Boşluk resifin konumunu anlatıp bölgenin uygunsuz sanılmasına bağlanan bir cümle gerektirir; boşluğa resifin nehrin Atlantik'e döktüğü çamurlu tatlı su bulutunun altında bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Piranhas are often described as extremely dangerous fish that can strip a large animal to the bone within minutes. ---- Attacks on people are rare and usually happen when the water is low and food is scarce.",
      [
        "In reality, most species feed mainly on insects, plants and dead animals, and they are rarely aggressive.",
        "South America has many fish.",
        "Rivers are full of life.",
        "Their teeth are very sharp and are replaced regularly throughout their lives.",
        "Many people keep fish as pets.",
      ],
      "Boşluk yaygın inancı düzeltip saldırıların nadir olmasına bağlanan bir cümle gerektirir; boşluğa çoğu türün böcek, bitki ve ölü hayvanlarla beslendiğini ve nadiren saldırgan olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Although the Amazon stretches for thousands of kilometres, no bridge crosses its main channel. ---- Instead, people and goods are carried across by boats and ferries.",
      [
        "Much of the river flows through thinly populated forest, and its banks shift and flood so much that building bridges would be extremely difficult.",
        "Bridges are made of steel and concrete.",
        "Many rivers have bridges.",
        "In the wet season, the river can rise by more than ten metres in some places.",
        "Boats are used on many rivers.",
      ],
      "Boşluk ana kanalda köprü bulunmamasının nedenini anlatıp insanların teknelerle geçirilmesine bağlanan bir cümle gerektirir; boşluğa nehrin seyrek nüfuslu ormandan aktığını ve kıyılarının köprü yapmayı çok zorlaştıracak kadar değiştiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Majuli, an island in the Brahmaputra River in north-eastern India, was once one of the largest river islands in the world. ---- Its inhabitants have tried to protect it with embankments and by planting trees.",
      [
        "Over the past century, however, floods have washed away much of its land, and it has lost more than half of its area.",
        "India has many rivers.",
        "Islands are surrounded by water.",
        "The island is famous for its monasteries and traditional dances.",
        "Trees grow along rivers.",
      ],
      "Boşluk adanın küçülmesini anlatıp sakinlerin onu korumaya çalışmasına bağlanan bir cümle gerektirir; boşluğa taşkınların topraklarının büyük bölümünü sürükleyip alanının yarısından fazlasını kaybettirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In November 1986, a fire at a chemical warehouse in Switzerland led to tonnes of poisonous chemicals being washed into the Rhine. ---- The disaster led to international agreements to clean up the river.",
      [
        "The pollution killed huge numbers of fish and other animals for hundreds of kilometres downstream.",
        "Switzerland is a mountainous country.",
        "Fires are dangerous.",
        "Water used to fight the fire carried the chemicals into the river.",
        "Many ships travel on the Rhine.",
      ],
      "Boşluk kirliliğin sonucunu anlatıp uluslararası anlaşmalara bağlanan bir cümle gerektirir; boşluğa kirliliğin yüzlerce kilometre boyunca çok sayıda balık ve hayvanı öldürdüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The Amazon carries more water than any other river in the world.",
        "It pours so much fresh water into the Atlantic that the sea remains less salty far from the coast.",
        "Many people enjoy holidays on the beach.",
        "Sailors once discovered that they could drink the water many kilometres from land.",
        "The river is fed by rainfall over a huge area of South America.",
      ],
      odd: 2,
      why: "Parça Amazon nehrinin taşıdığı muazzam su miktarını anlatır. Pek çok kişinin plaj tatilinden hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Rivers that flow over soft rock can change their course over time.",
        "During floods, a river may suddenly cut a new channel across a bend.",
        "Some rivers in South Asia have shifted their courses by many kilometres.",
        "Such changes can destroy villages and farmland.",
        "Farmers grow rice in many parts of Asia.",
      ],
      odd: 4,
      why: "Parça nehirlerin zamanla yatak değiştirmesini anlatır. Çiftçilerin Asya'nın pek çok yerinde pirinç yetiştirdiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many rivers carry large amounts of plastic to the sea.",
        "A small number of rivers are responsible for a large share of this plastic.",
        "Bottles are made of many different materials.",
        "Some cities have installed barriers that collect floating waste before it reaches the ocean.",
        "Reducing waste on land is regarded as the most effective solution.",
      ],
      odd: 2,
      why: "Parça nehirlerin denize taşıdığı plastiği anlatır. Şişelerin pek çok farklı malzemeden yapıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Beavers build dams across streams using branches, mud and stones.",
        "The ponds that form behind the dams provide habitats for many other animals.",
        "Some countries have reintroduced beavers to help reduce flooding downstream.",
        "Wood is used to make furniture.",
        "Farmers sometimes complain that the dams flood their land.",
      ],
      odd: 3,
      why: "Parça kunduzların kurduğu barajları ve etkilerini anlatır. Ahşabın mobilya yapımında kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some rivers disappear underground and reappear many kilometres away.",
        "This usually happens in areas of limestone, which is slowly dissolved by water.",
        "The water flows through caves and tunnels beneath the surface.",
        "Limestone is used to make cement.",
        "Scientists sometimes add harmless dyes to the water to trace its route.",
      ],
      odd: 3,
      why: "Parça yer altına girip başka yerde yeniden çıkan nehirleri anlatır. Kireçtaşının çimento yapımında kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The water in many rivers is used several times before it reaches the sea.",
        "Cities take water from the river, treat it and return it after use.",
        "Towns further downstream may then use the same water again.",
        "Water treatment plants remove harmful substances.",
        "Many cities have large parks.",
      ],
      odd: 4,
      why: "Parça nehir suyunun denize ulaşmadan birkaç kez kullanılmasını anlatır. Pek çok kentte büyük parklar bulunduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
