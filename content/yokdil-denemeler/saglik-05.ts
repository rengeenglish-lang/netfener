import type { YokdilDeneme } from "./types";

export const SAGLIK_05: YokdilDeneme = {
  no: 5,
  field: "saglik",
  vocab: [
    [
      "Regular hand washing is one of the simplest ways to ---- the spread of infections in hospitals.",
      ["prevent", "encourage", "accelerate", "ignore", "diagnose"],
      "El yıkamanın amacı enfeksiyonların yayılmasını 'önlemek'tir (prevent); 'encourage' ve 'accelerate' anlamın tersidir.",
    ],
    [
      "High blood pressure is often called a ---- killer because many people have no symptoms until they suffer a heart attack or stroke.",
      ["silent", "noisy", "harmless", "rare", "visible"],
      "Belirti vermeden ilerleyen hastalık için 'sessiz' (silent) nitelemesi kullanılır.",
    ],
    [
      "The patient's condition ---- rapidly after she was given the new antibiotic.",
      ["improved", "worsened", "hesitated", "disappeared", "remained"],
      "Yeni antibiyotikten sonra beklenen olumlu değişim durumun 'iyileşmesi'dir (improved).",
    ],
    [
      "Doctors advise patients with diabetes to ---- sugary drinks and processed snacks.",
      ["cut down on", "look forward to", "make up for", "take after", "come across"],
      "Diyabet hastalarına şekerli içecekleri 'azaltmaları' (cut down on) önerilir.",
    ],
    [
      "Exposure to air pollution has been ---- linked to higher rates of asthma in children.",
      ["consistently", "rarely", "hardly", "accidentally", "barely"],
      "Hava kirliliği ile astım arasındaki bağlantının 'tutarlı biçimde' (consistently) gösterildiği anlatılır.",
    ],
    [
      "The early symptoms of the disease are often ---- and easily mistaken for normal signs of ageing.",
      ["subtle", "dramatic", "painful", "obvious", "severe"],
      "Yaşlanma belirtileriyle kolayca karıştırılan belirtiler 'belli belirsiz, ince' (subtle) olmalıdır.",
    ],
  ],
  grammar: [
    [
      "By the time the ambulance arrived, the patient ---- consciousness.",
      ["had lost", "has lost", "loses", "will lose", "was losing"],
      "Ambulansın geldiği geçmiş andan önce tamamlanmış eylem Past Perfect ile anlatılır: 'had lost'.",
    ],
    [
      "If the virus ---- to mutate, existing vaccines might become less effective.",
      ["were", "is", "had been", "would be", "will be"],
      "'might become' ile birlikte varsayımsal Type 2 koşul kullanılır: 'If the virus were to mutate'.",
    ],
    [
      "Patients ---- immune systems are weakened are more vulnerable to serious infections.",
      ["whose", "who", "which", "whom", "that"],
      "Hastaların bağışıklık sistemlerinden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- the success of the vaccination campaign, measles has almost disappeared from the region.",
      ["Thanks to", "Despite", "Instead of", "Regardless of", "In spite of"],
      "Aşı kampanyasının başarısı, kızamığın neredeyse yok olmasının nedenidir: 'Thanks to'.",
    ],
    [
      "The researchers wanted to find out how much sleep the participants ---- each night.",
      ["got", "did they get", "do they get", "they getting", "had they got"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'how much sleep the participants got'.",
    ],
    [
      "Only when the patient's symptoms worsened ---- to the hospital.",
      ["was she taken", "she was taken", "she took", "took she", "has she taken"],
      "'Only when …' cümle başında olduğunda ana cümle devrik olur: 'was she taken'.",
    ],
    [
      "People with high blood pressure should avoid ---- too much salt.",
      ["eating", "to eat", "eat", "eaten", "to eating"],
      "'avoid' fiili '-ing' ister: 'avoid eating'.",
    ],
    [
      "The drug, ---- in the 1950s, is still widely used to treat certain types of infection.",
      ["developed", "developing", "which developed", "to develop", "having developing"],
      "İlaç geliştirilen bir şeydir; edilgen anlamlı geçmiş ortaç gerekir: 'developed in the 1950s'.",
    ],
    [
      "It is recommended that pregnant women ---- regular check-ups throughout their pregnancy.",
      ["have", "has", "had", "will have", "having"],
      "'It is recommended that' sonrası subjunctive (yalın fiil) kullanılır: 'pregnant women have'.",
    ],
    [
      "The hospital treated more than two hundred patients, most of ---- had breathing difficulties.",
      ["whom", "who", "them", "which", "they"],
      "'most of' sonrasında insanlara atıf yapan nesne hâlindeki ilgi zamiri 'whom' gerekir.",
    ],
    [
      "---- antibiotics are used correctly, bacteria will continue to develop resistance.",
      ["Unless", "Because", "Although", "Since", "As soon as"],
      "Antibiyotikler doğru kullanılmadıkça direnç gelişmeye devam edecektir: 'Unless'.",
    ],
    [
      "The new test is expected ---- doctors to detect the disease much earlier.",
      ["to help", "helping", "help", "helped", "to helping"],
      "'be expected to do' kalıbı mastar ister.",
    ],
    [
      "The symptoms were ---- mild that many patients did not realise they were infected.",
      ["so", "such", "too", "very", "enough"],
      "Sıfat (mild) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By 2050, the number of people living with dementia ---- to more than 150 million worldwide.",
      ["will have risen", "has risen", "rose", "had risen", "rises"],
      "'By 2050' gelecekte tamamlanmış olacak bir durumu bildirir: Future Perfect 'will have risen'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1840s, the Hungarian doctor Ignaz Semmelweis noticed that women who gave birth in one ward of a Vienna hospital were far more likely to die of fever than those in another ward. He observed that doctors in the first ward often came directly from performing autopsies, {1} the second ward was staffed by midwives who did not. Semmelweis concluded that the doctors {2} carrying something harmful on their hands. When he required them to wash their hands in a chlorine solution, the death rate fell dramatically. {3}, his ideas were rejected by many of his colleagues, {4} found it difficult to accept that they themselves could be spreading disease. It was only years after his death, when scientists showed that germs cause infection, {5} Semmelweis was recognised as a pioneer of hygiene.",
      blanks: [
        [
          "(21) ----",
          ["whereas", "because", "unless", "so that", "as if"],
          "İki koğuş karşılaştırılır: birinde otopsiden gelen doktorlar, diğerinde ebeler: 'whereas'.",
        ],
        [
          "(22) ----",
          ["were", "had", "have", "would", "did"],
          "Geçmişte süren eylem Past Continuous ile anlatılır: 'were carrying'.",
        ],
        [
          "(23) ----",
          ["However", "Therefore", "Moreover", "For example", "In other words"],
          "Ölüm oranının düşmesine karşın fikirlerinin reddedilmesi beklenmedik bir durumdur: 'However'.",
        ],
        [
          "(24) ----",
          ["who", "which", "whose", "where", "what"],
          "'many of his colleagues' insanları niteler ve 'found' fiilinin öznesidir: 'who'.",
        ],
        [
          "(25) ----",
          ["that", "when", "which", "what", "where"],
          "'It was only … that …' vurgu yapısı 'that' ile tamamlanır.",
        ],
      ],
    },
    {
      text:
        "Smallpox was one of the most feared diseases in history, killing around thirty percent of those it infected. In the eighteenth century, the English doctor Edward Jenner noticed that milkmaids who had caught cowpox, a mild disease, seemed to be protected against smallpox. In 1796, he tested this idea by infecting a boy with material from a cowpox sore and later exposing him to smallpox. The boy did not become ill, {1} suggested that the cowpox had given him immunity. Jenner called the procedure 'vaccination', {2} the Latin word for cow, 'vacca'. The method spread rapidly, {3} it took nearly two centuries of effort before smallpox was finally eradicated. In 1980, the World Health Organization declared the disease eliminated, {4} it the first human disease {5} completely by vaccination.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "what", "whose", "that"],
          "Virgülden sonra önceki cümlenin tamamına (çocuğun hastalanmaması) atıf yapan 'which' gerekir.",
        ],
        [
          "(27) ----",
          ["from", "for", "with", "by", "about"],
          "'Vaccination' sözcüğü Latince 'vacca' sözcüğünden türetilmiştir: 'from'.",
        ],
        [
          "(28) ----",
          ["but", "so", "because", "unless", "since"],
          "Yöntemin hızla yayılmasına karşın hastalığın yok edilmesinin iki yüzyıl sürmesi zıtlıktır: 'but'.",
        ],
        [
          "(29) ----",
          ["making", "made", "to make", "makes", "having made by"],
          "Virgülden sonra önceki olayın sonucu etken ortaçla verilir: 'making it the first human disease'.",
        ],
        [
          "(30) ----",
          ["to be eliminated", "eliminating", "to eliminate", "eliminated it", "which eliminated"],
          "'the first … to be done' kalıbı mastar ister; hastalık ortadan kaldırılan şey olduğundan edilgen gerekir: 'to be eliminated'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Alzheimer's disease was first described more than a century ago, ----.",
      [
        "there is still no treatment that can stop its progress",
        "it is the most common form of dementia in older adults",
        "the disease was named after a German doctor",
        "it affects memory, language and behaviour",
        "many families care for patients at home",
      ],
      "'Although' zıtlık ister: hastalık bir asırdan uzun süre önce tanımlansa da ilerleyişini durduran tedavi hâlâ yoktur.",
    ],
    [
      "Many doctors now believe that vitamin D deficiency ----.",
      [
        "is far more common than was previously thought",
        "although sunlight is the main source of it",
        "which is measured with a simple blood test",
        "unless people eat more oily fish",
        "so that bones would become stronger",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'is far more common …' cümleyi tamamlar.",
    ],
    [
      "If the patient had sought medical help earlier, ----.",
      [
        "the infection might have been treated more easily",
        "the doctor examined him carefully at the hospital",
        "antibiotics will be prescribed for ten days",
        "the infection spread quickly to his lungs",
        "most patients recover within a few weeks",
      ],
      "Type 3 koşul cümlesi 'might have + V3' ile tamamlanır.",
    ],
    [
      "While most people infected with dengue have only mild symptoms, ----.",
      [
        "a small number develop a severe form that can be fatal",
        "the disease is spread by mosquitoes in tropical regions",
        "cases have increased in many countries in recent years",
        "there is no specific treatment for the infection",
        "it is common in cities as well as rural areas",
      ],
      "'While' iki karşıt durumu bağlar: çoğu hasta hafif belirtiler gösterirken küçük bir kısım ağır hastalık geçirir.",
    ],
    [
      "Many hospitals have introduced strict hygiene rules ----.",
      [
        "in order to reduce the spread of infections among patients",
        "which most nurses had been following for many decades",
        "although infections are more common in surgical wards",
        "because the number of hospitals has increased sharply",
        "unless patients bring their own soap and towels",
      ],
      "Kuralların amacı hastalar arasında enfeksiyonların yayılmasını azaltmaktır: 'in order to'.",
    ],
    [
      "Unless air quality in large cities improves, ----.",
      [
        "the number of people with respiratory diseases is likely to rise",
        "many cities were built near large industrial areas",
        "cars had been the main cause of pollution for years",
        "people often wear masks in crowded places",
        "trees are planted along many city streets",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: solunum yolu hastalığı olanların sayısı artacaktır.",
    ],
    [
      "Since the vaccine was introduced, ----.",
      [
        "the number of cases has fallen by more than ninety percent",
        "doctors had searched for a vaccine for many years",
        "the disease was common among young children",
        "the vaccine will be given to all newborn babies",
        "most cases occurred in rural areas",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'has fallen'.",
    ],
    [
      "Even though high blood pressure can be easily measured, ----.",
      [
        "millions of people are unaware that they have it",
        "it is measured in millimetres of mercury",
        "doctors use a special device to check it",
        "it increases the risk of heart disease",
        "it is more common in older adults",
      ],
      "'Even though' beklenmedik bir sonuç ister: kolayca ölçülebilmesine rağmen milyonlarca kişi yüksek tansiyonu olduğunu bilmez.",
    ],
    [
      "The earlier dementia is diagnosed, ----.",
      [
        "the more time patients and families have to plan for the future",
        "because memory tests are widely available",
        "although some symptoms are difficult to notice",
        "which depends on the patient's age",
        "since doctors use brain scans",
      ],
      "'The earlier …, the more …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As the population of the region has aged, ----.",
      [
        "the demand for long-term care has grown rapidly",
        "most families had lived in large houses",
        "hospitals were built in the nineteenth century",
        "older people enjoy walking in the park",
        "young people are often very healthy",
      ],
      "'As' paralel bir değişim bildirir: nüfus yaşlandıkça uzun süreli bakım talebi hızla artmıştır.",
    ],
    [
      "Scarcely had the doctors begun the operation ----.",
      [
        "when the patient's heart rate dropped suddenly",
        "than it was a great success",
        "because the patient was very ill",
        "so the nurses prepared the room",
        "although it took several hours",
      ],
      "'Scarcely … when …' kalıbı 'when' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Semmelweis's ideas were largely ignored during his lifetime, although they later saved countless lives.",
      [
        "Semmelweis'ın fikirleri yaşadığı dönemde büyük ölçüde görmezden gelindi, oysa daha sonra sayısız hayat kurtardı.",
        "Semmelweis'ın fikirleri yaşadığı dönemde büyük ilgi gördü ve hemen uygulandı.",
        "Semmelweis, sayısız hayatı kurtardıktan sonra fikirlerinden vazgeçti.",
        "Semmelweis'ın fikirleri hiçbir zaman uygulamaya konmadı.",
        "Semmelweis'ın yaşadığı dönemde pek çok doktor onun fikirlerini geliştirdi.",
      ],
      "'were largely ignored during his lifetime' 'yaşadığı dönemde büyük ölçüde görmezden gelindi' demektir.",
    ],
    [
      "People who spend little time outdoors are at greater risk of vitamin D deficiency.",
      [
        "Açık havada az zaman geçiren kişiler D vitamini eksikliği açısından daha büyük risk altındadır.",
        "Açık havada çok zaman geçiren kişilerde D vitamini eksikliği daha sık görülür.",
        "D vitamini eksikliği olan kişiler açık havada vakit geçirmekten kaçınır.",
        "D vitamini, yalnızca kapalı alanlarda çalışan kişiler için gereklidir.",
        "Açık havada geçirilen zamanın D vitamini düzeyine etkisi yoktur.",
      ],
      "'are at greater risk of' '… açısından daha büyük risk altındadır' karşılığıdır.",
    ],
    [
      "No other disease has been eradicated as successfully as smallpox.",
      [
        "Hiçbir hastalık çiçek hastalığı kadar başarılı bir şekilde ortadan kaldırılamamıştır.",
        "Çiçek hastalığı, ortadan kaldırılması en zor hastalık olmuştur.",
        "Diğer hastalıklar çiçek hastalığından daha başarılı bir şekilde yok edilmiştir.",
        "Çiçek hastalığı hiçbir zaman tamamen ortadan kaldırılamamıştır.",
        "Pek çok hastalık çiçek hastalığıyla aynı anda yok edilmiştir.",
      ],
      "'No other disease … as successfully as smallpox' 'hiçbir hastalık çiçek hastalığı kadar başarılı bir şekilde' demektir.",
    ],
    [
      "Fine particles in polluted air can penetrate deep into the lungs and even enter the bloodstream.",
      [
        "Kirli havadaki ince parçacıklar akciğerlerin derinlerine işleyebilir ve hatta kan dolaşımına girebilir.",
        "Kirli havadaki büyük parçacıklar yalnızca burunda tutulur.",
        "İnce parçacıklar akciğerlere ulaşmadan kan dolaşımından temizlenir.",
        "Kan dolaşımındaki parçacıklar havayı kirletir.",
        "Kirli hava akciğerlerin yalnızca dış yüzeyini etkiler.",
      ],
      "'can penetrate deep into the lungs' 'akciğerlerin derinlerine işleyebilir', 'even enter the bloodstream' 'hatta kan dolaşımına girebilir' demektir.",
    ],
    [
      "Patients are often reluctant to take medication for a condition that causes them no discomfort.",
      [
        "Hastalar, kendilerine hiçbir rahatsızlık vermeyen bir durum için çoğu zaman ilaç almaya isteksizdir.",
        "Hastalar, rahatsızlık veren durumlar için ilaç almayı reddeder.",
        "İlaçlar, hastalarda çoğu zaman yeni rahatsızlıklara yol açar.",
        "Hastalar, ilaç almadan önce rahatsızlık hissetmeyi bekler.",
        "Rahatsızlık vermeyen durumlar için ilaç bulunmamaktadır.",
      ],
      "'are often reluctant to take medication' 'çoğu zaman ilaç almaya isteksizdir' demektir.",
    ],
    [
      "The mosquito that spreads dengue thrives in urban areas, where it breeds in small containers of standing water.",
      [
        "Dang hummasını yayan sivrisinek, durgun su bulunan küçük kaplarda üreyebildiği kentsel alanlarda iyi gelişir.",
        "Dang hummasını yayan sivrisinek yalnızca kırsal bölgelerdeki göllerde ürer.",
        "Kentsel alanlardaki durgun su dang hummasını tedavi etmek için kullanılır.",
        "Sivrisinekler kentsel alanlarda yaşayamadığı için dang humması kırsalda görülür.",
        "Küçük su kapları, sivrisineklerin kentlere girmesini engeller.",
      ],
      "'thrives in urban areas, where it breeds in small containers of standing water' 'durgun su bulunan küçük kaplarda ürediği kentsel alanlarda iyi gelişir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Alzheimer hastalığı, demansın en yaygın biçimidir.",
      [
        "Alzheimer's disease is the most common form of dementia.",
        "Alzheimer's disease is the rarest form of dementia.",
        "Dementia is a common symptom of many diseases except Alzheimer's.",
        "Alzheimer's disease is not related to dementia.",
        "Most forms of dementia can be cured easily.",
      ],
      "'en yaygın biçimi' 'the most common form' karşılığıdır.",
    ],
    [
      "Güneş ışığına maruz kalmak, vücudun D vitamini üretmesini sağlar.",
      [
        "Exposure to sunlight allows the body to produce vitamin D.",
        "Exposure to sunlight prevents the body from producing vitamin D.",
        "Vitamin D protects the body from sunlight.",
        "The body produces sunlight when it has enough vitamin D.",
        "Vitamin D is found only in sunlight.",
      ],
      "'maruz kalmak' 'exposure', 'üretmesini sağlar' 'allows … to produce' karşılığıdır.",
    ],
    [
      "Yüksek tansiyon, kalp krizi ve felç riskini önemli ölçüde artırır.",
      [
        "High blood pressure significantly increases the risk of heart attack and stroke.",
        "High blood pressure slightly reduces the risk of heart attack and stroke.",
        "Heart attacks and strokes are the main causes of high blood pressure.",
        "High blood pressure has no connection with strokes.",
        "People with low blood pressure often have heart attacks.",
      ],
      "'önemli ölçüde artırır' 'significantly increases' karşılığıdır.",
    ],
    [
      "Hava kirliliğinin her yıl milyonlarca erken ölüme yol açtığı tahmin edilmektedir.",
      [
        "Air pollution is estimated to cause millions of premature deaths every year.",
        "Air pollution is known to cause only a few deaths every year.",
        "Millions of people die every year while trying to reduce air pollution.",
        "Premature deaths have caused air pollution to increase.",
        "Air pollution was estimated to be harmless in recent years.",
      ],
      "'tahmin edilmektedir' 'is estimated', 'erken ölüme yol açtığı' 'to cause … premature deaths' karşılığıdır.",
    ],
    [
      "Aşılar, bağışıklık sistemini belirli hastalıklarla savaşmaya hazırlar.",
      [
        "Vaccines prepare the immune system to fight specific diseases.",
        "Vaccines weaken the immune system against specific diseases.",
        "The immune system produces vaccines to fight diseases.",
        "Specific diseases prepare the immune system for vaccines.",
        "Vaccines are effective only against general infections.",
      ],
      "'savaşmaya hazırlar' 'prepare … to fight', 'belirli hastalıklar' 'specific diseases' karşılığıdır.",
    ],
    [
      "Dang humması vakaları, son yirmi yılda dünya genelinde keskin bir artış göstermiştir.",
      [
        "Cases of dengue fever have risen sharply worldwide over the past two decades.",
        "Cases of dengue fever have fallen sharply worldwide over the past two decades.",
        "Dengue fever was discovered twenty years ago.",
        "Dengue fever cases will rise sharply in the next twenty years.",
        "Dengue fever is found only in one region of the world.",
      ],
      "'keskin bir artış göstermiştir' 'have risen sharply', 'son yirmi yılda' 'over the past two decades' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Alzheimer's disease is the most common cause of dementia, a general term for a decline in memory and other mental abilities that is severe enough to interfere with daily life. The disease is associated with the build-up of abnormal proteins in the brain, which form structures known as plaques and tangles and gradually damage nerve cells. Early symptoms usually include difficulty remembering recent events, while later stages may bring confusion, changes in personality and problems with speech. Age is the greatest known risk factor, but the disease is not a normal part of ageing. Research suggests that physical activity, a healthy diet, social engagement and controlling blood pressure may reduce the risk, although these measures cannot guarantee protection.",
      questions: [
        [
          "According to the passage, dementia is ----.",
          [
            "a general term for a serious decline in mental abilities",
            "a type of protein found in healthy brains",
            "the only cause of memory problems in older adults",
            "a normal and unavoidable part of ageing",
            "a disease that affects only young people",
          ],
          "Demans, günlük yaşamı etkileyecek kadar ciddi bir bellek ve zihinsel yetenek kaybı için kullanılan genel bir terimdir.",
        ],
        [
          "It is stated in the passage that the early symptoms of Alzheimer's disease usually include ----.",
          [
            "difficulty remembering recent events",
            "sudden changes in personality",
            "serious problems with speech",
            "loss of physical strength",
            "high blood pressure",
          ],
          "Erken belirtiler genellikle yakın zamanda yaşanan olayları hatırlamakta güçlüğü içerir.",
        ],
        [
          "The passage suggests that physical activity and a healthy diet ----.",
          [
            "may lower the risk but cannot guarantee protection",
            "can completely cure the disease in its early stages",
            "have no effect on the risk of Alzheimer's disease",
            "are more important than age as risk factors",
            "cause the build-up of abnormal proteins",
          ],
          "Araştırmalar bu önlemlerin riski azaltabileceğini, ancak korunmayı garanti edemeyeceğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Vitamin D plays an essential role in helping the body absorb calcium, which is needed for strong bones. Unlike most vitamins, it can be produced by the skin when it is exposed to sunlight, and only a few foods, such as oily fish and egg yolks, contain significant amounts. Severe deficiency in children can cause rickets, a condition in which bones become soft and deformed, while in adults it can lead to weak bones and muscle pain. Deficiency is surprisingly common, even in sunny countries, because many people spend most of their time indoors or cover their skin. People with darker skin and older adults are also at higher risk, since they produce less vitamin D from the same amount of sunlight.",
      questions: [
        [
          "According to the passage, vitamin D differs from most vitamins in that ----.",
          [
            "the body can make it when the skin is exposed to sunlight",
            "it is found in almost all types of food",
            "it is not needed for healthy bones",
            "it can only be obtained from supplements",
            "it is produced by oily fish in the body",
          ],
          "Çoğu vitaminin aksine D vitamini, deri güneş ışığına maruz kaldığında vücut tarafından üretilebilir.",
        ],
        [
          "Rickets is described in the passage as a condition in which ----.",
          [
            "children's bones become soft and deformed",
            "adults suffer from severe muscle pain",
            "the skin becomes darker",
            "the body absorbs too much calcium",
            "people are unable to go outdoors",
          ],
          "Raşitizm, çocuklarda kemiklerin yumuşayıp şekil bozukluğuna uğradığı bir durumdur.",
        ],
        [
          "According to the passage, deficiency is common even in sunny countries because ----.",
          [
            "many people stay indoors or cover their skin",
            "sunlight in these countries is too weak",
            "people there eat large amounts of oily fish",
            "vitamin D is destroyed by high temperatures",
            "most people there have very pale skin",
          ],
          "Güneşli ülkelerde bile insanlar zamanlarının çoğunu kapalı alanlarda geçirdiği ya da derilerini örttüğü için eksiklik yaygındır.",
        ],
      ],
    },
    {
      text:
        "Air pollution is now recognised as one of the greatest environmental threats to human health. The most dangerous pollutants are fine particles less than 2.5 micrometres in diameter, produced mainly by vehicles, power plants and the burning of wood and coal. Because they are so small, these particles can travel deep into the lungs and even pass into the bloodstream. Long-term exposure has been linked not only to respiratory diseases such as asthma and lung cancer, but also to heart attacks, strokes and, according to some recent studies, dementia. The World Health Organization estimates that air pollution contributes to several million premature deaths each year. Although pollution affects everyone, the burden falls most heavily on people in low- and middle-income countries.",
      questions: [
        [
          "According to the passage, fine particles are particularly dangerous because ----.",
          [
            "they are small enough to reach deep into the lungs and the blood",
            "they are produced only by large industrial power plants",
            "they cause immediate death after short exposure",
            "they can be seen clearly in polluted air",
            "they make it difficult for plants to grow",
          ],
          "Çok küçük oldukları için ince parçacıklar akciğerlerin derinlerine ulaşabilir ve kan dolaşımına geçebilir.",
        ],
        [
          "It is stated in the passage that long-term exposure to air pollution has been linked to ----.",
          [
            "both respiratory and cardiovascular diseases",
            "respiratory diseases only",
            "improvements in lung function",
            "lower rates of heart attacks",
            "infections caused by bacteria",
          ],
          "Uzun süreli maruziyet astım ve akciğer kanserinin yanı sıra kalp krizi ve felçle de ilişkilendirilmiştir.",
        ],
        [
          "We can understand from the last sentence that ----.",
          [
            "people in poorer countries suffer most from air pollution",
            "air pollution affects only low-income countries",
            "wealthy countries have completely solved the problem",
            "middle-income countries produce no pollution",
            "the health effects of pollution are the same everywhere",
          ],
          "Son cümleye göre kirlilik herkesi etkilese de yükü en çok düşük ve orta gelirli ülkelerdeki insanlar taşır.",
        ],
      ],
    },
    {
      text:
        "Hypertension, or high blood pressure, affects more than a billion people worldwide and is a leading cause of heart disease, stroke and kidney failure. It occurs when the force of blood against the walls of the arteries is consistently too high, forcing the heart to work harder. In most cases, there is no single cause; instead, the condition develops over many years as a result of factors such as ageing, genetics, a diet high in salt, lack of exercise and excess weight. Because it rarely causes noticeable symptoms, many people remain undiagnosed until they experience a serious complication. Regular blood pressure checks are therefore strongly recommended for adults. Fortunately, the condition can usually be controlled through lifestyle changes and inexpensive medication.",
      questions: [
        [
          "According to the passage, hypertension occurs when ----.",
          [
            "the pressure of blood against the artery walls is persistently too high",
            "the heart suddenly stops beating for a short time",
            "the kidneys produce too much salt",
            "the arteries become wider than normal",
            "the body does not have enough blood",
          ],
          "Hipertansiyon, kanın atardamar duvarlarına uyguladığı kuvvetin sürekli olarak çok yüksek olmasıdır.",
        ],
        [
          "It can be inferred from the passage that many people are unaware of their hypertension because ----.",
          [
            "it usually does not cause obvious symptoms",
            "doctors rarely measure blood pressure",
            "it develops very suddenly in young people",
            "medication for it is very expensive",
            "it affects only a small number of people",
          ],
          "Nadiren fark edilir belirti verdiği için pek çok kişi ciddi bir komplikasyon yaşayana kadar teşhis edilmez.",
        ],
        [
          "The passage states that hypertension can usually be controlled by ----.",
          [
            "changes in lifestyle and affordable medicines",
            "surgery on the arteries and kidneys",
            "avoiding regular blood pressure checks",
            "eating more salt and less fruit",
            "complete rest for several months",
          ],
          "Durum genellikle yaşam tarzı değişiklikleri ve ucuz ilaçlarla kontrol altına alınabilir.",
        ],
      ],
    },
    {
      text:
        "Dengue is a viral infection transmitted by Aedes mosquitoes, which breed in small containers of standing water such as discarded tyres, flowerpots and buckets. Once found mainly in a few tropical regions, it has spread to more than a hundred countries, and the number of reported cases has increased dramatically in recent decades. Factors behind this rise include urbanisation, international travel and climate change, which allows the mosquitoes to survive in areas that were previously too cold. Most infections cause only mild, flu-like symptoms, but a small proportion develop into severe dengue, which can cause internal bleeding and organ failure. There is no specific antiviral treatment, so prevention focuses on controlling mosquito populations and protecting people from bites.",
      questions: [
        [
          "According to the passage, Aedes mosquitoes breed ----.",
          [
            "in small containers of standing water",
            "only in large lakes and rivers",
            "in dry, sandy areas",
            "inside houses with air conditioning",
            "in fast-flowing streams",
          ],
          "Aedes sivrisinekleri lastik, saksı ve kova gibi küçük durgun su kaplarında ürer.",
        ],
        [
          "Climate change has contributed to the spread of dengue by ----.",
          [
            "allowing mosquitoes to survive in previously colder areas",
            "reducing the amount of standing water in cities",
            "making the virus less dangerous",
            "increasing the number of international flights",
            "killing mosquitoes in tropical regions",
          ],
          "İklim değişikliği sivrisineklerin daha önce çok soğuk olan bölgelerde yaşamasına olanak tanır.",
        ],
        [
          "Prevention of dengue focuses on mosquito control because ----.",
          [
            "there is no specific antiviral treatment for the disease",
            "most infections are very severe",
            "the disease cannot spread between countries",
            "mosquitoes are easy to remove from cities",
            "vaccines are available to everyone",
          ],
          "Özel bir antiviral tedavi olmadığı için önleme, sivrisinek kontrolüne ve ısırıklardan korunmaya odaklanır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Before the discovery of anaesthesia in the nineteenth century, surgery was an extremely painful experience. ---- With the introduction of ether and chloroform, however, surgeons could perform longer and more complex operations.",
      [
        "Operations had to be performed as quickly as possible, often in a few minutes.",
        "Modern hospitals have many operating rooms.",
        "Some patients feel nervous before surgery.",
        "Nurses play an important role in hospitals.",
        "Many medicines are made from plants.",
      ],
      "'however' ile anestezi sonrasına geçilir; boşluk anestezi öncesi ameliyatların çok hızlı yapılmak zorunda olduğunu söylemelidir.",
    ],
    [
      "Many people believe that cracking their knuckles causes arthritis. ---- In one case, a doctor cracked the knuckles of only one hand for more than sixty years and found no difference between his hands.",
      [
        "However, studies have found no evidence to support this belief.",
        "Arthritis is more common in older people.",
        "The human hand contains twenty-seven bones.",
        "Some people crack their knuckles when they are nervous.",
        "Doctors often examine patients' hands.",
      ],
      "Verilen örnek bu inancın yanlış olduğunu gösterir; boşluk çalışmaların inancı desteklemediğini söylemelidir.",
    ],
    [
      "---- For example, people who work night shifts have a higher risk of obesity, diabetes and heart disease.",
      [
        "Disrupting the body's natural daily rhythm can have serious effects on health.",
        "Many hospitals employ staff who work at night.",
        "Most people sleep for about eight hours.",
        "Some animals are active only at night.",
        "Coffee helps many people stay awake.",
      ],
      "'For example' ile verilen gece vardiyası örneği, vücudun doğal ritminin bozulmasının sağlığı etkilediğini söyleyen bir genelleme gerektirir.",
    ],
    [
      "Laughter has a number of benefits for physical health. ---- In addition, it can reduce stress hormones and strengthen the immune system.",
      [
        "It increases blood flow and helps the muscles relax.",
        "Comedy films are popular in many countries.",
        "Children laugh more often than adults.",
        "Some people laugh very loudly.",
        "Jokes are often difficult to translate.",
      ],
      "'In addition' ile ikinci bir yarar eklenir; boşlukta kahkahanın ilk fiziksel yararı yer almalıdır.",
    ],
    [
      "In many countries, the number of people who donate blood is falling. ---- As a result, hospitals sometimes have to postpone planned operations.",
      [
        "Blood banks therefore struggle to maintain adequate supplies.",
        "Blood is made up of red cells, white cells and plasma.",
        "The heart pumps blood around the body.",
        "Some people are afraid of needles.",
        "Blood types were discovered in 1901.",
      ],
      "'As a result' öncesinde ameliyatların ertelenmesine yol açan durum gerekir: kan bankalarının yeterli stok sağlayamaması.",
    ],
    [
      "Some doctors now prescribe activities such as gardening, walking groups or art classes to patients with mild depression. ---- Critics, however, point out that there is still limited evidence about which activities work best.",
      [
        "Supporters believe that social activities can improve mood and reduce the need for medication.",
        "Gardening is a popular hobby among older people.",
        "Art classes are often held in the evenings.",
        "Depression can affect people of any age.",
        "Many people walk to work every day.",
      ],
      "'Critics, however' öncesinde destekçilerin olumlu görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Insulin is a hormone that regulates the level of sugar in the blood.",
        "It is produced by cells in the pancreas.",
        "Before its discovery in 1921, type 1 diabetes was almost always fatal.",
        "Many people enjoy eating sweets after dinner.",
        "Today, patients can control the disease with regular insulin injections.",
      ],
      odd: 3,
      why: "Parça insülini ve diyabet tedavisini anlatır. Yemekten sonra tatlı yemekten söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Ear infections are very common in young children.",
        "They often occur after a cold or a throat infection.",
        "Symptoms include ear pain, fever and difficulty sleeping.",
        "Most infections clear up on their own within a few days.",
        "Some children learn to swim at a very early age.",
      ],
      odd: 4,
      why: "Parça çocuklarda kulak enfeksiyonlarını anlatır. Çocukların erken yaşta yüzme öğrenmesinden söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dehydration occurs when the body loses more water than it takes in.",
        "Hospitals are usually very busy in winter.",
        "It can be caused by heat, exercise, vomiting or diarrhoea.",
        "Early signs include thirst, headache and dark urine.",
        "Older adults and young children are especially at risk.",
      ],
      odd: 1,
      why: "Parça vücudun su kaybını anlatır. Hastanelerin kışın yoğun olmasından söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Migraine is more than just a bad headache.",
        "Attacks can last for several hours or even days.",
        "Many patients also experience nausea and sensitivity to light.",
        "The ancient Greeks built many temples.",
        "Certain foods, stress and lack of sleep can trigger an attack.",
      ],
      odd: 3,
      why: "Parça migreni anlatır. Antik Yunan tapınaklarından söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Lyme disease is spread by the bite of infected ticks.",
        "Ticks are commonly found in forests and areas with long grass.",
        "An early sign of infection is often a red rash around the bite.",
        "If treated early with antibiotics, most patients recover completely.",
        "Forests cover about a third of the Earth's land surface.",
      ],
      odd: 4,
      why: "Parça Lyme hastalığını anlatır. Ormanların kapladığı alandan söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Scurvy is a disease caused by a lack of vitamin C.",
        "It was once common among sailors on long sea voyages.",
        "Sailors often spent months without fresh fruit or vegetables.",
        "Many ships were made of wood in those days.",
        "The disease was eventually prevented by giving sailors citrus fruits such as lemons.",
      ],
      odd: 3,
      why: "Parça iskorbüt hastalığını anlatır. Gemilerin ahşaptan yapıldığını söyleyen IV. cümle akışı bozar.",
    },
  ],
};
