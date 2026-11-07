import type { YokdilDeneme } from "./types";

export const SAGLIK_09: YokdilDeneme = {
  no: 9,
  field: "saglik",
  vocab: [
    [
      "Palliative care aims to ---- pain and improve the quality of life of patients with serious illnesses.",
      ["ease", "increase", "ignore", "spread", "measure"],
      "Palyatif bakımın amacı ağrıyı 'hafifletmek'tir (ease); 'increase' ve 'spread' anlamın tersidir.",
    ],
    [
      "Some patients continue to experience ---- symptoms, such as fatigue and breathlessness, months after the infection has cleared.",
      ["persistent", "brief", "temporary", "mild", "sudden"],
      "Enfeksiyondan aylar sonra süren belirtiler 'kalıcı, inatçı'dır (persistent).",
    ],
    [
      "Dialysis machines ---- waste products from the blood when the kidneys can no longer do so.",
      ["filter", "add", "store", "heat", "colour"],
      "Diyaliz makineleri kandaki atık maddeleri 'süzer' (filter).",
    ],
    [
      "The government decided to ---- iodine to table salt to prevent deficiency in the population.",
      ["add", "remove", "replace", "reduce", "separate"],
      "Eksikliği önlemek için sofra tuzuna iyot 'eklenmesi' (add) gerekir.",
    ],
    [
      "Children who spend more time outdoors are ---- likely to become short-sighted.",
      ["less", "more", "most", "least", "rather"],
      "Dışarıda daha çok zaman geçiren çocukların miyop olma olasılığı 'daha az'dır (less).",
    ],
    [
      "Cognitive behavioural therapy helps patients ---- the negative thoughts that contribute to their anxiety.",
      ["challenge", "accept", "invent", "repeat", "celebrate"],
      "Bilişsel davranışçı terapi hastaların olumsuz düşüncelerini 'sorgulamasına' (challenge) yardım eder.",
    ],
  ],
  grammar: [
    [
      "Before the clinical thermometer was invented, doctors ---- fever simply by touching the patient's forehead.",
      ["had judged", "have judged", "judge", "will judge", "are judging"],
      "Termometrenin icadından önceki geçmiş durum Past Perfect ile anlatılır: 'had judged'.",
    ],
    [
      "If more children ---- outdoors, rates of short-sightedness might be lower.",
      ["played", "play", "had played", "will play", "would play"],
      "Ana cümle 'might be' olduğundan Type 2 koşul gerekir: if + Past 'played'.",
    ],
    [
      "Patients ---- kidneys have failed may need dialysis several times a week.",
      ["whose", "who", "which", "whom", "where"],
      "Hastaların böbreklerinden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- the introduction of iodised salt, goitre was common in many mountainous regions.",
      ["Before", "After", "Since", "Thanks to", "Owing to"],
      "İyotlu tuzun getirilmesinden 'önce' guatrın yaygın olduğu anlatılır: 'Before'.",
    ],
    [
      "Researchers still do not fully understand why some patients ---- long-term symptoms.",
      ["develop", "do they develop", "they developing", "develop they", "are they developing"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'why some patients develop'.",
    ],
    [
      "Only by treating both the body and the mind ---- full recovery.",
      ["can patients achieve", "patients can achieve", "patients achieve", "achieve patients", "do patients achieving"],
      "'Only by …' cümle başında devrik yapı gerektirir: 'can patients achieve'.",
    ],
    [
      "Patients with anxiety often find it hard ---- in crowded places.",
      ["to relax", "relaxing", "relax", "relaxed", "to relaxing"],
      "'find it hard to do' kalıbı mastar ister.",
    ],
    [
      "Many of the patients ---- in the hospice have cancer or advanced heart disease.",
      ["cared for", "caring for", "who care for", "to care for", "have cared for"],
      "Bakım verilen hastalar edilgen anlamlı geçmiş ortaçla nitelenir: 'cared for in the hospice'.",
    ],
    [
      "The panel proposed that every school ---- children to spend at least two hours a day outdoors.",
      ["encourage", "encourages", "encouraged", "will encourage", "encouraging"],
      "'propose that' sonrası subjunctive (yalın fiil) kullanılır: 'every school encourage'.",
    ],
    [
      "Iodine deficiency can affect brain development in children, ---- may lead to learning difficulties.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra önceki cümlenin tamamına atıf yapan 'which' gerekir.",
    ],
    [
      "---- dialysis can replace some functions of the kidneys, it cannot replace all of them.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Diyaliz bazı işlevlerin yerini alsa da hepsini alamaz; zıtlık için 'Although' gerekir.",
    ],
    [
      "Patients are encouraged ---- their concerns openly with the care team.",
      ["to discuss", "discussing", "discuss", "discussed", "to discussing"],
      "'be encouraged to do' kalıbı mastar ister.",
    ],
    [
      "There are ---- many children with myopia in some Asian cities that it is described as an epidemic.",
      ["so", "such", "too", "very", "enough"],
      "'many' önünde sonuç bildiren 'so … that' kullanılır.",
    ],
    [
      "By the time the study is completed, researchers ---- the children for more than ten years.",
      ["will have been following", "have been following", "followed", "had followed", "follow"],
      "Gelecekteki bir ana kadar süregelmiş olacak eylem Future Perfect Continuous ile anlatılır.",
    ],
  ],
  cloze: [
    {
      text:
        "Measuring body temperature is now a routine part of medical care, but this was not always the case. Early thermometers, developed in the seventeenth century, were large and slow, {1} it could take up to twenty minutes to obtain a reading. In the 1860s, the German physician Carl Wunderlich collected millions of temperature measurements from thousands of patients, {2} establishing that the normal human body temperature is around 37 degrees Celsius. His work showed that fever was not a disease {3} itself but a sign of illness. {4} the same period, the English doctor Thomas Allbutt invented a short clinical thermometer that gave a reading in about five minutes. Today, digital and infrared thermometers can measure temperature in seconds, {5} the basic principles remain the same.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "unless", "although", "or"],
          "Termometrelerin büyük ve yavaş olması ile ölçümün uzun sürmesi birbirine eklenen bilgilerdir: 'and'.",
        ],
        [
          "(22) ----",
          ["thereby", "however", "instead", "otherwise", "meanwhile"],
          "Ölçümlerin toplanmasının sonucu normal vücut ısısının belirlenmesidir: 'thereby establishing'.",
        ],
        [
          "(23) ----",
          ["in", "on", "at", "by", "for"],
          "'in itself' (kendi başına) kalıbı kullanılır.",
        ],
        [
          "(24) ----",
          ["During", "Since", "Until", "Unless", "Despite"],
          "'aynı dönem boyunca' anlamında 'During the same period' kullanılır.",
        ],
        [
          "(25) ----",
          ["although", "because", "so that", "unless", "as if"],
          "Termometreler çok gelişse de temel ilkelerin aynı kalması zıtlıktır: 'although'.",
        ],
      ],
    },
    {
      text:
        "The modern hospice movement began in 1967, when the British nurse and doctor Cicely Saunders opened St Christopher's Hospice in London. Saunders believed that patients {1} illnesses could not be cured still deserved excellent care, and that relieving pain was essential to their dignity. She introduced the idea of 'total pain', {2} recognised that suffering has physical, emotional, social and spiritual dimensions. Hospices therefore provide not only medical treatment but also psychological support for patients and their families. {3} the early hospices focused mainly on patients with cancer, palliative care is now offered to people with many conditions, {4} heart failure and dementia. Research shows that early access to palliative care can improve quality of life and, in some cases, {5} help patients live longer.",
      blanks: [
        [
          "(26) ----",
          ["whose", "who", "which", "whom", "where"],
          "Hastaların hastalıklarından söz edilir; iyelik bildiren 'whose' gerekir.",
        ],
        [
          "(27) ----",
          ["which", "who", "what", "where", "whose"],
          "Virgülden sonra 'the idea of total pain' ifadesine atıf yapan ve 'recognised' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(28) ----",
          ["While", "Because", "Unless", "So that", "As soon as"],
          "İlk hospislerin kansere odaklanması ile bugün pek çok hastalığa hizmet verilmesi karşılaştırılır: 'While'.",
        ],
        [
          "(29) ----",
          ["including", "except", "instead of", "despite", "unlike"],
          "Kalp yetmezliği ve demans, bu hastalıkların örnekleridir: 'including'.",
        ],
        [
          "(30) ----",
          ["even", "never", "hardly", "rarely", "barely"],
          "Erken palyatif bakımın bazı durumlarda 'hatta' (even) yaşamı uzatabileceği anlatılır.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although most people recover fully from the infection within a few weeks, ----.",
      [
        "a minority continue to experience symptoms for many months",
        "the virus spreads mainly through droplets in the air",
        "vaccines have reduced the number of serious cases",
        "older people are more likely to be admitted to hospital",
        "the most common symptoms are fever and a dry cough",
      ],
      "'Although' zıtlık ister: çoğu kişi birkaç haftada iyileşse de bir azınlıkta belirtiler aylarca sürer.",
    ],
    [
      "Many nephrologists believe that a kidney transplant ----.",
      [
        "offers a better quality of life than long-term dialysis",
        "although donors must be carefully tested beforehand",
        "which is usually performed in large city hospitals",
        "unless patients take medicines for the rest of their lives",
        "so that patients could have stopped dialysis sooner",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'offers a better quality …' cümleyi tamamlar.",
    ],
    [
      "If salt had not been iodised in the region, ----.",
      [
        "many more children would have suffered from goitre and learning problems",
        "salt is used in almost every type of traditional dish",
        "iodine will be added to other foods in the future",
        "the region is located high in the mountains",
        "most people bought salt from local markets",
      ],
      "Type 3 koşul cümlesi 'would have + V3' ile tamamlanır.",
    ],
    [
      "While myopia was once relatively rare in East Asia, ----.",
      [
        "it now affects the majority of young adults in some cities",
        "glasses can correct the problem quickly and cheaply",
        "the eye becomes slightly too long in people with myopia",
        "children in the region spend many hours on homework",
        "laser surgery is available in many private clinics",
      ],
      "'While' geçmiş ve bugünü karşılaştırır: bir zamanlar nadirken bugün bazı şehirlerde gençlerin çoğunu etkiler.",
    ],
    [
      "Many schools have introduced mindfulness sessions ----.",
      [
        "in order to help students manage stress and anxiety",
        "which teachers had been practising for many years",
        "although exams are held at the end of every term",
        "because the number of students has risen sharply",
        "unless parents ask for their children to be excused",
      ],
      "Oturumların amacı öğrencilerin stres ve kaygıyı yönetmesine yardım etmektir: 'in order to'.",
    ],
    [
      "Unless a suitable donor is found soon, ----.",
      [
        "the patient will have to remain on dialysis",
        "kidney transplants were first performed in the 1950s",
        "most donors had been members of the patient's family",
        "the kidneys filter about 180 litres of blood a day",
        "many people carry an organ donor card",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: hasta diyalize devam etmek zorunda kalacaktır.",
    ],
    [
      "Since the hospice opened in the town, ----.",
      [
        "far more patients have been able to spend their final weeks in comfort",
        "the building had been used as a school for many years",
        "volunteers raised money to buy new beds and equipment",
        "the hospice will open a second centre next year",
        "most patients were cared for at home by their families",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have been able to'.",
    ],
    [
      "Even though anxiety disorders are very common, ----.",
      [
        "fewer than half of those affected receive any treatment",
        "they can cause physical symptoms such as a racing heart",
        "they often begin in childhood or adolescence",
        "cognitive behavioural therapy is one of the main treatments",
        "women are affected more often than men",
      ],
      "'Even though' beklenmedik bir sonuç ister: kaygı bozuklukları çok yaygın olsa da etkilenenlerin yarısından azı tedavi alır.",
    ],
    [
      "The more time children spend reading on screens close to their eyes, ----.",
      [
        "the higher their risk of becoming short-sighted",
        "because screens are used in many classrooms",
        "although many children enjoy reading",
        "which is common in modern societies",
        "since glasses are easy to buy",
      ],
      "'The more …, the higher …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As awareness of mental health has grown, ----.",
      [
        "more people have become willing to seek help",
        "most patients had been treated in large hospitals",
        "anxiety is a normal reaction to stress",
        "therapy sessions usually last an hour",
        "doctors work long hours in many countries",
      ],
      "'As' paralel bir değişim bildirir: ruh sağlığı farkındalığı arttıkça daha çok insan yardım istemeye hazır hâle geldi.",
    ],
    [
      "No sooner had the patient started dialysis ----.",
      [
        "than he began to feel more energetic",
        "when his kidneys had stopped working",
        "because the doctor had recommended it",
        "so his family visited him every day",
        "although the treatment took four hours",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Patients with long-term symptoms often find it difficult to return to work or to their usual activities.",
      [
        "Uzun süreli belirtileri olan hastalar, işe ya da olağan etkinliklerine dönmekte çoğu zaman zorlanır.",
        "Uzun süreli belirtileri olan hastalar, işe dönmeyi her zaman kolay bulur.",
        "Olağan etkinliklerine dönen hastalarda uzun süreli belirtiler ortaya çıkar.",
        "Uzun süreli belirtiler, hastaların iş yerinde daha verimli çalışmasını sağlar.",
        "Hastalar, uzun süreli belirtilerden kurtulmak için işlerini bırakmak zorundadır.",
      ],
      "'often find it difficult to return to work' 'işe dönmekte çoğu zaman zorlanır' demektir.",
    ],
    [
      "Dialysis can keep patients alive for many years, but it places a heavy burden on their daily lives.",
      [
        "Diyaliz hastaları uzun yıllar hayatta tutabilir, ancak günlük yaşamlarına ağır bir yük getirir.",
        "Diyaliz hastaların ömrünü kısaltır, ancak günlük yaşamlarını kolaylaştırır.",
        "Diyaliz yalnızca birkaç hafta uygulanabilen kısa süreli bir tedavidir.",
        "Diyaliz hastaları, günlük yaşamlarında hiçbir sınırlama yaşamaz.",
        "Diyaliz, hastaların günlük yaşamlarından tamamen bağımsız bir tedavidir.",
      ],
      "'can keep patients alive for many years' 'hastaları uzun yıllar hayatta tutabilir', 'places a heavy burden' 'ağır bir yük getirir' demektir.",
    ],
    [
      "Iodine deficiency remains the most common preventable cause of brain damage in children worldwide.",
      [
        "İyot eksikliği, dünya genelinde çocuklarda önlenebilir beyin hasarının en yaygın nedeni olmaya devam etmektedir.",
        "İyot eksikliği, dünya genelinde çocuklarda beyin hasarının nadir görülen bir nedenidir.",
        "Çocuklardaki beyin hasarı, iyot eksikliğini önlemenin en yaygın yoludur.",
        "İyot eksikliğinin çocuklarda beyin hasarına yol açtığı hiçbir zaman kanıtlanmamıştır.",
        "Dünya genelinde çocukların çoğu fazla iyot tükettiği için beyin hasarı yaşar.",
      ],
      "'remains the most common preventable cause of brain damage' 'önlenebilir beyin hasarının en yaygın nedeni olmaya devam etmektedir' demektir.",
    ],
    [
      "Spending time outdoors in daylight appears to protect children's eyes from becoming short-sighted.",
      [
        "Gün ışığında dışarıda vakit geçirmek, çocukların gözlerini miyopluğa karşı koruyor gibi görünmektedir.",
        "Gün ışığında dışarıda vakit geçirmek, çocukların gözlerinin miyop olmasına neden olur.",
        "Miyop çocuklar, gün ışığında dışarıda vakit geçirmekten kaçınır.",
        "Çocukların gözleri yalnızca kapalı alanlarda gelişir.",
        "Gün ışığının çocukların gözleri üzerinde hiçbir etkisi yoktur.",
      ],
      "'appears to protect … from becoming short-sighted' 'miyopluğa karşı koruyor gibi görünmektedir' demektir.",
    ],
    [
      "Cognitive behavioural therapy teaches patients to recognise and change unhelpful patterns of thinking.",
      [
        "Bilişsel davranışçı terapi, hastalara yararsız düşünce kalıplarını tanımayı ve değiştirmeyi öğretir.",
        "Bilişsel davranışçı terapi, hastaların düşünce kalıplarını değiştirmesini engeller.",
        "Hastalar, bilişsel davranışçı terapiye başlamadan önce düşünce kalıplarını değiştirmelidir.",
        "Bilişsel davranışçı terapi yalnızca fiziksel belirtileri tedavi eder.",
        "Yararsız düşünce kalıpları, bilişsel davranışçı terapiyle güçlenir.",
      ],
      "'teaches patients to recognise and change unhelpful patterns of thinking' 'yararsız düşünce kalıplarını tanımayı ve değiştirmeyi öğretir' demektir.",
    ],
    [
      "It was Cicely Saunders who first argued that the needs of dying patients extend beyond physical pain.",
      [
        "Ölmekte olan hastaların ihtiyaçlarının fiziksel ağrının ötesine geçtiğini ilk kez ileri süren kişi Cicely Saunders'dı.",
        "Cicely Saunders, ölmekte olan hastaların yalnızca fiziksel ağrı çektiğini savundu.",
        "Ölmekte olan hastalar, Cicely Saunders'a ihtiyaçlarını ilk kez anlattı.",
        "Cicely Saunders, fiziksel ağrının tedavi edilemeyeceğini ilk kez kanıtladı.",
        "Fiziksel ağrı, Cicely Saunders'ın döneminde tamamen ortadan kaldırılmıştı.",
      ],
      "'It was … who first argued' vurgu yapısıdır: 'ilk kez ileri süren kişi … idi'; 'extend beyond physical pain' 'fiziksel ağrının ötesine geçer'.",
    ],
  ],
  trEn: [
    [
      "Uzun COVID, enfeksiyondan sonra haftalarca ya da aylarca süren belirtileri ifade eder.",
      [
        "Long COVID refers to symptoms that last for weeks or months after the infection.",
        "Long COVID refers to symptoms that appear only on the first day of the infection.",
        "Long COVID is a vaccine that protects people for weeks or months.",
        "The infection lasts for weeks or months only in young people.",
        "Long COVID refers to a test used to detect the virus.",
      ],
      "'enfeksiyondan sonra … süren belirtileri ifade eder' 'refers to symptoms that last … after the infection' karşılığıdır.",
    ],
    [
      "Böbrek nakli, uygun bir donör bulunduğunda diyalize göre daha iyi bir seçenektir.",
      [
        "A kidney transplant is a better option than dialysis when a suitable donor is found.",
        "Dialysis is always a better option than a kidney transplant.",
        "A suitable donor must receive dialysis before a transplant.",
        "Kidney transplants are possible only without a donor.",
        "Dialysis is used to find suitable kidney donors.",
      ],
      "'uygun bir donör bulunduğunda' 'when a suitable donor is found', 'daha iyi bir seçenektir' 'is a better option' karşılığıdır.",
    ],
    [
      "Guatr, tiroid bezinin büyümesine verilen addır.",
      [
        "Goitre is the name given to an enlargement of the thyroid gland.",
        "Goitre is the name given to a shrinking of the thyroid gland.",
        "The thyroid gland is named after a disease called goitre.",
        "Goitre is a type of salt used to treat the thyroid.",
        "An enlarged thyroid gland prevents goitre.",
      ],
      "'tiroid bezinin büyümesine verilen ad' 'the name given to an enlargement of the thyroid gland' karşılığıdır.",
    ],
    [
      "Uzmanlar, çocukların her gün en az iki saat dışarıda zaman geçirmesini öneriyor.",
      [
        "Experts recommend that children spend at least two hours outdoors every day.",
        "Experts recommend that children spend no more than two hours outdoors each week.",
        "Children recommend that experts spend more time outdoors.",
        "Experts have found that two hours outdoors damages children's eyes.",
        "Children spend at least two hours a day indoors, according to experts.",
      ],
      "'en az iki saat dışarıda zaman geçirmesini öneriyor' 'recommend that children spend at least two hours outdoors' karşılığıdır.",
    ],
    [
      "Kaygı bozuklukları, ruh sağlığı sorunlarının en yaygın türüdür.",
      [
        "Anxiety disorders are the most common type of mental health problem.",
        "Anxiety disorders are the rarest type of mental health problem.",
        "Mental health problems are rarely related to anxiety.",
        "Anxiety disorders affect only physical health.",
        "Most mental health problems are caused by physical illness.",
      ],
      "'en yaygın türü' 'the most common type' karşılığıdır.",
    ],
    [
      "Palyatif bakım, yalnızca yaşamın son günlerinde değil, hastalığın erken evrelerinde de sunulabilir.",
      [
        "Palliative care can be offered not only in the last days of life but also in the early stages of illness.",
        "Palliative care can be offered only in the last days of life, not in the early stages of illness.",
        "The early stages of illness do not require any form of care.",
        "Palliative care is designed to shorten the last days of life.",
        "Patients in the early stages of illness are not allowed palliative care.",
      ],
      "'yalnızca … değil, … de' 'not only … but also' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Most people who catch COVID-19 recover within a few weeks, but a significant minority continue to experience symptoms for months, a condition widely known as 'long COVID'. The most common symptoms include extreme fatigue, breathlessness, difficulty concentrating, often described as 'brain fog', and problems with sleep. Surprisingly, long COVID can affect people who had only a mild initial illness, and it appears to be more common in women and middle-aged adults. Its causes are not yet fully understood. Researchers are investigating several possibilities, including damage to blood vessels, a persistent immune response and fragments of the virus remaining in the body. Because there is no single treatment, care usually focuses on managing symptoms and gradually increasing activity, a process that can take a long time.",
      questions: [
        [
          "According to the passage, long COVID ----.",
          [
            "can occur even after a mild initial illness",
            "affects only people who were admitted to hospital",
            "lasts no more than a few weeks in most patients",
            "is most common among young children",
            "has been completely explained by researchers",
          ],
          "Parçaya göre uzun COVID başlangıçta yalnızca hafif hastalık geçiren kişileri de etkileyebilir.",
        ],
        [
          "'Brain fog' is mentioned in the passage as ----.",
          [
            "a description of difficulty concentrating",
            "a type of breathing problem",
            "the main cause of long COVID",
            "a treatment for extreme fatigue",
            "a test used to diagnose the condition",
          ],
          "'Beyin sisi', konsantrasyon güçlüğünü tanımlamak için kullanılır.",
        ],
        [
          "It can be inferred from the passage that treatment for long COVID ----.",
          [
            "focuses on managing symptoms because there is no single cure",
            "involves a single medicine that works for all patients",
            "is usually completed within a few days",
            "is unnecessary for most patients",
            "aims mainly at destroying blood vessels",
          ],
          "Tek bir tedavi olmadığı için bakım genellikle belirtileri yönetmeye ve etkinliği kademeli artırmaya odaklanır.",
        ],
      ],
    },
    {
      text:
        "The kidneys perform the vital task of filtering waste products and excess water from the blood. When they fail, these substances build up in the body and can quickly become life-threatening. For patients with kidney failure, there are two main treatment options: dialysis and transplantation. In haemodialysis, the most common form of dialysis, the patient's blood is pumped through a machine that filters it before returning it to the body. Sessions usually last about four hours and are needed three times a week, which makes it difficult for many patients to work or travel. A kidney transplant generally offers a longer life and greater freedom, but there are far fewer donor kidneys available than patients who need them, and recipients must take medicines for the rest of their lives to prevent rejection.",
      questions: [
        [
          "According to the passage, when the kidneys fail ----.",
          [
            "waste products and excess water build up in the body",
            "the blood becomes too thin to carry oxygen",
            "patients immediately need a heart transplant",
            "the body produces more urine than usual",
            "the liver begins to filter all the blood",
          ],
          "Böbrekler yetmezliğe girdiğinde atık maddeler ve fazla su vücutta birikir.",
        ],
        [
          "Haemodialysis makes it difficult for many patients to work or travel because ----.",
          [
            "they need long treatment sessions several times a week",
            "the machine must be carried with them at all times",
            "it causes severe pain after each session",
            "it is available only in a few countries",
            "patients must stay in hospital permanently",
          ],
          "Seanslar yaklaşık dört saat sürer ve haftada üç kez gerekir; bu da çalışmayı ya da seyahat etmeyi zorlaştırır.",
        ],
        [
          "One problem with kidney transplantation mentioned in the passage is that ----.",
          [
            "there are not enough donor kidneys for all patients",
            "it offers a shorter life than dialysis",
            "recipients can stop taking medicines after a year",
            "it is less effective than haemodialysis",
            "it can be performed only on children",
          ],
          "İhtiyaç duyan hasta sayısına göre çok daha az donör böbrek bulunmaktadır.",
        ],
      ],
    },
    {
      text:
        "Iodine is a mineral that the body needs to produce thyroid hormones, which are essential for growth and brain development. In many parts of the world, particularly mountainous and inland regions, the soil contains little iodine, so locally grown food provides too little. Iodine deficiency can cause goitre, a visible swelling of the thyroid gland in the neck, but its most serious effects occur during pregnancy and early childhood, when even mild deficiency can reduce a child's intelligence. Since the 1990s, many countries have required salt producers to add iodine to table salt, a simple and inexpensive measure. As a result, the number of households using iodised salt has risen dramatically, although deficiency remains a problem in some areas.",
      questions: [
        [
          "According to the passage, iodine deficiency is common in some regions because ----.",
          [
            "the soil there contains little iodine",
            "people there eat too much salt",
            "the water there is heavily polluted",
            "the climate prevents thyroid hormones from forming",
            "people there do not grow their own food",
          ],
          "Dağlık ve iç bölgelerde toprak az iyot içerdiği için yerel olarak yetiştirilen yiyecekler yetersiz iyot sağlar.",
        ],
        [
          "The passage states that the most serious effects of iodine deficiency ----.",
          [
            "occur during pregnancy and early childhood",
            "appear only in elderly adults",
            "are limited to a swelling of the neck",
            "can be seen only in people living near the sea",
            "affect only the growth of hair",
          ],
          "En ciddi etkiler gebelik ve erken çocukluk döneminde görülür.",
        ],
        [
          "The addition of iodine to salt is described in the passage as ----.",
          [
            "a simple and inexpensive solution",
            "a complex and very costly programme",
            "a measure that has completely failed",
            "a dangerous practice for pregnant women",
            "a recent idea introduced in the last year",
          ],
          "Sofra tuzuna iyot eklenmesi basit ve ucuz bir önlem olarak tanımlanır.",
        ],
      ],
    },
    {
      text:
        "Myopia, or short-sightedness, occurs when the eyeball grows slightly too long, so that distant objects appear blurred. Over the past few decades, rates of myopia have risen dramatically around the world, and in some cities in East Asia more than eighty percent of young adults are now affected. Genetics plays a role, but the speed of the increase suggests that environmental factors are more important. For many years, researchers blamed reading and other close work. More recent studies, however, indicate that the key factor may be the amount of time children spend outdoors. Bright natural light seems to slow the excessive growth of the eye. As a result, some schools in Asia have introduced extra outdoor breaks, and early results suggest that these can reduce the number of new cases.",
      questions: [
        [
          "According to the passage, myopia occurs when ----.",
          [
            "the eyeball grows slightly too long",
            "the eye produces too little light",
            "children read in bright sunlight",
            "the lens of the eye becomes cloudy",
            "distant objects are too bright",
          ],
          "Miyopi, göz küresi biraz fazla uzadığında ortaya çıkar.",
        ],
        [
          "The author suggests that environmental factors are more important than genetics because ----.",
          [
            "rates of myopia have increased too quickly to be explained by genes",
            "genes have no influence on the shape of the eye",
            "myopia is found only in East Asian countries",
            "children today read less than in the past",
            "most adults with myopia have no family history of it",
          ],
          "Artışın hızı, genlerle açıklanamayacak kadar yüksektir; bu da çevresel etkenlerin daha önemli olduğunu düşündürür.",
        ],
        [
          "The extra outdoor breaks introduced in some schools are intended to ----.",
          [
            "reduce the number of children who develop myopia",
            "give teachers more time to prepare lessons",
            "improve children's results in reading tests",
            "allow children to use their phones outdoors",
            "replace physical education lessons",
          ],
          "Ek açık hava teneffüslerinin amacı yeni miyopi vakalarının sayısını azaltmaktır.",
        ],
      ],
    },
    {
      text:
        "Anxiety disorders, which include generalised anxiety disorder, panic disorder and social anxiety, are the most common mental health conditions worldwide. Unlike ordinary worry, which is a normal response to stressful situations, an anxiety disorder involves intense and persistent fear that interferes with daily life. Symptoms may be both psychological, such as constant worry and difficulty concentrating, and physical, such as a racing heart, sweating and trembling. One of the most effective treatments is cognitive behavioural therapy, or CBT, which helps patients identify unhelpful thoughts and gradually face the situations they fear. Medication can also be helpful for some patients. Despite the availability of effective treatments, many people with anxiety never seek help, often because of stigma or because they do not recognise their symptoms as a treatable condition.",
      questions: [
        [
          "According to the passage, an anxiety disorder differs from ordinary worry in that it ----.",
          [
            "involves intense and lasting fear that disrupts daily life",
            "occurs only in response to dangerous situations",
            "never causes any physical symptoms",
            "affects only children and teenagers",
            "disappears as soon as the stressful event ends",
          ],
          "Kaygı bozukluğu, günlük yaşamı engelleyen yoğun ve kalıcı korku içerir; sıradan endişe ise strese normal bir tepkidir.",
        ],
        [
          "It is stated in the passage that CBT helps patients ----.",
          [
            "identify unhelpful thoughts and face their fears gradually",
            "avoid all the situations that make them anxious",
            "stop taking any form of medication",
            "forget the causes of their anxiety",
            "increase their heart rate when they feel afraid",
          ],
          "BDT hastaların yararsız düşünceleri belirlemesine ve korktukları durumlarla kademeli olarak yüzleşmesine yardım eder.",
        ],
        [
          "According to the passage, many people with anxiety never seek help because ----.",
          [
            "of stigma or not realising that their condition can be treated",
            "effective treatments are not available anywhere",
            "doctors refuse to treat anxiety disorders",
            "their symptoms are too mild to notice",
            "therapy is more dangerous than medication",
          ],
          "Pek çok kişi damgalanma nedeniyle ya da belirtilerini tedavi edilebilir bir durum olarak tanımadığı için yardım aramaz.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Before the twentieth century, women often gave birth at home with the help of a midwife. ---- Over time, as hospitals became safer and better equipped, most births moved into hospitals.",
      [
        "Complications during childbirth were common, and many mothers and babies did not survive.",
        "Many families in those days had five or six children living in the same house.",
        "Midwives today usually work in hospitals and in community health centres.",
        "Some women still prefer to give birth at home with the support of their families.",
        "The twentieth century saw many important changes in transport and communication.",
      ],
      "Boşluk ev doğumlarındaki tehlikeleri anlatmalıdır; ardından hastanelerin daha güvenli hâle gelmesiyle doğumların hastaneye taşınması gelir.",
    ],
    [
      "Many people believe that cold weather causes colds. ---- However, people tend to spend more time indoors in winter, where viruses spread more easily from person to person.",
      [
        "In fact, colds are caused by viruses rather than by low temperatures.",
        "Winter clothes are usually made from wool or other warm materials.",
        "Some people enjoy skiing and other sports during the winter season.",
        "The coldest temperatures are usually recorded in January and February.",
        "Hot drinks such as tea are especially popular when the weather is cold.",
      ],
      "'However' ile kışın neden daha çok soğuk algınlığı görüldüğü açıklanır; boşluk soğuk algınlığının virüslerden kaynaklandığını söylemelidir.",
    ],
    [
      "---- In many countries, for instance, people who are overweight report being treated unfairly by doctors and nurses.",
      [
        "Weight stigma can be found even within health-care settings.",
        "Many countries have introduced programmes to encourage healthy eating.",
        "Doctors and nurses often work very long hours in busy hospitals.",
        "Obesity rates have increased in most countries over recent decades.",
        "Some people prefer to visit the same doctor for many years.",
      ],
      "'for instance' ile verilen örnek, kilo damgalamasının sağlık ortamlarında bile görüldüğünü söyleyen bir genelleme gerektirir.",
    ],
    [
      "Yoga has become popular around the world as a form of exercise. ---- In addition, some studies suggest that it may help reduce stress and improve sleep.",
      [
        "It can improve flexibility, balance and muscle strength.",
        "Yoga originated in ancient India thousands of years ago.",
        "Many gyms now offer yoga classes in the evenings and at weekends.",
        "Some people practise yoga at home using online videos.",
        "Special mats are often used to make yoga more comfortable.",
      ],
      "'In addition' ile ikinci bir yarar eklenir; boşlukta yoganın ilk fiziksel yararları yer almalıdır.",
    ],
    [
      "Hospitals produce large amounts of waste, much of it plastic. ---- As a result, many hospitals are now looking for ways to reduce their environmental impact.",
      [
        "The health sector is estimated to be responsible for a significant share of global carbon emissions.",
        "Many hospitals employ cleaners to keep their wards and corridors tidy.",
        "Plastic was first produced on a large scale in the twentieth century.",
        "Some hospitals have beautiful gardens where patients can relax.",
        "Hospital waste must be collected and removed every single day.",
      ],
      "'As a result' öncesinde hastanelerin çevresel etkilerini azaltma arayışına yol açan bir neden gerekir: sağlık sektörünün karbon salımlarındaki payı.",
    ],
    [
      "Some doctors now use video calls to follow up with patients after operations. ---- Others, however, worry that important signs may be missed without a physical examination.",
      [
        "Supporters say this saves patients time and the cost of travelling to hospital.",
        "Many operations are now carried out using very small cameras.",
        "Video calls have become popular for keeping in touch with family.",
        "Some patients need several weeks to recover from surgery.",
        "Hospitals usually have large car parks for patients and visitors.",
      ],
      "'Others, however' öncesinde uygulamayı destekleyen görüş gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Bedsores develop when constant pressure reduces the blood supply to the skin.",
        "They are common in patients who cannot move easily, such as the elderly.",
        "Many hospital rooms have large windows.",
        "Regularly changing the patient's position can help prevent them.",
        "Special mattresses that spread pressure more evenly are also used.",
      ],
      odd: 2,
      why: "Parça bası yaralarını anlatır. Hastane odalarının büyük pencerelerinden söz eden III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tinnitus is the perception of ringing or buzzing in the ears when no external sound is present.",
        "It is often linked to exposure to loud noise or to age-related hearing loss.",
        "For some people, it can cause anxiety and difficulty sleeping.",
        "Many musicians perform at large outdoor festivals.",
        "Sound therapy and counselling can help people manage the condition.",
      ],
      odd: 3,
      why: "Parça kulak çınlamasını anlatır. Müzisyenlerin açık hava festivallerinden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Rickets is a condition that causes children's bones to become soft and weak.",
        "It is usually caused by a lack of vitamin D or calcium.",
        "The disease was common in industrial cities in the nineteenth century.",
        "Today it is rare in countries where foods are fortified with vitamin D.",
        "Many children enjoy drinking chocolate milk.",
      ],
      odd: 4,
      why: "Parça raşitizmi anlatır. Çocukların çikolatalı süt içmesinden söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Appendicitis is an inflammation of the appendix, a small pouch attached to the large intestine.",
        "It usually causes pain that starts near the navel and moves to the lower right side of the abdomen.",
        "Some restaurants serve very large portions.",
        "If not treated quickly, the appendix can burst and cause a serious infection.",
        "The usual treatment is surgery to remove the appendix.",
      ],
      odd: 2,
      why: "Parça apandisiti anlatır. Restoranların büyük porsiyonlarından söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Whooping cough is a highly contagious bacterial infection of the lungs.",
        "Mountains are popular destinations for walkers.",
        "It causes long coughing fits that can make it hard to breathe.",
        "Young babies are at the greatest risk of serious complications.",
        "Vaccinating pregnant women helps protect newborn babies.",
      ],
      odd: 1,
      why: "Parça boğmacayı anlatır. Dağların yürüyüşçülerce sevildiğini söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hospital-at-home programmes allow some patients to receive hospital-level care in their own homes.",
        "Doctors and nurses visit regularly, and patients can be monitored remotely.",
        "Studies suggest that patients often recover just as well as in hospital.",
        "Many people decorate their homes with plants.",
        "Such programmes can also reduce pressure on busy hospital wards.",
      ],
      odd: 3,
      why: "Parça evde hastane bakımı programlarını anlatır. Evlerin bitkilerle süslenmesinden söz eden IV. cümle akışı bozar.",
    },
  ],
};
