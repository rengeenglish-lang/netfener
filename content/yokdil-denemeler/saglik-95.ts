import type { YokdilDeneme } from "./types";

export const SAGLIK_95: YokdilDeneme = {
  no: 95,
  field: "saglik",
  vocab: [
    [
      "The tribe agreed to give blood samples because it believed they would be used only to ---- diabetes.",
      ["investigate", "spread", "ignore", "celebrate", "sell"],
      "Kabilenin örneklerin yalnızca diyabeti 'araştırmak' (investigate) için kullanılacağına inandığı için kan vermeyi kabul ettiği anlatılır.",
    ],
    [
      "Other scientists noticed that some of the figures in the study were ----.",
      ["implausible", "reliable", "familiar", "modest", "accurate"],
      "Diğer bilim insanlarının çalışmadaki bazı rakamların 'akla yatkın olmadığını, inanılmaz' (implausible) olduğunu fark ettiği anlatılır.",
    ],
    [
      "An investigation found that the data in both papers had been ----.",
      ["fabricated", "confirmed", "simplified", "translated", "praised"],
      "Bir soruşturmanın her iki makaledeki verilerin 'uydurulmuş' (fabricated) olduğunu ortaya koyduğu anlatılır.",
    ],
    [
      "The anaesthetist's warnings about the high death rates were repeatedly ----.",
      ["dismissed", "rewarded", "published", "repeated", "welcomed"],
      "Anestezi uzmanının yüksek ölüm oranlarıyla ilgili uyarılarının defalarca 'göz ardı edildiği, reddedildiği' (dismissed) anlatılır.",
    ],
    [
      "Many of the original findings could not be ---- when the experiments were repeated.",
      ["reproduced", "explained", "forgotten", "funded", "imagined"],
      "Deneyler tekrarlandığında özgün bulguların çoğunun 'yeniden elde edilemediği' (reproduced) anlatılır.",
    ],
    [
      "The tribe's members felt that the researchers had ---- their trust.",
      ["let down", "looked after", "put off", "taken after", "run into"],
      "Kabile üyelerinin araştırmacıların güvenlerini 'boşa çıkardığını, hayal kırıklığına uğrattığını' (let down) hissettiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the tribe discovered the truth, the samples ---- in dozens of other studies.",
      ["had been used", "use", "will use", "are using", "have used"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been used'.",
    ],
    [
      "If other researchers had not examined the figures closely, the study ---- much longer to be withdrawn.",
      ["might have taken", "takes", "will take", "had taken", "is taking"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin ana yan cümlesi: 'might have taken'.",
    ],
    [
      "Both papers ---- by the journal in 2006.",
      ["were retracted", "retracted", "have retracted", "retract", "are retracting"],
      "Makaleler geri çekilmiştir, çeken değildir; edilgen geçmiş zaman: 'were retracted'.",
    ],
    [
      "---- the anaesthetist collected evidence for years, his concerns were largely ignored.",
      ["Although", "Because", "Unless", "So that", "Until"],
      "Anestezi uzmanının yıllarca kanıt toplaması ile kaygılarının göz ardı edilmesi zıtlık bildirir: 'Although'.",
    ],
    [
      "The parents, ---- children's organs had been kept without their knowledge, were deeply distressed.",
      ["whose", "who", "which", "whom", "where"],
      "Ebeveynlerin çocukları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after a member of the tribe attended a lecture ---- the tribe learn what had happened.",
      ["did", "has", "was", "had", "does"],
      "'Only after' ile başlayan cümlede devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The hospital ---- the children had their operations has since become a model of openness.",
      ["where", "which", "whose", "when", "what"],
      "'The hospital' yer bildirir ve ilgi cümlesinde yer zarfı görevi görür: 'where'.",
    ],
    [
      "The smaller the original study, ---- likely its results were to be confirmed.",
      ["the less", "the least", "less", "least", "so little"],
      "'The + karşılaştırma ..., the + karşılaştırma' paralel yapısı: 'the less'.",
    ],
    [
      "The inquiry recommended that the results of every surgeon ---- publicly.",
      ["be published", "is published", "was published", "to be published", "being published"],
      "'recommend that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be published'.",
    ],
    [
      "The scientist is known ---- eggs from junior members of his own team.",
      ["to have obtained", "obtaining", "to be obtained by", "obtained", "having obtain"],
      "Geçmişte gerçekleşen eylem için mastarın geçmiş biçimi kullanılır: 'to have obtained'.",
    ],
    [
      "Researchers now register their plans before collecting data ---- they cannot change them afterwards.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Planların önceden kaydedilmesinin amacı sonradan değiştirilememesidir: 'so that'.",
    ],
    [
      "The journal had the paper ---- by independent experts after concerns were raised.",
      ["reviewed", "review", "reviewing", "to review", "reviews"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'reviewed'.",
    ],
    [
      "Had the managers listened to the staff, many patients ---- such poor care.",
      ["might not have suffered", "have not suffered", "will not suffer", "had not suffered", "do not suffer"],
      "Devrik üçüncü tip koşul cümlesinin ana yan cümlesi: 'might not have suffered'.",
    ],
    [
      "Neither the company nor its founder ---- able to provide the raw data.",
      ["was", "were being", "to be", "have been", "be"],
      "'Neither ... nor' yapısında fiil yakındaki tekil özneye (its founder) uyar: 'was'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1999, during a public inquiry into deaths after heart surgery at a hospital in Bristol, a witness mentioned that a children's hospital in Liverpool, Alder Hey, held a large collection of children's hearts. Further investigation revealed a much more disturbing picture. Between 1988 and 1995, a pathologist at the hospital had removed and kept the organs of thousands of children who had died and had been examined after death, {1} in most cases their parents had not been told and had not given their consent. Many of the organs had simply been stored in jars and never used for research. The facts soon became public, {2} thousands of families contacted the hospital to ask whether the organs of their own children had been kept. Some parents learned that their child had been buried without the heart or brain, {3} several families held two or even three funerals for the same child as organs were returned to them in stages. An official report published in 2001 strongly criticised the pathologist and the hospital's managers, {4} it also revealed that the practice of keeping organs without proper consent had been widespread in hospitals across the country. The scandal led to a new law in 2004, which made it illegal to remove, store or use human tissue without appropriate consent, {5} it created a national authority to regulate the use of human tissue in medicine and research.",
      blanks: [
        [
          "(21) ----",
          ["and", "unless", "although", "or", "until"],
          "Patoloğun organları alıp saklaması ve ebeveynlere haber verilmemesi birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "until"],
          "Gerçeklerin kamuoyuna yansıması ve binlerce ailenin hastaneye başvurması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "so that"],
          "Bazı çocukların organsız gömülmesi ve ailelerin birden çok cenaze töreni yapması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "although", "or", "until"],
          "Raporun patoloğu eleştirmesi ve uygulamanın ülke çapında yaygın olduğunu ortaya koyması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "although", "or", "until"],
          "Yasanın izinsiz doku kullanımını yasaklaması ve ulusal bir kurum oluşturması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Between 2005 and 2009, patients at a hospital in the town of Stafford, in central England, suffered appalling standards of care. Many were left for hours in soiled sheets, {1} some were not given help to eat or drink, so that they became dehydrated; one report described patients drinking water from flower vases. Nurses were too few, and those who were there were often poorly supervised. At the same time, the hospital's managers were focused on meeting financial targets and on gaining a new, more independent status within the health service, {2} warnings from staff and complaints from patients were not acted upon. The problems came to light largely because of a campaign by a woman whose mother had died at the hospital, {3} she collected the stories of other families and demanded an investigation. Official figures also showed that the number of deaths at the hospital was much higher than expected. A public inquiry led by a senior lawyer published its final report in 2013. It made two hundred and ninety recommendations, {4} it concluded that the hospital had put its targets and its reputation ahead of the care of its patients. Among the most important consequences was the introduction of a legal duty of candour, which requires hospitals to tell patients and their families openly when something has gone wrong with their care, {5} the government also introduced a new system of inspections that rate hospitals on the quality of their care as well as their finances.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Hastaların kirli çarşaflarda bırakılması ve bazılarına yemek ve su için yardım edilmemesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "unless", "although", "or", "so that"],
          "Yöneticilerin mali hedeflere odaklanması ve uyarılara göre hareket edilmemesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "although", "or", "until"],
          "Kadının kampanya yürütmesi ve başka ailelerin hikâyelerini toplaması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "unless", "although", "or", "until"],
          "Raporun iki yüz doksan öneri getirmesi ve hastanenin hedeflerini hasta bakımının önüne koyduğu sonucuna varması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "although", "or", "so that"],
          "Açıklık yükümlülüğünün getirilmesi ve yeni bir denetim sisteminin kurulması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the tribe's members had agreed to give samples for a study of diabetes, ----.",
      [
        "their blood was later used in research on other subjects without their knowledge",
        "diabetes is a serious disease",
        "the samples were small",
        "the university was nearby",
        "the researchers never used the samples for any research at all",
      ],
      "'Although' zıtlık ister: kabile üyeleri diyabet çalışması için örnek vermeyi kabul etse de kanları sonradan bilgileri olmadan başka konulardaki araştırmalarda kullanıldı.",
    ],
    [
      "If the company had allowed independent experts to examine its data, ----.",
      [
        "the problems with the study might have been discovered even sooner",
        "data are stored on computers",
        "the study was large",
        "the journal was famous",
        "the drug would have been approved for every patient in the world",
      ],
      "Üçüncü tip koşul: şirket bağımsız uzmanların verilerini incelemesine izin verseydi çalışmadaki sorunlar daha da erken ortaya çıkabilirdi.",
    ],
    [
      "----, the scientist claimed to have created stem cells matched to individual patients.",
      [
        "Celebrated in his country as a national hero",
        "Because Korea is in Asia",
        "Unless the journal objected",
        "In spite of being cells",
        "Since nobody in the world had ever heard of him before",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: ülkesinde ulusal kahraman olarak kutlanan bilim insanı hastalara özgü kök hücreler ürettiğini iddia etti.",
    ],
    [
      "Because most of the original studies had used small numbers of participants, ----.",
      [
        "their results were more likely to have occurred by chance",
        "psychology is a science",
        "the studies were old",
        "journals publish many papers",
        "their results were certain to be confirmed when they were repeated",
      ],
      "Neden-sonuç: özgün çalışmaların çoğu az sayıda katılımcı kullandığı için sonuçlarının tesadüfen ortaya çıkmış olma olasılığı daha yüksekti.",
    ],
    [
      "The inquiry recommended that surgeons' results be made public ----.",
      [
        "so that problems could be identified and dealt with quickly",
        "because surgeons are busy",
        "although results vary",
        "unless patients objected",
        "since the surgeons had asked for their results to be kept secret",
      ],
      "Amaç bildiren yapı: soruşturma sorunlar hızla belirlenip ele alınabilsin diye cerrahların sonuçlarının kamuya açıklanmasını önerdi.",
    ],
    [
      "The tribe lives in a remote part of the Grand Canyon, ----.",
      [
        "where its members have high rates of diabetes",
        "which is a canyon",
        "that the tribe",
        "whose rivers",
        "when the university first opened in the nineteenth century",
      ],
      "Yer bildiren ilgi cümlesi: kabile, üyelerinde diyabet oranının yüksek olduğu Büyük Kanyon'un uzak bir bölümünde yaşar.",
    ],
    [
      "Unlike the scientist's claims about human stem cells, ----.",
      [
        "his team's cloning of a dog turned out to be genuine",
        "stem cells are small",
        "dogs are animals",
        "Korea has universities",
        "his team's cloning of a dog was also shown to be completely false",
      ],
      "'Unlike' karşıtlık kurar: bilim insanının insan kök hücrelerine dair iddialarının aksine ekibinin bir köpeği klonlaması gerçek çıktı.",
    ],
    [
      "The study was retracted within two weeks of its publication ----.",
      [
        "because the authors could not verify the data on which it was based",
        "although it was popular",
        "so that the drug became cheaper",
        "unless the journal agreed",
        "since the drug had already been approved in every country",
      ],
      "Neden bildiren yapı: çalışma, yazarlar dayandığı verileri doğrulayamadığı için yayımlandıktan sonraki iki hafta içinde geri çekildi.",
    ],
    [
      "No sooner had the tribe learned how its samples had been used ----.",
      [
        "than it took legal action against the university",
        "when the tribe learned",
        "that the samples were",
        "before the lecture",
        "than it offered to give the university even more samples",
      ],
      "'No sooner ... than' yapısı: kabile örneklerinin nasıl kullanıldığını öğrenir öğrenmez üniversiteye karşı dava açtı.",
    ],
    [
      "While the project found that many studies could not be reproduced, ----.",
      [
        "it also led to reforms designed to make research more reliable",
        "psychology is popular",
        "the researchers were many",
        "experiments take time",
        "it proved that all the original studies had been fraudulent",
      ],
      "'While' zıtlık bildirir: proje pek çok çalışmanın yinelenemediğini bulsa da araştırmayı daha güvenilir kılmaya yönelik reformlara da yol açtı.",
    ],
    [
      "The fraud was so serious ----.",
      [
        "that the scientist was dismissed from his university",
        "because the scientist",
        "than the journal",
        "although the papers",
        "so that the scientist was given a national prize",
      ],
      "'so ... that' sonuç yapısı: sahtekârlık o kadar ciddiydi ki bilim insanı üniversitesinden ihraç edildi.",
    ],
  ],
  enTr: [
    [
      "The consent forms were worded so broadly that the researchers believed they could use the samples for other studies.",
      [
        "Onay formları o kadar geniş ifadelerle yazılmıştı ki araştırmacılar örnekleri başka çalışmalar için kullanabileceklerine inandı.",
        "Onay formları örneklerin başka çalışmalarda kullanılmasını açıkça yasaklıyordu.",
        "Araştırmacılar onay formlarını başka çalışmalar için yazdı.",
        "Hiç onay formu kullanılmadı.",
        "Onay formları o kadar dar ifadelerle yazılmıştı ki örnekler hiçbir çalışmada kullanılamadı.",
      ],
      "'The consent forms were worded so broadly' 'onay formları o kadar geniş ifadelerle yazılmıştı', 'that the researchers believed they could use the samples for other studies' 'ki araştırmacılar örnekleri başka çalışmalar için kullanabileceklerine inandı' karşılığıdır.",
    ],
    [
      "Several international trials of the drug were paused after the study was published.",
      [
        "Çalışma yayımlandıktan sonra ilacın birkaç uluslararası denemesine ara verildi.",
        "Çalışma yayımlandıktan sonra ilacın birkaç yeni denemesi başlatıldı.",
        "Uluslararası denemeler çalışmayı yayımladı.",
        "İlaç hiç denenmedi.",
        "Çalışma yayımlandıktan sonra ilacın denemeleri hızlandırıldı ve iki katına çıkarıldı.",
      ],
      "'Several international trials of the drug were paused' 'ilacın birkaç uluslararası denemesine ara verildi', 'after the study was published' 'çalışma yayımlandıktan sonra' karşılığıdır.",
    ],
    [
      "The scientist was later convicted of misusing research funds and illegally buying eggs.",
      [
        "Bilim insanı daha sonra araştırma fonlarını kötüye kullanmak ve yasa dışı yollarla yumurta satın almaktan mahkûm edildi.",
        "Bilim insanı daha sonra araştırma fonlarını doğru kullandığı için ödüllendirildi.",
        "Yumurtalar bilim insanını araştırma fonlarıyla satın aldı.",
        "Bilim insanı hiçbir suçla itham edilmedi.",
        "Bilim insanı daha sonra tüm suçlamalardan aklandı ve üniversitesine geri döndü.",
      ],
      "'The scientist was later convicted' 'bilim insanı daha sonra mahkûm edildi', 'of misusing research funds and illegally buying eggs' 'araştırma fonlarını kötüye kullanmak ve yasa dışı yollarla yumurta satın almaktan' karşılığıdır.",
    ],
    [
      "The inquiry concluded that more children had died than would have been expected at other hospitals.",
      [
        "Soruşturma, diğer hastanelerde beklenecek olandan daha fazla çocuğun öldüğü sonucuna vardı.",
        "Soruşturma, diğer hastanelerde daha fazla çocuğun öldüğü sonucuna vardı.",
        "Diğer hastaneler soruşturmanın sonucunu bekledi.",
        "Soruşturmada hiç çocuktan söz edilmedi.",
        "Soruşturma, hastanedeki ölüm oranının ülkedeki en düşük oran olduğu sonucuna vardı.",
      ],
      "'The inquiry concluded that more children had died' 'soruşturma daha fazla çocuğun öldüğü sonucuna vardı', 'than would have been expected at other hospitals' 'diğer hastanelerde beklenecek olandan' karşılığıdır.",
    ],
    [
      "Only about a third of the repeated experiments produced results as strong as the originals.",
      [
        "Tekrarlanan deneylerin yalnızca üçte biri kadarı özgün deneyler kadar güçlü sonuçlar verdi.",
        "Tekrarlanan deneylerin hepsi özgün deneylerden daha güçlü sonuçlar verdi.",
        "Özgün deneyler tekrarlanan deneylerin üçte birini üretti.",
        "Hiçbir deney tekrarlanmadı.",
        "Tekrarlanan deneylerin üçte ikisi özgün deneylerle tamamen aynı sonuçları verdi.",
      ],
      "'Only about a third of the repeated experiments' 'tekrarlanan deneylerin yalnızca üçte biri kadarı', 'produced results as strong as the originals' 'özgün deneyler kadar güçlü sonuçlar verdi' karşılığıdır.",
    ],
    [
      "Hospitals must now tell patients openly when something has gone wrong with their care.",
      [
        "Hastaneler artık hastaların bakımında bir şeyler ters gittiğinde bunu onlara açıkça söylemek zorundadır.",
        "Hastaneler artık hastaların bakımındaki hataları gizlemek zorundadır.",
        "Hastalar artık hastanelere bakımlarının nasıl gittiğini söylemek zorundadır.",
        "Hastanelerde hiçbir şey ters gitmez.",
        "Hastaneler artık yalnızca hastalar sorarsa ve yazılı bir başvuru yaparlarsa hataları açıklayabilir.",
      ],
      "'Hospitals must now tell patients openly' 'hastaneler artık hastalara açıkça söylemek zorundadır', 'when something has gone wrong with their care' 'bakımlarında bir şeyler ters gittiğinde' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kabile, üniversitenin araştırmacılarının kendi topraklarına girmesini yasakladı.",
      [
        "The tribe banned the university's researchers from entering its land.",
        "The university banned the tribe from entering its buildings.",
        "The researchers banned the tribe from their land.",
        "The tribe invited the researchers to live on its land.",
        "The tribe asked the university to send even more researchers to its land.",
      ],
      "'Kabile yasakladı' 'the tribe banned', 'üniversitenin araştırmacılarının kendi topraklarına girmesini' 'the university's researchers from entering its land' karşılığıdır.",
    ],
    [
      "Çalışma binlerce hastanın verisine dayandığını iddia ediyordu.",
      [
        "The study claimed to be based on data from thousands of patients.",
        "The study was based on a single patient.",
        "Thousands of patients claimed the study.",
        "The study had no data.",
        "The study admitted that its data came only from a few animals in a laboratory.",
      ],
      "'Çalışma iddia ediyordu' 'the study claimed', 'binlerce hastanın verisine dayandığını' 'to be based on data from thousands of patients' karşılığıdır.",
    ],
    [
      "Ülkede bilim insanının resmini taşıyan pullar basıldı.",
      [
        "Stamps bearing the scientist's picture were issued in the country.",
        "The scientist issued stamps with the country's picture.",
        "The country's stamps were banned by the scientist.",
        "No stamps were ever issued.",
        "The scientist's picture was removed from all the stamps in the country.",
      ],
      "'Pullar basıldı' 'stamps were issued', 'bilim insanının resmini taşıyan' 'bearing the scientist's picture' karşılığıdır.",
    ],
    [
      "Anestezi uzmanı sonunda Avustralya'ya göç etti.",
      [
        "The anaesthetist eventually emigrated to Australia.",
        "The anaesthetist was born in Australia.",
        "Australia emigrated to the anaesthetist.",
        "The anaesthetist never left the hospital.",
        "The anaesthetist was promoted to director of the hospital and stayed there for life.",
      ],
      "'Anestezi uzmanı göç etti' 'the anaesthetist emigrated', 'sonunda Avustralya'ya' 'eventually to Australia' karşılığıdır.",
    ],
    [
      "Pek çok ebeveyn çocuklarının organlarının saklandığından habersizdi.",
      [
        "Many parents were unaware that their children's organs had been kept.",
        "All parents had agreed that their children's organs should be kept.",
        "The organs were unaware of the parents.",
        "No organs were kept.",
        "Many parents had asked the hospital to keep their children's organs for research.",
      ],
      "'Pek çok ebeveyn habersizdi' 'many parents were unaware', 'çocuklarının organlarının saklandığından' 'that their children's organs had been kept' karşılığıdır.",
    ],
    [
      "Rapor iki yüz doksan öneri içeriyordu.",
      [
        "The report contained two hundred and ninety recommendations.",
        "The report contained no recommendations.",
        "Two hundred and ninety reports contained one recommendation.",
        "There was no report.",
        "The report contained only two recommendations, both of which were ignored.",
      ],
      "'Rapor içeriyordu' 'the report contained', 'iki yüz doksan öneri' 'two hundred and ninety recommendations' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The Havasupai are a small Native American tribe whose members live at the bottom of a branch of the Grand Canyon in Arizona. In the late 1980s, concerned about the high rate of type 2 diabetes among their people, tribal leaders agreed to cooperate with researchers from a university in the state, who hoped to find genes that might explain the problem. About two hundred members of the tribe gave blood samples. They understood that the samples would be used to study diabetes, but the consent forms they signed were worded broadly, referring to research on 'the causes of behavioral and medical disorders'. The diabetes research found no genetic link. The samples, however, were stored at the university and over the following years were used by other researchers in studies of schizophrenia, of inbreeding and of the ancient migration of human populations, which suggested that the tribe's ancestors had come from Asia. The tribe learned what had happened only in 2003, when a member attended a lecture at the university and realised that the research being described was based on the tribe's blood. Members were deeply offended. Schizophrenia carries a heavy stigma, and studies of inbreeding were seen as humiliating. The research on migration also contradicted the tribe's traditional belief that its people had originated in the canyon, which was central to its identity and to its claims to the land. The tribe banned the university's employees from its land and took legal action. In 2010, the university agreed to pay compensation to dozens of tribal members, to return the remaining samples and to provide other forms of help. The case has had a lasting influence on discussions of informed consent, and it has made many indigenous communities more cautious about taking part in genetic research.",
      questions: [
        [
          "According to the passage, tribal leaders first agreed to cooperate with the researchers because ----.",
          [
            "they were worried about the high rate of diabetes in their community",
            "they wanted to study their ancient migration",
            "the university paid them",
            "they were interested in schizophrenia",
            "the government ordered them to take part in the research",
          ],
          "Kabile liderleri halkları arasındaki yüksek tip 2 diyabet oranından kaygılandıkları için işbirliğine razı oldu.",
        ],
        [
          "The passage states that the research on migration offended the tribe because it ----.",
          [
            "contradicted its traditional belief about its origins",
            "proved that the tribe had diabetes",
            "was carried out without any samples",
            "showed that the tribe was very large",
            "was published only in Asia",
          ],
          "Göç araştırması halkın kanyonda ortaya çıktığına dair geleneksel inançla çelişiyordu.",
        ],
        [
          "It can be inferred from the passage that the main ethical problem was that ----.",
          [
            "the samples were used for purposes the tribe had not understood or agreed to",
            "the samples were collected too quickly",
            "the diabetes research was successful",
            "the tribe refused to give blood",
            "the researchers returned the samples too early",
          ],
          "Örnekler kabilenin anlamadığı ya da onaylamadığı amaçlar için kullanılmıştı.",
        ],
      ],
    },
    {
      text:
        "In May 2020, a few months after COVID-19 had begun to spread worldwide, one of the world's leading medical journals published a study of the antimalarial drug hydroxychloroquine, which some politicians had promoted as a treatment for the disease. The study claimed to be based on the records of nearly a hundred thousand patients in hundreds of hospitals on six continents, and it reported that patients who received the drug were more likely to die than those who did not. Because of its size and the reputation of the journal, the study had an immediate impact. The World Health Organization and several national authorities paused clinical trials of the drug. Within days, however, scientists around the world began to raise questions. The data had been supplied by a small American company that few researchers had heard of, and it was unclear how it could have obtained such detailed records from so many hospitals so quickly. Some of the figures appeared implausible: the number of deaths reported for Australian patients, for example, was higher than the total number of COVID-19 deaths recorded in the country at that time. More than a hundred scientists signed an open letter asking for the data to be examined. Three of the study's authors then asked for an independent audit, but the company refused to give the auditors access to the data, saying that this would breach its agreements with hospitals. The three authors asked the journal to retract the paper, and it was withdrawn less than two weeks after its publication. Another paper based on the company's data, in a different leading journal, was also retracted. The episode damaged trust in medical research during the pandemic and led journals to review the way they check the data on which studies are based.",
      questions: [
        [
          "According to the passage, the study had an immediate impact partly because ----.",
          [
            "it was large and was published in a highly respected journal",
            "it was carried out by the World Health Organization",
            "it proved that the drug cured COVID-19",
            "it was based on a small number of patients",
            "politicians had paid for it",
          ],
          "Çalışmanın büyüklüğü ve derginin itibarı nedeniyle hemen etki yarattı.",
        ],
        [
          "The passage states that the figures for Australian patients were suspicious because ----.",
          [
            "they exceeded the total number of COVID-19 deaths officially recorded there",
            "Australia had no hospitals",
            "they were too low",
            "Australia had banned the drug",
            "the company was Australian",
          ],
          "Avustralyalı hastalar için bildirilen ölüm sayısı ülkede o zamana kadar kaydedilen toplam COVID-19 ölümlerinden fazlaydı.",
        ],
        [
          "It can be inferred from the passage that the study was retracted mainly because ----.",
          [
            "its data could not be independently checked",
            "the drug was shown to be safe",
            "the journal disliked the authors",
            "too many scientists agreed with it",
            "it had been published too slowly",
          ],
          "Şirket denetçilerin verilere erişmesine izin vermediğinden veriler bağımsız olarak doğrulanamadı.",
        ],
      ],
    },
    {
      text:
        "In 2004 and 2005, a team led by the South Korean scientist Hwang Woo-suk published two papers in a leading scientific journal that appeared to represent major advances. The first claimed that the team had cloned a human embryo and obtained stem cells from it. The second claimed that it had created stem cell lines that were genetically matched to individual patients, raising hopes that such cells might one day be used to repair damaged tissues without being rejected by the immune system. Hwang became a national hero in South Korea; the government provided generous funding, and stamps were issued celebrating his work. In late 2005, however, doubts began to emerge. It was revealed that some of the human eggs used in the research had been obtained from junior female members of Hwang's own team, who might have felt unable to refuse, and that other women had been paid for their eggs, in violation of ethical guidelines. Then a junior researcher told investigators that some of the data had been fabricated. An investigation by Hwang's university concluded in early 2006 that the stem cell lines described in the papers did not exist and that the data in both papers had been falsified. The journal retracted the papers, and Hwang was dismissed from his post. In 2009, a court convicted him of misusing research funds and illegally buying human eggs, although he was not found guilty of fraud itself. Not everything his team had claimed was false: in 2005 they had cloned a dog, and this achievement was confirmed by independent tests. The scandal led to stricter rules on the collection of eggs for research and on the checking of scientific results in South Korea and elsewhere.",
      questions: [
        [
          "According to the passage, the second paper raised hopes because ----.",
          [
            "cells matched to patients might be used without being rejected by the immune system",
            "it showed how to clone dogs",
            "it described a new vaccine",
            "it proved that eggs were not needed",
            "it was published by the government",
          ],
          "Hastalara genetik olarak uyumlu hücreler bağışıklık sistemince reddedilmeden dokuları onarmakta kullanılabilirdi.",
        ],
        [
          "The passage states that one of the ethical problems was that ----.",
          [
            "eggs had been obtained from junior members of the team",
            "the dog had not been cloned",
            "the government had refused funding",
            "the stamps were illegal",
            "the papers were never published",
          ],
          "Yumurtaların bir kısmı reddetmekte zorlanabilecek ekipteki genç kadın araştırmacılardan alınmıştı.",
        ],
        [
          "It can be inferred from the passage that the cloned dog is mentioned in order to show that ----.",
          [
            "not all of the team's work was fraudulent",
            "the team never did any genuine research",
            "dogs are easier to clone than humans",
            "the stem cell lines were real",
            "the court found Hwang guilty of fraud",
          ],
          "Köpeğin klonlanması bağımsız testlerle doğrulanmıştı; ekibin bütün iddiaları yanlış değildi.",
        ],
      ],
    },
    {
      text:
        "In the late 1980s and early 1990s, an anaesthetist named Stephen Bolsin, who had recently moved to a hospital in Bristol, in the west of England, became concerned about the results of complex heart operations on babies and young children there. Collecting the figures himself, he found that the proportion of children who died after certain operations appeared to be much higher than at other hospitals in the country. He raised his concerns with senior colleagues and managers over several years, but they were not acted upon, and he later said that he had been made to feel like a troublemaker. In 1995, after the death of a baby during an operation that Bolsin and others had urged should not go ahead, the operations were stopped and an investigation began. In 1998, the national body that regulates doctors found two surgeons and the hospital's chief executive guilty of serious professional misconduct. A public inquiry, which reported in 2001, concluded that between 1991 and 1995 around thirty to thirty-five more children had died after surgery at the hospital than would have been expected at a typical hospital. It found that the problems were caused not mainly by bad individuals but by a culture in which doctors were reluctant to question each other, results were not properly monitored and parents were not given clear information about the risks. The inquiry made nearly two hundred recommendations, including that the results of hospitals and surgeons should be monitored and published. The case is widely regarded as a turning point in British medicine. It helped to end the assumption that doctors' performance should be judged only by other doctors, and today the results of heart surgeons in the country are publicly available. Bolsin himself emigrated to Australia, where he continued to work on patient safety.",
      questions: [
        [
          "According to the passage, Bolsin became concerned because ----.",
          [
            "the death rate after certain operations seemed higher than at other hospitals",
            "the surgeons refused to operate",
            "the hospital was too small",
            "parents complained about the cost",
            "he had been asked to investigate by the government",
          ],
          "Kendi topladığı rakamlar bazı ameliyatlardan sonra ölen çocukların oranının diğer hastanelerden çok daha yüksek olduğunu gösteriyordu.",
        ],
        [
          "The inquiry concluded that the problems were caused mainly by ----.",
          [
            "a culture in which results were not monitored and doctors did not question each other",
            "a few dishonest individuals",
            "a lack of money",
            "parents who refused consent",
            "a shortage of operating theatres",
          ],
          "Sorunların başlıca nedeni kötü bireyler değil, doktorların birbirini sorgulamadığı ve sonuçların izlenmediği bir kültürdü.",
        ],
        [
          "It can be inferred from the passage that the case was a 'turning point' because it ----.",
          [
            "led to the public monitoring of doctors' results",
            "ended heart surgery on children",
            "proved that all surgeons were dishonest",
            "made Bolsin a surgeon",
            "kept the results of surgeons secret",
          ],
          "Vaka doktorların performansının yalnızca diğer doktorlarca değerlendirilmesi varsayımını sona erdirdi ve sonuçlar kamuya açık hâle geldi.",
        ],
      ],
    },
    {
      text:
        "In 2015, a team of about two hundred and seventy researchers published the results of an unusual project. Instead of carrying out new experiments, they had tried to repeat a hundred studies that had been published in 2008 in three leading psychology journals, following the original methods as closely as possible and often consulting the original authors. The results were sobering. While almost all of the original studies had reported statistically significant findings, only about a third of the repeated experiments produced significant results, and on average the effects they found were only about half as large as those originally reported. The project did not show that the original studies had been fraudulent, and the authors emphasised that a failure to reproduce a result does not necessarily mean that the result was false. It did, however, add to growing evidence of what became known as a 'replication crisis', which has since been identified in other fields, including some areas of medical research. Researchers have pointed to several causes. Many studies use small numbers of participants, which makes chance findings more likely. Journals have tended to publish surprising positive results rather than studies that find no effect, so that many negative results are never published. Researchers may also, often without intending to deceive, try several ways of analysing their data and report only the one that produces a significant result. In response, many journals and researchers have adopted reforms. Researchers are increasingly encouraged to register their hypotheses and methods publicly before collecting data, to share their data with others and to repeat important studies. Some journals now agree to publish a study on the basis of its design, before the results are known, so that the decision does not depend on whether the findings are exciting.",
      questions: [
        [
          "According to the passage, the researchers in the project ----.",
          [
            "tried to repeat a hundred published psychology studies",
            "carried out a hundred new experiments on different subjects",
            "accused the original authors of fraud",
            "worked only in medical research",
            "refused to contact the original authors",
          ],
          "Yeni deneyler yapmak yerine yayımlanmış yüz psikoloji çalışmasını yinelemeye çalıştılar.",
        ],
        [
          "The passage states that the authors of the project emphasised that ----.",
          [
            "failing to reproduce a result does not necessarily prove it false",
            "all the original studies were wrong",
            "the original authors had cheated",
            "psychology is not a science",
            "small studies are always more reliable",
          ],
          "Yazarlar bir sonucun yinelenememesinin o sonucun yanlış olduğu anlamına gelmediğini vurguladı.",
        ],
        [
          "It can be inferred from the passage that publishing studies on the basis of their design is intended to ----.",
          [
            "prevent journals from favouring only exciting results",
            "make studies shorter",
            "reduce the number of participants",
            "hide negative results",
            "allow researchers to change their hypotheses",
          ],
          "Yayın kararının bulguların heyecan verici olup olmamasına bağlı olmaması amaçlanır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 2011, a prominent Dutch social psychologist admitted that he had invented the data for many of his studies. ---- The case shocked his colleagues and led to calls for researchers to share their data more openly.",
      [
        "An investigation found fraud in dozens of his published papers, which were later withdrawn by the journals that had published them.",
        "The Netherlands has many universities.",
        "Psychology is the study of the mind.",
        "His studies had often attracted attention in the press because their findings were surprising and easy to understand.",
        "Data are collected in experiments.",
      ],
      "Boşluk itirafın sonuçlarını açıklayıp meslektaşların tepkisine bağlanan bir cümle gerektirir; boşluğa bir soruşturmanın onlarca makalesinde sahtekârlık bulduğunu ve makalelerin geri çekildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the late 2000s, researchers at an American university claimed to have developed genetic tests that could predict which chemotherapy drugs would work for individual cancer patients. ---- When other scientists showed that the data contained serious errors, the trials were stopped and the papers were withdrawn.",
      [
        "On the basis of their work, clinical trials were started in which patients' treatment was chosen according to the tests.",
        "Cancer is treated in many ways.",
        "Universities carry out research.",
        "The lead researcher was also found to have made false claims about his qualifications, including a scholarship he had never received.",
        "Chemotherapy has side effects.",
      ],
      "Boşluk 'the trials' ifadesinin gönderme yapacağı denemeleri tanıtan bir cümle gerektirir; boşluğa çalışmaya dayanarak hastaların tedavisinin testlere göre seçildiği klinik denemelerin başlatıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "A Japanese anaesthetist holds one of the records for the largest number of scientific papers withdrawn because of misconduct. ---- Investigators concluded that he had invented data for many of these trials, which had supposedly involved thousands of patients.",
      [
        "Over two decades, he had published reports of clinical trials of drugs to prevent nausea after surgery.",
        "Japan has a large population.",
        "Anaesthetists work in operating theatres.",
        "Statisticians noticed that the patterns in his data were far too regular to have occurred by chance in real patients.",
        "Nausea is unpleasant.",
      ],
      "Boşluk 'these trials' ifadesinin gönderme yapacağı denemeleri tanıtan bir cümle gerektirir; boşluğa yirmi yıl boyunca ameliyat sonrası bulantıyı önleyen ilaçların denemelerini yayımladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Some so-called predatory journals publish almost any article in return for a fee, without proper review by experts. ---- In 2017, a scientist demonstrated the problem by submitting a deliberately absurd paper based on a science fiction film, which several such journals accepted.",
      [
        "Researchers who publish in them may be deceived, and the false or poor-quality studies they contain can mislead readers.",
        "Journals are published regularly.",
        "Fees are paid for many services.",
        "Many of these journals have names that closely resemble those of respected publications, which makes them harder to recognise.",
        "Films are popular.",
      ],
      "Boşluk sorunun neden ciddi olduğunu açıklayıp 2017 gösterisine bağlanan bir cümle gerektirir; boşluğa bu dergilerde yayın yapanların aldatılabileceğini ve düşük kaliteli çalışmaların okurları yanıltabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "Many medical journals now require that clinical trials be registered in a public database before the first patient is enrolled. ---- This makes it harder for companies or researchers to hide trials whose results are disappointing.",
      [
        "The registration records the main question the trial is designed to answer and how its results will be measured.",
        "Patients take part in trials.",
        "Databases are stored on computers.",
        "The rule was introduced by a group of leading journal editors in the mid-2000s, after several scandals involving unpublished trials.",
        "Medicines are tested carefully.",
      ],
      "Boşluk kaydın içeriğini açıklayıp hayal kırıklığı yaratan denemelerin gizlenmesini zorlaştırmasına bağlanan bir cümle gerektirir; boşluğa kaydın denemenin temel sorusunu ve sonuçların nasıl ölçüleceğini içerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2010, the French authorities discovered that a company had been filling breast implants with cheap industrial silicone instead of the medical-grade material it was supposed to use. ---- The company's founder was later sentenced to prison for fraud.",
      [
        "Hundreds of thousands of women in dozens of countries had received the implants, which were more likely to break.",
        "France is in western Europe.",
        "Silicone is used in many products.",
        "The company had avoided detection by hiding the industrial silicone whenever inspectors visited its factory.",
        "Companies must follow rules.",
      ],
      "Boşluk skandalın boyutunu açıklayıp kurucunun cezasına bağlanan bir cümle gerektirir; boşluğa onlarca ülkede yüz binlerce kadının yırtılma olasılığı daha yüksek implantlar aldığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Before a scientific article is published, it is usually sent to other experts in the field.",
        "These reviewers check whether the methods are sound and the conclusions are justified.",
        "Experts often travel to international conferences.",
        "The process can take months and does not always detect errors or fraud.",
        "Some journals now publish the reviewers' reports together with the article.",
      ],
      odd: 2,
      why: "Parça bilimsel makalelerin yayımlanmadan önce uzmanlarca değerlendirilmesini anlatır. Uzmanların sık sık uluslararası konferanslara gittiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2010, two science journalists started a website that reports on scientific papers that have been withdrawn.",
        "It has since built a database of tens of thousands of retractions.",
        "Journalists often work to tight deadlines.",
        "The database allows researchers to check whether studies they rely on have been withdrawn.",
        "It has also revealed that many retractions are caused by misconduct rather than honest error.",
      ],
      odd: 2,
      why: "Parça geri çekilen bilimsel makaleleri izleyen web sitesini ve veri tabanını anlatır. Gazetecilerin sıkı teslim tarihleriyle çalıştığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some scientists specialise in detecting manipulated images in published papers.",
        "Microscopes allow scientists to see very small objects.",
        "One such researcher has identified problems in thousands of articles by spotting duplicated or altered pictures.",
        "Some of her findings have led to the retraction of influential studies.",
        "Journals increasingly use software to check images before publication.",
      ],
      odd: 1,
      why: "Parça yayımlanmış makalelerdeki manipüle edilmiş görüntülerin tespit edilmesini anlatır. Mikroskopların çok küçük nesneleri görmeyi sağladığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "After the scandal at the children's hospital, the rules on the use of human tissue were changed.",
        "Hospitals must now obtain consent before keeping organs after a post-mortem examination.",
        "Families can choose whether tissue may be used for research or teaching.",
        "Post-mortem examinations help doctors understand the causes of death.",
        "A national authority inspects the organisations that store human tissue.",
      ],
      odd: 3,
      why: "Parça çocuk hastanesindeki skandaldan sonra insan dokusu kullanımına ilişkin kuralların değişmesini anlatır. Otopsilerin ölüm nedenlerini anlamaya yardım ettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Staff who raise concerns about patient safety are sometimes treated badly by their employers.",
        "Some have lost their jobs or found it impossible to work in their profession again.",
        "Many countries have introduced laws to protect such staff.",
        "Hospitals have also appointed officers to whom staff can report concerns confidentially.",
        "Nurses often work long shifts at night.",
      ],
      odd: 4,
      why: "Parça hasta güvenliğiyle ilgili endişelerini dile getiren çalışanların korunmasını anlatır. Hemşirelerin geceleri uzun vardiyalar çalıştığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many funders now require researchers to share the data from their studies.",
        "Sharing data allows other scientists to check results and to carry out new analyses.",
        "It can also reduce unnecessary repetition of research.",
        "Computers can store enormous amounts of information.",
        "However, the privacy of patients must be protected when medical data are shared.",
      ],
      odd: 3,
      why: "Parça araştırmacıların çalışma verilerini paylaşmasının yararlarını ve sınırlarını anlatır. Bilgisayarların çok büyük miktarda bilgi depolayabildiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
