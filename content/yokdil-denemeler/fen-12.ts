import type { YokdilDeneme } from "./types";

export const FEN_12: YokdilDeneme = {
  no: 12,
  field: "fen",
  vocab: [
    [
      "The two scientists could not ---- the faint background noise picked up by their antenna, no matter where they pointed it.",
      ["eliminate", "record", "amplify", "describe", "hear"],
      "İki bilim insanının anteni nereye çevirirlerse çevirsinler alınan zayıf arka plan gürültüsünü 'ortadan kaldıramadığı' (eliminate) anlatılır.",
    ],
    [
      "The cloud is thought to ---- trillions of icy objects at the very edge of the solar system.",
      ["contain", "destroy", "orbit", "produce", "attract"],
      "Bulutun güneş sisteminin en ucunda trilyonlarca buzlu cismi 'içerdiği' (contain) düşünülür.",
    ],
    [
      "The rovers were designed to operate for ninety days, but one of them ---- for almost fifteen years.",
      ["survived", "rested", "disappeared", "paused", "failed"],
      "Gezginlerin doksan gün çalışmak üzere tasarlandığı ama birinin yaklaşık on beş yıl 'dayandığı/hayatta kaldığı' (survived) anlatılır.",
    ],
    [
      "Because the Earth's rotation is gradually slowing, the length of a day is increasing by a tiny but ---- amount.",
      ["measurable", "enormous", "invisible", "imaginary", "constant"],
      "Dünya'nın dönüşü yavaşladığı için gün uzunluğunun küçük ama 'ölçülebilir' (measurable) bir miktarda arttığı anlatılır.",
    ],
    [
      "The discovery that the expansion of the universe is speeding up was completely ---- by most astronomers.",
      ["unexpected", "predicted", "ignored", "welcomed", "repeated"],
      "Evrenin genişlemesinin hızlandığı keşfinin çoğu gökbilimci için tamamen 'beklenmedik' (unexpected) olduğu anlatılır.",
    ],
    [
      "A solar sail is pushed along by sunlight, so a spacecraft using one does not ---- fuel.",
      ["run out of", "look up to", "come up with", "put up with", "take part in"],
      "Güneş yelkeni güneş ışığıyla itildiği için uzay aracının yakıtının 'tükenmediği' (run out of) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The cosmic microwave background ---- by accident in 1964 by two engineers working in New Jersey.",
      ["was discovered", "discovered", "has discovered", "was discovering", "had discovered"],
      "Arka plan ışıması keşfedilen bir olgudur ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was discovered'.",
    ],
    [
      "If the dust had not been blown off its solar panels by the wind, the rover ---- working much earlier.",
      ["would have stopped", "would stop", "will stop", "stopped", "had stopped"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have + V3' ister.",
    ],
    [
      "By the time the two teams announced their results in 1998, they ---- dozens of distant exploding stars.",
      ["had observed", "have observed", "observe", "will observe", "were observed"],
      "Sonuçların açıklanmasından (geçmiş) önce tamamlanmış eylem: Past Perfect 'had observed'.",
    ],
    [
      "Oort, ---- name is given to the distant cloud of comets, was a Dutch astronomer.",
      ["whose", "who", "which", "whom", "where"],
      "İsim Oort'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until the 1960s ---- possible to measure time more accurately than the Earth's rotation.",
      ["did it become", "it became", "became it", "it did become", "did become it"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur: 'did it become'.",
    ],
    [
      "The signal was so faint ---- the scientists first thought it was caused by their equipment.",
      ["that", "which", "as", "such", "than"],
      "'so faint that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- no one has ever observed the Oort cloud directly, most astronomers believe it exists.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Bulutun doğrudan gözlemlenmemesi ile çoğu gökbilimcinin varlığına inanması zıttır: 'Although'.",
    ],
    [
      "Scientists ---- job was to drive the rovers had to plan each move a day in advance.",
      ["whose", "who", "which", "whom", "where"],
      "Görev bilim insanlarına aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "The light from distant galaxies is known ---- by the gravity of massive objects in its path.",
      ["to be bent", "to bend", "bending", "to have bent", "being bent"],
      "Işık bükülen bir şeydir ve genel bir olgu anlatılır: 'be known to be + V3'.",
    ],
    [
      "The sail is extremely thin ---- light, which allows it to be pushed by sunlight.",
      ["and", "but", "or", "unless", "so that"],
      "İki özellik birbirine eklenir: 'and'.",
    ],
    [
      "Comets ---- from the Oort cloud may take millions of years to complete a single orbit.",
      ["coming", "come", "came", "to come", "have come"],
      "Kuyruklu yıldızlar gelen (etken) varlıklardır; etken anlamlı şimdiki zaman ortacı 'coming' gerekir.",
    ],
    [
      "Engineers added an extra second to the clocks ---- they would stay in step with the Earth's rotation.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The distant galaxy appeared in the image as if it ---- stretched into a ring.",
      ["had been", "is", "will be", "has been", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır ve önceki bir duruma gönderme yapılır: 'had been'.",
    ],
    [
      "The faster the universe expands, ---- galaxies move away from one another.",
      ["the more quickly", "more quickly", "the most quickly", "quicker more", "the quickest"],
      "'The faster …, the more quickly …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1964, Arno Penzias and Robert Wilson, two radio astronomers at Bell Laboratories in New Jersey, were preparing a large horn-shaped antenna for observations. They kept detecting a faint, steady hiss of microwave radiation {1} seemed to come equally from every direction in the sky, day and night. At first they assumed that the problem was caused by their equipment. They checked every part of it and even removed a pair of pigeons {2} had been nesting inside the antenna, together with what they politely described as 'white dielectric material'. {3}, the noise remained. At the same time, a group of physicists at nearby Princeton University had been predicting {4} the Big Bang, if it had happened, should have left behind a faint glow of radiation filling the universe. When the two groups learned of each other's work, they realised that Penzias and Wilson had found exactly this signal. The discovery provided strong evidence for the Big Bang theory, {5} the idea that the universe had always existed in the same state became much harder to defend. Penzias and Wilson were awarded the Nobel Prize in Physics in 1978.",
      blanks: [
        [
          "(21) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'microwave radiation' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(22) ----",
          ["that", "where", "what", "whose", "when"],
          "Boşluk 'a pair of pigeons' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(23) ----",
          ["Nevertheless", "Therefore", "Similarly", "For example", "In addition"],
          "Her şeyi kontrol etmelerine rağmen gürültünün sürmesi karşıtlıktır: 'Nevertheless'.",
        ],
        [
          "(24) ----",
          ["that", "what", "which", "whose", "whom"],
          "'predicting that …' yapısında isim cümlesi bağlacı 'that' gerekir.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Büyük Patlama'ya kanıt sağlanması ile rakip görüşün savunulmasının zorlaşması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Certain comets come back near the Sun every few years or decades, but others appear only once in thousands or even millions of years. In 1950, the Dutch astronomer Jan Oort studied the orbits of these long-period comets and noticed that many of them seemed to come from a very great distance, {1} that they arrived from all directions rather than along the flat plane in which the planets orbit. He proposed that the Sun is surrounded by a vast spherical cloud of icy objects, {2} extends perhaps a light-year or more into space. These objects are thought to be remnants from the birth of the planets and to have been thrown outwards by the gravity of the giant planets. {3} they are so far away, they are only weakly held by the Sun's gravity. Occasionally, the gravity of a passing star or of the galaxy itself disturbs their orbits, {4} some of them start to fall towards the Sun, where they heat up and develop the bright tails we see as comets. The Oort cloud has never been observed directly, {5} its objects are too small, dark and distant to be detected with current telescopes.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Kuyruklu yıldızların çok uzaktan gelmesi ve her yönden gelmesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'a vast spherical cloud' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(28) ----",
          ["Because", "Although", "Unless", "So that", "Until"],
          "Güneş'in çekim gücünün zayıf olmasının nedeni cisimlerin çok uzakta olmasıdır: 'Because'.",
        ],
        [
          "(29) ----",
          ["so", "although", "unless", "whereas", "until"],
          "Yörüngelerin bozulmasının sonucu bazı cisimlerin Güneş'e doğru düşmeye başlamasıdır; sonuç bildiren 'so' gerekir.",
        ],
        [
          "(30) ----",
          ["because", "although", "so that", "unless", "whereas"],
          "Bulutun hiç doğrudan gözlemlenmemesinin nedeni cisimlerin çok küçük, karanlık ve uzak olmasıdır: 'because'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the rovers were expected to last only three months, ----.",
      [
        "one kept working until 2018",
        "they landed on opposite sides of the planet in 2004",
        "each was about the size of a golf cart",
        "they were powered by solar panels on their upper surface",
        "scientists controlled them from a laboratory in California",
      ],
      "'Although' zıtlık ister: gezginlerin yalnızca üç ay dayanması beklense de biri 2018'e kadar Mars'ı keşfetmeyi sürdürdü.",
    ],
    [
      "If leap seconds were abolished, ----.",
      [
        "clocks would slowly drift",
        "the Earth had rotated more slowly",
        "most computers will stop working",
        "atomic clocks were very accurate",
        "the day is twenty-four hours long",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + yalın fiil' ister: saatler zamanla Dünya'nın dönüşünden giderek uzaklaşırdı.",
    ],
    [
      "The astronomers checked their results many times ----.",
      [
        "because the discovery seemed so surprising",
        "so that the universe would stop expanding",
        "although they were sure they had made a mistake",
        "unless other teams disagreed with them",
        "even if they had no data at all",
      ],
      "Gökbilimcilerin sonuçlarını defalarca kontrol etmesinin nedeni keşfin çok şaşırtıcı görünmesidir: 'because'.",
    ],
    [
      "Since the first leap second was added in 1972, ----.",
      [
        "more than twenty have been added",
        "astronomers had used the Sun to measure time",
        "most clocks would have been wrong",
        "the Earth will rotate faster",
        "few people noticed the change",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have been inserted'.",
    ],
    [
      "Unless a solar sail is extremely light, ----.",
      [
        "sunlight cannot push it with enough force",
        "the spacecraft would have used more fuel",
        "most sails had been made of plastic",
        "the Sun will become brighter",
        "the mission was a success",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: güneş ışığı onu yeterli kuvvetle itemez.",
    ],
    [
      "The rovers discovered rocks that had clearly formed in water, so they ----.",
      [
        "suggested that Mars was once wetter",
        "showed that there had never been water on the planet",
        "proved that life still exists on the surface of Mars",
        "were unable to continue their journey across the planet",
        "had to return to Earth with samples of the rocks",
      ],
      "Suda oluşmuş kayaların bulunmasının sonucu Mars'ın bir zamanlar bugünkünden daha ıslak olduğuna kanıt sağlamasıdır.",
    ],
    [
      "Astronomers have found that when light from a distant galaxy passes a massive cluster of galaxies, ----.",
      [
        "it can be bent and magnified",
        "the cluster would have disappeared",
        "most galaxies had been very small",
        "the light will stop completely",
        "the galaxy was very bright",
      ],
      "'when' ile genel bir bulgu anlatılır: uzak bir gökadanın ışığı büyük bir gökada kümesinin yanından geçtiğinde bükülüp büyütülebilir.",
    ],
    [
      "So small is the force of sunlight on a solar sail ----.",
      [
        "that the craft gains speed slowly",
        "because light particles have no mass",
        "although it can push the craft for many years",
        "while the sail is made of a very thin material",
        "unless the spacecraft is very close to the Sun",
      ],
      "Devrik 'So small is … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While short-period comets usually orbit close to the plane of the planets, ----.",
      [
        "long-period comets can arrive from any direction",
        "comets are made of ice, dust and rock",
        "Halley's comet returns about every seventy-six years",
        "the Sun is at the centre of the solar system",
        "some comets have been visited by spacecraft",
      ],
      "'While' iki türü karşılaştırır: kısa dönemli kuyruklu yıldızlar gezegenlerin düzlemine yakın dolanırken uzun dönemliler her yönden gelebilir.",
    ],
    [
      "Once the two groups of scientists had compared their findings, ----.",
      [
        "they understood the true meaning of the signal",
        "the pigeons will return to the antenna",
        "the noise would have stopped",
        "the universe is expanding",
        "most scientists had rejected the Big Bang",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: sinyalin gerçek anlamını anladılar.",
    ],
    [
      "No sooner had the spacecraft unfolded its sail ----.",
      [
        "than it began to accelerate slowly",
        "when it had been launched",
        "that the mission will end",
        "before it had left the Earth",
        "so it changed direction",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The radiation seemed to come equally from every direction in the sky.",
      [
        "Işıma, gökyüzündeki her yönden eşit olarak geliyor gibi görünüyordu.",
        "Işıma yalnızca gökyüzünün tek bir bölgesinden geliyordu.",
        "Gökyüzündeki her yön, ışımanın farklı bir türünü üretiyordu.",
        "Işımanın hangi yönden geldiği kesin olarak belirlenmişti.",
        "Gökyüzündeki ışıma, gece olduğunda tamamen kayboluyordu.",
      ],
      "'seemed to come equally from every direction in the sky' 'gökyüzündeki her yönden eşit olarak geliyor gibi görünüyordu' demektir.",
    ],
    [
      "The objects in the cloud are only weakly held by the Sun's gravity.",
      [
        "Buluttaki cisimler, Güneş'in çekim gücü tarafından ancak zayıf bir şekilde tutulur.",
        "Buluttaki cisimler, Güneş'in çekim gücü tarafından çok güçlü bir şekilde tutulur.",
        "Güneş'in çekim gücü, buluttaki cisimler tarafından zayıflatılır.",
        "Buluttaki cisimlerin Güneş'in çekim gücüyle hiçbir ilişkisi yoktur.",
        "Güneş, buluttaki cisimleri kendine doğru hızla çeker.",
      ],
      "'are only weakly held by the Sun's gravity' 'Güneş'in çekim gücü tarafından ancak zayıf bir şekilde tutulur' demektir.",
    ],
    [
      "Wind occasionally cleaned the dust from the rovers' solar panels, giving them extra power.",
      [
        "Rüzgâr zaman zaman gezginlerin güneş panellerindeki tozu temizleyerek onlara ek güç sağladı.",
        "Rüzgâr, gezginlerin güneş panellerini tozla kaplayarak güçlerini azalttı.",
        "Gezginler, güneş panellerindeki tozu temizlemek için rüzgâr üretti.",
        "Güneş panelleri, rüzgârın tozu temizlemesini engelledi.",
        "Toz, gezginlerin güneş panellerine hiçbir zaman zarar vermedi.",
      ],
      "'occasionally cleaned the dust from the rovers' solar panels' 'zaman zaman gezginlerin güneş panellerindeki tozu temizledi', 'giving them extra power' 'onlara ek güç sağlayarak' demektir.",
    ],
    [
      "Atomic clocks are far more stable than the rotation of the Earth.",
      [
        "Atom saatleri, Dünya'nın dönüşünden çok daha kararlıdır.",
        "Dünya'nın dönüşü, atom saatlerinden çok daha kararlıdır.",
        "Atom saatleri, Dünya'nın dönüşünü hızlandırmak için kullanılır.",
        "Dünya'nın dönüşü ile atom saatleri aynı derecede kararsızdır.",
        "Atom saatleri, Dünya döndükçe daha az kararlı hâle gelir.",
      ],
      "'are far more stable than the rotation of the Earth' 'Dünya'nın dönüşünden çok daha kararlıdır' demektir.",
    ],
    [
      "The nature of the force that is accelerating the universe remains unknown.",
      [
        "Evreni hızlandıran kuvvetin doğası hâlâ bilinmemektedir.",
        "Evreni hızlandıran kuvvetin doğası kesin olarak açıklanmıştır.",
        "Evren, bilinmeyen bir kuvvet tarafından yavaşlatılmaktadır.",
        "Evrenin hızlanması, bilinen tüm kuvvetleri ortadan kaldırmıştır.",
        "Evreni hızlandıran bir kuvvet bulunmadığı kanıtlanmıştır.",
      ],
      "'The nature of the force that is accelerating the universe' 'evreni hızlandıran kuvvetin doğası', 'remains unknown' 'hâlâ bilinmemektedir' demektir.",
    ],
    [
      "Although the push from sunlight is tiny, it never stops.",
      [
        "Güneş ışığının itme kuvveti çok küçük olsa da hiç durmaz.",
        "Güneş ışığının itme kuvveti çok büyük olduğu için kısa sürede durur.",
        "Güneş ışığı itmeyi bıraktığında kuvvet küçülür.",
        "Güneş ışığının itme kuvveti, küçük olduğu için hiçbir etki yaratmaz.",
        "Güneş ışığı yalnızca geceleri itme kuvveti uygular.",
      ],
      "'Although the push from sunlight is tiny' 'güneş ışığının itme kuvveti çok küçük olsa da', 'it never stops' 'hiç durmaz' demektir.",
    ],
  ],
  trEn: [
    [
      "Kozmik mikrodalga arka plan ışıması, Büyük Patlama kuramını güçlü bir şekilde destekler.",
      [
        "The cosmic microwave background strongly supports the Big Bang theory.",
        "The cosmic microwave background proves that the Big Bang never happened.",
        "The Big Bang theory was developed to explain the noise in radio antennas.",
        "The cosmic microwave background has nothing to do with the Big Bang.",
        "The Big Bang theory was abandoned after the radiation was discovered.",
      ],
      "'Büyük Patlama kuramını güçlü bir şekilde destekler' 'strongly supports the Big Bang theory' karşılığıdır.",
    ],
    [
      "Uzun dönemli kuyruklu yıldızlar, Güneş'in etrafındaki tek bir turu milyonlarca yılda tamamlayabilir.",
      [
        "Long-period comets may take millions of years to complete a single orbit of the Sun.",
        "Long-period comets complete an orbit of the Sun every few years.",
        "The Sun takes millions of years to orbit long-period comets.",
        "Long-period comets never orbit the Sun.",
        "Short-period comets take millions of years to orbit the Sun.",
      ],
      "'tek bir turu milyonlarca yılda tamamlayabilir' 'may take millions of years to complete a single orbit' karşılığıdır.",
    ],
    [
      "Gezginler, Mars'ın bir zamanlar sıvı suya sahip olduğuna dair kanıtlar buldu.",
      [
        "The rovers found evidence that Mars once had liquid water.",
        "The rovers found liquid water flowing on Mars today.",
        "The rovers proved that Mars has never had any water.",
        "Liquid water prevented the rovers from moving on Mars.",
        "The rovers brought liquid water back from Mars.",
      ],
      "'Mars'ın bir zamanlar sıvı suya sahip olduğuna dair kanıtlar buldu' 'found evidence that Mars once had liquid water' karşılığıdır.",
    ],
    [
      "Dünya'nın dönüşü, Ay'ın çekim etkisi nedeniyle yavaşlamaktadır.",
      [
        "The Earth's rotation is slowing down because of the Moon's gravitational effect.",
        "The Earth's rotation is speeding up because of the Moon's gravitational effect.",
        "The Moon's rotation is slowing down because of the Earth.",
        "The Moon has no effect on the rotation of the Earth.",
        "The Earth's rotation stopped because of the Moon.",
      ],
      "'Ay'ın çekim etkisi nedeniyle' 'because of the Moon's gravitational effect', 'yavaşlamaktadır' 'is slowing down' karşılığıdır.",
    ],
    [
      "Evrenin genişlemesi, beklenenin aksine hızlanmaktadır.",
      [
        "Contrary to expectations, the expansion of the universe is accelerating.",
        "As expected, the expansion of the universe is slowing down.",
        "The universe has stopped expanding, contrary to expectations.",
        "Scientists expected the universe to expand faster than it does.",
        "The expansion of the universe has never been measured.",
      ],
      "'beklenenin aksine' 'contrary to expectations', 'hızlanmaktadır' 'is accelerating' karşılığıdır.",
    ],
    [
      "Güneş yelkenleri, uzay araçlarının yakıt kullanmadan hareket etmesini sağlar.",
      [
        "Solar sails allow spacecraft to move without using fuel.",
        "Solar sails require spacecraft to use large amounts of fuel.",
        "Spacecraft use fuel to open their solar sails.",
        "Solar sails can only be used on the surface of the Earth.",
        "Solar sails prevent spacecraft from moving in space.",
      ],
      "'yakıt kullanmadan hareket etmesini sağlar' 'allow … to move without using fuel' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In January 2004, two NASA rovers named Spirit and Opportunity landed on opposite sides of Mars. Each was about the size of a golf cart, powered by solar panels and equipped with cameras and instruments for analysing rocks. Their main task was to search for evidence that water had once existed on the surface. They were designed to operate for about ninety days, as engineers expected dust settling on their solar panels to reduce their power gradually. Unexpectedly, however, gusts of wind occasionally cleaned the panels, allowing both rovers to keep working far longer than planned. Opportunity found small round grains rich in a mineral that forms in water, as well as layered rocks that appeared to have been shaped by flowing water, strong evidence that parts of Mars were once wet. Spirit continued until 2009, when it became stuck in soft sand, and it lost contact with Earth the following year. Opportunity travelled more than forty-five kilometres before a huge dust storm in 2018 covered its panels and it fell silent. Its last message, sent as the storm darkened the sky, was reported in the media as 'My battery is low and it's getting dark', although this was a poetic interpretation of the data rather than its actual words.",
      questions: [
        [
          "According to the passage, the rovers were expected to have a short life because ----.",
          [
            "dust was likely to cover their solar panels",
            "they were too small to survive the cold",
            "their batteries could not be recharged",
            "the wind on Mars was too strong",
            "they were designed to find water quickly",
          ],
          "Metne göre mühendisler güneş panellerine çöken tozun gücü giderek azaltmasını bekliyordu.",
        ],
        [
          "It can be understood from the passage that Opportunity ----.",
          [
            "found signs that water had once been present on Mars",
            "became stuck in soft sand in 2009",
            "discovered living organisms in the rocks",
            "returned samples of rock to Earth",
            "stopped working after ninety days",
          ],
          "Metinde Opportunity'nin suda oluşan mineral açısından zengin taneler ve akan suyla şekillenmiş katmanlı kayalar bulduğu belirtilir.",
        ],
        [
          "The writer mentions that the rover's 'last message' was a poetic interpretation in order to ----.",
          [
            "clarify that the rover did not actually send those words",
            "show that the rover could communicate in English",
            "explain why the dust storm happened",
            "suggest that the media had made a mistake about the date",
            "prove that the rover was still working",
          ],
          "Mesajın verilerin şiirsel bir yorumu olduğu ve gerçek sözcükler olmadığı belirtilerek gezginin bu sözleri göndermediği açıklanır.",
        ],
      ],
    },
    {
      text:
        "For most of history, the day was defined by the rotation of the Earth, and clocks were set according to the position of the Sun. In the twentieth century, however, scientists discovered that the Earth does not rotate at a perfectly steady rate. The main reason is the Moon: its gravity raises tides in the oceans, and the friction of the moving water acts like a brake, gradually slowing the planet's spin. As a result, the day is becoming longer by about two thousandths of a second every century. Other factors, such as movements in the Earth's core, melting ice and earthquakes, can also cause small changes. In 1967, scientists redefined the second using the vibrations of caesium atoms in atomic clocks, which are far more stable than the Earth's rotation. This created a problem: clocks based on atoms gradually drifted away from time based on the Sun. To solve it, an extra 'leap second' has been added to the world's clocks from time to time since 1972. However, leap seconds can cause problems for computer systems, satellite navigation and financial markets, which depend on precise timing, and in 2022 international authorities agreed to stop adding them by 2035.",
      questions: [
        [
          "According to the passage, the Moon slows the Earth's rotation by ----.",
          [
            "creating tides whose friction acts as a brake",
            "blocking sunlight from reaching the Earth",
            "causing earthquakes in the Earth's core",
            "melting the ice at the poles",
            "changing the vibrations of atoms",
          ],
          "Metne göre Ay'ın çekim gücü okyanuslarda gelgitlere yol açar ve hareket eden suyun sürtünmesi bir fren gibi davranır.",
        ],
        [
          "Leap seconds were introduced in order to ----.",
          [
            "keep atomic time in step with the Earth's rotation",
            "make the Earth rotate more steadily",
            "help computer systems work faster",
            "measure the distance to the Moon",
            "replace atomic clocks",
          ],
          "Atom saatlerinin Güneş'e dayalı zamandan uzaklaşması sorununu çözmek için zaman zaman artık saniye eklenmiştir.",
        ],
        [
          "It can be inferred from the passage that the decision to stop adding leap seconds ----.",
          [
            "was partly motivated by the difficulties they cause for technology",
            "was taken because the Earth has stopped slowing down",
            "was opposed by computer engineers",
            "will make the day shorter",
            "was made in 1972",
          ],
          "Artık saniyelerin bilgisayar sistemleri, uydu navigasyonu ve finans piyasaları için sorun yaratması, kararın kısmen bu teknolojik zorluklardan kaynaklandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "Since the 1920s, astronomers have known that the universe is expanding, with distant galaxies moving away from one another. For decades, most assumed that this expansion must be slowing down, because the gravity of all the matter in the universe should act as a brake. The only question seemed to be how quickly it was slowing. In the 1990s, two independent teams of astronomers set out to measure this by studying a particular type of exploding star, or supernova, which always reaches roughly the same brightness and can therefore be used to calculate distances. To their surprise, both teams found that the most distant supernovae were fainter, and therefore further away, than expected. This meant that the expansion of the universe was not slowing down but speeding up. The results, announced in 1998, were at first met with disbelief, but they were soon confirmed by other observations. Scientists now believe that some unknown form of energy, called 'dark energy', makes up around seventy per cent of the universe and is driving the acceleration. Its nature remains one of the greatest mysteries in physics. The leaders of the two teams were awarded the Nobel Prize in 2011.",
      questions: [
        [
          "According to the passage, before the 1990s most astronomers believed that ----.",
          [
            "the expansion of the universe was gradually slowing",
            "the universe was not expanding at all",
            "the expansion was speeding up",
            "galaxies were moving towards one another",
            "dark energy made up most of the universe",
          ],
          "Metne göre on yıllar boyunca çoğu gökbilimci evrendeki maddenin çekim gücünün bir fren gibi davranacağını ve genişlemenin yavaşladığını varsaydı.",
        ],
        [
          "The writer explains that the supernovae used in the study ----.",
          [
            "can be used to measure distances because of their predictable brightness",
            "are found only in nearby galaxies",
            "were discovered for the first time in 1998",
            "produce dark energy when they explode",
            "are brighter when they are further away",
          ],
          "Metinde bu süpernovaların her zaman kabaca aynı parlaklığa ulaştığı ve bu nedenle uzaklık hesaplamada kullanılabildiği belirtilir.",
        ],
        [
          "It can be understood from the passage that dark energy ----.",
          [
            "is still poorly understood by scientists",
            "was discovered before the universe was known to expand",
            "makes up only a small part of the universe",
            "slows down the expansion of the universe",
            "has been observed directly with telescopes",
          ],
          "Karanlık enerjinin doğasının fizikteki en büyük gizemlerden biri olarak kalması, bilim insanlarınca hâlâ iyi anlaşılmadığını gösterir.",
        ],
      ],
    },
    {
      text:
        "According to Einstein's general theory of relativity, published in 1915, massive objects bend the space around them, and light passing close to them follows a curved path. Einstein predicted that starlight passing near the Sun would be deflected by a small but measurable amount. This prediction could only be tested during a total solar eclipse, when the Sun's light is blocked and nearby stars become visible. In 1919, the British astronomer Arthur Eddington led expeditions to Brazil and to an island off the coast of West Africa to photograph the stars during an eclipse. The positions of the stars were slightly shifted, as Einstein had predicted, and the results made him world-famous. Today, this effect, known as gravitational lensing, has become a powerful tool for astronomers. When light from a distant galaxy passes a massive cluster of galaxies on its way to Earth, it can be bent and magnified, sometimes producing multiple images of the same galaxy or stretching it into an arc or a ring. Because the amount of bending depends on the total mass of the cluster, including matter that cannot be seen, lensing has also provided some of the strongest evidence for the existence of dark matter.",
      questions: [
        [
          "According to the passage, Einstein's prediction could only be tested during an eclipse because ----.",
          [
            "stars near the Sun can only be seen when its light is blocked",
            "the Sun's gravity disappears during an eclipse",
            "light travels faster during an eclipse",
            "Eddington could only travel at that time",
            "the Moon bends light more than the Sun",
          ],
          "Metne göre bu ancak Güneş'in ışığı engellendiğinde ve yakındaki yıldızlar görünür olduğunda sınanabilirdi.",
        ],
        [
          "The writer mentions arcs and rings in order to describe ----.",
          [
            "how lensing can distort the images of distant galaxies",
            "the shape of the Sun during an eclipse",
            "the routes of Eddington's expeditions",
            "how stars are formed",
            "the orbits of planets around the Sun",
          ],
          "Yay ve halkalardan söz edilmesi, kütleçekimsel merceklenmenin uzak gökadaların görüntülerini nasıl bozabildiğini anlatır.",
        ],
        [
          "It can be inferred from the passage that gravitational lensing helps to reveal dark matter because ----.",
          [
            "the bending of light depends on mass that cannot be seen directly",
            "dark matter produces its own light",
            "dark matter can be photographed during eclipses",
            "lensing only occurs where there is no matter",
            "Einstein discovered dark matter in 1919",
          ],
          "Bükülmenin görülemeyen madde de dahil kümenin toplam kütlesine bağlı olması, merceklenmenin karanlık maddeyi ortaya çıkarmaya yardım ettiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "A solar sail is a large, extremely thin sheet of reflective material that uses the pressure of sunlight to propel a spacecraft. Although light has no mass, it carries momentum, and when it bounces off a mirror-like surface it gives the surface a tiny push. The force on a single square metre of sail is about the weight of a grain of sand, but because it acts continuously and there is no air resistance in space, a spacecraft using a sail can gradually reach very high speeds without carrying any fuel. The idea was proposed in the early twentieth century, but it was first successfully demonstrated only in 2010, when the Japanese spacecraft IKAROS unfolded a square sail about twenty metres across on its way towards Venus. Since then, several small sails have been tested in orbit around the Earth. Engineers face considerable challenges: the sails must be large but light, strong enough to unfold without tearing, and able to survive radiation and extreme temperatures. Some scientists have proposed that in the distant future, tiny probes attached to sails could be pushed by powerful lasers on Earth to reach nearby stars within a few decades.",
      questions: [
        [
          "According to the passage, a solar sail works because ----.",
          [
            "light gives a small push when it is reflected",
            "sunlight contains a special fuel",
            "air in space pushes against the sail",
            "the sail is heated by the Sun",
            "light has a large mass",
          ],
          "Metne göre ışığın kütlesi olmasa da momentumu vardır ve ayna gibi bir yüzeyden sektiğinde yüzeye küçük bir itme verir.",
        ],
        [
          "The writer compares the force on the sail to the weight of a grain of sand in order to show ----.",
          [
            "how weak the force is",
            "how heavy the sail is",
            "what the sail is made of",
            "how sand is used in space",
            "why the sail tears easily",
          ],
          "Kuvvetin bir kum tanesinin ağırlığına benzetilmesi, ne kadar zayıf olduğunu göstermek içindir.",
        ],
        [
          "It can be understood from the passage that sending probes to other stars using sails ----.",
          [
            "is a possibility for the distant future",
            "has already been achieved by IKAROS",
            "is impossible according to all scientists",
            "requires large amounts of fuel",
            "was first attempted in 2010",
          ],
          "Bazı bilim insanlarının uzak gelecekte lazerlerle itilen küçük sondaların yakın yıldızlara ulaşabileceğini önermesi, bunun uzak gelecek için bir olasılık olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Most spacecraft use chemical rockets, which produce a powerful thrust for a short time. ---- Although the push they produce is very gentle, they can operate for months or years and use far less fuel.",
      [
        "Ion engines, by contrast, accelerate charged particles using electricity.",
        "The first rockets were developed in China many centuries ago.",
        "Launching a spacecraft into orbit is extremely expensive.",
        "Many satellites orbit the Earth at a height of several hundred kilometres.",
        "Fuel makes up most of the weight of a rocket at launch.",
      ],
      "Boşluktan sonra 'they' ile çok hafif itme üreten ama aylarca çalışabilen motorlardan söz edilir; boşluğa kimyasal roketlerle karşıtlık oluşturan iyon motorlarını tanıtan cümle gelmelidir.",
    ],
    [
      "Lagrange points are places in space where the gravity of two large bodies, such as the Sun and the Earth, balances the motion of a smaller object. ---- For this reason, several space telescopes have been placed at one of them.",
      [
        "A spacecraft placed there can stay in the same position relative to both bodies with little fuel.",
        "Sunlight takes roughly eight minutes to reach our planet.",
        "Joseph-Louis Lagrange was a mathematician who lived in the eighteenth century.",
        "Telescopes on Earth are affected by clouds and light pollution.",
        "Gravity is the weakest of the four fundamental forces of nature.",
      ],
      "Boşluktan sonra 'For this reason' ile uzay teleskoplarının bu noktalardan birine yerleştirildiği söylenir; boşluğa oraya konan bir aracın az yakıtla iki cisme göre aynı konumda kalabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Because the Moon takes the same time to rotate on its axis as it does to orbit the Earth, the same side always faces us. ---- It was not seen until 1959, when a Soviet spacecraft photographed it.",
      [
        "The other side, often called the far side, cannot be seen from Earth.",
        "The Moon's surface is covered with craters formed by impacts.",
        "Many cultures have told stories about the face in the Moon.",
        "The Moon is moving slowly away from the Earth every year.",
        "Astronauts first landed on the Moon ten years later.",
      ],
      "Boşluktan sonra 'It' ile 1959'a kadar görülmeyen bir yüzden söz edilir; boşluğa diğer yüzün Dünya'dan görülemediğini söyleyen cümle gelmelidir.",
    ],
    [
      "When a star like the Sun runs out of hydrogen in its core, it expands to many times its original size. ---- Eventually, it throws off its outer layers, leaving behind a small, hot core called a white dwarf.",
      [
        "At this stage, it is known as a red giant.",
        "The Sun is about four and a half billion years old.",
        "Hydrogen is the most common element in the universe.",
        "Stars are often grouped into constellations.",
        "Some stars are much larger than the Sun.",
      ],
      "Boşluktan önce yıldızın genişlediği, sonra dış katmanlarını attığı anlatılır; boşluğa bu aşamada kırmızı dev olarak adlandırıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "The Andromeda galaxy is the nearest large galaxy to our own. ---- Astronomers calculate that the two galaxies will collide in about four billion years.",
      [
        "It is moving towards the Milky Way at around a hundred kilometres per second.",
        "It can be seen with the naked eye on a clear, dark night.",
        "It was named after a princess in Greek mythology.",
        "Galaxies contain billions of stars, as well as gas and dust.",
        "Telescopes have become much more powerful in recent decades.",
      ],
      "Boşluktan sonra iki gökadanın dört milyar yıl içinde çarpışacağı söylenir; boşluğa Andromeda'nın Samanyolu'na doğru saniyede yaklaşık yüz kilometre hızla ilerlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "A nebula is a vast cloud of gas and dust in space. ---- For this reason, nebulae are often described as stellar nurseries.",
      [
        "Within some of them, gravity pulls material together to form new stars.",
        "Some nebulae can be seen with small telescopes.",
        "Photographs of nebulae are often brightly coloured.",
        "The word 'nebula' comes from the Latin for 'cloud'.",
        "Space is almost completely empty between the stars.",
      ],
      "Boşluktan sonra 'For this reason' ile bulutsuların yıldız kreşi olarak tanımlandığı söylenir; boşluğa bazılarında kütleçekimin maddeyi bir araya getirerek yeni yıldızlar oluşturduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Meteor showers occur when the Earth passes through a trail of dust left by a comet.",
        "The particles burn up in the atmosphere, producing streaks of light.",
        "Many people enjoy camping in the countryside during the summer.",
        "Some showers produce dozens of meteors an hour.",
        "They are best seen from dark places, far from city lights.",
      ],
      odd: 2,
      why: "Parça meteor yağmurlarını anlatır. İnsanların yazın kırsalda kamp yapmaktan hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Olympus Mons on Mars is the largest known volcano in the solar system.",
        "It is about two and a half times as high as Mount Everest.",
        "Mount Everest was first climbed in 1953.",
        "Its huge size is partly explained by the lack of moving plates on Mars.",
        "Lava could build up in the same place for millions of years.",
      ],
      odd: 2,
      why: "Parça Mars'taki Olympus Mons volkanını anlatır. Everest'e ilk kez 1953'te tırmanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Saturn's rings are made mostly of pieces of water ice.",
        "They range in size from tiny grains to blocks as large as houses.",
        "Although the rings are hundreds of thousands of kilometres wide, they are mostly only tens of metres thick.",
        "Some scientists believe that they formed relatively recently.",
        "Ice skating is a popular winter sport in many countries.",
      ],
      odd: 4,
      why: "Parça Satürn'ün halkalarını anlatır. Buz patenin popüler bir kış sporu olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Radio telescopes detect radio waves rather than visible light.",
        "Because radio waves are very long, the telescopes must be very large.",
        "Several dishes can also be linked together to act like one giant telescope.",
        "Many people listen to the radio while driving.",
        "This technique was used to produce the first image of a black hole.",
      ],
      odd: 3,
      why: "Parça radyo teleskoplarını anlatır. İnsanların araba kullanırken radyo dinlediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Astronauts lose bone and muscle mass during long stays in space.",
        "This happens because their bodies no longer have to work against gravity.",
        "Food in space is often sealed in special packets.",
        "To reduce the effect, astronauts exercise for around two hours every day.",
        "Even so, they may need weeks to recover after returning to Earth.",
      ],
      odd: 2,
      why: "Parça astronotların uzayda kemik ve kas kaybını anlatır. Uzayda yiyeceklerin özel paketlerde saklandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The asteroid belt lies between the orbits of Mars and Jupiter.",
        "Jupiter has dozens of moons, the largest of which is bigger than Mercury.",
        "It contains millions of rocky objects of different sizes.",
        "Despite their number, the asteroids are spread out over a huge area.",
        "Spacecraft can therefore pass through the belt without much risk of collision.",
      ],
      odd: 1,
      why: "Parça asteroit kuşağını anlatır. Jüpiter'in uyduları hakkında bilgi veren II. cümle konu dışıdır.",
    },
  ],
};
