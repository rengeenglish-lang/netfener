import type { YokdilDeneme } from "./types";

export const FEN_19: YokdilDeneme = {
  no: 19,
  field: "fen",
  vocab: [
    [
      "The technique can ---- a tiny sample of DNA, producing billions of copies within a few hours.",
      ["amplify", "destroy", "hide", "freeze", "dilute"],
      "Tekniğin küçük bir DNA örneğini 'çoğaltabildiği' (amplify) ve birkaç saat içinde milyarlarca kopya üretebildiği anlatılır.",
    ],
    [
      "Jeffreys realised that the patterns were so ---- that they could be used to tell one person from another.",
      ["distinctive", "simple", "common", "temporary", "faint"],
      "Jeffreys'in desenlerin o kadar 'ayırt edici' (distinctive) olduğunu ve bir kişiyi diğerinden ayırmak için kullanılabileceğini fark ettiği anlatılır.",
    ],
    [
      "Children whose mothers had been ---- to famine during pregnancy showed higher rates of certain diseases later in life.",
      ["exposed", "accustomed", "opposed", "devoted", "related"],
      "Annelerinin hamilelik sırasında kıtlığa 'maruz kaldığı' (exposed to) çocuklarda ileriki yaşlarda bazı hastalıkların daha sık görüldüğü anlatılır.",
    ],
    [
      "Each time a cell divides, its telomeres become slightly shorter, and eventually the cell can no longer ----.",
      ["divide", "grow old", "breathe", "move", "die"],
      "Her bölünmede telomerlerin kısaldığı ve sonunda hücrenin artık 'bölünemediği' (divide) anlatılır.",
    ],
    [
      "The experiment showed that simple molecules needed for life could ---- under conditions thought to exist on the early Earth.",
      ["form", "vanish", "melt", "travel", "explode"],
      "Deneyin yaşam için gerekli basit moleküllerin ilkel Dünya koşullarında 'oluşabileceğini' (form) gösterdiği anlatılır.",
    ],
    [
      "Scientists were able to ---- the genome of an unknown human group from a single tiny finger bone.",
      ["piece together", "give away", "turn down", "put off", "look up to"],
      "Bilim insanlarının tek bir küçük parmak kemiğinden bilinmeyen bir insan grubunun genomunu 'bir araya getirebildiği' (piece together) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The polymerase chain reaction ---- by the American chemist Kary Mullis in 1983.",
      ["was invented", "invented", "has invented", "was inventing", "had invented"],
      "Yöntem icat edilen bir şeydir ve olay 1983'te olmuştur: edilgen geçmiş zaman 'was invented'.",
    ],
    [
      "If Jeffreys had not looked closely at the X-ray film, he ---- the unique patterns.",
      ["might not have noticed", "might not notice", "will not notice", "did not notice", "had not noticed"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might not have + V3' ister.",
    ],
    [
      "By the time the long-term experiment reached its thirty-thousandth generation, the bacteria ---- several new abilities.",
      ["had evolved", "have evolved", "evolve", "will evolve", "were evolved"],
      "Otuz bininci kuşağa ulaşmadan (geçmiş) önce tamamlanmış eylem: Past Perfect 'had evolved'.",
    ],
    [
      "Miller, ---- experiment produced amino acids from simple gases, was a graduate student at the time.",
      ["whose", "who", "which", "whom", "where"],
      "Deney Miller'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only when the DNA from the finger bone was analysed ---- that it belonged to a previously unknown group.",
      ["did scientists realise", "scientists realised", "realised scientists", "scientists did realise", "did realise scientists"],
      "'Only when' ile başlayan cümlede ana cümle devrik olur: 'did scientists realise'.",
    ],
    [
      "The food shortage was so severe ---- people were forced to eat tulip bulbs.",
      ["that", "which", "as", "such", "than"],
      "'so severe that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- telomeres shorten with age, some lifestyle factors may slow the process.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Telomerlerin yaşla kısalması ile bazı yaşam tarzı etmenlerinin süreci yavaşlatabilmesi zıttır: 'Although'.",
    ],
    [
      "Suspects ---- DNA did not match the samples found at the scene were released.",
      ["whose", "who", "which", "whom", "where"],
      "DNA şüphelilere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Modern humans are known ---- with Denisovans in Asia tens of thousands of years ago.",
      ["to have interbred", "to interbreed", "interbreeding", "to be interbreeding", "to have been interbred"],
      "Olay geçmişte kalmıştır ve etkendir: 'be known to have + V3'.",
    ],
    [
      "The flasks were kept at the same temperature ---- given the same food every day.",
      ["and", "but", "or", "unless", "so that"],
      "İki koşul birbirine eklenir: 'and'.",
    ],
    [
      "Samples ---- every five hundred generations were frozen for later study.",
      ["taken", "taking", "which take", "to take", "have taken"],
      "Örnekler alınan şeylerdir; edilgen anlamlı geçmiş ortaç 'taken' gerekir.",
    ],
    [
      "Miller passed electric sparks through the gases ---- they would resemble lightning on the early Earth.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The bacteria behaved as if they ---- learned a new skill.",
      ["had", "have", "were", "will have", "would"],
      "'as if' ile gerçek dışı ve geçmişe ait bir durum anlatılır: 'had learned'.",
    ],
    [
      "The shorter a cell's telomeres are, ---- divisions it has left.",
      ["the fewer", "fewer", "the fewest", "less", "the less few"],
      "'The shorter …, the fewer …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "The polymerase chain reaction, usually known as PCR, is a technique {1} allows scientists to make millions or billions of copies of a specific piece of DNA from a tiny sample. It was invented in 1983 by the American chemist Kary Mullis, who later said that the idea came to him while he was driving at night. The process involves heating the DNA so that its two strands separate, then cooling it {2} short pieces of DNA called primers can attach to the target sequence. An enzyme then builds new strands, doubling the amount of DNA. By repeating the cycle many times, the amount grows exponentially. At first, the method was slow, {3} the enzyme was destroyed by the heat at each step and had to be replaced. The problem was solved by using an enzyme taken from a bacterium {4} lives in hot springs and can survive high temperatures. PCR soon became indispensable in biology and medicine. It is used to diagnose infections, to identify criminals and to study ancient DNA. During the COVID-19 pandemic, it was used for billions of tests. Mullis received the Nobel Prize in Chemistry in 1993, {5} only ten years after his discovery.",
      blanks: [
        [
          "(21) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'a technique' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(22) ----",
          ["so that", "in order to", "because of", "instead of", "as a result of"],
          "Ardından tam bir cümle gelir ve amaç bildirilir: 'so that'.",
        ],
        [
          "(23) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Yöntemin yavaş olmasının nedeni enzimin her adımda ısıyla yok olmasıdır: 'because'.",
        ],
        [
          "(24) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'a bacterium' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(25) ----",
          ["just", "hardly", "rarely", "already", "still"],
          "'just ten years after' = 'yalnızca on yıl sonra' anlamında vurgu bildiren 'just' gerekir.",
        ],
      ],
    },
    {
      text:
        "In September 1984, the British geneticist Alec Jeffreys was studying how genes vary between individuals when he looked at an X-ray image of DNA from members of his technician's family. He noticed that certain regions of the DNA, which contain short sequences repeated many times, produced patterns of bands that differed from person to person, {1} family members shared some bands. He immediately realised that the technique could be used to identify individuals, {2} only identical twins would have exactly the same pattern. The method, which he called DNA fingerprinting, was first used in 1985 in an immigration case, {3} it showed that a boy was the son of a British woman and allowed him to stay in the country. Two years later, it was used for the first time in a criminal investigation, when police in Leicestershire were searching for the man responsible for two murders. DNA testing proved that a young man who had confessed was innocent, {4} after thousands of local men had given samples, the real murderer was identified. Since then, DNA evidence has become a standard part of criminal investigations around the world, and it has also helped to free many people {5} had been wrongly convicted.",
      blanks: [
        [
          "(26) ----",
          ["although", "because", "so", "unless", "since"],
          "Desenlerin kişiden kişiye farklı olması ile aile üyelerinin bazı bantları paylaşması karşıtlıktır: 'although'.",
        ],
        [
          "(27) ----",
          ["since", "unless", "although", "so that", "until"],
          "Tekniğin kimlik belirlemede kullanılabilmesinin nedeni yalnızca tek yumurta ikizlerinin aynı desene sahip olmasıdır: 'since'.",
        ],
        [
          "(28) ----",
          ["where", "which", "who", "whose", "what"],
          "Boşluk 'an immigration case' ifadesini niteleyen ve durum/yer bildiren ilgi zarfıdır: 'where'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "although", "or"],
          "İtiraf edenin masum olduğunun kanıtlanması ve gerçek katilin bulunması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["who", "which", "whose", "whom", "where"],
          "Boşluk 'many people' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'who'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the famine lasted only a few months, ----.",
      [
        "its effects could be seen in the health of the next generation",
        "it took place in the western Netherlands during the war",
        "around twenty thousand people died of hunger",
        "people received fewer than a thousand calories a day",
        "food supplies were cut off by the occupying forces",
      ],
      "'Although' zıtlık ister: kıtlık yalnızca birkaç ay sürse de etkileri bir sonraki kuşağın sağlığında görülebiliyordu.",
    ],
    [
      "If telomeres did not shorten, ----.",
      [
        "cells might never stop dividing",
        "the chromosomes had been damaged",
        "most people will live longer",
        "the cells were very old",
        "DNA is found in the nucleus",
      ],
      "Type 2 koşul cümlesi ana cümlede 'might + yalın fiil' ister: hücreler sonsuza kadar bölünebilirdi.",
    ],
    [
      "Lenski froze samples of the bacteria at regular intervals ----.",
      [
        "so that generations could be compared",
        "because he wanted to stop the experiment",
        "although the bacteria had already died",
        "unless the flasks were contaminated",
        "even if the bacteria did not change",
      ],
      "Lenski'nin örnekleri düzenli aralıklarla dondurmasının amacı sonraki kuşakları öncekilerle karşılaştırabilmektir: 'so that'.",
    ],
    [
      "Since the finger bone was discovered in a Siberian cave in 2008, ----.",
      [
        "few other remains have been found",
        "scientists had studied Neanderthals",
        "most caves would have been explored",
        "the bone will be returned",
        "few people visited Siberia",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have been found'.",
    ],
    [
      "Unless DNA samples are handled very carefully, ----.",
      [
        "they may be contaminated",
        "the criminal would have escaped",
        "most samples had been destroyed",
        "the test will be cheaper",
        "the results were clear",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: başka birinin DNA'sıyla kirlenebilir.",
    ],
    [
      "The results of Miller's experiment were so surprising ----.",
      [
        "that they made headlines around the world",
        "because he used only water and simple gases",
        "although the experiment lasted only a week",
        "unless the equipment was faulty",
        "while his supervisor was Harold Urey",
      ],
      "'so surprising that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Researchers have found that when people are exposed to severe stress over long periods, ----.",
      [
        "their telomeres may shorten more quickly",
        "the cells would have divided faster",
        "most people had lived longer",
        "the DNA will become longer",
        "their families were very small",
      ],
      "'when' ile genel bir bulgu anlatılır: insanlar uzun süre ağır strese maruz kaldığında telomerleri daha hızlı kısalabilir.",
    ],
    [
      "So rare was the ability to use citrate ----.",
      [
        "that only one population evolved it",
        "because the bacteria normally use glucose",
        "although citrate was present in the flasks",
        "while the experiment continued for decades",
        "unless the bacteria were frozen",
      ],
      "Devrik 'So rare was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While Neanderthals are known from thousands of fossils, ----.",
      [
        "Denisovans are known from only a few fragments",
        "both groups lived in Europe and Asia",
        "modern humans first appeared in Africa",
        "fossils are found in caves and river beds",
        "DNA can survive for thousands of years",
      ],
      "'While' iki grubu karşılaştırır: Neandertaller binlerce fosilden bilinirken Denisovalılar yalnızca birkaç parçadan bilinir.",
    ],
    [
      "Once thousands of men had given blood samples, ----.",
      [
        "the killer was identified",
        "the test will be repeated",
        "the suspect would have confessed",
        "DNA is unique to each person",
        "most of them had moved away",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: polis gerçek katili belirleyebildi.",
    ],
    [
      "No sooner had Jeffreys looked at the image ----.",
      [
        "than he realised its importance",
        "when the samples had been taken",
        "that the method will be used",
        "before the DNA had been extracted",
        "so he went home",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "PCR makes it possible to study DNA from extremely small samples.",
      [
        "PCR, son derece küçük örneklerden DNA incelemeyi mümkün kılar.",
        "PCR, DNA incelemek için çok büyük örneklere ihtiyaç duyar.",
        "Son derece küçük örnekler, PCR'nin kullanılmasını engeller.",
        "PCR, DNA örneklerini tamamen yok eder.",
        "PCR yalnızca bitki DNA'sı incelemek için kullanılabilir.",
      ],
      "'makes it possible to study DNA' 'DNA incelemeyi mümkün kılar', 'from extremely small samples' 'son derece küçük örneklerden' demektir.",
    ],
    [
      "Only identical twins share exactly the same DNA pattern.",
      [
        "Yalnızca tek yumurta ikizleri tam olarak aynı DNA desenine sahiptir.",
        "Tüm kardeşler tam olarak aynı DNA desenine sahiptir.",
        "Tek yumurta ikizlerinin DNA desenleri birbirinden tamamen farklıdır.",
        "Hiç kimse başka biriyle DNA deseninin bir bölümünü paylaşmaz.",
        "DNA desenleri yalnızca anne ve babadan gelen genlerle belirlenmez.",
      ],
      "'Only identical twins' 'yalnızca tek yumurta ikizleri', 'share exactly the same DNA pattern' 'tam olarak aynı DNA desenine sahiptir' demektir.",
    ],
    [
      "Experiences in the womb may influence a person's health many decades later.",
      [
        "Rahimdeki deneyimler, bir kişinin sağlığını onlarca yıl sonra etkileyebilir.",
        "Bir kişinin sağlığı, rahimdeki deneyimleri onlarca yıl sonra değiştirir.",
        "Rahimdeki deneyimlerin kişinin sağlığı üzerinde hiçbir etkisi yoktur.",
        "Onlarca yıl sonra yaşanan deneyimler rahimdeki bebeği etkiler.",
        "Kişinin sağlığı yalnızca doğumdan sonraki deneyimlere bağlıdır.",
      ],
      "'Experiences in the womb' 'rahimdeki deneyimler', 'may influence a person's health many decades later' 'bir kişinin sağlığını onlarca yıl sonra etkileyebilir' demektir.",
    ],
    [
      "Telomeres protect the ends of chromosomes, rather like the plastic tips on shoelaces.",
      [
        "Telomerler, kromozomların uçlarını tıpkı ayakkabı bağcıklarının plastik uçları gibi korur.",
        "Telomerler, ayakkabı bağcıklarının plastik uçlarından yapılmıştır.",
        "Kromozomlar, telomerlerin uçlarını plastik bir katmanla korur.",
        "Telomerler, kromozomların ortasında bulunur ve onları birbirine bağlar.",
        "Telomerlerin kromozomları korumakla hiçbir ilgisi yoktur.",
      ],
      "'protect the ends of chromosomes' 'kromozomların uçlarını korur', 'rather like the plastic tips on shoelaces' 'tıpkı ayakkabı bağcıklarının plastik uçları gibi' demektir.",
    ],
    [
      "The bacteria have been evolving in the laboratory for more than seventy thousand generations.",
      [
        "Bakteriler laboratuvarda yetmiş binden fazla kuşaktır evrimleşmektedir.",
        "Bakteriler laboratuvarda yetmiş bin kuşak sonra evrimleşmeyi bıraktı.",
        "Laboratuvar, bakterilerin evrimleşmesini yetmiş bin kuşak boyunca engelledi.",
        "Bakteriler yalnızca birkaç kuşak boyunca laboratuvarda tutuldu.",
        "Yetmiş bin kuşak, bakterilerin tamamen yok olmasına neden oldu.",
      ],
      "'have been evolving … for more than seventy thousand generations' 'yetmiş binden fazla kuşaktır evrimleşmektedir' demektir.",
    ],
    [
      "Many people living in Asia and Oceania today carry small amounts of Denisovan DNA.",
      [
        "Bugün Asya ve Okyanusya'da yaşayan pek çok insan az miktarda Denisovalı DNA'sı taşır.",
        "Bugün Asya ve Okyanusya'da yaşayan hiç kimse Denisovalı DNA'sı taşımaz.",
        "Denisovalılar bugün Asya ve Okyanusya'da yaşamaya devam etmektedir.",
        "Asya ve Okyanusya'daki insanlar Denisovalılardan çok daha az DNA'ya sahiptir.",
        "Denisovalı DNA'sı yalnızca Avrupa'da yaşayan insanlarda bulunur.",
      ],
      "'Many people living in Asia and Oceania today' 'bugün Asya ve Okyanusya'da yaşayan pek çok insan', 'carry small amounts of Denisovan DNA' 'az miktarda Denisovalı DNA'sı taşır' demektir.",
    ],
  ],
  trEn: [
    [
      "PCR, pandemi sırasında milyarlarca test için kullanıldı.",
      [
        "PCR was used for billions of tests during the pandemic.",
        "PCR was abandoned during the pandemic.",
        "The pandemic was caused by PCR tests.",
        "PCR was used only for a few tests during the pandemic.",
        "PCR was invented after the pandemic.",
      ],
      "'pandemi sırasında milyarlarca test için kullanıldı' 'was used for billions of tests during the pandemic' karşılığıdır.",
    ],
    [
      "DNA kanıtı, haksız yere mahkûm edilmiş pek çok kişinin serbest bırakılmasına yardım etti.",
      [
        "DNA evidence has helped to free many people who had been wrongly convicted.",
        "DNA evidence has led to many innocent people being convicted.",
        "People who were wrongly convicted refused to give DNA samples.",
        "DNA evidence cannot be used in courts.",
        "Many criminals have used DNA evidence to escape from prison.",
      ],
      "'haksız yere mahkûm edilmiş pek çok kişinin' 'many people who had been wrongly convicted', 'serbest bırakılmasına yardım etti' 'has helped to free' karşılığıdır.",
    ],
    [
      "Hollanda Açlık Kışı, epigenetik araştırmalar için önemli bir kaynak oldu.",
      [
        "The Dutch Hunger Winter became an important source for epigenetic research.",
        "Epigenetic research caused the Dutch Hunger Winter.",
        "The Dutch Hunger Winter was too short to be studied.",
        "Epigenetic research was banned after the Dutch Hunger Winter.",
        "The Dutch Hunger Winter had nothing to do with genetics.",
      ],
      "'epigenetik araştırmalar için önemli bir kaynak oldu' 'became an important source for epigenetic research' karşılığıdır.",
    ],
    [
      "Miller'ın deneyi, yaşamın kökeni üzerine yeni bir araştırma alanı başlattı.",
      [
        "Miller's experiment launched a new field of research into the origin of life.",
        "Miller's experiment proved that life cannot have a natural origin.",
        "Miller's experiment ended all research into the origin of life.",
        "The origin of life was explained completely before Miller's experiment.",
        "Miller's experiment was about the origin of the planets.",
      ],
      "'yaşamın kökeni üzerine yeni bir araştırma alanı başlattı' 'launched a new field of research into the origin of life' karşılığıdır.",
    ],
    [
      "Deney, evrimin laboratuvarda gerçek zamanlı olarak gözlemlenebileceğini gösterdi.",
      [
        "The experiment showed that evolution can be observed in real time in the laboratory.",
        "The experiment showed that evolution is impossible in the laboratory.",
        "Evolution was used to design the laboratory.",
        "The experiment proved that evolution takes billions of years to observe.",
        "The laboratory prevented evolution from happening.",
      ],
      "'evrimin laboratuvarda gerçek zamanlı olarak gözlemlenebileceğini gösterdi' 'showed that evolution can be observed in real time in the laboratory' karşılığıdır.",
    ],
    [
      "Denisovalılar hakkında bildiklerimizin çoğu DNA'larından gelir.",
      [
        "Most of what we know about Denisovans comes from their DNA.",
        "Most of what we know about Denisovans comes from their tools.",
        "Denisovans left detailed written records.",
        "Nothing is known about the DNA of Denisovans.",
        "The DNA of Denisovans was destroyed long ago.",
      ],
      "'bildiklerimizin çoğu DNA'larından gelir' 'most of what we know … comes from their DNA' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the winter of 1944–45, in the last months before the war ended in Europe, the western part of the Netherlands suffered a severe famine after the occupying German forces blocked food supplies. By early 1945, many people were living on fewer than six hundred calories a day, and around twenty thousand died. The famine ended suddenly in May 1945, when the country was liberated and food arrived. Because the period of hunger was short and clearly defined, and because the Netherlands kept detailed medical records, the 'Hunger Winter' has provided scientists with a unique opportunity to study the long-term effects of malnutrition before birth. Researchers found that people whose mothers had been pregnant during the famine had higher rates of obesity, diabetes, heart disease and some mental illnesses as adults. The timing mattered: those exposed early in pregnancy were more affected in some ways than those exposed later. Further studies found that these people had chemical changes in the way some of their genes were switched on or off, a process known as epigenetics. Some evidence even suggests that effects may be passed on to the following generation, although this remains controversial.",
      questions: [
        [
          "According to the passage, the Hunger Winter is valuable for research because ----.",
          [
            "it was short and well recorded",
            "it lasted for many years",
            "it affected only children",
            "food was available throughout the period",
            "no medical records were kept",
          ],
          "Metne göre açlık dönemi kısa ve açıkça tanımlıydı ve Hollanda ayrıntılı tıbbi kayıtlar tutmuştu.",
        ],
        [
          "It can be understood from the passage that the effects of the famine on unborn children ----.",
          [
            "depended partly on the stage of pregnancy",
            "were the same regardless of timing",
            "disappeared soon after birth",
            "affected only their height",
            "were caused by infections",
          ],
          "Gebeliğin erken döneminde maruz kalanların bazı açılardan daha çok etkilenmesi, etkilerin kısmen gebelik evresine bağlı olduğunu gösterir.",
        ],
        [
          "The writer describes the possibility of effects on the following generation as ----.",
          [
            "still debated",
            "fully proven",
            "completely rejected",
            "irrelevant",
            "the main finding",
          ],
          "Metinde bazı kanıtların etkilerin sonraki kuşağa geçebileceğini düşündürdüğü ama bunun tartışmalı olduğu belirtilir.",
        ],
      ],
    },
    {
      text:
        "At the end of each chromosome is a protective cap called a telomere, made up of a short sequence of DNA repeated thousands of times. Telomeres are often compared to the plastic tips on shoelaces, which stop the laces from fraying. Each time a cell divides, its telomeres become slightly shorter, because the machinery that copies DNA cannot copy the very ends of the chromosomes. When the telomeres become too short, the cell stops dividing or dies. This is thought to be one reason why the body's tissues gradually lose their ability to repair themselves with age. Some cells, however, such as those that produce eggs and sperm, contain an enzyme called telomerase, which rebuilds telomeres and allows the cells to keep dividing. In 2009, three scientists, Elizabeth Blackburn, Carol Greider and Jack Szostak, shared the Nobel Prize for their discoveries about telomeres and telomerase. Research has since suggested that factors such as chronic stress, smoking and lack of exercise may be linked to shorter telomeres. However, increasing telomerase is not a simple solution to ageing: most cancer cells also use the enzyme to divide without limit.",
      questions: [
        [
          "According to the passage, telomeres become shorter because ----.",
          [
            "chromosome ends are not fully copied",
            "telomerase destroys them",
            "cells stop dividing",
            "the body produces too much DNA",
            "they are damaged by exercise",
          ],
          "Metne göre DNA'yı kopyalayan mekanizma kromozomların en uç kısımlarını kopyalayamaz.",
        ],
        [
          "The writer mentions eggs and sperm in order to give an example of cells that ----.",
          [
            "can maintain their telomeres",
            "cannot divide at all",
            "have no chromosomes",
            "are affected by stress",
            "contain cancer",
          ],
          "Yumurta ve sperm üreten hücreler, telomerleri yeniden oluşturan telomeraz enzimini içeren hücrelere örnek olarak verilir.",
        ],
        [
          "It can be inferred from the passage that increasing telomerase in the body ----.",
          [
            "might carry the risk of encouraging cancer",
            "would certainly stop ageing",
            "has no effect on cells",
            "is recommended by all doctors",
            "makes telomeres shorter",
          ],
          "Kanser hücrelerinin çoğunun da sınırsız bölünmek için bu enzimi kullanması, telomerazı artırmanın kanseri teşvik etme riski taşıyabileceğini gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1953, Stanley Miller, a graduate student at the University of Chicago working under the chemist Harold Urey, carried out an experiment designed to test how life might have begun. Many scientists then thought that the young planet's atmosphere contained gases such as methane, ammonia and hydrogen, together with water vapour, and very little oxygen. Miller built a closed system of glass flasks and tubes containing these gases and a flask of boiling water to represent the ocean. He passed electric sparks through the gases to imitate lightning and allowed the mixture to cool and condense. After about a week, the water had turned brown, and when Miller analysed it, he found that it contained several amino acids, the building blocks of proteins. The results attracted enormous attention, as they suggested that the chemical ingredients of life could form naturally. Scientists now believe that the early atmosphere was probably different from the one Miller assumed. Nevertheless, later experiments using other mixtures of gases have also produced amino acids, and in 2008, a re-examination of Miller's original samples, which had been stored for decades, revealed many more compounds than he had been able to detect.",
      questions: [
        [
          "According to the passage, the boiling water in Miller's experiment represented ----.",
          [
            "the ocean",
            "lightning",
            "the atmosphere",
            "the Sun",
            "a volcano",
          ],
          "Metne göre Miller okyanusu temsil etmek için bir şişe kaynar su kullandı.",
        ],
        [
          "It can be understood from the passage that Miller's results were important because they suggested that ----.",
          [
            "the building blocks of life could arise from simple chemicals",
            "life began in the atmosphere",
            "amino acids cannot form naturally",
            "oxygen was necessary for life",
            "lightning is harmful to living things",
          ],
          "Sonuçların yaşamın kimyasal bileşenlerinin doğal olarak oluşabileceğini düşündürdüğü belirtilir.",
        ],
        [
          "The writer mentions the re-examination in 2008 in order to show that ----.",
          [
            "the original experiment had produced more than Miller knew",
            "Miller's samples had been destroyed",
            "the experiment had been a failure",
            "the early atmosphere contained oxygen",
            "amino acids decay quickly",
          ],
          "2008'deki yeniden incelemenin Miller'ın saptayabildiğinden çok daha fazla bileşik ortaya çıkarması, ilk deneyin Miller'ın bildiğinden fazlasını ürettiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1988, the American biologist Richard Lenski began an experiment to watch evolution happen. He took a single strain of the bacterium Escherichia coli and used it to start twelve identical populations, each in a small flask containing a liquid with a limited supply of glucose as food. Every day since then, a small amount of each population has been transferred to a fresh flask, allowing the bacteria to grow for about six or seven generations a day. Every five hundred generations, samples have been frozen, creating a 'fossil record' that can be revived to compare ancestors with their descendants. Over the years, all twelve populations have become better at growing in their environment, and many have changed in similar ways. One population, however, made a remarkable change after about thirty-one thousand generations: it evolved the ability to feed on citrate, a substance present in the liquid that E. coli normally cannot use. By reviving frozen samples, researchers were able to show that this ability depended on earlier, apparently unimportant mutations. The experiment, which has now passed seventy-five thousand generations, has provided valuable evidence about the role of chance and history in evolution.",
      questions: [
        [
          "According to the passage, the frozen samples are useful because ----.",
          [
            "they allow researchers to compare different generations",
            "they provide food for the bacteria",
            "they stop the bacteria from evolving",
            "they contain glucose",
            "they are used to start new experiments every day",
          ],
          "Metne göre dondurulan örnekler atalarla torunları karşılaştırmak için yeniden canlandırılabilen bir 'fosil kaydı' oluşturur.",
        ],
        [
          "The ability to use citrate was remarkable because ----.",
          [
            "E. coli normally cannot feed on it",
            "it appeared in all twelve populations",
            "it happened in the first generation",
            "citrate was added later to the flasks",
            "it killed the bacteria",
          ],
          "Metinde sitratın E. coli'nin normalde kullanamadığı bir madde olduğu belirtilir.",
        ],
        [
          "It can be inferred from the passage that the evolution of citrate use ----.",
          [
            "was made possible by previous genetic changes",
            "happened without any earlier mutations",
            "was caused by the researchers",
            "occurred in a single generation",
            "has been observed in all bacteria",
          ],
          "Bu yeteneğin daha önceki, önemsiz görünen mutasyonlara bağlı olması, önceki genetik değişikliklerle mümkün olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "In 2008, archaeologists working in Denisova Cave in the Altai Mountains of Siberia found a tiny fragment of a finger bone, belonging to a young girl who had lived there more than fifty thousand years ago. The bone was too small to reveal much from its shape, but a team led by the Swedish geneticist Svante Pääbo, working in Germany, managed to extract and sequence its DNA. To their surprise, it did not belong to modern humans or to Neanderthals, but to a previously unknown group of ancient humans, who became known as Denisovans. Since then, only a few other remains have been found, including some teeth and part of a jaw from Tibet, so scientists still know very little about what Denisovans looked like. Their DNA, however, has revealed a great deal. It shows that they were closely related to Neanderthals and that they interbred with the ancestors of modern humans. Today, people in parts of Asia and especially in Papua New Guinea and among Aboriginal Australians carry small amounts of Denisovan DNA. One Denisovan gene appears to help Tibetans survive at high altitude, where oxygen levels are low. Pääbo received the Nobel Prize in 2022 for his work on ancient genomes.",
      questions: [
        [
          "According to the passage, the finger bone was important because ----.",
          [
            "its DNA revealed a previously unknown group of humans",
            "its shape showed what Denisovans looked like",
            "it belonged to a Neanderthal",
            "it was the oldest human bone ever found",
            "it was found in Tibet",
          ],
          "Metne göre kemiğin DNA'sı modern insanlara ya da Neandertallere değil, daha önce bilinmeyen bir insan grubuna aitti.",
        ],
        [
          "It can be understood from the passage that knowledge about Denisovans ----.",
          [
            "comes mainly from genetic evidence rather than fossils",
            "is based on thousands of skeletons",
            "comes from their written records",
            "is limited to their tools",
            "was available long before 2008",
          ],
          "Yalnızca birkaç kalıntı bulunması ama DNA'larının çok şey ortaya koyması, bilgilerin esas olarak genetik kanıtlardan geldiğini gösterir.",
        ],
        [
          "The writer mentions Tibetans in order to show that ----.",
          [
            "Denisovan genes can still be useful to modern humans",
            "Denisovans lived only in Tibet",
            "Tibetans are descended entirely from Denisovans",
            "oxygen levels are high in Tibet",
            "Neanderthals lived at high altitude",
          ],
          "Bir Denisovalı geninin Tibetlilerin yüksek irtifada yaşamasına yardım etmesi, bu genlerin bugün de modern insanlara yararlı olabileceğini gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Mitochondria are tiny structures inside cells that produce most of the energy the cell needs. ---- This supports the idea that they were once free-living bacteria that were taken in by larger cells.",
      [
        "Unusually, they contain their own DNA, which is separate from the DNA in the nucleus.",
        "Muscle cells contain large numbers of mitochondria because they need a lot of energy.",
        "Energy is stored in a molecule called ATP.",
        "Cells were first seen through microscopes in the seventeenth century.",
        "Some bacteria cause serious diseases in humans.",
      ],
      "Boşluktan sonra 'This' ile bir zamanlar serbest yaşayan bakteriler oldukları fikrinin desteklendiği söylenir; boşluğa çekirdekteki DNA'dan ayrı kendi DNA'larını içerdiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "Some bacteria can pass genes directly to other bacteria, even to those of different species. ---- This is one reason why resistance to antibiotics can spread so quickly.",
      [
        "Some of these genes protect against drugs.",
        "Bacteria reproduce by dividing in two.",
        "Many bacteria live in the human gut.",
        "Penicillin was found by chance in a London laboratory.",
        "Some bacteria can survive in boiling water.",
      ],
      "Boşluktan sonra 'This' ile antibiyotik direncinin hızla yayılmasının nedeni açıklanır; boşluğa aktarılan genlerin ilaçlara karşı koruyan genleri de içerebileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "Every cell in the human body contains about two metres of DNA. ---- It is wrapped tightly around proteins, forming compact structures called chromosomes.",
      [
        "It must be packed very tightly to fit.",
        "DNA is made up of four chemical bases.",
        "The human body contains trillions of cells.",
        "Some plants have much more DNA than humans.",
        "The structure of DNA was discovered in 1953.",
      ],
      "Boşluktan sonra DNA'nın proteinlerin etrafına sıkıca sarıldığı söylenir; boşluğa küçük çekirdeğe sığmak için son derece verimli paketlenmesi gerektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Some people have eyes of two different colours, a condition known as heterochromia. ---- In rare cases, however, it can be a sign of injury or disease.",
      [
        "It is usually harmless and is often present from birth.",
        "Eye colour is determined by a pigment called melanin.",
        "Many cats and dogs also have eyes of different colours.",
        "Brown is the most common eye colour in the world.",
        "Contact lenses can be used to change the colour of the eyes.",
      ],
      "Boşluktan sonra 'however' ile nadiren bir yaralanma ya da hastalık belirtisi olabileceği söylenir; boşluğa bununla karşıtlık oluşturan, durumun genellikle zararsız ve doğuştan olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Bacteria that live in hot springs can survive temperatures close to boiling. ---- These have proved very useful in industry and in laboratory techniques.",
      [
        "They produce enzymes that remain stable at high temperatures.",
        "Hot springs are found in volcanic areas such as Iceland.",
        "Many people bathe in hot springs for their health.",
        "Water boils at a hundred degrees at sea level.",
        "Some bacteria can only survive in cold places.",
      ],
      "Boşluktan sonra 'These' (bunlar) endüstride ve laboratuvar tekniklerinde yararlı olmuştur; boşluğa bu bakterilerin yüksek sıcaklıkta kararlı kalan enzimler ürettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Most of the human genome does not contain instructions for making proteins. ---- Scientists now know, however, that much of it plays a role in controlling when and where genes are active.",
      [
        "For many years, this part was dismissed as 'junk DNA'.",
        "The human genome was first sequenced in the early 2000s.",
        "Proteins are needed to build and repair the body.",
        "Some genes are passed down from the mother only.",
        "DNA can be extracted from saliva or blood.",
      ],
      "Boşluktan sonra 'however' ile bunun büyük kısmının genlerin denetiminde rol oynadığı söylenir; boşluğa bu kısmın yıllarca 'çöp DNA' olarak görüldüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Ancient DNA can be recovered from bones, teeth and even soil in caves.",
        "However, it breaks down over time, especially in warm conditions.",
        "Many museums display skeletons of dinosaurs.",
        "For this reason, the oldest DNA has been found in cold places such as Greenland and Siberia.",
        "Scientists must work in very clean laboratories to avoid contaminating samples with their own DNA.",
      ],
      odd: 2,
      why: "Parça antik DNA'nın elde edilmesini anlatır. Pek çok müzenin dinozor iskeletleri sergilediğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tardigrades are tiny animals less than a millimetre long.",
        "Some museums have large collections of insects.",
        "They can survive being dried out for years.",
        "When water returns, they rehydrate and become active again.",
        "Scientists are studying the proteins that protect their cells.",
      ],
      odd: 1,
      why: "Parça su ayılarının (tardigrad) dayanıklılığını anlatır. Bazı müzelerin büyük böcek koleksiyonları olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Zebrafish are small tropical fish widely used in medical research.",
        "Their embryos are transparent, so scientists can watch organs develop.",
        "Aquarium shops sell many colourful species of fish.",
        "Zebrafish can also regrow damaged heart tissue.",
        "Researchers hope this ability may lead to new treatments for heart disease.",
      ],
      odd: 2,
      why: "Parça zebra balığının tıbbi araştırmalardaki kullanımını anlatır. Akvaryum dükkânlarının pek çok renkli balık türü sattığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Viruses cannot reproduce on their own.",
        "Instead, they enter living cells and use them to make copies of themselves.",
        "Many people catch colds in winter.",
        "Some viruses insert their genetic material into the DNA of the host.",
        "Traces of ancient viruses make up several per cent of the human genome.",
      ],
      odd: 2,
      why: "Parça virüslerin nasıl çoğaldığını anlatır. Pek çok kişinin kışın soğuk algınlığına yakalandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some animals, such as certain lizards, can reproduce without males.",
        "Their eggs develop into offspring without being fertilised.",
        "Pet shops sell many types of lizards and snakes.",
        "The young are usually genetically almost identical to their mother.",
        "This allows populations to grow quickly when conditions are good.",
      ],
      odd: 2,
      why: "Parça bazı hayvanların erkek olmadan üremesini anlatır. Evcil hayvan dükkânlarının pek çok kertenkele ve yılan sattığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Seedless watermelons are produced by crossing two different types of plant.",
        "The resulting fruit has an odd number of chromosome sets.",
        "As a result, its seeds cannot develop properly and remain small and soft.",
        "Watermelons are especially popular in hot weather.",
        "Farmers must buy new seeds each year to grow the crop.",
      ],
      odd: 3,
      why: "Parça çekirdeksiz karpuzun nasıl üretildiğini anlatır. Karpuzun sıcak havalarda özellikle sevildiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
