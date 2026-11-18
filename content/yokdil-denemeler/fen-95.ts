import type { YokdilDeneme } from "./types";

export const FEN_95: YokdilDeneme = {
  no: 95,
  field: "fen",
  vocab: [
    [
      "The bridge's deck was so light and slender that, from a distance, it seemed to ---- above the clouds that filled the valley.",
      ["float", "sink", "crumble", "shrink", "melt"],
      "Köprü tabliyesinin o kadar hafif ve ince olduğu ki uzaktan vadiyi dolduran bulutların üzerinde 'süzülüyormuş, yüzüyormuş' (float) gibi göründüğü anlatılır.",
    ],
    [
      "The artificial island has continued to ---- into the soft clay of the seabed since the airport opened.",
      ["subside", "rise", "expand", "flow", "freeze"],
      "Yapay adanın havalimanı açıldığından beri deniz tabanının yumuşak kilinin içine 'çökmeye' (subside) devam ettiği anlatılır.",
    ],
    [
      "A prolonged drought forced the canal's operators to ---- the number of ships allowed to pass each day.",
      ["restrict", "double", "celebrate", "ignore", "release"],
      "Uzun süren kuraklığın kanal işletmecilerini her gün geçmesine izin verilen gemi sayısını 'sınırlamaya' (restrict) zorladığı anlatılır.",
    ],
    [
      "The final cost of the project was several times the original ----.",
      ["estimate", "loss", "profit", "debt", "tax"],
      "Projenin nihai maliyetinin başlangıçtaki 'tahminin' (estimate) birkaç katı olduğu anlatılır.",
    ],
    [
      "The domes are made of hexagonal panels of plastic that are far lighter than glass and allow sunlight to ---- them.",
      ["penetrate", "avoid", "damage", "cover", "reflect"],
      "Kubbelerin camdan çok daha hafif olan ve güneş ışığının içlerine 'nüfuz etmesine, geçmesine' (penetrate) izin veren altıgen plastik panellerden yapıldığı anlatılır.",
    ],
    [
      "Engineers had to ---- a way of crossing the strait without blocking the flight path of a nearby airport.",
      ["come up with", "look up to", "put up with", "run out of", "get on with"],
      "Mühendislerin yakındaki bir havalimanının uçuş yolunu engellemeden boğazı geçmenin bir yolunu 'bulmak' (come up with) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the viaduct opened, traffic jams in the town below ---- a summer tradition for decades.",
      ["had been", "are", "will be", "have been", "were being"],
      "Geçmişteki bir andan önce süregelmiş durum: 'had been'.",
    ],
    [
      "If the strait had been crossed by a bridge alone, it ---- with the flights of the nearby airport.",
      ["would have interfered", "interferes", "will interfere", "had interfered", "is interfering"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin ana yan cümlesi: 'would have interfered'.",
    ],
    [
      "The tunnel sections ---- on land and then floated out to sea before being sunk into a trench.",
      ["were built", "built", "have built", "build", "are building"],
      "Tünel bölümleri inşa eden değil inşa edilendir; edilgen geçmiş zaman: 'were built'.",
    ],
    [
      "---- the canal uses no pumps, it needs huge amounts of fresh water to operate its locks.",
      ["Because", "Although", "Unless", "So that", "Until"],
      "Kanalın pompa kullanmaması ile kilitleri çalıştırmak için büyük miktarda tatlı suya ihtiyaç duyması neden-sonuç ilişkisidir: 'Because'.",
    ],
    [
      "The engineer ---- design was chosen had worked on several earlier bridges in France.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin tasarımı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the island had settled for several months ---- construction of the terminal begin.",
      ["could", "had", "was", "has", "did it"],
      "'Only after' ile başlayan cümlede devrik yapı, kip yardımcı fiili: 'could'.",
    ],
    [
      "The clay pit ---- the gardens were built had been used for mining for more than a century.",
      ["in which", "which", "whose", "when", "that"],
      "Bahçelerin kil ocağının içine inşa edildiği belirtilir; edat + ilgi zamiri: 'in which'.",
    ],
    [
      "The longer the drought lasted, ---- water was available for the locks.",
      ["the less", "the fewer", "less", "the least", "so little"],
      "'The more ..., the less ...' paralel yapısı; sayılamayan 'water' ile: 'the less'.",
    ],
    [
      "The government demanded that the project ---- on time and within budget.",
      ["be completed", "is completed", "was completed", "to be completed", "completing"],
      "'demand that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be completed'.",
    ],
    [
      "The canal is estimated ---- the journey between New York and San Francisco by about thirteen thousand kilometres.",
      ["to have shortened", "shortening", "to be shortened", "shortened", "having shorten"],
      "Geçmişte gerçekleşmiş ve etkisi süren olay için geçmiş mastar: 'to have shortened'.",
    ],
    [
      "The airport was built on an island in the bay ---- its aircraft would not disturb people living nearby.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Havalimanının adaya inşa edilmesinin amacı uçakların yakında yaşayanları rahatsız etmemesidir: 'so that'.",
    ],
    [
      "The engineers had the deck ---- across the valley a few metres at a time.",
      ["pushed", "push", "pushing", "to push", "pushes"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'pushed'.",
    ],
    [
      "Had the columns been built any lower, the bridge ---- far less impressive.",
      ["would have looked", "looks", "will look", "had looked", "is looking"],
      "Devrik üçüncü tip koşul cümlesinin ana yan cümlesi: 'would have looked'.",
    ],
    [
      "Neither the bridge nor the tunnels ---- open to traffic until the summer of 2000.",
      ["were", "was", "has been", "is being", "be"],
      "'Neither ... nor' yapısında fiil yakındaki çoğul özneye (the tunnels) uyar: 'were'.",
    ],
  ],
  cloze: [
    {
      text:
        "In October 2018, a crossing fifty-five kilometres long was opened across the Pearl River Delta in southern China, linking Hong Kong with the cities of Zhuhai and Macau. Before it was built, the journey between Hong Kong and Zhuhai by road took about four hours, {1} it can now be completed in about forty-five minutes. The crossing consists of a series of bridges and a tunnel almost seven kilometres long, which connects two artificial islands built in the sea. The engineers chose a tunnel for this section because the channel carries an extraordinarily heavy flow of cargo vessels, {2} a bridge high enough for the largest ships to pass beneath it would have interfered with aircraft using Hong Kong's airport. The tunnel was made of thirty-three enormous concrete sections, each about as heavy as a large aircraft carrier, {3} these were floated out to sea and sunk into a trench dug in the seabed. The project took almost nine years to build, {4} it cost about twenty billion dollars. It has been praised as a remarkable feat of engineering, {5} critics have pointed out that relatively few vehicles use it, partly because drivers need special permits and must change from driving on the left to driving on the right as they travel between the regions.",
      blanks: [
        [
          "(21) ----",
          ["but", "because", "so", "unless", "or"],
          "Yolculuğun önceden dört saat sürmesi ile şimdi kırk beş dakikada tamamlanması zıtlık bildirir: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "until"],
          "Kanalın yoğun bir deniz yolu olması ve yüksek bir köprünün uçakları engellemesi birbirine eklenen nedenlerdir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "so that"],
          "Bölümlerin büyük ve ağır olması ve denize çıkarılıp batırılması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "until"],
          "Projenin dokuz yıl sürmesi ve yirmi milyar dolara mal olması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "because", "so", "unless", "or"],
          "Projenin övülmesi ile eleştirmenlerin az araç kullandığına dikkat çekmesi zıtlık bildirir: 'but'.",
        ],
      ],
    },
    {
      text:
        "On the Paraná River, which forms part of the border between Brazil and Paraguay, stands one of the largest hydroelectric power stations in the world. The Itaipu Dam was built jointly by the two countries in the 1970s and early 1980s, {1} it is almost eight kilometres long and nearly two hundred metres high at its highest point. To build it, engineers first had to divert the river, which is one of the largest in South America, {2} they dug a channel two kilometres long through solid rock and blasted away tens of millions of tonnes of earth and stone. The dam's twenty turbines can generate about fourteen thousand megawatts of electricity, {3} in some years the station has produced more electricity than any other in the world. The electricity is shared equally between the two countries, {4} Paraguay uses only a small part of its share and sells most of the rest to Brazil. The project, however, also had serious costs. The reservoir submerged over a thousand square kilometres of land, {5} thousands of families, many of them from indigenous communities, were forced to leave their land. It also submerged a series of spectacular waterfalls, which had been among the largest in the world.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Barajın iki ülkece inşa edilmesi ve boyutları birbirine eklenen bilgilerdir: 'and'.",
        ],
        [
          "(27) ----",
          ["so", "although", "unless", "or", "until"],
          "Nehri saptırmak zorunda olmalarının sonucu kayadan kanal kazmalarıdır: 'so'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "so that"],
          "Türbinlerin çok elektrik üretmesi ve bazı yıllarda dünyada en çok üretim yapması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["but", "because", "so", "unless", "or"],
          "Elektriğin eşit paylaşılması ile Paraguay'ın payının çoğunu satması zıtlık bildirir: 'but'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "although", "or", "until"],
          "Baraj gölünün geniş bir alanı su altında bırakması ve binlerce ailenin topraklarını terk etmesi birbirini izler: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the viaduct's tallest column is higher than the Eiffel Tower, ----.",
      [
        "the deck it supports is only about four metres thick",
        "the Eiffel Tower is in Paris",
        "columns are made of concrete",
        "France is a large country",
        "the bridge was built entirely of wood and stone by local farmers",
      ],
      "'Although' zıtlık ister: viyadüğün en yüksek ayağı Eyfel Kulesi'nden yüksek olsa da taşıdığı tabliye yalnızca yaklaşık dört metre kalınlığındadır.",
    ],
    [
      "If the canal's locks were not supplied by a large lake, ----.",
      [
        "they would need pumps to raise the water",
        "lakes contain fresh water",
        "the canal was opened in 1914",
        "ships are very heavy",
        "far more ships would be able to pass through the canal each day",
      ],
      "İkinci tip koşul: kanalın kilitleri büyük bir gölden beslenmeseydi suyu yükseltmek için pompalara ihtiyaç duyulurdu.",
    ],
    [
      "----, the engineers pushed the steel deck out across the columns from both sides of the valley.",
      [
        "Using hydraulic jacks controlled by computers",
        "Because steel is heavy",
        "Unless the valley was wide",
        "In spite of being engineers",
        "Since the deck had already been lifted into place by helicopters",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: bilgisayarla denetlenen hidrolik krikolar kullanan mühendisler çelik tabliyeyi vadinin iki yanından ayaklar üzerinde ileri itti.",
    ],
    [
      "Because the seabed beneath the airport consists of soft clay, ----.",
      [
        "the island has sunk much more than engineers had predicted",
        "clay is used to make pottery",
        "the airport is very busy",
        "the sea is deep",
        "the island has risen several metres above its original height",
      ],
      "Neden-sonuç: havalimanının altındaki deniz tabanı yumuşak kilden oluştuğu için ada mühendislerin öngördüğünden çok daha fazla çökmüştür.",
    ],
    [
      "The new locks were built with large basins beside them ----.",
      [
        "so that much of the water used in each passage could be reused",
        "because the ships were small",
        "although there was plenty of water",
        "unless it rained",
        "since the engineers wanted to use as much water as possible",
      ],
      "Amaç bildiren yapı: yeni kilitler her geçişte kullanılan suyun büyük kısmı yeniden kullanılabilsin diye yanlarında büyük havuzlarla inşa edildi.",
    ],
    [
      "The gardens were built in a disused clay pit, ----.",
      [
        "which had been left as a barren hole after mining ended",
        "which is a pit",
        "that the gardens",
        "whose clay",
        "when the first plants appeared on the Earth",
      ],
      "İlgi cümlesi kil ocağını niteler: bahçeler madencilik bitince çorak bir çukur olarak bırakılmış, kullanılmayan bir kil ocağına inşa edildi.",
    ],
    [
      "Unlike most airports, which are built on land near cities, ----.",
      [
        "this one stands on an artificial island several kilometres offshore",
        "most airports are busy",
        "cities have many people",
        "aircraft are noisy",
        "this one sits downtown, squeezed between office towers and crowded streets",
      ],
      "'Unlike' karşıtlık kurar: şehirlerin yakınında karaya kurulan çoğu havalimanının aksine bu havalimanı kıyıdan birkaç kilometre açıktaki yapay bir adadadır.",
    ],
    [
      "The crossing between the two countries includes an artificial island ----.",
      [
        "where the bridge descends and becomes a tunnel",
        "although the island is small",
        "so that more bridges could be built",
        "unless ships were passing",
        "because the engineers had wanted to build a new holiday resort",
      ],
      "Yer bildiren yapı: iki ülke arasındaki geçiş, köprünün alçalıp tünele dönüştüğü yapay bir ada içerir.",
    ],
    [
      "No sooner had the bridge opened ----.",
      [
        "than it became one of the most photographed structures in France",
        "when the bridge",
        "that the valley",
        "before the columns",
        "than engineers decided to demolish it and build a tunnel",
      ],
      "'No sooner ... than' yapısı: köprü açılır açılmaz Fransa'nın en çok fotoğraflanan yapılarından biri oldu.",
    ],
    [
      "While the domes contain plants from tropical rainforests, ----.",
      [
        "the gardens outside are planted with species suited to the local climate",
        "rainforests are warm",
        "plants need water",
        "the domes are large",
        "the gardens outside are planted with exactly the same tropical species",
      ],
      "'While' zıtlık bildirir: kubbeler tropik yağmur ormanı bitkileri barındırırken dışarıdaki bahçelere yerel iklime uygun türler dikilmiştir.",
    ],
    [
      "The tunnel sections were so heavy ----.",
      [
        "that each weighed about as much as a large aircraft carrier",
        "because the tunnel",
        "than the bridge",
        "although the engineers",
        "so that they could easily be lifted by a small crane",
      ],
      "'so ... that' sonuç yapısı: tünel bölümleri o kadar ağırdı ki her biri büyük bir uçak gemisi kadar ağırdı.",
    ],
  ],
  enTr: [
    [
      "The viaduct carries a motorway more than two hundred and seventy metres above the river.",
      [
        "Viyadük bir otoyolu nehrin iki yüz yetmiş metreden fazla yukarısında taşır.",
        "Viyadük nehri bir otoyolun iki yüz yetmiş metre altında taşır.",
        "Otoyol viyadüğü nehrin yukarısında taşır.",
        "Viyadükte hiç otoyol yoktur.",
        "Viyadük bir demiryolunu nehrin yalnızca birkaç metre yukarısında taşır.",
      ],
      "'The viaduct carries a motorway' 'viyadük bir otoyolu taşır', 'more than two hundred and seventy metres above the river' 'nehrin iki yüz yetmiş metreden fazla yukarısında' karşılığıdır.",
    ],
    [
      "The artificial island has become a home for many species of birds and plants.",
      [
        "Yapay ada pek çok kuş ve bitki türüne yuva olmuştur.",
        "Yapay adada hiçbir kuş ya da bitki yaşamaz.",
        "Kuşlar ve bitkiler yapay adayı inşa etmiştir.",
        "Yapay ada yoktur.",
        "Yapay ada yalnızca turistler için bir otel ve alışveriş merkezi olmuştur.",
      ],
      "'The artificial island has become a home' 'yapay ada yuva olmuştur', 'for many species of birds and plants' 'pek çok kuş ve bitki türüne' karşılığıdır.",
    ],
    [
      "Each ship that passes through the locks uses about two hundred million litres of fresh water.",
      [
        "Kilitlerden geçen her gemi yaklaşık iki yüz milyon litre tatlı su kullanır.",
        "Kilitlerden geçen gemiler hiç su kullanmaz.",
        "İki yüz milyon litre su her gemiyi kilitlerden geçirir.",
        "Kanalda hiç kilit yoktur.",
        "Kilitlerden geçen her gemi yaklaşık iki yüz litre deniz suyu üretir.",
      ],
      "'Each ship that passes through the locks' 'kilitlerden geçen her gemi', 'uses about two hundred million litres of fresh water' 'yaklaşık iki yüz milyon litre tatlı su kullanır' karşılığıdır.",
    ],
    [
      "The airport's buildings were designed so that they could be raised as the island sank.",
      [
        "Havalimanı binaları ada çöktükçe yükseltilebilecek şekilde tasarlandı.",
        "Havalimanı binaları adanın çökmesine neden olacak şekilde tasarlandı.",
        "Ada binaları yükseltildikçe çöktü.",
        "Havalimanında hiç bina yoktu.",
        "Havalimanı binaları ada çökerken suyun altında kalacak şekilde tasarlandı.",
      ],
      "'The airport's buildings were designed so that' 'havalimanı binaları ... şekilde tasarlandı', 'they could be raised as the island sank' 'ada çöktükçe yükseltilebilecek' karşılığıdır.",
    ],
    [
      "The project transformed a scarred industrial landscape into one of the region's most popular attractions.",
      [
        "Proje yara almış bir sanayi alanını bölgenin en popüler cazibe merkezlerinden birine dönüştürdü.",
        "Proje bölgenin en popüler cazibe merkezini bir sanayi alanına dönüştürdü.",
        "Sanayi alanı projeyi bir cazibe merkezine dönüştürdü.",
        "Bölgede hiç cazibe merkezi yoktu.",
        "Proje bölgedeki tüm doğal alanları yok etti ve yerine fabrikalar kurdu.",
      ],
      "'The project transformed a scarred industrial landscape' 'proje yara almış bir sanayi alanını dönüştürdü', 'into one of the region's most popular attractions' 'bölgenin en popüler cazibe merkezlerinden birine' karşılığıdır.",
    ],
    [
      "Before the bridge was built, holiday traffic often caused long queues in the small town.",
      [
        "Köprü yapılmadan önce tatil trafiği küçük kasabada sık sık uzun kuyruklara yol açardı.",
        "Köprü yapıldıktan sonra tatil trafiği küçük kasabada hiç kuyruk oluşturmadı.",
        "Küçük kasaba köprüyü tatil trafiği için yaptı.",
        "Kasabada hiç trafik yoktu.",
        "Köprü yapılmadan önce kasabada hiç araba yoktu ve insanlar yalnızca yürüyordu.",
      ],
      "'Before the bridge was built' 'köprü yapılmadan önce', 'holiday traffic often caused long queues in the small town' 'tatil trafiği küçük kasabada sık sık uzun kuyruklara yol açardı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Köprü 2004'te açıldı.",
      [
        "The bridge was opened in 2004.",
        "The bridge was closed in 2004.",
        "2004 opened the bridge.",
        "There was no bridge.",
        "The bridge was opened in 1904 by a king.",
      ],
      "'Köprü açıldı' 'the bridge was opened', '2004'te' 'in 2004' karşılığıdır.",
    ],
    [
      "Tünel deniz tabanına kazılmış bir hendeğe yerleştirildi.",
      [
        "The tunnel was placed in a trench dug into the seabed.",
        "The tunnel was placed on top of a mountain.",
        "The seabed was placed inside the tunnel.",
        "There was no tunnel.",
        "The tunnel was dug through solid rock beneath a city.",
      ],
      "'Tünel yerleştirildi' 'the tunnel was placed', 'deniz tabanına kazılmış bir hendeğe' 'in a trench dug into the seabed' karşılığıdır.",
    ],
    [
      "Kanal iki okyanusu birbirine bağlar.",
      [
        "The canal connects two oceans.",
        "The canal separates two rivers.",
        "Two oceans connect the canal.",
        "There is no canal.",
        "The canal connects two small lakes in the mountains.",
      ],
      "'Kanal bağlar' 'the canal connects', 'iki okyanusu birbirine' 'two oceans' karşılığıdır.",
    ],
    [
      "Havalimanı 1994'te hizmete girdi.",
      [
        "The airport came into service in 1994.",
        "The airport was closed in 1994.",
        "1994 came into the airport.",
        "There was no airport.",
        "The airport came into service in 2094.",
      ],
      "'Havalimanı hizmete girdi' 'the airport came into service', '1994'te' 'in 1994' karşılığıdır.",
    ],
    [
      "Kubbelerin içinde binlerce bitki türü yetişiyor.",
      [
        "Thousands of plant species grow inside the domes.",
        "No plants grow inside the domes.",
        "Thousands of domes grow inside the plants.",
        "There are no domes.",
        "Only a single species of tree grows inside the domes.",
      ],
      "'Binlerce bitki türü yetişiyor' 'thousands of plant species grow', 'kubbelerin içinde' 'inside the domes' karşılığıdır.",
    ],
    [
      "Proje büyük ölçüde zamanında tamamlandı.",
      [
        "The project was largely completed on time.",
        "The project was never completed.",
        "Time completed the project.",
        "There was no project.",
        "The project was completed twenty years later than planned.",
      ],
      "'Proje tamamlandı' 'the project was completed', 'büyük ölçüde zamanında' 'largely on time' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "For many years, the small town of Millau in southern France was notorious among holidaymakers. The main road from Paris to the Mediterranean coast descended into the valley of the River Tarn and passed through the town, and in summer the traffic often formed queues many kilometres long. Several routes were considered for a new motorway, and in the end engineers decided to cross the valley at a great height. The Millau Viaduct, designed by the French engineer Michel Virlogeux together with the British architect Norman Foster, was opened in December 2004. It is about two and a half kilometres long and carries the motorway more than two hundred and seventy metres above the river. Its deck is supported by seven slender concrete columns, the tallest of which, together with the steel mast above it, reaches a height of more than three hundred and forty metres, taller than the Eiffel Tower. From each mast, cables fan out to hold up the deck, which is only about four metres thick. The deck itself, made of steel, was assembled on the plateaus at either end of the valley and then pushed out over the columns a few hundred millimetres at a time by hydraulic jacks controlled by computers, with temporary supports placed between the columns to help it across the gaps. The two halves met in the middle in 2004, after a little more than three years of construction. Because the valley can be very windy, screens were installed along the sides of the deck to protect vehicles. On some mornings the valley fills with mist, and the bridge seems to float above the clouds. It has become one of the most admired structures in Europe and a popular attraction in its own right.",
      questions: [
        [
          "According to the passage, the viaduct was built mainly to ----.",
          [
            "relieve the heavy summer traffic that passed through the town",
            "connect two cities on the Mediterranean coast",
            "provide a railway link to Paris",
            "attract tourists to the valley",
            "replace an older bridge that had collapsed",
          ],
          "Ana yol vadideki kasabadan geçiyordu ve yazın kilometrelerce kuyruk oluşuyordu; viyadük bu sorunu çözmek için yapıldı.",
        ],
        [
          "The passage states that the steel deck was ----.",
          [
            "assembled at both ends of the valley and pushed out over the columns",
            "lifted into place by large helicopters",
            "built from the river upwards",
            "made of a single piece of concrete",
            "carried across the valley by ships",
          ],
          "Çelik tabliye vadinin iki ucundaki platolarda birleştirilip hidrolik krikolarla ayakların üzerinden ileri itildi.",
        ],
        [
          "It can be inferred from the passage that screens were placed along the deck because ----.",
          [
            "strong winds could be dangerous for vehicles crossing the bridge",
            "drivers wanted to avoid seeing the view",
            "the screens hold up the deck",
            "noise from the bridge disturbed the town",
            "the mist damaged the surface of the road",
          ],
          "Vadi çok rüzgârlı olabildiğinden ekranlar araçları korumak için kurulmuştur.",
        ],
      ],
    },
    {
      text:
        "Since the summer of 2000, Copenhagen in Denmark and Malmö in Sweden have been linked by a fixed crossing about sixteen kilometres long across the strait known as the Øresund. A bridge alone was not considered possible. The strait is an important shipping route, and a bridge high enough for large ships along its entire length would also have obstructed the flight path of Copenhagen's international airport, which lies right on the coast. Instead, the engineers came up with a combination of structures. From the Swedish coast, a bridge almost eight kilometres long carries a motorway on its upper deck and a railway on its lower deck. Its central section, where ships pass beneath, is supported by cables hung from towers more than two hundred metres high. The bridge then descends to an artificial island about four kilometres long, called Peberholm, meaning 'pepper islet', a name chosen to complement an existing natural island nearby called Saltholm, or 'salt islet'. At the end of the island, the road and railway enter a tunnel about four kilometres long, which lies in a trench on the seabed and emerges near the airport. The tunnel was made of twenty concrete sections built on land, which were sealed at both ends, floated out to sea and sunk into place. Peberholm was left to develop naturally, and it has become home to hundreds of species of plants and birds, including some rare ones, which biologists study closely; access to the island is strictly limited. The crossing has encouraged many people to live in one country and work in the other, and the region has increasingly come to be seen as a single economic area.",
      questions: [
        [
          "According to the passage, a bridge across the whole strait was rejected partly because ----.",
          [
            "it would have obstructed the flight path of Copenhagen's airport",
            "the water was too deep for any columns",
            "Sweden refused to pay for it",
            "it would have been too short for trains",
            "the strait freezes every winter",
          ],
          "Büyük gemilerin geçebileceği yükseklikte bir köprü kıyıdaki Kopenhag havalimanının uçuş yolunu da engellerdi.",
        ],
        [
          "The passage states that the artificial island was named Peberholm ----.",
          [
            "to complement the name of a nearby natural island",
            "after the engineer who designed it",
            "because pepper was once grown there",
            "because it was built from crushed rock",
            "in honour of a Swedish king",
          ],
          "Ada, yakındaki 'tuz adacığı' anlamına gelen Saltholm'ü tamamlamak için 'biber adacığı' anlamına gelen Peberholm adını aldı.",
        ],
        [
          "It can be inferred from the passage that access to Peberholm is limited in order to ----.",
          [
            "protect the plants and birds that have settled there",
            "prevent people from swimming in the strait",
            "keep the tunnel entrance secret",
            "allow the island to be used as a farm",
            "make room for a new airport",
          ],
          "Ada kendiliğinden gelişmeye bırakıldı ve nadir türlere yuva oldu; erişimin sınırlanması bu yaşamı korumak içindir.",
        ],
      ],
    },
    {
      text:
        "The Panama Canal, which was opened in 1914, allows ships to travel between the Atlantic and Pacific Oceans without sailing around the southern tip of South America, a journey that can be more than ten thousand kilometres longer. Unlike the Suez Canal, which runs at sea level, the Panama Canal crosses a range of hills, and ships must be raised about twenty-six metres to reach Gatun Lake, an enormous artificial lake created by damming a river, before being lowered again on the other side. This is done by a series of locks, chambers with gates at each end that are filled with or emptied of water. The system uses no pumps; the water flows into the locks by gravity from the lake and is then released into the sea. As a result, each ship that passes through the canal uses about two hundred million litres of fresh water. By the early twenty-first century, many modern ships had become too large for the original locks, and in 2016 a new set of larger locks was opened. To reduce the amount of water they use, each lock was built with three large basins beside it, which store and reuse about sixty per cent of the water used in each passage. Even so, the canal remains highly dependent on rainfall. In 2023, a severe drought, linked in part to the weather pattern known as El Niño, lowered the level of the lake so much that the canal's operators had to restrict the number of ships allowed to pass each day and limit how deeply they could be loaded. Long queues of ships formed at both ends of the canal, and some shipping companies sent their vessels on longer routes instead. The lake also provides drinking water for about half of Panama's population.",
      questions: [
        [
          "According to the passage, ships passing through the Panama Canal must be raised because ----.",
          [
            "the canal crosses a range of hills",
            "the Pacific Ocean is higher than the Atlantic",
            "the canal runs at sea level",
            "the ships are too heavy to float",
            "the lake lies below sea level",
          ],
          "Süveyş'in aksine Panama Kanalı bir tepeler sırasını aşar; gemiler Gatun Gölü'ne ulaşmak için yaklaşık yirmi altı metre yükseltilmelidir.",
        ],
        [
          "The passage states that the basins beside the new locks ----.",
          [
            "store and reuse most of the water used in each passage",
            "pump sea water into the lake",
            "allow two ships to pass at once",
            "provide drinking water for ships' crews",
            "generate electricity for the canal",
          ],
          "Yeni kilitlerin yanındaki üç büyük havuz her geçişte kullanılan suyun yaklaşık yüzde altmışını depolayıp yeniden kullanır.",
        ],
        [
          "It can be inferred from the passage that a drought causes problems for the canal because ----.",
          [
            "the locks depend on fresh water flowing from the lake",
            "ships cannot sail in hot weather",
            "the gates of the locks become stuck",
            "the sea level rises during dry periods",
            "the pumps break down without rain",
          ],
          "Kilitler gölden yer çekimiyle akan tatlı suya bağlıdır; kuraklık gölün seviyesini düşürünce kanalın işleyişi kısıtlanır.",
        ],
      ],
    },
    {
      text:
        "Osaka, Japan's second-largest city, lies on a crowded coastal plain with little spare land, and its old airport was surrounded by houses whose residents complained bitterly about the noise. In the 1980s, the authorities decided to build a new airport on an artificial island in Osaka Bay, about five kilometres from the shore, where aircraft could take off and land at any time of day or night without disturbing anyone. The task was immense. The island, about four kilometres long, was built by dumping millions of cubic metres of rock and earth into water about eighteen metres deep, inside a sea wall. The seabed beneath it, however, consists of thick layers of soft clay, which are gradually compressed by the weight above them. Engineers had expected the island to sink, and they had tried to speed up the process before construction by driving a million drains into the clay to squeeze out the water. Nevertheless, by the time Kansai International Airport opened in 1994, the island had sunk by more than eight metres, much more than predicted, and it has continued to subside since then, though more slowly. To cope with the problem, the terminal building, designed by the Italian architect Renzo Piano, was built on hundreds of columns whose height can be adjusted with hydraulic jacks, so that the building can be kept level as different parts of the ground sink at different rates. The airport has also had to raise its sea walls. In 2018, a powerful typhoon pushed waves over the walls, flooding one of the runways, and a tanker that had been blown out of control struck the bridge linking the island to the mainland, leaving thousands of passengers stranded.",
      questions: [
        [
          "According to the passage, the airport was built on an island in the bay because ----.",
          [
            "aircraft could operate there at any time without disturbing residents",
            "the island already existed before the airport was planned",
            "the seabed was very firm",
            "the authorities wanted to build a new port for ships",
            "the old airport had been destroyed by a typhoon",
          ],
          "Eski havalimanının çevresindekiler gürültüden şikâyet ediyordu; adada uçaklar kimseyi rahatsız etmeden her saatte çalışabilecekti.",
        ],
        [
          "The passage states that the terminal building stands on columns that ----.",
          [
            "can be adjusted to keep the building level",
            "are made entirely of glass",
            "were removed after the island stopped sinking",
            "float on the surface of the sea",
            "were designed to collect rainwater",
          ],
          "Terminal binası, zemin farklı hızlarda çöktükçe binayı düz tutmak için yüksekliği hidrolik krikolarla ayarlanabilen sütunlar üzerine yapıldı.",
        ],
        [
          "It can be inferred from the passage that the events of 2018 showed that ----.",
          [
            "the airport remains vulnerable to extreme weather",
            "the island had stopped sinking completely",
            "the bridge was no longer needed",
            "the sea walls were higher than necessary",
            "typhoons never reach Osaka Bay",
          ],
          "Güçlü bir tayfun dalgaları duvarların üstünden aşırıp pisti su altında bıraktı; havalimanı aşırı hava olaylarına karşı hâlâ savunmasızdır.",
        ],
      ],
    },
    {
      text:
        "For more than a century, the area around St Austell in Cornwall, in south-west England, was dominated by the mining of china clay, a fine white clay used to make porcelain and paper. By the 1990s, one of the old clay pits, about sixty metres deep, had been abandoned and left as a barren hole. The businessman Tim Smit, who had earlier restored a famous historic garden nearby, proposed transforming it into a garden that would show how much people depend on plants. The Eden Project, which opened in 2001, was the result. Its most striking feature is a pair of huge greenhouses, or 'biomes', built against the side of the pit. They consist of a series of linked domes made of steel frames filled with hexagonal panels of a transparent plastic. Each panel is made of three layers of the plastic, inflated with air, which provides insulation, and the panels are far lighter than glass, so the steel frame needed to support them is much lighter too. The larger biome, one of the largest greenhouses in the world, contains a tropical rainforest, with a waterfall and trees that grow to great heights, while the smaller one contains plants from regions with a Mediterranean climate. Outside, the gardens are planted with species suited to the local climate. Building the project required enormous preparation. The pit had to be drained and its steep sides made safe, and because the clay contains few nutrients, about eighty-five thousand tonnes of soil were manufactured from mining waste and composted material. The project, which was largely funded by money from the national lottery, has attracted millions of visitors, and it has brought jobs and income to a region that had suffered from the decline of its traditional industries.",
      questions: [
        [
          "According to the passage, the plastic panels were chosen partly because ----.",
          [
            "their lightness meant that a lighter steel frame could be used",
            "they are cheaper than any other material",
            "they block all sunlight",
            "they were produced from china clay",
            "they can be easily painted",
          ],
          "Paneller camdan çok daha hafiftir; bu yüzden onları taşıyacak çelik çerçeve de çok daha hafif olabilir.",
        ],
        [
          "The passage states that soil had to be manufactured because ----.",
          [
            "the clay in the pit contains few nutrients",
            "the plants were imported without soil",
            "the pit had been filled with water",
            "the lottery required it",
            "the old garden nearby needed it",
          ],
          "Kil az besin içerdiğinden maden atıkları ve kompostlanmış malzemeden yaklaşık seksen beş bin ton toprak üretildi.",
        ],
        [
          "It can be inferred from the passage that the Eden Project has been important to the region because ----.",
          [
            "it has helped to replace income lost from declining industries",
            "it has restarted the mining of china clay",
            "it has reduced the number of tourists",
            "it has become the largest farm in England",
            "it has provided clay for porcelain factories",
          ],
          "Proje geleneksel sanayilerin gerilemesinden zarar görmüş bir bölgeye iş ve gelir getirmiştir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "For sixteen years, from 1991 to 2007, engineers in Boston replaced an elevated motorway that ran through the centre of the city with a series of tunnels. ---- The project was also marred by a tragedy in 2006, when a ceiling panel in one of the tunnels fell onto a car, killing a passenger.",
      [
        "Known as the Big Dig, it became one of the most expensive road projects in American history, costing several times the original estimate.",
        "Boston is an old American city.",
        "Motorways carry many cars.",
        "The land above the old motorway was turned into a long chain of parks and public spaces.",
        "Tunnels are dark.",
      ],
      "Boşluk 'also' ile trajediye bağlanacak bir sorunu tanıtan cümle gerektirir; boşluğa Big Dig'in maliyeti ilk tahminin birkaç katına çıkan en pahalı yol projelerinden biri olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "London's newest railway line, which runs under the centre of the city from east to west, was opened in 2022, more than three years later than planned. ---- During their construction, archaeologists also discovered thousands of skeletons, including victims of plague from the fourteenth century.",
      [
        "Its tunnels, more than forty kilometres long, were dug by eight huge boring machines.",
        "London is the capital of England.",
        "Trains are fast.",
        "The line was named after the queen, who visited one of its stations shortly before it opened.",
        "Skeletons are made of bone.",
      ],
      "Boşluk 'their construction' ifadesinin gönderme yapacağı tünelleri tanıtan bir cümle gerektirir; boşluğa hattın kırk kilometreden uzun tünellerinin sekiz dev tünel açma makinesiyle kazıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2013, a railway tunnel was opened beneath the Bosphorus in Istanbul, linking the European and Asian sides of the city. ---- While digging one of its stations, however, workers uncovered the remains of a Byzantine harbour, including more than thirty sunken ships.",
      [
        "It was built of concrete sections that were sunk into a trench in the seabed, more than sixty metres below the surface.",
        "Istanbul is a large city.",
        "Ships sail on the sea.",
        "The tunnel's designers had to take into account the risk of strong earthquakes in the region.",
        "Harbours protect ships.",
      ],
      "Boşluk tünelin nasıl yapıldığını anlatıp 'however' ile istasyondaki buluntulara geçiş sağlayan bir cümle gerektirir; boşluğa tünelin deniz tabanındaki bir hendeğe batırılan beton bölümlerden yapıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Denmark and Germany are building a tunnel about eighteen kilometres long beneath the Baltic Sea. ---- When it is completed, it will reduce the journey between Copenhagen and Hamburg by train from about four and a half hours to less than three.",
      [
        "It will carry a motorway and a double-track railway, and it will be the longest tunnel of its kind in the world.",
        "The Baltic Sea is cold.",
        "Germany is a large country.",
        "The tunnel's concrete sections are being built in a factory specially constructed on the Danish coast.",
        "Trains carry passengers.",
      ],
      "Boşluk tünelin ne taşıyacağını açıklayıp tamamlandığındaki faydasına bağlanan bir cümle gerektirir; boşluğa tünelin bir otoyol ve çift hatlı bir demiryolu taşıyacağını söyleyen cümle gelmelidir.",
    ],
    [
      "The longest bridge in the world is not a single span across a river or strait but a viaduct that carries a high-speed railway across eastern China. ---- Building the line on a viaduct avoided the need to cross rivers, roads and rice fields at ground level.",
      [
        "It stretches for more than one hundred and sixty kilometres, crossing lakes, canals and farmland.",
        "China has a large population.",
        "Railways carry goods.",
        "Hundreds of thousands of workers were employed on the line, which was completed in about four years.",
        "Rice is grown in water.",
      ],
      "Boşluk köprünün uzunluğunu ve neleri aştığını açıklayıp viyadük seçiminin nedenine bağlanan bir cümle gerektirir; boşluğa köprünün göller, kanallar ve tarım arazileri üzerinden yüz altmış kilometreden fazla uzandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Many large engineering projects cost far more and take far longer than originally planned. ---- Some researchers argue that the problem lies less in engineering difficulties than in the optimism of those who propose the projects.",
      [
        "Studies of hundreds of projects around the world have found that only a small fraction are completed on time and within budget.",
        "Engineers design many things.",
        "Projects require planning.",
        "Large projects can also bring significant benefits, such as shorter journeys and new jobs for local people.",
        "Money is important.",
      ],
      "Boşluk sorunun yaygınlığını kanıtlayıp araştırmacıların açıklamasına bağlanan bir cümle gerektirir; boşluğa yüzlerce proje üzerine yapılan çalışmaların yalnızca küçük bir kısmının zamanında ve bütçe içinde tamamlandığını bulduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Cable-stayed bridges have become increasingly popular in recent decades.",
        "Their decks are supported by cables attached directly to tall towers.",
        "They are often cheaper to build than suspension bridges of similar length.",
        "Cables are also used to carry electricity and telephone signals.",
        "Computers have made it easier to design such bridges safely.",
      ],
      odd: 3,
      why: "Parça eğik askılı köprülerin yaygınlaşmasını anlatır. Kabloların elektrik ve telefon sinyali taşımak için de kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Building on soft ground presents engineers with serious challenges.",
        "Heavy structures can gradually sink or tilt.",
        "Gardens grow well in soft, rich soil.",
        "To prevent this, foundations may be supported by long piles driven deep into firmer layers.",
        "In some cases, the ground itself is strengthened before construction begins.",
      ],
      odd: 2,
      why: "Parça yumuşak zeminde inşaat yapmanın güçlüklerini ve çözümlerini anlatır. Bahçelerin yumuşak ve verimli toprakta iyi yetiştiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Immersed tunnels are made of large sections built on land.",
        "The sections are sealed, floated to the site and sunk into a trench.",
        "Divers and engineers then connect them under water.",
        "Once the seals are removed, the tunnel can be drained.",
        "Divers often enjoy exploring coral reefs.",
      ],
      odd: 4,
      why: "Parça batırma tünellerin nasıl yapıldığını anlatır. Dalgıçların genellikle mercan resiflerini keşfetmekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Large dams can provide electricity, water and protection from floods.",
        "However, their reservoirs may flood farmland, villages and important habitats.",
        "They can also block the movement of fish that travel upstream to breed.",
        "Fish is an important source of protein in many diets.",
        "For these reasons, the construction of large dams is often controversial.",
      ],
      odd: 3,
      why: "Parça büyük barajların yararlarını ve tartışmalı yönlerini anlatır. Balığın pek çok beslenme düzeninde önemli bir protein kaynağı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tunnel boring machines can dig through rock and soil continuously.",
        "A rotating head at the front cuts away the ground.",
        "Behind it, the machine places curved concrete segments to line the tunnel.",
        "Some of the largest machines are more than a hundred metres long.",
        "Many cities have underground railways.",
      ],
      odd: 4,
      why: "Parça tünel açma makinelerinin nasıl çalıştığını anlatır. Pek çok şehrin metrosu olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Engineers must consider how large structures will respond to wind.",
        "Strong winds can cause bridges and tall buildings to sway.",
        "Kites fly best in steady winds.",
        "Models of new designs are therefore often tested in wind tunnels.",
        "Some buildings contain heavy weights that move to reduce swaying.",
      ],
      odd: 2,
      why: "Parça büyük yapıların rüzgâra tepkisinin nasıl incelendiğini anlatır. Uçurtmaların en iyi sabit rüzgârda uçtuğunu söyleyen III. cümle konu dışıdır.",
    },
  ],
};
