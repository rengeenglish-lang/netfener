import type { YokdilDeneme } from "./types";

export const FEN_08: YokdilDeneme = {
  no: 8,
  field: "fen",
  vocab: [
    [
      "Superconductors can ---- electricity with no resistance when they are cooled to very low temperatures.",
      ["conduct", "block", "waste", "store", "produce"],
      "Süperiletkenler çok düşük sıcaklıklarda elektriği dirençsiz 'iletir' (conduct).",
    ],
    [
      "Even a tiny piece of space debris can cause ---- damage to a satellite because it travels at such high speed.",
      ["severe", "minor", "invisible", "pleasant", "temporary"],
      "Yüksek hızla hareket eden küçük bir parçanın uyduya 'ciddi' (severe) hasar verebileceği anlatılır.",
    ],
    [
      "Wetlands store large amounts of carbon, so draining them can ---- greenhouse gases into the atmosphere.",
      ["release", "remove", "absorb", "freeze", "filter"],
      "Sulak alanları kurutmak depolanan karbonun atmosfere 'salınmasına' (release) yol açar.",
    ],
    [
      "Locust swarms can ---- entire fields of crops in just a few hours.",
      ["wipe out", "make up", "look after", "set up", "bring up"],
      "Çekirge sürülerinin ekinleri birkaç saatte 'yok etmesi' (wipe out) anlatılır.",
    ],
    [
      "Rare earth metals are ---- for the production of wind turbines, electric cars and smartphones.",
      ["essential", "harmful", "useless", "optional", "irrelevant"],
      "Nadir toprak metallerinin bu ürünlerin üretimi için 'vazgeçilmez' (essential) olduğu anlatılır.",
    ],
    [
      "Some microorganisms are able to ---- in boiling water, extreme cold or highly acidic environments.",
      ["thrive", "vanish", "freeze", "dissolve", "decline"],
      "Ekstremofillerin aşırı koşullarda 'gelişip serpilebildiği' (thrive) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time Marie Curie received her second Nobel Prize in 1911, she ---- two new elements.",
      ["had discovered", "has discovered", "discovers", "will discover", "is discovering"],
      "1911'den önce tamamlanmış eylem Past Perfect ile anlatılır: 'had discovered'.",
    ],
    [
      "If superconductors ---- at room temperature, electricity could be transmitted with almost no losses.",
      ["worked", "work", "had worked", "will work", "would work"],
      "Ana cümle 'could be transmitted' olduğundan Type 2 koşul gerekir: if + Past 'worked'.",
    ],
    [
      "Scientists have discovered bacteria ---- enzymes remain active at temperatures above 100°C.",
      ["whose", "which", "who", "where", "whom"],
      "Bakterilerin enzimlerinden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- international agreements, the amount of debris in orbit continues to grow.",
      ["Despite", "Because of", "Thanks to", "Owing to", "Due to"],
      "Uluslararası anlaşmalara 'rağmen' enkazın artmaya devam etmesi zıtlıktır: 'Despite'.",
    ],
    [
      "Researchers are trying to work out why locusts suddenly ---- huge swarms.",
      ["form", "do they form", "they forming", "form they", "are they forming"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'why locusts suddenly form'.",
    ],
    [
      "Only after the metal was cooled to extremely low temperatures ---- its electrical resistance.",
      ["did it lose", "it lost", "it did lose", "lost it", "had lost it"],
      "'Only after …' cümle başında olduğunda ana cümle devrik olur: 'did it lose'.",
    ],
    [
      "Many countries have stopped ---- wetlands for farmland because of their environmental value.",
      ["draining", "to drain", "drain", "drained", "to draining"],
      "'stop doing' (yapmayı bırakmak) kalıbı '-ing' ister: 'stopped draining'.",
    ],
    [
      "Most of the rare earth metals ---- today come from a small number of countries.",
      ["used", "using", "which use", "to use", "have used"],
      "Bugün kullanılan metaller edilgen anlamlı geçmiş ortaçla nitelenir: 'used'.",
    ],
    [
      "Space agencies have proposed that every new satellite ---- able to leave orbit at the end of its mission.",
      ["be", "is", "was", "will be", "being"],
      "'propose that' sonrası subjunctive (yalın fiil) kullanılır: 'every new satellite be able'.",
    ],
    [
      "Marie Curie's research exposed her to high levels of radiation, ---- probably contributed to her death.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
    ],
    [
      "---- rare earth metals are not actually rare, they are difficult and expensive to extract.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Nadir olmamalarına rağmen çıkarılmalarının zor olması zıtlıktır: 'Although'.",
    ],
    [
      "Satellites are designed ---- in orbit for many years without repairs.",
      ["to operate", "operating", "operate", "operated", "to operating"],
      "'be designed to do' kalıbı mastar ister.",
    ],
    [
      "The swarm was ---- large that it darkened the sky for several hours.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (large) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By the end of this decade, thousands of new satellites ---- into orbit.",
      ["will have been launched", "have been launched", "were launched", "had been launched", "are launched"],
      "Gelecekte tamamlanmış olacak edilgen eylem Future Perfect Passive ile anlatılır: 'will have been launched'.",
    ],
  ],
  cloze: [
    {
      text:
        "Marie Curie, born in Warsaw in 1867, was one of the most important scientists of the twentieth century. After moving to Paris to study, she began investigating the mysterious rays {1} by uranium, a phenomenon she named 'radioactivity'. Working with her husband Pierre, she discovered two new elements, polonium and radium. In 1903, she became the first woman to win a Nobel Prize, {2} she shared with Pierre and the physicist Henri Becquerel. {3} Pierre's death in 1906, she continued her research and won a second Nobel Prize in 1911, this time in chemistry. She remains the only person to have won Nobel Prizes in two different sciences. However, the dangers of radiation were not understood at the time, {4} her long exposure to radioactive materials {5} have caused the illness from which she died in 1934.",
      blanks: [
        [
          "(21) ----",
          ["given off", "giving off", "to give off", "gives off", "having given off by"],
          "Uranyum tarafından yayılan ışınlar edilgen anlamlı geçmiş ortaçla nitelenir: 'given off by uranium'.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'a Nobel Prize' ifadesine atıf yapan ve 'shared' fiilinin nesnesi olan 'which' gerekir.",
        ],
        [
          "(23) ----",
          ["After", "Before", "Until", "Unless", "Although"],
          "Pierre'in ölümünden 'sonra' araştırmalarını sürdürdüğü anlatılır: 'After'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Tehlikelerin bilinmemesi ve maruziyetin hastalığa yol açması birbirine bağlanan bilgilerdir: 'and'.",
        ],
        [
          "(25) ----",
          ["is thought to", "is used to", "had better", "would rather", "ought not"],
          "Uzun maruziyetin hastalığa neden olduğu 'düşünülmektedir': 'is thought to have caused'.",
        ],
      ],
    },
    {
      text:
        "The desert locust is normally a solitary insect that lives quietly in the dry regions of Africa, the Middle East and South Asia. After periods of heavy rain, however, vegetation grows quickly and locust populations increase. When the insects become crowded, physical contact with one another triggers a remarkable transformation: they change colour, become more active and begin to gather in groups, {1} can eventually form enormous swarms. A single swarm may contain billions of locusts and travel more than a hundred kilometres in a day, {2} eating its own weight in food daily. Swarms can destroy crops across entire regions, {3} serious threats to food security. Because outbreaks begin in remote areas, early detection is essential. Today, satellites and mobile phone apps help authorities track conditions {4} could lead to outbreaks, {5} allows them to act before swarms form.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'groups' sözcüğüne atıf yapan ve 'can … form' yükleminin öznesi olan 'which' gerekir.",
        ],
        [
          "(27) ----",
          ["each locust", "every locusts", "all locust", "both locust", "neither locusts"],
          "Her bir çekirgenin kendi ağırlığı kadar yemesi anlatılır: 'each locust eating its own weight'.",
        ],
        [
          "(28) ----",
          ["posing", "posed", "to pose", "poses", "having posed by"],
          "Virgülden sonra önceki olayın sonucu etken ortaçla verilir: 'posing serious threats'.",
        ],
        [
          "(29) ----",
          ["that", "what", "whose", "where", "when"],
          "'conditions' sözcüğünü niteleyen ve 'could lead' fiilinin öznesi olan ilgi zamiri 'that' gerekir.",
        ],
        [
          "(30) ----",
          ["which", "who", "what", "where", "that"],
          "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although superconductivity was discovered more than a century ago, ----.",
      [
        "its widespread use is still limited by the need for extreme cooling",
        "it was first observed in mercury cooled with liquid helium",
        "superconductors are used in hospital MRI scanners",
        "it allows electricity to flow without any resistance",
        "several Nobel Prizes have been awarded for research on it",
      ],
      "'Although' zıtlık ister: bir asırdan uzun süre önce keşfedilse de yaygın kullanımı aşırı soğutma gerekliliğiyle sınırlıdır.",
    ],
    [
      "Many space scientists warn that the growing amount of debris ----.",
      [
        "could make some orbits too dangerous to use in the future",
        "although most of it is too small to be seen from Earth",
        "which includes old satellites and fragments of rockets",
        "unless space agencies track every piece carefully",
        "so that satellites would have needed thicker shields",
      ],
      "'warn that' sonrası tam bir yüklem gerekir; yalnızca 'could make some orbits …' cümleyi tamamlar.",
    ],
    [
      "If the wetland had not been drained for farming, ----.",
      [
        "the town would not have flooded so badly last spring",
        "the wetland was home to many species of birds",
        "farmers will grow wheat and maize on the land",
        "the area had been a popular place for fishing",
        "most of the water came from a nearby river",
      ],
      "Type 3 koşul cümlesi 'would not have + V3' ile tamamlanır.",
    ],
    [
      "While solitary locusts are harmless, ----.",
      [
        "swarming locusts can devastate crops across entire regions",
        "they live mainly in deserts and other dry areas",
        "they are usually green or brown in colour",
        "they feed on many different kinds of plants",
        "they are related to grasshoppers and crickets",
      ],
      "'While' iki karşıt durumu bağlar: yalnız çekirgeler zararsızken sürü hâlindekiler tüm bölgelerde ekinleri mahvedebilir.",
    ],
    [
      "Several companies are developing methods to recover rare earth metals from old electronics ----.",
      [
        "in order to reduce the need for new mining",
        "which consumers had thrown away for many years",
        "although electronic devices contain many metals",
        "because smartphones are becoming more expensive",
        "unless the government bans electronic waste",
      ],
      "Yöntemlerin amacı yeni madencilik ihtiyacını azaltmaktır: 'in order to'.",
    ],
    [
      "Unless something is done to remove debris from orbit, ----.",
      [
        "collisions could create even more fragments",
        "the first satellite was launched in 1957",
        "astronauts had worked on the space station",
        "satellites provide weather forecasts and maps",
        "rockets are very expensive to build",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: çarpışmalar daha da fazla parça oluşturabilir.",
    ],
    [
      "Since extremophiles were discovered in hot springs, ----.",
      [
        "scientists have found them in many other extreme environments",
        "the springs had been visited by tourists for centuries",
        "the water was too hot for most living things",
        "researchers will search for life on other planets",
        "most biologists believed life needed mild conditions",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have found'.",
    ],
    [
      "Even though wetlands cover only a small part of the Earth's surface, ----.",
      [
        "they store a large proportion of the carbon held in soils",
        "they include marshes, swamps and peat bogs",
        "they are home to many species of birds and fish",
        "they are often found near rivers and coasts",
        "many of them have been drained for agriculture",
      ],
      "'Even though' beklenmedik bir sonuç ister: küçük bir alan kaplasalar da topraklardaki karbonun büyük bir kısmını depolarlar.",
    ],
    [
      "The colder a superconductor becomes, ----.",
      [
        "the more easily electricity flows through it",
        "because liquid helium is very expensive",
        "although some materials work at higher temperatures",
        "which is measured in degrees Kelvin",
        "since scientists use powerful refrigerators",
      ],
      "'The colder …, the more …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As demand for electric cars has grown, ----.",
      [
        "so has the demand for rare earth metals",
        "most cars had used petrol or diesel",
        "batteries are made in many countries",
        "electric cars are quiet and clean",
        "many people drive to work every day",
      ],
      "'As' paralel bir değişim bildirir: elektrikli araba talebi arttıkça nadir toprak metallerine talep de arttı.",
    ],
    [
      "No sooner had the satellite reached orbit ----.",
      [
        "than it began sending data back to Earth",
        "when the rocket had been launched",
        "because the engineers were very skilled",
        "so the team celebrated in the control room",
        "although the weather was bad",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Superconducting magnets are used in MRI scanners to produce detailed images of the inside of the body.",
      [
        "Süperiletken mıknatıslar, vücudun içinin ayrıntılı görüntülerini elde etmek için MR tarayıcılarında kullanılır.",
        "MR tarayıcıları, süperiletken mıknatısların vücuda zarar vermesini önlemek için tasarlanmıştır.",
        "Vücudun içinin görüntüleri, süperiletken mıknatıslar olmadan daha ayrıntılıdır.",
        "Süperiletken mıknatıslar yalnızca elektrik santrallerinde kullanılır.",
        "MR tarayıcıları, mıknatıs kullanmadan görüntü üretir.",
      ],
      "'are used in MRI scanners to produce detailed images' 'ayrıntılı görüntüler elde etmek için MR tarayıcılarında kullanılır' demektir.",
    ],
    [
      "Objects in low Earth orbit travel so fast that a collision with even a small fragment can destroy a satellite.",
      [
        "Alçak Dünya yörüngesindeki cisimler o kadar hızlı hareket eder ki küçük bir parçayla çarpışma bile bir uyduyu yok edebilir.",
        "Alçak Dünya yörüngesindeki cisimler çok yavaş hareket ettiği için çarpışmalar zararsızdır.",
        "Uydular, küçük parçalarla çarpıştıklarında daha hızlı hareket eder.",
        "Küçük parçalar, uyduların yörüngede kalmasına yardımcı olur.",
        "Alçak yörüngede çarpışma riski bulunmamaktadır.",
      ],
      "'travel so fast that a collision with even a small fragment can destroy' 'o kadar hızlı hareket eder ki küçük bir parçayla çarpışma bile … yok edebilir' demektir.",
    ],
    [
      "Peatlands store more carbon than all the world's forests combined, despite covering a much smaller area.",
      [
        "Turbalıklar, çok daha küçük bir alanı kaplamalarına rağmen dünyadaki tüm ormanların toplamından daha fazla karbon depolar.",
        "Turbalıklar, dünyadaki ormanlardan daha geniş bir alanı kaplar ama daha az karbon depolar.",
        "Dünyadaki ormanlar, turbalıklardan çok daha fazla karbon depolar.",
        "Turbalıklar ve ormanlar aynı miktarda karbon depolar.",
        "Turbalıklar karbon depolamaz, yalnızca su tutar.",
      ],
      "'store more carbon than all the world's forests combined, despite covering a much smaller area' 'çok daha küçük bir alanı kaplamalarına rağmen tüm ormanların toplamından daha fazla karbon depolar' demektir.",
    ],
    [
      "Crowding causes locusts to change both their appearance and their behaviour.",
      [
        "Kalabalık, çekirgelerin hem görünüşlerini hem de davranışlarını değiştirmesine neden olur.",
        "Kalabalık, çekirgelerin görünüşünü değiştirir ama davranışlarını etkilemez.",
        "Çekirgeler, davranışlarını değiştirmek için kalabalıktan kaçar.",
        "Çekirgelerin görünüşü, yalnızca yalnız yaşadıklarında değişir.",
        "Kalabalık, çekirgelerin ölmesine neden olur.",
      ],
      "'causes locusts to change both their appearance and their behaviour' 'hem görünüşlerini hem de davranışlarını değiştirmesine neden olur' demektir.",
    ],
    [
      "Rare earth metals are not especially rare, but they are seldom found in concentrations that are worth mining.",
      [
        "Nadir toprak metalleri özellikle nadir değildir, ancak çıkarmaya değecek yoğunluklarda nadiren bulunurlar.",
        "Nadir toprak metalleri gerçekten çok nadirdir ve hiçbir yerde çıkarılamaz.",
        "Nadir toprak metalleri her yerde yüksek yoğunlukta bulunur.",
        "Nadir toprak metallerini çıkarmak her zaman kolay ve ucuzdur.",
        "Nadir toprak metalleri yalnızca okyanus tabanında bulunur.",
      ],
      "'are not especially rare, but they are seldom found in concentrations that are worth mining' 'özellikle nadir değildir, ancak çıkarmaya değecek yoğunluklarda nadiren bulunurlar' demektir.",
    ],
    [
      "The discovery of extremophiles has encouraged scientists to search for life in harsh environments on other planets.",
      [
        "Ekstremofillerin keşfi, bilim insanlarını diğer gezegenlerin zorlu ortamlarında yaşam aramaya teşvik etmiştir.",
        "Ekstremofillerin keşfi, diğer gezegenlerde yaşam aranmasının gereksiz olduğunu göstermiştir.",
        "Bilim insanları, ekstremofilleri diğer gezegenlerden Dünya'ya getirmiştir.",
        "Diğer gezegenlerdeki zorlu ortamlar, ekstremofillerin keşfini engellemiştir.",
        "Ekstremofiller yalnızca diğer gezegenlerde yaşar.",
      ],
      "'has encouraged scientists to search for life in harsh environments on other planets' 'bilim insanlarını diğer gezegenlerin zorlu ortamlarında yaşam aramaya teşvik etmiştir' demektir.",
    ],
  ],
  trEn: [
    [
      "Marie Curie, iki farklı bilim dalında Nobel Ödülü kazanan tek kişidir.",
      [
        "Marie Curie is the only person to have won Nobel Prizes in two different sciences.",
        "Marie Curie is one of many people to have won Nobel Prizes in two sciences.",
        "Marie Curie won a Nobel Prize in only one field of science.",
        "Marie Curie refused to accept the Nobel Prize in chemistry.",
        "Two different scientists shared Marie Curie's Nobel Prize in physics.",
      ],
      "'iki farklı bilim dalında Nobel Ödülü kazanan tek kişi' 'the only person to have won Nobel Prizes in two different sciences' karşılığıdır.",
    ],
    [
      "Uzay enkazı, eski uyduları ve roket parçalarını içerir.",
      [
        "Space debris includes old satellites and fragments of rockets.",
        "Space debris is made up only of natural rocks from space.",
        "Old satellites are used to remove rocket fragments from space.",
        "Rockets are built from pieces of space debris.",
        "Space debris contains no human-made objects.",
      ],
      "'eski uyduları ve roket parçalarını içerir' 'includes old satellites and fragments of rockets' karşılığıdır.",
    ],
    [
      "Sulak alanlar, sel sularını emerek taşkın riskini azaltabilir.",
      [
        "Wetlands can reduce the risk of flooding by absorbing floodwater.",
        "Wetlands can increase the risk of flooding by releasing water.",
        "Floodwater is used to create new wetlands every year.",
        "Wetlands have no effect on the risk of flooding.",
        "The risk of flooding is highest where wetlands are protected.",
      ],
      "'sel sularını emerek' 'by absorbing floodwater', 'taşkın riskini azaltabilir' 'can reduce the risk of flooding' karşılığıdır.",
    ],
    [
      "Çekirge sürüleri, milyonlarca insanın gıda güvenliğini tehdit edebilir.",
      [
        "Locust swarms can threaten the food security of millions of people.",
        "Locust swarms can improve the food security of millions of people.",
        "Millions of people hunt locusts to improve their food security.",
        "Locusts eat only plants that people do not need.",
        "Food security has no connection with locust swarms.",
      ],
      "'gıda güvenliğini tehdit edebilir' 'can threaten the food security of' karşılığıdır.",
    ],
    [
      "Nadir toprak metallerinin geri dönüştürülmesi, madenciliğin çevresel etkisini azaltabilir.",
      [
        "Recycling rare earth metals could reduce the environmental impact of mining.",
        "Recycling rare earth metals would increase the environmental impact of mining.",
        "Mining has no environmental impact when metals are recycled.",
        "Rare earth metals cannot be recycled under any conditions.",
        "The environmental impact of recycling is greater than that of mining.",
      ],
      "'geri dönüştürülmesi' 'recycling', 'çevresel etkisini azaltabilir' 'could reduce the environmental impact of' karşılığıdır.",
    ],
    [
      "Bazı ekstremofiller, okyanus tabanındaki kaynar su bacalarının yakınında yaşar.",
      [
        "Some extremophiles live near boiling hot vents on the ocean floor.",
        "Some extremophiles live only in frozen lakes on mountains.",
        "Hot vents on the ocean floor are created by extremophiles.",
        "No living things can survive near hot vents on the ocean floor.",
        "Extremophiles prefer to live in mild and comfortable conditions.",
      ],
      "'okyanus tabanındaki kaynar su bacalarının yakınında yaşar' 'live near boiling hot vents on the ocean floor' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Superconductors are materials that, when cooled below a certain critical temperature, conduct electricity with no resistance at all. This means that an electric current can flow through a superconducting loop indefinitely without losing energy. The phenomenon was discovered in 1911, when the Dutch physicist Heike Kamerlingh Onnes cooled mercury with liquid helium to about minus 269 degrees Celsius. Superconductors also expel magnetic fields, which allows magnets to float above them, a property used in some experimental high-speed trains. Today, superconducting magnets are essential in MRI scanners and particle accelerators. However, because most superconductors must be kept extremely cold, they are expensive to use. Scientists are therefore searching for materials that are superconducting at room temperature, which could transform electricity transmission.",
      questions: [
        [
          "According to the passage, a current in a superconducting loop ----.",
          [
            "can flow indefinitely without losing energy",
            "stops as soon as the material is cooled",
            "loses most of its energy within seconds",
            "can only flow at room temperature",
            "produces large amounts of heat",
          ],
          "Süperiletken bir halkada akım enerji kaybetmeden sonsuza dek akabilir.",
        ],
        [
          "It is stated in the passage that some experimental trains use the fact that superconductors ----.",
          [
            "expel magnetic fields, allowing magnets to float",
            "can be used without any cooling",
            "produce electricity from sunlight",
            "are lighter than all other metals",
            "can store large amounts of fuel",
          ],
          "Süperiletkenler manyetik alanları dışarı iter; bu da mıknatısların üzerlerinde süzülmesini sağlar.",
        ],
        [
          "Scientists are searching for room-temperature superconductors because ----.",
          [
            "keeping current superconductors extremely cold is expensive",
            "existing superconductors do not work in MRI scanners",
            "mercury is no longer available for research",
            "liquid helium produces too much electricity",
            "superconductors are dangerous at low temperatures",
          ],
          "Çoğu süperiletkenin aşırı soğuk tutulması gerektiği için kullanımları pahalıdır; oda sıcaklığında çalışan malzemeler bu yüzden aranmaktadır.",
        ],
      ],
    },
    {
      text:
        "Since the launch of the first artificial satellite in 1957, thousands of objects have been sent into orbit around the Earth. Many of them are no longer working, and together with fragments from explosions and collisions, they form a growing cloud of space debris. Agencies currently track tens of thousands of objects larger than about ten centimetres, but there are millions of smaller pieces. Because they travel at speeds of around 28,000 kilometres per hour, even tiny fragments can seriously damage satellites or the International Space Station. Some experts fear a scenario known as the 'Kessler syndrome', in which collisions create more debris, which causes further collisions, until some orbits become unusable. Proposed solutions include designing satellites to burn up in the atmosphere at the end of their missions and developing technologies to capture existing debris.",
      questions: [
        [
          "According to the passage, space debris includes ----.",
          [
            "satellites that no longer work and fragments from collisions",
            "only natural rocks that come from the Moon",
            "clouds of gas released by active satellites",
            "objects that have fallen back to Earth",
            "pieces of the International Space Station only",
          ],
          "Uzay enkazı, artık çalışmayan uydular ile patlama ve çarpışmalardan kalan parçalardan oluşur.",
        ],
        [
          "Even tiny fragments are dangerous because ----.",
          [
            "they travel at extremely high speeds",
            "they are made of radioactive materials",
            "they are too small to be tracked at all",
            "they attract larger objects towards them",
            "they can fall onto cities without warning",
          ],
          "Saatte yaklaşık 28.000 km hızla hareket ettikleri için küçük parçalar bile ciddi hasar verebilir.",
        ],
        [
          "The 'Kessler syndrome' refers to a situation in which ----.",
          [
            "collisions produce more debris, leading to further collisions",
            "satellites are destroyed by solar radiation",
            "all debris falls back to Earth at the same time",
            "space agencies stop launching satellites",
            "debris is captured and recycled",
          ],
          "Kessler sendromu, çarpışmaların daha fazla enkaz yaratıp başka çarpışmalara yol açtığı bir zincirleme durumdur.",
        ],
      ],
    },
    {
      text:
        "Wetlands, which include marshes, swamps and peatlands, are among the most valuable ecosystems on Earth. They provide habitats for a great variety of plants and animals, filter pollutants from water and protect communities from floods by absorbing excess rainfall. Peatlands, in particular, are remarkable carbon stores. Because their waterlogged soils contain little oxygen, dead plant material decomposes extremely slowly and accumulates over thousands of years. Although peatlands cover only around three percent of the Earth's land surface, they store more carbon than all the world's forests combined. When they are drained for agriculture or forestry, however, the peat dries out and begins to release this carbon. Restoring damaged peatlands by blocking drainage channels and raising water levels is now seen as an important climate measure.",
      questions: [
        [
          "According to the passage, wetlands protect communities from floods by ----.",
          [
            "absorbing excess rainfall",
            "releasing water into rivers",
            "blocking rivers with plants",
            "reducing the amount of rain",
            "cooling the surrounding air",
          ],
          "Sulak alanlar fazla yağmur suyunu emerek toplulukları sellerden korur.",
        ],
        [
          "Dead plant material decomposes slowly in peatlands because ----.",
          [
            "the waterlogged soil contains little oxygen",
            "the temperature is always very high",
            "there are too many animals feeding on it",
            "the plants contain no carbon",
            "farmers remove it regularly",
          ],
          "Su doymuş topraklar az oksijen içerdiği için ölü bitki maddesi çok yavaş ayrışır.",
        ],
        [
          "It can be inferred from the passage that restoring peatlands ----.",
          [
            "helps prevent stored carbon from being released",
            "requires draining them more effectively",
            "reduces the number of species living there",
            "is less important than planting new forests",
            "increases the risk of floods",
          ],
          "Kurutulan turbalıklar karbon saldığına göre, onları eski hâline getirmek depolanan karbonun salınmasını önlemeye yardım eder.",
        ],
      ],
    },
    {
      text:
        "Rare earth elements are a group of seventeen metals with unusual magnetic and optical properties that make them essential for many modern technologies, including smartphones, wind turbines and the motors of electric vehicles. Despite their name, most of them are not especially rare in the Earth's crust. However, they are rarely found in concentrated deposits, and separating them from one another is a complex and environmentally damaging process that produces large amounts of toxic waste. For several decades, a single country has dominated global production, raising concerns about the security of supply. As demand rises with the growth of clean energy, governments and companies are investing in new mines elsewhere and in technologies to recover rare earth metals from discarded electronics, which currently are rarely recycled.",
      questions: [
        [
          "According to the passage, rare earth elements are important because ----.",
          [
            "their magnetic and optical properties are needed in many technologies",
            "they are the most common metals in the Earth's crust",
            "they can be used as a clean source of fuel",
            "they are easy and cheap to separate",
            "they are used mainly in jewellery",
          ],
          "Nadir toprak elementlerinin olağandışı manyetik ve optik özellikleri onları pek çok modern teknoloji için vazgeçilmez kılar.",
        ],
        [
          "It is stated in the passage that the process of separating rare earth metals ----.",
          [
            "is complex and produces large amounts of toxic waste",
            "is simple and has no environmental impact",
            "was invented only a few years ago",
            "can be carried out at home",
            "uses only renewable energy",
          ],
          "Bu metalleri birbirinden ayırmak karmaşık ve çevreye zararlı bir süreçtir ve büyük miktarda zehirli atık üretir.",
        ],
        [
          "Governments and companies are investing in recycling technologies because ----.",
          [
            "demand is rising and supply has been concentrated in one country",
            "rare earth metals are no longer used in electronics",
            "old electronics contain no valuable materials",
            "mining has become completely impossible",
            "recycling produces more toxic waste than mining",
          ],
          "Talep artmakta ve üretim uzun süredir tek bir ülkede yoğunlaşmaktadır; bu nedenle geri dönüşüme yatırım yapılmaktadır.",
        ],
      ],
    },
    {
      text:
        "For a long time, biologists assumed that life could exist only within a fairly narrow range of conditions. This view changed with the discovery of extremophiles, organisms that thrive in environments once thought to be uninhabitable. In the 1960s, researchers found bacteria living in the hot springs of Yellowstone National Park at temperatures close to boiling. Since then, extremophiles have been discovered in highly acidic lakes, in Antarctic ice, kilometres below the Earth's surface and around hydrothermal vents on the deep ocean floor. Some of their enzymes, which remain stable at high temperatures, have proved extremely useful in biotechnology, for example in the laboratory technique used to copy DNA. Extremophiles have also encouraged astrobiologists to consider that life might exist in harsh environments elsewhere in the solar system.",
      questions: [
        [
          "According to the passage, the discovery of extremophiles ----.",
          [
            "challenged the idea that life needs a narrow range of conditions",
            "proved that life cannot exist in hot springs",
            "showed that bacteria live only in mild climates",
            "was made on the deep ocean floor in the 1960s",
            "had no influence on biological thinking",
          ],
          "Ekstremofillerin keşfi, yaşamın yalnızca dar bir koşul aralığında var olabileceği görüşünü değiştirdi.",
        ],
        [
          "The enzymes of some extremophiles are useful in biotechnology because they ----.",
          [
            "remain stable at high temperatures",
            "can only work in cold conditions",
            "destroy DNA very quickly",
            "are found in all living organisms",
            "produce large amounts of oxygen",
          ],
          "Bazı ekstremofillerin enzimleri yüksek sıcaklıklarda kararlı kaldığı için biyoteknolojide yararlıdır.",
        ],
        [
          "Astrobiologists are interested in extremophiles because ----.",
          [
            "they suggest life could exist in harsh places beyond Earth",
            "they were brought to Earth from other planets",
            "they can survive in outer space without protection",
            "they are the oldest organisms in the solar system",
            "they prove that there is no life on Mars",
          ],
          "Ekstremofiller, yaşamın güneş sisteminin başka yerlerindeki zorlu ortamlarda da var olabileceğini düşündürür.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1928, Alexander Fleming returned from holiday to find that mould had contaminated one of his bacterial cultures. ---- This accidental observation led to the discovery of penicillin, the first widely used antibiotic.",
      [
        "He noticed that the bacteria surrounding the mould had been killed.",
        "Fleming was born on a farm in Scotland in the year 1881.",
        "Many scientists in that period took long summer holidays abroad.",
        "Mould often grows on bread that has been kept for too long.",
        "Laboratories at that time had far fewer safety rules than today.",
      ],
      "'This accidental observation' ifadesi öncesinde bir gözlemi gerektirir: küfün çevresindeki bakterilerin ölmüş olması.",
    ],
    [
      "Many desert plants have extremely long roots. ---- In this way, they can survive long periods without rain.",
      [
        "These roots can reach water stored deep below the surface.",
        "Deserts cover about one-fifth of the Earth's land surface today.",
        "Some desert plants produce brightly coloured flowers after rain.",
        "Many people keep cactuses as houseplants in their homes.",
        "Desert temperatures can fall sharply during the night.",
      ],
      "'In this way' öncesinde bitkilerin yağmursuz dönemlerde nasıl hayatta kaldığını açıklayan bir yöntem gerekir: köklerin derindeki suya ulaşması.",
    ],
    [
      "---- For instance, the bar-tailed godwit can fly more than eleven thousand kilometres from Alaska to New Zealand without stopping.",
      [
        "Some migratory birds are capable of astonishing non-stop journeys.",
        "Alaska is the largest state in the United States by area.",
        "Many birds build their nests in trees or on cliffs.",
        "New Zealand is home to several species of flightless birds.",
        "Birdwatching is a popular hobby in many parts of the world.",
      ],
      "'For instance' ile verilen örnek, bazı göçmen kuşların inanılmaz kesintisiz yolculuklar yapabildiğini söyleyen bir genelleme gerektirir.",
    ],
    [
      "Electric buses are being introduced in many cities around the world. ---- Furthermore, they are much quieter than diesel buses, reducing noise pollution in busy streets.",
      [
        "They produce no exhaust emissions, which improves air quality.",
        "Buses were first used for public transport in the nineteenth century.",
        "Many people travel to work by bus or train every day.",
        "Some cities have special lanes reserved for buses and taxis.",
        "Bus drivers often work early in the morning or late at night.",
      ],
      "'Furthermore' ile ikinci bir yarar eklenir; boşlukta ilk yarar (egzoz salımı olmaması) yer almalıdır.",
    ],
    [
      "Insects make up the majority of known animal species. ---- As a result, scientists are concerned about recent reports of sharp declines in insect populations.",
      [
        "They play essential roles in pollination, decomposition and food chains.",
        "Some insects can lift many times their own body weight.",
        "Many people are afraid of spiders, although they are not insects.",
        "Butterflies are among the most popular insects with children.",
        "Insects have six legs and a body divided into three parts.",
      ],
      "'As a result' öncesinde böcek azalmasının neden kaygı verici olduğunu açıklayan bir neden gerekir: tozlaşma ve besin zincirlerindeki temel rolleri.",
    ],
    [
      "Some scientists have proposed sending large mirrors into space to reflect sunlight away from the Earth. ---- Critics, however, point out that such a project would be extremely expensive and difficult to control.",
      [
        "Supporters argue that this could help reduce global temperatures quickly.",
        "Mirrors were first made from polished metal thousands of years ago.",
        "Sunlight takes about eight minutes to travel from the Sun to the Earth.",
        "Many telescopes use large mirrors to collect light from distant stars.",
        "Space agencies have launched thousands of satellites into orbit.",
      ],
      "'Critics, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Earthquakes occur when stress builds up along faults in the Earth's crust.",
        "When the rocks suddenly slip, energy is released as seismic waves.",
        "Many families keep emergency supplies at home.",
        "The strength of an earthquake is measured on the moment magnitude scale.",
        "Most earthquakes take place near the boundaries of tectonic plates.",
      ],
      odd: 2,
      why: "Parça depremlerin nasıl oluştuğunu anlatır. Ailelerin evde acil durum malzemesi bulundurmasından söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Bats are the only mammals capable of true flight.",
        "Their wings are made of thin skin stretched between long finger bones.",
        "Many bats use echolocation to find their way in the dark.",
        "Some caves are popular with tourists.",
        "Bats play an important role in controlling insect populations.",
      ],
      odd: 3,
      why: "Parça yarasaları anlatır. Bazı mağaraların turistlerce sevildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Acid rain forms when sulphur dioxide and nitrogen oxides mix with water in the atmosphere.",
        "These gases are released mainly by burning coal and oil.",
        "Acid rain can damage forests, lakes and buildings.",
        "Strict regulations have greatly reduced the problem in many countries.",
        "Umbrellas were invented thousands of years ago.",
      ],
      odd: 4,
      why: "Parça asit yağmurunu anlatır. Şemsiyelerin icadından söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Glass is made by melting sand, soda ash and limestone at very high temperatures.",
        "Many restaurants serve drinks in glass bottles.",
        "When it cools, the material becomes hard but remains transparent.",
        "Glass can be recycled many times without losing its quality.",
        "Recycling glass also uses less energy than producing new glass from raw materials.",
      ],
      odd: 1,
      why: "Parça camın üretimini ve geri dönüşümünü anlatır. Restoranlarda cam şişelerle içecek servisinden söz eden II. cümle akışı bozar.",
    },
    {
      sentences: [
        "Volcanic eruptions can affect the global climate.",
        "Large eruptions release sulphur gases high into the atmosphere.",
        "These gases form tiny particles that reflect sunlight back into space.",
        "Some volcanic islands are famous for their black sand beaches.",
        "As a result, global temperatures can fall for one or two years after a major eruption.",
      ],
      odd: 3,
      why: "Parça volkanik patlamaların iklime etkisini anlatır. Siyah kumlu plajlardan söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Cuttlefish are able to change the colour and pattern of their skin in less than a second.",
        "They use special cells called chromatophores to do this.",
        "This ability helps them hide from predators and communicate with one another.",
        "Many restaurants serve seafood dishes.",
        "Remarkably, they appear to be colour-blind, and scientists are still unsure how they match their surroundings.",
      ],
      odd: 3,
      why: "Parça mürekkep balıklarının renk değiştirmesini anlatır. Restoranlardaki deniz ürünlerinden söz eden IV. cümle akışı bozar.",
    },
  ],
};
