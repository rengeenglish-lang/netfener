import type { YokdilDeneme } from "./types";

export const FEN_35: YokdilDeneme = {
  no: 35,
  field: "fen",
  vocab: [
    [
      "The new star was so bright that it could be seen even in ---- daylight.",
      ["broad", "narrow", "weak", "artificial", "shallow"],
      "Yeni yıldızın o kadar parlak olduğu ki 'güpegündüz' (broad daylight) bile görülebildiği anlatılır.",
    ],
    [
      "Einstein initially ---- the idea that the universe might be expanding.",
      ["rejected", "invented", "measured", "celebrated", "photographed"],
      "Einstein'ın evrenin genişliyor olabileceği fikrini başta 'reddettiği' (rejected) anlatılır.",
    ],
    [
      "Above a certain mass, a dying star cannot ---- its own weight and must collapse.",
      ["support", "measure", "reduce", "release", "reflect"],
      "Belirli bir kütlenin üzerinde ölmekte olan bir yıldızın kendi ağırlığını 'taşıyamayıp' (support) çökmek zorunda kaldığı anlatılır.",
    ],
    [
      "Gauss developed a new method that allowed astronomers to ---- the orbit of the lost object from only a few observations.",
      ["calculate", "decorate", "abandon", "forbid", "imitate"],
      "Gauss'un gökbilimcilerin kayıp cismin yörüngesini yalnızca birkaç gözlemden 'hesaplamasına' (calculate) olanak tanıyan yeni bir yöntem geliştirdiği anlatılır.",
    ],
    [
      "The signal was never ---- again, despite many attempts to find it.",
      ["detected", "invented", "explained", "transmitted", "forgotten"],
      "Bulmak için pek çok girişime rağmen sinyalin bir daha hiç 'algılanmadığı' (detected) anlatılır.",
    ],
    [
      "The explosion ---- millions of trees across a huge stretch of forest.",
      ["knocked down", "looked after", "gave up", "made up", "took after"],
      "Patlamanın iki bin kilometrekareden geniş bir alanda milyonlarca ağacı 'devirdiği' (knocked down) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Tycho ---- home from his laboratory when he noticed a bright new star.",
      ["was walking", "has walked", "walks", "will walk", "had been walked"],
      "Geçmişte süren bir eylem sırasında başka bir olay olmuştur: 'was walking'.",
    ],
    [
      "By the time Hubble published his results, Lemaître ---- a similar conclusion.",
      ["had already reached", "already reaches", "will already reach", "is already reaching", "has already been reached"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had already reached'.",
    ],
    [
      "If Eddington had supported Chandrasekhar, his idea ---- accepted much sooner.",
      ["might have been", "may be", "is", "had been", "will be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have been'.",
    ],
    [
      "Several similar objects ---- between Mars and Jupiter within a few years of the discovery of Ceres.",
      ["were found", "found", "have found", "are finding", "will find"],
      "Cisimler bulunmuştur; edilgen geçmiş zaman: 'were found'.",
    ],
    [
      "---- Drake listened for about 150 hours, he detected no signals from other civilisations.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "150 saat dinlemesi ile sinyal algılamaması zıttır: 'Although'.",
    ],
    [
      "The volunteer ---- noticed the signal wrote a single word in the margin of the printout.",
      ["who", "which", "whose", "whom", "where"],
      "'The volunteer' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "No crater was ever found at the site, ---- suggested that the object had exploded in the air.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more massive a white dwarf is, ---- it becomes.",
      ["the smaller", "the smallest", "smaller than", "much smaller", "so small"],
      "'The more ..., the smaller ...' paralel yapısı: 'the smaller'.",
    ],
    [
      "Not until 1927 ---- a scientific expedition reach the remote site of the explosion.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Tycho's measurements showed that the new star was much farther away ---- the Moon.",
      ["than", "as", "from", "to", "of"],
      "'farther away than' karşılaştırma yapısı: 'than'.",
    ],
    [
      "Astronomers lost sight of the object ---- it passed behind the Sun.",
      ["when", "unless", "although", "so that", "whereas"],
      "Güneş'in arkasından geçtiğinde gözden kaybolduğu anlatılır; zaman bildiren bağlaç: 'when'.",
    ],
    [
      "The black hole is so massive ---- not even light can escape from it.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The scientists wished they ---- a second, more sensitive telescope pointed at the same spot.",
      ["had had", "have", "are having", "would", "have had"],
      "Geçmişle ilgili pişmanlık bildiren 'wish' yapısı: 'had had'.",
    ],
    [
      "It is essential that an asteroid's orbit ---- calculated accurately if it is to be found again.",
      ["be", "is being", "was been", "to be", "being"],
      "'It is essential that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "On the evening of 11 November 1572, the young Danish nobleman Tycho Brahe was walking home when he noticed a brilliant star in the constellation Cassiopeia, where no star had been visible before. It was brighter than Venus and remained visible for about eighteen months, {1} it gradually faded. At the time, most scholars followed Aristotle in believing that the heavens beyond the Moon were perfect and unchanging, so any new object was assumed to be close to the Earth. Tycho measured the position of the star night after night with great care. If it had been nearby, its position would have appeared to shift against the background stars as the Earth turned, {2} he could detect no such movement. He concluded that the new star lay far beyond the Moon, among the fixed stars, {3} meant that the heavens could change after all. His short book on the subject made him famous, and the King of Denmark gave him an island {4} he built Uraniborg, one of the finest observatories of the age. Over the next twenty years, Tycho made the most accurate observations possible without a telescope, {5} were later used by Johannes Kepler to discover the laws of planetary motion.",
      blanks: [
        [
          "(21) ----",
          ["before", "after", "since", "unless", "while"],
          "Yaklaşık on sekiz ay görülebilir kaldıktan sonra sönmeden 'önce' anlamında: 'before'.",
        ],
        [
          "(22) ----",
          ["but", "so", "because", "or", "unless"],
          "Yakın olsaydı konumunun kaymasının beklenmesi ile kayma görememesi zıttır: 'but'.",
        ],
        [
          "(23) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(24) ----",
          ["where", "which", "when", "whose", "who"],
          "'an island' yer bildirdiği için: 'where'.",
        ],
        [
          "(25) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra gözlemleri niteleyen ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "In 1927, Georges Lemaître, a Belgian Catholic priest who was also a trained physicist, published a paper in a little-known Belgian journal. Using Einstein's theory of general relativity, together with observations showing that distant galaxies appear to be moving away from us, he argued that the universe is expanding, and he even estimated the rate of expansion. Because the paper was written in French and published in an obscure place, it attracted little attention. {1}, Einstein himself, {2} met Lemaître at a conference that year, told him that his mathematics was correct but his physics was 'abominable'. Two years later, the American astronomer Edwin Hubble published observations {3} confirmed that the more distant a galaxy is, the faster it is receding, and the idea of an expanding universe became widely accepted. In 1931, Lemaître went further, proposing that the universe had begun from a single 'primeval atom' {4} had exploded, an idea that developed into the Big Bang theory. In 2018, the International Astronomical Union recommended that the law describing the expansion of the universe should be renamed the Hubble–Lemaître law, {5} recognition of his earlier contribution.",
      blanks: [
        [
          "(26) ----",
          ["Moreover", "However", "Therefore", "Similarly", "Instead"],
          "Az ilgi görmesine ek olarak Einstein'ın da eleştirdiği anlatılır: 'Moreover'.",
        ],
        [
          "(27) ----",
          ["who", "which", "whose", "whom", "where"],
          "Virgüller arasında Einstein'ı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(28) ----",
          ["that", "what", "who", "whose", "where"],
          "'observations' sözcüğünü niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(29) ----",
          ["that", "what", "who", "whose", "where"],
          "'a single primeval atom' ifadesini niteleyen ilgi zamiri: 'that'.",
        ],
        [
          "(30) ----",
          ["in", "on", "for", "by", "at"],
          "'in recognition of' kalıbı: 'in'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although most scholars believed the heavens never changed, ----.",
      [
        "Tycho found a new star far away",
        "the star was in the constellation Cassiopeia",
        "Tycho was a Danish nobleman",
        "Venus is very bright in the evening",
        "Kepler later used Tycho's data",
      ],
      "'Although' zıtlık ister: çoğu bilgin göklerin değişmediğine inansa da Tycho Ay'ın çok ötesinde yeni bir yıldız belirdiğini gösterdi.",
    ],
    [
      "Lemaître's paper attracted little attention at first ----.",
      [
        "because it appeared in an obscure journal",
        "although he was a priest",
        "unless Einstein had read it",
        "so that Hubble published his results",
        "while the universe was expanding",
      ],
      "Lemaître'in makalesi tanınmayan bir dergide çıktığı için başlangıçta az ilgi gördü.",
    ],
    [
      "If a white dwarf is heavier than about 1.4 times the mass of the Sun, ----.",
      [
        "it cannot resist collapse under its own gravity",
        "Chandrasekhar travelled from India",
        "the calculation was made on a ship",
        "Eddington was a famous astronomer",
        "many stars end their lives as white dwarfs",
      ],
      "Birinci tip koşul: bir beyaz cüce Güneş'in kütlesinin yaklaşık 1,4 katından ağırsa kendi kütleçekimi altında çökmeye direnemez.",
    ],
    [
      "----, Gauss worked out where Ceres would reappear.",
      [
        "Using only a few weeks of observations",
        "Although the asteroid belt is very wide",
        "Unless Piazzi had found it first",
        "Because Ceres is a dwarf planet",
        "Since Palermo is in Sicily",
      ],
      "Yalnızca birkaç haftalık gözlem kullanarak Gauss Ceres'in nerede yeniden görüneceğini hesapladı.",
    ],
    [
      "Drake chose to listen to two nearby stars ----.",
      [
        "because they were similar to the Sun",
        "although the telescope was in West Virginia",
        "unless other astronomers had objected",
        "so that the equation was written later",
        "while radio waves travel at the speed of light",
      ],
      "Drake, Güneş'e benzedikleri için yakındaki iki yıldızı dinlemeyi seçti.",
    ],
    [
      "The famous signal remains a mystery ----.",
      [
        "because it has never been observed again",
        "although it lasted for 72 seconds",
        "unless it came from Sagittarius",
        "so that the volunteer wrote a word",
        "while the telescope was in Ohio",
      ],
      "Ünlü sinyal bir daha hiç gözlemlenmediği için gizem olmaya devam ediyor.",
    ],
    [
      "Not only did the Tunguska explosion flatten a vast forest, ----.",
      [
        "but it was felt far away",
        "and it happened in 1908",
        "since Siberia is very large",
        "so no crater was found",
        "unless the object was a comet",
      ],
      "'Not only ... but also' yapısı tamamlanır: Tunguska patlaması geniş bir ormanı düzlemekle kalmadı, yüzlerce kilometre uzaktan da hissedildi.",
    ],
    [
      "Since the universe is vast and very old, ----.",
      [
        "Fermi asked where aliens were",
        "the conversation took place over lunch",
        "Fermi had worked on nuclear physics",
        "Los Alamos is in New Mexico",
        "many stars have planets",
      ],
      "'Since' neden bildirir: evren çok geniş ve çok yaşlı olduğu için Fermi neden başka uygarlıklara dair hiçbir iz görmediğimizi merak etti.",
    ],
    [
      "Astronomers were able to find Ceres again ----.",
      [
        "as Gauss computed its orbit",
        "although it is the largest asteroid",
        "unless it had passed behind the Sun",
        "so that Piazzi was famous",
        "while the observatory was in Sicily",
      ],
      "Gökbilimciler genç bir matematikçi yörüngesini hesapladığı için Ceres'i yeniden bulabildi.",
    ],
    [
      "Although the meteor exploded high above the city, ----.",
      [
        "its shock wave hurt many",
        "it was recorded by many cameras",
        "it happened in February 2013",
        "Russia is a very large country",
        "meteors are common events",
      ],
      "'Although' zıtlık ister: meteor kentin çok yukarısında patlasa da şok dalgası binden fazla kişiyi yaraladı.",
    ],
    [
      "Unless large asteroids are detected well in advance, ----.",
      [
        "there may be no time to prevent an impact",
        "most asteroids orbit between Mars and Jupiter",
        "telescopes are used to find them",
        "many asteroids are very small",
        "the Moon has many craters",
      ],
      "'Unless' olumsuz koşul: büyük asteroitler çok önceden tespit edilmezse bir çarpışmayı önlemek için zaman kalmayabilir.",
    ],
  ],
  enTr: [
    [
      "Tycho's careful measurements showed that the new star did not move against the background stars.",
      [
        "Tycho'nun dikkatli ölçümleri, yeni yıldızın arka plandaki yıldızlara göre hareket etmediğini gösterdi.",
        "Tycho'nun ölçümleri, yeni yıldızın arka plandaki yıldızlardan daha hızlı hareket ettiğini gösterdi.",
        "Arka plandaki yıldızlar, yeni yıldızın görülmesini engelledi.",
        "Tycho, yeni yıldızı ölçmeden önce arka plandaki yıldızları inceledi.",
        "Yeni yıldız, Tycho'nun ölçümleri sırasında kayboldu.",
      ],
      "'showed that the new star did not move' 'yeni yıldızın hareket etmediğini gösterdi', 'against the background stars' 'arka plandaki yıldızlara göre' karşılığıdır.",
    ],
    [
      "His idea that the universe began from a single point developed into the Big Bang theory.",
      [
        "Evrenin tek bir noktadan başladığı yönündeki fikri, Büyük Patlama kuramına dönüştü.",
        "Büyük Patlama kuramı, evrenin hiçbir zaman başlamadığını öne sürer.",
        "Onun fikri, Büyük Patlama kuramının yanlış olduğunu kanıtladı.",
        "Evren, Büyük Patlama kuramından önce tek bir nokta olarak tanımlanmıştı.",
        "Evrenin tek bir noktadan başladığı yönündeki fikri, Büyük Patlama kuramının yanlış olduğunu açıkça kanıtladı.",
      ],
      "'His idea that the universe began from a single point' 'evrenin tek bir noktadan başladığı yönündeki fikri', 'developed into the Big Bang theory' 'Büyük Patlama kuramına dönüştü' karşılığıdır.",
    ],
    [
      "The young scientist was publicly mocked by one of the most famous astronomers of the day.",
      [
        "Genç bilim insanı, dönemin en ünlü gökbilimcilerinden biri tarafından herkesin önünde alaya alındı.",
        "Genç bilim insanı, dönemin en ünlü gökbilimcisiyle alay etti.",
        "Dönemin en ünlü gökbilimcisi, genç bilim insanını herkesin önünde övdü.",
        "Genç bilim insanı, ünlü gökbilimcilerle hiç tanışmadı.",
        "Dönemin en ünlü gökbilimcilerinden biri, genç bilim insanının fikirlerini herkesin önünde övdü ve destekledi.",
      ],
      "'was publicly mocked' 'herkesin önünde alaya alındı', 'by one of the most famous astronomers of the day' 'dönemin en ünlü gökbilimcilerinden biri tarafından' karşılığıdır.",
    ],
    [
      "The region between Mars and Jupiter turned out to contain many small objects rather than a single planet.",
      [
        "Mars ile Jüpiter arasındaki bölgenin tek bir gezegen yerine çok sayıda küçük cisim içerdiği anlaşıldı.",
        "Mars ile Jüpiter arasında tek bir büyük gezegen bulunduğu anlaşıldı.",
        "Küçük cisimler, Mars ile Jüpiter'in birleşmesiyle oluştu.",
        "Mars ile Jüpiter arasındaki bölge tamamen boş çıktı.",
        "Mars ile Jüpiter arasındaki bölgede çok sayıda küçük cisim yerine tek bir büyük gezegen bulunduğu anlaşıldı.",
      ],
      "'turned out to contain many small objects' 'çok sayıda küçük cisim içerdiği anlaşıldı', 'rather than a single planet' 'tek bir gezegen yerine' karşılığıdır.",
    ],
    [
      "The equation was meant to stimulate discussion rather than to produce a precise answer.",
      [
        "Denklem, kesin bir yanıt vermekten çok tartışmayı teşvik etmeyi amaçlıyordu.",
        "Denklem, tartışmaları sona erdirecek kesin bir yanıt verdi.",
        "Denklemin amacı, tartışmayı önlemekti.",
        "Kesin bir yanıt vermek için denkleme ihtiyaç yoktu.",
        "Denklem, tartışmayı teşvik etmekten çok kesin bir yanıt vermek amacıyla yazılmıştı.",
      ],
      "'was meant to stimulate discussion' 'tartışmayı teşvik etmeyi amaçlıyordu', 'rather than to produce a precise answer' 'kesin bir yanıt vermekten çok' karşılığıdır.",
    ],
    [
      "Because the area was so remote, no scientists visited it for nearly twenty years.",
      [
        "Bölge çok uzak olduğu için neredeyse yirmi yıl boyunca hiçbir bilim insanı orayı ziyaret etmedi.",
        "Bölge, yirmi yıl boyunca bilim insanlarıyla doluydu.",
        "Bilim insanları bölgeyi ziyaret ettikleri için bölge uzak görünüyordu.",
        "Bölge, yirmi yıl sonra şehre dönüştü.",
        "Bölge çok uzak olmasına rağmen bilim insanları yirmi yıl boyunca orayı her yıl düzenli olarak ziyaret etti.",
      ],
      "'Because the area was so remote' 'bölge çok uzak olduğu için', 'no scientists visited it for nearly twenty years' 'neredeyse yirmi yıl boyunca hiçbir bilim insanı orayı ziyaret etmedi' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kral, Tycho'ya bir rasathane kurması için bir ada verdi.",
      [
        "The king gave Tycho an island on which to build an observatory.",
        "Tycho gave the king an island with an observatory.",
        "The king built an observatory on Tycho's island.",
        "Tycho bought an island to build a palace for the king.",
        "The king refused to give Tycho any land, so he built his observatory on an island he bought.",
      ],
      "'Tycho'ya bir ada verdi' 'gave Tycho an island', 'bir rasathane kurması için' 'on which to build an observatory' karşılığıdır.",
    ],
    [
      "Uzak galaksiler, bizden ne kadar uzaksa o kadar hızlı uzaklaşıyor.",
      [
        "The farther away distant galaxies are, the faster they are moving away from us.",
        "Distant galaxies are moving towards us at a constant speed.",
        "Nearby galaxies move away faster than distant ones.",
        "Galaxies stop moving when they are far away.",
        "All galaxies move away from us at the same speed, regardless of how far away they are.",
      ],
      "'ne kadar uzaksa o kadar hızlı' 'the farther ..., the faster', 'bizden uzaklaşıyor' 'are moving away from us' karşılığıdır.",
    ],
    [
      "Gökbilimciler, cismin yolunun yalnızca küçük bir kısmı gözlemlendiği için onu bir daha bulamayacaklarından korktu.",
      [
        "Astronomers feared they would never find the object again because only a small part of its path had been observed.",
        "Astronomers observed the whole path of the object before it disappeared.",
        "The object was found again because its path was well known.",
        "Astronomers were not interested in finding the object again.",
        "Astronomers did not search for the object again because they had observed its whole path.",
      ],
      "'onu bir daha bulamayacaklarından korktu' 'feared they would never find the object again', 'yolunun yalnızca küçük bir kısmı gözlemlendiği için' 'because only a small part of its path had been observed' karşılığıdır.",
    ],
    [
      "Bir gönüllü, bilgisayar çıktısındaki olağandışı sinyali fark edip yanına bir not yazdı.",
      [
        "A volunteer noticed the unusual signal on the computer printout and wrote a note beside it.",
        "A volunteer sent an unusual signal into space and wrote about it.",
        "The computer printed a note explaining the signal.",
        "The volunteer failed to notice the signal on the printout.",
        "A volunteer wrote a note on the printout explaining that the signal had come from a nearby star.",
      ],
      "'bilgisayar çıktısındaki olağandışı sinyali fark edip' 'noticed the unusual signal on the computer printout', 'yanına bir not yazdı' 'wrote a note beside it' karşılığıdır.",
    ],
    [
      "Nesne muhtemelen yere çarpmadan önce havada patladı.",
      [
        "The object probably exploded in the air before it hit the ground.",
        "The object certainly hit the ground before exploding.",
        "The object did not explode at all.",
        "The ground exploded after the object passed.",
        "The object probably exploded deep underground after it had hit the surface.",
      ],
      "'muhtemelen' 'probably', 'yere çarpmadan önce havada patladı' 'exploded in the air before it hit the ground' karşılığıdır.",
    ],
    [
      "Göktaşı, Mars'tan koparak milyonlarca yıl sonra Antarktika'ya düştü.",
      [
        "The meteorite broke off from Mars and fell in Antarctica millions of years later.",
        "The meteorite was sent from Antarctica to Mars.",
        "The meteorite fell on Mars after leaving Antarctica.",
        "Antarctica was once part of Mars.",
        "The meteorite stayed on Mars for millions of years before it was found by scientists.",
      ],
      "'Mars'tan koparak' 'broke off from Mars', 'milyonlarca yıl sonra Antarktika'ya düştü' 'fell in Antarctica millions of years later' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1930, a nineteen-year-old Indian student named Subrahmanyan Chandrasekhar sailed from India to England to begin graduate studies at Cambridge. During the long voyage, he passed the time by working on a problem concerning white dwarfs, the small, dense stars that remain when stars like the Sun use up their fuel. Applying the new theories of relativity and quantum mechanics, he calculated that a white dwarf could support itself against its own gravity only if its mass was below a certain limit, about 1.4 times that of the Sun. A heavier star, he concluded, would continue to collapse, with consequences that no one could yet describe. In 1935, Chandrasekhar presented his results at a meeting of the Royal Astronomical Society in London. Immediately afterwards, Sir Arthur Eddington, the most famous astronomer in Britain and a man Chandrasekhar admired, rose and ridiculed the idea, declaring that nature would surely prevent a star from behaving in such an absurd way. Few people dared to disagree publicly with Eddington, and Chandrasekhar's work was largely set aside. He moved to the United States, where he enjoyed a distinguished career. Decades later, the existence of neutron stars and black holes showed that he had been right, and in 1983 he was awarded the Nobel Prize in Physics.",
      questions: [
        [
          "According to the passage, Chandrasekhar first worked on the problem ----.",
          [
            "during a sea voyage",
            "at a meeting in London",
            "after winning the Nobel Prize",
            "while teaching in America",
            "with Eddington's help",
          ],
          "Metne göre uzun deniz yolculuğu sırasında zaman geçirmek için problem üzerinde çalıştı.",
        ],
        [
          "Eddington's reaction to Chandrasekhar's results was ----.",
          [
            "dismissive",
            "supportive",
            "uncertain",
            "indifferent",
            "grateful",
          ],
          "Eddington fikri alaya alıp doğanın yıldızın böyle saçma davranmasını engelleyeceğini söyledi; tepkisi küçümseyiciydi.",
        ],
        [
          "It can be inferred from the passage that Chandrasekhar's work was neglected partly because ----.",
          [
            "of Eddington's great authority",
            "his mathematics contained errors",
            "he refused to publish it",
            "white dwarfs had not been discovered",
            "he left astronomy",
          ],
          "Pek az kişi Eddington'la açıkça aynı fikirde olmamaya cesaret ediyordu.",
        ],
      ],
    },
    {
      text:
        "In the late eighteenth century, many astronomers believed that there was a missing planet between Mars and Jupiter. A simple numerical pattern, known as the Titius–Bode law, seemed to predict the distances of the planets from the Sun, and it had correctly predicted the position of Uranus, discovered in 1781. Yet at the distance where the rule placed a planet between Mars and Jupiter, nothing had been found. A group of European astronomers organised a systematic search. Before they could begin, however, the Italian astronomer Giuseppe Piazzi, working in Palermo on a catalogue of stars, noticed on 1 January 1801 a faint object that moved slightly from night to night. He followed it for several weeks until it became lost in the glare of the Sun. Because he had observed only a small part of its path, other astronomers feared that it would never be found again. The young German mathematician Carl Friedrich Gauss, then only twenty-four, developed a new method for calculating orbits from a few observations, and in December 1801 the object, named Ceres, was rediscovered almost exactly where he had predicted. Ceres turned out to be far smaller than the planets, and within a few years several similar bodies, including Pallas and Vesta, had been found. Astronomers realised that the region contained not one missing planet but a belt of many small objects, now called asteroids. In 2006, Ceres was reclassified as a dwarf planet.",
      questions: [
        [
          "According to the passage, astronomers expected to find a planet between Mars and Jupiter because ----.",
          [
            "a numerical rule predicted one there",
            "Piazzi had seen it many years earlier",
            "Uranus had been found in that region",
            "Gauss had calculated its orbit",
            "asteroids had already been discovered there",
          ],
          "Metne göre Titius–Bode kuralı orada bir gezegen olması gerektiğini öngörüyordu.",
        ],
        [
          "Other astronomers feared that Ceres would be lost because ----.",
          [
            "Piazzi had observed only a small part of its orbit",
            "it was moving too quickly to follow",
            "it had been destroyed by the Sun",
            "Gauss refused to help with the calculations",
            "Piazzi's telescope was broken",
          ],
          "Piazzi yolunun yalnızca küçük bir kısmını gözlemlemişti.",
        ],
        [
          "It can be understood from the passage that the discovery of Pallas and Vesta ----.",
          [
            "changed ideas about the region between Mars and Jupiter",
            "proved that Ceres was a major planet",
            "showed that the Titius–Bode law was perfect",
            "was made before the discovery of Ceres",
            "was achieved by Gauss himself using his new method",
          ],
          "Bölgede kayıp tek bir gezegen değil, çok sayıda küçük cisimden oluşan bir kuşak olduğu anlaşıldı.",
        ],
      ],
    },
    {
      text:
        "In April 1960, the young American astronomer Frank Drake began the first modern search for signals from extraterrestrial civilisations. Using a 26-metre radio telescope at Green Bank in West Virginia, he spent about 150 hours listening to two nearby stars, Tau Ceti and Epsilon Eridani, which are similar in some ways to the Sun. He tuned his receiver to a frequency at which hydrogen, the most common element in the universe, naturally emits radio waves, reasoning that intelligent beings elsewhere might choose it for communication. He called the project Ozma, after the princess in the Oz books, a land 'very far away, difficult to reach and populated by strange and exotic beings'. Apart from one false alarm caused by a secret military aircraft, he detected nothing. The following year, Drake organised a small meeting of scientists to discuss the subject. To guide the discussion, he wrote down an equation that multiplied together the factors that determine how many civilisations in our galaxy might be able to communicate with us, such as the rate at which stars form, the share of them that have planets and the share of those planets on which life begins. Since most of these values were unknown, the equation could not produce a precise answer, but it has framed the search for extraterrestrial intelligence ever since.",
      questions: [
        [
          "According to the passage, Drake chose the hydrogen frequency because ----.",
          [
            "other civilisations might also consider it significant",
            "it was the only frequency his telescope could receive",
            "it was not used by military aircraft",
            "hydrogen is found only near the Sun",
            "it had been chosen by previous astronomers",
          ],
          "Evrendeki en yaygın elementin frekansını başka akıllı varlıkların da seçebileceğini düşündü.",
        ],
        [
          "The single signal Drake detected turned out to be ----.",
          [
            "of human origin",
            "from Tau Ceti",
            "from a distant galaxy",
            "caused by hydrogen",
            "a message from aliens",
          ],
          "Tek yanlış alarm gizli bir askeri uçaktan kaynaklanmıştı.",
        ],
        [
          "It can be understood from the passage that the main value of Drake's equation is that it ----.",
          [
            "organises thinking about the problem",
            "gives an exact number of civilisations",
            "proves that aliens exist",
            "measures the rate of star formation",
            "was used to find new planets",
          ],
          "Kesin yanıt vermese de dünya dışı zekâ arayışını çerçevelemiştir.",
        ],
      ],
    },
    {
      text:
        "On 15 August 1977, the Big Ear radio telescope at Ohio State University, which was being used to scan the sky for possible signals from extraterrestrial civilisations, recorded something extraordinary. For about seventy-two seconds, which was the time it took for a point in the sky to pass through the telescope's field of view as the Earth rotated, it detected a strong, narrow signal close to the frequency at which hydrogen emits radio waves. The data were printed out as columns of numbers and letters, and a few days later Jerry Ehman, a volunteer who was checking the printouts, noticed the unusual sequence. He circled it in red ink and wrote 'Wow!' in the margin. The signal appeared to come from the direction of the constellation Sagittarius, but no star known to have planets lies in exactly that spot. Ehman and others pointed the telescope at the same region many times in the following months, and other astronomers have since searched with more powerful instruments, but the signal has never been detected again. Over the years, various natural explanations have been proposed, including comets and clouds of hydrogen briefly brightened by a passing burst of energy, but none has been universally accepted, and the 'Wow! signal' remains one of the most famous unsolved puzzles in astronomy.",
      questions: [
        [
          "According to the passage, the signal lasted about seventy-two seconds because ----.",
          [
            "that was how long a point in the sky stayed in the telescope's view",
            "the transmitter was switched off",
            "Ehman stopped the recording",
            "the telescope broke down",
            "clouds blocked the signal from the telescope",
          ],
          "Dünya döndükçe gökteki bir noktanın teleskobun görüş alanından geçmesi bu kadar sürüyordu.",
        ],
        [
          "Ehman noticed the signal ----.",
          [
            "a few days after it was recorded",
            "while it was being received",
            "many years later",
            "by listening to it",
            "on a television screen",
          ],
          "Birkaç gün sonra çıktıları kontrol ederken fark etti.",
        ],
        [
          "It can be inferred from the passage that the signal's origin ----.",
          [
            "is still uncertain",
            "has been proved to be artificial",
            "was a known planet",
            "was the telescope itself",
            "was identified by Ehman",
          ],
          "Önerilen hiçbir açıklama genel kabul görmemiştir; köken hâlâ belirsizdir.",
        ],
      ],
    },
    {
      text:
        "On the morning of 30 June 1908, people living near the Podkamennaya Tunguska River in Siberia saw a column of bluish light moving across the sky, followed by a flash and an explosion so powerful that it knocked people off their feet many kilometres away. A trading post more than sixty kilometres from the centre of the blast had its windows shattered, and the shock was recorded by instruments as far away as Britain. Because the region was remote and Russia was soon affected by war and revolution, scientists did not get there until 1927. When the mineralogist Leonid Kulik finally arrived, he found that about eighty million trees had been flattened across a region larger than many cities, lying in a radial pattern pointing away from the centre. Strangely, there was no crater, and the trees at the very centre were still standing, although stripped of their branches. Scientists now believe that a stony asteroid or piece of a comet, possibly as wide as a football pitch is long, exploded several kilometres above the ground, releasing energy equivalent to several hundred Hiroshima bombs. Had it arrived a few hours later, it could have destroyed a major city.",
      questions: [
        [
          "According to the passage, no expedition reached the site for many years mainly because ----.",
          [
            "it was remote and the country was in turmoil",
            "scientists did not believe the reports",
            "the area was too dangerous",
            "the trees blocked the way",
            "Kulik was busy elsewhere",
          ],
          "Bölgenin uzak olması ve Rusya'nın savaş ve devrimden etkilenmesi gecikmeye yol açtı.",
        ],
        [
          "The fact that the central trees were still standing suggests that ----.",
          [
            "the blast came from above rather than from the side",
            "the explosion was very weak",
            "the object hit the ground there",
            "the trees had been replanted",
            "the area at the centre was protected by hills",
          ],
          "Merkezdeki ağaçların dalları sökülmüş ama ayakta kalması patlamanın tepeden geldiğini düşündürür.",
        ],
        [
          "The final sentence of the passage emphasises ----.",
          [
            "how much worse the event could have been",
            "that cities are safe from such events",
            "the size of the atomic bomb",
            "that the object was a comet",
            "the accuracy of Kulik's work",
          ],
          "Birkaç saat sonra gelseydi büyük bir kenti yok edebileceği vurgulanır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1950, during a lunchtime conversation at the Los Alamos laboratory, the physicist Enrico Fermi suddenly asked, 'Where is everybody?' ---- This apparent contradiction became known as the Fermi paradox.",
      [
        "He meant that if intelligent life were common in the galaxy, we should already have seen evidence of it.",
        "Los Alamos is located in the mountains of New Mexico.",
        "Fermi had won the Nobel Prize in 1938.",
        "Many scientists enjoy discussing ideas over lunch.",
        "The Milky Way is thought to be about 13 billion years old, and very large.",
      ],
      "Boşluktan sonra 'This apparent contradiction' denir; boşluğa Fermi'nin akıllı yaşam yaygınsa kanıtını görmüş olmamız gerektiğini kastettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In October 2017, a telescope in Hawaii detected an unusual object moving rapidly through the solar system. ---- Named 'Oumuamua, it appeared to be long and thin, and it accelerated slightly in a way that scientists still debate.",
      [
        "Its speed and path showed that it had come from outside the solar system, the first such object ever seen.",
        "Hawaii is home to several large telescopes.",
        "Many objects in the solar system are made of rock.",
        "Telescopes work best in dry, clear air.",
        "The solar system contains eight planets and many smaller bodies.",
      ],
      "Boşluktan sonra 'Named Oumuamua, it' denir; boşluğa hızı ve yolunun Güneş sistemi dışından geldiğini gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In December 1995, astronomers pointed the Hubble Space Telescope at a tiny patch of sky near the Plough that appeared to contain almost nothing. ---- The final image revealed around three thousand galaxies, showing that even the emptiest-looking parts of the sky are crowded with them.",
      [
        "Over about ten days, they collected the faint light from it in hundreds of separate exposures.",
        "The Plough is one of the easiest star patterns to recognise in the northern sky.",
        "Hubble was carried into orbit by a space shuttle in 1990 after many delays.",
        "Many amateur astronomers enjoy photographing galaxies with small telescopes.",
        "Telescopes in space avoid the blurring effect of the Earth's atmosphere completely.",
      ],
      "Boşluktan sonra 'The final image' denir; boşluğa yaklaşık on gün boyunca yüzlerce ayrı pozlamayla soluk ışığın toplandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1823, the German astronomer Heinrich Olbers pointed out a puzzle: if the universe were infinite and filled with stars, every line of sight would eventually end on a star. ---- The modern explanation is that the universe has a finite age, so light from very distant stars has not yet had time to reach us.",
      [
        "In that case, the night sky should be as bright as the surface of the Sun.",
        "Olbers was also a doctor.",
        "Some stars appear much brighter than others because they are closer.",
        "The night sky is darker in the countryside.",
        "Some stars are so far away that their light takes millions of years to reach us.",
      ],
      "Boşluktan sonra modern açıklama verilir; boşluğa o durumda gece gökyüzünün Güneş yüzeyi kadar parlak olması gerektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1993, astronomers discovered a comet that had been broken into more than twenty pieces by the gravity of Jupiter. ---- The impacts left dark scars in the planet's atmosphere, some larger than the Earth.",
      [
        "In July 1994, the fragments crashed into Jupiter one after another over several days.",
        "Comets often develop long, glowing tails as they approach the Sun.",
        "Jupiter has dozens of moons.",
        "Some comets return every few years.",
        "Telescopes in space can see more clearly than those on the ground.",
      ],
      "Boşluktan sonra 'The impacts' denir; boşluğa parçaların Temmuz 1994'te art arda Jüpiter'e çarptığını söyleyen cümle gelmelidir.",
    ],
    [
      "On 15 February 2013, a meteor about twenty metres across entered the atmosphere over the Russian city of Chelyabinsk and exploded about thirty kilometres above the ground. ---- Many of the injuries were caused by flying glass, as people had gone to their windows to look at the bright flash.",
      [
        "The shock wave shattered windows across the city and injured about 1,500 people.",
        "Chelyabinsk is an industrial city in the Ural region.",
        "Meteors are sometimes called shooting stars.",
        "February is a cold month in Russia.",
        "Many cars in Russia have dashboard cameras, which recorded the event.",
      ],
      "Boşluktan sonra yaralanmaların uçuşan camlardan kaynaklandığı anlatılır; boşluğa şok dalgasının kent genelinde camları kırıp yaklaşık 1.500 kişiyi yaraladığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 2005, the Cassini spacecraft discovered jets of water vapour and ice shooting from the south pole of Enceladus, one of Saturn's moons.",
        "The jets come from an ocean of liquid water hidden beneath the moon's icy crust.",
        "Saturn takes about twenty-nine years to orbit the Sun.",
        "Cassini later flew through the jets and detected salts and simple organic molecules.",
        "As a result, Enceladus has become a leading target in the hunt for life elsewhere.",
      ],
      odd: 2,
      why: "Parça Enceladus'taki su fışkırmalarını anlatır. Satürn'ün Güneş etrafındaki turunu yaklaşık yirmi dokuz yılda tamamladığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1984, scientists in Antarctica collected a meteorite that was later shown to have come from Mars.",
        "In 1996, a NASA team announced that it contained tiny structures that might be fossilised bacteria.",
        "The claim attracted enormous attention around the world.",
        "Antarctica is the coldest continent on Earth.",
        "Most scientists now believe, however, that the structures were formed by non-biological processes.",
      ],
      odd: 3,
      why: "Parça Mars göktaşındaki olası fosil iddiasını anlatır. Antarktika'nın Dünya'nın en soğuk kıtası olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On Mars, the sky is usually a pinkish colour during the day.",
        "At sunset, however, the area around the Sun turns blue.",
        "The reason is that tiny dust particles in the thin air send blue light mainly forwards, towards the observer.",
        "Mars has two small moons, Phobos and Deimos.",
        "Robotic rovers have photographed these blue sunsets many times.",
      ],
      odd: 3,
      why: "Parça Mars'taki mavi gün batımlarını anlatır. Mars'ın Phobos ve Deimos adlı iki küçük uydusu olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In February 1987, a star exploded in a small galaxy near our own, producing the brightest supernova seen from Earth for centuries.",
        "A few hours before the explosion was seen, detectors in Japan and the United States recorded a burst of tiny particles called neutrinos.",
        "Japan has many of the world's most advanced laboratories.",
        "The neutrinos had escaped from the collapsing core of the star before the light did.",
        "The observation confirmed theories about how massive stars die.",
      ],
      odd: 2,
      why: "Parça 1987 süpernovasını ve nötrinoları anlatır. Japonya'nın dünyanın en gelişmiş laboratuvarlarına sahip olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "When astronauts live in space for several months, they grow a few centimetres taller.",
        "Without the pull of gravity, the discs between the bones of the spine expand.",
        "Many astronauts also experience back pain as a result.",
        "Basketball players are usually very tall.",
        "Once they return to Earth, they gradually shrink back to their normal height.",
      ],
      odd: 3,
      why: "Parça astronotların uzayda uzamasını anlatır. Basketbolcuların genellikle çok uzun olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In about five billion years, the Sun will run out of hydrogen in its core.",
        "It will then swell into a red giant many times its present size.",
        "The inner planets, possibly including the Earth, may be swallowed up.",
        "Eventually, it will shrink into a small, dense white dwarf.",
        "Solar panels convert sunlight into electricity.",
      ],
      odd: 4,
      why: "Parça Güneş'in gelecekteki evrimini anlatır. Güneş panellerinin güneş ışığını elektriğe dönüştürdüğünü söyleyen V. cümle konu dışıdır.",
    },
  ],
};
