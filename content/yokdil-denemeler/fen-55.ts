import type { YokdilDeneme } from "./types";

export const FEN_55: YokdilDeneme = {
  no: 55,
  field: "fen",
  vocab: [
    [
      "When cheap calculators appeared, the slide rule quickly became ----.",
      ["obsolete", "fragile", "generous", "invisible", "delicious"],
      "Ucuz hesap makineleri çıkınca sürgülü cetvelin hızla 'modası geçmiş/kullanılmaz' (obsolete) hale geldiği anlatılır.",
    ],
    [
      "By dropping a needle many times onto lined paper, it is possible to ---- the value of pi.",
      ["estimate", "forget", "hide", "sell", "destroy"],
      "Çizgili kâğıda pek çok kez iğne düşürerek pi sayısının değerini 'tahmin etmenin' (estimate) mümkün olduğu anlatılır.",
    ],
    [
      "The pages of the book of logarithms that began with the number 1 were much more ---- than the others.",
      ["worn", "colourful", "expensive", "recent", "secret"],
      "Logaritma kitabının 1 ile başlayan sayfalarının diğerlerinden çok daha 'yıpranmış' (worn) olduğu anlatılır.",
    ],
    [
      "The proof was so long that the referees could not be completely ---- that it contained no errors.",
      ["certain", "jealous", "careless", "patient", "hungry"],
      "Kanıtın o kadar uzun olduğu ki hakemlerin hata içermediğinden tamamen 'emin' (certain) olamadığı anlatılır.",
    ],
    [
      "The marks cut into the bone may have been used to ---- the days of the lunar month.",
      ["count", "paint", "cook", "sing", "build"],
      "Kemiğe kazınmış çentiklerin ay ayının günlerini 'saymak' (count) için kullanılmış olabileceği anlatılır.",
    ],
    [
      "Even powerful computers soon ---- time when the number of cities becomes very large.",
      ["run out of", "look up to", "put up with", "take after", "give in to"],
      "Şehir sayısı çok büyüdüğünde güçlü bilgisayarların bile kısa sürede zamanının 'tükendiği' (run out of) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time calculators appeared, the slide rule ---- by engineers for over three centuries.",
      ["had been discussed", "is discussed", "has been discussed", "will be discussed", "discusses"],
      "Geçmişteki bir andan önce süregelmiş edilgen eylem: 'had been discussed'.",
    ],
    [
      "If the astronauts' computers had failed, they ---- their slide rules.",
      ["might have used", "will use", "use", "had used", "would use"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have won'.",
    ],
    [
      "The law ---- by an astronomer in 1881 and forgotten for more than fifty years.",
      ["was noticed", "noticed", "has noticed", "notices", "is noticing"],
      "Yasa fark edilmiş ve unutulmuştur; edilgen geçmiş zaman: 'was noticed'.",
    ],
    [
      "---- the result seems surprising, it can be explained with simple arithmetic.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Sonucun şaşırtıcı görünmesi ile basit aritmetikle açıklanabilmesi zıttır: 'Although'.",
    ],
    [
      "The mathematician, ---- proof relied on computers, spent years checking it.",
      ["whose", "who", "which", "whom", "where"],
      "Matematikçinin kanıtı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until 2014 ---- the computer check of the proof completed.",
      ["was", "did", "had", "has", "does"],
      "'Not until' ile devrik yapı; edilgen 'was completed': 'was'.",
    ],
    [
      "Only twenty-three people are needed for a fifty per cent chance of a shared birthday, ---- most people find hard to believe.",
      ["which", "what", "who", "that", "whose"],
      "Virgülden sonra önceki ifadenin tamamını niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
    ],
    [
      "The more cities are added, ---- the problem becomes.",
      ["the harder", "the hardest", "harder", "hardest", "so hard"],
      "'The more ..., the harder ...' paralel yapısı: 'the harder'.",
    ],
    [
      "The tax inspector demanded that the accounts ---- again.",
      ["be checked", "are checked", "were checking", "to be checked", "being checked"],
      "'demand that' sonrası yalın fiil (subjunctive), edilgen: 'be checked'.",
    ],
    [
      "The tablet is thought ---- in Mesopotamia almost four thousand years ago.",
      ["to have been written", "writing", "to write", "written", "having written"],
      "Geçmişe ait edilgen eylem için mastarın geçmiş edilgen biçimi: 'to have been written'.",
    ],
    [
      "There are so many possible routes ---- no computer can check them all.",
      ["that", "unless", "although", "whereas", "as if"],
      "'so many ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The slide rule let engineers ---- complex calculations in seconds.",
      ["carry out", "carrying out", "to carrying out", "carried out", "be carried out"],
      "'let sb do sth' kalıbında yalın fiil: 'choose'.",
    ],
    [
      "Had the accountant not invented the figures, the inspectors ---- anything unusual.",
      ["might not have noticed", "notice", "will notice", "had noticed", "are noticing"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have noticed'.",
    ],
    [
      "Neither the astronomer nor the physicist ---- able to explain why the law worked.",
      ["was", "were being", "be", "to be", "have"],
      "'Neither ... nor' yapısında fiil yakın özneye göre çekimlenir; tekil özne: 'was'.",
    ],
  ],
  cloze: [
    {
      text:
        "Early in the seventeenth century, newly printed tables of logarithms let calculators turn a difficult multiplication into an easier sum. A few years later, the English clergyman William Oughtred realised that if two rulers were marked with logarithmic scales and slid against each other, multiplication and division could be carried out mechanically, {1} the slide rule was born. Over the following centuries, it was gradually improved, {2} by the twentieth century it had become the essential tool of every engineer and scientist. Bridges, aircraft and power stations were all designed with its help. A skilled user could multiply, divide and find square roots in seconds, {3} the answers were accurate only to about three significant figures, and the user had to work out where to put the decimal point. Engineers did not regard this as a serious problem, {4} the measurements they worked with were rarely more precise. Astronauts on the Apollo missions to the Moon carried slide rules in case their computers failed. Then, in the early 1970s, cheap electronic calculators appeared, {5} within a few years, the slide rule had almost completely disappeared from schools and offices. Today it is mainly an object for collectors.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Hesapların mekanik olarak yapılabilmesi ve sürgülü cetvelin doğması birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Aracın geliştirilmesi ve yirminci yüzyılda vazgeçilmez hale gelmesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["but", "and", "so", "or", "for"],
          "Saniyeler içinde hesap yapılabilmesi ile yanıtların yalnızca üç basamağa kadar doğru olması zıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["because", "unless", "although", "until", "so that"],
          "Mühendislerin bunu sorun saymamasının nedeni ölçümlerinin de nadiren daha hassas olmasıdır: 'because'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Ucuz hesap makinelerinin çıkması ve birkaç yıl içinde sürgülü cetvelin ortadan kalkması birbirini izler: 'and'.",
        ],
      ],
    },

    {
      text:
        "In 1777, the French naturalist Georges-Louis Leclerc, Comte de Buffon, described a curious problem. Suppose a floor is made of parallel strips of wood, all the same width, {1} a needle is dropped onto it at random. What is the probability that the needle will land across one of the lines between the strips? Buffon showed that, if the needle is exactly as long as the strips are wide, the answer is two divided by pi, or about sixty-four per cent. This means that the value of pi can, in principle, be estimated simply by dropping a needle many times {2} counting how often it crosses a line. In the nineteenth century, several people tried the experiment, {3} in 1901 an Italian mathematician claimed to have obtained pi correct to six decimal places after dropping a needle more than three thousand times. Later analysis suggested that his result was too good to be true, {4} he may have stopped at exactly the point at which his answer was most accurate. Buffon's needle is now seen as an early forerunner of what are called Monte Carlo methods, {5} random sampling is used to find approximate answers to problems that are difficult to solve directly.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Zeminin şeritlerden yapılması ve üzerine bir iğne düşürülmesi birbirine eklenen iki varsayımdır: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "İğneyi pek çok kez düşürmek ve kaç kez çizgiyi kestiğini saymak birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "so that"],
          "Birkaç kişinin deneyi yapması ve bir İtalyan'ın sonuç elde ettiğini ileri sürmesi birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["since", "unless", "although", "until", "so that"],
          "Sonucun gerçek olamayacak kadar iyi görülmesinin gerekçesi en doğru noktada durmuş olabilmesidir: 'since'.",
        ],
        [
          "(30) ----",
          ["in which", "which", "whose", "whom", "that"],
          "'methods' öncülünü niteleyen ve 'bu yöntemlerde' anlamı veren yapı: 'in which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the slide rule was accurate to only about three figures, ----.",
      [
        "engineers used it to design bridges and aircraft",
        "rulers are made of wood",
        "Scotland is cold",
        "numbers are long",
        "the clergyman who invented it had studied the tables of logarithms published a few years earlier",
      ],
      "'Although' zıtlık ister: sürgülü cetvel yalnızca üç basamağa kadar doğru olsa da mühendisler köprü ve uçak tasarlamak için onu kullandı.",
    ],
    [
      "If cheap calculators had not appeared in the 1970s, ----.",
      [
        "the slide rule might have remained in use for longer",
        "engineers are clever",
        "calculators are small",
        "schools teach mathematics",
        "astronauts on the missions to the Moon would have carried computers that failed during the flights",
      ],
      "Üçüncü tip koşul: 1970'lerde ucuz hesap makineleri çıkmasaydı sürgülü cetvel daha uzun süre kullanılabilirdi.",
    ],
    [
      "----, the needle crosses a line about sixty-four per cent of the time.",
      [
        "When its length equals the width of the strips",
        "Although needles are sharp",
        "Unless floors are wooden",
        "Since Buffon was French",
        "While the Italian mathematician was dropping it onto the floor more than three thousand times",
      ],
      "İğnenin uzunluğu şeritlerin genişliğine eşit olduğunda iğne zamanın yaklaşık yüzde altmış dördünde bir çizgiyi keser.",
    ],
    [
      "Benford's law can help to detect fraud ----.",
      [
        "because invented numbers rarely follow its pattern",
        "although accountants use computers",
        "unless taxes are high",
        "so that inspectors are paid",
        "while the astronomer was looking up numbers in a book of logarithms in a library",
      ],
      "Benford yasası, uydurulmuş sayılar nadiren onun örüntüsüne uyduğu için sahtekârlığı saptamaya yardım edebilir.",
    ],
    [
      "Since the number of possible pairs grows very quickly as people are added to a group, ----.",
      [
        "a shared birthday becomes likely in a surprisingly small group",
        "birthdays are celebrated",
        "a year has twelve months",
        "groups are noisy",
        "most people think that around one hundred and eighty people would be needed for an even chance",
      ],
      "'Since' neden bildirir: gruba kişi eklendikçe olası çiftlerin sayısı çok hızlı arttığından ortak doğum günü şaşırtıcı derecede küçük bir grupta olası hale gelir.",
    ],
    [
      "Not only did the proof of the Kepler conjecture take years to check, ----.",
      [
        "but the referees still could not be fully certain that it was correct",
        "and oranges are round",
        "since computers are fast",
        "so Kepler was an astronomer",
        "unless the mathematician had used a computer program to check every step of the argument",
      ],
      "'Not only ... but also' yapısı tamamlanır: Kepler sanısının kanıtını kontrol etmek yıllar sürmekle kalmadı, hakemler yine de doğruluğundan tam emin olamadı.",
    ],
    [
      "Once the number of cities reaches a few dozen, ----.",
      [
        "checking every possible route becomes impossible even for computers",
        "cities are large",
        "salesmen travel",
        "maps are useful",
        "companies that deliver parcels have used the problem to plan the routes taken by their drivers",
      ],
      "Şehir sayısı birkaç düzineye ulaştığında olası her rotayı kontrol etmek bilgisayarlar için bile imkânsız hale gelir.",
    ],
    [
      "Unless the numbers in a set cover several orders of magnitude, ----.",
      [
        "Benford's law is unlikely to apply to them",
        "numbers are useful",
        "logarithms are old",
        "accountants are careful",
        "the physicist would not have tested the law on the areas of rivers and the populations of cities",
      ],
      "'Unless' olumsuz koşul: bir kümedeki sayılar birkaç büyüklük basamağına yayılmıyorsa Benford yasasının onlara uyması olası değildir.",
    ],
    [
      "The bone's markings are arranged in such regular groups ----.",
      [
        "that some researchers believe they represent a system of counting",
        "although bones are white",
        "because Africa is large",
        "unless the bone is old",
        "while the archaeologists were digging near a lake in the 1950s",
      ],
      "Kemiğin üzerindeki çentikler o kadar düzenli gruplar halindedir ki bazı araştırmacılar bir sayma sistemini temsil ettiklerine inanır.",
    ],
    [
      "Even though the tablet is nearly four thousand years old, ----.",
      [
        "it contains a list of numbers related to right-angled triangles",
        "clay is soft",
        "Mesopotamia had rivers",
        "writing is useful",
        "it was bought by an American publisher from a dealer in the 1920s and given to a university",
      ],
      "'Even though' zıtlık ister: tablet yaklaşık dört bin yıllık olsa da dik açılı üçgenlerle ilişkili bir sayı listesi içerir.",
    ],
    [
      "As oranges in a shop are usually stacked in a pyramid, ----.",
      [
        "the problem of the densest packing of spheres is sometimes called the greengrocer's problem",
        "fruit is healthy",
        "shops are busy",
        "pyramids are old",
        "the astronomer was asked how cannonballs could be stacked most efficiently on the deck of a ship",
      ],
      "Bir dükkândaki portakallar genellikle piramit halinde istiflendiğinden kürelerin en sık paketlenmesi sorunu bazen manav sorunu olarak adlandırılır.",
    ],
  ],
  enTr: [
    [
      "Logarithms made it possible to replace long multiplications with additions.",
      [
        "Logaritmalar, uzun çarpma işlemlerinin yerine toplama işlemlerinin konmasını sağladı.",
        "Logaritmalar, toplama işlemlerinin yerine uzun çarpma işlemlerinin konmasını sağladı.",
        "Uzun çarpma işlemleri, logaritmaların bulunmasından sonra tamamen yasaklandı.",
        "Toplama logaritmaları çarptı.",
        "Logaritmalar hiçbir işe yaramadı.",
      ],
      "'Logarithms allowed ... to be replaced' 'logaritmalar ... yerine konmasını sağladı', 'long multiplications ... by additions' 'uzun çarpma işlemlerinin yerine toplama işlemleri' karşılığıdır.",
    ],
    [
      "The value of pi can be estimated by dropping a needle many times.",
      [
        "Pi sayısının değeri, bir iğneyi pek çok kez düşürerek tahmin edilebilir.",
        "Pi sayısının değeri, bir iğneyi yalnızca bir kez düşürerek kesin olarak bulunur.",
        "Pek çok kez düşürülen iğneler, pi sayısının değerini değiştirebilir.",
        "Pi iğneyi düşürür.",
        "Pi sayısı hiçbir zaman tahmin edilemez.",
      ],
      "'The value of pi can be estimated' 'pi sayısının değeri tahmin edilebilir', 'by dropping a needle many times' 'bir iğneyi pek çok kez düşürerek' karşılığıdır.",
    ],
    [
      "In many sets of data, about thirty per cent of numbers begin with the digit 1.",
      [
        "Pek çok veri kümesinde sayıların yaklaşık yüzde otuzu 1 rakamıyla başlar.",
        "Pek çok veri kümesinde sayıların yaklaşık yüzde otuzu 1 rakamıyla biter.",
        "Veri kümelerindeki sayıların yalnızca yüzde biri 1 rakamıyla başladığı için yasa işe yaramaz.",
        "1 rakamı veri kümelerini başlatır.",
        "Hiçbir sayı 1 ile başlamaz.",
      ],
      "'In many sets of data' 'pek çok veri kümesinde', 'about thirty per cent of numbers begin with the digit 1' 'sayıların yaklaşık yüzde otuzu 1 rakamıyla başlar' karşılığıdır.",
    ],
    [
      "The proof relied on calculations carried out by computers.",
      [
        "Kanıt, bilgisayarlar tarafından yapılan hesaplamalara dayanıyordu.",
        "Bilgisayarlar, kanıta dayanarak hesaplamalar yaptı.",
        "Bilgisayar kullanılmadan yapılan kanıt, hesaplamalardaki hatalar yüzünden reddedildi.",
        "Hesaplamalar bilgisayarları kanıtladı.",
        "Kanıtta hiç hesaplama yoktu.",
      ],
      "'The proof relied on calculations' 'kanıt hesaplamalara dayanıyordu', 'carried out by computers' 'bilgisayarlar tarafından yapılan' karşılığıdır.",
    ],
    [
      "The number of possible routes grows extremely quickly.",
      [
        "Olası rotaların sayısı son derece hızlı artar.",
        "Olası rotaların sayısı son derece yavaş azalır.",
        "Son derece hızlı artan rotalar, satış elemanlarının işini kolaylaştırır.",
        "Rotalar sayıyı büyütür.",
        "Rota sayısı hiç değişmez.",
      ],
      "'The number of possible routes' 'olası rotaların sayısı', 'grows extremely quickly' 'son derece hızlı artar' karşılığıdır.",
    ],
    [
      "The bone was found near a lake in Central Africa.",
      [
        "Kemik, Orta Afrika'daki bir gölün yakınında bulundu.",
        "Göl, Orta Afrika'daki bir kemiğin yakınında bulundu.",
        "Orta Afrika'da bulunan kemik, bir gölün dibinden çıkarılarak müzeye taşındı.",
        "Kemik gölü buldu.",
        "Kemik Avrupa'da bulundu.",
      ],
      "'The bone was found' 'kemik bulundu', 'near a lake in Central Africa' 'Orta Afrika'daki bir gölün yakınında' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kullanıcı, ondalık noktasını nereye koyacağını kendisi bulmak zorundaydı.",
      [
        "The user had to work out where to put the decimal point.",
        "The decimal point had to work out where to put the user.",
        "The user never had to think about the decimal point, because the rule showed it clearly.",
        "The point put the user in the decimal.",
        "The user had no decimal point.",
      ],
      "'Kullanıcı ... kendisi bulmak zorundaydı' 'the user had to work out', 'ondalık noktasını nereye koyacağını' 'where to put the decimal point' karşılığıdır.",
    ],
    [
      "Sonucu gerçek olamayacak kadar iyiydi.",
      [
        "His result was too good to be true.",
        "His result was good, and it was also true.",
        "His result was not good enough, although it turned out to be true.",
        "The truth was too good for his result.",
        "He had no result.",
      ],
      "'Sonucu ... kadar iyiydi' 'his result was too good', 'gerçek olamayacak' 'to be true' karşılığıdır.",
    ],
    [
      "Vergi müfettişleri, sahte hesapları saptamak için bu yasayı kullanmıştır.",
      [
        "Tax inspectors have used the law to detect false accounts.",
        "False accounts have been used to detect tax inspectors.",
        "Tax inspectors tried to use the law, but it failed to detect any false accounts.",
        "The law has detected tax inspectors.",
        "Tax inspectors have never used mathematics.",
      ],
      "'Vergi müfettişleri bu yasayı kullanmıştır' 'tax inspectors have used the law', 'sahte hesapları saptamak için' 'to detect false accounts' karşılığıdır.",
    ],
    [
      "Kanıtın bilgisayarla doğrulanması on yıldan fazla sürdü.",
      [
        "The computer verification of the proof took more than ten years.",
        "The proof of the computer took more than ten years to write.",
        "The computer verified the proof in less than a year, surprising the referees.",
        "Ten years verified the computer.",
        "The proof was never verified.",
      ],
      "'Kanıtın bilgisayarla doğrulanması' 'the computer verification of the proof', 'on yıldan fazla sürdü' 'took more than ten years' karşılığıdır.",
    ],
    [
      "Sorun, her şehri bir kez ziyaret eden en kısa rotayı bulmaktır.",
      [
        "The problem is to find the shortest route that visits each city once.",
        "The problem is to visit the shortest city on each route.",
        "The problem is to find the longest route, although each city may be visited many times.",
        "Each city finds the shortest problem.",
        "There is no problem.",
      ],
      "'Sorun bulmaktır' 'the problem is to find', 'her şehri bir kez ziyaret eden en kısa rotayı' 'the shortest route that visits each city once' karşılığıdır.",
    ],
    [
      "Kil tablet, yaklaşık dört bin yıl önce yazılmıştır.",
      [
        "The clay tablet was written about four thousand years ago.",
        "The clay tablet will be written in four thousand years.",
        "The clay tablet was found about four thousand years after it had been written in Egypt.",
        "Four thousand years wrote the tablet.",
        "The tablet was never written.",
      ],
      "'Kil tablet yazılmıştır' 'the clay tablet was written', 'yaklaşık dört bin yıl önce' 'about four thousand years ago' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1881, the American astronomer Simon Newcomb noticed something odd about the books of logarithm tables that scientists used for calculations. The early pages, which listed numbers beginning with the digit 1, were much dirtier and more worn than the later ones, suggesting that people looked up numbers beginning with 1 far more often than those beginning with 9. He published a short note explaining the pattern, but it was largely forgotten. In 1938, the physicist Frank Benford rediscovered it and tested it on more than twenty thousand numbers taken from sources as different as the areas of rivers, the populations of cities and the addresses of famous people. He found that, in many sets of naturally occurring numbers, about thirty per cent begin with the digit 1, around eighteen per cent with 2, and so on, with fewer than five per cent beginning with 9. The pattern, now called Benford's law, applies best to data that cover several orders of magnitude, such as prices, populations or the sizes of companies; it does not apply to numbers that are limited to a narrow range, such as human heights. Because people who invent numbers tend to spread the first digits fairly evenly, the law has been used by tax authorities and auditors to identify accounts that may have been falsified.",
      questions: [
        [
          "According to the passage, Newcomb noticed the pattern because ----.",
          [
            "some pages of the logarithm books were more worn than others",
            "he studied the populations of cities",
            "he was investigating tax fraud",
            "the physicist sent him more than twenty thousand numbers from many different sources",
            "the books were printed incorrectly",
          ],
          "Metne göre 1 ile başlayan sayıların bulunduğu ilk sayfalar çok daha kirli ve yıpranmıştı.",
        ],
        [
          "Benford's law does not apply well to human heights because ----.",
          [
            "they fall within a narrow range",
            "they are invented",
            "they always begin with 9",
            "they cover several orders of magnitude, like the populations of cities",
            "they are measured inaccurately",
          ],
          "Yasa dar bir aralıkla sınırlı sayılara uymaz.",
        ],
        [
          "It can be understood from the passage that the law helps auditors because ----.",
          [
            "made-up numbers usually do not follow the expected pattern",
            "all accounts begin with 1",
            "fraud is always obvious",
            "tax authorities prefer to use logarithm tables when they examine the accounts of companies",
            "computers cannot check accounts",
          ],
          "Sayı uyduranlar ilk rakamları eşit dağıtma eğiliminde olduğundan örüntü bozulur.",
        ],
      ],
    },
    {
      text:
        "How many people must be in a room for there to be a fifty per cent probability of a shared birthday? Most people guess that the answer is somewhere around 180, about half the number of days in a year. In fact, it is only twenty-three. With fifty people in the room, the probability rises to about ninety-seven per cent. The result is often called the birthday paradox, although it is not really a paradox at all, only a fact that conflicts with intuition. The key to understanding it is to realise that the question is not whether someone shares a birthday with one particular person, but whether any two people in the room share one. With twenty-three people present, 253 separate pairings can be formed, and every one of them is a separate chance of a match. The easiest way to calculate the probability is to work out the chance that nobody shares a birthday and subtract it from one. The same principle has important practical applications. In computer security, for example, it explains why certain methods of protecting data are easier to attack than they first appear: an attacker trying to find any two pieces of data that produce the same coded result needs far fewer attempts than one trying to match a particular result. Such attacks are known as 'birthday attacks'.",
      questions: [
        [
          "According to the passage, most people overestimate the number of people needed because ----.",
          [
            "they think about matches with one particular person",
            "they forget about leap years",
            "they are not good at counting",
            "computer security experts have told them that the number is much higher than it is",
            "birthdays are not evenly distributed",
          ],
          "Metne göre insanlar belirli bir kişiyle eşleşmeyi düşünür; oysa soru herhangi iki kişinin eşleşmesidir.",
        ],
        [
          "The writer says that the 'paradox' ----.",
          [
            "is really just a result that seems counterintuitive",
            "has never been proved",
            "applies only to large groups",
            "was first discovered by experts in the security of computers and the protection of data",
            "is a logical contradiction",
          ],
          "Gerçek bir paradoks değil, sezgiye ters düşen bir olgudur.",
        ],
        [
          "It can be understood from the passage that a 'birthday attack' ----.",
          [
            "exploits the fact that finding any match is easier than finding a specific one",
            "targets people on their birthdays",
            "is impossible to carry out",
            "requires the attacker to know the birthdays of all of the people in a particular room",
            "protects data",
          ],
          "Herhangi iki eşleşen sonucu bulmak belirli bir sonucu eşlemekten çok daha az deneme gerektirir.",
        ],
      ],
    },
    {
      text:
        "In 1611, the German astronomer Johannes Kepler wrote a short essay in which he suggested that the most efficient way to pack identical spheres, such as cannonballs, is the arrangement that greengrocers use to stack oranges, in which each layer sits in the hollows of the layer below. In this arrangement, the spheres fill about seventy-four per cent of the space. Kepler could not prove that no other arrangement was better, and the problem, which became known as the Kepler conjecture, remained unsolved for almost four centuries. In 1998, the American mathematician Thomas Hales announced a proof. His approach was to reduce the problem to a very large number of particular cases, each of which could be checked by computer. The proof consisted of about three hundred pages of mathematics together with a huge amount of computer code and data. A team of referees spent four years examining it, but they eventually reported that, although they were 99 per cent certain that it was correct, they could not be completely sure. Unsatisfied, Hales began a project to check the proof using computer programs designed to verify every logical step, a method known as formal proof. The project, which involved mathematicians in several countries, was completed in 2014, more than a decade later, removing any remaining doubt.",
      questions: [
        [
          "According to the passage, the Kepler conjecture concerns ----.",
          [
            "the most efficient way of packing spheres",
            "the orbits of the planets",
            "the price of oranges",
            "the use of computers to check every logical step of mathematical proofs",
            "the shape of cannonballs",
          ],
          "Metne göre özdeş kürelerin en verimli biçimde paketlenmesiyle ilgilidir.",
        ],
        [
          "The referees were unable to be completely certain about the proof because ----.",
          [
            "it relied on a vast amount of computer code and data",
            "it was too short",
            "Hales refused to show it to them",
            "it had been written in German by Kepler four hundred years earlier",
            "it contained obvious errors",
          ],
          "Kanıt büyük miktarda bilgisayar kodu ve veriye dayanıyordu.",
        ],
        [
          "It can be understood from the passage that the formal proof project ----.",
          [
            "aimed to confirm the proof beyond any doubt",
            "showed that the proof was wrong",
            "was completed quickly",
            "was carried out by the team of referees who had examined the original proof",
            "was abandoned",
          ],
          "Her mantıksal adımı doğrulayarak kalan şüpheyi ortadan kaldırmayı amaçladı.",
        ],
      ],
    },
    {
      text:
        "Some of the oldest evidence of human interest in numbers comes from Africa and the Middle East. In 1950, a Belgian geologist exploring on the shore of a lake in central Africa found a small baboon bone, about ten centimetres long, with a piece of quartz fixed at one end. Along its sides were groups of notches cut into the bone. The object, known as the Ishango bone, is believed to be more than twenty thousand years old. Some researchers have pointed out that the numbers of notches in one column are all odd, and that those in another include the prime numbers between ten and twenty, which suggests a deliberate counting system; others think the marks may represent a calendar based on the phases of the moon. Many scholars, however, warn that it is easy to see patterns that were never intended. A much later object, a clay tablet from Mesopotamia known as Plimpton 322, was written about 1800 BC. It contains a table of numbers in the Babylonian system, which was based on sixty. In the 1940s, researchers recognised that the numbers are related to the sides of right-angled triangles, showing that the Babylonians understood the relationship now known as Pythagoras' theorem more than a thousand years before Pythagoras was born. The exact purpose of the table is still debated.",
      questions: [
        [
          "According to the passage, the Ishango bone ----.",
          [
            "has groups of notches along its sides",
            "is made of quartz",
            "was found in Mesopotamia",
            "contains a table of numbers related to the sides of right-angled triangles",
            "is a few hundred years old",
          ],
          "Metne göre kenarları boyunca çentik grupları vardır.",
        ],
        [
          "The writer mentions the warning from many scholars in order to suggest that ----.",
          [
            "interpretations of the bone's marks may be mistaken",
            "the bone is a fake",
            "prime numbers were unknown",
            "the Babylonians copied the counting system of the people who made the bone",
            "the bone was used as a weapon",
          ],
          "Hiç amaçlanmamış örüntüleri görmek kolaydır; yorumlar yanlış olabilir.",
        ],
        [
          "It can be understood from the passage that the tablet shows that ----.",
          [
            "an important mathematical relationship was known long before Pythagoras",
            "Pythagoras lived in Mesopotamia",
            "the Babylonians used a system based on ten",
            "the purpose of the table was explained clearly by the researchers of the 1940s",
            "clay tablets cannot be read",
          ],
          "Babilliler Pisagor teoremini Pisagor'dan bin yıldan fazla önce biliyordu.",
        ],
      ],
    },
    {
      text:
        "A salesman must visit a number of cities, each exactly once, and return home. What is the shortest possible route? This simple-sounding question, known as the travelling salesman problem, is one of the most studied problems in mathematics and computer science. With only a few cities, the answer can be found easily by checking every possible route. The difficulty is that the number of routes grows at an astonishing rate as cities are added. With ten cities, there are about 180,000 different routes; with twenty, there are more than sixty thousand million million. For problems with a few dozen cities, checking every route would take even the fastest computers longer than the age of the universe. Mathematicians have therefore developed clever methods that avoid checking every possibility, and in 2006 a team found the best route through more than 85,000 points. For very large problems, however, they usually settle for methods that find routes that are close to the best but not guaranteed to be perfect. The problem is not merely an academic puzzle. Versions of it arise in planning delivery routes for parcel companies, in drilling holes in circuit boards, and even in mapping genes. Whether there is a fundamentally fast method of solving it remains one of the great unsolved questions of mathematics.",
      questions: [
        [
          "According to the passage, the problem becomes difficult because ----.",
          [
            "the number of possible routes increases extremely fast",
            "salesmen refuse to travel",
            "cities are far apart",
            "parcel companies plan their delivery routes using methods that are not perfect",
            "computers are slow",
          ],
          "Metne göre şehir eklendikçe rota sayısı şaşırtıcı bir hızla artar.",
        ],
        [
          "For very large problems, mathematicians usually ----.",
          [
            "accept routes that are nearly but not certainly the best",
            "check every possible route",
            "give up completely",
            "find the best route through more than 85,000 points by checking every possibility",
            "use maps",
          ],
          "En iyiye yakın ama mükemmel olması garanti olmayan rotalarla yetinirler.",
        ],
        [
          "It can be understood from the passage that the travelling salesman problem ----.",
          [
            "has practical uses in several industries",
            "has been fully solved",
            "is only of interest to salesmen",
            "was invented by a team of mathematicians who worked on circuit boards in 2006",
            "involves only a few cities",
          ],
          "Teslimat rotaları, devre kartı delme ve gen haritalama gibi alanlarda uygulanır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Take any whole number. If it is even, divide it by two; if it is odd, multiply it by three and add one. ---- The Collatz conjecture states that this always happens, but despite being checked for enormous numbers, it has never been proved.",
      [
        "Repeat the process, and the sequence always seems to reach the number 1 eventually.",
        "Numbers can be odd or even.",
        "Mathematics is taught in schools.",
        "Some mathematicians have warned their students not to waste their careers trying to solve it.",
        "Calculators make arithmetic easy.",
      ],
      "Boşluk 'bunun her zaman olduğu' ifadesine bağlanan bir cümle gerektirir; boşluğa işlem tekrarlanınca dizinin sonunda hep 1'e ulaşır göründüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1870s, the British scientist Francis Galton built a board in which small balls fall through rows of pins, bouncing left or right at random. ---- The device showed how many small random events can combine to produce a predictable pattern.",
      [
        "At the bottom, the balls pile up in a bell-shaped curve, with most in the middle and few at the edges.",
        "Balls are round.",
        "Galton was a cousin of Darwin.",
        "Galton also carried out early studies of fingerprints and of the inheritance of human traits.",
        "Pins are sharp.",
      ],
      "Boşluk örüntünün ne olduğunu anlatan bir cümle gerektirir; boşluğa topların altta çan biçimli bir eğri halinde biriktiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the late nineteenth century, the German mathematician Georg Cantor showed that some infinite sets are larger than others. ---- His ideas were so controversial that some leading mathematicians of his time attacked them fiercely.",
      [
        "For example, he proved that there are more real numbers than whole numbers, even though both sets are infinite.",
        "Germany has many universities.",
        "Numbers are useful.",
        "His theory of sets later became central to the subject.",
        "Infinity is a difficult idea.",
      ],
      "Boşluk iddiayı örnekleyen bir cümle gerektirir; boşluğa her iki küme de sonsuz olsa da gerçel sayıların tam sayılardan fazla olduğunu kanıtladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1931, the Austrian logician Kurt Gödel published a result that shocked the mathematical world. ---- This meant that the dream of a complete system that could prove every mathematical truth was impossible.",
      [
        "He showed that in any consistent system of rules rich enough to describe arithmetic, there are true statements that cannot be proved.",
        "Austria is in Europe.",
        "Logic is a branch of philosophy.",
        "He later moved to the United States, where he became a close friend of Albert Einstein.",
        "Mathematicians write papers.",
      ],
      "Boşluk 'bu' ifadesine bağlanan bir sonucu gerektirir; boşluğa aritmetiği tanımlayabilen her tutarlı sistemde kanıtlanamayan doğru önermeler olduğunu gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Two suspects are questioned separately by the police. If both stay silent, both receive short sentences, but if one betrays the other, the betrayer goes free. ---- This 'prisoner's dilemma' shows why individuals acting in their own interest may produce a worse result for everyone.",
      [
        "As a result, each has a reason to betray the other, and both end up worse off than if they had cooperated.",
        "Police stations are busy.",
        "Prisons are expensive.",
        "Researchers have found that people who play the game many times often learn to cooperate.",
        "Suspects need lawyers.",
      ],
      "Boşluk ikilemin sonucunu anlatan bir cümle gerektirir; boşluğa her birinin diğerine ihanet etmek için nedeni olduğunu ve sonunda işbirliği yapsalardı olacağından daha kötü duruma düştüklerini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1973, a university in California appeared to admit a much lower proportion of women than men to its graduate programmes. ---- This is an example of Simpson's paradox, in which a trend that appears in groups of data reverses when the groups are combined.",
      [
        "When the figures were examined department by department, however, most departments actually admitted women at a slightly higher rate.",
        "California is a large state.",
        "Universities have many departments.",
        "The university was worried that it might be taken to court for discrimination.",
        "Statistics can be difficult.",
      ],
      "Boşluk paradoksu gösteren bir bulgu gerektirir; boşluğa bölüm bölüm incelendiğinde çoğu bölümün kadınları biraz daha yüksek oranda kabul ettiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1924, two Polish mathematicians proved a startling result.",
        "They showed that a solid ball can, in theory, be cut into a few pieces and reassembled into two balls identical to the first.",
        "Poland has produced many famous scientists.",
        "The pieces are so complex that they cannot be made in the real world.",
        "The result shows how strange the mathematics of infinity can be.",
      ],
      odd: 2,
      why: "Parça bir topun iki özdeş topa dönüştürülebileceğini gösteren sonucu anlatır. Polonya'nın pek çok ünlü bilim insanı yetiştirdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In many languages, the most common word appears about twice as often as the second most common.",
        "It appears about three times as often as the third.",
        "This pattern is named after an American linguist.",
        "Learning a foreign language takes many years.",
        "Similar patterns have been found in the sizes of cities.",
      ],
      odd: 3,
      why: "Parça dillerdeki sözcük sıklığı örüntüsünü anlatır. Yabancı dil öğrenmenin yıllar sürdüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The golden ratio is a number equal to about 1.618.",
        "It is often claimed that it appears in famous buildings and paintings.",
        "Many of these claims are not supported by careful measurement.",
        "Gold is a soft yellow metal.",
        "The ratio does, however, appear in the arrangement of leaves on some plants.",
      ],
      odd: 3,
      why: "Parça altın oranı ve bu konudaki iddiaları anlatır. Altının yumuşak sarı bir metal olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2016, a Ukrainian mathematician solved the problem of packing spheres in eight dimensions.",
        "Her proof was remarkably short and elegant.",
        "Within a week, she and her colleagues had extended it to twenty-four dimensions.",
        "In 2022 she was awarded the Fields Medal, the highest honour in mathematics.",
        "Ukraine is the second-largest country in Europe.",
      ],
      odd: 4,
      why: "Parça sekiz boyutta küre paketleme sorununu çözen matematikçiyi anlatır. Ukrayna'nın Avrupa'nın ikinci büyük ülkesi olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sudoku puzzles became popular around the world in the early 2000s.",
        "Mathematicians wondered how few starting numbers a puzzle could have and still have only one solution.",
        "Newspapers often print crosswords as well.",
        "In 2012, a team used a computer search lasting about a year to show that the answer is seventeen.",
        "No valid puzzle with only sixteen clues exists.",
      ],
      odd: 2,
      why: "Parça bir Sudoku bulmacasının tek çözümlü olması için gereken en az ipucu sayısını anlatır. Gazetelerin bulmaca da bastığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In a magic square, the numbers in every row, column and diagonal give an identical sum.",
        "One of the oldest is a three-by-three square from ancient China.",
        "According to legend, it was seen on the shell of a turtle that emerged from a river.",
        "Turtles can live for a very long time.",
        "Magic squares were later used as charms in many cultures.",
      ],
      odd: 3,
      why: "Parça sihirli kareleri anlatır. Kaplumbağaların çok uzun yaşayabildiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
