import type { YokdilDeneme } from "./types";

export const FEN_98: YokdilDeneme = {
  no: 98,
  field: "fen",
  vocab: [
    [
      "The material ---- light around an object, so that it seems to pass straight through as if nothing were there.",
      ["guides", "absorbs", "blocks", "stores", "heats"],
      "Malzemenin ışığı bir nesnenin çevresinden 'yönlendirdiği' (guides) ve böylece ışığın orada hiçbir şey yokmuş gibi doğrudan geçiyor göründüğü anlatılır.",
    ],
    [
      "The program could predict the shape of a protein with an accuracy that ---- that of laboratory experiments.",
      ["rivalled", "ignored", "reduced", "copied", "delayed"],
      "Programın bir proteinin biçimini laboratuvar deneyleriyle 'boy ölçüşen, rekabet eden' (rivalled) bir doğrulukla tahmin edebildiği anlatılır.",
    ],
    [
      "Other laboratories tried to ---- the results, but none of them could produce a superconductor.",
      ["replicate", "hide", "sell", "forget", "praise"],
      "Diğer laboratuvarların sonuçları 'yinelemeye, tekrar üretmeye' (replicate) çalıştığı, ancak hiçbirinin süperiletken üretemediği anlatılır.",
    ],
    [
      "The tubes are only a few billionths of a metre wide, yet they are ---- stronger than steel.",
      ["considerably", "slightly", "hardly", "rarely", "barely"],
      "Tüplerin metrenin yalnızca birkaç milyarda biri genişliğinde olmasına rağmen çelikten 'çok daha' (considerably) güçlü olduğu anlatılır.",
    ],
    [
      "Because the screen uses power only when the image changes, a single charge can ---- for weeks.",
      ["last", "fail", "shrink", "vanish", "break"],
      "Ekran yalnızca görüntü değiştiğinde güç kullandığından tek bir şarjın haftalarca 'dayandığı, sürdüğü' (last) anlatılır.",
    ],
    [
      "Many scientists were quick to ---- the claim, pointing out that the evidence was weak.",
      ["cast doubt on", "look forward to", "put up with", "come up with", "take after"],
      "Pek çok bilim insanının kanıtların zayıf olduğuna dikkat çekerek iddiaya hızla 'şüpheyle yaklaştığı' (cast doubt on) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the program was released, it ---- the structures of almost every known protein.",
      ["had predicted", "predicts", "will predict", "has predicted", "is predicting"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had predicted'.",
    ],
    [
      "If the material really were a superconductor at room temperature, it ---- the way electricity is transmitted.",
      ["would transform", "transforms", "will have transformed", "had transformed", "is transforming"],
      "Şimdiki zamana yönelik gerçek dışı koşul (ikinci tip) cümlesinin ana yan cümlesi: 'would transform'.",
    ],
    [
      "The first invisibility cloak ---- by a team at an American university in 2006.",
      ["was built", "built", "has built", "builds", "is building"],
      "Pelerin yapan değil yapılandır; edilgen geçmiş zaman: 'was built'.",
    ],
    [
      "---- carbon nanotubes are extremely strong, making long cables from them has proved very difficult.",
      ["Although", "Because", "Unless", "So that", "Until"],
      "Nanotüplerin çok güçlü olması ile onlardan uzun kablo yapmanın zor olması zıtlık bildirir: 'Although'.",
    ],
    [
      "The physicist ---- work laid the foundations for the field shared a prize in 2013.",
      ["whose", "who", "which", "whom", "where"],
      "Fizikçinin çalışması; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Seldom ---- a scientific claim spread so quickly on social media.",
      ["has", "did", "was", "is", "had been"],
      "'Seldom' ile başlayan cümlede devrik yapı, 'spread' ortacı ile: 'has'.",
    ],
    [
      "The competition ---- the program's success was announced is held every two years.",
      ["at which", "which", "whose", "when", "what"],
      "Başarının yarışmada açıklandığı belirtilir; edat + ilgi zamiri: 'at which'.",
    ],
    [
      "The more qubits a quantum computer has, ---- it becomes to control them.",
      ["the harder", "the hardest", "harder", "hardest", "so hard"],
      "'The more ..., the more ...' paralel yapısı: 'the harder'.",
    ],
    [
      "The journal insisted that the data ---- available to other researchers.",
      ["be made", "is made", "was made", "to be made", "making"],
      "'insist that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be made'.",
    ],
    [
      "The effect seen in the videos is now thought ---- by impurities in the samples.",
      ["to have been caused", "causing", "to cause", "was caused", "having cause"],
      "Geçmişte gerçekleşmiş edilgen olay için geçmiş edilgen mastar: 'to have been caused'.",
    ],
    [
      "The screen is so easy to read in sunlight ---- many people prefer it to a phone for reading books.",
      ["that", "which", "as", "than", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The researchers had the material ---- by an independent laboratory.",
      ["tested", "test", "testing", "to test", "tests"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'tested'.",
    ],
    [
      "Had the original glass not been so resistant to heat, it ---- popular for baking.",
      ["would never have become", "never becomes", "will never become", "had never become", "never became"],
      "Devrik üçüncü tip koşul cümlesinin ana yan cümlesi: 'would never have become'.",
    ],
    [
      "Each of the tiny capsules in the screen ---- black and white particles.",
      ["contains", "contain", "are containing", "have contained", "be containing"],
      "'Each of' yapısı tekil fiil gerektirir: 'contains'.",
    ],
  ],
  cloze: [
    {
      text:
        "In October 2019, a team of researchers working for Google published a paper claiming that their quantum computer had performed a calculation that would be practically impossible for any ordinary computer. The machine, called Sycamore, used fifty-three qubits, the basic units of a quantum computer, which can exist in a combination of states at the same time. It had to be cooled to a temperature close to absolute zero, {1} even tiny amounts of heat or vibration could disturb the fragile quantum states. The task it performed, which involved sampling the output of a random sequence of operations, had no practical use, {2} it had been chosen specifically because it was thought to be extremely hard for ordinary computers. According to the team, Sycamore completed it in about two hundred seconds, {3} the world's most powerful supercomputer would have needed about ten thousand years. The researchers described this as 'quantum supremacy', the point at which a quantum computer outperforms all ordinary computers on some task. A rival company, IBM, quickly disputed the claim, {4} it argued that a supercomputer using a better method could do the same calculation in about two and a half days. In the following years, other researchers did find faster ordinary methods, {5} the experiment is still widely regarded as an important milestone.",
      blanks: [
        [
          "(21) ----",
          ["because", "although", "unless", "so that", "or"],
          "Makinenin mutlak sıfıra yakın soğutulmasının nedeni ısı ya da titreşimin kuantum durumlarını bozabilmesidir: 'because'.",
        ],
        [
          "(22) ----",
          ["but", "because", "so", "unless", "or"],
          "Görevin pratik yararı olmaması ile özellikle zor olduğu için seçilmesi zıtlık bildirir: 'but'.",
        ],
        [
          "(23) ----",
          ["whereas", "because", "so", "unless", "until"],
          "Sycamore'un iki yüz saniyesi ile süper bilgisayarın on bin yılı karşılaştırılır: 'whereas'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "until"],
          "IBM'in iddiaya itiraz etmesi ve daha iyi bir yöntemle iki buçuk günde yapılabileceğini savunması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "because", "so", "unless", "or"],
          "Daha hızlı yöntemler bulunması ile deneyin hâlâ önemli bir dönüm noktası sayılması zıtlık bildirir: 'but'.",
        ],
      ],
    },
    {
      text:
        "In 1913, Bessie Littleton, the wife of a scientist at an American glass company, complained to her husband that her casserole dish had cracked in the oven. Her husband, Jesse Littleton, brought home the bottom of a glass battery jar made by his company from a special type of glass that could withstand sudden changes in temperature, {1} he asked her to bake a cake in it. The cake was a success, {2} the company soon began to develop a range of glass dishes for the kitchen. The glass, known as borosilicate glass, contains boron oxide, which makes it expand far less than ordinary glass when heated, {3} it is much less likely to crack when moved from a hot oven to a cold surface. The new dishes were launched in 1915 under the name Pyrex, {4} they quickly became popular in homes and laboratories around the world. In the 1990s, however, the American company that by then owned the brand began making its kitchen products from a different, toughened type of ordinary glass, which is cheaper and less likely to break if dropped, {5} some users have complained that the newer dishes are more likely to shatter when heated suddenly. Laboratory glassware sold under the name is still made of borosilicate glass.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Kocasının kavanozun dibini eve getirmesi ve karısından içinde kek pişirmesini istemesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "unless", "although", "or", "so that"],
          "Kekin başarılı olması ve şirketin mutfak kapları geliştirmeye başlaması birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["so", "although", "unless", "or", "until"],
          "Camın ısındığında az genleşmesinin sonucu çatlama olasılığının düşük olmasıdır: 'so'.",
        ],
        [
          "(29) ----",
          ["and", "unless", "although", "or", "until"],
          "Kapların 1915'te piyasaya çıkması ve hızla popüler olması birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["but", "because", "so", "unless", "or"],
          "Yeni camın düşünce daha az kırılması ile ani ısıtmada daha kolay parçalanması zıtlık bildirir: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the first invisibility cloak worked only for microwaves, ----.",
      [
        "it showed that the idea was possible in principle",
        "microwaves are used for cooking",
        "the cloak was small",
        "light travels in waves",
        "it made objects completely invisible to the human eye",
      ],
      "'Although' zıtlık ister: ilk görünmezlik pelerini yalnızca mikrodalgalarda çalışsa da fikrin ilke olarak mümkün olduğunu gösterdi.",
    ],
    [
      "If the structures of proteins could not be predicted by computers, ----.",
      [
        "scientists would still have to determine each one by slow experiments",
        "proteins are large molecules",
        "computers are fast",
        "the program was developed in London",
        "medicines would be much easier and cheaper to design",
      ],
      "İkinci tip koşul: proteinlerin yapıları bilgisayarlarla tahmin edilemeseydi bilim insanları her birini hâlâ yavaş deneylerle belirlemek zorunda olurdu.",
    ],
    [
      "----, the researchers announced that they had made a superconductor that worked at room temperature.",
      [
        "Posting their results online before they had been checked by other scientists",
        "Because metals conduct electricity",
        "Unless it was cold",
        "In spite of being researchers",
        "Since dozens of laboratories had already confirmed their findings",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: sonuçlarını diğer bilim insanları denetlemeden önce internette yayımlayan araştırmacılar oda sıcaklığında çalışan bir süperiletken yaptıklarını duyurdu.",
    ],
    [
      "Because the electronic paper reflects light rather than producing it, ----.",
      [
        "it can be read easily even in bright sunlight",
        "paper is made from wood",
        "screens are flat",
        "light is bright",
        "it cannot be seen at all during the day",
      ],
      "Neden-sonuç: elektronik kâğıt ışık üretmek yerine yansıttığı için parlak güneş ışığında bile kolayca okunabilir.",
    ],
    [
      "Some scientists have called for careful studies of nanotubes ----.",
      [
        "because their shape resembles that of harmful asbestos fibres",
        "although they are very small",
        "so that they become cheaper",
        "unless they are strong",
        "since they are known to be completely harmless to living things",
      ],
      "Neden bildiren yapı: bazı bilim insanları nanotüplerin biçimi zararlı asbest liflerine benzediği için dikkatli çalışmalar yapılmasını istemiştir.",
    ],
    [
      "The program was developed by a company in London, ----.",
      [
        "which had earlier built a program that defeated champions at a board game",
        "which is a city",
        "that the program",
        "whose London",
        "when the first computers were built during the war",
      ],
      "İlgi cümlesi şirketi niteler: program, daha önce bir masa oyununda şampiyonları yenen bir program geliştirmiş olan Londra'daki bir şirket tarafından geliştirildi.",
    ],
    [
      "Unlike ordinary materials, whose properties depend mainly on their chemistry, ----.",
      [
        "metamaterials get their properties from their tiny internal structure",
        "ordinary materials are common",
        "chemistry is complex",
        "materials are useful",
        "metamaterials have no structure of any kind",
      ],
      "'Unlike' karşıtlık kurar: özellikleri esas olarak kimyasına bağlı olan sıradan malzemelerin aksine metamalzemeler özelliklerini küçük iç yapılarından alır.",
    ],
    [
      "The claim was abandoned within a few weeks ----.",
      [
        "after other laboratories showed that an impurity explained the results",
        "although it had been confirmed",
        "so that more people would believe it",
        "unless the samples were cold",
        "because the researchers had won a large prize for it",
      ],
      "Zaman bildiren yapı: diğer laboratuvarlar sonuçları bir safsızlığın açıkladığını gösterdikten sonra iddia birkaç hafta içinde terk edildi.",
    ],
    [
      "No sooner had the results of the competition been announced ----.",
      [
        "than biologists described the problem as largely solved",
        "when the competition",
        "that the program",
        "before the results",
        "than the organisers decided to cancel the competition for ever",
      ],
      "'No sooner ... than' yapısı: yarışmanın sonuçları açıklanır açıklanmaz biyologlar sorunun büyük ölçüde çözüldüğünü söyledi.",
    ],
    [
      "While nanotubes are extremely strong individually, ----.",
      [
        "cables made from many of them are much weaker",
        "carbon is common",
        "tubes are hollow",
        "steel is used in buildings",
        "cables made from them are even stronger than each tube",
      ],
      "'While' zıtlık bildirir: nanotüpler tek tek son derece güçlü olsa da çok sayıda nanotüpten yapılan kablolar çok daha zayıftır.",
    ],
    [
      "The structures predicted by the program are so accurate ----.",
      [
        "that scientists use them to design new experiments and medicines",
        "because the program",
        "than the experiments",
        "although the biologists",
        "so that nobody has ever found them useful",
      ],
      "'so ... that' sonuç yapısı: programın tahmin ettiği yapılar o kadar doğrudur ki bilim insanları onları yeni deneyler ve ilaçlar tasarlamak için kullanır.",
    ],
  ],
  enTr: [
    [
      "The structures of more than two hundred million proteins are now freely available online.",
      [
        "İki yüz milyondan fazla proteinin yapısı artık internette ücretsiz olarak erişilebilir durumdadır.",
        "İki yüz milyon protein internette satılmaktadır.",
        "İnternet iki yüz milyon proteinin yapısını değiştirmiştir.",
        "Hiçbir proteinin yapısı bilinmemektedir.",
        "Yalnızca birkaç proteinin yapısı bilinmektedir ve bunlar gizli tutulmaktadır.",
      ],
      "'The structures of more than two hundred million proteins' 'iki yüz milyondan fazla proteinin yapısı', 'are now freely available online' 'artık internette ücretsiz olarak erişilebilir durumdadır' karşılığıdır.",
    ],
    [
      "A superconductor carries electric current without any loss of energy.",
      [
        "Süperiletken elektrik akımını hiç enerji kaybı olmadan taşır.",
        "Süperiletken elektrik akımını tamamen durdurur.",
        "Elektrik akımı süperiletkeni enerji kaybetmeden taşır.",
        "Süperiletken yoktur.",
        "Süperiletken elektrik akımını taşırken büyük miktarda ısı üretir.",
      ],
      "'A superconductor carries electric current' 'süperiletken elektrik akımını taşır', 'without any loss of energy' 'hiç enerji kaybı olmadan' karşılığıdır.",
    ],
    [
      "The cloak made a copper cylinder almost invisible to microwaves.",
      [
        "Pelerin bakır bir silindiri mikrodalgalara karşı neredeyse görünmez hale getirdi.",
        "Pelerin bakır silindiri mikrodalgalarla eritti.",
        "Mikrodalgalar pelerini bakır bir silindire dönüştürdü.",
        "Hiç pelerin yoktu.",
        "Pelerin bakır silindiri hem insan gözüne hem de tüm ölçüm aletlerine karşı her koşulda tamamen görünmez kıldı.",
      ],
      "'The cloak made a copper cylinder almost invisible' 'pelerin bakır bir silindiri neredeyse görünmez hale getirdi', 'to microwaves' 'mikrodalgalara karşı' karşılığıdır.",
    ],
    [
      "The tubes were discovered by a Japanese physicist examining soot under an electron microscope.",
      [
        "Tüpler isi elektron mikroskobu altında inceleyen Japon bir fizikçi tarafından keşfedildi.",
        "Japon bir fizikçi tüpleri kullanarak bir elektron mikroskobu yaptı.",
        "İs Japon fizikçiyi elektron mikroskobunda keşfetti.",
        "Tüpler hiç keşfedilmedi.",
        "Tüpler Japon bir kimyacının evinde, bir mutfak tezgâhında yemek pişirirken tamamen tesadüfen bulundu.",
      ],
      "'The tubes were discovered by a Japanese physicist' 'tüpler Japon bir fizikçi tarafından keşfedildi', 'examining soot under an electron microscope' 'isi elektron mikroskobu altında inceleyen' karşılığıdır.",
    ],
    [
      "The image remains on the screen even after the device has been switched off.",
      [
        "Görüntü cihaz kapatıldıktan sonra bile ekranda kalır.",
        "Görüntü cihaz kapatılmadan önce ekrandan kaybolur.",
        "Ekran cihazı kapattıktan sonra görüntüyü kapatır.",
        "Ekranda hiç görüntü yoktur.",
        "Görüntü yalnızca cihaz şarj edilirken ekranda görünür.",
      ],
      "'The image remains on the screen' 'görüntü ekranda kalır', 'even after the device has been switched off' 'cihaz kapatıldıktan sonra bile' karşılığıdır.",
    ],
    [
      "The Nobel Prize in Chemistry was awarded for the prediction and design of protein structures.",
      [
        "Nobel Kimya Ödülü protein yapılarının tahmini ve tasarımı için verildi.",
        "Nobel Kimya Ödülü yeni bir ilacın keşfi için verildi.",
        "Protein yapıları Nobel Kimya Ödülü'nü tasarladı.",
        "Hiç ödül verilmedi.",
        "Nobel Kimya Ödülü bir bilgisayar oyununun tasarımı için verildi.",
      ],
      "'The Nobel Prize in Chemistry was awarded' 'Nobel Kimya Ödülü verildi', 'for the prediction and design of protein structures' 'protein yapılarının tahmini ve tasarımı için' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Program proteinlerin üç boyutlu biçimini tahmin ediyor.",
      [
        "The program predicts the three-dimensional shape of proteins.",
        "The program destroys proteins.",
        "Proteins predict the shape of the program.",
        "There is no program.",
        "The program predicts the weather for three days.",
      ],
      "'Program tahmin ediyor' 'the program predicts', 'proteinlerin üç boyutlu biçimini' 'the three-dimensional shape of proteins' karşılığıdır.",
    ],
    [
      "İddia birkaç hafta içinde çürütüldü.",
      [
        "The claim was disproved within a few weeks.",
        "The claim was confirmed after many years.",
        "A few weeks disproved the scientists.",
        "There was no claim.",
        "The claim was accepted by every laboratory in the world.",
      ],
      "'İddia çürütüldü' 'the claim was disproved', 'birkaç hafta içinde' 'within a few weeks' karşılığıdır.",
    ],
    [
      "Nanotüpler 1991'de keşfedildi.",
      [
        "Nanotubes were discovered in 1991.",
        "Nanotubes were banned in 1991.",
        "1991 discovered the nanotubes.",
        "Nanotubes do not exist.",
        "Nanotubes were discovered in 1891 by a chemist.",
      ],
      "'Nanotüpler keşfedildi' 'nanotubes were discovered', '1991'de' 'in 1991' karşılığıdır.",
    ],
    [
      "Ekran çok az enerji kullanır.",
      [
        "The screen uses very little energy.",
        "The screen uses a great deal of energy.",
        "Energy uses the screen.",
        "There is no screen.",
        "The screen produces energy for the whole house.",
      ],
      "'Ekran kullanır' 'the screen uses', 'çok az enerji' 'very little energy' karşılığıdır.",
    ],
    [
      "Kuantum bilgisayarının mutlak sıfıra yakın soğutulması gerekir.",
      [
        "The quantum computer must be cooled close to absolute zero.",
        "The quantum computer must be heated to a high temperature.",
        "Absolute zero must be cooled by the computer.",
        "There is no quantum computer.",
        "The quantum computer works best in a hot desert.",
      ],
      "'Kuantum bilgisayarının soğutulması gerekir' 'the quantum computer must be cooled', 'mutlak sıfıra yakın' 'close to absolute zero' karşılığıdır.",
    ],
    [
      "Cam ısındığında çok az genleşir.",
      [
        "The glass expands very little when it is heated.",
        "The glass melts as soon as it is heated.",
        "Heat expands very little in the glass.",
        "There is no glass.",
        "The glass becomes much larger when it is cooled.",
      ],
      "'Cam çok az genleşir' 'the glass expands very little', 'ısındığında' 'when it is heated' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 2006, the British physicist John Pendry and his colleagues proposed a way of making an object invisible, not by making it transparent but by guiding light around it. Light normally travels in straight lines through a uniform material, but it bends when it passes from one material into another, as when a straw appears to bend in a glass of water. Pendry calculated that, if a material could be designed whose properties changed gradually from place to place in exactly the right way, it would steer light around a hidden region and send it on in its original direction, as water in a stream flows around a rock and closes up behind it. To an observer, the light would appear to have passed straight through, and the object would be invisible. No natural material has the required properties, but they can be achieved with metamaterials, artificial materials made of tiny repeating structures, such as small metal rings or wires, which are smaller than the wavelength of the light or radiation they are designed to control. Their properties depend not mainly on their chemistry but on the size, shape and arrangement of these structures. Later in 2006, a team at an American university built the first working cloak, made of concentric rings of a material patterned with small copper circuits, which made a copper cylinder almost invisible to microwaves. Making a cloak that works for visible light is far more difficult, because the structures must be hundreds of times smaller, and so far such cloaks have worked only for very small objects or for a narrow range of colours. Metamaterials have nevertheless found many other uses, including flat lenses, better antennas for mobile phones and ways of protecting buildings from earthquakes by steering vibrations around them.",
      questions: [
        [
          "According to the passage, Pendry's proposed cloak would make an object invisible by ----.",
          [
            "guiding light around it so that it continued in its original direction",
            "making the object completely transparent",
            "absorbing all the light that reached it",
            "reflecting light back towards the observer",
            "covering it with a layer of water",
          ],
          "Pendry nesneyi saydam yapmayı değil, ışığı çevresinden dolaştırıp özgün yönünde devam ettirmeyi önerdi.",
        ],
        [
          "The passage states that the properties of metamaterials depend mainly on ----.",
          [
            "the size, shape and arrangement of their tiny structures",
            "the chemical elements of which they are made",
            "the temperature at which they are used",
            "the colour of the light that falls on them",
            "the amount of water they contain",
          ],
          "Metamalzemelerin özellikleri esas olarak kimyalarına değil, küçük yapıların boyutuna, biçimine ve dizilişine bağlıdır.",
        ],
        [
          "It can be inferred from the passage that making a cloak for visible light is difficult because ----.",
          [
            "the necessary structures would have to be extremely small",
            "visible light cannot be bent",
            "copper does not reflect visible light",
            "no one has ever tried to build one",
            "visible light travels more slowly than microwaves",
          ],
          "Görünür ışık için yapıların yüzlerce kat daha küçük olması gerekir; bu da işi çok zorlaştırır.",
        ],
      ],
    },
    {
      text:
        "Proteins are the molecular machines of living things. Each consists of a long chain of smaller units called amino acids, which folds up into a complex three-dimensional shape, and it is this shape that determines what the protein does. Working out the shape of a protein by experiment, using methods such as X-ray crystallography, can take months or years, and for decades scientists tried to predict the shape from the sequence of amino acids alone. Since 1994, researchers have taken part in a competition, held every two years, in which they try to predict the structures of proteins that have been determined by experiment but not yet published. For many years, progress was slow. In 2020, however, a program called AlphaFold, developed by a London-based artificial intelligence company that had earlier built a program capable of defeating the world's best players of the board game Go, produced predictions whose accuracy rivalled that of experiments for most of the proteins in the competition. The program had been trained on the structures of about a hundred and seventy thousand proteins that had already been determined, learning patterns that link sequences to shapes. Many biologists described the problem as largely solved. In 2021 and 2022, the company and a European laboratory released predicted structures for almost all of the more than two hundred million proteins known to science, making them freely available online. Researchers have used them to study diseases, design new enzymes that can break down plastics and develop vaccines. In 2024, Demis Hassabis and John Jumper of the company shared the Nobel Prize in Chemistry with the American biochemist David Baker, who had developed methods for designing entirely new proteins. The program does have limitations, however; it is less reliable for proteins that change shape or that interact with other molecules.",
      questions: [
        [
          "According to the passage, the shape of a protein is important because ----.",
          [
            "it determines what the protein does",
            "it determines the colour of living things",
            "it makes the protein easier to see",
            "it controls the speed of computers",
            "it decides how many amino acids the protein contains",
          ],
          "Proteinin ne iş yaptığını belirleyen onun üç boyutlu biçimidir.",
        ],
        [
          "The passage states that AlphaFold learned to predict protein shapes by ----.",
          [
            "being trained on the structures of proteins already determined by experiment",
            "carrying out X-ray experiments itself",
            "playing the board game Go",
            "copying the predictions of other teams in the competition",
            "studying the shapes of plastic molecules",
          ],
          "Program daha önce belirlenmiş yaklaşık yüz yetmiş bin proteinin yapısıyla eğitilerek dizilerle biçimler arasındaki örüntüleri öğrendi.",
        ],
        [
          "It can be inferred from the passage that the program's predictions are less reliable for some proteins because ----.",
          [
            "those proteins do not have a single fixed shape",
            "those proteins have never been studied",
            "the program cannot read their amino acids",
            "they are too small to be predicted",
            "the company has refused to release them",
          ],
          "Program biçim değiştiren ya da başka moleküllerle etkileşen proteinler için daha az güvenilirdir; bunların tek ve sabit bir biçimi yoktur.",
        ],
      ],
    },
    {
      text:
        "In July 2023, a group of researchers in South Korea posted two papers on a website where scientists share their work before it has been reviewed by others. They claimed to have made a material, which they called LK-99, that was a superconductor at room temperature and normal pressure. Superconductors carry electric current without any loss of energy, but all known superconductors work only at very low temperatures or under enormous pressures, which makes them expensive and difficult to use. A material that worked under ordinary conditions could transform power cables, electric motors and medical scanners, and the claim caused enormous excitement. A short video showing a small piece of the material appearing to float partly above a magnet, a behaviour associated with superconductors, spread rapidly on social media, and the shares of some companies connected with superconductors rose sharply. Within days, dozens of laboratories around the world began trying to make the material, which was relatively simple to produce from lead, copper, phosphorus and oxygen, and some shared their progress live online. Many scientists, however, were quick to cast doubt on the claim, pointing out that the evidence presented was weak and that the papers contained inconsistencies. Within a few weeks, the picture had become clear. Several teams showed that the sudden drop in electrical resistance reported by the Korean researchers occurred at about the temperature at which an impurity in the samples, copper sulphide, undergoes a change in its structure, and that pure samples of the material were in fact poor conductors. The floating behaviour could be explained by ordinary magnetism. The episode was widely discussed as an example of science correcting itself unusually quickly and in public.",
      questions: [
        [
          "According to the passage, the claim caused excitement because ----.",
          [
            "a superconductor working under ordinary conditions could have many important uses",
            "the material was made entirely of gold",
            "it had been confirmed by many laboratories in advance",
            "it proved that superconductors do not exist",
            "the researchers had won a Nobel Prize",
          ],
          "Sıradan koşullarda çalışan bir süperiletken güç kablolarını, motorları ve tıbbi tarayıcıları dönüştürebilirdi.",
        ],
        [
          "The passage states that the drop in resistance reported by the researchers ----.",
          [
            "was linked to a change in the structure of an impurity",
            "was caused by the magnet used in the video",
            "occurred only at extremely high pressures",
            "was confirmed in pure samples of the material",
            "happened only when the material was floating",
          ],
          "Dirençteki düşüş, örneklerdeki bakır sülfür safsızlığının yapısının değiştiği sıcaklıkta meydana geliyordu.",
        ],
        [
          "It can be inferred from the passage that the episode was seen as unusual because ----.",
          [
            "the claim was tested and rejected rapidly and openly",
            "no scientists showed any interest in it",
            "the material was impossible to make",
            "the papers were never published online",
            "the claim turned out to be completely correct",
          ],
          "Bölüm, bilimin kendini alışılmadık biçimde hızlı ve kamuya açık olarak düzeltmesinin örneği olarak tartışıldı.",
        ],
      ],
    },
    {
      text:
        "In 1991, the Japanese physicist Sumio Iijima, examining soot produced by an electric discharge between two carbon rods under an electron microscope, noticed tiny hollow tubes made of carbon atoms. Similar structures had been seen before, but Iijima's description of them attracted worldwide attention. A carbon nanotube can be imagined as a sheet of carbon atoms, arranged in a pattern of hexagons like chicken wire, rolled up into a cylinder only a few billionths of a metre across. Despite their tiny size, nanotubes are considerably stronger than steel and much lighter, and depending on the way in which the sheet is rolled up, they can conduct electricity as well as copper or behave like the semiconductors used in computer chips. These properties led to great hopes. Some enthusiasts even proposed using cables made from nanotubes to build a 'space elevator', a cable stretching tens of thousands of kilometres from the Earth's surface into space, along which cargo could be lifted far more cheaply than by rockets. In practice, however, progress has been slower than expected. Although individual nanotubes are extremely strong, long cables made from many of them are much weaker, because the tubes slide past one another and contain defects. Producing nanotubes of a uniform type has also proved difficult. Nanotubes are nevertheless used today in a range of products, from sports equipment such as tennis rackets and bicycles to batteries, where they improve the flow of electricity. Some scientists have also called for careful study of their effects on health, because certain long, thin nanotubes resemble asbestos fibres, which can cause serious lung disease when they are breathed in.",
      questions: [
        [
          "According to the passage, the electrical properties of a nanotube depend on ----.",
          [
            "the way in which the sheet of carbon atoms is rolled up",
            "the colour of the soot from which it is made",
            "the temperature of the electron microscope",
            "the amount of copper it contains",
            "the length of the cable in which it is used",
          ],
          "Karbon tabakasının nasıl sarıldığına bağlı olarak nanotüpler bakır kadar iyi iletebilir ya da yarı iletken gibi davranabilir.",
        ],
        [
          "The passage states that cables made from many nanotubes are weaker than individual tubes because ----.",
          [
            "the tubes slide past one another and contain defects",
            "they are made of steel",
            "they absorb water from the air",
            "they are much thicker than individual tubes",
            "they conduct too much electricity",
          ],
          "Uzun kablolarda tüpler birbirinin üzerinden kayar ve kusurlar içerir; bu yüzden kablolar çok daha zayıftır.",
        ],
        [
          "It can be inferred from the passage that the idea of a space elevator ----.",
          [
            "has not yet become practical",
            "has already been built and is in use",
            "was proposed by Iijima himself",
            "was rejected because nanotubes are too heavy",
            "has nothing to do with nanotubes",
          ],
          "Uzun nanotüp kablolar beklenenden zayıf kaldığından uzay asansörü fikri henüz uygulanabilir olmamıştır.",
        ],
      ],
    },
    {
      text:
        "Most screens, such as those of phones and computers, produce their own light, which makes them hard to read in bright sunlight and can tire the eyes. In the 1990s, researchers at a laboratory of the Massachusetts Institute of Technology set out to develop a display that would look more like ink on paper. The technology they developed, known as electronic paper or electronic ink, uses millions of tiny capsules, each about the width of a human hair, filled with a clear liquid. Each capsule contains white particles with a positive electric charge and black particles with a negative charge. When an electric field is applied, the white particles move to the top of the capsule and the black ones to the bottom, or the other way round, so that each point on the screen appears white or black. Because the screen reflects light rather than producing it, it can be read easily even in bright sunlight, much like a printed page. Another advantage is that the particles stay in place once they have moved, so that the screen uses power only when the image changes, and an image remains visible even after the device has been switched off. As a result, a single charge can last for weeks. The researchers founded a company in 1997 to develop the technology, and it reached a mass market a decade later, when an online retailer launched an electronic reader for books that used it. The technology also has disadvantages. The screens change slowly, which makes them unsuitable for video, and producing colour is difficult. Electronic paper is now also used in shop price labels, which can be updated wirelessly, and in signs at bus stops that are powered by small solar panels.",
      questions: [
        [
          "According to the passage, electronic paper is easy to read in sunlight because ----.",
          [
            "it reflects light rather than producing its own",
            "it produces more light than other screens",
            "it is covered with a special glass",
            "it is made of real paper",
            "it uses solar panels to light the screen",
          ],
          "Ekran ışık üretmek yerine yansıttığı için basılı bir sayfa gibi parlak güneşte bile kolayca okunur.",
        ],
        [
          "The passage states that the screen uses power only when ----.",
          [
            "the image changes",
            "the device is switched off",
            "the sun is shining",
            "a video is being played",
            "the capsules are being made",
          ],
          "Parçacıklar hareket ettikten sonra yerinde kaldığından ekran yalnızca görüntü değiştiğinde güç kullanır.",
        ],
        [
          "It can be inferred from the passage that electronic paper is used in signs at bus stops partly because ----.",
          [
            "its low power use allows it to run on small solar panels",
            "it can show videos of approaching buses",
            "it produces bright colours at night",
            "it is cheaper than real paper",
            "it cannot be updated once it has been installed",
          ],
          "Çok az enerji kullandığından küçük güneş panelleriyle çalışabilir; bu da otobüs duraklarındaki tabelalar için uygundur.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1950, the British mathematician Alan Turing proposed a way of deciding whether a machine could think. ---- If the judge could not reliably tell which was which, Turing argued, the machine should be regarded as intelligent.",
      [
        "A human judge would hold written conversations with both a person and a machine, without knowing which was which.",
        "Turing was a mathematician.",
        "Machines are made of metal.",
        "Some critics argued that a machine which merely imitated human conversation convincingly would not necessarily understand anything it said, however clever it seemed.",
        "Conversations can be long.",
      ],
      "Boşluk 'the judge' ve 'which was which' ifadelerinin gönderme yapacağı deney düzenini tanıtan bir cümle gerektirir; boşluğa bir insan yargıcın hangisinin hangisi olduğunu bilmeden hem bir kişiyle hem bir makineyle yazılı konuşma yapacağını söyleyen cümle gelmelidir.",
    ],
    [
      "For centuries, swords made in the Middle East from a type of steel produced in India were famous for their strength and for the wavy patterns on their blades. ---- In 2006, scientists examining one of these blades with an electron microscope found carbon nanotubes in the metal.",
      [
        "The method of making the steel was lost in the eighteenth century, and later smiths were unable to reproduce it.",
        "Swords are weapons.",
        "India is a large country.",
        "Many museums around the world now hold examples of these swords in their collections, and some of the finest are displayed in special cases protected from damp air.",
        "Steel is made from iron.",
      ],
      "Boşluk çeliğin yapım yönteminin kaybolduğunu söyleyip bilim insanlarının araştırmasına geçiş sağlayan bir cümle gerektirir; boşluğa yöntemin on sekizinci yüzyılda kaybolduğunu ve sonraki demircilerin onu yeniden üretemediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2016, researchers in Sweden and the United States developed a way of making wood transparent. ---- The resulting material is stronger than glass and lets in light while keeping heat in, so it could one day be used in windows.",
      [
        "They removed the lignin, the substance that gives wood its colour, and filled the remaining structure with a clear plastic.",
        "Sweden has many forests.",
        "Wood is used to build houses.",
        "Other researchers have tried to make wood harder and denser by boiling it in chemicals and then squeezing it under enormous pressure for many hours.",
        "Glass is transparent.",
      ],
      "Boşluk ahşabın nasıl saydam yapıldığını açıklayıp ortaya çıkan malzemeye bağlanan bir cümle gerektirir; boşluğa araştırmacıların ahşaba rengini veren lignini çıkarıp kalan yapıyı saydam plastikle doldurduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Most metals have an orderly internal structure, in which atoms are arranged in regular rows called crystals. ---- Without these weaknesses, such materials, known as metallic glasses, can be much stronger and more elastic than ordinary metals.",
      [
        "If certain metal mixtures are cooled very quickly, however, the atoms are frozen in a disorderly arrangement and no crystals or boundaries between them form.",
        "Metals are shiny.",
        "Atoms are very small.",
        "Some golf clubs, phone cases and parts of surgical instruments have been made from such materials, partly because of their remarkable springiness and resistance to wear.",
        "Crystals are beautiful.",
      ],
      "Boşluk 'these weaknesses' ifadesinin gönderme yapacağı kristal sınırlarının oluşmamasını açıklayan bir cümle gerektirir; boşluğa bazı metal karışımları çok hızlı soğutulunca atomların düzensiz donduğunu ve kristal oluşmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1980s, a British hairdresser named Maurice Ward invented a plastic that he claimed could protect objects from extreme heat. ---- Ward, however, never revealed the recipe, and when he died in 2011 the secret appeared to die with him.",
      [
        "In demonstrations, an egg coated with it could be heated with a blowtorch and remain cool and uncooked inside.",
        "Hairdressers cut hair.",
        "Plastics are made from oil.",
        "Several companies, including defence firms, were interested in buying the rights to use the material.",
        "Eggs are a common food.",
      ],
      "Boşluk malzemenin iddia edilen gücünü gösterip 'however' ile tarifin gizli kalmasına bağlanan bir cümle gerektirir; boşluğa malzemeyle kaplı bir yumurtanın kaynak alevine tutulduğunda içinin serin ve çiğ kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Ferrofluids are liquids containing tiny particles of iron oxide, coated so that they do not clump together. ---- They were originally developed in the 1960s to help move rocket fuel in conditions of weightlessness.",
      [
        "When a magnet is brought near, the liquid forms spikes and patterns as the particles are pulled into line.",
        "Iron is a metal.",
        "Magnets attract iron.",
        "Today they are used in loudspeakers, where they help to cool the coils and reduce vibration.",
        "Liquids flow easily.",
      ],
      "Boşluk sıvının mıknatısa tepkisini açıklayıp kökenine geçiş sağlayan bir cümle gerektirir; boşluğa mıknatıs yaklaştırıldığında sıvının sivri çıkıntılar ve desenler oluşturduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Scientists increasingly use computers to design new materials.",
        "Programs can predict the properties of millions of possible compounds.",
        "The most promising ones are then made and tested in the laboratory.",
        "Laboratories must follow strict safety rules.",
        "This approach can greatly reduce the time needed to discover useful materials.",
      ],
      odd: 3,
      why: "Parça yeni malzemelerin bilgisayarlarla tasarlanmasını anlatır. Laboratuvarların sıkı güvenlik kurallarına uyması gerektiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Superconductors are already used in some important technologies.",
        "Hospital scanners use superconducting magnets to produce detailed images of the body.",
        "Particle accelerators use them to steer beams of particles.",
        "Hospitals employ thousands of nurses and doctors.",
        "In each case, the magnets must be cooled with liquid helium.",
      ],
      odd: 3,
      why: "Parça süperiletkenlerin kullanıldığı teknolojileri anlatır. Hastanelerin binlerce hemşire ve doktor çalıştırdığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Quantum computers work in a very different way from ordinary computers.",
        "Their basic units, called qubits, can represent several values at once.",
        "Ordinary computers became common in homes in the 1980s.",
        "This could allow them to solve certain problems much faster.",
        "However, qubits are easily disturbed and make many errors.",
      ],
      odd: 2,
      why: "Parça kuantum bilgisayarlarının işleyişini anlatır. Sıradan bilgisayarların 1980'lerde evlerde yaygınlaştığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many scientists now share their results online before they are reviewed.",
        "This allows new findings to spread quickly.",
        "It also allows other researchers to check them sooner.",
        "However, claims that have not been checked can mislead the public.",
        "Many newspapers are now read online.",
      ],
      odd: 4,
      why: "Parça bilimsel sonuçların hakem değerlendirmesinden önce internette paylaşılmasını anlatır. Pek çok gazetenin artık internetten okunduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some new materials are inspired by nature.",
        "The wings of certain butterflies, for example, get their colour from tiny structures rather than pigments.",
        "Butterflies feed on the nectar of flowers.",
        "Engineers have copied these structures to make colours that do not fade.",
        "Similar ideas have been used to make surfaces that repel water.",
      ],
      odd: 2,
      why: "Parça doğadan esinlenen yeni malzemeleri anlatır. Kelebeklerin çiçeklerin nektarıyla beslendiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Glass is made mainly from sand that has been melted at high temperatures.",
        "Other substances are added to change its properties.",
        "Lead makes it sparkle, while boron makes it resistant to heat.",
        "Beaches are often covered with sand.",
        "Modern techniques also allow glass to be made extremely thin and strong.",
      ],
      odd: 3,
      why: "Parça camın yapımını ve özelliklerinin nasıl değiştirildiğini anlatır. Plajların genellikle kumla kaplı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
