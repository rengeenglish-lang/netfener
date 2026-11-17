import type { YokdilDeneme } from "./types";

export const FEN_64: YokdilDeneme = {
  no: 64,
  field: "fen",
  vocab: [
    [
      "Volunteers looking at the data noticed that the star's light ---- dropped by more than a fifth.",
      ["occasionally", "constantly", "slightly", "politely", "eagerly"],
      "Verilere bakan gönüllülerin yıldızın ışığının 'ara sıra' (occasionally) beşte birden fazla düştüğünü fark ettiği anlatılır.",
    ],
    [
      "The mysterious signals turned out to have a surprisingly ---- explanation: a kitchen appliance.",
      ["ordinary", "dangerous", "ancient", "expensive", "complicated"],
      "Gizemli sinyallerin şaşırtıcı biçimde 'sıradan' (ordinary) bir açıklaması olduğu, bunun bir mutfak aleti olduğu anlatılır.",
    ],
    [
      "Each burst lasts only a few milliseconds but ---- as much energy as the Sun produces in days.",
      ["releases", "absorbs", "stores", "borrows", "hides"],
      "Her patlamanın yalnızca birkaç milisaniye sürdüğü ama Güneş'in günlerde ürettiği kadar enerji 'saldığı' (releases) anlatılır.",
    ],
    [
      "Some people ---- that the star's sudden dimming meant it was about to explode.",
      ["speculated", "denied", "forgot", "regretted", "promised"],
      "Bazı kişilerin yıldızın aniden sönükleşmesinin onun patlamak üzere olduğu anlamına geldiğini 'tahmin yürüttüğü' (speculated) anlatılır.",
    ],
    [
      "The two methods of measuring the expansion of the universe give results that are ---- with each other.",
      ["inconsistent", "identical", "friendly", "connected", "familiar"],
      "Evrenin genişlemesini ölçen iki yöntemin birbiriyle 'tutarsız' (inconsistent) sonuçlar verdiği anlatılır.",
    ],
    [
      "The astronomers had to ---- every other possible cause before they could accept the new explanation.",
      ["rule out", "take up", "give in", "look after", "turn up"],
      "Gökbilimcilerin yeni açıklamayı kabul etmeden önce diğer tüm olası nedenleri 'dışlamak' (rule out) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the paper was published, volunteers ---- the strange dips for several years.",
      ["had been studying", "study", "have been studying", "will be studying", "are studying"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been studying'.",
    ],
    [
      "If the staff had waited for the timer to finish, the telescope ---- the signals.",
      ["might not have recorded", "will not record", "does not record", "had not recorded", "would not record"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have recorded'.",
    ],
    [
      "The first burst ---- in data that had been collected six years earlier.",
      ["was discovered", "discovered", "has discovered", "discovers", "is discovering"],
      "Patlama keşfedilmiştir; edilgen geçmiş zaman: 'was discovered'.",
    ],
    [
      "---- the star dimmed dramatically, it did not explode.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Yıldızın büyük ölçüde sönükleşmesi ile patlamaması zıttır: 'Although'.",
    ],
    [
      "The astronomer, ---- telescope was made by hand, discovered a comet from another star system.",
      ["whose", "who", "which", "whom", "where"],
      "Gökbilimcinin teleskobu; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Rarely ---- astronomers seen a supernova so close to our galaxy.",
      ["have", "did", "were", "has been", "do"],
      "'Rarely' ile devrik yapı, yakın geçmiş zaman: 'have ... seen'.",
    ],
    [
      "The telescope is located in a remote valley, ---- radio signals from phones are restricted.",
      ["where", "which", "when", "whose", "that"],
      "'a remote valley' yer bildirir; sinyaller orada kısıtlanır: 'where'.",
    ],
    [
      "The more accurate the measurements became, ---- the disagreement seemed.",
      ["the more serious", "the most serious", "more serious", "most serious", "so serious"],
      "'The more ..., the more ...' paralel yapısı: 'the more serious'.",
    ],
    [
      "Some scientists suggested that the star ---- by other telescopes as well.",
      ["be observed", "is observed", "was observed", "to be observed", "being observed"],
      "'suggest that' sonrası yalın fiil (subjunctive), edilgen: 'be observed'.",
    ],
    [
      "The star is thought ---- more than ten times the mass of the Sun during the eruption.",
      ["to have lost", "losing", "to be lost", "lost", "having lose"],
      "Geçmişe ait durum için mastarın geçmiş biçimi: 'to have lost'.",
    ],
    [
      "The spacecraft carried a metal plaque ---- any aliens who found it would know where it came from.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Plaketin taşınmasının amacı onu bulan uzaylıların nereden geldiğini bilmesidir: 'so that'.",
    ],
    [
      "The researchers had the microwave oven ---- at different times to test their idea.",
      ["opened", "open", "opening", "to open", "opens"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'opened'.",
    ],
    [
      "Had the star been closer, the eruption ---- visible during the day.",
      ["might have been", "is", "will be", "had been", "was"],
      "Devrik üçüncü tip koşul cümlesi: 'might have been'.",
    ],
    [
      "Neither the volunteers nor the astronomer ---- an explanation for the dips at first.",
      ["had", "having", "to have", "has had to", "have to had"],
      "'Neither ... nor' yapısında geçmiş zaman: 'had'.",
    ],
  ],
  cloze: [
    {
      text:
        "Between 2009 and 2013, NASA's Kepler space telescope measured the brightness of about 150,000 stars, looking for tiny, regular dips in light caused by planets passing in front of them. Because there was far too much data for professional astronomers to examine, a project called Planet Hunters invited members of the public to look at the measurements online, {1} in 2011 several volunteers noticed something strange about one star, known as KIC 8462852. Its light sometimes fell by as much as twenty-two per cent, {2} the dips were irregular in shape and timing, unlike those caused by planets, which block only about one per cent of a star's light and repeat regularly. In 2015, the astronomer Tabetha Boyajian, who led the team that studied the star, published a paper describing the puzzle, {3} the object soon became known as 'Tabby's star'. Because no natural explanation seemed to fit, some scientists suggested, half seriously, that the dips might be caused by giant structures built by an alien civilisation, {4} the idea attracted enormous attention from the press. Later observations, however, showed that the star dimmed more in blue light than in infrared light, {5} this pattern is what would be expected if the light were being blocked by clouds of fine dust rather than by solid objects.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Halkın verilere bakmaya davet edilmesi ve gönüllülerin tuhaf bir şey fark etmesi birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Işığın büyük oranda düşmesi ve düşüşlerin düzensiz olması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Makalenin yayımlanması ve yıldızın 'Tabby'nin yıldızı' diye anılması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Uzaylı yapıları önerisi ve basının büyük ilgisi birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Yıldızın mavi ışıkta daha çok sönükleşmesi ve bunun toz bulutlarına uyması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "From 1998, the Parkes radio telescope in New South Wales, Australia, occasionally recorded short bursts of radio waves that looked similar in some ways to signals from deep space. Astronomers called them 'perytons', after an imaginary creature that casts the shadow of a different animal. Unlike genuine cosmic signals, however, they appeared in many parts of the sky at once, {1} it was clear that they were produced somewhere near the telescope. Their source remained a mystery for seventeen years. In 2015, a team led by Emily Petroff installed an additional receiver that monitored the background radio environment, {2} they noticed that perytons often occurred around lunchtime. They also found that the signals contained a frequency typical of microwave ovens. The researchers tested every oven on the site, {3} they discovered the answer. When the door of a particular microwave oven was opened before its timer had finished, the oven briefly released a burst of radio waves, {4} if the telescope happened to be pointing in the right direction, it recorded the signal. The staff had apparently been opening the door early to save time. The discovery was a reminder of how sensitive radio telescopes are, {5} it also helped to confirm that the much more mysterious fast radio bursts detected at Parkes really did come from space.",
      blanks: [
        [
          "(26) ----",
          ["so", "but", "or", "unless", "although"],
          "Sinyallerin gökyüzünün birçok yerinde aynı anda görünmesinin sonucu yakından üretildiklerinin anlaşılmasıdır: 'so'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Ek alıcı kurulması ve öğle saatleriyle bağlantının fark edilmesi birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Fırınları test etmeleri ve cevabı bulmaları birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Fırının radyo dalgası salması ve teleskobun bunu kaydetmesi birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Teleskopların duyarlılığını hatırlatması ve hızlı radyo patlamalarının kaynağını doğrulaması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although planets block only a tiny fraction of a star's light, ----.",
      [
        "the dips in Tabby's star were far deeper",
        "stars are bright",
        "telescopes are sensitive",
        "volunteers enjoy science",
        "the Kepler telescope measured the brightness of about 150,000 stars",
      ],
      "'Although' zıtlık ister: gezegenler bir yıldızın ışığının yalnızca küçük bir kısmını engellese de Tabby'nin yıldızındaki düşüşler çok daha derindi.",
    ],
    [
      "If the oven door had not been opened early, ----.",
      [
        "the burst of radio waves might not have been produced",
        "ovens heat food",
        "lunch is eaten at noon",
        "Australia is large",
        "the telescope would have been pointed in a different direction",
      ],
      "Üçüncü tip koşul: fırının kapağı erken açılmasaydı radyo dalgası patlaması üretilmeyebilirdi.",
    ],
    [
      "----, astronomers concluded that perytons came from nearby rather than from space.",
      [
        "Because they appeared in many directions at once",
        "Although they were short",
        "Unless the sky was clear",
        "Since Parkes is in Australia",
        "While a new receiver was being installed at the telescope in 2015",
      ],
      "Aynı anda birçok yönde göründükleri için gökbilimciler peritonların uzaydan değil yakından geldiği sonucuna vardı.",
    ],
    [
      "Fast radio bursts are difficult to study ----.",
      [
        "because they last only a few milliseconds",
        "although they are common",
        "unless they repeat",
        "so that astronomers can see them",
        "while the telescopes are being moved to new sites in remote parts of the world",
      ],
      "Hızlı radyo patlamaları yalnızca birkaç milisaniye sürdüğü için incelenmesi zordur.",
    ],
    [
      "Since the star had been losing brightness for months, ----.",
      [
        "some people wondered whether it was about to explode",
        "stars are hot",
        "Orion is a constellation",
        "dust is dark",
        "astronomers had used large telescopes in Chile to observe its surface",
      ],
      "'Since' neden bildirir: yıldız aylardır parlaklık kaybettiğinden bazı kişiler onun patlamak üzere olup olmadığını merak etti.",
    ],
    [
      "Not only was the supernova visible without a telescope, ----.",
      [
        "but its original star could also be identified in older photographs",
        "and stars are far away",
        "since galaxies are large",
        "so astronomers were tired",
        "unless the explosion had happened in a small galaxy near our own",
      ],
      "'Not only ... but also' yapısı tamamlanır: süpernova yalnızca teleskopsuz görülmekle kalmadı, kaynak yıldızı da eski fotoğraflarda belirlenebildi.",
    ],
    [
      "Once the star had expelled vast amounts of gas and dust, ----.",
      [
        "it faded until it could no longer be seen without a telescope",
        "clouds are grey",
        "stars have names",
        "gas is light",
        "it had briefly become the second brightest star in the sky in 1843",
      ],
      "Yıldız devasa bir gaz ve toz bulutu fırlatınca teleskopsuz görülemeyecek kadar sönükleşti.",
    ],
    [
      "Unless the disagreement is caused by errors in measurement, ----.",
      [
        "our understanding of the universe may need to change",
        "measurements are useful",
        "the universe is large",
        "astronomers use telescopes",
        "both methods would have produced the same value for the expansion rate",
      ],
      "'Unless' olumsuz koşul: anlaşmazlık ölçüm hatalarından kaynaklanmıyorsa evren anlayışımızın değişmesi gerekebilir.",
    ],
    [
      "The magnetar's flare was so powerful ----.",
      [
        "that it disturbed the Earth's upper atmosphere from thousands of light-years away",
        "although it was brief",
        "because magnets are strong",
        "unless the Sun was shining",
        "while satellites were orbiting the Earth at great heights",
      ],
      "Magnetarın parlaması o kadar güçlüydü ki binlerce ışık yılı uzaktan Dünya'nın üst atmosferini etkiledi.",
    ],
    [
      "Even though the alien explanation attracted attention, ----.",
      [
        "most astronomers expected a natural cause to be found",
        "aliens appear in films",
        "stars have planets",
        "newspapers like stories",
        "the star is located about 1,500 light-years from the Earth in the constellation of Cygnus",
      ],
      "'Even though' zıtlık ister: uzaylı açıklaması ilgi çekse de gökbilimcilerin çoğu doğal bir neden bulunmasını bekliyordu.",
    ],
    [
      "As the comet came from outside the solar system, ----.",
      [
        "it gave scientists a rare chance to study material from another star",
        "comets have tails",
        "the solar system is old",
        "Crimea is near the Black Sea",
        "it had been discovered with a telescope that the amateur astronomer had built himself",
      ],
      "Kuyrukluyıldız Güneş Sistemi dışından geldiği için bilim insanlarına başka bir yıldızdan gelen maddeyi inceleme fırsatı verdi.",
    ],
  ],
  enTr: [
    [
      "Members of the public were invited to examine the data online.",
      [
        "Halk, verileri internette incelemeye davet edildi.",
        "Halk, verileri internette paylaşmaktan men edildi.",
        "Verileri inceleyen halk, internetten uzak tutuldu.",
        "Veriler halkı internette inceledi.",
        "Hiç veri yoktu.",
      ],
      "'Members of the public were invited' 'halk davet edildi', 'to examine the data online' 'verileri internette incelemeye' karşılığıdır.",
    ],
    [
      "The signals often occurred around lunchtime.",
      [
        "Sinyaller çoğunlukla öğle yemeği saatlerinde ortaya çıkıyordu.",
        "Sinyaller yalnızca gece yarısı ortaya çıkıyordu.",
        "Öğle yemeğinde ortaya çıkan sinyaller hiç kaydedilmedi.",
        "Öğle yemeği sinyalleri yarattı.",
        "Hiç sinyal yoktu.",
      ],
      "'The signals often occurred' 'sinyaller çoğunlukla ortaya çıkıyordu', 'around lunchtime' 'öğle yemeği saatlerinde' karşılığıdır.",
    ],
    [
      "The burst came from a galaxy billions of light-years away.",
      [
        "Patlama, milyarlarca ışık yılı uzaklıktaki bir gökadadan geldi.",
        "Patlama, Güneş Sistemi'ndeki bir gezegenden geldi.",
        "Milyarlarca ışık yılı uzaktaki gökada, patlamayla yok oldu.",
        "Gökada patlamayı milyarlarca yıl taşıdı.",
        "Hiç patlama olmadı.",
      ],
      "'The burst came from a galaxy' 'patlama bir gökadadan geldi', 'billions of light-years away' 'milyarlarca ışık yılı uzaklıktaki' karşılığıdır.",
    ],
    [
      "A cloud of dust partly blocked the star's light.",
      [
        "Bir toz bulutu yıldızın ışığını kısmen engelledi.",
        "Yıldızın ışığı bir toz bulutunu tamamen yok etti.",
        "Toz bulutu yıldızın ışığını iki katına çıkardı.",
        "Işık toz bulutunu kısmen engelledi.",
        "Yıldızın çevresinde toz yoktu.",
      ],
      "'A cloud of dust' 'bir toz bulutu', 'partly blocked the star's light' 'yıldızın ışığını kısmen engelledi' karşılığıdır.",
    ],
    [
      "The supernova was the closest to be seen in nearly four centuries.",
      [
        "Süpernova, yaklaşık dört yüzyıldır görülen en yakın süpernovaydı.",
        "Süpernova, dört yüzyıl önce görülen en uzak süpernovaydı.",
        "Yaklaşık dört yüzyıl boyunca hiç süpernova görülemeyecek.",
        "Dört yüzyıl süpernovayı yakından gördü.",
        "Süpernova hiç görülmedi.",
      ],
      "'The supernova was the closest to be seen' 'süpernova görülen en yakın süpernovaydı', 'in nearly four centuries' 'yaklaşık dört yüzyıldır' karşılığıdır.",
    ],
    [
      "For a few years, the star was the second brightest in the night sky.",
      [
        "Birkaç yıl boyunca yıldız, gece gökyüzünün en parlak ikinci yıldızıydı.",
        "Birkaç yıl boyunca yıldız, gökyüzünde hiç görülmedi.",
        "Yıldız, birkaç saniyeliğine en sönük yıldız oldu.",
        "Gece gökyüzü yıldızı birkaç yıl parlattı.",
        "Gökyüzünde yıldız yoktu.",
      ],
      "'For a few years' 'birkaç yıl boyunca', 'the star was the second brightest in the night sky' 'yıldız gece gökyüzünün en parlak ikinci yıldızıydı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Bazı bilim insanları, düşüşlerin uzaylıların yaptığı dev yapılardan kaynaklanabileceğini öne sürdü.",
      [
        "Some scientists suggested that the dips might be caused by giant structures built by aliens.",
        "Some aliens suggested that the scientists might have built giant structures.",
        "No scientist ever mentioned the possibility of alien structures.",
        "The structures suggested the dips to scientists.",
        "There were no dips.",
      ],
      "'Bazı bilim insanları öne sürdü' 'some scientists suggested', 'düşüşlerin uzaylıların yaptığı dev yapılardan kaynaklanabileceğini' 'that the dips might be caused by giant structures built by aliens' karşılığıdır.",
    ],
    [
      "Personel, zaman kazanmak için fırının kapağını erken açıyordu.",
      [
        "The staff were opening the oven door early to save time.",
        "The staff were closing the oven door late to waste time.",
        "The oven door opened by itself whenever the staff were away.",
        "Time opened the staff's oven.",
        "There was no oven.",
      ],
      "'Personel fırının kapağını erken açıyordu' 'the staff were opening the oven door early', 'zaman kazanmak için' 'to save time' karşılığıdır.",
    ],
    [
      "Patlamaların çoğu yalnızca bir kez görülür ve hiç tekrarlamaz.",
      [
        "Most of the bursts are seen only once and never repeat.",
        "Most of the bursts repeat every few seconds.",
        "None of the bursts has ever been seen.",
        "The bursts see each other once.",
        "There are no bursts.",
      ],
      "'Patlamaların çoğu yalnızca bir kez görülür' 'most of the bursts are seen only once', 've hiç tekrarlamaz' 'and never repeat' karşılığıdır.",
    ],
    [
      "Yıldız, birkaç ay içinde normal parlaklığının yarısından fazlasını kaybetti.",
      [
        "The star lost more than half of its normal brightness within a few months.",
        "The star doubled its normal brightness within a few months.",
        "The star's brightness did not change for many years.",
        "The months lost the star's brightness.",
        "The star had no brightness.",
      ],
      "'Yıldız normal parlaklığının yarısından fazlasını kaybetti' 'the star lost more than half of its normal brightness', 'birkaç ay içinde' 'within a few months' karşılığıdır.",
    ],
    [
      "Patlamanın kaynağı olan yıldız, gökbilimcileri şaşırtan bir türdendi.",
      [
        "The star that exploded was of a type that surprised astronomers.",
        "The astronomers surprised the star before it exploded.",
        "The star that exploded was exactly the type astronomers had expected.",
        "The explosion was a type of astronomer.",
        "No star exploded.",
      ],
      "'Patlamanın kaynağı olan yıldız' 'the star that exploded', 'gökbilimcileri şaşırtan bir türdendi' 'was of a type that surprised astronomers' karşılığıdır.",
    ],
    [
      "İki yöntem arasındaki fark, ölçümler iyileştikçe ortadan kalkmadı.",
      [
        "The difference between the two methods did not disappear as the measurements improved.",
        "The measurements disappeared as the difference between the methods improved.",
        "The difference between the methods vanished as soon as the measurements improved.",
        "The methods improved the difference.",
        "There was no difference.",
      ],
      "'İki yöntem arasındaki fark ortadan kalkmadı' 'the difference between the two methods did not disappear', 'ölçümler iyileştikçe' 'as the measurements improved' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 2007, the astronomer Duncan Lorimer and his student David Narkevic were searching through old data from the Parkes radio telescope in Australia when they found something unexpected: a single, extremely bright burst of radio waves, lasting less than five milliseconds, that had been recorded in 2001. The way the signal was spread out across different frequencies suggested that it had travelled through a huge amount of space, and that it came from far outside our galaxy. If so, it must have released an enormous amount of energy. For several years, many astronomers doubted that the 'Lorimer burst' was real, especially after the discovery of perytons, which turned out to be caused by a microwave oven. As other telescopes began to detect similar signals, however, it became clear that these fast radio bursts, or FRBs, were a genuine phenomenon. Today, thousands have been recorded, and it is estimated that one occurs somewhere in the sky every few seconds. Most are seen only once, but a small number repeat. Some have been traced to particular galaxies billions of light-years away. Their cause remained unknown until April 2020, when telescopes in Canada and the United States detected a burst from a magnetar, a type of dead star with an extremely strong magnetic field, inside our own galaxy. This suggested that at least some FRBs are produced by magnetars. Astronomers are also using FRBs as tools: because the signals are slightly delayed by the gas they pass through, they can be used to measure matter between galaxies that is otherwise very difficult to detect.",
      questions: [
        [
          "According to the passage, the first burst was found ----.",
          [
            "in data that had been recorded years earlier",
            "by volunteers on the internet",
            "inside our galaxy",
            "while the telescope was being used to search for signals from a microwave oven",
            "in 2020",
          ],
          "Metne göre 2007'de 2001'de kaydedilmiş eski verilerde bulundu.",
        ],
        [
          "The writer mentions perytons in order to explain why ----.",
          [
            "some astronomers doubted that the first burst was real",
            "FRBs come from magnetars",
            "the telescope was moved",
            "bursts repeat",
            "Lorimer stopped his research",
          ],
          "Peritonların mikrodalga fırından kaynaklandığının anlaşılması ilk patlamanın gerçekliğine dair şüpheleri artırdı.",
        ],
        [
          "It can be understood from the passage that FRBs ----.",
          [
            "can help astronomers to study matter between galaxies",
            "are very rare",
            "have all been explained",
            "come from microwave ovens",
            "occur only in our galaxy",
          ],
          "Sinyaller geçtikleri gazla hafifçe geciktiği için gökadalar arasındaki maddeyi ölçmekte kullanılabilir.",
        ],
      ],
    },
    {
      text:
        "Betelgeuse, a red supergiant star in the constellation of Orion, is one of the brightest and most easily recognised stars in the night sky. It is so vast that, put in the Sun's place, its surface would reach past the orbit of Mars. Stars of this size are expected to end their lives in a supernova explosion, and Betelgeuse is near the end of its life, although in astronomical terms 'near' may mean anything up to a hundred thousand years. In late 2019, observers noticed that the star was growing unusually faint. By February 2020, it had lost more than half of its normal brightness, a change that could be seen easily with the naked eye, and the shape of Orion looked noticeably different. The news led to widespread speculation that Betelgeuse might be about to explode, an event that would make it visible even in daylight for weeks. Astronomers, however, thought this was unlikely. Observations with the Hubble Space Telescope and large telescopes in Chile showed that the star had thrown off a large amount of hot gas from its surface. As this gas moved away and cooled, it formed a cloud of dust that partly blocked our view of the star. At the same time, a large area of the star's surface appears to have become cooler, and therefore darker, than usual. By the spring of 2020, Betelgeuse had returned to almost its normal brightness. The event provided astronomers with a rare opportunity to watch how such stars lose material before they die.",
      questions: [
        [
          "According to the passage, if Betelgeuse were in the centre of our solar system, ----.",
          [
            "it would extend beyond the orbit of Mars",
            "it would be visible in daylight",
            "it would explode",
            "the Earth would move closer to it and become much warmer than today",
            "it would be smaller than the Sun",
          ],
          "Metne göre yüzeyi Mars'ın yörüngesinin ötesine uzanırdı.",
        ],
        [
          "The dimming was mainly caused by ----.",
          [
            "dust formed from gas the star had thrown off",
            "an explosion",
            "a planet passing in front of it",
            "the Earth's atmosphere",
            "a fault in the telescopes",
          ],
          "Yıldızın fırlattığı gaz soğuyarak bir toz bulutu oluşturdu ve görüşü kısmen engelledi.",
        ],
        [
          "It can be understood from the passage that the event was valuable because it ----.",
          [
            "allowed astronomers to see how such stars lose material",
            "proved that the star would explode soon",
            "changed the shape of Orion permanently",
            "was invisible to the naked eye",
            "ended the star's life",
          ],
          "Bu tür yıldızların ölmeden önce nasıl madde kaybettiğini izleme fırsatı sağladı.",
        ],
      ],
    },
    {
      text:
        "On the night of 23 February 1987, Ian Shelton, a Canadian astronomer working at an observatory in Chile, took a photograph of the Large Magellanic Cloud, a small galaxy close to our own that can be seen from the southern hemisphere. When he developed the plate, he noticed a bright star that had not been there the night before. He went outside, looked up and saw it with his own eyes. It was a supernova, the explosion of a massive star, about 168,000 light-years away, and it became known as SN 1987A. It was the closest supernova to be observed since 1604, when Johannes Kepler had watched one in our own galaxy, long before the invention of the telescope. Because it was so close, astronomers around the world, as well as instruments on satellites, were able to study it in great detail. For the first time, they could also identify the star that had exploded by examining older photographs of the same area. To their surprise, it was a blue supergiant, a type of star that most theories had not expected to explode. Several hours before the light was seen, detectors on Earth had recorded a short burst of neutrinos, confirming predictions about how the cores of such stars collapse. In the following years, the Hubble Space Telescope revealed glowing rings of gas around the site, which had been thrown off by the star thousands of years before it exploded. Astronomers continued searching for the dense object they believed must have formed at its centre, and in the 2020s, observations finally provided strong evidence of a neutron star hidden in the dust.",
      questions: [
        [
          "According to the passage, Shelton first noticed the supernova ----.",
          [
            "on a photographic plate",
            "through a radio telescope",
            "in a satellite image",
            "while he was searching through older photographs of the same area of the sky",
            "in 1604",
          ],
          "Metne göre plakayı banyo ettiğinde önceki gece orada olmayan parlak bir yıldız fark etti.",
        ],
        [
          "Astronomers were surprised to find that the star that exploded ----.",
          [
            "was of a type not expected to explode",
            "was in our galaxy",
            "had no rings",
            "was very small",
            "was a neutron star",
          ],
          "Patlayan yıldız, çoğu kuramın patlamasını beklemediği mavi bir süperdevdi.",
        ],
        [
          "It can be understood from the passage that the search for an object at the centre of the supernova ----.",
          [
            "took several decades",
            "ended in 1987",
            "was never attempted",
            "found a black hole",
            "was carried out by Kepler",
          ],
          "Gökbilimciler aramayı sürdürdü; ancak 2020'lerde güçlü kanıt elde edildi.",
        ],
      ],
    },
    {
      text:
        "Eta Carinae, about 7,500 light-years away in the southern constellation of Carina, is one of the most massive and luminous star systems known. For most of history, it was an ordinary-looking star of moderate brightness. In the 1830s, however, it began to brighten irregularly, and in 1843 it briefly became the second brightest star in the night sky, after Sirius, even though it is hundreds of times farther away. This period, known as the Great Eruption, lasted for about twenty years. During it, the star threw off a huge amount of material, estimated at more than ten times the mass of the Sun. The star then faded, and by the 1870s it could no longer be seen without a telescope. Remarkably, the star survived. Modern telescopes have shown that the material it ejected formed a nebula of two huge, expanding clouds on either side of the star, known as the Homunculus, or 'little man', because of its shape in early telescopes. Astronomers now know that Eta Carinae is a pair of stars, the larger of which may contain around ninety times the mass of the Sun, orbiting each other every five and a half years. What caused the Great Eruption is still debated. Some researchers believe that it may have been triggered when a third star merged with one of the others. Because of its enormous mass, the main star is expected eventually to explode as a supernova, possibly within the next million years, although it is far enough away that the explosion would not harm the Earth.",
      questions: [
        [
          "According to the passage, during the Great Eruption the star ----.",
          [
            "briefly became one of the brightest stars in the sky",
            "exploded as a supernova",
            "disappeared completely",
            "moved closer to the Earth than Sirius for about twenty years",
            "became smaller",
          ],
          "Metne göre 1843'te kısa bir süre gece gökyüzünün en parlak ikinci yıldızı oldu.",
        ],
        [
          "The Homunculus is ----.",
          [
            "a cloud of material thrown off by the star",
            "a second star",
            "a type of telescope",
            "a nearby planet",
            "the name of an astronomer",
          ],
          "Yıldızın fırlattığı maddenin oluşturduğu, yıldızın iki yanında genişleyen bulutlardır.",
        ],
        [
          "It can be understood from the passage that the cause of the eruption ----.",
          [
            "is not yet fully understood",
            "was a supernova",
            "has been proved by astronomers",
            "was a collision with the Earth",
            "was Sirius",
          ],
          "Büyük Patlama'nın nedeni hâlâ tartışılmaktadır.",
        ],
      ],
    },
    {
      text:
        "For about a century, it has been clear that space itself is growing: remote galaxies are moving away from us, and the farther away they are, the faster they recede. The rate of this expansion is described by a number called the Hubble constant, and measuring it accurately is important because it helps to determine the age and future of the universe. There are two main ways to measure it. The first uses objects in nearby galaxies whose true brightness is known, such as certain pulsating stars and a type of exploding star. By comparing how bright they appear with how bright they really are, astronomers can calculate their distances and then their speeds. The second method uses detailed measurements of the cosmic microwave background, the faint radiation left over from the early universe, together with the standard model of how the universe has developed since then. For many years, the uncertainties in both methods were large enough that their results seemed to agree. As the measurements became more precise, however, a difference appeared. The first method gives a value of about 73 kilometres per second per megaparsec, while the second gives about 67. The disagreement, known as the 'Hubble tension', has persisted despite repeated checks using new telescopes, including the James Webb Space Telescope. Some astronomers still suspect that there may be undiscovered errors in the measurements. Others believe that it may be a sign that the standard model is incomplete, and that some unknown feature of the early universe or of dark energy needs to be added.",
      questions: [
        [
          "According to the passage, measuring the Hubble constant is important because it ----.",
          [
            "helps to determine the universe's age and future",
            "measures the brightness of stars",
            "explains the cosmic microwave background",
            "shows which galaxies are moving towards us at the greatest speed",
            "proves that the universe is shrinking",
          ],
          "Metne göre evrenin yaşını ve geleceğini belirlemeye yardım eder.",
        ],
        [
          "The writer says that the difference between the methods appeared when ----.",
          [
            "the measurements became more precise",
            "the James Webb telescope was launched",
            "astronomers stopped checking",
            "galaxies began moving faster",
            "the standard model was abandoned",
          ],
          "Ölçümler daha kesin hâle geldikçe bir fark ortaya çıktı.",
        ],
        [
          "It can be understood from the passage that the Hubble tension ----.",
          [
            "might reveal something missing from current theories",
            "has been solved",
            "was caused by the Webb telescope",
            "shows the universe is not expanding",
            "is unimportant",
          ],
          "Bazı gökbilimcilere göre standart modelin eksik olduğunun bir işareti olabilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In August 2019, Gennady Borisov, an amateur astronomer in Crimea, discovered a comet using a telescope that he had built himself. ---- It was only the second object ever found to have entered our solar system from another star.",
      [
        "Measurements of its path soon showed that it was travelling too fast to be bound to the Sun.",
        "Crimea lies on the Black Sea.",
        "Amateur astronomers often build their own equipment.",
        "Unlike the first such object, it had a clear tail of gas and dust.",
        "Comets are made of ice and dust.",
      ],
      "Boşluk kuyrukluyıldızın başka bir yıldızdan geldiğinin nasıl anlaşıldığını açıklayan bir cümle gerektirir; boşluğa yolunun ölçümlerinin Güneş'e bağlı kalamayacak kadar hızlı gittiğini gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The Pioneer 10 spacecraft, launched in 1972, carried a small gold-coated plaque designed to be understood by any intelligent beings who might find it. ---- Some newspapers, however, printed the image with parts of the figures removed, because they considered it indecent.",
      [
        "It showed a naked man and woman, together with a map indicating the position of the Sun.",
        "Pioneer 10 was the first spacecraft to fly past Jupiter.",
        "Gold does not rust.",
        "The plaque was designed by the astronomers Carl Sagan and Frank Drake.",
        "Many newspapers are printed every day.",
      ],
      "Boşluk 'ancak bazı gazeteler figürlerin bazı kısımlarını çıkardı' ifadesine zemin hazırlayan bir cümle gerektirir; boşluğa plakette çıplak bir erkek ve kadın ile Güneş'in konumunu gösteren bir harita olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In October 1604, a new star suddenly appeared in the sky and was studied carefully by the astronomer Johannes Kepler. ---- No supernova in our own galaxy has been seen with the naked eye since then.",
      [
        "It was a supernova, and for several weeks it was brighter than any other star.",
        "Kepler also described the orbits of the planets.",
        "Stars can be seen best on clear nights.",
        "Its remains can still be detected by modern telescopes.",
        "Astronomers use mathematics.",
      ],
      "Boşluk 'o zamandan beri' ifadesine bağlanan bir cümle gerektirir; boşluğa bunun bir süpernova olduğunu ve birkaç hafta boyunca diğer tüm yıldızlardan parlak olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "On 27 December 2004, satellites detected a flash of radiation from a magnetar about 30,000 light-years away. ---- It was the brightest event from outside the solar system ever recorded.",
      [
        "In a fraction of a second, it released more energy than the Sun produces in a hundred thousand years.",
        "Satellites orbit the Earth.",
        "December is a winter month in the northern hemisphere.",
        "Magnetars have the strongest magnetic fields known.",
        "Radiation can be dangerous.",
      ],
      "Boşluk olayın büyüklüğünü anlatan bir cümle gerektirir; boşluğa saniyenin bir kesrinde Güneş'in yüz bin yılda ürettiğinden fazla enerji saldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2003, astronomers discovered a small, reddish world far beyond Pluto and named it Sedna, after a goddess of the sea in Inuit stories. ---- Its distant path has led some scientists to suggest that an undiscovered planet may lie in the outer solar system.",
      [
        "Its orbit is so long that it takes about eleven thousand years to travel once around the Sun.",
        "Pluto was discovered in 1930.",
        "Inuit people live in the Arctic.",
        "It is one of the most distant objects known in the solar system.",
        "Planets are round.",
      ],
      "Boşluk 'uzak yolu' ifadesine bağlanan bir cümle gerektirir; boşluğa yörüngesinin o kadar uzun olduğunu ki Güneş'in çevresini bir kez dolaşmasının yaklaşık on bir bin yıl sürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In 2007, Hanny van Arkel, a Dutch schoolteacher taking part in an online project to classify galaxies, noticed a strange green cloud near one of them. ---- Astronomers concluded that the cloud was glowing because it had been lit up by a very bright galaxy centre that had since faded.",
      [
        "Professional astronomers had never seen anything like it before.",
        "The Netherlands is famous for its flowers.",
        "Teachers often have long holidays.",
        "The cloud was named after her.",
        "Galaxies contain billions of stars.",
      ],
      "Boşluk tuhaf bulutun önemini vurgulayıp açıklamaya geçen bir cümle gerektirir; boşluğa profesyonel gökbilimcilerin daha önce böyle bir şey görmediğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Some radio telescopes are surrounded by areas where radio transmissions are restricted.",
        "Mobile phones, wireless internet and even some microwave ovens are banned or limited.",
        "This protects the telescopes from interference.",
        "Many people cannot imagine life without mobile phones.",
        "Some residents of such areas say they moved there to escape modern technology.",
      ],
      odd: 3,
      why: "Parça radyo teleskoplarının çevresindeki yasak bölgeleri anlatır. Pek çok kişinin cep telefonu olmadan yaşamı düşünemediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2016, the International Astronomical Union began approving official names for bright stars.",
        "Before that, many stars had several different names.",
        "Many of the names come from Arabic.",
        "Arabic is spoken in more than twenty countries.",
        "The union has since approved hundreds of names.",
      ],
      odd: 3,
      why: "Parça yıldızlara resmî ad verilmesini anlatır. Arapçanın yirmiden fazla ülkede konuşulduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Antarctica is an excellent place for collecting meteorites.",
        "Meteorites that fall onto the ice are carried slowly by moving glaciers.",
        "Where the ice meets mountains, they collect at the surface.",
        "Their dark colour makes them easy to see against the white ice.",
        "Penguins live mainly in the southern hemisphere.",
      ],
      odd: 4,
      why: "Parça Antarktika'da göktaşı bulunmasını anlatır. Penguenlerin çoğunlukla güney yarımkürede yaşadığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Light from an exploding star can reflect off clouds of dust in space.",
        "This reflected light reaches the Earth hundreds of years later than the direct light.",
        "Using such 'light echoes', astronomers can study explosions that were seen centuries ago.",
        "Echoes are often heard in mountains.",
        "In 2008, astronomers used this method to study a supernova observed in 1572.",
      ],
      odd: 3,
      why: "Parça ışık yankılarıyla eski süpernovaların incelenmesini anlatır. Yankıların dağlarda sık duyulduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some astronomers believe that an undiscovered planet may orbit far beyond Neptune.",
        "They point to the unusual orbits of several small, distant objects.",
        "Neptune is named after the Roman god of the sea.",
        "The planet, if it exists, would be several times the mass of the Earth.",
        "Large telescopes are being used to search for it.",
      ],
      odd: 2,
      why: "Parça Neptün'ün ötesinde olabilecek keşfedilmemiş bir gezegeni anlatır. Neptün'ün adının Roma deniz tanrısından geldiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Online projects allow members of the public to help classify images of galaxies.",
        "Volunteers look at pictures and answer simple questions about their shapes.",
        "Hundreds of thousands of people have taken part.",
        "Their classifications have been used in many scientific papers.",
        "Many people spend their evenings watching television.",
      ],
      odd: 4,
      why: "Parça halkın gökada görüntülerini sınıflandırmasına yardım eden çevrimiçi projeleri anlatır. Pek çok kişinin akşamlarını televizyon izleyerek geçirdiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
