import type { YokdilDeneme } from "./types";

export const FEN_27: YokdilDeneme = {
  no: 27,
  field: "fen",
  vocab: [
    [
      "Newcomen's engine was ---- because it wasted huge amounts of heat by cooling the cylinder after every stroke.",
      ["inefficient", "invisible", "fragile", "silent", "portable"],
      "Newcomen'in makinesinin her vuruştan sonra silindiri soğutarak büyük miktarda ısı harcadığı için 'verimsiz' (inefficient) olduğu anlatılır.",
    ],
    [
      "The brothers placed three farm animals in a wicker basket to ---- whether creatures could live through a flight.",
      ["test", "prevent", "forget", "hide", "reward"],
      "Kardeşlerin canlıların bir uçuşu atlatıp atlatamayacağını 'sınamak' (test) için hasır bir sepete üç çiftlik hayvanı koyduğu anlatılır.",
    ],
    [
      "Lilienthal controlled his gliders by ---- his body to change their balance.",
      ["shifting", "painting", "freezing", "selling", "wrapping"],
      "Lilienthal'in planörlerini dengelerini değiştirmek için vücudunu 'kaydırarak' (shifting) yönettiği anlatılır.",
    ],
    [
      "The airship was filled with hydrogen, a gas that is highly ----.",
      ["flammable", "valuable", "heavy", "colourful", "harmless"],
      "Hava gemisinin son derece 'yanıcı' (flammable) bir gaz olan hidrojenle doldurulduğu anlatılır.",
    ],
    [
      "Many experts ---- Goddard's claim that a rocket could work in the vacuum of space.",
      ["ridiculed", "welcomed", "proved", "repeated", "funded"],
      "Pek çok uzmanın Goddard'ın roketin uzay boşluğunda çalışabileceği iddiasıyla 'alay ettiği' (ridiculed) anlatılır.",
    ],
    [
      "The Voyager probes are expected to ---- power in the 2030s, after which they will fall silent.",
      ["run out of", "look up to", "put up with", "get on with", "make up for"],
      "Voyager sondalarının 2030'larda gücünün 'tükeneceği' (run out of) ve ardından susacağı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first balloon flight with human passengers ---- over Paris in November 1783.",
      ["was made", "made", "has made", "was making", "had made"],
      "Uçuş yapılan bir eylemdir ve olay geçmiştedir: edilgen geçmiş zaman 'was made'.",
    ],
    [
      "If the airship had been filled with helium instead of hydrogen, the disaster ---- .",
      ["might have been avoided", "might be avoided", "will be avoided", "was avoided", "had been avoided"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have been + V3' ister.",
    ],
    [
      "By the time Whittle's engine flew in 1941, he ---- on the idea for more than ten years.",
      ["had been working", "has been working", "is working", "will work", "works"],
      "Geçmişteki bir olaydan önce süregelen eylem: Past Perfect Continuous 'had been working'.",
    ],
    [
      "Lilienthal, ---- photographs of gliding flights inspired the Wright brothers, made around two thousand flights.",
      ["whose", "who", "which", "whom", "where"],
      "Fotoğraflar Lilienthal'in uçuşlarına aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the Second World War ---- Goddard's work properly appreciated in the United States.",
      ["was", "did", "had", "has", "it was"],
      "'Only after …' ile başlayan cümlede ana cümle devrik olur; edilgen yapıda 'was Goddard's work appreciated' gerekir.",
    ],
    [
      "The fire spread ---- quickly that the airship was destroyed in about half a minute.",
      ["so", "such", "too", "very", "as"],
      "Zarftan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- Whittle patented his design in 1930, the government showed little interest at first.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Tasarımın patentini alması ile hükümetin başta ilgi göstermemesi zıttır: 'Although'.",
    ],
    [
      "Watt is said to have thought of ---- a separate condenser while walking on a Sunday afternoon.",
      ["adding", "to add", "add", "added", "to have added"],
      "'think of' kalıbında edattan sonra fiil '-ing' alır: 'adding'.",
    ],
    [
      "The first liquid-fuelled rocket is reported ---- for only two and a half seconds.",
      ["to have flown", "to fly", "flying", "to be flown", "to have been flown"],
      "Geçmişte gerçekleşmiş bir olay: 'be reported to have + V3' yapısı 'to have flown'.",
    ],
    [
      "The records ---- on the probes contain greetings in fifty-five languages.",
      ["carried", "carrying", "which carried", "to carry", "have carried"],
      "Plaklar sondalar tarafından taşınan nesnelerdir; edilgen anlamlı geçmiş ortaç 'carried' gerekir.",
    ],
    [
      "Neither the passengers ---- the crew had any warning before the fire began.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Watt kept the cylinder hot at all times ---- less fuel would be wasted.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "A newspaper wrote about Goddard as if he ---- not understand basic physics.",
      ["did", "does", "will", "has", "doing"],
      "'as if' ile gerçek dışı bir durum anlatıldığında fiil geçmiş zamana kayar: 'did not understand'.",
    ],
    [
      "The further the probes travel, ---- their signals become.",
      ["the weaker", "weaker", "the weakest", "more weak", "the more weak"],
      "'The further …, the weaker …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early eighteenth century, flooding was a serious problem in the deep mines of England, {1} pumping water out by hand or with horses was slow and expensive. In 1712, the ironmonger Thomas Newcomen built the first practical steam engine to do the job. Steam was let into a large cylinder and then cooled with a spray of cold water, {2} produced a partial vacuum that allowed the pressure of the atmosphere to push a piston down. Newcomen's engines were reliable, but they used enormous amounts of coal, {3} the cylinder had to be heated and cooled again at every stroke. In 1765, James Watt, an instrument maker at the University of Glasgow, was asked to repair a model of the engine. He realised that much less fuel would be needed {4} the steam were cooled in a separate container, leaving the main cylinder hot all the time. Together with the businessman Matthew Boulton, Watt developed engines that used about a quarter of the coal of Newcomen's design. He later adapted them to produce a turning motion, {5} allowed them to drive machinery in factories and helped to power the Industrial Revolution.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "unless", "although", "or"],
          "Madenlerdeki su baskını sorunu ve suyu elle ya da atlarla çıkarmanın yavaş ve pahalı olması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki işlemi niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(23) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Çok kömür harcamalarının nedeni silindirin her vuruşta ısıtılıp soğutulmasıdır: 'because'.",
        ],
        [
          "(24) ----",
          ["if", "unless", "although", "because", "whereas"],
          "Buharın ayrı bir kapta soğutulması koşuluyla çok daha az yakıt gerekeceği anlatılır: 'if'.",
        ],
        [
          "(25) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki uyarlamayı niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
      ],
    },
    {
      text:
        "Joseph and Étienne Montgolfier were the sons of a wealthy paper manufacturer in the south of France. In the early 1780s, they became interested in the way smoke and hot air rose, {1} they started testing paper and fabric envelopes filled with warm air. In June 1783, they publicly launched a large balloon made of cloth lined with paper, {2} rose to a height of about two thousand metres. A few months later, at the royal palace of Versailles, they sent up a balloon carrying a sheep, a duck and a rooster, watched by King Louis XVI. The animals landed safely, {3} suggested that living creatures could survive at altitude. On 21 November 1783, two men, Jean-François Pilâtre de Rozier and the Marquis d'Arlandes, made the first free flight by humans, travelling about nine kilometres across Paris in around twenty-five minutes. They had to feed the fire beneath the balloon with straw during the flight, {4} they risked setting the balloon itself alight. Only ten days later, the physicist Jacques Charles flew in a balloon filled with hydrogen, {5} was lighter than hot air and did not need a fire. Balloon flights soon became a popular spectacle across Europe.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "unless", "although", "or"],
          "İlgilenmeleri ve deneylere başlamaları birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra balonu niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki olayın tamamını niteleyen ilgi zamiridir: 'which'.",
        ],
        [
          "(29) ----",
          ["although", "because", "so that", "unless", "since"],
          "Ateşi beslemek zorunda olmaları ile balonu tutuşturma riski taşımaları zıtlık içerir: 'although'.",
        ],
        [
          "(30) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra hidrojeni niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Lilienthal died after a crash in 1896, ----.",
      [
        "his careful records helped later inventors to build powered aircraft",
        "he had made around two thousand flights from a hill near Berlin",
        "his gliders were made of willow and cotton cloth",
        "he controlled them by moving the weight of his body",
        "the wind was very strong on the day of the accident",
      ],
      "'Although' zıtlık ister: 1896'da bir kazada ölse de dikkatli kayıtları sonraki mucitlerin motorlu uçak yapmasına yardım etti.",
    ],
    [
      "If the government had supported Whittle earlier, ----.",
      [
        "Britain might have had jet aircraft much sooner",
        "the engine burns fuel to produce a jet of hot gas",
        "most aircraft will use jet engines in the future",
        "Whittle was a young officer in the Royal Air Force",
        "the first jet aircraft had been built in Germany",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Goddard tested his rockets on a farm in Massachusetts ----.",
      [
        "because he needed open space away from people",
        "although he had no interest in launching them",
        "unless the farmer refused to let him in",
        "so that newspapers could watch every test",
        "even if the rockets never left the ground",
      ],
      "Roketlerini bir çiftlikte denemesinin nedeni insanlardan uzak açık bir alana ihtiyaç duymasıdır: 'because'.",
    ],
    [
      "Since the Voyager probes were launched in 1977, ----.",
      [
        "they have gone further than any other spacecraft",
        "scientists had planned the mission for many years",
        "most of the planets would have been visited",
        "the probes will return to the Earth",
        "the records were made of gold-plated copper",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have travelled'.",
    ],
    [
      "Unless the steam is cooled in a separate container, ----.",
      [
        "the cylinder must be reheated after every stroke",
        "the engine would have produced more power",
        "most of the coal had already been used",
        "the mine will be flooded",
        "the piston was made of iron",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: buhar ayrı bir kapta soğutulmadıkça silindir her vuruştan sonra yeniden ısıtılmalıdır.",
    ],
    [
      "The disaster was so widely reported ----.",
      [
        "that public confidence in airships never recovered",
        "because reporters were waiting to film the landing",
        "although only a few people were on board",
        "while the airship was arriving from Germany",
        "unless the newspapers were wrong",
      ],
      "'so widely reported that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Engineers have found that when air flows faster over the top of a wing than below it, ----.",
      [
        "the pressure difference helps to lift it",
        "the wing would have broken in two",
        "most of the passengers had been asleep",
        "the engine will stop working",
        "the runway was very short",
      ],
      "'when' ile genel bir bulgu anlatılır: hava kanadın üstünden altından daha hızlı aktığında basınç farkı uçağı kaldırmaya yardım eder.",
    ],
    [
      "So successful were Watt's engines ----.",
      [
        "that a unit of power bears his name",
        "because they used much less coal",
        "although they were expensive to build",
        "while other inventors copied them",
        "unless the mines were dry",
      ],
      "Devrik 'So successful were … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While the Montgolfiers used hot air to fill their balloons, ----.",
      [
        "Charles used hydrogen, which did not need a fire",
        "paper was made in their father's factory",
        "Versailles is near Paris",
        "the king watched the flight",
        "animals were carried in a basket",
      ],
      "'While' iki yöntemi karşılaştırır: Montgolfier'ler sıcak hava kullanırken Charles ateş gerektirmeyen hidrojen kullandı.",
    ],
    [
      "Once the probes had passed the outer planets, ----.",
      [
        "they continued travelling towards interstellar space",
        "they will return to the sun",
        "the scientists would have switched them off",
        "Jupiter is the largest planet",
        "most of their cameras had been designed in 1970",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: sondalar yıldızlararası uzaya doğru ilerlemeyi sürdürdü.",
    ],
    [
      "No sooner had the airship begun to land ----.",
      [
        "than flames appeared near its tail",
        "when it had crossed the Atlantic",
        "that the passengers will leave",
        "before it had been built in Germany",
        "so the crew relaxed",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Watt realised that keeping the cylinder hot would save a great deal of fuel.",
      [
        "Watt, silindiri sıcak tutmanın çok yakıt kazandıracağını fark etti.",
        "Watt, silindiri soğutmanın yakıt tüketimini azaltacağını fark etti.",
        "Watt, yakıt tasarrufu için silindiri tamamen kaldırdı.",
        "Watt, silindirin sıcaklığının yakıtla ilgisi olmadığını savundu.",
        "Watt, daha fazla yakıt yakarak silindiri sıcak tuttu.",
      ],
      "'keeping the cylinder hot' 'silindiri sıcak tutmanın', 'would save a great deal of fuel' 'çok fazla yakıt tasarrufu sağlayacağını' demektir.",
    ],
    [
      "The two men fed the fire with straw throughout the flight to keep the balloon in the air.",
      [
        "İki adam, balon havada kalsın diye ateşi samanla besledi.",
        "İki adam, balonu indirmek için uçuş sırasında ateşi söndürdü.",
        "Balon, saman yandığı için hemen yere düştü.",
        "İki adam, ateş yakmadan uçabilmek için saman taşıdı.",
        "Saman, balonun hidrojenle dolmasını sağladı.",
      ],
      "'fed the fire with straw throughout the flight' 'uçuş boyunca ateşi samanla besledi', 'to keep the balloon in the air' 'balonu havada tutmak için' demektir.",
    ],
    [
      "Lilienthal's photographs showed that a person could fly in a controlled way with wings.",
      [
        "Lilienthal'in fotoğrafları insanın kanatla denetimli uçabileceğini gösterdi.",
        "Lilienthal'in fotoğrafları, insanların hiçbir zaman uçamayacağını kanıtladı.",
        "Lilienthal, kanatların fotoğrafını çekerek kuşları inceledi.",
        "Fotoğraflar, Lilienthal'in uçarken denetimi kaybettiğini gösterdi.",
        "Lilienthal, kanatsız uçmanın daha güvenli olduğunu gösterdi.",
      ],
      "'showed that a person could fly' 'bir insanın uçabileceğini gösterdi', 'in a controlled way with wings' 'kanatlarla denetimli biçimde' demektir.",
    ],
    [
      "The cause of the fire has never been determined with complete certainty.",
      [
        "Yangının nedeni hiçbir zaman kesin olarak saptanamadı.",
        "Yangının nedeni kısa sürede kesin olarak belirlendi.",
        "Yangın, nedeni belirlendikten sonra söndürüldü.",
        "Yangının hiçbir nedeni olmadığı kanıtlandı.",
        "Yangının nedeni, yolcular tarafından açıklandı.",
      ],
      "'The cause of the fire' 'yangının nedeni', 'has never been determined with complete certainty' 'hiçbir zaman tam bir kesinlikle belirlenemedi' demektir.",
    ],
    [
      "A rocket does not need air to push against, because it is propelled by the gases it throws out.",
      [
        "Roket havaya gerek duymaz; attığı gazlarla ilerler.",
        "Roket yalnızca havada ilerleyebilir, çünkü gazları havayı iter.",
        "Roketin ilerlemesi için havanın ve gazların hiç önemi yoktur.",
        "Roket, gaz atmadan yalnızca havayı iterek ilerler.",
        "Hava, roketin gaz atmasını tamamen engeller.",
      ],
      "'does not need air to push against' 'itecek havaya ihtiyaç duymaz', 'because it is propelled by the gases it throws out' 'çünkü dışarı attığı gazlarla ilerler' demektir.",
    ],
    [
      "Each probe carries a record containing sounds and images chosen to represent life on Earth.",
      [
        "Her sonda, Dünya'daki yaşamı yansıtan ses ve görüntülerin yer aldığı bir plak taşır.",
        "Her sonda, başka gezegenlerden toplanan sesleri kaydetmek için bir plak taşır.",
        "Sondalardaki plaklar, yalnızca müzik içerir ve hiç görüntü barındırmaz.",
        "Plaklar, sondaların Dünya'ya geri dönmesini sağlamak için kullanılır.",
        "Dünya'daki yaşamı temsil eden plaklar, sondalardan çıkarıldı.",
      ],
      "'carries a record containing sounds and images' 'sesler ve görüntüler içeren bir plak taşır', 'chosen to represent life on Earth' 'Dünya'daki yaşamı temsil etmek için seçilmiş' demektir.",
    ],
  ],
  trEn: [
    [
      "Watt'ın makineleri, Sanayi Devrimi'ne güç sağlamaya yardım etti.",
      [
        "Watt's engines helped to power the Industrial Revolution.",
        "Watt's engines slowed down the Industrial Revolution.",
        "The Industrial Revolution ended before Watt's engines were built.",
        "Watt's engines were used only in ships.",
        "Watt refused to allow his engines to be used in factories.",
      ],
      "'Sanayi Devrimi'ne güç sağlamaya yardım etti' 'helped to power the Industrial Revolution' karşılığıdır.",
    ],
    [
      "İlk insanlı balon uçuşu yaklaşık yirmi beş dakika sürdü.",
      [
        "The first manned balloon flight lasted about twenty-five minutes.",
        "The first manned balloon flight lasted twenty-five hours.",
        "The first balloon carried twenty-five passengers.",
        "The first balloon flight ended in disaster after five minutes.",
        "The first balloon flew twenty-five kilometres high.",
      ],
      "'yaklaşık yirmi beş dakika sürdü' 'lasted about twenty-five minutes' karşılığıdır.",
    ],
    [
      "Jet motoru, uçakların çok daha hızlı ve yüksekte uçmasını sağladı.",
      [
        "The jet engine allowed aircraft to fly much faster and higher.",
        "The jet engine made aircraft slower and heavier.",
        "Aircraft could not fly high after the jet engine was invented.",
        "The jet engine was used only in cars.",
        "The jet engine had no effect on aircraft speed.",
      ],
      "'çok daha hızlı ve yüksekte uçmasını sağladı' 'allowed aircraft to fly much faster and higher' karşılığıdır.",
    ],
    [
      "Goddard, sıvı yakıtlı ilk roketi 1926'da fırlattı.",
      [
        "Goddard launched the first liquid-fuelled rocket in 1926.",
        "Goddard refused to launch any rockets.",
        "The first liquid-fuelled rocket was launched after Goddard's death.",
        "Goddard's first rocket used solid fuel only.",
        "Goddard launched his first rocket into space in 1926.",
      ],
      "'sıvı yakıtlı ilk roketi 1926'da fırlattı' 'launched the first liquid-fuelled rocket in 1926' karşılığıdır.",
    ],
    [
      "Hava gemisi, iniş sırasında alev aldı.",
      [
        "The airship caught fire while it was landing.",
        "The airship landed safely without any problems.",
        "The airship caught fire before it left Germany.",
        "The fire was put out before the airship landed.",
        "The airship was struck by another aircraft.",
      ],
      "'iniş sırasında alev aldı' 'caught fire while it was landing' karşılığıdır.",
    ],
    [
      "Sondalar hâlâ Dünya'ya sinyal göndermektedir.",
      [
        "The probes are still sending signals to the Earth.",
        "The probes stopped sending signals many years ago.",
        "The Earth sends signals to the probes but receives none.",
        "The probes have returned to the Earth.",
        "The probes have never sent any signals.",
      ],
      "'hâlâ Dünya'ya sinyal göndermektedir' 'are still sending signals to the Earth' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the late nineteenth century, many inventors tried to build flying machines, but most concentrated on engines and paid little attention to the problem of control. The German engineer Otto Lilienthal took a different approach. Having studied the flight of birds for many years, he built a series of gliders with wings made of willow and cotton cloth, and between 1891 and 1896 he made around two thousand flights, launching himself from a specially built artificial hill near Berlin. He steered the gliders by swinging his legs and shifting the weight of his body, and some of his flights covered more than two hundred and fifty metres. Lilienthal published his measurements of the forces acting on different wing shapes, and the photographs taken of him in the air were reproduced in newspapers and magazines around the world, convincing many people that human flight was possible. On 9 August 1896, a sudden gust of wind caused one of his gliders to stall, and he fell about fifteen metres, breaking his spine. He died the following day. His last words are said to have been 'Sacrifices must be made'. The Wright brothers later acknowledged that his work had been a major inspiration, although they found that some of his figures were inaccurate and carried out their own tests in a wind tunnel.",
      questions: [
        [
          "According to the passage, Lilienthal differed from many other inventors in that he ----.",
          [
            "focused on how to control flight",
            "built powerful engines for his machines",
            "never studied the flight of birds",
            "flew only over water",
            "avoided publishing his results",
          ],
          "Metne göre diğer mucitlerin çoğu motorlara odaklanıp denetim sorununa az önem verirken Lilienthal farklı bir yaklaşım benimsedi.",
        ],
        [
          "The writer mentions the photographs of Lilienthal in order to show ----.",
          [
            "how they convinced people that flight was possible",
            "that Lilienthal worked as a photographer",
            "how the gliders were built",
            "why he died in a crash",
            "that the Wright brothers took them",
          ],
          "Fotoğrafların dünya genelinde yayımlanıp pek çok kişiyi insanın uçabileceğine ikna etmesi bunu gösterir.",
        ],
        [
          "It can be understood from the passage that the Wright brothers ----.",
          [
            "were inspired by Lilienthal but checked his data themselves",
            "copied all of Lilienthal's figures exactly",
            "had never heard of Lilienthal",
            "built gliders before Lilienthal",
            "were killed in a similar accident",
          ],
          "Metne göre Wright kardeşler Lilienthal'den esinlendi ama bazı rakamlarının hatalı olduğunu görüp rüzgâr tünelinde kendi testlerini yaptı.",
        ],
      ],
    },
    {
      text:
        "In the 1930s, giant airships were seen by many as the future of long-distance air travel. The biggest of all, Germany's LZ 129 Hindenburg, stretched over two hundred and forty metres and could carry around seventy passengers in comfort, with a dining room, a lounge and even a smoking room carefully sealed against sparks. It was filled with hydrogen, an extremely flammable gas, because the United States, the main producer of the safer gas helium, would not export it to Germany. On 6 May 1937, after crossing the Atlantic, the Hindenburg was preparing to land at Lakehurst in New Jersey when flames appeared near its tail. Within about thirty seconds, the airship was engulfed in fire and crashed to the ground. Of the ninety-seven people on board, thirty-six died, along with one member of the ground crew. The disaster was recorded by newsreel cameras and described in a famous, emotional radio report, and the images shocked the world. The exact cause has never been established with certainty; one widely accepted theory blames an electrical spark that ignited gas escaping from the hull. Remarkably, nearly two thirds of those on board survived. Nevertheless, the disaster effectively ended the era of passenger airships.",
      questions: [
        [
          "According to the passage, the Hindenburg was filled with hydrogen because ----.",
          [
            "Germany could not get helium from America",
            "hydrogen was safer than helium",
            "helium had not yet been discovered",
            "hydrogen was cheaper to burn",
            "the passengers preferred it",
          ],
          "Metne göre helyumun başlıca üreticisi ABD onu Almanya'ya ihraç etmiyordu.",
        ],
        [
          "The writer mentions the newsreel cameras and the radio report in order to show ----.",
          [
            "why the disaster affected the public so much",
            "how the fire started",
            "that no one survived",
            "how the airship was built",
            "that the airship had a smoking room",
          ],
          "Felaketin film kameralarıyla kaydedilmesi ve duygusal bir radyo yayınıyla anlatılması, kamuoyunu neden bu kadar etkilediğini gösterir.",
        ],
        [
          "It can be inferred from the passage that the end of passenger airships ----.",
          [
            "was caused more by loss of public confidence than by the number of deaths",
            "was planned before the disaster",
            "was caused by a shortage of hydrogen",
            "happened because most passengers died",
            "had nothing to do with the disaster",
          ],
          "Yolcuların neredeyse üçte ikisinin kurtulmasına rağmen felaketin hava gemisi çağını bitirmesi, sonun ölü sayısından çok güven kaybından kaynaklandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1928, Frank Whittle, a twenty-one-year-old cadet at the Royal Air Force college in Cranwell, wrote a paper arguing that aircraft could fly much faster at high altitudes, where the air is thin, but that ordinary propeller engines would not work well there. He proposed instead an engine that would draw in air, compress it, burn fuel in it and force out a powerful jet of hot gas. He patented the idea in 1930, but the Air Ministry showed little interest, and when the patent needed renewing in 1935, Whittle could not afford the fee and allowed it to lapse. With the help of private investors, he set up a small company, and his first engine ran on a test bed in 1937, although it was so unpredictable that workers sometimes hid behind walls during tests. Meanwhile, in Germany, the engineer Hans von Ohain had independently developed a similar engine, and in August 1939 the first jet-powered aircraft flew there. The first British jet aircraft, using Whittle's engine, flew in May 1941. Jet fighters were used by both sides near the end of the Second World War, and within a few decades jet engines had transformed civil aviation, making long-distance travel faster and cheaper than ever before. Whittle was knighted in 1948.",
      questions: [
        [
          "According to the passage, Whittle believed that propeller engines ----.",
          [
            "would work poorly in thin, high air",
            "were faster than jet engines",
            "used too little fuel",
            "could not be patented",
            "were already out of date in 1928",
          ],
          "Metne göre havanın ince olduğu yüksek irtifalarda sıradan pervaneli motorlar iyi çalışmazdı.",
        ],
        [
          "The writer mentions that Whittle allowed his patent to lapse in order to show ----.",
          [
            "how little official help he got at first",
            "that he lost interest in the idea",
            "that the patent had been stolen",
            "how the engine worked",
            "why the engine was dangerous",
          ],
          "Patent yenileme ücretini ödeyemeyip patenti düşürmesi, başta ne kadar az resmî destek aldığını gösterir.",
        ],
        [
          "It can be understood from the passage that the first jet aircraft to fly ----.",
          [
            "was developed in Germany independently of Whittle",
            "used Whittle's engine",
            "flew in Britain in 1937",
            "was a passenger aircraft",
            "was built after the war",
          ],
          "Metne göre von Ohain benzer bir motoru bağımsız olarak geliştirdi ve ilk jet uçağı 1939'da Almanya'da uçtu.",
        ],
      ],
    },
    {
      text:
        "In the early twentieth century, the American physicist Robert Goddard became convinced that rockets could one day reach the upper atmosphere and even travel to the moon. In 1920, after he published a paper discussing the possibility, The New York Times wrote an editorial mocking him, claiming that a rocket could not work in the vacuum of space because there would be nothing for it to push against. In fact, as Newton's third law shows, a rocket is pushed forward by the reaction to the gases it forces out, and needs no air at all. Goddard, a shy man, was deeply hurt by the public criticism and became increasingly secretive about his work. On 16 March 1926, on his aunt's farm in Massachusetts, he launched the world's first rocket powered by liquid fuel, a mixture of petrol and liquid oxygen. It rose only about twelve metres and flew for two and a half seconds before landing in a cabbage field, but it showed that the principle worked. With funding arranged with the help of the aviator Charles Lindbergh, Goddard moved to New Mexico and built increasingly powerful rockets, introducing many features later used in space rockets. He died in 1945. In July 1969, the day after Apollo 11 was launched towards the moon, the newspaper published a short correction, admitting its error.",
      questions: [
        [
          "According to the passage, the newspaper's 1920 editorial was mistaken because ----.",
          [
            "a rocket is driven by its own exhaust",
            "rockets cannot reach the moon",
            "Goddard had already landed on the moon",
            "air is present in space",
            "Newton's laws do not apply to rockets",
          ],
          "Metne göre Newton'un üçüncü yasasına göre roket dışarı attığı gazlara tepkiyle ilerler ve havaya hiç ihtiyaç duymaz.",
        ],
        [
          "The writer mentions the cabbage field in order to show ----.",
          [
            "how short the first flight was",
            "that the rocket was a failure",
            "where Goddard lived",
            "that his aunt grew vegetables",
            "how the fuel was made",
          ],
          "Roketin yalnızca on iki metre yükselip lahana tarlasına düşmesi, ilk sıvı yakıtlı uçuşun ne kadar mütevazı olduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that the correction of 1969 ----.",
          [
            "came long after Goddard's ideas had been proved right",
            "was published during Goddard's lifetime",
            "was written by Goddard himself",
            "repeated the original criticism",
            "was ignored by readers",
          ],
          "Düzeltmenin Goddard'ın ölümünden yıllar sonra, Apollo 11 aya doğru fırlatıldığında yayımlanması, fikirlerinin çoktan doğrulandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1977, NASA sent the twin Voyager probes off to explore the giant outer planets of the solar system. They took advantage of a rare arrangement of the planets, that happens roughly twice in four centuries, which allowed a spacecraft to use the gravity of each planet to swing on to the next. Voyager 2 flew past Jupiter, Saturn, Uranus and Neptune, and it remains the only spacecraft to have visited the last two. The probes sent back thousands of detailed images, revealing active volcanoes on Jupiter's moon Io and complex structures in Saturn's rings. Each probe also carries a gold-plated copper record, known as the Golden Record, intended as a message to any intelligent life that might one day find it. A committee led by the astronomer Carl Sagan chose its contents, which include greetings in fifty-five languages, music from many cultures and sounds such as birdsong, thunder and a mother's kiss, as well as images showing human life and science. In 2012, Voyager 1 crossed into interstellar space, a first for any spacecraft, beyond the region dominated by the sun's influence, and Voyager 2 followed in 2018. Although they are now more than twenty billion kilometres away, the probes still send faint signals to Earth, but their power is gradually running out.",
      questions: [
        [
          "According to the passage, the Voyager mission took advantage of ----.",
          [
            "a rare line-up of the outer planets",
            "a new type of rocket fuel",
            "the gravity of the moon only",
            "signals from other civilisations",
            "the sun's magnetic field",
          ],
          "Metne göre görev, gezegenlerin her yüz yetmiş beş yılda bir oluşan nadir bir dizilişinden yararlandı.",
        ],
        [
          "The writer mentions the Golden Record in order to describe ----.",
          [
            "a message for any beings who find them",
            "how the probes were powered",
            "the images of Jupiter's moons",
            "why the probes were launched in 1977",
            "how the probes communicate with Earth",
          ],
          "Altın Plak, sondaları bir gün bulabilecek akıllı varlıklara yönelik bir mesaj olarak tanımlanır.",
        ],
        [
          "It can be understood from the passage that the probes ----.",
          [
            "will eventually stop communicating with Earth",
            "have returned to the solar system",
            "visited only Jupiter and Saturn",
            "have unlimited power",
            "were designed to land on Neptune",
          ],
          "Güçlerinin giderek tükenmesi, sondaların sonunda Dünya ile iletişimi keseceğini gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Every large passenger aircraft carries two flight recorders, often called 'black boxes'. ---- After an accident, investigators use this information to work out what went wrong.",
      [
        "One records cockpit voices; the other records flight data.",
        "Most aircraft are painted white to reflect sunlight.",
        "Passengers are served meals on long flights.",
        "Pilots train for many years before flying large aircraft.",
        "Airport security checks can take a long time.",
      ],
      "Boşluktan sonra 'this information' ile soruşturmacıların bilgiyi kullandığı söylenir; boşluğa birinin kokpitteki sesleri, diğerinin hız ve irtifa gibi verileri kaydettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Modern aircraft are fitted with autopilot systems that can control them for most of a flight. ---- Pilots must therefore remain alert and ready to take over at any moment.",
      [
        "However, they may switch off suddenly in an emergency.",
        "Long flights can be tiring for passengers.",
        "Many airlines fly to dozens of countries.",
        "Some aircraft have two decks.",
        "Weather forecasts are important for pilots.",
      ],
      "Boşluktan sonra 'therefore' ile pilotların uyanık kalması gerektiği söylenir; boşluğa sistemlerin baş edemedikleri bir sorun saptarlarsa aniden devre dışı kalabildiğini söyleyen 'However' cümlesi gelmelidir.",
    ],
    [
      "The white trails left by high-flying aircraft are known as contrails. ---- On dry days they disappear quickly, but in humid air they can spread out and last for hours.",
      [
        "Water vapour in the exhaust freezes into ice.",
        "Many people enjoy watching aircraft take off.",
        "Aircraft fly at about ten kilometres above the ground.",
        "Clouds can be many different shapes.",
        "The sky appears blue because of the way light is scattered.",
      ],
      "Boşluktan sonra kuru ve nemli havada izlerin davranışı anlatılır; boşluğa izlerin sıcak egzozdaki su buharı soğuk havada buz kristallerine donunca oluştuğunu açıklayan cümle gelmelidir.",
    ],
    [
      "At the tip of an aircraft's wing, high-pressure air from below curls round to the low-pressure area above, forming a swirling vortex. ---- Many modern airliners therefore have small upturned fins, called winglets, at the ends of their wings.",
      [
        "These vortices increase drag and waste fuel.",
        "Many airliners can carry several hundred passengers on long routes.",
        "Aircraft wings are usually made of aluminium alloys and composites.",
        "Some pilots learn to fly on small aircraft at local clubs.",
        "Fuel is stored inside the wings of most large aircraft.",
      ],
      "Boşluktan sonra 'therefore' ile kanat ucu kanatçıklarının kullanıldığı söylenir; boşluğa bu girdapların sürtünmeyi artırıp yakıt harcadığını söyleyen cümle gelmelidir.",
    ],
    [
      "Japan's high-speed Shinkansen trains began running between Tokyo and Osaka in 1964. ---- Their average delay is measured in seconds rather than minutes.",
      [
        "They are famous for their punctuality and safety.",
        "Tokyo is one of the largest cities in Asia.",
        "Many tourists visit Japan in spring.",
        "Trains in Japan are often crowded.",
        "Osaka is known for its food.",
      ],
      "Boşluktan sonra ortalama gecikmenin saniyelerle ölçüldüğü söylenir; boşluğa trenlerin yalnızca hızlarıyla değil olağanüstü dakiklikleri ve güvenlikleriyle de ünlü olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "A hydrofoil is a boat with wing-like structures fixed beneath its hull. ---- Because there is much less contact with the water, the boat can travel far faster using the same power.",
      [
        "At speed, these foils lift the hull out of the water.",
        "Many boats are made of fibreglass.",
        "Some ferries carry cars as well as passengers.",
        "Sailing is a popular sport.",
        "Harbours are often busy in summer.",
      ],
      "Boşluktan sonra suyla temas azaldığı için teknenin daha hızlı gidebildiği söylenir; boşluğa tekne hızlandıkça kanatçıkların gövdeyi tamamen sudan kaldırdığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A periscope allows the crew of a submarine to see above the surface while remaining hidden below it.",
        "It uses a system of mirrors or prisms inside a long tube.",
        "Many children make simple periscopes from cardboard at school.",
        "Many coastal towns hold boat festivals in the summer.",
        "Modern periscopes have largely been replaced by electronic cameras on masts.",
      ],
      odd: 3,
      why: "Parça periskopun çalışma ilkesini ve gelişimini anlatır. Pek çok kıyı kasabasının yazın tekne festivalleri düzenlediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Wind shear is a sudden change in wind speed or direction over a short distance.",
        "It is particularly dangerous for aircraft during take-off and landing.",
        "Many airports have detectors that warn pilots when it is present.",
        "Some airports are surrounded by mountains.",
        "Pilots are trained to respond quickly by increasing engine power.",
      ],
      odd: 3,
      why: "Parça rüzgâr kesmesini anlatır. Bazı havalimanlarının dağlarla çevrili olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ice on the wings of an aircraft can change their shape and reduce lift.",
        "In cold weather, aircraft are therefore sprayed with special fluids before take-off.",
        "Many people enjoy skiing holidays in winter.",
        "Some aircraft also have heated wings.",
        "These measures have greatly reduced accidents caused by ice.",
      ],
      odd: 2,
      why: "Parça uçakların buzlanmaya karşı korunmasını anlatır. Pek çok kişinin kışın kayak tatilinden hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Turbulence is caused by irregular movements of air.",
        "It can be produced by storms, mountains or fast-moving currents of air high in the atmosphere.",
        "Most turbulence is uncomfortable rather than dangerous.",
        "Many passengers watch films during flights.",
        "Wearing a seat belt whenever seated is the best way to avoid injury.",
      ],
      odd: 3,
      why: "Parça türbülansı anlatır. Pek çok yolcunun uçuşlarda film izlediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Seaplanes are aircraft that can take off from and land on water.",
        "They are especially useful in regions with many lakes but few runways.",
        "Canada has more lakes than any other country.",
        "Some seaplanes have floats, while others have hulls like boats.",
        "Large seaplanes were once used for long-distance passenger flights across oceans.",
      ],
      odd: 2,
      why: "Parça deniz uçaklarını anlatır. Kanada'nın dünyada en çok göle sahip ülke olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The deck of an aircraft carrier is far too short for most aircraft to take off normally.",
        "Powerful catapults are therefore used to accelerate them to flying speed in a few seconds.",
        "When landing, aircraft catch a wire with a hook to stop quickly.",
        "Without these systems, carriers would need decks several times longer.",
        "Many large ships are built in shipyards in Asia.",
      ],
      odd: 4,
      why: "Parça uçak gemilerinde kalkış ve iniş sistemlerini anlatır. Pek çok büyük geminin Asya'daki tersanelerde yapıldığını söyleyen V. cümle konu dışıdır.",
    },
  ],
};
