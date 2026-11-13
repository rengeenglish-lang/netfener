import type { YokdilDeneme } from "./types";

export const FEN_34: YokdilDeneme = {
  no: 34,
  field: "fen",
  vocab: [
    [
      "The bacteria were grown in a medium containing a ---- form of nitrogen, which made their DNA denser.",
      ["heavy", "liquid", "toxic", "colourful", "frozen"],
      "Bakterilerin DNA'larını daha yoğun yapan 'ağır' (heavy) bir azot formu içeren ortamda üretildiği anlatılır.",
    ],
    [
      "The kitchen blender was used to ---- the empty virus coats from the surface of the bacteria.",
      ["detach", "attach", "repair", "paint", "feed"],
      "Mutfak blenderının boş virüs kılıflarını bakterilerin yüzeyinden 'ayırmak' (detach) için kullanıldığı anlatılır.",
    ],
    [
      "During the drought, birds with larger beaks were better able to crack the ---- seeds that remained.",
      ["tough", "tiny", "sweet", "fresh", "rotten"],
      "Kuraklık sırasında daha büyük gagalı kuşların geriye kalan 'sert' (tough) tohumları kırmakta daha başarılı olduğu anlatılır.",
    ],
    [
      "The results showed that the mutations arose ---- rather than in response to the virus.",
      ["randomly", "deliberately", "slowly", "rarely", "visibly"],
      "Sonuçların mutasyonların virüse tepki olarak değil 'rastgele' (randomly) ortaya çıktığını gösterdiği anlatılır.",
    ],
    [
      "When lactose is present, the repressor is removed and the genes are switched ----.",
      ["on", "off", "out", "away", "down"],
      "Laktoz bulunduğunda baskılayıcının uzaklaştırıldığı ve genlerin 'açıldığı' (switched on) anlatılır.",
    ],
    [
      "Although he cut the tails off generation after generation of mice, none of their young were ---- without tails.",
      ["born", "fed", "kept", "seen", "sold"],
      "Kuşaklar boyunca farelerin kuyruklarını kesmesine rağmen yavrularından hiçbirinin kuyruksuz 'doğmadığı' (born) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Meselson and Stahl ---- whether DNA copies itself in the way Watson and Crick had predicted.",
      ["wanted to know", "have wanted to know", "want to know", "will want to know", "were wanted to know"],
      "Geçmişteki bir araştırma amacı: 'wanted to know'.",
    ],
    [
      "By the time the Grants began their study, few scientists ---- evolution happening in the wild.",
      ["had observed", "observe", "will observe", "are observing", "have been observed"],
      "Geçmişteki bir andan önce tamamlanmış durum: 'had observed'.",
    ],
    [
      "If the mutations had been caused by the virus, the numbers of resistant bacteria ---- similar in every culture.",
      ["would have been", "will be", "are", "had been", "would be being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would have been'.",
    ],
    [
      "The mould ---- to X-rays in order to create mutant strains.",
      ["was exposed", "exposed", "has exposed", "is exposing", "will expose"],
      "Küf X ışınlarına maruz bırakılmıştır; edilgen geçmiş zaman: 'was exposed'.",
    ],
    [
      "---- the blender separated the virus coats, most of the radioactive phosphorus remained inside the bacteria.",
      ["Although", "Because", "Unless", "So that", "Once"],
      "Kılıfların ayrılması ile fosforun bakterilerin içinde kalması karşıtlık bildirir: 'Although'.",
    ],
    [
      "The scientists studied a small island ---- every finch could be caught and measured.",
      ["where", "which", "whose", "what", "who"],
      "'a small island' yer bildirdiği için: 'where'.",
    ],
    [
      "The bacteria produced the enzyme only when lactose was present, ---- saved them energy.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more varied the results between cultures, ---- likely it was that mutations were random.",
      ["the more", "the most", "more than", "much more", "so more"],
      "'The more ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Not until 1952 ---- most scientists accept that genes are made of DNA rather than protein.",
      ["did", "had", "were", "have", "do"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Each mutant strain could grow only ---- it was given one particular nutrient.",
      ["if", "unless", "although", "whereas", "so that"],
      "Belirli bir besin verilirse büyüyebildiği anlatılır; koşul bağlacı: 'if'.",
    ],
    [
      "In any sample of DNA, the amount of adenine is equal ---- the amount of thymine.",
      ["to", "with", "as", "from", "than"],
      "Miktarların birbirine eşit olduğu anlatılır; 'equal to' kalıbı: 'to'.",
    ],
    [
      "Weismann cut the tails off the mice ---- see whether the change would be inherited.",
      ["to", "for", "so", "by", "as"],
      "Kuyrukları kesmenin amacı belirtilir; amaç bildiren mastar: 'to see'.",
    ],
    [
      "The idea seemed so simple ---- many biologists wondered why no one had proposed it before.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The theory requires that the population ---- large and that mating be random.",
      ["be", "is being", "was been", "to be", "being"],
      "'require that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "When James Watson and Francis Crick proposed the double helix structure of DNA in 1953, they suggested that the molecule copies itself by unzipping into two strands, each of {1} serves as a template for a new partner. In this 'semi-conservative' model, every new DNA molecule would contain one old strand and one new strand. Other models were possible, however, and proof was needed. In 1957, two young scientists at the California Institute of Technology, Matthew Meselson and Franklin Stahl, designed an elegant test. They grew bacteria for many generations in a medium containing a heavy form of nitrogen, {2} was built into their DNA, and then transferred them to a medium containing ordinary, lighter nitrogen. After each generation, they extracted DNA and spun it at very high speed in a solution {3} caused molecules to settle at different levels according to their density. After one generation, all the DNA formed a single band halfway between heavy and light. After two generations, there were two bands, one intermediate and one light, exactly {4} the semi-conservative model predicted. The experiment has often been described as the most beautiful {5} the history of biology.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "whose", "what", "where"],
          "'each of which' yapısı: 'which'.",
        ],
        [
          "(22) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra azot formunu niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(23) ----",
          ["that", "what", "who", "whose", "where"],
          "'a solution' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(24) ----",
          ["as", "than", "like", "so", "such"],
          "'exactly as the model predicted' kalıbı: 'as'.",
        ],
        [
          "(25) ----",
          ["in", "at", "on", "of", "for"],
          "'the most beautiful in the history' kalıbı: 'in'.",
        ],
      ],
    },
    {
      text:
        "By the early 1950s, most biologists knew that genes were located on chromosomes, which are made of DNA and protein, but many still believed that protein, with its greater chemical variety, was the more likely carrier of genetic information. In 1952, Alfred Hershey and his assistant Martha Chase at the Cold Spring Harbor Laboratory in New York carried out an experiment {1} helped to settle the question. They worked with bacteriophages, viruses that infect bacteria and consist simply of a protein coat surrounding a core of DNA. In one batch, they labelled the protein with radioactive sulphur, {2} in another they labelled the DNA with radioactive phosphorus. After allowing the viruses to attach to bacteria and inject their genetic material, they used an ordinary kitchen blender to shake the empty coats off the outside of the cells. They then separated the bacteria from the liquid. Most of the radioactive sulphur remained in the liquid, {3} most of the phosphorus was found inside the bacteria, where new viruses were being produced. This showed that it was DNA, not protein, {4} entered the cells and directed the production of new viruses. Hershey shared the Nobel Prize in 1969, {5} Chase's contribution received little recognition for many years.",
      blanks: [
        [
          "(26) ----",
          ["that", "what", "who", "whose", "where"],
          "'an experiment' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(27) ----",
          ["while", "unless", "because", "until", "so that"],
          "İki farklı işaretleme karşılaştırılır: 'while'.",
        ],
        [
          "(28) ----",
          ["whereas", "because", "so that", "unless", "since"],
          "Kükürt ile fosforun farklı yerlerde bulunması karşılaştırılır: 'whereas'.",
        ],
        [
          "(29) ----",
          ["that", "what", "which", "whose", "where"],
          "'It was ... that ...' vurgu yapısı: 'that'.",
        ],
        [
          "(30) ----",
          ["but", "so", "because", "or", "unless"],
          "Hershey'nin ödül alması ile Chase'in katkısının tanınmaması zıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Watson and Crick suggested how DNA might copy itself, ----.",
      [
        "experimental proof was still needed",
        "the double helix was described in 1953",
        "DNA contains four kinds of bases",
        "Crick worked in Cambridge",
        "bacteria divide very quickly",
      ],
      "'Although' zıtlık ister: Watson ve Crick DNA'nın kendini nasıl kopyalayabileceğini önerse de deneysel kanıta hâlâ ihtiyaç vardı.",
    ],
    [
      "Hershey and Chase labelled the protein and the DNA with different substances ----.",
      [
        "to track each one",
        "although viruses are very small",
        "unless the bacteria had been killed",
        "because the blender was very old",
        "while the laboratory was in New York",
      ],
      "'so that' amaç bildirir: her birini ayrı ayrı izleyebilmek için protein ve DNA'yı farklı maddelerle işaretlediler.",
    ],
    [
      "If a population of birds experiences a severe drought, ----.",
      [
        "the best-suited birds may survive",
        "the island is part of the Galápagos",
        "finches eat many kinds of seeds",
        "the study began in the 1970s",
        "birds build nests in trees",
      ],
      "Birinci tip koşul: bir kuş popülasyonu şiddetli kuraklık yaşarsa yeni koşullara en uygun olanların hayatta kalma olasılığı daha yüksektir.",
    ],
    [
      "----, Luria realised how he could test whether mutations were random.",
      [
        "Watching a colleague play a slot machine",
        "Although he worked at a university",
        "Unless the bacteria had been infected",
        "Because viruses attack bacteria",
        "Since he had moved to America",
      ],
      "Bir meslektaşının kumar makinesinde oynamasını izlerken Luria mutasyonların rastgele olup olmadığını nasıl test edebileceğini fark etti.",
    ],
    [
      "Beadle and Tatum chose to work with bread mould ----.",
      [
        "because it grows quickly and is easy to study",
        "although bread is eaten in many countries",
        "unless X-rays had damaged it",
        "so that they won the Nobel Prize",
        "while Stanford is in California",
      ],
      "Beadle ve Tatum, ekmek küfü hızlı büyüdüğü ve incelemesi kolay olduğu için onunla çalışmayı seçti.",
    ],
    [
      "The bacteria make enzymes to digest lactose only when they need them, ----.",
      [
        "which prevents them from wasting energy",
        "because the research was done in Paris",
        "although lactose is found in milk",
        "unless glucose is present",
        "so that Jacob and Monod were famous",
      ],
      "'which' ile bakterilerin enzimleri yalnızca ihtiyaç duyduklarında üretmesinin enerji israfını önlediği eklenir.",
    ],
    [
      "Not only did Weismann's mice keep their tails, ----.",
      [
        "but their young had tails too",
        "and the experiment lasted several years",
        "since Weismann was a German biologist",
        "so mice breed very quickly",
        "unless the tails were very short",
      ],
      "'Not only ... but also' yapısı tamamlanır: Weismann'ın fareleri kuyruklarını korumakla kalmadı, yavruları da normal kuyrukla doğdu.",
    ],
    [
      "Since the amounts of the bases followed a simple rule, ----.",
      [
        "they gave a clue to DNA",
        "DNA is found in every living cell",
        "Chargaff was born in Austria",
        "the bases have long chemical names",
        "many scientists studied proteins",
      ],
      "'Since' neden bildirir: bazların miktarları basit bir kural izlediği için DNA'nın yapısına dair önemli bir ipucu sağladılar.",
    ],
    [
      "Kimura argued that many genetic changes spread through populations ----.",
      [
        "by chance rather than because they are useful",
        "although he was born in Japan",
        "unless the population is very small",
        "so that natural selection is unimportant",
        "while proteins are made of amino acids",
      ],
      "Kimura, pek çok genetik değişikliğin yararlı oldukları için değil, şans eseri popülasyonlarda yayıldığını savundu.",
    ],
    [
      "Although an onion has a much larger genome than a human, ----.",
      [
        "it is a far simpler organism",
        "onions are grown in many countries",
        "DNA is made of four bases",
        "humans eat onions",
        "genes are found on chromosomes",
      ],
      "'Although' zıtlık ister: soğanın genomu insanınkinden çok daha büyük olsa da çok daha basit bir organizmadır.",
    ],
    [
      "Unless scientists design careful controls, ----.",
      [
        "they may reach wrong conclusions",
        "many experiments use bacteria",
        "laboratories are expensive to run",
        "results are published in journals",
        "microscopes are used in biology",
      ],
      "'Unless' olumsuz koşul: bilim insanları dikkatli kontroller tasarlamazsa deneylerinden yanlış sonuçlar çıkarabilir.",
    ],
  ],
  enTr: [
    [
      "Each new DNA molecule contained one old strand and one newly made strand.",
      [
        "Her yeni DNA molekülü bir eski iplik ve bir yeni yapılmış iplik içeriyordu.",
        "Her yeni DNA molekülü tamamen yeni ipliklerden oluşuyordu.",
        "Eski DNA iplikleri, yeni moleküllerin oluşmasını engelliyordu.",
        "Yeni DNA molekülleri yalnızca eski ipliklerden oluşuyordu.",
        "Her yeni DNA molekülü, biri eski olmak üzere tamamen yeni yapılmış iki iplikten oluşuyordu.",
      ],
      "'Each new DNA molecule' 'her yeni DNA molekülü', 'contained one old strand and one newly made strand' 'bir eski iplik ve bir yeni yapılmış iplik içeriyordu' karşılığıdır.",
    ],
    [
      "The experiment showed that genetic information is carried by DNA rather than protein.",
      [
        "Deney, genetik bilginin protein yerine DNA tarafından taşındığını gösterdi.",
        "Deney, proteinin DNA'dan daha fazla genetik bilgi taşıdığını gösterdi.",
        "Genetik bilgi, deneyden sonra proteine aktarıldı.",
        "Deney, DNA'nın genetik bilgiyle hiçbir ilgisi olmadığını kanıtladı.",
        "DNA ve protein, genetik bilgiyi eşit olarak taşır.",
      ],
      "'is carried by DNA rather than protein' 'protein yerine DNA tarafından taşındığını' karşılığıdır.",
    ],
    [
      "After just one generation, the finches' beaks were larger on average.",
      [
        "Tek bir kuşak içinde ispinozların ortalama gaga büyüklüğü artmıştı.",
        "İspinozların gagaları kuşaklar boyunca küçüldü.",
        "Tek bir kuşakta ispinozların sayısı iki katına çıktı.",
        "Gaga büyüklüğü, ispinozların kuşaklar boyunca değişmedi.",
        "Tek bir kuşak içinde ispinozların ortalama gaga büyüklüğü belirgin biçimde küçülmüştü.",
      ],
      "'After just one generation' 'tek bir kuşak içinde', 'the finches' beaks were larger on average' 'ortalama gaga büyüklüğü artmıştı' karşılığıdır.",
    ],
    [
      "Each mutation blocked a single step in the chain of chemical reactions.",
      [
        "Her mutasyon, kimyasal tepkimeler zincirindeki tek bir adımı engelliyordu.",
        "Her mutasyon, kimyasal tepkimeleri hızlandırıyordu.",
        "Kimyasal tepkimeler, mutasyonların oluşmasını engelliyordu.",
        "Tek bir mutasyon, tüm tepkimeleri durduruyordu.",
        "Her mutasyon, kimyasal tepkimeler zincirine tek bir yeni adım ekleyerek tepkimeleri hızlandırıyordu.",
      ],
      "'Each mutation blocked a single step' 'her mutasyon tek bir adımı engelliyordu', 'in the chain of chemical reactions' 'kimyasal tepkimeler zincirindeki' karşılığıdır.",
    ],
    [
      "Genes can be switched on and off in response to changes in the cell's surroundings.",
      [
        "Genler, hücrenin çevresindeki değişikliklere yanıt olarak açılıp kapanabilir.",
        "Genler, hücrenin çevresini değiştirmek için açılıp kapanır.",
        "Hücrenin çevresi, genlerden hiçbir şekilde etkilenmez.",
        "Genler bir kez açıldıktan sonra asla kapanmaz.",
        "Genler, hücrenin çevresindeki değişikliklerden bağımsız olarak sürekli açık kalır ve asla kapanmaz.",
      ],
      "'can be switched on and off' 'açılıp kapanabilir', 'in response to changes in the cell's surroundings' 'hücrenin çevresindeki değişikliklere yanıt olarak' karşılığıdır.",
    ],
    [
      "Changes to the body during an animal's life are not passed on to its offspring.",
      [
        "Bir hayvanın yaşamı boyunca bedeninde meydana gelen değişiklikler yavrularına aktarılmaz.",
        "Hayvanlar, yaşamları boyunca kazandıkları özellikleri yavrularına aktarır.",
        "Yavrular, ebeveynlerinin bedenini değiştirebilir.",
        "Bir hayvanın yaşamı, yavrularının sayısına bağlıdır.",
        "Bir hayvanın yaşamı boyunca bedeninde meydana gelen değişiklikler genellikle yavrularına aktarılır.",
      ],
      "'Changes to the body during an animal's life' 'bir hayvanın yaşamı boyunca bedeninde meydana gelen değişiklikler', 'are not passed on to its offspring' 'yavrularına aktarılmaz' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "DNA, molekülleri yoğunluklarına göre farklı seviyelerde toplayan bir çözeltide döndürüldü.",
      [
        "The DNA was spun in a solution that collected molecules at different levels according to their density.",
        "The DNA was dissolved in a solution to make it denser.",
        "The solution separated the DNA into strands of different colours.",
        "All the molecules collected at the same level regardless of their density.",
        "The DNA was spun in a solution that made all the molecules collect at the same level.",
      ],
      "'yoğunluklarına göre farklı seviyelerde toplayan bir çözeltide' 'in a solution that collected molecules at different levels according to their density', 'döndürüldü' 'was spun' karşılığıdır.",
    ],
    [
      "Virüs, bakteriye yalnızca genetik malzemesini enjekte eder ve boş kılıfını dışarıda bırakır.",
      [
        "The virus injects only its genetic material into the bacterium and leaves its empty coat outside.",
        "The virus enters the bacterium completely, including its protein coat.",
        "The bacterium injects its genetic material into the virus.",
        "The empty coat of the virus contains all of its DNA.",
        "The virus enters the bacterium completely and leaves none of its parts outside the cell.",
      ],
      "'yalnızca genetik malzemesini enjekte eder' 'injects only its genetic material', 'boş kılıfını dışarıda bırakır' 'leaves its empty coat outside' karşılığıdır.",
    ],
    [
      "Kuraklıktan sonra adadaki ispinozların büyük çoğunluğu öldü.",
      [
        "After the drought, the great majority of the finches on the island died.",
        "Most of the finches left the island before the drought.",
        "The drought had little effect on the finches.",
        "The number of finches increased after the drought.",
        "After the drought, most of the finches on the island survived because they had large beaks.",
      ],
      "'Kuraklıktan sonra' 'after the drought', 'ispinozların büyük çoğunluğu öldü' 'the great majority of the finches died' karşılığıdır.",
    ],
    [
      "Dirençli bakterilerin sayısı, kültürden kültüre büyük farklılıklar gösterdi.",
      [
        "The number of resistant bacteria varied greatly from one culture to another.",
        "Every culture contained the same number of resistant bacteria.",
        "Resistant bacteria were found in only one culture.",
        "The cultures became resistant to each other.",
        "The number of resistant bacteria was almost exactly the same in each of the cultures.",
      ],
      "'Dirençli bakterilerin sayısı' 'the number of resistant bacteria', 'kültürden kültüre büyük farklılıklar gösterdi' 'varied greatly from one culture to another' karşılığıdır.",
    ],
    [
      "Her türün DNA'sında adenin miktarı timin miktarına eşittir.",
      [
        "In the DNA of every species, the amount of adenine is equal to the amount of thymine.",
        "Adenine and thymine are found only in some species.",
        "The amount of adenine is twice that of thymine in human DNA.",
        "Every species has a different number of bases.",
        "In the DNA of most species, the amount of adenine is much greater than that of thymine.",
      ],
      "'Her türün DNA'sında' 'in the DNA of every species', 'adenin miktarı timin miktarına eşittir' 'the amount of adenine is equal to the amount of thymine' karşılığıdır.",
    ],
    [
      "Bakteriler, genleri yalnızca ebeveynlerinden değil, başka türlerden de alabilir.",
      [
        "Bacteria can acquire genes not only from their parents but also from other species.",
        "Bacteria inherit genes only from their parents.",
        "Other species cannot receive genes from bacteria.",
        "Bacteria lose their genes when they meet other species.",
        "Bacteria can receive genes from their parents, but never from members of other species.",
      ],
      "'yalnızca ebeveynlerinden değil, başka türlerden de' 'not only from their parents but also from other species', 'genleri alabilir' 'can acquire genes' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Since 1973, the biologists Peter and Rosemary Grant have spent part of almost every year on Daphne Major, a tiny, barren island in the Galápagos. Their aim was to study evolution as it happened, by catching, measuring and marking virtually every finch on the island and recording which birds survived and bred. In 1977, a severe drought struck. Plants produced few seeds, and the small, soft seeds that the medium ground finch usually preferred quickly ran out. What remained were mainly large, hard seeds that only birds with deep, strong beaks could crack. Over the following months, the finch population fell by about eighty-five per cent. The survivors were, on average, noticeably larger and had bigger beaks than the birds that died. Because beak size is largely inherited, the next generation also had beaks that were measurably larger than those of the generation before the drought. A few years later, an unusually wet period produced an abundance of small seeds, and smaller-beaked birds then had the advantage. The Grants' work showed that natural selection can act quickly and can change direction when conditions change, and it provided some of the clearest evidence of evolution in action.",
      questions: [
        [
          "According to the passage, the finches with larger beaks survived the drought because they ----.",
          [
            "could open the hard seeds that remained",
            "were able to fly to other islands",
            "needed less food than smaller birds",
            "ate insects instead of seeds",
            "found water more easily",
          ],
          "Metne göre geriye kalan büyük ve sert tohumları ancak güçlü gagalı kuşlar kırabiliyordu.",
        ],
        [
          "The next generation had larger beaks mainly because ----.",
          [
            "beak size is largely passed from parents to offspring",
            "the young birds ate more food",
            "the Grants selected the largest birds",
            "the drought continued for many years",
            "the plants on the island changed completely",
          ],
          "Gaga büyüklüğü büyük ölçüde kalıtsal olduğu için sonraki kuşak da daha büyük gagalıydı.",
        ],
        [
          "It can be inferred from the passage that the wet period ----.",
          [
            "reversed the advantage enjoyed by large-beaked birds",
            "killed most of the finches",
            "had no effect on beak size",
            "caused the Grants to leave the island",
            "reduced the number of small seeds on the island",
          ],
          "Islak dönemde küçük tohumlar bollaştı ve küçük gagalı kuşlar avantaj kazandı; yön tersine döndü.",
        ],
      ],
    },
    {
      text:
        "In the early 1940s, scientists knew that when bacteria are attacked by viruses, a few survivors usually appear that are resistant to infection. But there were two possible explanations. Either the virus somehow caused some bacteria to become resistant, or resistant mutants arose by chance before the virus was present, and the virus simply killed all the others. The Italian microbiologist Salvador Luria found a way to decide between these ideas after watching a colleague play a slot machine at a university dance in 1942. He noticed that the machine paid out small amounts frequently but occasionally produced a large jackpot. Luria reasoned that if mutations occurred randomly as bacteria multiplied, a mutation that happened early in the growth of a culture would produce a large 'jackpot' of resistant descendants, while one that happened late would produce only a few. The number of resistant bacteria would therefore vary greatly from one culture to another. If the virus caused resistance, the numbers should be roughly similar. With the physicist Max Delbrück, who developed the mathematical analysis, Luria tested many parallel cultures and found enormous variation. Their 1943 paper showed that mutations in bacteria arise randomly, and it helped to establish bacteria as tools for genetic research.",
      questions: [
        [
          "According to the passage, the slot machine gave Luria the idea that ----.",
          [
            "rare early events could produce very large results",
            "bacteria could be used to win money",
            "viruses attack bacteria at random",
            "all cultures would contain the same number of mutants",
            "mutations happen only late in growth",
          ],
          "Makinenin ara sıra büyük ikramiye vermesi, erken mutasyonların çok sayıda dirençli torun üreteceği fikrini verdi.",
        ],
        [
          "Luria predicted that if the virus caused resistance, ----.",
          [
            "similar numbers of resistant bacteria would appear in each culture",
            "no resistant bacteria would survive",
            "the numbers would vary enormously",
            "the virus would become resistant",
            "the bacteria would stop multiplying in every culture",
          ],
          "Virüs direnç oluşturuyorsa sayılar kabaca benzer olmalıydı.",
        ],
        [
          "It can be understood from the passage that Delbrück's role was mainly to ----.",
          [
            "provide the mathematical analysis",
            "play the slot machine",
            "grow the bacteria",
            "discover the virus",
            "organise the university dance",
          ],
          "Delbrück matematiksel analizi geliştiren fizikçiydi.",
        ],
      ],
    },
    {
      text:
        "In 1941, George Beadle and Edward Tatum at Stanford University set out to discover how genes control the chemistry of living cells. They chose to work with Neurospora, a pink mould that grows on bread, because it can be cultivated easily on a simple mixture of sugar, salts and a single vitamin, from which it manufactures all the other substances it needs. Beadle and Tatum exposed the mould to X-rays to produce mutations and then tested thousands of the resulting strains. Most grew normally, but a few could no longer survive on the simple mixture. By adding different nutrients one at a time, the researchers found that each of these mutant strains could grow if it was supplied with one particular substance, such as a certain vitamin or amino acid. They concluded that each mutation had damaged a single gene, and that each gene was responsible for producing one enzyme that controlled one step in the chain of reactions by which the mould made that substance. This 'one gene, one enzyme' idea was later refined, since some genes produce proteins that are not enzymes and some enzymes are made of several proteins. Nevertheless, it was a crucial step in linking genes to biochemistry, and Beadle and Tatum shared the Nobel Prize in 1958.",
      questions: [
        [
          "According to the passage, Neurospora was a suitable organism because it ----.",
          [
            "can make most of what it needs from a simple diet",
            "is resistant to X-rays",
            "grows only on bread",
            "has no genes that can be damaged",
            "produces many vitamins for humans",
          ],
          "Metne göre basit bir karışımdan ihtiyaç duyduğu diğer tüm maddeleri üretebiliyordu.",
        ],
        [
          "The mutant strains could survive if they were ----.",
          [
            "given one specific nutrient",
            "exposed to more X-rays",
            "kept in the dark",
            "grown on bread",
            "mixed with normal strains",
          ],
          "Her mutant suş belirli tek bir maddeyle beslenirse büyüyebiliyordu.",
        ],
        [
          "It can be understood from the passage that the 'one gene, one enzyme' idea ----.",
          [
            "was important but later modified",
            "was shown to be completely wrong",
            "was accepted without any changes",
            "applied only to bread mould",
            "was proposed before 1900",
          ],
          "Fikir sonradan düzeltilmiştir ama genleri biyokimyaya bağlamada önemli bir adımdı.",
        ],
      ],
    },
    {
      text:
        "The bacterium Escherichia coli normally uses glucose as its main source of energy, but when glucose is unavailable it can switch to lactose, the sugar found in milk. To do so, it must produce enzymes that break lactose down. Remarkably, the bacterium makes these enzymes only when lactose is present; otherwise, the genes that code for them remain silent. In the late 1950s, François Jacob and Jacques Monod at the Pasteur Institute in Paris set out to understand how this switch works. Through a series of genetic experiments, they concluded that a protein, which they called the repressor, normally sits on the DNA next to the lactose genes and prevents them from being read. When lactose enters the cell, a form of it binds to the repressor, changing its shape so that it falls off the DNA, and the genes are then switched on. When the lactose has been used up, the repressor returns to its place and the genes are switched off again. Jacob and Monod called this group of genes and its control region an 'operon', and they published their model in 1961. Their work introduced the idea that cells control which genes are active at any given time, a principle that underlies the development of all complex organisms. They shared the Nobel Prize in 1965.",
      questions: [
        [
          "According to the passage, the repressor protein ----.",
          [
            "blocks the lactose genes when lactose is absent",
            "breaks down lactose into glucose",
            "is produced only when glucose is present",
            "helps the bacterium to digest milk",
            "switches the genes on permanently",
          ],
          "Laktoz yokken baskılayıcı DNA'ya oturup genlerin okunmasını engeller.",
        ],
        [
          "When lactose enters the cell, ----.",
          [
            "the repressor is released from the DNA",
            "the genes are switched off",
            "the bacterium stops growing",
            "glucose is produced immediately",
            "the repressor becomes stronger",
          ],
          "Laktozun bir formu baskılayıcıya bağlanıp onu DNA'dan düşürür.",
        ],
        [
          "It can be inferred from the passage that the operon model was significant because it ----.",
          [
            "explained how cells control the activity of their genes",
            "showed that genes are made of protein",
            "proved that bacteria cannot digest lactose",
            "was the first discovery about DNA",
            "applied only to bacteria and not to other organisms",
          ],
          "Çalışma hücrelerin hangi genlerin etkin olacağını nasıl denetlediği fikrini getirdi.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, the French naturalist Jean-Baptiste Lamarck proposed that organisms could pass on to their offspring characteristics acquired during their lives; for example, the muscles developed by a blacksmith might be inherited by his children. This idea of the inheritance of acquired characteristics was widely accepted for much of the century, and even Charles Darwin believed that it played some role in evolution. In the 1880s, the German biologist August Weismann put it to a direct test. He cut off the tails of a group of mice and bred them, then cut off the tails of their offspring, and repeated the procedure for five generations, involving more than nine hundred animals. Not a single mouse was born without a tail, and the tails of the last generation were no shorter than those of the first. Weismann argued that hereditary information is carried only in the reproductive cells, which he called the 'germ plasm', and that changes to the rest of the body cannot affect it. Critics pointed out that mutilation was not the kind of change Lamarck had in mind, but Weismann's theory became a foundation of modern genetics. In recent years, research on how environmental factors can affect the activity of genes has revived some interest in limited forms of inherited change.",
      questions: [
        [
          "According to the passage, Lamarck believed that ----.",
          [
            "characteristics gained during life could be inherited",
            "mice could live without tails",
            "evolution happened only by chance",
            "blacksmiths were stronger than other people",
            "reproductive cells were unaffected by the body",
          ],
          "Lamarck yaşam boyunca kazanılan özelliklerin kalıtsal olarak aktarılabileceğine inanıyordu.",
        ],
        [
          "The critics mentioned in the passage argued that ----.",
          [
            "Weismann's experiment did not test Lamarck's idea fairly",
            "the mice had been badly treated",
            "five generations were too many",
            "Weismann had used the wrong animals",
            "the tails of later generations had grown longer",
          ],
          "Eleştirmenler kesmenin Lamarck'ın kastettiği türden bir değişiklik olmadığını belirtti.",
        ],
        [
          "The final sentence of the passage implies that ----.",
          [
            "the question has not been completely closed",
            "Lamarck's theory has been fully accepted",
            "Weismann's ideas have been abandoned",
            "genes cannot be affected by the environment",
            "research on mice has stopped",
          ],
          "Son cümle sınırlı kalıtsal değişikliklere yeniden ilgi doğduğunu belirtir; soru tamamen kapanmamıştır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1908, the English mathematician G. H. Hardy and the German doctor Wilhelm Weinberg independently described a simple rule. ---- Any change in these frequencies is therefore a sign that evolution is taking place.",
      [
        "In a large population with random mating and no selection, the frequencies of genetic variants remain constant from one generation to the next.",
        "Hardy was also a keen cricket fan.",
        "Many doctors in Germany studied heredity.",
        "Mathematics is useful in many sciences.",
        "Populations of some animals rise and fall with the seasons and the food supply.",
      ],
      "Boşluktan sonra 'these frequencies' denir; boşluğa büyük ve rastgele çiftleşen bir popülasyonda genetik varyant sıklıklarının sabit kaldığını söyleyen kuralı veren cümle gelmelidir.",
    ],
    [
      "In 1973, the geneticist Theodosius Dobzhansky published an essay with a famous title: 'Nothing in Biology Makes Sense Except in the Light of Evolution'. ---- The phrase is still widely quoted by teachers and scientists.",
      [
        "He argued that evolution is the idea that unites all branches of biology.",
        "Dobzhansky was born in the Russian Empire.",
        "Many essays are published in journals.",
        "Teachers often use quotations in class.",
        "Biology is taught as a separate subject in most secondary schools today.",
      ],
      "Boşluktan sonra 'The phrase' denir; boşluğa Dobzhansky'nin evrimin biyolojinin tüm dallarını birleştiren fikir olduğunu savunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1950, the biochemist Erwin Chargaff analysed the DNA of many different species. ---- These regularities later helped Watson and Crick to understand how the bases pair up in the double helix.",
      [
        "He found that the amount of adenine always equalled that of thymine, and guanine equalled cytosine.",
        "Chargaff worked at Columbia University in New York.",
        "DNA can be extracted from almost any living thing.",
        "Many species have not yet been studied.",
        "Biochemistry is a science that combines the methods of biology and chemistry.",
      ],
      "Boşluktan sonra 'These regularities' denir; boşluğa adenin ile timinin, guanin ile sitozinin her zaman eşit olduğu bulgusunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1942, the biologist Ernst Mayr proposed a definition of species that is still widely used. ---- According to this view, two populations become separate species when they can no longer breed with each other.",
      [
        "He defined a species as a group of populations whose members can interbreed in nature.",
        "Mayr spent several years studying birds in New Guinea.",
        "Many species of birds are brightly coloured.",
        "Definitions are important in science.",
        "Some animals breed only once a year, usually in spring when food is plentiful.",
      ],
      "Boşluktan sonra 'According to this view' denir; boşluğa Mayr'ın türü doğada birbiriyle çiftleşebilen popülasyonlar grubu olarak tanımladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1968, the Japanese geneticist Motoo Kimura proposed a controversial idea about evolution at the molecular level. ---- His 'neutral theory' did not deny natural selection, but it changed the way scientists interpret genetic differences between species.",
      [
        "He argued that most changes in DNA have little effect on survival and spread through populations by chance.",
        "Japan has a long tradition of scientific research.",
        "Molecules are made of atoms.",
        "Many theories are controversial when they are first proposed.",
        "Evolution usually takes place over very long periods of time, often millions of years.",
      ],
      "Boşluktan sonra 'His neutral theory' denir; boşluğa DNA'daki değişikliklerin çoğunun hayatta kalmaya az etki ettiğini ve şans eseri yayıldığını savunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Beetles are the most diverse group of animals on Earth, with around 400,000 described species. ---- The British biologist J. B. S. Haldane is said to have joked that, if there is a creator, he must have an 'inordinate fondness for beetles'.",
      [
        "They make up roughly a quarter of all known animal species.",
        "Some beetles are considered pests by farmers.",
        "Haldane was also a popular science writer.",
        "Many insects can fly.",
        "Most beetles have hard wing cases that protect their delicate flying wings.",
      ],
      "Boşluktan sonra Haldane'in şakası aktarılır; boşluğa böceklerin bilinen tüm hayvan türlerinin yaklaşık dörtte birini oluşturduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Mitochondria, the energy-producing structures in our cells, contain their own small set of DNA.",
        "This DNA is passed down almost entirely from mothers to their children.",
        "Many mothers today have their first child later in life than in the past.",
        "By comparing it in people around the world, researchers have traced it back to a single woman in Africa.",
        "She is sometimes called 'Mitochondrial Eve', although she was not the only woman alive at the time.",
      ],
      odd: 2,
      why: "Parça mitokondriyal DNA ve 'Mitokondriyal Havva'yı anlatır. Günümüzde pek çok annenin ilk çocuğunu daha geç yaşta doğurduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Bacteria can obtain genes not only from their parents but also from other bacteria.",
        "They can take up pieces of DNA from their surroundings or exchange them through direct contact.",
        "This process allows genes for antibiotic resistance to spread rapidly between different species.",
        "Penicillin was discovered by accident in 1928.",
        "It makes the evolution of bacteria much more like a network than a branching tree.",
      ],
      odd: 3,
      why: "Parça bakteriler arası yatay gen aktarımını anlatır. penisilinin 1928'de tesadüfen keşfedildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The size of an organism's genome is not closely related to its complexity.",
        "An onion, for example, has about five times as much DNA as a human.",
        "Onions are used in the cooking of almost every country.",
        "Some species of amoeba and lungfish have even larger genomes.",
        "Much of this extra DNA consists of repeated sequences that do not code for proteins.",
      ],
      odd: 2,
      why: "Parça genom büyüklüğü ile karmaşıklık arasındaki ilişkiyi anlatır. Soğanın neredeyse her ülkenin mutfağında kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In California, a group of salamanders lives in a ring around the hot Central Valley.",
        "Neighbouring populations around the ring can interbreed with each other.",
        "Where the two ends of the ring meet in the south, however, the salamanders no longer interbreed.",
        "California's Central Valley is one of the world's most productive farming regions.",
        "Such 'ring species' show how one species can gradually split into two.",
      ],
      odd: 3,
      why: "Parça halka türlerini anlatır. Kaliforniya'nın Orta Vadisi'nin dünyanın en verimli tarım bölgelerinden biri olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cheetahs have remarkably little genetic variation compared with most other animals.",
        "Scientists believe their numbers fell to a very small population thousands of years ago.",
        "Cheetahs are the fastest land animals in the world.",
        "In one study, skin grafts between unrelated cheetahs were accepted as if the animals were identical twins.",
        "This lack of diversity may make the species more vulnerable to disease.",
      ],
      odd: 2,
      why: "Parça çitaların düşük genetik çeşitliliğini anlatır. Çitaların dünyanın en hızlı kara hayvanları olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the 1960s, the biologist Sydney Brenner chose a tiny transparent worm as a new model for research.",
        "The adult worm has only about a thousand cells, and researchers have traced the origin of every one of them.",
        "Studies of the worm revealed how certain cells are programmed to die during normal development.",
        "Brenner and two colleagues received the Nobel Prize in 2002 for this work.",
        "Worms of many kinds live in soil all over the world.",
      ],
      odd: 4,
      why: "Parça Brenner'in model organizma olarak seçtiği küçük solucanı anlatır. Pek çok solucan türünün dünyanın her yerinde toprakta yaşadığını söyleyen V. cümle konu dışıdır.",
    },
  ],
};
