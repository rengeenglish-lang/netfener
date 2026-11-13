import type { YokdilDeneme } from "./types";

export const SAGLIK_35: YokdilDeneme = {
  no: 35,
  field: "saglik",
  vocab: [
    [
      "The young pharmacist managed to ---- the active substance from raw opium.",
      ["isolate", "dilute", "forbid", "decorate", "advertise"],
      "Genç eczacının etken maddeyi ham afyondan 'ayrıştırmayı' (isolate) başardığı anlatılır.",
    ],
    [
      "The dye protected mice from a ---- bacterial infection that would normally have killed them.",
      ["lethal", "harmless", "minor", "pleasant", "temporary"],
      "Boyanın fareleri normalde onları öldürecek 'ölümcül' (lethal) bir bakteri enfeksiyonundan koruduğu anlatılır.",
    ],
    [
      "At that time, companies were not required to ---- the safety of new medicines before selling them.",
      ["demonstrate", "advertise", "conceal", "reduce", "postpone"],
      "O dönemde şirketlerin yeni ilaçları satmadan önce güvenliklerini 'kanıtlamak' (demonstrate) zorunda olmadığı anlatılır.",
    ],
    [
      "The chemist tested thousands of fungi in the hope of finding a compound that would ---- cholesterol.",
      ["lower", "raise", "store", "measure", "absorb"],
      "Kimyacının kolesterolü 'düşürecek' (lower) bir bileşik bulma umuduyla binlerce mantarı test ettiği anlatılır.",
    ],
    [
      "The drug had dramatic benefits, but long-term use caused serious ---- effects.",
      ["side", "main", "positive", "local", "brief"],
      "İlacın çarpıcı faydaları olduğu, ancak uzun süreli kullanımın ciddi 'yan' (side effects) etkilere yol açtığı anlatılır.",
    ],
    [
      "The company was forced to ---- the product after reports of deaths began to arrive.",
      ["call in", "make up", "look after", "take after", "bring about"],
      "Ölüm haberleri gelmeye başlayınca şirketin ürünü 'geri toplamak' (call in) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "Sertürner ---- only about twenty years old when he first isolated morphine.",
      ["was", "has been", "is", "will be", "had been being"],
      "Geçmişte belirli bir andaki durum: 'was'.",
    ],
    [
      "By the time the dangers of the elixir became clear, more than a hundred people ----.",
      ["had died", "die", "will die", "are dying", "have been died"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had died'.",
    ],
    [
      "If Domagk had not given the drug to his daughter, she ---- her arm.",
      ["might have lost", "may lose", "loses", "had lost", "will lose"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have lost'.",
    ],
    [
      "More than six thousand strains of fungi ---- by Endo and his team.",
      ["were tested", "tested", "have tested", "are testing", "will test"],
      "Mantar suşları test edilmiştir; edilgen yapı: 'were tested'.",
    ],
    [
      "---- Cade's patients improved dramatically, many doctors were slow to use lithium.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Hastaların çarpıcı iyileşmesi ile doktorların yavaş davranması zıttır: 'Although'.",
    ],
    [
      "The woman ---- received the first dose of cortisone had been unable to walk for months.",
      ["who", "which", "whose", "whom", "what"],
      "'The woman' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "The company dissolved the drug in a sweet liquid, ---- turned out to be poisonous.",
      ["which", "who", "what", "where", "whose"],
      "Virgülden sonra 'a sweet liquid' ifadesini niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The higher the dose, ---- the risk of serious side effects.",
      ["the greater", "the greatest", "greater than", "much greater", "so great"],
      "'The higher ..., the greater ...' paralel yapısı: 'the greater'.",
    ],
    [
      "Not until 1938 ---- American law require drugs to be tested for safety.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Black wanted to find a drug that would reduce the heart's need ---- oxygen.",
      ["for", "of", "to", "with", "at"],
      "'need for something' kalıbı: 'for'.",
    ],
    [
      "The scientist tested the new painkiller on himself ---- giving it to patients.",
      ["before", "until", "unless", "since", "while"],
      "Hastalara vermeden önce kendi üzerinde denediği anlatılır: 'before'.",
    ],
    [
      "Domagk was prevented ---- accepting the Nobel Prize by the government of his country.",
      ["from", "to", "for", "of", "with"],
      "'prevent somebody from doing' yapısı: 'from'.",
    ],
    [
      "Patients are advised not to drink grapefruit juice ---- they are taking certain medicines.",
      ["while", "unless", "so that", "until", "although"],
      "Eşzamanlılık bildiren bağlaç: 'while'.",
    ],
    [
      "It is essential that every new drug ---- tested in carefully designed trials.",
      ["be", "is being", "was", "to be", "being"],
      "'It is essential that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "For thousands of years, opium, the dried juice of the poppy, was used to relieve pain, but its strength varied greatly from one batch to another, {1} it difficult for doctors to give a safe dose. In the early 1800s, Friedrich Sertürner, a young pharmacist's assistant in the German town of Paderborn, set out to find the substance responsible for its effects. Working with simple equipment in his spare time, he succeeded in isolating a white crystalline compound, {2} he named 'morphium' after Morpheus, the Greek god of dreams. At first his work attracted little attention. In 1817, {3} to prove the compound's power, he swallowed a large dose himself and gave smaller amounts to three young friends; all of them became seriously ill and recovered only after Sertürner made them vomit. Morphine was the first active ingredient {4} from a medicinal plant, and it allowed doctors to prescribe pain relief in precise amounts for the first time. Sertürner's achievement also encouraged chemists to search for the active substances in other plants, {5} led to the discovery of quinine, caffeine and many other compounds.",
      blanks: [
        [
          "(21) ----",
          ["making", "made", "to make", "makes", "having made"],
          "Önceki cümlenin sonucunu bildiren -ing yapısı: 'making it difficult'.",
        ],
        [
          "(22) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgülden sonra bileşiği niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(23) ----",
          ["in order", "so as", "as if", "such that", "rather than"],
          "Amaç bildiren 'in order to': 'in order'.",
        ],
        [
          "(24) ----",
          ["to be extracted", "extracting", "extract", "to extract", "being extract"],
          "'the first ... to be done' edilgen mastar yapısı: 'to be extracted'.",
        ],
        [
          "(25) ----",
          ["which", "who", "what", "where", "whose"],
          "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "In the early 1930s, there was still no effective drug against the bacterial infections that killed millions of people each year. The German pathologist Gerhard Domagk, working for a chemical company that made dyes, tested thousands of compounds on mice infected with streptococci. In 1932, he found that a red dye later called Prontosil protected the animals completely, {1} it had no effect on the bacteria in a test tube. In 1935, Domagk's six-year-old daughter, Hildegard, developed a severe infection after pricking her hand with a needle. Doctors feared that her arm would have to be amputated, {2} Domagk, in desperation, gave her the experimental drug. She recovered fully. Later that year, scientists at the Pasteur Institute in Paris discovered that the body breaks Prontosil down into a simpler colourless compound, sulfanilamide, {3} was responsible for its effect. Because sulfanilamide was already known and could not be patented, many companies began producing it cheaply, and sulfa drugs saved countless lives {4} penicillin became widely available. Domagk was awarded the Nobel Prize in 1939, but the Nazi government forced him to decline it; he was finally able to receive the medal {5} 1947.",
      blanks: [
        [
          "(26) ----",
          ["even though", "because", "so that", "as soon as", "in case"],
          "Hayvanları koruması ile deney tüpünde etkisiz olması zıttır: 'even though'.",
        ],
        [
          "(27) ----",
          ["and", "or", "unless", "because", "although"],
          "Doktorların korkusu ve Domagk'ın ilacı vermesi art arda gelen olaylardır: 'and'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra sülfanilamidi niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["before", "after", "unless", "since", "while"],
          "Penisilin yaygınlaşmadan 'önce' sayısız hayat kurtarıldığı anlatılır: 'before'.",
        ],
        [
          "(30) ----",
          ["in", "on", "at", "by", "for"],
          "Yıl ile 'in 1947': 'in'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although opium had been used for centuries, ----.",
      [
        "its strength was unpredictable",
        "poppies grow in many countries",
        "Sertürner lived in Germany",
        "Morpheus was a Greek god",
        "pharmacists sold many medicines",
      ],
      "'Although' zıtlık ister: afyon yüzyıllardır kullanılsa da gücü öngörülemezdi.",
    ],
    [
      "Domagk gave the untested drug to his daughter ----.",
      [
        "because her life was in danger",
        "although she was six years old",
        "unless the mice had recovered",
        "so that the dye was red",
        "while he worked for a company",
      ],
      "Domagk, kızının hayatı tehlikede olduğu için test edilmemiş ilacı ona verdi.",
    ],
    [
      "If a medicine has not been tested for safety, ----.",
      [
        "it may contain dangerous ingredients",
        "the company was based in Tennessee",
        "the elixir tasted of raspberries",
        "many patients were children",
        "the law was passed in 1938",
      ],
      "Birinci tip koşul: bir ilaç güvenlik açısından test edilmemişse tehlikeli maddeler içerebilir.",
    ],
    [
      "----, Endo decided to search for a natural compound that blocked cholesterol production.",
      [
        "Inspired by penicillin",
        "Although he worked for a company in Tokyo",
        "Unless the fungi had been collected",
        "Because rice is grown in Japan",
        "Since cholesterol is found in eggs",
      ],
      "Penisilinin bir küfte keşfedilmesinden esinlenen Endo, kolesterol üretimini engelleyen doğal bir bileşik aramaya karar verdi.",
    ],
    [
      "Cade used a lithium salt in his experiments ----.",
      [
        "to help a substance dissolve",
        "although he had been a prisoner of war",
        "unless the guinea pigs were young",
        "so that the hospital was in Australia",
        "while mania is a serious illness",
      ],
      "Cade, başka bir maddenin çözünmesine yardım ettiği için deneylerinde bir lityum tuzu kullandı.",
    ],
    [
      "Hench suspected that a natural hormone could relieve arthritis ----.",
      [
        "since patients often improved during pregnancy",
        "although he worked at a famous clinic",
        "unless the patient was very young",
        "because cortisone is made in a laboratory",
        "while the disease affects the joints",
      ],
      "Hench, hastalar hamilelik sırasında sıklıkla iyileştiği için doğal bir hormonun artriti hafifletebileceğinden şüphelendi.",
    ],
    [
      "Not only did propranolol help patients with chest pain, ----.",
      [
        "but it also lowered blood pressure",
        "and the drug was developed in Britain",
        "since Black later won the Nobel Prize",
        "so the heart needs oxygen",
        "unless the patient was elderly",
      ],
      "'Not only ... but also' yapısı tamamlanır: propranolol göğüs ağrısı çeken hastalara yardım etmekle kalmadı, yüksek tansiyonda da yararlı oldu.",
    ],
    [
      "Since sulfanilamide could not be patented, ----.",
      [
        "many companies were able to make it cheaply",
        "it was discovered in Paris",
        "it had no colour",
        "Domagk worked with dyes",
        "the mice were infected with bacteria",
      ],
      "'Since' neden bildirir: sülfanilamid patentlenemediği için pek çok şirket onu ucuza üretebildi.",
    ],
    [
      "Heroin was originally sold as a cough medicine ----.",
      [
        "as it was thought safe",
        "although it was made by a German company",
        "unless the patient had a fever",
        "so that it was withdrawn later",
        "while aspirin was also popular",
      ],
      "Eroin başlangıçta bağımlılık yapmadığı yanlış düşünüldüğü için öksürük ilacı olarak satıldı.",
    ],
    [
      "Some children have died after being given codeine ----.",
      [
        "as they made morphine too fast",
        "although codeine is used to relieve pain",
        "unless their tonsils had been removed",
        "so that doctors prescribed other drugs",
        "while the drug is made from opium",
      ],
      "Bazı çocuklar, vücutları kodeini çok hızlı biçimde morfine dönüştürdüğü için kodein verildikten sonra öldü.",
    ],
    [
      "Unless doctors know which other medicines a patient is taking, ----.",
      [
        "they may prescribe a dangerous combination",
        "most medicines are taken by mouth",
        "the pharmacy was open all night",
        "many drugs come from plants",
        "tablets are easier to swallow than capsules",
      ],
      "'Unless' olumsuz koşul: doktorlar hastanın başka hangi ilaçları aldığını bilmezse tehlikeli bir kombinasyon reçete edebilir.",
    ],
  ],
  enTr: [
    [
      "Isolating the active substance made it possible to give patients exact doses.",
      [
        "Etken maddenin ayrıştırılması, hastalara kesin dozlar verilmesini mümkün kıldı.",
        "Hastalara kesin dozlar verilmesi, etken maddenin ayrıştırılmasını zorlaştırdı.",
        "Etken madde ayrıştırıldıktan sonra dozlar daha da belirsiz hale geldi.",
        "Etken maddenin ayrıştırılması, hastaların ilacı reddetmesine yol açtı.",
        "Hastalara verilen dozlar, etken maddenin keşfinden önce kesindi.",
      ],
      "'Isolating the active substance' 'etken maddenin ayrıştırılması', 'made it possible to give patients exact doses' 'hastalara kesin dozlar verilmesini mümkün kıldı' karşılığıdır.",
    ],
    [
      "The dye worked inside the body but had no effect on bacteria in a test tube.",
      [
        "Boya vücudun içinde etkili oldu, ancak deney tüpündeki bakteriler üzerinde hiçbir etkisi olmadı.",
        "Boya, deney tüpündeki bakterileri vücudun içindeki bakterilerden çok daha hızlı ve etkili biçimde öldürdü.",
        "Boyanın vücutta etkili olması için önce deney tüpünde denenmesi gerekiyordu.",
        "Bakteriler, boyayı vücudun dışında daha kolay emdi.",
        "Boya hem vücutta hem de deney tüpünde etkisiz kaldı.",
      ],
      "'worked inside the body' 'vücudun içinde etkili oldu', 'but had no effect on bacteria in a test tube' 'ancak deney tüpündeki bakteriler üzerinde hiçbir etkisi olmadı' karşılığıdır.",
    ],
    [
      "The disaster led directly to a law requiring proof of safety before a drug could be sold.",
      [
        "Felaket, doğrudan bir ilacın satılmadan önce güvenliğinin kanıtlanmasını şart koşan bir yasaya yol açtı.",
        "Felaketten sonra ilaçların güvenlik testi yapılmadan satılmasına izin verildi.",
        "Yasa, ilaçların satılmasını tamamen yasakladığı için bir felakete yol açtı.",
        "Felaket, ilaçların güvenli olduğunu kanıtlayan bir yasadan önce yaşandı.",
        "Felaketten sonra ilaçların satılmadan önce güvenliğinin kanıtlanması gerektiği hiçbir zaman tartışılmadı.",
      ],
      "'led directly to a law' 'doğrudan bir yasaya yol açtı', 'requiring proof of safety before a drug could be sold' 'ilacın satılmadan önce güvenliğinin kanıtlanmasını şart koşan' karşılığıdır.",
    ],
    [
      "Statins are now among the most widely prescribed medicines in the world.",
      [
        "Statinler bugün dünyada en yaygın reçete edilen ilaçlar arasındadır.",
        "Statinler, dünyada en az kullanılan ilaçlardan biridir.",
        "Statinler, yalnızca birkaç ülkede reçeteyle satılır.",
        "Dünyanın her yerinde statinlerin kullanımı yasaklanmıştır.",
        "Statinler, bugün dünyanın pek çok ülkesinde reçetesiz satılan en ucuz ve en popüler ilaçlardır.",
      ],
      "'are now among' 'bugün arasındadır', 'the most widely prescribed medicines in the world' 'dünyada en yaygın reçete edilen ilaçlar' karşılığıdır.",
    ],
    [
      "Within a few days of the first injection, the patient was able to walk again.",
      [
        "İlk enjeksiyondan birkaç gün sonra hasta yeniden yürüyebildi.",
        "Hasta, ilk enjeksiyondan birkaç gün önce yürüyebiliyordu.",
        "İlk enjeksiyon, hastanın yürümesini birkaç gün boyunca engelledi.",
        "Hasta, birkaç enjeksiyondan sonra bile yürüyemedi.",
        "Hastanın yürüyebilmesi için birkaç gün enjeksiyon yapılması gerekti.",
      ],
      "'Within a few days of the first injection' 'ilk enjeksiyondan birkaç gün sonra', 'was able to walk again' 'yeniden yürüyebildi' karşılığıdır.",
    ],
    [
      "Some common foods can change the way the body processes certain medicines.",
      [
        "Bazı yaygın besinler, vücudun belirli ilaçları işleme biçimini değiştirebilir.",
        "Belirli ilaçlar, vücudun yaygın besinleri sindirmesini engeller.",
        "Yaygın besinlerin ilaçlar üzerinde hiçbir etkisi yoktur.",
        "Vücut, ilaçları yalnızca besinlerle birlikte işleyebilir.",
        "Bazı ilaçlar, vücudun yaygın besinleri işleme biçimini ve bu besinlerin tadını değiştirebilir.",
      ],
      "'Some common foods' 'bazı yaygın besinler', 'can change the way the body processes certain medicines' 'vücudun belirli ilaçları işleme biçimini değiştirebilir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Sertürner, maddenin gücünü kanıtlamak için büyük bir dozu kendisi yuttu.",
      [
        "Sertürner swallowed a large dose himself to prove the substance's power.",
        "Sertürner refused to take the substance because it was too powerful.",
        "Sertürner's friends forced him to swallow a large dose of the substance.",
        "Sertürner proved that a large dose of the substance was harmless.",
        "Sertürner gave the largest dose to his friends instead of himself.",
      ],
      "'maddenin gücünü kanıtlamak için' 'to prove the substance's power', 'büyük bir dozu kendisi yuttu' 'swallowed a large dose himself' karşılığıdır.",
    ],
    [
      "Şirket, ilacı tatlı bir sıvıda çözdü, ancak sıvının zehirli olup olmadığını test etmedi.",
      [
        "The company dissolved the drug in a sweet liquid but did not test whether the liquid was poisonous.",
        "The company tested the sweet liquid carefully before dissolving the drug in it.",
        "The drug made the sweet liquid poisonous after it had been tested.",
        "The company refused to sell the drug in liquid form.",
        "The company tested the sweet liquid carefully, but it did not test the drug that was dissolved in it.",
      ],
      "'tatlı bir sıvıda çözdü' 'dissolved the drug in a sweet liquid', 'zehirli olup olmadığını test etmedi' 'did not test whether the liquid was poisonous' karşılığıdır.",
    ],
    [
      "Lityum, manik hastaların çoğunda ruh halini dengelemeye yardım etti.",
      [
        "Lithium helped to stabilise the mood of most manic patients.",
        "Lithium made most manic patients more excited.",
        "Most manic patients refused to take lithium.",
        "Lithium had no effect on the mood of manic patients.",
        "Manic patients stabilised the dose of lithium themselves.",
      ],
      "'manik hastaların çoğunda' 'of most manic patients', 'ruh halini dengelemeye yardım etti' 'helped to stabilise the mood' karşılığıdır.",
    ],
    [
      "Kortizonun uzun süreli kullanımı, kemik kaybı ve kilo alımı gibi sorunlara yol açabilir.",
      [
        "Long-term use of cortisone can lead to problems such as bone loss and weight gain.",
        "Cortisone can prevent bone loss and weight gain if used for a long time.",
        "Bone loss and weight gain are treated with long-term cortisone.",
        "Cortisone causes problems only when it is used for a short time.",
        "Weight gain and bone loss make cortisone much less effective when it is used for a long time.",
      ],
      "'uzun süreli kullanımı' 'long-term use', 'kemik kaybı ve kilo alımı gibi sorunlara yol açabilir' 'can lead to problems such as bone loss and weight gain' karşılığıdır.",
    ],
    [
      "Bu ilaç, kalbin daha yavaş ve daha az güçle atmasını sağlayarak göğüs ağrısını azaltır.",
      [
        "This drug reduces chest pain by making the heart beat more slowly and less forcefully.",
        "This drug makes the heart beat faster in order to reduce chest pain.",
        "Chest pain makes the heart beat more slowly and less forcefully.",
        "This drug increases chest pain by slowing down the heart.",
        "The heart beats more slowly and less forcefully when chest pain has been reduced by exercise.",
      ],
      "'kalbin daha yavaş ve daha az güçle atmasını sağlayarak' 'by making the heart beat more slowly and less forcefully', 'göğüs ağrısını azaltır' 'reduces chest pain' karşılığıdır.",
    ],
    [
      "Bazı insanlar, genetik farklılıklar nedeniyle ilaçları diğerlerinden çok daha hızlı işler.",
      [
        "Because of genetic differences, some people process drugs much faster than others.",
        "Some people avoid drugs because of genetic differences.",
        "Genetic differences make all people process drugs at the same speed.",
        "Drugs change people's genes so that they work faster.",
        "People who process drugs much faster than others do so because of their diet, not their genes.",
      ],
      "'genetik farklılıklar nedeniyle' 'because of genetic differences', 'çok daha hızlı işler' 'process drugs much faster' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In 1937, the S. E. Massengill Company of Tennessee wanted to sell sulfanilamide, the new antibacterial drug, in liquid form, because many patients, especially children, found tablets difficult to swallow. The company's chief chemist found that the drug dissolved well in diethylene glycol, a sweet-tasting chemical, and the mixture was flavoured with raspberry and sold as 'Elixir Sulfanilamide'. Neither the chemist nor the company tested whether the liquid itself was safe, and at the time there was no legal requirement to do so. Diethylene glycol, which is used in antifreeze, turned out to be highly poisonous. Within weeks, reports began to arrive of patients suffering severe kidney failure, and more than a hundred people died, many of them children. The Food and Drug Administration sent almost all of its inspectors to trace every bottle that had been shipped, and they recovered most of the remaining supply. However, the only charge that could be brought against the company was that it had mislabelled the product, since the word 'elixir' implied that it contained alcohol. Public anger over the deaths led Congress to pass the Federal Food, Drug and Cosmetic Act in 1938, which for the first time required manufacturers to show that new drugs were safe before they could be marketed.",
      questions: [
        [
          "According to the passage, the company produced a liquid version of the drug because ----.",
          [
            "many patients had trouble swallowing tablets",
            "tablets were more expensive to make",
            "the law required liquid medicines",
            "doctors had complained about its taste",
            "diethylene glycol was cheaper than water",
          ],
          "Metne göre özellikle çocuklar olmak üzere birçok hasta tablet yutmakta zorlanıyordu.",
        ],
        [
          "The company could only be charged with mislabelling because ----.",
          [
            "no law required drugs to be proven safe",
            "the inspectors found no remaining bottles",
            "the chemist had left the company",
            "the deaths could not be linked to the drug",
            "the elixir contained a large amount of alcohol",
          ],
          "O dönemde güvenlik testi için yasal bir zorunluluk yoktu; bu yüzden yalnızca yanlış etiketleme suçlaması yapılabildi.",
        ],
        [
          "It can be understood from the passage that the 1938 law ----.",
          [
            "was a direct response to the tragedy",
            "had been planned many years earlier",
            "applied only to liquid medicines",
            "was opposed by the public",
            "banned the use of sulfanilamide",
          ],
          "Ölümlere duyulan kamuoyu öfkesi Kongre'yi yasayı çıkarmaya yöneltmiştir.",
        ],
      ],
    },
    {
      text:
        "In the early 1970s, the Japanese biochemist Akira Endo, who worked for the pharmaceutical company Sankyo, became interested in finding a drug to lower blood cholesterol, a major cause of heart disease. As a young man, he had been inspired by the story of Alexander Fleming and penicillin, and he reasoned that some fungi might produce substances that block the enzyme the body uses to make cholesterol, as a way of defending themselves against other microorganisms. Over two years, Endo and a colleague tested more than six thousand strains of fungi. In 1973 they found what they were looking for in a blue-green mould, Penicillium citrinum, taken from rice stored at a grain shop in Kyoto. The compound, later called mevastatin, lowered cholesterol in hens, dogs and monkeys, and early tests in patients were encouraging. In 1980, however, Sankyo stopped development after reports that very high doses might have caused tumours in dogs. Other companies built on Endo's discovery, and in 1987 a closely related drug, lovastatin, became the first statin approved in the United States. Statins are now taken by many millions of people worldwide, and Endo is widely regarded as having made one of the most important medical discoveries of the twentieth century, although he never became wealthy from it.",
      questions: [
        [
          "According to the passage, Endo looked for his drug in fungi because he believed that ----.",
          [
            "they might use such substances to defend themselves",
            "fungi contained large amounts of cholesterol",
            "penicillin could lower cholesterol",
            "fungi were easy to grow on rice",
            "his company sold mushrooms",
          ],
          "Metne göre Endo, mantarların kendilerini savunmak için kolesterol yapımını engelleyen maddeler üretebileceğini düşünüyordu.",
        ],
        [
          "Sankyo stopped developing mevastatin because ----.",
          [
            "of concerns about its safety in animals",
            "it did not lower cholesterol in patients",
            "another company had already patented it",
            "Endo decided to leave the company",
            "it could not be produced in large amounts",
          ],
          "Çok yüksek dozların köpeklerde tümöre yol açmış olabileceğine dair raporlar geliştirmeyi durdurdu.",
        ],
        [
          "It can be inferred from the passage that Endo ----.",
          [
            "did not profit greatly from his discovery",
            "developed lovastatin himself in America",
            "was the first to discover penicillin",
            "regretted searching through so many fungi",
            "was unknown to other scientists",
          ],
          "Metnin sonunda keşfinden hiçbir zaman zengin olmadığı belirtilir.",
        ],
      ],
    },
    {
      text:
        "In 1948, the Australian psychiatrist John Cade, who had spent three years as a prisoner of war, was working in a small hospital near Melbourne. He suspected that mania, a condition of extreme excitement and overactivity, might be caused by a toxic substance in the body, and he began injecting guinea pigs with urine from his patients to look for it. To help dissolve one of the substances he was testing, uric acid, he used a lithium salt. To his surprise, the animals given lithium became calm and unresponsive, though they were not harmed. Cade wondered whether lithium itself might have a calming effect. After taking lithium carbonate himself to check that it was safe, he gave it to ten patients with mania. The results were remarkable. One man who had been severely ill for five years improved so much within weeks that he was able to leave the hospital and return to work. Cade published his findings in 1949, but the treatment was slow to spread. Lithium can be toxic in high doses, and several deaths in the United States, where lithium salts were being sold as a salt substitute, made doctors cautious. It was not approved there until 1970. Today lithium remains one of the most effective treatments for bipolar disorder.",
      questions: [
        [
          "According to the passage, Cade first used lithium because ----.",
          [
            "it helped another substance to dissolve",
            "he knew it could calm manic patients",
            "it was already used as a medicine",
            "his guinea pigs needed salt",
            "other drugs were too expensive",
          ],
          "Metne göre test ettiği ürik asidin çözünmesine yardım etmek için bir lityum tuzu kullandı.",
        ],
        [
          "Cade took lithium carbonate himself in order to ----.",
          [
            "make sure it was not dangerous",
            "find out if it caused mania",
            "show that guinea pigs were unharmed",
            "prove that his patients were lying",
            "improve his own mood",
          ],
          "Güvenli olduğunu kontrol etmek için önce kendisi aldı.",
        ],
        [
          "It can be understood from the passage that the treatment spread slowly mainly because ----.",
          [
            "of fears about lithium's toxicity",
            "Cade refused to publish his results",
            "the patients did not improve",
            "lithium was difficult to obtain",
            "guinea pigs reacted badly to it",
          ],
          "Lityumun yüksek dozlarda zehirli olması ve ABD'deki ölümler doktorları temkinli yaptı.",
        ],
      ],
    },
    {
      text:
        "Philip Hench, a doctor at the Mayo Clinic in Minnesota, spent years puzzling over an observation: patients with rheumatoid arthritis, a painful inflammation of the joints, often improved dramatically when they became pregnant or developed jaundice. He suspected that a natural substance produced by the body was responsible. Working with the chemist Edward Kendall, who had isolated several hormones from the adrenal glands, Hench decided to test one of them, then known only as 'Compound E'. In September 1948, he gave injections of it to a 29-year-old woman who had been so crippled by arthritis that she could barely get out of bed. Within days she was walking, and soon afterwards she went shopping in town. Other patients responded just as well, and when films of their recovery were shown at a medical conference, the audience gave a standing ovation. The hormone, renamed cortisone, was hailed as a miracle drug, and in 1950 Hench, Kendall and the Swiss chemist Tadeus Reichstein shared the Nobel Prize. Enthusiasm soon cooled, however. Doctors discovered that long-term use of high doses caused serious side effects, including weakened bones, weight gain and high blood pressure, and cortisone and related drugs are now used more carefully.",
      questions: [
        [
          "According to the passage, Hench suspected a natural substance because ----.",
          [
            "patients improved during certain natural conditions",
            "Kendall had already cured arthritis",
            "the disease was very common among people in Minnesota",
            "jaundice was caused by a hormone",
            "pregnant women never developed arthritis",
          ],
          "Hastalar hamilelik ya da sarılık gibi doğal durumlarda iyileşiyordu.",
        ],
        [
          "The standing ovation at the conference shows that ----.",
          [
            "the results made a deep impression on doctors",
            "Hench was already very famous",
            "the patients attended the meeting",
            "the films were of poor quality",
            "the conference was held in Sweden, where the Nobel Prize is awarded",
          ],
          "Ayakta alkış, sonuçların doktorlar üzerinde derin bir etki bıraktığını gösterir.",
        ],
        [
          "It can be inferred from the passage that cortisone ----.",
          [
            "turned out to have important drawbacks",
            "was never used again after 1950",
            "cured arthritis permanently",
            "had no effect on most patients",
            "was discovered by Reichstein alone",
          ],
          "Uzun süreli yüksek dozların ciddi yan etkileri olduğu anlaşıldı; yani önemli dezavantajları vardı.",
        ],
      ],
    },
    {
      text:
        "In the late 1950s, the Scottish pharmacologist James Black, working for the chemical company ICI, set out to tackle angina, the chest pain that occurs when the heart muscle does not receive enough oxygen. Most doctors at the time tried to increase the supply of oxygen to the heart by widening its blood vessels. Black took the opposite approach: he reasoned that it would be better to reduce the heart's demand for oxygen. He knew that adrenaline and similar hormones make the heart beat faster and more forcefully, especially during exercise or stress, and that they act through structures on the surface of heart cells called beta receptors. If these receptors could be blocked, the heart would work less hard. After several years of research, Black's team produced propranolol, which was introduced in 1964. It proved effective not only against angina but also against high blood pressure and certain irregular heart rhythms, and beta blockers came to be prescribed to many millions of patients. Black's method of designing a drug to fit a specific target in the body, rather than testing large numbers of chemicals at random, was highly influential. He received the Nobel Prize in 1988.",
      questions: [
        [
          "According to the passage, Black's approach to angina differed from that of most doctors in that he ----.",
          [
            "aimed to reduce the heart's need for oxygen",
            "tried to widen the blood vessels",
            "used adrenaline to treat patients",
            "recommended more exercise for patients with chest pain",
            "worked for a university",
          ],
          "Metne göre çoğu doktor oksijen arzını artırmaya çalışırken Black kalbin oksijen talebini azaltmayı hedefledi.",
        ],
        [
          "Beta receptors are described in the passage as ----.",
          [
            "structures through which certain hormones act",
            "drugs used to treat high blood pressure",
            "blood vessels that supply the heart",
            "cells that produce adrenaline",
            "a type of irregular heart rhythm",
          ],
          "Beta reseptörleri, adrenalin ve benzeri hormonların etki ettiği kalp hücresi yüzeyindeki yapılardır.",
        ],
        [
          "It can be understood from the passage that Black's way of designing drugs ----.",
          [
            "was based on a specific target rather than chance",
            "involved testing chemicals at random",
            "was rejected by other scientists",
            "was used only for heart disease",
            "had been common for many years",
          ],
          "Black, rastgele kimyasal test etmek yerine vücuttaki belirli bir hedefe uyan ilaç tasarladı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the early 1960s, the chemist Stewart Adams and his team at the British company Boots were searching for a safer alternative to aspirin. ---- In 1961 they patented ibuprofen, and Adams is said to have tested it on himself to relieve a headache before giving a speech.",
      [
        "After testing hundreds of compounds, they found one that was both effective and well tolerated.",
        "Aspirin was first produced in Germany at the end of the nineteenth century.",
        "Many chemists work for large companies rather than universities.",
        "Headaches are among the most common reasons for visiting a pharmacy.",
        "Boots opened its first shop in Nottingham in the nineteenth century and later grew into a national chain.",
      ],
      "Boşluktan sonra 1961'de ibuprofenin patentlendiği anlatılır; boşluğa yüzlerce bileşik test edildikten sonra etkili ve iyi tolere edilen birinin bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1898, a German company began selling a new medicine for coughs and breathing problems under the brand name Heroin. ---- In fact, it turned out to be even more addictive, and by the 1920s it had been banned or restricted in many countries.",
      [
        "It was advertised as a safe substitute for morphine that would not cause addiction.",
        "Coughs are often caused by viral infections.",
        "Many medicines were sold without a prescription at that time.",
        "Germany had a large chemical industry in the 1890s.",
        "Some brand names have become so familiar that they are now used as ordinary words in everyday speech.",
      ],
      "Boşluktan sonra 'In fact' ile aslında daha bağımlılık yapıcı olduğu anlatılır; boşluğa ilacın bağımlılık yapmayan güvenli bir morfin alternatifi olarak tanıtıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In medieval Europe, a plant called goat's rue was used to treat a condition that caused frequent urination. ---- In 1957, the French doctor Jean Sterne introduced a related drug, metformin, which is now one of the most commonly prescribed treatments for type 2 diabetes.",
      [
        "Later, scientists found that it contained a substance that lowers blood sugar.",
        "Goats are kept for their milk and meat.",
        "Medieval doctors often used herbs.",
        "France is famous for its medical schools.",
        "Many plants used in traditional medicine have bitter-tasting leaves and roots.",
      ],
      "Boşluktan sonra ilgili bir ilacın tanıtıldığı anlatılır; boşluğa bitkinin kan şekerini düşüren bir madde içerdiğinin bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Colchicine, a drug used to treat gout, comes from the autumn crocus. ---- Because the effective dose is close to the toxic dose, however, it must be prescribed with great care.",
      [
        "Extracts of the plant have been used to relieve painful swollen joints for many centuries.",
        "Crocuses are popular garden flowers.",
        "Gout was once called the disease of kings because it was linked to rich food and wine.",
        "Many poisonous plants have bright flowers.",
        "Autumn is the season of falling leaves.",
      ],
      "Boşluktan sonra 'however' ile dikkatli reçete edilmesi gerektiği söylenir; boşluğa bitkinin yüzyıllardır ağrılı eklemleri hafifletmek için kullanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Codeine is a painkiller that has no effect until the liver converts part of it into morphine. ---- In a few children, this has led to dangerous breathing problems, and many countries now restrict its use in young patients.",
      [
        "Some people, because of their genes, carry out this conversion unusually quickly.",
        "The liver is located on the right side of the abdomen.",
        "Morphine was first isolated in Germany.",
        "Many children have their tonsils removed.",
        "Painkillers such as paracetamol are sold in most supermarkets without a prescription.",
      ],
      "Boşluktan sonra bazı çocuklarda tehlikeli solunum sorunları görüldüğü anlatılır; boşluğa bazı kişilerin genleri nedeniyle bu dönüşümü alışılmadık hızda yaptığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1960, the American government approved the first oral contraceptive pill. ---- Within a few years, millions of women were using it, and it had a profound effect on family life and women's education and careers.",
      [
        "It had been developed by the biologist Gregory Pincus and his colleagues during the 1950s.",
        "The American government is based in Washington.",
        "Pills are easier to take than injections.",
        "Family life changed in many ways after the war.",
        "During the 1960s, a growing number of women went to university and began professional careers.",
      ],
      "Boşluktan sonra 'it' ile hapın kullanımı anlatılır; boşluğa hapın 1950'lerde Gregory Pincus ve meslektaşlarınca geliştirildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1960, the Belgian chemist Paul Janssen created fentanyl, a painkiller far stronger than morphine.",
        "Because it acts quickly and wears off quickly, it became widely used in surgery.",
        "Belgium is famous for its chocolate.",
        "In recent years, however, illegally made fentanyl has caused many overdose deaths.",
        "Even a tiny amount can stop a person's breathing.",
      ],
      odd: 2,
      why: "Parça fentanili anlatır. Belçika'nın çikolatasıyla ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Botulinum toxin is one of the most poisonous substances known.",
        "In the 1970s, the American eye doctor Alan Scott began using tiny amounts of it to treat crossed eyes.",
        "It works by temporarily blocking the nerve signals that make muscles contract.",
        "Eye doctors also test patients' vision with letter charts.",
        "Today it is used for many conditions, including migraine and muscle spasms.",
      ],
      odd: 3,
      why: "Parça botulinum toksininin tıbbi kullanımını anlatır. Göz doktorlarının harf tablolarıyla görme testi yaptığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1989, a Canadian researcher studying a blood pressure drug used grapefruit juice to hide the taste of alcohol.",
        "He was surprised to find that levels of the drug in the blood were much higher than expected.",
        "Grapefruit juice, it turned out, blocks an enzyme in the gut that breaks down many medicines.",
        "Canada produces large amounts of maple syrup.",
        "Patients taking certain drugs are now advised to avoid grapefruit altogether.",
      ],
      odd: 3,
      why: "Parça greyfurt suyu ile ilaç etkileşimini anlatır. Kanada'nın büyük miktarda akçaağaç şurubu ürettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Before a new drug can be approved, it usually passes through several stages of clinical trials.",
        "The first stage tests its safety in a small number of healthy volunteers.",
        "Later stages compare it with existing treatments in hundreds or thousands of patients.",
        "Many volunteers are university students.",
        "The whole process can take more than ten years and cost a great deal of money.",
      ],
      odd: 3,
      why: "Parça klinik araştırma aşamalarını anlatır. Pek çok gönüllünün üniversite öğrencisi olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1617, the apothecaries of London formed their own society, separate from the grocers.",
        "Apothecaries prepared and sold medicines, and many also gave medical advice.",
        "London's markets sold spices from all over the world.",
        "Over time, the society became responsible for training and licensing its members.",
        "Its historic hall in the City of London is still in use today.",
      ],
      odd: 2,
      why: "Parça Londra eczacılar derneğini anlatır. Londra pazarlarında dünyanın her yerinden baharat satıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many important medicines have been discovered by accident.",
        "Penicillin, for example, was found when mould contaminated a laboratory dish.",
        "Some drugs developed for one purpose turned out to be useful for quite different conditions.",
        "Researchers therefore pay close attention to unexpected results in their experiments.",
        "Laboratory dishes are usually made of glass or plastic.",
      ],
      odd: 4,
      why: "Parça ilaçların tesadüfen keşfini anlatır. Laboratuvar kaplarının genellikle cam ya da plastikten yapıldığını söyleyen V. cümle konu dışıdır.",
    },
  ],
};
