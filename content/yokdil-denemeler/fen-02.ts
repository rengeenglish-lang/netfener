import type { YokdilDeneme } from "./types";

export const FEN_02: YokdilDeneme = {
  no: 2,
  field: "fen",
  vocab: [
    [
      "Scientists are trying to ---- the amount of carbon dioxide released by power plants by capturing it and storing it underground.",
      ["reduce", "increase", "celebrate", "imitate", "predict"],
      "Karbondioksiti yakalayıp yer altında depolamanın amacı salınan miktarı 'azaltmaktır' (reduce). 'increase' anlamı tersine çevirir.",
    ],
    [
      "The bridge collapsed because the steel cables had been weakened by ---- over many years.",
      ["corrosion", "decoration", "inspection", "celebration", "ventilation"],
      "Çelik kabloları yıllar içinde zayıflatan süreç 'korozyon'dur (paslanma). 'inspection' (denetim) zayıflatmaz; diğerleri anlamsızdır.",
    ],
    [
      "Because the experiment produced ---- results each time it was repeated, the team was confident in its conclusions.",
      ["consistent", "contradictory", "random", "unexpected", "incomplete"],
      "Ekibin sonuçlarından emin olması, her tekrarda 'tutarlı' (consistent) sonuçlar alındığını gösterir. 'contradictory' ve 'random' güveni zedeler.",
    ],
    [
      "Engineers had to ---- the launch of the rocket because of strong winds at the launch site.",
      ["call off", "set up", "take off", "look into", "bring about"],
      "Güçlü rüzgâr nedeniyle fırlatmanın 'iptal edilmesi' (call off) gerekir. 'take off' (havalanmak) nesne almaz bu anlamda; 'set up' (kurmak) uygun değildir.",
    ],
    [
      "Some species of bacteria are remarkably ---- and can survive extreme heat, cold and radiation.",
      ["resilient", "fragile", "visible", "harmless", "rare"],
      "Aşırı sıcak, soğuk ve radyasyona dayanabilen bakteriler 'dayanıklı'dır (resilient). 'fragile' (kırılgan) anlamı tersine çevirir.",
    ],
    [
      "The new material is extremely light, ---- making it ideal for use in aircraft.",
      ["thus", "although", "unless", "whereas", "instead"],
      "Hafifliğin 'böylece' malzemeyi uçaklar için ideal kıldığı anlatılır: 'thus'. 'although' ve 'whereas' zıtlık bildirir.",
    ],
  ],
  grammar: [
    [
      "The researchers ---- the effects of the drug on mice for three years before they began human trials.",
      ["had been studying", "have been studying", "are studying", "will study", "study"],
      "İnsan deneylerinden önce üç yıl süren ve o ana kadar devam eden eylem Past Perfect Continuous ile verilir: 'had been studying'.",
    ],
    [
      "If the Moon did not exist, the Earth's tides ---- much weaker.",
      ["would be", "will be", "were", "would have been", "are"],
      "Şimdiki gerçek dışı durum (Type 2): if + Past, ana cümle 'would + V1': 'would be'.",
    ],
    [
      "The robot is equipped with sensors ---- allow it to detect obstacles in its path.",
      ["that", "what", "where", "whose", "who"],
      "'sensors' sonrası tanımlayıcı ilgi cümlesi 'allow' fiilinin öznesini ister: 'that'.",
    ],
    [
      "---- the high cost of the equipment, few laboratories can afford it.",
      ["Due to", "Although", "Despite", "Unless", "So that"],
      "Ardından isim öbeği gelir ve sebep bildirilir: 'Due to'. 'Despite' zıtlık bildirir; 'Although' cümle ister.",
    ],
    [
      "Water ---- at 100 degrees Celsius at sea level.",
      ["boils", "is boiling", "has boiled", "boiled", "will have boiled"],
      "Bilimsel genel gerçekler Simple Present ile anlatılır: 'boils'.",
    ],
    [
      "The data must be checked carefully ---- any errors affect the final results.",
      ["before", "after", "since", "unless", "so"],
      "Hataların sonuçları etkilemesinden 'önce' veriler kontrol edilmelidir: 'before'.",
    ],
    [
      "Not only ---- faster than previous models, but it also uses less energy.",
      ["is the new processor", "the new processor is", "does the new processor", "the new processor does", "has the new processor"],
      "'Not only' cümle başına geldiğinde devrik yapı gerekir; 'be' fiiliyle 'is the new processor' olur.",
    ],
    [
      "The engineers recommended that the old pipes ---- before winter.",
      ["be replaced", "are replaced", "will be replaced", "replaced", "have replaced"],
      "'recommend that' sonrası subjunctive gelir; borular değiştirilecek şeyler olduğu için edilgen: 'be replaced'.",
    ],
    [
      "This is the first time that astronomers ---- a planet orbiting three stars.",
      ["have observed", "observed", "had observed", "observe", "are observing"],
      "'This is the first time that …' kalıbı Present Perfect ister: 'have observed'.",
    ],
    [
      "The volcano, ---- last eruption occurred in 1980, is now being closely monitored.",
      ["whose", "which", "that", "where", "when"],
      "Volkanın son patlaması anlatılır; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Scientists still do not know exactly ---- dark matter is made of.",
      ["what", "that", "which", "whether", "how"],
      "'be made of' yapısının nesnesi eksiktir; dolaylı soru 'what' ile kurulur: 'what dark matter is made of'.",
    ],
    [
      "The faster a car travels, ---- fuel it consumes.",
      ["the more", "more", "the most", "most", "the much"],
      "'The faster …, the more …' karşılaştırma kalıbı: araba ne kadar hızlı giderse o kadar çok yakıt tüketir.",
    ],
    [
      "The samples ---- to the laboratory as soon as they had been collected.",
      ["were sent", "sent", "have sent", "are sending", "had sent"],
      "Örnekler gönderilen şeylerdir (edilgen) ve geçmişte olmuştur: 'were sent'.",
    ],
    [
      "Electric vehicles are becoming popular, ---- their batteries are still expensive.",
      ["even though", "because", "so that", "in order to", "as a result"],
      "Popüler olmalarına rağmen pillerin pahalı olması zıtlıktır: 'even though'.",
    ],
  ],
  cloze: [
    {
      text:
        "Photosynthesis is the process by which plants use sunlight to convert carbon dioxide and water into glucose and oxygen. It takes place mainly in the leaves, {1} contain a green pigment called chlorophyll. Chlorophyll absorbs light energy, which is then used to power a series of chemical reactions. The oxygen released as a by-product is essential for most life on Earth. {2}, photosynthesis removes carbon dioxide from the atmosphere, {3} helps to regulate the planet's climate. Scientists are now trying to improve the efficiency of photosynthesis in crops {4} increase food production. If they succeed, farmers could grow more food on the same amount of land, {5} would reduce the pressure to clear forests.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "where", "what", "whose"],
          "Virgülden sonra 'the leaves' hakkında bilgi veren ve 'contain' fiilinin öznesi olan ilgi zamiri 'which'tir.",
        ],
        [
          "(22) ----",
          ["In addition", "However", "Instead", "Otherwise", "In contrast"],
          "Fotosentezin bir başka yararı eklenir: 'In addition'.",
        ],
        [
          "(23) ----",
          ["which", "that", "what", "it", "who"],
          "Virgülden sonra 'which' önceki cümlenin tamamına atıf yapar: karbondioksiti uzaklaştırmak iklimi düzenlemeye yardım eder.",
        ],
        [
          "(24) ----",
          ["in order to", "so that", "because of", "in spite of", "unless"],
          "Verimliliği artırmanın amacı gıda üretimini artırmaktır; ardından yalın fiil geldiği için 'in order to'.",
        ],
        [
          "(25) ----",
          ["which", "who", "that", "what", "where"],
          "Virgülden sonra 'which' önceki durumun tamamına atıf yapar.",
        ],
      ],
    },
    {
      text:
        "Antibiotic-resistant bacteria are one of the greatest threats to modern medicine. Bacteria become resistant through natural selection: when an antibiotic is used, the few bacteria {1} survive pass on their resistance to the next generation. The overuse of antibiotics in both medicine and agriculture has accelerated this process. {2} new antibiotics are developed, many common infections could once again become life-threatening. Unfortunately, pharmaceutical companies have little incentive to invest in such research, {3} new antibiotics are used sparingly and therefore generate little profit. Scientists are exploring alternatives, {4} viruses that infect and kill bacteria. Some researchers believe that these 'phage therapies' could become an important tool, {5} more clinical trials are needed.",
      blanks: [
        [
          "(26) ----",
          ["that", "what", "where", "whose", "when"],
          "'the few bacteria' sonrası 'survive' fiilinin öznesini isteyen tanımlayıcı ilgi cümlesi: 'that'.",
        ],
        [
          "(27) ----",
          ["Unless", "Because", "Although", "Since", "As"],
          "Yeni antibiyotikler geliştirilmedikçe enfeksiyonlar yeniden ölümcül olabilir: 'Unless'.",
        ],
        [
          "(28) ----",
          ["since", "although", "unless", "so that", "while"],
          "Şirketlerin araştırmaya yatırım yapmamasının nedeni yeni antibiyotiklerin az kullanılması ve az kâr getirmesidir: 'since'.",
        ],
        [
          "(29) ----",
          ["such as", "instead of", "because of", "rather than", "apart from"],
          "Alternatiflere bir örnek verilir: bakterileri öldüren virüsler: 'such as'.",
        ],
        [
          "(30) ----",
          ["although", "because", "so", "unless", "therefore"],
          "Faj tedavisinin önemli olabileceği düşünülse de daha fazla klinik deney gerektiği zıtlığı 'although' ile kurulur.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although solar energy is abundant, ----.",
      [
        "it cannot be produced at night without storage systems",
        "it comes from the light and heat of the Sun",
        "solar panels are now installed on many new buildings",
        "it is a renewable source of energy",
        "many countries invest in it",
      ],
      "'Although' zıtlık ister: güneş enerjisi bol olsa da gece depolama olmadan üretilemez.",
    ],
    [
      "If the polar ice sheets continue to melt, ----.",
      [
        "sea levels will rise and threaten coastal cities",
        "the Earth was much colder during the last ice age",
        "polar bears had lived on the ice",
        "scientists measured the thickness of the ice last year",
        "the ice would have been thicker",
      ],
      "Type 1 koşul ana cümlede 'will + V1' ister: deniz seviyesi yükselecektir.",
    ],
    [
      "Engineers use computer models ----.",
      [
        "to test how structures will respond to earthquakes before they are built",
        "which were first developed by universities in the 1970s",
        "although most modern buildings are made of concrete",
        "because earthquakes are common in Japan",
        "while the bridge was being painted",
      ],
      "Bilgisayar modellerinin amacı yapıların depreme tepkisini inşa edilmeden test etmektir; mastar amacı bildirir.",
    ],
    [
      "Because light travels faster than sound, ----.",
      [
        "we see lightning before we hear thunder",
        "sound cannot travel through water",
        "light is used in fibre-optic cables",
        "thunderstorms are common in summer",
        "the speed of sound depends on temperature",
      ],
      "Işığın sesten hızlı olmasının doğrudan sonucu şimşeği gök gürültüsünden önce görmemizdir.",
    ],
    [
      "While some metals rust easily when exposed to moisture, ----.",
      [
        "others, such as gold, remain unaffected for centuries",
        "iron is used to make steel for bridges and buildings",
        "rust is a reddish-brown substance that forms on iron",
        "water is made of hydrogen and oxygen",
        "many tools are made of metal",
      ],
      "'While' zıtlık bildirir: bazı metaller kolay paslanırken altın gibi diğerleri yüzyıllarca etkilenmez.",
    ],
    [
      "The telescope was placed on a high mountain ----.",
      [
        "so that the atmosphere would interfere less with its observations",
        "which was covered with thick snow for most of the winter",
        "although the road to the summit was very narrow",
        "because astronomers like mountains",
        "unless the weather was clear",
      ],
      "Teleskobun yüksek bir dağa yerleştirilmesinin amacı atmosferin gözlemleri daha az etkilemesidir: 'so that'.",
    ],
    [
      "Unless new sources of fresh water are found, ----.",
      [
        "many regions may face severe shortages in the coming decades",
        "people drank water directly from rivers and lakes in the past",
        "most of the Earth's water is salty",
        "water boils at one hundred degrees",
        "farmers had used too much water",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: birçok bölge ciddi su sıkıntısı yaşayabilir.",
    ],
    [
      "As the temperature of a gas increases, ----.",
      [
        "its molecules move faster",
        "gases were studied by Boyle",
        "the gas had been stored in a container",
        "oxygen is a colourless gas",
        "scientists use thermometers",
      ],
      "'As' paralel bir değişim bildirir: sıcaklık arttıkça moleküller daha hızlı hareket eder.",
    ],
    [
      "Even though the spacecraft lost contact with Earth, ----.",
      [
        "it continued to collect data, which was later recovered",
        "it was launched from a base in French Guiana in 2015",
        "it carried several scientific instruments and cameras",
        "space travel is very expensive",
        "it was designed by a team of engineers",
      ],
      "'Even though' beklenmedik bir sonuç gerektirir: bağlantı kesilse de uzay aracı veri toplamaya devam etti.",
    ],
    [
      "Many electronic devices contain rare metals ----.",
      [
        "which are difficult and costly to extract",
        "because phones are used every day",
        "although they are made in factories",
        "so that people can buy them",
        "unless they are recycled",
      ],
      "Nadir metaller hakkında bilgi veren 'which' cümlesi, çıkarılmalarının zor ve pahalı olduğunu belirtir.",
    ],
    [
      "Just as the heart pumps blood around the body, ----.",
      [
        "a pump moves water through a building's pipes",
        "the lungs need a steady supply of oxygen to function",
        "blood carries nutrients and oxygen to the body's cells",
        "exercise strengthens the heart",
        "engineers study the human body",
      ],
      "'Just as … ,' bir benzetme kurar ve ikinci yarıda paralel bir işlev gerektirir: kalp kanı nasıl pompalıyorsa pompa da suyu borularda öyle hareket ettirir.",
    ],
  ],
  enTr: [
    [
      "The faster a planet rotates, the shorter its day becomes.",
      [
        "Bir gezegen ne kadar hızlı dönerse günü o kadar kısa olur.",
        "Hızlı dönen gezegenlerde günler daha uzundur.",
        "Bir gezegenin günü kısaldıkça dönüşü yavaşlar.",
        "Gezegenlerin dönüş hızı günlerin uzunluğunu etkilemez.",
        "Bir gezegen yavaş dönerse günü kısa olur.",
      ],
      "'The faster …, the shorter …' 'ne kadar … o kadar …' karşılaştırmasıdır. Diğer seçenekler orantıyı tersine çevirir.",
    ],
    [
      "Researchers have developed a sensor that can detect tiny amounts of toxic gases in the air.",
      [
        "Araştırmacılar havadaki çok küçük miktarlardaki zehirli gazları saptayabilen bir sensör geliştirdi.",
        "Araştırmacılar havadaki zehirli gazları ortadan kaldıran bir cihaz geliştirdi.",
        "Havadaki zehirli gazlar sensörlerin çalışmasını engellemektedir.",
        "Sensörler büyük miktarda zehirli gaz üretmektedir.",
        "Araştırmacılar zehirli gazların küçük miktarlarda zararsız olduğunu buldu.",
      ],
      "'can detect tiny amounts' 'çok küçük miktarları saptayabilen' demektir. 'ortadan kaldıran' ve 'zararsız' gibi seçenekler anlamı değiştirir.",
    ],
    [
      "Unless urgent action is taken, many species could become extinct within this century.",
      [
        "Acil önlem alınmazsa pek çok tür bu yüzyıl içinde yok olabilir.",
        "Acil önlemler sayesinde birçok tür bu yüzyılda kurtarılmıştır.",
        "Pek çok tür bu yüzyılda yok olduğu için acil önlem alınmıştır.",
        "Bu yüzyılda hiçbir türün yok olması beklenmemektedir.",
        "Türlerin yok olması acil önlem alınmasını engellemektedir.",
      ],
      "'Unless urgent action is taken' 'acil önlem alınmazsa', 'could become extinct' 'yok olabilir' demektir.",
    ],
    [
      "Most of the energy used by the human brain is consumed by communication between nerve cells.",
      [
        "İnsan beyninin kullandığı enerjinin çoğu sinir hücreleri arasındaki iletişim tarafından tüketilir.",
        "Sinir hücreleri insan vücudundaki enerjinin çoğunu üretir.",
        "İnsan beyni çok az enerji kullanır.",
        "Sinir hücreleri arasındaki iletişim enerji gerektirmez.",
        "Beyindeki enerji, sinir hücrelerinin sayısını artırmak için kullanılır.",
      ],
      "'Most of the energy … is consumed by communication between nerve cells' cümlesi enerjinin büyük kısmının hücreler arası iletişime harcandığını söyler.",
    ],
    [
      "Although nuclear fusion could provide almost unlimited energy, it remains extremely difficult to achieve.",
      [
        "Nükleer füzyon neredeyse sınırsız enerji sağlayabilecek olsa da gerçekleştirilmesi hâlâ son derece zordur.",
        "Nükleer füzyon artık kolayca gerçekleştirilebildiği için sınırsız enerji sağlamaktadır.",
        "Nükleer füzyonun sağladığı enerji oldukça sınırlıdır.",
        "Nükleer füzyonu gerçekleştirmek zor olduğu için enerji sağlayamaz.",
        "Sınırsız enerji, nükleer füzyonun gerçekleşmesini zorlaştırmaktadır.",
      ],
      "'Although' zıtlık bildirir: füzyon neredeyse sınırsız enerji sağlayabilir ama gerçekleştirilmesi zordur.",
    ],
    [
      "The bridge was designed to withstand winds of up to 200 kilometres per hour.",
      [
        "Köprü, saatte 200 kilometreye kadar olan rüzgârlara dayanacak şekilde tasarlandı.",
        "Köprü, saatte 200 kilometrelik rüzgârlar nedeniyle yıkıldı.",
        "Köprü üzerinde araçlar saatte 200 kilometre hızla gidebilir.",
        "Köprünün tasarımı saatte 200 kilometrelik rüzgârlar sırasında yapıldı.",
        "Saatte 200 kilometreden hızlı rüzgârlar köprüyü etkilemez.",
      ],
      "'designed to withstand winds of up to 200 km/h' 'saatte 200 km'ye kadar rüzgâra dayanacak şekilde tasarlandı' demektir.",
    ],
  ],
  trEn: [
    [
      "Bilim insanları, Mars'ın yüzeyinin altında donmuş su bulunduğunu doğruladı.",
      [
        "Scientists have confirmed that there is frozen water beneath the surface of Mars.",
        "Scientists believe that Mars once had large oceans on its surface.",
        "Frozen water has been found on the surface of Mars by astronauts.",
        "Scientists have not yet found any water on Mars.",
        "The surface of Mars is covered with frozen oceans.",
      ],
      "'doğruladı' 'have confirmed', 'yüzeyinin altında' 'beneath the surface' karşılığıdır.",
    ],
    [
      "Plastik atıkların büyük bir kısmı geri dönüştürülmek yerine çöp alanlarına gönderilmektedir.",
      [
        "A large proportion of plastic waste is sent to landfills instead of being recycled.",
        "Most plastic waste is recycled rather than sent to landfills.",
        "Landfills are used to produce new plastic products.",
        "Only a small amount of plastic waste ends up in landfills.",
        "Recycled plastic is often sent back to landfills.",
      ],
      "'geri dönüştürülmek yerine' 'instead of being recycled', 'çöp alanlarına gönderilmektedir' 'is sent to landfills' karşılığıdır.",
    ],
    [
      "Yapay zekâ sistemleri, eğitildikleri verilerdeki önyargıları yeniden üretebilir.",
      [
        "Artificial intelligence systems can reproduce the biases in the data they are trained on.",
        "Artificial intelligence systems remove all biases from data.",
        "The data used to train AI systems is always free of bias.",
        "AI systems are trained to recognise human biases.",
        "Biases make it impossible to train AI systems.",
      ],
      "'yeniden üretebilir' 'can reproduce', 'eğitildikleri verilerdeki önyargılar' 'the biases in the data they are trained on' karşılığıdır.",
    ],
    [
      "Depremden sonra binaların güvenli olup olmadığını belirlemek için mühendisler bölgeye gönderildi.",
      [
        "After the earthquake, engineers were sent to the area to determine whether the buildings were safe.",
        "Engineers predicted the earthquake and moved people out of unsafe buildings.",
        "The buildings in the area were designed by engineers to withstand earthquakes.",
        "After the earthquake, engineers declared all the buildings safe.",
        "Engineers were injured when the buildings collapsed after the earthquake.",
      ],
      "Kaynak cümle mühendislerin bir amaçla gönderildiğini söyler: 'to determine whether the buildings were safe'.",
    ],
    [
      "Güneş panellerinin verimliliği son on yılda büyük ölçüde artmıştır.",
      [
        "The efficiency of solar panels has greatly increased over the past decade.",
        "Solar panels have become less efficient in the last ten years.",
        "Ten years ago, solar panels were more efficient than they are today.",
        "The price of solar panels has risen sharply over the past decade.",
        "Solar panels will become efficient in ten years.",
      ],
      "'verimliliği … büyük ölçüde artmıştır' 'efficiency … has greatly increased' karşılığıdır.",
    ],
    [
      "Arıların sayısındaki azalma, birçok tarım ürününün verimini tehdit etmektedir.",
      [
        "The decline in the number of bees threatens the yield of many agricultural crops.",
        "Bees are threatened by the increasing number of crops.",
        "The number of bees has increased because of agriculture.",
        "Many crops do not need bees to produce a good yield.",
        "Farmers are trying to reduce the number of bees on their land.",
      ],
      "'Arıların sayısındaki azalma' 'the decline in the number of bees', 'tehdit etmektedir' 'threatens' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse at the end of their lives. For decades, black holes could only be studied indirectly, by observing their effects on nearby stars and gas. In 2019, however, an international team of astronomers released the first image of a black hole, located at the centre of a galaxy 55 million light-years away. To capture it, they combined data from eight radio telescopes around the world, effectively creating a telescope the size of the Earth. The image showed a bright ring of hot gas surrounding a dark centre, exactly as Einstein's theory of general relativity had predicted.",
      questions: [
        [
          "According to the passage, black holes form when ----.",
          [
            "massive stars collapse at the end of their lives",
            "two neighbouring galaxies collide with each other",
            "light is trapped inside powerful radio telescopes",
            "small stars cool down slowly",
            "gas clouds expand rapidly",
          ],
          "Parçaya göre kara delikler büyük kütleli yıldızlar ömürlerinin sonunda çöktüğünde oluşur.",
        ],
        [
          "Before 2019, black holes were studied mainly ----.",
          [
            "by observing how they affected objects around them",
            "through direct photographs taken from space stations",
            "by sending small spacecraft directly into them",
            "using a single telescope",
            "by measuring their light",
          ],
          "Parça kara deliklerin uzun süre yalnızca yakındaki yıldızlar ve gaz üzerindeki etkileri gözlemlenerek dolaylı yoldan incelendiğini söyler.",
        ],
        [
          "The 2019 image is significant because it ----.",
          [
            "matched the predictions of Einstein's theory",
            "proved that black holes emit light",
            "was taken by a single radio telescope",
            "showed a black hole inside our galaxy",
            "disproved the theory of general relativity",
          ],
          "Görüntü, Einstein'ın genel görelilik kuramının öngördüğü gibi karanlık bir merkezi çevreleyen parlak bir halka göstermiştir.",
        ],
      ],
    },
    {
      text:
        "Concrete is the most widely used construction material in the world, but its production is responsible for about eight percent of global carbon dioxide emissions. Most of these emissions come from making cement, the binding ingredient in concrete, which requires heating limestone to very high temperatures. Researchers are exploring several ways to reduce this impact. Some are replacing part of the cement with industrial by-products such as fly ash from power plants. Others are developing methods to inject captured carbon dioxide into concrete, where it becomes permanently trapped as a mineral. A third approach is to use timber in place of concrete for some buildings, although critics question whether enough sustainably managed forests exist to meet demand.",
      questions: [
        [
          "According to the passage, most of the emissions from concrete come from ----.",
          [
            "the production of cement",
            "transporting concrete to building sites",
            "mixing concrete with water",
            "demolishing old buildings",
            "cutting timber for construction",
          ],
          "Parça emisyonların çoğunun betonun bağlayıcı bileşeni olan çimentonun üretiminden kaynaklandığını söyler.",
        ],
        [
          "Injecting carbon dioxide into concrete is described as a way to ----.",
          [
            "store the gas permanently in mineral form",
            "make concrete lighter and easier to transport",
            "increase cement production",
            "replace limestone completely in all new buildings",
            "reduce the cost of timber",
          ],
          "Yakalanan karbondioksit betona enjekte edildiğinde bir mineral olarak kalıcı biçimde hapsolur.",
        ],
        [
          "Critics of using timber instead of concrete are concerned that ----.",
          [
            "there may not be enough sustainably managed forests",
            "timber produces more carbon dioxide than cement",
            "wooden buildings are too expensive",
            "fly ash is harmful to forests",
            "timber cannot be used for any buildings",
          ],
          "Eleştirmenler talebi karşılayacak kadar sürdürülebilir yönetilen orman olup olmadığını sorgular.",
        ],
      ],
    },
    {
      text:
        "Bird migration is one of the most remarkable phenomena in nature. Every year, billions of birds travel thousands of kilometres between their breeding and wintering grounds. How they find their way has long puzzled scientists. Research has shown that birds use several methods. Many navigate using the position of the Sun during the day and the stars at night. Others appear to sense the Earth's magnetic field, possibly through special proteins in their eyes. Landmarks such as coastlines and mountain ranges also help. Climate change is now disrupting these journeys, as warmer temperatures cause plants to flower and insects to emerge earlier, so birds that arrive at their usual time may find less food available.",
      questions: [
        [
          "According to the passage, birds navigate using ----.",
          [
            "a combination of the Sun, stars, magnetic fields and landmarks",
            "only the changing position of the Moon at night",
            "instructions learned from older birds of other species",
            "the sound of ocean waves",
            "changes in air pressure alone",
          ],
          "Parça kuşların Güneş, yıldızlar, manyetik alan ve kıyı şeritleri gibi işaretlerden birlikte yararlandığını söyler.",
        ],
        [
          "It is suggested in the passage that some birds may detect the Earth's magnetic field ----.",
          [
            "through special proteins in their eyes",
            "by listening carefully to the calls of other birds",
            "using sensitive cells in their feathers",
            "only during the day",
            "by following coastlines",
          ],
          "Parça bunun muhtemelen gözlerdeki özel proteinler aracılığıyla gerçekleştiğini belirtir.",
        ],
        [
          "Climate change affects migrating birds because ----.",
          [
            "the timing of food availability is changing",
            "birds can no longer see the stars",
            "mountain ranges are disappearing",
            "the Earth's magnetic field is weakening",
            "birds are flying shorter distances",
          ],
          "Isınma bitkilerin daha erken çiçek açmasına ve böceklerin daha erken çıkmasına yol açar; her zamanki zamanda gelen kuşlar daha az besin bulabilir.",
        ],
      ],
    },
    {
      text:
        "Gene editing technologies such as CRISPR allow scientists to change the DNA of living organisms with unprecedented precision. In agriculture, researchers have used the technique to develop crops that resist disease or tolerate drought. In medicine, early clinical trials have shown promising results in treating inherited blood disorders such as sickle cell disease. However, the technology also raises serious ethical questions. In 2018, a scientist in China announced that he had edited the genes of human embryos, leading to the birth of twin girls. The announcement was widely condemned, as the long-term effects of such changes are unknown and could be passed on to future generations. Many countries have since strengthened their regulations on human gene editing.",
      questions: [
        [
          "According to the passage, gene editing has been used in agriculture to ----.",
          [
            "create crops that can survive disease or drought",
            "increase the size and weight of farm animals",
            "remove all insect pests from large fields",
            "reduce the price of fertilisers",
            "produce crops without water",
          ],
          "Parça tekniğin hastalığa dirençli ya da kuraklığa dayanıklı ürünler geliştirmek için kullanıldığını söyler.",
        ],
        [
          "The 2018 announcement was condemned mainly because ----.",
          [
            "the long-term effects of editing embryos are unknown and could be inherited",
            "the treatment failed to cure the twins' sickle cell disease",
            "the experiment was carried out on crops rather than on humans",
            "CRISPR was not invented until later",
            "the twins were born with a blood disorder",
          ],
          "Duyuru, bu değişikliklerin uzun vadeli etkileri bilinmediği ve gelecek kuşaklara aktarılabileceği için kınanmıştır.",
        ],
        [
          "The passage suggests that following the 2018 case, ----.",
          [
            "many countries introduced stricter rules on human gene editing",
            "gene editing was banned in agriculture in most countries",
            "all CRISPR research around the world stopped completely",
            "more embryos were edited in other countries",
            "clinical trials on blood disorders were cancelled",
          ],
          "Son cümle pek çok ülkenin o zamandan beri insan gen düzenlemesine ilişkin düzenlemelerini sıkılaştırdığını belirtir.",
        ],
      ],
    },
    {
      text:
        "Smart grids use digital technology to monitor and manage the flow of electricity. Unlike traditional power grids, which deliver electricity in one direction from large power plants to consumers, smart grids allow two-way communication. Sensors detect problems such as power cuts and redirect electricity automatically. Smart meters show consumers how much energy they are using and when prices are highest, encouraging them to shift their consumption to cheaper periods. Smart grids are also better suited to renewable energy, whose output varies with the weather, because they can balance supply and demand more flexibly. However, connecting so many devices to the internet makes the grid more vulnerable to cyber attacks, so security has become a major priority.",
      questions: [
        [
          "According to the passage, a key difference between smart grids and traditional grids is that smart grids ----.",
          [
            "allow information and electricity to flow in two directions",
            "rely only on electricity from large power plants",
            "do not use any sensors",
            "are never connected to the internet for safety reasons",
            "produce electricity from coal",
          ],
          "Geleneksel şebekeler elektriği tek yönde iletirken akıllı şebekeler iki yönlü iletişime izin verir.",
        ],
        [
          "Smart meters help consumers by ----.",
          [
            "showing their energy use and when prices are high",
            "generating their own electricity at home from sunlight",
            "preventing all power cuts during storms and heatwaves",
            "reducing the cost of renewable energy",
            "protecting the grid from cyber attacks",
          ],
          "Akıllı sayaçlar tüketicilere ne kadar enerji kullandıklarını ve fiyatların ne zaman en yüksek olduğunu gösterir.",
        ],
        [
          "The main risk of smart grids mentioned in the passage is ----.",
          [
            "greater exposure to cyber attacks",
            "higher carbon emissions",
            "the need for more power plants",
            "reduced use of renewable energy",
            "more frequent power cuts",
          ],
          "Bu kadar çok cihazın internete bağlanması şebekeyi siber saldırılara karşı daha savunmasız kılar.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Earthquakes occur when stress builds up along faults in the Earth's crust and is suddenly released. ---- This is why countries such as Japan, Chile and Turkey, which lie near plate boundaries, experience frequent earthquakes.",
      [
        "Most faults are located along the boundaries between tectonic plates.",
        "Some earthquakes are too small to be felt by people.",
        "The Richter scale was developed in the 1930s.",
        "Many buildings collapse during strong earthquakes.",
        "Animals sometimes behave strangely before earthquakes.",
      ],
      "Son cümledeki 'This is why … near plate boundaries' ifadesi, fayların çoğunun levha sınırlarında bulunduğunu söyleyen bir öncül gerektirir.",
    ],
    [
      "Lithium is essential for the batteries used in electric cars and mobile phones. ---- As demand grows, some researchers are developing batteries based on more abundant materials such as sodium.",
      [
        "However, it is mined in only a few countries, and supplies are limited.",
        "Mobile phones have become cheaper over the past decade.",
        "Electric cars produce no exhaust emissions.",
        "Lithium was discovered in the early nineteenth century.",
        "Batteries must be charged regularly.",
      ],
      "Sodyum gibi daha bol malzemelerin aranmasının gerekçesi lityum arzının sınırlı olmasıdır; boşluk bu sorunu belirtmelidir.",
    ],
    [
      "---- Scientists estimate that only about five percent of the deep sea floor has been mapped in detail. Every expedition discovers new species, many of which have adapted to extreme pressure, cold and darkness.",
      [
        "The deep ocean remains one of the least explored places on Earth.",
        "Many fish are caught in shallow coastal waters.",
        "Submarines were first used in military operations.",
        "The oceans cover about seventy percent of the planet.",
        "Sea levels are rising because of climate change.",
      ],
      "Paragraf okyanus tabanının çok az haritalandığını ve her keşifte yeni türler bulunduğunu anlatır; açılış cümlesi derin okyanusun en az keşfedilmiş yerlerden biri olduğunu söylemelidir.",
    ],
    [
      "Traditional light bulbs waste most of their energy as heat. ---- As a result, many countries have banned the sale of inefficient bulbs.",
      [
        "LED bulbs, by contrast, use up to 80 percent less energy and last much longer.",
        "Thomas Edison is often credited with inventing the light bulb.",
        "Some people prefer the warm light of traditional bulbs.",
        "Light bulbs are sold in supermarkets and hardware stores.",
        "Heat is a form of energy.",
      ],
      "Verimsiz ampullerin yasaklanmasının arka planı, LED ampullerin çok daha verimli olmasıdır; boşluk bu karşılaştırmayı sunmalıdır.",
    ],
    [
      "Vaccines usually take years to develop. ---- This allowed scientists to design new vaccines within weeks once the genetic code of a virus was known.",
      [
        "However, mRNA technology dramatically shortened this process.",
        "Many vaccines are given to children.",
        "Some people are afraid of injections.",
        "Viruses are much smaller than bacteria.",
        "Vaccines must be stored at low temperatures.",
      ],
      "'This allowed scientists to design new vaccines within weeks' ifadesi, süreci kısaltan bir teknolojiden söz eden öncülü gerektirir: mRNA teknolojisi.",
    ],
    [
      "Coral reefs are often called the rainforests of the sea. ---- They provide food and shelter for about a quarter of all marine species, even though they cover less than one percent of the ocean floor.",
      [
        "This is because they support an extraordinary variety of life.",
        "Corals are often confused with plants.",
        "Many tourists go diving on coral reefs.",
        "Rainforests are found mainly near the equator.",
        "Ocean water contains large amounts of salt.",
      ],
      "Boşluk, benzetmenin nedenini açıklamalıdır: olağanüstü yaşam çeşitliliği. Ardından gelen cümle bunu rakamlarla destekler.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Graphene is a material made of a single layer of carbon atoms.",
        "It is about two hundred times stronger than steel.",
        "It also conducts electricity and heat extremely well.",
        "Many famous painters used charcoal for their sketches.",
        "Researchers believe it could transform electronics and energy storage.",
      ],
      odd: 3,
      why: "Parça grafenin özelliklerini ve olası kullanımlarını anlatır. Ressamların kömür kalem kullanmasından söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tsunamis are large waves usually caused by underwater earthquakes.",
        "In the open ocean, they may be only a metre high.",
        "Surfing has become a popular sport in many coastal towns.",
        "As they approach the shore, however, they slow down and grow much taller.",
        "This is why they can cause enormous destruction in coastal areas.",
      ],
      odd: 2,
      why: "Parça tsunamilerin oluşumunu ve kıyıda büyümesini anlatır. Sörfün popüler bir spor olduğunu söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Recycling metals saves large amounts of energy.",
        "Producing aluminium from recycled cans uses far less energy than making it from ore.",
        "Steel can also be recycled many times without losing its strength.",
        "As a result, recycling helps to reduce greenhouse gas emissions.",
        "Glass was first made thousands of years ago.",
      ],
      odd: 4,
      why: "Parça metallerin geri dönüşümünün enerji tasarrufunu anlatır. Camın binlerce yıl önce yapıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Self-driving cars use cameras, radar and sensors to understand their surroundings.",
        "Many cities are building new cycle lanes.",
        "Software then decides how the car should respond to traffic and obstacles.",
        "Supporters believe such cars could reduce accidents caused by human error.",
        "However, questions remain about who is responsible when an accident occurs.",
      ],
      odd: 1,
      why: "Parça sürücüsüz otomobillerin işleyişini ve tartışmalarını anlatır. Şehirlerde bisiklet yolu yapıldığını söyleyen II. cümle akışı keser.",
    },
    {
      sentences: [
        "The human eye can distinguish millions of different colours.",
        "This is possible because of special cells in the retina called cones.",
        "Most people have three types of cones, each sensitive to different wavelengths of light.",
        "Rainbows are often seen after rain.",
        "People with colour blindness usually lack one type of cone.",
      ],
      odd: 3,
      why: "Parça gözün renkleri nasıl algıladığını anlatır. Gökkuşağının yağmurdan sonra görüldüğünü söyleyen IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Hydrogen is being considered as a clean fuel for the future.",
        "When it is burned, it produces only water vapour.",
        "However, most hydrogen today is made from natural gas, which releases carbon dioxide.",
        "Natural gas is also used for cooking in many homes.",
        "Producing hydrogen with renewable electricity could solve this problem.",
      ],
      odd: 3,
      why: "Parça hidrojenin temiz yakıt olarak potansiyelini ve üretim sorununu anlatır. Doğal gazın evlerde yemek pişirmek için kullanıldığını söyleyen IV. cümle akışı keser.",
    },
  ],
};
