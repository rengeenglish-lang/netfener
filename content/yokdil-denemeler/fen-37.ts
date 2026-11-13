import type { YokdilDeneme } from "./types";

export const FEN_37: YokdilDeneme = {
  no: 37,
  field: "fen",
  vocab: [
    [
      "Merchants found the new numerals far more ---- than Roman numerals for keeping accounts.",
      ["convenient", "decorative", "dangerous", "ancient", "expensive"],
      "Tüccarların yeni rakamları hesap tutmak için Roma rakamlarından çok daha 'kullanışlı' (convenient) bulduğu anlatılır.",
    ],
    [
      "Euler showed that such a walk was ----, because too many land areas had an odd number of bridges.",
      ["impossible", "pleasant", "necessary", "illegal", "popular"],
      "Euler'in, çok fazla kara parçasının tek sayıda köprüsü olduğu için böyle bir yürüyüşün 'imkânsız' (impossible) olduğunu gösterdiği anlatılır.",
    ],
    [
      "For three centuries, the problem ---- the efforts of the world's best mathematicians.",
      ["defeated", "rewarded", "encouraged", "described", "ignored"],
      "Problemin üç yüzyıl boyunca dünyanın en iyi matematikçilerinin çabalarını 'boşa çıkardığı' (defeated) anlatılır.",
    ],
    [
      "Many readers, including some professors, were ---- that the answer was wrong.",
      ["convinced", "delighted", "ashamed", "invited", "forbidden"],
      "Bazı profesörler de dahil pek çok okurun yanıtın yanlış olduğuna 'ikna olduğu' (convinced) anlatılır.",
    ],
    [
      "The paper showed how to measure ---- and how much of it a channel could carry.",
      ["information", "electricity", "distance", "temperature", "weight"],
      "Makalenin 'bilginin' (information) nasıl ölçüleceğini ve bir kanalın ne kadarını taşıyabileceğini gösterdiği anlatılır.",
    ],
    [
      "When the measuring stick is made shorter, the coastline seems to ---- longer and longer.",
      ["turn out", "give up", "look after", "put off", "take over"],
      "Ölçüm çubuğu kısaltıldıkça kıyı şeridinin giderek daha uzun 'çıktığı' (turn out) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Fibonacci ---- the Hindu-Arabic numerals while he was living in North Africa with his father.",
      ["learned", "has learned", "learns", "will learn", "was learned"],
      "Geçmişte tamamlanmış eylem: 'learned'.",
    ],
    [
      "By the time Wiles announced his proof, he ---- on the problem in secret for seven years.",
      ["had been working", "works", "will work", "is working", "has been worked"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been working'.",
    ],
    [
      "If Hardy had ignored the letter, Ramanujan's work ---- unknown for much longer.",
      ["might have remained", "may remain", "remains", "had remained", "will remain"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have remained'.",
    ],
    [
      "Thousands of letters ---- to the magazine after the column was published.",
      ["were sent", "sent", "have sent", "are sending", "will send"],
      "Mektuplar gönderilmiştir; edilgen geçmiş zaman: 'were sent'.",
    ],
    [
      "---- the answer seemed obvious to most readers, it was in fact wrong.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Yanıtın açık görünmesi ile aslında yanlış olması zıttır: 'Although'.",
    ],
    [
      "Euler studied a puzzle about seven bridges ---- connected two islands to the banks of a river.",
      ["that", "who", "whose", "what", "where"],
      "'seven bridges' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
    ],
    [
      "A gap was found in the first version of the proof, ---- took Wiles more than a year to repair.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra 'a gap' ifadesini niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The shorter the ruler, ---- the measured length of the coast becomes.",
      ["the greater", "the greatest", "greater than", "much greater", "so great"],
      "'The shorter ..., the greater ...' paralel yapısı: 'the greater'.",
    ],
    [
      "Not until 1994 ---- a complete proof of Fermat's theorem finally produced.",
      ["was", "did", "had", "has", "were"],
      "'Not until' ile devrik yapı; edilgen geçmiş zaman: 'was'.",
    ],
    [
      "Fibonacci's book showed merchants how to calculate interest ---- convert between currencies.",
      ["and", "or", "but", "nor", "yet"],
      "İki işlemin birlikte gösterildiği anlatılır: 'and'.",
    ],
    [
      "The contestant should switch doors, ---- doing so doubles the chance of winning.",
      ["because", "although", "unless", "whereas", "until"],
      "Kapı değiştirmesi gerektiğinin nedeni şansı ikiye katlamasıdır: 'because'.",
    ],
    [
      "Ramanujan had little formal training, ---- he produced thousands of original results.",
      ["yet", "so", "because", "or", "unless"],
      "Az eğitim alması ile binlerce sonuç üretmesi zıttır: 'yet'.",
    ],
    [
      "Shannon showed that messages can be sent reliably even ---- the channel is noisy.",
      ["if", "unless", "because", "so", "until"],
      "Kanal gürültülü olsa bile anlamındaki 'even if' yapısı: 'if'.",
    ],
    [
      "Fermat claimed that he had a proof, but the margin was too narrow ---- it.",
      ["to contain", "containing", "contain", "contained", "to be contained"],
      "'too ... to do' yapısı: 'to contain'.",
    ],
  ],
  cloze: [
    {
      text:
        "Leonardo of Pisa, better known today as Fibonacci, was born around 1170 into a family of Italian merchants. As a boy he travelled to North Africa, {1} his father worked as a customs official for traders from Pisa, and there he learned the system of numerals that Arab scholars had adopted from India. These numerals, which included a symbol for zero and used the position of each digit to show its value, made calculation far easier than the Roman numerals {2} were still used in Europe. In 1202, Fibonacci published Liber Abaci, or 'The Book of Calculation', which explained the new system and showed how merchants could use it to keep accounts, convert between currencies and calculate interest. The book also contained a problem about the breeding of rabbits, {3} solution produces the sequence 1, 1, 2, 3, 5, 8, 13, where every term is found by adding the previous pair. {4} the advantages of the new numerals, their adoption was slow; in 1299 the city of Florence even banned them from official records, partly because they were thought to be easier to forge. By the sixteenth century, however, they had replaced Roman numerals in most of Europe, {5} the sequence that bears Fibonacci's name is now found in subjects ranging from biology to computer science.",
      blanks: [
        [
          "(21) ----",
          ["where", "which", "when", "whose", "who"],
          "'North Africa' yer bildirdiği için: 'where'.",
        ],
        [
          "(22) ----",
          ["that", "what", "who", "whose", "where"],
          "'the Roman numerals' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(23) ----",
          ["whose", "which", "who", "where", "what"],
          "Problemin çözümü; iyelik ilişkisi: 'whose'.",
        ],
        [
          "(24) ----",
          ["Despite", "Because of", "Thanks to", "Instead of", "According to"],
          "Avantajlarına 'rağmen' benimsenmenin yavaş olduğu anlatılır: 'Despite'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "so"],
          "Rakamların yerleşmesi ve dizinin pek çok alanda bulunması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "During the 1700s, Königsberg, a Prussian city, stood on both banks of the River Pregel as well as on a pair of islands in the river. Seven bridges linked these four pieces of land, and local people liked to challenge each other with a riddle: could anyone stroll around the city using every bridge once and only once? No one had managed to find such a route, {1} no one could prove that it was impossible. In 1736, the Swiss mathematician Leonhard Euler took up the problem. He realised that the exact shapes of the land and the lengths of the bridges did not matter; all {2} counted was which areas were connected to which. He drew the four land areas as dots and joined them with lines standing for the bridges. Euler then showed that a walk crossing every line exactly once is possible only if no more than two points have an odd number of lines meeting at them. {3} each of the four regions of the city was reached by an odd number of bridges, no such walk could exist. Euler's answer marked the birth of graph theory, a field of mathematics {4} is now used to study networks of all kinds, from road systems and electricity grids to the internet and social media. Ironically, two of the original bridges were destroyed {5} the Second World War.",
      blanks: [
        [
          "(26) ----",
          ["but", "so", "because", "or", "unless"],
          "Kimsenin yol bulamaması ile kimsenin imkânsızlığı kanıtlayamaması zıt değil ama ekleme yapan zıtlık bildirir: 'but'.",
        ],
        [
          "(27) ----",
          ["that", "what", "which", "whose", "where"],
          "'all that counted' yapısı: 'that'.",
        ],
        [
          "(28) ----",
          ["Since", "Although", "Unless", "Whereas", "Until"],
          "Yürüyüşün imkânsız olmasının nedeni dört bölgenin tek sayıda köprüsü olmasıdır: 'Since'.",
        ],
        [
          "(29) ----",
          ["that", "who", "whose", "what", "where"],
          "'a branch of mathematics' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(30) ----",
          ["during", "while", "since", "until", "among"],
          "İsim öbeği önünde zaman bildiren edat: 'during'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the new numerals made calculation much easier, ----.",
      [
        "they spread slowly",
        "Fibonacci was born in Pisa",
        "the book was published in 1202",
        "merchants traded with North Africa",
        "the rabbit problem became famous",
      ],
      "'Although' zıtlık ister: yeni rakamlar hesaplamayı çok kolaylaştırsa da bazı Avrupa kentleri onları kabul etmekte yavaş davrandı.",
    ],
    [
      "Euler represented each area of land as a single point ----.",
      [
        "as only links mattered",
        "although the city was in Prussia",
        "unless the river had frozen",
        "so that the bridges were destroyed",
        "while he lived in Switzerland",
      ],
      "Euler, yalnızca bölgeler arasındaki bağlantılar önemli olduğu için her kara parçasını tek bir nokta olarak gösterdi.",
    ],
    [
      "If a mathematician claims to have proved a famous theorem, ----.",
      [
        "other experts must check the proof carefully",
        "Fermat lived in the seventeenth century",
        "the margin was very narrow",
        "Wiles worked at Princeton",
        "many problems remain unsolved",
      ],
      "Birinci tip koşul: bir matematikçi ünlü bir teoremi kanıtladığını iddia ederse diğer uzmanlar kanıtı dikkatle kontrol etmelidir.",
    ],
    [
      "----, Hardy invited Ramanujan to come to Cambridge.",
      [
        "Impressed by the theorems in his letter",
        "Although Madras is in southern India",
        "Unless he had studied at a university",
        "Because he worked as a clerk",
        "Since mathematics is a universal language",
      ],
      "Mektubundaki teoremlerden etkilenen Hardy, Ramanujan'ı Cambridge'e davet etti.",
    ],
    [
      "Switching doors improves the contestant's chances ----.",
      [
        "as the host always shows a goat",
        "although there are only three doors",
        "unless the car is very expensive",
        "so that the column was published",
        "while many readers sent letters",
      ],
      "Kapı değiştirmek, sunucu her zaman arkasında keçi olan bir kapıyı açtığı için yarışmacının şansını artırır.",
    ],
    [
      "Shannon's work made modern digital communication possible ----.",
      [
        "by measuring information",
        "although he also enjoyed juggling",
        "unless telephones were used",
        "because he worked for a telephone company",
        "while computers were very large",
      ],
      "Shannon'ın çalışması bilginin nasıl ölçülebileceğini ve hatalardan korunabileceğini göstererek modern dijital iletişimi mümkün kıldı.",
    ],
    [
      "Not only do fractals describe coastlines, ----.",
      [
        "but they also appear in trees",
        "and Mandelbrot was born in Poland",
        "since computers can draw them",
        "so the coast of Britain is long",
        "unless the ruler is very short",
      ],
      "'Not only ... but also' yapısı tamamlanır: fraktallar yalnızca kıyı şeritlerini tanımlamakla kalmaz, bulutlarda, ağaçlarda ve kan damarlarında da görülür.",
    ],
    [
      "Since logarithms turned multiplication into addition, ----.",
      [
        "they saved much labour",
        "Napier was a Scottish landowner",
        "the book was written in Latin",
        "many people dislike arithmetic",
        "tables were printed in books",
      ],
      "'Since' neden bildirir: logaritmalar çarpmayı toplamaya çevirdiği için gökbilimcilerin ve denizcilerin işini büyük ölçüde azalttı.",
    ],
    [
      "Although Noether made fundamental discoveries, ----.",
      [
        "she was long unpaid",
        "she lived in Germany",
        "symmetry is found in nature",
        "physics depends on mathematics",
        "Hilbert was a famous professor",
      ],
      "'Although' zıtlık ister: Noether temel keşifler yapsa da yıllarca ücretli bir üniversite kadrosundan mahrum bırakıldı.",
    ],
    [
      "Boole's algebra became important a century after his death ----.",
      [
        "when used for circuits",
        "because he was a shoemaker's son",
        "although he taught in Ireland",
        "unless logic is very simple",
        "so that his book was published",
      ],
      "Boole cebiri, mühendisler onu elektronik devre tasarlamak için kullandığında ölümünden bir yüzyıl sonra önem kazandı.",
    ],
    [
      "Unless a proof is checked by other mathematicians, ----.",
      [
        "errors in it may go unnoticed",
        "most mathematicians work alone",
        "theorems are named after people",
        "journals publish many papers",
        "numbers can be very large",
      ],
      "'Unless' olumsuz koşul: bir kanıt diğer matematikçilerce kontrol edilmezse içindeki hatalar fark edilmeyebilir.",
    ],
  ],
  enTr: [
    [
      "In the new system, the position of each digit shows its value.",
      [
        "Yeni sistemde her rakamın konumu onun değerini gösterir.",
        "Yeni sistemde rakamların değeri konumlarından bağımsızdır.",
        "Yeni sistem, rakamların konumunu değiştirmeyi yasaklar.",
        "Her rakamın değeri, yeni sistemde rengine göre belirlenir.",
        "Yeni sistemde yalnızca sıfırın bir değeri vardır.",
      ],
      "'the position of each digit' 'her rakamın konumu', 'shows its value' 'onun değerini gösterir' karşılığıdır.",
    ],
    [
      "Euler saw that the precise outline of each piece of land made no difference to the solution.",
      [
        "Euler, arazinin tam şeklinin yanıtı etkilemediğini fark etti.",
        "Euler, yanıtın arazinin şekline bağlı olduğunu kanıtladı.",
        "Arazinin şekli, Euler'in soruyu çözmesini engelledi.",
        "Euler, arazinin şeklini değiştirmek için köprüler inşa etti.",
        "Yanıt, arazinin tam şekli bilinmeden bulunamazdı.",
      ],
      "'saw that the precise outline of each piece of land' 'arazinin tam şeklinin ... fark etti', 'made no difference to the solution' 'yanıtı etkilemediğini' karşılığıdır.",
    ],
    [
      "He worked on the problem for seven years without telling anyone except his wife.",
      [
        "Eşi dışında kimseye söylemeden yedi yıl boyunca problem üzerinde çalıştı.",
        "Eşiyle birlikte yedi yıl boyunca problemi herkese anlattı.",
        "Yedi yıl sonra problemi eşine ilk kez anlattı.",
        "Eşi, yedi yıl boyunca problem üzerinde onun yerine çalıştı.",
        "Problem üzerinde çalışmayı eşinin isteğiyle yedi yıl sonra bıraktı.",
      ],
      "'worked on the problem for seven years' 'yedi yıl boyunca problem üzerinde çalıştı', 'without telling anyone except his wife' 'eşi dışında kimseye söylemeden' karşılığıdır.",
    ],
    [
      "Many of the results in his notebooks are still being studied by mathematicians today.",
      [
        "Defterlerindeki sonuçların çoğu bugün hâlâ matematikçiler tarafından incelenmektedir.",
        "Defterlerindeki sonuçlar, matematikçiler tarafından hiç incelenmedi.",
        "Matematikçiler, onun defterlerini bugün tamamen unuttu.",
        "Defterleri, yazıldıktan kısa süre sonra kayboldu.",
        "Defterlerindeki sonuçların çoğu, yazıldıktan kısa süre sonra matematikçiler tarafından tamamen unutuldu.",
      ],
      "'Many of the results in his notebooks' 'defterlerindeki sonuçların çoğu', 'are still being studied' 'hâlâ incelenmektedir' karşılığıdır.",
    ],
    [
      "Even some trained mathematicians refused to accept the correct answer.",
      [
        "Eğitimli bazı matematikçiler bile doğru yanıtı kabul etmeyi reddetti.",
        "Yalnızca eğitimli matematikçiler doğru yanıtı buldu.",
        "Matematikçiler, yanıtın doğru olduğunu hemen kabul etti.",
        "Doğru yanıt, matematikçiler tarafından reddedildikten sonra değiştirildi.",
        "Hiçbir matematikçi soruya yanıt vermek istemedi.",
      ],
      "'Even some trained mathematicians' 'eğitimli bazı matematikçiler bile', 'refused to accept the correct answer' 'doğru yanıtı kabul etmeyi reddetti' karşılığıdır.",
    ],
    [
      "The measured length of a coastline depends on the size of the ruler used.",
      [
        "Bir kıyı şeridinin ölçülen uzunluğu, kullanılan cetvelin boyuna bağlıdır.",
        "Bir kıyı şeridinin uzunluğu, cetvelin boyundan bağımsızdır.",
        "Cetvelin boyu, kıyı şeridinin uzunluğuna göre belirlenir.",
        "Kıyı şeritleri, cetvelle ölçülemeyecek kadar kısadır.",
        "Bir kıyı şeridinin ölçülen uzunluğu, cetvelin boyuna değil kıyının yüksekliğine bağlıdır.",
      ],
      "'The measured length of a coastline' 'bir kıyı şeridinin ölçülen uzunluğu', 'depends on the size of the ruler used' 'kullanılan cetvelin boyuna bağlıdır' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Floransa, sahteciliğin kolay olacağı korkusuyla yeni rakamları resmî kayıtlarda yasakladı.",
      [
        "Florence banned the new numerals from official records for fear that forgery would be easy.",
        "Florence introduced the new numerals to make forgery more difficult.",
        "Forgers in Florence refused to use the new numerals.",
        "Official records in Florence were written only in the new numerals.",
        "Florence banned Roman numerals from official records because officials feared that they were too easy to forge.",
      ],
      "'sahteciliğin kolay olacağı korkusuyla' 'for fear that forgery would be easy', 'resmî kayıtlarda yasakladı' 'banned from official records' karşılığıdır.",
    ],
    [
      "Çizge kuramı bugün yol sistemlerinden internete kadar her türlü ağı incelemek için kullanılıyor.",
      [
        "Graph theory is used today to study all kinds of networks, from road systems to the internet.",
        "Graph theory was used only to study the bridges of one city.",
        "The internet was invented in order to study graph theory.",
        "Road systems cannot be studied using mathematics.",
        "Graph theory is used today only to study road systems, and it has no other practical applications.",
      ],
      "'Çizge kuramı' 'graph theory', 'yol sistemlerinden internete kadar her türlü ağı incelemek için' 'to study all kinds of networks, from road systems to the internet' karşılığıdır.",
    ],
    [
      "İlk kanıttaki bir hatanın düzeltilmesi bir yıldan fazla sürdü.",
      [
        "Correcting an error in the first proof took more than a year.",
        "The first proof contained no errors at all.",
        "An error was introduced into the proof after a year.",
        "The proof was abandoned because the error could not be corrected.",
        "It took a year to find the first proof.",
      ],
      "'İlk kanıttaki bir hatanın düzeltilmesi' 'correcting an error in the first proof', 'bir yıldan fazla sürdü' 'took more than a year' karşılığıdır.",
    ],
    [
      "Neredeyse hiç örgün eğitim almamasına rağmen binlerce özgün sonuç üretti.",
      [
        "Although he had almost no formal education, he produced thousands of original results.",
        "Because he had a good education, he produced thousands of results.",
        "He produced few results because he lacked formal education.",
        "His formal education took thousands of hours.",
        "Although he had a good formal education, he produced only a small number of original results.",
      ],
      "'Neredeyse hiç örgün eğitim almamasına rağmen' 'although he had almost no formal education', 'binlerce özgün sonuç üretti' 'produced thousands of original results' karşılığıdır.",
    ],
    [
      "Kapıyı değiştiren bir yarışmacının arabayı kazanma şansı üçte ikidir.",
      [
        "A contestant who switches doors has a two-in-three chance of winning the car.",
        "A contestant who switches doors always loses the car.",
        "Switching doors makes no difference to the chance of winning.",
        "The car is behind the second door two times out of three.",
        "A contestant who stays with the first door has a two-in-three chance of winning the car.",
      ],
      "'Kapıyı değiştiren bir yarışmacının' 'a contestant who switches doors', 'arabayı kazanma şansı üçte ikidir' 'has a two-in-three chance of winning the car' karşılığıdır.",
    ],
    [
      "Bu karmaşık şekiller, her ölçekte benzer desenler gösterir.",
      [
        "These complex shapes show similar patterns at every scale.",
        "These complex shapes look completely different at every scale.",
        "Similar patterns can be found only at large scales.",
        "These shapes are too complex to be drawn by computers.",
        "Patterns disappear when these shapes are enlarged.",
      ],
      "'Bu karmaşık şekiller' 'these complex shapes', 'her ölçekte benzer desenler gösterir' 'show similar patterns at every scale' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In about 1637, Pierre de Fermat, a lawyer from France who studied mathematics as a hobby, scribbled a short note in the margin of his copy of an ancient Greek book on numbers. He stated that no three positive whole numbers can satisfy the equation a to the power n plus b to the power n equals c to the power n for any power higher than two, and claimed to have found 'a truly marvellous proof' for which there was not enough room on the page. The note was found after his death, and for more than three hundred years mathematicians tried and failed to find the proof. Andrew Wiles first read about the problem while borrowing books from his local library in 1963, when he was only ten, and resolved that one day he would crack it. Decades later, as a professor at Princeton University, he worked on it in secret for seven years, telling almost no one. In June 1993, at the end of a series of lectures in Cambridge, he announced that he had proved the theorem, causing a sensation. A few months later, however, a colleague checking the proof found a serious gap. With the help of his former student Richard Taylor, Wiles repaired it in September 1994. It is widely thought today that Fermat was mistaken about his own proof, since Wiles's solution relied on advanced methods developed only in the twentieth century.",
      questions: [
        [
          "According to the passage, Fermat's note became known ----.",
          [
            "only after he had died",
            "when he published it in a journal",
            "during his lectures in Cambridge",
            "after Wiles found it in a library",
            "when he sent it to other mathematicians",
          ],
          "Metne göre not Fermat'nın ölümünden sonra bulundu.",
        ],
        [
          "The gap in Wiles's first proof ----.",
          [
            "was discovered by someone checking his work",
            "was noticed by Wiles during his lecture",
            "made him abandon the problem",
            "was repaired within a few days",
            "had been pointed out by Fermat",
          ],
          "Kanıtı kontrol eden bir meslektaş ciddi bir boşluk buldu.",
        ],
        [
          "It can be inferred from the passage that most mathematicians doubt Fermat's claim because ----.",
          [
            "the methods needed did not exist in his time",
            "Fermat was only an amateur",
            "the margin was too small",
            "Wiles's proof was very short",
            "the theorem turned out to be false",
          ],
          "Wiles'ın çözümü yalnızca yirminci yüzyılda geliştirilen ileri yöntemlere dayanıyordu.",
        ],
      ],
    },
    {
      text:
        "Early in 1913, G. H. Hardy, who taught mathematics at Cambridge, received a long letter from Srinivasa Ramanujan, who at twenty-five was employed as a clerk by the harbour authority in Madras. Ramanujan had had little formal training in mathematics and had failed his university examinations because he neglected every subject except mathematics. His letter contained about a hundred and twenty theorems, presented without proofs. Some were already known, and a few were wrong, but others were so strange and original that Hardy felt that nobody could have imagined them unless they were correct. Hardy arranged for Ramanujan to come to Cambridge, and the two men worked together for five years, producing important results in the theory of numbers. Ramanujan often seemed to arrive at results through intuition, and Hardy had to persuade him of the importance of rigorous proof. In England, Ramanujan suffered from the cold climate, the difficulty of finding vegetarian food and serious illness. In 1918 he became one of the youngest Fellows of the Royal Society. He returned to India the following year and died in 1920, at the age of only thirty-two. His notebooks, containing thousands of results, are still being studied today.",
      questions: [
        [
          "The passage explains that Ramanujan did badly in his university examinations because ----.",
          [
            "he paid attention only to mathematics",
            "he was too ill to attend",
            "he could not afford the fees",
            "his English was not good enough for the examinations",
            "he was working as a clerk",
          ],
          "Metne göre matematik dışındaki her dersi ihmal etti.",
        ],
        [
          "Hardy's reaction to the theorems suggests that he ----.",
          [
            "was struck by their originality",
            "thought they were all well known",
            "believed they were copied from books",
            "found them easy to prove",
            "doubted Ramanujan's honesty",
          ],
          "Hardy teoremlerin kimsenin uyduramayacağı kadar özgün olduğunu düşündü.",
        ],
        [
          "It can be understood from the passage that Ramanujan and Hardy differed in that ----.",
          [
            "Hardy placed more emphasis on formal proof",
            "Ramanujan was more interested in proofs",
            "Hardy worked mainly by intuition",
            "Ramanujan disliked number theory",
            "Hardy had less training",
          ],
          "Hardy Ramanujan'ı titiz kanıtın önemine ikna etmek zorundaydı.",
        ],
      ],
    },
    {
      text:
        "In September 1990, the American columnist Marilyn vos Savant answered a reader's question in her popular magazine column. The question was based on a television game show. A player faces three closed doors: a car is hidden behind one of them and a goat behind each of the others. The contestant chooses a door. The host, who knows where the car is, then opens one of the other two doors to reveal a goat and offers the contestant the chance to switch to the remaining closed door. Should the contestant switch? Vos Savant replied that the contestant should switch, because doing so gives a two-thirds chance of winning the car, compared with one-third for staying. The response was extraordinary. She received around ten thousand letters, nearly a thousand of them from people with doctorates, many insisting that she was wrong and that the chances were equal. Even the famous mathematician Paul Erdős is said to have remained unconvinced until he was shown a computer simulation. The key to the puzzle is that the host's action is not random: he always opens a door hiding a goat. The door picked at the start is correct only once in every three games, and that probability does not change when the host opens a door, so the remaining door must have a two-in-three chance.",
      questions: [
        [
          "According to the passage, most of the letters vos Savant received ----.",
          [
            "argued that her answer was mistaken",
            "praised her for her clear explanation",
            "came from television producers",
            "asked for a second question",
            "contained computer simulations",
          ],
          "Metne göre mektupların çoğu yanıtının yanlış olduğunu ve şansların eşit olduğunu savunuyordu.",
        ],
        [
          "The writer mentions Paul Erdős in order to show that ----.",
          [
            "even experts found the answer hard to accept",
            "mathematicians always agree",
            "the problem had been solved long before",
            "computer simulations are unreliable",
            "he invented the puzzle",
          ],
          "Ünlü bir matematikçinin bile ikna olmaması yanıtın uzmanlar için bile kabul edilmesinin zor olduğunu gösterir.",
        ],
        [
          "According to the passage, the key to the puzzle is that ----.",
          [
            "the host's choice of door is not random",
            "the car is always behind the third door",
            "the contestant can see through the doors",
            "the host opens a door at random",
            "goats are more valuable than cars",
          ],
          "Sunucu her zaman keçinin olduğu kapıyı açar; eylemi rastgele değildir.",
        ],
      ],
    },
    {
      text:
        "In 1948, Claude Shannon, a young mathematician and engineer working at Bell Telephone Laboratories in the United States, published a paper titled 'A Mathematical Theory of Communication'. Before Shannon, engineers had thought about communication mainly in terms of particular technologies, such as telegraph wires or radio waves. Shannon showed that information itself could be measured, independently of its meaning or of the method used to send it. He proposed a basic unit, the 'bit', short for 'binary digit', representing a choice between two equally likely possibilities, such as yes or no, or 0 and 1. He then showed that every communication channel, whether a telephone line or a radio link, has a maximum rate at which information can be transmitted through it. Most surprisingly, he proved that, as long as messages are sent below this rate, they can be transmitted with almost no errors even over a noisy channel, provided that they are encoded cleverly with extra information that allows mistakes to be detected and corrected. These ideas laid the foundations for mobile phones, the internet, data storage and space communication. Shannon was also known for his playful inventions, including a mechanical mouse that could find its way through a maze and a machine whose only function was to switch itself off.",
      questions: [
        [
          "According to the passage, before Shannon, engineers thought about communication mainly in terms of ----.",
          [
            "specific technologies",
            "the meaning of messages",
            "the bit as a unit",
            "mathematical theories",
            "computer programs",
          ],
          "Metne göre mühendisler iletişimi esas olarak telgraf ya da radyo gibi belirli teknolojiler açısından düşünüyordu.",
        ],
        [
          "Shannon showed that messages can be sent almost without errors ----.",
          [
            "if they are encoded with extra information",
            "only over very quiet channels",
            "when they contain no bits",
            "if they are sent as fast as possible",
            "only by radio",
          ],
          "Hataların bulunup düzeltilmesini sağlayan ek bilgiyle kodlanırsa gürültülü kanalda bile hatasız gönderilebilir.",
        ],
        [
          "The writer mentions Shannon's playful inventions in order to ----.",
          [
            "show another side of his character",
            "explain how the internet works",
            "prove that his theory was wrong",
            "describe the work of Bell Laboratories",
            "suggest that he disliked serious work",
          ],
          "Oyuncu icatları onun kişiliğinin başka bir yönünü gösterir.",
        ],
      ],
    },
    {
      text:
        "A short paper published by Benoit Mandelbrot in 1967 carried a deceptively simple title: 'How Long Is the Coast of Britain?' Mandelbrot explained that any answer is tied to the size of the measuring stick. If you measure the coast with a ruler one hundred kilometres long, you will miss many bays and headlands and obtain a relatively short figure. With a ruler of one kilometre, you can follow more of the twists and turns, and the total becomes longer. With a ruler of one metre, it becomes longer still, because you can follow the outline of individual rocks. In principle, the measured length keeps increasing as the ruler becomes smaller. Mandelbrot argued that coastlines, like many natural objects, are 'self-similar': their irregular patterns look much the same whether viewed from an aircraft or examined at close range. In 1975 he introduced the word 'fractal' to describe such shapes, and with the help of computers he produced striking images of mathematical fractals, including the famous Mandelbrot set. Fractals have since been used to describe clouds, mountains, river networks, the branching of trees and blood vessels, and even fluctuations in financial markets, and they are used in computer graphics to create realistic landscapes.",
      questions: [
        [
          "According to the passage, a shorter ruler gives a longer measurement because ----.",
          [
            "it can follow smaller details of the coast",
            "it is more accurate than a long ruler",
            "coastlines are always growing",
            "it is easier to carry",
            "the sea level changes",
          ],
          "Metne göre kısa cetvel kıyının daha küçük kıvrımlarını izleyebilir.",
        ],
        [
          "The term 'self-similar' refers to shapes that ----.",
          [
            "look much the same at different scales",
            "are perfectly smooth",
            "can be measured exactly",
            "exist only in mathematics",
            "change completely when enlarged",
          ],
          "Düzensiz desenleri uçaktan da yakından da hemen hemen aynı görünür.",
        ],
        [
          "It can be inferred from the passage that fractals ----.",
          [
            "have applications far beyond coastlines",
            "can be drawn only by hand",
            "were invented before 1900",
            "describe only financial markets",
            "are unrelated to nature",
          ],
          "Fraktallar bulutlardan finans piyasalarına kadar pek çok alanda kullanılmıştır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 628, the Indian mathematician Brahmagupta wrote a book on astronomy and mathematics. ---- For example, he stated that a number minus itself equals zero, and he described negative numbers as debts and positive numbers as fortunes.",
      [
        "In it, he handled zero as a genuine number and set out rules for using it in sums.",
        "India has a long tradition of astronomy.",
        "Many books of that period were written on palm leaves.",
        "Astronomers used mathematics to predict eclipses.",
        "Some numbers are so large that they are difficult to write down.",
      ],
      "Boşluktan sonra 'For example' ile sıfırla ilgili kurallar örneklenir; boşluğa kitabında sıfırı başlı başına bir sayı olarak ele aldığını ve hesap kuralları verdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1614, the Scottish landowner John Napier published tables of what he called logarithms. ---- One French mathematician later remarked that the invention had doubled the working lives of astronomers.",
      [
        "They allowed long multiplications to be replaced by simple additions, saving enormous amounts of time.",
        "Scotland has many old castles.",
        "Landowners were often interested in farming.",
        "Astronomers study the stars and planets.",
        "Mathematical tables were printed using movable type and sold widely.",
      ],
      "Boşluktan sonra icadın gökbilimcilerin çalışma ömrünü ikiye katladığı söylenir; boşluğa logaritmaların uzun çarpmaları toplamaya çevirerek büyük zaman kazandırdığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the late seventeenth century, Isaac Newton and Gottfried Leibniz both developed the mathematical methods now known as calculus. ---- The bitter dispute that followed divided British and European mathematicians for decades.",
      [
        "Each accused the other of having stolen his ideas.",
        "Newton was born in a small English village.",
        "Leibniz also worked as a diplomat.",
        "Calculus is taught in many universities.",
        "Mathematics was popular at that time.",
      ],
      "Boşluktan sonra 'The bitter dispute' denir; boşluğa her birinin diğerini fikirlerini çalmakla suçladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1915, the German mathematician Emmy Noether proved a theorem that physicists now rank among the deepest results in their subject. ---- Thus, because physical laws stay the same from one moment to the next, energy can be neither created nor destroyed.",
      [
        "It showed that every symmetry in nature corresponds to a quantity that is conserved.",
        "Germany had many famous universities.",
        "Physics is the study of matter and energy.",
        "Noether was the daughter of a mathematician.",
        "Energy can be stored in batteries and released when it is needed.",
      ],
      "Boşluktan sonra 'For example' ile simetri ile korunan nicelik ilişkisi örneklenir; boşluğa teoremin doğadaki her simetrinin korunan bir niceliğe karşılık geldiğini gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1854, the largely self-taught English mathematician George Boole published a book in which he expressed logical statements as algebraic equations. ---- In 1937, the engineer Claude Shannon showed that Boole's methods could be used to design electrical switching circuits, laying the foundation for digital computers.",
      [
        "For many years, his work was regarded as an interesting but impractical curiosity.",
        "Boole later taught at a college in Ireland.",
        "Algebra uses letters to represent numbers.",
        "Many mathematicians were self-taught.",
        "Electricity was not widely used in homes or factories in 1854.",
      ],
      "Boşluktan sonra 1937'de yöntemlerin pratik bir kullanım bulduğu anlatılır; boşluğa çalışmasının uzun yıllar ilginç ama pratik olmayan bir merak olarak görüldüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "The English minister Thomas Bayes developed a method for updating the probability of an idea in the light of new evidence. ---- Today Bayes' theorem is used in fields as varied as medical diagnosis, spam filters and artificial intelligence.",
      [
        "His essay on the subject was published in 1763, two years after his death, by a friend.",
        "England had many churches in the eighteenth century.",
        "Ministers often wrote sermons.",
        "Probability is studied in schools.",
        "Some ideas are difficult to prove even with a great deal of evidence.",
      ],
      "Boşluktan sonra teoremin bugünkü kullanım alanları anlatılır; boşluğa konuyla ilgili makalesinin ölümünden iki yıl sonra bir arkadaşı tarafından yayımlandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A Möbius strip can be made by giving a strip of paper half a twist and joining its ends.",
        "The resulting shape has only one side and one edge.",
        "Origami, the art of folding paper, developed in Japan.",
        "If it is cut along its centre line, it does not fall into two pieces but forms a single longer loop.",
        "Such strips have been used in conveyor belts so that both surfaces wear evenly.",
      ],
      odd: 2,
      why: "Parça Möbius şeridini anlatır. kâğıt katlama sanatı origaminin Japonya'da geliştiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "According to the four colour theorem, four colours are always enough to fill in a map without giving two bordering regions the same colour.",
        "The problem was first posed in 1852.",
        "In 1976, two mathematicians finally proved it with the help of a computer that checked hundreds of cases.",
        "Maps were once drawn by hand on large sheets of paper.",
        "Some mathematicians were uncomfortable with a proof that no human could check completely.",
      ],
      odd: 3,
      why: "Parça dört renk teoremini anlatır. Haritaların bir zamanlar büyük kâğıtlara elle çizildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2002 and 2003, the Russian mathematician Grigori Perelman posted online a proof of the Poincaré conjecture, a famous problem about the shape of space.",
        "After years of checking, experts confirmed that his proof was correct.",
        "St Petersburg is famous for its museums and canals.",
        "Perelman declined the Fields Medal, one of the highest honours in mathematics.",
        "He later also refused a prize of one million dollars.",
      ],
      odd: 2,
      why: "Parça Perelman'ı anlatır. St. Petersburg'un müzeleri ve kanallarıyla ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Hungarian mathematician Paul Erdős wrote or co-wrote around 1,500 research papers.",
        "He had no permanent home and travelled constantly with a small suitcase, staying with colleagues.",
        "Many people enjoy travelling during their holidays.",
        "Mathematicians still describe their distance from him in terms of an 'Erdős number'.",
        "Someone who wrote a paper with him has an Erdős number of one.",
      ],
      odd: 2,
      why: "Parça Paul Erdős'ü anlatır. Pek çok kişinin tatillerinde seyahat etmekten hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sofia Kovalevskaya was born in Moscow in 1850.",
        "Since Russian universities did not admit women, she studied privately in Germany.",
        "In 1874 she became the first woman in modern Europe to receive a doctorate in mathematics.",
        "Moscow is the largest city in Russia.",
        "She later became a professor at Stockholm University.",
      ],
      odd: 3,
      why: "Parça Sofia Kovalevskaya'yı anlatır. Moskova'nın Rusya'nın en büyük kenti olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Rhind Papyrus is an Egyptian mathematical text copied by a scribe around 1550 BC.",
        "It contains problems involving fractions, areas and the volumes of grain stores.",
        "It shows that Egyptian scribes used practical methods to solve everyday problems.",
        "It was bought in Egypt in 1858 by a Scottish lawyer and is now in the British Museum.",
        "The pyramids are among the most famous monuments in the world.",
      ],
      odd: 4,
      why: "Parça Rhind Papirüsü'nü anlatır. Piramitlerin dünyanın en ünlü anıtları arasında olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
