import type { YokdilDeneme } from "./types";

export const SAGLIK_51: YokdilDeneme = {
  no: 51,
  field: "saglik",
  vocab: [
    [
      "The patient was not ---- for a human heart transplant because of his poor overall health.",
      ["eligible", "grateful", "responsible", "curious", "familiar"],
      "Hastanın genel sağlığı kötü olduğu için insan kalbi nakli için 'uygun' (eligible) olmadığı anlatılır.",
    ],
    [
      "The vaccine reduced cases of severe malaria, although its ---- was only moderate.",
      ["effectiveness", "popularity", "appearance", "temperature", "simplicity"],
      "Aşının ağır sıtma vakalarını azalttığı ama 'etkililiğinin' (effectiveness) yalnızca orta düzeyde olduğu anlatılır.",
    ],
    [
      "Synthetic mRNA at first ---- a strong inflammatory reaction in the body.",
      ["triggered", "prevented", "measured", "concealed", "repaired"],
      "Sentetik mRNA'nın başlangıçta vücutta güçlü bir iltihabi tepkiyi 'tetiklediği' (triggered) anlatılır.",
    ],
    [
      "The illegal oil had been ---- with a chemical so that it could not be sold for cooking.",
      ["denatured", "decorated", "delivered", "defended", "deserved"],
      "Yasa dışı yağın yemeklik olarak satılamaması için bir kimyasalla 'bozulmuş' (denatured) olduğu anlatılır.",
    ],
    [
      "The chemicals are so ---- that they can remain in the environment for centuries.",
      ["persistent", "fragile", "colourful", "nutritious", "temporary"],
      "Kimyasalların çevrede yüzyıllarca kalabilecek kadar 'kalıcı' (persistent) olduğu anlatılır.",
    ],
    [
      "If the cage trials raised safety concerns, the researchers would have to ---- the planned release.",
      ["call off", "take in", "give off", "look up", "put on"],
      "Kafes denemeleri güvenlik kaygısı doğurursa araştırmacıların planlanan salımı 'iptal etmesi' (call off) gerekeceği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the patient died, he ---- for about two months with the pig's heart.",
      ["had lived", "lives", "has lived", "will live", "is living"],
      "Geçmişteki bir andan önce tamamlanmış süre: 'had lived'.",
    ],
    [
      "If the researcher had given up after being demoted, the vaccines ---- so quickly.",
      ["might not have been developed", "will not be developed", "are not developed", "had not been developed", "would not develop"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might not have been developed'.",
    ],
    [
      "The first malaria vaccine ---- by the World Health Organization in 2021.",
      ["was recommended", "recommended", "has recommended", "recommends", "is recommending"],
      "Aşı önerilmiştir; edilgen geçmiş zaman: 'was recommended'.",
    ],
    [
      "---- the treatment can cure the disease, its high cost puts it out of reach of most patients.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Tedavinin hastalığı iyileştirebilmesi ile yüksek maliyeti zıttır: 'Although'.",
    ],
    [
      "The lawyer, ---- client was a farmer whose cows had died, discovered evidence of pollution.",
      ["whose", "who", "which", "whom", "where"],
      "Avukatın müvekkili; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the uridine was replaced ---- the mRNA stop triggering inflammation.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The disease was at first thought to be infectious, ---- delayed the search for its real cause.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more generations the mosquitoes produced, ---- the population became.",
      ["the smaller", "the smallest", "smaller", "smallest", "so small"],
      "'The more ..., the smaller ...' paralel yapısı: 'the smaller'.",
    ],
    [
      "Regulators recommended that the chemicals ---- removed from drinking water.",
      ["be", "are", "were", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
    [
      "The pig's heart is believed ---- a virus that may have contributed to the failure.",
      ["to have carried", "carrying", "to carry", "carried", "having carried"],
      "Geçmişe ait bir durum için mastarın geçmiş biçimi: 'to have carried'.",
    ],
    [
      "The patient's own cells are edited outside the body ---- they can produce healthy haemoglobin.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The company was accused of ---- the chemical into the local river for decades.",
      ["releasing", "to release", "release", "released", "to releasing"],
      "'accuse sb of doing sth' kalıbı: 'releasing'.",
    ],
    [
      "Had the oil not been sold door to door, it ---- so easily.",
      ["might not have spread", "does not spread", "will not spread", "had not spread", "would not spread"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have spread'.",
    ],
    [
      "Neither the first vaccine nor the second ---- complete protection against malaria.",
      ["provides", "providing", "to provide", "have provide", "provide to"],
      "'Neither ... nor' yapısında fiile yakın özne tekildir; genel geçer bilgi: 'provides'.",
    ],
  ],
  cloze: [
    {
      text:
        "Thousands of people die each year while waiting for a donor heart, {1} scientists have long hoped that organs from animals could fill the gap. The main obstacle is the immune system, which rapidly attacks tissue from another species. On 7 January 2022, surgeons at the University of Maryland transplanted the heart of a genetically modified pig into David Bennett, a fifty-seven-year-old man with terminal heart disease who was not eligible for a human transplant. The pig had been bred with ten genetic changes: several pig genes had been switched off to reduce rejection and to prevent the heart from growing too large, {2} six human genes had been added to make the organ more compatible with the human body. For several weeks, the heart worked well, {3} Bennett was able to talk with his family and watch sport on television. However, his condition later deteriorated, and he died in March, about two months after the operation. Investigators found traces of a pig virus in the heart, {4} may have contributed to its failure, although the exact cause was unclear. A second patient received a pig heart in 2023 and lived for about six weeks. Researchers believe that, despite these setbacks, the operations have provided valuable information, {5} further trials are being planned.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "until"],
          "Bekleme sırasında ölümler ve bilim insanlarının umudu birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "unless", "although", "or"],
          "Bazı domuz genlerinin kapatılması ve insan genlerinin eklenmesi birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "although", "or"],
          "Kalbin iyi çalışması ve hastanın ailesiyle konuşabilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra virüsü niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "Ameliyatların değerli bilgi sağlaması ve yeni denemelerin planlanması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Malaria kills more than 600,000 people every year, most of them children under five in Africa. For decades, scientists struggled to develop a vaccine, {1} the parasite that causes the disease is far more complex than most viruses and bacteria, and it changes as it passes through different stages of its life cycle. The first vaccine, known as RTS,S, was developed by a pharmaceutical company over more than thirty years. In large trials, it reduced cases of severe malaria in young children by around thirty per cent, {2} this was modest compared with vaccines against many other diseases. In 2021, the World Health Organization recommended its use in areas with moderate or high transmission, {3} pilot programmes in several African countries had shown that it saved lives. Two years later, the organisation recommended a second vaccine, R21, {4} was developed at the University of Oxford. It appeared to be at least as effective, {5} it could be manufactured more cheaply and in much larger quantities. Experts stress, however, that vaccines must be combined with other measures, such as insecticide-treated bed nets and prompt treatment, to control the disease.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Aşı geliştirmenin zorluğunun nedeni parazitin karmaşıklığıdır: 'because'.",
        ],
        [
          "(27) ----",
          ["but", "and", "so", "or", "for"],
          "Ağır vakaları azaltması ile bunun mütevazı kalması zıttır: 'but'.",
        ],
        [
          "(28) ----",
          ["after", "unless", "although", "so that", "until"],
          "Tavsiye, pilot programların hayat kurtardığını göstermesinden sonra geldi: 'after'.",
        ],
        [
          "(29) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgülden sonra aşıyı niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "En az o kadar etkili olması ve daha ucuz üretilebilmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the pig's heart worked well for several weeks, ----.",
      [
        "the patient died about two months after the operation",
        "pigs are intelligent animals",
        "Maryland is a state",
        "hearts pump blood",
        "the company that bred the pig had made ten separate changes to the animal's genes before it was born",
      ],
      "'Although' zıtlık ister: domuz kalbi birkaç hafta iyi çalışsa da hasta ameliyattan yaklaşık iki ay sonra öldü.",
    ],
    [
      "If the researcher had stopped working on mRNA in the 1990s, ----.",
      [
        "the COVID-19 vaccines might have taken much longer to develop",
        "Hungary is in Europe",
        "vaccines are injected",
        "universities need funding",
        "the immunologist she met at a photocopier would have studied a different subject at university",
      ],
      "Üçüncü tip koşul: araştırmacı 1990'larda mRNA üzerindeki çalışmayı bıraksaydı COVID-19 aşılarının geliştirilmesi çok daha uzun sürebilirdi.",
    ],
    [
      "----, the government launched a programme to exchange the oil.",
      [
        "Once doctors had linked the illness to cheap cooking oil",
        "Although Madrid is a large city",
        "Unless the merchants agreed",
        "Since olive oil is healthy",
        "While the courts were preparing to try the merchants who had sold the oil several years later",
      ],
      "Doktorlar hastalığı ucuz yemeklik yağla ilişkilendirdikten sonra hükümet yağı değiştirme programı başlattı.",
    ],
    [
      "Doctors remove the patient's stem cells ----.",
      [
        "so that they can be edited in a laboratory",
        "although the cells are small",
        "unless the patient is young",
        "because blood is red",
        "while families of patients in Africa are campaigning for the treatment to be made more widely available",
      ],
      "Doktorlar hastanın kök hücrelerini laboratuvarda düzenlenebilmeleri için çıkarır.",
    ],
    [
      "Since the chemicals contain extremely strong bonds between carbon and fluorine, ----.",
      [
        "they break down very slowly in the environment",
        "pans are used for cooking",
        "fluorine is an element",
        "water is essential",
        "the lawyer who represented the farmer spent many years collecting documents from the company",
      ],
      "'Since' neden bildirir: kimyasallar karbon ile flor arasında son derece güçlü bağlar içerdiği için çevrede çok yavaş parçalanır.",
    ],
    [
      "Not only could a gene drive reduce malaria, ----.",
      [
        "but it could also spread across national borders in ways that are hard to control",
        "and mosquitoes bite people",
        "since Italy has laboratories",
        "so the cages were large",
        "unless scientists had already tested the technique on populations of mosquitoes kept in laboratories",
      ],
      "'Not only ... but also' yapısı tamamlanır: gen sürücüsü sıtmayı azaltmakla kalmayabilir, ulusal sınırlar ötesine kontrol edilmesi zor biçimde de yayılabilir.",
    ],
    [
      "Once the WHO recommended the second vaccine, ----.",
      [
        "much larger quantities could be supplied to African countries",
        "malaria is a disease",
        "Oxford is a university city",
        "children need vaccines",
        "the company that developed the first vaccine had been working on it for more than thirty years",
      ],
      "DSÖ ikinci aşıyı önerince Afrika ülkelerine çok daha büyük miktarlar sağlanabildi.",
    ],
    [
      "Unless the poisonous oil had been withdrawn from sale, ----.",
      [
        "many more people might have become ill",
        "oil is used for cooking",
        "Spain is a large country",
        "plastic containers are cheap",
        "the doctors who treated the first patients would have been unable to find any beds in the hospitals",
      ],
      "'Unless' olumsuz koşul: zehirli yağ satıştan çekilmeseydi çok daha fazla kişi hastalanabilirdi.",
    ],
    [
      "The modified mosquitoes spread the gene so effectively ----.",
      [
        "that the caged populations collapsed within a few years",
        "although mosquitoes are small",
        "because cages are closed",
        "unless the genes changed",
        "while researchers were debating whether the technique should ever be used outside the laboratory",
      ],
      "Değiştirilmiş sivrisinekler geni o kadar etkili yaydı ki kafesteki popülasyonlar birkaç yıl içinde çöktü.",
    ],
    [
      "Even though the operations did not lead to long-term survival, ----.",
      [
        "they provided valuable information for future research",
        "pigs are farm animals",
        "surgeons are skilled",
        "the hospital was large",
        "the first patient had been suffering from a serious heart condition for a long period before the operation",
      ],
      "'Even though' zıtlık ister: ameliyatlar uzun süreli hayatta kalmayı sağlamasa da gelecekteki araştırmalar için değerli bilgi sağladı.",
    ],
    [
      "As most people with sickle cell disease live in Africa, ----.",
      [
        "the cost of the new treatment raises serious questions about access",
        "Africa is large",
        "blood carries oxygen",
        "cells divide",
        "the first patient to receive the treatment in a trial was a woman from the American state of Mississippi",
      ],
      "Orak hücre hastalarının çoğu Afrika'da yaşadığı için yeni tedavinin maliyeti erişim konusunda ciddi sorular doğurur.",
    ],
  ],
  enTr: [
    [
      "The pig had been genetically modified to reduce the risk of rejection.",
      [
        "Domuz, reddedilme riskini azaltmak için genetik olarak değiştirilmişti.",
        "Domuz, reddedilme riskini artırmak için seçilmişti.",
        "Reddedilme riskini azaltmak isteyen cerrahlar, domuzun genlerinde hiçbir değişiklik yapmamaya karar verdi.",
        "Domuz hastayı reddetti.",
        "Domuzun genleri hiç incelenmedi.",
      ],
      "'The pig had been genetically modified' 'domuz genetik olarak değiştirilmişti', 'to reduce the risk of rejection' 'reddedilme riskini azaltmak için' karşılığıdır.",
    ],
    [
      "The vaccine reduced severe cases by about a third.",
      [
        "Aşı, ağır vakaları yaklaşık üçte bir oranında azalttı.",
        "Aşı, ağır vakaları üç katına çıkardı.",
        "Ağır vakaların üçte birini önleyen aşı, hafif vakalar üzerinde hiçbir etki göstermediği için kullanılmadı.",
        "Ağır vakalar aşıyı azalttı.",
        "Aşı hiçbir vakayı etkilemedi.",
      ],
      "'The vaccine reduced severe cases' 'aşı ağır vakaları azalttı', 'by about a third' 'yaklaşık üçte bir oranında' karşılığıdır.",
    ],
    [
      "The researcher struggled for years to obtain funding for her work.",
      [
        "Araştırmacı, çalışması için yıllarca fon bulmakta zorlandı.",
        "Araştırmacı, çalışması için kolayca fon buldu.",
        "Çalışması için fon bulmakta zorlanan araştırmacı, sonunda bilimi bırakarak başka bir mesleğe geçti.",
        "Fon araştırmacıyı buldu.",
        "Araştırmacının çalışmaya ihtiyacı yoktu.",
      ],
      "'The researcher struggled for years' 'araştırmacı yıllarca zorlandı', 'to obtain funding for her work' 'çalışması için fon bulmakta' karşılığıdır.",
    ],
    [
      "The oil was sold door to door in unlabelled plastic containers.",
      [
        "Yağ, kapı kapı dolaşılarak etiketsiz plastik kaplarda satıldı.",
        "Yağ, yalnızca büyük marketlerde etiketli şişelerde satıldı.",
        "Etiketsiz plastik kaplarda satılan yağın zararsız olduğu, satıcılar tarafından müşterilere garanti edildi.",
        "Plastik kaplar kapı kapı dağıtıldı ama yağ satılmadı.",
        "Yağ hiç satılmadı.",
      ],
      "'The oil was sold door to door' 'yağ kapı kapı dolaşılarak satıldı', 'in unlabelled plastic containers' 'etiketsiz plastik kaplarda' karşılığıdır.",
    ],
    [
      "The chemicals have been found in the blood of almost everyone tested.",
      [
        "Kimyasallar, test edilen hemen herkesin kanında bulundu.",
        "Kimyasallar, test edilen kişilerin hiçbirinin kanında bulunmadı.",
        "Test edilen hemen herkesin kanında bulunması beklenen kimyasallara, yalnızca birkaç kişide rastlandı.",
        "Kan kimyasalları test etti.",
        "Kimyasallar yalnızca hayvanlarda bulundu.",
      ],
      "'The chemicals have been found' 'kimyasallar bulundu', 'in the blood of almost everyone tested' 'test edilen hemen herkesin kanında' karşılığıdır.",
    ],
    [
      "Normally, a gene is passed on to only half of an animal's offspring.",
      [
        "Normalde bir gen, bir hayvanın yavrularının yalnızca yarısına aktarılır.",
        "Normalde bir gen, bir hayvanın bütün yavrularına aktarılır.",
        "Bir hayvanın yavrularının yarısına aktarılan genler, birkaç nesil içinde tamamen ortadan kaybolur.",
        "Yavrular genleri ebeveynlerine aktarır.",
        "Hayvanların yavruları hiç gen taşımaz.",
      ],
      "'Normally, a gene is passed on' 'normalde bir gen aktarılır', 'to only half of an animal's offspring' 'bir hayvanın yavrularının yalnızca yarısına' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Hasta, ameliyattan sonra ailesiyle konuşabildi.",
      [
        "The patient was able to talk with his family after the operation.",
        "The patient's family refused to visit him after the operation.",
        "The patient wanted to talk with his family after the operation, but the doctors did not allow it.",
        "The family operated on the patient.",
        "The patient never woke up after the operation.",
      ],
      "'Hasta konuşabildi' 'the patient was able to talk', 'ameliyattan sonra ailesiyle' 'with his family after the operation' karşılığıdır.",
    ],
    [
      "İkinci aşı daha ucuza ve çok daha büyük miktarlarda üretilebiliyordu.",
      [
        "The second vaccine could be produced more cheaply and in much larger quantities.",
        "The second vaccine was more expensive and harder to produce.",
        "The second vaccine was expected to be cheaper, but it proved more expensive to produce than the first.",
        "Larger quantities of the first vaccine were produced.",
        "The second vaccine was never produced.",
      ],
      "'İkinci aşı üretilebiliyordu' 'the second vaccine could be produced', 'daha ucuza ve çok daha büyük miktarlarda' 'more cheaply and in much larger quantities' karşılığıdır.",
    ],
    [
      "İki bilim insanı, 2023'te Nobel Ödülü'nü paylaştı.",
      [
        "The two scientists shared the Nobel Prize in 2023.",
        "The two scientists refused the Nobel Prize in 2023.",
        "One of the two scientists won the Nobel Prize in 2023, while the other received no recognition at all.",
        "The Nobel Prize was divided into two parts in 2023.",
        "The two scientists awarded the Nobel Prize.",
      ],
      "'İki bilim insanı paylaştı' 'the two scientists shared', '2023'te Nobel Ödülü'nü' 'the Nobel Prize in 2023' karşılığıdır.",
    ],
    [
      "Zehirli maddenin ne olduğu hiçbir zaman kesin olarak belirlenemedi.",
      [
        "The exact nature of the toxic substance was never conclusively identified.",
        "The toxic substance was identified within a few days.",
        "Scientists identified the toxic substance quickly, but the government refused to make the results public.",
        "The toxic substance identified the victims.",
        "There was no toxic substance.",
      ],
      "'Zehirli maddenin ne olduğu' 'the exact nature of the toxic substance', 'hiçbir zaman kesin olarak belirlenemedi' 'was never conclusively identified' karşılığıdır.",
    ],
    [
      "Çiftçi, ineklerinin ölümünden kimyasal şirketini sorumlu tuttu.",
      [
        "The farmer blamed the chemical company for the deaths of his cows.",
        "The chemical company blamed the farmer for the deaths of his cows.",
        "The farmer's cows died, but he never suspected that the chemical company was responsible.",
        "The cows were bought by the chemical company.",
        "The farmer worked for the chemical company.",
      ],
      "'Çiftçi sorumlu tuttu' 'the farmer blamed', 'ineklerinin ölümünden kimyasal şirketini' 'the chemical company for the deaths of his cows' karşılığıdır.",
    ],
    [
      "Değiştirilmiş sivrisinekler henüz doğaya salınmadı.",
      [
        "The modified mosquitoes have not yet been released into the wild.",
        "The modified mosquitoes were released into the wild many years ago.",
        "Scientists planned to release the modified mosquitoes, but they have since abandoned the project completely.",
        "The wild mosquitoes modified the laboratory ones.",
        "The mosquitoes escaped from the laboratory.",
      ],
      "'Değiştirilmiş sivrisinekler' 'the modified mosquitoes', 'henüz doğaya salınmadı' 'have not yet been released into the wild' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Katalin Karikó, a Hungarian-born biochemist, moved to the United States in 1985 with her husband and young daughter, reportedly carrying the family's savings hidden inside a teddy bear. She was convinced that messenger RNA, which carries genetic instructions from DNA to the cell's protein-making machinery, could be used to make cells produce therapeutic proteins. The idea was unfashionable, and at the University of Pennsylvania she repeatedly failed to obtain grants; in 1995, she was demoted. A problem also stood in the way: synthetic mRNA injected into animals provoked a strong inflammatory reaction. In 1997, she met the immunologist Drew Weissman, according to the story, while queuing at a photocopier, and the two began to collaborate. In 2005, they published a paper showing that replacing one of the building blocks of mRNA, uridine, with a slightly modified version called pseudouridine allowed the molecule to enter cells without triggering the immune reaction. The paper attracted little attention at first, but two companies later licensed the technology. Once COVID-19 appeared in 2020, the method allowed vaccines to be designed within days of the virus's genetic sequence being published, and they were approved before the end of the year. The two researchers received the Nobel Prize in Physiology or Medicine three years later.",
      questions: [
        [
          "According to the passage, Karikó's early career was difficult partly because ----.",
          [
            "her ideas about mRNA were not widely supported",
            "she had no laboratory",
            "she could not speak English",
            "the university had asked her to work on a vaccine against a different disease",
            "she lived in Hungary",
          ],
          "Metne göre fikri moda değildi ve tekrar tekrar fon bulamadı.",
        ],
        [
          "The key finding of the 2005 paper was that ----.",
          [
            "changing one component of mRNA avoided an immune reaction",
            "mRNA cannot enter cells",
            "uridine is essential",
            "vaccines could be designed within days of a virus's genetic sequence being published",
            "inflammation helps vaccines",
          ],
          "Uridinin psödoüridinle değiştirilmesi bağışıklık tepkisini engelledi.",
        ],
        [
          "It can be understood from the passage that the importance of the 2005 paper ----.",
          [
            "was not immediately recognised",
            "was clear at once",
            "was limited to animals",
            "was denied by the companies that later licensed the technology",
            "was ignored by the Nobel committee",
          ],
          "Makale yayımlandığında başta pek ilgi görmedi; önemi sonradan anlaşıldı.",
        ],
      ],
    },
    {
      text:
        "In May 1981, an eight-year-old boy died near Madrid of what appeared to be a severe pneumonia, and within weeks thousands of people in central and north-western Spain had fallen ill with fever, breathing difficulties and rashes. Many later developed severe muscle pain, weakness and damage to their nerves. At first, health officials suspected an infectious disease, and patients were isolated. However, doctors noticed that the illness did not spread within hospitals, that it affected whole families at once, and that it was concentrated in poorer areas around Madrid. A paediatrician who interviewed families found that the victims had cooked with cheap oil bought from travelling salesmen in unlabelled plastic containers. Investigations revealed that rapeseed oil imported for industrial use had been mixed with a chemical called aniline to make it unfit for eating; it had then been illegally refined, blended with other oils and sold as olive oil. In June, the government launched a programme to exchange the oil for genuine olive oil, and new cases fell sharply. About twenty thousand people were affected, and hundreds died in the first year, with many more deaths in the years that followed. In 1989, several oil merchants were convicted. The precise toxic substance in the oil, however, has never been conclusively identified.",
      questions: [
        [
          "According to the passage, doctors began to doubt that the disease was infectious because ----.",
          [
            "it did not spread among people in hospitals",
            "it affected only children",
            "no one died",
            "patients recovered quickly once they had been isolated from their families",
            "it occurred only in summer",
          ],
          "Metne göre hastalık hastanelerde yayılmıyordu ve bütün aileleri aynı anda etkiliyordu.",
        ],
        [
          "The oil was dangerous because ----.",
          [
            "industrial oil had been illegally processed and sold as food",
            "olive oil is unhealthy",
            "the containers were plastic",
            "it had been stored for too long in the shops of travelling salesmen",
            "it was imported",
          ],
          "Endüstriyel kullanım için ithal edilen kolza yağı yasa dışı biçimde işlenip zeytinyağı diye satılmıştı.",
        ],
        [
          "It can be understood from the passage that the exchange programme ----.",
          [
            "helped to reduce the number of new cases",
            "had no effect",
            "caused more illness",
            "was organised by the merchants who had sold the oil",
            "was introduced in 1989",
          ],
          "Programın ardından yeni vakalar keskin biçimde azaldı.",
        ],
      ],
    },
    {
      text:
        "Sickle cell disease is an inherited disorder in which a mutation causes red blood cells to become stiff and curved, blocking blood vessels and causing severe pain, organ damage and early death. It affects millions of people, most of them in Africa, India and among people of African descent elsewhere. Before birth, humans produce a form of haemoglobin known as fetal haemoglobin, which is not affected by the mutation, but a gene called BCL11A switches its production off in infancy. Scientists reasoned that turning fetal haemoglobin back on could treat the disease. In a new therapy, stem cells are removed from a patient's bone marrow and edited in a laboratory using the CRISPR gene-editing technique to disable the switch. The patient then receives strong chemotherapy to clear the remaining bone marrow cells before the edited cells are returned. In 2019, Victoria Gray, a woman from Mississippi, became the first patient with sickle cell disease to receive the treatment in a trial, and she has since been largely free of painful crises. In November 2023, the United Kingdom became the first country to approve the therapy, the first medicine based on CRISPR to be approved anywhere. Its price in the United States, however, is more than two million dollars, and the treatment requires specialised hospitals, raising serious questions about whether most patients will ever be able to receive it.",
      questions: [
        [
          "According to the passage, the therapy works by ----.",
          [
            "allowing the body to produce a form of haemoglobin unaffected by the disease",
            "removing the mutation from all cells",
            "replacing red blood cells",
            "giving patients a medicine that dissolves blockages in their blood vessels",
            "destroying the BCL11A protein in the blood",
          ],
          "Metne göre hastalıktan etkilenmeyen fetal hemoglobinin yeniden üretilmesini sağlar.",
        ],
        [
          "Chemotherapy is used in the treatment in order to ----.",
          [
            "make room for the edited cells",
            "kill the virus",
            "edit the genes",
            "reduce the pain that patients suffer during the crises caused by the disease",
            "lower the cost",
          ],
          "Düzenlenmiş hücreler geri verilmeden önce kalan kemik iliği hücrelerini temizler.",
        ],
        [
          "It can be understood from the passage that a major concern about the therapy is ----.",
          [
            "its limited accessibility",
            "its lack of effectiveness",
            "its approval in Britain",
            "the fact that it was tested only on patients from the United States",
            "its use of stem cells",
          ],
          "Yüksek maliyeti ve uzman hastane gerektirmesi erişim sorununu doğurur.",
        ],
      ],
    },
    {
      text:
        "PFAS are a family of several thousand synthetic chemicals that have been used since the 1940s in non-stick cookware, waterproof clothing, food packaging and firefighting foams. They are valued because they repel water and grease, but the extremely strong chemical bonds that give them these properties also mean that they barely break down in the environment, earning them the nickname 'forever chemicals'. Public concern grew after a legal case in West Virginia. In 1998, a farmer asked a lawyer, Rob Bilott, to investigate the deaths of his cattle near a landfill used by the chemical company DuPont. Bilott discovered that the company had for decades released a chemical known as PFOA into the local environment and had internal evidence of its potential harm. A class action followed, and an independent panel of scientists studied the health of about seventy thousand local residents. In 2012, it concluded that PFOA was probably linked to six diseases, including kidney and testicular cancer and thyroid disease. The company later agreed to pay hundreds of millions of dollars in settlements. Today, PFAS have been found in the blood of almost everyone tested in many countries and in water and soil around the world. Several governments have begun to restrict them and to set limits for drinking water, but removing them is expensive.",
      questions: [
        [
          "According to the passage, PFAS are called 'forever chemicals' because ----.",
          [
            "they break down extremely slowly",
            "they were used for a long time",
            "they cannot be banned",
            "they were first produced by the same company that later paid settlements",
            "they make products last longer",
          ],
          "Metne göre güçlü kimyasal bağları nedeniyle çevrede neredeyse hiç parçalanmazlar.",
        ],
        [
          "The panel of scientists was important because it ----.",
          [
            "found evidence linking PFOA to several diseases",
            "proved PFAS were harmless",
            "was paid by the farmer",
            "recommended that the chemicals should continue to be used in firefighting foam",
            "studied cattle",
          ],
          "PFOA'nın muhtemelen altı hastalıkla bağlantılı olduğu sonucuna vardı.",
        ],
        [
          "It can be understood from the passage that dealing with PFAS contamination ----.",
          [
            "is costly",
            "is simple",
            "has been completed",
            "is the responsibility of farmers who live near factories",
            "is unnecessary",
          ],
          "Hükümetler sınırlamalar getirmeye başladı ama temizlemek pahalıdır.",
        ],
      ],
    },
    {
      text:
        "In sexually reproducing organisms, a particular version of a gene is normally inherited by about half of an individual's offspring. A gene drive is a genetic system that breaks this rule, ensuring that a gene is passed on to almost all offspring, so that it can spread rapidly through a population even if it is harmful to the individuals that carry it. Scientists have proposed using gene drives based on the CRISPR gene-editing technique to fight malaria, which is spread by certain species of mosquito. In 2018, a team at Imperial College London reported a gene drive that disrupted a gene called doublesex, which is involved in sexual development, in the mosquito Anopheles gambiae, a major carrier of malaria in Africa. Females that inherited two copies of the altered gene could not bite or lay eggs. In cages in the laboratory, the drive spread through the populations, which collapsed completely within about eleven generations. Supporters argue that such techniques might prevent a vast number of deaths every year. Critics warn that once released, a gene drive could spread across national borders and might have unpredictable effects on ecosystems, and that it may be difficult or impossible to reverse. For these reasons, researchers have called for careful step-by-step testing and the involvement of affected communities before any release into the wild.",
      questions: [
        [
          "According to the passage, a gene drive differs from normal inheritance in that ----.",
          [
            "it passes a gene to nearly all offspring",
            "it affects only females",
            "it prevents reproduction completely",
            "it allows organisms to choose which genes their offspring will inherit",
            "it occurs only in mosquitoes",
          ],
          "Metne göre bir geni neredeyse bütün yavrulara aktarır.",
        ],
        [
          "The doublesex gene was targeted because ----.",
          [
            "disrupting it made affected females unable to bite or reproduce",
            "it causes malaria",
            "it is found in humans",
            "it allowed mosquitoes to survive in cages for longer than in the wild",
            "it makes mosquitoes larger",
          ],
          "İki kopya taşıyan dişiler ısıramıyor ve yumurtlayamıyordu.",
        ],
        [
          "It can be understood from the passage that critics are concerned mainly about ----.",
          [
            "the possible irreversible and wide-ranging effects of a release",
            "the cost of laboratory cages",
            "the number of lives saved",
            "the fact that the technique has already been used in several African countries",
            "the size of mosquitoes",
          ],
          "Salındıktan sonra sınırları aşabileceğinden, öngörülemez etkiler yaratabileceğinden ve geri alınamayabileceğinden endişe ederler.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In December 2017, the United States approved a treatment called Luxturna for patients with a rare inherited form of blindness caused by mutations in a single gene. ---- It was the first gene therapy approved in the country for an inherited disease, although its price was about 850,000 dollars for both eyes.",
      [
        "Surgeons inject a harmless virus carrying a working copy of the gene directly beneath the retina.",
        "Eyes are sensitive organs.",
        "Blindness has many causes.",
        "The condition usually begins in childhood, and many patients find it increasingly difficult to see in dim light.",
        "Genes are made of DNA.",
      ],
      "Boşluk tedavinin nasıl uygulandığını açıklayan bir cümle gerektirir; boşluğa genin çalışan kopyasını taşıyan zararsız bir virüsün retinanın altına enjekte edildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In September 1994, a number of racehorses in Hendra, a suburb of Brisbane in Australia, fell suddenly ill and died, and their trainer also died. ---- Scientists later found that it is carried, without causing illness, by large fruit bats known as flying foxes.",
      [
        "Investigators identified a previously unknown virus, which was named after the suburb.",
        "Brisbane is a large city.",
        "Horses are fast animals.",
        "The trainer had cared for the sick horses for several days before he too became ill and was taken to hospital.",
        "Bats are active at night.",
      ],
      "Boşluktan sonra 'it' ile virüsün taşıyıcısı anlatılır; boşluğa daha önce bilinmeyen bir virüsün tespit edildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In August 1991, a two-year-old boy in a small town in Peru was paralysed by polio. ---- In 1994, an international commission declared the Americas free of the disease.",
      [
        "No later case caused by the wild virus has ever been recorded anywhere in the Americas.",
        "Peru is in South America.",
        "Children play outside.",
        "The boy's family lived far from the nearest hospital, and health workers travelled for many hours to reach the village.",
        "Viruses are very small.",
      ],
      "Boşluktan sonra Amerika kıtasının hastalıktan arındırıldığı söylenir; boşluğa çocuğun kıtada vahşi virüse yakalandığı bilinen son kişi olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "For decades, people living along a river in Toyama Prefecture in Japan, especially older women, suffered from a disease that made their bones fragile and caused intense pain. ---- In 1968, it became the first illness officially recognised by the Japanese government as caused by pollution.",
      [
        "It was eventually traced to cadmium released by a mine upstream, which contaminated the water used to irrigate rice fields.",
        "Japan has many rivers.",
        "Rice is grown in paddies.",
        "Its name, 'itai-itai', comes from the cries of patients and means roughly 'it hurts, it hurts'.",
        "Older people often have weaker bones.",
      ],
      "Boşluk hastalığın kaynağını açıklayan bir cümle gerektirir; boşluğa yukarı akıştaki bir madenden salınan kadmiyuma kadar izlendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "From 1866, people with leprosy in Hawaii were forcibly sent to an isolated peninsula on the island of Molokai. ---- He eventually caught the disease himself and died in 1889, and he was declared a saint in 2009.",
      [
        "In 1873, a Belgian priest known as Father Damien went to live among them, building homes and a church and caring for the sick.",
        "Hawaii consists of many islands.",
        "Leprosy affects the skin.",
        "The settlement could be reached only by sea or by a steep path down high cliffs, which made escape almost impossible.",
        "Priests serve communities.",
      ],
      "Boşluktan sonra 'he' ile hastalığa yakalanıp ölen kişi anlatılır; boşluğa Belçikalı rahip Damien'in onların arasında yaşayıp hastalara baktığını söyleyen cümle gelmelidir.",
    ],
    [
      "In many parts of Rwanda, hilly terrain and poor roads made it difficult to deliver blood to rural clinics quickly. ---- The service has since been extended to medicines and vaccines and to several other countries.",
      [
        "From 2016, a company began delivering blood to hospitals by small drones, which dropped packages by parachute.",
        "Rwanda is a small country.",
        "Blood is red.",
        "Before the service began, women who lost a lot of blood during childbirth were among those most likely to die while waiting.",
        "Roads need maintenance.",
      ],
      "Boşluktan sonra 'the service' ifadesi gelir; boşluğa 2016'dan itibaren bir şirketin hastanelere küçük insansız hava araçlarıyla kan taşıdığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Each November, many men grow moustaches to raise money and awareness for men's health.",
        "The campaign, known as Movember, began in Australia in 2003.",
        "Beards have gone in and out of fashion over the centuries.",
        "It focuses on prostate cancer, testicular cancer and mental health.",
        "It has funded hundreds of research projects worldwide.",
      ],
      odd: 2,
      why: "Parça Movember kampanyasını anlatır. Sakalların yüzyıllar boyunca moda olup çıktığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The pink ribbon became an international symbol of breast cancer awareness in the early 1990s.",
        "Pink is a popular colour for clothing.",
        "It is worn during campaigns to encourage women to have regular screening.",
        "The ribbon has helped to raise large sums for research.",
        "Critics argue that some companies use it mainly to sell products.",
      ],
      odd: 1,
      why: "Parça pembe kurdeleyi anlatır. Pembenin giyimde popüler bir renk olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1991, a group of artists in New York created the red ribbon as a symbol of support for people living with HIV.",
        "It was worn by celebrities at a famous awards ceremony that year.",
        "New York has many art galleries.",
        "The symbol quickly spread around the world.",
        "It remains associated with World AIDS Day on 1 December.",
      ],
      odd: 2,
      why: "Parça kırmızı kurdeleyi anlatır. New York'ta pek çok sanat galerisi bulunduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The American doctor Hunter 'Patch' Adams believes that humour and compassion are important parts of medical care.",
        "He often visits sick children dressed as a clown.",
        "His approach inspired many hospital clown programmes.",
        "Circuses were once very popular.",
        "His life was the subject of a film in 1998.",
      ],
      odd: 3,
      why: "Parça Patch Adams'ın tıbba yaklaşımını anlatır. Sirklerin bir zamanlar çok popüler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "World Health Day is celebrated every year on 7 April.",
        "The date marks the founding of the World Health Organization in 1948.",
        "Each year, the day focuses on a particular health issue.",
        "April is a spring month in the northern hemisphere.",
        "Recent themes have included mental health and access to health care.",
      ],
      odd: 3,
      why: "Parça Dünya Sağlık Günü'nü anlatır. Nisanın kuzey yarımkürede bir bahar ayı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1971, a children's hospital in Pittsburgh created a green face with its tongue sticking out as a warning symbol for poisons.",
        "Doctors had found that children associated the traditional skull and crossbones with exciting pirate stories.",
        "Labels with the new symbol were placed on dangerous household products.",
        "Parents were encouraged to teach children that the face meant danger.",
        "Pittsburgh has many bridges.",
      ],
      odd: 4,
      why: "Parça zehirler için yeni bir uyarı simgesini anlatır. Pittsburgh'da pek çok köprü bulunduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
