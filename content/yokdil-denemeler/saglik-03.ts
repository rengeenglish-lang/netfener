import type { YokdilDeneme } from "./types";

export const SAGLIK_03: YokdilDeneme = {
  no: 3,
  field: "saglik",
  vocab: [
    [
      "The new drug was ---- from the market after reports that it caused serious liver damage.",
      ["withdrawn", "promoted", "praised", "exported", "invented"],
      "Ciddi karaciğer hasarı raporlarından sonra ilacın piyasadan 'çekilmesi' (withdrawn) beklenir. 'promoted' ve 'praised' olumlu tepkilerdir.",
    ],
    [
      "People with weakened immune systems are particularly ---- to infections such as pneumonia.",
      ["susceptible", "resistant", "indifferent", "grateful", "immune"],
      "Zayıf bağışıklık sistemi enfeksiyonlara 'yatkınlık' (susceptible) demektir. 'resistant' ve 'immune' anlamı tersine çevirir.",
    ],
    [
      "The doctor ---- the wound carefully to prevent bacteria from entering it.",
      ["cleaned", "ignored", "opened", "decorated", "measured"],
      "Bakterilerin girmesini önlemek için yaranın 'temizlenmesi' gerekir. 'ignored' ve 'opened' amaçla çelişir.",
    ],
    [
      "Most patients ---- the infection within a week if they take the full course of antibiotics.",
      ["get over", "take after", "look into", "put off", "turn down"],
      "Hastaların enfeksiyonu bir hafta içinde 'atlatması' (get over) anlatılır. 'take after' (benzemek) ve 'turn down' (reddetmek) uygun değildir.",
    ],
    [
      "Blood pressure that is ---- high can damage the heart, kidneys and blood vessels over time.",
      ["persistently", "rarely", "briefly", "accidentally", "politely"],
      "Zamanla organlara zarar veren durum 'sürekli olarak' (persistently) yüksek tansiyondur. 'rarely' ve 'briefly' zamanla oluşan hasarla çelişir.",
    ],
    [
      "Researchers found a strong ---- between air pollution and childhood asthma.",
      ["correlation", "contradiction", "competition", "celebration", "conversation"],
      "İki değişken arasındaki istatistiksel ilişki 'correlation' (bağıntı) ile ifade edilir. Diğer isimler bağlama uymaz.",
    ],
  ],
  grammar: [
    [
      "The patient ---- in hospital for two weeks when she finally began to recover.",
      ["had been", "has been", "was being", "will be", "is"],
      "İyileşmeye başladığı geçmiş andan önce süren durum Past Perfect ile anlatılır: 'had been'.",
    ],
    [
      "If the vaccine ---- widely available, the outbreak could be controlled more quickly.",
      ["were", "is being", "had", "will be", "has"],
      "Ana cümledeki 'could be controlled' şimdiki gerçek dışı durum (Type 2) bildirir; if cümlesinde 'were' kullanılır.",
    ],
    [
      "Doctors are concerned about ---- many teenagers spend on their phones at night.",
      ["how much time", "what time", "how many times", "which time", "that time"],
      "Gençlerin telefonda 'ne kadar zaman' harcadığı soruluyor: miktar bildiren 'how much time'.",
    ],
    [
      "The clinic, ---- opened last year, already treats more than 500 patients a week.",
      ["which", "that", "where", "who", "what"],
      "Virgülle ayrılmış açıklayıcı ilgi cümlesinde 'which' kullanılır; 'that' virgülden sonra gelemez.",
    ],
    [
      "---- the symptoms are mild, the patient should still see a doctor.",
      ["Even if", "Because", "So that", "In order to", "Due to"],
      "Belirtiler hafif 'olsa bile' doktora gidilmesi gerekir: zıtlık bildiren 'Even if'.",
    ],
    [
      "The nurse asked the patient when ---- his last meal.",
      ["he had eaten", "had he eaten", "did he eat", "he eats", "has he eaten"],
      "Dolaylı soruda düz cümle sırası kullanılır ve zaman bir geri kayar: 'when he had eaten'.",
    ],
    [
      "The operation is considered too risky ---- on patients over the age of eighty.",
      ["to perform", "performing", "to be performing", "perform", "performed"],
      "'too + sıfat + to do' kalıbı mastar ister: 'too risky to perform'.",
    ],
    [
      "Seldom ---- such a rapid recovery from such a serious injury.",
      ["have doctors seen", "doctors have seen", "doctors saw", "seen doctors", "doctors did see"],
      "Olumsuz anlamlı 'Seldom' cümle başına geldiğinde devrik yapı gerekir: 'have doctors seen'.",
    ],
    [
      "The researchers have not yet decided ---- the trial should be extended.",
      ["whether", "what", "which", "that", "who"],
      "Evet/hayır içeren dolaylı soru 'whether' ile kurulur.",
    ],
    [
      "Patients ---- are allergic to penicillin must inform their doctor before treatment.",
      ["who", "which", "whose", "whom", "what"],
      "İnsanlardan söz eden ve 'are allergic' fiilinin öznesi olan ilgi zamiri 'who'dur.",
    ],
    [
      "The results would have been more reliable if more volunteers ---- part in the study.",
      ["had taken", "took", "would take", "have taken", "take"],
      "Type 3 koşul: ana cümle 'would have been', if cümlesi Past Perfect: 'had taken'.",
    ],
    [
      "The medication should be taken twice a day, ---- in the morning and ---- in the evening.",
      ["once / once", "one / other", "first / second", "some / some", "a / the"],
      "'Günde iki kez, bir kez sabah ve bir kez akşam' anlamı 'once … once' ile verilir.",
    ],
    [
      "Hand sanitisers are useful; ----, they are not as effective as washing with soap and water.",
      ["however", "therefore", "moreover", "for example", "as a result"],
      "Dezenfektanların yararlı olması ile sabun kadar etkili olmaması arasında karşıtlık vardır: 'however'.",
    ],
    [
      "It was the discovery of penicillin ---- transformed the treatment of bacterial infections.",
      ["that", "what", "which it", "when", "where"],
      "'It was … that …' vurgu (cleft) yapısı 'that' ile kurulur.",
    ],
  ],
  cloze: [
    {
      text:
        "Type 2 diabetes is a condition in which the body does not use insulin properly, {1} blood sugar levels to rise. It is closely linked to obesity and physical inactivity, and its prevalence has increased sharply over the past three decades. Many people live with the disease for years {2} knowing it, as early symptoms are often mild. Left untreated, however, high blood sugar can damage the eyes, kidneys and nerves. The good news is that type 2 diabetes is largely preventable. Studies have shown that losing a modest amount of weight and exercising regularly can reduce the risk {3} more than half. {4} lifestyle changes are not enough, patients may need medication. Doctors stress that early diagnosis is essential, {5} damage to organs can begin before symptoms appear.",
      blanks: [
        [
          "(21) ----",
          ["causing", "caused", "to cause", "causes", "having caused by"],
          "İnsülinin düzgün kullanılamamasının sonucu virgülden sonra etken ortaçla verilir: 'causing blood sugar levels to rise'.",
        ],
        [
          "(22) ----",
          ["without", "despite", "through", "by", "upon"],
          "İnsanlar hastalığı 'bilmeden' (without knowing) yıllarca yaşar; ardından -ing gelir.",
        ],
        [
          "(23) ----",
          ["by", "with", "for", "at", "on"],
          "Azalma miktarı 'by' ile verilir: 'reduce the risk by more than half'.",
        ],
        [
          "(24) ----",
          ["If", "Unless", "Although", "Because", "Since"],
          "Yaşam tarzı değişiklikleri yeterli 'olmazsa' ilaç gerekir; olumsuzluk cümlede (not enough) olduğu için 'If' kullanılır.",
        ],
        [
          "(25) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Erken teşhisin önemli olmasının nedeni organ hasarının belirtilerden önce başlayabilmesidir: 'because'.",
        ],
      ],
    },
    {
      text:
        "Mental health problems are among the leading causes of disability worldwide, yet they often receive far less funding than physical illnesses. Depression and anxiety alone cost the global economy an estimated one trillion dollars each year in lost productivity. One major obstacle to treatment is stigma: many people are reluctant to seek help {1} they fear being judged by others. Access is another problem. In many low-income countries, there is fewer than one psychiatrist for every 100,000 people. {2} address this gap, some countries have trained community health workers to provide basic psychological support. Research shows that such programmes can be surprisingly effective, {3} the workers have no formal medical qualifications. Digital tools, such as apps {4} guide users through therapy exercises, are also being tested, {5} experts warn that they cannot replace professional care for serious conditions.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "so that", "until"],
          "İnsanların yardım istememesinin nedeni yargılanma korkusudur: 'because'.",
        ],
        [
          "(27) ----",
          ["To", "For", "So", "By", "As"],
          "Amaç bildiren mastar cümle başında 'To address this gap' şeklinde kullanılır.",
        ],
        [
          "(28) ----",
          ["even though", "because", "since", "so", "as long as"],
          "Programların resmî tıbbi niteliği olmayan çalışanlara rağmen etkili olması zıtlıktır: 'even though'.",
        ],
        [
          "(29) ----",
          ["that", "what", "where", "whose", "who"],
          "'apps' sonrası 'guide' fiilinin öznesini isteyen tanımlayıcı ilgi cümlesi: 'that'.",
        ],
        [
          "(30) ----",
          ["although", "because", "so that", "unless", "therefore"],
          "Dijital araçlar test edilmekte, 'ancak' profesyonel bakımın yerini tutamamaktadır: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the patient's blood tests were normal, ----.",
      [
        "the doctor ordered further scans because the symptoms persisted",
        "they were analysed in the hospital laboratory within two hours",
        "blood tests are commonly used to check overall health",
        "the nurse took the samples early in the morning",
        "normal results are usually reassuring for most patients",
      ],
      "'Although' zıtlık ister: testler normal olsa da belirtiler sürdüğü için ek tetkik istenmesi.",
    ],
    [
      "Many hospitals now encourage patients to get out of bed soon after surgery ----.",
      [
        "because early movement reduces the risk of blood clots and speeds recovery",
        "which was performed by a team of experienced surgeons last week",
        "although most operations are carried out under general anaesthesia",
        "unless they had been admitted through the emergency department",
        "so that nurses had more time to complete their paperwork",
      ],
      "Ameliyattan sonra erken hareketin nedeni kan pıhtısı riskini azaltması ve iyileşmeyi hızlandırmasıdır.",
    ],
    [
      "If people were vaccinated against influenza every year, ----.",
      [
        "fewer elderly patients would be admitted to hospital in winter",
        "the virus was first identified in the twentieth century",
        "hospitals will treat more patients in the summer months",
        "flu vaccines had been developed in many different countries",
        "doctors have recommended the vaccine for many years",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + V1' ister: kışın daha az yaşlı hasta hastaneye yatardı.",
    ],
    [
      "While antibiotics are effective against bacteria, ----.",
      [
        "they have no effect on viruses such as those that cause colds",
        "they were first mass-produced during the Second World War",
        "many patients take them in the form of tablets or capsules",
        "doctors usually prescribe them for a period of seven days",
        "some of them must be taken together with food",
      ],
      "'While' zıtlık bildirir: antibiyotikler bakterilere etkiliyken virüslere etkisizdir.",
    ],
    [
      "The number of people with dementia is rising ----.",
      [
        "mainly because more people are living into old age",
        "which was described by a German doctor over a century ago",
        "although memory loss is one of the earliest symptoms",
        "so that families could look after their relatives at home",
        "unless they had already been diagnosed by a specialist",
      ],
      "Demans sayısının artmasının temel nedeni daha fazla insanın ileri yaşlara ulaşmasıdır.",
    ],
    [
      "Patients are asked not to eat for several hours before surgery ----.",
      [
        "to reduce the risk of vomiting during anaesthesia",
        "which usually takes place early in the morning",
        "although they may feel hungry and uncomfortable",
        "because the hospital kitchen closes at night",
        "unless the surgeon had changed the schedule",
      ],
      "Ameliyattan önce aç kalmanın amacı anestezi sırasında kusma riskini azaltmaktır.",
    ],
    [
      "Unless the outbreak is brought under control, ----.",
      [
        "it may spread to neighbouring countries within weeks",
        "health workers were sent to the region last month",
        "the disease was first reported in a small village",
        "most patients recovered after receiving treatment",
        "the government had closed several schools",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: salgın birkaç hafta içinde komşu ülkelere yayılabilir.",
    ],
    [
      "Even though smoking rates have fallen in many countries, ----.",
      [
        "tobacco still causes millions of deaths every year",
        "cigarettes are sold in shops and supermarkets",
        "many young people tried smoking at school",
        "taxes on tobacco have been increased several times",
        "smoking was banned in restaurants and bars",
      ],
      "'Even though' zıtlık ister: oranlar düşse de tütün hâlâ milyonlarca ölüme yol açar.",
    ],
    [
      "As children spend more time indoors, ----.",
      [
        "rates of short-sightedness among them have increased",
        "schools were built with large windows in the past",
        "parents usually buy toys for their birthdays",
        "many children enjoyed playing football outside",
        "doctors had warned families about screen time",
      ],
      "'As' paralel değişim bildirir: çocuklar içeride daha çok zaman geçirdikçe miyopi oranı artmıştır.",
    ],
    [
      "The researchers excluded smokers from the study ----.",
      [
        "so that smoking would not affect the results",
        "who had been smoking for more than ten years",
        "although many of them wanted to take part",
        "because the study was carried out in a hospital",
        "while the rest of the volunteers were tested",
      ],
      "Sigara içenlerin çalışmadan çıkarılmasının amacı sigaranın sonuçları etkilememesidir: 'so that'.",
    ],
    [
      "No sooner had the patient been given the injection ----.",
      [
        "than she began to feel better",
        "when the doctor had left the room",
        "because the pain was very severe",
        "although it was quite expensive",
        "so the nurse wrote it down",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır: iğne yapılır yapılmaz hasta kendini daha iyi hissetmeye başladı.",
    ],
  ],
  enTr: [
    [
      "People who sleep less than six hours a night are more likely to develop high blood pressure.",
      [
        "Geceleri altı saatten az uyuyan kişilerin yüksek tansiyona yakalanma olasılığı daha yüksektir.",
        "Yüksek tansiyonu olan kişiler geceleri altı saatten az uyur.",
        "Altı saatten fazla uyumak yüksek tansiyonu tamamen önler.",
        "Geceleri az uyuyan kişilerin tansiyonu genellikle düşüktür.",
        "Yüksek tansiyon, insanların altı saatten az uyumasına neden olur.",
      ],
      "'are more likely to develop' 'yakalanma olasılığı daha yüksektir' demektir. Diğer seçenekler neden-sonucu tersine çevirir ya da kesinlik ekler.",
    ],
    [
      "The new guidelines recommend that children under two should not be given any sugary drinks.",
      [
        "Yeni yönergeler, iki yaşından küçük çocuklara hiç şekerli içecek verilmemesini önermektedir.",
        "Yeni yönergelere göre iki yaşından büyük çocuklar şekerli içecek içebilir.",
        "İki yaşındaki çocuklar şekerli içecekleri sevmektedir.",
        "Yeni yönergeler çocuklara az miktarda şekerli içecek verilmesine izin vermektedir.",
        "Şekerli içecekler iki yaşından küçük çocukların gelişimini hızlandırır.",
      ],
      "'recommend that … should not be given any' 'hiç verilmemesini önermektedir' anlamındadır.",
    ],
    [
      "It is not yet clear whether the drug will be effective in older patients.",
      [
        "İlacın yaşlı hastalarda etkili olup olmayacağı henüz belli değildir.",
        "İlacın yaşlı hastalarda etkili olduğu kanıtlanmıştır.",
        "İlaç yaşlı hastalarda kullanılmamalıdır.",
        "Yaşlı hastalar ilacı kullanmayı reddetmektedir.",
        "İlacın etkisi yaşlı hastalarda daha hızlı görülmektedir.",
      ],
      "'It is not yet clear whether' 'henüz belli değildir' anlamında bir belirsizlik bildirir.",
    ],
    [
      "Most cases of skin cancer could be prevented by avoiding excessive exposure to the sun.",
      [
        "Cilt kanseri vakalarının çoğu, güneşe aşırı maruz kalmaktan kaçınılarak önlenebilir.",
        "Güneş ışığı cilt kanserini tedavi etmek için kullanılır.",
        "Cilt kanseri vakalarının çok azı güneşle ilgilidir.",
        "Güneşe maruz kalmak cilt kanserinin tek nedenidir.",
        "Güneşten kaçınan kişilerde cilt kanseri daha sık görülür.",
      ],
      "'Most cases … could be prevented by avoiding' 'vakaların çoğu … kaçınılarak önlenebilir' demektir.",
    ],
    [
      "The longer a patient waits for treatment, the lower the chances of a full recovery become.",
      [
        "Hasta tedavi için ne kadar uzun beklerse tam iyileşme şansı o kadar düşer.",
        "Tedavi için uzun bekleyen hastalar daha hızlı iyileşir.",
        "Tam iyileşme şansı düşük olan hastalar tedaviyi bekler.",
        "Hastaların tedavi için beklemesi iyileşme şansını etkilemez.",
        "Hasta erken tedavi edilirse iyileşme süresi uzar.",
      ],
      "'The longer …, the lower …' 'ne kadar … o kadar …' karşılaştırmasıdır.",
    ],
    [
      "Many patients stop taking their medication as soon as they start to feel better.",
      [
        "Pek çok hasta kendini daha iyi hissetmeye başlar başlamaz ilaçlarını bırakır.",
        "Hastaların çoğu ilaçlarını bıraktıktan sonra kendini daha iyi hisseder.",
        "İlaçlarını düzenli alan hastalar daha çabuk iyileşir.",
        "Pek çok hasta ilaçları kendini kötü hissettirdiği için bırakır.",
        "Hastalar kendini iyi hissetmeden ilaç almaya başlamaz.",
      ],
      "'as soon as they start to feel better' 'daha iyi hissetmeye başlar başlamaz' demektir.",
    ],
  ],
  trEn: [
    [
      "Doktorlar, hastaların antibiyotik kürünü tamamlamasının önemini vurguluyor.",
      [
        "Doctors emphasise the importance of patients completing their course of antibiotics.",
        "Doctors say that patients can stop taking antibiotics when they feel better.",
        "Patients complain that antibiotic courses are too long.",
        "Doctors rarely prescribe antibiotics to their patients.",
        "Completing a course of antibiotics is not important for most patients.",
      ],
      "'önemini vurguluyor' 'emphasise the importance of', 'kürünü tamamlamasının' 'completing their course' karşılığıdır.",
    ],
    [
      "Bazı genetik hastalıklar ancak her iki ebeveynden de kusurlu gen alındığında ortaya çıkar.",
      [
        "Some genetic diseases appear only when a faulty gene is inherited from both parents.",
        "Genetic diseases are always inherited from the mother.",
        "Faulty genes can be repaired before they are passed on to children.",
        "Some genetic diseases are caused by an infection during pregnancy.",
        "Children with one faulty gene always develop genetic diseases.",
      ],
      "'ancak … alındığında' 'only when … is inherited', 'her iki ebeveynden de' 'from both parents' karşılığıdır.",
    ],
    [
      "Hastanelerde hasta güvenliğini artırmak için kontrol listeleri kullanılmaktadır.",
      [
        "Checklists are used in hospitals to improve patient safety.",
        "Patients in hospitals are asked to complete safety checklists.",
        "Hospitals have stopped using checklists because they are not safe.",
        "Patient safety is checked only once a year in hospitals.",
        "Checklists have made hospitals less safe for patients.",
      ],
      "'güvenliğini artırmak için … kullanılmaktadır' 'are used … to improve … safety' karşılığıdır.",
    ],
    [
      "Kronik hastalıkların çoğu, sağlıklı yaşam tarzı seçimleriyle önlenebilir ya da geciktirilebilir.",
      [
        "Most chronic diseases can be prevented or delayed through healthy lifestyle choices.",
        "Chronic diseases cannot be prevented once they have started.",
        "Healthy lifestyle choices are a common cause of chronic diseases.",
        "Most chronic diseases are caused by genetic factors alone.",
        "Healthy people never develop chronic diseases.",
      ],
      "'önlenebilir ya da geciktirilebilir' 'can be prevented or delayed' karşılığıdır.",
    ],
    [
      "Uzmanlar, ergenlerin uyku saatlerinin okul başlangıç saatleriyle uyumsuz olduğunu belirtiyor.",
      [
        "Experts point out that teenagers' sleep patterns do not match school start times.",
        "Experts recommend that teenagers go to school earlier in the morning.",
        "Teenagers sleep more than adults because schools start late.",
        "Experts say that school start times have no effect on teenagers' sleep.",
        "Teenagers who sleep well perform worse at school.",
      ],
      "'uyumsuz olduğunu belirtiyor' 'point out that … do not match' karşılığıdır.",
    ],
    [
      "Erken teşhis edildiğinde meme kanseri çoğunlukla başarıyla tedavi edilebilir.",
      [
        "When it is diagnosed early, breast cancer can usually be treated successfully.",
        "Breast cancer is usually diagnosed too late to be treated.",
        "Early treatment of breast cancer is rarely successful.",
        "Breast cancer can only be diagnosed after treatment has begun.",
        "Most breast cancers disappear without any treatment.",
      ],
      "'Erken teşhis edildiğinde' 'When it is diagnosed early', 'çoğunlukla başarıyla tedavi edilebilir' 'can usually be treated successfully' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Ultra-processed foods, such as packaged snacks, sugary cereals and ready meals, now make up more than half of the calories eaten in some high-income countries. These products are typically high in sugar, salt and fat and contain additives that are rarely used in home cooking. A growing number of studies have linked diets rich in ultra-processed foods to obesity, type 2 diabetes and heart disease. In one controlled experiment, volunteers who ate an ultra-processed diet consumed about 500 more calories per day than when they ate a diet of minimally processed foods, even though both diets offered the same amounts of sugar, fat and fibre. Researchers suspect that the soft texture of these foods encourages people to eat faster and therefore more.",
      questions: [
        [
          "According to the passage, ultra-processed foods ----.",
          [
            "often contain additives that people do not normally use when cooking at home",
            "make up a very small proportion of calories in high-income countries",
            "are low in sugar, salt and fat compared with home-cooked meals",
            "have been proven to have no connection with heart disease",
            "are eaten mainly in low-income countries without supermarkets",
          ],
          "Parça bu ürünlerin evde yemek yaparken nadiren kullanılan katkı maddeleri içerdiğini söyler.",
        ],
        [
          "The controlled experiment showed that volunteers on the ultra-processed diet ----.",
          [
            "ate more calories even though the two diets were nutritionally matched",
            "lost weight more quickly than those on the other diet",
            "were given much more sugar and fat than the other group",
            "refused to eat most of the food they were offered",
            "ate more slowly because the food was difficult to chew",
          ],
          "Gönüllüler iki diyet aynı miktarda şeker, yağ ve lif sunmasına rağmen ultra işlenmiş diyetle günde yaklaşık 500 kalori daha fazla tüketmiştir.",
        ],
        [
          "Researchers suggest that the soft texture of ultra-processed foods ----.",
          [
            "may lead people to eat more quickly and consume more",
            "makes them healthier than minimally processed foods",
            "reduces the amount of sugar people eat each day",
            "is the result of adding extra fibre to them",
            "makes them unpopular with most consumers",
          ],
          "Son cümleye göre yumuşak doku insanların daha hızlı ve dolayısıyla daha fazla yemesine yol açabilir.",
        ],
      ],
    },
    {
      text:
        "The human body contains trillions of cells, and every day billions of them die and are replaced. This process is tightly controlled by the body. Cancer begins when this control breaks down and cells start to divide uncontrollably, forming a mass known as a tumour. Not all tumours are dangerous: benign tumours grow slowly and do not spread. Malignant tumours, by contrast, can invade nearby tissues and spread to other parts of the body through the blood or lymphatic system, a process called metastasis. Most cancer deaths are caused not by the original tumour but by metastasis. This is why early detection, before the cancer has had a chance to spread, greatly improves the chances of survival.",
      questions: [
        [
          "According to the passage, cancer begins when ----.",
          [
            "the body loses control over cell division",
            "billions of cells die and are not replaced",
            "a benign tumour stops growing",
            "the lymphatic system stops working entirely",
            "cells are replaced too slowly by the body",
          ],
          "Parça kanserin bu kontrolün bozulması ve hücrelerin kontrolsüz bölünmeye başlamasıyla başladığını söyler.",
        ],
        [
          "It is stated in the passage that benign tumours ----.",
          [
            "grow slowly and do not spread to other parts of the body",
            "are the main cause of cancer deaths around the world",
            "spread quickly through the blood and lymphatic system",
            "always turn into malignant tumours over time",
            "can only be detected after metastasis has occurred",
          ],
          "İyi huylu tümörler yavaş büyür ve yayılmaz.",
        ],
        [
          "Early detection improves survival chances mainly because ----.",
          [
            "it allows treatment before the cancer has spread",
            "it prevents the body from replacing dead cells",
            "benign tumours are easier to find than malignant ones",
            "it stops all tumours from forming in the first place",
            "metastasis only happens in elderly patients",
          ],
          "Kanser ölümlerinin çoğu metastazdan kaynaklandığı için kanser yayılmadan önce yakalanması hayatta kalma şansını artırır.",
        ],
      ],
    },
    {
      text:
        "In recent years, doctors have become increasingly concerned about the overuse of medical tests. Scans and blood tests are valuable tools, but they can also produce 'incidental findings', small abnormalities that are unlikely ever to cause harm. Once discovered, however, such findings often lead to further tests, anxiety and sometimes unnecessary treatment, which carries its own risks. This phenomenon, known as overdiagnosis, is particularly common in cancer screening. Some thyroid cancers, for example, grow so slowly that they would never have affected the patient's health. In response, medical organisations in several countries have launched campaigns encouraging doctors and patients to discuss whether a test is really necessary before ordering it.",
      questions: [
        [
          "The term 'incidental findings' in the passage refers to ----.",
          [
            "minor abnormalities discovered by tests that are unlikely to cause problems",
            "serious diseases that are detected too late to be treated",
            "mistakes made by laboratories when analysing blood samples",
            "the results of tests that patients request themselves",
            "new treatments discovered during clinical trials",
          ],
          "Parça bu terimi muhtemelen hiçbir zaman zarar vermeyecek küçük anormallikler olarak tanımlar.",
        ],
        [
          "According to the passage, overdiagnosis can lead to ----.",
          [
            "additional tests, worry and treatment that may itself be harmful",
            "fewer patients being treated for serious cancers",
            "a reduction in the number of scans ordered by doctors",
            "faster recovery for most patients with thyroid cancer",
            "lower costs for hospitals and insurance companies",
          ],
          "Aşırı teşhis, ek testlere, kaygıya ve bazen kendi riskleri olan gereksiz tedaviye yol açar.",
        ],
        [
          "The campaigns mentioned in the last sentence aim to ----.",
          [
            "encourage discussion about whether tests are truly needed",
            "increase the number of cancer screenings in all age groups",
            "stop doctors from ordering any blood tests",
            "persuade patients to avoid all medical treatment",
            "make thyroid cancer treatment cheaper",
          ],
          "Kampanyalar doktorları ve hastaları bir test istemeden önce gerçekten gerekli olup olmadığını konuşmaya teşvik eder.",
        ],
      ],
    },
    {
      text:
        "Rabies is almost always fatal once symptoms appear, yet it is entirely preventable. The virus is usually transmitted through the bite of an infected animal, most often a dog. Each year, it kills tens of thousands of people, mainly in rural areas of Africa and Asia, and around 40 percent of victims are children. After a bite, a series of vaccine injections can prevent the disease if given promptly, but these are often expensive or unavailable in remote areas. Experts argue that the most effective strategy is to vaccinate dogs. When at least 70 percent of dogs in an area are vaccinated, transmission to humans can be stopped. Several Latin American countries have almost eliminated human rabies using this approach.",
      questions: [
        [
          "According to the passage, rabies is ----.",
          [
            "preventable, although it is nearly always fatal after symptoms begin",
            "easily cured with antibiotics once symptoms appear",
            "transmitted mainly through contaminated food and water",
            "most common in large cities in Europe and North America",
            "a disease that affects only dogs and other animals",
          ],
          "Parça kuduzun belirtiler ortaya çıktığında neredeyse her zaman ölümcül olduğunu ama tamamen önlenebilir olduğunu söyler.",
        ],
        [
          "One problem with post-bite vaccination mentioned in the passage is that ----.",
          [
            "it is often costly or hard to obtain in remote places",
            "it must be given several years after the bite",
            "it causes serious side effects in children",
            "it does not work for bites from dogs",
            "it has never been tested on humans",
          ],
          "Isırıktan sonra yapılan aşılar uzak bölgelerde genellikle pahalı ya da bulunamaz.",
        ],
        [
          "The example of Latin American countries shows that ----.",
          [
            "vaccinating dogs can greatly reduce human rabies",
            "rabies cannot be controlled in rural areas",
            "dogs are no longer kept as pets in these countries",
            "human vaccines are more effective than dog vaccines",
            "children are no longer at risk anywhere in the world",
          ],
          "Latin Amerika ülkeleri köpekleri aşılama yaklaşımıyla insan kuduzunu neredeyse ortadan kaldırmıştır.",
        ],
      ],
    },
    {
      text:
        "Physical activity is often promoted as a way to lose weight, but its benefits extend far beyond weight control. Regular exercise strengthens the heart, improves the body's sensitivity to insulin and helps maintain bone density. It also has powerful effects on the brain. Studies have shown that people who exercise regularly have a lower risk of depression and dementia, and that even a single session of exercise can improve mood and concentration. Despite these benefits, more than a quarter of adults worldwide do not meet the recommended level of 150 minutes of moderate activity per week. Researchers suggest that small changes, such as walking or cycling instead of driving short distances, can make a meaningful difference.",
      questions: [
        [
          "The writer's main point in the passage is that physical activity ----.",
          [
            "has many health benefits besides helping people lose weight",
            "is the only effective way to lose weight quickly",
            "is harmful to people who suffer from depression",
            "should be limited to 150 minutes per week",
            "has little effect on the brain and mental health",
          ],
          "Parça egzersizin faydalarının kilo kontrolünün çok ötesine geçtiğini vurgular.",
        ],
        [
          "According to the passage, even one session of exercise can ----.",
          [
            "improve a person's mood and ability to concentrate",
            "prevent dementia completely in older adults",
            "replace the need for insulin in diabetic patients",
            "increase bone density within a single day",
            "cure depression in most patients",
          ],
          "Çalışmalar tek bir egzersiz seansının bile ruh halini ve konsantrasyonu iyileştirebileceğini göstermiştir.",
        ],
        [
          "The researchers' suggestion at the end of the passage implies that ----.",
          [
            "everyday habits can help people become more active",
            "only professional athletes benefit from exercise",
            "driving short distances is good for health",
            "people should exercise for several hours a day",
            "cycling is more dangerous than driving",
          ],
          "Kısa mesafelerde araba yerine yürüme ya da bisiklet gibi küçük değişikliklerin fark yaratabileceği önerisi, gündelik alışkanlıkların daha aktif olmaya yardım edebileceğini ima eder.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Fever is often seen as something that must be treated immediately. ---- By raising the body's temperature, it makes it harder for bacteria and viruses to multiply. For this reason, doctors usually recommend treating a fever only if it is very high or makes the patient very uncomfortable.",
      [
        "In fact, it is one of the body's natural defences against infection.",
        "Thermometers are used to measure body temperature accurately.",
        "Children often catch colds during the winter months at school.",
        "Many medicines for fever can be bought without a prescription.",
        "The normal body temperature is around thirty-seven degrees.",
      ],
      "Sonraki cümle ateşin mikropların çoğalmasını zorlaştırdığını söyler; boşluk ateşin doğal bir savunma olduğunu belirten 'In fact' cümlesini gerektirir.",
    ],
    [
      "Loneliness among older people has become a major public health concern. ---- In the United Kingdom, for example, a government minister for loneliness was appointed in 2018 to coordinate efforts across different departments.",
      [
        "Some countries have started to treat it as a policy priority.",
        "Many older people enjoy gardening and reading in their free time.",
        "Life expectancy has increased in most countries over the last century.",
        "Older people often visit their doctors more frequently than others.",
        "Some care homes organise weekly music and art activities.",
      ],
      "İngiltere örneği bir hükümet politikasıdır; boşluk bazı ülkelerin konuyu politika önceliği yaptığını söylemelidir.",
    ],
    [
      "---- When the blood sugar level rises after a meal, the pancreas releases insulin, which allows cells to absorb glucose. In people with type 1 diabetes, the cells that produce insulin have been destroyed.",
      [
        "Insulin is a hormone that plays a key role in controlling blood sugar.",
        "Diabetes is becoming more common in many parts of the world.",
        "A balanced diet includes fruit, vegetables and whole grains.",
        "The pancreas is located behind the stomach in the abdomen.",
        "Some people with diabetes need to check their feet regularly.",
      ],
      "Paragraf insülinin kan şekerini nasıl düzenlediğini anlatır; açılış cümlesi insülini kan şekerini kontrol eden bir hormon olarak tanıtmalıdır.",
    ],
    [
      "Many people believe that cold weather causes colds. ---- Colds are more common in winter mainly because people spend more time indoors, where viruses pass easily from person to person.",
      [
        "However, colds are actually caused by viruses, not by low temperatures.",
        "Winter clothes such as coats and scarves help keep the body warm.",
        "Some people take vitamin C supplements during the winter months.",
        "Children usually catch more colds than adults each year.",
        "Hot drinks can make people with sore throats feel more comfortable.",
      ],
      "Sonraki cümle soğuk algınlığının kışın neden yaygın olduğunu açıklar; boşluk yaygın inanca karşı virüslerin gerçek neden olduğunu söyleyen 'However' cümlesini gerektirir.",
    ],
    [
      "Hospitals produce large amounts of waste, some of which is hazardous. ---- If this material is not handled properly, it can spread infections and contaminate soil and water.",
      [
        "This includes used needles, contaminated dressings and expired medicines.",
        "Many hospitals have large car parks for visitors and staff.",
        "Hospital food is often prepared in a central kitchen.",
        "Some hospitals have recently installed solar panels on their roofs.",
        "Nurses and doctors usually work in shifts of twelve hours.",
      ],
      "'this material' ifadesi tehlikeli atık örneklerini gerektirir: kullanılmış iğneler, kirli pansumanlar ve son kullanma tarihi geçmiş ilaçlar.",
    ],
    [
      "Caffeine is the most widely used stimulant in the world. In moderate amounts, it can improve alertness and concentration. ---- People who drink coffee late in the day, for example, may find it difficult to fall asleep.",
      [
        "In larger amounts or at the wrong time, however, it can have unwanted effects.",
        "Coffee was first drunk in Ethiopia and Yemen centuries ago.",
        "Tea also contains caffeine, though usually in smaller amounts.",
        "Many people add milk and sugar to their coffee.",
        "Some energy drinks are very popular among students.",
      ],
      "Son cümle istenmeyen bir etki örneği verir; boşluk yüksek miktarın ya da yanlış zamanın olumsuz etkilerine geçişi sağlamalıdır.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Kidney stones are hard deposits that form inside the kidneys.",
        "They can cause severe pain when they move through the urinary tract.",
        "Many people enjoy swimming in the sea during the summer.",
        "Drinking plenty of water is one of the best ways to prevent them.",
        "Large stones may need to be broken up or removed surgically.",
      ],
      odd: 2,
      why: "Parça böbrek taşlarının oluşumunu, belirtilerini ve tedavisini anlatır. Yazın denizde yüzmekten söz eden III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dental decay is one of the most common health problems in the world.",
        "It is caused by bacteria that turn sugar into acid, which damages the teeth.",
        "Brushing twice a day with fluoride toothpaste helps prevent it.",
        "Reducing the amount of sugar in the diet is also important.",
        "Many famous artists painted portraits with their mouths closed.",
      ],
      odd: 4,
      why: "Parça diş çürüğünün nedenlerini ve önlenmesini anlatır. Ünlü ressamların portrelerinden söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Stroke occurs when the blood supply to part of the brain is interrupted.",
        "Rice is a staple food for more than half of the world's population.",
        "Without oxygen, brain cells begin to die within minutes.",
        "Common signs include sudden weakness on one side of the body and difficulty speaking.",
        "Rapid treatment can greatly reduce long-term disability.",
      ],
      odd: 1,
      why: "Parça inmenin nedenini, belirtilerini ve tedavisini anlatır. Pirincin temel besin olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Breastfeeding provides important benefits for both mothers and babies.",
        "Breast milk contains antibodies that help protect babies against infections.",
        "Many shops now sell organic baby clothes.",
        "Babies who are breastfed have lower rates of ear infections and diarrhoea.",
        "Mothers who breastfeed also have a lower risk of some cancers.",
      ],
      odd: 2,
      why: "Parça emzirmenin anne ve bebek için faydalarını sıralar. Organik bebek giysilerinden söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Osteoporosis is a condition in which bones become weak and fragile.",
        "It is most common in older women after menopause.",
        "People with osteoporosis can break a bone from a minor fall.",
        "The Eiffel Tower was built for the 1889 World's Fair.",
        "Calcium, vitamin D and weight-bearing exercise can help protect bones.",
      ],
      odd: 3,
      why: "Parça osteoporozu ve korunma yollarını anlatır. Eyfel Kulesi'nden söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Social prescribing is a new approach in primary care.",
        "Instead of medicine, doctors refer patients to activities such as gardening clubs or art classes.",
        "The aim is to reduce loneliness and improve well-being.",
        "Early studies suggest that it may reduce the number of visits to doctors.",
        "Many doctors drive to work every morning.",
      ],
      odd: 4,
      why: "Parça sosyal reçete uygulamasını ve olası faydalarını anlatır. Doktorların işe arabayla gittiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
