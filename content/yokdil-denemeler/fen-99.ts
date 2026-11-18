import type { YokdilDeneme } from "./types";

export const FEN_99: YokdilDeneme = {
  no: 99,
  field: "fen",
  vocab: [
    [
      "Within two years, almost all of the injected carbon dioxide had been ---- into solid minerals.",
      ["converted", "released", "dissolved", "evaporated", "exported"],
      "İki yıl içinde enjekte edilen karbondioksitin neredeyse tamamının katı minerallere 'dönüştürüldüğü' (converted) anlatılır.",
    ],
    [
      "Heat stored in tanks of molten salt allows the power station to ---- producing electricity after sunset.",
      ["continue", "refuse", "cease", "postpone", "avoid"],
      "Erimiş tuz tanklarında depolanan ısının santralin gün batımından sonra elektrik üretmeye 'devam etmesini' (continue) sağladığı anlatılır.",
    ],
    [
      "The battery can respond to a sudden ---- in the power supply within a fraction of a second.",
      ["drop", "rise", "silence", "border", "rule"],
      "Bataryanın güç kaynağındaki ani bir 'düşüşe' (drop) saniyenin küçük bir kesrinde yanıt verebildiği anlatılır.",
    ],
    [
      "The waste will remain dangerously ---- for tens of thousands of years.",
      ["radioactive", "harmless", "cheap", "transparent", "fragile"],
      "Atığın on binlerce yıl boyunca tehlikeli biçimde 'radyoaktif' (radioactive) kalacağı anlatılır.",
    ],
    [
      "The dam has caused a long ---- between the countries that share the river.",
      ["dispute", "friendship", "holiday", "silence", "trade"],
      "Barajın nehri paylaşan ülkeler arasında uzun bir 'anlaşmazlığa' (dispute) yol açtığı anlatılır.",
    ],
    [
      "When the price of gas rose sharply, many countries tried to ---- their use of fossil fuels.",
      ["cut down on", "look up to", "come up with", "get away with", "take after"],
      "Gaz fiyatı keskin biçimde yükselince pek çok ülkenin fosil yakıt kullanımını 'azaltmaya' (cut down on) çalıştığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the reactor finally began operating, construction ---- for almost eighteen years.",
      ["had been going on", "goes on", "will go on", "has gone on", "is going on"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been going on'.",
    ],
    [
      "If the battery had not been installed, the blackouts ---- much longer.",
      ["might have lasted", "last", "will last", "had lasted", "are lasting"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin ana yan cümlesi: 'might have lasted'.",
    ],
    [
      "The carbon dioxide ---- with water and pumped deep into the rock.",
      ["is mixed", "mixes", "has mixed", "mixing", "is mixing"],
      "Karbondioksit karıştıran değil karıştırılandır; edilgen geniş zaman: 'is mixed'.",
    ],
    [
      "---- the plant can capture carbon dioxide directly from the air, it removes only a tiny fraction of global emissions.",
      ["Although", "Because", "Unless", "So that", "Until"],
      "Tesisin havadan karbondioksit tutabilmesi ile küresel salımın yalnızca küçük bir kesrini gidermesi zıtlık bildirir: 'Although'.",
    ],
    [
      "The entrepreneur, ---- company built the battery, had promised to finish it within a hundred days.",
      ["whose", "who", "which", "whom", "where"],
      "Girişimcinin şirketi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not only ---- the battery stabilise the grid, but it also saved consumers millions of dollars.",
      ["did", "had", "was", "has", "does it"],
      "'Not only' ile başlayan cümlede devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The tunnels ---- the waste will be stored lie more than four hundred metres underground.",
      ["in which", "which", "whose", "when", "what"],
      "Atığın tünellerin içinde depolanacağı belirtilir; edat + ilgi zamiri: 'in which'.",
    ],
    [
      "The longer the reactor's construction was delayed, ---- its cost became.",
      ["the higher", "the highest", "higher", "highest", "so high"],
      "'The more ..., the more ...' paralel yapısı: 'the higher'.",
    ],
    [
      "The downstream countries demanded that the reservoir ---- slowly.",
      ["be filled", "is filled", "was filled", "to be filled", "filling"],
      "'demand that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be filled'.",
    ],
    [
      "The blackout is believed ---- by a sudden fall in voltage across the network.",
      ["to have been triggered", "triggering", "to trigger", "was triggered", "having trigger"],
      "Geçmişte gerçekleşmiş edilgen olay için geçmiş edilgen mastar: 'to have been triggered'.",
    ],
    [
      "The mirrors are so bright ---- they have been known to dazzle pilots flying overhead.",
      ["that", "which", "as", "than", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The company had the canisters ---- of thick copper to resist corrosion.",
      ["made", "make", "making", "to make", "makes"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'made'.",
    ],
    [
      "Should the water level fall any further, the power station ---- to stop generating.",
      ["would have", "has had", "will have had", "had had", "is having"],
      "'Should' ile kurulan devrik koşul cümlesinin ana yan cümlesi: 'would have'.",
    ],
    [
      "Neither the solar panels nor the wind turbine ---- enough power on that cold, still evening.",
      ["was producing", "were producing", "have produced", "are producing", "be producing"],
      "'Neither ... nor' yapısında fiil yakındaki tekil özneye (the wind turbine) uyar: 'was producing'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the Mojave Desert of California, about three hundred and fifty thousand mirrors surround three towers, each about a hundred and forty metres tall. The Ivanpah solar power station, which began operating in 2014, does not use solar panels. Instead, the mirrors, controlled by computers, follow the Sun across the sky and reflect its light onto boilers at the tops of the towers, {1} water inside the boilers is heated to produce steam that drives turbines. At the time, it was the largest plant of its kind in the world, {2} its supporters hoped it would show that concentrated solar power could compete with other sources of electricity. The project ran into several problems, however. The concentrated sunlight near the towers is so intense that birds flying through it can be burned, {3} the plant was criticised by wildlife groups. It also produced less electricity than expected in its first years, partly because of cloudy weather, {4} it needed natural gas to warm up its boilers each morning. Meanwhile, the price of ordinary solar panels fell dramatically, {5} by the 2020s electricity from panels was far cheaper than electricity from plants like Ivanpah. In 2025, plans were announced to close part of the plant years earlier than originally intended.",
      blanks: [
        [
          "(21) ----",
          ["where", "which", "whose", "when", "what"],
          "Kazanlar yer bildirir ve suyun ısıtıldığı yeri gösterir: 'where'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "until"],
          "Türünün en büyüğü olması ve destekçilerin umutları birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "so that"],
          "Kuşların yanması ve tesisin eleştirilmesi birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "until"],
          "Beklenenden az elektrik üretmesi ve sabahları doğal gaza ihtiyaç duyması birbirine eklenen sorunlardır: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "although", "or", "until"],
          "Panel fiyatlarının düşmesi ve panellerden elde edilen elektriğin ucuzlaması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "About a hundred and twenty kilometres off the coast of Yorkshire, in north-east England, stands what was for several years the largest offshore wind farm in the world. Hornsea Two, which began operating in 2022, consists of a hundred and sixty-five turbines, each about two hundred metres tall, {1} together they can generate enough electricity for more than a million homes. It was built next to an earlier wind farm, Hornsea One, {2} further phases are planned in the same area. The turbines stand on steel foundations driven into the seabed, {3} the electricity they produce is carried to the coast through cables laid on the sea floor. Building wind farms so far from the coast is more difficult and expensive, {4} the winds there are stronger and more consistent, and the turbines cannot be seen from the shore. The cost of electricity from offshore wind fell sharply during the 2010s, {5} rising prices for steel and higher interest rates later caused some projects in Britain and the United States to be delayed or cancelled.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Türbinlerin sayısı ve birlikte bir milyon eve yetecek elektrik üretmeleri birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "unless", "although", "or", "so that"],
          "Önceki santralin yanına kurulması ve aynı bölgede yeni aşamaların planlanması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "until"],
          "Türbinlerin temellerinin deniz tabanına çakılması ve elektriğin kablolarla taşınması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["but", "because", "so", "unless", "or"],
          "Kıyıdan uzakta inşaatın zor olması ile rüzgârın daha güçlü olması zıtlık bildirir: 'but'.",
        ],
        [
          "(30) ----",
          ["but", "because", "so", "unless", "or"],
          "Maliyetin düşmesi ile sonradan artan fiyatların projeleri geciktirmesi zıtlık bildirir: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the plant removes carbon dioxide directly from the air, ----.",
      [
        "it captures only a few thousand tonnes a year",
        "air contains many gases",
        "Iceland is cold",
        "carbon dioxide is invisible",
        "it removes more carbon dioxide than all the world's forests combined",
      ],
      "'Although' zıtlık ister: tesis karbondioksiti doğrudan havadan alsa da yılda yalnızca birkaç bin ton tutar.",
    ],
    [
      "If the power station could not store heat, ----.",
      [
        "it would stop producing electricity as soon as the Sun set",
        "the Sun is hot",
        "Morocco is a large country",
        "salt is used in cooking",
        "it would produce far more electricity at night than during the day",
      ],
      "İkinci tip koşul: santral ısı depolayamasaydı Güneş batar batmaz elektrik üretmeyi bırakırdı.",
    ],
    [
      "----, the battery stabilised the grid within a fraction of a second.",
      [
        "Responding automatically when a large power station suddenly failed",
        "Because batteries are heavy",
        "Unless it was windy",
        "In spite of being a battery",
        "Since it had been switched off for repairs several weeks earlier",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: büyük bir santral aniden devre dışı kalınca otomatik olarak tepki veren batarya şebekeyi saniyenin küçük bir kesrinde dengeledi.",
    ],
    [
      "Because the basalt rock reacts quickly with carbon dioxide, ----.",
      [
        "the gas is turned into stone within a few years",
        "basalt is formed by volcanoes",
        "Iceland has many volcanoes",
        "rocks are hard",
        "the gas escapes into the atmosphere after only a few hours",
      ],
      "Neden-sonuç: bazalt kayası karbondioksitle hızla tepkimeye girdiği için gaz birkaç yıl içinde taşa dönüşür.",
    ],
    [
      "The waste canisters will be surrounded by clay ----.",
      [
        "so that water cannot easily reach them",
        "because clay is cheap",
        "although the rock is dry",
        "unless they are heavy",
        "since the engineers want water to reach them as quickly as possible",
      ],
      "Amaç bildiren yapı: atık kapları suyun onlara kolayca ulaşamaması için kil ile çevrilecektir.",
    ],
    [
      "The dam stands on the Blue Nile near the border with Sudan, ----.",
      [
        "which provides most of the water that reaches Egypt",
        "which is a river",
        "that the dam",
        "whose border",
        "when the first pharaohs ruled Egypt",
      ],
      "İlgi cümlesi Mavi Nil'i niteler: baraj, Mısır'a ulaşan suyun çoğunu sağlayan Mavi Nil üzerinde, Sudan sınırı yakınındadır.",
    ],
    [
      "Unlike solar panels, which turn sunlight directly into electricity, ----.",
      [
        "this plant uses mirrors to heat a fluid that drives turbines",
        "solar panels are flat",
        "sunlight is bright",
        "electricity is useful",
        "this plant uses no sunlight at all to produce electricity",
      ],
      "'Unlike' karşıtlık kurar: güneş ışığını doğrudan elektriğe çeviren güneş panellerinin aksine bu santral türbinleri çalıştıran bir sıvıyı ısıtmak için ayna kullanır.",
    ],
    [
      "The reactor's construction was delayed for many years ----.",
      [
        "because of problems with its design and the quality of its components",
        "although it was finished early",
        "so that it would become cheaper",
        "unless the weather was good",
        "since the engineers had built it much faster than planned",
      ],
      "Neden bildiren yapı: reaktörün inşaatı tasarımındaki ve parçalarının kalitesindeki sorunlar nedeniyle yıllarca gecikti.",
    ],
    [
      "Hardly had the electricity supply failed ----.",
      [
        "when traffic lights stopped working and trains came to a halt",
        "than the supply",
        "that the trains",
        "before the lights",
        "when the government announced that nothing had happened",
      ],
      "'Hardly ... when' yapısı: elektrik kesilir kesilmez trafik ışıkları çalışmayı bıraktı ve trenler durdu.",
    ],
    [
      "While Ethiopia sees the dam as essential for its development, ----.",
      [
        "Egypt fears that it will reduce the flow of water downstream",
        "dams are large",
        "rivers flow downhill",
        "Ethiopia is in Africa",
        "Egypt has asked Ethiopia to build several more dams on the river",
      ],
      "'While' zıtlık bildirir: Etiyopya barajı kalkınması için zorunlu görürken Mısır aşağı akıştaki su miktarını azaltacağından korkmaktadır.",
    ],
    [
      "The repository has been designed so carefully ----.",
      [
        "that it should remain safe without any human supervision",
        "because the repository",
        "than the reactor",
        "although the engineers",
        "so that it will need to be inspected by guards every day",
      ],
      "'so ... that' sonuç yapısı: depo o kadar dikkatli tasarlanmıştır ki hiçbir insan gözetimi olmadan güvenli kalmalıdır.",
    ],
  ],
  enTr: [
    [
      "The carbon dioxide is dissolved in water and injected into basalt rock deep underground.",
      [
        "Karbondioksit suda çözülür ve yerin derinliklerindeki bazalt kayasına enjekte edilir.",
        "Karbondioksit bazalt kayasından çıkarılıp havaya salınır.",
        "Bazalt kayası suda çözülür ve havaya enjekte edilir.",
        "Karbondioksit hiç kullanılmaz.",
        "Karbondioksit dondurulur ve yüzeydeki büyük tanklarda saklanır.",
      ],
      "'The carbon dioxide is dissolved in water' 'karbondioksit suda çözülür', 'and injected into basalt rock deep underground' 've yerin derinliklerindeki bazalt kayasına enjekte edilir' karşılığıdır.",
    ],
    [
      "The heat stored in the molten salt allows the plant to generate electricity for several hours after dark.",
      [
        "Erimiş tuzda depolanan ısı santralin hava karardıktan sonra birkaç saat elektrik üretmesini sağlar.",
        "Erimiş tuz santralin gündüz elektrik üretmesini engeller.",
        "Santral karanlıkta erimiş tuz üretir.",
        "Santralde hiç tuz yoktur.",
        "Erimiş tuzda depolanan ısı santralin yalnızca öğle saatlerinde çalışmasına izin verir.",
      ],
      "'The heat stored in the molten salt' 'erimiş tuzda depolanan ısı', 'allows the plant to generate electricity for several hours after dark' 'santralin hava karardıktan sonra birkaç saat elektrik üretmesini sağlar' karşılığıdır.",
    ],
    [
      "The battery was completed in less than a hundred days, as its builder had promised.",
      [
        "Batarya, yapımcısının söz verdiği gibi yüz günden kısa sürede tamamlandı.",
        "Batarya yapımcısının söz verdiğinden yüz gün geç tamamlandı.",
        "Yapımcı bataryaya yüz gün söz verdi.",
        "Batarya hiç tamamlanmadı.",
        "Bataryanın yapımı yüz yıldan fazla sürdü ve yapımcısı verdiği sözü hiçbir zaman tutamadığı için büyük bir para cezası ödedi.",
      ],
      "'The battery was completed in less than a hundred days' 'batarya yüz günden kısa sürede tamamlandı', 'as its builder had promised' 'yapımcısının söz verdiği gibi' karşılığıdır.",
    ],
    [
      "The waste will be sealed in copper canisters and buried in tunnels deep in the bedrock.",
      [
        "Atık bakır kaplara kapatılacak ve ana kayanın derinliklerindeki tünellere gömülecek.",
        "Atık bakır kaplardan çıkarılıp denize atılacak.",
        "Bakır kaplar atığın içindeki tünellere gömülecek.",
        "Hiç atık yoktur.",
        "Atık plastik torbalara konulacak ve yüzeydeki depolarda tutulacak.",
      ],
      "'The waste will be sealed in copper canisters' 'atık bakır kaplara kapatılacak', 'and buried in tunnels deep in the bedrock' 've ana kayanın derinliklerindeki tünellere gömülecek' karşılığıdır.",
    ],
    [
      "Ethiopia financed the dam largely through bonds bought by its own citizens.",
      [
        "Etiyopya barajı büyük ölçüde kendi vatandaşlarının satın aldığı tahvillerle finanse etti.",
        "Etiyopya barajı tamamen yabancı bankaların kredileriyle finanse etti.",
        "Vatandaşlar barajı Etiyopya'dan satın aldı.",
        "Baraj hiç finanse edilmedi.",
        "Etiyopya barajın parasını komşu ülkelere ödettirdi ve hiçbir katkıda bulunmadı.",
      ],
      "'Ethiopia financed the dam' 'Etiyopya barajı finanse etti', 'largely through bonds bought by its own citizens' 'büyük ölçüde kendi vatandaşlarının satın aldığı tahvillerle' karşılığıdır.",
    ],
    [
      "The reactor eventually began commercial operation in 2023, fourteen years later than planned.",
      [
        "Reaktör sonunda planlanandan on dört yıl sonra, 2023'te ticari olarak çalışmaya başladı.",
        "Reaktör planlanandan on dört yıl önce çalışmaya başladı.",
        "2023 reaktörü on dört yıl planladı.",
        "Reaktör hiç çalışmadı.",
        "Reaktör 2023'te kalıcı olarak kapatıldı ve sökülen parçaların yerine kıyı boyunca uzanan büyük bir rüzgâr santrali kuruldu.",
      ],
      "'The reactor eventually began commercial operation in 2023' 'reaktör sonunda 2023'te ticari olarak çalışmaya başladı', 'fourteen years later than planned' 'planlanandan on dört yıl sonra' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Tesis 2021'de çalışmaya başladı.",
      [
        "The plant began operating in 2021.",
        "The plant was closed in 2021.",
        "2021 began operating the plant.",
        "There was no plant.",
        "The plant began operating in 1921 in Iceland.",
      ],
      "'Tesis çalışmaya başladı' 'the plant began operating', '2021'de' 'in 2021' karşılığıdır.",
    ],
    [
      "Aynalar güneş ışığını bir kuleye yansıtıyor.",
      [
        "The mirrors reflect sunlight onto a tower.",
        "The mirrors absorb all the sunlight.",
        "A tower reflects the mirrors onto the Sun.",
        "There are no mirrors.",
        "The mirrors reflect moonlight onto the sea.",
      ],
      "'Aynalar yansıtıyor' 'the mirrors reflect', 'güneş ışığını bir kuleye' 'sunlight onto a tower' karşılığıdır.",
    ],
    [
      "Batarya şebekeyi dengelemeye yardım ediyor.",
      [
        "The battery helps to stabilise the grid.",
        "The battery damages the grid.",
        "The grid helps to stabilise the battery.",
        "There is no battery.",
        "The battery replaces all the power stations in the country.",
      ],
      "'Batarya yardım ediyor' 'the battery helps', 'şebekeyi dengelemeye' 'to stabilise the grid' karşılığıdır.",
    ],
    [
      "Depo yerin dört yüz metre altında bulunuyor.",
      [
        "The repository lies four hundred metres underground.",
        "The repository lies on top of a mountain.",
        "Four hundred metres lie under the repository.",
        "There is no repository.",
        "The repository lies forty metres above the sea.",
      ],
      "'Depo bulunuyor' 'the repository lies', 'yerin dört yüz metre altında' 'four hundred metres underground' karşılığıdır.",
    ],
    [
      "Barajın rezervuarı birkaç yıl içinde dolduruldu.",
      [
        "The dam's reservoir was filled over several years.",
        "The dam's reservoir was emptied in a single day.",
        "Several years filled the dam.",
        "There is no reservoir.",
        "The dam's reservoir has never contained any water.",
      ],
      "'Barajın rezervuarı dolduruldu' 'the dam's reservoir was filled', 'birkaç yıl içinde' 'over several years' karşılığıdır.",
    ],
    [
      "Elektrik kesintisi milyonlarca insanı etkiledi.",
      [
        "The power cut affected millions of people.",
        "The power cut affected nobody.",
        "Millions of people caused the power cut.",
        "There was no power cut.",
        "The power cut affected only a single small village.",
      ],
      "'Elektrik kesintisi etkiledi' 'the power cut affected', 'milyonlarca insanı' 'millions of people' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Near the Hellisheiði geothermal power station, about thirty kilometres east of Reykjavík in Iceland, scientists have been testing a way of turning carbon dioxide into stone. Like other geothermal plants, the station releases some carbon dioxide from the hot fluids it brings up from underground. In a project known as Carbfix, which began in 2012, this gas is dissolved in large amounts of water, rather like the bubbles in a fizzy drink, and pumped hundreds of metres down into the basalt rock beneath the station. Basalt, which forms when lava cools, is rich in calcium, magnesium and iron, which react with the dissolved carbon dioxide to form solid carbonate minerals. Scientists had expected this process to take hundreds or even thousands of years, but tests showed that more than ninety-five per cent of the injected carbon dioxide had been converted into minerals within two years. Once turned into stone, the carbon is very unlikely to escape back into the atmosphere. In 2021, a Swiss company opened a plant nearby, called Orca, which captures carbon dioxide directly from the air using large fans and special filters, and the gas is then stored underground by the same method. A larger plant followed in 2024. Supporters see such technologies as a valuable tool in the fight against climate change, but critics point out that they are expensive and use a great deal of energy, and that the amounts involved are tiny: the Orca plant was designed to capture about four thousand tonnes a year, roughly equal to the annual emissions of a few hundred cars, while the world emits tens of billions of tonnes. The method also requires large amounts of water and suitable rock, which is not available everywhere.",
      questions: [
        [
          "According to the passage, the carbon dioxide is turned into stone because ----.",
          [
            "it reacts with elements in the basalt to form carbonate minerals",
            "it is frozen by the cold Icelandic climate",
            "it is mixed with lava from a volcano",
            "it is compressed by enormous pressure",
            "it is heated by the geothermal power station",
          ],
          "Bazalt kalsiyum, magnezyum ve demirce zengindir; bunlar çözünmüş karbondioksitle tepkimeye girip karbonat mineralleri oluşturur.",
        ],
        [
          "The passage states that the process turned out to be ----.",
          [
            "much faster than scientists had expected",
            "much slower than scientists had expected",
            "impossible in basalt rock",
            "dangerous to the people of Reykjavík",
            "cheaper than any other method of reducing emissions",
          ],
          "Yüzlerce ya da binlerce yıl sürmesi beklenen süreç iki yıl içinde büyük ölçüde tamamlandı.",
        ],
        [
          "It can be inferred from the passage that critics regard direct air capture as limited mainly because ----.",
          [
            "it removes only a very small amount of carbon dioxide compared with global emissions",
            "it does not work in cold countries",
            "it releases more carbon dioxide than it captures",
            "it cannot store the gas underground",
            "it was invented only recently in Switzerland",
          ],
          "Orca yılda yaklaşık dört bin ton tutar; bu, dünyanın on milyarlarca tonluk salımı yanında çok küçüktür.",
        ],
      ],
    },
    {
      text:
        "On the edge of the Sahara Desert near the city of Ouarzazate in Morocco lies one of the largest solar power complexes in the world. The Noor complex, whose name means 'light' in Arabic, was built in several stages between 2013 and 2018 and covers an area of about three thousand hectares. Most of it does not use the familiar solar panels that convert sunlight directly into electricity. Instead, it uses concentrated solar power. In the first stages, long curved mirrors focus sunlight onto pipes containing a special oil, which is heated to almost four hundred degrees Celsius; in a later stage, thousands of mirrors reflect sunlight onto a receiver at the top of a tower about two hundred and fifty metres high. In both cases, the heat is used to produce steam, which drives turbines like those of a conventional power station. The great advantage of this approach is that heat is easier and cheaper to store than electricity. Part of the heat collected during the day is stored in huge tanks of molten salt, which keep it for many hours, allowing the plant to continue generating electricity after the Sun has set, when demand in Moroccan homes is highest. Morocco, which imports most of its energy, hopes to obtain a much larger share of its electricity from renewable sources. The project has, however, faced challenges. It was expensive, and it was financed largely by loans from international banks. Its mirrors must be cleaned regularly to remove the desert dust, which uses scarce water, and concentrated solar power has become much less competitive as the price of solar panels and batteries has fallen. Later stages of the complex have therefore used panels instead.",
      questions: [
        [
          "According to the passage, concentrated solar power differs from solar panels in that it ----.",
          [
            "uses mirrors to produce heat, which then drives turbines",
            "converts sunlight directly into electricity",
            "works only at night",
            "does not need sunlight",
            "uses wind to cool the mirrors",
          ],
          "Yoğunlaştırılmış güneş enerjisi aynalarla ısı üretir; bu ısı buhar elde edip geleneksel santrallerdeki gibi türbinleri çalıştırır.",
        ],
        [
          "The passage states that the tanks of molten salt allow the plant to ----.",
          [
            "keep generating electricity after the Sun has set",
            "clean the mirrors without water",
            "export salt to other countries",
            "reduce the temperature of the oil",
            "produce more electricity at midday",
          ],
          "Gündüz toplanan ısının bir kısmı erimiş tuz tanklarında saklanır ve santral gün batımından sonra da elektrik üretebilir.",
        ],
        [
          "It can be inferred from the passage that later stages of the complex used panels because ----.",
          [
            "panels and batteries had become cheaper than concentrated solar power",
            "the mirrors had been destroyed by storms",
            "Morocco had stopped importing energy",
            "the banks refused to lend money for panels",
            "panels need more water to clean",
          ],
          "Panel ve batarya fiyatları düştükçe yoğunlaştırılmış güneş enerjisi rekabet gücünü kaybetti; bu yüzden sonraki aşamalarda panel kullanıldı.",
        ],
      ],
    },
    {
      text:
        "In September 2016, a storm in South Australia damaged transmission lines and caused a blackout across the entire state, leaving about one point seven million people without electricity. In the debate that followed, an American entrepreneur whose company made electric cars and batteries offered to build a huge battery that would help to prevent such events, and he promised that if it was not completed within a hundred days of the contract being signed, it would be free. The battery, built next to a wind farm at a place called Hornsdale, was completed in less than a hundred days and began operating in December 2017. At the time, it was the largest lithium-ion battery in the world, with a capacity of a hundred megawatts. Although it could supply power for only a short time, its main value lay in its speed. Electricity networks must keep supply and demand closely balanced, and when a large power station suddenly fails, the frequency of the current begins to fall, which can lead to wider blackouts. Conventional power stations take seconds or minutes to respond, but the battery can react within a fraction of a second. Within weeks of opening, it responded to the sudden failure of a coal-fired power station hundreds of kilometres away, injecting power into the network before the backup systems could start. The battery also earned money by buying electricity when it was cheap and selling it when prices were high, and studies found that it had saved consumers tens of millions of dollars in its first two years by reducing the cost of keeping the network stable. It was later expanded, and its success encouraged the construction of many similar batteries in Australia and elsewhere.",
      questions: [
        [
          "According to the passage, the battery was built after ----.",
          [
            "a storm caused a blackout across South Australia",
            "a coal-fired power station was closed",
            "the price of electricity fell sharply",
            "a new wind farm was opened in the state",
            "electric cars became popular in Australia",
          ],
          "2016'daki fırtına iletim hatlarına zarar verip tüm eyalette elektrik kesintisine yol açınca bataryayı inşa etme teklifi geldi.",
        ],
        [
          "The passage states that the battery's main value lay in ----.",
          [
            "its ability to respond very quickly to changes in the network",
            "the large amount of energy it could store for weeks",
            "its very low cost of construction",
            "its ability to generate electricity from wind",
            "its location far from any power station",
          ],
          "Batarya kısa süre güç sağlayabiliyordu; asıl değeri saniyenin küçük bir kesrinde tepki verebilmesiydi.",
        ],
        [
          "It can be inferred from the passage that the battery saved consumers money mainly by ----.",
          [
            "making it cheaper to keep the network stable",
            "replacing all the state's power stations",
            "giving electricity away for free",
            "reducing the number of electric cars",
            "preventing all storms in the region",
          ],
          "Çalışmalar bataryanın şebekeyi dengede tutmanın maliyetini düşürerek tüketicilere on milyonlarca dolar kazandırdığını buldu.",
        ],
      ],
    },
    {
      text:
        "On the island of Olkiluoto, on the west coast of Finland, engineers have built the world's first permanent repository for highly radioactive waste from nuclear power stations. Known as Onkalo, meaning 'cavity' or 'hollow' in Finnish, it consists of a network of tunnels carved out of granite bedrock more than four hundred metres below the surface. Spent nuclear fuel remains dangerously radioactive for tens of thousands of years, and most countries that use nuclear power store it temporarily in pools of water or in steel and concrete containers at the surface, while they decide what to do with it. The Finnish plan relies on several barriers. The spent fuel will be sealed inside cast-iron inserts within thick copper canisters, which are highly resistant to corrosion. The canisters will then be placed in holes drilled in the floors of the tunnels and surrounded by bentonite, a type of clay that swells when it absorbs water, so that water cannot easily reach them. Finally, the tunnels will be filled with clay and sealed. The surrounding granite, which has been stable for well over a billion years, provides a further barrier. The repository is designed to remain safe for at least a hundred thousand years without any human supervision. This raises an unusual problem: how to warn people in the distant future, who may speak entirely different languages, not to dig there. Some experts have proposed warning signs and symbols, while others argue that it would be better to leave no markers at all, so as not to attract curiosity. Final testing began in 2024, and the facility is expected to begin receiving waste in the mid-2020s. Several other countries, including Sweden and France, are planning similar repositories.",
      questions: [
        [
          "According to the passage, the bentonite clay is used because ----.",
          [
            "it swells when it absorbs water, keeping water away from the canisters",
            "it is radioactive itself",
            "it makes the canisters lighter",
            "it can be easily removed in the future",
            "it dissolves the copper canisters",
          ],
          "Bentonit suyu emince şişer ve böylece suyun kaplara kolayca ulaşmasını engeller.",
        ],
        [
          "The passage states that, in most countries, spent nuclear fuel is currently ----.",
          [
            "stored temporarily at the surface",
            "buried permanently in granite",
            "thrown into the sea",
            "sent to Finland",
            "turned into stone",
          ],
          "Nükleer enerji kullanan çoğu ülke kullanılmış yakıtı ne yapacağına karar verene kadar yüzeyde geçici olarak depolar.",
        ],
        [
          "It can be inferred from the passage that some experts oppose warning markers because ----.",
          [
            "they might make future people more curious about the site",
            "they would be too expensive to build",
            "future people will not be able to see",
            "the waste will be harmless in a few years",
            "Finland has banned all public signs",
          ],
          "Bazı uzmanlar merakı kışkırtmamak için hiç işaret bırakmamanın daha iyi olacağını savunur.",
        ],
      ],
    },
    {
      text:
        "In 2011, Ethiopia began building a huge dam on the Blue Nile, close to its border with Sudan. The Grand Ethiopian Renaissance Dam, which is about one hundred and forty-five metres high and almost two kilometres long, is the largest hydroelectric dam in Africa, and it is designed to produce more than five thousand megawatts of electricity, more than doubling the country's capacity. For Ethiopia, where many people still have no electricity, the project became a symbol of national pride and development. Because foreign lenders were reluctant to finance it, the government paid for it largely through taxes and bonds bought by its own citizens, including civil servants who contributed part of their salaries. The dam, however, caused a long dispute with Egypt and Sudan, which lie downstream. The Blue Nile provides most of the water that reaches Egypt, where almost all the population depends on the Nile for drinking water and farming, and Egypt feared that filling the dam's vast reservoir quickly, especially during years of drought, would reduce the flow of water to dangerous levels. Sudan had mixed views: it expected the dam to reduce flooding and provide cheap electricity, but it worried about the safety of its own dams downstream. For years, the three countries held talks, sometimes with the help of the United States and the African Union, but they could not agree on rules for filling and operating the dam. Ethiopia filled the reservoir in stages during the rainy seasons, beginning in 2020, and the dam was officially inaugurated in 2025. The dispute has not been fully resolved, and it illustrates how the management of shared rivers can become a source of tension between countries.",
      questions: [
        [
          "According to the passage, Ethiopia financed the dam largely through ----.",
          [
            "taxes and bonds bought by its own citizens",
            "loans from Egyptian banks",
            "money provided by the African Union",
            "the sale of electricity to Europe",
            "donations from the United States",
          ],
          "Yabancı kredi verenler isteksiz olduğundan hükümet barajı büyük ölçüde vergiler ve vatandaşların aldığı tahvillerle finanse etti.",
        ],
        [
          "The passage states that Egypt feared that ----.",
          [
            "filling the reservoir quickly would reduce the flow of water downstream",
            "the dam would cause floods in Cairo",
            "the dam would produce too little electricity",
            "Sudan would build a larger dam",
            "the dam would collapse during construction",
          ],
          "Mısır, büyük rezervuarın özellikle kurak yıllarda hızla doldurulmasının su akışını tehlikeli düzeylere indireceğinden korkuyordu.",
        ],
        [
          "It can be inferred from the passage that Sudan's attitude towards the dam was ----.",
          [
            "mixed, because it expected benefits but also had safety concerns",
            "completely hostile from the beginning",
            "entirely enthusiastic and without concerns",
            "irrelevant, because Sudan does not use the Nile",
            "the same as Egypt's in every respect",
          ],
          "Sudan barajın taşkınları azaltıp ucuz elektrik sağlamasını bekliyor, ama kendi barajlarının güvenliğinden endişe ediyordu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Drax, once the largest coal-fired power station in Britain, has converted most of its generators to burn wood pellets instead of coal. ---- Critics, however, argue that cutting down forests to make the pellets releases carbon and that new trees take decades to absorb it again.",
      [
        "The company argues that this is a form of renewable energy, since new trees can be planted to replace those that are burned.",
        "Britain has many power stations.",
        "Wood is used to make furniture.",
        "Most of the pellets are shipped across the Atlantic from forests in the south-eastern United States and Canada, where they are produced in large factories.",
        "Coal is black.",
      ],
      "Boşluk şirketin görüşünü sunup 'however' ile eleştirmenlerin karşı görüşüne bağlanan bir cümle gerektirir; boşluğa şirketin yakılan ağaçların yerine yenileri dikilebildiği için bunun yenilenebilir enerji olduğunu savunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "The Kariba Dam on the Zambezi River supplies much of the electricity used in Zambia and Zimbabwe. ---- As a result, both countries suffered long daily power cuts that affected homes, hospitals and mines.",
      [
        "During a severe drought in 2022 and 2024, however, the water level in its reservoir fell so low that the power stations had to cut their output sharply.",
        "Zambia and Zimbabwe are neighbours.",
        "Rivers flow into the sea.",
        "When it was completed in 1959, its reservoir was the largest artificial lake in the world, and tens of thousands of people living in the valley had to be moved to make way for it.",
        "Mines produce copper.",
      ],
      "Boşluk 'As a result' ile elektrik kesintilerine bağlanacak bir neden gerektirir; boşluğa kuraklık sırasında rezervuarın su seviyesinin çok düştüğünü ve santrallerin üretimi azaltmak zorunda kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In several countries, solar panels are now being installed on floating platforms on lakes and reservoirs. ---- In addition, the shade they provide reduces the amount of water lost through evaporation.",
      [
        "The water keeps the panels cool, which makes them slightly more efficient than panels on land.",
        "Lakes contain fresh water.",
        "Panels are made of glass.",
        "Some environmental groups worry that covering large areas of water with platforms could reduce the light reaching plants and harm the fish and birds that depend on them.",
        "Reservoirs store water.",
      ],
      "Boşluk 'In addition' ile ikinci bir yarara bağlanacak ilk yararı tanıtan bir cümle gerektirir; boşluğa suyun panelleri serin tutup karadakilere göre biraz daha verimli kıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some farmers have begun to install solar panels high above their fields, leaving enough space for crops to grow beneath them. ---- In hot, dry regions, some crops even grow better because the panels protect them from the strongest sunlight.",
      [
        "This allows the same land to be used both for producing food and for generating electricity.",
        "Farmers grow food.",
        "Fields are large.",
        "The cost of raising the panels high enough for farm machinery to pass beneath them can be considerable.",
        "Crops need water.",
      ],
      "Boşluk düzenlemenin temel yararını açıklayıp bazı ürünlerin daha iyi büyümesine bağlanan bir cümle gerektirir; boşluğa bunun aynı arazinin hem gıda hem elektrik üretimi için kullanılmasını sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "On 28 April 2025, almost the whole of Spain and Portugal suddenly lost electricity. ---- Investigations later focused on how problems with voltage control spread rapidly through the network.",
      [
        "Trains stopped, traffic lights went out and millions of people were left without power for many hours.",
        "Spain and Portugal are neighbours.",
        "Electricity is used in homes.",
        "The two countries obtain a large share of their electricity from solar and wind power, and some commentators were quick to blame these sources, although the evidence was unclear.",
        "Trains carry passengers.",
      ],
      "Boşluk kesintinin etkilerini anlatıp soruşturmaya geçiş sağlayan bir cümle gerektirir; boşluğa trenlerin durduğunu, trafik ışıklarının söndüğünü ve milyonlarca kişinin saatlerce elektriksiz kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2023, China began operating a small experimental nuclear reactor in the Gobi Desert that uses thorium rather than uranium as its fuel. ---- Supporters believe that such reactors could be safer and produce less long-lived waste than conventional ones.",
      [
        "The fuel is dissolved in molten salt, which also carries heat away from the reactor's core.",
        "The Gobi is a desert.",
        "China is a large country.",
        "Thorium is about three times as abundant in the Earth's crust as uranium, and China has large deposits of it, often found as a by-product of mining for other metals.",
        "Reactors produce heat.",
      ],
      "Boşluk reaktörün nasıl çalıştığını açıklayıp destekçilerin görüşüne bağlanan bir cümle gerektirir; boşluğa yakıtın aynı zamanda ısıyı çekirdekten taşıyan erimiş tuzda çözüldüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Grid operators have to match the power generated with the power consumed, second by second.",
        "If demand exceeds supply, the frequency of the current begins to fall.",
        "Operators therefore keep some power stations ready to increase their output quickly.",
        "Many people use electric kettles in the morning.",
        "Batteries are increasingly used for the same purpose.",
      ],
      odd: 3,
      why: "Parça elektrik şebekelerinde arz ve talebin dengelenmesini anlatır. Pek çok kişinin sabahları elektrikli su ısıtıcısı kullandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some power stations draw on the natural warmth stored in underground rock.",
        "In some places, hot water and steam rise close to the surface.",
        "Iceland is famous for its glaciers and waterfalls.",
        "Power stations use the steam to drive turbines.",
        "The heat can also be used to warm homes directly.",
      ],
      odd: 2,
      why: "Parça jeotermal enerjinin nasıl kullanıldığını anlatır. İzlanda'nın buzulları ve şelaleleriyle ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The cost of solar panels has fallen dramatically since 2010.",
        "This is partly due to mass production in large factories.",
        "Improvements in technology have also made the panels more efficient.",
        "As a result, solar power is now one of the cheapest sources of electricity in many countries.",
        "Factories employ many workers.",
      ],
      odd: 4,
      why: "Parça güneş paneli maliyetlerinin düşmesini anlatır. Fabrikaların pek çok işçi çalıştırdığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Building nuclear power stations has often taken far longer than planned.",
        "Many projects have faced problems with design, safety checks and suppliers.",
        "Delays greatly increase the final cost of the stations.",
        "Uranium is mined in several countries, including Kazakhstan and Canada.",
        "Some governments have therefore become reluctant to approve new reactors.",
      ],
      odd: 3,
      why: "Parça nükleer santral inşaatlarındaki gecikmeleri ve sonuçlarını anlatır. Uranyumun Kazakistan ve Kanada gibi ülkelerde çıkarıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Wind turbines have grown much larger over the past few decades.",
        "Longer blades can capture more energy from the wind.",
        "Taller towers reach stronger, steadier winds higher above the ground.",
        "Windmills were once used to grind grain into flour.",
        "The largest modern turbines can each power thousands of homes.",
      ],
      odd: 3,
      why: "Parça rüzgâr türbinlerinin zamanla büyümesini anlatır. Yel değirmenlerinin bir zamanlar tahıl öğütmek için kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Large dams can provide cheap, reliable electricity.",
        "However, droughts can reduce the amount of water available.",
        "Climate change is expected to make some droughts more frequent.",
        "Countries that depend heavily on hydroelectric power may therefore face shortages.",
        "Many rivers are popular with fishermen.",
      ],
      odd: 4,
      why: "Parça hidroelektrik enerjinin kuraklık karşısındaki savunmasızlığını anlatır. Pek çok nehrin balıkçılar arasında popüler olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
