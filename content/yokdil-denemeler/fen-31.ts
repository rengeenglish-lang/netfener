import type { YokdilDeneme } from "./types";

export const FEN_31: YokdilDeneme = {
  no: 31,
  field: "fen",
  vocab: [
    [
      "The cylinder seemed empty, yet its weight showed that the gas had not ----.",
      ["escaped", "expanded", "arrived", "frozen", "doubled"],
      "Silindirin boş göründüğü, ancak ağırlığının gazın 'kaçmadığını' (escaped) gösterdiği anlatılır.",
    ],
    [
      "The new material was so ---- that almost nothing would stick to it.",
      ["slippery", "fragile", "heavy", "colourful", "porous"],
      "Yeni malzemenin o kadar 'kaygan' (slippery) olduğu ki neredeyse hiçbir şeyin ona yapışmadığı anlatılır.",
    ],
    [
      "Molten glass poured onto liquid tin spreads out to form a perfectly ---- surface.",
      ["flat", "rough", "curved", "hollow", "narrow"],
      "Sıvı kalay üzerine dökülen erimiş camın yayılarak kusursuz 'düz' (flat) bir yüzey oluşturduğu anlatılır.",
    ],
    [
      "Steel containing chromium is much more ---- to rust than ordinary steel.",
      ["resistant", "attractive", "similar", "harmful", "sensitive"],
      "Krom içeren çeliğin pas oluşumuna karşı sıradan çelikten çok daha 'dirençli' (resistant) olduğu anlatılır.",
    ],
    [
      "The adhesive was weak enough to allow the notes to be removed without ---- the paper.",
      ["damaging", "printing", "folding", "colouring", "selling"],
      "Yapıştırıcının notların kâğıda 'zarar vermeden' (damaging) çıkarılmasına izin verecek kadar zayıf olduğu anlatılır.",
    ],
    [
      "The engineer realised that the beam from the device had caused the chocolate to ----.",
      ["melt down", "set off", "turn up", "give in", "look over"],
      "Mühendisin cihazdan çıkan ışının çikolatanın 'erimesine' (melt down) yol açtığını fark ettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "Plunkett ---- with refrigerant gases when he made his unexpected discovery.",
      ["was experimenting", "has experimented", "experiments", "will experiment", "had been experimented"],
      "Geçmişte süren bir eylem sırasında başka bir olay olmuştur: 'was experimenting'.",
    ],
    [
      "By the time float glass was announced, the team ---- on the process for seven years.",
      ["had been working", "works", "will work", "is working", "has been worked"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been working'.",
    ],
    [
      "If Brearley had thrown his samples away, he ---- that they resisted rust.",
      ["would not have noticed", "will not notice", "does not notice", "had not noticed", "would not notice"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would not have noticed'.",
    ],
    [
      "The adhesive ---- as a failure when it was first developed in 1968.",
      ["was regarded", "regarded", "has regarded", "is regarding", "will regard"],
      "Yapıştırıcı başarısız sayılmıştır; edilgen geçmiş zaman: 'was regarded'.",
    ],
    [
      "---- the first microwave ovens were enormous, later models fitted easily on a kitchen counter.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "İlk fırınların dev olması ile sonrakilerin tezgâha sığması zıttır: 'Although'.",
    ],
    [
      "Coover was looking for a clear plastic ---- could be used to make gun sights.",
      ["that", "who", "whose", "what", "where"],
      "'a clear plastic' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
    ],
    [
      "Some Roman concrete is still standing after twenty centuries, ---- is longer than most modern concrete is expected to last.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The thinner the layer of glass, ---- it is to produce without defects.",
      ["the harder", "the hardest", "harder than", "much harder", "so hard"],
      "'The thinner ..., the harder ...' paralel yapısı: 'the harder'.",
    ],
    [
      "Not until the 1950s ---- non-stick frying pans appear in shops.",
      ["did", "had", "were", "have", "do"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The glue sets so quickly ---- users must be careful not to stick their fingers together.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Spencer's colleagues placed an egg near the device, ---- exploded in their faces.",
      ["which", "who", "what", "where", "whose"],
      "Virgülden sonra 'an egg' ifadesini niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "Kwolek persuaded a technician ---- the unusual solution into fibres.",
      ["to spin", "spinning", "spin", "spun", "to be spun"],
      "'persuade somebody to do' yapısı: 'to spin'.",
    ],
    [
      "The putty bounced like rubber ---- it was dropped onto a hard floor.",
      ["when", "unless", "although", "until", "so that"],
      "Sert zemine düşürüldüğünde zıpladığı anlatılır; zaman bildiren bağlaç: 'when'.",
    ],
    [
      "Engineers insisted that the cutlery ---- tested in vinegar and lemon juice.",
      ["be", "is being", "was been", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "Roy Plunkett, who joined the American firm DuPont as a chemist in the 1930s, was trying in April 1938 to develop a new non-toxic gas for use in refrigerators. He had stored a quantity of one of his experimental gases, tetrafluoroethylene, in small metal cylinders kept at low temperature. One morning, when his assistant opened the valve of one cylinder, nothing came out, {1} the cylinder was just as heavy as a full one. Puzzled, Plunkett cut the cylinder open and found its inside coated with a white, waxy powder. The gas molecules had joined together to form a polymer, {2} he and his colleagues named polytetrafluoroethylene. The new substance had remarkable properties: it was extremely slippery, resisted almost all chemicals and could withstand high temperatures. {3} first the material cost a great deal to make, and it was first put to serious use in the secret wartime project to build the atomic bomb, {4} its resistance to aggressive chemicals made it ideal for seals and gaskets. Under the brand name Teflon, it later became famous as a coating for non-stick frying pans, {5} were introduced in the 1950s.",
      blanks: [
        [
          "(21) ----",
          ["yet", "so", "because", "or", "unless"],
          "Hiçbir şey çıkmaması ile silindirin dolu ağırlığında olması zıttır: 'yet'.",
        ],
        [
          "(22) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgülden sonra 'a polymer' ifadesini niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(23) ----",
          ["At", "In", "On", "By", "For"],
          "Başlangıçta üretiminin pahalı olduğu anlatılır; 'At first' kalıbı: 'At'.",
        ],
        [
          "(24) ----",
          ["where", "which", "when", "whose", "who"],
          "Gizli savaş projesinde, yani o bağlamda kullanıldığı yer: 'where'.",
        ],
        [
          "(25) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'non-stick frying pans' ifadesini niteleyen ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "Until the 1950s, high-quality flat glass for shop windows and mirrors was made by a slow and costly process. Large sheets of glass were cast or rolled and then ground and polished on both sides, {1} wasted a great deal of material and energy. Alastair Pilkington, an engineer at the British glass company that shared his surname, began to look for a better method. According to a popular story, he thought of it at the kitchen sink and watched grease floating on the water. His solution was to pour a continuous ribbon of molten glass onto a bath of molten tin. Because the glass is lighter {2} the tin, it floats on its surface, and because both liquids are perfectly smooth, the glass spreads out into a sheet with flat, parallel faces. It is then cooled slowly {3} it is solid enough to be lifted onto rollers. Developing the process took about seven years and cost the company a great deal of money, {4} it was announced in 1959. The float process proved so efficient that it is now used to make almost all the flat glass in the world, and it was licensed to manufacturers in many countries, {5} brought the company large profits.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki işlemin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(27) ----",
          ["than", "as", "so", "from", "to"],
          "'lighter than' karşılaştırma yapısı: 'than'.",
        ],
        [
          "(28) ----",
          ["until", "unless", "although", "because", "whereas"],
          "Rulolara alınacak kadar katılaşana 'kadar' yavaşça soğutulduğu anlatılır: 'until'.",
        ],
        [
          "(29) ----",
          ["before", "after", "because", "unless", "since"],
          "1959'da duyurulmadan 'önce' yedi yıl sürdüğü anlatılır: 'before'.",
        ],
        [
          "(30) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra lisans verilmesini niteleyen ilgi zamiri: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although nothing came out of the cylinder when it was opened, ----.",
      [
        "its weight showed that something was still inside",
        "Plunkett worked for a large chemical company",
        "the gas was meant for refrigerators",
        "the experiment took place in 1938",
        "metal cylinders are used to store gas",
      ],
      "'Although' zıtlık ister: silindir açıldığında hiçbir şey çıkmasa da ağırlığı içinde hâlâ bir şey olduğunu gösterdi.",
    ],
    [
      "Molten glass is poured onto a bath of tin ----.",
      [
        "so that it forms a smooth, flat sheet",
        "although tin is a soft metal",
        "unless the glass is very thick",
        "because Pilkington washed dishes",
        "while the company was in Britain",
      ],
      "'so that' amaç bildirir: erimiş cam düz ve pürüzsüz bir levha oluşturması için kalay banyosuna dökülür.",
    ],
    [
      "If steel contains enough chromium, ----.",
      [
        "a thin protective layer forms on its surface",
        "Brearley worked in the city of Sheffield",
        "rifle barrels wear out over time",
        "cutlery was made in large factories",
        "the research began in 1913",
      ],
      "Birinci tip koşul: çelik yeterli krom içerirse yüzeyinde ince koruyucu bir tabaka oluşur.",
    ],
    [
      "----, Coover at first rejected the substance as useless.",
      [
        "Finding that it stuck to everything it touched",
        "Although he worked for a large company",
        "Unless the war had already ended",
        "Because gun sights must be clear",
        "Since he was an experienced chemist",
      ],
      "Dokunduğu her şeye yapıştığını gören Coover maddeyi başta işe yaramaz diye reddetti.",
    ],
    [
      "Fry used the weak adhesive to make bookmarks ----.",
      [
        "that would not harm his book",
        "although he sang in a church choir",
        "unless the paper was very thin",
        "because Silver had invented it in 1968",
        "while the company sold many products",
      ],
      "Fry, zayıf yapıştırıcıyı ilahi kitabına zarar vermeden yerinde kalacak ayraçlar yapmak için kullandı.",
    ],
    [
      "Roman concrete has lasted so long ----.",
      [
        "partly as it heals small cracks",
        "although the Pantheon is in Rome",
        "unless it was used under the sea",
        "so that many buildings were destroyed",
        "while the empire collapsed",
      ],
      "Roma betonu kısmen küçük çatlakları kendisi onarabildiği için bu kadar uzun süre dayanmıştır.",
    ],
    [
      "Not only did the microwave oven cook food quickly, ----.",
      [
        "but it also changed home cooking",
        "and it was invented in the United States",
        "since the first model was very heavy",
        "so radar was used in the war",
        "unless the food contained water",
      ],
      "'Not only ... but also' yapısı tamamlanır: mikrodalga fırın yiyecekleri hızla pişirmekle kalmadı, pek çok ailenin yemek hazırlama biçimini de değiştirdi.",
    ],
    [
      "Since the fibres were five times stronger than steel of the same weight, ----.",
      [
        "they were soon used in bulletproof vests",
        "Kwolek worked for a chemical company",
        "the solution looked cloudy",
        "the technician was unwilling at first",
        "the research took place in the 1960s",
      ],
      "'Since' neden bildirir: lifler aynı ağırlıktaki çelikten beş kat güçlü olduğu için kısa sürede kurşun geçirmez yeleklerde kullanıldı.",
    ],
    [
      "The coated glass flask did not shatter when it fell ----.",
      [
        "as a film held the pieces",
        "although it had been left on a shelf",
        "unless the laboratory floor was soft",
        "so that cars needed safer windscreens",
        "while Benedictus was a chemist",
      ],
      "Kaplanmış cam şişe düştüğünde kurumuş bir film kırık parçaları bir arada tuttuğu için dağılmadı.",
    ],
    [
      "Although Silly Putty was invented during a search for synthetic rubber, ----.",
      [
        "it became famous as a children's toy",
        "rubber was scarce during the war",
        "it was made from silicone oil",
        "it can bounce and stretch",
        "it was sold in plastic eggs",
      ],
      "'Although' zıtlık ister: sentetik kauçuk araştırması sırasında icat edilse de çocuk oyuncağı olarak ünlendi.",
    ],
    [
      "Unless scientists pay attention to unexpected results, ----.",
      [
        "they may miss important discoveries",
        "most experiments are carried out in laboratories",
        "chemistry is taught in many schools",
        "new materials are expensive to develop",
        "patents protect inventions",
      ],
      "'Unless' olumsuz koşul: bilim insanları beklenmedik sonuçlara dikkat etmezse önemli keşifleri kaçırabilir.",
    ],
  ],
  enTr: [
    [
      "The gas molecules had joined together to form a solid polymer inside the cylinder.",
      [
        "Gaz molekülleri, silindirin içinde birleşerek katı bir polimer oluşturmuştu.",
        "Katı polimer, silindirin içinde gaz moleküllerine ayrışmıştı.",
        "Gaz molekülleri, silindirden kaçarak polimer oluşturdu.",
        "Silindirin içindeki polimer, gazın birleşmesini engelledi.",
        "Gaz molekülleri, silindirin dışına kaçarak soğuk havada katı bir polimere dönüştü ve silindiri kapladı.",
      ],
      "'had joined together' 'birleşmişti', 'to form a solid polymer inside the cylinder' 'silindirin içinde katı bir polimer oluşturacak şekilde' karşılığıdır.",
    ],
    [
      "The float process eliminated the need to grind and polish the glass.",
      [
        "Yüzdürme yöntemi, camı taşlama ve parlatma ihtiyacını ortadan kaldırdı.",
        "Yüzdürme yöntemi, camın daha fazla taşlanmasını gerektirdi.",
        "Cam, yüzdürme yönteminden önce taşlanıp parlatılmalıdır.",
        "Camı parlatmak, yüzdürme yönteminin ilk aşamasıdır.",
        "Yüzdürme yöntemi, camı daha uzun süre taşlama ve parlatma ihtiyacını ortaya çıkardı.",
      ],
      "'eliminated the need' 'ihtiyacını ortadan kaldırdı', 'to grind and polish the glass' 'camı taşlama ve parlatma' karşılığıdır.",
    ],
    [
      "Samples that had been left in the open air for weeks showed no sign of rust.",
      [
        "Haftalarca açık havada bırakılan örneklerde hiçbir pas belirtisi görülmedi.",
        "Açık havada bırakılan örnekler birkaç gün içinde paslandı.",
        "Örnekler, pas tutmasın diye haftalarca kapalı yerde tutuldu.",
        "Pas belirtisi görülen örnekler açık havaya çıkarıldı.",
        "Haftalarca açık havada bırakılan örnekler, birkaç gün içinde tamamen paslanıp kullanılamaz hale geldi.",
      ],
      "'Samples that had been left in the open air for weeks' 'haftalarca açık havada bırakılan örnekler', 'showed no sign of rust' 'hiçbir pas belirtisi görülmedi' karşılığıdır.",
    ],
    [
      "During the war, the glue was used to close wounds on the battlefield.",
      [
        "Savaş sırasında yapıştırıcı, savaş alanında yaraları kapatmak için kullanıldı.",
        "Savaş sırasında yapıştırıcı, askerlerin yaralanmasına yol açtı.",
        "Yapıştırıcı, savaştan sonra yaraları açmak için kullanıldı.",
        "Savaş alanındaki yaralar, yapıştırıcının üretimini engelledi.",
        "Savaş sırasında yapıştırıcı, savaş alanında yaraları kapatmak yerine yalnızca silah tamirinde kullanıldı.",
      ],
      "'was used to close wounds' 'yaraları kapatmak için kullanıldı', 'on the battlefield' 'savaş alanında' karşılığıdır.",
    ],
    [
      "Many Roman harbour walls have become stronger rather than weaker over the centuries.",
      [
        "Pek çok Roma liman duvarı yüzyıllar boyunca zayıflamak yerine güçlendi.",
        "Roma liman duvarları yüzyıllar boyunca hızla zayıfladı.",
        "Roma limanları, duvarlarını güçlendirmek için yüzyıllarca çalıştı.",
        "Liman duvarları, yalnızca ilk yüzyılda güçlüydü.",
        "Romalılar, liman duvarlarını her yüzyılda yeniden inşa etti.",
      ],
      "'have become stronger rather than weaker' 'zayıflamak yerine güçlendi', 'over the centuries' 'yüzyıllar boyunca' karşılığıdır.",
    ],
    [
      "The first commercial microwave oven was nearly as tall as a person and weighed hundreds of kilograms.",
      [
        "İlk ticari mikrodalga fırın neredeyse bir insan boyundaydı ve yüzlerce kilogram ağırlığındaydı.",
        "İlk ticari mikrodalga fırın, bir insanın taşıyabileceği kadar hafifti.",
        "Mikrodalga fırınlar, insanların boyuna göre tasarlandı.",
        "İlk mikrodalga fırın, birkaç kilogramdan daha hafifti.",
        "İlk ticari mikrodalga fırını görmek için yüzlerce kişi toplandı, ancak fırın bir insanın taşıyabileceği kadar hafifti.",
      ],
      "'was nearly as tall as a person' 'neredeyse bir insan boyundaydı', 'weighed hundreds of kilograms' 'yüzlerce kilogram ağırlığındaydı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Bu madde, neredeyse tüm kimyasallara karşı dayanıklıdır ve yüksek sıcaklıklara dayanabilir.",
      [
        "This substance resists almost all chemicals and can withstand high temperatures.",
        "This substance reacts with most chemicals and melts at low temperatures.",
        "Almost all chemicals are made from this substance at high temperatures.",
        "High temperatures make this substance react with chemicals.",
        "This substance can be used only at low temperatures.",
      ],
      "'neredeyse tüm kimyasallara karşı dayanıklıdır' 'resists almost all chemicals', 'yüksek sıcaklıklara dayanabilir' 'can withstand high temperatures' karşılığıdır.",
    ],
    [
      "Cam, kalaydan daha hafif olduğu için onun yüzeyinde yüzer.",
      [
        "Because glass is lighter than tin, it floats on its surface.",
        "Tin floats on glass because it is lighter.",
        "Glass sinks in tin because it is heavier.",
        "Tin and glass have exactly the same weight.",
        "Glass floats on the surface of tin only when the tin has been allowed to cool down completely.",
      ],
      "'kalaydan daha hafif olduğu için' 'because glass is lighter than tin', 'yüzeyinde yüzer' 'floats on its surface' karşılığıdır.",
    ],
    [
      "Paslanmaz çelik kısa sürede bıçak ve çatal yapımında kullanılmaya başlandı.",
      [
        "Stainless steel soon began to be used for making knives and forks.",
        "Knives and forks were made of stainless steel long before it was invented.",
        "Stainless steel was too weak to be used for cutlery.",
        "Knives made of stainless steel rusted quickly.",
        "Stainless steel was used only for making guns.",
      ],
      "'kısa sürede ... kullanılmaya başlandı' 'soon began to be used', 'bıçak ve çatal yapımında' 'for making knives and forks' karşılığıdır.",
    ],
    [
      "Yapıştırıcının zayıflığı, sonunda en büyük avantajı haline geldi.",
      [
        "The weakness of the adhesive eventually became its greatest advantage.",
        "The adhesive became weaker as it got older.",
        "The adhesive's greatest advantage was its strength.",
        "Weak adhesives are never useful.",
        "The company improved the adhesive until it was no longer weak, which became its greatest advantage.",
      ],
      "'Yapıştırıcının zayıflığı' 'the weakness of the adhesive', 'sonunda en büyük avantajı haline geldi' 'eventually became its greatest advantage' karşılığıdır.",
    ],
    [
      "Mikrodalgalar, yiyeceklerdeki su moleküllerini titreştirerek ısı üretir.",
      [
        "Microwaves produce heat by making the water molecules in food vibrate.",
        "Microwaves remove water molecules from food in order to cool it.",
        "Water molecules in food stop microwaves from producing heat.",
        "Food without water heats up faster in a microwave.",
        "Microwaves produce water by heating food.",
      ],
      "'su moleküllerini titreştirerek' 'by making the water molecules vibrate', 'ısı üretir' 'produce heat' karşılığıdır.",
    ],
    [
      "Bu esnek madde, savaş sırasında kauçuk yerine kullanılmak üzere geliştirildi, ancak bu amaca uygun değildi.",
      [
        "This flexible substance was developed to replace rubber during the war, but it was unsuitable for this purpose.",
        "This flexible substance was used to make rubber during the war.",
        "Rubber was developed during the war to replace this substance.",
        "The substance proved ideal as a replacement for rubber.",
        "The war prevented this flexible substance from being developed as a replacement for natural rubber.",
      ],
      "'kauçuk yerine kullanılmak üzere geliştirildi' 'was developed to replace rubber', 'ancak bu amaca uygun değildi' 'but it was unsuitable for this purpose' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1912, Harry Brearley, a metallurgist in the steel-making city of Sheffield, England, was asked to investigate why the inside of rifle barrels wore away so quickly when guns were fired. He began experimenting with steels containing different amounts of chromium, hoping to find one that would resist the heat and friction. In August 1913 he produced a steel containing about thirteen per cent chromium. When he tried to examine its structure, he found that the usual acid used to etch the surface of steel samples had little effect on it. Brearley realised that the new metal also resisted rust and corrosion, and he suggested that it might be ideal for cutlery, since ordinary steel knives quickly became stained by acidic foods such as vinegar and lemon juice. Local cutlery makers were at first sceptical, partly because the metal was harder to work than ordinary steel. Eventually, however, one manufacturer agreed to make some knives, which were sold as 'rustless' and later as 'stainless'. Scientists now know that the chromium reacts with oxygen to form an extremely thin, invisible layer on the surface, which protects the metal underneath and quickly repairs itself if it is scratched.",
      questions: [
        [
          "According to the passage, Brearley's original research was intended to ----.",
          [
            "reduce wear inside rifle barrels",
            "develop better cutlery",
            "find a cheaper type of steel",
            "study the effects of vinegar",
            "make steel easier to work",
          ],
          "Metne göre tüfek namlularının iç kısmının neden bu kadar hızlı aşındığını araştırması istenmişti.",
        ],
        [
          "Brearley first noticed the new steel's special property when ----.",
          [
            "acid failed to etch its surface",
            "it was used to make a rifle",
            "it was left in the rain",
            "a knife was dipped in lemon juice",
            "it melted at a low temperature",
          ],
          "Yapısını incelemeye çalışırken asidin yüzey üzerinde çok az etkisi olduğunu gördü.",
        ],
        [
          "It can be understood from the passage that the protective layer on stainless steel ----.",
          [
            "can renew itself after damage",
            "is thick enough to be seen",
            "must be painted on by hand",
            "makes the steel softer",
            "contains no oxygen",
          ],
          "Çizildiğinde kendini hızla onaran ince bir tabakadır.",
        ],
      ],
    },
    {
      text:
        "During the Second World War, Harry Coover, a young chemist working for the Eastman Kodak company in the United States, was trying to develop a clear plastic that could be used to make precision gun sights. One group of substances he tested, called cyanoacrylates, proved impossible to work with: they stuck firmly to everything they touched, including the equipment, and Coover set them aside. Almost a decade later, in 1951, Coover and his colleague Fred Joyner were looking for a heat-resistant material for aircraft canopies. Joyner spread a film of a cyanoacrylate between two expensive glass prisms in a laboratory instrument to measure its properties, and found that he could not separate them. This time, Coover recognised the commercial potential of an adhesive that needed no heat or pressure and set within seconds in the presence of tiny amounts of moisture. The product went on sale in 1958. During the Vietnam War, a spray form of a similar substance was used by army medics to seal wounds and stop bleeding until soldiers could be taken to hospital. Medical versions of the glue are now used to close cuts and surgical incisions, often in place of stitches.",
      questions: [
        [
          "According to the passage, Coover set the substances aside during the war because ----.",
          [
            "they were too sticky to be useful for his purpose",
            "they were not clear enough",
            "they were too expensive to make",
            "the war ended soon afterwards and the project was cancelled",
            "they could not resist heat",
          ],
          "Dokundukları her şeye sıkıca yapıştıkları için onlarla çalışmak imkânsızdı.",
        ],
        [
          "The incident with the glass prisms was important because it ----.",
          [
            "made Coover see the value of the adhesive",
            "destroyed an expensive instrument",
            "showed that the glue needed heat",
            "proved the material was useless",
            "led to new gun sights",
          ],
          "Bu kez Coover yapıştırıcının ticari potansiyelini fark etti.",
        ],
        [
          "It can be inferred from the passage that the glue sets quickly on skin because ----.",
          [
            "skin contains small amounts of moisture",
            "skin is warmer than glass",
            "pressure is applied by doctors",
            "it is mixed with heat",
            "wounds are always dry",
          ],
          "Yapıştırıcı küçük miktarlarda nem varlığında saniyeler içinde donar; deri nem içerir.",
        ],
      ],
    },
    {
      text:
        "In 1968, Spencer Silver, a chemist at the American company 3M, was trying to develop a very strong adhesive for use in aircraft construction. Instead, he produced the opposite: a weak glue made of tiny spheres that stuck lightly to surfaces and could be peeled off easily without leaving any residue. It could even be reused several times. Silver was convinced that the substance must be useful for something, and for several years he gave talks about it within the company, but no one could think of a product. The solution came in 1974 from Art Fry, a colleague who sang in a church choir. Fry was frustrated that the paper bookmarks he used to mark hymns in his hymn book kept falling out. Remembering Silver's adhesive, he coated small pieces of paper with it and found that they stayed in place and could be removed without damaging the pages. Fry soon realised that the notes were even more useful for writing messages that could be stuck onto documents. Early market tests were disappointing because people did not understand the product until they had tried it. After the company gave away free samples in several cities, demand grew rapidly, and the notes were launched across the United States in 1980.",
      questions: [
        [
          "According to the passage, Silver's adhesive was unusual because it ----.",
          [
            "could be removed and reused easily",
            "was the strongest glue ever made",
            "was designed for church use",
            "left marks on surfaces",
            "was made for paper only",
          ],
          "Metne göre kolayca soyulabiliyor, iz bırakmıyor ve tekrar kullanılabiliyordu.",
        ],
        [
          "Fry's idea came from ----.",
          [
            "a practical problem in his own life",
            "a request from the company's managers",
            "research on aircraft construction",
            "a talk he gave to the choir",
            "a competition held by 3M",
          ],
          "İlahi kitabındaki ayraçların sürekli düşmesi Fry'ın fikrine yol açtı.",
        ],
        [
          "It can be understood from the passage that free samples helped because ----.",
          [
            "people needed to try the product to see its value",
            "the product was very expensive",
            "the company had too many notes",
            "they were given only to choirs",
            "market tests had been successful",
          ],
          "İnsanlar ürünü denemeden anlamıyordu; ücretsiz örnekler talebi artırdı.",
        ],
      ],
    },
    {
      text:
        "Many structures built by the ancient Romans have survived for two thousand years, including the Pantheon in Rome, whose huge dome, made of unreinforced concrete, is still the largest of its kind in the world. Roman harbour walls built in the sea have also lasted remarkably well, whereas modern concrete exposed to seawater often begins to crumble within decades. Scientists have long tried to understand why. Part of the answer lies in volcanic ash; when combined with lime, it produces long-lasting minerals. In seawater, researchers found in 2017, the reaction continues slowly over centuries, producing interlocking crystals that make the material stronger over time. A study published in 2023 by researchers based at MIT offered a further explanation. The researchers examined small white lumps of lime scattered through Roman concrete, which had previously been dismissed as a sign of poor mixing. They concluded that the Romans had used quicklime, which reacts with water and generates heat, and that the lumps acted as a reserve. When cracks formed and water seeped in, the lime dissolved and then hardened again, sealing the cracks. Engineers hope that similar 'self-healing' concrete could make modern buildings last longer and reduce the environmental cost of cement production.",
      questions: [
        [
          "According to the passage, Roman harbour walls differ from modern concrete in seawater in that they ----.",
          [
            "have become stronger over time",
            "were built with steel reinforcement",
            "have crumbled within decades",
            "contain no volcanic ash",
            "were never exposed to water",
          ],
          "Metne göre deniz suyunda tepkime yüzyıllarca sürüp malzemeyi zamanla güçlendirmiştir.",
        ],
        [
          "The white lumps of lime had previously been regarded as ----.",
          [
            "evidence of careless mixing",
            "the secret of Roman strength",
            "decorations added by builders",
            "a sign of volcanic activity",
            "damage caused by seawater",
          ],
          "Daha önce kötü karıştırmanın işareti olarak görülmüşlerdi.",
        ],
        [
          "It can be inferred from the passage that self-healing concrete might ----.",
          [
            "reduce the need to produce new cement",
            "make buildings heavier",
            "prevent water from reaching cracks",
            "replace volcanic ash completely",
            "be used only in harbours",
          ],
          "Daha uzun ömürlü binalar çimento üretiminin çevresel maliyetini azaltabilir.",
        ],
      ],
    },
    {
      text:
        "In 1945, Percy Spencer, an engineer at the American company Raytheon, was working near a magnetron, a device that produces the microwaves used in radar, when he found that the chocolate he was carrying had turned soft and sticky. To test the effect, he held some unpopped corn beside the device, and soon it was bursting. When colleagues put an egg in front of it, the egg heated so quickly that it exploded. The engineer saw at once that this radiation offered a fast way of cooking, and Raytheon filed a patent the same year. When the company began selling its oven in 1947, the machine was nearly as tall as a person, weighed more than 300 kilograms and cost thousands of dollars; it was bought mainly by restaurants, railway companies and ships. It took two decades of development before smaller, cheaper models suitable for homes appeared in the late 1960s. Microwave ovens work by making water molecules in food rotate rapidly, which produces heat. Because microwaves penetrate only a few centimetres into food, larger items are heated partly by conduction from the outer layers, which is why food may be hot on the outside and cold in the middle. By the 1990s, most households in the United States owned one.",
      questions: [
        [
          "According to the passage, Spencer's discovery began with ----.",
          [
            "a melted chocolate bar",
            "a failed radar experiment",
            "an exploding egg",
            "a request from a restaurant",
            "a patent application",
          ],
          "Metne göre cebindeki çikolatanın eridiğini fark etmesiyle başladı.",
        ],
        [
          "The first commercial microwave ovens were bought mainly by businesses because ----.",
          [
            "they were too large and expensive for homes",
            "families did not like their taste",
            "they were sold only abroad",
            "they used too little electricity",
            "Raytheon refused to sell to families",
          ],
          "İnsan boyunda, 300 kg'dan ağır ve binlerce dolarlık fiyatlarıyla evler için uygun değillerdi.",
        ],
        [
          "It can be understood from the passage that food may remain cold in the middle because ----.",
          [
            "microwaves do not reach deep into it",
            "water molecules stop moving",
            "the outer layers are frozen",
            "the oven is too powerful",
            "conduction is very fast",
          ],
          "Mikrodalgalar yiyeceğe yalnızca birkaç santimetre nüfuz eder; iç kısım iletimle ısınır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1965, the chemist Stephanie Kwolek at DuPont was searching for a light but strong fibre to reinforce car tyres. ---- When it was spun into fibres, the material proved to be five times stronger than steel of the same weight, and it was later sold as Kevlar.",
      [
        "One of her solutions was cloudy and thin, and colleagues expected it to be useless.",
        "DuPont is one of the largest chemical companies in the world.",
        "Car tyres are made mainly from rubber.",
        "Many chemists in large companies work in teams on several projects at once.",
        "Steel cord is sometimes used inside tyres as well.",
      ],
      "Boşluktan sonra malzemenin liflere eğrilince çok güçlü çıktığı anlatılır; boşluğa çözeltilerinden birinin bulanık ve ince olduğunu ve işe yaramaz sanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1903, the French chemist Édouard Bénédictus accidentally dropped a glass flask on the floor of his laboratory. ---- He later used the same principle to develop laminated safety glass, which became widely used in car windscreens.",
      [
        "To his surprise, it cracked but did not break apart, because a film of dried plastic inside held the pieces together.",
        "France has a long tradition of glass making.",
        "Laboratories contain many fragile objects.",
        "Cars were rare at the beginning of the twentieth century.",
        "Some chemists of that period were also keen amateur artists and photographers.",
      ],
      "Boşluktan sonra 'the same principle' denir; boşluğa şişenin içindeki kurumuş plastik film sayesinde çatlayıp dağılmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1969, Bob Gore was trying to stretch rods of heated PTFE, the material used in non-stick pans, slowly and carefully. ---- The resulting material was full of tiny pores that let water vapour escape but kept liquid water out, and it was used to make waterproof clothing that allows sweat to evaporate.",
      [
        "Out of frustration, he gave one rod a sudden, hard pull, and it stretched to many times its length.",
        "Non-stick pans should not be heated when empty.",
        "Many people enjoy walking in the mountains.",
        "Mountain weather can change very quickly, especially in spring.",
        "Clothing for outdoor activities is often made from cotton or wool.",
      ],
      "Boşluktan sonra 'The resulting material' denir; boşluğa Gore'un çubuğu sertçe çekerek boyunun kat kat uzamasını sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1892, the Scottish scientist James Dewar needed a way to store the extremely cold liquids he was studying. ---- Because heat cannot easily cross a vacuum, liquids inside stayed cold for much longer, and the same design is used today in flasks that keep drinks hot or cold.",
      [
        "He designed a container with two glass walls separated by a vacuum.",
        "Scotland has produced many famous scientists.",
        "Cold drinks are popular in summer.",
        "Glass is made by heating sand.",
        "Some liquids freeze only at extremely low temperatures far below zero.",
      ],
      "Boşluktan sonra ısının vakumu kolayca geçemediği anlatılır; boşluğa Dewar'ın iki cam duvarı vakumla ayrılmış bir kap tasarladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1943, James Wright, an engineer at General Electric, was trying to make a substitute for rubber, which was in short supply during the war. ---- No one could find a practical use for it, but after the war it was sold in small plastic eggs as a toy called Silly Putty.",
      [
        "By mixing boric acid with silicone oil, he created a strange substance that bounced and stretched.",
        "Rubber comes from the sap of certain trees.",
        "General Electric made many household products.",
        "Toys were scarce during the war.",
        "Engineers working on war projects often worked very long hours.",
      ],
      "Boşluktan sonra 'it' ile maddenin kullanım alanı bulunamadığı anlatılır; boşluğa Wright'ın borik asit ile silikon yağını karıştırarak zıplayan ve esneyen tuhaf bir madde yarattığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the early 1960s, the American glass company Corning developed a toughened glass by dipping it in a bath of hot molten salt. ---- The project was revived in 2007 when a technology company needed a scratch-resistant screen for a new mobile phone, and the glass is now used in billions of devices.",
      [
        "The process made the glass far stronger, but few customers wanted it, and production stopped.",
        "Table salt is mostly sodium chloride, which dissolves easily in water.",
        "Mobile phones have become much thinner and lighter in recent years.",
        "Many teenagers check their phones dozens of times each day.",
        "Window glass is usually made from sand, soda and lime.",
      ],
      "Boşluktan sonra projenin 2007'de yeniden canlandırıldığı anlatılır; boşluğa işlemin camı güçlendirdiğini ama talep olmadığı için üretimin durduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Titanium is as strong as steel but about forty per cent lighter.",
        "It also resists corrosion, even in seawater.",
        "Steel is produced in large quantities in many countries.",
        "However, extracting titanium from its ores is difficult and expensive.",
        "As a result, it is used mainly where its properties are essential, such as in aircraft and medical implants.",
      ],
      odd: 2,
      why: "Parça titanyumu anlatır. Çeliğin pek çok ülkede büyük miktarlarda üretildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Carbon fibre is made from extremely thin strands of carbon bundled together and set in plastic.",
        "The resulting material is very strong and stiff for its weight.",
        "It is used in aircraft, racing cars and sports equipment such as bicycles and tennis rackets.",
        "Tennis was first played on grass courts.",
        "Its main disadvantages are its high cost and the difficulty of recycling it.",
      ],
      odd: 3,
      why: "Parça karbon fiberi anlatır. Tenisin ilk kez çim kortlarda oynandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Weathering steel is designed to rust in a controlled way.",
        "Its surface forms a dense layer of rust that protects the metal beneath from further corrosion.",
        "As a result, it does not need to be painted.",
        "Many artists work with metal in their studios.",
        "It is often used for bridges and large outdoor sculptures.",
      ],
      odd: 3,
      why: "Parça hava koşullarına dayanıklı çeliği anlatır. Pek çok sanatçının atölyesinde metalle çalıştığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Damascus steel was famous in the Middle Ages for its strength and its wavy surface patterns.",
        "It was made from a special type of steel produced in India and Sri Lanka.",
        "The exact method of making it was lost by the eighteenth century.",
        "Damascus is one of the oldest continuously inhabited cities in the world.",
        "Modern researchers have tried to recreate the steel by studying surviving blades.",
      ],
      odd: 3,
      why: "Parça Şam çeliğini anlatır. Şam'ın dünyanın sürekli yerleşim gören en eski kentlerinden biri olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "It is often said that old window glass is thicker at the bottom because glass slowly flows over centuries.",
        "Scientists have shown that this is not true.",
        "At room temperature, glass would take far longer than the age of the universe to flow noticeably.",
        "Churches often have beautiful stained-glass windows.",
        "The uneven thickness is due to the way glass was made in the past.",
      ],
      odd: 3,
      why: "Parça camın aktığı efsanesini anlatır. Kiliselerin genellikle güzel vitray pencereleri olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some new materials can repair themselves when they are damaged.",
        "In one type, tiny capsules of liquid glue are mixed into a plastic.",
        "When a crack forms, the capsules break and release the glue, which fills the gap and hardens.",
        "Such materials could make products last longer and reduce waste.",
        "Plastic bags take many years to break down in the environment.",
      ],
      odd: 4,
      why: "Parça kendini onaran malzemeleri anlatır. Plastik poşetlerin doğada ayrışmasının uzun yıllar sürdüğünü söyleyen V. cümle konu dışıdır.",
    },
  ],
};
