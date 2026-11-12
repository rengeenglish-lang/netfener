import type { YokdilDeneme } from "./types";

export const SAGLIK_13: YokdilDeneme = {
  no: 13,
  field: "saglik",
  vocab: [
    [
      "The scanner takes a series of X-ray images from different angles and then ---- them into a detailed picture of the inside of the body.",
      ["combines", "divides", "hides", "repeats", "deletes"],
      "Tarayıcının farklı açılardan aldığı görüntüleri ayrıntılı bir resimde 'birleştirdiği' (combines) anlatılır.",
    ],
    [
      "Unlike X-rays, ultrasound does not expose the patient to radiation, which makes it a ---- method for examining unborn babies.",
      ["safe", "costly", "risky", "rare", "slow"],
      "Ultrasonun hastayı radyasyona maruz bırakmaması nedeniyle doğmamış bebekleri incelemek için 'güvenli' (safe) bir yöntem olduğu anlatılır.",
    ],
    [
      "Kelsey refused to approve the drug because the company could not provide ---- evidence that it was safe.",
      ["sufficient", "elderly", "careless", "ordinary", "previous"],
      "Şirket ilacın güvenli olduğuna dair 'yeterli' (sufficient) kanıt sunamadığı için Kelsey'nin onay vermediği anlatılır.",
    ],
    [
      "For many years, the factory denied that its waste was ---- for the strange illness affecting the town's residents.",
      ["responsible", "grateful", "eligible", "famous", "suitable"],
      "Fabrikanın atıklarının kasaba sakinlerini etkileyen hastalıktan 'sorumlu' (responsible for) olduğunu yıllarca inkâr ettiği anlatılır.",
    ],
    [
      "The influenza pandemic of 1918 spread so quickly that hospitals in many cities were ---- by the number of patients.",
      ["overwhelmed", "delighted", "ignored", "replaced", "surprised"],
      "Salgının hızla yayılması nedeniyle hastanelerin hasta sayısı karşısında 'bunaldığı/başa çıkamadığı' (overwhelmed) anlatılır.",
    ],
    [
      "Doctors had to ---- a way of examining the inside of the stomach without opening the patient's body.",
      ["come up with", "put up with", "look down on", "run out of", "get away with"],
      "Doktorların hastanın vücudunu açmadan mideyi incelemenin bir yolunu 'bulmak' (come up with) zorunda olduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first scan of a patient's brain ---- in a London hospital in 1971.",
      ["was carried out", "carried out", "has carried out", "was carrying out", "had carried out"],
      "Tarama yapılan bir işlemdir ve olay 1971'de olmuştur: edilgen geçmiş zaman 'was carried out'.",
    ],
    [
      "If Kelsey had approved the drug, thousands more babies in the United States ---- with serious birth defects.",
      ["would have been born", "would be born", "will be born", "were born", "had been born"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have been + V3' ister.",
    ],
    [
      "By the time the cause of the disease was officially recognised in 1968, the factory ---- mercury into the bay for more than thirty years.",
      ["had been releasing", "has been releasing", "releases", "will be releasing", "was released"],
      "Hastalığın nedeninin resmen kabul edilmesinden (geçmiş) önce uzun süredir devam eden eylem: Past Perfect Continuous 'had been releasing'.",
    ],
    [
      "Sushruta, ---- writings describe hundreds of surgical procedures, lived in ancient India.",
      ["whose", "who", "which", "whom", "where"],
      "Yazılar Sushruta'ya aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Never before ---- doctors been able to see inside the living body in such detail.",
      ["had", "did", "were", "have been", "was"],
      "'Never before' ile başlayan cümle devrik olur; 'been able' ile past perfect yardımcısı 'had' gelir.",
    ],
    [
      "The epidemic was so severe ---- some cities closed schools, theatres and churches for several weeks.",
      ["that", "which", "as", "such", "than"],
      "'so severe that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- the scanner was extremely expensive, hospitals around the world were eager to buy one.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Tarayıcının çok pahalı olması ile hastanelerin onu almaya istekli olması zıttır: 'Although'.",
    ],
    [
      "Mothers ---- babies were affected by the drug had taken it to relieve morning sickness.",
      ["whose", "who", "which", "whom", "where"],
      "Bebekler annelere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "The technique of rebuilding the nose is thought ---- from India to Europe many centuries later.",
      ["to have spread", "to spread", "spreading", "to be spreading", "to be spread"],
      "Teknik yayılan bir şeydir (etken, geçişsiz fiil) ve olay geçmişte kalmıştır: 'be thought to have + V3'.",
    ],
    [
      "The patient swallows a small capsule ---- contains a camera, a light and a battery.",
      ["that", "who", "where", "what", "whose"],
      "Boşluk 'a small capsule' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
    ],
    [
      "Fish ---- in the polluted bay contained high levels of mercury.",
      ["caught", "catching", "which caught", "to catch", "have caught"],
      "Balıklar yakalanan canlılardır; edilgen anlamlı geçmiş ortaç 'caught' gerekir.",
    ],
    [
      "Many people wore masks in public ---- the risk of infection would be reduced.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "The company continued to sell the drug in Europe as if there ---- no evidence of harm.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır: 'were'.",
    ],
    [
      "The smaller the capsule is, ---- it is for patients to swallow.",
      ["the easier", "easier", "the easiest", "more easy", "the more easy"],
      "'The smaller …, the easier …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Ordinary X-ray images show the body as a flat picture, {1} bones, organs and soft tissues are layered on top of one another. This makes it difficult to see small changes deep inside the body, particularly in the brain, which is surrounded by the thick bone of the skull. In the late 1960s, the British engineer Godfrey Hounsfield, who worked for a company better known for producing records, began to investigate whether a computer could build up a three-dimensional image from many X-ray measurements taken at different angles. Working largely alone and {2} very limited funding, he built a prototype and tested it on preserved brains and animal tissue. In 1971, the first scan of a living patient revealed a tumour in the woman's brain, {3} surgeons were then able to remove. The technique, known as computed tomography or CT, was quickly adopted by hospitals around the world. {4} it exposes patients to a higher dose of radiation than an ordinary X-ray, its ability to show detailed cross-sections of the body has made it one of the most important diagnostic tools in medicine. In 1979, Hounsfield shared the Nobel Prize in Physiology or Medicine {5} the South African-born physicist Allan Cormack, who had independently developed the mathematics behind the method.",
      blanks: [
        [
          "(21) ----",
          ["in which", "for which", "by whom", "to whom", "of which"],
          "'a flat picture in which bones … are layered' = 'içinde kemiklerin üst üste bindiği düz bir resim': 'in which'.",
        ],
        [
          "(22) ----",
          ["with", "by", "from", "at", "of"],
          "'with very limited funding' = 'çok sınırlı bir bütçeyle': araç/durum bildiren 'with'.",
        ],
        [
          "(23) ----",
          ["which", "who", "where", "whose", "when"],
          "Boşluk 'a tumour' ifadesini niteleyen ve nesne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(24) ----",
          ["Although", "Because", "Unless", "Since", "So that"],
          "Daha yüksek radyasyon dozu ile en önemli tanı araçlarından biri olması zıttır: 'Although'.",
        ],
        [
          "(25) ----",
          ["with", "to", "by", "from", "for"],
          "'share something with someone' = 'bir şeyi biriyle paylaşmak' kalıbı: 'with'.",
        ],
      ],
    },
    {
      text:
        "Ultrasound imaging uses high-frequency sound waves that cannot be heard by humans. A small device placed on the skin sends out the waves, {1} bounce back when they meet tissues of different density. A computer then turns these echoes into a moving image. The technology grew out of methods used to detect submarines and to find faults in metal. In the 1950s, the Scottish doctor Ian Donald began to experiment with a machine used in a shipyard to check for cracks, and in 1958 he and his colleagues published a paper showing that ultrasound could be used {2} examine the abdomen. One of their early cases became famous: a woman who had been told she had an incurable cancer was found {3} to have a large but harmless cyst, which was successfully removed. Ultrasound soon became a routine part of care during pregnancy, allowing doctors to check the baby's growth, position and heartbeat. {4} other imaging methods, it is relatively cheap, portable and free of radiation. However, the quality of the images depends heavily on the skill of the operator, {5} training is an essential part of its use.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'the waves' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(27) ----",
          ["to", "for", "by", "with", "of"],
          "'be used to + yalın fiil' = 'bir şey yapmak için kullanılmak' kalıbı: 'to'.",
        ],
        [
          "(28) ----",
          ["instead", "therefore", "besides", "otherwise", "meanwhile"],
          "Kadına kanser dendiği hâlde 'onun yerine' zararsız bir kist bulunmuştur: 'instead'.",
        ],
        [
          "(29) ----",
          ["Compared with", "Owing to", "As well as", "In spite of", "According to"],
          "Ultrason diğer görüntüleme yöntemleriyle karşılaştırılır: 'Compared with'.",
        ],
        [
          "(30) ----",
          ["so", "although", "unless", "whereas", "or"],
          "Görüntü kalitesi kullanıcının becerisine bağlı olduğu için eğitim şarttır; sonuç bildiren 'so' gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the drug had been tested on animals, ----.",
      [
        "its effects on unborn babies had not been properly studied",
        "it was sold in more than forty countries around the world",
        "it was marketed as a treatment for sleeplessness and anxiety",
        "many doctors prescribed it to pregnant women in Europe",
        "the company was based in West Germany",
      ],
      "'Although' zıtlık ister: ilaç hayvanlarda denenmiş olsa da doğmamış bebeklere etkileri gereğince incelenmemişti.",
    ],
    [
      "If doctors could see inside the stomach without surgery, ----.",
      [
        "many diseases would be diagnosed much earlier",
        "the patient had swallowed a small capsule",
        "most hospitals will buy new equipment",
        "the operation was performed in the morning",
        "the stomach produces acid to digest food",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would be + V3' ister: pek çok hastalık çok daha erken teşhis edilirdi.",
    ],
    [
      "The residents of Minamata continued to eat fish from the bay ----.",
      [
        "because they did not know that it had been poisoned",
        "so that they could avoid the strange illness",
        "although the factory had closed many years before",
        "unless the fishermen refused to sell it",
        "even if there were no fish left in the bay",
      ],
      "Sakinlerin körfezden balık yemeyi sürdürmesinin nedeni, balığın zehirlendiğini bilmemeleridir: 'because'.",
    ],
    [
      "Since the first capsule camera was approved in 2001, ----.",
      [
        "millions of patients have been examined with the device",
        "doctors had used long, flexible tubes",
        "most patients would refuse to swallow it",
        "the camera will be made even smaller",
        "few hospitals could afford it",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have been examined'.",
    ],
    [
      "Unless the operator has been properly trained, ----.",
      [
        "the ultrasound images may be difficult to interpret",
        "the patient would have been exposed to radiation",
        "most machines had been very expensive",
        "the scan will be cancelled",
        "the baby was not visible",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: ultrason görüntülerini yorumlamak zor olabilir.",
    ],
    [
      "The pandemic of 1918 was so deadly ----.",
      [
        "that it killed more people than the war that had just ended",
        "because many soldiers travelled between countries at that time",
        "although most of its victims were young and healthy adults",
        "unless the patients were treated in hospitals",
        "while doctors had no medicines to fight the virus",
      ],
      "'so deadly that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Ancient surgeons found that when skin from the cheek or forehead was moved to the nose, ----.",
      [
        "it could be used to rebuild a damaged nose",
        "the patient would have needed no surgery",
        "most patients had recovered within a day",
        "the surgeon will become famous",
        "the operation was forbidden",
      ],
      "'when' ile genel bir bulgu anlatılır: yanaktan ya da alından alınan deri buruna taşındığında hasarlı bir burnu yeniden yapmak için kullanılabilir.",
    ],
    [
      "So detailed were the first CT images ----.",
      [
        "that doctors could see a tumour inside the patient's brain",
        "because the scanner took many measurements from different angles",
        "although each scan took several hours to complete",
        "while the patient lay still inside the machine",
        "unless the computer made an error",
      ],
      "Devrik 'So detailed were … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While traditional endoscopes are long tubes passed through the mouth, ----.",
      [
        "capsule cameras are simply swallowed like a tablet",
        "the stomach and intestines are part of the digestive system",
        "many patients feel anxious before an examination",
        "doctors usually examine the stomach in the morning",
        "the small intestine is several metres long",
      ],
      "'While' iki yöntemi karşılaştırır: geleneksel endoskoplar ağızdan geçirilen uzun tüplerken kapsül kameralar bir tablet gibi yutulur.",
    ],
    [
      "Once the link between the drug and birth defects had been established, ----.",
      [
        "it was quickly withdrawn from the market",
        "the company will apologise to the families",
        "doctors would have prescribed it more often",
        "pregnant women take it for morning sickness",
        "most babies had been born healthy",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: ilaç hızla piyasadan çekildi.",
    ],
    [
      "No sooner had the scan been completed ----.",
      [
        "than the doctors noticed a shadow in the patient's brain",
        "when the patient had been taken to the hospital",
        "that the surgeons will remove the tumour",
        "before the machine had been switched on",
        "so the patient went home",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The scanner allowed doctors to examine the brain without exposing the patient to the risks of surgery.",
      [
        "Tarayıcı, doktorların hastayı ameliyatın risklerine maruz bırakmadan beyni incelemesini sağladı.",
        "Tarayıcı, doktorların ameliyat sırasında hastanın beynini daha güvenli biçimde incelemesini sağladı.",
        "Doktorlar, tarayıcının risklerini azaltmak için hastaları ameliyat etmeye karar verdi.",
        "Ameliyatın riskleri, doktorların tarayıcıyı kullanmasını tamamen engelledi.",
        "Tarayıcı, yalnızca ameliyattan sonra beyni incelemek için kullanılabiliyordu.",
      ],
      "'allowed doctors to examine the brain' 'doktorların beyni incelemesini sağladı', 'without exposing the patient to the risks of surgery' 'hastayı ameliyatın risklerine maruz bırakmadan' demektir.",
    ],
    [
      "The quality of ultrasound images depends heavily on the skill of the person performing the scan.",
      [
        "Ultrason görüntülerinin kalitesi büyük ölçüde taramayı yapan kişinin becerisine bağlıdır.",
        "Ultrason görüntülerinin kalitesi, taramayı yapan kişinin becerisinden tamamen bağımsızdır.",
        "Taramayı yapan kişinin becerisi, ultrason cihazının fiyatına göre belirlenir.",
        "Yüksek kaliteli ultrason görüntüleri, taramayı yapan kişinin becerisini azaltır.",
        "Ultrason taramaları, beceri gerektirmediği için herkes tarafından yapılabilir.",
      ],
      "'depends heavily on' 'büyük ölçüde … bağlıdır', 'the skill of the person performing the scan' 'taramayı yapan kişinin becerisi' demektir.",
    ],
    [
      "Kelsey's refusal to approve the drug prevented a much larger tragedy in the United States.",
      [
        "Kelsey'nin ilacı onaylamayı reddetmesi, ABD'de çok daha büyük bir trajedinin yaşanmasını önledi.",
        "Kelsey'nin ilacı onaylaması, ABD'de çok daha büyük bir trajedinin yaşanmasına yol açtı.",
        "ABD'de yaşanan büyük trajedi, Kelsey'nin ilacı onaylamasını engelledi.",
        "Kelsey, ABD'deki trajediyi önleyemediği için ilacı onaylamayı reddetti.",
        "Kelsey'nin kararı, ABD'deki ilaç kurallarını hiçbir şekilde etkilemedi.",
      ],
      "'Kelsey's refusal to approve the drug' 'Kelsey'nin ilacı onaylamayı reddetmesi', 'prevented a much larger tragedy' 'çok daha büyük bir trajediyi önledi' demektir.",
    ],
    [
      "Mercury built up in the bodies of fish and was passed on to the people who ate them.",
      [
        "Cıva balıkların vücudunda birikti ve onları yiyen insanlara geçti.",
        "Cıva, balıkları yiyen insanların vücudundan balıklara geçti.",
        "Balıklar, insanların vücudunda biriken cıvayı temizlemek için kullanıldı.",
        "Balıkların vücudunda biriken cıva, insanlara hiçbir zarar vermedi.",
        "İnsanlar, balıklarda cıva biriktiği için onları yemeyi tamamen bıraktı.",
      ],
      "'built up in the bodies of fish' 'balıkların vücudunda birikti', 'was passed on to the people who ate them' 'onları yiyen insanlara geçti' demektir.",
    ],
    [
      "Unusually, the pandemic killed large numbers of healthy young adults.",
      [
        "Alışılmadık bir şekilde, salgın çok sayıda sağlıklı genç yetişkinin ölümüne neden oldu.",
        "Her zaman olduğu gibi, salgın en çok yaşlıları ve çocukları etkiledi.",
        "Sağlıklı genç yetişkinler, salgından neredeyse hiç etkilenmedi.",
        "Salgın, genç yetişkinlerin sağlıklı yaşam alışkanlıklarını değiştirdi.",
        "Salgından ölen yetişkinlerin çoğu zaten ciddi hastalıklara sahipti.",
      ],
      "'Unusually' 'alışılmadık bir şekilde', 'killed large numbers of healthy young adults' 'çok sayıda sağlıklı genç yetişkinin ölümüne neden oldu' demektir.",
    ],
    [
      "As the capsule passes through the intestine, it takes thousands of photographs.",
      [
        "Kapsül bağırsaktan geçerken binlerce fotoğraf çeker.",
        "Kapsül bağırsaktan geçtikten sonra yalnızca birkaç fotoğraf çeker.",
        "Bağırsak, kapsülün fotoğraf çekmesini engelleyecek kadar karanlıktır.",
        "Doktorlar, kapsülün bağırsaktan geçmesi için binlerce fotoğraf çeker.",
        "Kapsül, bağırsağa ulaşmadan önce fotoğraf çekmeyi bırakır.",
      ],
      "'As the capsule passes through the intestine' 'kapsül bağırsaktan geçerken', 'takes thousands of photographs' 'binlerce fotoğraf çeker' demektir.",
    ],
  ],
  trEn: [
    [
      "BT taraması, vücudun ayrıntılı kesit görüntülerini oluşturur.",
      [
        "A CT scan produces detailed cross-sectional images of the body.",
        "A CT scan produces a single flat image of the whole body.",
        "Detailed images of the body cannot be produced without surgery.",
        "A CT scan is used only to examine the bones of the skull.",
        "Cross-sectional images of the body are less detailed than ordinary X-rays.",
      ],
      "'vücudun ayrıntılı kesit görüntülerini oluşturur' 'produces detailed cross-sectional images of the body' karşılığıdır.",
    ],
    [
      "Ultrason, hamilelik boyunca bebeğin gelişimini izlemek için kullanılır.",
      [
        "Ultrasound is used to monitor the baby's development throughout pregnancy.",
        "Ultrasound is used only after the baby has been born.",
        "The baby's development during pregnancy cannot be monitored at all.",
        "Ultrasound is dangerous for babies and is therefore avoided in pregnancy.",
        "The baby's development is monitored only once, at the end of pregnancy.",
      ],
      "'bebeğin gelişimini izlemek için kullanılır' 'is used to monitor the baby's development', 'hamilelik boyunca' 'throughout pregnancy' karşılığıdır.",
    ],
    [
      "Talidomit faciası, ilaçların daha sıkı test edilmesine yol açtı.",
      [
        "The thalidomide disaster led to stricter testing of medicines.",
        "The thalidomide disaster was caused by the strict testing of medicines.",
        "Medicines were tested less strictly after the thalidomide disaster.",
        "The strict testing of medicines prevented the thalidomide disaster.",
        "The thalidomide disaster had no effect on the way medicines are tested.",
      ],
      "'ilaçların daha sıkı test edilmesine yol açtı' 'led to stricter testing of medicines' karşılığıdır.",
    ],
    [
      "Antik cerrahlar, hasarlı burunları onarmak için yanaktan alınan deriyi kullanıyordu.",
      [
        "Ancient surgeons used skin taken from the cheek to repair damaged noses.",
        "Ancient surgeons used skin taken from the nose to repair damaged cheeks.",
        "Damaged noses could not be repaired by surgeons in the ancient world.",
        "Ancient surgeons removed damaged noses instead of repairing them.",
        "Skin taken from the cheek was used only to treat burns in ancient times.",
      ],
      "'yanaktan alınan deriyi' 'skin taken from the cheek', 'hasarlı burunları onarmak için' 'to repair damaged noses' karşılığıdır.",
    ],
    [
      "Minamata hastalığı, bir fabrikanın denize bıraktığı atıklardan kaynaklanıyordu.",
      [
        "Minamata disease was caused by waste that a factory released into the sea.",
        "Minamata disease caused a factory to release its waste into the sea.",
        "The factory released its waste into the sea to treat Minamata disease.",
        "Minamata disease spread from the sea to the factory through the waste.",
        "The waste released into the sea had nothing to do with Minamata disease.",
      ],
      "'bir fabrikanın denize bıraktığı atıklardan kaynaklanıyordu' 'was caused by waste that a factory released into the sea' karşılığıdır.",
    ],
    [
      "1918 salgını, dünya nüfusunun yaklaşık üçte birini etkiledi.",
      [
        "The 1918 pandemic affected about a third of the world's population.",
        "The 1918 pandemic affected only a small number of people in one country.",
        "About a third of the world's population died before the 1918 pandemic.",
        "The world's population tripled after the 1918 pandemic.",
        "The 1918 pandemic was the first disease to affect the whole world.",
      ],
      "'dünya nüfusunun yaklaşık üçte birini etkiledi' 'affected about a third of the world's population' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the late 1950s, a drug called thalidomide was introduced in West Germany as a sedative, and it was soon being sold in dozens of countries. It was considered so safe that it was available in some places without a prescription, and doctors began to recommend it to pregnant women suffering from morning sickness. Within a few years, however, thousands of babies were born with serious defects, most notably shortened or missing arms and legs. In 1961, doctors in Germany and Australia independently linked these defects to the drug, and it was withdrawn from the market. In the United States, the drug had never been approved, thanks largely to Frances Kelsey, a pharmacologist at the Food and Drug Administration. When the manufacturer applied for a licence in 1960, she was unhappy with the evidence it provided and repeatedly asked for more data, despite strong pressure from the company. Her caution meant that very few American babies were affected. The disaster led governments around the world to introduce much stricter rules, requiring companies to prove that new drugs are both safe and effective before they can be sold.",
      questions: [
        [
          "According to the passage, thalidomide was given to pregnant women in order to ----.",
          [
            "relieve the nausea of early pregnancy",
            "prevent defects in their babies",
            "help them to give birth more easily",
            "treat infections during pregnancy",
            "reduce the pain of childbirth",
          ],
          "Metne göre doktorlar ilacı sabah bulantısı çeken hamile kadınlara öneriyordu.",
        ],
        [
          "It can be understood from the passage that Kelsey ----.",
          [
            "resisted the company's attempts to get the drug approved",
            "was the first person to link the drug to birth defects",
            "worked for the company that made the drug",
            "approved the drug after receiving more data",
            "recommended the drug to pregnant women",
          ],
          "Kelsey'nin şirketin güçlü baskısına rağmen tekrar tekrar daha fazla veri istemesi, onay girişimlerine direndiğini gösterir.",
        ],
        [
          "The passage suggests that the main long-term result of the disaster was ----.",
          [
            "the introduction of tougher regulations for new medicines",
            "a complete ban on all sedatives",
            "the closure of the Food and Drug Administration",
            "a decline in the number of pregnancies",
            "the development of a cure for birth defects",
          ],
          "Metnin sonunda faciadan sonra hükümetlerin yeni ilaçlar için çok daha sıkı kurallar getirdiği belirtilir.",
        ],
      ],
    },
    {
      text:
        "Sushruta was a physician who lived in ancient India, probably more than two thousand years ago. A text attributed to him, the Sushruta Samhita, is one of the oldest known works on surgery. It describes more than a hundred surgical instruments and hundreds of procedures, including the removal of cataracts, the treatment of fractures and the delivery of babies by surgery. It also stresses the importance of practice: students were advised to develop their skills by cutting into vegetables and fruits, and by working on dead animals, before operating on patients. One of the most remarkable procedures in the text is the reconstruction of the nose. In ancient India, cutting off the nose was sometimes used as a punishment, and people who had suffered this injury sought help from surgeons. Sushruta describes how a flap of skin could be taken from the cheek, shaped and stitched into place to form a new nose, while two small tubes were inserted to keep the airways open. Similar methods were later used by surgeons in other parts of the world, and in the eighteenth century, reports of the technique from India attracted great interest among European doctors.",
      questions: [
        [
          "According to the passage, the Sushruta Samhita ----.",
          [
            "contains detailed descriptions of many surgical operations",
            "was written in Europe in the eighteenth century",
            "deals only with the treatment of cataracts",
            "is a recent study of ancient medicine",
            "describes medicines rather than surgery",
          ],
          "Metne göre metin yüzden fazla cerrahi aleti ve yüzlerce işlemi anlatır.",
        ],
        [
          "The writer mentions vegetables, fruits and dead animals in order to show ----.",
          [
            "how surgeons were expected to train",
            "what patients were given to eat after surgery",
            "which materials were used to make instruments",
            "how the nose was reconstructed",
            "what caused most injuries in ancient India",
          ],
          "Öğrencilerin hastaları ameliyat etmeden önce sebze, meyve ve ölü hayvanlar üzerinde pratik yapması, cerrahların nasıl eğitildiğini gösterir.",
        ],
        [
          "It can be inferred from the passage that the demand for nose reconstruction in ancient India ----.",
          [
            "was partly a result of a form of punishment",
            "came mainly from European travellers",
            "was caused by a common disease",
            "was very low compared with other operations",
            "began only in the eighteenth century",
          ],
          "Burun kesmenin bir ceza olarak kullanılması ve bu yaralanmayı yaşayanların cerrahlara başvurması, talebin kısmen cezadan kaynaklandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In the 1950s, residents of the fishing town of Minamata in southern Japan began to suffer from a mysterious illness. Patients experienced numbness in their hands and feet, difficulty speaking and walking, and loss of vision and hearing; in severe cases, they suffered convulsions and died. Cats in the town behaved strangely and sometimes fell into the sea, and birds dropped from the sky. Researchers eventually traced the cause to a chemical factory that had been releasing waste containing mercury into Minamata Bay since the 1930s. Bacteria in the water converted the mercury into a form that built up in fish and shellfish, which were the main food of the local population. Babies were also affected, because the mercury passed from mothers to their unborn children. Although the link was suspected by the late 1950s, the company continued to release waste, and the government did not officially recognise the cause until 1968. Thousands of people were eventually certified as victims. The disaster led to new laws on industrial pollution in Japan, and in 2013 an international agreement to reduce mercury pollution was named the Minamata Convention.",
      questions: [
        [
          "According to the passage, the people of Minamata were poisoned mainly through ----.",
          [
            "eating contaminated seafood",
            "breathing polluted air",
            "drinking water from the factory",
            "contact with infected cats",
            "working inside the factory",
          ],
          "Metne göre cıva yerel halkın başlıca besini olan balık ve kabuklu deniz canlılarında birikmişti.",
        ],
        [
          "The writer mentions the behaviour of cats and birds in order to ----.",
          [
            "show that the poisoning affected animals as well as people",
            "explain how the mercury entered the bay",
            "suggest that animals spread the disease",
            "describe the town's traditional way of life",
            "prove that the factory was not responsible",
          ],
          "Kedilerin garip davranması ve kuşların gökten düşmesi, zehirlenmenin insanlar kadar hayvanları da etkilediğini göstermek için anılır.",
        ],
        [
          "It can be inferred from the passage that the delay in officially recognising the cause ----.",
          [
            "allowed the pollution to continue for years",
            "was due to a lack of scientific evidence",
            "had no effect on the number of victims",
            "was demanded by the victims' families",
            "led to the immediate closure of the factory",
          ],
          "Bağlantı 1950'lerin sonunda tahmin edilmesine rağmen şirketin atık bırakmayı sürdürmesi ve nedenin ancak 1968'de kabul edilmesi, gecikmenin kirliliğin yıllarca sürmesine izin verdiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "The influenza pandemic that began in 1918 was one of the deadliest events in human history. It is estimated that around a third of the world's population was infected and that at least fifty million people died, more than were killed in the First World War. The disease spread in several waves, carried around the world by soldiers returning from the war and by ships and trains. Unlike most types of influenza, which are most dangerous to the very young and the very old, this strain killed large numbers of healthy adults between the ages of twenty and forty. Many victims died within days of their first symptoms, often from pneumonia caused by bacteria that infected their weakened lungs. At the time, there were no antibiotics and no vaccines against influenza, and scientists did not even know that the disease was caused by a virus. Cities that introduced measures such as closing schools, banning public gatherings and requiring people to wear masks early in the outbreak generally had lower death rates than those that waited. Studies of the pandemic still shape the plans that governments make for responding to new infectious diseases.",
      questions: [
        [
          "According to the passage, the 1918 pandemic was unusual because ----.",
          [
            "it killed many young adults who had been healthy",
            "it affected only soldiers returning from the war",
            "it was caused by bacteria rather than a virus",
            "it spread in a single wave",
            "it was most dangerous to children",
          ],
          "Metne göre çoğu grip türünün aksine bu suş yirmi ile kırk yaş arasındaki çok sayıda sağlıklı yetişkini öldürdü.",
        ],
        [
          "It can be understood from the passage that many deaths in the pandemic were caused by ----.",
          [
            "infections that followed the influenza",
            "vaccines that had not been tested",
            "injuries suffered during the war",
            "a lack of food in the cities",
            "the side effects of antibiotics",
          ],
          "Metinde birçok kurbanın zayıflamış akciğerlere bulaşan bakterilerin neden olduğu zatürreden öldüğü belirtilir.",
        ],
        [
          "The comparison between cities suggests that ----.",
          [
            "acting quickly to limit contact between people saved lives",
            "masks made no difference to the spread of the disease",
            "closing schools increased the number of deaths",
            "cities were more dangerous than the countryside",
            "the disease could not be controlled in any way",
          ],
          "Önlemleri erken alan kentlerde ölüm oranlarının daha düşük olması, insanlar arası teması hızla sınırlamanın hayat kurtardığını gösterir.",
        ],
      ],
    },
    {
      text:
        "For most of the twentieth century, doctors who wanted to examine the inside of the digestive system used endoscopes, long flexible tubes with a light and a camera that are passed through the mouth or the anus. Although these instruments are extremely useful, they cannot easily reach the middle section of the small intestine, which is several metres long and folded many times. In the 1990s, an Israeli engineer and a team of doctors in Britain developed a solution: a capsule about the size of a large vitamin pill that contains a tiny camera, a light source, a battery and a transmitter. After the patient swallows it, the capsule is carried through the digestive system by the natural movements of the gut, taking two or more photographs every second and sending them to a recorder worn on the patient's belt. The examination takes around eight hours, during which the patient can go about normal activities, and the capsule is later passed naturally. Capsule endoscopy is particularly useful for finding the source of unexplained bleeding. However, unlike a traditional endoscope, the capsule cannot be steered, and it cannot be used to take tissue samples or to treat the problems it finds.",
      questions: [
        [
          "According to the passage, the capsule was developed mainly to ----.",
          [
            "examine a part of the gut that endoscopes struggle to reach",
            "replace all traditional endoscopes",
            "treat bleeding in the stomach",
            "take tissue samples from the intestine",
            "deliver medicines to the intestine",
          ],
          "Metne göre geleneksel endoskoplar ince bağırsağın orta bölümüne kolayca ulaşamaz; kapsül bu soruna çözüm olarak geliştirilmiştir.",
        ],
        [
          "It can be understood from the passage that during the examination the capsule ----.",
          [
            "moves through the body without being controlled",
            "is guided by the doctor using a remote control",
            "stays in the stomach for several days",
            "must be removed by surgery",
            "stops the patient from moving",
          ],
          "Kapsülün bağırsağın doğal hareketleriyle taşınması ve yönlendirilememesi, kontrolsüz biçimde ilerlediğini gösterir.",
        ],
        [
          "The writer's main purpose in the last sentence is to ----.",
          [
            "point out the limitations of the capsule",
            "explain how the capsule was invented",
            "show that the capsule is cheaper than an endoscope",
            "describe how photographs are recorded",
            "argue that endoscopes are no longer needed",
          ],
          "Son cümle kapsülün yönlendirilemediğini, doku örneği alamadığını ve tedavi yapamadığını belirterek sınırlılıklarına dikkat çeker.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Anorexia nervosa is an eating disorder in which people restrict the amount of food they eat, often to a dangerous degree. ---- As a result, they may continue to diet even when they are severely underweight.",
      [
        "Many sufferers have a distorted view of their own body size.",
        "A balanced diet includes fruit, vegetables, protein and whole grains in suitable amounts.",
        "Some people prefer to eat several small meals a day rather than three large ones.",
        "Fashion magazines have changed considerably over the past fifty years.",
        "Cookery programmes have become very popular on television.",
      ],
      "Boşluktan sonra 'As a result' ile çok zayıf olsalar bile diyete devam ettikleri söylenir; boşluğa nedeni, yani kendi beden ölçüleri hakkındaki çarpık algıyı anlatan cümle gelmelidir.",
    ],
    [
      "Leeches are still occasionally used in modern medicine. ---- This helps to restore circulation after operations to reattach fingers or ears.",
      [
        "Their saliva contains substances that stop blood from clotting.",
        "Leeches live in fresh water and are related to earthworms.",
        "In the past, doctors used leeches to treat almost every illness.",
        "Many people find leeches unpleasant and are afraid of them.",
        "Some species of leech can survive for months without feeding.",
      ],
      "Boşluktan sonra 'This' (bu) dolaşımın yeniden sağlanmasına yardım eder; boşluğa sülüklerin tükürüğünün kanın pıhtılaşmasını önleyen maddeler içerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Sickle cell disease is common in parts of Africa where malaria has long been widespread. ---- This advantage has allowed the gene to remain common in these populations over many generations.",
      [
        "People who carry one copy of the gene are partly protected against malaria.",
        "Malaria is spread by mosquitoes that bite mainly at night in warm climates.",
        "Red blood cells normally have a round, flexible shape that lets them pass easily.",
        "Many African countries have young and rapidly growing populations.",
        "The disease was first described in medical journals in the early twentieth century.",
      ],
      "Boşluktan sonra 'This advantage' (bu avantaj) genin yaygın kalmasını sağlar; boşluğa genin tek kopyasını taşıyanların sıtmaya karşı kısmen korunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Before the polio vaccine developed by Albert Sabin, the main vaccine had to be given by injection. ---- This made it much easier to vaccinate large numbers of children in mass campaigns.",
      [
        "Sabin's vaccine, by contrast, could be given as drops in the mouth.",
        "Polio is a viral disease that can cause paralysis in young children.",
        "Injections are given by trained nurses in clinics and hospitals.",
        "Many children are afraid of needles and cry when they see them.",
        "Sabin was born in Poland and later moved to the United States.",
      ],
      "Boşluktan sonra 'This' ile kitlesel aşılamanın kolaylaştığı söylenir; boşluğa Sabin aşısının ağızdan damla olarak verilebildiğini söyleyen karşıtlık cümlesi gelmelidir.",
    ],
    [
      "Most people are born with two kidneys, but a person can lead a healthy life with only one. ---- Donors are usually able to return to normal activities within a few weeks of the operation.",
      [
        "This makes it possible for healthy people to give a kidney to a relative or friend.",
        "The kidneys remove waste products from the blood and help to control blood pressure.",
        "Kidney disease is becoming more common as rates of diabetes rise around the world.",
        "Patients waiting for a transplant often need dialysis several times a week.",
        "Transplant operations are carried out by teams of specialist surgeons and nurses.",
      ],
      "Boşluktan sonra bağışçıların birkaç hafta içinde normal yaşama döndüğü söylenir; boşluğa tek böbrekle yaşanabilmesinin sağlıklı kişilerin bir yakınına böbrek bağışlamasını mümkün kıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Maggots of certain flies are sometimes placed on wounds that will not heal. ---- In this way, they help to clean the wound and allow healthy tissue to grow.",
      [
        "They feed on dead flesh but do not harm living tissue.",
        "Flies lay their eggs in rotting food and animal waste.",
        "Many patients feel uncomfortable at the thought of the treatment.",
        "Wounds that will not heal are common in people with diabetes.",
        "The life cycle of a fly lasts only a few weeks.",
      ],
      "Boşluktan sonra 'In this way' ile yarayı temizledikleri söylenir; boşluğa kurtçukların yalnızca ölü dokuyu yiyip sağlıklı dokuya dokunmadığını anlatan cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Typhoid fever is caused by bacteria spread through contaminated food and water.",
        "Symptoms include a high temperature, headache and stomach pain.",
        "Some people carry the bacteria without becoming ill themselves.",
        "Many restaurants now display their hygiene ratings on the door.",
        "These carriers can unknowingly infect others for years.",
      ],
      odd: 3,
      why: "Parça tifoyu ve taşıyıcılarını anlatır. Restoranların hijyen puanlarını kapıda göstermesinden söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Mercury was once widely used in thermometers.",
        "Glass is a material that has been made for thousands of years.",
        "However, the metal is toxic, and broken thermometers could release harmful vapour.",
        "For this reason, many countries have banned mercury thermometers.",
        "Digital thermometers are now used instead in most homes and hospitals.",
      ],
      odd: 1,
      why: "Parça cıvalı termometreleri anlatır. Camın binlerce yıldır üretildiğini söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dark chocolate contains substances called flavonoids.",
        "Some studies suggest that these may have small benefits for the heart.",
        "However, chocolate is also high in sugar and fat.",
        "Experts therefore advise eating it only in moderation.",
        "Cocoa beans were used as money by the Aztecs.",
      ],
      odd: 4,
      why: "Parça bitter çikolatanın sağlık etkilerini anlatır. Kakao çekirdeklerinin Azteklerde para olarak kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hospital pharmacists play an important role in patient safety.",
        "They check prescriptions to make sure that the correct dose has been chosen.",
        "Many hospitals have car parks that are often full.",
        "They also look for dangerous interactions between different medicines.",
        "In addition, they advise doctors and nurses on the best treatments.",
      ],
      odd: 2,
      why: "Parça hastane eczacılarının rolünü anlatır. Hastanelerin otoparklarının çoğu zaman dolu olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dry eye is a common condition in which the eyes do not produce enough tears.",
        "It can cause a gritty feeling, redness and blurred vision.",
        "Spending long periods looking at screens can make the problem worse.",
        "Many people now use their phones to read the news.",
        "Artificial tears are often used to relieve the symptoms.",
      ],
      odd: 3,
      why: "Parça göz kuruluğunu anlatır. İnsanların haberleri telefonlarından okuduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Heart transplants became possible in the late 1960s.",
        "Early patients often died because their immune systems rejected the new organ.",
        "The heart beats around a hundred thousand times a day.",
        "The introduction of new drugs to suppress the immune system greatly improved survival.",
        "Today, many recipients live for more than ten years after the operation.",
      ],
      odd: 2,
      why: "Parça kalp nakillerinin gelişimini anlatır. Kalbin günde yaklaşık yüz bin kez attığını söyleyen III. cümle konu dışıdır.",
    },
  ],
};
