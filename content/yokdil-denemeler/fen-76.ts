import type { YokdilDeneme } from "./types";

export const FEN_76: YokdilDeneme = {
  no: 76,
  field: "fen",
  vocab: [
    [
      "The device uses nothing more than falling water to ---- a powerful electric charge.",
      ["generate", "destroy", "conceal", "measure", "purchase"],
      "Cihazın güçlü bir elektrik yükü 'üretmek' (generate) için düşen sudan başka bir şey kullanmadığı anlatılır.",
    ],
    [
      "When a magnet is brought close, the liquid forms ---- spikes on its surface.",
      ["sharp", "invisible", "frozen", "rotten", "flat"],
      "Bir mıknatıs yaklaştırıldığında sıvının yüzeyinde 'sivri' (sharp) dikenler oluştuğu anlatılır.",
    ],
    [
      "As the drop dries, the particles are carried ---- towards its edge.",
      ["outwards", "upwards into space", "backwards in time", "inwards", "nowhere"],
      "Damla kururken parçacıkların kenarına doğru 'dışarıya' (outwards) taşındığı anlatılır.",
    ],
    [
      "When a container of mixed nuts is shaken, the largest nuts tend to ---- to the top.",
      ["rise", "sink", "melt", "shrink", "break"],
      "Karışık kuruyemiş dolu bir kap sallandığında en büyük cevizlerin üste 'çıkma' (rise) eğiliminde olduğu anlatılır.",
    ],
    [
      "The mixture behaves like a liquid when stirred slowly but becomes ---- when struck hard.",
      ["solid", "invisible", "gaseous", "hot", "colourful"],
      "Karışımın yavaş karıştırıldığında sıvı gibi davrandığı ama sert vurulduğunda 'katı' (solid) hâle geldiği anlatılır.",
    ],
    [
      "The tiny bubbles collapse so violently that they ---- brief flashes of light.",
      ["give off", "take up", "put off", "turn down", "look after"],
      "Küçük kabarcıkların o kadar şiddetle çöktüğü ki kısa ışık çakmaları 'yaydığı' (give off) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the video was shared online, it ---- by millions of people.",
      ["had been watched", "watches", "has watched", "was watching", "will be watched"],
      "Geçmişteki bir andan önce tamamlanan edilgen eylem: 'had been watched'.",
    ],
    [
      "If the engineer had not been looking for a rocket fuel, the magnetic liquid ---- invented.",
      ["might not have been", "is not", "will not be", "had not been", "was not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might not have been'.",
    ],
    [
      "The effect ---- in a famous scientific journal in 1997.",
      ["was explained", "explained", "has explained", "explains", "is explaining"],
      "Etki açıklanmıştır; edilgen geçmiş zaman: 'was explained'.",
    ],
    [
      "---- the bubbles are extremely small, the temperatures inside them may be enormous.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Kabarcıkların çok küçük olması ile içlerindeki sıcaklıkların devasa olabilmesi zıttır: 'Although'.",
    ],
    [
      "The physicist, ---- device produces sparks from dripping water, lived in the nineteenth century.",
      ["whose", "who", "which", "whom", "where"],
      "Fizikçinin cihazı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the video became popular ---- physicists try to explain the effect.",
      ["did", "had", "were", "have", "do"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The researchers built a pool ---- volunteers could run across the mixture.",
      ["where", "which", "when", "whose", "that"],
      "'a pool' yer bildirir; gönüllüler orada karışımın üzerinde koşar: 'where'.",
    ],
    [
      "The harder you hit the mixture, ---- it resists.",
      ["the more strongly", "the most strongly", "more strongly", "most strongly", "so strongly"],
      "'The harder ..., the more ...' paralel yapısı: 'the more strongly'.",
    ],
    [
      "The teacher suggested that the pupils ---- the beads from a great height.",
      ["drop", "drops", "dropped", "to drop", "dropping"],
      "'suggest that' sonrası yalın fiil (subjunctive): 'drop'.",
    ],
    [
      "The liquid is said ---- for use in space by an engineer working for the space agency.",
      ["to have been developed", "developing", "to develop", "developed", "having develop"],
      "Geçmişe ait edilgen durum için mastarın geçmiş edilgen biçimi: 'to have been developed'.",
    ],
    [
      "The cans are connected in a crossed pattern ---- charge can build up quickly.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Kutuların çapraz bağlanmasının amacı yükün hızla birikebilmesidir: 'so that'.",
    ],
    [
      "The scientists had the light from the bubbles ---- with sensitive instruments.",
      ["measured", "measure", "measuring", "to measure", "measures"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'measured'.",
    ],
    [
      "Had the particles been a different shape, the ring ---- formed.",
      ["might not have", "does not", "will not", "had not", "is not"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have'.",
    ],
    [
      "Neither the presenter nor the viewers ---- the chain to rise into the air.",
      ["had expected", "expecting", "to expect", "has expected", "expect to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had expected'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1867, the physicist William Thomson, later known as Lord Kelvin, described a remarkable device that could produce sparks using nothing more than dripping water. It consists of a water supply that divides into two streams, each of which falls through a metal ring and into a metal container below, {1} the ring on each side is connected by a wire to the container on the opposite side. The device works because of a small, random imbalance of electric charge that is always present. If one container happens to have a slight positive charge, the ring connected to it will also be positive, {2} it will attract negative charge into the water falling through it. The negatively charged drops then fall into the other container, making it more negative, {3} this in turn makes the ring connected to it more negative, so that it attracts positive charge into the stream on the other side. In this way, the imbalance grows rapidly, {4} after a short time the difference in charge between the two containers becomes so great that a spark jumps between them. The device is often called the Kelvin water dropper. It demonstrates how a small difference can be amplified by a process of positive feedback, {5} it is still used by teachers to show that large voltages can be produced by surprisingly simple means.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Akışların halkalardan kaplara düşmesi ve halkaların karşı taraftaki kaplara bağlanması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Halkanın pozitif olması ve sudaki negatif yükü çekmesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Negatif damlaların diğer kabı daha negatif yapması ve bunun bağlı halkayı etkilemesi birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Dengesizliğin hızla büyümesi ve kısa sürede kıvılcım çıkması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Cihazın olumlu geri beslemeyi göstermesi ve öğretmenlerce hâlâ kullanılması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the early 1960s, an engineer named Steve Papell, working for the American space agency, was looking for a way to control the movement of rocket fuel in conditions of weightlessness, {1} without gravity, liquid fuel would float around inside the tank rather than flowing towards the engine. He developed a liquid containing extremely small particles of a magnetic iron compound, each only around ten billionths of a metre across, coated with a substance that prevented them from sticking together and suspended in a liquid such as oil. The result, known as a ferrofluid, behaves like an ordinary liquid until a magnet is brought close to it, {2} it then responds dramatically, forming a pattern of sharp spikes on its surface as the particles line up along the lines of the magnetic field. The fuel idea was never put into practice, {3} ferrofluids soon found many other uses. They are used as seals in computer hard drives and other machines, where a ring of ferrofluid held in place by a magnet keeps dust out while allowing a shaft to turn freely, {4} they are also used to cool the coils of loudspeakers and to damp unwanted vibrations. Researchers are investigating whether ferrofluids could be used in medicine, for example to guide drugs to particular parts of the body, {5} artists have used them to create moving sculptures controlled by hidden magnets.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "until", "so that"],
          "Bir yol aramasının nedeni yerçekimi olmadan yakıtın tankta yüzmesidir: 'because'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "Mıknatıs yaklaştırılması ve sıvının çarpıcı tepki vermesi birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["but", "and", "so", "because", "unless"],
          "Yakıt fikrinin uygulanmaması ile ferroakışkanların başka kullanımlar bulması karşıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Sızdırmazlık için kullanılmaları ve hoparlörleri soğutmak için de kullanılmaları birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["while", "because", "unless", "until", "so that"],
          "Araştırmacıların tıbbi kullanımları araştırması ile sanatçıların heykeller yapması karşılaştırılır: 'while'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the device uses nothing but dripping water, ----.",
      [
        "it can produce sparks between its containers",
        "water is wet",
        "metal conducts electricity",
        "physicists are clever",
        "it was described by a famous physicist in 1867",
      ],
      "'Although' zıtlık ister: cihaz damlayan sudan başka bir şey kullanmasa da kapları arasında kıvılcım üretebilir.",
    ],
    [
      "If the particles had not been coated, ----.",
      [
        "they would have stuck together and settled out of the liquid",
        "magnets are strong",
        "oil is slippery",
        "iron is heavy",
        "the liquid would have formed sharp spikes near a magnet",
      ],
      "Üçüncü tip koşul: parçacıklar kaplanmasaydı birbirine yapışıp sıvıdan çökerlerdi.",
    ],
    [
      "----, the scientists found that the particles collected at the edge of the drop.",
      [
        "Watching the drop under a microscope",
        "Although coffee is brown",
        "Unless it was cold",
        "Since cups are round",
        "While the drop was being poured into a larger container",
      ],
      "Damlayı mikroskop altında izleyen bilim insanları parçacıkların damlanın kenarında toplandığını buldu.",
    ],
    [
      "The large nuts rise to the top ----.",
      [
        "because smaller pieces fill the gaps beneath them as the container is shaken",
        "although they are heavy",
        "unless the nuts are fresh",
        "so that people can eat them",
        "while the container is being sold in shops",
      ],
      "Büyük cevizler üste çıkar, çünkü kap sallanırken küçük parçalar altlarındaki boşlukları doldurur.",
    ],
    [
      "Since the chain is pulled upwards as it leaves the jar, ----.",
      [
        "it can rise above the rim before falling to the floor",
        "chains are made of metal",
        "jars are made of glass",
        "floors are hard",
        "the effect was first shown in a popular online video",
      ],
      "'Since' neden bildirir: zincir kavanozdan çıkarken yukarı çekildiğinden yere düşmeden önce kenarın üstüne yükselebilir.",
    ],
    [
      "Not only do the bubbles produce light, ----.",
      [
        "but they may also reach temperatures of thousands of degrees",
        "and water is clear",
        "since sound is loud",
        "so bubbles are small",
        "unless the effect had been discovered in Germany in 1934",
      ],
      "'Not only ... but also' yapısı tamamlanır: kabarcıklar yalnızca ışık üretmekle kalmaz, binlerce dereceye de ulaşabilir.",
    ],
    [
      "Once the runner stops moving, ----.",
      [
        "the mixture becomes liquid again and he begins to sink",
        "mixtures are messy",
        "running is tiring",
        "pools are deep",
        "the volunteers had already run across the pool",
      ],
      "Koşucu hareket etmeyi bırakınca karışım yeniden sıvılaşır ve batmaya başlar.",
    ],
    [
      "Unless a magnet is brought close to it, ----.",
      [
        "the ferrofluid behaves like an ordinary liquid",
        "magnets are metal",
        "liquids flow",
        "oil is dark",
        "the engineer would not have looked for a rocket fuel",
      ],
      "'Unless' olumsuz koşul: yakınına bir mıknatıs getirilmedikçe ferroakışkan sıradan bir sıvı gibi davranır.",
    ],
    [
      "The charge on the containers grows so large ----.",
      [
        "that a spark eventually jumps between them",
        "although the water is cold",
        "because the rings are metal",
        "unless the water stops",
        "while teachers use the device in classrooms",
      ],
      "Kaplardaki yük o kadar büyür ki sonunda aralarında bir kıvılcım atlar.",
    ],
    [
      "Even though the effect looks simple, ----.",
      [
        "physicists took years to explain it fully",
        "coffee is popular",
        "drops are small",
        "cups are white",
        "it can be seen when a drop of coffee dries",
      ],
      "'Even though' zıtlık ister: etki basit görünse de fizikçilerin onu tam açıklaması yıllar aldı.",
    ],
    [
      "As the particles line up along the magnetic field, ----.",
      [
        "the surface of the liquid forms a pattern of spikes",
        "magnets attract iron",
        "fields are invisible",
        "the liquid is dark",
        "the liquid was developed by an engineer in the 1960s",
      ],
      "Parçacıklar manyetik alan boyunca dizildikçe sıvının yüzeyi bir diken deseni oluşturur.",
    ],
  ],
  enTr: [
    [
      "The water falls through a metal ring into a container.",
      [
        "Su metal bir halkadan geçerek bir kaba düşer.",
        "Su bir kaptan metal bir halkaya yükselir.",
        "Metal halka suyu kaba taşır.",
        "Su hiç düşmez.",
        "Su yoktur.",
      ],
      "'The water falls through a metal ring' 'su metal bir halkadan geçerek düşer', 'into a container' 'bir kaba' karşılığıdır.",
    ],
    [
      "The particles are coated to stop them from sticking together.",
      [
        "Parçacıklar birbirine yapışmalarını önlemek için kaplanır.",
        "Parçacıklar birbirine yapışmaları için kaplanır.",
        "Kaplama parçacıkları birbirine yapıştırır.",
        "Parçacıklar hiç kaplanmaz.",
        "Parçacık yoktur.",
      ],
      "'The particles are coated' 'parçacıklar kaplanır', 'to stop them from sticking together' 'birbirine yapışmalarını önlemek için' karşılığıdır.",
    ],
    [
      "Water evaporates more quickly at the edge of a drop.",
      [
        "Su bir damlanın kenarında daha hızlı buharlaşır.",
        "Su bir damlanın ortasında daha hızlı donar.",
        "Damlanın kenarı suyu buharlaştırmaz.",
        "Su hiç buharlaşmaz.",
        "Damla yoktur.",
      ],
      "'Water evaporates more quickly' 'su daha hızlı buharlaşır', 'at the edge of a drop' 'bir damlanın kenarında' karşılığıdır.",
    ],
    [
      "Shaking makes the smaller pieces move to the bottom.",
      [
        "Sallamak küçük parçaların dibe gitmesine yol açar.",
        "Sallamak küçük parçaların üste çıkmasına yol açar.",
        "Küçük parçalar kabı sallar.",
        "Sallamanın hiçbir etkisi yoktur.",
        "Parça yoktur.",
      ],
      "'Shaking makes the smaller pieces move' 'sallamak küçük parçaların gitmesine yol açar', 'to the bottom' 'dibe' karşılığıdır.",
    ],
    [
      "The bubbles are produced by powerful sound waves.",
      [
        "Kabarcıklar güçlü ses dalgalarıyla oluşturulur.",
        "Kabarcıklar güçlü ses dalgaları üretir.",
        "Ses dalgaları kabarcıkları yok eder.",
        "Kabarcıklar hiç oluşmaz.",
        "Kabarcık yoktur.",
      ],
      "'The bubbles are produced' 'kabarcıklar oluşturulur', 'by powerful sound waves' 'güçlü ses dalgalarıyla' karşılığıdır.",
    ],
    [
      "A person can run across the mixture without sinking.",
      [
        "Bir insan batmadan karışımın üzerinde koşabilir.",
        "Bir insan karışımın içinde hemen batar.",
        "Karışım insanın üzerinde koşar.",
        "Kimse karışımın yakınına gidemez.",
        "Karışım yoktur.",
      ],
      "'A person can run across the mixture' 'bir insan karışımın üzerinde koşabilir', 'without sinking' 'batmadan' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Küçük bir dengesizlik hızla büyük bir farka dönüşür.",
      [
        "A small imbalance quickly turns into a large difference.",
        "A large difference quickly turns into a small imbalance.",
        "The imbalance never changes.",
        "A difference turns the imbalance.",
        "There is no imbalance.",
      ],
      "'Küçük bir dengesizlik dönüşür' 'a small imbalance turns', 'hızla büyük bir farka' 'quickly into a large difference' karşılığıdır.",
    ],
    [
      "Ferroakışkanlar bilgisayar disklerinde conta olarak kullanılır.",
      [
        "Ferrofluids are used as seals in computer hard drives.",
        "Computer hard drives are used to make ferrofluids.",
        "Ferrofluids damage computer hard drives.",
        "Seals use ferrofluids as computers.",
        "There are no ferrofluids.",
      ],
      "'Ferroakışkanlar kullanılır' 'ferrofluids are used', 'bilgisayar disklerinde conta olarak' 'as seals in computer hard drives' karşılığıdır.",
    ],
    [
      "Parçacıkların biçimini değiştirmek halkanın oluşmasını engelledi.",
      [
        "Changing the shape of the particles prevented the ring from forming.",
        "Changing the ring prevented the particles from forming.",
        "The shape of the particles had no effect on the ring.",
        "The ring changed the shape of the particles.",
        "There were no particles.",
      ],
      "'Parçacıkların biçimini değiştirmek' 'changing the shape of the particles', 'halkanın oluşmasını engelledi' 'prevented the ring from forming' karşılığıdır.",
    ],
    [
      "Etki, toprak kaymalarını ve tahılın depolanmasını anlamada önemlidir.",
      [
        "The effect is important in understanding landslides and the storage of grain.",
        "Landslides and grain storage are important in understanding nothing.",
        "The effect causes landslides in grain stores.",
        "The effect has no practical importance.",
        "There is no effect.",
      ],
      "'Etki önemlidir' 'the effect is important', 'toprak kaymalarını ve tahılın depolanmasını anlamada' 'in understanding landslides and the storage of grain' karşılığıdır.",
    ],
    [
      "Kabarcıklar çökerken kısa ışık çakmaları yayar.",
      [
        "The bubbles give off brief flashes of light as they collapse.",
        "The bubbles absorb all light as they grow.",
        "Flashes of light collapse the bubbles.",
        "The bubbles never collapse.",
        "There are no bubbles.",
      ],
      "'Kabarcıklar kısa ışık çakmaları yayar' 'the bubbles give off brief flashes of light', 'çökerken' 'as they collapse' karşılığıdır.",
    ],
    [
      "Araştırmacılar bu sıvıları vücut zırhında kullanmayı araştırmaktadır.",
      [
        "Researchers are investigating the use of these fluids in body armour.",
        "Body armour is investigating the researchers.",
        "These fluids cannot be used for anything.",
        "Researchers have banned these fluids.",
        "There are no researchers.",
      ],
      "'Araştırmacılar araştırmaktadır' 'researchers are investigating', 'bu sıvıları vücut zırhında kullanmayı' 'the use of these fluids in body armour' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Anyone who has spilled a drop of coffee and left it to dry has probably noticed that the stain it leaves is not evenly coloured but has a dark ring around its edge. In 1997, a team of physicists at the University of Chicago published a paper explaining this everyday effect. They showed that when a drop of liquid containing tiny particles, such as coffee grounds, rests on a surface, its edge tends to become fixed in place. As the drop dries, water evaporates more quickly from the thin edge than from the thicker centre. To replace the water lost at the edge, liquid flows outwards from the centre, carrying the particles with it, so that by the time the drop has dried, most of the particles have been deposited in a ring at the edge. The effect is not limited to coffee; it occurs with many liquids containing particles, including paints and inks. This can be a problem in technologies that depend on drying liquids to produce an even layer of material, such as printing, the manufacture of electronic circuits and some medical tests, where uneven deposits can affect the results. Researchers have therefore looked for ways to prevent the effect. In 2011, physicists at the University of Pennsylvania reported that the shape of the particles makes a surprising difference. When they replaced round particles with slightly stretched, egg-shaped ones, the particles stuck together at the surface of the drop, forming a loose network that prevented them from being carried to the edge, and the drop dried to leave an even layer. Other researchers have shown that adding certain substances or controlling the temperature of the surface can also reduce the ring.",
      questions: [
        [
          "According to the passage, the ring forms because ----.",
          [
            "liquid flows outwards to replace water evaporating at the edge",
            "particles are heavier at the centre",
            "the centre dries first",
            "egg-shaped particles stick together at the surface and form a loose network",
            "coffee contains oil",
          ],
          "Metne göre kenarda buharlaşan suyun yerini almak için sıvı merkezden dışarıya akar ve parçacıkları taşır.",
        ],
        [
          "The writer mentions printing and electronic circuits to show that ----.",
          [
            "the effect can cause problems in technology",
            "coffee is used in printing",
            "circuits are made of coffee",
            "the effect improves printing",
            "the effect occurs only in laboratories",
          ],
          "Düzgün bir katman üretmek için kuruyan sıvılara dayanan teknolojilerde düzensiz birikintiler sonuçları etkileyebilir.",
        ],
        [
          "It can be understood from the passage that using egg-shaped particles ----.",
          [
            "can prevent the ring from forming",
            "makes the ring darker",
            "speeds up evaporation",
            "has no effect",
            "makes drops larger",
          ],
          "Yuvarlak yerine yumurta biçimli parçacıklar kullanıldığında damla düzgün bir katman bırakarak kurudu.",
        ],
      ],
    },
    {
      text:
        "If a container of mixed nuts is shaken, the largest nuts, such as Brazil nuts, often end up at the top, even though they may be heavier than the smaller pieces. This puzzling observation, known as the Brazil nut effect, is an example of the strange behaviour of granular materials, collections of separate solid particles such as sand, grain, gravel and powders, which can behave in some ways like solids and in others like liquids. In 1987, researchers used computer simulations to suggest one explanation. Each time the container is shaken, the particles are briefly lifted and small gaps open up beneath them. Small particles can easily fall into gaps beneath larger ones, but a large particle can only move downwards if a big enough gap opens up beneath it, which is much less likely. As a result, with repeated shaking, the large particles are gradually pushed upwards. Later experiments showed that other processes are also involved. In many containers, shaking sets up slow circulating currents, in which particles rise in the centre and move down along the walls, where the gaps are too narrow for large particles to follow, so that they are left at the top. The density of the particles, the shape of the container and even the air between the grains can also influence the result, and under certain conditions the opposite effect occurs and the large particles sink to the bottom. Understanding such effects is important in many industries, including the production of medicines, food and building materials, where mixtures of powders must be kept evenly mixed. Scientists also study granular materials to better understand natural events such as landslides and avalanches.",
      questions: [
        [
          "According to the passage, the 1987 explanation suggested that large particles rise because ----.",
          [
            "small particles fall more easily into gaps beneath them",
            "they are lighter",
            "air pushes them up",
            "particles rise in the centre and move down along the walls of the container",
            "they are attracted by magnets",
          ],
          "Metne göre küçük parçacıklar büyüklerin altındaki boşluklara kolayca düşer, büyük parçacık ise yalnızca yeterince büyük bir boşluk açılırsa inebilir.",
        ],
        [
          "The writer mentions that the opposite effect can occur to show that ----.",
          [
            "the behaviour of granular materials depends on many conditions",
            "the effect never happens",
            "Brazil nuts are always heaviest",
            "computer simulations are wrong",
            "containers are always the same",
          ],
          "Parçacık yoğunluğu, kabın biçimi ve hava gibi etkenler sonucu etkiler.",
        ],
        [
          "It can be understood from the passage that the effect matters to industries because ----.",
          [
            "mixtures of powders must stay evenly mixed",
            "they sell Brazil nuts",
            "landslides damage factories",
            "powders are dangerous",
            "containers are expensive",
          ],
          "İlaç, gıda ve yapı malzemeleri üretiminde toz karışımlarının düzgün karışık kalması gerekir.",
        ],
      ],
    },
    {
      text:
        "In 2013, the British science presenter Steve Mould posted a video online showing what happened when he dropped one end of a long chain of small metal beads from a tall jar onto the floor far below. Instead of simply sliding over the rim of the jar, the chain rose into the air in an arc above the jar before falling to the ground, forming what looked like a fountain of beads. The video was watched millions of times, and the phenomenon became known as the chain fountain or the Mould effect. Many viewers, including physicists, were surprised, since it seemed that something must be pushing the chain upwards. In 2014, two researchers at the University of Cambridge, John Biggins and Mark Warner, published an explanation. They pointed out that the beads are connected by short rods that act like small stiff links. When a section of chain at the top of the pile is suddenly pulled upwards, the link being lifted tends to rotate, and in doing so one end of it presses down on the pile of chain beneath it. The pile pushes back, giving the chain an upward kick. The researchers argued that this push from the pile, combined with the speed of the falling chain, causes the chain to rise above the rim of the jar, and that the taller the drop, the higher the fountain rises. Their calculations agreed well with experiments using high-speed cameras. The researchers suggested that the same principle might be relevant to other situations in which chains or cables are rapidly pulled from a pile, such as when an anchor chain runs out from a ship, and the effect has since been studied by several other groups.",
      questions: [
        [
          "According to the passage, viewers were surprised because the chain ----.",
          [
            "rose into the air above the jar",
            "broke into pieces",
            "stayed in the jar",
            "ran out from a ship like an anchor chain",
            "changed colour",
          ],
          "Metne göre zincir kavanozun kenarından kayıp düşmek yerine yere düşmeden önce havada bir yay çizerek yükseldi.",
        ],
        [
          "The researchers explained that the chain receives an upward push from ----.",
          [
            "the pile of chain beneath it",
            "the air in the room",
            "the walls of the jar",
            "magnets",
            "the presenter's hand",
          ],
          "Kaldırılan halka dönerek alttaki zincir yığınına bastırır ve yığın geri iterek zincire yukarı doğru bir itme verir.",
        ],
        [
          "It can be understood from the passage that the researchers' explanation ----.",
          [
            "agreed with experimental measurements",
            "was rejected by other physicists",
            "involved magnetism",
            "could not be tested",
            "applied only to jars",
          ],
          "Hesaplamaları yüksek hızlı kameralarla yapılan deneylerle iyi uyuştu.",
        ],
      ],
    },
    {
      text:
        "In 1934, two German scientists working at the University of Cologne were experimenting with sound waves to speed up the development of photographic film when they noticed small dots on the film after developing it. They realised that the dots had been caused by flashes of light coming from tiny bubbles in the liquid, which had been created by the powerful sound waves. The phenomenon, in which bubbles in a liquid emit light when exposed to intense sound, became known as sonoluminescence. For decades, it was difficult to study, since the bubbles were short-lived and appeared at random among clouds of other bubbles. In 1989, however, a researcher in the United States found a way of trapping a single bubble in a flask of water using carefully tuned sound waves, so that it grew and collapsed tens of thousands of times a second, producing a faint but steady glow visible in a darkened room. Measurements showed that each flash lasted for less than a billionth of a second. As the sound wave passes, the bubble expands and then collapses extremely rapidly, compressing the gas inside it, and this compression heats the gas to very high temperatures, which some estimates put at many thousands of degrees, hotter than the surface of the sun. Exactly how the light is produced is still debated. In the early 2000s, a few researchers claimed that the collapse of such bubbles might be powerful enough to cause nuclear fusion, but these claims were not confirmed by other scientists and were widely rejected. Nevertheless, sonoluminescence remains of interest to physicists, as it shows how sound can concentrate energy into an extremely small space.",
      questions: [
        [
          "According to the passage, sonoluminescence was discovered when ----.",
          [
            "scientists noticed dots on photographic film",
            "a single bubble was trapped in a flask",
            "nuclear fusion was achieved",
            "researchers claimed that collapsing bubbles might be powerful enough to cause fusion",
            "the sun was being studied",
          ],
          "Metne göre film geliştirmeyi hızlandırmak için ses dalgalarıyla deney yapan bilim insanları filmde küçük noktalar fark etti.",
        ],
        [
          "The 1989 discovery made sonoluminescence easier to study because ----.",
          [
            "a single bubble could be trapped and made to glow steadily",
            "the bubbles became larger",
            "the flashes lasted longer",
            "sound waves were no longer needed",
            "the light became very bright",
          ],
          "Dikkatle ayarlanmış ses dalgalarıyla tek bir kabarcık bir şişede tutulabildi ve sürekli bir parıltı üretti.",
        ],
        [
          "It can be understood from the passage that claims of nuclear fusion in bubbles ----.",
          [
            "were not accepted by most scientists",
            "were confirmed",
            "led to new power stations",
            "were made in 1934",
            "explained how the light is produced",
          ],
          "Bu iddialar başka bilim insanlarınca doğrulanmadı ve geniş çapta reddedildi.",
        ],
      ],
    },
    {
      text:
        "If cornflour is mixed with roughly an equal amount of water, the result is a strange substance that behaves in a way that seems to defy common sense. When it is stirred slowly or when a hand is gently lowered into it, it flows like a thick liquid. But if it is struck sharply, squeezed quickly or stirred hard, it suddenly becomes stiff, behaving almost like a solid. A ball of the mixture can be rolled between the hands, but as soon as the hands stop moving, it melts into a puddle. Substances like this are known as non-Newtonian fluids, because they do not follow the simple relationship between force and flow that the scientist Isaac Newton described for ordinary liquids such as water. The cornflour mixture is an example of a shear-thickening fluid, which becomes thicker when a force is applied to it quickly. Physicists believe that, when the mixture is disturbed slowly, the water lubricates the grains, allowing them to slide past one another; but when it is disturbed suddenly, the grains are pushed into contact and jam together, forming temporary solid structures. This allows people to run across a pool filled with the mixture, as long as they keep moving quickly; if they stop, they begin to sink. Other non-Newtonian fluids behave in the opposite way, becoming thinner when force is applied, as in the case of certain paints and ketchup, which flows more easily after the bottle is shaken. Shear-thickening fluids are being investigated for practical uses, including flexible body armour that hardens on impact and protective padding for sports equipment.",
      questions: [
        [
          "According to the passage, the cornflour mixture becomes stiff when ----.",
          [
            "it is struck or squeezed quickly",
            "it is left to stand",
            "it is heated",
            "the bottle is shaken, as in the case of certain paints and ketchup",
            "water is added",
          ],
          "Metne göre sertçe vurulduğunda, hızla sıkıldığında ya da sert karıştırıldığında aniden sertleşir.",
        ],
        [
          "Physicists believe that the mixture stiffens because ----.",
          [
            "the grains jam together when disturbed suddenly",
            "the water freezes",
            "the grains dissolve",
            "air enters the mixture",
            "the grains become lighter",
          ],
          "Ani bir etkiyle taneler temasa geçip sıkışır ve geçici katı yapılar oluşturur.",
        ],
        [
          "It can be understood from the passage that ketchup ----.",
          [
            "behaves in the opposite way to the cornflour mixture",
            "is a shear-thickening fluid",
            "follows Newton's description exactly",
            "is used in body armour",
            "becomes solid when shaken",
          ],
          "Bazı Newtonyen olmayan akışkanlar kuvvet uygulandığında incelir; ketçap şişe sallandıktan sonra daha kolay akar.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "When a glass of wine is swirled, drops of liquid often form on the inside of the glass above the surface and run back down. ---- These drops are sometimes called the 'tears' or 'legs' of the wine.",
      [
        "This happens because alcohol evaporates faster than water, creating differences in surface tension that pull liquid up the glass.",
        "Wine is made from grapes.",
        "Glasses can break easily.",
        "Some people mistakenly believe that the drops show how good the wine is.",
        "Liquids take the shape of their container.",
      ],
      "Boşluk damlaların nedenini açıklayıp adlarına bağlanan bir cümle gerektirir; boşluğa alkolün sudan hızlı buharlaşarak sıvıyı bardak boyunca yukarı çeken yüzey gerilimi farkları yarattığını söyleyen cümle gelmelidir.",
    ],
    [
      "Pieces of breakfast cereal floating in a bowl of milk tend to cluster together or stick to the sides of the bowl. ---- Scientists have studied the effect to understand how small objects interact on the surface of liquids.",
      [
        "This happens because each floating piece bends the surface of the milk, and the curved surfaces draw the pieces together.",
        "Milk is a good source of calcium.",
        "Bowls are made of many materials.",
        "The same effect can cause floating insects or small particles to gather on the surface of a pond.",
        "Cereals are eaten in the morning.",
      ],
      "Boşluk kümelenmenin nedenini açıklayıp bilim insanlarının incelemesine bağlanan bir cümle gerektirir; boşluğa yüzen her parçanın süt yüzeyini büktüğünü ve eğri yüzeylerin parçaları birbirine çektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1963, the British engineer Alan Kaye described a strange effect that can be seen when a thin stream of shampoo is poured onto a surface. ---- The effect lasts only a fraction of a second before the stream collapses.",
      [
        "Occasionally, a jet of liquid leaps upwards out of the growing pile, as if bouncing off it.",
        "Shampoo is used to wash hair.",
        "Engineers design machines.",
        "The effect has been filmed with high-speed cameras, which show the jet sliding on a thin layer of liquid.",
        "Surfaces can be smooth or rough.",
      ],
      "Boşluk etkiyi tanımlayıp kısa sürmesine bağlanan bir cümle gerektirir; boşluğa zaman zaman büyüyen yığından sanki seker gibi yukarı doğru bir sıvı jetinin fırladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some materials give off light when they are crushed, scratched or broken. ---- The effect, known as triboluminescence, can be seen in the dark when certain sweets containing wintergreen oil are crunched.",
      [
        "Breaking the material separates electric charges, and the sparks that result can excite the surrounding air to glow.",
        "Sweets contain sugar.",
        "Light travels very fast.",
        "Scientists have suggested that the effect could be used to detect damage inside bridges and aircraft.",
        "Darkness makes it difficult to see.",
      ],
      "Boşluk ışığın nedenini açıklayıp etkinin adına bağlanan bir cümle gerektirir; boşluğa malzemeyi kırmanın elektrik yüklerini ayırdığını ve ortaya çıkan kıvılcımların çevredeki havayı parlattığını söyleyen cümle gelmelidir.",
    ],
    [
      "When lightning strikes a person, it sometimes leaves a pattern of red, branching lines on the skin that resembles a fern. ---- The marks usually fade within a few days.",
      [
        "These patterns are named after the German physicist Georg Christoph Lichtenberg, who studied similar shapes in the eighteenth century.",
        "Lightning is very hot.",
        "Ferns grow in damp places.",
        "Similar patterns can be created deliberately in blocks of plastic by firing a beam of electrons into them.",
        "Skin protects the body.",
      ],
      "Boşluk desenin adını açıklayıp izlerin kaybolmasına bağlanan bir cümle gerektirir; boşluğa bu desenlerin benzer biçimleri on sekizinci yüzyılda inceleyen Alman fizikçi Lichtenberg'in adını taşıdığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1905, the German physicist Heinrich Rubens demonstrated a way of making sound waves visible. ---- When sound is played into the tube, the flames rise and fall in a pattern that matches the waves.",
      [
        "He used a long metal tube filled with gas and pierced with a row of small holes, from which flames burned.",
        "Germany has many universities.",
        "Gas is used for cooking.",
        "Teachers still use similar tubes today, although they must take care because of the danger of fire.",
        "Sound cannot travel in space.",
      ],
      "Boşluk düzeneği tanıtıp tüpün işleyişine bağlanan bir cümle gerektirir; boşluğa gazla dolu ve alevlerin yandığı küçük deliklerle delinmiş uzun metal bir tüp kullandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1866, the German physicist August Kundt used a glass tube to measure the speed of sound.",
        "He scattered fine powder inside the tube and produced a sound at one end.",
        "The powder gathered in small heaps at regular intervals.",
        "Many laboratories still use glass tubes today.",
        "The distance between the heaps allowed him to calculate the speed.",
      ],
      odd: 3,
      why: "Parça Kundt'un ses hızını ölçmek için kullandığı tüpü anlatır. Pek çok laboratuvarın bugün hâlâ cam tüp kullandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A Van de Graaff generator uses a moving belt to build up a large electric charge on a metal dome.",
        "A person touching the dome may find that their hair stands on end.",
        "This happens because each hair receives the same charge and the hairs push one another apart.",
        "Hair grows about a centimetre a month.",
        "Larger generators were once used in research on atoms.",
      ],
      odd: 3,
      why: "Parça Van de Graaff üretecini anlatır. Saçın ayda yaklaşık bir santimetre uzadığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dry ice is the solid form of carbon dioxide.",
        "At normal pressure, it turns directly into gas without melting.",
        "Carbon dioxide is released when fuels are burned.",
        "It is used to keep food cold during transport.",
        "It is also used to create fog effects in theatres.",
      ],
      odd: 2,
      why: "Parça kuru buzu anlatır. Yakıtlar yakıldığında karbondioksit açığa çıktığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Powerful sound waves can be used to hold small objects in the air.",
        "Researchers have levitated drops of water, small insects and pieces of polystyrene.",
        "The objects are trapped at points where the pressure of the waves is lowest.",
        "Polystyrene is used to make packaging.",
        "The technique could be used to handle delicate materials without touching them.",
      ],
      odd: 3,
      why: "Parça ses dalgalarıyla nesnelerin havada tutulmasını anlatır. Polistirenin ambalaj yapımında kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A Bologna bottle is a small glass bottle that has been cooled very quickly.",
        "It can be struck with a hammer without breaking.",
        "However, if a tiny sharp object is dropped inside, it shatters.",
        "This is because the glass is under great internal stress.",
        "Bologna is a city in northern Italy.",
      ],
      odd: 4,
      why: "Parça hızla soğutulmuş cam şişeyi anlatır. Bologna'nın kuzey İtalya'da bir kent olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Every year, a humorous prize is awarded for research that first makes people laugh and then makes them think.",
        "Past winners have studied why dry spaghetti rarely snaps into just two pieces.",
        "Laughter is good for health.",
        "Some winners have later gone on to win the Nobel Prize.",
        "The prizes are presented at a lively ceremony at a university in the United States.",
      ],
      odd: 2,
      why: "Parça insanları önce güldürüp sonra düşündüren araştırmalara verilen ödülü anlatır. Gülmenin sağlığa iyi geldiğini söyleyen III. cümle konu dışıdır.",
    },
  ],
};
