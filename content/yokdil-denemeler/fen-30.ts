import type { YokdilDeneme } from "./types";

export const FEN_30: YokdilDeneme = {
  no: 30,
  field: "fen",
  vocab: [
    [
      "Ibn al-Haytham argued that we see objects because light ---- from them into our eyes.",
      ["travels", "hides", "escapes", "falls asleep", "disappears"],
      "İbnü'l-Heysem'in nesneleri ışık onlardan gözümüze 'ilerlediği' (travels) için gördüğümüzü savunduğu anlatılır.",
    ],
    [
      "Huygens's clock was far more ---- than any earlier design, losing less than a minute a day.",
      ["accurate", "expensive", "fragile", "colourful", "noisy"],
      "Huygens'in saatinin günde bir dakikadan az kaybederek önceki tüm tasarımlardan çok daha 'doğru' (accurate) olduğu anlatılır.",
    ],
    [
      "The two astronomers spent seven years ---- the distance between Dunkirk and Barcelona.",
      ["surveying", "decorating", "abandoning", "celebrating", "forgetting"],
      "İki astronomun Dunkirk ile Barselona arasındaki mesafeyi 'ölçüp haritalamakla' (surveying) yedi yıl geçirdiği anlatılır.",
    ],
    [
      "Fahrenheit used mercury because it expands ---- as it is heated.",
      ["evenly", "suddenly", "rarely", "loudly", "secretly"],
      "Fahrenheit'ın cıvayı ısıtıldıkça 'düzenli' (evenly) genleştiği için kullandığı anlatılır.",
    ],
    [
      "Early photographs needed such long ---- that people had to sit perfectly still for minutes.",
      ["exposures", "journeys", "holidays", "meals", "conversations"],
      "İlk fotoğrafların o kadar uzun 'pozlama' (exposures) gerektirdiği ki insanların dakikalarca kıpırdamadan oturması gerektiği anlatılır.",
    ],
    [
      "Fizeau's apparatus allowed him to ---- the speed of light without looking at the sky.",
      ["work out", "give up", "put off", "turn down", "look after"],
      "Fizeau'nun düzeneğinin gökyüzüne bakmadan ışık hızını 'hesaplamasına' (work out) olanak verdiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "The Book of Optics ---- into Latin around 1200 and studied by European scholars for centuries.",
      ["was translated", "translated", "has translated", "was translating", "had translated"],
      "Kitap çevrilen bir eserdir ve olay geçmiştedir: edilgen geçmiş zaman 'was translated'.",
    ],
    [
      "If Méchain had not made a small error, he ---- so much anxiety in his final years.",
      ["might not have suffered", "might not suffer", "will not suffer", "did not suffer", "had not suffered"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time Daguerre announced his process in 1839, Niépce ---- for six years.",
      ["had been dead", "has been dead", "is dead", "will be dead", "was dying"],
      "Geçmişteki bir olaydan önce süregelen durum: Past Perfect 'had been dead'.",
    ],
    [
      "Fahrenheit, ---- temperature scale is still used in the United States, was a maker of scientific instruments.",
      ["whose", "who", "which", "whom", "where"],
      "Ölçek Fahrenheit'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the invention of the pendulum clock ---- it possible to measure time to within a few seconds a day.",
      ["was", "did", "had", "has", "it was"],
      "'Only after …' ile başlayan cümlede ana cümle devrik olur: 'was it possible'.",
    ],
    [
      "The wheel turned ---- fast that light passing through one gap returned through the next.",
      ["so", "such", "too", "very", "as"],
      "Zarftan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the metre was meant to be one ten-millionth of the distance from the pole to the equator, it is slightly shorter.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Metrenin belirli bir uzunluk olarak tasarlanması ile biraz daha kısa olması zıttır: 'Although'.",
    ],
    [
      "Ibn al-Haytham insisted on ---- ideas by careful experiment.",
      ["testing", "to test", "test", "tested", "to have tested"],
      "'insist on' kalıbında edattan sonra fiil '-ing' alır: 'testing'.",
    ],
    [
      "Ibn al-Haytham is believed ---- much of his book while confined to his house in Cairo.",
      ["to have written", "to write", "writing", "to be written", "to have been written"],
      "Geçmişte yaptığı eylem: 'be believed to have + V3' yapısı 'to have written'.",
    ],
    [
      "The images ---- on silver-coated plates could not be copied.",
      ["produced", "producing", "which produced", "to produce", "have produced"],
      "Görüntüler üretilen şeylerdir; edilgen anlamlı geçmiş ortaç 'produced' gerekir.",
    ],
    [
      "Neither Delambre ---- Méchain knew how long the survey would take.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Huygens attached a pendulum to the clock ---- it would tick at a steady rate.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some people at first treated photographs as if they ---- a kind of magic.",
      ["were", "are", "will be", "have been", "being"],
      "'as if' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The longer the pendulum, ---- it swings.",
      ["the more slowly", "more slowly", "the most slowly", "slowlier", "the slowlier"],
      "'The longer …, the more slowly …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "For centuries, European clocks were driven by weights or springs and controlled by mechanisms that were not very precise, {1} even good clocks could lose or gain a quarter of an hour in a day. Galileo had observed that a pendulum of a given length takes almost the same time to complete each swing, {2} it swings widely or only a little, and he suggested that this property might be used to keep time. It was the Dutch scientist Christiaan Huygens, however, who built the first working pendulum clock in 1656. By connecting a swinging pendulum to the gears of a clock, he made it tick at a steady rate, {3} the error was reduced to less than a minute a day and later to around ten seconds. Huygens also worked out mathematically how the time of each swing depends on the length of the pendulum, {4} allowed clockmakers to design pendulums that beat exactly once a second. Pendulum clocks soon spread throughout Europe and remained the most accurate timekeepers for almost three hundred years. {5}, they were of little use on ships, where the rolling of the waves disturbed the swing, and other solutions had to be found for navigation at sea.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "unless", "although", "or"],
          "Mekanizmaların kesin olmaması ve iyi saatlerin bile çeyrek saat şaşması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["whether", "unless", "because", "so that", "as if"],
          "'whether … or …' = '… olsun ya da … olsun' kalıbı gerekir.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "although", "or"],
          "Saatin düzenli tıklaması ve hatanın azalması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki hesaplamayı niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["However", "Therefore", "For example", "Similarly", "In other words"],
          "Sarkaçlı saatlerin karada en doğru saatler olması ile gemilerde işe yaramaması karşıtlıktır: 'However'.",
        ],
      ],
    },
    {
      text:
        "Long before mechanical clocks, people measured time using the sun and water. Sundials, {1} were used in ancient Egypt, Babylon and Greece, showed the hour by the position of a shadow cast by a pointer. They had obvious limitations: they did not work at night or on cloudy days, {2} the length of the 'hours' they showed changed with the seasons. Water clocks offered a solution. In the simplest kind, water dripped from a small hole in the bottom of a vessel, {3} the falling water level, measured against marks on the inside, showed how much time had passed. In the third century BC, the Greek engineer Ctesibius of Alexandria built much more sophisticated versions, in which a float rose as a container filled, moving pointers, ringing bells and even operating moving figures. To keep the flow steady, he added a device that maintained a constant level of water in the upper container, {4} the pressure, and therefore the rate of flow, did not change. Water clocks remained in use for many centuries, {5} in China, one of the most famous examples, built by the scholar Su Song in the eleventh century, was a tower more than ten metres high.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgüller arasında güneş saatlerini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Gece ya da bulutlu günlerde çalışmamaları ve saatlerin mevsime göre değişmesi birbirine eklenen sınırlılıklardır: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "unless", "although", "or"],
          "Suyun damlaması ve düşen su seviyesinin geçen zamanı göstermesi birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["so that", "although", "unless", "even if", "whereas"],
          "Sabit su seviyesi sağlamasının amacı basıncın ve akış hızının değişmemesidir: 'so that'.",
        ],
        [
          "(30) ----",
          ["and", "but", "unless", "although", "or"],
          "Su saatlerinin yüzyıllarca kullanılması ve Çin'deki ünlü örnek birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Ibn al-Haytham lived more than a thousand years ago, ----.",
      [
        "his emphasis on experiment seems strikingly modern",
        "he was born in Basra in what is now Iraq",
        "he moved to Cairo during the Fatimid period",
        "his book was written in Arabic",
        "he studied mathematics and astronomy",
      ],
      "'Although' zıtlık ister: bin yıldan uzun süre önce yaşamış olsa da deneye verdiği önem şaşırtıcı biçimde modern görünür.",
    ],
    [
      "If Daguerre had found a way to copy his images, ----.",
      [
        "his process might have lasted longer",
        "the camera is a box with a lens",
        "most photographs will be taken with phones",
        "he was a painter of stage scenery",
        "Niépce had made the first photograph",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Fizeau placed a mirror on a hill several kilometres away ----.",
      [
        "so that light could travel there and back",
        "although he did not intend to use it",
        "unless the weather was cloudy",
        "because he wanted to see Paris",
        "even if no light reached it",
      ],
      "Aynayı kilometrelerce uzağa koymasının amacı ışığın gidip geri dönebilmesidir: 'so that'.",
    ],
    [
      "Since the metre was redefined in terms of the speed of light in 1983, ----.",
      [
        "any laboratory can reproduce it",
        "it had been based on a metal bar in Paris",
        "most scientists would have opposed the change",
        "it will be measured in a new way",
        "the survey took seven years",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has been possible'.",
    ],
    [
      "Unless the level of water in the upper vessel is kept constant, ----.",
      [
        "the clock's speed will change",
        "the bells would have rung all day",
        "most of the water had leaked away",
        "the shadow will move backwards",
        "the float was made of wood",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: üst kaptaki su seviyesi sabit tutulmadıkça saat önce hızlı, sonra yavaş çalışır.",
    ],
    [
      "The early exposures were so long ----.",
      [
        "that moving people left no image at all",
        "because the plates were not very sensitive",
        "although the camera was very simple",
        "while the sun was shining brightly",
        "unless the subject moved",
      ],
      "'so long that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Physicists have found that when a pendulum is made longer, ----.",
      [
        "each swing takes more time",
        "it would have stopped moving",
        "most of its weight had been lost",
        "it will swing faster",
        "the clock was very old",
      ],
      "'when' ile genel bir bulgu anlatılır: sarkaç uzatıldığında her salınım daha uzun sürer.",
    ],
    [
      "So determined was Méchain to correct his error ----.",
      [
        "that he went back to Spain to measure again",
        "because the survey was very important",
        "although he was very tired",
        "while Delambre worked in the north",
        "unless the war ended",
      ],
      "Devrik 'So determined was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While many ancient thinkers believed that the eyes sent out rays, ----.",
      [
        "Ibn al-Haytham said light enters the eye",
        "light travels very fast",
        "the eye has a lens",
        "Cairo was an important city",
        "mirrors reflect light",
      ],
      "'While' iki görüşü karşılaştırır: pek çok antik düşünür gözün ışın yaydığına inanırken İbnü'l-Heysem ışığın göze girdiğini gösterdi.",
    ],
    [
      "Once Daguerre's process had been made public, ----.",
      [
        "photography spread quickly",
        "the camera will be smaller",
        "the painters would have been angry",
        "silver is a precious metal",
        "most portraits had been painted",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: fotoğrafçılık hızla dünyaya yayıldı.",
    ],
    [
      "No sooner had Fahrenheit published his scale ----.",
      [
        "than other instrument makers adopted it",
        "when the thermometer had been invented",
        "that water will freeze",
        "before he had moved to Amsterdam",
        "so he stopped working",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Ibn al-Haytham showed that light travels in straight lines from objects into the eye.",
      [
        "İbnü'l-Heysem, ışığın nesnelerden göze düz ilerlediğini gösterdi.",
        "İbnü'l-Heysem, gözden çıkan ışınların nesneleri aydınlattığını gösterdi.",
        "İbnü'l-Heysem, ışığın her zaman eğri yollar izlediğini kanıtladı.",
        "İbnü'l-Heysem, nesnelerin ışık olmadan da görülebildiğini savundu.",
        "İbnü'l-Heysem, gözün ışığı tamamen engellediğini ileri sürdü.",
      ],
      "'light travels in straight lines' 'ışığın düz çizgiler hâlinde ilerlediği', 'from objects into the eye' 'nesnelerden göze' demektir.",
    ],
    [
      "The time of each swing depends on the length of the pendulum, not on how far it swings.",
      [
        "Her salınımın süresi, sarkacın ne kadar geniş salındığına değil uzunluğuna bağlıdır.",
        "Her salınımın süresi, yalnızca sarkacın ne kadar geniş salındığına bağlıdır.",
        "Sarkacın uzunluğunun salınım süresine hiçbir etkisi yoktur.",
        "Sarkaç uzadıkça salınımlar tamamen durur.",
        "Salınımın süresi, sarkacın ağırlığıyla belirlenir.",
      ],
      "'depends on the length of the pendulum' 'sarkacın uzunluğuna bağlıdır', 'not on how far it swings' 'ne kadar geniş salındığına değil' demektir.",
    ],
    [
      "The metre was meant to be a natural unit that would belong to all people for all time.",
      [
        "Metrenin herkese ve her zamana ait doğal bir birim olması amaçlanmıştı.",
        "Metre, yalnızca Fransız halkı için tasarlanmış geçici bir birimdi.",
        "Metrenin doğayla hiçbir ilişkisi olmadığı açıkça belirtilmişti.",
        "Metre, kralın vücut ölçülerine göre belirlendi.",
        "Metrenin birkaç yıl sonra kaldırılması planlanıyordu.",
      ],
      "'was meant to be a natural unit' 'doğal bir birim olması amaçlanmıştı', 'that would belong to all people for all time' 'her zaman tüm insanlara ait olacak' demektir.",
    ],
    [
      "Fahrenheit chose fixed points that anyone could reproduce in order to calibrate his thermometers.",
      [
        "Fahrenheit, termometre ayarı için herkesin üretebileceği sabit noktalar seçti.",
        "Fahrenheit, termometrelerini hiçbir sabit nokta kullanmadan ayarladı.",
        "Fahrenheit, sabit noktaların yalnızca kendisi tarafından bilinmesini istedi.",
        "Fahrenheit, termometrelerini başkalarının ayarlamasını yasakladı.",
        "Fahrenheit, sabit noktaları her yıl değiştirdi.",
      ],
      "'chose fixed points that anyone could reproduce' 'herkesin yeniden oluşturabileceği sabit noktalar seçti', 'in order to calibrate his thermometers' 'termometrelerini ayarlamak için' demektir.",
    ],
    [
      "Each daguerreotype was a unique image that could not be reproduced.",
      [
        "Her dagerotip, çoğaltılamayan benzersiz bir görüntüydü.",
        "Her dagerotip, binlerce kez kolayca çoğaltılabiliyordu.",
        "Dagerotipler, yalnızca kâğıt üzerine basılıyordu.",
        "Dagerotipler, görüntü yerine yalnızca yazı içeriyordu.",
        "Her dagerotip, bir ressam tarafından elle boyanıyordu.",
      ],
      "'Each daguerreotype was a unique image' 'her dagerotip benzersiz bir görüntüydü', 'that could not be reproduced' 'çoğaltılamayan' demektir.",
    ],
    [
      "At a certain speed, the light returning from the mirror was blocked by the teeth of the wheel.",
      [
        "Belirli bir hızda, aynadan dönen ışık çarkın dişleri tarafından engellendi.",
        "Çark ne kadar hızlı dönerse dönsün, ışık hiçbir zaman engellenmedi.",
        "Aynadan dönen ışık, çarkın dönmesini durdurdu.",
        "Çarkın dişleri, ışığı aynaya doğru yansıttı.",
        "Işık, çark yavaşça dönerken tamamen kayboldu.",
      ],
      "'At a certain speed' 'belirli bir hızda', 'the light returning from the mirror was blocked by the teeth of the wheel' 'aynadan dönen ışık çarkın dişleri tarafından engellendi' demektir.",
    ],
  ],
  trEn: [
    [
      "İbnü'l-Heysem, bilimsel yöntemin öncülerinden biri sayılır.",
      [
        "Ibn al-Haytham is seen as a pioneer of scientific method.",
        "Ibn al-Haytham rejected the use of experiments.",
        "Ibn al-Haytham was the last scientist of his age.",
        "Ibn al-Haytham invented the telescope.",
        "Ibn al-Haytham never wrote about light.",
      ],
      "'bilimsel yöntemin öncülerinden biri sayılır' 'is regarded as one of the pioneers of the scientific method' karşılığıdır.",
    ],
    [
      "Sarkaçlı saat, zaman ölçümünün doğruluğunu büyük ölçüde artırdı.",
      [
        "The pendulum clock made timekeeping far more accurate.",
        "The pendulum clock made timekeeping less accurate.",
        "The pendulum clock was used only on ships.",
        "Clocks became less popular after the pendulum.",
        "The pendulum clock had no effect on accuracy.",
      ],
      "'zaman ölçümünün doğruluğunu büyük ölçüde artırdı' 'greatly increased the accuracy of timekeeping' karşılığıdır.",
    ],
    [
      "Güneş saatleri geceleri ve bulutlu günlerde işe yaramıyordu.",
      [
        "Sundials did not work at night or under cloud.",
        "Sundials worked best at night.",
        "Sundials did not need the sun.",
        "Sundials were used only in winter.",
        "Cloudy days made sundials more accurate.",
      ],
      "'geceleri ve bulutlu günlerde işe yaramıyordu' 'were useless at night and on cloudy days' karşılığıdır.",
    ],
    [
      "Metrik sistem, ölçü birimlerini tüm ülkeler için tek tip hâle getirmeyi amaçlıyordu.",
      [
        "The metric system aimed at uniform units for all nations.",
        "The metric system was designed only for France.",
        "The metric system increased the number of different units.",
        "No country has adopted the metric system.",
        "The metric system was based on the king's foot.",
      ],
      "'ölçü birimlerini tüm ülkeler için tek tip hâle getirmeyi amaçlıyordu' 'aimed to make units of measurement uniform for all countries' karşılığıdır.",
    ],
    [
      "Fizeau, ışık hızını yeryüzünde ölçen ilk kişiydi.",
      [
        "Fizeau was the first to measure light's speed on Earth.",
        "Fizeau studied sound waves instead of light.",
        "Fizeau believed that light had no speed.",
        "The speed of light was measured on Earth before Fizeau.",
        "Fizeau measured the speed of light using the stars.",
      ],
      "'ışık hızını yeryüzünde ölçen ilk kişiydi' 'was the first to measure light's speed on Earth' karşılığıdır.",
    ],
    [
      "İlk fotoğraflarda insanların uzun süre kıpırdamadan oturması gerekiyordu.",
      [
        "In the first photographs, people had to sit still for a long time.",
        "People could move freely while early photographs were taken.",
        "The first photographs were taken in a fraction of a second.",
        "People were not allowed in the first photographs.",
        "Early photographs showed only moving objects.",
      ],
      "'uzun süre kıpırdamadan oturması gerekiyordu' 'had to sit still for a long time' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Abu Ali al-Hasan ibn al-Haytham, known in Europe as Alhazen, was born in Basra, in what is now Iraq, in about 965, and spent much of his life in Cairo. According to one story, he offered to build a dam to control the flooding of the Nile, but when he realised that the project was impossible, he pretended to be mad to escape the anger of the caliph, and was confined to his house for about ten years. During this time, he is believed to have written much of his greatest work, the Book of Optics. At the time, many scholars followed the ancient Greek idea that vision was produced by rays sent out from the eyes. Ibn al-Haytham argued instead that light travels in straight lines from objects into the eye, and he supported his claims with carefully designed experiments, for example using a darkened room with a small hole in one wall, a device later known as the camera obscura, to show how an image is formed. He insisted that scientists should not simply accept the opinions of earlier authorities but should test them by observation and experiment, and admit their own possible errors. The Book of Optics was translated into Latin around 1200 and had a strong influence on European scholars, including Roger Bacon and Johannes Kepler.",
      questions: [
        [
          "According to the passage, Ibn al-Haytham disagreed with the Greek view that ----.",
          [
            "the eyes send out rays in order to see",
            "light travels in straight lines",
            "experiments are important",
            "images can be formed in dark rooms",
            "the Nile floods every year",
          ],
          "Metne göre pek çok bilgin görmenin gözden çıkan ışınlarla gerçekleştiği Yunan görüşünü izliyordu; İbnü'l-Heysem buna karşı çıktı.",
        ],
        [
          "The writer mentions the darkened room with a small hole in order to show ----.",
          [
            "one of the experiments behind his ideas",
            "where he was kept prisoner",
            "how the dam was designed",
            "how Kepler built a telescope",
            "why he pretended to be mad",
          ],
          "Küçük delikli karanlık oda, fikirlerini desteklemek için kullandığı deneylerden birini gösterir.",
        ],
        [
          "It can be inferred from the passage that Ibn al-Haytham believed ----.",
          [
            "scientific claims should be checked rather than accepted on authority",
            "earlier scholars were always right",
            "experiments were unnecessary",
            "scientists never make mistakes",
            "vision has nothing to do with light",
          ],
          "Önceki otoritelerin görüşlerini kabul etmek yerine gözlem ve deneyle sınamak gerektiğinde ısrar etmesi, iddiaların sınanması gerektiğine inandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "Until the 1790s, French towns measured length and weight in hundreds of local ways, which varied from town to town and made trade and taxation confusing. In 1791, the revolutionary government decided to create a new unit of length, the metre, based on nature rather than on the bodies of kings: it would be one ten-millionth of the distance from the North Pole to the equator, measured along the line of longitude passing through Paris. Since that distance could not be measured directly, two astronomers, Jean-Baptiste Delambre and Pierre Méchain, were sent to survey part of it, the section between Dunkirk on the northern coast of France and Barcelona in Spain. Using precise instruments and a method based on triangles, they worked their way across the country, climbing towers and hills. The task, expected to take a year, took seven, partly because of the political turmoil and war of the time; the astronomers were sometimes arrested as suspected spies. Méchain discovered a small inconsistency in his own measurements in Barcelona, which he kept secret and which tormented him for the rest of his life. The final value of the metre, fixed in 1799, turned out to be slightly too short, about a fifth of a millimetre, partly because the Earth is not a perfect sphere. Today the metre is defined in terms of the speed of light.",
      questions: [
        [
          "According to the passage, the metre was designed to be based on ----.",
          [
            "the size of the Earth",
            "the length of the king's foot",
            "the distance between Paris and London",
            "the height of the tallest tower in France",
            "the speed of light",
          ],
          "Metne göre metre, Kuzey Kutbu ile ekvator arasındaki uzaklığın on milyonda biri olacaktı, yani Dünya'nın büyüklüğüne dayanıyordu.",
        ],
        [
          "The writer mentions that the astronomers were arrested as suspected spies in order to explain ----.",
          [
            "why the survey took so long",
            "why Méchain kept his error secret",
            "how triangles were used in surveying",
            "why the metre was too short",
            "how the Revolution began",
          ],
          "Gökbilimcilerin casus şüphesiyle tutuklanması, siyasi kargaşa ve savaşın işi neden çok daha uzun sürdürdüğünü açıklar.",
        ],
        [
          "It can be understood from the passage that the original metre ----.",
          [
            "differed very slightly from the intended length",
            "was exactly one ten-millionth of the distance",
            "was based on the speed of light",
            "was measured in Spain only",
            "was rejected by the government",
          ],
          "Metne göre metrenin son değeri milimetrenin beşte biri kadar kısa çıktı.",
        ],
      ],
    },
    {
      text:
        "Early thermometers had no agreed scales, so readings taken with different instruments could not be compared. Daniel Gabriel Fahrenheit, a German-born maker of scientific instruments working in Amsterdam, was the first to produce thermometers that consistently gave the same readings. In 1714, he began using mercury instead of alcohol, because it expands more evenly as it is heated, stays liquid over a wide range of temperatures and does not stick to the glass. To calibrate his thermometers, he chose fixed points that could be reproduced: he set zero at the temperature of a mixture of ice, water and a type of salt, which was the coldest temperature he could reliably produce, and used the temperature of the human body as another reference point. On his scale, water froze at thirty-two degrees and boiled at two hundred and twelve. A few decades later, the Swedish astronomer Anders Celsius proposed a scale based on the freezing and boiling points of water, divided into a hundred degrees; curiously, he originally set boiling at zero and freezing at one hundred, and the scale was reversed after his death. The Celsius scale became the standard in science and in most countries, but the Fahrenheit scale is still widely used in the United States.",
      questions: [
        [
          "According to the passage, Fahrenheit preferred mercury to alcohol because ----.",
          [
            "it expands evenly and stays liquid longer",
            "it was cheaper and easier to find",
            "it changed colour when heated",
            "it could be drunk safely",
            "Celsius had recommended it",
          ],
          "Metne göre cıva ısıtıldıkça daha düzenli genleşir, geniş bir sıcaklık aralığında sıvı kalır ve cama yapışmaz.",
        ],
        [
          "The writer mentions that Celsius set boiling at zero in order to show ----.",
          [
            "that his scale was originally reversed",
            "that water boils at zero degrees",
            "why the Fahrenheit scale is used in America",
            "how mercury was chosen",
            "that Celsius made many mistakes",
          ],
          "Celsius'un başta kaynamayı sıfıra, donmayı yüze koyması, özgün ölçeğinin bugünkünün tersi olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that before Fahrenheit's work ----.",
          [
            "readings from different thermometers could not easily be compared",
            "all thermometers used mercury",
            "temperature could not be measured at all",
            "the Celsius scale was already in use",
            "thermometers were used only in America",
          ],
          "Metne göre ilk termometrelerin ortak ölçekleri yoktu ve farklı aletlerle alınan değerler karşılaştırılamıyordu.",
        ],
      ],
    },
    {
      text:
        "In January 1839, the French painter and theatre designer Louis Daguerre announced a method of fixing images produced in a camera onto a metal plate. His work built on that of Nicéphore Niépce, who had made the first surviving photograph in the 1820s, an image of buildings outside his window that required an exposure of many hours. After Niépce's death in 1833, Daguerre continued the research and discovered that a silver-coated copper plate made sensitive with iodine could record an image in minutes, which could then be developed with mercury vapour and fixed with salt. The resulting pictures, called daguerreotypes, were astonishingly detailed. The French state paid Daguerre a pension in return for the method and offered it 'free to the world', although Daguerre had already patented it in England. Photographic studios soon opened in cities across Europe and America, and many people had their portraits made for the first time. The process had serious limitations, however. Each daguerreotype was a single, unique image that could not be copied, the mirror-like surface had to be viewed from the right angle, and early exposures were so long that people had to sit perfectly still, often with their heads supported by hidden clamps. Within two decades, it had been replaced by methods that produced negatives from which many prints could be made.",
      questions: [
        [
          "According to the passage, Daguerre's main improvement on Niépce's work was ----.",
          [
            "a much shorter exposure time",
            "the use of paper instead of metal",
            "the invention of colour photography",
            "a camera that needed no light",
            "a way to make many copies",
          ],
          "Metne göre Niépce'nin görüntüsü saatlerce pozlama gerektirirken Daguerre'nin plakası görüntüyü dakikalar içinde kaydedebiliyordu.",
        ],
        [
          "The writer mentions the hidden clamps in order to show ----.",
          [
            "how hard it was to keep sitters still",
            "that portraits were dangerous",
            "how the plates were made",
            "why the government bought the process",
            "that cameras were very heavy",
          ],
          "Gizli kıskaçlar, uzun pozlamalar sırasında oturanları kıpırdamadan tutmanın ne kadar zor olduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that the daguerreotype was eventually replaced because ----.",
          [
            "newer methods allowed many prints to be made from one image",
            "it produced blurred images",
            "it was too cheap",
            "the government banned it",
            "it required no exposure",
          ],
          "Yerini tek bir negatiften çok sayıda baskı yapılabilen yöntemlere bırakması, dagerotipin çoğaltılamamasının değiştirilmesinin nedeni olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "Light is so fast that measuring it seemed hopeless. Seventeenth-century astronomers had produced rough estimates by observing the moons of Jupiter, but nobody had measured it directly on Earth. In 1849, the French physicist Hippolyte Fizeau devised an ingenious experiment. He sent a beam of light through the gaps between the teeth of a rapidly rotating wheel towards a mirror on a hill more than eight kilometres away, near Paris. The mirror reflected the light back along the same path to the wheel. When the wheel turned slowly, the returning light passed through the same gap and could be seen. As the wheel turned faster, however, there came a point at which the light, having taken a tiny fraction of a second to make the journey, arrived back just as a tooth had moved into its path, and it was blocked. By measuring the speed of the wheel at this point and knowing the distance travelled, Fizeau could calculate the speed of light. His result, about three hundred and fifteen thousand kilometres per second, was within about five per cent of the modern value. The following year, Léon Foucault improved the method using a rotating mirror, and later versions of the experiment produced increasingly precise values.",
      questions: [
        [
          "According to the passage, the returning light was blocked when ----.",
          [
            "a tooth had moved into its path",
            "the mirror was turned away",
            "the wheel stopped turning",
            "clouds covered the hill",
            "the light was too bright",
          ],
          "Metne göre çark hızlandığında dönen ışık tam bir diş yoluna girdiği anda geri gelip engelleniyordu.",
        ],
        [
          "The writer mentions the moons of Jupiter in order to show ----.",
          [
            "how light speed was estimated earlier",
            "where Fizeau placed his mirror",
            "why the wheel had teeth",
            "that light travels instantaneously",
            "how Foucault improved the method",
          ],
          "Jüpiter'in uyduları, Fizeau'dan önce ışık hızının nasıl tahmin edildiğini gösterir.",
        ],
        [
          "It can be understood from the passage that Fizeau's result ----.",
          [
            "was fairly close to the modern value",
            "was exactly the same as the modern value",
            "showed that light has no speed",
            "was obtained by observing the stars",
            "was rejected by Foucault",
          ],
          "Metne göre sonuç modern değerin yaklaşık yüzde beşi içindeydi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "A kaleidoscope is a tube containing mirrors and small pieces of coloured glass. ---- As the tube is turned, the pieces move and the pattern changes endlessly.",
      [
        "The mirrors create a symmetrical pattern.",
        "Coloured glass is often used in church windows.",
        "Many children receive toys as presents.",
        "Mirrors were once very expensive.",
        "Tubes can be made of cardboard or metal.",
      ],
      "Boşluktan sonra tüp çevrildikçe desenin değiştiği söylenir; boşluğa aynaların yansıttığı ışığın simetrik bir desen oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In some optical illusions, two lines of exactly the same length appear to be different. ---- Such illusions show that what we see depends on how the brain interprets information.",
      [
        "The shapes at their ends mislead the brain.",
        "Many people wear glasses to read.",
        "Lines can be drawn with a ruler.",
        "Some artists use perspective in their paintings.",
        "The eye contains millions of cells.",
      ],
      "Boşluktan sonra 'Such illusions' ile yanılsamaların beynin yorumuna bağlı olduğu söylenir; boşluğa beynin çizgilerin uçlarındaki şekillerden etkilendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Most modern watches contain a tiny piece of quartz crystal. ---- An electronic circuit counts these vibrations and uses them to keep time.",
      [
        "With electricity, it vibrates at a precise rate.",
        "Watches are often given as gifts.",
        "Quartz is a common mineral in rocks.",
        "Some watches are very expensive.",
        "Many people now use phones to tell the time.",
      ],
      "Boşluktan sonra 'these vibrations' ile titreşimlerin sayıldığı söylenir; boşluğa elektrik uygulandığında kristalin çok kesin bir frekansta titreştiğini söyleyen cümle gelmelidir.",
    ],
    [
      "After the French Revolution, the government also tried to introduce decimal time. ---- The system was unpopular, however, and was abandoned after only a few years.",
      [
        "Each day had ten hours of a hundred minutes.",
        "Paris is the capital of France.",
        "Many clocks were made in Switzerland.",
        "The Revolution began in 1789.",
        "Some people prefer to wake up early.",
      ],
      "Boşluktan sonra 'however' ile sistemin sevilmediği söylenir; boşluğa her günün on saate, her saatin yüz dakikaya bölündüğünü açıklayan cümle gelmelidir.",
    ],
    [
      "Many traditional units of length were based on parts of the human body. ---- Because people's bodies differ, these units varied from place to place.",
      [
        "The foot, for example, was once a real foot.",
        "Many people enjoy walking in the countryside.",
        "Some shoes are made of leather.",
        "Children grow quickly.",
        "Rulers are used in schools.",
      ],
      "Boşluktan sonra insanların vücutları farklı olduğu için birimlerin değiştiği söylenir; boşluğa ayak biriminin başlangıçta bir erkeğin ayak uzunluğu olduğunu söyleyen örnek cümle gelmelidir.",
    ],
    [
      "In the nineteenth century, Lord Kelvin proposed a temperature scale that begins at absolute zero. ---- Scientists use this scale because it avoids negative numbers.",
      [
        "This is the lowest possible temperature.",
        "Kelvin was a professor in Glasgow.",
        "Some places on Earth are very cold.",
        "Thermometers are used in hospitals.",
        "Ice melts at zero degrees Celsius.",
      ],
      "Boşluktan sonra bu ölçeğin negatif sayılardan kaçındığı söylenir; boşluğa mutlak sıfırın parçacıkların en az enerjiye sahip olduğu en düşük sıcaklık olduğunu açıklayan cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "An hourglass measures time by allowing sand to flow from one glass bulb to another.",
        "The amount of sand determines how long it takes.",
        "Many beaches are covered with fine sand.",
        "Hourglasses were used on ships to measure speed.",
        "Sand, unlike water, does not freeze in winter.",
      ],
      odd: 2,
      why: "Parça kum saatini anlatır. Pek çok plajın ince kumla kaplı olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A metronome produces regular ticks to help musicians keep a steady tempo.",
        "Early versions used a swinging pendulum with a sliding weight.",
        "Moving the weight changes the speed of the ticks.",
        "Many concerts take place in the evening.",
        "Today, many musicians use electronic metronomes or apps.",
      ],
      odd: 3,
      why: "Parça metronomu anlatır. Pek çok konserin akşam yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In close races, a photo-finish camera records the exact moment each competitor crosses the line.",
        "It photographs a narrow strip over and over very rapidly.",
        "The image shows time along one side rather than distance.",
        "Many athletes train for years to compete at the Olympics.",
        "Judges can then determine the order of finish to a thousandth of a second.",
      ],
      odd: 3,
      why: "Parça foto finiş kamerasını anlatır. Pek çok sporcunun olimpiyatlarda yarışmak için yıllarca antrenman yaptığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Night-vision devices allow people to see in very low light.",
        "Some amplify the small amount of light that is present.",
        "Others detect the heat given off by objects.",
        "Many animals are active at night.",
        "They are used by soldiers, rescuers and wildlife researchers.",
      ],
      odd: 3,
      why: "Parça gece görüş cihazlarını anlatır. Pek çok hayvanın geceleri etkin olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In photographs taken with a flash, people's eyes sometimes appear bright red.",
        "This happens when light from the flash reflects off the blood-rich back of the eye.",
        "Many people take photographs at parties.",
        "It is more likely in dim light, when the pupils are wide open.",
        "Some cameras reduce the effect by firing a short flash first.",
      ],
      odd: 2,
      why: "Parça fotoğraflarda kırmızı göz etkisini anlatır. Pek çok kişinin partilerde fotoğraf çektiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Before radio, ships in port needed an accurate way to set their clocks before a voyage.",
        "In 1833, a large ball was placed on top of the Royal Observatory at Greenwich.",
        "Every day at exactly one o'clock, the ball dropped down a pole.",
        "Captains in the harbour could check their clocks by watching it fall.",
        "Many tourists visit Greenwich Park in summer.",
      ],
      odd: 4,
      why: "Parça gemilerin saatlerini ayarlamak için kullanılan zaman topunu anlatır. Pek çok turistin yazın Greenwich Parkı'nı ziyaret ettiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
