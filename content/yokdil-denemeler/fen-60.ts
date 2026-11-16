import type { YokdilDeneme } from "./types";

export const FEN_60: YokdilDeneme = {
  no: 60,
  field: "fen",
  vocab: [
    [
      "The shape of the bay ---- the tides, producing a difference of up to sixteen metres between high and low water.",
      ["amplifies", "silences", "paints", "forgets", "borrows"],
      "Körfezin biçiminin gelgitleri 'büyüttüğü' (amplifies) ve yüksek ile alçak su arasında on altı metreye varan fark oluşturduğu anlatılır.",
    ],
    [
      "The cables were broken one after another in a ---- that puzzled engineers for years.",
      ["sequence", "festival", "kitchen", "harbour", "costume"],
      "Kabloların mühendisleri yıllarca şaşırtan bir 'sıra/dizilim' (sequence) içinde birbiri ardına koptuğu anlatılır.",
    ],
    [
      "A huge mass of rock fell into the bay, and the water ---- up the mountainside opposite.",
      ["surged", "slept", "whispered", "melted", "shrank"],
      "Büyük bir kaya kütlesinin körfeze düştüğü ve suyun karşıdaki dağ yamacına doğru 'yükseldiği/hücum ettiği' (surged) anlatılır.",
    ],
    [
      "The girl had learned about tsunamis at school and recognised the ---- signs on the beach.",
      ["warning", "smiling", "sleeping", "singing", "shopping"],
      "Kızın tsunamileri okulda öğrendiği ve kumsaldaki 'uyarı' (warning) işaretlerini tanıdığı anlatılır.",
    ],
    [
      "A dead whale on the sea floor can ---- a whole community of animals for decades.",
      ["sustain", "frighten", "punish", "decorate", "examine"],
      "Deniz tabanındaki ölü bir balinanın onlarca yıl bütün bir hayvan topluluğunu 'besleyip ayakta tutabildiği' (sustain) anlatılır.",
    ],
    [
      "The thick layer of slime ---- the harbours and clogged the nets of fishermen.",
      ["covered up", "looked after", "gave away", "took after", "turned down"],
      "Kalın balçık tabakasının limanları 'kapladığı' (covered up) ve balıkçıların ağlarını tıkadığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the tide turned, the boats in the harbour ---- on the mud.",
      ["had been left", "are left", "have been left", "will be left", "leave"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been left'.",
    ],
    [
      "If the girl had not warned her parents, many people on the beach ---- killed.",
      ["might have been", "will be", "are", "had been", "would be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might have been'.",
    ],
    [
      "The cause of the cable breaks ---- more than twenty years later.",
      ["was explained", "explained", "has explained", "explains", "is explaining"],
      "Neden açıklanmıştır; edilgen geçmiş zaman: 'was explained'.",
    ],
    [
      "---- the wave was more than five hundred metres high, two of the boats in the bay survived.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Dalganın beş yüz metreden yüksek olması ile iki teknenin kurtulması zıttır: 'Although'.",
    ],
    [
      "The divers, ---- spleens are unusually large, can stay underwater for several minutes.",
      ["whose", "who", "which", "whom", "where"],
      "Dalgıçların dalakları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only when the slime began to sink ---- the full damage to the sea floor become clear.",
      ["did", "had", "was", "has", "does not"],
      "'Only when' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The whale's body sinks to the sea floor, ---- it may provide food for decades.",
      ["where", "which", "when", "whose", "that"],
      "'sea floor' yer bildirir; orada onlarca yıl besin sağlayabilir: 'where'.",
    ],
    [
      "The narrower the bay becomes, ---- the tide rises.",
      ["the higher", "the highest", "higher", "highest", "so high"],
      "'The narrower ..., the higher ...' paralel yapısı: 'the higher'.",
    ],
    [
      "The scientists recommended that the waste from cities ---- before it reaches the sea.",
      ["be treated", "is treated", "was treated", "to be treated", "being treated"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be treated'.",
    ],
    [
      "The landslide is thought ---- by an earthquake on a nearby fault.",
      ["to have been triggered", "triggering", "to trigger", "triggered", "having triggered"],
      "Geçmişe ait edilgen eylem için mastarın geçmiş edilgen biçimi: 'to have been triggered'.",
    ],
    [
      "The girl told her mother that they should leave the beach ---- a tsunami was coming.",
      ["because", "unless", "although", "whereas", "so that"],
      "Kumsaldan ayrılmaları gerektiğinin gerekçesi bir tsunaminin gelmesidir: 'because'.",
    ],
    [
      "The fishermen watched the water ---- away from the shore.",
      ["rush", "to rushing", "rushed", "be rushed", "to have rushed"],
      "Algı fiili 'watch sb/sth do sth' kalıbında yalın fiil: 'rush'.",
    ],
    [
      "Had the cables not been broken, scientists ---- about the underwater currents.",
      ["might not have learned", "learn", "will learn", "had learned", "are learning"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have learned'.",
    ],
    [
      "Both the rising temperature and the pollution ---- to have caused the slime.",
      ["are thought", "is thought", "thinking", "to think", "has thought"],
      "'Both ... and' çoğul özne alır, edilgen yapı: 'are thought'.",
    ],
  ],
  cloze: [
    {
      text:
        "The Bay of Fundy, which lies between the Canadian provinces of New Brunswick and Nova Scotia, has the highest tides in the world. In some places, the difference between high and low water reaches about sixteen metres, roughly the height of a five-storey building. Twice a day, about a hundred billion tonnes of seawater flow into the bay {1} out again, more than the combined flow of all the world's rivers. The reason lies in the shape and size of the bay. It is long, narrow {2} becomes shallower towards its end, so that the water is squeezed as it moves inland. More importantly, the time it takes for water to slosh from one end of the bay to the other and back is about thirteen hours, very close to the period of the tides in the Atlantic Ocean. As a result, the bay behaves rather like a bathtub in which water is pushed at just the right moment, {3} each tide reinforces the motion of the water. At low tide, fishing boats are left lying on the mud, {4} visitors can walk on the sea floor among strange rock formations. Engineers have long been interested in using the tides to produce electricity, {5} projects have been limited by concerns about the effects on fish and on the environment.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Suyun körfeze girmesi ve tekrar çıkması birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Uzun, dar ve sığlaşan olması üç özelliğin sıralanmasıdır: 'and'.",
        ],
        [
          "(23) ----",
          ["so that", "unless", "although", "until", "whereas"],
          "Suyun tam doğru anda itilmesinin sonucu her gelgitin hareketi güçlendirmesidir: 'so that'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Teknelerin çamurda kalması ve ziyaretçilerin deniz tabanında yürüyebilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "and", "so", "or", "for"],
          "Gelgitten elektrik üretme ilgisi ile projelerin çevre kaygılarıyla sınırlanması zıttır: 'but'.",
        ],
      ],
    },
    {
      text:
        "On 18 November 1929, an earthquake struck beneath the sea off the coast of Newfoundland, near an area known as the Grand Banks. It caused a tsunami that killed about twenty-eight people in nearby villages, {1} it also produced a mystery. At the time, a number of telegraph cables crossed the sea floor in the area, carrying messages between Europe and North America. Over the following thirteen hours, twelve of these cables broke, one after another, {2} the breaks occurred in order from the shallow water near the earthquake towards the deep ocean farther south. Some of the cables closest to the earthquake broke immediately, {3} others broke many hours later and hundreds of kilometres away. For more than twenty years, nobody could explain the pattern. In 1952, two American scientists studied the exact times and positions of the breaks {4} proposed a solution. They suggested that the earthquake had triggered a huge underwater landslide, which had turned into a dense, fast-moving current of mud and sand that rushed down the slope of the sea floor, snapping each cable as it passed. By calculating the time between the breaks, they estimated that the current had travelled at speeds of up to about seventy kilometres per hour. The event provided some of the first evidence for such currents, {5} they are now known to play an important role in shaping the deep sea floor.",
      blanks: [
        [
          "(26) ----",
          ["but", "and", "so", "or", "for"],
          "Tsunaminin can alması ile bir gizem de yaratması karşılaştırılır: 'but'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "Kabloların birbiri ardına kopması ve kopmaların belirli bir sırayla olması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["while", "because", "unless", "so that", "until"],
          "Bazı kabloların hemen kopması ile diğerlerinin saatler sonra kopması karşılaştırılır: 'while'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Bilim insanlarının kopmaları incelemesi ve bir çözüm önermesi birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Olayın ilk kanıtları sağlaması ve bu akıntıların önemli rol oynadığının bilinmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although tidal power could provide a great deal of electricity, ----.",
      [
        "projects in the bay have been limited by environmental concerns",
        "tides happen twice a day",
        "Canada is a large country",
        "water is heavy",
        "fishing boats are left lying on the mud when the water flows out of the bay at low tide",
      ],
      "'Although' zıtlık ister: gelgit enerjisi çok elektrik sağlayabilse de körfezdeki projeler çevre kaygılarıyla sınırlanmıştır.",
    ],
    [
      "If the bay were shorter or wider, ----.",
      [
        "its tides would probably be much smaller",
        "boats are made of wood",
        "the sea is salty",
        "Nova Scotia is in Canada",
        "visitors would have walked on the sea floor among the rock formations a long time ago",
      ],
      "İkinci tip koşul: körfez daha kısa ya da daha geniş olsaydı gelgitleri muhtemelen çok daha küçük olurdu.",
    ],
    [
      "----, the scientists worked out how fast the current had travelled.",
      [
        "By comparing the times at which the cables broke",
        "Although cables are strong",
        "Unless the sea was calm",
        "Since Newfoundland is cold",
        "While the villages near the coast were recovering from the effects of the tsunami",
      ],
      "Kabloların koptuğu zamanları karşılaştırarak bilim insanları akıntının ne kadar hızlı ilerlediğini hesapladı.",
    ],
    [
      "The wave reached a height of more than five hundred metres ----.",
      [
        "because a huge mass of rock fell into a narrow bay",
        "although Alaska is cold",
        "unless the wind was strong",
        "so that the fishermen could escape",
        "while the people on one of the fishing boats were watching the mountains at the end of the bay",
      ],
      "Dalga, dar bir körfeze büyük bir kaya kütlesi düştüğü için beş yüz metreden yüksek bir yüksekliğe ulaştı.",
    ],
    [
      "Since the girl recognised the signs of an approaching tsunami, ----.",
      [
        "the beach was cleared before the wave arrived",
        "beaches are sandy",
        "Thailand is warm",
        "holidays are relaxing",
        "she had learned about the movement of the Earth's crust in a geography lesson in England",
      ],
      "'Since' neden bildirir: kız yaklaşan bir tsunaminin işaretlerini tanıdığından dalga gelmeden kumsal boşaltıldı.",
    ],
    [
      "Not only do the divers have larger spleens, ----.",
      [
        "but this difference also appears to be partly genetic",
        "and the sea is deep",
        "since fish are fast",
        "so boats are small",
        "unless the scientists had compared them with people living on the mainland nearby",
      ],
      "'Not only ... but also' yapısı tamamlanır: dalgıçların dalakları yalnızca daha büyük değildir, bu farkın kısmen genetik olduğu da görülmektedir.",
    ],
    [
      "Once the whale's body reaches the sea floor, ----.",
      [
        "scavengers such as sharks and hagfish begin to feed on it",
        "whales are large",
        "the sea is dark",
        "bones are white",
        "scientists had used submarines to find the first examples of such communities in the 1980s",
      ],
      "Balinanın cesedi deniz tabanına ulaştığında köpekbalıkları ve hagfish gibi leş yiyiciler onunla beslenmeye başlar.",
    ],
    [
      "Unless the amount of untreated waste entering the sea is reduced, ----.",
      [
        "the slime may return in future years",
        "the sea is blue",
        "cities are large",
        "fish need oxygen",
        "the fishermen would have been able to use their nets during the summer of that year",
      ],
      "'Unless' olumsuz koşul: denize giren arıtılmamış atık miktarı azaltılmazsa balçık gelecek yıllarda geri dönebilir.",
    ],
    [
      "The current of mud and sand was so powerful ----.",
      [
        "that it snapped cables hundreds of kilometres away",
        "although mud is soft",
        "because the sea is deep",
        "unless the cables were thick",
        "while the earthquake was causing a tsunami that struck villages along the coast",
      ],
      "Çamur ve kum akıntısı o kadar güçlüydü ki yüzlerce kilometre uzaktaki kabloları kopardı.",
    ],
    [
      "Even though a whale fall is rare in any one place, ----.",
      [
        "scientists believe there are many thousands on the sea floor at any time",
        "whales are mammals",
        "oceans are large",
        "bones are hard",
        "a dead whale can provide food for a whole community of animals for several decades",
      ],
      "'Even though' zıtlık ister: bir balina düşüşü tek bir yerde nadir olsa da bilim insanları herhangi bir anda deniz tabanında binlerce olduğuna inanır.",
    ],
    [
      "As the water had drawn back far from the shore, ----.",
      [
        "the girl realised that a tsunami was coming",
        "the sun was shining",
        "tourists were swimming",
        "the sand was hot",
        "her teacher in England had shown the class a film about a tsunami in Hawaii two weeks earlier",
      ],
      "Su kıyıdan çok uzağa çekildiği için kız bir tsunaminin geldiğini anladı.",
    ],
  ],
  enTr: [
    [
      "At low tide, fishing boats are left lying on the mud.",
      [
        "Alçak gelgitte balıkçı tekneleri çamurun üzerinde kalır.",
        "Yüksek gelgitte balıkçı tekneleri çamurun üzerinde kalır.",
        "Alçak gelgitte çamurda kalan tekneler, bir daha hiç yüzemez.",
        "Çamur alçak gelgitte tekneleri yapar.",
        "Balıkçı tekneleri hiç karaya oturmaz.",
      ],
      "'At low tide' 'alçak gelgitte', 'fishing boats are left lying on the mud' 'balıkçı tekneleri çamurun üzerinde kalır' karşılığıdır.",
    ],
    [
      "Twelve cables broke one after another over thirteen hours.",
      [
        "On iki kablo, on üç saat boyunca birbiri ardına koptu.",
        "On üç kablo, on iki saat boyunca aynı anda koptu.",
        "On üç saat boyunca kopmayan kablolar, depremin gücünü ölçmek için kullanıldı.",
        "On üç saat on iki kabloyu kopardı.",
        "Kabloların hiçbiri kopmadı.",
      ],
      "'Twelve cables broke one after another' 'on iki kablo birbiri ardına koptu', 'over thirteen hours' 'on üç saat boyunca' karşılığıdır.",
    ],
    [
      "The wave stripped the trees from the mountainside.",
      [
        "Dalga, dağ yamacındaki ağaçları söküp attı.",
        "Ağaçlar, dağ yamacındaki dalgayı durdurdu.",
        "Dağ yamacındaki ağaçlar, dalgadan hiç etkilenmedi.",
        "Dağ ağaçları dalgaya attı.",
        "Dalga dağa hiç ulaşmadı.",
      ],
      "'The wave stripped the trees' 'dalga ağaçları söküp attı', 'from the mountainside' 'dağ yamacındaki' karşılığıdır.",
    ],
    [
      "The girl had learned about tsunamis in a geography lesson.",
      [
        "Kız, tsunamileri bir coğrafya dersinde öğrenmişti.",
        "Kız, coğrafya dersini bir tsunamide öğrenmişti.",
        "Coğrafya dersinde hiç tsunami konusu işlenmediği için kız tehlikeyi fark edemedi.",
        "Tsunami kıza coğrafya öğretti.",
        "Kız hiç okula gitmemişti.",
      ],
      "'The girl had learned about tsunamis' 'kız tsunamileri öğrenmişti', 'in a geography lesson' 'bir coğrafya dersinde' karşılığıdır.",
    ],
    [
      "The divers can stay underwater for several minutes at a time.",
      [
        "Dalgıçlar her seferinde birkaç dakika su altında kalabilir.",
        "Dalgıçlar her seferinde birkaç saniyeden fazla su altında kalamaz.",
        "Birkaç dakika su altında kalan dalgıçlar, genellikle bilincini yitirir.",
        "Su dalgıçları birkaç dakika tutar.",
        "Dalgıçlar hiç dalmaz.",
      ],
      "'The divers can stay underwater' 'dalgıçlar su altında kalabilir', 'for several minutes at a time' 'her seferinde birkaç dakika' karşılığıdır.",
    ],
    [
      "The slime is formed by tiny organisms when the water becomes too warm.",
      [
        "Balçık, su çok ısındığında küçük organizmalar tarafından oluşturulur.",
        "Su, balçık çok ısındığında küçük organizmalar tarafından oluşturulur.",
        "Küçük organizmalar, su ısındığında balçığı tamamen yok eder.",
        "Balçık küçük organizmaları ısıtır.",
        "Balçık yalnızca soğuk suda oluşur.",
      ],
      "'The slime is formed by tiny organisms' 'balçık küçük organizmalar tarafından oluşturulur', 'when the water becomes too warm' 'su çok ısındığında' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Körfezin biçimi, gelgitlerin olağanüstü yükselmesine neden olur.",
      [
        "The shape of the bay causes the tides to rise extraordinarily high.",
        "The tides cause the shape of the bay to change extraordinarily.",
        "The shape of the bay prevents the tides from rising, although the water is deep.",
        "The tides shape the bay every day.",
        "The bay has no tides.",
      ],
      "'Körfezin biçimi neden olur' 'the shape of the bay causes', 'gelgitlerin olağanüstü yükselmesine' 'the tides to rise extraordinarily high' karşılığıdır.",
    ],
    [
      "Deprem, büyük bir su altı heyelanını tetiklemişti.",
      [
        "The earthquake had triggered a huge underwater landslide.",
        "A huge underwater landslide had been triggered by a storm.",
        "The earthquake was expected to cause a landslide, but nothing happened under the sea.",
        "The landslide triggered the earthquake.",
        "There was no earthquake.",
      ],
      "'Deprem tetiklemişti' 'the earthquake had triggered', 'büyük bir su altı heyelanını' 'a huge underwater landslide' karşılığıdır.",
    ],
    [
      "Körfezdeki üç tekneden ikisi dalgadan kurtuldu.",
      [
        "Two of the three boats in the bay survived the wave.",
        "Three of the two boats in the bay were destroyed by the wave.",
        "None of the boats in the bay survived the wave, although they were far from the shore.",
        "The wave survived the boats.",
        "There were no boats in the bay.",
      ],
      "'Körfezdeki üç tekneden ikisi' 'two of the three boats in the bay', 'dalgadan kurtuldu' 'survived the wave' karşılığıdır.",
    ],
    [
      "Kızın uyarısı sayesinde kumsaldaki herkes güvenli bir yere ulaştı.",
      [
        "Thanks to the girl's warning, everyone on the beach reached a safe place.",
        "Thanks to the beach, the girl warned everyone about a safe place.",
        "The girl warned the people on the beach, but nobody believed her.",
        "The safe place warned the girl.",
        "Nobody was on the beach.",
      ],
      "'Kızın uyarısı sayesinde' 'thanks to the girl's warning', 'kumsaldaki herkes güvenli bir yere ulaştı' 'everyone on the beach reached a safe place' karşılığıdır.",
    ],
    [
      "Bilim insanları, dalgıçların dalaklarını ultrason ile ölçtü.",
      [
        "The scientists measured the divers' spleens using ultrasound.",
        "The divers measured the scientists' spleens using ultrasound.",
        "The scientists tried to measure the divers' spleens, but the ultrasound machine did not work.",
        "Ultrasound measured the scientists.",
        "The scientists never met the divers.",
      ],
      "'Bilim insanları dalgıçların dalaklarını ölçtü' 'the scientists measured the divers' spleens', 'ultrason ile' 'using ultrasound' karşılığıdır.",
    ],
    [
      "Balçık, deniz tabanında yaşayan pek çok canlıyı boğdu.",
      [
        "The slime suffocated many creatures living on the sea floor.",
        "Many creatures living on the sea floor produced the slime.",
        "The slime provided food for many creatures, which multiplied on the sea floor.",
        "The sea floor suffocated the slime.",
        "No creatures live on the sea floor.",
      ],
      "'Balçık pek çok canlıyı boğdu' 'the slime suffocated many creatures', 'deniz tabanında yaşayan' 'living on the sea floor' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Late on 9 July 1958, a strong earthquake struck south-eastern Alaska. At the head of Lituya Bay, a narrow inlet about eleven kilometres long, the shaking caused an enormous mass of rock, estimated at about thirty million cubic metres, to break away from a cliff and plunge into the water from a height of up to nine hundred metres. The impact pushed the water of the bay up the slope of the mountain on the opposite side to a height of about 524 metres, higher than the Empire State Building, stripping away the trees and soil down to the bare rock. A huge wave then raced out along the inlet to the ocean. Three fishing boats were anchored in the bay at the time. One sank, killing the couple on board. The other two were lifted by the wave; the crew of one later described being carried over a forested strip at the inlet's entrance before landing in the open sea, where they were rescued. Scientists who visited the area afterwards found the clear line of destroyed forest high on the mountainsides. Because the wave was caused by a sudden landslide rather than by the movement of the sea floor, it is often described as a 'megatsunami'. Evidence of earlier, smaller waves in the bay shows that such events have happened there before.",
      questions: [
        [
          "According to the passage, the giant wave was produced by ----.",
          [
            "a huge rockfall into the bay",
            "a movement of the sea floor",
            "a storm",
            "the fishing boats that were anchored in the bay at the time of the earthquake",
            "the melting of a glacier",
          ],
          "Metne göre büyük bir kaya kütlesinin körfeze düşmesiyle oluştu.",
        ],
        [
          "The line of destroyed forest high on the mountains showed ----.",
          [
            "how far up the slope the water had reached",
            "where the boats had sunk",
            "where the earthquake started",
            "that such events had never happened in the bay before 1958",
            "that the trees were diseased",
          ],
          "Suyun yamaçta ne kadar yükseğe ulaştığını gösterdi.",
        ],
        [
          "It can be understood from the passage that the event is called a 'megatsunami' partly because ----.",
          [
            "it was caused differently from most tsunamis",
            "it crossed the Pacific Ocean",
            "it killed thousands of people",
            "the crew of one boat were carried over the trees at the mouth of the bay",
            "it happened at night",
          ],
          "Deniz tabanının hareketi yerine ani bir heyelanla oluştu.",
        ],
      ],
    },
    {
      text:
        "On the morning of 26 December 2004, a ten-year-old British girl called Tilly Smith was spending a family holiday on a beach in Phuket, Thailand. A few hours earlier, a huge earthquake had struck beneath the sea off the coast of Sumatra, more than six hundred kilometres away, though no one on the beach knew about it. Tilly saw that something odd was happening to the water. The water was frothy and bubbling, and the tide seemed to be going out very rapidly, leaving fish flapping on the sand. A fortnight before, during geography at her English school, the class had watched a film about tsunamis, and the teacher had explained the warning signs, including the sudden withdrawal of the sea. Tilly warned her mother that a giant wave was on its way. At first, her mother did not take her seriously, but Tilly became increasingly upset, and eventually her father informed a security guard at their hotel. The beach was cleared, and the guests moved to higher floors of the hotel. Shortly afterwards, the wave struck. The beach was one of the few in the area on which nobody was killed or seriously injured. The disaster killed more than two hundred thousand people in countries around the Indian Ocean. Tilly's story was later used by the United Nations to show the value of education in reducing the impact of natural disasters.",
      questions: [
        [
          "According to the passage, Tilly realised the danger because ----.",
          [
            "she had recently learned the warning signs at school",
            "she felt the earthquake",
            "she heard a warning on the radio",
            "a security guard at the hotel told her family that a wave was approaching",
            "she had experienced a tsunami before",
          ],
          "Metne göre iki hafta önce coğrafya dersinde uyarı işaretlerini öğrenmişti.",
        ],
        [
          "One of the signs Tilly noticed was that ----.",
          [
            "the sea was quickly drawing back from the shore",
            "the sky became dark",
            "the sand was shaking",
            "the guests were moving to the higher floors of the hotel",
            "birds were flying inland",
          ],
          "Gelgitin çok hızlı çekildiğini ve kumda balıkların çırpındığını fark etti.",
        ],
        [
          "It can be understood from the passage that the United Nations used Tilly's story to ----.",
          [
            "show how knowledge can save lives",
            "criticise the hotel",
            "describe the earthquake",
            "explain why so many people around the Indian Ocean died",
            "encourage tourism in Thailand",
          ],
          "Doğal afetlerin etkisini azaltmada eğitimin değerini göstermek için kullandı.",
        ],
      ],
    },
    {
      text:
        "The Bajau people of South-East Asia, sometimes called 'sea nomads', have lived for centuries in boats or in houses built on stilts above the sea. They obtain much of their food by diving, often spending up to five hours a day underwater, and some can stay beneath the surface for several minutes at a time, reaching depths of seventy metres with only a weight and a pair of wooden goggles. In 2018, a team of scientists travelled to Indonesia to investigate how they are able to do this. Using a portable ultrasound machine, they measured the size of the spleen in Bajau villagers and in the Saluan, a neighbouring people who live on land and do not dive. The spleen stores red blood cells, which carry oxygen, and when a person holds their breath and dives, it contracts, releasing extra oxygen into the blood. The researchers found that the spleens of the Bajau were about fifty per cent larger than those of the Saluan. Importantly, this was true even of Bajau people who did not dive regularly, which suggested that the difference was not simply the result of training. Genetic analysis identified a variant of a gene that may be linked to spleen size and that is much more common among the Bajau. The study is considered one of the clearest examples of natural selection in modern humans.",
      questions: [
        [
          "According to the passage, the spleen helps divers because ----.",
          [
            "it releases extra oxygen-carrying cells into the blood",
            "it stores air",
            "it keeps the body warm",
            "it allows the Bajau to see underwater without the help of their wooden goggles",
            "it makes them heavier",
          ],
          "Metne göre dalarken kasılıp kana fazladan oksijen taşıyan alyuvar salar.",
        ],
        [
          "The scientists compared the Bajau with the Saluan because ----.",
          [
            "the Saluan live nearby but do not dive",
            "the Saluan are better divers",
            "the two groups are identical",
            "the Saluan had asked the scientists to measure their spleens using ultrasound",
            "the Saluan live in boats",
          ],
          "Saluanlar komşu bir halktır ama karada yaşar ve dalmazlar.",
        ],
        [
          "It can be understood from the passage that the large spleens of the Bajau ----.",
          [
            "are probably partly inherited",
            "are caused only by training",
            "are harmful",
            "are found only among the people who dive for more than five hours a day",
            "shrink with age",
          ],
          "Düzenli dalmayanlarda da büyük olması farkın yalnızca antrenmandan kaynaklanmadığını gösterir.",
        ],
      ],
    },
    {
      text:
        "A whale that dies far out at sea often sinks thousands of metres to the deep sea floor, where food is usually very scarce. For the animals living there, the arrival of a carcass weighing up to a hundred tonnes is like a sudden feast. Scientists first discovered such 'whale falls' by chance in 1987, when a research submarine came across the skeleton of a whale off the coast of California surrounded by unusual creatures. Since then, researchers have studied them by deliberately sinking the bodies of whales that have washed up on beaches. They have found that a whale fall passes through several stages. First, scavengers such as sharks, hagfish and crabs strip away the soft tissue, a process that can take months or even a couple of years. Next, worms, molluscs and other small animals colonise the bones and the surrounding sediment, feeding on the remaining organic matter. Finally, over a period that may last for decades, bacteria break down the fats stored in the bones, producing chemicals that support a community of organisms similar to those found around hot springs on the sea floor. Several species, including worms that have no mouth or gut and bore into the bones to obtain nutrients, have been found only on whale falls. Some scientists believe that the falls may act as stepping stones that allow deep-sea animals to spread across the ocean.",
      questions: [
        [
          "According to the passage, whale falls were first discovered ----.",
          [
            "accidentally by a research submarine",
            "by fishermen",
            "on a beach in California",
            "by scientists who had deliberately sunk the body of a whale in the ocean",
            "using satellites",
          ],
          "Metne göre 1987'de bir araştırma denizaltısı tesadüfen buldu.",
        ],
        [
          "In the final stage of a whale fall, ----.",
          [
            "bacteria break down fats in the bones",
            "sharks eat the flesh",
            "the bones float to the surface",
            "worms and molluscs colonise the sediment around the bones for the first time",
            "the skeleton disappears immediately",
          ],
          "Son aşamada bakteriler kemiklerde depolanan yağları parçalar.",
        ],
        [
          "It can be understood from the passage that whale falls may be important because ----.",
          [
            "they could help deep-sea animals to move between distant areas",
            "they warm the ocean",
            "they attract whales",
            "they produce hot springs on the sea floor that support many other organisms",
            "they clean the water",
          ],
          "Derin deniz hayvanlarının okyanus boyunca yayılmasını sağlayan basamak taşları olabilir.",
        ],
      ],
    },
    {
      text:
        "In the spring and early summer of 2021, a thick, greyish-brown slime spread across the Sea of Marmara in Türkiye, covering harbours, beaches and the surface of the water around Istanbul. Known as 'sea snot' or marine mucilage, it is produced by tiny marine organisms called phytoplankton when they are under stress. Under normal conditions, they produce small amounts of the sticky substance, but when the water becomes unusually warm and is rich in nutrients, they can multiply rapidly and release large quantities of it. The Sea of Marmara is particularly vulnerable because it is relatively enclosed, receives large amounts of untreated wastewater from cities and industry, and has been warming in recent decades. The slime caused serious problems for fishermen, whose nets became clogged and too heavy to lift, and it threatened tourism. More seriously, as it sank, it covered the sea floor, suffocating corals, sponges, shellfish and other creatures that could not move away. The government launched a large cleaning operation, using boats and pumps to remove the slime from the surface, and announced plans to improve the treatment of wastewater and to protect the sea. Scientists warned, however, that cleaning the surface would not solve the problem and that unless pollution was reduced and the warming of the water slowed, the slime was likely to return.",
      questions: [
        [
          "According to the passage, the slime is produced when ----.",
          [
            "phytoplankton are stressed by warm, nutrient-rich water",
            "oil is spilled into the sea",
            "fish die in large numbers",
            "boats and pumps are used to remove the material from the surface of the water",
            "the water becomes very cold",
          ],
          "Metne göre su alışılmadık derecede sıcak ve besin bakımından zengin olduğunda fitoplanktonlar çok miktarda üretir.",
        ],
        [
          "The Sea of Marmara is particularly at risk because ----.",
          [
            "it is enclosed, polluted and warming",
            "it is very deep",
            "it has no fish",
            "fishermen there use nets that become clogged and too heavy to lift",
            "it is far from cities",
          ],
          "Görece kapalıdır, büyük miktarda arıtılmamış atık su alır ve ısınmaktadır.",
        ],
        [
          "It can be understood from the passage that scientists believed the cleaning operation ----.",
          [
            "would not prevent the problem from happening again",
            "had solved the problem completely",
            "was harmful to fish",
            "should have been carried out only on the beaches around Istanbul",
            "was too expensive",
          ],
          "Kirlilik azaltılmadıkça ve ısınma yavaşlamadıkça balçığın geri dönmesinin olası olduğunu uyardılar.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "About 8,200 years ago, a huge section of the continental shelf off the coast of Norway collapsed and slid into the deep sea. ---- Layers of sand left by the wave have been found in Scotland, Norway and the Shetland Islands.",
      [
        "The landslide, one of the largest known, produced a tsunami that struck the coasts around the North Sea.",
        "Norway has many fjords.",
        "The North Sea is shallow.",
        "Geologists believe that the collapse may have been triggered by an earthquake or by the release of gas.",
        "Sand is found on beaches.",
      ],
      "Boşluk 'dalga' ifadesine bağlanan bir cümle gerektirir; boşluğa heyelanın Kuzey Denizi kıyılarını vuran bir tsunamiye yol açtığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2019, an American explorer named Victor Vescovo completed an expedition to the deepest point of each of the world's five oceans. ---- During one dive, he found a plastic bag and sweet wrappers on the sea floor.",
      [
        "He used a specially designed submarine that could make repeated dives to the bottom of the deepest trenches.",
        "Oceans cover most of the Earth.",
        "Explorers are often brave.",
        "Before the expedition, he had already climbed the highest mountain on each continent.",
        "Submarines are expensive.",
      ],
      "Boşluk 'dalışlardan birinde' ifadesine bağlanan bir cümle gerektirir; boşluğa en derin çukurların dibine tekrar tekrar dalabilen özel bir denizaltı kullandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Divers breathing compressed air at great depths sometimes behave as if they were drunk. ---- The French explorer Jacques Cousteau called this condition 'the rapture of the deep'.",
      [
        "This is because nitrogen in the air has an effect on the brain under high pressure.",
        "Divers wear wetsuits.",
        "Many people enjoy swimming.",
        "The effect disappears quickly when the diver returns to shallower water.",
        "France has a long coastline.",
      ],
      "Boşluk durumu açıklayan bir cümle gerektirir; boşluğa bunun nedeninin yüksek basınç altında havadaki azotun beyni etkilemesi olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "On the South Korean island of Jeju, women known as haenyeo have dived for seafood for centuries without breathing equipment. ---- Today, however, most of them are over sixty years old, and few young women are choosing to continue the tradition.",
      [
        "Some continue to dive well into their eighties, holding their breath for minutes at a time in cold water.",
        "South Korea is in Asia.",
        "Seafood is popular.",
        "Their culture was recognised by UNESCO in 2016.",
        "Islands are surrounded by the sea.",
      ],
      "Boşluk 'ancak bugün' karşıtlığına zemin hazırlayan bir cümle gerektirir; boşluğa bazılarının seksenli yaşlarına dek soğuk suda dakikalarca nefes tutarak dalmaya devam ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Some tiny sea snails have a thin shell and swim through the water by flapping wing-like feet. ---- Scientists have therefore studied them closely to understand the effects of ocean acidification.",
      [
        "Their shells are made of a form of calcium carbonate that dissolves easily in water that has become more acidic.",
        "Snails are found in gardens.",
        "The sea is salty.",
        "Salmon and many other fish feed on them.",
        "Wings help birds to fly.",
      ],
      "Boşluk 'bu nedenle' ifadesine bağlanan bir neden gerektirir; boşluğa kabuklarının asitleşmiş suda kolayca çözünen bir kalsiyum karbonat türünden yapıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "The ocean sunfish is one of the heaviest bony fish in the world, sometimes weighing more than two tonnes. ---- It is often seen lying on its side at the surface, possibly to warm itself after diving into cold, deep water.",
      [
        "It has a strange, flattened body that looks as if the back half has been cut off.",
        "Fish live in water.",
        "The sun is very hot.",
        "Each female can produce hundreds of millions of eggs at one time.",
        "Many people enjoy eating fish.",
      ],
      "Boşluk balığın görünüşünü tanıtan bir cümle gerektirir; boşluğa arka yarısı kesilmiş gibi görünen tuhaf, yassı bir bedeni olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Along the coast of Japan stand hundreds of old stone tablets.",
        "Many carry warnings left by people who survived tsunamis in the past.",
        "One tells people not to build their homes below the point where it stands.",
        "Japan has many beautiful temples.",
        "In 2011, homes above one such stone escaped the waves.",
      ],
      odd: 3,
      why: "Parça Japonya'daki tsunami uyarı taşlarını anlatır. Japonya'da pek çok güzel tapınak bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Large swarms of jellyfish sometimes block the water intakes of coastal power stations.",
        "Some stations have had to shut down for days as a result.",
        "Electricity is used in almost every home.",
        "Warmer seas and overfishing may be increasing the number of swarms.",
        "Engineers are testing new ways of keeping the jellyfish out.",
      ],
      odd: 2,
      why: "Parça kıyı santrallerini tıkayan denizanası sürülerini anlatır. Elektriğin neredeyse her evde kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Groups of humpback whales sometimes hunt fish by blowing bubbles.",
        "They swim in a spiral beneath a shoal, releasing air from their blowholes.",
        "The rising bubbles form a ring that traps the fish in a tight ball.",
        "The whales then rise through the ring with their mouths open.",
        "Whale-watching trips are popular with tourists.",
      ],
      odd: 4,
      why: "Parça kambur balinaların kabarcıklarla avlanmasını anlatır. Balina izleme turlarının turistler arasında popüler olduğunu söyleyen V. cümle akışı bozar.",
    },
    {
      sentences: [
        "Some marine animals make long journeys between feeding and breeding areas.",
        "Turtles have existed for millions of years.",
        "Leatherback turtles can cross entire oceans.",
        "Scientists track them with satellite tags.",
        "The data helps to identify areas that need protection.",
      ],
      odd: 1,
      why: "Parça deniz hayvanlarının uzun göçlerini ve izlenmesini anlatır. Kaplumbağaların milyonlarca yıldır var olduğunu söyleyen II. cümle akışı bozar.",
    },
    {
      sentences: [
        "Noise from ships has increased greatly in the oceans.",
        "Whales rely on sound to communicate and find food.",
        "Studies suggest that noise can raise their stress levels.",
        "Ships carry most of the world's trade.",
        "Some ports now ask ships to slow down to reduce the noise.",
      ],
      odd: 3,
      why: "Parça gemi gürültüsünün balinalara etkisini anlatır. Gemilerin dünya ticaretinin çoğunu taşıdığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Reefs built by corals occupy only a tiny fraction of the sea bed.",
        "Yet roughly one in four ocean species lives on them.",
        "They also protect coastlines from waves and storms.",
        "Diving holidays are expensive.",
        "Rising sea temperatures pose a serious threat to them.",
      ],
      odd: 3,
      why: "Parça mercan resiflerinin önemini anlatır. Dalış tatillerinin pahalı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
