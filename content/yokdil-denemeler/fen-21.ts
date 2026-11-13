import type { YokdilDeneme } from "./types";

export const FEN_21: YokdilDeneme = {
  no: 21,
  field: "fen",
  vocab: [
    [
      "Cavendish's apparatus was so sensitive that he had to observe it through a telescope to avoid ---- the air around it.",
      ["disturbing", "measuring", "heating", "cleaning", "painting"],
      "Cavendish'in düzeneğinin çevresindeki havayı 'bozmamak' (disturbing) için onu bir teleskopla gözlemlemek zorunda kaldığı anlatılır.",
    ],
    [
      "Eratosthenes was able to ---- the size of the Earth using only shadows, distances and geometry.",
      ["calculate", "change", "conceal", "decorate", "abandon"],
      "Eratosthenes'in yalnızca gölgeler, uzaklıklar ve geometri kullanarak Dünya'nın büyüklüğünü 'hesaplayabildiği' (calculate) anlatılır.",
    ],
    [
      "The experiment was designed to detect a tiny difference in the speed of light, but the result was ----.",
      ["negative", "enormous", "obvious", "expensive", "dangerous"],
      "Deneyin ışık hızındaki küçük bir farkı saptamak için tasarlandığı ama sonucun 'olumsuz' (negative) çıktığı anlatılır.",
    ],
    [
      "Joule showed that mechanical work could be ---- into a definite amount of heat.",
      ["converted", "divided", "hidden", "returned", "attached"],
      "Joule'ün mekanik işin belirli miktarda ısıya 'dönüştürülebileceğini' (converted) gösterdiği anlatılır.",
    ],
    [
      "Meitner and Frisch realised that the uranium nucleus had ---- into two smaller pieces.",
      ["split", "grown", "melted", "frozen", "vanished"],
      "Meitner ve Frisch'in uranyum çekirdeğinin daha küçük iki parçaya 'bölündüğünü' (split) fark ettiği anlatılır.",
    ],
    [
      "Many experts believed that radio waves could not ---- the curvature of the Earth, but Marconi proved them wrong.",
      ["get around", "put off", "turn down", "look after", "give up"],
      "Pek çok uzmanın radyo dalgalarının Dünya'nın eğriliğini 'aşamayacağına' (get around) inandığı ama Marconi'nin onları yanılttığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The results of Cavendish's experiment ---- in 1798 in a paper of more than fifty pages.",
      ["were published", "published", "have published", "were publishing", "had published"],
      "Sonuçlar yayımlanan şeylerdir ve olay geçmiştedir: edilgen geçmiş zaman 'were published'.",
    ],
    [
      "If the light had travelled at different speeds in different directions, Michelson and Morley ---- a shift in the pattern.",
      ["would have observed", "would observe", "will observe", "observed", "had observed"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have + V3' ister.",
    ],
    [
      "By the time Faraday gave his first Christmas lecture, he ---- some of the most important discoveries in electricity.",
      ["had already made", "has already made", "already makes", "will already make", "is already making"],
      "Geçmişteki bir olaydan önce tamamlanmış eylem: Past Perfect 'had already made'.",
    ],
    [
      "Meitner, ---- contribution to the discovery of fission was long overlooked, refused to work on the atomic bomb.",
      ["whose", "who", "which", "whom", "where"],
      "Katkı Meitner'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until 1901 ---- a radio signal sent across the Atlantic Ocean.",
      ["was", "did", "had", "has", "it was"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur; edilgen yapıda 'was a radio signal sent' gerekir.",
    ],
    [
      "The force between the lead balls was ---- weak that the slightest draught could spoil the measurement.",
      ["so", "such", "too", "very", "as"],
      "Sıfattan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- Faraday had little formal education, he became one of the greatest experimental scientists in history.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Az örgün eğitim alması ile tarihin en büyük deneysel bilim insanlarından biri olması zıttır: 'Although'.",
    ],
    [
      "Joule spent years ---- the temperature of water stirred by falling weights.",
      ["measuring", "to measure", "measure", "measured", "to have measured"],
      "'spend + zaman' kalıbından sonra fiil '-ing' alır: 'measuring'.",
    ],
    [
      "Eratosthenes is said ---- that the sun shone directly down a well at Syene at midday on the longest day.",
      ["to have heard", "to hear", "hearing", "to be heard", "to have been heard"],
      "Geçmişte duyduğu söylenir: 'be said to have + V3' yapısı 'to have heard'.",
    ],
    [
      "The paddles ---- by the falling weights churned the water inside an insulated container.",
      ["turned", "turning them", "which turned", "to turn", "have turned"],
      "Kanatlar ağırlıklar tarafından döndürülür; edilgen anlamlı geçmiş ortaç 'turned' gerekir.",
    ],
    [
      "Neither Michelson ---- Morley could explain why the expected effect did not appear.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "The apparatus was mounted on a stone slab floating in mercury ---- it could be rotated smoothly.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some newspapers reported Marconi's achievement as if it ---- a kind of magic.",
      ["were", "is", "will be", "has been", "being"],
      "'as if' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The further apart two masses are, ---- the gravitational force between them becomes.",
      ["the weaker", "weaker", "the weakest", "more weak", "the more weak"],
      "'The further …, the weaker …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the third century BC, Eratosthenes, the head of the great library at Alexandria in Egypt, worked out how big the Earth is with surprising accuracy. He had learned that at midday on the summer solstice, the sun shone straight down a deep well in the town of Syene, far to the south, {1} objects there cast no shadow. At the same time in Alexandria, however, a vertical stick did cast a short shadow, {2} showed that the sun's rays were arriving at a slight angle. Eratosthenes measured this angle and found that it was about one fiftieth of a full circle. Assuming that the sun was so far away that its rays were effectively parallel, {3} that Syene lay directly south of Alexandria, he concluded that the distance between the two towns must be one fiftieth of the Earth's circumference. The distance was known to be about five thousand stadia, {4} he calculated a circumference of around two hundred and fifty thousand stadia. Historians are not certain exactly how long a stadion was, {5} most estimates suggest that his result was within about fifteen per cent of the true figure, an impressive achievement for a measurement made with sticks and shadows.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "unless", "although", "or"],
          "Güneşin kuyuya dik inmesi ve oradaki nesnelerin gölge yapmaması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki gözlemin tamamını niteleyen ilgi zamiridir: 'which'.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "although", "or"],
          "Güneş ışınlarının paralel olması ve Syene'nin tam güneyde olması varsayımları birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["so", "although", "unless", "because", "whereas"],
          "Mesafenin bilinmesinin sonucu çevrenin hesaplanmasıdır: 'so'.",
        ],
        [
          "(25) ----",
          ["but", "because", "so that", "unless", "since"],
          "Stadionun uzunluğunun kesin bilinmemesi ile tahminlerin sonucun gerçeğe yakın olduğunu göstermesi zıttır: 'but'.",
        ],
      ],
    },
    {
      text:
        "In the 1840s, many scientists still believed that heat was an invisible fluid, called 'caloric', that flowed from hot objects to cold ones. The English brewer and amateur scientist James Prescott Joule set out to test a different idea: that heat was a form of energy {1} could be produced by mechanical work. In his most famous experiment, he attached falling weights to a set of paddles inside a container of water, {2} as the weights descended, the paddles turned and stirred the water. Joule measured the tiny rise in the water's temperature with extremely sensitive thermometers, {3} he compared it with the amount of work done by the falling weights. He found that a definite amount of work always produced the same amount of heat, {4} supported the view that heat and work are two forms of the same thing. At first, his results were received with scepticism, partly because he was not a professional scientist. {5}, after the young physicist William Thomson, later Lord Kelvin, became interested in his work, it gained wider acceptance and helped to establish the principle of the conservation of energy. The modern unit of energy, the joule, is named after him.",
      blanks: [
        [
          "(26) ----",
          ["that", "who", "where", "whose", "what"],
          "Boşluk 'a form of energy' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Ağırlıkların kanatlara bağlanması ve ağırlıklar inerken kanatların suyu karıştırması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "unless", "although", "or"],
          "Sıcaklık artışını ölçmesi ve bunu yapılan işle karşılaştırması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki bulgunun tamamını niteleyen ilgi zamiridir: 'which'.",
        ],
        [
          "(30) ----",
          ["However", "Therefore", "For example", "Similarly", "In other words"],
          "Sonuçların kuşkuyla karşılanması ile daha sonra kabul görmesi karşıtlıktır: 'However'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Michelson and Morley expected to detect the motion of the Earth through the ether, ----.",
      [
        "their extremely careful measurements showed no such effect",
        "they used a large stone slab floating in a bath of mercury",
        "light was thought to need a medium in order to travel",
        "they carried out the experiment in a basement in Ohio",
        "the instrument could detect very small changes in light",
      ],
      "'Although' zıtlık ister: Dünya'nın esir içindeki hareketini saptamayı bekleseler de son derece dikkatli ölçümleri böyle bir etki göstermedi.",
    ],
    [
      "If Faraday had not been hired as an assistant at the Royal Institution, ----.",
      [
        "he might never have become a scientist at all",
        "the Royal Institution is located in central London",
        "most children will attend science lectures every year",
        "he was the son of a blacksmith from the north of England",
        "electricity had been studied by many scientists before him",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Cavendish placed his apparatus in a closed room and observed it from outside ----.",
      [
        "so that air currents and heat would not disturb it",
        "although he was not interested in the results at all",
        "unless his assistants were able to watch it for him",
        "because he wanted to keep the experiment secret from rivals",
        "even if the lead balls moved too quickly to be seen",
      ],
      "Düzeneği kapalı bir odaya koyup dışarıdan gözlemlemesinin amacı hava akımlarının ve ısının onu bozmamasıdır: 'so that'.",
    ],
    [
      "Since Meitner and Frisch explained nuclear fission in 1939, ----.",
      [
        "the process has been used to generate electricity around the world",
        "Meitner had worked with Otto Hahn in Berlin for many years",
        "most physicists would have refused to believe the explanation",
        "the element meitnerium will be named in her honour",
        "Hahn was awarded the Nobel Prize for chemistry alone",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has been used'.",
    ],
    [
      "Unless the thermometers used by Joule were extremely sensitive, ----.",
      [
        "the tiny rise in temperature could not have been detected",
        "the weights would have fallen much more slowly than expected",
        "most brewers had used thermometers to make their beer",
        "the water will boil after a few minutes of stirring",
        "the paddles were made of brass and turned very fast",
      ],
      "'Unless' koşul bildirir: termometreler son derece hassas olmasaydı küçük sıcaklık artışı saptanamazdı.",
    ],
    [
      "Faraday's lectures for young people were so popular ----.",
      [
        "that the tradition has continued to the present day",
        "because he explained science using simple demonstrations",
        "although they took place during the Christmas holidays",
        "while other scientists preferred to lecture to adults",
        "unless the hall was too small for the audience",
      ],
      "'so popular that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Scientists have found that when the distance between two objects is doubled, ----.",
      [
        "the gravitational force between them falls to a quarter",
        "they would have attracted each other much more strongly",
        "most of them had been made of lead or another heavy metal",
        "the force will become twice as strong as before",
        "the objects were placed in a closed and dark room",
      ],
      "'when' ile genel bir bulgu anlatılır: iki cisim arasındaki uzaklık iki katına çıktığında çekim kuvveti dörtte birine düşer.",
    ],
    [
      "So unexpected was the result of the experiment ----.",
      [
        "that Michelson regarded it as a failure for many years",
        "because the ether was supposed to fill all of space",
        "although the instrument had been built very carefully",
        "while other scientists were studying electricity",
        "unless the measurements were repeated at night",
      ],
      "Devrik 'So unexpected was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While Hahn and Strassmann had detected barium in their samples, ----.",
      [
        "it was Meitner and Frisch who explained what this meant",
        "barium is a soft metal that reacts with water",
        "uranium is found in rocks in many countries",
        "the laboratory in Berlin was very well equipped",
        "physics and chemistry are closely related sciences",
      ],
      "'While' zıtlık bildirir: Hahn ve Strassmann örneklerinde baryum saptamış olsa da bunun ne anlama geldiğini açıklayan Meitner ve Frisch oldu.",
    ],
    [
      "Once Marconi had shown that signals could cross the ocean, ----.",
      [
        "ships began to be equipped with radio for communication",
        "the signal will be sent again from a different station",
        "the experts would have changed their minds immediately",
        "radio waves travel at the same speed as light",
        "most scientists had studied radio waves in laboratories",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: gemiler iletişim için telsizle donatılmaya başlandı.",
    ],
    [
      "No sooner had Joule presented his results ----.",
      [
        "than several well-known scientists dismissed them",
        "when the paddles had been placed in the water",
        "that heat will be measured in new units",
        "before he had worked in his father's brewery",
        "so he gave up his scientific research",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Eratosthenes assumed that the sun's rays reached the Earth as parallel lines.",
      [
        "Eratosthenes, güneş ışınlarının Dünya'ya paralel çizgiler hâlinde ulaştığını varsaydı.",
        "Eratosthenes, güneş ışınlarının Dünya'ya farklı açılardan ulaştığını kanıtladı.",
        "Eratosthenes, güneşin Dünya'ya çok yakın olduğunu düşünüyordu.",
        "Eratosthenes, güneş ışınlarının yalnızca öğle vakti Dünya'ya ulaştığını savundu.",
        "Eratosthenes, Dünya'nın düz olduğunu varsayarak hesaplama yaptı.",
      ],
      "'assumed that the sun's rays reached the Earth' 'güneş ışınlarının Dünya'ya ulaştığını varsaydı', 'as parallel lines' 'paralel çizgiler hâlinde' demektir.",
    ],
    [
      "The tiny attraction between the lead balls caused the rod to twist very slightly.",
      [
        "Kurşun toplar arasındaki çok küçük çekim, çubuğun çok hafifçe burulmasına neden oldu.",
        "Kurşun toplar arasındaki güçlü itme kuvveti, ince tahta çubuğun ortasından kırılmasına yol açtı.",
        "Çubuğun hafifçe burulması, büyük kurşun topların birbirinden uzaklaşmasına neden oldu.",
        "Ağır kurşun toplar, ince çubuğun herhangi bir yönde hareket etmesini tamamen engelledi.",
        "Çubuk, büyük kurşun toplar yanına konmadan da kendiliğinden hızla döndü.",
      ],
      "'The tiny attraction between the lead balls' 'kurşun toplar arasındaki çok küçük çekim', 'caused the rod to twist very slightly' 'çubuğun çok hafifçe burulmasına neden oldu' demektir.",
    ],
    [
      "The speed of light turned out to be the same in every direction, whatever the motion of the Earth.",
      [
        "Işık hızının, Dünya'nın hareketi ne olursa olsun her yönde aynı olduğu anlaşıldı.",
        "Işık hızının, Dünya'nın hareketine bağlı olarak her yönde farklı olduğu anlaşıldı.",
        "Dünya'nın hareketi, ışığın yalnızca bir yönde ilerlemesine neden oldu.",
        "Işık hızı, Dünya durduğunda iki katına çıktı.",
        "Işığın hızının ölçülmesinin imkânsız olduğu ortaya çıktı.",
      ],
      "'turned out to be the same in every direction' 'her yönde aynı olduğu anlaşıldı', 'whatever the motion of the Earth' 'Dünya'nın hareketi ne olursa olsun' demektir.",
    ],
    [
      "Faraday found that moving a magnet near a coil of wire produced an electric current.",
      [
        "Faraday, bir mıknatısı tel bobinin yakınında hareket ettirmenin elektrik akımı ürettiğini buldu.",
        "Faraday, güçlü bir elektrik akımının yakındaki mıknatısları tamamen etkisiz hâle getirdiğini buldu.",
        "Faraday, tel bobinlerinin yakınlarındaki mıknatısları güçlü biçimde kendine çektiğini kanıtladı.",
        "Faraday, durağan bir mıknatısın her zaman güçlü bir akım ürettiğini gösterdi.",
        "Faraday, mıknatıslar ile elektrik akımı arasında hiçbir ilişki bulunmadığını uzun süre savundu.",
      ],
      "'moving a magnet near a coil of wire' 'bir mıknatısı tel bobinin yakınında hareket ettirmek', 'produced an electric current' 'elektrik akımı üretti' demektir.",
    ],
    [
      "The two fragments flew apart with an enormous amount of energy.",
      [
        "İki parça, muazzam miktarda enerjiyle birbirinden uzaklaştı.",
        "İki parça, hiç enerji açığa çıkarmadan birleşti.",
        "Muazzam miktarda enerji, iki parçayı birbirine yapıştırdı.",
        "Parçalar, enerji kaybettikleri için hareket etmeyi bıraktı.",
        "İki parça, çok az enerjiyle yavaşça ayrıldı.",
      ],
      "'The two fragments flew apart' 'iki parça birbirinden uzaklaştı', 'with an enormous amount of energy' 'muazzam miktarda enerjiyle' demektir.",
    ],
    [
      "Signals sent from Cornwall were received by an aerial held up by a kite in Newfoundland.",
      [
        "Cornwall'dan gönderilen sinyaller, Newfoundland'de bir uçurtmayla havada tutulan bir anten tarafından alındı.",
        "Newfoundland'den gönderilen sinyaller, Cornwall'da bir uçurtmaya bağlanan küçük bir alıcı tarafından alındı.",
        "Cornwall'daki dev anten, okyanusu aşarak uçurtmalarla Newfoundland'e taşındı.",
        "Newfoundland'de uçurulan uçurtma, sinyallerin Cornwall'a ulaşmasını engelledi.",
        "Sinyaller, fırtına nedeniyle uçurtma kullanılamadığı için hiçbir zaman alınamadı.",
      ],
      "'Signals sent from Cornwall' 'Cornwall'dan gönderilen sinyaller', 'were received by an aerial held up by a kite in Newfoundland' 'Newfoundland'de bir uçurtmayla havada tutulan bir anten tarafından alındı' demektir.",
    ],
  ],
  trEn: [
    [
      "Cavendish'in deneyi, Dünya'nın yoğunluğunu hesaplamayı mümkün kıldı.",
      [
        "Cavendish's experiment made it possible to calculate the density of the Earth.",
        "Cavendish's experiment showed that the Earth has almost no measurable density.",
        "The great density of the Earth made Cavendish's experiment impossible to complete.",
        "Cavendish calculated the density of the moon rather than that of the Earth.",
        "Cavendish's experiment was designed to measure the speed of light.",
      ],
      "'Dünya'nın yoğunluğunu hesaplamayı mümkün kıldı' 'made it possible to calculate the density of the Earth' karşılığıdır.",
    ],
    [
      "Joule, belirli bir miktar işin her zaman aynı miktarda ısı ürettiğini gösterdi.",
      [
        "Joule showed that a definite amount of work always produces the same amount of heat.",
        "Joule showed that mechanical work and heat have nothing at all to do with each other.",
        "Joule proved that heat always disappears completely whenever any work is done.",
        "Joule found that the amount of heat produced by the same work was never the same.",
        "Joule showed that heat is a fluid that flows from cold objects to hot ones.",
      ],
      "'belirli bir miktar işin her zaman aynı miktarda ısı ürettiğini gösterdi' 'showed that a definite amount of work always produces the same amount of heat' karşılığıdır.",
    ],
    [
      "Faraday, çocuklar için verdiği konferanslarla bilimi herkes için ilgi çekici kıldı.",
      [
        "Through his lectures for children, Faraday made science interesting for everyone.",
        "Faraday always refused to give any lectures to children or young people.",
        "Faraday's lectures were so difficult that only other scientists understood them.",
        "Children at the Royal Institution gave lectures to Faraday about science.",
        "Faraday believed that science was far too difficult for most children to understand.",
      ],
      "'çocuklar için verdiği konferanslarla' 'through his lectures for children', 'bilimi herkes için ilgi çekici kıldı' 'made science interesting for everyone' karşılığıdır.",
    ],
    [
      "Meitner'in katkısı, uzun yıllar boyunca göz ardı edildi.",
      [
        "Meitner's contribution was overlooked for many years.",
        "Meitner's contribution was praised immediately by everyone.",
        "Meitner overlooked the contributions of her colleagues.",
        "Meitner made no contribution to the discovery.",
        "Meitner's contribution was recognised before the discovery was made.",
      ],
      "'uzun yıllar boyunca göz ardı edildi' 'was overlooked for many years' karşılığıdır.",
    ],
    [
      "Deney, ışığın yayılması için bir ortama gerek olmadığını düşündürdü.",
      [
        "The experiment suggested that light does not need a medium in order to travel.",
        "The experiment proved that light can travel only through water and glass.",
        "The experiment showed that light cannot travel through the empty space between stars.",
        "The experiment suggested that light needs air or another gas in order to travel.",
        "The experiment had nothing to do with the way that light travels through space.",
      ],
      "'ışığın yayılması için bir ortama gerek olmadığını düşündürdü' 'suggested that light does not need a medium in order to travel' karşılığıdır.",
    ],
    [
      "Marconi'nin başarısı, uzun mesafeli kablosuz iletişimin başlangıcı oldu.",
      [
        "Marconi's success marked the beginning of long-distance wireless communication.",
        "Marconi's success put an end to all forms of wireless communication.",
        "Wireless communication over long distances was already common before Marconi.",
        "Marconi failed to send any signals over distances longer than a few metres.",
        "Marconi's work was concerned only with laying telephone cables under the sea.",
      ],
      "'uzun mesafeli kablosuz iletişimin başlangıcı oldu' 'marked the beginning of long-distance wireless communication' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1797 and 1798, the reclusive English scientist Henry Cavendish carried out an experiment to measure the density of the Earth, and in doing so made the first laboratory measurement of the gravitational attraction between ordinary objects. His apparatus, based on a design by the geologist John Michell, consisted of a wooden rod about two metres long with a small lead ball at each end, hanging from a thin wire. Two much larger lead balls, each weighing about one hundred and sixty kilograms, were placed close to the small ones. The tiny gravitational pull of the large balls caused the rod to twist slightly, and by measuring how far it turned and how quickly it swung back and forth, Cavendish could calculate the strength of the force. Because the force was so small, the slightest draught or difference in temperature could ruin the measurement, so Cavendish placed the apparatus in a sealed room and observed it from outside using telescopes. He concluded that the Earth was about five and a half times as dense as water, a figure within one per cent of the modern value. Although Cavendish himself did not express it in this way, his results also allowed later scientists to calculate the gravitational constant, one of the fundamental numbers of physics. The experiment is often described as 'weighing the Earth'.",
      questions: [
        [
          "According to the passage, Cavendish observed the apparatus from outside the room because ----.",
          [
            "even small air movements or temperature changes could affect it",
            "the large lead balls were too dangerous for anyone to approach",
            "the room was too dark for anyone to observe the rod directly",
            "he did not want anyone else to know about his results",
            "the apparatus was so large that it could be seen only from a distance",
          ],
          "Metne göre kuvvet çok küçük olduğundan en hafif hava akımı ya da sıcaklık farkı ölçümü bozabilirdi.",
        ],
        [
          "The writer mentions that Cavendish's result was within one per cent of the modern value in order to show ----.",
          [
            "how accurate his measurement was",
            "that his result was completely wrong",
            "how the apparatus was designed",
            "that the Earth has become denser",
            "why the experiment took two years",
          ],
          "Sonucun modern değerin yüzde biri içinde olması, ölçümünün ne kadar doğru olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that the gravitational constant ----.",
          [
            "was calculated by later scientists using Cavendish's results",
            "was named after Cavendish",
            "was measured directly by Michell",
            "has never been measured",
            "was the main aim of Cavendish's experiment",
          ],
          "Metne göre Cavendish bunu bu şekilde ifade etmese de sonuçları sonraki bilim insanlarının çekim sabitini hesaplamasına olanak verdi.",
        ],
      ],
    },
    {
      text:
        "In the nineteenth century, most physicists believed that light, like sound, must travel through a medium. Since light could cross the empty space between the stars and the Earth, they proposed that all of space was filled with an invisible substance called the 'luminiferous ether'. If this were true, the Earth's movement through the ether as it orbited the sun should create a kind of 'wind', and light travelling with or against this wind should move at slightly different speeds. In 1887, the American physicists Albert Michelson and Edward Morley set out to detect this effect using an extremely sensitive instrument called an interferometer. It split a beam of light into two parts, sent them along paths at right angles to each other, and then recombined them. Any difference in the time taken by the two beams would shift the pattern of light and dark bands produced when they met. To reduce vibrations, the instrument was mounted on a large stone slab floating in a bath of mercury, so that it could be rotated smoothly. To the scientists' surprise, they found no significant shift in any direction. The result was difficult to explain, and it puzzled physicists for years. It was eventually understood as strong evidence against the existence of the ether, and it became one of the foundations of Einstein's theory of special relativity.",
      questions: [
        [
          "According to the passage, the ether was proposed because ----.",
          [
            "scientists thought light needed something to travel through",
            "it had already been observed in several laboratories",
            "sound was known to travel easily through empty space",
            "Einstein had predicted it in one of his early papers",
            "most scientists believed the Earth did not move around the sun",
          ],
          "Metne göre fizikçiler ışığın da ses gibi bir ortamda yayılması gerektiğine inanıyordu.",
        ],
        [
          "The writer mentions the stone slab floating in mercury in order to show ----.",
          [
            "how the scientists tried to make their measurements precise",
            "that mercury has a strong effect on the speed of light",
            "why the experiment failed to work at the first attempt",
            "that the instrument was very cheap and simple to build",
            "how the ether was finally detected by the two scientists",
          ],
          "Titreşimleri azaltmak ve düzgün döndürmek için taşın cıva üzerinde yüzdürülmesi, bilim insanlarının ölçümlerini hassas kılmaya nasıl çalıştığını gösterir.",
        ],
        [
          "It can be inferred from the passage that the experiment's importance ----.",
          [
            "came from the absence of the effect it was designed to find",
            "lay in proving the existence of the ether",
            "was recognised immediately by all physicists",
            "had nothing to do with relativity",
            "was limited to the study of sound",
          ],
          "Beklenen etkinin bulunamamasının esire karşı güçlü kanıt sayılması ve göreliliğin temellerinden biri olması, önemin bu yokluktan kaynaklandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "Michael Faraday was born in 1791 into a poor family in London and left school at the age of thirteen to work for a bookbinder. While binding books, he read many of them, and he became fascinated by science, particularly by an article on electricity in an encyclopaedia. In 1812, he attended a series of lectures given by the famous chemist Humphry Davy at the Royal Institution, took detailed notes and sent them, bound into a book, to Davy, asking for a job. A few months later, Davy hired him as a laboratory assistant. Faraday went on to make a series of major discoveries. In 1831, he found that moving a magnet near a coil of wire produced an electric current, a process known as electromagnetic induction, which is the basis of the electric generators and transformers that supply power today. Because he had little training in mathematics, Faraday described his ideas in words and pictures, imagining invisible 'lines of force' around magnets and electric charges. These ideas were later expressed mathematically by James Clerk Maxwell. Faraday was also a gifted communicator. In 1825, he began a series of lectures on science for young people at the Royal Institution during the Christmas holidays, a tradition that continues today and is now broadcast on television.",
      questions: [
        [
          "According to the passage, Faraday obtained his first job at the Royal Institution by ----.",
          [
            "sending Davy a bound copy of his notes on Davy's lectures",
            "winning a national science competition for young people",
            "studying chemistry at a famous university in London",
            "writing an article on electricity for an encyclopaedia",
            "inventing an electric generator in the bookbinder's shop",
          ],
          "Metne göre Davy'nin konferanslarında aldığı ayrıntılı notları bir kitap hâlinde ciltleyip ona göndererek iş istedi.",
        ],
        [
          "The writer mentions Faraday's limited mathematical training in order to explain ----.",
          [
            "why he expressed his ideas in words and images",
            "why he had to leave school at the age of thirteen",
            "how he discovered electromagnetic induction in 1831",
            "why he decided to give lectures to children at Christmas",
            "why Davy decided to hire him as an assistant",
          ],
          "Matematikte az eğitim alması, fikirlerini sözcükler ve resimlerle ifade etmesinin nedenini açıklar.",
        ],
        [
          "It can be understood from the passage that electromagnetic induction ----.",
          [
            "remains essential to the way electricity is supplied today",
            "was discovered by Maxwell",
            "has no practical applications",
            "was described first in an encyclopaedia",
            "is used only in laboratories",
          ],
          "Metne göre bu süreç bugün elektrik sağlayan jeneratör ve transformatörlerin temelidir.",
        ],
      ],
    },
    {
      text:
        "In December 1938, the German chemists Otto Hahn and Fritz Strassmann, working in Berlin, bombarded uranium with neutrons and found, to their astonishment, that the products included barium, an element roughly half the mass of uranium. They could not explain how this was possible. Hahn wrote to his long-time colleague Lise Meitner, an Austrian physicist of Jewish origin who had been forced to flee Nazi Germany a few months earlier and was living in Sweden. Over the Christmas holidays, Meitner discussed the results with her nephew, the physicist Otto Frisch, during a walk in the snow. They realised that the uranium nucleus must have split into two smaller nuclei, and, using Einstein's equation relating mass and energy, Meitner calculated that the process would release an enormous amount of energy. Borrowing a word from biology, where cells divide, Frisch called the process 'fission'. Their explanation was published in early 1939, and physicists quickly realised that fission could be used both to generate power and to build weapons of enormous destructive force. Meitner refused an invitation to work on the atomic bomb. In 1945, the chemistry Nobel for fission went to Hahn alone, and Meitner's role was overlooked by the committee, a decision that is now widely regarded as an injustice. The element meitnerium was later named in her honour.",
      questions: [
        [
          "According to the passage, Hahn wrote to Meitner because ----.",
          [
            "he could not understand his own experimental results",
            "he wanted her to return to Germany to continue her work",
            "she had asked him for a job in his laboratory in Berlin",
            "she had already discovered barium in her own experiments",
            "he wanted to invite her to spend Christmas with his family",
          ],
          "Metne göre Hahn ve Strassmann sonuçlarını açıklayamıyordu; Hahn bu yüzden Meitner'e yazdı.",
        ],
        [
          "The writer mentions Einstein's equation in order to show ----.",
          [
            "how Meitner was able to calculate the energy released by fission",
            "that Einstein himself had discovered fission earlier",
            "why Meitner had been forced to leave Germany",
            "how barium was detected in the uranium samples",
            "why Frisch chose the name 'fission' for the process",
          ],
          "Einstein'ın kütle-enerji denklemini kullanması, Meitner'in açığa çıkan enerjiyi nasıl hesaplayabildiğini gösterir.",
        ],
        [
          "It can be inferred from the passage that the Nobel committee's decision of 1945 ----.",
          [
            "is now considered to have been unfair to Meitner",
            "was supported by all historians",
            "gave the prize to Meitner and Frisch",
            "was made before fission was discovered",
            "recognised Meitner's contribution fully",
          ],
          "Kararın bugün yaygın biçimde bir haksızlık olarak görülmesi, Meitner'e karşı adil olmadığının düşünüldüğünü gösterir.",
        ],
      ],
    },
    {
      text:
        "By the late 1890s, the young Italian inventor Guglielmo Marconi had shown that radio signals could be sent over distances of several kilometres, and later across the English Channel. Many scientists, however, believed that radio waves travelled in straight lines and would therefore be unable to follow the curve of the Earth's surface, limiting communication to a few hundred kilometres at most. Marconi was determined to prove them wrong. He built a powerful transmitting station at Poldhu in Cornwall, in south-west England, and travelled to St John's in Newfoundland, on the other side of the Atlantic. Storms destroyed his first aerials, so he used a long wire held up by a kite. On 12 December 1901, he reported hearing the faint signal of three short clicks, the Morse signal for 'S', transmitted from Cornwall more than three thousand kilometres away. Some scientists doubted his claim, since no independent witness could confirm it. However, later experiments proved that long-distance radio communication was indeed possible. Scientists eventually discovered that the signals were reflected by a layer of electrically charged particles high in the atmosphere, which allowed them to travel far beyond the horizon. Within a few years, radio had become essential for ships at sea, and in 1909 Marconi shared the Nobel Prize in physics.",
      questions: [
        [
          "According to the passage, many scientists doubted that radio signals could cross the Atlantic because ----.",
          [
            "they thought the waves could not follow the Earth's curve",
            "the water of the ocean absorbed all radio waves",
            "Marconi had never successfully sent a signal before",
            "winter storms made radio communication impossible",
            "Morse code was too slow for long-distance messages",
          ],
          "Metne göre radyo dalgalarının düz çizgide ilerlediği ve Dünya'nın eğriliğini izleyemeyeceği düşünülüyordu.",
        ],
        [
          "The writer mentions the kite in order to show ----.",
          [
            "how Marconi overcame the loss of his aerials",
            "that Marconi enjoyed flying kites in his free time",
            "why the signal received in Newfoundland was so weak",
            "how the Morse code had been invented years earlier",
            "that the experiment was a complete failure",
          ],
          "Fırtınaların ilk antenlerini yok etmesi üzerine uçurtmayla tutulan uzun bir tel kullanması, bu sorunu nasıl aştığını gösterir.",
        ],
        [
          "It can be understood from the passage that the signals were able to travel so far because ----.",
          [
            "they were reflected by a layer high in the atmosphere",
            "they travelled through the ocean",
            "they were carried by cables",
            "the Earth is flat",
            "the kite amplified them",
          ],
          "Metne göre sinyaller atmosferin yüksek bir katmanındaki elektrik yüklü parçacıklar tarafından yansıtılıyordu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Water molecules at the surface of a liquid are pulled inwards by the molecules below them. ---- This is why some insects can walk on the surface of a pond without sinking.",
      [
        "As a result, the surface behaves like a thin, stretched skin, an effect known as surface tension.",
        "Ponds are home to many kinds of plants, fish and small animals.",
        "Water covers most of the Earth's surface and is essential for life.",
        "Some insects can also fly for long distances over water without resting.",
        "The temperature of the water in a pond changes greatly from season to season.",
      ],
      "Boşluktan sonra 'This is why' ile böceklerin su yüzeyinde yürüyebildiği söylenir; boşluğa yüzeyin gergin ince bir zar gibi davrandığını ve buna yüzey gerilimi dendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "A Faraday cage is an enclosure made of a conducting material such as metal mesh. ---- For this reason, people inside a car are usually safe if it is struck by lightning.",
      [
        "Charges spread over its outer surface, protecting the space inside.",
        "Metal mesh is often used to make fences and gates around gardens.",
        "Lightning is most common in tropical regions during the hot summer months.",
        "Many cars today are fitted with electronic systems and computers.",
        "Faraday made many important discoveries in the nineteenth century.",
      ],
      "Boşluktan sonra 'For this reason' ile yıldırım düşen arabadakilerin güvende olduğu söylenir; boşluğa yüklerin dış yüzeye dağıldığını ve içerinin korunduğunu açıklayan cümle gelmelidir.",
    ],
    [
      "On hot days, drivers sometimes see what looks like a pool of water on the road ahead. ---- The 'water' is actually an image of the sky.",
      [
        "Light from the sky is bent as it passes through hot air near the ground.",
        "Roads become very hot in the summer and may even begin to melt.",
        "Many drivers wear sunglasses to protect their eyes from the sun.",
        "Water on the road evaporates very quickly when the temperature is high.",
        "Some deserts receive almost no rain at all for many years at a time.",
      ],
      "Boşluktan sonra 'suyun' aslında gökyüzünün bir görüntüsü olduğu söylenir; boşluğa gökten gelen ışığın yere yakın sıcak hava katmanlarından geçerken büküldüğünü açıklayan cümle gelmelidir.",
    ],
    [
      "A hologram is a recording that can reproduce a three-dimensional image of an object. ---- As the viewer moves, the image changes, just as a real object would.",
      [
        "Unlike a photograph, it records light coming from the object in many directions.",
        "The first permanent photographs were made in the early nineteenth century.",
        "Many credit cards carry small images to prevent forgery.",
        "Lasers are used in many kinds of modern technology, from surgery to shopping.",
        "Some museums display valuable objects behind thick glass cases.",
      ],
      "Boşluktan sonra izleyici hareket ettikçe görüntünün değiştiği söylenir; boşluğa sıradan fotoğraftan farklı olarak nesneden gelen ışığın pek çok yönden bilgisini kaydettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "When a thin tube is placed in water, the water rises inside it above the level of the surrounding liquid. ---- This process, known as capillary action, helps plants to draw water up from their roots.",
      [
        "Attraction between the water and the tube walls pulls the liquid up.",
        "Many plants need large amounts of water in order to grow well.",
        "Glass tubes are commonly used in chemistry laboratories.",
        "Pure water freezes at zero degrees Celsius at sea level.",
        "Some desert plants can survive for months without any rain.",
      ],
      "Boşluktan sonra 'This process' ile kılcallık tanımlanır; boşluğa su ile tüp duvarları arasındaki çekimin sıvıyı yukarı çektiğini açıklayan cümle gelmelidir.",
    ],
    [
      "An object at rest tends to stay at rest, and a moving object tends to keep moving at the same speed and in the same direction. ---- This explains why passengers are thrown forward when a bus stops suddenly.",
      [
        "This tendency to resist changes in motion is called inertia.",
        "Buses carry large numbers of passengers in cities every day.",
        "Many road accidents happen when drivers are tired or distracted.",
        "Speed is usually measured in kilometres or miles per hour.",
        "Some modern buses are powered entirely by electricity.",
      ],
      "Boşluktan sonra 'This' ile otobüs aniden durunca yolcuların öne savrulması açıklanır; boşluğa hareketteki değişime direnme eğiliminin eylemsizlik olarak adlandırıldığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A pressure cooker is a sealed pot that traps the steam produced by boiling water.",
        "As the pressure inside rises, the boiling point of the water increases.",
        "Many traditional dishes take several hours to prepare.",
        "Food can therefore be cooked at a higher temperature and much more quickly.",
        "A safety valve releases steam if the pressure becomes too high.",
      ],
      odd: 2,
      why: "Parça düdüklü tencerenin çalışma ilkesini anlatır. Pek çok geleneksel yemeğin hazırlanmasının saatler sürdüğünü söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "When a car turns a corner, a force directed towards the centre of the curve keeps it on its path.",
        "This force is provided by friction between the tyres and the road.",
        "If the road is icy, there may not be enough friction.",
        "Many drivers enjoy listening to the radio while they drive.",
        "The car may then slide outwards off the road.",
      ],
      odd: 3,
      why: "Parça virajlarda arabayı yolda tutan merkezcil kuvveti anlatır. Pek çok sürücünün araba kullanırken radyo dinlemekten hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Every object has a natural frequency at which it tends to vibrate.",
        "Many people learn to play musical instruments at school.",
        "If a force pushes it at exactly this frequency, the vibrations can become very large.",
        "This effect is known as resonance.",
        "Engineers must take it into account when designing bridges and buildings.",
      ],
      odd: 1,
      why: "Parça rezonansı anlatır. Pek çok kişinin okulda müzik aleti çalmayı öğrendiğini söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A microwave oven heats food using electromagnetic waves.",
        "The waves cause water molecules in the food to vibrate rapidly.",
        "Many families eat their main meal together in the evening.",
        "This movement produces heat throughout the food.",
        "Metal objects should not be placed inside, as they can cause sparks.",
      ],
      odd: 2,
      why: "Parça mikrodalga fırının çalışmasını anlatır. Pek çok ailenin akşamları ana öğünü birlikte yediğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A vacuum flask keeps hot drinks hot and cold drinks cold for many hours.",
        "It has two walls with a vacuum between them.",
        "Because there is almost no air in the gap, heat cannot easily pass through by conduction or convection.",
        "The inner surfaces are often silvered to reduce heat loss by radiation.",
        "Many people take coffee with them when they go hiking.",
      ],
      odd: 4,
      why: "Parça termosun çalışma ilkesini anlatır. Pek çok kişinin yürüyüşe çıkarken yanına kahve aldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Noise-cancelling headphones contain small microphones that detect sounds from outside.",
        "Electronic circuits then produce a sound wave that is the exact opposite of the noise.",
        "When the two waves meet, they cancel each other out.",
        "Many people listen to music on long flights.",
        "They are most effective against constant background hums like the drone of an aircraft.",
      ],
      odd: 3,
      why: "Parça gürültü önleyici kulaklıkları anlatır. Pek çok kişinin uzun uçuşlarda müzik dinlediğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
