import type { YokdilDeneme } from "./types";

export const FEN_14: YokdilDeneme = {
  no: 14,
  field: "fen",
  vocab: [
    [
      "Most of the particles passed straight through the gold foil, but a few were ---- back towards the source.",
      ["deflected", "absorbed", "dissolved", "frozen", "invented"],
      "Parçacıkların çoğu altın yapraktan geçerken birkaçının kaynağa doğru geri 'saptırıldığı' (deflected) anlatılır.",
    ],
    [
      "The gases were named 'noble' because they are extremely ---- and rarely combine with other elements.",
      ["unreactive", "dangerous", "colourful", "heavy", "common"],
      "Gazların son derece 'tepkimesiz' (unreactive) olduğu ve diğer elementlerle nadiren birleştiği için 'soy' adını aldığı anlatılır.",
    ],
    [
      "A catalyst speeds up a chemical reaction without being ---- in the process.",
      ["used up", "warmed up", "picked up", "looked up", "set up"],
      "Katalizörün süreç içinde 'tükenmeden' (used up) kimyasal tepkimeyi hızlandırdığı anlatılır.",
    ],
    [
      "Pasteur noticed that the crystals came in two forms that were mirror images of each other and could not be ---- on top of one another.",
      ["superimposed", "dissolved", "compared", "measured", "described"],
      "Pasteur'ün kristallerin birbirinin ayna görüntüsü olan ve üst üste 'çakıştırılamayan' (superimposed) iki biçimde olduğunu fark ettiği anlatılır.",
    ],
    [
      "When excess fertiliser is washed into the sea, it can ---- the rapid growth of algae.",
      ["trigger", "prevent", "measure", "freeze", "hide"],
      "Fazla gübrenin denize karışmasının alglerin hızlı büyümesini 'tetikleyebileceği' (trigger) anlatılır.",
    ],
    [
      "Every element ---- light at a unique set of wavelengths when it is heated, like a fingerprint.",
      ["gives off", "takes in", "puts away", "turns down", "runs out of"],
      "Her elementin ısıtıldığında parmak izi gibi kendine özgü dalga boylarında ışık 'yaydığı' (gives off) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The famous gold foil experiment ---- in Manchester between 1908 and 1913.",
      ["was carried out", "carried out", "has carried out", "was carrying out", "had carried out"],
      "Deney yapılan bir işlemdir ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was carried out'.",
    ],
    [
      "If Rayleigh had not noticed a tiny difference in the weight of nitrogen, argon ---- for many more years.",
      ["might have remained unknown", "might remain unknown", "will remain unknown", "remained unknown", "had remained unknown"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time helium was found on Earth in 1895, it ---- in the Sun's spectrum for almost thirty years.",
      ["had been observed", "has been observed", "is observed", "will be observed", "had observed"],
      "Dünya'da bulunmasından (geçmiş) önce süregelen edilgen durum: Past Perfect Passive 'had been observed'.",
    ],
    [
      "Hevesy, ---- work on radioactive tracers won him the Nobel Prize, also hid two colleagues' medals during the war.",
      ["whose", "who", "which", "whom", "where"],
      "Çalışma Hevesy'ye aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only when the gas was cooled to extremely low temperatures ---- possible to turn it into a liquid.",
      ["was it", "it was", "it is", "is it", "did it"],
      "'Only when' ile başlayan cümlede ana cümle devrik olur: 'was it'.",
    ],
    [
      "The result was so surprising ---- Rutherford compared it to a shell bouncing back from tissue paper.",
      ["that", "which", "as", "such", "than"],
      "'so surprising that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- catalytic converters reduce harmful emissions, they do not reduce the amount of carbon dioxide produced.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Zararlı emisyonları azaltmaları ile karbondioksit miktarını azaltmamaları zıttır: 'Although'.",
    ],
    [
      "Fish ---- habitats are affected by low oxygen must swim away or die.",
      ["whose", "who", "which", "whom", "where"],
      "Yaşam alanları balıklara aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "The medals are said ---- in a jar of acid on a laboratory shelf until the end of the war.",
      ["to have been kept", "to keep", "keeping", "to be keeping", "to have kept"],
      "Madalyalar saklanan nesnelerdir ve olay geçmişte kalmıştır: 'be said to have been + V3'.",
    ],
    [
      "The two forms of the molecule look almost identical ---- can have very different effects in the body.",
      ["but", "and so", "or", "unless", "because"],
      "Neredeyse aynı görünmeleri ile vücutta çok farklı etkiler yaratabilmeleri karşıtlıktır: 'but'.",
    ],
    [
      "Light ---- from the Sun during the eclipse contained an unknown yellow line.",
      ["collected", "collecting", "which collected", "to collect", "has collected"],
      "Işık toplanan bir şeydir; edilgen anlamlı geçmiş ortaç 'collected' gerekir.",
    ],
    [
      "Farmers are advised to apply fertiliser carefully ---- less of it is washed into rivers.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Rutherford described the atom as if it ---- a tiny solar system.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı bir benzetme yapılır: 'were'.",
    ],
    [
      "The hotter the catalytic converter becomes, ---- it works.",
      ["the more efficiently", "more efficiently", "the most efficiently", "efficienter", "the efficientest"],
      "'The hotter …, the more efficiently …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "At the beginning of the twentieth century, many physicists believed that the atom was a ball of positive charge with tiny negative electrons scattered through it, {1} plums in a pudding. In 1909, two researchers working with Ernest Rutherford at the University of Manchester, Hans Geiger and Ernest Marsden, fired a beam of positively charged particles at an extremely thin sheet of gold foil. They expected the particles to pass through with only small changes in direction, {2} the positive charge was thought to be spread evenly. Most did pass straight through, but about one in every eight thousand bounced back at a large angle. Rutherford later said that this was as surprising as if a shell fired at a piece of tissue paper had come back and hit the person who fired it. {3} this result, he concluded in 1911 that almost all the mass of an atom is concentrated in a very small, positively charged centre, {4} he called the nucleus, and that the rest of the atom is mostly empty space. His model was later refined by other scientists, {5} the basic idea of a nucleus surrounded by electrons remains the foundation of modern atomic physics.",
      blanks: [
        [
          "(21) ----",
          ["like", "as if", "unlike", "such as", "as though"],
          "'like plums in a pudding' = 'pudingteki kuru erikler gibi': isimden önce benzetme bildiren 'like'.",
        ],
        [
          "(22) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Parçacıkların az sapmasının beklenmesinin nedeni pozitif yükün eşit dağıldığının düşünülmesidir: 'because'.",
        ],
        [
          "(23) ----",
          ["On the basis of", "In spite of", "Instead of", "Apart from", "Regardless of"],
          "Rutherford'un bu sonuca 'dayanarak' çıkarım yaptığı anlatılır: 'On the basis of'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'centre' ifadesini niteleyen ve nesne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["but", "because", "so", "unless", "since"],
          "Modelin geliştirilmesi ile temel fikrin korunması karşıtlıktır: 'but'.",
        ],
      ],
    },
    {
      text:
        "In the early 1890s, the British physicist Lord Rayleigh noticed something strange. Nitrogen obtained from the air was always slightly heavier than nitrogen produced from chemical compounds, {1} the difference was only about half of one per cent. Working with the chemist William Ramsay, he suspected that the nitrogen from the air contained a small amount of an unknown, heavier gas. In 1894, they succeeded in isolating it {2} removing all the nitrogen and oxygen from a sample of air. The new gas, which made up almost one per cent of the atmosphere, refused to react with any other substance, so they named it argon, from the Greek word for 'lazy'. Over the next few years, Ramsay and his colleagues discovered several other similar gases, including neon, krypton and xenon, {3} they obtained by cooling air until it became liquid and then allowing it to boil off slowly. These elements formed an entirely new group in the periodic table, {4} Mendeleev had not predicted. Today, they are used in lighting, welding and lasers, {5} their lack of reactivity makes them useful for protecting other materials. Rayleigh and Ramsay both received Nobel Prizes in 1904.",
      blanks: [
        [
          "(26) ----",
          ["although", "because", "so", "unless", "since"],
          "Azot örnekleri arasında fark olması ile farkın çok küçük olması karşıtlıktır: 'although'.",
        ],
        [
          "(27) ----",
          ["by", "with", "for", "from", "to"],
          "'by + V-ing' bir şeyin nasıl yapıldığını bildirir: 'by removing'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk 'neon, krypton and xenon' gazlarını niteleyen ve nesne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(29) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'an entirely new group' ifadesini niteleyen ve nesne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(30) ----",
          ["and", "but", "unless", "although", "or"],
          "Kullanım alanları ile tepkimesizliklerinin yararı birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although helium is the second most common element in the universe, ----.",
      [
        "it was first detected far from Earth",
        "it is used to fill balloons and airships",
        "it is lighter than air and does not burn",
        "it is produced inside stars by nuclear fusion",
        "it becomes a liquid at very low temperatures",
      ],
      "'Although' zıtlık ister: helyum evrendeki en yaygın ikinci element olsa da Dünya'da bulunmadan önce Güneş'te keşfedildi.",
    ],
    [
      "If cars had no catalytic converters, ----.",
      [
        "air pollution in cities would be much worse",
        "the engines had been more efficient",
        "most drivers will buy electric cars",
        "the exhaust contained harmful gases",
        "platinum is a rare metal",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + yalın fiil' ister: kentlerdeki hava kirliliği çok daha kötü olurdu.",
    ],
    [
      "Pasteur separated the two types of crystals by hand ----.",
      [
        "using a magnifying glass and tweezers",
        "because he wanted to destroy them",
        "so that they would mix together again",
        "although he could not see any difference",
        "unless they had already been dissolved",
      ],
      "Pasteur'ün iki kristal türünü büyüteç ve cımbız kullanarak elle ayırdığı anlatılır.",
    ],
    [
      "Since the first dead zone was described in the 1960s, ----.",
      [
        "their number has grown",
        "fertilisers had been used on farms",
        "most fish would have left the area",
        "the oceans will become warmer",
        "few scientists studied the problem",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has increased'.",
    ],
    [
      "Unless a radioactive tracer is used in very small amounts, ----.",
      [
        "it could harm the patient",
        "the experiment would have failed",
        "most doctors had refused it",
        "the plant will grow faster",
        "the results were clear",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: hastaya zarar verebilir.",
    ],
    [
      "The yellow line in the Sun's spectrum was so unusual ----.",
      [
        "that astronomers concluded it came from a new element",
        "because it appeared during a total eclipse in India",
        "although it was very faint and difficult to see",
        "unless it was caused by an error in the instruments",
        "while other lines were produced by known elements",
      ],
      "'so unusual that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Chemists have found that when the wrong form of a drug molecule is used, ----.",
      [
        "it may be less effective or even harmful",
        "the patient would have recovered",
        "most drugs had been tested",
        "the crystals will dissolve",
        "the molecule was very large",
      ],
      "'when' ile genel bir bulgu anlatılır: bir ilaç molekülünün yanlış biçimi kullanıldığında daha az etkili, hatta zararlı olabilir.",
    ],
    [
      "So unreactive is argon ----.",
      [
        "that it is used to protect metals during welding",
        "because its atoms have a full outer shell of electrons",
        "although it makes up almost one per cent of the air",
        "while other gases react easily with oxygen",
        "unless it is heated to a very high temperature",
      ],
      "Devrik 'So unreactive is … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While most dead zones appear in summer, ----.",
      [
        "some have become permanent",
        "algae grow faster in warm water",
        "fish need oxygen to survive",
        "rivers carry water to the sea",
        "farmers use fertiliser in spring",
      ],
      "'While' iki durumu karşılaştırır: çoğu ölü bölge yazın ortaya çıkarken bazıları kalıcı hâle gelmiştir.",
    ],
    [
      "Once the war had ended, ----.",
      [
        "the gold was recovered",
        "the medals will be hidden again",
        "the scientists would have left Denmark",
        "acid dissolves many metals",
        "most laboratories had been destroyed",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: altın asitten geri kazanıldı ve madalyalar yeniden yapıldı.",
    ],
    [
      "No sooner had the particles been fired at the foil ----.",
      [
        "than some of them bounced back",
        "when the experiment had finished",
        "that the nucleus will be discovered",
        "before the foil had been made",
        "so they passed straight through",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Almost all the mass of an atom is concentrated in a very small nucleus.",
      [
        "Atomun kütlesinin neredeyse tamamı minik çekirdektedir.",
        "Bir atomun kütlesi, elektronlar arasında eşit olarak dağılmıştır.",
        "Atomun çekirdeği, atomun en büyük ve en hafif parçasıdır.",
        "Bir atomun kütlesinin çok küçük bir kısmı çekirdekte bulunur.",
        "Atomların çekirdeği yoktur ve kütleleri boşlukta dağılmıştır.",
      ],
      "'Almost all the mass of an atom' 'bir atomun kütlesinin neredeyse tamamı', 'is concentrated in a very small nucleus' 'çok küçük bir çekirdekte toplanmıştır' demektir.",
    ],
    [
      "The new gas refused to react with any other substance.",
      [
        "Yeni gaz, başka hiçbir maddeyle tepkimeye girmedi.",
        "Yeni gaz, diğer tüm maddelerle kolayca tepkimeye girdi.",
        "Diğer maddeler, yeni gazın oluşmasını engelledi.",
        "Yeni gaz, yalnızca oksijenle tepkimeye girdi.",
        "Yeni gaz, tepkimeye girdiği maddeleri yok etti.",
      ],
      "'refused to react with any other substance' 'başka hiçbir maddeyle tepkimeye girmedi' demektir.",
    ],
    [
      "Catalytic converters turn harmful gases into less harmful substances.",
      [
        "Katalitik konvertörler, zararlı gazları daha az zararlı maddelere dönüştürür.",
        "Katalitik konvertörler, zararsız gazları zararlı maddelere dönüştürür.",
        "Zararlı gazlar, katalitik konvertörlerin çalışmasını engeller.",
        "Katalitik konvertörler, zararlı gazları hiç değiştirmeden dışarı atar.",
        "Zararlı maddeler, katalitik konvertörlerde gaza dönüştürülür.",
      ],
      "'turn harmful gases into less harmful substances' 'zararlı gazları daha az zararlı maddelere dönüştürür' demektir.",
    ],
    [
      "The two forms of the molecule are mirror images of each other.",
      [
        "Molekülün iki biçimi birbirinin ayna görüntüsüdür.",
        "Molekülün iki biçimi birbirinin tam olarak aynısıdır.",
        "Molekül, aynada görüldüğünde iki biçime ayrılır.",
        "Molekülün iki biçimi aynaların yapımında kullanılır.",
        "Molekülün ayna görüntüsü yoktur.",
      ],
      "'The two forms of the molecule' 'molekülün iki biçimi', 'are mirror images of each other' 'birbirinin ayna görüntüsüdür' demektir.",
    ],
    [
      "When the algae die and decay, the bacteria that break them down use up the oxygen in the water.",
      [
        "Ölen algleri ayrıştıran bakteriler sudaki oksijeni bitirir.",
        "Algler ölüp çürüdüğünde, sudaki oksijen miktarı büyük ölçüde artar.",
        "Bakteriler, sudaki oksijeni tükettikten sonra algleri öldürür.",
        "Algler, bakterilerin sudaki oksijeni tüketmesini engeller.",
        "Sudaki oksijen, alglerin çürümesini önler.",
      ],
      "'When the algae die and decay' 'algler ölüp çürüdüğünde', 'the bacteria that break them down use up the oxygen' 'onları ayrıştıran bakteriler oksijeni tüketir' demektir.",
    ],
    [
      "Tracers allow scientists to follow the path of a substance through a living organism.",
      [
        "İzleyiciler, bilim insanlarının bir maddenin canlı bir organizma içindeki yolunu takip etmesini sağlar.",
        "İzleyiciler, bir maddenin canlı organizmalara girmesini engeller.",
        "Canlı organizmalar, izleyicilerin yolunu takip etmek için kullanılır.",
        "Bilim insanları, izleyicileri organizmalardan uzaklaştırmak için madde kullanır.",
        "İzleyiciler yalnızca cansız maddelerde kullanılabilir.",
      ],
      "'allow scientists to follow the path of a substance' 'bilim insanlarının bir maddenin yolunu takip etmesini sağlar', 'through a living organism' 'canlı bir organizma içindeki' demektir.",
    ],
  ],
  trEn: [
    [
      "Rutherford, atomun büyük ölçüde boş olduğunu gösterdi.",
      [
        "Rutherford showed that the atom is largely empty.",
        "Rutherford showed that the atom is completely solid.",
        "Rutherford proved that atoms do not exist.",
        "The empty atom was discovered long before Rutherford.",
        "Rutherford showed that atoms are larger than expected.",
      ],
      "'atomun büyük ölçüde boş olduğunu gösterdi' 'showed that the atom is largely empty' karşılığıdır.",
    ],
    [
      "Soy gazlar aydınlatma ve kaynak işlerinde kullanılır.",
      [
        "The noble gases are used in lighting and welding.",
        "The noble gases are dangerous and cannot be used.",
        "Lighting and welding produce the noble gases.",
        "The noble gases are used only in medicine.",
        "Welding is impossible without burning the noble gases.",
      ],
      "'aydınlatma ve kaynak işlerinde kullanılır' 'are used in lighting and welding' karşılığıdır.",
    ],
    [
      "Katalizörler, kimyasal tepkimeleri tükenmeden hızlandırır.",
      [
        "Catalysts speed up chemical reactions without being used up.",
        "Catalysts slow down chemical reactions and are used up quickly.",
        "Chemical reactions speed up the production of catalysts.",
        "Catalysts are used up completely in every chemical reaction.",
        "Catalysts have no effect on the speed of chemical reactions.",
      ],
      "'tükenmeden' 'without being used up', 'hızlandırır' 'speed up' karşılığıdır.",
    ],
    [
      "Helyum ilk olarak bir güneş tutulması sırasında tespit edildi.",
      [
        "Helium was first detected during a solar eclipse.",
        "Helium caused a solar eclipse when it was first detected.",
        "Helium was first detected in a laboratory on Earth.",
        "Solar eclipses are caused by large amounts of helium.",
        "Helium can only be detected during a solar eclipse.",
      ],
      "'ilk olarak … tespit edildi' 'was first detected', 'bir güneş tutulması sırasında' 'during a solar eclipse' karşılığıdır.",
    ],
    [
      "Ölü bölgeler, sudaki oksijen düzeyinin çok düşük olduğu alanlardır.",
      [
        "Dead zones are areas where the level of oxygen in the water is very low.",
        "Dead zones are areas where the water contains too much oxygen.",
        "Dead zones are areas of land where nothing grows.",
        "Low oxygen levels are caused by too many fish in the water.",
        "Dead zones are found only in fresh water.",
      ],
      "'sudaki oksijen düzeyinin çok düşük olduğu alanlar' 'areas where the level of oxygen in the water is very low' karşılığıdır.",
    ],
    [
      "Pasteur, molekülün iki biçiminin ışığı farklı yönlere çevirdiğini keşfetti.",
      [
        "Pasteur discovered that the two forms of the molecule rotated light in different directions.",
        "Pasteur discovered that light changed the molecule into two forms.",
        "Pasteur discovered that the molecule had only one form.",
        "Pasteur used light to destroy the two forms of the molecule.",
        "Pasteur discovered that the two forms of the molecule did not affect light.",
      ],
      "'ışığı farklı yönlere çevirdiğini keşfetti' 'discovered that … rotated light in different directions' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Car engines produce several harmful gases, including carbon monoxide, unburned fuel and nitrogen oxides, which contribute to smog and respiratory illness. In the 1970s, growing concern about air pollution in cities such as Los Angeles led governments to introduce strict limits on vehicle emissions, and manufacturers responded by fitting cars with catalytic converters. A catalytic converter is a metal container in the exhaust system that contains a ceramic honeycomb coated with small amounts of precious metals such as platinum, palladium and rhodium. These metals act as catalysts: they speed up chemical reactions without being used up themselves. As the hot exhaust gases pass through the honeycomb, carbon monoxide and unburned fuel are converted into carbon dioxide and water, and nitrogen oxides are converted into harmless nitrogen. The devices are highly effective, removing around ninety per cent of these pollutants, but they work only when they are hot, so most pollution from modern cars is produced in the first few minutes after the engine is started. They also required a change in fuel, because lead, which was then added to petrol, damaged the catalyst. The valuable metals inside them have also made catalytic converters a common target for thieves.",
      questions: [
        [
          "According to the passage, catalytic converters were introduced mainly because ----.",
          [
            "governments set limits on pollution from vehicles",
            "manufacturers wanted to make cars faster",
            "precious metals had become cheaper",
            "drivers asked for quieter cars",
            "lead had been removed from petrol",
          ],
          "Metne göre kentlerde hava kirliliği kaygısının artması hükümetleri araç emisyonlarına sıkı sınırlar getirmeye yöneltti.",
        ],
        [
          "It can be understood from the passage that a car produces most of its pollution ----.",
          [
            "shortly after it is started",
            "when it travels at high speed",
            "after many years of use",
            "when the converter is very hot",
            "only in cities like Los Angeles",
          ],
          "Konvertörlerin yalnızca sıcakken çalışması nedeniyle modern arabaların kirliliğinin çoğunun motor çalıştırıldıktan sonraki ilk birkaç dakikada üretildiği belirtilir.",
        ],
        [
          "The writer mentions thieves in order to show that ----.",
          [
            "the metals used in converters are valuable to criminals and sell for high prices",
            "converters are easy to remove from most cars without tools",
            "lead is still added to petrol",
            "cars produce harmful gases",
            "converters do not work well",
          ],
          "İçlerindeki değerli metallerin konvertörleri hırsızların hedefi yapması, bu metallerin değerli olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1848, the young French chemist Louis Pasteur was studying crystals of a substance related to tartaric acid, a compound found in the residue of wine-making. Chemists already knew that two forms of the substance existed: one, when dissolved in water, rotated polarised light, while the other, although it had exactly the same chemical composition, did not. Examining the crystals under a microscope, Pasteur noticed that they came in two slightly different shapes that were mirror images of each other, like a pair of hands. Using tweezers, he patiently separated the left-handed and right-handed crystals into two piles. When he dissolved each pile separately, he found that one solution rotated light to the left and the other to the right by exactly the same amount, while a mixture of the two had no effect. Pasteur concluded that the molecules themselves must have a 'handedness'. This property, now called chirality, is extremely important in biology, because living things often use only one form of a molecule. In medicine, the two forms of a drug can have very different effects: one may be helpful while the other is ineffective or even harmful. For this reason, many modern drugs are produced in only one form.",
      questions: [
        [
          "According to the passage, the two forms of the substance studied by Pasteur ----.",
          [
            "had the same composition but behaved differently with light",
            "had completely different chemical compositions",
            "were both unable to rotate light",
            "could only be found in living things",
            "were produced by different kinds of wine",
          ],
          "Metne göre iki biçim tamamen aynı kimyasal bileşime sahipti ama biri polarize ışığı döndürürken diğeri döndürmüyordu.",
        ],
        [
          "The comparison with 'a pair of hands' is used to explain ----.",
          [
            "how the crystals mirrored each other",
            "how Pasteur separated the crystals",
            "why tweezers were needed",
            "why the mixture had no effect",
            "how wine is made",
          ],
          "'Bir çift el' benzetmesi kristallerin birbirinin ayna görüntüsü olduğunu açıklamak için kullanılır.",
        ],
        [
          "It can be inferred from the passage that producing drugs in only one form ----.",
          [
            "can help to avoid unwanted effects",
            "makes them less effective",
            "is impossible with modern methods",
            "was first done by Pasteur",
            "has no medical advantage",
          ],
          "Bir ilacın iki biçiminden birinin etkisiz ya da zararlı olabilmesi, tek biçimde üretimin istenmeyen etkileri önlemeye yardım ettiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "When light from a hot object is passed through a prism, it spreads out into a spectrum of colours. In the nineteenth century, scientists discovered that each chemical element, when heated, produces its own pattern of bright lines in the spectrum, which can be used to identify it. Astronomers soon realised that this technique could reveal what the Sun and stars were made of. During a total solar eclipse in 1868, the French astronomer Jules Janssen, observing from India, noticed a bright yellow line in the spectrum of the gases around the Sun. Soon afterwards, the English astronomer Norman Lockyer observed the same line and concluded that it did not match any known element. He named the new element helium, from the Greek word for the Sun. Many chemists were doubtful, because no such element had ever been found on Earth. It was not until 1895 that William Ramsay detected the same spectral line in a gas released from a uranium mineral, confirming that helium existed on our planet too. Helium is now known to be the second most abundant element in the universe, produced in stars by nuclear fusion. On Earth, however, it is relatively rare, and because it is so light, it escapes into space once it is released into the atmosphere.",
      questions: [
        [
          "According to the passage, the spectral lines of an element ----.",
          [
            "can be used to identify it",
            "are the same for all elements",
            "can only be seen during an eclipse",
            "were discovered by Lockyer",
            "are produced only by the Sun",
          ],
          "Metne göre her element ısıtıldığında kendi parlak çizgi desenini üretir ve bu desen onu tanımlamak için kullanılabilir.",
        ],
        [
          "Many chemists doubted the existence of helium at first because ----.",
          [
            "it had never been found on Earth",
            "it was too heavy to exist in the Sun",
            "Janssen's observations were incorrect",
            "it was not visible during the eclipse",
            "it reacted with all other elements",
          ],
          "Metinde böyle bir elementin Dünya'da hiç bulunmamış olması nedeniyle pek çok kimyacının şüpheli olduğu belirtilir.",
        ],
        [
          "It can be understood from the passage that helium is rare on Earth partly because ----.",
          [
            "it escapes from the atmosphere into space",
            "it is not produced in stars",
            "it is heavier than other gases",
            "it combines with uranium",
            "it was discovered so late",
          ],
          "Helyumun çok hafif olduğu için atmosfere salındığında uzaya kaçması, Dünya'da nadir olmasının nedenlerinden biridir.",
        ],
      ],
    },
    {
      text:
        "Dead zones are areas of the ocean, or of large lakes, where the water contains so little oxygen that most marine life cannot survive. Most are caused by human activity. When fertilisers and animal waste from farms are washed into rivers by rain, they carry large amounts of nitrogen and phosphorus to the sea. These nutrients cause tiny algae to grow very rapidly, producing what is known as an algal bloom. When the algae die, they sink to the bottom, where bacteria break them down. In doing so, the bacteria use up the oxygen in the water faster than it can be replaced, especially in summer, when warm surface water forms a layer that does not mix with the colder water below. Fish and other animals that can move may swim away, but slower creatures such as crabs, worms and shellfish often die. One of the largest dead zones forms every summer in the Gulf of Mexico, at the mouth of the Mississippi River, which drains much of the agricultural land of the United States. Scientists have counted more than four hundred dead zones worldwide. The solution, many argue, lies on land: reducing the use of fertilisers and planting vegetation along rivers to absorb nutrients before they reach the sea.",
      questions: [
        [
          "According to the passage, the lack of oxygen in dead zones is caused by ----.",
          [
            "bacteria that consume oxygen while breaking down dead algae",
            "fish that use up all the oxygen in the water",
            "the cold water at the bottom of the sea",
            "chemicals released by factories on the coast",
            "the absence of algae in the water",
          ],
          "Metne göre ölen algleri ayrıştıran bakteriler sudaki oksijeni yerine konabileceğinden daha hızlı tüketir.",
        ],
        [
          "The writer mentions the Mississippi River in order to show ----.",
          [
            "how farm runoff can create a large dead zone",
            "that dead zones only form in rivers",
            "why fish prefer fresh water",
            "how algae are carried inland",
            "that the problem has been solved",
          ],
          "ABD'nin tarım arazilerinin çoğunu boşaltan Mississippi'nin ağzında büyük bir ölü bölge oluşması, tarımsal akıntının nasıl büyük bir ölü bölge yaratabileceğini gösterir.",
        ],
        [
          "It can be inferred from the passage that dead zones are more severe in summer because ----.",
          [
            "layers of water do not mix and oxygen is not replaced",
            "fishermen catch more fish at that time",
            "farmers stop using fertiliser",
            "algae cannot grow in warm water",
            "rain carries less fertiliser to the sea",
          ],
          "Yazın ılık yüzey suyunun alttaki soğuk suyla karışmayan bir katman oluşturması, oksijenin yerine konamamasına yol açar.",
        ],
      ],
    },
    {
      text:
        "The Hungarian chemist George de Hevesy is best known for developing the use of radioactive tracers. In 1911, while working in Manchester, he was asked to separate a radioactive substance from lead, but he found that this was impossible, because the two were chemically identical forms of the same element. He realised that this could be useful: if a small amount of a radioactive form of an element was added to a substance, its radiation could be detected wherever it went, allowing scientists to follow its path. According to a well-known story, he first used the idea to prove that his landlady was serving leftover meat, by secretly adding a little radioactive material to his uneaten food and detecting it in a meal several days later. In more serious research, he used tracers to study how plants absorb lead and how the human body uses elements such as phosphorus. Another famous episode took place in 1940, when German forces invaded Denmark, where he was then working. Two German scientists had sent their gold Nobel Prize medals to Copenhagen for safekeeping, and taking gold out of Germany was illegal. To prevent the medals from being found, Hevesy dissolved them in a mixture of acids and left the solution on a laboratory shelf. After the war, the gold was recovered and the medals were recast. Hevesy received the Nobel Prize in Chemistry in 1943.",
      questions: [
        [
          "According to the passage, Hevesy got the idea for tracers when ----.",
          [
            "he failed to separate a radioactive substance from lead",
            "he worked on a farm in Hungary",
            "he studied how plants absorb water",
            "he was asked to hide Nobel medals",
            "he discovered phosphorus in the human body",
          ],
          "Metne göre Hevesy radyoaktif bir maddeyi kurşundan ayırmaya çalıştığında bunun imkânsız olduğunu fark etti ve bundan yararlanılabileceğini düşündü.",
        ],
        [
          "The story about the landlady is used to show ----.",
          [
            "an amusing use of tracers",
            "that tracers are dangerous to eat",
            "how the medals were hidden",
            "why Hevesy left Manchester",
            "how plants absorb lead",
          ],
          "Ev sahibesinin artık et servis ettiğini kanıtlama hikâyesi, izleyicilerin basit ve esprili bir uygulamasını gösterir.",
        ],
        [
          "It can be understood from the passage that Hevesy dissolved the medals in order to ----.",
          [
            "stop them from being discovered by the occupying forces",
            "test a new type of acid",
            "make new medals for himself",
            "send the gold back to Germany",
            "use the gold as a tracer",
          ],
          "Madalyaların bulunmasını önlemek için onları asitte çözdüğü belirtilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Fluorine is the most reactive of all the elements, and for much of the nineteenth century chemists failed to isolate it. ---- In 1886, the French chemist Henri Moissan finally succeeded, and he was later awarded the Nobel Prize for his work.",
      [
        "Several who tried were badly hurt by its fumes.",
        "Fluorine is added to toothpaste in the form of compounds called fluorides.",
        "Many chemical elements were discovered during the nineteenth century.",
        "France had several important centres of chemical research at the time.",
        "Some elements are found naturally in pure form, such as gold.",
      ],
      "Boşluktan önce kimyacıların florini ayırmayı başaramadığı, sonra Moissan'ın başardığı anlatılır; boşluğa deneyenlerin bazılarının zehirli dumanlarla yaralandığını ya da öldüğünü anlatan cümle gelmelidir.",
    ],
    [
      "In 1669, the German merchant Hennig Brand was trying to make gold from human urine. ---- Instead, he discovered a substance that glowed in the dark, which was later named phosphorus.",
      [
        "His experiments did not produce any gold.",
        "Gold has been valued by people for thousands of years.",
        "Urine contains water and many dissolved substances.",
        "Many people in the seventeenth century believed in alchemy.",
        "Phosphorus is an important element in fertilisers.",
      ],
      "Boşluktan sonra 'Instead' ile parlayan bir madde keşfettiği söylenir; boşluğa deneylerinin hiç altın üretmediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1811, the Italian scientist Amedeo Avogadro proposed that equal volumes of different gases, at the same temperature and pressure, contain the same number of particles. ---- It was only fifty years later that another Italian chemist, Stanislao Cannizzaro, showed how important it was.",
      [
        "At the time, his idea was largely ignored.",
        "Gases expand when they are heated and contract when they are cooled.",
        "Italy was divided into several separate states in the early nineteenth century.",
        "Many scientists of the period also studied mathematics.",
        "Avogadro worked as a lawyer before becoming a scientist.",
      ],
      "Boşluktan sonra fikrin önemini ancak elli yıl sonra Cannizzaro'nun gösterdiği söylenir; boşluğa o dönemde fikrin büyük ölçüde görmezden gelindiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1913, the British chemist Frederick Soddy introduced the word 'isotope'. ---- They have the same chemical properties but different masses.",
      [
        "It names atoms of one element with different neutron numbers.",
        "Many words in science come from Greek or Latin.",
        "Soddy also wrote books about economics later in his life.",
        "Atoms are far too small to be seen with an ordinary microscope.",
        "Marie Curie studied radioactivity in Paris.",
      ],
      "Boşluktan sonra 'They' ile aynı kimyasal özelliklere ama farklı kütlelere sahip atomlardan söz edilir; boşluğa izotopun aynı elementin farklı sayıda nötron içeren atomlarını tanımladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Around 1807, Humphry Davy sent powerful currents from large batteries through melted salts. ---- Using this method, he discovered several new elements, including sodium and potassium.",
      [
        "He found that the current split them into elements.",
        "Electricity was still a new and poorly understood force at the time.",
        "Davy also invented a safety lamp for coal miners.",
        "Sodium is a soft metal that reacts violently with water.",
        "Many chemists of the period worked in small private laboratories.",
      ],
      "Boşluktan sonra 'Using this method' ile yeni elementler keşfettiği söylenir; boşluğa akımın maddeleri bileşen elementlerine ayırabildiğini bulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Enzymes are proteins that act as catalysts in living organisms. ---- Without them, many of the reactions needed for life would happen far too slowly.",
      [
        "They can speed up chemical reactions by millions of times.",
        "Proteins are made up of long chains of amino acids.",
        "Some washing powders contain enzymes that remove stains.",
        "The human body contains thousands of different proteins.",
        "Enzymes were first studied in the nineteenth century.",
      ],
      "Boşluktan sonra enzimler olmadan yaşam için gerekli tepkimelerin çok yavaş olacağı söylenir; boşluğa enzimlerin kimyasal tepkimeleri milyonlarca kat hızlandırabildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Neon signs work by passing an electric current through a tube of gas.",
        "The current causes the gas to glow.",
        "Neon itself produces a reddish-orange light.",
        "Many cities have famous streets filled with shops and restaurants.",
        "Other gases or coatings inside the tube are used to create different colours.",
      ],
      odd: 3,
      why: "Parça neon tabelaların çalışmasını anlatır. Pek çok kentte dükkân ve restoranlarla dolu ünlü caddeler bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Chemists use the pH scale to express acidity.",
        "Lemons are often used to add flavour to food and drinks.",
        "Values below seven indicate an acid, and values above seven indicate an alkali.",
        "Pure water has a pH of exactly seven.",
        "A drop of one unit means the liquid is ten times more acidic.",
      ],
      odd: 1,
      why: "Parça pH ölçeğini anlatır. Limonların yiyecek ve içeceklere tat vermek için kullanıldığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Liquid nitrogen boils at around minus one hundred and ninety-six degrees.",
        "It is used to freeze and store biological samples such as blood and cells.",
        "Doctors also use it to remove warts and other skin growths.",
        "Antarctica is the coldest continent on the planet.",
        "Because it is so cold, it must be handled with special protective equipment.",
      ],
      odd: 3,
      why: "Parça sıvı azotun özelliklerini ve kullanımını anlatır. Antarktika'nın en soğuk kıta olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Fireworks get their colours from metal salts added to the explosive mixture.",
        "Strontium produces red, copper produces blue and sodium produces yellow.",
        "Blue is the most difficult colour to produce brightly.",
        "This is because the copper compounds break down if the temperature is too high.",
        "New Year celebrations in many cities include large firework displays.",
      ],
      odd: 4,
      why: "Parça havai fişeklerin renklerinin kimyasını anlatır. Pek çok kentte yılbaşı kutlamalarında havai fişek gösterileri yapıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hard water contains high levels of dissolved calcium and magnesium.",
        "It is common in areas where the rocks are made of limestone or chalk.",
        "Limestone is often used as a building material.",
        "When hard water is heated, these minerals can form a white deposit inside kettles and pipes.",
        "Hard water also makes it more difficult for soap to form a lather.",
      ],
      odd: 2,
      why: "Parça sert suyu anlatır. Kireçtaşının yapı malzemesi olarak kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Soap molecules have one end that is attracted to water and another that is attracted to grease.",
        "When people wash their hands, the grease-loving ends surround particles of dirt and oil.",
        "Many shops sell soap in a wide range of colours and scents.",
        "The water-loving ends then allow the dirt to be rinsed away.",
        "Soap can also break apart the outer layer of some viruses.",
      ],
      odd: 2,
      why: "Parça sabunun kimyasal olarak nasıl temizlediğini anlatır. Dükkânlarda farklı renk ve kokularda sabun satıldığını söyleyen III. cümle konu dışıdır.",
    },
  ],
};
