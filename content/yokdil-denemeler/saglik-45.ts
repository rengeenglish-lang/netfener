import type { YokdilDeneme } from "./types";

export const SAGLIK_45: YokdilDeneme = {
  no: 45,
  field: "saglik",
  vocab: [
    [
      "Much of the milk sold in city slums was ---- with bacteria by the time it reached children.",
      ["contaminated", "enriched", "decorated", "measured", "frozen"],
      "Kentin yoksul mahallelerinde satılan sütün çoğunun çocuklara ulaştığında bakterilerle 'kirlenmiş' (contaminated) olduğu anlatılır.",
    ],
    [
      "The cold, still air ---- the smoke close to the ground for five days.",
      ["trapped", "released", "cleaned", "heated", "coloured"],
      "Soğuk ve durgun havanın dumanı beş gün boyunca yere yakın 'hapsettiği' (trapped) anlatılır.",
    ],
    [
      "Doctors began to see patients with dark spots and hard ---- on their skin.",
      ["patches", "bottles", "feathers", "pages", "coins"],
      "Doktorların derisinde koyu lekeler ve sert 'yamalar' (patches) bulunan hastalar görmeye başladığı anlatılır.",
    ],
    [
      "A single cheap tablet, taken once or twice a year, can ---- most intestinal worms.",
      ["kill", "feed", "attract", "protect", "multiply"],
      "Yılda bir ya da iki kez alınan tek bir ucuz tabletin bağırsak solucanlarının çoğunu 'öldürebildiği' (kill) anlatılır.",
    ],
    [
      "The device allowed police to ---- the amount of alcohol in a driver's blood from a breath sample.",
      ["estimate", "increase", "conceal", "remove", "ignore"],
      "Cihazın polisin bir nefes örneğinden sürücünün kanındaki alkol miktarını 'tahmin etmesine' (estimate) olanak verdiği anlatılır.",
    ],
    [
      "Residents had no idea that their homes had been built on top of a chemical waste dump until children began to ----.",
      ["fall ill", "take off", "look up", "give in", "set up"],
      "Sakinlerin çocuklar 'hastalanmaya' (fall ill) başlayana kadar evlerinin kimyasal atık çöplüğü üzerine kurulduğundan haberi olmadığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before the milk stations opened, many infants in New York ---- from diseases spread by milk.",
      ["had died", "die", "have died", "will die", "are dying"],
      "İstasyonlar açılmadan önce tamamlanmış durum: 'had died'.",
    ],
    [
      "By the time the fog lifted, thousands of people ---- to hospital with breathing problems.",
      ["had been taken", "take", "have taken", "will take", "are taking"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been taken'.",
    ],
    [
      "If the wells had been tested for arsenic when they were installed, millions of people ---- poisoned.",
      ["might not have been", "will not be", "are not", "had not been", "are not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have been'.",
    ],
    [
      "Millions of wells ---- and painted red or green since the late 1990s.",
      ["have been tested", "tested", "have tested", "are testing", "test"],
      "Kuyular test edilegelmiştir; edilgen geçmişten bugüne: 'have been tested'.",
    ],
    [
      "---- the canal had been abandoned for decades, the chemicals buried there remained dangerous.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Kanalın terk edilmiş olması ile kimyasalların tehlikeli kalması zıttır: 'Although'.",
    ],
    [
      "The professor, ---- device was first used by police in 1954, also studied the effects of alcohol on driving.",
      ["whose", "which", "who", "whom", "where"],
      "Profesörün cihazı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The city's death rate tripled during the fog, ---- shocked the government into action.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The faster a car is travelling, ---- likely a collision is to kill a pedestrian.",
      ["the more", "the most", "more than", "much more", "so"],
      "'The faster ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Not until 1956 ---- Parliament pass a law to control smoke from homes and factories.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The milk was heated before sale ---- harmful bacteria would be destroyed.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The government ordered the families ---- their homes and moved them elsewhere.",
      ["to leave", "leaving", "leave", "left", "to leaving"],
      "'order sb to do sth' kalıbı: 'to leave'.",
    ],
    [
      "The fog is now estimated ---- around twelve thousand deaths in total.",
      ["to have caused", "causing", "to cause", "caused", "to be causing"],
      "Geçmişe ait bir sonuç için mastarın geçmiş biçimi: 'to have caused'.",
    ],
    [
      "The smoke was so thick ---- buses had to be guided by men walking in front with torches.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The policy requires that roads ---- designed so that human errors do not lead to deaths.",
      ["be", "are", "were", "to be", "being"],
      "'require that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the late nineteenth century, a large proportion of children in American cities died before their first birthday, and contaminated milk was a major cause. Much of the milk sold in poor neighbourhoods came from cows kept in crowded, dirty conditions, and {1} the time it reached customers it was often full of bacteria; some dealers even added water, chalk or other substances to it. Nathan Straus, a wealthy New York businessman who co-owned Macy's department store, became convinced that heating milk to kill bacteria, a process known as pasteurisation, could save lives. In 1893, he opened the first of a series of milk stations in New York {2} pasteurised milk was sold cheaply, or given free to families who could not afford it. Nurses at the stations also taught mothers about caring for their babies. Straus's campaign met strong opposition from some dairy farmers and doctors, {3} argued that heating spoiled the taste and nutritional value of milk. He continued nevertheless, and by the early twentieth century his stations were distributing millions of bottles a year. Straus also funded milk stations in other American cities and abroad, including in Palestine. Infant death rates fell sharply in the areas served by the stations, {4} other factors, such as better housing and sanitation, also played a part. In 1908, Chicago became the first major city to require the pasteurisation of most milk, and {5} other cities gradually followed.",
      blanks: [
        [
          "(21) ----",
          ["by", "for", "at", "in", "on"],
          "'... -dığı zamana kadar' anlamındaki 'by the time' kalıbı gerekir: 'by'.",
        ],
        [
          "(22) ----",
          ["where", "which", "whose", "when", "who"],
          "İstasyonları (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(23) ----",
          ["who", "which", "whose", "whom", "where"],
          "Çiftçi ve doktorları niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(24) ----",
          ["although", "because", "unless", "so that", "once"],
          "Ölümlerin düşmesi ile başka etkenlerin de rol oynaması zıtlık bildirir: 'although'.",
        ],
        [
          "(25) ----",
          ["many", "much", "every", "each", "little"],
          "Sayılabilen çoğul isimle 'many other cities': 'many'.",
        ],
      ],
    },
    {
      text:
        "On 5 December 1952, a thick fog descended on London. Normally, fog would clear within a day or two, but this time an area of high pressure brought cold, still air {1} prevented the fog from rising or moving away. At the time, most homes in London were heated by coal fires, and in the cold weather people burned more coal than usual. Smoke from millions of chimneys, as well as from factories and power stations, mixed with the fog to form a dense, yellowish-black smog. Visibility dropped to the point where pedestrians lost sight of the pavement beneath them; buses and ambulances stopped running, and cinemas closed {2} audiences could not see the screen. The smog lasted for five days. During that time, the number of deaths in the city rose sharply, mainly among elderly people and those with heart and lung disease. Officials initially estimated that about four thousand people had died, {3} later studies suggested that the total, including deaths in the following weeks, may have reached around twelve thousand. The government was at first reluctant to act, {4} the scale of the disaster eventually led to the Clean Air Act of 1956, which created zones in which only smokeless fuels could be burned and encouraged the move away from coal fires in homes. The 'Great Smog' is often cited as a turning point in recognising air pollution {5} a serious threat to public health.",
      blanks: [
        [
          "(26) ----",
          ["that", "what", "whose", "where", "whom"],
          "Havayı niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(27) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Sinemaların kapanmasının nedeni seyircinin perdeyi görememesidir: 'because'.",
        ],
        [
          "(28) ----",
          ["but", "so", "or", "unless", "for"],
          "İlk tahmin ile sonraki çalışmaların daha yüksek sayısı zıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["but", "so", "and", "or", "for"],
          "Hükümetin isteksizliği ile yasanın çıkması zıttır: 'but'.",
        ],
        [
          "(30) ----",
          ["as", "than", "so", "for", "with"],
          "'recognise sth as sth' kalıbı: 'as'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although many doctors opposed pasteurisation, ----.",
      [
        "Straus continued his campaign",
        "milk comes from cows",
        "New York is a large city",
        "Macy's was a store",
        "some dealers in the poorer parts of the city added water and chalk to the milk that they sold to customers",
      ],
      "'Although' zıtlık ister: pek çok doktor pastörizasyona karşı çıksa da Straus kampanyasını sürdürdü.",
    ],
    [
      "----, the smoke could not rise or blow away.",
      [
        "Because the air was cold and still",
        "Although London is a large city",
        "Unless coal was burned",
        "Since buses stopped running",
        "While officials were trying to estimate how many people had died during the five days of the fog",
      ],
      "Hava soğuk ve durgun olduğu için duman yükselemedi ya da dağılamadı.",
    ],
    [
      "If children are free of worms, ----.",
      [
        "they may attend school more regularly",
        "Kenya is in East Africa",
        "tablets are cheap",
        "the study was published in 2004",
        "the charity that ran the programme had decided to add schools to it gradually over a period of several years",
      ],
      "Birinci tip koşul: çocuklar solucansız olursa okula daha düzenli devam edebilirler.",
    ],
    [
      "Families were encouraged to share safe wells ----.",
      [
        "because many local wells contained dangerous arsenic",
        "although Bangladesh is crowded",
        "unless the water was cold",
        "so that the wells were painted",
        "while doctors in the cities were treating large numbers of patients with skin lesions and other symptoms",
      ],
      "Aileler pek çok yerel kuyu tehlikeli arsenik içerdiği için güvenli kuyuları paylaşmaya teşvik edildi.",
    ],
    [
      "Not only did the device measure alcohol quickly, ----.",
      [
        "but it was also easy for police to use",
        "and Indiana is in the Midwest",
        "since drivers drink",
        "so the professor taught",
        "unless the driver had already been taken to a hospital where a sample of blood could be tested in a laboratory",
      ],
      "'Not only ... but also' yapısı tamamlanır: cihaz alkolü hızla ölçmekle kalmadı, polisin kullanması da kolaydı.",
    ],
    [
      "Once the waste had been discovered, ----.",
      [
        "hundreds of families were moved away",
        "chemicals are dangerous",
        "the canal was old",
        "Niagara Falls is famous",
        "the company that had buried it had sold the land to the local school board for just one dollar in 1953",
      ],
      "Atıklar keşfedildikten sonra yüzlerce aile başka yere taşındı.",
    ],
    [
      "Sweden lowered speed limits in some urban areas ----.",
      [
        "because pedestrians are more likely to survive at lower speeds",
        "although cars are safe",
        "unless roads were wide",
        "so that Stockholm is a capital",
        "while many drivers complained that the new rules would make their journeys to work much longer than before",
      ],
      "İsveç yayaların düşük hızlarda hayatta kalma olasılığı daha yüksek olduğu için bazı kentsel alanlarda hız sınırlarını düşürdü.",
    ],
    [
      "Since young children in rural Bangladesh often play near ponds while their parents work, ----.",
      [
        "drowning is a leading cause of child death",
        "Bangladesh has many rivers",
        "rice is grown in fields",
        "ponds are full of fish",
        "the government and several charities have also started teaching older children how to swim in safe conditions",
      ],
      "'Since' neden bildirir: kırsal Bangladeş'te küçük çocuklar ebeveynleri çalışırken sık sık havuzların yakınında oynadığı için boğulma başlıca çocuk ölüm nedenlerindendir.",
    ],
    [
      "Unless mothers had visited a clinic before giving birth, ----.",
      [
        "they could not receive the box",
        "Finland is cold",
        "babies sleep a lot",
        "boxes are made of cardboard",
        "the government would have needed to find another way of encouraging parents to take their children to school",
      ],
      "'Unless' olumsuz koşul: anneler doğumdan önce bir kliniği ziyaret etmeselerdi kutuyu alamazlardı.",
    ],
    [
      "The tax on sugary drinks was introduced ----.",
      [
        "to reduce consumption and obesity",
        "although Mexico is large",
        "unless prices fell",
        "because sugar is sweet",
        "while the companies that produced the drinks were spending large amounts on advertising aimed at young people",
      ],
      "Şekerli içecek vergisi tüketimi ve obeziteyi azaltmak için getirildi.",
    ],
    [
      "Even though the Icelandic programme was not expensive, ----.",
      [
        "it greatly reduced teenage drinking",
        "Iceland is an island",
        "teenagers go to school",
        "parents care about children",
        "researchers had found that young people who spent more time with their families were less likely to drink",
      ],
      "'Even though' zıtlık ister: İzlanda programı pahalı olmasa da gençlerde alkol kullanımını büyük ölçüde azalttı.",
    ],
  ],
  enTr: [
    [
      "Heating milk to kill bacteria saved the lives of many infants.",
      [
        "Bakterileri öldürmek için sütün ısıtılması pek çok bebeğin hayatını kurtardı.",
        "Sütün ısıtılması bakterileri çoğaltarak pek çok bebeğin ölümüne neden oldu.",
        "Pek çok bebeğin hayatını kurtaran süt, bakterilerin çoğalmasını önlemek için ısıtılmadan önce soğuk bir yerde uzun süre saklanmak zorundaydı.",
        "Bebekler, ısıtılmış sütü içmeyi reddetti.",
        "Süt, bebeklere hiç verilmedi.",
      ],
      "'Heating milk to kill bacteria' 'bakterileri öldürmek için sütün ısıtılması', 'saved the lives of many infants' 'pek çok bebeğin hayatını kurtardı' karşılığıdır.",
    ],
    [
      "The smog was so dense that people could barely see a few steps ahead.",
      [
        "Duman sisi o kadar yoğundu ki insanlar birkaç adım ötesini zor görüyordu.",
        "Duman sisi o kadar azdı ki insanlar çok uzakları görebiliyordu.",
        "Birkaç adım ötesini göremeyen insanlar, yoğun duman sisi nedeniyle evlerinden çıkmadı ve kentteki tüm işyerleri birkaç hafta boyunca kapalı kaldı.",
        "İnsanlar birkaç adım ötesini görmek için ışık kullandı.",
        "Görüş mesafesi hiç değişmedi.",
      ],
      "'The smog was so dense' 'duman sisi o kadar yoğundu', 'that people could barely see a few steps ahead' 'ki insanlar birkaç adım ötesini zor görüyordu' karşılığıdır.",
    ],
    [
      "Treatment reduced absence from school by about a quarter.",
      [
        "Tedavi okul devamsızlığını yaklaşık dörtte bir oranında azalttı.",
        "Tedavi okul devamsızlığını yaklaşık dört kat artırdı.",
        "Okula devam etmeyen çocukların yaklaşık dörtte biri tedavi programına katılmayı reddettiği için araştırmacılar sonuçları değerlendirmekte zorlandı.",
        "Tedavi yalnızca okula hiç gitmeyen çocuklara verildi.",
        "Okul devamsızlığı tedaviyle ilgili değildi.",
      ],
      "'Treatment reduced absence from school' 'tedavi okul devamsızlığını azalttı', 'by about a quarter' 'yaklaşık dörtte bir oranında' karşılığıdır.",
    ],
    [
      "The device made it possible to test drivers at the roadside.",
      [
        "Cihaz, sürücülerin yol kenarında test edilmesini mümkün kıldı.",
        "Cihaz, sürücülerin yol kenarında durmasını yasakladı.",
        "Yol kenarında test edilen sürücüler, cihazın sonuçlarına itiraz ederek hastanede kan testi yapılmasını talep etme hakkına her zaman sahip olmuştur.",
        "Sürücüler, cihazı arabalarında taşımak zorundaydı.",
        "Cihaz, yalnızca hastanelerde kullanılabiliyordu.",
      ],
      "'made it possible to test drivers' 'sürücülerin test edilmesini mümkün kıldı', 'at the roadside' 'yol kenarında' karşılığıdır.",
    ],
    [
      "Chemicals from the buried drums had leaked into basements and gardens.",
      [
        "Gömülü varillerdeki kimyasallar bodrumlara ve bahçelere sızmıştı.",
        "Bodrumlardaki ve bahçelerdeki kimyasallar varillere konularak gömüldü.",
        "Bahçelerine kimyasal sızdığını fark eden sakinler, varilleri kendi imkânlarıyla kazıp çıkararak başka bir bölgeye taşıdı ve sorunu tamamen çözdü.",
        "Variller bodrumlarda saklanıyordu.",
        "Kimyasallar hiçbir zaman sızmadı.",
      ],
      "'Chemicals from the buried drums' 'gömülü varillerdeki kimyasallar', 'had leaked into basements and gardens' 'bodrumlara ve bahçelere sızmıştı' karşılığıdır.",
    ],
    [
      "The policy holds that no loss of life on the roads is acceptable.",
      [
        "Politika, yollarda hiçbir can kaybının kabul edilemeyeceğini savunur.",
        "Politika, yollarda bazı can kayıplarının kaçınılmaz olduğunu kabul eder.",
        "Yollardaki can kayıplarını kabul edilemez bulan sürücüler, politikaya karşı çıkarak hız sınırlarının yükseltilmesini ve yolların genişletilmesini talep etti.",
        "Politika, yolların kapatılmasını önerir.",
        "Yollarda can kaybı hiç yaşanmamıştır.",
      ],
      "'holds that' 'savunur', 'no loss of life on the roads is acceptable' 'yollarda hiçbir can kaybının kabul edilemeyeceğini' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "İstasyonlardaki hemşireler annelere bebeklerine nasıl bakacaklarını öğretti.",
      [
        "Nurses at the stations taught mothers how to care for their babies.",
        "Mothers at the stations taught nurses how to care for babies.",
        "Nurses at the stations were not allowed to give advice to mothers, because many doctors believed that only trained physicians should do so.",
        "Babies were cared for by the stations without their mothers.",
        "Nurses refused to work at the stations.",
      ],
      "'İstasyonlardaki hemşireler' 'nurses at the stations', 'annelere bebeklerine nasıl bakacaklarını öğretti' 'taught mothers how to care for their babies' karşılığıdır.",
    ],
    [
      "Yasa, yalnızca dumansız yakıtların yakılabileceği bölgeler oluşturdu.",
      [
        "The law created zones in which only smokeless fuels could be burned.",
        "The law allowed all fuels to be burned in every zone.",
        "The law encouraged people to burn more coal in their homes so that factories could use smokeless fuels without increasing their costs.",
        "Smokeless fuels were banned by the law.",
        "The law closed all factories.",
      ],
      "'yalnızca dumansız yakıtların yakılabileceği bölgeler' 'zones in which only smokeless fuels could be burned', 'oluşturdu' 'created' karşılığıdır.",
    ],
    [
      "Yeraltı suyu, uluslararası güvenlik sınırlarının çok üzerinde arsenik içeriyordu.",
      [
        "The groundwater contained arsenic far above international safety limits.",
        "The groundwater contained no arsenic at all.",
        "The groundwater was found to be completely safe after it had been tested by international experts, who recommended that more tube wells should be installed.",
        "International safety limits were set by the villagers.",
        "Arsenic was added to the groundwater deliberately.",
      ],
      "'uluslararası güvenlik sınırlarının çok üzerinde' 'far above international safety limits', 'yeraltı suyu arsenik içeriyordu' 'the groundwater contained arsenic' karşılığıdır.",
    ],
    [
      "Tedavi edilen çocuklar yetişkinliklerinde daha fazla kazanıyor gibi görünüyordu.",
      [
        "The children who had been treated appeared to earn more as adults.",
        "The adults who had been treated earned less than their children.",
        "The children who had been treated were followed for only a few months, so researchers could not say anything about how much they would earn as adults.",
        "Treated children were paid to attend school.",
        "Adults refused to take the tablets.",
      ],
      "'Tedavi edilen çocuklar' 'the children who had been treated', 'yetişkinliklerinde daha fazla kazanıyor gibi görünüyordu' 'appeared to earn more as adults' karşılığıdır.",
    ],
    [
      "Cihaz, 1954'te ilk kez polis tarafından kullanıldı.",
      [
        "The device was first used by police in 1954.",
        "Police stopped using the device in 1954.",
        "Police had been using a similar device for many years before 1954, when a university professor produced a cheaper and more accurate version.",
        "The device was invented by police.",
        "Police refused to use the device.",
      ],
      "'1954'te ilk kez' 'first ... in 1954', 'polis tarafından kullanıldı' 'was used by police' karşılığıdır.",
    ],
    [
      "Bölge sakinleri, çocuklarındaki sağlık sorunları nedeniyle kampanya başlattı.",
      [
        "Local residents started a campaign because of health problems in their children.",
        "Children started a campaign against local residents.",
        "Local residents were unaware of any health problems among their children until a newspaper published the results of a study carried out many years later.",
        "The campaign caused health problems.",
        "Residents moved away before any campaign began.",
      ],
      "'çocuklarındaki sağlık sorunları nedeniyle' 'because of health problems in their children', 'bölge sakinleri kampanya başlattı' 'local residents started a campaign' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1970s, many people in rural Bangladesh obtained drinking water from ponds and rivers that were contaminated with bacteria, and diarrhoeal diseases killed large numbers of children. To provide safer water, UNICEF and the government encouraged the installation of tube wells, narrow pipes sunk into the ground that drew water from underground layers. Millions were installed, often paid for by families themselves, and child deaths from diarrhoea fell. In the early 1990s, however, doctors began to see patients with dark spots and hard patches on their skin, signs of long-term arsenic poisoning. Tests revealed that the groundwater in many parts of the country contained naturally occurring arsenic, a poisonous element, at levels far above international safety limits. The wells had never been tested for it, because arsenic had not been considered a likely problem. By the late 1990s, tens of millions of people were thought to be drinking contaminated water, which can cause skin lesions, several types of cancer and heart disease over many years. A World Health Organization report described it as the largest mass poisoning of a population in history. Since then, millions of wells have been tested and painted red if unsafe or green if safe, and people have been encouraged to share safe wells and to drill deeper wells that reach cleaner water. Progress has been slow, however, and many people are still exposed.",
      questions: [
        [
          "According to the passage, tube wells were originally installed in order to ----.",
          [
            "provide water free of harmful bacteria",
            "remove arsenic from the soil",
            "supply water for farming",
            "allow doctors to test the groundwater for chemicals in every village of the country",
            "replace deep wells",
          ],
          "Metne göre amaç bakterilerle kirlenmiş yüzey suları yerine daha güvenli su sağlamaktı.",
        ],
        [
          "It can be understood from the passage that the arsenic problem went unnoticed at first because ----.",
          [
            "no one had expected arsenic and the water was not tested",
            "arsenic has a strong smell",
            "the wells were very deep",
            "the government kept the test results secret for many years in order to avoid panic",
            "symptoms appeared immediately",
          ],
          "Arseniğin olası bir sorun olduğu düşünülmediği için kuyular hiç test edilmemişti.",
        ],
        [
          "Painting wells red or green was intended to ----.",
          [
            "show people which water was safe to drink",
            "decorate villages",
            "mark wells for closure",
            "indicate which families had paid for the installation of each well in the village",
            "show the depth of the wells",
          ],
          "Güvensiz kuyular kırmızı, güvenli olanlar yeşile boyanarak hangi suyun içilebileceği gösterildi.",
        ],
      ],
    },
    {
      text:
        "Intestinal worms, such as hookworm, roundworm and whipworm, infect hundreds of millions of children in poor countries. They are spread through soil contaminated with human faeces and can cause anaemia, poor nutrition and tiredness. Treatment is simple and cheap: a single tablet, taken once or twice a year, kills most worms. In 1998, a charity began treating children in schools in the Busia district of western Kenya, and the economists Edward Miguel and Michael Kremer took advantage of the way the programme was introduced to study its effects. Because the schools were added to the programme in stages, they could compare schools that had received treatment with those that had not yet done so. In a study published in 2004, they reported that treatment reduced absence from school by about a quarter. They also found benefits for untreated children in treated schools and nearby schools, because fewer worms were being spread in the area. Follow-up studies years later suggested that people who had been treated as children were earning more as adults. These findings helped to persuade several governments to introduce mass school-based deworming. Other researchers, however, have questioned how strong the evidence is, and large reviews of many trials have found smaller effects on health and education, leading to a lively debate among economists and health experts.",
      questions: [
        [
          "According to the passage, the researchers were able to compare schools because ----.",
          [
            "the programme reached schools at different times",
            "some schools refused treatment",
            "the charity paid them",
            "the government had asked them to choose which schools should receive the tablets first",
            "all schools were treated at once",
          ],
          "Metne göre okullar programa aşamalı olarak eklendi; tedavi alan ve henüz almayanlar karşılaştırılabildi.",
        ],
        [
          "The benefit for untreated children is explained by the fact that ----.",
          [
            "infection was spreading less in their area",
            "they also took tablets secretly",
            "they attended different schools",
            "their parents had been treated in a separate programme run by local hospitals",
            "worms do not infect children",
          ],
          "Bölgede daha az solucan yayıldığı için tedavi edilmeyen çocuklar da yararlandı.",
        ],
        [
          "It can be understood from the passage that the effects of deworming ----.",
          [
            "remain a subject of disagreement",
            "have been proved beyond doubt",
            "are always harmful",
            "were found to be much larger in reviews of many trials than in the original study from Kenya",
            "have never been studied",
          ],
          "Büyük derlemeler daha küçük etkiler buldu ve uzmanlar arasında canlı bir tartışma sürüyor.",
        ],
      ],
    },
    {
      text:
        "By the 1930s, police and scientists knew that drunk drivers were a major cause of road accidents, but measuring a driver's level of intoxication was difficult. Blood tests were accurate but had to be carried out by doctors in a laboratory, and by the time samples were taken, the level of alcohol might already have fallen. Early devices that analysed breath were bulky and difficult to use. Robert Borkenstein, a police officer in Indiana who later became a professor at Indiana University, developed a more practical device in 1954. Called the Breathalyzer, it was based on the principle that the concentration of alcohol in a person's breath reflects the concentration in the blood. The driver blew into a tube, and the breath passed through a solution of chemicals that changed colour in proportion to the amount of alcohol present; the change was measured to estimate the blood alcohol level. The device was portable, fast and simple to operate, so police officers could use it at the roadside or at the police station. Borkenstein also led a major study in the early 1960s, which compared thousands of drivers involved in accidents with drivers who were not, and showed that the risk of a crash increased sharply as blood alcohol levels rose. This research helped many countries to set legal limits for drinking and driving.",
      questions: [
        [
          "According to the passage, one problem with blood tests was that ----.",
          [
            "alcohol levels might fall before samples were taken",
            "they were inaccurate",
            "drivers refused them",
            "the police were not allowed to ask doctors to take samples from drivers who had been in accidents",
            "they were too cheap",
          ],
          "Metne göre örnekler alınana kadar alkol düzeyi düşmüş olabilirdi.",
        ],
        [
          "The Breathalyzer worked by ----.",
          [
            "measuring a colour change caused by alcohol",
            "weighing the driver",
            "testing a blood sample",
            "recording how quickly the driver could walk along a straight line drawn on the floor",
            "measuring the driver's temperature",
          ],
          "Nefes alkol miktarıyla orantılı renk değiştiren bir çözeltiden geçiyordu.",
        ],
        [
          "It can be inferred from the passage that Borkenstein's study ----.",
          [
            "provided evidence for setting legal alcohol limits",
            "showed that alcohol did not affect driving",
            "was carried out in a laboratory",
            "was designed to test whether the Breathalyzer was more accurate than the blood tests used in hospitals",
            "involved only a few drivers",
          ],
          "Araştırma pek çok ülkenin yasal sınırlar belirlemesine yardım etti.",
        ],
      ],
    },
    {
      text:
        "In the 1890s, a developer named William Love began digging a canal near Niagara Falls in New York State, but the project was abandoned and left an unfinished trench. In the 1940s and early 1950s, the Hooker Chemical Company used the site to dispose of more than twenty thousand tonnes of chemical waste in metal drums, then covered it with soil. In 1953, the company sold the land to the local school board for one dollar, with a warning about the chemicals in the deed. A school and hundreds of homes were built on and around the site. Over the following decades, residents noticed strange odours, and chemicals began to appear in basements and gardens, especially after heavy rains; children playing outside sometimes suffered burns. In 1978, a local mother, Lois Gibbs, whose son had developed health problems after starting at the school, organised her neighbours and campaigned for action. Surveys by residents suggested high rates of miscarriages and birth defects, although later official studies produced mixed results. That year, the state declared an emergency and moved hundreds of families away, and in 1980 President Carter declared a federal emergency. The disaster led directly to a federal law, often called Superfund, which made companies responsible for paying to clean up hazardous waste sites they had created.",
      questions: [
        [
          "According to the passage, the site was originally ----.",
          [
            "part of an abandoned canal project",
            "a school playground",
            "a chemical factory",
            "a large farm where crops were grown before the company bought the land in the 1940s",
            "a park",
          ],
          "Metne göre terk edilmiş bir kanal projesinin yarım kalmış hendeğiydi.",
        ],
        [
          "It can be understood from the passage that Lois Gibbs ----.",
          [
            "mobilised local residents",
            "worked for the chemical company",
            "built the school",
            "was a scientist who carried out the official studies of birth defects among the residents",
            "sold the land",
          ],
          "Komşularını örgütleyip harekete geçmeleri için kampanya yürüttü.",
        ],
        [
          "The passage suggests that the Superfund law ----.",
          [
            "placed the cost of cleaning sites on those responsible",
            "banned all chemical companies",
            "paid residents compensation directly",
            "was passed before the families were moved away from the area in 1978",
            "applied only to New York",
          ],
          "Şirketleri yarattıkları tehlikeli atık sahalarının temizliğini ödemekle yükümlü kıldı.",
        ],
      ],
    },
    {
      text:
        "In 1997, the Swedish parliament adopted a road safety policy called Vision Zero, based on the principle that no one should be killed or seriously injured on the roads. Traditional road safety policies had focused mainly on changing the behaviour of individual drivers through education and enforcement, and had implicitly accepted a certain number of deaths as the price of mobility. Vision Zero took a different approach. It accepted that people will always make mistakes and argued that the road system should be designed so that these mistakes do not lead to death or serious injury. Responsibility was therefore shared between road users and those who design and manage roads and vehicles. In practice, this meant changes such as replacing junctions with roundabouts, which reduce the speed and angle of collisions, separating opposing lanes of traffic on rural roads with cables, building more pedestrian crossings and cycle paths, and lowering speed limits in areas where people and vehicles mix, since a pedestrian struck by a car at fifty kilometres per hour is far more likely to die than one struck at thirty. Sweden's road death rate fell substantially over the following two decades and is now among the lowest in the world. Many cities and countries, including New York, London and Norway, have since adopted versions of Vision Zero.",
      questions: [
        [
          "According to the passage, traditional road safety policies ----.",
          [
            "concentrated on changing drivers' behaviour",
            "focused on road design",
            "aimed for zero deaths",
            "were based on the idea that people never make mistakes when they are driving on familiar roads",
            "were introduced in 1997",
          ],
          "Metne göre esas olarak eğitim ve denetim yoluyla bireysel sürücü davranışını değiştirmeye odaklanıyordu.",
        ],
        [
          "Roundabouts are mentioned as an example of a design that ----.",
          [
            "makes collisions less severe",
            "increases speed",
            "is used only in cities",
            "allows drivers to travel faster and reach their destinations more quickly than before",
            "separates lanes with cables",
          ],
          "Çarpışmaların hızını ve açısını azaltarak daha az ciddi hale getirir.",
        ],
        [
          "It can be inferred from the passage that Vision Zero assumes that ----.",
          [
            "human error cannot be completely eliminated",
            "drivers are always responsible",
            "speed limits are unnecessary",
            "accidents can be prevented entirely by teaching children about road safety at school",
            "deaths are acceptable",
          ],
          "İnsanların her zaman hata yapacağını kabul eder.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Since 1938, every expectant mother in Finland has been offered a cardboard box containing baby clothes, nappies and other essentials, which can also serve as the baby's first bed. ---- The scheme is often credited with helping Finland to achieve one of the lowest infant death rates in the world.",
      [
        "To receive it, mothers must visit a health clinic before the fourth month of pregnancy.",
        "Finland has long, cold winters.",
        "Many babies sleep a lot.",
        "Originally, the box was available only to families with low incomes, but since 1949 it has been offered to all mothers regardless of how much they earn.",
        "Cardboard can be recycled.",
      ],
      "Boşluk kutunun alınma koşulunu açıklayan bir cümle gerektirir; boşluğa annelerin hamileliğin dördüncü ayından önce kliniğe gitmesi gerektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the late 1990s, Icelandic teenagers had some of the highest rates of drinking and smoking in Europe. ---- Within twenty years, the proportion of fifteen- and sixteen-year-olds who had been drunk in the previous month fell from about forty-two per cent to around five per cent.",
      [
        "The country responded by funding sports, music and arts activities for young people and introducing an evening curfew for children.",
        "Iceland has a small population.",
        "Many teenagers enjoy music.",
        "Researchers had surveyed thousands of young people every year and had found that those who spent more time with their parents were much less likely to drink alcohol.",
        "Winters in Iceland are dark.",
      ],
      "Boşluktan sonra yirmi yıl içindeki düşüş anlatılır; boşluğa ülkenin gençler için spor, müzik ve sanat etkinliklerini destekleyip sokağa çıkma saati getirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In January 2014, Mexico, which had one of the highest rates of obesity in the world, introduced a tax of one peso per litre on sugar-sweetened drinks. ---- Similar taxes have since been introduced in more than fifty countries.",
      [
        "Studies found that purchases of taxed drinks fell, particularly among low-income households.",
        "Mexico is famous for its food.",
        "Many people drink water.",
        "The tax was strongly opposed by the drinks industry, which argued that it would harm small shops and that obesity was caused mainly by a lack of exercise rather than by sugar.",
        "Sugar is produced from sugar cane.",
      ],
      "Boşluk verginin sonucunu anlatan bir cümle gerektirir; boşluğa vergilendirilen içecek alımlarının özellikle düşük gelirli hanelerde azaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In rural Bangladesh, drowning kills more children aged one to four than almost any other cause, who often wander into ponds and ditches while their parents work. ---- Studies showed that the scheme greatly reduced drowning deaths among the children who attended.",
      [
        "Health organisations therefore set up village day-care centres where young children could be supervised during the day.",
        "Bangladesh has many rivers.",
        "Children enjoy playing outside.",
        "Older children in the same programme were taught to swim in safe areas of water that had been fenced off and supervised by trained adults from their own villages.",
        "Ponds are used for fishing.",
      ],
      "Boşluktan sonra 'the scheme' ifadesi gelir; boşluğa küçük çocukların gün boyunca gözetildiği köy kreşlerinin kurulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 2003, the British government began working with food manufacturers to reduce the amount of salt in processed foods such as bread, soups and breakfast cereals. ---- By 2011, the average amount of salt people ate had dropped by around fifteen per cent, which researchers linked to reductions in blood pressure and deaths from heart disease and stroke.",
      [
        "Rather than introducing a law, it set voluntary targets for gradual reductions that consumers would hardly notice.",
        "Many foods contain salt.",
        "Bread is eaten every day.",
        "Most of the salt that people consumed came not from the salt they added at the table but from foods that they bought ready-made from shops and supermarkets.",
        "Salt is mined in many countries.",
      ],
      "Boşluk girişimin yöntemini açıklayan bir cümle gerektirir; boşluğa yasa yerine tüketicilerin fark etmeyeceği kademeli gönüllü hedefler konduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 2008, a group of public and private organisations launched Global Handwashing Day, held every year on 15 October. ---- Washing hands with soap is estimated to reduce diarrhoeal diseases by around a third and respiratory infections by about a fifth.",
      [
        "The day promotes washing hands with soap as an easy, cheap and effective way to prevent disease.",
        "October is in autumn.",
        "Soap is made from oil.",
        "Events are organised in schools in many countries, where children learn songs and games about hygiene and sometimes take part in competitions to design posters.",
        "Many people wash their hands.",
      ],
      "Boşluktan sonra sabunla el yıkamanın faydaları anlatılır; boşluğa günün sabunla el yıkamayı kolay, ucuz ve etkili bir yöntem olarak tanıttığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The striped pedestrian crossing, often called a zebra crossing, was introduced in Britain in 1951.",
        "Drivers are required to stop for pedestrians who are waiting to cross.",
        "Zebras live in the grasslands of Africa.",
        "Flashing yellow globes on poles make the crossings visible at night.",
        "Studies show that marked crossings reduce pedestrian injuries in many settings.",
      ],
      odd: 2,
      why: "Parça yaya geçitlerini anlatır. Zebraların Afrika otlaklarında yaşadığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1859, a free public drinking fountain was opened in London.",
        "It was intended to give poor people access to clean water instead of beer or polluted water.",
        "Beer was brewed in many London pubs.",
        "The fountain was used by thousands of people a day.",
        "Hundreds more fountains were built across the country in the following decades.",
      ],
      odd: 2,
      why: "Parça Londra'daki ücretsiz içme çeşmelerini anlatır. Bira'nın pek çok Londra birahanesinde üretildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2009, a group in Stockholm turned a staircase next to an escalator into a giant working piano keyboard.",
        "Each step played a note when someone stepped on it.",
        "Stockholm is built on fourteen islands.",
        "On the day of the experiment, far more people chose the stairs than usual.",
        "The project is often cited as an example of making healthy behaviour fun.",
      ],
      odd: 2,
      why: "Parça merdivenleri piyanoya dönüştüren deneyi anlatır. Stockholm'ün on dört ada üzerine kurulduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The British epidemiologist Geoffrey Rose described what is known as the prevention paradox.",
        "He argued that a measure that brings large benefits to a population may offer little to each individual.",
        "Epidemiology is taught in medical schools.",
        "For example, most heart attacks occur among people at only moderate risk, simply because there are so many of them.",
        "Small changes across the whole population can therefore prevent more cases than targeting only high-risk individuals.",
      ],
      odd: 2,
      why: "Parça Rose'un önleme paradoksunu anlatır. Epidemiyolojinin tıp fakültelerinde öğretildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1906, the British government allowed local councils to provide free school meals to poor children.",
        "Many children had been too hungry to concentrate on their lessons.",
        "The measure followed reports that many young men volunteering for the army were unfit to serve.",
        "The army needed horses as well as soldiers.",
        "School meals are now provided in many countries around the world.",
      ],
      odd: 3,
      why: "Parça okul yemeklerinin başlangıcını anlatır. Ordunun asker kadar ata da ihtiyaç duyduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some regions of the world have unusually high numbers of people who live past one hundred.",
        "Coffee is grown in Costa Rica.",
        "Researchers have studied the diets and lifestyles of people in these places.",
        "They found that many share features such as regular physical activity, strong social ties and a mainly plant-based diet.",
        "Some scientists warn, however, that birth records in some areas may be unreliable.",
      ],
      odd: 1,
      why: "Parça uzun yaşayan toplulukları anlatır. Kosta Rika'da kahve yetiştirildiğini söyleyen II. cümle konu dışıdır.",
    },
  ],
};
