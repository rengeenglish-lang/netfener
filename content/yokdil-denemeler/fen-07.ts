import type { YokdilDeneme } from "./types";

export const FEN_07: YokdilDeneme = {
  no: 7,
  field: "fen",
  vocab: [
    [
      "Thawing permafrost could ---- large amounts of methane, a powerful greenhouse gas, into the atmosphere.",
      ["release", "absorb", "prevent", "freeze", "remove"],
      "Çözülen donmuş toprağın atmosfere metan 'salabileceği' (release) anlatılır; 'absorb' anlamın tersidir.",
    ],
    [
      "Self-driving cars rely on sensors and software to ---- obstacles such as pedestrians and other vehicles.",
      ["detect", "ignore", "create", "imitate", "repair"],
      "Sürücüsüz arabalar engelleri 'algılamak' (detect) için sensörlere güvenir.",
    ],
    [
      "Seaweed grows ---- quickly, sometimes more than half a metre in a single day.",
      ["remarkably", "barely", "hardly", "rarely", "slightly"],
      "Bir günde yarım metreden fazla büyümek 'dikkat çekici derecede' (remarkably) hızlı büyümektir.",
    ],
    [
      "Engineers often ---- nature for solutions, copying the shapes and structures of plants and animals.",
      ["turn to", "turn down", "look down on", "put off", "get over"],
      "Mühendislerin çözüm için doğaya 'başvurması' (turn to) anlatılır.",
    ],
    [
      "Dark matter does not emit or reflect light, which makes it ---- to telescopes.",
      ["invisible", "attractive", "harmful", "familiar", "available"],
      "Işık yaymayan ve yansıtmayan madde teleskoplara 'görünmez'dir (invisible).",
    ],
    [
      "Antonie van Leeuwenhoek was the first person to ---- bacteria through a microscope.",
      ["observe", "destroy", "produce", "cure", "name"],
      "Leeuwenhoek'in bakterileri mikroskopla ilk 'gözlemleyen' (observe) kişi olduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time scientists understood the danger, the tsunami ---- the coast.",
      ["had already reached", "has already reached", "already reaches", "will already reach", "is already reaching"],
      "Bilim insanlarının tehlikeyi anladığı geçmiş andan önce tamamlanmış eylem Past Perfect ile anlatılır.",
    ],
    [
      "If self-driving cars ---- all human error, road accidents would fall dramatically.",
      ["eliminated", "eliminate", "had eliminated", "will eliminate", "would eliminate"],
      "Ana cümle 'would fall' olduğundan Type 2 koşul gerekir: if + Past 'eliminated'.",
    ],
    [
      "The kingfisher, ---- beak inspired the design of a high-speed train, can dive into water with very little splash.",
      ["whose", "which", "who", "where", "that"],
      "Yalıçapkınının gagasından söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- its name, dark matter is not simply a cloud of dark gas or dust.",
      ["Despite", "Because of", "Thanks to", "Owing to", "Due to"],
      "Adına 'rağmen' karanlık maddenin yalnızca karanlık bir gaz bulutu olmaması zıtlıktır: 'Despite'.",
    ],
    [
      "Scientists are studying how much carbon the permafrost ---- as it thaws.",
      ["will release", "will it release", "does it release", "releasing", "it will release"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'how much carbon the permafrost will release'.",
    ],
    [
      "Never before ---- such detailed images of living cells.",
      ["had scientists obtained", "scientists had obtained", "scientists obtained", "obtained scientists", "did scientists obtaining"],
      "'Never before' cümle başında devrik yapı gerektirir: 'had scientists obtained'.",
    ],
    [
      "Seaweed farms help ---- the water by absorbing excess nutrients.",
      ["clean", "cleaning", "to cleaning", "cleaned", "for clean"],
      "'help' fiilinden sonra yalın fiil (ya da 'to' + fiil) gelir: 'help clean'.",
    ],
    [
      "The microscope ---- by Leeuwenhoek could magnify objects more than two hundred times.",
      ["built", "building", "which built", "to build", "has built"],
      "Leeuwenhoek tarafından yapılan mikroskop edilgen anlamlı geçmiş ortaçla nitelenir: 'built'.",
    ],
    [
      "Experts advise that coastal residents ---- to higher ground immediately after a strong earthquake.",
      ["move", "moves", "moved", "will move", "moving"],
      "'advise that' sonrası subjunctive (yalın fiil) kullanılır: 'coastal residents move'.",
    ],
    [
      "Galaxies rotate faster than their visible matter can explain, ---- suggests that some invisible mass must be present.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
    ],
    [
      "---- self-driving technology improves, many legal and ethical questions remain unanswered.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Teknoloji gelişse de sorular yanıtsız kalmaktadır; zıtlık için 'Although' gerekir.",
    ],
    [
      "The new sensors are able ---- tiny changes in sea level far out in the ocean.",
      ["to detect", "detecting", "detect", "detected", "to detecting"],
      "'be able to do' kalıbı mastar ister.",
    ],
    [
      "The tsunami was ---- powerful that it destroyed buildings several kilometres inland.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (powerful) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By 2050, seaweed farming ---- into a major global industry, according to some forecasts.",
      ["will have grown", "has grown", "grew", "had grown", "grows"],
      "'By 2050' gelecekte tamamlanmış olacak bir durumu bildirir: 'will have grown'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1670s, a Dutch cloth merchant named Antonie van Leeuwenhoek began grinding tiny glass lenses to examine the quality of fabrics. His simple microscopes, {1} consisted of a single lens mounted in a metal plate, were far more powerful than any others of the time. Looking at drops of pond water, he was astonished to see countless tiny moving creatures, {2} he called 'animalcules'. He went on to observe bacteria from his own teeth, blood cells and sperm cells, and he described his discoveries in hundreds of letters to the Royal Society in London. {3} he had no formal scientific training, his careful observations opened up an entirely new world. Today he is often regarded as the father of microbiology, {4} it was nearly two centuries before scientists understood the role {5} microorganisms play in disease.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgüller arasında 'microscopes' sözcüğüne atıf yapan ve 'consisted' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "where", "whose"],
          "Virgülden sonra 'creatures' sözcüğüne atıf yapan ve 'called' fiilinin nesnesi olan 'which' gerekir.",
        ],
        [
          "(23) ----",
          ["Although", "Because", "Unless", "So that", "Since"],
          "Bilimsel eğitimi olmamasına rağmen yeni bir dünyanın kapısını açması zıtlıktır: 'Although'.",
        ],
        [
          "(24) ----",
          ["although", "because", "so that", "unless", "as if"],
          "Mikrobiyolojinin babası sayılması ile mikroorganizmaların rolünün çok sonra anlaşılması karşılaştırılır: 'although'.",
        ],
        [
          "(25) ----",
          ["that", "what", "whose", "where", "who"],
          "'the role' sözcüğünü niteleyen ve 'play' fiilinin nesnesi olan ilgi zamiri 'that' gerekir.",
        ],
      ],
    },
    {
      text:
        "A tsunami is a series of ocean waves caused by a sudden displacement of a large volume of water, most often by an undersea earthquake. In the deep ocean, tsunami waves may be less than a metre high and can travel at speeds of up to 800 kilometres per hour, {1} ships at sea often do not notice them. As the waves approach the shore and the water becomes shallower, they slow down {2} grow dramatically in height. One warning sign is that the sea may suddenly retreat, exposing the sea floor, before the first wave arrives. {3} the devastating Indian Ocean tsunami of 2004, which killed more than 200,000 people, many countries have invested in warning systems {4} use seabed sensors and buoys to detect tsunamis. Such systems can give coastal communities valuable time {5} evacuate.",
      blanks: [
        [
          "(26) ----",
          ["so", "unless", "although", "because of", "whereas"],
          "Dalgaların derin okyanusta alçak olmasının sonucu gemilerin onları fark etmemesidir: 'so'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "because"],
          "Dalgaların yavaşlaması ve yükselmesi birbirine eklenen iki değişimdir: 'and'.",
        ],
        [
          "(28) ----",
          ["Since", "Until", "Before", "During", "Unless"],
          "2004'ten bu yana süren yatırımlar Present Perfect ile anlatılır: 'Since'.",
        ],
        [
          "(29) ----",
          ["that", "what", "whose", "where", "when"],
          "'warning systems' ifadesini niteleyen ve 'use' fiilinin öznesi olan ilgi zamiri 'that' gerekir.",
        ],
        [
          "(30) ----",
          ["to", "for", "so", "in", "by"],
          "'valuable time to evacuate' yapısında amaç bildiren mastar gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although permafrost covers about a quarter of the Northern Hemisphere's land, ----.",
      [
        "relatively few people live in the regions where it is found",
        "it can be hundreds of metres thick in some places",
        "it contains the remains of plants and animals",
        "it has remained frozen for thousands of years",
        "it is found mainly in Russia, Canada and Alaska",
      ],
      "'Although' zıtlık ister: kuzey yarımkürenin dörtte birini kaplasa da bulunduğu bölgelerde nispeten az insan yaşar.",
    ],
    [
      "Many transport experts believe that self-driving cars ----.",
      [
        "will not be widely used until legal questions are resolved",
        "although they are tested on public roads in some cities",
        "which use cameras, radar and laser sensors",
        "unless their software becomes more reliable",
        "so that drivers could have relaxed during journeys",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'will not be widely used …' cümleyi tamamlar.",
    ],
    [
      "If the warning had been issued a few minutes earlier, ----.",
      [
        "many more people might have reached safety",
        "the earthquake struck off the coast at night",
        "scientists will install more sensors next year",
        "the waves travelled across the ocean very quickly",
        "most of the town was built near the beach",
      ],
      "Type 3 koşul cümlesi 'might have + V3' ile tamamlanır.",
    ],
    [
      "While seaweed has been eaten in East Asia for centuries, ----.",
      [
        "it is only recently that it has attracted interest in other regions",
        "it grows in shallow coastal waters around the world",
        "it absorbs carbon dioxide as it grows",
        "some species can grow very large",
        "it is rich in vitamins and minerals",
      ],
      "'While' iki durumu karşılaştırır: Doğu Asya'da yüzyıllardır yenirken diğer bölgelerde ilgi yeni oluşmuştur.",
    ],
    [
      "Engineers studied the structure of termite mounds ----.",
      [
        "in order to design buildings that stay cool without air conditioning",
        "which termites had been building for millions of years in Africa",
        "although most termites live in tropical and subtropical regions",
        "because termites often damage wooden houses and furniture",
        "unless the buildings were constructed in very hot countries",
      ],
      "Termit yuvalarının incelenmesinin amacı klimasız serin kalan binalar tasarlamaktır: 'in order to'.",
    ],
    [
      "Unless the source of dark matter is identified, ----.",
      [
        "our understanding of the universe will remain incomplete",
        "galaxies were formed billions of years ago",
        "astronomers had measured the speed of many stars",
        "the universe contains billions of galaxies",
        "telescopes are located on high mountains",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: evren anlayışımız eksik kalacaktır.",
    ],
    [
      "Since the tsunami warning system was installed, ----.",
      [
        "coastal communities have received alerts within minutes of earthquakes",
        "the region had experienced several destructive tsunamis",
        "sensors were placed on the seabed and on floating buoys",
        "scientists will expand the system to other oceans",
        "most tsunamis were caused by undersea earthquakes",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have received'.",
    ],
    [
      "Even though dark matter cannot be seen, ----.",
      [
        "its gravitational effects on galaxies can be measured",
        "it is thought to make up most of the universe's matter",
        "astronomers have searched for it for decades",
        "it does not emit or reflect any light",
        "several experiments are trying to detect it",
      ],
      "'Even though' beklenmedik bir sonuç ister: görülemese de galaksiler üzerindeki kütleçekimsel etkileri ölçülebilir.",
    ],
    [
      "The warmer the Arctic becomes, ----.",
      [
        "the faster the permafrost thaws",
        "because the ice reflects sunlight",
        "although winters are still cold",
        "which scientists measure every year",
        "since few people live there",
      ],
      "'The warmer …, the faster …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As the tsunami approached the shallow coast, ----.",
      [
        "its waves slowed down and grew much higher",
        "most ships had left the harbour",
        "the ocean is very deep in that region",
        "earthquakes are common near the coast",
        "many tourists visit the beaches",
      ],
      "'As' paralel bir değişim bildirir: tsunami sığ kıyıya yaklaştıkça dalgalar yavaşladı ve yükseldi.",
    ],
    [
      "Hardly had Leeuwenhoek looked through his microscope ----.",
      [
        "when he saw tiny creatures moving in the water",
        "than he was very surprised",
        "because the lens was very powerful",
        "so he wrote to the Royal Society",
        "although he was a cloth merchant",
      ],
      "'Hardly … when …' kalıbı 'when' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "As the permafrost thaws, the ground becomes unstable, damaging buildings, roads and pipelines.",
      [
        "Donmuş toprak çözüldükçe zemin dengesizleşir ve binalara, yollara ve boru hatlarına zarar verir.",
        "Donmuş toprak çözüldükçe zemin daha sağlam hâle gelir ve binaları korur.",
        "Binalar, yollar ve boru hatları donmuş toprağın çözülmesini engeller.",
        "Zemin dengesizleştiğinde donmuş toprak yeniden donar.",
        "Donmuş toprağın çözülmesi yalnızca boru hatlarını etkiler.",
      ],
      "'As the permafrost thaws, the ground becomes unstable' 'donmuş toprak çözüldükçe zemin dengesizleşir' demektir.",
    ],
    [
      "Self-driving cars must be able to make split-second decisions in situations their designers never anticipated.",
      [
        "Sürücüsüz arabalar, tasarımcılarının hiç öngörmediği durumlarda anlık kararlar verebilmelidir.",
        "Sürücüsüz arabalar, yalnızca tasarımcılarının öngördüğü durumlarda karar verebilir.",
        "Tasarımcılar, sürücüsüz arabaların karar vermesini tamamen engellemiştir.",
        "Sürücüsüz arabalar, karar vermek için her zaman bir insana danışır.",
        "Anlık kararlar, sürücüsüz arabaların tasarımında önemli değildir.",
      ],
      "'must be able to make split-second decisions in situations their designers never anticipated' 'tasarımcılarının hiç öngörmediği durumlarda anlık kararlar verebilmelidir' demektir.",
    ],
    [
      "Unlike most crops, seaweed needs no fresh water, fertiliser or farmland to grow.",
      [
        "Çoğu üründen farklı olarak deniz yosunu büyümek için tatlı suya, gübreye ya da tarım arazisine ihtiyaç duymaz.",
        "Çoğu ürün gibi deniz yosunu da büyümek için bol miktarda tatlı su ve gübre gerektirir.",
        "Deniz yosunu, tarım arazilerinde yetiştirilen en yaygın üründür.",
        "Tatlı su ve gübre, deniz yosununun büyümesini engeller.",
        "Deniz yosunu yalnızca tatlı su göllerinde yetiştirilebilir.",
      ],
      "'Unlike most crops' 'çoğu üründen farklı olarak', 'needs no fresh water, fertiliser or farmland' 'tatlı suya, gübreye ya da tarım arazisine ihtiyaç duymaz' demektir.",
    ],
    [
      "The surface of the lotus leaf is so water-repellent that it cleans itself whenever it rains.",
      [
        "Nilüfer yaprağının yüzeyi suyu o kadar iter ki her yağmur yağdığında kendi kendini temizler.",
        "Nilüfer yaprağının yüzeyi suyu emdiği için yağmurda kirlenir.",
        "Nilüfer yaprakları yalnızca yağmur yağmadığında temizdir.",
        "Yağmur, nilüfer yaprağının yüzeyine zarar verir.",
        "Nilüfer yaprağı, kendini temizlemek için suyu depolar.",
      ],
      "'so water-repellent that it cleans itself' 'suyu o kadar iter ki kendi kendini temizler' demektir.",
    ],
    [
      "Scientists estimate that dark matter makes up about five times as much mass as ordinary matter.",
      [
        "Bilim insanları, karanlık maddenin olağan maddenin yaklaşık beş katı kütle oluşturduğunu tahmin ediyor.",
        "Bilim insanları, olağan maddenin karanlık maddeden beş kat daha fazla olduğunu kanıtladı.",
        "Karanlık madde, evrendeki kütlenin yalnızca beşte birini oluşturur.",
        "Bilim insanları, karanlık maddenin varlığına dair hiçbir tahminde bulunmamaktadır.",
        "Karanlık madde ve olağan madde evrende eşit miktarda bulunur.",
      ],
      "'makes up about five times as much mass as ordinary matter' 'olağan maddenin yaklaşık beş katı kütle oluşturur' demektir.",
    ],
    [
      "When the sea suddenly retreats from the shore, people should move to higher ground at once.",
      [
        "Deniz aniden kıyıdan çekildiğinde insanlar hemen daha yüksek bir yere gitmelidir.",
        "Deniz kıyıdan çekildiğinde insanlar deniz tabanını incelemek için kıyıya inmelidir.",
        "Deniz aniden yükseldiğinde insanlar evlerinde kalmalıdır.",
        "Denizin çekilmesi tehlikenin geçtiğini gösterir.",
        "İnsanlar, deniz çekildikten birkaç saat sonra yüksek yerlere gitmelidir.",
      ],
      "'When the sea suddenly retreats from the shore' 'deniz aniden kıyıdan çekildiğinde', 'move to higher ground at once' 'hemen daha yüksek bir yere gitmelidir' demektir.",
    ],
  ],
  trEn: [
    [
      "Donmuş topraktaki organik madde, çözüldüğünde mikroorganizmalar tarafından ayrıştırılır.",
      [
        "The organic material in permafrost is broken down by microorganisms when it thaws.",
        "The organic material in permafrost is protected from microorganisms when it thaws.",
        "Microorganisms freeze the organic material in permafrost.",
        "Permafrost contains no organic material at all.",
        "Organic material causes the permafrost to freeze again.",
      ],
      "'mikroorganizmalar tarafından ayrıştırılır' 'is broken down by microorganisms', 'çözüldüğünde' 'when it thaws' karşılığıdır.",
    ],
    [
      "Sürücüsüz arabalar, trafik kazalarının sayısını önemli ölçüde azaltabilir.",
      [
        "Self-driving cars could significantly reduce the number of traffic accidents.",
        "Self-driving cars will significantly increase the number of traffic accidents.",
        "Traffic accidents are caused mainly by self-driving cars.",
        "Self-driving cars have no effect on road safety.",
        "The number of self-driving cars has been reduced by traffic accidents.",
      ],
      "'önemli ölçüde azaltabilir' 'could significantly reduce' karşılığıdır.",
    ],
    [
      "Deniz yosunu yetiştiriciliği, kıyı topluluklarına yeni gelir kaynakları sağlayabilir.",
      [
        "Seaweed farming can provide new sources of income for coastal communities.",
        "Seaweed farming destroys the income of coastal communities.",
        "Coastal communities pay to remove seaweed from their beaches.",
        "Seaweed farming is possible only far from the coast.",
        "New sources of income have reduced seaweed farming.",
      ],
      "'yeni gelir kaynakları sağlayabilir' 'can provide new sources of income' karşılığıdır.",
    ],
    [
      "Biyomimikri, doğadaki tasarımları taklit ederek insan sorunlarına çözüm arar.",
      [
        "Biomimicry seeks solutions to human problems by imitating designs found in nature.",
        "Biomimicry seeks to protect nature by avoiding human designs.",
        "Nature imitates human designs to solve its own problems.",
        "Biomimicry is the study of animals that live near humans.",
        "Human problems are caused by imitating nature.",
      ],
      "'doğadaki tasarımları taklit ederek' 'by imitating designs found in nature', 'çözüm arar' 'seeks solutions' karşılığıdır.",
    ],
    [
      "Karanlık madde, ışıkla değil yalnızca kütleçekimi yoluyla etkileşime girer.",
      [
        "Dark matter interacts only through gravity, not through light.",
        "Dark matter interacts only through light, not through gravity.",
        "Light and gravity are both produced by dark matter.",
        "Dark matter does not interact with anything in the universe.",
        "Gravity is a form of light produced by dark matter.",
      ],
      "'ışıkla değil yalnızca kütleçekimi yoluyla' 'only through gravity, not through light' karşılığıdır.",
    ],
    [
      "Tsunamiler, okyanusu geçerek binlerce kilometre uzaktaki kıyılara ulaşabilir.",
      [
        "Tsunamis can cross the ocean and reach coasts thousands of kilometres away.",
        "Tsunamis lose all their energy within a few kilometres of the earthquake.",
        "Coasts thousands of kilometres away cause tsunamis to form.",
        "Tsunamis can travel only along rivers.",
        "Tsunamis are too small to cross the ocean.",
      ],
      "'okyanusu geçerek … kıyılara ulaşabilir' 'can cross the ocean and reach coasts' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Permafrost is ground that has remained frozen for at least two consecutive years, and in parts of Siberia, Canada and Alaska it has stayed frozen for many thousands of years. It contains vast amounts of carbon in the form of plant and animal remains that never fully decomposed, estimated to be roughly twice as much as is currently in the atmosphere. As the Arctic warms faster than the rest of the planet, permafrost is beginning to thaw. Microorganisms then break down the organic material, releasing carbon dioxide and methane, which cause further warming. This 'feedback loop' worries climate scientists. Thawing permafrost also causes practical problems: the ground can collapse, damaging buildings, roads and pipelines in northern communities.",
      questions: [
        [
          "According to the passage, permafrost is defined as ground that ----.",
          [
            "has stayed frozen for at least two years in a row",
            "freezes every winter and thaws every summer",
            "is found only on high mountains",
            "contains no organic material",
            "has been frozen for less than a year",
          ],
          "Donmuş toprak, en az iki yıl üst üste donmuş kalan zemindir.",
        ],
        [
          "It is stated in the passage that the amount of carbon in permafrost ----.",
          [
            "is roughly twice the amount currently in the atmosphere",
            "is much smaller than the amount in the oceans",
            "has been fully released into the atmosphere",
            "is equal to the amount in all living plants",
            "is decreasing because the Arctic is cooling",
          ],
          "Donmuş topraktaki karbonun atmosferdekinin kabaca iki katı olduğu tahmin edilmektedir.",
        ],
        [
          "The 'feedback loop' mentioned in the passage refers to the process in which ----.",
          [
            "warming releases gases that cause even more warming",
            "cold weather causes the permafrost to grow",
            "microorganisms stop working when it is cold",
            "pipelines release gases into the permafrost",
            "methane cools the atmosphere over time",
          ],
          "Isınma, daha fazla ısınmaya yol açan gazların salınmasına neden olur; bu bir geri besleme döngüsüdür.",
        ],
      ],
    },
    {
      text:
        "Self-driving cars use a combination of cameras, radar and lidar, a technology that measures distances using laser light, to build a detailed picture of their surroundings. Software then interprets this information to identify roads, vehicles, pedestrians and traffic signs, and decides how the car should respond. Supporters argue that because most road accidents are caused by human error, such as distraction or tiredness, automated vehicles could save many lives. However, the technology still struggles in certain conditions, such as heavy snow or unusual situations that the software has not encountered before. There are also unresolved questions about who should be held responsible if a self-driving car causes an accident, and how such cars should be programmed to act when a collision cannot be avoided.",
      questions: [
        [
          "According to the passage, lidar is a technology that ----.",
          [
            "measures distances using laser light",
            "allows cars to drive in heavy snow",
            "replaces the need for any software",
            "warns drivers when they feel tired",
            "controls traffic lights in cities",
          ],
          "Lidar, mesafeleri lazer ışığı kullanarak ölçen bir teknolojidir.",
        ],
        [
          "Supporters believe that self-driving cars could save lives because ----.",
          [
            "most road accidents are caused by human error",
            "they travel more slowly than ordinary cars",
            "they can only be used on empty roads",
            "they never need to be repaired",
            "pedestrians avoid them",
          ],
          "Kazaların çoğu dikkat dağınıklığı ya da yorgunluk gibi insan hatalarından kaynaklandığı için otomatik araçlar hayat kurtarabilir.",
        ],
        [
          "Which of the following is mentioned in the passage as an unresolved issue?",
          [
            "who should be responsible if a self-driving car causes an accident",
            "whether cameras can detect traffic signs at all",
            "how to reduce the price of petrol",
            "whether people will want to own cars in the future",
            "how many passengers a car can carry",
          ],
          "Sürücüsüz bir araç kazaya neden olursa sorumluluğun kimde olacağı sorusu hâlâ yanıtsızdır.",
        ],
      ],
    },
    {
      text:
        "Seaweed farming is one of the fastest-growing forms of food production in the world. Most of it takes place in East Asia, particularly China and Indonesia, where seaweed has long been used as food and as a source of products such as thickeners for ice cream and toothpaste. Seaweed has several environmental advantages: it grows quickly without fresh water, fertiliser or land, and it absorbs nitrogen and phosphorus that can otherwise cause harmful algal blooms. It also takes up carbon dioxide as it grows, although scientists debate how much of this carbon is stored for long periods. Some researchers are exploring the use of seaweed in animal feed, as certain species appear to reduce the amount of methane produced by cattle.",
      questions: [
        [
          "According to the passage, most seaweed farming takes place in ----.",
          [
            "East Asia",
            "northern Europe",
            "South America",
            "North Africa",
            "Australia",
          ],
          "Deniz yosunu yetiştiriciliğinin çoğu Doğu Asya'da, özellikle Çin ve Endonezya'da yapılır.",
        ],
        [
          "One environmental advantage of seaweed mentioned in the passage is that it ----.",
          [
            "absorbs nutrients that can cause harmful algal blooms",
            "requires large amounts of fertiliser to grow well",
            "can be grown only on farmland near the sea",
            "produces methane that warms the atmosphere",
            "uses more fresh water than most crops",
          ],
          "Deniz yosunu, zararlı alg patlamalarına yol açabilecek azot ve fosforu emer.",
        ],
        [
          "Some researchers are interested in using seaweed in animal feed because ----.",
          [
            "certain species may reduce methane produced by cattle",
            "it makes cattle grow much faster",
            "cattle prefer seaweed to grass",
            "it is cheaper than any other feed",
            "it removes carbon from cattle",
          ],
          "Bazı türlerin sığırların ürettiği metan miktarını azalttığı görülmektedir.",
        ],
      ],
    },
    {
      text:
        "Biomimicry is the practice of designing materials, structures and systems that imitate solutions found in nature. Over millions of years, natural selection has produced organisms that are extremely efficient at solving particular problems, and engineers have increasingly turned to them for inspiration. One famous example is Velcro, which was invented after a Swiss engineer noticed how burrs stuck to his dog's fur. In Japan, the front of a high-speed train was redesigned to resemble the beak of a kingfisher, a bird that dives into water with little splash; the change reduced noise and energy use. Architects have also studied termite mounds, which maintain stable internal temperatures, to design buildings that require less air conditioning.",
      questions: [
        [
          "According to the passage, engineers turn to nature because ----.",
          [
            "natural selection has produced very efficient solutions to problems",
            "natural materials are always cheaper than synthetic ones",
            "animals can design machines for humans",
            "nature contains no complex structures",
            "most inventions were made by accident",
          ],
          "Doğal seçilim belirli sorunları çözmede son derece verimli organizmalar üretmiştir; bu yüzden mühendisler doğadan ilham alır.",
        ],
        [
          "The example of the high-speed train shows that ----.",
          [
            "copying a bird's beak helped reduce noise and energy use",
            "trains in Japan are faster than birds",
            "kingfishers cause problems for trains",
            "Velcro was invented in Japan",
            "trains should be designed to dive into water",
          ],
          "Trenin ön kısmının yalıçapkını gagasına benzetilmesi gürültüyü ve enerji kullanımını azalttı.",
        ],
        [
          "Termite mounds are mentioned in the passage because ----.",
          [
            "they keep stable internal temperatures that inspire building design",
            "they are made from the same material as concrete",
            "termites damage modern buildings",
            "they were the first structures studied by engineers",
            "they require a lot of air conditioning",
          ],
          "Termit yuvaları iç sıcaklığı sabit tutar; mimarlar daha az klima gerektiren binalar için bunları incelemiştir.",
        ],
      ],
    },
    {
      text:
        "In the 1970s, the American astronomer Vera Rubin measured how fast stars orbit the centres of their galaxies. According to the laws of gravity, stars far from the centre should move more slowly than those nearer the middle, just as the outer planets of our solar system move more slowly than the inner ones. Instead, Rubin found that the outer stars moved just as fast. The most widely accepted explanation is that galaxies are surrounded by large amounts of invisible 'dark matter', whose gravity holds the fast-moving stars in place. Dark matter does not emit, absorb or reflect light, so it cannot be observed directly. Despite decades of experiments designed to detect dark matter particles, scientists still do not know what it is made of.",
      questions: [
        [
          "According to the laws of gravity, stars far from a galaxy's centre should ----.",
          [
            "move more slowly than stars nearer the centre",
            "move faster than stars nearer the centre",
            "not move at all",
            "move towards the centre of the galaxy",
            "produce more light than other stars",
          ],
          "Kütleçekim yasalarına göre merkezden uzak yıldızlar merkeze yakın olanlardan daha yavaş hareket etmelidir.",
        ],
        [
          "Rubin's observations were surprising because ----.",
          [
            "the outer stars moved as fast as the inner ones",
            "the inner stars did not move at all",
            "the galaxies were smaller than expected",
            "she could see dark matter directly",
            "the stars were moving away from the galaxy",
          ],
          "Rubin dış yıldızların da iç yıldızlar kadar hızlı hareket ettiğini buldu; bu beklentiye aykırıydı.",
        ],
        [
          "It can be inferred from the passage that dark matter ----.",
          [
            "is detected through its gravitational effects rather than by sight",
            "has been clearly identified in laboratory experiments",
            "is a type of star that produces no light",
            "slows down the stars at the edges of galaxies",
            "is found only in our own galaxy",
          ],
          "Karanlık madde ışıkla gözlemlenemediği için varlığı kütleçekimsel etkilerinden anlaşılır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "For centuries, sailors had no reliable way to determine their longitude, or east-west position, at sea. ---- In the eighteenth century, the English clockmaker John Harrison solved the problem by building a clock that remained accurate on long voyages.",
      [
        "As a result, many ships were lost or wrecked because they did not know exactly where they were.",
        "Sailors often spent many months away from their families.",
        "Many ships in that period were built from oak and other hardwoods brought from distant forests.",
        "Clocks are now found in almost every home.",
        "The oceans cover most of the Earth's surface.",
      ],
      "Boşluk sorunun sonuçlarını anlatmalıdır; ardından Harrison'ın sorunu çözdüğü söylenir.",
    ],
    [
      "Most metals expand when they are heated. ---- For this reason, small gaps are left between sections of railway track and bridges.",
      [
        "Without space to expand, these structures could bend or crack on hot days.",
        "Iron is one of the most common metals on Earth.",
        "The first public railways were built in Britain at the beginning of the nineteenth century.",
        "Some bridges are painted bright colours.",
        "Metals are good conductors of heat and electricity.",
      ],
      "'For this reason' bir gerekçe ister: genleşmeye yer olmazsa yapılar sıcak günlerde bükülebilir ya da çatlayabilir.",
    ],
    [
      "---- For instance, octopuses can open jars, solve puzzles and even escape from their tanks in aquariums.",
      [
        "Some invertebrates are far more intelligent than people once believed.",
        "Octopuses live in oceans all around the world.",
        "Many large aquariums are especially popular with families and school groups.",
        "Jars are often made from glass or plastic.",
        "Some sea animals can change colour very quickly.",
      ],
      "'For instance' ile verilen ahtapot örneği, bazı omurgasızların sanıldığından çok daha zeki olduğunu söyleyen bir genelleme gerektirir.",
    ],
    [
      "Heat pumps are becoming a popular way to heat homes. ---- In addition, they can be reversed to provide cooling in summer.",
      [
        "They use far less energy than traditional heaters because they move heat rather than generate it.",
        "In many countries, most homes are still heated by gas boilers that burn fossil fuels.",
        "Winters are very cold in northern countries.",
        "Some people prefer to heat only one room.",
        "Heating bills can be very high in winter.",
      ],
      "'In addition' ile ikinci bir avantaj eklenir; boşlukta ısı pompalarının ilk avantajı (çok daha az enerji kullanması) yer almalıdır.",
    ],
    [
      "Light from distant galaxies takes billions of years to reach the Earth. ---- As a result, powerful telescopes allow astronomers to study the universe as it was in the distant past.",
      [
        "This means that we see these galaxies not as they are today but as they were when the light left them.",
        "Galaxies contain billions of stars and planets.",
        "Telescopes are often built on high mountains.",
        "Light travels through space at a speed of about 300,000 kilometres per second, faster than anything else.",
        "Many people enjoy looking at the night sky.",
      ],
      "'As a result' öncesinde geçmişi incelemeyi mümkün kılan neden gerekir: galaksileri bugünkü hâlleriyle değil, ışığın yola çıktığı andaki hâlleriyle görmemiz.",
    ],
    [
      "Some cities are testing robots to deliver parcels and food. ---- Critics, however, worry that the robots could cause congestion on pavements and replace human jobs.",
      [
        "Supporters say that they could reduce delivery costs and traffic on the roads.",
        "Many people order food online in the evenings.",
        "Robots have been used for decades in many factories, especially in the car industry.",
        "Parcels are often delivered by post.",
        "Pavements are usually made of concrete.",
      ],
      "'Critics, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Geysers are hot springs that periodically shoot water and steam into the air.",
        "They form when groundwater is heated by hot rocks deep underground.",
        "Pressure builds up until the water erupts through an opening in the ground.",
        "Many tourists enjoy swimming in heated pools.",
        "Yellowstone National Park contains about half of the world's geysers.",
      ],
      odd: 3,
      why: "Parça gayzerleri anlatır. Turistlerin ısıtılmış havuzlarda yüzmesinden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Chameleons can change the colour of their skin.",
        "They do this by adjusting tiny crystals in special skin cells.",
        "Colour changes help them communicate and control their body temperature.",
        "Many people decorate their homes in bright colours.",
        "Contrary to popular belief, camouflage is not the main reason for these changes.",
      ],
      odd: 3,
      why: "Parça bukalemunların renk değiştirmesini anlatır. Evlerin parlak renklerle dekore edilmesinden söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The ozone layer protects life on Earth from harmful ultraviolet radiation.",
        "In the 1980s, scientists discovered a large hole in it above Antarctica.",
        "The damage was caused mainly by chemicals used in refrigerators and spray cans.",
        "An international agreement banned these chemicals in 1987.",
        "Penguins are excellent swimmers.",
      ],
      odd: 4,
      why: "Parça ozon tabakasını anlatır. Penguenlerin iyi yüzücü olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Artificial sweeteners provide a sweet taste with few or no calories.",
        "Many famous chefs have written cookery books.",
        "They are used in many diet drinks and sugar-free products.",
        "Some studies have raised questions about their long-term effects on health.",
        "Regulatory agencies, however, consider most of them safe in normal amounts.",
      ],
      odd: 1,
      why: "Parça yapay tatlandırıcıları anlatır. Ünlü şeflerin yemek kitaplarından söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The human brain contains around eighty-six billion nerve cells.",
        "These cells communicate through electrical and chemical signals.",
        "The brain uses about twenty percent of the body's energy.",
        "Many people enjoy solving crossword puzzles.",
        "Scientists are still trying to understand how it produces thoughts and memories.",
      ],
      odd: 3,
      why: "Parça insan beynini anlatır. Bulmaca çözmekten söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Microplastics are tiny pieces of plastic less than five millimetres long.",
        "They come from larger plastic items that break down, as well as from products such as cosmetics.",
        "Many people now carry reusable water bottles.",
        "Microplastics have been found in oceans, soil and even in human blood.",
        "Scientists are studying what effects they may have on health.",
      ],
      odd: 2,
      why: "Parça mikroplastikleri anlatır. Tekrar kullanılabilir su şişelerinden söz eden III. cümle akışı bozar.",
    },
  ],
};
