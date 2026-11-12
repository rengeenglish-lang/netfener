import type { YokdilDeneme } from "./types";

export const SAGLIK_20: YokdilDeneme = {
  no: 20,
  field: "saglik",
  vocab: [
    [
      "Although the patient could understand what was said to him, he was unable to ---- more than a single word.",
      ["pronounce", "forget", "admire", "prevent", "repair"],
      "Hastanın söyleneni anlayabildiği hâlde tek bir sözcükten fazlasını 'telaffuz edemediği' (pronounce) anlatılır.",
    ],
    [
      "Keyhole surgery involves making several small ---- rather than one large cut.",
      ["incisions", "decisions", "donations", "complaints", "repairs"],
      "Laparoskopik cerrahinin tek büyük kesik yerine birkaç küçük 'kesik' (incisions) açmayı içerdiği anlatılır.",
    ],
    [
      "When Penfield ---- certain areas of the brain with a weak electric current, patients reported vivid memories.",
      ["stimulated", "removed", "photographed", "ignored", "measured"],
      "Penfield beynin belirli bölgelerini zayıf bir elektrik akımıyla 'uyardığında' (stimulated) hastaların canlı anılar anlattığı belirtilir.",
    ],
    [
      "Cushing kept extremely ---- records of every operation, including drawings of what he had seen.",
      ["detailed", "careless", "brief", "secret", "rare"],
      "Cushing'in her ameliyatın çizimler de içeren son derece 'ayrıntılı' (detailed) kayıtlarını tuttuğu anlatılır.",
    ],
    [
      "The surgeon in New York was able to ---- the robotic arms operating on a patient in France, more than six thousand kilometres away.",
      ["control", "invent", "repair", "sell", "fear"],
      "New York'taki cerrahın binlerce kilometre uzaktaki robot kolları 'kontrol edebildiği' (control) anlatılır.",
    ],
    [
      "The device measures sugar levels continuously, so patients no longer need to ---- finger-prick tests several times a day.",
      ["carry out", "put off", "give away", "turn down", "look after"],
      "Cihaz sürekli ölçüm yaptığı için hastaların günde birkaç kez parmak testi 'yapmasına' (carry out) gerek kalmadığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The area of the brain responsible for producing speech ---- after the French doctor who described it in 1861.",
      ["was named", "named", "has named", "was naming", "had named"],
      "Bölge adlandırılan bir yerdir ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was named'.",
    ],
    [
      "If Penfield's patients had been unconscious during the operations, he ---- what they experienced.",
      ["could not have discovered", "could not discover", "will not discover", "did not discover", "had not discovered"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'could not have + V3' ister.",
    ],
    [
      "By the time Cushing retired, he ---- more than two thousand operations on brain tumours.",
      ["had performed", "has performed", "performs", "will perform", "was performed"],
      "Emekli olmasından (geçmiş) önce tamamlanmış eylem: Past Perfect 'had performed'.",
    ],
    [
      "The patient, ---- only word was 'tan', became one of the most famous cases in neurology.",
      ["whose", "who", "which", "whom", "where"],
      "Sözcük hastaya aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the patient died ---- examine his brain.",
      ["was Broca able to", "Broca was able to", "able was Broca to", "Broca able was to", "was able Broca to"],
      "'Only after' ile başlayan cümlede ana cümle devrik olur: 'was Broca able to'.",
    ],
    [
      "The cuts are so small ---- patients usually recover much faster than after open surgery.",
      ["that", "which", "as", "such", "than"],
      "'so small that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- organoids are tiny and simple, they can reproduce some features of real organs.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Organoidlerin küçük ve basit olması ile gerçek organların bazı özelliklerini taşıyabilmesi zıttır: 'Although'.",
    ],
    [
      "Patients ---- blood sugar is controlled by the device spend more time within the target range.",
      ["whose", "who", "which", "whom", "where"],
      "Kan şekeri hastalara aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Cushing is said ---- the death rate from brain surgery from around ninety per cent to less than ten per cent.",
      ["to have reduced", "to reduce", "reducing", "to be reducing", "to have been reduced"],
      "Cushing ölüm oranını azaltan taraftır (etken) ve olay geçmişte kalmıştır: 'be said to have + V3'.",
    ],
    [
      "The robot does not make decisions itself ---- simply follows the surgeon's movements.",
      ["but", "and so", "or", "unless", "because"],
      "Robotun karar vermemesi ile yalnızca cerrahın hareketlerini izlemesi karşıtlık bildirir: 'but'.",
    ],
    [
      "Organoids ---- from a patient's own cells can be used to test which drugs will work best.",
      ["grown", "growing", "which grew", "to grow", "have grown"],
      "Organoidler yetiştirilen yapılardır; edilgen anlamlı geçmiş ortaç 'grown' gerekir.",
    ],
    [
      "Penfield kept the patients awake ---- they could tell him what they felt.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The patient described the memory as if he ---- living through it again.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır: 'were'.",
    ],
    [
      "The smaller the incision is, ---- the scar will be.",
      ["the less visible", "less visible", "the least visible", "more invisible", "the more less visible"],
      "'The smaller …, the less visible …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1861, the French surgeon Paul Broca examined a patient at a hospital near Paris who had lost the ability to speak more than twenty years earlier. The man, Louis Leborgne, could understand what was said to him and could communicate with gestures, but the only word he could produce was 'tan', {1} the hospital staff called him by that name. When Leborgne died a few days later, Broca examined his brain and found damage in a specific area of the left frontal lobe. Over the following years, he studied several other patients {2} similar problems and found damage in the same region. {3} this evidence, he concluded that the ability to produce speech depended on this particular area, which is now known as Broca's area. His findings were important {4} they supported the idea that different mental functions are located in different parts of the brain, a view that was controversial at the time. A few years later, the German neurologist Carl Wernicke described patients who could speak fluently but whose speech made little sense, and who had difficulty understanding others. These patients had damage to a different area, {5} showed that language depends on several connected regions.",
      blanks: [
        [
          "(21) ----",
          ["so", "unless", "although", "whereas", "or"],
          "Tek söyleyebildiği sözcüğün 'tan' olması nedeniyle personel ona bu adla seslendi: sonuç bildiren 'so'.",
        ],
        [
          "(22) ----",
          ["with", "to", "by", "from", "for"],
          "'patients with similar problems' = 'benzer sorunları olan hastalar': 'with'.",
        ],
        [
          "(23) ----",
          ["On the basis of", "In spite of", "Instead of", "Apart from", "In addition to"],
          "Bu kanıtlara 'dayanarak' sonuca vardığı anlatılır: 'On the basis of'.",
        ],
        [
          "(24) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Bulguların önemli olmasının nedeni zihinsel işlevlerin beynin farklı bölgelerinde bulunduğu fikrini desteklemesidir: 'because'.",
        ],
        [
          "(25) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk virgülden sonra önceki cümlenin tamamını (hasarın farklı bir bölgede olmasını) niteler: 'which'.",
        ],
      ],
    },
    {
      text:
        "Traditional open surgery requires a large cut through the skin and muscles {1} the surgeon can see and reach the organs. In keyhole surgery, also known as laparoscopy, the surgeon instead makes several small cuts, usually less than a centimetre long. A thin tube containing a camera and a light is inserted through one of them, and the images are displayed on a screen, {2} long, narrow instruments are passed through the others. The abdomen is usually filled with gas to create space to work. Laparoscopy was used to examine the inside of the body in the early twentieth century, {3} it was not widely used for operations until the 1980s, when improved cameras became available. The first removal of a gallbladder by keyhole surgery was performed in 1985, and the technique spread rapidly. {4} open surgery, it causes less pain, leaves smaller scars and allows patients to leave hospital and return to work sooner. However, it requires special training, as surgeons must work with a two-dimensional image and cannot touch the tissues directly. Some operations still need to be performed in the traditional way, and surgeons occasionally have to change to open surgery during an operation {5} complications arise.",
      blanks: [
        [
          "(26) ----",
          ["so that", "in order to", "because of", "instead of", "as a result of"],
          "Ardından tam bir cümle gelir ve amaç bildirilir: 'so that'.",
        ],
        [
          "(27) ----",
          ["while", "because", "unless", "so", "since"],
          "Görüntülerin ekranda gösterilmesi ile aletlerin diğer kesiklerden geçirilmesi eşzamanlıdır: 'while'.",
        ],
        [
          "(28) ----",
          ["but", "because", "so", "unless", "since"],
          "Yirminci yüzyıl başında muayene için kullanılması ile 1980'lere kadar ameliyatlarda yaygın kullanılmaması karşıtlıktır: 'but'.",
        ],
        [
          "(29) ----",
          ["Compared with", "Owing to", "As well as", "Instead of", "According to"],
          "Laparoskopi açık cerrahiyle karşılaştırılır: 'Compared with'.",
        ],
        [
          "(30) ----",
          ["if", "unless", "although", "whereas", "so that"],
          "Komplikasyon ortaya çıkarsa açık cerrahiye geçilir; koşul bildiren 'if' gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the patient had lost the ability to speak, ----.",
      [
        "he could still understand what other people said",
        "he had lived in the hospital for more than twenty years",
        "the only word he could say was 'tan'",
        "his brain was examined after his death",
        "he was a patient at a hospital near Paris",
      ],
      "'Although' zıtlık ister: hasta konuşma yetisini kaybetmiş olsa da başkalarının söylediklerini hâlâ anlayabiliyordu.",
    ],
    [
      "If the closed-loop system were available to every patient, ----.",
      [
        "far fewer people would suffer dangerous falls in blood sugar",
        "the device had measured sugar levels",
        "patients will inject insulin by hand",
        "most patients checked their blood",
        "the pump is worn on the body",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + yalın fiil' ister: çok daha az kişi tehlikeli kan şekeri düşüşleri yaşardı.",
    ],
    [
      "Penfield performed the operations while patients were awake ----.",
      [
        "because the brain itself does not feel pain",
        "so that the patients would fall asleep",
        "although the operations were very painful",
        "unless the patient asked to be put to sleep",
        "even if the patient could not speak",
      ],
      "Penfield'in ameliyatları hastalar uyanıkken yapabilmesinin nedeni beynin kendisinin acı hissetmemesidir: 'because'.",
    ],
    [
      "Since the first gallbladder was removed by keyhole surgery in 1985, ----.",
      [
        "the technique has become standard for many operations",
        "surgeons had made large cuts",
        "most patients would stay in hospital",
        "the camera will be improved",
        "few doctors knew about it",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has become'.",
    ],
    [
      "Unless the connection between the two sites is extremely fast, ----.",
      [
        "remote surgery cannot be performed safely",
        "the robot would have stopped",
        "most surgeons had refused",
        "the patient will travel to New York",
        "the operation was successful",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: uzaktan cerrahi güvenle yapılamaz.",
    ],
    [
      "Cushing's methods were so successful ----.",
      [
        "that he is often called the father of modern brain surgery",
        "because he paid careful attention to blood loss",
        "although many of his patients were seriously ill",
        "unless the tumour had spread",
        "while he worked at hospitals in Baltimore and Boston",
      ],
      "'so successful that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Scientists have found that when stem cells are grown in the right conditions, ----.",
      [
        "they can organise themselves into tiny organ-like structures",
        "the patient would have needed a transplant",
        "most laboratories had stopped using them",
        "the organoids will replace real organs",
        "the cells were very old",
      ],
      "'when' ile genel bir bulgu anlatılır: kök hücreler doğru koşullarda yetiştirildiğinde kendiliğinden küçük organ benzeri yapılar oluşturabilir.",
    ],
    [
      "So precise are the movements of the robotic arms ----.",
      [
        "that they can work in spaces too small for a human hand",
        "because the surgeon sits at a console nearby",
        "although they are controlled by a human",
        "while the patient lies on the table",
        "unless the camera stops working",
      ],
      "Devrik 'So precise are … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While Broca's patients could understand speech but not produce it, ----.",
      [
        "Wernicke's patients spoke fluently but made little sense",
        "the left side of the brain controls the right side of the body",
        "many patients recovered some speech over time",
        "doctors in Paris studied many brain injuries",
        "language is one of the most complex human abilities",
      ],
      "'While' iki hasta grubunu karşılaştırır: Broca'nın hastaları konuşmayı anlayıp üretemezken Wernicke'nin hastaları akıcı ama anlamsız konuşuyordu.",
    ],
    [
      "Once the surgeon had made the small incisions, ----.",
      [
        "the abdomen was filled with gas",
        "the patient will go home",
        "the operation would have been open",
        "the camera is very small",
        "most of the work had finished",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: karın gazla dolduruldu.",
    ],
    [
      "No sooner had Penfield touched the area with the electrode ----.",
      [
        "than the patient began to hear music",
        "when the operation had ended",
        "that the patient will remember",
        "before he had opened the skull",
        "so the patient fell asleep",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Broca's findings supported the idea that different mental functions are located in different parts of the brain.",
      [
        "Broca'nın bulguları, farklı zihinsel işlevlerin beynin farklı bölgelerinde yer aldığı fikrini destekledi.",
        "Broca'nın bulguları, tüm zihinsel işlevlerin beynin aynı bölgesinde yer aldığı fikrini destekledi.",
        "Beynin farklı bölgeleri, Broca'nın bulgularının yanlış olduğunu gösterdi.",
        "Broca, zihinsel işlevlerin beyinle hiçbir ilgisi olmadığını kanıtladı.",
        "Broca'nın bulguları, yalnızca konuşmanın beyinde yer aldığını gösterdi.",
      ],
      "'supported the idea that' '… fikrini destekledi', 'different mental functions are located in different parts of the brain' 'farklı zihinsel işlevlerin beynin farklı bölgelerinde yer aldığı' demektir.",
    ],
    [
      "Keyhole surgery allows patients to leave hospital and return to work sooner.",
      [
        "Laparoskopik cerrahi, hastaların hastaneden daha erken çıkıp işe dönmesini sağlar.",
        "Laparoskopik cerrahi, hastaların hastanede daha uzun kalmasına neden olur.",
        "Hastalar, işe dönebilmek için laparoskopik cerrahiden kaçınır.",
        "Laparoskopik cerrahi geçiren hastaların işe dönmesine izin verilmez.",
        "İşe erken dönen hastalar laparoskopik cerrahiye ihtiyaç duyar.",
      ],
      "'allows patients to leave hospital and return to work sooner' 'hastaların hastaneden daha erken çıkıp işe dönmesini sağlar' demektir.",
    ],
    [
      "Because the brain itself cannot feel pain, patients can remain awake during some operations.",
      [
        "Beynin kendisi acı hissedemediği için hastalar bazı ameliyatlar sırasında uyanık kalabilir.",
        "Hastalar ameliyat sırasında uyanık kaldıkları için beyin acı hissetmez.",
        "Beyin çok fazla acı hissettiği için hastalar ameliyat sırasında uyutulmalıdır.",
        "Uyanık kalan hastalar, beynin acı hissetmesine neden olur.",
        "Beynin acı hissetmesi, ameliyatları imkânsız hâle getirir.",
      ],
      "'Because the brain itself cannot feel pain' 'beynin kendisi acı hissedemediği için', 'patients can remain awake' 'hastalar uyanık kalabilir' demektir.",
    ],
    [
      "Cushing paid close attention to controlling bleeding during operations.",
      [
        "Cushing, ameliyatlar sırasında kanamayı kontrol etmeye büyük özen gösterdi.",
        "Cushing, ameliyatlar sırasında kanamayla hiç ilgilenmedi.",
        "Ameliyatlar sırasında kanama, Cushing'in dikkatini dağıttı.",
        "Cushing, kanamayı önlemek için ameliyat yapmayı bıraktı.",
        "Cushing'in ameliyatlarında kanama hiçbir zaman sorun olmadı.",
      ],
      "'paid close attention to' '… büyük özen gösterdi', 'controlling bleeding during operations' 'ameliyatlar sırasında kanamayı kontrol etmeye' demektir.",
    ],
    [
      "Organoids could reduce the need to test new drugs on animals.",
      [
        "Organoidler, yeni ilaçları hayvanlar üzerinde test etme ihtiyacını azaltabilir.",
        "Organoidler, yeni ilaçların hayvanlar üzerinde daha sık test edilmesini gerektirir.",
        "Hayvanlar, organoidleri test etmek için kullanılır.",
        "Yeni ilaçlar, organoidlerin gelişmesini engeller.",
        "Organoidler, hayvanlarda test edilmiş ilaçların kullanılmasını yasaklar.",
      ],
      "'could reduce the need' 'ihtiyacını azaltabilir', 'to test new drugs on animals' 'yeni ilaçları hayvanlar üzerinde test etme' demektir.",
    ],
    [
      "The system automatically adjusts the amount of insulin according to the patient's sugar levels.",
      [
        "Sistem, insülin miktarını hastanın şeker düzeylerine göre otomatik olarak ayarlar.",
        "Sistem, hastanın şeker düzeylerini insülin kullanmadan düşürür.",
        "Hasta, sistemin şeker düzeylerini ayarlamasına izin vermez.",
        "İnsülin miktarı, sistemden bağımsız olarak hastanın kendisi tarafından ayarlanır.",
        "Sistem, şeker düzeyleri ne olursa olsun her gün aynı miktarda insülin verir.",
      ],
      "'automatically adjusts the amount of insulin' 'insülin miktarını otomatik olarak ayarlar', 'according to the patient's sugar levels' 'hastanın şeker düzeylerine göre' demektir.",
    ],
  ],
  trEn: [
    [
      "Broca alanı, konuşmanın üretilmesinde önemli bir rol oynar.",
      [
        "Broca's area plays an important role in the production of speech.",
        "Broca's area plays no role in the production of speech.",
        "Speech is produced only in the right side of the brain.",
        "Broca's area is responsible for understanding written words only.",
        "The production of speech damages Broca's area.",
      ],
      "'konuşmanın üretilmesinde önemli bir rol oynar' 'plays an important role in the production of speech' karşılığıdır.",
    ],
    [
      "Laparoskopik cerrahi daha küçük yara izleri bırakır.",
      [
        "Keyhole surgery leaves smaller scars.",
        "Keyhole surgery leaves larger scars.",
        "Scars from keyhole surgery never heal.",
        "Keyhole surgery is used to remove scars.",
        "Keyhole surgery leaves no marks at all on the body.",
      ],
      "'daha küçük yara izleri bırakır' 'leaves smaller scars' karşılığıdır.",
    ],
    [
      "Penfield, beynin farklı bölgelerinin vücudun hangi bölümlerini kontrol ettiğini haritalandırdı.",
      [
        "Penfield mapped which parts of the body different areas of the brain control.",
        "Penfield mapped the body to show how it controls the brain.",
        "Different areas of the brain were mapped before Penfield was born.",
        "Penfield proved that the brain does not control the body.",
        "Penfield drew maps of the hospitals where he worked.",
      ],
      "'beynin farklı bölgelerinin vücudun hangi bölümlerini kontrol ettiğini haritalandırdı' 'mapped which parts of the body different areas of the brain control' karşılığıdır.",
    ],
    [
      "Cushing, beyin ameliyatlarının güvenliğini büyük ölçüde artırdı.",
      [
        "Cushing greatly improved the safety of brain operations.",
        "Cushing made brain operations much more dangerous.",
        "Brain operations improved Cushing's own health.",
        "Cushing refused to perform brain operations.",
        "The safety of brain operations did not change in Cushing's time.",
      ],
      "'beyin ameliyatlarının güvenliğini büyük ölçüde artırdı' 'greatly improved the safety of brain operations' karşılığıdır.",
    ],
    [
      "Robotik cerrahide cerrah, hastadan birkaç metre uzaktaki bir konsolda oturur.",
      [
        "In robotic surgery, the surgeon sits at a console a few metres from the patient.",
        "In robotic surgery, the patient sits at a console a few metres from the surgeon.",
        "In robotic surgery, the robot sits beside the surgeon and gives instructions.",
        "In robotic surgery, the surgeon must stand next to the patient at all times.",
        "Robotic surgery is performed without any surgeon present.",
      ],
      "'cerrah … bir konsolda oturur' 'the surgeon sits at a console', 'hastadan birkaç metre uzaktaki' 'a few metres from the patient' karşılığıdır.",
    ],
    [
      "Yapay pankreas, tip 1 diyabetli hastaların yaşamını kolaylaştırabilir.",
      [
        "An artificial pancreas can make life easier for patients with type 1 diabetes.",
        "An artificial pancreas causes type 1 diabetes in some patients.",
        "Patients with type 1 diabetes cannot use an artificial pancreas.",
        "An artificial pancreas makes life more difficult for patients with diabetes.",
        "An artificial pancreas has replaced the need for any treatment.",
      ],
      "'tip 1 diyabetli hastaların yaşamını kolaylaştırabilir' 'can make life easier for patients with type 1 diabetes' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The Canadian neurosurgeon Wilder Penfield, who worked at the Montreal Neurological Institute from the 1930s, developed a new operation for patients with severe epilepsy that could not be controlled with drugs. The aim was to remove the small area of damaged brain tissue where the seizures began, without harming the regions needed for movement, sensation or speech. Because the brain itself has no pain receptors, Penfield could operate while patients were awake under local anaesthetic. Before removing any tissue, he touched the surface of the brain with an electrode carrying a weak current and asked the patient to describe what happened. Depending on where he applied the current, patients felt tingling in a particular finger, moved part of their body involuntarily or, in some cases, reported vivid experiences, such as hearing a familiar song. Penfield placed small numbered tickets on the brain to record each result. From thousands of such observations, he produced maps showing which parts of the brain controlled or received sensations from different parts of the body. These maps, often drawn as a distorted human figure with enormous hands and lips, revealed that the size of each area depends on how sensitive or finely controlled that body part is, rather than on its actual size.",
      questions: [
        [
          "The passage states that Penfield's operation was mainly intended to ----.",
          [
            "remove the tissue that caused seizures while protecting important areas",
            "create maps of the brain for students",
            "test new drugs for epilepsy",
            "study the memories of healthy people",
            "replace damaged tissue with healthy tissue",
          ],
          "Metne göre amaç, hareket, duyu ya da konuşma için gerekli bölgelere zarar vermeden nöbetlerin başladığı hasarlı dokuyu çıkarmaktı.",
        ],
        [
          "Penfield touched the brain with an electrode before removing tissue in order to ----.",
          [
            "find out what each area of the brain did",
            "stop the patient from feeling pain",
            "cause a seizure during the operation",
            "help the patient to fall asleep",
            "kill the damaged cells",
          ],
          "Elektrotla uyarıp hastadan ne olduğunu anlatmasını istemesi, her bölgenin işlevini belirlemek içindi.",
        ],
        [
          "The distorted figure with enormous hands and lips shows that ----.",
          [
            "sensitive parts of the body have larger areas in the brain",
            "larger parts of the body have larger areas in the brain",
            "the brain controls only the hands and lips",
            "Penfield's maps were inaccurate",
            "patients with epilepsy have unusual bodies",
          ],
          "Metinde her alanın büyüklüğünün vücut bölümünün gerçek boyutuna değil ne kadar hassas ya da ince kontrollü olduğuna bağlı olduğu belirtilir.",
        ],
      ],
    },
    {
      text:
        "At the beginning of the twentieth century, operations on the brain were so dangerous that most patients died, usually from bleeding, infection or swelling of the brain. The American surgeon Harvey Cushing, who began operating in Baltimore and later moved to Boston, did more than anyone to change this. He insisted on slow, careful techniques and paid close attention to controlling bleeding, introducing small silver clips to close blood vessels and, later, working with an engineer to use electricity to seal them. He was also one of the first surgeons in the United States to measure patients' blood pressure regularly during operations, and he kept detailed records and drawings of every case. By the end of his career, the death rate among his patients with brain tumours had fallen from around ninety per cent to less than ten per cent. Cushing also studied the pituitary gland at the base of the brain, and a condition caused by excess hormones, Cushing's syndrome, is named after him. In addition to his medical work, he wrote a biography of his friend and teacher William Osler, which won the Pulitzer Prize in 1926.",
      questions: [
        [
          "According to the passage, before Cushing's work, most patients who underwent brain surgery ----.",
          [
            "did not survive",
            "recovered within a few days",
            "were operated on while awake",
            "suffered from pituitary problems",
            "were treated in Boston",
          ],
          "Metne göre yirminci yüzyılın başında beyin ameliyatları o kadar tehlikeliydi ki hastaların çoğu ölüyordu.",
        ],
        [
          "The writer mentions silver clips and electricity in order to show ----.",
          [
            "how Cushing reduced bleeding during operations",
            "what caused infections after surgery",
            "how blood pressure was measured",
            "why Cushing moved to Boston",
            "how tumours were removed",
          ],
          "Gümüş klipsler ve elektrik kullanımı, Cushing'in ameliyatlarda kanamayı nasıl azalttığını göstermek için anılır.",
        ],
        [
          "It can be understood from the passage that Cushing ----.",
          [
            "had achievements outside surgery as well",
            "was the first person to describe the pituitary gland",
            "worked only in Baltimore",
            "opposed the measurement of blood pressure",
            "never kept records of his operations",
          ],
          "Osler'in biyografisini yazıp Pulitzer ödülü kazanması, cerrahi dışında da başarıları olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "In robotic surgery, the surgeon does not stand beside the patient but sits at a console a few metres away, looking at a magnified three-dimensional image of the operating area. The surgeon's hand movements are translated into smaller, more precise movements of instruments attached to robotic arms, and the system can filter out the slight trembling of human hands. The most widely used system was approved in the United States in 2000, and it is now used in many types of operation, particularly on the prostate, the kidneys and the womb. In 2001, a surgeon in New York used a robotic system to remove the gallbladder of a patient in Strasbourg, France, demonstrating that operations could be performed over long distances. However, such remote surgery has remained rare, partly because even a small delay in the transmission of signals can be dangerous, and partly because of legal and practical difficulties. Robotic surgery itself has also been debated. The equipment is extremely expensive, and some studies have found that for certain operations the results are no better than those of conventional keyhole surgery. Supporters argue that its benefits will increase as the technology becomes cheaper and surgeons become more experienced.",
      questions: [
        [
          "According to the passage, one advantage of robotic systems is that they ----.",
          [
            "can eliminate small tremors in the surgeon's hands",
            "make decisions without the surgeon",
            "are cheaper than ordinary equipment",
            "do not require a trained surgeon",
            "can only be used on the gallbladder",
          ],
          "Metne göre sistem insan ellerindeki hafif titremeyi süzebilir.",
        ],
        [
          "The operation performed between New York and Strasbourg showed that ----.",
          [
            "surgery could be carried out at a great distance",
            "robotic systems were too dangerous to use",
            "French surgeons were better trained",
            "the gallbladder could not be removed by robots",
            "remote surgery had become common",
          ],
          "Metinde bu ameliyatın uzun mesafeler üzerinden ameliyat yapılabileceğini gösterdiği belirtilir.",
        ],
        [
          "It can be inferred from the passage that the value of robotic surgery ----.",
          [
            "is still a matter of discussion",
            "has been proved for every type of operation",
            "has been rejected by all hospitals",
            "depends only on the patient's age",
            "is lower than that of open surgery in all cases",
          ],
          "Ekipmanın çok pahalı olması, bazı ameliyatlarda sonuçların daha iyi olmaması ve destekçilerin farklı görüşü, değerinin hâlâ tartışmalı olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "Organoids are tiny, simplified versions of organs, usually no larger than a grain of rice, grown in the laboratory from stem cells. When these cells are placed in a gel that resembles the environment inside the body and given the right chemical signals, they can multiply and organise themselves into three-dimensional structures that reproduce some of the features of real organs, such as the gut, the kidney, the liver or the brain. Scientists began to develop such techniques in the late 2000s, and the field has grown rapidly since then. Organoids are valuable because they allow researchers to study human tissue directly, rather than relying only on animals, whose biology can differ in important ways. For example, brain organoids were used to investigate how the Zika virus damaged the developing brain. Organoids grown from a patient's own cells can also be used to test which drugs are most likely to work for that individual, an approach that is being studied for cystic fibrosis and some cancers. However, organoids lack blood vessels and many of the cell types found in real organs, so they cannot fully reproduce the complexity of the body, and researchers are working to make them more realistic.",
      questions: [
        [
          "According to the passage, organoids are produced by ----.",
          [
            "growing stem cells in conditions that imitate the body",
            "removing small pieces of organs from patients",
            "printing organs with special machines",
            "combining animal and human cells",
            "freezing tissue from donors",
          ],
          "Metne göre organoidler vücudun içindeki ortama benzeyen bir jele yerleştirilen kök hücrelerden yetiştirilir.",
        ],
        [
          "The example of the Zika virus is given in order to show ----.",
          [
            "how organoids can be used to study human diseases",
            "that organoids can cause infections",
            "why animals are better for research",
            "how the brain develops in adults",
            "that the virus has been eliminated",
          ],
          "Zika virüsünün gelişen beyne nasıl zarar verdiğinin beyin organoidleriyle incelenmesi, organoidlerin insan hastalıklarını incelemede nasıl kullanılabileceğini gösterir.",
        ],
        [
          "It can be understood from the passage that a major limitation of organoids is that they ----.",
          [
            "do not contain all the structures of real organs",
            "are too large to study in the laboratory",
            "can only be grown from animal cells",
            "cannot be used to test drugs",
            "were developed only very recently",
          ],
          "Organoidlerde kan damarlarının ve gerçek organlardaki pek çok hücre türünün bulunmaması, gerçek organların tüm yapılarını içermediklerini gösterir.",
        ],
      ],
    },
    {
      text:
        "People with type 1 diabetes do not produce insulin, the hormone that allows the body to use sugar from food, and they must therefore take insulin every day for the rest of their lives. Getting the dose right is difficult: too little insulin causes high blood sugar, which can damage the eyes, kidneys and nerves over time, while too much can cause blood sugar to fall dangerously low, leading to confusion, seizures and, in rare cases, death. For decades, patients had to test their blood by pricking their fingers several times a day and calculate how much insulin to inject. In recent years, a new approach known as a closed-loop system, or artificial pancreas, has become available. It combines a small sensor under the skin, which measures sugar levels every few minutes, with an insulin pump and a computer program that decides how much insulin to deliver. The system adjusts the dose automatically, especially at night, when low blood sugar is most dangerous. Studies have shown that patients using such systems spend more time with sugar levels in the healthy range. However, users still need to tell the system when they eat, and the devices are expensive, so not everyone who could benefit has access to them.",
      questions: [
        [
          "According to the passage, too much insulin can ----.",
          [
            "cause blood sugar to drop to a dangerous level",
            "damage the eyes and kidneys over many years",
            "make the body produce more insulin",
            "increase the amount of sugar in food",
            "cure type 1 diabetes",
          ],
          "Metne göre fazla insülin kan şekerinin tehlikeli biçimde düşmesine neden olabilir.",
        ],
        [
          "The writer mentions the night in order to explain ----.",
          [
            "when automatic adjustment is particularly valuable",
            "why patients prefer to inject insulin themselves",
            "when the sensor needs to be replaced",
            "why the devices are expensive",
            "how the computer program was developed",
          ],
          "Düşük kan şekerinin en tehlikeli olduğu gece döneminde sistemin dozu otomatik ayarlaması, otomatik ayarın özellikle değerli olduğu zamanı açıklar.",
        ],
        [
          "It can be inferred from the passage that closed-loop systems ----.",
          [
            "are helpful but not yet completely automatic",
            "have removed the need for insulin",
            "are available free to all patients",
            "are less accurate than finger-prick tests",
            "can only be used during the day",
          ],
          "Kullanıcıların sisteme ne zaman yemek yediklerini hâlâ bildirmesi gerektiği için sistemler yararlı ama henüz tam otomatik değildir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Aphasia is a disorder that affects a person's ability to use language. ---- Some patients have difficulty finding words, while others cannot understand what is said to them.",
      [
        "It usually results from damage to the brain, often after a stroke.",
        "Children usually say their first words at around one year of age.",
        "Bilingual children often switch between languages easily.",
        "Speech therapists work in hospitals, schools and clinics.",
        "Some languages have more than forty different sounds.",
      ],
      "Boşluktan önce afazinin tanımı, sonra belirtileri verilir; boşluğa nedenini, yani çoğu zaman inme sonrası beyin hasarından kaynaklandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Laser eye surgery is used to correct short-sightedness and other common vision problems. ---- As a result, many patients no longer need glasses or contact lenses.",
      [
        "The laser reshapes the cornea, the clear front surface of the eye.",
        "Glasses have been used to improve vision for more than seven hundred years.",
        "Lasers are also used in many industries to cut metal and other materials.",
        "Some people prefer to wear contact lenses for sport.",
        "Eye tests are recommended every two years for most adults.",
      ],
      "Boşluktan sonra 'As a result' ile hastaların artık gözlüğe ihtiyaç duymadığı söylenir; boşluğa lazerin gözün ön yüzeyi olan korneayı yeniden şekillendirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "A cochlear implant is an electronic device that can help people with severe hearing loss. ---- In this way, it allows many users, including young children, to hear speech.",
      [
        "It bypasses the damaged parts of the ear and stimulates the hearing nerve directly.",
        "Hearing loss becomes more common as people grow older.",
        "The ear also contains organs that help to control balance.",
        "Sign language is used by many deaf communities around the world.",
        "Loud music can damage hearing if people are exposed to it for long periods.",
      ],
      "Boşluktan sonra 'In this way' ile kullanıcıların konuşmayı duyabildiği söylenir; boşluğa cihazın kulağın hasarlı kısımlarını atlayıp işitme sinirini doğrudan uyardığını söyleyen cümle gelmelidir.",
    ],
    [
      "Gene therapy aims to treat diseases by correcting or replacing faulty genes. ---- One of the first successful treatments was for a rare disorder of the immune system in children.",
      [
        "In most cases, a harmless virus is used to carry the healthy gene into the patient's cells.",
        "Genes are made of DNA and are found in almost every cell of the body.",
        "Many diseases run in families and are passed from parents to children.",
        "Research laboratories often receive funding from governments and charities.",
        "The immune system protects the body against infections.",
      ],
      "Boşluktan önce gen tedavisinin amacı, sonra başarılı bir örnek verilir; boşluğa yöntemin nasıl uygulandığını, yani sağlıklı genin zararsız bir virüsle hücrelere taşındığını anlatan cümle gelmelidir.",
    ],
    [
      "An insulin pump is a small device worn on the body that delivers insulin through a thin tube under the skin. ---- This allows patients to avoid several daily injections.",
      [
        "It releases small amounts of the hormone continuously throughout the day.",
        "Insulin injections were introduced in the early 1920s.",
        "Rates of diabetes are rising in most countries.",
        "Many patients with diabetes need to follow a careful diet.",
        "Some pumps can be controlled using a mobile phone.",
      ],
      "Boşluktan sonra 'This' ile hastaların günlük iğnelerden kurtulduğu söylenir; boşluğa pompanın hormonu gün boyunca sürekli küçük miktarlarda verdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Some patients who have had a limb amputated continue to feel sensations in the missing part. ---- Scientists believe that this happens because the brain's map of the body remains active.",
      [
        "They may even feel pain or itching in it.",
        "Artificial limbs have become much more advanced in recent years.",
        "Amputations were common among soldiers in the past.",
        "Many patients receive physiotherapy after surgery.",
        "The brain is divided into two halves, or hemispheres.",
      ],
      "Boşluktan önce kayıp uzuvda duyular hissedildiği, sonra bunun nedeni açıklanır; boşluğa bu uzuvda ağrı ya da kaşıntı bile hissedebildiklerini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Deep brain stimulation is a treatment in which electrodes are placed inside the brain.",
        "A device similar to a pacemaker sends electrical signals through them.",
        "Many modern cars contain dozens of small computers.",
        "The treatment can reduce the tremors of Parkinson's disease.",
        "It is usually offered only when medicines no longer work well.",
      ],
      odd: 2,
      why: "Parça derin beyin stimülasyonunu anlatır. Modern arabaların düzinelerce küçük bilgisayar içerdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Artificial intelligence is increasingly used to analyse medical images.",
        "Some programs can detect signs of cancer in scans as accurately as doctors.",
        "Computers were once so large that they filled entire rooms.",
        "Such tools may help to reduce waiting times for results.",
        "However, doctors must still check the programs' conclusions.",
      ],
      odd: 2,
      why: "Parça tıbbi görüntülerin yapay zekâyla analizini anlatır. Bilgisayarların eskiden odaları dolduracak kadar büyük olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Skin grafts are used to treat severe burns and large wounds.",
        "A thin layer of healthy skin is taken from another part of the patient's body.",
        "It is then placed over the damaged area, where it gradually attaches.",
        "Sunscreen should be applied before going outside on sunny days.",
        "In some cases, skin grown in the laboratory can also be used.",
      ],
      odd: 3,
      why: "Parça deri naklini anlatır. Güneşli günlerde güneş kremi sürülmesi gerektiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hand transplants have been performed successfully since the late 1990s.",
        "Watches and rings are often worn on the hands.",
        "The operation involves connecting bones, blood vessels, nerves and tendons.",
        "Patients must take drugs for life to stop their bodies rejecting the new hand.",
        "With physiotherapy, many regain the ability to grip objects and feel touch.",
      ],
      odd: 1,
      why: "Parça el nakillerini anlatır. Saat ve yüzüklerin ellere takıldığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Wearable heart monitors can record the heart's rhythm for several days.",
        "They help doctors to detect irregular heartbeats that may not appear during a short test.",
        "Some are now small enough to be stuck to the chest like a plaster.",
        "Patients can continue with their normal activities while wearing them.",
        "Many people enjoy listening to music while they exercise.",
      ],
      odd: 4,
      why: "Parça giyilebilir kalp monitörlerini anlatır. Pek çok kişinin egzersiz yaparken müzik dinlemekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Proton therapy is a form of radiation treatment for cancer.",
        "It uses beams of protons rather than X-rays.",
        "The protons release most of their energy at a precise depth.",
        "Physics is a popular subject at many universities.",
        "This means that less healthy tissue around the tumour is damaged.",
      ],
      odd: 3,
      why: "Parça proton tedavisini anlatır. Fiziğin üniversitelerde popüler bir ders olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
