import type { YokdilDeneme } from "./types";

export const FEN_10: YokdilDeneme = {
  no: 10,
  field: "fen",
  vocab: [
    [
      "Deep-sea mining could ---- fragile ecosystems that scientists have barely begun to study.",
      ["damage", "protect", "create", "measure", "explore"],
      "Derin deniz madenciliğinin hassas ekosistemlere 'zarar verebileceği' (damage) anlatılır; 'protect' anlamın tersidir.",
    ],
    [
      "Although each ant has a very simple brain, the colony as a whole can solve ---- problems.",
      ["complex", "minor", "imaginary", "simple", "familiar"],
      "'Although each ant has a very simple brain' zıtlığı, koloninin 'karmaşık' (complex) sorunları çözebildiğini gösterir.",
    ],
    [
      "Powerful solar storms can ---- satellites and power grids on Earth.",
      ["disrupt", "repair", "support", "illuminate", "launch"],
      "Güçlü güneş fırtınalarının uyduları ve elektrik şebekelerini 'aksatabileceği' (disrupt) anlatılır.",
    ],
    [
      "In many farming regions, groundwater is being ---- faster than it can be replaced by rain.",
      ["used up", "set up", "brought up", "made up", "looked up"],
      "Yeraltı suyunun yağmurla yenilenmesinden daha hızlı 'tüketildiği' (used up) anlatılır.",
    ],
    [
      "Gravitational waves are so ---- that detecting them requires instruments of extraordinary precision.",
      ["faint", "loud", "bright", "obvious", "frequent"],
      "Olağanüstü hassas aletler gerektiren dalgalar çok 'zayıf, belli belirsiz'dir (faint).",
    ],
    [
      "The first laser was built in 1960, but few people at the time could ---- how widely it would be used.",
      ["foresee", "remember", "regret", "deny", "ignore"],
      "O dönemde lazerin ne kadar yaygın kullanılacağını pek az kişinin 'öngörebildiği' (foresee) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the laser was invented, scientists ---- the theory behind it for more than forty years.",
      ["had known", "have known", "know", "will know", "are knowing"],
      "Lazerin icadından önceki bir süre boyunca geçerli olan durum Past Perfect ile anlatılır: 'had known'.",
    ],
    [
      "If groundwater ---- more carefully, many wells would not have run dry.",
      ["had been managed", "was managed", "is managed", "would be managed", "has been managed"],
      "Ana cümle 'would not have run dry' olduğundan Type 3 koşul gerekir: 'had been managed'.",
    ],
    [
      "Ants follow chemical trails ---- strength depends on how many ants have used the path.",
      ["whose", "which", "who", "where", "that"],
      "İzlerin gücünden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- their enormous power, gravitational waves are almost impossible to detect when they reach the Earth.",
      ["Despite", "Because of", "Thanks to", "Owing to", "Due to"],
      "Muazzam güçlerine 'rağmen' tespit edilmelerinin neredeyse imkânsız olması zıtlıktır: 'Despite'.",
    ],
    [
      "Scientists still do not know exactly when the next reversal of the Earth's magnetic field ----.",
      ["will occur", "will it occur", "does it occur", "occurring", "it will occur"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'when the next reversal … will occur'.",
    ],
    [
      "Not until 2015 ---- gravitational waves directly for the first time.",
      ["did scientists detect", "scientists detected", "scientists did detect", "detected scientists", "had scientists detected"],
      "'Not until …' cümle başında devrik yapı gerektirir: 'did scientists detect'.",
    ],
    [
      "Many mining companies are interested in ---- metals from the ocean floor.",
      ["extracting", "to extract", "extract", "extracted", "to extracting"],
      "'be interested in' edattan sonra '-ing' alır: 'interested in extracting'.",
    ],
    [
      "The light ---- by a laser is highly concentrated and travels in a narrow beam.",
      ["produced", "producing", "which produces", "to produce", "has produced"],
      "Lazer tarafından üretilen ışık edilgen anlamlı geçmiş ortaçla nitelenir: 'produced'.",
    ],
    [
      "Environmental groups have demanded that deep-sea mining ---- until its effects are better understood.",
      ["be postponed", "is postponed", "was postponed", "will be postponed", "postponing"],
      "'demand that' sonrası subjunctive ve edilgen gerekir: 'be postponed'.",
    ],
    [
      "Solar storms can cause beautiful auroras, ---- are usually seen only near the poles.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra 'auroras' sözcüğüne atıf yapan ve 'are … seen' yükleminin öznesi olan 'which' gerekir.",
    ],
    [
      "---- groundwater is hidden underground, its depletion often goes unnoticed for many years.",
      ["Because", "Although", "Unless", "Whereas", "Even if"],
      "Yeraltı suyunun gizli olması tükenmesinin fark edilmemesinin nedenidir: 'Because'.",
    ],
    [
      "The detectors are sensitive enough ---- changes smaller than the width of a proton.",
      ["to measure", "measuring", "measure", "measured", "to measuring"],
      "'sensitive enough to do' kalıbı mastar ister.",
    ],
    [
      "The solar storm of 1859 was ---- powerful that telegraph systems around the world failed.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (powerful) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By the time the new detector is completed, scientists ---- hundreds of gravitational wave events.",
      ["will have recorded", "have recorded", "recorded", "had recorded", "record"],
      "Gelecekteki bir ana (is completed) kadar tamamlanmış olacak eylem Future Perfect ile anlatılır.",
    ],
  ],
  cloze: [
    {
      text:
        "The basic principle behind the laser was described by Albert Einstein in 1917, but the first working laser was not built until 1960, {1} the American physicist Theodore Maiman used a ruby crystal to produce an intense beam of red light. Unlike ordinary light, which spreads out in all directions, laser light is concentrated in a narrow beam of a single colour, {2} can travel long distances without spreading. At first, the laser was sometimes described as 'a solution looking for a problem', {3} few people could imagine how it would be used. Today, lasers are everywhere. They read barcodes in supermarkets, transmit data through fibre-optic cables and are used in eye surgery. {4}, they allow scientists to measure distances with extraordinary precision, {5} the distance between the Earth and the Moon.",
      blanks: [
        [
          "(21) ----",
          ["when", "which", "where", "although", "unless"],
          "İlk lazerin yapıldığı 1960 yılı için zaman bildiren 'when' gerekir.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'a narrow beam' ifadesine atıf yapan ve 'can travel' yükleminin öznesi olan 'which' gerekir.",
        ],
        [
          "(23) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Lazerin 'sorun arayan bir çözüm' olarak tanımlanmasının nedeni kullanım alanlarının hayal edilememesidir: 'because'.",
        ],
        [
          "(24) ----",
          ["In addition", "However", "Instead", "Otherwise", "In contrast"],
          "Lazerlerin bir başka kullanım alanı eklenir: 'In addition'.",
        ],
        [
          "(25) ----",
          ["including", "except", "instead of", "despite", "unlike"],
          "Dünya ile Ay arasındaki mesafe ölçülen mesafelere bir örnektir: 'including'.",
        ],
      ],
    },
    {
      text:
        "The Earth's magnetic field, generated by the movement of molten iron in the planet's outer core, protects life by deflecting harmful particles from the Sun. Surprisingly, this field is not permanent. Evidence preserved in volcanic rocks shows that the north and south magnetic poles have swapped places hundreds of times over the planet's history. When lava cools, tiny magnetic minerals in it line up with the Earth's field {1} it is at that moment, creating a permanent record. These reversals occur at irregular intervals, {2} the last one took place about 780,000 years ago. Some scientists have suggested that the weakening of the field over the past two centuries {3} indicate that another reversal is approaching. {4}, a reversal would take thousands of years, and there is no evidence that previous reversals caused mass extinctions. Nevertheless, a weaker field could expose satellites and power grids {5} more radiation.",
      blanks: [
        [
          "(26) ----",
          ["as", "unless", "although", "so that", "even if"],
          "Mineraller alanın 'o anki hâliyle' hizalanır: 'as it is at that moment'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "because", "so that"],
          "Tersinmelerin düzensiz aralıklarla olması ve sonuncusunun ne zaman yaşandığı birbirine eklenen bilgilerdir: 'and'.",
        ],
        [
          "(28) ----",
          ["may", "must not", "need not", "had better", "would rather"],
          "Bilim insanlarının 'öne sürdüğü' olasılık bildiren yardımcı fiil gerekir: 'may indicate'.",
        ],
        [
          "(29) ----",
          ["However", "Therefore", "Similarly", "For instance", "As a result"],
          "Yaklaşan tersinme kaygısından sonra rahatlatıcı karşıt bir bilgi verilir: 'However'.",
        ],
        [
          "(30) ----",
          ["to", "from", "with", "by", "for"],
          "'expose something to something' kalıbı 'to' edatını ister.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the deep ocean floor contains valuable metals such as cobalt and nickel, ----.",
      [
        "scientists warn that mining could cause lasting damage to marine life",
        "these metals are used in batteries for electric vehicles",
        "the deep ocean is one of the least explored places on Earth",
        "the metals are found in potato-sized rocks called nodules",
        "several companies have applied for permission to mine",
      ],
      "'Although' zıtlık ister: okyanus tabanında değerli metaller olsa da bilim insanları madenciliğin kalıcı zarar verebileceği konusunda uyarır.",
    ],
    [
      "Many biologists believe that ant colonies ----.",
      [
        "can be understood as a kind of 'superorganism'",
        "although each ant lives for only a few months",
        "which are found on every continent except Antarctica",
        "unless the queen produces enough workers",
        "so that the ants could have found food faster",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'can be understood as …' cümleyi tamamlar.",
    ],
    [
      "If a solar storm as strong as the one in 1859 struck today, ----.",
      [
        "it could cause widespread damage to electrical and communication systems",
        "the storm was first observed by a British astronomer",
        "telegraph operators received electric shocks from their equipment",
        "scientists will develop better methods of prediction",
        "auroras were seen as far south as the Caribbean",
      ],
      "Type 2 koşul cümlesi 'could + V1' ile tamamlanır.",
    ],
    [
      "While surface water can be seen and measured easily, ----.",
      [
        "the depletion of groundwater often goes unnoticed for years",
        "rivers and lakes provide water for many large cities",
        "rainfall varies greatly from one season to another",
        "farmers use large amounts of water to grow crops",
        "most of the Earth's fresh water is frozen in ice",
      ],
      "'While' iki karşıt durumu bağlar: yüzey suyu kolay ölçülürken yeraltı suyunun tükenmesi yıllarca fark edilmez.",
    ],
    [
      "Scientists built detectors several kilometres long ----.",
      [
        "in order to measure the tiny effects of gravitational waves",
        "which had been predicted by Newton in the seventeenth century",
        "although gravitational waves travel at the speed of light",
        "because black holes are located very far from the Earth",
        "unless the waves were produced by colliding stars",
      ],
      "Kilometrelerce uzunlukta dedektörlerin amacı kütleçekim dalgalarının küçük etkilerini ölçmektir: 'in order to'.",
    ],
    [
      "Unless groundwater use is reduced, ----.",
      [
        "many wells in the region may run dry",
        "farmers had dug wells by hand in the past",
        "rain falls mainly during the winter months",
        "water is pumped from deep underground",
        "many crops need a lot of water",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: bölgedeki pek çok kuyu kuruyabilir.",
    ],
    [
      "Since gravitational waves were first detected in 2015, ----.",
      [
        "scientists have observed dozens of collisions between black holes",
        "Einstein had predicted their existence a century earlier",
        "three physicists were awarded the Nobel Prize",
        "new detectors will be built in space",
        "most astronomers studied light from distant stars",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have observed'.",
    ],
    [
      "Even though each ant follows only a few simple rules, ----.",
      [
        "the colony can build complex nests and find efficient routes to food",
        "ants are among the most numerous insects on Earth",
        "worker ants are usually female",
        "some species of ants can carry heavy objects",
        "ants communicate using chemical signals",
      ],
      "'Even though' beklenmedik bir sonuç ister: her karınca basit kurallar izlese de koloni karmaşık yuvalar inşa edebilir.",
    ],
    [
      "The more groundwater is pumped from an aquifer, ----.",
      [
        "the further the water table falls",
        "because farmers need water for crops",
        "although it rains in winter",
        "which is common in dry regions",
        "since wells are very deep",
      ],
      "'The more …, the further …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As technology has become more dependent on satellites, ----.",
      [
        "the risks posed by solar storms have increased",
        "most communication had used telegraph wires",
        "satellites orbit the Earth at high speeds",
        "the Sun is a very large star",
        "many people use their phones for navigation",
      ],
      "'As' paralel bir değişim bildirir: teknoloji uydulara daha bağımlı hâle geldikçe güneş fırtınalarının riskleri arttı.",
    ],
    [
      "No sooner had the detectors recorded the signal ----.",
      [
        "than scientists around the world began analysing the data",
        "when the black holes had collided",
        "because the signal was very strong",
        "so the team checked the instruments",
        "although it lasted only a fraction of a second",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Very little is known about the creatures that live on the deep ocean floor.",
      [
        "Derin okyanus tabanında yaşayan canlılar hakkında çok az şey bilinmektedir.",
        "Derin okyanus tabanında yaşayan canlılar hakkında her şey bilinmektedir.",
        "Derin okyanus tabanında hiçbir canlı yaşamamaktadır.",
        "Okyanus tabanındaki canlılar, yüzeydeki canlılardan daha iyi bilinmektedir.",
        "Derin okyanus tabanı, canlıların yaşamı için en uygun yerdir.",
      ],
      "'Very little is known about' '… hakkında çok az şey bilinmektedir' demektir.",
    ],
    [
      "Ants that find food leave a chemical trail that other ants can follow back to the source.",
      [
        "Yiyecek bulan karıncalar, diğer karıncaların kaynağa geri dönerken izleyebileceği kimyasal bir iz bırakır.",
        "Yiyecek bulan karıncalar, diğer karıncaların kaynağa ulaşmasını engellemek için izlerini siler.",
        "Karıncalar, yiyecek bulmak için diğer karıncaların bıraktığı izleri asla izlemez.",
        "Kimyasal izler, karıncaların yiyecekleri saklamasına yardımcı olur.",
        "Diğer karıncalar, yiyecek kaynağını yalnızca görerek bulur.",
      ],
      "'leave a chemical trail that other ants can follow back to the source' 'diğer karıncaların kaynağa geri dönerken izleyebileceği kimyasal bir iz bırakır' demektir.",
    ],
    [
      "A major solar storm could knock out power grids and leave millions of people without electricity for weeks.",
      [
        "Büyük bir güneş fırtınası elektrik şebekelerini çökertebilir ve milyonlarca insanı haftalarca elektriksiz bırakabilir.",
        "Büyük bir güneş fırtınası elektrik şebekelerine daha fazla enerji sağlayabilir.",
        "Elektrik şebekeleri, güneş fırtınalarına karşı tamamen korunmaktadır.",
        "Güneş fırtınaları yalnızca birkaç dakika süren elektrik kesintilerine neden olur.",
        "Milyonlarca insan, güneş fırtınası sırasında elektrik üretir.",
      ],
      "'could knock out power grids and leave millions … without electricity for weeks' 'elektrik şebekelerini çökertebilir ve milyonlarca insanı haftalarca elektriksiz bırakabilir' demektir.",
    ],
    [
      "Aquifers that took thousands of years to fill can be emptied within a few decades.",
      [
        "Dolması binlerce yıl süren akiferler birkaç on yıl içinde boşaltılabilir.",
        "Akiferler, boşaltıldıktan sonra birkaç yıl içinde yeniden dolar.",
        "Akiferlerin dolması yalnızca birkaç on yıl sürer.",
        "Binlerce yıllık akiferler hiçbir zaman boşaltılamaz.",
        "Akiferler, birkaç on yılda bir yağmurla tamamen dolar.",
      ],
      "'that took thousands of years to fill can be emptied within a few decades' 'dolması binlerce yıl süren … birkaç on yıl içinde boşaltılabilir' demektir.",
    ],
    [
      "The signal detected in 2015 was produced by two black holes that collided more than a billion years ago.",
      [
        "2015'te tespit edilen sinyal, bir milyar yıldan uzun süre önce çarpışan iki kara delik tarafından üretilmişti.",
        "2015'te iki kara delik çarpıştı ve sinyal aynı gün Dünya'ya ulaştı.",
        "2015'te tespit edilen sinyal, Dünya'daki bir deneyden kaynaklanıyordu.",
        "İki kara delik, sinyal tespit edildikten bir milyar yıl sonra çarpışacak.",
        "Kara delikler, 2015'teki sinyali tespit etmek için kullanıldı.",
      ],
      "'was produced by two black holes that collided more than a billion years ago' 'bir milyar yıldan uzun süre önce çarpışan iki kara delik tarafından üretilmişti' demektir.",
    ],
    [
      "Lasers are now so common that most people use devices containing them every day without realising it.",
      [
        "Lazerler artık o kadar yaygın ki çoğu insan farkında olmadan her gün lazer içeren cihazlar kullanıyor.",
        "Lazerler o kadar nadir ki çoğu insan hayatında hiç lazer görmemiştir.",
        "Çoğu insan, lazer içeren cihazları kullanmaktan kaçınır.",
        "Lazer içeren cihazlar yalnızca bilim insanları tarafından kullanılır.",
        "İnsanlar, lazerlerin her gün kullanıldığının farkındadır.",
      ],
      "'so common that most people use devices containing them every day without realising it' 'o kadar yaygın ki çoğu insan farkında olmadan her gün … kullanıyor' demektir.",
    ],
  ],
  trEn: [
    [
      "Derin deniz madenciliği, okyanus tabanındaki ekosistemleri kalıcı olarak tahrip edebilir.",
      [
        "Deep-sea mining could permanently destroy ecosystems on the ocean floor.",
        "Deep-sea mining could help ecosystems on the ocean floor to grow.",
        "Ecosystems on the ocean floor are not affected by mining at all.",
        "Deep-sea mining is the only way to protect the ocean floor.",
        "Ocean floor ecosystems were created by mining companies.",
      ],
      "'kalıcı olarak tahrip edebilir' 'could permanently destroy' karşılığıdır.",
    ],
    [
      "Karınca kolonileri, merkezi bir lider olmadan karmaşık görevleri yerine getirebilir.",
      [
        "Ant colonies can carry out complex tasks without a central leader.",
        "Ant colonies can carry out complex tasks only under the control of a leader.",
        "A central leader is needed to keep ant colonies alive.",
        "Ant colonies are unable to perform any complex tasks.",
        "Each ant in a colony acts as a leader.",
      ],
      "'merkezi bir lider olmadan' 'without a central leader', 'karmaşık görevleri yerine getirebilir' 'can carry out complex tasks' karşılığıdır.",
    ],
    [
      "Güneş fırtınaları, kutuplara yakın bölgelerde kuzey ışıklarına neden olur.",
      [
        "Solar storms cause auroras in regions close to the poles.",
        "Solar storms prevent auroras from appearing near the poles.",
        "Auroras cause solar storms in regions close to the poles.",
        "Solar storms occur only in tropical regions.",
        "The poles are protected from all solar activity.",
      ],
      "'kutuplara yakın bölgelerde kuzey ışıklarına neden olur' 'cause auroras in regions close to the poles' karşılığıdır.",
    ],
    [
      "Yeraltı suyu, dünyadaki sulama suyunun önemli bir bölümünü sağlar.",
      [
        "Groundwater provides a significant part of the world's irrigation water.",
        "Groundwater provides only a tiny part of the world's irrigation water.",
        "Irrigation water is used to fill underground aquifers.",
        "Most of the world's groundwater is used for drinking only.",
        "Groundwater is too salty to be used for irrigation.",
      ],
      "'önemli bir bölümünü sağlar' 'provides a significant part of' karşılığıdır.",
    ],
    [
      "Einstein, kütleçekim dalgalarının varlığını yaklaşık yüz yıl önce öngörmüştü.",
      [
        "Einstein had predicted the existence of gravitational waves about a hundred years earlier.",
        "Einstein had proved that gravitational waves do not exist.",
        "Gravitational waves were discovered before Einstein was born.",
        "Einstein detected gravitational waves with a laser.",
        "Einstein predicted that gravitational waves would never be detected.",
      ],
      "'varlığını … öngörmüştü' 'had predicted the existence of' karşılığıdır.",
    ],
    [
      "Dünya'nın manyetik alanı, canlıları Güneş'ten gelen zararlı parçacıklardan korur.",
      [
        "The Earth's magnetic field protects living things from harmful particles from the Sun.",
        "The Earth's magnetic field attracts harmful particles from the Sun.",
        "Harmful particles from the Sun create the Earth's magnetic field.",
        "Living things produce the Earth's magnetic field.",
        "The Sun is protected from the Earth's magnetic field.",
      ],
      "'zararlı parçacıklardan korur' 'protects … from harmful particles' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Large areas of the deep ocean floor are covered with potato-sized lumps called polymetallic nodules, which contain valuable metals such as cobalt, nickel and manganese. As demand for these metals grows, particularly for batteries in electric vehicles, several companies are preparing to mine the nodules using machines that would collect them from depths of four to six kilometres. Supporters argue that deep-sea mining could reduce pressure on land-based mines, which often damage forests and affect local communities. However, many scientists urge caution. The deep sea is home to unique species, many of which have not yet been described, and the nodules themselves grow extremely slowly, taking millions of years to form. Mining could also create plumes of sediment that spread over wide areas and smother marine life.",
      questions: [
        [
          "According to the passage, polymetallic nodules ----.",
          [
            "contain metals that are in growing demand for batteries",
            "are found mainly in shallow coastal waters",
            "form quickly and are easily replaced",
            "are made entirely of gold and silver",
            "have already been mined for many decades",
          ],
          "Nodüller, özellikle elektrikli araç bataryaları için talebi artan kobalt, nikel ve manganez içerir.",
        ],
        [
          "Supporters believe that deep-sea mining could ----.",
          [
            "reduce the pressure on mines located on land",
            "create new habitats for deep-sea species",
            "increase the number of forests on land",
            "make electric vehicles unnecessary",
            "help nodules grow more quickly",
          ],
          "Destekçiler derin deniz madenciliğinin karadaki madenler üzerindeki baskıyı azaltabileceğini savunur.",
        ],
        [
          "One concern raised by scientists is that ----.",
          [
            "mining could produce sediment plumes that harm marine life",
            "the nodules contain too few useful metals",
            "the deep sea has already been fully explored",
            "machines cannot operate at great depths",
            "land-based mines are more harmful than deep-sea mining",
          ],
          "Madencilik geniş alanlara yayılan ve deniz yaşamını boğan tortu bulutları oluşturabilir.",
        ],
      ],
    },
    {
      text:
        "An individual ant has a tiny brain and follows a small number of simple rules, yet ant colonies are capable of remarkable collective achievements. They build complex nests with ventilation systems, divide labour among different groups of workers and find efficient routes to food sources. Much of this coordination depends on pheromones, chemical signals that ants leave on the ground. When an ant finds food, it lays a trail on its way back to the nest; other ants follow the trail and reinforce it, so that the shortest routes quickly become the strongest. Because no single ant directs the colony, biologists describe this as 'swarm intelligence'. Computer scientists have borrowed these principles to design algorithms that solve problems such as finding the most efficient delivery routes.",
      questions: [
        [
          "According to the passage, ant colonies coordinate their activities largely through ----.",
          [
            "chemical signals left on the ground",
            "instructions given by the queen",
            "sounds produced by the workers",
            "visual signals such as colours",
            "the movements of the sun",
          ],
          "Koordinasyonun büyük kısmı karıncaların zemine bıraktığı kimyasal sinyallere (feromonlar) dayanır.",
        ],
        [
          "The shortest routes to food become the strongest because ----.",
          [
            "more ants follow and reinforce them",
            "the queen chooses them for the colony",
            "they are marked with a special colour",
            "longer routes are blocked by soldiers",
            "ants dislike walking long distances",
          ],
          "Diğer karıncalar izi takip edip güçlendirdikçe en kısa yollar hızla en güçlü hâle gelir.",
        ],
        [
          "Computer scientists are interested in ant behaviour because ----.",
          [
            "its principles can help solve problems such as route planning",
            "ants can be trained to use computers",
            "ant colonies are controlled by a single leader",
            "ants damage computer cables",
            "it shows that computers are unnecessary",
          ],
          "Bilgisayar bilimciler bu ilkeleri en verimli teslimat rotalarını bulmak gibi sorunları çözen algoritmalar için kullanmıştır.",
        ],
      ],
    },
    {
      text:
        "The Sun regularly releases bursts of energy and charged particles known as solar flares and coronal mass ejections. When these reach the Earth, they can interact with the planet's magnetic field to produce 'geomagnetic storms'. The most visible effect is the aurora, the shimmering curtains of light usually seen near the poles. However, strong storms can also cause serious problems. They can damage satellites, disrupt radio communications and GPS signals, and induce electric currents in long power lines that may overload transformers. The most powerful storm on record, the Carrington Event of 1859, caused telegraph systems around the world to fail. Because modern societies depend heavily on electricity and satellites, governments now monitor 'space weather' closely so that operators can take protective measures before a storm arrives.",
      questions: [
        [
          "According to the passage, geomagnetic storms occur when ----.",
          [
            "particles from the Sun interact with the Earth's magnetic field",
            "the Earth's core suddenly cools down",
            "satellites collide with one another in orbit",
            "lightning strikes power lines during storms",
            "auroras produce electric currents",
          ],
          "Güneş'ten gelen parçacıklar Dünya'nın manyetik alanıyla etkileşime girdiğinde jeomanyetik fırtınalar oluşur.",
        ],
        [
          "Which of the following is NOT mentioned as an effect of strong solar storms?",
          [
            "causing earthquakes",
            "damaging satellites",
            "disrupting GPS signals",
            "overloading transformers",
            "disrupting radio communications",
          ],
          "Parçada uyduların zarar görmesi, GPS ve radyo iletişiminin aksaması ve transformatörlerin aşırı yüklenmesi sayılır; depremlerden söz edilmez.",
        ],
        [
          "Governments monitor space weather so that ----.",
          [
            "protective measures can be taken before a storm arrives",
            "more auroras can be seen near the poles",
            "satellites can be launched during storms",
            "the Sun's activity can be reduced",
            "telegraph systems can be used again",
          ],
          "Hükümetler, operatörlerin fırtına gelmeden önlem alabilmesi için uzay havasını yakından izler.",
        ],
      ],
    },
    {
      text:
        "Groundwater, stored in underground layers of rock and sediment called aquifers, provides drinking water for billions of people and supplies a large share of the water used for irrigation. In many of the world's most important farming regions, however, groundwater is being pumped out far faster than it is replenished by rain. Some aquifers contain 'fossil water' that accumulated thousands of years ago and is effectively non-renewable. Satellite measurements of tiny changes in the Earth's gravity have revealed that groundwater levels are falling rapidly in parts of India, the Middle East, China and the United States. As water tables drop, wells must be drilled deeper, increasing costs, and in some coastal areas seawater can flow into the aquifers, making the water too salty to use.",
      questions: [
        [
          "According to the passage, 'fossil water' ----.",
          [
            "accumulated long ago and is effectively non-renewable",
            "is replaced by rain every few years",
            "is found only on the surface of the Earth",
            "is too salty to be used for any purpose",
            "is produced by satellites",
          ],
          "'Fosil su' binlerce yıl önce birikmiştir ve fiilen yenilenemez.",
        ],
        [
          "It is stated in the passage that falling groundwater levels have been detected using ----.",
          [
            "satellite measurements of changes in the Earth's gravity",
            "reports from farmers in every country",
            "special wells drilled into the ocean floor",
            "cameras placed inside aquifers",
            "measurements of river levels",
          ],
          "Yeraltı suyu seviyelerindeki düşüş, Dünya'nın kütleçekimindeki küçük değişikliklerin uydu ölçümleriyle tespit edilmiştir.",
        ],
        [
          "One consequence of falling water tables mentioned in the passage is that ----.",
          [
            "seawater may enter aquifers in some coastal areas",
            "wells can be made shallower",
            "farming becomes cheaper",
            "rainfall increases in dry regions",
            "aquifers fill up more quickly",
          ],
          "Bazı kıyı bölgelerinde deniz suyu akiferlere girerek suyu kullanılamayacak kadar tuzlu hâle getirebilir.",
        ],
      ],
    },
    {
      text:
        "In 1916, Albert Einstein predicted that massive accelerating objects, such as two black holes orbiting each other, should produce ripples in the fabric of space and time, which he called gravitational waves. For a century, these waves remained undetected, because by the time they reach the Earth they are incredibly weak. In 2015, however, the Laser Interferometer Gravitational-Wave Observatory, or LIGO, recorded a signal produced by the collision of two black holes more than a billion light years away. LIGO uses lasers to measure changes in the length of tunnels four kilometres long; the passing wave altered their length by less than one-thousandth of the width of a proton. The discovery, which earned three physicists the Nobel Prize, opened a new way of observing the universe.",
      questions: [
        [
          "According to the passage, gravitational waves remained undetected for so long because ----.",
          [
            "they are extremely weak when they reach the Earth",
            "Einstein's prediction was not taken seriously",
            "black holes never collide with each other",
            "they travel more slowly than light",
            "lasers had not yet been invented in 1916",
          ],
          "Kütleçekim dalgaları Dünya'ya ulaştığında inanılmaz derecede zayıf olduğu için bir yüzyıl boyunca tespit edilemedi.",
        ],
        [
          "The signal recorded by LIGO in 2015 was produced by ----.",
          [
            "the collision of two black holes",
            "an explosion on the surface of the Sun",
            "a laser experiment in the laboratory",
            "a nearby star that suddenly collapsed",
            "an earthquake deep inside the Earth",
          ],
          "LIGO'nun kaydettiği sinyal iki kara deliğin çarpışmasından kaynaklanıyordu.",
        ],
        [
          "The example of the proton's width is given to show ----.",
          [
            "how extraordinarily small the measured change was",
            "how large the LIGO tunnels are",
            "that protons produce gravitational waves",
            "that lasers can damage protons",
            "how far away the black holes were",
          ],
          "Proton genişliği örneği, ölçülen değişimin ne kadar olağanüstü küçük olduğunu göstermek için verilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1953, James Watson and Francis Crick proposed that DNA has the shape of a double helix. ---- Their discovery helped explain how genetic information is copied and passed from one generation to the next.",
      [
        "Their model was based partly on X-ray images produced by Rosalind Franklin.",
        "Both scientists later wrote popular books about their careers.",
        "Many universities now offer courses in molecular biology.",
        "DNA is found in almost every cell of the human body.",
        "Cambridge, where they worked, is one of the oldest universities in England.",
      ],
      "Boşluk modelin nasıl oluşturulduğunu anlatmayı sürdürmelidir; ardından keşfin önemi açıklanır.",
    ],
    [
      "Many deserts experience very hot days and surprisingly cold nights. ---- As a result, the heat absorbed by the ground during the day escapes quickly after sunset.",
      [
        "This is because the dry air and clear skies cannot trap heat effectively.",
        "Camels are well adapted to life in hot deserts.",
        "Some deserts receive less than ten millimetres of rain a year.",
        "Many people travel to deserts to see the stars clearly on cloudless nights.",
        "Sand dunes can move several metres every year.",
      ],
      "'As a result' öncesinde ısının gün batımından sonra hızla kaybolmasının nedeni gerekir: kuru hava ve açık gökyüzünün ısıyı tutamaması.",
    ],
    [
      "---- For example, the octopus has three hearts, blue blood and can taste with its arms.",
      [
        "Some marine animals have remarkably unusual bodies.",
        "Octopuses live in oceans all over the world.",
        "Many people enjoy eating seafood on holiday.",
        "The ocean covers most of the Earth's surface.",
        "Some fish can live for more than a century.",
      ],
      "'For example' ile verilen ahtapot örneği, bazı deniz hayvanlarının olağandışı bedenlere sahip olduğunu söyleyen bir genelleme gerektirir.",
    ],
    [
      "Green roofs, which are covered with plants, are becoming more common in cities. ---- In addition, they provide habitats for insects and birds.",
      [
        "They help keep buildings cool in summer and reduce the risk of flooding.",
        "Many large cities have very tall office buildings in their busy business districts.",
        "Roofs are usually made from tiles, metal or concrete.",
        "Some people grow vegetables in their gardens.",
        "Rain falls more often in winter in many countries.",
      ],
      "'In addition' ile ikinci bir yarar eklenir; boşlukta yeşil çatıların ilk yararları (binaları serin tutma, taşkın riskini azaltma) yer almalıdır.",
    ],
    [
      "The Moon is slowly moving away from the Earth by about four centimetres each year. ---- Consequently, days on Earth are gradually becoming longer.",
      [
        "This process is gradually slowing down the rotation of the Earth.",
        "The Moon reflects light from the Sun.",
        "Astronauts first walked on the surface of the Moon in the summer of 1969.",
        "The Moon has no atmosphere and no liquid water.",
        "Many festivals are based on the phases of the Moon.",
      ],
      "'Consequently' öncesinde günlerin uzamasının nedeni gerekir: Dünya'nın dönüşünün yavaşlaması.",
    ],
    [
      "Some researchers have proposed using genetically modified mosquitoes to reduce the spread of malaria. ---- Others, however, worry about the unknown effects of releasing such insects into the wild.",
      [
        "Supporters argue that this could save hundreds of thousands of lives each year.",
        "Mosquitoes are most active in the early morning and evening.",
        "Malaria has been known since ancient times.",
        "In many tropical countries, people use nets to protect themselves from bites while sleeping.",
        "Some mosquitoes can fly several kilometres.",
      ],
      "'Others, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Fibre-optic cables carry information as pulses of light.",
        "They can transmit large amounts of data over long distances with little loss.",
        "Most international internet traffic travels through cables on the ocean floor.",
        "Many people enjoy watching films at the cinema.",
        "Without them, the modern internet would not be possible.",
      ],
      odd: 3,
      why: "Parça fiber optik kabloları anlatır. Sinemada film izlemekten söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Hibernation allows some animals to survive long winters with little food.",
        "During hibernation, an animal's body temperature and heart rate drop sharply.",
        "This greatly reduces the amount of energy it needs.",
        "Snow is often used to build igloos.",
        "Bears, bats and some rodents are among the animals that hibernate.",
      ],
      odd: 3,
      why: "Parça kış uykusunu anlatır. Kardan iglo yapılmasından söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Geologists study rock layers to learn about the Earth's history.",
        "Older layers are usually found beneath younger ones.",
        "Fossils in each layer show which organisms lived at that time.",
        "Many people collect interesting stones as a hobby.",
        "In this way, rocks act as a record of the planet's past.",
      ],
      odd: 3,
      why: "Parça kaya katmanlarının incelenmesini anlatır. Taş biriktirme hobisinden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Smartphones contain dozens of different chemical elements.",
        "Some of these, such as cobalt and tantalum, are mined in conflict zones.",
        "Recycling old phones can recover many of these valuable materials.",
        "Yet only a small proportion of phones are currently recycled.",
        "Many people use their phones to take photographs.",
      ],
      odd: 4,
      why: "Parça akıllı telefonlardaki elementleri ve geri dönüşümü anlatır. Telefonla fotoğraf çekmekten söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Whales communicate using a wide range of sounds.",
        "Some winter sports are very popular in northern Europe.",
        "Humpback whales are famous for their long and complex songs.",
        "These songs can travel hundreds of kilometres underwater.",
        "Scientists believe the songs play a role in finding mates.",
      ],
      odd: 1,
      why: "Parça balinaların iletişimini anlatır. Kış sporlarından söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Clouds form when warm, moist air rises and cools.",
        "As the air cools, water vapour condenses into tiny droplets.",
        "Mount Everest is the highest mountain in the world.",
        "These droplets gather around small particles of dust or salt.",
        "When the droplets become heavy enough, they fall as rain.",
      ],
      odd: 2,
      why: "Parça bulutların oluşumunu anlatır. Everest Dağı'ndan söz eden III. cümle akışı bozar.",
    },
  ],
};
