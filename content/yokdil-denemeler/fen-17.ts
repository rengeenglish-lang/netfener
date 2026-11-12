import type { YokdilDeneme } from "./types";

export const FEN_17: YokdilDeneme = {
  no: 17,
  field: "fen",
  vocab: [
    [
      "As the hours passed, the direction in which the pendulum swung appeared to ---- slowly, proving that the Earth was turning beneath it.",
      ["rotate", "vanish", "stop", "shrink", "fall"],
      "Saatler geçtikçe sarkacın salınım yönünün yavaşça 'döner' (rotate) gibi göründüğü ve Dünya'nın altında döndüğünü kanıtladığı anlatılır.",
    ],
    [
      "Rømer noticed that the moon's eclipses were ---- when the Earth was moving away from Jupiter.",
      ["delayed", "repeated", "brightened", "cancelled", "photographed"],
      "Rømer'in Dünya Jüpiter'den uzaklaşırken uydunun tutulmalarının 'geciktiğini' (delayed) fark ettiği anlatılır.",
    ],
    [
      "Neutrinos are so ---- that trillions of them pass through our bodies every second without any effect.",
      ["elusive", "heavy", "dangerous", "colourful", "rare"],
      "Nötrinoların o kadar 'yakalanması zor/belirsiz' (elusive) olduğu ve her saniye trilyonlarcasının etkisiz biçimde vücudumuzdan geçtiği anlatılır.",
    ],
    [
      "Hess found that the level of radiation ---- as his balloon rose higher above the ground.",
      ["increased", "disappeared", "froze", "remained", "reversed"],
      "Hess'in balonu yerden yükseldikçe radyasyon düzeyinin 'arttığını' (increased) bulduğu anlatılır.",
    ],
    [
      "When a particle meets its antiparticle, the two ---- each other and release energy.",
      ["annihilate", "repair", "copy", "attract", "imitate"],
      "Bir parçacık karşıt parçacığıyla karşılaştığında ikisinin birbirini 'yok ettiği' (annihilate) ve enerji açığa çıkardığı anlatılır.",
    ],
    [
      "It took almost fifty years and the largest machine ever built to ---- the particle predicted by Higgs.",
      ["track down", "give away", "put off", "turn over", "look up to"],
      "Higgs'in öngördüğü parçacığı 'bulmanın/izini sürmenin' (track down) yaklaşık elli yıl ve şimdiye kadar yapılmış en büyük makineyi gerektirdiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "The famous pendulum ---- from the dome of the Panthéon in Paris in 1851.",
      ["was hung", "hung", "has hung", "was hanging up", "had hung"],
      "Sarkaç asılan bir nesnedir ve olay 1851'de olmuştur: edilgen geçmiş zaman 'was hung'.",
    ],
    [
      "If light travelled infinitely fast, the eclipses of Jupiter's moon ---- at exactly the predicted times.",
      ["would occur", "would have occurred", "will occur", "occurred", "had occurred"],
      "Şimdiki/genel gerçek dışı koşul (Type 2) ana cümlede 'would + yalın fiil' ister.",
    ],
    [
      "By the time neutrinos were finally detected in 1956, Pauli ---- their existence more than twenty-five years earlier.",
      ["had predicted", "has predicted", "predicts", "will predict", "was predicted"],
      "Nötrinoların saptanmasından (geçmiş) önce tamamlanmış eylem: Past Perfect 'had predicted'.",
    ],
    [
      "Hess, ---- balloon flights reached heights of more than five kilometres, shared the Nobel Prize in 1936.",
      ["whose", "who", "which", "whom", "where"],
      "Balon uçuşları Hess'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until 1932 ---- evidence of the positron in cosmic rays.",
      ["did Anderson find", "Anderson found", "found Anderson", "Anderson did find", "did find Anderson"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur: 'did Anderson find'.",
    ],
    [
      "The particles are so tiny ---- they can only be seen through a powerful microscope.",
      ["that", "which", "as", "such", "than"],
      "'so tiny that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- the Higgs boson was discovered in 2012, many questions about it remain unanswered.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Keşfedilmiş olması ile pek çok sorunun yanıtsız kalması zıttır: 'Although'.",
    ],
    [
      "Scientists ---- detectors are buried deep underground can study neutrinos without interference from cosmic rays.",
      ["whose", "who", "which", "whom", "where"],
      "Dedektörler bilim insanlarına aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Antimatter is thought ---- in equal amounts with matter at the beginning of the universe.",
      ["to have been produced", "to produce", "producing", "to be producing", "to have produced"],
      "Antimadde üretilen bir şeydir ve olay geçmişte kalmıştır: 'be thought to have been + V3'.",
    ],
    [
      "Einstein explained the movement of the grains ---- used it to estimate the size of molecules.",
      ["and", "but", "or", "unless", "so that"],
      "İki eylem birbirine eklenir: 'and'.",
    ],
    [
      "Particles ---- at almost the speed of light collide inside the accelerator.",
      ["travelling", "travelled", "which travel them", "to travel", "have travelled"],
      "Parçacıklar hareket eden (etken) varlıklardır; etken anlamlı şimdiki zaman ortacı 'travelling' gerekir.",
    ],
    [
      "Foucault used a very long wire and a heavy weight ---- the pendulum would swing for many hours.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The pollen grains moved as if they ---- alive.",
      ["were", "are", "will be", "have", "be"],
      "'as if' ile gerçek dışı bir benzetme yapılır: 'were'.",
    ],
    [
      "The higher the balloon rose, ---- the radiation became.",
      ["the stronger", "stronger", "the strongest", "more strong", "the more strong"],
      "'The higher …, the stronger …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1851, the French physicist Léon Foucault gave a striking public demonstration that the Earth rotates. He hung a heavy iron ball from a wire sixty-seven metres long beneath the dome of the Panthéon in Paris. Once it was set in motion, the pendulum swung back and forth in the same direction in space, {1} the floor beneath it, together with the building and the city, slowly turned with the Earth. To observers, it appeared that the direction of the swing was gradually changing. A small pin attached to the bottom of the ball knocked over markers placed in a circle around it, {2} the movement easy to see. The speed at which the swing appeared to turn depended on the latitude: at the North Pole, it would make a complete circle in about twenty-four hours, {3} at the equator it would not turn at all. In Paris, it took around thirty-two hours. Although scientists had long accepted that the Earth rotates, this was the first simple experiment {4} showed the rotation directly, without relying on observations of the sky. {5} that time, Foucault pendulums have been installed in museums and universities around the world.",
      blanks: [
        [
          "(21) ----",
          ["while", "because", "unless", "so that", "since"],
          "Sarkacın aynı yönde salınması ile altındaki zeminin Dünya'yla birlikte dönmesi karşılaştırılır: 'while'.",
        ],
        [
          "(22) ----",
          ["making", "made", "to make", "makes", "having made"],
          "Önceki eylemin sonucunu bildiren ortaç yapısı gerekir: 'making the movement easy to see'.",
        ],
        [
          "(23) ----",
          ["whereas", "because", "unless", "so that", "in case"],
          "Kuzey Kutbu ile ekvator karşılaştırılır: 'whereas'.",
        ],
        [
          "(24) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'the first simple experiment' ifadesini niteleyen ilgi zamiridir; 'the first' ile 'that' tercih edilir.",
        ],
        [
          "(25) ----",
          ["Since", "For", "During", "Until", "By"],
          "'Since that time' ile geçmişten bugüne süren durum Present Perfect ile kullanılır: 'Since'.",
        ],
      ],
    },
    {
      text:
        "For centuries, many scientists believed that light travelled instantly from one place to another. In the 1670s, the Danish astronomer Ole Rømer, working at the Paris Observatory, was studying Io, one of the moons of Jupiter. Io passes behind Jupiter regularly, and astronomers had calculated tables predicting {1} these eclipses would occur. Rømer noticed that the eclipses happened earlier than predicted when the Earth was moving towards Jupiter in its orbit, and later when it was moving away. He realised that this difference could be explained {2} light took time to travel across the varying distance between the two planets. In 1676, he predicted that an eclipse would occur about ten minutes later than the tables suggested, and he was proved right. {3} the measurements of the distances involved were not very accurate at the time, his results suggested a speed of around 220,000 kilometres per second, about three-quarters of the modern value. Rømer's conclusion was not accepted by everyone at first, {4} it was confirmed in 1729 by a completely different method. His work showed for the first time that the speed of light, {5} enormous, is finite.",
      blanks: [
        [
          "(26) ----",
          ["when", "whose", "which", "who", "whom"],
          "Tabloların tutulmaların 'ne zaman' olacağını öngördüğü anlatılır: 'when'.",
        ],
        [
          "(27) ----",
          ["if", "unless", "although", "so that", "whereas"],
          "Farkın ışığın yol alması zaman alıyorsa açıklanabileceği anlatılır: koşul bildiren 'if'.",
        ],
        [
          "(28) ----",
          ["Because", "Unless", "So that", "Until", "Whereas"],
          "Sonuçların modern değerin dörtte üçü olmasının nedeni mesafe ölçümlerinin doğru olmamasıdır: 'Because'.",
        ],
        [
          "(29) ----",
          ["but", "because", "so", "unless", "since"],
          "Herkesçe kabul edilmemesi ile 1729'da doğrulanması karşıtlıktır: 'but'.",
        ],
        [
          "(30) ----",
          ["although", "because", "unless", "so that", "until"],
          "Işık hızının çok büyük olmasına rağmen sonlu olduğu anlatılır: 'although (it is) enormous'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although neutrinos are among the most common particles in the universe, ----.",
      [
        "they are extremely difficult to detect",
        "they are produced in large numbers by the Sun",
        "they have very little mass and no electric charge",
        "they travel at almost the speed of light",
        "they were first predicted by Wolfgang Pauli",
      ],
      "'Although' zıtlık ister: nötrinolar evrendeki en yaygın parçacıklardan olsa da saptanmaları son derece zordur.",
    ],
    [
      "If equal amounts of matter and antimatter had survived after the Big Bang, ----.",
      [
        "the universe might contain no stars or planets",
        "the particles were very small",
        "most scientists will study them",
        "antimatter is produced in accelerators",
        "matter has a positive charge",
      ],
      "Karma koşul cümlesi: geçmişteki bir koşul (had survived) bugünkü bir sonuca bağlanır; ana cümlede 'might + yalın fiil' gerekir.",
    ],
    [
      "Hess made some of his balloon flights at night and during an eclipse ----.",
      [
        "to rule out the Sun",
        "because he was afraid of flying in daylight",
        "so that nobody would see him",
        "although the weather was very bad",
        "unless the balloon was damaged",
      ],
      "Hess'in bazı uçuşlarını gece ve tutulma sırasında yapmasının amacı radyasyonun Güneş'ten gelmediğini göstermektir.",
    ],
    [
      "Since the Higgs boson was discovered in 2012, ----.",
      [
        "physicists have been studying it",
        "scientists had searched for it for decades",
        "the accelerator would have been closed",
        "new particles will be found",
        "few people knew about it",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect Continuous ister: 'have been measuring'.",
    ],
    [
      "Unless neutrino detectors are placed deep underground, ----.",
      [
        "cosmic rays may swamp them",
        "the neutrinos would have stopped",
        "most scientists had moved there",
        "the Sun will produce fewer neutrinos",
        "the detectors were very large",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: kozmik ışın sinyallerinden etkilenebilirler.",
    ],
    [
      "The movement of the pollen grains was so irregular ----.",
      [
        "that currents could not explain it",
        "because the grains were extremely small",
        "although the water appeared completely still",
        "while Brown observed them through a microscope",
        "unless the water was heated",
      ],
      "'so irregular that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Physicists have found that when a particle and its antiparticle meet, ----.",
      [
        "both are destroyed in a burst of energy",
        "the universe would have been different",
        "most particles had been heavy",
        "the antiparticle will become larger",
        "the experiment was successful",
      ],
      "'when' ile genel bir bulgu anlatılır: bir parçacık ve karşıt parçacığı karşılaştığında ikisi de bir enerji patlamasıyla yok olur.",
    ],
    [
      "So weakly do neutrinos interact with matter ----.",
      [
        "that most of them pass straight through the Earth",
        "because they have no electric charge",
        "although they are produced in huge numbers",
        "while light is easily blocked by walls",
        "unless they hit an atomic nucleus",
      ],
      "Devrik 'So weakly do … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While many scientists thought the movement of pollen grains was a sign of life, ----.",
      [
        "Brown saw dust move the same way",
        "pollen is produced by flowering plants",
        "microscopes were becoming more powerful",
        "water is made of molecules",
        "Einstein was born in Germany",
      ],
      "'While' iki görüşü karşılaştırır: pek çok bilim insanı hareketi yaşam belirtisi sayarken Brown cansız parçacıkların da aynı şekilde hareket ettiğini buldu.",
    ],
    [
      "Once the accelerator had produced enough collisions, ----.",
      [
        "the particle was confirmed",
        "the machine will be switched off",
        "the particles would have disappeared",
        "protons are found in atoms",
        "most physicists had left",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: bilim insanları yeni parçacığı doğrulayabildi.",
    ],
    [
      "No sooner had Foucault released the pendulum ----.",
      [
        "than the crowd began to watch it closely",
        "when the building had been completed",
        "that the Earth will rotate",
        "before he had hung it",
        "so it stopped swinging",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The pendulum continued to swing in the same direction while the Earth turned beneath it.",
      [
        "Sarkaç, Dünya altında dönerken aynı yönde salınmaya devam etti.",
        "Sarkaç, Dünya döndükçe salınım yönünü sürekli olarak kendisi değiştirdi.",
        "Dünya, sarkacın salınımı nedeniyle dönmeye başladı.",
        "Sarkaç, Dünya'nın dönüşünü durdurmak için kullanıldı.",
        "Dünya'nın dönüşü, sarkacın salınmasını tamamen engelledi.",
      ],
      "'continued to swing in the same direction' 'aynı yönde salınmaya devam etti', 'while the Earth turned beneath it' 'Dünya altında dönerken' demektir.",
    ],
    [
      "Rømer showed for the first time that light does not travel instantly.",
      [
        "Rømer, ışığın anında yol almadığını ilk kez gösterdi.",
        "Rømer, ışığın anında yol aldığını ilk kez kanıtladı.",
        "Işık, Rømer'in gözlemlerinden sonra daha hızlı yol almaya başladı.",
        "Rømer, ışığın hızını ölçmenin imkânsız olduğunu gösterdi.",
        "Rømer, ışığın Jüpiter'den Dünya'ya hiç ulaşmadığını gösterdi.",
      ],
      "'showed for the first time' 'ilk kez gösterdi', 'that light does not travel instantly' 'ışığın anında yol almadığını' demektir.",
    ],
    [
      "Detectors must be built deep underground to shield them from other types of radiation.",
      [
        "Dedektörler, onları diğer radyasyon türlerinden korumak için yerin çok altında inşa edilmelidir.",
        "Dedektörler, diğer radyasyon türlerini yakalamak için yeryüzüne yakın inşa edilmelidir.",
        "Diğer radyasyon türleri, yerin altındaki dedektörleri tamamen yok eder.",
        "Dedektörler, yerin altında inşa edildikleri için radyasyon üretir.",
        "Yerin altındaki dedektörler hiçbir radyasyon türünden etkilenmez.",
      ],
      "'must be built deep underground' 'yerin çok altında inşa edilmelidir', 'to shield them from other types of radiation' 'onları diğer radyasyon türlerinden korumak için' demektir.",
    ],
    [
      "The radiation was found to be stronger at high altitudes than near the ground.",
      [
        "Radyasyonun yüksek irtifalarda yere yakın olduğundan daha güçlü olduğu bulundu.",
        "Radyasyonun yere yakın yerlerde yüksek irtifalardan daha güçlü olduğu bulundu.",
        "Yüksek irtifalarda hiçbir radyasyon bulunamadı.",
        "Radyasyon, yere yaklaştıkça hızla arttı.",
        "Radyasyonun gücü irtifadan hiç etkilenmedi.",
      ],
      "'was found to be stronger at high altitudes' 'yüksek irtifalarda daha güçlü olduğu bulundu', 'than near the ground' 'yere yakın olduğundan' demektir.",
    ],
    [
      "Einstein's explanation provided strong evidence that atoms and molecules really exist.",
      [
        "Einstein'ın açıklaması, atomların ve moleküllerin gerçekten var olduğuna dair güçlü bir kanıt sağladı.",
        "Einstein'ın açıklaması, atomların ve moleküllerin var olmadığını kanıtladı.",
        "Atomlar ve moleküller, Einstein'ın açıklamasını çürüttü.",
        "Einstein, atomların varlığına dair hiçbir kanıt bulamadı.",
        "Einstein'ın açıklaması yalnızca bitkilerin hareketiyle ilgiliydi.",
      ],
      "'provided strong evidence' 'güçlü bir kanıt sağladı', 'that atoms and molecules really exist' 'atomların ve moleküllerin gerçekten var olduğuna dair' demektir.",
    ],
    [
      "The Higgs field gives many fundamental particles their mass.",
      [
        "Higgs alanı, pek çok temel parçacığa kütlesini verir.",
        "Higgs alanı, temel parçacıkların kütlesini tamamen ortadan kaldırır.",
        "Temel parçacıklar, Higgs alanına kütlesini verir.",
        "Higgs alanının parçacıkların kütlesiyle hiçbir ilişkisi yoktur.",
        "Higgs alanı yalnızca ışığa kütle kazandırır.",
      ],
      "'gives many fundamental particles their mass' 'pek çok temel parçacığa kütlesini verir' demektir.",
    ],
  ],
  trEn: [
    [
      "Foucault sarkacı, Dünya'nın döndüğünü doğrudan gösterdi.",
      [
        "Foucault's pendulum showed directly that the Earth rotates.",
        "Foucault's pendulum proved that the Earth does not rotate.",
        "The rotation of the Earth caused Foucault's pendulum to stop.",
        "Foucault's pendulum was used to measure the speed of light.",
        "The Earth was shown to rotate long before Foucault was born, so his pendulum was ignored.",
      ],
      "'Dünya'nın döndüğünü doğrudan gösterdi' 'showed directly that the Earth rotates' karşılığıdır.",
    ],
    [
      "Rømer, ışığın hızını ölçen ilk kişiydi.",
      [
        "Rømer was the first person to measure the speed of light.",
        "Rømer was the last person to measure the speed of light.",
        "Rømer believed that light had no speed at all.",
        "The speed of light was measured long before Rømer.",
        "Rømer measured the speed of sound rather than light.",
      ],
      "'ışığın hızını ölçen ilk kişi' 'the first person to measure the speed of light' karşılığıdır.",
    ],
    [
      "Nötrinolar, her saniye vücudumuzdan milyarlarca kez geçer.",
      [
        "Neutrinos pass through our bodies billions of times every second.",
        "Neutrinos are stopped by our bodies every second.",
        "Our bodies produce billions of neutrinos every second.",
        "Neutrinos pass through our bodies only once in a lifetime.",
        "Neutrinos cannot pass through living things.",
      ],
      "'her saniye vücudumuzdan milyarlarca kez geçer' 'pass through our bodies billions of times every second' karşılığıdır.",
    ],
    [
      "Kozmik ışınlar, uzaydan gelen yüksek enerjili parçacıklardır.",
      [
        "Cosmic rays are high-energy particles that come from space.",
        "Cosmic rays are low-energy particles produced on Earth.",
        "Cosmic rays are a type of light produced by the Moon.",
        "Space is protected from high-energy particles by cosmic rays.",
        "Cosmic rays are particles produced only in laboratories.",
      ],
      "'uzaydan gelen yüksek enerjili parçacıklar' 'high-energy particles that come from space' karşılığıdır.",
    ],
    [
      "Antimadde, tıpta bazı görüntüleme tekniklerinde kullanılır.",
      [
        "Antimatter is used in some imaging techniques in medicine.",
        "Antimatter cannot be used in medicine because it is too dangerous.",
        "Medicine is used to produce antimatter in hospitals.",
        "Imaging techniques destroy antimatter in the body.",
        "Antimatter has no practical uses at all.",
      ],
      "'tıpta bazı görüntüleme tekniklerinde kullanılır' 'is used in some imaging techniques in medicine' karşılığıdır.",
    ],
    [
      "Higgs bozonunun keşfi, fizikte önemli bir dönüm noktasıydı.",
      [
        "The discovery of the Higgs boson was an important turning point in physics.",
        "The discovery of the Higgs boson had no importance for physics.",
        "Physics became less important after the discovery of the Higgs boson.",
        "The Higgs boson was discovered before modern physics existed.",
        "The discovery of the Higgs boson ended all research in physics.",
      ],
      "'fizikte önemli bir dönüm noktası' 'an important turning point in physics' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1930, the Austrian physicist Wolfgang Pauli faced a puzzle. In a type of radioactive decay, the particles released seemed to carry away less energy than they should, which appeared to break the law that energy can neither be created nor destroyed. Pauli proposed a bold solution: an undetected particle, with no electric charge and very little mass, was carrying away the missing energy. He described his idea in a letter to colleagues, admitting that he had done 'a terrible thing' by proposing a particle that could probably never be detected. The particle was later named the neutrino, meaning 'little neutral one'. Neutrinos interact so weakly with matter that most pass straight through the Earth without hitting anything. It was not until 1956 that two American physicists, Clyde Cowan and Frederick Reines, detected them, using a large tank of liquid placed next to a nuclear reactor, which produces enormous numbers of neutrinos. Today, detectors containing thousands of tonnes of water or other liquids are built deep underground or under ice, where they are shielded from other radiation. By studying neutrinos from the Sun and from exploding stars, scientists can learn about processes that would otherwise be hidden.",
      questions: [
        [
          "According to the passage, Pauli proposed the neutrino in order to ----.",
          [
            "account for missing energy",
            "describe how nuclear reactors work",
            "show that energy can be destroyed",
            "explain why the Sun shines",
            "design a new kind of detector",
          ],
          "Metne göre bir radyoaktif bozunma türünde parçacıkların olması gerekenden az enerji taşıdığı görülüyordu ve Pauli eksik enerjiyi açıklamak için yeni bir parçacık önerdi.",
        ],
        [
          "Pauli described his proposal as 'a terrible thing' because ----.",
          [
            "he thought the particle might never be detected",
            "he believed the particle was dangerous",
            "it broke the law of conservation of energy",
            "his colleagues had rejected it",
            "he had stolen the idea from another scientist",
          ],
          "Metinde Pauli'nin muhtemelen hiç saptanamayacak bir parçacık önerdiği için 'korkunç bir şey' yaptığını kabul ettiği belirtilir.",
        ],
        [
          "It can be understood from the passage that Cowan and Reines placed their detector near a nuclear reactor because ----.",
          [
            "the reactor was a powerful source of neutrinos",
            "it protected the detector from radiation",
            "the reactor needed to be cooled",
            "neutrinos could only exist near reactors",
            "they wanted to study the Sun",
          ],
          "Reaktörün çok sayıda nötrino üretmesi, dedektörün güçlü bir nötrino kaynağının yanına konduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "At the beginning of the twentieth century, scientists were puzzled by the fact that the air always seemed to contain a small amount of electrically charged particles, even inside sealed containers. Most assumed that this was caused by radiation from radioactive substances in the ground, and they expected it to decrease with height. To test this, the Austrian physicist Victor Hess made a series of dangerous balloon flights between 1911 and 1912, carrying instruments to measure radiation. He found that the level of radiation fell slightly at first but then increased steadily above about one kilometre, and at a height of five kilometres it was several times stronger than at ground level. To rule out the possibility that the radiation came from the Sun, he made some flights at night and one during a near-total solar eclipse, and found the same results. Hess concluded that the radiation was entering the atmosphere from outer space. It was later named cosmic radiation. Scientists now know that cosmic rays consist mainly of protons and other atomic nuclei travelling at nearly the speed of light, and that some come from exploding stars. Hess shared the Nobel Prize in Physics in 1936.",
      questions: [
        [
          "According to the passage, before Hess's flights, most scientists believed that the radiation ----.",
          [
            "came from radioactive materials in the ground",
            "came from outer space",
            "was produced by the Sun",
            "increased with height",
            "existed only inside containers",
          ],
          "Metne göre çoğu bilim insanı radyasyonun yerdeki radyoaktif maddelerden kaynaklandığını ve yükseklikle azalacağını düşünüyordu.",
        ],
        [
          "Hess flew during a solar eclipse in order to ----.",
          [
            "test the Sun as a source",
            "take photographs of the Sun",
            "measure the temperature of the air",
            "avoid flying in bad weather",
            "study the effects of darkness on balloons",
          ],
          "Radyasyonun Güneş'ten gelme olasılığını dışlamak için gece ve tutulma sırasında uçtuğu belirtilir.",
        ],
        [
          "It can be inferred from the passage that Hess's flights ----.",
          [
            "involved considerable personal risk",
            "were carried out entirely at ground level",
            "proved that the radiation came from the ground",
            "were unsuccessful",
            "were made after he won the Nobel Prize",
          ],
          "Metinde uçuşların tehlikeli olduğunun belirtilmesi, Hess için önemli bir kişisel risk taşıdığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1928, the British physicist Paul Dirac developed an equation that combined quantum mechanics with Einstein's special theory of relativity to describe the behaviour of electrons. The equation was remarkably successful, but it had a strange feature: it seemed to allow for particles with negative energy. After much thought, Dirac suggested that the equation was predicting the existence of a new particle with the same mass as the electron but the opposite, positive, charge. Many physicists were sceptical. In 1932, however, the American physicist Carl Anderson was studying cosmic rays using a cloud chamber, a device in which charged particles leave visible trails. He photographed a track that curved in a magnetic field exactly like an electron's, but in the opposite direction, showing that the particle was positively charged. He had discovered the positron, the first known particle of antimatter. When a particle meets its antiparticle, the two are destroyed and their mass is converted into energy. This process is used today in medical scanners called PET scanners. One of the great unsolved puzzles of physics is why the universe today contains almost no antimatter, even though the Big Bang should have produced equal amounts of matter and antimatter.",
      questions: [
        [
          "According to the passage, Dirac's equation ----.",
          [
            "predicted a positive electron",
            "proved that electrons have no mass",
            "was rejected because it did not describe electrons",
            "was developed by Carl Anderson",
            "showed that antimatter is common in the universe",
          ],
          "Metne göre Dirac, denklemin elektronla aynı kütlede ama pozitif yüklü yeni bir parçacığın varlığını öngördüğünü ileri sürdü.",
        ],
        [
          "Anderson concluded that the particle he observed was positively charged because ----.",
          [
            "its track curved the opposite way to an electron's",
            "it left no visible trail",
            "it had a much larger mass than an electron",
            "it was produced in a PET scanner",
            "it was destroyed by the magnetic field",
          ],
          "Metinde parçacığın izinin manyetik alanda elektronunki gibi ama ters yönde kıvrıldığı belirtilir.",
        ],
        [
          "The writer mentions the Big Bang in order to point out ----.",
          [
            "why antimatter is rare",
            "how PET scanners were invented",
            "that Dirac's equation was wrong",
            "where cosmic rays come from",
            "why electrons have a negative charge",
          ],
          "Büyük Patlama'nın eşit miktarda madde ve antimadde üretmesi gerekirken evrende neredeyse hiç antimadde bulunmaması bir gizem olarak belirtilir.",
        ],
      ],
    },
    {
      text:
        "In 1827, the Scottish botanist Robert Brown was examining grains of pollen suspended in water under a microscope when he noticed that tiny particles released from them were moving constantly in an irregular, jittery way. At first, he wondered whether the movement was a sign of life, but he found that particles of dust, ground glass and even stone moved in the same way. He could not explain it, and the phenomenon, which became known as Brownian motion, remained a mystery for almost eighty years. In 1905, Albert Einstein published a paper that explained it. He proposed that the visible particles were being continually struck by the much smaller, invisible molecules of the water, which were moving randomly because of their heat energy. Because the collisions from different sides were not perfectly balanced at any moment, the particles were pushed first one way and then another. Einstein's theory made precise predictions about how far a particle should move over time. A few years later, the French physicist Jean Perrin carried out careful experiments that confirmed these predictions. At the time, some scientists still doubted that atoms and molecules were real, and this work did much to convince them.",
      questions: [
        [
          "According to the passage, Brown rejected the idea that the movement was a sign of life because ----.",
          [
            "non-living particles moved in the same way",
            "the pollen grains were dead",
            "the water was too cold",
            "he could not see the particles clearly",
            "Einstein had already explained it",
          ],
          "Metne göre Brown toz, öğütülmüş cam ve taş parçacıklarının da aynı şekilde hareket ettiğini buldu.",
        ],
        [
          "According to Einstein's explanation, the particles moved because ----.",
          [
            "they were struck unevenly by water molecules",
            "they were alive",
            "the water was flowing",
            "light from the microscope pushed them",
            "they attracted each other",
          ],
          "Einstein'a göre görünür parçacıklar daha küçük su molekülleri tarafından sürekli çarpılıyordu ve çarpışmalar dengeli olmadığından itiliyorlardı.",
        ],
        [
          "It can be understood from the passage that Perrin's experiments ----.",
          [
            "helped to persuade sceptics that atoms exist",
            "proved Einstein's theory wrong",
            "were carried out before 1905",
            "showed that pollen was alive",
            "were based on Brown's microscope",
          ],
          "Perrin'in deneylerinin Einstein'ın öngörülerini doğrulaması ve atomların gerçekliğinden şüphe edenleri ikna etmeye çok katkı sağlaması bu sonucu verir.",
        ],
      ],
    },
    {
      text:
        "In 1964, the British physicist Peter Higgs and several other researchers proposed that the universe is filled with an invisible field that gives many fundamental particles their mass. Particles that interact strongly with the field are heavy, while those that interact weakly are light, and particles of light, which do not interact with it at all, have no mass. If the field existed, it should also be associated with a particle, which became known as the Higgs boson. Finding it, however, proved extremely difficult, because it was expected to be very heavy and to exist only for a tiny fraction of a second before breaking down into other particles. Physicists needed a machine powerful enough to create it. The Large Hadron Collider, a ring-shaped accelerator twenty-seven kilometres long built beneath the border between France and Switzerland, was designed partly for this purpose. It accelerates protons to almost the speed of light and smashes them together, and huge detectors record the particles produced. In July 2012, scientists announced that two separate experiments had found clear evidence of a new particle matching the predictions. The following year, Higgs, then aged eighty-four, shared the Nobel Prize in Physics with the Belgian physicist François Englert.",
      questions: [
        [
          "According to the passage, the mass of a particle depends on ----.",
          [
            "how strongly it interacts with the Higgs field",
            "how fast it travels",
            "its electric charge",
            "the size of the accelerator",
            "the temperature of the universe",
          ],
          "Metne göre alanla güçlü etkileşen parçacıklar ağır, zayıf etkileşenler ise hafiftir.",
        ],
        [
          "The Higgs boson was difficult to find because ----.",
          [
            "it was heavy and short-lived",
            "it travels faster than light",
            "it has no mass",
            "it exists only in outer space",
            "no one had predicted it",
          ],
          "Metinde parçacığın çok ağır olmasının ve saniyenin çok küçük bir bölümünde başka parçacıklara bozunmasının beklendiği belirtilir.",
        ],
        [
          "It can be inferred from the passage that the Large Hadron Collider ----.",
          [
            "was built with the search for the Higgs boson as one of its aims",
            "was built only to study light",
            "is located in Britain",
            "was completed before 1964",
            "failed to find any new particles",
          ],
          "Hızlandırıcının kısmen bu amaçla tasarlandığının belirtilmesi, Higgs bozonunu aramanın amaçlarından biri olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1820, the Danish physicist Hans Christian Ørsted was giving a lecture when he noticed something unexpected. ---- This was the first evidence that electricity and magnetism are connected.",
      [
        "A compass needle moved whenever an electric current flowed through a nearby wire.",
        "Denmark had several respected universities in the nineteenth century.",
        "Compasses had been used by sailors for many centuries.",
        "Many lectures at the time included practical demonstrations.",
        "Electric batteries had been invented only twenty years earlier.",
      ],
      "Boşluktan sonra 'This' ile elektrik ve manyetizmanın bağlantılı olduğuna dair ilk kanıttan söz edilir; boşluğa yakındaki telden akım geçtiğinde pusula iğnesinin hareket ettiğini anlatan cümle gelmelidir.",
    ],
    [
      "For centuries, inventors tried to build machines that would keep running forever without any source of energy. ---- Such machines would break the basic laws of physics, which state that energy cannot be created from nothing.",
      [
        "All of these attempts failed.",
        "Many inventors in the past were also skilled craftsmen.",
        "Machines became much more common during the Industrial Revolution.",
        "Some clocks can run for many years on a small battery.",
        "Patents protect the rights of inventors.",
      ],
      "Boşluktan sonra bu tür makinelerin fiziğin temel yasalarını çiğneyeceği söylenir; boşluğa tüm bu girişimlerin başarısız olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "When helium is cooled to just above absolute zero, it becomes a superfluid. ---- It can even climb up the walls of its container and escape over the top.",
      [
        "In this state, it flows without any friction.",
        "Helium is the second lightest element.",
        "Absolute zero is the lowest possible temperature.",
        "Helium is used to fill party balloons.",
        "Many laboratories use liquid nitrogen for cooling.",
      ],
      "Boşluktan sonra helyumun kabın duvarlarına tırmanabildiği söylenir; boşluğa bu hâlde hiç sürtünme olmadan aktığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1995, scientists cooled a gas of rubidium atoms to a fraction of a degree above absolute zero. ---- This strange state of matter had been predicted by Einstein and the Indian physicist Satyendra Nath Bose seventy years earlier.",
      [
        "The atoms then acted like one giant atom.",
        "Rubidium is a soft, silvery metal that reacts strongly with water.",
        "Very low temperatures are reached using lasers and magnetic fields.",
        "Many physicists work on experiments that last for several years.",
        "The researchers later received the Nobel Prize for their work.",
      ],
      "Boşluktan sonra 'This strange state of matter' (bu tuhaf madde hâli) belirli bir olgu olarak anılır; boşluğa atomların tek bir kuantum hâlinde birleşip dev bir atom gibi davrandığını anlatan cümle gelmelidir.",
    ],
    [
      "Entropy is a measure of how disordered a system is. ---- This is why a cup of hot coffee always cools down rather than becoming hotter on its own.",
      [
        "According to the laws of physics, the total entropy of an isolated system tends to increase over time.",
        "Coffee was first drunk in the Middle East several centuries ago.",
        "Many scientists find the concept of entropy difficult to explain.",
        "Heat can be measured using a thermometer.",
        "Some materials keep drinks hot for many hours.",
      ],
      "Boşluktan sonra 'This is why' ile sıcak kahvenin kendiliğinden soğuduğu söylenir; boşluğa yalıtılmış bir sistemin toplam entropisinin zamanla artma eğiliminde olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In the double-slit experiment, light is shone through two narrow openings onto a screen. ---- This shows that light behaves like a wave, with the waves from the two slits adding together in some places and cancelling out in others.",
      [
        "Instead of two bright lines, a pattern of many light and dark bands appears.",
        "The experiment was first carried out in the early nineteenth century.",
        "Light travels in straight lines through empty space.",
        "Screens are often made of white material.",
        "Some lasers produce light of a single colour.",
      ],
      "Boşluktan sonra 'This shows' ile ışığın dalga gibi davrandığı açıklanır; boşluğa iki parlak çizgi yerine birçok aydınlık ve karanlık bant oluştuğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A sonic boom is produced when an aircraft travels faster than the speed of sound.",
        "The air in front of the aircraft cannot move out of the way quickly enough.",
        "This creates a shock wave that people on the ground hear as a loud bang.",
        "Many airports are located far from city centres.",
        "Because of the noise, supersonic flights over land are restricted in many countries.",
      ],
      odd: 3,
      why: "Parça ses patlamasını anlatır. Pek çok havaalanının kent merkezlerinden uzak olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Doppler effect describes how the pitch of a sound changes as its source moves.",
        "Many people enjoy listening to music in the car.",
        "As an ambulance approaches, its siren sounds higher.",
        "As it moves away, the siren sounds lower.",
        "Astronomers use the same effect with light to measure how fast stars are moving.",
      ],
      odd: 1,
      why: "Parça Doppler etkisini anlatır. Pek çok kişinin arabada müzik dinlemekten hoşlandığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Archimedes' principle explains why some objects float.",
        "An object in water is pushed upwards by a force equal to the weight of the water it displaces.",
        "If this force is greater than the object's weight, it floats.",
        "This is why huge steel ships can float despite being very heavy.",
        "Swimming lessons are compulsory in some schools.",
      ],
      odd: 4,
      why: "Parça Arşimet ilkesini anlatır. Bazı okullarda yüzme derslerinin zorunlu olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "When a drop of water lands on a pan much hotter than its boiling point, it may skate across the surface instead of evaporating immediately.",
        "This happens because a thin layer of steam forms beneath the drop.",
        "Many people cook pancakes on a Sunday morning.",
        "The steam acts as an insulator, slowing down the transfer of heat.",
        "As a result, the drop can survive for much longer than expected.",
      ],
      odd: 2,
      why: "Parça sıcak tavada su damlasının kaymasını (Leidenfrost etkisi) anlatır. Pek çok kişinin pazar sabahı krep pişirdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Kelvin scale begins at absolute zero, the lowest possible temperature.",
        "At this point, particles have the minimum possible energy.",
        "The scale is named after a Scottish physicist.",
        "Scotland is famous for its mountains and lakes.",
        "Scientists use the Kelvin scale because it avoids negative temperatures.",
      ],
      odd: 3,
      why: "Parça Kelvin sıcaklık ölçeğini anlatır. İskoçya'nın dağları ve gölleriyle ünlü olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Static electricity builds up when certain materials are rubbed together.",
        "Electrons move from one material to the other, leaving both charged.",
        "This is why a balloon rubbed on hair can stick to a wall.",
        "Children's parties often include balloons and games.",
        "On a larger scale, the same process causes lightning in storm clouds.",
      ],
      odd: 3,
      why: "Parça statik elektriği anlatır. Çocuk partilerinde sık sık balon ve oyun bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
