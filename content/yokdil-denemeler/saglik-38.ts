import type { YokdilDeneme } from "./types";

export const SAGLIK_38: YokdilDeneme = {
  no: 38,
  field: "saglik",
  vocab: [
    [
      "Remarkably, the man remained ---- and was able to speak within minutes of the accident.",
      ["conscious", "anonymous", "invisible", "generous", "nervous"],
      "Adamın kazadan dakikalar sonra 'bilinci yerinde' (conscious) kalıp konuşabildiği anlatılır.",
    ],
    [
      "The neuron fired strongly whenever a line at a particular ---- moved across the screen.",
      ["angle", "price", "weight", "speed", "colour"],
      "Nöronun ekranda belirli bir 'açıdaki' (angle) çizgi her hareket ettiğinde güçlü biçimde ateşlendiği anlatılır.",
    ],
    [
      "Surgeons cut the connection between the two halves of the brain to ---- severe seizures.",
      ["control", "cause", "measure", "record", "imitate"],
      "Cerrahların ağır nöbetleri 'kontrol altına almak' (control) için beynin iki yarısı arasındaki bağlantıyı kestiği anlatılır.",
    ],
    [
      "Drivers must ---- the layout of thousands of streets before they can obtain a licence.",
      ["memorise", "redesign", "forbid", "pave", "rename"],
      "Sürücülerin ruhsat alabilmek için binlerce sokağın düzenini 'ezberlemesi' (memorise) gerektiği anlatılır.",
    ],
    [
      "The disease is ---- from parent to child, and each child has a fifty per cent chance of inheriting it.",
      ["passed on", "made up", "put off", "turned down", "given up"],
      "Hastalığın ebeveynden çocuğa 'aktarıldığı' (passed on) ve her çocuğun yüzde elli olasılıkla kalıtım yoluyla aldığı anlatılır.",
    ],
    [
      "Repeated blows to the head can cause ---- damage to the brain over many years.",
      ["gradual", "sudden", "pleasant", "artificial", "temporary"],
      "Kafaya tekrarlanan darbelerin yıllar içinde beyinde 'yavaş yavaş ilerleyen' (gradual) hasara yol açabileceği anlatılır.",
    ],
  ],
  grammar: [
    [
      "Gage ---- a gang of railway workers when the explosion occurred.",
      ["was supervising", "has supervised", "supervises", "will supervise", "had been supervised"],
      "Geçmişte süren bir eylem sırasında başka bir olay olmuştur: 'was supervising'.",
    ],
    [
      "By the time the researchers found the right stimulus, they ---- for hours without any response.",
      ["had been working", "work", "will work", "are working", "have been worked"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been working'.",
    ],
    [
      "If the slide had not been inserted at an angle, the scientists ---- the discovery that day.",
      ["might not have made", "may not make", "do not make", "had not made", "will not make"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have made'.",
    ],
    [
      "The brains of the taxi drivers ---- using magnetic resonance imaging.",
      ["were scanned", "scanned", "have scanned", "are scanning", "will scan"],
      "Beyinler taranmıştır; edilgen yapı: 'were scanned'.",
    ],
    [
      "---- the patient could not name the object, his left hand was able to pick it out.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Nesneyi adlandıramaması ile sol elinin onu seçebilmesi zıttır: 'Although'.",
    ],
    [
      "The pathologist examined the brain of a former footballer ---- had died at the age of fifty.",
      ["who", "which", "whose", "whom", "where"],
      "'a former footballer' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "The league at first rejected the findings, ---- angered many former players.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer drivers had worked, ---- that part of their hippocampus was.",
      ["the larger", "the largest", "larger than", "much larger", "so large"],
      "'The longer ..., the larger ...' paralel yapısı: 'the larger'.",
    ],
    [
      "Not until 1993 ---- the gene responsible for Huntington's disease finally identified.",
      ["was", "did", "had", "has", "were"],
      "'Not until' ile devrik yapı; edilgen geçmiş zaman: 'was'.",
    ],
    [
      "The neurons fired both when the monkey grasped food and when it watched someone else ---- the same.",
      ["do", "to do", "doing", "did", "done"],
      "'watch somebody do something' yapısında yalın fiil: 'do'.",
    ],
    [
      "Jackson noticed that his wife's seizures always began in one hand ---- spreading to her face.",
      ["before", "until", "unless", "since", "while"],
      "Nöbetin yüze yayılmadan önce elde başladığı anlatılır: 'before'.",
    ],
    [
      "Gehrig played in more than two thousand games in a row, a record that ---- for over fifty years.",
      ["stood", "stands", "has stood", "will stand", "was stood"],
      "Geçmişte belirli bir süre geçerli kalmış rekor: 'stood'.",
    ],
    [
      "The challenge became so popular ---- it raised more than a hundred million dollars in weeks.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Doctors recommend that athletes with a head injury ---- to play immediately.",
      ["not return", "do not return", "did not return", "not to return", "not returning"],
      "'recommend that' sonrası olumsuz subjunctive: 'not return'.",
    ],
  ],
  cloze: [
    {
      text:
        "On 13 September 1848, Phineas Gage, a 25-year-old foreman working on a railway line in Vermont, was preparing a hole for an explosive charge when the powder ignited unexpectedly. The iron rod he was using, more than a metre long and about three centimetres thick, shot up through his left cheek, passed behind his eye and came out through the top of his skull, landing many metres away. {1} the severity of the injury, Gage was conscious within minutes and spoke to the people around him. He was treated by a local doctor, John Harlow, {2} kept careful notes on his progress. Gage survived an infection and recovered physically, but according to Harlow, his personality changed. The responsible, well-liked foreman became impatient, rude and unable to keep to his plans, {3} his friends said that he was 'no longer Gage'. His case became famous {4} it suggested that the front part of the brain is involved in controlling behaviour. Some historians now argue, {5}, that these changes were exaggerated, pointing out that Gage spent several years driving coaches in Chile, work that demanded planning and social skills.",
      blanks: [
        [
          "(21) ----",
          ["Despite", "Because of", "Instead of", "According to", "Thanks to"],
          "Yaranın ciddiyetine 'rağmen' dakikalar içinde bilincinin yerinde olduğu anlatılır: 'Despite'.",
        ],
        [
          "(22) ----",
          ["who", "which", "whose", "where", "what"],
          "Virgülden sonra doktoru niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(23) ----",
          ["so much so that", "even though", "unless", "as long as", "in case"],
          "Değişimin o kadar büyük olduğu ki arkadaşlarının onu tanıyamadığı anlatılır: 'so much so that'.",
        ],
        [
          "(24) ----",
          ["because", "although", "unless", "whereas", "until"],
          "Vakanın ünlü olmasının nedeni beynin ön kısmının davranışla ilişkisini düşündürmesidir: 'because'.",
        ],
        [
          "(25) ----",
          ["however", "therefore", "for instance", "in addition", "likewise"],
          "Önceki yoruma karşı çıkan görüş sunulur: 'however'.",
        ],
      ],
    },
    {
      text:
        "In the late 1950s, two young researchers at Johns Hopkins University, David Hubel and Torsten Wiesel, set out to discover how the brain processes what the eyes see. They placed fine electrodes in the visual cortex of anaesthetised cats and recorded the activity of single nerve cells {1} they showed the animals simple images projected onto a screen. For hours, the spots of light they used produced almost no response. Then, while they were inserting a glass slide into the projector, one cell suddenly began to fire rapidly. They realised that it was responding not to the spot on the slide {2} to the faint shadow of the slide's edge as it moved across the screen at a particular angle. Further experiments showed that many cells in the visual cortex respond best to lines or edges with a specific orientation, {3} others respond to movement in a particular direction. The brain, it seemed, builds up an image from simple features. Hubel and Wiesel also found that if one eye of a kitten was kept closed during the first few months of life, the brain never learned to use it properly, {4} the same treatment had no lasting effect in adult cats. Their work revealed a 'critical period' in development and earned them a share of the Nobel Prize {5} 1981.",
      blanks: [
        [
          "(26) ----",
          ["while", "unless", "although", "until", "since"],
          "Kayıt yaparken aynı anda görüntü gösterildiği anlatılır: 'while'.",
        ],
        [
          "(27) ----",
          ["but", "or", "nor", "and", "yet"],
          "'not ... but ...' yapısı: 'but'.",
        ],
        [
          "(28) ----",
          ["whereas", "because", "so that", "unless", "since"],
          "Bazı hücrelerin yöne, diğerlerinin harekete tepki vermesi karşılaştırılır: 'whereas'.",
        ],
        [
          "(29) ----",
          ["whereas", "because", "so that", "as if", "in case"],
          "Yavru kedilerdeki etki ile yetişkin kedilerdeki etkisizlik karşılaştırılır: 'whereas'.",
        ],
        [
          "(30) ----",
          ["in", "on", "at", "by", "since"],
          "Yıl ile 'in 1981': 'in'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Gage survived the accident, ----.",
      [
        "his friends noticed changes in his behaviour",
        "he was working on a railway in Vermont",
        "the iron rod was more than a metre long",
        "the doctor's name was John Harlow",
        "explosives were used to clear rock",
      ],
      "'Although' zıtlık ister: Gage kazadan sağ çıksa da arkadaşları davranışlarında değişiklikler fark etti.",
    ],
    [
      "The researchers made their key discovery ----.",
      [
        "by chance, while changing a slide",
        "although they worked at a university",
        "unless the cats were anaesthetised",
        "because spots of light are bright",
        "so that the Nobel Prize was awarded",
      ],
      "Araştırmacılar kilit keşiflerini tesadüfen, bir lamı değiştirirken yaptılar.",
    ],
    [
      "If an image is shown only to the right half of the brain in these patients, ----.",
      [
        "they cannot say what it is",
        "the surgery was performed in California",
        "epilepsy causes sudden seizures",
        "the brain has two hemispheres",
        "language is learned in childhood",
      ],
      "Birinci tip koşul: bu hastalarda görüntü yalnızca beynin sağ yarısına gösterilirse ne olduğunu söyleyemezler.",
    ],
    [
      "----, London taxi drivers spend years learning the city's streets.",
      [
        "In order to pass a famously difficult test",
        "Although London is a very large city",
        "Unless they own their own cars",
        "Because the hippocampus is in the brain",
        "Since many tourists visit London",
      ],
      "Londra taksi şoförleri, ünlü ve zor bir sınavı geçmek amacıyla yıllarca kentin sokaklarını öğrenir.",
    ],
    [
      "The pathologist decided to examine the player's brain closely ----.",
      [
        "because the man had shown severe mental decline",
        "although football is popular in America",
        "unless the family had refused permission",
        "so that the film was made later",
        "while the league was very wealthy",
      ],
      "Patolog, adam ağır bir zihinsel gerileme gösterdiği için oyuncunun beynini yakından incelemeye karar verdi.",
    ],
    [
      "Wexler collected blood samples from families near Lake Maracaibo ----.",
      [
        "because the disease was unusually common there",
        "although she lived in the United States",
        "unless the villagers had moved away",
        "so that her mother was ill",
        "while the lake is in Venezuela",
      ],
      "Wexler, hastalık orada alışılmadık derecede yaygın olduğu için Maracaibo Gölü yakınındaki ailelerden kan örnekleri topladı.",
    ],
    [
      "Not only did the neurons fire when the monkey moved, ----.",
      [
        "but they also fired when it watched others",
        "and the laboratory was in Italy",
        "since monkeys enjoy ice cream",
        "so the cells were in the cortex",
        "unless the food was very small",
      ],
      "'Not only ... but also' yapısı tamamlanır: nöronlar yalnızca maymun hareket ettiğinde değil, başkalarını izlerken de ateşlendi.",
    ],
    [
      "Since the seizures always spread in the same order, ----.",
      [
        "he inferred a body map in the brain",
        "his wife was often frightened",
        "he worked in a London hospital",
        "epilepsy has been known for centuries",
        "the attacks lasted a few minutes",
      ],
      "'Since' neden bildirir: nöbetler hep aynı sırayla yayıldığı için Jackson beynin vücudun bir haritasını içerdiği sonucuna vardı.",
    ],
    [
      "Although he knew he was seriously ill, ----.",
      [
        "Gehrig called himself lucky",
        "the stadium was in New York",
        "baseball is played in summer",
        "he had played for many years",
        "his team was very successful",
      ],
      "'Although' zıtlık ister: ağır hasta olduğunu bilse de Gehrig kalabalığa kendini şanslı saydığını söyledi.",
    ],
    [
      "The money raised by the challenge was used ----.",
      [
        "to fund gene research",
        "although many people found it funny",
        "unless the water was very cold",
        "because it took place in 2014",
        "while celebrities posted videos",
      ],
      "Kampanyayla toplanan para yeni bir genin bulunmasına yardım eden araştırmaları finanse etmek için kullanıldı.",
    ],
    [
      "Unless players with concussions are given time to recover, ----.",
      [
        "a second injury may be worse",
        "most games are played at weekends",
        "helmets are worn in many sports",
        "the season lasts for several months",
        "football is watched by millions",
      ],
      "'Unless' olumsuz koşul: beyin sarsıntısı geçiren oyunculara iyileşmeleri için zaman tanınmazsa ikinci bir yaralanma çok daha ciddi zarara yol açabilir.",
    ],
  ],
  enTr: [
    [
      "The rod passed through the front of his brain, yet he survived for another twelve years.",
      [
        "Çubuk beyninin ön kısmından geçti, yine de on iki yıl daha yaşadı.",
        "Çubuk beyninin ön kısmına girmeden önce on iki yıl daha yaşadı.",
        "Beyninin ön kısmından geçen çubuk on iki yıl boyunca çıkarılamadı.",
        "Çubuk beynine zarar vermediği için hemen iyileşti.",
        "Kazadan on iki yıl sonra beynine bir çubuk saplandı.",
      ],
      "'passed through the front of his brain' 'beyninin ön kısmından geçti', 'yet he survived for another twelve years' 'yine de on iki yıl daha yaşadı' karşılığıdır.",
    ],
    [
      "Many cells in the visual cortex respond only to lines tilted at a certain angle.",
      [
        "Görme korteksindeki pek çok hücre yalnızca belirli bir açıyla eğik çizgilere tepki verir.",
        "Görme korteksindeki hücreler her türlü çizgiye eşit biçimde tepki verir.",
        "Belirli bir açıyla eğik çizgiler, görme korteksinde hiçbir tepki oluşturmaz.",
        "Görme korteksi, çizgileri belirli bir açıyla eğmeye yarar.",
        "Görme korteksindeki pek çok hücre, belirli bir açıyla eğik çizgileri görmezden gelip yalnızca düz çizgilere tepki verir.",
      ],
      "'Many cells in the visual cortex' 'görme korteksindeki pek çok hücre', 'respond only to lines tilted at a certain angle' 'yalnızca belirli bir açıyla eğik çizgilere tepki verir' karşılığıdır.",
    ],
    [
      "In most people, the left half of the brain controls speech and language.",
      [
        "Çoğu insanda beynin sol yarısı konuşmayı ve dili kontrol eder.",
        "Çoğu insanda beynin sağ yarısı konuşmadan sorumludur.",
        "Konuşma ve dil, beynin her iki yarısı tarafından eşit olarak kontrol edilir.",
        "Beynin sol yarısı, yalnızca solak insanlarda dili kontrol eder.",
        "Dil, beynin sol yarısının gelişmesini engeller.",
      ],
      "'In most people' 'çoğu insanda', 'the left half of the brain controls speech and language' 'beynin sol yarısı konuşmayı ve dili kontrol eder' karşılığıdır.",
    ],
    [
      "Learning the map of the city appeared to change the structure of the drivers' brains.",
      [
        "Kentin haritasını öğrenmek, sürücülerin beyin yapısını değiştirmiş gibi görünüyordu.",
        "Sürücülerin beyin yapısı, kentin haritasını öğrenmelerini zorlaştırdı.",
        "Kentin haritası, sürücülerin beyinlerine göre yeniden çizildi.",
        "Sürücüler, kentin haritasını öğrendikten sonra beyin ameliyatı oldu.",
        "Kentin haritasını öğrenmek, sürücülerin beyin yapısında herhangi bir değişikliğe yol açmış gibi görünmüyordu.",
      ],
      "'Learning the map of the city' 'kentin haritasını öğrenmek', 'appeared to change the structure of the drivers' brains' 'sürücülerin beyin yapısını değiştirmiş gibi görünüyordu' karşılığıdır.",
    ],
    [
      "Each child of a parent with the disease has a one-in-two chance of developing it.",
      [
        "Hastalığa sahip bir ebeveynin her çocuğunun bu hastalığa yakalanma olasılığı ikide birdir.",
        "Hastalığa sahip ebeveynlerin çocuklarının yalnızca biri hastalanır.",
        "Hastalık, her iki ebeveyn de hasta olmadıkça çocuklara geçmez.",
        "Ebeveynlerden biri hasta olduğunda tüm çocuklar hastalanır.",
        "Hastalığa sahip bir ebeveynin çocuklarının hastalığa yakalanma olasılığı, diğer çocuklarınkinden hiç farklı değildir.",
      ],
      "'Each child of a parent with the disease' 'hastalığa sahip bir ebeveynin her çocuğu', 'has a one-in-two chance of developing it' 'hastalığa yakalanma olasılığı ikide birdir' karşılığıdır.",
    ],
    [
      "Some scientists believe that these cells help us to understand the actions of others.",
      [
        "Bazı bilim insanları, bu hücrelerin başkalarının eylemlerini anlamamıza yardım ettiğine inanıyor.",
        "Bilim insanları, başkalarının eylemlerinin bu hücrelere zarar verdiğine inanıyor.",
        "Bu hücreler, başkalarının eylemlerini taklit etmemizi engeller.",
        "Bazı bilim insanları, bu hücrelerin varlığına inanmıyor.",
        "Bazı bilim insanları, bu hücrelerin başkalarının eylemlerini anlamamızı zorlaştırdığına inanıyor.",
      ],
      "'help us to understand the actions of others' 'başkalarının eylemlerini anlamamıza yardım ettiğine' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Hastanın kişiliği kazadan sonra o kadar değişti ki arkadaşları onu tanıyamadı.",
      [
        "After the accident, the patient's personality changed so much that his friends could not recognise him.",
        "The patient's friends changed their personalities after the accident.",
        "The patient could not recognise his friends after the accident.",
        "The accident made the patient's friends more patient with him.",
        "After the accident, the patient's personality remained exactly the same, so his friends recognised him easily.",
      ],
      "'o kadar değişti ki' 'changed so much that', 'arkadaşları onu tanıyamadı' 'his friends could not recognise him' karşılığıdır.",
    ],
    [
      "Yavru kedinin bir gözü ilk aylarda kapalı tutulursa beyin o gözü kullanmayı asla öğrenemez.",
      [
        "If one of a kitten's eyes is kept closed in the first months, the brain never learns to use that eye.",
        "Kittens learn to use both eyes even if one is closed in the first months.",
        "The brain of a kitten closes one eye during the first months of life.",
        "Kittens cannot open their eyes until they are several months old.",
        "Keeping one of a kitten's eyes closed in the first months helps the brain to use that eye better later.",
      ],
      "'ilk aylarda kapalı tutulursa' 'if ... is kept closed in the first months', 'o gözü kullanmayı asla öğrenemez' 'never learns to use that eye' karşılığıdır.",
    ],
    [
      "Cerrahlar, ağır epilepsiyi tedavi etmek için beynin iki yarısını birbirine bağlayan lifleri kesti.",
      [
        "Surgeons cut the fibres connecting the two halves of the brain to treat severe epilepsy.",
        "Severe epilepsy cut the fibres connecting the two halves of the brain.",
        "Surgeons joined the two halves of the brain to cause epilepsy.",
        "The fibres of the brain were cut by accident during surgery.",
        "Surgeons treated severe epilepsy by joining the fibres that connect the two halves of the brain.",
      ],
      "'beynin iki yarısını birbirine bağlayan lifleri kesti' 'cut the fibres connecting the two halves of the brain', 'ağır epilepsiyi tedavi etmek için' 'to treat severe epilepsy' karşılığıdır.",
    ],
    [
      "Patolog, oyuncunun beyninde normalde yalnızca yaşlılarda görülen hasar buldu.",
      [
        "The pathologist found damage in the player's brain that is normally seen only in elderly people.",
        "The pathologist found that the player's brain was younger than expected.",
        "Elderly players rarely suffer brain damage.",
        "The pathologist examined the brains of many elderly people.",
        "The pathologist found that the damage in the player's brain had been caused simply by old age.",
      ],
      "'normalde yalnızca yaşlılarda görülen hasar' 'damage that is normally seen only in elderly people', 'oyuncunun beyninde buldu' 'found in the player's brain' karşılığıdır.",
    ],
    [
      "Araştırmacılar, binlerce kişiyi içeren dev bir soy ağacı oluşturdu.",
      [
        "The researchers built a huge family tree including thousands of people.",
        "Thousands of people helped the researchers to plant trees.",
        "The researchers found that families with large trees were healthier.",
        "The family tree included only a few dozen people.",
        "The researchers refused to study families with many members.",
      ],
      "'binlerce kişiyi içeren dev bir soy ağacı' 'a huge family tree including thousands of people', 'oluşturdu' 'built' karşılığıdır.",
    ],
    [
      "Küçük yaşta müzik eğitimine başlayanların beyinlerinde bazı yapılar daha büyük olabilir.",
      [
        "Certain structures may be larger in the brains of those who begin musical training at an early age.",
        "People with larger brains begin musical training earlier.",
        "Musical training makes the brain smaller in young children.",
        "Children who start music lessons late have larger brains.",
        "Brain structures are the same in people who begin musical training early and those who never study music.",
      ],
      "'Küçük yaşta müzik eğitimine başlayanların' 'of those who begin musical training at an early age', 'bazı yapılar daha büyük olabilir' 'certain structures may be larger' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1960s, a small number of people whose epileptic seizures did not respond to medication underwent an operation in which the corpus callosum, the thick band of fibres connecting the two halves of the brain, was cut. The surgery reduced their seizures, and in everyday life the patients seemed surprisingly normal. However, the psychologist Roger Sperry and his student Michael Gazzaniga designed tests that revealed something remarkable. Because each half of the brain receives visual information mainly from the opposite side of space, they could show a picture to just one half by flashing it briefly to the left or right of the point where the patient was looking. When an object was shown to the left half of the brain, which in most people controls language, the patient could name it easily. When it was shown to the right half, the patient usually said that he had seen nothing. Yet if he was asked to reach behind a screen with his left hand, which is controlled by the right half of the brain, he could pick out the correct object by touch. The experiments suggested that the two halves of the brain can process information independently. Sperry received a share of the Nobel Prize in 1981.",
      questions: [
        [
          "According to the passage, the operation was performed in order to ----.",
          [
            "reduce seizures that drugs could not control",
            "study how the brain processes language",
            "improve the patients' eyesight",
            "connect the two halves of the brain",
            "make the patients more intelligent",
          ],
          "Metne göre ameliyat ilaçlarla kontrol edilemeyen ağır epilepsi nöbetlerini azaltmak için yapıldı.",
        ],
        [
          "When an object was shown only to the right half of the brain, the patient ----.",
          [
            "could not name it but could find it by touch",
            "named it immediately",
            "could neither name it nor find it",
            "drew it with his right hand",
            "had a seizure as soon as the picture appeared",
          ],
          "Hasta nesneyi gördüğünü söyleyemiyor ama sol eliyle dokunarak doğru nesneyi seçebiliyordu.",
        ],
        [
          "It can be understood from the passage that the patients' condition ----.",
          [
            "was not obvious in ordinary daily life",
            "made them unable to speak",
            "worsened after the surgery",
            "was caused by poor eyesight",
            "affected only the movement of their left hand",
          ],
          "Gündelik yaşamda hastalar şaşırtıcı derecede normal görünüyordu; durum ancak özel testlerle ortaya çıktı.",
        ],
      ],
    },
    {
      text:
        "To obtain a licence to drive one of London's famous black taxis, drivers must pass a test known as 'the Knowledge', which requires them to memorise the layout of some 25,000 streets and thousands of landmarks within a radius of six miles of Charing Cross. Preparing for it usually takes three to four years. In 2000, the neuroscientist Eleanor Maguire and her colleagues at University College London used brain scans to compare licensed taxi drivers with people who did not drive taxis. They found that the rear part of the hippocampus, a structure involved in memory and navigation, was larger in the taxi drivers, and that its size was related to how long they had been in the job. Critics asked whether people with a larger hippocampus might simply be more likely to become taxi drivers. To answer this, Maguire's team later followed a group of trainees over several years. At the start, there was no difference between them and a control group. Those who went on to pass the test showed an increase in the size of the relevant region, whereas those who failed or gave up did not. The study provided strong evidence that the adult brain can change in response to intensive learning.",
      questions: [
        [
          "According to the passage, the size of the hippocampus in taxi drivers ----.",
          [
            "was linked to the number of years they had worked",
            "was smaller than in other people",
            "depended on their age",
            "was unrelated to their job",
            "changed only in women who drove taxis",
          ],
          "Metne göre boyutu meslekte geçirilen süreyle ilişkiliydi.",
        ],
        [
          "The later study of trainees was designed to find out whether ----.",
          [
            "the brain difference was caused by learning or existed beforehand",
            "trainees could pass the test more quickly",
            "taxi drivers were better at other memory tasks",
            "London's streets had changed",
            "drivers preferred certain routes through the city",
          ],
          "Eleştirmenler büyük hipokampuslu kişilerin taksici olmaya daha yatkın olup olmadığını sormuştu; çalışma bunu test etti.",
        ],
        [
          "It can be inferred from the passage that the trainees who failed ----.",
          [
            "showed no growth in the relevant brain region",
            "had a larger hippocampus from the start",
            "were older than the others",
            "gave up because of brain damage",
            "later became taxi drivers anyway",
          ],
          "Sınavı geçemeyen ya da bırakanlarda ilgili bölgede artış görülmedi.",
        ],
      ],
    },
    {
      text:
        "In 2002, Bennet Omalu, a Nigerian-born forensic pathologist working in Pittsburgh, performed an autopsy on Mike Webster, a former star of American professional football who had died of a heart attack at the age of fifty. In the years before his death, Webster had suffered from memory loss, depression and confusion, and he had at times been homeless. His brain looked normal to the naked eye, but Omalu, paying for the tests himself, had thin sections examined under the microscope with special stains. He found large accumulations of an abnormal protein called tau, a pattern similar to that seen in some elderly people with dementia but unexpected in a man of fifty. Omalu concluded that the damage had been caused by thousands of repeated blows to the head during Webster's career, and he named the condition chronic traumatic encephalopathy. When he published his findings in 2005, the National Football League's doctors demanded that the paper be withdrawn. Further cases, however, were soon found in other former players, and in other sports such as boxing and ice hockey. The league eventually acknowledged the link, and it agreed to pay compensation to former players. Rules in many sports have since been changed to reduce head impacts.",
      questions: [
        [
          "According to the passage, Omalu examined Webster's brain under the microscope because ----.",
          [
            "it looked normal but the man had shown serious symptoms",
            "the league asked him to do so",
            "Webster had died in an accident",
            "the brain was visibly damaged",
            "he was mainly studying the causes of heart disease",
          ],
          "Beyin çıplak gözle normal görünse de Webster ölmeden önce ağır belirtiler göstermişti.",
        ],
        [
          "The league's initial reaction to Omalu's paper was to ----.",
          [
            "reject it and ask for it to be withdrawn",
            "change the rules of the game",
            "pay compensation to players",
            "fund further research",
            "praise his careful and expensive work",
          ],
          "Ligin doktorları makalenin geri çekilmesini talep etti.",
        ],
        [
          "It can be understood from the passage that Omalu's findings ----.",
          [
            "were later supported by further evidence",
            "applied only to American football",
            "were proved to be false",
            "were ignored by other sports",
            "were based on a single blow to the head",
          ],
          "Kısa süre sonra başka oyuncularda ve sporlarda yeni vakalar bulundu.",
        ],
      ],
    },
    {
      text:
        "Huntington's disease is a fatal inherited disorder that gradually destroys parts of the brain, causing uncontrolled movements, changes in personality and dementia. Symptoms usually begin in middle age, often after a person has already had children, and each child of an affected parent has a fifty per cent chance of inheriting it. When the psychologist Nancy Wexler learned in 1968 that her mother had the disease, she realised that she too might be at risk, and she devoted her career to finding its cause. She learned that in villages around Lake Maracaibo in Venezuela, the disease was unusually common, and that many of those affected appeared to be descended from a single woman who had lived there in the early nineteenth century. From 1979 onwards, Wexler led yearly expeditions to the area, collecting blood samples and detailed family histories. Her team eventually built a family tree containing more than 18,000 people. These samples allowed scientists to locate the gene on chromosome 4 in 1983 and to identify it in 1993. The discovery made it possible to test people for the gene before symptoms appear, although many, including Wexler herself, have chosen not to find out.",
      questions: [
        [
          "According to the passage, the disease is especially tragic partly because ----.",
          [
            "symptoms often appear after people have had children",
            "it affects only young children",
            "it can be cured if found early",
            "it spreads through contaminated water",
            "it causes no change in a person's personality or behaviour",
          ],
          "Belirtiler genellikle orta yaşta, kişi çocuk sahibi olduktan sonra başlar.",
        ],
        [
          "The villages around Lake Maracaibo were important for research because ----.",
          [
            "many cases there could be traced to a common ancestor",
            "the climate protected people from the disease",
            "Wexler's mother had been born there",
            "the gene had already been identified there",
            "no one there had the disease",
          ],
          "Etkilenenlerin çoğu tek bir kadının soyundan geliyordu.",
        ],
        [
          "It can be inferred from the passage that genetic testing for the disease ----.",
          [
            "raises personal decisions that some prefer to avoid",
            "is required by law in Venezuela",
            "can prevent the disease from developing",
            "has been available since the 1960s",
            "is used only after symptoms have already appeared",
          ],
          "Wexler dahil pek çok kişi testi yaptırmamayı seçmiştir; bu kişisel bir karardır.",
        ],
      ],
    },
    {
      text:
        "In the early 1990s, a team led by Giacomo Rizzolatti at the University of Parma in Italy was recording the activity of individual nerve cells in the brains of macaque monkeys. They were studying a region involved in planning movements and had found neurons that fired when a monkey reached out to grasp a piece of food. To their surprise, some of the same neurons also fired when the monkey simply watched a researcher pick up food, even though the monkey itself did not move. The team called these cells 'mirror neurons', because they seemed to reflect the actions of others in the observer's brain. The discovery generated enormous excitement. Some scientists suggested that mirror neurons might explain how humans learn by imitation, understand other people's intentions and feel empathy, and even that problems with them might contribute to conditions such as autism. Others urged caution. They pointed out that the evidence in humans comes mainly from brain scans, which cannot record individual cells, and that many of the most dramatic claims had not been tested properly. Mirror neurons are now widely accepted as real, but their exact role in human behaviour remains a matter of debate.",
      questions: [
        [
          "According to the passage, the surprising finding was that some neurons ----.",
          [
            "fired when the monkey watched an action without moving",
            "stopped working when the monkey ate",
            "fired only when the monkey was asleep",
            "were found in the visual cortex",
            "responded to sounds rather than to any movements",
          ],
          "Bazı nöronlar maymun hareket etmeden yalnızca bir eylemi izlerken de ateşlendi.",
        ],
        [
          "The cautious scientists pointed out that ----.",
          [
            "evidence from humans is less direct than from monkeys",
            "mirror neurons do not exist in monkeys",
            "brain scans can record single cells",
            "all claims had been fully tested",
            "autism is caused entirely by faulty mirror neurons",
          ],
          "İnsanlardaki kanıt çoğunlukla tek tek hücreleri kaydedemeyen beyin taramalarından gelmektedir.",
        ],
        [
          "The writer's attitude towards the more dramatic claims about mirror neurons is best described as ----.",
          [
            "cautious",
            "enthusiastic",
            "hostile",
            "indifferent",
            "amused",
          ],
          "Yazar, hücrelerin gerçek olduğunu kabul etmekle birlikte iddiaların tartışmalı olduğunu vurgular; tutumu temkinlidir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The English neurologist John Hughlings Jackson noticed that some epileptic seizures began with twitching in one hand and then spread step by step up the arm to the face. ---- His idea was later confirmed when surgeons stimulated the brain directly with electricity.",
      [
        "He concluded that different parts of the brain control different parts of the body in an orderly map.",
        "Epilepsy was once believed to have supernatural causes.",
        "Many neurologists worked in London in the nineteenth century.",
        "Seizures can be triggered by flashing lights.",
        "The human arm contains many muscles that work together in complex ways.",
      ],
      "Boşluktan sonra 'His idea' denir; boşluğa Jackson'ın beynin farklı bölümlerinin vücudun farklı kısımlarını düzenli bir harita halinde kontrol ettiği sonucuna vardığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1885, the French doctor Georges Gilles de la Tourette described nine patients who made sudden, repeated movements and sounds that they could not control. ---- Today it is known that the condition usually begins in childhood and that symptoms often become milder in adulthood.",
      [
        "The condition was later named after him.",
        "France has a long tradition of medical research.",
        "Many children enjoy making loud noises.",
        "Doctors in Paris often published their work.",
        "Some patients are treated with medicines.",
      ],
      "Boşluktan sonra 'the condition' denir; boşluğa durumun sonradan onun adıyla anıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1939, the baseball player Lou Gehrig was forced to retire after being diagnosed with a disease that destroys the nerve cells controlling the muscles. ---- He died two years later, and in the United States the disease is still often called by his name.",
      [
        "In a farewell speech at the stadium, he described himself as the luckiest man alive.",
        "Baseball has been played professionally in America since the 1870s, and its season lasts for many months.",
        "Many players retire in their thirties.",
        "The stadium could hold tens of thousands of people.",
        "Nerve cells, also called neurons, carry signals throughout the body.",
      ],
      "Boşluktan sonra iki yıl sonra öldüğü anlatılır; boşluğa stadyumdaki veda konuşmasında kendini yaşayan en şanslı insan olarak tanımladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the summer of 2014, millions of people around the world filmed themselves pouring buckets of ice-cold water over their heads. ---- Within weeks, it had raised more than a hundred million dollars for research into the disease.",
      [
        "The aim was to raise awareness of and money for a rare nerve disease.",
        "Summer temperatures were unusually high that year.",
        "Many people share videos on social media.",
        "Ice is made by freezing water.",
        "Some celebrities who took part have millions of followers on social media.",
      ],
      "Boşluktan sonra 'it' ile toplanan para anlatılır; boşluğa amacın nadir bir sinir hastalığı için farkındalık ve para toplamak olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1909, the German neurologist Korbinian Brodmann published a map that divided the outer layer of the brain into 52 regions. ---- Remarkably, many of these areas were later found to have distinct functions, and his numbers are still used by scientists today.",
      [
        "He based it on differences in the arrangement of cells that he observed under the microscope.",
        "Germany had many famous universities at that time.",
        "Maps are also used by explorers and sailors.",
        "The outer layer of the brain is very thin.",
        "Some neurologists of that period also worked as psychiatrists in large asylums.",
      ],
      "Boşluktan sonra bu alanların farklı işlevleri olduğu anlatılır; boşluğa haritayı mikroskopta gözlemlediği hücre düzenine dayandırdığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1969, the American scientist Paul Bach-y-Rita seated blind volunteers in a chair fitted with hundreds of small vibrating pins that pressed against their backs. ---- With practice, the volunteers learned to recognise shapes and even faces through the patterns they felt on their skin.",
      [
        "The pins were connected to a camera, so that the image it recorded was turned into a pattern of touch.",
        "Many blind people read using the Braille system.",
        "Chairs have been used for thousands of years.",
        "Cameras became much smaller in later decades.",
        "Human skin contains several different kinds of receptors that respond to touch, heat and pain.",
      ],
      "Boşluktan sonra gönüllülerin cildinde hissettikleri desenlerden şekilleri tanıdığı anlatılır; boşluğa iğnelerin bir kameraya bağlı olduğunu ve görüntünün dokunma desenine dönüştürüldüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The brain is protected not only by the skull but also by a barrier that controls which substances can pass from the blood.",
        "Early in the twentieth century, scientists noticed that dyes injected into the blood stained most organs but not the brain.",
        "Many dyes were originally developed for the textile industry.",
        "The barrier keeps out many toxins and germs.",
        "However, it also prevents many useful drugs from reaching the brain.",
      ],
      odd: 2,
      why: "Parça kan-beyin bariyerini anlatır. Pek çok boyanın aslen tekstil endüstrisi için geliştirildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "For most of the twentieth century, scientists believed that adults could not produce new brain cells.",
        "In 1998, a team of Swedish and American researchers showed that this was wrong.",
        "Sweden is known for its long, dark winters.",
        "They found new neurons in the hippocampus of adults who had been given a chemical marker as part of their cancer treatment.",
        "The discovery suggested that the adult brain is more adaptable than once thought.",
      ],
      odd: 2,
      why: "Parça yetişkin beyninde yeni nöron oluşumunu anlatır. İsveç'in uzun ve karanlık kışlarıyla bilindiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Studies have found that people who began serious musical training before the age of seven differ in their brain structure.",
        "In particular, part of the corpus callosum, which connects the two halves of the brain, tends to be larger.",
        "This may reflect the need to coordinate the movements of both hands precisely.",
        "Researchers are still debating whether such differences cause or result from musical ability.",
        "Piano lessons can be expensive for many families.",
      ],
      odd: 4,
      why: "Parça müzik eğitiminin beyin yapısına etkisini anlatır. Piyano derslerinin pek çok aile için pahalı olabileceğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A concussion is a brain injury caused by a blow or jolt to the head.",
        "Symptoms may include headache, confusion, dizziness and problems with memory.",
        "Most people recover within a few weeks if they rest.",
        "Rugby was first played at a school in England in the nineteenth century.",
        "A second injury before recovery is complete can be especially dangerous.",
      ],
      odd: 3,
      why: "Parça beyin sarsıntısını anlatır. Ragbinin on dokuzuncu yüzyılda İngiltere'deki bir okulda ilk kez oynandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2006, a young man paralysed from the neck down became one of the first people to control a computer cursor using signals recorded directly from his brain.",
        "A tiny array of electrodes had been implanted in the part of his brain that plans movements.",
        "Computers have become much faster since the 1990s.",
        "By imagining moving his hand, he could open emails and play simple games.",
        "Such brain-computer interfaces may one day help paralysed people to move robotic limbs.",
      ],
      odd: 2,
      why: "Parça beyin-bilgisayar arayüzlerini anlatır. Bilgisayarların 1990'lardan bu yana çok hızlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The human brain weighs only about one and a half kilograms.",
        "Yet, at rest, it consumes roughly twenty per cent of all the energy the body uses.",
        "Most of this energy is used to send signals between nerve cells.",
        "Many people drink coffee to feel more alert.",
        "This high demand helps to explain why the brain is so sensitive to a lack of oxygen.",
      ],
      odd: 3,
      why: "Parça beynin enerji tüketimini anlatır. Pek çok kişinin daha uyanık hissetmek için kahve içtiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
