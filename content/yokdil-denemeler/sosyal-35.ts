import type { YokdilDeneme } from "./types";

export const SOSYAL_35: YokdilDeneme = {
  no: 35,
  field: "sosyal",
  vocab: [
    [
      "The new suburb was built so quickly that whole streets of houses appeared in a matter of ----.",
      ["weeks", "centuries", "miles", "rooms", "votes"],
      "Yeni banliyönün o kadar hızlı inşa edildiği ki bütün sokakların birkaç 'hafta' (weeks) içinde ortaya çıktığı anlatılır.",
    ],
    [
      "The old railway line had been ---- for decades before it was turned into a park.",
      ["abandoned", "crowded", "invented", "painted", "elected"],
      "Eski demiryolu hattının parka dönüştürülmeden önce onlarca yıl 'terk edilmiş' (abandoned) olduğu anlatılır.",
    ],
    [
      "The city council decided to ---- cars from the main square on Sundays.",
      ["ban", "invite", "repair", "sell", "count"],
      "Belediye meclisinin pazar günleri arabaları ana meydandan 'yasaklamaya' (ban) karar verdiği anlatılır.",
    ],
    [
      "Rents rose sharply after the museum opened, and many long-term ---- were forced to move away.",
      ["residents", "tourists", "architects", "visitors", "investors"],
      "Müze açıldıktan sonra kiraların hızla yükseldiği ve uzun süredir orada oturan pek çok 'sakinin' (residents) taşınmak zorunda kaldığı anlatılır.",
    ],
    [
      "The planners wanted every apartment to receive ---- sunlight and fresh air.",
      ["adequate", "artificial", "dangerous", "expensive", "occasional"],
      "Planlamacıların her dairenin 'yeterli' (adequate) güneş ışığı ve temiz hava almasını istediği anlatılır.",
    ],
    [
      "When the factories closed, the town's population began to ----.",
      ["dwindle away", "show off", "take over", "bring up", "put on"],
      "Fabrikalar kapandığında kasabanın nüfusunun 'giderek azalmaya' (dwindle away) başladığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The streets of Miletus ---- in a regular grid after the city was rebuilt in the fifth century BC.",
      ["were laid out", "laid out", "have laid out", "are laying out", "will be laid out"],
      "Sokaklar plancılar tarafından düzenlenmiştir; geçmiş zaman edilgen yapı: 'were laid out'.",
    ],
    [
      "By the time the last tower was demolished in 1976, the estate ---- a symbol of failed planning.",
      ["had become", "becomes", "will become", "is becoming", "has been become"],
      "Geçmişteki bir andan önce tamamlanmış durum: 'had become'.",
    ],
    [
      "If the city had built a metro system, it ---- far more money.",
      ["would have spent", "will spend", "spends", "had spent", "is spending"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would have spent'.",
    ],
    [
      "Cerdà designed blocks with cut corners ---- carriages could turn more easily.",
      ["so that", "even though", "unless", "whereas", "as if"],
      "Köşelerin kesilmesinin amacı arabaların kolay dönmesidir: 'so that'.",
    ],
    [
      "Families ---- in the new houses were mostly young couples with small children.",
      ["living", "lived", "to live", "live", "have lived"],
      "'Families who were living' yapısının kısaltılmış etken sıfat cümleciği: 'living'.",
    ],
    [
      "---- the museum attracted millions of visitors, critics argued that it benefited mainly tourists.",
      ["Although", "Because", "Unless", "So that", "Once"],
      "Müzenin milyonlarca ziyaretçi çekmesi ile eleştirilmesi zıttır: 'Although'.",
    ],
    [
      "The buses in Curitiba run in lanes ---- other vehicles are not allowed to use.",
      ["that", "where", "whose", "what", "who"],
      "'lanes' sözcüğünü niteleyen ve 'use' fiilinin nesnesi olan ilgi zamiri: 'that'.",
    ],
    [
      "Hardly ---- the new capital been completed when people began to criticise its design.",
      ["had", "did", "was", "has", "would"],
      "'Hardly ... when' devrik yapısında geçmiş mükemmel zaman: 'had'.",
    ],
    [
      "Public housing in Singapore is home to ---- than three-quarters of the population.",
      ["more", "most", "much", "many", "the more"],
      "'more than three-quarters' karşılaştırma yapısı: 'more'.",
    ],
    [
      "The architect insisted that the towers ---- surrounded by open green space.",
      ["be", "are being", "were been", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive) kullanılır: 'be'.",
    ],
    [
      "Many residents wish the old tram lines ---- removed in the 1950s.",
      ["had not been", "were not", "have not been", "would not", "are not"],
      "Geçmişle ilgili pişmanlık bildiren 'wish' yapısı: 'had not been'.",
    ],
    [
      "The idea of the garden suburb spread rapidly, ---- in Britain and the United States.",
      ["particularly", "rarely", "hardly", "nearly", "lately"],
      "Fikrin özellikle İngiltere ve ABD'de yayıldığı anlatılır: 'particularly'.",
    ],
    [
      "The government offered cheap loans to encourage people ---- their own flats.",
      ["to buy", "buying", "buy", "bought", "to be bought"],
      "'encourage somebody to do' yapısı: 'to buy'.",
    ],
    [
      "Neither the planners ---- the residents expected the estate to decline so quickly.",
      ["nor", "or", "and", "but", "yet"],
      "'Neither ... nor' bağlacı: 'nor'.",
    ],
  ],
  cloze: [
    {
      text:
        "Hippodamus of Miletus, a Greek of the fifth century BC, is often described as the father of urban planning. Ancient writers report that he designed cities on a grid, with straight streets crossing at right angles and dividing the land into regular blocks. He was not the first to use such a pattern, {1} grids had appeared in Egypt and in older Greek colonies, but he seems to have been the first to argue that the layout of a city should reflect its social order. According to Aristotle, Hippodamus divided citizens into three classes and land into three types: sacred, public and private. His ideas were applied when his home city of Miletus was rebuilt after its destruction by the Persians, {2} he is also said to have planned the port of Piraeus near Athens. The grid {3} several practical advantages: it was easy to survey, to divide among settlers and to extend. {4}, it ignored the shape of the land, so streets sometimes ran straight up steep hills. The Romans adopted the system for their military camps, and it reappeared {5} centuries later in the cities of the Americas.",
      blanks: [
        [
          "(21) ----",
          ["since", "unless", "although", "so that", "whereas"],
          "İlk kullanan olmamasının nedeni ızgaranın daha önce Mısır'da görülmüş olmasıdır: 'since'.",
        ],
        [
          "(22) ----",
          ["and", "but", "unless", "or", "yet"],
          "Milet'in yeniden inşası ile Pire'yi planlaması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["offered", "removed", "denied", "ignored", "replaced"],
          "Izgaranın birçok pratik avantaj 'sunduğu' anlatılır: 'offered'.",
        ],
        [
          "(24) ----",
          ["On the other hand", "As a result", "For instance", "In addition", "Similarly"],
          "Avantajlardan sonra arazi şeklini hiçe sayması dezavantajı gelir: 'On the other hand'.",
        ],
        [
          "(25) ----",
          ["many", "much", "few", "little", "several of"],
          "'many centuries later' kalıbı: 'many'.",
        ],
      ],
    },
    {
      text:
        "In the middle of the nineteenth century, Barcelona was one of the most crowded cities in Europe, {1} its medieval walls prevented it from growing. When the walls were finally pulled down in 1854, the engineer Ildefons Cerdà was asked to plan the expansion of the city. Before drawing a single street, Cerdà carried out a detailed study of the living conditions of workers, {2} he found that the poor died much younger than the rich. His plan, approved in 1859 and known as the Eixample, or 'extension', covered the plain outside the old city with a grid of identical square blocks. Each block had its corners cut at an angle, creating small open squares at every crossing. Cerdà intended only two or three sides of each block {3} built on, leaving the centre as a garden for residents. {4}, property owners soon filled almost every block completely, and the gardens largely disappeared. Even so, the Eixample remains one of the most admired examples of nineteenth-century planning, and the city has recently begun to reopen some of its inner courtyards {5} public use.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "whereas", "so that"],
          "Kentin kalabalık olmasının nedeni surların büyümesini engellemesidir: 'because'.",
        ],
        [
          "(27) ----",
          ["in which", "which", "whose", "what", "who"],
          "Çalışmanın içinde bulgular elde edilmiştir; edat + ilgi zamiri: 'in which'.",
        ],
        [
          "(28) ----",
          ["to be", "being", "be", "to have", "been"],
          "'intend something to be done' yapısı: 'to be'.",
        ],
        [
          "(29) ----",
          ["However", "Therefore", "Moreover", "Likewise", "Thus"],
          "Cerdà'nın niyeti ile mülk sahiplerinin blokları doldurması zıttır: 'However'.",
        ],
        [
          "(30) ----",
          ["for", "of", "at", "by", "with"],
          "'for public use' kalıbı: 'for'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although grid plans are easy to survey and extend, ----.",
      [
        "they can be poorly suited to hilly ground",
        "the Romans used them for military camps",
        "many American cities were planned this way",
        "Hippodamus came from the city of Miletus",
        "streets were usually paved with stone",
      ],
      "'Although' zıtlık ister: ızgara planlar kolayca ölçülüp genişletilse de engebeli araziye pek uygun olmayabilir.",
    ],
    [
      "The houses in the new suburb were built from identical parts ----.",
      [
        "so that they could be put up quickly and cheaply",
        "although the land had once been farmland",
        "unless the buyers were returning soldiers",
        "because the town was named after its builder",
        "while the residents had already moved away",
      ],
      "'so that' amaç bildirir: evler hızlı ve ucuz kurulabilsin diye aynı parçalardan yapılmıştır.",
    ],
    [
      "If the estate had been properly maintained, ----.",
      [
        "it might not have been demolished so soon",
        "it is located in the city of St Louis",
        "the architect also designed other towers",
        "many families had lived there for years",
        "the lifts would break down every week",
      ],
      "Üçüncü tip koşul: site düzgün bakılsaydı bu kadar erken yıkılmayabilirdi.",
    ],
    [
      "Instead of building an expensive underground railway, ----.",
      [
        "the city created special lanes for its buses",
        "the population grew rapidly after 1970",
        "many people preferred to live in the centre",
        "the mayor had trained as an architect",
        "parks were planted along the river",
      ],
      "Pahalı metro yerine kentin otobüsleri için özel şeritler oluşturduğu anlatılır.",
    ],
    [
      "----, the museum transformed the international image of the city.",
      [
        "Designed by a famous architect and covered in titanium",
        "Even though the city had a long industrial history",
        "Unless the river had been cleaned in advance",
        "Because few tourists had ever visited it",
        "Whereas the shipyards had already closed",
      ],
      "Ünlü bir mimar tarafından tasarlanıp titanyumla kaplanan müze kentin uluslararası imajını dönüştürdü.",
    ],
    [
      "Most Singaporeans live in public housing, ----.",
      [
        "which they usually own on long leases",
        "who were born in the city itself",
        "where the island was a British colony",
        "although the state builds most flats",
        "unless they move abroad to study",
      ],
      "'which' ile kamu konutlarının genellikle uzun süreli kiralamayla sahiplenildiği eklenir.",
    ],
    [
      "The more the city spread outwards, ----.",
      [
        "the more its residents depended on cars",
        "it was founded by settlers from Europe",
        "if the streets had been made wider",
        "the old centre was built of stone",
        "which roads were the most crowded",
      ],
      "'The more ..., the more ...' paralel yapısı: kent dışa doğru yayıldıkça sakinler arabalara daha çok bağımlı hale geldi.",
    ],
    [
      "Not only were the corners of each block cut off, ----.",
      [
        "but the streets were also unusually wide",
        "and the walls had been pulled down",
        "since the engineer studied the workers",
        "so the plan was approved in 1859",
        "unless the owners filled the blocks",
      ],
      "'Not only ... but also' yapısı tamamlanır: blokların köşeleri kesilmekle kalmamış, sokaklar da alışılmadık genişlikteydi.",
    ],
    [
      "Since the old railway line was too costly to demolish, ----.",
      [
        "local residents proposed turning it into a park",
        "trains carried meat to the factories",
        "it ran above the streets of Manhattan",
        "the last train used it in 1980",
        "many tourists now walk along it",
      ],
      "'Since' neden bildirir: hat yıkılamayacak kadar pahalı olduğu için sakinler onu parka çevirmeyi önerdi.",
    ],
    [
      "While some critics praised the new capital's bold design, ----.",
      [
        "others complained that it was built for cars, not people",
        "it was planned by a team of architects",
        "the government moved there in the 1960s",
        "the city lies on a high plateau",
        "construction began in the late 1950s",
      ],
      "'While' zıtlık bildirir: bazı eleştirmenler tasarımı överken diğerleri kentin insanlar için değil arabalar için yapıldığından yakındı.",
    ],
    [
      "Unless cities provide affordable homes near workplaces, ----.",
      [
        "people will have to travel long distances every day",
        "the first suburbs were built in the 1950s",
        "most planners had studied architecture",
        "the grid had been used since ancient times",
        "public transport was introduced in 1974",
      ],
      "'Unless' olumsuz koşul: kentler iş yerlerine yakın uygun fiyatlı konut sağlamazsa insanlar her gün uzun mesafeler gitmek zorunda kalır.",
    ],
  ],
  enTr: [
    [
      "The grid plan made it easy to divide land fairly among new settlers.",
      [
        "Izgara plan, araziyi yeni yerleşimciler arasında adil biçimde bölmeyi kolaylaştırdı.",
        "Izgara plan, yeni yerleşimcilerin araziyi satın almasını zorlaştırdı.",
        "Yeni yerleşimciler, araziyi ızgara planına göre bölmeyi reddetti.",
        "Arazi, ızgara plan sayesinde yalnızca zenginlere dağıtıldı.",
        "Izgara plan, eski yerleşimcilerin arazilerini korudu.",
      ],
      "'made it easy to divide land fairly' 'araziyi adil biçimde bölmeyi kolaylaştırdı', 'among new settlers' 'yeni yerleşimciler arasında' karşılığıdır.",
    ],
    [
      "Thousands of young families moved to the suburbs in search of space and affordable homes.",
      [
        "Binlerce genç aile, geniş alan ve uygun fiyatlı ev arayışıyla banliyölere taşındı.",
        "Binlerce genç aile, banliyöleri terk ederek kent merkezine taşındı.",
        "Banliyölerdeki evler, genç aileler için fazla pahalıydı.",
        "Genç aileler, uygun fiyatlı ev bulamadığı için banliyölerde kaldı.",
        "Binlerce aile, banliyölerde yeni evler inşa etti.",
      ],
      "'moved to the suburbs' 'banliyölere taşındı', 'in search of space and affordable homes' 'geniş alan ve uygun fiyatlı ev arayışıyla' karşılığıdır.",
    ],
    [
      "The estate was demolished less than twenty years after it had opened.",
      [
        "Site, açılışından yirmi yıldan kısa bir süre sonra yıkıldı.",
        "Site, yirmi yıldan fazla bir süre boyunca boş kaldı.",
        "Site, yıkılmadan önce yirmi yıl boyunca inşa edildi.",
        "Sitenin yıkılması yirmi yıldan uzun sürdü.",
        "Site, yirmi yıl sonra yeniden açıldı.",
      ],
      "'was demolished' 'yıkıldı', 'less than twenty years after it had opened' 'açılışından yirmi yıldan kısa süre sonra' karşılığıdır.",
    ],
    [
      "Dedicated bus lanes allowed passengers to travel almost as fast as on a metro.",
      [
        "Otobüslere ayrılmış şeritler, yolcuların neredeyse metrodaki kadar hızlı yolculuk etmesini sağladı.",
        "Otobüs şeritleri, metroya göre çok daha yavaş bir yolculuk sunuyordu.",
        "Yolcular, otobüs yerine metroyla yolculuk etmeyi tercih etti.",
        "Otobüslere ayrılmış şeritler, metronun yapımını hızlandırdı.",
        "Metro, otobüs şeritlerinden neredeyse iki kat hızlıydı.",
      ],
      "'Dedicated bus lanes' 'otobüslere ayrılmış şeritler', 'almost as fast as on a metro' 'neredeyse metrodaki kadar hızlı' karşılığıdır.",
    ],
    [
      "A single striking building can sometimes change how the world sees an entire city.",
      [
        "Tek bir çarpıcı bina, bazen dünyanın bütün bir kenti nasıl gördüğünü değiştirebilir.",
        "Bir kentin tamamı, tek bir binanın görünüşünü değiştirebilir.",
        "Çarpıcı binalar, kentlerin dünyadaki yerini nadiren etkiler.",
        "Dünyanın en çarpıcı binaları genellikle küçük kentlerdedir.",
        "Tek bir bina, bir kentin nüfusunu hızla artırabilir.",
      ],
      "'can sometimes change how the world sees an entire city' 'bazen dünyanın bütün bir kenti nasıl gördüğünü değiştirebilir' karşılığıdır.",
    ],
    [
      "Residents who buy their flats from the state are more likely to look after their neighbourhood.",
      [
        "Dairelerini devletten satın alan sakinlerin mahallelerine özen gösterme olasılığı daha yüksektir.",
        "Devlet, mahallesine özen gösteren sakinlere ucuz daire satar.",
        "Dairelerini satın alan sakinler, genellikle mahallelerinden taşınır.",
        "Mahallesine özen gösteren sakinler, dairelerini devlete geri satar.",
        "Devletten daire alan sakinler, mahallelerine daha az ilgi gösterir.",
      ],
      "'Residents who buy their flats from the state' 'dairelerini devletten satın alan sakinler', 'are more likely to look after' 'özen gösterme olasılığı daha yüksektir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kentin ortaçağdan kalma surları, yüzyıllar boyunca büyümesini engelledi.",
      [
        "The city's medieval walls prevented it from growing for centuries.",
        "The city grew for centuries in spite of its medieval walls.",
        "The medieval walls were built to help the city grow.",
        "For centuries, the city tried to protect its medieval walls.",
        "The city's walls were pulled down in the Middle Ages.",
      ],
      "'ortaçağdan kalma surları' 'medieval walls', 'büyümesini engelledi' 'prevented it from growing' karşılığıdır.",
    ],
    [
      "Mühendis, planını çizmeden önce işçilerin yaşam koşullarını ayrıntılı biçimde inceledi.",
      [
        "Before drawing up his plan, the engineer studied workers' living conditions in detail.",
        "The engineer drew up his plan after the workers had improved their living conditions.",
        "The workers studied the engineer's plan in detail before it was approved.",
        "The engineer's plan did not take workers' living conditions into account.",
        "The engineer asked the workers to draw up a detailed plan.",
      ],
      "'planını çizmeden önce' 'before drawing up his plan', 'ayrıntılı biçimde inceledi' 'studied in detail' karşılığıdır.",
    ],
    [
      "Terk edilmiş demiryolu hattı, şimdi her yıl milyonlarca kişinin ziyaret ettiği bir parka dönüştü.",
      [
        "The abandoned railway line has become a park that millions of people visit every year.",
        "Millions of people used the railway line every year before it was abandoned.",
        "The park was abandoned after millions of people visited it.",
        "The railway line was rebuilt so that millions could travel to the park.",
        "Every year, millions of people ask for the old railway to reopen.",
      ],
      "'Terk edilmiş demiryolu hattı' 'the abandoned railway line', 'milyonlarca kişinin ziyaret ettiği bir park' 'a park that millions of people visit' karşılığıdır.",
    ],
    [
      "Pek çok eleştirmen, yeni başkentin yayalar yerine arabalar için tasarlandığını öne sürdü.",
      [
        "Many critics argued that the new capital was designed for cars rather than pedestrians.",
        "Many critics argued that pedestrians and cars were treated equally in the new capital.",
        "The new capital was praised by critics for its wide pavements.",
        "Critics claimed that the old capital had too many cars.",
        "Few critics noticed that the capital had been designed for walkers.",
      ],
      "'yayalar yerine arabalar için' 'for cars rather than pedestrians', 'öne sürdü' 'argued' karşılığıdır.",
    ],
    [
      "Konut sitesinin başarısızlığı, yalnızca mimarisinden değil, bakım eksikliğinden de kaynaklanıyordu.",
      [
        "The failure of the estate resulted not only from its architecture but also from poor maintenance.",
        "The estate's architecture was blamed for the failure of its maintenance staff.",
        "Poor maintenance had nothing to do with the failure of the estate.",
        "The estate failed because its architect refused to maintain it.",
        "The architecture of the estate was successful despite poor maintenance.",
      ],
      "'yalnızca ... değil, ... de' 'not only ... but also', 'bakım eksikliği' 'poor maintenance' karşılığıdır.",
    ],
    [
      "Müzenin açılmasından sonra kente gelen turist sayısı birkaç yıl içinde ikiye katlandı.",
      [
        "After the museum opened, the number of tourists visiting the city doubled within a few years.",
        "The number of museums in the city doubled after tourists began to visit.",
        "Within a few years, the museum had to close because of too many tourists.",
        "Tourists visited the city twice before the museum opened.",
        "The museum opened a few years after tourist numbers had doubled.",
      ],
      "'turist sayısı' 'the number of tourists', 'birkaç yıl içinde ikiye katlandı' 'doubled within a few years' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "After the Second World War, millions of American soldiers returned home, married and started families, but there was a severe shortage of housing. The builder William Levitt saw an opportunity. On former potato fields on Long Island, New York, his company began building a new community in 1947 using methods borrowed from the factory. Instead of moving workers along an assembly line, Levitt moved teams of specialists from one plot to the next, each performing a single task such as laying foundations, fitting windows or painting. At the peak of construction, the company completed around thirty houses a day. The homes were small and nearly identical, but they were cheap, came with modern kitchens, and could be bought with government-backed loans that required little or no deposit. Levittown, as the community came to be called, eventually contained more than 17,000 houses and became a model for suburbs across the country. Its history also has a darker side: for many years, contracts prohibited the sale of houses to Black families, a policy that reflected and deepened racial segregation in American housing.",
      questions: [
        [
          "According to the passage, Levitt's building method involved ----.",
          [
            "teams each doing one job on house after house",
            "moving finished houses along a factory line",
            "employing soldiers to build their own homes",
            "designing a different plan for every house",
            "importing ready-made houses from Europe",
          ],
          "Metne göre her biri tek bir işi yapan uzman ekipler bir arsadan diğerine geçiyordu.",
        ],
        [
          "It can be understood from the passage that the houses were popular mainly because ----.",
          [
            "they were affordable and easy to finance",
            "each one had a unique design",
            "they were built in the city centre",
            "they were larger than other homes",
            "the land was used for farming",
          ],
          "Evler ucuzdu ve çok az peşinat isteyen devlet destekli kredilerle alınabiliyordu.",
        ],
        [
          "The writer mentions the 'darker side' of Levittown in order to ----.",
          [
            "point out its role in racial exclusion",
            "explain why the houses were so cheap",
            "describe the problems of potato farming",
            "show that Levitt lost money on the project",
            "suggest that the houses were badly built",
          ],
          "Yazar, sözleşmelerin siyah ailelere satışı yasaklamasıyla ırk ayrımcılığındaki rolüne dikkat çeker.",
        ],
      ],
    },
    {
      text:
        "The Pruitt–Igoe housing project in St Louis, Missouri, opened in 1954 and consisted of thirty-three eleven-storey towers designed by Minoru Yamasaki, who later designed the World Trade Center in New York. It was intended to replace crowded slums with clean, modern apartments surrounded by open space, and it was initially praised by architectural critics. Within a few years, however, the complex had begun to decline. The lifts stopped only on certain floors to save money, and the long corridors and stairwells became places where crime flourished. The city's population was falling and many middle-class families were moving to the suburbs, so the authority that ran the estate collected less rent than expected and could not afford proper maintenance. Broken windows, failed heating and vandalism drove many tenants away, and by the late 1960s large parts of the complex were empty. Demolition began in 1972, and the images of the towers collapsing were later described by the critic Charles Jencks as marking 'the day modern architecture died'. More recent historians, though, argue that the project failed less because of its design than because of poverty, racial segregation and the lack of money for upkeep.",
      questions: [
        [
          "According to the passage, the authority could not maintain the estate properly because ----.",
          [
            "it received less rental income than it had planned",
            "the towers had been designed by a famous architect",
            "the residents refused to use the lifts",
            "the critics had praised the buildings",
            "the slums nearby had been cleared",
          ],
          "Metne göre işletme beklenenden az kira topladığı için düzgün bakım yapamıyordu.",
        ],
        [
          "The lifts are mentioned as an example of ----.",
          [
            "a cost-cutting choice that caused problems",
            "the most modern feature of the towers",
            "a design copied from the World Trade Center",
            "a facility that tenants paid extra to use",
            "a reason why critics praised the project",
          ],
          "Para tasarrufu için yalnızca belirli katlarda duran asansörler sorunlara yol açan bir tasarruf örneğidir.",
        ],
        [
          "It can be inferred from the passage that recent historians ----.",
          [
            "see the architecture as only part of the explanation",
            "agree completely with the view of Charles Jencks",
            "believe the estate should never have been demolished",
            "think the towers were too small for families",
            "blame the tenants alone for the estate's decline",
          ],
          "Yakın dönem tarihçileri başarısızlığı tasarımdan çok yoksulluk, ayrımcılık ve bakım eksikliğine bağlar; yani mimari, açıklamanın yalnızca bir parçasıdır.",
        ],
      ],
    },
    {
      text:
        "In the early 1970s, the Brazilian city of Curitiba was growing rapidly but could not afford to build an underground railway. Under its mayor Jaime Lerner, an architect, the city chose a different approach. It created lanes on major avenues that were reserved for buses, so that they would not be held up by other traffic. Large articulated buses ran frequently along these routes and stopped at distinctive tube-shaped stations, where passengers paid before boarding and entered at the same level as the bus floor. This made boarding much faster and allowed the system to carry large numbers of people at a fraction of the cost of a metro. Lerner also linked transport to land use: high-density housing and offices were encouraged along the bus corridors, while the city centre was given some of Brazil's first pedestrian streets. The approach, now known as bus rapid transit, has since been copied in cities such as Bogotá, Istanbul and Jakarta. Critics point out, however, that Curitiba's buses have become crowded and that the system has struggled to keep pace with the growth of the metropolitan area.",
      questions: [
        [
          "According to the passage, the tube-shaped stations helped because ----.",
          [
            "they allowed passengers to board quickly",
            "they were cheaper than ordinary bus stops",
            "they protected buses from other traffic",
            "they were built underground",
            "they sold tickets on the bus",
          ],
          "Önceden ödeme ve otobüs tabanıyla aynı seviyede biniş, binişi hızlandırıyordu.",
        ],
        [
          "It can be understood from the passage that Lerner's planning ----.",
          [
            "connected new buildings to the transport routes",
            "encouraged people to move out of the city",
            "ignored the needs of pedestrians",
            "depended mainly on private cars",
            "was rejected by other cities",
          ],
          "Lerner yoğun konut ve ofisleri otobüs koridorları boyunca teşvik ederek ulaşımı arazi kullanımına bağladı.",
        ],
        [
          "The writer's final remarks indicate that the system ----.",
          [
            "has not fully met the needs of a larger city",
            "has been replaced by an underground railway",
            "is no longer used by most residents",
            "was never copied by other countries",
            "has become too expensive to run",
          ],
          "Son cümle, otobüslerin kalabalıklaştığını ve sistemin metropolün büyümesine yetişmekte zorlandığını belirtir.",
        ],
      ],
    },
    {
      text:
        "When Singapore became self-governing in 1959, a large part of its population lived in overcrowded shophouses or in squatter settlements that were frequently destroyed by fire. In 1960, the government set up the Housing and Development Board, which began building high-rise flats at a remarkable pace; more than fifty thousand units were completed within its first five years. From 1964, residents were encouraged to buy rather than rent their flats on ninety-nine-year leases, and they were later allowed to use their compulsory retirement savings to pay for them. The government believed that ownership would give citizens a stake in the young nation and encourage them to take care of their neighbourhoods. Today around eighty per cent of Singaporeans live in public housing estates, which typically include shops, schools, clinics and transport links. To prevent the formation of ethnic enclaves, a quota system introduced in 1989 limits the proportion of each ethnic group in every block. The model is widely admired, although some observers note that rising prices and the gradual expiry of leases are creating new concerns.",
      questions: [
        [
          "According to the passage, the government encouraged home ownership because it believed that ----.",
          [
            "owners would feel more committed to the country",
            "renting was illegal under the new constitution",
            "flats would become cheaper over time",
            "squatter settlements were safer than flats",
            "residents preferred to live in shophouses",
          ],
          "Metne göre hükümet mülkiyetin vatandaşlara genç ulusta bir pay vereceğine inanıyordu.",
        ],
        [
          "The quota system mentioned in the passage was designed to ----.",
          [
            "keep different ethnic groups living together",
            "reduce the price of flats in popular areas",
            "limit the number of flats each family owns",
            "ensure that every estate has a school",
            "encourage people to move abroad",
          ],
          "Kota sistemi etnik yerleşim adacıklarının oluşmasını önlemek, yani farklı grupları bir arada tutmak için getirilmişti.",
        ],
        [
          "It can be inferred from the passage that the 'new concerns' are related to ----.",
          [
            "the long-term value of the flats",
            "the lack of shops on estates",
            "frequent fires in the high-rise blocks",
            "the slow pace of construction",
            "the shortage of public transport",
          ],
          "Yükselen fiyatlar ve kiralama sürelerinin dolması dairelerin uzun vadeli değeriyle ilgilidir.",
        ],
      ],
    },
    {
      text:
        "By the 1980s, the Spanish port city of Bilbao was in serious trouble. Its shipyards and steelworks, which had once made it one of the richest places in Spain, had closed or shrunk, many people were out of work, and its river was badly polluted. The regional government decided to invest in culture as part of a wider plan for renewal, and it persuaded the Solomon R. Guggenheim Foundation of New York to open a museum on a former industrial site by the river. Designed by the architect Frank Gehry and covered in curving sheets of titanium, the building opened in 1997 and quickly became world-famous. In its first three years it attracted around four million visitors, and the economic activity it generated soon covered the cost of construction. Cities around the world tried to repeat this 'Bilbao effect' by commissioning spectacular buildings of their own, often with disappointing results. Analysts have pointed out that Bilbao's success also depended on less visible investments, including a new metro, an airport terminal, cleaning the river and redeveloping the waterfront, which were part of the same long-term strategy.",
      questions: [
        [
          "According to the passage, Bilbao was in difficulty in the 1980s mainly because ----.",
          [
            "its traditional industries had declined",
            "it had too many museums and galleries",
            "its port had been closed by the government",
            "tourists had stopped visiting the region",
            "its population had grown too quickly",
          ],
          "Metne göre tersaneler ve çelik fabrikaları kapanmış ya da küçülmüştü.",
        ],
        [
          "The writer suggests that other cities that copied Bilbao ----.",
          [
            "often failed to achieve similar results",
            "always built their museums by rivers",
            "employed Frank Gehry as their architect",
            "became richer than Bilbao within a decade",
            "refused to invest in public transport",
          ],
          "Yazar, diğer kentlerin gösterişli bina siparişlerinin çoğu zaman hayal kırıklığıyla sonuçlandığını belirtir.",
        ],
        [
          "The main point of the last sentence is that the museum ----.",
          [
            "was one part of a broader renewal plan",
            "was more important than the metro",
            "was paid for by the airport",
            "caused the river to be polluted",
            "had little effect on the city",
          ],
          "Son cümle, başarının metro, havaalanı ve nehir temizliği gibi yatırımlara da dayandığını, müzenin geniş bir stratejinin parçası olduğunu vurgular.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1967, the British government designated a site in Buckinghamshire for a new town to be called Milton Keynes. ---- Its roads were laid out in a loose grid, with roundabouts at each junction and thousands of trees planted along them. Today it is home to more than a quarter of a million people.",
      [
        "It was meant to relieve housing pressure in London.",
        "Buckinghamshire contains many old villages.",
        "Roundabouts are common across Britain.",
        "Many people enjoy walking among trees.",
        "London has several large airports.",
      ],
      "Boşluktan önce yeni bir kent için alan belirlendiği söylenir; boşluğa kentin amacını açıklayan cümle gelmeli, ardından yol düzeni anlatılır.",
    ],
    [
      "When Australia's colonies united in 1901, both Sydney and Melbourne wanted to be the capital. ---- An international design competition was won in 1912 by the American architects Walter Burley Griffin and Marion Mahony Griffin, and the new city of Canberra was built according to their plan.",
      [
        "As a compromise, a new capital was built between them.",
        "Sydney has one of the world's largest natural harbours.",
        "Melbourne is famous for its sporting events.",
        "Many architects enter design competitions.",
        "Australia is the world's sixth-largest country.",
      ],
      "Boşluktan önce iki kentin de başkent olmak istediği, sonra yeni bir kentin kurulduğu anlatılır; boşluğa uzlaşma olarak aralarına yeni bir başkent kurulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1791, the French-born engineer Pierre Charles L'Enfant was asked to design the new American capital. ---- Wide diagonal avenues were to cut across a grid of streets, linking important buildings and open spaces. Although L'Enfant was dismissed within a year, his plan still shapes Washington today.",
      [
        "He drew a plan inspired partly by European cities.",
        "Many Americans visit their capital on holiday.",
        "France supported the American Revolution.",
        "Engineering is a highly respected profession.",
        "The river divides several states.",
      ],
      "Boşluktan sonra planın ayrıntıları (çapraz caddeler) anlatılır; boşluğa L'Enfant'ın Avrupa kentlerinden esinlenen bir plan çizdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2008, Abu Dhabi announced plans for Masdar City, which was promoted as the world's first zero-carbon city. ---- Narrow streets and wind towers were designed to keep pedestrians cool without air conditioning. However, the project has grown much more slowly than planned.",
      [
        "It was to be powered entirely by renewable energy.",
        "Abu Dhabi is the capital of the United Arab Emirates.",
        "Many tourists visit the region in winter.",
        "Air conditioning was invented in the United States.",
        "Desert sand can be used to make glass.",
      ],
      "Boşluktan önce kentin sıfır karbonlu olarak tanıtıldığı söylenir; boşluğa tamamen yenilenebilir enerjiyle çalışacağını belirten açıklayıcı cümle gelmelidir.",
    ],
    [
      "A ghost town is a settlement that has been abandoned by most or all of its inhabitants. ---- Mining towns in the American West, for example, were often deserted as soon as the gold or silver ran out. Some have since become tourist attractions.",
      [
        "This usually happens when its economic base disappears.",
        "Many people believe that old houses are haunted.",
        "The American West has a dry climate.",
        "Silver is used in jewellery and electronics.",
        "Tourism is a growing industry worldwide.",
      ],
      "Boşluktan sonra 'for example' ile maden bitince terk edilen kasabalar örneklenir; boşluğa bunun genellikle ekonomik temel ortadan kalktığında olduğunu söyleyen genel cümle gelmelidir.",
    ],
    [
      "Temperatures in a city centre can be several degrees higher than in nearby fields. ---- Planners are trying to reduce this urban heat island effect by planting trees, creating parks and using lighter-coloured roofs.",
      [
        "Concrete and asphalt store the sun's warmth and give it off after dark.",
        "Many people move to the countryside when they retire.",
        "Weather forecasts are now more accurate than before.",
        "Some cities are famous for their cold winters.",
        "Farmers depend on a reliable supply of rain.",
      ],
      "Boşluktan önce kentlerin daha sıcak olduğu söylenir; boşluğa bunun nedenini (beton ve asfaltın ısıyı emmesi) açıklayan cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "After India's partition in 1947, the state of Punjab needed a new capital.",
        "The Swiss-French architect Le Corbusier was invited to design Chandigarh in the early 1950s.",
        "He divided the city into rectangular sectors, each meant to be self-sufficient.",
        "Punjab is known for its fertile farmland and wheat production.",
        "Its government buildings in raw concrete are now a UNESCO World Heritage Site.",
      ],
      odd: 3,
      why: "Parça Chandigarh'ın planlanmasını anlatır. Pencap'ın verimli tarım arazileri ve buğday üretimiyle bilindiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The High Line in New York was originally an elevated railway built to carry goods to factories and warehouses.",
        "Trains stopped using it in 1980, and wild plants gradually covered the tracks.",
        "Local residents campaigned to save the structure when it was threatened with demolition.",
        "It reopened in 2009 as a public park that has inspired similar projects worldwide.",
        "New York's subway is one of the oldest underground systems in the world.",
      ],
      odd: 4,
      why: "Parça High Line parkını anlatır. New York metrosunun dünyanın en eski yeraltı sistemlerinden biri olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1916, New York adopted the first comprehensive zoning law in the United States.",
        "It was partly a response to the Equitable Building, whose huge mass blocked light from neighbouring streets.",
        "Many office workers in New York commute by train from the suburbs.",
        "The law required tall buildings to step back as they rose higher.",
        "This produced the 'wedding cake' shape of many skyscrapers of the 1920s.",
      ],
      odd: 2,
      why: "Parça New York'un 1916 imar yasasını anlatır. Ofis çalışanlarının banliyölerden trenle gidip geldiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Favelas are informal settlements that grew up on the hillsides of Rio de Janeiro from the late nineteenth century.",
        "Many were built by migrants who could not afford housing in the formal city.",
        "Rio's carnival attracts visitors from all over the world every year.",
        "For decades, the authorities tried to remove them rather than improve them.",
        "Since the 1990s, programmes have instead aimed to provide water, sewers and paved paths.",
      ],
      odd: 2,
      why: "Parça Rio'daki favelaları anlatır. Rio karnavalının her yıl dünyanın dört bir yanından ziyaretçi çektiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Every Sunday, more than a hundred kilometres of streets in Bogotá are closed to cars.",
        "Cycling is an Olympic sport with several different events.",
        "This event, known as the Ciclovía, began on a small scale in 1974.",
        "Today over a million people use the roads to cycle, run or walk.",
        "Cities from Los Angeles to Jakarta have adopted similar programmes.",
      ],
      odd: 1,
      why: "Parça Bogotá'daki Ciclovía uygulamasını anlatır. Bisikletin birçok farklı etkinliği olan bir olimpik spor olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Between the 1920s and the 1960s, many cities removed their tram lines to make room for cars and buses.",
        "Since the 1980s, however, trams have returned to many streets.",
        "Cities such as Strasbourg and Bordeaux have built new networks that have helped to revive their centres.",
        "Many people prefer to travel by car for long journeys.",
        "Modern trams are quieter than buses and produce no exhaust in the street.",
      ],
      odd: 3,
      why: "Parça tramvayların geri dönüşünü anlatır. Pek çok kişinin uzun yolculuklarda araba ile seyahat etmeyi tercih ettiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
