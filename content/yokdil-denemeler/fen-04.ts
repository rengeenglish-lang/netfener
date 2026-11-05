import type { YokdilDeneme } from "./types";

export const FEN_04: YokdilDeneme = {
  no: 4,
  field: "fen",
  vocab: [
    [
      "The new engine is designed to ---- fuel consumption by up to thirty percent.",
      ["reduce", "double", "ignore", "celebrate", "imitate"],
      "Yeni motorun yakıt tüketimini yüzde otuza kadar 'azaltması' (reduce) amaçlanır.",
    ],
    [
      "Oil and water do not mix because they have very ---- chemical properties.",
      ["different", "identical", "similar", "attractive", "permanent"],
      "Yağ ve suyun karışmamasının nedeni kimyasal özelliklerinin çok 'farklı' olmasıdır.",
    ],
    [
      "The team ---- a series of experiments to test whether the material could withstand high temperatures.",
      ["conducted", "abandoned", "forgot", "decorated", "pretended"],
      "Deney 'yapmak' için 'conduct experiments' kalıbı kullanılır.",
    ],
    [
      "The power station had to ---- after a fault was found in its cooling system.",
      ["shut down", "take off", "look up", "give in", "put on"],
      "Arıza bulunan santralin 'kapatılması' (shut down) gerekir.",
    ],
    [
      "Glass is a ---- material, which means that it breaks easily when struck.",
      ["brittle", "flexible", "elastic", "soft", "liquid"],
      "Kolayca kırılan malzeme 'kırılgan'dır (brittle). 'flexible' ve 'elastic' anlamı tersine çevirir.",
    ],
    [
      "The signals from the spacecraft were extremely ----, so engineers used large antennas to detect them.",
      ["faint", "loud", "strong", "obvious", "frequent"],
      "Büyük antenlere ihtiyaç duyulması sinyallerin çok 'zayıf' (faint) olduğunu gösterir.",
    ],
  ],
  grammar: [
    [
      "Since the first smartphones appeared, mobile technology ---- dramatically.",
      ["has advanced", "advanced", "had advanced", "advances", "will advance"],
      "'Since' ile bugüne uzanan değişim Present Perfect ister.",
    ],
    [
      "If the Earth were closer to the Sun, its oceans ----.",
      ["would evaporate", "will evaporate", "evaporated", "would have evaporated", "evaporate"],
      "Type 2 koşul ana cümlede 'would + V1' ister.",
    ],
    [
      "The researchers could not explain ---- the samples had become contaminated.",
      ["how", "what", "which", "whom", "whose"],
      "Örneklerin 'nasıl' kirlendiği açıklanamadı; cümle tam olduğu için 'how' gerekir.",
    ],
    [
      "The satellite, ---- was launched in 2018, sends data back to Earth every hour.",
      ["which", "that", "who", "where", "what"],
      "Virgülle ayrılmış açıklayıcı ilgi cümlesinde 'which' kullanılır.",
    ],
    [
      "---- careful planning, the mission experienced several technical problems.",
      ["Despite", "Because of", "Although", "Unless", "Thanks to"],
      "Ardından isim öbeği gelir ve zıtlık vardır: 'Despite'.",
    ],
    [
      "The engineers are considering ---- the bridge with stronger materials.",
      ["rebuilding", "to rebuild", "rebuild", "rebuilt", "to rebuilding"],
      "'consider' fiili -ing ister: 'considering rebuilding'.",
    ],
    [
      "By the time the rescue team arrived, the fire ---- most of the forest.",
      ["had destroyed", "has destroyed", "destroys", "will destroy", "is destroying"],
      "'By the time + Past' yapısında ana cümle Past Perfect alır.",
    ],
    [
      "Rarely ---- such a powerful earthquake in this region.",
      ["have scientists recorded", "scientists have recorded", "scientists recorded", "recorded scientists", "scientists did record"],
      "'Rarely' cümle başına geldiğinde devrik yapı gerekir.",
    ],
    [
      "It is essential that the reactor ---- regularly.",
      ["be inspected", "is inspected", "will be inspected", "inspected", "has inspected"],
      "'It is essential that' sonrası subjunctive ve edilgen gerekir.",
    ],
    [
      "The robot can work in places ---- it would be too dangerous for humans to go.",
      ["where", "which", "that", "what", "whose"],
      "'places' sonrası tam cümle gelir: 'where'.",
    ],
    [
      "The drug has been tested on animals; ----, it has not yet been tested on humans.",
      ["however", "therefore", "moreover", "for example", "as a result"],
      "Hayvanlarda test edilmesi ile insanlarda edilmemesi arasında karşıtlık vardır: 'however'.",
    ],
    [
      "The scientists ---- results were published last month have been invited to present their work.",
      ["whose", "who", "which", "whom", "that"],
      "Bilim insanlarının sonuçlarından söz edilir: 'whose'.",
    ],
    [
      "The more efficient a solar panel is, ---- electricity it produces.",
      ["the more", "more", "the most", "most", "as more"],
      "'The more …, the more …' kalıbı.",
    ],
    [
      "The bridge ---- if the engineers had not reinforced it last year.",
      ["would have collapsed", "will collapse", "collapsed", "would collapse", "has collapsed"],
      "Type 3 koşul: ana cümle 'would have + V3'.",
    ],
  ],
  cloze: [
    {
      text:
        "Geothermal energy comes from heat stored beneath the Earth's surface. In regions with high volcanic activity, such as Iceland, hot water and steam can be found close to the surface {1} they can be used directly to heat buildings or generate electricity. Unlike solar and wind power, geothermal energy is available at all times, {2} it a reliable source of electricity. However, suitable locations are limited, and drilling deep wells is expensive. {3}, the technology carries some risks: in a few cases, drilling has triggered small earthquakes. Researchers are now developing 'enhanced geothermal systems' {4} could make it possible to use geothermal energy in areas {5} natural hot water is not available.",
      blanks: [
        [
          "(21) ----",
          ["where", "which", "what", "whose", "when"],
          "Sıcak suyun yüzeye yakın bulunduğu yerler anlatılır; ardından tam cümle gelir: 'where'.",
        ],
        [
          "(22) ----",
          ["making", "made", "to make", "makes", "having made by"],
          "Sürekli bulunabilmenin sonucu virgülden sonra etken ortaçla verilir: 'making it a reliable source'.",
        ],
        [
          "(23) ----",
          ["In addition", "In contrast", "Instead", "Therefore", "For example"],
          "Bir başka dezavantaj eklenir: 'In addition'.",
        ],
        [
          "(24) ----",
          ["that", "what", "where", "whose", "who"],
          "'systems' sonrası 'could make' fiilinin öznesini isteyen tanımlayıcı ilgi cümlesi: 'that'.",
        ],
        [
          "(25) ----",
          ["where", "which", "what", "when", "whose"],
          "'areas' sonrası tam cümle gelir: 'where'.",
        ],
      ],
    },
    {
      text:
        "The human eye contains two types of light-sensitive cells: rods and cones. Rods are extremely sensitive to light {1} allow us to see in dim conditions, but they cannot detect colour. Cones, {2} work best in bright light, are responsible for colour vision. Most people have three types of cones, each sensitive to different wavelengths. {3} one type of cone is missing or does not work properly, a person may be colour-blind. Colour blindness is much more common in men than in women {4} the genes responsible are located on the X chromosome. Although there is no cure, special glasses can help some colour-blind people distinguish colours {5} effectively.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "unless", "although", "so that"],
          "Çubuk hücrelerin iki özelliği birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["which", "what", "where", "whose", "that"],
          "Virgülle ayrılmış açıklayıcı ilgi cümlesinde 'which' kullanılır.",
        ],
        [
          "(28) ----",
          ["If", "Unless", "Although", "Because", "Whereas"],
          "Bir koni türü eksikse kişi renk körü olabilir: koşul bildiren 'If'.",
        ],
        [
          "(29) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Erkeklerde daha yaygın olmasının nedeni genlerin X kromozomunda bulunmasıdır: 'because'.",
        ],
        [
          "(30) ----",
          ["more", "most", "much", "less of", "such"],
          "Renkleri 'daha etkili biçimde' ayırt etmek: 'more effectively'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although nuclear power plants produce very little carbon dioxide, ----.",
      [
        "the problem of safely storing radioactive waste has not been fully solved",
        "they generate electricity by splitting atoms of uranium inside reactors",
        "many countries built their first nuclear plants in the 1960s and 1970s",
        "they need large amounts of water for cooling their reactors",
        "they can produce electricity continuously for many months",
      ],
      "'Although' zıtlık ister: az karbondioksit üretseler de radyoaktif atık sorunu çözülmemiştir.",
    ],
    [
      "If engineers could store solar energy cheaply, ----.",
      [
        "renewable power could supply electricity even at night",
        "solar panels were first used on satellites",
        "the Sun is about 150 million kilometres away",
        "engineers will build more power stations",
        "batteries had been very expensive",
      ],
      "Type 2 koşul ana cümlede 'could + V1' ister: yenilenebilir enerji geceleri bile elektrik sağlayabilirdi.",
    ],
    [
      "Scientists use computer simulations ----.",
      [
        "to study processes that are too slow or dangerous to observe directly",
        "which are often run on large and powerful supercomputers",
        "although laboratory experiments are still very important",
        "because computers have become much cheaper over time",
        "unless the results had already been published",
      ],
      "Simülasyonların amacı doğrudan gözlemlenemeyecek kadar yavaş ya da tehlikeli süreçleri incelemektir.",
    ],
    [
      "Since bacteria can multiply very quickly, ----.",
      [
        "an infection can spread through the body within hours",
        "they were first observed under a microscope",
        "some of them are useful in making cheese",
        "they are found almost everywhere on Earth",
        "scientists classify them into different groups",
      ],
      "Bakterilerin hızla çoğalmasının sonucu enfeksiyonun saatler içinde yayılabilmesidir.",
    ],
    [
      "While metals generally conduct electricity well, ----.",
      [
        "materials such as rubber and plastic do not",
        "copper is used in most electrical wiring",
        "electricity flows in a closed circuit",
        "some metals are more expensive than others",
        "lightning is a natural form of electricity",
      ],
      "'While' zıtlık bildirir: metaller iletken, kauçuk ve plastik değil.",
    ],
    [
      "The rover is powered by solar panels, ----.",
      [
        "so it can only operate when there is enough sunlight",
        "which were designed by a team of engineers",
        "although Mars is further from the Sun than Earth",
        "because it was launched from Florida",
        "unless the mission had been delayed",
      ],
      "Güneş panelleriyle çalışmanın sonucu yalnızca yeterli güneş ışığı olduğunda çalışabilmesidir.",
    ],
    [
      "Unless the spread of invasive species is controlled, ----.",
      [
        "many native plants and animals could disappear",
        "they were brought to the island by ships",
        "scientists had studied them for years",
        "some of them are very colourful",
        "they live in many different habitats",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister.",
    ],
    [
      "Even though the experiment was repeated many times, ----.",
      [
        "the researchers could not reproduce the original results",
        "it was carried out in a modern laboratory",
        "the equipment was very expensive",
        "many students helped with the work",
        "the results were written in a report",
      ],
      "'Even though' beklenmedik bir sonuç ister: tekrar edilse de sonuçlar yeniden elde edilemedi.",
    ],
    [
      "As global temperatures rise, ----.",
      [
        "mountain glaciers are shrinking in most parts of the world",
        "temperatures were lower during the last ice age",
        "thermometers measure temperature in degrees",
        "the Sun had produced more energy in the past",
        "winters are usually colder than summers",
      ],
      "'As' paralel değişim bildirir: sıcaklık arttıkça dağ buzulları küçülmektedir.",
    ],
    [
      "Engineers paint bridges regularly ----.",
      [
        "to protect the steel from rust",
        "which are built over wide rivers",
        "although paint is expensive",
        "because bridges are tall",
        "unless it had rained",
      ],
      "Köprülerin boyanmasının amacı çeliği pastan korumaktır.",
    ],
    [
      "Not only can drones deliver packages, ----.",
      [
        "but they can also help in search and rescue operations",
        "because they are controlled remotely",
        "although some people find them noisy",
        "which have become cheaper recently",
        "so many companies use them",
      ],
      "'Not only … but also' yapısı tamamlanmalıdır.",
    ],
  ],
  enTr: [
    [
      "Scientists have discovered a new species of deep-sea fish that can produce its own light.",
      [
        "Bilim insanları kendi ışığını üretebilen yeni bir derin deniz balığı türü keşfetti.",
        "Bilim insanları derin denizlerde ışık olmadığını keşfetti.",
        "Derin deniz balıkları bilim insanlarının ışıklarından etkilendi.",
        "Bilim insanları yeni bir balık türüne ışık verdi.",
        "Yeni balık türü yalnızca ışıklı sularda yaşar.",
      ],
      "'can produce its own light' 'kendi ışığını üretebilen' demektir.",
    ],
    [
      "Although the comet was discovered only last year, scientists already know a great deal about it.",
      [
        "Kuyruklu yıldız ancak geçen yıl keşfedilmiş olsa da bilim insanları onun hakkında şimdiden çok şey biliyor.",
        "Kuyruklu yıldız geçen yıl keşfedildiği için hakkında çok az şey biliniyor.",
        "Bilim insanları kuyruklu yıldızı yıllardır inceliyor.",
        "Kuyruklu yıldız geçen yıl Dünya'ya çarptı.",
        "Bilim insanları kuyruklu yıldızın ne zaman keşfedildiğini bilmiyor.",
      ],
      "'Although' zıtlık bildirir: yeni keşfedilse de hakkında çok şey biliniyor.",
    ],
    [
      "The higher the altitude, the lower the air pressure becomes.",
      [
        "Yükseklik arttıkça hava basıncı düşer.",
        "Yükseklik arttıkça hava basıncı da artar.",
        "Hava basıncı düşük olan yerler alçaktadır.",
        "Hava basıncı yüksekliği etkilemez.",
        "Yüksek yerlerde hava daha yoğundur.",
      ],
      "'The higher …, the lower …' 'arttıkça … düşer' anlamındadır.",
    ],
    [
      "Most of the plastic produced since the 1950s still exists in some form.",
      [
        "1950'lerden bu yana üretilen plastiğin çoğu hâlâ bir biçimde varlığını sürdürmektedir.",
        "1950'lerden önce üretilen plastiğin tamamı geri dönüştürülmüştür.",
        "1950'lerden bu yana çok az plastik üretilmiştir.",
        "Plastik 1950'lerde tamamen ortadan kalkmıştır.",
        "1950'lerde üretilen plastik bugün kullanılmamaktadır.",
      ],
      "'Most of the plastic … still exists in some form' 'çoğu hâlâ bir biçimde varlığını sürdürmektedir' demektir.",
    ],
    [
      "Had the warning system worked properly, the damage would have been much less severe.",
      [
        "Uyarı sistemi düzgün çalışmış olsaydı hasar çok daha az olurdu.",
        "Uyarı sistemi düzgün çalıştığı için hasar az oldu.",
        "Hasar, uyarı sisteminin bozulmasına neden oldu.",
        "Uyarı sistemi çalışmasaydı hasar olmazdı.",
        "Hasar az olduğu için uyarı sistemi çalışmadı.",
      ],
      "'Had … worked properly' gerçekleşmemiş geçmiş koşuldur.",
    ],
    [
      "The new telescope will allow astronomers to study planets orbiting distant stars.",
      [
        "Yeni teleskop, gökbilimcilerin uzak yıldızların çevresinde dönen gezegenleri incelemesini sağlayacak.",
        "Yeni teleskop yalnızca Güneş Sistemi'ndeki gezegenleri gözlemleyebilir.",
        "Gökbilimciler uzak yıldızlara teleskop gönderecek.",
        "Uzak yıldızların çevresinde gezegen bulunmadığı anlaşıldı.",
        "Yeni teleskop gezegenlerin yörüngesini değiştirecek.",
      ],
      "'will allow astronomers to study planets orbiting distant stars' doğru aktarılmalıdır.",
    ],
  ],
  trEn: [
    [
      "Araştırmacılar, yeni malzemenin çelikten daha hafif ama daha dayanıklı olduğunu buldu.",
      [
        "Researchers found that the new material is lighter but stronger than steel.",
        "Researchers found that steel is lighter and stronger than the new material.",
        "The new material is heavier than steel but less durable.",
        "Researchers made the new material from steel.",
        "The new material cannot be used instead of steel.",
      ],
      "'çelikten daha hafif ama daha dayanıklı' 'lighter but stronger than steel' karşılığıdır.",
    ],
    [
      "Deniz seviyesinin yükselmesi, kıyı şehirleri için ciddi bir tehdit oluşturmaktadır.",
      [
        "Rising sea levels pose a serious threat to coastal cities.",
        "Coastal cities are causing sea levels to rise.",
        "Sea levels have fallen near most coastal cities.",
        "Coastal cities are protected from rising sea levels.",
        "Rising sea levels benefit coastal cities.",
      ],
      "'ciddi bir tehdit oluşturmaktadır' 'pose a serious threat' karşılığıdır.",
    ],
    [
      "Bu yöntem sayesinde su, enerji kullanılmadan temizlenebilir.",
      [
        "Thanks to this method, water can be purified without using energy.",
        "This method uses a lot of energy to purify water.",
        "Water cannot be purified without energy.",
        "This method produces energy from dirty water.",
        "Energy is needed to make this method work.",
      ],
      "'enerji kullanılmadan temizlenebilir' 'can be purified without using energy' karşılığıdır.",
    ],
    [
      "Pek çok hayvan türü, Dünya'nın manyetik alanını kullanarak yön bulur.",
      [
        "Many animal species find their way by using the Earth's magnetic field.",
        "The Earth's magnetic field confuses many animal species.",
        "Animals create the Earth's magnetic field.",
        "Few animals can sense the Earth's magnetic field.",
        "Animals use the stars rather than magnetic fields.",
      ],
      "'manyetik alanını kullanarak yön bulur' 'find their way by using the magnetic field' karşılığıdır.",
    ],
    [
      "Yapay zekâ, ilaç keşfini hızlandırmak için giderek daha fazla kullanılmaktadır.",
      [
        "Artificial intelligence is increasingly being used to speed up drug discovery.",
        "Drug discovery has slowed down because of artificial intelligence.",
        "Artificial intelligence was used to discover the first drugs.",
        "Drug companies have stopped using artificial intelligence.",
        "Artificial intelligence cannot be used in medicine.",
      ],
      "'giderek daha fazla kullanılmaktadır' 'is increasingly being used' karşılığıdır.",
    ],
    [
      "Volkanik patlamalar, küresel sıcaklıkları geçici olarak düşürebilir.",
      [
        "Volcanic eruptions can temporarily lower global temperatures.",
        "Volcanic eruptions permanently increase global temperatures.",
        "Global temperatures cause volcanic eruptions.",
        "Volcanic eruptions have no effect on the climate.",
        "Low temperatures prevent volcanic eruptions.",
      ],
      "'geçici olarak düşürebilir' 'can temporarily lower' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Bioplastics are plastics made from renewable sources such as corn starch or sugarcane rather than from oil. They are often promoted as an environmentally friendly alternative to conventional plastics. However, the term can be misleading. Some bioplastics are biodegradable, meaning that microorganisms can break them down, but many only do so under the high temperatures found in industrial composting facilities. In ordinary soil or seawater, they may persist for years. Moreover, growing crops for bioplastics requires land, water and fertiliser, which can compete with food production. Experts argue that reducing overall plastic use and improving recycling are likely to bring greater environmental benefits than simply switching to bioplastics.",
      questions: [
        [
          "According to the passage, bioplastics are made from ----.",
          [
            "renewable materials such as corn starch and sugarcane",
            "oil that has been cleaned and recycled several times",
            "microorganisms that are commonly found in seawater",
            "metal and glass waste from factories",
            "fertilisers used in agriculture",
          ],
          "Biyoplastikler petrol yerine mısır nişastası ya da şeker kamışı gibi yenilenebilir kaynaklardan yapılır.",
        ],
        [
          "The writer says the term 'bioplastic' can be misleading because ----.",
          [
            "many of them break down only in special industrial conditions",
            "they are always made from oil and natural gas",
            "they cannot be used for packaging",
            "they are more expensive than conventional plastics",
            "they break down completely in seawater within a few days",
          ],
          "Pek çok biyoplastik yalnızca endüstriyel kompost tesislerindeki yüksek sıcaklıklarda parçalanır; normal toprakta yıllarca kalabilir.",
        ],
        [
          "According to the experts, the greatest environmental benefits would come from ----.",
          [
            "using less plastic overall and recycling more effectively",
            "replacing all plastics with bioplastics immediately",
            "growing more corn for plastic production",
            "burning plastic waste in power stations",
            "throwing bioplastics into the sea",
          ],
          "Uzmanlar genel plastik kullanımını azaltmanın ve geri dönüşümü iyileştirmenin daha büyük fayda sağlayacağını savunur.",
        ],
      ],
    },
    {
      text:
        "Mosquitoes are responsible for spreading diseases that kill hundreds of thousands of people each year, including malaria, dengue and Zika. Traditional control methods, such as insecticides and bed nets, have saved many lives, but mosquitoes are becoming resistant to some chemicals. Scientists are therefore testing new approaches. One involves releasing male mosquitoes infected with a bacterium called Wolbachia. When these males mate with wild females, the eggs do not hatch, reducing the population. Another approach uses mosquitoes carrying the same bacterium, which prevents them from transmitting certain viruses. Trials in several countries have shown dramatic reductions in dengue cases. Some people, however, have raised concerns about releasing modified insects into the environment.",
      questions: [
        [
          "According to the passage, new methods of mosquito control are being tested because ----.",
          [
            "mosquitoes are developing resistance to some insecticides",
            "bed nets are no longer produced in large enough numbers",
            "mosquitoes have stopped spreading malaria in most regions",
            "insecticides have become too cheap",
            "most diseases have been eradicated",
          ],
          "Sivrisinekler bazı kimyasallara karşı direnç kazandığı için yeni yöntemler test edilmektedir.",
        ],
        [
          "When male mosquitoes carrying Wolbachia mate with wild females, ----.",
          [
            "the eggs fail to hatch",
            "the females become immune to dengue",
            "more mosquitoes are produced",
            "the males die immediately",
            "the bacterium disappears",
          ],
          "Bu erkekler vahşi dişilerle çiftleştiğinde yumurtalar açılmaz ve popülasyon azalır.",
        ],
        [
          "The last sentence of the passage suggests that ----.",
          [
            "not everyone is comfortable with releasing modified insects",
            "all countries have now banned the new methods completely",
            "dengue cases have increased sharply after the trials ended",
            "the new methods are too expensive",
            "Wolbachia is harmful to humans",
          ],
          "Bazı insanlar değiştirilmiş böceklerin çevreye salınmasıyla ilgili kaygılarını dile getirmiştir.",
        ],
      ],
    },
    {
      text:
        "Earth's atmosphere is made up of several layers. The lowest, the troposphere, contains most of the air we breathe and is where weather occurs. Above it lies the stratosphere, which contains the ozone layer. This layer absorbs most of the Sun's harmful ultraviolet radiation, protecting life on the surface. In the 1980s, scientists discovered that chemicals called CFCs, used in refrigerators and aerosol sprays, were destroying ozone, creating a 'hole' over Antarctica. In response, countries signed the Montreal Protocol in 1987, agreeing to phase out these chemicals. The agreement has been remarkably successful, and scientists expect the ozone layer to recover almost completely by the middle of this century.",
      questions: [
        [
          "According to the passage, the ozone layer ----.",
          [
            "absorbs most of the Sun's harmful ultraviolet radiation",
            "is found in the lowest layer, the troposphere",
            "is where most weather occurs",
            "contains most of the air we breathe",
            "was created by the countries that signed the Montreal Protocol",
          ],
          "Ozon tabakası güneşin zararlı ultraviyole ışınlarının çoğunu emer.",
        ],
        [
          "The Montreal Protocol was signed in order to ----.",
          [
            "phase out chemicals that were destroying ozone",
            "increase the production of refrigerators",
            "study the weather in Antarctica",
            "create a hole in the ozone layer",
            "reduce the use of solar energy",
          ],
          "Protokol ozonu yok eden CFC'lerin aşamalı olarak kaldırılması için imzalanmıştır.",
        ],
        [
          "The passage presents the Montreal Protocol as ----.",
          [
            "a highly successful international agreement",
            "a complete failure",
            "an agreement that has not yet been signed",
            "a cause of climate change",
            "a plan to increase CFC use",
          ],
          "Anlaşmanın son derece başarılı olduğu ve ozon tabakasının iyileşmesinin beklendiği belirtilir.",
        ],
      ],
    },
    {
      text:
        "Artificial intelligence systems are increasingly used to analyse medical images such as X-rays and scans. In some studies, AI programs have detected certain cancers as accurately as experienced doctors. Supporters argue that such tools could reduce waiting times and help hospitals cope with shortages of specialists. However, AI systems are only as good as the data used to train them. If the training data come mainly from one population, the system may perform less well for patients from other groups. There are also concerns about responsibility: if an AI system makes a mistake, it is not always clear who should be held accountable. For these reasons, most experts believe AI should support doctors rather than replace them.",
      questions: [
        [
          "According to the passage, AI tools for medical images could help hospitals by ----.",
          [
            "reducing waiting times and easing shortages of specialists",
            "replacing all hospital doctors within the next few years",
            "making X-ray machines and scanners much cheaper to buy",
            "training new doctors more quickly",
            "eliminating the need for scans",
          ],
          "Destekçiler bu araçların bekleme sürelerini azaltabileceğini ve uzman eksikliğiyle başa çıkmaya yardım edebileceğini savunur.",
        ],
        [
          "An AI system may perform less well for some patients because ----.",
          [
            "its training data may not represent all populations",
            "doctors in many hospitals refuse to use it",
            "it cannot analyse X-rays as quickly as doctors",
            "it is too slow for hospitals",
            "patients do not trust computers",
          ],
          "Eğitim verileri ağırlıklı olarak tek bir popülasyondan gelirse sistem diğer gruplarda daha kötü performans gösterebilir.",
        ],
        [
          "Most experts believe that AI in medicine should ----.",
          [
            "assist doctors rather than take their place",
            "be banned in all hospitals",
            "replace specialists as soon as possible",
            "be used only for training",
            "make all final decisions",
          ],
          "Son cümleye göre çoğu uzman yapay zekânın doktorların yerini almak yerine onları desteklemesi gerektiğine inanır.",
        ],
      ],
    },
    {
      text:
        "Soil is far more than dirt. A single handful can contain billions of microorganisms, along with fungi, insects and worms that break down organic matter and recycle nutrients. Healthy soil stores large amounts of carbon and helps absorb rainwater, reducing the risk of floods. However, intensive farming, deforestation and construction are degrading soils around the world. When soil loses its structure and organic matter, it becomes less fertile and more easily washed or blown away. Some farmers are adopting practices such as reduced ploughing, crop rotation and planting cover crops between harvests. These methods can rebuild soil health, although they may require years before their full benefits become visible.",
      questions: [
        [
          "According to the passage, healthy soil can help to ----.",
          [
            "store carbon and reduce the risk of flooding",
            "increase the speed of construction",
            "prevent the growth of microorganisms",
            "make farming less productive",
            "replace the need for rain",
          ],
          "Sağlıklı toprak büyük miktarda karbon depolar ve yağmur suyunu emerek sel riskini azaltır.",
        ],
        [
          "When soil loses its structure and organic matter, it ----.",
          [
            "becomes less fertile and more easily eroded",
            "stores more carbon than before",
            "contains more microorganisms",
            "absorbs rainwater more effectively",
            "becomes more suitable for farming",
          ],
          "Yapısını ve organik maddesini kaybeden toprak daha az verimli olur ve daha kolay aşınır.",
        ],
        [
          "It is implied in the passage that practices such as cover crops ----.",
          [
            "can improve soil health, but results may take time",
            "produce immediate results in every type of soil",
            "damage soil structure and reduce its fertility",
            "are used only in deserts",
            "increase the risk of floods",
          ],
          "Bu yöntemler toprak sağlığını yeniden oluşturabilir ama tam faydaları yıllar alabilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Bats are the only mammals capable of true flight. ---- They emit high-pitched sounds and listen for the echoes that bounce back from objects, allowing them to hunt insects in complete darkness.",
      [
        "Many species also use echolocation to find their way.",
        "Some bats live in large colonies in caves.",
        "Bats are often associated with Halloween.",
        "Birds have feathers, while bats do not.",
        "Some bats eat fruit rather than insects.",
      ],
      "Sonraki cümle yankıyla yön bulmayı açıklar; boşluk ekolokasyonu tanıtmalıdır.",
    ],
    [
      "---- When water vapour in the air cools, it condenses into tiny droplets that form clouds. As these droplets combine and grow heavier, they fall to the ground as rain.",
      [
        "Rain is part of a continuous process known as the water cycle.",
        "Some regions receive very little rainfall.",
        "Umbrellas were invented thousands of years ago.",
        "Weather forecasts are often inaccurate.",
        "Rivers flow into the sea.",
      ],
      "Paragraf yağmurun nasıl oluştuğunu anlatır; açılış cümlesi su döngüsünü tanıtmalıdır.",
    ],
    [
      "Electric cars are becoming more popular in many countries. ---- To solve this problem, governments and companies are building more public charging stations along major roads.",
      [
        "However, many drivers worry about finding places to charge their vehicles.",
        "Electric motors are very quiet.",
        "Petrol prices change frequently.",
        "Some cars are made in China.",
        "Most cars have four wheels.",
      ],
      "'To solve this problem' bir sorunun belirtilmesini gerektirir: şarj yeri bulma kaygısı.",
    ],
    [
      "Honeybees communicate the location of food through a 'waggle dance'. ---- The direction of the dance shows the direction of the food relative to the Sun.",
      [
        "The length of the dance indicates how far away the food is.",
        "Honey has been used as food for thousands of years.",
        "Bees are important pollinators.",
        "Some people are allergic to bee stings.",
        "Beekeepers wear protective clothing.",
      ],
      "Paragraf dansın bilgiyi nasıl ilettiğini anlatır; boşluk dansın uzunluğunun mesafeyi gösterdiğini söylemelidir.",
    ],
    [
      "Steel is one of the most widely used materials in construction. ---- As a result, researchers are developing ways to produce it using hydrogen instead of coal.",
      [
        "However, its production releases large amounts of carbon dioxide.",
        "Steel is an alloy of iron and carbon.",
        "Many bridges are made of steel.",
        "Steel can be recycled many times.",
        "The Eiffel Tower is made of iron.",
      ],
      "'As a result' bir sorun gerektirir: çelik üretiminin çok karbondioksit salması.",
    ],
    [
      "Some animals hibernate during the winter. ---- This allows them to survive for months without eating when food is scarce.",
      [
        "During hibernation, their body temperature and heart rate drop dramatically.",
        "Bears are among the largest land animals.",
        "Snow covers many regions in winter.",
        "Some birds migrate to warmer places.",
        "Squirrels collect nuts in autumn.",
      ],
      "'This allows them to survive … without eating' ifadesi, kış uykusunda vücut ısısı ve kalp atışının düştüğünü söyleyen bir öncül gerektirir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Tides are caused mainly by the gravitational pull of the Moon.",
        "The Moon pulls the oceans towards it, creating a bulge of water.",
        "Many people enjoy walking on the beach.",
        "As the Earth rotates, coastal areas pass through these bulges.",
        "This produces two high tides and two low tides each day.",
      ],
      odd: 2,
      why: "Parça gelgitlerin nedenini anlatır. Plajda yürümekten söz eden III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Fibre-optic cables transmit data as pulses of light.",
        "They can carry much more information than copper wires.",
        "Signals also travel long distances with little loss.",
        "Copper is mined in many countries.",
        "As a result, fibre optics form the backbone of the internet.",
      ],
      odd: 3,
      why: "Parça fiber optik kabloları anlatır. Bakırın madenciliğinden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Earthworms play an important role in soil health.",
        "They mix soil layers and create tunnels that let air and water in.",
        "Their waste is rich in nutrients for plants.",
        "Some birds feed on earthworms.",
        "Farmers often see more earthworms in fields that are not ploughed.",
      ],
      odd: 3,
      why: "Parça solucanların toprak sağlığındaki rolünü anlatır. Kuşların solucanla beslendiğini söyleyen IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Superconductors are materials that conduct electricity with no resistance.",
        "They are used in powerful magnets for medical scanners.",
        "Hospitals are often busy places.",
        "However, most superconductors only work at extremely low temperatures.",
        "Scientists are searching for materials that work at room temperature.",
      ],
      odd: 2,
      why: "Parça süperiletkenleri anlatır. Hastanelerin kalabalık olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Desalination plants turn seawater into drinking water.",
        "Most use a process called reverse osmosis.",
        "This requires large amounts of energy.",
        "The plants also produce salty waste that can harm marine life.",
        "Seawater covers most of the Earth's surface.",
      ],
      odd: 4,
      why: "Parça tuzdan arındırma tesislerini ve sorunlarını anlatır. Deniz suyunun Dünya yüzeyini kapladığını söyleyen V. cümle akışa katkı yapmaz.",
    },
    {
      sentences: [
        "Hydroelectric power uses the energy of flowing water to generate electricity.",
        "Dams store water in large reservoirs.",
        "Many people go fishing in rivers.",
        "When the water is released, it turns turbines connected to generators.",
        "Hydroelectric power is renewable, but dams can affect river ecosystems.",
      ],
      odd: 2,
      why: "Parça hidroelektrik enerjiyi anlatır. Nehirde balık tutmaktan söz eden III. cümle akışı bozar.",
    },
  ],
};
