import type { YokdilDeneme } from "./types";

export const FEN_01: YokdilDeneme = {
  no: 1,
  field: "fen",
  vocab: [
    [
      "Engineers had to ---- the design of the bridge after tests showed that it could not withstand strong winds.",
      ["modify", "admire", "abandon", "celebrate", "conceal"],
      "Testler köprünün güçlü rüzgâra dayanamayacağını gösterince tasarımın 'değiştirilmesi' (modify) gerekir. 'abandon' (terk etmek) aşırıdır ve 'had to' ile verilen düzeltme fikrine uymaz; diğerleri anlamsızdır.",
    ],
    [
      "Copper is widely used in electrical wiring because it is an excellent ---- of electricity.",
      ["conductor", "barrier", "consumer", "source", "victim"],
      "Bakırın kablolarda kullanılmasının nedeni elektriği çok iyi 'iletmesidir' (conductor = iletken). 'barrier' (engel) anlamı tersine çevirir; 'source' (kaynak) bakır için yanlıştır.",
    ],
    [
      "The results of the experiment were ----, so the team repeated it several times to make sure there had been no error.",
      ["unexpected", "predictable", "ordinary", "familiar", "accurate"],
      "Deneyin hata olup olmadığını görmek için defalarca tekrarlanması sonuçların 'beklenmedik' (unexpected) olduğunu gösterir. 'predictable', 'ordinary' ve 'familiar' tekrar gerektirmez.",
    ],
    [
      "Scientists hope that new battery technologies will help ---- the dependence on fossil fuels.",
      ["cut down on", "look out for", "stand up for", "take over from", "carry on with"],
      "Yeni pil teknolojilerinin fosil yakıt bağımlılığını 'azaltması' (cut down on) umulur. 'carry on with' (devam etmek) anlamı tersine çevirir; diğerleri bağlama uymaz.",
    ],
    [
      "Water expands when it freezes, which is why ice is ---- dense than liquid water and floats on its surface.",
      ["less", "more", "most", "least", "much"],
      "Donan suyun genleşmesi hacmin arttığını, dolayısıyla yoğunluğun azaldığını gösterir; buz suyun üzerinde yüzdüğü için 'less dense' doğrudur.",
    ],
    [
      "The new telescope is so ---- that it can detect the faint light of galaxies formed shortly after the Big Bang.",
      ["sensitive", "fragile", "ancient", "noisy", "cheap"],
      "Çok sönük ışığı algılayabilmesi teleskobun 'hassas' (sensitive) olduğunu gösterir. 'fragile' (kırılgan) ve 'cheap' (ucuz) algılama yeteneğini açıklamaz.",
    ],
  ],
  grammar: [
    [
      "The first vaccine against smallpox ---- by Edward Jenner in 1796.",
      ["was developed", "developed", "has been developed", "is developed", "had developed"],
      "Aşı geliştirilen şeydir (edilgen) ve olay geçmişte belirli bir yılda olmuştur: 'was developed'.",
    ],
    [
      "If the Earth's average temperature ---- by more than two degrees, many coastal cities could be flooded.",
      ["rises", "rose", "had risen", "will rise", "would rise"],
      "Ana cümlede 'could be flooded' gerçekçi bir olasılık bildirir; Type 1 koşulda if cümlesi Simple Present alır: 'rises'. 'will rise' if cümlesinde kullanılmaz.",
    ],
    [
      "Not until the invention of the microscope ---- able to see bacteria.",
      ["were scientists", "scientists were", "scientists had", "had scientists", "did scientists be"],
      "'Not until …' cümle başına geldiğinde ana cümle devrik olur: 'were scientists able'. 'had scientists able' dil bilgisi açısından yanlıştır.",
    ],
    [
      "Diamonds and graphite are both made of carbon, ---- their properties are completely different.",
      ["yet", "so", "because", "unless", "since"],
      "İkisinin de karbondan oluşmasına RAĞMEN özelliklerinin farklı olması zıtlıktır: 'yet'. 'so' sonuç, 'because' ve 'since' sebep bildirir.",
    ],
    [
      "The researchers are investigating ---- the material can be recycled without losing its strength.",
      ["whether", "what", "which", "that", "unless"],
      "Araştırma bir evet/hayır sorusunu inceler: malzemenin gücünü kaybetmeden geri dönüştürülüp dönüştürülemeyeceği. Bu dolaylı soru 'whether' ile kurulur.",
    ],
    [
      "By the time the spacecraft reaches Jupiter, it ---- more than 600 million kilometres.",
      ["will have travelled", "travelled", "has travelled", "had travelled", "travels"],
      "'By the time + şimdiki zaman' gelecekteki bir anı anlatır; o ana kadar tamamlanmış olacak eylem Future Perfect ile verilir: 'will have travelled'.",
    ],
    [
      "Plastics, ---- can take hundreds of years to break down, are a major source of ocean pollution.",
      ["which", "that", "what", "who", "where"],
      "Virgülle ayrılmış açıklayıcı ilgi cümlesinde nesneler için 'which' kullanılır; 'that' virgülden sonra gelemez.",
    ],
    [
      "The engine is designed ---- less fuel than previous models.",
      ["to consume", "consuming", "consume", "consumed", "to be consumed"],
      "'be designed to do' kalıbı mastar ister: 'designed to consume'. Motor yakıtı tüketen taraf olduğu için edilgen mastar yanlıştır.",
    ],
    [
      "---- carefully the experiment is planned, unexpected problems can still occur.",
      ["However", "Whatever", "Whenever", "Although", "Despite"],
      "'However + zarf/sıfat' 'ne kadar … olursa olsun' anlamı verir: 'However carefully'. 'Although' ve 'Despite' bu sıralamayla kullanılmaz.",
    ],
    [
      "Some metals react ---- with water that they must be stored in oil.",
      ["so violently", "such violent", "too violently", "very violent", "so violent"],
      "'so + zarf + that' yapısı gerekir; fiili (react) niteleyen zarf 'violently' olmalıdır: 'so violently that'.",
    ],
    [
      "The data, ---- from thousands of weather stations, show a clear warming trend.",
      ["collected", "collecting", "having collected", "to collect", "which collected"],
      "Veriler istasyonlardan toplanır (edilgen); kısaltılmış ilgi cümlesi geçmiş ortaçla kurulur: 'collected'. 'which collected' etken anlam verir.",
    ],
    [
      "It is high time that governments ---- serious action to reduce carbon emissions.",
      ["took", "take", "will take", "have taken", "had taken"],
      "'It is high time + özne' kalıbından sonra geçmiş zaman kullanılır ve şimdiki bir gerekliliği anlatır: 'took'.",
    ],
    [
      "Solar panels produce ---- electricity on cloudy days than on sunny ones.",
      ["less", "fewer", "little", "least", "the less"],
      "'electricity' sayılamayan bir isimdir ve 'than' ile karşılaştırma yapılır: 'less'. 'fewer' sayılabilen isimlerle kullanılır.",
    ],
    [
      "Neither the old model nor the new one ---- able to operate at temperatures below minus forty degrees.",
      ["is", "are", "were", "have", "being"],
      "'Neither … nor' yapısında fiil yakındaki özneye uyar; 'the new one' tekil olduğu için 'is' gelir.",
    ],
  ],
  cloze: [
    {
      text:
        "Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. Corals are tiny animals that live in partnership with algae, {1} provide them with food through photosynthesis. When water temperatures rise even slightly above normal, corals expel these algae and turn white, a process known as bleaching. If high temperatures continue for several weeks, the corals may die. {2}, the world has experienced several mass bleaching events in recent decades, {3} large parts of the Great Barrier Reef. Scientists are now testing ways to help reefs survive, such as breeding corals {4} can tolerate warmer water. However, most experts agree that such efforts will fail {5} global greenhouse gas emissions are reduced.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra gelen ilgi cümlesi 'algae' (alg) hakkındadır ve 'provide' fiilinin öznesidir: 'which'. 'who' canlı da olsa insan dışı organizmalar için kullanılmaz.",
        ],
        [
          "(22) ----",
          ["Unfortunately", "Fortunately", "Similarly", "For instance", "In contrast"],
          "Önceki cümle mercanların ölebileceğini söyler; ardından toplu ağarma olayları gelir. Olumsuz bir gelişmeyi tanıtan 'Unfortunately' uygundur.",
        ],
        [
          "(23) ----",
          ["affecting", "affected", "to affect", "affects", "having affected by"],
          "Ağarma olaylarının Büyük Set Resifi'nin geniş bölümlerini 'etkilediği' anlatılır; virgülden sonra etken anlamlı ortaç 'affecting' gelir.",
        ],
        [
          "(24) ----",
          ["that", "where", "whose", "when", "what"],
          "'corals' sonrasındaki tanımlayıcı ilgi cümlesi 'can tolerate' fiilinin öznesini ister: 'that'.",
        ],
        [
          "(25) ----",
          ["unless", "because", "although", "since", "so that"],
          "Uzmanlara göre emisyonlar azaltılmadıkça bu çabalar başarısız olacaktır: 'unless' (-medikçe).",
        ],
      ],
    },
    {
      text:
        "Artificial intelligence systems that can recognise images and understand language have advanced remarkably in the past decade. Much of this progress has come from machine learning, a technique {1} computers learn patterns from large amounts of data rather than following rules written by programmers. {2} these systems can perform some tasks better than humans, they also have important weaknesses. They may make mistakes that a child would never make, and they can reproduce biases {3} in the data they were trained on. Moreover, the largest models require enormous amounts of electricity, {4} raises concerns about their environmental impact. Researchers are therefore working on methods that would make AI systems more reliable, transparent and efficient {5} reducing their usefulness.",
      blanks: [
        [
          "(26) ----",
          ["in which", "which", "that", "whose", "what"],
          "Ardından tam bir cümle gelir (computers learn patterns…); bu nedenle edat + ilgi zamiri 'in which' (bu teknikte) gerekir.",
        ],
        [
          "(27) ----",
          ["Although", "Because", "Unless", "Once", "As long as"],
          "Sistemlerin bazı işlerde insanlardan iyi olmasına RAĞMEN önemli zayıflıkları vardır: 'Although'.",
        ],
        [
          "(28) ----",
          ["present", "presented", "presenting", "to present", "presence"],
          "'biases present in the data' (verilerde mevcut olan önyargılar) yapısında 'present' sıfat olarak 'var olan' anlamını taşır.",
        ],
        [
          "(29) ----",
          ["which", "what", "that", "it", "who"],
          "Virgülden sonra 'which' önceki cümlenin tamamına (çok elektrik gerektirmesine) atıf yapar. 'that' virgülden sonra kullanılmaz.",
        ],
        [
          "(30) ----",
          ["without", "despite", "through", "by", "beyond"],
          "Sistemleri daha güvenilir hâle getirirken kullanışlılıklarını 'azaltmadan' (without reducing) yapmak amaçlanır.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although nuclear power produces very little carbon dioxide, ----.",
      [
        "many people remain concerned about the safety of nuclear plants and their waste",
        "it is used to generate electricity in many countries",
        "the first nuclear power station opened in the 1950s",
        "it relies on the energy released by splitting atoms",
        "it is one of several low-carbon energy sources",
      ],
      "'Although' zıtlık ister: düşük karbon salımı olumlu bir özelliktir, güvenlik ve atık kaygıları ise karşıt görüştür.",
    ],
    [
      "Unless the bridge is repaired before winter, ----.",
      [
        "it may have to be closed to heavy vehicles",
        "it was built more than eighty years ago",
        "engineers inspected it last month",
        "many people crossed it every day",
        "it had been painted several times",
      ],
      "'Unless' (-mezse) gelecek koşulu gelecekte olası bir sonuç ister: köprü ağır araçlara kapatılabilir. Geçmiş zamanlı seçenekler koşulla uyuşmaz.",
    ],
    [
      "Because sound needs a medium such as air to travel through, ----.",
      [
        "it cannot be heard in the vacuum of space",
        "it travels faster in warm air than in cold air",
        "thunder is heard after lightning is seen",
        "musical instruments produce different notes",
        "people talk loudly in noisy places",
      ],
      "Sesin yayılmak için ortama ihtiyaç duymasının doğrudan sonucu, uzay boşluğunda duyulamamasıdır.",
    ],
    [
      "Electric cars produce no exhaust emissions on the road; ----.",
      [
        "however, the electricity used to charge them may still come from fossil fuels",
        "therefore, they are more popular in some countries than others",
        "for example, the first electric cars were built in the nineteenth century",
        "similarly, petrol prices have increased in recent years",
        "in addition, they are usually painted in bright colours",
      ],
      "Noktalı virgülden sonra gelen ifade, ilk cümledeki olumlu bilgiyi sınırlayan bir karşıtlık sunmalıdır: şarj elektriği fosil yakıtlardan gelebilir.",
    ],
    [
      "The researchers used computer simulations ----.",
      [
        "so that they could predict how the material would behave under extreme pressure",
        "which had been built in the laboratory in 1990",
        "although the material is found in many rocks",
        "because the experiment was finished last year",
        "while most of them were working at the university",
      ],
      "Simülasyon kullanmanın amacı, malzemenin aşırı basınç altında nasıl davranacağını tahmin etmektir: 'so that'.",
    ],
    [
      "As the amount of carbon dioxide in the oceans increases, ----.",
      [
        "the water becomes more acidic, threatening shellfish and corals",
        "many species of fish were discovered in the deep sea",
        "the oceans cover about seventy percent of the planet",
        "sailors had to find new routes across the Atlantic",
        "most of the world's oxygen was produced by trees",
      ],
      "'As' burada 'arttıkça' anlamında paralel değişim bildirir: karbondioksit arttıkça su asitleşir. Diğer seçenekler bu ilişkiyi kurmaz.",
    ],
    [
      "The new material is not only extremely light ----.",
      [
        "but also stronger than steel",
        "because it is made in a laboratory",
        "although it is expensive to produce",
        "unless it is exposed to heat",
        "since engineers designed it",
      ],
      "'not only … but also' yapısı tamamlanmalıdır: malzeme hem hafif hem de çelikten güçlüdür.",
    ],
    [
      "Had the warning system been installed earlier, ----.",
      [
        "many lives could have been saved during the tsunami",
        "the tsunami is caused by an earthquake under the sea",
        "the region will experience more earthquakes",
        "scientists study tsunamis in many countries",
        "people living near the coast move inland",
      ],
      "'Had … been installed' devrik Type 3 koşuldur; ana cümle 'could have + V3' ister: pek çok can kurtarılabilirdi.",
    ],
    [
      "Some bacteria can survive in boiling water ----.",
      [
        "which shows that life can exist in extreme environments",
        "while most people boil water before drinking it",
        "who were studied by scientists in Iceland",
        "unless they were discovered in hot springs",
        "so that water boils at one hundred degrees",
      ],
      "'which' önceki cümlenin tamamına atıf yapar: bakterilerin kaynar suda yaşaması, yaşamın aşırı koşullarda var olabileceğini gösterir. 'who' bakteriler için kullanılmaz.",
    ],
    [
      "While renewable energy sources are becoming cheaper, ----.",
      [
        "storing the energy they produce remains a major challenge",
        "solar panels are installed on many rooftops",
        "wind turbines are usually built on hills",
        "they produce electricity from natural sources",
        "many countries have invested in them",
      ],
      "'While' zıtlık bildirir: yenilenebilir enerji ucuzlarken depolama hâlâ büyük bir sorundur. Diğer seçenekler zıtlık kurmaz.",
    ],
    [
      "Satellites allow scientists to monitor deforestation ----.",
      [
        "even in remote areas that are difficult to reach on foot",
        "which has been a problem since ancient times",
        "although trees absorb carbon dioxide",
        "because forests are home to many species",
        "unless the weather was cloudy",
      ],
      "Uyduların sağladığı avantaj, yürüyerek ulaşılması zor uzak bölgelerde bile izleme yapabilmektir.",
    ],
  ],
  enTr: [
    [
      "Scientists have discovered a planet that may contain water, which raises the possibility of life beyond Earth.",
      [
        "Bilim insanları su içerebilecek bir gezegen keşfetti; bu da Dünya dışında yaşam olasılığını gündeme getiriyor.",
        "Bilim insanları, Dünya dışında yaşam olduğunu kanıtlayan sulu bir gezegen keşfetti.",
        "Su içeren bütün gezegenlerde yaşam olduğu bilim insanlarınca kanıtlanmıştır.",
        "Bilim insanları Dünya'daki suyun başka bir gezegenden geldiğini keşfetti.",
        "Dünya dışında yaşam arayan bilim insanları, su bulunmayan bir gezegen keşfetti.",
      ],
      "'may contain' bir olasılıktır; 'raises the possibility' 'olasılığını gündeme getirir' demektir. 'kanıtlayan' ve 'kanıtlanmıştır' kesinlik ekler.",
    ],
    [
      "The faster an object moves, the more energy is needed to stop it.",
      [
        "Bir cisim ne kadar hızlı hareket ederse onu durdurmak için o kadar fazla enerji gerekir.",
        "Hızlı hareket eden cisimler durdurulamaz.",
        "Bir cismi durdurmak için gereken enerji, hızı azaldıkça artar.",
        "Daha fazla enerjiye sahip cisimler daha yavaş hareket eder.",
        "Hareket eden bir cismi durdurmak, onu hızlandırmaktan daha fazla enerji gerektirir.",
      ],
      "'The faster …, the more …' 'ne kadar … o kadar …' karşılaştırmasıdır. Diğer seçenekler orantıyı tersine çevirir ya da farklı bir karşılaştırma yapar.",
    ],
    [
      "Despite decades of research, scientists still do not fully understand how the human brain stores memories.",
      [
        "Onlarca yıllık araştırmaya rağmen bilim insanları insan beyninin anıları nasıl depoladığını hâlâ tam olarak anlamış değil.",
        "Onlarca yıllık araştırma sayesinde bilim insanları beynin anıları nasıl depoladığını çözmüştür.",
        "Bilim insanları insan beyninin anıları depolamadığını onlarca yıldır savunmaktadır.",
        "İnsan beyni üzerine yapılan araştırmalar onlarca yıldır durdurulmuştur.",
        "Bilim insanları anıların beyinde nasıl silindiğini tam olarak bilmektedir.",
      ],
      "'Despite' 'rağmen', 'still do not fully understand' 'hâlâ tam olarak anlamış değil' demektir. 'çözmüştür' anlamı tersine çevirir.",
    ],
    [
      "Most of the plastic that enters the oceans comes from just a few rivers in densely populated regions.",
      [
        "Okyanuslara giren plastiğin çoğu, yoğun nüfuslu bölgelerdeki yalnızca birkaç nehirden gelir.",
        "Yoğun nüfuslu bölgelerdeki nehirlerin çoğu plastikle tamamen kaplanmıştır.",
        "Okyanuslardaki plastik, nehirler yoluyla yoğun nüfuslu bölgelere taşınır.",
        "Plastiğin yalnızca küçük bir kısmı nehirler aracılığıyla okyanuslara ulaşır.",
        "Nüfusun az olduğu bölgelerdeki nehirler okyanuslara daha çok plastik taşır.",
      ],
      "'Most of the plastic' 'plastiğin çoğu', 'just a few rivers' 'yalnızca birkaç nehir' demektir. Diğer seçenekler yönü, oranı ya da bölgeyi değiştirir.",
    ],
    [
      "Unless the batteries are recycled properly, the metals they contain can contaminate soil and water.",
      [
        "Piller uygun şekilde geri dönüştürülmezse içerdikleri metaller toprağı ve suyu kirletebilir.",
        "Pillerin içerdiği metaller geri dönüştürüldüğünde toprağı ve suyu kirletir.",
        "Toprak ve su kirlendiği için piller geri dönüştürülemez.",
        "Pillerdeki metaller toprak ve suyun temizlenmesinde kullanılabilir.",
        "Piller geri dönüştürülse bile içerdikleri metaller toprağı mutlaka kirletir.",
      ],
      "'Unless … recycled properly' '… uygun şekilde geri dönüştürülmezse', 'can contaminate' 'kirletebilir' demektir. Diğer seçenekler koşulu tersine çevirir ya da kesinlik ekler.",
    ],
    [
      "It was not until the twentieth century that scientists realised the universe is expanding.",
      [
        "Bilim insanları evrenin genişlediğini ancak yirminci yüzyılda fark etti.",
        "Bilim insanları evrenin genişlediğini yirminci yüzyıldan çok önce biliyordu.",
        "Evrenin genişlemesi yirminci yüzyılda durmuştur.",
        "Yirminci yüzyıldaki bilim insanları evrenin küçüldüğünü düşünüyordu.",
        "Bilim insanları evrenin ne zaman genişlemeye başladığını yirminci yüzyılda hesapladı.",
      ],
      "'It was not until … that' 'ancak … -de' vurgusudur. Diğer seçenekler zamanı ya da keşfin içeriğini değiştirir.",
    ],
  ],
  trEn: [
    [
      "Deprem bölgelerindeki binaların, sarsıntıya dayanacak biçimde tasarlanması gerekir.",
      [
        "Buildings in earthquake zones need to be designed to withstand shaking.",
        "Buildings in earthquake zones are always destroyed by strong shaking.",
        "Earthquakes are more common in areas where buildings are poorly designed.",
        "Engineers have designed buildings that can prevent earthquakes.",
        "Most buildings in earthquake zones were designed many years ago.",
      ],
      "'tasarlanması gerekir' 'need to be designed', 'sarsıntıya dayanacak biçimde' 'to withstand shaking' karşılığıdır. Diğer seçenekler zorunluluk anlamını kaybeder ya da yeni bilgi ekler.",
    ],
    [
      "Arılar olmasaydı birçok bitki türü tozlaşamaz ve yok olurdu.",
      [
        "Without bees, many plant species would not be pollinated and would die out.",
        "Bees have caused many plant species to die out.",
        "Many plant species do not need bees in order to be pollinated.",
        "Bees will disappear if many plant species die out.",
        "Many plants were pollinated by bees in the past, but not today.",
      ],
      "'olmasaydı … -amaz ve yok olurdu' varsayımsal koşuldur: 'Without bees, … would not be pollinated and would die out'. Diğer seçenekler nedeni değiştirir ya da koşulu kaldırır.",
    ],
    [
      "Yapay zekâ, doktorların tıbbi görüntülerdeki küçük tümörleri daha erken fark etmesine yardımcı olabilir.",
      [
        "Artificial intelligence can help doctors notice small tumours in medical images earlier.",
        "Artificial intelligence has replaced doctors in examining medical images.",
        "Doctors use medical images to teach artificial intelligence about tumours.",
        "Small tumours cannot be seen in medical images without artificial intelligence.",
        "Artificial intelligence causes doctors to make more mistakes with medical images.",
      ],
      "'yardımcı olabilir' 'can help', 'daha erken fark etmesine' 'notice … earlier' karşılığıdır. Doktorların yerini alması veya olmazsa görülememesi gibi iddialar kaynakta yoktur.",
    ],
    [
      "Işık, boşlukta saniyede yaklaşık 300.000 kilometre hızla ilerler.",
      [
        "Light travels at about 300,000 kilometres per second in a vacuum.",
        "Light travels faster in air than in a vacuum.",
        "Nothing can travel at 300,000 kilometres per second in a vacuum.",
        "The speed of light in a vacuum has never been measured.",
        "Light takes about 300,000 seconds to travel through a vacuum.",
      ],
      "Kaynak cümle ışığın boşluktaki hızını verir: 'about 300,000 kilometres per second in a vacuum'. Diğer seçenekler karşılaştırma ekler ya da birimleri karıştırır.",
    ],
    [
      "Araştırmacılar, yeni alaşımın yüksek sıcaklıklarda bile şeklini koruduğunu buldu.",
      [
        "The researchers found that the new alloy keeps its shape even at high temperatures.",
        "The researchers found that the new alloy melts at high temperatures.",
        "The new alloy was found by researchers who work at high temperatures.",
        "The researchers changed the shape of the new alloy using high temperatures.",
        "High temperatures are needed to produce the new alloy, according to the researchers.",
      ],
      "'yüksek sıcaklıklarda bile şeklini koruduğunu' 'keeps its shape even at high temperatures' karşılığıdır. Diğer seçenekler erime, şekil değiştirme ya da üretim koşulu gibi farklı anlamlar verir.",
    ],
    [
      "İklim değişikliğinin etkileri, en çok ona en az katkıda bulunan ülkelerde hissedilmektedir.",
      [
        "The effects of climate change are felt most in the countries that have contributed least to it.",
        "The countries that contribute most to climate change feel its effects most strongly.",
        "Climate change has affected all countries equally.",
        "Countries that feel the effects of climate change have stopped contributing to it.",
        "The effects of climate change are least visible in poor countries.",
      ],
      "Kaynak cümle bir çelişkiyi vurgular: etkiler en az katkı yapan ülkelerde en çok hissedilir. Diğer seçenekler bu karşıtlığı tersine çevirir ya da ortadan kaldırır.",
    ],
  ],
  reading: [
    {
      text:
        "Lithium-ion batteries power everything from mobile phones to electric cars. They work by moving lithium ions between two electrodes as the battery charges and discharges. Although they store a great deal of energy for their weight, they have several drawbacks. Lithium and cobalt, two of their key ingredients, are mined in only a few countries, sometimes under poor working conditions. The batteries can also catch fire if they are damaged or overheated. For these reasons, researchers are exploring alternatives. Sodium-ion batteries, for example, use an element that is cheap and widely available in seawater, although they currently store less energy than lithium-ion batteries. Solid-state batteries, which replace the liquid inside conventional batteries with a solid material, promise to be safer and more powerful, but they remain difficult to manufacture on a large scale.",
      questions: [
        [
          "According to the passage, one advantage of lithium-ion batteries is that they ----.",
          [
            "store a large amount of energy relative to their weight",
            "never overheat or catch fire",
            "are made from cheap materials that are found in every country",
            "are much cheaper to produce than sodium-ion batteries",
            "contain no liquid materials",
          ],
          "Parça lityum iyon pillerin ağırlıklarına göre çok enerji depoladığını söyler. Alev alabildikleri ve hammaddelerinin birkaç ülkede çıkarıldığı belirtildiğinden diğer seçenekler yanlıştır.",
        ],
        [
          "It is stated in the passage that sodium-ion batteries ----.",
          [
            "use a cheap and abundant element but hold less energy at present",
            "are already more powerful and safer than lithium-ion batteries",
            "are difficult to manufacture on a large scale",
            "replace the liquid in batteries with a solid material",
            "are mined under poor working conditions",
          ],
          "Sodyum iyon piller ucuz ve deniz suyunda bol bulunan bir element kullanır, ancak şu an daha az enerji depolar. Katı hâl özelliği ve üretim zorluğu katı hâl pillerine aittir.",
        ],
        [
          "The passage is mainly concerned with ----.",
          [
            "the limitations of current batteries and possible alternatives",
            "the history and growth of the mobile phone industry",
            "how electric cars are designed and manufactured in factories",
            "the dangers of mining in general",
            "why lithium is found only in seawater",
          ],
          "Parça lityum iyon pillerin dezavantajlarını anlatıp sodyum iyon ve katı hâl gibi alternatifleri tanıtır; ana konu budur.",
        ],
      ],
    },
    {
      text:
        "For centuries, people believed that the continents had always been in the same positions. In 1912, the German scientist Alfred Wegener proposed that they had once formed a single giant landmass, which he called Pangaea, and had slowly drifted apart. He pointed out that the coastlines of South America and Africa fit together like pieces of a puzzle and that similar fossils were found on both continents. However, Wegener could not explain what force could move entire continents, and most geologists rejected his theory. It was only in the 1960s, when scientists discovered that new ocean floor is constantly being created along underwater mountain ranges, that his ideas gained acceptance. Today, the theory of plate tectonics explains not only the movement of continents but also the location of earthquakes and volcanoes.",
      questions: [
        [
          "According to the passage, Wegener supported his theory with evidence from ----.",
          [
            "matching coastlines and similar fossils on different continents",
            "detailed measurements of the ocean floor made in the 1960s",
            "records of earthquakes and volcanoes",
            "laboratory experiments that showed how continents move",
            "maps drawn by ancient sailors",
          ],
          "Wegener, Güney Amerika ile Afrika kıyılarının yapboz gibi uyduğunu ve iki kıtada benzer fosiller bulunduğunu göstermiştir. Okyanus tabanı keşfi ise 1960'larda, ondan sonra yapılmıştır.",
        ],
        [
          "Most geologists rejected Wegener's theory at first mainly because ----.",
          [
            "he could not explain the force that moved the continents",
            "the fossils he described were later shown to be fake",
            "the coastlines of the continents did not match",
            "he was not a well-known or respected scientist in Germany",
            "plate tectonics had already been accepted",
          ],
          "Parça, Wegener'in kıtaları hareket ettiren kuvveti açıklayamadığını ve bu yüzden teorisinin reddedildiğini belirtir.",
        ],
        [
          "It can be inferred from the passage that the theory of plate tectonics ----.",
          [
            "developed from Wegener's ideas once a mechanism was found",
            "was proposed and accepted long before Wegener's theory",
            "has since been rejected by most modern geologists",
            "explains only the shape of the continents",
            "was developed by Wegener himself in 1912",
          ],
          "Wegener'in fikirleri, okyanus tabanının sürekli oluştuğunun keşfiyle (bir mekanizma bulunmasıyla) kabul görmüş ve bugünkü levha tektoniği teorisine dönüşmüştür.",
        ],
      ],
    },
    {
      text:
        "Light pollution, the excessive or misdirected use of artificial light at night, is a growing environmental problem. It is estimated that more than a third of humanity can no longer see the Milky Way from where they live. The effects extend far beyond astronomy. Many animals rely on natural patterns of light and darkness. Newly hatched sea turtles, for instance, find the sea by moving towards the brighter horizon over the water, but artificial lights on beaches can lead them inland, where they die. Migrating birds can also become disoriented by brightly lit buildings. Unlike many forms of pollution, however, light pollution can be reduced quickly and cheaply. Shielding street lamps so that they point downwards and switching off unnecessary lights can make a significant difference almost immediately.",
      questions: [
        [
          "The example of sea turtles shows that artificial light ----.",
          [
            "can lead animals away from their natural habitat",
            "helps young turtles reach the sea faster",
            "has no effect on animals that live near the sea",
            "is the main cause of turtle extinction",
            "attracts birds towards beaches",
          ],
          "Yavru kaplumbağalar denizi parlak ufka doğru giderek bulur; kumsaldaki yapay ışıklar onları karaya yönlendirerek ölümlerine yol açar.",
        ],
        [
          "According to the passage, light pollution differs from many other forms of pollution in that it ----.",
          [
            "can be reduced rapidly and at low cost",
            "affects only astronomers",
            "cannot be measured",
            "has existed only for a few years",
            "is caused mainly by animals",
          ],
          "Parça, birçok kirlilik türünün aksine ışık kirliliğinin hızlı ve ucuz biçimde azaltılabileceğini söyler.",
        ],
        [
          "The writer mentions the Milky Way in order to ----.",
          [
            "illustrate how widespread light pollution has become",
            "explain how stars produce light",
            "argue that astronomy is more important than ecology",
            "describe the night sky in ancient times",
            "show that migrating birds use the stars",
          ],
          "İnsanlığın üçte birinden fazlasının Samanyolu'nu göremediği bilgisi, ışık kirliliğinin ne kadar yaygın olduğunu göstermek için verilmiştir.",
        ],
      ],
    },
    {
      text:
        "Desalination, the process of removing salt from seawater, provides drinking water for millions of people in dry regions such as the Middle East. The most common method today is reverse osmosis, in which seawater is pushed at high pressure through membranes that allow water molecules to pass but block salt. Although the technology has become far more efficient over the past thirty years, it still consumes large amounts of energy. Another problem is brine, the highly salty water left over after desalination. When it is released back into the sea, it can harm marine life near the outlet. Engineers are therefore developing ways to power plants with solar energy and to find uses for brine, for example by extracting valuable minerals from it.",
      questions: [
        [
          "According to the passage, reverse osmosis works by ----.",
          [
            "forcing seawater through membranes that hold back salt",
            "boiling large amounts of seawater and collecting the steam",
            "adding chemicals that remove salt",
            "mixing seawater with large amounts of fresh water from rivers",
            "freezing seawater so that salt separates",
          ],
          "Ters ozmozda deniz suyu yüksek basınçla, su moleküllerini geçirip tuzu tutan zarlardan geçirilir.",
        ],
        [
          "One environmental problem of desalination mentioned in the passage is that ----.",
          [
            "the salty waste it produces can damage sea life",
            "it reduces the amount of rain in dry regions",
            "it removes all minerals from the sea",
            "it causes sea levels to fall",
            "it uses too much drinking water",
          ],
          "Parça, tuzdan arındırma sonrası kalan çok tuzlu suyun (brine) denize bırakıldığında çıkış noktası yakınındaki deniz canlılarına zarar verebileceğini belirtir.",
        ],
        [
          "It can be understood from the passage that engineers are trying to ----.",
          [
            "make desalination less harmful and less dependent on conventional energy",
            "stop using desalination completely in the dry regions of the Middle East",
            "increase the amount of brine produced",
            "replace modern membranes with older and simpler technologies",
            "make seawater even saltier",
          ],
          "Mühendisler tesisleri güneş enerjisiyle çalıştırmaya ve tuzlu atığa kullanım alanı bulmaya çalışmaktadır; amaç süreci çevre açısından daha zararsız ve daha az enerji bağımlı hâle getirmektir.",
        ],
      ],
    },
    {
      text:
        "Quantum computers operate on principles very different from those of ordinary computers. Whereas a classical bit can be either 0 or 1, a quantum bit, or qubit, can exist in a combination of both states at the same time. In theory, this allows quantum computers to solve certain problems, such as simulating molecules or breaking some types of encryption, far faster than any classical machine. In practice, however, qubits are extremely fragile. Even tiny vibrations or changes in temperature can cause them to lose their quantum state, introducing errors. Most current quantum computers must therefore be cooled to temperatures close to absolute zero. While companies and governments are investing heavily in the field, many experts believe that practical, large-scale quantum computers are still years or even decades away.",
      questions: [
        [
          "According to the passage, a qubit differs from a classical bit in that it ----.",
          [
            "can represent 0 and 1 simultaneously",
            "can only be 0 or 1",
            "does not need electricity to work",
            "is much easier to keep stable",
            "can be used only for encryption",
          ],
          "Klasik bit 0 ya da 1 olabilirken kübit aynı anda iki durumun bileşiminde bulunabilir.",
        ],
        [
          "Quantum computers must be kept extremely cold because ----.",
          [
            "small disturbances can make qubits lose their quantum state",
            "high temperatures make them work too fast",
            "they produce a great deal of heat when switched off",
            "cold temperatures make encryption easier to break",
            "classical computers also require low temperatures",
          ],
          "Parçaya göre küçük titreşimler veya sıcaklık değişimleri kübitlerin kuantum durumunu kaybetmesine neden olur; bu yüzden mutlak sıfıra yakın soğutma gerekir.",
        ],
        [
          "The writer's view of the future of quantum computing can best be described as ----.",
          [
            "cautious, suggesting that practical machines may take a long time to develop",
            "highly optimistic, expecting large machines within months",
            "completely negative, claiming the technology will never work",
            "indifferent to the large investments being made by companies",
            "critical of governments for supporting the field",
          ],
          "Yazar büyük yatırımlardan söz etse de uzmanların pratik makinelerin yıllar, hatta onlarca yıl uzakta olduğunu düşündüğünü aktarır; bu temkinli bir tutumdur.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Volcanic eruptions can affect the climate of the entire planet. ---- These particles reflect sunlight back into space, causing global temperatures to fall. After the eruption of Mount Pinatubo in 1991, for example, average temperatures dropped by about half a degree for nearly two years.",
      [
        "Large eruptions can send huge amounts of ash and sulphur gases high into the atmosphere.",
        "Some volcanoes have been dormant for thousands of years.",
        "Many people live near active volcanoes because the soil is fertile.",
        "Volcanoes are also found on other planets, such as Mars.",
        "Lava can reach temperatures of more than 1,000 degrees.",
      ],
      "Sonraki cümle 'These particles' diye başlar; boşluktaki cümle atmosfere taşınan kül ve kükürt gazlarından söz etmelidir.",
    ],
    [
      "Recycling aluminium is one of the most effective ways to save energy. ---- In addition, aluminium can be recycled again and again without losing its quality, which makes it an ideal material for drink cans.",
      [
        "Producing aluminium from recycled cans uses about 95 percent less energy than making it from raw ore.",
        "Aluminium is the most common metal in the Earth's crust.",
        "Many countries have introduced deposits on plastic bottles.",
        "Aluminium was once more valuable than gold.",
        "Some people prefer drinks in glass bottles.",
      ],
      "İlk cümle geri dönüşümün enerji tasarrufu sağladığını söyler; boşlukta bunu rakamla destekleyen cümle gelmelidir. 'In addition' ise ikinci bir avantaja geçer.",
    ],
    [
      "---- When they are exposed to stress, such as drought or insect attacks, some plants release chemicals into the air. Neighbouring plants detect these signals and begin to produce their own defensive substances.",
      [
        "Plants may not have nervous systems, but they can still communicate with each other.",
        "Most plants need sunlight, water and carbon dioxide to grow.",
        "Farmers use pesticides to protect their crops from insects.",
        "Drought has become more frequent in many regions.",
        "Some plants can live for thousands of years.",
      ],
      "Paragraf bitkilerin kimyasal sinyallerle birbirine haber vermesini anlatır; açılış cümlesi bu iletişim fikrini tanıtmalıdır.",
    ],
    [
      "The Hubble Space Telescope orbits about 540 kilometres above the Earth's surface. ---- As a result, it can produce much sharper images of distant galaxies than telescopes on the ground.",
      [
        "From this position, its view is not blurred by the atmosphere.",
        "It was named after the astronomer Edwin Hubble.",
        "Astronauts have visited it several times to repair it.",
        "It was launched in 1990 by the space shuttle Discovery.",
        "Many people around the world have seen its images.",
      ],
      "'As a result, it can produce much sharper images' bir neden gerektirir: atmosferin üstünde olduğu için görüntünün bulanıklaşmaması.",
    ],
    [
      "Antibiotics are added to the feed of farm animals in many countries to make them grow faster. ---- Scientists warn that this practice contributes to the spread of drug-resistant bacteria, which can then pass to humans through food or the environment.",
      [
        "However, this widespread use comes at a cost.",
        "Farm animals are usually kept in large groups.",
        "Many people have stopped eating meat for ethical reasons.",
        "Antibiotics were first discovered in 1928.",
        "Some farmers grow their own animal feed.",
      ],
      "Boşluk, hayvan yemine antibiyotik eklenmesinden bu uygulamanın zararına geçişi sağlamalıdır: 'However, this widespread use comes at a cost.'",
    ],
    [
      "Geothermal energy uses heat from inside the Earth to generate electricity and warm buildings. ---- Iceland, which sits on a boundary between two tectonic plates, obtains about a quarter of its electricity and most of its heating from geothermal sources.",
      [
        "It is especially useful in regions with high volcanic activity.",
        "Coal was the main source of energy in the nineteenth century.",
        "Solar panels work best in sunny countries.",
        "Many homes in Iceland are painted in bright colours.",
        "The Earth's core is mainly made of iron and nickel.",
      ],
      "Son cümledeki İzlanda örneği volkanik etkinliği yüksek bir bölgeyi gösterir; boşlukta bu örneği hazırlayan genel cümle gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Glaciers store about 70 percent of the world's fresh water.",
        "As global temperatures rise, many of them are melting rapidly.",
        "This contributes to rising sea levels around the world.",
        "Polar bears are excellent swimmers.",
        "In some regions, the loss of glaciers also threatens water supplies for agriculture.",
      ],
      odd: 3,
      why: "Parça buzulların erimesini ve sonuçlarını anlatır. Kutup ayılarının iyi yüzücü olduğunu söyleyen IV. cümle konuyla ilgisizdir.",
    },
    {
      sentences: [
        "3D printing builds objects layer by layer from a digital design.",
        "The technology is now used to make everything from aircraft parts to medical implants.",
        "Traditional printers use ink cartridges that must be replaced regularly.",
        "In medicine, it allows doctors to create implants that fit a patient's body exactly.",
        "Some researchers are even trying to print living tissue.",
      ],
      odd: 2,
      why: "Parça 3B yazıcıların kullanım alanlarını anlatır. Geleneksel yazıcıların mürekkep kartuşlarından söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Microplastics are tiny pieces of plastic less than five millimetres long.",
        "They have been found in oceans, soil, drinking water and even human blood.",
        "Glass bottles can be reused many times.",
        "Scientists are still studying how they affect human health.",
        "Some early studies suggest they may cause inflammation in the body.",
      ],
      odd: 2,
      why: "Parça mikroplastiklerin yayılımını ve sağlık etkilerini anlatır. Cam şişelerin tekrar kullanılabildiğini söyleyen III. cümle konunun dışındadır; IV. cümledeki 'they' de mikroplastiklere bağlanır.",
    },
    {
      sentences: [
        "The human genome contains about three billion pairs of chemical units.",
        "Reading the entire sequence for the first time took more than a decade.",
        "Today, the same task can be completed in a single day.",
        "Many people enjoy learning about their family history.",
        "This dramatic fall in cost has opened new possibilities for personalised medicine.",
      ],
      odd: 3,
      why: "Parça genom dizilemenin hızlanmasını ve tıbba etkisini anlatır. Aile geçmişini öğrenmekten söz eden IV. cümle akışı keser; V. cümledeki 'This dramatic fall' III. cümleye bağlanır.",
    },
    {
      sentences: [
        "Wind turbines convert the energy of moving air into electricity.",
        "Offshore turbines can be larger than those on land because they do not face the same space limits.",
        "Winds at sea are also stronger and more consistent.",
        "As a result, offshore wind farms produce more electricity per turbine.",
        "Windmills were used to grind grain in medieval Europe.",
      ],
      odd: 4,
      why: "Parça açık deniz rüzgâr türbinlerinin avantajlarını anlatır. Orta Çağ'da tahıl öğütmek için kullanılan yel değirmenlerinden söz eden V. cümle tarihsel ve ilgisizdir.",
    },
    {
      sentences: [
        "Earthquakes cannot yet be predicted with any accuracy.",
        "However, early warning systems can detect the first waves of an earthquake.",
        "They can then send alerts a few seconds before strong shaking arrives.",
        "These seconds allow trains to stop and people to take cover.",
        "Mount Everest is the highest mountain in the world.",
      ],
      odd: 4,
      why: "Parça deprem erken uyarı sistemlerinin işleyişini anlatır. Everest'in en yüksek dağ olduğunu söyleyen V. cümle konuyla ilgisizdir.",
    },
  ],
};
