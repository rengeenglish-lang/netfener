import type { YokdilDeneme } from "./types";

export const SOSYAL_10: YokdilDeneme = {
  no: 10,
  field: "sosyal",
  vocab: [
    [
      "The discovery of the inscription allowed scholars to finally ---- the meaning of the ancient script.",
      ["decipher", "obscure", "forget", "abolish", "conceal"],
      "Yazıtın bulunması, eski yazının anlamını 'çözmeyi' (decipher) mümkün kıldı; 'obscure' ve 'conceal' anlamın tersidir.",
    ],
    [
      "The government's policies have been ---- by several international organisations for failing to protect press freedom.",
      ["condemned", "admired", "rewarded", "imitated", "funded"],
      "'for failing to protect press freedom' ifadesi politikaların 'kınandığını' (condemned) gösterir.",
    ],
    [
      "Inflation rose so ---- that prices in shops were sometimes changed several times a day.",
      ["sharply", "slightly", "gently", "steadily", "rarely"],
      "Fiyatların günde birkaç kez değişmesi enflasyonun 'keskin biçimde' (sharply) arttığını gösterir.",
    ],
    [
      "Many talented graduates have ---- their home countries to work in wealthier economies.",
      ["moved away from", "looked up to", "come up with", "run out of", "put up with"],
      "Daha zengin ekonomilerde çalışmak için ülkelerinden 'ayrılmak' (move away from) anlamı gerekir.",
    ],
    [
      "The report provides a ---- analysis of the causes of the crisis, drawing on data from over fifty countries.",
      ["comprehensive", "superficial", "personal", "brief", "careless"],
      "Elliden fazla ülkenin verisine dayanan analiz 'kapsamlı'dır (comprehensive); 'superficial' ve 'brief' anlamla çelişir.",
    ],
    [
      "The athlete's victory was seen as a ---- moment for the young nation, which had only recently become independent.",
      ["defining", "trivial", "forgettable", "routine", "shameful"],
      "Yeni bağımsız bir ulus için zafer 'belirleyici, tanımlayıcı' (defining) bir an olarak görülür.",
    ],
  ],
  grammar: [
    [
      "By the time the Rosetta Stone was deciphered, scholars ---- to read Egyptian hieroglyphs for centuries.",
      ["had been trying", "have been trying", "are trying", "will be trying", "try"],
      "Geçmişteki bir ana kadar süregelen eylem Past Perfect Continuous ile anlatılır: 'had been trying'.",
    ],
    [
      "Had the government printed less money, prices ---- so quickly.",
      ["would not have risen", "will not rise", "did not rise", "would not rise", "had not risen"],
      "'Had the government printed' devrik Type 3 koşuldur; ana cümle 'would not have + V3' ister.",
    ],
    [
      "The town ---- the doctor traced the source of the epidemic is now home to a small museum.",
      ["in which", "which", "whose", "whom", "what"],
      "Doktorun salgının kaynağını izlediği yer anlatılır; ardından tam bir cümle geldiği için 'in which' gerekir.",
    ],
    [
      "---- its success in international competitions, the national team receives very little public funding.",
      ["Despite", "Because of", "Thanks to", "Due to", "In addition to"],
      "Başarıya 'rağmen' az fon alınması zıtlıktır: 'Despite'.",
    ],
    [
      "The interviewer asked the young engineers what ---- them to leave their country.",
      ["had encouraged", "did encourage", "had it encouraged", "encouraged it", "do encourage"],
      "Soru sözcüğü (what) öznedir; dolaylı soruda düz sıra korunur ve zaman geriye kayar: 'what had encouraged them'.",
    ],
    [
      "Little ---- that their research would change the way the disease was understood.",
      ["did the doctors know", "the doctors knew", "the doctors did know", "knew the doctors", "had known the doctors"],
      "Olumsuz anlamlı 'Little' cümle başında devrik yapı gerektirir: 'did the doctors know'.",
    ],
    [
      "Many students complain about ---- too much homework during the holidays.",
      ["being given", "giving", "to be given", "be given", "having give"],
      "'complain about' edattan sonra '-ing' alır ve öğrencilere ödev verilir; edilgen gerekir: 'being given'.",
    ],
    [
      "The calendar ---- by most of the world today was introduced by Pope Gregory XIII in 1582.",
      ["used", "using", "which uses", "to use", "has used"],
      "Bugün kullanılan takvim edilgen anlamlı geçmiş ortaçla nitelenir: 'used by most of the world'.",
    ],
    [
      "The board demanded that the director ---- a full report on the incident.",
      ["submit", "submits", "submitted", "will submit", "submitting"],
      "'demand that' sonrası subjunctive (yalın fiil) kullanılır: 'the director submit'.",
    ],
    [
      "The country has produced many great athletes, several of ---- have won Olympic medals.",
      ["whom", "who", "which", "them", "they"],
      "'several of' sonrasında insanlara atıf yapan nesne hâlindeki ilgi zamiri 'whom' gerekir.",
    ],
    [
      "---- the number of qualified doctors is falling, waiting times at hospitals are increasing.",
      ["As", "Although", "Unless", "Whereas", "So that"],
      "Doktor sayısının düşmesi bekleme sürelerinin artmasının nedenidir: neden bildiren 'As'.",
    ],
    [
      "The new law will make it easier for skilled migrants ---- work permits.",
      ["to obtain", "obtaining", "obtain", "obtained", "for obtain"],
      "'make it easier for someone to do' kalıbı mastar ister.",
    ],
    [
      "The match was ---- exciting that millions of people stayed up until the early morning to watch it.",
      ["so", "such", "too", "enough", "very"],
      "Sıfat (exciting) önünde sonuç bildiren 'so … that' yapısı kullanılır.",
    ],
    [
      "When the new museum opens next year, it ---- the largest collection of ancient coins in the country.",
      ["will house", "houses", "housed", "has housed", "had housed"],
      "Gelecekte gerçekleşecek bir durum anlatılır: 'will house'.",
    ],
  ],
  cloze: [
    {
      text:
        "Calendars are among humanity's oldest inventions. Early farming societies needed to know when to plant and harvest their crops, {1} they carefully observed the movements of the sun, the moon and the stars. The ancient Egyptians developed a calendar of 365 days, {2} was divided into twelve months of thirty days, with five extra days at the end of the year. However, because the solar year is about a quarter of a day longer than 365 days, the calendar gradually moved out of step with the seasons. The Romans {3} this problem by adding a leap day every four years. Even so, a small error remained, and by the sixteenth century the calendar was ten days out of line. {4} correct it, Pope Gregory XIII introduced a reformed calendar in 1582, {5} most countries in the world use today.",
      blanks: [
        [
          "(21) ----",
          ["so", "unless", "although", "because of", "whereas"],
          "Ekim ve hasat zamanını bilme ihtiyacının sonucu gök cisimlerinin gözlenmesidir: 'so'.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'a calendar of 365 days' ifadesine atıf yapan ve 'was divided' fiilinin öznesi olan 'which' gerekir.",
        ],
        [
          "(23) ----",
          ["tried to solve", "were solved", "had been solving", "are solving", "will solve"],
          "Romalılar sorunu artık gün ekleyerek 'çözmeye çalıştı'; geçmişte etken çatı gerekir: 'tried to solve'.",
        ],
        [
          "(24) ----",
          ["In order to", "Because", "So as", "Although", "Even if"],
          "Amaç bildiren yapı gerekir ve ardından yalın fiil gelir: 'In order to correct it'.",
        ],
        [
          "(25) ----",
          ["which", "who", "what", "where", "when"],
          "Virgülden sonra 'a reformed calendar' ifadesine atıf yapan ve 'use' fiilinin nesnesi olan 'which' gerekir.",
        ],
      ],
    },
    {
      text:
        "The term 'brain drain' describes the emigration of highly educated people, such as doctors, engineers and scientists, from poorer countries to wealthier ones. Migrants are usually attracted by higher salaries, better working conditions and more opportunities for research. {1} individual migrants may benefit greatly, their home countries can suffer serious losses. Governments often spend large sums educating professionals {2} then leave to work abroad. In some African countries, for instance, a large proportion of trained doctors now work in Europe or North America. {3}, some economists argue that the effects are not entirely negative. Migrants often send money home, and some return {4} new skills and international contacts. For this reason, many researchers now prefer to speak of 'brain circulation' {5} brain drain.",
      blanks: [
        [
          "(26) ----",
          ["While", "Because", "Unless", "So that", "As if"],
          "Göçmenlerin kazanması ile ülkelerin kaybı karşılaştırılır: 'While'.",
        ],
        [
          "(27) ----",
          ["who", "which", "whose", "whom", "where"],
          "'professionals' insanları niteler ve 'leave' fiilinin öznesidir: 'who'.",
        ],
        [
          "(28) ----",
          ["However", "Therefore", "Similarly", "For example", "As a result"],
          "Olumsuz etkilerden sonra karşıt bir görüşe geçilir: 'However'.",
        ],
        [
          "(29) ----",
          ["with", "without", "against", "despite", "except"],
          "Göçmenlerin yeni becerilerle 'birlikte' dönmesi anlatılır: 'with'.",
        ],
        [
          "(30) ----",
          ["rather than", "as well as", "because of", "in addition to", "such as"],
          "Araştırmacılar 'beyin göçü' yerine 'beyin dolaşımı' demeyi tercih eder: 'rather than'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although scholars had studied Egyptian hieroglyphs for centuries, ----.",
      [
        "no one could read them until the early nineteenth century",
        "the Rosetta Stone was found by French soldiers in 1799",
        "the stone contained the same text in three different scripts",
        "Egyptian temples were covered with inscriptions and images",
        "ancient Egypt was one of the first great civilisations",
      ],
      "'Although' zıtlık ister: yüzyıllarca çalışılmasına rağmen on dokuzuncu yüzyıla kadar kimse okuyamadı.",
    ],
    [
      "Many historians believe that hyperinflation in Germany in the 1920s ----.",
      [
        "contributed to the rise of political extremism",
        "although prices had been stable before the war",
        "which was caused partly by war debts",
        "unless the government had printed less money",
        "so that workers had been paid twice a day",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'contributed to …' cümleyi tamamlar.",
    ],
    [
      "If John Snow had not mapped the cases of cholera, ----.",
      [
        "the source of the outbreak might not have been found so quickly",
        "the disease spread rapidly through the poorest districts",
        "doctors will continue to study the history of epidemics",
        "London was one of the largest cities in the world",
        "most people believed that cholera was spread by bad air",
      ],
      "Type 3 koşul cümlesi 'might not have + V3' ile tamamlanır.",
    ],
    [
      "While some people see international sport as a way to bring nations together, ----.",
      [
        "others argue that it often encourages nationalism and rivalry",
        "the Olympic Games are held every four years in a different city",
        "football is the most popular sport in many countries",
        "athletes train for many years before competing internationally",
        "millions of people watch major tournaments on television",
      ],
      "'While' iki karşıt görüşü bağlar: bazıları sporu birleştirici görür, diğerleri milliyetçiliği körüklediğini savunur.",
    ],
    [
      "Some governments offer generous incentives to scientists working abroad ----.",
      [
        "in order to persuade them to return home",
        "which they had been receiving for many years",
        "although research funding has increased",
        "because universities abroad are very expensive",
        "unless they have already found jobs",
      ],
      "Teşviklerin amacı yurt dışındaki bilim insanlarını geri dönmeye ikna etmektir: 'in order to'.",
    ],
    [
      "Unless teachers are aware of stereotype threat, ----.",
      [
        "they may unintentionally lower the performance of some students",
        "they had attended training courses in the past",
        "students were divided into groups by ability",
        "tests are usually held at the end of the term",
        "many schools have large classrooms",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: öğretmenler farkında olmadan bazı öğrencilerin performansını düşürebilir.",
    ],
    [
      "Since the country hosted the World Cup, ----.",
      [
        "interest in football among young people has grown considerably",
        "the national team had trained for the tournament for years",
        "new stadiums were built in several cities",
        "fans travelled from all over the world",
        "the tournament will be held in Asia next time",
      ],
      "'Since' ile geçmişten bugüne uzanan değişim Present Perfect ister: 'has grown'.",
    ],
    [
      "Even though the scientists' discovery was published in a respected journal, ----.",
      [
        "it was largely ignored for several decades",
        "it was written in English and German",
        "the journal is read by scientists worldwide",
        "the research had been funded by the government",
        "it described several experiments in detail",
      ],
      "'Even though' beklenmedik bir sonuç ister: saygın bir dergide yayımlansa da keşif onlarca yıl görmezden gelindi.",
    ],
    [
      "The more a currency loses its value, ----.",
      [
        "the more quickly people try to spend their money",
        "because the government prints more notes",
        "although wages may also increase",
        "which happened in several countries",
        "since banks raise interest rates",
      ],
      "'The more …, the more …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As cities became more crowded in the nineteenth century, ----.",
      [
        "diseases such as cholera spread more easily",
        "most people had lived in rural areas",
        "doctors are trained in modern hospitals",
        "water is essential for human life",
        "some cities had very old walls",
      ],
      "'As' paralel bir değişim bildirir: şehirler kalabalıklaştıkça kolera gibi hastalıklar daha kolay yayıldı.",
    ],
    [
      "No sooner had the athletes returned home ----.",
      [
        "than they were welcomed by huge crowds",
        "when the tournament had begun",
        "because they had won a medal",
        "so the fans were very happy",
        "although the flight was late",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "The Rosetta Stone proved crucial because it contained the same text in three different scripts.",
      [
        "Rosetta Taşı, aynı metni üç farklı yazıyla içerdiği için çok önemli olduğunu kanıtladı.",
        "Rosetta Taşı, üç farklı metni aynı yazıyla içerdiği için önemsiz görüldü.",
        "Rosetta Taşı'ndaki üç yazı, birbirinden tamamen farklı metinler içeriyordu.",
        "Rosetta Taşı'nın önemi, üzerinde yalnızca tek bir yazı bulunmasından kaynaklanıyordu.",
        "Üç farklı yazı, Rosetta Taşı bulunduktan sonra icat edildi.",
      ],
      "'proved crucial' 'çok önemli olduğunu kanıtladı', 'the same text in three different scripts' 'aynı metni üç farklı yazıyla' demektir.",
    ],
    [
      "So rapidly did prices rise that people's savings became almost worthless within months.",
      [
        "Fiyatlar öyle hızlı yükseldi ki insanların birikimleri birkaç ay içinde neredeyse değersiz hâle geldi.",
        "Fiyatlar yavaş yükseldiği için insanların birikimleri değerini korudu.",
        "İnsanlar birikimlerini harcadıkça fiyatlar birkaç ay içinde düştü.",
        "Birikimler değersizleştikten aylar sonra fiyatlar yükselmeye başladı.",
        "Fiyatların yükselmesi insanların birikimlerini artırdı.",
      ],
      "'So rapidly did prices rise that' devrik 'so … that' yapısıdır: 'fiyatlar öyle hızlı yükseldi ki'.",
    ],
    [
      "The map clearly showed that most of the victims had drawn their water from the same public pump.",
      [
        "Harita, kurbanların çoğunun suyunu aynı kamu pompasından aldığını açıkça gösteriyordu.",
        "Harita, kurbanların hiçbirinin kamu pompalarını kullanmadığını gösteriyordu.",
        "Kurbanların çoğu, haritayı aynı kamu pompasının yanında çizdi.",
        "Harita, kamu pompalarının kentin dışında bulunduğunu gösteriyordu.",
        "Kurbanlar, suyu farklı pompalardan aldıkları için hastalandı.",
      ],
      "'had drawn their water from the same public pump' 'suyunu aynı kamu pompasından almıştı' karşılığıdır.",
    ],
    [
      "Reminding students of negative stereotypes about their group can lower their performance on tests.",
      [
        "Öğrencilere ait oldukları grupla ilgili olumsuz kalıp yargıları hatırlatmak, sınavlardaki performanslarını düşürebilir.",
        "Olumsuz kalıp yargılar, öğrencilerin sınavlarda daha başarılı olmasını sağlar.",
        "Öğrenciler, sınavlardan önce kalıp yargıları hatırlamayı tercih eder.",
        "Sınav performansı, öğrencilerin kalıp yargılara inanmasına yol açar.",
        "Öğrencilere kalıp yargıları hatırlatmanın sınav sonuçlarına hiçbir etkisi yoktur.",
      ],
      "'Reminding … can lower their performance' 'hatırlatmak … performanslarını düşürebilir' karşılığıdır.",
    ],
    [
      "Hosting the Olympic Games is often more expensive than governments initially expect.",
      [
        "Olimpiyat Oyunlarına ev sahipliği yapmak çoğu zaman hükümetlerin başlangıçta beklediğinden daha pahalıdır.",
        "Olimpiyat Oyunlarına ev sahipliği yapmak hükümetler için her zaman kârlıdır.",
        "Hükümetler Olimpiyat Oyunlarının maliyetini her zaman doğru tahmin eder.",
        "Olimpiyat Oyunları başlangıçta beklenenden daha ucuza mal olur.",
        "Hükümetler Olimpiyat Oyunlarına ev sahipliği yapmayı nadiren ister.",
      ],
      "'more expensive than governments initially expect' 'hükümetlerin başlangıçta beklediğinden daha pahalı' demektir.",
    ],
    [
      "Many of the doctors trained in the country now work abroad, leaving rural hospitals short of staff.",
      [
        "Ülkede yetişen doktorların çoğu artık yurt dışında çalışıyor ve bu da kırsal hastanelerde personel eksikliğine yol açıyor.",
        "Yurt dışında yetişen doktorların çoğu kırsal hastanelerde çalışmak için ülkeye dönüyor.",
        "Kırsal hastaneler, yurt dışından gelen doktorlarla doludur.",
        "Doktorlar, kırsal hastanelerde çalışmayı yurt dışında çalışmaya tercih ediyor.",
        "Ülkede yetişen doktorların hiçbiri yurt dışında çalışmak istemiyor.",
      ],
      "'leaving rural hospitals short of staff' 'kırsal hastanelerde personel eksikliğine yol açarak' anlamındadır.",
    ],
  ],
  trEn: [
    [
      "Rosetta Taşı, 1799 yılında Mısır'da Fransız askerleri tarafından bulundu.",
      [
        "The Rosetta Stone was found in Egypt by French soldiers in 1799.",
        "French soldiers carried the Rosetta Stone from France to Egypt in 1799.",
        "The Rosetta Stone was made by French soldiers in Egypt in 1799.",
        "Egyptian soldiers found the Rosetta Stone in France in 1799.",
        "The Rosetta Stone was lost in Egypt by French soldiers in 1799.",
      ],
      "'Fransız askerleri tarafından bulundu' 'was found … by French soldiers' karşılığıdır.",
    ],
    [
      "Aşırı enflasyon, orta sınıfın birikimlerini yok etti.",
      [
        "Hyperinflation wiped out the savings of the middle class.",
        "Hyperinflation increased the savings of the middle class.",
        "The middle class caused hyperinflation by spending its savings.",
        "The savings of the middle class protected it from hyperinflation.",
        "Hyperinflation affected only the poorest people.",
      ],
      "'yok etti' 'wiped out', 'orta sınıfın birikimleri' 'the savings of the middle class' karşılığıdır.",
    ],
    [
      "O dönemde pek çok doktor, kolerayı kötü havanın yaydığına inanıyordu.",
      [
        "At that time, many doctors believed that cholera was spread by bad air.",
        "At that time, many doctors believed that cholera was spread by water.",
        "At that time, doctors did not know that cholera existed.",
        "Many doctors at that time spread cholera by mistake.",
        "Bad air was cleaned by doctors at that time to stop cholera.",
      ],
      "'kötü havanın yaydığına inanıyordu' 'believed that cholera was spread by bad air' karşılığıdır.",
    ],
    [
      "Araştırmalar, beklentilerin öğrenci başarısını güçlü biçimde etkileyebileceğini gösteriyor.",
      [
        "Research shows that expectations can strongly influence student achievement.",
        "Research shows that expectations have no effect on student achievement.",
        "Students' achievement determines their teachers' expectations.",
        "Research shows that students expect too much from their teachers.",
        "Strong students have lower expectations than others.",
      ],
      "'güçlü biçimde etkileyebileceğini' 'can strongly influence' karşılığıdır.",
    ],
    [
      "Spor, pek çok ülkede ulusal kimliğin önemli bir parçası hâline gelmiştir.",
      [
        "Sport has become an important part of national identity in many countries.",
        "Sport has lost its importance in many countries.",
        "National identity has prevented sport from developing in many countries.",
        "Most countries have no national sport.",
        "Sport and national identity are completely separate in most countries.",
      ],
      "'önemli bir parçası hâline gelmiştir' 'has become an important part of' karşılığıdır.",
    ],
    [
      "Beyin göçü, gelişmekte olan ülkelerin nitelikli işgücünü kaybetmesine neden olur.",
      [
        "Brain drain causes developing countries to lose skilled workers.",
        "Brain drain helps developing countries attract skilled workers.",
        "Skilled workers prefer to stay in developing countries.",
        "Developing countries have too many skilled workers.",
        "Brain drain affects only wealthy countries.",
      ],
      "'kaybetmesine neden olur' 'causes … to lose', 'nitelikli işgücü' 'skilled workers' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "For more than a thousand years after the last hieroglyphic inscriptions were carved, no one could read the writing of ancient Egypt. The breakthrough came after French soldiers discovered a stone slab near the town of Rosetta in 1799. The Rosetta Stone carried the same decree written three times: in hieroglyphs, in a later Egyptian script called Demotic, and in ancient Greek, which scholars could already read. By comparing the texts, the French scholar Jean-François Champollion was able to show in 1822 that hieroglyphs were not simply symbolic pictures, as many had believed, but a writing system in which many signs represented sounds. His work opened the way for the translation of thousands of Egyptian texts and transformed the study of the ancient world.",
      questions: [
        [
          "According to the passage, the Rosetta Stone was valuable mainly because ----.",
          [
            "it contained the same text in a script that scholars could already read",
            "it was the oldest inscription ever found in Egypt",
            "it explained the meaning of every hieroglyphic sign",
            "it was written entirely in ancient Greek",
            "it had been carved by Champollion himself",
          ],
          "Taş aynı fermanı üç kez içeriyordu ve bunlardan biri bilim insanlarının zaten okuyabildiği eski Yunancaydı.",
        ],
        [
          "Champollion showed that hieroglyphs ----.",
          [
            "included many signs that represented sounds",
            "were only decorative pictures without meaning",
            "were identical to the Greek alphabet",
            "were invented after the Demotic script",
            "were used only in religious buildings",
          ],
          "Champollion hiyerogliflerin yalnızca simgesel resimler olmadığını, birçok işaretin ses temsil ettiği bir yazı sistemi olduğunu gösterdi.",
        ],
        [
          "It can be inferred from the passage that before Champollion's work, many people ----.",
          [
            "thought hieroglyphs were purely symbolic images",
            "could read hieroglyphs without difficulty",
            "believed that Egypt had no writing system",
            "had already translated thousands of Egyptian texts",
            "considered Greek more difficult than hieroglyphs",
          ],
          "'as many had believed' ifadesi pek çok kişinin hiyerogliflerin yalnızca simgesel resimler olduğuna inandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "After the First World War, Germany faced enormous debts, including reparation payments demanded by the victorious countries. To meet its obligations, the government printed large amounts of money, and by 1923 the country was experiencing hyperinflation on a scale rarely seen in history. Prices doubled every few days, and at its peak a loaf of bread cost billions of marks. Workers were paid twice a day and rushed to spend their wages before they lost their value. People who had saved money for decades saw their savings wiped out, and many middle-class families fell into poverty. Although a new currency eventually stabilised the economy, historians argue that the experience deeply damaged public trust in the democratic government and contributed to the political extremism of the following decade.",
      questions: [
        [
          "According to the passage, the German government printed large amounts of money in order to ----.",
          [
            "pay its debts, including war reparations",
            "reduce prices for ordinary families",
            "increase the value of people's savings",
            "fund the construction of new factories",
            "replace the old currency with gold",
          ],
          "Hükümet savaş tazminatları dâhil yükümlülüklerini karşılamak için büyük miktarda para bastı.",
        ],
        [
          "Workers rushed to spend their wages because ----.",
          [
            "money was losing its value very quickly",
            "shops were open for only a few hours",
            "the government had banned saving money",
            "food was cheaper in the mornings",
            "they were paid only once a month",
          ],
          "İşçiler ücretleri değer kaybetmeden harcamak için koşuşturuyordu.",
        ],
        [
          "Historians believe that the hyperinflation ----.",
          [
            "weakened trust in democracy and encouraged extremism",
            "had no lasting political consequences",
            "made the middle class much wealthier",
            "was quickly forgotten after the new currency",
            "strengthened support for the government",
          ],
          "Tarihçilere göre bu deneyim demokratik hükümete duyulan güveni zedeledi ve sonraki on yılın siyasi aşırılığına katkıda bulundu.",
        ],
      ],
    },
    {
      text:
        "In 1854, a severe outbreak of cholera killed hundreds of people in the Soho district of London within a few weeks. At the time, most doctors believed that diseases like cholera were caused by 'miasma', or bad air. The physician John Snow was sceptical. He carefully recorded the addresses of the victims on a map and noticed that most of the deaths were clustered around a public water pump on Broad Street. He also found that workers at a nearby brewery, who drank beer rather than water from the pump, had largely escaped the disease. Snow persuaded local officials to remove the pump's handle, and the outbreak soon declined. His investigation is now regarded as a founding moment of epidemiology, the study of how diseases spread in populations.",
      questions: [
        [
          "According to the passage, most doctors at the time believed that cholera ----.",
          [
            "was caused by bad air",
            "was spread through contaminated water",
            "was carried by brewery workers",
            "could be cured by drinking beer",
            "affected only wealthy districts",
          ],
          "O dönemde doktorların çoğu koleranın 'miasma', yani kötü havadan kaynaklandığına inanıyordu.",
        ],
        [
          "The brewery workers are mentioned in the passage because ----.",
          [
            "their escape from the disease supported Snow's idea about the pump",
            "they were the first victims of the outbreak",
            "they helped Snow draw his map of Soho",
            "they owned the pump on Broad Street",
            "they believed that cholera came from bad air",
          ],
          "Pompadan su yerine bira içen bira fabrikası işçilerinin büyük ölçüde hastalıktan kurtulması Snow'un pompa fikrini destekledi.",
        ],
        [
          "Snow's investigation is considered important because ----.",
          [
            "it helped establish the study of how diseases spread",
            "it proved that miasma caused all diseases",
            "it led to the closure of all London breweries",
            "it was the first time cholera appeared in London",
            "it showed that maps are not useful in medicine",
          ],
          "Snow'un araştırması bugün hastalıkların nasıl yayıldığını inceleyen epidemiyolojinin kuruluş anı olarak kabul edilir.",
        ],
      ],
    },
    {
      text:
        "Psychologists use the term 'stereotype threat' to describe a situation in which people fear that their performance will confirm a negative stereotype about a group to which they belong. In a well-known series of studies in the 1990s, researchers found that when students were told that a test measured intellectual ability, members of groups who are stereotyped as less able performed worse than when the same test was described as a simple problem-solving exercise. The researchers suggested that anxiety about confirming the stereotype used up mental resources needed for the task. Later studies have reported similar effects in areas such as mathematics and sport. Some researchers have questioned how strong and reliable these effects are, but many educators now try to reduce situations that might trigger such anxiety.",
      questions: [
        [
          "According to the passage, stereotype threat occurs when people ----.",
          [
            "worry that they will confirm a negative stereotype about their group",
            "believe that other groups are less able than their own",
            "refuse to take tests that measure intellectual ability",
            "are told that a test is very easy",
            "are unaware of any stereotypes about their group",
          ],
          "Kalıp yargı tehdidi, kişilerin performanslarının ait oldukları grup hakkındaki olumsuz bir kalıp yargıyı doğrulayacağından korkmasıdır.",
        ],
        [
          "The studies described in the passage found that ----.",
          [
            "the way a test was described affected some students' results",
            "all students performed equally well regardless of instructions",
            "problem-solving exercises were more difficult than ability tests",
            "students performed better when they felt anxious",
            "stereotypes had no effect on mathematics scores",
          ],
          "Test zekâ ölçümü olarak tanıtıldığında kalıp yargıya maruz kalan grupların üyeleri daha kötü performans gösterdi.",
        ],
        [
          "The researchers explained the effect by suggesting that ----.",
          [
            "anxiety reduced the mental resources available for the task",
            "the students had not studied enough before the test",
            "the tests were unfair to all groups equally",
            "the students wanted to confirm the stereotype",
            "intellectual ability cannot be measured",
          ],
          "Araştırmacılara göre kalıp yargıyı doğrulama kaygısı görev için gereken zihinsel kaynakları tüketti.",
        ],
      ],
    },
    {
      text:
        "Sport has long been closely connected with national identity. International competitions such as the Olympic Games and the football World Cup give citizens an opportunity to unite behind a common team and to express pride in their country. For newly independent states, sporting success can be especially significant, helping to create a sense of shared identity among people of different regions, languages or ethnic groups. Governments have often recognised this and invested heavily in sport for political reasons. However, the relationship is not always positive. Rivalries between national teams can increase tensions between countries, and on some occasions matches have been followed by violence. Some scholars therefore describe international sport as a double-edged sword, capable of both uniting and dividing.",
      questions: [
        [
          "According to the passage, sporting success can be especially important for newly independent states because ----.",
          [
            "it can help build a shared identity among diverse groups",
            "it is the main source of income for their governments",
            "it allows them to avoid political conflicts",
            "it encourages people to leave the country",
            "it replaces the need for a national language",
          ],
          "Yeni bağımsız devletlerde spor başarısı farklı bölge, dil ya da etnik gruplardan insanlar arasında ortak kimlik yaratmaya yardım edebilir.",
        ],
        [
          "It is stated in the passage that governments have invested in sport ----.",
          [
            "partly for political reasons",
            "only to improve public health",
            "to reduce the number of competitions",
            "because athletes demanded it",
            "in order to avoid international rivalries",
          ],
          "Hükümetler bunu fark etmiş ve siyasi nedenlerle spora büyük yatırım yapmıştır.",
        ],
        [
          "By describing international sport as a 'double-edged sword', scholars mean that it ----.",
          [
            "can have both positive and negative effects",
            "is dangerous for the athletes who take part",
            "should be organised by two countries at once",
            "always leads to violence between fans",
            "is more important than politics",
          ],
          "'İki ucu keskin kılıç' ifadesi sporun hem birleştirici hem bölücü olabileceğini anlatır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the early modern period, European states began to collect statistics about their populations and economies. ---- This information allowed governments to plan taxation, military recruitment and, later, public services.",
      [
        "They recorded births, deaths, marriages and the amount of land people owned.",
        "Many European cities grew rapidly in the nineteenth century.",
        "Statistics is now taught at most universities.",
        "Some early maps were very inaccurate.",
        "Population growth slowed in the twentieth century.",
      ],
      "'This information' ifadesi öncesinde toplanan bilgilerin ne olduğunu söyleyen bir cümle gerektirir.",
    ],
    [
      "Many people believe that money is the main reason employees work hard. ---- For example, workers often value recognition, interesting tasks and the feeling that their work is meaningful.",
      [
        "Research, however, suggests that other factors can be just as important.",
        "Salaries are usually paid at the end of the month.",
        "Many companies have offices in large cities.",
        "Some workers prefer to work at night.",
        "Unemployment rose during the economic crisis.",
      ],
      "'For example' ile para dışındaki etkenler sıralanır; boşluk başka etkenlerin de önemli olduğunu söylemelidir.",
    ],
    [
      "---- In many villages in Anatolia, for instance, neighbours traditionally helped one another with harvests, weddings and the building of houses.",
      [
        "Rural communities have often relied on cooperation between households.",
        "Anatolia is located between Europe and Asia.",
        "Many people today live in apartment buildings.",
        "Weddings can last for several days.",
        "Agriculture uses more machines today than in the past.",
      ],
      "'for instance' ile verilen Anadolu köyleri örneği, kırsal toplulukların haneler arası iş birliğine dayandığını söyleyen bir genelleme gerektirir.",
    ],
    [
      "Many museums now allow visitors to explore their collections online. ---- In addition, digital images help protect fragile objects that cannot be handled often.",
      [
        "This makes cultural heritage accessible to people who cannot travel to the museum.",
        "The first public museums opened in the eighteenth century.",
        "Some museums charge high entrance fees.",
        "Many people visit museums during the holidays.",
        "Museum shops sell books and souvenirs.",
      ],
      "'In addition' ile ikinci bir yarar eklenir; boşlukta ilk yarar (kültürel mirasa erişim) yer almalıdır.",
    ],
    [
      "During the nineteenth century, railways spread rapidly across Europe and North America. ---- As a result, people began to travel for leisure, and seaside resorts grew in popularity.",
      [
        "Journeys that had once taken several days could now be completed in a few hours.",
        "Steam engines were also used in factories.",
        "Some railway stations are famous for their architecture.",
        "Many people today prefer to travel by car.",
        "Railway workers often worked long hours.",
      ],
      "'As a result' öncesinde boş zaman seyahatini mümkün kılan bir neden gerekir: yolculukların çok kısalması.",
    ],
    [
      "Some countries have made voting compulsory, fining citizens who do not take part in elections. ---- Critics, on the other hand, argue that people should have the right not to vote.",
      [
        "Supporters claim that this ensures that governments represent the whole population.",
        "Elections are usually held on Sundays.",
        "Most countries have a parliament.",
        "Political campaigns can be very expensive.",
        "Some voters decide whom to support at the last minute.",
      ],
      "'Critics, on the other hand' öncesinde destekçilerin görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The invention of writing transformed human societies.",
        "It allowed governments to keep records of taxes, laws and trade.",
        "It also made it possible to preserve knowledge across generations.",
        "Many animals communicate using sounds and gestures.",
        "Over time, writing systems spread to many parts of the world.",
      ],
      odd: 3,
      why: "Parça yazının icadının toplumları dönüştürmesini anlatır. Hayvanların iletişiminden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Pension systems face growing pressure in many countries.",
        "Because people are living longer, they receive pensions for more years.",
        "At the same time, there are fewer young workers paying contributions.",
        "Many retired people enjoy gardening and travelling.",
        "Governments are therefore considering raising the retirement age.",
      ],
      odd: 3,
      why: "Parça emeklilik sistemleri üzerindeki baskıyı anlatır. Emeklilerin hobilerinden söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Folk music often reflects the history and daily life of a community.",
        "Songs may tell stories of love, work, migration or war.",
        "Many of them were passed down orally rather than written.",
        "Some modern musicians have revived these traditional songs.",
        "Concert halls are usually located in city centres.",
      ],
      odd: 4,
      why: "Parça halk müziğini anlatır. Konser salonlarının konumundan söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Microcredit programmes provide small loans to people who cannot borrow from banks.",
        "Whales are the largest animals on Earth.",
        "Many borrowers use the money to start small businesses.",
        "Early studies suggested that these programmes greatly reduced poverty.",
        "Later research, however, found that their effects were more modest.",
      ],
      odd: 1,
      why: "Parça mikrokredi programlarını anlatır. Balinalardan söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the Middle Ages, pilgrimages were an important part of religious life.",
        "Pilgrims travelled long distances to visit holy sites.",
        "These journeys also encouraged trade and the exchange of ideas.",
        "Many modern hotels offer free breakfast.",
        "Towns along pilgrimage routes often grew wealthy by serving travellers.",
      ],
      odd: 3,
      why: "Parça orta çağ hac yolculuklarını anlatır. Modern otellerin kahvaltısından söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Cities around the world are planting more trees along their streets.",
        "Trees provide shade and help reduce temperatures in summer.",
        "They also improve air quality and reduce noise.",
        "Studies suggest that green streets can even improve residents' mental health.",
        "The Eiffel Tower was built for an international exhibition.",
      ],
      odd: 4,
      why: "Parça kent ağaçlandırmasını anlatır. Eyfel Kulesi'nden söz eden V. cümle konu dışıdır.",
    },
  ],
};
