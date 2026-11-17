import type { YokdilDeneme } from "./types";

export const FEN_72: YokdilDeneme = {
  no: 72,
  field: "fen",
  vocab: [
    [
      "The animal can ---- the amount of gas in its shell to rise or sink in the water.",
      ["adjust", "destroy", "ignore", "photograph", "sell"],
      "Hayvanın suda yükselmek ya da batmak için kabuğundaki gaz miktarını 'ayarlayabildiği' (adjust) anlatılır.",
    ],
    [
      "The parasites ---- themselves to the sides of fish and feed on their blood.",
      ["attach", "detach", "hide", "warn", "compare"],
      "Parazitlerin kendilerini balıkların yanlarına 'tutturduğu' (attach) ve kanlarıyla beslendiği anlatılır.",
    ],
    [
      "The venom of this jellyfish is so ---- that a serious sting can kill a person within minutes.",
      ["potent", "mild", "pleasant", "rare", "visible"],
      "Bu denizanasının zehrinin ciddi bir sokmanın bir insanı dakikalar içinde öldürebileceği kadar 'güçlü' (potent) olduğu anlatılır.",
    ],
    [
      "The disease caused sea stars to ---- into a mass of white tissue within a few days.",
      ["disintegrate", "grow", "migrate", "reproduce", "harden"],
      "Hastalığın deniz yıldızlarının birkaç gün içinde beyaz bir doku yığınına 'dağılmasına' (disintegrate) yol açtığı anlatılır.",
    ],
    [
      "Fish living in total darkness have ---- their eyes over many generations.",
      ["lost", "improved", "doubled", "painted", "borrowed"],
      "Tam karanlıkta yaşayan balıkların gözlerini pek çok kuşak boyunca 'yitirdiği' (lost) anlatılır.",
    ],
    [
      "The colony is ---- many individual animals, each with a different task.",
      ["made up of", "turned into", "cut off from", "run out of", "put up with"],
      "Koloninin her biri farklı bir görevi olan pek çok bireysel hayvandan 'oluştuğu' (made up of) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the canal was enlarged, the parasites ---- the upper lakes.",
      ["had reached", "reach", "have reached", "will reach", "are reaching"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had reached'.",
    ],
    [
      "If the chemical had not been discovered, the fisheries of the lakes ---- completely.",
      ["might have collapsed", "collapse", "will collapse", "had collapsed", "are collapsing"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have collapsed'.",
    ],
    [
      "Large numbers of shells ---- every year for sale to tourists.",
      ["are collected", "collect", "have collected", "collecting", "is collecting"],
      "Kabuklar toplanır; edilgen geniş zaman: 'are collected'.",
    ],
    [
      "---- the fish has no eyes, it finds food very efficiently.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Balığın gözsüz olması ile yiyeceği çok verimli bulması zıttır: 'Although'.",
    ],
    [
      "The fish, ---- lifespan is only a few months, is used to study ageing.",
      ["whose", "who", "which", "whom", "where"],
      "Balığın yaşam süresi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Rarely ---- divers see these animals near the surface.",
      ["do", "does", "are", "have", "is"],
      "'Rarely' ile devrik yapı, çoğul özne geniş zaman: 'do'.",
    ],
    [
      "The fish live in caves ---- no light ever reaches.",
      ["which", "where", "when", "whose", "what"],
      "'reach' geçişli fiildir; nesne 'caves'tir: 'which'.",
    ],
    [
      "The warmer the water became, ---- the disease spread.",
      ["the faster", "the fastest", "faster", "fastest", "so fast"],
      "'The warmer ..., the faster ...' paralel yapısı: 'the faster'.",
    ],
    [
      "Lifeguards recommend that swimmers ---- protective suits during the jellyfish season.",
      ["wear", "wears", "wore", "to wear", "wearing"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'wear'.",
    ],
    [
      "The animals are thought ---- in the oceans for hundreds of millions of years.",
      ["to have lived", "living", "to be lived", "lived", "having live"],
      "Geçmişten bugüne süren durum için mastarın geçmiş biçimi: 'to have lived'.",
    ],
    [
      "Vinegar is poured onto the sting ---- the remaining stinging cells do not fire.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Sokmaya sirke dökülmesinin amacı kalan iğneli hücrelerin ateşlememesidir: 'so that'.",
    ],
    [
      "The researchers had the colony ---- by a remotely operated vehicle.",
      ["filmed", "film", "filming", "to film", "films"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'filmed'.",
    ],
    [
      "Had the sea stars not disappeared, the kelp forests ---- so badly damaged.",
      ["might not have been", "are not", "will not be", "had not been", "are not being"],
      "Devrik üçüncü tip koşul cümlesi, edilgen: 'might not have been'.",
    ],
    [
      "Neither the divers nor the scientists ---- a colony of that size before.",
      ["had seen", "seeing", "to see", "has seen", "see to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had seen'.",
    ],
  ],
  cloze: [
    {
      text:
        "The nautilus is a relative of the octopus and the squid, but unlike them it lives inside a coiled outer shell. The shell is divided into a series of chambers, {1} the animal occupies only the largest and newest of them, near the opening. As it grows, it moves forward and seals off the chamber behind it with a wall. The older chambers are filled with a mixture of gas and liquid, {2} by adjusting the amount of liquid in them through a thin tube that runs through the walls, the nautilus can control its buoyancy and rise or sink in the water. Nautiluses live on the slopes of coral reefs in the tropical Indian and Pacific Oceans, {3} they usually spend the day in deep water, sometimes several hundred metres below the surface, and rise towards shallower water at night to feed on dead animals and small creatures. Animals with similar shells have existed for around five hundred million years, {4} the nautilus is sometimes described as a 'living fossil'. In recent decades, however, nautiluses have been caught in large numbers for their beautiful shells, which are sold as decorations and souvenirs. Because they grow slowly and produce few young, their populations cannot easily recover, {5} in 2016 international trade in nautiluses was brought under strict controls in an effort to protect them.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Kabuğun odalara bölünmesi ve hayvanın yalnızca en büyüğünde yaşaması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Eski odaların gaz ve sıvıyla dolu olması ve sıvı miktarını ayarlayarak kaldırma kuvvetini denetlemesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["where", "which", "when", "whose", "although"],
          "'coral reefs' yer bildirir; nautiluslar orada günü derin suda geçirir: 'where'.",
        ],
        [
          "(24) ----",
          ["so", "but", "although", "unless", "until"],
          "Benzer kabuklu hayvanların beş yüz milyon yıldır var olmasının sonucu 'yaşayan fosil' denmesidir: 'so'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Popülasyonların kolay toparlanamaması ve ticaretin denetim altına alınması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "Sea lampreys are eel-like fish with no jaws. Instead, they have a round, sucking mouth lined with sharp teeth, which they use to attach themselves to other fish, {1} they then scrape through the skin and feed on the blood and body fluids of their hosts, which often die as a result. Sea lampreys are native to the Atlantic Ocean, where they spend their adult lives at sea before swimming up rivers to breed. In the nineteenth and early twentieth centuries, however, canals were built to allow ships to travel between the Atlantic and the Great Lakes of North America, {2} the lampreys were able to use these routes to enter the lakes. The improvement of a canal that bypassed Niagara Falls allowed them to reach the upper lakes, {3} by the 1940s they had spread throughout the system. There they found plenty of fish and few natural enemies, {4} they caused a dramatic decline in populations of lake trout and other fish, devastating the commercial fishing industry. In the 1950s, after testing thousands of chemicals, scientists discovered one that killed young lampreys in the streams where they grew up while causing relatively little harm to most other species. Treating streams with this chemical, together with barriers and traps to prevent adults from reaching their breeding grounds, has reduced lamprey numbers by around ninety per cent, {5} the programme must continue indefinitely, since the lampreys quickly recover if control is relaxed.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Balıklara tutunmaları ve sonra derilerini kazıyarak beslenmeleri birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Kanalların yapılması ve taşaklı balıkların bu yollarla göllere girebilmesi birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Üst göllere ulaşmaları ve 1940'lara kadar bütün sisteme yayılmaları birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["so", "but", "although", "unless", "until"],
          "Bol balık ve az düşman bulmalarının sonucu balık popülasyonlarında çarpıcı düşüştür: 'so'.",
        ],
        [
          "(30) ----",
          ["but", "and", "so", "because", "unless"],
          "Sayıların yüzde doksan azalması ile programın süresiz sürmesi gerekmesi karşıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although nautiluses are related to octopuses and squid, ----.",
      [
        "they live inside a coiled outer shell",
        "the ocean is deep",
        "coral reefs are colourful",
        "shells are sold to tourists",
        "they rise towards shallower water at night to feed",
      ],
      "'Although' zıtlık ister: nautiluslar ahtapot ve kalamarla akraba olsa da sarmal bir dış kabuğun içinde yaşar.",
    ],
    [
      "If the canals had not been built, ----.",
      [
        "the lampreys might never have reached the Great Lakes",
        "ships are large",
        "canals are useful",
        "fish swim",
        "scientists would have tested thousands of chemicals in the 1950s",
      ],
      "Üçüncü tip koşul: kanallar yapılmasaydı taşaklı balıklar Büyük Göller'e hiç ulaşamayabilirdi.",
    ],
    [
      "----, the jellyfish is almost invisible in the water.",
      [
        "Pale and transparent",
        "Although swimmers are careful",
        "Unless it rained",
        "Since Australia is warm",
        "While lifeguards were pouring vinegar onto the sting",
      ],
      "Soluk ve saydam olan denizanası suda neredeyse görünmezdir.",
    ],
    [
      "The disease caused serious damage to kelp forests ----.",
      [
        "because sea stars normally keep the numbers of sea urchins under control",
        "although kelp grows fast",
        "unless the water was cold",
        "so that divers could see",
        "while scientists were trying to identify its cause",
      ],
      "Hastalık yosun ormanlarına ciddi zarar verdi, çünkü deniz yıldızları normalde deniz kestanelerinin sayısını denetim altında tutar.",
    ],
    [
      "Since the cave fish no longer need eyes in total darkness, ----.",
      [
        "they may save energy by not developing them",
        "caves are dark",
        "fish swim",
        "eyes are useful",
        "the fish can still breed with members of the same species living near the surface",
      ],
      "'Since' neden bildirir: mağara balıklarının tam karanlıkta artık göze ihtiyacı olmadığından onları geliştirmeyerek enerji tasarrufu yapıyor olabilirler.",
    ],
    [
      "Not only does the fish live for just a few months, ----.",
      [
        "but it also shows many signs of ageing found in other animals",
        "and ponds dry up",
        "since eggs are small",
        "so Africa is large",
        "unless the eggs had survived in the dry mud",
      ],
      "'Not only ... but also' yapısı tamamlanır: balık yalnızca birkaç ay yaşamakla kalmaz, diğer hayvanlarda görülen pek çok yaşlanma belirtisini de gösterir.",
    ],
    [
      "Once the streams had been treated with the chemical, ----.",
      [
        "the number of young lampreys fell sharply",
        "streams flow",
        "chemicals are tested",
        "fish swim upstream",
        "the parasites had already spread throughout the lakes",
      ],
      "Akarsular kimyasalla işlendikten sonra genç taşaklı balık sayısı keskin biçimde düştü.",
    ],
    [
      "Unless trade in the shells is controlled, ----.",
      [
        "nautilus populations may continue to decline",
        "shells are beautiful",
        "tourists buy souvenirs",
        "the ocean is large",
        "animals with similar shells would not have existed for five hundred million years",
      ],
      "'Unless' olumsuz koşul: kabuk ticareti denetlenmedikçe nautilus popülasyonları azalmayı sürdürebilir.",
    ],
    [
      "The colony was so long ----.",
      [
        "that it was among the longest animals ever recorded",
        "although it was thin",
        "because it was a colony",
        "unless it moved",
        "while it was filmed by a remotely operated vehicle off the coast of Australia",
      ],
      "Koloni o kadar uzundu ki kaydedilmiş en uzun hayvanlar arasındaydı.",
    ],
    [
      "Even though a box jellyfish sting can be fatal, ----.",
      [
        "most stings can be treated successfully if help arrives quickly",
        "jellyfish are animals",
        "the sea is warm",
        "beaches are popular",
        "the jellyfish has twenty-four eyes arranged in groups",
      ],
      "'Even though' zıtlık ister: kutu denizanası sokması ölümcül olabilse de yardım hızla ulaşırsa çoğu sokma başarıyla tedavi edilebilir.",
    ],
    [
      "As young lampreys spend several years in streams before migrating, ----.",
      [
        "treating the streams is an effective way to control them",
        "streams are cold",
        "lampreys have no jaws",
        "fish lay eggs",
        "adult lampreys feed on the blood of other fish in the lakes",
      ],
      "Genç taşaklı balıklar göç etmeden önce akarsularda birkaç yıl geçirdiği için akarsuları işlemek onları denetlemenin etkili bir yoludur.",
    ],
  ],
  enTr: [
    [
      "The animal seals off the old chamber with a wall.",
      [
        "Hayvan eski odayı bir duvarla kapatır.",
        "Hayvan eski odanın duvarını yıkar.",
        "Duvar hayvanı odaya kapatır.",
        "Hayvan hiçbir odayı kapatmaz.",
        "Oda yoktur.",
      ],
      "'The animal seals off the old chamber' 'hayvan eski odayı kapatır', 'with a wall' 'bir duvarla' karşılığıdır.",
    ],
    [
      "The lampreys feed on the blood of other fish.",
      [
        "Taşaklı balıklar diğer balıkların kanıyla beslenir.",
        "Diğer balıklar taşaklı balıkların kanıyla beslenir.",
        "Taşaklı balıklar yalnızca bitkilerle beslenir.",
        "Kan taşaklı balıkları besler.",
        "Balık yoktur.",
      ],
      "'The lampreys feed on' 'taşaklı balıklar beslenir', 'the blood of other fish' 'diğer balıkların kanıyla' karşılığıdır.",
    ],
    [
      "Each tentacle is covered in millions of stinging cells.",
      [
        "Her dokunaç milyonlarca iğneli hücreyle kaplıdır.",
        "Her dokunaç birkaç iğneli hücre içerir.",
        "İğneli hücreler dokunaçları kaplar ve yok eder.",
        "Dokunaçlarda hiç hücre yoktur.",
        "Dokunaç yoktur.",
      ],
      "'Each tentacle is covered' 'her dokunaç kaplıdır', 'in millions of stinging cells' 'milyonlarca iğneli hücreyle' karşılığıdır.",
    ],
    [
      "Millions of sea stars died along the Pacific coast.",
      [
        "Pasifik kıyısı boyunca milyonlarca deniz yıldızı öldü.",
        "Pasifik kıyısı boyunca milyonlarca deniz yıldızı doğdu.",
        "Deniz yıldızları Pasifik kıyısını terk etti.",
        "Pasifik kıyısı deniz yıldızlarını öldürdü.",
        "Deniz yıldızı yoktu.",
      ],
      "'Millions of sea stars died' 'milyonlarca deniz yıldızı öldü', 'along the Pacific coast' 'Pasifik kıyısı boyunca' karşılığıdır.",
    ],
    [
      "The cave fish sleep much less than their relatives near the surface.",
      [
        "Mağara balıkları yüzeye yakın akrabalarından çok daha az uyur.",
        "Mağara balıkları yüzeye yakın akrabalarından çok daha fazla uyur.",
        "Yüzeydeki balıklar hiç uyumaz.",
        "Akrabalar mağara balıklarını uyutur.",
        "Balık yoktur.",
      ],
      "'The cave fish sleep much less' 'mağara balıkları çok daha az uyur', 'than their relatives near the surface' 'yüzeye yakın akrabalarından' karşılığıdır.",
    ],
    [
      "Some members of the colony catch food while others digest it.",
      [
        "Koloninin bazı üyeleri besin yakalarken diğerleri onu sindirir.",
        "Koloninin tüm üyeleri aynı görevi yapar.",
        "Besin koloninin üyelerini yakalar.",
        "Koloni hiç beslenmez.",
        "Koloni yoktur.",
      ],
      "'Some members of the colony catch food' 'koloninin bazı üyeleri besin yakalar', 'while others digest it' 'diğerleri onu sindirirken' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Nautiluslar gündüzleri derin suda kalır ve geceleri yüzeye doğru yükselir.",
      [
        "Nautiluses stay in deep water by day and rise towards the surface at night.",
        "Nautiluses stay near the surface by day and sink at night.",
        "The surface rises towards the nautiluses at night.",
        "Nautiluses never move.",
        "There are no nautiluses.",
      ],
      "'Nautiluslar gündüzleri derin suda kalır' 'nautiluses stay in deep water by day', 'geceleri yüzeye doğru yükselir' 'rise towards the surface at night' karşılığıdır.",
    ],
    [
      "Kimyasal, diğer türlerin çoğuna görece az zarar verir.",
      [
        "The chemical causes relatively little harm to most other species.",
        "The chemical kills all other species.",
        "Most other species harm the chemical.",
        "The chemical has never been used.",
        "There is no chemical.",
      ],
      "'Kimyasal görece az zarar verir' 'the chemical causes relatively little harm', 'diğer türlerin çoğuna' 'to most other species' karşılığıdır.",
    ],
    [
      "Yüzücülere sokulmamak için koruyucu giysiler giymeleri önerilir.",
      [
        "Swimmers are advised to wear protective suits to avoid being stung.",
        "Swimmers are advised to remove their suits to avoid being stung.",
        "Protective suits sting the swimmers.",
        "Swimmers are never stung.",
        "There are no swimmers.",
      ],
      "'Yüzücülere önerilir' 'swimmers are advised', 'sokulmamak için koruyucu giysiler giymeleri' 'to wear protective suits to avoid being stung' karşılığıdır.",
    ],
    [
      "Bilim insanları hastalığın nedenini hâlâ tartışmaktadır.",
      [
        "Scientists are still debating the cause of the disease.",
        "Scientists agreed on the cause of the disease at once.",
        "The disease is debating the scientists.",
        "Nobody has studied the disease.",
        "There is no disease.",
      ],
      "'Bilim insanları hâlâ tartışmaktadır' 'scientists are still debating', 'hastalığın nedenini' 'the cause of the disease' karşılığıdır.",
    ],
    [
      "Yumurtalar kuru çamurda aylarca hayatta kalabilir.",
      [
        "The eggs can survive in dry mud for months.",
        "The eggs die immediately in dry mud.",
        "Dry mud survives in the eggs.",
        "The fish never lay eggs.",
        "There are no eggs.",
      ],
      "'Yumurtalar hayatta kalabilir' 'the eggs can survive', 'kuru çamurda aylarca' 'in dry mud for months' karşılığıdır.",
    ],
    [
      "Koloni 2020'de Avustralya kıyısı açıklarında filme alındı.",
      [
        "The colony was filmed off the coast of Australia in 2020.",
        "The colony filmed the coast of Australia in 2020.",
        "The colony was never seen.",
        "Australia filmed the colony's coast.",
        "There was no colony.",
      ],
      "'Koloni filme alındı' 'the colony was filmed', 'Avustralya kıyısı açıklarında 2020'de' 'off the coast of Australia in 2020' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Box jellyfish are named for the cube-like shape of their bodies, which are pale, almost transparent and therefore very difficult to see in the water. The largest species, found in the coastal waters of northern Australia and parts of Southeast Asia, has a body around thirty centimetres across and as many as fifteen tentacles hanging from each of its four corners, each of which can stretch up to three metres. The tentacles are covered in millions of microscopic stinging cells, each of which contains a coiled thread that can be fired into the skin of prey or of a person who brushes against it, injecting a powerful venom. The venom attacks the heart, the nervous system and the skin, and in serious cases a person can die within minutes, often before reaching the shore. Unlike most jellyfish, which drift with the currents, box jellyfish are active swimmers, and they have a surprisingly complex visual system, with twenty-four eyes arranged in groups, some of which appear to be able to form images. Researchers believe that the jellyfish use their eyes to avoid obstacles and to navigate among the roots of the mangroves where they often live. In northern Australia, beaches are often closed during the season when box jellyfish are most common, and some popular beaches are protected by nets that keep out the larger species. Swimmers are advised to wear full-length protective suits, and vinegar is kept on many beaches, since pouring it onto a sting prevents the stinging cells that remain on the skin from firing. However, researchers caution that vinegar does not neutralise venom that has already been injected, and that urgent medical help is essential.",
      questions: [
        [
          "According to the passage, box jellyfish are difficult to see because ----.",
          [
            "they are pale and almost transparent",
            "they live only in deep water",
            "they are very small",
            "they hide among the roots of mangroves to avoid obstacles while navigating",
            "they are active only at night",
          ],
          "Metne göre bedenleri soluk ve neredeyse saydamdır.",
        ],
        [
          "Box jellyfish differ from most other jellyfish in that they ----.",
          [
            "swim actively and have complex eyes",
            "drift with the currents",
            "have no tentacles",
            "are harmless to people",
            "live only in cold water",
          ],
          "Akıntıyla sürüklenen çoğu denizanasının aksine etkin yüzücüdürler ve gruplar hâlinde yirmi dört gözleri vardır.",
        ],
        [
          "It can be understood from the passage that vinegar ----.",
          [
            "helps but does not replace urgent medical treatment",
            "neutralises all the venom",
            "attracts jellyfish",
            "should never be used",
            "cures a sting completely",
          ],
          "Sirke deride kalan iğneli hücrelerin ateşlenmesini önler ama zaten enjekte edilmiş zehri etkisizleştirmez.",
        ],
      ],
    },
    {
      text:
        "In temporary pools that form during the rainy season in parts of south-eastern Africa lives a small, brightly coloured fish known as the turquoise killifish. Its way of life is shaped by the fact that its home exists for only a few months each year. When the rains come and the pools fill, eggs that have been lying in the dry mud hatch, and the young fish grow extremely quickly, reaching maturity within a few weeks, a faster rate than almost any other animal with a backbone. They then breed, laying eggs in the mud before the pools dry up and the adults die. The eggs can survive in the dry mud for months, or even years, in a state of suspended development, until the next rains arrive. In the laboratory, the fish typically live for only a few months, making them the shortest-lived vertebrates that can be kept in captivity. Remarkably, during this short life they show many of the signs of ageing found in other animals, including humans, such as declining movement and memory, changes in the colour of their skin and the development of tumours. For this reason, the turquoise killifish has become an important tool for scientists studying ageing. Researchers can test the effects of diet, temperature, medicines and changes in genes on lifespan and health far more quickly than they could with mice, which live for two to three years. Studies have shown, for example, that keeping the fish at slightly lower temperatures or restricting their food can extend their lives. Scientists hope that such research will help to identify the biological processes that cause ageing, and perhaps suggest ways of slowing them in people.",
      questions: [
        [
          "According to the passage, the killifish grows quickly because ----.",
          [
            "its pools exist for only a few months each year",
            "it lives in large lakes",
            "it is kept in laboratories",
            "it has been given medicines that extend lifespan and slow the effects of ageing",
            "it has no predators",
          ],
          "Metne göre yaşadığı geçici havuzlar yılda yalnızca birkaç ay var olur.",
        ],
        [
          "The writer mentions signs of ageing in the killifish to explain why ----.",
          [
            "it is useful for research on ageing",
            "it dies before breeding",
            "it cannot be kept in captivity",
            "it lives longer than mice",
            "it changes colour in the rainy season",
          ],
          "Kısa yaşamında insanlar da dahil diğer hayvanlarda görülen yaşlanma belirtilerinin çoğunu gösterir.",
        ],
        [
          "It can be understood from the passage that, compared with mice, the killifish allows researchers to ----.",
          [
            "obtain results much more quickly",
            "study larger animals",
            "avoid studying genes",
            "work without laboratories",
            "study only diet",
          ],
          "Araştırmacılar etkileri iki-üç yıl yaşayan farelere göre çok daha hızlı test edebilir.",
        ],
      ],
    },
    {
      text:
        "In 2013, divers and scientists along the Pacific coast of North America began to notice that sea stars, also known as starfish, were dying in unprecedented numbers. Affected animals first developed white sores, then their arms twisted and fell off, and within a few days many disintegrated into a mass of white tissue. The condition, which became known as sea star wasting disease, spread rapidly along thousands of kilometres of coast, from Mexico to Alaska, and affected around twenty species. One of the worst affected was the sunflower sea star, a large, fast-moving predator with up to twenty-four arms, which declined by more than ninety per cent across much of its range and almost disappeared from some areas. Scientists have struggled to identify the cause. Early research suggested that a virus might be responsible, but later studies questioned this, and other possible explanations, including bacteria and low levels of oxygen in the water, were proposed. In 2025, researchers reported evidence that a particular type of bacterium was involved. Many scientists believe that unusually warm sea temperatures during a marine heatwave made the sea stars more vulnerable. The loss of sea stars has had serious effects on other parts of the ecosystem. Sunflower sea stars eat large numbers of sea urchins, which in turn feed on kelp, the large seaweed that forms underwater forests along the coast. Without the sea stars to control them, urchin numbers increased dramatically in some areas, and they destroyed large areas of kelp forest. Researchers are now trying to breed sunflower sea stars in captivity, with the aim of eventually returning them to the wild.",
      questions: [
        [
          "According to the passage, sea star wasting disease ----.",
          [
            "spread along thousands of kilometres of coast",
            "affected only one species",
            "was quickly explained",
            "caused sea urchins to destroy kelp forests along the coast from Mexico to Alaska",
            "occurred only in Mexico",
          ],
          "Metne göre hastalık Meksika'dan Alaska'ya binlerce kilometrelik kıyı boyunca hızla yayıldı.",
        ],
        [
          "The writer mentions sea urchins and kelp to show ----.",
          [
            "how the loss of sea stars affected the wider ecosystem",
            "what caused the disease",
            "why sea stars have many arms",
            "where divers prefer to swim",
            "how kelp is harvested",
          ],
          "Deniz yıldızları olmadan deniz kestaneleri çoğaldı ve büyük yosun ormanlarını yok etti.",
        ],
        [
          "It can be understood from the passage that the cause of the disease ----.",
          [
            "has been difficult to establish",
            "was identified in 2013",
            "is certainly a virus",
            "has nothing to do with temperature",
            "is pollution from ships",
          ],
          "Bilim insanları nedeni belirlemekte zorlandı; virüs, bakteri ve düşük oksijen gibi açıklamalar önerildi.",
        ],
      ],
    },
    {
      text:
        "The Mexican tetra is a small freshwater fish that exists in two very different forms. One form lives in rivers and streams and looks like an ordinary fish, with silvery scales and large eyes. The other form lives in total darkness in around thirty caves in north-eastern Mexico, and it has no eyes and almost no colour. Remarkably, the two forms belong to the same species and can breed with each other, which makes them extremely useful to scientists studying how animals adapt to new environments. Research suggests that the cave populations descended from river fish that were swept into the caves at different times over the past few hundred thousand years. In the cave fish, eyes begin to form in the embryo but then stop developing and are covered over by skin. Scientists believe that losing their eyes may save the fish a great deal of energy, since the eyes and the parts of the brain that process vision use large amounts of it. The cave fish have also developed other characteristics that suit life in caves, where food is often scarce. They have more taste buds and a more sensitive system for detecting movements in the water, which helps them to find food in the dark. They sleep much less than river fish, store large amounts of fat when food is available and are able to tolerate high levels of sugar in their blood, a condition that would cause health problems in humans. Because the two forms can be crossed and studied in the laboratory, researchers have been able to identify some of the genes involved in these changes, and some hope that the research may shed light on human conditions such as diabetes and sleep disorders.",
      questions: [
        [
          "The writer suggests that scientists value the Mexican tetra mainly because its two forms ----.",
          [
            "belong to the same species and can breed with each other",
            "live in the same caves",
            "both have large eyes",
            "were swept into the caves at different times during the past few hundred thousand years",
            "are found all over the world",
          ],
          "Metne göre iki biçim aynı türe aittir ve birbiriyle çiftleşebilir.",
        ],
        [
          "Scientists believe that losing their eyes may help the cave fish ----.",
          [
            "save energy",
            "find mates",
            "avoid predators",
            "swim faster",
            "change colour",
          ],
          "Gözler ve görmeyi işleyen beyin bölümleri büyük miktarda enerji kullanır.",
        ],
        [
          "It can be understood from the passage that some researchers hope the cave fish will ----.",
          [
            "help to explain certain human health conditions",
            "replace river fish",
            "regain their eyes",
            "be used as food",
            "live outside caves",
          ],
          "Araştırmanın diyabet ve uyku bozuklukları gibi insan durumlarına ışık tutabileceği umulmaktadır.",
        ],
      ],
    },
    {
      text:
        "Siphonophores are among the strangest animals in the ocean. At first sight, a siphonophore may look like a single creature, such as a long, thin jellyfish, but it is in fact a colony made up of many individual animals, known as zooids, all of which have developed from a single fertilised egg. The zooids are specialised for different tasks. Some are responsible for swimming, pushing the colony through the water by squirting jets; others have tentacles that catch prey; others digest food and pass nutrients to the rest of the colony; and still others are responsible for reproduction. None of them can survive on its own, so the colony functions in many ways like a single organism. The best-known siphonophore, the Portuguese man o' war, floats at the surface of the sea using a gas-filled bag, but most species live in the deep ocean, where they are fragile and difficult to study, since they often break apart when they are caught in nets. Much of what is known about them comes from observations made by underwater vehicles. Some siphonophores can grow to remarkable lengths. In 2020, researchers using a remotely operated vehicle in a deep canyon off the coast of Western Australia filmed a colony arranged in a huge spiral, which they estimated to be around forty-seven metres long, making it one of the longest animals ever recorded. Siphonophores are important predators in the deep sea, feeding on small crustaceans and fish, and scientists believe that they are far more common than was once thought. Their unusual structure has also raised interesting questions about what it means to be an individual animal.",
      questions: [
        [
          "According to the passage, a siphonophore is ----.",
          [
            "a colony of specialised animals that developed from one egg",
            "a type of jellyfish",
            "a single large animal",
            "a gas-filled bag that floats at the surface of the sea like the Portuguese man o' war",
            "a type of fish",
          ],
          "Metne göre tek bir döllenmiş yumurtadan gelişmiş zooid denen pek çok bireysel hayvandan oluşan bir koloni.",
        ],
        [
          "Siphonophores are difficult to study because ----.",
          [
            "most are fragile and break apart in nets",
            "they live only at the surface",
            "they are very rare",
            "they are dangerous to divers",
            "they move too quickly",
          ],
          "Türlerin çoğu derin okyanusta yaşar, kırılgandır ve ağlara yakalandıklarında çoğu zaman parçalanır.",
        ],
        [
          "It can be understood from the passage that siphonophores raise questions about ----.",
          [
            "what counts as an individual animal",
            "how the ocean was formed",
            "why fish have scales",
            "how canyons are formed",
            "why jellyfish sting",
          ],
          "Alışılmadık yapıları bireysel bir hayvan olmanın ne anlama geldiği konusunda ilginç sorular doğurmuştur.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Parrotfish feed by scraping algae from coral and rock with their beak-like teeth. ---- In some areas, much of the white sand on the beaches has passed through the bodies of these fish.",
      [
        "In the process, they swallow pieces of coral, grind them up and pass them out as fine sand.",
        "Coral reefs are found in warm waters.",
        "Algae need sunlight to grow.",
        "Some species of parrotfish sleep inside a bubble of mucus that may protect them from parasites.",
        "Beaches attract tourists.",
      ],
      "Boşluk beslenme sürecini anlatıp kumun kaynağına bağlanan bir cümle gerektirir; boşluğa bu süreçte mercan parçalarını yutup öğüterek ince kum olarak dışarı attıklarını söyleyen cümle gelmelidir.",
    ],
    [
      "Cleaner wrasse are small fish that remove parasites from the bodies of larger fish. ---- In 2019, researchers reported that some cleaner wrasse appeared to recognise themselves in a mirror.",
      [
        "Large fish visit their 'cleaning stations' on the reef and wait patiently while they are cleaned.",
        "Many fish live on coral reefs.",
        "Parasites can cause disease.",
        "The cleaners sometimes cheat by biting off healthy tissue, and their clients respond by chasing them.",
        "Mirrors reflect light.",
      ],
      "Boşluk temizlikçi balıkların davranışını anlatıp ayna deneyine bağlanan bir cümle gerektirir; boşluğa büyük balıkların resifteki 'temizlik istasyonlarını' ziyaret edip sabırla beklediğini söyleyen cümle gelmelidir.",
    ],
    [
      "The remora has a remarkable sucker on the top of its head that allows it to attach itself to sharks, whales and turtles. ---- In return, it may eat parasites and scraps of food left by its host.",
      [
        "The sucker is actually a modified fin, and it allows the fish to travel long distances without using energy.",
        "Sharks have existed for millions of years.",
        "Turtles lay their eggs on beaches.",
        "Engineers have studied the sucker in order to design devices that can stick to wet surfaces.",
        "Whales are mammals.",
      ],
      "Boşluk vantuzun yapısını ve yararını anlatıp karşılığında ne yaptığına bağlanan bir cümle gerektirir; boşluğa vantuzun değişmiş bir yüzgeç olduğunu ve balığın enerji harcamadan uzun mesafe gitmesini sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Many species of pufferfish contain a powerful poison in their organs. ---- In Japan, chefs must train for years and obtain a special licence before they are allowed to prepare it.",
      [
        "Even a small amount can paralyse and kill a person, yet the fish is regarded as a delicacy.",
        "Japan is famous for its food.",
        "Fish are a good source of protein.",
        "The poison is thought to be produced by bacteria that the fish obtain from their food.",
        "Chefs work in restaurants.",
      ],
      "Boşluk zehrin tehlikesini anlatıp aşçıların lisans almasına bağlanan bir cümle gerektirir; boşluğa küçük bir miktarın bile insanı felç edip öldürebileceğini ama balığın lezzetli sayıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "On a few nights each year, usually after a full moon in late spring, many corals on the Great Barrier Reef release their eggs and sperm at the same time. ---- Scientists believe that releasing them together increases the chances of fertilisation.",
      [
        "The water becomes filled with clouds of tiny pink and white bundles rising towards the surface.",
        "The Great Barrier Reef is very large.",
        "The moon affects the tides.",
        "Divers travel from around the world to witness the event, which can be predicted fairly accurately.",
        "Corals are animals.",
      ],
      "Boşluk olayın görünüşünü anlatıp birlikte salınmanın nedenine bağlanan bir cümle gerektirir; boşluğa suyun yüzeye doğru yükselen küçük pembe ve beyaz demetlerle dolduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Some fish living in muddy rivers in Africa and South America produce weak electric fields around their bodies. ---- They also use electrical signals to communicate with one another.",
      [
        "By sensing changes in these fields, they can detect objects and prey in water where they cannot see.",
        "Rivers flow into the sea.",
        "Mud is soft.",
        "Each species produces signals with a characteristic pattern, rather like a song.",
        "Fish have gills.",
      ],
      "Boşluk elektrik alanının yararını anlatıp 'ayrıca iletişim kurarlar' bilgisine bağlanan bir cümle gerektirir; boşluğa bu alanlardaki değişiklikleri algılayarak göremedikleri suda nesneleri ve avı saptayabildiklerini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The okapi lives in the rainforests of central Africa.",
        "Although it has striped legs like a zebra, it is related to the giraffe.",
        "It was not described by European scientists until 1901.",
        "Zebras live in large herds on the plains.",
        "The okapi is shy and rarely seen in the wild.",
      ],
      odd: 3,
      why: "Parça okapiyi anlatır. Zebraların ovalarda büyük sürüler hâlinde yaşadığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Clownfish live among the stinging tentacles of sea anemones.",
        "A layer of mucus on their skin protects them from being stung.",
        "Clownfish defend the anemone against fish that might eat it.",
        "Sea water contains dissolved salt.",
        "All clownfish are born male, and some later become female.",
      ],
      odd: 3,
      why: "Parça palyaço balıkları ile deniz şakayıkları arasındaki ilişkiyi anlatır. Deniz suyunun çözünmüş tuz içerdiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Coconut crabs are the largest crabs that live on land.",
        "They can climb trees and crack open coconuts with their claws.",
        "Coconuts are used to make oil and milk.",
        "Young coconut crabs live in the sea before moving onto land.",
        "They can live for more than fifty years.",
      ],
      odd: 2,
      why: "Parça karada yaşayan en büyük yengeç olan hindistancevizi yengeçlerini anlatır. Hindistancevizinin yağ ve süt yapımında kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Flounders are flat fish that lie on the sea floor.",
        "When they hatch, they swim upright like other fish.",
        "As they grow, one eye moves across the head to join the other.",
        "Many people enjoy eating fish with chips.",
        "Their skin can change colour to match the sea floor.",
      ],
      odd: 3,
      why: "Parça pisi balıklarının gelişimini anlatır. Pek çok insanın patates kızartmasıyla balık yemekten hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Pteropods are tiny swimming snails sometimes called sea butterflies.",
        "Whales and many fish depend on them as prey.",
        "Snails are also found in gardens.",
        "Their thin shells can dissolve as the ocean becomes more acidic.",
        "Scientists monitor them as an early warning of changes in ocean chemistry.",
      ],
      odd: 2,
      why: "Parça deniz kelebekleri denen küçük salyangozları anlatır. Salyangozların bahçelerde de bulunduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In male fiddler crabs, a single giant claw can weigh nearly half as much as the body.",
        "They wave the large claw to attract females.",
        "They also use it to fight other males.",
        "The crabs live in burrows on muddy shores.",
        "Mangrove trees grow along many tropical coasts.",
      ],
      odd: 4,
      why: "Parça erkek kemancı yengeçlerin büyük kıskacını anlatır. Mangrov ağaçlarının pek çok tropik kıyıda yetiştiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
