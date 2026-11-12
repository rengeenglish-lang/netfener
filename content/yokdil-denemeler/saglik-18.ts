import type { YokdilDeneme } from "./types";

export const SAGLIK_18: YokdilDeneme = {
  no: 18,
  field: "saglik",
  vocab: [
    [
      "Eijkman noticed that the chickens recovered when their diet was ---- from polished white rice to unpolished brown rice.",
      ["switched", "hidden", "sold", "measured", "frozen"],
      "Eijkman'ın tavukların beslenmesi cilalı beyaz pirinçten kepekli pirince 'değiştirildiğinde' (switched) iyileştiğini fark ettiği anlatılır.",
    ],
    [
      "Adding small amounts of chlorine to drinking water ---- most of the bacteria that cause diseases such as typhoid and cholera.",
      ["destroys", "feeds", "attracts", "protects", "multiplies"],
      "İçme suyuna az miktarda klor eklemenin hastalık yapan bakterilerin çoğunu 'yok ettiği' (destroys) anlatılır.",
    ],
    [
      "Goldberger was convinced that pellagra was not ---- but was caused by a poor diet.",
      ["contagious", "painful", "common", "serious", "visible"],
      "Goldberger'in pellagranın 'bulaşıcı' (contagious) olmadığına, kötü beslenmeden kaynaklandığına inandığı anlatılır.",
    ],
    [
      "The project encouraged people to ---- the amount of butter and salt in their diet and to eat more vegetables.",
      ["cut", "double", "praise", "invent", "store"],
      "Projenin insanları beslenmelerindeki tereyağı ve tuz miktarını 'azaltmaya' (cut) teşvik ettiği anlatılır.",
    ],
    [
      "The study has followed the same families for three generations, and the research is still ---- today.",
      ["ongoing", "finished", "forgotten", "forbidden", "secret"],
      "Çalışmanın aynı aileleri üç kuşaktır izlediği ve araştırmanın bugün hâlâ 'sürmekte' (ongoing) olduğu anlatılır.",
    ],
    [
      "When the ban was announced, food companies were given three years to ---- artificial trans fats from their products.",
      ["phase out", "take up", "look into", "bring about", "hold on"],
      "Yasak açıklandığında şirketlere yapay trans yağları ürünlerinden 'aşamalı olarak kaldırmak' (phase out) için üç yıl verildiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "The connection between polished rice and beriberi ---- in the 1890s by a Dutch doctor working in Java.",
      ["was discovered", "discovered", "has discovered", "was discovering", "had discovered"],
      "Bağlantı keşfedilen bir şeydir ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was discovered'.",
    ],
    [
      "If Goldberger's findings had been accepted sooner, thousands of deaths from pellagra ----.",
      ["could have been prevented", "could be prevented", "will be prevented", "were prevented", "had been prevented"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'could have been + V3' ister.",
    ],
    [
      "By the time the project began in 1972, North Karelia ---- one of the highest rates of heart disease in the world.",
      ["had had", "has had", "has", "will have", "was having"],
      "Projenin başlamasından (geçmiş) önce süregelen durum: Past Perfect 'had had'.",
    ],
    [
      "The town of Framingham, ---- residents volunteered for the study in 1948, lies near Boston.",
      ["whose", "who", "which", "whom", "where"],
      "Sakinler kasabaya aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only when the vitamin was identified in the 1930s ---- the cause of pellagra finally understood.",
      ["was", "did", "had", "has", "it was"],
      "'Only when' ile başlayan cümlede ana cümle devrik olur; edilgen yapıda 'was the cause … understood' gelir.",
    ],
    [
      "Death rates from typhoid fell so sharply ---- other cities quickly adopted the method.",
      ["that", "which", "as", "such", "than"],
      "'so sharply that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- trans fats made foods last longer, they increased the risk of heart disease.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Trans yağların gıdaların raf ömrünü uzatması ile kalp hastalığı riskini artırması zıttır: 'Although'.",
    ],
    [
      "Children ---- diets lacked protein developed swollen bellies and thin limbs.",
      ["whose", "who", "which", "whom", "where"],
      "Beslenme çocuklara aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Goldberger is reported ---- material from patients in order to prove that the disease was not infectious.",
      ["to have swallowed", "to swallow", "swallowing", "to be swallowing", "to have been swallowed"],
      "Eylem geçmişte kalmıştır ve özne eylemi kendisi yapmıştır (etken): 'be reported to have + V3'.",
    ],
    [
      "The volunteers had their blood pressure measured ---- answered questions about their habits.",
      ["and", "but", "or", "unless", "so that"],
      "İki eylem birbirine eklenir: 'and'.",
    ],
    [
      "Foods ---- with partially hydrogenated oil often contained high levels of trans fats.",
      ["made", "making", "which made", "to make", "have made"],
      "Gıdalar yapılan ürünlerdir; edilgen anlamlı geçmiş ortaç 'made' gerekir.",
    ],
    [
      "Health workers visited local shops ---- healthier products would be easier to find.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Many people in the region ate as if butter ---- essential for good health.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır: 'were'.",
    ],
    [
      "The more salt people eat, ---- their blood pressure tends to be.",
      ["the higher", "higher", "the highest", "more high", "the more high"],
      "'The more …, the higher …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Beriberi is a disease that damages the nerves and the heart, causing weakness, pain and, in severe cases, heart failure. In the late nineteenth century, it was common in parts of Asia where people lived mainly on rice. In 1886, the Dutch government sent a team to the island of Java, then a Dutch colony, to find its cause. Most scientists at the time believed {1} it was caused by a germ. One of the team, the doctor Christiaan Eijkman, stayed on to continue the research, using chickens in the laboratory. By chance, he noticed that the chickens developed symptoms similar to beriberi {2} they were fed polished white rice left over from the hospital kitchen. When a new cook refused to give 'military' rice to civilian chickens, the birds were switched back to cheaper unpolished rice, and they recovered. Eijkman at first thought that the white rice contained a poison and that the outer layer of the grain contained a cure. {3}, later researchers showed that the outer layer contained a substance essential for health, {4} was removed when rice was polished. This substance was later identified as vitamin B1, or thiamine. In 1929, Eijkman shared the Nobel Prize {5} his work, which helped to establish the idea that some diseases are caused by the lack of certain nutrients.",
      blanks: [
        [
          "(21) ----",
          ["that", "what", "which", "whose", "whom"],
          "'believed that …' = '… olduğuna inanıyordu' yapısında isim cümlesi bağlacı 'that' gerekir.",
        ],
        [
          "(22) ----",
          ["when", "unless", "although", "so that", "whereas"],
          "Tavukların cilalı pirinçle beslendiklerinde belirtiler gösterdiği anlatılır: 'when'.",
        ],
        [
          "(23) ----",
          ["However", "Therefore", "Similarly", "For example", "In addition"],
          "Eijkman'ın ilk düşüncesi ile sonraki araştırmacıların bulgusu karşıtlıktır: 'However'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'a substance' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["for", "with", "by", "from", "of"],
          "'a prize for something' = 'bir şey için ödül' kalıbı: 'for'.",
        ],
      ],
    },
    {
      text:
        "In the nineteenth century, outbreaks of cholera and typhoid regularly swept through cities in Europe and North America, {1} drinking water was often contaminated with sewage. Filtering water through sand helped, but it did not remove all harmful bacteria. In 1908, Jersey City in New Jersey became one of the first places in the world to add chlorine to its public water supply {2} a continuous basis. The decision was controversial, and the water company was taken to court by those who opposed adding chemicals to water. The judge, {3}, accepted evidence that the method was safe and effective, and other cities soon followed. Within a few decades, chlorination had become standard in much of the world, and deaths from waterborne diseases fell dramatically. Some historians consider it one of the greatest public health achievements of the twentieth century. Chlorine is cheap, and a small amount remains in the water as it travels through the pipes, {4} continues to protect it from contamination. {5}, chlorine can react with natural substances in the water to form by-products, and water companies therefore monitor these carefully.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "so that", "until"],
          "Salgınların nedeni içme suyunun lağım suyuyla kirlenmesidir: 'because'.",
        ],
        [
          "(27) ----",
          ["on", "in", "at", "by", "with"],
          "'on a continuous basis' = 'sürekli olarak' kalıbı: 'on'.",
        ],
        [
          "(28) ----",
          ["however", "therefore", "for example", "in addition", "similarly"],
          "Suya kimyasal eklenmesine karşı çıkanlar ile yargıcın yöntemi kabul etmesi karşıtlıktır: 'however'.",
        ],
        [
          "(29) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk virgülden sonra önceki cümlenin tamamını (az miktarın suda kalmasını) niteler: 'which'.",
        ],
        [
          "(30) ----",
          ["Nevertheless", "Therefore", "Similarly", "For this reason", "As a result"],
          "Klorun yararlarından sonra yan ürün oluşturabileceği belirtilir; karşıtlık bildiren 'Nevertheless' gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although many doctors believed that pellagra was spread by germs, ----.",
      [
        "Goldberger showed that diet was the key",
        "the disease was common in the southern United States",
        "it caused skin problems, diarrhoea and mental confusion",
        "many patients lived in poor rural communities",
        "the disease had been described in Spain in the 1730s",
      ],
      "'Although' zıtlık ister: pek çok doktor pellagranın mikroplarla yayıldığına inansa da Goldberger beslenmeyi değiştirerek önlenebileceğini gösterdi.",
    ],
    [
      "If artificial trans fats were still widely used, ----.",
      [
        "many more people would suffer heart attacks",
        "the ban had been introduced in 2018",
        "most food companies will change their recipes",
        "margarine was made from vegetable oil",
        "fried foods are popular in many countries",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + yalın fiil' ister: çok daha fazla kişi kalp krizi geçirirdi.",
    ],
    [
      "The North Karelia project worked closely with local farmers ----.",
      [
        "so that they could produce healthier foods",
        "because they wanted the farmers to produce more butter",
        "although the farmers had no interest in health",
        "unless the government paid for the changes",
        "even if nobody bought their products",
      ],
      "Projenin yerel çiftçilerle yakın çalışmasının amacı onların daha sağlıklı gıdalar üretebilmesidir: 'so that'.",
    ],
    [
      "Since the Framingham study began in 1948, ----.",
      [
        "it has identified major risk factors",
        "doctors had known little about heart disease",
        "most volunteers would have stopped smoking",
        "the study will include their grandchildren",
        "few people lived in the town",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has identified'.",
    ],
    [
      "Unless water is properly treated, ----.",
      [
        "it can spread diseases such as cholera and typhoid",
        "the city would have built many more pipes and reservoirs",
        "most people had drunk bottled water",
        "the chlorine will disappear",
        "the water was very cold",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: kolera ve tifo gibi hastalıkları yayabilir.",
    ],
    [
      "The fall in heart disease in North Karelia was so dramatic ----.",
      [
        "that the project became a model for other countries",
        "because the region had one of the highest rates in the world",
        "although many people continued to eat butter",
        "unless the figures had been calculated wrongly",
        "while the population of the region declined",
      ],
      "'so dramatic that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Doctors found that when children with kwashiorkor were given more protein, ----.",
      [
        "their swelling gradually disappeared",
        "they would have grown more slowly",
        "most of them had already recovered",
        "the disease will spread to other children",
        "their parents were farmers",
      ],
      "'when' ile genel bir bulgu anlatılır: kwashiorkorlu çocuklara daha fazla protein verildiğinde vücutlarındaki şişlik yavaş yavaş kayboluyordu.",
    ],
    [
      "So convinced was Goldberger that pellagra was not infectious ----.",
      [
        "that he exposed himself to the disease",
        "because he had studied the diet of poor families",
        "although many of his colleagues disagreed with him",
        "while the disease was spreading in the South",
        "unless the patients were given more meat",
      ],
      "Devrik 'So convinced was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While trans fats occur naturally in small amounts in some meat and dairy products, ----.",
      [
        "most came from processed oils",
        "many people enjoy eating fried foods and cakes",
        "the human body needs some fat to stay healthy",
        "butter has been produced for thousands of years",
        "olive oil is popular in Mediterranean countries",
      ],
      "'While' iki kaynağı karşılaştırır: trans yağlar bazı et ve süt ürünlerinde doğal olarak az miktarda bulunurken beslenmedekilerin çoğu endüstriyel işlenmiş yağlardan geliyordu.",
    ],
    [
      "Once the prisoners had been placed on a diet lacking fresh foods, ----.",
      [
        "several of them fell ill",
        "the governor will release them",
        "they would have stayed healthy",
        "the disease is caused by germs",
        "most of them had committed crimes",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: birçoğunda pellagra belirtileri gelişti.",
    ],
    [
      "No sooner had the city begun to add chlorine to its water ----.",
      [
        "than typhoid cases began to fall",
        "when the court had made its decision",
        "that other cities will follow",
        "before the water had been filtered",
        "so the water tasted different",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The outer layer of the rice grain contained a substance that was essential for health.",
      [
        "Pirinç tanesinin dış katmanı, sağlık için gerekli bir madde içeriyordu.",
        "Pirinç tanesinin dış katmanı, sağlığa zarar veren bir zehir içeriyordu.",
        "Sağlık için gerekli olan madde, pirinç tanesinin iç kısmında bulunuyordu.",
        "Pirinç tanesinin dış katmanı, pişirme sırasında sağlık için gerekli hâle geldi.",
        "Pirinç tanesi, sağlık için gerekli hiçbir madde içermiyordu.",
      ],
      "'The outer layer of the rice grain' 'pirinç tanesinin dış katmanı', 'a substance that was essential for health' 'sağlık için gerekli bir madde' demektir.",
    ],
    [
      "Chlorination is considered one of the greatest public health achievements of the twentieth century.",
      [
        "Klorlama, yirminci yüzyılın en büyük halk sağlığı başarılarından biri olarak kabul edilir.",
        "Klorlama, yirminci yüzyılın en büyük halk sağlığı sorunlarından biri olarak kabul edilir.",
        "Yirminci yüzyılın halk sağlığı başarıları, klorlamanın önemini azalttı.",
        "Klorlama, yirminci yüzyılda halk sağlığına hiçbir katkı sağlamadı.",
        "Yirminci yüzyılda klorlama, halk sağlığı uzmanlarınca tamamen reddedildi.",
      ],
      "'is considered one of the greatest public health achievements' 'en büyük halk sağlığı başarılarından biri olarak kabul edilir' demektir.",
    ],
    [
      "Pellagra was most common among poor people whose diet consisted mainly of maize.",
      [
        "Pellagra, en çok beslenmesi esas olarak mısırdan oluşan yoksul insanlar arasında yaygındı.",
        "Pellagra, en çok mısır yemeyen zengin insanlar arasında yaygındı.",
        "Mısırla beslenen yoksul insanlar pellagraya karşı tamamen korunuyordu.",
        "Yoksul insanlar, pellagradan korunmak için yalnızca mısır yiyordu.",
        "Pellagra, beslenmeyle hiçbir ilgisi olmayan bir hastalıktı.",
      ],
      "'was most common among poor people' 'en çok yoksul insanlar arasında yaygındı', 'whose diet consisted mainly of maize' 'beslenmesi esas olarak mısırdan oluşan' demektir.",
    ],
    [
      "The project showed that changing the habits of a whole community could reduce deaths from heart disease.",
      [
        "Proje, bütün bir topluluğun alışkanlıklarını değiştirmenin kalp hastalığından kaynaklanan ölümleri azaltabileceğini gösterdi.",
        "Proje, bir topluluğun alışkanlıklarını değiştirmenin kalp hastalıkları üzerinde hiçbir etkisi olmadığını gösterdi.",
        "Kalp hastalığından kaynaklanan ölümler, topluluğun alışkanlıklarını değiştirmesini engelledi.",
        "Proje, yalnızca bireylerin alışkanlıklarının değiştirilebileceğini gösterdi.",
        "Proje, kalp hastalığından ölenlerin alışkanlıklarını incelemekle sınırlı kaldı.",
      ],
      "'changing the habits of a whole community' 'bütün bir topluluğun alışkanlıklarını değiştirmenin', 'could reduce deaths from heart disease' 'kalp hastalığından kaynaklanan ölümleri azaltabileceği' demektir.",
    ],
    [
      "The term 'risk factor' was first used widely as a result of the study.",
      [
        "'Risk faktörü' terimi, ilk kez bu çalışmanın sonucunda yaygın olarak kullanılmaya başlandı.",
        "'Risk faktörü' terimi, bu çalışmadan çok önce yaygın olarak kullanılıyordu.",
        "Çalışma, 'risk faktörü' teriminin kullanılmasını yasakladı.",
        "'Risk faktörü' terimi, çalışmanın başarısız olmasına neden oldu.",
        "Çalışma, 'risk faktörü' teriminin yanlış anlaşıldığını gösterdi.",
      ],
      "'was first used widely' 'ilk kez yaygın olarak kullanılmaya başlandı', 'as a result of the study' 'bu çalışmanın sonucunda' demektir.",
    ],
    [
      "Kwashiorkor often develops when a child is weaned from breast milk onto a diet low in protein.",
      [
        "Kwashiorkor, çoğu zaman çocuk anne sütünden kesilip proteini düşük bir beslenmeye geçtiğinde gelişir.",
        "Kwashiorkor, çoğu zaman çocuk anne sütüyle beslenmeye başladığında gelişir.",
        "Proteini yüksek bir beslenme, çocuklarda kwashiorkora neden olur.",
        "Anne sütünden kesilen çocuklar kwashiorkora karşı tamamen korunur.",
        "Kwashiorkor yalnızca yetişkinlerde görülen bir hastalıktır.",
      ],
      "'is weaned from breast milk' 'anne sütünden kesilir', 'onto a diet low in protein' 'proteini düşük bir beslenmeye geçer' demektir.",
    ],
  ],
  trEn: [
    [
      "Beriberi, B1 vitamini eksikliğinden kaynaklanır.",
      [
        "Beriberi is caused by a lack of vitamin B1.",
        "Beriberi is caused by too much vitamin B1.",
        "A lack of vitamin B1 is caused by beriberi.",
        "Beriberi has nothing to do with vitamins.",
        "Vitamin B1 is produced by people who have beriberi.",
      ],
      "'B1 vitamini eksikliğinden kaynaklanır' 'is caused by a lack of vitamin B1' karşılığıdır.",
    ],
    [
      "Suyun klorlanması, su yoluyla bulaşan hastalıklardan ölümleri büyük ölçüde azalttı.",
      [
        "The chlorination of water greatly reduced deaths from waterborne diseases.",
        "The chlorination of water caused many deaths from waterborne diseases.",
        "Waterborne diseases made the chlorination of water impossible.",
        "Deaths from waterborne diseases rose after water was chlorinated.",
        "The chlorination of water had no effect on waterborne diseases.",
      ],
      "'Suyun klorlanması' 'the chlorination of water', 'büyük ölçüde azalttı' 'greatly reduced', 'su yoluyla bulaşan hastalıklar' 'waterborne diseases' karşılığıdır.",
    ],
    [
      "Goldberger, hastalığın bulaşıcı olmadığını kanıtlamak için kendi üzerinde deney yaptı.",
      [
        "Goldberger experimented on himself to prove that the disease was not contagious.",
        "Goldberger refused to experiment on himself because the disease was contagious.",
        "Goldberger proved that the disease was contagious by experimenting on prisoners.",
        "Goldberger caught the disease after experimenting on his patients.",
        "Goldberger never carried out any experiments on the disease.",
      ],
      "'kendi üzerinde deney yaptı' 'experimented on himself', 'hastalığın bulaşıcı olmadığını kanıtlamak için' 'to prove that the disease was not contagious' karşılığıdır.",
    ],
    [
      "Kuzey Karelya projesi, diğer ülkeler için bir model hâline geldi.",
      [
        "The North Karelia project became a model for other countries.",
        "The North Karelia project was based on a model from other countries.",
        "Other countries refused to follow the North Karelia project.",
        "The North Karelia project failed because it copied other countries.",
        "The North Karelia project was never known outside Finland.",
      ],
      "'diğer ülkeler için bir model hâline geldi' 'became a model for other countries' karşılığıdır.",
    ],
    [
      "Framingham çalışması, sigaranın kalp hastalığı riskini artırdığını gösterdi.",
      [
        "The Framingham study showed that smoking increases the risk of heart disease.",
        "The Framingham study showed that smoking reduces the risk of heart disease.",
        "Heart disease increases the risk of smoking, according to the Framingham study.",
        "The Framingham study found no link between smoking and heart disease.",
        "The Framingham study was carried out only on people who smoked.",
      ],
      "'sigaranın kalp hastalığı riskini artırdığını gösterdi' 'showed that smoking increases the risk of heart disease' karşılığıdır.",
    ],
    [
      "Yapay trans yağlar, birçok ülkede yasaklanmıştır.",
      [
        "Artificial trans fats have been banned in many countries.",
        "Artificial trans fats are now required in many countries.",
        "Many countries have been banned from producing natural fats.",
        "Artificial trans fats were invented in many countries at the same time.",
        "No country has ever banned artificial trans fats.",
      ],
      "'birçok ülkede yasaklanmıştır' 'have been banned in many countries' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the early twentieth century, pellagra affected hundreds of thousands of people in the southern United States. Its symptoms were often summarised as the 'four Ds': dermatitis, a rash on parts of the skin exposed to the sun; diarrhoea; dementia; and, eventually, death. Many doctors believed that it was an infectious disease or that it was caused by eating spoiled maize, which was the main food of poor families in the region. In 1914, the government asked the doctor Joseph Goldberger to investigate. He noticed that in orphanages and psychiatric hospitals, patients often developed the disease while the staff, who ate a more varied diet, did not, which would be unlikely if it were infectious. When he added milk, eggs and meat to the diet of children in two orphanages, pellagra almost disappeared. He also persuaded a group of prisoners to eat a limited, maize-based diet in exchange for their release, and several of them developed the disease. To convince sceptics, Goldberger, his wife and several colleagues even swallowed and injected material from patients, without becoming ill. Despite this evidence, many southerners resented the suggestion that poverty was to blame. The missing nutrient, niacin, was identified only in 1937, eight years after his death.",
      questions: [
        [
          "According to the passage, Goldberger doubted that pellagra was infectious because ----.",
          [
            "staff in institutions did not develop it, although patients did",
            "it was most common in large northern cities",
            "it affected only people who ate spoiled maize",
            "it could be cured with medicines",
            "it had disappeared from orphanages",
          ],
          "Metne göre kurumlarda hastalar hastalığa yakalanırken daha çeşitli beslenen personel yakalanmıyordu; bu, hastalık bulaşıcı olsaydı pek olası olmazdı.",
        ],
        [
          "The experiment with prisoners was intended to show that ----.",
          [
            "a poor diet could cause the disease",
            "the disease could be passed from person to person",
            "prisoners were more likely to be infected",
            "maize contained a dangerous germ",
            "the disease could be cured by release from prison",
          ],
          "Mahkûmların sınırlı, mısıra dayalı bir beslenmeyle hastalanması, kötü beslenmenin hastalığa yol açabileceğini göstermeyi amaçlıyordu.",
        ],
        [
          "It can be inferred from the passage that some southerners rejected Goldberger's conclusions because ----.",
          [
            "they did not want to accept a link with poverty",
            "they had more evidence than he did",
            "they believed niacin was harmful",
            "they wanted the disease to continue",
            "they preferred to eat meat and eggs",
          ],
          "Pek çok güneylinin yoksulluğun suçlanmasına içerlemesi, bulguları yoksullukla bağlantıyı kabul etmek istemedikleri için reddettiklerini gösterir.",
        ],
      ],
    },
    {
      text:
        "In the early 1970s, the region of North Karelia in eastern Finland had one of the highest death rates from heart disease in the world, especially among middle-aged men. The traditional diet was rich in butter, full-fat milk and salt, and smoking was common. In 1971, local people sent a petition to the government asking for help, and the following year a public health programme was launched. Rather than focusing only on individual patients, the project aimed to change the habits of the whole community. Health workers organised campaigns in schools, workplaces and the media, and they trained respected local people, such as shopkeepers and members of women's organisations, to spread the message. The project also worked with food producers to develop low-fat dairy products and reduce the salt in sausages and bread, and it encouraged farmers to grow berries instead of keeping dairy cattle. Over the following decades, smoking rates fell, people ate less saturated fat and more vegetables, and average cholesterol levels dropped. By the mid-2000s, deaths from heart disease among working-age men in the region had fallen by around eighty per cent. The project became a model for public health programmes in many other countries.",
      questions: [
        [
          "According to the passage, the North Karelia project began after ----.",
          [
            "local residents asked the government for assistance",
            "doctors discovered a new treatment for heart disease",
            "food companies offered to change their products",
            "the World Health Organization chose the region",
            "farmers stopped keeping dairy cattle",
          ],
          "Metne göre 1971'de yerel halk hükümete yardım isteyen bir dilekçe gönderdi ve ertesi yıl program başlatıldı.",
        ],
        [
          "The writer mentions shopkeepers and members of women's organisations in order to show ----.",
          [
            "how the project used trusted members of the community",
            "who suffered most from heart disease",
            "why the traditional diet was unhealthy",
            "how food products were changed",
            "that the project was run by businesses",
          ],
          "Saygın yerel kişilerin mesajı yaymak üzere eğitilmesi, projenin topluluğun güvenilen üyelerinden nasıl yararlandığını gösterir.",
        ],
        [
          "It can be understood from the passage that the project ----.",
          [
            "combined education with changes to the food supply",
            "focused only on treating individual patients",
            "failed to reduce smoking in the region",
            "was ignored by other countries",
            "increased the consumption of butter",
          ],
          "Okul, işyeri ve medya kampanyalarının yanı sıra gıda üreticileri ve çiftçilerle çalışılması, projenin eğitimi gıda arzındaki değişikliklerle birleştirdiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1948, scientists began a study in the town of Framingham, Massachusetts, to investigate why heart disease had become the leading cause of death in the United States. Around five thousand adult residents volunteered to take part. Every two years they underwent a detailed medical examination, including measurements of blood pressure, cholesterol and weight, and answered questions about their habits, such as smoking and exercise. By comparing those who later developed heart disease with those who did not, the researchers were able to identify the conditions that made it more likely. The study showed that high blood pressure, high cholesterol, smoking, obesity, diabetes and physical inactivity all increased the risk, and it helped to popularise the term 'risk factor'. These findings, which seem obvious today, were not widely accepted at the time, when many doctors believed that heart disease was simply an inevitable part of ageing. In 1971, the children of the original participants joined the study, and in 2002 a third generation was added. The study continues today and has also produced important findings on stroke, dementia and other conditions.",
      questions: [
        [
          "According to the passage, the Framingham study was able to identify risk factors by ----.",
          [
            "comparing people who developed heart disease with those who did not",
            "treating volunteers with new medicines",
            "studying patients after they had died",
            "asking doctors for their opinions",
            "examining residents only once",
          ],
          "Metne göre araştırmacılar kalp hastalığına yakalananlarla yakalanmayanları karşılaştırarak riski artıran koşulları belirledi.",
        ],
        [
          "The writer mentions that many doctors saw heart disease as an inevitable part of ageing in order to show ----.",
          [
            "that the study's findings were new at the time",
            "why the volunteers were all elderly",
            "how the study was funded",
            "that the doctors were correct",
            "why the study ended in 1971",
          ],
          "Bugün açık görünen bulguların o dönemde kabul görmemesi, çalışmanın bulgularının o zaman için yeni olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that the study ----.",
          [
            "has expanded to include later generations of the same families",
            "ended after the first group of volunteers died",
            "was carried out only on men",
            "focused only on heart disease",
            "was based on a single examination",
          ],
          "1971'de katılımcıların çocuklarının, 2002'de de üçüncü kuşağın çalışmaya katılması bu sonucu verir.",
        ],
      ],
    },
    {
      text:
        "Trans fats are a type of fat produced when vegetable oils are partially hydrogenated, a process that turns liquid oil into a solid. Developed in the early twentieth century, the process allowed manufacturers to produce cheap margarine and cooking fats that lasted longer than butter and were well suited to frying and baking. For decades, these fats were widely used in biscuits, cakes, fried foods and snacks, and they were even promoted as a healthier alternative to animal fats. From the 1990s onwards, however, studies showed that trans fats raised levels of 'bad' cholesterol and lowered levels of 'good' cholesterol, greatly increasing the risk of heart disease. Denmark became the first country to strictly limit their use in 2003, and rates of heart disease there subsequently fell. Several American cities followed, and in 2018 the United States banned the main source of artificial trans fats. In the same year, the World Health Organization called for their elimination from the global food supply. Many manufacturers have found alternatives, although health experts warn that some of the replacements, such as palm oil, are high in saturated fat and are not ideal either.",
      questions: [
        [
          "According to the passage, trans fats were popular with food manufacturers because ----.",
          [
            "they were cheap and kept well",
            "they were known to protect the heart",
            "they were made from animal fats",
            "they were required by law",
            "they tasted better than butter",
          ],
          "Metne göre işlem tereyağından uzun dayanan ucuz margarin ve yemeklik yağ üretilmesini sağlıyordu.",
        ],
        [
          "The writer mentions that trans fats were once promoted as healthier than animal fats in order to show ----.",
          [
            "how views about them changed over time",
            "why Denmark banned them",
            "how they were produced",
            "that palm oil is unhealthy",
            "that animal fats are dangerous",
          ],
          "Bir zamanlar sağlıklı alternatif olarak tanıtılan trans yağların sonradan zararlı bulunması, görüşlerin zamanla nasıl değiştiğini gösterir.",
        ],
        [
          "It can be inferred from the passage that the replacement of trans fats ----.",
          [
            "has not completely solved the problem of unhealthy fats",
            "has been impossible for most manufacturers",
            "has increased the risk of heart disease",
            "was opposed by the World Health Organization",
            "was completed before 2003",
          ],
          "Bazı ikame yağların doymuş yağ açısından zengin olması ve ideal olmaması, sağlıksız yağ sorununun tamamen çözülmediğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Kwashiorkor is a severe form of malnutrition that mainly affects young children in poor regions. The name comes from a language spoken in Ghana and is often translated as 'the disease of the displaced child', referring to a child who becomes ill after a younger brother or sister is born and he or she is no longer breastfed. The condition was described in detail in the 1930s by the Jamaican doctor Cicely Williams, who was working in what is now Ghana. Unlike children suffering from simple starvation, who become extremely thin, children with kwashiorkor often have swollen legs, feet and bellies caused by fluid collecting in their tissues, which can make them appear well fed. Other signs include changes in the colour of the hair, peeling skin and a lack of energy. For many years, the disease was blamed mainly on a lack of protein in diets based on starchy foods such as cassava. More recent research suggests that the causes are more complex and may also involve infections and changes in the bacteria of the gut. Treatment must be given carefully, as feeding a severely malnourished child too quickly can be dangerous, and specially prepared therapeutic foods are now widely used.",
      questions: [
        [
          "According to the passage, the name 'kwashiorkor' refers to ----.",
          [
            "a child who falls ill after a sibling is born",
            "a doctor who first described the disease in Jamaica",
            "a type of starchy food eaten in Ghana",
            "a child who has been separated from both parents",
            "the swelling of the legs and feet",
          ],
          "Metne göre ad, küçük bir kardeş doğduktan sonra artık emzirilmeyen ve hastalanan çocuğu ifade eder.",
        ],
        [
          "The writer points out that children with kwashiorkor may appear well fed because ----.",
          [
            "fluid makes their bodies swell",
            "they eat large amounts of cassava",
            "they receive therapeutic foods",
            "their hair changes colour",
            "they are breastfed for longer",
          ],
          "Metinde dokularında sıvı birikmesinin bacak, ayak ve karında şişliğe yol açtığı ve bunun onları iyi beslenmiş gösterebildiği belirtilir.",
        ],
        [
          "It can be understood from the passage that recent research ----.",
          [
            "has questioned the protein explanation",
            "has proved that the disease is caused by cassava alone",
            "has found that the disease no longer exists",
            "shows that treatment should be given as quickly as possible",
            "has ignored the role of infections",
          ],
          "Son araştırmaların nedenlerin daha karmaşık olduğunu ve enfeksiyonları da içerebileceğini öne sürmesi, tek nedenin protein eksikliği olduğu fikrini sorguladığını gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1842, the British social reformer Edwin Chadwick published a report on the living conditions of the working population. ---- He argued that disease could be reduced by providing clean water and proper drainage.",
      [
        "It showed that the poor in crowded towns died much younger than the wealthy.",
        "Many families in the nineteenth century had more than five children.",
        "Railways were being built rapidly across Britain at the time.",
        "Chadwick had trained as a lawyer before becoming a reformer.",
        "Coal was the main source of heating in most British homes.",
      ],
      "Boşluktan sonra Chadwick'in temiz su ve kanalizasyonla hastalığın azaltılabileceğini savunduğu söylenir; boşluğa raporun kalabalık kasabalardaki yoksulların varlıklılardan çok daha genç öldüğünü gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1967, Britain introduced roadside breath tests for drivers suspected of drinking alcohol. ---- In the first year after the law came into force, deaths on the roads fell noticeably.",
      [
        "For the first time, police could measure a driver's alcohol level.",
        "Cars became much more common in Britain during the 1960s.",
        "Many pubs in Britain were built in the nineteenth century.",
        "Alcohol affects judgement, reaction time and coordination.",
        "Some drivers prefer to travel at night when roads are quieter.",
      ],
      "Boşluktan önce nefes testlerinin getirildiği, sonra trafik ölümlerinin azaldığı söylenir; boşluğa polisin ilk kez sürücünün nefesindeki alkol miktarını ölçebildiğini anlatan cümle gelmelidir.",
    ],
    [
      "Some countries now require foods to carry colour-coded labels on the front of the packet. ---- This makes it easier for shoppers to compare products quickly.",
      [
        "Each colour shows how much fat, sugar and salt it contains.",
        "Many supermarkets now sell food from countries all over the world.",
        "Colours can affect people's mood and their choice of clothing.",
        "Some shoppers prefer to buy fresh food from local markets.",
        "Food packaging has become a major source of plastic waste.",
      ],
      "Boşluktan sonra 'This' ile alışveriş yapanların ürünleri hızla karşılaştırabildiği söylenir; boşluğa renklerin yağ, şeker ve tuz düzeylerini nasıl gösterdiğini açıklayan cümle gelmelidir.",
    ],
    [
      "Studies have found that children who eat breakfast tend to concentrate better at school. ---- For this reason, some schools now provide free breakfasts for pupils.",
      [
        "However, many children arrive at school without having eaten anything.",
        "Cereals are among the most popular breakfast foods in many countries.",
        "Schools usually begin at around eight or nine o'clock in the morning.",
        "Some adults prefer to drink only coffee in the morning.",
        "Breakfast customs vary greatly from one culture to another.",
      ],
      "Boşluktan sonra 'For this reason' ile okulların ücretsiz kahvaltı verdiği söylenir; boşluğa birçok çocuğun hiçbir şey yemeden okula geldiğini söyleyen 'However' cümlesi gelmelidir.",
    ],
    [
      "Over the past fifty years, the size of portions served in restaurants and sold in packets has grown considerably. ---- As a result, larger portions are thought to be one of the causes of rising obesity.",
      [
        "Research shows that people tend to eat more when they are given more food.",
        "Restaurants in many countries now offer food from other cultures.",
        "Some people prefer to eat their main meal in the middle of the day.",
        "Plates and bowls are made from a wide range of materials.",
        "Fast-food restaurants first became popular in the 1950s.",
      ],
      "Boşluktan sonra 'As a result' ile büyük porsiyonların obeziteye neden olduğu düşünülür; boşluğa insanların önlerine daha çok yiyecek konduğunda daha çok yediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Energy drinks often contain large amounts of caffeine and sugar. ---- Some countries have therefore banned their sale to children.",
      [
        "In young people, they have been linked to sleep problems.",
        "Coffee has been drunk in the Middle East for many centuries.",
        "Many sports stars appear in advertisements for drinks and snacks.",
        "Cans are made from aluminium, which can be recycled many times.",
        "Students often drink tea or coffee while preparing for exams.",
      ],
      "Boşluktan sonra 'therefore' ile bazı ülkelerin çocuklara satışı yasakladığı söylenir; boşluğa gençlerde uyku sorunları, kaygı ve hızlı kalp atışıyla ilişkilendirildiklerini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Iodised salt was introduced in many countries to prevent thyroid problems.",
        "The idea is simple: a small amount of iodine is added to ordinary table salt.",
        "Sea salt is often sold in attractive glass jars.",
        "Because almost everyone uses salt, the method reaches most of the population.",
        "It has greatly reduced the number of people suffering from goitre.",
      ],
      odd: 2,
      why: "Parça iyotlu tuzun tiroit sorunlarını önlemedeki rolünü anlatır. Deniz tuzunun cam kavanozlarda satıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Taxes on sugary drinks have been introduced in a number of countries.",
        "Some manufacturers have responded by reducing the sugar in their products.",
        "Lemonade was originally made with lemons, water and honey.",
        "Studies suggest that the taxes have led people to buy fewer sugary drinks.",
        "Supporters argue that the money raised can be spent on health programmes.",
      ],
      odd: 2,
      why: "Parça şekerli içecek vergilerini anlatır. Limonatanın eskiden limon, su ve balla yapıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1747, the Scottish naval surgeon James Lind tested several treatments for scurvy on sailors.",
        "Two of the men were given oranges and lemons each day.",
        "These two recovered far more quickly than the others.",
        "Ships at that time were powered entirely by wind.",
        "His trial is often described as one of the first controlled experiments in medicine.",
      ],
      odd: 3,
      why: "Parça Lind'in iskorbüt üzerine yaptığı deneyi anlatır. O dönemde gemilerin tamamen rüzgârla hareket ettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dietary fibre is found in fruit, vegetables, beans and whole grains.",
        "It helps to keep the digestive system healthy.",
        "Diets high in fibre have also been linked to a lower risk of heart disease.",
        "However, most people in rich countries do not eat enough of it.",
        "Bread has been made in Egypt for thousands of years.",
      ],
      odd: 4,
      why: "Parça diyet lifinin yararlarını anlatır. Mısır'da binlerce yıldır ekmek yapıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Anaemia caused by a lack of iron is the most common nutritional problem in the world.",
        "It is particularly common among young children and women.",
        "Iron is also used to make steel for buildings and bridges.",
        "It causes tiredness, weakness and difficulty concentrating.",
        "Iron supplements and iron-rich foods can usually correct it.",
      ],
      odd: 2,
      why: "Parça demir eksikliği anemisini anlatır. Demirin bina ve köprüler için çelik yapımında kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Food poisoning often occurs when food is not stored at the correct temperature.",
        "Bacteria multiply rapidly in food left at room temperature.",
        "Many people enjoy eating outdoors at picnics in summer.",
        "Keeping food in the fridge slows down their growth.",
        "Reheating food until it is very hot can also kill harmful bacteria.",
      ],
      odd: 2,
      why: "Parça gıda zehirlenmesini ve gıdaların doğru saklanmasını anlatır. İnsanların yazın piknik yapmayı sevdiğini söyleyen III. cümle konu dışıdır.",
    },
  ],
};
