import type { YokdilDeneme } from "./types";

export const SAGLIK_08: YokdilDeneme = {
  no: 8,
  field: "saglik",
  vocab: [
    [
      "People with coeliac disease must ---- gluten, a protein found in wheat, barley and rye.",
      ["avoid", "consume", "prefer", "produce", "require"],
      "Çölyak hastalarının glutenden 'kaçınması' (avoid) gerekir; 'consume' ve 'prefer' anlamla çelişir.",
    ],
    [
      "Most skin cancers are ---- if they are detected and treated at an early stage.",
      ["curable", "inevitable", "contagious", "hereditary", "invisible"],
      "Erken tespit ve tedavi edildiğinde cilt kanserlerinin çoğu 'tedavi edilebilir'dir (curable).",
    ],
    [
      "The thyroid gland ---- hormones that control how quickly the body uses energy.",
      ["releases", "absorbs", "destroys", "blocks", "imitates"],
      "Tiroid bezi hormon 'salgılar' (releases).",
    ],
    [
      "Many new infectious diseases ---- in animals before spreading to humans.",
      ["originate", "disappear", "decline", "recover", "retire"],
      "Pek çok yeni bulaşıcı hastalık insanlara geçmeden önce hayvanlarda 'ortaya çıkar' (originate).",
    ],
    [
      "Adding fluoride to drinking water has ---- reduced tooth decay in many countries.",
      ["significantly", "hardly", "barely", "rarely", "doubtfully"],
      "Florürün diş çürümesini 'önemli ölçüde' (significantly) azalttığı anlatılır.",
    ],
    [
      "Doctors ---- that the patient's symptoms were caused by an underactive thyroid.",
      ["suspected", "celebrated", "prevented", "promised", "imitated"],
      "Doktorların belirtilerin tiroid yetersizliğinden kaynaklandığından 'şüphelendiği' (suspected) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Until Pasteur showed that microorganisms cause food to spoil, many scientists ---- that life could arise spontaneously.",
      ["had believed", "have believed", "believe", "will believe", "are believing"],
      "Pasteur'ün gösterdiği geçmiş andan önceki inanç Past Perfect ile anlatılır: 'had believed'.",
    ],
    [
      "If people ---- sunscreen more regularly, the number of skin cancer cases would fall.",
      ["used", "use", "had used", "will use", "would use"],
      "Ana cümle 'would fall' olduğundan Type 2 koşul gerekir: if + Past 'used'.",
    ],
    [
      "Patients ---- thyroid produces too much hormone may lose weight without trying.",
      ["whose", "who", "which", "whom", "where"],
      "Hastaların tiroidinden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- the vaccine, rates of cervical cancer have fallen sharply among young women.",
      ["Thanks to", "Despite", "Instead of", "In spite of", "Regardless of"],
      "Aşı 'sayesinde' rahim ağzı kanseri oranları düşmüştür: 'Thanks to'.",
    ],
    [
      "The doctor asked the patient whether he ---- any changes in the moles on his skin.",
      ["had noticed", "did he notice", "has he noticed", "noticed he", "does notice"],
      "Dolaylı soruda düz cümle sırası kullanılır ve geçmiş zaman uyumu gerekir: 'whether he had noticed'.",
    ],
    [
      "Not until the 1940s ---- fluoride added to public water supplies.",
      ["was", "it was", "were", "had", "did"],
      "'Not until …' cümle başında devrik yapı gerektirir: 'was fluoride added'.",
    ],
    [
      "People with coeliac disease are used to ---- food labels carefully.",
      ["reading", "read", "to read", "be read", "having read by"],
      "'be used to' (alışkın olmak) kalıbında 'to' edattır ve '-ing' alır: 'used to reading'.",
    ],
    [
      "Milk ---- by heating it to a high temperature is much safer to drink.",
      ["treated", "treating", "which treats", "to treat", "has treated"],
      "Isıtılarak işlem gören süt edilgen anlamlı geçmiş ortaçla nitelenir: 'treated'.",
    ],
    [
      "Health experts recommend that every child ---- the vaccine before the age of thirteen.",
      ["receive", "receives", "received", "will receive", "receiving"],
      "'recommend that' sonrası subjunctive (yalın fiil) kullanılır: 'every child receive'.",
    ],
    [
      "The researchers examined thousands of bats, many of ---- carried viruses unknown to science.",
      ["which", "whom", "who", "them", "that"],
      "'many of' sonrasında hayvanlara atıf yapan ilgi zamiri 'which' gerekir.",
    ],
    [
      "---- the symptoms are mild, coeliac disease can cause long-term damage to the intestine.",
      ["Even if", "Because", "So that", "Unless", "In order that"],
      "Belirtiler hafif 'olsa bile' bağırsakta hasar oluşabileceği anlatılır: 'Even if'.",
    ],
    [
      "Children should be taught ---- their skin from the sun from an early age.",
      ["to protect", "protecting", "protect", "protected", "to protecting"],
      "'be taught to do' kalıbı mastar ister.",
    ],
    [
      "The new treatment was ---- effective that doctors began using it immediately.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (effective) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "By the time she is diagnosed, the disease ---- for several years without being noticed.",
      ["will have developed", "has developed", "develops", "developed", "had developed"],
      "Gelecekteki bir ana (is diagnosed) kadar süregelmiş olacak durum Future Perfect ile anlatılır.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1860s, the French chemist Louis Pasteur was asked to investigate why wine and beer often went sour. He discovered that the problem was caused by microorganisms, {1} could be killed by heating the liquid to a moderate temperature for a short time. This process, later {2} 'pasteurisation', was soon applied to milk, which at the time was a major source of diseases such as tuberculosis. Pasteur's work also provided strong evidence for the germ theory of disease, the idea {3} many illnesses are caused by microorganisms rather than by bad air or an imbalance in the body. {4} his discoveries, doctors began to take hygiene far more seriously, and later researchers {5} vaccines against several deadly diseases.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'microorganisms' sözcüğüne atıf yapan ve 'could be killed' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(22) ----",
          ["called", "calling", "to call", "calls", "having called"],
          "Süreç 'adlandırılan' bir şeydir; edilgen anlamlı geçmiş ortaç gerekir: 'later called pasteurisation'.",
        ],
        [
          "(23) ----",
          ["that", "which", "what", "whose", "where"],
          "'the idea that …' kalıbında isim cümlesini başlatan 'that' kullanılır.",
        ],
        [
          "(24) ----",
          ["As a result of", "In spite of", "Instead of", "Apart from", "Regardless of"],
          "Keşiflerinin sonucunda doktorların hijyeni ciddiye alması anlatılır: 'As a result of'.",
        ],
        [
          "(25) ----",
          ["developed", "were developed", "had been developing by", "develop", "to develop"],
          "Sonraki araştırmacılar aşılar 'geliştirdi'; geçmişte etken çatı gerekir: 'developed'.",
        ],
      ],
    },
    {
      text:
        "In the early twentieth century, a dentist in Colorado noticed that many local residents had brown stains on their teeth. Surprisingly, these people also had very few cavities. Researchers eventually discovered that the cause was a high level of natural fluoride in the local water supply. {1} too much fluoride could stain teeth, smaller amounts appeared to protect them from decay. In 1945, the city of Grand Rapids in the United States became the first to add fluoride to its water {2} purpose. Over the following years, tooth decay among the city's children fell dramatically. Many countries have since adopted the practice, {3} others have rejected it, {4} that people should be free to choose whether to consume fluoride. Most health organisations, however, consider water fluoridation to be safe and {5} effective public health measures of the twentieth century.",
      blanks: [
        [
          "(26) ----",
          ["While", "Because", "Unless", "So that", "As if"],
          "Fazla florürün zararı ile az miktarın yararı karşılaştırılır: 'While'.",
        ],
        [
          "(27) ----",
          ["on", "by", "at", "in", "for"],
          "'on purpose' 'bilerek, kasıtlı olarak' anlamındadır.",
        ],
        [
          "(28) ----",
          ["while", "because", "unless", "so that", "as long as"],
          "Bazı ülkelerin uygulamayı benimsemesi ile diğerlerinin reddetmesi karşılaştırılır: 'while'.",
        ],
        [
          "(29) ----",
          ["arguing", "argued", "to argue", "argues", "having argued by"],
          "Virgülden sonra reddetme gerekçesi etken ortaçla verilir: 'arguing that …'.",
        ],
        [
          "(30) ----",
          ["one of the most", "the most of", "more than", "much more", "as many"],
          "'one of the most + sıfat + çoğul isim' kalıbı gerekir: 'one of the most effective public health measures'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although coeliac disease affects about one percent of the population, ----.",
      [
        "most people who have it have never been diagnosed",
        "it is caused by an immune reaction to the protein gluten",
        "it can damage the lining of the small intestine",
        "symptoms include tiredness, bloating and weight loss",
        "patients must follow a strict diet for their whole lives",
      ],
      "'Although' zıtlık ister: nüfusun yüzde birini etkilese de hastaların çoğu hiç teşhis edilmemiştir.",
    ],
    [
      "Dermatologists warn that using sunbeds ----.",
      [
        "greatly increases the risk of developing skin cancer later",
        "although many young people find them very attractive",
        "which are often found in gyms and beauty salons",
        "unless people use sunscreen at the same time",
        "so that the skin would look darker in winter",
      ],
      "'warn that' sonrası tam bir yüklem gerekir; yalnızca 'greatly increases …' cümleyi tamamlar.",
    ],
    [
      "If the patient's thyroid problem had been diagnosed earlier, ----.",
      [
        "she would not have suffered from tiredness for so long",
        "the thyroid is a small gland located in the neck",
        "doctors will test her hormone levels again next month",
        "she had visited several doctors over many years",
        "thyroid problems are more common in women than men",
      ],
      "Type 3 koşul cümlesi 'would not have + V3' ile tamamlanır.",
    ],
    [
      "While most cases of HPV infection clear up on their own, ----.",
      [
        "some persistent infections can lead to cancer years later",
        "the virus is extremely common among young adults",
        "many people do not know that they have been infected",
        "vaccines have been available since the mid-2000s",
        "it is spread through close skin-to-skin contact",
      ],
      "'While' iki karşıt durumu bağlar: çoğu enfeksiyon kendiliğinden geçerken bazıları yıllar sonra kansere yol açabilir.",
    ],
    [
      "Scientists monitor diseases in wild animals ----.",
      [
        "so that they can detect new threats before they spread to humans",
        "which have been living in the same forests for centuries",
        "although most animal diseases cannot infect human beings",
        "because wild animals rarely come into contact with people",
        "unless the animals have already been vaccinated",
      ],
      "Yaban hayvanlarındaki hastalıkların izlenmesinin amacı yeni tehditleri insanlara geçmeden tespit etmektir: 'so that'.",
    ],
    [
      "Unless people protect their skin from strong sunlight, ----.",
      [
        "they increase their risk of developing skin cancer",
        "the sun was worshipped by many ancient cultures",
        "most people had spent their summers at the beach",
        "sunlight helps the body to produce vitamin D",
        "many people enjoy sunbathing on holiday",
      ],
      "'Unless' koşulu olası bir sonuç ister: cilt kanseri riski artar.",
    ],
    [
      "Since the HPV vaccine was introduced in schools, ----.",
      [
        "rates of infection among young women have fallen sharply",
        "the vaccine had been tested on thousands of volunteers",
        "parents were sent letters explaining the programme",
        "boys will also be offered the vaccine next year",
        "most schools had a nurse on duty every day",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have fallen'.",
    ],
    [
      "Even though pasteurisation slightly changes the taste of milk, ----.",
      [
        "it has saved countless lives by killing harmful bacteria",
        "it was named after a famous French chemist",
        "milk is an important source of calcium for children",
        "the process involves heating milk for a short time",
        "most supermarkets sell several types of milk",
      ],
      "'Even though' beklenmedik bir sonuç ister: tadı biraz değişse de sayısız hayat kurtarmıştır.",
    ],
    [
      "The closer people live to wild animals, ----.",
      [
        "the greater the chance that new diseases will spread to them",
        "because forests are being cleared for farming",
        "although most animals avoid human settlements",
        "which happens in many tropical regions",
        "since many people keep pets at home",
      ],
      "'The closer …, the greater …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As forests are cleared for farming and housing, ----.",
      [
        "humans come into closer contact with wild animals",
        "most land had been covered by trees in the past",
        "farmers grow many different types of crops",
        "houses are built from brick and concrete",
        "forests are home to many species of birds",
      ],
      "'As' paralel bir değişim bildirir: ormanlar temizlendikçe insanlar yaban hayvanlarıyla daha yakın temasa geçer.",
    ],
    [
      "Hardly had the patient started the gluten-free diet ----.",
      [
        "when her symptoms began to disappear",
        "than she felt much better",
        "because the doctor had recommended it",
        "so she bought special bread",
        "although it was difficult at first",
      ],
      "'Hardly … when …' kalıbı 'when' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "In people with coeliac disease, eating gluten causes the immune system to attack the lining of the small intestine.",
      [
        "Çölyak hastalarında gluten tüketmek, bağışıklık sisteminin ince bağırsağın iç yüzeyine saldırmasına neden olur.",
        "Çölyak hastalarında gluten tüketmek, bağışıklık sistemini ince bağırsağı korumaya yöneltir.",
        "İnce bağırsağın iç yüzeyi, çölyak hastalarında glutenin sindirilmesini kolaylaştırır.",
        "Bağışıklık sistemi, çölyak hastalarında glutenin vücuda girmesini tamamen engeller.",
        "Gluten tüketmeyen kişilerde bağışıklık sistemi ince bağırsağa saldırır.",
      ],
      "'causes the immune system to attack the lining of the small intestine' 'bağışıklık sisteminin ince bağırsağın iç yüzeyine saldırmasına neden olur' demektir.",
    ],
    [
      "Skin that has been repeatedly sunburned is more likely to develop cancer later in life.",
      [
        "Defalarca güneş yanığına uğramış ciltte ileriki yaşlarda kanser gelişme olasılığı daha yüksektir.",
        "Güneş yanığına hiç uğramamış ciltte kanser gelişme olasılığı daha yüksektir.",
        "Güneş yanığı, ileriki yaşlarda cildi kansere karşı korur.",
        "Kanser gelişen cilt, ileriki yaşlarda güneşte daha kolay yanar.",
        "Güneş yanığının cilt kanseriyle hiçbir bağlantısı yoktur.",
      ],
      "'has been repeatedly sunburned' 'defalarca güneş yanığına uğramış', 'is more likely to develop cancer' 'kanser gelişme olasılığı daha yüksektir' karşılığıdır.",
    ],
    [
      "Thyroid disorders are far more common in women than in men, especially after the age of fifty.",
      [
        "Tiroid bozuklukları, özellikle elli yaşından sonra, kadınlarda erkeklere göre çok daha yaygındır.",
        "Tiroid bozuklukları, elli yaşından sonra erkeklerde kadınlara göre daha yaygın hâle gelir.",
        "Elli yaşın altındaki kadınlarda tiroid bozukluğu hiç görülmez.",
        "Tiroid bozuklukları kadınlarda ve erkeklerde eşit oranda görülür.",
        "Kadınlar, elli yaşından sonra tiroid bozukluklarından korunur.",
      ],
      "'far more common in women than in men' 'kadınlarda erkeklere göre çok daha yaygın', 'especially after the age of fifty' 'özellikle elli yaşından sonra' demektir.",
    ],
    [
      "Experts estimate that about three-quarters of new infectious diseases come from animals.",
      [
        "Uzmanlar, yeni bulaşıcı hastalıkların yaklaşık dörtte üçünün hayvanlardan geldiğini tahmin ediyor.",
        "Uzmanlar, yeni bulaşıcı hastalıkların yalnızca dörtte birinin hayvanlardan geldiğini tahmin ediyor.",
        "Hayvanların dörtte üçü yeni bulaşıcı hastalıklardan etkilenmiştir.",
        "Uzmanlar, yeni hastalıkların hiçbirinin hayvanlardan gelmediğini kanıtladı.",
        "Yeni bulaşıcı hastalıklar, insanlardan hayvanlara geçmektedir.",
      ],
      "'about three-quarters of new infectious diseases come from animals' 'yeni bulaşıcı hastalıkların yaklaşık dörtte üçü hayvanlardan gelir' demektir.",
    ],
    [
      "The vaccine is most effective when it is given before a person is exposed to the virus.",
      [
        "Aşı, kişi virüse maruz kalmadan önce yapıldığında en etkilidir.",
        "Aşı, kişi virüse maruz kaldıktan sonra yapıldığında en etkilidir.",
        "Virüse maruz kalan kişiler aşıya ihtiyaç duymaz.",
        "Aşı, virüse maruz kalmayı önlemek için hiçbir işe yaramaz.",
        "Kişiler aşı olduktan sonra virüse daha fazla maruz kalır.",
      ],
      "'is most effective when it is given before a person is exposed' 'kişi maruz kalmadan önce yapıldığında en etkilidir' karşılığıdır.",
    ],
    [
      "Few discoveries have had as great an impact on public health as the germ theory of disease.",
      [
        "Çok az keşif, halk sağlığı üzerinde hastalıkların mikrop teorisi kadar büyük bir etki yaratmıştır.",
        "Pek çok keşif, halk sağlığı üzerinde mikrop teorisinden daha büyük bir etki yaratmıştır.",
        "Mikrop teorisinin halk sağlığı üzerinde hiçbir etkisi olmamıştır.",
        "Mikrop teorisi, birkaç önemli keşfin ardından tamamen terk edilmiştir.",
        "Halk sağlığı, mikrop teorisinin keşfedilmesini sağlamıştır.",
      ],
      "'Few discoveries have had as great an impact … as' 'çok az keşif … kadar büyük bir etki yaratmıştır' demektir.",
    ],
  ],
  trEn: [
    [
      "Çölyak hastalığının tek etkili tedavisi, ömür boyu glutensiz beslenmektir.",
      [
        "The only effective treatment for coeliac disease is a lifelong gluten-free diet.",
        "The most effective treatment for coeliac disease is a diet rich in gluten.",
        "A gluten-free diet is needed for only a few weeks after diagnosis.",
        "Coeliac disease can be cured completely with a single operation.",
        "People with coeliac disease should eat more bread and pasta.",
      ],
      "'tek etkili tedavi' 'the only effective treatment', 'ömür boyu glutensiz beslenmek' 'a lifelong gluten-free diet' karşılığıdır.",
    ],
    [
      "Güneş koruyucu krem, her iki saatte bir yeniden sürülmelidir.",
      [
        "Sunscreen should be reapplied every two hours.",
        "Sunscreen should be applied only once a day.",
        "Sunscreen should not be used for more than two hours.",
        "Sunscreen loses its effect if it is used every two hours.",
        "People should stay in the sun for two hours before using sunscreen.",
      ],
      "'her iki saatte bir yeniden sürülmelidir' 'should be reapplied every two hours' karşılığıdır.",
    ],
    [
      "Tiroid bezi az çalıştığında hastalar yorgunluk ve kilo artışı yaşayabilir.",
      [
        "When the thyroid gland is underactive, patients may experience tiredness and weight gain.",
        "When the thyroid gland is overactive, patients always lose energy and weight.",
        "Tiredness and weight gain cause the thyroid gland to stop working.",
        "Patients with an underactive thyroid usually feel very energetic.",
        "The thyroid gland controls only the patient's sleep.",
      ],
      "'az çalıştığında' 'is underactive', 'yorgunluk ve kilo artışı' 'tiredness and weight gain' karşılığıdır.",
    ],
    [
      "HPV aşısı, rahim ağzı kanserine yol açan virüs türlerine karşı koruma sağlar.",
      [
        "The HPV vaccine provides protection against the types of virus that cause cervical cancer.",
        "The HPV vaccine causes the types of virus that lead to cervical cancer.",
        "Cervical cancer protects women against the types of HPV.",
        "The HPV vaccine is used to treat cervical cancer after diagnosis.",
        "The HPV vaccine protects only against the common cold.",
      ],
      "'karşı koruma sağlar' 'provides protection against', 'yol açan virüs türleri' 'the types of virus that cause' karşılığıdır.",
    ],
    [
      "Pastörizasyon, sütteki zararlı bakterileri öldürmek için kullanılan bir yöntemdir.",
      [
        "Pasteurisation is a method used to kill harmful bacteria in milk.",
        "Pasteurisation is a method used to add useful bacteria to milk.",
        "Harmful bacteria in milk are used to produce cheese.",
        "Pasteurisation makes milk more dangerous to drink.",
        "Milk is heated to make it taste sweeter.",
      ],
      "'zararlı bakterileri öldürmek için kullanılan bir yöntem' 'a method used to kill harmful bacteria' karşılığıdır.",
    ],
    [
      "İçme suyuna eklenen florür, diş çürümesini önlemeye yardımcı olur.",
      [
        "Fluoride added to drinking water helps to prevent tooth decay.",
        "Fluoride added to drinking water causes tooth decay.",
        "Drinking water removes fluoride from the teeth.",
        "Tooth decay increases when water contains fluoride.",
        "Fluoride is added to water to improve its taste.",
      ],
      "'içme suyuna eklenen florür' 'fluoride added to drinking water', 'önlemeye yardımcı olur' 'helps to prevent' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Coeliac disease is an autoimmune disorder in which eating gluten, a protein found in wheat, barley and rye, triggers an immune reaction that damages the lining of the small intestine. This damage reduces the body's ability to absorb nutrients, which can lead to anaemia, weak bones and, in children, delayed growth. Symptoms vary widely: some patients suffer from diarrhoea and abdominal pain, while others have only vague complaints such as tiredness, and some have no obvious symptoms at all. As a result, the condition often goes undiagnosed for years. Diagnosis usually involves a blood test followed by a biopsy of the intestine. There is no cure, but a strict, lifelong gluten-free diet allows the intestine to heal and symptoms to disappear.",
      questions: [
        [
          "According to the passage, damage to the small intestine in coeliac disease ----.",
          [
            "makes it harder for the body to absorb nutrients",
            "causes the body to produce extra amounts of gluten",
            "increases the speed at which children grow",
            "improves the absorption of iron and calcium",
            "occurs only in people who do not eat wheat",
          ],
          "Bağırsak hasarı vücudun besinleri emme yeteneğini azaltır.",
        ],
        [
          "It is stated in the passage that coeliac disease is often undiagnosed for years because ----.",
          [
            "its symptoms vary and are sometimes vague or absent",
            "doctors have no tests available to detect it",
            "it affects only a very small number of people",
            "patients usually refuse to see a doctor about it",
            "its symptoms appear only in old age",
          ],
          "Belirtiler çok çeşitlidir; bazen belirsizdir ya da hiç yoktur, bu yüzden hastalık yıllarca teşhis edilmeyebilir.",
        ],
        [
          "According to the passage, a strict gluten-free diet ----.",
          [
            "allows the intestine to recover",
            "cures the disease after a few months",
            "should be followed only during childhood",
            "makes the immune system weaker",
            "is not effective for most patients",
          ],
          "Sıkı ve ömür boyu glutensiz beslenme bağırsağın iyileşmesini sağlar.",
        ],
      ],
    },
    {
      text:
        "Skin cancer is the most common form of cancer in many countries with fair-skinned populations, and its incidence has risen sharply over recent decades. The main cause is exposure to ultraviolet radiation from the sun or from artificial sources such as sunbeds. There are several types, the most dangerous of which is melanoma, which can spread to other parts of the body if not treated early. Health campaigns encourage people to seek shade during the middle of the day, wear protective clothing and hats, and use sunscreen with a high protection factor. People are also advised to check their skin regularly for new moles or for changes in the size, shape or colour of existing ones, and to see a doctor if they notice anything unusual.",
      questions: [
        [
          "According to the passage, the main cause of skin cancer is ----.",
          [
            "exposure to ultraviolet radiation",
            "a diet high in fat and sugar",
            "infection with a common virus",
            "lack of physical exercise",
            "drinking polluted water",
          ],
          "Parçaya göre cilt kanserinin başlıca nedeni ultraviyole ışınlara maruz kalmaktır.",
        ],
        [
          "Melanoma is described in the passage as ----.",
          [
            "the most dangerous type, which can spread if not treated early",
            "the least serious type of skin cancer that exists",
            "a type of cancer that affects only elderly people",
            "a harmless mole that never changes its colour",
            "a condition caused mainly by sunbeds",
          ],
          "Melanom, erken tedavi edilmezse vücudun diğer bölgelerine yayılabilen en tehlikeli türdür.",
        ],
        [
          "People are advised to check their skin regularly in order to ----.",
          [
            "notice any new or changing moles early",
            "decide which sunscreen to buy",
            "see whether they have a suntan",
            "find out how much vitamin D they produce",
            "avoid wearing protective clothing",
          ],
          "İnsanlara yeni benleri ya da mevcut benlerdeki değişiklikleri erken fark etmek için cildini düzenli kontrol etmeleri önerilir.",
        ],
      ],
    },
    {
      text:
        "The thyroid is a small, butterfly-shaped gland in the neck that produces hormones regulating metabolism, the process by which the body converts food into energy. When the gland produces too little hormone, a condition known as hypothyroidism, patients may experience tiredness, weight gain, feeling cold and depression. When it produces too much, known as hyperthyroidism, symptoms can include weight loss, a rapid heartbeat, anxiety and difficulty sleeping. Both conditions are much more common in women than in men. Because the symptoms develop gradually and resemble those of many other problems, thyroid disorders are frequently overlooked. Fortunately, they can usually be diagnosed with a simple blood test and treated effectively, often with daily tablets.",
      questions: [
        [
          "According to the passage, thyroid hormones regulate ----.",
          [
            "the way the body converts food into energy",
            "the growth of hair and fingernails",
            "the production of red blood cells only",
            "the amount of water the body needs",
            "the way the brain stores memories",
          ],
          "Tiroid hormonları vücudun besinleri enerjiye dönüştürme süreci olan metabolizmayı düzenler.",
        ],
        [
          "Which of the following is a symptom of hyperthyroidism mentioned in the passage?",
          [
            "a rapid heartbeat",
            "weight gain",
            "feeling cold",
            "tiredness",
            "slow movements",
          ],
          "Hipertiroidinin belirtileri arasında kilo kaybı, hızlı kalp atışı, kaygı ve uyku güçlüğü sayılır.",
        ],
        [
          "Thyroid disorders are frequently overlooked because ----.",
          [
            "their symptoms develop slowly and resemble those of other conditions",
            "there is no test that can detect them",
            "they affect only a small number of men",
            "patients rarely notice any change in their weight",
            "doctors consider them unimportant",
          ],
          "Belirtiler yavaş gelişir ve pek çok başka sorunun belirtilerine benzer; bu yüzden tiroid bozuklukları sıklıkla gözden kaçar.",
        ],
      ],
    },
    {
      text:
        "Human papillomavirus, or HPV, is the most common sexually transmitted infection worldwide, and most people will be infected at some point in their lives. In the vast majority of cases, the immune system clears the virus within two years without causing any harm. However, persistent infection with certain high-risk types can cause changes in cells that may develop into cancer, most notably cancer of the cervix. Since the introduction of HPV vaccines in the mid-2000s, many countries have offered them to girls, and increasingly also to boys, before they become sexually active. Studies from countries such as Scotland and Australia have shown dramatic falls in pre-cancerous changes among vaccinated women, leading some experts to predict that cervical cancer could one day be eliminated.",
      questions: [
        [
          "According to the passage, in most cases HPV infection ----.",
          [
            "is cleared by the immune system without causing harm",
            "develops into cancer within a few months",
            "causes serious symptoms that last for years",
            "can be cured only by surgery",
            "affects only men",
          ],
          "Vakaların büyük çoğunluğunda bağışıklık sistemi virüsü iki yıl içinde zarar vermeden temizler.",
        ],
        [
          "HPV vaccines are offered to young people before they become sexually active because ----.",
          [
            "the vaccine is designed to prevent infection rather than treat it",
            "young people are more likely to clear the virus naturally",
            "the vaccine is more expensive for older people",
            "older people cannot be infected with HPV",
            "it cures cervical cancer in young people",
          ],
          "Aşı enfeksiyonu tedavi etmek için değil, önlemek için tasarlanmıştır; bu yüzden maruziyetten önce yapılır.",
        ],
        [
          "The studies from Scotland and Australia suggest that ----.",
          [
            "vaccination has greatly reduced pre-cancerous changes",
            "the vaccine has had no effect on cervical cancer",
            "HPV infections have increased among vaccinated women",
            "boys should not receive the vaccine",
            "cervical cancer has already disappeared",
          ],
          "Bu çalışmalar aşılanan kadınlarda kanser öncesi değişikliklerin çarpıcı biçimde azaldığını göstermiştir.",
        ],
      ],
    },
    {
      text:
        "Zoonotic diseases are infections that spread from animals to humans. They include well-known illnesses such as rabies and avian influenza, as well as newer threats such as Ebola and several coronaviruses. Scientists estimate that around three-quarters of emerging infectious diseases originate in animals. The risk of such 'spillover' events appears to be increasing. As forests are cleared for agriculture and cities expand, people come into closer contact with wildlife, and the trade in wild animals brings different species together in crowded markets. Climate change may also allow disease-carrying animals and insects to move into new areas. Many experts therefore support a 'One Health' approach, which recognises that the health of people, animals and the environment are closely connected and should be managed together.",
      questions: [
        [
          "According to the passage, zoonotic diseases are ----.",
          [
            "infections that pass from animals to humans",
            "diseases that affect only wild animals",
            "illnesses caused by polluted water",
            "infections that spread only in cities",
            "diseases that humans pass to their pets",
          ],
          "Zoonotik hastalıklar hayvanlardan insanlara geçen enfeksiyonlardır.",
        ],
        [
          "Which of the following is NOT mentioned as a factor increasing the risk of spillover?",
          [
            "improvements in vaccines for farm animals",
            "the clearing of forests for agriculture",
            "the expansion of cities",
            "the trade in wild animals",
            "climate change",
          ],
          "Parçada orman tahribatı, kentlerin büyümesi, yaban hayvanı ticareti ve iklim değişikliği sayılır; çiftlik hayvanı aşılarındaki gelişmeler sayılmaz.",
        ],
        [
          "The 'One Health' approach is based on the idea that ----.",
          [
            "human, animal and environmental health are closely linked",
            "wild animals should be removed from all forests",
            "only doctors should be responsible for disease control",
            "animal diseases are not a threat to people",
            "environmental problems are unrelated to health",
          ],
          "'Tek Sağlık' yaklaşımı insan, hayvan ve çevre sağlığının birbirine yakından bağlı olduğunu kabul eder.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "For centuries, sailors on long voyages suffered from a disease that caused bleeding gums and extreme weakness. ---- Once ships began to carry lemons and limes, cases of the disease fell dramatically.",
      [
        "It was eventually discovered that the illness was caused by a lack of vitamin C in their diet.",
        "Many sailors spent several years at sea before they returned to see their families again.",
        "Ships in those days were powered by large sails and were often slow and uncomfortable.",
        "Lemons and limes are grown in many warm countries around the Mediterranean Sea.",
        "Some of the most famous voyages of exploration took place in the sixteenth century.",
      ],
      "Limon ve misket limonunun hastalığı azaltması, hastalığın C vitamini eksikliğinden kaynaklandığının keşfedilmesini gerektirir.",
    ],
    [
      "Many people take vitamin supplements every day. ---- For most healthy adults who eat a balanced diet, therefore, supplements may offer little benefit.",
      [
        "However, research suggests that the body absorbs nutrients best from ordinary food.",
        "Vitamin supplements are sold in pharmacies, supermarkets and on the internet.",
        "Some vitamins were discovered at the beginning of the twentieth century.",
        "Many people find it difficult to swallow large tablets in the morning.",
        "Fruit and vegetables are especially cheap during the summer months.",
      ],
      "'therefore' bir gerekçe ister: araştırmalar vücudun besinleri en iyi normal yiyeceklerden aldığını gösterir.",
    ],
    [
      "---- In some regions, for instance, more than half of all prescriptions for antibiotics are written for colds and other viral infections.",
      [
        "Antibiotics are often prescribed in situations where they cannot help.",
        "Antibiotics were first discovered by Alexander Fleming in the year 1928.",
        "Many regions have different rules about how medicines should be sold.",
        "Colds are among the most common illnesses in the world today.",
        "Pharmacists play an important role in advising patients about medicine.",
      ],
      "'for instance' ile verilen örnek, antibiyotiklerin işe yaramayacakları durumlarda sıkça reçete edildiğini söyleyen bir genelleme gerektirir.",
    ],
    [
      "Drinking enough water is important for good health. ---- Moreover, even mild dehydration can affect concentration and mood.",
      [
        "It helps regulate body temperature and allows the kidneys to remove waste.",
        "Many people prefer to drink sparkling water rather than tap water.",
        "Water covers about seventy percent of the Earth's surface today.",
        "Some bottled water is transported over very long distances.",
        "Tea and coffee are among the most popular drinks in the world.",
      ],
      "'Moreover' ile ikinci bir yarar eklenir; boşlukta suyun ilk yararı (vücut ısısını düzenleme, böbreklerin atık atması) yer almalıdır.",
    ],
    [
      "In the past, patients who had a heart attack were often kept in bed for several weeks. ---- As a result, doctors now encourage patients to start moving and walking within days.",
      [
        "Research later showed that long periods of bed rest actually slowed recovery.",
        "Heart attacks are more common in men than in women of the same age.",
        "Many hospitals have special units for patients with heart problems.",
        "Some patients find it difficult to sleep well in a hospital bed.",
        "The heart pumps thousands of litres of blood around the body every day.",
      ],
      "'As a result' öncesinde doktorların hastaları erken hareket ettirmesine yol açan bir neden gerekir.",
    ],
    [
      "Some countries have introduced taxes on foods that are high in sugar and fat. ---- Opponents, however, argue that such taxes unfairly punish people with low incomes.",
      [
        "Supporters believe that higher prices will encourage people to make healthier choices.",
        "Sugar has been used to sweeten food for thousands of years in many cultures.",
        "Many families do their weekly shopping at large supermarkets on Saturdays.",
        "Fast-food restaurants are especially popular with teenagers and students.",
        "Food labels show how many calories each product contains per serving.",
      ],
      "'Opponents, however' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Rabies is a viral disease that affects the brain and nervous system.",
        "It is usually spread through the bite of an infected animal, most often a dog.",
        "Many dogs are trained to help people with disabilities.",
        "Once symptoms appear, the disease is almost always fatal.",
        "However, vaccination immediately after a bite can prevent the disease.",
      ],
      odd: 2,
      why: "Parça kuduzu anlatır. Köpeklerin engelli insanlara yardım etmek için eğitilmesinden söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Gout is a type of arthritis that causes sudden, severe pain in the joints.",
        "It often affects the big toe.",
        "The condition is caused by a build-up of uric acid in the blood.",
        "Diet, including high consumption of red meat and alcohol, can increase the risk.",
        "Many people wear comfortable shoes when they walk long distances.",
      ],
      odd: 4,
      why: "Parça gut hastalığını anlatır. Uzun yürüyüşlerde rahat ayakkabı giymekten söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Shingles is a painful rash caused by the same virus that causes chickenpox.",
        "After a person has had chickenpox, the virus remains inactive in the body.",
        "Years later, it can become active again, usually in older adults.",
        "Many children's books are about animals.",
        "A vaccine is now available to reduce the risk of shingles.",
      ],
      odd: 3,
      why: "Parça zonayı anlatır. Çocuk kitaplarından söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Peanut allergy is one of the most common food allergies in children.",
        "Even a tiny amount of peanut can cause a serious reaction in some people.",
        "Peanuts are grown in many warm countries.",
        "Recent research suggests that introducing peanuts early in infancy may reduce the risk.",
        "Parents are advised to discuss this with a doctor first.",
      ],
      odd: 2,
      why: "Parça yer fıstığı alerjisini anlatır. Yer fıstığının sıcak ülkelerde yetiştirilmesinden söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Chronic kidney disease often develops slowly over many years.",
        "Its main causes include diabetes and high blood pressure.",
        "Swimming is a good form of exercise for people of all ages.",
        "In its early stages, there are usually no symptoms.",
        "Regular blood and urine tests can help detect the disease early.",
      ],
      odd: 2,
      why: "Parça kronik böbrek hastalığını anlatır. Yüzmenin iyi bir egzersiz olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tetanus is a serious infection caused by bacteria found in soil and dust.",
        "The bacteria can enter the body through cuts and wounds.",
        "The infection causes painful muscle stiffness, often starting in the jaw.",
        "Most gardens contain a variety of plants and flowers.",
        "Vaccination has made the disease rare in many countries.",
      ],
      odd: 3,
      why: "Parça tetanozu anlatır. Bahçelerdeki bitkilerden söz eden IV. cümle akışı bozar.",
    },
  ],
};
