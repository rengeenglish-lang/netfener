import type { YokdilDeneme } from "./types";

export const FEN_63: YokdilDeneme = {
  no: 63,
  field: "fen",
  vocab: [
    [
      "Genetic tests showed that the fungus covering the forest was a single ---- organism, not many separate ones.",
      ["individual", "artificial", "temporary", "invisible", "frozen"],
      "Genetik testlerin ormanı kaplayan mantarın birçok ayrı organizma değil tek bir 'birey' (individual) organizma olduğunu gösterdiği anlatılır.",
    ],
    [
      "The fungus spread rapidly and ---- frog populations on several continents.",
      ["devastated", "protected", "multiplied", "entertained", "examined"],
      "Mantarın hızla yayıldığı ve birçok kıtadaki kurbağa popülasyonlarını 'yerle bir ettiği' (devastated) anlatılır.",
    ],
    [
      "An infected ant climbs a plant and ---- its jaws onto a leaf just before it dies.",
      ["locks", "washes", "paints", "counts", "sells"],
      "Enfekte bir karıncanın bir bitkiye tırmandığı ve ölmeden hemen önce çenelerini bir yaprağa 'kilitlediği' (locks) anlatılır.",
    ],
    [
      "The bats wake too often during the winter and use up their fat ---- before spring arrives.",
      ["reserves", "opinions", "neighbours", "colours", "journeys"],
      "Yarasaların kış boyunca çok sık uyandığı ve bahar gelmeden yağ 'rezervlerini' (reserves) tükettiği anlatılır.",
    ],
    [
      "For more than a century, scientists could not agree how to ---- the strange tall fossils.",
      ["classify", "reward", "warm", "deliver", "borrow"],
      "Bilim insanlarının yüzyılı aşkın süre tuhaf, uzun fosilleri nasıl 'sınıflandıracakları' (classify) konusunda anlaşamadığı anlatılır.",
    ],
    [
      "When the coffee plantations failed, many planters decided to ---- tea instead.",
      ["switch to", "give up", "look after", "run out of", "put off"],
      "Kahve plantasyonları çökünce pek çok çiftçinin onun yerine çaya 'geçmeye' (switch to) karar verdiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time scientists measured it, the fungus ---- across the forest for thousands of years.",
      ["had been spreading", "spreads", "has been spreading", "will be spreading", "is spreading"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been spreading'.",
    ],
    [
      "If the fungus had not been carried around the world, many frog species ---- extinct.",
      ["might not have become", "will not become", "do not become", "had not become", "would not become"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have become'.",
    ],
    [
      "The fungus ---- first in a cave in New York State in 2006.",
      ["was observed", "observed", "has observed", "observes", "is observing"],
      "Mantar gözlemlenmiştir; edilgen geçmiş zaman: 'was observed'.",
    ],
    [
      "---- the fossils looked like tree trunks, they turned out to be fungi.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Fosillerin ağaç gövdesine benzemesi ile mantar çıkması zıttır: 'Although'.",
    ],
    [
      "The farmers, ---- turkeys died in large numbers, called in scientists to investigate.",
      ["whose", "who", "which", "whom", "where"],
      "Çiftçilerin hindileri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until the 1990s ---- scientists identify the fungus that was killing the frogs.",
      ["did", "had", "were", "have", "do not"],
      "'Not until' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The ants live in tropical forests, ---- the air near the ground is warm and humid.",
      ["where", "which", "when", "whose", "that"],
      "'tropical forests' yer bildirir; hava orada sıcak ve nemlidir: 'where'.",
    ],
    [
      "The warmer and wetter the weather was, ---- the rust spread.",
      ["the faster", "the fastest", "faster", "fastest", "so fast"],
      "'The warmer ..., the faster ...' paralel yapısı: 'the faster'.",
    ],
    [
      "Experts recommend that visitors to caves ---- their clothes and boots afterwards.",
      ["clean", "cleans", "cleaned", "to clean", "cleaning"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'clean'.",
    ],
    [
      "The fungus is estimated ---- millions of bats in North America.",
      ["to have killed", "killing", "to be killed", "killed", "having kill"],
      "Geçmişe ait durum için mastarın geçmiş biçimi: 'to have killed'.",
    ],
    [
      "Truffle hunters now use dogs rather than pigs ---- the truffles are not eaten.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Köpek kullanmanın amacı trüflerin yenmemesidir: 'so that'.",
    ],
    [
      "The researchers had samples of the fungus ---- from every tree in the area.",
      ["collected", "collect", "collecting", "to collect", "collects"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'collected'.",
    ],
    [
      "Had the planters known how to control the disease, the island ---- its coffee industry.",
      ["might not have lost", "loses", "will lose", "had lost", "is losing"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have lost'.",
    ],
    [
      "Neither the farmers nor the vets ---- what was killing the birds.",
      ["knew", "knowing", "to know", "has known to", "know to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'knew'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the Blue Mountains of eastern Oregon, in the United States, large numbers of trees in the Malheur National Forest were dying, {1} foresters discovered that they were being killed by a fungus called Armillaria, known as honey fungus because of the colour of its mushrooms. In the late 1990s, scientists collected samples from dead and dying trees over a wide area and compared their DNA. They found that the samples were genetically identical, {2} they concluded that they all belonged to a single organism. It covered an area of about nine square kilometres, {3} it ranks among the biggest organisms ever found on Earth. Most of the fungus is hidden underground or beneath the bark of trees, where it spreads by means of dark, root-like strands that can grow several metres a year. The mushrooms that appear above the ground in autumn are only its temporary reproductive structures, {4} they give little idea of its true size. Based on its rate of growth, scientists have estimated that the fungus may be anywhere from two thousand to more than eight thousand years old. It slowly kills the trees it infects, {5} it also plays a natural role in the forest by breaking down dead wood and creating open spaces where new plants can grow.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Ağaçların ölmesi ve ormancıların nedenini keşfetmesi birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["so", "but", "or", "unless", "although"],
          "Örneklerin genetik olarak aynı olmasının sonucu tek bir organizmaya ait oldukları sonucudur: 'so'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Geniş bir alanı kaplaması ve en büyük canlılardan biri sayılması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["so", "but", "or", "unless", "although"],
          "Mantarların yalnızca geçici yapılar olmasının sonucu gerçek boyut hakkında fikir vermemeleridir: 'so'.",
        ],
        [
          "(25) ----",
          ["but", "and", "so", "because", "unless"],
          "Ağaçları öldürmesi ile ormanda doğal bir rol oynaması karşıtlık içerir: 'but'.",
        ],
      ],
    },
    {
      text:
        "From the 1970s, scientists in Australia, Central America and elsewhere observed steep falls in the numbers of frogs, even in protected forests far from roads and farms. In some places, entire species disappeared within a few years. In 1998, researchers identified the cause as a previously unknown fungus that infects the skin of amphibians, {1} it was named Batrachochytrium dendrobatidis, often shortened to Bd. Frogs use their thin skin to absorb water and important salts, {2} the infection disrupts this process, eventually causing the heart to stop. The fungus spreads through water, {3} its spores can swim short distances to find new hosts. Genetic studies suggest that a particularly deadly form of it originated in East Asia and reached other continents in the 1900s, most likely carried by the global trade in amphibians for food, pets and laboratories. A study published in 2019 estimated that the fungus had contributed to the decline of at least five hundred amphibian species, {4} about ninety of them were thought to have become extinct. This makes it one of the most destructive diseases of wildlife ever recorded. Some populations have since begun to recover, {5} scientists are trying to protect others by breeding animals in captivity and searching for frogs that are naturally resistant.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "until"],
          "Nedenin belirlenmesi ve mantara ad verilmesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "Kurbağaların derileriyle emilim yapması ve enfeksiyonun bunu bozması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "Mantarın suyla yayılması ve sporlarının yüzebilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Beş yüz türün azalmasına katkıda bulunması ve doksanının yok olması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Bazı popülasyonların toparlanması ve bilim insanlarının diğerlerini korumaya çalışması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the mushrooms of the fungus are small, ----.",
      [
        "the organism as a whole covers several square kilometres",
        "mushrooms grow in autumn",
        "Oregon has many forests",
        "trees are tall",
        "it was given its name because of the colour of the mushrooms it produces",
      ],
      "'Although' zıtlık ister: mantarın şapkalı yapıları küçük olsa da organizmanın tamamı birkaç kilometrekareyi kaplar.",
    ],
    [
      "If frogs did not rely on their skin to absorb water and salts, ----.",
      [
        "the fungus might be far less deadly to them",
        "frogs live near water",
        "skin is thin",
        "salts are important",
        "the infection would have been identified by researchers in Australia in the 1970s",
      ],
      "İkinci tip koşul: kurbağalar su ve tuzları emmek için derilerine bağımlı olmasaydı mantar onlar için çok daha az öldürücü olabilirdi.",
    ],
    [
      "----, the infected ant leaves its nest and climbs to a particular height.",
      [
        "Controlled by chemicals released by the fungus",
        "Although ants are small",
        "Unless the forest is dry",
        "Since leaves are green",
        "While other ants in the colony continue searching for food on the forest floor",
      ],
      "Mantarın saldığı kimyasallarla denetlenen enfekte karınca yuvasını terk edip belirli bir yüksekliğe tırmanır.",
    ],
    [
      "Many bats die during the winter ----.",
      [
        "because the infection wakes them and they use up their energy",
        "although caves are cold",
        "unless they eat insects",
        "so that they can fly",
        "while scientists are counting them in caves across North America",
      ],
      "Pek çok yarasa enfeksiyon onları uyandırdığı ve enerjilerini tükettikleri için kış boyunca ölür.",
    ],
    [
      "Since the fossils were up to eight metres tall, ----.",
      [
        "they were the largest living things on land at the time",
        "fossils are old",
        "rocks are hard",
        "trees have leaves",
        "a Canadian geologist had first described them in the middle of the nineteenth century",
      ],
      "'Since' neden bildirir: fosiller sekiz metreye varan uzunlukta olduğu için o dönemde karadaki en büyük canlılardı.",
    ],
    [
      "Not only did the disease destroy the coffee plantations, ----.",
      [
        "but it also helped to turn the island into a major producer of tea",
        "and coffee is a drink",
        "since leaves fall",
        "so planters were rich",
        "unless the British had been drinking more coffee than tea in the seventeenth century",
      ],
      "'Not only ... but also' yapısı tamamlanır: hastalık yalnızca kahve plantasyonlarını yok etmekle kalmadı, adanın büyük bir çay üreticisine dönüşmesine de yardım etti.",
    ],
    [
      "Once scientists had traced the turkeys' deaths to their feed, ----.",
      [
        "they discovered that it contained a poisonous substance made by a mould",
        "turkeys eat grain",
        "feed is cheap",
        "farms are large",
        "the disease had been given a name because nobody knew what caused it",
      ],
      "Bilim insanları hindilerin ölümlerini yemlerine bağlayınca yemin bir küfün ürettiği zehirli bir madde içerdiğini keşfettiler.",
    ],
    [
      "Unless the fungus is controlled, ----.",
      [
        "some species of bats may disappear from large areas",
        "bats sleep in caves",
        "caves are dark",
        "fungi grow slowly",
        "the scientists would not have found it on the noses of bats in New York State",
      ],
      "'Unless' olumsuz koşul: mantar kontrol altına alınmazsa bazı yarasa türleri geniş alanlardan yok olabilir.",
    ],
    [
      "The fungus grows so slowly ----.",
      [
        "that it may have taken thousands of years to reach its present size",
        "although it is large",
        "because trees are tall",
        "unless the soil is wet",
        "while its mushrooms appear above the ground only for a few weeks each autumn",
      ],
      "Mantar o kadar yavaş büyür ki bugünkü boyutuna ulaşması binlerce yıl almış olabilir.",
    ],
    [
      "Even though the fungus kills the ant, ----.",
      [
        "it needs the ant to climb to the right place first",
        "ants are insects",
        "forests are humid",
        "fungi have spores",
        "the ant had been searching for food on the forest floor when it was infected",
      ],
      "'Even though' zıtlık ister: mantar karıncayı öldürse de önce karıncanın doğru yere tırmanmasına ihtiyaç duyar.",
    ],
    [
      "As the fungus spreads through water, ----.",
      [
        "frogs living in streams are particularly at risk",
        "water is clear",
        "streams flow downhill",
        "frogs can swim",
        "genetic studies have suggested that it originated somewhere in East Asia",
      ],
      "Mantar suyla yayıldığı için derelerde yaşayan kurbağalar özellikle risk altındadır.",
    ],
  ],
  enTr: [
    [
      "Most of the fungus is hidden underground.",
      [
        "Mantarın çoğu yer altında gizlidir.",
        "Mantarın çoğu ağaçların tepesinde görülür.",
        "Yer altında gizlenen mantar, hiçbir zaman yüzeye çıkmaz.",
        "Yer altı mantarın çoğunu gizler.",
        "Mantar hiç gizli değildir.",
      ],
      "'Most of the fungus' 'mantarın çoğu', 'is hidden underground' 'yer altında gizlidir' karşılığıdır.",
    ],
    [
      "The fungus was probably spread around the world by the trade in amphibians.",
      [
        "Mantar muhtemelen amfibi ticareti yoluyla dünyaya yayıldı.",
        "Amfibiler muhtemelen mantar ticareti yoluyla dünyaya yayıldı.",
        "Amfibi ticareti, mantarın yayılmasını kesin olarak engelledi.",
        "Ticaret mantarı amfibilere sattı.",
        "Mantar hiç yayılmadı.",
      ],
      "'The fungus was probably spread around the world' 'mantar muhtemelen dünyaya yayıldı', 'by the trade in amphibians' 'amfibi ticareti yoluyla' karşılığıdır.",
    ],
    [
      "A stalk grows out of the dead ant's head.",
      [
        "Ölü karıncanın başından bir sap çıkar.",
        "Canlı karıncanın başına bir sap yapışır.",
        "Ölü karıncanın başı bir sapın içine gömülür.",
        "Sap ölü karıncayı büyütür.",
        "Karıncanın başı yoktur.",
      ],
      "'A stalk grows out of' 'bir sap çıkar', 'the dead ant's head' 'ölü karıncanın başından' karşılığıdır.",
    ],
    [
      "A white fungus appears on the noses and wings of the bats.",
      [
        "Yarasaların burunlarında ve kanatlarında beyaz bir mantar ortaya çıkar.",
        "Yarasaların burunları ve kanatları beyaza boyanır.",
        "Beyaz mantar, yarasaların burunlarını ve kanatlarını korur.",
        "Yarasalar mantarın burnunda ortaya çıkar.",
        "Yarasalarda mantar görülmez.",
      ],
      "'A white fungus appears' 'beyaz bir mantar ortaya çıkar', 'on the noses and wings of the bats' 'yarasaların burunlarında ve kanatlarında' karşılığıdır.",
    ],
    [
      "The disease spread from one plantation to another within a few years.",
      [
        "Hastalık birkaç yıl içinde bir plantasyondan diğerine yayıldı.",
        "Hastalık birkaç yüzyıl boyunca tek bir plantasyonda kaldı.",
        "Birkaç yıl içinde yayılan hastalık, hiçbir plantasyona zarar vermedi.",
        "Plantasyonlar hastalığı birkaç yılda yaydı.",
        "Hiç hastalık olmadı.",
      ],
      "'The disease spread from one plantation to another' 'hastalık bir plantasyondan diğerine yayıldı', 'within a few years' 'birkaç yıl içinde' karşılığıdır.",
    ],
    [
      "The feed had been made from peanuts imported from Brazil.",
      [
        "Yem, Brezilya'dan ithal edilen yer fıstığından yapılmıştı.",
        "Yer fıstığı, Brezilya'ya ihraç edilen yemden yapılmıştı.",
        "Brezilya'dan ithal edilen yem, hiç yer fıstığı içermiyordu.",
        "Brezilya yemi yer fıstığından ithal etti.",
        "Yem hiç yapılmamıştı.",
      ],
      "'The feed had been made from peanuts' 'yem yer fıstığından yapılmıştı', 'imported from Brazil' 'Brezilya'dan ithal edilen' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Mantar, ağaçların kabuğunun altında kök benzeri iplikçiklerle yayılır.",
      [
        "The fungus spreads beneath the bark of trees by means of root-like strands.",
        "The trees spread beneath the fungus by means of their bark.",
        "The fungus never grows under the bark of trees.",
        "The bark spreads the root-like trees.",
        "The fungus has no strands.",
      ],
      "'Mantar yayılır' 'the fungus spreads', 'ağaçların kabuğunun altında kök benzeri iplikçiklerle' 'beneath the bark of trees by means of root-like strands' karşılığıdır.",
    ],
    [
      "Bazı türler birkaç yıl içinde tamamen ortadan kayboldu.",
      [
        "Some species disappeared completely within a few years.",
        "Some species appeared suddenly within a few years.",
        "No species disappeared in those years.",
        "A few years made the species disappear.",
        "There were no species.",
      ],
      "'Bazı türler tamamen ortadan kayboldu' 'some species disappeared completely', 'birkaç yıl içinde' 'within a few years' karşılığıdır.",
    ],
    [
      "Karınca, ölmeden hemen önce çenelerini bir yaprağın damarına kilitler.",
      [
        "Just before it dies, the ant locks its jaws onto a vein of a leaf.",
        "The leaf locks the ant's jaws just after it dies.",
        "The ant opens its jaws and falls to the ground before it dies.",
        "The vein locks onto the ant.",
        "Ants have no jaws.",
      ],
      "'Ölmeden hemen önce' 'just before it dies', 'karınca çenelerini bir yaprağın damarına kilitler' 'the ant locks its jaws onto a vein of a leaf' karşılığıdır.",
    ],
    [
      "Fosiller, yüz yılı aşkın bir süre bilim insanlarını şaşırttı.",
      [
        "The fossils puzzled scientists for more than a century.",
        "Scientists puzzled the fossils for more than a century.",
        "The fossils were explained easily as soon as they were found.",
        "A century puzzled the fossils.",
        "No fossils were found.",
      ],
      "'Fosiller bilim insanlarını şaşırttı' 'the fossils puzzled scientists', 'yüz yılı aşkın bir süre' 'for more than a century' karşılığıdır.",
    ],
    [
      "Çay, kısa sürede adanın en önemli ihraç ürünü oldu.",
      [
        "Tea soon became the island's most important export.",
        "The island soon became tea's most important export.",
        "Tea was never exported from the island.",
        "The export soon became tea.",
        "There was no tea.",
      ],
      "'Çay kısa sürede oldu' 'tea soon became', 'adanın en önemli ihraç ürünü' 'the island's most important export' karşılığıdır.",
    ],
    [
      "Toksin, çok küçük miktarlarda bile karaciğere zarar verebilir.",
      [
        "The toxin can damage the liver even in very small amounts.",
        "The liver can damage the toxin even in large amounts.",
        "The toxin is harmless unless it is eaten in huge amounts.",
        "Small amounts damage the toxin.",
        "There is no toxin.",
      ],
      "'Toksin karaciğere zarar verebilir' 'the toxin can damage the liver', 'çok küçük miktarlarda bile' 'even in very small amounts' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the tropical forests of Thailand, Brazil and other countries, carpenter ants are attacked by a fungus called Ophiocordyceps. Its spores land on an ant's body and enter through its outer shell, and the fungus then grows inside the insect, gradually filling its body with a network of cells. After a week or so, the infected ant behaves in a strange way. It leaves the nest and the trails used by other ants and wanders alone. It then climbs a plant stem until it is roughly a quarter of a metre above the ground, where warmth and moisture suit the fungus best, and, usually around midday, bites hard onto the vein on the underside of a leaf. The muscles of its jaw are then destroyed, so that it cannot let go, and it dies hanging from the leaf. Over the following days, a stalk emerges from the ant's head and scatters spores onto the forest floor below, where they may infect other ants. Because of this behaviour, the insects are often called 'zombie ants'. Studies indicate, surprisingly, that the ant's brain is left largely untouched. Instead, its cells surround and penetrate the muscles throughout the ant's body, and it may control the insect's behaviour by releasing chemicals. The ants themselves have developed defences: workers that recognise an infected nestmate carry it far away from the colony. Fossil evidence of leaves with similar bite marks suggests that the relationship may be at least 48 million years old.",
      questions: [
        [
          "According to the passage, the infected ant climbs to a particular height because ----.",
          [
            "conditions there suit the fungus",
            "it is looking for food",
            "other ants carry it there",
            "the fungus needs the ant to be close to the nest and its trails",
            "it wants to escape from predators",
          ],
          "Metne göre o yükseklikte sıcaklık ve nem mantar için idealdir.",
        ],
        [
          "Research has suggested that the fungus controls the ant ----.",
          [
            "without directly invading its brain",
            "by eating its brain first",
            "by changing its colour",
            "only after it dies",
            "by sound",
          ],
          "Mantar beyni doğrudan istila etmiyor gibi görünür; kasları sarıp kimyasallar salarak davranışı denetleyebilir.",
        ],
        [
          "It can be understood from the passage that healthy ants ----.",
          [
            "try to protect their colony from infection",
            "are immune to the fungus",
            "help the fungus to spread",
            "never leave their nest",
            "eat infected ants",
          ],
          "Enfekte bir yuva arkadaşını tanıyan işçiler onu koloniden uzağa taşır.",
        ],
      ],
    },
    {
      text:
        "In February 2006, a caver photographed bats hibernating in a cave near Albany, in New York State, whose noses were covered with an unusual white powder. The following winter, thousands of bats were found dead in nearby caves. The cause was identified as a fungus that grows best at low temperatures, between about four and fifteen degrees Celsius, the same conditions in which bats hibernate, and the disease became known as white-nose syndrome. Hibernating bats lower their body temperature and heart rate to save energy, living on the fat they have stored in the autumn. The fungus grows into the skin of their noses and wings, and the infection causes them to wake up much more often than usual during the winter. Each time a bat warms its body, it uses a large amount of energy, so infected bats often run out of fat before spring and starve. Some leave their caves in the middle of winter in search of insects, and die of cold. Since 2006, the disease has spread to more than forty American states and several Canadian provinces, and it is estimated to have killed millions of bats. In some caves, more than ninety per cent of the bats of certain species have died. Genetic studies suggest that the fungus was accidentally brought from Europe, perhaps on the clothing or equipment of a cave visitor; European bats carry it but rarely die from it, probably because they have evolved resistance over a long period. Because bats eat large numbers of insects, including crop pests, their loss may also cost farmers billions of dollars.",
      questions: [
        [
          "According to the passage, the fungus is especially dangerous to hibernating bats because ----.",
          [
            "it grows best at the temperatures in which they hibernate",
            "it attacks them only in summer",
            "it kills insects",
            "it grows only in warm, dry caves in the southern part of the country",
            "it makes them eat more",
          ],
          "Metne göre mantar yarasaların kış uykusuna yattığı düşük sıcaklıklarda en iyi büyür.",
        ],
        [
          "Infected bats often starve because ----.",
          [
            "waking repeatedly uses up their stored fat",
            "they cannot find their caves",
            "the fungus eats their food",
            "they lose their teeth",
            "they stop sleeping completely in autumn",
          ],
          "Sık sık uyanıp bedenlerini ısıtmak çok enerji harcar; bahar gelmeden yağları tükenir.",
        ],
        [
          "It can be understood from the passage that European bats ----.",
          [
            "have probably adapted to the fungus over time",
            "do not carry the fungus",
            "die in larger numbers",
            "brought the fungus to America themselves",
            "do not hibernate",
          ],
          "Mantarı taşırlar ama nadiren ölürler; muhtemelen uzun sürede direnç geliştirmişlerdir.",
        ],
      ],
    },
    {
      text:
        "In 1859, the Canadian geologist John William Dawson described fossils of large, trunk-like structures found in rocks around 400 million years old. Some were more than a metre wide and up to eight metres tall, which would have made them by far the largest living things on land at a time when most plants were only a few centimetres high and there were no trees. Dawson believed they were the remains of rotting conifers, and he named them Prototaxites, meaning 'first yew'. Other scientists disagreed: over the following century, the fossils were variously interpreted as giant algae, lichens or primitive plants. Under the microscope, the trunks did not contain the kinds of cells that carry water in plants, but rather a mass of tightly packed tubes of different sizes. In 2001, the American palaeontologist Francis Hueber argued that this structure closely resembled that of fungi. Six years later, a study of the chemistry of the fossils provided further support. Plants obtain carbon from carbon dioxide in the air, so different plants growing in the same place tend to have similar chemical signatures. The Prototaxites samples, however, varied widely, which is what would be expected of an organism that obtained its food from a variety of sources in the soil, as fungi do. Not all scientists are convinced, and some recent studies have suggested that the organism may belong to a group of life that no longer exists. Whatever it was, Prototaxites would have stood out above a landscape covered by low mosses and small plants.",
      questions: [
        [
          "According to the passage, Prototaxites was remarkable because ----.",
          [
            "it was much larger than other land organisms of its time",
            "it was the first tree",
            "it lived in the sea",
            "it was a type of conifer that still grows in Canada today",
            "it was discovered recently",
          ],
          "Metne göre çoğu bitkinin birkaç santimetre olduğu bir dönemde açık ara karadaki en büyük canlılardı.",
        ],
        [
          "The chemistry of the fossils suggested that the organism ----.",
          [
            "obtained its food from various sources rather than from the air",
            "was a plant",
            "lived in water",
            "was younger than thought",
            "had no carbon",
          ],
          "Örneklerin kimyasal imzaları çok farklıydı; bu, besinini topraktaki çeşitli kaynaklardan alan bir organizmaya uyar.",
        ],
        [
          "It can be understood from the passage that the identity of Prototaxites ----.",
          [
            "is still debated",
            "was finally proved by Dawson",
            "has never been studied",
            "is known to be a lichen",
            "was agreed by all scientists in 1859",
          ],
          "Tüm bilim insanları ikna olmamıştır; bazıları artık var olmayan bir canlı grubuna ait olabileceğini öne sürer.",
        ],
      ],
    },
    {
      text:
        "In the middle of the nineteenth century, the island of Ceylon, now Sri Lanka, grew more coffee than almost any other place on Earth. British planters had cleared large areas of forest in the central highlands to grow it, and by the 1870s the island exported tens of thousands of tonnes a year. In 1869, however, planters noticed orange spots on the undersides of coffee leaves. The cause was a fungus, now called Hemileia vastatrix, which produces masses of orange spores. Infected leaves fall from the plant, and the weakened plants produce far fewer berries. The disease spread rapidly from one estate to another, carried by wind and rain and on the clothing of workers. The planters tried many remedies, and the government invited the young British botanist Harry Marshall Ward to investigate. He showed that the spores germinated on wet leaves and that the dense planting of coffee over huge areas allowed the disease to spread easily, but no effective treatment was available. Within about twenty years, coffee production in Ceylon had almost collapsed, and many planters were ruined. Some turned instead to tea, which had been grown on the island on a small scale, and by the end of the century tea had become Ceylon's most important export, as it remains today. Some historians have suggested that the disaster helped to strengthen the British preference for tea over coffee. The disease, known as coffee rust, later spread to Africa and the Americas, and it remains a serious threat to coffee farmers.",
      questions: [
        [
          "According to the passage, the first sign of the disease was ----.",
          [
            "orange spots on the undersides of the leaves",
            "the death of the workers",
            "white powder on the berries",
            "a sharp fall in the price of coffee on the markets in London",
            "flooding",
          ],
          "Metne göre ilk belirti kahve yapraklarının alt yüzündeki turuncu lekelerdi.",
        ],
        [
          "Marshall Ward found that the disease spread easily because ----.",
          [
            "coffee was planted densely over huge areas",
            "the planters used chemicals",
            "the plants were too old",
            "the climate was too dry",
            "tea plants carried it",
          ],
          "Kahvenin geniş alanlarda sık dikilmesi hastalığın kolayca yayılmasına olanak verdi.",
        ],
        [
          "It can be understood from the passage that the disease ----.",
          [
            "had lasting economic effects on the island",
            "was quickly cured",
            "affected only tea",
            "never left Ceylon",
            "was caused by insects",
          ],
          "Kahve üretimi çöktü ve ada çay üreticisine dönüştü; bu bugün de sürmektedir.",
        ],
      ],
    },
    {
      text:
        "In 1960, more than a hundred thousand young turkeys died on farms in England over a few months. They became weak, lost their appetite and died within about a week, and examinations showed severe damage to their livers. No infection could be found, and the mysterious illness became known as 'Turkey X disease'. Investigators soon noticed that all the affected farms had used feed from the same supplier, which contained peanut meal imported from Brazil. When the meal was examined, it was found to be contaminated with a common mould, Aspergillus flavus, which grows on crops such as peanuts, maize and nuts when they are stored in warm, damp conditions. Scientists extracted from the mould a group of poisonous substances, which they named aflatoxins, from the first letters of the mould's name. Further research showed that aflatoxins are among the most powerful natural causes of liver cancer known, and that they can harm both animals and people even in small amounts. They can also pass into the milk of cows that eat contaminated feed. The discovery led to regular testing of food and animal feed and to strict limits on aflatoxin levels in many countries. In warm regions where crops are often stored in poor conditions, however, contamination remains common, and it is thought to contribute to a large number of cases of liver cancer each year. Simple measures, such as drying crops quickly after harvest and storing them in clean, dry places, can greatly reduce the risk.",
      questions: [
        [
          "According to the passage, the investigators suspected the feed because ----.",
          [
            "all the affected farms had used feed from one supplier",
            "the turkeys refused to eat it",
            "it smelled strange",
            "it had been tested and found to contain dangerous bacteria",
            "it was very expensive",
          ],
          "Metne göre etkilenen tüm çiftlikler aynı tedarikçinin yemini kullanmıştı.",
        ],
        [
          "The mould grows on stored crops especially when ----.",
          [
            "conditions are warm and damp",
            "they are dried quickly",
            "it is very cold",
            "they are kept in clean places",
            "they are exported",
          ],
          "Aspergillus flavus sıcak ve nemli koşullarda saklanan ürünlerde büyür.",
        ],
        [
          "It can be understood from the passage that aflatoxin contamination ----.",
          [
            "can be reduced by better drying and storage",
            "has been completely eliminated",
            "affects only turkeys",
            "is harmless to people",
            "occurs only in Brazil",
          ],
          "Ürünleri hasattan sonra hızla kurutmak ve temiz, kuru yerlerde saklamak riski büyük ölçüde azaltır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Truffles are fungi that grow underground among the roots of certain trees, such as oaks and hazels. ---- In the past, pigs were used to find them, but they often ate the truffles, so most hunters now use trained dogs.",
      [
        "Because they cannot be seen, hunters rely on animals that can detect their strong smell.",
        "Oak trees can live for centuries.",
        "Truffles are very expensive.",
        "Some truffles are white, while others are black.",
        "Dogs are loyal animals.",
      ],
      "Boşluk hayvanların neden kullanıldığını açıklayan bir cümle gerektirir; boşluğa görülemedikleri için avcıların güçlü kokularını algılayabilen hayvanlara güvendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In some forests, decaying wood can be seen to glow faintly in the dark. ---- In the past, this light was known as 'foxfire', and some people believed it was caused by spirits.",
      [
        "The light is produced by certain fungi growing in the wood, by means of chemistry much like that of fireflies.",
        "Forests are dark at night.",
        "Foxes live in many countries.",
        "Scientists are still studying why the fungi produce light.",
        "Wood is used to make furniture.",
      ],
      "Boşluk ışığın kaynağını açıklayıp 'bu ışık' ifadesine bağlanan bir cümle gerektirir; boşluğa ışığın tahtada büyüyen bazı mantarların ateşböceklerininkine benzer bir kimyasal tepkimesiyle üretildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2012, scientists confirmed that a fungal disease was killing ash trees in Britain. ---- It is feared that the disease may eventually kill most of the country's ash trees.",
      [
        "The fungus had already spread across much of Europe, after probably arriving from Asia.",
        "Ash wood is used to make tool handles.",
        "Britain has many forests.",
        "A small number of trees seem to be naturally resistant.",
        "Trees produce oxygen.",
      ],
      "Boşluk hastalığın kökenini ve yayılımını anlatan bir cümle gerektirir; boşluğa mantarın muhtemelen Asya'dan gelip Avrupa'nın büyük bölümüne yayıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "The white rind of Camembert cheese is produced by a mould that is added during cheese-making. ---- Because of this, scientists have warned that the strain may be vulnerable to disease or loss of its ability to reproduce.",
      [
        "For decades, almost all producers have used a single strain of the mould, which reproduces without sexual reproduction.",
        "France produces hundreds of types of cheese.",
        "Cheese is made from milk.",
        "Before the 1900s, Camembert rinds were often grey or blue-green.",
        "Many people enjoy eating cheese.",
      ],
      "Boşluk 'bu nedenle' ifadesine gerekçe sunan bir cümle gerektirir; boşluğa üreticilerin on yıllardır cinsel üreme yapmadan çoğalan tek bir küf soyunu kullandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some companies now grow packaging materials from the thread-like roots of fungi, known as mycelium. ---- After use, the material can be broken up and added to soil, where it decomposes within weeks.",
      [
        "The fungi are fed on agricultural waste in moulds, where they bind the waste together into a light, strong solid.",
        "Packaging is often made of plastic.",
        "Mushrooms are eaten in many countries.",
        "Similar materials are being tested as a replacement for leather.",
        "Soil contains many living things.",
      ],
      "Boşluk malzemenin nasıl üretildiğini açıklayan bir cümle gerektirir; boşluğa mantarların kalıplarda tarımsal atıklarla beslenip bu atıkları hafif, sağlam bir katıya bağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Mushrooms sometimes appear in a circle on lawns or in fields. ---- Because the circles seemed so regular, people in Europe once believed they marked places where fairies had danced.",
      [
        "This happens because the fungus grows outwards from a central point, producing mushrooms at its outer edge.",
        "Lawns need regular cutting.",
        "Fairies appear in many stories.",
        "Some circles are hundreds of years old.",
        "Fields are often used for farming.",
      ],
      "Boşluk halkaların neden oluştuğunu açıklayan bir cümle gerektirir; boşluğa mantarın merkezden dışa doğru büyüyüp dış kenarında şapkalı mantarlar ürettiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Mushrooms can produce vitamin D when they are exposed to sunlight.",
        "They contain a substance that is converted into the vitamin by ultraviolet light.",
        "Some producers expose mushrooms to lamps to increase their vitamin content.",
        "Many people take holidays in sunny places.",
        "This makes mushrooms a useful source of the vitamin for people who do not eat fish.",
      ],
      odd: 3,
      why: "Parça mantarların güneşte D vitamini üretmesini anlatır. Pek çok kişinin güneşli yerlerde tatil yaptığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2017, scientists in Pakistan found a fungus growing on plastic waste at a rubbish dump.",
        "In the laboratory, it broke down a type of plastic within weeks.",
        "Many countries produce large amounts of rubbish.",
        "Researchers hope such fungi could help to reduce plastic pollution.",
        "However, the process is still far too slow for large-scale use.",
      ],
      odd: 2,
      why: "Parça plastiği parçalayan bir mantarı anlatır. Pek çok ülkenin büyük miktarda çöp ürettiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some fungi attack wheat and other cereal crops.",
        "They can cause the grain to shrivel and turn pink.",
        "Infected grain may also contain toxins that are harmful to people and animals.",
        "Bread has been eaten for thousands of years.",
        "Farmers try to control the disease by rotating crops and planting resistant varieties.",
      ],
      odd: 3,
      why: "Parça tahılları etkileyen mantar hastalığını anlatır. Ekmeğin binlerce yıldır yendiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A single puffball fungus can release trillions of spores.",
        "When raindrops or animals strike it, a cloud of spores bursts out.",
        "The spores are carried away by the wind.",
        "Only a tiny fraction of them grow into new fungi.",
        "Wind farms produce electricity.",
      ],
      odd: 4,
      why: "Parça mantarın sporlarını nasıl yaydığını anlatır. Rüzgâr çiftliklerinin elektrik ürettiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Stinkhorn fungi produce a slime with a strong smell of rotting meat.",
        "The smell attracts flies.",
        "Flies are found almost everywhere in the world.",
        "The flies feed on the slime and carry the spores away on their bodies.",
        "In this way, the fungus uses insects to spread, much as some flowers do.",
      ],
      odd: 2,
      why: "Parça kokarmantarın sporlarını sinekler aracılığıyla yaymasını anlatır. Sineklerin dünyanın neredeyse her yerinde bulunduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Scientists have found dark-coloured fungi growing on the walls of the damaged reactor at Chernobyl.",
        "The fungi contain large amounts of melanin, the same pigment found in human skin.",
        "Some studies suggest that they may grow faster when exposed to radiation.",
        "Researchers are investigating whether the pigment could protect astronauts.",
        "Ukraine has rich farmland.",
      ],
      odd: 4,
      why: "Parça Çernobil'deki koyu renkli mantarları anlatır. Ukrayna'nın verimli tarım arazilerine sahip olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
