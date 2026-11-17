import type { YokdilDeneme } from "./types";

export const FEN_61: YokdilDeneme = {
  no: 61,
  field: "fen",
  vocab: [
    [
      "The explosion blew out a wall panel, and the floors above it ---- one after another.",
      ["collapsed", "expanded", "recovered", "multiplied", "competed"],
      "Patlamanın bir duvar panelini dışarı fırlattığı ve üstündeki katların birbiri ardına 'çöktüğü' (collapsed) anlatılır.",
    ],
    [
      "Engineers found that repeated pressurisation had caused tiny cracks to ---- around the corners of the windows.",
      ["develop", "vanish", "relax", "celebrate", "apologise"],
      "Mühendislerin tekrarlanan basınçlandırmanın pencere köşelerinde küçük çatlakların 'oluşmasına' (develop) yol açtığını bulduğu anlatılır.",
    ],
    [
      "In very cold water, the steel became ---- and could crack suddenly like glass.",
      ["brittle", "flexible", "transparent", "magnetic", "elastic"],
      "Çok soğuk suda çeliğin 'kırılgan' (brittle) hâle geldiği ve cam gibi aniden çatlayabildiği anlatılır.",
    ],
    [
      "The error in the shape of the mirror was ---- small, about one fiftieth of the width of a human hair.",
      ["remarkably", "barely visible yet hugely", "easily", "loudly", "rarely"],
      "Aynanın biçimindeki hatanın 'dikkat çekici derecede' (remarkably) küçük, bir insan saçının genişliğinin ellide biri kadar olduğu anlatılır.",
    ],
    [
      "The crack grew for decades, and the bar ---- broke under the weight of the traffic.",
      ["eventually", "fortunately", "politely", "previously", "rarely"],
      "Çatlağın on yıllarca büyüdüğü ve çubuğun 'sonunda' (eventually) trafiğin ağırlığı altında kırıldığı anlatılır.",
    ],
    [
      "The owners ignored warnings that the tank was leaking and tried to ---- the problem by painting it brown.",
      ["cover up", "take after", "look up", "give in", "run into"],
      "Sahiplerin tankın sızdırdığı uyarılarını göz ardı edip sorunu tankı kahverengiye boyayarak 'örtbas etmeye' (cover up) çalıştığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the building was demolished, inspectors ---- many serious defects in its joints.",
      ["had found", "find", "have found", "will find", "are finding"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had found'.",
    ],
    [
      "If the windows had been rounder, the cracks ---- so quickly.",
      ["might not have formed", "will not form", "do not form", "had not formed", "would not form"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have formed'.",
    ],
    [
      "The fuselage ---- in a huge water tank thousands of times.",
      ["was pressurised", "pressurised", "has pressurised", "pressurises", "is pressurising"],
      "Gövde basınçlandırılmıştır; edilgen geçmiş zaman: 'was pressurised'.",
    ],
    [
      "---- the crack was hidden by other parts, inspectors could not see it.",
      ["Because", "Although", "Unless", "Whereas", "So that"],
      "Çatlağın diğer parçalarla gizlenmesi, müfettişlerin onu görememesinin nedenidir: 'Because'.",
    ],
    [
      "The scientist, ---- tests explained the cracking of the ships, worked at Cambridge.",
      ["whose", "who", "which", "whom", "where"],
      "Bilim insanının testleri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until the first images arrived ---- the engineers realise that the mirror was flawed.",
      ["did", "had", "were", "have", "do not"],
      "'Not until' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The tank stood in a busy neighbourhood, ---- thousands of people lived and worked.",
      ["where", "which", "when", "whose", "that"],
      "'a busy neighbourhood' yer bildirir; insanlar orada yaşıyordu: 'where'.",
    ],
    [
      "The colder the water became, ---- the steel was.",
      ["the more brittle", "the most brittle", "more brittle", "most brittle", "so brittle"],
      "'The colder ..., the more ...' paralel yapısı: 'the more brittle'.",
    ],
    [
      "After the disaster, the government required that all such buildings ---- strengthened.",
      ["be", "are", "were", "to be", "being"],
      "'require that' sonrası yalın fiil (subjunctive): 'be strengthened'.",
    ],
    [
      "The store is believed ---- the deadliest building collapse in the country's history.",
      ["to have been", "being", "to be being", "been", "having"],
      "Geçmişe ait durum için mastarın geçmiş biçimi: 'to have been'.",
    ],
    [
      "Astronauts installed corrective optics ---- the telescope could produce sharp images.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Düzeltici optiklerin takılmasının amacı teleskobun net görüntüler üretebilmesidir: 'so that'.",
    ],
    [
      "The managers had heavy air-conditioning units ---- across the roof.",
      ["moved", "move", "moving", "to move", "moves"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'moved'.",
    ],
    [
      "Had the engineers checked the computer model by hand, the platform ---- lost.",
      ["might not have been", "is not", "will not be", "had not been", "was not"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have been'.",
    ],
    [
      "Neither the owners nor the managers ---- to close the building.",
      ["agreed", "agreeing", "to agree", "has agreed to", "agree to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'agreed'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1960s, many British cities built tall blocks of flats quickly and cheaply using large concrete panels made in factories and assembled on site. Ronan Point, a 22-storey tower in east London, was one of them. It opened in March 1968, {1} only two months later, early on the morning of 16 May, a resident on the eighteenth floor lit a match to make a cup of tea. A faulty connection had allowed gas to leak into her kitchen, {2} the resulting explosion blew out one of the load-bearing panels in the outside wall. Without its support, the floors above fell onto the floors below, {3} the whole corner of the building collapsed to the ground. Four people were killed, although the woman who had lit the match survived. An inquiry found that the panels had been held together mainly by their own weight, {4} there was nothing to stop a local failure from spreading through the structure. The disaster led to changes in building regulations, which now require buildings to be designed so that damage to one part does not cause a 'disproportionate' collapse. Ronan Point was repaired and strengthened, {5} when it was finally demolished in 1986, investigators found that some joints had been filled with newspaper instead of concrete.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "because", "unless"],
          "Binanın açılması ile yalnızca iki ay sonra felaketin yaşanması beklentiye ters düşer: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Gaz sızması ve patlamanın paneli fırlatması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Katların düşmesi ve köşenin çökmesi birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["so", "but", "or", "unless", "although"],
          "Panellerin yalnızca ağırlıklarıyla tutulmasının sonucu yerel bir hasarın yayılabilmesidir: 'so'.",
        ],
        [
          "(25) ----",
          ["but", "and", "so", "because", "unless"],
          "Binanın güçlendirilmesi ile yıkıldığında derzlerde gazete bulunması zıttır: 'but'.",
        ],
      ],
    },
    {
      text:
        "The de Havilland Comet, which entered service in 1952, was the world's first jet airliner. It flew higher and faster than propeller aircraft, and its pressurised cabin allowed passengers to travel in comfort above the weather. In 1954, however, two Comets broke up in the air over the Mediterranean within a few months, {1} all the aircraft were grounded. Investigators recovered much of the wreckage of the first aircraft from the sea near the island of Elba, {2} they also carried out a remarkable experiment. A complete Comet fuselage was placed in a huge water tank, {3} water was pumped in and out to imitate the pressure changes of take-off and landing again and again. Using water rather than air meant that, when the fuselage failed, it would not explode. After the equivalent of about three thousand flights, a crack appeared at the corner of one of the openings in the roof, {4} it quickly spread. The investigators concluded that metal fatigue, the weakening of a material under repeated stress, had caused the disasters. The stresses were particularly high around the corners of the fairly square windows and openings, {5} later aircraft were designed with rounded windows, which spread the stress more evenly.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "İki uçağın parçalanması ve tüm uçakların yere indirilmesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Enkazı denizden çıkarmaları ve bir deney yapmaları birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Gövdenin tanka konması ve suyun pompalanması birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Çatlağın ortaya çıkması ve hızla yayılması birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["so", "but", "or", "unless", "although"],
          "Köşelerde gerilimin yüksek olmasının sonucu yuvarlak pencerelerin tasarlanmasıdır: 'so'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the building had opened only two months earlier, ----.",
      [
        "one of its corners collapsed after a gas explosion",
        "concrete is heavy",
        "London is a large city",
        "residents make tea",
        "the panels had been made in factories and assembled quickly on the site",
      ],
      "'Although' zıtlık ister: bina yalnızca iki ay önce açılmış olsa da bir gaz patlamasından sonra köşelerinden biri çöktü.",
    ],
    [
      "If the investigators had used air instead of water, ----.",
      [
        "the fuselage might have exploded when it failed",
        "air is invisible",
        "aircraft fly high",
        "tanks hold water",
        "they would have recovered the wreckage from the sea near the island of Elba",
      ],
      "Üçüncü tip koşul: araştırmacılar su yerine hava kullansaydı gövde çöktüğünde patlayabilirdi.",
    ],
    [
      "----, some of the welded ships split in two while they were still in harbour.",
      [
        "Because their steel became brittle in cold water",
        "Although ships float",
        "Unless the sea was calm",
        "Since harbours are busy",
        "While thousands of them were being built quickly during the war",
      ],
      "Çelikleri soğuk suda kırılgan hâle geldiği için kaynaklı gemilerin bazıları daha limandayken ikiye bölündü.",
    ],
    [
      "The telescope's first images were blurred ----.",
      [
        "because its main mirror had been ground to the wrong shape",
        "although it was in space",
        "unless the stars were bright",
        "so that astronomers were pleased",
        "while astronauts were preparing to visit it with new instruments a few years later",
      ],
      "Teleskobun ilk görüntüleri ana aynası yanlış biçimde taşlandığı için bulanıktı.",
    ],
    [
      "Since each link of the chain consisted of only two bars, ----.",
      [
        "the failure of one bar brought down the whole bridge",
        "chains are made of metal",
        "rivers are wide",
        "bridges carry traffic",
        "the bridge had been opened to traffic across the Ohio River in 1928",
      ],
      "'Since' neden bildirir: zincirin her halkası yalnızca iki çubuktan oluştuğu için tek bir çubuğun kırılması bütün köprüyü yıktı.",
    ],
    [
      "Not only did the tank leak, ----.",
      [
        "but it had also never been properly tested",
        "and molasses is sweet",
        "since tanks are large",
        "so people were happy",
        "unless the owners had painted it brown to hide the leaks from local residents",
      ],
      "'Not only ... but also' yapısı tamamlanır: tank yalnızca sızdırmakla kalmıyordu, aynı zamanda hiç düzgünce test edilmemişti.",
    ],
    [
      "Once the columns had been removed to make space for escalators, ----.",
      [
        "the remaining structure had to carry much greater loads",
        "escalators move people",
        "shops sell goods",
        "columns are made of concrete",
        "the building had originally been designed as an office block for a large company",
      ],
      "Yürüyen merdivenlere yer açmak için kolonlar kaldırılınca kalan yapı çok daha büyük yükler taşımak zorunda kaldı.",
    ],
    [
      "Unless buildings are designed to prevent progressive collapse, ----.",
      [
        "damage to a single part can bring down a much larger section",
        "buildings are tall",
        "engineers use computers",
        "gas is used for cooking",
        "the government would not have changed the regulations after the disaster in 1968",
      ],
      "'Unless' olumsuz koşul: binalar ilerleyen çöküşü önleyecek biçimde tasarlanmadıkça tek bir parçadaki hasar çok daha büyük bir bölümü yıkabilir.",
    ],
    [
      "The wave of molasses moved so fast ----.",
      [
        "that many people could not escape it",
        "although it was winter",
        "because molasses is brown",
        "unless the streets were wide",
        "while the company was trying to deny responsibility for the accident in court",
      ],
      "Pekmez dalgası o kadar hızlı ilerledi ki pek çok kişi ondan kaçamadı.",
    ],
    [
      "Even though the mirror's error was tiny, ----.",
      [
        "it seriously reduced the quality of the images",
        "mirrors reflect light",
        "space is dark",
        "telescopes are expensive",
        "the telescope had been launched into orbit around the Earth in April 1990",
      ],
      "'Even though' zıtlık ister: aynanın hatası çok küçük olsa da görüntülerin kalitesini ciddi biçimde düşürdü.",
    ],
    [
      "As the windows of later aircraft were rounded, ----.",
      [
        "the stress around them was spread more evenly",
        "windows let in light",
        "passengers like views",
        "aircraft are made of metal",
        "the investigators had carried out tests in a water tank for many months",
      ],
      "Sonraki uçakların pencereleri yuvarlak olduğu için çevrelerindeki gerilim daha eşit dağıldı.",
    ],
  ],
  enTr: [
    [
      "The panels had been held together mainly by their own weight.",
      [
        "Paneller esas olarak kendi ağırlıklarıyla bir arada tutulmuştu.",
        "Paneller esas olarak çelik bağlantılarla bir arada tutulmuştu.",
        "Kendi ağırlıklarıyla bir arada tutulan paneller hiçbir zaman çökmedi.",
        "Ağırlık panelleri bir arada tuttu.",
        "Binada hiç panel yoktu.",
      ],
      "'The panels had been held together' 'paneller bir arada tutulmuştu', 'mainly by their own weight' 'esas olarak kendi ağırlıklarıyla' karşılığıdır.",
    ],
    [
      "Water was pumped in and out of the fuselage thousands of times.",
      [
        "Gövdeye binlerce kez su pompalanıp boşaltıldı.",
        "Gövdeden binlerce litre yakıt boşaltıldı.",
        "Gövdeye su pompalanmadan önce binlerce test yapıldı.",
        "Gövde suyu binlerce kez pompaladı.",
        "Gövdeye hiç su konmadı.",
      ],
      "'Water was pumped in and out of the fuselage' 'gövdeye su pompalanıp boşaltıldı', 'thousands of times' 'binlerce kez' karşılığıdır.",
    ],
    [
      "One ship split in two while it was tied up in harbour.",
      [
        "Gemilerden biri limana bağlıyken ikiye bölündü.",
        "Gemilerden biri açık denizde iki gemiyle çarpıştı.",
        "Limana bağlı olan gemi, ikiye bölünmekten son anda kurtuldu.",
        "Liman gemiyi ikiye bağladı.",
        "Hiçbir gemi zarar görmedi.",
      ],
      "'One ship split in two' 'gemilerden biri ikiye bölündü', 'while it was tied up in harbour' 'limana bağlıyken' karşılığıdır.",
    ],
    [
      "Astronauts installed a set of small mirrors to correct the error.",
      [
        "Astronotlar hatayı düzeltmek için bir dizi küçük ayna yerleştirdi.",
        "Astronotlar hatayı düzeltmek için ana aynayı Dünya'ya getirdi.",
        "Küçük aynalar yerleştirilince hata daha da büyüdü.",
        "Aynalar astronotları düzeltti.",
        "Hiç hata yoktu.",
      ],
      "'Astronauts installed a set of small mirrors' 'astronotlar bir dizi küçük ayna yerleştirdi', 'to correct the error' 'hatayı düzeltmek için' karşılığıdır.",
    ],
    [
      "The wreckage was reassembled in a field near the river.",
      [
        "Enkaz, nehrin yakınındaki bir tarlada yeniden bir araya getirildi.",
        "Enkaz, nehrin dibinde olduğu gibi bırakıldı.",
        "Tarlada bir araya getirilen enkaz, nehre geri atıldı.",
        "Tarla enkazı nehrin yakınında topladı.",
        "Hiç enkaz yoktu.",
      ],
      "'The wreckage was reassembled' 'enkaz yeniden bir araya getirildi', 'in a field near the river' 'nehrin yakınındaki bir tarlada' karşılığıdır.",
    ],
    [
      "The building collapsed in less than twenty seconds.",
      [
        "Bina yirmi saniyeden kısa sürede çöktü.",
        "Bina yirmi yıldan uzun süre ayakta kaldı.",
        "Yirmi saniyede çöken bina hemen yeniden yapıldı.",
        "Yirmi saniye binayı çökertti.",
        "Bina hiç çökmedi.",
      ],
      "'The building collapsed' 'bina çöktü', 'in less than twenty seconds' 'yirmi saniyeden kısa sürede' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Felaket, yapı yönetmeliklerinde değişikliklere yol açtı.",
      [
        "The disaster led to changes in building regulations.",
        "The changes in building regulations led to the disaster.",
        "The disaster had no effect on building regulations.",
        "The regulations changed the disaster.",
        "There was no disaster.",
      ],
      "'Felaket yol açtı' 'the disaster led to', 'yapı yönetmeliklerinde değişikliklere' 'changes in building regulations' karşılığıdır.",
    ],
    [
      "Gerilim, kare biçimli pencerelerin köşelerinde özellikle yüksekti.",
      [
        "The stress was particularly high at the corners of the square windows.",
        "The windows were particularly high at the corners of the square stress.",
        "The stress was lowest at the corners of the square windows.",
        "The corners stressed the windows.",
        "There were no windows.",
      ],
      "'Gerilim özellikle yüksekti' 'the stress was particularly high', 'kare biçimli pencerelerin köşelerinde' 'at the corners of the square windows' karşılığıdır.",
    ],
    [
      "Çelik, belirli bir sıcaklığın altında kırılgan hâle gelir.",
      [
        "Steel becomes brittle below a certain temperature.",
        "Steel becomes stronger above a certain pressure.",
        "Steel never changes, whatever the temperature.",
        "Temperature becomes brittle below steel.",
        "Steel cannot be heated.",
      ],
      "'Çelik kırılgan hâle gelir' 'steel becomes brittle', 'belirli bir sıcaklığın altında' 'below a certain temperature' karşılığıdır.",
    ],
    [
      "Ayna, kenarlarında birkaç mikrometre fazla düz taşlanmıştı.",
      [
        "The mirror had been ground a few micrometres too flat at its edges.",
        "The edges of the mirror had been painted a few colours too bright.",
        "The mirror had been made several metres too large.",
        "The micrometres ground the mirror.",
        "The mirror had no edges.",
      ],
      "'Ayna taşlanmıştı' 'the mirror had been ground', 'kenarlarında birkaç mikrometre fazla düz' 'a few micrometres too flat at its edges' karşılığıdır.",
    ],
    [
      "Trafik yükleri, köprü inşa edildiğinden beri büyük ölçüde artmıştı.",
      [
        "Traffic loads had increased greatly since the bridge was built.",
        "The bridge had been built to reduce traffic loads greatly.",
        "Traffic loads had fallen sharply since the bridge was built.",
        "The bridge increased the traffic.",
        "There was no traffic.",
      ],
      "'Trafik yükleri büyük ölçüde artmıştı' 'traffic loads had increased greatly', 'köprü inşa edildiğinden beri' 'since the bridge was built' karşılığıdır.",
    ],
    [
      "Yöneticiler, çatlaklar görülmesine rağmen mağazayı kapatmadı.",
      [
        "The managers did not close the store even though cracks had been seen.",
        "The cracks closed the store even though the managers had not seen them.",
        "The managers closed the store as soon as the first crack appeared.",
        "The store did not close the managers.",
        "There were no cracks.",
      ],
      "'Yöneticiler mağazayı kapatmadı' 'the managers did not close the store', 'çatlaklar görülmesine rağmen' 'even though cracks had been seen' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "During the Second World War, American shipyards built more than 2,700 cargo vessels known as Liberty ships to carry supplies across the Atlantic and Pacific. To build them quickly, the shipyards replaced the traditional method of joining steel plates with rivets with welding, which was faster and needed less skilled labour. At their peak, some yards could complete a ship in a few days. However, a number of the ships developed serious cracks, and several broke completely in two. In one famous case in January 1943, the tanker Schenectady, which had been finished only days before, split apart with a loud bang while it was tied up in calm water in harbour. Investigators at first blamed poor welding, and that was partly true, but the full explanation was found by Constance Tipper, a metallurgist at the University of Cambridge. She showed that the type of steel used in the ships had a temperature below which it changed from being tough and able to bend to being brittle, so that it could crack suddenly, like glass. Many of the failures occurred in the cold waters of the North Atlantic. Because the welded hulls were made of one continuous piece, a crack that started at a weak point, such as a square hatch corner, could run right around the ship, whereas in a riveted hull it would usually stop at the edge of a plate. Tipper developed a simple test to measure this behaviour, which is still known by her name, and her work helped to establish the importance of choosing steels that remain tough at low temperatures.",
      questions: [
        [
          "According to the passage, welding was used instead of rivets because it ----.",
          [
            "was faster and needed less skilled workers",
            "produced stronger ships",
            "was cheaper to repair",
            "allowed ships to sail through the coldest waters without cracking",
            "used less steel",
          ],
          "Metne göre kaynak daha hızlıydı ve daha az kalifiye işçi gerektiriyordu.",
        ],
        [
          "The writer mentions the Schenectady to show that ----.",
          [
            "ships could fail even in calm conditions",
            "riveted ships were dangerous",
            "the war was difficult",
            "tankers carried oil",
            "Tipper worked in a harbour",
          ],
          "Sakin suda limana bağlıyken bile ikiye bölünebildiklerini gösterir.",
        ],
        [
          "It can be understood from the passage that cracks spread further in welded hulls because ----.",
          [
            "the hull was one continuous piece of metal",
            "welds were too strong",
            "the steel was too warm",
            "the plates were riveted",
            "the ships were too small",
          ],
          "Kaynaklı gövde tek parça olduğu için çatlak gemiyi dolaşabiliyordu; perçinli gövdede ise levha kenarında dururdu.",
        ],
      ],
    },
    {
      text:
        "The Hubble Space Telescope was launched in April 1990 with great expectations. Above the atmosphere, which blurs the light of stars, it was supposed to produce images far sharper than any telescope on the ground. Within weeks, however, astronomers realised that something was wrong: the images were fuzzy. Investigators discovered that the telescope's 2.4-metre main mirror had been ground to the wrong shape. Near its edges, it was too flat by about two micrometres, roughly one fiftieth of the thickness of a human hair. This tiny error caused light from the edge of the mirror to come to a focus at a different point from light from the centre, an effect known as spherical aberration. The cause was traced to an instrument that had been used to check the mirror's shape while it was being polished. One of its lenses had been positioned slightly more than a millimetre out of place. Other tests had in fact suggested a problem, but they had been dismissed as less reliable. The mistake was a serious embarrassment for NASA. Because the error was known so precisely, however, it could be corrected, rather like fitting a pair of glasses. In December 1993, astronauts on a space shuttle visited the telescope and installed a new camera with built-in correction and a device containing small mirrors that corrected the light for the other instruments. The repair was a complete success, and Hubble went on to make many of the most important astronomical discoveries of the following decades.",
      questions: [
        [
          "According to the passage, the images were blurred because ----.",
          [
            "the mirror was slightly the wrong shape",
            "the atmosphere blurred the light",
            "the camera was broken",
            "the mirror was too small to collect enough light from distant stars",
            "the telescope was in the wrong orbit",
          ],
          "Metne göre ana ayna yanlış biçimde taşlanmıştı; kenarlarında fazla düzdü.",
        ],
        [
          "The writer compares the repair to fitting a pair of glasses because ----.",
          [
            "a precisely known error could be corrected with extra optics",
            "astronauts wear glasses",
            "the mirror was replaced",
            "the telescope was brought back to Earth",
            "glasses are cheap",
          ],
          "Hata kesin olarak bilindiğinden ek optiklerle düzeltilebilirdi.",
        ],
        [
          "It can be understood from the passage that warnings about the problem ----.",
          [
            "had been ignored before launch",
            "did not exist",
            "were made by astronauts",
            "came after the repair",
            "caused the launch to be delayed",
          ],
          "Diğer testler bir sorun olduğunu göstermişti, ama daha az güvenilir sayılıp göz ardı edilmişti.",
        ],
      ],
    },
    {
      text:
        "The Silver Bridge, which carried a road across the Ohio River between the town of Point Pleasant in West Virginia and the state of Ohio, opened in 1928. It was a suspension bridge of an unusual type: instead of being hung from cables made of thousands of wires, its deck was supported by two chains made of long steel bars, called eyebars, joined end to end by pins, rather like the links of a bicycle chain. Each link consisted of only two bars side by side. On 15 December 1967, during the evening rush hour, the bridge was crowded with slow-moving traffic when it suddenly collapsed into the icy river within about a minute. Forty-six people were killed. Investigators recovered the wreckage and reassembled it in a field. They found that the failure had begun with a crack only about three millimetres deep in one eyebar, near the hole for its pin. The crack had grown slowly over decades as a result of corrosion and the repeated stress of traffic, until the bar finally broke. Because each link had only two bars, the remaining bar could not carry the load on its own, and the failure of a single component brought down the whole bridge. The crack had been impossible to see during routine inspections, because it was hidden by the parts around it. Traffic loads had also increased greatly since the 1920s, when cars and lorries were much lighter. The disaster led the United States to introduce national standards requiring regular, detailed inspections of bridges.",
      questions: [
        [
          "According to the passage, the bridge was unusual because its deck ----.",
          [
            "hung from chains of linked steel bars",
            "was made of wood",
            "floated on the river",
            "was supported by cables made of thousands of thin wires",
            "had no supports",
          ],
          "Metne göre güverte, pimlerle birbirine bağlanmış uzun çelik çubuklardan oluşan zincirlere asılıydı.",
        ],
        [
          "The collapse began with ----.",
          [
            "a small crack in one of the bars",
            "an explosion",
            "a flood",
            "an accident between two lorries",
            "a fire",
          ],
          "Çöküş bir göz çubuğundaki yalnızca yaklaşık üç milimetre derinliğindeki bir çatlakla başladı.",
        ],
        [
          "It can be understood from the passage that the bridge's design was dangerous because ----.",
          [
            "the failure of a single part could bring down the whole structure",
            "it used too many bars",
            "it was inspected too often",
            "it was too short",
            "it was painted silver",
          ],
          "Her halkada yalnızca iki çubuk olduğundan tek bir parçanın çökmesi bütün köprüyü yıktı.",
        ],
      ],
    },
    {
      text:
        "On 15 January 1919, an unusually warm winter day, a huge steel tank holding about 8.7 million litres of molasses burst in the North End of Boston, a crowded area of homes, workshops and docks. Molasses, a thick, sweet syrup made from sugar cane, was stored there before being turned into industrial alcohol. Witnesses heard a noise like a machine gun as the rivets popped out, and then a wave of dark, sticky liquid up to eight metres high swept through the streets at an estimated fifty kilometres an hour. It knocked buildings off their foundations, bent the steel supports of an elevated railway and trapped people and horses. Twenty-one people were killed and around 150 injured, and rescuers struggled for days to reach victims stuck in the syrup, which became thicker as the evening grew colder. The clean-up took weeks, and for years afterwards some residents said that they could smell molasses on hot days. The company that owned the tank claimed that it had been blown up by anarchists, but after a long court case, it was found responsible and ordered to pay compensation. Evidence showed that the tank had been built in a hurry, that its steel walls were too thin for its size, and that it had never been properly tested by filling it with water. It had leaked from the start, and the company had responded by painting it brown so that the leaks would be less visible. The disaster led to stricter rules in Massachusetts requiring engineers to approve the calculations for such structures.",
      questions: [
        [
          "According to the passage, the tank was in an area that ----.",
          [
            "was crowded with homes and workplaces",
            "was far from the city",
            "had no railway",
            "was used only for storing sugar cane before it was shipped abroad",
            "was empty in winter",
          ],
          "Metne göre evler, atölyeler ve rıhtımlarla dolu kalabalık bir bölgedeydi.",
        ],
        [
          "Rescue work became harder in the evening because ----.",
          [
            "the molasses thickened as it cooled",
            "it began to snow",
            "the railway collapsed",
            "anarchists attacked",
            "the tank exploded again",
          ],
          "Akşam soğudukça pekmez daha da koyulaştı.",
        ],
        [
          "It can be understood from the passage that the company ----.",
          [
            "had ignored clear signs of danger",
            "was blameless",
            "had tested the tank carefully",
            "was attacked by anarchists",
            "built the tank slowly",
          ],
          "Tank baştan sızdırıyordu; şirket sızıntıları gizlemek için tankı boyamıştı.",
        ],
      ],
    },
    {
      text:
        "On the evening of 29 June 1995, the Sampoong Department Store in Seoul, South Korea, collapsed in about twenty seconds while it was full of shoppers. More than five hundred people were killed and nearly a thousand injured, making it one of the deadliest building collapses in modern times outside of war or earthquakes. The building had been designed in the late 1980s as a four-storey office block. During construction, however, the owner decided to turn it into a department store. To make room for escalators, a number of columns were removed, and others were made thinner than originally planned. A fifth floor was added to house a restaurant area, where customers sat on the heated floor in the traditional Korean way, which required a heavy layer of concrete. The construction company refused to carry out these changes because it believed they were unsafe, so the owner used his own company to complete the work. Later, large air-conditioning units weighing many tonnes were dragged across the roof and placed in a new position, and the vibrations they produced caused cracks to appear. On the day of the collapse, the cracks widened rapidly, and engineers advised that the building be evacuated. The managers, however, refused to close the store, although they themselves left the building. The chairman of the company and several officials who had approved the changes in return for bribes were later sent to prison. The disaster led to stricter inspection of buildings across South Korea.",
      questions: [
        [
          "The passage states that the building was first planned ----.",
          [
            "as an office block",
            "as a department store",
            "with five floors",
            "with escalators and a restaurant on its top floor",
            "for a construction company",
          ],
          "Metne göre dört katlı bir ofis binası olarak tasarlanmıştı.",
        ],
        [
          "The writer mentions the air-conditioning units because ----.",
          [
            "moving them and their vibrations damaged the structure",
            "they cooled the restaurant",
            "they were stolen",
            "they caused a fire",
            "they were very old",
          ],
          "Çatıda sürüklenmeleri ve titreşimleri çatlaklara yol açtı.",
        ],
        [
          "It can be understood from the passage that the disaster was mainly caused by ----.",
          [
            "unsafe changes and the managers' failure to act on warnings",
            "an earthquake",
            "a war",
            "bad weather",
            "the shoppers",
          ],
          "Güvensiz değişiklikler ve yöneticilerin uyarılara rağmen binayı boşaltmaması felakete yol açtı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1545, the English warship Mary Rose sank in front of King Henry VIII during a battle with a French fleet. ---- In 1982, after years of work by divers, the remains of the hull were raised from the seabed and taken to a museum in Portsmouth.",
      [
        "Many historians believe that water poured in through its open gun ports as it turned sharply.",
        "Henry VIII had six wives.",
        "Warships carry many guns.",
        "Thousands of objects belonging to the crew were also recovered.",
        "France is close to England.",
      ],
      "Boşluk batışın nedenini açıklayan bir cümle gerektirir; boşluğa pek çok tarihçinin keskin bir dönüş sırasında açık top kapaklarından içeri su doluştuğuna inandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In January 1989, a fan blade broke in one engine of a British passenger jet shortly after take-off. ---- The aircraft lost power as it approached the airport and crashed beside a motorway, killing forty-seven people.",
      [
        "The pilots mistakenly shut down the other engine, which had been working normally.",
        "Motorways are often busy.",
        "Engines are very loud.",
        "The accident led to research into the safest position for passengers during a crash.",
        "Many people fly on holiday.",
      ],
      "Boşluk uçağın neden güç kaybettiğini açıklayan bir cümle gerektirir; boşluğa pilotların yanlışlıkla normal çalışan diğer motoru kapattığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1991, the huge concrete base of an oil platform called Sleipner A was being tested in a Norwegian fjord when it suddenly cracked, flooded and sank. ---- The engineers had also failed to notice the error because they did not check the results by simpler hand calculations.",
      [
        "Investigators found that a computer model used in its design had underestimated the forces on some of its walls by almost half.",
        "Norway has a long coastline.",
        "Fjords are very deep.",
        "A new base was built and the platform began producing gas in 1993.",
        "Concrete is made from cement.",
      ],
      "Boşluk batışın nedenini açıklayıp 'ayrıca' ile bağlanan bir cümle gerektirir; boşluğa tasarımda kullanılan bir bilgisayar modelinin bazı duvarlardaki kuvvetleri neredeyse yarı yarıya küçümsediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In October 1963, a huge landslide fell from the side of a mountain into the reservoir behind the Vajont Dam in northern Italy. ---- Remarkably, the dam itself was hardly damaged.",
      [
        "It created a wave that swept over the top of the dam and destroyed the villages in the valley below, killing about two thousand people.",
        "Italy has many mountains.",
        "Reservoirs store water.",
        "Geologists had warned that the mountain slope was unstable.",
        "Dams produce electricity.",
      ],
      "Boşluk 'baraj neredeyse hiç zarar görmedi' ifadesiyle karşıtlık kuran bir cümle gerektirir; boşluğa heyelanın barajın üstünden aşan ve vadideki köyleri yok eden bir dalga oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1974, a temporary pipe installed at a chemical plant in Flixborough, England, gave way. ---- The disaster led to new laws in Britain controlling sites that store large amounts of dangerous chemicals.",
      [
        "A cloud of flammable gas escaped and exploded, destroying the plant and killing twenty-eight workers.",
        "England has many factories.",
        "Pipes carry liquids.",
        "The pipe had been fitted without proper design calculations.",
        "Chemicals are used to make plastics.",
      ],
      "Boşluk felaketi anlatan bir cümle gerektirir; boşluğa yanıcı bir gaz bulutunun kaçıp patladığını, tesisi yıkıp yirmi sekiz işçiyi öldürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "Shortly before midnight on 12 March 1928, the St. Francis Dam in southern California collapsed, releasing a wall of water that killed more than four hundred people. ---- He accepted full responsibility at the inquiry, and his career never recovered.",
      [
        "Only hours earlier, the engineer who had designed it, William Mulholland, had inspected the dam and declared it safe.",
        "California has a dry climate.",
        "Dams are built across rivers.",
        "The rock on which one side of the dam stood was later found to be weak.",
        "Water flows downhill.",
      ],
      "Boşluk 'he' zamirinin göndereceği kişiyi tanıtan bir cümle gerektirir; boşluğa yalnızca birkaç saat önce barajı tasarlayan mühendis Mulholland'ın onu denetleyip güvenli ilan ettiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1966, a huge tip of coal waste slid down a hillside onto a village in Wales.",
        "It buried a school, killing 116 children and 28 adults.",
        "Heavy rain had soaked the waste, turning it into a moving slurry.",
        "Wales is famous for its singing.",
        "An inquiry blamed the national coal board for ignoring warnings.",
      ],
      odd: 3,
      why: "Parça Galler'deki maden atığı felaketini anlatır. Galler'in şarkı söyleme geleneğiyle ünlü olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1889, a poorly maintained dam above the town of Johnstown in the United States failed.",
        "The dam had been owned by a club for wealthy holidaymakers.",
        "Pennsylvania has many forests.",
        "The resulting flood killed more than two thousand people.",
        "Victims were unable to win compensation from the club's members.",
      ],
      odd: 2,
      why: "Parça Johnstown baraj felaketini anlatır. Pensilvanya'nın pek çok ormanı olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1947, a ship loaded with fertiliser caught fire in a harbour in Texas.",
        "The fertiliser exploded, destroying much of the port.",
        "Fires spread to nearby chemical plants.",
        "More than five hundred people died.",
        "Farmers use fertiliser to grow crops.",
      ],
      odd: 4,
      why: "Parça Teksas'taki gübre gemisi patlamasını anlatır. Çiftçilerin ürün yetiştirmek için gübre kullandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1988, an oil platform in the North Sea was destroyed by explosions and fire.",
        "Gas leaked from a pipe whose safety valve had been removed for maintenance.",
        "One hundred and sixty-seven men were killed.",
        "The North Sea is often rough.",
        "The disaster changed the way safety is managed in the offshore oil industry.",
      ],
      odd: 3,
      why: "Parça Kuzey Denizi'ndeki petrol platformu felaketini anlatır. Kuzey Denizi'nin çoğunlukla dalgalı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1975, a typhoon brought extreme rainfall to central China.",
        "The Banqiao Dam and dozens of smaller dams failed one after another.",
        "Many tourists visit China every year.",
        "The floods killed tens of thousands of people.",
        "Details of the disaster were kept secret for many years.",
      ],
      odd: 2,
      why: "Parça Çin'deki Banqiao barajı felaketini anlatır. Her yıl pek çok turistin Çin'i ziyaret ettiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Malpasset Dam in southern France was a thin concrete arch.",
        "In 1959, the rock on one side of it moved, and the dam burst.",
        "The water destroyed part of the town of Fréjus.",
        "More than four hundred people were killed.",
        "The south of France is popular with artists.",
      ],
      odd: 4,
      why: "Parça Malpasset barajının yıkılmasını anlatır. Güney Fransa'nın sanatçılar arasında popüler olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
