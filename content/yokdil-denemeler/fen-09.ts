import type { YokdilDeneme } from "./types";

export const FEN_09: YokdilDeneme = {
  no: 9,
  field: "fen",
  vocab: [
    [
      "Large dams can ---- the natural flow of rivers, affecting fish that migrate upstream to breed.",
      ["disrupt", "restore", "improve", "measure", "accelerate"],
      "Büyük barajların nehirlerin doğal akışını 'bozabileceği' (disrupt) anlatılır.",
    ],
    [
      "Spider silk is ---- strong, yet it is also light and highly elastic.",
      ["extraordinarily", "barely", "hardly", "rarely", "slightly"],
      "'yet it is also light' ile birlikte ipeğin 'olağanüstü' (extraordinarily) güçlü olduğu anlatılır.",
    ],
    [
      "In 2022, NASA successfully ---- the path of a small asteroid by crashing a spacecraft into it.",
      ["altered", "ignored", "predicted", "copied", "discovered"],
      "Uzay aracının çarpmasıyla asteroidin yörüngesinin 'değiştirildiği' (altered) anlatılır.",
    ],
    [
      "Rising sea levels may eventually force millions of people to ---- coastal cities.",
      ["move away from", "look forward to", "come up with", "make up for", "take after"],
      "Deniz seviyesinin yükselmesi insanları kıyı şehirlerinden 'ayrılmaya' (move away from) zorlayabilir.",
    ],
    [
      "Nuclear power plants produce very little carbon dioxide, but the ---- of radioactive waste remains a major challenge.",
      ["disposal", "invention", "production", "celebration", "decoration"],
      "Radyoaktif atıkların 'bertarafı' (disposal) önemli bir sorun olarak kalmaktadır.",
    ],
    [
      "Alessandro Volta's battery was the first device able to ---- a steady electric current.",
      ["supply", "absorb", "prevent", "measure", "destroy"],
      "Volta'nın pili sürekli bir elektrik akımı 'sağlayabilen' (supply) ilk cihazdı.",
    ],
  ],
  grammar: [
    [
      "Before Volta built his battery in 1800, scientists ---- only brief sparks of static electricity.",
      ["had produced", "have produced", "produce", "will produce", "are producing"],
      "1800'den önceki geçmiş durum Past Perfect ile anlatılır: 'had produced'.",
    ],
    [
      "If an asteroid of that size ---- the Earth, it could destroy an entire city.",
      ["struck", "strikes", "had struck", "will strike", "would strike"],
      "Ana cümle 'could destroy' olduğundan Type 2 koşul gerekir: if + Past 'struck'.",
    ],
    [
      "Spiders produce several types of silk, each of ---- has different properties.",
      ["which", "whom", "who", "them", "that"],
      "'each of' sonrasında 'types of silk' ifadesine atıf yapan ilgi zamiri 'which' gerekir.",
    ],
    [
      "---- the benefits of hydroelectric power, large dams can cause serious environmental damage.",
      ["Despite", "Because of", "Thanks to", "Owing to", "Due to"],
      "Yararlarına 'rağmen' çevreye zarar verebilmesi zıtlıktır: 'Despite'.",
    ],
    [
      "Scientists are trying to predict how much sea levels ---- by the end of the century.",
      ["will rise", "will they rise", "do they rise", "rising", "they will rise"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'how much sea levels will rise'.",
    ],
    [
      "Rarely ---- a scientific experiment attracted so much public attention.",
      ["has", "it has", "had it", "did", "it was"],
      "'Rarely' cümle başında devrik yapı gerektirir: 'Rarely has a scientific experiment attracted'.",
    ],
    [
      "Researchers have succeeded in ---- spider silk proteins using genetically modified bacteria.",
      ["producing", "to produce", "produce", "produced", "to producing"],
      "'succeed in' edattan sonra '-ing' alır: 'succeeded in producing'.",
    ],
    [
      "The meat ---- in the laboratory is made from animal cells grown in large tanks.",
      ["produced", "producing", "which produces", "to produce", "has produced"],
      "Laboratuvarda üretilen et edilgen anlamlı geçmiş ortaçla nitelenir: 'produced'.",
    ],
    [
      "The safety agency demanded that the reactor ---- immediately for inspection.",
      ["be shut down", "is shut down", "was shut down", "will be shut down", "shutting down"],
      "'demand that' sonrası subjunctive ve edilgen gerekir: 'be shut down'.",
    ],
    [
      "Warmer water takes up more space than colder water, ---- contributes to rising sea levels.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
    ],
    [
      "---- laboratory-grown meat becomes much cheaper, few consumers are likely to buy it.",
      ["Unless", "Because", "Although", "Since", "Whereas"],
      "Çok daha ucuzlamadıkça az sayıda tüketicinin satın alacağı anlatılır: 'Unless'.",
    ],
    [
      "The spacecraft was intended ---- whether an asteroid's orbit could be changed.",
      ["to test", "testing", "test", "tested", "to testing"],
      "'be intended to do' kalıbı mastar ister.",
    ],
    [
      "The dam was ---- large that it took more than ten years to build.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (large) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By 2100, global sea levels ---- by between thirty centimetres and one metre, according to some estimates.",
      ["will have risen", "have risen", "rose", "had risen", "rise"],
      "'By 2100' gelecekte tamamlanmış olacak bir durumu bildirir: 'will have risen'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1800, the Italian physicist Alessandro Volta built a device {1} transformed the study of electricity. It consisted of a stack of alternating discs of zinc and copper, separated by pieces of cardboard soaked in salt water. When the top and bottom of the stack were connected by a wire, a steady electric current flowed. Before this invention, scientists had been able to produce only brief sparks of static electricity, {2} made it difficult to study electrical phenomena. Volta's 'pile', as it was called, was the first battery, and it soon allowed researchers to carry out new experiments. {3} example, scientists used it to split water into hydrogen and oxygen. In honour of his achievement, the unit of electrical potential is named the 'volt'. Modern batteries, {4} are far more powerful, still work {5} the same basic principle.",
      blanks: [
        [
          "(21) ----",
          ["that", "what", "whose", "where", "who"],
          "'a device' sözcüğünü niteleyen ve 'transformed' fiilinin öznesi olan ilgi zamiri 'that' gerekir.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
        ],
        [
          "(23) ----",
          ["For", "In", "As", "By", "On"],
          "'For example' kalıbı örnek vermek için kullanılır.",
        ],
        [
          "(24) ----",
          ["which", "who", "what", "where", "whose"],
          "Virgüller arasında 'Modern batteries' ifadesine atıf yapan ve 'are' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(25) ----",
          ["on", "at", "in", "for", "by"],
          "'work on the same principle' (aynı ilkeye göre çalışmak) kalıbı 'on' ister.",
        ],
      ],
    },
    {
      text:
        "Global sea levels have risen by more than twenty centimetres since 1900, and the rate of increase is accelerating. Two main processes are responsible. First, as ocean water warms, it expands, {1} it takes up more space. Second, melting glaciers and ice sheets on land, particularly in Greenland and Antarctica, add large amounts of water to the oceans. {2} sea ice, which floats and therefore does not raise sea levels when it melts, ice on land contributes directly to the rise. Even small increases can have serious consequences, {3} they make coastal flooding during storms more frequent and severe. Many low-lying cities and island nations are already investing in sea walls and other defences, {4} some experts argue that, in the long term, certain areas may {5} to be abandoned.",
      blanks: [
        [
          "(26) ----",
          ["so", "unless", "although", "because of", "whereas"],
          "Suyun genleşmesinin sonucu daha fazla yer kaplamasıdır: 'so'.",
        ],
        [
          "(27) ----",
          ["Unlike", "Like", "Because of", "Thanks to", "Including"],
          "Deniz buzu ile karadaki buz karşılaştırılır; deniz buzu deniz seviyesini yükseltmez: 'Unlike'.",
        ],
        [
          "(28) ----",
          ["as", "unless", "although", "so that", "even if"],
          "Küçük artışların ciddi sonuçlarının nedeni kıyı taşkınlarını sıklaştırmasıdır: neden bildiren 'as'.",
        ],
        [
          "(29) ----",
          ["while", "because", "unless", "so that", "as if"],
          "Şehirlerin savunmaya yatırım yapması ile bazı alanların terk edilmesi gerekebileceği karşılaştırılır: 'while'.",
        ],
        [
          "(30) ----",
          ["have", "had", "must", "should", "ought"],
          "'may have to be abandoned' (terk edilmek zorunda kalabilir) yapısı gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although hydroelectric power produces very little carbon dioxide, ----.",
      [
        "large dams can flood valleys and force communities to move",
        "it provides about a sixth of the world's electricity",
        "the first hydroelectric plants were built in the 1880s",
        "it uses the energy of flowing water to turn turbines",
        "many countries in South America depend heavily on it",
      ],
      "'Although' zıtlık ister: çok az karbondioksit üretse de büyük barajlar vadileri sular altında bırakıp toplulukları göçe zorlayabilir.",
    ],
    [
      "Many energy experts argue that nuclear power ----.",
      [
        "should play a role in reducing carbon emissions",
        "although several serious accidents have occurred",
        "which uses uranium as its main fuel",
        "unless new reactors are built more quickly",
        "so that countries could have closed coal plants",
      ],
      "'argue that' sonrası tam bir yüklem gerekir; yalnızca 'should play a role …' cümleyi tamamlar.",
    ],
    [
      "If scientists could produce spider silk in large quantities, ----.",
      [
        "it might be used to make lighter and stronger materials",
        "spiders produce silk from glands in their bodies",
        "the silk was used by ancient peoples for fishing",
        "many spiders build a new web every day",
        "scientists had studied spiders for centuries",
      ],
      "Type 2 koşul cümlesi 'might + V1' ile tamamlanır.",
    ],
    [
      "While most asteroids pose no threat to the Earth, ----.",
      [
        "a large impact could have catastrophic consequences",
        "they orbit the Sun mainly between Mars and Jupiter",
        "some of them are several hundred kilometres wide",
        "astronomers have discovered more than a million",
        "they are made of rock, metal or a mixture of both",
      ],
      "'While' iki karşıt durumu bağlar: çoğu asteroit tehdit oluşturmasa da büyük bir çarpışma felaket sonuçlar doğurabilir.",
    ],
    [
      "Several companies are developing laboratory-grown meat ----.",
      [
        "in order to reduce the environmental impact of livestock farming",
        "which most consumers had been eating for many decades",
        "although meat is an important source of protein",
        "because cattle are mostly raised in large countries",
        "unless the price of vegetables falls sharply",
      ],
      "Laboratuvar eti geliştirmenin amacı hayvancılığın çevresel etkisini azaltmaktır: 'in order to'.",
    ],
    [
      "Unless coastal defences are improved, ----.",
      [
        "flooding will become more frequent in many low-lying cities",
        "most coastal cities were built centuries ago",
        "sea walls had protected the city in the past",
        "many people enjoy living near the sea",
        "ports are important for international trade",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: alçak şehirlerde taşkınlar daha sık olacaktır.",
    ],
    [
      "Since the first battery was invented, ----.",
      [
        "batteries have become smaller, lighter and much more powerful",
        "scientists had studied electricity for many centuries",
        "Volta was rewarded by the emperor Napoleon",
        "new batteries will be used in electric aircraft",
        "most experiments used static electricity",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have become'.",
    ],
    [
      "Even though nuclear accidents are rare, ----.",
      [
        "public concern about safety remains high in many countries",
        "nuclear power provides about a tenth of the world's electricity",
        "reactors use the heat from splitting atoms to make steam",
        "uranium is mined in several countries",
        "many reactors were built in the 1970s",
      ],
      "'Even though' beklenmedik bir sonuç ister: kazalar nadir olsa da güvenlik kaygısı yüksek kalır.",
    ],
    [
      "The more ice that melts on land, ----.",
      [
        "the higher global sea levels will rise",
        "because the Earth is getting warmer",
        "although sea ice also melts in summer",
        "which scientists measure with satellites",
        "since Greenland is very large",
      ],
      "'The more …, the higher …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As the reservoir behind the dam filled with water, ----.",
      [
        "several villages and farms disappeared beneath it",
        "most villagers had moved to the city",
        "dams are built from concrete and steel",
        "the river flows into the sea",
        "electricity is used in every home",
      ],
      "'As' paralel bir değişim bildirir: baraj gölü doldukça köyler ve çiftlikler sular altında kaldı.",
    ],
    [
      "Hardly had the spacecraft hit the asteroid ----.",
      [
        "when telescopes began to measure the change in its orbit",
        "than the mission was very successful",
        "because the scientists had planned carefully",
        "so the team celebrated in the control room",
        "although the asteroid was very small",
      ],
      "'Hardly … when …' kalıbı 'when' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Hydroelectric dams can provide a reliable supply of electricity, as the flow of water can be controlled.",
      [
        "Hidroelektrik barajları, su akışı kontrol edilebildiği için güvenilir bir elektrik kaynağı sağlayabilir.",
        "Hidroelektrik barajları, su akışı kontrol edilemediği için elektrik üretiminde güvenilmezdir.",
        "Elektrik, barajlardaki su akışını kontrol etmek için kullanılır.",
        "Barajlar, yalnızca yağmurlu mevsimlerde elektrik üretebilir.",
        "Su akışı, barajların elektrik üretmesini engeller.",
      ],
      "'as the flow of water can be controlled' 'su akışı kontrol edilebildiği için' anlamındadır.",
    ],
    [
      "Spent nuclear fuel remains dangerously radioactive for thousands of years and must be stored safely.",
      [
        "Kullanılmış nükleer yakıt binlerce yıl boyunca tehlikeli derecede radyoaktif kalır ve güvenli bir şekilde depolanmalıdır.",
        "Kullanılmış nükleer yakıt birkaç gün içinde radyoaktivitesini kaybeder.",
        "Nükleer yakıt, depolandığında daha az tehlikeli hâle gelmez ve yeniden kullanılamaz.",
        "Radyoaktif atıklar, binlerce yıl boyunca enerji üretmek için kullanılır.",
        "Kullanılmış nükleer yakıtın depolanmasına gerek yoktur.",
      ],
      "'remains dangerously radioactive for thousands of years and must be stored safely' 'binlerce yıl tehlikeli derecede radyoaktif kalır ve güvenli şekilde depolanmalıdır' demektir.",
    ],
    [
      "Weight for weight, spider silk is stronger than steel and tougher than Kevlar.",
      [
        "Ağırlık bakımından örümcek ipeği çelikten daha güçlü ve Kevlar'dan daha dayanıklıdır.",
        "Örümcek ipeği çelikten daha ağırdır ama Kevlar'dan daha zayıftır.",
        "Çelik ve Kevlar, örümcek ipeğinden yapılmıştır.",
        "Örümcek ipeği, aynı ağırlıktaki çelikten çok daha zayıftır.",
        "Kevlar, örümceklerin ağ örmek için kullandığı bir maddedir.",
      ],
      "'Weight for weight' 'ağırlık bakımından', 'stronger than steel and tougher than Kevlar' 'çelikten daha güçlü ve Kevlar'dan daha dayanıklı' demektir.",
    ],
    [
      "The mission showed for the first time that humans could change the motion of a celestial body.",
      [
        "Görev, insanların bir gök cisminin hareketini değiştirebileceğini ilk kez gösterdi.",
        "Görev, insanların gök cisimlerinin hareketini asla değiştiremeyeceğini kanıtladı.",
        "Gök cisimleri, insanların uzaya ilk kez gitmesini sağladı.",
        "Görev, gök cisimlerinin Dünya'nın hareketini değiştirdiğini gösterdi.",
        "İnsanlar, görevden önce pek çok gök cisminin hareketini değiştirmişti.",
      ],
      "'showed for the first time that humans could change the motion of a celestial body' 'insanların bir gök cisminin hareketini değiştirebileceğini ilk kez gösterdi' demektir.",
    ],
    [
      "Laboratory-grown meat could reduce the amount of land and water needed to produce food.",
      [
        "Laboratuvarda üretilen et, gıda üretmek için gereken arazi ve su miktarını azaltabilir.",
        "Laboratuvarda üretilen et, gıda üretimi için daha fazla arazi ve su gerektirir.",
        "Arazi ve su, laboratuvarda et üretmek için kullanılamaz.",
        "Laboratuvar eti, geleneksel etten daha fazla suya ihtiyaç duyar.",
        "Gıda üretimi, laboratuvarda üretilen etin arazi kullanımını artırır.",
      ],
      "'could reduce the amount of land and water needed' 'gereken arazi ve su miktarını azaltabilir' demektir.",
    ],
    [
      "Melting sea ice does not raise sea levels, because the ice is already floating in the water.",
      [
        "Eriyen deniz buzu deniz seviyesini yükseltmez, çünkü buz zaten suda yüzmektedir.",
        "Eriyen deniz buzu, karadaki buzdan daha fazla deniz seviyesini yükseltir.",
        "Deniz buzu, deniz seviyesi yükseldiğinde erimeye başlar.",
        "Suda yüzen buz, deniz seviyesinin düşmesine neden olur.",
        "Deniz buzu erimediği için deniz seviyesi değişmez.",
      ],
      "'does not raise sea levels, because the ice is already floating' 'deniz seviyesini yükseltmez, çünkü buz zaten yüzmektedir' demektir.",
    ],
  ],
  trEn: [
    [
      "Hidroelektrik santralleri, akan suyun enerjisini elektriğe dönüştürür.",
      [
        "Hydroelectric power plants convert the energy of flowing water into electricity.",
        "Hydroelectric power plants convert electricity into flowing water.",
        "Flowing water is produced by hydroelectric power plants.",
        "Hydroelectric power plants store water for drinking.",
        "Electricity is used to stop the flow of water in rivers.",
      ],
      "'akan suyun enerjisini elektriğe dönüştürür' 'convert the energy of flowing water into electricity' karşılığıdır.",
    ],
    [
      "Nükleer enerji, neredeyse hiç karbon salımı olmadan büyük miktarda elektrik üretebilir.",
      [
        "Nuclear energy can produce large amounts of electricity with almost no carbon emissions.",
        "Nuclear energy produces large amounts of carbon emissions and little electricity.",
        "Carbon emissions are needed to produce nuclear energy.",
        "Nuclear energy can produce electricity only in small amounts.",
        "Large amounts of electricity cause carbon emissions to fall.",
      ],
      "'neredeyse hiç karbon salımı olmadan' 'with almost no carbon emissions' karşılığıdır.",
    ],
    [
      "Örümcekleri ipek üretmek için çiftliklerde yetiştirmek mümkün değildir.",
      [
        "It is not possible to raise spiders on farms to produce silk.",
        "Spiders are commonly raised on farms to produce silk.",
        "Silk farms use spiders to protect their crops.",
        "Spiders produce more silk when they live on farms.",
        "Farmers prefer spiders to silkworms.",
      ],
      "'mümkün değildir' 'it is not possible', 'çiftliklerde yetiştirmek' 'to raise on farms' karşılığıdır.",
    ],
    [
      "Gökbilimciler, Dünya'ya yakın geçen asteroitleri sürekli olarak izliyor.",
      [
        "Astronomers continuously monitor asteroids that pass close to the Earth.",
        "Astronomers rarely observe asteroids that pass close to the Earth.",
        "Asteroids that pass close to the Earth are monitored only once a year.",
        "Astronomers are trying to bring asteroids closer to the Earth.",
        "Asteroids never pass close to the Earth.",
      ],
      "'sürekli olarak izliyor' 'continuously monitor', 'Dünya'ya yakın geçen' 'that pass close to the Earth' karşılığıdır.",
    ],
    [
      "Laboratuvar etinin üretim maliyeti son yıllarda önemli ölçüde düştü.",
      [
        "The cost of producing laboratory-grown meat has fallen significantly in recent years.",
        "The cost of producing laboratory-grown meat has risen sharply in recent years.",
        "Laboratory-grown meat has always been cheaper than ordinary meat.",
        "The price of ordinary meat has fallen because of laboratory meat.",
        "Laboratory-grown meat is no longer produced.",
      ],
      "'önemli ölçüde düştü' 'has fallen significantly', 'son yıllarda' 'in recent years' karşılığıdır.",
    ],
    [
      "Deniz seviyesinin yükselmesi, kıyı bölgelerindeki tatlı su kaynaklarını tuzlu suyla kirletebilir.",
      [
        "Rising sea levels can contaminate fresh water supplies in coastal areas with salt water.",
        "Rising sea levels can increase fresh water supplies in coastal areas.",
        "Fresh water supplies cause sea levels to rise in coastal areas.",
        "Salt water is used to clean fresh water supplies in coastal areas.",
        "Coastal areas have no fresh water supplies.",
      ],
      "'tuzlu suyla kirletebilir' 'can contaminate … with salt water' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Hydroelectric power is the world's largest source of renewable electricity, providing roughly one-sixth of global supply. Most hydroelectric plants use a dam to store water in a reservoir; when the water is released, it flows through turbines that drive generators. Because the flow can be controlled, hydropower can respond quickly to changes in demand, making it a valuable complement to wind and solar energy. However, large dams have significant drawbacks. Reservoirs can flood valleys, forcing communities to relocate and destroying wildlife habitats. Dams also block the movement of fish and trap sediment that would otherwise enrich farmland downstream. In tropical regions, decaying vegetation in reservoirs can even release large amounts of methane. For these reasons, some countries are now removing old dams to restore river ecosystems.",
      questions: [
        [
          "According to the passage, hydropower is a valuable complement to wind and solar energy because ----.",
          [
            "its output can be adjusted quickly to match demand",
            "it produces electricity only when the wind blows",
            "it requires no dams or reservoirs",
            "it is cheaper to build than any other power plant",
            "it can be used only at night",
          ],
          "Su akışı kontrol edilebildiği için hidroelektrik talepteki değişikliklere hızla yanıt verebilir.",
        ],
        [
          "Which of the following is NOT mentioned as a drawback of large dams?",
          [
            "They cause frequent earthquakes.",
            "They can force communities to relocate.",
            "They block the movement of fish.",
            "They trap sediment that would enrich farmland.",
            "They may release methane in tropical regions.",
          ],
          "Parçada toplulukların yer değiştirmesi, balık göçünün engellenmesi, tortu tutulması ve metan salımı sayılır; depremlerden söz edilmez.",
        ],
        [
          "Some countries are removing old dams in order to ----.",
          [
            "restore river ecosystems",
            "build larger reservoirs",
            "increase methane emissions",
            "produce more electricity",
            "prevent fish from migrating",
          ],
          "Bazı ülkeler nehir ekosistemlerini eski hâline getirmek için eski barajları kaldırmaktadır.",
        ],
      ],
    },
    {
      text:
        "Nuclear power plants generate electricity by splitting atoms of uranium in a process called fission, which releases heat used to produce steam and drive turbines. They produce almost no carbon dioxide during operation and can run continuously, regardless of weather conditions. Supporters therefore argue that nuclear power is essential for reducing emissions. However, the industry faces several challenges. Building new reactors is extremely expensive and often takes more than a decade. Accidents such as those at Chernobyl in 1986 and Fukushima in 2011, although rare, have had serious consequences and shaped public opinion. In addition, spent nuclear fuel remains dangerously radioactive for thousands of years, and only a few countries have begun building permanent underground storage facilities for it.",
      questions: [
        [
          "According to the passage, one advantage of nuclear power is that it ----.",
          [
            "can produce electricity continuously, whatever the weather",
            "produces no waste of any kind",
            "is cheap and quick to build",
            "uses the energy of the wind",
            "has never been involved in an accident",
          ],
          "Nükleer santraller hava koşullarından bağımsız olarak sürekli çalışabilir.",
        ],
        [
          "The accidents at Chernobyl and Fukushima are mentioned to show that ----.",
          [
            "although rare, nuclear accidents can have serious effects",
            "nuclear power is completely safe",
            "most reactors are located in Europe and Asia",
            "accidents happen every year",
            "reactors are cheaper after an accident",
          ],
          "Bu kazalar nadir olsa da ciddi sonuçlar doğurmuş ve kamuoyunu şekillendirmiştir.",
        ],
        [
          "It is stated in the passage that permanent storage facilities for nuclear waste ----.",
          [
            "have been started in only a few countries",
            "already exist in every country with reactors",
            "are no longer considered necessary",
            "are built on the surface near cities",
            "make waste safe within a few years",
          ],
          "Yalnızca birkaç ülke kalıcı yer altı depolama tesisleri inşa etmeye başlamıştır.",
        ],
      ],
    },
    {
      text:
        "Spider silk has fascinated scientists for decades. Weight for weight, some types are stronger than steel and tougher than Kevlar, the material used in bulletproof vests, while also being light and very elastic. These properties make it potentially useful for applications ranging from medical sutures and artificial ligaments to lightweight protective clothing. The difficulty is producing it in large quantities. Unlike silkworms, spiders cannot be farmed, because they are territorial and often eat one another when kept together. Researchers have therefore inserted the genes for spider silk proteins into other organisms, including bacteria, yeast and even goats, which can produce the proteins in their milk. However, turning these proteins into fibres as strong as natural silk has proved challenging.",
      questions: [
        [
          "According to the passage, spider silk is potentially useful because it is ----.",
          [
            "strong, light and highly elastic",
            "heavy, rigid and easy to produce",
            "cheaper than steel and Kevlar",
            "produced in large amounts by silkworms",
            "able to conduct electricity",
          ],
          "Örümcek ipeği güçlü, hafif ve çok esnek olduğu için potansiyel olarak yararlıdır.",
        ],
        [
          "Spiders cannot be farmed like silkworms because ----.",
          [
            "they are territorial and often eat one another",
            "they produce silk only in very cold weather",
            "they need to live in tropical forests",
            "their silk is too weak to be used",
            "they live for only a few days",
          ],
          "Örümcekler bölgecidir ve bir arada tutulduklarında birbirlerini yerler.",
        ],
        [
          "We can understand from the passage that producing artificial spider silk ----.",
          [
            "has not yet matched the strength of natural silk",
            "has been completely successful",
            "is possible only in goats",
            "has been abandoned by researchers",
            "requires large numbers of spiders",
          ],
          "Proteinleri doğal ipek kadar güçlü liflere dönüştürmek zor olmuştur.",
        ],
      ],
    },
    {
      text:
        "About 66 million years ago, an asteroid around ten kilometres wide struck the Earth near what is now Mexico, contributing to the extinction of the dinosaurs. Although such large impacts are extremely rare, smaller asteroids strike more frequently and could still devastate a city. To prepare for such a threat, astronomers search the sky for 'near-Earth objects' and calculate their orbits. In 2022, NASA's Double Asteroid Redirection Test, or DART, deliberately crashed a spacecraft into a small asteroid called Dimorphos, which posed no danger to the Earth. Measurements showed that the impact shortened the asteroid's orbit around a larger companion by about thirty-two minutes, far more than expected. The experiment demonstrated that a spacecraft could, in principle, change the path of a dangerous asteroid if it were detected early enough.",
      questions: [
        [
          "According to the passage, the asteroid that struck the Earth 66 million years ago ----.",
          [
            "contributed to the extinction of the dinosaurs",
            "was smaller than most modern asteroids",
            "struck the Earth near the North Pole",
            "was deliberately redirected by scientists",
            "caused no lasting effects on life",
          ],
          "66 milyon yıl önce Dünya'ya çarpan asteroit dinozorların yok oluşuna katkıda bulundu.",
        ],
        [
          "It is stated in the passage that Dimorphos ----.",
          [
            "did not pose any danger to the Earth",
            "was on a collision course with the Earth",
            "was destroyed completely by the spacecraft",
            "was the asteroid that killed the dinosaurs",
            "was discovered after the DART mission",
          ],
          "Dimorphos, Dünya için hiçbir tehlike oluşturmayan küçük bir asteroitti.",
        ],
        [
          "The DART experiment demonstrated that ----.",
          [
            "a spacecraft could change an asteroid's path if it were found early",
            "asteroids cannot be affected by human technology",
            "large impacts are more common than scientists thought",
            "near-Earth objects no longer need to be monitored",
            "the orbit of Dimorphos became longer",
          ],
          "Deney, tehlikeli bir asteroit yeterince erken tespit edilirse bir uzay aracının yolunu değiştirebileceğini gösterdi.",
        ],
      ],
    },
    {
      text:
        "Laboratory-grown meat, also called cultivated meat, is produced by taking a small sample of cells from an animal and growing them in large stainless-steel tanks called bioreactors. The cells are fed a nutrient-rich solution and multiply until they form muscle and fat tissue. Supporters argue that the technology could greatly reduce the environmental impact of meat production, which currently uses large areas of land and water and contributes significantly to greenhouse gas emissions. It could also reduce the need to slaughter animals. However, significant challenges remain. Production costs are still much higher than for conventional meat, and it is difficult to recreate the texture of complex cuts such as steak. In addition, some consumers are sceptical about eating meat produced in a laboratory.",
      questions: [
        [
          "According to the passage, laboratory-grown meat is produced by ----.",
          [
            "growing animal cells in tanks with a nutrient solution",
            "mixing plant proteins with artificial flavours",
            "raising animals in small laboratory farms",
            "freezing meat from slaughtered animals",
            "printing meat from powdered vegetables",
          ],
          "Laboratuvar eti, hayvandan alınan hücrelerin besin solüsyonu içeren tanklarda çoğaltılmasıyla üretilir.",
        ],
        [
          "Supporters believe that the technology could ----.",
          [
            "reduce the environmental impact of producing meat",
            "increase the amount of land used for farming",
            "make meat more expensive for consumers",
            "require more animals to be slaughtered",
            "replace all vegetables in people's diets",
          ],
          "Destekçiler teknolojinin et üretiminin çevresel etkisini büyük ölçüde azaltabileceğini savunur.",
        ],
        [
          "Which of the following is mentioned as a challenge for laboratory-grown meat?",
          [
            "recreating the texture of complex cuts such as steak",
            "finding enough stainless steel for the tanks",
            "persuading farmers to raise more animals",
            "growing cells without any nutrients",
            "producing meat that contains fat",
          ],
          "Biftek gibi karmaşık parçaların dokusunu yeniden oluşturmak zordur.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the early twentieth century, many scientists believed that the universe was static and unchanging. ---- This discovery suggested that the universe was expanding, an idea that later led to the Big Bang theory.",
      [
        "In 1929, however, Edwin Hubble found that distant galaxies are moving away from us.",
        "Many famous scientists of that period worked at universities in Germany.",
        "Telescopes in the early twentieth century were much smaller than today's.",
        "The universe contains billions of galaxies, each with billions of stars.",
        "Astronomy has been studied in many cultures for thousands of years.",
      ],
      "'This discovery' ifadesi öncesinde bir keşif gerektirir: Hubble'ın uzak galaksilerin bizden uzaklaştığını bulması.",
    ],
    [
      "Many plants close their leaves at night and open them again in the morning. ---- In fact, some plants continue this pattern even when they are kept in constant darkness.",
      [
        "Scientists have found that this behaviour is controlled by an internal biological clock.",
        "Many people keep plants in their homes to improve the air.",
        "Leaves contain a green pigment called chlorophyll.",
        "Some plants grow very quickly during the spring months.",
        "Gardeners usually water their plants in the evening.",
      ],
      "'In fact' ile bitkilerin karanlıkta bile bu düzeni sürdürdüğü söylenir; boşluk davranışın iç biyolojik saat tarafından kontrol edildiğini belirtmelidir.",
    ],
    [
      "---- For example, a single tree can absorb hundreds of litres of water from the soil each day and release it into the air through its leaves.",
      [
        "Forests play an important role in the water cycle.",
        "Trees are cut down to make paper and furniture.",
        "Some trees live for thousands of years.",
        "Forests cover about thirty percent of the land.",
        "Many birds build their nests in tall trees.",
      ],
      "'For example' ile verilen örnek, ormanların su döngüsünde önemli rol oynadığını söyleyen bir genelleme gerektirir.",
    ],
    [
      "Many cities are replacing old street lights with LED lamps. ---- In addition, the new lamps can be dimmed late at night, reducing light pollution.",
      [
        "These lamps use much less electricity and need to be replaced less often.",
        "Street lights were first powered by gas in the nineteenth century.",
        "Many cities are brightly lit during national holidays.",
        "Some streets have trees planted along both sides.",
        "Light pollution makes it difficult to see the stars.",
      ],
      "'In addition' ile ikinci bir yarar eklenir; boşlukta ilk yarar (daha az elektrik ve daha seyrek değişim) yer almalıdır.",
    ],
    [
      "Honeybees communicate the location of food through a special movement known as the 'waggle dance'. ---- As a result, other bees in the hive can fly directly to the food source.",
      [
        "The direction and length of the dance indicate where the flowers are and how far away they are.",
        "Honeybees live in colonies that can contain thousands of individuals.",
        "Honey has been collected by humans for thousands of years.",
        "Bees are attracted to brightly coloured flowers.",
        "Some bees can sting several times without dying.",
      ],
      "'As a result' öncesinde diğer arıların doğrudan yiyeceğe uçabilmesinin nedeni gerekir: dansın yönü ve uzunluğu konumu gösterir.",
    ],
    [
      "Some engineers have proposed building giant sea walls to protect coastal cities from rising sea levels. ---- Critics, however, argue that such walls could damage marine ecosystems and give a false sense of security.",
      [
        "Supporters say they would be the most reliable way to prevent major floods.",
        "Many coastal cities are popular with tourists in summer.",
        "Sea walls have been built in some countries for centuries.",
        "The sea covers about seventy percent of the Earth.",
        "Some cities are built on islands.",
      ],
      "'Critics, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Fireflies produce light through a chemical reaction in their bodies.",
        "The light is used mainly to attract mates.",
        "Each species has its own pattern of flashes.",
        "Many people enjoy camping in the summer.",
        "Unfortunately, light pollution is making it harder for fireflies to find one another.",
      ],
      odd: 3,
      why: "Parça ateş böceklerini anlatır. Yazın kamp yapmaktan söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Wood is a renewable building material if forests are managed sustainably.",
        "New engineering techniques allow wood to be used for tall buildings.",
        "Many families enjoy walking in the forest at weekends.",
        "Wooden buildings store carbon rather than releasing it.",
        "They can also be built more quickly than concrete structures.",
      ],
      odd: 2,
      why: "Parça ahşabın yapı malzemesi olarak kullanımını anlatır. Ailelerin ormanda yürüyüş yapmasından söz eden III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Comets are icy bodies that orbit the Sun.",
        "When a comet approaches the Sun, its ice begins to evaporate.",
        "This creates a glowing cloud of gas and dust and a long tail.",
        "Some comets return to the inner solar system every few years.",
        "Many people buy telescopes as gifts.",
      ],
      odd: 4,
      why: "Parça kuyruklu yıldızları anlatır. Teleskopların hediye olarak alınmasından söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Salt marshes are coastal wetlands that are flooded by the tide.",
        "Tea is the most popular drink in many countries.",
        "They provide habitats for many birds, fish and crabs.",
        "They also protect the coast by absorbing the energy of waves.",
        "In addition, their soils store large amounts of carbon.",
      ],
      odd: 1,
      why: "Parça tuzlu bataklıkları anlatır. Çayın popülerliğinden söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Plants communicate with one another through chemical signals.",
        "When attacked by insects, some plants release chemicals into the air.",
        "Nearby plants detect these signals and begin producing defensive substances.",
        "Some gardens are open to the public.",
        "This helps them prepare for possible attacks.",
      ],
      odd: 3,
      why: "Parça bitkilerin kimyasal iletişimini anlatır. Bahçelerin halka açık olmasından söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Bioluminescent bacteria can be used to detect pollution in water.",
        "These bacteria normally produce a steady glow.",
        "When toxic substances are present, their light becomes weaker.",
        "Scientists can measure this change to assess water quality.",
        "Many people prefer bottled water to tap water.",
      ],
      odd: 4,
      why: "Parça kirliliği tespit eden ışıldayan bakterileri anlatır. Şişe suyu tercihinden söz eden V. cümle konu dışıdır.",
    },
  ],
};
