import type { YokdilDeneme } from "./types";

export const SAGLIK_34: YokdilDeneme = {
  no: 34,
  field: "saglik",
  vocab: [
    [
      "After about fifty divisions, the cells stopped dividing and entered a state of ----.",
      ["senescence", "infancy", "excitement", "infection", "confusion"],
      "Yaklaşık elli bölünmeden sonra hücrelerin bölünmeyi bırakıp 'yaşlanma' (senescence) durumuna girdiği anlatılır.",
    ],
    [
      "Her age was carefully ---- using birth certificates and census records.",
      ["verified", "concealed", "invented", "ignored", "exaggerated"],
      "Yaşının doğum belgeleri ve nüfus kayıtları kullanılarak dikkatle 'doğrulandığı' (verified) anlatılır.",
    ],
    [
      "Nuns who expressed more positive emotions in their essays tended to live ---- lives.",
      ["longer", "shorter", "busier", "poorer", "lonelier"],
      "Yazılarında daha olumlu duygular ifade eden rahibelerin daha 'uzun' (longer) yaşama eğiliminde olduğu anlatılır.",
    ],
    [
      "Strong social ties and a sense of purpose are ---- features of communities where people live long lives.",
      ["common", "rare", "foreign", "hidden", "recent"],
      "Güçlü sosyal bağlar ve amaç duygusunun insanların uzun yaşadığı toplulukların 'ortak' (common) özellikleri olduğu anlatılır.",
    ],
    [
      "Muscle mass ---- gradually with age unless people stay physically active.",
      ["declines", "expands", "recovers", "doubles", "freezes"],
      "Kas kütlesinin insanlar fiziksel olarak aktif kalmadıkça yaşla birlikte giderek 'azaldığı' (declines) anlatılır.",
    ],
    [
      "Grandmothers who helped to ---- their grandchildren allowed their daughters to have more children.",
      ["bring up", "put off", "turn down", "give away", "take after"],
      "Torunlarını 'yetiştirmeye' (bring up) yardım eden büyükannelerin kızlarının daha çok çocuk sahibi olmasını sağladığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "Until 1961, most scientists ---- that cells grown in the laboratory could divide forever.",
      ["believed", "have believed", "believe", "will believe", "were believed"],
      "Geçmişte belirli bir tarihe kadar süren inanç: 'believed'.",
    ],
    [
      "By the time she died in 1997, Jeanne Calment ---- for more than 122 years.",
      ["had lived", "lives", "will live", "is living", "has been lived"],
      "Geçmişteki bir andan önce tamamlanmış süre: 'had lived'.",
    ],
    [
      "If the nuns had not written autobiographies as young women, the researchers ---- their language.",
      ["could not have studied", "cannot study", "will not study", "had not studied", "do not study"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'could not have studied'.",
    ],
    [
      "The brains of the nuns ---- after their deaths to look for signs of disease.",
      ["were examined", "examined", "have examined", "are examining", "will examine"],
      "Beyinler araştırmacılar tarafından incelenmiştir; edilgen yapı: 'were examined'.",
    ],
    [
      "---- the monkeys ate about thirty per cent fewer calories, they were not always healthier.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Daha az kalori yemeleri ile her zaman daha sağlıklı olmamaları zıttır: 'Although'.",
    ],
    [
      "Calment met the painter Vincent van Gogh, ---- came into her uncle's shop to buy paint.",
      ["who", "which", "whose", "whom", "where"],
      "Virgülden sonra ressamı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "After the age of thirty, the risk of dying doubles roughly every eight years, ---- is known as Gompertz's law.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The older a person becomes, ---- the lens of the eye gets.",
      ["the stiffer", "the stiffest", "stiffer than", "much stiffer", "so stiff"],
      "'The older ..., the stiffer ...' paralel yapısı: 'the stiffer'.",
    ],
    [
      "Not until the 1990s ---- researchers begin to study centenarians in large numbers.",
      ["did", "had", "were", "have", "do"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Older people ---- exercise regularly are less likely to fall and break their hips.",
      ["who", "which", "whose", "whom", "what"],
      "'Older people' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "Even people in their nineties can build muscle ---- they lift weights regularly.",
      ["if", "unless", "although", "whereas", "so that"],
      "Birinci tip koşul cümlesi: 'if'.",
    ],
    [
      "The scientists wanted to know ---- the shark could really live for several centuries.",
      ["whether", "which", "what", "whose", "that"],
      "'yaşayıp yaşayamayacağını' anlamında dolaylı soru: 'whether'.",
    ],
    [
      "The men in the study were asked to behave as if it ---- 1959.",
      ["were", "is", "will be", "has been", "being"],
      "'as if' sonrası gerçek dışı durum: 'were'.",
    ],
    [
      "Few animals of its size live as long ---- the naked mole rat.",
      ["as", "than", "like", "so", "that"],
      "'as long as' karşılaştırma yapısı: 'as'.",
    ],
  ],
  cloze: [
    {
      text:
        "For much of the early twentieth century, scientists believed that individual cells were potentially immortal. This view was based largely on the work of the French surgeon Alexis Carrel, {1} said that tissue taken from a chick embryo's heart had gone on multiplying in his laboratory for more than thirty years. In 1961, however, two researchers in Philadelphia, Leonard Hayflick and Paul Moorhead, reported a very different result. They grew human cells in culture and found that, {2} the cells were given everything they needed, they divided only about forty to sixty times and then stopped. The cells did not die immediately, but they could no longer multiply. Many scientists at first refused to accept the finding, {3} it contradicted the famous experiment. It was later suggested that Carrel's cultures had survived only because fresh cells were accidentally added each time they were fed. This ceiling on cell division is now called the Hayflick limit. Decades later, researchers discovered {4} it is partly explained by telomeres, protective caps at the ends of chromosomes that become shorter each time a cell divides. Hayflick's discovery opened up the study of ageing {5} the level of the cell.",
      blanks: [
        [
          "(21) ----",
          ["who", "which", "whose", "where", "what"],
          "Virgülden sonra Carrel'i niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(22) ----",
          ["even though", "because", "so that", "as soon as", "unless"],
          "Hücrelere gereken her şeyin verilmesi ile bölünmenin durması zıttır: 'even though'.",
        ],
        [
          "(23) ----",
          ["since", "although", "unless", "whereas", "so that"],
          "Bulgunun reddedilmesinin nedeni ünlü deneyle çelişmesidir: 'since'.",
        ],
        [
          "(24) ----",
          ["that", "what", "which", "whose", "whether"],
          "'discovered that' isim cümleciği: 'that'.",
        ],
        [
          "(25) ----",
          ["at", "in", "on", "by", "for"],
          "'at the level of' kalıbı: 'at'.",
        ],
      ],
    },
    {
      text:
        "Jeanne Calment, who was born in the French city of Arles in 1875 and died there in 1997, holds the record for the longest confirmed human lifespan: 122 years and 164 days. As a teenager she met the painter Vincent van Gogh, {1} visited her uncle's shop; she later remembered him as dirty and badly dressed. Calment lived an active life. She took up fencing at the age of eighty-five and was still riding a bicycle when she was a hundred. {2}, she smoked until she was 117 and enjoyed chocolate and wine. In 1965, when she was ninety, she agreed to sell her flat to a lawyer under a traditional French arrangement {3} the buyer pays a monthly sum until the seller dies and then takes ownership. The lawyer, {4} must have expected a quick bargain, made payments for thirty years and died before she did. In 2018, two Russian researchers suggested that Calment had died in 1934 and that her daughter had taken her identity, but most experts {5} studied the records rejected the claim.",
      blanks: [
        [
          "(26) ----",
          ["who", "which", "where", "whose", "what"],
          "Virgülden sonra ressamı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(27) ----",
          ["Surprisingly", "Therefore", "Similarly", "In short", "As a result"],
          "Aktif yaşamından sonra 117 yaşına kadar sigara içmesi şaşırtıcı bir bilgidir: 'Surprisingly'.",
        ],
        [
          "(28) ----",
          ["in which", "which", "whose", "what", "who"],
          "Düzenleme içinde gerçekleşen durum; edat + ilgi zamiri: 'in which'.",
        ],
        [
          "(29) ----",
          ["who", "which", "whom", "whose", "where"],
          "Virgüller arasında avukatı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(30) ----",
          ["who", "which", "whose", "what", "where"],
          "'most experts' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Carrel's chicken cells appeared to divide for decades, ----.",
      [
        "later work suggested that new cells had been added",
        "he had won a Nobel Prize for surgery",
        "the laboratory was in New York",
        "chickens are often used in research",
        "the heart is made of muscle cells",
      ],
      "'Although' zıtlık ister: Carrel'in tavuk hücreleri onlarca yıl bölünüyor gibi görünse de sonraki çalışmalar yeni hücreler eklendiğini düşündürdü.",
    ],
    [
      "Calment's age was considered reliable ----.",
      [
        "as official records backed it",
        "although she lived in a small city",
        "unless she had moved to another country",
        "so that she met Vincent van Gogh",
        "while she enjoyed eating chocolate",
      ],
      "Calment'in yaşı ayrıntılı resmî kayıtlarla desteklendiği için güvenilir sayıldı.",
    ],
    [
      "If people keep their minds active throughout life, ----.",
      [
        "they may resist dementia better",
        "the nuns lived in a convent",
        "the essays were written in the 1930s",
        "many brains were donated to science",
        "the study began in 1986",
      ],
      "Birinci tip koşul: insanlar yaşamları boyunca zihinlerini aktif tutarsa demansa karşı daha iyi korunabilirler.",
    ],
    [
      "----, the researchers marked the villages on the map with blue ink.",
      [
        "Having found unusually many very old people there",
        "Although Sardinia is a large island",
        "Unless the records had been lost",
        "Because shepherds walk long distances",
        "Since the map was very old",
      ],
      "Orada alışılmadık sayıda çok yaşlı insan bulduktan sonra araştırmacılar köyleri haritada mavi mürekkeple işaretledi.",
    ],
    [
      "The two monkey studies seemed to contradict each other ----.",
      [
        "until researchers compared the diets they had used",
        "because rhesus monkeys live in Asia",
        "although calories are measured in units",
        "unless the monkeys had been fed by hand",
        "while the studies were carried out in America",
      ],
      "İki maymun çalışması, araştırmacılar kullanılan diyetleri karşılaştırana kadar birbiriyle çelişiyor gibi göründü.",
    ],
    [
      "Women in many societies live long after they stop having children, ----.",
      [
        "which some link to grandmothers",
        "because the Hadza live in Tanzania",
        "although berries are gathered by women",
        "unless their daughters live nearby",
        "so that the study was published",
      ],
      "'which' ile kadınların çocuk sahibi olmayı bıraktıktan sonra uzun yaşamasını bazı bilim insanlarının büyükannelerin rolüyle açıkladığı eklenir.",
    ],
    [
      "Not only did the men in the study look younger after a week, ----.",
      [
        "but some of their test results also improved",
        "and the building had been decorated",
        "since the study took place in 1979",
        "so they listened to old radio programmes",
        "unless they were over seventy",
      ],
      "'Not only ... but also' yapısı tamamlanır: adamlar bir hafta sonra yalnızca daha genç görünmekle kalmadı, bazı test sonuçları da iyileşti.",
    ],
    [
      "Since the lens of the eye becomes less flexible with age, ----.",
      [
        "most people over forty need reading glasses",
        "the eye is filled with a clear jelly",
        "light enters through the pupil",
        "many people prefer large-print books",
        "eye tests are free for children",
      ],
      "'Since' neden bildirir: gözün merceği yaşla esnekliğini kaybettiği için kırk yaş üstü çoğu insan okumak için gözlüğe ihtiyaç duyar.",
    ],
    [
      "A hip fracture can be very serious in older people ----.",
      [
        "as it often ends independence",
        "although the hip is a large joint",
        "unless the fall happens at home",
        "so that hospitals have special wards",
        "while bones contain calcium",
      ],
      "Kalça kırığı, sıklıkla uzun süreli bağımsızlık kaybına yol açtığı için yaşlılarda çok ciddi olabilir.",
    ],
    [
      "The siblings of centenarians are themselves more likely to live long, ----.",
      [
        "which suggests that genes play a part",
        "because the study was based in Boston",
        "although many centenarians are women",
        "unless they smoke heavily",
        "so that families stay close",
      ],
      "'which' ile yüz yaşındakilerin kardeşlerinin de uzun yaşama olasılığının yüksek olmasının genlerin rol oynadığını düşündürdüğü eklenir.",
    ],
    [
      "Unless older people stay physically active, ----.",
      [
        "they gradually lose strength and balance",
        "most of them live with their families",
        "the population is ageing in many countries",
        "many of them retire at sixty-five",
        "doctors measure blood pressure",
      ],
      "'Unless' olumsuz koşul: yaşlılar fiziksel olarak aktif kalmazsa giderek güç ve dengelerini kaybederler.",
    ],
  ],
  enTr: [
    [
      "Normal human cells can divide only a limited number of times before they stop.",
      [
        "Normal insan hücreleri, durmadan önce yalnızca sınırlı sayıda bölünebilir.",
        "Normal insan hücreleri, laboratuvarda gereken her şey verildiğinde hiç durmadan sonsuza kadar bölünebilir.",
        "İnsan hücreleri, bölünmeyi bıraktıktan sonra hemen ölür.",
        "Hücreler bölündükçe daha güçlü hale gelir.",
        "Normal hücreler, yalnızca laboratuvarda bölünebilir.",
      ],
      "'can divide only a limited number of times' 'yalnızca sınırlı sayıda bölünebilir', 'before they stop' 'durmadan önce' karşılığıdır.",
    ],
    [
      "She remained physically active well into her hundreds.",
      [
        "Yüzlü yaşlarına iyice girene kadar fiziksel olarak aktif kaldı.",
        "Yüz yaşından sonra fiziksel etkinliği tamamen bıraktı.",
        "Yüz yaşına geldiğinde ilk kez spor yapmaya başladı.",
        "Fiziksel olarak aktif olduğu için yüz yaşına kadar yaşadı.",
        "Yüzlerce kez fiziksel aktivite rekoru kırdı.",
      ],
      "'remained physically active' 'fiziksel olarak aktif kaldı', 'well into her hundreds' 'yüzlü yaşlarına iyice girene kadar' karşılığıdır.",
    ],
    [
      "The way the nuns wrote in their twenties predicted their mental health decades later.",
      [
        "Rahibelerin yirmili yaşlarındaki yazış biçimi, onlarca yıl sonraki zihinsel sağlıklarını öngördü.",
        "Rahibeler, yirmili yaşlarında zihinsel sağlıkları hakkında yazılar yazdı.",
        "Rahibelerin zihinsel sağlığı, yazı yazmayı bıraktıktan sonra bozuldu.",
        "Rahibeler, onlarca yıl sonra yazdıklarını hatırlamadı.",
        "Rahibelerin yirmili yaşlarından itibaren yazdığı yazılar, onlarca yıl boyunca her yıl düzenli olarak değerlendirildi.",
      ],
      "'The way the nuns wrote in their twenties' 'rahibelerin yirmili yaşlarındaki yazış biçimi', 'predicted their mental health decades later' 'onlarca yıl sonraki zihinsel sağlıklarını öngördü' karşılığıdır.",
    ],
    [
      "Eating fewer calories extends the lives of many laboratory animals.",
      [
        "Daha az kalori almak, pek çok laboratuvar hayvanının ömrünü uzatır.",
        "Laboratuvar hayvanları, daha uzun yaşamak için daha çok kalori almalıdır.",
        "Kalori kısıtlaması, laboratuvar hayvanlarında ömrü kısaltır.",
        "Pek çok laboratuvar hayvanı, az kaloriyle beslenmeyi reddeder.",
        "Kalorinin hayvanların ömrü üzerinde hiçbir etkisi yoktur.",
      ],
      "'Eating fewer calories' 'daha az kalori almak', 'extends the lives of many laboratory animals' 'pek çok laboratuvar hayvanının ömrünü uzatır' karşılığıdır.",
    ],
    [
      "Older women who gathered food helped to feed their daughters' children.",
      [
        "Yiyecek toplayan yaşlı kadınlar, kızlarının çocuklarını beslemeye yardım etti.",
        "Yaşlı kadınlar, kızlarının topladığı yiyeceklerle beslendi.",
        "Kızlar, annelerinin çocuklarını beslemek için yiyecek topladı.",
        "Yaşlı kadınlar, torunlarının yiyecek toplamasına izin vermedi.",
        "Kızlarının çocukları, yiyecek toplayamayacak kadar yaşlı olan büyükannelerini beslemeye yardım etti.",
      ],
      "'Older women who gathered food' 'yiyecek toplayan yaşlı kadınlar', 'helped to feed their daughters' children' 'kızlarının çocuklarını beslemeye yardım etti' karşılığıdır.",
    ],
    [
      "Strength training can benefit people even in their nineties.",
      [
        "Kuvvet antrenmanı, doksanlı yaşlarındaki insanlara bile fayda sağlayabilir.",
        "Kuvvet antrenmanı, doksan yaşın üzerindekiler için tehlikelidir.",
        "Doksanlı yaşlarındaki insanlar, kuvvet antrenmanından hiç yararlanamaz.",
        "Kuvvet antrenmanı, yalnızca gençlere fayda sağlar.",
        "İnsanlar doksan yaşına kadar kuvvet antrenmanı yapmamalıdır.",
      ],
      "'can benefit people' 'insanlara fayda sağlayabilir', 'even in their nineties' 'doksanlı yaşlarında bile' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Hücreler her bölündüğünde kromozomların uçlarındaki koruyucu kısımlar kısalır.",
      [
        "Each time a cell divides, the protective parts at the ends of its chromosomes become shorter.",
        "The protective parts of chromosomes grow longer each time a cell divides.",
        "Cells stop dividing when the ends of their chromosomes become longer.",
        "The ends of chromosomes protect cells from dividing too quickly.",
        "Chromosomes lose the protective parts at their ends only when the cells that contain them finally die.",
      ],
      "'her bölündüğünde' 'each time a cell divides', 'koruyucu kısımlar kısalır' 'the protective parts become shorter' karşılığıdır.",
    ],
    [
      "Uzun yaşayan toplulukların çoğunda insanlar ağırlıklı olarak bitkisel besinler tüketiyor.",
      [
        "In most long-lived communities, people eat mainly plant-based foods.",
        "In most long-lived communities, people eat large amounts of meat.",
        "People who eat plant-based foods rarely live in communities.",
        "Most communities that eat plants have a short life expectancy.",
        "Long-lived people refuse to eat plant-based foods.",
      ],
      "'Uzun yaşayan toplulukların çoğunda' 'in most long-lived communities', 'ağırlıklı olarak bitkisel besinler tüketiyor' 'eat mainly plant-based foods' karşılığıdır.",
    ],
    [
      "Araştırmacılar, beyinlerinde hastalık belirtileri bulunan bazı rahibelerin hiçbir belirti göstermediğini fark etti.",
      [
        "The researchers noticed that some nuns whose brains showed signs of disease had had no symptoms.",
        "The researchers found that all the nuns with symptoms had healthy brains.",
        "Some nuns noticed symptoms of disease before the researchers did.",
        "The researchers could find no signs of disease in the nuns' brains.",
        "Nuns who had shown symptoms of disease during their lives refused to donate their brains to the researchers.",
      ],
      "'beyinlerinde hastalık belirtileri bulunan bazı rahibeler' 'some nuns whose brains showed signs of disease', 'hiçbir belirti göstermediğini' 'had had no symptoms' karşılığıdır.",
    ],
    [
      "Yaşla birlikte ölüm riski yaklaşık her sekiz yılda bir iki katına çıkar.",
      [
        "With age, the risk of dying roughly doubles every eight years.",
        "The risk of dying falls by half every eight years.",
        "People are twice as likely to die before the age of eight.",
        "Every eight years, the number of old people doubles.",
        "The risk of dying stays the same throughout adult life.",
      ],
      "'Yaşla birlikte' 'with age', 'yaklaşık her sekiz yılda bir iki katına çıkar' 'roughly doubles every eight years' karşılığıdır.",
    ],
    [
      "Denge egzersizleri, yaşlıların düşüp kalçalarını kırma olasılığını belirgin biçimde azaltabilir.",
      [
        "Balance exercises can markedly lower the chance that older people will fall and break a hip.",
        "Older people who do balance exercises are more likely to fall and break a hip than those who do not.",
        "Older people who have broken a hip should stop doing any kind of exercise.",
        "The chance of breaking a hip has no connection with how often older people exercise.",
        "Falls and broken hips are the main reasons why older people start doing exercises.",
      ],
      "'Denge egzersizleri' 'balance exercises', 'düşüp kalçalarını kırma olasılığını belirgin biçimde azaltabilir' 'can markedly lower the chance that older people will fall and break a hip' karşılığıdır.",
    ],
    [
      "Bu köpekbalığının yaşı, göz merceğindeki proteinler incelenerek tahmin edildi.",
      [
        "The age of this shark was estimated by examining proteins in the lens of its eye.",
        "The shark's eyes were damaged by proteins as it grew older.",
        "Proteins in the shark's eye make it difficult to estimate its age.",
        "The shark was able to see clearly despite its great age.",
        "Scientists estimated the shark's age by measuring its length and comparing it with that of younger sharks.",
      ],
      "'göz merceğindeki proteinler incelenerek' 'by examining proteins in the lens of its eye', 'yaşı tahmin edildi' 'the age was estimated' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1986, the epidemiologist David Snowdon began a long-term study of 678 elderly Catholic nuns belonging to the School Sisters of Notre Dame in the United States. The sisters were ideal participants: they had lived similar lives, with the same diet and housing, did not smoke or drink heavily, and had similar access to medical care, so that many factors that usually complicate research were controlled. They agreed to undergo regular tests of memory and thinking, and to donate their brains for examination after death. The researchers also discovered a valuable resource in the convent archives: short autobiographies that many of the nuns had written when they took their vows, usually in their early twenties. Analysing these essays, the team found that sisters whose writing was rich in ideas and complex in grammar were much less likely to develop Alzheimer's disease some sixty years later. Those whose essays expressed more positive emotions also tended to live longer. Perhaps most surprisingly, some sisters whose brains showed the physical damage typical of Alzheimer's had shown no signs of mental decline during their lives, suggesting that some people can resist the effects of the disease.",
      questions: [
        [
          "According to the passage, the nuns were good subjects for research mainly because ----.",
          [
            "their similar lifestyles reduced other influences",
            "they had all been diagnosed with Alzheimer's",
            "they were much younger than other volunteers",
            "they lived in many different countries",
            "they had all studied medicine",
          ],
          "Benzer yaşamlar sürmeleri, araştırmayı karmaşıklaştıran pek çok etkeni kontrol altına aldı.",
        ],
        [
          "The autobiographies were valuable because they ----.",
          [
            "showed how the nuns wrote decades before the study",
            "described the symptoms of Alzheimer's disease",
            "were written by the researchers themselves",
            "contained the results of memory tests",
            "explained why the nuns entered the convent",
          ],
          "Denemeler rahibelerin yirmili yaşlarında, yani çalışmadan onlarca yıl önce nasıl yazdığını gösteriyordu.",
        ],
        [
          "It can be inferred from the final finding that ----.",
          [
            "brain damage does not always cause symptoms",
            "Alzheimer's disease cannot be detected after death",
            "positive emotions cause brain damage",
            "all the nuns developed dementia",
            "the brain tests were unreliable",
          ],
          "Beyninde Alzheimer hasarı olan bazı rahibelerde belirti görülmemesi hasarın her zaman belirtiye yol açmadığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In the late 1990s, the demographers Gianni Pes and Michel Poulain studied birth and death records in the mountainous interior of the Italian island of Sardinia, where there appeared to be an unusually large number of men who had reached the age of one hundred. As they confirmed each case, they marked the villages on a map with blue ink, and the area became known as a 'blue zone'. The journalist Dan Buettner later worked with researchers to identify other places where people seemed to live exceptionally long lives, including the Japanese island of Okinawa, the Nicoya Peninsula in Costa Rica, the Greek island of Ikaria and a community of Seventh-day Adventists in Loma Linda, California. Despite their differences, these populations shared certain features: a diet based mainly on vegetables, beans and whole grains; regular, moderate physical activity built into daily life; close family and social ties; and a strong sense of purpose. The blue zones have become very popular in books and the media. Some researchers, however, have questioned the accuracy of the age records in certain regions, pointing out that in places where birth certificates are unreliable or pensions encourage false claims, the number of very old people may be exaggerated.",
      questions: [
        [
          "According to the passage, the term 'blue zone' came from ----.",
          [
            "the way researchers marked a map",
            "the colour of the sea around Sardinia",
            "a type of local clothing",
            "the name of a medical journal",
            "a diet based on blue fruit",
          ],
          "Metne göre araştırmacılar köyleri haritada mavi mürekkeple işaretlemişti.",
        ],
        [
          "The features shared by the blue zones include ----.",
          [
            "everyday physical activity and strong social bonds",
            "high levels of wealth and education",
            "a diet rich in red meat",
            "a cold climate with long, dark winters",
            "frequent use of modern medicine",
          ],
          "Ortak özellikler arasında gündelik yaşama yerleşmiş fiziksel etkinlik ve yakın sosyal bağlar sayılır.",
        ],
        [
          "It can be understood from the passage that some critics ----.",
          [
            "doubt whether all the reported ages are accurate",
            "believe that Sardinia has no old people",
            "think that diet has no effect on health",
            "want more books written about blue zones",
            "argue that pensions should be abolished",
          ],
          "Bazı araştırmacılar belirli bölgelerdeki yaş kayıtlarının doğruluğunu sorgulamaktadır.",
        ],
      ],
    },
    {
      text:
        "Since the 1930s, experiments have shown that rats and mice fed about thirty per cent fewer calories than usual, while still receiving all the nutrients they need, live significantly longer than animals allowed to eat freely. To find out whether the same was true of primates, two long-term studies of rhesus monkeys were begun in the United States in the late 1980s, one at the National Institute on Aging and the other at the University of Wisconsin. The Wisconsin study reported in 2009 that restricted monkeys were less likely to develop diabetes, cancer and heart disease and were more likely to survive. In 2012, however, the National Institute on Aging study found that, although the restricted monkeys had some health benefits, they did not live longer. The apparently contradictory results caused much debate. In 2017, the two teams published a joint analysis that offered an explanation. The control monkeys in Wisconsin had been allowed to eat as much as they liked of a diet relatively high in sugar, whereas those in the other study had been given measured portions of a healthier diet. In addition, the age at which restriction began seemed to matter. The researchers concluded that eating less can benefit primates, but that the effects depend on what is eaten and when.",
      questions: [
        [
          "According to the passage, the two monkey studies ----.",
          [
            "at first appeared to reach different conclusions",
            "were both carried out at the same university",
            "found that restriction always shortened life",
            "used rats and mice instead of monkeys",
            "began in the 1930s",
          ],
          "Wisconsin çalışması yaşam süresinde fayda bulurken diğeri bulmamıştır; sonuçlar başlangıçta çelişkili görünmüştür.",
        ],
        [
          "The joint analysis suggested that the difference was partly due to ----.",
          [
            "the diet given to the control groups",
            "the size of the monkeys' cages",
            "the climate in Wisconsin",
            "the sex of the monkeys",
            "errors in recording deaths",
          ],
          "Wisconsin'deki kontrol maymunları şekerce zengin bir diyetten istedikleri kadar yiyebilmişti.",
        ],
        [
          "It can be understood from the passage that, according to the researchers, ----.",
          [
            "the benefits of eating less are not simple",
            "calorie restriction is harmful to primates",
            "monkeys should be fed only sugar",
            "the age of the animals is unimportant",
            "the earlier rodent studies were wrong",
          ],
          "Etkiler ne yendiğine ve ne zaman başlandığına bağlıdır; yani faydalar basit değildir.",
        ],
      ],
    },
    {
      text:
        "Humans are unusual among mammals in that women commonly live for decades after they can no longer have children. In most other species, females continue to reproduce until shortly before they die. Why, then, did a long life after menopause evolve? One influential answer is the 'grandmother hypothesis', developed by the anthropologist Kristen Hawkes and her colleagues after studying the Hadza, hunter-gatherers in Tanzania. Hawkes noticed that older Hadza women were among the hardest-working members of their communities, spending many hours digging for tubers that young children could not obtain for themselves. The food they collected helped to feed their grandchildren, and children with a grandmother to help them were better nourished. Hawkes argued that, in the distant past, women who lived longer and helped their daughters in this way would have had more surviving descendants, so the genes for a longer life would have spread. Support for the idea has come from studies of historical birth records in Finland and Canada, which show that women whose mothers were alive had more children. Interestingly, killer whales are one of the few other species in which females live long after they stop reproducing, and older females appear to lead their groups to food.",
      questions: [
        [
          "According to the passage, older Hadza women ----.",
          [
            "collected food that young children could not get",
            "rarely worked after menopause",
            "spent most of their time hunting animals",
            "lived apart from their families",
            "were looked after by their grandchildren",
          ],
          "Metne göre yaşlı Hadza kadınları küçük çocukların kendi başına elde edemeyeceği yumruları kazıyordu.",
        ],
        [
          "The historical records from Finland and Canada ----.",
          [
            "support the idea that grandmothers increase family size",
            "show that women lived shorter lives in the past",
            "prove that menopause did not exist",
            "were collected by the Hadza",
            "contradict the grandmother hypothesis",
          ],
          "Annesi hayatta olan kadınların daha çok çocuğu olması hipotezi destekler.",
        ],
        [
          "The writer mentions killer whales in order to show that ----.",
          [
            "a long life after reproduction also occurs in another species",
            "whales are closely related to humans",
            "older females are hunted by younger ones",
            "all mammals experience menopause",
            "whales eat much the same kinds of food as the Hadza do",
          ],
          "Katil balinalar, dişilerin üremeyi bıraktıktan sonra uzun yaşadığı az sayıdaki diğer türlerden biridir.",
        ],
      ],
    },
    {
      text:
        "In 1825, the British mathematician and insurance expert Benjamin Gompertz published a paper on the patterns of human mortality. Insurance companies needed to calculate how long their customers were likely to live, and Gompertz studied tables of deaths from several towns. He noticed that, after early adulthood, the chance of dying in any given year did not simply rise steadily; it increased exponentially, so that it doubled at regular intervals. In modern populations, this interval is roughly eight years: a person of forty is about twice as likely to die in the coming year as a person of thirty-two. This relationship, now known as the Gompertz law, has been confirmed in many countries and periods, and similar patterns have been found in many other animals. It remains one of the most important tools for studying ageing, since a slowing of the rate at which risk doubles would indicate that ageing itself had been slowed. At very great ages, however, the curve seems to level off, and some studies suggest that the risk of death stops rising after about 105, although this remains controversial because there are so few people of that age to study.",
      questions: [
        [
          "According to the passage, Gompertz's research was motivated partly by ----.",
          [
            "the needs of insurance companies",
            "a desire to cure diseases of old age",
            "a study of animals in the wild",
            "his own fear of growing old",
            "a government plan to raise pensions",
          ],
          "Metne göre sigorta şirketlerinin müşterilerinin ne kadar yaşayacağını hesaplaması gerekiyordu.",
        ],
        [
          "The example of a person of forty and a person of thirty-two is used to ----.",
          [
            "illustrate how the risk of death doubles",
            "show that younger people die more often",
            "compare men and women",
            "prove that ageing has been slowed",
            "explain how insurance works",
          ],
          "Bu örnek ölüm riskinin yaklaşık sekiz yılda bir iki katına çıktığını göstermek için verilir.",
        ],
        [
          "It can be understood from the passage that the levelling off of risk at very old ages ----.",
          [
            "is not yet firmly established",
            "was discovered by Gompertz himself",
            "occurs only in animals",
            "proves that ageing can be stopped",
            "is caused by insurance tables",
          ],
          "Bu bulgu o yaşta çok az insan olduğu için hâlâ tartışmalıdır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1979, the psychologist Ellen Langer took a group of men in their seventies to a country retreat that had been decorated to look as it would have done in 1959. ---- After a week, several of them showed improvements in hearing, memory and strength.",
      [
        "They were asked to talk and behave as if they were living twenty years earlier.",
        "Many people enjoy spending holidays in the countryside.",
        "Psychologists often work in universities and hospitals.",
        "The late 1950s were a time of economic growth in America.",
        "Music from earlier decades is still popular with many listeners today.",
      ],
      "Boşluktan sonra bir hafta sonra görülen iyileşmeler anlatılır; boşluğa adamlardan yirmi yıl öncesinde yaşıyormuş gibi davranmalarının istendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "From around the age of thirty, people begin to lose muscle mass, and the process speeds up in old age. ---- Encouragingly, a study in 1990 found that even residents of a nursing home in their nineties more than doubled their strength after eight weeks of weight training.",
      [
        "This condition, called sarcopenia, increases the risk of falls and disability.",
        "Many people join gyms at the start of the year.",
        "Nursing homes are often located in quiet areas.",
        "Protein is found in meat, fish and beans.",
        "Weights used in gyms are usually made from iron or steel.",
      ],
      "Boşluktan sonra 'Encouragingly' ile olumlu bir bulgu verilir; boşluğa kas kaybının adını ve düşme ile engellilik riskini artırdığını söyleyen cümle gelmelidir.",
    ],
    [
      "In young people, the lens of the eye is soft and can easily change shape to focus on near objects. ---- This is why most people begin to need reading glasses in their forties.",
      [
        "With age, however, it gradually becomes stiffer.",
        "The eye is protected by the bones of the skull.",
        "Many young people spend hours looking at screens.",
        "Glasses were invented in Italy in the thirteenth century.",
        "Some animals can see in the dark.",
      ],
      "Boşluktan sonra 'This is why' ile okuma gözlüğü ihtiyacı açıklanır; boşluğa merceğin yaşla birlikte sertleştiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Every year, about one in three people over sixty-five has a fall, and some of these falls lead to a broken hip. ---- Exercises that improve balance, such as tai chi, have been shown to reduce the number of falls.",
      [
        "Many of those who break a hip never fully regain their independence.",
        "Tai chi was originally developed in China.",
        "Hip replacements are among the most common operations.",
        "Older people often live alone.",
        "Bones are made mainly of calcium and become thinner with age.",
      ],
      "Boşluktan önce kalça kırıklarından söz edilir; boşluğa kalçası kırılanların çoğunun bağımsızlığını tam olarak geri kazanamadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1995, researchers in Boston began the New England Centenarian Study, one of the largest studies of people aged one hundred or more. ---- Many of them had avoided or delayed diseases such as heart disease and cancer until very late in life.",
      [
        "They found that centenarians were often remarkably healthy for their age.",
        "Boston is home to several famous universities.",
        "The number of centenarians is rising in many countries.",
        "Many centenarians receive a letter from their head of state.",
        "Heart disease is one of the commonest illnesses in industrial countries.",
      ],
      "Boşluktan sonra 'Many of them' ile hastalıkları geciktirdikleri anlatılır; boşluğa yüz yaşındakilerin yaşlarına göre son derece sağlıklı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Doctors increasingly use the term 'frailty' to describe older people who have become weak, slow and easily exhausted. ---- As a result, an infection or a minor fall that a healthier person would quickly recover from can lead to a long stay in hospital.",
      [
        "Such people have little reserve to cope with sudden stress or illness.",
        "Many doctors now specialise in the care of older patients today.",
        "Hospitals in most countries have long waiting lists for operations.",
        "Infections are caused by bacteria, viruses and other organisms.",
        "Some older people continue to work well beyond retirement age.",
      ],
      "Boşluktan sonra 'As a result' ile küçük bir sorunun uzun hastane yatışına yol açabildiği anlatılır; boşluğa bu kişilerin ani strese ya da hastalığa dayanacak yedeklerinin az olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Among the most ancient organisms alive today are bristlecone pines in the mountains of California.",
        "One tree, known as Methuselah, has been growing for roughly forty-eight centuries.",
        "California is the most populous state in the United States.",
        "The trees grow extremely slowly in the cold, dry conditions.",
        "Their exact locations are kept secret to protect them from visitors.",
      ],
      odd: 2,
      why: "Parça kılçıklı çamları anlatır. Kaliforniya'nın ABD'nin en kalabalık eyaleti olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The naked mole rat is a small, almost hairless rodent that lives underground in East Africa.",
        "Although it is about the size of a mouse, it can live for more than thirty years.",
        "Unusually, its risk of dying does not seem to increase as it gets older.",
        "It also very rarely develops cancer, which has made it of great interest to scientists.",
        "East Africa is famous for its wildlife safaris.",
      ],
      odd: 4,
      why: "Parça çıplak köstebek faresini anlatır. Doğu Afrika'nın vahşi yaşam safarileriyle ünlü olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Greenland shark lives in the cold, deep waters of the North Atlantic and Arctic Oceans.",
        "In 2016, scientists estimated the ages of several sharks by dating proteins in the lenses of their eyes.",
        "The oldest was thought to be around four hundred years old.",
        "Greenland is a self-governing territory of Denmark.",
        "This makes the species the longest-lived vertebrate known to science.",
      ],
      odd: 3,
      why: "Parça Grönland köpekbalığını anlatır. Grönland'ın Danimarka'ya bağlı özerk bir bölge olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many members of the Seventh-day Adventist community in Loma Linda, California, follow a vegetarian diet.",
        "Their religion also discourages smoking and drinking alcohol.",
        "Studies have found that they live several years longer than the average Californian.",
        "Los Angeles is about an hour's drive from Loma Linda.",
        "Researchers believe that diet, exercise and strong community ties all contribute.",
      ],
      odd: 3,
      why: "Parça Loma Linda'daki Adventistlerin uzun ömrünü anlatır. Los Angeles'ın Loma Linda'ya yaklaşık bir saatlik mesafede olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On the Greek island of Ikaria, an unusually high proportion of people live into their nineties.",
        "Greek is one of the oldest languages still spoken in Europe.",
        "Islanders typically eat vegetables, olive oil and beans, and drink herbal teas.",
        "Many walk up and down steep hills every day and take regular afternoon naps.",
        "Close family ties mean that older people are rarely isolated.",
      ],
      odd: 1,
      why: "Parça İkaria adasındaki uzun yaşamı anlatır. Yunancanın Avrupa'da hâlâ konuşulan en eski dillerden biri olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Jonathan, a giant tortoise living on the island of St Helena in the South Atlantic, is thought to have hatched around 1832.",
        "He was brought to the island as an adult in 1882 and has lived in the grounds of the governor's residence ever since.",
        "Although he is now blind and has lost his sense of smell, he still has a good appetite.",
        "Vets feed him by hand once a week with fruit and vegetables to keep him healthy.",
        "St Helena is best known as the place where Napoleon spent his final years.",
      ],
      odd: 4,
      why: "Parça dev kaplumbağa Jonathan'ı anlatır. St Helena'nın en çok Napolyon'un son yıllarını geçirdiği yer olarak bilindiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
