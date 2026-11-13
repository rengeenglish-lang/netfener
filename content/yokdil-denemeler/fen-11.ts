import type { YokdilDeneme } from "./types";

export const FEN_11: YokdilDeneme = {
  no: 11,
  field: "fen",
  vocab: [
    [
      "Red and green LEDs had existed for decades, but producing a bright blue one proved extremely ----.",
      ["difficult", "cheap", "obvious", "boring", "popular"],
      "Kırmızı ve yeşil LED'ler onlarca yıldır varken parlak mavi LED üretmenin son derece 'zor' (difficult) olduğu anlatılır.",
    ],
    [
      "Blowing air through molten iron ---- carbon and other impurities, turning the iron into steel.",
      ["removes", "adds", "hides", "freezes", "colours"],
      "Erimiş demirin içinden hava üflemenin karbonu ve diğer safsızlıkları 'uzaklaştırdığı' (removes) anlatılır.",
    ],
    [
      "Although aluminium is the most ---- metal in the Earth's crust, it was once more valuable than gold.",
      ["abundant", "expensive", "fragile", "dangerous", "ancient"],
      "Alüminyumun yer kabuğundaki en 'bol' (abundant) metal olmasına rağmen bir zamanlar altından değerli olduğu anlatılır.",
    ],
    [
      "One major problem with the new solar cells is that they ---- quickly when exposed to heat and moisture.",
      ["degrade", "improve", "expand", "multiply", "shine"],
      "Yeni güneş hücrelerinin ısı ve neme maruz kaldığında hızla 'bozulmasının' (degrade) büyük bir sorun olduğu anlatılır.",
    ],
    [
      "Light signals travelling through the glass fibres are ---- by impurities, so the glass must be extremely pure.",
      ["weakened", "strengthened", "created", "coloured", "repeated"],
      "Cam liflerden geçen ışık sinyallerinin safsızlıklar nedeniyle 'zayıfladığı' (weakened) ve bu yüzden camın çok saf olması gerektiği anlatılır.",
    ],
    [
      "Many scientists were reluctant to ---- the idea that light was a form of electromagnetic wave.",
      ["take up", "set off", "go over", "run into", "put on"],
      "Pek çok bilim insanının ışığın bir elektromanyetik dalga türü olduğu fikrini 'benimsemekte' (take up) isteksiz olduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first bright blue LED ---- in Japan in the early 1990s.",
      ["was produced", "produced", "has produced", "was producing", "had produced"],
      "LED üretilen bir üründür ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was produced'.",
    ],
    [
      "If a cheap method of extracting aluminium had not been discovered, the metal ---- a luxury for much longer.",
      ["would have remained", "would remain", "will remain", "remained", "had remained"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have + V3' ister.",
    ],
    [
      "By the time Hertz detected radio waves in 1887, Maxwell ---- their existence more than twenty years earlier.",
      ["had predicted", "has predicted", "predicts", "will predict", "was predicted"],
      "Hertz'in dalgaları saptamasından (geçmiş) önce tamamlanmış eylem: Past Perfect 'had predicted'.",
    ],
    [
      "Carothers, ---- team invented nylon in 1935, did not live to see its commercial success.",
      ["whose", "who", "which", "whom", "where"],
      "Ekip Carothers'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only when the glass had been purified ---- transmit light over long distances.",
      ["could the fibres", "the fibres could", "could fibres the", "the fibres can", "can the fibres"],
      "'Only when' ile başlayan cümlede ana cümle devrik olur ve geçmiş zaman uyumu gerekir: 'could the fibres'.",
    ],
    [
      "The new process was so efficient ---- the price of steel fell dramatically.",
      ["that", "which", "as", "such", "than"],
      "'so efficient that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- perovskite cells are cheap to make, they are not yet durable enough for widespread use.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Ucuz üretilmeleri ile henüz yeterince dayanıklı olmamaları zıttır: 'Although'.",
    ],
    [
      "Engineers ---- task was to lay the first transatlantic fibre cable faced many technical challenges.",
      ["whose", "who", "which", "whom", "where"],
      "Görev mühendislere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Aluminium cutlery is said ---- for the most honoured guests at the French emperor's banquets.",
      ["to have been reserved", "to reserve", "reserving", "to be reserving", "to have reserved"],
      "Çatal bıçaklar ayrılan nesnelerdir ve olay geçmişte kalmıştır: 'be said to have been + V3'.",
    ],
    [
      "Nylon was strong ---- elastic, which made it ideal for stockings.",
      ["and", "but", "or", "unless", "so that"],
      "İki özellik birbirine eklenir: 'and'.",
    ],
    [
      "Steel ---- by the new process was used to build railways and bridges.",
      ["made", "making", "which made", "to make", "have made"],
      "Çelik yapılan bir malzemedir; edilgen anlamlı geçmiş ortaç 'made' gerekir.",
    ],
    [
      "The fibres are coated with a layer of plastic ---- they are protected from damage.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "People treated the first aluminium objects as if they ---- precious jewels.",
      ["were", "are", "will be", "have", "be"],
      "'as if' ile gerçek dışı bir benzetme yapılır: 'were'.",
    ],
    [
      "The purer the glass is, ---- light can travel through it.",
      ["the further", "further", "the furthest", "more far", "the more far"],
      "'The purer …, the further …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Light-emitting diodes, or LEDs, produce light when an electric current passes through a semiconductor. Red LEDs were developed in the early 1960s and green ones soon afterwards, {1} for nearly thirty years no one was able to produce a bright blue LED. This was a serious obstacle, because blue light is needed, together with red and green, to create white light. Many large companies gave up, {2} the necessary material, gallium nitride, was extremely difficult to grow as high-quality crystals. In the 1980s and early 1990s, however, the Japanese researchers Isamu Akasaki and Hiroshi Amano at Nagoya University, and Shuji Nakamura, an engineer working for a small chemical company, made a series of breakthroughs {3} finally led to efficient blue LEDs. Nakamura's company had at first been reluctant to support his research, {4} he continued with determination. Today, white LEDs are used in homes, streets, screens and phones. They use far less electricity than traditional bulbs and last much longer, {5} has greatly reduced energy consumption around the world. In 2014, all three were honoured with the Nobel Prize in Physics.",
      blanks: [
        [
          "(21) ----",
          ["but", "because", "so", "unless", "since"],
          "Kırmızı ve yeşil LED'lerin geliştirilmesi ile mavi LED'in otuz yıl üretilememesi karşıtlıktır: 'but'.",
        ],
        [
          "(22) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Şirketlerin vazgeçmesinin nedeni malzemenin kaliteli kristal olarak üretilmesinin çok zor olmasıdır: 'because'.",
        ],
        [
          "(23) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'a series of breakthroughs' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(24) ----",
          ["but", "so", "because", "unless", "or"],
          "Şirketin isteksizliği ile Nakamura'nın kararlılıkla devam etmesi karşıtlıktır: 'but'.",
        ],
        [
          "(25) ----",
          ["which", "who", "that", "what", "where"],
          "Boşluk virgülden sonra önceki cümlenin tamamını niteler: 'which'.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, steel was a valuable material used mainly for tools, knives and weapons, {1} it was expensive and slow to produce. Most iron objects were made of cast iron, which was brittle, or wrought iron, which was softer and required a great deal of labour. In 1856, the English inventor Henry Bessemer announced a new method for producing steel quickly and cheaply. He found that blowing air through molten iron caused the carbon and other impurities in it to burn off, {2} the heat produced by this reaction kept the metal liquid without the need for additional fuel. The process was carried out in a large container called a converter and could turn several tonnes of iron into steel in about twenty minutes. At first, the steel produced was of poor quality, {3} the iron used contained phosphorus, which made it brittle. This problem was later solved by adding substances to the lining of the converter {4} absorbed the phosphorus. {5} these improvements, the price of steel fell dramatically, and it soon replaced iron in railways, ships, bridges and buildings.",
      blanks: [
        [
          "(26) ----",
          ["since", "unless", "although", "so that", "until"],
          "Çeliğin esas olarak alet ve silahlarda kullanılmasının nedeni pahalı ve yavaş üretilmesidir: 'since'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "Safsızlıkların yanması ve açığa çıkan ısının metali sıvı tutması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Çeliğin kalitesiz olmasının nedeni demirin fosfor içermesidir: 'because'.",
        ],
        [
          "(29) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'substances' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(30) ----",
          ["Thanks to", "In spite of", "Instead of", "Apart from", "Regardless of"],
          "Fiyatın düşmesi bu iyileştirmeler 'sayesinde' olmuştur: 'Thanks to'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Maxwell's equations predicted the existence of electromagnetic waves, ----.",
      [
        "no one had detected them experimentally at the time",
        "he was a Scottish physicist who worked in Cambridge",
        "his work brought together electricity and magnetism",
        "light was shown to be a form of these waves",
        "the equations were published in the 1860s",
      ],
      "'Although' zıtlık ister: Maxwell'in denklemleri dalgaların varlığını öngörse de o dönemde kimse onları deneysel olarak saptamamıştı.",
    ],
    [
      "If perovskite cells were as durable as silicon cells, ----.",
      [
        "they could greatly reduce the cost of solar power",
        "the material had been discovered in Russia",
        "most panels will be made of glass",
        "the cells absorbed sunlight",
        "solar energy is renewable",
      ],
      "Type 2 koşul cümlesi ana cümlede 'could + yalın fiil' ister: güneş enerjisinin maliyetini büyük ölçüde düşürebilirlerdi.",
    ],
    [
      "Nakamura continued his research on blue LEDs ----.",
      [
        "even though his company had asked him to stop",
        "because he had already given up hope",
        "so that the project would fail",
        "unless he was paid much more",
        "although nobody had ever tried before",
      ],
      "Nakamura'nın şirketi durmasını istemesine rağmen araştırmayı sürdürdüğü anlatılır: 'even though'.",
    ],
    [
      "Since the first transatlantic fibre-optic cable was laid in 1988, ----.",
      [
        "most international communication has come to depend on such cables",
        "telephone calls had been carried by copper wires",
        "satellites would have become more important",
        "the cables will be replaced by radio",
        "few people used the internet",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has come to depend'.",
    ],
    [
      "Unless aluminium is protected by a thin layer of oxide, ----.",
      [
        "it can react with air and water",
        "the metal would have been cheaper",
        "most cans had been made of steel",
        "the oxide will become thicker",
        "the metal was very light",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: hava ve suyla tepkimeye girebilir.",
    ],
    [
      "Demand for nylon stockings was so great when they first went on sale ----.",
      [
        "that millions of pairs were sold in a single day",
        "because they were cheaper than silk stockings",
        "although many women preferred to wear silk",
        "unless the shops ran out of stock",
        "while nylon was also used for parachutes",
      ],
      "'so great that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Engineers found that when light enters a glass fibre at a shallow angle, ----.",
      [
        "it is reflected along the inside of the fibre",
        "the cable would have been broken",
        "most signals had been lost",
        "the glass will melt",
        "the fibre was very thin",
      ],
      "'when' ile genel bir bulgu anlatılır: ışık cam life sığ bir açıyla girdiğinde lifin içinde yansıyarak ilerler.",
    ],
    [
      "So expensive was aluminium in the mid-nineteenth century ----.",
      [
        "that it was used to make jewellery and ornaments",
        "because it was extremely difficult to extract from its ore",
        "although it is now used to make drinks cans",
        "while gold and silver were also highly valued",
        "unless it was produced in large factories",
      ],
      "Devrik 'So expensive was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While silicon solar cells are made from rigid crystals, ----.",
      [
        "perovskite cells can be printed onto flexible surfaces",
        "sunlight contains energy in the form of photons",
        "solar panels are often placed on the roofs of houses",
        "the price of solar power has fallen in recent years",
        "many countries are investing in renewable energy",
      ],
      "'While' iki türü karşılaştırır: silikon hücreler sert kristallerden yapılırken perovskit hücreler esnek yüzeylere basılabilir.",
    ],
    [
      "Once Hertz had produced radio waves in his laboratory, ----.",
      [
        "other scientists began to explore their practical uses",
        "Maxwell will publish his equations",
        "the waves would have disappeared",
        "radio is used all over the world",
        "most physicists had rejected the idea",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: diğer bilim insanları dalgaların pratik kullanımlarını araştırmaya başladı.",
    ],
    [
      "No sooner had Bessemer announced his process ----.",
      [
        "than other manufacturers rushed to buy licences",
        "when the steel had been produced",
        "that the price of steel will fall",
        "before he had tested it",
        "so he became very famous",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "White LEDs use far less electricity than traditional bulbs and last much longer.",
      [
        "Beyaz LED'ler geleneksel ampullerden çok daha az elektrik kullanır ve çok daha uzun ömürlüdür.",
        "Beyaz LED'ler geleneksel ampullerden daha fazla elektrik kullanır ama daha uzun ömürlüdür.",
        "Geleneksel ampuller, beyaz LED'lerden daha az elektrik kullanır ve daha uzun dayanır.",
        "Beyaz LED'ler ve geleneksel ampuller aynı miktarda elektrik kullanır.",
        "Beyaz LED'ler çok az elektrik kullandıkları için kısa sürede bozulur.",
      ],
      "'use far less electricity than traditional bulbs' 'geleneksel ampullerden çok daha az elektrik kullanır', 'last much longer' 'çok daha uzun ömürlüdür' demektir.",
    ],
    [
      "The process could turn several tonnes of iron into steel in about twenty minutes.",
      [
        "Bu işlem, birkaç ton demiri yaklaşık yirmi dakikada çeliğe dönüştürebiliyordu.",
        "Bu işlem, birkaç ton çeliği yaklaşık yirmi dakikada demire dönüştürebiliyordu.",
        "Birkaç ton demirin çeliğe dönüşmesi yaklaşık yirmi gün sürüyordu.",
        "Bu işlem yalnızca birkaç kilogram demiri çeliğe dönüştürebiliyordu.",
        "Demiri çeliğe dönüştürmek için yirmi dakikadan fazla zaman gerekmiyordu, ancak işlem çok pahalıydı.",
      ],
      "'could turn several tonnes of iron into steel' 'birkaç ton demiri çeliğe dönüştürebiliyordu', 'in about twenty minutes' 'yaklaşık yirmi dakikada' demektir.",
    ],
    [
      "The new method made aluminium cheap enough to be used in everyday objects.",
      [
        "Yeni yöntem, alüminyumu gündelik eşyalarda kullanılabilecek kadar ucuz hâle getirdi.",
        "Yeni yöntem, alüminyumun gündelik eşyalarda kullanılmasını engelleyecek kadar pahalıydı.",
        "Gündelik eşyalar, alüminyumun fiyatının düşmesine neden oldu.",
        "Yeni yöntem, alüminyumu yalnızca lüks eşyalarda kullanılır hâle getirdi.",
        "Alüminyum, yeni yöntemden önce gündelik eşyalarda yaygın olarak kullanılıyordu.",
      ],
      "'made aluminium cheap enough' 'alüminyumu yeterince ucuz hâle getirdi', 'to be used in everyday objects' 'gündelik eşyalarda kullanılabilecek' demektir.",
    ],
    [
      "Perovskite cells can be made at low temperatures, which reduces production costs.",
      [
        "Perovskit hücreler düşük sıcaklıklarda üretilebilir, bu da üretim maliyetlerini düşürür.",
        "Perovskit hücreler yalnızca çok yüksek sıcaklıklarda üretilebilir, bu da maliyetleri artırır.",
        "Düşük üretim maliyetleri, perovskit hücrelerin sıcaklığını düşürür.",
        "Perovskit hücreler, düşük sıcaklıklarda çalışmadığı için pahalıdır.",
        "Üretim maliyetleri, perovskit hücrelerin hangi sıcaklıkta yapıldığından etkilenmez.",
      ],
      "'can be made at low temperatures' 'düşük sıcaklıklarda üretilebilir', 'which reduces production costs' 'bu da üretim maliyetlerini düşürür' demektir.",
    ],
    [
      "Nylon was the first entirely synthetic fibre to be produced on a large scale.",
      [
        "Naylon, büyük ölçekte üretilen ilk tamamen sentetik liftir.",
        "Naylon, doğal liflerden üretilen ilk sentetik malzemedir.",
        "Naylon, büyük ölçekte üretilemeyen son sentetik liftir.",
        "Büyük ölçekte üretilen ilk lif, doğal ipekti.",
        "Naylon, tamamen doğal olduğu için büyük ölçekte üretildi.",
      ],
      "'the first entirely synthetic fibre' 'ilk tamamen sentetik lif', 'to be produced on a large scale' 'büyük ölçekte üretilen' demektir.",
    ],
    [
      "A single fibre can carry far more information than a copper wire.",
      [
        "Tek bir lif, bir bakır telden çok daha fazla bilgi taşıyabilir.",
        "Tek bir bakır tel, bir liften çok daha fazla bilgi taşıyabilir.",
        "Lifler ve bakır teller aynı miktarda bilgi taşır.",
        "Tek bir lif, bakır tel olmadan hiçbir bilgi taşıyamaz.",
        "Bakır teller, liflerin taşıdığı bilgiyi korumak için kullanılır.",
      ],
      "'A single fibre can carry far more information' 'tek bir lif çok daha fazla bilgi taşıyabilir', 'than a copper wire' 'bir bakır telden' demektir.",
    ],
  ],
  trEn: [
    [
      "Mavi LED'in icadı, beyaz ışık üretmeyi mümkün kıldı.",
      [
        "The invention of the blue LED made it possible to produce white light.",
        "The invention of white light made it possible to produce the blue LED.",
        "The blue LED made it impossible to produce white light.",
        "White light was produced long before any LED was invented.",
        "The blue LED was invented to replace white light.",
      ],
      "'Mavi LED'in icadı' 'the invention of the blue LED', 'beyaz ışık üretmeyi mümkün kıldı' 'made it possible to produce white light' karşılığıdır.",
    ],
    [
      "Bessemer süreci, çeliğin fiyatını büyük ölçüde düşürdü.",
      [
        "The Bessemer process greatly reduced the price of steel.",
        "The Bessemer process greatly increased the price of steel.",
        "The price of steel made the Bessemer process too expensive.",
        "The Bessemer process had no effect on the price of steel.",
        "Steel became cheaper only after the Bessemer process was abandoned.",
      ],
      "'çeliğin fiyatını büyük ölçüde düşürdü' 'greatly reduced the price of steel' karşılığıdır.",
    ],
    [
      "Alüminyum hafif, güçlü ve paslanmaya karşı dayanıklıdır.",
      [
        "Aluminium is light, strong and resistant to corrosion.",
        "Aluminium is heavy, weak and easily corroded.",
        "Aluminium is strong because it is heavier than steel.",
        "Corrosion makes aluminium lighter and stronger.",
        "Aluminium cannot be used because it rusts quickly.",
      ],
      "'hafif, güçlü' 'light, strong', 'paslanmaya karşı dayanıklı' 'resistant to corrosion' karşılığıdır.",
    ],
    [
      "Perovskit güneş hücrelerinin verimliliği son on yılda hızla arttı.",
      [
        "The efficiency of perovskite solar cells has risen rapidly over the past decade.",
        "The efficiency of perovskite solar cells has fallen over the past decade.",
        "Perovskite solar cells were invented more than a century ago.",
        "The efficiency of solar cells has not changed for many decades.",
        "Perovskite solar cells are less efficient now than ten years ago.",
      ],
      "'son on yılda hızla arttı' 'has risen rapidly over the past decade' karşılığıdır.",
    ],
    [
      "Naylon, İkinci Dünya Savaşı sırasında paraşüt yapımında kullanıldı.",
      [
        "Nylon was used to make parachutes during the Second World War.",
        "Parachutes were used to make nylon during the Second World War.",
        "Nylon was banned during the Second World War.",
        "Nylon was invented after the Second World War ended.",
        "Parachutes were made only of silk during the Second World War.",
      ],
      "'paraşüt yapımında kullanıldı' 'was used to make parachutes', 'İkinci Dünya Savaşı sırasında' 'during the Second World War' karşılığıdır.",
    ],
    [
      "Fiber optik kablolar, bilgiyi ışık sinyalleri olarak taşır.",
      [
        "Fibre-optic cables carry information as light signals.",
        "Fibre-optic cables carry information as electric currents.",
        "Light signals are used to make fibre-optic cables.",
        "Fibre-optic cables cannot carry any information.",
        "Information is turned into sound before it enters fibre-optic cables.",
      ],
      "'bilgiyi ışık sinyalleri olarak taşır' 'carry information as light signals' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "No metal is more plentiful in the Earth's crust than aluminium, yet for most of human history it was unknown, because it is always found combined with other elements and is very difficult to separate. It was first isolated in small quantities in the 1820s, and for several decades it was more valuable than gold. The French emperor Napoleon III is said to have served his most important guests with aluminium cutlery, while less important guests had to use gold. In 1886, two young scientists working independently, Charles Martin Hall in the United States and Paul Héroult in France, discovered the same new method. They dissolved aluminium oxide in a molten mineral called cryolite and passed a strong electric current through the mixture, which caused pure aluminium to collect at the bottom. The process, which still bears their names, made it possible to produce the metal cheaply and in large quantities. Within a few years, the price had fallen dramatically. Today, aluminium is used in aircraft, cars, buildings, cans and foil. However, the process uses enormous amounts of electricity, which is why recycling aluminium, which requires only about five per cent of the energy, is so important.",
      questions: [
        [
          "According to the passage, aluminium was unknown for most of history because ----.",
          [
            "it is always combined with other substances in nature",
            "it is very rare in the Earth's crust",
            "it was more valuable than gold",
            "it can only be found in France",
            "it melts at a very low temperature",
          ],
          "Metne göre alüminyum her zaman başka elementlerle birleşik bulunur ve ayrılması çok zordur.",
        ],
        [
          "The story about Napoleon III's cutlery is used to show ----.",
          [
            "how highly aluminium was valued at one time",
            "that gold was no longer used in France",
            "how aluminium was first extracted",
            "why Napoleon III preferred gold",
            "that aluminium was dangerous to eat with",
          ],
          "En önemli konuklara alüminyum çatal bıçak sunulması, metalin bir dönem ne kadar değerli görüldüğünü gösterir.",
        ],
        [
          "It can be inferred from the passage that recycling aluminium ----.",
          [
            "saves a great deal of energy compared with producing new metal",
            "is more expensive than producing new aluminium",
            "was invented by Hall and Héroult",
            "requires large amounts of cryolite",
            "is no longer necessary",
          ],
          "Geri dönüşümün enerjinin yalnızca yaklaşık yüzde beşini gerektirmesi, yeni metal üretimine göre büyük enerji tasarrufu sağladığını gösterir.",
        ],
      ],
    },
    {
      text:
        "Most solar panels in use today are made from silicon, a material that is reliable and long-lasting but requires a great deal of energy to purify and process. Since 2009, researchers have become increasingly excited about a different group of materials called perovskites, named after a mineral discovered in the Ural Mountains in the nineteenth century. Perovskites have a particular crystal structure that is very good at absorbing light, and they can be made from cheap ingredients at relatively low temperatures. They can even be printed onto thin, flexible surfaces like ink. The efficiency of perovskite cells, meaning the proportion of sunlight they turn into electricity, has risen faster than that of any other solar technology, from under four per cent in the first experiments to more than twenty-five per cent, similar to the best silicon cells. Some researchers are also combining perovskite and silicon layers in a single cell to capture a wider range of light. However, perovskite cells still face a major obstacle: they tend to break down when exposed to moisture, heat and light, and many of them contain small amounts of lead. Until these problems are solved, they are unlikely to replace silicon on a large scale.",
      questions: [
        [
          "According to the passage, one disadvantage of silicon is that ----.",
          [
            "its production requires a lot of energy",
            "it breaks down quickly in sunlight",
            "it contains large amounts of lead",
            "it cannot absorb light efficiently",
            "it was discovered only recently",
          ],
          "Metne göre silikon güvenilir ve uzun ömürlüdür ama arıtılması ve işlenmesi çok fazla enerji gerektirir.",
        ],
        [
          "The writer mentions that perovskites can be printed like ink in order to show ----.",
          [
            "how easily and cheaply they might be produced",
            "why they contain lead",
            "how they were first discovered",
            "that they are not suitable for solar panels",
            "why silicon is more reliable",
          ],
          "Mürekkep gibi esnek yüzeylere basılabilmeleri, ne kadar kolay ve ucuz üretilebileceklerini gösterir.",
        ],
        [
          "It can be understood from the passage that the main barrier to the use of perovskite cells is ----.",
          [
            "their lack of stability",
            "their low efficiency",
            "the high cost of their ingredients",
            "the difficulty of printing them",
            "the shortage of silicon",
          ],
          "Nem, ısı ve ışıkla bozulma eğilimleri, perovskit hücrelerin yaygın kullanımının önündeki başlıca engelin dayanıksızlık olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1928, the American chemical company DuPont hired a young chemist named Wallace Carothers to lead a research programme on polymers, very large molecules made up of repeating units. At the time, many scientists doubted that such molecules really existed. Carothers and his team showed that they did, and they produced a series of new synthetic materials. In 1935, they created a polymer that could be drawn out into long, strong and elastic fibres. Named nylon, it was the first entirely synthetic fibre to be produced commercially. The company first used it in toothbrush bristles, and in 1940 it launched nylon stockings, which were an immediate success: millions of pairs were sold within days. During the Second World War, however, nylon was needed for parachutes, ropes and tents, and stockings almost disappeared from the shops. When they returned after the war, long queues formed outside stores, and in some cities there were even riots. Carothers himself did not see any of this success. He suffered from depression and died in 1937, shortly after his team's discovery had been patented. Nylon opened the way for many other synthetic fibres, which are now used in clothing, carpets and industrial products.",
      questions: [
        [
          "According to the passage, when Carothers began his research, ----.",
          [
            "the existence of polymer molecules was still doubted",
            "nylon was already being used in stockings",
            "DuPont had stopped researching new materials",
            "synthetic fibres were common in clothing",
            "polymers were used to make parachutes",
          ],
          "Metne göre o dönemde pek çok bilim insanı bu tür moleküllerin gerçekten var olduğundan şüphe ediyordu.",
        ],
        [
          "The writer mentions queues and riots after the war in order to show ----.",
          [
            "how much demand there was for nylon stockings",
            "that nylon was dangerous",
            "why parachutes were made of nylon",
            "how the war ended",
            "that Carothers was very famous",
          ],
          "Savaştan sonra mağazaların önünde uzun kuyruklar oluşması ve isyanlar çıkması, naylon çoraplara olan talebin büyüklüğünü gösterir.",
        ],
        [
          "It can be understood from the passage that Carothers ----.",
          [
            "died before nylon became a commercial success",
            "invented the nylon stocking himself",
            "left DuPont to work on parachutes",
            "lived to see the riots after the war",
            "doubted that polymers existed",
          ],
          "Carothers'ın 1937'de ölmesi ve bu başarıların hiçbirini görmemesi, naylonun ticari başarısından önce öldüğünü gösterir.",
        ],
      ],
    },
    {
      text:
        "In the 1860s, the Scottish physicist James Clerk Maxwell published a set of equations that brought together electricity and magnetism into a single theory. One remarkable consequence of his equations was that changing electric and magnetic fields should produce waves that travel through space at a particular speed. When Maxwell calculated this speed, he found that it was almost exactly the measured speed of light, and he concluded that light itself was an electromagnetic wave. His theory also suggested that there could be other electromagnetic waves, with wavelengths much longer or shorter than those of visible light. However, Maxwell died in 1879 without seeing any experimental proof. In 1887, the German physicist Heinrich Hertz built a device in which an electric spark jumped across a small gap, and he showed that it produced invisible waves that could cause a spark in a separate loop of wire on the other side of the room. He measured their speed and confirmed that they behaved exactly as Maxwell had predicted. Hertz is reported to have said that his discovery had no practical use. Within a few years, however, inventors were using such waves to send messages without wires, laying the foundations for radio, television and mobile phones.",
      questions: [
        [
          "According to the passage, Maxwell concluded that light was an electromagnetic wave because ----.",
          [
            "the calculated speed of the waves matched the speed of light",
            "Hertz had already proved it experimentally",
            "light could cause sparks in a wire",
            "he had measured the wavelength of light",
            "his equations were based on light",
          ],
          "Metne göre Maxwell dalgaların hızını hesapladığında bunun ışığın ölçülen hızına neredeyse tam olarak eşit olduğunu buldu.",
        ],
        [
          "Hertz's experiment showed that ----.",
          [
            "invisible waves predicted by Maxwell really existed",
            "light could not travel through space",
            "Maxwell's equations were incorrect",
            "sparks could not cross a gap",
            "radio waves were the same as sound waves",
          ],
          "Metinde Hertz'in görünmez dalgalar ürettiğini ve bunların tam olarak Maxwell'in öngördüğü gibi davrandığını doğruladığı belirtilir.",
        ],
        [
          "The writer mentions Hertz's remark about practical use in order to ----.",
          [
            "contrast it with the important applications that followed",
            "show that his experiment had failed",
            "explain why he stopped his research",
            "suggest that radio waves are dangerous",
            "prove that Maxwell had been wrong",
          ],
          "Hertz'in buluşunun pratik bir yararı olmadığını söylemesi, kısa süre sonra telsiz iletişimin temellerinin atılmasıyla karşıtlık oluşturur.",
        ],
      ],
    },
    {
      text:
        "Optical fibres are thin strands of extremely pure glass, about the width of a human hair, that carry information in the form of pulses of light. Light travels along a fibre by bouncing off its inner walls, a process known as total internal reflection, so it can follow the fibre around curves. The idea of guiding light in this way was demonstrated in the nineteenth century, but early glass fibres lost most of their light within a few metres, making them useless for communication. In 1966, the Chinese-born engineer Charles Kao, working in Britain, published a paper arguing that the loss was caused not by the glass itself but by impurities in it, and that if these could be removed, fibres could carry signals over many kilometres. Many experts were sceptical, but in 1970 researchers at an American glass company produced a fibre that met Kao's target. Optical fibres have many advantages over copper wires: they can carry far more information, are not affected by electrical interference and are much lighter. The first transatlantic fibre-optic cable was laid in 1988, and today a vast network of undersea cables carries most of the world's internet traffic. Kao was awarded the Nobel Prize in Physics in 2009.",
      questions: [
        [
          "According to the passage, light can follow an optical fibre around curves because ----.",
          [
            "it is reflected repeatedly off the inside of the fibre",
            "the fibre is made of copper",
            "it travels faster in curved glass",
            "the fibre is as thick as a cable",
            "it is converted into electricity",
          ],
          "Metne göre ışık, tam iç yansıma denen süreçle lifin iç duvarlarından sekerek ilerler.",
        ],
        [
          "Kao's main contribution was to show that ----.",
          [
            "impurities, rather than glass itself, caused the loss of light",
            "copper wires were better than glass fibres",
            "light could not be guided through glass",
            "fibres should be as thick as possible",
            "undersea cables were too expensive",
          ],
          "Metinde Kao'nun ışık kaybının camın kendisinden değil içindeki safsızlıklardan kaynaklandığını ileri sürdüğü belirtilir.",
        ],
        [
          "It can be understood from the passage that, compared with copper wires, optical fibres ----.",
          [
            "carry more data and are less affected by interference",
            "are heavier and more expensive",
            "lose more of their signal",
            "can only be used on land",
            "were invented much later than the internet",
          ],
          "Metinde liflerin çok daha fazla bilgi taşıdığı, elektriksel parazitten etkilenmediği ve daha hafif olduğu belirtilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Nitinol is an alloy of nickel and titanium with an unusual property. ---- Surgeons use it, for example, in small tubes that are inserted into narrow arteries and then expand to hold them open.",
      [
        "If it is bent out of shape, it returns to its original form when it is heated.",
        "Nickel is a silvery metal that is often used in coins and batteries.",
        "Arteries carry blood away from the heart to the rest of the body.",
        "The alloy was developed by researchers working for the United States Navy.",
        "Many metals expand slightly when they are warmed and contract when cooled.",
      ],
      "Boşluktan önce alaşımın alışılmadık bir özelliği olduğu, sonra damarda genişleyen tüplerde kullanıldığı söylenir; boşluğa bu özelliği, yani bükülse bile ısıtılınca eski biçimine döndüğünü açıklayan cümle gelmelidir.",
    ],
    [
      "Aerogels are among the lightest solid materials ever made. ---- Because the air trapped inside them slows the movement of heat, they are excellent insulators.",
      [
        "They consist of more than ninety per cent air held in a fine network of solid material.",
        "Most building materials, such as brick and concrete, are very heavy.",
        "Space agencies often test new materials on board satellites.",
        "Heat can travel by conduction, convection and radiation.",
        "Some winter jackets are filled with feathers to keep people warm.",
      ],
      "Boşluktan sonra 'the air trapped inside them' (içlerinde hapsolan hava) belirli bir şey olarak anılır; boşluğa aerojellerin yüzde doksanın üzerinde havadan oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Bakelite, developed in 1907, was the first plastic made entirely from synthetic materials. ---- As a result, it was widely used for radios, telephones and electrical fittings.",
      [
        "It did not conduct electricity and could withstand heat.",
        "Plastics are made from long chains of molecules called polymers.",
        "Many plastic objects are now thrown away after a single use.",
        "Early radio sets were often housed in wooden cabinets.",
        "Its inventor had earlier made a fortune from photographic paper.",
      ],
      "Boşluktan sonra 'As a result' ile radyo, telefon ve elektrik parçalarında kullanıldığı söylenir; boşluğa elektriği iletmediğini ve ısıya dayanıklı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Borosilicate glass contains a substance called boron oxide. ---- For this reason, it is used to make laboratory equipment and ovenproof dishes.",
      [
        "This makes it much less likely to crack when it is heated or cooled suddenly.",
        "Glass is usually transparent, which allows light to pass through it.",
        "Many people prefer to cook with metal pans rather than glass dishes.",
        "Laboratories use a wide range of chemicals in their experiments.",
        "Ovens can reach temperatures of more than two hundred degrees.",
      ],
      "Boşluktan sonra 'For this reason' ile laboratuvar ekipmanı ve fırına dayanıklı kaplarda kullanıldığı söylenir; boşluğa bor oksidin camı ani ısı değişimlerinde çatlamaya karşı dayanıklı kıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Titanium is as strong as some types of steel but much lighter. ---- These properties make it valuable for aircraft, artificial joints and spacecraft.",
      [
        "It is also highly resistant to corrosion, even in seawater.",
        "Titanium was named after the Titans of Greek mythology.",
        "Aircraft have become much larger since the 1960s.",
        "Many metals are mined in Australia and South America.",
        "Steel is made by adding small amounts of carbon to iron.",
      ],
      "Boşluktan sonra 'These properties' (bu özellikler) ile uçak, yapay eklem ve uzay araçlarında değerli olduğu söylenir; boşluğa ek bir özelliği, yani deniz suyunda bile korozyona dayanıklılığını söyleyen cümle gelmelidir.",
    ],
    [
      "Tungsten has the highest melting point of any metal. ---- This is why it was used for many decades to make the thin filaments inside light bulbs.",
      [
        "It can remain solid at temperatures above three thousand degrees.",
        "Light bulbs are now being replaced by LEDs in many countries.",
        "Many metals become brittle at very low temperatures.",
        "Tungsten is mined mainly in China.",
        "Some metals are soft enough to be cut with a knife.",
      ],
      "Boşluktan sonra 'This is why' ile ampul flamanlarında kullanıldığı söylenir; boşluğa üç bin derecenin üzerinde katı kalabildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Copper is one of the best conductors of electricity.",
        "For this reason, it is widely used in electrical wiring.",
        "Electricians usually train for several years before they qualify.",
        "It is also used in water pipes because it does not rust.",
        "Many coins contain copper mixed with other metals.",
      ],
      odd: 2,
      why: "Parça bakırın kullanım alanlarını anlatır. Elektrikçilerin meslek sahibi olmadan önce yıllarca eğitim aldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ceramics are materials made by heating clay and other minerals to high temperatures.",
        "Pottery is one of the oldest crafts in the world.",
        "Modern advanced ceramics can withstand extreme heat.",
        "They are used in engines, spacecraft and cutting tools.",
        "Some are even used in medical implants because the body tolerates them well.",
      ],
      odd: 1,
      why: "Parça modern ileri seramiklerin özelliklerini ve kullanımlarını anlatır. Çömlekçiliğin en eski zanaatlardan biri olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Rust forms when iron reacts with oxygen and water.",
        "It weakens the metal and can cause structures to fail.",
        "One common way of protecting iron is to coat it with zinc.",
        "The zinc reacts first, preventing the iron underneath from rusting.",
        "Zinc is also an important mineral in the human diet.",
      ],
      odd: 4,
      why: "Parça pasın oluşumunu ve çinkoyla korumayı anlatır. Çinkonun insan beslenmesinde önemli bir mineral olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Asphalt is a mixture of stones, sand and a sticky black substance called bitumen.",
        "It is the most common material used for road surfaces.",
        "When it is heated, it becomes soft and can be spread easily.",
        "Many cities suffer from serious traffic congestion.",
        "As it cools, it hardens to form a smooth, durable surface.",
      ],
      odd: 3,
      why: "Parça asfaltın yapısını ve kullanımını anlatır. Pek çok kentin ciddi trafik sıkışıklığı yaşadığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Natural rubber comes from the sap of the rubber tree.",
        "In its raw form, it becomes sticky in hot weather and brittle in cold weather.",
        "Brazil also exports large quantities of coffee and sugar.",
        "In 1839, a process was discovered that made rubber much more durable by heating it with sulphur.",
        "This allowed rubber to be used for tyres, shoes and many other products.",
      ],
      odd: 2,
      why: "Parça doğal kauçuğun özelliklerini ve dayanıklı hâle getirilmesini anlatır. Brezilya'nın Güney Amerika'nın en büyük ülkesi olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The ancient Romans built structures from a type of concrete that has lasted for two thousand years.",
        "Their concrete contained volcanic ash mixed with lime.",
        "Scientists have found that seawater causes new minerals to grow inside it, making it stronger.",
        "Rome was the capital of a vast empire.",
        "Researchers hope to use this knowledge to design more durable modern concrete.",
      ],
      odd: 3,
      why: "Parça Roma betonunun dayanıklılığını anlatır. Roma'nın büyük bir imparatorluğun başkenti olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
