import type { YokdilDeneme } from "./types";

export const SAGLIK_60: YokdilDeneme = {
  no: 60,
  field: "saglik",
  vocab: [
    [
      "The chemist built a machine from a children's construction set to ---- the soft lenses.",
      ["manufacture", "describe", "imitate", "forget", "decorate"],
      "Kimyacının yumuşak lensleri 'üretmek' (manufacture) için çocuk yapı setinden bir makine kurduğu anlatılır.",
    ],
    [
      "Artificial eyes were made by hand so that each one would ---- the patient's other eye.",
      ["match", "replace", "frighten", "examine", "repair"],
      "Yapay gözlerin her biri hastanın diğer gözüyle 'uyumlu olsun' (match) diye elle yapıldığı anlatılır.",
    ],
    [
      "The labourer had been ---- in both eyes by an accident with lime.",
      ["blinded", "trained", "rewarded", "elected", "invited"],
      "İşçinin kireçle yaşanan bir kaza sonucu iki gözünden 'kör olduğu' (blinded) anlatılır.",
    ],
    [
      "The hospital treats paying patients and uses the income to ---- free care for the poor.",
      ["fund", "refuse", "conceal", "measure", "forbid"],
      "Hastanenin ücretli hastalardan elde ettiği geliri yoksullara ücretsiz bakımı 'finanse etmek' (fund) için kullandığı anlatılır.",
    ],
    [
      "The app allows health workers to test eyesight in ---- villages with no eye doctors.",
      ["remote", "crowded", "wealthy", "ancient", "noisy"],
      "Uygulamanın sağlık çalışanlarının göz doktoru olmayan 'uzak' (remote) köylerde görme testi yapmasına olanak verdiği anlatılır.",
    ],
    [
      "When the company stopped supporting the device, patients worried that their implants would ----.",
      ["break down", "look up", "take after", "give in", "put on"],
      "Şirket cihazı desteklemeyi bırakınca hastaların implantlarının 'arızalanacağından' (break down) endişe ettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the patent was sold abroad, the chemist ---- lenses at home for several years.",
      ["had been making", "makes", "has made", "will make", "is making"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been making'.",
    ],
    [
      "If supplies from Germany had continued, American makers ---- new materials so quickly.",
      ["might not have developed", "will not develop", "do not develop", "had not developed", "are not developing"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have developed'.",
    ],
    [
      "The cornea ---- from the eye of a boy who had been injured.",
      ["was taken", "took", "has taken", "takes", "is taking"],
      "Kornea alınmıştır; edilgen geçmiş zaman: 'was taken'.",
    ],
    [
      "---- the doctor had already retired, he opened a new hospital with eleven beds.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Emekli olmuş olması ile yeni bir hastane açması zıttır: 'Although'.",
    ],
    [
      "The surgeon, ---- foundation still works in many countries, died in 1993.",
      ["whose", "who", "which", "whom", "where"],
      "Cerrahın vakfı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the trials in Kenya ---- the app used more widely.",
      ["was", "did", "had", "has", "were"],
      "'Only after' ile devrik yapı; edilgen yüklem: 'was'.",
    ],
    [
      "Patients saw only patterns of light, ---- was nevertheless helpful in daily life.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more operations the surgeons performed, ---- the cost of each one became.",
      ["the lower", "the lowest", "lower", "lowest", "so low"],
      "'The more ..., the lower ...' paralel yapısı: 'the lower'.",
    ],
    [
      "The doctor insisted that no patient ---- turned away for lack of money.",
      ["be", "is", "was", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
    [
      "The operation is considered ---- the first successful transplant of a human cornea.",
      ["to have been", "being", "to be", "been", "having been"],
      "Geçmişe ait bir durum için mastarın geçmiş biçimi: 'to have been'.",
    ],
    [
      "The surgeon built factories in poor countries ---- artificial lenses would become cheaper.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "Teachers were trained to use the app for ---- children's eyesight at school.",
      ["checking", "check", "to check", "checked", "to checking"],
      "'for' edatından sonra fiilimsi: 'checking'.",
    ],
    [
      "Had the chemist not been dismissed, he ---- the lenses in a laboratory.",
      ["might have developed", "develops", "will develop", "had developed", "is developing"],
      "Devrik üçüncü tip koşul cümlesi: 'might have developed'.",
    ],
    [
      "Neither the camera nor the implant ---- normal vision.",
      ["restores", "restoring", "to restore", "have restore", "restore to"],
      "'Neither ... nor' yapısında fiile yakın özne tekildir; genel geçer bilgi: 'restores'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1950s, the Czech chemist Otto Wichterle developed a new type of plastic, a gel that could absorb water and become soft and flexible. He realised that it might be used to make contact lenses that were far more comfortable than the hard glass and plastic lenses then available, {1} he faced obstacles. In 1958, he was dismissed from his post at a university institute for political reasons, {2} he continued to experiment. At Christmas in 1961, working at home, he built a machine to shape the lenses from a children's construction set, using a bicycle dynamo and a small motor from a record player. The machine spun the liquid material in small moulds, {3} the forces produced by the spinning gave the lenses their curved shape as the material set. Within a few hours, he had produced several lenses, {4} his wife helped him by operating the machine. The invention attracted international interest. However, the Czechoslovak state, {5} owned the rights to the patent, sold the licence to a foreign company for a relatively small sum, and Wichterle received little of the profit from what became a worldwide industry.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "or", "for"],
          "Fikrin umut verici olması ile engellerle karşılaşması zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["but", "and", "so", "or", "for"],
          "Görevden alınması ile deneylerine devam etmesi zıttır: 'but'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Makinenin malzemeyi döndürmesi ve kuvvetlerin lense şekil vermesi birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Birkaç lens üretmesi ve eşinin yardım etmesi birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgüller arasında devleti niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "For centuries, people who lost an eye could replace it only with crude objects made of metal, ivory or painted shells. In the nineteenth century, glassblowers in the small German town of Lauscha, which was famous for its glass Christmas decorations, began to produce artificial eyes of remarkable realism. They developed a special kind of glass that resembled the white of the eye, {1} skilled craftsmen painted the iris and blood vessels by hand, so that each eye could be made to match the patient's remaining eye. Some craftsmen travelled to other countries, {2} they made eyes for patients in person. German glass eyes became the best in the world, {3} supplies to the United States were cut off during the Second World War. In response, American dental technicians and others began making artificial eyes from acrylic plastic, {4} was lighter, more durable and less likely to break than glass. Acrylic eyes soon became the standard in most countries, {5} a small number of craftsmen, some of them descendants of the original glassblowers, still make glass eyes today for patients who prefer them.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "until"],
          "Özel camın geliştirilmesi ve ustaların elle boyaması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["where", "which", "when", "whose", "who"],
          "Diğer ülkeleri (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(28) ----",
          ["but", "and", "so", "or", "for"],
          "Alman gözlerinin en iyisi olması ile savaşta ABD'ye arzın kesilmesi zıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra akrilik plastiği niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(30) ----",
          ["although", "because", "unless", "so that", "until"],
          "Akriliğin standart olması ile bazı ustaların hâlâ cam göz yapması zıttır: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the chemist had been dismissed from his post, ----.",
      [
        "he continued his experiments at home",
        "Czechoslovakia is in Europe",
        "plastic is light",
        "bicycles have dynamos",
        "the state that owned the rights to his invention later sold the licence to a foreign company",
      ],
      "'Although' zıtlık ister: kimyacı görevinden alınmış olsa da deneylerine evde devam etti.",
    ],
    [
      "If glass eyes had not been made by hand, ----.",
      [
        "they could not have been matched so closely to each patient",
        "glass is fragile",
        "Lauscha is a town",
        "Christmas decorations are colourful",
        "American technicians would have started making eyes from acrylic plastic several decades earlier",
      ],
      "Üçüncü tip koşul: cam gözler elle yapılmasaydı her hastaya bu kadar uyumlu hâle getirilemezdi.",
    ],
    [
      "----, the surgeon decided to try a transplant using a cornea from another person.",
      [
        "Because the labourer's own corneas had been badly damaged",
        "Although lime is white",
        "Unless the boy agreed",
        "Since surgeons are skilled",
        "While eye banks were being set up in New York several decades after the operation",
      ],
      "İşçinin kendi korneaları ağır hasar gördüğü için cerrah başka birinden alınan bir korneayla nakil denemeye karar verdi.",
    ],
    [
      "The hospital organised its operating theatres like a production line ----.",
      [
        "so that surgeons could perform many more operations each day",
        "although India is large",
        "unless patients complained",
        "because restaurants are efficient",
        "while its factory was producing cheap artificial lenses for use in many other countries",
      ],
      "Hastane ameliyathanelerini cerrahların günde çok daha fazla ameliyat yapabilmesi için bir üretim hattı gibi düzenledi.",
    ],
    [
      "Since imported artificial lenses were very expensive, ----.",
      [
        "the surgeon helped to set up factories that produced them cheaply",
        "lenses are small",
        "Nepal has mountains",
        "eyes are delicate",
        "the surgeon had worked with communities in remote parts of Australia during the 1970s",
      ],
      "'Since' neden bildirir: ithal yapay lensler çok pahalı olduğu için cerrah onları ucuza üreten fabrikaların kurulmasına yardım etti.",
    ],
    [
      "Not only can the app test eyesight, ----.",
      [
        "but it can also be used with an adapter to photograph the back of the eye",
        "and phones are popular",
        "since Kenya is in Africa",
        "so teachers are busy",
        "unless the researchers had already compared it with standard eye charts in clinical trials",
      ],
      "'Not only ... but also' yapısı tamamlanır: uygulama görme testi yapmakla kalmaz, bir adaptörle gözün arka kısmını da fotoğraflayabilir.",
    ],
    [
      "Once the company stopped making the device, ----.",
      [
        "patients with implants found it hard to obtain repairs",
        "cameras are small",
        "glasses are useful",
        "light has colours",
        "the implant had been approved for use in Europe and the United States several years earlier",
      ],
      "Şirket cihazı üretmeyi bırakınca implantı olan hastalar onarım yaptırmakta zorlandı.",
    ],
    [
      "Unless a donated cornea is used quickly or stored properly, ----.",
      [
        "it cannot be transplanted successfully",
        "eyes are important",
        "donors are generous",
        "surgeons work in hospitals",
        "the labourer would have been unable to return to his work after the operation",
      ],
      "'Unless' olumsuz koşul: bağışlanan kornea hızla kullanılmaz ya da uygun saklanmazsa başarılı biçimde nakledilemez.",
    ],
    [
      "The lenses were so comfortable ----.",
      [
        "that they could be worn for many hours",
        "although plastic is cheap",
        "because Christmas is in winter",
        "unless the motor stopped",
        "while the chemist's wife was helping him to operate the machine he had built at home",
      ],
      "Lensler o kadar rahattı ki saatlerce takılabiliyordu.",
    ],
    [
      "Even though about half of its patients pay little or nothing, ----.",
      [
        "the hospital covers its costs",
        "India has many hospitals",
        "eyes can be treated",
        "doctors are trained",
        "the doctor had been inspired by the efficient methods used by a fast-food restaurant chain",
      ],
      "'Even though' zıtlık ister: hastalarının yaklaşık yarısı çok az ödese ya da hiç ödemese de hastane masraflarını karşılar.",
    ],
    [
      "As many people in poor countries live far from eye doctors, ----.",
      [
        "simple tools that health workers can use are especially valuable",
        "phones need batteries",
        "villages are small",
        "eye doctors are busy",
        "the researcher who developed the app had grown up in Britain before working in Kenya",
      ],
      "Yoksul ülkelerde pek çok insan göz doktorlarından uzakta yaşadığı için sağlık çalışanlarının kullanabileceği basit araçlar özellikle değerlidir.",
    ],
  ],
  enTr: [
    [
      "The material absorbed water and became soft and flexible.",
      [
        "Malzeme suyu emdi ve yumuşak ve esnek hâle geldi.",
        "Malzeme suyu itti ve sertleşti.",
        "Suyu emen malzemeler, kimyacının beklediğinin aksine kısa sürede kırılgan hâle geldi.",
        "Su malzemeyi emdi.",
        "Malzeme hiç değişmedi.",
      ],
      "'The material absorbed water' 'malzeme suyu emdi', 'and became soft and flexible' 've yumuşak ve esnek hâle geldi' karşılığıdır.",
    ],
    [
      "Each eye was painted by hand to match the patient's other eye.",
      [
        "Her göz, hastanın diğer gözüyle uyumlu olması için elle boyandı.",
        "Bütün gözler aynı renge boyandı.",
        "Hastanın diğer gözüyle uyumlu olmayan gözler, ustalar tarafından yeniden boyanmak üzere geri gönderildi.",
        "Hasta gözleri kendisi boyadı.",
        "Gözler hiç boyanmadı.",
      ],
      "'Each eye was painted by hand' 'her göz elle boyandı', 'to match the patient's other eye' 'hastanın diğer gözüyle uyumlu olması için' karşılığıdır.",
    ],
    [
      "The patient was able to see clearly with the transplanted cornea.",
      [
        "Hasta, nakledilen korneayla net görebildi.",
        "Hasta, nakilden sonra tamamen kör kaldı.",
        "Nakledilen korneayla net göremeyen hasta, ikinci bir ameliyat için hastaneye geri döndü.",
        "Kornea hastayı gördü.",
        "Hastaya hiç nakil yapılmadı.",
      ],
      "'The patient was able to see clearly' 'hasta net görebildi', 'with the transplanted cornea' 'nakledilen korneayla' karşılığıdır.",
    ],
    [
      "Surgeons at the hospital perform far more operations than the average.",
      [
        "Hastanedeki cerrahlar ortalamadan çok daha fazla ameliyat yapar.",
        "Hastanedeki cerrahlar ortalamadan daha az ameliyat yapar.",
        "Ortalamadan fazla ameliyat yapan cerrahların başarı oranları, diğer hastanelerdekilerden çok daha düşüktür.",
        "Ameliyatlar cerrahları yapar.",
        "Hastanede cerrah yoktur.",
      ],
      "'Surgeons at the hospital perform' 'hastanedeki cerrahlar yapar', 'far more operations than the average' 'ortalamadan çok daha fazla ameliyat' karşılığıdır.",
    ],
    [
      "The factories reduced the cost of a lens to a few dollars.",
      [
        "Fabrikalar bir lensin maliyetini birkaç dolara düşürdü.",
        "Fabrikalar bir lensin maliyetini birkaç kat artırdı.",
        "Bir lensin maliyetini birkaç dolara düşürmek isteyen fabrikalar, yüksek üretim giderleri nedeniyle kapandı.",
        "Lensler fabrikaları satın aldı.",
        "Fabrikalar lens üretmedi.",
      ],
      "'The factories reduced the cost of a lens' 'fabrikalar bir lensin maliyetini düşürdü', 'to a few dollars' 'birkaç dolara' karşılığıdır.",
    ],
    [
      "A camera mounted on glasses sends images to the implant.",
      [
        "Gözlüğe takılı bir kamera implanta görüntü gönderir.",
        "İmplant gözlüğe görüntü gönderir.",
        "Gözlüğe takılı kameralar, implantlardan çok daha net görüntü sağladığı için implant gerekmez.",
        "Gözlükler kamerayı görür.",
        "İmplant kamerasızdır.",
      ],
      "'A camera mounted on glasses' 'gözlüğe takılı bir kamera', 'sends images to the implant' 'implanta görüntü gönderir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kimyacı, makineyi bir bisiklet dinamosu ve küçük bir motor kullanarak yaptı.",
      [
        "The chemist built the machine using a bicycle dynamo and a small motor.",
        "The chemist built a bicycle using a small motor.",
        "The chemist planned to use a bicycle dynamo, but he finally bought a machine from a factory.",
        "The motor built the chemist's machine.",
        "The machine was built by the chemist's children.",
      ],
      "'Kimyacı makineyi yaptı' 'the chemist built the machine', 'bir bisiklet dinamosu ve küçük bir motor kullanarak' 'using a bicycle dynamo and a small motor' karşılığıdır.",
    ],
    [
      "Akrilik gözler camdan daha hafif ve daha dayanıklıydı.",
      [
        "Acrylic eyes were lighter and more durable than glass.",
        "Acrylic eyes were heavier and more fragile than glass.",
        "Acrylic eyes were expected to be lighter, but they proved heavier than glass eyes.",
        "Glass was made from acrylic.",
        "Acrylic eyes were never used.",
      ],
      "'Akrilik gözler' 'acrylic eyes', 'camdan daha hafif ve daha dayanıklıydı' 'were lighter and more durable than glass' karşılığıdır.",
    ],
    [
      "İlk göz bankası 1944'te New York'ta kuruldu.",
      [
        "The first eye bank was established in New York in 1944.",
        "The last eye bank in New York closed in 1944.",
        "An eye bank was planned for New York in 1944, but it was never opened.",
        "New York was founded in 1944.",
        "Eyes were sold in banks.",
      ],
      "'İlk göz bankası kuruldu' 'the first eye bank was established', '1944'te New York'ta' 'in New York in 1944' karşılığıdır.",
    ],
    [
      "Doktor, kendi kurduğu hastanede hiçbir hastanın geri çevrilmemesini istedi.",
      [
        "The doctor wanted no patient to be turned away at the hospital he had founded.",
        "The doctor turned away patients who could not pay.",
        "The doctor founded a hospital, but he refused to treat patients who came from other cities.",
        "The patients founded the hospital.",
        "The hospital was closed to the public.",
      ],
      "'Doktor istedi' 'the doctor wanted', 'kendi kurduğu hastanede hiçbir hastanın geri çevrilmemesini' 'no patient to be turned away at the hospital he had founded' karşılığıdır.",
    ],
    [
      "Uygulama, okullarda yüz binlerce çocuğu test etmek için kullanıldı.",
      [
        "The app was used to test hundreds of thousands of children in schools.",
        "The app was used only by adults in hospitals.",
        "The app was designed for schools, but teachers refused to use it.",
        "Children designed the app at school.",
        "The app tested teachers.",
      ],
      "'Uygulama kullanıldı' 'the app was used', 'okullarda yüz binlerce çocuğu test etmek için' 'to test hundreds of thousands of children in schools' karşılığıdır.",
    ],
    [
      "Hastalar yalnızca ışık parlamaları ve basit şekiller görebiliyordu.",
      [
        "Patients could see only flashes of light and simple shapes.",
        "Patients could see perfectly.",
        "Patients were expected to see flashes of light, but they reported seeing nothing at all.",
        "Light flashed in the patients' faces.",
        "Patients could see colours clearly.",
      ],
      "'Hastalar görebiliyordu' 'patients could see', 'yalnızca ışık parlamaları ve basit şekiller' 'only flashes of light and simple shapes' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In December 1905, the Austrian ophthalmologist Eduard Zirm, working in a town in Moravia, performed an operation on Alois Glogar, a farm labourer who had been blinded in both eyes when lime splashed into them while he was working. The front surface of his eyes, the transparent cornea, had become cloudy and scarred. At about the same time, an eleven-year-old boy was brought to the hospital with a severe injury to one eye, which had to be removed. Zirm took the undamaged cornea from the boy's eye and transplanted it into one of Glogar's eyes. Earlier attempts to transplant corneas, mostly using tissue from animals, had failed, because the transplanted tissue became cloudy. Zirm's operation was successful: the transplanted cornea remained clear, and Glogar was able to see well enough to return to work. It is regarded as the first successful transplant of a human cornea, and, indeed, one of the first successful transplants of any human tissue. Zirm's success depended partly on careful technique and on the fact that the cornea has no blood vessels, which reduces the risk of rejection by the immune system. In the following decades, techniques improved, and in 1944 the first eye bank was established in New York to collect and store donated corneas. Today, corneal transplants are among the most common transplant operations in the world.",
      questions: [
        [
          "According to the passage, Glogar's blindness was caused by ----.",
          [
            "an accident at work",
            "an inherited disease",
            "an infection",
            "an injury that he suffered when he was eleven years old",
            "old age",
          ],
          "Metne göre çalışırken gözlerine kireç sıçradı.",
        ],
        [
          "Earlier transplants had failed mainly because ----.",
          [
            "the transplanted tissue lost its transparency",
            "surgeons lacked instruments",
            "patients refused the operation",
            "the boy's eye was too small to provide a cornea of the right size",
            "they used human tissue",
          ],
          "Çoğunlukla hayvan dokusu kullanılmıştı ve nakledilen doku bulanıklaşıyordu.",
        ],
        [
          "It can be understood from the passage that the absence of blood vessels in the cornea ----.",
          [
            "makes rejection less likely",
            "makes transplants impossible",
            "causes cloudiness",
            "explains why eye banks were first established in New York",
            "has no effect",
          ],
          "Bağışıklık sisteminin reddetme riskini azaltır.",
        ],
      ],
    },
    {
      text:
        "In 1976, Govindappa Venkataswamy, an Indian eye surgeon who had just retired from government service at the age of fifty-eight, opened a small eye hospital with eleven beds in the city of Madurai. His aim was to eliminate needless blindness, especially from cataracts, a clouding of the lens of the eye that can be cured by a relatively simple operation but blinds millions of people who cannot afford treatment. Inspired by the efficiency of a famous American fast-food chain, he organised the hospital so that its surgeons could perform far more operations than usual. Patients are prepared and examined by trained assistants, so that surgeons spend their time operating, often moving between two operating tables. The hospital also developed a distinctive financial model: patients who can afford to pay are charged normal fees, while roughly half of its patients pay little or nothing, and the income from the paying patients covers the cost of the free care. To reduce costs further, the organisation established its own factory, which produces artificial lenses for cataract surgery at a fraction of the price of imported ones and exports them to many countries. The Aravind system has grown into one of the largest eye care providers in the world, and studies have found that the quality of its surgery is comparable to that of hospitals in wealthy countries.",
      questions: [
        [
          "According to the passage, Venkataswamy opened the hospital in order to ----.",
          [
            "reduce blindness that could be prevented",
            "make a profit",
            "train fast-food workers",
            "export artificial lenses to many countries around the world",
            "continue his government career",
          ],
          "Metne göre özellikle kataraktan kaynaklanan gereksiz körlüğü ortadan kaldırmak istiyordu.",
        ],
        [
          "Surgeons at the hospital can perform many operations partly because ----.",
          [
            "assistants carry out much of the other work",
            "operations are shorter",
            "patients pay more",
            "the hospital has only eleven beds and therefore few patients at any time",
            "they work at night",
          ],
          "Hastalar eğitimli yardımcılarca hazırlanıp muayene edilir; cerrahlar zamanını ameliyata ayırır.",
        ],
        [
          "It can be understood from the passage that the hospital's free care ----.",
          [
            "is paid for by its paying patients",
            "is funded by the government",
            "is of lower quality",
            "is available only to people who live in Madurai",
            "has been discontinued",
          ],
          "Ücretli hastalardan gelen gelir ücretsiz bakımın masrafını karşılar.",
        ],
      ],
    },
    {
      text:
        "Fred Hollows, an eye surgeon born in New Zealand who spent most of his career in Australia, was known for his outspoken manner and his belief that good eye care was a basic right. In the 1970s, he helped to lead a national programme that sent teams to more than four hundred remote communities, many of them Aboriginal, to examine people's eyes. The teams found very high rates of preventable blindness and eye disease, and the programme drew public attention to the poor health conditions in which many Aboriginal people lived. Later, Hollows turned his attention to developing countries, particularly Nepal and Eritrea, where cataracts were a major cause of blindness. Modern cataract surgery involves replacing the cloudy natural lens with an artificial one, but imported artificial lenses were too expensive for many poor countries. Hollows campaigned to establish factories that could produce high-quality lenses locally at a very low cost, and he trained local doctors to perform the operation. He was diagnosed with cancer and died in 1993, before the factories opened, but they began production the following year and reduced the price of a lens to a few dollars. The foundation established in his name continues his work and has helped to restore the sight of millions of people in many countries.",
      questions: [
        [
          "According to the passage, the national programme of the 1970s ----.",
          [
            "revealed widespread eye disease in remote communities",
            "built factories",
            "worked mainly in cities",
            "was organised by the government of Nepal",
            "found few problems",
          ],
          "Metne göre uzak topluluklarda yüksek oranda önlenebilir körlük ve göz hastalığı buldu.",
        ],
        [
          "Hollows campaigned for local factories because ----.",
          [
            "imported lenses were too expensive",
            "local lenses were of poor quality",
            "doctors refused to operate",
            "Eritrea had asked him to build them before the Australian programme began",
            "lenses were not needed",
          ],
          "İthal yapay lensler pek çok yoksul ülke için çok pahalıydı.",
        ],
        [
          "It can be understood from the passage that the factories ----.",
          [
            "began working after Hollows's death",
            "were opened by Hollows himself",
            "failed",
            "were built in Australia to supply lenses to Aboriginal communities",
            "made glasses",
          ],
          "Hollows 1993'te öldü; fabrikalar ertesi yıl üretime başladı.",
        ],
      ],
    },
    {
      text:
        "Millions of people in poor countries are blind or visually impaired from conditions that could be treated, but many live far from any eye doctor. In the early 2010s, Andrew Bastawrous, a British eye doctor working in Kenya, found that carrying heavy, expensive equipment to remote villages was a major obstacle to his research. He and his colleagues therefore developed a smartphone application, later known as Peek, which uses the phone's screen to display a version of a standard eye chart. The person being tested indicates the direction in which a symbol is pointing, and the phone records the results. With a simple clip-on adapter, the phone's camera can also take photographs of the retina at the back of the eye, which can be sent to specialists for diagnosis. In trials in Kenya, the results obtained by health workers using the app closely matched those obtained with conventional charts and equipment. The system has since been used in programmes in which teachers test the eyesight of schoolchildren, and children identified as having problems are referred for treatment, for example to receive glasses. Researchers found, however, that many children who were referred did not attend appointments, and they adjusted the programme, for instance by sending text messages to parents, to increase the number who received care.",
      questions: [
        [
          "According to the passage, Bastawrous developed the app partly because ----.",
          [
            "transporting traditional equipment to villages was difficult",
            "smartphones were cheap",
            "teachers asked for it",
            "children in Kenya refused to be examined by eye doctors",
            "eye charts were inaccurate",
          ],
          "Metne göre ağır, pahalı ekipmanı uzak köylere taşımak büyük bir engeldi.",
        ],
        [
          "The trials in Kenya showed that ----.",
          [
            "the app's results were similar to those of standard tests",
            "the app was less accurate",
            "health workers could not use phones",
            "photographs of the retina could not be taken with a phone",
            "the app was too expensive",
          ],
          "Uygulamayla elde edilen sonuçlar geleneksel çizelge ve ekipmanla elde edilenlere çok yakındı.",
        ],
        [
          "It can be understood from the passage that sending text messages to parents was intended to ----.",
          [
            "increase the number of children who received treatment",
            "test children's eyesight",
            "teach parents to use the app",
            "inform teachers about the results of the tests",
            "reduce costs",
          ],
          "Sevk edilen çocukların randevulara gitmesini artırmak amaçlanıyordu.",
        ],
      ],
    },
    {
      text:
        "Retinitis pigmentosa is an inherited disease in which the light-sensitive cells of the retina gradually die, eventually causing blindness, although the nerve cells that carry signals to the brain may remain partly intact. In the 2000s, an American company developed a 'bionic eye' system for people who had lost their sight to the disease. A small video camera mounted on a pair of glasses captured images, which were processed by a small computer worn on the body and transmitted wirelessly to an array of sixty electrodes implanted on the surface of the retina. The electrodes stimulated the remaining nerve cells, which sent signals to the brain. Users did not regain normal vision; instead, they perceived patterns of flashes of light and, with training, could detect the edges of doorways, follow lines on the floor or recognise large letters. For people who had been completely blind, this could make a significant difference to daily life. The system was approved in Europe in 2011 and in the United States in 2013, and several hundred people received it. In 2020, however, the company ran into financial difficulties and stopped producing and supporting the device. Patients were left with implants for which repairs and software updates were no longer available, raising serious questions about the responsibilities of companies that make implanted medical devices.",
      questions: [
        [
          "According to the passage, the system worked by ----.",
          [
            "stimulating surviving nerve cells in the retina",
            "replacing the whole eye",
            "repairing the light-sensitive cells",
            "sending signals directly from the camera to the muscles that move the eyes",
            "using lasers",
          ],
          "Metne göre retinadaki kalan sinir hücrelerini uyarıyordu.",
        ],
        [
          "The writer suggests that, for users, the system ----.",
          [
            "provided limited but useful vision",
            "restored normal sight",
            "had no benefit",
            "allowed them to read small print and recognise faces easily",
            "caused blindness",
          ],
          "Normal görme sağlamadı ama eğitimle kapı kenarlarını ve büyük harfleri görebildiler.",
        ],
        [
          "The events of 2020 raised questions about ----.",
          [
            "what companies owe patients who rely on their implanted devices",
            "the cost of glasses",
            "the causes of retinitis pigmentosa",
            "whether cameras should be mounted on glasses",
            "the training of surgeons",
          ],
          "İmplante tıbbi cihaz üreten şirketlerin sorumlulukları hakkında ciddi sorular doğurdu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "As early as the eleventh century, scholars and monks with weak eyesight used polished domes of glass or crystal, known as reading stones, which they placed directly on a page. ---- They are regarded as forerunners of spectacles.",
      [
        "The curved surface magnified the letters beneath it, making them easier to read.",
        "Monks copied many books.",
        "Crystal is transparent.",
        "Some reading stones were made from beryl, a mineral that was also used to make jewellery.",
        "Pages were made of parchment.",
      ],
      "Boşluk okuma taşlarının nasıl işlediğini açıklayan bir cümle gerektirir; boşluğa kavisli yüzeyin altındaki harfleri büyüttüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In the nineteenth century, the monocle, a single lens held in front of one eye by the muscles around it, became fashionable among wealthy men in Europe. ---- By the middle of the twentieth century, it had largely disappeared.",
      [
        "Although it corrected vision in only one eye, it was seen as a sign of style and social status.",
        "Europe has many museums.",
        "Lenses are made of glass.",
        "Some wearers attached the monocle to their clothing with a fine chain or ribbon so that it would not be lost.",
        "Men wore hats.",
      ],
      "Boşluk monoklün neden moda olduğunu açıklayan bir cümle gerektirir; boşluğa yalnızca tek gözü düzeltse de üslup ve statü göstergesi sayıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Cheap mass-produced sunglasses first went on sale in 1929, offered to holidaymakers on the seafront at Atlantic City. ---- They soon became a popular fashion accessory, encouraged by film stars who wore them in public.",
      [
        "Before this, dark glasses had been used mainly for medical purposes or by people with special needs.",
        "Beaches are popular in summer.",
        "Atlantic City is on the coast.",
        "The company had originally manufactured plastic combs and other accessories for women.",
        "Film stars are famous.",
      ],
      "Boşluk güneş gözlüğünün önceki kullanımını anlatan bir cümle gerektirir; boşluğa daha önce koyu gözlüklerin esas olarak tıbbi amaçlarla kullanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "During the Renaissance, some Italian women used drops made from a poisonous plant to widen their pupils, believing that this made them more attractive. ---- Today, a substance from the same plant is used by eye doctors to dilate the pupils during examinations.",
      [
        "The plant's name, belladonna, means 'beautiful lady' in Italian.",
        "Italy is in southern Europe.",
        "Many plants are poisonous.",
        "Using the drops regularly could cause blurred vision, and in large amounts the plant could be fatal.",
        "Women wore jewellery.",
      ],
      "Boşluk bitkinin adıyla ilgili bir cümle gerektirir; boşluğa adının İtalyanca 'güzel kadın' anlamına geldiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1960s, the psychologist Eckhard Hess showed people pictures while measuring the size of their pupils. ---- He suggested that pupil size could reveal people's interest even when they tried to hide it.",
      [
        "He found that their pupils widened when they looked at images that interested or attracted them.",
        "Psychologists study behaviour.",
        "Pictures can be beautiful.",
        "Hess had become interested in the subject when his wife noticed that his pupils grew larger as he looked at a book of animal photographs.",
        "Eyes have pupils.",
      ],
      "Boşluk deneyin bulgusunu anlatan bir cümle gerektirir; boşluğa ilgi çekici görüntülere bakarken göz bebeklerinin genişlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1928, a Russian doctor described patients who shed tears while eating, after recovering from a paralysis of the face. ---- The condition is known informally as 'crocodile tears syndrome'.",
      [
        "During recovery, nerve fibres that normally carried signals to the salivary glands had grown back to the glands that produce tears.",
        "Crocodiles live in rivers.",
        "Eating is enjoyable.",
        "The name refers to an old belief that crocodiles weep while eating their prey.",
        "Tears contain salt.",
      ],
      "Boşluk durumun nedenini açıklayan bir cümle gerektirir; boşluğa iyileşme sırasında tükürük bezlerine giden sinir liflerinin gözyaşı bezlerine bağlandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Mantis shrimps have some of the most complex eyes in the animal kingdom.",
        "They have many more types of colour receptor than humans.",
        "Surprisingly, experiments suggest they are not better at telling similar colours apart.",
        "Shrimps are popular in many cuisines.",
        "Instead, their eyes may allow them to recognise colours very quickly.",
      ],
      odd: 3,
      why: "Parça mantis karideslerinin gözlerini anlatır. Karideslerin pek çok mutfakta popüler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Cats' eyes appear to glow when light shines on them at night.",
        "This is caused by a reflective layer behind the retina.",
        "The layer reflects light back through the retina, helping the cat to see in dim conditions.",
        "Many people keep cats as pets.",
        "Dogs, deer and many other animals have a similar layer.",
      ],
      odd: 3,
      why: "Parça kedi gözlerinin geceleri parlamasını anlatır. Pek çok kişinin kedi beslediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The so-called four-eyed fish of Central and South America swims at the surface of the water.",
        "Rivers often flood in the rainy season.",
        "Each of its eyes is divided into two parts.",
        "The upper part sees above the water, while the lower part sees below it.",
        "This allows the fish to watch for predators in both places at once.",
      ],
      odd: 1,
      why: "Parça dört gözlü balığı anlatır. Nehirlerin yağmur mevsiminde sık sık taştığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Owls cannot move their eyes within their sockets.",
        "Their eyes are shaped more like tubes than balls.",
        "To look around, owls turn their heads, which they can rotate a very long way.",
        "Owls are often seen as symbols of wisdom.",
        "Special features of their blood vessels prevent this movement from cutting off blood to the brain.",
      ],
      odd: 3,
      why: "Parça baykuşların göz ve baş hareketlerini anlatır. Baykuşların bilgelik simgesi olarak görüldüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dragonflies have very large compound eyes made up of tens of thousands of tiny units.",
        "These allow them to see in almost every direction at once.",
        "They are skilled hunters that catch other insects in flight.",
        "Their vision helps them track prey with great accuracy.",
        "Dragonflies are often seen near ponds in summer.",
      ],
      odd: 4,
      why: "Parça yusufçukların gözlerini anlatır. Yusufçukların yazın göletlerin yakınında görüldüğünü söyleyen V. cümle akışı bozar.",
    },
    {
      sentences: [
        "Many grazing animals, such as goats and sheep, have horizontal, rectangular pupils.",
        "Goats produce milk.",
        "This shape gives them a wide view of the ground around them, helping them to spot predators.",
        "When they lower their heads to graze, their eyes rotate to keep the pupils horizontal.",
        "Predators such as cats, by contrast, often have vertical pupils.",
      ],
      odd: 1,
      why: "Parça otlayan hayvanların yatay göz bebeklerini anlatır. Keçilerin süt verdiğini söyleyen II. cümle konu dışıdır.",
    },
  ],
};
