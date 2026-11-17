import type { YokdilDeneme } from "./types";

export const FEN_80: YokdilDeneme = {
  no: 80,
  field: "fen",
  vocab: [
    [
      "Every spring, billions of moths ---- hundreds of kilometres to cool caves in the mountains.",
      ["travel", "retire", "hibernate", "vanish", "graduate"],
      "Her ilkbahar milyarlarca güvenin dağlardaki serin mağaralara yüzlerce kilometre 'yolculuk ettiği' (travel) anlatılır.",
    ],
    [
      "The spider ---- a bubble of air beneath the water, which it uses as a home.",
      ["maintains", "destroys", "ignores", "sells", "paints"],
      "Örümceğin suyun altında ev olarak kullandığı bir hava kabarcığını 'koruduğu' (maintains) anlatılır.",
    ],
    [
      "No single butterfly ---- the whole journey; it is completed by several generations.",
      ["completes", "begins", "forgets", "measures", "prevents"],
      "Hiçbir kelebeğin yolculuğun tamamını 'bitirmediği' (completes), yolculuğun birkaç kuşakta tamamlandığı anlatılır.",
    ],
    [
      "The wasp's venom makes the cockroach ---- and willing to be led.",
      ["passive", "aggressive", "invisible", "faster", "larger"],
      "Eşek arısının zehrinin hamamböceğini 'edilgen' (passive) ve yönlendirilmeye istekli hâle getirdiği anlatılır.",
    ],
    [
      "The silk of this spider is ---- than that of any other spider studied so far.",
      ["tougher", "weaker", "shorter", "wetter", "softer"],
      "Bu örümceğin ipeğinin şimdiye kadar incelenen tüm örümceklerinkinden 'daha dayanıklı' (tougher) olduğu anlatılır.",
    ],
    [
      "Young spiders climb to the top of a plant and ---- into the air on threads of silk.",
      ["take off", "give up", "put off", "turn down", "look after"],
      "Genç örümceklerin bir bitkinin tepesine tırmanıp ipek ipliklerle havaya 'havalandığı' (take off) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the moths reached the caves, they ---- for several nights.",
      ["had been flying", "fly", "have flown", "will fly", "are flying"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been flying'.",
    ],
    [
      "If the spider had not renewed its bubble, it ---- under water so long.",
      ["could not have stayed", "cannot stay", "will not stay", "had not stayed", "does not stay"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'could not have stayed'.",
    ],
    [
      "The butterflies' journey ---- using radar and observations from volunteers.",
      ["was tracked", "tracked", "has tracked", "tracks", "is tracking"],
      "Yolculuk izlenmiştir; edilgen geçmiş zaman: 'was tracked'.",
    ],
    [
      "---- the cockroach is much larger than the wasp, it does not try to escape.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Hamamböceğinin eşek arısından çok daha büyük olması ile kaçmaya çalışmaması zıttır: 'Although'.",
    ],
    [
      "The ants, ---- nests are made of living leaves, are used to protect fruit trees.",
      ["whose", "who", "which", "whom", "where"],
      "Karıncaların yuvaları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only in 2010 ---- scientists describe the spider for the first time.",
      ["did", "had", "were", "have", "do"],
      "'Only in' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The moths gather in caves ---- the air remains cool throughout the summer.",
      ["where", "which", "when", "whose", "that"],
      "'caves' yer bildirir; hava orada yaz boyunca serin kalır: 'where'.",
    ],
    [
      "The stronger the electric field, ---- likely the spiders were to take off.",
      ["the more", "the most", "more", "most", "so"],
      "'The stronger ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Farmers in the region recommend that weaver ant nests ---- in fruit trees.",
      ["be kept", "are kept", "were kept", "to be kept", "keeping"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be kept'.",
    ],
    [
      "The painted lady is known ---- the Sahara Desert during its migration.",
      ["to cross", "crossing", "to be crossed", "crossed", "cross"],
      "'be known to' yapısında yalın mastar: 'to cross'.",
    ],
    [
      "The spider builds its web across a river ---- it can catch insects flying above the water.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Ağını nehrin üzerine kurmasının amacı suyun üzerinde uçan böcekleri yakalayabilmektir: 'so that'.",
    ],
    [
      "The researchers had the moths ---- in a special flight simulator.",
      ["tested", "test", "testing", "to test", "tests"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'tested'.",
    ],
    [
      "Had the wasp's venom not reached the brain, the cockroach ---- away.",
      ["would have run", "runs", "will run", "had run", "is running"],
      "Devrik üçüncü tip koşul cümlesi: 'would have run'.",
    ],
    [
      "Neither the farmers nor the scientists ---- that the ants could be so useful.",
      ["had realised", "realising", "to realise", "has realised", "realise to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had realised'.",
    ],
  ],
  cloze: [
    {
      text:
        "Each spring, as the weather warms in south-eastern Australia, billions of Bogong moths leave the plains where they developed as caterpillars and fly up to a thousand kilometres to the Australian Alps, {1} they spend the summer resting in large numbers in cool caves and rock crevices near the mountain tops. In autumn, they make the return journey to breed and die. The moths had long been an important source of food for Aboriginal peoples, {2} for thousands of years they travelled to the mountains each summer to collect and roast them. Scientists have been particularly interested in how the moths, which travel at night and have never made the journey before, are able to find their way to caves they have never seen. In 2018, researchers showed that the moths can detect geomagnetic cues and combine them with visual landmarks, {3} in 2025 they reported that the moths can also navigate by the stars, using the patterns of the night sky as a compass. In laboratory experiments, moths held in a special flight simulator under an artificial night sky flew in the correct direction for their migration, {4} when the sky was rotated, they changed direction accordingly. In recent years, however, the number of Bogong moths has fallen dramatically, probably as a result of drought and other changes in their breeding grounds, {5} this decline has affected animals that feed on them, including a rare species of mountain pygmy possum.",
      blanks: [
        [
          "(21) ----",
          ["where", "which", "when", "whose", "that"],
          "'the Australian Alps' yer bildirir; güveler orada yazı geçirir: 'where'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Güvelerin önemli bir besin olması ve halkların her yaz onları toplaması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Manyetik alanı algıladıklarının gösterilmesi ve yıldızlarla da yön bulduklarının bildirilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Doğru yöne uçmaları ve gökyüzü döndürülünce yön değiştirmeleri birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Güve sayısının düşmesi ve bunun onlarla beslenen hayvanları etkilemesi birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "Almost all spiders live on land, but one species found in ponds and slow-moving streams across Europe and northern Asia spends nearly its entire life under water. The diving bell spider builds a dome-shaped web among underwater plants, {1} it fills the web with air that it carries down from the surface, trapped among the fine hairs on its body. The resulting bubble of air, which resembles the diving bells once used by human divers, serves as the spider's home. The spider waits inside it for prey, darting out to catch small animals that touch the threads of its web, {2} it also eats, moults, mates and lays its eggs inside the bubble. Biologists once believed that the spider needed to return to the surface frequently to renew its supply of air. In 2011, however, researchers in Australia and Germany measured the oxygen inside the bubbles and showed that they act rather like a gill, {3} oxygen dissolved in the surrounding water passes into the bubble as the spider uses it up, while carbon dioxide passes out. As a result, a spider resting in its bubble may need to collect fresh air only about once a day, even in warm water. The bubble slowly shrinks over time, {4} nitrogen gradually escapes from it into the water, and this is why the spider must eventually top it up. The diving bell spider is now rare in many areas, {5} it depends on clean water with plenty of plants, and many of its habitats have been drained or polluted.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Ağ kurması ve ağı yüzeyden taşıdığı havayla doldurması birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Kabarcıkta av beklemesi ve orada beslenip yumurtlaması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["because", "although", "unless", "until", "so that"],
          "Kabarcıkların solungaç gibi davranmasının nedeni suda çözünmüş oksijenin içeri geçmesidir: 'because'.",
        ],
        [
          "(29) ----",
          ["because", "although", "unless", "until", "so that"],
          "Kabarcığın küçülmesinin nedeni azotun suya kaçmasıdır: 'because'.",
        ],
        [
          "(30) ----",
          ["because", "although", "unless", "until", "so that"],
          "Örümceğin nadir olmasının nedeni temiz ve bitkili suya bağlı olması ve yaşam alanlarının bozulmasıdır: 'because'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the moths have never made the journey before, ----.",
      [
        "they are able to find caves they have never seen",
        "moths fly at night",
        "the mountains are high",
        "caves are cool",
        "they were roasted and eaten by Aboriginal peoples",
      ],
      "'Although' zıtlık ister: güveler bu yolculuğu daha önce hiç yapmamış olsa da hiç görmedikleri mağaraları bulabilirler.",
    ],
    [
      "If the bubble did not absorb oxygen from the water, ----.",
      [
        "the spider would have to return to the surface much more often",
        "spiders have eight legs",
        "water is wet",
        "ponds are small",
        "the spider would build its web among underwater plants",
      ],
      "İkinci tip koşul: kabarcık sudan oksijen almasaydı örümcek yüzeye çok daha sık dönmek zorunda kalırdı.",
    ],
    [
      "----, the butterflies flew high above the ground, where winds could carry them.",
      [
        "Rising to altitudes of hundreds of metres",
        "Although butterflies are small",
        "Unless it rained",
        "Since Africa is large",
        "While volunteers were counting them in gardens across Britain",
      ],
      "Yüzlerce metre yüksekliğe çıkan kelebekler rüzgârların onları taşıyabileceği yerde, yerin çok yukarısında uçtu.",
    ],
    [
      "The cockroach does not resist ----.",
      [
        "because the wasp's venom has affected its brain",
        "although it is large",
        "unless it is hungry",
        "so that it can escape",
        "while the wasp lays an egg on its leg",
      ],
      "Hamamböceği direnmez, çünkü eşek arısının zehri beynini etkilemiştir.",
    ],
    [
      "Since the ants attack many insects that damage crops, ----.",
      [
        "farmers have used them to protect fruit trees for centuries",
        "ants are small",
        "trees have leaves",
        "fruit is sweet",
        "they build their nests by sewing leaves together with silk",
      ],
      "'Since' neden bildirir: karıncalar ürünlere zarar veren pek çok böceğe saldırdığından çiftçiler onları yüzyıllardır meyve ağaçlarını korumak için kullanmıştır.",
    ],
    [
      "Not only does the spider build enormous webs, ----.",
      [
        "but its silk is also tougher than that of any other spider studied",
        "and rivers are wide",
        "since Madagascar is an island",
        "so insects fly",
        "unless it had been discovered in 2010",
      ],
      "'Not only ... but also' yapısı tamamlanır: örümcek yalnızca devasa ağlar kurmakla kalmaz, ipeği de incelenen tüm örümceklerinkinden daha dayanıklıdır.",
    ],
    [
      "Once the electric field was switched off, ----.",
      [
        "fewer spiders attempted to take off",
        "electricity is useful",
        "spiders spin silk",
        "the air is calm",
        "the spiders had been placed in a special box",
      ],
      "Elektrik alanı kapatılınca daha az örümcek havalanmaya çalıştı.",
    ],
    [
      "Unless the moths can find the right caves, ----.",
      [
        "they may not survive the hot summer",
        "caves are dark",
        "moths are brown",
        "the stars shine",
        "the researchers would not have built a flight simulator",
      ],
      "'Unless' olumsuz koşul: güveler doğru mağaraları bulamadıkça sıcak yazı atlatamayabilirler.",
    ],
    [
      "The spider's webs are so large ----.",
      [
        "that they can stretch across rivers",
        "although they are thin",
        "because silk is strong",
        "unless the wind blows",
        "while the spider waits in the centre",
      ],
      "Örümceğin ağları o kadar büyüktür ki nehirlerin üzerinde uzanabilir.",
    ],
    [
      "Even though the journey covers thousands of kilometres, ----.",
      [
        "each individual butterfly lives for only a few weeks",
        "butterflies are colourful",
        "Africa is hot",
        "Europe is cold",
        "the butterflies fly at high altitude",
      ],
      "'Even though' zıtlık ister: yolculuk binlerce kilometre sürse de her bir kelebek yalnızca birkaç hafta yaşar.",
    ],
    [
      "As spiders can sense electric fields with the hairs on their bodies, ----.",
      [
        "they may be able to tell when conditions are right for ballooning",
        "hairs are thin",
        "electricity is invisible",
        "spiders are small",
        "Charles Darwin once observed spiders landing on his ship",
      ],
      "Örümcekler bedenlerindeki kıllarla elektrik alanlarını algılayabildiği için havalanmak için koşulların ne zaman uygun olduğunu anlayabilirler.",
    ],
  ],
  enTr: [
    [
      "The moths rest in large numbers on the walls of caves.",
      [
        "Güveler mağaraların duvarlarında çok sayıda dinlenir.",
        "Güveler mağaraların duvarlarını yer.",
        "Mağaralar güvelerin duvarlarında dinlenir.",
        "Güveler hiç dinlenmez.",
        "Güveler mağaraların duvarlarını kemirerek çok sayıda yeni oda açar.",
      ],
      "'The moths rest in large numbers' 'güveler çok sayıda dinlenir', 'on the walls of caves' 'mağaraların duvarlarında' karşılığıdır.",
    ],
    [
      "The spider carries air down from the surface on its hairs.",
      [
        "Örümcek kıllarıyla yüzeyden aşağıya hava taşır.",
        "Örümcek kıllarıyla aşağıdan yüzeye su taşır.",
        "Hava örümceği yüzeye taşır.",
        "Örümceğin hiç kılı yoktur.",
        "Örümcek yoktur.",
      ],
      "'The spider carries air down from the surface' 'örümcek yüzeyden aşağıya hava taşır', 'on its hairs' 'kıllarıyla' karşılığıdır.",
    ],
    [
      "The butterflies fly north in spring and return south in autumn.",
      [
        "Kelebekler ilkbaharda kuzeye uçar ve sonbaharda güneye döner.",
        "Kelebekler ilkbaharda güneye uçar ve hiç dönmez.",
        "Kuzey kelebekleri ilkbaharda güneye taşır.",
        "Kelebekler hiç göç etmez.",
        "Kelebekler sonbaharda kuzeye uçar ve ilkbaharda güneydeki yuvalarına döner.",
      ],
      "'The butterflies fly north in spring' 'kelebekler ilkbaharda kuzeye uçar', 'and return south in autumn' 've sonbaharda güneye döner' karşılığıdır.",
    ],
    [
      "The wasp leads the cockroach by one of its antennae.",
      [
        "Eşek arısı hamamböceğini antenlerinden biriyle yönlendirir.",
        "Hamamböceği eşek arısını antenlerinden çeker.",
        "Anten eşek arısını yönlendirir.",
        "Eşek arısı hamamböceğine hiç dokunmaz.",
        "Hamamböceği eşek arısını antenlerinden biriyle yuvasına doğru yönlendirir.",
      ],
      "'The wasp leads the cockroach' 'eşek arısı hamamböceğini yönlendirir', 'by one of its antennae' 'antenlerinden biriyle' karşılığıdır.",
    ],
    [
      "The ants pull leaves together and hold them in place.",
      [
        "Karıncalar yaprakları bir araya çeker ve yerinde tutar.",
        "Karıncalar yaprakları birbirinden ayırır ve atar.",
        "Yapraklar karıncaları bir araya çeker.",
        "Karıncalar yapraklara hiç dokunmaz.",
        "Karınca yoktur.",
      ],
      "'The ants pull leaves together' 'karıncalar yaprakları bir araya çeker', 'and hold them in place' 've yerinde tutar' karşılığıdır.",
    ],
    [
      "Some spiders have been found on ships far out at sea.",
      [
        "Bazı örümcekler denizin çok açıklarındaki gemilerde bulunmuştur.",
        "Bazı örümcekler gemileri denize taşımıştır.",
        "Gemiler örümcekleri hiç taşımaz.",
        "Deniz örümcekleri gemilere bırakır.",
        "Örümcek yoktur.",
      ],
      "'Some spiders have been found' 'bazı örümcekler bulunmuştur', 'on ships far out at sea' 'denizin çok açıklarındaki gemilerde' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Güveler yön bulmak için yıldızları kullanabilir.",
      [
        "The moths can use the stars to find their way.",
        "The stars can use the moths to find their way.",
        "The moths cannot see at night.",
        "The moths fly only during the day.",
        "There are no moths.",
      ],
      "'Güveler kullanabilir' 'the moths can use', 'yön bulmak için yıldızları' 'the stars to find their way' karşılığıdır.",
    ],
    [
      "Kabarcık zamanla yavaş yavaş küçülür.",
      [
        "The bubble slowly shrinks over time.",
        "The bubble quickly grows over time.",
        "Time shrinks the spider.",
        "The bubble never changes.",
        "There is no bubble.",
      ],
      "'Kabarcık küçülür' 'the bubble shrinks', 'zamanla yavaş yavaş' 'slowly over time' karşılığıdır.",
    ],
    [
      "Yolculuk birkaç kuşak kelebek tarafından tamamlanır.",
      [
        "The journey is completed by several generations of butterflies.",
        "Several journeys are completed by one butterfly.",
        "The butterflies complete no journeys.",
        "Generations complete the butterflies.",
        "There is no journey.",
      ],
      "'Yolculuk tamamlanır' 'the journey is completed', 'birkaç kuşak kelebek tarafından' 'by several generations of butterflies' karşılığıdır.",
    ],
    [
      "Eşek arısı yumurtasını hamamböceğinin bacağına bırakır.",
      [
        "The wasp lays its egg on the cockroach's leg.",
        "The cockroach lays its egg on the wasp's leg.",
        "The wasp eats the cockroach's eggs.",
        "The leg lays the wasp's egg.",
        "There is no wasp.",
      ],
      "'Eşek arısı yumurtasını bırakır' 'the wasp lays its egg', 'hamamböceğinin bacağına' 'on the cockroach's leg' karşılığıdır.",
    ],
    [
      "Örümcek ağını nehirlerin ve göllerin üzerine kurar.",
      [
        "The spider builds its web over rivers and lakes.",
        "The spider builds its web under rivers and lakes.",
        "Rivers and lakes build the web.",
        "The spider never builds a web.",
        "There is no spider.",
      ],
      "'Örümcek ağını kurar' 'the spider builds its web', 'nehirlerin ve göllerin üzerine' 'over rivers and lakes' karşılığıdır.",
    ],
    [
      "Atmosferdeki elektrik alanları örümceklerin havalanmasına yardım edebilir.",
      [
        "Electric fields in the atmosphere may help spiders to take off.",
        "Spiders may help electric fields in the atmosphere to take off.",
        "Electric fields prevent spiders from moving.",
        "The atmosphere contains no electricity.",
        "There are no spiders.",
      ],
      "'Atmosferdeki elektrik alanları yardım edebilir' 'electric fields in the atmosphere may help', 'örümceklerin havalanmasına' 'spiders to take off' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The painted lady is one of the most widespread butterflies in the world, found on every continent except Antarctica and South America. In Europe, it was long known that the butterflies appear each spring, often in large numbers, but it was unclear where they came from or what happened to them in autumn, when they seemed to vanish. Research in the 2010s, using radar to detect insects flying high above the ground, observations sent in by tens of thousands of volunteers and chemical analysis of the butterflies' wings, revealed that they undertake an extraordinary migration. Each year, painted ladies travel between tropical Africa and northern Europe, a round trip of up to about fourteen thousand kilometres, which is longer than the famous migration of the monarch butterfly in North America. No single butterfly completes the whole journey. Instead, it is carried out by a series of up to six generations, each of which flies part of the way, breeds and dies, so that the butterflies that return to Africa in autumn are distant descendants of those that left it in spring. The radar studies showed that, in autumn, many of the butterflies fly at altitudes of several hundred metres, where they can take advantage of fast winds blowing in the direction they want to travel. In 2019, researchers analysing the chemical signatures in the wings of butterflies caught in Europe showed that some had come from south of the Sahara, proving that they had crossed the desert. Such long migrations may play an important role in transporting nutrients, pollen and even parasites between continents, and scientists are studying how they might be affected by climate change.",
      questions: [
        [
          "According to the passage, the migration of the painted lady is completed by ----.",
          [
            "a series of several generations",
            "a single generation",
            "butterflies that live for several years",
            "butterflies carried by winds blowing at altitudes of several hundred metres",
            "butterflies carried by ships",
          ],
          "Metne göre yolculuk her biri yolun bir kısmını uçan, üreyen ve ölen altı kuşağa kadar bir diziyle tamamlanır.",
        ],
        [
          "The radar studies showed that in autumn the butterflies ----.",
          [
            "fly high to take advantage of fast winds",
            "fly close to the ground",
            "stop migrating",
            "travel only at night",
            "fly against the wind",
          ],
          "Sonbaharda pek çoğu istedikleri yönde esen hızlı rüzgârlardan yararlanmak için yüzlerce metre yükseklikte uçar.",
        ],
        [
          "It can be understood from the passage that the analysis of the butterflies' wings ----.",
          [
            "showed that some had crossed the Sahara",
            "proved that they never leave Europe",
            "found no useful information",
            "showed that they come from South America",
            "revealed that they live for years",
          ],
          "Kanatlardaki kimyasal izler bazılarının Sahra'nın güneyinden geldiğini, yani çölü geçtiklerini gösterdi.",
        ],
      ],
    },
    {
      text:
        "The emerald cockroach wasp, sometimes called the jewel wasp, is a small, shiny blue-green insect found in tropical parts of Africa, Asia and the Pacific. It has one of the most remarkable life cycles in the insect world. When a female is ready to lay an egg, she searches for a cockroach, which may be several times her size. She first stings it in the middle of the body, injecting venom that temporarily paralyses its front legs. She then delivers a second, carefully aimed sting directly into the cockroach's brain, injecting a different mixture of chemicals into specific regions that control movement. The effect is extraordinary. The cockroach is not paralysed, but it loses the will to move on its own and begins to groom itself. The wasp then bites off part of one of the cockroach's antennae and drinks some of its body fluids, before leading it, like a dog on a lead, by the remaining part of the antenna into a small burrow. There, she lays an egg on one of its legs and seals the entrance with small stones. When the egg hatches, the larva feeds on the living cockroach, eventually entering its body, and after several weeks a new adult wasp emerges. Scientists have been fascinated by how the venom alters the cockroach's behaviour so precisely. Studies have shown that it affects chemical signals in the brain involved in movement, and that a cockroach stung by the wasp will still move normally if it is pushed or placed in water, suggesting that it is not unable to move but simply lacks the motivation to do so.",
      questions: [
        [
          "According to the passage, the wasp's second sting ----.",
          [
            "is delivered directly into the cockroach's brain",
            "paralyses the cockroach completely",
            "kills the cockroach",
            "is used to seal the entrance to the burrow with small stones",
            "is aimed at the cockroach's legs",
          ],
          "Metne göre ikinci, dikkatle hedeflenmiş sokma doğrudan hamamböceğinin beynine yapılır.",
        ],
        [
          "After being stung, the cockroach ----.",
          [
            "can be led by the wasp into a burrow",
            "runs away quickly",
            "attacks the wasp",
            "dies immediately",
            "flies away",
          ],
          "Eşek arısı onu kalan anteninden tasmalı bir köpek gibi küçük bir yuvaya götürür.",
        ],
        [
          "It can be understood from the passage that the stung cockroach ----.",
          [
            "can still move but lacks the motivation to do so",
            "is completely paralysed",
            "cannot be moved at all",
            "becomes stronger",
            "recovers within minutes",
          ],
          "İtildiğinde ya da suya konulduğunda normal hareket eder; hareket edemez değildir, yalnızca isteği yoktur.",
        ],
      ],
    },
    {
      text:
        "In the tropical forests of Asia and Australia, weaver ants build their nests high in the trees from living leaves. To make a nest, a team of worker ants pulls the edges of two leaves together, sometimes forming long chains in which each ant holds on to the one in front, until the leaves are close enough to be joined. Other workers then bring larvae from an existing nest and hold them against the edges of the leaves. The larvae produce silk, which the workers use like a glue gun, moving the larvae back and forth to bind the leaves together. A single colony may contain hundreds of thousands of ants and occupy many nests spread across several trees. Weaver ants are fierce predators that attack almost any insect that enters their territory, and this has made them valuable to farmers. In China, there are records from around the fourth century of farmers buying nests of the ants and placing them in citrus orchards to protect the fruit from pests, making this one of the earliest known examples of biological pest control. Farmers even connected trees with bamboo bridges so that the ants could move between them. In recent decades, researchers have studied the use of weaver ants in orchards of mango, cashew and other crops in Australia, Africa and Southeast Asia, and they have found that the ants can control pests as effectively as chemical pesticides, while reducing costs and avoiding damage to the environment. In some cases, the ants have even been found to improve the quality of the fruit. However, farmers must learn to manage the colonies carefully, and the ants' painful bites can be a problem for workers harvesting the fruit.",
      questions: [
        [
          "According to the passage, weaver ants join leaves together using ----.",
          [
            "silk produced by their larvae",
            "mud from the forest floor",
            "their own saliva",
            "bamboo bridges built by farmers between trees",
            "plant sap",
          ],
          "Metne göre larvalar ipek üretir ve işçiler onları yapıştırıcı tabancası gibi kullanarak yaprakları birleştirir.",
        ],
        [
          "The writer mentions farmers in China in the fourth century to show that ----.",
          [
            "using the ants for pest control is a very old practice",
            "the ants came from China",
            "citrus fruit was first grown in China",
            "chemical pesticides were used",
            "bamboo was valuable",
          ],
          "Çiftçilerin karınca yuvalarını turunçgil bahçelerine yerleştirmesi bilinen en eski biyolojik zararlı denetimi örneklerinden biridir.",
        ],
        [
          "It can be understood from the passage that one problem with using weaver ants is that ----.",
          [
            "their bites can be painful for workers",
            "they damage the fruit",
            "they are more expensive than pesticides",
            "they cannot control pests",
            "they live only in China",
          ],
          "Karıncaların acı veren ısırıkları meyve toplayan işçiler için sorun olabilir.",
        ],
      ],
    },
    {
      text:
        "In 2010, scientists described a new species of spider from the rainforests of Madagascar that builds some of the largest webs ever recorded. Darwin's bark spider, named in honour of Charles Darwin to mark the 150th anniversary of the publication of his famous book on evolution, spins webs that hang over rivers, streams and lakes. The central part of the web, where insects are caught, can be almost three square metres in area, and it is suspended from bridge lines, the threads that connect it to trees or rocks on each bank, which can be up to twenty-five metres long. By building its web in the open air above the water, the spider can catch insects such as mayflies and dragonflies that other spiders cannot reach. To make such enormous structures possible, the spider produces silk with remarkable properties. When researchers tested it, they found that it was tougher, meaning that it could absorb more energy before breaking, than the silk of any other spider studied, and around ten times tougher than a material of similar weight used in bulletproof vests. Scientists are still investigating how the spider manages to get its first bridge line across a river. It appears that it releases a long thread of silk into the wind from a high point on one bank and waits for the breeze to carry it to the other side, where it becomes attached to vegetation. The spider can then strengthen the line before building the rest of the web. Researchers are interested in understanding how the silk is made, in the hope that it might inspire the development of strong, light materials for use in medicine and engineering.",
      questions: [
        [
          "According to the passage, the spider builds its web over water so that it can ----.",
          [
            "catch insects that other spiders cannot reach",
            "drink water",
            "hide from birds",
            "release a long thread of silk into the wind from one bank",
            "keep cool",
          ],
          "Metne göre ağını suyun üzerinde açık havada kurarak başka örümceklerin ulaşamadığı böcekleri yakalayabilir.",
        ],
        [
          "When tested, the spider's silk was found to be ----.",
          [
            "tougher than that of any other spider studied",
            "weaker than most spider silk",
            "similar to cotton",
            "unable to absorb energy",
            "heavier than steel",
          ],
          "Kopmadan önce daha çok enerji soğurabiliyordu; incelenen tüm örümceklerinkinden daha dayanıklıydı.",
        ],
        [
          "It can be understood from the passage that the spider probably gets its first line across a river by ----.",
          [
            "letting the wind carry a thread to the other side",
            "swimming across",
            "walking along the river bed",
            "throwing a stone",
            "climbing a bridge",
          ],
          "Bir kıyıdaki yüksek bir noktadan rüzgâra uzun bir ipek ip bırakır ve esintinin onu karşıya taşımasını bekler.",
        ],
      ],
    },
    {
      text:
        "In 1832, while sailing aboard the Beagle off the coast of South America, Charles Darwin noticed that hundreds of tiny spiders had landed on the ship's rigging, even though the vessel was more than a hundred kilometres from land. Spiders are known to travel through the air by a method called ballooning: a spider climbs to a high point, raises its abdomen and releases threads of silk, which lift it into the air and allow it to drift, sometimes for great distances and at heights of several kilometres. Scientists long supposed that the spiders simply rode the wind, rather like a kite. However, this did not fully explain some observations, such as the fact that spiders often take off on days when the wind is very light, and that some quite large spiders are able to balloon. In 2018, two researchers at the University of Bristol, Erica Morley and Daniel Robert, reported evidence that spiders also make use of electricity. The Earth's atmosphere contains a weak electric field, which exists even on calm, clear days. The researchers placed spiders in a box in which the air was perfectly still and created an electric field of similar strength. When the field was switched on, many spiders began to prepare for ballooning, and some actually rose into the air; when it was switched off, they tended to drop. The researchers also found that tiny hairs on the spiders' legs moved in response to the electric field, suggesting that the spiders could sense it. They concluded that electric forces, as well as wind, may help spiders to take off and stay aloft, although further research is needed to understand how important each factor is in nature.",
      questions: [
        [
          "According to the passage, Darwin was surprised because the spiders ----.",
          [
            "had landed on the ship far from land",
            "were very large",
            "had built webs on the sails",
            "rose into the air when an electric field was switched on",
            "were swimming in the sea",
          ],
          "Metne göre gemi karadan yüz kilometreden fazla uzaktayken yüzlerce küçük örümcek gemi donanımına konmuştu.",
        ],
        [
          "The wind alone did not seem to explain ballooning because ----.",
          [
            "spiders often take off when the wind is very light",
            "spiders never travel far",
            "wind is too strong",
            "spiders cannot produce silk",
            "only small spiders balloon",
          ],
          "Örümcekler çoğu zaman rüzgârın çok hafif olduğu günlerde havalanır ve bazı büyük örümcekler de havalanabilir.",
        ],
        [
          "It can be understood from the passage that the researchers believe ----.",
          [
            "both electric forces and wind may help spiders to fly",
            "only electricity matters",
            "wind has no effect",
            "spiders cannot sense electric fields",
            "ballooning is a myth",
          ],
          "Rüzgârın yanı sıra elektrik kuvvetleri de örümceklerin havalanmasına ve havada kalmasına yardım edebilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In some colonies of honeypot ants, certain workers act as living storage containers. ---- When food is scarce, other ants stroke them, and they bring up drops of the stored liquid to feed the colony.",
      [
        "They are fed so much sugary liquid that their abdomens swell to the size of a small grape, and they hang motionless from the ceiling of the nest.",
        "Ants live in many habitats.",
        "Sugar provides energy.",
        "In parts of Australia, the swollen ants have traditionally been collected and eaten as a sweet treat.",
        "Nests are built underground.",
      ],
      "Boşluk canlı depoların nasıl oluştuğunu anlatıp kıtlıkta kullanılmalarına bağlanan bir cümle gerektirir; boşluğa o kadar çok şekerli sıvıyla beslendiklerini ki karınlarının küçük bir üzüm büyüklüğüne şiştiğini ve yuva tavanından hareketsiz sarktıklarını söyleyen cümle gelmelidir.",
    ],
    [
      "Mayflies spend most of their lives as young insects living in rivers and lakes, sometimes for a year or more. ---- During this brief period, they mate and lay their eggs.",
      [
        "The adults, however, often live for only a day or even a few hours, and they have no working mouthparts.",
        "Rivers flow into the sea.",
        "Insects have six legs.",
        "Large swarms of adults sometimes appear so suddenly that they show up on weather radar.",
        "Lakes are home to many fish.",
      ],
      "Boşluk 'ancak' ile yetişkin evresinin kısalığını anlatıp 'bu kısa dönem' ifadesine bağlanan bir cümle gerektirir; boşluğa yetişkinlerin çoğu zaman yalnızca bir gün ya da birkaç saat yaşadığını ve işleyen ağız parçaları olmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "Firebrats are small, wingless insects related to silverfish that prefer extremely warm places. ---- They feed on flour, paper, glue and other starchy materials, and they can survive for months without food.",
      [
        "They are often found in bakeries, boiler rooms and near ovens, where temperatures may exceed thirty-five degrees Celsius.",
        "Bakeries open early in the morning.",
        "Insects are cold-blooded.",
        "Unlike most insects, they continue to moult throughout their adult lives, sometimes dozens of times.",
        "Ovens are used for baking.",
      ],
      "Boşluk böceklerin sıcak yer tercihini somutlaştırıp beslenmelerine bağlanan bir cümle gerektirir; boşluğa çoğu zaman sıcaklığın otuz beş dereceyi aşabildiği fırınlarda, kazan dairelerinde ve ocakların yakınında bulunduklarını söyleyen cümle gelmelidir.",
    ],
    [
      "Water striders are insects that can stand and run on the surface of ponds without sinking. ---- Engineers have built small robots that copy this ability.",
      [
        "Their legs are covered in tiny water-repellent hairs that allow them to rest on the surface film of the water.",
        "Ponds are home to many insects.",
        "Water is made of hydrogen and oxygen.",
        "They detect prey by feeling the ripples made by insects that fall onto the water.",
        "Robots are used in factories.",
      ],
      "Boşluk böceklerin bu yeteneğini açıklayıp robotlara bağlanan bir cümle gerektirir; boşluğa bacaklarının su yüzeyinde durmalarını sağlayan küçük su itici kıllarla kaplı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Male peacock spiders, which are only a few millimetres long, perform elaborate dances to attract females. ---- If the female is not impressed, she may attack and even eat him.",
      [
        "They raise a brightly coloured flap on their abdomen and wave their legs in a complex sequence of movements.",
        "Spiders have eight eyes.",
        "Australia has many spiders.",
        "Many new species of peacock spider have been discovered in Australia in recent years, often by amateur photographers.",
        "Peacocks are birds.",
      ],
      "Boşluk dansın nasıl yapıldığını anlatıp dişinin tepkisine bağlanan bir cümle gerektirir; boşluğa karınlarındaki parlak renkli bir kanatçığı kaldırıp bacaklarını karmaşık hareketlerle salladıklarını söyleyen cümle gelmelidir.",
    ],
    [
      "The bolas spider does not build an ordinary web. ---- To attract moths, it releases chemicals that imitate the scent produced by female moths.",
      [
        "Instead, it swings a single thread with a sticky ball at the end, which it uses to catch passing moths.",
        "Moths fly at night.",
        "Spiders produce silk.",
        "It is named after a type of throwing weapon made of weights attached to cords.",
        "Webs are often found in gardens.",
      ],
      "Boşluk 'bunun yerine' ile örümceğin av yöntemini anlatıp güveleri çekmesine bağlanan bir cümle gerektirir; boşluğa ucunda yapışkan bir top olan tek bir ipi sallayarak geçen güveleri yakaladığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Whirligig beetles swim in circles on the surface of ponds.",
        "Each of their eyes is divided into two parts.",
        "One part looks above the water and the other looks below it.",
        "Many ponds dry up in summer.",
        "As a result, they can spot danger from the air and from the water simultaneously.",
      ],
      odd: 3,
      why: "Parça su yüzeyinde dönen böcekleri ve ikiye bölünmüş gözlerini anlatır. Pek çok göletin yazın kuruduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The glasswing butterfly of Central and South America has transparent wings.",
        "Tiny structures on the wings reduce the reflection of light.",
        "This makes the butterfly very difficult for predators to see.",
        "Central America has many volcanoes.",
        "Scientists hope to copy the structures to make anti-glare screens.",
      ],
      odd: 3,
      why: "Parça saydam kanatlı kelebeği anlatır. Orta Amerika'da pek çok yanardağ olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Atlas moth is one of the largest moths in the world.",
        "Its wings can measure more than twenty-five centimetres across.",
        "The tips of its wings resemble the heads of snakes.",
        "Adult Atlas moths have no mouths and live for only about a week.",
        "Snakes are found on every continent except Antarctica.",
      ],
      odd: 4,
      why: "Parça dünyanın en büyük güvelerinden Atlas güvesini anlatır. Yılanların Antarktika dışındaki her kıtada bulunduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The death's-head hawkmoth has a pattern on its back that resembles a human skull.",
        "It can make a squeaking sound when disturbed.",
        "Skulls protect the brain.",
        "It sometimes enters beehives to steal honey.",
        "Chemicals on its body may help it to avoid being attacked by the bees.",
      ],
      odd: 2,
      why: "Parça sırtında kafatası deseni olan güveyi anlatır. Kafataslarının beyni koruduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Madagascar hissing cockroach can produce a loud hissing sound.",
        "It does this by forcing air out through small holes in its body.",
        "Males hiss during fights and when courting females.",
        "Madagascar is the fourth-largest island in the world.",
        "The insects are often kept as pets.",
      ],
      odd: 3,
      why: "Parça tıslayan Madagaskar hamamböceğini anlatır. Madagaskar'ın dünyanın dördüncü büyük adası olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some caterpillars disguise themselves as bird droppings.",
        "Birds usually ignore them because they do not look like food.",
        "Birds have excellent eyesight.",
        "As the caterpillars grow, some change their appearance completely.",
        "Others later develop patterns that resemble the eyes of snakes.",
      ],
      odd: 2,
      why: "Parça kendini kuş dışkısı gibi gizleyen tırtılları anlatır. Kuşların görme yetisinin mükemmel olduğunu söyleyen III. cümle konu dışıdır.",
    },
  ],
};
