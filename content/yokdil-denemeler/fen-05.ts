import type { YokdilDeneme } from "./types";

export const FEN_05: YokdilDeneme = {
  no: 5,
  field: "fen",
  vocab: [
    [
      "Hydrogen fuel cells ---- electricity through a chemical reaction between hydrogen and oxygen.",
      ["generate", "consume", "destroy", "conceal", "measure"],
      "Yakıt hücreleri hidrojen ile oksijen arasındaki tepkimeyle elektrik 'üretir' (generate); 'consume' anlamın tersidir.",
    ],
    [
      "Graphene is remarkably ---- for its weight, about two hundred times stronger than steel.",
      ["strong", "fragile", "heavy", "soft", "flexible"],
      "Çelikten iki yüz kat güçlü olduğu söylenen malzeme ağırlığına göre son derece 'güçlü'dür (strong).",
    ],
    [
      "Earthquake early warning systems can ---- people a few seconds before strong shaking arrives.",
      ["alert", "confuse", "ignore", "injure", "punish"],
      "Erken uyarı sistemleri insanları sarsıntıdan önce 'uyarır' (alert).",
    ],
    [
      "Scientists are trying to ---- why bee populations have declined so sharply in recent years.",
      ["figure out", "turn down", "give up", "put off", "run over"],
      "Arı nüfusunun neden azaldığını 'anlamaya çalışmak' için 'figure out' kullanılır.",
    ],
    [
      "Mendeleev's periodic table was ---- successful because it predicted the properties of elements that had not yet been discovered.",
      ["particularly", "hardly", "barely", "slightly", "rarely"],
      "Henüz keşfedilmemiş elementlerin özelliklerini öngörmesi tablonun 'özellikle' (particularly) başarılı olmasının nedenidir.",
    ],
    [
      "Ocean currents ---- heat from the tropics towards the poles, influencing climate around the world.",
      ["transport", "absorb", "destroy", "freeze", "block"],
      "Okyanus akıntıları tropiklerden kutuplara ısı 'taşır' (transport).",
    ],
  ],
  grammar: [
    [
      "By the time Mendeleev published his table in 1869, chemists ---- about sixty elements.",
      ["had identified", "have identified", "identify", "will identify", "are identifying"],
      "1869'dan önce tamamlanmış eylem Past Perfect ile anlatılır: 'had identified'.",
    ],
    [
      "If hydrogen could be produced cheaply from renewable energy, it ---- a major fuel of the future.",
      ["might become", "will become", "became", "might have become", "becomes"],
      "Type 2 koşul (could be produced) ana cümlede 'might + V1' ister.",
    ],
    [
      "Graphene is a material ---- atoms are arranged in a single flat layer.",
      ["whose", "which", "where", "who", "that"],
      "Malzemenin atomlarından söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- their small size, bees play an enormous role in food production.",
      ["Despite", "Because of", "Thanks to", "Owing to", "Due to"],
      "Küçük boyutlarına 'rağmen' büyük rol oynamaları zıtlıktır: 'Despite'.",
    ],
    [
      "Seismologists still cannot predict exactly when an earthquake ----.",
      ["will occur", "will it occur", "does it occur", "occurring", "it will occur"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'when an earthquake will occur'.",
    ],
    [
      "Not only ---- lighter than steel, but it also conducts electricity extremely well.",
      ["is graphene", "graphene is", "graphene does", "does graphene", "has graphene"],
      "'Not only' cümle başında devrik yapı gerektirir: 'Not only is graphene lighter'.",
    ],
    [
      "Wind turbines are designed ---- in strong winds without being damaged.",
      ["to operate", "operating", "operate", "operated", "to operating"],
      "'be designed to do' kalıbı mastar ister.",
    ],
    [
      "The elements ---- in Mendeleev's table were arranged according to their atomic weight.",
      ["listed", "listing", "which listed", "to list", "have listed"],
      "Tabloda listelenen elementler edilgen anlamlı geçmiş ortaçla nitelenir: 'listed'.",
    ],
    [
      "Engineers recommend that new buildings in the region ---- to withstand strong earthquakes.",
      ["be designed", "are designed", "were designed", "will be designed", "designing"],
      "'recommend that' sonrası subjunctive ve edilgen gerekir: 'be designed'.",
    ],
    [
      "Warm water from the Gulf Stream flows towards Europe, ---- keeps the continent milder than other regions at the same latitude.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
    ],
    [
      "---- hydrogen produces only water when it burns, it is considered a clean fuel.",
      ["Since", "Although", "Unless", "Whereas", "Even if"],
      "Hidrojenin yalnızca su üretmesi temiz yakıt sayılmasının nedenidir: 'Since'.",
    ],
    [
      "The new sensors are expected ---- earthquake warnings much faster.",
      ["to provide", "providing", "provide", "provided", "to providing"],
      "'be expected to do' kalıbı mastar ister.",
    ],
    [
      "Graphene is ---- thin that it is considered a two-dimensional material.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (thin) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By 2030, wind power ---- one of the largest sources of electricity in Europe.",
      ["will have become", "has become", "became", "had become", "becomes"],
      "'By 2030' gelecekte tamamlanmış olacak bir durumu bildirir: Future Perfect 'will have become'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1869, the Russian chemist Dmitri Mendeleev arranged the known chemical elements in a table according to their atomic weight. He noticed that elements with similar properties appeared at regular intervals, {1} he grouped them into columns. What made his table so remarkable was his decision to leave gaps for elements {2} had not yet been discovered. He even predicted the properties of these missing elements in considerable detail. {3} the following years, several of them, including gallium and germanium, were discovered, and their properties closely matched his predictions. This success convinced many scientists {4} the periodic table reflected a fundamental pattern in nature. Today's table has been expanded to include more than one hundred and eighteen elements, {5} its basic structure remains the one Mendeleev proposed.",
      blanks: [
        [
          "(21) ----",
          ["so", "unless", "although", "because of", "whereas"],
          "Benzer özelliklerin düzenli aralıklarla görülmesinin sonucu sütunlara gruplamadır: 'so'.",
        ],
        [
          "(22) ----",
          ["that", "what", "whose", "where", "who"],
          "'elements' sözcüğünü niteleyen ve 'had not yet been discovered' yükleminin öznesi olan 'that' gerekir.",
        ],
        [
          "(23) ----",
          ["Over", "Since", "Until", "By", "At"],
          "'Over the following years' 'sonraki yıllar boyunca' anlamındadır.",
        ],
        [
          "(24) ----",
          ["that", "what", "which", "whether", "if"],
          "'convince someone that …' kalıbında isim cümlesi 'that' ile başlar.",
        ],
        [
          "(25) ----",
          ["but", "so", "because", "unless", "or"],
          "Tablonun genişlemesi ile temel yapının aynı kalması zıtlıktır: 'but'.",
        ],
      ],
    },
    {
      text:
        "Wind power has become one of the fastest-growing sources of renewable energy. Modern wind turbines work by converting the kinetic energy of moving air into electricity. When the wind blows, it turns the blades, {1} are connected to a generator inside the turbine. Because the power available increases dramatically with wind speed, turbines are usually placed in locations {2} strong, steady winds, such as hilltops and coastal areas. Offshore wind farms, built in the sea, can take advantage of even stronger winds, {3} they are more expensive to build and maintain. One challenge of wind power is that the wind does not blow all the time. {4}, energy storage systems and better electricity grids are needed {5} ensure a reliable supply.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'the blades' sözcüğüne atıf yapan ve 'are connected' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(27) ----",
          ["with", "without", "against", "despite", "except"],
          "Türbinler güçlü ve düzenli rüzgârları 'olan' yerlere kurulur: 'locations with strong winds'.",
        ],
        [
          "(28) ----",
          ["although", "because", "so that", "unless", "as if"],
          "Açık deniz rüzgâr çiftliklerinin avantajı ile daha pahalı olmaları karşılaştırılır: 'although'.",
        ],
        [
          "(29) ----",
          ["Therefore", "However", "Otherwise", "Similarly", "In contrast"],
          "Rüzgârın her zaman esmemesinin sonucu depolama sistemlerine ihtiyaç duyulmasıdır: 'Therefore'.",
        ],
        [
          "(30) ----",
          ["to", "for", "so", "in", "by"],
          "Amaç bildiren mastar gerekir: 'are needed to ensure'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although hydrogen is the most abundant element in the universe, ----.",
      [
        "most of it on Earth is bound up in water and other compounds",
        "it is the lightest of all the known chemical elements",
        "it can be used as a fuel in cars, buses and trains",
        "stars produce energy by converting hydrogen into helium",
        "it was first identified as an element in the eighteenth century",
      ],
      "'Although' zıtlık ister: evrende en bol element olmasına rağmen Dünya'da çoğu su ve başka bileşiklerde bağlıdır.",
    ],
    [
      "Many materials scientists believe that graphene ----.",
      [
        "could transform electronics, batteries and medical devices",
        "although it was first isolated using sticky tape",
        "which consists of a single layer of carbon atoms",
        "unless the cost of production falls significantly",
        "so that computers would have become much faster",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'could transform …' cümleyi tamamlar.",
    ],
    [
      "If the warning system had been installed earlier, ----.",
      [
        "more people might have had time to reach safety",
        "the earthquake struck the city early in the morning",
        "engineers will test the system again next year",
        "most buildings in the city were made of concrete",
        "the region had experienced several earthquakes",
      ],
      "Type 3 koşul cümlesi 'might have + V3' ile tamamlanır.",
    ],
    [
      "While honeybees receive much of the public's attention, ----.",
      [
        "wild bees and other insects also play a vital role in pollination",
        "they live in large colonies ruled by a single queen",
        "they produce honey that has been eaten for thousands of years",
        "many farmers keep bees to increase their crop yields",
        "some species of bee can sting more than once",
      ],
      "'While' iki durumu karşılaştırır: bal arıları ilgi görse de yaban arıları ve diğer böcekler de tozlaşmada hayati rol oynar.",
    ],
    [
      "Engineers are developing larger wind turbines ----.",
      [
        "in order to generate more electricity from each installation",
        "which had been used mainly on farms in the past",
        "although the wind is stronger at higher altitudes",
        "because the first turbines were built in Denmark",
        "unless the blades are made from new materials",
      ],
      "Daha büyük türbin geliştirmenin amacı her kurulumdan daha fazla elektrik üretmektir: 'in order to'.",
    ],
    [
      "Unless the decline in pollinating insects is reversed, ----.",
      [
        "the production of many fruits and vegetables could fall",
        "bees have been kept by humans for thousands of years",
        "most flowers had been pollinated by the wind",
        "some insects are active only at night",
        "honey is used in many traditional recipes",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: pek çok meyve ve sebzenin üretimi düşebilir.",
    ],
    [
      "Since graphene was first isolated in 2004, ----.",
      [
        "researchers have found thousands of potential applications for it",
        "it had been studied only in theory by physicists",
        "two scientists received the Nobel Prize for the discovery",
        "graphene will be used in many new smartphones",
        "most electronic devices were made from silicon",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have found'.",
    ],
    [
      "Even though the early warning gives only a few seconds' notice, ----.",
      [
        "it can be enough to stop trains and shut down gas lines",
        "earthquakes often occur near the edges of tectonic plates",
        "seismic waves travel at several kilometres per second",
        "most people feel the shaking before they hear the alarm",
        "the system uses a network of sensors across the country",
      ],
      "'Even though' beklenmedik bir sonuç ister: birkaç saniyelik uyarı bile trenleri durdurmaya yetebilir.",
    ],
    [
      "The faster the wind blows, ----.",
      [
        "the more electricity a turbine can generate",
        "because the blades turn more quickly",
        "although turbines stop in very strong winds",
        "which is measured by special instruments",
        "since wind farms are built on hills",
      ],
      "'The faster …, the more …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As the polar ice melts, ----.",
      [
        "fresh water enters the ocean and may weaken major currents",
        "most of the Arctic had been covered by thick ice",
        "polar bears hunt seals on the sea ice",
        "the poles receive less sunlight than the equator",
        "many scientists travel to Antarctica each summer",
      ],
      "'As' paralel bir değişim bildirir: kutup buzları eridikçe okyanusa tatlı su karışır ve akıntılar zayıflayabilir.",
    ],
    [
      "No sooner had the sensors detected the first seismic waves ----.",
      [
        "than warnings were sent to millions of mobile phones",
        "when the earthquake had already ended",
        "because the system was very modern",
        "so people left their homes quickly",
        "although some phones were switched off",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "The only by-product of a hydrogen fuel cell is water, which makes it an attractive alternative to petrol engines.",
      [
        "Hidrojen yakıt hücresinin tek yan ürünü sudur; bu da onu benzinli motorlara çekici bir alternatif yapar.",
        "Hidrojen yakıt hücresi suyu yakıt olarak kullandığı için benzinli motorlardan daha pahalıdır.",
        "Benzinli motorların tek yan ürünü sudur ve bu yüzden hidrojenden daha temizdir.",
        "Hidrojen yakıt hücreleri büyük miktarda zararlı gaz üretir.",
        "Hidrojen yakıt hücreleri benzinli motorlarla birlikte kullanılmak zorundadır.",
      ],
      "'The only by-product … is water' 'tek yan ürünü sudur', 'which makes it an attractive alternative' 'bu da onu çekici bir alternatif yapar' demektir.",
    ],
    [
      "Graphene was first isolated by scientists who used ordinary sticky tape to peel layers from a piece of graphite.",
      [
        "Grafen ilk kez, bir grafit parçasından katmanlar ayırmak için sıradan yapışkan bant kullanan bilim insanları tarafından elde edildi.",
        "Grafen, grafitten yapışkan bant üretmek isteyen bilim insanları tarafından tesadüfen yok edildi.",
        "Bilim insanları, grafeni yapışkan bant üretiminde kullanmayı başaramadı.",
        "Grafit, grafenin yapışkan bantla birleştirilmesiyle elde edilir.",
        "Sıradan yapışkan bant, grafitin katmanlarını birbirine yapıştırmak için kullanıldı.",
      ],
      "'was first isolated by scientists who used ordinary sticky tape to peel layers' 'katmanlar ayırmak için sıradan yapışkan bant kullanan bilim insanları tarafından ilk kez elde edildi' karşılığıdır.",
    ],
    [
      "Early warning systems detect the faster but weaker waves that travel ahead of the destructive shaking.",
      [
        "Erken uyarı sistemleri, yıkıcı sarsıntıdan önce ilerleyen daha hızlı ama daha zayıf dalgaları algılar.",
        "Erken uyarı sistemleri, yalnızca yıkıcı sarsıntı başladıktan sonra çalışır.",
        "Daha zayıf dalgalar, yıkıcı sarsıntıdan çok daha yavaş ilerler.",
        "Yıkıcı sarsıntı, erken uyarı sistemlerinin dalgaları algılamasını engeller.",
        "Erken uyarı sistemleri dalgaları değil, binalardaki hasarı ölçer.",
      ],
      "'detect the faster but weaker waves that travel ahead of the destructive shaking' 'yıkıcı sarsıntıdan önce ilerleyen daha hızlı ama daha zayıf dalgaları algılar' demektir.",
    ],
    [
      "Around three-quarters of the world's food crops depend at least partly on animal pollinators.",
      [
        "Dünyadaki gıda bitkilerinin yaklaşık dörtte üçü en azından kısmen hayvan tozlayıcılara bağımlıdır.",
        "Dünyadaki gıda bitkilerinin yalnızca dörtte biri hayvanlar tarafından tozlanır.",
        "Hayvan tozlayıcılar, gıda bitkilerinin dörtte üçünü tüketir.",
        "Gıda bitkilerinin çoğu tozlayıcılara hiç ihtiyaç duymaz.",
        "Tozlayıcı hayvanların dörtte üçü gıda bitkileriyle beslenir.",
      ],
      "'Around three-quarters … depend at least partly on' 'yaklaşık dörtte üçü en azından kısmen … bağımlıdır' demektir.",
    ],
    [
      "Had Mendeleev not left gaps in his table, the missing elements might have been found much later.",
      [
        "Mendeleev tablosunda boşluklar bırakmamış olsaydı eksik elementler çok daha sonra bulunabilirdi.",
        "Mendeleev tablosunda boşluklar bıraktığı için eksik elementler hiç bulunamadı.",
        "Eksik elementler, Mendeleev'in tablosundan çok önce keşfedilmişti.",
        "Mendeleev, eksik elementleri bulduktan sonra tablosundaki boşlukları doldurdu.",
        "Mendeleev'in tablosundaki boşluklar, yeni elementlerin keşfini engelledi.",
      ],
      "'Had Mendeleev not left gaps' devrik Type 3 koşuldur: 'boşluklar bırakmamış olsaydı'; 'might have been found much later' 'çok daha sonra bulunabilirdi'.",
    ],
    [
      "Deep ocean currents move so slowly that water can take a thousand years to complete a full circuit.",
      [
        "Derin okyanus akıntıları o kadar yavaş hareket eder ki suyun tam bir döngüyü tamamlaması bin yıl sürebilir.",
        "Derin okyanus akıntıları çok hızlı hareket ettiği için su her yıl dünyayı dolaşır.",
        "Okyanus suyu, bin yılda bir derin akıntılara karışır.",
        "Derin okyanus akıntıları yüzey akıntılarından çok daha hızlıdır.",
        "Bin yıl önce okyanuslarda akıntı bulunmuyordu.",
      ],
      "'move so slowly that … can take a thousand years' 'o kadar yavaş hareket eder ki … bin yıl sürebilir' demektir.",
    ],
  ],
  trEn: [
    [
      "Hidrojen, yenilenebilir enerji kullanılarak sudan elde edilebilir.",
      [
        "Hydrogen can be obtained from water using renewable energy.",
        "Water can be obtained from hydrogen without using any energy.",
        "Renewable energy is produced by burning hydrogen and water together.",
        "Hydrogen cannot be produced without using fossil fuels.",
        "Water is the main source of renewable energy in the world.",
      ],
      "'sudan elde edilebilir' 'can be obtained from water', 'yenilenebilir enerji kullanılarak' 'using renewable energy' karşılığıdır.",
    ],
    [
      "Grafen, bilinen en ince ve en güçlü malzemelerden biridir.",
      [
        "Graphene is one of the thinnest and strongest materials known.",
        "Graphene is one of the thickest and weakest materials known.",
        "Graphene is the only material that is both thin and weak.",
        "The strongest materials known are all thicker than graphene.",
        "Graphene becomes stronger as it becomes thicker.",
      ],
      "'bilinen en ince ve en güçlü malzemelerden biri' 'one of the thinnest and strongest materials known' karşılığıdır.",
    ],
    [
      "Depremlerin zamanı ve yeri hâlâ kesin olarak tahmin edilemiyor.",
      [
        "The time and place of earthquakes still cannot be predicted precisely.",
        "The time and place of earthquakes can now be predicted precisely.",
        "Earthquakes always occur at the same time and place.",
        "Scientists can predict earthquakes only in certain countries.",
        "The time of earthquakes is easier to predict than their strength.",
      ],
      "'hâlâ kesin olarak tahmin edilemiyor' 'still cannot be predicted precisely' karşılığıdır.",
    ],
    [
      "Pestisitler ve habitat kaybı, arı popülasyonlarındaki düşüşün başlıca nedenleri arasında yer alıyor.",
      [
        "Pesticides and habitat loss are among the main causes of the decline in bee populations.",
        "Pesticides and habitat loss have helped bee populations to increase.",
        "Bees are among the main causes of habitat loss in many regions.",
        "The decline in bee populations has caused pesticides to be banned.",
        "Habitat loss has no effect on bees, unlike pesticides.",
      ],
      "'başlıca nedenleri arasında yer alıyor' 'are among the main causes of', 'düşüş' 'decline' karşılığıdır.",
    ],
    [
      "Mendeleev'in tablosu, elementleri atom ağırlıklarına göre sıraladı.",
      [
        "Mendeleev's table arranged the elements according to their atomic weight.",
        "Mendeleev's table arranged the elements according to their colour.",
        "Mendeleev discovered the atomic weight of every element.",
        "The elements were arranged randomly in Mendeleev's table.",
        "Mendeleev's table contained only elements found in Russia.",
      ],
      "'atom ağırlıklarına göre sıraladı' 'arranged … according to their atomic weight' karşılığıdır.",
    ],
    [
      "Rüzgâr türbinleri, hareket eden havanın enerjisini elektriğe dönüştürür.",
      [
        "Wind turbines convert the energy of moving air into electricity.",
        "Wind turbines convert electricity into moving air.",
        "Moving air is produced by electricity in wind turbines.",
        "Wind turbines store moving air for later use.",
        "Electricity is used to stop wind turbines in strong winds.",
      ],
      "'hareket eden havanın enerjisini elektriğe dönüştürür' 'convert the energy of moving air into electricity' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Hydrogen is often described as a fuel of the future because, when it is used in a fuel cell or burned, the only by-product is water. It can store large amounts of energy and could help to decarbonise industries such as steel-making, shipping and aviation, which are difficult to power with batteries alone. However, almost all of the hydrogen produced today comes from natural gas in a process that releases large amounts of carbon dioxide. So-called 'green hydrogen' is made by using electricity from renewable sources to split water into hydrogen and oxygen, but this process is currently much more expensive. In addition, hydrogen is difficult to store and transport, as it must be compressed to very high pressures or cooled to extremely low temperatures.",
      questions: [
        [
          "According to the passage, hydrogen could be especially useful for ----.",
          [
            "industries that are difficult to power with batteries alone",
            "producing natural gas more cheaply and efficiently",
            "replacing water as a source of drinking water",
            "lowering the temperature of industrial machines",
            "making batteries for small electronic devices",
          ],
          "Hidrojen, çelik üretimi, denizcilik ve havacılık gibi yalnızca bataryalarla çalıştırılması zor sektörlerde yararlı olabilir.",
        ],
        [
          "It is stated in the passage that most hydrogen produced today ----.",
          [
            "is made from natural gas in a process that releases carbon dioxide",
            "is produced using electricity from wind and solar power",
            "is collected directly from the atmosphere",
            "is used mainly as drinking water",
            "has no impact on the environment",
          ],
          "Bugün üretilen hidrojenin neredeyse tamamı büyük miktarda karbondioksit salan bir süreçle doğal gazdan elde edilir.",
        ],
        [
          "One difficulty with hydrogen mentioned in the passage is that it ----.",
          [
            "must be highly compressed or extremely cooled for storage",
            "produces large amounts of harmful smoke when burned",
            "cannot store as much energy as ordinary batteries",
            "can only be produced in very small amounts",
            "is heavier than most other fuels",
          ],
          "Hidrojenin depolanması ve taşınması zordur; çok yüksek basınca sıkıştırılması ya da aşırı soğutulması gerekir.",
        ],
      ],
    },
    {
      text:
        "Graphene, a single layer of carbon atoms arranged in a hexagonal pattern, was first isolated in 2004 by two physicists at the University of Manchester, who were awarded the Nobel Prize in 2010. The material has extraordinary properties: it is about two hundred times stronger than steel by weight, almost completely transparent, highly flexible and an excellent conductor of heat and electricity. Researchers have proposed using it in a wide range of applications, from faster electronics and longer-lasting batteries to water filters and medical sensors. However, turning this potential into commercial products has proved difficult. Producing large sheets of high-quality graphene remains expensive, and many applications still require further research before they can compete with existing technologies.",
      questions: [
        [
          "According to the passage, graphene consists of ----.",
          [
            "a single layer of carbon atoms in a hexagonal pattern",
            "several thick layers of steel and carbon",
            "a mixture of carbon and water molecules",
            "transparent plastic produced from oil",
            "metal atoms arranged in long chains",
          ],
          "Grafen, altıgen düzende dizilmiş tek bir karbon atomu katmanıdır.",
        ],
        [
          "Which of the following is NOT mentioned as a property of graphene?",
          [
            "It is magnetic.",
            "It is extremely strong.",
            "It is almost transparent.",
            "It is highly flexible.",
            "It conducts electricity well.",
          ],
          "Parçada güç, saydamlık, esneklik ve ısı-elektrik iletkenliği sayılır; manyetiklikten söz edilmez.",
        ],
        [
          "The author suggests that graphene ----.",
          [
            "has great potential but has been difficult to commercialise",
            "has already replaced silicon in all electronic devices",
            "is too weak for most practical uses",
            "was discovered by accident in 2010",
            "is cheaper to produce than steel",
          ],
          "Yazar grafenin büyük potansiyeli olduğunu, ancak ticari ürünlere dönüştürülmesinin zor olduğunu belirtir.",
        ],
      ],
    },
    {
      text:
        "Although scientists cannot yet predict earthquakes, they can provide warnings once one has begun. An earthquake produces two main types of seismic waves. Primary waves, or P-waves, travel fastest but usually cause little damage. Secondary waves, or S-waves, travel more slowly and cause most of the strong shaking. Early warning systems use networks of sensors to detect P-waves and quickly calculate the location and size of the earthquake, sending alerts before the S-waves arrive. Depending on the distance from the epicentre, this may provide a few seconds to a minute of warning. Although this is a short time, it can allow people to take cover, surgeons to stop delicate operations, trains to slow down and factories to shut down dangerous machinery.",
      questions: [
        [
          "According to the passage, P-waves ----.",
          [
            "travel faster than S-waves but usually cause little damage",
            "cause most of the strong shaking during an earthquake",
            "travel more slowly than any other seismic waves",
            "can be used to predict earthquakes days in advance",
            "are produced only by very large earthquakes",
          ],
          "P dalgaları en hızlı ilerler ama genellikle az hasara yol açar.",
        ],
        [
          "Early warning systems work by ----.",
          [
            "detecting P-waves and sending alerts before S-waves arrive",
            "predicting earthquakes several days before they happen",
            "stopping S-waves from reaching populated areas",
            "measuring the damage after the shaking has ended",
            "reducing the size of earthquakes",
          ],
          "Erken uyarı sistemleri P dalgalarını algılar ve S dalgaları gelmeden uyarı gönderir.",
        ],
        [
          "The examples in the last sentence are given to show that ----.",
          [
            "even a short warning can have important practical benefits",
            "most people ignore earthquake warnings",
            "trains and factories cause most earthquake damage",
            "surgeons should not operate in earthquake zones",
            "warnings are useful only for large cities",
          ],
          "Son cümledeki örnekler kısa bir uyarının bile önemli pratik yararları olabileceğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Bees and other pollinating insects are essential for the reproduction of many flowering plants, including a large share of the crops that humans eat. Over recent decades, however, many populations of wild bees have declined significantly, and beekeepers in some countries have reported unusually high losses of honeybee colonies. Scientists have identified several contributing factors. The loss of wildflower meadows and hedgerows has reduced the food and nesting sites available to bees. Certain pesticides, particularly a group known as neonicotinoids, can impair bees' ability to navigate and reproduce. Parasites and diseases have also spread, and climate change may be disrupting the timing between when flowers bloom and when bees are active. Because these factors interact, experts argue that protecting pollinators requires a combination of measures.",
      questions: [
        [
          "According to the passage, the loss of wildflower meadows has ----.",
          [
            "reduced the food and nesting sites available to bees",
            "increased the number of wild bee species",
            "made pesticides less harmful to bees",
            "caused flowers to bloom earlier in the year",
            "helped honeybee colonies to grow",
          ],
          "Kır çiçeği çayırlarının kaybı arılar için mevcut yiyecek ve yuva alanlarını azaltmıştır.",
        ],
        [
          "Neonicotinoids are mentioned in the passage as ----.",
          [
            "pesticides that may affect bees' navigation and reproduction",
            "parasites that attack honeybee colonies",
            "flowers that provide food for wild bees",
            "a disease spread by climate change",
            "a method used by beekeepers to protect colonies",
          ],
          "Neonikotinoidler, arıların yön bulma ve üreme yeteneğini bozabilen bir pestisit grubudur.",
        ],
        [
          "Experts believe that a combination of measures is needed because ----.",
          [
            "the various causes of decline interact with one another",
            "a single pesticide is responsible for all the losses",
            "climate change is the only important factor",
            "bees are not important for most food crops",
            "beekeepers have already solved the problem",
          ],
          "Bu etkenler birbirleriyle etkileşim hâlinde olduğu için tozlayıcıları korumak birden çok önlemin birleşimini gerektirir.",
        ],
      ],
    },
    {
      text:
        "The world's oceans are connected by a vast system of currents sometimes called the 'global conveyor belt'. Surface currents are driven mainly by winds, but deep-ocean circulation is driven by differences in water density, which depend on temperature and salt content. In the North Atlantic, warm surface water travelling north from the tropics gradually cools and, as sea ice forms, becomes saltier. This cold, dense water sinks to great depths and flows slowly southward, eventually spreading through the other ocean basins. This circulation transports enormous amounts of heat and helps to keep north-western Europe much milder than other regions at the same latitude. Some scientists are concerned that melting ice from Greenland, by adding fresh water to the North Atlantic, could weaken this system.",
      questions: [
        [
          "According to the passage, deep-ocean circulation is driven mainly by ----.",
          [
            "differences in the density of seawater",
            "winds blowing across the ocean surface",
            "the movement of large ships",
            "volcanic activity on the ocean floor",
            "the rotation of the moon",
          ],
          "Derin okyanus dolaşımı esas olarak suyun yoğunluk farklarından kaynaklanır.",
        ],
        [
          "It is stated in the passage that in the North Atlantic, surface water sinks because ----.",
          [
            "it becomes colder and saltier, and therefore denser",
            "it becomes warmer and lighter as it moves north",
            "it is pushed down by strong winds",
            "it mixes with fresh water from rivers",
            "ships disturb the surface of the ocean",
          ],
          "Yüzey suyu kuzeye ilerledikçe soğur, deniz buzu oluştukça tuzlanır ve yoğunlaşarak batar.",
        ],
        [
          "Some scientists are concerned that melting ice from Greenland could ----.",
          [
            "weaken the ocean circulation by adding fresh water",
            "make the North Atlantic much saltier",
            "increase the amount of heat reaching Europe",
            "cause surface currents to stop completely",
            "raise the temperature of deep ocean water",
          ],
          "Grönland'dan eriyen buzlar Kuzey Atlantik'e tatlı su ekleyerek bu sistemi zayıflatabilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "For most of history, people believed that the Earth was the centre of the universe. ---- It was not until the seventeenth century, however, that this idea became widely accepted.",
      [
        "In the sixteenth century, Copernicus proposed that the Earth and other planets orbit the Sun.",
        "The Earth is the third planet from the Sun in our solar system.",
        "Many ancient cultures named the stars after their gods and heroes.",
        "Telescopes today can observe galaxies billions of light years away.",
        "The Moon takes about twenty-seven days to orbit the Earth.",
      ],
      "'this idea' ifadesi öncesinde yeni bir fikri tanıtan cümle gerektirir: Kopernik'in gezegenlerin Güneş etrafında döndüğünü öne sürmesi.",
    ],
    [
      "Diamonds and graphite are both made entirely of carbon atoms. ---- As a result, diamond is the hardest natural material, while graphite is soft enough to be used in pencils.",
      [
        "However, the atoms are arranged in very different ways in the two materials.",
        "Diamonds are mined in several countries, including South Africa and Russia.",
        "Pencils have been used for writing and drawing for several centuries.",
        "Carbon is found in all living things on our planet.",
        "Many people buy diamond rings as a symbol of their engagement.",
      ],
      "'As a result' öncesinde iki malzemenin farklı özelliklerini açıklayan bir neden gerekir: atomların farklı dizilimi.",
    ],
    [
      "---- For example, the Atacama Desert in Chile receives so little rain that some weather stations there have never recorded any.",
      [
        "Some regions of the world are extremely dry.",
        "Chile is a long and narrow country in South America.",
        "Rain is measured using a simple instrument called a rain gauge.",
        "Many deserts are very hot during the day and cold at night.",
        "Weather stations are found in almost every country.",
      ],
      "'For example' ile verilen Atacama örneği, dünyanın bazı bölgelerinin son derece kurak olduğunu söyleyen bir genelleme gerektirir.",
    ],
    [
      "Solar panels have become much cheaper over the past decade. ---- In addition, improvements in efficiency mean that each panel now produces more electricity.",
      [
        "Mass production has greatly reduced the cost of manufacturing them.",
        "The Sun is a star located about 150 million kilometres from Earth.",
        "Many houses in sunny countries have flat roofs.",
        "Solar energy was first used to heat water.",
        "Some people install solar panels on their boats.",
      ],
      "'In addition' ile ikinci bir gelişme eklenir; boşlukta ilk gelişme (seri üretimin maliyeti düşürmesi) yer almalıdır.",
    ],
    [
      "Lightning is a giant electrical discharge that occurs during thunderstorms. ---- Consequently, we always see the flash of lightning before we hear the thunder.",
      [
        "Light travels much faster than sound.",
        "Thunderstorms are most common in tropical regions.",
        "Lightning can strike the same place more than once.",
        "Many people are afraid of thunder.",
        "Tall buildings often have lightning rods on their roofs.",
      ],
      "'Consequently' öncesinde şimşeği gök gürültüsünden önce görmemizin nedeni gerekir: ışık sesten çok daha hızlıdır.",
    ],
    [
      "Some scientists have proposed reflecting sunlight back into space to cool the planet, for example by releasing particles into the upper atmosphere. ---- Critics, however, warn that such methods could have unpredictable effects on rainfall and weather patterns.",
      [
        "Supporters argue that this could buy time while greenhouse gas emissions are reduced.",
        "The upper atmosphere is much colder than the air near the ground.",
        "Sunlight takes about eight minutes to reach the Earth.",
        "Many people enjoy sunny weather during their holidays.",
        "Volcanoes release particles into the atmosphere when they erupt.",
      ],
      "'Critics, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Tides are caused mainly by the gravitational pull of the Moon.",
        "As the Earth rotates, most coastal areas experience two high tides and two low tides each day.",
        "Many fishing villages are located along the coast.",
        "The Sun also affects tides, although its influence is weaker.",
        "When the Sun and Moon are aligned, the difference between high and low tide is greatest.",
      ],
      odd: 2,
      why: "Parça gelgitlerin nedenlerini anlatır. Kıyıdaki balıkçı köylerinden söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Fossils provide important evidence about life in the distant past.",
        "They usually form when organisms are buried quickly in sediment.",
        "Over millions of years, the remains are slowly replaced by minerals.",
        "Many museums have gift shops near the entrance.",
        "By studying fossils, scientists can trace how species have changed over time.",
      ],
      odd: 3,
      why: "Parça fosillerin oluşumunu anlatır. Müzelerdeki hediyelik eşya dükkânlarından söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Rainbows form when sunlight is refracted and reflected inside water droplets.",
        "Each colour of light is bent by a slightly different amount.",
        "This separates white light into its component colours.",
        "Rainbows are always seen with the Sun behind the observer.",
        "Many children enjoy painting pictures with bright colours.",
      ],
      odd: 4,
      why: "Parça gökkuşağının oluşumunu anlatır. Çocukların resim yapmasından söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Recycling aluminium saves a great deal of energy.",
        "Coffee is one of the most traded goods in the world.",
        "Producing new aluminium from ore requires large amounts of electricity.",
        "In contrast, recycled aluminium needs only about five percent of that energy.",
        "Aluminium can also be recycled again and again without losing its quality.",
      ],
      odd: 1,
      why: "Parça alüminyum geri dönüşümünü anlatır. Kahve ticaretinden söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sound is a wave that travels through materials by making particles vibrate.",
        "It cannot travel through a vacuum, where there are no particles.",
        "Sound travels faster in water than in air, and faster still in solids.",
        "Many people listen to music while they exercise.",
        "This is why whales can communicate over very long distances underwater.",
      ],
      odd: 3,
      why: "Parça sesin yayılmasını anlatır. Egzersiz sırasında müzik dinlemekten söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Antarctica is the coldest, windiest and driest continent on Earth.",
        "About ninety-eight percent of it is covered by ice.",
        "The ice sheet contains most of the world's fresh water.",
        "Scientists from many countries carry out research there.",
        "Penguins are often used as symbols in advertising.",
      ],
      odd: 4,
      why: "Parça Antarktika'yı anlatır. Penguenlerin reklamlarda kullanılmasından söz eden V. cümle konu dışıdır.",
    },
  ],
};
