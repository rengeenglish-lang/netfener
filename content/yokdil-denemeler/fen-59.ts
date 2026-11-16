import type { YokdilDeneme } from "./types";

export const FEN_59: YokdilDeneme = {
  no: 59,
  field: "fen",
  vocab: [
    [
      "The jar was able to ---- a large electric charge and release it all at once.",
      ["store", "paint", "grow", "forget", "cook"],
      "Kavanozun büyük bir elektrik yükünü 'depolayıp' (store) bir anda boşaltabildiği anlatılır.",
    ],
    [
      "The son ---- that the spots could be explained by X-rays reflecting from layers of atoms.",
      ["realised", "forgot", "pretended", "refused", "hoped"],
      "Oğlun lekelerin atom katmanlarından yansıyan X ışınlarıyla açıklanabileceğini 'fark ettiği' (realised) anlatılır.",
    ],
    [
      "By watching tiny drops of oil ---- between two metal plates, the physicist measured the charge of a single electron.",
      ["float", "argue", "melt", "shout", "vanish"],
      "Fizikçinin iki metal levha arasında 'süzülen' (float) küçük yağ damlalarını izleyerek tek bir elektronun yükünü ölçtüğü anlatılır.",
    ],
    [
      "The rubber seal lost its ---- when it was cold, so it could not close the gap quickly enough.",
      ["flexibility", "colour", "weight", "price", "smell"],
      "Lastik contanın soğukken 'esnekliğini' (flexibility) yitirdiği ve boşluğu yeterince hızlı kapatamadığı anlatılır.",
    ],
    [
      "Boltzmann's opponents argued that science should deal only with what could be directly ----.",
      ["observed", "cooked", "sold", "painted", "planted"],
      "Boltzmann'ın karşıtlarının bilimin yalnızca doğrudan 'gözlemlenebilen' (observed) şeylerle ilgilenmesi gerektiğini savunduğu anlatılır.",
    ],
    [
      "Other scientists in Germany refused to ---- his findings and criticised them harshly.",
      ["take up", "look after", "put out", "give off", "turn over"],
      "Almanya'daki diğer bilim insanlarının onun bulgularını 'benimsemeyi/ele almayı' (take up) reddettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the abbé performed his demonstration, the jar ---- by scientists in the Netherlands.",
      ["had been invented", "is invented", "has been invented", "will be invented", "invents"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been invented'.",
    ],
    [
      "If Mach had accepted the existence of atoms, Boltzmann ---- so much opposition.",
      ["might not have faced", "will not face", "does not face", "had not faced", "would not face"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have faced'.",
    ],
    [
      "The charge on each drop ---- by measuring how fast it moved.",
      ["was calculated", "calculated", "has calculated", "calculates", "is calculating"],
      "Yük hesaplanmıştır; edilgen geçmiş zaman: 'was calculated'.",
    ],
    [
      "---- the engineers had warned about the seals, the launch went ahead.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Mühendislerin uyarması ile fırlatmanın yapılması zıttır: 'Although'.",
    ],
    [
      "The physicist, ---- son shared the Nobel Prize with him, was a professor at Leeds.",
      ["whose", "who", "which", "whom", "where"],
      "Fizikçinin oğlu; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until many years later ---- Ohm's work recognised in his own country.",
      ["was", "did", "had", "has", "were"],
      "'Not until' ile devrik yapı; edilgen 'was recognised': 'was'.",
    ],
    [
      "The cat is both alive and dead until the box is opened, ---- Schrödinger considered absurd.",
      ["which", "what", "who", "that", "whose"],
      "Virgülden sonra önceki ifadenin tamamını niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
    ],
    [
      "The more regular the layers of atoms, ---- the pattern of spots becomes.",
      ["the clearer", "the clearest", "clearer", "clearest", "so clear"],
      "'The more ..., the clearer ...' paralel yapısı: 'the clearer'.",
    ],
    [
      "The engineers recommended that the launch ---- until the weather became warmer.",
      ["be delayed", "is delayed", "was delayed", "to be delayed", "being delayed"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be delayed'.",
    ],
    [
      "Millikan is now known ---- some of his measurements.",
      ["to have left out", "leaving out", "to leave out", "left out", "having left out"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have left out'.",
    ],
    [
      "The physicist dropped the seal into iced water ---- everyone could see what happened.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Contayı buzlu suya atmasının amacı herkesin olanı görebilmesidir: 'so that'.",
    ],
    [
      "The abbé had the monks ---- hands before he discharged the jar.",
      ["join", "joining", "to join", "joined", "be joined"],
      "'have sb do sth' ettirgen yapısında yalın fiil: 'join'.",
    ],
    [
      "Had Boltzmann lived a few years longer, he ---- his ideas confirmed.",
      ["might have seen", "sees", "will see", "had seen", "is seeing"],
      "Devrik üçüncü tip koşul cümlesi: 'might have seen'.",
    ],
    [
      "Neither the monks nor the soldiers ---- seriously hurt by the shock.",
      ["were", "was being", "be", "to be", "has"],
      "'Neither ... nor' yapısında fiil yakın özneye göre çekimlenir; çoğul özne: 'were'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1746, the Dutch scientist Pieter van Musschenbroek was trying to store electricity in a glass jar of water connected by a wire to a machine that produced static electricity. When he held the jar in one hand {1} touched the wire with the other, he received a shock so violent that he later wrote that he would not repeat it even for the whole kingdom of France. He had invented what became known as the Leyden jar, after the city where he worked. It was the first device that could store a significant electric charge {2} release it suddenly. News of the invention spread rapidly across Europe, {3} it became the basis of popular public demonstrations. In France, the abbé Jean-Antoine Nollet arranged about two hundred monks in a long line, each holding a wire connected to the next, {4} when the jar was discharged through them, they all jumped into the air at the same moment. The demonstration showed that electricity could travel almost instantly over great distances. The Leyden jar was later improved by coating the glass with metal foil inside and outside, {5} it remained an essential tool for research into electricity for more than a century.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Kavanozu bir eliyle tutması ve diğeriyle tele dokunması eşzamanlı iki eylemdir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Yükü depolaması ve aniden boşaltması birbirine eklenen iki özelliktir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Haberin yayılması ve gösterilerin temeli olması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Rahipleri dizmesi ve kavanoz boşalınca hepsinin sıçraması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Kavanozun geliştirilmesi ve yüzyıldan uzun süre temel bir araç kalması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In 1912, the German physicist Max von Laue showed that X-rays passing through a crystal produce a pattern of spots on a photographic plate. In England, William Henry Bragg, a professor at Leeds, {1} his son Lawrence, a young student at Cambridge, became fascinated by the discovery. Lawrence realised that the pattern could be explained if the X-rays were reflected by the regular layers of atoms inside the crystal, {2} he worked out a simple equation relating the angle of reflection to the distance between the layers. His father, meanwhile, built an instrument that could measure the reflected X-rays precisely. Working together, they used the method to determine the arrangement of atoms in common salt, diamond and other crystals, {3} showing for the first time how atoms are arranged in solids. In 1915, father and son shared the Nobel Prize in Physics. Lawrence, who was only twenty-five, remains the youngest person ever to have won a Nobel Prize in science. He learned of the award while serving as an officer in the army in France, {4} his younger brother had been killed at Gallipoli. The technique the Braggs developed, known as X-ray crystallography, later allowed scientists to reveal the shapes of large biological molecules such as proteins and DNA, {5} it has been used in research that has led to more than twenty further Nobel Prizes.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Baba ve oğlun ikisinin de keşiften etkilenmesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Deseni açıklayabilmesi ve basit bir denklem bulması birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["thereby", "however", "otherwise", "instead", "nevertheless"],
          "Yöntemi kullanmalarının sonucu atomların katılardaki dizilişini ilk kez göstermeleridir: 'thereby'.",
        ],
        [
          "(29) ----",
          ["shortly after", "unless", "although", "so that", "in case"],
          "Ödülü öğrenmesi, erkek kardeşinin savaşta ölmesinden kısa süre sonradır: 'shortly after'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Tekniğin karmaşık molekülleri çözmeyi sağlaması ve pek çok Nobel'e yol açması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Musschenbroek received a painful shock from the jar, ----.",
      [
        "his invention quickly became popular across Europe",
        "glass is fragile",
        "the Netherlands is flat",
        "water is wet",
        "he wrote that he would not repeat the experiment even for the whole kingdom of France",
      ],
      "'Although' zıtlık ister: Musschenbroek kavanozdan acı verici bir şok almış olsa da buluşu Avrupa'da hızla yaygınlaştı.",
    ],
    [
      "If the X-rays had not been reflected by layers of atoms, ----.",
      [
        "the son's equation would not have explained the pattern",
        "crystals are hard",
        "salt is white",
        "Leeds is in England",
        "the father would have built an instrument that could measure the reflected X-rays precisely",
      ],
      "Üçüncü tip koşul: X ışınları atom katmanlarınca yansıtılmasaydı oğlun denklemi deseni açıklayamazdı.",
    ],
    [
      "----, the drop could be held still in the air.",
      [
        "By adjusting the electric field between the plates",
        "Although oil is thick",
        "Unless the room was warm",
        "Since Chicago is large",
        "While the physicist was writing the notebooks that historians later studied in detail",
      ],
      "Levhalar arasındaki elektrik alanı ayarlanarak damla havada sabit tutulabiliyordu.",
    ],
    [
      "The seal failed on the morning of the launch ----.",
      [
        "because the temperature was unusually low",
        "although rockets are tall",
        "unless the crew was ready",
        "so that the engineers could test it",
        "while the commission was holding public meetings to investigate the causes of the disaster",
      ],
      "Conta, sıcaklık alışılmadık derecede düşük olduğu için fırlatma sabahı işlevini yitirdi.",
    ],
    [
      "Since it was impossible to follow every particle in a gas, ----.",
      [
        "Boltzmann described their average behaviour using probability",
        "gases are invisible",
        "Austria is in Europe",
        "particles are small",
        "the French physicist carried out experiments that provided convincing evidence that atoms exist",
      ],
      "'Since' neden bildirir: bir gazdaki her parçacığı izlemek imkânsız olduğundan Boltzmann ortalama davranışlarını olasılıkla tanımladı.",
    ],
    [
      "Not only was Ohm's work rejected by other scientists, ----.",
      [
        "but he also lost his job as a teacher",
        "and electricity is useful",
        "since wires are thin",
        "so Germany is in Europe",
        "unless the Royal Society in London had given him a medal for his work in 1841",
      ],
      "'Not only ... but also' yapısı tamamlanır: Ohm'un çalışması diğer bilim insanlarınca reddedilmekle kalmadı, öğretmenlik işini de kaybetti.",
    ],
    [
      "Once the box is opened, ----.",
      [
        "the cat is found to be either alive or dead",
        "boxes are made of wood",
        "cats are animals",
        "physicists are curious",
        "the physicist had written a letter to Einstein describing his concerns about the theory",
      ],
      "Kutu açıldığında kedinin ya canlı ya da ölü olduğu görülür.",
    ],
    [
      "Unless the drop carried an electric charge, ----.",
      [
        "it would not be affected by the electric field",
        "oil is yellow",
        "plates are flat",
        "gravity pulls downwards",
        "the physicist would not have received the Nobel Prize in 1923 for his work on the electron",
      ],
      "'Unless' olumsuz koşul: damla elektrik yükü taşımasaydı elektrik alanından etkilenmezdi.",
    ],
    [
      "The demonstration with the iced water was so simple ----.",
      [
        "that everyone watching on television could understand the problem",
        "although ice is cold",
        "because the seal was small",
        "unless the water was warm",
        "while the commission had been examining many technical documents for several weeks",
      ],
      "Buzlu suyla yapılan gösteri o kadar basitti ki televizyonda izleyen herkes sorunu anlayabildi.",
    ],
    [
      "Even though Lawrence Bragg was only twenty-five, ----.",
      [
        "he shared the Nobel Prize in Physics with his father",
        "crystals have layers",
        "the war was long",
        "France is in Europe",
        "the technique later made it possible to work out the structures of proteins and DNA",
      ],
      "'Even though' zıtlık ister: Lawrence Bragg yalnızca yirmi beş yaşında olsa da Nobel Fizik Ödülü'nü babasıyla paylaştı.",
    ],
    [
      "As the thought experiment seemed to lead to an absurd conclusion, ----.",
      [
        "Schrödinger used it to criticise a popular interpretation of quantum theory",
        "cats like boxes",
        "poison is dangerous",
        "Austria is in Europe",
        "the phrase 'Schrödinger's cat' has become well known even among people who know little about physics",
      ],
      "Düşünce deneyi saçma bir sonuca götürür gibi göründüğünden Schrödinger onu kuantum kuramının popüler bir yorumunu eleştirmek için kullandı.",
    ],
  ],
  enTr: [
    [
      "The jar could store an electric charge and release it suddenly.",
      [
        "Kavanoz bir elektrik yükünü depolayıp aniden boşaltabiliyordu.",
        "Kavanoz bir elektrik yükünü yavaşça üretip hiç boşaltmıyordu.",
        "Aniden boşaltılan elektrik yükü, kavanozu her seferinde kırıyordu.",
        "Elektrik kavanozu depoladı.",
        "Kavanoz hiç elektrik tutamazdı.",
      ],
      "'The jar could store an electric charge' 'kavanoz bir elektrik yükünü depolayabiliyordu', 'and release it suddenly' 've aniden boşaltabiliyordu' karşılığıdır.",
    ],
    [
      "The X-rays were reflected by the regular layers of atoms inside the crystal.",
      [
        "X ışınları, kristalin içindeki düzenli atom katmanları tarafından yansıtıldı.",
        "Atom katmanları, kristalin dışındaki X ışınları tarafından yansıtıldı.",
        "Kristalin içindeki atom katmanları düzensiz olduğu için X ışınları hiç yansımadı.",
        "Kristal X ışınlarını atomlara yansıttı.",
        "X ışınları kristalden hiç geçmedi.",
      ],
      "'The X-rays were reflected' 'X ışınları yansıtıldı', 'by the regular layers of atoms inside the crystal' 'kristalin içindeki düzenli atom katmanları tarafından' karşılığıdır.",
    ],
    [
      "The charge on every drop was a whole-number multiple of a single value.",
      [
        "Her damladaki yük, tek bir değerin tam sayı katıydı.",
        "Her damladaki yük, farklı ve rastgele bir değerdi.",
        "Tek bir değerin katı olmayan yükler, damlaların hızla düşmesine yol açtı.",
        "Tek bir değer her damlayı yükledi.",
        "Damlaların hiçbiri yük taşımıyordu.",
      ],
      "'The charge on every drop' 'her damladaki yük', 'was a whole-number multiple of a single value' 'tek bir değerin tam sayı katıydı' karşılığıdır.",
    ],
    [
      "The physicist dropped a piece of the rubber into a glass of iced water.",
      [
        "Fizikçi, lastikten bir parçayı bir bardak buzlu suya attı.",
        "Fizikçi, bir bardak buzlu suyu lastiğin üzerine döktü.",
        "Buzlu suya atılan lastik parçası, esnekliğini hiç yitirmedi.",
        "Buzlu su fizikçiyi bardağa attı.",
        "Fizikçi hiç deney yapmadı.",
      ],
      "'The physicist dropped a piece of the rubber' 'fizikçi lastikten bir parçayı attı', 'into a glass of iced water' 'bir bardak buzlu suya' karşılığıdır.",
    ],
    [
      "Boltzmann's famous equation is carved on his tombstone.",
      [
        "Boltzmann'ın ünlü denklemi mezar taşına kazınmıştır.",
        "Boltzmann'ın mezar taşı ünlü bir denklemle çözülmüştür.",
        "Boltzmann'ın ünlü denklemi, mezar taşına kazınmadan önce yanlış çıktı.",
        "Mezar taşı Boltzmann'ın denklemini yazdı.",
        "Boltzmann'ın hiç denklemi yoktur.",
      ],
      "'Boltzmann's famous equation' 'Boltzmann'ın ünlü denklemi', 'is carved on his tombstone' 'mezar taşına kazınmıştır' karşılığıdır.",
    ],
    [
      "Ohm's law describes the relationship between voltage, current and resistance.",
      [
        "Ohm yasası gerilim, akım ve direnç arasındaki ilişkiyi tanımlar.",
        "Ohm yasası yalnızca gerilimin nasıl üretildiğini tanımlar.",
        "Gerilim, akım ve direnç arasında hiçbir ilişki olmadığını Ohm yasası kanıtlar.",
        "Akım Ohm yasasını tanımlar.",
        "Ohm yasası elektrikle ilgili değildir.",
      ],
      "'Ohm's law describes the relationship' 'Ohm yasası ilişkiyi tanımlar', 'between voltage, current and resistance' 'gerilim, akım ve direnç arasındaki' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kavanoz boşaltıldığında rahiplerin hepsi aynı anda havaya sıçradı.",
      [
        "When the jar was discharged, all the monks jumped into the air at the same moment.",
        "When the monks jumped into the air, the jar was filled with water.",
        "When the jar was discharged, only the monks at the front of the line felt anything.",
        "The air discharged the monks at the same moment.",
        "The monks never touched the jar.",
      ],
      "'Kavanoz boşaltıldığında' 'when the jar was discharged', 'rahiplerin hepsi aynı anda havaya sıçradı' 'all the monks jumped into the air at the same moment' karşılığıdır.",
    ],
    [
      "Baba ve oğul, birlikte çalışarak tuzdaki atomların dizilişini belirledi.",
      [
        "Working together, the father and son determined the arrangement of atoms in salt.",
        "Working separately, the father and son added salt to the arrangement of atoms.",
        "The father and son tried to work together, but they could never determine the structure of salt.",
        "The atoms in salt determined the father and son.",
        "The father and son never studied salt.",
      ],
      "'Baba ve oğul birlikte çalışarak' 'working together, the father and son', 'tuzdaki atomların dizilişini belirledi' 'determined the arrangement of atoms in salt' karşılığıdır.",
    ],
    [
      "Tarihçiler, fizikçinin bazı ölçümlerini yayımlamadığını keşfetti.",
      [
        "Historians discovered that the physicist had not published some of his measurements.",
        "The physicist discovered that historians had not published their measurements.",
        "Historians discovered that the physicist had published all of his measurements in full.",
        "The measurements discovered the historians.",
        "The physicist never made any measurements.",
      ],
      "'Tarihçiler keşfetti' 'historians discovered', 'fizikçinin bazı ölçümlerini yayımlamadığını' 'that the physicist had not published some of his measurements' karşılığıdır.",
    ],
    [
      "Mühendisler, soğuk havada fırlatmanın tehlikeli olacağı konusunda uyardı.",
      [
        "The engineers warned that launching in cold weather would be dangerous.",
        "The cold weather warned the engineers about the dangerous launch.",
        "The engineers said that launching in cold weather would be safer than usual.",
        "The launch warned the engineers about the weather.",
        "The engineers did not say anything.",
      ],
      "'Mühendisler uyardı' 'the engineers warned', 'soğuk havada fırlatmanın tehlikeli olacağı konusunda' 'that launching in cold weather would be dangerous' karşılığıdır.",
    ],
    [
      "Boltzmann'ın fikirleri, etkili bir bilim insanı ve filozof grubunca sert biçimde eleştirildi.",
      [
        "Boltzmann's ideas were strongly criticised by an influential group of scientists and philosophers.",
        "Boltzmann strongly criticised the ideas of an influential group of scientists and philosophers.",
        "Boltzmann's ideas were praised by scientists, although a few philosophers disagreed with them.",
        "The philosophers criticised Boltzmann's group.",
        "Nobody discussed Boltzmann's ideas.",
      ],
      "'Boltzmann'ın fikirleri sert biçimde eleştirildi' 'Boltzmann's ideas were strongly criticised', 'etkili bir bilim insanı ve filozof grubunca' 'by an influential group of scientists and philosophers' karşılığıdır.",
    ],
    [
      "Kedi, kutu açılana kadar hem canlı hem ölü kabul edilir.",
      [
        "The cat is regarded as both alive and dead until the box is opened.",
        "The box is regarded as both open and closed until the cat is alive.",
        "The cat is regarded as alive, and it can never be found dead when the box is opened.",
        "The cat opens the box.",
        "There is no cat in the box.",
      ],
      "'Kedi hem canlı hem ölü kabul edilir' 'the cat is regarded as both alive and dead', 'kutu açılana kadar' 'until the box is opened' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1909, the American physicist Robert Millikan and his student Harvey Fletcher began a series of experiments designed to measure the electric charge of a single electron. They sprayed a fine mist of oil droplets into a chamber above two horizontal metal plates. Some droplets fell through a tiny hole into the space between the plates, where they could be observed through a microscope. Friction from the spray gave many of the drops a small electric charge. Normally, the drops would slowly fall under gravity, but by applying a voltage to the plates, Millikan could create an electric field that pushed charged drops upwards. By adjusting this field and timing how fast each drop rose or fell, he could calculate the charge it carried. He found that the charge on every drop was always a whole-number multiple of one particular value, which he concluded was the charge of a single electron. His result was very close to the value accepted today, and he received the Nobel Prize in 1923. Later, however, historians who studied his laboratory notebooks found that he had published results from only some of the drops he had observed, leaving out others. Some have accused him of selecting data to support his conclusion, while others argue that he was simply discarding measurements he believed were faulty. The case is still discussed in debates about scientific honesty.",
      questions: [
        [
          "According to the passage, Millikan could control the movement of the drops by ----.",
          [
            "changing the electric field between the plates",
            "heating the oil",
            "using a stronger microscope",
            "spraying a different kind of mist into the chamber above the plates",
            "blowing air into the chamber",
          ],
          "Metne göre levhalara gerilim uygulayıp elektrik alanını ayarlayarak damlaları yukarı itebiliyordu.",
        ],
        [
          "Millikan concluded that the charge of a single electron ----.",
          [
            "was the basic unit of which every drop's charge was a multiple",
            "varied from drop to drop",
            "was too small to measure",
            "was determined by the friction from the spray rather than by the drop itself",
            "was the same as the charge of a proton",
          ],
          "Her damladaki yük belirli bir değerin tam sayı katıydı; bu değer bir elektronun yüküydü.",
        ],
        [
          "It can be understood from the passage that the notebooks ----.",
          [
            "raised questions about how Millikan treated his data",
            "proved that his results were wrong",
            "were destroyed",
            "showed that the student had carried out all the experiments without Millikan's help",
            "were never studied",
          ],
          "Gözlemlerinin yalnızca bir kısmını yayımladığını gösterdi; bu da veri seçimi tartışmasına yol açtı.",
        ],
      ],
    },
    {
      text:
        "On 28 January 1986, the space shuttle Challenger broke apart seventy-three seconds after lift-off, killing all seven people on board. A commission was set up to investigate the disaster, and one of its members was the physicist Richard Feynman. The shuttle's booster rockets were built in sections, and the joints between them were sealed by rubber rings. Engineers at the company that made the rockets had been concerned for some time that these rings might not work properly in cold weather, and on the night before the launch, when temperatures were expected to fall below freezing, they had recommended a delay. Their concerns were overruled. During a public hearing that was broadcast on television, Feynman took a piece of the rubber used in the rings, squeezed it with a small clamp and dropped it into a glass of iced water. After a short time, he removed it and released the clamp, showing that the rubber did not spring back to its original shape. In the cold, it had lost its flexibility. This simple demonstration made clear to the public why the seal had failed to close a gap in the joint, allowing hot gas to escape. In his personal report, Feynman also criticised the space agency's management for greatly underestimating the risks, concluding that 'nature cannot be fooled'.",
      questions: [
        [
          "According to the passage, engineers had recommended delaying the launch because ----.",
          [
            "they feared the rubber rings would not work in the cold",
            "the crew was not ready",
            "the weather was too windy",
            "the physicist had criticised the management of the space agency",
            "the booster rockets were too heavy",
          ],
          "Metne göre lastik halkaların soğuk havada düzgün çalışmayabileceğinden endişe ediyorlardı.",
        ],
        [
          "Feynman's demonstration showed that ----.",
          [
            "cold made the rubber less flexible",
            "the rubber melted in water",
            "the rings were too large",
            "hot gas could never escape from the joints between the sections of the rockets",
            "the clamp was faulty",
          ],
          "Soğukta lastik esnekliğini yitirmiş ve eski biçimine dönmemişti.",
        ],
        [
          "It can be understood from the passage that Feynman's conclusion, 'nature cannot be fooled', means that ----.",
          [
            "physical reality cannot be ignored whatever managers believe",
            "nature is unpredictable",
            "experiments are unnecessary",
            "the engineers had deliberately tried to deceive the members of the commission",
            "space travel is impossible",
          ],
          "Yöneticiler riskleri küçümsese de fiziksel gerçeklik göz ardı edilemez.",
        ],
      ],
    },
    {
      text:
        "Today, the existence of atoms is taken for granted, but at the end of the nineteenth century many leading scientists doubted that they were real. The Austrian physicist Ludwig Boltzmann was one of the strongest defenders of the idea. He argued that the behaviour of gases, and in particular the way heat flows, could be explained by the movements of enormous numbers of tiny particles colliding with one another. Since it was impossible to follow every particle, he used the mathematics of probability to describe their average behaviour. One of his most important achievements was to explain why heat always flows from hot objects to cold ones and never the other way round. According to Boltzmann, this happens not because the reverse is impossible but because it is overwhelmingly unlikely, in the same way that a shuffled pack of cards is far more likely to be in a disordered state than in perfect order. His ideas were strongly opposed by a group of influential scientists and philosophers, including Ernst Mach, who believed that science should deal only with what could be directly observed. Boltzmann suffered from periods of severe depression, and in 1906, while on holiday with his family near Trieste, he took his own life. Ironically, within a few years, experiments carried out by the French physicist Jean Perrin, based on work by Einstein, provided convincing evidence that atoms exist. Boltzmann's famous equation is carved on his tombstone in Vienna.",
      questions: [
        [
          "According to the passage, Boltzmann used probability because ----.",
          [
            "it was impossible to track each particle individually",
            "he disliked other kinds of mathematics",
            "Mach advised him to",
            "experiments by the French physicist had already shown that atoms exist",
            "gases contain only a few particles",
          ],
          "Metne göre her parçacığı izlemek imkânsız olduğundan ortalama davranışı olasılıkla tanımladı.",
        ],
        [
          "Boltzmann explained that heat does not flow from cold to hot objects because ----.",
          [
            "such a process is extremely improbable",
            "it is forbidden by the laws of nature",
            "cold objects contain no particles",
            "the particles in a gas move only in one direction when they collide",
            "heat is a fluid",
          ],
          "Tersinin imkânsız olduğu için değil, son derece olasılık dışı olduğu için.",
        ],
        [
          "The writer describes the events after Boltzmann's death as ironic because ----.",
          [
            "his views were confirmed soon after he died",
            "his tombstone was lost",
            "Mach changed his mind before Boltzmann's death",
            "Einstein strongly opposed his ideas about atoms during the following years",
            "his equation was proved wrong",
          ],
          "Ölümünden birkaç yıl sonra deneyler atomların varlığını kanıtladı.",
        ],
      ],
    },
    {
      text:
        "In 1827, a German schoolteacher named Georg Simon Ohm published a book in which he described a simple relationship between the voltage applied to a wire, the electric current flowing through it, and the wire's resistance. He had arrived at this conclusion through careful experiments, using wires of different lengths and thicknesses and instruments that he had built himself, since good equipment was difficult to obtain. Today, Ohm's law is one of the first things that students learn about electricity. At the time, however, his work was received very badly. Many German scientists were influenced by a philosophical approach that valued reasoning about nature more than experiments and mathematics, and one critic described his book as 'a web of naked fancies'. The education minister is said to have declared that a physicist who held such views was unworthy to teach science. Ohm resigned from his teaching post and spent several years in poverty, working as a private tutor. Recognition eventually came from abroad. In 1841, the Royal Society in London awarded him its highest honour, the Copley Medal, and his reputation in Germany began to improve. In 1849 he became a professor in Munich, and shortly before his death in 1854 he finally received a post in which he could carry out research. The unit of electrical resistance is now named after him.",
      questions: [
        [
          "According to the passage, Ohm built some of his own instruments because ----.",
          [
            "good equipment was hard to get",
            "he enjoyed building things",
            "the Royal Society asked him to",
            "German scientists preferred to use instruments that they had made themselves",
            "he was very rich",
          ],
          "Metne göre iyi donanım bulmak zordu.",
        ],
        [
          "Ohm's work was badly received in Germany partly because ----.",
          [
            "many scientists there preferred philosophical reasoning to experiment",
            "his experiments were faulty",
            "he refused to publish it",
            "it was first published in English by the Royal Society in London",
            "it was too short",
          ],
          "Pek çok Alman bilim insanı akıl yürütmeyi deney ve matematikten üstün tutuyordu.",
        ],
        [
          "It can be understood from the passage that Ohm's reputation improved after ----.",
          [
            "he received an honour from a foreign society",
            "he resigned his teaching post",
            "he moved to London",
            "the education minister declared that he was unworthy to teach science",
            "he died",
          ],
          "Londra'daki Kraliyet Derneği'nin Copley Madalyası'ndan sonra itibarı düzeldi.",
        ],
      ],
    },
    {
      text:
        "In 1935, the Austrian physicist Erwin Schrödinger described an imaginary experiment that has since become one of the most famous ideas in science. According to quantum theory, very small particles, such as atoms, can exist in a combination of different states at the same time until they are measured. One popular interpretation of the theory held that it is the act of observation itself that forces a particle to 'choose' one state. Schrödinger thought this led to absurd consequences, and he tried to show why. He imagined a cat sealed in a steel box together with a small amount of radioactive material, a detector and a bottle of poison. If one of the atoms in the material decayed, which might or might not happen within an hour, the detector would trigger a hammer that would break the bottle and kill the cat. According to the interpretation he was criticising, until someone opened the box and looked, the atom would be both decayed and not decayed, and so the cat would have to be considered both alive and dead at the same time. Schrödinger intended the example to show that something was wrong with applying quantum ideas in this way to everyday objects. Ironically, the cat is now often used to illustrate quantum theory rather than to criticise it, and physicists still debate how the strange behaviour of tiny particles gives way to the ordinary world we experience.",
      questions: [
        [
          "According to the passage, Schrödinger described the experiment in order to ----.",
          [
            "criticise a particular interpretation of quantum theory",
            "kill a cat",
            "prove quantum theory correct",
            "show how radioactive materials can be detected safely inside a steel box",
            "explain how poison works",
          ],
          "Metne göre kuantum kuramının belirli bir yorumunun saçma sonuçlara yol açtığını göstermeye çalıştı.",
        ],
        [
          "In the imaginary experiment, the cat's fate depends on ----.",
          [
            "whether an atom decays",
            "how long the box is closed",
            "the size of the box",
            "whether the physicist decides to open the box before an hour has passed",
            "the colour of the poison",
          ],
          "Malzemedeki bir atomun bozunup bozunmamasına bağlıdır.",
        ],
        [
          "The writer describes the modern use of the example as ironic because ----.",
          [
            "it is used to explain the theory it was meant to challenge",
            "cats are no longer used in experiments",
            "it has been proved false",
            "physicists have stopped debating how tiny particles behave in the ordinary world",
            "Schrödinger later regretted it",
          ],
          "Eleştirmek için tasarlandığı kuramı açıklamak için kullanılmaktadır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the 1780s, the French engineer Charles-Augustin de Coulomb wanted to measure the tiny forces between electric charges. ---- By measuring how far the wire twisted, he showed that the force between two charges becomes four times weaker when the distance between them is doubled.",
      [
        "He built a sensitive instrument in which a light rod hung from a thin wire, which twisted when a force acted on the rod.",
        "France is a large country.",
        "Engineers build bridges.",
        "He had earlier studied friction and the strength of materials while serving in the army.",
        "Forces can be measured.",
      ],
      "Boşluk 'telin ne kadar büküldüğü' ifadesine bağlanan bir cümle gerektirir; boşluğa ince bir telden sarkan hafif bir çubuğun kuvvetle büküldüğü duyarlı bir alet yaptığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1922, two German physicists fired a beam of silver atoms through a magnetic field and onto a glass plate. ---- One of them later joked that the cheap cigars he smoked had helped, because the sulphur in the smoke made the faint deposit of silver visible.",
      [
        "Instead of forming a single smudge, the atoms split into two separate spots, revealing a property of atoms that had not been expected.",
        "Silver is a precious metal.",
        "Germany has many universities.",
        "Their experiment was carried out at a time when Germany was suffering from severe inflation.",
        "Glass is transparent.",
      ],
      "Boşluk 'soluk gümüş tortusu' ifadesine bağlanan bir sonuç gerektirir; boşluğa atomların tek leke yerine iki ayrı noktaya bölündüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "For a long time, physicists assumed that the laws of nature would work in exactly the same way in a mirror image of the world. ---- Her result overturned a principle that had been accepted for decades, although the Nobel Prize for the theory went only to the two men who had proposed it.",
      [
        "In 1956, the Chinese-American physicist Chien-Shiung Wu carried out an experiment showing that one type of radioactive decay did not follow this rule.",
        "Mirrors reflect light.",
        "Physics is a difficult subject.",
        "She had moved to the United States in 1936 to study at a university in California.",
        "Nature is very complex.",
      ],
      "Boşluk 'onun sonucu' ifadesine bağlanan bir cümle gerektirir; boşluğa Wu'nun bir radyoaktif bozunma türünün bu kurala uymadığını gösteren deneyi yaptığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1927, the German physicist Werner Heisenberg showed that there is a fundamental limit to how precisely certain pairs of properties can be known. ---- This is not because instruments are imperfect, but because of the nature of particles themselves.",
      [
        "For example, the more accurately the position of a particle is measured, the less accurately its speed can be known.",
        "Germany is in Europe.",
        "Physicists use instruments.",
        "Heisenberg later led Germany's research into nuclear energy during the Second World War.",
        "Particles are small.",
      ],
      "Boşluk ilkeyi örnekleyen bir cümle gerektirir; boşluğa bir parçacığın konumu ne kadar doğru ölçülürse hızının o kadar az doğrulukla bilinebileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1943, the Danish physicist Niels Bohr, whose mother was Jewish, learned that he was about to be arrested by the occupying German forces. ---- During the flight to Britain, he lost consciousness because his helmet did not fit his large head and he missed the instruction to use his oxygen mask.",
      [
        "He escaped by fishing boat to Sweden and was then flown to Britain in the empty bomb bay of a small aircraft.",
        "Denmark is a small country.",
        "Physicists travel to conferences.",
        "He later worked with the scientists who were developing the atomic bomb in the United States.",
        "Aircraft need fuel.",
      ],
      "Boşluk 'İngiltere'ye uçuş' ifadesine bağlanan bir cümle gerektirir; boşluğa balıkçı teknesiyle İsveç'e kaçtığını ve oradan küçük bir uçağın boş bomba bölmesinde İngiltere'ye götürüldüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In 1963, a British accountant named Edward Craven Walker launched a decorative lamp based on an egg timer he had seen in a pub. ---- When it cools at the top, it becomes denser and sinks again, creating slowly moving shapes.",
      [
        "Inside the lamp, a bulb heats a blob of wax at the bottom, which expands, becomes less dense than the liquid around it and rises.",
        "Accountants work with numbers.",
        "Pubs serve drinks.",
        "The lamp became a symbol of the 1960s and was popular in films and television programmes.",
        "Lamps produce light.",
      ],
      "Boşluk 'üstte soğuyunca' ifadesine bağlanan bir cümle gerektirir; boşluğa ampulün alttaki mumu ısıttığını, mumun genleşip çevresindeki sıvıdan hafifleyerek yükseldiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A radiometer is a glass bulb containing a set of vanes that spin in sunlight.",
        "One side of each vane is black and the other is white or silver.",
        "Glass bulbs were once used in many kinds of lamps.",
        "For many years, the reason why the vanes turn was misunderstood.",
        "It is now known to be caused by the movement of the thin gas inside the bulb.",
      ],
      odd: 2,
      why: "Parça güneş ışığında dönen kanatlı cam ampulü anlatır. Cam ampullerin bir zamanlar pek çok lambada kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A popular desk toy consists of a row of steel balls hanging from strings.",
        "When one ball is lifted and released, it strikes the others.",
        "The ball at the far end then swings out, while the others remain almost still.",
        "Many offices are decorated with plants.",
        "The toy demonstrates the conservation of energy and momentum.",
      ],
      odd: 3,
      why: "Parça çelik toplardan oluşan masa oyuncağını ve gösterdiği fizik ilkesini anlatır. Pek çok ofisin bitkilerle süslendiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1820, a French physicist heard that an electric current could move a compass needle.",
        "Within weeks, he showed that two wires carrying currents attract or repel each other.",
        "France was recovering from years of war at the time.",
        "He worked out the mathematical rules describing these forces.",
        "The unit of electric current is named after him.",
      ],
      odd: 2,
      why: "Parça elektrik akımları arasındaki kuvvetleri inceleyen Fransız fizikçiyi anlatır. Fransa'nın o sırada savaştan toparlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1896, a Dutch physicist noticed that a strong magnetic field changes the light given off by a flame.",
        "The lines in the spectrum split into several parts.",
        "Astronomers later used this effect to measure magnetic fields on the sun.",
        "The Netherlands is famous for its windmills.",
        "He shared the Nobel Prize in Physics in 1902.",
      ],
      odd: 3,
      why: "Parça manyetik alanın ışık spektrumunu değiştirmesini anlatır. Hollanda'nın yel değirmenleriyle ünlü olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1834, a French watchmaker discovered that an electric current can make one joint between two metals cold.",
        "The other joint becomes warm.",
        "The effect is now used in small refrigerators and coolers.",
        "Watches were once a sign of wealth.",
        "It also cools some electronic devices.",
      ],
      odd: 3,
      why: "Parça iki metal arasındaki eklemi soğutan elektrik etkisini anlatır. Saatlerin bir zamanlar zenginlik göstergesi olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1879, an American student found that a magnetic field pushes the current in a metal strip to one side.",
        "This creates a small voltage across the strip.",
        "The effect is used in sensors in cars and mobile phones.",
        "It helps to measure the speed of wheels and the position of parts.",
        "Mobile phones have become very popular.",
      ],
      odd: 4,
      why: "Parça manyetik alanın akımı bir yana ittiği etkiyi ve kullanımlarını anlatır. Cep telefonlarının çok popüler olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
