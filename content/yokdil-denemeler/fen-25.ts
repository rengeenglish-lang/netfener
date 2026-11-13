import type { YokdilDeneme } from "./types";

export const FEN_25: YokdilDeneme = {
  no: 25,
  field: "fen",
  vocab: [
    [
      "The workers inside the tunnelling shield were protected while they slowly ---- the soft clay in front of them.",
      ["dug away", "gave up", "put off", "turned down", "called off"],
      "Tünel kalkanının içindeki işçilerin önlerindeki yumuşak kili yavaşça 'kazarken' (dug away) korunduğu anlatılır.",
    ],
    [
      "Lovelace realised that the machine could ---- not only numbers but also symbols such as musical notes.",
      ["manipulate", "forget", "decorate", "ignore", "sell"],
      "Lovelace'ın makinenin yalnızca sayıları değil müzik notaları gibi simgeleri de 'işleyebileceğini' (manipulate) fark ettiği anlatılır.",
    ],
    [
      "After her husband became ill, Emily Roebling acted as the ---- between him and the engineers on site.",
      ["link", "rival", "victim", "judge", "guest"],
      "Kocası hastalanınca Emily Roebling'in onunla şantiyedeki mühendisler arasında 'bağlantı' (link) görevi gördüğü anlatılır.",
    ],
    [
      "The wind caused the bridge deck to twist ---- until it finally broke apart.",
      ["violently", "gently", "rarely", "silently", "proudly"],
      "Rüzgârın köprü tabliyesinin sonunda parçalanana kadar 'şiddetle' (violently) burulmasına yol açtığı anlatılır.",
    ],
    [
      "The early programmers had to ---- the machine by hand, plugging in cables and setting switches.",
      ["configure", "abandon", "paint", "repair", "photograph"],
      "İlk programcıların makineyi kablo takıp anahtarları ayarlayarak elle 'yapılandırmak' (configure) zorunda kaldığı anlatılır.",
    ],
    [
      "Berners-Lee wanted scientists to be able to ---- information stored on different computers easily.",
      ["get at", "run out of", "look down on", "put up with", "make up for"],
      "Berners-Lee'nin bilim insanlarının farklı bilgisayarlarda saklanan bilgilere kolayca 'ulaşabilmesini' (get at) istediği anlatılır.",
    ],
  ],
  grammar: [
    [
      "The Thames Tunnel ---- to the public in 1843 after eighteen years of work.",
      ["was opened", "opened it", "has opened", "was opening", "had opened"],
      "Tünel açılan bir yapıdır ve olay geçmiştedir: edilgen geçmiş zaman 'was opened'.",
    ],
    [
      "If the engineers had tested a model of the bridge in a wind tunnel, they ---- the danger.",
      ["might have recognised", "might recognise", "will recognise", "recognised", "had recognised"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Emily Roebling ---- the work for more than a decade when the bridge was finally finished.",
      ["had been supervising", "has been supervising", "is supervising", "will supervise", "supervises"],
      "Geçmişteki bir olaydan önce süregelen eylem: Past Perfect Continuous 'had been supervising'.",
    ],
    [
      "Babbage, ---- Analytical Engine was never completed, is often called the father of the computer.",
      ["whose", "who", "which", "whom", "where"],
      "Makine Babbage'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only decades later ---- the women who programmed the machine given credit for their work.",
      ["were", "did", "had", "have", "they were"],
      "'Only decades later' ile başlayan cümlede ana cümle devrik olur; edilgen yapıda 'were the women … given' gerekir.",
    ],
    [
      "The river bed was ---- soft that water often burst into the tunnel.",
      ["so", "such", "too", "very", "as"],
      "Sıfattan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the Analytical Engine was never built, Lovelace wrote what is often called the first computer program for it.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Makinenin hiç yapılmaması ile Lovelace'ın onun için ilk program sayılan şeyi yazması zıttır: 'Although'.",
    ],
    [
      "Berners-Lee decided against ---- a patent on his invention.",
      ["taking out", "to take out", "take out", "taken out", "to have taken out"],
      "'decide against' kalıbında edattan sonra fiil '-ing' alır: 'taking out'.",
    ],
    [
      "The bridge is said ---- more like a roller coaster than a road in strong winds.",
      ["to have moved", "to move", "moving", "to be moved", "to have been moved"],
      "Köprünün geçmişte nasıl hareket ettiği söylenir: 'be said to have + V3' yapısı 'to have moved'.",
    ],
    [
      "The cables ---- across the river were made from thousands of steel wires.",
      ["stretched", "stretching them", "which stretched it", "to stretch", "have stretched"],
      "Kablolar nehir boyunca gerilen nesnelerdir; edilgen anlamlı geçmiş ortaç 'stretched' gerekir.",
    ],
    [
      "Neither Babbage ---- the British government was willing to fund the machine in the end.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Roebling watched the work through a telescope from his window ---- he could give instructions.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Newspapers described the programmers as though they ---- simply operators rather than skilled experts.",
      ["were", "are", "will be", "have been", "being"],
      "'as though' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The deeper the workers went, ---- the pressure on their bodies became.",
      ["the greater", "greater", "the greatest", "more great", "the more great"],
      "'The deeper …, the greater …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "By the 1820s, the port of London had become so crowded that engineers looked for a way to cross the River Thames without building a bridge that would block the ships. Several attempts to dig a tunnel under the river had failed, {1} the ground beneath it was soft, wet and liable to collapse. In 1825, the French-born engineer Marc Brunel began a new attempt using a device he had invented, the tunnelling shield. Inspired, it is said, by the way a shipworm bores through wood, the shield was a large iron frame divided into compartments, {2} miners worked side by side, removing small amounts of earth at a time. As they advanced, bricklayers lined the tunnel behind them. The work was extremely dangerous. The river broke through several times, flooding the tunnel; on one occasion, Marc's son, Isambard Kingdom Brunel, who was acting as resident engineer, was almost killed. Work stopped for seven years {3} money ran out. The tunnel finally opened in 1843, {4} it was the first known tunnel to be built successfully under a navigable river. It was too expensive to be used by horse-drawn traffic as planned, {5} it later became part of London's railway network and is still used by trains today.",
      blanks: [
        [
          "(21) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Girişimlerin başarısız olmasının nedeni nehir altındaki zeminin yumuşak, ıslak ve çökmeye yatkın olmasıdır: 'because'.",
        ],
        [
          "(22) ----",
          ["in which", "which", "whose", "where it", "that"],
          "Boşluk bölmeleri niteler ve ardından tam bir cümle gelir; 'içinde madencilerin çalıştığı' anlamı için 'in which' gerekir.",
        ],
        [
          "(23) ----",
          ["when", "unless", "although", "so that", "whereas"],
          "Çalışmaların para bittiği 'zaman' durduğu anlatılır: 'when'.",
        ],
        [
          "(24) ----",
          ["and", "but", "unless", "although", "or"],
          "Tünelin açılması ve gemi geçen bir nehrin altında başarıyla yapılan ilk tünel olması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "because", "so that", "unless", "since"],
          "Planlandığı gibi kullanılamayacak kadar pahalı olması ile sonradan demiryolu ağının parçası olması zıttır: 'but'.",
        ],
      ],
    },
    {
      text:
        "In the 1820s and 1830s, the English mathematician Charles Babbage designed a series of mechanical calculating machines. The first, the Difference Engine, was intended to produce mathematical tables automatically, {1} would remove the errors made by human calculators. The British government provided money, but the project was abandoned after disputes over costs. Babbage then designed a far more ambitious machine, the Analytical Engine, {2} could in principle carry out any calculation. It was to be programmed using punched cards, an idea borrowed from looms used to weave patterned cloth, and it had a separate 'store' for numbers and a 'mill' for processing them, much like the memory and processor of a modern computer. In 1843, the mathematician Ada Lovelace, daughter of the poet Lord Byron, translated an article about the machine from French {3} added a series of her own notes, which were three times longer than the original. In them, she described a method by which the engine could calculate a complex sequence of numbers, {4} many describe as the earliest computer program ever printed. She also suggested that such a machine might one day compose music, {5} it could work with symbols as well as numbers. The engine was never built, but a working version of Babbage's later Difference Engine was completed by the Science Museum in London in 1991.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki amacı niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(27) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra Analitik Makine'yi niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(28) ----",
          ["and", "but", "unless", "although", "or"],
          "Makaleyi çevirmesi ve kendi notlarını eklemesi birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki yöntemi niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(30) ----",
          ["since", "although", "unless", "whereas", "as if"],
          "Makinenin bir gün müzik besteleyebileceğini düşünmesinin gerekçesi simgelerle de çalışabilmesidir: 'since'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Washington Roebling was confined to his room by illness, ----.",
      [
        "he continued to direct the building of the bridge through his wife",
        "he had suffered from a disease caused by working underwater",
        "his father had designed the bridge before his own death",
        "the bridge was the longest of its kind in the world",
        "the towers were built of granite and limestone",
      ],
      "'Although' zıtlık ister: hastalık nedeniyle odasına kapanmış olsa da köprünün yapımını eşi aracılığıyla yönetmeyi sürdürdü.",
    ],
    [
      "If the Tacoma Narrows Bridge had been built with a deeper and stiffer deck, ----.",
      [
        "it might not have collapsed in the wind",
        "the river flows into the Pacific Ocean nearby",
        "most suspension bridges will be built of steel",
        "the bridge was opened in the summer of 1940",
        "the engineers had studied many earlier bridges",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Berners-Lee made the World Wide Web freely available ----.",
      [
        "so that anyone could use and develop it",
        "although he expected nobody to use it",
        "unless large firms paid a fee to use it",
        "because his employers had refused to support it",
        "even if computers were not connected",
      ],
      "Web'i ücretsiz sunmasının amacı herkesin onu kullanıp geliştirebilmesidir: 'so that'.",
    ],
    [
      "Since the first website went online in 1991, ----.",
      [
        "the web has grown to include billions of pages",
        "Berners-Lee had worked at a laboratory in Switzerland",
        "most scientists would have used printed journals",
        "websites will be written in a new language",
        "computers were connected by telephone lines",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has grown'.",
    ],
    [
      "Unless workers in the caissons came up to the surface slowly, ----.",
      [
        "they could suffer a painful and dangerous illness",
        "the bridge would have been finished sooner",
        "most of them had been sailors before",
        "the river will flood the tunnel",
        "the towers were built of stone",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: kesonlardaki işçiler yavaşça yüzeye çıkmadıkça ağrılı ve tehlikeli bir hastalığa yakalanabilirdi.",
    ],
    [
      "The motion of the bridge was so dramatic ----.",
      [
        "that it was filmed by people on the shore",
        "because the wind was blowing at high speed",
        "although the bridge had been open for months",
        "while engineers argued about the cause",
        "unless the traffic stopped",
      ],
      "'so dramatic that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Engineers have found that when a structure is pushed repeatedly at its natural frequency, ----.",
      [
        "its movements can grow larger and larger",
        "it would have become stronger",
        "most of its parts had been replaced",
        "it will stop moving completely",
        "the wind was very light",
      ],
      "'when' ile genel bir bulgu anlatılır: bir yapı kendi doğal frekansında tekrar tekrar itildiğinde hareketleri giderek büyüyebilir.",
    ],
    [
      "So complex was the task of programming the machine ----.",
      [
        "that a single problem could take days to set up",
        "because it contained thousands of valves",
        "although the women had studied mathematics",
        "while the war was coming to an end",
        "unless the cables were removed",
      ],
      "Devrik 'So complex was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While men designed and built the hardware, ----.",
      [
        "it was women who worked out how to program it",
        "the machine filled a large room",
        "computers today are much smaller",
        "the army needed to calculate trajectories",
        "valves often failed",
      ],
      "'While' zıtlık bildirir: donanımı erkekler tasarlayıp yaparken onu nasıl programlayacağını bulanlar kadınlardı.",
    ],
    [
      "Once the dam had been completed, ----.",
      [
        "it supplied water and power to several states",
        "the river will be diverted again through new tunnels",
        "the workers would have gone home to their families",
        "concrete is made of cement, sand, gravel and water",
        "most of the canyon had already been flooded by the river",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: baraj birkaç eyalete su ve elektrik sağladı.",
    ],
    [
      "No sooner had the tunnel been opened ----.",
      [
        "than crowds paid to walk through it",
        "when the river had flooded the tunnel for the last time",
        "that the trains will use it within a few years",
        "before Brunel had designed the tunnelling shield",
        "so it was closed to the public for many years",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The shield allowed miners to dig safely beneath the river while bricklayers lined the tunnel behind them.",
      [
        "Kalkan, duvarcılar arkalarında tüneli örerken madencilerin nehrin altında güvenle kazmasını sağladı.",
        "Kalkan, madencilerin tünel yerine nehrin üzerinde sağlam bir köprü kurmasını sağladı.",
        "Duvarcılar, kalkanın önünde ilerleyerek madencilerden önce tüneli kazdı.",
        "Kalkan, nehrin suyunun tünelin içine girmesini her gün biraz daha kolaylaştırdı.",
        "Madenciler, duvarcılar tünelin tamamını ördükten sonra kazmaya başladı.",
      ],
      "'allowed miners to dig safely beneath the river' 'madencilerin nehrin altında güvenle kazmasını sağladı', 'while bricklayers lined the tunnel behind them' 'duvarcılar arkalarında tüneli örerken' demektir.",
    ],
    [
      "Lovelace thought that such an engine could some day write pieces of music.",
      [
        "Lovelace, böyle bir makinenin bir gün müzik besteleyebileceğini düşündü.",
        "Lovelace, makinenin müzik çalmak için yapıldığını kanıtladı.",
        "Lovelace, müziğin makinelerle hiçbir zaman ilişkilendirilemeyeceğini savundu.",
        "Lovelace, makineyi kullanarak bir senfoni besteledi.",
        "Lovelace, müzisyenlerin makineyi yapması gerektiğini önerdi.",
      ],
      "'thought that such an engine could some day' 'böyle bir makinenin bir gün … -ebileceğini düşündü', 'write pieces of music' 'müzik besteleyebileceğini' demektir.",
    ],
    [
      "Emily Roebling learned engineering so that she could pass her husband's instructions to the workers.",
      [
        "Emily Roebling, kocasının talimatlarını işçilere iletebilmek için mühendislik öğrendi.",
        "Emily Roebling, kocasının verdiği talimatları reddedebilmek için mühendislik öğrendi.",
        "Şantiyedeki işçiler, Emily Roebling'e mühendislik öğretmeyi kesinlikle reddetti.",
        "Emily Roebling, mühendislik öğrendikten sonra köprüyü baştan kendisi tasarladı.",
        "Emily Roebling'in hasta kocası, ona mühendislik öğrenmeyi kesinlikle yasakladı.",
      ],
      "'learned engineering' 'mühendislik öğrendi', 'so that she could pass her husband's instructions to the workers' 'kocasının talimatlarını işçilere iletebilmek için' demektir.",
    ],
    [
      "The bridge began to twist in a moderate wind until the deck tore apart and fell into the water.",
      [
        "Köprü orta şiddetteki bir rüzgârda, tabliye parçalanıp suya düşene kadar burulmaya başladı.",
        "Köprü çok güçlü bir fırtınada bile hiç hareket etmeden günlerce ayakta kaldı.",
        "Şiddetli rüzgâr, köprünün tabliyesini sudan kaldırıp karşı kıyıya taşıdı.",
        "Köprünün tabliyesi suya düştükten birkaç saat sonra rüzgâr esmeye başladı.",
        "Köprü, rüzgâr nedeniyle yavaşça nehrin karşı kıyısına kaydı.",
      ],
      "'began to twist in a moderate wind' 'orta şiddetteki bir rüzgârda burulmaya başladı', 'until the deck tore apart and fell into the water' 'tabliye parçalanıp suya düşene kadar' demektir.",
    ],
    [
      "The machine was programmed by connecting cables and setting thousands of switches by hand.",
      [
        "Makine, kablolar bağlanarak ve binlerce anahtar elle ayarlanarak programlanıyordu.",
        "Makine, hiçbir kablo ya da anahtar kullanılmadan kendi kendini programlıyordu.",
        "Makinedeki binlerce anahtar, onun programlanmasını tamamen imkânsız kılıyordu.",
        "Makine, yalnızca bir klavye ve ekran kullanılarak kolayca programlanabiliyordu.",
        "Makinedeki kablolar, binlerce anahtarı her gün otomatik olarak ayarlıyordu.",
      ],
      "'was programmed by connecting cables' 'kablolar bağlanarak programlanıyordu', 'and setting thousands of switches by hand' 've binlerce anahtar elle ayarlanarak' demektir.",
    ],
    [
      "Links allowed users to jump from one document to another stored on a different computer.",
      [
        "Bağlantılar, kullanıcıların bir belgeden farklı bir bilgisayarda saklanan başka bir belgeye geçmesini sağladı.",
        "Bağlantılar, kullanıcıların önemli belgeleri bilgisayarlardan yanlışlıkla silmesine yol açtı.",
        "Kullanıcılar, belgeler arasında geçiş yapmak için bilgisayarlarını değiştirmek zorundaydı.",
        "Belgeler, yalnızca aynı bilgisayarda saklandıklarında birbirine bağlanabiliyordu.",
        "Belgeler arasındaki bağlantılar, bilgisayarların birbirine zarar vermesine neden oldu.",
      ],
      "'Links allowed users to jump from one document to another' 'bağlantılar kullanıcıların bir belgeden başka bir belgeye geçmesini sağladı', 'stored on a different computer' 'farklı bir bilgisayarda saklanan' demektir.",
    ],
  ],
  trEn: [
    [
      "Thames Tüneli, gemi geçen bir nehrin altında yapılan ilk tüneldi.",
      [
        "The Thames Tunnel was the first tunnel built under a navigable river.",
        "The Thames Tunnel was the last tunnel ever built under the city of London.",
        "Ships were not allowed to use the river while the tunnel was being built.",
        "The Thames Tunnel was built above the river rather than under it.",
        "The Thames Tunnel was built under the sea between England and France.",
      ],
      "'gemi geçen bir nehrin altında yapılan ilk tüneldi' 'was the first tunnel built under a navigable river' karşılığıdır.",
    ],
    [
      "Babbage'ın makinesi, modern bilgisayarın birçok özelliğine sahipti.",
      [
        "Babbage's machine had many of the features of a modern computer.",
        "Babbage's machine was completely different from a modern computer.",
        "Modern computers were invented before Babbage's machine.",
        "Babbage's machine had no memory or processor.",
        "Babbage refused to compare his machine with a computer.",
      ],
      "'modern bilgisayarın birçok özelliğine sahipti' 'had many of the features of a modern computer' karşılığıdır.",
    ],
    [
      "Köprünün çöküşü, mühendislerin rüzgârın etkilerini daha dikkatli incelemesine yol açtı.",
      [
        "The collapse of the bridge led engineers to study the effects of wind more carefully.",
        "The collapse of the bridge was caused by a strong earthquake in the area.",
        "Engineers stopped building suspension bridges completely after the collapse.",
        "The wind had no effect at all on the movement of the bridge.",
        "The bridge was rebuilt in exactly the same way as before.",
      ],
      "'mühendislerin rüzgârın etkilerini daha dikkatli incelemesine yol açtı' 'led engineers to study the effects of wind more carefully' karşılığıdır.",
    ],
    [
      "İlk programcıların çoğu kadındı.",
      [
        "Most of the first programmers were women.",
        "None of the first programmers were women.",
        "The first programmers were all engineers.",
        "Women were not allowed to use computers.",
        "Most of the first computers were built by women.",
      ],
      "'ilk programcıların çoğu kadındı' 'most of the first programmers were women' karşılığıdır.",
    ],
    [
      "Berners-Lee, buluşu için patent almamaya karar verdi.",
      [
        "Berners-Lee decided not to take out a patent on his invention.",
        "Berners-Lee sold the patent on his invention.",
        "Berners-Lee's invention was patented by his employers.",
        "Berners-Lee refused to share his invention with anyone.",
        "Berners-Lee invented a new kind of patent.",
      ],
      "'patent almamaya karar verdi' 'decided not to take out a patent' karşılığıdır.",
    ],
    [
      "Baraj, Büyük Buhran sırasında binlerce işçiye iş sağladı.",
      [
        "The dam provided jobs for thousands of workers during the Great Depression.",
        "The dam was built only after the Great Depression had ended.",
        "Thousands of workers in the region lost their jobs because of the dam.",
        "The dam was built by machines without the help of any workers.",
        "The Great Depression was caused by the high cost of building the dam.",
      ],
      "'Büyük Buhran sırasında binlerce işçiye iş sağladı' 'provided jobs for thousands of workers during the Great Depression' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1869, the German-born engineer John Roebling began work on a bridge across the East River between Manhattan and Brooklyn, designed to be the longest suspension bridge in the world. Shortly afterwards, his foot was crushed in an accident at the site, and he died of tetanus. His son, Washington Roebling, took over the project. To build the foundations of the bridge's two great towers, workers laboured inside enormous wooden boxes called caissons, which were lowered onto the riverbed and pumped full of compressed air to keep out the water. Men who climbed back up to normal air pressure too fast often developed a mysterious illness, now called 'the bends', which brought agonising joint pain, paralysis and in some cases death. In 1872, Washington Roebling himself was struck down by it, and for the rest of the construction he was largely confined to a room overlooking the river, from which he watched the work through a telescope. His wife, Emily Warren Roebling, took on a central role. She studied mathematics, the strength of materials and cable construction, carried his instructions to the engineers, and dealt with politicians and suppliers. Many people came to believe that she was the real chief engineer. When the bridge opened in 1883, she was the first person to cross it by carriage.",
      questions: [
        [
          "According to the passage, the caissons were filled with compressed air in order to ----.",
          [
            "prevent the river water from entering",
            "help the workers breathe more easily",
            "make the boxes float to the surface",
            "cure decompression sickness",
            "heat the workers in winter",
          ],
          "Metne göre kesonlar suyu dışarıda tutmak için basınçlı havayla dolduruluyordu.",
        ],
        [
          "The writer mentions the telescope in order to show ----.",
          [
            "how Roebling kept watching the work despite being ill",
            "that he was more interested in astronomy than engineering",
            "how the two great towers were built of stone",
            "why the bridge took so many years to build",
            "that his wife had trained as an astronomer",
          ],
          "Odasından çalışmaları teleskopla izlemesi, hastalığına rağmen işi takip etmeyi nasıl sürdürdüğünü gösterir.",
        ],
        [
          "It can be inferred from the passage that Emily Warren Roebling ----.",
          [
            "did far more than she was officially credited with",
            "had designed the bridge before her husband was born",
            "had no interest at all in engineering or mathematics",
            "worked inside the caissons alongside the men",
            "opposed the building of the bridge from the start",
          ],
          "Pek çok kişinin onun gerçek baş mühendis olduğuna inanması, projede resmî olarak tanınandan çok daha büyük rol oynadığını gösterir.",
        ],
      ],
    },
    {
      text:
        "The Tacoma Narrows Bridge, completed in the summer of 1940, only two suspension bridges anywhere had a longer main span. To save money, it had been designed with an unusually narrow and shallow deck, which made it elegant but also very flexible. Even during construction, workers noticed that it moved up and down in light winds, and drivers nicknamed it 'Galloping Gertie'. Some people crossed it just for the thrill. On 7 November 1940, only four months after it opened, a steady wind of about sixty-five kilometres an hour began to make the deck twist from side to side. The twisting grew steadily more violent, and after about an hour a section of the deck tore away and fell into the water below. No person died; the only casualty was a pet dog trapped in an abandoned car. A camera recorded the final minutes, and the footage remains a standard lesson in engineering courses. At first, the failure was often explained as a simple case of resonance, but engineers now believe that a more complex process was involved, in which the twisting of the deck itself changed the way the wind flowed around it, feeding energy into the motion. The disaster led to the routine use of wind-tunnel tests in bridge design, and a new, much stiffer bridge opened on the same site in 1950.",
      questions: [
        [
          "According to the passage, the bridge was unusually flexible because ----.",
          [
            "its deck was made thin and narrow to save money",
            "it was built of wood rather than steel and concrete",
            "it had no cables to support its long deck",
            "the wind in the area was always very strong",
            "it was the longest bridge of any kind in the world",
          ],
          "Metne göre maliyeti azaltmak için alışılmadık derecede dar ve sığ bir tabliyeyle tasarlanmıştı.",
        ],
        [
          "The writer mentions the nickname 'Galloping Gertie' in order to show ----.",
          [
            "that its movement was obvious from the start",
            "who had designed the bridge and its towers",
            "why the bridge had been so cheap to build",
            "that the bridge was named after a famous horse",
            "how the dog in the car had died",
          ],
          "Sürücülerin köprüye bu lakabı takması, hareketinin baştan beri fark edildiğini gösterir.",
        ],
        [
          "It can be understood from the passage that engineers' explanation of the collapse ----.",
          [
            "now involves more than simple resonance",
            "has never changed in any way since 1940",
            "blames the people who were crossing the bridge",
            "is based on an earthquake that struck the region",
            "completely ignores the effect of the wind",
          ],
          "Metne göre başta basit rezonansla açıklanan çöküşün artık daha karmaşık bir süreçle açıklandığı belirtilir.",
        ],
      ],
    },
    {
      text:
        "In the early 1940s, American military planners needed to calculate firing tables, which told gunners how to aim their weapons under different conditions. The calculations were carried out by hundreds of women working with desk calculators, and each table could take weeks. To speed up the work, engineers at the University of Pennsylvania built ENIAC, one of the first general-purpose electronic computers. Completed in 1945, it contained around eighteen thousand vacuum tubes, weighed about thirty tonnes and filled a large room. The engineers who designed it were men, but six women, selected from among the human calculators, were given the task of working out how to program it. There were no programming languages or manuals; the women had to study the machine's wiring diagrams and learn how to set up each problem by connecting cables and setting thousands of switches by hand. They developed techniques that later became standard in programming, such as breaking problems into smaller parts. When ENIAC was demonstrated to the press in 1946, however, the women were not introduced, and some photographs were later published without their names, leading people to assume they were simply models. Their contribution was largely forgotten until researchers began to tell their story in the 1980s and 1990s.",
      questions: [
        [
          "According to the passage, ENIAC was built in order to ----.",
          [
            "speed up the calculation of firing tables",
            "replace all the engineers at the university",
            "send messages across the Atlantic",
            "train women as engineers",
            "design new weapons",
          ],
          "Metne göre işi hızlandırmak, yani atış tablolarının hesaplanmasını hızlandırmak için yapıldı.",
        ],
        [
          "The writer mentions that there were no programming languages or manuals in order to show ----.",
          [
            "how hard and original the women's task was",
            "that the machine was easy for anyone to use",
            "why all of the engineers were men",
            "how the thousands of vacuum tubes worked",
            "that the war had already ended by 1945",
          ],
          "Programlama dili ya da kılavuz bulunmaması, kadınların işinin ne kadar zor ve özgün olduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that the women's role ----.",
          [
            "was overlooked for many years",
            "was widely celebrated in 1946",
            "was limited to posing for photographs",
            "was taken over by the engineers",
            "was unknown even to the engineers",
          ],
          "Basına tanıtılmamaları ve katkılarının 1980'lere kadar büyük ölçüde unutulması, rollerinin uzun yıllar göz ardı edildiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1989, Tim Berners-Lee, a British computer scientist working at CERN, the European particle physics laboratory near Geneva, wrote a proposal for a system to help scientists share information. CERN employed thousands of researchers who used many different types of computer, and finding and exchanging documents was difficult. Berners-Lee's idea was to combine the internet, which already connected computers around the world, with 'hypertext', text containing links that allow the reader to jump from one document to another. His manager scribbled a short, encouraging note on it and let him go ahead. Within about eighteen months, Berners-Lee had produced the three basic elements of what he called the World Wide Web: a language for writing web pages, a system of addresses for finding them, and a set of rules for transferring them between computers. He also wrote the first web browser and set up the first website. At first, the web was used mainly by physicists, but its use spread rapidly after 1993, when CERN agreed to make the underlying technology available free of charge. Berners-Lee chose not to patent his invention, believing that it should be open to everyone. He later founded an organisation to develop common standards for the web, and he has continued to campaign for it to remain open and accessible.",
      questions: [
        [
          "According to the passage, Berners-Lee developed his system because ----.",
          [
            "sharing documents at CERN was hard",
            "the internet did not yet exist in any form",
            "his supervisor ordered him to build it",
            "he wanted to sell it to large companies",
            "physicists at CERN had stopped using computers",
          ],
          "Metne göre CERN'de pek çok farklı bilgisayar kullanılıyordu ve belge bulup paylaşmak zordu.",
        ],
        [
          "The writer mentions CERN's decision of 1993 in order to explain ----.",
          [
            "why the web spread so fast after that",
            "how the first web browser was written",
            "why the proposal was not accepted at first",
            "how physicists use computers in their research",
            "why Berners-Lee decided to leave CERN",
          ],
          "CERN'in teknolojiyi ücretsiz sunmayı kabul etmesi, web'in o tarihten sonra neden hızla yayıldığını açıklar.",
        ],
        [
          "It can be inferred from the passage that Berners-Lee's attitude towards the web is that ----.",
          [
            "it should be freely available to all",
            "it should be controlled by a single company",
            "it should be used only by scientists",
            "it was a failure",
            "it should be patented",
          ],
          "Patent almaması ve web'in açık kalması için kampanya yürütmesi, herkese serbestçe açık olması gerektiğine inandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In the early twentieth century, the Colorado River flooded farmland in the south-western United States in spring and often ran almost dry in late summer. In 1931, during the Great Depression, work began on an enormous dam in the Black Canyon on the border between Nevada and Arizona. Thousands of unemployed men came to the remote desert site looking for work, and a new town, Boulder City, was built to house them. Before the dam could be built, the river had to be diverted through four huge tunnels cut through the canyon walls. Workers known as 'high scalers' hung from ropes on the cliffs, using drills and explosives to remove loose rock. Temperatures in summer often exceeded forty-five degrees, and more than a hundred workers died during the construction. One of the greatest engineering challenges was the concrete: if the dam had been poured in a single block, the heat produced as the concrete set would have taken more than a century to escape, causing it to crack. Engineers solved the problem by pouring it in a series of separate blocks and cooling them with cold water pumped through pipes. Completed in 1936, two years ahead of schedule, the dam created a vast reservoir, Lake Mead, and has supplied water and electricity to millions of people ever since.",
      questions: [
        [
          "According to the passage, the river had to be diverted ----.",
          [
            "so that the dam could be built",
            "to provide drinking water for Boulder City",
            "because it had completely run dry that summer",
            "to cool the concrete as it was poured",
            "to create Lake Mead behind the canyon",
          ],
          "Metne göre baraj inşa edilmeden önce nehrin dört dev tünelden saptırılması gerekiyordu.",
        ],
        [
          "The writer explains the problem of the concrete in order to show ----.",
          [
            "one of the main technical problems they faced",
            "why the dam was completed later than planned",
            "how the high scalers worked on the cliffs",
            "that concrete is not normally used in dams",
            "why the river flooded the farmland every spring",
          ],
          "Betonun ısısının yüz yıldan fazla sürede dağılacağı sorunu, mühendislerin aşmak zorunda olduğu büyük teknik güçlüklerden birini gösterir.",
        ],
        [
          "It can be understood from the passage that the dam was built at a time when ----.",
          [
            "many people were desperate for work",
            "there was no need for electricity",
            "the region had plenty of water all year",
            "most workers lived in large cities nearby",
            "the economy was growing rapidly",
          ],
          "İnşaatın Büyük Buhran sırasında başlaması ve binlerce işsizin iş aramak için gelmesi, pek çok insanın işe muhtaç olduğu bir dönem olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In a suspension bridge, the road deck hangs from vertical cables attached to two main cables. ---- This design allows suspension bridges to span much greater distances than other types.",
      [
        "The main cables run over tall towers and are anchored at each end.",
        "Many steel bridges are painted regularly to protect them from rust.",
        "Some large bridges carry both trains and cars on separate levels.",
        "Bridges of wood and stone have been built since ancient times.",
        "Traffic on large bridges is often heavy during the rush hour.",
      ],
      "Boşluktan sonra 'This design' ile asma köprülerin daha uzun açıklıkları geçebildiği söylenir; boşluğa ana kabloların yüksek kulelerin üzerinden geçip uçlarda zemine sabitlendiğini anlatan cümle gelmelidir.",
    ],
    [
      "A cantilever is a beam supported at only one end. ---- The famous Forth Bridge in Scotland uses this principle on a massive scale.",
      [
        "Joining two cantilevers in the middle lets engineers cross wide gaps.",
        "Scotland is famous for its castles, mountains and lakes.",
        "Many great railway bridges were built during the nineteenth century.",
        "Some beams are made of wood, while others are made of steel.",
        "Dozens of trains cross the bridge every day.",
      ],
      "Boşluktan sonra Forth Köprüsü'nün bu ilkeyi büyük ölçekte kullandığı söylenir; boşluğa iki yandan konsollar uzatılıp ortada birleştirilerek geniş açıklıklar geçilebildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Some buildings in earthquake zones rest on flexible pads made of rubber and steel. ---- As a result, the building above moves much less and is less likely to be damaged.",
      [
        "The pads absorb much of the ground's movement.",
        "Earthquakes are common in many parts of the world, especially near the Pacific.",
        "Natural rubber comes from the sap of certain tropical trees.",
        "Many people in large cities live in tall apartment buildings.",
        "Steel is stronger and more flexible than ordinary iron.",
      ],
      "Boşluktan sonra 'As a result' ile üstteki binanın daha az hareket ettiği söylenir; boşluğa bu yastıkların deprem sırasında zemin hareketinin büyük bölümünü emdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Many very tall buildings contain a huge weight hanging near the top. ---- This reduces the swaying that people on the upper floors would otherwise feel.",
      [
        "As wind pushes the building one way, the weight swings the other.",
        "Some skyscrapers have restaurants and viewing areas on the top floor.",
        "Tall buildings need many powerful and fast lifts.",
        "Glass is often used on the outside of modern office buildings.",
        "Many cities have strict rules about the height of buildings.",
      ],
      "Boşluktan sonra 'This' ile üst katlardaki sallanmanın azaldığı söylenir; boşluğa rüzgâr binayı bir yöne ittiğinde ağırlığın öbür yöne salınıp hareketi dengelediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Canal locks allow boats to move between stretches of water at different levels. ---- The gates at the other end are then opened, and the boat continues on its way.",
      [
        "A boat enters a chamber, and water is let in or out to change its level.",
        "Many canals in Britain were built during the Industrial Revolution.",
        "Some people live on narrow boats on the canals all year round.",
        "Canals were once used to transport coal and other heavy goods.",
        "Walking along canals is a popular activity at weekends.",
      ],
      "Boşluktan sonra 'then' ile öbür uçtaki kapakların açıldığı söylenir; boşluğa teknenin bölmeye girip kapakların kapandığını ve suyun seviye eşitlenene kadar alınıp boşaltıldığını anlatan cümle gelmelidir.",
    ],
    [
      "In 1965, the engineer Gordon Moore forecast that chips would hold twice as many transistors about every two years. ---- In recent years, however, the pace has slowed as transistors approach the size of individual atoms.",
      [
        "For decades, this 'law' proved remarkably accurate.",
        "Computers are used in almost every office and school today.",
        "Many people now own several different electronic devices.",
        "Chips are made in specially cleaned factories called fabs.",
        "Moore later helped to found a large technology company.",
      ],
      "Boşluktan sonra 'however' ile hızın son yıllarda yavaşladığı söylenir; boşluğa bu tahminin onlarca yıl boyunca dikkat çekici biçimde doğru çıktığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Early lifts were considered dangerous because the rope could break.",
        "In 1854, Elisha Otis demonstrated a safety device at an exhibition in New York.",
        "Standing on a raised platform, he ordered the rope to be cut, and the platform stopped after falling only a short distance.",
        "Exhibitions of new machines were popular in the nineteenth century.",
        "His invention made tall buildings practical and helped to make skyscrapers possible.",
      ],
      odd: 3,
      why: "Parça Otis'in güvenli asansör buluşunu anlatır. Yeni makinelerin sergilendiği fuarların on dokuzuncu yüzyılda popüler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A funicular is a railway that climbs steep slopes using two cars connected by a cable.",
        "As one car goes up, the other comes down, so that they balance each other.",
        "Many tourists enjoy taking photographs of mountains.",
        "This means that relatively little energy is needed to move them.",
        "Funiculars are often found in hilly cities and mountain resorts.",
      ],
      odd: 2,
      why: "Parça füniküleri anlatır. Pek çok turistin dağların fotoğrafını çekmekten hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Computers store all information as patterns of ones and zeros.",
        "This system, called binary, matches the two states of an electronic switch: on and off.",
        "Even images, sounds and videos are converted into long sequences of these digits.",
        "Many children learn to count using their fingers.",
        "Groups of eight binary digits are known as bytes.",
      ],
      odd: 3,
      why: "Parça bilgisayarların ikili sistemini anlatır. Pek çok çocuğun parmaklarıyla saymayı öğrendiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many people use the same simple password for several websites.",
        "If one website is attacked, criminals may then be able to access the others.",
        "Experts recommend using long, unique passwords for each account.",
        "Password managers can store them securely.",
        "Many websites now sell clothes and shoes.",
      ],
      odd: 4,
      why: "Parça parola güvenliğini anlatır. Pek çok web sitesinin artık giysi ve ayakkabı sattığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A truss is a structure made of beams joined together to form triangles.",
        "Triangles are very strong because their shape cannot change without changing the length of a side.",
        "Trusses are therefore used in roofs, bridges and cranes.",
        "Many houses have tiled roofs.",
        "They allow strong structures to be built using relatively little material.",
      ],
      odd: 3,
      why: "Parça kafes kirişleri anlatır. Pek çok evin kiremitli çatısı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Every large dam has a spillway that allows excess water to flow past it safely.",
        "Without one, floodwater could rise over the top of the dam and damage it.",
        "Many dams also produce electricity.",
        "Some spillways are huge channels, while others are shaped like giant funnels.",
        "Engineers design them to cope with the largest floods expected in the area.",
      ],
      odd: 2,
      why: "Parça barajların taşma savaklarını anlatır. Pek çok barajın elektrik de ürettiğini söyleyen III. cümle konu dışıdır.",
    },
  ],
};
