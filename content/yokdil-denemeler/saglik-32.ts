import type { YokdilDeneme } from "./types";

export const SAGLIK_32: YokdilDeneme = {
  no: 32,
  field: "saglik",
  vocab: [
    [
      "Even in constant darkness, the plant's leaves continued to open and close at ---- intervals.",
      ["regular", "random", "noisy", "sudden", "careless"],
      "Sürekli karanlıkta bile bitkinin yapraklarının 'düzenli' (regular) aralıklarla açılıp kapanmaya devam ettiği anlatılır.",
    ],
    [
      "The researchers noticed that the sleepers' eyes moved rapidly ---- the closed eyelids.",
      ["beneath", "across", "beyond", "towards", "despite"],
      "Araştırmacıların uyuyanların gözlerinin kapalı göz kapaklarının 'altında' (beneath) hızla hareket ettiğini fark ettiği anlatılır.",
    ],
    [
      "After eleven days without sleep, the student's memory and concentration were severely ----.",
      ["impaired", "improved", "rewarded", "described", "repeated"],
      "On bir gün uykusuz kaldıktan sonra öğrencinin belleğinin ve dikkatinin ciddi biçimde 'bozulduğu' (impaired) anlatılır.",
    ],
    [
      "People with this condition may suddenly lose muscle strength when they laugh or feel ---- emotions.",
      ["intense", "mild", "artificial", "hidden", "polite"],
      "Bu hastalığa sahip kişilerin gülerken ya da 'yoğun' (intense) duygular hissettiklerinde aniden kas gücünü kaybedebileceği anlatılır.",
    ],
    [
      "Without clocks or daylight, the volunteers' daily cycles gradually ---- from the normal 24 hours.",
      ["drifted", "recovered", "escaped", "returned", "arrived"],
      "Saat ya da gün ışığı olmadan gönüllülerin günlük döngülerinin normal 24 saatten yavaş yavaş 'kaydığı' (drifted) anlatılır.",
    ],
    [
      "Many drivers ---- for a few seconds without realising it, which can cause serious accidents.",
      ["nod off", "turn up", "give in", "set off", "look up"],
      "Pek çok sürücünün farkında olmadan birkaç saniyeliğine 'uyuklayıp daldığı' (nod off) ve bunun ciddi kazalara yol açabileceği anlatılır.",
    ],
  ],
  grammar: [
    [
      "De Mairan ---- that the mimosa's leaves moved even when the plant was kept in the dark.",
      ["observed", "has observed", "observes", "will observe", "was observed"],
      "1729'da tamamlanmış geçmiş eylem: 'observed'.",
    ],
    [
      "Aserinsky ---- the eye movements of sleeping volunteers for several months before he published his findings.",
      ["had been recording", "records", "will record", "is recording", "has been recorded"],
      "Geçmişteki bir olaydan önce süregelen eylem: 'had been recording'.",
    ],
    [
      "If the volunteers had been able to see daylight, their rhythms ---- so far.",
      ["would not have drifted", "will not drift", "do not drift", "had not drifted", "are not drifting"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would not have drifted'.",
    ],
    [
      "The student ---- by a sleep researcher throughout his eleven days without sleep.",
      ["was monitored", "monitored", "has monitored", "is monitoring", "will monitor"],
      "Öğrenci bir araştırmacı tarafından izlenmiştir; edilgen yapı: 'was monitored'.",
    ],
    [
      "---- he had lost track of time, Siffre believed that far fewer days had passed.",
      ["Because", "Although", "Unless", "Whereas", "So that"],
      "Zaman algısını yitirmesi, daha az gün geçtiğini sanmasının nedenidir: 'Because'.",
    ],
    [
      "Narcolepsy is a disorder ---- people fall asleep suddenly during the day.",
      ["in which", "which", "whose", "what", "who"],
      "Hastalığın içinde gerçekleşen durum; edat + ilgi zamiri: 'in which'.",
    ],
    [
      "Children with night terrors usually remember nothing the next morning, ---- often surprises their parents.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer people stay awake, ---- their performance on simple tasks becomes.",
      ["the worse", "the worst", "much worse", "worse than", "so bad"],
      "'The longer ..., the worse ...' paralel yapısı: 'the worse'.",
    ],
    [
      "Hardly ---- the volunteers entered the cave when they lost all sense of the time of day.",
      ["had", "did", "were", "have", "was"],
      "'Hardly ... when' devrik yapısında geçmiş mükemmel zaman: 'had'.",
    ],
    [
      "Pilots who took a short nap performed better ---- those who stayed awake.",
      ["than", "as", "from", "to", "with"],
      "Karşılaştırma yapısı: 'better than'.",
    ],
    [
      "Doctors recommend ---- screens for an hour before going to bed.",
      ["avoiding", "to avoid", "avoid", "avoided", "be avoided"],
      "'recommend' fiilinden sonra -ing gelir: 'avoiding'.",
    ],
    [
      "Dolphins are able to sleep with one half of the brain ---- the other half remains awake.",
      ["while", "unless", "so that", "until", "because of"],
      "Eşzamanlılık bildiren bağlaç: 'while'.",
    ],
    [
      "It is essential that shift workers ---- enough rest between their shifts.",
      ["get", "gets", "got", "to get", "getting"],
      "'It is essential that' sonrası yalın fiil (subjunctive): 'get'.",
    ],
    [
      "The disease is so rare ---- only a few dozen families in the world are known to carry it.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1729, the French astronomer Jean-Jacques d'Ortous de Mairan carried out a simple experiment now seen as the starting point for the study of biological clocks. He had noticed that the leaves of the mimosa plant opened during the day and closed at night, and like most people of his time he assumed {1} the plant was simply responding to sunlight. To test this idea, he placed a mimosa in a dark cupboard, {2} it received no light at all. To his surprise, the leaves continued to open and close at roughly the same times each day. De Mairan concluded that the plant could sense the time of day without seeing the sun, {3} he did not try to explain how. His findings were described in a short note presented to the French Academy of Sciences by a friend, {4} de Mairan himself was busy with astronomy. It took nearly two centuries for scientists to accept that most living things, including humans, possess internal clocks {5} keep time even in the absence of external signals.",
      blanks: [
        [
          "(21) ----",
          ["that", "what", "which", "whose", "if"],
          "'assumed that' isim cümleciği: 'that'.",
        ],
        [
          "(22) ----",
          ["where", "which", "when", "whose", "who"],
          "'a dark cupboard' yer bildirdiği için: 'where'.",
        ],
        [
          "(23) ----",
          ["although", "because", "unless", "since", "so"],
          "Bitkinin zamanı algılayabildiği sonucuna varması ile bunu açıklamaya çalışmaması zıttır: 'although'.",
        ],
        [
          "(24) ----",
          ["as", "unless", "although", "whereas", "until"],
          "Notun bir arkadaşı tarafından sunulmasının nedeni de Mairan'ın astronomiyle meşgul olmasıdır: 'as'.",
        ],
        [
          "(25) ----",
          ["that", "what", "who", "where", "whose"],
          "'internal clocks' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
      ],
    },
    {
      text:
        "Until the middle of the twentieth century, most scientists believed that sleep was a passive condition during which the brain merely shut down until morning. In 1951, Eugene Aserinsky, who was studying for a doctorate in Chicago, was asked by his professor, Nathaniel Kleitman, to study the slow eye movements that occur as people fall asleep. Aserinsky attached electrodes near the eyes of volunteers, {1} his own eight-year-old son, and recorded their eye activity throughout the night. He noticed that at regular intervals the eyes began to dart rapidly from side to side, {2} the sleeper was not awake. When volunteers were woken during these periods, they usually reported vivid dreams, {3} those woken at other times rarely did. In 1953, Aserinsky and Kleitman published their discovery of what came to be called rapid eye movement, or REM, sleep. The finding showed that the sleeping brain goes through distinct stages and {4} at certain times it is almost as active as when awake. It opened up the modern science of sleep and led to the founding of sleep laboratories {5} the world.",
      blanks: [
        [
          "(26) ----",
          ["including", "except", "despite", "instead of", "regardless of"],
          "Gönüllüler arasında kendi oğlunun da bulunduğu anlatılır: 'including'.",
        ],
        [
          "(27) ----",
          ["even though", "because", "so that", "as soon as", "in case"],
          "Gözlerin hızla hareket etmesi ile uyuyanın uyanık olmaması zıttır: 'even though'.",
        ],
        [
          "(28) ----",
          ["whereas", "because", "unless", "so", "until"],
          "REM'de uyandırılanlar ile diğer zamanlarda uyandırılanlar karşılaştırılır: 'whereas'.",
        ],
        [
          "(29) ----",
          ["that", "what", "which", "whose", "how"],
          "'showed that ... and that ...' isim cümleciği: 'that'.",
        ],
        [
          "(30) ----",
          ["around", "among", "between", "upon", "within"],
          "'around the world' kalıbı: 'around'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the mimosa was kept in complete darkness, ----.",
      [
        "its leaves still opened in the morning",
        "de Mairan was an astronomer",
        "the plant came from South America",
        "the experiment took place in 1729",
        "the cupboard was in Paris",
      ],
      "'Although' zıtlık ister: mimoza tamamen karanlıkta tutulsa da yaprakları sabah yine açıldı.",
    ],
    [
      "Volunteers were woken during periods of rapid eye movement ----.",
      [
        "to find out whether they were dreaming",
        "although they were sleeping in a laboratory",
        "unless the electrodes had been removed",
        "because Kleitman was a professor",
        "while the study was published in 1953",
      ],
      "Gönüllüler rüya görüp görmediklerini anlamak için hızlı göz hareketi dönemlerinde uyandırıldı.",
    ],
    [
      "If people live without any clues about the time of day, ----.",
      [
        "their daily cycles tend to become slightly longer",
        "the cave they used was in the state of Kentucky",
        "the experiment lasted for about a month",
        "temperatures underground stay the same",
        "many caves are popular with tourists",
      ],
      "Birinci tip koşul: insanlar zamana dair hiçbir ipucu olmadan yaşarsa günlük döngüleri biraz uzama eğilimi gösterir.",
    ],
    [
      "----, Siffre was astonished to learn how much time had really passed.",
      [
        "On emerging from the cave",
        "Although he was a geologist",
        "Unless he had carried a watch",
        "Because the cave was very cold",
        "Since he was alone underground",
      ],
      "Mağaradan çıkınca Siffre gerçekte ne kadar zaman geçtiğini öğrenip şaşırdı.",
    ],
    [
      "The student recovered quickly after his experiment, ----.",
      [
        "sleeping for about fourteen hours the first night",
        "although it was part of a science project",
        "unless his friends had kept him awake",
        "because he lived in San Diego",
        "so that the record was broken later",
      ],
      "Öğrenci deneyden sonra ilk gece yaklaşık on dört saat uyuyarak hızla toparlandı.",
    ],
    [
      "People with narcolepsy lack a brain chemical ----.",
      [
        "that helps to keep them awake",
        "although the disease is rare",
        "unless they were born with it",
        "because dogs can also develop it",
        "while the gene was found in 1999",
      ],
      "'that' ilgi zamiriyle: narkolepsi hastalarında uyanık kalmalarına yardım eden bir beyin kimyasalı eksiktir.",
    ],
    [
      "Not only do night terrors occur in deep sleep, ----.",
      [
        "but they also usually happen early in the night",
        "and the child had been asleep for hours",
        "since parents are often frightened",
        "so most children grow out of them",
        "unless the child is very young",
      ],
      "'Not only ... but also' yapısı tamamlanır: gece terörleri yalnızca derin uykuda olmakla kalmaz, genellikle gecenin erken saatlerinde de görülür.",
    ],
    [
      "Since teenagers' body clocks naturally shift later, ----.",
      [
        "they often find it hard to fall asleep early",
        "most of them attend secondary school",
        "many parents worry about their behaviour",
        "the study was carried out in Germany",
        "smartphones are popular among young people",
      ],
      "'Since' neden bildirir: gençlerin vücut saati doğal olarak geciktiği için erken uyumakta sıklıkla zorlanırlar.",
    ],
    [
      "Night shift work may be harmful to health ----.",
      [
        "as it disrupts body rhythms",
        "although many nurses work at night",
        "unless the workers are paid more",
        "so that hospitals stay open",
        "while factories need workers",
      ],
      "Gece vardiyası, vücudun doğal ritimlerini bozduğu için sağlığa zararlı olabilir.",
    ],
    [
      "Although a short nap can improve alertness, ----.",
      [
        "a long one may leave people feeling groggy",
        "pilots work long and irregular hours",
        "the study was carried out by NASA",
        "many cultures have a tradition of resting",
        "aircraft often fly through the night",
      ],
      "'Although' zıtlık ister: kısa bir şekerleme dikkati artırsa da uzun bir şekerleme insanları sersem bırakabilir.",
    ],
    [
      "Unless drivers stop to rest when they feel tired, ----.",
      [
        "they risk falling asleep at the wheel",
        "the roads are busiest in the evening",
        "most cars now have air conditioning",
        "long journeys are common in summer",
        "motorways have service stations",
      ],
      "'Unless' olumsuz koşul: sürücüler yorgun hissettiklerinde dinlenmek için durmazsa direksiyonda uyuyakalma riskiyle karşılaşırlar.",
    ],
  ],
  enTr: [
    [
      "The experiment suggested that the plant had an internal sense of time.",
      [
        "Deney, bitkinin içsel bir zaman duygusuna sahip olduğunu düşündürdü.",
        "Deney, bitkinin zamanı yalnızca güneş ışığından algıladığını gösterdi.",
        "Bitki, karanlık dolapta tutulduğu deney sırasında zaman duygusunu tamamen kaybetti.",
        "Deney, bitkilerin zaman duygusu olmadığını kanıtladı.",
        "Bitkinin zaman duygusu, deneyden sonra güçlendi.",
      ],
      "'suggested that' 'düşündürdü', 'had an internal sense of time' 'içsel bir zaman duygusuna sahip olduğunu' karşılığıdır.",
    ],
    [
      "People woken during REM sleep usually reported that they had been dreaming.",
      [
        "REM uykusu sırasında uyandırılan kişiler genellikle rüya gördüklerini bildirdi.",
        "REM uykusu sırasında rüya görenler, uyandırılmaktan hoşlanmadı.",
        "Rüya gören kişiler, REM uykusundan kendiliğinden uyandı.",
        "REM uykusunda uyandırılanlar, rüyalarını hiç hatırlamadı.",
        "Kişiler, REM uykusuna girmeden önce uyandırıldıklarında rüya gördüklerini sık sık bildirdi.",
      ],
      "'People woken during REM sleep' 'REM uykusu sırasında uyandırılan kişiler', 'reported that they had been dreaming' 'rüya gördüklerini bildirdi' karşılığıdır.",
    ],
    [
      "Living underground without a watch, he greatly underestimated how long he had been there.",
      [
        "Yeraltında saatsiz yaşarken orada ne kadar süre kaldığını olduğundan çok daha kısa tahmin etti.",
        "Yeraltında saatsiz yaşadığı için orada kaldığı süreyi tam olarak bildi.",
        "Yeraltında saatini kaybettiği için mağaradan erken çıktı.",
        "Orada kaldığı süreyi olduğundan uzun sandı.",
        "Saati olmadan yeraltında yaşadığı için orada ne kadar kaldığını olduğundan çok daha uzun sandı.",
      ],
      "'Living underground without a watch' 'yeraltında saatsiz yaşarken', 'greatly underestimated how long he had been there' 'ne kadar kaldığını çok daha kısa tahmin etti' karşılığıdır.",
    ],
    [
      "Going without sleep for several days can cause confusion and even hallucinations.",
      [
        "Birkaç gün uykusuz kalmak, zihin karışıklığına ve hatta halüsinasyonlara yol açabilir.",
        "Halüsinasyonlar, birkaç gün süren uykusuzluğu tedavi edebilir.",
        "Zihin karışıklığı yaşayan kişiler, birkaç gün boyunca uyuyamaz.",
        "Birkaç gün uykusuz kalmanın, zihin karışıklığı ya da halüsinasyon gibi hiçbir zararlı etkisi yoktur.",
        "Birkaç gün uyumak, halüsinasyonları önleyebilir.",
      ],
      "'Going without sleep for several days' 'birkaç gün uykusuz kalmak', 'can cause confusion and even hallucinations' 'zihin karışıklığına ve hatta halüsinasyonlara yol açabilir' karşılığıdır.",
    ],
    [
      "Researchers discovered the cause of the disorder by studying a family of dogs.",
      [
        "Araştırmacılar, bozukluğun nedenini bir köpek ailesini inceleyerek buldu.",
        "Araştırmacılar, köpeklerin bu bozukluğa yakalanmadığını keşfetti.",
        "Bir köpek ailesi, araştırmacıların bozukluğu tedavi etmesine engel oldu.",
        "Araştırmacılar, bozukluğu köpeklere bulaştırmayı başardı.",
        "Bozukluğun nedeni, köpeklerle yapılan çalışmalardan önce biliniyordu.",
      ],
      "'discovered the cause of the disorder' 'bozukluğun nedenini buldu', 'by studying a family of dogs' 'bir köpek ailesini inceleyerek' karşılığıdır.",
    ],
    [
      "A brief nap in the early afternoon can make people more alert for several hours.",
      [
        "Öğleden sonranın erken saatlerinde kısa bir şekerleme, insanları birkaç saat daha dikkatli kılabilir.",
        "Öğleden sonra uzun bir uyku, insanları birkaç saat boyunca yorgun bırakır.",
        "İnsanlar, öğleden sonra birkaç saat şekerleme yapmaya ihtiyaç duyar.",
        "Kısa bir şekerleme, dikkatin birkaç saat azalmasına neden olur.",
        "Öğleden sonranın erken saatlerinde dikkatli olmak, insanların birkaç saat şekerleme yapmasını zorlaştırır.",
      ],
      "'A brief nap in the early afternoon' 'öğleden sonranın erken saatlerinde kısa bir şekerleme', 'can make people more alert for several hours' 'insanları birkaç saat daha dikkatli kılabilir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Bilim insanları, uykunun beynin tamamen dinlendiği pasif bir durum olduğuna uzun süre inandı.",
      [
        "For a long time, scientists believed that sleep was a passive state in which the brain rested completely.",
        "Scientists have always known that the brain is very active during sleep.",
        "For a long time, scientists believed that the brain never rests during sleep.",
        "Scientists argued that sleep makes the brain more active than it is during the day, when people are awake.",
        "Sleep was thought to be harmful to the brain for many years.",
      ],
      "'uzun süre inandı' 'for a long time believed', 'beynin tamamen dinlendiği pasif bir durum' 'a passive state in which the brain rested completely' karşılığıdır.",
    ],
    [
      "Gönüllüler, dış dünyadan hiçbir zaman ipucu almadan haftalarca yeraltında yaşadı.",
      [
        "The volunteers lived underground for weeks without receiving any time cues from the outside world.",
        "The volunteers were given regular time signals from the outside world.",
        "The volunteers spent several weeks outdoors without a watch.",
        "Time cues that were sent from the outside world helped the volunteers to sleep well while they lived underground.",
        "The volunteers refused to live underground for more than a week.",
      ],
      "'dış dünyadan hiçbir zaman ipucu almadan' 'without receiving any time cues from the outside world', 'haftalarca yeraltında yaşadı' 'lived underground for weeks' karşılığıdır.",
    ],
    [
      "Narkolepsi hastaları, gülme gibi güçlü duygular sırasında aniden kas kontrolünü kaybedebilir.",
      [
        "People with narcolepsy may suddenly lose control of their muscles during strong emotions such as laughter.",
        "People with narcolepsy cannot laugh because their muscles are too weak.",
        "Strong emotions such as laughter can cure narcolepsy.",
        "People with narcolepsy rarely experience strong emotions.",
        "Laughing and other strong emotions help people with narcolepsy to stay awake and keep control of their muscles.",
      ],
      "'gülme gibi güçlü duygular sırasında' 'during strong emotions such as laughter', 'aniden kas kontrolünü kaybedebilir' 'may suddenly lose control of their muscles' karşılığıdır.",
    ],
    [
      "Meyve sinekleri üzerinde yapılan araştırmalar, biyolojik saatin moleküler mekanizmasını ortaya çıkardı.",
      [
        "Research on fruit flies revealed the molecular mechanism of the biological clock.",
        "The biological clock was discovered before fruit flies were studied.",
        "Fruit flies do not have a biological clock.",
        "Research on fruit flies failed to explain how the body keeps time.",
        "The molecular mechanism of the biological clock was discovered by research on humans rather than on fruit flies.",
      ],
      "'Meyve sinekleri üzerinde yapılan araştırmalar' 'research on fruit flies', 'moleküler mekanizmasını ortaya çıkardı' 'revealed the molecular mechanism' karşılığıdır.",
    ],
    [
      "Uyku sırasında beyin, gün içinde öğrenilen bilgileri yeniden işler.",
      [
        "During sleep, the brain processes again the information learned during the day.",
        "The brain forgets everything it has learned during the day while we sleep.",
        "Information learned at night is processed by the brain during the day.",
        "During the day, the brain prepares for sleep by learning less.",
        "Sleep prevents the brain from learning new information.",
      ],
      "'Uyku sırasında' 'during sleep', 'gün içinde öğrenilen bilgileri yeniden işler' 'processes again the information learned during the day' karşılığıdır.",
    ],
    [
      "Yunuslar, nefes almak için su yüzeyine çıkmaları gerektiğinden asla tamamen uyumaz.",
      [
        "Because they must come to the surface to breathe, dolphins never fall completely asleep.",
        "Dolphins sleep deeply on the surface of the water.",
        "Dolphins breathe underwater while they are asleep.",
        "Dolphins come to the surface only when they are fully asleep.",
        "Because they sleep so deeply under the water, dolphins rarely need to come to the surface to breathe.",
      ],
      "'nefes almak için su yüzeyine çıkmaları gerektiğinden' 'because they must come to the surface to breathe', 'asla tamamen uyumaz' 'never fall completely asleep' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In June 1938, the sleep researcher Nathaniel Kleitman and his student Bruce Richardson descended into Mammoth Cave in Kentucky, where they planned to stay for over a month. The cave offered conditions that could not easily be created in a laboratory: complete darkness apart from the lamps they brought, a constant temperature of about 12 degrees Celsius, and no sounds from the outside world. Their aim was to find out whether the human body's daily rhythm was fixed or whether it could be adjusted to a different schedule. They therefore tried to live on a 28-hour day, with 19 hours awake and 9 hours in bed, and they regularly measured their body temperature, which normally rises and falls in a daily cycle. After thirty-two days, the results were mixed. Richardson, who was in his twenties, partly adapted to the new schedule, and his temperature rhythm began to follow the 28-hour pattern. Kleitman, who was more than forty, did not adapt at all; his body continued to follow a roughly 24-hour cycle. The experiment suggested that the body's clock was strongly resistant to change, at least in some people, and it raised questions about whether age affected the ability to adjust.",
      questions: [
        [
          "According to the passage, the cave was chosen because ----.",
          [
            "it removed the usual signals about time",
            "it was close to Kleitman's university",
            "it was warmer than most laboratories",
            "it was a popular tourist attraction",
            "its air helped people sleep",
          ],
          "Metne göre mağara tam karanlık, sabit sıcaklık ve dış dünyadan ses olmaması gibi koşullar sunuyordu.",
        ],
        [
          "The researchers measured their body temperature because ----.",
          [
            "it normally follows a daily pattern",
            "they were afraid of catching a cold",
            "the cave was extremely cold",
            "it showed how much they had slept",
            "it was easier than measuring sleep",
          ],
          "Vücut ısısı normalde günlük bir döngüde yükselip alçalır; bu nedenle ritmin göstergesidir.",
        ],
        [
          "It can be inferred from the passage that the difference between the two men ----.",
          [
            "might have been related to their ages",
            "was caused by Richardson's illness",
            "proved that the cave was too cold",
            "showed that Kleitman slept too little",
            "was not noticed by the researchers",
          ],
          "Metin yaşın uyum yeteneğini etkileyip etkilemediği sorusunu gündeme getirir.",
        ],
      ],
    },
    {
      text:
        "In July 1962, the 23-year-old French geologist Michel Siffre went down into Scarasson, a cave beneath a glacier in the Alps, intending to study its ice. He decided to use the opportunity for an experiment on himself. He took no watch or clock, and he lived in a tent on the ice, in darkness except for a lamp, at a temperature close to freezing. Whenever he woke up, ate or went to sleep, he telephoned a team on the surface, who recorded the times but gave him no information about the date. He counted each period of sleep as one night. When the team finally told him that the experiment was over, on 14 September, Siffre believed it was only 20 August. He had lost track of almost a month. Analysis of the records showed that his daily cycle had become slightly longer than 24 hours, and that he had sometimes been awake for long periods that he experienced as normal days. Siffre's study, together with others carried out in caves and underground bunkers, helped to establish that the human body has an internal clock that runs at roughly, but not exactly, 24 hours, and that daylight is needed to keep it synchronised with the outside world.",
      questions: [
        [
          "According to the passage, the team on the surface ----.",
          [
            "noted Siffre's activities without telling him the date",
            "visited him in the cave every day",
            "sent him a clock halfway through",
            "decided when he should go to sleep",
            "studied the ice in his place",
          ],
          "Metne göre ekip zamanları kaydediyor ama ona tarih hakkında bilgi vermiyordu.",
        ],
        [
          "Siffre's error about the date suggests that ----.",
          [
            "his days had become longer than he realised",
            "he had slept for several days at a time",
            "the team had given him wrong information",
            "he had forgotten to count some nights",
            "the cave was warmer than expected",
          ],
          "Günlük döngüsü 24 saatten uzamış ve uzun uyanıklık dönemlerini normal gün gibi yaşamıştı; bu yüzden daha az gün saydı.",
        ],
        [
          "It can be understood from the passage that daylight ----.",
          [
            "keeps the body's clock in step with the day",
            "makes the body's clock run faster",
            "is not necessary for a regular rhythm",
            "causes people to lose track of time",
            "shortens the human day to 23 hours",
          ],
          "Metne göre iç saati dış dünyayla eş zamanlı tutmak için gün ışığı gerekir.",
        ],
      ],
    },
    {
      text:
        "In late December 1963, Randy Gardner, a seventeen-year-old high-school student in San Diego, set out to stay awake for longer than anyone had before as part of a science fair project. Watched by two friends and, later, by the sleep researcher William Dement of Stanford University, he remained awake for 264 hours, or eleven days. As the days passed, Gardner became irritable and had difficulty concentrating; his speech grew slow, and he struggled to remember what he had been doing a few moments earlier. By the fourth day he was experiencing brief hallucinations, at one point mistaking a street sign for a person. Yet he was still able to play basketball and to beat Dement at pinball near the end of the experiment. When he finally went to sleep, he slept for about fourteen hours, and within a few days he seemed to have recovered completely. His case was widely reported as evidence that sleep loss causes no lasting harm, but researchers now caution against this conclusion. Later studies have shown that even moderate sleep deprivation over long periods is associated with a higher risk of accidents, weight gain and illness, and record attempts of this kind are no longer encouraged.",
      questions: [
        [
          "According to the passage, during the experiment Gardner ----.",
          [
            "had problems with memory and concentration",
            "was unable to take part in any games",
            "slept briefly every night",
            "stayed in a hospital",
            "felt more energetic than usual",
          ],
          "Metne göre Gardner dikkatini toplamakta ve az önce ne yaptığını hatırlamakta zorlanıyordu.",
        ],
        [
          "The writer mentions basketball and pinball in order to show that Gardner ----.",
          [
            "could still perform some tasks well",
            "was a talented sportsman",
            "had fully recovered by the fourth day",
            "was bored during the experiment",
            "preferred games to studying",
          ],
          "Basketbol oynayıp langırtta Dement'i yenmesi bazı görevleri hâlâ iyi yapabildiğini gösterir.",
        ],
        [
          "It can be understood from the passage that researchers today ----.",
          [
            "do not regard the case as proof that sleep loss is harmless",
            "encourage students to repeat the experiment",
            "believe that sleep is unnecessary for adults",
            "think Gardner was harmed for life",
            "have never studied long-term sleep loss",
          ],
          "Araştırmacılar bu vakanın uykusuzluğun kalıcı zarar vermediğinin kanıtı olarak görülmesine karşı uyarmaktadır.",
        ],
      ],
    },
    {
      text:
        "Narcolepsy is a chronic disorder in which people feel overwhelmingly sleepy during the day and may fall asleep suddenly, even in the middle of a conversation. Many also experience cataplexy, a sudden loss of muscle strength triggered by strong emotions such as laughter or surprise, which can cause them to collapse while remaining fully conscious. For most of the twentieth century, the cause of the disease was unknown. An important clue came from animals. Researchers at Stanford University kept a colony of Doberman and Labrador dogs that suffered from an inherited form of narcolepsy, and in 1999 a team led by Emmanuel Mignot identified the gene responsible. It coded for a receptor for orexin, a chemical messenger in the brain that had been discovered only the year before. Soon afterwards, studies of people with narcolepsy found that most of them had very low levels of orexin, because the small group of brain cells that produce it had been destroyed. Scientists now believe that in most human cases this destruction is caused by the immune system mistakenly attacking the body's own cells. The discovery revealed that orexin plays a central role in keeping people awake, and it has led to the development of new drugs for both narcolepsy and insomnia.",
      questions: [
        [
          "According to the passage, cataplexy involves ----.",
          [
            "a loss of muscle strength while the person stays aware",
            "falling asleep during a conversation",
            "a sudden increase in energy",
            "a loss of consciousness after laughing",
            "difficulty sleeping at night",
          ],
          "Metne göre katapleksi, kişi tamamen bilinçliyken ani kas gücü kaybıdır.",
        ],
        [
          "The dogs at Stanford were important because ----.",
          [
            "they helped researchers find the cause of the disorder",
            "they were trained to help people with narcolepsy",
            "they had been cured of the disease",
            "they produced unusually high levels of orexin",
            "they showed that the disease is not inherited",
          ],
          "Köpeklerde sorumlu genin bulunması hastalığın nedenine ilişkin önemli bir ipucu sağladı.",
        ],
        [
          "It can be inferred from the passage that in most human cases narcolepsy ----.",
          [
            "results from damage to cells that make orexin",
            "is caused by eating too little",
            "is passed directly from dogs to people",
            "can be cured by sleeping more",
            "is caused by too much orexin",
          ],
          "Orexin üreten beyin hücrelerinin yok edilmesi orexin düzeyinin düşmesine yol açar.",
        ],
      ],
    },
    {
      text:
        "Fatal familial insomnia is one of the rarest and most terrible diseases known to medicine. It was first described in 1986 by the Italian neurologist Elio Lugaresi and his colleagues in Bologna, who had treated a man from a family in which several relatives had died of a mysterious illness. The patient gradually lost the ability to sleep, developed problems with attention, temperature control and blood pressure, and eventually died. When his brain was examined, researchers found severe damage to the thalamus, a structure deep in the brain that helps to regulate sleep. The disease was later shown to be caused by a mutation in the gene for the prion protein, the same protein involved in mad cow disease. In affected people, the protein folds into an abnormal shape and gradually destroys brain cells. The mutation is passed down in families, and a child of an affected parent has a one-in-two chance of inheriting it. Symptoms usually begin in middle age, and death typically follows within one to two years. Only a few dozen families around the world are known to carry the mutation. There is currently no cure, although researchers are testing drugs that may delay the onset of the disease in people who carry the gene.",
      questions: [
        [
          "According to the passage, the disease was first identified after ----.",
          [
            "doctors treated a man from an affected family",
            "an outbreak of mad cow disease in Italy",
            "a study of the thalamus in animals",
            "the discovery of a new sleeping drug",
            "a survey of insomnia in Bologna",
          ],
          "Metne göre hastalık, birkaç akrabası gizemli bir hastalıktan ölmüş bir adamın tedavisinden sonra tanımlandı.",
        ],
        [
          "The thalamus is mentioned in the passage as ----.",
          [
            "the part of the brain damaged by the disease",
            "the gene that causes the disease",
            "a drug used to treat insomnia",
            "an abnormal protein",
            "a type of prion",
          ],
          "Talamus, beyinde uykuyu düzenleyen ve hastalıkta ciddi hasar gören yapıdır.",
        ],
        [
          "It can be understood from the passage that a person with an affected parent ----.",
          [
            "has an equal chance of carrying the mutation or not",
            "will certainly develop the disease",
            "is protected against mad cow disease",
            "usually shows symptoms in childhood",
            "can be cured with existing drugs",
          ],
          "Etkilenmiş ebeveynin çocuğunun mutasyonu taşıma olasılığı ikide birdir; yani eşit şanstır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the 1960s, the German researcher Jürgen Aschoff built an underground bunker in Bavaria where volunteers lived for several weeks without windows or clocks. ---- Most of them settled into cycles of sleeping and waking that lasted about 25 hours.",
      [
        "They were free to sleep, eat and switch the lights on whenever they chose.",
        "Bavaria, in the south of Germany, is famous for its mountains, lakes and castles.",
        "Many bunkers were built during the Second World War.",
        "Volunteers are often paid for taking part in research.",
        "Clocks were first used in European towns in the Middle Ages.",
      ],
      "Boşluktan sonra gönüllülerin kendi uyku-uyanıklık döngülerine yerleştiği anlatılır; boşluğa istedikleri zaman uyuyup yemek yiyebildiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2017, three American scientists shared that year's Nobel Prize in Medicine for research on the biological clock. ---- They showed that a protein builds up in cells during the night and is broken down during the day, creating a cycle that repeats every 24 hours.",
      [
        "Studying fruit flies, they identified a gene that controls daily rhythms.",
        "The Nobel Prizes are presented in Stockholm every December.",
        "Many scientists move to the United States to work.",
        "Fruit flies are often found near rotting fruit.",
        "Proteins are large molecules made from long chains of smaller units called amino acids.",
      ],
      "Boşluktan sonra bir proteinin gece birikip gündüz parçalandığı anlatılır; boşluğa meyve sineklerinde günlük ritimleri kontrol eden bir gen bulduklarını söyleyen cümle gelmelidir.",
    ],
    [
      "Night terrors are most common in young children. ---- Unlike nightmares, which occur later in the night during dreaming sleep, they take place during deep sleep, and the child usually has no memory of them the next morning.",
      [
        "The child may suddenly sit up, scream and appear terrified, while still asleep.",
        "Many children are afraid of the dark.",
        "Parents often read stories to their children at bedtime to help them relax and fall asleep.",
        "Young children need more sleep than adults.",
        "Some films are unsuitable for children.",
      ],
      "Boşluktan sonra gece terörlerinin kâbuslardan farkı anlatılır; boşluğa çocuğun uyurken aniden doğrulup çığlık attığını tanımlayan cümle gelmelidir.",
    ],
    [
      "In a lucid dream, the sleeper becomes aware that he or she is dreaming. ---- In laboratory studies, lucid dreamers have been able to signal to researchers by moving their eyes in a pattern agreed in advance.",
      [
        "Some people can even control what happens in the dream.",
        "Dreams have been interpreted in many different ways.",
        "Laboratories often have no windows.",
        "Many people forget their dreams quickly.",
        "Eye tests are carried out by opticians.",
      ],
      "Boşluktan önce kişinin rüya gördüğünün farkına vardığı söylenir; boşluğa bazı kişilerin rüyayı bile kontrol edebildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "People differ in the times of day at which they feel most alert. ---- These preferences, known as chronotypes, are partly inherited and also change with age.",
      [
        "'Larks' prefer to rise early, while 'owls' feel best late in the evening.",
        "Many birds sing loudly in the early morning.",
        "Coffee is the most popular drink in many offices.",
        "Some jobs, such as baking bread or delivering post, require people to start work very early.",
        "Owls hunt mainly at night.",
      ],
      "Boşluktan sonra 'These preferences' denir; boşluğa sabahçılar ile akşamcıların tercihlerini anlatan cümle gelmelidir.",
    ],
    [
      "Millions of people around the world work at night in hospitals, factories and transport. ---- In 2007, an agency of the World Health Organization classified night shift work as a probable cause of cancer.",
      [
        "There is growing evidence that this may harm their long-term health.",
        "Hospitals must remain open twenty-four hours a day, so they need staff at all hours.",
        "Many factories produce goods for export.",
        "Public transport is cheaper than driving.",
        "Cancer research receives billions of dollars in funding from governments every year.",
      ],
      "Boşluktan sonra gece vardiyasının olası kanser nedeni sayıldığı anlatılır; boşluğa bunun uzun vadeli sağlığa zarar verebileceğine dair kanıtların arttığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In many Mediterranean countries, it has long been the custom to rest after the midday meal.",
        "Spanish cuisine is famous for its variety of small dishes.",
        "This tradition may reflect a natural dip in alertness that occurs in the early afternoon.",
        "A large study in Greece found that people who regularly napped had a lower risk of dying from heart disease.",
        "In recent decades, however, the siesta has become less common in cities.",
      ],
      odd: 1,
      why: "Parça Akdeniz'deki öğle uykusu geleneğini anlatır. İspanyol mutfağının küçük yemek çeşitleriyle ünlü olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1995, NASA studied pilots on long flights across the Pacific Ocean.",
        "Some pilots were allowed to take a short nap in their seats while a colleague flew the plane.",
        "Those who napped for about twenty-six minutes showed clearly better alertness and performance later.",
        "Long flights across the Pacific can last more than twelve hours.",
        "As a result, some airlines now allow planned rest in the cockpit.",
      ],
      odd: 3,
      why: "Parça NASA'nın pilot şekerlemesi araştırmasını anlatır. Pasifik üzerindeki uzun uçuşların on iki saati aşabildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dolphins must swim to the surface regularly in order to breathe.",
        "They therefore cannot fall into deep sleep in the same way as land mammals.",
        "Instead, one half of the brain sleeps while the other half stays awake.",
        "Dolphins are known for their intelligence and their complex social groups.",
        "During this kind of sleep, the eye connected to the waking half usually stays open.",
      ],
      odd: 3,
      why: "Parça yunusların yarım beyin uykusunu anlatır. Yunusların zekâları ve karmaşık sosyal gruplarıyla bilindiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sleep plays an important role in turning new experiences into lasting memories.",
        "In experiments with rats, cells in the brain that were active while the animals ran through a maze became active again during sleep.",
        "This suggests that the brain replays what it has learned while we rest.",
        "Rats are often used in laboratories because they breed quickly.",
        "Studies in humans have found that people remember new information better after a night's sleep.",
      ],
      odd: 3,
      why: "Parça uykunun belleğe katkısını anlatır. Sıçanların hızlı ürediği için laboratuvarlarda kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A microsleep is a brief episode of sleep lasting from a fraction of a second to several seconds.",
        "It often happens without the person being aware of it.",
        "During a microsleep, the eyes may remain open but the brain does not respond to what they see.",
        "At motorway speeds, a car can travel a hundred metres or more during a microsleep.",
        "Most modern cars are fitted with seat belts and airbags.",
      ],
      odd: 4,
      why: "Parça mikro uykuyu anlatır. Modern arabaların çoğunda emniyet kemeri ve hava yastığı bulunduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Insomnia is a condition in which people have persistent difficulty falling or staying asleep.",
        "Sleeping pills can help in the short term but may lose their effect and cause dependence.",
        "Many doctors now recommend a form of talking therapy as the first treatment.",
        "Pharmacies sell a wide range of medicines without a prescription.",
        "It teaches patients to replace the routines and worries that prevent sleep.",
      ],
      odd: 3,
      why: "Parça uykusuzluk tedavisini anlatır. Eczanelerin reçetesiz pek çok ilaç sattığını söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
