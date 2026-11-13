import type { YokdilDeneme } from "./types";

export const SOSYAL_53: YokdilDeneme = {
  no: 53,
  field: "sosyal",
  vocab: [
    [
      "The ship was found ---- in the Atlantic, with no one on board.",
      ["drifting", "anchoring", "racing", "sinking", "loading"],
      "Geminin Atlantik'te kimse olmadan 'sürüklenirken' (drifting) bulunduğu anlatılır.",
    ],
    [
      "The sailor was ---- on an uninhabited island after quarrelling with his captain.",
      ["marooned", "crowned", "promoted", "welcomed", "employed"],
      "Denizcinin kaptanıyla tartıştıktan sonra ıssız bir adaya 'terk edildiği' (marooned) anlatılır.",
    ],
    [
      "Owners sometimes sent ---- ships to sea because they could profit from insurance if the ships sank.",
      ["unseaworthy", "luxurious", "punctual", "fragrant", "obedient"],
      "Gemi sahiplerinin, batarsa sigortadan kâr edebildikleri için bazen 'denize elverişsiz' (unseaworthy) gemileri yola çıkardığı anlatılır.",
    ],
    [
      "The sinking of the liner caused ---- across the United States.",
      ["outrage", "comfort", "boredom", "harmony", "patience"],
      "Yolcu gemisinin batmasının ABD genelinde 'öfke' (outrage) yarattığı anlatılır.",
    ],
    [
      "Traditional navigators found their way by reading the stars, the ---- and the flight of birds.",
      ["swells", "deserts", "forests", "valleys", "markets"],
      "Geleneksel denizcilerin yıldızları, 'dalgaları' (swells) ve kuşların uçuşunu okuyarak yön bulduğu anlatılır.",
    ],
    [
      "When the governor returned, he found that the settlers had ----.",
      ["disappeared", "multiplied", "celebrated", "volunteered", "graduated"],
      "Vali döndüğünde yerleşimcilerin 'ortadan kaybolduğunu' (disappeared) gördüğü anlatılır.",
    ],
  ],
  grammar: [
    [
      "When the ship was found, its crew ---- for more than a week.",
      ["had been missing", "are missing", "have been missing", "will be missing", "miss"],
      "Geçmişteki bir andan önce süregelen durum: 'had been missing'.",
    ],
    [
      "If the sailor had stayed on board, he ---- when the ship sank.",
      ["might have drowned", "will drown", "drowns", "had drowned", "is drowning"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have drowned'.",
    ],
    [
      "The colonists ---- in 1590 when the governor finally returned.",
      ["could not be found", "cannot find", "have not found", "do not find", "will not be found"],
      "Geçmişte bulunamamışlardır; edilgen yapı: 'could not be found'.",
    ],
    [
      "---- the passengers had been warned, few of them expected the ship to be attacked.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Uyarılmış olmaları ile saldırıyı beklememeleri zıttır: 'Although'.",
    ],
    [
      "The captain, ---- wife and daughter were on board, was never seen again.",
      ["whose", "who", "which", "whom", "where"],
      "Kaptanın eşi ve kızı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "No sooner had the commander left for help ---- the mutineers took control.",
      ["than", "when", "then", "that", "as"],
      "'No sooner ... than' kalıbı: 'than'.",
    ],
    [
      "The lifeboat was missing, ---- suggested that the crew had left in a hurry.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more heavily a ship was loaded, ---- likely it was to sink in a storm.",
      ["the more", "the most", "more", "most", "so"],
      "'The more ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "The campaigner demanded that every ship ---- marked with a line showing its safe load.",
      ["be", "is", "was", "to be", "being"],
      "'demand that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
    [
      "The navigator is said ---- a chart of more than seventy islands.",
      ["to have drawn", "drawing", "to draw", "drawn", "having drawn"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have drawn'.",
    ],
    [
      "The sailor survived on the island by ---- goats and eating wild plants.",
      ["hunting", "to hunt", "hunt", "hunted", "to hunting"],
      "'by' edatından sonra fiilimsi: 'hunting'.",
    ],
    [
      "The settlers had agreed to carve a cross ---- they were forced to leave in danger.",
      ["if", "unless", "although", "whereas", "so that"],
      "Haç oyulması, tehlike altında ayrılmak zorunda kalmaları koşuluna bağlıdır; koşul bağlacı: 'if'.",
    ],
    [
      "Had the war not delayed his return, the governor ---- the colonists alive.",
      ["might have found", "finds", "will find", "had found", "is finding"],
      "Devrik üçüncü tip koşul cümlesi: 'might have found'.",
    ],
    [
      "The canoe's crew used no instruments, ---- compasses nor charts.",
      ["neither", "either", "both", "not only", "whether"],
      "'neither ... nor' yapısı: 'neither'.",
    ],
  ],
  cloze: [
    {
      text:
        "On 4 December 1872, the crew of the British brigantine Dei Gratia sighted another ship moving erratically in the Atlantic between the Azores and Portugal. It was the Mary Celeste, {1} had left New York about a month earlier bound for Genoa with a cargo of industrial alcohol. When sailors from the Dei Gratia went on board, they found no one there. The ship was in reasonable condition, {2} there was plenty of food and water, and the crew's belongings were still in their places. However, the single lifeboat was missing, {3} some of the navigation instruments and the ship's papers, apart from the logbook, had gone. The captain, Benjamin Briggs, his wife, their two-year-old daughter and seven crew members were never seen again. At a hearing in Gibraltar to decide how much the Dei Gratia's crew should be paid for bringing the ship to port, officials suspected foul play, {4} no evidence of a crime was found. Many explanations have been proposed since, from mutiny to sea monsters. One of the most widely accepted is that nine of the barrels of alcohol, {5} were found empty, had leaked, and that Briggs, fearing an explosion from the fumes, ordered everyone into the lifeboat, which was then separated from the ship and lost.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgülden sonra gemiyi niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Geminin iyi durumda olması ve bol yiyecek bulunması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "although", "or"],
          "Filikanın kayıp olması ve bazı aletlerin de gitmesi birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["but", "and", "so", "or", "for"],
          "Yetkililerin şüphelenmesi ile suç kanıtı bulunmaması zıttır: 'but'.",
        ],
        [
          "(25) ----",
          ["which", "who", "whose", "where", "when"],
          "Virgüller arasında fıçıları niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "In 1704, Alexander Selkirk, a Scottish sailor on an English privateering ship, became convinced that the vessel was so badly damaged by worms that it would soon sink. When the ship stopped at an uninhabited island in the Juan Fernández group, about 650 kilometres off the coast of Chile, he quarrelled with the captain and asked to be left there, {1} he expected another ship to arrive soon. He quickly regretted his decision, {2} the captain refused to take him back. In fact, Selkirk had been right about the ship, {3} later sank with the loss of most of its crew. He spent four years and four months alone on the island. At first, he stayed close to the shore, hoping to see a ship, {4} he gradually moved inland, built two huts, hunted wild goats, which had been left by earlier visitors, and ate wild plants. In February 1709, he was rescued by an English expedition led by Woodes Rogers, {5} described him as dressed in goatskins and barely able to speak at first. Accounts of his survival were widely read, and they are thought to have inspired Daniel Defoe's novel Robinson Crusoe, published in 1719. Chile gave the island the name Robinson Crusoe Island in 1966.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Adada bırakılmayı istemesinin nedeni başka bir geminin yakında gelmesini beklemesidir: 'because'.",
        ],
        [
          "(27) ----",
          ["but", "and", "so", "or", "for"],
          "Kararından pişman olması ile kaptanın onu geri almayı reddetmesi zıttır: 'but'.",
        ],
        [
          "(28) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgülden sonra gemiyi niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["but", "and", "so", "or", "nor"],
          "Kıyıda bekleme isteği ile zamanla iç kesimlere taşınması zıttır: 'but'.",
        ],
        [
          "(30) ----",
          ["who", "which", "whose", "whom", "where"],
          "Virgülden sonra Woodes Rogers'ı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the Mary Celeste was in good condition, ----.",
      [
        "everyone on board had vanished",
        "the Atlantic is wide",
        "alcohol was valuable",
        "Genoa is in Italy",
        "the crew of the ship that found it were paid a sum of money for bringing it safely to port",
      ],
      "'Although' zıtlık ister: Mary Celeste iyi durumda olmasına rağmen gemideki herkes ortadan kaybolmuştu.",
    ],
    [
      "If Selkirk had remained on the ship, ----.",
      [
        "he would probably have died when it sank",
        "Chile is in South America",
        "goats are wild",
        "islands are isolated",
        "the novelist who wrote about a castaway would have published his book several decades earlier",
      ],
      "Üçüncü tip koşul: Selkirk gemide kalsaydı gemi battığında muhtemelen ölürdü.",
    ],
    [
      "----, the commander sailed a small boat thousands of kilometres to seek help.",
      [
        "After the ship struck a reef",
        "Although the sea was calm",
        "Unless the crew agreed",
        "Because Batavia is a city",
        "While the soldiers on another island were searching for fresh water and preparing to defend themselves",
      ],
      "Gemi bir resife çarptıktan sonra komutan yardım istemek için küçük bir tekneyle binlerce kilometre yol aldı.",
    ],
    [
      "German officials published warnings in newspapers ----.",
      [
        "to discourage people from sailing on British ships",
        "although the war had ended",
        "unless the ship was American",
        "because New York is large",
        "while the passengers were enjoying their meals in the dining rooms of the great liner",
      ],
      "Alman yetkililer insanları İngiliz gemileriyle yolculuktan caydırmak için gazetelerde uyarılar yayımladı.",
    ],
    [
      "Since the navigator knew the islands of the region well, ----.",
      [
        "he was able to guide the European expedition",
        "Tahiti is beautiful",
        "the ship was large",
        "priests were respected",
        "he later died of an illness in a port in the East Indies before the ship returned to Europe",
      ],
      "'Since' neden bildirir: denizci bölgedeki adaları iyi bildiği için Avrupalı keşif gezisine rehberlik edebildi.",
    ],
    [
      "Not only did the canoe reach Tahiti, ----.",
      [
        "but it also showed that long ocean voyages could be planned without instruments",
        "and Hawaii is in the Pacific",
        "since the crew were skilled",
        "so the stars were bright",
        "unless some scholars had argued that the islands of the Pacific had been settled by people who drifted there by accident",
      ],
      "'Not only ... but also' yapısı tamamlanır: kano Tahiti'ye ulaşmakla kalmadı, uzun okyanus yolculuklarının alet olmadan planlanabileceğini de gösterdi.",
    ],
    [
      "Once the law required ships to be marked with a load line, ----.",
      [
        "it became harder for owners to overload them",
        "ships are heavy",
        "sailors were poor",
        "Parliament met in London",
        "the campaigner had been suspended from Parliament after shouting angrily at other members during a debate",
      ],
      "Yasa gemilerin yükleme çizgisiyle işaretlenmesini zorunlu kılınca sahiplerin gemileri aşırı yüklemesi zorlaştı.",
    ],
    [
      "Unless the colonists had left a sign of distress, ----.",
      [
        "they had probably moved away peacefully",
        "the island is small",
        "England was at war",
        "the governor was worried",
        "the governor's granddaughter would have become the first English child to be born in the Americas",
      ],
      "'Unless' olumsuz koşul: sömürgeciler bir tehlike işareti bırakmadıysa muhtemelen bölgeden barışçıl biçimde ayrılmışlardı.",
    ],
    [
      "The ship sank so quickly ----.",
      [
        "that many passengers had no time to reach the lifeboats",
        "although the sea was calm",
        "because Ireland is green",
        "unless the captain agreed",
        "while the government of the United States was protesting strongly against the actions of German submarines",
      ],
      "Gemi o kadar hızlı battı ki pek çok yolcunun filikalara ulaşacak vakti olmadı.",
    ],
    [
      "Even though the mutineers greatly outnumbered them, ----.",
      [
        "the soldiers on the other island defended themselves successfully",
        "the reef was dangerous",
        "the company was rich",
        "the sea was cold",
        "the commander had taken the ship's officers with him when he sailed away to look for help",
      ],
      "'Even though' zıtlık ister: isyancılar onlardan çok daha kalabalık olsa da diğer adadaki askerler kendilerini başarıyla savundu.",
    ],
    [
      "As the barrels had leaked, ----.",
      [
        "the captain may have feared an explosion",
        "alcohol is a liquid",
        "the ship was American",
        "barrels are made of wood",
        "the officials in Gibraltar spent several months deciding how much the rescuers should be paid",
      ],
      "Fıçılar sızdırdığı için kaptan bir patlamadan korkmuş olabilir.",
    ],
  ],
  enTr: [
    [
      "The single lifeboat was missing from the ship.",
      [
        "Gemideki tek filika kayıptı.",
        "Gemide pek çok filika vardı.",
        "Gemideki tek filikayı kullanan mürettebat, kısa süre içinde başka bir gemi tarafından kurtarılarak limana götürüldü.",
        "Filika gemiyi buldu.",
        "Geminin hiç filikası yoktu.",
      ],
      "'The single lifeboat' 'tek filika', 'was missing from the ship' 'gemide kayıptı' karşılığıdır.",
    ],
    [
      "Accounts of his survival are thought to have inspired a famous novel.",
      [
        "Hayatta kalışının anlatımlarının ünlü bir romana ilham verdiği düşünülüyor.",
        "Ünlü bir roman, onun hayatta kalmasına yardım etti.",
        "Ünlü bir romanı okuyarak hayatta kalmayı öğrenen denizci, deneyimlerini daha sonra kendi kitabında anlattı.",
        "Roman hayatta kalmanın imkânsız olduğunu gösterdi.",
        "Onun hikâyesi hiç yazılmadı.",
      ],
      "'Accounts of his survival' 'hayatta kalışının anlatımları', 'are thought to have inspired a famous novel' 'ünlü bir romana ilham verdiği düşünülüyor' karşılığıdır.",
    ],
    [
      "The mutineers killed more than a hundred of the survivors.",
      [
        "İsyancılar, hayatta kalanlardan yüzden fazlasını öldürdü.",
        "Hayatta kalanlar, yüzden fazla isyancıyı öldürdü.",
        "Yüzden fazla kişiyi öldüren isyancılar, kurtarma gemisi geldiğinde hiçbir cezayla karşılaşmadan serbest bırakıldı.",
        "İsyancıların hepsi hayatta kaldı.",
        "Kimse öldürülmedi.",
      ],
      "'The mutineers killed' 'isyancılar öldürdü', 'more than a hundred of the survivors' 'hayatta kalanlardan yüzden fazlasını' karşılığıdır.",
    ],
    [
      "The ship was also carrying a cargo of ammunition.",
      [
        "Gemi aynı zamanda bir mühimmat yükü de taşıyordu.",
        "Gemi yalnızca yolcu taşıyordu.",
        "Mühimmat taşıdığı iddia edilen gemi, savaş sırasında hiçbir zaman düşman suları yakınından geçmedi.",
        "Mühimmat gemiyi korudu.",
        "Gemi mühimmat üretiyordu.",
      ],
      "'The ship was also carrying' 'gemi aynı zamanda taşıyordu', 'a cargo of ammunition' 'bir mühimmat yükü' karşılığıdır.",
    ],
    [
      "The voyage challenged the theory that people had reached the islands only by chance.",
      [
        "Yolculuk, adalara kazara yerleşildiği kuramını sorguladı.",
        "Yolculuk, adalara kazara yerleşildiğini kanıtladı.",
        "Adalara kazara yerleşildiğini savunan bilim insanları, yolculuğu düzenleyerek kuramlarını kanıtlamaya çalıştı.",
        "Adalar yolculuk sırasında keşfedildi.",
        "Kuram yolculuk için bir plan sağladı.",
      ],
      "'The voyage challenged the theory' 'yolculuk kuramı sorguladı', 'that people had reached the islands only by chance' 'adalara kazara yerleşildiği' karşılığıdır.",
    ],
    [
      "The governor found a word carved into a wooden post.",
      [
        "Vali, ahşap bir direğe oyulmuş bir kelime buldu.",
        "Vali, ahşap bir direğe bir kelime oydu.",
        "Ahşap bir direğe oyulmuş kelimeyi okuyamayan vali, sömürgecilerin kaderini hiçbir zaman öğrenemedi.",
        "Direk valiyi buldu.",
        "Kelime bir kâğıda yazılmıştı.",
      ],
      "'The governor found a word' 'vali bir kelime buldu', 'carved into a wooden post' 'ahşap bir direğe oyulmuş' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kaptan, eşi, küçük kızı ve yedi mürettebat bir daha hiç görülmedi.",
      [
        "The captain, his wife, his young daughter and seven crew members were never seen again.",
        "The captain, his wife and daughter were rescued, but the crew were never seen again.",
        "The captain's wife and daughter were left in New York, while he and seven crew members sailed to Genoa.",
        "Seven crew members saw the captain again.",
        "The captain was seen again seven times.",
      ],
      "'Kaptan, eşi, küçük kızı ve yedi mürettebat' 'the captain, his wife, his young daughter and seven crew members', 'bir daha hiç görülmedi' 'were never seen again' karşılığıdır.",
    ],
    [
      "Denizci, adada dört yılı aşkın bir süre yalnız yaşadı.",
      [
        "The sailor lived alone on the island for more than four years.",
        "The sailor lived on the island with four other men.",
        "The sailor planned to live alone on the island for four years, but he was rescued after only a few weeks.",
        "Four sailors lived alone on different islands.",
        "The island was four years old.",
      ],
      "'Denizci yalnız yaşadı' 'the sailor lived alone', 'adada dört yılı aşkın bir süre' 'on the island for more than four years' karşılığıdır.",
    ],
    [
      "Askerler, adalarında taze su buldu ve isyancılara direndi.",
      [
        "The soldiers found fresh water on their island and resisted the mutineers.",
        "The soldiers joined the mutineers and searched for water.",
        "The soldiers could not find any fresh water on their island, so they were forced to surrender to the mutineers.",
        "The mutineers gave water to the soldiers.",
        "The island had no soldiers.",
      ],
      "'Askerler taze su buldu' 'the soldiers found fresh water', 've isyancılara direndi' 'and resisted the mutineers' karşılığıdır.",
    ],
    [
      "Gemi, on sekiz dakikadan kısa bir sürede battı.",
      [
        "The ship sank in less than eighteen minutes.",
        "The ship took eighteen hours to sink.",
        "The ship was hit by a torpedo, but it stayed afloat for eighteen days before it was towed into port.",
        "Eighteen ships sank in a few minutes.",
        "The ship did not sink.",
      ],
      "'Gemi battı' 'the ship sank', 'on sekiz dakikadan kısa bir sürede' 'in less than eighteen minutes' karşılığıdır.",
    ],
    [
      "Kano, Hawaii'den Tahiti'ye yaklaşık bir ayda ulaştı.",
      [
        "The canoe reached Tahiti from Hawaii in about a month.",
        "The canoe sailed from Tahiti to Hawaii in a day.",
        "The canoe set out from Hawaii for Tahiti, but it was forced to turn back after about a month at sea.",
        "Hawaii and Tahiti are a month apart by plane.",
        "The canoe was built in a month.",
      ],
      "'Kano ulaştı' 'the canoe reached', 'Hawaii'den Tahiti'ye yaklaşık bir ayda' 'Tahiti from Hawaii in about a month' karşılığıdır.",
    ],
    [
      "Pek çok denizci, aşırı yüklenmiş gemilerde hayatını kaybetti.",
      [
        "Many sailors lost their lives on overloaded ships.",
        "Many sailors refused to work on ships.",
        "Overloaded ships were rarely lost, so sailors preferred to work on them because the pay was higher.",
        "Sailors overloaded the ships.",
        "Ships were lost by many sailors.",
      ],
      "'Pek çok denizci hayatını kaybetti' 'many sailors lost their lives', 'aşırı yüklenmiş gemilerde' 'on overloaded ships' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In October 1628, the Batavia, a new and richly loaded ship of the Dutch East India Company, set sail from the Netherlands for the company's headquarters at Batavia, now Jakarta, in the East Indies. In June 1629, it struck a reef among the Houtman Abrolhos islands, off the western coast of Australia. Most of the roughly three hundred people on board reached small, barren islands nearby, but there was little fresh water. The commander, Francisco Pelsaert, set off in a longboat with the captain and others to seek help, a voyage of more than three thousand kilometres that took about a month. In his absence, Jeronimus Cornelisz, a junior merchant who had already been plotting a mutiny before the wreck, took control of the survivors. To reduce the number of people who might oppose him and to conserve supplies, he and his followers murdered about 110 men, women and children. A group of soldiers led by Wiebbe Hayes, who had been sent to another island to look for water, found it, built a small fort and successfully resisted attacks by the mutineers. When Pelsaert returned with a rescue ship, Hayes warned him in time. Cornelisz and several of his followers were executed on the islands, and two others were left on the Australian mainland, possibly becoming the first Europeans to live there.",
      questions: [
        [
          "According to the passage, Pelsaert left the survivors in order to ----.",
          [
            "obtain help from the company's base",
            "escape the mutineers",
            "explore Australia",
            "find fresh water on another island and build a fort to defend the survivors",
            "return to the Netherlands",
          ],
          "Metne göre yardım istemek için Batavia'ya doğru yola çıktı.",
        ],
        [
          "Cornelisz had people killed partly because ----.",
          [
            "he wanted to make supplies last longer",
            "they had attacked him",
            "Pelsaert ordered it",
            "they had tried to sail away from the islands in the ship's longboat",
            "they were soldiers",
          ],
          "Muhalefet edebilecekleri azaltmak ve erzakı korumak istedi.",
        ],
        [
          "It can be understood from the passage that Hayes and his soldiers ----.",
          [
            "played a key role in preventing further disaster",
            "joined the mutiny",
            "died of thirst",
            "were left on the Australian mainland after the rescue ship arrived",
            "wrecked the ship",
          ],
          "Su buldular, isyancılara direndiler ve Pelsaert'i zamanında uyardılar.",
        ],
      ],
    },
    {
      text:
        "On 7 May 1915, the British passenger liner Lusitania, one of the largest and fastest ships in the world, was approaching the end of a voyage from New York to Liverpool when it was struck by a torpedo fired by a German submarine off the southern coast of Ireland. A second explosion followed, and the ship sank in less than eighteen minutes, so quickly that many of the lifeboats could not be launched. Of the 1,959 people on board, 1,198 died, including 128 Americans. Germany had earlier declared the waters around Britain a war zone in which enemy ships could be sunk without warning, and its embassy had published notices in American newspapers warning travellers not to sail on British vessels. The German government argued that the ship was a legitimate target, since it was carrying war materials, including rifle ammunition, a claim that was later confirmed. In the United States, which was neutral at the time, the sinking caused great anger, and President Woodrow Wilson sent strong protests to Berlin. Germany temporarily restricted its submarine attacks. The United States did not enter the war until April 1917, after Germany resumed unrestricted submarine warfare, but the sinking of the Lusitania did much to make Americans hostile to Germany.",
      questions: [
        [
          "According to the passage, many people died partly because ----.",
          [
            "the ship sank too quickly for many lifeboats to be used",
            "there were no lifeboats",
            "the weather was stormy",
            "the passengers had ignored the captain's instructions to put on their life jackets",
            "the ship was far from land",
          ],
          "Metne göre gemi o kadar hızlı battı ki filikaların çoğu indirilemedi.",
        ],
        [
          "Germany justified the attack by claiming that ----.",
          [
            "the ship was carrying military supplies",
            "the ship had attacked a submarine",
            "there were no Americans on board",
            "the ship had entered German waters without permission from the government in Berlin",
            "the warning had been ignored",
          ],
          "Geminin savaş malzemesi taşıdığını, bu nedenle meşru hedef olduğunu savundu.",
        ],
        [
          "It can be understood from the passage that the sinking ----.",
          [
            "influenced American attitudes, although it did not immediately bring the country into the war",
            "caused the United States to declare war at once",
            "had no effect on public opinion",
            "led Germany to increase its submarine attacks on ships in the Atlantic",
            "was supported by President Wilson",
          ],
          "ABD 1917'ye kadar savaşa girmedi ama batış kamuoyunu Almanya'ya karşı çevirdi.",
        ],
      ],
    },
    {
      text:
        "When the British explorer James Cook visited Tahiti in 1769, he met Tupaia, a high priest and expert navigator who had an extraordinary knowledge of the islands of the Pacific. Tupaia agreed to join Cook's ship, the Endeavour, and guided it through the surrounding islands. With the help of the Europeans, he drew a chart showing about seventy-four islands spread across an area of ocean larger than Australia, demonstrating the vast geographical knowledge held by Polynesian navigators. In New Zealand, he was able to talk with the Māori, whose language was related to his own, and he served as an interpreter. He died of illness in 1770 during the voyage home. In the following centuries, many Europeans doubted that Polynesians could have deliberately sailed long distances across open ocean without instruments, and in the 1950s a historian argued that the islands had been settled largely through accidental drift voyages. In 1976, a double-hulled canoe named Hōkūle'a, built to a traditional design, sailed about 4,000 kilometres from Hawaii to Tahiti in about a month. Its navigator was Mau Piailug, who came from a small Micronesian island and used no compass or charts, but read the stars, the ocean swells, the winds and the behaviour of birds. The voyage did much to restore pride in Polynesian traditions and to show that the settlement of the Pacific had been planned.",
      questions: [
        [
          "According to the passage, Tupaia's chart showed that ----.",
          [
            "Polynesian navigators knew about a very large area of ocean",
            "Cook had discovered many islands",
            "Tahiti was larger than Australia",
            "European explorers had already visited most of the islands of the Pacific Ocean",
            "maps were common in Tahiti",
          ],
          "Metne göre Polinezyalı denizcilerin geniş coğrafi bilgisini gösterdi.",
        ],
        [
          "Tupaia was useful in New Zealand because ----.",
          [
            "he could communicate with the Māori",
            "he had been born there",
            "he was a priest",
            "the Māori had been told about his arrival by other explorers who had visited them earlier",
            "he could read charts",
          ],
          "Dili Māori diliyle akraba olduğu için onlarla konuşabildi.",
        ],
        [
          "It can be understood from the passage that the 1976 voyage ----.",
          [
            "supported the view that Polynesian voyages had been deliberate",
            "proved the drift theory",
            "used modern instruments",
            "was led by Tupaia's descendants, who had kept his chart for two hundred years",
            "ended in failure",
          ],
          "Pasifik'e yerleşimin planlı olduğunu göstermeye büyük katkı yaptı.",
        ],
      ],
    },
    {
      text:
        "In the 1860s and 1870s, many British merchant ships went to sea dangerously overloaded or in poor condition, and hundreds of sailors drowned every year. Some owners even insured old, unsafe ships for more than their value, so that they profited if the vessels sank; such ships became known as 'coffin ships'. Sailors who signed on and then refused to sail could be imprisoned for desertion. Samuel Plimsoll, a businessman who had become a Member of Parliament, made the cause his own. In 1873, he published a book, Our Seamen, describing the conditions and the losses, which aroused strong public feeling. In 1875, when the government appeared to be abandoning a bill to improve safety, he lost his temper in the House of Commons, called some shipowners villains and shook his fist at the Speaker. He was briefly suspended, but the incident won him even more public support, and in 1876 Parliament passed a law requiring every ship to be marked with a line on its side showing the maximum depth to which it could safely be loaded. At first, the owners themselves could decide where to paint the line, which limited its effect, and it was only in 1890 that its position was fixed by official rules. The mark, still known as the Plimsoll line, was later adopted internationally and appears on cargo ships throughout the world.",
      questions: [
        [
          "According to the passage, some owners sent unsafe ships to sea because ----.",
          [
            "they could make money from insurance if the ships were lost",
            "they did not know they were unsafe",
            "the law required them to",
            "sailors preferred to work on old ships because they were paid higher wages",
            "new ships were unavailable",
          ],
          "Metne göre bazı sahipler gemileri değerinden fazla sigortalatıyordu.",
        ],
        [
          "Plimsoll's outburst in Parliament ----.",
          [
            "increased public support for his campaign",
            "ended his career",
            "was ignored by the public",
            "persuaded the shipowners to accept responsibility for the sailors who had drowned",
            "led to his imprisonment",
          ],
          "Olay ona daha fazla kamuoyu desteği kazandırdı.",
        ],
        [
          "It can be understood from the passage that the 1876 law was initially weakened by ----.",
          [
            "allowing owners to decide where to put the line",
            "public opposition",
            "the lack of ships",
            "the decision of other countries to adopt a different system for marking their ships",
            "Plimsoll's suspension",
          ],
          "Başta çizginin yerine sahiplerin kendisi karar verebiliyordu.",
        ],
      ],
    },
    {
      text:
        "In 1587, about 115 English men, women and children settled on Roanoke Island, near the shore of present-day North Carolina, under the leadership of John White, an artist who had visited the area before. It was England's second attempt to establish a colony there. Shortly after their arrival, White's daughter gave birth to a girl, Virginia Dare, the first child born to English parents in the Americas. Because the colony was short of supplies, the settlers persuaded White to return to England to obtain them. His plans to sail back were delayed for three years, largely because of the war with Spain, during which English ships were needed to face the Spanish Armada of 1588. When White finally reached Roanoke in August 1590, the settlement was deserted and the houses had been taken down. The only clues were the word 'CROATOAN' carved into a post and the letters 'CRO' cut into a tree. Before he left, White had agreed with the colonists that, if they moved, they would carve the name of their destination, and add a cross if they were in danger. There was no cross. Croatoan was the name of a nearby island and of the people who lived there, but storms prevented White from searching it, and he returned to England. The fate of the 'Lost Colony' remains unknown; many historians believe that the settlers joined local communities.",
      questions: [
        [
          "According to the passage, White's return to Roanoke was delayed mainly because of ----.",
          [
            "the conflict between England and Spain",
            "storms at sea",
            "a lack of money",
            "the birth of his granddaughter, which made him want to remain in England",
            "illness",
          ],
          "Metne göre İspanya ile savaş ve Armada nedeniyle gemilere ihtiyaç vardı.",
        ],
        [
          "The absence of a cross suggested that ----.",
          [
            "the colonists had not left because of danger",
            "the colonists had been killed",
            "White had made a mistake",
            "the colonists had returned to England on a ship that passed the island",
            "the word was carved by Croatoan people",
          ],
          "Anlaşmaya göre tehlikede olsalar haç ekleyeceklerdi; haç yoktu.",
        ],
        [
          "It can be understood from the passage that White ----.",
          [
            "was unable to investigate the most likely clue",
            "found the colonists on Croatoan",
            "never returned to Roanoke",
            "carved the word on the post himself before he left for England in 1587",
            "stayed in America",
          ],
          "Fırtınalar Croatoan'ı aramasını engelledi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In September 1838, the steamship Forfarshire struck rocks near the Farne Islands, in north-eastern England. ---- The story made Grace a national heroine, and gifts and letters arrived from all over the country.",
      [
        "Grace Darling, the daughter of the local lighthouse keeper, and her father rowed through stormy seas to rescue nine survivors.",
        "Lighthouses guide ships.",
        "Storms are common in autumn.",
        "The ship had been carrying passengers and cargo from Hull to Dundee when one of its boilers began to leak.",
        "Rowing is hard work.",
      ],
      "Boşluktan sonra 'the story' ile Grace'in ünü anlatılır; boşluğa Grace Darling ile babasının fırtınada kürek çekerek dokuz kazazedeyi kurtardığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1830s, the German publisher Karl Baedeker began producing travel guides that gave detailed, practical information about routes, prices and accommodation. ---- His guides became so trusted that 'a Baedeker' came to mean any guidebook.",
      [
        "He also introduced a system of stars to indicate the sights and hotels that he considered most worth visiting.",
        "Germany has many publishers.",
        "Travelling can be expensive.",
        "Baedeker was the son of a printer and bookseller in the city of Essen, where he had learned the business as a young man.",
        "Hotels provide accommodation.",
      ],
      "Boşluk rehberlerin özelliğini anlatan bir cümle gerektirir; boşluğa en çok görülmeye değer yerleri gösteren yıldız sistemini getirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The English writer Isabella Bird suffered from poor health as a young woman, and doctors recommended a sea voyage. ---- In 1892, she became the first woman to be elected a Fellow of the Royal Geographical Society.",
      [
        "This was the beginning of decades of travel that took her to the Rocky Mountains, Japan, Persia and Korea, about which she wrote popular books.",
        "Sea air is fresh.",
        "Doctors give advice.",
        "Her father was a clergyman, and the family moved several times during her childhood because of his work.",
        "Many women write books.",
      ],
      "Boşluktan sonra onun ödülü anlatılır; boşluğa bu yolculuğun onlarca yıl sürecek seyahatlerin başlangıcı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "William Dampier, an English sailor of the late seventeenth century, spent part of his career as a pirate. ---- His book A New Voyage Round the World, published in 1697, introduced many English readers to words such as 'barbecue' and 'avocado'.",
      [
        "Yet he also kept careful notes on the plants, animals, winds and peoples he encountered, and he became the first person to sail around the world three times.",
        "Pirates attacked ships.",
        "Sailors travel widely.",
        "Dampier was born in a village in Somerset, and he went to sea as a teenager after the death of his parents.",
        "Avocados grow in warm climates.",
      ],
      "Boşluk korsanlığına zıt bir özellik gerektirir; boşluğa dikkatli doğa notları tuttuğunu ve dünyayı üç kez dolaşan ilk kişi olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1720, a pirate ship commanded by John Rackham was captured off Jamaica. ---- When they were sentenced to death, both women said that they were pregnant, and their executions were postponed.",
      [
        "Among its crew were two women, Anne Bonny and Mary Read, who had fought more fiercely than many of the men.",
        "Jamaica is in the Caribbean.",
        "Ships have captains.",
        "Rackham was known by the nickname 'Calico Jack' because of the colourful cotton clothes that he liked to wear.",
        "Many pirates were executed.",
      ],
      "Boşluktan sonra 'both women' ifadesi gelir; boşluğa mürettebat arasında Anne Bonny ve Mary Read adlı iki kadın bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1519, Ferdinand Magellan set out from Spain with five ships and about 270 men to reach the Spice Islands by sailing west. ---- In 1522, the expedition's last ship, commanded by Juan Sebastián Elcano, reached Spain carrying just eighteen survivors, and so became the first ship to sail around the globe.",
      [
        "Magellan lost his life in a fight in the Philippines in 1521, and most of his men died of disease, starvation or violence.",
        "Spain is in Europe.",
        "Spices were valuable.",
        "Before the voyage began, Magellan, who was Portuguese, had offered his services to the king of Portugal, who had refused them.",
        "Ships need sails.",
      ],
      "Boşluk seferin kayıplarını anlatan bir cümle gerektirir; boşluğa Magellan'ın 1521'de öldürüldüğünü ve adamlarının çoğunun öldüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1607, English settlers founded Jamestown in Virginia.",
        "Many of them were gentlemen with little experience of farming.",
        "Tobacco later became an important crop.",
        "During the winter of 1609 to 1610, known as the 'starving time', most of the colonists died.",
        "The colony survived only because new settlers and supplies arrived.",
      ],
      odd: 2,
      why: "Parça Jamestown'daki zorlu ilk yılları anlatır. Tütünün daha sonra önemli bir ürün olduğunu söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Sir Walter Raleigh led expeditions to South America in search of El Dorado, a legendary city of gold.",
        "His first voyage, in 1595, found no gold.",
        "Gold is a soft metal.",
        "His second expedition, in 1617, ended in failure and a clash with Spanish settlers.",
        "On his return to England, he was executed.",
      ],
      odd: 2,
      why: "Parça Raleigh'in El Dorado seferlerini anlatır. Altının yumuşak bir metal olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Between 1801 and 1803, the English navigator Matthew Flinders sailed around the entire coast of Australia.",
        "No earlier voyage around it is recorded.",
        "He strongly promoted the use of the name 'Australia' for the continent.",
        "Kangaroos are found only in Australia.",
        "The name was officially adopted in the 1820s.",
      ],
      odd: 3,
      why: "Parça Flinders'ın Avustralya'yı dolaşmasını ve kıtanın adını anlatır. Kangurulerin yalnızca Avustralya'da bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Eddystone Rocks off south-west England wrecked many ships.",
        "The first lighthouse built there was destroyed by a storm in 1703.",
        "The engineer John Smeaton built a stone lighthouse on the rocks in 1759.",
        "He used interlocking blocks and a type of cement that hardened under water.",
        "Cornwall is popular with holidaymakers.",
      ],
      odd: 4,
      why: "Parça Eddystone deniz fenerini anlatır. Cornwall'un tatilciler arasında popüler olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1616, the Dutch navigators Willem Schouten and Jacob Le Maire rounded the southern tip of South America.",
        "They named it Cape Horn after the town of Hoorn in the Netherlands.",
        "The Netherlands is famous for its windmills.",
        "The route avoided the Strait of Magellan, which was controlled by another company.",
        "Cape Horn became notorious for its storms.",
      ],
      odd: 2,
      why: "Parça Horn Burnu'nun keşfini anlatır. Hollanda'nın yel değirmenleriyle ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sea shanties were work songs sung by sailors on merchant sailing ships.",
        "A leader sang a line, and the crew replied with a chorus.",
        "Many sailors could not swim.",
        "The rhythm helped the men pull ropes or turn heavy machinery together.",
        "The songs declined when steamships replaced sailing ships.",
      ],
      odd: 2,
      why: "Parça denizci iş şarkılarını anlatır. Pek çok denizcinin yüzme bilmediğini söyleyen III. cümle konu dışıdır.",
    },
  ],
};
