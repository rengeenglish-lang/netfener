import type { YokdilDeneme } from "./types";

export const FEN_93: YokdilDeneme = {
  no: 93,
  field: "fen",
  vocab: [
    [
      "After the failure of its previous lander, the agency made the new one far more ---- to errors in speed and position.",
      ["tolerant", "fragile", "sensitive", "hostile", "similar"],
      "Önceki iniş aracının başarısızlığından sonra ajansın yenisini hız ve konum hatalarına karşı çok daha 'dayanıklı, toleranslı' (tolerant) yaptığı anlatılır.",
    ],
    [
      "The probe's heat shield allows its instruments to remain at room temperature despite the ---- heat of the Sun.",
      ["intense", "mild", "gentle", "slight", "absent"],
      "Sondanın ısı kalkanının Güneş'in 'yoğun, şiddetli' (intense) ısısına rağmen aletlerin oda sıcaklığında kalmasını sağladığı anlatılır.",
    ],
    [
      "The spacecraft's sensitive electronics are housed in a titanium box to ---- them from radiation.",
      ["protect", "expose", "remove", "separate", "release"],
      "Aracın hassas elektroniğinin radyasyondan 'korunması' (protect) için titanyum bir kutuya yerleştirildiği anlatılır.",
    ],
    [
      "Engineers had to ---- a new plan when the main engine failed to fire properly.",
      ["devise", "abandon", "forget", "copy", "ignore"],
      "Ana motor düzgün ateşlenmeyince mühendislerin yeni bir plan 'tasarlamak, geliştirmek' (devise) zorunda kaldığı anlatılır.",
    ],
    [
      "The mission was completed at a ---- of the cost of similar missions launched by other countries.",
      ["fraction", "multiple", "peak", "loss", "rate"],
      "Görevin diğer ülkelerin benzer görevlerinin maliyetinin 'küçük bir kısmıyla' (fraction) tamamlandığı anlatılır.",
    ],
    [
      "When dust storms reduced the sunlight reaching its solar panels, the rover had to ---- its activities.",
      ["cut back on", "look up to", "put up with", "get away with", "come up with"],
      "Toz fırtınaları güneş panellerine ulaşan ışığı azaltınca gezginin etkinliklerini 'azaltmak' (cut back on) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the probe reached the planet, it ---- through space for almost five years.",
      ["had been travelling", "travels", "has travelled", "will travel", "is travelling"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been travelling'.",
    ],
    [
      "If the valve had not failed, the spacecraft ---- into orbit around Venus in 2010.",
      ["would have gone", "goes", "will go", "had gone", "is going"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin ana yan cümlesi: 'would have gone'.",
    ],
    [
      "The rover ---- into a state of hibernation when the Martian winter began.",
      ["was put", "put", "has put", "puts", "is putting"],
      "Gezgin kendini değil, mühendisler onu kış uykusuna sokmuştur; edilgen geçmiş zaman: 'was put'.",
    ],
    [
      "---- it travels closer to the Sun than any previous spacecraft, the probe's instruments stay cool.",
      ["Although", "Because", "Unless", "So that", "Until"],
      "Sondanın Güneş'e çok yaklaşması ile aletlerinin serin kalması zıtlık bildirir: 'Although'.",
    ],
    [
      "The engineer ---- team designed the heat shield was honoured for the work.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin ekibi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Rarely ---- a country succeeded in reaching Mars orbit on its very first attempt.",
      ["has", "did", "was", "is", "does"],
      "'Rarely' ile başlayan cümlede devrik yapı, 'succeeded' ortacı ile yardımcı fiil: 'has'.",
    ],
    [
      "The region ---- the lander touched down lies near the Moon's south pole.",
      ["where", "which", "whose", "when", "what"],
      "'The region' yer bildirir ve ilgi cümlesinde yer zarfı görevi görür: 'where'.",
    ],
    [
      "The closer the probe gets to the Sun, ---- it travels.",
      ["the faster", "the fastest", "faster", "fastest", "so fast"],
      "'The more ..., the more ...' paralel yapısı: 'the faster'.",
    ],
    [
      "The scientists recommended that the spacecraft ---- into the planet at the end of the mission.",
      ["be steered", "is steered", "was steered", "to be steered", "steering"],
      "'recommend that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be steered'.",
    ],
    [
      "The rover is believed ---- covered by dust after it stopped communicating.",
      ["to have been", "being", "to be being", "was", "having"],
      "Geçmişte gerçekleşmiş durum için edilgen geçmiş mastar: 'to have been'.",
    ],
    [
      "The spacecraft was placed in a highly elliptical orbit ---- it would spend as little time as possible in the planet's radiation belts.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Aracın eliptik yörüngeye yerleştirilmesinin amacı radyasyon kuşaklarında az zaman geçirmesidir: 'so that'.",
    ],
    [
      "The agency had the lander's legs ---- after tests showed they might break on impact.",
      ["strengthened", "strengthen", "strengthening", "to strengthen", "strengthens"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'strengthened'.",
    ],
    [
      "Had the engineers given up in 2010, the spacecraft ---- its scientific work.",
      ["would never have begun", "has never begun", "will never begin", "had never begun", "never begins"],
      "Devrik üçüncü tip koşul cümlesinin ana yan cümlesi: 'would never have begun'.",
    ],
    [
      "Neither the orbiter nor its two companions ---- expected to last more than a few years.",
      ["were", "was", "has been", "is being", "be"],
      "'Neither ... nor' yapısında fiil yakındaki çoğul özneye (its two companions) uyar: 'were'.",
    ],
  ],
  cloze: [
    {
      text:
        "In November 2013, the Indian Space Research Organisation launched its first mission to Mars. The spacecraft, officially called the Mars Orbiter Mission but widely known as Mangalyaan, from the Sanskrit words for 'Mars craft', was relatively small, {1} its rocket was not powerful enough to send it directly towards the planet. Instead, the spacecraft spent almost a month in orbit around the Earth, firing its engine several times to raise its orbit step by step, {2} it finally escaped from the Earth's gravity and set out on its ten-month journey. In September 2014, it successfully entered orbit around Mars, {3} India became the first Asian country to reach the planet and the first country in the world to do so on its first attempt. The mission attracted particular attention because of its cost. At about seventy-four million dollars, it was cheaper than many Hollywood films about space, {4} it cost only a small fraction of the amount spent on comparable American missions. The engineers kept costs down by using existing designs and by building and testing the spacecraft in a very short time. The mission had been designed to last six months, {5} the spacecraft continued to send back images and data for about eight years, until contact was lost in 2022.",
      blanks: [
        [
          "(21) ----",
          ["and", "unless", "although", "or", "until"],
          "Aracın görece küçük olması ve roketin onu doğrudan Mars'a gönderecek güçte olmaması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["until", "although", "unless", "because", "or"],
          "Araç yörüngesini adım adım yükseltti ve sonunda Dünya'nın çekiminden kurtulana kadar bunu sürdürdü: 'until'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "so that"],
          "Mars yörüngesine girilmesi ve Hindistan'ın ilk olması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "until"],
          "Filmlerden ucuz olması ve Amerikan görevlerinin küçük bir kısmına mal olması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "because", "so", "unless", "or"],
          "Altı ay sürmesi planlanması ile sekiz yıl çalışması zıtlık bildirir: 'but'.",
        ],
      ],
    },
    {
      text:
        "In December 2010, a small Japanese spacecraft called Akatsuki, meaning 'dawn', approached Venus after a journey of six months. It was designed to study the planet's thick atmosphere, which rotates around the planet far faster than the planet itself, {1} scientists hoped to learn why. To enter orbit, the spacecraft needed to fire its main engine for twelve minutes to slow itself down, {2} a valve in its fuel system failed and the engine shut down after less than three minutes. Akatsuki flew past the planet and went into orbit around the Sun instead. The engineers did not give up. The main engine had been damaged, so they decided to use the much smaller thrusters normally used to control the spacecraft's direction. They also had to wait for the spacecraft and Venus to come close together again, {3} this would not happen for five years. In the meantime, the spacecraft travelled closer to the Sun than it had been designed to, {4} its instruments were exposed to more heat than expected. Finally, in December 2015, the thrusters were fired for twenty minutes, {5} Akatsuki entered orbit around Venus at the second attempt. It went on to study the planet for more than seven years and discovered an enormous wave in the clouds that stretched from pole to pole.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Atmosferin gezegenden hızlı dönmesi ve bilim insanlarının nedenini öğrenmeyi umması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["but", "because", "so", "unless", "or"],
          "Motorun on iki dakika çalışması gerekmesi ile vananın arızalanması zıtlık bildirir: 'but'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "so that"],
          "Yakınlaşmayı beklemek zorunda olmaları ve bunun beş yıl sürecek olması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["so", "although", "unless", "or", "until"],
          "Aracın Güneş'e tasarlandığından fazla yaklaşmasının sonucu aletlerin fazla ısıya maruz kalmasıdır: 'so'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "although", "or", "until"],
          "İticilerin ateşlenmesi ve aracın yörüngeye girmesi birbirini izler: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the previous lander had crashed on the Moon in 2019, ----.",
      [
        "the agency tried again with an improved design four years later",
        "the Moon has no atmosphere",
        "landers have legs",
        "India is a large country",
        "the agency decided never to send another spacecraft to the Moon",
      ],
      "'Although' zıtlık ister: önceki iniş aracı 2019'da Ay'a çakılmış olsa da ajans dört yıl sonra geliştirilmiş bir tasarımla yeniden denedi.",
    ],
    [
      "If the probe did not have a heat shield, ----.",
      [
        "its instruments would be destroyed by the Sun's heat",
        "the Sun is very hot",
        "the probe was launched in 2018",
        "heat shields are expensive",
        "it would be able to travel even closer to the Sun without any problems",
      ],
      "İkinci tip koşul: sondanın ısı kalkanı olmasaydı aletleri Güneş'in ısısıyla yok olurdu.",
    ],
    [
      "----, the spacecraft measured the positions of almost two billion stars.",
      [
        "Scanning the sky continuously for more than ten years",
        "Because stars are bright",
        "Unless it was switched off",
        "In spite of being in space",
        "Since astronomers had already mapped every star in the galaxy",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: on yıldan fazla gökyüzünü sürekli tarayan araç yaklaşık iki milyar yıldızın konumunu ölçtü.",
    ],
    [
      "Because Jupiter is surrounded by intense radiation, ----.",
      [
        "the spacecraft's electronics were placed inside a titanium vault",
        "Jupiter is the largest planet",
        "the spacecraft has solar panels",
        "radiation is invisible",
        "the spacecraft was designed to remain close to the planet at all times",
      ],
      "Neden-sonuç: Jüpiter yoğun radyasyonla çevrili olduğu için aracın elektroniği titanyum bir kasaya yerleştirildi.",
    ],
    [
      "The rover was designed to sleep through the Martian winter ----.",
      [
        "so that it could save energy until there was more sunlight",
        "because Mars is red",
        "although it had no solar panels",
        "unless it was summer",
        "since it had a nuclear power source that never ran out",
      ],
      "Amaç bildiren yapı: gezgin daha fazla güneş ışığı olana kadar enerji biriktirebilmek için Mars kışını uykuda geçirecek şekilde tasarlandı.",
    ],
    [
      "The lander touched down near the Moon's south pole, ----.",
      [
        "where scientists believe ice may be hidden in permanently shadowed craters",
        "which is a pole",
        "that the lander",
        "whose craters",
        "when the first astronauts landed on the Moon",
      ],
      "Yer bildiren ilgi cümlesi: iniş aracı bilim insanlarının kalıcı gölgeli kraterlerde buz saklı olabileceğine inandığı Ay'ın güney kutbu yakınına indi.",
    ],
    [
      "Unlike earlier spacecraft sent to Jupiter, which used nuclear power, ----.",
      [
        "the new spacecraft relies entirely on solar panels",
        "earlier spacecraft were small",
        "Jupiter is far away",
        "nuclear power is dangerous",
        "the new spacecraft also uses nuclear power for all its systems",
      ],
      "'Unlike' karşıtlık kurar: nükleer güç kullanan önceki Jüpiter araçlarının aksine yeni araç tamamen güneş panellerine dayanır.",
    ],
    [
      "The spacecraft was finally switched off in 2025 ----.",
      [
        "after it had used up almost all the gas it needed to control its direction",
        "although it was working well",
        "so that it could start a new mission",
        "unless the engineers agreed",
        "since it had been destroyed in a collision several years earlier",
      ],
      "Neden bildiren yapı: araç yönünü kontrol etmek için gereken gazın neredeyse tamamını tükettikten sonra 2025'te kapatıldı.",
    ],
    [
      "No sooner had the lander touched down ----.",
      [
        "than crowds across the country began to celebrate",
        "when the lander",
        "that the Moon",
        "before the rover",
        "than the engineers realised it had landed on the wrong planet",
      ],
      "'No sooner ... than' yapısı: iniş aracı yere değer değmez ülkenin dört bir yanında kalabalıklar kutlamaya başladı.",
    ],
    [
      "While the orbiter continued to work for years, ----.",
      [
        "the rover stopped communicating after about a year on the surface",
        "orbiters travel around planets",
        "Mars has two moons",
        "the mission was launched in July",
        "the rover continued to travel across the surface without any problems",
      ],
      "'While' zıtlık bildirir: yörünge aracı yıllarca çalışmaya devam ederken gezgin yüzeyde yaklaşık bir yıl sonra iletişimi kesti.",
    ],
    [
      "The probe travels so fast ----.",
      [
        "that it could cross from one side of the Earth to the other in about a minute",
        "because the probe",
        "than the Sun",
        "although the engineers",
        "so that it could be easily caught by another spacecraft",
      ],
      "'so ... that' sonuç yapısı: sonda o kadar hızlı gider ki Dünya'nın bir ucundan öbürüne yaklaşık bir dakikada geçebilir.",
    ],
  ],
  enTr: [
    [
      "The lander carried a small rover, which drove about a hundred metres across the surface.",
      [
        "İniş aracı yüzeyde yaklaşık yüz metre yol alan küçük bir gezgin taşıyordu.",
        "Gezgin iniş aracını yüz metre taşıdı.",
        "İniş aracı yüzeyde yüz metre yuvarlandı.",
        "İniş aracında hiç gezgin yoktu.",
        "İniş aracı yüzeyde birkaç kilometre yol alan büyük bir gezgin taşıyordu ve gezgin hiç durmadı.",
      ],
      "'The lander carried a small rover' 'iniş aracı küçük bir gezgin taşıyordu', 'which drove about a hundred metres across the surface' 'yüzeyde yaklaşık yüz metre yol alan' karşılığıdır.",
    ],
    [
      "The heat shield, made of carbon foam, is only about eleven centimetres thick.",
      [
        "Karbon köpükten yapılmış ısı kalkanı yalnızca yaklaşık on bir santimetre kalınlığındadır.",
        "Isı kalkanı on bir metre kalınlığında çelikten yapılmıştır.",
        "Karbon köpük ısı kalkanını on bir santimetre inceltir.",
        "Isı kalkanı hiç yoktur.",
        "Isı kalkanı karbon köpükten yapılmıştır ve kalınlığı her yıl on bir santimetre artar.",
      ],
      "'The heat shield, made of carbon foam' 'karbon köpükten yapılmış ısı kalkanı', 'is only about eleven centimetres thick' 'yalnızca yaklaşık on bir santimetre kalınlığındadır' karşılığıdır.",
    ],
    [
      "The spacecraft's measurements suggest that Jupiter's core is not solid but partly dissolved.",
      [
        "Aracın ölçümleri Jüpiter'in çekirdeğinin katı olmadığını, kısmen çözünmüş olduğunu gösteriyor.",
        "Aracın ölçümleri Jüpiter'in çekirdeğinin tamamen katı olduğunu kanıtlıyor.",
        "Jüpiter'in çekirdeği aracın ölçümlerini çözdü.",
        "Jüpiter'in çekirdeği yoktur.",
        "Aracın ölçümleri Jüpiter'in çekirdeğinin tamamen buzdan oluştuğunu ve giderek büyüdüğünü gösteriyor.",
      ],
      "'The spacecraft's measurements suggest that' 'aracın ölçümleri gösteriyor', 'Jupiter's core is not solid but partly dissolved' 'Jüpiter'in çekirdeğinin katı olmadığını, kısmen çözünmüş olduğunu' karşılığıdır.",
    ],
    [
      "The catalogue has been used in thousands of scientific papers since it was first released.",
      [
        "Katalog ilk yayımlandığından beri binlerce bilimsel makalede kullanılmıştır.",
        "Katalog hiçbir bilimsel makalede kullanılmamıştır.",
        "Binlerce makale kataloğu yayımlamıştır.",
        "Katalog hiç yayımlanmamıştır.",
        "Katalog yalnızca birkaç makalede kullanılmış ve kısa sürede unutulmuştur.",
      ],
      "'The catalogue has been used in thousands of scientific papers' 'katalog binlerce bilimsel makalede kullanılmıştır', 'since it was first released' 'ilk yayımlandığından beri' karşılığıdır.",
    ],
    [
      "China became the second country, after the United States, to operate a rover on Mars.",
      [
        "Çin, Amerika Birleşik Devletleri'nden sonra Mars'ta gezgin çalıştıran ikinci ülke oldu.",
        "Çin, Mars'a gezgin gönderen ilk ülke oldu.",
        "Amerika Birleşik Devletleri Çin'in gezginini Mars'ta çalıştırdı.",
        "Mars'ta hiç gezgin çalıştırılmadı.",
        "Çin, Amerika Birleşik Devletleri ile birlikte Ay'da gezgin çalıştıran üçüncü ülke oldu.",
      ],
      "'China became the second country' 'Çin ikinci ülke oldu', 'after the United States, to operate a rover on Mars' 'Amerika Birleşik Devletleri'nden sonra Mars'ta gezgin çalıştıran' karşılığıdır.",
    ],
    [
      "The thrusters had never been intended to be used for such a long period.",
      [
        "İticilerin hiçbir zaman bu kadar uzun bir süre kullanılması amaçlanmamıştı.",
        "İticiler her zaman uzun süre kullanılmak üzere tasarlanmıştı.",
        "Uzun süre iticileri kullanmak için tasarlandı.",
        "Araçta hiç itici yoktu.",
        "İticiler yalnızca birkaç saniye kullanılabildi ve hemen bozuldu.",
      ],
      "'The thrusters had never been intended to be used' 'iticilerin hiçbir zaman kullanılması amaçlanmamıştı', 'for such a long period' 'bu kadar uzun bir süre' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Sonda 2018'de fırlatıldı.",
      [
        "The probe was launched in 2018.",
        "The probe was destroyed in 2018.",
        "2018 launched the probe.",
        "There was no probe.",
        "The probe was launched in 1918 by a small company.",
      ],
      "'Sonda fırlatıldı' 'the probe was launched', '2018'de' 'in 2018' karşılığıdır.",
    ],
    [
      "Araç Jüpiter'in kutuplarının üzerinden geçiyor.",
      [
        "The spacecraft passes over Jupiter's poles.",
        "The spacecraft passes under Jupiter's moons.",
        "Jupiter's poles pass over the spacecraft.",
        "The spacecraft never approaches Jupiter.",
        "The spacecraft lands on Jupiter's surface every year.",
      ],
      "'Araç geçiyor' 'the spacecraft passes', 'Jüpiter'in kutuplarının üzerinden' 'over Jupiter's poles' karşılığıdır.",
    ],
    [
      "Gezgin toz fırtınası nedeniyle uyandırılamadı.",
      [
        "The rover could not be woken up because of a dust storm.",
        "The rover caused a dust storm when it woke up.",
        "A dust storm woke up the rover.",
        "There was no rover.",
        "The rover woke up early because the weather was very good.",
      ],
      "'Gezgin uyandırılamadı' 'the rover could not be woken up', 'toz fırtınası nedeniyle' 'because of a dust storm' karşılığıdır.",
    ],
    [
      "Ajans araçla iletişimi 2022'de kaybetti.",
      [
        "The agency lost contact with the spacecraft in 2022.",
        "The agency made contact with the spacecraft for the first time in 2022.",
        "The spacecraft lost the agency in 2022.",
        "There was no agency.",
        "The agency sold the spacecraft to another country in 2022.",
      ],
      "'Ajans kaybetti' 'the agency lost', 'araçla iletişimi' 'contact with the spacecraft', '2022'de' 'in 2022' karşılığıdır.",
    ],
    [
      "Uydu Güneş'in etrafında Dünya ile birlikte dolaşıyordu.",
      [
        "The satellite travelled around the Sun together with the Earth.",
        "The satellite travelled around the Moon alone.",
        "The Sun travelled around the satellite.",
        "There was no satellite.",
        "The satellite travelled towards the edge of the solar system.",
      ],
      "'Uydu dolaşıyordu' 'the satellite travelled', 'Güneş'in etrafında Dünya ile birlikte' 'around the Sun together with the Earth' karşılığıdır.",
    ],
    [
      "Bulutlarda kutuptan kutba uzanan dev bir dalga keşfedildi.",
      [
        "An enormous wave stretching from pole to pole was discovered in the clouds.",
        "A small wave was discovered in the ocean.",
        "The clouds discovered a wave.",
        "No wave was discovered.",
        "An enormous storm was discovered near the planet's equator.",
      ],
      "'Dev bir dalga keşfedildi' 'an enormous wave was discovered', 'bulutlarda kutuptan kutba uzanan' 'stretching from pole to pole in the clouds' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "On 23 August 2023, an Indian spacecraft called Chandrayaan-3 landed gently near the south pole of the Moon, making India the fourth country to achieve a soft landing on the Moon and the first to do so so close to the pole. The success was all the more welcome because the previous mission, Chandrayaan-2, had ended in disappointment four years earlier. Its orbiter had reached the Moon safely and continues to work, but its lander had crashed during the final stage of its descent, after a problem with its software caused it to slow down too quickly at first and then to lose control. For the new mission, engineers made the lander far more tolerant of errors. They strengthened its legs so that it could land at a higher speed, enlarged its solar panels, added more fuel and increased the size of the area in which it could safely touch down. They also improved its sensors and its software, and they tested the landing sequence repeatedly in simulations. The lander carried a small six-wheeled rover, which drove about a hundred metres across the surface during the following days and confirmed the presence of sulphur in the soil near the pole. The region interests scientists because some craters there never receive sunlight and may contain ice, which could one day provide water and fuel for astronauts. Like the rest of the mission, the lander and the rover were powered by the Sun, and they were designed to work for only one lunar day, about fourteen Earth days. When night fell, they were put into a sleep mode, but they did not wake up when the Sun rose again. The mission cost about seventy-five million dollars.",
      questions: [
        [
          "According to the passage, the lander of the earlier mission crashed because ----.",
          [
            "a software problem caused it to slow down incorrectly and lose control",
            "its orbiter had failed before reaching the Moon",
            "it ran out of fuel during the journey",
            "it landed in a crater full of ice",
            "it was struck by a small meteorite",
          ],
          "Yazılımdaki bir sorun aracın önce çok hızlı yavaşlamasına, sonra kontrolünü kaybetmesine yol açtı.",
        ],
        [
          "The passage states that, for the new mission, engineers ----.",
          [
            "strengthened the lander's legs and enlarged the landing area",
            "removed the rover to save weight",
            "replaced the solar panels with batteries",
            "chose a landing site near the equator",
            "reused the lander that had crashed",
          ],
          "Mühendisler bacakları güçlendirdi, panelleri büyüttü, yakıt ekledi ve güvenli iniş alanını genişletti.",
        ],
        [
          "It can be inferred from the passage that the lander and rover did not wake up because ----.",
          [
            "they had been designed to survive only one lunar day",
            "they had already run out of fuel",
            "the rover had driven too far away",
            "they had been switched off permanently on purpose",
            "the orbiter had stopped sending signals",
          ],
          "Yalnızca bir Ay günü, yaklaşık on dört Dünya günü çalışmak üzere tasarlanmışlardı; soğuk geceye dayanmaları beklenmiyordu.",
        ],
      ],
    },
    {
      text:
        "The outer atmosphere of the Sun, known as the corona, poses two long-standing puzzles. Although it lies above the Sun's visible surface, it is hundreds of times hotter, reaching temperatures of more than a million degrees, and it constantly releases a stream of charged particles, called the solar wind, which speeds up as it leaves the Sun for reasons that are not fully understood. To investigate these questions, NASA launched the Parker Solar Probe in 2018. It was named after Eugene Parker, the physicist who had predicted the existence of the solar wind in the 1950s, and it was the first spacecraft named after a living person; Parker himself watched the launch. To reach the Sun, a spacecraft must lose most of the speed it inherits from the Earth's movement around the Sun, which requires a great deal of energy. The probe therefore flew past Venus seven times, using the planet's gravity to bring its orbit gradually closer to the Sun. In December 2024, it passed just over six million kilometres from the Sun's surface, the closest any human-made object has ever come, travelling at almost seven hundred thousand kilometres an hour, the fastest speed ever reached by a spacecraft. To survive, the probe relies on a heat shield made of carbon foam sandwiched between two carbon plates, only about eleven centimetres thick. While the side facing the Sun reaches more than thirteen hundred degrees, the instruments behind it remain close to room temperature. Because signals take several minutes to travel between the Sun and the Earth, the probe must keep the shield pointed at the Sun automatically, without waiting for instructions from engineers.",
      questions: [
        [
          "According to the passage, one puzzle about the corona is that ----.",
          [
            "it is much hotter than the visible surface below it",
            "it is colder than the surface of the Earth",
            "it produces no charged particles",
            "it can be seen only from Venus",
            "it was discovered by the Parker Solar Probe",
          ],
          "Korona Güneş'in görünür yüzeyinin üstünde olmasına rağmen yüzlerce kat daha sıcaktır.",
        ],
        [
          "The passage states that the probe flew past Venus in order to ----.",
          [
            "use the planet's gravity to bring its orbit closer to the Sun",
            "study the atmosphere of Venus in detail",
            "collect fuel from the planet",
            "test its heat shield before reaching the Sun",
            "send signals back to Earth more quickly",
          ],
          "Sonda yörüngesini Güneş'e giderek yaklaştırmak için Venüs'ün çekim kuvvetini kullandı.",
        ],
        [
          "It can be inferred from the passage that the probe must control its heat shield automatically because ----.",
          [
            "instructions from Earth would arrive too late to prevent damage",
            "engineers are not allowed to communicate with it",
            "its computers are more intelligent than humans",
            "the shield is too heavy to be moved",
            "its radio was destroyed by the heat",
          ],
          "Sinyallerin Güneş ile Dünya arasında gitmesi birkaç dakika sürdüğünden Dünya'dan gelecek komutlar hasarı önlemek için geç kalır.",
        ],
      ],
    },
    {
      text:
        "In July 2016, after a journey of five years, a NASA spacecraft called Juno went into orbit around Jupiter, the largest planet in the solar system. It was the first spacecraft to travel so far from the Sun using only solar power; its three huge solar panels, each about nine metres long, generate only a few hundred watts at Jupiter's distance, roughly enough to power a few light bulbs. Jupiter is surrounded by belts of intense radiation, which would quickly damage ordinary electronics, so Juno's most sensitive equipment is housed in a box with titanium walls about a centimetre thick. The spacecraft was also placed in a long, oval orbit that carries it over the planet's poles and close to the cloud tops for only a few hours on each pass, before swinging far out into space, which limits its exposure to the radiation. Juno has made many surprising discoveries. It revealed that the poles are covered by clusters of enormous storms, arranged in geometric patterns, that were completely unexpected. It found that the famous Great Red Spot, a storm larger than the Earth, extends several hundred kilometres down into the atmosphere. And by measuring the planet's gravity very precisely, it showed that Jupiter's core is not a small, solid ball, as many scientists had assumed, but appears to be large and partly dissolved into the surrounding layers. The mission was originally planned to end in 2018, but it was extended several times so that the spacecraft could also study three of Jupiter's large moons. At the end of the mission, the spacecraft was planned to be steered into the planet to prevent it from crashing into, and contaminating, one of the moons that might harbour life.",
      questions: [
        [
          "According to the passage, Juno's orbit is designed to ----.",
          [
            "limit the time the spacecraft spends in the intense radiation",
            "keep the spacecraft permanently close to the cloud tops",
            "allow it to land on one of Jupiter's moons",
            "keep its solar panels in Jupiter's shadow",
            "carry it back towards the Earth every year",
          ],
          "Uzun, oval yörünge aracı her geçişte yalnızca birkaç saat bulut tepelerine yaklaştırır ve radyasyona maruz kalmasını sınırlar.",
        ],
        [
          "The passage states that Juno's measurements of gravity showed that ----.",
          [
            "Jupiter's core appears to be large and partly dissolved",
            "Jupiter has no core at all",
            "the Great Red Spot is shrinking quickly",
            "the planet's poles are completely calm",
            "Jupiter is smaller than had been assumed",
          ],
          "Çekim ölçümleri çekirdeğin küçük ve katı bir top değil, büyük ve çevre katmanlara kısmen karışmış olduğunu gösterdi.",
        ],
        [
          "It can be inferred from the passage that the spacecraft will be steered into Jupiter in order to ----.",
          [
            "avoid contaminating a moon where life might exist",
            "collect samples from the planet's core",
            "test whether its heat shield still works",
            "produce a bright flash visible from Earth",
            "save fuel for a journey to another planet",
          ],
          "Aracın, yaşam barındırabilecek uydulardan birine çarpıp onu kirletmesini önlemek için gezegene yönlendirilmesi planlanmıştır.",
        ],
      ],
    },
    {
      text:
        "For more than a decade, a European spacecraft called Gaia slowly spun in space at a gravitationally stable point beyond the Earth's orbit, scanning the entire sky again and again. Launched in 2013, it was designed to measure the positions, distances and movements of stars with extraordinary precision. Its instruments could detect changes in the position of a star equivalent to the width of a human hair seen from about a thousand kilometres away. By observing each star dozens of times over several years, Gaia could detect the slight shift in its apparent position caused by the movement of the Earth around the Sun, which allowed astronomers to calculate its distance. By the time the spacecraft was switched off in March 2025, after it had used up almost all the gas it needed to control its direction, it had measured almost two billion stars, about one per cent of all the stars in our galaxy. Its catalogues, which are freely available to anyone, have transformed many areas of astronomy and have been used in thousands of scientific papers. They have allowed astronomers to produce the most detailed map ever made of the Milky Way, to identify groups of stars that originally belonged to smaller galaxies that merged with ours billions of years ago, and to discover dormant black holes by detecting the wobble they cause in the movement of companion stars. Gaia also tracked the orbits of hundreds of thousands of asteroids in our own solar system. Before it was finally switched off, engineers used it for a series of tests that will help in the design of future missions, and they then sent it into a safe orbit around the Sun, far from the Earth.",
      questions: [
        [
          "According to the passage, Gaia could calculate the distances of stars by ----.",
          [
            "detecting the shift in their positions caused by the Earth's movement",
            "measuring how bright they appeared from different planets",
            "sending signals to them and timing the reply",
            "photographing them only once with great precision",
            "landing on asteroids near the stars",
          ],
          "Dünya'nın Güneş çevresindeki hareketinin yıldızın görünür konumunda yarattığı küçük kayma ölçülerek uzaklık hesaplanabiliyordu.",
        ],
        [
          "The passage states that Gaia's catalogues have helped astronomers to ----.",
          [
            "identify stars that once belonged to smaller galaxies",
            "build the first telescopes in space",
            "count every star in the universe",
            "send astronauts to other stars",
            "prove that black holes do not exist",
          ],
          "Kataloglar milyarlarca yıl önce galaksimizle birleşmiş küçük gökadalara ait yıldız gruplarını belirlemeyi sağladı.",
        ],
        [
          "It can be inferred from the passage that Gaia's mission ended mainly because ----.",
          [
            "it no longer had enough gas to control its direction",
            "its instruments had been damaged by radiation",
            "astronomers had lost interest in its data",
            "it had collided with an asteroid",
            "it had measured every star in the Milky Way",
          ],
          "Araç yönünü denetlemek için gereken gazın neredeyse tamamını tükettikten sonra kapatıldı.",
        ],
      ],
    },
    {
      text:
        "In July 2020, China launched its first independent mission to Mars, called Tianwen-1, meaning 'questions to heaven', after an ancient Chinese poem. The mission was unusually ambitious. Whereas other countries had approached Mars step by step, first sending an orbiter and only later attempting a landing, Tianwen-1 combined an orbiter, a lander and a rover in a single mission. The spacecraft entered orbit around Mars in February 2021, and three months later the lander separated from the orbiter and descended through the thin Martian atmosphere, using a heat shield, a parachute and finally a rocket engine to slow down before touching down on a vast plain in the northern hemisphere. Its six-wheeled rover, named Zhurong after a god of fire in Chinese mythology, drove down a ramp a few days later. China thus became the second country, after the United States, to operate a rover on Mars. The rover carried a ground-penetrating radar, which revealed layers beneath the surface that may have been formed by water or by floods in the distant past, and its findings supported the idea that the area was once the coast of an ancient ocean. Zhurong was powered by solar panels, and in May 2022, as winter approached and dust storms reduced the amount of sunlight, it was put into hibernation. It was expected to wake up a few months later, but it never did, probably because dust had settled on its panels. By then, however, it had travelled almost two kilometres, well beyond what was originally planned, and the orbiter continued to work for several years, studying the planet from above and relaying data.",
      questions: [
        [
          "According to the passage, Tianwen-1 was unusually ambitious because ----.",
          [
            "it combined an orbiter, a lander and a rover in a single mission",
            "it was the first spacecraft ever to reach Mars",
            "it carried astronauts to the surface",
            "it landed on one of the moons of Mars",
            "it returned samples of soil to the Earth",
          ],
          "Diğer ülkeler adım adım ilerlerken Tianwen-1 yörünge aracı, iniş aracı ve gezgini tek bir görevde birleştirdi.",
        ],
        [
          "The passage states that the rover's radar revealed ----.",
          [
            "underground layers that may have been formed by water",
            "living organisms beneath the surface",
            "large amounts of liquid water on the surface",
            "the remains of an earlier spacecraft",
            "that Mars has no atmosphere",
          ],
          "Yeraltı radarı uzak geçmişte su ya da sel tarafından oluşturulmuş olabilecek katmanları ortaya çıkardı.",
        ],
        [
          "It can be inferred from the passage that the rover probably failed to wake up because ----.",
          [
            "dust on its panels prevented it from producing enough power",
            "it had been switched off permanently by the engineers",
            "it had fallen into a deep crater",
            "the orbiter had stopped relaying its signals",
            "it had used up all its fuel during the journey",
          ],
          "Gezgin güneş enerjisiyle çalışıyordu; paneller üzerine çöken toz yeterli enerji üretmesini engellemiş olmalıdır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In October 2024, NASA launched a spacecraft to study Europa, one of Jupiter's largest moons. ---- If the ocean exists, it could contain more water than all the Earth's oceans combined and might provide conditions suitable for life.",
      [
        "Scientists believe that an ocean of liquid water lies beneath its icy surface.",
        "Jupiter has dozens of moons.",
        "NASA has launched many spacecraft.",
        "The spacecraft is expected to reach Jupiter in 2030, after a journey of more than five years.",
        "Ice is frozen water.",
      ],
      "Boşluk 'the ocean' ifadesinin gönderme yapacağı okyanusu tanıtan bir cümle gerektirir; boşluğa bilim insanlarının buzlu yüzeyin altında sıvı sudan bir okyanus olduğuna inandığını söyleyen cümle gelmelidir.",
    ],
    [
      "NASA is building a spacecraft that will explore Titan, the largest moon of Saturn, not by driving across its surface but by flying. ---- Titan's thick atmosphere and low gravity make flight there much easier than on Earth.",
      [
        "The vehicle will be a large drone with eight rotors, which will hop from one site to another.",
        "Saturn has many rings.",
        "Drones are popular.",
        "Its surface is dotted with lakes of liquid methane and ethane, kept fluid by the intense cold.",
        "Flying is fast.",
      ],
      "Boşluk uçarak keşfin nasıl yapılacağını açıklayıp uçuşun kolaylığına bağlanan bir cümle gerektirir; boşluğa aracın sekiz pervaneli büyük bir insansız hava aracı olacağını söyleyen cümle gelmelidir.",
    ],
    [
      "Reaching Mercury, the planet closest to the Sun, is surprisingly difficult. ---- A joint European and Japanese mission launched in 2018 therefore has to make nine flybys of the Earth, Venus and Mercury itself before it can enter orbit.",
      [
        "A spacecraft falling towards the Sun gains so much speed that it must lose a great deal of it before it can be captured by the planet.",
        "Mercury is a small planet.",
        "The Sun is a star.",
        "Mercury has almost no atmosphere and its surface is covered with craters, like the Moon's.",
        "Europe and Japan have space agencies.",
      ],
      "Boşluk 'therefore' ile çok sayıda yakın geçişe bağlanacak bir neden gerektirir; boşluğa Güneş'e doğru düşen bir aracın çok hız kazandığını ve gezegence yakalanmadan önce bunu kaybetmesi gerektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2004, a NASA spacecraft flew through the cloud of dust surrounding a comet and collected tiny particles in a material called aerogel, one of the lightest solids ever made. ---- When scientists examined the particles, they were surprised to find minerals that could have formed only at very high temperatures.",
      [
        "Two years later, a capsule containing the samples landed by parachute in the desert of Utah.",
        "Comets are made of ice and dust.",
        "Utah is in the United States.",
        "Aerogel is so light that it is sometimes called 'frozen smoke' because of its pale blue appearance.",
        "Deserts receive little rain.",
      ],
      "Boşluk örneklerin Dünya'ya nasıl ulaştığını açıklayıp incelemeye bağlanan bir cümle gerektirir; boşluğa örnekleri içeren kapsülün iki yıl sonra Utah çölüne paraşütle indiğini söyleyen cümle gelmelidir.",
    ],
    [
      "On 4 July 2005, a copper projectile weighing about three hundred and seventy kilograms crashed into a comet at a speed of more than ten kilometres a second. ---- By studying the material thrown out by the impact, scientists learned that the comet's surface was covered with fine dust, like talcum powder.",
      [
        "It had been released from a NASA spacecraft, which watched the collision from a safe distance.",
        "Copper is a metal.",
        "July is a summer month.",
        "The comet had been discovered in the nineteenth century by a German astronomer.",
        "Comets travel around the Sun.",
      ],
      "Boşluk mermiyi bir uzay aracına bağlayıp çarpışmanın incelenmesine geçiş sağlayan bir cümle gerektirir; boşluğa mermiyi bir NASA aracının bıraktığını ve çarpışmayı güvenli uzaklıktan izlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In October 2016, a European lander called Schiaparelli descended towards Mars to test landing technology. ---- Investigators later found that a sensor had briefly given an incorrect reading, which led the computer to believe that the lander had already reached the ground.",
      [
        "It released its parachute too early, fired its engines for only a few seconds and crashed into the surface.",
        "Mars is the fourth planet from the Sun.",
        "Europe has a space agency.",
        "Its companion orbiter, however, successfully entered orbit and is still studying the planet's atmosphere.",
        "Landers use parachutes.",
      ],
      "Boşluk kazanın nasıl gerçekleştiğini anlatıp soruşturmanın bulgularına bağlanan bir cümle gerektirir; boşluğa aracın paraşütünü erken bırakıp motorlarını yalnızca birkaç saniye ateşlediğini ve yüzeye çakıldığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Spacecraft travelling to the outer planets often use the gravity of other planets to gain speed.",
        "As a spacecraft passes close to a planet, it is pulled along by the planet's motion.",
        "This can save years of travel and large amounts of fuel.",
        "Planets were named after Roman gods.",
        "Mission planners must therefore choose launch dates carefully so that the planets are in the right positions.",
      ],
      odd: 3,
      why: "Parça uzay araçlarının gezegenlerin çekiminden yararlanarak hız kazanmasını anlatır. Gezegenlerin Roma tanrılarının adlarını taşıdığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Communicating with distant spacecraft requires very large antennas on Earth.",
        "NASA operates three groups of such antennas in California, Spain and Australia.",
        "Their positions allow at least one of them to contact a spacecraft at any time as the Earth rotates.",
        "Spain and Australia are popular with tourists.",
        "The signals they receive are often weaker than the power of a light bulb.",
      ],
      odd: 3,
      why: "Parça uzak uzay araçlarıyla iletişim için kullanılan anten ağını anlatır. İspanya ve Avustralya'nın turistler arasında popüler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Spacecraft sent to other planets must be carefully cleaned before launch.",
        "Scientists want to avoid carrying bacteria from the Earth to other worlds.",
        "Such bacteria could contaminate places where life might exist.",
        "They could also confuse the search for signs of life.",
        "Bacteria live almost everywhere on Earth, even in boiling springs.",
      ],
      odd: 4,
      why: "Parça uzay araçlarının başka dünyaları kirletmemesi için temizlenmesini anlatır. Bakterilerin Dünya'da kaynar pınarlar dahil neredeyse her yerde yaşadığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "More countries are now sending missions to the Moon and planets than ever before.",
        "India, China, Japan and the United Arab Emirates have all launched recent missions.",
        "Moonlight is simply sunlight reflected from the lunar surface.",
        "Private companies have also begun to build landers.",
        "Some of these missions have succeeded, while others have crashed.",
      ],
      odd: 2,
      why: "Parça Ay'a ve gezegenlere görev gönderen ülke ve şirketlerin artmasını anlatır. Ay ışığının Ay yüzeyinden yansıyan güneş ışığı olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Landing on another world is one of the most difficult parts of a mission.",
        "The spacecraft must slow down from thousands of kilometres an hour in a few minutes.",
        "Because signals take minutes to arrive, it must do this without help from Earth.",
        "Even small errors in its sensors or software can lead to a crash.",
        "Many engineers enjoy watching films about space.",
      ],
      odd: 4,
      why: "Parça başka bir dünyaya inişin güçlüklerini anlatır. Pek çok mühendisin uzay filmleri izlemekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Solar panels are the most common source of power for spacecraft.",
        "Their output falls sharply as a spacecraft moves further from the Sun.",
        "Solar panels are also installed on the roofs of many houses.",
        "Missions beyond Jupiter have therefore usually relied on nuclear power sources.",
        "These produce heat from the decay of radioactive material, which is turned into electricity.",
      ],
      odd: 2,
      why: "Parça uzay araçlarının güç kaynaklarını anlatır. Güneş panellerinin pek çok evin çatısına da kurulduğunu söyleyen III. cümle konu dışıdır.",
    },
  ],
};
