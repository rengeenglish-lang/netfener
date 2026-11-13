import type { YokdilDeneme } from "./types";

export const FEN_41: YokdilDeneme = {
  no: 41,
  field: "fen",
  vocab: [
    [
      "The doctor showed that green leaves produce oxygen only when they are ---- to light.",
      ["exposed", "attached", "opposed", "related", "accustomed"],
      "Doktorun yeşil yaprakların yalnızca ışığa 'maruz kaldıklarında' (exposed) oksijen ürettiğini gösterdiği anlatılır.",
    ],
    [
      "Plants kept inside the sealed glass case survived the long sea ---- without being watered.",
      ["voyage", "storm", "harbour", "festival", "battle"],
      "Kapalı cam kutudaki bitkilerin sulanmadan uzun deniz 'yolculuğuna' (voyage) dayandığı anlatılır.",
    ],
    [
      "Darwin ---- that a moth with an extremely long tongue must exist on the island.",
      ["predicted", "denied", "forgot", "regretted", "concealed"],
      "Darwin'in adada son derece uzun dilli bir güvenin var olması gerektiğini 'öngördüğü' (predicted) anlatılır.",
    ],
    [
      "Scientists at the institute guarded the seed collection rather than eat it, even though they were ----.",
      ["starving", "wealthy", "sleeping", "travelling", "celebrating"],
      "Enstitüdeki bilim insanlarının 'açlıktan ölmek üzere' (starving) olmalarına rağmen tohum koleksiyonunu yemek yerine koruduğu anlatılır.",
    ],
    [
      "The trap closes only if its sensitive hairs are touched twice within about twenty seconds, which ---- wasting energy.",
      ["prevents", "requires", "encourages", "doubles", "measures"],
      "Kapanın yalnızca hassas tüyleri yaklaşık yirmi saniye içinde iki kez dokunulursa kapanmasının enerji israfını 'önlediği' (prevents) anlatılır.",
    ],
    [
      "Trees connected by fungal networks may ---- nutrients to their neighbours.",
      ["pass on", "take after", "run out of", "look down on", "put up with"],
      "Mantar ağlarıyla bağlı ağaçların komşularına besin 'aktarabildiği' (pass on) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before Ingenhousz's experiments, Priestley ---- that plants could 'restore' air spoiled by a candle.",
      ["had shown", "shows", "has shown", "will show", "is showing"],
      "Ingenhousz'un deneylerinden önce tamamlanmış eylem: 'had shown'.",
    ],
    [
      "By the time the ship reached Australia, the plants in the case ---- for months without fresh water.",
      ["had survived", "survive", "will survive", "are surviving", "have been survived"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had survived'.",
    ],
    [
      "If no moth with a long tongue had existed, the orchid ---- pollinated.",
      ["could not have been", "cannot be", "is not", "had not been", "will not be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'could not have been'.",
    ],
    [
      "The moth ---- in 1903, more than forty years after Darwin's prediction.",
      ["was described", "described", "has described", "is describing", "describes"],
      "Güve tanımlanmıştır; edilgen geçmiş zaman: 'was described'.",
    ],
    [
      "---- the seed was about two thousand years old, it germinated and grew into a healthy tree.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Tohumun çok eski olması ile filizlenmesi zıttır: 'Although'.",
    ],
    [
      "The botanist, ---- collection contained hundreds of thousands of seeds, was arrested in 1940.",
      ["whose", "which", "who", "whom", "where"],
      "Botanikçinin koleksiyonu; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The trap counts the number of touches, ---- helps it to distinguish prey from raindrops.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer the nights became, ---- quickly the tobacco plants flowered.",
      ["the more", "the most", "more than", "much more", "so"],
      "'The longer ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Only after the plant had been kept in short days ---- it finally produce flowers.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The vault was built inside a mountain ---- the seeds would stay frozen even if the power failed.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The researchers wanted ---- whether the trees shared carbon through the soil.",
      ["to find out", "finding out", "find out", "found out", "to finding out"],
      "'want to do sth' kalıbı: 'to find out'.",
    ],
    [
      "The colony is thought ---- for many thousands of years.",
      ["to have existed", "existing", "to exist", "existed", "to be existing"],
      "Geçmişten bugüne süren bir durum için mastarın geçmiş biçimi: 'to have existed'.",
    ],
    [
      "The flower smells so bad ---- it is known as the corpse flower.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Botanists recommend that seeds ---- at about minus eighteen degrees Celsius.",
      ["be stored", "are stored", "were stored", "to be stored", "storing"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be stored'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1770s, the English chemist Joseph Priestley showed that a sprig of mint placed in a sealed jar could 'restore' air in which a candle had burned out, so that a mouse could live in it again. Other scientists, {1}, were unable to repeat his results reliably. In 1779, Jan Ingenhousz, a Dutch-born physician who served at the Austrian court, spent a summer near London carrying out more than five hundred experiments to solve the puzzle. He placed leaves under water and observed that they produced bubbles of gas, {2} he identified as oxygen. Crucially, he found that the bubbles appeared only when the leaves were exposed to sunlight; in the dark, or in shade, they stopped. He also showed that only the green parts of plants produced oxygen, {3} flowers, roots and fruits did not. Even more surprisingly, he discovered that at night all parts of the plant gave off small amounts of the 'bad air' {4} animals breathe out, now known as carbon dioxide. Ingenhousz published his results in a book later that year. His work laid the foundations for the understanding of photosynthesis, the process by which plants use the energy of light to make sugars {5} carbon dioxide and water, releasing oxygen as a by-product.",
      blanks: [
        [
          "(21) ----",
          ["however", "therefore", "for example", "similarly", "in addition"],
          "Priestley'nin sonuçları ile diğerlerinin tekrarlayamaması zıttır: 'however'.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra gazı niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(23) ----",
          ["whereas", "because", "unless", "so that", "until"],
          "Yeşil kısımlar ile çiçek, kök ve meyveler karşılaştırılır: 'whereas'.",
        ],
        [
          "(24) ----",
          ["that", "what", "whose", "where", "whom"],
          "Havayı niteleyen ve nesne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(25) ----",
          ["from", "into", "against", "without", "beyond"],
          "Karbondioksit ve sudan şeker yapmak: 'from'.",
        ],
      ],
    },
    {
      text:
        "In 1829, Nathaniel Ward, a London doctor with a passion for natural history, placed a moth chrysalis in some damp soil inside a sealed glass bottle. Some weeks later, he noticed that a fern and a grass had sprouted from the soil {1} were growing healthily, although the bottle had not been opened. Water evaporated from the soil and plants during the day, collected as droplets on the inside of the glass and trickled back into the soil, so that the environment remained moist. Ward realised that such sealed glass cases could protect plants from the smoky, polluted air of London {2} from salt spray and lack of fresh water on long sea voyages. In 1833, he sent two cases of ferns and grasses to Sydney; they arrived months later in good condition, {3} plants sent back to London in the same cases also survived. Before this, the great majority of living plants transported by sea had died during the journey. The 'Wardian case' transformed the movement of plants around the world. It allowed botanical gardens such as Kew to obtain and distribute plants from distant countries, {4} it also played a major role in the economic history of the British Empire. Tea plants were smuggled from China to India in Wardian cases, and rubber trees were taken from South America to Asia, {5} vast plantations were later established.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "until"],
          "Bitkilerin filizlenmesi ve sağlıklı büyümesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["as well as", "instead of", "rather than", "in spite of", "except for"],
          "Kirli havaya ek olarak tuz serpintisinden de koruma: 'as well as'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "İyi durumda varması ve geri gönderilen bitkilerin de dayanması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Botanik bahçelerine katkısı ve ekonomik tarihteki rolü birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["where", "which", "whose", "when", "who"],
          "Asya'yı (yer) niteleyen ilgi zamiri: 'where'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Priestley had shown that plants could restore air, ----.",
      [
        "others could not always repeat his results",
        "mint has a strong smell",
        "candles need oxygen",
        "mice are small animals",
        "the Dutch physician later spent a summer near London carrying out hundreds of experiments with leaves",
      ],
      "'Although' zıtlık ister: Priestley bitkilerin havayı yenileyebildiğini gösterse de başkaları sonuçlarını her zaman tekrarlayamadı.",
    ],
    [
      "----, the plants inside the sealed case did not need watering.",
      [
        "Because water evaporated and ran back into the soil",
        "Although London was polluted",
        "Unless the case was opened",
        "Since Ward was a doctor",
        "While ships were carrying tea plants and rubber trees from one continent to another for the British Empire",
      ],
      "Su buharlaşıp toprağa geri aktığı için kapalı kutudaki bitkilerin sulanmaya ihtiyacı yoktu.",
    ],
    [
      "If a moth's tongue is shorter than the orchid's spur, ----.",
      [
        "it cannot reach the nectar at the bottom",
        "Madagascar is an island",
        "orchids are beautiful",
        "moths fly at night",
        "the naturalist who described the moth would have needed to search for it in other parts of the world",
      ],
      "Birinci tip koşul: bir güvenin dili orkidenin mahmuzundan kısaysa dipteki nektara ulaşamaz.",
    ],
    [
      "The scientists refused to eat the seeds ----.",
      [
        "because they wanted to preserve them for the future",
        "although the city was besieged",
        "unless the seeds were cooked",
        "so that they were botanists",
        "while their director was being held in a prison far away after being arrested by the secret police",
      ],
      "Bilim insanları tohumları gelecek için korumak istedikleri için yemeyi reddetti.",
    ],
    [
      "Not only did the ancient seed germinate, ----.",
      [
        "but it also grew into a tree that later produced fruit",
        "and Masada is a fortress",
        "since dates are sweet",
        "so the desert is dry",
        "unless the researchers had soaked it in water containing fertiliser and hormones before planting",
      ],
      "'Not only ... but also' yapısı tamamlanır: antik tohum filizlenmekle kalmadı, sonradan meyve veren bir ağaca da dönüştü.",
    ],
    [
      "Once the flytrap's hairs have been touched five times, ----.",
      [
        "the plant begins to produce digestive enzymes",
        "insects are small",
        "the plant is green",
        "flytraps grow in Carolina",
        "the scientists who studied the plant had expected that it would close after only a single touch",
      ],
      "Sinekkapan bitkinin tüylerine beş kez dokunulduktan sonra bitki sindirim enzimleri üretmeye başlar.",
    ],
    [
      "Simard used radioactive carbon ----.",
      [
        "to trace how carbon moved between trees",
        "although forests are large",
        "unless the trees were old",
        "because fungi live underground",
        "while other foresters believed that trees competed fiercely for light, water and nutrients in the soil",
      ],
      "Simard karbonun ağaçlar arasında nasıl hareket ettiğini izlemek için radyoaktif karbon kullandı.",
    ],
    [
      "Since all the stems of the aspen colony share the same roots, ----.",
      [
        "they are considered a single organism",
        "Utah is a state",
        "aspens have white bark",
        "leaves turn yellow",
        "visitors to the forest in autumn are often surprised by the bright colours of the leaves",
      ],
      "'Since' neden bildirir: kavak kolonisinin tüm gövdeleri aynı kökleri paylaştığı için tek bir organizma sayılır.",
    ],
    [
      "Unless the vault had been built inside permafrost, ----.",
      [
        "the seeds would need constant electric cooling",
        "Norway is in Europe",
        "seeds are small",
        "the island is remote",
        "the organisers would have chosen a site much closer to the countries whose seeds were being stored there",
      ],
      "'Unless' olumsuz koşul: kasa donmuş toprağın içine yapılmasaydı tohumlar sürekli elektrikli soğutmaya ihtiyaç duyardı.",
    ],
    [
      "The tobacco plants flowered in the greenhouse ----.",
      [
        "because the winter days were short",
        "although they were large",
        "unless they were watered",
        "so that Maryland is a state",
        "while the scientists were studying soybeans that had been planted on different dates in the same fields",
      ],
      "Tütün bitkileri kış günleri kısa olduğu için serada çiçek açtı.",
    ],
    [
      "Even though the titan arum produces an enormous structure, ----.",
      [
        "it flowers only rarely",
        "Sumatra is an island",
        "the smell is strong",
        "beetles visit it",
        "botanical gardens often announce its flowering in advance so that large crowds can come to see it",
      ],
      "'Even though' zıtlık ister: dev titan arum devasa bir yapı oluştursa da yalnızca nadiren çiçek açar.",
    ],
  ],
  enTr: [
    [
      "The leaves produced bubbles of oxygen only when they were in sunlight.",
      [
        "Yapraklar yalnızca güneş ışığındayken oksijen kabarcıkları üretiyordu.",
        "Yapraklar karanlıkta daha fazla oksijen kabarcığı üretiyordu.",
        "Güneş ışığında oksijen kabarcıkları üreten yapraklar, geceleri de aynı miktarda oksijen üretmeye devam ettiği için bilim insanlarını şaşırttı.",
        "Yapraklar hiç oksijen üretmiyordu.",
        "Güneş ışığı yapraklardaki kabarcıkları yok ediyordu.",
      ],
      "'produced bubbles of oxygen' 'oksijen kabarcıkları üretiyordu', 'only when they were in sunlight' 'yalnızca güneş ışığındayken' karşılığıdır.",
    ],
    [
      "Before the invention of the case, most plants sent by sea died during the journey.",
      [
        "Kutunun icadından önce deniz yoluyla gönderilen bitkilerin çoğu yolculuk sırasında ölüyordu.",
        "Kutunun icadından önce deniz yoluyla hiç bitki gönderilmiyordu.",
        "Deniz yoluyla gönderilen bitkilerin çoğu yolculuk sırasında öldüğü için kutu, yalnızca kısa kara yolculuklarında kullanılmak üzere tasarlanmıştı.",
        "Bitkiler, kutunun icadından sonra yolculuk sırasında daha çok ölmeye başladı.",
        "Deniz yolculuğu bitkilerin büyümesini hızlandırıyordu.",
      ],
      "'Before the invention of the case' 'kutunun icadından önce', 'most plants sent by sea died during the journey' 'deniz yoluyla gönderilen bitkilerin çoğu yolculuk sırasında ölüyordu' karşılığıdır.",
    ],
    [
      "The flower stores its nectar at the bottom of a tube about thirty centimetres long.",
      [
        "Çiçek nektarını yaklaşık otuz santimetre uzunluğundaki bir tüpün dibinde depolar.",
        "Çiçek nektarını yapraklarının üzerinde depolar.",
        "Otuz santimetre uzunluğundaki tüpler, çiçeğin nektarını hızla buharlaştırarak böceklerin ona ulaşmasını tamamen imkânsız hale getirir.",
        "Çiçeğin hiç nektarı yoktur.",
        "Nektar, tüpün dışına akar.",
      ],
      "'stores its nectar' 'nektarını depolar', 'at the bottom of a tube about thirty centimetres long' 'yaklaşık otuz santimetre uzunluğundaki bir tüpün dibinde' karşılığıdır.",
    ],
    [
      "Several of the scientists died of hunger while guarding the collection.",
      [
        "Bilim insanlarının birkaçı koleksiyonu korurken açlıktan öldü.",
        "Bilim insanları koleksiyonu yiyerek açlıktan kurtuldu.",
        "Koleksiyonu korumakla görevlendirilen bilim insanları, açlık başlamadan önce kentten ayrılarak tohumları güvenli bir yere taşıdı.",
        "Koleksiyon, bilim insanlarını açlıktan korudu.",
        "Bilim insanları koleksiyonu hiç görmedi.",
      ],
      "'Several of the scientists died of hunger' 'bilim insanlarının birkaçı açlıktan öldü', 'while guarding the collection' 'koleksiyonu korurken' karşılığıdır.",
    ],
    [
      "The plant appears to count the number of times its hairs are touched.",
      [
        "Bitki, tüylerine kaç kez dokunulduğunu sayıyor gibi görünüyor.",
        "Bitki, tüylerine dokunulmasını engelliyor gibi görünüyor.",
        "Tüylerine dokunulduğunu fark edemeyen bitki, böcekleri yakalamak için tamamen rüzgârın getirdiği tesadüfi hareketlere güveniyor gibi görünüyor.",
        "Bitkinin hiç tüyü yoktur.",
        "Bitki, böceklerin sayısını sayar.",
      ],
      "'appears to count' 'sayıyor gibi görünüyor', 'the number of times its hairs are touched' 'tüylerine kaç kez dokunulduğunu' karşılığıdır.",
    ],
    [
      "Older trees may support young seedlings growing in their shade.",
      [
        "Yaşlı ağaçlar gölgelerinde büyüyen genç fidanları destekleyebilir.",
        "Genç fidanlar, yaşlı ağaçların gölgesinde hiç büyüyemez.",
        "Gölgelerinde genç fidan büyümesine izin vermeyen yaşlı ağaçlar, toprağa zehirli maddeler salgılayarak rakiplerinin gelişmesini engeller.",
        "Yaşlı ağaçlar fidanlara gölge yapmaz.",
        "Fidanlar yaşlı ağaçları destekler.",
      ],
      "'Older trees may support' 'yaşlı ağaçlar destekleyebilir', 'young seedlings growing in their shade' 'gölgelerinde büyüyen genç fidanları' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Ingenhousz, bir yaz boyunca beş yüzden fazla deney yaptı.",
      [
        "Ingenhousz carried out more than five hundred experiments over one summer.",
        "Ingenhousz spent five hundred summers carrying out experiments.",
        "Ingenhousz planned to carry out more than five hundred experiments, but he was called back to the Austrian court before he could complete them.",
        "Five hundred scientists helped Ingenhousz.",
        "Ingenhousz carried out experiments only in winter.",
      ],
      "'bir yaz boyunca' 'over one summer', 'beş yüzden fazla deney yaptı' 'carried out more than five hundred experiments' karşılığıdır.",
    ],
    [
      "Çay bitkileri bu kutularda Çin'den Hindistan'a kaçırıldı.",
      [
        "Tea plants were smuggled from China to India in these cases.",
        "Tea plants were sent from India to China in these cases.",
        "Tea plants could not survive the journey from China to India, even in these cases, so seeds were sent instead and planted in nurseries.",
        "These cases were made in China.",
        "India banned tea plants.",
      ],
      "'Çin'den Hindistan'a' 'from China to India', 'bu kutularda kaçırıldı' 'were smuggled in these cases' karşılığıdır.",
    ],
    [
      "Güve, Darwin'in öngörüsünden kırk yıldan fazla süre sonra keşfedildi.",
      [
        "The moth was discovered more than forty years after Darwin's prediction.",
        "Darwin discovered the moth forty years before his prediction.",
        "Darwin's prediction was rejected for more than forty years, and the moth was never found, although many naturalists searched for it on the island.",
        "The moth predicted Darwin's discovery.",
        "The moth lived for forty years.",
      ],
      "'Darwin'in öngörüsünden kırk yıldan fazla süre sonra' 'more than forty years after Darwin's prediction', 'güve keşfedildi' 'the moth was discovered' karşılığıdır.",
    ],
    [
      "Tohum, bir kalenin kalıntıları arasında bulunmuştu.",
      [
        "The seed had been found among the ruins of a fortress.",
        "The fortress had been built from seeds.",
        "The seed had been bought from a market near the fortress, where farmers had been selling dates for many centuries.",
        "The seed was found in a museum.",
        "The fortress was destroyed by the seed.",
      ],
      "'bir kalenin kalıntıları arasında' 'among the ruins of a fortress', 'tohum bulunmuştu' 'the seed had been found' karşılığıdır.",
    ],
    [
      "Kasa, dünya çapında bir milyondan fazla tohum örneği barındırıyor.",
      [
        "The vault holds more than a million seed samples from around the world.",
        "The vault sends a million seeds around the world each year.",
        "The vault was designed to hold a million seed samples, but so far only a few hundred countries have sent seeds to be stored there.",
        "The vault holds seeds from only one country.",
        "A million vaults hold seeds.",
      ],
      "'dünya çapında bir milyondan fazla tohum örneği' 'more than a million seed samples from around the world', 'barındırıyor' 'holds' karşılığıdır.",
    ],
    [
      "Bambu türleri onlarca yıl çiçek açmadan yaşayabilir.",
      [
        "Bamboo species can live for decades without flowering.",
        "Bamboo species flower every year.",
        "Bamboo species flower several times a decade, which makes them a reliable source of food for animals living in the forests of Asia.",
        "Bamboo never lives for more than a decade.",
        "Bamboo flowers are used as food.",
      ],
      "'onlarca yıl çiçek açmadan' 'for decades without flowering', 'bambu türleri yaşayabilir' 'bamboo species can live' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1862, Charles Darwin received a box of orchids from a grower, including a specimen of Angraecum sesquipedale, a star-shaped white orchid from Madagascar. What astonished him was the flower's nectar spur, a narrow green tube about thirty centimetres long, with nectar only in the bottom few centimetres. Darwin reasoned that the flower must be pollinated by an insect able to reach the nectar, and he predicted in his book on orchid pollination that Madagascar must be home to a moth with a tongue long enough to do so. As the moth pushed its tongue down the tube, he argued, its head would press against the flower's pollen, which would then be carried to the next flower. Many entomologists were sceptical, and some ridiculed the idea, since no such insect was known. In 1903, however, two zoologists described a hawk moth from Madagascar with a tongue more than twenty centimetres long, and they named a subspecies predicta in honour of the prediction. Remarkably, the moth was not actually filmed visiting the orchid and carrying away pollen until 1992. The case is often cited as a classic example of coevolution, in which two species evolve in response to each other: flowers with longer spurs were more effectively pollinated, while moths with longer tongues obtained more nectar.",
      questions: [
        [
          "According to the passage, Darwin's prediction was based on ----.",
          [
            "the unusual length of the flower's nectar tube",
            "a moth he had seen in Madagascar",
            "the colour of the orchid",
            "reports from entomologists who had studied insects on the island for many years",
            "the size of the orchid's leaves",
          ],
          "Metne göre çiçeğin yaklaşık otuz santimetre uzunluğundaki nektar mahmuzu onu şaşırtmıştı.",
        ],
        [
          "It can be understood from the passage that the 1903 discovery ----.",
          [
            "supported Darwin's prediction",
            "proved Darwin wrong",
            "was filmed",
            "showed that the orchid was pollinated by a bird with a very long beak",
            "took place in 1862",
          ],
          "Uzun dilli bir güvenin tanımlanması öngörüyü destekledi.",
        ],
        [
          "The passage presents the relationship between the orchid and the moth as an example of ----.",
          [
            "two species influencing each other's evolution",
            "a parasite harming its host",
            "competition for food",
            "a species that evolved without any connection to other organisms in its environment",
            "accidental pollination",
          ],
          "Ortak evrimin klasik bir örneği olarak sunulur.",
        ],
      ],
    },
    {
      text:
        "Nikolai Vavilov, a Russian botanist and geneticist, believed that the key to ending famine lay in the genetic diversity of crop plants. In the 1920s and 1930s, he led more than a hundred expeditions to dozens of countries across five continents, collecting seeds of wheat, rice, maize, potatoes and many other crops, including wild relatives. He concluded that crops had been domesticated in a small number of 'centres of origin', where their genetic diversity was greatest. At the Institute of Plant Industry in Leningrad, he built the world's largest seed collection, containing more than two hundred thousand samples. Vavilov's commitment to genetics set him against Trofim Lysenko, an agronomist favoured by Stalin, who rejected genetics. The secret police detained Vavilov in 1940, and three years later he starved to death in a prison cell. Meanwhile, from September 1941, Leningrad was besieged by German forces for nearly nine hundred days, and hundreds of thousands of its inhabitants died of hunger. Scientists at the institute protected the seed collection from the starving population and from rats, hiding samples in the basement and taking turns to guard them. Although they were surrounded by edible seeds, several of the staff died of starvation rather than eat the collection. Much of it survived, and it remains an important resource for plant breeders today.",
      questions: [
        [
          "According to the passage, Vavilov believed that crop diversity ----.",
          [
            "was important for preventing famine",
            "was harmful to farmers",
            "was greatest in Russia",
            "should be reduced by growing only the most productive varieties of wheat and rice",
            "could be found only in Europe",
          ],
          "Metne göre kıtlığı sona erdirmenin anahtarının ekin bitkilerinin genetik çeşitliliğinde yattığına inanıyordu.",
        ],
        [
          "It can be inferred from the passage that Vavilov's arrest was connected to ----.",
          [
            "his disagreement with an official favoured by Stalin",
            "his expeditions abroad",
            "the siege of Leningrad",
            "his decision to sell part of the seed collection to institutes in other countries",
            "a famine",
          ],
          "Stalin'in desteklediği Lisenko ile çatışmaya girmişti.",
        ],
        [
          "The behaviour of the institute's staff during the siege shows their ----.",
          [
            "commitment to preserving the collection",
            "lack of food knowledge",
            "fear of rats",
            "wish to sell the seeds to the starving inhabitants of the city at high prices",
            "support for Lysenko",
          ],
          "Koleksiyonu yemek yerine açlıktan ölmeyi göze alarak korudular.",
        ],
      ],
    },
    {
      text:
        "In the 1960s, archaeologists excavating Masada, an ancient fortress overlooking the Dead Sea in Israel, found a small number of date palm seeds in a storage jar. The Judean date palm had once been famous for its sweet fruit and medicinal value, but it had disappeared from the region by around the fifth century. The seeds were stored in a drawer at a university for about forty years. In 2005, Sarah Sallon, a researcher studying traditional medicine, and Elaine Solowey, an expert in desert agriculture, obtained three of them and attempted to germinate them. Solowey soaked the seeds in warm water, treated them with fertiliser and a plant hormone, and planted them. To general surprise, one of them sprouted. Radiocarbon dating of fragments of the seed's shell showed that it was about two thousand years old, making it one of the oldest seeds ever to germinate. The seedling, nicknamed Methuselah, grew into a healthy tree. Because date palms are either male or female, it could not produce fruit by itself; it turned out to be male. In later years, the researchers germinated several more ancient seeds, some of which proved to be female, and in 2020 Methuselah's pollen was used to fertilise one of them, which produced dates.",
      questions: [
        [
          "According to the passage, the Judean date palm ----.",
          [
            "had died out in the region many centuries ago",
            "was common in modern Israel",
            "was discovered in 2005",
            "had never produced fruit because all of the ancient trees were male",
            "grew only at Masada",
          ],
          "Metne göre yaklaşık beşinci yüzyıla kadar bölgeden yok olmuştu.",
        ],
        [
          "Radiocarbon dating was used in order to ----.",
          [
            "establish the age of the seed",
            "help the seed grow",
            "identify its sex",
            "find out which of the researchers had planted the seeds first in the desert",
            "measure the sweetness of the fruit",
          ],
          "Tohumun yaşını belirlemek için kullanıldı.",
        ],
        [
          "It can be understood from the passage that Methuselah could not produce fruit alone because ----.",
          [
            "it was a male tree",
            "it was too old",
            "the soil was poor",
            "the researchers had not given it enough fertiliser and water during its first years",
            "it was damaged",
          ],
          "Hurma ağaçları erkek ya da dişidir; Methuselah erkekti.",
        ],
      ],
    },
    {
      text:
        "The Venus flytrap, a carnivorous plant native to a small area of wetlands in North and South Carolina, catches insects with leaves that form a pair of hinged lobes. On the inner surface of each lobe are a few stiff trigger hairs. If an insect touches one hair, the plant produces an electrical signal, but the trap does not close. Only if a second hair is touched within about twenty to thirty seconds does it snap shut, in about a tenth of a second. Scientists believe that this requirement prevents the plant from wasting energy closing on raindrops or falling debris. In 2016, a team led by the German biophysicist Rainer Hedrich showed that the plant's counting goes further. By stimulating the hairs artificially, they found that after the trap has closed, further touches by the struggling insect cause it to seal tightly, and after five touches the plant begins to produce digestive enzymes and to activate genes that absorb nutrients such as sodium. The more the insect struggles, the more enzymes the plant produces. The flytrap obtains nutrients from insects because the soils in which it grows are poor in nitrogen. Despite its fame, wild populations are shrinking because wetlands are being drained and poachers dig up plants, and taking it from the wild is now a crime in North Carolina.",
      questions: [
        [
          "According to the passage, the flytrap closes only after two touches in order to ----.",
          [
            "avoid closing on things that are not prey",
            "catch larger insects",
            "produce more enzymes",
            "give the insect a chance to escape before the plant begins to digest it",
            "save water",
          ],
          "Metne göre yağmur damlası ya da düşen döküntülere kapanarak enerji israfını önler.",
        ],
        [
          "Hedrich's research showed that ----.",
          [
            "further touches trigger digestion",
            "the plant cannot count",
            "the trap closes slowly",
            "the plant produces its enzymes before an insect has touched any of the hairs",
            "flytraps eat raindrops",
          ],
          "Kapanma sonrası beş dokunuştan sonra sindirim enzimleri üretilmeye başlanır.",
        ],
        [
          "It can be inferred from the passage that the flytrap catches insects because ----.",
          [
            "it lacks certain nutrients in its environment",
            "it has no leaves",
            "insects damage it",
            "it cannot produce sugars by photosynthesis like other green plants do",
            "it needs water",
          ],
          "Yetiştiği topraklar azot bakımından fakirdir.",
        ],
      ],
    },
    {
      text:
        "Traditionally, foresters regarded trees as competitors, struggling against each other for light, water and nutrients. In the 1990s, the Canadian ecologist Suzanne Simard challenged this view. Most trees form partnerships with fungi whose thread-like filaments, called hyphae, grow into or around their roots. The fungi help the trees to absorb water and minerals from the soil and in return receive sugars produced by photosynthesis. Because a single fungus can connect to many trees, sometimes of different species, these partnerships can form extensive underground networks. In a famous experiment published in 1997, Simard covered young birch and fir trees in a forest in British Columbia with plastic bags, injected them with carbon dioxide containing different forms of carbon, and later measured where the carbon ended up. She found that carbon passed from one species to the other through the soil, and that shaded fir trees received more carbon from birches than fir trees growing in the sun. Later studies suggested that large, old 'mother trees' may be connected to many younger trees and support them. The idea, popularly called the 'wood wide web', attracted enormous public interest. Some scientists, however, argue that the evidence for large-scale cooperation between trees has been overstated, and that the amounts of carbon transferred may be too small to matter much.",
      questions: [
        [
          "According to the passage, the fungi benefit from their partnership with trees by ----.",
          [
            "receiving sugars",
            "obtaining light",
            "absorbing water from leaves",
            "using the trees' roots to spread their spores over long distances through the forest",
            "killing weaker trees",
          ],
          "Metne göre karşılığında fotosentezle üretilen şekerleri alırlar.",
        ],
        [
          "Simard's 1997 experiment suggested that ----.",
          [
            "carbon could move between different tree species",
            "birches and firs never interact",
            "shaded trees receive less carbon",
            "fungi produce carbon dioxide that is absorbed directly through the leaves of young trees",
            "plastic bags kill trees",
          ],
          "Karbon topraktan bir türden diğerine geçebiliyordu.",
        ],
        [
          "The passage indicates that some scientists believe ----.",
          [
            "the extent of cooperation between trees has been exaggerated",
            "trees do not need fungi",
            "mother trees do not exist",
            "the networks are far larger and more important than Simard had suggested",
            "carbon cannot enter the soil",
          ],
          "Ağaçlar arası büyük ölçekli işbirliğinin kanıtlarının abartıldığını savunurlar.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The titan arum, which grows wild only on the Indonesian island of Sumatra, forms a flowering spike that can be taller than a person, sometimes more than three metres tall. ---- This attracts carrion beetles and flies, which normally lay their eggs in dead animals, and they carry pollen from one plant to another.",
      [
        "When it blooms, it releases a powerful smell resembling rotting meat and warms itself to body temperature.",
        "Sumatra is a large island.",
        "Many flowers are colourful.",
        "The first specimen to flower outside Indonesia bloomed at Kew Gardens in 1889, more than ten years after seeds had been sent there by an Italian botanist.",
        "Rainforests are very humid.",
      ],
      "Boşluktan sonra 'This attracts' ile böceklerin çekildiği anlatılır; boşluğa çiçeğin çürüyen et kokusu yaydığını ve vücut sıcaklığına kadar ısındığını söyleyen cümle gelmelidir.",
    ],
    [
      "In Utah, a grove of around forty-seven thousand quaking aspen trees covers more than forty hectares. ---- Named Pando, meaning 'I spread', it is considered one of the heaviest known organisms on Earth.",
      [
        "Genetic tests have shown that all the trees grow from a single root system and are genetically identical.",
        "Utah has many national parks.",
        "Aspen leaves move in the wind.",
        "In recent decades, deer and cattle have eaten many of the young shoots, and scientists are concerned that few new stems are replacing the old trees as they die.",
        "Trees produce oxygen.",
      ],
      "Boşluktan sonra 'tek organizma' olarak kabul edildiği anlatılır; boşluğa tüm ağaçların tek bir kök sisteminden çıktığını ve genetik olarak aynı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 2008, the Svalbard Global Seed Vault opened inside a mountain on a remote Norwegian island in the Arctic. ---- In 2015, it made its first withdrawal, when researchers whose seed bank in Syria had been damaged by war requested samples.",
      [
        "It was designed as a backup for the world's seed banks, storing copies of their collections in case of disaster.",
        "Norway has many fjords.",
        "Seeds come in many sizes.",
        "The entrance to the vault is decorated with an artwork made of mirrors, prisms and steel, which reflects the polar light in summer and glows in the dark winter.",
        "The Arctic is very cold.",
      ],
      "Boşluk kasanın amacını açıklayan bir cümle gerektirir; boşluğa dünyadaki tohum bankalarının yedeği olarak tasarlandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1910s, two American scientists, Wightman Garner and Harry Allard, noticed that a new variety of tobacco grew huge in summer but flowered only when grown in a greenhouse in winter. ---- This phenomenon, known as photoperiodism, explains why many plants flower at particular times of year.",
      [
        "Through experiments, they showed that the plant was responding to the length of day and night.",
        "Tobacco is grown in warm regions.",
        "Greenhouses are made of glass.",
        "The variety had been discovered by a farmer in Maryland, who noticed that one plant in his field had grown much taller than the others and had not produced any flowers.",
        "Many plants flower in spring.",
      ],
      "Boşluktan sonra 'This phenomenon' ifadesi gelir; boşluğa bitkinin gece-gündüz uzunluğuna tepki verdiğini gösterdiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "Some species of bamboo flower only once every several decades, and when they do, all the plants of that species flower at the same time, even in different countries. ---- The sudden abundance of seeds can cause populations of rats to explode, leading to crop damage and famine in some regions.",
      [
        "After producing seeds, the bamboo plants die.",
        "Bamboo is used in construction.",
        "Pandas eat bamboo.",
        "Scientists still do not fully understand how plants that have been separated for many years and grow in different climates are able to flower in the same year.",
        "Rats live in many habitats.",
      ],
      "Boşluk tohum üretimi sonrasını anlatan bir cümle gerektirir; boşluğa bambu bitkilerinin tohum ürettikten sonra öldüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In 2014, researchers at the University of Missouri played recordings of caterpillars chewing leaves to plants of the mustard family. ---- The researchers suggested that plants may be able to detect vibrations caused by their enemies.",
      [
        "The plants then produced more defensive chemicals than plants that had heard silence or the sound of wind.",
        "Caterpillars turn into butterflies.",
        "Mustard is used in cooking.",
        "The plants used in the study are among the most widely studied plants in biology, and their entire genetic code was published in 2000 after an international research effort.",
        "Missouri is in the Midwest.",
      ],
      "Boşluktan sonra bitkilerin titreşimleri algılayabileceği önerisi gelir; boşluğa bitkilerin daha fazla savunma kimyasalı ürettiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "During the day, young sunflower plants track the sun across the sky from east to west.",
        "At night, they slowly turn back to face east again.",
        "Sunflower seeds are a popular snack.",
        "Researchers found that this movement is controlled by the plant's internal clock.",
        "Mature sunflowers stop moving and face east permanently, which helps to attract bees in the morning.",
      ],
      odd: 2,
      why: "Parça ayçiçeklerinin güneşi izlemesini anlatır. Ayçiçeği çekirdeğinin popüler bir atıştırmalık olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Rafflesia arnoldii produces the largest single flower in the world, up to a metre across.",
        "It is a parasite that lives inside vines and has no leaves, stems or roots of its own.",
        "Indonesia consists of thousands of islands.",
        "The flower smells of rotting flesh to attract flies.",
        "It lasts only a few days before it decays.",
      ],
      odd: 2,
      why: "Parça dünyanın en büyük çiçeği Rafflesia'yı anlatır. Endonezya'nın binlerce adadan oluştuğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tumbleweeds are plants that break away from their roots when they die and dry out.",
        "The wind rolls them across open land, scattering their seeds as they go.",
        "Westerns are films set in the American frontier.",
        "A single plant can spread hundreds of thousands of seeds.",
        "Some tumbleweeds are invasive species that cause problems for farmers.",
      ],
      odd: 2,
      why: "Parça rüzgârla yuvarlanarak tohum yayan bitkileri anlatır. Kovboy filmlerinin Amerikan sınırında geçtiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Coffee plants produce caffeine in their leaves and seeds.",
        "Caffeine is toxic to many insects and helps to protect the plant.",
        "Brazil grows more coffee than any other country.",
        "Small amounts of caffeine in the nectar of coffee flowers also seem to help bees remember the flowers.",
        "This encourages the bees to return and pollinate them.",
      ],
      odd: 2,
      why: "Parça kahve bitkisinin kafeini nasıl kullandığını anlatır. Brezilya'nın en çok kahve üreten ülke olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The seeds of the dandelion are carried by the wind on tiny parachutes made of fine bristles.",
        "Studies have shown that air flowing through the bristles creates a stable ring of air above them.",
        "This allows the seeds to travel long distances.",
        "Dandelion leaves can be eaten in salads.",
        "Engineers hope to use the same principle to design small flying devices.",
      ],
      odd: 3,
      why: "Parça karahindiba tohumlarının uçuşunu anlatır. Karahindiba yapraklarının salatada yenebildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The giant saguaro cactus grows in the deserts of Arizona and Mexico.",
        "Arizona became a state in 1912.",
        "It can store hundreds of litres of water in its pleated stem, which expands after rain.",
        "It grows very slowly and may not produce arms until it is fifty years old.",
        "Its flowers are pollinated by bats, birds and bees.",
      ],
      odd: 1,
      why: "Parça dev saguaro kaktüsünü anlatır. Arizona'nın 1912'de eyalet olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
