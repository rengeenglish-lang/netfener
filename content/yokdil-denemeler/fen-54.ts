import type { YokdilDeneme } from "./types";

export const FEN_54: YokdilDeneme = {
  no: 54,
  field: "fen",
  vocab: [
    [
      "When it is injured or starving, the tiny jellyfish can ---- its life cycle and become young again.",
      ["reverse", "decorate", "borrow", "celebrate", "forbid"],
      "Küçük denizanasının yaralandığında ya da açlık çektiğinde yaşam döngüsünü 'tersine çevirip' (reverse) yeniden gençleşebildiği anlatılır.",
    ],
    [
      "In winter, the frog's heart stops beating and its body becomes almost ---- solid.",
      ["frozen", "boiled", "polished", "printed", "woven"],
      "Kışın kurbağanın kalbinin durduğu ve vücudunun neredeyse katı biçimde 'donduğu' (frozen) anlatılır.",
    ],
    [
      "The beetle ---- a boiling hot chemical spray at any predator that attacks it.",
      ["fires", "sings", "plants", "paints", "weaves"],
      "Böceğin kendisine saldıran yırtıcıya kaynar sıcaklıkta kimyasal sprey 'püskürttüğü' (fires) anlatılır.",
    ],
    [
      "When it is grabbed by a shark, the hagfish releases a slime that can ---- the attacker's gills.",
      ["clog", "clean", "paint", "heal", "count"],
      "Bir köpekbalığı tarafından yakalanan çamur balığının saldırganın solungaçlarını 'tıkayabilen' (clog) bir sümük salgıladığı anlatılır.",
    ],
    [
      "These tiny animals can survive being completely ---- for years and come back to life when water returns.",
      ["dried", "fed", "praised", "elected", "rescued"],
      "Bu küçük hayvanların yıllarca tamamen 'kurumuş' (dried) halde hayatta kalıp su geri geldiğinde canlanabildiği anlatılır.",
    ],
    [
      "The bubble created by the shrimp's claw collapses so violently that it can ---- small fish.",
      ["knock out", "look after", "put up with", "take after", "give away"],
      "Karidesin kıskacının oluşturduğu kabarcığın o kadar şiddetle çöktüğü ki küçük balıkları 'bayıltabildiği' (knock out) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time scientists noticed the jellyfish's ability, it ---- in laboratories for several years.",
      ["had been kept", "is kept", "has been kept", "will be kept", "keeps"],
      "Geçmişteki bir andan önce süregelmiş edilgen eylem: 'had been kept'.",
    ],
    [
      "If the frog's cells had not been protected by sugar, they ---- by ice crystals.",
      ["might have been destroyed", "will be destroyed", "are destroyed", "had been destroyed", "would be destroyed"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might have been destroyed'.",
    ],
    [
      "The beetle's spray ---- by a chemical reaction inside its body.",
      ["is produced", "produces", "has produced", "is producing", "produced"],
      "Sprey üretilir; genel geçer edilgen yapı: 'is produced'.",
    ],
    [
      "---- most animals die if they lose all their water, these tiny creatures can survive.",
      ["Whereas", "Because", "Unless", "So that", "Since"],
      "Çoğu hayvanın ölmesi ile bu canlıların hayatta kalması karşılaştırılır: 'Whereas'.",
    ],
    [
      "The biologist, ---- videos showed eels leaping out of the water, was surprised by the results.",
      ["whose", "who", "which", "whom", "where"],
      "Biyoloğun videoları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only when the bubble collapses ---- the loud snapping sound produced.",
      ["is", "does", "has", "was not", "do"],
      "'Only when' ile devrik yapı; edilgen 'is produced': 'is'.",
    ],
    [
      "The hagfish ties itself into a knot, ---- helps it to escape from its own slime.",
      ["which", "what", "who", "whose", "where"],
      "Virgülden sonra önceki ifadenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The colder it gets, ---- ice forms in the frog's body.",
      ["the more", "the most", "more", "most", "so much"],
      "'The colder ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "The researchers suggested that the rotifers ---- genes from other organisms.",
      ["may have taken", "take", "are taking", "had been taking", "will take"],
      "Geçmişe yönelik olasılık bildiren yapı: 'may have taken'.",
    ],
    [
      "The eel is believed ---- out of the water to deliver stronger shocks to predators.",
      ["to leap", "leaping", "to leaping", "leapt", "having leapt"],
      "'is believed to do' kalıbında yalın mastar: 'to leap'.",
    ],
    [
      "The shrimp snaps its claw ---- it can stun its prey.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Kıskacı şaklatmasının amacı avını sersemletmektir: 'so that'.",
    ],
    [
      "The heat of the spray makes predators ---- the beetle immediately.",
      ["release", "releasing", "to release", "released", "be released"],
      "'make sb do sth' kalıbında yalın fiil: 'release'.",
    ],
    [
      "Had the frog's liver not produced large amounts of glucose, the animal ---- the winter.",
      ["might not have survived", "survives", "will survive", "had survived", "is surviving"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have survived'.",
    ],
    [
      "Both the jellyfish and the rotifers ---- of great interest to scientists who study ageing.",
      ["are", "is", "being", "to be", "has been"],
      "'Both ... and' çoğul özne alır: 'are'.",
    ],
  ],
  cloze: [
    {
      text:
        "Most animals grow old and die, but one tiny jellyfish, no larger than a fingernail, appears to have found a way to avoid this fate. Like other jellyfish, it begins life as a larva that settles on the sea floor {1} grows into a polyp, a small creature attached to a rock. The polyp then produces free-swimming jellyfish, which become adults and reproduce. In the 1980s, however, a German student studying the species in Italy noticed something remarkable. When the adults were injured, starved or exposed to sudden changes in temperature, they did not die. Instead, they sank to the bottom, {2} their bodies turned back into a ball of cells that developed into a new polyp. In effect, the animal had returned to an earlier stage of its life. Because it can repeat this process again and again, it has been called the 'immortal jellyfish', {3} in nature most individuals are probably taken by predators or by illness well before this happens. Scientists are studying the species {4} they hope to learn how its cells are able to change from one type into another, {5} this might one day help to explain how human cells could be repaired.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Larvanın deniz tabanına yerleşmesi ve polipe dönüşmesi birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["where", "which", "when", "whose", "while"],
          "'the bottom' yer bildirir; orada bedenlerinin hücre topuna dönüşmesi: 'where'.",
        ],
        [
          "(23) ----",
          ["although", "because", "unless", "so that", "until"],
          "'Ölümsüz' denmesi ile doğada çoğunun yırtıcılarca yenmesi zıttır: 'although'.",
        ],
        [
          "(24) ----",
          ["because", "unless", "although", "until", "whereas"],
          "Türün incelenmesinin nedeni hücrelerinin nasıl dönüştüğünü öğrenme umududur: 'because'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Hücre dönüşümünü öğrenme ve bunun insan hücrelerini açıklamaya yardım etmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the forests of North America and as far north as the Arctic Circle, a small brown frog survives the winter in an extraordinary way: it freezes. As temperatures fall, the wood frog hides beneath fallen leaves on the forest floor, {1} as ice begins to form on its skin, its body responds rapidly. Its liver releases large amounts of glucose into the blood, {2} this sugar enters the cells and acts like an antifreeze, preventing them from losing too much water and from being damaged by ice crystals. Up to two-thirds of the water in the frog's body may turn to ice. Its heart stops beating, {3} it stops breathing, and there is no sign of activity in its brain. By any normal definition, it appears to be dead. Yet when spring arrives and the temperature rises, the frog thaws from the inside out, {4} within a few hours its heart begins to beat again and it hops away to find a mate. Frogs in Alaska have been found to survive repeated freezing for several months at temperatures as low as minus eighteen degrees Celsius. Researchers hope that understanding the process may help to improve the storage of human organs for transplantation, {5} at present they can be kept for only a few hours.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Kurbağanın yaprakların altına saklanması ve buz oluşunca vücudunun tepki vermesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Karaciğerin şeker salması ve şekerin antifriz gibi davranması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "so that"],
          "Kalbin durması ve solunumun durması birbirine eklenen iki bulgudur: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Kurbağanın içten dışa çözülmesi ve birkaç saat içinde kalbinin atmaya başlaması birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["since", "unless", "although", "until", "so that"],
          "Organ saklamayı iyileştirme umudunun gerekçesi şu an yalnızca birkaç saat saklanabilmeleridir: 'since'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the jellyfish is described as immortal, ----.",
      [
        "most individuals in the wild are eaten or die of disease",
        "the sea is large",
        "jellyfish have no bones",
        "Italy has a long coast",
        "a German student noticed in the 1980s that the adults did not die when they were starved",
      ],
      "'Although' zıtlık ister: denizanası ölümsüz olarak nitelense de doğadaki bireylerin çoğu yenir ya da hastalıktan ölür.",
    ],
    [
      "If the frog's liver did not produce so much glucose, ----.",
      [
        "its cells would be damaged by the ice",
        "forests are cold",
        "frogs eat insects",
        "spring is warm",
        "the researchers in Alaska would have found frogs that survived at even lower temperatures",
      ],
      "İkinci tip koşul: kurbağanın karaciğeri bu kadar glikoz üretmeseydi hücreleri buzdan zarar görürdü.",
    ],
    [
      "----, the beetle sprays it at the attacker.",
      [
        "As soon as the hot liquid is formed",
        "Although beetles are small",
        "Unless ants are hungry",
        "Since insects have six legs",
        "While the scientists who studied it were filming the beetle with very fast cameras",
      ],
      "Sıcak sıvı oluşur oluşmaz böcek onu saldırgana püskürtür.",
    ],
    [
      "Sharks that attack hagfish often let them go ----.",
      [
        "because the slime quickly fills their mouths and gills",
        "although sharks have many teeth",
        "unless the water is warm",
        "so that hagfish can feed",
        "while the hagfish is searching the sea floor for the bodies of dead animals",
      ],
      "Hagfish'e saldıran köpekbalıkları, sümük ağızlarını ve solungaçlarını hızla doldurduğu için onları sıklıkla bırakır.",
    ],
    [
      "Since the rotifers have reproduced without males for millions of years, ----.",
      [
        "scientists have wondered how they have avoided extinction",
        "water is wet",
        "ponds dry up",
        "microscopes are useful",
        "they are found in moss, ponds and other damp places all over the world, even in Antarctica",
      ],
      "'Since' neden bildirir: rotiferler milyonlarca yıldır erkek olmadan çoğaldığından bilim insanları neslinin nasıl tükenmediğini merak etmiştir.",
    ],
    [
      "Not only does the shrimp's snap stun its prey, ----.",
      [
        "but it also produces a brief flash of light",
        "and shrimps live in the sea",
        "since claws are hard",
        "so fish are small",
        "unless large groups of shrimp made enough noise to interfere with the sonar of submarines",
      ],
      "'Not only ... but also' yapısı tamamlanır: karidesin şaklaması yalnızca avını sersemletmekle kalmaz, kısa bir ışık parlaması da üretir.",
    ],
    [
      "Once the eel presses its chin against a threatening animal, ----.",
      [
        "the electric shock passes directly into the attacker's body",
        "eels are long",
        "rivers flow",
        "electricity is useful",
        "the biologist noticed that the eels leapt out of the water when he moved a metal net towards them",
      ],
      "Yılan balığı çenesini tehdit eden bir hayvana dayadığında elektrik şoku doğrudan saldırganın vücuduna geçer.",
    ],
    [
      "Unless the rotifers can dry out completely, ----.",
      [
        "they cannot survive long periods without water",
        "they are tiny",
        "moss is green",
        "ponds have fish",
        "scientists would have found that they took genes from bacteria and fungi much earlier",
      ],
      "'Unless' olumsuz koşul: rotiferler tamamen kuruyamazlarsa susuz uzun dönemlere dayanamazlar.",
    ],
    [
      "The reaction inside the beetle is so violent ----.",
      [
        "that the spray reaches the temperature of boiling water",
        "although beetles are insects",
        "because ants are small",
        "unless the beetle is old",
        "while the chemicals are stored in separate chambers at the tip of the beetle's abdomen",
      ],
      "Böceğin içindeki tepkime o kadar şiddetlidir ki sprey kaynar su sıcaklığına ulaşır.",
    ],
    [
      "Even though the frog's heart stops beating for weeks, ----.",
      [
        "it begins to beat again when the frog thaws",
        "frogs live in ponds",
        "winters are long",
        "the forest is quiet",
        "the researchers wanted to know whether the process could help to store human organs",
      ],
      "'Even though' zıtlık ister: kurbağanın kalbi haftalarca dursa da kurbağa çözülünce yeniden atmaya başlar.",
    ],
    [
      "As the slime expands enormously when it mixes with water, ----.",
      [
        "a single hagfish can produce a large amount within a fraction of a second",
        "the sea is salty",
        "fish have fins",
        "sharks are dangerous",
        "a lorry carrying thousands of hagfish overturned on a road in the United States, covering cars",
      ],
      "Sümük suyla karışınca muazzam genişlediği için tek bir hagfish saniyenin çok küçük bir bölümünde büyük miktar üretebilir.",
    ],
  ],
  enTr: [
    [
      "The jellyfish can turn back into an earlier stage of its life.",
      [
        "Denizanası yaşamının daha önceki bir evresine geri dönebilir.",
        "Denizanası yaşamının daha sonraki bir evresine atlayabilir.",
        "Yaşamının daha önceki bir evresine dönemeyen denizanası, kısa sürede ölür.",
        "Yaşam denizanasını geri çevirir.",
        "Denizanası hiç değişmez.",
      ],
      "'The jellyfish can turn back' 'denizanası geri dönebilir', 'into an earlier stage of its life' 'yaşamının daha önceki bir evresine' karşılığıdır.",
    ],
    [
      "Up to two-thirds of the water in the frog's body may turn to ice.",
      [
        "Kurbağanın vücudundaki suyun üçte ikisine kadarı buza dönüşebilir.",
        "Kurbağanın vücudundaki buzun üçte ikisi suya dönüşür.",
        "Vücudundaki suyun üçte ikisi buza dönüşen kurbağalar, ilkbaharda hayatta kalamaz.",
        "Buz kurbağanın vücudunu suya çevirir.",
        "Kurbağanın vücudunda hiç su yoktur.",
      ],
      "'Up to two-thirds of the water in the frog's body' 'kurbağanın vücudundaki suyun üçte ikisine kadarı', 'may turn to ice' 'buza dönüşebilir' karşılığıdır.",
    ],
    [
      "The two chemicals are stored separately until the beetle is threatened.",
      [
        "İki kimyasal, böcek tehdit edilene kadar ayrı ayrı depolanır.",
        "İki kimyasal, böcek tehdit edildikten sonra karıştırılarak atılır.",
        "Böcek tehdit edilmediği sürece iki kimyasal sürekli birbirine karışır.",
        "Böcek iki kimyasalı tehdit eder.",
        "Kimyasallar hiç depolanmaz.",
      ],
      "'The two chemicals are stored separately' 'iki kimyasal ayrı ayrı depolanır', 'until the beetle is threatened' 'böcek tehdit edilene kadar' karşılığıdır.",
    ],
    [
      "A single hagfish can fill a bucket with slime in a few minutes.",
      [
        "Tek bir hagfish birkaç dakikada bir kovayı sümükle doldurabilir.",
        "Bir kova sümük, birkaç dakikada tek bir hagfish'i öldürebilir.",
        "Birkaç dakika içinde sümük üretemeyen hagfish'ler, köpekbalıklarına kolay av olur.",
        "Kova hagfish'i sümükle doldurur.",
        "Hagfish hiç sümük üretmez.",
      ],
      "'A single hagfish can fill a bucket with slime' 'tek bir hagfish bir kovayı sümükle doldurabilir', 'in a few minutes' 'birkaç dakikada' karşılığıdır.",
    ],
    [
      "The rotifers appear to have taken genes from bacteria and fungi.",
      [
        "Rotiferler bakterilerden ve mantarlardan gen almış gibi görünmektedir.",
        "Bakteriler ve mantarlar rotiferlerden gen almıştır.",
        "Bakterilerden gen alan rotiferler, mantarların genlerini reddetmiştir.",
        "Genler rotiferleri almıştır.",
        "Rotiferlerin hiç geni yoktur.",
      ],
      "'The rotifers appear to have taken genes' 'rotiferler gen almış gibi görünmektedir', 'from bacteria and fungi' 'bakterilerden ve mantarlardan' karşılığıdır.",
    ],
    [
      "The noise made by large groups of shrimp can interfere with sonar.",
      [
        "Büyük karides gruplarının çıkardığı gürültü sonarı engelleyebilir.",
        "Sonar, büyük karides gruplarının gürültüsünü engelleyebilir.",
        "Büyük karides grupları, sonarın çıkardığı gürültü nedeniyle bölgeyi terk eder.",
        "Karidesler sonar yapar.",
        "Karidesler hiç ses çıkarmaz.",
      ],
      "'The noise made by large groups of shrimp' 'büyük karides gruplarının çıkardığı gürültü', 'can interfere with sonar' 'sonarı engelleyebilir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Denizanası yaralandığında ya da aç kaldığında ölmez.",
      [
        "The jellyfish does not die when it is injured or starved.",
        "The jellyfish dies as soon as it is injured or starved.",
        "The jellyfish injures other animals when it is starved, but it never eats them.",
        "Starvation injures the jellyfish.",
        "The jellyfish never eats.",
      ],
      "'Denizanası ölmez' 'the jellyfish does not die', 'yaralandığında ya da aç kaldığında' 'when it is injured or starved' karşılığıdır.",
    ],
    [
      "Kurbağa, ilkbaharda içten dışa doğru çözülür.",
      [
        "In spring, the frog thaws from the inside out.",
        "In spring, the frog freezes from the outside in.",
        "In spring, the frog begins to freeze again, although its heart continues to beat.",
        "Spring thaws the forest from the inside out.",
        "The frog never thaws.",
      ],
      "'Kurbağa ilkbaharda çözülür' 'in spring, the frog thaws', 'içten dışa doğru' 'from the inside out' karşılığıdır.",
    ],
    [
      "Böcek, spreyini hemen hemen her yöne yöneltebilir.",
      [
        "The beetle can aim its spray in almost any direction.",
        "The spray can aim the beetle in any direction.",
        "The beetle can spray in only one direction, so it must turn its body to face the attacker.",
        "The direction aims the beetle.",
        "The beetle has no spray.",
      ],
      "'Böcek yöneltebilir' 'the beetle can aim', 'spreyini hemen hemen her yöne' 'its spray in almost any direction' karşılığıdır.",
    ],
    [
      "Hagfish, kendi sümüğünden kurtulmak için vücudunu düğümler.",
      [
        "The hagfish ties its body into a knot to free itself from its own slime.",
        "The hagfish uses its slime to tie other fish into knots.",
        "The hagfish produces slime to tie its body into a knot when it wants to sleep.",
        "The slime ties the hagfish to the sea floor.",
        "The hagfish cannot move its body.",
      ],
      "'Hagfish vücudunu düğümler' 'the hagfish ties its body into a knot', 'kendi sümüğünden kurtulmak için' 'to free itself from its own slime' karşılığıdır.",
    ],
    [
      "Bu küçük hayvanlar yalnızca dişilerden oluşur.",
      [
        "These tiny animals consist only of females.",
        "These tiny animals consist only of males.",
        "These tiny animals consist mainly of females, although males appear in some seasons.",
        "Females consist of tiny animals.",
        "These animals have no young.",
      ],
      "'Bu küçük hayvanlar' 'these tiny animals', 'yalnızca dişilerden oluşur' 'consist only of females' karşılığıdır.",
    ],
    [
      "Kabarcık çöktüğünde sıcaklık çok kısa bir süre için çok yükselir.",
      [
        "When the bubble collapses, the temperature rises very high for a very short time.",
        "When the temperature rises, the bubble collapses for a long time.",
        "When the bubble collapses, the temperature falls sharply and the water around it freezes.",
        "The temperature collapses the bubble.",
        "The bubble never collapses.",
      ],
      "'Kabarcık çöktüğünde' 'when the bubble collapses', 'sıcaklık çok kısa bir süre için çok yükselir' 'the temperature rises very high for a very short time' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "When it is attacked by an ant, a frog or a bird, the bombardier beetle defends itself with one of the most remarkable weapons in the animal kingdom. It sprays its attacker with a hot, foul-smelling chemical mixture that can reach the temperature of boiling water. The beetle stores two harmless chemicals, hydroquinones and hydrogen peroxide, in a chamber in the tip of its abdomen. When it is threatened, it squeezes some of the mixture into a second, thick-walled chamber containing enzymes, which cause a sudden and violent chemical reaction. The heat released turns part of the liquid into vapour, and the pressure forces the spray out of an opening with an audible pop. Studies using high-speed cameras have shown that the spray is not continuous but consists of a rapid series of tiny explosions, as many as five hundred a second, which may help to prevent the beetle from being harmed by its own weapon. The beetle can also aim the spray with remarkable accuracy, turning the tip of its abdomen to hit attackers in front of it, behind it or even on its back. In 2018, Japanese researchers reported that some beetles that had been swallowed by toads were able to make the toads vomit them up alive by spraying inside the toads' stomachs.",
      questions: [
        [
          "According to the passage, the beetle's chemicals ----.",
          [
            "are harmless until they are mixed with enzymes",
            "are always boiling",
            "are taken from plants",
            "are produced only when the beetle has been swallowed by a toad or a frog",
            "are stored in its head",
          ],
          "Metne göre iki kimyasal zararsızdır; enzimlerle karışınca şiddetli tepkime olur.",
        ],
        [
          "The spray is released in a series of tiny explosions, which ----.",
          [
            "may protect the beetle from its own weapon",
            "makes it less accurate",
            "makes it silent",
            "allows ants to escape before the spray can reach their bodies",
            "cools the beetle down",
          ],
          "Bu durum böceğin kendi silahından zarar görmesini önlemeye yardım edebilir.",
        ],
        [
          "It can be understood from the passage that the research published in 2018 showed that ----.",
          [
            "the beetles could escape even after being eaten",
            "toads are immune to the spray",
            "the beetles cannot aim their spray",
            "high-speed cameras were needed to film the toads in their natural surroundings",
            "toads prefer to eat beetles",
          ],
          "Kurbağalarca yutulan bazı böcekler midede püskürterek kendilerini canlı kusturabildi.",
        ],
      ],
    },
    {
      text:
        "Electric eels, which live in the rivers of South America, can produce shocks of up to about six hundred volts, enough to stun a horse. In fact, the most famous account of their power, written by a German explorer who visited Venezuela in 1800, describes local fishermen driving horses into a pool so that the eels would exhaust their electricity by attacking them. For two centuries, many scientists doubted that the story was true. In 2016, however, an American biologist named Kenneth Catania reported an unexpected observation. While moving eels from one tank to another in his laboratory with a metal net, he noticed that some of them, instead of swimming away, leapt out of the water towards the net, pressing their chins against it and producing a series of powerful shocks. Further experiments showed why. When an eel is in the water, much of the electricity spreads out through the water around it. By leaping out and pressing against a threatening animal, the eel sends the current directly through the attacker's body, delivering a much stronger shock. Catania suggested that the behaviour may help eels to defend themselves when the pools in which they live shrink during the dry season, leaving them exposed to land predators. Remarkably, his findings provided support for the explorer's description, which had been written more than two hundred years earlier.",
      questions: [
        [
          "According to the passage, the explorer's story described ----.",
          [
            "eels attacking horses driven into a pool",
            "eels being caught with nets",
            "horses eating eels",
            "a biologist moving eels from one tank to another with a metal net",
            "eels living in the sea",
          ],
          "Metne göre balıkçılar atları bir havuza sürüyor, yılan balıkları da onlara saldırıyordu.",
        ],
        [
          "By leaping out of the water, the eel ----.",
          [
            "delivers a stronger shock to an attacker",
            "escapes from predators",
            "saves its energy",
            "allows the electricity to spread out through the water around it",
            "catches flying insects",
          ],
          "Akımı doğrudan saldırganın vücudundan geçirerek çok daha güçlü bir şok verir.",
        ],
        [
          "It can be understood from the passage that Catania's research ----.",
          [
            "made an old account seem more believable",
            "proved the explorer wrong",
            "was carried out in Venezuela",
            "showed that eels can live out of water for long periods during the dry season",
            "was ignored by other scientists",
          ],
          "Bulguları iki yüz yıl önce yazılan anlatıyı destekledi.",
        ],
      ],
    },
    {
      text:
        "Hagfish are eel-shaped animals that live on the sea floor, often feeding on the bodies of dead whales and fish. They have no jaws, no true bones and no scales, and they have changed little in hundreds of millions of years. Their most remarkable feature is their defence. When a hagfish is grabbed by a predator, such as a shark, it releases a small amount of a substance from glands along the sides of its body. On contact with seawater, this substance expands within a fraction of a second into a huge volume of thick slime, which fills the attacker's mouth and gills, so that it is forced to let go or risk suffocating. Videos filmed in the deep sea have shown sharks spitting out hagfish and swimming away. The slime contains long, extremely thin protein threads that are remarkably strong, and researchers have studied them as a possible model for new fibres that could replace those made from oil. The hagfish itself avoids becoming trapped in its own slime by tying its body into a knot and sliding the knot along its length, scraping the slime away. The animals are not widely loved, but in some countries, especially South Korea, they are eaten as food, and their skin is used to make a leather often sold as 'eel skin'.",
      questions: [
        [
          "According to the passage, the hagfish's slime protects it by ----.",
          [
            "blocking the mouth and gills of the predator",
            "poisoning the predator",
            "making the hagfish invisible",
            "allowing the hagfish to tie its body into a knot and slide away from the predator",
            "attracting other hagfish",
          ],
          "Metne göre sümük saldırganın ağzını ve solungaçlarını doldurur.",
        ],
        [
          "Researchers are interested in the threads in the slime because ----.",
          [
            "they might inspire alternatives to fibres made from oil",
            "they are poisonous",
            "they can be eaten",
            "they help sharks to digest the hagfish that they have swallowed in the deep sea",
            "they glow in the dark",
          ],
          "Petrolden yapılan liflerin yerini alabilecek yeni lifler için model olabilir.",
        ],
        [
          "It can be understood from the passage that the hagfish ties itself into a knot in order to ----.",
          [
            "remove its own slime from its body",
            "catch prey",
            "attract a mate",
            "frighten sharks that are swimming towards it in the deep sea",
            "sleep",
          ],
          "Düğümü vücudu boyunca kaydırarak kendi sümüğünü sıyırır.",
        ],
      ],
    },
    {
      text:
        "Bdelloid rotifers are tiny animals, less than half a millimetre long, that live in ponds, moss, soil and other damp places all over the world. Although they are almost invisible to the naked eye, they have fascinated biologists for two reasons. The first is their resistance to harsh conditions. When their surroundings dry out, they lose almost all of the water in their bodies and enter a state in which their metabolism stops completely. In this form, they can survive for years and can be blown long distances by the wind. When water returns, they rehydrate and resume their lives within hours. They can also survive levels of radiation that would kill most other animals. The second reason is that no male bdelloid rotifer has ever been found. They appear to have reproduced without sex for tens of millions of years, which biologists had long believed would make a species unable to adapt and likely to die out. Genetic studies have suggested a possible explanation. A surprisingly large proportion of their genes appear to have come from bacteria, fungi and plants. Scientists believe that when the rotifers dry out, their DNA breaks into pieces, and when they rehydrate and repair it, they may take up fragments of DNA from their surroundings, gaining new genes that help them to adapt.",
      questions: [
        [
          "According to the passage, when their surroundings dry out, the rotifers ----.",
          [
            "lose their water and stop all metabolism",
            "die immediately",
            "swim to deeper water",
            "produce males that are able to reproduce with the females once water returns",
            "eat more food",
          ],
          "Metne göre vücutlarındaki suyun neredeyse tamamını kaybedip metabolizmalarını durdururlar.",
        ],
        [
          "Biologists were surprised by the rotifers' history because ----.",
          [
            "species without sex were expected to die out",
            "they have many males",
            "they live only in Antarctica",
            "they had been blown by the wind to every continent within a short period of time",
            "they are very large",
          ],
          "Cinsel üreme olmadan bir türün uyum sağlayamayıp yok olacağı sanılıyordu.",
        ],
        [
          "It can be understood from the passage that drying out may help the rotifers to ----.",
          [
            "acquire genes from other organisms",
            "grow larger",
            "become male",
            "resist the radiation that is produced by bacteria and fungi in the soil",
            "find food",
          ],
          "Kuruyup DNA'larını onarırken çevreden DNA parçaları alarak yeni genler kazanabilirler.",
        ],
      ],
    },
    {
      text:
        "Pistol shrimps, which are only a few centimetres long, are among the noisiest animals in the sea. Each has one claw that is much larger than the other, and when it snaps this claw shut, it produces a jet of water moving at more than a hundred kilometres an hour. Scientists long believed that the loud crack was caused by the two parts of the claw striking each other. In 2000, however, researchers using high-speed cameras showed that the sound is produced by something else. The jet of water is so fast that the pressure behind it drops sharply, creating a bubble. When the bubble collapses a moment later, it produces a powerful shock wave that can stun or kill small fish and worms, which the shrimp then eats. The collapse is so violent that, for a tiny fraction of a second, the temperature inside the bubble may reach several thousand degrees, and a faint flash of light is produced. Large colonies of pistol shrimps can be so loud that their crackling noise has interfered with the sonar used by submarines, and during the Second World War, submarines are said to have hidden among them to avoid detection. The shrimp's claw has inspired engineers who are studying ways of using collapsing bubbles to clean surfaces.",
      questions: [
        [
          "According to the passage, the loud crack made by the shrimp is caused by ----.",
          [
            "the collapse of a bubble",
            "the two parts of the claw striking each other",
            "the shrimp's voice",
            "the high-speed cameras that the researchers used to study the claw in 2000",
            "fish being stunned",
          ],
          "Metne göre ses bir kabarcığın çökmesiyle oluşur.",
        ],
        [
          "The shock wave produced by the bubble is used by the shrimp to ----.",
          [
            "catch its food",
            "attract a mate",
            "communicate with other shrimps",
            "hide from submarines that are using sonar to search for objects in the sea",
            "clean its claw",
          ],
          "Şok dalgası küçük balıkları ve solucanları sersemletir ya da öldürür; karides bunları yer.",
        ],
        [
          "It can be understood from the passage that, during the Second World War, colonies of pistol shrimps ----.",
          [
            "may have helped submarines avoid being detected",
            "attacked submarines",
            "were used as food",
            "were studied by engineers trying to find new ways of cleaning surfaces with bubbles",
            "were destroyed by sonar",
          ],
          "Denizaltıların fark edilmemek için aralarına saklandığı söylenir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "An Australian songbird called the superb lyrebird can copy almost any sound it hears. ---- Recordings have shown that birds living near towns sometimes imitate car alarms, camera shutters and chainsaws.",
      [
        "Males sing complex songs that include accurate copies of the calls of many other species of bird.",
        "Australia is a large country.",
        "Birds have feathers.",
        "The male has a long, beautiful tail that it spreads over its head during its display.",
        "Many people enjoy listening to birds.",
      ],
      "Boşluk taklit yeteneğini örnekleyen bir cümle gerektirir; boşluğa erkeklerin pek çok başka kuş türünün seslerinin doğru kopyalarını içeren karmaşık şarkılar söylediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Pangolins are the only mammals covered in hard scales, which are made of keratin, the same substance as human fingernails. ---- Unfortunately, this defence does not protect them from people, and they are thought to be the most trafficked mammals in the world.",
      [
        "Faced with danger, they curl up so tightly that even lions find difficult to open.",
        "Mammals feed their young on milk.",
        "Fingernails grow slowly.",
        "They feed mainly on ants and termites, which they catch with their long, sticky tongues.",
        "Lions live in Africa.",
      ],
      "Boşluk 'bu savunma' ifadesine bağlanan bir cümle gerektirir; boşluğa tehdit edildiklerinde aslanların bile açmakta zorlandığı sıkı bir top haline geldiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "Sloths move so slowly that tiny green algae grow in the grooves of their fur. ---- In return, the sloth may benefit from the camouflage and possibly from nutrients that it absorbs by licking its fur.",
      [
        "The algae gain a safe, damp place to live, along with moths that also live in the fur.",
        "Sloths live in trees.",
        "Algae are a kind of plant.",
        "Sloths climb down from the trees roughly every seven days to defecate on the ground.",
        "Forests are green.",
      ],
      "Boşluk 'karşılığında' ifadesine bağlanan bir cümle gerektirir; boşluğa alglerin güvenli ve nemli bir yaşam yeri kazandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Geckos can run up smooth walls and even hang from glass ceilings by a single toe. ---- These forces are weak individually, but together they are strong enough to support the animal's weight many times over.",
      [
        "Their toes are covered with millions of microscopic hairs that are attracted to the surface by tiny electrical forces.",
        "Geckos eat insects.",
        "Glass is transparent.",
        "Some species can also lose their tails to escape from predators and grow new ones.",
        "Walls are vertical.",
      ],
      "Boşluk 'bu kuvvetler' ifadesine bağlanan bir cümle gerektirir; boşluğa parmaklarının küçük elektriksel kuvvetlerle yüzeye çekilen milyonlarca mikroskobik kılla kaplı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "A lizard found in the rainforests of Central America is able to run across the surface of water. ---- Its ability has earned it the nickname of the 'Jesus Christ lizard'.",
      [
        "It slaps its large back feet on the water so quickly that it creates pockets of air that stop it from sinking.",
        "Rainforests are wet.",
        "Lizards are reptiles.",
        "Young lizards can run farther across water than adults because they are lighter.",
        "Water is liquid.",
      ],
      "Boşluk yeteneğin nasıl gerçekleştiğini açıklayan bir cümle gerektirir; boşluğa iri arka ayaklarını suya o kadar hızlı vurduğunu ki batmasını önleyen hava cepleri oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In the caves of south-eastern Europe lives a pale, blind salamander called the olm. ---- One individual observed by scientists did not move from the same spot for more than seven years.",
      [
        "It can live for about a century and can survive for years without food.",
        "Caves are dark.",
        "Europe has many mountains.",
        "Local people once believed that the animals were the young of dragons washed out of the caves by floods.",
        "Salamanders are amphibians.",
      ],
      "Boşluk hareketsizlik örneğine geçiş sağlayan bir cümle gerektirir; boşluğa yaklaşık bir yüzyıl yaşayabildiğini ve yıllarca besinsiz kalabildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "When attacked, some sea cucumbers push parts of their internal organs out of their bodies.",
        "The sticky organs can entangle or distract predators.",
        "Sea cucumbers are eaten as a delicacy in parts of Asia.",
        "The animal later grows new organs.",
        "This process may take several weeks.",
      ],
      odd: 2,
      why: "Parça deniz hıyarlarının savunma davranışını anlatır. Asya'nın bazı bölgelerinde lüks yiyecek olarak yendiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Flying fish can escape from predators by leaping out of the water.",
        "They spread their large fins and glide through the air.",
        "Some glides last for more than forty seconds.",
        "Sailors once found fish on the decks of their ships.",
        "Many people enjoy fishing as a hobby.",
      ],
      odd: 4,
      why: "Parça uçan balıkların süzülmesini anlatır. Pek çok kişinin hobi olarak balık tutmaktan hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The star-nosed mole has twenty-two fleshy tentacles around its nose.",
        "The tentacles are extremely sensitive to touch.",
        "Gardeners often dislike moles.",
        "The mole can identify and eat a piece of food in a fraction of a second.",
        "It is one of the fastest-eating mammals known.",
      ],
      odd: 2,
      why: "Parça yıldız burunlu köstebeği anlatır. Bahçıvanların genellikle köstebeklerden hoşlanmadığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The cookiecutter shark is only about half a metre long.",
        "It attacks much larger animals, such as whales and tuna.",
        "It attaches itself with its lips and twists its body to remove a round piece of flesh.",
        "Whales are the largest animals on Earth.",
        "It has even damaged the rubber coverings of submarines.",
      ],
      odd: 3,
      why: "Parça küçük ama büyük hayvanlardan et koparan bir köpekbalığını anlatır. Balinaların Dünya'nın en büyük hayvanları olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Mudskippers are fish that spend much of their time out of water.",
        "They move across mud using their strong front fins.",
        "Mud is often found near rivers.",
        "They can breathe through their skin as long as it stays wet.",
        "Males jump into the air to attract females.",
      ],
      odd: 2,
      why: "Parça sudan dışarıda yaşayabilen balıkları anlatır. Çamurun çoğunlukla nehirlerin yakınında bulunduğunu söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "The aye-aye of Madagascar has a very long, thin middle finger.",
        "It taps on tree bark and listens for insect larvae moving inside.",
        "It then gnaws a hole and pulls the larvae out with its finger.",
        "Madagascar is a large island.",
        "In some villages, the animal is wrongly believed to bring bad luck.",
      ],
      odd: 3,
      why: "Parça aye-aye'nin beslenme yöntemini anlatır. Madagaskar'ın büyük bir ada olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
