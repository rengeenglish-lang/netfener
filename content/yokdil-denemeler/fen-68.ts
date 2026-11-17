import type { YokdilDeneme } from "./types";

export const FEN_68: YokdilDeneme = {
  no: 68,
  field: "fen",
  vocab: [
    [
      "Because electrons have a much shorter wavelength than light, they can ---- far smaller details.",
      ["reveal", "hide", "destroy", "repeat", "borrow"],
      "Elektronların dalga boyu ışığınkinden çok daha kısa olduğu için çok daha küçük ayrıntıları 'ortaya çıkarabildiği' (reveal) anlatılır.",
    ],
    [
      "Using the tip of the microscope, the researcher moved the atoms one by one and ---- them into letters.",
      ["arranged", "dissolved", "heated", "painted", "counted"],
      "Araştırmacının mikroskobun ucuyla atomları tek tek hareket ettirip onları harflere 'dizdiği' (arranged) anlatılır.",
    ],
    [
      "It took years of patient work to ---- the structure of the complex molecule.",
      ["determine", "abandon", "ignore", "predict wrongly", "sell"],
      "Karmaşık molekülün yapısını 'belirlemenin' (determine) yıllarca sabırlı çalışma gerektirdiği anlatılır.",
    ],
    [
      "Living cells are almost ---- under an ordinary microscope unless they are stained.",
      ["transparent", "colourful", "enormous", "noisy", "solid"],
      "Canlı hücrelerin boyanmadıkça sıradan bir mikroskop altında neredeyse 'saydam' (transparent) olduğu anlatılır.",
    ],
    [
      "The paper microscope is so ---- that it can be dropped from a building without breaking.",
      ["durable", "fragile", "expensive", "heavy", "complicated"],
      "Kâğıt mikroskobun o kadar 'dayanıklı' (durable) olduğu anlatılır ki bir binadan düşürülse bile kırılmaz.",
    ],
    [
      "The particles from space pass easily through air but are partly ---- by thick stone.",
      ["absorbed", "attracted", "invented", "multiplied", "repaired"],
      "Uzaydan gelen parçacıkların havadan kolayca geçtiği, ama kalın taş tarafından kısmen 'soğurulduğu' (absorbed) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time he received the Nobel Prize, the inventor of the electron microscope ---- nearly eighty.",
      ["was", "has been", "is", "will be", "had been being"],
      "Geçmişteki bir andaki durum: 'was'.",
    ],
    [
      "If the company had accepted his idea at once, the method ---- into use much sooner.",
      ["might have come", "will come", "comes", "had come", "is coming"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have come'.",
    ],
    [
      "The thirty-five atoms ---- onto a cold nickel surface.",
      ["were placed", "placed", "have placed", "place", "are placing"],
      "Atomlar yerleştirilmiştir; edilgen geçmiş zaman: 'were placed'.",
    ],
    [
      "---- she suffered from painful arthritis, she continued her research for decades.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Ağrılı artrit çekmesi ile araştırmasını sürdürmesi zıttır: 'Although'.",
    ],
    [
      "The engineer, ---- paper microscope costs less than a dollar, wants every child to have one.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin kâğıt mikroskobu; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until the samples were frozen very quickly ---- the molecules keep their natural shapes.",
      ["did", "had", "were", "have", "does"],
      "'Not until' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The detectors were placed in a chamber inside the pyramid, ---- the particles passing through the stone could be recorded.",
      ["where", "which", "when", "whose", "that"],
      "'a chamber' yer bildirir; parçacıklar orada kaydedilebilirdi: 'where'.",
    ],
    [
      "The shorter the wavelength is, ---- the details that can be seen.",
      ["the finer", "the finest", "finer", "finest", "so fine"],
      "'The shorter ..., the finer ...' paralel yapısı: 'the finer'.",
    ],
    [
      "The committee recommended that the method ---- in laboratories worldwide.",
      ["be adopted", "is adopted", "was adopted", "to be adopted", "being adopted"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be adopted'.",
    ],
    [
      "The void is believed ---- for more than four thousand years.",
      ["to have existed", "existing", "to be existed", "existed", "having exist"],
      "Geçmişten süregelen durum için mastarın geçmiş biçimi: 'to have existed'.",
    ],
    [
      "The sample is cooled to very low temperatures ---- the atoms stay in place.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Örneğin çok düşük sıcaklıklara soğutulmasının amacı atomların yerinde kalmasıdır: 'so that'.",
    ],
    [
      "The researchers had thousands of images of the molecule ---- by a computer.",
      ["combined", "combine", "combining", "to combine", "combines"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'combined'.",
    ],
    [
      "Had she not used X-rays, the structure of penicillin ---- unknown for much longer.",
      ["might have remained", "remains", "will remain", "had remained", "is remaining"],
      "Devrik üçüncü tip koşul cümlesi: 'might have remained'.",
    ],
    [
      "Neither the archaeologists nor the physicists ---- what the empty space had been used for.",
      ["knew", "knowing", "to know", "has known to", "know to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'knew'.",
    ],
  ],
  cloze: [
    {
      text:
        "As early as the 1870s, physicists knew that light microscopes could never show details smaller than about half the wavelength of visible light, roughly two hundred nanometres. In the 1920s, physicists discovered that electrons also behave like waves, with a wavelength thousands of times shorter than that of light, {1} this raised the possibility of a microscope that used electrons instead. In 1931, Ernst Ruska, a young engineering student in Berlin, and his supervisor, Max Knoll, built the first electron microscope, {2} it used magnetic coils as lenses to focus a beam of electrons. Their first instrument magnified objects only about four hundred times, {3} within two years Ruska had built one that could show details finer than any light microscope. The first commercial electron microscopes appeared in 1939, {4} they soon allowed scientists to see viruses, the internal structures of cells and the arrangement of atoms in metals for the first time. Ruska had to wait a long time for recognition of his work. In 1986, more than half a century after his invention, he was awarded a share of the Nobel Prize in Physics, {5} he died only two years later, at the age of 81.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Elektronların dalga gibi davranmasının keşfedilmesi ve bunun yeni bir olasılık doğurması birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "İlk elektron mikroskobunu yapmaları ve manyetik bobinleri mercek olarak kullanması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["but", "and", "so", "because", "unless"],
          "İlk aletin yalnızca dört yüz kat büyütmesi ile iki yıl içinde çok daha iyisinin yapılması karşıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Ticari mikroskopların çıkması ve bilim insanlarının virüsleri görmesi birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Ödülü alması ve iki yıl sonra ölmesi birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "In 1981, two physicists working for IBM in Zurich, Gerd Binnig and Heinrich Rohrer, invented a new kind of microscope that did not use lenses at all. Instead, it moved an extremely sharp metal tip, ending in a single atom, across a surface at a distance of less than a nanometre. At such small distances, a tiny electric current flows between the tip and the surface, {1} because the current changes greatly with distance, measuring it allows the microscope to map the surface atom by atom. The invention earned them a Nobel Prize only five years later, {2} it soon became one of the most important tools of nanotechnology. In 1989, Don Eigler, a physicist at an IBM laboratory in California, found that the tip could be used not only to see atoms but also to move them. Working at a temperature close to absolute zero, he picked up individual atoms of xenon one at a time, {3} he arranged thirty-five of them on a nickel surface to spell out the letters 'IBM'. The letters were only about five nanometres high, {4} the image was published around the world as a symbol of humans' new ability to control matter at the smallest scale. In 2013, IBM researchers used the same technique to make a short animated film from individual molecules, {5} it was recognised as the world's smallest film.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Küçük bir akımın akması ve bu akımın ölçülerek yüzeyin haritalanması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Buluşun Nobel kazandırması ve önemli bir araç olması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Atomları tek tek alması ve otuz beşini dizmesi birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Harflerin çok küçük olması ve görüntünün dünyada yayımlanması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Film yapmaları ve filmin en küçük film olarak tanınması birbirini izler: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although light microscopes improved greatly in the nineteenth century, ----.",
      [
        "they could never show details smaller than about two hundred nanometres",
        "light is fast",
        "glass is transparent",
        "Berlin is a city",
        "the first commercial electron microscopes appeared on the market in 1939",
      ],
      "'Although' zıtlık ister: ışık mikroskopları on dokuzuncu yüzyılda çok gelişse de yaklaşık iki yüz nanometreden küçük ayrıntıları hiçbir zaman gösteremezdi.",
    ],
    [
      "If the tip were not so sharp, ----.",
      [
        "the microscope could not distinguish individual atoms",
        "metal conducts electricity",
        "Zurich is in Switzerland",
        "atoms are small",
        "the physicists would have received the Nobel Prize only five years after their invention",
      ],
      "İkinci tip koşul: uç bu kadar keskin olmasaydı mikroskop tek tek atomları ayırt edemezdi.",
    ],
    [
      "----, she was able to show the arrangement of atoms in penicillin.",
      [
        "By studying the patterns made by X-rays passing through its crystals",
        "Although penicillin is a medicine",
        "Unless the war ended",
        "Since Oxford is old",
        "While she was suffering from a painful disease that affected her hands",
      ],
      "Kristallerinden geçen X-ışınlarının oluşturduğu desenleri inceleyerek penisilindeki atomların düzenini gösterebildi.",
    ],
    [
      "The company was not interested in the new microscope at first ----.",
      [
        "because it did not see any practical use for it",
        "although it was cheap",
        "unless cells were stained",
        "so that scientists could buy it",
        "while the physicist was testing it on living cells in his laboratory",
      ],
      "Şirket başta pratik bir kullanımını görmediği için yeni mikroskopla ilgilenmedi.",
    ],
    [
      "Since the paper microscope costs so little, ----.",
      [
        "it can be given to large numbers of children and health workers",
        "paper is light",
        "children like toys",
        "lenses are glass",
        "its inventor had been visiting clinics in Thailand when he got the idea",
      ],
      "'Since' neden bildirir: kâğıt mikroskop çok ucuz olduğundan çok sayıda çocuğa ve sağlık çalışanına verilebilir.",
    ],
    [
      "Not only does rapid freezing preserve the molecules' shape, ----.",
      [
        "but it also prevents damaging ice crystals from forming",
        "and water is liquid",
        "since electrons are small",
        "so computers are fast",
        "unless the samples had been studied by three scientists who later shared a prize",
      ],
      "'Not only ... but also' yapısı tamamlanır: hızlı dondurma yalnızca moleküllerin biçimini korumakla kalmaz, zarar veren buz kristallerinin oluşmasını da önler.",
    ],
    [
      "Once the detectors had been in place for several months, ----.",
      [
        "the scientists found an unexpected excess of particles from one direction",
        "pyramids are old",
        "detectors are small",
        "Egypt is hot",
        "a team of archaeologists had already explored most of the pyramid's known passages",
      ],
      "Dedektörler birkaç ay yerinde kaldıktan sonra bilim insanları bir yönden beklenmedik fazla parçacık buldu.",
    ],
    [
      "Unless living cells are stained, ----.",
      [
        "they are very difficult to see under an ordinary microscope",
        "cells are small",
        "stains are colourful",
        "microscopes are useful",
        "the physicist would not have won the Nobel Prize in 1953",
      ],
      "'Unless' olumsuz koşul: canlı hücreler boyanmadıkça sıradan bir mikroskop altında çok zor görülür.",
    ],
    [
      "The letters made of atoms were so small ----.",
      [
        "that millions of them could fit across the width of a human hair",
        "although they were famous",
        "because xenon is a gas",
        "unless the surface was cold",
        "while the physicist was working at a laboratory in California",
      ],
      "Atomlardan yapılan harfler o kadar küçüktü ki bir insan saçının genişliğine milyonlarcası sığabilirdi.",
    ],
    [
      "Even though she was the first British woman to win a Nobel Prize in science, ----.",
      [
        "a newspaper described her mainly as a housewife",
        "prizes are valuable",
        "science is difficult",
        "Britain is an island",
        "she had determined the structure of insulin after more than thirty years of work",
      ],
      "'Even though' zıtlık ister: bilimde Nobel kazanan ilk İngiliz kadın olsa da bir gazete onu esas olarak bir ev hanımı olarak tanımladı.",
    ],
    [
      "As the particles come from space continuously, ----.",
      [
        "they can be used to study large structures without damaging them",
        "space is large",
        "particles are tiny",
        "stone is heavy",
        "the pyramid was built for a king more than four and a half thousand years ago",
      ],
      "Parçacıklar uzaydan sürekli geldiği için büyük yapıları onlara zarar vermeden incelemekte kullanılabilir.",
    ],
  ],
  enTr: [
    [
      "The microscope used magnetic coils as lenses.",
      [
        "Mikroskop, mercek olarak manyetik bobinler kullanıyordu.",
        "Mikroskop, manyetik bobin yerine cam mercekler kullanıyordu.",
        "Manyetik bobinler, mikroskobun merceklerini bozuyordu.",
        "Mercekler mikroskobu manyetik bobin olarak kullandı.",
        "Mikroskobun merceği yoktu ve hiç çalışmadı.",
      ],
      "'The microscope used' 'mikroskop kullanıyordu', 'magnetic coils as lenses' 'mercek olarak manyetik bobinler' karşılığıdır.",
    ],
    [
      "He arranged the atoms to spell out three letters.",
      [
        "Atomları üç harf oluşturacak biçimde dizdi.",
        "Üç harfi atomlara dönüştürdü.",
        "Atomları dizmeye çalıştı ama hiçbir harf oluşturamadı.",
        "Harfler atomları dizdi.",
        "Hiç atom kullanmadı.",
      ],
      "'He arranged the atoms' 'atomları dizdi', 'to spell out three letters' 'üç harf oluşturacak biçimde' karşılığıdır.",
    ],
    [
      "X-rays passing through the crystal produced a pattern of spots.",
      [
        "Kristalden geçen X-ışınları bir benek deseni oluşturdu.",
        "Kristal, X-ışınlarının geçmesini tamamen engelledi.",
        "Benek deseni, kristalin X-ışınlarını üretmesine yol açtı.",
        "Benekler kristalden X-ışını geçirdi.",
        "Hiç X-ışını kullanılmadı.",
      ],
      "'X-rays passing through the crystal' 'kristalden geçen X-ışınları', 'produced a pattern of spots' 'bir benek deseni oluşturdu' karşılığıdır.",
    ],
    [
      "The method makes transparent structures inside cells visible.",
      [
        "Yöntem, hücrelerin içindeki saydam yapıları görünür hâle getirir.",
        "Yöntem, hücrelerin içindeki görünür yapıları saydam hâle getirir.",
        "Yöntem, hücreleri tamamen yok eder.",
        "Hücreler yöntemi görünür kılar.",
        "Hücrelerin içinde yapı yoktur.",
      ],
      "'The method makes ... visible' 'yöntem görünür hâle getirir', 'transparent structures inside cells' 'hücrelerin içindeki saydam yapıları' karşılığıdır.",
    ],
    [
      "The samples are frozen so quickly that ice crystals cannot form.",
      [
        "Örnekler o kadar hızlı dondurulur ki buz kristalleri oluşamaz.",
        "Örnekler o kadar yavaş eritilir ki buz kristalleri büyür.",
        "Buz kristalleri, örneklerin donmasını engeller.",
        "Kristaller örnekleri hızla dondurur.",
        "Örnekler hiç dondurulmaz.",
      ],
      "'The samples are frozen so quickly' 'örnekler o kadar hızlı dondurulur', 'that ice crystals cannot form' 'ki buz kristalleri oluşamaz' karşılığıdır.",
    ],
    [
      "The empty space is at least thirty metres long.",
      [
        "Boş alan en az otuz metre uzunluğundadır.",
        "Boş alan en fazla üç metre uzunluğundadır.",
        "Otuz metrelik alan tamamen taşla doludur.",
        "Otuz metre boş alanı uzatır.",
        "Hiç boş alan yoktur.",
      ],
      "'The empty space is' 'boş alan ...dır', 'at least thirty metres long' 'en az otuz metre uzunluğunda' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Elektronların dalga boyu ışığınkinden binlerce kat daha kısadır.",
      [
        "The wavelength of electrons is thousands of times shorter than that of light.",
        "The wavelength of light is thousands of times shorter than that of electrons.",
        "Electrons and light have exactly the same wavelength.",
        "Light shortens the electrons.",
        "Electrons have no wavelength.",
      ],
      "'Elektronların dalga boyu' 'the wavelength of electrons', 'ışığınkinden binlerce kat daha kısadır' 'is thousands of times shorter than that of light' karşılığıdır.",
    ],
    [
      "Mikroskobun ucu tek bir atomla sona erer.",
      [
        "The tip of the microscope ends in a single atom.",
        "A single atom ends in the tip of the microscope.",
        "The tip of the microscope is wider than a human hair.",
        "The atom ends the microscope.",
        "The microscope has no tip.",
      ],
      "'Mikroskobun ucu' 'the tip of the microscope', 'tek bir atomla sona erer' 'ends in a single atom' karşılığıdır.",
    ],
    [
      "İnsülinin yapısını belirlemek otuz yıldan fazla sürdü.",
      [
        "It took more than thirty years to determine the structure of insulin.",
        "Insulin took more than thirty years to determine its own structure.",
        "The structure of insulin was determined in a single afternoon.",
        "Thirty years determined insulin.",
        "Insulin has no structure.",
      ],
      "'İnsülinin yapısını belirlemek' 'to determine the structure of insulin', 'otuz yıldan fazla sürdü' 'it took more than thirty years' karşılığıdır.",
    ],
    [
      "Şirket başlangıçta fikri reddetti, ancak daha sonra mikroskobu üretti.",
      [
        "The company at first rejected the idea but later produced the microscope.",
        "The company at first produced the microscope but later rejected the idea.",
        "The company accepted the idea immediately and never changed its mind.",
        "The microscope rejected the company.",
        "There was no company.",
      ],
      "'Şirket başlangıçta fikri reddetti' 'the company at first rejected the idea', 'ancak daha sonra mikroskobu üretti' 'but later produced the microscope' karşılığıdır.",
    ],
    [
      "Kâğıt mikroskop, birkaç dakikada katlanarak bir araya getirilebilir.",
      [
        "The paper microscope can be folded together in a few minutes.",
        "The paper microscope takes several weeks to build.",
        "A few minutes fold the paper together.",
        "The paper microscope cannot be folded.",
        "There is no paper microscope.",
      ],
      "'Kâğıt mikroskop katlanarak bir araya getirilebilir' 'the paper microscope can be folded together', 'birkaç dakikada' 'in a few minutes' karşılığıdır.",
    ],
    [
      "Bilim insanları, piramidin içinde daha önce bilinmeyen büyük bir boşluk buldu.",
      [
        "Scientists found a large, previously unknown space inside the pyramid.",
        "Scientists found that the pyramid was completely solid inside.",
        "The space inside the pyramid found the scientists.",
        "Scientists built a new space inside the pyramid.",
        "There was no pyramid.",
      ],
      "'Bilim insanları buldu' 'scientists found', 'piramidin içinde daha önce bilinmeyen büyük bir boşluk' 'a large, previously unknown space inside the pyramid' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Dorothy Hodgkin was born in Cairo in 1910 and became fascinated by crystals as a child. At the University of Oxford, she took up X-ray crystallography, a technique for working out the arrangement of atoms in a molecule. When a beam of X-rays is passed through a crystal, the regularly arranged atoms scatter the rays, producing a pattern of spots on a photographic film. By measuring the positions and strengths of thousands of these spots and carrying out long calculations, scientists can work backwards to determine the molecule's three-dimensional structure. In the 1940s, the method had been used mainly for fairly simple substances, but Hodgkin applied it to much more complex biological molecules. During the Second World War, she determined the structure of penicillin, which helped chemists understand how it worked and how it might be made artificially. In 1955, after eight years of work, she determined the structure of vitamin B12, a molecule of more than ninety atoms, using one of the first electronic computers to help with the calculations. For this work, she received the Nobel Prize in Chemistry in 1964, becoming the first British woman to win a Nobel Prize in science; a British newspaper reported the news under the headline 'Oxford housewife wins Nobel'. Her greatest challenge was insulin, which she had first studied in 1934. Its structure, which contains nearly eight hundred atoms, was finally solved by her team in 1969, more than thirty years later. Throughout her career, Hodgkin suffered from rheumatoid arthritis, which severely affected her hands, but she continued to work until late in life.",
      questions: [
        [
          "According to the passage, X-ray crystallography works by ----.",
          [
            "analysing the pattern of spots produced when X-rays pass through a crystal",
            "photographing molecules directly",
            "heating crystals until they melt",
            "using an electron microscope to view each atom in the molecule separately",
            "dissolving crystals in water",
          ],
          "Metne göre X-ışınları kristalden geçtiğinde oluşan benek deseninin konumları ve güçleri ölçülüp hesaplanır.",
        ],
        [
          "The writer mentions the newspaper headline in order to show that ----.",
          [
            "her achievement was not treated with the respect it deserved",
            "she was a famous cook",
            "she lived in Cairo",
            "she disliked journalists",
            "she worked at home",
          ],
          "Nobel kazanan ilk İngiliz kadın bilim insanının 'ev hanımı' olarak tanıtılması başarısının hak ettiği saygıyı görmediğini gösterir.",
        ],
        [
          "It can be understood from the passage that Hodgkin's work on insulin ----.",
          [
            "required great persistence over many years",
            "was completed quickly",
            "was her first project",
            "won her the Nobel Prize",
            "was abandoned",
          ],
          "1934'te başladığı çalışma ancak 1969'da, otuz yıldan fazla sonra tamamlandı.",
        ],
      ],
    },
    {
      text:
        "Most living cells are almost completely transparent, so under an ordinary light microscope, they and their internal structures are very difficult to see. For a long time, the usual solution was to stain them with dyes, but most staining methods kill the cells, which means that their living activities cannot be observed. In the early 1930s, the Dutch physicist Frits Zernike found a way around this problem. He realised that, although transparent structures do not absorb much light, they slow it down slightly as it passes through them, so that the light waves emerging from them are slightly out of step, or 'out of phase', with those that pass through the surrounding medium. The human eye cannot detect such differences. Zernike designed a system of special rings and plates inside the microscope that converted these differences in phase into differences in brightness, so that transparent structures appeared light or dark against their background. The method, known as phase contrast microscopy, allowed biologists to watch living cells dividing, moving and responding to their surroundings without staining them. When Zernike first showed his invention to the Zeiss company, a leading maker of microscopes, its experts are said to have dismissed it, seeing no practical use for it. It was not until the Second World War, when German forces were searching for useful technologies, that Zeiss began producing phase contrast microscopes. Zernike received the Nobel Prize in Physics for the invention in 1953, and the technique is still widely used in biology and medicine.",
      questions: [
        [
          "According to the passage, the problem with staining cells is that ----.",
          [
            "it usually kills them",
            "it makes them transparent",
            "dyes are expensive",
            "it changes the light inside the microscope so that nothing can be seen",
            "it makes them move",
          ],
          "Metne göre boyama yöntemlerinin çoğu hücreleri öldürür; canlı etkinlikleri gözlemlenemez.",
        ],
        [
          "Zernike's method works by ----.",
          [
            "turning differences in phase into differences in brightness",
            "adding colour to cells",
            "freezing cells",
            "using electrons",
            "absorbing all the light",
          ],
          "Halka ve plakalar evre farklarını parlaklık farklarına dönüştürür.",
        ],
        [
          "It can be understood from the passage that the Zeiss company ----.",
          [
            "did not immediately recognise the value of the invention",
            "invented the method",
            "refused ever to produce it",
            "paid Zernike a large prize",
            "used it only for stained cells",
          ],
          "Uzmanlarının başta pratik bir kullanım görmeyip buluşu küçümsediği söylenir.",
        ],
      ],
    },
    {
      text:
        "In 2014, Manu Prakash, a bioengineer at Stanford University, introduced a microscope made almost entirely of paper. Called the Foldscope, it is printed on a flat sheet of card, which the user folds into shape in a few minutes, much like origami. A tiny glass sphere acts as the lens, and a small light source can be attached. Depending on the lens, it can magnify objects up to around two thousand times, enough to see individual bacteria and the parasites that cause diseases such as malaria. The materials cost less than a dollar. Prakash got the idea during a visit to field clinics in Thailand, where he saw that expensive laboratory microscopes were often unused because they were too heavy to carry, too difficult to maintain, or had broken. He wanted to create an instrument that was cheap enough to be given away in large numbers and robust enough to survive rough treatment: the Foldscope can be dropped from a building or stepped on without breaking. Since its launch, more than a million have been distributed in over a hundred countries. They have been used by schoolchildren to study insects and pond water, by health workers to examine blood samples, and by farmers to look for diseases in crops. Users have shared their observations online, creating a large community of amateur scientists, and some of their discoveries, such as unusual behaviour in microorganisms, have attracted the attention of professional researchers. Prakash has said that his aim is to make the experience of exploring the microscopic world available to everyone.",
      questions: [
        [
          "According to the passage, Prakash got the idea for the Foldscope when he ----.",
          [
            "saw that expensive microscopes in clinics were often unused",
            "studied origami in Japan",
            "found bacteria in pond water",
            "was asked by farmers to design a cheap way of identifying diseases in their crops",
            "broke his own microscope",
          ],
          "Metne göre Tayland'daki kliniklerde pahalı mikroskopların ağır, bakımı zor ya da bozuk olduğu için kullanılmadığını gördü.",
        ],
        [
          "The writer mentions that the Foldscope can be dropped from a building to show that it is ----.",
          [
            "very robust",
            "very light",
            "very powerful",
            "dangerous",
            "made of glass",
          ],
          "Kaba kullanıma dayanacak kadar sağlamdır.",
        ],
        [
          "It can be understood from the passage that Foldscope users ----.",
          [
            "have sometimes contributed to scientific research",
            "are mostly professional scientists",
            "cannot share their observations",
            "live only in the United States",
            "must pay a high price",
          ],
          "Bazı keşifleri profesyonel araştırmacıların dikkatini çekmiştir.",
        ],
      ],
    },
    {
      text:
        "Proteins and other large molecules in living things carry out their tasks by changing shape, so knowing their exact structure is essential for understanding how they work and for designing drugs. For decades, the main method for determining such structures was X-ray crystallography, which requires the molecules to be formed into crystals, something that is extremely difficult or impossible for many of them. Electron microscopes could in principle show molecules directly, but there were serious problems. The microscope must operate in a vacuum, which causes the water in biological samples to evaporate and the molecules to collapse, and the electron beam itself damages them. Over several decades, three scientists helped to solve these problems. In the 1970s, Joachim Frank developed computer methods to combine thousands of blurred, two-dimensional images of identical molecules lying in different orientations into a single sharp three-dimensional model. In the early 1980s, Jacques Dubochet found a way to freeze the water around the molecules so quickly that it did not form crystals of ice, which would damage them, but instead became a glass-like solid that kept them in their natural shape. Richard Henderson, meanwhile, showed in 1990 that the method could produce images detailed enough to show individual parts of a molecule. Improvements in detectors and computing in the 2010s led to a dramatic increase in the quality of the images, a development sometimes called the 'resolution revolution'. In 2017, all three were honoured with a joint Nobel award for chemistry. The technique, known as cryo-electron microscopy, was used in 2020 to determine the structure of the spike protein of the virus that causes COVID-19 within weeks, helping the development of vaccines.",
      questions: [
        [
          "According to the passage, a problem with X-ray crystallography is that ----.",
          [
            "many molecules cannot easily be made into crystals",
            "it uses a vacuum",
            "it damages molecules with electrons",
            "it produces images that are too sharp for scientists to interpret correctly",
            "it requires freezing",
          ],
          "Metne göre moleküllerin kristal hâline getirilmesi gerekir; bu, pek çoğu için çok zor ya da olanaksızdır.",
        ],
        [
          "Dubochet's contribution was to ----.",
          [
            "freeze water so fast that it did not form damaging ice crystals",
            "write computer programs",
            "invent the electron microscope",
            "study the COVID-19 virus",
            "make crystals of proteins",
          ],
          "Molekülleri çevreleyen suyu buz kristali oluşturmayacak kadar hızlı dondurdu.",
        ],
        [
          "It can be understood from the passage that cryo-electron microscopy ----.",
          [
            "has contributed to medical research",
            "is no longer used",
            "requires crystals",
            "was developed by one person",
            "cannot show proteins",
          ],
          "2020'de virüsün çıkıntı proteininin yapısı birkaç haftada belirlenerek aşı geliştirilmesine yardım edildi.",
        ],
      ],
    },
    {
      text:
        "Every minute, each square metre of the Earth's surface is struck by about ten thousand muons, particles produced when cosmic rays from space collide with atoms high in the atmosphere. Muons can pass through large amounts of matter, but they are gradually absorbed by it, so that fewer muons get through thick, dense material than through empty space. By placing detectors inside or beside a large structure and counting the muons arriving from different directions over a long period, scientists can build up a kind of X-ray image of its interior. In the 1960s, the American physicist Luis Alvarez used this method to search for hidden chambers in a pyramid at Giza, without success. In 2015, an international project called ScanPyramids began to study the Great Pyramid of Khufu, the largest of the Egyptian pyramids, built about four and a half thousand years ago. Three teams, using different types of muon detectors placed in known chambers inside the pyramid and outside it, all detected the same unexpected excess of muons from one direction. In 2017, they announced the discovery of a large empty space, at least thirty metres long, above the Grand Gallery, the pyramid's largest known passage. In 2023, they also confirmed the presence of a smaller corridor behind the pyramid's entrance, which was then examined with a tiny camera inserted through a gap in the stones. The purpose of the large space is still unknown. Some archaeologists believe that it may have been built to reduce the weight of the stones on the gallery below.",
      questions: [
        [
          "According to the passage, muon imaging works because ----.",
          [
            "fewer muons pass through dense material than through empty space",
            "muons are produced inside the pyramid",
            "muons are attracted to stone",
            "the pyramid gives off particles that can be detected by cameras inserted through gaps",
            "muons move very slowly",
          ],
          "Metne göre muonlar madde tarafından yavaş yavaş soğurulur; yoğun malzemeden boş alandan daha az muon geçer.",
        ],
        [
          "The writer mentions Luis Alvarez in order to show that ----.",
          [
            "the method had been tried on pyramids before",
            "the method always fails",
            "he discovered the large void",
            "he built the detectors used in 2015",
            "he was an archaeologist",
          ],
          "1960'larda yöntemi Giza'daki bir piramitte gizli odalar aramak için kullanmıştı.",
        ],
        [
          "It can be understood from the passage that the large empty space ----.",
          [
            "has an unknown purpose",
            "was a burial chamber",
            "was entered by archaeologists",
            "is below the pyramid",
            "was built recently",
          ],
          "Büyük boşluğun amacı hâlâ bilinmemektedir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "For more than a century, scientists believed that light microscopes could never show details smaller than about half the wavelength of light. ---- In 2014, three scientists who had developed such methods shared the Nobel Prize in Chemistry.",
      [
        "From the 1990s, however, researchers developed techniques using glowing molecules that made it possible to overcome this limit.",
        "Light travels very fast.",
        "Microscopes are used in schools.",
        "These techniques allow scientists to follow single molecules inside living cells.",
        "Chemistry is the study of substances.",
      ],
      "Boşluk sınırın aşılmasını anlatıp Nobel'e bağlanan bir cümle gerektirir; boşluğa 1990'lardan itibaren parlayan moleküller kullanan tekniklerle bu sınırın aşılabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1873, the German physicist Ernst Abbe worked out a formula showing the smallest detail that a light microscope can show. ---- His work helped the company he worked for to become one of the leading makers of microscopes in the world.",
      [
        "He also used scientific principles to improve the design of lenses, which until then had been made largely by trial and error.",
        "Germany has many universities.",
        "Formulas are written in mathematics.",
        "His formula is carved on a monument in the city of Jena.",
        "Lenses are made of glass.",
      ],
      "Boşluk şirketin başarısına katkıyı açıklayan bir cümle gerektirir; boşluğa merceklerin tasarımını o zamana dek deneme yanılmayla yapılırken bilimsel ilkelerle geliştirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1957, Marvin Minsky, who later became famous as a pioneer of artificial intelligence, patented a new type of microscope. ---- Such confocal microscopes are now widely used to produce sharp three-dimensional images of cells and tissues.",
      [
        "It used a small opening to block out light from parts of the sample that were not in focus.",
        "Artificial intelligence is a growing field.",
        "Patents protect inventions.",
        "Minsky later said that he never published a paper about it.",
        "Cells are very small.",
      ],
      "Boşluk mikroskobun çalışma ilkesini açıklayan bir cümle gerektirir; boşluğa odakta olmayan bölümlerden gelen ışığı küçük bir açıklıkla engellediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1902, the Austrian chemist Richard Zsigmondy and a colleague developed an instrument that shone a narrow beam of light through a sample from the side. ---- Zsigmondy used it to study tiny particles of gold that give some glass its red colour, work for which he received a Nobel Prize.",
      [
        "Particles too small to be seen directly scattered the light and appeared as bright points against a dark background.",
        "Gold is a precious metal.",
        "Austria is in central Europe.",
        "Similar ideas are used in modern microscopes that image whole small animals.",
        "Glass is made from sand.",
      ],
      "Boşluk aletin nasıl çalıştığını açıklayan bir cümle gerektirir; boşluğa doğrudan görülemeyecek kadar küçük parçacıkların ışığı saçarak karanlık zeminde parlak noktalar olarak göründüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "Large research facilities called synchrotrons accelerate electrons to nearly the speed of light around a ring that may be hundreds of metres across. ---- Scientists use this light to study everything from viruses and new medicines to ancient fossils and paintings.",
      [
        "As the electrons are bent around the ring, they give off extremely bright beams of X-rays and other light.",
        "Light travels in straight lines.",
        "Electrons have a negative charge.",
        "Such facilities are very expensive to build.",
        "Fossils are found in rocks.",
      ],
      "Boşluk 'bu ışık' ifadesine bağlanan bir cümle gerektirir; boşluğa elektronlar halka boyunca bükülürken son derece parlak X-ışını ve başka ışınlar yaydığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2013, researchers at IBM released a short animated film called A Boy and His Atom. ---- To make it, they moved individual molecules on a copper surface and photographed them with a microscope after each movement.",
      [
        "It shows a figure playing with a ball, and every image in it is made of molecules magnified a hundred million times.",
        "Films are shown in cinemas.",
        "Copper is a good conductor of electricity.",
        "It took the team about two weeks to make.",
        "Many people enjoy cartoons.",
      ],
      "Boşluk filmi betimleyip 'bunu yapmak için' ifadesine bağlanan bir cümle gerektirir; boşluğa topla oynayan bir figürü gösterdiğini ve her görüntünün yüz milyon kez büyütülmüş moleküllerden oluştuğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Some microscopes can now image whole small animals, such as young fish, while they are alive.",
        "They illuminate the animal with a thin sheet of light from the side.",
        "This reduces damage and allows the animal to be studied for many hours.",
        "Fish are an important source of food.",
        "Scientists have used the method to watch the activity of every cell in a fish's brain.",
      ],
      odd: 3,
      why: "Parça canlı küçük hayvanları görüntüleyen mikroskopları anlatır. Balıkların önemli bir besin kaynağı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "To see the smallest details, scientists often place a drop of oil between the lens and the slide.",
        "Cooking oil is made from seeds and fruits.",
        "The oil bends light in almost the same way as glass.",
        "This allows more light from the sample to enter the lens.",
        "As a result, the image becomes sharper.",
      ],
      odd: 1,
      why: "Parça mikroskopta mercek ile lam arasına yağ damlatılmasını anlatır. Yemeklik yağın tohum ve meyvelerden yapıldığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Electron microscopes cannot show true colours.",
        "Images made with them are naturally black and white.",
        "Colours are often added later by computer to make details clearer.",
        "Rainbows contain seven main colours.",
        "Viewers should remember that these colours are artificial.",
      ],
      odd: 3,
      why: "Parça elektron mikroskobu görüntülerinin renklerini anlatır. Gökkuşağının yedi ana renk içerdiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Atoms are so small that a single grain of sand contains billions of billions of them.",
        "For a long time, many scientists doubted that atoms really existed.",
        "Today, microscopes can show individual atoms on surfaces.",
        "Beaches are popular places for holidays.",
        "Some can even measure the forces between them.",
      ],
      odd: 3,
      why: "Parça atomların küçüklüğünü ve görüntülenmesini anlatır. Plajların tatil için popüler yerler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Muon detectors have also been used to study the interiors of volcanoes.",
        "Volcanoes are found on every continent.",
        "They can show where molten rock is collecting beneath the summit.",
        "This information may help scientists to predict eruptions.",
        "Researchers in Japan have used the method on several active volcanoes.",
      ],
      odd: 1,
      why: "Parça muon dedektörleriyle yanardağların içinin incelenmesini anlatır. Yanardağların her kıtada bulunduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Scanning electron microscopes produce images that look almost three-dimensional.",
        "They scan a beam of electrons across the surface of a sample.",
        "Insects photographed in this way show every hair and scale in detail.",
        "Samples are usually coated with a thin layer of metal first.",
        "Many insects are pests.",
      ],
      odd: 4,
      why: "Parça taramalı elektron mikroskoplarını anlatır. Pek çok böceğin zararlı olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
