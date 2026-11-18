import type { YokdilDeneme } from "./types";

export const FEN_92: YokdilDeneme = {
  no: 92,
  field: "fen",
  vocab: [
    [
      "The detector was placed a kilometre underground to ---- it from the cosmic rays that constantly strike the surface.",
      ["shield", "expose", "release", "attract", "reveal"],
      "Dedektörün yüzeye sürekli çarpan kozmik ışınlardan 'korunması' (shield) için bir kilometre yerin altına yerleştirildiği anlatılır.",
    ],
    [
      "Neutrinos interact with ordinary matter so ---- that trillions pass through our bodies every second unnoticed.",
      ["rarely", "violently", "frequently", "loudly", "suddenly"],
      "Nötrinoların sıradan maddeyle o kadar 'seyrek' (rarely) etkileştiği ki her saniye trilyonlarcasının fark edilmeden vücudumuzdan geçtiği anlatılır.",
    ],
    [
      "The measurement showed a small but persistent ---- from the value predicted by theory.",
      ["deviation", "agreement", "copy", "reward", "silence"],
      "Ölçümün kuramın öngördüğü değerden küçük ama kalıcı bir 'sapma' (deviation) gösterdiği anlatılır.",
    ],
    [
      "The tank was filled with ultra-pure water, since even tiny amounts of dirt could ---- the faint flashes of light.",
      ["obscure", "brighten", "create", "measure", "repeat"],
      "Küçük miktarda kirin bile soluk ışık parlamalarını 'örtebileceği, belirsizleştirebileceği' (obscure) için tankın çok saf suyla doldurulduğu anlatılır.",
    ],
    [
      "The laboratory's results were later ---- by an independent experiment on another continent.",
      ["confirmed", "forgotten", "ignored", "invented", "hidden"],
      "Laboratuvar sonuçlarının daha sonra başka bir kıtadaki bağımsız bir deneyle 'doğrulandığı' (confirmed) anlatılır.",
    ],
    [
      "After years of searching, the two teams finally ---- the elusive particle in their collision data.",
      ["came across", "looked down on", "put up with", "ran out of", "got over"],
      "Yıllarca aradıktan sonra iki ekibin sonunda çarpışma verilerinde bu zor yakalanan parçacığa 'rastladığı' (came across) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The giant magnet ---- more than five thousand kilometres by road and sea before it reached its new home.",
      ["travelled", "travels", "has been travelling", "will travel", "is travelling"],
      "Geçmişte tamamlanmış bir eylem ve 'before it reached' yapısı: 'travelled'.",
    ],
    [
      "If neutrinos had no mass at all, they ---- from one type into another.",
      ["could not change", "cannot have changed", "will not change", "had not changed", "do not change"],
      "Şimdiki zamana yönelik gerçek dışı koşul (ikinci tip) cümlesinin ana yan cümlesi: 'could not change'.",
    ],
    [
      "The detector ---- by a team of engineers when one of its photomultiplier tubes exploded.",
      ["was being refilled", "refilled", "has refilled", "refills", "is refilling"],
      "Geçmişte süregiden ve başka bir olayla kesilen edilgen eylem: 'was being refilled'.",
    ],
    [
      "---- the particle had been predicted in the 1970s, it took almost twenty years to find it.",
      ["Although", "Because", "Unless", "So that", "In case"],
      "Parçacığın öngörülmüş olması ile bulunmasının yirmi yıl sürmesi zıtlık bildirir: 'Although'.",
    ],
    [
      "The scientist ---- shared the Nobel Prize had worked on the experiment for most of his career.",
      ["who", "whose", "which", "whom", "where"],
      "Kişiye gönderme yapan özne konumundaki ilgi zamiri: 'who'.",
    ],
    [
      "Not until the data from several years had been analysed ---- the researchers announce their result.",
      ["did", "had", "were", "have", "do"],
      "'Not until' ile başlayan cümlede devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The mountain ---- the laboratory was built protects it from almost all cosmic radiation.",
      ["under which", "which", "whose", "when", "that"],
      "Laboratuvarın dağın altına inşa edildiği belirtilir; edat + ilgi zamiri: 'under which'.",
    ],
    [
      "The deeper a laboratory lies beneath the surface, ---- cosmic rays reach it.",
      ["the fewer", "the less many", "fewer", "the fewest", "less"],
      "'The more ..., the fewer ...' paralel yapısı; sayılabilir 'cosmic rays' ile: 'the fewer'.",
    ],
    [
      "The physicists insisted that the experiment ---- before any announcement was made.",
      ["be repeated", "is repeated", "was repeated", "to be repeated", "repeating"],
      "'insist that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be repeated'.",
    ],
    [
      "The neutrinos detected in 1987 are thought ---- from an exploding star in a nearby galaxy.",
      ["to have come", "coming", "to come", "came", "having come"],
      "Geçmişte gerçekleşmiş olay için mastarın geçmiş biçimi: 'to have come'.",
    ],
    [
      "The ice is so clear and dark ---- light can travel more than a hundred metres through it.",
      ["that", "which", "as", "than", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The researchers had the tank ---- with fifty thousand tonnes of purified water.",
      ["filled", "fill", "filling", "to fill", "fills"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'filled'.",
    ],
    [
      "Were the accelerator still running today, it ---- the second most powerful in the world.",
      ["would be", "will be", "has been", "had been", "is"],
      "Devrik ikinci tip koşul cümlesinin ana yan cümlesi: 'would be'.",
    ],
    [
      "Each of the five thousand light sensors ---- lowered into the ice on a long cable.",
      ["was", "were", "have been", "are being", "be"],
      "'Each of' yapısı tekil fiil gerektirir: 'was'.",
    ],
  ],
  cloze: [
    {
      text:
        "In a disused nickel mine near the Canadian city of Sudbury, two kilometres below the surface, physicists built a detector in the 1990s to solve a puzzle that had troubled them for decades. Nuclear reactions in the core of the Sun produce enormous numbers of neutrinos, {1} experiments on Earth had consistently detected only about a third of the number predicted by theory. Some scientists suspected that the theory of the Sun was wrong, while others proposed that the neutrinos were changing into other types during their journey, which the earlier detectors could not see. The Sudbury Neutrino Observatory, or SNO, was designed to settle the question. Its central vessel, an acrylic sphere twelve metres across, was filled with a thousand tonnes of heavy water, {2} it was surrounded by almost ten thousand light sensors. Unlike ordinary water, heavy water allowed the detector to measure the total number of neutrinos of all types, {3} the number of the particular type produced in the Sun. In 2001 and 2002, the team reported that the total number agreed with the theory, {4} only about a third of them arrived in their original form. The neutrinos were indeed changing type. The heavy water, worth hundreds of millions of dollars, had been lent by the Canadian nuclear industry, {5} it was returned when the experiment ended in 2006.",
      blanks: [
        [
          "(21) ----",
          ["but", "because", "so", "unless", "or"],
          "Güneş'in çok sayıda nötrino üretmesi ile deneylerin yalnızca üçte birini algılaması zıtlık bildirir: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "until"],
          "Kürenin ağır suyla doldurulması ve on bine yakın ışık algılayıcısıyla çevrelenmesi birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["as well as", "instead of", "in spite of", "rather than", "because of"],
          "Ağır su tüm türlerin toplamını ölçmeye ek olarak Güneş'te üretilen türün sayısını da ölçebiliyordu: 'as well as'.",
        ],
        [
          "(24) ----",
          ["but", "and so", "because", "or", "unless"],
          "Toplam sayının kuramla uyuşması ile yalnızca üçte birinin özgün biçimde gelmesi zıtlık bildirir: 'but'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "although", "or", "until"],
          "Ağır suyun ödünç verilmesi ve deney bitince geri verilmesi birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "At the South Pole, an unusual telescope has been built not on the ice but inside it. Known as IceCube, it consists of more than five thousand light sensors, each about the size of a basketball, attached to eighty-six long cables that were lowered into holes drilled in the ice with jets of hot water. The sensors lie at depths of between one and a half and two and a half kilometres, {1} together they occupy a cubic kilometre of ice. At that depth, the pressure of the ice above has squeezed out almost all the air bubbles, {2} the ice is extraordinarily clear. The telescope is designed to detect neutrinos from distant objects in space. On very rare occasions, one of them collides with an atom in the ice and produces a charged particle, {3} that particle gives off a faint flash of blue light as it travels. By recording the time at which each sensor detects the light, scientists can work out the direction from which the neutrino came. Most of the neutrinos it detects are produced in the Earth's own atmosphere, {4} a small number come from much further away. In 2018, the telescope traced a high-energy neutrino to a galaxy almost four billion light years away, {5} in 2023 it produced the first image of our own galaxy in neutrinos.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Algılayıcıların belirli derinliklerde olması ve birlikte bir kilometreküplük buzu kaplaması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["so", "although", "unless", "or", "until"],
          "Basıncın hava kabarcıklarını sıkıştırıp çıkarmasının sonucu buzun olağanüstü berrak olmasıdır: 'so'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "until"],
          "Yüklü bir parçacığın oluşması ve bu parçacığın mavi ışık yayması birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["but", "because", "so", "unless", "or"],
          "Çoğu nötrinonun atmosferde üretilmesi ile azının çok uzaktan gelmesi zıtlık bildirir: 'but'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "although", "or", "until"],
          "2018'deki keşif ve 2023'teki ilk nötrino görüntüsü birbirine eklenen başarılardır: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although neutrinos are among the most abundant particles in the universe, ----.",
      [
        "they are extremely difficult to detect",
        "the universe is very large",
        "they were named by an Italian physicist",
        "particles are very small",
        "they can easily be seen with an ordinary microscope in any laboratory",
      ],
      "'Although' zıtlık ister: nötrinolar evrendeki en bol parçacıklardan olsa da algılanmaları son derece zordur.",
    ],
    [
      "If the detector had not been built deep underground, ----.",
      [
        "its signals would have been swamped by cosmic rays",
        "mines are deep",
        "the detector was built in Japan",
        "cosmic rays come from space",
        "it would have detected far more solar neutrinos than any other experiment",
      ],
      "Üçüncü tip koşul: dedektör yerin derinliklerine inşa edilmeseydi sinyalleri kozmik ışınlar arasında kaybolurdu.",
    ],
    [
      "----, the accelerator smashed protons and antiprotons together at enormous energies.",
      [
        "Running for more than twenty-five years near Chicago",
        "Because protons are small",
        "Unless it was switched on",
        "In spite of being a machine",
        "Since it had already been replaced by a larger machine in Europe",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: Chicago yakınlarında yirmi beş yıldan fazla çalışan hızlandırıcı protonlarla antiprotonları çok yüksek enerjilerde çarpıştırdı.",
    ],
    [
      "Because the laboratory lies beneath fourteen hundred metres of rock, ----.",
      [
        "only a tiny fraction of cosmic rays can reach it",
        "rock is very heavy",
        "Italy has many mountains",
        "tunnels are long",
        "visitors must climb the mountain to reach the experiments",
      ],
      "Neden-sonuç: laboratuvar bin dört yüz metre kayanın altında olduğundan kozmik ışınların yalnızca çok küçük bir bölümü ona ulaşabilir.",
    ],
    [
      "The magnet was transported by barge and truck ----.",
      [
        "because it could not be taken apart without being damaged",
        "although it was small",
        "so that it would become larger",
        "unless the roads were closed",
        "since aircraft were thought to be much cheaper for heavy loads",
      ],
      "Neden bildiren yapı: mıknatıs zarar görmeden parçalara ayrılamadığı için mavna ve kamyonla taşındı.",
    ],
    [
      "The light sensors were lowered into holes in the ice ----.",
      [
        "which had been melted with jets of hot water",
        "which is cold",
        "that the sensors",
        "whose light",
        "when the first explorers reached the South Pole",
      ],
      "İlgi cümlesi deliklerin nasıl açıldığını açıklar: algılayıcılar sıcak su jetleriyle eritilmiş deliklere indirildi.",
    ],
    [
      "Unlike earlier detectors, which could see only one type of neutrino, ----.",
      [
        "the new detector could count neutrinos of all three types",
        "earlier detectors were small",
        "neutrinos come from the Sun",
        "detectors use water",
        "the new detector could not see any neutrinos at all",
      ],
      "'Unlike' karşıtlık kurar: yalnızca bir tür nötrino görebilen önceki dedektörlerin aksine yeni dedektör üç türü de sayabiliyordu.",
    ],
    [
      "The experiment was stopped for almost a year in 2001 ----.",
      [
        "after thousands of its light sensors were destroyed in a chain of implosions",
        "although it was working well",
        "so that more water could be added",
        "unless the scientists agreed",
        "since the researchers had already answered every question they had",
      ],
      "Neden bildiren yapı: binlerce ışık algılayıcısı zincirleme çökmelerle yok olduktan sonra deney yaklaşık bir yıl durduruldu.",
    ],
    [
      "Hardly had the new laser begun operating ----.",
      [
        "when scientists from around the world applied to use it",
        "than the laser",
        "that the scientists",
        "before the tunnel",
        "when the engineers decided to dismantle it permanently",
      ],
      "'Hardly ... when' yapısı: yeni lazer çalışmaya başlar başlamaz dünyanın dört bir yanından bilim insanları onu kullanmak için başvurdu.",
    ],
    [
      "While most neutrinos detected at the South Pole are produced in the atmosphere, ----.",
      [
        "a few have been traced to galaxies billions of light years away",
        "the atmosphere contains air",
        "Antarctica is cold",
        "light travels fast",
        "none of them has ever been detected by the sensors in the ice",
      ],
      "'While' zıtlık bildirir: Güney Kutbu'nda algılanan nötrinoların çoğu atmosferde üretilse de birkaçı milyarlarca ışık yılı uzaktaki gökadalara kadar izlenmiştir.",
    ],
    [
      "The heavy water was so valuable ----.",
      [
        "that it had to be borrowed rather than bought",
        "because the water",
        "than the detector",
        "although the physicists",
        "so that it was simply poured away when the experiment ended",
      ],
      "'so ... that' sonuç yapısı: ağır su o kadar değerliydi ki satın alınmak yerine ödünç alınması gerekti.",
    ],
  ],
  enTr: [
    [
      "The tank is lined with more than eleven thousand light sensors, each about half a metre across.",
      [
        "Tankın iç yüzeyi her biri yaklaşık yarım metre çapında on bir binden fazla ışık algılayıcısıyla kaplıdır.",
        "Tankın dışında yarım metrelik on bir algılayıcı vardır.",
        "Işık algılayıcıları tankı yarım metre küçültür.",
        "Tankta hiç algılayıcı yoktur.",
        "Tankın iç yüzeyi tek bir dev algılayıcıyla kaplıdır ve bu algılayıcı hiç ışık görmez.",
      ],
      "'The tank is lined with more than eleven thousand light sensors' 'tankın iç yüzeyi on bir binden fazla ışık algılayıcısıyla kaplıdır', 'each about half a metre across' 'her biri yaklaşık yarım metre çapında' karşılığıdır.",
    ],
    [
      "The discovery showed that neutrinos must have mass, contrary to what the standard theory assumed.",
      [
        "Keşif, standart kuramın varsaydığının aksine nötrinoların kütlesi olması gerektiğini gösterdi.",
        "Keşif, nötrinoların standart kuramın öngördüğü gibi kütlesiz olduğunu doğruladı.",
        "Standart kuram nötrinoların keşfini engelledi.",
        "Nötrinolar hiç keşfedilmedi.",
        "Keşif, nötrinoların aslında ışıktan daha hızlı hareket ettiğini kesin olarak kanıtladı.",
      ],
      "'The discovery showed that neutrinos must have mass' 'keşif nötrinoların kütlesi olması gerektiğini gösterdi', 'contrary to what the standard theory assumed' 'standart kuramın varsaydığının aksine' karşılığıdır.",
    ],
    [
      "The laboratory is reached through a motorway tunnel that runs beneath the mountain.",
      [
        "Laboratuvara dağın altından geçen bir otoyol tüneliyle ulaşılır.",
        "Laboratuvar dağın zirvesinde, bir otoyolun yanında bulunur.",
        "Otoyol tüneli laboratuvarın içinden dağa ulaşır.",
        "Laboratuvara hiç ulaşılamaz.",
        "Laboratuvara yalnızca helikopterle, dağın öbür yanından ulaşılabilir.",
      ],
      "'The laboratory is reached through a motorway tunnel' 'laboratuvara bir otoyol tüneliyle ulaşılır', 'that runs beneath the mountain' 'dağın altından geçen' karşılığıdır.",
    ],
    [
      "The new measurement agrees with theory more closely than earlier results suggested.",
      [
        "Yeni ölçüm kuramla önceki sonuçların gösterdiğinden daha yakından uyuşuyor.",
        "Yeni ölçüm kuramla önceki sonuçlardan çok daha az uyuşuyor.",
        "Önceki sonuçlar yeni kuramı ölçtü.",
        "Hiç ölçüm yapılmadı.",
        "Yeni ölçüm, önceki tüm sonuçların tamamen yanlış olduğunu ve kuramın terk edilmesi gerektiğini gösteriyor.",
      ],
      "'The new measurement agrees with theory more closely' 'yeni ölçüm kuramla daha yakından uyuşuyor', 'than earlier results suggested' 'önceki sonuçların gösterdiğinden' karşılığıdır.",
    ],
    [
      "The electrons are accelerated along a tunnel more than three kilometres long before they produce the flashes of X-rays.",
      [
        "Elektronlar X ışını parlamalarını üretmeden önce üç kilometreden uzun bir tünel boyunca hızlandırılır.",
        "Elektronlar X ışınları ürettikten sonra üç kilometrelik bir tünelde yavaşlatılır.",
        "X ışınları elektronları tünelin dışına iter.",
        "Tünelde hiç elektron yoktur.",
        "Elektronlar yalnızca birkaç metrelik bir odada hızlandırılır ve hiç X ışını üretmez.",
      ],
      "'The electrons are accelerated along a tunnel more than three kilometres long' 'elektronlar üç kilometreden uzun bir tünel boyunca hızlandırılır', 'before they produce the flashes of X-rays' 'X ışını parlamalarını üretmeden önce' karşılığıdır.",
    ],
    [
      "Only a handful of neutrinos from the exploding star were recorded, but they were enough to confirm the theory.",
      [
        "Patlayan yıldızdan gelen yalnızca birkaç nötrino kaydedildi, ancak bunlar kuramı doğrulamaya yetti.",
        "Patlayan yıldızdan milyonlarca nötrino kaydedildi, ancak kuram doğrulanamadı.",
        "Kuram patlayan yıldızı kaydetti.",
        "Hiç nötrino kaydedilmedi.",
        "Patlayan yıldızdan gelen nötrinolar dedektörleri tamamen yok etti ve kuram çürütüldü.",
      ],
      "'Only a handful of neutrinos from the exploding star were recorded' 'patlayan yıldızdan gelen yalnızca birkaç nötrino kaydedildi', 'but they were enough to confirm the theory' 'ancak bunlar kuramı doğrulamaya yetti' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Dedektör eski bir çinko madeninin derinliklerine inşa edildi.",
      [
        "The detector was built deep inside a former zinc mine.",
        "The detector was built on top of a zinc mine.",
        "A zinc mine was built inside the detector.",
        "There was no detector.",
        "The detector was built in a new gold mine near the coast.",
      ],
      "'Dedektör inşa edildi' 'the detector was built', 'eski bir çinko madeninin derinliklerine' 'deep inside a former zinc mine' karşılığıdır.",
    ],
    [
      "Fizikçi 2015'te Nobel Ödülü'nü paylaştı.",
      [
        "The physicist shared the Nobel Prize in 2015.",
        "The physicist refused the Nobel Prize in 2015.",
        "The Nobel Prize shared the physicist.",
        "There was no prize.",
        "The physicist won the Nobel Prize alone in 1915.",
      ],
      "'Fizikçi paylaştı' 'the physicist shared', 'Nobel Ödülü'nü' 'the Nobel Prize', '2015'te' 'in 2015' karşılığıdır.",
    ],
    [
      "Hızlandırıcı 2011'de kapatıldı.",
      [
        "The accelerator was shut down in 2011.",
        "The accelerator was opened in 2011.",
        "2011 shut down the accelerator.",
        "There was no accelerator.",
        "The accelerator was shut down in 1911 and never rebuilt.",
      ],
      "'Hızlandırıcı kapatıldı' 'the accelerator was shut down', '2011'de' 'in 2011' karşılığıdır.",
    ],
    [
      "Laboratuvar dünyanın en büyük yeraltı araştırma tesislerinden biridir.",
      [
        "The laboratory is one of the largest underground research facilities in the world.",
        "The laboratory is the smallest building in the world.",
        "The world's research facilities are under the laboratory.",
        "There is no laboratory.",
        "The laboratory is one of the tallest buildings in Europe.",
      ],
      "'Laboratuvar biridir' 'the laboratory is one of', 'dünyanın en büyük yeraltı araştırma tesislerinden' 'the largest underground research facilities in the world' karşılığıdır.",
    ],
    [
      "Mıknatıs bir mavnayla Florida'nın etrafından taşındı.",
      [
        "The magnet was carried around Florida on a barge.",
        "The magnet was carried across Florida by train.",
        "Florida was carried around the magnet.",
        "There was no magnet.",
        "The magnet was flown over Florida by a large aircraft.",
      ],
      "'Mıknatıs taşındı' 'the magnet was carried', 'bir mavnayla Florida'nın etrafından' 'around Florida on a barge' karşılığıdır.",
    ],
    [
      "Lazer saniyede yirmi yedi bin parlama üretebilir.",
      [
        "The laser can produce twenty-seven thousand flashes per second.",
        "The laser can produce only one flash per day.",
        "Twenty-seven thousand lasers produce one flash.",
        "The laser cannot produce any flashes.",
        "The laser can produce twenty-seven flashes every year.",
      ],
      "'Lazer üretebilir' 'the laser can produce', 'saniyede yirmi yedi bin parlama' 'twenty-seven thousand flashes per second' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the Japanese town of Hida, a kilometre beneath a mountain, lies one of the most important instruments in modern physics. Known as Super-Kamiokande, it is a stainless steel tank about forty metres high and forty metres across, filled with fifty thousand tonnes of ultra-pure water and lined with more than eleven thousand light sensors. When a neutrino collides with a particle in the water, it can produce a charged particle that travels faster than light can travel through water, generating a faint cone of blue light, much as a supersonic aircraft generates a sonic boom. The sensors record the ring of light that the cone makes on the walls of the tank. The detector began operating in 1996, and two years later its team, led by Takaaki Kajita, announced a remarkable discovery. Neutrinos are constantly produced when cosmic rays strike the upper atmosphere, and those created above the detector travel only a few dozen kilometres to reach it, while those created on the other side of the planet pass through the entire Earth. The team found that fewer of one type of neutrino arrived from below than from above. The most likely explanation was that, during their longer journey, some of them had changed into a different type that the detector could not easily see. Such changes, known as oscillations, are possible only if neutrinos have mass, which the standard theory of particle physics had assumed they did not. In 2015, Kajita shared the Nobel Prize in Physics with Arthur McDonald, who had led a similar experiment in Canada. Super-Kamiokande suffered a serious accident in 2001, when a single sensor imploded during maintenance and the shock wave destroyed thousands of others, but it was rebuilt and continues to operate.",
      questions: [
        [
          "According to the passage, the blue light detected in the tank is produced when ----.",
          [
            "a charged particle travels through the water faster than light can",
            "neutrinos collide with the steel walls of the tank",
            "the water is heated by cosmic rays",
            "a sensor implodes during maintenance",
            "aircraft fly over the mountain above the detector",
          ],
          "Yüklü bir parçacık suda ışığın gidebildiğinden daha hızlı ilerlediğinde soluk mavi bir ışık konisi oluşur.",
        ],
        [
          "The passage states that neutrinos arriving from below the detector ----.",
          [
            "have travelled through the entire Earth",
            "are produced inside the tank",
            "travel only a few dozen kilometres",
            "are blocked completely by the rock",
            "come from the Sun during the day",
          ],
          "Gezegenin öbür yanında oluşan nötrinolar dedektöre ulaşmak için tüm Dünya'yı boydan boya geçer.",
        ],
        [
          "It can be inferred from the passage that the discovery was important because ----.",
          [
            "it contradicted an assumption of the standard theory of particle physics",
            "it proved that cosmic rays do not exist",
            "it showed that water cannot be purified",
            "it allowed neutrinos to be seen with the naked eye",
            "it ended all further research on neutrinos",
          ],
          "Salınımlar ancak nötrinoların kütlesi varsa mümkündür; standart kuram ise kütlesiz olduklarını varsaymıştı.",
        ],
      ],
    },
    {
      text:
        "Beneath the Gran Sasso, the highest mountain in the Apennines of central Italy, lies the largest underground physics laboratory in the world. Its three huge halls, each about a hundred metres long, twenty metres wide and eighteen metres high, were excavated in the 1980s alongside a motorway tunnel that runs through the mountain, which makes the laboratory unusually easy to reach: trucks can drive straight into it. The fourteen hundred metres of rock above the halls reduce the number of cosmic rays reaching them to about a millionth of the number at the surface. This makes the laboratory ideal for experiments that look for extremely rare events, which would otherwise be lost among the signals produced by cosmic rays. Some of the experiments search for particles of dark matter, the invisible substance that astronomers believe outweighs ordinary matter roughly five to one. Others study neutrinos produced in the Sun, or look for a rare form of radioactive decay which, if it were observed, would show that the neutrino is its own antiparticle. In 2011, the laboratory attracted worldwide attention when an experiment there appeared to show that neutrinos sent from Geneva, more than seven hundred kilometres away, had arrived slightly faster than light could have travelled the same distance. The team itself urged caution and asked other physicists to check its work, and in 2012 the anomaly was traced to a loose fibre-optic cable and a faulty clock. The laboratory has also faced criticism over safety, after a leak of chemicals from one experiment in 2002 raised fears that the water supply of the surrounding region, which comes partly from springs inside the mountain, might be contaminated.",
      questions: [
        [
          "According to the passage, the laboratory is unusually easy to reach because ----.",
          [
            "it was built alongside a motorway tunnel through the mountain",
            "it is located on the summit of the mountain",
            "it is close to the city of Geneva",
            "a railway runs directly into its halls",
            "it has a large airport nearby",
          ],
          "Laboratuvar dağın içinden geçen bir otoyol tünelinin yanına kazılmıştır; kamyonlar doğrudan içine girebilir.",
        ],
        [
          "The passage states that the apparent faster-than-light result was eventually ----.",
          [
            "explained by a loose cable and a faulty clock",
            "confirmed by several other laboratories",
            "used to build a new type of engine",
            "kept secret by the team",
            "shown to be caused by dark matter",
          ],
          "2012'de bu aykırı sonucun gevşek bir fiber optik kablo ve arızalı bir saatten kaynaklandığı anlaşıldı.",
        ],
        [
          "It can be inferred from the passage that local concerns about the laboratory arose because ----.",
          [
            "the region's water partly comes from springs inside the mountain",
            "the experiments produced loud noises",
            "trucks blocked the motorway every day",
            "the laboratory used up all the local electricity",
            "cosmic rays were directed towards nearby towns",
          ],
          "Bölgenin suyu kısmen dağın içindeki kaynaklardan geldiği için kimyasal sızıntısı su kaynaklarının kirlenmesi korkusunu doğurdu.",
        ],
      ],
    },
    {
      text:
        "For more than a quarter of a century, the most powerful particle accelerator in the world was the Tevatron, a ring six kilometres in circumference at Fermilab, a national laboratory near Chicago. Opened in 1983, it used thousands of superconducting magnets, cooled with liquid helium, to steer beams of protons and antiprotons, the antimatter counterparts of protons, around the ring in opposite directions at almost the speed of light. At two points, the beams were made to collide, and huge detectors recorded the particles that emerged from the collisions. The Tevatron's most famous achievement came in 1995, when its two research teams, each made up of several hundred physicists, announced the discovery of the top quark. The particle had been predicted by theory since the 1970s, after the discovery of its partner, the bottom quark, but it proved far heavier than expected, almost as heavy as an atom of gold, and therefore required more energy to produce than earlier machines could provide. Even at the Tevatron, top quarks were produced only in a tiny fraction of collisions, and the teams had to sift through billions of events to identify a few dozen convincing examples. The Tevatron also made precise measurements of other particles and searched for the Higgs boson, though it was a much larger European machine that finally discovered the Higgs in 2012. By then, the Tevatron had been overtaken in energy, and it was shut down in 2011. Many of its staff and some of its equipment moved on to new experiments, and the laboratory has since concentrated on the study of neutrinos.",
      questions: [
        [
          "According to the passage, the top quark was difficult to discover because ----.",
          [
            "it was much heavier than expected and needed more energy to produce",
            "it had never been predicted by theory",
            "it was destroyed by the magnets",
            "it could only be produced in Europe",
            "it was lighter than any other known particle",
          ],
          "Parçacık beklenenden çok daha ağırdı, neredeyse bir altın atomu kadar; bu yüzden üretilmesi önceki makinelerin sağlayabileceğinden fazla enerji gerektiriyordu.",
        ],
        [
          "The passage states that the Tevatron's magnets were used to ----.",
          [
            "steer beams of protons and antiprotons around the ring",
            "cool the detectors with liquid helium",
            "produce electricity for Chicago",
            "detect the particles produced in the collisions",
            "measure the mass of the Higgs boson",
          ],
          "Süperiletken mıknatıslar proton ve antiproton demetlerini halka çevresinde zıt yönlerde yönlendirmek için kullanıldı.",
        ],
        [
          "It can be inferred from the passage that the Tevatron was shut down mainly because ----.",
          [
            "more powerful machines had made it less useful for new discoveries",
            "it had been badly damaged in an accident",
            "its staff had refused to work there",
            "it had already found every possible particle",
            "the government had banned research on antimatter",
          ],
          "Kapatıldığında Tevatron enerji bakımından geçilmişti; daha güçlü makineler onu yeni keşifler için daha az yararlı hale getirmişti.",
        ],
      ],
    },
    {
      text:
        "In the summer of 2013, a ring-shaped electromagnet fifteen metres across began an unusual journey. It had been built in the 1990s at a laboratory on Long Island, New York, for an experiment that measured a property of the muon, a heavier, short-lived relative of the electron. Like a tiny spinning top, a muon behaves as a small magnet, and when it is placed in a magnetic field, the direction of its spin slowly rotates. The rate of this rotation depends on a quantity known as g, and according to theory g should be very slightly greater than two, because of the effects of the short-lived 'virtual' particles that constantly appear and disappear in empty space. The experiment on Long Island, completed in 2001, found a value that differed slightly from the prediction, which raised the exciting possibility that some unknown particles were influencing the muon. To check the result, physicists decided to repeat the experiment with a more intense beam at Fermilab, near Chicago. Building a new magnet would have cost about ten times as much as moving the old one, but the magnet could not be taken apart, and even a small twist could damage it. It was therefore placed on a barge and taken down the east coast of the United States, around Florida and up the Mississippi and other rivers, before being carried by a special truck along closed motorways at night. The journey covered about five thousand kilometres. The new experiment's final result, announced in 2025, was the most precise measurement of its kind ever made. By then, however, improved theoretical calculations had moved the predicted value much closer to the measured one, and most physicists concluded that the apparent difference had been largely explained.",
      questions: [
        [
          "According to the passage, theory predicts that g should be slightly greater than two because of ----.",
          [
            "the effects of virtual particles that appear and disappear in empty space",
            "the size of the magnet used in the experiment",
            "the temperature of the laboratory",
            "the speed of the barge on which the magnet travelled",
            "the influence of the Earth's own magnetic field",
          ],
          "Kurama göre g, boş uzayda sürekli belirip kaybolan 'sanal' parçacıkların etkileri nedeniyle ikiden biraz büyük olmalıdır.",
        ],
        [
          "The passage states that the old magnet was moved rather than replaced because ----.",
          [
            "building a new one would have cost about ten times as much",
            "the old magnet was much larger than necessary",
            "no company could build magnets in the United States",
            "the laboratory on Long Island had been closed by the government",
            "moving it by air was quick and inexpensive",
          ],
          "Yeni bir mıknatıs yapmak eskisini taşımaktan yaklaşık on kat daha pahalıya mal olacaktı.",
        ],
        [
          "It can be inferred from the passage that, by 2025, the difference between theory and measurement ----.",
          [
            "no longer seemed strong evidence of unknown particles",
            "had become much larger than before",
            "had led to the discovery of several new particles",
            "had never been noticed by physicists",
            "had forced the experiment to be moved back to Long Island",
          ],
          "Geliştirilmiş kuramsal hesaplar öngörülen değeri ölçülene yaklaştırdı; fark büyük ölçüde açıklanmış sayıldı.",
        ],
      ],
    },
    {
      text:
        "In a tunnel more than three kilometres long beneath the suburbs of Hamburg, in northern Germany, lies the European XFEL, one of the most powerful sources of X-rays ever built. Ordinary X-ray machines, such as those used in hospitals, produce a weak and disorderly beam. The European XFEL, by contrast, is a free-electron laser: it uses a long accelerator to speed up bunches of electrons to almost the speed of light and then sends them through a series of magnets arranged with alternating poles, which force the electrons to follow a zigzag path. As they wiggle, the electrons give off X-rays, and under the right conditions they arrange themselves so that the X-rays they emit reinforce one another, producing a laser-like beam billions of times brighter than that of conventional sources. The facility can produce up to twenty-seven thousand flashes of X-rays every second, each lasting less than a hundred million-billionths of a second. Because the flashes are so short, scientists can use them to take 'snapshots' of chemical reactions as they happen, and even to make films of the movements of atoms within molecules. The flashes are also intense enough to reveal the structure of large biological molecules, such as proteins, from tiny crystals that would be too small to study with other methods, although each flash destroys the sample it hits. Construction began in 2009, and the facility, funded by a group of European countries, opened to researchers in 2017. Scientists from around the world apply to use it, and only a fraction of the proposals can be accepted.",
      questions: [
        [
          "According to the passage, the electrons give off X-rays when ----.",
          [
            "magnets with alternating poles force them to follow a zigzag path",
            "they collide with the walls of the tunnel",
            "they are stopped suddenly by a metal target",
            "they are cooled to very low temperatures",
            "they pass through hospital X-ray machines",
          ],
          "Kutupları sırayla değişen mıknatıslar elektronları zikzak bir yol izlemeye zorlar ve elektronlar bu sırada X ışını yayar.",
        ],
        [
          "The passage states that the extremely short flashes allow scientists to ----.",
          [
            "take snapshots of chemical reactions as they happen",
            "heat samples to very high temperatures",
            "produce electricity for the city",
            "see through the walls of buildings",
            "cool proteins until they crystallise",
          ],
          "Parlamalar çok kısa olduğundan kimyasal tepkimelerin gerçekleştiği anda 'enstantane' görüntüleri alınabilir.",
        ],
        [
          "It can be inferred from the passage that demand to use the facility ----.",
          [
            "is greater than the time available",
            "has fallen since it opened",
            "comes only from German scientists",
            "is limited to hospitals",
            "is too low to justify its cost",
          ],
          "Önerilerin yalnızca bir bölümü kabul edilebildiğine göre talep mevcut süreden fazladır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The deepest laboratory in the world lies beneath a mountain in Sichuan province, in south-western China, under almost two and a half kilometres of rock. ---- Its depth makes it especially well suited to experiments that search for particles of dark matter.",
      [
        "It was built beside a tunnel that had been dug through the mountain for a hydroelectric project.",
        "China has many mountains.",
        "Rock is very hard.",
        "Other deep laboratories have been built in old mines in Canada, the United States and Europe.",
        "Particles are very small.",
      ],
      "Boşluk laboratuvarın nasıl kurulduğunu açıklayıp derinliğinin yararına bağlanan bir cümle gerektirir; boşluğa laboratuvarın bir hidroelektrik projesi için açılmış tünelin yanına inşa edildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "A disused gold mine in South Dakota, once the deepest in North America, has been turned into a laboratory for physics. ---- They will be used to study neutrinos sent through the Earth from a laboratory near Chicago, almost thirteen hundred kilometres away.",
      [
        "Engineers have excavated huge caverns more than a kilometre underground to house enormous new detectors.",
        "Gold is a valuable metal.",
        "South Dakota is in the United States.",
        "The mine produced gold for more than a century before it finally closed in 2002.",
        "Chicago is a large city.",
      ],
      "Boşluk 'They' zamirinin gönderme yapacağı dedektörleri tanıtan bir cümle gerektirir; boşluğa mühendislerin yeni dev dedektörler için yerin bir kilometreden fazla altında mağaralar kazdığını söyleyen cümle gelmelidir.",
    ],
    [
      "Experiments that search for dark matter must be protected not only from cosmic rays but also from natural radioactivity. ---- For this reason, some detectors are surrounded by lead taken from ancient Roman shipwrecks, which has lost most of its own radioactivity over two thousand years.",
      [
        "Even the materials from which the detectors are built contain tiny amounts of radioactive elements.",
        "Romans built many ships.",
        "Lead is a heavy metal.",
        "Some scientists now doubt whether dark matter exists at all, and propose other explanations.",
        "Cosmic rays come from space.",
      ],
      "Boşluk 'For this reason' ile antik kurşuna bağlanacak bir neden gerektirir; boşluğa dedektörlerin yapıldığı malzemelerin bile küçük miktarda radyoaktif element içerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "When the Large Electron–Positron collider near Geneva was dismantled in 2000, its tunnel was not abandoned. ---- The new machine began operating in 2008.",
      [
        "Instead, it was reused to house a more powerful accelerator.",
        "Geneva is in Switzerland.",
        "Tunnels are expensive.",
        "Some of its equipment was sent to museums and universities in several different countries.",
        "Electrons are particles.",
      ],
      "Boşluk tünelin terk edilmediğini söyleyip yeni makineye bağlanan bir cümle gerektirir; boşluğa tünelin daha güçlü bir hızlandırıcı için yeniden kullanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "The Boulby mine in north-east England produces potash, a mineral used in fertilisers, from rocks more than a kilometre underground. ---- The thick layers of salt around the laboratory contain very little natural radioactivity.",
      [
        "It also houses a small laboratory where physicists search for dark matter.",
        "England has many mines.",
        "Fertilisers help plants grow.",
        "The mine also produces a type of salt that is spread on roads in winter to melt ice.",
        "Salt is used in cooking.",
      ],
      "Boşluk 'the laboratory' ifadesinin gönderme yapacağı laboratuvarı tanıtan bir cümle gerektirir; boşluğa madende fizikçilerin karanlık madde aradığı küçük bir laboratuvar bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "To detect neutrinos, some experiments use enormous tanks of liquid that gives off light when particles pass through it. ---- The liquid must therefore be kept extremely pure, and the tanks are often built from specially selected materials.",
      [
        "Even a few atoms of radioactive impurity can produce signals that look like those of neutrinos.",
        "Liquids take the shape of their containers.",
        "Tanks are made of steel.",
        "Some of these tanks are larger than an Olympic swimming pool and contain thousands of tonnes of liquid.",
        "Light travels in straight lines.",
      ],
      "Boşluk 'therefore' ile sıvının saf tutulmasına bağlanacak bir neden gerektirir; boşluğa birkaç radyoaktif kirlilik atomunun bile nötrino sinyallerine benzeyen sinyaller üretebileceğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Particle accelerators were first built in the 1930s.",
        "The early machines were small enough to fit on a laboratory bench.",
        "Over the following decades, they grew steadily larger and more powerful.",
        "The largest now have rings many kilometres in circumference.",
        "Benches are usually made of wood or metal.",
      ],
      odd: 4,
      why: "Parça parçacık hızlandırıcılarının zamanla büyümesini anlatır. Tezgâhların genellikle tahta ya da metalden yapıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Working in an underground laboratory poses special challenges.",
        "Workers must travel long distances by lift or through tunnels each day.",
        "Mountains are popular with climbers.",
        "Fresh air must be pumped in from the surface.",
        "Strict rules are needed to deal with fires and other emergencies.",
      ],
      odd: 2,
      why: "Parça yeraltı laboratuvarlarında çalışmanın güçlüklerini anlatır. Dağların tırmanıcılar arasında popüler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Nuclear power stations produce huge numbers of neutrinos as a by-product.",
        "At Daya Bay in southern China, detectors were placed at different distances from six reactors.",
        "Electricity from the reactors is supplied to Hong Kong.",
        "By comparing the numbers detected, physicists measured how often neutrinos change type over short distances.",
        "The result, announced in 2012, was more precise than expected.",
      ],
      odd: 2,
      why: "Parça Daya Bay'de reaktör nötrinolarıyla yapılan ölçümü anlatır. Reaktörlerin elektriğinin Hong Kong'a verildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Large physics experiments now involve thousands of scientists.",
        "Their research papers may list more than five thousand authors.",
        "Such collaborations require careful rules for deciding who speaks for the team.",
        "Results are usually checked by internal committees before they are published.",
        "Many scientists enjoy travelling to conferences abroad.",
      ],
      odd: 4,
      why: "Parça büyük fizik deneylerindeki iş birliklerinin işleyişini anlatır. Pek çok bilim insanının yurt dışındaki konferanslara gitmekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Superconducting magnets are essential to modern accelerators.",
        "They must be cooled to a few degrees above absolute zero.",
        "At such temperatures, electric current flows through them without resistance.",
        "Absolute zero is the lowest temperature possible.",
        "This allows them to produce very strong magnetic fields while using little power.",
      ],
      odd: 3,
      why: "Parça süperiletken mıknatısların hızlandırıcılardaki işlevini anlatır. Mutlak sıfırın mümkün olan en düşük sıcaklık olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some physicists hope to detect neutrinos left over from the very early universe.",
        "These would have been produced about a second after the universe began.",
        "Their energy today, however, is extremely low.",
        "No existing detector is sensitive enough to see them.",
        "The universe contains billions of galaxies.",
      ],
      odd: 4,
      why: "Parça erken evrenden kalan nötrinoları algılama çabalarını anlatır. Evrenin milyarlarca gökada içerdiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
