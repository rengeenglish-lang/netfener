import type { YokdilDeneme } from "./types";

export const FEN_67: YokdilDeneme = {
  no: 67,
  field: "fen",
  vocab: [
    [
      "When meat is ---- in a hot pan, hundreds of new flavour compounds are produced on its surface.",
      ["browned", "frozen", "soaked", "sliced", "weighed"],
      "Et sıcak bir tavada 'kızartılıp kahverengileştiğinde' (browned) yüzeyinde yüzlerce yeni tat bileşiği oluştuğu anlatılır.",
    ],
    [
      "The physicist complained that scientists knew more about other planets than about what ---- inside a soufflé.",
      ["happens", "belongs", "remains", "returns", "appears"],
      "Fizikçinin bilim insanlarının bir sufle içinde ne 'olduğundan' (happens) çok diğer gezegenler hakkında bilgi sahibi olduğundan yakındığı anlatılır.",
    ],
    [
      "If chocolate is not cooled and reheated carefully, its fat may form the wrong kind of ----.",
      ["crystals", "bubbles", "colours", "seeds", "layers of sugar"],
      "Çikolata dikkatle soğutulup yeniden ısıtılmazsa yağının yanlış türde 'kristaller' (crystals) oluşturabileceği anlatılır.",
    ],
    [
      "As the kernel is heated, the water inside it turns to steam and the pressure ---- until the hull bursts.",
      ["builds up", "falls", "disappears", "escapes", "freezes"],
      "Tane ısıtıldıkça içindeki suyun buhara dönüştüğü ve kabuk patlayana dek basıncın 'arttığı' (builds up) anlatılır.",
    ],
    [
      "Potatoes treated in this way can be ---- for several years without spoiling.",
      ["stored", "grown", "cooked", "eaten", "planted"],
      "Bu biçimde işlenen patateslerin bozulmadan birkaç yıl 'saklanabildiği' (stored) anlatılır.",
    ],
    [
      "Because his wife could not eat eggs, the chemist decided to ---- a custard that did not need them.",
      ["come up with", "give up", "look after", "run out of", "take after"],
      "Kimyacının eşi yumurta yiyemediği için yumurta gerektirmeyen bir muhallebi 'bulmaya' (come up with) karar verdiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time food scientists became interested in the reaction, its discoverer ---- for many years.",
      ["had been dead", "is dead", "has been dead", "will be dead", "dies"],
      "Geçmişteki bir andan önce süregelen durum: 'had been dead'.",
    ],
    [
      "If the chocolate had been tempered properly, white streaks ---- on its surface.",
      ["would not have appeared", "will not appear", "do not appear", "had not appeared", "would not appear"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would not have appeared'.",
    ],
    [
      "The popping of the kernels ---- with a high-speed camera.",
      ["was filmed", "filmed", "has filmed", "films", "is filming"],
      "Patlama filme alınmıştır; edilgen geçmiş zaman: 'was filmed'.",
    ],
    [
      "---- the physicist spent his career studying extremely low temperatures, he was also passionate about cooking.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Kariyerini çok düşük sıcaklıkları incelemekle geçirmesi ile yemeğe tutkulu olması zıttır: 'Although'.",
    ],
    [
      "The chemist, ---- wife was allergic to eggs, invented an egg-free custard.",
      ["whose", "who", "which", "whom", "where"],
      "Kimyacının eşi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the potatoes had been frozen and dried several times ---- they ready for storage.",
      ["were", "had", "did", "have", "was"],
      "'Only after' ile devrik yapı, çoğul özne için geçmiş zaman: 'were'.",
    ],
    [
      "The farmers live high in the Andes, ---- the nights are cold and the days are sunny.",
      ["where", "which", "when", "whose", "that"],
      "'high in the Andes' yer bildirir; geceler orada soğuktur: 'where'.",
    ],
    [
      "The longer the egg whites are whisked, ---- the foam becomes, up to a point.",
      ["the stiffer", "the stiffest", "stiffer", "stiffest", "so stiff"],
      "'The longer ..., the stiffer ...' paralel yapısı: 'the stiffer'.",
    ],
    [
      "Experts recommend that bread ---- in the freezer rather than the fridge.",
      ["be kept", "is kept", "was kept", "to be kept", "being kept"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be kept'.",
    ],
    [
      "The reaction is thought ---- the flavours of coffee, toast and roast meat.",
      ["to produce", "producing", "to be produced", "produced", "having produce"],
      "Genel geçer bir durum için yalın mastar: 'to produce'.",
    ],
    [
      "Cooks heat and cool the chocolate carefully ---- only the right crystals form.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Çikolatanın dikkatle ısıtılıp soğutulmasının amacı yalnızca doğru kristallerin oluşmasıdır: 'so that'.",
    ],
    [
      "The physicist had a meringue ---- in a vacuum chamber during his lecture.",
      ["made", "make", "making", "to make", "makes"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'made'.",
    ],
    [
      "Had the farmers not developed this method, they ---- to store their potatoes through the dry season.",
      ["might have struggled", "struggle", "will struggle", "had struggled", "are struggling"],
      "Devrik üçüncü tip koşul cümlesi: 'might have struggled'.",
    ],
    [
      "Neither the cooks nor the scientists ---- why copper bowls worked better until the 1980s.",
      ["knew", "knowing", "to know", "has known to", "know to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'knew'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1912, the French physician and chemist Louis-Camille Maillard was studying how proteins are formed in the body when he noticed something unexpected. When he heated a mixture of amino acids, the building blocks of proteins, together with certain sugars, the mixture gradually turned brown, {1} it gave off a range of new smells. He described the reaction in detail, {2} he suggested that it might be important in biology and even in food. For several decades, however, his work attracted little attention, {3} it was only after the Second World War that food scientists began to study it seriously, partly because armies wanted to understand why stored foods changed colour and flavour over time. It is now known that the Maillard reaction is responsible for many of the flavours and colours that people enjoy most, including those of bread crust, roasted coffee, chocolate, beer and grilled meat. It takes place slowly at room temperature, {4} it speeds up greatly at the high temperatures used in frying, baking and roasting, usually above about 140 degrees Celsius. Because water cannot be heated above 100 degrees under normal conditions, boiled foods rarely brown, {5} cooks who want a rich flavour often dry the surface of meat before placing it in a very hot pan.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Karışımın kahverengileşmesi ve yeni kokular yayması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Tepkimeyi ayrıntılı tanımlaması ve önemli olabileceğini öne sürmesi birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Çalışmanın ilgi görmemesi ve ancak savaştan sonra incelenmesi birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["but", "and", "so", "because", "unless"],
          "Oda sıcaklığında yavaş gerçekleşmesi ile yüksek sıcaklıkta hızlanması karşıttır: 'but'.",
        ],
        [
          "(25) ----",
          ["so", "but", "or", "unless", "although"],
          "Haşlanan yiyeceklerin nadiren kızarmasının sonucu aşçıların eti kurutup sıcak tavaya koymasıdır: 'so'.",
        ],
      ],
    },
    {
      text:
        "Nicholas Kurti, a Hungarian-born physicist at the University of Oxford, spent most of his career studying matter at temperatures close to absolute zero. He was also a keen cook, {1} he was frustrated that kitchens were full of traditions that had never been tested scientifically. In 1969, he gave a lecture in London called 'The Physicist in the Kitchen', in which he remarked that it was a sad reflection on our civilisation that we could measure the temperature in the atmosphere of Venus, {2} we did not know what went on inside our soufflés. During the lecture, he used a syringe to inject hot brandy into mince pies without damaging their pastry, {3} he made a meringue in a vacuum chamber, where the low pressure made the bubbles expand. In the 1980s, he met Hervé This, a young French chemist with similar interests, {4} in 1988 they invented the term 'molecular and physical gastronomy' to describe the scientific study of cooking. From 1992, they organised a series of meetings in Sicily that brought together scientists and professional chefs. Their ideas influenced a generation of chefs, who began to use laboratory equipment and techniques in their restaurants, {5} the scientific study of food preparation is now taught at universities in many countries.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "İyi bir aşçı olması ve geleneklerin test edilmemesinden hayal kırıklığına uğraması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["but", "and", "so", "because", "unless"],
          "Venüs'ün sıcaklığını ölçebilmemiz ile suflelerin içini bilmememiz karşıttır: 'but'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "Turtalara konyak enjekte etmesi ve beze yapması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Hervé This ile tanışması ve birlikte terim üretmeleri birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Şefleri etkilemesi ve konunun üniversitelerde öğretilmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Maillard described the reaction in 1912, ----.",
      [
        "it was largely ignored for several decades",
        "sugars are sweet",
        "France is famous for bread",
        "proteins are important",
        "he had been studying how proteins are formed in the human body",
      ],
      "'Although' zıtlık ister: Maillard tepkimeyi 1912'de tanımlasa da tepkime onlarca yıl büyük ölçüde göz ardı edildi.",
    ],
    [
      "If the meat had been boiled instead of fried, ----.",
      [
        "it would not have developed the same brown crust",
        "meat contains protein",
        "pans are hot",
        "water is wet",
        "the cook would have dried its surface with a cloth before placing it in the pan",
      ],
      "Üçüncü tip koşul: et kızartılmak yerine haşlansaydı aynı kahverengi kabuğu oluşturmazdı.",
    ],
    [
      "----, the chocolate becomes dull and develops white streaks.",
      [
        "When it is stored in a warm place for too long",
        "Although it is sweet",
        "Unless it is eaten",
        "Since cocoa grows in Africa",
        "While chocolate makers are cooling it to around 27 degrees",
      ],
      "Çikolata çok uzun süre sıcak bir yerde saklandığında matlaşır ve beyaz çizgiler oluşur.",
    ],
    [
      "The popcorn kernel jumps into the air ----.",
      [
        "because part of the expanding starch pushes against the pan",
        "although it is light",
        "unless it is salted",
        "so that people can catch it",
        "while the scientists were filming it at thousands of frames per second",
      ],
      "Patlamış mısır tanesi genişleyen nişastanın bir kısmı tavaya bastırdığı için havaya sıçrar.",
    ],
    [
      "Since the nights in the Andes are so cold, ----.",
      [
        "potatoes left outside freeze naturally",
        "the Andes are high",
        "potatoes grow underground",
        "the sun is bright",
        "the method was later adapted to preserve blood plasma during the war",
      ],
      "'Since' neden bildirir: And Dağları'nda geceler çok soğuk olduğundan dışarıda bırakılan patatesler doğal olarak donar.",
    ],
    [
      "Not only does a copper bowl make egg whites easier to whisk, ----.",
      [
        "but it also makes the foam more stable",
        "and copper is a metal",
        "since eggs are white",
        "so cooks buy them",
        "unless a small amount of egg yolk has been allowed to fall into the bowl",
      ],
      "'Not only ... but also' yapısı tamamlanır: bakır kâse yumurta akını çırpmayı yalnızca kolaylaştırmakla kalmaz, köpüğü daha dayanıklı da yapar.",
    ],
    [
      "Once the chemist had found a way to raise bread without yeast, ----.",
      [
        "his powder was also used by soldiers who could not bake bread in the usual way",
        "bread is made from flour",
        "yeast is a fungus",
        "soldiers march",
        "his wife had been unable to eat eggs or yeast for many years",
      ],
      "Kimyacı ekmeği mayasız kabartmanın bir yolunu bulunca tozu ekmeği alışılmış biçimde pişiremeyen askerlerce de kullanıldı.",
    ],
    [
      "Unless the egg whites are completely free of fat, ----.",
      [
        "they will not form a stable foam",
        "eggs are fragile",
        "whisks are metal",
        "bowls are round",
        "cooks would not have used copper bowls for hundreds of years",
      ],
      "'Unless' olumsuz koşul: yumurta akları yağdan tamamen arınmış olmadıkça dayanıklı bir köpük oluşturmaz.",
    ],
    [
      "The high-speed camera showed the kernel's behaviour so clearly ----.",
      [
        "that the researchers could explain where the popping sound came from",
        "although popcorn is popular",
        "because the kernel was small",
        "unless the pan was hot",
        "while cinemas were selling more popcorn than ever before",
      ],
      "Yüksek hızlı kamera tanenin davranışını o kadar açık gösterdi ki araştırmacılar patlama sesinin nereden geldiğini açıklayabildi.",
    ],
    [
      "Even though the physicist was an expert on extreme cold, ----.",
      [
        "he became famous for his interest in the science of cooking",
        "cold is unpleasant",
        "Oxford is old",
        "physics is difficult",
        "he gave a lecture in London in 1969 called 'The Physicist in the Kitchen'",
      ],
      "'Even though' zıtlık ister: fizikçi aşırı soğuk konusunda uzman olsa da yemek biliminle ilgisiyle ünlendi.",
    ],
    [
      "As freeze-dried food is very light, ----.",
      [
        "it has been used on space missions",
        "food is necessary",
        "astronauts are trained",
        "water is heavy",
        "the method was developed from an ancient technique used in the mountains of South America",
      ],
      "Dondurularak kurutulmuş yiyecekler çok hafif olduğu için uzay görevlerinde kullanılmıştır.",
    ],
  ],
  enTr: [
    [
      "The mixture gradually turned brown and gave off new smells.",
      [
        "Karışım yavaş yavaş kahverengiye döndü ve yeni kokular yaydı.",
        "Karışım aniden beyaza döndü ve tüm kokusunu kaybetti.",
        "Yeni kokular yayan karışım, hiç renk değiştirmedi.",
        "Kokular karışımı kahverengiye çevirdi.",
        "Karışım hiç ısıtılmadı.",
      ],
      "'The mixture gradually turned brown' 'karışım yavaş yavaş kahverengiye döndü', 'and gave off new smells' 've yeni kokular yaydı' karşılığıdır.",
    ],
    [
      "He used a syringe to inject brandy into the pies.",
      [
        "Turtalara konyak enjekte etmek için bir şırınga kullandı.",
        "Şırıngaya turta enjekte etmek için konyak kullandı.",
        "Turtalara konyak koymaktan kaçınmak için şırınga kullanmadı.",
        "Şırınga turtaları konyağa koydu.",
        "Turtalara hiçbir şey eklemedi.",
      ],
      "'He used a syringe' 'bir şırınga kullandı', 'to inject brandy into the pies' 'turtalara konyak enjekte etmek için' karşılığıdır.",
    ],
    [
      "The chocolate is heated, cooled and then gently warmed again.",
      [
        "Çikolata ısıtılır, soğutulur ve ardından yeniden hafifçe ısıtılır.",
        "Çikolata dondurulur ve ardından hemen yenir.",
        "Isıtılan çikolata, hiçbir zaman soğutulmaz.",
        "Çikolata soğuğu ısıtır.",
        "Çikolata hiç ısıtılmaz.",
      ],
      "'The chocolate is heated, cooled' 'çikolata ısıtılır, soğutulur', 'and then gently warmed again' 've ardından yeniden hafifçe ısıtılır' karşılığıdır.",
    ],
    [
      "The popping sound is caused by the release of water vapour.",
      [
        "Patlama sesi, su buharının açığa çıkmasından kaynaklanır.",
        "Patlama sesi, kabuğun yavaşça erimesinden kaynaklanır.",
        "Su buharı, patlama sesini tamamen engeller.",
        "Ses su buharını açığa çıkarır.",
        "Mısır patlarken ses çıkmaz.",
      ],
      "'The popping sound is caused by' 'patlama sesi kaynaklanır', 'the release of water vapour' 'su buharının açığa çıkmasından' karşılığıdır.",
    ],
    [
      "The potatoes are trampled to squeeze out the water.",
      [
        "Patatesler suyunu sıkıp çıkarmak için ayakla çiğnenir.",
        "Patatesler su emmeleri için suya batırılır.",
        "Ayakla çiğnenen patatesler hemen pişirilir.",
        "Su patatesleri ayakla çiğner.",
        "Patatesler hiç işlenmez.",
      ],
      "'The potatoes are trampled' 'patatesler ayakla çiğnenir', 'to squeeze out the water' 'suyunu sıkıp çıkarmak için' karşılığıdır.",
    ],
    [
      "Even a tiny amount of yolk can stop the whites from foaming.",
      [
        "Çok küçük bir miktar yumurta sarısı bile akların köpürmesini engelleyebilir.",
        "Çok büyük bir miktar yumurta sarısı akların köpürmesine yardım eder.",
        "Yumurta sarısı akların köpürmesini hiçbir zaman etkilemez.",
        "Aklar sarının köpürmesini engeller.",
        "Yumurtanın sarısı yoktur.",
      ],
      "'Even a tiny amount of yolk' 'çok küçük bir miktar yumurta sarısı bile', 'can stop the whites from foaming' 'akların köpürmesini engelleyebilir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Haşlanan yiyecekler nadiren kahverengileşir.",
      [
        "Boiled foods rarely turn brown.",
        "Fried foods never turn brown.",
        "Boiled foods always turn dark brown.",
        "Brown foods are rarely boiled.",
        "Foods cannot be boiled.",
      ],
      "'Haşlanan yiyecekler' 'boiled foods', 'nadiren kahverengileşir' 'rarely turn brown' karşılığıdır.",
    ],
    [
      "Bilim insanları ile profesyonel şefleri bir araya getiren toplantılar düzenlediler.",
      [
        "They organised meetings that brought together scientists and professional chefs.",
        "Scientists and chefs organised meetings to keep them apart.",
        "They refused to let chefs attend meetings with scientists.",
        "The meetings organised scientists into chefs.",
        "No meetings were held.",
      ],
      "'Toplantılar düzenlediler' 'they organised meetings', 'bilim insanları ile profesyonel şefleri bir araya getiren' 'that brought together scientists and professional chefs' karşılığıdır.",
    ],
    [
      "Yanlış kristaller oluşursa çikolata yumuşak ve mat olur.",
      [
        "If the wrong crystals form, the chocolate becomes soft and dull.",
        "If the right crystals form, the chocolate becomes soft and dull.",
        "The chocolate becomes hard and shiny whatever crystals form.",
        "Soft chocolate forms the wrong crystals.",
        "Chocolate has no crystals.",
      ],
      "'Yanlış kristaller oluşursa' 'if the wrong crystals form', 'çikolata yumuşak ve mat olur' 'the chocolate becomes soft and dull' karşılığıdır.",
    ],
    [
      "Araştırmacılar taneyi saniyede binlerce kare çeken bir kamerayla filme aldı.",
      [
        "The researchers filmed the kernel with a camera that took thousands of frames per second.",
        "The kernel filmed the researchers with a camera that took a few frames per minute.",
        "The researchers photographed the kernel only once.",
        "The camera filmed thousands of researchers.",
        "No camera was used.",
      ],
      "'Araştırmacılar taneyi filme aldı' 'the researchers filmed the kernel', 'saniyede binlerce kare çeken bir kamerayla' 'with a camera that took thousands of frames per second' karşılığıdır.",
    ],
    [
      "Bu yöntemle kurutulan patatesler yıllarca dayanabilir.",
      [
        "Potatoes dried by this method can last for years.",
        "This method dries potatoes for only a few hours.",
        "Potatoes dried by this method spoil within days.",
        "Years can dry the potatoes.",
        "Potatoes cannot be dried.",
      ],
      "'Bu yöntemle kurutulan patatesler' 'potatoes dried by this method', 'yıllarca dayanabilir' 'can last for years' karşılığıdır.",
    ],
    [
      "Kimyacı, yumurta yerine mısır nişastası kullanan bir muhallebi tozu geliştirdi.",
      [
        "The chemist developed a custard powder that used cornflour instead of eggs.",
        "The chemist developed eggs that could be used instead of cornflour.",
        "The chemist developed a custard that contained twice as many eggs.",
        "Cornflour developed the chemist's eggs.",
        "The chemist never made custard.",
      ],
      "'Kimyacı bir muhallebi tozu geliştirdi' 'the chemist developed a custard powder', 'yumurta yerine mısır nişastası kullanan' 'that used cornflour instead of eggs' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Chocolate owes much of its appeal to cocoa butter, the natural fat of the cocoa bean. Cocoa butter is unusual because, as it cools and hardens, its molecules can pack together in six different crystal forms, each with a different melting point. Only one of them, known as form V, gives chocolate the qualities that people expect: a glossy surface, a clean snap when it is broken, and the ability to melt smoothly in the mouth, at a temperature just below that of the human body. If melted chocolate is simply left to cool, a mixture of different crystal forms usually develops, and the result is soft, dull and crumbly. To avoid this, chocolate makers use a process called tempering. The chocolate is first heated to about 45 degrees Celsius to melt all the existing crystals. It is then cooled, while being stirred, to about 27 degrees, so that crystals begin to form, and finally warmed gently to about 31 degrees, which melts the unwanted, less stable crystals while leaving those of form V. These then act as 'seeds', encouraging the rest of the fat to crystallise in the same way as the chocolate sets. Even properly tempered chocolate can change over time. If it is stored in a warm place, or repeatedly warmed and cooled, the fat can slowly change into form VI, a more stable form, and some of it may move to the surface, producing white or grey streaks known as 'bloom'. Bloomed chocolate is safe to eat, but many consumers mistakenly believe it has gone bad.",
      questions: [
        [
          "According to the passage, form V is important because it ----.",
          [
            "gives chocolate its gloss, snap and smooth melting",
            "has the lowest melting point",
            "makes chocolate soft",
            "is the form that develops when chocolate is stored in a warm place",
            "prevents chocolate from melting",
          ],
          "Metne göre parlak yüzey, temiz kırılma ve ağızda pürüzsüz erime gibi beklenen nitelikleri yalnızca V. biçim verir.",
        ],
        [
          "During tempering, the chocolate is warmed to about 31 degrees in order to ----.",
          [
            "melt the unwanted crystals while keeping form V",
            "melt all the crystals",
            "produce bloom",
            "make it cool faster",
            "add sugar",
          ],
          "Daha az kararlı istenmeyen kristalleri eritip V. biçimdekileri korumak için hafifçe ısıtılır.",
        ],
        [
          "It can be understood from the passage that bloom ----.",
          [
            "does not make chocolate unsafe",
            "is a sign of poisoning",
            "occurs only in untempered chocolate",
            "improves the taste",
            "is caused by form V",
          ],
          "Çiçeklenme olmuş çikolata yemek için güvenlidir, ancak pek çok tüketici bozulduğunu sanır.",
        ],
      ],
    },
    {
      text:
        "Popcorn is made from a special variety of maize whose kernels have a hard, waterproof outer shell surrounding a starchy interior that contains a small amount of water. In 2015, two French engineers, Emmanuel Virot and Alexandre Ponomarenko, used a camera that recorded thousands of frames per second to study exactly what happens when the kernels are heated. They found that as the temperature rises, the water inside turns to steam, and because the shell does not let it escape, the pressure builds up. At about 180 degrees Celsius, the shell suddenly cracks. The hot starch, which has become soft, then expands rapidly into a white foam as the steam bubbles grow, and cools to form the familiar crunchy shape. The researchers were particularly interested in the way the kernels jump. They found that, as the kernel bursts, a part of the expanding starch forms a kind of leg that pushes against the bottom of the pan, launching the kernel into the air, sometimes several centimetres high, rather like the jump of a gymnast. They also studied the familiar popping sound. Many people had assumed that it was caused by the cracking of the shell, but the recordings showed that the sound occurred slightly later, at the moment when the water vapour was suddenly released from the kernel, in a way similar to the opening of a bottle of champagne. Kernels that do not pop usually have shells that are damaged or too dry, so that the steam escapes before enough pressure can build up.",
      questions: [
        [
          "According to the passage, the shell cracks because ----.",
          [
            "steam pressure builds up inside it",
            "it is very thin",
            "the starch freezes",
            "the kernel is struck against the bottom of the pan",
            "it absorbs oil",
          ],
          "Metne göre içerideki su buhara dönüşür ve kabuk kaçmasına izin vermediği için basınç artar.",
        ],
        [
          "The writer compares the popping sound to the opening of a bottle of champagne because ----.",
          [
            "both are caused by the sudden release of gas",
            "both are loud",
            "both involve glass",
            "both happen at parties",
            "both involve cracking",
          ],
          "Ses, su buharının taneden aniden çıktığı anda oluşur; şampanya açılmasına benzer.",
        ],
        [
          "It can be understood from the passage that kernels fail to pop when ----.",
          [
            "steam escapes before enough pressure builds up",
            "they contain too much starch",
            "the pan is too clean",
            "they are filmed",
            "they jump too high",
          ],
          "Kabuğu hasarlı ya da çok kuru tanelerde buhar yeterli basınç oluşmadan kaçar.",
        ],
      ],
    },
    {
      text:
        "For hundreds of years, farmers living high in the Andes mountains of Peru and Bolivia have preserved potatoes using a method that takes advantage of the region's extreme climate. At altitudes of more than three and a half thousand metres, the nights during the dry season are bitterly cold, while the days are bright and sunny. Small potatoes are spread out on the ground and left outside overnight, where they freeze. During the day, they thaw in the sun. After several days of freezing and thawing, the farmers walk over the potatoes with bare feet to squeeze out the remaining water and remove the skins. The potatoes are then left out to freeze and dry further. The result, known as chuño, is a hard, light, dark-coloured product that keeps for years and is later soaked in water and cooked. The method works partly because, in the thin, dry air of the mountains, ice in the frozen potatoes can turn directly into water vapour without first melting, a process known as sublimation. Modern freeze-drying uses the same principle, but under controlled conditions: food is frozen and then placed in a vacuum chamber, where the low pressure causes the ice to sublime. The technique was developed on an industrial scale during the Second World War to preserve blood plasma and penicillin for soldiers, and it was later used to make instant coffee and food for astronauts. Because freeze-dried foods keep most of their original shape, flavour and nutrients, and weigh very little, they are also popular with mountaineers and hikers.",
      questions: [
        [
          "According to the passage, chuño is made by ----.",
          [
            "repeatedly freezing and thawing potatoes and removing their water",
            "boiling potatoes in salt water",
            "smoking potatoes over a fire",
            "storing potatoes in deep underground pits for several years before eating them",
            "grinding potatoes into flour",
          ],
          "Metne göre patatesler birkaç gün donup çözülür, suları ayakla sıkılarak çıkarılır ve yeniden kurutulur.",
        ],
        [
          "The writer explains that the Andean method and modern freeze-drying both depend on ----.",
          [
            "ice turning directly into vapour",
            "very high temperatures",
            "bacteria",
            "salt",
            "bright sunlight alone",
          ],
          "Her ikisi de buzun önce erimeden doğrudan su buharına dönüşmesine, yani süblimleşmeye dayanır.",
        ],
        [
          "It can be understood from the passage that freeze-dried foods are popular with hikers because they ----.",
          [
            "are light and keep their quality",
            "are cheap",
            "need no water",
            "are made in the Andes",
            "contain penicillin",
          ],
          "Biçimlerini, tatlarını ve besin değerlerini büyük ölçüde korur ve çok hafiftirler.",
        ],
      ],
    },
    {
      text:
        "When egg whites are whisked, they can be transformed from a clear liquid into a white foam several times their original volume, which is used to make meringues, mousses and soufflés. Egg white consists mostly of water, together with around ten per cent proteins. In their natural state, these proteins are folded into compact shapes. Whisking forces air into the liquid and stretches the proteins at the surfaces of the bubbles, causing them to unfold partly and link together to form a network that holds the bubbles in place. If the whites are whisked too long, however, the proteins bond too tightly and squeeze out water, and the foam becomes dry and lumpy. Cooks have long known that certain conditions affect the result. Even a tiny trace of fat, for example from egg yolk or a greasy bowl, can prevent a good foam from forming, because fat molecules interfere with the protein network. For centuries, French cooks insisted that egg whites should be whisked in copper bowls, which produced a more stable foam that was less likely to collapse. The reason was not understood until 1984, when the American food writer Harold McGee and two colleagues showed that tiny amounts of copper from the bowl combine with one of the egg proteins, making it more resistant to unfolding too far. A similar but weaker effect can be obtained by adding a small amount of acid, such as cream of tartar or lemon juice, which is why many recipes include it.",
      questions: [
        [
          "According to the passage, whisking produces a foam because ----.",
          [
            "proteins unfold and form a network around the air bubbles",
            "the water evaporates",
            "fat molecules join together",
            "copper from the bowl turns the egg white completely solid and white",
            "the proteins dissolve",
          ],
          "Metne göre çırpma proteinleri kısmen açar ve kabarcıkları yerinde tutan bir ağ oluştururlar.",
        ],
        [
          "Even a small amount of egg yolk can spoil the foam because ----.",
          [
            "its fat interferes with the protein network",
            "it is yellow",
            "it contains copper",
            "it adds acid",
            "it makes the whites too dry",
          ],
          "Yağ molekülleri protein ağını bozar.",
        ],
        [
          "It can be understood from the passage that the use of copper bowls ----.",
          [
            "was a tradition that science later explained",
            "has been proved useless",
            "was invented in 1984",
            "makes meringues dangerous",
            "is required by law in France",
          ],
          "Fransız aşçıların yüzyıllardır uyguladığı gelenek 1984'te bilimsel olarak açıklandı.",
        ],
      ],
    },
    {
      text:
        "In 1837, Alfred Bird, a chemist who ran a shop in Birmingham, England, faced a domestic problem. His wife, Elizabeth, was allergic to eggs and to yeast, which meant that she could not eat custard, a popular sweet sauce traditionally made with eggs and milk, or ordinary bread. Bird experimented with different ingredients and eventually found that he could make a custard-like sauce by mixing milk with cornflour, a fine powder made from maize, which thickened it when heated, together with colouring and flavouring. He served it to his wife, and, according to the family story, it was so popular with guests that he began to sell it. Bird's custard powder became one of Britain's best-known food products, and it is still sold today. Bird also turned his attention to bread. Normally, bread rises because yeast, a living fungus, produces bubbles of carbon dioxide gas as it feeds on sugars in the dough. In the 1840s, Bird developed a form of baking powder, a dry mixture of sodium bicarbonate and an acid, together with a starch to keep it dry. When water is added, the acid and the bicarbonate react to produce carbon dioxide, making the dough rise quickly without yeast. Baking powder was not entirely new, but Bird's version was reliable and convenient. During the Crimean War in the 1850s, it was used to make fresh bread for British soldiers, who often had no access to proper ovens or yeast. Today, baking powders based on the same principle are used in kitchens around the world to make cakes, scones and other baked goods.",
      questions: [
        [
          "According to the passage, Bird invented his custard powder because ----.",
          [
            "his wife could not eat eggs",
            "eggs were too expensive",
            "the army asked him to",
            "cornflour was becoming popular in shops in Birmingham",
            "milk was difficult to find",
          ],
          "Metne göre eşi yumurtaya ve mayaya alerjiydi; geleneksel muhallebiyi yiyemiyordu.",
        ],
        [
          "Baking powder makes dough rise because ----.",
          [
            "an acid reacts with bicarbonate to produce gas",
            "it contains yeast",
            "it adds sugar",
            "it absorbs water",
            "it heats the dough",
          ],
          "Su eklendiğinde asit ve bikarbonat tepkimeye girip karbondioksit üretir.",
        ],
        [
          "It can be understood from the passage that Bird's baking powder was useful to soldiers because ----.",
          [
            "it allowed bread to be made without yeast or proper ovens",
            "it was a medicine",
            "it kept them warm",
            "it was made of eggs",
            "it was very heavy",
          ],
          "Kırım Savaşı'nda düzgün fırın ya da mayaya erişimi olmayan askerler için taze ekmek yapmakta kullanıldı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1974, the French chef Georges Pralus was looking for a way to cook foie gras without losing so much of its fat. ---- The method, now called sous vide, from the French for 'under vacuum', is used in many restaurants.",
      [
        "He sealed it in plastic bags and cooked it slowly in water at a carefully controlled, low temperature.",
        "Foie gras is a traditional French food.",
        "Chefs often work long hours.",
        "The technique was later adopted by airline catering companies.",
        "Plastic is made from oil.",
      ],
      "Boşluk 'yöntem' ifadesine bağlanan, tekniği anlatan bir cümle gerektirir; boşluğa onu plastik torbalara kapatıp dikkatle denetlenen düşük sıcaklıktaki suda yavaşça pişirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2002, Swedish scientists reported that a potentially harmful substance called acrylamide forms in some foods when they are fried, baked or roasted at high temperatures. ---- Since then, food manufacturers have tried to change their methods to reduce the amount produced.",
      [
        "It was found in many common products, including crisps, chips, biscuits and bread.",
        "Sweden is in northern Europe.",
        "Frying is a popular way of cooking.",
        "Acrylamide is also used to make some plastics.",
        "Bread is eaten every day.",
      ],
      "Boşluk üreticilerin yöntemlerini değiştirmesine gerekçe olan bir cümle gerektirir; boşluğa maddenin cips, patates kızartması, bisküvi ve ekmek gibi pek çok yaygın üründe bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Bread goes stale mainly because the starch molecules in it slowly rearrange themselves into a more ordered, crystalline structure. ---- This is why bread kept in the freezer stays fresh for much longer.",
      [
        "This process happens fastest at temperatures just above freezing, such as those inside a fridge, and much more slowly when bread is frozen.",
        "Bread is made from flour, water and yeast.",
        "Many people prefer fresh bread.",
        "Warming stale bread in an oven can partly reverse the change.",
        "Fridges keep food cold.",
      ],
      "Boşluk dondurucunun neden daha iyi olduğunu açıklayan bir cümle gerektirir; boşluğa sürecin buzdolabındaki gibi donma noktasının hemen üstündeki sıcaklıklarda en hızlı, donmuş ekmekte ise çok daha yavaş gerçekleştiğini söyleyen cümle gelmelidir.",
    ],
    [
      "A soufflé rises in the oven because the air bubbles trapped in its whisked egg whites expand as they are heated. ---- As soon as it is taken out of the oven and begins to cool, however, the gas contracts, and the soufflé starts to sink.",
      [
        "At the same time, some of the water in the mixture turns to steam, which also pushes the mixture upwards.",
        "Soufflés are a famous French dish.",
        "Ovens can be electric or gas.",
        "For this reason, it should be served immediately.",
        "Eggs contain protein.",
      ],
      "Boşluk kabarmanın nedenlerini sürdüren ve 'ancak' karşıtlığına zemin hazırlayan bir cümle gerektirir; boşluğa aynı anda karışımdaki suyun bir kısmının buhara dönüşerek karışımı yukarı ittiğini söyleyen cümle gelmelidir.",
    ],
    [
      "An induction hob does not heat up itself in the way that an ordinary electric hob does. ---- For this reason, it only works with pans made of, or containing, magnetic metals such as iron.",
      [
        "Instead, a changing magnetic field beneath its surface produces electric currents directly in the base of the pan, which heats up.",
        "Electric hobs are common in modern kitchens.",
        "Iron is a common metal.",
        "Induction hobs are also very efficient.",
        "Many people enjoy cooking.",
      ],
      "Boşluk ocağın nasıl çalıştığını açıklayıp 'bu nedenle' ifadesine bağlanan bir cümle gerektirir; boşluğa yüzeyin altındaki değişen manyetik alanın doğrudan tavanın tabanında elektrik akımları oluşturup onu ısıttığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the nineteenth century, a famous German chemist claimed that searing meat quickly in a hot pan sealed in its juices. ---- The real benefit of searing is that it produces the brown crust and rich flavours of the Maillard reaction.",
      [
        "Experiments in the twentieth century showed, however, that seared meat loses as much moisture as meat that is not seared, or even more.",
        "Germany has a long history of science.",
        "Meat is an important source of protein.",
        "Many cooks still repeat the claim today.",
        "Pans are made of metal.",
      ],
      "Boşluk iddiayı çürüten ve 'asıl yararı' ifadesine bağlanan bir cümle gerektirir; boşluğa yirminci yüzyıldaki deneylerin kızartılan etin kızartılmayan kadar ya da daha fazla nem kaybettiğini gösterdiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Honey can remain edible for a very long time.",
        "It contains very little water, so bacteria cannot grow in it.",
        "It is also slightly acidic.",
        "Bees visit many flowers in a single day.",
        "Pots of honey thousands of years old have been found in Egyptian tombs.",
      ],
      odd: 3,
      why: "Parça balın neden bozulmadığını anlatır. Arıların bir günde pek çok çiçeği ziyaret ettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many cooks add salt to water before boiling pasta.",
        "Some believe that this makes the water boil at a higher temperature.",
        "In fact, the amount of salt normally used raises the boiling point by less than one degree.",
        "Italy produces hundreds of shapes of pasta.",
        "The main purpose of the salt is to add flavour.",
      ],
      odd: 3,
      why: "Parça makarna suyuna tuz eklenmesini anlatır. İtalya'nın yüzlerce makarna şekli ürettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1906, a German merchant began selling coffee from which most of the caffeine had been removed.",
        "According to a popular story, he discovered the method after a cargo of beans was soaked in seawater.",
        "The process used a chemical solvent to extract the caffeine.",
        "Ships carry many kinds of cargo.",
        "Modern methods use water or carbon dioxide instead.",
      ],
      odd: 3,
      why: "Parça kafeinsiz kahvenin ortaya çıkışını anlatır. Gemilerin pek çok türde yük taşıdığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "When sugar is heated on its own, it melts and turns brown.",
        "This process, called caramelisation, is different from the Maillard reaction.",
        "It begins at about 160 degrees Celsius.",
        "It produces the flavours of caramel and toffee.",
        "Many children enjoy eating sweets.",
      ],
      odd: 4,
      why: "Parça şekerin karamelleşmesini anlatır. Pek çok çocuğun şeker yemekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ice cubes made in a home freezer are often cloudy in the middle.",
        "This is because air and minerals dissolved in the water are pushed towards the centre as it freezes.",
        "Glaciers are made of ice.",
        "Clear ice can be made by freezing water slowly from one direction.",
        "Some bars use clear ice because it melts more slowly and looks attractive.",
      ],
      odd: 2,
      why: "Parça buz küplerinin neden bulanık olduğunu anlatır. Buzulların buzdan oluştuğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cooks often let roast meat rest for a few minutes before cutting it.",
        "During this time, the temperature becomes more even throughout the meat.",
        "Knives should be kept sharp.",
        "Some experts believe resting also helps the meat to keep more of its juices.",
        "Others argue that the effect is smaller than is often claimed.",
      ],
      odd: 2,
      why: "Parça kızartılmış etin kesilmeden önce dinlendirilmesini anlatır. Bıçakların keskin tutulması gerektiğini söyleyen III. cümle konu dışıdır.",
    },
  ],
};
