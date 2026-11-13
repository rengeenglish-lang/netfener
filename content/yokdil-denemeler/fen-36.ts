import type { YokdilDeneme } from "./types";

export const FEN_36: YokdilDeneme = {
  no: 36,
  field: "fen",
  vocab: [
    [
      "She placed thermometers inside glass cylinders filled with different gases and ---- them to sunlight.",
      ["exposed", "delivered", "removed", "admitted", "reported"],
      "Farklı gazlarla doldurulmuş cam silindirlerin içine termometreler yerleştirip onları güneş ışığına 'maruz bıraktığı' (exposed) anlatılır.",
    ],
    [
      "Oxygen and nitrogen are almost ---- to heat radiation, so they let it pass straight through.",
      ["transparent", "sensitive", "harmful", "similar", "attractive"],
      "Oksijen ve azotun ısı ışınımına karşı neredeyse 'saydam' (transparent) olduğu ve onu doğrudan geçirdiği anlatılır.",
    ],
    [
      "He carried out tens of thousands of calculations by hand, a ---- task that took more than a year.",
      ["tedious", "brief", "pleasant", "careless", "simple"],
      "Bir yıldan uzun süren 'sıkıcı/yorucu' (tedious) bir iş olarak elle on binlerce hesaplama yaptığı anlatılır.",
    ],
    [
      "Tiny bubbles of air trapped in the ice ---- samples of the ancient atmosphere.",
      ["preserve", "destroy", "replace", "invent", "warm"],
      "Buzda hapsolmuş küçük hava kabarcıklarının eski atmosferden örnekleri 'koruduğu' (preserve) anlatılır.",
    ],
    [
      "The return to cold conditions was remarkably ----, taking place within a few decades.",
      ["abrupt", "gradual", "gentle", "predictable", "permanent"],
      "Soğuk koşullara dönüşün birkaç on yıl içinde gerçekleşen, dikkat çekici derecede 'ani' (abrupt) bir değişim olduğu anlatılır.",
    ],
    [
      "Volcanic ash in the upper atmosphere caused temperatures around the world to ---- for several years.",
      ["drop off", "look up", "give in", "take after", "set out"],
      "Üst atmosferdeki volkanik külün dünya genelinde sıcaklıkların birkaç yıl boyunca 'düşmesine' (drop off) yol açtığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "Foote ---- that the cylinder containing carbon dioxide became the hottest.",
      ["found", "has found", "finds", "will find", "was found"],
      "Geçmişte tamamlanmış bulgu: 'found'.",
    ],
    [
      "By the time Tyndall began his experiments, Foote ---- her results in an American journal.",
      ["had already published", "already publishes", "will already publish", "is already publishing", "has already been published"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had already published'.",
    ],
    [
      "If Callendar's work had been taken seriously, research on warming ---- earlier.",
      ["might have begun", "may begin", "begins", "had begun", "will begin"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have begun'.",
    ],
    [
      "The ice core ---- from a depth of more than three kilometres.",
      ["was drilled", "drilled", "has drilled", "is drilling", "will drill"],
      "Buz karotu çıkarılmıştır; edilgen geçmiş zaman: 'was drilled'.",
    ],
    [
      "---- the world was warming at the end of the ice age, the north suddenly became cold again.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Dünyanın ısınması ile kuzeyin aniden soğuması zıttır: 'Although'.",
    ],
    [
      "Arrhenius was a chemist ---- calculations predicted that more carbon dioxide would warm the planet.",
      ["whose", "who", "which", "whom", "that"],
      "İyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The eruption sent huge amounts of ash into the sky, ---- caused vivid red sunsets around the world.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more sea ice melts, ---- sunlight the dark ocean absorbs.",
      ["the more", "the most", "more than", "much more", "so much"],
      "'The more ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Not until 2011 ---- Foote's contribution rediscovered by historians.",
      ["was", "did", "had", "has", "were"],
      "'Not until' ile devrik yapı; edilgen geçmiş zaman: 'was'.",
    ],
    [
      "The river froze so hard that people held markets ---- the ice.",
      ["on", "at", "in", "by", "over"],
      "Buzun üzerinde pazar kurulduğu anlatılır; 'on the ice' kalıbı: 'on'.",
    ],
    [
      "Few sunspots were observed between 1645 and 1715, ---- was one of the coldest periods of the Little Ice Age.",
      ["which", "who", "when", "where", "what"],
      "Virgülden sonra dönemi niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "Arrhenius believed that a warmer climate would be good for Sweden, ---- was then a cold and poor country.",
      ["which", "who", "where", "whose", "what"],
      "Virgülden sonra İsveç'i niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "Snow reflects far more sunlight ---- the open ocean does.",
      ["than", "as", "from", "to", "that"],
      "Karşılaştırma yapısı: 'more ... than'.",
    ],
    [
      "Scientists recommended that governments ---- the amount of soot released by factories.",
      ["reduce", "reduces", "reduced", "to reduce", "reducing"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'reduce'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1856, the American scientist and campaigner for women's rights Eunice Foote carried out a simple but important experiment. She placed thermometers inside glass cylinders, filled each with a different gas, and left them in the sunlight. She found that moist air warmed more than dry air, and that the cylinder filled with carbon dioxide, {1} she called 'carbonic acid gas', became the hottest of all and took the longest to cool down. From this, she suggested that if the atmosphere had once contained more carbon dioxide, the Earth would have been warmer. Her findings were presented at a scientific meeting in August of that year, but they were read aloud by a male scientist, {2} it was unusual for women to address such meetings. They were then published in a short paper. Foote's work was soon overshadowed by that of the Irish physicist John Tyndall, {3} more detailed experiments on the absorption of heat by gases began three years later. {4} her experiment did not distinguish between sunlight and heat radiation from the Earth, it was a remarkable early insight. Her contribution was largely forgotten {5} 2011, when a retired geologist came across her paper and drew attention to it.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgüller arasında karbondioksiti niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(22) ----",
          ["since", "although", "unless", "whereas", "so that"],
          "Bulguların bir erkek tarafından okunmasının nedeni kadınların bu toplantılarda konuşmasının alışılmadık olmasıdır: 'since'.",
        ],
        [
          "(23) ----",
          ["whose", "who", "which", "whom", "that"],
          "Tyndall'ın deneyleri; iyelik ilişkisi: 'whose'.",
        ],
        [
          "(24) ----",
          ["Although", "Because", "Unless", "Once", "So that"],
          "Deneyin eksikliği ile dikkat çekici bir öngörü olması zıttır: 'Although'.",
        ],
        [
          "(25) ----",
          ["until", "since", "during", "before", "by"],
          "2011'e 'kadar' unutulduğu anlatılır: 'until'.",
        ],
      ],
    },
    {
      text:
        "In 1859, the Irish physicist John Tyndall, working at the Royal Institution in London, built an apparatus to measure how much heat radiation different gases could absorb. A long brass tube, closed at each end with plates of rock salt, {1} lets heat radiation through, was filled with gas, and the radiation passing through it was measured with a sensitive instrument. Tyndall found that the main gases of the atmosphere, nitrogen and oxygen, absorbed almost no heat at all. In contrast, water vapour and carbon dioxide, {2} present only in small amounts, absorbed it strongly. He realised that these gases act like a blanket, allowing sunlight to reach the ground {3} trapping some of the heat that the Earth gives off. Without water vapour, he wrote, the Earth's surface would be 'held fast in the iron grip of frost'. Tyndall suggested that changes in the amounts of these gases {4} have caused the great changes in climate revealed by geologists, such as the ice ages. He was also a keen mountaineer and made important studies of glaciers, and he was the first to explain why the sky is blue, {5} he attributed to the scattering of light by tiny particles.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgülden sonra kaya tuzunu niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(27) ----",
          ["although", "because", "unless", "since", "so"],
          "Az miktarda bulunmaları ile ısıyı güçlü biçimde soğurmaları zıttır: 'although'.",
        ],
        [
          "(28) ----",
          ["while", "unless", "until", "because", "so that"],
          "Güneş ışığının geçmesi ile ısının tutulması aynı anda gerçekleşir: 'while'.",
        ],
        [
          "(29) ----",
          ["might", "must not", "need not", "shall", "ought not"],
          "Olasılık bildiren kip: 'might have caused'.",
        ],
        [
          "(30) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra mavi gökyüzü olgusunu niteleyen ilgi zamiri: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Foote's experiment was simple, ----.",
      [
        "it linked gases to warming",
        "she was a campaigner for women's rights",
        "the cylinders were made of glass",
        "the meeting took place in August",
        "thermometers were common at the time",
      ],
      "'Although' zıtlık ister: Foote'un deneyi basit olsa da gazlar ile ısınma arasındaki önemli bir bağa işaret etti.",
    ],
    [
      "Tyndall closed the ends of his tube with rock salt ----.",
      [
        "as heat rays pass through it",
        "although salt is found in seawater",
        "unless the gas escaped",
        "so that he became famous",
        "while he worked in London",
      ],
      "Tyndall, kaya tuzu ısı ışınımının geçmesine izin verdiği için tüpün uçlarını onunla kapattı.",
    ],
    [
      "If the amount of carbon dioxide in the air doubles, ----.",
      [
        "the Earth should warm",
        "Arrhenius was born in Sweden",
        "the calculations were done by hand",
        "ice ages happened in the past",
        "coal was burned in factories",
      ],
      "Birinci tip koşul: havadaki karbondioksit miktarı iki katına çıkarsa Dünya'nın ortalama sıcaklığının artması beklenir.",
    ],
    [
      "----, Callendar collected temperature records from around the world.",
      [
        "Although he was not a professional scientist",
        "Because he worked with steam engines",
        "Unless the records had been lost",
        "So that the Royal Society met",
        "While the temperatures were falling",
      ],
      "Profesyonel bir bilim insanı olmamasına rağmen Callendar dünyanın dört bir yanından sıcaklık kayıtları topladı.",
    ],
    [
      "Scientists can study the ancient atmosphere ----.",
      [
        "by analysing air trapped in deep ice",
        "although Antarctica is very cold",
        "unless the ice has melted",
        "because Vostok is a Russian station",
        "so that the core was drilled",
      ],
      "Bilim insanları derin buzda hapsolmuş havayı analiz ederek eski atmosferi inceleyebilir.",
    ],
    [
      "The sudden cold period is thought to have begun ----.",
      [
        "when meltwater upset currents",
        "although the ice age was ending",
        "unless the flowers had disappeared",
        "because the period lasted many centuries",
        "while people were hunting mammoths",
      ],
      "Ani soğuk dönemin, eriyik suyunun Kuzey Atlantik'teki okyanus akıntılarını bozmasıyla başladığı düşünülmektedir.",
    ],
    [
      "Not only did the eruption kill tens of thousands of people, ----.",
      [
        "but it also cooled the world",
        "and it took place in Indonesia",
        "since the volcano was on an island",
        "so the sound travelled far",
        "unless ships were nearby",
      ],
      "'Not only ... but also' yapısı tamamlanır: patlama on binlerce kişiyi öldürmekle kalmadı, dünyanın her yerinde havayı da etkiledi.",
    ],
    [
      "Since the old bridge slowed the flow of the river, ----.",
      [
        "the water froze more easily",
        "it had many narrow arches",
        "it was built in the Middle Ages",
        "London was a busy city",
        "markets were popular",
      ],
      "'Since' neden bildirir: eski köprü nehrin akışını yavaşlattığı için su çok soğuk kışlarda daha kolay donuyordu.",
    ],
    [
      "Melting sea ice speeds up warming in the Arctic ----.",
      [
        "as dark water absorbs light",
        "although ice is made of water",
        "unless the summer is short",
        "so that polar bears are affected",
        "while the Arctic is very cold",
      ],
      "Erimekte olan deniz buzu, daha koyu okyanus daha fazla güneş ışığı soğurduğu için Kuzey Kutbu'ndaki ısınmayı hızlandırır.",
    ],
    [
      "Although air pollution reduced the sunlight reaching the ground for decades, ----.",
      [
        "cleaner air has reversed it",
        "many factories burned coal",
        "sunlight contains many colours",
        "the effect was measured in Israel",
        "cities are often polluted",
      ],
      "'Although' zıtlık ister: hava kirliliği onlarca yıl yere ulaşan güneş ışığını azaltsa da temiz hava o zamandan beri daha fazlasının geçmesine izin verdi.",
    ],
    [
      "Unless the causes of past climate changes are understood, ----.",
      [
        "forecasts will be harder",
        "ice ages lasted thousands of years",
        "many scientists study the oceans",
        "volcanoes erupt in many countries",
        "the Sun has sunspots",
      ],
      "'Unless' olumsuz koşul: geçmiş iklim değişikliklerinin nedenleri anlaşılmazsa gelecekteki değişiklikleri öngörmek daha zor olur.",
    ],
  ],
  enTr: [
    [
      "She suggested that an atmosphere with more carbon dioxide would make the Earth warmer.",
      [
        "Daha fazla karbondioksit içeren bir atmosferin Dünya'yı daha sıcak yapacağını öne sürdü.",
        "Karbondioksitin Dünya'yı soğuttuğunu öne sürdü.",
        "Atmosferdeki karbondioksitin Dünya'nın sıcaklığını etkilemediğini kanıtladı.",
        "Dünya ısındıkça atmosferdeki karbondioksitin azaldığını gösterdi.",
        "Daha fazla karbondioksit içeren bir atmosferin Dünya'yı daha soğuk yapacağını öne sürdü.",
      ],
      "'an atmosphere with more carbon dioxide' 'daha fazla karbondioksit içeren bir atmosfer', 'would make the Earth warmer' 'Dünya'yı daha sıcak yapacağını' karşılığıdır.",
    ],
    [
      "Water vapour and carbon dioxide hold back heat that would otherwise be lost to space.",
      [
        "Su buharı ve karbondioksit, aksi halde uzaya kaçacak olan ısıyı tutar.",
        "Su buharı ve karbondioksit, ısının uzaya kaçmasına yardım eder.",
        "Uzaydan gelen ısı, su buharı ve karbondioksit tarafından engellenir.",
        "Su buharı, karbondioksitin uzaya kaçmasını önler.",
        "Isı, su buharı ve karbondioksit olmadan da tutulabilir.",
      ],
      "'hold back heat' 'ısıyı tutar', 'that would otherwise be lost to space' 'aksi halde uzaya kaçacak olan' karşılığıdır.",
    ],
    [
      "He believed that burning coal would take thousands of years to change the climate significantly.",
      [
        "Kömür yakmanın iklimi önemli ölçüde değiştirmesinin binlerce yıl alacağına inanıyordu.",
        "Kömür yakmanın iklimi birkaç yıl içinde değiştireceğine inanıyordu.",
        "İklimin binlerce yıl boyunca kömür yakılmasını engellediğini düşünüyordu.",
        "Kömür yakmanın iklim üzerinde hiçbir etkisi olmadığından emindi.",
        "Kömür yakmanın iklimi önemli ölçüde değiştirmesinin yalnızca birkaç on yıl alacağından emindi.",
      ],
      "'burning coal would take thousands of years' 'kömür yakmanın binlerce yıl alacağına', 'to change the climate significantly' 'iklimi önemli ölçüde değiştirmesinin' karşılığıdır.",
    ],
    [
      "The ice core showed that carbon dioxide and temperature rose and fell together.",
      [
        "Buz karotu, karbondioksit ile sıcaklığın birlikte yükselip düştüğünü gösterdi.",
        "Buz karotu, sıcaklık yükselirken karbondioksitin düştüğünü gösterdi.",
        "Karbondioksit ve sıcaklık, buz karotunda hiç değişmedi.",
        "Buz karotu, sıcaklığın karbondioksitten bağımsız olduğunu kanıtladı.",
        "Buz karotu, karbondioksit ile sıcaklığın birbirinden bağımsız olarak yükselip düştüğünü gösterdi.",
      ],
      "'carbon dioxide and temperature rose and fell together' 'karbondioksit ile sıcaklığın birlikte yükselip düştüğünü' karşılığıdır.",
    ],
    [
      "The cold period ended as suddenly as it had begun.",
      [
        "Soğuk dönem, başladığı kadar ani bir şekilde sona erdi.",
        "Soğuk dönem yavaşça başladı ve aniden sona erdi.",
        "Soğuk dönemin ne zaman bittiği bilinmiyor.",
        "Soğuk dönem, binlerce yıl içinde yavaş yavaş sona erdi.",
        "Soğuk dönem, başlamadan önce sona erdi.",
      ],
      "'ended as suddenly as it had begun' 'başladığı kadar ani bir şekilde sona erdi' karşılığıdır.",
    ],
    [
      "The sunsets were so red that people in New York thought a fire had broken out.",
      [
        "Gün batımları o kadar kırmızıydı ki New York'taki insanlar bir yangın çıktığını sandı.",
        "New York'ta çıkan bir yangın, gün batımlarının kırmızı görünmesine neden oldu.",
        "New York'taki insanlar, kırmızı gün batımlarını görmezden geldi.",
        "Gün batımları, New York'ta yangınları söndürmek için kullanıldı.",
        "Kırmızı gün batımları, New York'ta yangınlara yol açtı.",
      ],
      "'so red that' 'o kadar kırmızıydı ki', 'people in New York thought a fire had broken out' 'New York'taki insanlar bir yangın çıktığını sandı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Toplantıda bulguları onun yerine bir erkek bilim insanı okudu.",
      [
        "At the meeting, her findings were read out by a male scientist instead of her.",
        "At the meeting, she read out the findings of a male scientist.",
        "A male scientist refused to read her findings at the meeting.",
        "She presented her findings at the meeting herself.",
        "At the meeting, her findings were read out by herself instead of a male scientist.",
      ],
      "'onun yerine bir erkek bilim insanı okudu' 'were read out by a male scientist instead of her', 'toplantıda' 'at the meeting' karşılığıdır.",
    ],
    [
      "Atmosferin ana gazları ısıyı neredeyse hiç soğurmaz.",
      [
        "The main gases of the atmosphere absorb almost no heat.",
        "The main gases of the atmosphere absorb most of the heat.",
        "Heat is absorbed only by the main gases of the atmosphere.",
        "The atmosphere contains no gases that absorb heat.",
        "The main gases of the atmosphere produce heat.",
      ],
      "'Atmosferin ana gazları' 'the main gases of the atmosphere', 'ısıyı neredeyse hiç soğurmaz' 'absorb almost no heat' karşılığıdır.",
    ],
    [
      "Bir buharlı makine mühendisi, son elli yılda dünyanın ısındığını gösterdi.",
      [
        "A steam engineer showed that the world had warmed over the previous fifty years.",
        "A steam engineer showed that the world had cooled over fifty years.",
        "Steam engines were used for fifty years to warm the world.",
        "The world's engineers have been warming for fifty years.",
        "A steam engineer predicted that the world would warm over the following fifty years.",
      ],
      "'Bir buharlı makine mühendisi' 'a steam engineer', 'son elli yılda dünyanın ısındığını gösterdi' 'showed that the world had warmed over the previous fifty years' karşılığıdır.",
    ],
    [
      "Bugünkü karbondioksit düzeyleri, buz karotunda kaydedilen her dönemden daha yüksektir.",
      [
        "Today's carbon dioxide levels are higher than at any time recorded in the ice core.",
        "Carbon dioxide levels in the ice core are higher than today's.",
        "Today's carbon dioxide levels are the same as in the past.",
        "The ice core shows that carbon dioxide levels have always been falling.",
        "Today's carbon dioxide levels are lower than at any time recorded in the ice core.",
      ],
      "'Bugünkü karbondioksit düzeyleri' 'today's carbon dioxide levels', 'buz karotunda kaydedilen her dönemden daha yüksektir' 'are higher than at any time recorded in the ice core' karşılığıdır.",
    ],
    [
      "Patlamanın sesi binlerce kilometre uzaktan duyuldu.",
      [
        "The sound of the eruption was heard thousands of kilometres away.",
        "The eruption was too quiet to be heard nearby.",
        "Thousands of people heard the eruption in the city.",
        "The sound of the eruption lasted for thousands of hours.",
        "The eruption could be seen from thousands of kilometres away but not heard.",
      ],
      "'Patlamanın sesi' 'the sound of the eruption', 'binlerce kilometre uzaktan duyuldu' 'was heard thousands of kilometres away' karşılığıdır.",
    ],
    [
      "Taze kar, üzerine düşen güneş ışığının büyük bölümünü geri yansıtır.",
      [
        "Fresh snow reflects most of the sunlight that falls on it.",
        "Fresh snow absorbs most of the sunlight that falls on it.",
        "Sunlight melts fresh snow very quickly.",
        "Fresh snow falls only when there is no sunlight.",
        "Snow reflects sunlight only when it is old.",
      ],
      "'Taze kar' 'fresh snow', 'üzerine düşen güneş ışığının büyük bölümünü geri yansıtır' 'reflects most of the sunlight that falls on it' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1894 and 1895, the Swedish chemist Svante Arrhenius set out to answer a question that had puzzled scientists for decades: what had caused the ice ages? He suspected that variations in atmospheric carbon dioxide might be to blame. Using measurements of how much heat radiation the gas absorbs, together with data on the temperature and humidity of the air at different latitudes, he calculated how the Earth's average temperature would change if the amount of carbon dioxide were altered. The work involved tens of thousands of calculations, all carried out by hand, and Arrhenius later described it as tedious, though it took his mind off the recent end of his marriage. In 1896 he published his results. He estimated that halving the amount of carbon dioxide would lower temperatures by four to five degrees, enough to bring about an ice age, and that doubling it would raise them by five to six degrees. Arrhenius also realised that burning coal was adding carbon dioxide to the air, but he thought it would take thousands of years for this to have a large effect, and he welcomed the prospect, believing that a warmer climate would improve harvests in cold countries such as Sweden. His estimates were rough, but modern calculations are of a similar order.",
      questions: [
        [
          "According to the passage, Arrhenius's original aim was to ----.",
          [
            "explain the cause of the ice ages",
            "prove that coal was harmful",
            "improve harvests in Sweden",
            "measure the temperature of the oceans",
            "design a new kind of thermometer",
          ],
          "Metne göre buzul çağlarının nedenini açıklamaya çalışıyordu.",
        ],
        [
          "Arrhenius regarded the warming caused by burning coal as ----.",
          [
            "slow and potentially beneficial",
            "rapid and dangerous",
            "impossible to measure",
            "the main cause of ice ages",
            "limited to cities",
          ],
          "Etkinin binlerce yıl alacağını düşünüyor ve daha sıcak iklimi olumlu buluyordu.",
        ],
        [
          "It can be understood from the passage that Arrhenius's estimates ----.",
          [
            "were not far from modern results",
            "have been shown to be completely wrong",
            "were made using computers",
            "applied only to Sweden",
            "were ignored by later scientists",
          ],
          "Tahminleri kaba olsa da modern hesaplamalar benzer büyüklüktedir.",
        ],
      ],
    },
    {
      text:
        "In 1938, an English engineer named Guy Stewart Callendar presented a paper to the Royal Meteorological Society in London. Callendar was not a professional scientist; he was an expert on steam engines who studied the climate in his spare time. Over several years, he had collected temperature records from about 150 weather stations around the world and found that the Earth had warmed noticeably over the previous half-century. He also gathered measurements of carbon dioxide in the atmosphere and concluded that its concentration had increased by about ten per cent since the late nineteenth century, mainly because of the burning of coal and oil. Callendar argued that this increase was largely responsible for the warming. The experts at the meeting were polite but sceptical. They pointed out that the temperature records might be affected by the growth of cities around weather stations, and they doubted that such a small change in a minor gas could have such an effect. Callendar continued to publish on the subject for the next twenty years, but his ideas attracted little attention. Today, historians recognise that his analysis was broadly correct, and the link between fossil fuel use and rising temperatures that he described is sometimes called the Callendar effect.",
      questions: [
        [
          "According to the passage, Callendar studied the climate ----.",
          [
            "as a hobby outside his main work",
            "as a professor of meteorology",
            "on behalf of the government",
            "only in the city of London",
            "with the help of the Royal Society",
          ],
          "Metne göre buhar makineleri uzmanıydı ve iklimi boş zamanlarında inceliyordu.",
        ],
        [
          "One reason the experts doubted Callendar's conclusions was that ----.",
          [
            "growing cities might have affected the temperature records",
            "his records came from too few countries",
            "he had not measured carbon dioxide",
            "the warming was too large to be real",
            "steam engines produce no carbon dioxide at all",
          ],
          "Uzmanlar istasyonların çevresindeki kentlerin büyümesinin kayıtları etkileyebileceğini belirtti.",
        ],
        [
          "It can be inferred from the passage that Callendar's work ----.",
          [
            "was appreciated more after his time than during it",
            "was immediately accepted by all scientists",
            "was proved wrong by later research",
            "concerned only steam engines",
            "was never published",
          ],
          "Fikirleri yaşarken az ilgi gördü, ama bugün tarihçiler analizinin büyük ölçüde doğru olduğunu kabul ediyor.",
        ],
      ],
    },
    {
      text:
        "The Russian research station Vostok lies near the centre of the Antarctic ice sheet, where temperatures have fallen below minus eighty degrees. Beneath it, snow has been falling and accumulating for hundreds of thousands of years, gradually compressing into ice and trapping small bubbles of air. In the 1970s, Russian scientists began drilling deep into the ice, and by 1998 an international team had extracted a core more than 3,600 metres long. The ice at the bottom of the core had formed about 420,000 years ago. By measuring the proportions of different forms of hydrogen and oxygen in the ice, scientists could estimate the temperature at the time the snow fell, and by analysing the trapped air, they could measure the amount of carbon dioxide and methane in the ancient atmosphere. The results revealed four complete cycles of ice ages and warm periods. Throughout this time, the levels of carbon dioxide rose and fell closely in step with temperature. The record also showed that, in none of these cycles, did carbon dioxide exceed about 300 parts per million. Today, largely as a result of the burning of fossil fuels, the level is well above 400 parts per million, higher than at any time recorded in the core.",
      questions: [
        [
          "According to the passage, scientists estimated past temperatures by ----.",
          [
            "measuring different forms of hydrogen and oxygen in the ice",
            "counting the bubbles of air",
            "studying fossils found in the ice",
            "measuring the length of the core",
            "observing the modern climate around Antarctica",
          ],
          "Metne göre buzdaki farklı hidrojen ve oksijen formlarının oranlarını ölçerek sıcaklığı tahmin ettiler.",
        ],
        [
          "The ice core showed that, over 420,000 years, ----.",
          [
            "carbon dioxide and temperature changed together",
            "the climate never changed",
            "carbon dioxide levels were higher than today",
            "there were no ice ages",
            "methane was absent from the air",
          ],
          "Karbondioksit düzeyleri sıcaklıkla yakından uyumlu biçimde yükselip düştü.",
        ],
        [
          "The writer mentions the figure of 300 parts per million in order to ----.",
          [
            "emphasise how unusual today's levels are",
            "explain how the ice was drilled",
            "show that the core was too short",
            "prove that methane is more important",
            "suggest that an ice age is coming",
          ],
          "Bu rakam bugünkü 400'ün üzerindeki düzeylerin ne kadar olağandışı olduğunu vurgulamak için verilir.",
        ],
      ],
    },
    {
      text:
        "About 14,700 years ago, as the last ice age came to an end, the Northern Hemisphere warmed rapidly. Forests spread northwards, and glaciers retreated. Then, around 12,900 years ago, the warming suddenly reversed. Within a few decades, temperatures in places such as Greenland and northern Europe fell back almost to ice-age levels, and they remained there for about 1,200 years. This cold period is known as the Younger Dryas, after Dryas octopetala, a small flowering plant of cold, open landscapes whose pollen and leaves suddenly reappear in lake sediments from the period. Equally striking was the way it ended: evidence from Greenland ice cores suggests that temperatures there rose by several degrees within as little as a decade. The most widely accepted explanation is that an enormous volume of fresh water from melting ice sheets in North America poured into the North Atlantic, either through the St Lawrence River or northwards towards the Arctic. Because fresh water is less dense than salt water, it may have prevented the sinking of cold surface water that drives an important ocean current carrying heat northwards. Other explanations have been proposed, including the impact of a comet, but they remain controversial. The Younger Dryas shows that the climate can change far more quickly than was once thought.",
      questions: [
        [
          "According to the passage, the Younger Dryas is named after ----.",
          [
            "a plant whose remains appear in sediments of the period",
            "a scientist who discovered it",
            "a lake in northern Europe",
            "a type of glacier",
            "a comet that may have struck the Earth",
          ],
          "Metne göre adını, polen ve yaprakları o dönemin göl tortularında yeniden görülen küçük bir bitkiden alır.",
        ],
        [
          "Fresh water may have affected ocean currents because it ----.",
          [
            "is lighter than salt water and does not sink easily",
            "is warmer than seawater",
            "contains more nutrients",
            "flows faster than seawater",
            "freezes at a higher temperature",
          ],
          "Tatlı su tuzlu sudan daha az yoğundur ve soğuk yüzey suyunun batmasını engellemiş olabilir.",
        ],
        [
          "The writer's final remark suggests that ----.",
          [
            "major climate change can happen very rapidly",
            "comets often cause cold periods",
            "the ice age is about to return",
            "fresh water is dangerous to fish",
            "scientists agree on every explanation",
          ],
          "Son cümle iklimin bir zamanlar düşünülenden çok daha hızlı değişebileceğini vurgular.",
        ],
      ],
    },
    {
      text:
        "Krakatoa, a volcanic island lying between Java and Sumatra in what is now Indonesia, was destroyed on 27 August 1883 by a series of colossal eruptions. The final explosion was heard as far away as the island of Rodrigues in the Indian Ocean, almost 5,000 kilometres distant, and is often described as the loudest sound in recorded history. Barometers around the world recorded the pressure wave as it travelled around the Earth several times. The eruption and the tsunamis it caused killed more than 36,000 people in the surrounding region. Its effects were felt much further away. Huge quantities of ash and sulphur gases were thrown into the upper atmosphere, where they spread around the globe. For months, people across the world saw extraordinary sunsets, glowing red, orange and purple; in New York and elsewhere, fire engines were called out because people believed the red sky was caused by distant fires. The particles also reflected some sunlight back into space, and average temperatures in the Northern Hemisphere fell by around half a degree in the following year. The event gave scientists one of the first opportunities to study how volcanic eruptions can affect the global climate, and observations made at the time contributed to the discovery of the fast winds that blow far above the ground and are today called the jet stream.",
      questions: [
        [
          "According to the passage, the pressure wave from the eruption ----.",
          [
            "travelled around the world more than once",
            "was recorded only in Indonesia",
            "caused the sunsets to turn red",
            "was too weak to be measured",
            "destroyed many barometers in Europe",
          ],
          "Metne göre basınç dalgası Dünya'nın çevresini birkaç kez dolaştı.",
        ],
        [
          "Fire engines were called out in New York because ----.",
          [
            "people mistook the red sky for the glow of fires",
            "ash from the eruption had set buildings alight",
            "the eruption had been heard there",
            "a tsunami had reached the city",
            "temperatures had risen sharply",
          ],
          "İnsanlar kırmızı gökyüzünün uzak yangınlardan kaynaklandığını sandı.",
        ],
        [
          "It can be inferred from the passage that the drop in temperature was caused by ----.",
          [
            "particles reflecting sunlight away from the Earth",
            "the tsunamis that followed the eruption",
            "the loud noise of the explosion",
            "fires started by the volcano",
            "the fast winds of the jet stream",
          ],
          "Parçacıklar güneş ışığının bir kısmını uzaya geri yansıttı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "From the 1600s until 1814, London's river turned to solid ice from bank to bank during a number of exceptionally harsh winters. ---- Stalls selling food and drink were set up, and people played games and even roasted whole animals on the ice.",
      [
        "On these occasions, Londoners held lively 'frost fairs' on the frozen river.",
        "The Thames rises in the Cotswold hills west of Oxford.",
        "Many rivers flow through large cities.",
        "Winter is the coldest season of the year.",
        "Ice skating has become a popular sport in many countries with cold winters.",
      ],
      "Boşluktan sonra donmuş nehirde kurulan tezgâhlar ve oyunlar anlatılır; boşluğa Londralıların donmuş nehirde canlı 'buz panayırları' düzenlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Between 1645 and 1715, astronomers observed remarkably few sunspots on the surface of the Sun. ---- Some scientists have suggested a link, although most now believe that volcanic eruptions played a larger part in the cold.",
      [
        "This period coincided with one of the coldest phases of the Little Ice Age in Europe.",
        "Sunspots are dark areas on the surface of the Sun.",
        "Telescopes were improved in the seventeenth century.",
        "Many astronomers kept careful records.",
        "The Sun is a very large star made mainly of hydrogen and helium.",
      ],
      "Boşluktan sonra 'a link' denir; boşluğa bu dönemin Avrupa'daki Küçük Buzul Çağı'nın en soğuk evrelerinden biriyle çakıştığını söyleyen cümle gelmelidir.",
    ],
    [
      "Different surfaces reflect different amounts of sunlight. ---- When ice and snow melt, therefore, the darker surfaces beneath absorb more heat, which leads to further warming and more melting.",
      [
        "Fresh snow reflects most of the light that falls on it, whereas the open ocean absorbs nearly all of it.",
        "Snow is formed from tiny ice crystals.",
        "The ocean covers most of the planet.",
        "The amount of sunlight varies with the seasons and latitude.",
        "Skiing first became a popular holiday activity in the Alps around 1900.",
      ],
      "Boşluktan sonra 'therefore' ile buz eridiğinde koyu yüzeylerin daha çok ısı soğurduğu anlatılır; boşluğa taze karın ışığın çoğunu yansıttığını, okyanusun ise çoğunu soğurduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "High above the Arctic in winter, a large mass of very cold air circulates around the North Pole, held in place by strong winds. ---- In February 2021, such an event brought freezing temperatures and widespread power cuts to the southern United States.",
      [
        "When these winds weaken, the cold air can spill southwards into regions that rarely experience it.",
        "The Arctic is home to polar bears and seals.",
        "Power cuts are common in some countries.",
        "February is usually the shortest month.",
        "Winds are caused by differences in air pressure between regions.",
      ],
      "Boşluktan sonra 'such an event' denir; boşluğa rüzgârlar zayıfladığında soğuk havanın güneye taşabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1980s, the scientist Gerry Stanhill noticed that the amount of sunlight reaching the ground in Israel had fallen since the 1950s. ---- Researchers attributed this 'global dimming' to tiny particles of air pollution, and the trend partly reversed after many countries introduced clean air laws.",
      [
        "Similar declines were later found in many other parts of the world.",
        "Israel has a hot, dry climate.",
        "Solar panels need plenty of sunlight.",
        "Many scientists study the weather.",
        "Weather satellites photograph clouds from far above the Earth.",
      ],
      "Boşluktan sonra bu olgunun 'küresel kararma' olarak adlandırıldığı anlatılır; boşluğa benzer düşüşlerin dünyanın başka yerlerinde de bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1885, a young Vermont farmer named Wilson Bentley attached a camera to a microscope and took the first photograph of a single snowflake. ---- After studying thousands of them, he concluded that no two snowflakes are exactly alike.",
      [
        "Over the next forty years, he photographed more than five thousand snow crystals.",
        "Vermont is known for its cold winters.",
        "Cameras were expensive at that time.",
        "Many farmers keep cows.",
        "Microscopes magnify small objects so that their details can be seen.",
      ],
      "Boşluktan sonra 'After studying thousands of them' denir; boşluğa sonraki kırk yılda beş binden fazla kar kristali fotoğrafladığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Atmospheric rivers are long, narrow bands of water vapour that flow through the sky.",
        "A single atmospheric river can carry more water than the largest river on Earth.",
        "When they reach land, they can bring heavy rain and snow, especially to mountain ranges.",
        "Rivers have been used for transport since ancient times.",
        "They provide much of California's water supply but can also cause serious floods.",
      ],
      odd: 3,
      why: "Parça atmosferik nehirleri anlatır. Nehirlerin eski çağlardan beri ulaşım için kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Warm, dry winds sometimes blow down the sheltered side of mountain ranges.",
        "As the air descends, it is compressed and heats up.",
        "Mountains are popular destinations for walkers and climbers.",
        "These winds can raise temperatures by many degrees in just a few hours.",
        "In North America they are called chinooks, and in the Alps they are known as foehn winds.",
      ],
      odd: 2,
      why: "Parça dağların rüzgâr altı yamacından esen sıcak rüzgârları anlatır. Dağların yürüyüşçü ve tırmanıcılar için popüler yerler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On sunny days near the coast, the land heats up faster than the sea.",
        "The warm air over the land rises, and cooler air from the sea flows in to replace it.",
        "This creates a pleasant sea breeze, usually in the afternoon.",
        "Many people choose to live near the coast.",
        "At night, the pattern is reversed and a breeze blows from the land towards the sea.",
      ],
      odd: 3,
      why: "Parça deniz meltemini anlatır. Pek çok kişinin kıyıya yakın yaşamayı seçtiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the 1930s, a severe drought hit the farming states of the American prairies.",
        "Farmers had ploughed up the native grasses that held the soil in place.",
        "Strong winds lifted the dry soil into enormous dust storms that darkened the sky.",
        "Thousands of families gave up farming and travelled to California hoping for jobs.",
        "Wheat is used to make bread and pasta.",
      ],
      odd: 4,
      why: "Parça 1930'lardaki toz fırtınalarını anlatır. Buğdayın ekmek ve makarna yapımında kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On the dry coast of northern Chile, it almost never rains, but thick fog often drifts in from the sea.",
        "Villagers have set up large nets on hillsides to catch the tiny water droplets in the fog.",
        "The droplets collect on the nets and drip into pipes and tanks.",
        "Chile is a long, narrow country on the west coast of South America.",
        "In this way, communities can obtain thousands of litres of water a day.",
      ],
      odd: 3,
      why: "Parça Şili'de sisten su toplamayı anlatır. Şili'nin Güney Amerika'nın batı kıyısında uzun ve dar bir ülke olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In late autumn and winter, very cold air sometimes passes over the relatively warm waters of the Great Lakes.",
        "The air picks up moisture and heat from the lakes.",
        "Fishing is an important industry on the Great Lakes.",
        "As it reaches land, the moisture falls as heavy snow.",
        "Some towns downwind of the lakes receive several metres of snow each winter.",
      ],
      odd: 2,
      why: "Parça göl etkili kar yağışını anlatır. Balıkçılığın Büyük Göller'de önemli bir sektör olduğunu söyleyen III. cümle konu dışıdır.",
    },
  ],
};
