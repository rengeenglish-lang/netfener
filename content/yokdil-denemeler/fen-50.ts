import type { YokdilDeneme } from "./types";

export const FEN_50: YokdilDeneme = {
  no: 50,
  field: "fen",
  vocab: [
    [
      "The mother ---- a neighbour of the crime, but the evidence pointed to her.",
      ["accused", "praised", "reminded", "informed", "assured"],
      "Annenin suçu bir komşuya 'yüklediği' (accused) ama kanıtların onu gösterdiği anlatılır.",
    ],
    [
      "The test was so ---- that it could detect even tiny traces of the poison.",
      ["sensitive", "careless", "generous", "ancient", "noisy"],
      "Testin zehrin çok küçük izlerini bile saptayabilecek kadar 'duyarlı' (sensitive) olduğu anlatılır.",
    ],
    [
      "The bones had been stained to make them look older, so the find was a ----.",
      ["forgery", "festival", "harvest", "recipe", "voyage"],
      "Kemiklerin daha eski görünmesi için boyandığı, yani buluntunun bir 'sahtecilik' (forgery) olduğu anlatılır.",
    ],
    [
      "The suspect was ---- after his DNA matched samples from the crime scenes.",
      ["arrested", "rewarded", "elected", "hired", "admired"],
      "Şüphelinin DNA'sı olay yerlerindeki örneklerle eşleşince 'tutuklandığı' (arrested) anlatılır.",
    ],
    [
      "The skeleton showed a severe ---- of the spine.",
      ["curvature", "celebration", "agreement", "temperature", "reputation"],
      "İskelette omurgada ciddi bir 'eğrilik' (curvature) görüldüğü anlatılır.",
    ],
    [
      "The investigators finally ---- the identity of the remains through DNA analysis.",
      ["found out", "gave off", "put off", "took over", "ran into"],
      "Araştırmacıların kalıntıların kimliğini sonunda DNA analiziyle 'ortaya çıkardığı' (found out) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the police arrived, the mother ---- a story about a stranger.",
      ["had invented", "invents", "has invented", "will invent", "is inventing"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had invented'.",
    ],
    [
      "If the jury had been able to see the evidence, the suspect ---- convicted.",
      ["might have been", "will be", "is", "had been", "would be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might have been'.",
    ],
    [
      "The fragments ---- in a gravel pit in southern England in 1912.",
      ["were said to have been found", "said to find", "have said to find", "are saying to have found", "say to be found"],
      "Geçmişte bulunduğu söylenen; edilgen 'be said to have been done' kalıbı: 'were said to have been found'.",
    ],
    [
      "---- the skull looked human, the jaw was clearly that of an ape.",
      ["Whereas", "Because", "Unless", "Since", "So that"],
      "Kafatasının insana benzemesi ile çenenin maymuna ait olması karşılaştırılır: 'Whereas'.",
    ],
    [
      "The king, ---- remains had been lost for centuries, was reburied in 2015.",
      ["whose", "who", "which", "whom", "where"],
      "Kralın kalıntıları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only when the fluorine test was carried out ---- the hoax finally exposed.",
      ["was", "did", "had", "has", "is"],
      "'Only when' ile devrik yapı; edilgen yüklem: 'was'.",
    ],
    [
      "The investigators collected a sample ---- the suspect had thrown away.",
      ["that", "what", "whose", "where", "who"],
      "Örneği niteleyen ve nesne görevindeki ilgi zamiri: 'that'.",
    ],
    [
      "The more people upload their DNA to such databases, ---- it becomes to identify suspects.",
      ["the easier", "the easiest", "easier", "easiest", "as easy"],
      "'The more ..., the easier ...' paralel yapısı: 'the easier'.",
    ],
    [
      "The official ordered that every villager ---- his sickle on the ground.",
      ["place", "places", "placed", "to place", "placing"],
      "'order that' sonrası yalın fiil (subjunctive): 'place'.",
    ],
    [
      "The woman continued to claim that she was the princess ---- her death in 1984.",
      ["until", "since", "unless", "whereas", "while"],
      "İddianın süresi 1984'teki ölümüne kadardır: 'until'.",
    ],
    [
      "The chemist was determined ---- a test whose results a jury could see.",
      ["to develop", "developing", "develop", "developed", "to developing"],
      "'be determined to do sth' kalıbı: 'to develop'.",
    ],
    [
      "Had the remains not been found in 1991, the fate of the family ---- a mystery.",
      ["might have remained", "remains", "will remain", "had remained", "is remaining"],
      "Devrik üçüncü tip koşul cümlesi: 'might have remained'.",
    ],
    [
      "The flies gathered on the sickle ---- it had been cleaned.",
      ["even though", "because", "so that", "unless", "as if"],
      "Orağın temizlenmiş olması ile sineklerin üzerine toplanması zıttır: 'even though'.",
    ],
    [
      "Neither the first doctors nor the local chemist ---- any arsenic in the body.",
      ["found", "finding", "to find", "have find", "finds"],
      "'Neither ... nor' yapısında geçmiş zaman: 'found'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1870s, Henry Faulds, a Scottish doctor working as a missionary in Tokyo, noticed the marks left by potters' fingers on fragments of ancient pottery. He began to study fingerprints, {1} in 1880 he wrote to the scientific journal Nature suggesting that they could be used to identify criminals. His idea was slow to be accepted, but in 1891 Juan Vucetich, a police official in La Plata, Argentina, developed a practical system for classifying prints. The following year, in the small town of Necochea, two young children were found murdered in their home. Their mother, Francisca Rojas, {2} had herself been slightly injured, accused a neighbour of the crime. The neighbour denied it, {3} even harsh questioning failed to produce a confession. An inspector who had been trained in Vucetich's methods then examined the house and found a bloody fingerprint on a door frame. He cut out the piece of wood and compared the print with those of the suspects. It did not match the neighbour, {4} it matched the right thumb of the mother herself. Faced with this evidence, she confessed. The case is regarded as the first murder solved by fingerprints, {5} Argentina soon became the first country to rely on them rather than on body measurements to identify criminals.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "until"],
          "Parmak izlerini incelemeye başlaması ve dergiye yazması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["who", "which", "whose", "whom", "where"],
          "Virgüller arasında anneyi niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "although", "so that"],
          "Komşunun inkâr etmesi ve sorgunun itiraf sağlayamaması aynı yöndedir: 'and'.",
        ],
        [
          "(24) ----",
          ["but", "and", "so", "for", "or"],
          "İzin komşuyla eşleşmemesi ile annenin parmağıyla eşleşmesi zıttır: 'but'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "although"],
          "İlk çözülen cinayet olması ve Arjantin'in parmak izlerine dayanan ilk ülke olması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, arsenic was a popular poison among murderers. It was cheap and easy to buy, {1} its symptoms resembled those of common illnesses such as cholera. In 1832, the British chemist James Marsh was asked to test the coffee of a man who had died suddenly. He detected arsenic, {2} by the time of the trial his sample had deteriorated, and the jury, unable to see any clear evidence, found the suspect not guilty. The man later admitted that he had committed the crime. Frustrated, Marsh set out to develop a test {3} results would be visible to anyone. In 1836, he published a method in which the suspected material is mixed with zinc and acid. Any arsenic present forms a gas, {4} produces a shiny black deposit when it is heated and directed onto a cold porcelain surface. The test was extremely sensitive. It became famous in 1840, during the trial of Marie Lafarge in France, who was accused of poisoning her husband. Local chemists had at first found no arsenic in his body, {5} the leading toxicologist Mathieu Orfila, using the Marsh test correctly, detected it. Lafarge was convicted, and the case, followed closely in newspapers across Europe, showed the public the power of scientific evidence in court.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "until"],
          "Ucuz olması ve belirtilerinin yaygın hastalıklara benzemesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["but", "so", "and", "for", "or"],
          "Arseniği tespit etmesi ile örneğin bozulması zıttır: 'but'.",
        ],
        [
          "(28) ----",
          ["whose", "which", "who", "where", "what"],
          "Testin sonuçları; iyelik bildiren ilgi zamiri: 'whose'.",
        ],
        [
          "(29) ----",
          ["which", "who", "where", "whose", "when"],
          "Virgülden sonra gazı niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(30) ----",
          ["but", "and", "so", "or", "because"],
          "Yerel kimyacıların bulamaması ile Orfila'nın bulması zıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Faulds proposed using fingerprints in 1880, ----.",
      [
        "his idea was not widely adopted at first",
        "Tokyo is in Japan",
        "pottery is old",
        "he was a doctor",
        "the police in Argentina had already been using a system based on careful measurements of the human body",
      ],
      "'Although' zıtlık ister: Faulds 1880'de parmak izlerinin kullanılmasını önerse de fikri başta yaygın kabul görmedi.",
    ],
    [
      "If the jury had seen clear evidence of arsenic, ----.",
      [
        "the guilty man might not have gone free",
        "arsenic is a poison",
        "coffee is popular",
        "Marsh was a chemist",
        "the chemist would have published his famous test for arsenic several years later than he actually did",
      ],
      "Üçüncü tip koşul: jüri arseniğe dair açık bir kanıt görseydi suçlu adam serbest kalmayabilirdi.",
    ],
    [
      "----, investigators turned to a public genealogy website.",
      [
        "Because the killer's DNA matched no one in police databases",
        "Although the crimes were old",
        "Unless the suspect confessed",
        "Since California is large",
        "While the suspect was living quietly with his family in a suburb near the city where he had once worked",
      ],
      "Katilin DNA'sı polis veri tabanlarındaki kimseyle eşleşmediği için araştırmacılar halka açık bir soy ağacı sitesine başvurdu.",
    ],
    [
      "The fake fossil was accepted for decades ----.",
      [
        "because it matched what many scientists expected to find",
        "although it was in England",
        "unless it was tested",
        "so that the gravel was old",
        "while scientists in Africa and Asia were collecting the remains of animals that had lived many millions of years ago",
      ],
      "Sahte fosil pek çok bilim insanının bulmayı beklediği şeye uyduğu için onlarca yıl kabul gördü.",
    ],
    [
      "Since the king's remains had been buried in a church that was later demolished, ----.",
      [
        "their exact location was eventually forgotten",
        "Leicester is a city",
        "the battle was in 1485",
        "churches are built of stone",
        "the members of the society that searched for him had raised money from supporters all over the world",
      ],
      "'Since' neden bildirir: kralın kalıntıları sonradan yıkılan bir kiliseye gömüldüğü için kesin yerleri zamanla unutuldu.",
    ],
    [
      "Not only did the handbook explain how to examine bodies, ----.",
      [
        "but it also remained in use for several centuries",
        "and China is a large country",
        "since the judge was wise",
        "so the villagers were farmers",
        "unless officials in other provinces had already written their own guides for investigating suspicious deaths",
      ],
      "'Not only ... but also' yapısı tamamlanır: el kitabı cesetlerin nasıl inceleneceğini açıklamakla kalmadı, birkaç yüzyıl boyunca da kullanıldı.",
    ],
    [
      "Once the DNA had been compared with that of living relatives, ----.",
      [
        "the remains could be identified with confidence",
        "the family was large",
        "the forest was dark",
        "bones are hard",
        "rumours that one of the daughters had escaped continued to spread among Russians living in other countries",
      ],
      "DNA yaşayan akrabalarınkiyle karşılaştırılınca kalıntılar güvenle tanımlanabildi.",
    ],
    [
      "Unless the sample had been stored properly, ----.",
      [
        "the DNA test could not have been carried out",
        "hospitals keep records",
        "the woman was old",
        "tissue is soft",
        "the woman would have continued to claim that she was the youngest daughter of the last Russian emperor",
      ],
      "'Unless' olumsuz koşul: örnek düzgün saklanmasaydı DNA testi yapılamazdı.",
    ],
    [
      "The test was so sensitive ----.",
      [
        "that it could detect very small amounts of arsenic",
        "although zinc is a metal",
        "because porcelain is white",
        "unless the acid was weak",
        "while the newspapers were reporting every detail of the trial to readers in many different countries",
      ],
      "Test o kadar duyarlıydı ki çok küçük miktarlardaki arseniği bile saptayabiliyordu.",
    ],
    [
      "Even though the method helped to solve the case, ----.",
      [
        "it raised serious concerns about genetic privacy",
        "DNA is found in cells",
        "the crimes were terrible",
        "the suspect was old",
        "the detectives who had worked on the original investigation in the 1970s had retired many years earlier",
      ],
      "'Even though' zıtlık ister: yöntem davanın çözülmesine yardım etse de genetik mahremiyet konusunda ciddi kaygılara yol açtı.",
    ],
    [
      "As the flies were attracted by invisible traces of blood, ----.",
      [
        "they revealed which sickle had been used",
        "flies are insects",
        "the village was poor",
        "sickles are sharp",
        "the official had ordered all the men in the village to bring their tools to a public place in the afternoon",
      ],
      "Sinekler görünmez kan izlerine çekildiği için hangi orağın kullanıldığını ortaya çıkardı.",
    ],
  ],
  enTr: [
    [
      "The inspector found a bloody fingerprint on a door frame.",
      [
        "Müfettiş, bir kapı pervazında kanlı bir parmak izi buldu.",
        "Müfettiş, bir kapı pervazında hiçbir iz bulamadı.",
        "Kapı pervazındaki kanlı parmak izini silen müfettiş, daha sonra bunun en önemli kanıt olduğunu anlayarak pişman oldu.",
        "Kapı müfettiş tarafından yapıldı.",
        "Parmak izi müfettişe aitti.",
      ],
      "'The inspector found' 'müfettiş buldu', 'a bloody fingerprint on a door frame' 'bir kapı pervazında kanlı bir parmak izi' karşılığıdır.",
    ],
    [
      "The jury could not see any clear evidence of the poison.",
      [
        "Jüri, zehre dair açık bir kanıt göremedi.",
        "Jüri, zehre dair pek çok açık kanıt gördü.",
        "Zehre dair açık kanıtları gören jüri, sanığın suçlu olduğuna oy birliğiyle karar vererek davayı hızla sonuçlandırdı.",
        "Zehir jüriye verildi.",
        "Jüri zehri kendisi buldu.",
      ],
      "'The jury could not see' 'jüri göremedi', 'any clear evidence of the poison' 'zehre dair açık bir kanıt' karşılığıdır.",
    ],
    [
      "The suspect's relatives had uploaded their DNA to a public website.",
      [
        "Şüphelinin akrabaları, DNA'larını halka açık bir web sitesine yüklemişti.",
        "Şüpheli, akrabalarının DNA'sını gizlice çaldı.",
        "Halka açık bir web sitesine DNA'larını yükleyen akrabalar, şüpheliyle akraba olduklarını öğrenince hesaplarını sildi.",
        "Web sitesi şüphelinin akrabalarına aitti.",
        "Şüphelinin hiç akrabası yoktu.",
      ],
      "'The suspect's relatives had uploaded' 'şüphelinin akrabaları yüklemişti', 'their DNA to a public website' 'DNA'larını halka açık bir web sitesine' karşılığıdır.",
    ],
    [
      "The jaw had come from an orangutan, and its teeth had been filed down.",
      [
        "Çene bir orangutana aitti ve dişleri törpülenmişti.",
        "Çene bir insana aitti ve dişleri sağlamdı.",
        "Dişleri törpülenmiş bir orangutan çenesi bulan bilim insanları, bunun bir sahtekârlık olduğunu hemen anlayarak polise bildirdi.",
        "Orangutan çeneyi törpüledi.",
        "Çenenin hiç dişi yoktu.",
      ],
      "'The jaw had come from an orangutan' 'çene bir orangutana aitti', 'and its teeth had been filed down' 've dişleri törpülenmişti' karşılığıdır.",
    ],
    [
      "The skeleton was found beneath a car park in the centre of the city.",
      [
        "İskelet, şehir merkezindeki bir otoparkın altında bulundu.",
        "İskelet, şehrin dışındaki bir kilisede bulundu.",
        "Şehir merkezindeki otoparkın altında bulunan iskeletin, uzmanlar tarafından yüzyıllar önce oraya taşındığı düşünülüyor.",
        "Otopark bir iskeletin üzerine kurulmadı.",
        "İskelet bir arabanın içindeydi.",
      ],
      "'The skeleton was found' 'iskelet bulundu', 'beneath a car park in the centre of the city' 'şehir merkezindeki bir otoparkın altında' karşılığıdır.",
    ],
    [
      "The test showed that the woman was not related to the royal family.",
      [
        "Test, kadının kraliyet ailesiyle akraba olmadığını gösterdi.",
        "Test, kadının kraliyet ailesinin bir üyesi olduğunu kanıtladı.",
        "Kraliyet ailesiyle akraba olmadığını bilen kadın, teste girmeyi reddederek iddialarını hayatının sonuna kadar sürdürdü.",
        "Kraliyet ailesi kadını test etmeyi reddetti.",
        "Test yapılamadı.",
      ],
      "'The test showed that' 'test gösterdi', 'the woman was not related to the royal family' 'kadının kraliyet ailesiyle akraba olmadığını' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Arjantin, suçluları tanımlamak için parmak izlerine dayanan ilk ülke oldu.",
      [
        "Argentina became the first country to rely on fingerprints to identify criminals.",
        "Argentina refused to use fingerprints to identify criminals.",
        "Argentina used fingerprints for a short time, but it soon returned to identifying criminals by measuring their bodies.",
        "Criminals in Argentina had no fingerprints.",
        "Fingerprints were invented in Argentina.",
      ],
      "'parmak izlerine dayanan ilk ülke oldu' 'became the first country to rely on fingerprints', 'suçluları tanımlamak için' 'to identify criminals' karşılığıdır.",
    ],
    [
      "Dava, Avrupa genelindeki gazetelerde yakından takip edildi.",
      [
        "The case was followed closely in newspapers across Europe.",
        "The case was ignored by newspapers in Europe.",
        "Newspapers across Europe wanted to report the case, but the court refused to allow journalists to attend the trial.",
        "Newspapers were the subject of the case.",
        "The case took place in a newspaper office.",
      ],
      "'Dava yakından takip edildi' 'the case was followed closely', 'Avrupa genelindeki gazetelerde' 'in newspapers across Europe' karşılığıdır.",
    ],
    [
      "Şüpheli, ölüm cezasından kaçınmak için suçlamaları kabul etti.",
      [
        "The suspect pleaded guilty to avoid the death penalty.",
        "The suspect was sentenced to death.",
        "The suspect denied all the charges, even though the prosecutors offered not to seek the death penalty.",
        "The death penalty was abolished by the suspect.",
        "The suspect was found not guilty.",
      ],
      "'Şüpheli suçlamaları kabul etti' 'the suspect pleaded guilty', 'ölüm cezasından kaçınmak için' 'to avoid the death penalty' karşılığıdır.",
    ],
    [
      "Kemikler, gerçekte olduklarından daha eski görünmeleri için boyanmıştı.",
      [
        "The bones had been stained to make them look older than they really were.",
        "The bones were much older than they looked.",
        "The bones looked very old, so the scientists decided to stain them in order to make them look more recent.",
        "The bones had never been touched.",
        "The bones were painted by an artist.",
      ],
      "'Kemikler boyanmıştı' 'the bones had been stained', 'gerçekte olduklarından daha eski görünmeleri için' 'to make them look older than they really were' karşılığıdır.",
    ],
    [
      "Kralın kalıntıları, katedralde yeniden toprağa verildi.",
      [
        "The king's remains were reburied in the cathedral.",
        "The king's remains were removed from the cathedral.",
        "The king had asked to be buried in the cathedral, but his remains were placed in a church outside the city instead.",
        "The cathedral was built on the king's remains.",
        "The king built the cathedral.",
      ],
      "'Kralın kalıntıları' 'the king's remains', 'katedralde yeniden toprağa verildi' 'were reburied in the cathedral' karşılığıdır.",
    ],
    [
      "Yetkili, köydeki her adamdan orağını güneşe koymasını istedi.",
      [
        "The official asked every man in the village to put his sickle in the sun.",
        "The official took every sickle from the village.",
        "The official wanted to examine the sickles of the village, but the men refused to bring them out into the sun.",
        "Every man in the village asked the official for a sickle.",
        "The sun damaged the sickles.",
      ],
      "'Yetkili istedi' 'the official asked', 'köydeki her adamdan orağını güneşe koymasını' 'every man in the village to put his sickle in the sun' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Between 1974 and 1986, a man committed at least thirteen murders and around fifty sexual assaults in California, and then the attacks stopped. Investigators had his DNA from crime scenes, but it did not match anyone in police databases, which contain the profiles of convicted criminals. In 2018, a team led by an investigator who had worked on the case for decades tried a new approach. They uploaded the DNA profile to GEDmatch, a free public website on which people share their genetic data in order to find relatives and trace their family history. The search found no close matches, but it did identify several people who were probably distant cousins of the killer. With the help of a genealogist, investigators used these matches, together with public records such as birth and marriage certificates, to build family trees going back to the early nineteenth century. Gradually, they narrowed the list of possible suspects down to one man of the right age who had lived in the right places: a seventy-two-year-old former police officer. Detectives then secretly collected his DNA from an object he had touched, and it matched. He was arrested in April 2018 and later pleaded guilty. The case showed the power of genetic genealogy but also raised concerns, since the people who had shared their DNA had not agreed to help the police. GEDmatch later changed its rules so that users must choose whether to allow such searches.",
      questions: [
        [
          "According to the passage, police databases did not help because ----.",
          [
            "the killer had never been convicted of a crime",
            "the DNA was too old",
            "the databases were closed",
            "the killer had deliberately avoided leaving any DNA at the scenes of his crimes",
            "the samples were lost",
          ],
          "Metne göre veri tabanları hüküm giymiş suçluların profillerini içeriyordu ve eşleşme çıkmadı.",
        ],
        [
          "The investigators identified the suspect mainly by ----.",
          [
            "combining DNA matches with traditional family research",
            "finding his own profile on the website",
            "questioning former police officers",
            "asking members of the public to send samples of their DNA directly to the police",
            "studying his handwriting",
          ],
          "Uzak akraba eşleşmelerini doğum ve evlilik kayıtlarıyla birleştirip soy ağaçları kurdular.",
        ],
        [
          "It can be understood from the passage that the concerns raised by the case were about ----.",
          [
            "the use of people's genetic data without their consent",
            "the cost of DNA tests",
            "the accuracy of family trees",
            "the age of the suspect, who was too old to be sent to prison for his crimes",
            "the behaviour of genealogists",
          ],
          "DNA'larını paylaşan kişiler polise yardım etmeyi kabul etmemişti.",
        ],
      ],
    },
    {
      text:
        "In 1247, a Chinese judicial official named Song Ci published a book whose title is usually translated as 'Collected Cases of Injustice Rectified'. Drawing on earlier works and on his own long experience of investigating deaths, it is the oldest known handbook of forensic medicine in the world. It instructed officials to examine bodies in person rather than relying on assistants, and it explained how to distinguish between different causes of death: for example, how a person who had drowned could be told apart from one who had been killed and then thrown into water, or how a hanging that was suicide differed from a murder disguised to look like one. One famous case in the book describes the murder of a man who had been attacked with a sickle, a farming tool. The investigating official ordered all the men of the village to bring their sickles and lay them on the ground in the summer sun. Flies soon began to gather on one of them, attracted by traces of blood too small to be seen, and its owner, confronted with this evidence, confessed. Some of the book's methods were mistaken, but it was revised and used by officials for more than six centuries, and it was translated into several European languages in the nineteenth century.",
      questions: [
        [
          "According to the passage, Song Ci's book instructed officials to ----.",
          [
            "inspect bodies themselves",
            "rely on their assistants",
            "avoid examining bodies",
            "send all suspicious deaths to the capital so that they could be examined by doctors",
            "use only written records",
          ],
          "Metne göre yetkililer cesetleri yardımcılara güvenmek yerine bizzat incelemeliydi.",
        ],
        [
          "In the sickle case, the flies were important because ----.",
          [
            "they revealed evidence that could not be seen",
            "they bit the murderer",
            "they spread disease",
            "they had been trained by the official to search for blood on the tools of the villagers",
            "they destroyed the evidence",
          ],
          "Gözle görülemeyecek kadar küçük kan izlerine çekilerek kanıtı ortaya çıkardılar.",
        ],
        [
          "It can be understood from the passage that the book ----.",
          [
            "was influential despite containing some errors",
            "was entirely accurate",
            "was soon forgotten",
            "was first written in a European language and later translated into Chinese",
            "was banned",
          ],
          "Bazı yöntemleri yanlış olsa da altı yüzyıldan uzun süre kullanıldı.",
        ],
      ],
    },
    {
      text:
        "In 1912, Charles Dawson, an amateur collector, announced that he had found fragments of a skull and a jaw in a gravel pit at Piltdown in southern England. With Arthur Smith Woodward of the Natural History Museum in London, he presented them as the remains of an early human, which became known as Piltdown Man. The skull appeared human, with a large brain, but the jaw was ape-like. Many British scientists welcomed the find, partly because it supported the widespread belief that a large brain had been the first feature to distinguish humans from apes, and partly because it gave Britain an important ancestor. Over the following decades, however, fossils found in Africa and Asia suggested the opposite: that early humans had walked upright and had human-like teeth long before their brains grew large. Piltdown Man fitted less and less well. In 1953, the scientist Kenneth Oakley and his colleagues used a new technique that measures the fluorine absorbed by bones from the ground over time, and they showed that the skull and the jaw were of different ages and relatively recent. Closer examination revealed that the jaw came from an orangutan, its teeth had been filed down to look human, and the bones had been stained to appear old. The identity of the forger has been debated ever since, though a study published in 2016 concluded that Dawson was almost certainly responsible.",
      questions: [
        [
          "According to the passage, many British scientists accepted Piltdown Man partly because ----.",
          [
            "it matched their expectations about human evolution",
            "it had been tested with fluorine",
            "it resembled fossils from Africa",
            "the gravel pit where it had been found had already produced many other important human fossils",
            "Dawson was a professional scientist",
          ],
          "Metne göre büyük beynin insanları ayıran ilk özellik olduğu inancını destekliyordu.",
        ],
        [
          "Finds made in Africa and Asia were important because ----.",
          [
            "they showed a pattern that Piltdown Man did not fit",
            "they proved Piltdown Man was genuine",
            "they were also forgeries",
            "they were found by Dawson during expeditions that he carried out after the discovery at Piltdown",
            "they had large brains",
          ],
          "Erken insanların beyinleri büyümeden çok önce dik yürüdüğünü gösterdi; Piltdown buna uymuyordu.",
        ],
        [
          "It can be understood from the passage that the fluorine test ----.",
          [
            "showed that the bones did not belong together",
            "proved Dawson's innocence",
            "confirmed the skull's great age",
            "was invented by Dawson in order to persuade other scientists that his discovery was genuine",
            "was carried out in 1912",
          ],
          "Kafatası ile çenenin farklı yaşlarda ve görece yeni olduğunu gösterdi.",
        ],
      ],
    },
    {
      text:
        "Richard III, the last English king to die in battle, was killed at Bosworth in 1485. His body was taken to the nearby town of Leicester and buried in the church of a religious order known as the Greyfriars. In the following century, when monasteries were closed, the church was demolished, and the exact location of the grave was gradually forgotten. In 2012, after a long campaign by members of a society devoted to the king's memory, archaeologists from the University of Leicester began digging in a council car park where they believed the church had stood. On the first day, they found human leg bones, and they soon uncovered a skeleton with a severely curved spine and injuries to the skull consistent with blows from medieval weapons. To confirm the identity, researchers compared mitochondrial DNA, which is passed down from mothers to their children, with that of two living descendants of Richard's sister, traced through an unbroken female line. One of them was a Canadian-born furniture maker living in London. The DNA matched, and together with radiocarbon dating and the other evidence, it made the identification almost certain. In 2015, the king's remains were reburied in Leicester Cathedral in a ceremony watched by thousands of people.",
      questions: [
        [
          "According to the passage, the location of Richard's grave was lost because ----.",
          [
            "the church where he was buried was later destroyed",
            "he was buried at sea",
            "his body was stolen",
            "the battle took place far from any town and nobody recorded where his body had been taken",
            "Leicester was abandoned",
          ],
          "Metne göre manastırlar kapatılınca kilise yıkıldı ve mezarın yeri unutuldu.",
        ],
        [
          "The researchers used the DNA of the king's sister's descendants because ----.",
          [
            "mitochondrial DNA is inherited through the female line",
            "the king had no sister",
            "they lived in Leicester",
            "the king's own children had left a large number of descendants in Canada",
            "it was cheaper",
          ],
          "Mitokondriyal DNA anneden çocuklarına geçer ve kesintisiz bir kadın soyundan izlendi.",
        ],
        [
          "It can be understood from the passage that the identification of the skeleton ----.",
          [
            "was based on several different kinds of evidence",
            "relied only on the curved spine",
            "is still widely disputed",
            "was announced before the archaeologists had begun digging in the car park",
            "was made by the society",
          ],
          "DNA, radyokarbon tarihlemesi ve diğer kanıtlar birlikte kimliği neredeyse kesinleştirdi.",
        ],
      ],
    },
    {
      text:
        "In July 1918, Russia's last emperor, Nicholas II, his wife Alexandra, their five children and four servants were shot by Bolshevik guards in a house in the city of Yekaterinburg, where they were being held prisoner. The bodies were hidden in a forest, and the Soviet authorities kept the details secret. Rumours soon spread that one of the daughters, Anastasia, had escaped, and over the following decades several women claimed to be her. The most famous, Anna Anderson, who appeared in Berlin in 1920, maintained her claim until her death in 1984 and persuaded some members of the royal circle. In 1979, local researchers secretly found a grave containing bones, but they could only make their discovery public after the collapse of the Soviet Union, and the remains were exhumed in 1991. Scientists compared their mitochondrial DNA with that of Prince Philip, Duke of Edinburgh, whose grandmother was Alexandra's sister, and confirmed that they belonged to the empress and three of her daughters, while other tests identified the emperor. Two children were missing, but their remains were found nearby in 2007. Meanwhile, in 1994, a sample of Anna Anderson's tissue, which had been stored in a hospital, was tested. It showed that she was not related to the royal family; her DNA matched the relatives of a Polish factory worker who had disappeared in 1920.",
      questions: [
        [
          "According to the passage, the grave found in 1979 was not announced at once because ----.",
          [
            "of the political situation in the Soviet Union",
            "the bones were damaged",
            "the researchers were not sure what they had found",
            "Prince Philip had asked the researchers to wait until the DNA tests had been completed",
            "the forest was private",
          ],
          "Metne göre buluş ancak Sovyetler Birliği çöktükten sonra açıklanabildi.",
        ],
        [
          "Prince Philip's DNA was useful because ----.",
          [
            "he was related to the empress through the female line",
            "he was a direct descendant of the emperor",
            "he had met Anna Anderson",
            "he had organised the search for the grave in the forest near Yekaterinburg",
            "he was Russian",
          ],
          "Büyükannesi İmparatoriçe Alexandra'nın kız kardeşiydi.",
        ],
        [
          "It can be understood from the passage that Anna Anderson ----.",
          [
            "was not, in fact, a member of the royal family",
            "was Anastasia",
            "died in 1920",
            "admitted shortly before her death in 1984 that she had invented her story",
            "worked in a hospital",
          ],
          "DNA testi kraliyet ailesiyle akraba olmadığını gösterdi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1981, the American anthropologist William Bass opened a research facility on land belonging to the University of Tennessee where donated human bodies are left to decompose under different conditions. ---- Their observations have helped police around the world estimate how long a person has been dead.",
      [
        "Scientists record in detail how the bodies change over time and how they are affected by temperature, insects and burial.",
        "Tennessee is in the United States.",
        "Universities own a great deal of land.",
        "Bass decided to set up the facility after he had been asked to estimate the time of death of a body and had made a large error.",
        "Many people visit universities.",
      ],
      "Boşluktan sonra 'their observations' ifadesi gelir; boşluğa bilim insanlarının cesetlerdeki değişimleri ayrıntılı biçimde kaydettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1775, the American patriot Joseph Warren was killed in battle, and his body was buried in an unmarked grave. ---- This is often described as the first use of forensic dentistry in America.",
      [
        "Months later, his friend Paul Revere, a silversmith who also made false teeth, identified the body by recognising a wire he had fitted to Warren's teeth.",
        "Battles were common at the time.",
        "Silver is a precious metal.",
        "Warren was a respected doctor in Boston, and he had sent Revere on a famous night ride to warn that British soldiers were approaching.",
        "Many people have false teeth.",
      ],
      "Boşluktan sonra 'this' ile adli diş hekimliğinin ilk kullanımı anlatılır; boşluğa Revere'in kendi taktığı bir teli tanıyarak cesedi tanımladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Diatoms are microscopic algae with hard shells that live in almost all natural waters. ---- Finding diatoms in the bone marrow of a body can therefore suggest that the person was alive when they entered the water.",
      [
        "When a living person drowns, water containing diatoms is drawn into the lungs and carried by the blood to other parts of the body.",
        "Algae are simple organisms.",
        "Lakes contain fish.",
        "There are many thousands of species of diatoms, and their shells are often so beautiful that they have been arranged in patterns as works of art.",
        "Rivers flow into the sea.",
      ],
      "Boşluktan sonra 'therefore' ile kemik iliğindeki diatomlar yorumlanır; boşluğa boğulan canlı bir insanın kanıyla diatomların vücuda taşındığını söyleyen cümle gelmelidir.",
    ],
    [
      "Luminol is a chemical that glows blue when it reacts with iron in the haemoglobin of blood. ---- However, because it can also react with some cleaning products and metals, positive results must be confirmed by other tests.",
      [
        "Sprayed in a darkened room, it can reveal traces of blood that have been wiped away and are invisible to the eye.",
        "Blue is a popular colour.",
        "Iron is a common metal.",
        "The chemical was first produced in Germany in the nineteenth century, but its ability to glow was not discovered until the 1920s.",
        "Blood is red.",
      ],
      "Boşluk luminolün nasıl kullanıldığını açıklayan bir cümle gerektirir; boşluğa karanlık bir odada silinmiş kan izlerini ortaya çıkarabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "After the killing of seven men in Chicago on 14 February 1929, the ballistics expert Calvin Goddard was asked to examine the bullets. ---- He showed that they had not been fired by police weapons, as some had claimed.",
      [
        "Using a comparison microscope, which allows two bullets to be viewed side by side, he matched the marks on them to the guns that had fired them.",
        "Chicago is a large city.",
        "Bullets are made of metal.",
        "The killings, which took place during a period when alcohol was illegal in the United States, shocked the public and were widely reported in newspapers.",
        "February is a winter month.",
      ],
      "Boşluk Goddard'ın yöntemini açıklayan bir cümle gerektirir; boşluğa karşılaştırma mikroskobuyla mermilerdeki izleri silahlarla eşleştirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The Soviet scientist Mikhail Gerasimov developed a method of reconstructing a person's face from the skull. ---- He used it to create portraits of historical figures and to help police identify unknown remains.",
      [
        "Based on measurements of the thickness of tissue at different points, he built up muscles and skin in clay on casts of skulls.",
        "Faces are very different.",
        "Clay is used in pottery.",
        "Gerasimov had been interested in archaeology since childhood, and he began working in a museum when he was still a teenager.",
        "Portraits hang in museums.",
      ],
      "Boşluktan sonra 'it' ile yöntemin kullanımı anlatılır; boşluğa doku kalınlığı ölçümlerine dayanarak kafatası kalıpları üzerine kil ile kas ve deri eklediğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Blowflies are often the first insects to arrive at a dead body.",
        "They lay eggs within hours, and the larvae grow at predictable rates.",
        "Some flies can carry diseases.",
        "By studying the larvae, forensic scientists can estimate the time of death.",
        "Temperature must be taken into account, since it affects their growth.",
      ],
      odd: 2,
      why: "Parça sinek larvalarıyla ölüm zamanının tahmin edilmesini anlatır. Bazı sineklerin hastalık taşıyabileceğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Human hair grows about one centimetre a month.",
        "It records chemical signals from the food and water a person consumes.",
        "Hairdressers can change the colour of hair.",
        "By analysing different sections of a hair, scientists can trace where a person has lived.",
        "This method has helped to identify unknown victims.",
      ],
      odd: 2,
      why: "Parça saç analiziyle kişinin yaşadığı yerlerin izlenmesini anlatır. Kuaförlerin saç rengini değiştirebileceğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Pollen grains are tiny, extremely tough and different in every plant species.",
        "They stick easily to clothing, shoes and vehicles.",
        "Forensic scientists can match pollen on a suspect's belongings to a particular location.",
        "Many people suffer from hay fever.",
        "Pollen evidence has helped to locate hidden graves.",
      ],
      odd: 3,
      why: "Parça polenin adli bilimde kullanılmasını anlatır. Pek çok kişinin saman nezlesinden muzdarip olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tiny fragments of glass are often found on the clothing of burglars.",
        "Glass is made mainly from sand.",
        "Different types of glass bend light by slightly different amounts.",
        "By measuring this property, scientists can compare fragments with glass from a crime scene.",
        "Such evidence can link a suspect to a broken window.",
      ],
      odd: 1,
      why: "Parça cam parçalarının adli incelemesini anlatır. Camın esas olarak kumdan yapıldığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Bite mark analysis was once widely used as evidence in criminal trials.",
        "Experts compared marks on victims' skin with suspects' teeth.",
        "However, skin stretches and changes shape, making such comparisons unreliable.",
        "Regular brushing keeps teeth healthy.",
        "Several people convicted on the basis of bite marks were later shown to be innocent.",
      ],
      odd: 3,
      why: "Parça ısırık izi analizinin güvenilmezliğini anlatır. Düzenli fırçalamanın dişleri sağlıklı tuttuğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Soil varies greatly from place to place in its minerals, colour and texture.",
        "Traces of soil on a suspect's shoes or vehicle can be compared with samples from a crime scene.",
        "Microscopic analysis can reveal distinctive mixtures of particles.",
        "Such evidence has helped to place suspects at the scene of crimes.",
        "Gardeners add compost to improve their soil.",
      ],
      odd: 4,
      why: "Parça toprağın adli kanıt olarak kullanılmasını anlatır. Bahçıvanların toprağı iyileştirmek için kompost eklediğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
