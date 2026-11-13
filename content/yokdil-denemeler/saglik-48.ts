import type { YokdilDeneme } from "./types";

export const SAGLIK_48: YokdilDeneme = {
  no: 48,
  field: "saglik",
  vocab: [
    [
      "The queen unknowingly ---- the faulty gene to several of her children.",
      ["passed on", "took off", "looked up", "gave in", "ran out"],
      "Kraliçenin bilmeden kusurlu geni çocuklarından birkaçına 'aktardığı' (passed on) anlatılır.",
    ],
    [
      "Even a minor fall could cause dangerous internal ---- in a boy with haemophilia.",
      ["bleeding", "growth", "cooling", "sleeping", "laughing"],
      "Hemofili hastası bir erkek çocukta küçük bir düşüşün bile tehlikeli iç 'kanamaya' (bleeding) yol açabileceği anlatılır.",
    ],
    [
      "The Church required couples to show a ---- confirming that they had been tested before marriage.",
      ["certificate", "painting", "ticket", "recipe", "letter of complaint"],
      "Kilisenin çiftlerden evlilikten önce test yaptırdıklarını doğrulayan bir 'belge' (certificate) göstermelerini istediği anlatılır.",
    ],
    [
      "The actress decided to have surgery to ---- her risk of developing breast cancer.",
      ["reduce", "increase", "measure", "hide", "ignore"],
      "Oyuncunun meme kanseri geliştirme riskini 'azaltmak' (reduce) için ameliyat olmaya karar verdiği anlatılır.",
    ],
    [
      "The boy had to live inside a ---- plastic chamber because his body could not fight infections.",
      ["sterile", "crowded", "colourful", "noisy", "temporary"],
      "Çocuğun vücudu enfeksiyonlarla savaşamadığı için 'steril' (sterile) bir plastik odada yaşamak zorunda olduğu anlatılır.",
    ],
    [
      "Investigators found that the researchers had failed to ---- earlier side effects to the authorities.",
      ["report", "invent", "celebrate", "repair", "decorate"],
      "Müfettişlerin araştırmacıların önceki yan etkileri yetkililere 'bildirmediğini' (report) bulduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "Queen Victoria ---- that she carried the gene for haemophilia until her son became ill.",
      ["had not known", "does not know", "has not known", "will not know", "is not knowing"],
      "Oğlu hastalanmadan önceki durum: 'had not known'.",
    ],
    [
      "By the time the screening programme began, the disease ---- a heavy burden on the island's health service.",
      ["had become", "becomes", "will become", "is becoming", "has been become"],
      "Geçmişteki bir andan önce tamamlanmış durum: 'had become'.",
    ],
    [
      "If the boy had received a bone marrow transplant from a matching sibling, he ---- a normal life.",
      ["might have lived", "will live", "lives", "had lived", "is living"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have lived'.",
    ],
    [
      "The gene responsible for cystic fibrosis ---- in 1989 by a team in Toronto and Michigan.",
      ["was identified", "identified", "has identified", "is identifying", "identifies"],
      "Gen tanımlanmıştır; edilgen geçmiş zaman: 'was identified'.",
    ],
    [
      "---- the condition made their skin blue, family members were otherwise healthy.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Derinin mavi olması ile başka açılardan sağlıklı olmaları zıttır: 'Although'.",
    ],
    [
      "The tsar's son, ---- illness was kept secret from the public, suffered terrible attacks of bleeding.",
      ["whose", "which", "who", "whom", "where"],
      "Çarın oğlunun hastalığı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The volunteer died four days after the treatment, ---- led to the suspension of many trials.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more closely related the parents were, ---- the risk of inherited disorders became.",
      ["the greater", "the greatest", "greater than", "more great", "so great"],
      "'The more ..., the greater ...' paralel yapısı: 'the greater'.",
    ],
    [
      "Only after the doctor gave them a blue dye ---- the family members' skin turn pink.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Results are kept confidential ---- no one is stigmatised for carrying the gene.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The doctors persuaded his parents ---- him to live in the plastic bubble.",
      ["to allow", "allowing", "allow", "allowed", "to allowing"],
      "'persuade sb to do sth' kalıbı: 'to allow'.",
    ],
    [
      "The disease is believed ---- by the marriage of cousins over many generations.",
      ["to have been spread", "spreading", "to spread", "spread", "to be spreading"],
      "Geçmişe ait edilgen durum için mastarın geçmiş edilgen biçimi: 'to have been spread'.",
    ],
    [
      "The bleeding was so severe ---- doctors feared the boy would die.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Genetic counsellors recommend that people with a family history of the disease ---- tested.",
      ["be", "are", "were", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "Haemophilia is a hereditary disorder that prevents normal blood clotting, so that injuries can lead to prolonged or dangerous bleeding. The gene responsible is carried on the X chromosome, {1} the disease mainly affects males, while females can carry the gene without usually showing symptoms. Queen Victoria of Britain was a carrier, although nobody in her family had previously been known to have the disease, which suggests that the mutation arose in her or in one of her parents. Her son Leopold had haemophilia and died at the age of thirty after a fall. Two of her daughters were carriers, and {2} the royal families of Europe were closely connected through marriage, the gene spread to the royal houses of Spain, Germany and Russia. The most famous case was Alexei, the only son of Tsar Nicholas II of Russia, born in 1904. His parents kept his illness secret from the public, {3} his frequent and painful bleeding episodes caused them great anxiety. The tsarina came to rely on Grigori Rasputin, a mystic who seemed able to calm the boy during his attacks, {4} gave Rasputin considerable influence at court and damaged the reputation of the royal family. In 2009, genetic analysis of the remains of the Russian royal family, who were killed in 1918, confirmed that Alexei had a rare form of haemophilia known {5} haemophilia B.",
      blanks: [
        [
          "(21) ----",
          ["so", "but", "or", "yet", "nor"],
          "Genin X kromozomunda olmasının sonucu olarak hastalık çoğunlukla erkekleri etkiler: 'so'.",
        ],
        [
          "(22) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Genin yayılmasının nedeni Avrupa kraliyet ailelerinin evlilikle bağlı olmasıdır: 'because'.",
        ],
        [
          "(23) ----",
          ["but", "so", "and", "or", "for"],
          "Hastalığın gizli tutulması ile ailenin büyük kaygı duyması zıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki durumun tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(25) ----",
          ["as", "than", "so", "for", "by"],
          "'... olarak bilinen' anlamındaki 'known as' kalıbı gerekir: 'as'.",
        ],
      ],
    },
    {
      text:
        "Thalassaemia is a group of inherited blood disorders in which the body produces abnormal haemoglobin, the protein that carries oxygen in red blood cells. People who inherit the faulty gene from only one parent are healthy carriers, {1} children who inherit it from both parents may develop the severe form, thalassaemia major. These children need regular blood transfusions throughout their lives and drugs to remove the excess iron that builds up as a result. In Cyprus, where about one person in seven is a carrier, the disease placed a heavy burden on families and on the health service in the 1970s, {2} it was estimated that within a few decades the cost of treating patients could consume much of the national health budget. In 1973, the government introduced a programme of public education and voluntary testing for carriers. Couples who were both carriers were offered genetic counselling and, later, prenatal diagnosis. In the early 1980s, the Greek Orthodox Church, {3} conducted most marriages on the island, began to require couples to show a certificate proving that they had been tested, although the result itself did not prevent a marriage. The number of babies born with thalassaemia major fell dramatically, from over fifty a year in the mid-1970s to almost none by the 2000s. The programme is often cited as a model, {4} it has also prompted debate about the ethical issues raised by genetic screening, particularly the pressure it may place on couples to make difficult decisions {5} their future children.",
      blanks: [
        [
          "(26) ----",
          ["whereas", "because", "unless", "so that", "until"],
          "Sağlıklı taşıyıcılar ile ağır hastalığa yakalanabilecek çocuklar karşılaştırılır: 'whereas'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "Ağır yük olması ve maliyetin bütçeyi tüketebileceği tahmini birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["which", "who", "whose", "where", "what"],
          "Virgüller arasında kiliseyi niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["although", "because", "unless", "so that", "once"],
          "Model gösterilmesi ile etik tartışmalara yol açması zıttır: 'although'.",
        ],
        [
          "(30) ----",
          ["about", "against", "without", "beyond", "under"],
          "'decisions about sth' kalıbı: 'about'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although none of Queen Victoria's ancestors were known to have haemophilia, ----.",
      [
        "she carried the gene",
        "she ruled for many years",
        "Britain had an empire",
        "Leopold was her son",
        "the royal families of Europe were connected through a series of marriages arranged for political reasons",
      ],
      "'Although' zıtlık ister: Kraliçe Victoria'nın atalarında hemofili bilinmese de geni taşıyordu.",
    ],
    [
      "----, the number of children born with severe thalassaemia fell sharply.",
      [
        "As a result of the screening programme",
        "Although Cyprus is an island",
        "Unless the Church agreed",
        "Since iron builds up in the body",
        "While the government was trying to estimate how much the treatment of patients would cost in the future",
      ],
      "Tarama programının sonucunda ağır talasemiyle doğan çocuk sayısı keskin biçimde düştü.",
    ],
    [
      "If a woman has inherited a faulty BRCA1 gene, ----.",
      [
        "her risk of breast cancer is much higher",
        "the actress is American",
        "genes are made of DNA",
        "surgery is expensive",
        "her doctors may be unable to decide whether the test was carried out correctly in the laboratory",
      ],
      "Birinci tip koşul: bir kadın kusurlu BRCA1 genini kalıtımla almışsa meme kanseri riski çok daha yüksektir.",
    ],
    [
      "The rabbi set up the testing programme ----.",
      [
        "because several of his children had died of the disease",
        "although he lived in New York",
        "unless couples were young",
        "so that the disease is rare",
        "while doctors in other countries were developing tests that could detect the condition before birth",
      ],
      "Haham çocuklarından birkaçı hastalıktan öldüğü için test programını kurdu.",
    ],
    [
      "Not only did David live in a sterile bubble, ----.",
      [
        "but he also had to wear a special suit to go outside",
        "and Texas is a large state",
        "since bubbles are made of plastic",
        "so his sister was healthy",
        "unless the doctors had been able to find a donor whose bone marrow was a perfect match for his own",
      ],
      "'Not only ... but also' yapısı tamamlanır: David steril bir balonda yaşamakla kalmadı, dışarı çıkmak için özel bir giysi de giymek zorundaydı.",
    ],
    [
      "Once the volunteer had died, ----.",
      [
        "regulators investigated the trial",
        "the liver is an organ",
        "he was eighteen",
        "Pennsylvania is a state",
        "the disease that he suffered from had been controlled by a strict diet and medication for many years",
      ],
      "Gönüllü öldükten sonra düzenleyiciler denemeyi soruşturdu.",
    ],
    [
      "The family's skin was blue ----.",
      [
        "because their blood carried less oxygen than normal",
        "although they lived in Kentucky",
        "unless they were cold",
        "so that the doctor visited them",
        "while other families living in the same remote valley had married into the family over several generations",
      ],
      "Ailenin derisi kanları normalden az oksijen taşıdığı için maviydi.",
    ],
    [
      "Since the gene for cystic fibrosis had been found, ----.",
      [
        "doctors could test for the disease more reliably",
        "the lungs are affected",
        "Toronto is in Canada",
        "the disease is inherited",
        "researchers in several countries had been searching for it for many years without success",
      ],
      "'Since' neden bildirir: kistik fibroz geni bulunduğu için doktorlar hastalığı daha güvenilir biçimde test edebiliyordu.",
    ],
    [
      "Unless the Habsburgs had married close relatives so often, ----.",
      [
        "the family's inherited problems might have been less severe",
        "Spain is in Europe",
        "the family was powerful",
        "kings had portraits painted",
        "the last king of the Spanish branch of the family would have been able to rule the country for many more years",
      ],
      "'Unless' olumsuz koşul: Habsburglar yakın akrabalarla bu kadar sık evlenmeseydi ailenin kalıtsal sorunları daha hafif olabilirdi.",
    ],
    [
      "People with G6PD deficiency should avoid broad beans ----.",
      [
        "because the beans can destroy their red blood cells",
        "although beans are healthy",
        "unless they are cooked",
        "so that they live near the Mediterranean",
        "while scientists are studying why the condition is more common in areas where malaria was once widespread",
      ],
      "G6PD eksikliği olan kişiler bakla kırmızı kan hücrelerini yok edebildiği için bakladan kaçınmalıdır.",
    ],
    [
      "Even though home genetic tests are easy to buy, ----.",
      [
        "their results can be difficult to interpret",
        "saliva is easy to collect",
        "many people are curious",
        "DNA is found in cells",
        "the companies that sell them also use the data for research, with the permission of their customers",
      ],
      "'Even though' zıtlık ister: evde genetik testler kolayca satın alınabilse de sonuçlarını yorumlamak zor olabilir.",
    ],
  ],
  enTr: [
    [
      "Females can carry the gene without usually showing any symptoms.",
      [
        "Kadınlar genellikle hiçbir belirti göstermeden geni taşıyabilir.",
        "Kadınlar geni taşıdıklarında her zaman ağır belirtiler gösterir.",
        "Belirti göstermeyen kadınların geni taşıyıp taşımadığını öğrenmek için doktorlar, ailedeki erkeklerin kan örneklerini incelemek zorunda kalır.",
        "Kadınlar geni hiçbir zaman taşıyamaz.",
        "Gen, yalnızca belirti gösteren kadınlarda bulunur.",
      ],
      "'Females can carry the gene' 'kadınlar geni taşıyabilir', 'without usually showing any symptoms' 'genellikle hiçbir belirti göstermeden' karşılığıdır.",
    ],
    [
      "Couples who were both carriers were offered genetic counselling.",
      [
        "Her ikisi de taşıyıcı olan çiftlere genetik danışmanlık sunuldu.",
        "Taşıyıcı olmayan çiftlerin evlenmesi yasaklandı.",
        "Genetik danışmanlık almak isteyen çiftler, her ikisinin de taşıyıcı olmadığını kanıtlayan bir belge göstermedikçe bu hizmetten yararlanamadı.",
        "Taşıyıcı çiftler danışmanlık hizmeti verdi.",
        "Çiftlere hiçbir danışmanlık sunulmadı.",
      ],
      "'Couples who were both carriers' 'her ikisi de taşıyıcı olan çiftlere', 'were offered genetic counselling' 'genetik danışmanlık sunuldu' karşılığıdır.",
    ],
    [
      "Her announcement led to a sharp increase in the number of women seeking genetic tests.",
      [
        "Onun açıklaması, genetik test yaptırmak isteyen kadınların sayısında keskin bir artışa yol açtı.",
        "Onun açıklaması, genetik test yaptıran kadınların sayısını azalttı.",
        "Genetik test yaptırmak isteyen kadınların sayısındaki artış, onun açıklamayı yapmasından yıllar önce başlamış ve uzmanları şaşırtmıştı.",
        "Kadınlar onun açıklamasını duymadı.",
        "Genetik testler yalnızca erkeklere yapıldı.",
      ],
      "'Her announcement led to a sharp increase' 'onun açıklaması keskin bir artışa yol açtı', 'in the number of women seeking genetic tests' 'genetik test yaptırmak isteyen kadınların sayısında' karşılığıdır.",
    ],
    [
      "The system tells couples whether they are a risky match without revealing their individual results.",
      [
        "Sistem, bireysel sonuçlarını açıklamadan çiftlere riskli bir eşleşme olup olmadıklarını bildirir.",
        "Sistem, çiftlerin bireysel sonuçlarını herkese açıklar.",
        "Riskli bir eşleşme olduklarını öğrenen çiftler, sistemin bireysel sonuçlarını gizlediği gerekçesiyle şikâyette bulunarak tüm bilgilerin açıklanmasını istedi.",
        "Sistem, çiftlerin evlenmesine karar verir.",
        "Çiftler, sistemin sonuçlarını kendileri hesaplar.",
      ],
      "'tells couples whether they are a risky match' 'çiftlere riskli bir eşleşme olup olmadıklarını bildirir', 'without revealing their individual results' 'bireysel sonuçlarını açıklamadan' karşılığıdır.",
    ],
    [
      "His immune system was unable to protect him against even mild infections.",
      [
        "Bağışıklık sistemi onu hafif enfeksiyonlara karşı bile koruyamıyordu.",
        "Bağışıklık sistemi onu tüm enfeksiyonlara karşı tamamen koruyordu.",
        "Hafif enfeksiyonlara karşı korunmak için bağışıklık sistemini güçlendiren ilaçlar alan çocuk, kısa süre içinde tamamen iyileşerek okula gitmeye başladı.",
        "Hafif enfeksiyonlar onun bağışıklık sistemini güçlendirdi.",
        "Hiç enfeksiyon geçirmedi.",
      ],
      "'His immune system was unable to protect him' 'bağışıklık sistemi onu koruyamıyordu', 'against even mild infections' 'hafif enfeksiyonlara karşı bile' karşılığıdır.",
    ],
    [
      "The tragedy led to stricter rules on the safety of gene therapy trials.",
      [
        "Trajedi, gen tedavisi denemelerinin güvenliğine ilişkin daha sıkı kurallara yol açtı.",
        "Trajedi, gen tedavisi denemelerine ilişkin kuralların gevşetilmesine yol açtı.",
        "Gen tedavisi denemelerinde daha sıkı kurallar uygulanmasına rağmen yaşanan trajedi, bilim insanlarını bu alandaki tüm araştırmaları durdurmaya zorladı.",
        "Gen tedavisi trajediyi önledi.",
        "Denemeler hiçbir kurala tabi değildi.",
      ],
      "'led to stricter rules' 'daha sıkı kurallara yol açtı', 'on the safety of gene therapy trials' 'gen tedavisi denemelerinin güvenliğine ilişkin' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Çarın oğlu küçük yaralanmalardan sonra bile ağır kanamalar geçiriyordu.",
      [
        "The tsar's son suffered severe bleeding even after minor injuries.",
        "The tsar's son never suffered from bleeding.",
        "The tsar's son suffered a serious injury in a fall, but the doctors were able to stop the bleeding quickly because they knew about his condition.",
        "The tsar suffered bleeding after his son's injury.",
        "Minor injuries cured the tsar's son.",
      ],
      "'küçük yaralanmalardan sonra bile' 'even after minor injuries', 'çarın oğlu ağır kanamalar geçiriyordu' 'the tsar's son suffered severe bleeding' karşılığıdır.",
    ],
    [
      "Adada her yedi kişiden biri taşıyıcıdır.",
      [
        "One in seven people on the island is a carrier.",
        "Seven people on the island are carriers.",
        "About one in seven people on the island was tested for the gene, but most of them refused to learn their results because they feared discrimination.",
        "Nobody on the island carries the gene.",
        "The island has seven carriers for each patient.",
      ],
      "'Adada her yedi kişiden biri' 'one in seven people on the island', 'taşıyıcıdır' 'is a carrier' karşılığıdır.",
    ],
    [
      "Oyuncu, meme kanseri riskini azaltmak için çift mastektomi geçirdi.",
      [
        "The actress underwent a double mastectomy to reduce her risk of breast cancer.",
        "The actress developed breast cancer after a double mastectomy.",
        "The actress was advised to undergo surgery to reduce her risk of breast cancer, but she decided to wait and have regular check-ups instead.",
        "The actress refused all medical tests.",
        "Breast cancer was cured by the actress.",
      ],
      "'meme kanseri riskini azaltmak için' 'to reduce her risk of breast cancer', 'çift mastektomi geçirdi' 'underwent a double mastectomy' karşılığıdır.",
    ],
    [
      "Topluluktaki hastalık oranları bu programdan sonra büyük ölçüde düştü.",
      [
        "Rates of the disease in the community fell greatly after this programme.",
        "Rates of the disease in the community rose after this programme.",
        "The community did not support this programme at first, because many members feared that it would make it more difficult for their children to find partners.",
        "The programme caused the disease.",
        "The community never had the disease.",
      ],
      "'Topluluktaki hastalık oranları' 'rates of the disease in the community', 'bu programdan sonra büyük ölçüde düştü' 'fell greatly after this programme' karşılığıdır.",
    ],
    [
      "Çocuk on iki yıl boyunca neredeyse tamamen steril bir ortamda yaşadı.",
      [
        "The boy lived for twelve years in an almost completely sterile environment.",
        "The boy lived for twelve years without any medical care.",
        "The boy was moved to a sterile environment at the age of twelve, after doctors discovered that he could not fight infections.",
        "The environment was sterilised by the boy.",
        "The boy lived for twelve days.",
      ],
      "'on iki yıl boyunca' 'for twelve years', 'neredeyse tamamen steril bir ortamda yaşadı' 'lived in an almost completely sterile environment' karşılığıdır.",
    ],
    [
      "Doktor, mavi renge neden olan enzim eksikliğini teşhis etti.",
      [
        "The doctor diagnosed the enzyme deficiency that caused the blue colour.",
        "The doctor's enzyme turned the patients blue.",
        "The doctor was unable to explain the blue colour of the family's skin and suggested that it might be caused by something in the water they drank.",
        "The blue colour cured the enzyme deficiency.",
        "The doctor painted the family blue.",
      ],
      "'mavi renge neden olan enzim eksikliğini' 'the enzyme deficiency that caused the blue colour', 'teşhis etti' 'diagnosed' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In May 2013, the American actress Angelina Jolie revealed in a newspaper article that she had undergone a double mastectomy, the surgical removal of both breasts, after tests showed that she carried a faulty version of the BRCA1 gene. Mutations in BRCA1 and a related gene, BRCA2, which were identified in the 1990s, greatly increase the risk of breast and ovarian cancer; Jolie's doctors estimated that her risk of developing breast cancer was eighty-seven per cent. Her mother had died of ovarian cancer at the age of fifty-six. Jolie wrote that she had decided to be open about her choice in order to encourage other women at risk to learn about their options. Her article attracted enormous attention, and studies later found that the number of women seeking BRCA testing increased sharply in many countries, a phenomenon some researchers called the 'Angelina effect'. Many experts welcomed the increased awareness, but others expressed concern. They pointed out that BRCA mutations are rare, accounting for only a small proportion of breast cancers, and that many women who sought tests had no family history suggesting a high risk. They also noted that preventive surgery is a major decision, and that alternatives such as regular screening exist. Two years later, Jolie announced that she had also had her ovaries removed.",
      questions: [
        [
          "According to the passage, Jolie decided to undergo surgery because ----.",
          [
            "tests showed she had a very high risk of breast cancer",
            "she had been diagnosed with breast cancer",
            "her doctors required it",
            "she had been advised to do so by a newspaper that had published an article about the gene",
            "her mother had breast cancer",
          ],
          "Metne göre testler kusurlu BRCA1 genini taşıdığını ve riskinin çok yüksek olduğunu gösterdi.",
        ],
        [
          "The 'Angelina effect' refers to ----.",
          [
            "a rise in demand for genetic testing",
            "a new type of surgery",
            "a decline in breast cancer",
            "a fall in the number of women who chose to have preventive operations after her article",
            "a mutation in the BRCA2 gene",
          ],
          "Pek çok ülkede BRCA testi yaptırmak isteyen kadınların sayısındaki keskin artışı ifade eder.",
        ],
        [
          "It can be understood from the passage that some experts were concerned that ----.",
          [
            "many women seeking tests were not at high risk",
            "BRCA mutations were very common",
            "screening was dangerous",
            "the article had discouraged women at high risk from talking to their doctors about the options",
            "surgery was always necessary",
          ],
          "Test isteyen pek çok kadının yüksek riski gösteren bir aile öyküsü yoktu.",
        ],
      ],
    },
    {
      text:
        "Tay-Sachs disease is a rare inherited disorder in which a missing enzyme allows a fatty substance to build up in the brain and nerves. Babies with the most common form appear normal at birth but begin to lose their abilities after a few months, and most die by the age of four or five. The disease is especially common among Ashkenazi Jews, about one in thirty of whom carries the gene. In the early 1980s, Rabbi Josef Ekstein of Brooklyn, New York, four of whose children had died of Tay-Sachs, founded an organisation called Dor Yeshorim to prevent the disease in Orthodox Jewish communities, where arranged marriages are common and abortion is generally not accepted. Young people are tested anonymously, usually while still at school, and receive an identification number rather than their results. When a match is being considered, the couple or their families can call the organisation with both numbers and are told only whether the pair is 'compatible'. If both are carriers, the match is usually not pursued. This approach avoids the stigma of being known as a carrier while preventing the birth of affected children. Combined with other screening programmes, it has helped to make Tay-Sachs extremely rare in these communities. Some observers, though, worry about privacy and about the influence of genetic information on personal relationships.",
      questions: [
        [
          "According to the passage, babies with the most common form of Tay-Sachs ----.",
          [
            "seem healthy at first but then decline",
            "show symptoms at birth",
            "usually live into adulthood",
            "can be cured if the missing enzyme is replaced during the first few months of life",
            "are found only in Brooklyn",
          ],
          "Metne göre doğumda normal görünürler ama birkaç ay sonra yeteneklerini yitirmeye başlarlar.",
        ],
        [
          "The system of identification numbers is designed to ----.",
          [
            "protect people from being labelled as carriers",
            "make testing more expensive",
            "allow couples to see their full results",
            "help the organisation to find suitable marriage partners for every young person in the community",
            "replace genetic testing",
          ],
          "Taşıyıcı olarak bilinmenin damgasından kaçınılmasını sağlar.",
        ],
        [
          "It can be inferred from the passage that the programme was shaped partly by ----.",
          [
            "the religious and cultural values of the community",
            "government laws",
            "medical schools",
            "the wishes of doctors working in hospitals outside the community who wanted to study the disease",
            "the costs of treatment",
          ],
          "Görücü usulü evliliklerin yaygın olması ve kürtajın kabul görmemesi programı biçimlendirdi.",
        ],
      ],
    },
    {
      text:
        "David Vetter was born in Houston, Texas, in 1971 with severe combined immunodeficiency, or SCID, an inherited condition in which the immune system does not work, so that even common infections can be fatal. His parents had already lost a son to the disease, and doctors had planned for David to receive a bone marrow transplant from his older sister if she proved to be a suitable donor. When tests showed that she was not a match, the doctors decided to keep him in a sterile environment until a cure could be found. Within seconds of birth, he was placed in a plastic isolator, and he spent all his remaining years inside a succession of sealed plastic chambers. Everything that entered, from food and water to toys and clothing, had to be sterilised. His parents and doctors could touch him only through special gloves built into the walls. NASA engineers later designed a special suit that allowed him to walk outside a few times. He became known in the media as 'the boy in the bubble'. In 1983, when he was twelve, doctors attempted a bone marrow transplant from his sister, using a new technique. Months later, he developed cancer caused by a virus that had been hidden in her marrow, and he died in February 1984. His case contributed greatly to research on the immune system, and today most children with SCID can be cured if they are diagnosed early.",
      questions: [
        [
          "According to the passage, David was kept in a sterile chamber because ----.",
          [
            "no suitable donor was available at birth",
            "his sister was ill",
            "he had cancer",
            "the doctors wanted to test whether NASA's equipment could be used to protect astronauts from infection",
            "his parents refused treatment",
          ],
          "Metne göre kız kardeşi uygun donör çıkmadığı için tedavi bulunana kadar steril ortamda tutuldu.",
        ],
        [
          "The special gloves built into the walls allowed ----.",
          [
            "contact without exposing him to germs",
            "David to leave the chamber",
            "doctors to perform surgery",
            "his sister to give him bone marrow without having to enter the chamber herself",
            "food to be sterilised",
          ],
          "Mikroplara maruz bırakmadan ona dokunulmasını sağlıyordu.",
        ],
        [
          "It can be understood from the passage that David's death was caused by ----.",
          [
            "a virus transferred in the transplant",
            "an infection from his toys",
            "a fault in the suit",
            "his decision to leave the chamber and walk outside without wearing the protective suit",
            "the sterile environment",
          ],
          "Kız kardeşinin iliğinde gizlenen bir virüsün neden olduğu kanser nedeniyle öldü.",
        ],
      ],
    },
    {
      text:
        "In September 1999, Jesse Gelsinger, an eighteen-year-old from Arizona, took part in a gene therapy trial at the University of Pennsylvania. He had a mild form of an inherited liver disorder, ornithine transcarbamylase deficiency, which prevents the body from breaking down ammonia properly. His condition was controlled by a strict diet and medication, and he volunteered for the trial, which was aimed at developing a treatment for babies with severe forms of the disease, hoping to help others. Researchers injected a large dose of a modified virus carrying a correct copy of the gene into his liver. Within hours, he developed a high fever, and his immune system reacted violently to the virus. His organs began to fail, and he died four days later. He was the first person known to have died as a direct result of gene therapy. Investigations by the US Food and Drug Administration found serious problems with the trial. Researchers had not reported that earlier volunteers had suffered side effects, and Gelsinger's ammonia levels before the treatment should have excluded him. It also emerged that the lead researcher and the university had financial interests in a company that stood to benefit from the research. The case led to stricter oversight of gene therapy trials and set back the whole field for years, although gene therapy has since achieved important successes.",
      questions: [
        [
          "According to the passage, Gelsinger volunteered for the trial because he ----.",
          [
            "wanted to help others with the disease",
            "needed urgent treatment",
            "was paid a large sum",
            "had been told that the trial would cure his own condition completely within a few weeks",
            "worked at the university",
          ],
          "Metne göre durumu kontrol altındaydı; başkalarına yardım etmek umuduyla gönüllü oldu.",
        ],
        [
          "It can be understood from the passage that Gelsinger's death was caused by ----.",
          [
            "a strong immune reaction to the virus used",
            "his liver disorder",
            "a mistake in his diet",
            "a different disease that he had caught from another patient during his stay in hospital",
            "an accident",
          ],
          "Bağışıklık sistemi virüse şiddetle tepki verdi ve organları iflas etti.",
        ],
        [
          "The investigation's findings suggest that ----.",
          [
            "the trial was poorly conducted and involved conflicts of interest",
            "the researchers had done nothing wrong",
            "gene therapy is always fatal",
            "Gelsinger had concealed information about his condition from the researchers before the trial",
            "the FDA approved the trial",
          ],
          "Önceki yan etkiler bildirilmemiş, uygunluk kuralları çiğnenmiş ve mali çıkar çatışmaları vardı.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, a French orphan named Martin Fugate settled in a remote area of eastern Kentucky and married a local woman, Elizabeth Smith. Of their seven children, four had a striking feature: their skin was blue. The family lived in an isolated region where few outsiders came, and over the following generations many of their descendants married relatives or neighbours who were also related to them. As a result, the trait continued to appear in the family for more than a century. In the early 1960s, a doctor named Madison Cawein, working at the University of Kentucky, heard about the 'blue Fugates' and decided to investigate. He found that they had an inherited condition called methaemoglobinaemia, in which an enzyme deficiency causes the blood to carry an abnormal form of haemoglobin that cannot transport oxygen effectively, giving the blood a brownish colour and the skin a bluish tint. The condition is recessive, which means that a child must inherit the faulty gene from both parents to be affected; the couple's isolation had made this more likely. Apart from their colour, the family members were mostly healthy. Cawein treated them with methylene blue, a dye that helps the body convert the abnormal haemoglobin back to its normal form, and within minutes their skin turned pink. As the region became less isolated, the condition became much rarer.",
      questions: [
        [
          "According to the passage, the trait persisted in the family partly because ----.",
          [
            "relatives often married each other",
            "the family moved frequently",
            "the condition was infectious",
            "the doctor who treated them had advised them to marry people from outside the region",
            "it was not inherited",
          ],
          "Metne göre ailenin torunlarının çoğu akrabalarıyla evlendi.",
        ],
        [
          "It can be understood from the passage that a recessive condition ----.",
          [
            "appears only if the gene is inherited from both parents",
            "affects everyone in a family",
            "is caused by diet",
            "can be passed on only by mothers to their daughters and never to their sons",
            "turns the skin pink",
          ],
          "Çocuğun etkilenmesi için kusurlu geni her iki ebeveynden de alması gerekir.",
        ],
        [
          "The passage suggests that the condition became rarer because ----.",
          [
            "the community became less isolated",
            "methylene blue cured the gene",
            "the family left Kentucky",
            "the doctor persuaded all members of the family to stop having children after the 1960s",
            "the enzyme became common",
          ],
          "Bölge daha az yalıtılmış hale geldikçe durum çok daha seyrekleşti.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Cystic fibrosis is an inherited disorder in which the lungs and gut become clogged with dense, sticky secretions. ---- The discovery made it possible to test for carriers and led eventually to drugs that target the faulty protein directly.",
      [
        "In 1989, a team led by Lap-Chee Tsui in Toronto and Francis Collins in Michigan identified the gene responsible.",
        "The lungs are essential for breathing.",
        "Mucus protects the airways.",
        "Children with the disease were once not expected to survive into adulthood, although with modern treatment many now live into their forties and beyond.",
        "Toronto is in Canada.",
      ],
      "Boşluktan sonra 'The discovery' ifadesi gelir; boşluğa 1989'da Tsui ve Collins liderliğindeki ekibin geni belirlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "For two centuries, members of the Habsburg family, who ruled Spain and Austria, frequently married close relatives in order to keep power within the family. ---- The last Habsburg king of Spain, Charles II, who died in 1700, suffered from many health problems and had no children.",
      [
        "Over generations, this led to a high level of inbreeding and the spread of inherited disorders, including a protruding lower jaw.",
        "Spain has a long history.",
        "Many kings married princesses.",
        "Portraits of the family were painted by some of the greatest artists of the time, including Titian and Velázquez, and many are now displayed in the Prado museum in Madrid.",
        "Austria is in central Europe.",
      ],
      "Boşluk akraba evliliklerinin sonucunu açıklayan bir cümle gerektirir; boşluğa bunun yüksek düzeyde akraba çiftleşmesine ve kalıtsal bozuklukların yayılmasına yol açtığını söyleyen cümle gelmelidir.",
    ],
    [
      "G6PD deficiency, an inherited condition affecting hundreds of millions of people, is especially common around the Mediterranean, in Africa and in Asia. ---- For this reason, the condition is sometimes called favism, from the Latin name for the broad bean.",
      [
        "In people with this condition, eating broad beans can trigger the sudden destruction of red blood cells.",
        "Broad beans are grown in many countries.",
        "Africa is a large continent.",
        "Certain medicines, including some drugs used to treat malaria, can also trigger attacks, so doctors in affected regions often test patients before prescribing them.",
        "Red blood cells carry oxygen.",
      ],
      "Boşluktan sonra 'For this reason' ile 'favizm' adı açıklanır; boşluğa bakla yemenin kırmızı kan hücrelerinin ani yıkımını tetikleyebildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Marfan syndrome is an inherited disorder of the body's connective tissue, the material that holds organs and tissues together. ---- The most serious risk is that the main artery leaving the heart may weaken and tear, but regular monitoring and surgery can prevent this.",
      [
        "People with the condition are often very tall and thin, with long arms, legs and fingers.",
        "Many basketball players are tall.",
        "Connective tissue is found everywhere.",
        "The condition was first described in 1896 by the French doctor Antoine Marfan, who examined a five-year-old girl with unusually long fingers and toes.",
        "The heart pumps blood.",
      ],
      "Boşluk sendromun görünür özelliklerini anlatan bir cümle gerektirir; boşluğa hastaların çoğu zaman çok uzun ve ince, uzun kollu ve parmaklı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Duchenne muscular dystrophy is an inherited disease in which the muscles gradually weaken and waste away. ---- Most boys with the disease need a wheelchair by their early teens.",
      [
        "Because the gene is on the X chromosome, it affects almost only boys, and symptoms usually appear in early childhood.",
        "Muscles allow movement.",
        "Many boys enjoy sports.",
        "The disease is named after the French neurologist Guillaume Duchenne, who also pioneered the use of electricity to stimulate muscles and took some of the earliest medical photographs.",
        "Wheelchairs come in many designs.",
      ],
      "Boşluktan sonra 'Most boys' ifadesiyle erkek çocuklar anlatılır; boşluğa genin X kromozomunda olduğu için neredeyse yalnızca erkekleri etkilediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Since the 2000s, companies have sold genetic tests directly to the public, who simply send a sample of saliva by post. ---- Doctors warn, however, that results suggesting a higher risk of a disease may be misunderstood or cause unnecessary anxiety.",
      [
        "Customers receive reports on their ancestry and, in some cases, on their genetic risk for certain diseases.",
        "Saliva contains enzymes.",
        "Many people send letters.",
        "Some customers have discovered unexpected relatives through these services, and police in the United States have used similar databases to identify suspects in old crimes.",
        "Post offices are found in every town.",
      ],
      "Boşluktan sonra 'results' ifadesi gelir; boşluğa müşterilerin soy ve bazı hastalıklara genetik risk raporları aldığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Some cats are born with extra toes, a condition known as polydactyly.",
        "The trait is caused by a dominant gene, so it is often passed on through generations.",
        "Cats were kept in ancient Egypt.",
        "The writer Ernest Hemingway owned a six-toed cat, and many of its descendants still live at his former home in Florida.",
        "The trait is usually harmless.",
      ],
      odd: 2,
      why: "Parça kedilerdeki fazla parmak özelliğini anlatır. Kedilerin eski Mısır'da beslendiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Red hair is caused mainly by variants of a gene called MC1R.",
        "A person must usually inherit the variant from both parents to have red hair.",
        "Scotland and Ireland have the highest proportions of red-haired people in the world.",
        "Hair grows about one centimetre a month.",
        "Research suggests that people with red hair may respond differently to some types of pain relief.",
      ],
      odd: 3,
      why: "Parça kızıl saçın genetiğini anlatır. Saçın ayda yaklaşık bir santimetre uzadığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Most mammals lose the ability to digest lactose, the sugar in milk, after they are weaned.",
        "In some human populations, however, a genetic change allows adults to keep digesting it.",
        "Cheese is made from milk.",
        "This change spread in regions where people had kept cattle for thousands of years.",
        "In other parts of the world, most adults cannot digest large amounts of milk.",
      ],
      odd: 2,
      why: "Parça yetişkinlerde laktoz sindirimini sağlayan genetik değişimi anlatır. Peynirin sütten yapıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Identical twins share almost all of their DNA.",
        "Scientists compare them with non-identical twins to estimate how much a trait is influenced by genes.",
        "Twins are more common in some countries than in others.",
        "If identical twins are more alike than non-identical twins, genes probably play a role.",
        "Such studies have been used to investigate conditions ranging from diabetes to depression.",
      ],
      odd: 2,
      why: "Parça ikiz çalışmalarının yöntemini anlatır. İkizlerin bazı ülkelerde daha yaygın olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A popular belief holds that attached earlobes are controlled by a single gene.",
        "Many school textbooks have used the trait as a simple example of inheritance.",
        "Earrings have been worn for thousands of years.",
        "Research has shown, however, that the shape of the earlobe is influenced by many genes.",
        "Scientists now consider it a poor example for teaching genetics.",
      ],
      odd: 2,
      why: "Parça kulak memesinin kalıtımıyla ilgili yanlış inancı anlatır. Küpelerin binlerce yıldır takıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Tongue rolling was once described in textbooks as a simple inherited trait.",
        "Spring is a busy season in many schools.",
        "Studies of identical twins, however, found that one twin could sometimes roll the tongue while the other could not.",
        "Some people also learn to do it with practice.",
        "Scientists now believe that both genes and environment play a part.",
      ],
      odd: 1,
      why: "Parça dil yuvarlamanın kalıtımıyla ilgili inancı anlatır. İlkbaharın pek çok okulda yoğun bir dönem olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
