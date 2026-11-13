import type { YokdilDeneme } from "./types";

export const FEN_26: YokdilDeneme = {
  no: 26,
  field: "fen",
  vocab: [
    [
      "Redi covered some jars of meat with fine cloth so that flies could not ---- their eggs on it.",
      ["lay", "count", "carry", "destroy", "hide"],
      "Redi'nin sineklerin ete yumurta 'bırakamaması' (lay) için bazı kavanozları ince bir bezle örttüğü anlatılır.",
    ],
    [
      "Hooke's book contained remarkably detailed drawings that ---- readers across Europe.",
      ["fascinated", "bored", "frightened", "insulted", "confused"],
      "Hooke'un kitabındaki son derece ayrıntılı çizimlerin Avrupa'daki okurları 'büyülediği' (fascinated) anlatılır.",
    ],
    [
      "Morgan noticed a single male fly whose eyes were white instead of the ---- red.",
      ["usual", "rare", "artificial", "dangerous", "temporary"],
      "Morgan'ın gözleri 'olağan' (usual) kırmızı yerine beyaz olan tek bir erkek sinek fark ettiği anlatılır.",
    ],
    [
      "McClintock's claim that pieces of DNA could jump around the chromosome was at first met with ----.",
      ["scepticism", "enthusiasm", "gratitude", "laughter", "silence"],
      "McClintock'un genlerin bir konumdan diğerine hareket edebileceği fikrinin başta 'kuşkuyla' (scepticism) karşılandığı anlatılır.",
    ],
    [
      "Dark moths were less ---- to birds on trees blackened by soot.",
      ["visible", "harmful", "attractive", "similar", "valuable"],
      "Koyu renkli güvelerin isle kararmış ağaçlar üzerinde kuşlara daha az 'görünür' (visible) olduğu anlatılır.",
    ],
    [
      "Margulis's theory was rejected by around fifteen journals before one finally agreed to ---- it.",
      ["bring out", "give up", "put off", "turn down", "look after"],
      "Margulis'in kuramının yaklaşık on beş dergi tarafından reddedildiği ve sonunda birinin onu 'yayımlamayı' (bring out) kabul ettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "Micrographia, one of the first books on microscopy, ---- in London in 1665.",
      ["was published", "published", "has published", "was publishing", "had published"],
      "Kitap yayımlanan bir eserdir ve olay geçmiştedir: edilgen geçmiş zaman 'was published'.",
    ],
    [
      "If Griffith had not injected the mice with a mixture of bacteria, he ---- the mysterious 'transforming principle'.",
      ["would not have discovered", "would not discover", "will not discover", "did not discover", "had not discovered"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have + V3' ister.",
    ],
    [
      "By the time McClintock received the Nobel Prize in 1983, she ---- maize for more than fifty years.",
      ["had been studying", "has been studying", "is studying", "will study", "studies"],
      "Geçmişteki bir olaydan önce süregelen eylem: Past Perfect Continuous 'had been studying'.",
    ],
    [
      "Margulis, ---- ideas about the origin of cells were once considered extreme, is now widely respected.",
      ["whose", "who", "which", "whom", "where"],
      "Fikirler Margulis'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until the 1940s ---- scientists realise that the transforming principle was DNA.",
      ["did", "were", "had", "have", "they did"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur; geçmiş zamanda 'did … realise' gerekir.",
    ],
    [
      "The flies bred ---- quickly that Morgan could study many generations in a single year.",
      ["so", "such", "too", "very", "as"],
      "Zarftan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the light moths were common before the Industrial Revolution, dark moths became dominant in polluted areas.",
      ["Whereas", "Because", "Since", "Unless", "So that"],
      "Açık renkli güvelerin önceden yaygın olması ile kirli bölgelerde koyu güvelerin baskın olması karşılaştırılır: 'Whereas'.",
    ],
    [
      "Redi's experiment succeeded in ---- that maggots did not arise from rotting meat itself.",
      ["showing", "to show", "show", "shown", "to have shown"],
      "'succeed in' kalıbında edattan sonra fiil '-ing' alır: 'showing'.",
    ],
    [
      "Mitochondria are believed ---- from bacteria that lived inside larger cells.",
      ["to have evolved", "to evolve", "evolving", "to be evolved", "to have been evolved"],
      "Geçmişte gerçekleşmiş bir süreç: 'be believed to have + V3' yapısı 'to have evolved'.",
    ],
    [
      "The bacteria ---- by heat were no longer able to cause disease on their own.",
      ["killed", "killing", "which killed", "to kill", "have killed"],
      "Bakteriler ısıyla öldürülen canlılardır; edilgen anlamlı geçmiş ortaç 'killed' gerekir.",
    ],
    [
      "Neither the live harmless bacteria ---- the dead harmful bacteria killed the mice on their own.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Kettlewell released marked moths in two different woods ---- he could compare how many survived.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some critics wrote about McClintock's work as if it ---- impossible to understand.",
      ["were", "is", "will be", "has been", "being"],
      "'as if' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The darker the tree bark, ---- the light moths were to predators.",
      ["the more visible", "more visible", "the most visible", "visibler", "the visibler"],
      "'The darker …, the more visible …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "For more than two thousand years, many people believed that living things could arise directly from non-living matter, an idea known as spontaneous generation. It seemed obvious, for example, that maggots appeared from rotting meat and that mice could be produced from old grain. In 1668, the Italian physician Francesco Redi carried out a simple but elegant experiment to test this belief. He placed pieces of meat in several jars, {1} he left some of them open and sealed others tightly. Maggots appeared on the meat in the open jars, {2} flies could land and lay their eggs, but not in the sealed ones. Critics objected that the sealed jars might lack fresh air, {3} was thought to be necessary for life to arise. Redi therefore repeated the experiment, covering some jars with fine gauze {4} let air in but kept flies out. Again, no maggots appeared on the meat. Redi concluded that maggots came from the eggs of flies, not from the meat itself. {5}, the idea of spontaneous generation did not disappear completely, and it was not finally abandoned for microorganisms until the experiments of Louis Pasteur in the 1860s.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "unless", "although", "or"],
          "Eti kavanozlara koyması ve bazılarını açık, bazılarını kapalı bırakması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["where", "which", "who", "whose", "when"],
          "Boşluk açık kavanozları (yer) niteler ve ardından tam bir cümle gelir: 'where'.",
        ],
        [
          "(23) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra temiz havayı niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(24) ----",
          ["that", "who", "where", "whose", "what"],
          "Boşluk 'fine gauze' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(25) ----",
          ["Nevertheless", "Therefore", "For example", "Similarly", "In other words"],
          "Redi'nin sonucuna rağmen kendiliğinden oluşum fikrinin tamamen ortadan kalkmaması zıtlık bildirir: 'Nevertheless'.",
        ],
      ],
    },
    {
      text:
        "In 1665, the English scientist Robert Hooke published Micrographia, a book describing what he had seen through the microscopes he had built. It contained large, beautifully detailed drawings of objects such as the eye of a fly, the point of a needle and the structure of a flea, {1} amazed readers who had never imagined that ordinary things could look so complex. The book became a bestseller, {2} the diarist Samuel Pepys wrote that he had stayed up until two in the morning reading it. In one famous observation, Hooke examined a thin slice of cork, the bark of a type of oak tree, and saw that it was made up of many tiny empty compartments arranged like a honeycomb. He called them 'cells', {3} they reminded him of the small rooms in which monks lived. What he had seen were in fact the walls of dead plant cells, {4} he had no idea of their role in living things. It was not until the nineteenth century, {5} microscopes had improved greatly, that scientists developed the theory that all living things are made of cells and that all cells come from other cells.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki çizimleri niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Kitabın çok satması ve Pepys'in onu gece geç saatlere kadar okuması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Bunlara 'hücre' demesinin nedeni ona keşişlerin küçük odalarını hatırlatmalarıdır: 'because'.",
        ],
        [
          "(29) ----",
          ["but", "because", "so that", "unless", "since"],
          "Gördüklerinin ölü bitki hücrelerinin duvarları olması ile onların canlılardaki rolünü bilmemesi zıtlık içerir: 'but'.",
        ],
        [
          "(30) ----",
          ["when", "which", "who", "whose", "what"],
          "Boşluk 'the nineteenth century' (zaman) ifadesini niteler ve ardından tam bir cümle gelir: 'when'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Morgan was at first sceptical about Mendel's ideas, ----.",
      [
        "his fly experiments ended up supporting them",
        "he set up a laboratory at a university in New York",
        "fruit flies are small insects that breed very quickly",
        "his students counted thousands of flies every week",
        "many of the flies were kept in milk bottles",
      ],
      "'Although' zıtlık ister: başta Mendel'in fikirlerine kuşkuyla baksa da meyve sineği deneyleri onları güçlü biçimde destekledi.",
    ],
    [
      "If McClintock had not studied the coloured patterns on maize kernels so carefully, ----.",
      [
        "she might never have discovered that genes can move",
        "maize is grown widely as food for people and animals",
        "most geneticists will study bacteria in the future",
        "she was working at a laboratory on Long Island",
        "the kernels had been grown in her own fields",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Kettlewell marked the moths with a small spot of paint ----.",
      [
        "so that he could identify them when they were caught again",
        "although he did not intend to catch any of them again",
        "unless the birds had already eaten most of them",
        "because he wanted to make them more attractive to birds",
        "even if the paint made them easier to see",
      ],
      "Güveleri işaretlemesinin amacı yeniden yakalandıklarında onları tanıyabilmektir: 'so that'.",
    ],
    [
      "Since Margulis published her theory in 1967, ----.",
      [
        "genetic evidence has strongly supported it",
        "she had worked at a university in Boston",
        "most biologists would have rejected it",
        "the theory will be taught in schools",
        "bacteria were found in many places",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has supported'.",
    ],
    [
      "Unless the jars were covered, ----.",
      [
        "flies could reach the meat and lay their eggs",
        "the meat would have stayed fresh for years",
        "most of the maggots had already left",
        "the air will become poisonous",
        "the experiment was very expensive",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: kavanozlar örtülmedikçe sinekler ete ulaşıp yumurtlayabilirdi.",
    ],
    [
      "The drawings in Micrographia were so detailed ----.",
      [
        "that some readers found them hard to believe",
        "because Hooke had built his own microscopes",
        "although the book was very expensive",
        "while other scientists studied the stars",
        "unless the reader used a microscope",
      ],
      "'so detailed that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Biologists have found that when the environment of a population changes, ----.",
      [
        "useful traits may slowly become more common",
        "they would have moved to another country",
        "most of them had been born in cities",
        "every animal will change its colour at once",
        "the moths were very large",
      ],
      "'when' ile genel bir bulgu anlatılır: bir topluluğun çevresi değiştiğinde yararlı özelliklere sahip bireyler zamanla daha yaygın hâle gelebilir.",
    ],
    [
      "So unusual was Margulis's theory ----.",
      [
        "that many journals refused to publish it",
        "because she studied bacteria and cells",
        "although she was a respected scientist",
        "while other biologists studied animals",
        "unless she changed her conclusions",
      ],
      "Devrik 'So unusual was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While Griffith showed that something could transform harmless bacteria, ----.",
      [
        "it was Avery's team that showed it was DNA",
        "pneumonia was a serious disease",
        "mice are often used in laboratories",
        "bacteria are very small",
        "London had many hospitals",
      ],
      "'While' zıtlık bildirir: Griffith zararsız bakterileri dönüştüren bir şey olduğunu gösterse de onun DNA olduğunu belirleyenler Avery ve meslektaşlarıydı.",
    ],
    [
      "Once air pollution had been reduced in Britain, ----.",
      [
        "light-coloured moths became common again",
        "the trees will grow taller",
        "the birds would have left",
        "moths fly mainly at night",
        "most of the factories had closed",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: açık renkli güveler yeniden yaygınlaştı.",
    ],
    [
      "No sooner had Morgan found the white-eyed fly ----.",
      [
        "than he began breeding it with red-eyed flies",
        "when the laboratory had been built",
        "that the flies will have white eyes",
        "before he had studied Mendel's work",
        "so he released it",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Redi showed that maggots appeared only on meat that flies had been able to reach.",
      [
        "Redi, kurtçukların yalnızca sineklerin ulaşabildiği etlerde ortaya çıktığını gösterdi.",
        "Redi, kurtçukların sineklerin hiç ulaşamadığı etlerde ortaya çıktığını gösterdi.",
        "Redi, sineklerin etten kendiliğinden oluştuğunu kanıtladı.",
        "Redi, etin sinekleri kendine çektiğini ama kurtçuk oluşmadığını gösterdi.",
        "Redi, kurtçukların hiçbir koşulda ortaya çıkmadığını buldu.",
      ],
      "'maggots appeared only on meat' 'kurtçukların yalnızca etlerde ortaya çıktığı', 'that flies had been able to reach' 'sineklerin ulaşabildiği' demektir.",
    ],
    [
      "The tiny compartments in the cork reminded Hooke of the small rooms in which monks lived.",
      [
        "Mantardaki küçük bölmeler Hooke'a keşiş odalarını hatırlattı.",
        "Keşişlerin yaşadığı odalar, mantardan yapılmıştı.",
        "Hooke, keşişlerin odalarını mikroskopla inceledi.",
        "Mantardaki bölmeler, Hooke'a büyük salonları hatırlattı.",
        "Hooke, mantarı keşişlerin odalarını süslemek için kullandı.",
      ],
      "'The tiny compartments in the cork' 'mantardaki küçük bölmeler', 'reminded Hooke of the small rooms in which monks lived' 'Hooke'a keşiş odalarını hatırlattı' demektir.",
    ],
    [
      "Morgan's experiments showed that some traits are carried on the chromosomes that determine sex.",
      [
        "Morgan'ın deneyleri, bazı özelliklerin cinsiyet kromozomlarında taşındığını gösterdi.",
        "Morgan'ın deneyleri, cinsiyetin hiçbir kromozomla ilişkili olmadığını gösterdi.",
        "Morgan, tüm özelliklerin yalnızca dişilerde görüldüğünü kanıtladı.",
        "Morgan'ın deneyleri, kromozomların hiçbir özellik taşımadığını ortaya koydu.",
        "Morgan, cinsiyetin yalnızca çevreyle belirlendiğini savundu.",
      ],
      "'some traits are carried on the chromosomes' 'bazı özelliklerin kromozomlar üzerinde taşındığı', 'that determine sex' 'cinsiyeti belirleyen' demektir.",
    ],
    [
      "McClintock found that certain genes could switch other genes on and off by changing position.",
      [
        "McClintock, bazı genlerin yer değiştirerek başka genleri açıp kapattığını buldu.",
        "McClintock, genlerin hiçbir zaman konum değiştirmediğini kanıtladı.",
        "McClintock, genlerin yalnızca ışıkla açılıp kapatılabildiğini gösterdi.",
        "McClintock, bazı genlerin diğer genleri tamamen yok ettiğini buldu.",
        "McClintock, mısır tanelerinin renginin genlerle ilgisi olmadığını savundu.",
      ],
      "'certain genes could switch other genes on and off' 'bazı genlerin diğer genleri açıp kapatabildiği', 'by changing position' 'konum değiştirerek' demektir.",
    ],
    [
      "Mitochondria have their own DNA, which resembles that of bacteria.",
      [
        "Mitokondrilerin bakterilerinkine benzer kendi DNA'sı vardır.",
        "Mitokondrilerde hiç DNA bulunmaz.",
        "Bakteriler, mitokondrilerden DNA alır.",
        "Mitokondrilerin DNA'sı insan DNA'sıyla tamamen aynıdır.",
        "Mitokondriler, bakterileri yok etmek için DNA üretir.",
      ],
      "'have their own DNA' 'kendi DNA'ları vardır', 'which resembles that of bacteria' 'bakterilerinkine benzeyen' demektir.",
    ],
    [
      "When mice were injected with live harmless bacteria and dead harmful ones together, they died.",
      [
        "Canlı zararsız ve ölü zararlı bakteriler birlikte verilen fareler öldü.",
        "Farelere yalnızca ölü bakteriler enjekte edildiğinde fareler hayatta kaldı ve iyileşti.",
        "Canlı zararsız bakteriler, ölü zararlı bakterileri yeniden canlandıramadı.",
        "Fareler, bakterilerle birlikte enjekte edilen ilaç sayesinde kurtuldu.",
        "Ölü zararlı bakteriler, canlı bakterileri öldürerek fareleri korudu.",
      ],
      "'When mice were injected with live harmless bacteria and dead harmful ones together' 'farelere canlı zararsız bakteriler ile ölü zararlı bakteriler birlikte enjekte edildiğinde', 'they died' 'öldüler' demektir.",
    ],
  ],
  trEn: [
    [
      "Kendiliğinden oluşum fikri, yüzyıllarca yaygın biçimde kabul edildi.",
      [
        "The idea of spontaneous generation was widely accepted for centuries.",
        "The idea of spontaneous generation was rejected by everyone from the start.",
        "Spontaneous generation was proved by Redi's experiment.",
        "Nobody believed in spontaneous generation before Redi.",
        "The idea of spontaneous generation was invented by Pasteur.",
      ],
      "'yüzyıllarca yaygın biçimde kabul edildi' 'was widely accepted for centuries' karşılığıdır.",
    ],
    [
      "Hooke, mikroskopla gördüğü nesnelerin ayrıntılı çizimlerini yaptı.",
      [
        "Hooke drew in detail what he saw under the microscope.",
        "Hooke refused to draw the objects he saw.",
        "Hooke's drawings were made without a microscope.",
        "Hooke drew only large objects such as trees.",
        "Hooke's drawings were copied from other books.",
      ],
      "'mikroskopla gördüğü nesnelerin ayrıntılı çizimlerini yaptı' 'made detailed drawings of the objects he saw through the microscope' karşılığıdır.",
    ],
    [
      "Meyve sinekleri, kısa sürede çok sayıda yavru verir.",
      [
        "Fruit flies produce large numbers of offspring in a short time.",
        "Fruit flies produce very few offspring.",
        "Fruit flies live for many years.",
        "Fruit flies cannot be bred in laboratories.",
        "Fruit flies produce offspring only once in their lives.",
      ],
      "'kısa sürede çok sayıda yavru verir' 'produce large numbers of offspring in a short time' karşılığıdır.",
    ],
    [
      "McClintock'un çalışması, onlarca yıl boyunca büyük ölçüde göz ardı edildi.",
      [
        "McClintock's work was largely ignored for decades.",
        "McClintock's work was praised immediately by all geneticists.",
        "McClintock ignored the work of other scientists.",
        "McClintock's work was forgotten after she won the prize.",
        "McClintock worked for only a few years.",
      ],
      "'onlarca yıl boyunca büyük ölçüde göz ardı edildi' 'was largely ignored for decades' karşılığıdır.",
    ],
    [
      "Koyu renkli güveler, kirli bölgelerde daha yaygın hâle geldi.",
      [
        "Dark moths became more common in polluted areas.",
        "Dark moths disappeared from polluted areas.",
        "Light moths became more common in polluted areas.",
        "Pollution had no effect on the colour of moths.",
        "Dark moths were found only in clean areas.",
      ],
      "'kirli bölgelerde daha yaygın hâle geldi' 'became more common in polluted areas' karşılığıdır.",
    ],
    [
      "Bazı hücre yapılarının bir zamanlar bağımsız bakteriler olduğu düşünülmektedir.",
      [
        "Some cell parts may once have been free-living bacteria.",
        "Bacteria are thought to have developed from cell structures.",
        "Cell structures have never been compared with bacteria.",
        "Bacteria cannot live inside other cells.",
        "All bacteria are thought to be parts of larger cells.",
      ],
      "'bir zamanlar bağımsız bakteriler olduğu düşünülmektedir' 'are thought to have once been independent bacteria' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the early twentieth century, the American biologist Thomas Hunt Morgan was doubtful about the theories of heredity proposed by the monk Gregor Mendel, which had been rediscovered in 1900. To test them, he began breeding fruit flies in his laboratory at Columbia University in New York. The flies were ideal for the purpose: they are small, cheap to keep in milk bottles, and produce a new generation in less than two weeks. In 1910, among thousands of normal red-eyed flies, Morgan noticed a single male with white eyes. When he bred it with red-eyed females, all of their offspring had red eyes, but in the following generation, white eyes appeared again, almost exclusively in males. Morgan concluded that the gene for eye colour must be carried on the X chromosome, one of the chromosomes that determine sex. This was strong evidence that genes are located on chromosomes. Morgan and his students, working in a cramped room that became known as 'the fly room', went on to show that genes are arranged in a line along chromosomes and that the frequency with which two traits are inherited together can be used to work out how far apart their genes are. In 1933, Morgan received the Nobel Prize, and he shared the prize money with his students and colleagues.",
      questions: [
        [
          "According to the passage, fruit flies were well suited to Morgan's research because ----.",
          [
            "they were cheap to keep and bred fast",
            "they had already been studied by Mendel",
            "they lived for many years",
            "they were large and easy to see",
            "they could be found only in New York",
          ],
          "Metne göre sinekler küçük, süt şişelerinde ucuza beslenebilen ve iki haftadan kısa sürede yeni nesil veren canlılardı.",
        ],
        [
          "The writer mentions that white eyes appeared almost only in males in order to explain ----.",
          [
            "why Morgan placed the gene on a sex chromosome",
            "why Morgan doubted Mendel's theories",
            "how the flies were kept in bottles",
            "why the room was called 'the fly room'",
            "how Morgan won the Nobel Prize",
          ],
          "Beyaz gözlerin neredeyse yalnızca erkeklerde görülmesi, Morgan'ın genin cinsiyet kromozomu üzerinde olduğu sonucuna neden vardığını açıklar.",
        ],
        [
          "It can be inferred from the passage that Morgan ----.",
          [
            "recognised that his discoveries depended on the work of others in his group",
            "kept all the prize money for himself",
            "rejected the idea that genes are on chromosomes",
            "worked alone throughout his career",
            "never changed his opinion of Mendel",
          ],
          "Ödül parasını öğrencileri ve meslektaşlarıyla paylaşması, keşiflerinin gruptaki diğerlerinin çalışmasına bağlı olduğunu kabul ettiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Barbara McClintock was an American geneticist who spent most of her career studying maize, the plant also known as corn. Maize was useful for genetic research because the colours of its kernels vary in ways that can be traced from one generation to the next. In the 1940s, working at Cold Spring Harbor Laboratory on Long Island, she noticed unusual patterns of coloured spots and streaks on kernels that could not be explained by the accepted rules of heredity. After years of careful observation, she concluded that certain pieces of genetic material could move from one position on a chromosome to another, and that by doing so they could switch other genes on or off. She called them 'controlling elements'; today they are known as transposons or 'jumping genes'. When she presented her findings in 1951, many scientists found them difficult to understand or simply did not believe them, partly because they contradicted the widely held view that genes were fixed in place like beads on a string. Discouraged, McClintock stopped publishing detailed accounts of her work, although she continued her research. In the 1970s, other scientists found similar moving elements in bacteria and other organisms, and her work was finally recognised. In 1983, at the age of eighty-one, she received the Nobel Prize, becoming the first woman to win it alone in that category.",
      questions: [
        [
          "According to the passage, maize was useful for genetic research because ----.",
          [
            "its kernel colours could be traced over generations",
            "it grows very quickly in any climate",
            "it has no chromosomes",
            "its kernels are all the same colour",
            "it was easy to transport",
          ],
          "Metne göre mısır tanelerinin renkleri bir nesilden diğerine izlenebilecek biçimde farklılık gösterir.",
        ],
        [
          "The writer compares the accepted view of genes to beads on a string in order to show ----.",
          [
            "why moving genes seemed hard to accept",
            "how maize kernels are arranged",
            "that genes are made of glass",
            "how McClintock decorated her laboratory",
            "why she stopped publishing",
          ],
          "Genlerin ip üzerindeki boncuklar gibi sabit olduğu görüşü, hareket eden genler fikrinin neden kabul edilmesinin zor olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that McClintock's work was finally recognised after ----.",
          [
            "similar elements were found in other organisms",
            "she stopped studying maize",
            "she moved to Europe",
            "she published many new papers in the 1950s",
            "other scientists proved her wrong",
          ],
          "Metne göre 1970'lerde başka bilim insanları bakteri ve diğer organizmalarda benzer hareketli öğeler bulunca çalışması tanındı.",
        ],
      ],
    },
    {
      text:
        "In 1967, the American biologist Lynn Margulis published a paper proposing a radical idea about the origin of complex cells, the type that make up plants, animals and fungi. Such cells contain structures called organelles, including mitochondria, which produce energy, and, in plants, chloroplasts, which carry out photosynthesis. Margulis argued that these organelles had originally been free-living bacteria that were swallowed by larger cells but, instead of being digested, survived inside them. Over time, the two organisms came to depend on each other completely: the host provided protection and nutrients, while the bacteria supplied energy. The idea, known as endosymbiotic theory, had been suggested by a few earlier scientists but had been largely ignored. Margulis's paper was rejected by around fifteen journals before it was published, and many biologists regarded the theory as far-fetched. Margulis gathered a wide range of evidence. Mitochondria and chloroplasts, she pointed out, are about the same size as bacteria, divide in a similar way, and have their own DNA, which is arranged in a ring as in bacteria. In the following decades, studies of their DNA showed that they are closely related to particular groups of living bacteria. Today, endosymbiotic theory is accepted by almost all biologists as an explanation of how complex cells first evolved.",
      questions: [
        [
          "According to Margulis's theory, mitochondria and chloroplasts ----.",
          [
            "were once bacteria that came to live inside other cells",
            "were formed from the walls of plant cells",
            "are a type of virus",
            "were invented by earlier scientists",
            "are found only in bacteria",
          ],
          "Metne göre bu organeller başlangıçta daha büyük hücrelerce yutulan ama sindirilmeden içlerinde yaşamını sürdüren serbest yaşayan bakterilerdi.",
        ],
        [
          "The writer mentions that the paper was rejected by around fifteen journals in order to show ----.",
          [
            "how much resistance the theory met at first",
            "that Margulis wrote many different papers",
            "that the theory was completely new",
            "how journals choose their articles",
            "that the theory was wrong",
          ],
          "Makalenin yaklaşık on beş dergi tarafından reddedilmesi, kuramın başta ne kadar dirençle karşılaştığını gösterir.",
        ],
        [
          "It can be inferred from the passage that studies of DNA ----.",
          [
            "provided strong support for Margulis's theory",
            "proved that the theory was false",
            "showed that mitochondria have no DNA",
            "were carried out before 1967",
            "had nothing to do with the theory",
          ],
          "DNA çalışmalarının organellerin belirli bakteri gruplarıyla yakın akraba olduğunu göstermesi, kuramı güçlü biçimde desteklediğini gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1928, the British medical officer Frederick Griffith was studying the bacteria that cause pneumonia, hoping to develop a vaccine. He worked with two strains: one with a smooth outer coat, which caused fatal disease in mice, and one without the coat, which was harmless. As expected, mice injected with the smooth strain died, while those injected with the rough strain survived. Mice injected with smooth bacteria that had been killed by heat also survived. However, when Griffith injected mice with a mixture of live rough bacteria and dead smooth bacteria, many of them died, and he found living smooth bacteria in their blood. Something from the dead bacteria had apparently transformed the harmless strain into the deadly one, and the change was passed on to later generations. Griffith did not know what this 'transforming principle' was, and he did not pursue the question further. In 1944, Oswald Avery and his colleagues at the Rockefeller Institute in New York repeated the experiment in test tubes and carefully removed different substances from the dead bacteria one by one. They found that transformation stopped only when DNA was destroyed, providing strong evidence that DNA, rather than protein as many scientists then believed, carried genetic information.",
      questions: [
        [
          "According to the passage, Griffith's original aim was to ----.",
          [
            "develop a vaccine against pneumonia",
            "discover the structure of DNA",
            "find a cure for all bacterial diseases",
            "show that heat kills bacteria",
            "study the blood of mice",
          ],
          "Metne göre Griffith zatürreye karşı bir aşı geliştirmeyi umuyordu.",
        ],
        [
          "The writer mentions that living smooth bacteria were found in the mice's blood in order to show ----.",
          [
            "that the harmless strain had become deadly",
            "that the heat had not killed the bacteria",
            "that the mice had been infected before the experiment",
            "how the vaccine worked",
            "that smooth bacteria are harmless",
          ],
          "Farelerin kanında canlı pürüzsüz bakteriler bulunması, zararsız türün zararlı türe dönüştüğünü gösterir.",
        ],
        [
          "It can be understood from the passage that before Avery's work, many scientists believed that ----.",
          [
            "proteins rather than DNA carried genetic information",
            "DNA carried all genetic information",
            "bacteria had no genetic material",
            "transformation was impossible",
            "Griffith's results were fake",
          ],
          "Metne göre o dönemde pek çok bilim insanı genetik bilgiyi taşıyanın protein olduğuna inanıyordu.",
        ],
      ],
    },
    {
      text:
        "Before the Industrial Revolution, almost all peppered moths in Britain were pale with dark speckles, a pattern that made them hard to see when they rested on the light-coloured lichens covering tree trunks. In 1848, a dark form of the moth was recorded near Manchester, and by the end of the century dark moths made up the great majority of the population in many industrial areas, where soot from factories had killed the lichens and blackened the trees. Biologists suggested that birds were more likely to spot and eat moths that stood out against their background, so that dark moths survived better on dark trees. In the 1950s, the British scientist Bernard Kettlewell tested this idea by releasing marked moths of both forms in a polluted wood near Birmingham and in a clean wood in Dorset, and then recapturing as many as possible. In the polluted wood, more dark moths were recaptured; in the clean wood, more pale ones. Kettlewell's methods were later criticised, partly because he released the moths in daytime and in unnaturally large numbers. However, a large study carried out by Michael Majerus between 2001 and 2007, using more natural methods, confirmed that birds eat more of the moths that are easier to see. After laws reduced air pollution, pale moths again became common.",
      questions: [
        [
          "According to the passage, dark moths became common in industrial areas because ----.",
          [
            "birds saw them less easily on dark trees",
            "factories produced dark moths deliberately",
            "lichens became more common",
            "pale moths moved to the countryside",
            "birds preferred to eat dark moths",
          ],
          "Metne göre isle kararmış ağaçlarda koyu güveler kuşlarca daha zor görülüyor ve daha iyi hayatta kalıyordu.",
        ],
        [
          "The writer mentions Majerus's study in order to show ----.",
          [
            "that later work backed the main finding despite the criticism",
            "that Kettlewell's results were completely wrong",
            "how lichens grow on trees",
            "why air pollution increased",
            "that birds do not eat moths",
          ],
          "Majerus'un daha doğal yöntemlerle yaptığı çalışmanın kuşların daha kolay görülen güveleri yediğini doğrulaması, Kettlewell'e yönelik eleştirilere rağmen ana sonucun doğrulandığını gösterir.",
        ],
        [
          "It can be inferred from the passage that the return of pale moths ----.",
          [
            "was connected with the reduction of air pollution",
            "was caused by an increase in the number of birds",
            "happened before the Industrial Revolution",
            "proved that moths change colour during their lives",
            "had nothing to do with tree bark",
          ],
          "Yasalar hava kirliliğini azalttıktan sonra açık renkli güvelerin yeniden yaygınlaşması, bunun kirliliğin azalmasıyla bağlantılı olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Some genetic conditions appear only when a child inherits the same faulty gene from both parents. ---- This is why two healthy parents can sometimes have a child with such a condition.",
      [
        "A person with one copy is usually healthy but can pass it on.",
        "Children often look like their parents in many ways.",
        "Some families have many children.",
        "Doctors can now test for many genetic conditions.",
        "Genes are made of DNA.",
      ],
      "Boşluktan sonra 'This is why' ile iki sağlıklı ebeveynin bu durumda bir çocuğu olabileceği söylenir; boşluğa genin tek kopyasına sahip kişinin belirti göstermeden onu aktarabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1996, scientists in Scotland produced a sheep named Dolly from a single cell taken from an adult sheep. ---- Her birth showed that specialised adult cells could be used to create a whole new animal.",
      [
        "No mammal had ever been copied like this before.",
        "Sheep are kept for their wool and meat.",
        "Scotland has a long history of farming.",
        "Many scientists work in laboratories.",
        "Some sheep live for more than ten years.",
      ],
      "Boşluktan sonra 'Her birth' ile doğumunun önemi anlatılır; boşluğa onun bu yolla klonlanan ilk memeli olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Most living things have internal clocks that follow a cycle of roughly twenty-four hours. ---- Even when people are kept in a room without windows or clocks, they continue to sleep and wake on a cycle of about a day.",
      [
        "These circadian rhythms control sleep and many hormones.",
        "Many people use alarm clocks to wake up.",
        "Some animals are active mainly at night.",
        "The Earth takes twenty-four hours to rotate once.",
        "Sleep is important for good health.",
      ],
      "Boşluktan sonra pencere ve saat olmayan bir odada bile yaklaşık günlük döngünün sürdüğü söylenir; boşluğa bu sirkadiyen ritimlerin uyku, vücut ısısı ve hormon salınımını denetlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "When plants and animals die, their bodies are broken down by fungi, bacteria and small creatures such as worms. ---- Without these decomposers, dead material would pile up and the soil would run out of nutrients.",
      [
        "This returns nutrients to the soil for new plants.",
        "Many fungi can be eaten.",
        "Worms are often used as bait for fishing.",
        "Bacteria are found almost everywhere.",
        "Forests cover large parts of the Earth.",
      ],
      "Boşluktan sonra ayrıştırıcılar olmadan besinlerin tükeneceği söylenir; boşluğa bu sürecin besinleri yeni bitkilerin kullanabileceği toprağa geri döndürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "The roots of most plants are connected to vast underground networks of fungal threads. ---- In exchange, the fungi receive sugars that the plants make from sunlight.",
      [
        "The fungi help the plants take up water and minerals.",
        "Many mushrooms grow in forests in autumn.",
        "Some fungi cause diseases in crops.",
        "Plants need sunlight in order to grow.",
        "Forests are home to many animals.",
      ],
      "Boşluktan sonra 'In return' ile bitkilerin mantarlara şeker sağladığı söylenir; boşluğa mantarların bitkilerin topraktan su ve mineral almasına yardım ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Plants cannot move, so they rely on other means to spread their seeds. ---- Others, such as the burdock, are covered in tiny hooks that cling to animal coats.",
      [
        "Some, like the dandelion, have seeds carried by wind.",
        "Many flowers are brightly coloured.",
        "Some plants grow very tall.",
        "Seeds need water in order to grow.",
        "Gardeners often buy seeds in packets.",
      ],
      "Boşluktan sonra 'Others' ile çengelli tohumlu bitkiler anlatılır; boşluğa karahindiba gibi bazılarının rüzgârla taşınan hafif tohumlar ürettiğini söyleyen ilk örnek cümlesi gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The axolotl is a salamander from the lakes of Mexico City.",
        "It can regrow lost legs, parts of its heart and even parts of its brain.",
        "Scientists study it in the hope of learning how to improve healing in humans.",
        "Many tourists visit the floating gardens of Xochimilco.",
        "In the wild, however, the axolotl is now critically endangered.",
      ],
      odd: 3,
      why: "Parça yenilenme yeteneğiyle bilinen aksolotlu anlatır. Pek çok turistin Xochimilco'nun yüzen bahçelerini ziyaret ettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Chloroplasts are the structures in plant cells where photosynthesis takes place.",
        "They contain a green pigment called chlorophyll that absorbs light.",
        "Many people prefer green as their favourite colour.",
        "Using the energy of light, they convert carbon dioxide and water into sugar.",
        "Oxygen is released as a by-product of this process.",
      ],
      odd: 2,
      why: "Parça kloroplastları ve fotosentezi anlatır. Pek çok kişinin en sevdiği rengin yeşil olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the sea, some small fish feed by removing parasites from larger fish.",
        "The larger fish visit special 'cleaning stations' on coral reefs.",
        "Both species benefit from the relationship.",
        "Many divers enjoy photographing coral reefs.",
        "Such partnerships between different species are known as mutualism.",
      ],
      odd: 3,
      why: "Parça farklı türler arasındaki karşılıklı yarara dayalı ilişkiyi anlatır. Pek çok dalgıcın mercan resiflerini fotoğraflamaktan hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A mutation is a change in the sequence of DNA.",
        "Most mutations have no noticeable effect.",
        "Some are harmful, while a few may be useful.",
        "Useful mutations provide the raw material for evolution.",
        "Many science fiction films feature mutant creatures.",
      ],
      odd: 4,
      why: "Parça mutasyonları anlatır. Pek çok bilimkurgu filminde mutant yaratıklar bulunduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "When one fertilised egg divides into two embryos, identical twins are the result.",
        "They therefore share almost exactly the same DNA.",
        "Some parents find it hard to tell their twins apart.",
        "Comparing identical and non-identical twins helps scientists to study the effects of genes and environment.",
        "Such studies have been used to investigate traits ranging from height to personality.",
      ],
      odd: 2,
      why: "Parça tek yumurta ikizlerinin bilimsel araştırmalardaki önemini anlatır. Bazı ebeveynlerin ikizlerini ayırt etmekte zorlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many animals use colour and pattern to blend into their surroundings.",
        "Some insects look almost exactly like leaves or twigs.",
        "This helps them to avoid being seen by predators.",
        "Other animals use camouflage to approach their prey without being noticed.",
        "Many artists use bright colours in their paintings.",
      ],
      odd: 4,
      why: "Parça hayvanlardaki kamuflajı anlatır. Pek çok sanatçının resimlerinde parlak renkler kullandığını söyleyen V. cümle konu dışıdır.",
    },
  ],
};
