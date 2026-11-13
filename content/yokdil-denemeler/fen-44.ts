import type { YokdilDeneme } from "./types";

export const FEN_44: YokdilDeneme = {
  no: 44,
  field: "fen",
  vocab: [
    [
      "On warm days, the gelatine in the dishes ---- and the bacterial colonies ran together.",
      ["melted", "froze", "hardened", "multiplied", "disappeared"],
      "Sıcak günlerde kaplardaki jelatinin 'eridiği' (melted) ve bakteri kolonilerinin birbirine karıştığı anlatılır.",
    ],
    [
      "The agent that caused the disease was so small that it passed through filters that ---- bacteria.",
      ["trapped", "released", "fed", "created", "coloured"],
      "Hastalığa yol açan etkenin bakterileri 'tutan' (trapped) filtrelerden geçebilecek kadar küçük olduğu anlatılır.",
    ],
    [
      "By comparing genetic sequences, the biologist ---- a previously unrecognised group of microorganisms.",
      ["identified", "destroyed", "invented", "concealed", "purchased"],
      "Biyoloğun genetik dizileri karşılaştırarak daha önce tanınmayan bir mikroorganizma grubunu 'tanımladığı' (identified) anlatılır.",
    ],
    [
      "Viruses that infect bacteria could be used to treat infections that ---- antibiotics.",
      ["resist", "require", "produce", "contain", "improve"],
      "Bakterileri enfekte eden virüslerin antibiyotiklere 'direnen' (resist) enfeksiyonları tedavi etmek için kullanılabileceği anlatılır.",
    ],
    [
      "The bacteria can survive doses of radiation thousands of times higher than those that would ---- a human.",
      ["kill", "cure", "warm", "feed", "protect"],
      "Bakterilerin bir insanı 'öldürecek' (kill) dozdan binlerce kat yüksek radyasyona dayanabildiği anlatılır.",
    ],
    [
      "The slime mould spread out to search for food and then ---- the paths that did not lead anywhere.",
      ["got rid of", "looked after", "took after", "ran into", "put up with"],
      "Cıvık mantarın yiyecek aramak için yayıldığı ve sonra hiçbir yere çıkmayan yollardan 'kurtulduğu' (got rid of) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before agar was introduced, bacteriologists ---- slices of potato and gelatine to grow bacteria.",
      ["had used", "use", "have used", "will use", "are using"],
      "Agardan önceki durum: 'had used'.",
    ],
    [
      "By the time Beijerinck repeated the experiment, Ivanovsky ---- similar results.",
      ["had already reported", "already reports", "will already report", "is already reporting", "has already been reported"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had already reported'.",
    ],
    [
      "If Woese had not compared the genetic sequences, the archaea ---- unrecognised for many more years.",
      ["might have remained", "will remain", "remain", "had remained", "are remaining"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have remained'.",
    ],
    [
      "The institute in Tbilisi ---- in 1923 by a Georgian scientist and his French colleague.",
      ["was founded", "founded", "has founded", "is founding", "founds"],
      "Enstitü kurulmuştur; edilgen geçmiş zaman: 'was founded'.",
    ],
    [
      "---- the bacteria were tiny, they contained crystals that responded to a magnet.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Bakterilerin çok küçük olması ile mıknatısa tepki veren kristaller içermesi zıttır: 'Although'.",
    ],
    [
      "The chemist, ---- experiments showed that fermentation did not need living cells, won the Nobel Prize in 1907.",
      ["whose", "which", "who", "whom", "where"],
      "Kimyacının deneyleri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The slime mould connected the food sources efficiently, ---- surprised the engineers.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The closer the magnet was held, ---- the bacteria changed direction.",
      ["the more quickly", "the most quickly", "more quickly than", "much quickly", "so quickly"],
      "'The closer ..., the more quickly ...' paralel yapısı: 'the more quickly'.",
    ],
    [
      "Not until the electron microscope was invented ---- scientists actually see a virus.",
      ["could", "had", "were", "have", "did they"],
      "'Not until' ile devrik yapı; yardımcı fiil öne gelir: 'could'.",
    ],
    [
      "The dishes were covered with glass lids ---- dust and other microbes could not fall in.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The researchers arranged oat flakes ---- the positions of the cities around Tokyo.",
      ["to represent", "representing", "represent", "represented", "to representing"],
      "Amaç bildiren mastar: 'to represent'.",
    ],
    [
      "The bacterium is thought ---- its resistance to radiation as a side effect of surviving drought.",
      ["to have evolved", "evolving", "to evolve", "evolved", "to be evolving"],
      "Geçmişe ait bir süreç için mastarın geçmiş biçimi: 'to have evolved'.",
    ],
    [
      "The filter was so fine ---- no bacteria could pass through it.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Doctors in some countries now suggest that phage therapy ---- in carefully controlled trials.",
      ["be tested", "is tested", "was tested", "to be tested", "testing"],
      "'suggest that' sonrası yalın fiil (subjunctive), edilgen: 'be tested'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early 1880s, the German doctor Robert Koch and his colleagues were developing methods to grow pure cultures of bacteria, {1} would allow them to identify the microbes that caused particular diseases. They grew bacteria on slices of potato and on gelatine, but both had disadvantages: potato did not suit all bacteria, and gelatine melted at body temperature, the temperature at which many disease-causing bacteria grow best. It was also digested by some bacteria. Walther Hesse, a doctor working in Koch's laboratory, discussed the problem with his wife, Fanny Hesse, {2} assisted him in his research and made detailed scientific drawings. Fanny suggested using agar, a jelly-like substance extracted from seaweed, which she used in her kitchen to make jams and jellies set; she had learned about it from a neighbour who had lived in Java, {3} it was common in cooking. Agar remained solid at temperatures well above those of the human body and could not be digested by most bacteria. In 1882, Koch used agar plates in his work on tuberculosis, {4} the method spread rapidly. A few years later, Julius Petri, another assistant, designed the shallow glass dish with a lid that bears his name. Fanny Hesse never received any payment for her idea, {5} agar remains one of the most widely used substances in microbiology laboratories today.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra saf kültürleri niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(22) ----",
          ["who", "which", "whose", "whom", "where"],
          "Fanny Hesse'yi niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(23) ----",
          ["where", "which", "whose", "when", "who"],
          "Java'yı (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Koch'un agar kullanması ve yöntemin yayılması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "so", "or", "because", "unless"],
          "Hiç ödeme almaması ile agarın hâlâ yaygın kullanılması zıttır: 'but'.",
        ],
      ],
    },
    {
      text:
        "In the late nineteenth century, tobacco farmers in Europe suffered heavy losses from a disease that caused a mottled, mosaic-like pattern on the leaves and stunted the plants' growth. In 1892, the Russian botanist Dmitri Ivanovsky crushed infected leaves and passed the juice through a fine porcelain filter {1} was known to trap bacteria. To his surprise, the filtered juice could still infect healthy plants. Ivanovsky, however, believed that the cause was probably a toxin or an unusually small bacterium that had somehow passed through. In 1898, the Dutch microbiologist Martinus Beijerinck repeated the experiment independently and went further. He showed that the infectious agent could multiply in living plants, {2} it could not be grown on its own in the laboratory like bacteria. He concluded that it was a new kind of infectious agent, {3} he called a 'contagious living fluid' and described as a virus, from a Latin word for poison. In the same year, two German scientists showed that foot-and-mouth disease in cattle was also caused by a filterable agent. For several decades, the nature of viruses remained mysterious. In 1935, the American chemist Wendell Stanley managed to crystallise the tobacco mosaic virus, {4} suggested that it was more like a chemical than a living organism, and in 1939 it became one of the first viruses to be seen with the newly invented electron microscope, {5} showed it to be rod-shaped.",
      blanks: [
        [
          "(26) ----",
          ["that", "what", "whose", "where", "whom"],
          "Filtreyi niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(27) ----",
          ["although", "because", "unless", "so that", "once"],
          "Canlı bitkilerde çoğalabilmesi ile laboratuvarda tek başına üretilememesi zıttır: 'although'.",
        ],
        [
          "(28) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra etkeni niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra kristalleştirme işleminin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(30) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra elektron mikroskobunu niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Fanny Hesse's suggestion transformed microbiology, ----.",
      [
        "she received no reward for it",
        "agar comes from seaweed",
        "Java is an island",
        "jams are sweet",
        "her husband worked in a laboratory where scientists were trying to identify the causes of particular diseases",
      ],
      "'Although' zıtlık ister: Fanny Hesse'nin önerisi mikrobiyolojiyi dönüştürse de bunun için hiçbir ödül almadı.",
    ],
    [
      "----, the agent could not be a normal bacterium.",
      [
        "Since it passed through filters that trapped bacteria",
        "Although tobacco is a plant",
        "Unless farmers lost money",
        "Because Ivanovsky was Russian",
        "While two German scientists were studying a disease of cattle that had spread across several regions of Europe",
      ],
      "Bakterileri tutan filtrelerden geçtiği için etken normal bir bakteri olamazdı.",
    ],
    [
      "If two organisms have very similar genetic sequences, ----.",
      [
        "they are probably closely related",
        "Illinois is in the Midwest",
        "cells contain DNA",
        "Woese was American",
        "the scientists who studied them would have had to use microscopes to compare their shapes and sizes",
      ],
      "Birinci tip koşul: iki organizmanın genetik dizileri çok benzerse büyük olasılıkla yakın akrabadırlar.",
    ],
    [
      "Phage therapy fell out of favour in Western countries ----.",
      [
        "because antibiotics were easier to use",
        "although Georgia is small",
        "unless patients were ill",
        "so that d'Hérelle was French",
        "while scientists in the Soviet Union continued to produce phages for treating wounded soldiers and other patients",
      ],
      "Faj tedavisi antibiyotiklerin kullanımı daha kolay olduğu için Batı ülkelerinde gözden düştü.",
    ],
    [
      "Not only did the bacteria follow the magnet, ----.",
      [
        "but they also contained chains of magnetic crystals",
        "and Massachusetts is a state",
        "since mud is wet",
        "so the student was young",
        "unless the windows of the laboratory had been covered to prevent sunlight from entering the room",
      ],
      "'Not only ... but also' yapısı tamamlanır: bakteriler mıknatısı izlemekle kalmadı, manyetik kristal zincirleri de içeriyordu.",
    ],
    [
      "Once Buchner had shown that juice from yeast cells could ferment sugar, ----.",
      [
        "scientists began to study enzymes as chemicals",
        "yeast is used in baking",
        "Germany produces beer",
        "sugar is sweet",
        "Pasteur had already argued for many years that fermentation could take place only inside living cells",
      ],
      "Buchner maya hücrelerinden alınan özsuyun şekeri mayalandırabildiğini gösterdikten sonra bilim insanları enzimleri kimyasal maddeler olarak incelemeye başladı.",
    ],
    [
      "The researchers studied the slime mould ----.",
      [
        "to learn how simple organisms build efficient networks",
        "although it is yellow",
        "unless the oats were fresh",
        "because Tokyo is large",
        "while engineers were designing a new railway line between the airport and the centre of the city",
      ],
      "Araştırmacılar cıvık mantarı basit organizmaların nasıl verimli ağlar kurduğunu öğrenmek için inceledi.",
    ],
    [
      "Since the bacterium can repair its damaged DNA very efficiently, ----.",
      [
        "it can survive extreme doses of radiation",
        "it was found in tinned meat",
        "bacteria are small",
        "radiation is used in hospitals",
        "scientists had originally been trying to find a way of sterilising food so that it could be stored for a long time",
      ],
      "'Since' neden bildirir: bakteri hasar görmüş DNA'sını çok verimli onarabildiği için aşırı radyasyon dozlarına dayanabilir.",
    ],
    [
      "Unless bacteria could exchange genes directly, ----.",
      [
        "antibiotic resistance would spread more slowly",
        "bacteria are single cells",
        "the experiment was in 1946",
        "genes are made of DNA",
        "the young scientist who made the discovery would have needed to find another subject for his doctoral research",
      ],
      "'Unless' olumsuz koşul: bakteriler genlerini doğrudan değiş tokuş edemeseydi antibiyotik direnci daha yavaş yayılırdı.",
    ],
    [
      "Winogradsky's column is still used in schools ----.",
      [
        "because it shows how microbes form layered communities",
        "although it is made of glass",
        "unless the mud is fresh",
        "so that he was Russian",
        "while researchers continue to discover new species of bacteria living in the soil and in the deep ocean",
      ],
      "Winogradsky sütunu mikropların nasıl katmanlı topluluklar oluşturduğunu gösterdiği için okullarda hâlâ kullanılır.",
    ],
    [
      "Even though Prochlorococcus is extremely small, ----.",
      [
        "it may be the most abundant photosynthetic organism on Earth",
        "the ocean is very large",
        "it lives in water",
        "it was discovered in 1988",
        "the researchers who first noticed it were using an instrument that counted cells by measuring the light they gave off",
      ],
      "'Even though' zıtlık ister: Prochlorococcus son derece küçük olsa da Dünya'daki en bol fotosentetik organizma olabilir.",
    ],
  ],
  enTr: [
    [
      "Agar stays solid at temperatures well above that of the human body.",
      [
        "Agar, insan vücudunun sıcaklığının çok üzerindeki sıcaklıklarda katı kalır.",
        "Agar, insan vücudunun sıcaklığında hemen erir.",
        "İnsan vücudunun sıcaklığının çok üzerindeki sıcaklıklarda katı kalan maddeler, bakteriler tarafından kolayca sindirildiği için laboratuvarlarda kullanılmaz.",
        "Agar, yalnızca dondurulduğunda katı kalır.",
        "İnsan vücudu agarı ısıtamaz.",
      ],
      "'stays solid' 'katı kalır', 'at temperatures well above that of the human body' 'insan vücudunun sıcaklığının çok üzerindeki sıcaklıklarda' karşılığıdır.",
    ],
    [
      "The filtered juice was still able to infect healthy plants.",
      [
        "Süzülmüş özsu hâlâ sağlıklı bitkileri enfekte edebiliyordu.",
        "Süzülmüş özsu sağlıklı bitkileri iyileştirdi.",
        "Sağlıklı bitkileri enfekte etmeyen süzülmüş özsu, bilim insanlarını hastalığın büyük bir bakteriden kaynaklandığı sonucuna götürdü.",
        "Özsu süzülemedi.",
        "Sağlıklı bitkiler özsuyu süzdü.",
      ],
      "'The filtered juice was still able to infect' 'süzülmüş özsu hâlâ enfekte edebiliyordu', 'healthy plants' 'sağlıklı bitkileri' karşılığıdır.",
    ],
    [
      "Archaea look like bacteria under a microscope but are genetically very different.",
      [
        "Arkeler mikroskop altında bakterilere benzer ama genetik olarak çok farklıdır.",
        "Arkeler genetik olarak bakterilerle aynıdır ama mikroskop altında çok farklı görünür.",
        "Mikroskop altında bakterilerden kolayca ayırt edilebilen arkeler, genetik olarak bakterilerle aynı olduğu için uzun süre aynı grupta sınıflandırıldı.",
        "Arkeler mikroskopla görülemez.",
        "Bakteriler arkelerden evrimleşmiştir.",
      ],
      "'look like bacteria under a microscope' 'mikroskop altında bakterilere benzer', 'but are genetically very different' 'ama genetik olarak çok farklıdır' karşılığıdır.",
    ],
    [
      "Each type of phage attacks only a particular kind of bacterium.",
      [
        "Her faj türü yalnızca belirli bir bakteri türüne saldırır.",
        "Fajlar her türlü bakteriye saldırır.",
        "Belirli bir bakteri türüne saldıran fajlar, insan hücrelerine de zarar verdiği için tedavide kullanılmaları yasaklanmıştır.",
        "Bakteriler fajlara saldırır.",
        "Fajlar yalnızca bitkilere saldırır.",
      ],
      "'Each type of phage attacks' 'her faj türü saldırır', 'only a particular kind of bacterium' 'yalnızca belirli bir bakteri türüne' karşılığıdır.",
    ],
    [
      "Each cell contains a chain of tiny magnetic crystals that acts like a compass needle.",
      [
        "Her hücre, pusula iğnesi gibi davranan küçük manyetik kristallerden oluşan bir zincir içerir.",
        "Her hücre, pusula iğnelerini yok eden kristaller üretir.",
        "Pusula iğnesi gibi davranan küçük manyetik kristaller, hücrelerin içinde zincir oluşturamadığı için bakterilerin yön bulmasına hiçbir katkı sağlamaz.",
        "Hücreler pusula olarak kullanılır.",
        "Kristaller hücrelerin dışında bulunur.",
      ],
      "'Each cell contains a chain of tiny magnetic crystals' 'her hücre küçük manyetik kristallerden oluşan bir zincir içerir', 'that acts like a compass needle' 'pusula iğnesi gibi davranan' karşılığıdır.",
    ],
    [
      "The network formed by the slime mould closely resembled the real railway system.",
      [
        "Cıvık mantarın oluşturduğu ağ, gerçek demiryolu sistemine çok benziyordu.",
        "Cıvık mantar, gerçek demiryolu sistemini tamamen yok etti.",
        "Gerçek demiryolu sistemini incelemek için kullanılan cıvık mantar, ağ oluşturmayı başaramadığı için araştırmacılar deneyden vazgeçti.",
        "Demiryolu sistemi cıvık mantardan esinlenerek yapıldı.",
        "Cıvık mantar hiçbir ağ oluşturmadı.",
      ],
      "'The network formed by the slime mould' 'cıvık mantarın oluşturduğu ağ', 'closely resembled the real railway system' 'gerçek demiryolu sistemine çok benziyordu' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Petri, adını taşıyan sığ cam kabı tasarladı.",
      [
        "Petri designed the shallow glass dish that bears his name.",
        "Petri named a deep glass dish after his wife.",
        "Petri wanted to design a shallow glass dish, but the instrument makers could not produce it, so he continued to use potato slices.",
        "The glass dish was designed before Petri was born.",
        "Petri refused to use glass.",
      ],
      "'adını taşıyan sığ cam kabı' 'the shallow glass dish that bears his name', 'tasarladı' 'designed' karşılığıdır.",
    ],
    [
      "Virüs, yeni icat edilen elektron mikroskobuyla görüldü.",
      [
        "The virus was seen with the newly invented electron microscope.",
        "The electron microscope was invented by the virus.",
        "The virus was too small to be seen even with the newly invented electron microscope, so its shape remained unknown for decades.",
        "The virus destroyed the electron microscope.",
        "The microscope was invented after the virus disappeared.",
      ],
      "'yeni icat edilen elektron mikroskobuyla' 'with the newly invented electron microscope', 'virüs görüldü' 'the virus was seen' karşılığıdır.",
    ],
    [
      "Woese'nin fikirleri başlangıçta pek çok biyolog tarafından reddedildi.",
      [
        "Woese's ideas were initially rejected by many biologists.",
        "Woese's ideas were accepted immediately by all biologists.",
        "Woese rejected the ideas of many biologists and decided to work alone, without publishing any of his results for many years.",
        "Biologists asked Woese to change his ideas.",
        "Woese had no ideas about biology.",
      ],
      "'başlangıçta pek çok biyolog tarafından' 'initially by many biologists', 'Woese'nin fikirleri reddedildi' 'Woese's ideas were rejected' karşılığıdır.",
    ],
    [
      "Faj tedavisi, Gürcistan'da onlarca yıldır kullanılmaktadır.",
      [
        "Phage therapy has been used in Georgia for decades.",
        "Phage therapy was banned in Georgia decades ago.",
        "Phage therapy was invented in Georgia only recently, and it has not yet been tested on any patients in hospitals there.",
        "Georgia exports phages to every country.",
        "Phages are found only in Georgia.",
      ],
      "'Gürcistan'da onlarca yıldır' 'in Georgia for decades', 'faj tedavisi kullanılmaktadır' 'phage therapy has been used' karşılığıdır.",
    ],
    [
      "Bakteri, konserve et radyasyonla sterilize edilmeye çalışılırken keşfedildi.",
      [
        "The bacterium was discovered while attempts were being made to sterilise tinned meat with radiation.",
        "The bacterium was used to preserve tinned meat.",
        "The bacterium was discovered in tinned meat that had not been treated with radiation and had been stored for many years in a warm room.",
        "Radiation was discovered in tinned meat.",
        "The meat destroyed the bacterium.",
      ],
      "'konserve et radyasyonla sterilize edilmeye çalışılırken' 'while attempts were being made to sterilise tinned meat with radiation', 'bakteri keşfedildi' 'the bacterium was discovered' karşılığıdır.",
    ],
    [
      "Okyanustaki bu küçük organizmalar, gezegenin oksijeninin önemli bir kısmını üretir.",
      [
        "These tiny organisms in the ocean produce a significant share of the planet's oxygen.",
        "These tiny organisms consume most of the oxygen in the ocean.",
        "These tiny organisms were thought to produce a large share of the planet's oxygen, but later studies showed that their contribution was almost zero.",
        "The ocean produces tiny organisms from oxygen.",
        "Oxygen kills these organisms.",
      ],
      "'Okyanustaki bu küçük organizmalar' 'these tiny organisms in the ocean', 'gezegenin oksijeninin önemli bir kısmını üretir' 'produce a significant share of the planet's oxygen' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "For much of the twentieth century, biologists divided living things into two broad groups: prokaryotes, simple cells without a nucleus, such as bacteria, and eukaryotes, cells with a nucleus, which include plants, animals and fungi. In the 1970s, Carl Woese, a microbiologist at the University of Illinois, began comparing the genetic sequence of a molecule found in all cells, part of the ribosome, the structure that makes proteins. Because this molecule changes only slowly over evolutionary time, differences in its sequence could reveal how closely different organisms are related. In 1977, Woese and his colleague George Fox reported that a group of microbes that produce methane gas, previously classified as bacteria, were genetically as different from bacteria as bacteria are from plants and animals. Woese proposed that they formed a separate fundamental group, later named archaea. Many of the archaea then known lived in extreme environments, such as hot springs, salt lakes and oxygen-free swamps. Woese's proposal was initially greeted with scepticism and even ridicule by many leading biologists, who were reluctant to rethink the basic classification of life on the evidence of a single molecule. Over the following decades, however, further genetic studies confirmed his conclusions, and the 'three domains' of life, bacteria, archaea and eukaryotes, are now widely accepted. Archaea have since been found in many ordinary environments, including soil, oceans and the human gut.",
      questions: [
        [
          "According to the passage, Woese chose to study a ribosomal molecule because ----.",
          [
            "it changes slowly and is found in all cells",
            "it produces methane",
            "it is found only in bacteria",
            "it could be seen easily with the microscopes that were available at his university in the 1970s",
            "it controls the nucleus",
          ],
          "Metne göre tüm hücrelerde bulunur ve evrimsel zaman içinde yavaş değişir.",
        ],
        [
          "It can be understood from the passage that many biologists initially ----.",
          [
            "doubted Woese's conclusions",
            "accepted the new classification",
            "had already discovered archaea",
            "believed that archaea were more closely related to plants than to bacteria or animals",
            "studied hot springs",
          ],
          "Önde gelen pek çok biyolog başlangıçta şüphe ve hatta alayla karşıladı.",
        ],
        [
          "The passage indicates that archaea ----.",
          [
            "are not limited to extreme environments",
            "live only in hot springs",
            "are a type of plant",
            "were discovered to be identical to bacteria after further genetic studies",
            "cannot live in the human body",
          ],
          "Toprakta, okyanuslarda ve insan bağırsağında da bulunmuştur.",
        ],
      ],
    },
    {
      text:
        "In 1917, the French-Canadian microbiologist Félix d'Hérelle, working at the Pasteur Institute in Paris, noticed that something in filtered samples from patients recovering from dysentery could destroy cultures of the bacteria that caused the disease, leaving clear patches in them. He concluded that the agent was a virus that infected and killed bacteria, and he named it a bacteriophage, meaning 'bacteria eater'; the British scientist Frederick Twort had observed a similar phenomenon two years earlier. D'Hérelle believed that phages could be used to treat bacterial infections, and in the 1920s and 1930s phage therapy was used in many countries. In 1923, he helped the Georgian microbiologist George Eliava to found an institute in Tbilisi devoted to phage research. However, early results were inconsistent, partly because the biology of phages was poorly understood, and after antibiotics became available in the 1940s, phage therapy was largely abandoned in Western countries. It continued to be used in the Soviet Union, particularly in Georgia and Poland. Eliava himself was executed in 1937 during Stalin's purges, but his institute survived. With the rise of bacteria resistant to antibiotics, interest in phage therapy has revived in recent years, and several patients with life-threatening infections have been treated successfully with phages selected to attack their particular bacteria.",
      questions: [
        [
          "According to the passage, d'Hérelle concluded that the agent was a virus because ----.",
          [
            "it passed through filters and destroyed bacteria",
            "it caused dysentery",
            "it was visible under a microscope",
            "it could be grown on agar plates in the same way as the bacteria that it attacked",
            "it was found in water",
          ],
          "Süzülmüş örneklerde bulunuyordu ve bakteri kültürlerini yok ediyordu.",
        ],
        [
          "It can be understood from the passage that phage therapy declined in the West mainly because ----.",
          [
            "antibiotics offered a more reliable alternative",
            "phages were dangerous",
            "d'Hérelle opposed it",
            "the institute in Tbilisi refused to share its knowledge with scientists in other countries",
            "bacteria disappeared",
          ],
          "Erken sonuçlar tutarsızdı ve antibiyotikler kullanıma girince büyük ölçüde terk edildi.",
        ],
        [
          "Renewed interest in phage therapy is linked to ----.",
          [
            "the spread of antibiotic-resistant bacteria",
            "the discovery of new antibiotics",
            "the closure of the institute",
            "the decision of Western governments to stop producing antibiotics in large quantities",
            "Eliava's research",
          ],
          "Antibiyotiklere dirençli bakterilerin yükselişiyle ilgi yeniden canlandı.",
        ],
      ],
    },
    {
      text:
        "In 1975, Richard Blakemore, a graduate student at the University of Massachusetts, was examining samples of mud from a marsh near Woods Hole under a microscope when he noticed something strange: certain bacteria all swam in the same direction, collecting at one edge of the drop of water. At first he suspected that they were responding to light, but when he moved the microscope or covered the room's windows, they still swam the same way. Holding a small magnet near the slide, he found that the bacteria changed direction as he moved it, following the magnetic field. Examining them with an electron microscope, he discovered that each cell contained a chain of tiny crystals of magnetite, a magnetic iron mineral, which acted like a compass needle and aligned the bacterium with the Earth's magnetic field. Blakemore proposed an explanation for this behaviour. In the Northern Hemisphere, the Earth's magnetic field points not only north but also downwards into the ground. By swimming along the field lines, the bacteria, which prefer low levels of oxygen, would be guided down into the mud, away from the oxygen-rich water at the surface. Later research supported this idea: bacteria of the same kind collected in the Southern Hemisphere tend to swim in the opposite direction, which also leads them downwards there. Such 'magnetotactic' bacteria have since been found in many environments, and scientists are studying how their tiny magnets might be used in medicine and technology.",
      questions: [
        [
          "According to the passage, Blakemore first suspected that the bacteria were responding to ----.",
          [
            "light",
            "temperature",
            "food",
            "the vibrations caused by moving the microscope from one side of the laboratory to the other",
            "sound",
          ],
          "Metne göre önce ışığa tepki verdiklerinden şüphelendi.",
        ],
        [
          "The crystals of magnetite allowed the bacteria to ----.",
          [
            "line up with the Earth's magnetic field",
            "produce oxygen",
            "digest iron",
            "detect the presence of other bacteria that were swimming in the same drop of water",
            "avoid the magnet",
          ],
          "Pusula iğnesi gibi davranarak bakteriyi Dünya'nın manyetik alanıyla hizalıyordu.",
        ],
        [
          "It can be understood from the passage that bacteria from the Southern Hemisphere ----.",
          [
            "also use the field to move downwards",
            "do not contain magnetite",
            "prefer oxygen-rich water",
            "always swim towards the surface of the water, where there is more oxygen and light",
            "swim towards the north",
          ],
          "Ters yönde yüzerler ama bu da onları orada aşağıya götürür.",
        ],
      ],
    },
    {
      text:
        "Physarum polycephalum is a slime mould, a single-celled organism that can grow to cover an area of several square metres. It has no brain or nervous system, yet it can find food efficiently. When it encounters food sources, it spreads out a network of tubes to explore its surroundings, and then gradually strengthens the tubes that connect food sources most efficiently while abandoning the others. In 2010, a team of Japanese and British researchers led by Atsushi Tero and Toshiyuki Nakagaki tested this ability in a striking experiment. They placed oat flakes, a favourite food of the slime mould, on a wet surface in a pattern that matched the positions of Tokyo and the surrounding cities. The slime mould was placed at the position of Tokyo. Within about a day, it had spread out and formed a network of tubes connecting the oat flakes. To mimic mountains and lakes, where railways are difficult to build, the researchers used bright light, which the organism avoids. The resulting network closely resembled the real railway system of the Tokyo region, with similar efficiency, cost and resistance to damage. The researchers used the results to develop a mathematical model that might help engineers design transport and communication networks. Earlier, Nakagaki had shown that the slime mould could find the shortest route through a maze.",
      questions: [
        [
          "According to the passage, the slime mould creates efficient networks by ----.",
          [
            "keeping the best routes and dropping the others",
            "using its brain",
            "following light",
            "building tubes in straight lines between every possible pair of food sources",
            "copying railways",
          ],
          "Metne göre besin kaynaklarını en verimli bağlayan tüpleri güçlendirip diğerlerini terk eder.",
        ],
        [
          "Bright light was used in the experiment to ----.",
          [
            "represent areas where building is difficult",
            "attract the slime mould",
            "speed up growth",
            "show the positions of the cities around Tokyo on the wet surface of the dish",
            "kill the organism",
          ],
          "Organizma ışıktan kaçındığı için dağları ve gölleri temsil etmek amacıyla kullanıldı.",
        ],
        [
          "It can be inferred from the passage that the experiment ----.",
          [
            "may have practical uses in network design",
            "proved that slime moulds have brains",
            "failed",
            "was designed by railway engineers who were planning a new line in the Tokyo region",
            "was carried out in a maze",
          ],
          "Sonuçlar mühendislere ağ tasarımında yardımcı olabilecek bir model geliştirmek için kullanıldı.",
        ],
      ],
    },
    {
      text:
        "For much of the nineteenth century, scientists debated the nature of fermentation, the process by which yeast converts sugar into alcohol and carbon dioxide. Louis Pasteur had shown that fermentation was carried out by living yeast cells, and he believed that it could take place only inside living cells, as a result of a 'vital force'. Others argued that it was caused by chemical substances that the cells contained. In 1897, the German chemist Eduard Buchner, working with his brother Hans, ground yeast cells with sand and pressed out the juice, intending to use it for medical purposes. To preserve the juice, they added a large amount of sugar, a common method of preserving food. To their surprise, the mixture began to bubble: the cell-free juice was fermenting the sugar. Buchner concluded that fermentation was caused by a substance in the juice, which he called zymase. His discovery showed that the chemical reactions of life could take place outside living cells, and it helped to establish the modern science of biochemistry. It became clear that such reactions are driven by enzymes, proteins that speed up chemical processes. Buchner received the Nobel Prize in Chemistry in 1907. He was killed in 1917 while serving as a medical officer in the First World War.",
      questions: [
        [
          "According to the passage, Pasteur believed that fermentation ----.",
          [
            "required living cells",
            "was caused by sand",
            "did not involve yeast",
            "could be carried out by juice that had been pressed out of yeast cells in the laboratory",
            "produced oxygen",
          ],
          "Metne göre fermantasyonun yalnızca canlı hücrelerin içinde gerçekleşebileceğine inanıyordu.",
        ],
        [
          "The Buchner brothers added sugar to the juice in order to ----.",
          [
            "preserve it",
            "test for fermentation",
            "make it sweeter for patients",
            "prove that Pasteur's theory about the vital force inside living cells was correct",
            "kill the yeast",
          ],
          "Özsuyu korumak için yaygın bir yöntem olarak şeker eklediler.",
        ],
        [
          "It can be understood from the passage that Buchner's discovery ----.",
          [
            "was made by accident",
            "was planned from the start",
            "supported the idea of a vital force",
            "was rejected by the Nobel committee because it contradicted Pasteur's earlier work",
            "concerned only medicine",
          ],
          "Özsuyu tıbbi amaçla hazırlarken beklenmedik biçimde fermantasyon gözlendi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1956, scientists in Oregon were testing whether high doses of radiation could be used to sterilise tinned meat. ---- The organism, Deinococcus radiodurans, can survive doses thousands of times higher than those that would kill a human, partly because it repairs its damaged DNA with remarkable speed.",
      [
        "To their surprise, some tins spoiled anyway, and they found a bacterium that had survived the treatment.",
        "Oregon is in the north-west.",
        "Meat is a source of protein.",
        "Because of its toughness, the bacterium has been nicknamed 'Conan the Bacterium', and it has been listed in a book of records as the world's toughest bacterium.",
        "Radiation is invisible.",
      ],
      "Boşluktan sonra 'The organism' ifadesi gelir; boşluğa bazı konservelerin yine de bozulduğunu ve tedaviden sağ çıkan bir bakteri bulunduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1946, a twenty-one-year-old American student, Joshua Lederberg, working with Edward Tatum, mixed two strains of bacteria that each lacked the ability to make different nutrients. ---- This showed that bacteria can exchange genetic material directly, a process later called conjugation.",
      [
        "Some of the resulting bacteria could make all the nutrients, which meant they had combined genes from both strains.",
        "Bacteria are single cells.",
        "Students study at universities.",
        "Lederberg later received the Nobel Prize at the age of thirty-three and became one of the leading advisers to the American government on biological weapons and space exploration.",
        "Nutrients are needed for growth.",
      ],
      "Boşluktan sonra 'This showed' ile genetik materyal değişimi anlatılır; boşluğa ortaya çıkan bazı bakterilerin her iki suştan gen birleştirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1880s, the Russian microbiologist Sergei Winogradsky filled a glass tube with mud and water from a pond, together with sources of carbon and sulphur. ---- The 'Winogradsky column' is still used today to show how microbial communities are organised.",
      [
        "Over several weeks, distinct coloured layers of different microbes developed, each thriving at a different level of oxygen and light.",
        "Ponds contain many organisms.",
        "Glass is transparent.",
        "Winogradsky later discovered that some bacteria could obtain energy from chemicals such as iron and sulphur compounds instead of from sunlight or food.",
        "Mud is found near water.",
      ],
      "Boşluktan sonra sütunun mikrobiyal toplulukları göstermek için kullanıldığı anlatılır; boşluğa haftalar içinde farklı oksijen ve ışık düzeylerinde renkli katmanlar oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1915, the British bacteriologist Frederick Twort noticed glassy, transparent areas in his cultures of bacteria. ---- His observations were largely forgotten, however, and the discovery is usually credited to Félix d'Hérelle, who described the same phenomenon in 1917.",
      [
        "He suggested that they might be caused by an agent, perhaps a virus, that destroyed the bacteria.",
        "Bacteria grow in cultures.",
        "Britain has many universities.",
        "Twort had been trying to grow a virus that caused smallpox in animals on artificial food, an experiment that failed because viruses can grow only inside living cells.",
        "Glass is made from sand.",
      ],
      "Boşluktan sonra 'His observations' ifadesi gelir; boşluğa bu alanların bakterileri yok eden bir etkenden kaynaklanabileceğini öne sürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In 1988, oceanographers using an instrument that measures the light given off by individual cells discovered a tiny photosynthetic microbe, which they named Prochlorococcus. ---- Scientists now estimate that it is responsible for a significant fraction of the oxygen produced on Earth.",
      [
        "Although each cell is less than a thousandth of a millimetre across, it is so abundant that a single drop of seawater may contain thousands.",
        "Oceans cover most of the planet.",
        "Microbes are very small.",
        "The instrument had originally been developed for medical laboratories, where it was used to count and sort blood cells by passing them in single file through a beam of light.",
        "Seawater is salty.",
      ],
      "Boşluktan sonra 'it' zamiriyle oksijen üretimindeki payı anlatılır; boşluğa hücrelerin çok küçük ama çok bol olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Many microbes form slimy layers called biofilms on surfaces such as rocks in rivers, teeth and medical devices. ---- This makes infections associated with devices such as catheters and artificial joints particularly difficult to treat.",
      [
        "Bacteria living in biofilms are often far more resistant to antibiotics than the same bacteria living freely.",
        "Rivers flow into the sea.",
        "Teeth should be brushed daily.",
        "The plaque that forms on teeth is one of the most familiar examples, and dentists have studied it for more than a century, since Leeuwenhoek first examined it under his microscope.",
        "Medical devices are expensive.",
      ],
      "Boşluktan sonra 'This makes' ile enfeksiyonların tedavisinin zorlaştığı anlatılır; boşluğa biyofilmdeki bakterilerin antibiyotiklere çok daha dirençli olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Sourdough bread rises thanks to a culture of wild yeasts and bacteria that bakers keep going in flour and water.",
        "The bacteria produce acids that give the bread its sour taste.",
        "Wheat is grown on every inhabited continent.",
        "Bakers keep their starters alive for years by feeding them regularly with fresh flour.",
        "Studies show that starters from different bakeries contain different communities of microbes.",
      ],
      odd: 2,
      why: "Parça ekşi maya ekmeğindeki mikropları anlatır. Buğdayın her yerleşik kıtada yetiştirildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Roquefort cheese gets its blue veins from a mould called Penicillium roqueforti.",
        "By law, it must be aged in natural caves near the village of Roquefort in southern France.",
        "France is famous for its wine.",
        "The mould grows in the cool, damp air of the caves.",
        "Holes are made in the cheese so that air can reach the mould inside.",
      ],
      odd: 2,
      why: "Parça Rokfor peynirindeki küfü anlatır. Fransa'nın şarabıyla ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Hawaiian bobtail squid hides from predators at night using light produced by bacteria.",
        "The bacteria live in a special organ on the squid's underside.",
        "The light matches the moonlight from above, so the squid casts no shadow.",
        "Hawaii is a popular holiday destination.",
        "Each morning, the squid expels most of the bacteria and the population grows back during the day.",
      ],
      odd: 3,
      why: "Parça kalamar ile ışık üreten bakterilerin ortaklığını anlatır. Hawaii'nin popüler bir tatil yeri olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Studies have found large numbers of bacteria on mobile phone screens.",
        "Many people use their phones in bathrooms and while eating.",
        "Mobile phones became popular in the 1990s.",
        "Experts recommend cleaning phones regularly with suitable wipes.",
        "Most of the bacteria are harmless, but some can cause infections.",
      ],
      odd: 2,
      why: "Parça cep telefonlarındaki bakterileri anlatır. Cep telefonlarının 1990'larda yaygınlaştığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some bacteria can survive for long periods as tough, dormant structures called spores.",
        "Spores can resist heat, drying and chemicals.",
        "Scientists have revived bacteria from spores that were thousands of years old.",
        "Many bacteria are shaped like rods.",
        "This is why food must be heated thoroughly to make it safe.",
      ],
      odd: 3,
      why: "Parça bakteri sporlarının dayanıklılığını anlatır. Pek çok bakterinin çubuk şeklinde olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some microbes can break down plastics.",
        "Mountains are formed by the movement of tectonic plates.",
        "In 2016, Japanese scientists discovered a bacterium that can digest a common type of plastic used in bottles.",
        "Researchers are trying to improve the enzymes it uses.",
        "They hope this could one day help to reduce plastic pollution.",
      ],
      odd: 1,
      why: "Parça plastik sindiren mikropları anlatır. Dağların levha hareketleriyle oluştuğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
