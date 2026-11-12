import type { YokdilDeneme } from "./types";

export const FEN_20: YokdilDeneme = {
  no: 20,
  field: "fen",
  vocab: [
    [
      "As more people walked across the bridge, they began to ---- their steps with its movement, making the swaying even worse.",
      ["synchronise", "measure", "hide", "reverse", "slow"],
      "Köprüde yürüyenlerin adımlarını köprünün hareketiyle 'eşzamanlı hâle getirmeye' (synchronise) başladığı ve sallanmanın daha da kötüleştiği anlatılır.",
    ],
    [
      "Maglev trains do not touch the track, so there is almost no ---- to slow them down.",
      ["friction", "fuel", "noise", "light", "steel"],
      "Maglev trenlerinin raya değmediği için onları yavaşlatacak neredeyse hiç 'sürtünme' (friction) olmadığı anlatılır.",
    ],
    [
      "The wreck lay at a depth of almost four kilometres, far too deep for divers to ----.",
      ["reach", "build", "describe", "remember", "ignore"],
      "Enkazın dalgıçların 'ulaşamayacağı' (reach) kadar derin, yaklaşık dört kilometre derinlikte olduğu anlatılır.",
    ],
    [
      "Engineers say that maintaining a near-vacuum inside hundreds of kilometres of tube would be extremely ----.",
      ["costly", "simple", "quiet", "popular", "natural"],
      "Yüzlerce kilometrelik tüpün içinde neredeyse vakum koşulunu korumanın son derece 'maliyetli' (costly) olacağı anlatılır.",
    ],
    [
      "Supporters of wooden buildings point out that trees ---- carbon from the atmosphere as they grow.",
      ["absorb", "release", "invent", "measure", "burn"],
      "Ahşap bina destekçilerinin ağaçların büyürken atmosferden karbon 'emdiğini' (absorb) vurguladığı anlatılır.",
    ],
    [
      "The barrier's gates can be raised within an hour to ---- a dangerous surge of seawater.",
      ["hold back", "give off", "take after", "look into", "set out"],
      "Bariyerin kapaklarının tehlikeli bir deniz suyu kabarmasını 'durdurmak/geri tutmak' (hold back) için bir saat içinde kaldırılabildiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "The bridge ---- only two days after it opened because it swayed so much.",
      ["was closed", "closed", "has closed", "was closing", "had closed"],
      "Köprü kapatılan bir yapıdır ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was closed'.",
    ],
    [
      "If the Titanic had carried enough lifeboats, many more passengers ----.",
      ["might have survived", "might survive", "will survive", "survived", "had survived"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time the barrier was completed in 1982, engineers ---- on its design for more than a decade.",
      ["had been working", "have been working", "work", "will be working", "were worked"],
      "Bariyerin tamamlanmasından (geçmiş) önce uzun süredir devam eden eylem: Past Perfect Continuous 'had been working'.",
    ],
    [
      "Ballard, ---- team found the wreck in 1985, was also searching for lost submarines.",
      ["whose", "who", "which", "whom", "where"],
      "Ekip Ballard'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after dampers had been installed ---- the bridge considered safe to reopen.",
      ["was", "did", "had", "has", "it was"],
      "'Only after' ile başlayan cümlede ana cümle devrik olur; edilgen 'was the bridge considered' yapısında 'was' gelir.",
    ],
    [
      "The train travels so fast ---- the journey of thirty kilometres takes only about seven minutes.",
      ["that", "which", "as", "such", "than"],
      "'so fast that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- wood burns, specially treated timber can resist fire better than many people expect.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Ahşabın yanması ile özel işlenmiş kerestenin yangına beklenenden iyi dayanması zıttır: 'Although'.",
    ],
    [
      "Residents ---- homes lie on low ground near the river are protected by the barrier.",
      ["whose", "who", "which", "whom", "where"],
      "Evler sakinlere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Fessenden is said ---- a device that could detect icebergs using sound.",
      ["to have built", "to build", "building", "to be building", "to have been built"],
      "Fessenden cihazı yapan taraftır (etken) ve olay geçmişte kalmıştır: 'be said to have + V3'.",
    ],
    [
      "The tube would be sealed ---- most of the air would be pumped out.",
      ["and", "but", "or", "unless", "so that"],
      "İki işlem birbirine eklenir: 'and'.",
    ],
    [
      "Photographs ---- by the underwater cameras showed the ship's bow standing upright.",
      ["taken", "taking", "which took", "to take", "have taken"],
      "Fotoğraflar çekilen şeylerdir; edilgen anlamlı geçmiş ortaç 'taken' gerekir.",
    ],
    [
      "Engineers added shock absorbers beneath the deck ---- it would no longer sway when crowded.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The train seems to glide above the track as if it ---- floating on air.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı bir benzetme yapılır: 'were'.",
    ],
    [
      "The more often the barrier is closed, ---- the risk of flooding appears to be.",
      ["the greater", "greater", "the greatest", "more great", "the more great"],
      "'The more often …, the greater …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "The Millennium Bridge, a footbridge across the River Thames in London, opened in June 2000 to great excitement. On the first day, tens of thousands of people crossed it, {1} it soon began to sway from side to side. The movement was strong enough to make some people hold on to the railings, and the bridge was closed after only two days. Engineers discovered that the problem was caused by the pedestrians themselves. When people walk, they push slightly sideways with each step. When the bridge began to move a little, walkers instinctively adjusted their steps to keep their balance, {2} they began to walk in time with the bridge's movement. This pushed the bridge further in the same direction, {3} made the swaying worse and caused even more people to fall into step. The effect had rarely been observed before, {4} it had not been considered in the design. To solve the problem, engineers installed dozens of dampers, devices that absorb movement, beneath the deck. The bridge reopened in 2002 and has been stable ever since, {5} it is still affectionately known to Londoners as the 'Wobbly Bridge'.",
      blanks: [
        [
          "(21) ----",
          ["but", "because", "so", "unless", "since"],
          "Binlerce kişinin köprüden geçmesi ile köprünün sallanmaya başlaması karşıtlıktır: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "whereas"],
          "Adımlarını ayarlamaları ve köprüyle aynı tempoda yürümeye başlamaları birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["which", "who", "that", "what", "where"],
          "Boşluk virgülden sonra önceki cümlenin tamamını niteler: 'which'.",
        ],
        [
          "(24) ----",
          ["so", "although", "unless", "whereas", "or"],
          "Etkinin daha önce nadiren gözlemlenmesinin sonucu tasarımda dikkate alınmamasıdır: 'so'.",
        ],
        [
          "(25) ----",
          ["although", "because", "so that", "unless", "since"],
          "Köprünün sağlam olması ile hâlâ 'Sallanan Köprü' diye anılması zıttır: 'although'.",
        ],
      ],
    },
    {
      text:
        "Magnetic levitation, or maglev, trains do not run on wheels. Instead, powerful magnets lift the train a few centimetres above a special track, {1} other magnets pull and push it forward. Because the train does not touch the track, there is almost no friction, which allows it to reach very high speeds {2} producing much less noise and vibration than an ordinary train. The world's first commercial high-speed maglev line opened in Shanghai in 2004, linking the airport with the city. It reaches speeds of more than four hundred kilometres per hour, covering a distance of about thirty kilometres in around seven minutes. Japan has also tested maglev trains {3} have reached more than six hundred kilometres per hour, and a line between Tokyo and Nagoya is under construction. {4} these advantages, maglev technology has spread slowly. The tracks are extremely expensive to build, and they cannot be connected to existing railway networks, {5} trains cannot easily continue their journeys on ordinary lines.",
      blanks: [
        [
          "(26) ----",
          ["while", "because", "unless", "so that", "since"],
          "Mıknatısların treni kaldırması ile diğer mıknatısların onu ileri itmesi eşzamanlı iki eylemdir: 'while'.",
        ],
        [
          "(27) ----",
          ["while", "unless", "because", "until", "so that"],
          "Yüksek hıza ulaşması ile çok daha az gürültü üretmesi aynı anda gerçekleşir: 'while + V-ing'.",
        ],
        [
          "(28) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'maglev trains' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(29) ----",
          ["Despite", "Because of", "Thanks to", "As a result of", "Owing to"],
          "Avantajlara 'rağmen' teknolojinin yavaş yayılması karşıtlıktır: 'Despite'.",
        ],
        [
          "(30) ----",
          ["so", "although", "unless", "whereas", "or"],
          "Rayların mevcut ağlara bağlanamamasının sonucu trenlerin normal hatlarda yolculuğa devam edememesidir: 'so'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although many people had searched for the Titanic, ----.",
      [
        "it was not found until more than seventy years after it sank",
        "it sank after hitting an iceberg in April 1912",
        "it was the largest ship in the world at the time",
        "more than fifteen hundred people died in the disaster",
        "it was travelling from Southampton to New York",
      ],
      "'Although' zıtlık ister: pek çok kişi Titanik'i aramış olsa da batışından yetmiş yılı aşkın süre sonrasına kadar bulunamadı.",
    ],
    [
      "If a hyperloop line were built, ----.",
      [
        "passengers could travel between distant cities in minutes",
        "the tube had been very long",
        "most trains will be slower",
        "the air was pumped out",
        "engineers designed the capsules",
      ],
      "Type 2 koşul cümlesi ana cümlede 'could + yalın fiil' ister: yolcular uzak kentler arasında dakikalar içinde seyahat edebilirdi.",
    ],
    [
      "The Thames Barrier was built ----.",
      [
        "to protect London from flooding by storm surges",
        "because the river had dried up completely",
        "so that ships could no longer reach the city",
        "although London had never been flooded",
        "unless the government paid for it",
      ],
      "Thames Bariyeri'nin fırtına kabarmalarının yol açtığı sellerden Londra'yı korumak amacıyla yapıldığı anlatılır.",
    ],
    [
      "Since the first tall timber buildings were completed, ----.",
      [
        "architects in many countries have begun to design similar projects",
        "most buildings had been made of concrete",
        "the forests would have disappeared",
        "wood will become more expensive",
        "few people lived in cities",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have begun'.",
    ],
    [
      "Unless the barrier is raised in time, ----.",
      [
        "parts of the city may be flooded",
        "the river would have frozen",
        "most ships had left the port",
        "the gates will be painted",
        "the tide was very low",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: kentin bazı bölümleri sular altında kalabilir.",
    ],
    [
      "The echoes from the iceberg were so clear ----.",
      [
        "that Fessenden could estimate its distance",
        "because sound travels well through water",
        "although the iceberg was several kilometres away",
        "while the ship was moving slowly",
        "unless the sea was rough",
      ],
      "'so clear that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Engineers have found that when timber is made into thick layered panels, ----.",
      [
        "it becomes strong enough to support tall buildings",
        "the trees would have grown faster",
        "most forests had been cut down",
        "the panels will catch fire",
        "the wood was very wet",
      ],
      "'when' ile genel bir bulgu anlatılır: kereste kalın katmanlı panellere dönüştürüldüğünde yüksek binaları taşıyacak kadar güçlenir.",
    ],
    [
      "So deep did the Titanic lie ----.",
      [
        "that special robotic cameras were needed to photograph it",
        "because it sank in the middle of the Atlantic Ocean",
        "although it had broken into two pieces",
        "while the search took many years",
        "unless the water was very clear",
      ],
      "Devrik 'So deep did … lie that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While supporters of the hyperloop say it could transform travel, ----.",
      [
        "critics doubt that it can be built safely and affordably",
        "trains have been used for almost two hundred years",
        "many cities suffer from traffic congestion",
        "aircraft produce large amounts of carbon dioxide",
        "the idea was first suggested more than a century ago",
      ],
      "'While' iki görüşü karşılaştırır: destekçiler yolculuğu dönüştürebileceğini söylerken eleştirmenler güvenli ve uygun maliyetle yapılabileceğinden şüphe eder.",
    ],
    [
      "Once the dampers had been fitted, ----.",
      [
        "the bridge no longer swayed when crowded",
        "the engineers will test it again",
        "the bridge would have collapsed",
        "people walk across bridges every day",
        "most visitors had gone home",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: köprü kalabalıkken artık sallanmadı.",
    ],
    [
      "No sooner had the bridge opened ----.",
      [
        "than it began to sway",
        "when the engineers had designed it",
        "that it will be closed",
        "before it had been built",
        "so people crossed it",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The swaying was caused by the people walking across the bridge.",
      [
        "Sallanmaya, köprünün üzerinden yürüyen insanlar neden oluyordu.",
        "Köprünün üzerinden yürüyen insanlar, sallanma nedeniyle düştü.",
        "Sallanma, köprünün altından geçen gemilerden kaynaklanıyordu.",
        "Köprü sallandığı için insanların üzerinden yürümesi yasaklandı.",
        "İnsanlar köprünün sallanmasını tamamen önledi.",
      ],
      "'The swaying was caused by' 'sallanmaya … neden oluyordu', 'the people walking across the bridge' 'köprünün üzerinden yürüyen insanlar' demektir.",
    ],
    [
      "Because the train does not touch the track, it produces very little noise.",
      [
        "Tren raya değmediği için çok az gürültü üretir.",
        "Tren raya sürekli değdiği için çok gürültülüdür.",
        "Ray, trenin çok az gürültü üretmesini engeller.",
        "Tren gürültü üretmediği için raya değmez.",
        "Trenin gürültüsü, raya değip değmemesinden etkilenmez.",
      ],
      "'Because the train does not touch the track' 'tren raya değmediği için', 'it produces very little noise' 'çok az gürültü üretir' demektir.",
    ],
    [
      "The wreck was located using a remotely operated underwater vehicle.",
      [
        "Enkaz, uzaktan kumandalı bir su altı aracı kullanılarak bulundu.",
        "Enkaz, dalgıçlar tarafından elle aranarak bulundu.",
        "Su altı aracı, enkazın yakınında kayboldu.",
        "Enkaz, su altı araçlarının kullanılmasını engelledi.",
        "Enkaz bulunamadığı için arama durduruldu.",
      ],
      "'was located' 'bulundu', 'using a remotely operated underwater vehicle' 'uzaktan kumandalı bir su altı aracı kullanılarak' demektir.",
    ],
    [
      "Passengers would travel in capsules through a tube from which most of the air had been removed.",
      [
        "Yolcular, havasının çoğu boşaltılmış bir tüpün içinde kapsüllerle seyahat edecekti.",
        "Yolcular, hava dolu bir tüpün içinde yürüyerek seyahat edecekti.",
        "Tüpün havası, yolcular kapsüllere bindikten sonra artırılacaktı.",
        "Yolcular, kapsüllerden çıkıp tüpün dışında seyahat edecekti.",
        "Tüp, yolcuları taşımak için değil hava depolamak için tasarlanmıştı.",
      ],
      "'would travel in capsules through a tube' 'bir tüpün içinde kapsüllerle seyahat edecekti', 'from which most of the air had been removed' 'havasının çoğu boşaltılmış' demektir.",
    ],
    [
      "Timber buildings can be constructed more quickly than concrete ones.",
      [
        "Ahşap binalar beton binalardan daha hızlı inşa edilebilir.",
        "Beton binalar ahşap binalardan çok daha hızlı inşa edilir.",
        "Ahşap binaların inşası beton binalardan çok daha uzun sürer.",
        "Ahşap ve beton binalar aynı sürede inşa edilir.",
        "Ahşap binalar beton olmadan inşa edilemez.",
      ],
      "'can be constructed more quickly than concrete ones' 'beton binalardan daha hızlı inşa edilebilir' demektir.",
    ],
    [
      "The barrier is now closed far more often than its designers expected.",
      [
        "Bariyer artık tasarımcılarının beklediğinden çok daha sık kapatılmaktadır.",
        "Bariyer artık tasarımcılarının beklediğinden çok daha az kapatılmaktadır.",
        "Tasarımcılar, bariyerin hiç kapatılmamasını bekliyordu.",
        "Bariyer, tasarımcıları tarafından tamamen kaldırılmıştır.",
        "Bariyerin ne sıklıkla kapatıldığı bilinmemektedir.",
      ],
      "'is now closed far more often' 'artık çok daha sık kapatılmaktadır', 'than its designers expected' 'tasarımcılarının beklediğinden' demektir.",
    ],
  ],
  trEn: [
    [
      "Köprü, yeniden açılmadan önce iki yıl kapalı kaldı.",
      [
        "The bridge remained closed for two years before it reopened.",
        "The bridge was open for two years before it closed.",
        "The bridge was built in two years.",
        "The bridge has never been closed.",
        "The bridge was closed for two days only.",
      ],
      "'yeniden açılmadan önce' 'before it reopened', 'iki yıl kapalı kaldı' 'remained closed for two years' karşılığıdır.",
    ],
    [
      "Maglev trenleri, mıknatıslar sayesinde rayın üzerinde havada durur.",
      [
        "Maglev trains float above the track thanks to magnets.",
        "Maglev trains run on wheels like ordinary trains.",
        "Magnets prevent maglev trains from moving.",
        "Maglev trains float on water rather than on a track.",
        "Maglev trains do not use magnets at all.",
      ],
      "'mıknatıslar sayesinde' 'thanks to magnets', 'rayın üzerinde havada durur' 'float above the track' karşılığıdır.",
    ],
    [
      "Titanik'in enkazı 1985 yılında Atlas Okyanusu'nun dibinde bulundu.",
      [
        "The wreck of the Titanic was found at the bottom of the Atlantic Ocean in 1985.",
        "The Titanic sank in the Atlantic Ocean in 1985.",
        "The wreck of the Titanic was raised to the surface in 1985.",
        "The Titanic was built at the bottom of the Atlantic Ocean.",
        "The wreck of the Titanic has never been found.",
      ],
      "'Titanik'in enkazı' 'the wreck of the Titanic', '1985 yılında … dibinde bulundu' 'was found at the bottom of … in 1985' karşılığıdır.",
    ],
    [
      "Hyperloop fikri birçok mühendislik sorunuyla karşı karşıyadır.",
      [
        "The hyperloop idea faces many engineering problems.",
        "The hyperloop idea has solved all engineering problems.",
        "Engineers have no interest in the hyperloop idea.",
        "The hyperloop has been in use for many years.",
        "Engineering problems were caused by the hyperloop.",
      ],
      "'birçok mühendislik sorunuyla karşı karşıyadır' 'faces many engineering problems' karşılığıdır.",
    ],
    [
      "Ahşap binalar, inşaat sektörünün karbon salımını azaltabilir.",
      [
        "Timber buildings could reduce the carbon emissions of the construction industry.",
        "Timber buildings increase the carbon emissions of the construction industry.",
        "The construction industry produces no carbon emissions.",
        "Carbon emissions make timber buildings stronger.",
        "Timber buildings are banned in the construction industry.",
      ],
      "'inşaat sektörünün karbon salımını azaltabilir' 'could reduce the carbon emissions of the construction industry' karşılığıdır.",
    ],
    [
      "Fessenden'in cihazı, sesi su altında iletmek için kullanılıyordu.",
      [
        "Fessenden's device was used to send sound underwater.",
        "Fessenden's device was used to stop sound travelling underwater.",
        "Sound was used to build Fessenden's device.",
        "Fessenden's device only worked on land.",
        "Fessenden's device was used to measure light.",
      ],
      "'sesi su altında iletmek için kullanılıyordu' 'was used to send sound underwater' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "When the Titanic sank in the North Atlantic in April 1912, after striking an iceberg on its first voyage, more than fifteen hundred people died. For decades afterwards, many expeditions searched for the wreck without success, partly because the ship's last reported position was inaccurate and partly because it lay almost four kilometres below the surface. In 1985, the American oceanographer Robert Ballard, working with a French team, finally located it using a remotely operated vehicle that carried video cameras and was towed close to the sea floor. It later emerged that Ballard's expedition had been funded by the United States Navy, on the condition that he first used the technology to examine the wrecks of two nuclear submarines that had sunk in the area. He had only a few days left when he began searching for the Titanic. Rather than looking for the hull itself, he searched for the long trail of debris that he expected the ship to have left as it sank, which was easier to find. The images revealed that the ship had broken into two main pieces, which lay about six hundred metres apart. Ballard later argued that the site should be treated as a memorial and left undisturbed.",
      questions: [
        [
          "According to the passage, the wreck was difficult to find partly because ----.",
          [
            "its last reported position was not accurate",
            "it had been moved by ocean currents",
            "divers were not allowed to search",
            "it lay in shallow water",
            "it had been covered by ice",
          ],
          "Metne göre geminin son bildirilen konumu yanlıştı ve enkaz yüzeyin yaklaşık dört kilometre altındaydı.",
        ],
        [
          "It can be understood from the passage that the Navy funded Ballard's expedition ----.",
          [
            "partly for its own military purposes",
            "because it wanted to raise the Titanic",
            "in order to build a memorial",
            "after the Titanic had been found",
            "to test a new kind of submarine",
          ],
          "Donanmanın Ballard'ın önce batmış iki nükleer denizaltının enkazını incelemesi koşuluyla finansman sağlaması, kısmen kendi askeri amaçları için olduğunu gösterir.",
        ],
        [
          "Ballard searched for the trail of debris because ----.",
          [
            "it covered a larger area and was easier to detect",
            "the hull had been destroyed completely",
            "it contained valuable objects",
            "it was closer to the surface",
            "the Navy asked him to",
          ],
          "Metinde geminin batarken bıraktığını tahmin ettiği uzun enkaz izinin bulunmasının daha kolay olduğu belirtilir.",
        ],
      ],
    },
    {
      text:
        "In 2013, the American entrepreneur Elon Musk published a proposal for a new form of transport called the hyperloop. Passengers would travel in capsules through a long tube from which most of the air had been removed. Because there would be very little air resistance, the capsules could reach speeds of more than a thousand kilometres per hour, making journeys between cities such as Los Angeles and San Francisco possible in around half an hour. The idea was not entirely new: engineers had proposed trains in vacuum tubes since the early twentieth century. Musk did not plan to build the system himself, but encouraged others to develop it, and several companies were soon founded and began testing short tracks. However, the hyperloop faces formidable challenges. Maintaining a near-vacuum over hundreds of kilometres of tube would be expensive and technically difficult, and any leak or crack could be dangerous. The tubes would have to be extremely straight, as even gentle curves at such speeds would be uncomfortable for passengers, and they would need to cope with earthquakes and changes in temperature. By the early 2020s, several of the companies had closed, and no passenger line had been built.",
      questions: [
        [
          "According to the passage, the hyperloop could reach very high speeds because ----.",
          [
            "there would be little air to slow the capsules down",
            "the capsules would be pulled by aircraft engines",
            "the tubes would be built underground",
            "it would use the same tracks as ordinary trains",
            "passengers would travel standing up",
          ],
          "Metne göre tüpteki havanın çoğu boşaltıldığı için hava direnci çok az olacak ve kapsüller çok yüksek hızlara ulaşabilecekti.",
        ],
        [
          "The writer mentions early twentieth-century proposals in order to show that ----.",
          [
            "the basic idea had existed for a long time",
            "Musk had copied another company's design",
            "vacuum tubes were already in use",
            "the hyperloop had been built before",
            "trains were faster in the past",
          ],
          "Mühendislerin yirminci yüzyılın başından beri vakum tüplerinde tren önermesi, temel fikrin uzun süredir var olduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that the hyperloop ----.",
          [
            "has so far not become a practical form of transport",
            "is now used between major American cities",
            "was abandoned before any tests were made",
            "was designed to carry goods rather than people",
            "has proved cheap and easy to build",
          ],
          "Bazı şirketlerin kapanması ve hiçbir yolcu hattının inşa edilmemesi, hyperloop'un şimdiye kadar pratik bir ulaşım biçimine dönüşmediğini gösterir.",
        ],
      ],
    },
    {
      text:
        "For more than a century, tall buildings have been made mainly of steel and concrete. Producing these materials, however, releases large amounts of carbon dioxide; cement production alone accounts for around eight per cent of global emissions. In recent years, architects have begun to design tall buildings using a new type of wood product known as mass timber. It is made by gluing together layers of wood, with the grain of each layer at right angles to the one below, to create thick panels and beams that are strong and stable. Supporters argue that timber buildings have several advantages. Trees absorb carbon dioxide as they grow, and much of this carbon remains stored in the wood. The panels can be made in factories and assembled quickly on site, reducing noise and construction time. They are also much lighter than concrete, so foundations can be smaller. A common concern is fire, but thick timber panels char on the outside, forming a protective layer that slows the burning of the wood inside. Critics warn, however, that the environmental benefits depend on forests being managed sustainably. Several timber buildings of more than twenty storeys have now been completed in Europe and North America.",
      questions: [
        [
          "According to the passage, one reason for interest in timber buildings is that ----.",
          [
            "making steel and concrete produces a lot of carbon dioxide",
            "wood is cheaper than every other material",
            "concrete buildings cannot be very tall",
            "timber does not burn at all",
            "steel is no longer available",
          ],
          "Metne göre bu malzemelerin üretimi büyük miktarda karbondioksit salar; yalnızca çimento üretimi küresel salımın yaklaşık yüzde sekizini oluşturur.",
        ],
        [
          "The writer explains that thick timber panels resist fire because ----.",
          [
            "their burnt outer layer protects the wood inside",
            "they are covered with steel",
            "they contain no glue",
            "they are made in factories",
            "they are lighter than concrete",
          ],
          "Metinde kalın kereste panellerin dışının kömürleşerek içerideki ahşabın yanmasını yavaşlatan koruyucu bir katman oluşturduğu belirtilir.",
        ],
        [
          "It can be understood from the passage that the environmental benefits of timber buildings ----.",
          [
            "depend on how the forests are managed",
            "are guaranteed in every case",
            "have been rejected by architects",
            "are greater for small houses only",
            "come mainly from smaller foundations",
          ],
          "Eleştirmenlerin çevresel yararların ormanların sürdürülebilir yönetilmesine bağlı olduğu uyarısı bu sonucu verir.",
        ],
      ],
    },
    {
      text:
        "London has a long history of flooding from the River Thames, particularly when strong winds and high tides combine to push a surge of seawater up the river from the North Sea. In 1953, a severe storm surge killed more than three hundred people in eastern England and showed how vulnerable the capital could be. After years of planning, the Thames Barrier was built across the river in east London and became operational in 1982. It consists of ten steel gates stretching across a width of about five hundred metres. Normally, the gates lie flat on the riverbed, allowing ships to pass over them. When a dangerous surge is forecast, they are rotated upwards to form a wall that holds back the sea. The barrier was originally designed to be closed two or three times a year, but it has been closed far more often, more than two hundred times by the early 2020s, partly because sea levels are rising. Engineers expect the barrier to provide adequate protection until around 2070, but because of climate change, planners are already considering what kind of defences London will need after that.",
      questions: [
        [
          "According to the passage, flooding in London is most likely when ----.",
          [
            "strong winds and high tides push seawater up the river",
            "the river freezes in winter",
            "ships block the river",
            "there is no rain for a long time",
            "the gates are left closed",
          ],
          "Metne göre güçlü rüzgârlar ve yüksek gelgitler birleşerek deniz suyunu nehirden yukarı ittiğinde sel olasılığı artar.",
        ],
        [
          "The writer mentions the storm of 1953 in order to show ----.",
          [
            "why a barrier was needed",
            "how the barrier was built",
            "when the barrier was first closed",
            "that London was never in danger",
            "how ships pass over the gates",
          ],
          "1953'teki fırtınanın başkentin ne kadar savunmasız olduğunu göstermesi, bir bariyere neden ihtiyaç duyulduğunu açıklar.",
        ],
        [
          "It can be inferred from the passage that the barrier ----.",
          [
            "will eventually need to be replaced or supplemented",
            "has never been closed",
            "is no longer used",
            "was built after 2070",
            "prevents ships from reaching London",
          ],
          "Mühendislerin bariyerin yaklaşık 2070'e kadar yeterli olacağını öngörmesi ve planlamacıların sonrası için savunmaları düşünmesi, ileride değiştirilmesi ya da desteklenmesi gerekeceğini gösterir.",
        ],
      ],
    },
    {
      text:
        "After the Titanic disaster in 1912, several inventors began to look for ways of detecting icebergs and other obstacles in the dark or in fog. One of them was the Canadian-born engineer Reginald Fessenden, who had already made important contributions to radio. Working for a company in Boston, he developed a device that could send a powerful sound signal through water and detect the echo that bounced back from objects. In 1914, he tested it off the coast of Newfoundland and was able to detect an iceberg about three kilometres away. By measuring the time it took for the echo to return, he could estimate how far away the iceberg was. The same device could also be used to send messages in Morse code between ships and submarines underwater. During the First World War, scientists in several countries worked on similar systems to detect enemy submarines, and the technology developed into what is now known as sonar. Today, sonar is used not only by navies but also by fishing boats to locate shoals of fish, by scientists to map the sea floor and by archaeologists to search for shipwrecks.",
      questions: [
        [
          "According to the passage, Fessenden's device worked by ----.",
          [
            "sending sound through water and detecting the echo",
            "shining a light on the surface of the sea",
            "using radio waves to locate icebergs",
            "measuring the temperature of the water",
            "listening to the sounds made by fish",
          ],
          "Metne göre cihaz suya güçlü bir ses sinyali gönderip nesnelerden geri yansıyan yankıyı algılayabiliyordu.",
        ],
        [
          "The writer mentions Morse code in order to show that the device ----.",
          [
            "could also be used for communication",
            "was developed by a radio company",
            "could only be used on land",
            "was used to find the Titanic",
            "did not work in the sea",
          ],
          "Aynı cihazın gemiler ve denizaltılar arasında Mors koduyla mesaj göndermek için de kullanılabilmesi, iletişim için de kullanılabildiğini gösterir.",
        ],
        [
          "It can be understood from the passage that sonar today ----.",
          [
            "has a wide range of military and civilian uses",
            "is used only to detect submarines",
            "has been replaced by radio",
            "was invented during the Second World War",
            "cannot detect objects on the sea floor",
          ],
          "Sonarın donanmaların yanı sıra balıkçı tekneleri, bilim insanları ve arkeologlarca kullanılması, geniş askeri ve sivil kullanım alanları olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Engineers sometimes use wind tunnels to test new designs for bridges and buildings. ---- In this way, they can discover whether strong winds might cause the structure to vibrate dangerously.",
      [
        "A small model of the structure is placed in a powerful stream of air.",
        "Some bridges are among the most famous landmarks in the world.",
        "Wind is caused by differences in air pressure.",
        "Many engineers study for several years before they qualify.",
        "Tall buildings often have restaurants on their top floors.",
      ],
      "Boşluktan sonra 'In this way' ile güçlü rüzgârların yapıyı tehlikeli biçimde titretip titretmeyeceğinin anlaşıldığı söylenir; boşluğa yapının küçük bir modelinin güçlü bir hava akımına yerleştirildiğini anlatan cümle gelmelidir.",
    ],
    [
      "Road tunnels must have powerful ventilation systems. ---- Large fans are therefore used to push fresh air in and draw polluted air out.",
      [
        "Without them, exhaust fumes from vehicles would quickly build up to dangerous levels.",
        "Some tunnels pass beneath rivers or under the sea.",
        "Many drivers find long tunnels stressful.",
        "Tunnels are often lit by bright lamps.",
        "The longest road tunnel in the world is in Norway.",
      ],
      "Boşluktan sonra 'therefore' ile büyük fanlar kullanıldığı söylenir; boşluğa havalandırma olmadan egzoz dumanlarının tehlikeli düzeylere ulaşacağını söyleyen cümle gelmelidir.",
    ],
    [
      "Railway tracks are usually laid with small gaps between the lengths of steel rail. ---- Without the gaps, the rails could bend out of shape on hot days.",
      [
        "These allow the metal to expand when it gets warm.",
        "Trains were first powered by steam engines.",
        "Many people commute to work by train.",
        "Steel is made from iron and a small amount of carbon.",
        "Some railways cross high mountains.",
      ],
      "Boşluktan sonra boşluklar olmasaydı rayların sıcak günlerde bükülebileceği söylenir; boşluğa bu boşlukların metalin ısındığında genleşmesine izin verdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Many modern skyscrapers are designed to sway slightly in strong winds. ---- A completely rigid building would be more likely to crack.",
      [
        "This flexibility actually makes them safer.",
        "The tallest buildings in the world are found in Asia.",
        "Lifts can carry people to the top in less than a minute.",
        "Glass is often used to cover the outside of tall buildings.",
        "Some people are afraid of heights.",
      ],
      "Boşluktan sonra tamamen sert bir binanın çatlamasının daha olası olduğu söylenir; boşluğa bu esnekliğin aslında binaları daha güvenli kıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Before a new aircraft can carry passengers, it must pass many tests. ---- Engineers also bend the wings far beyond the limits they would ever face in flight.",
      [
        "In one test, huge amounts of water are fired at the engines to simulate heavy rain.",
        "Air travel has become much cheaper in recent decades.",
        "Some airports handle more than a thousand flights a day.",
        "Pilots must train for many years.",
        "Many passengers prefer window seats.",
      ],
      "Boşluktan sonra 'also' ile kanatların da sınırların ötesinde büküldüğü söylenir; boşluğa başka bir testi, yani yoğun yağmuru taklit etmek için motorlara büyük miktarda su püskürtüldüğünü anlatan cümle gelmelidir.",
    ],
    [
      "Some new roads are built with surfaces that allow rainwater to pass through them. ---- This reduces flooding and the amount of water flowing into drains.",
      [
        "The water soaks into the ground below instead of running off the surface.",
        "Many cities suffer from heavy traffic during rush hour.",
        "Asphalt is a mixture of stones and bitumen.",
        "Some roads are built on bridges over rivers.",
        "Road signs are often painted in bright colours.",
      ],
      "Boşluktan sonra 'This' ile sel ve kanalizasyona akan suyun azaldığı söylenir; boşluğa suyun yüzeyden akıp gitmek yerine alttaki toprağa sızdığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Expansion joints are gaps built into bridges to allow them to move slightly.",
        "As temperatures change, the materials expand and contract.",
        "Many bridges are illuminated at night.",
        "Without these joints, the stress could cause cracks to form.",
        "They are often visible as metal strips across the road surface.",
      ],
      odd: 2,
      why: "Parça köprülerdeki genleşme derzlerini anlatır. Pek çok köprünün geceleri aydınlatıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hovercraft travel on a cushion of air produced by powerful fans.",
        "Because they do not touch the surface, they can cross water, mud and ice.",
        "Many people enjoy sailing as a hobby.",
        "They are used by rescue services in areas that are difficult to reach.",
        "However, they are noisy and use a lot of fuel.",
      ],
      odd: 2,
      why: "Parça hovercraftları anlatır. Pek çok kişinin yelkenciliği hobi olarak sevdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Icebreakers are ships designed to travel through frozen seas.",
        "Their strong, rounded hulls ride up onto the ice and break it with their weight.",
        "Arctic foxes change the colour of their fur in winter.",
        "Some are powered by nuclear reactors, allowing them to operate for long periods.",
        "They keep shipping routes open in the Arctic during winter.",
      ],
      odd: 2,
      why: "Parça buzkıran gemileri anlatır. Kutup tilkilerinin kışın kürk rengini değiştirdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Escalators move people between floors using a continuous loop of steps.",
        "The steps are attached to a chain driven by an electric motor.",
        "At the top and bottom, the steps flatten out so that people can step on and off safely.",
        "Many shopping centres are busiest at weekends.",
        "Handrails move at the same speed as the steps to help passengers keep their balance.",
      ],
      odd: 3,
      why: "Parça yürüyen merdivenlerin nasıl çalıştığını anlatır. Pek çok alışveriş merkezinin hafta sonları en kalabalık olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cable cars carry passengers up steep mountains.",
        "Ski resorts are busy during the winter holidays.",
        "They are pulled by strong steel cables driven by motors at one end.",
        "Some cities, such as Medellín in Colombia, use them as public transport.",
        "They allow people living on hillsides to reach the city centre quickly.",
      ],
      odd: 1,
      why: "Parça teleferikleri anlatır. Kayak merkezlerinin kış tatillerinde kalabalık olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Submarines control their depth using large tanks called ballast tanks.",
        "To dive, they let seawater flow into the tanks, making the vessel heavier.",
        "To rise, they force the water out with compressed air.",
        "Many people feel seasick on small boats.",
        "Small fins at the back help to steer the submarine up or down.",
      ],
      odd: 3,
      why: "Parça denizaltıların derinliklerini nasıl kontrol ettiğini anlatır. Pek çok kişinin küçük teknelerde deniz tuttuğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
