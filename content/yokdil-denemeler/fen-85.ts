import type { YokdilDeneme } from "./types";

export const FEN_85: YokdilDeneme = {
  no: 85,
  field: "fen",
  vocab: [
    [
      "A spinning ball is pushed sideways because the air ---- more strongly on one side than on the other.",
      ["presses", "melts", "rests", "glows", "freezes"],
      "Dönen topun yana itilmesinin nedeni havanın bir tarafa diğerinden daha güçlü 'bastırmasıdır' (presses).",
    ],
    [
      "The suits were so effective that swimming's governing body decided to ---- them.",
      ["ban", "praise", "copy", "sell", "repair"],
      "Mayoların o kadar etkili olduğu ki yüzmenin yönetim kurulunun onları 'yasaklamaya' (ban) karar verdiği anlatılır.",
    ],
    [
      "Goalkeepers complained that the ball moved in an ---- way through the air.",
      ["unpredictable", "obvious", "elegant", "invisible", "gentle"],
      "Kalecilerin topun havada 'öngörülemez' (unpredictable) biçimde hareket ettiğinden yakındığı anlatılır.",
    ],
    [
      "Players are not allowed to ---- the surface of the ball to make it swing more.",
      ["alter", "inspect", "clean gently", "photograph", "admire"],
      "Oyuncuların topun daha fazla salınması için yüzeyini 'değiştirmesine' (alter) izin verilmediği anlatılır.",
    ],
    [
      "The wings of the boomerang are ---- like those of an aircraft.",
      ["shaped", "coloured", "named", "priced", "heated"],
      "Bumerangın kanatlarının bir uçağınkiler gibi 'biçimlendirildiği' (shaped) anlatılır.",
    ],
    [
      "At racing speeds, most of a cyclist's energy is used to ---- air resistance.",
      ["overcome", "produce", "ignore", "measure", "store"],
      "Yarış hızlarında bir bisikletçinin enerjisinin çoğunun hava direncini 'yenmek' (overcome) için kullanıldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the ball reached the goal, it ---- far more sharply than the spectators expected.",
      ["had curved", "curves", "has curved", "will curve", "is curving"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had curved'.",
    ],
    [
      "If the new suits had not been banned, many more world records ----.",
      ["might have been broken", "are broken", "will be broken", "had been broken", "are being broken"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have been broken'.",
    ],
    [
      "The ball ---- in a wind tunnel by a space agency.",
      ["was tested", "tested", "has tested", "tests", "is testing"],
      "Top test edilmiştir; edilgen geçmiş zaman: 'was tested'.",
    ],
    [
      "---- the stone is rotating only slowly, it changes direction noticeably as it slows down.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Taşın yavaş dönmesi ile belirgin biçimde yön değiştirmesi zıttır: 'Although'.",
    ],
    [
      "The cyclist, ---- bicycle was built partly from parts of a washing machine, broke the record.",
      ["whose", "who", "which", "whom", "where"],
      "Bisikletçinin bisikleti; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only when the ball becomes old and rough ---- it begin to swing in the opposite direction.",
      ["does", "has", "is", "did", "had"],
      "'Only when' ile devrik yapı, geniş zaman yardımcı fiili: 'does'.",
    ],
    [
      "The race took place in a stadium ---- the air was thinner than at sea level.",
      ["where", "which", "when", "whose", "that"],
      "'a stadium' yer bildirir; hava orada daha inceydi: 'where'.",
    ],
    [
      "The faster the ball spins, ---- it curves.",
      ["the more", "the most", "more", "most", "so"],
      "'The ... -er, the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "The governing body required that all suits ---- made of textile materials.",
      ["be", "are", "were being", "to be", "being"],
      "'require that' sonrası yalın fiil (subjunctive), edilgen: 'be made'.",
    ],
    [
      "The free kick is said ---- one of the most remarkable goals ever scored.",
      ["to be", "being", "to have being", "be", "having be"],
      "'be said to' + yalın mastar (şimdiki durum): 'to be'.",
    ],
    [
      "Players sweep the ice in front of the stone ---- it travels further.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Taşın önündeki buzu süpürmelerinin amacı taşın daha uzağa gitmesidir: 'so that'.",
    ],
    [
      "The team had the bicycle ---- from carbon fibre in a single piece.",
      ["made", "make", "making", "to make", "makes"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'made'.",
    ],
    [
      "Had the boomerang been thrown flat, it ---- returned to the thrower.",
      ["would not have", "has not", "will not have", "had not", "is not"],
      "Devrik üçüncü tip koşul cümlesi: 'would not have'.",
    ],
    [
      "Neither the players nor the coach ---- that the ball would behave so strangely.",
      ["expected", "expecting", "to expect", "have expected", "expects to"],
      "'Neither ... nor' yapısında geçmiş zaman fiili: 'expected'.",
    ],
  ],
  cloze: [
    {
      text:
        "When a ball spins as it travels through the air, it tends to curve sideways. The effect is named after the German physicist Heinrich Gustav Magnus, who studied it in the 1850s, although Isaac Newton had noticed it in tennis balls nearly two centuries earlier. As the ball spins, the air on one side moves with the ball's surface, {1} the air on the other side moves against it. This changes the pattern of the air flowing around the ball, {2} it pushes the ball towards one side. Footballers use the effect to bend free kicks around a wall of defenders, {3} tennis and table tennis players use it to make the ball dip sharply. One of the most famous examples occurred in June 1997, when the Brazilian defender Roberto Carlos took a free kick from about thirty-five metres against France. The ball appeared to be heading far to the right of the goal, {4} at the last moment it curved sharply and entered the net, while the goalkeeper stood still. For years, many people believed that the goal had been partly luck. In 2010, however, a team of French physicists published an explanation. They showed that as a spinning ball slows down because of air resistance, the curving effect becomes relatively stronger, so that its path is not a simple curve but a spiral that bends more and more tightly. This only becomes noticeable if the ball is kicked hard enough and far enough, {5} it explained why the ball had appeared to change direction suddenly near the end of its flight.",
      blanks: [
        [
          "(21) ----",
          ["while", "because", "so", "unless", "until"],
          "Bir taraftaki havanın topla birlikte, diğer taraftakinin ona karşı hareket etmesi karşılaştırılır: 'while'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "or", "although", "until"],
          "Hava akışının değişmesi ve topun bir yana itilmesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "or", "although", "until"],
          "Futbolcuların etkiyi kullanması ve tenis oyuncularının da kullanması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["but", "and", "so", "because", "unless"],
          "Topun kalenin çok sağına gidiyor görünmesi ile son anda kıvrılıp ağlara girmesi karşıttır: 'but'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "or", "although", "so that"],
          "Etkinin yalnızca yeterince sert vuruşta görülmesi ve topun yön değiştirmesini açıklaması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In February 2008, a sportswear company launched a new swimsuit that it had developed with help from scientists, including tests in a wind tunnel run by the American space agency. The suit was made of a light, water-repellent fabric with panels of polyurethane, a type of plastic, {1} its seams were bonded rather than sewn, which made the surface smoother. It also squeezed the swimmer's body into a more streamlined shape, {2} some experts believed that it trapped air, which helped swimmers to float higher in the water. The effect was dramatic. Within months, swimmers wearing the suit had broken dozens of world records, {3} at the Olympic Games in Beijing that summer, the great majority of the gold medals in swimming were won by athletes wearing it. Other manufacturers soon produced suits made entirely of polyurethane or similar materials, {4} at the world championships in 2009 an astonishing forty-three world records were broken. Many coaches and swimmers complained that results were now being decided by technology rather than by athletic ability, and that wealthier teams had an unfair advantage. In response, swimming's governing body banned suits made of non-textile materials from the beginning of 2010, {5} it also limited how much of the body a suit could cover. After the ban, the number of new world records fell sharply, and some of the records set in 2008 and 2009 remained unbroken for more than a decade.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "or", "although", "until"],
          "Kumaşın poliüretan paneller içermesi ve dikişlerin yapıştırılması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "unless", "or", "although", "until"],
          "Mayonun vücudu sıkması ve hava hapsettiğine inanılması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "or", "although", "until"],
          "Dünya rekorlarının kırılması ve altın madalyaların çoğunun kazanılması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "unless", "or", "although", "until"],
          "Tamamen poliüretan mayolar üretilmesi ve 2009'da çok sayıda rekor kırılması birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "or", "although", "until"],
          "Tekstil dışı mayoların yasaklanması ve vücut kaplamasının sınırlanması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although many people believed the goal had been partly luck, ----.",
      [
        "physicists later showed that the ball's spiral path could be explained",
        "the free kick was taken from thirty-five metres",
        "the goalkeeper stood still",
        "Brazil was playing France",
        "the ball was spinning rapidly as it left the defender's foot",
      ],
      "'Although' zıtlık ister: pek çok kişi golün kısmen şans olduğuna inansa da fizikçiler daha sonra topun sarmal yolunun açıklanabileceğini gösterdi.",
    ],
    [
      "If the suits had not been banned, ----.",
      [
        "results might have continued to depend heavily on technology",
        "swimming is popular",
        "pools are filled with water",
        "suits are made of fabric",
        "the company would have tested them in a wind tunnel run by the space agency",
      ],
      "Üçüncü tip koşul: mayolar yasaklanmasaydı sonuçlar büyük ölçüde teknolojiye bağlı kalmaya devam edebilirdi.",
    ],
    [
      "----, the ball was smoother than earlier designs.",
      [
        "Made of only eight panels joined by heat",
        "Although it was round",
        "Unless it was wet",
        "Since the tournament was held in South Africa that summer",
        "While goalkeepers were complaining about it",
      ],
      "Isıyla birleştirilmiş yalnızca sekiz panelden yapılan top önceki tasarımlardan daha pürüzsüzdü.",
    ],
    [
      "A new ball swings in one direction ----.",
      [
        "because the air flows differently over its polished and unpolished sides",
        "although it is heavy",
        "unless it is old",
        "so that batsmen can hit it",
        "while the bowler is running in towards the batsman at the other end of the pitch",
      ],
      "Yeni bir top bir yöne salınır, çünkü hava parlatılmış ve parlatılmamış yüzeylerinin üzerinden farklı akar.",
    ],
    [
      "Since the upper wing moves through the air faster than the lower one, ----.",
      [
        "it produces more lift, which makes the boomerang turn",
        "wings are made of wood",
        "boomerangs are thrown by hand",
        "Australia is a large country",
        "most of the boomerangs used for hunting were not designed to return",
      ],
      "'Since' neden bildirir: üst kanat havada alttakinden hızlı hareket ettiğinden daha fazla kaldırma kuvveti üretir ve bu da bumerangı döndürür.",
    ],
    [
      "Not only does sweeping make the stone travel further, ----.",
      [
        "but it also keeps it moving in a straighter line",
        "and stones are made of granite",
        "since ice is cold",
        "so players wear special shoes",
        "unless the ice had been sprayed with water",
      ],
      "'Not only ... but also' yapısı tamamlanır: süpürmek taşı yalnızca daha uzağa götürmekle kalmaz, daha düz bir çizgide hareket etmesini de sağlar.",
    ],
    [
      "Once the governing body had banned the extreme riding positions, ----.",
      [
        "it created a separate record for rides on traditional bicycles",
        "bicycles have two wheels",
        "cyclists wear helmets",
        "tracks are oval",
        "the Scottish rider had built his own bicycle from unusual parts",
      ],
      "Yönetim kurulu aşırı sürüş pozisyonlarını yasakladıktan sonra geleneksel bisikletlerle yapılan sürüşler için ayrı bir rekor oluşturdu.",
    ],
    [
      "Unless a ball is kicked hard and far enough, ----.",
      [
        "its spiral path will not be noticeable",
        "balls are round",
        "players run",
        "goals are scored",
        "the physicists would not have published their study",
      ],
      "'Unless' olumsuz koşul: top yeterince sert ve uzağa vurulmadıkça sarmal yolu fark edilmez.",
    ],
    [
      "The new suits were so effective ----.",
      [
        "that dozens of world records were broken within months",
        "although they were expensive",
        "because swimmers were strong",
        "unless they were wet",
        "while other companies were designing new suits",
      ],
      "Yeni mayolar o kadar etkiliydi ki aylar içinde düzinelerce dünya rekoru kırıldı.",
    ],
    [
      "Even though curling has been played for centuries, ----.",
      [
        "scientists still disagree about why the stones curl",
        "ice is slippery",
        "stones are heavy",
        "Scotland is cold",
        "players sweep the ice in front of the moving stone with brushes",
      ],
      "'Even though' zıtlık ister: curling yüzyıllardır oynansa da bilim insanları taşların neden kıvrıldığı konusunda hâlâ anlaşamıyor.",
    ],
    [
      "As air resistance increases rapidly with speed, ----.",
      [
        "racing cyclists try to make their bodies as streamlined as possible",
        "cyclists ride fast",
        "air is invisible",
        "bicycles are light",
        "most of the tracks used for records are built indoors",
      ],
      "Hava direnci hızla birlikte hızla arttığı için yarış bisikletçileri vücutlarını olabildiğince aerodinamik yapmaya çalışır.",
    ],
  ],
  enTr: [
    [
      "The air on one side moves with the ball's surface.",
      [
        "Bir taraftaki hava topun yüzeyiyle birlikte hareket eder.",
        "Bir taraftaki hava topun yüzeyine karşı durur.",
        "Topun yüzeyi havayı durdurur.",
        "Hava topun etrafında hiç hareket etmez.",
        "Her iki taraftaki hava da topun yüzeyine karşı aynı hızla hareket eder ve top dümdüz gider.",
      ],
      "'The air on one side' 'bir taraftaki hava', 'moves with the ball's surface' 'topun yüzeyiyle birlikte hareket eder' karşılığıdır.",
    ],
    [
      "The suit squeezed the swimmer's body into a more streamlined shape.",
      [
        "Mayo yüzücünün vücudunu sıkarak daha akıcı bir biçime soktu.",
        "Mayo yüzücünün vücudunu genişletti.",
        "Yüzücü mayoyu daha akıcı bir biçime soktu.",
        "Mayo vücudun biçimini hiç değiştirmedi.",
        "Mayo, yüzücünün vücudunu serbest bırakarak suda daha fazla dirençle karşılaşmasına neden oldu.",
      ],
      "'The suit squeezed the swimmer's body' 'mayo yüzücünün vücudunu sıktı', 'into a more streamlined shape' 'daha akıcı bir biçime' karşılığıdır.",
    ],
    [
      "At certain speeds, the ball moved unpredictably from side to side.",
      [
        "Belirli hızlarda top öngörülemez biçimde iki yana hareket etti.",
        "Belirli hızlarda top dümdüz gitti.",
        "Top hızları öngördü.",
        "Top hiç hareket etmedi.",
        "Top yalnızca çok düşük hızlarda yana kaydı, yüksek hızlarda ise her zaman düz bir çizgide gitti.",
      ],
      "'At certain speeds' 'belirli hızlarda', 'the ball moved unpredictably from side to side' 'top öngörülemez biçimde iki yana hareket etti' karşılığıdır.",
    ],
    [
      "The bowler polishes one side of the ball on his clothes.",
      [
        "Atıcı topun bir yüzünü giysilerine sürterek parlatır.",
        "Atıcı topun her iki yüzünü de pürüzlü bırakır.",
        "Giysiler atıcıyı parlatır.",
        "Atıcı topa hiç dokunmaz.",
        "Atıcı, topu parlatmak için özel bir sıvı kullanır ve bu kurallara uygundur.",
      ],
      "'The bowler polishes one side of the ball' 'atıcı topun bir yüzünü parlatır', 'on his clothes' 'giysilerine sürterek' karşılığıdır.",
    ],
    [
      "Most hunting boomerangs were not designed to return.",
      [
        "Av bumeranglarının çoğu geri dönecek biçimde tasarlanmamıştı.",
        "Av bumeranglarının hepsi geri dönecek biçimde tasarlanmıştı.",
        "Bumeranglar avcıları geri döndürdü.",
        "Bumerang hiç avda kullanılmadı.",
        "Bumerang yoktu.",
      ],
      "'Most hunting boomerangs' 'av bumeranglarının çoğu', 'were not designed to return' 'geri dönecek biçimde tasarlanmamıştı' karşılığıdır.",
    ],
    [
      "The rider adopted a position with his arms stretched out in front of him.",
      [
        "Sürücü kollarını önüne doğru uzattığı bir pozisyon benimsedi.",
        "Sürücü kollarını arkasında birleştirdiği bir pozisyon benimsedi.",
        "Kollar sürücüye bir pozisyon kazandırdı.",
        "Sürücü dimdik oturdu.",
        "Sürücü, hava direncini artırmak için ayakta durarak pedal çevirdi ve kollarını iki yana açtı.",
      ],
      "'The rider adopted a position' 'sürücü bir pozisyon benimsedi', 'with his arms stretched out in front of him' 'kollarını önüne doğru uzattığı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kaleci serbest vuruş sırasında hareketsiz kaldı.",
      [
        "The goalkeeper stood still during the free kick.",
        "The goalkeeper ran forward during the free kick.",
        "The free kick stopped the goalkeeper's career.",
        "The goalkeeper took the free kick himself.",
        "There was no goalkeeper.",
      ],
      "'Kaleci hareketsiz kaldı' 'the goalkeeper stood still', 'serbest vuruş sırasında' 'during the free kick' karşılığıdır.",
    ],
    [
      "Daha zengin takımların haksız bir avantajı vardı.",
      [
        "Wealthier teams had an unfair advantage.",
        "Poorer teams had an unfair advantage.",
        "An unfair advantage had wealthier teams.",
        "All teams were equal.",
        "Wealthier teams were not allowed to compete in the championships.",
      ],
      "'Daha zengin takımların' 'wealthier teams', 'haksız bir avantajı vardı' 'had an unfair advantage' karşılığıdır.",
    ],
    [
      "Top bir rüzgâr tünelinde test edildi.",
      [
        "The ball was tested in a wind tunnel.",
        "The wind tunnel was tested by the ball.",
        "The ball was never tested.",
        "The ball was tested in a swimming pool.",
        "There was no ball.",
      ],
      "'Top test edildi' 'the ball was tested', 'bir rüzgâr tünelinde' 'in a wind tunnel' karşılığıdır.",
    ],
    [
      "Topun yüzeyini değiştirmek kurallara aykırıdır.",
      [
        "Changing the surface of the ball is against the rules.",
        "The rules require players to change the surface of the ball.",
        "The ball changes the rules.",
        "Players may change the ball whenever they like.",
        "Changing the surface of the ball is allowed only when the ball has become old and rough.",
      ],
      "'Topun yüzeyini değiştirmek' 'changing the surface of the ball', 'kurallara aykırıdır' 'is against the rules' karşılığıdır.",
    ],
    [
      "Süpürmek buzu hafifçe ısıtır ve sürtünmeyi azaltır.",
      [
        "Sweeping warms the ice slightly and reduces friction.",
        "Sweeping cools the ice and increases friction.",
        "The ice sweeps the players.",
        "Sweeping has no effect on the ice.",
        "There is no ice.",
      ],
      "'Süpürmek buzu hafifçe ısıtır' 'sweeping warms the ice slightly', 've sürtünmeyi azaltır' 'and reduces friction' karşılığıdır.",
    ],
    [
      "Bisiklet tek parça karbon fiberden yapılmıştı.",
      [
        "The bicycle was made from a single piece of carbon fibre.",
        "The bicycle was made from many pieces of wood.",
        "Carbon fibre was made from the bicycle.",
        "The bicycle had no frame.",
        "The bicycle was built from parts taken from a washing machine and an old motorcycle.",
      ],
      "'Bisiklet yapılmıştı' 'the bicycle was made', 'tek parça karbon fiberden' 'from a single piece of carbon fibre' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The official ball of the 2010 football World Cup in South Africa was designed to be the roundest and most accurate ball ever made. Instead of the thirty-two stitched panels of traditional footballs, it was made of only eight panels, which were joined by heat rather than sewn, and its surface was covered with tiny ridges and grooves intended to improve its grip in the air. Before and during the tournament, however, many players, and especially goalkeepers, complained that the ball behaved strangely, suddenly changing direction or dipping in mid-flight. Several scientists investigated, including researchers at a wind tunnel operated by the American space agency. The explanation lies in the way that air flows around a ball. At low speeds, the layer of air next to the ball's surface flows smoothly and separates from the back of the ball early, leaving a wide wake that causes a large amount of drag. At higher speeds, the flow becomes turbulent, clings to the surface for longer and separates later, which greatly reduces the drag. The speed at which this change happens depends on how rough the surface is. Because the new ball was smoother than traditional balls, the change took place at a higher speed, close to the speeds at which many free kicks and long shots travel. When a ball travels at around this speed with very little spin, small differences in the flow on its two sides can push it unpredictably from side to side, an effect known as 'knuckling'. Later World Cup balls were designed with deeper grooves and textured surfaces to make their flight more predictable, and manufacturers now routinely test new balls in wind tunnels and with kicking robots.",
      questions: [
        [
          "According to the passage, the 2010 ball differed from traditional balls in that it ----.",
          [
            "had only eight panels joined by heat",
            "had thirty-two stitched panels",
            "was heavier",
            "was tested by kicking robots before the 1998 World Cup",
            "was made of leather",
          ],
          "Metne göre geleneksel topların dikişli otuz iki paneli yerine ısıyla birleştirilmiş yalnızca sekiz paneli vardı.",
        ],
        [
          "The writer explains the difference between smooth and turbulent air flow in order to show why ----.",
          [
            "the ball behaved unpredictably at the speeds of many free kicks",
            "balls are round",
            "goalkeepers wear gloves",
            "wind tunnels are useful",
            "the ball was heavy",
          ],
          "Daha pürüzsüz topta akış değişimi pek çok serbest vuruşun hızına yakın bir hızda olduğundan top öngörülemez biçimde salınabiliyordu.",
        ],
        [
          "It can be understood from the passage that later World Cup balls ----.",
          [
            "were designed with deeper grooves to make their flight more predictable",
            "were completely smooth",
            "had fewer panels",
            "were never tested",
            "were made to knuckle more",
          ],
          "Sonraki toplar uçuşlarını daha öngörülebilir kılmak için daha derin oluklar ve dokulu yüzeylerle tasarlandı.",
        ],
      ],
    },
    {
      text:
        "In cricket, fast bowlers try to make the ball 'swing', or curve sideways through the air, so that the batsman has difficulty judging its path. To do this, bowlers polish one side of the ball, often by rubbing it on their clothes, while allowing the other side to become rough. They release the ball with the raised seam that runs around it tilted at an angle. As the ball travels, the air flowing over the side towards which the seam points is disturbed and becomes turbulent, so that it clings to the surface for longer, while the air on the other side separates earlier. This difference pushes the ball sideways, usually in the direction of the seam. In the 1970s and 1980s, however, Pakistani fast bowlers became famous for a technique that made old balls swing in the opposite direction to the one batsmen expected. This 'reverse swing' occurs when the ball is bowled very fast and one side has become very rough. Under these conditions, the air becomes turbulent on both sides, but the rough side causes it to separate earlier, so the ball curves towards the polished side instead. Because reverse swing depends on the condition of the ball, players have sometimes been tempted to break the rules by deliberately roughening it with their nails, bottle tops or other objects. The laws of cricket allow players to polish the ball with sweat or saliva but forbid them from using any artificial substance or object to change its surface. In 2018, three members of the Australian national team were banned from playing for long periods after one of them was filmed using a piece of sandpaper on the ball during a match in South Africa, a scandal that caused great anger in Australia.",
      questions: [
        [
          "According to the passage, a new ball usually swings ----.",
          [
            "in the direction in which the seam points",
            "towards the polished side",
            "upwards",
            "in the opposite direction when it is bowled very fast and one side is rough",
            "only in wet weather",
          ],
          "Metne göre top genellikle dikişin baktığı yöne doğru itilir.",
        ],
        [
          "Reverse swing occurs when ----.",
          [
            "the ball is bowled very fast and one side has become very rough",
            "the ball is new",
            "the bowler throws slowly",
            "both sides are polished",
            "the seam is straight",
          ],
          "Top çok hızlı atıldığında ve bir yüzü çok pürüzlü hale geldiğinde gerçekleşir.",
        ],
        [
          "It can be understood from the passage that the players banned in 2018 ----.",
          [
            "had used an object to change the surface of the ball",
            "had polished the ball with sweat",
            "had bowled too fast",
            "had refused to play",
            "had used a new ball",
          ],
          "Oyunculardan biri maç sırasında topa zımpara kâğıdı sürerken görüntülendi.",
        ],
      ],
    },
    {
      text:
        "Boomerangs are best known as curved wooden objects that return to the person who throws them, and they are often associated with the Aboriginal peoples of Australia. However, throwing sticks have been used by people in many parts of the world, including ancient Egypt and Europe, and the oldest known example, made from a mammoth's tusk and found in Poland, is more than thirty thousand years old. Most boomerangs used for hunting were not designed to return. They were long, heavy and fairly straight, and they were thrown low and hard to strike animals. Returning boomerangs are lighter and more sharply curved, and each of their two arms is shaped in cross-section like an aircraft wing, flat on one side and rounded on the other. To make one return, the thrower holds it almost vertically and throws it forwards with a strong spin. As the boomerang spins, the arm at the top of its rotation is moving forwards through the air faster than the arm at the bottom, because its spinning motion adds to the forward motion of the whole boomerang, while at the bottom the two motions partly cancel each other out. The faster-moving upper arm therefore produces more lift than the lower one, creating a twisting force. Because the boomerang is spinning, this force does not simply tip it over. Instead, like a spinning top or a gyroscope, it causes the boomerang's direction of travel to change gradually, so that it follows a curved path and returns towards the thrower. Returning boomerangs may have been used to scare birds into nets, but today they are used mainly for sport. Competitions are held around the world, and some throwers can make a boomerang travel more than a hundred metres before it returns.",
      questions: [
        [
          "According to the passage, most hunting boomerangs ----.",
          [
            "were not designed to return",
            "were made from mammoth tusks",
            "were light and sharply curved",
            "were thrown almost vertically with a strong spin so that they would come back",
            "were used only in Australia",
          ],
          "Metne göre avda kullanılan bumerangların çoğu geri dönecek biçimde tasarlanmamıştı.",
        ],
        [
          "The upper arm of a spinning boomerang produces more lift because ----.",
          [
            "it moves through the air faster than the lower arm",
            "it is heavier",
            "it is made of a different material",
            "it is flat on both sides",
            "it does not spin",
          ],
          "Üst kol dönme hareketi ileri hareketine eklendiği için havada alt koldan daha hızlı hareket eder.",
        ],
        [
          "It can be understood from the passage that the boomerang returns because ----.",
          [
            "the twisting force gradually changes its direction, as in a gyroscope",
            "the wind blows it back",
            "it is attached to a string",
            "it hits the ground and bounces",
            "the thrower catches it",
          ],
          "Dönen bumerangda bükme kuvveti bir topaç ya da jiroskopta olduğu gibi gidiş yönünü yavaş yavaş değiştirir.",
        ],
      ],
    },
    {
      text:
        "Curling is a sport, developed in Scotland in the sixteenth century, in which players slide heavy granite stones across a sheet of ice towards a target. The ice is sprayed with fine droplets of water that freeze into tiny bumps, so that the stone touches the ice only on a narrow ring on its base. As the stone is released, the player gives it a slight rotation, and as it slows down it gradually moves sideways, or 'curls', in the direction in which it is rotating. This is surprising, because many simple objects behave in the opposite way. If an upturned glass is slid across a smooth table while rotating clockwise, for example, it tends to move to the left. Physicists have proposed a number of explanations for the stone's behaviour, but none has been universally accepted. Some suggested that friction is greater at the front of the stone than at the back, but calculations showed that this alone could not explain the size of the effect. More recent research has focused on the rough surface of the ring on which the stone runs. One theory proposes that as the stone moves forward, the rough ring at its front scratches tiny grooves in the ice, and the back of the ring, following behind, tends to be steered by these scratches as it crosses them at an angle. Experiments with stones whose ring had been polished smooth showed that they curled far less, supporting the idea that the roughness is important. Players also sweep the ice in front of the moving stone with brushes. Sweeping warms and smooths the surface slightly, reducing friction, so that the stone travels further and curls less. Because sweeping can be so effective, the sport's governing bodies have had to introduce rules limiting the types of brushes that can be used.",
      questions: [
        [
          "According to the passage, the behaviour of curling stones is surprising because ----.",
          [
            "simple objects such as an upturned glass curve in the opposite direction",
            "the stones are made of granite",
            "the ice is perfectly smooth",
            "players sweep the ice in front of the stone with brushes",
            "the stones do not rotate",
          ],
          "Metne göre ters çevrilmiş bir bardak gibi pek çok basit nesne ters yönde davranır.",
        ],
        [
          "The experiments with polished stones suggested that ----.",
          [
            "the roughness of the running ring is important for curling",
            "polished stones curl more",
            "friction is the same everywhere",
            "sweeping has no effect",
            "the ice must be smooth",
          ],
          "Halkası parlatılmış taşlar çok daha az kıvrıldı; bu da pürüzlülüğün önemli olduğunu destekledi.",
        ],
        [
          "It can be understood from the passage that rules limit the types of brushes because ----.",
          [
            "sweeping can have a very large effect on the stone's path",
            "brushes damage the stones",
            "brushes are expensive",
            "sweeping is dangerous",
            "brushes melt the ice completely",
          ],
          "Süpürme çok etkili olabildiği için yönetim kurulları fırça türlerini sınırlayan kurallar getirmek zorunda kaldı.",
        ],
      ],
    },
    {
      text:
        "At the speeds reached in races, around ninety per cent of the effort a cyclist makes is used to push through the air, rather than to overcome friction with the road or the weight of the bicycle. For this reason, improving aerodynamics has become one of the most important ways of gaining an advantage in the sport. At the 1992 Olympic Games, the British rider Chris Boardman won a gold medal on a bicycle whose frame had been made from a single piece of carbon fibre by a sports car company, with a shape designed to reduce air resistance. Around the same time, a Scottish amateur cyclist named Graeme Obree attracted attention by building his own bicycle, using parts that included bearings taken from a washing machine. He rode in an unusual crouched position, with his chest resting on his hands, which greatly reduced the area of his body facing the wind, and in 1993 he broke the hour record, the greatest distance covered on a track in one hour. When the governing body of cycling banned this position, he developed another, in which he rode with his arms stretched out in front of him like a flying superhero, and broke more records. These developments led to a debate about whether records were being set by athletes or by technology. In 2000, the governing body introduced strict rules on the shape of bicycles and the positions riders could adopt, and it created a separate category for hour records set on bicycles similar to those used in the 1970s. Today, teams use wind tunnels and computer simulations to design helmets, clothing and even riding positions, and riders in a group take turns at the front, since those behind save a large amount of energy by riding in the sheltered air.",
      questions: [
        [
          "According to the passage, most of a racing cyclist's effort is used to ----.",
          [
            "push through the air",
            "overcome the weight of the bicycle",
            "climb hills",
            "create the bearings taken from a washing machine",
            "overcome friction with the road",
          ],
          "Metne göre yarış hızlarında harcanan çabanın yaklaşık yüzde doksanı havayı yarmak için kullanılır.",
        ],
        [
          "Obree's crouched position helped him by ----.",
          [
            "reducing the area of his body facing the wind",
            "making his bicycle heavier",
            "allowing him to pedal faster",
            "increasing his weight",
            "keeping him warm",
          ],
          "Göğsü ellerine dayalı büzülmüş pozisyon vücudunun rüzgâra bakan alanını büyük ölçüde azalttı.",
        ],
        [
          "It can be understood from the passage that riders in a group take turns at the front because ----.",
          [
            "riders behind save energy in the sheltered air",
            "the front rider is always the fastest",
            "the rules require it",
            "the road is narrow",
            "it confuses their opponents",
          ],
          "Arkadaki sürücüler korunaklı havada sürerken büyük miktarda enerji tasarruf eder.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1984, an East German athlete threw the javelin more than 104 metres, so far that it threatened to land on the track at the other end of the stadium. ---- As a result, distances fell, and throws became easier to judge.",
      [
        "Two years later, the rules were changed to move the javelin's centre of gravity forward, so that it would turn downwards sooner.",
        "Stadiums have running tracks.",
        "Athletes train every day.",
        "Many javelins had also landed flat, making it difficult for judges to decide whether a throw was valid.",
        "East Germany no longer exists.",
      ],
      "Boşluk kural değişikliğini anlatıp mesafelerin düşmesine bağlanan bir cümle gerektirir; boşluğa iki yıl sonra ciridin ağırlık merkezinin öne alındığını ve daha erken aşağı döndüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1950s and 1960s, pole vaulters began using poles made of fibreglass instead of bamboo or metal. ---- World records rose rapidly as a result.",
      [
        "The new poles could bend much further and spring back, storing the energy of the athlete's run and releasing it during the jump.",
        "Bamboo grows very quickly.",
        "Metal is heavy.",
        "Some athletes and officials complained at first that the new poles gave an unfair advantage.",
        "Many sports use poles.",
      ],
      "Boşluk yeni sırıkların nasıl çalıştığını anlatıp rekorların hızla yükselmesine bağlanan bir cümle gerektirir; boşluğa yeni sırıkların çok daha fazla bükülüp koşunun enerjisini depolayıp sıçrama sırasında bıraktığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1976, an American engineer introduced a tennis racket with a head much larger than those of traditional rackets. ---- Within a few years, rackets of this kind had become standard.",
      [
        "The larger head increased the area of the 'sweet spot', where the ball can be hit with little vibration.",
        "Tennis is played on many surfaces.",
        "Engineers design many products.",
        "The engineer had earlier designed new types of skis using metal and plastic.",
        "Tennis balls are yellow.",
      ],
      "Boşluk büyük başın yararını anlatıp bu tür raketlerin standart olmasına bağlanan bir cümle gerektirir; boşluğa büyük başın topa az titreşimle vurulan 'tatlı nokta' alanını genişlettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "A flying disc stays in the air for a long time because of its shape and its spin. ---- The spin, meanwhile, keeps it stable so that it does not wobble and fall.",
      [
        "Its curved upper surface and rim produce lift as it moves through the air, in a similar way to a wing.",
        "Discs are made of plastic.",
        "Many people play in parks.",
        "Flying discs were first sold in the United States in the 1950s.",
        "Wind can be strong at the beach.",
      ],
      "Boşluk diskin biçiminin rolünü anlatıp dönmenin dengeyi sağlamasına bağlanan bir cümle gerektirir; boşluğa kavisli üst yüzeyi ve kenarının bir kanat gibi kaldırma kuvveti ürettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the mid-1980s, a Swedish ski jumper began holding his skis in the shape of a letter V during flight instead of keeping them parallel. ---- Within a few years, almost all jumpers had adopted the technique.",
      [
        "Although judges at first gave him lower marks for style, the technique produced more lift and allowed him to jump further.",
        "Sweden has many forests.",
        "Skis are long and narrow.",
        "Ski jumping is one of the oldest events of the Winter Olympics.",
        "Snow falls in winter.",
      ],
      "Boşluk tekniğin ilk karşılanışını ve yararını anlatıp herkesin benimsemesine bağlanan bir cümle gerektirir; boşluğa hakemlerin başta düşük stil puanı vermesine rağmen tekniğin daha fazla kaldırma kuvveti ve mesafe sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In bobsleigh, the first few seconds of a race, when the team pushes the sled before jumping in, are extremely important. ---- For this reason, many bobsleigh teams recruit former sprinters.",
      [
        "A faster start gives the sled more speed for the rest of the run and can make the difference between winning and losing.",
        "Bobsleigh tracks are covered with ice.",
        "Sleds are heavy.",
        "Teams also spend a great deal of time designing sleds that reduce air resistance.",
        "Winter sports are popular in Switzerland.",
      ],
      "Boşluk başlangıcın önemini anlatıp takımların eski sprinterleri seçmesine bağlanan bir cümle gerektirir; boşluğa daha hızlı bir başlangıcın kızağa koşunun geri kalanı için hız kazandırdığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Rowing boats are long and narrow to reduce the resistance of the water.",
        "Modern racing boats are made from carbon fibre, which is light and stiff.",
        "Rivers are used by many boats for transport.",
        "The rowers' oars have blades shaped to grip the water.",
        "Sliding seats allow the rowers to use the strength of their legs.",
      ],
      odd: 2,
      why: "Parça kürek teknelerinin tasarımını anlatır. Nehirlerin pek çok teknece ulaşım için kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Modern running shoes with thick, springy soles have helped athletes to set many records.",
        "The soles contain a plate made of carbon fibre and a light foam that returns energy.",
        "Running's governing body has introduced rules limiting the thickness of the soles.",
        "Shoes are sold in many shops.",
        "Critics argue that the shoes make it difficult to compare athletes from different eras.",
      ],
      odd: 3,
      why: "Parça kalın ve esnek tabanlı koşu ayakkabılarını anlatır. Ayakkabıların pek çok dükkânda satıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A table tennis ball weighs less than three grams.",
        "Because it is so light, it is strongly affected by spin.",
        "Top players can make the ball spin more than a hundred times per second.",
        "Table tennis was first played in Britain as an after-dinner game.",
        "This allows them to make the ball curve and bounce in unexpected directions.",
      ],
      odd: 3,
      why: "Parça masa tenisi topunun hafifliğini ve dönüşün etkisini anlatır. Masa tenisinin İngiltere'de akşam yemeği sonrası oyunu olarak başladığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Golfers sometimes say that a ball travels further on a hot day.",
        "Many golf courses have lakes and sand bunkers.",
        "Hot air is less dense than cold air, so it slows the ball down less.",
        "The effect is small but measurable.",
        "Altitude has a similar effect, since the air is thinner.",
      ],
      odd: 1,
      why: "Parça sıcak havada golf topunun daha uzağa gitmesini anlatır. Pek çok golf sahasında göl ve kum havuzu bulunduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In swimming, a large part of the resistance comes from waves created by the swimmer's body.",
        "Swimmers can reduce this resistance by staying under water for longer after starts and turns.",
        "For this reason, the rules limit how far swimmers can travel under water.",
        "Swimming pools are usually filled with chlorinated water.",
        "Lane ropes are designed to reduce waves between lanes.",
      ],
      odd: 3,
      why: "Parça yüzücünün oluşturduğu dalgaların direncini anlatır. Yüzme havuzlarının genellikle klorlu suyla doldurulduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some sports use video technology to check decisions made by referees.",
        "In tennis, cameras track the ball to decide whether it landed in or out.",
        "In football, video assistants can review goals and penalties.",
        "Supporters say the technology makes decisions fairer.",
        "Cameras are also used to make films.",
      ],
      odd: 4,
      why: "Parça hakem kararlarını denetlemek için kullanılan video teknolojisini anlatır. Kameraların film yapımında da kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
  ],
};
