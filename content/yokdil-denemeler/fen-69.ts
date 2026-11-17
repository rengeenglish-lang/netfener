import type { YokdilDeneme } from "./types";

export const FEN_69: YokdilDeneme = {
  no: 69,
  field: "fen",
  vocab: [
    [
      "The mechanical duck seemed to eat and digest grain, but the effect was in fact a clever ----.",
      ["trick", "accident", "disease", "reward", "argument"],
      "Mekanik ördeğin tahılı yiyip sindiriyormuş gibi göründüğü, ama etkinin aslında akıllıca bir 'hile' (trick) olduğu anlatılır.",
    ],
    [
      "The little robots moved towards light but ---- away when it became too bright.",
      ["turned", "fell", "slept", "paid", "wrote"],
      "Küçük robotların ışığa doğru gittiği, ama ışık fazla parlak olunca 'geri döndüğü' (turned away) anlatılır.",
    ],
    [
      "The automaton can be ---- to write any short text by changing a set of wheels inside it.",
      ["programmed", "punished", "fed", "repaired by hand", "frightened"],
      "Otomatın içindeki bir dizi çark değiştirilerek herhangi bir kısa metni yazacak biçimde 'programlanabildiği' (programmed) anlatılır.",
    ],
    [
      "The engineer's book ---- dozens of ingenious machines, including clocks driven by water.",
      ["describes", "destroys", "forbids", "sells", "hides"],
      "Mühendisin kitabının su ile çalışan saatler de dahil düzinelerce dâhiyane makineyi 'betimlediği' (describes) anlatılır.",
    ],
    [
      "The robot arm took over a task that was dangerous for human workers because the metal parts were extremely ----.",
      ["hot", "light", "cheap", "soft", "colourful"],
      "Metal parçalar son derece 'sıcak' (hot) olduğu için robot kolun insan işçiler için tehlikeli olan bir işi üstlendiği anlatılır.",
    ],
    [
      "The robot moved so slowly that it sometimes took hours to ---- a simple task.",
      ["carry out", "give up", "look up", "turn down", "run into"],
      "Robotun o kadar yavaş hareket ettiği anlatılır ki basit bir işi 'gerçekleştirmesi' (carry out) bazen saatler sürerdi.",
    ],
  ],
  grammar: [
    [
      "By the time he built the duck, the inventor ---- already famous for a mechanical flute player.",
      ["was", "has been", "is", "will be", "had been being"],
      "Geçmişteki bir andaki durum: 'was'.",
    ],
    [
      "If the batteries had not run low, the robots ---- to their hutch.",
      ["might not have returned", "will not return", "do not return", "had not returned", "would not return"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have returned'.",
    ],
    [
      "The three automata ---- by a Swiss watchmaker and his son in the 1770s.",
      ["were built", "built", "have built", "build", "are building"],
      "Otomatlar yapılmıştır; edilgen geçmiş zaman: 'were built'.",
    ],
    [
      "---- the robot was slow and clumsy, it was the first that could reason about its own actions.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Robotun yavaş ve hantal olması ile eylemleri hakkında akıl yürütebilen ilk robot olması zıttır: 'Although'.",
    ],
    [
      "The engineer, ---- book was written in 1206, worked for rulers in south-eastern Anatolia.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin kitabı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the robot had been installed in the factory ---- managers begin to see its value.",
      ["did", "had", "were", "have", "does"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The automata are kept in a museum in Neuchâtel, ---- they are demonstrated to visitors once a month.",
      ["where", "which", "when", "whose", "that"],
      "'a museum' yer bildirir; otomatlar orada gösterilir: 'where'.",
    ],
    [
      "The more realistic a robot looks, ---- people may feel when it moves in a strange way.",
      ["the more uncomfortable", "the most uncomfortable", "more uncomfortable", "most uncomfortable", "so uncomfortable"],
      "'The more ..., the more ...' paralel yapısı: 'the more uncomfortable'.",
    ],
    [
      "The company insisted that each robot ---- carefully before being sold.",
      ["be tested", "is tested", "was tested", "to be tested", "being tested"],
      "'insist that' sonrası yalın fiil (subjunctive), edilgen: 'be tested'.",
    ],
    [
      "The original duck is thought ---- in the nineteenth century.",
      ["to have been lost", "losing", "to be losing", "lost", "having lose"],
      "Geçmişe ait edilgen durum için mastarın geçmiş biçimi: 'to have been lost'.",
    ],
    [
      "The robot carried a camera and a range-finder ---- it could build a map of its surroundings.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Kamera ve mesafe ölçer taşımasının amacı çevresinin haritasını çıkarabilmesidir: 'so that'.",
    ],
    [
      "The museum has the automata ---- regularly by expert watchmakers.",
      ["serviced", "service", "servicing", "to service", "services"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'serviced'.",
    ],
    [
      "Had the inventor not hidden the droppings inside the duck, the illusion ---- at once.",
      ["might have failed", "fails", "will fail", "had failed", "is failing"],
      "Devrik üçüncü tip koşul cümlesi: 'might have failed'.",
    ],
    [
      "Neither the visitors nor the journalists ---- how the duck really worked.",
      ["knew", "knowing", "to know", "has known to", "know to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'knew'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1739, the French inventor Jacques de Vaucanson exhibited a remarkable machine in Paris: a mechanical duck made of gilded copper. It could stand, flap its wings, stretch its neck and quack, {1} most astonishingly, it appeared to eat grain from a visitor's hand, digest it and then excrete it. The duck was built of hundreds of moving parts, many of them visible through holes in its body, {2} Vaucanson claimed that it imitated the real processes of digestion. Crowds paid to see it, {3} it made its inventor famous across Europe. The French writer Voltaire joked that without Vaucanson's duck, there would be nothing to remind people of the glory of France. Much later, however, it was discovered that the 'digestion' was a trick. The grain was collected in a container inside the duck, {4} the droppings, which were made of breadcrumbs dyed green, had been loaded into a separate compartment beforehand. Despite this deception, the duck was a genuine masterpiece of engineering, and its wings alone contained more than four hundred parts. Vaucanson later worked as an inspector of silk factories, where he designed improved machines for weaving, {5} the duck itself was sold several times and is thought to have been lost in the nineteenth century.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Kanat çırpması ve tahıl yiyormuş gibi görünmesi birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Yüzlerce parçadan yapılması ve sindirimi taklit ettiği iddiası birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Kalabalıkların görmeye gelmesi ve mucidi ünlü yapması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Tahılın bir kapta toplanması ve dışkının önceden ayrı bölmeye konması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Dokuma makineleri tasarlaması ve ördeğin satılıp kaybolması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In 1948 and 1949, William Grey Walter, an American-born neurophysiologist working at a research institute in Bristol, England, built two small robots that he named Elmer and Elsie. Each one had three wheels and was covered by a plastic shell, {1} it was controlled by a simple electronic circuit containing just two valves, which Grey Walter compared to two nerve cells. A light sensor on top of the robot rotated continuously, scanning its surroundings, {2} when it detected a moderate light, the robot moved towards it. If the light became too bright, however, the robot turned away, {3} when it bumped into an obstacle, a switch in the shell made it change direction. Most remarkably, when its battery began to run low, the robot became more attracted to bright light, {4} it would make its way back to a 'hutch' containing a lamp and a charger, where it recharged itself. Grey Walter showed that even such simple machines could produce behaviour that seemed surprisingly complex and lifelike. When he placed a small light on a robot's shell and put it in front of a mirror, it moved back and forth in a way that he described as almost like recognising itself, {5} the robots attracted great public interest when they were shown at the Festival of Britain in 1951.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Plastik kabukla kaplanması ve basit bir devreyle kontrol edilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Sensörün çevreyi taraması ve ışığa doğru hareket etmesi birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "Fazla parlak ışıktan dönmesi ve engele çarpınca yön değiştirmesi birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["so", "but", "or", "unless", "although"],
          "Pili azalınca parlak ışığa daha çok çekilmesinin sonucu kulübesine dönmesidir: 'so'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Aynadaki davranışı ve robotların halkın ilgisini çekmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the duck's digestion was a trick, ----.",
      [
        "the machine was still a masterpiece of engineering",
        "ducks eat grain",
        "Paris is a large city",
        "copper is a metal",
        "the droppings had been loaded into a separate compartment beforehand",
      ],
      "'Although' zıtlık ister: ördeğin sindirimi bir hile olsa da makine yine de bir mühendislik başyapıtıydı.",
    ],
    [
      "If the robot's battery had been full, ----.",
      [
        "it might not have been drawn back to its hutch",
        "batteries store energy",
        "lamps give light",
        "Bristol is in England",
        "it would have been controlled by a simple circuit with two valves",
      ],
      "Üçüncü tip koşul: robotun pili dolu olsaydı kulübesine geri çekilmeyebilirdi.",
    ],
    [
      "----, the automaton dips its pen in ink and writes a message.",
      [
        "Driven by a mechanism of thousands of parts",
        "Although ink is black",
        "Unless the museum is closed",
        "Since watches are small",
        "While its makers were travelling to the courts of Europe to show their machines",
      ],
      "Binlerce parçalı bir mekanizmayla çalışan otomat kalemini mürekkebe batırıp bir mesaj yazar.",
    ],
    [
      "The engineer's book remains important ----.",
      [
        "because it describes many devices in great detail",
        "although it is old",
        "unless it is translated",
        "so that clocks work",
        "while he was working for the rulers of a region in south-eastern Anatolia",
      ],
      "Mühendisin kitabı pek çok aracı büyük ayrıntıyla betimlediği için önemini korumaktadır.",
    ],
    [
      "Since the robot arm could work without rest, ----.",
      [
        "factories soon began to order more of them",
        "arms have joints",
        "metal is heavy",
        "workers need holidays",
        "its inventor had applied for a patent on the design in the 1950s",
      ],
      "'Since' neden bildirir: robot kol dinlenmeden çalışabildiği için fabrikalar kısa sürede daha fazlasını sipariş etmeye başladı.",
    ],
    [
      "Not only could the robot move around a room, ----.",
      [
        "but it could also plan a series of actions to reach a goal",
        "and rooms have walls",
        "since cameras record images",
        "so computers are large",
        "unless a magazine had described it as the first electronic person in 1970",
      ],
      "'Not only ... but also' yapısı tamamlanır: robot yalnızca bir odada dolaşmakla kalmıyor, bir hedefe ulaşmak için bir dizi eylem de planlayabiliyordu.",
    ],
    [
      "Once later models had been fitted with cameras, ----.",
      [
        "they could make maps of the homes they cleaned",
        "cameras take photographs",
        "floors are dusty",
        "homes have rooms",
        "early versions had moved around the room in an almost random pattern",
      ],
      "Sonraki modellere kamera takılınca temizledikleri evlerin haritasını çıkarabildiler.",
    ],
    [
      "Unless the cam wheels are changed, ----.",
      [
        "the automaton will always write the same text",
        "wheels are round",
        "texts are short",
        "watches tell the time",
        "the makers would not have spent years building it in the 1770s",
      ],
      "'Unless' olumsuz koşul: kam çarkları değiştirilmedikçe otomat her zaman aynı metni yazar.",
    ],
    [
      "The robots' behaviour seemed so lifelike ----.",
      [
        "that some observers found it hard to believe they had such simple circuits",
        "although they had wheels",
        "because light is bright",
        "unless the room was dark",
        "while the scientist was studying the electrical activity of the human brain",
      ],
      "Robotların davranışı o kadar canlıya benzer görünüyordu ki bazı gözlemciler bu kadar basit devrelere sahip olduklarına inanmakta zorlandı.",
    ],
    [
      "Even though the robot vacuum cleaners were designed to help people, ----.",
      [
        "some users worried about the images their cameras collected",
        "dust is unpleasant",
        "cleaning takes time",
        "machines are useful",
        "they were developed by a company founded by robotics researchers from a university",
      ],
      "'Even though' zıtlık ister: robot süpürgeler insanlara yardım için tasarlansa da bazı kullanıcılar kameralarının topladığı görüntülerden kaygılandı.",
    ],
    [
      "As water flowed through the clock at a steady rate, ----.",
      [
        "its figures moved at regular intervals to mark the time",
        "water is wet",
        "elephants are large",
        "clocks are useful",
        "the engineer had written a book describing many other machines in 1206",
      ],
      "Su saatin içinden düzenli bir hızla aktığı için figürleri zamanı göstermek üzere düzenli aralıklarla hareket ediyordu.",
    ],
  ],
  enTr: [
    [
      "The duck appeared to eat grain from a visitor's hand.",
      [
        "Ördek bir ziyaretçinin elinden tahıl yiyormuş gibi görünüyordu.",
        "Ziyaretçi ördeğin elinden tahıl yiyormuş gibi görünüyordu.",
        "Ördek, ziyaretçilerin elinden tahıl yemeyi reddediyordu.",
        "Tahıl ördeğin elinden ziyaretçiyi yedi.",
        "Ördek hiç hareket etmiyordu.",
      ],
      "'The duck appeared to eat grain' 'ördek tahıl yiyormuş gibi görünüyordu', 'from a visitor's hand' 'bir ziyaretçinin elinden' karşılığıdır.",
    ],
    [
      "When its battery ran low, the robot returned to its hutch to recharge.",
      [
        "Pili azaldığında robot şarj olmak için kulübesine dönüyordu.",
        "Pili dolduğunda robot kulübesinden uzaklaşıp kayboluyordu.",
        "Robot, kulübesine dönmeden önce pilini tamamen boşaltıyordu.",
        "Kulübe pili robota şarj ettirdi.",
        "Robotun pili yoktu.",
      ],
      "'When its battery ran low' 'pili azaldığında', 'the robot returned to its hutch to recharge' 'robot şarj olmak için kulübesine dönüyordu' karşılığıdır.",
    ],
    [
      "The automaton has been working for more than two hundred years.",
      [
        "Otomat iki yüz yılı aşkın süredir çalışmaktadır.",
        "Otomat yalnızca iki yıl çalıştıktan sonra bozuldu.",
        "İki yüz yıl önce yapılan otomat hiç çalışmadı.",
        "İki yüz yıl otomatı çalıştırdı.",
        "Hiç otomat yapılmadı.",
      ],
      "'The automaton has been working' 'otomat çalışmaktadır', 'for more than two hundred years' 'iki yüz yılı aşkın süredir' karşılığıdır.",
    ],
    [
      "The book contains detailed drawings of each machine.",
      [
        "Kitap her makinenin ayrıntılı çizimlerini içerir.",
        "Kitap hiçbir makinenin çizimini içermez.",
        "Makineler kitabın ayrıntılı çizimlerini içerir.",
        "Çizimler kitabı ayrıntılı olarak içerir.",
        "Kitap yalnızca şiirlerden oluşur.",
      ],
      "'The book contains' 'kitap içerir', 'detailed drawings of each machine' 'her makinenin ayrıntılı çizimlerini' karşılığıdır.",
    ],
    [
      "The robot arm lifted hot metal parts from a machine.",
      [
        "Robot kol bir makineden sıcak metal parçaları kaldırıyordu.",
        "Robot kol bir makineye soğuk plastik parçalar yerleştiriyordu.",
        "Sıcak metal parçalar robot kolu makineden kaldırdı.",
        "Robot kol sıcak parçaları kaldırmayı reddetti.",
        "Fabrikada hiç robot yoktu.",
      ],
      "'The robot arm lifted' 'robot kol kaldırıyordu', 'hot metal parts from a machine' 'bir makineden sıcak metal parçaları' karşılığıdır.",
    ],
    [
      "The robot sent its observations by radio to a large computer.",
      [
        "Robot gözlemlerini radyo aracılığıyla büyük bir bilgisayara gönderiyordu.",
        "Büyük bilgisayar gözlemlerini robota mektupla gönderiyordu.",
        "Robot, gözlemlerini kimseye göndermeden saklıyordu.",
        "Radyo robotu bilgisayara gönderdi.",
        "Robotun gözlemi yoktu.",
      ],
      "'The robot sent its observations by radio' 'robot gözlemlerini radyo aracılığıyla gönderiyordu', 'to a large computer' 'büyük bir bilgisayara' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Daha sonra 'sindirim'in bir hile olduğu ortaya çıktı.",
      [
        "It was later discovered that the 'digestion' was a trick.",
        "It was later discovered that the trick was real digestion.",
        "Nobody ever discovered how the duck worked.",
        "The trick later discovered digestion.",
        "There was no duck.",
      ],
      "'Daha sonra ortaya çıktı' 'it was later discovered', ''sindirim'in bir hile olduğu' 'that the 'digestion' was a trick' karşılığıdır.",
    ],
    [
      "Işık fazla parlaklaşırsa robot ondan uzaklaşırdı.",
      [
        "If the light became too bright, the robot would turn away from it.",
        "If the robot became too bright, the light would turn away from it.",
        "The robot always moved towards the brightest light it could find.",
        "The light turned the robot.",
        "The robot could not detect light.",
      ],
      "'Işık fazla parlaklaşırsa' 'if the light became too bright', 'robot ondan uzaklaşırdı' 'the robot would turn away from it' karşılığıdır.",
    ],
    [
      "Otomatlar Avrupa saraylarında büyük ilgi gördü.",
      [
        "The automata attracted great interest at the courts of Europe.",
        "The courts of Europe built great automata.",
        "The automata were ignored by the courts of Europe.",
        "Interest attracted the automata.",
        "There were no automata.",
      ],
      "'Otomatlar büyük ilgi gördü' 'the automata attracted great interest', 'Avrupa saraylarında' 'at the courts of Europe' karşılığıdır.",
    ],
    [
      "Kitap birçok dile çevrilmiştir.",
      [
        "The book has been translated into many languages.",
        "Many languages have been translated into the book.",
        "The book has never been translated.",
        "The languages translated the book.",
        "There is no book.",
      ],
      "'Kitap çevrilmiştir' 'the book has been translated', 'birçok dile' 'into many languages' karşılığıdır.",
    ],
    [
      "İlk endüstriyel robot 1961'de bir otomobil fabrikasında çalışmaya başladı.",
      [
        "The first industrial robot began working in a car factory in 1961.",
        "The first car factory began working in an industrial robot in 1961.",
        "The first industrial robot stopped working in a car factory in 1961.",
        "1961 began the car factory.",
        "There were no robots.",
      ],
      "'İlk endüstriyel robot çalışmaya başladı' 'the first industrial robot began working', 'bir otomobil fabrikasında 1961'de' 'in a car factory in 1961' karşılığıdır.",
    ],
    [
      "Robotun geliştirdiği yöntemler bugün de bilgisayar programlarında kullanılmaktadır.",
      [
        "Methods developed for the robot are still used in computer programs today.",
        "Computer programs developed the robot's methods today.",
        "The methods developed for the robot were abandoned long ago.",
        "Today the robot uses computer programs.",
        "The robot developed no methods.",
      ],
      "'Robotun geliştirdiği yöntemler' 'methods developed for the robot', 'bugün de bilgisayar programlarında kullanılmaktadır' 'are still used in computer programs today' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Between 1768 and 1774, the Swiss watchmaker Pierre Jaquet-Droz, together with his son Henri-Louis and an assistant, Jean-Frédéric Leschot, built three automata that are still regarded as among the finest ever made. They are doll-like figures about seventy centimetres tall. The first, known as the Writer, is a boy seated at a desk who dips a goose feather into an inkwell, shakes off the excess ink and writes a text of up to forty letters, moving his eyes to follow his hand. Inside him is a mechanism of around six thousand parts. The text is controlled by a large wheel carrying a series of removable pieces, each representing a letter, so that by changing the pieces the figure can be made to write any message; for this reason, some historians have described it as an early ancestor of the programmable computer. The second figure, the Draughtsman, can draw four different pictures, including a portrait of the French king, and occasionally blows away dust from his paper. The third, the Musician, is a young woman who plays a small organ with her fingers, actually pressing the keys, while her chest rises and falls as though she were breathing and her head and eyes follow her hands. The Jaquet-Droz family took the automata on tours of the royal courts of Europe, where they attracted enormous interest and helped to sell the family's watches and clocks. The three figures were bought by the Swiss city of Neuchâtel in 1906 and are kept in its museum of art and history, where, remarkably, they still work and are demonstrated regularly.",
      questions: [
        [
          "According to the passage, the Writer can write different texts because ----.",
          [
            "removable pieces on a wheel can be changed",
            "it has a computer inside",
            "it copies what a person writes",
            "it was rebuilt by the museum after the city bought it in 1906",
            "it uses a goose feather",
          ],
          "Metne göre büyük bir çarktaki çıkarılabilir parçalar değiştirilerek herhangi bir mesaj yazdırılabilir.",
        ],
        [
          "The writer mentions the tours of royal courts in order to show that ----.",
          [
            "the automata helped to promote the family's business",
            "the automata were stolen",
            "kings built automata",
            "the figures were broken",
            "the family lived in palaces",
          ],
          "Turlar büyük ilgi çekti ve ailenin saatlerinin satılmasına yardım etti.",
        ],
        [
          "It can be understood from the passage that the automata ----.",
          [
            "still function after more than two centuries",
            "were destroyed in 1906",
            "were made of plastic",
            "can only draw",
            "were built in the twentieth century",
          ],
          "Neuchâtel müzesinde hâlâ çalışmakta ve düzenli olarak gösterilmektedir.",
        ],
      ],
    },
    {
      text:
        "In 1206, an engineer named Ismail al-Jazari completed a book that historians of technology consider one of the most important of the Middle Ages. Al-Jazari worked for the Artuqid rulers, whose capital was at Diyarbakır, in what is now south-eastern Turkey, and he had spent about twenty-five years in their service. His work, usually known in English as The Book of Knowledge of Ingenious Mechanical Devices, describes about fifty machines in detail, with drawings and instructions that would allow others to build them. Many are clocks powered by water, and the most famous is the Elephant Clock. On the back of a large model elephant sits a tower containing figures and birds. Water flowing out of a container hidden inside the elephant at a steady rate caused a float to sink, and at the end of each half hour, this triggered a sequence of movements: a ball dropped into the mouth of a snake, a figure struck a drum, and other figures moved, so that people could tell the time. The design combined elements from different cultures, including an Indian elephant, Chinese dragons and Egyptian and Persian figures. The book also describes devices for raising water, a mechanical boat with musicians that could be used to entertain guests at parties, and a figure that offered water and a towel for hand-washing. Al-Jazari was particularly interested in making machines work automatically and reliably, and historians have pointed to his use of features such as crank-like mechanisms and segmented gears. Copies of the book survive in libraries in several countries, and modern engineers have reconstructed some of his machines.",
      questions: [
        [
          "According to the passage, al-Jazari's book is valuable because it ----.",
          [
            "explains machines in enough detail for others to build them",
            "is the only book from the Middle Ages",
            "was written in Chinese",
            "describes the history of the Artuqid rulers and their capital at Diyarbakır",
            "contains no drawings",
          ],
          "Metne göre başkalarının yapabilmesine olanak verecek çizim ve talimatlarla yaklaşık elli makineyi ayrıntılı betimler.",
        ],
        [
          "In the Elephant Clock, the sequence of movements was started by ----.",
          [
            "water flowing out at a steady rate",
            "a person pulling a rope",
            "sunlight",
            "a spring",
            "the elephant walking",
          ],
          "Gizli bir kaptan düzenli akan su bir şamandırayı batırır ve her yarım saatin sonunda hareketleri başlatırdı.",
        ],
        [
          "It can be understood from the passage that the design of the Elephant Clock ----.",
          [
            "drew on the traditions of several cultures",
            "was copied from a Chinese clock",
            "was never built",
            "used electricity",
            "was very simple",
          ],
          "Hint fili, Çin ejderhaları ve Mısır ile İran figürleri gibi farklı kültürlerden öğeler birleştiriyordu.",
        ],
      ],
    },
    {
      text:
        "In 1954, the American inventor George Devol applied for a patent on a device he called 'programmed article transfer', a mechanical arm that could be taught to repeat a series of movements stored in its memory. A few years later, he met Joseph Engelberger, an engineer who was enthusiastic about the idea, and together they founded a company to develop it. Their first robot, called the Unimate, was installed in 1961 at a General Motors car factory in New Jersey. It weighed nearly two tonnes and was controlled by instructions stored on a magnetic drum. Its job was to take hot metal parts from a die-casting machine and stack them, a task that was dangerous for human workers because of the heat and the fumes. The Unimate could work continuously without breaks, and it did not become tired or careless. At first, many managers were sceptical, and the company struggled to make a profit for years. Gradually, however, car manufacturers in the United States and especially in Japan began to use robots for welding, painting and assembly. Engelberger, who became known as the 'father of robotics', travelled widely to promote them, and in 1966 a Unimate even appeared on a popular American television programme, where it knocked a golf ball into a cup and poured a drink. Today, millions of industrial robots are in use around the world. Supporters say they have made factories safer and more productive, while critics point out that they have also replaced many jobs once done by people.",
      questions: [
        [
          "According to the passage, the first Unimate was used to ----.",
          [
            "handle hot metal parts",
            "paint cars",
            "play golf",
            "weld the bodies of cars on a production line in Japan",
            "drive vehicles",
          ],
          "Metne göre basınçlı döküm makinesinden sıcak metal parçaları alıp istifliyordu.",
        ],
        [
          "The writer mentions the television programme in order to show ----.",
          [
            "how the robot was promoted to the public",
            "that robots can drink",
            "that the robot was a toy",
            "why managers were sceptical",
            "how the robot was programmed",
          ],
          "Engelberger robotları tanıtmak için yoğun çaba gösterdi; Unimate bir televizyon programında bile göründü.",
        ],
        [
          "It can be understood from the passage that industrial robots ----.",
          [
            "have both benefits and drawbacks",
            "have no effect on jobs",
            "are used only in the United States",
            "were immediately profitable",
            "are no longer used",
          ],
          "Fabrikaları daha güvenli ve verimli yapmış, ama pek çok işin de yerini almışlardır.",
        ],
      ],
    },
    {
      text:
        "Between 1966 and 1972, researchers at the Stanford Research Institute in California developed a robot called Shakey, which is often described as the first mobile robot able to reason about its own actions. It was named after the way it wobbled as it moved. Shakey was a tall box on wheels carrying a television camera, a device for measuring distances and sensors that detected when it bumped into objects. Because the computers of the time were too large to carry, it sent its observations by radio to a computer that filled a room, which processed them and sent back instructions. Shakey could be given a command in simple English, such as to push a block from one room to another. It would then analyse its surroundings, identify the objects and doorways, and work out a plan, breaking the task down into smaller steps, before carrying it out. It was extremely slow: a simple task could take hours, partly because the computer needed a long time to analyse each image. Nevertheless, the project was enormously influential. In order to make Shakey work, the researchers developed methods that are still widely used today, including a way of finding the shortest path between two points, which is now used in navigation systems and computer games, and techniques for recognising lines and shapes in images. In 1970, an American magazine described Shakey as 'the first electronic person', a claim its creators considered exaggerated. The robot is now displayed in a museum of computer history in California.",
      questions: [
        [
          "According to the passage, Shakey sent its observations to a computer because ----.",
          [
            "computers of the time were too large to carry",
            "it had no sensors",
            "the computer was in another country",
            "the researchers wanted to watch everything it did on television",
            "it could not move",
          ],
          "Metne göre o dönemin bilgisayarları taşınamayacak kadar büyüktü.",
        ],
        [
          "The writer says that Shakey was slow mainly because ----.",
          [
            "analysing images took the computer a long time",
            "its wheels were small",
            "it was heavy",
            "it was made of wood",
            "the radio was broken",
          ],
          "Bilgisayarın her görüntüyü analiz etmesi uzun sürüyordu.",
        ],
        [
          "It can be understood from the passage that the most lasting result of the project was ----.",
          [
            "the methods developed to make the robot work",
            "the robot's speed",
            "the magazine article",
            "the robot's appearance",
            "the name 'Shakey'",
          ],
          "En kısa yolu bulma gibi bugün de kullanılan yöntemler geliştirildi.",
        ],
      ],
    },
    {
      text:
        "In 2002, an American company founded by robotics researchers from the Massachusetts Institute of Technology launched the Roomba, a small, round vacuum cleaner that moves around a room on its own. Earlier attempts to produce robot cleaners had failed, largely because the machines were too expensive or too complicated. The company took a different approach. Instead of trying to build a robot that understood its surroundings, it designed a simple machine that followed a set of basic rules: moving in spirals, travelling along walls, and changing direction in an apparently random way whenever it bumped into furniture. Over time, this pattern allowed it to cover most of the floor. The approach reflected the ideas of one of the company's founders, who had argued that useful robots could be built from simple behaviours rather than complex reasoning. The Roomba was a great commercial success, and tens of millions have been sold. Later models were fitted with cameras and sensors that allow them to build maps of the homes they clean, to clean more efficiently, and to avoid obstacles such as cables and pet waste. These developments raised new concerns. Some users worried that detailed maps of their homes and images captured by the robots could be shared with other companies. In 2022, it was reported that photographs taken inside homes by test versions of a robot vacuum, which had been sent to workers abroad to help train its software to recognise objects, had been posted online. The case led to wider discussion about the privacy risks of machines that move around people's homes.",
      questions: [
        [
          "According to the passage, earlier robot cleaners failed mainly because they were ----.",
          [
            "too expensive or complicated",
            "too small",
            "too slow",
            "unable to follow walls and travel in spirals around the room",
            "too quiet",
          ],
          "Metne göre makineler çok pahalı ya da çok karmaşıktı.",
        ],
        [
          "The Roomba's original design was based on the idea that ----.",
          [
            "simple rules could produce useful behaviour",
            "robots must understand their surroundings",
            "cleaners need cameras",
            "floors must be mapped",
            "furniture should be moved",
          ],
          "Yararlı robotların karmaşık akıl yürütme yerine basit davranışlardan yapılabileceği fikrine dayanıyordu.",
        ],
        [
          "It can be understood from the passage that later models ----.",
          [
            "raised concerns about privacy",
            "were less efficient",
            "had no sensors",
            "were never sold",
            "could not avoid cables",
          ],
          "Ev haritaları ve görüntüler başka şirketlerle paylaşılabilir kaygısı doğurdu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The word 'robot' was first used in 1920 in a play by the Czech writer Karel Čapek. ---- In the play, artificial workers rise up against the humans who made them.",
      [
        "Its source is a Czech term for compulsory work, and his brother Josef proposed it.",
        "Prague is the capital of the Czech Republic.",
        "Plays are performed in theatres.",
        "The play was soon translated into many languages.",
        "Writers often work alone.",
      ],
      "Boşluk sözcüğün kökenini açıklayan bir cümle gerektirir; boşluğa zorla çalıştırma anlamına gelen Çekçe bir sözcükten geldiğini ve kardeşi Josef'in önerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1970, the Japanese engineer Masahiro Mori suggested that people's feelings towards robots change as robots become more human-like. ---- He called this sudden drop in comfort the 'uncanny valley'.",
      [
        "At first, people respond more warmly, but when a robot looks almost, but not quite, human, they may find it disturbing.",
        "Japan produces many robots.",
        "Engineers design machines.",
        "His idea has been tested in many later studies.",
        "Valleys lie between mountains.",
      ],
      "Boşluk 'konforun ani düşüşü' ifadesine zemin hazırlayan bir cümle gerektirir; boşluğa insanlar başta daha sıcak tepki verse de neredeyse insana benzeyen bir robotu rahatsız edici bulabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2011, NASA sent a humanoid robot called Robonaut 2 to the International Space Station. ---- In 2012, it became the first humanoid robot to shake hands with a human in space.",
      [
        "It had a head, a body and two arms with hands capable of using the same tools as astronauts.",
        "The space station orbits the Earth.",
        "NASA is an American space agency.",
        "Legs were later added to it.",
        "Astronauts wear spacesuits.",
      ],
      "Boşluk robotu betimleyip el sıkışmasına zemin hazırlayan bir cümle gerektirir; boşluğa astronotlarla aynı araçları kullanabilen ellere sahip iki kolu, bir başı ve gövdesi olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Since the early 2000s, surgeons in many hospitals have used robotic systems to carry out operations. ---- Supporters say this allows smaller cuts and more precise movements, although such systems are very expensive.",
      [
        "The surgeon sits at a console and controls thin robotic arms that hold the instruments inside the patient.",
        "Hospitals are busy places.",
        "Surgery can be dangerous.",
        "Some operations last many hours.",
        "Patients need to rest.",
      ],
      "Boşluk sistemin nasıl çalıştığını açıklayan bir cümle gerektirir; boşluğa cerrahın bir konsolda oturup hastanın içindeki aletleri tutan ince robot kolları kontrol ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2017, a robotics company released a video showing a humanoid robot jumping onto a box and performing a backflip. ---- Engineers noted that keeping a two-legged machine balanced during such movements is extremely difficult.",
      [
        "The video was watched by millions of people and was widely shared on social media.",
        "Gymnastics is an Olympic sport.",
        "Boxes are made of cardboard.",
        "The company later showed the robot dancing.",
        "Many people enjoy watching videos.",
      ],
      "Boşluk videoyu ve etkisini anlatan bir cümle gerektirir; boşluğa videonun milyonlarca kişi tarafından izlendiğini ve sosyal medyada yaygın biçimde paylaşıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some robotic lawnmowers work at night, when gardens are quiet. ---- Researchers have therefore urged owners to use them only during the day.",
      [
        "Studies have found, however, that they can injure hedgehogs, which are most active after dark.",
        "Gardens contain many plants.",
        "Grass grows faster in spring.",
        "Some models can be controlled with a phone.",
        "Hedgehogs eat insects.",
      ],
      "Boşluk 'bu nedenle' ifadesine gerekçe sunan ve 'ancak' karşıtlığı kuran bir cümle gerektirir; boşluğa çalışmaların onların karanlıkta en etkin olan kirpileri yaralayabildiğini bulduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Some engineers are building robots from soft, flexible materials.",
        "These robots can squeeze through narrow spaces.",
        "Many are inspired by animals such as octopuses and worms.",
        "Octopuses are found in all the world's oceans.",
        "Soft robots may be safer to use near people than rigid machines.",
      ],
      odd: 3,
      why: "Parça yumuşak malzemelerden yapılan robotları anlatır. Ahtapotların tüm okyanuslarda bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "South Korea has more industrial robots per worker than any other country.",
        "Most of them are used in the electronics and car industries.",
        "The government has encouraged their use to make factories more competitive.",
        "Korean food is popular in many countries.",
        "Some economists worry about the effect on employment.",
      ],
      odd: 3,
      why: "Parça Güney Kore'deki endüstriyel robot yoğunluğunu anlatır. Kore yemeklerinin pek çok ülkede popüler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Picking soft fruit such as strawberries is difficult for robots.",
        "The fruit must be found among leaves and handled gently.",
        "Strawberries are rich in vitamin C.",
        "New robots use cameras and soft grippers to do the job.",
        "Farmers hope they will help to solve shortages of workers.",
      ],
      odd: 2,
      why: "Parça yumuşak meyveleri toplayan robotları anlatır. Çileklerin C vitamini açısından zengin olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Small delivery robots now travel along pavements in some cities.",
        "They carry food and parcels for short distances.",
        "Customers unlock them with a code on their phones.",
        "Some pedestrians complain that the robots get in their way.",
        "Many cities have parks and gardens.",
      ],
      odd: 4,
      why: "Parça kaldırımlarda dolaşan teslimat robotlarını anlatır. Pek çok kentin park ve bahçeleri olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Robots are increasingly used to explore places that are dangerous for people.",
        "They have entered damaged nuclear power stations.",
        "Others have searched collapsed buildings after earthquakes.",
        "Earthquakes are measured on a scale.",
        "Some underwater robots inspect pipelines on the sea floor.",
      ],
      odd: 3,
      why: "Parça tehlikeli yerleri keşfeden robotları anlatır. Depremlerin bir ölçekle ölçüldüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some robots are designed to keep elderly people company.",
        "They can talk, remind users to take medicine and call for help.",
        "Grandparents often enjoy visits from their grandchildren.",
        "Studies suggest that some users feel less lonely with them.",
        "Critics argue that robots should not replace human contact.",
      ],
      odd: 2,
      why: "Parça yaşlılara arkadaşlık eden robotları anlatır. Büyükanne ve büyükbabaların torunlarının ziyaretinden hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
  ],
};
