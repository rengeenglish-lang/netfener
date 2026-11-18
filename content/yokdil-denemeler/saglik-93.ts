import type { YokdilDeneme } from "./types";

export const SAGLIK_93: YokdilDeneme = {
  no: 93,
  field: "saglik",
  vocab: [
    [
      "The watch ---- its owner when it detected an unusually irregular pulse.",
      ["alerted", "ignored", "punished", "cured", "copied"],
      "Saatin olağandışı düzensiz bir nabız algıladığında sahibini 'uyardığı' (alerted) anlatılır.",
    ],
    [
      "The attack forced hospitals to ---- thousands of appointments and operations.",
      ["cancel", "double", "advertise", "celebrate", "repeat"],
      "Saldırının hastaneleri binlerce randevuyu ve ameliyatı 'iptal etmeye' (cancel) zorladığı anlatılır.",
    ],
    [
      "Customers were worried about what would happen to their genetic data if the company were ----.",
      ["sold", "praised", "painted", "visited", "named"],
      "Müşterilerin şirket 'satılırsa' (sold) genetik verilerine ne olacağından kaygılandığı anlatılır.",
    ],
    [
      "Doctors had been unable to ---- the cause of the boy's illness for several years.",
      ["identify", "enjoy", "invent", "hide", "share"],
      "Doktorların çocuğun hastalığının nedenini birkaç yıl boyunca 'belirleyemediği' (identify) anlatılır.",
    ],
    [
      "The project aims to include people from groups that have been ---- in medical research.",
      ["underrepresented", "overpaid", "celebrated", "invented", "employed"],
      "Projenin tıbbi araştırmalarda 'yeterince temsil edilmemiş' (underrepresented) gruplardan insanları dâhil etmeyi amaçladığı anlatılır.",
    ],
    [
      "Parents must ---- whether they want their baby's genome to be read.",
      ["make up their minds", "look after", "put off", "take after", "run into"],
      "Ebeveynlerin bebeklerinin genomunun okunmasını isteyip istemediklerine 'karar vermesi' (make up their minds) gerektiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the study ended, more than four hundred thousand people ---- up to take part.",
      ["had signed", "sign", "will sign", "are signing", "have been signed"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had signed'.",
    ],
    [
      "If the hospitals had installed the update, the attack ---- so much damage.",
      ["might not have caused", "does not cause", "will not cause", "had not caused", "is not causing"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin ana yan cümlesi: 'might not have caused'.",
    ],
    [
      "The company ---- by regulators in 2013 to stop selling its health reports.",
      ["was ordered", "ordered", "has ordered", "orders", "is ordering"],
      "Şirkete emredilmiştir, emreden değildir; edilgen geçmiş zaman: 'was ordered'.",
    ],
    [
      "---- the boy had undergone more than a hundred operations, his doctors still did not know what was wrong.",
      ["Although", "Because", "Unless", "So that", "Until"],
      "Çocuğun yüzden fazla ameliyat geçirmesi ile doktorların sorunun ne olduğunu bilmemesi zıtlık bildirir: 'Although'.",
    ],
    [
      "The researcher, ---- discovery stopped the spread of the attack, was only twenty-two years old.",
      ["whose", "who", "which", "whom", "where"],
      "Araştırmacının buluşu; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the patch had been worn for several days ---- the doctors confirm the diagnosis.",
      ["could", "have", "were", "had", "do"],
      "'Only after' ile başlayan cümlede devrik yapı, kip yardımcı fiili: 'could'.",
    ],
    [
      "The hospital ---- the boy was treated had one of the first laboratories able to read whole exomes.",
      ["where", "which", "whose", "when", "what"],
      "'The hospital' yer bildirir ve ilgi cümlesinde yer zarfı görevi görür: 'where'.",
    ],
    [
      "The more people share their data, ---- the researchers can learn about rare diseases.",
      ["the more", "the most", "more", "most", "so"],
      "'The more ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Experts advised that customers ---- their data if they were worried about its security.",
      ["delete", "deletes", "deleted", "to delete", "deleting"],
      "'advise that' sonrasında yalın fiil (subjunctive) kullanılır: 'delete'.",
    ],
    [
      "The attackers are believed ---- a weakness in an older version of the operating system.",
      ["to have exploited", "exploiting", "to be exploited by", "exploited", "having exploit"],
      "Geçmişte gerçekleşen eylem için mastarın geçmiş biçimi kullanılır: 'to have exploited'.",
    ],
    [
      "The participants were sent a patch to wear on their chest ---- their heart rhythm could be recorded.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Katılımcılara göğüs bandı gönderilmesinin amacı kalp ritimlerinin kaydedilebilmesidir: 'so that'.",
    ],
    [
      "The doctors had the boy's DNA ---- by a team of geneticists.",
      ["analysed", "analyse", "analysing", "to analyse", "analyses"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'analysed'.",
    ],
    [
      "Had the customers used different passwords, the attackers ---- access to their accounts.",
      ["might not have gained", "have not gained", "will not gain", "had not gained", "do not gain"],
      "Devrik üçüncü tip koşul cümlesinin ana yan cümlesi: 'might not have gained'.",
    ],
    [
      "Neither the company nor its customers ---- aware of the attack until months later.",
      ["were", "was being", "to be", "has been", "be"],
      "'Neither ... nor' yapısında fiil yakındaki çoğul özneye (its customers) uyar: 'were'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 2018, the National Institutes of Health in the United States launched an ambitious research programme called All of Us. Its aim is to collect detailed health information from at least a million people living in the country, {1} researchers can use it to study how genes, environment and way of life together influence health and disease. Participants agree to share their medical records, give samples of blood and urine, answer questions about their lives and, in some cases, provide data from devices such as fitness trackers. A major goal of the programme is to correct a long-standing weakness of medical research. In the past, most large genetic studies have involved people of European descent, {2} discoveries based on them may not apply equally well to other populations. All of Us has therefore made special efforts to recruit people from groups that have been underrepresented in research, including African Americans, Hispanic Americans, people living in rural areas and people with low incomes, {3} by the early 2020s about half of its participants came from racial and ethnic minorities. The programme has already released the complete genetic sequences of hundreds of thousands of participants to approved researchers, {4} participants can choose to receive information about their own genetic ancestry and certain health risks. Some critics have questioned whether the programme can protect the privacy of so much sensitive information. Others point out that minority communities have historical reasons to distrust medical research, {5} building that trust will require continued effort and openness.",
      blanks: [
        [
          "(21) ----",
          ["so that", "unless", "although", "whereas", "as if"],
          "Bilgilerin toplanmasının amacı araştırmacıların genlerin, çevrenin ve yaşam biçiminin etkisini inceleyebilmesidir: 'so that'.",
        ],
        [
          "(22) ----",
          ["so", "but", "or", "although", "unless"],
          "Çalışmaların çoğunun Avrupa kökenli insanlarla yapılmasının sonucu bulguların diğer topluluklara aynı ölçüde uymayabilmesidir: 'so'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "until"],
          "Programın azınlıkları katmak için çaba göstermesi ve katılımcıların yarısının azınlıklardan gelmesi birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "so that"],
          "Programın genetik dizileri araştırmacılara açması ve katılımcıların kendi bilgilerini alabilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "although", "or", "until"],
          "Azınlıkların güvensizlik için tarihsel nedenleri olması ve güvenin sürekli çaba gerektirmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In 2024, the health service in England began a study in which parents of newborn babies were offered the chance to have their child's entire genome read. The Generation Study aims to sequence the genomes of a hundred thousand babies, {1} it looks for changes in around two hundred genes that are linked to rare conditions that begin in early childhood and can be treated or managed. Most of these conditions cannot be detected by the standard heel-prick blood test that is already carried out on every newborn baby, {2} some of them may not cause symptoms until serious damage has already been done. Supporters argue that identifying them early could allow children to receive treatment before they become ill, {3} it could spare families the long and painful search for a diagnosis that many parents of children with rare diseases experience. The study has also raised difficult questions. Some genetic changes are not always harmful, {4} a baby could be identified as being at risk of a condition that never develops, causing unnecessary anxiety. There are also concerns about how the genetic data will be stored and used in the future, particularly when the children reach adulthood and have not themselves given consent. For this reason, the researchers have stated that the information will be used only for the purposes that parents agree to, {5} the study will examine how families feel about the results and whether such testing should eventually be offered to all babies.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Çalışmanın yüz bin bebeğin genomunu dizilemeyi amaçlaması ve iki yüz kadar gendeki değişiklikleri araması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "unless", "although", "or", "so that"],
          "Bu hastalıkların topuk kanı testiyle saptanamaması ve bazılarının hasar oluşana kadar belirti vermemesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "until"],
          "Erken teşhisin tedaviye olanak vermesi ve ailelere uzun teşhis arayışını yaşatmaması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["so", "but", "or", "although", "unless"],
          "Bazı genetik değişikliklerin her zaman zararlı olmamasının sonucu hiç gelişmeyecek bir hastalık için risk saptanabilmesidir: 'so'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "although", "or", "until"],
          "Bilgilerin yalnızca ebeveynlerin onayladığı amaçlar için kullanılması ve çalışmanın ailelerin duygularını incelemesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although only a small fraction of the participants received a warning from their watches, ----.",
      [
        "about a third of those who wore a patch afterwards were found to have the condition",
        "watches tell the time",
        "the study was large",
        "hearts beat regularly",
        "all of them were found to be completely healthy when they were examined later",
      ],
      "'Although' zıtlık ister: katılımcıların yalnızca küçük bir bölümü saatten uyarı alsa da sonrasında bant takanların yaklaşık üçte birinde hastalık bulundu.",
    ],
    [
      "If a young researcher had not found a way of switching off the program, ----.",
      [
        "the attack might have spread even further",
        "computers use programs",
        "hospitals have computers",
        "the researcher was young",
        "the program would have been used to cure many patients",
      ],
      "Üçüncü tip koşul: genç bir araştırmacı programı kapatmanın bir yolunu bulmasaydı saldırı daha da yayılabilirdi.",
    ],
    [
      "----, the doctors decided to read the sequence of all the genes that produce proteins.",
      [
        "Having failed to find a diagnosis with other tests",
        "Because the boy was young",
        "Unless the parents agreed",
        "In spite of being genes",
        "Since they already knew exactly which gene was faulty",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: diğer testlerle teşhis koyamayan doktorlar protein üreten tüm genlerin dizisini okumaya karar verdi.",
    ],
    [
      "Because many customers had used the same password on other websites, ----.",
      [
        "the attackers were able to enter their accounts easily",
        "passwords are secret",
        "websites are popular",
        "the company was large",
        "the company's data remained completely safe from the attackers",
      ],
      "Neden-sonuç: pek çok müşteri aynı şifreyi başka sitelerde de kullandığı için saldırganlar hesaplarına kolayca girebildi.",
    ],
    [
      "Some parents of children undergoing fertility treatment pay for extra tests ----.",
      [
        "so that they can choose embryos with lower predicted risks of certain diseases",
        "because embryos are small",
        "although tests are expensive",
        "unless doctors refuse",
        "since the tests are required by law in every country",
      ],
      "Amaç bildiren yapı: tüp bebek tedavisi gören bazı ebeveynler belirli hastalıklar için tahmini riski daha düşük embriyoları seçebilmek amacıyla ek testler yaptırır.",
    ],
    [
      "The attack spread rapidly through the health service, ----.",
      [
        "where many computers were still using an outdated operating system",
        "which is large",
        "that the attack",
        "whose doctors",
        "when computers had not yet been introduced into hospitals",
      ],
      "Yer bildiren ilgi cümlesi: saldırı, pek çok bilgisayarın hâlâ eski bir işletim sistemi kullandığı sağlık hizmeti içinde hızla yayıldı.",
    ],
    [
      "Unlike the standard heel-prick test, which detects only a small number of conditions, ----.",
      [
        "reading the whole genome can reveal hundreds of rare disorders",
        "babies are born in hospitals",
        "the heel is part of the foot",
        "blood is red",
        "reading the whole genome can detect no conditions at all",
      ],
      "'Unlike' karşıtlık kurar: yalnızca az sayıda hastalığı saptayan standart topuk testinin aksine tüm genomu okumak yüzlerce nadir bozukluğu ortaya çıkarabilir.",
    ],
    [
      "Many scientists are critical of the embryo tests ----.",
      [
        "because the predicted benefits are small and uncertain",
        "although embryos are tiny",
        "so that more parents use them",
        "unless they are free",
        "since the tests have been proven to guarantee perfectly healthy children",
      ],
      "Neden bildiren yapı: pek çok bilim insanı embriyo testlerini, öngörülen yararlar küçük ve belirsiz olduğu için eleştirir.",
    ],
    [
      "No sooner had the company announced that it was bankrupt ----.",
      [
        "than many customers rushed to delete their data",
        "when the customers",
        "that the data was",
        "before the announcement",
        "than its customers sent it even more samples of their saliva",
      ],
      "'No sooner ... than' yapısı: şirket iflas ettiğini açıklar açıklamaz pek çok müşteri verilerini silmek için harekete geçti.",
    ],
    [
      "While watches can detect irregular heart rhythms, ----.",
      [
        "they may also cause anxiety and unnecessary tests in healthy people",
        "hearts are muscles",
        "watches are worn on the wrist",
        "doctors use machines",
        "they cannot be worn by people who have any heart condition",
      ],
      "'While' zıtlık bildirir: saatler düzensiz kalp ritimlerini saptayabilse de sağlıklı insanlarda kaygıya ve gereksiz testlere de yol açabilir.",
    ],
    [
      "The boy's illness was so unusual ----.",
      [
        "that his doctors decided to try a method that had rarely been used before",
        "because the boy",
        "than the doctors",
        "although his parents",
        "so that his doctors decided to stop looking for its cause",
      ],
      "'so ... that' sonuç yapısı: çocuğun hastalığı o kadar olağandışıydı ki doktorları daha önce nadiren kullanılmış bir yöntemi denemeye karar verdi.",
    ],
  ],
  enTr: [
    [
      "The condition increases the risk of stroke, but many people who have it experience no symptoms.",
      [
        "Hastalık felç riskini artırır, ancak ona sahip pek çok kişi hiçbir belirti yaşamaz.",
        "Hastalık felç riskini azaltır ve ona sahip herkes belirti yaşar.",
        "Felç, hastalığın belirtilerini artırır.",
        "Hastalığın hiçbir riski yoktur.",
        "Hastalık yalnızca belirti gösteren kişilerde felç riskini artırır ve diğerlerini hiç etkilemez.",
      ],
      "'The condition increases the risk of stroke' 'hastalık felç riskini artırır', 'but many people who have it experience no symptoms' 'ancak ona sahip pek çok kişi hiçbir belirti yaşamaz' karşılığıdır.",
    ],
    [
      "The program encrypted the files on infected computers and demanded a payment to unlock them.",
      [
        "Program, virüs bulaşan bilgisayarlardaki dosyaları şifreledi ve onları açmak için ödeme talep etti.",
        "Program, virüs bulaşan bilgisayarlardaki dosyaları ücretsiz olarak açtı.",
        "Ödeme, bilgisayarlardaki dosyaları şifreledi.",
        "Program hiçbir dosyaya dokunmadı.",
        "Program, virüs bulaşan bilgisayarlardaki dosyaları sildi ve hiçbir ödeme talep etmedi.",
      ],
      "'The program encrypted the files on infected computers' 'program virüs bulaşan bilgisayarlardaki dosyaları şifreledi', 'and demanded a payment to unlock them' 've onları açmak için ödeme talep etti' karşılığıdır.",
    ],
    [
      "Through a feature that connected relatives, the attackers obtained information about millions of other customers.",
      [
        "Akrabaları birbirine bağlayan bir özellik aracılığıyla saldırganlar milyonlarca başka müşteri hakkında bilgi elde etti.",
        "Saldırganlar akrabalarını bulmak için şirketin müşterisi oldu.",
        "Milyonlarca müşteri saldırganlar hakkında bilgi elde etti.",
        "Saldırganlar hiçbir bilgi elde edemedi.",
        "Akrabaları birbirine bağlayan özellik, saldırganların herhangi bir bilgiye ulaşmasını tamamen engelledi.",
      ],
      "'Through a feature that connected relatives' 'akrabaları birbirine bağlayan bir özellik aracılığıyla', 'the attackers obtained information about millions of other customers' 'saldırganlar milyonlarca başka müşteri hakkında bilgi elde etti' karşılığıdır.",
    ],
    [
      "The genetic test revealed a mutation in a gene with no previously known connection to bowel disease.",
      [
        "Genetik test, daha önce hiç bağırsak hastalığıyla ilişkilendirilmemiş bir gende mutasyon ortaya çıkardı.",
        "Genetik test, bağırsak hastalığının genlerle ilgisi olmadığını gösterdi.",
        "Bir mutasyon genetik testi ortaya çıkardı.",
        "Genetik test hiçbir şey bulamadı.",
        "Genetik test, bağırsak hastalığına neden olduğu uzun zamandır bilinen bir gende mutasyon buldu.",
      ],
      "'The genetic test revealed a mutation in a gene' 'genetik test bir gende mutasyon ortaya çıkardı', 'with no previously known connection to bowel disease' 'daha önce bağırsak hastalığıyla bilinen bir bağlantısı olmayan' karşılığıdır.",
    ],
    [
      "Most of the scores have been developed using data from people of European descent.",
      [
        "Puanların çoğu Avrupa kökenli insanlardan elde edilen veriler kullanılarak geliştirilmiştir.",
        "Puanların hiçbiri Avrupa kökenli insanlarla ilgili değildir.",
        "Avrupa kökenli insanlar puanları geliştirmiştir.",
        "Hiç puan geliştirilmemiştir.",
        "Puanlar dünyanın her bölgesinden eşit sayıda insandan elde edilen verilerle geliştirilmiştir.",
      ],
      "'Most of the scores have been developed' 'puanların çoğu geliştirilmiştir', 'using data from people of European descent' 'Avrupa kökenli insanlardan elde edilen veriler kullanılarak' karşılığıdır.",
    ],
    [
      "Parents will be told only about conditions that can be treated in early childhood.",
      [
        "Ebeveynlere yalnızca erken çocuklukta tedavi edilebilen hastalıklar hakkında bilgi verilecektir.",
        "Ebeveynlere tedavi edilemeyen bütün hastalıklar hakkında bilgi verilecektir.",
        "Hastalıklar ebeveynlere erken çocuklukta tedavi edilecektir.",
        "Ebeveynlere hiçbir bilgi verilmeyecektir.",
        "Ebeveynlere yalnızca yetişkinlikte ortaya çıkan ve tedavisi olmayan hastalıklar hakkında bilgi verilecektir.",
      ],
      "'Parents will be told only about conditions' 'ebeveynlere yalnızca hastalıklar hakkında bilgi verilecektir', 'that can be treated in early childhood' 'erken çocuklukta tedavi edilebilen' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Uygulama, düzensiz nabzı olan kişileri uyardı.",
      [
        "The app warned people who had an irregular pulse.",
        "The app ignored people who had an irregular pulse.",
        "People with an irregular pulse warned the app.",
        "The app could not measure the pulse.",
        "The app warned everyone, whether or not they had an irregular pulse.",
      ],
      "'Uygulama uyardı' 'the app warned', 'düzensiz nabzı olan kişileri' 'people who had an irregular pulse' karşılığıdır.",
    ],
    [
      "Saldırı yüzlerce ülkedeki bilgisayarları etkiledi.",
      [
        "The attack affected computers in hundreds of countries.",
        "The attack affected computers in a single country.",
        "Hundreds of countries attacked the computers.",
        "No computers were affected.",
        "The attack affected only computers that were not connected to the internet.",
      ],
      "'Saldırı etkiledi' 'the attack affected', 'yüzlerce ülkedeki bilgisayarları' 'computers in hundreds of countries' karşılığıdır.",
    ],
    [
      "Şirket, müşterilerinin verilerini ilaç şirketleriyle paylaştı.",
      [
        "The company shared its customers' data with drug companies.",
        "Drug companies shared their data with the company's customers.",
        "The company refused to share any data.",
        "The company had no customers.",
        "The company deleted all of its customers' data and closed its laboratories.",
      ],
      "'Şirket paylaştı' 'the company shared', 'müşterilerinin verilerini ilaç şirketleriyle' 'its customers' data with drug companies' karşılığıdır.",
    ],
    [
      "Çocuk göbek kordonu kanından kök hücre nakli aldı.",
      [
        "The boy received a stem cell transplant from umbilical cord blood.",
        "The boy donated his umbilical cord blood to another patient.",
        "Umbilical cord blood received the boy.",
        "The boy never received any treatment.",
        "The boy received a heart transplant from a donor in another country.",
      ],
      "'Çocuk kök hücre nakli aldı' 'the boy received a stem cell transplant', 'göbek kordonu kanından' 'from umbilical cord blood' karşılığıdır.",
    ],
    [
      "Katılımcıların yarısı azınlık gruplarından geliyordu.",
      [
        "Half of the participants came from minority groups.",
        "None of the participants came from minority groups.",
        "Minority groups came from half of the participants.",
        "There were no participants.",
        "All of the participants came from a single small town.",
      ],
      "'Katılımcıların yarısı geliyordu' 'half of the participants came', 'azınlık gruplarından' 'from minority groups' karşılığıdır.",
    ],
    [
      "Bazı genetik değişiklikler hiçbir zaman hastalığa yol açmaz.",
      [
        "Some genetic changes never lead to disease.",
        "All genetic changes always lead to disease.",
        "Disease never leads to genetic changes.",
        "There are no genetic changes.",
        "Every genetic change causes a serious disease within a few weeks of birth.",
      ],
      "'Bazı genetik değişiklikler' 'some genetic changes', 'hiçbir zaman hastalığa yol açmaz' 'never lead to disease' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Atrial fibrillation is a disorder of the heart's rhythm in which the upper chambers of the heart beat irregularly. It is common among older people and greatly increases the risk of stroke, since blood can collect and form clots inside the heart. Yet many people who have the condition experience no symptoms and are unaware of it until they suffer a stroke. In 2017, researchers at a university in California, working with a technology company, launched a study to find out whether smartwatches could help to detect the disorder. People in the United States who owned the company's watch could take part simply by downloading an application, and within eight months more than four hundred thousand people had signed up. The watch's sensor measured the wearer's pulse, and if it repeatedly detected an irregular pattern, the application sent a notification. About half of one per cent of the participants received such a warning. They were then offered a consultation with a doctor by video and were sent a patch to wear on their chest for a week, which recorded the electrical activity of their heart. Among those who wore the patch, about a third were found to have atrial fibrillation, and among those whose watch detected an irregular pulse while they were wearing the patch, most were confirmed to have the condition. The researchers concluded that the technology could identify people who might benefit from further tests. Some doctors, however, raised concerns. Most participants were young and healthy, and the disorder is rare among such people, so that warnings in this group are more likely to be false alarms. They also warned that notifications could cause anxiety and lead to unnecessary and costly tests, and that the study had not shown whether early detection actually prevents strokes.",
      questions: [
        [
          "According to the passage, atrial fibrillation is dangerous mainly because ----.",
          [
            "it allows clots to form in the heart, increasing the risk of stroke",
            "it always causes severe pain",
            "it affects only young people",
            "it stops the heart completely",
            "it can be detected only by smartwatches and never by ordinary medical tests",
          ],
          "Kan kalbin içinde toplanıp pıhtı oluşturabildiğinden felç riski büyük ölçüde artar.",
        ],
        [
          "The passage states that participants who received a warning ----.",
          [
            "were offered a video consultation and a patch to record their heart activity",
            "were immediately given medicine",
            "had to stop wearing their watches",
            "were admitted to hospital",
            "were asked to pay for all further tests and consultations themselves",
          ],
          "Uyarı alanlara görüntülü doktor görüşmesi sunuldu ve kalp etkinliğini kaydeden bir göğüs bandı gönderildi.",
        ],
        [
          "It can be inferred from the passage that warnings among young, healthy participants ----.",
          [
            "were more likely to be mistaken",
            "were always correct",
            "prevented many strokes",
            "were never sent",
            "were the main purpose of the study",
          ],
          "Bu hastalık genç ve sağlıklı insanlarda nadir olduğundan bu gruptaki uyarıların yanlış alarm olma olasılığı daha yüksektir.",
        ],
      ],
    },
    {
      text:
        "On 12 May 2017, a malicious computer program began spreading rapidly around the world. Known as WannaCry, it encrypted the files on infected computers so that they could no longer be opened and displayed a message demanding a payment in digital currency to unlock them. Within a day, it had infected hundreds of thousands of computers in about a hundred and fifty countries, affecting companies, government agencies and universities. One of the organisations most seriously affected was the National Health Service in England. Around a third of its hospital trusts and hundreds of family doctors' practices were hit. Computers used to book appointments, view test results and operate some medical equipment stopped working, and staff had to return to pen and paper. Some hospitals diverted ambulances to other hospitals, and about nineteen thousand appointments and operations were cancelled. The program exploited a weakness in older versions of a widely used operating system. The software company had released an update that fixed the weakness two months earlier, but many organisations, including parts of the health service, had not installed it, and some were still using a version of the system that was no longer supported. The spread of the program was halted, largely by chance, by a twenty-two-year-old British security researcher. While examining its code, he noticed that it tried to contact an internet address that did not exist, and he registered the address himself. This turned out to act as a switch that stopped the program from spreading further. An official investigation later concluded that the health service had not been sufficiently prepared, although it found no evidence that any patient data had been stolen. The governments of the United States and Britain later blamed hackers working for North Korea.",
      questions: [
        [
          "According to the passage, the program caused problems by ----.",
          [
            "making files impossible to open unless a payment was made",
            "stealing patient data",
            "destroying hospital buildings",
            "changing the results of medical tests",
            "sending false messages to patients about their appointments and test results",
          ],
          "Program dosyaları şifreleyerek açılamaz hâle getirdi ve açmak için ödeme talep etti.",
        ],
        [
          "The passage states that many organisations were vulnerable because ----.",
          [
            "they had not installed an update that fixed the weakness",
            "they had paid the attackers",
            "they used too many computers",
            "their staff used pen and paper",
            "the software company had refused to help them or to release any kind of update",
          ],
          "Yazılım şirketi açığı kapatan güncellemeyi iki ay önce yayımlamıştı, ancak pek çok kuruluş onu yüklememişti.",
        ],
        [
          "It can be inferred from the passage that the researcher's action stopped the attack ----.",
          [
            "partly by accident, by registering an address the program depended on",
            "after months of careful planning",
            "by paying the attackers",
            "by switching off all the computers in Britain",
            "with the help of officials working for the North Korean government",
          ],
          "Araştırmacı kodda var olmayan bir adresi fark edip kaydetti; bu adres programın yayılmasını durduran bir anahtar işlevi gördü.",
        ],
      ],
    },
    {
      text:
        "Founded in California in 2006, the company 23andMe became one of the best-known providers of genetic tests sold directly to the public. Customers sent the company a sample of their saliva and received information about their ancestry, their likely physical traits and, in some cases, their genetic risk of certain diseases. In 2013, the American regulators ordered the company to stop selling health reports because it had not shown that they were accurate, but it later received permission to provide some reports, such as those concerning certain genes linked to breast cancer and to Alzheimer's disease. With the consent of customers, the company also used its enormous collection of genetic data for research, and it formed partnerships with drug companies, which saw the data as a valuable resource for developing new medicines. In 2023, the company revealed that hackers had gained access to the accounts of about fourteen thousand customers, mainly by using passwords that the customers had also used on other websites. Through a feature that allowed customers to find and contact genetic relatives, the attackers were then able to obtain information about nearly seven million other people, including their names and ancestry. The company faced lawsuits and its value fell sharply. In 2025, after years of financial losses, it filed for bankruptcy, and it announced that it would look for a buyer. Many customers and politicians were alarmed by the possibility that the genetic data of millions of people might pass to an unknown company. Several officials advised customers to delete their data, and hundreds of thousands did so. The case highlighted a problem that experts had long warned about: genetic data cannot be changed like a password, and it reveals information not only about individuals but also about their relatives.",
      questions: [
        [
          "According to the passage, in 2013 the regulators ordered the company to stop selling health reports because ----.",
          [
            "it had not demonstrated that the reports were accurate",
            "the reports were too expensive",
            "the company had been hacked",
            "drug companies had complained",
            "customers had stopped sending saliva samples to the company's laboratories",
          ],
          "Düzenleyiciler şirketin raporların doğruluğunu göstermediği için satışı durdurmasını istedi.",
        ],
        [
          "The passage states that the attackers obtained information about millions of people by ----.",
          [
            "using a feature that connected customers with their relatives",
            "breaking into the company's laboratory",
            "buying the data from drug companies",
            "stealing saliva samples",
            "guessing the passwords of every single one of the company's customers",
          ],
          "Saldırganlar akrabaları bulmaya yarayan özellik aracılığıyla yaklaşık yedi milyon kişinin bilgisine ulaştı.",
        ],
        [
          "According to the closing sentence, genetic data is especially sensitive because ----.",
          [
            "it cannot be replaced once it has been exposed and it concerns family members too",
            "it is easy to change",
            "it reveals nothing about relatives",
            "it is stored only on paper",
            "it is worthless to drug companies and to researchers who study disease",
          ],
          "Genetik veri bir şifre gibi değiştirilemez ve yalnızca bireyler hakkında değil akrabaları hakkında da bilgi verir.",
        ],
      ],
    },
    {
      text:
        "Nicholas Volker, a boy from the US state of Wisconsin, began to suffer from a mysterious illness when he was two years old. Painful holes formed in his intestines, allowing their contents to leak into his body, and he developed severe infections. Over the next few years he underwent more than a hundred operations, and he spent long periods in hospital, unable to eat normally. His doctors suspected an unusual form of inflammatory bowel disease, but none of the tests they carried out revealed the cause, and none of the treatments they tried brought lasting improvement. In 2009, doctors at a medical college in Wisconsin decided to try a new approach. Instead of testing particular genes one at a time, they would read the sequence of almost all of the boy's genes that contain instructions for making proteins, known together as the exome. At the time this was expensive and had rarely been done to diagnose a patient. The analysis revealed thousands of genetic differences, most of them harmless, but the researchers eventually identified a mutation in a gene called XIAP, which had never been linked to bowel disease but was known to cause a rare disorder of the immune system. This suggested that the problem lay in Nicholas's immune system rather than in his intestines. On the basis of this diagnosis, his doctors recommended a transplant of stem cells from umbilical cord blood donated by another family, which would give him a new immune system. In 2010 he received the transplant, and his condition improved dramatically. The case was widely reported as one of the first in which reading a patient's exome had led directly to a change in treatment, and it encouraged the use of such methods to diagnose children with unexplained diseases.",
      questions: [
        [
          "According to the passage, the doctors decided to read the boy's exome because ----.",
          [
            "other tests and treatments had failed to explain or cure his illness",
            "it was a cheap and routine test",
            "his parents were geneticists",
            "the boy had a known genetic disease",
            "it was required by law before any operation on a child could be carried out",
          ],
          "Yapılan testler nedeni ortaya koyamamış, denenen tedaviler de kalıcı iyileşme sağlamamıştı.",
        ],
        [
          "The passage states that the mutation found by the researchers ----.",
          [
            "was in a gene known to cause an immune disorder",
            "was in a gene already linked to bowel disease",
            "was harmless",
            "affected only his intestines",
            "had been inherited from a donor",
          ],
          "Mutasyon bağırsak hastalığıyla değil nadir bir bağışıklık sistemi bozukluğuyla ilişkili bir gendeydi.",
        ],
        [
          "It can be inferred from the passage that the stem cell transplant was chosen because ----.",
          [
            "the diagnosis showed that the boy's illness came from his immune system",
            "it was the cheapest treatment",
            "it would repair the holes in his intestines directly",
            "his doctors had tried it before",
            "the donor family insisted on it as a condition of giving the cord blood",
          ],
          "Teşhis sorunun bağırsaklarında değil bağışıklık sisteminde olduğunu gösterdi; nakil ona yeni bir bağışıklık sistemi sağlayacaktı.",
        ],
      ],
    },
    {
      text:
        "Couples who undergo fertility treatment often produce several embryos, and for many years doctors have been able to test them for genetic disorders caused by a single faulty gene, such as cystic fibrosis, so that parents can choose an embryo that is not affected. More recently, a few companies have begun to offer a different kind of test. Using statistical models called polygenic scores, which combine the small effects of thousands of genetic variants, they estimate each embryo's risk of developing common conditions in later life, such as heart disease, diabetes or certain cancers, and in some cases they even estimate characteristics such as height. The first child known to have been born after such screening was born in 2020. Supporters argue that parents should be free to use the available information to give their children the best possible chance of good health. Many scientists and medical organisations, however, have criticised the tests. They point out that polygenic scores predict an individual's risk only very weakly, since common diseases are strongly influenced by environment and way of life as well as by genes. Because a couple usually has only a few embryos to choose from, the expected reduction in risk is generally small. Most scores have also been developed using data from people of European descent, so they are even less accurate for people of other origins. In addition, a variant that lowers the risk of one disease may raise the risk of another, so that choosing an embryo on the basis of one score may have unexpected effects. Some critics are also concerned that the tests could encourage the idea that children should be selected for desirable traits, and they call for clear rules on how such tests may be used.",
      questions: [
        [
          "According to the passage, polygenic scores ----.",
          [
            "combine the small effects of many genetic variants to estimate risk",
            "detect disorders caused by a single faulty gene",
            "guarantee that a child will be healthy",
            "are equally accurate for all populations",
            "have been used by doctors for many decades to choose embryos",
          ],
          "Poligenik puanlar binlerce genetik varyantın küçük etkilerini birleştirerek riski tahmin eden istatistiksel modellerdir.",
        ],
        [
          "The passage states that the expected benefit of the tests is usually small partly because ----.",
          [
            "couples generally have only a few embryos to choose from",
            "the tests are very expensive",
            "embryos cannot be tested",
            "common diseases are caused only by genes",
            "doctors in most countries refuse to perform them on any embryos",
          ],
          "Çiftlerin genellikle seçebilecekleri yalnızca birkaç embriyosu olduğundan riskteki beklenen azalma küçüktür.",
        ],
        [
          "It can be inferred from the passage that choosing an embryo on the basis of one score ----.",
          [
            "might accidentally increase the risk of a different disease",
            "always reduces the risk of every disease",
            "has no effect on any characteristic",
            "is required by law",
            "makes the embryo grow faster and develop into a taller adult",
          ],
          "Bir hastalığın riskini azaltan varyant başka bir hastalığın riskini artırabileceğinden beklenmedik etkiler olabilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 2008, a technology company launched a service that estimated the level of influenza in different regions by analysing what people were searching for on the internet. ---- In 2013, however, it greatly overestimated the number of cases, and the service was later abandoned.",
      [
        "At first, its estimates appeared to match official figures closely and were available much more quickly.",
        "Influenza spreads in winter.",
        "Many people use the internet.",
        "The service was based on the idea that people who feel ill often search for information about their symptoms before seeing a doctor.",
        "Search engines are free to use.",
      ],
      "Boşluk 'however' ile başarısızlığa bağlanacak olumlu bir başlangıç gerektirir; boşluğa tahminlerin ilk başta resmî rakamlarla uyuştuğunu ve çok daha hızlı elde edildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "During the COVID-19 pandemic, many governments launched smartphone applications to warn people who had been close to someone with the infection. ---- As a result, their effectiveness varied greatly from one country to another.",
      [
        "The applications worked well only if a large proportion of the population downloaded them and reported positive tests.",
        "Smartphones are used by many people.",
        "The pandemic began in 2019.",
        "Some of the applications used signals between nearby phones rather than recording people's locations, in order to protect privacy.",
        "Governments make many decisions.",
      ],
      "Boşluk 'as a result' ile etkinliğin farklılık göstermesine bağlanacak bir koşul gerektirir; boşluğa uygulamaların ancak nüfusun büyük kısmı onları indirip pozitif testleri bildirdiğinde iyi çalıştığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2017, the British data protection authority ruled that a London hospital had broken the law when it shared the records of about one and a half million patients with a technology company. ---- The authority found that patients had not been properly informed that their data would be used in this way.",
      [
        "The data had been used to test an application designed to alert doctors to patients at risk of kidney failure.",
        "London has many hospitals.",
        "Data can be stored on computers.",
        "The hospital agreed to change the way it handled patient data in the future, and it published details of its new agreement with the company.",
        "Kidneys filter the blood.",
      ],
      "Boşluk verilerin hangi amaçla kullanıldığını açıklayıp kurumun bulgusuna bağlanan bir cümle gerektirir; boşluğa verilerin böbrek yetmezliği riski taşıyan hastalar için doktorları uyaran bir uygulamayı test etmekte kullanıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "For many years, people with diabetes had to prick their fingers several times a day to measure the sugar in their blood. ---- They have made it much easier for patients to control their condition and to notice dangerous falls in blood sugar during the night.",
      [
        "Today many use small sensors attached to the skin, which measure sugar levels continuously and send the results to a phone.",
        "Diabetes is a common disease.",
        "Sugar is found in many foods.",
        "The sensors usually need to be replaced every one or two weeks, which makes them more expensive than traditional tests.",
        "Blood is carried by vessels.",
      ],
      "Boşluk 'They' zamirinin gönderme yapacağı cihazları tanıtan bir cümle gerektirir; boşluğa birçok hastanın artık şeker düzeyini sürekli ölçüp telefona gönderen deriye takılı sensörler kullandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Many websites and applications now allow people to enter their symptoms and receive advice about what might be wrong. ---- Doctors therefore advise that such tools should not replace professional medical advice.",
      [
        "Studies have found, however, that they often fail to suggest the correct diagnosis and sometimes give unnecessarily cautious advice.",
        "People often search for health information.",
        "Applications are installed on phones.",
        "Some of them are now based on artificial intelligence systems that can hold long conversations with users about their health problems.",
        "Symptoms vary between diseases.",
      ],
      "Boşluk 'therefore' ile doktorların uyarısına bağlanacak bir olumsuzluk gerektirir; boşluğa araştırmaların bu araçların çoğu zaman doğru teşhisi öneremediğini gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In Estonia, almost all prescriptions are issued electronically, and patients can collect their medicines from any pharmacy simply by showing an identity card. ---- Patients can also see online which doctors have viewed their records.",
      [
        "The country introduced a national system of electronic health records in the late 2000s, which allows doctors to see a patient's history wherever they are treated.",
        "Estonia is a small country on the Baltic Sea.",
        "Pharmacies sell medicines.",
        "The country is also known for having developed one of the first national systems allowing its citizens to vote in elections over the internet from their homes.",
        "Identity cards contain photographs.",
      ],
      "Boşluk elektronik reçete ile kayıtların çevrimiçi görülebilmesini birbirine bağlayan bir sistem açıklaması gerektirir; boşluğa ülkenin 2000'lerin sonunda ulusal bir elektronik sağlık kaydı sistemi kurduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Each year, millions of people travel to other countries for medical treatment.",
        "Many come from wealthy countries in search of cheaper operations or shorter waiting times.",
        "Thailand is famous for its beaches.",
        "Popular destinations include India, Thailand, Mexico and Turkey.",
        "Doctors warn that complications can be difficult to treat once patients return home.",
      ],
      odd: 2,
      why: "Parça tedavi için yurt dışına gidilmesini, yani sağlık turizmini anlatır. Tayland'ın plajlarıyla ünlü olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2010, a project in the United States began allowing patients to read the notes doctors wrote about them.",
        "Doctors often have very busy schedules.",
        "Many doctors feared that patients would be confused or offended.",
        "In fact, most patients said that reading the notes helped them understand and follow their treatment.",
        "Few doctors reported that the change increased their workload.",
      ],
      odd: 1,
      why: "Parça hastaların doktor notlarını okuyabilmesini sağlayan projeyi anlatır. Doktorların çok yoğun programları olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some people who use devices to track their sleep become anxious about getting a perfect score.",
        "Doctors have called this problem 'orthosomnia'.",
        "The worry itself can make it harder for them to fall asleep.",
        "Sleep trackers are often less accurate than people believe.",
        "Many animals sleep during the day.",
      ],
      odd: 4,
      why: "Parça uyku takip cihazlarının yol açtığı mükemmel uyku kaygısını anlatır. Pek çok hayvanın gündüz uyuduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2017, American regulators warned that some pacemakers could be vulnerable to hacking.",
        "In theory, an attacker could change the device's settings or drain its battery.",
        "Batteries are used in many devices.",
        "Hundreds of thousands of patients were advised to have the device's software updated at their next appointment.",
        "No attacks on patients were reported.",
      ],
      odd: 2,
      why: "Parça bazı kalp pillerinin bilgisayar saldırılarına açık olabileceğini anlatır. Pillerin pek çok cihazda kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some smartwatches can detect when their wearer has had a hard fall.",
        "If the wearer does not respond to an alert, the watch can call the emergency services automatically.",
        "The feature has been credited with saving the lives of several elderly people who lived alone.",
        "Watches were once carried in pockets.",
        "It sometimes produces false alarms, for example during vigorous exercise.",
      ],
      odd: 3,
      why: "Parça akıllı saatlerin sert düşüşleri algılayıp acil yardım çağırabilmesini anlatır. Saatlerin bir zamanlar cepte taşındığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Handwritten prescriptions can be difficult to read.",
        "Errors in reading them have sometimes led patients to receive the wrong medicine or dose.",
        "Electronic prescribing systems reduce this risk.",
        "Many also warn doctors if a new medicine is likely to interact dangerously with another.",
        "Fountain pens were popular in the twentieth century.",
      ],
      odd: 4,
      why: "Parça el yazısı reçetelerin hatalara yol açmasını ve elektronik reçeteyi anlatır. Dolma kalemlerin yirminci yüzyılda popüler olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
