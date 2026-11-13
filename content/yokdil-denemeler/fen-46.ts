import type { YokdilDeneme } from "./types";

export const FEN_46: YokdilDeneme = {
  no: 46,
  field: "fen",
  vocab: [
    [
      "The clergyman examined the huge jaw and ---- that it had belonged to a giant reptile.",
      ["concluded", "pretended", "forgot", "denied", "regretted"],
      "Din adamının devasa çene kemiğini inceleyip dev bir sürüngene ait olduğu 'sonucuna vardığı' (concluded) anlatılır.",
    ],
    [
      "The fish had been thought to be ---- for about sixty-six million years.",
      ["extinct", "common", "poisonous", "edible", "domesticated"],
      "Balığın yaklaşık altmış altı milyon yıldır 'soyu tükenmiş' (extinct) sanıldığı anlatılır.",
    ],
    [
      "The two rivals tried to ---- each other by publishing new species as quickly as possible.",
      ["outdo", "assist", "employ", "forgive", "imitate"],
      "İki rakibin yeni türleri olabildiğince hızlı yayımlayarak birbirini 'geçmeye' (outdo) çalıştığı anlatılır.",
    ],
    [
      "The fossil showed features ---- between those of fish and those of four-legged animals.",
      ["intermediate", "identical", "unrelated", "superior", "invisible"],
      "Fosilin balıklar ile dört bacaklı hayvanlar arasında 'ara' (intermediate) özellikler gösterdiği anlatılır.",
    ],
    [
      "The skeleton was remarkably ----, with about forty per cent of its bones preserved.",
      ["complete", "damaged", "recent", "colourful", "artificial"],
      "İskeletin kemiklerinin yaklaşık yüzde kırkı korunmuş olarak dikkat çekici biçimde 'eksiksiz' (complete) olduğu anlatılır.",
    ],
    [
      "The museum's fossils were ---- in a bombing raid during the Second World War.",
      ["wiped out", "taken after", "looked up", "given in", "put up"],
      "Müzenin fosillerinin İkinci Dünya Savaşı'nda bir bombalamada 'yok edildiği' (wiped out) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before Buckland's paper appeared, no dinosaur ---- scientifically.",
      ["had been named", "names", "has named", "will name", "is naming"],
      "Makaleden önceki durum; edilgen geçmişte daha önce: 'had been named'.",
    ],
    [
      "By the time the fisherman's catch reached the museum, the fish ---- to rot.",
      ["had begun", "begins", "will begin", "is beginning", "has been begun"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had begun'.",
    ],
    [
      "If Cope and Marsh had cooperated, they ---- even more discoveries.",
      ["might have made", "will make", "make", "had made", "are making"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have made'.",
    ],
    [
      "The fossil ---- in rocks about 375 million years old in the Canadian Arctic.",
      ["was found", "found", "has found", "is finding", "finds"],
      "Fosil bulunmuştur; edilgen geçmiş zaman: 'was found'.",
    ],
    [
      "---- Lucy was only about a metre tall, she walked upright on two legs.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Kısa boylu olması ile iki ayak üzerinde yürüması zıttır: 'Although'.",
    ],
    [
      "The palaeontologist, ---- fossils were destroyed in the war, left detailed drawings.",
      ["whose", "which", "who", "whom", "where"],
      "Paleontoloğun fosilleri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The skeleton was small and the brain tiny, ---- puzzled researchers.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer the two men competed, ---- bitter their rivalry became.",
      ["the more", "the most", "more than", "much more", "so"],
      "'The longer ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Only after the fossil was described in 1996 ---- scientists accept that some dinosaurs had feathers.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The team searched rocks of a particular age ---- they might find a fish with legs.",
      ["in the hope that", "even though", "unless", "as if", "whereas"],
      "Umut bildiren bağlaç öbeği: 'in the hope that'.",
    ],
    [
      "The curator persuaded the fisherman ---- the strange fish to the museum.",
      ["to bring", "bringing", "bring", "brought", "to bringing"],
      "'persuade sb to do sth' kalıbı: 'to bring'.",
    ],
    [
      "The species is believed ---- on the island until about fifty thousand years ago.",
      ["to have survived", "surviving", "to survive", "survived", "to be surviving"],
      "Geçmişe ait bir durum için mastarın geçmiş biçimi: 'to have survived'.",
    ],
    [
      "The cave passage was so narrow ---- only very slim researchers could enter.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The museum insisted that the fossils ---- moved to a safer place.",
      ["be", "are", "were", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early nineteenth century, quarrymen near Oxford found a number of large fossil bones, including part of a jaw with long, curved teeth. William Buckland, a clergyman and the first professor of geology at the University of Oxford, studied the bones and concluded that they had belonged to an enormous meat-eating reptile, {1} he estimated to have been about twelve metres long. In 1824, he published a description of the animal, which he named Megalosaurus, meaning 'great lizard'. It was the first dinosaur to be scientifically named, {2} the word 'dinosaur' itself was not invented until 1842, by the anatomist Richard Owen. In the same period, Gideon Mantell, a doctor in Sussex, was studying fossil teeth {3} resembled those of the modern iguana lizard but were much larger. In 1825, he named the animal Iguanodon. Mantell spent much of his money on fossils and on publishing his research, and he became bitter when Owen, {4} was more powerful in the scientific establishment, appeared to take credit for some of his ideas. Early reconstructions of these animals were very inaccurate: Megalosaurus was imagined as a huge four-legged creature, {5} the spike on Iguanodon's thumb was placed on its nose. Later discoveries of more complete skeletons showed what the animals really looked like.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra sürüngeni niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(22) ----",
          ["although", "because", "unless", "so that", "once"],
          "İlk adlandırılan dinozor olması ile 'dinozor' kelimesinin sonradan icadı zıttır: 'although'.",
        ],
        [
          "(23) ----",
          ["that", "what", "whose", "where", "whom"],
          "Dişleri niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(24) ----",
          ["who", "which", "whose", "whom", "where"],
          "Virgüller arasında Owen'ı niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "İki yanlış yeniden yapılandırma örneği birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In December 1938, Marjorie Courtenay-Latimer, the young curator of a small museum in East London, South Africa, received a telephone call from a local fishing captain who often set aside unusual fish for her. Among his catch, she noticed a large blue fish with strange, fleshy fins that looked almost like limbs. She did not recognise it, {1} she realised that it was unusual and persuaded a reluctant taxi driver to carry the heavy, smelly fish back to the museum. Unable to preserve it properly in the summer heat, she sent a sketch to J. L. B. Smith, a chemistry lecturer and fish expert, {2} was away on holiday. When Smith finally saw the remains weeks later, he identified the fish as a coelacanth, a kind of fish previously seen only as fossils and believed to have vanished roughly when the dinosaurs did. News of the find caused a worldwide sensation. Smith named the species Latimeria in her honour. He then spent fourteen years searching for another specimen, offering a reward {3} distributing leaflets along the coast of East Africa. In 1952, a second coelacanth was caught near the Comoro Islands, {4} local fishermen, it turned out, had occasionally caught them for many years. A second species was discovered in Indonesia in 1998. Coelacanths, {5} live in deep waters near underwater cliffs, are of great interest because their fins are related to the limbs of land animals.",
      blanks: [
        [
          "(26) ----",
          ["but", "so", "and", "or", "for"],
          "Tanımaması ile olağandışı olduğunu fark etmesi zıttır: 'but'.",
        ],
        [
          "(27) ----",
          ["who", "which", "whose", "whom", "where"],
          "Smith'i niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Ödül vermesi ve broşür dağıtması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["where", "which", "whose", "when", "who"],
          "Komor Adaları'nı (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(30) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgüller arasında balıkları niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Buckland named the first dinosaur, ----.",
      [
        "the word 'dinosaur' did not yet exist",
        "Oxford is a university town",
        "the teeth were curved",
        "quarrymen found the bones",
        "the animal's jaw contained several long, sharp teeth that were curved backwards like the blades of knives",
      ],
      "'Although' zıtlık ister: Buckland ilk dinozoru adlandırsa da 'dinozor' kelimesi henüz yoktu.",
    ],
    [
      "----, the curator could not keep the fish in good condition.",
      [
        "Because of the summer heat",
        "Although she was young",
        "Unless the taxi arrived",
        "Since Smith was a chemist",
        "While local fishermen in the Comoro Islands had been catching similar fish for many years without reporting them",
      ],
      "Yaz sıcağı nedeniyle küratör balığı iyi durumda tutamadı.",
    ],
    [
      "If a fossil shows features of two different groups, ----.",
      [
        "it may help to explain how one evolved from the other",
        "fish live in water",
        "the Arctic is cold",
        "the fossil was found in 2004",
        "the scientists who discovered it would have needed to search in rocks of a completely different age",
      ],
      "Birinci tip koşul: bir fosil iki farklı grubun özelliklerini gösterirse birinin diğerinden nasıl evrimleştiğini açıklamaya yardım edebilir.",
    ],
    [
      "Cope and Marsh used bribery and spying ----.",
      [
        "in order to beat each other to new discoveries",
        "although they were scientists",
        "unless the bones were large",
        "because Wyoming is remote",
        "while the railway companies were building new lines across the western territories of the United States",
      ],
      "Cope ve Marsh yeni keşiflerde birbirini geçmek için rüşvet ve casusluğa başvurdu.",
    ],
    [
      "Not only did Lucy walk on two legs, ----.",
      [
        "but she also had a small, ape-like brain",
        "and Ethiopia is in Africa",
        "since she was short",
        "so the song was popular",
        "unless the members of the expedition had been listening to music in their camp on the evening of the discovery",
      ],
      "'Not only ... but also' yapısı tamamlanır: Lucy iki ayak üzerinde yürümekle kalmıyordu, küçük, maymunsu bir beyni de vardı.",
    ],
    [
      "Once the museum in Munich had been bombed, ----.",
      [
        "scientists had only drawings and photographs to study",
        "Germany is in Europe",
        "the war ended in 1945",
        "the fossils were large",
        "the palaeontologist had been asking the director for several years to move the collection to a safer building",
      ],
      "Münih'teki müze bombalandıktan sonra bilim insanlarının inceleyebileceği yalnızca çizimler ve fotoğraflar kaldı.",
    ],
    [
      "Some scientists argued that the Flores skeleton was a diseased modern human ----.",
      [
        "because its brain was so small",
        "although it was found in a cave",
        "unless the bones were old",
        "so that the island is in Indonesia",
        "while the team that discovered it was preparing to publish its description in a leading scientific journal",
      ],
      "Bazı bilim insanları beyni çok küçük olduğu için Flores iskeletinin hastalıklı bir modern insana ait olduğunu savundu.",
    ],
    [
      "Since Archaeopteryx had both feathers and teeth, ----.",
      [
        "it seemed to link reptiles and birds",
        "birds can fly",
        "Germany has quarries",
        "it was found in 1861",
        "a museum in London paid a large sum of money to buy one of the first specimens from a local doctor",
      ],
      "'Since' neden bildirir: Archaeopteryx hem tüye hem dişe sahip olduğu için sürüngenler ile kuşlar arasında bir bağ gibi görünüyordu.",
    ],
    [
      "Unless animals had been trapped in the sticky asphalt, ----.",
      [
        "their bones would not have been preserved",
        "Los Angeles is a city",
        "asphalt is black",
        "mammoths were large",
        "the museum that now stands on the site would have been built in a different part of the city",
      ],
      "'Unless' olumsuz koşul: hayvanlar yapışkan asfalta saplanmasaydı kemikleri korunmazdı.",
    ],
    [
      "The baby mammoth was so well preserved ----.",
      [
        "that scientists could study the milk in its stomach",
        "although Siberia is cold",
        "unless the ice melted",
        "because reindeer live there",
        "while herders in the region had been moving their animals across the frozen river for many generations",
      ],
      "Yavru mamut o kadar iyi korunmuştu ki bilim insanları midesindeki sütü inceleyebildi.",
    ],
    [
      "Even though the cave chamber was very hard to reach, ----.",
      [
        "researchers recovered more than 1,500 bones",
        "South Africa is large",
        "caves are dark",
        "the team was large",
        "the advertisement for researchers asked for scientists who were small, slim and experienced in climbing",
      ],
      "'Even though' zıtlık ister: mağara odasına ulaşmak çok zor olsa da araştırmacılar 1.500'den fazla kemik çıkardı.",
    ],
  ],
  enTr: [
    [
      "Early reconstructions of the animals were very inaccurate.",
      [
        "Hayvanların ilk yeniden yapılandırmaları çok yanlıştı.",
        "Hayvanların ilk yeniden yapılandırmaları kusursuzdu.",
        "Hayvanları doğru biçimde yeniden yapılandıran ilk bilim insanları, sonradan bulunan iskeletlerin kendi çizimlerine tamamen uyduğunu gördü.",
        "Hayvanlar hiç yeniden yapılandırılmadı.",
        "İlk yeniden yapılandırmalar hayvanların kendileri tarafından yapıldı.",
      ],
      "'Early reconstructions of the animals' 'hayvanların ilk yeniden yapılandırmaları', 'were very inaccurate' 'çok yanlıştı' karşılığıdır.",
    ],
    [
      "The fish belonged to a group known only from fossils.",
      [
        "Balık, yalnızca fosillerden bilinen bir gruba aitti.",
        "Balık, fosillerde hiç görülmemiş bir gruba aitti.",
        "Yalnızca fosillerden bilinen balıkların hiçbiri, okyanuslarda yaşayan modern balıklarla akraba değildir ve onlara benzemez.",
        "Fosiller balıklar tarafından bulundu.",
        "Balık bir fosil koleksiyonundan çalındı.",
      ],
      "'The fish belonged to a group' 'balık bir gruba aitti', 'known only from fossils' 'yalnızca fosillerden bilinen' karşılığıdır.",
    ],
    [
      "The rivalry damaged the reputations of both men.",
      [
        "Rekabet her iki adamın da itibarını zedeledi.",
        "Rekabet her iki adamı da ünlü yaptı.",
        "Her iki adamın itibarını korumak için rekabeti sona erdiren bilim insanları, ortak bir araştırma projesi başlatarak birlikte çalıştı.",
        "Adamlar hiç rekabet etmedi.",
        "Rekabet yalnızca birinin itibarını etkiledi.",
      ],
      "'The rivalry damaged' 'rekabet zedeledi', 'the reputations of both men' 'her iki adamın da itibarını' karşılığıdır.",
    ],
    [
      "The skeleton was named after a song that was playing in the camp.",
      [
        "İskelete kampta çalan bir şarkının adı verildi.",
        "Kampta iskelet hakkında bir şarkı yazıldı.",
        "Kampta çalan şarkıyı beğenmeyen araştırmacılar, iskelete bulunduğu bölgenin adını vermeyi tercih etti.",
        "İskelet kampta bir şarkı çalıyordu.",
        "Şarkı iskeletten sonra yazıldı.",
      ],
      "'The skeleton was named after a song' 'iskelete bir şarkının adı verildi', 'that was playing in the camp' 'kampta çalan' karşılığıdır.",
    ],
    [
      "The fossils were destroyed, but the scientist's detailed descriptions survived.",
      [
        "Fosiller yok edildi, ancak bilim insanının ayrıntılı tanımlamaları günümüze ulaştı.",
        "Fosiller günümüze ulaştı, ancak bilim insanının tanımlamaları yok edildi.",
        "Ayrıntılı tanımlamaları yok edilen fosiller, savaştan sonra yeniden bulunarak müzenin yeni binasında sergilenmeye başlandı.",
        "Bilim insanı fosilleri kendisi yok etti.",
        "Fosiller hiç tanımlanmadı.",
      ],
      "'The fossils were destroyed' 'fosiller yok edildi', 'but the scientist's detailed descriptions survived' 'ancak bilim insanının ayrıntılı tanımlamaları günümüze ulaştı' karşılığıdır.",
    ],
    [
      "The species may have become small because food on the island was limited.",
      [
        "Tür, adadaki besin sınırlı olduğu için küçülmüş olabilir.",
        "Tür, adada çok fazla besin bulunduğu için büyüdü.",
        "Adadaki besinin sınırlı olduğunu fark eden tür, daha fazla yiyecek bulmak için başka adalara göç etti ve orada büyüdü.",
        "Ada, türün küçük olması nedeniyle küçüldü.",
        "Türün büyüklüğü besinle ilgili değildi.",
      ],
      "'may have become small' 'küçülmüş olabilir', 'because food on the island was limited' 'adadaki besin sınırlı olduğu için' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Buckland, hayvanın yaklaşık on iki metre uzunluğunda olduğunu tahmin etti.",
      [
        "Buckland estimated that the animal was about twelve metres long.",
        "Buckland measured the animal and found it was twelve centimetres long.",
        "Buckland refused to estimate the length of the animal because he had found only a small part of its skeleton.",
        "The animal was twelve years old.",
        "Buckland found twelve animals.",
      ],
      "'hayvanın yaklaşık on iki metre uzunluğunda olduğunu' 'that the animal was about twelve metres long', 'tahmin etti' 'estimated' karşılığıdır.",
    ],
    [
      "Smith, başka bir örnek bulmak için on dört yıl harcadı.",
      [
        "Smith spent fourteen years searching for another specimen.",
        "Smith found fourteen specimens in one year.",
        "Smith found another specimen within a few weeks, but he kept the discovery secret for fourteen years.",
        "Smith never looked for another specimen.",
        "Another scientist searched for Smith.",
      ],
      "'başka bir örnek bulmak için' 'searching for another specimen', 'on dört yıl harcadı' 'spent fourteen years' karşılığıdır.",
    ],
    [
      "İki adam yüz otuzdan fazla yeni dinozor türünü adlandırdı.",
      [
        "The two men named more than a hundred and thirty new species of dinosaur.",
        "The two men named only one dinosaur.",
        "The two men disagreed so strongly that they were unable to agree on a name for any of the dinosaurs they discovered.",
        "Dinosaurs were named after the two men.",
        "A hundred and thirty men named dinosaurs.",
      ],
      "'yüz otuzdan fazla yeni dinozor türünü' 'more than a hundred and thirty new species of dinosaur', 'adlandırdı' 'named' karşılığıdır.",
    ],
    [
      "Fosilin hem solungaçları hem de akciğerleri vardı.",
      [
        "The fossil had both gills and lungs.",
        "The fossil had neither gills nor lungs.",
        "The fossil had gills, but scientists were unable to find any evidence that the animal could breathe air.",
        "The fossil breathed through its skin.",
        "The fossil was a modern fish.",
      ],
      "'hem solungaçları hem de akciğerleri' 'both gills and lungs', 'fosilin vardı' 'the fossil had' karşılığıdır.",
    ],
    [
      "Fosiller, 1944'te bir hava saldırısında yok edildi.",
      [
        "The fossils were destroyed in an air raid in 1944.",
        "The fossils survived the air raids of 1944.",
        "The fossils were moved to a safe place shortly before an air raid in 1944, and they are now displayed in a museum in Berlin.",
        "The fossils were found in 1944.",
        "An air raid was caused by the fossils.",
      ],
      "'1944'te bir hava saldırısında' 'in an air raid in 1944', 'fosiller yok edildi' 'the fossils were destroyed' karşılığıdır.",
    ],
    [
      "Araştırmacılar mağarada taş aletler ve hayvan kemikleri de buldu.",
      [
        "The researchers also found stone tools and animal bones in the cave.",
        "The researchers found no tools in the cave.",
        "The researchers expected to find stone tools in the cave, but they discovered only the bones of small animals.",
        "Animals made the stone tools.",
        "The cave was made of animal bones.",
      ],
      "'mağarada taş aletler ve hayvan kemikleri de' 'also stone tools and animal bones in the cave', 'buldu' 'found' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the late nineteenth century, two American palaeontologists, Edward Drinker Cope of Philadelphia and Othniel Charles Marsh of Yale University, engaged in one of the most bitter rivalries in the history of science, later known as the 'Bone Wars'. The two men had once been friends, but they fell out in the late 1860s, partly after Marsh pointed out that Cope had placed the head of a marine reptile, Elasmosaurus, on the end of its tail. As vast fossil beds were discovered in the American West, both men sent teams to excavate them, often in competition. They spied on each other's sites, bribed workers to switch sides, stole fossils and, according to some accounts, destroyed bones to prevent the other from obtaining them. Each rushed to publish descriptions of new species, sometimes on the basis of incomplete remains, which led to errors and duplicate names; the famous 'Brontosaurus', for example, was named by Marsh using a skeleton that combined bones of different animals. In 1890, their quarrel spilled into the newspapers, damaging both men's reputations, and both ended their lives with much of their wealth gone. Nevertheless, between them they named more than a hundred and thirty new species of dinosaur, including Triceratops and Stegosaurus, and their work greatly increased knowledge of prehistoric life in North America.",
      questions: [
        [
          "According to the passage, the friendship between Cope and Marsh ended partly because ----.",
          [
            "Marsh exposed an error in Cope's reconstruction",
            "Cope stole Marsh's fossils",
            "they worked at the same university",
            "Cope had named a famous dinosaur by combining the bones of several different animals",
            "they disagreed about evolution",
          ],
          "Metne göre Marsh, Cope'un bir deniz sürüngeninin kafasını kuyruğuna taktığını göstermişti.",
        ],
        [
          "The example of 'Brontosaurus' is used to illustrate ----.",
          [
            "mistakes caused by hasty publication",
            "the size of dinosaurs",
            "a successful collaboration",
            "the way in which newspapers reported the quarrel between the two scientists in 1890",
            "the destruction of fossils",
          ],
          "Aceleyle yayımlamanın yol açtığı hatalara örnektir.",
        ],
        [
          "It can be understood from the passage that, despite the rivalry, ----.",
          [
            "their work made an important contribution to palaeontology",
            "both men became rich",
            "few new species were found",
            "they eventually became friends again and published their research together",
            "no errors were made",
          ],
          "Yüz otuzdan fazla yeni tür adlandırdılar ve bilgiye büyük katkı yaptılar.",
        ],
      ],
    },
    {
      text:
        "By the early 2000s, scientists knew that four-legged land animals, or tetrapods, had evolved from fish, but fossils showing the transition were scarce. The American palaeontologist Neil Shubin and his colleagues reasoned that such a creature would most likely be found in rocks about 375 million years old, between the ages of the earliest known fish with limb-like fins and the earliest known tetrapods. They also needed rocks formed in shallow streams, where such animals might have lived, that were exposed at the surface. Using geological maps, they identified a suitable area on Ellesmere Island in the Canadian Arctic. After four summer expeditions in harsh conditions, they found, in 2004, the flattened head of a creature sticking out of a cliff. They named it Tiktaalik, a word from the language of the local Inuit people meaning a large freshwater fish. Tiktaalik had scales, fins and gills like a fish, but it also had a flat head like a crocodile, a neck, which fish lack, lungs, and fins containing bones that corresponded to those of the upper arm, forearm and wrist of land animals. It could probably prop itself up in shallow water. The discovery was hailed as a striking example of how evolutionary theory can be used to predict where fossils will be found.",
      questions: [
        [
          "According to the passage, the team chose to search on Ellesmere Island because ----.",
          [
            "rocks of the right age and type were exposed there",
            "the Inuit had found fossils there",
            "it was easy to reach",
            "tetrapods are still found living in the shallow streams of the Canadian Arctic",
            "the climate was mild",
          ],
          "Metne göre uygun yaşta ve türde, yüzeye çıkmış kayalar oradaydı.",
        ],
        [
          "Tiktaalik had a neck, which shows that ----.",
          [
            "it shared a feature with land animals",
            "it was a typical fish",
            "it could fly",
            "it was more closely related to modern crocodiles than to any other kind of animal",
            "it had no gills",
          ],
          "Balıklarda bulunmayan boyun kara hayvanlarıyla ortak bir özelliktir.",
        ],
        [
          "The passage suggests that the discovery was especially significant because ----.",
          [
            "it confirmed a prediction based on evolution",
            "it was found by accident",
            "it was the oldest fossil ever found",
            "it proved that tetrapods had evolved from crocodiles rather than from fish",
            "it was complete",
          ],
          "Evrim kuramıyla fosilin nerede bulunacağının öngörülebildiğini gösterdi.",
        ],
      ],
    },
    {
      text:
        "On 24 November 1974, the American palaeoanthropologist Donald Johanson and his student Tom Gray were surveying a gully at Hadar in the Afar region of Ethiopia when Johanson noticed a piece of arm bone on the slope. Searching the area, they found more and more bones from the same individual. Over the following weeks, the team recovered about forty per cent of a skeleton, an extraordinary proportion for a fossil more than three million years old. That night, as the team celebrated in their camp, the Beatles' song 'Lucy in the Sky with Diamonds' was playing repeatedly, and the skeleton became known as Lucy; in Ethiopia she is called Dinkinesh, meaning 'you are marvellous'. Lucy belonged to a species later named Australopithecus afarensis. She was about 1.1 metres tall and had a small brain, roughly the size of a chimpanzee's. However, the shape of her pelvis and knee showed that she walked upright on two legs. This combination was important evidence that walking on two legs evolved long before the large brains characteristic of humans, contrary to what some scientists had assumed. Analysis of her bones suggests that she may also have spent time climbing trees. In 2016, researchers suggested that fractures in her bones were consistent with a fall from a tree, which may have caused her death.",
      questions: [
        [
          "According to the passage, the Lucy skeleton was remarkable partly because ----.",
          [
            "an unusually large part of it had survived",
            "it was found by a student alone",
            "it had a large brain",
            "it belonged to a species that was already well known from many earlier discoveries",
            "it was found in a camp",
          ],
          "Metne göre üç milyon yıldan eski bir fosil için iskeletin yaklaşık yüzde kırkı bulundu.",
        ],
        [
          "Lucy's skeleton provided evidence that ----.",
          [
            "upright walking came before large brains",
            "large brains evolved first",
            "early humans could not climb",
            "chimpanzees walked on two legs in the same way as modern humans",
            "she lived in a camp",
          ],
          "İki ayak üzerinde yürüme insanlara özgü büyük beyinlerden çok önce evrimleşmişti.",
        ],
        [
          "It can be understood from the passage that Lucy's death ----.",
          [
            "may have resulted from a fall",
            "was caused by a predator",
            "is known with certainty",
            "occurred while she was walking across the gully where her bones were later found",
            "was caused by illness",
          ],
          "Kemiklerindeki kırıklar bir ağaçtan düşmeyle uyumluydu.",
        ],
      ],
    },
    {
      text:
        "In 1912, the German palaeontologist Ernst Stromer received fossils collected in the Bahariya Oasis in Egypt by a collector working for him. Among them were parts of an enormous predatory dinosaur with long, narrow jaws and spines on its back up to nearly two metres long, which may have supported a sail-like structure. In 1915, Stromer named it Spinosaurus. He published detailed descriptions and drawings, and the fossils were displayed in a museum in Munich. Stromer, who opposed the Nazi regime, repeatedly asked the museum's director to move the collection to a safer location as the Second World War progressed, but the director, a Nazi supporter, refused. In April 1944, a bombing raid destroyed the museum and the Spinosaurus fossils with it. For decades, Stromer's drawings and photographs were the only evidence of the animal. In the 2000s and 2010s, new fossils from Morocco, together with Stromer's records, led researchers to argue that Spinosaurus was adapted to life in water, with dense bones like those of swimming animals, nostrils high on the skull and, according to a 2020 study, a paddle-like tail. This would make it the first known swimming dinosaur. Other palaeontologists dispute this interpretation, arguing that it hunted fish mainly by wading in shallow water, like a heron.",
      questions: [
        [
          "According to the passage, the Spinosaurus fossils were lost because ----.",
          [
            "the museum's director did not move them to safety",
            "they were sold abroad",
            "Stromer destroyed them",
            "they were sent back to Egypt at the beginning of the Second World War",
            "they were stolen",
          ],
          "Metne göre müdür taşıma isteğini reddetti ve müze bombalandı.",
        ],
        [
          "Stromer's drawings and photographs were important because ----.",
          [
            "they were the only record of the original fossils",
            "they were works of art",
            "they showed the museum",
            "they proved that Spinosaurus had been discovered in Morocco rather than in Egypt",
            "they were used for propaganda",
          ],
          "Onlarca yıl hayvanın tek kanıtı onlardı.",
        ],
        [
          "It can be understood from the passage that palaeontologists ----.",
          [
            "disagree about how Spinosaurus lived",
            "agree that it swam",
            "have found a complete skeleton",
            "believe that it lived mainly in deserts far from any rivers or lakes",
            "have never studied it",
          ],
          "Bazıları yüzen bir dinozor olduğunu, bazıları sığ suda yürüyerek avlandığını savunur.",
        ],
      ],
    },
    {
      text:
        "In 2003, a team of Australian and Indonesian researchers excavating Liang Bua, a limestone cave on the island of Flores in Indonesia, found the skeleton of a small adult human. She stood only about a metre tall and had a brain about the size of a chimpanzee's, yet she was found with stone tools. In 2004, the team announced that the remains belonged to a new species, Homo floresiensis, which the media nicknamed 'the hobbit'. The discovery was highly controversial. Some scientists argued that the skeleton was that of a modern human suffering from a disease that had caused an unusually small head and body. The discovery of further individuals, however, with similar features, and detailed studies of the bones, persuaded most researchers that it was indeed a distinct species. One explanation for its small size is 'island dwarfism', a process in which large animals living on islands with limited food evolve to become smaller over many generations; Flores was also home to dwarf elephants. Revised dating published in 2016 suggested that the species survived on the island until about fifty thousand years ago, roughly when modern humans arrived in the region. How it reached the island, which was never connected to the mainland, and whether it encountered modern humans, remain open questions.",
      questions: [
        [
          "According to the passage, the discovery was surprising partly because ----.",
          [
            "a small-brained species had made stone tools",
            "the cave was on an island",
            "the skeleton was very tall",
            "the researchers came from two different countries and had never worked together before",
            "the bones were modern",
          ],
          "Metne göre şempanze büyüklüğünde beyni olan bir türün yanında taş aletler bulundu.",
        ],
        [
          "Most researchers came to accept the new species after ----.",
          [
            "more individuals with similar features were found",
            "the media named it",
            "the cave was dated",
            "the skeleton was compared with those of modern people who had suffered from diseases",
            "elephants were found",
          ],
          "Benzer özelliklere sahip başka bireylerin bulunması ikna edici oldu.",
        ],
        [
          "The dwarf elephants on Flores are mentioned to support the idea that ----.",
          [
            "animals on the island tended to become smaller",
            "humans hunted elephants",
            "Flores was connected to the mainland",
            "the island had more food than most other islands in the region",
            "elephants made tools",
          ],
          "Adada büyük hayvanların zamanla küçüldüğü 'ada cüceliği' düşüncesini destekler.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1861, quarry workers in Bavaria, Germany, found the fossil of a crow-sized animal in fine limestone. ---- Coming only two years after Darwin's On the Origin of Species, it seemed to provide evidence of a link between reptiles and birds.",
      [
        "Named Archaeopteryx, it had feathers and wings like a bird but also teeth, claws and a long bony tail like a reptile.",
        "Bavaria is in southern Germany.",
        "Limestone is used in building.",
        "The limestone of the region is so fine that it had long been used for printing, and many beautifully preserved fossils have been found in its quarries.",
        "Crows are intelligent birds.",
      ],
      "Boşluktan sonra 'it' zamiriyle sürüngen-kuş bağlantısı anlatılır; boşluğa Archaeopteryx'in hem tüy ve kanat hem diş, pençe ve kuyruğu olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1854, life-sized concrete models of prehistoric animals were unveiled in the gardens of the Crystal Palace in south London. ---- Although many of the models are now known to be inaccurate, they still stand in the park and are protected as historic monuments.",
      [
        "Designed by the sculptor Benjamin Waterhouse Hawkins with advice from Richard Owen, they were the first such models in the world.",
        "London has many parks.",
        "Concrete is a strong material.",
        "Before the models were finished, Hawkins held a famous dinner for scientists inside the mould of the Iguanodon, and an illustration of the event appeared in a popular magazine.",
        "Gardens contain many plants.",
      ],
      "Boşluk modellerin kökenini açıklayan bir cümle gerektirir; boşluğa heykeltıraş Hawkins'in Owen'ın danışmanlığıyla tasarladığı dünyadaki ilk modeller olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In the middle of Los Angeles, natural asphalt has been seeping to the surface for tens of thousands of years, forming sticky pools known as the La Brea Tar Pits. ---- Scientists have recovered millions of fossils from the site, including mammoths, sabre-toothed cats and dire wolves.",
      [
        "Animals that wandered into the pools became trapped, and predators that came to feed on them were often caught too.",
        "Los Angeles is a large city.",
        "Asphalt is used on roads.",
        "The site was once owned by a businessman who mined the asphalt for roofing and road building before he gave the land to the county in 1924.",
        "Wolves live in packs.",
      ],
      "Boşluktan sonra fosillerin bolluğu anlatılır; boşluğa havuzlara giren hayvanların ve onları yemeye gelen avcıların da saplandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1996, Chinese scientists described a small dinosaur from Liaoning province whose fossil showed a fringe of short, hair-like filaments along its back and tail. ---- Many later finds from the same region confirmed that a wide range of dinosaurs had feathers of various kinds.",
      [
        "Named Sinosauropteryx, it was the first dinosaur known to have been covered in simple feathers.",
        "China is a large country.",
        "Many animals have tails.",
        "Later studies of tiny structures preserved in the filaments suggested that its tail had stripes of reddish-brown and white, like those of a modern raccoon.",
        "Liaoning has cold winters.",
      ],
      "Boşluktan sonra benzer bulguların doğrulandığı anlatılır; boşluğa Sinosauropteryx'in basit tüylerle kaplı bilinen ilk dinozor olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 2007, a reindeer herder in Siberia found the frozen body of a baby mammoth on a riverbank. ---- Scientists named her Lyuba and found that she had died at about one month old, around forty-two thousand years ago, probably after becoming trapped in mud.",
      [
        "The animal was so well preserved that even its skin, eyes and the milk in its stomach were intact.",
        "Siberia is very cold.",
        "Reindeer are herded in the north.",
        "The herder at first thought it was a dead reindeer calf, and he travelled a long distance to report the find to a museum in the nearest town.",
        "Rivers freeze in winter.",
      ],
      "Boşluk hayvanın korunma durumunu anlatan bir cümle gerektirir; boşluğa derisi, gözleri ve midesindeki sütü dahil son derece iyi korunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 2013, cavers exploring the Rising Star cave system in South Africa squeezed through a passage only about eighteen centimetres wide and found a chamber full of bones. ---- The bones belonged to a new species, Homo naledi, which had a mixture of human-like and ape-like features.",
      [
        "Because the passage was so narrow, the expedition leader advertised online for slim scientists with caving experience to excavate them.",
        "South Africa has many caves.",
        "Bones are found in many places.",
        "The cave system lies in an area that has produced so many fossils of early humans that it has been named the 'Cradle of Humankind' by UNESCO.",
        "Cavers use ropes.",
      ],
      "Boşluk kemiklerin nasıl çıkarıldığını açıklayan bir cümle gerektirir; boşluğa geçit çok dar olduğu için ince ve deneyimli bilim insanlarının arandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The dodo was a large, flightless bird that lived only on the island of Mauritius.",
        "Having evolved without predators, it showed little fear of humans.",
        "Mauritius is popular with tourists.",
        "After sailors arrived in 1598, the bird was hunted, and introduced animals ate its eggs.",
        "Within about a century, it had become extinct.",
      ],
      odd: 2,
      why: "Parça dodo kuşunun yok oluşunu anlatır. Mauritius'un turistler arasında popüler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Messel Pit near Frankfurt is a former mine that contains extraordinarily well-preserved fossils.",
        "About forty-seven million years ago, it was a lake where animals died and sank into oxygen-poor mud.",
        "Frankfurt is an important financial centre.",
        "Fossils found there include early horses, bats with their stomach contents and birds with feathers.",
        "In 1995, the site became a UNESCO World Heritage Site.",
      ],
      odd: 2,
      why: "Parça Messel çukurundaki fosilleri anlatır. Frankfurt'un önemli bir finans merkezi olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Trilobites were sea animals with hard, segmented shells that lived for nearly three hundred million years.",
        "They were among the first animals to have complex eyes.",
        "Their eyes had lenses made of a mineral called calcite.",
        "Calcite is also found in limestone.",
        "Thousands of species are known from fossils found all over the world.",
      ],
      odd: 3,
      why: "Parça trilobitleri anlatır. Kalsitin kireçtaşında da bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Fossilised animal droppings are called coprolites.",
        "They can reveal what extinct animals ate.",
        "A large coprolite thought to have come from a Tyrannosaurus contained fragments of bone.",
        "Many people keep dogs as pets.",
        "Coprolites have also been used to study ancient diseases and parasites.",
      ],
      odd: 3,
      why: "Parça koprolitleri anlatır. Pek çok kişinin köpek beslediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ammonites were sea creatures with coiled shells that are common as fossils.",
        "They evolved rapidly, and different species lived at different times.",
        "Spirals appear in many natural forms.",
        "Because of this, geologists use them to date the rocks in which they are found.",
        "They died out at the same time as the dinosaurs.",
      ],
      odd: 2,
      why: "Parça ammonitleri ve kayaların tarihlendirilmesindeki rolünü anlatır. Sarmalların pek çok doğal biçimde görüldüğünü söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some of the oldest known fossils of complex life come from the Ediacara Hills in South Australia.",
        "Cricket is popular in Australia.",
        "They are about 560 million years old and include soft-bodied creatures unlike any living today.",
        "Many look like fronds, discs or quilted mattresses.",
        "Scientists still debate whether they were animals, plants or something else entirely.",
      ],
      odd: 1,
      why: "Parça Ediacara fosillerini anlatır. Kriketin Avustralya'da popüler olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
