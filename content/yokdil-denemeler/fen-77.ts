import type { YokdilDeneme } from "./types";

export const FEN_77: YokdilDeneme = {
  no: 77,
  field: "fen",
  vocab: [
    [
      "The protein glows green when it is ---- by blue or ultraviolet light.",
      ["illuminated", "frozen", "boiled", "crushed", "ignored"],
      "Proteinin mavi ya da morötesi ışıkla 'aydınlatıldığında' (illuminated) yeşil parladığı anlatılır.",
    ],
    [
      "Sailors had long reported that at night the sea sometimes ---- with a steady white light.",
      ["shone", "froze", "boiled", "dried", "sank"],
      "Denizcilerin uzun zamandır geceleri denizin bazen sabit beyaz bir ışıkla 'parladığını' (shone) bildirdiği anlatılır.",
    ],
    [
      "The technique allows scientists to switch particular nerve cells on and off with great ----.",
      ["precision", "difficulty", "noise", "anger", "delay"],
      "Tekniğin bilim insanlarının belirli sinir hücrelerini büyük bir 'kesinlikle' (precision) açıp kapamasına olanak tanıdığı anlatılır.",
    ],
    [
      "When the water is disturbed, the tiny organisms produce ---- flashes of blue light.",
      ["brief", "permanent", "silent", "heavy", "frozen"],
      "Su karıştırıldığında küçük organizmaların 'kısa' (brief) mavi ışık çakmaları ürettiği anlatılır.",
    ],
    [
      "Each nerve cell was labelled with a ---- colour, so that its branches could be traced.",
      ["distinct", "identical", "invisible", "borrowed", "faded"],
      "Her sinir hücresinin dallarının izlenebilmesi için 'ayrı' (distinct) bir renkle işaretlendiği anlatılır.",
    ],
    [
      "The researchers ---- the specimens under ultraviolet light and were surprised by the result.",
      ["looked at", "gave up", "put off", "turned down", "ran out of"],
      "Araştırmacıların örneklere morötesi ışık altında 'baktığı' (looked at) ve sonuca şaşırdığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the protein was used in other organisms, it ---- for thirty years.",
      ["had been known", "is known", "has known", "was knowing", "will be known"],
      "Geçmişteki bir andan önce süregelen edilgen durum: 'had been known'.",
    ],
    [
      "If the scientist had not collected thousands of jellyfish, the protein ---- discovered.",
      ["might not have been", "is not", "will not be", "had not been", "was not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might not have been'.",
    ],
    [
      "The glowing patch of sea ---- by a satellite in 2005.",
      ["was detected", "detected", "has detected", "detects", "is detecting"],
      "Parlayan deniz bölgesi saptanmıştır; edilgen geçmiş zaman: 'was detected'.",
    ],
    [
      "---- the light is too faint for most cameras, a satellite was able to record it.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Işığın çoğu kamera için çok sönük olması ile bir uydunun onu kaydedebilmesi zıttır: 'Although'.",
    ],
    [
      "The scientists, ---- technique uses light to control nerve cells, published their work in 2005.",
      ["whose", "who", "which", "whom", "where"],
      "Bilim insanlarının tekniği; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only in recent years ---- researchers notice that the animal glows under ultraviolet light.",
      ["did", "had", "were", "have", "do"],
      "'Only in' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "Visitors paddle at night across a bay ---- the water lights up with every stroke.",
      ["where", "which", "when", "whose", "that"],
      "'a bay' yer bildirir; su orada her kürek darbesiyle aydınlanır: 'where'.",
    ],
    [
      "The more organisms there are in the water, ---- the glow becomes.",
      ["the brighter", "the brightest", "brighter", "brightest", "so bright"],
      "'The more ..., the brighter ...' paralel yapısı: 'the brighter'.",
    ],
    [
      "Conservationists recommend that visitors ---- sunscreen before swimming in the bay.",
      ["avoid", "avoids", "avoided", "to avoid", "avoiding"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'avoid'.",
    ],
    [
      "The bacteria are thought ---- light only when they are present in large numbers.",
      ["to produce", "producing", "to be produced", "produced", "having produce"],
      "'be thought to' yapısında yalın mastar: 'to produce'.",
    ],
    [
      "The researchers inserted genes from a fungus ---- the plants would glow continuously.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Bir mantardan gen eklemenin amacı bitkilerin sürekli parlamasıdır: 'so that'.",
    ],
    [
      "The team had the brains of the mice ---- under a powerful microscope.",
      ["examined", "examine", "examining", "to examine", "examines"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'examined'.",
    ],
    [
      "Had the protein not been cloned, it ---- so widely used.",
      ["would not have been", "is not", "will not be", "had not been", "is not being"],
      "Devrik üçüncü tip koşul cümlesi, edilgen: 'would not have been'.",
    ],
    [
      "Neither the curators nor the biologists ---- that the specimens would glow.",
      ["had expected", "expecting", "to expect", "has expected", "expect to"],
      "'Neither ... nor' yapısında geçmişten önceki zaman: 'had expected'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early 1960s, the Japanese chemist Osamu Shimomura, working in the United States, set out to discover how a jellyfish found off the west coast of North America produces light. He and his colleagues collected many thousands of the jellyfish and extracted a protein that gave off blue light in the presence of calcium, {1} they also noticed a second protein that glowed green under ultraviolet light. This second substance became known as green fluorescent protein, or GFP. In the jellyfish, it absorbs the blue light produced by the first protein and gives off green light instead. For many years, GFP attracted little attention, {2} in the early 1990s researchers identified the gene responsible for producing it. In 1994, the American biologist Martin Chalfie showed that the gene could be inserted into other organisms, such as bacteria and tiny worms, {3} it caused their cells to glow green without the need for any other chemicals from the jellyfish. This meant that GFP could be used as a living marker. By attaching the gene for GFP to the gene for a protein they wanted to study, scientists could watch where and when that protein was made inside living cells, {4} they could follow processes such as the growth of nerve cells or the spread of cancer cells. The chemist Roger Tsien later developed altered forms of the protein that glowed in a range of colours, {5} in 2008 Shimomura, Chalfie and Tsien shared the Nobel Prize in Chemistry.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Mavi ışık veren bir protein çıkarmaları ve ikinci bir protein fark etmeleri birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["until", "because", "unless", "although", "so that"],
          "GFP'nin uzun süre az ilgi görmesi 1990'larda geninin tanımlanmasına kadar sürdü: 'until'.",
        ],
        [
          "(23) ----",
          ["where", "which", "when", "whose", "that"],
          "'other organisms' içinde gen hücrelerin parlamasına yol açtı: 'where'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Proteinin hücrede izlenebilmesi ve süreçlerin takip edilebilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Tsien'in farklı renkler geliştirmesi ve üçünün Nobel ödülünü paylaşması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "For centuries, sailors told stories of nights when the sea around their ships glowed with a steady, milky white light that stretched as far as the horizon, as if the ship were sailing across a field of snow. Scientists had few opportunities to study these 'milky seas', {1} they appear rarely and unpredictably, mostly in remote parts of the Indian Ocean and the waters around Indonesia. Unlike the brief flashes of light produced by some tiny organisms when the water is disturbed, the glow of a milky sea is continuous and can last for days or even weeks. Most scientists believe that it is produced by enormous numbers of bacteria. Certain bacteria give off light only when they are present in very large numbers, {2} they can detect chemicals released by other bacteria and switch on their light when these chemicals reach a high enough concentration. In 2005, researchers led by Steven Miller of the United States Naval Research Laboratory compared the report of a British ship that had sailed through a milky sea in 1995 with images taken by a satellite on the same night, {3} they found a glowing area around fifteen thousand square kilometres in size, roughly the size of a small country. Since then, the same team has used more sensitive satellite instruments to identify several other milky seas, {4} in 2019 they detected one that covered more than a hundred thousand square kilometres. The researchers hope that satellite observations will allow ships to reach a milky sea while it is still glowing, {5} scientists can collect samples and finally test their ideas about its cause.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "until", "so that"],
          "Bilim insanlarının az fırsat bulmasının nedeni denizlerin nadir ve öngörülemez görünmesidir: 'because'.",
        ],
        [
          "(27) ----",
          ["because", "although", "unless", "until", "so that"],
          "Bakterilerin yalnızca çok sayıda olduklarında ışık vermesinin nedeni birbirlerinin salgıladığı kimyasalları algılamalarıdır: 'because'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Raporu uydu görüntüleriyle karşılaştırmaları ve parlayan bir alan bulmaları birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Başka denizler belirlemeleri ve 2019'da çok büyük birini saptamaları birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["so that", "although", "unless", "until", "whereas"],
          "Gemilerin parlayan denize ulaşmasının amacı bilim insanlarının örnek toplayabilmesidir: 'so that'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although green fluorescent protein was discovered in the early 1960s, ----.",
      [
        "it attracted little attention for many years",
        "jellyfish live in the sea",
        "proteins are large",
        "green is a colour",
        "the scientists collected thousands of jellyfish off the coast",
      ],
      "'Although' zıtlık ister: yeşil floresan protein 1960'ların başında keşfedilmiş olsa da uzun yıllar az ilgi gördü.",
    ],
    [
      "If the British ship had not reported the milky sea in 1995, ----.",
      [
        "the researchers might not have known where to look in the satellite images",
        "ships sail at night",
        "the sea is large",
        "satellites orbit the Earth",
        "the bacteria would have produced light only in large numbers",
      ],
      "Üçüncü tip koşul: İngiliz gemisi 1995'te süt beyazı denizi bildirmeseydi araştırmacılar uydu görüntülerinde nereye bakacaklarını bilemeyebilirdi.",
    ],
    [
      "----, the mice changed their behaviour as soon as the light was switched on.",
      [
        "Carrying genes for a light-sensitive protein",
        "Although mice are small",
        "Unless they were hungry",
        "Since light is fast",
        "While scientists were developing the technique in California",
      ],
      "Işığa duyarlı bir protein geni taşıyan fareler ışık açılır açılmaz davranışlarını değiştirdi.",
    ],
    [
      "The bay glows unusually brightly ----.",
      [
        "because its narrow entrance keeps the organisms inside",
        "although the water is warm",
        "unless it rains",
        "so that tourists visit",
        "while mangrove trees grow along its shores",
      ],
      "Koy alışılmadık derecede parlak ışır, çünkü dar girişi organizmaları içeride tutar.",
    ],
    [
      "Since each nerve cell was a different colour, ----.",
      [
        "scientists could trace its branches through the tangle of other cells",
        "colours are bright",
        "nerve cells are small",
        "mice have brains",
        "the technique was developed at a university in 2007",
      ],
      "'Since' neden bildirir: her sinir hücresi farklı renkte olduğundan bilim insanları dallarını diğer hücrelerin karmaşası içinde izleyebildi.",
    ],
    [
      "Not only does the platypus glow under ultraviolet light, ----.",
      [
        "but so do some other mammals, such as flying squirrels",
        "and rivers are long",
        "since it lays eggs",
        "so museums are old",
        "unless the specimens had been preserved in museums",
      ],
      "'Not only ... but also' yapısı tamamlanır: yalnızca ornitorenk değil, uçan sincaplar gibi bazı başka memeliler de morötesi ışık altında parlar.",
    ],
    [
      "Once the genes from the fungus had been inserted, ----.",
      [
        "the plants glowed continuously throughout their lives",
        "fungi grow in forests",
        "plants need light",
        "genes are small",
        "the researchers had grown the plants in a laboratory",
      ],
      "Mantardan alınan genler eklenince bitkiler yaşamları boyunca sürekli parladı.",
    ],
    [
      "Unless the bacteria are present in very large numbers, ----.",
      [
        "they do not switch on their light",
        "bacteria are small",
        "the sea is dark",
        "ships sail",
        "the satellite would not have detected the glow",
      ],
      "'Unless' olumsuz koşul: bakteriler çok sayıda bulunmadıkça ışıklarını açmazlar.",
    ],
    [
      "The glowing area was so large ----.",
      [
        "that it could be seen by a satellite in space",
        "although it was night",
        "because the sea is salty",
        "unless clouds covered it",
        "while sailors had described it for centuries",
      ],
      "Parlayan alan o kadar büyüktü ki uzaydaki bir uydu tarafından görülebildi.",
    ],
    [
      "Even though the technique was first used in mice, ----.",
      [
        "scientists hope it may one day help to treat human diseases",
        "mice are animals",
        "light is useful",
        "algae live in water",
        "it relies on a protein found in algae",
      ],
      "'Even though' zıtlık ister: teknik ilk kez farelerde kullanılmış olsa da bilim insanları bir gün insan hastalıklarını tedavi etmeye yardım edebileceğini umuyor.",
    ],
    [
      "As GFP can be made by the cells themselves, ----.",
      [
        "it can be used to study processes inside living organisms",
        "cells are small",
        "proteins glow",
        "jellyfish are common",
        "it was first extracted from jellyfish in the 1960s",
      ],
      "GFP hücrelerin kendisi tarafından üretilebildiği için canlı organizmalardaki süreçleri incelemek için kullanılabilir.",
    ],
  ],
  enTr: [
    [
      "The protein absorbs blue light and gives off green light.",
      [
        "Protein mavi ışığı emer ve yeşil ışık yayar.",
        "Protein yeşil ışığı emer ve mavi ışık yayar.",
        "Mavi ışık proteini yeşile boyar.",
        "Protein hiç ışık yaymaz.",
        "Protein yoktur.",
      ],
      "'The protein absorbs blue light' 'protein mavi ışığı emer', 'and gives off green light' 've yeşil ışık yayar' karşılığıdır.",
    ],
    [
      "The ship seemed to be sailing across a field of snow.",
      [
        "Gemi bir kar tarlasının üzerinde yol alıyor gibi görünüyordu.",
        "Gemi karla kaplı bir limanda demirliydi.",
        "Kar gemiyi bir tarlaya taşıdı.",
        "Gemi hiç hareket etmedi.",
        "Gemi yoktu.",
      ],
      "'The ship seemed to be sailing' 'gemi yol alıyor gibi görünüyordu', 'across a field of snow' 'bir kar tarlasının üzerinde' karşılığıdır.",
    ],
    [
      "The protein comes from tiny algae that swim towards light.",
      [
        "Protein ışığa doğru yüzen küçük alglerden gelir.",
        "Protein ışıktan kaçan büyük balıklardan gelir.",
        "Algler proteine doğru yüzer.",
        "Protein yapay olarak üretilir.",
        "Protein yoktur.",
      ],
      "'The protein comes from tiny algae' 'protein küçük alglerden gelir', 'that swim towards light' 'ışığa doğru yüzen' karşılığıdır.",
    ],
    [
      "Every movement of the paddle leaves a trail of blue light.",
      [
        "Küreğin her hareketi arkasında mavi bir ışık izi bırakır.",
        "Küreğin hareketi mavi ışığı söndürür.",
        "Mavi ışık küreği hareket ettirir.",
        "Kürek hiç iz bırakmaz.",
        "Kürek yoktur.",
      ],
      "'Every movement of the paddle' 'küreğin her hareketi', 'leaves a trail of blue light' 'arkasında mavi bir ışık izi bırakır' karşılığıdır.",
    ],
    [
      "The fur of the specimens glowed pink under ultraviolet light.",
      [
        "Örneklerin kürkü morötesi ışık altında pembe parladı.",
        "Örneklerin kürkü güneş ışığında siyaha döndü.",
        "Morötesi ışık örnekleri pembeye boyadı ve yok etti.",
        "Örneklerin kürkü yoktu.",
        "Örnek yoktu.",
      ],
      "'The fur of the specimens glowed pink' 'örneklerin kürkü pembe parladı', 'under ultraviolet light' 'morötesi ışık altında' karşılığıdır.",
    ],
    [
      "The plants glow brightest in their young leaves and flowers.",
      [
        "Bitkiler en parlak genç yapraklarında ve çiçeklerinde ışır.",
        "Bitkiler en parlak köklerinde ışır.",
        "Çiçekler bitkileri parlatır.",
        "Bitkiler hiç ışımaz.",
        "Bitki yoktur.",
      ],
      "'The plants glow brightest' 'bitkiler en parlak ışır', 'in their young leaves and flowers' 'genç yapraklarında ve çiçeklerinde' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Bilim insanları proteinin hücrelerin içinde nerede yapıldığını izleyebildi.",
      [
        "Scientists could watch where the protein was made inside cells.",
        "The protein could watch where scientists were working.",
        "Scientists could not see inside cells.",
        "Cells made the scientists.",
        "There were no scientists.",
      ],
      "'Bilim insanları izleyebildi' 'scientists could watch', 'proteinin hücrelerin içinde nerede yapıldığını' 'where the protein was made inside cells' karşılığıdır.",
    ],
    [
      "Parıltı günlerce hatta haftalarca sürebilir.",
      [
        "The glow can last for days or even weeks.",
        "The glow lasts for less than a second.",
        "Days and weeks make the glow.",
        "The glow never lasts.",
        "There is no glow.",
      ],
      "'Parıltı sürebilir' 'the glow can last', 'günlerce hatta haftalarca' 'for days or even weeks' karşılığıdır.",
    ],
    [
      "Teknik, belirli sinir hücrelerinin ışıkla etkinleştirilmesini sağlar.",
      [
        "The technique allows particular nerve cells to be activated by light.",
        "The technique allows light to be activated by nerve cells.",
        "Nerve cells prevent the technique from working.",
        "The technique destroys nerve cells.",
        "There is no technique.",
      ],
      "'Teknik sağlar' 'the technique allows', 'belirli sinir hücrelerinin ışıkla etkinleştirilmesini' 'particular nerve cells to be activated by light' karşılığıdır.",
    ],
    [
      "Kirlilik koydaki ışığın azalmasına yol açmıştır.",
      [
        "Pollution has caused the light in the bay to decrease.",
        "Pollution has made the bay glow more brightly.",
        "The light in the bay has caused pollution.",
        "The bay has never been polluted.",
        "There is no bay.",
      ],
      "'Kirlilik yol açmıştır' 'pollution has caused', 'koydaki ışığın azalmasına' 'the light in the bay to decrease' karşılığıdır.",
    ],
    [
      "Bu memelilerin neden parladığı henüz bilinmiyor.",
      [
        "It is not yet known why these mammals glow.",
        "It is well known that these mammals never glow.",
        "These mammals know why they glow.",
        "Glowing causes these mammals to exist.",
        "There are no mammals.",
      ],
      "'Henüz bilinmiyor' 'it is not yet known', 'bu memelilerin neden parladığı' 'why these mammals glow' karşılığıdır.",
    ],
    [
      "Araştırmacılar bitkilerin bir gün sokak lambalarının yerini alabileceğini umuyor.",
      [
        "The researchers hope that plants may one day replace street lights.",
        "The researchers hope that street lights may one day replace plants.",
        "Plants hope to replace the researchers.",
        "The researchers have removed all street lights.",
        "There are no researchers.",
      ],
      "'Araştırmacılar umuyor' 'the researchers hope', 'bitkilerin bir gün sokak lambalarının yerini alabileceğini' 'that plants may one day replace street lights' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The brain contains billions of nerve cells of many different types, tightly packed together, and for a long time one of the greatest challenges facing neuroscientists was to find out what particular types of cell actually do. Traditional methods of stimulating nerve cells with electrodes affect all the cells in an area, and drugs act too slowly to mimic the rapid signals of the brain. In 2005, a team led by the American scientist Karl Deisseroth at Stanford University reported a new technique, later called optogenetics, which used light to control nerve cells. The technique relies on proteins found in certain single-celled algae, which use them to sense light and swim towards it. When light falls on one of these proteins, it opens a channel in the cell's outer membrane, allowing electrically charged particles to flow in. Researchers inserted the gene for such a protein into nerve cells grown in the laboratory, and they found that flashes of blue light made the cells fire signals, just as they would naturally. By using genetic techniques to place the gene only in particular types of nerve cell in the brains of animals such as mice, scientists can switch those cells on with great precision, simply by shining light into the brain through a thin optical fibre. Other light-sensitive proteins can be used to switch cells off. The technique has been used to study the brain circuits involved in memory, fear, sleep, appetite and movement, and to investigate conditions such as depression, addiction and Parkinson's disease. Although its use in humans is still at an early stage, a trial reported in 2021 suggested that a similar approach might partly restore vision in a person who had lost his sight because of a disease of the retina.",
      questions: [
        [
          "According to the passage, traditional methods of stimulating nerve cells had limitations because they ----.",
          [
            "affected all cells in an area or acted too slowly",
            "used light",
            "were too precise",
            "used optical fibres to shine light into the brain of an animal",
            "were used only in algae",
          ],
          "Metne göre elektrotlar bir bölgedeki tüm hücreleri etkiliyor, ilaçlar ise beynin hızlı sinyallerini taklit edemeyecek kadar yavaş etki ediyordu.",
        ],
        [
          "The light-sensitive proteins used in optogenetics ----.",
          [
            "come from algae that use them to sense light",
            "are made by nerve cells naturally",
            "come from fireflies",
            "are found in the human eye",
            "are produced by bacteria in the sea",
          ],
          "Bazı tek hücreli algler bu proteinleri ışığı algılayıp ona doğru yüzmek için kullanır.",
        ],
        [
          "It can be understood from the passage that the use of optogenetics in humans ----.",
          [
            "is still at an early stage",
            "is already common",
            "has been banned",
            "has no potential",
            "began in 2005",
          ],
          "İnsanlarda kullanımı hâlâ erken aşamadadır; 2021'de bildirilen bir deneme umut vericiydi.",
        ],
      ],
    },
    {
      text:
        "On the island of Vieques, off the coast of Puerto Rico, lies a small, shallow bay surrounded by mangrove trees, where on dark nights every movement in the water produces a burst of blue light. Fish leave glowing trails as they swim, and visitors who paddle across the bay in kayaks see their paddles outlined in light. The glow is produced by enormous numbers of tiny single-celled organisms known as dinoflagellates, which give off a brief flash of light when they are disturbed. Scientists believe that the light may help to protect them from being eaten, since a flash may startle the small animals that feed on them or attract larger predators that hunt those animals. Many coastal waters contain such organisms, but in most places they are not numerous enough to produce a bright glow. The bay on Vieques, often described as one of the brightest of its kind in the world, has particular conditions that allow very large populations to develop. The entrance to the bay is narrow, which keeps the organisms inside, and the surrounding mangroves are thought to provide nutrients that help them to grow. These conditions are fragile. In 2017, after a powerful hurricane struck the island, the glow almost disappeared for a time, probably because heavy rain and strong winds disturbed the water and washed the organisms out of the bay, although it later recovered. Pollution, the clearing of mangroves and artificial lights near the shore can also reduce the glow, and swimming in the bay has been banned to protect it. Elsewhere, blooms of other glowing organisms sometimes cause waves breaking on beaches to light up with an electric-blue colour.",
      questions: [
        [
          "According to the passage, dinoflagellates may produce light in order to ----.",
          [
            "protect themselves from being eaten",
            "attract mates",
            "find food",
            "keep warm",
            "help mangroves grow",
          ],
          "Metne göre bir çakma onlarla beslenen küçük hayvanları ürkütebilir ya da o hayvanları avlayan daha büyük avcıları çekebilir.",
        ],
        [
          "The bay glows unusually brightly because ----.",
          [
            "its narrow entrance and the mangroves support large populations",
            "the water is very deep",
            "swimming is allowed there",
            "there are many artificial lights",
            "a hurricane struck the island in 2017 and disturbed the water",
          ],
          "Dar girişi organizmaları içeride tutar ve çevredeki mangrovların besin sağladığı düşünülür.",
        ],
        [
          "It can be understood from the passage that the glow in the bay ----.",
          [
            "can be reduced by human activities and storms",
            "never changes",
            "is caused by fish",
            "is increased by pollution",
            "can be seen only during the day",
          ],
          "Kasırga, kirlilik, mangrovların temizlenmesi ve yapay ışıklar parıltıyı azaltabilir.",
        ],
      ],
    },
    {
      text:
        "Nerve cells in the brain are packed so tightly together, with their long branches intertwined, that it is extremely difficult to trace where an individual cell goes and which other cells it connects with. In 2007, a team of researchers at Harvard University, led by Jeff Lichtman and Joshua Sanes, reported a technique that made this task much easier. They called it Brainbow, because it allowed them to label individual nerve cells in mice with around a hundred different colours. The technique was based on fluorescent proteins derived from the green fluorescent protein originally discovered in jellyfish, together with altered versions that glow red, yellow, cyan and other colours. The researchers created mice carrying several copies of a set of genes for these proteins, arranged in such a way that, in each nerve cell, a random combination of the genes was switched on. Just as a television screen creates many colours by mixing different amounts of red, green and blue light, the different combinations of proteins produced a wide range of colours, so that neighbouring cells were usually labelled differently. When the brain tissue was examined under a powerful microscope, the result was a striking image in which each cell and its branches could be distinguished from its neighbours. The images attracted attention not only from scientists but also from the public, and some were displayed in art exhibitions. More importantly, the technique has helped researchers to map the connections between nerve cells in various parts of the nervous system, a task that is essential for understanding how the brain works. Similar methods have since been applied to other organisms, including fish and fruit flies, and to other tissues.",
      questions: [
        [
          "The writer explains that tracing a single nerve cell is hard mainly because nerve cells ----.",
          [
            "are tightly packed and have intertwined branches",
            "are too large",
            "move constantly",
            "were labelled with around a hundred different colours in genetically altered mice",
            "produce no light",
          ],
          "Metne göre sinir hücreleri o kadar sıkı paketlenmiştir ki uzun dalları iç içe geçer.",
        ],
        [
          "The writer compares the technique to a television screen to explain how ----.",
          [
            "many colours were produced from a few proteins",
            "nerve cells send signals",
            "mice watch television",
            "the microscope works",
            "jellyfish produce light",
          ],
          "Televizyon ekranı gibi, farklı protein kombinasyonları geniş bir renk yelpazesi üretir.",
        ],
        [
          "It can be understood from the passage that the most important value of Brainbow is that it ----.",
          [
            "helps researchers to map connections between nerve cells",
            "produces beautiful art",
            "cures brain diseases",
            "works only in jellyfish",
            "replaces microscopes",
          ],
          "Daha önemlisi, teknik sinir hücreleri arasındaki bağlantıların haritasını çıkarmaya yardım etmiştir.",
        ],
      ],
    },
    {
      text:
        "In 2020, a group of American researchers reported that the platypus, the unusual egg-laying mammal of eastern Australia, glows when it is exposed to ultraviolet light. Under ordinary light, the platypus has brown fur, but under ultraviolet light, specimens kept in museum collections glowed a greenish-blue colour. This property, known as biofluorescence, occurs when a material absorbs light of one colour and gives it off as another, and it is different from bioluminescence, in which an organism produces its own light through a chemical reaction. Biofluorescence was already known in many animals, including corals, fish, scorpions and some birds, but it was thought to be rare in mammals. The platypus discovery followed a similar finding the year before, when some of the same researchers reported that several species of North American flying squirrel glow pink under ultraviolet light. That discovery had been made almost by accident, when one of the researchers shone an ultraviolet torch into a tree at night while looking at plants. Since then, biofluorescence has been reported in a number of other mammals, including some species of opossum, springhares and wombats, and a study published in 2023 suggested that it is far more widespread among mammals than previously believed. The purpose of the glow, if it has one, is not yet known. Some scientists suggest that it may help animals that are active at dusk or at night to recognise one another, or that it may help them to avoid predators that can see ultraviolet light. Others argue that it may simply be a by-product of the chemistry of fur and have no particular function.",
      questions: [
        [
          "According to the passage, biofluorescence differs from bioluminescence in that it ----.",
          [
            "involves absorbing light and giving it off as another colour",
            "involves producing light through a chemical reaction",
            "occurs only in insects",
            "was discovered by researchers shining a torch into a tree at night",
            "requires darkness",
          ],
          "Metne göre biyofloresans bir maddenin bir rengi emip başka bir renk olarak vermesidir; biyolüminesans ise kimyasal tepkimeyle ışık üretmektir.",
        ],
        [
          "The writer mentions the flying squirrels in order to show that ----.",
          [
            "a similar discovery had been made shortly before",
            "squirrels are related to the platypus",
            "the platypus lives in trees",
            "flying squirrels are rare",
            "ultraviolet light is harmful",
          ],
          "Bir yıl önce aynı araştırmacıların bazıları uçan sincapların pembe parladığını bildirmişti.",
        ],
        [
          "It can be understood from the passage that scientists ----.",
          [
            "do not yet agree on why some mammals glow",
            "know exactly why mammals glow",
            "believe only the platypus glows",
            "think the glow attracts insects",
            "have stopped studying biofluorescence",
          ],
          "Parıltının amacı henüz bilinmemektedir; bazıları tanıma ya da korunma işlevi önerir, bazıları yan ürün olduğunu savunur.",
        ],
      ],
    },
    {
      text:
        "For many years, scientists have tried to create plants that glow in the dark. In 1986, researchers inserted the gene for an enzyme that produces light in fireflies into tobacco plants, but the plants glowed only very faintly, and only when they were watered with a special chemical that the enzyme needed to produce light, which had to be supplied from outside. Later attempts using genes from glowing bacteria were also disappointing. In 2020, however, a team of researchers in Russia and the United Kingdom reported a different approach. They used genes from a species of fungus that glows in the dark, whose light-producing system was found to be linked to a substance that plants already make naturally as part of the process by which they build their cell walls. By inserting four genes from the fungus into tobacco plants, the researchers created plants that converted this substance into the fungus's light-producing chemical and then back again, forming a cycle that allowed them to glow continuously throughout their lives without any added chemicals. The plants gave off a greenish light that was around ten times brighter than in previous attempts and could be seen with the naked eye in a dark room. The glow was brightest in young leaves and flowers, and it changed in response to the plant's condition, for example brightening when a ripe banana skin was placed nearby, releasing a gas that affects plants. The researchers suggested that the technique could be used to study the internal activity of plants as they grow and respond to their environment. Some have also imagined that glowing trees might one day replace street lights, although the light is still far too faint for such a purpose.",
      questions: [
        [
          "According to the passage, the plants created in 1986 had a major drawback because ----.",
          [
            "they needed a special chemical to be supplied from outside",
            "they glowed too brightly",
            "they used genes from fungi",
            "they responded to a gas released by a ripe banana skin",
            "they could not grow",
          ],
          "Metne göre bitkiler çok sönük parlıyordu ve yalnızca dışarıdan verilmesi gereken özel bir kimyasalla sulandıklarında ışık üretiyordu.",
        ],
        [
          "The 2020 plants could glow continuously because ----.",
          [
            "they used a substance that plants already make naturally",
            "they were watered with chemicals",
            "they contained firefly genes",
            "they were kept in the sun",
            "they were made of fungus",
          ],
          "Mantarın ışık sistemi bitkilerin hücre duvarı yaparken doğal olarak ürettiği bir maddeye bağlıdır.",
        ],
        [
          "It can be understood from the passage that glowing trees replacing street lights ----.",
          [
            "is not yet practical",
            "has already happened",
            "is impossible in principle",
            "is planned for next year",
            "was the main aim of the 1986 study",
          ],
          "Işık bu amaç için hâlâ çok sönüktür.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The enzyme that allows fireflies to produce light requires a chemical that is found in all living cells. ---- If bacteria or other microorganisms are present, the sample glows.",
      [
        "This makes it useful in tests that check whether surfaces in hospitals and food factories have been properly cleaned.",
        "Fireflies are active on summer evenings.",
        "Cells are the basic units of life.",
        "Some firefly species flash in unison, producing spectacular displays.",
        "Hospitals must be kept clean.",
      ],
      "Boşluk enzimin özelliğini pratik bir kullanıma bağlayan ve örneğin parlamasına geçen bir cümle gerektirir; boşluğa bunun hastane ve gıda fabrikalarındaki yüzeylerin düzgün temizlenip temizlenmediğini sınayan testlerde yararlı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Scorpions glow a bright blue-green colour when they are exposed to ultraviolet light. ---- Researchers who study scorpions use ultraviolet torches to find them in the desert at night.",
      [
        "The glow comes from chemicals in the hard outer layer of their bodies.",
        "Deserts are cold at night.",
        "Scorpions have eight legs.",
        "Some scientists have suggested that the glow may help scorpions to detect light and decide when to hide.",
        "Torches use batteries.",
      ],
      "Boşluk parıltının kaynağını açıklayıp araştırmacıların bunu kullanmasına bağlanan bir cümle gerektirir; boşluğa parıltının bedenlerinin sert dış katmanındaki kimyasallardan geldiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The light-producing protein first extracted from jellyfish glows only in the presence of calcium. ---- This has helped them to study processes such as muscle contraction and the release of hormones.",
      [
        "Scientists have used it to detect changes in the amount of calcium inside living cells.",
        "Calcium is found in milk.",
        "Jellyfish have no bones.",
        "Large numbers of jellyfish had to be collected to obtain enough of the protein.",
        "Muscles allow the body to move.",
      ],
      "Boşluk proteinin özelliğini bilim insanlarının kullanımına bağlayan bir cümle gerektirir; boşluğa bilim insanlarının onu canlı hücrelerdeki kalsiyum miktarındaki değişiklikleri saptamak için kullandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Most deep-sea animals cannot see red light, and many produce only blue light. ---- This gives them a kind of secret searchlight that their prey cannot detect.",
      [
        "Some dragonfish, however, produce red light from organs beneath their eyes and are able to see it.",
        "The deep sea is very dark.",
        "Red is the colour of blood.",
        "These fish also have long, sharp teeth and can swallow prey larger than themselves.",
        "Blue light travels far in water.",
      ],
      "Boşluk 'ancak' ile istisnayı aktarıp 'gizli ışıldak' ifadesine bağlanan bir cümle gerektirir; boşluğa bazı ejder balıklarının gözlerinin altındaki organlardan kırmızı ışık üretip onu görebildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The vampire squid lives in the deep ocean, where there is very little oxygen. ---- Despite its frightening name, it feeds mainly on particles of dead material drifting down from above.",
      [
        "When threatened, it can release a cloud of glowing mucus that may confuse predators.",
        "The ocean covers most of the planet.",
        "Squid have eight arms and two tentacles.",
        "It was first described in 1903, when scientists mistakenly classified it as an octopus.",
        "Oxygen is needed for breathing.",
      ],
      "Boşluk kalamarın savunma davranışını anlatıp beslenmesine bağlanan bir cümle gerektirir; boşluğa tehdit edildiğinde avcıları şaşırtabilecek parlayan bir mukus bulutu salabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Every spring, millions of small squid gather in Toyama Bay in Japan to spawn, rising towards the surface at night. ---- The spectacle attracts tourists, who watch from boats before dawn.",
      [
        "Tiny organs on their bodies give off blue light, so that the bay's waters sparkle as the squid are brought up in nets.",
        "Japan is surrounded by the sea.",
        "Squid are eaten in many countries.",
        "Each squid lives for only about a year, and most die soon after spawning.",
        "Spring is a popular season for travel.",
      ],
      "Boşluk kalamarların ışık üretmesini anlatıp gösterinin turist çekmesine bağlanan bir cümle gerektirir; boşluğa bedenlerindeki küçük organların mavi ışık verdiğini ve ağlarla çekilirken koyun pırıldadığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Many bacteria communicate by releasing chemical signals.",
        "When the signals reach a high concentration, the bacteria change their behaviour together.",
        "This process is known as quorum sensing.",
        "Some bacteria are useful in making yoghurt.",
        "Scientists hope that blocking the signals could help to treat some infections.",
      ],
      odd: 3,
      why: "Parça bakterilerin kimyasal sinyallerle iletişimini anlatır. Bazı bakterilerin yoğurt yapımında yararlı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tiny crustaceans called ostracods produce flashes of blue light in the sea.",
        "During the Second World War, Japanese soldiers reportedly used dried ostracods as a dim light source.",
        "Adding water to the dried animals made them glow again.",
        "The Second World War ended in 1945.",
        "Some male ostracods produce patterns of light to attract females.",
      ],
      odd: 3,
      why: "Parça mavi ışık üreten küçük kabukluları anlatır. İkinci Dünya Savaşı'nın 1945'te sona erdiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The railroad worm is the larva of a beetle found in the Americas.",
        "It has a row of green lights along each side of its body.",
        "Its head glows red.",
        "Railways were built across the Americas in the nineteenth century.",
        "Its name comes from its resemblance to a train at night.",
      ],
      odd: 3,
      why: "Parça kenarlarında yeşil ışıklar bulunan böcek larvasını anlatır. Demiryollarının on dokuzuncu yüzyılda Amerika boyunca yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some sharks glow green when blue light shines on them.",
        "The glow comes from small molecules in their skin.",
        "Divers have photographed the effect using special filters.",
        "Sharks have been feared by sailors for centuries.",
        "Scientists believe the sharks can see the glow, which may help them to recognise one another.",
      ],
      odd: 3,
      why: "Parça mavi ışık altında yeşil parlayan köpekbalıklarını anlatır. Köpekbalıklarından yüzyıllardır denizcilerin korktuğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many minerals glow brightly when exposed to ultraviolet light.",
        "Some collectors display them in dark rooms lit by ultraviolet lamps.",
        "Minerals are used to make many everyday products.",
        "The glow is caused by small amounts of other elements in the crystals.",
        "A town in the United States is famous for its fluorescent minerals.",
      ],
      odd: 2,
      why: "Parça morötesi ışık altında parlayan mineralleri anlatır. Minerallerin pek çok gündelik ürünün yapımında kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some species of coral glow in bright colours under blue light.",
        "The fluorescent proteins may protect the coral from strong sunlight.",
        "They may also help algae living in the coral in deeper water.",
        "Researchers have used coral proteins to create new markers for studying cells.",
        "Coral reefs attract many tourists.",
      ],
      odd: 4,
      why: "Parça parlak renklerde parlayan mercanları anlatır. Mercan resiflerinin pek çok turist çektiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
