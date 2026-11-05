import type { YokdilDeneme } from "./types";

export const SAGLIK_04: YokdilDeneme = {
  no: 4,
  field: "saglik",
  vocab: [
    [
      "Regular check-ups can help doctors ---- health problems before they become serious.",
      ["identify", "conceal", "worsen", "imitate", "celebrate"],
      "Düzenli kontrollerin amacı sorunları ciddileşmeden 'tespit etmek'tir (identify). 'conceal' ve 'worsen' anlamı tersine çevirir.",
    ],
    [
      "The infection spread ---- through the hospital ward, affecting twenty patients in two days.",
      ["rapidly", "politely", "rarely", "silently", "gently"],
      "İki günde yirmi hastayı etkileyen enfeksiyon 'hızla' (rapidly) yayılmıştır. 'rarely' ve 'gently' bağlamla çelişir.",
    ],
    [
      "Patients with a ---- immune system should avoid contact with people who have infections.",
      ["compromised", "robust", "flexible", "reliable", "generous"],
      "Enfeksiyonlu kişilerden uzak durması gereken hastaların bağışıklık sistemi 'zayıflamış' (compromised) olmalıdır. 'robust' (güçlü) anlamı tersine çevirir.",
    ],
    [
      "Many people find it difficult to ---- sugary snacks, even when they know they are unhealthy.",
      ["cut down on", "look forward to", "get on with", "make up for", "come across"],
      "Sağlıksız olduğunu bildikleri atıştırmalıkları 'azaltmak' (cut down on) zordur. 'look forward to' (dört gözle beklemek) anlamsızdır.",
    ],
    [
      "Vitamin C deficiency, which causes a disease called scurvy, was once ---- among sailors on long voyages.",
      ["common", "unknown", "harmless", "artificial", "pleasant"],
      "Uzun deniz yolculuklarında taze meyve bulunmadığı için iskorbüt denizciler arasında 'yaygın'dı (common).",
    ],
    [
      "The surgeon made a small ---- in the patient's abdomen to remove the appendix.",
      ["incision", "decision", "invitation", "addition", "prescription"],
      "Apandisi çıkarmak için karında yapılan küçük kesi 'incision'dır. 'decision' ve 'prescription' bağlama uymaz.",
    ],
  ],
  grammar: [
    [
      "The number of people with type 2 diabetes ---- dramatically over the past thirty years.",
      ["has increased", "increased", "had increased", "increases", "will increase"],
      "'over the past thirty years' bugüne kadar süren bir değişim bildirir: Present Perfect 'has increased'.",
    ],
    [
      "If you ---- symptoms such as chest pain, you should call an ambulance immediately.",
      ["experience", "experienced", "had experienced", "would experience", "will experience"],
      "Type 1 koşul cümlesinde if kısmı Simple Present alır: 'If you experience'.",
    ],
    [
      "The researchers wanted to know ---- the drug had any long-term side effects.",
      ["whether", "what", "which", "that", "who"],
      "Evet/hayır içeren dolaylı soru 'whether' ile kurulur.",
    ],
    [
      "Hospitals, ---- are often crowded in winter, must prepare for seasonal outbreaks of flu.",
      ["which", "that", "who", "where", "what"],
      "Virgülle ayrılmış açıklayıcı ilgi cümlesinde nesneler/kurumlar için 'which' kullanılır.",
    ],
    [
      "---- regular exercise, many patients were able to reduce their blood pressure without medication.",
      ["Thanks to", "Despite", "Although", "Unless", "In case"],
      "Ardından isim öbeği gelir ve olumlu bir sebep bildirilir: 'Thanks to' (sayesinde).",
    ],
    [
      "The doctor advised her ---- more fruit and vegetables.",
      ["to eat", "eating", "eat", "eaten", "to eating"],
      "'advise someone to do something' kalıbı mastar ister: 'advised her to eat'.",
    ],
    [
      "By the time the patient arrived at hospital, the bleeding ----.",
      ["had stopped", "has stopped", "stops", "will stop", "was stopping"],
      "'By the time + Past' yapısında ana cümle Past Perfect alır: 'had stopped'.",
    ],
    [
      "Under no circumstances ---- the medication be taken with alcohol.",
      ["should", "does", "is", "has", "would have"],
      "Olumsuz anlamlı 'Under no circumstances' cümle başına gelince devrik yapı gerekir: 'should the medication be taken'.",
    ],
    [
      "The nurse ---- looked after me during my stay was extremely kind.",
      ["who", "which", "whose", "whom", "what"],
      "İnsanlardan söz eden ve 'looked after' fiilinin öznesi olan ilgi zamiri 'who'dur.",
    ],
    [
      "If the virus had not mutated, the vaccine ---- more effective.",
      ["would have been", "will be", "is", "had been", "would be being"],
      "Type 3 koşul: if cümlesi Past Perfect, ana cümle 'would have been'.",
    ],
    [
      "The patient was too weak ---- out of bed without help.",
      ["to get", "getting", "get", "for getting", "to getting"],
      "'too + sıfat + to do' kalıbı mastar ister: 'too weak to get'.",
    ],
    [
      "Smoking damages not only the lungs ---- the heart and blood vessels.",
      ["but also", "as well", "and so", "either", "rather than"],
      "'not only … but also' yapısı tamamlanmalıdır.",
    ],
    [
      "Many patients are unaware ---- they have high blood pressure.",
      ["that", "what", "which", "of what", "whether that"],
      "'be unaware that + cümle' yapısı kullanılır: hastaların çoğu yüksek tansiyonu olduğunun farkında değildir.",
    ],
    [
      "The test results ---- to the patient's doctor as soon as they are ready.",
      ["will be sent", "sent", "have sent", "are sending", "would send"],
      "Sonuçlar gönderilecek şeylerdir (edilgen) ve gelecekte olacaktır: 'will be sent'.",
    ],
  ],
  cloze: [
    {
      text:
        "Antibiotics have saved millions of lives since penicillin was first used in the 1940s. However, bacteria can evolve to resist these drugs, {1} infections harder to treat. Resistance develops faster when antibiotics are used unnecessarily, for example to treat viral infections such as colds, {2} antibiotics have no effect. In some countries, antibiotics are also given to healthy farm animals to make them grow faster, {3} contributes to the problem. To slow the spread of resistance, health authorities recommend that antibiotics {4} only when prescribed by a doctor. Researchers are also developing new types of drugs, {5} progress has been slow because such research is expensive and offers limited profit.",
      blanks: [
        [
          "(21) ----",
          ["making", "made", "to make", "makes", "having made by"],
          "Direncin sonucu virgülden sonra etken ortaçla verilir: 'making infections harder to treat'.",
        ],
        [
          "(22) ----",
          ["against which", "which", "for whom", "where", "whose"],
          "Antibiyotiklerin 'karşı etkisiz olduğu' viral enfeksiyonlar anlatılır; 'have no effect against' yapısından 'against which' gelir.",
        ],
        [
          "(23) ----",
          ["which", "what", "who", "that", "it"],
          "Virgülden sonra 'which' önceki cümlenin tamamına (hayvanlara antibiyotik verilmesine) atıf yapar.",
        ],
        [
          "(24) ----",
          ["be used", "are using", "use", "used", "will use"],
          "'recommend that' sonrası subjunctive ve edilgen gerekir: 'be used'.",
        ],
        [
          "(25) ----",
          ["but", "so", "because", "unless", "if"],
          "Yeni ilaçlar geliştirilmekte 'ama' ilerleme yavaştır: 'but'.",
        ],
      ],
    },
    {
      text:
        "Physical inactivity is now one of the leading risk factors for death worldwide. Experts recommend that adults do at least 150 minutes of moderate exercise each week, {1} brisk walking or cycling. Yet many people fall short of this target, often because they spend long hours sitting at work. Research suggests that even short breaks from sitting can bring benefits. {2}, standing up and moving for a few minutes every half hour may improve blood sugar levels. Some companies have introduced standing desks and walking meetings {3} encourage employees to be more active. The challenge, according to public health experts, is to make physical activity part of everyday life {4} treating it as something that requires special effort or equipment. Cities can help by designing streets {5} are safe and pleasant for walking and cycling.",
      blanks: [
        [
          "(26) ----",
          ["such as", "because of", "instead of", "in spite of", "apart from"],
          "Orta düzey egzersize örnek verilir: 'such as brisk walking or cycling'.",
        ],
        [
          "(27) ----",
          ["For example", "However", "In contrast", "Otherwise", "Nevertheless"],
          "Kısa molaların faydasına bir örnek verilir: 'For example'.",
        ],
        [
          "(28) ----",
          ["to", "for", "so", "that", "by"],
          "Amaç bildiren mastar: 'to encourage employees'.",
        ],
        [
          "(29) ----",
          ["rather than", "as well as", "because of", "such as", "due to"],
          "Fiziksel aktiviteyi özel çaba gerektiren bir şey olarak görmek 'yerine' günlük yaşamın parçası yapmak: 'rather than'.",
        ],
        [
          "(30) ----",
          ["that", "where", "what", "whose", "when"],
          "'streets' sonrası 'are' fiilinin öznesini isteyen tanımlayıcı ilgi cümlesi: 'that'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although many people take vitamin supplements every day, ----.",
      [
        "most healthy adults can get all the vitamins they need from a balanced diet",
        "vitamins are found in many different kinds of fruit and vegetables",
        "some supplements are sold in pharmacies and large supermarkets",
        "vitamin D is produced by the skin when it is exposed to sunlight",
        "the first vitamins were identified in the early twentieth century",
      ],
      "'Although' zıtlık ister: birçok kişi takviye kullansa da sağlıklı yetişkinler ihtiyaçlarını dengeli beslenmeyle karşılayabilir.",
    ],
    [
      "Children should be vaccinated against measles ----.",
      [
        "because the disease can cause serious complications such as pneumonia",
        "which was one of the most common childhood diseases in the past",
        "although most children recover from it within a couple of weeks",
        "unless their parents had already been vaccinated as children",
        "so that the vaccine had been tested on thousands of volunteers",
      ],
      "Kızamık aşısının gerekçesi hastalığın zatürre gibi ciddi komplikasyonlara yol açabilmesidir.",
    ],
    [
      "If people reduced the amount of salt in their diets, ----.",
      [
        "the number of strokes and heart attacks would fall",
        "salt was used to preserve food in the past",
        "most processed food contains a lot of salt",
        "doctors will measure blood pressure every year",
        "the heart had pumped blood more slowly",
      ],
      "Type 2 koşul ana cümlede 'would + V1' ister: inme ve kalp krizi sayısı düşerdi.",
    ],
    [
      "While some people recover from depression without treatment, ----.",
      [
        "many others need therapy, medication or both",
        "depression is more common in winter than in summer",
        "it affects people of all ages and backgrounds",
        "doctors use questionnaires to diagnose it",
        "it is often accompanied by sleep problems",
      ],
      "'While' iki durumu karşılaştırır: bazıları tedavisiz iyileşirken diğerleri terapi ya da ilaca ihtiyaç duyar.",
    ],
    [
      "Patients are given a local anaesthetic before minor surgery ----.",
      [
        "so that they do not feel pain during the procedure",
        "which is usually carried out in a doctor's surgery",
        "although some patients feel nervous beforehand",
        "because the operation takes only a few minutes",
        "unless they had eaten a large meal that morning",
      ],
      "Lokal anestezinin amacı işlem sırasında ağrı hissedilmemesidir: 'so that'.",
    ],
    [
      "The number of people living with chronic diseases is expected to rise ----.",
      [
        "as populations continue to age",
        "which were common in the past",
        "although many diseases can be prevented",
        "so that hospitals can treat more patients",
        "unless they had been diagnosed early",
      ],
      "Kronik hastalık sayısının artmasının nedeni nüfusun yaşlanmasıdır: 'as' (çünkü/…dıkça).",
    ],
    [
      "Unless the patient's blood sugar is brought under control, ----.",
      [
        "he may develop serious complications affecting his eyes and kidneys",
        "the nurse measured it twice a day in the hospital ward",
        "diabetes was diagnosed when he was forty years old",
        "insulin is a hormone produced by the pancreas",
        "his doctor had changed his diet last year",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: ciddi komplikasyonlar gelişebilir.",
    ],
    [
      "Even though the clinical trial showed promising results, ----.",
      [
        "the drug will need further testing before it can be approved",
        "it was carried out in several hospitals across Europe",
        "the volunteers were chosen randomly from a large group",
        "the researchers published their findings in a journal",
        "many patients wanted to take part in the study",
      ],
      "'Even though' zıtlık ister: umut verici sonuçlara rağmen ilacın onaylanmadan önce daha fazla test edilmesi gerekir.",
    ],
    [
      "Doctors recommend that people wear sunscreen ----.",
      [
        "to protect their skin from harmful ultraviolet radiation",
        "which can be bought in most chemists and supermarkets",
        "although many people enjoy spending time in the sun",
        "because the summer months are usually very hot",
        "unless they had already been sunburned before",
      ],
      "Güneş kremi önerisinin amacı cildi zararlı ultraviyole ışınlardan korumaktır.",
    ],
    [
      "As medical technology improves, ----.",
      [
        "more diseases can be detected at an early stage",
        "hospitals were built in many cities",
        "doctors used simple tools in the past",
        "nurses had worked long hours",
        "medicine is a very old profession",
      ],
      "'As' paralel değişim bildirir: tıbbi teknoloji geliştikçe daha fazla hastalık erken evrede saptanabilir.",
    ],
    [
      "Hardly had the new hospital opened ----.",
      [
        "when it became clear that it was too small",
        "than the doctors were very happy",
        "because the old one had closed",
        "although it cost a lot of money",
        "so that more patients came",
      ],
      "'Hardly … when …' kalıbı 'when' ile tamamlanır: yeni hastane açılır açılmaz küçük olduğu anlaşıldı.",
    ],
  ],
  enTr: [
    [
      "Around a third of all cancers could be prevented by avoiding key risk factors such as smoking and alcohol.",
      [
        "Tüm kanserlerin yaklaşık üçte biri, sigara ve alkol gibi temel risk etkenlerinden kaçınılarak önlenebilir.",
        "Sigara ve alkol kullananların üçte biri kansere yakalanır.",
        "Kanserlerin üçte ikisi sigara ve alkolden kaynaklanır.",
        "Sigara ve alkolden kaçınmak kanseri tamamen önler.",
        "Kanser vakalarının üçte biri tedavi edilebilir.",
      ],
      "'Around a third … could be prevented by avoiding key risk factors' 'yaklaşık üçte biri … kaçınılarak önlenebilir' demektir.",
    ],
    [
      "The study found no evidence that the vaccine causes serious side effects.",
      [
        "Çalışma, aşının ciddi yan etkilere yol açtığına dair hiçbir kanıt bulmadı.",
        "Çalışma, aşının ciddi yan etkileri olduğunu kanıtladı.",
        "Aşının hiçbir yan etkisi olmadığı kesin olarak bilinmektedir.",
        "Çalışmaya katılanların çoğu ciddi yan etkiler yaşadı.",
        "Çalışma aşının etkili olmadığını gösterdi.",
      ],
      "'found no evidence that … causes serious side effects' 'yol açtığına dair hiçbir kanıt bulmadı' demektir; 'hiçbir yan etkisi yoktur' kesinliği kaynakta yoktur.",
    ],
    [
      "Patients who received physiotherapy recovered faster than those who did not.",
      [
        "Fizyoterapi alan hastalar almayanlara göre daha hızlı iyileşti.",
        "Fizyoterapi almayan hastalar daha hızlı iyileşti.",
        "Hastaların hepsi fizyoterapi almadan iyileşti.",
        "Fizyoterapi hastaların iyileşmesini yavaşlattı.",
        "Hızlı iyileşen hastalara fizyoterapi verilmedi.",
      ],
      "'recovered faster than those who did not' 'almayanlara göre daha hızlı iyileşti' demektir.",
    ],
    [
      "It is estimated that more than half of all adults in the country are overweight.",
      [
        "Ülkedeki tüm yetişkinlerin yarısından fazlasının fazla kilolu olduğu tahmin edilmektedir.",
        "Ülkedeki yetişkinlerin yarısı kilo vermeye çalışmaktadır.",
        "Fazla kilolu yetişkinlerin sayısı yarı yarıya azalmıştır.",
        "Ülkedeki yetişkinlerin çok azı fazla kiloludur.",
        "Yetişkinlerin yarısından fazlası sağlıklı kilodadır.",
      ],
      "'It is estimated that more than half … are overweight' 'yarısından fazlasının fazla kilolu olduğu tahmin edilmektedir' demektir.",
    ],
    [
      "Unless the wound is kept clean, it may become infected.",
      [
        "Yara temiz tutulmazsa enfekte olabilir.",
        "Yara enfekte olduğu için temiz tutulmalıdır.",
        "Temiz tutulan yaralar her zaman enfekte olur.",
        "Yara enfekte olmadan temizlenemez.",
        "Yara temiz tutulsa bile mutlaka enfekte olur.",
      ],
      "'Unless the wound is kept clean' 'yara temiz tutulmazsa', 'may become infected' 'enfekte olabilir' demektir.",
    ],
    [
      "Many hospitals now allow parents to stay with their children overnight.",
      [
        "Pek çok hastane artık ebeveynlerin geceleri çocuklarıyla birlikte kalmasına izin veriyor.",
        "Hastaneler ebeveynlerin çocuklarını ziyaret etmesini yasakladı.",
        "Çocuklar artık geceleri hastanede kalmıyor.",
        "Ebeveynler hastanelerde gece çalışıyor.",
        "Pek çok hastane çocukları geceleri evlerine gönderiyor.",
      ],
      "'allow parents to stay with their children overnight' 'ebeveynlerin geceleri çocuklarıyla kalmasına izin veriyor' demektir.",
    ],
  ],
  trEn: [
    [
      "Düzenli egzersiz, yaşlılarda düşme riskini önemli ölçüde azaltabilir.",
      [
        "Regular exercise can significantly reduce the risk of falls in older people.",
        "Older people who exercise regularly fall more often.",
        "Falls are the main reason why older people stop exercising.",
        "Regular exercise has no effect on the risk of falls.",
        "Older people should avoid exercise to prevent falls.",
      ],
      "'önemli ölçüde azaltabilir' 'can significantly reduce' karşılığıdır.",
    ],
    [
      "Bilim insanları, bağırsak bakterilerinin ruh hâlimizi etkileyebileceğini düşünüyor.",
      [
        "Scientists think that gut bacteria may affect our mood.",
        "Scientists have proven that our mood controls gut bacteria.",
        "Gut bacteria have no connection with our mood.",
        "Our mood is the main cause of gut problems.",
        "Scientists are trying to remove gut bacteria to improve mood.",
      ],
      "'etkileyebileceğini düşünüyor' 'think … may affect' karşılığıdır.",
    ],
    [
      "Hastaların çoğu ameliyattan sonraki gün yürümeye başlayabilir.",
      [
        "Most patients can start walking the day after their operation.",
        "Patients must not walk for several weeks after an operation.",
        "Most patients walk to the hospital on the day of their operation.",
        "Walking before an operation helps patients recover.",
        "Few patients are able to walk after an operation.",
      ],
      "'ameliyattan sonraki gün yürümeye başlayabilir' 'can start walking the day after their operation' karşılığıdır.",
    ],
    [
      "Kirli su, gelişmekte olan ülkelerde ishalin başlıca nedenlerinden biridir.",
      [
        "Contaminated water is one of the main causes of diarrhoea in developing countries.",
        "Diarrhoea causes water to become contaminated in developing countries.",
        "Developing countries have solved the problem of contaminated water.",
        "Diarrhoea is rare in developing countries.",
        "Contaminated water causes most diseases in developed countries.",
      ],
      "'başlıca nedenlerinden biri' 'one of the main causes' karşılığıdır.",
    ],
    [
      "Doktorlar, hastaların ilaçlarını kendi başlarına bırakmamaları konusunda uyarıyor.",
      [
        "Doctors warn patients not to stop taking their medication on their own.",
        "Doctors allow patients to stop their medication whenever they want.",
        "Patients warn doctors about the side effects of medication.",
        "Doctors stop patients' medication without telling them.",
        "Patients are advised to take more medication than prescribed.",
      ],
      "'bırakmamaları konusunda uyarıyor' 'warn … not to stop' karşılığıdır.",
    ],
    [
      "Erken yaşta edinilen sağlıklı alışkanlıklar ömür boyu sürme eğilimindedir.",
      [
        "Healthy habits acquired at an early age tend to last a lifetime.",
        "Children rarely develop healthy habits.",
        "Healthy habits are difficult to change in older age.",
        "Unhealthy habits learned in childhood disappear in adulthood.",
        "Adults acquire most of their habits after retirement.",
      ],
      "'ömür boyu sürme eğilimindedir' 'tend to last a lifetime' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Allergies have become much more common in industrialised countries over the past fifty years. One explanation is the 'hygiene hypothesis', which suggests that children who grow up in very clean environments are exposed to fewer microbes, so their immune systems do not learn to distinguish between harmful and harmless substances. Supporting this idea, studies have found that children who grow up on farms or with older siblings are less likely to develop allergies. However, researchers now believe that the picture is more complicated. Factors such as air pollution, changes in diet and the overuse of antibiotics may also play a role. Some scientists prefer the term 'old friends hypothesis', emphasising exposure to the beneficial microbes with which humans evolved rather than to dirt in general.",
      questions: [
        [
          "According to the hygiene hypothesis, allergies become more common when ----.",
          [
            "children are exposed to fewer microbes in very clean environments",
            "children spend most of their time playing outdoors on farms",
            "families have several children who share the same rooms",
            "people eat too much food that is grown on local farms",
            "the immune system is exposed to large amounts of dirt",
          ],
          "Hijyen hipotezine göre çok temiz ortamlarda büyüyen çocuklar daha az mikroba maruz kalır ve bağışıklık sistemleri zararlı ile zararsızı ayırt etmeyi öğrenemez.",
        ],
        [
          "The examples of farm children and children with older siblings are given to ----.",
          [
            "support the idea that early exposure to microbes reduces allergies",
            "show that farm life increases the risk of allergies",
            "argue that older siblings cause allergies in younger children",
            "prove that allergies are caused only by pollution",
            "explain why antibiotics are used on farms",
          ],
          "Bu örnekler hipotezi destekler: bu çocukların alerji geliştirme olasılığı daha düşüktür.",
        ],
        [
          "The term 'old friends hypothesis' emphasises ----.",
          [
            "contact with beneficial microbes that humans evolved alongside",
            "the importance of keeping homes completely clean and free of dust",
            "friendships between children who grow up together on farms",
            "the role of air pollution in causing allergies",
            "the need to use more antibiotics in childhood",
          ],
          "Bu terim genel olarak kire değil, insanların birlikte evrimleştiği yararlı mikroplara maruz kalmayı vurgular.",
        ],
      ],
    },
    {
      text:
        "Pain relief has a long history. Ancient Egyptians used extracts of willow bark to treat aches and fever, and in the nineteenth century chemists identified the active ingredient, salicylic acid. Because pure salicylic acid irritated the stomach, a modified version, acetylsalicylic acid, was developed and sold as aspirin from 1899. Aspirin became one of the most widely used medicines in the world. Decades later, researchers discovered that it also reduces the risk of blood clots, and it is now prescribed in low doses to some patients to help prevent heart attacks and strokes. However, because it can cause bleeding in the stomach, doctors advise against taking it daily without medical advice.",
      questions: [
        [
          "According to the passage, acetylsalicylic acid was developed because ----.",
          [
            "pure salicylic acid caused irritation of the stomach",
            "willow bark was too difficult to find in Europe",
            "ancient Egyptians had stopped using it for pain",
            "it was cheaper to produce than willow extracts",
            "doctors wanted a medicine to prevent strokes",
          ],
          "Saf salisilik asit mideyi tahriş ettiği için değiştirilmiş bir biçim geliştirilmiştir.",
        ],
        [
          "It is stated in the passage that aspirin was later found to ----.",
          [
            "reduce the risk of blood clots",
            "cure all types of heart disease",
            "protect the stomach from bleeding",
            "be harmful to all patients",
            "replace the need for exercise",
          ],
          "Araştırmacılar onlarca yıl sonra aspirinin kan pıhtısı riskini azalttığını keşfetmiştir.",
        ],
        [
          "Doctors advise against taking aspirin daily without medical advice because ----.",
          [
            "it can lead to bleeding in the stomach",
            "it has no effect in low doses",
            "it was developed more than a century ago",
            "it is too expensive for most people",
            "it is made from willow bark",
          ],
          "Aspirin midede kanamaya yol açabildiği için tıbbi tavsiye olmadan her gün alınmamalıdır.",
        ],
      ],
    },
    {
      text:
        "Most people know that smoking harms the lungs, but fewer realise how quickly the body begins to recover after quitting. Within twenty minutes, heart rate and blood pressure start to fall. After a few weeks, circulation improves and breathing becomes easier. Within a year, the risk of heart disease is roughly half that of a smoker, and after ten to fifteen years, the risk of lung cancer falls substantially. Despite these benefits, quitting is difficult because nicotine is highly addictive. Most smokers make several attempts before they succeed. Research shows that combining support, such as counselling, with nicotine replacement products or other medicines greatly increases the chances of quitting successfully.",
      questions: [
        [
          "The main purpose of the passage is to ----.",
          [
            "describe the benefits of quitting smoking and how people can succeed",
            "explain how nicotine is produced in the leaves of tobacco plants",
            "argue that smoking is less harmful than people think",
            "compare the costs of different medicines for smokers",
            "describe the history of tobacco use in Europe since the sixteenth century",
          ],
          "Parça sigarayı bırakmanın faydalarını ve bırakmayı başarmanın yollarını anlatır.",
        ],
        [
          "According to the passage, within a year of quitting ----.",
          [
            "the risk of heart disease is about half that of a smoker",
            "the risk of lung cancer disappears completely for most former smokers",
            "blood pressure rises to dangerous levels for several months",
            "most people start smoking again",
            "breathing becomes more difficult",
          ],
          "Bir yıl içinde kalp hastalığı riski sigara içen birinin yaklaşık yarısına iner.",
        ],
        [
          "It can be inferred from the passage that smokers who want to quit ----.",
          [
            "are more likely to succeed if they get both support and medication",
            "should try to stop only once, as repeated attempts are harmful",
            "do not need any help or support to stop smoking successfully",
            "should avoid nicotine replacement products",
            "usually succeed on their first attempt",
          ],
          "Danışmanlık desteğini nikotin replasman ürünleri ya da ilaçlarla birleştirmenin başarı şansını büyük ölçüde artırdığı belirtilir.",
        ],
      ],
    },
    {
      text:
        "Tuberculosis (TB) is caused by bacteria that usually attack the lungs. Although it is curable and preventable, it remains one of the world's deadliest infectious diseases, killing more than a million people each year. TB spreads through the air when infected people cough or sneeze. Many people carry the bacteria without becoming ill, a condition known as latent TB, but around five to ten percent of them will develop the active disease at some point in their lives. The risk is much higher for people with weakened immune systems, such as those with HIV. Treatment requires taking several antibiotics for at least six months, and patients who stop early risk developing drug-resistant forms of the disease.",
      questions: [
        [
          "According to the passage, latent TB refers to ----.",
          [
            "carrying the bacteria without showing signs of illness",
            "a form of the disease that affects only the bones",
            "the stage when patients start taking antibiotics",
            "a drug-resistant form of tuberculosis",
            "an infection that spreads very quickly",
          ],
          "Gizli tüberküloz, bakteriyi taşıyıp hastalanmamak anlamına gelir.",
        ],
        [
          "It is stated in the passage that people with HIV ----.",
          [
            "are at much greater risk of developing active TB",
            "cannot be infected with the bacteria that cause TB",
            "never need antibiotics if they develop TB",
            "spread TB more slowly than others",
            "usually have latent TB only",
          ],
          "Bağışıklığı zayıf olanlar, örneğin HIV'li kişiler için risk çok daha yüksektir.",
        ],
        [
          "Patients who stop TB treatment early ----.",
          [
            "may develop forms of the disease that resist drugs",
            "are always cured completely within a few days",
            "will no longer be able to spread the disease to others",
            "need only one antibiotic afterwards",
            "become immune to tuberculosis",
          ],
          "Tedaviyi erken bırakan hastalar ilaca dirençli formlar geliştirme riskiyle karşılaşır.",
        ],
      ],
    },
    {
      text:
        "Music therapy uses music to help patients with physical, emotional and cognitive problems. In hospitals, it has been used to reduce anxiety before surgery and to ease pain in patients with cancer. For people with dementia, familiar songs can trigger memories and improve mood, even when other forms of communication have become difficult. Music therapy has also helped patients recovering from strokes to regain speech, as the brain processes singing differently from speaking. Although the evidence for some uses is still limited, many studies have reported positive effects, and music therapy is increasingly offered alongside conventional treatment. Supporters point out that it is inexpensive and has few, if any, side effects.",
      questions: [
        [
          "According to the passage, music therapy can help people with dementia by ----.",
          [
            "bringing back memories and improving their mood",
            "curing the disease completely",
            "teaching them to play musical instruments",
            "replacing all their medication",
            "helping them speak foreign languages",
          ],
          "Tanıdık şarkılar demanslı kişilerde anıları canlandırabilir ve ruh halini iyileştirebilir.",
        ],
        [
          "Music therapy can help stroke patients regain speech because ----.",
          [
            "the brain processes singing differently from speaking",
            "music makes stroke patients forget their pain and anxiety",
            "singing is generally easier to learn than reading or writing",
            "stroke patients usually enjoy music",
            "it replaces the need for physiotherapy",
          ],
          "Beyin şarkı söylemeyi konuşmaktan farklı işlediği için müzik terapisi konuşmayı yeniden kazanmaya yardım eder.",
        ],
        [
          "The writer's attitude towards music therapy can best be described as ----.",
          [
            "generally positive, while noting that evidence is still limited",
            "completely negative about its effects on patients in hospitals",
            "uninterested in whether it is used in hospitals or not",
            "certain that it can replace conventional treatment",
            "critical of its cost and side effects",
          ],
          "Yazar olumlu etkileri aktarır ama bazı kullanımlar için kanıtların sınırlı olduğunu da belirtir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The skin is the body's largest organ. ---- It also helps regulate body temperature through sweating and produces vitamin D when exposed to sunlight.",
      [
        "It acts as a barrier that protects the body against bacteria and injury.",
        "Some people have more freckles than others.",
        "Many creams are sold to reduce the signs of ageing.",
        "Tattoos have become very popular in recent years.",
        "Sunburn is common among people with pale skin.",
      ],
      "'It also helps …' ifadesi, derinin bir başka işlevini sayan bir öncül gerektirir: vücudu bakterilere ve yaralanmalara karşı koruması.",
    ],
    [
      "---- In fact, a person can survive for several weeks without food but only a few days without water. Dehydration can cause headaches, confusion and, in severe cases, organ failure.",
      [
        "Water is even more essential for survival than food.",
        "Many people drink coffee in the morning.",
        "Bottled water is sold in most countries.",
        "Some fruits contain a lot of water.",
        "Swimming is good exercise for the whole body.",
      ],
      "'In fact' ile gelen karşılaştırma, suyun yiyecekten bile daha hayati olduğunu söyleyen bir açılış cümlesi gerektirir.",
    ],
    [
      "Some medicines can interact with certain foods. Grapefruit, for example, can increase the level of some drugs in the blood. ---- For this reason, patients should always read the information leaflet that comes with their medicine.",
      [
        "This may lead to dangerous side effects.",
        "Grapefruit is rich in vitamin C.",
        "Many people drink fruit juice at breakfast.",
        "Pharmacies are open six days a week.",
        "Some fruits are grown in tropical countries.",
      ],
      "İlaç seviyesinin artması tehlikeli yan etkilere yol açabilir; 'For this reason' bu tehlikeye dayanır.",
    ],
    [
      "Many people believe that eating late at night causes weight gain. ---- What matters most for weight control is the total number of calories eaten in a day, rather than the time at which they are consumed.",
      [
        "However, research suggests this is largely a myth.",
        "Late-night snacks are often high in sugar.",
        "Many people eat dinner with their families.",
        "Some restaurants stay open until midnight.",
        "Breakfast is often called the most important meal.",
      ],
      "Sonraki cümle yaygın inanca karşı bir açıklama sunar; boşlukta 'However … myth' cümlesi gerekir.",
    ],
    [
      "Hand-foot-and-mouth disease is a common viral infection in young children. ---- Most children recover within a week without any specific treatment.",
      [
        "It causes fever and a rash on the hands, feet and inside the mouth.",
        "Many children attend nursery school from the age of three.",
        "Parents often take their children to the park.",
        "Some viruses can survive on surfaces for days.",
        "Children's shoes should fit properly.",
      ],
      "Paragraf hastalığı tanıtıp iyileşmeyi anlatır; boşlukta hastalığın belirtileri verilmelidir.",
    ],
    [
      "Noise pollution is often overlooked as a health risk. ---- Long-term exposure to traffic noise has been linked to sleep disturbance, high blood pressure and heart disease.",
      [
        "Yet it can have serious effects on both physical and mental health.",
        "Many cities have busy roads and airports.",
        "Some people enjoy listening to loud music.",
        "Trains are often quieter than cars.",
        "Noise is measured in decibels.",
      ],
      "Gürültünün göz ardı edildiği söylenir; ardından ciddi sağlık etkileri sıralanır. Boşluk bu geçişi 'Yet' ile sağlamalıdır.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Influenza is a viral infection that affects the respiratory system.",
        "It spreads easily through coughing and sneezing.",
        "Most people recover within one to two weeks.",
        "Many birds migrate south for the winter.",
        "However, it can be dangerous for older people and those with chronic diseases.",
      ],
      odd: 3,
      why: "Parça grip hastalığını anlatır. Kuşların kışın güneye göç ettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Eating disorders are serious mental illnesses that affect eating behaviour.",
        "They are most common among teenagers and young adults.",
        "Many restaurants now display the calorie content of meals.",
        "Without treatment, they can cause severe physical damage.",
        "Recovery is possible with psychological and medical support.",
      ],
      odd: 2,
      why: "Parça yeme bozukluklarını anlatır. Restoranların kalori bilgisini gösterdiğini söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Sickle cell disease is an inherited blood disorder.",
        "It causes red blood cells to become hard and curved.",
        "These cells can block blood flow, causing pain and organ damage.",
        "New gene therapies offer hope of a cure for some patients.",
        "Blood donation centres are open in most cities.",
      ],
      odd: 4,
      why: "Parça orak hücre hastalığını ve tedavi umutlarını anlatır. Kan bağış merkezlerinden söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Glaucoma is a group of eye diseases that damage the optic nerve.",
        "It often develops slowly and without symptoms.",
        "Many people wear sunglasses in summer.",
        "If it is not treated, it can lead to blindness.",
        "Regular eye tests can detect it at an early stage.",
      ],
      odd: 2,
      why: "Parça glokomu ve erken teşhisin önemini anlatır. Yazın güneş gözlüğü takılmasından söz eden III. cümle akışı keser.",
    },
    {
      sentences: [
        "Ambulance response times are critical in emergencies such as cardiac arrest.",
        "Every minute without treatment reduces the chance of survival.",
        "Some cities have trained volunteers to provide first aid until an ambulance arrives.",
        "Ambulances were first used on battlefields in the nineteenth century.",
        "Public defibrillators have also been installed in many places.",
      ],
      odd: 3,
      why: "Parça acil durumlarda hızlı müdahalenin önemini ve alınan önlemleri anlatır. Ambulansların tarihinden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Psoriasis is a chronic skin condition.",
        "Swimming pools are often cleaned with chlorine.",
        "It causes red, scaly patches to appear on the skin.",
        "The condition is linked to an overactive immune system.",
        "Treatments include creams, light therapy and medication.",
      ],
      odd: 1,
      why: "Parça sedef hastalığını anlatır. Yüzme havuzlarının klorla temizlendiğini söyleyen II. cümle konu dışıdır.",
    },
  ],
};
