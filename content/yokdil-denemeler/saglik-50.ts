import type { YokdilDeneme } from "./types";

export const SAGLIK_50: YokdilDeneme = {
  no: 50,
  field: "saglik",
  vocab: [
    [
      "New machines could keep the heart beating in patients whose brains had ---- stopped working.",
      ["permanently", "briefly", "partly", "happily", "rarely"],
      "Yeni makinelerin beyni 'kalıcı olarak' (permanently) çalışmayı durdurmuş hastalarda kalbi çalıştırmaya devam edebildiği anlatılır.",
    ],
    [
      "The judges ---- that the defendants had carried out cruel experiments on prisoners.",
      ["concluded", "denied", "forgot", "pretended", "hoped"],
      "Yargıçların sanıkların mahkûmlar üzerinde acımasız deneyler yaptığı 'sonucuna vardığı' (concluded) anlatılır.",
    ],
    [
      "The article described twenty-two studies in which patients had been put at risk without their ----.",
      ["consent", "money", "family", "doctor", "medicine"],
      "Makalenin hastaların 'onayı' (consent) olmadan riske atıldığı yirmi iki çalışmayı anlattığı anlatılır.",
    ],
    [
      "A committee of ordinary citizens had to decide which patients would ---- the life-saving treatment.",
      ["receive", "refuse", "invent", "advertise", "repair"],
      "Sıradan yurttaşlardan oluşan bir kurulun hangi hastaların hayat kurtarıcı tedaviyi 'alacağına' (receive) karar vermek zorunda olduğu anlatılır.",
    ],
    [
      "Within minutes of receiving the drug, the volunteers became ---- ill.",
      ["critically", "slightly", "pleasantly", "gradually", "occasionally"],
      "İlacı aldıktan dakikalar sonra gönüllülerin 'ağır biçimde' (critically) hastalandığı anlatılır.",
    ],
    [
      "The parents asked the court for permission to ---- the machine that was keeping their daughter alive.",
      ["switch off", "take after", "look up to", "run into", "put up with"],
      "Ebeveynlerin mahkemeden kızlarını hayatta tutan makineyi 'kapatmak' (switch off) için izin istediği anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before 1968, death ---- mainly as the permanent stopping of the heart and breathing.",
      ["had been defined", "defines", "has defined", "will define", "is defining"],
      "1968'den önceki durum; geçmişte daha önce, edilgen: 'had been defined'.",
    ],
    [
      "By the time the trial began in 1946, investigators ---- evidence of the experiments for many months.",
      ["had been collecting", "collect", "will collect", "are collecting", "have been collected"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been collecting'.",
    ],
    [
      "If the volunteers had received the drug one at a time, the others ---- harmed.",
      ["might not have been", "will not be", "are not", "had not been", "are not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have been'.",
    ],
    [
      "The experiments in Guatemala ---- only in 2010 by a historian studying archives.",
      ["were revealed", "revealed", "have revealed", "are revealing", "reveal"],
      "Deneyler ortaya çıkarılmıştır; edilgen geçmiş zaman: 'were revealed'.",
    ],
    [
      "---- the respirator was switched off, the young woman continued to breathe on her own for nine years.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Solunum cihazının kapatılması ile kadının kendi başına nefes almaya devam etmesi zıttır: 'Although'.",
    ],
    [
      "The anaesthetist, ---- article caused a sensation in 1966, described studies carried out at leading universities.",
      ["whose", "which", "who", "whom", "where"],
      "Anestezi uzmanının makalesi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The committee considered patients' jobs and family situations, ---- was later widely criticised.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more powerful a new drug is, ---- carefully it must be tested in humans.",
      ["the more", "the most", "more than", "much more", "so"],
      "'The more ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Only after the code was published ---- voluntary consent become a widely accepted principle.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Rules were changed ---- first doses of new drugs would be given to one volunteer at a time.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The court allowed the parents ---- the respirator removed.",
      ["to have", "having", "have", "had", "to having"],
      "'allow sb to do sth' kalıbı; 'have sth done': 'to have'.",
    ],
    [
      "The researchers are believed ---- about seven hundred people without their knowledge.",
      ["to have infected", "infecting", "to infect", "infected", "to be infecting"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have infected'.",
    ],
    [
      "The demand for dialysis was so great ---- not every patient could be treated.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The code states that human subjects ---- free to withdraw from an experiment at any time.",
      ["should be", "should", "being", "to be", "be being"],
      "Gereklilik bildiren 'should' + edilgen yapı: 'should be'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1950s and 1960s, new technology such as mechanical ventilators made it possible to keep the hearts of severely brain-injured patients beating for days or weeks, even {1} their brains had permanently stopped functioning. This raised difficult questions. Were such patients alive or dead? When could treatment be stopped? And could their organs be removed for transplantation, which was then becoming possible? In 1968, a committee at Harvard Medical School, led by the anaesthetist Henry Beecher, published a report proposing a new definition of death based on the irreversible loss of all brain function. The committee set out criteria for diagnosing this condition, {2} the absence of any response to painful stimuli, the absence of reflexes and the inability to breathe without a machine. Tests were to be repeated after twenty-four hours {3} confirm the diagnosis. The report argued that recognising such patients as dead would relieve the burden on families and hospitals and remove uncertainty about organ donation. Critics have since suggested that the committee was influenced by the needs of transplant surgeons, {4} supporters argue that the concept was medically sound. Over the following decades, most countries adopted laws or guidelines recognising brain death, {5} the precise criteria still vary from one country to another.",
      blanks: [
        [
          "(21) ----",
          ["though", "if", "unless", "so", "because"],
          "'even though' yapısı: beyinleri çalışmayı durdurmuş olsa bile: 'though'.",
        ],
        [
          "(22) ----",
          ["including", "except", "despite", "unlike", "instead of"],
          "Ölçütler sayılırken 'dahil': 'including'.",
        ],
        [
          "(23) ----",
          ["to", "for", "so", "by", "as"],
          "Teşhisi doğrulamak 'için'; amaç bildiren mastar: 'to'.",
        ],
        [
          "(24) ----",
          ["while", "because", "unless", "so that", "until"],
          "Eleştirmenler ile destekçilerin görüşleri karşılaştırılır: 'while'.",
        ],
        [
          "(25) ----",
          ["although", "because", "unless", "so that", "once"],
          "Kavramın benimsenmesi ile ölçütlerin hâlâ farklılık göstermesi zıttır: 'although'.",
        ],
      ],
    },
    {
      text:
        "After the Second World War, twenty-three German doctors and officials were put on trial in Nuremberg by an American military court for crimes committed during the Nazi period. Many of them had carried out brutal experiments on concentration camp prisoners, {1} were exposed to freezing water, low air pressure, infectious diseases and poisons, often with fatal results. In their defence, some of the accused argued that there were no clear international rules on human experimentation and that similar research had been carried out in other countries. In August 1947, the court found sixteen of the defendants guilty, {2} seven were sentenced to death. In its judgement, the court set out ten principles for permissible medical experiments, {3} became known as the Nuremberg Code. The first and most important principle was that the voluntary consent of the human subject is absolutely essential. The code also stated that experiments should be designed to produce results that benefit society, {4} unnecessary physical and mental suffering should be avoided, and that subjects should be free to stop taking part at any time. Although the code was not adopted as law in any country, it became the foundation for later international guidelines, such as the Declaration of Helsinki issued by the World Medical Association in 1964, and it remains one of the most important documents {5} the history of medical ethics.",
      blanks: [
        [
          "(26) ----",
          ["who", "which", "whose", "whom", "where"],
          "Mahkûmları niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "although"],
          "Suçlu bulunması ve yedisinin ölüme mahkûm edilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra ilkeleri niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["that", "what", "which", "whose", "where"],
          "'stated that ..., that ...' yapısında ikinci yan cümleyi başlatan bağlaç: 'that'.",
        ],
        [
          "(30) ----",
          ["in", "at", "on", "by", "with"],
          "'in the history of' kalıbı: 'in'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the patients' hearts were still beating, ----.",
      [
        "their brains had permanently stopped working",
        "ventilators are machines",
        "Harvard is a university",
        "the report was in 1968",
        "the committee included doctors, a lawyer, a historian and a theologian from different parts of the university",
      ],
      "'Although' zıtlık ister: hastaların kalpleri hâlâ atıyor olsa da beyinleri kalıcı olarak çalışmayı durdurmuştu.",
    ],
    [
      "----, some of the accused claimed that no clear rules had existed.",
      [
        "In order to defend themselves",
        "Although Nuremberg is in Germany",
        "Unless the court agreed",
        "Since the war had ended",
        "While the judges were preparing the ten principles that later became known around the world",
      ],
      "Kendilerini savunmak için sanıkların bazıları açık kurallar bulunmadığını iddia etti.",
    ],
    [
      "If researchers do not obtain consent, ----.",
      [
        "their studies may be considered unethical",
        "universities are large",
        "patients visit hospitals",
        "journals publish articles",
        "the anaesthetist who wrote the article would have needed to find other examples from different universities",
      ],
      "Birinci tip koşul: araştırmacılar onay almazlarsa çalışmaları etik dışı sayılabilir.",
    ],
    [
      "The committee was set up ----.",
      [
        "because there were too few dialysis machines for all patients",
        "although Seattle is a city",
        "unless patients were young",
        "so that the doctor invented a tube",
        "while journalists from a popular magazine were preparing a long article about the members and their decisions",
      ],
      "Kurul tüm hastalara yetecek kadar diyaliz makinesi olmadığı için kuruldu.",
    ],
    [
      "Not only did the drug make all six volunteers seriously ill, ----.",
      [
        "but it also led to new rules for first trials in humans",
        "and London is a capital",
        "since volunteers were paid",
        "so the drug was new",
        "unless the company had tested it on monkeys at doses that were five hundred times higher",
      ],
      "'Not only ... but also' yapısı tamamlanır: ilaç altı gönüllüyü ağır hasta etmekle kalmadı, insanlarda ilk denemelere ilişkin yeni kurallara da yol açtı.",
    ],
    [
      "Once the documents had been discovered, ----.",
      [
        "the US government apologised",
        "Guatemala is in Central America",
        "archives contain papers",
        "the historian was American",
        "the researchers who had carried out the experiments had also been involved in other studies of the same disease",
      ],
      "Belgeler keşfedildikten sonra ABD hükümeti özür diledi.",
    ],
    [
      "Quinlan's parents went to court ----.",
      [
        "because doctors refused to remove the respirator",
        "although she was young",
        "unless the hospital agreed",
        "so that she was in a coma",
        "while many people across the country were discussing the case in newspapers, on television and in churches",
      ],
      "Quinlan'ın ebeveynleri doktorlar solunum cihazını çıkarmayı reddettiği için mahkemeye gitti.",
    ],
    [
      "Since the doctor operated without the patient's permission, ----.",
      [
        "the court said that her rights had been violated",
        "New York is large",
        "the operation was in 1908",
        "the tumour was small",
        "the judge who wrote the opinion later became a member of the highest court in the United States",
      ],
      "'Since' neden bildirir: doktor hastanın izni olmadan ameliyat ettiği için mahkeme haklarının ihlal edildiğini söyledi.",
    ],
    [
      "Unless therapists warn people who are in danger, ----.",
      [
        "they may be held legally responsible",
        "many people visit therapists",
        "California is a state",
        "therapy can help",
        "the university where the patient was being treated would have needed to change its rules about student counselling",
      ],
      "'Unless' olumsuz koşul: terapistler tehlikedeki kişileri uyarmazlarsa yasal olarak sorumlu tutulabilirler.",
    ],
    [
      "Doctors may prescribe contraception to a girl under sixteen ----.",
      [
        "if she understands the treatment fully",
        "although she is young",
        "unless her school agrees",
        "because Britain is an island",
        "while the mother who brought the case had five daughters and believed that parents should always be informed",
      ],
      "Doktorlar on altı yaşından küçük bir kıza tedaviyi tam olarak anlıyorsa doğum kontrolü reçete edebilir.",
    ],
    [
      "Even though Cowart survived and later led a full life, ----.",
      [
        "he continued to argue that his wishes should have been respected",
        "burns are painful",
        "Texas is large",
        "he became a lawyer",
        "the explosion that injured him had been caused by a leak from a gas pipe beneath the road where he had parked",
      ],
      "'Even though' zıtlık ister: Cowart hayatta kalıp dolu bir yaşam sürse de isteklerine saygı gösterilmesi gerektiğini savunmaya devam etti.",
    ],
  ],
  enTr: [
    [
      "The report proposed a new definition of death based on the loss of all brain function.",
      [
        "Rapor, tüm beyin işlevlerinin kaybına dayanan yeni bir ölüm tanımı önerdi.",
        "Rapor, ölümün yalnızca kalbin durmasıyla tanımlanması gerektiğini savundu.",
        "Beyin işlevlerinin tamamen kaybedildiği durumlarda hastaların yaşamını sürdürmek için yeni yöntemler öneren rapor, doktorlar tarafından memnuniyetle karşılandı.",
        "Rapor, beyin işlevlerini ölçmenin imkânsız olduğunu açıkladı.",
        "Rapor, ölümün hiçbir zaman tanımlanamayacağını söyledi.",
      ],
      "'proposed a new definition of death' 'yeni bir ölüm tanımı önerdi', 'based on the loss of all brain function' 'tüm beyin işlevlerinin kaybına dayanan' karşılığıdır.",
    ],
    [
      "The voluntary consent of the human subject is absolutely essential.",
      [
        "İnsan deneğin gönüllü onayı kesinlikle zorunludur.",
        "İnsan deneğin onayı yalnızca bazı durumlarda gereklidir.",
        "Gönüllü olarak onay veren insan denekler, deneyin sonuçlarından kendileri sorumlu tutulur ve araştırmacılar hiçbir sorumluluk taşımaz.",
        "Denekler, araştırmacılardan onay almak zorundadır.",
        "İnsan denekler deneylere hiç katılamaz.",
      ],
      "'The voluntary consent of the human subject' 'insan deneğin gönüllü onayı', 'is absolutely essential' 'kesinlikle zorunludur' karşılığıdır.",
    ],
    [
      "Many of the studies had been carried out at respected universities and published in leading journals.",
      [
        "Çalışmaların çoğu saygın üniversitelerde yapılmış ve önde gelen dergilerde yayımlanmıştı.",
        "Çalışmaların hiçbiri yayımlanmamıştı.",
        "Önde gelen dergilerde yayımlanmak isteyen araştırmacılar, saygın üniversitelerin etik kurallarına uymak zorunda olduklarından çalışmalarını yurt dışında yaptı.",
        "Çalışmalar yalnızca küçük hastanelerde yapılmıştı.",
        "Üniversiteler çalışmaların yayımlanmasını yasakladı.",
      ],
      "'Many of the studies had been carried out at respected universities' 'çalışmaların çoğu saygın üniversitelerde yapılmıştı', 'and published in leading journals' 've önde gelen dergilerde yayımlanmıştı' karşılığıdır.",
    ],
    [
      "The committee's decisions were based partly on patients' social worth.",
      [
        "Kurulun kararları kısmen hastaların toplumsal değerine dayanıyordu.",
        "Kurulun kararları yalnızca tıbbi bilgilere dayanıyordu.",
        "Hastaların toplumsal değerini dikkate almayan kurul, kararlarını tamamen kurayla vererek tüm başvuranlara eşit şans tanıdığını açıkladı.",
        "Hastalar kurulun kararlarını belirledi.",
        "Kurul hiçbir karar vermedi.",
      ],
      "'The committee's decisions were based partly' 'kurulun kararları kısmen dayanıyordu', 'on patients' social worth' 'hastaların toplumsal değerine' karşılığıdır.",
    ],
    [
      "The dose given to the volunteers was far lower than the doses tested on animals.",
      [
        "Gönüllülere verilen doz, hayvanlarda test edilen dozlardan çok daha düşüktü.",
        "Gönüllülere verilen doz, hayvanlarda test edilen dozlardan çok daha yüksekti.",
        "Hayvanlarda test edilen dozların gönüllüler için çok yüksek olduğuna karar veren araştırmacılar, denemeyi başlatmadan önce yeni hayvan deneyleri yaptı.",
        "Gönüllüler ilacı hayvanlarla birlikte aldı.",
        "İlaç hayvanlarda hiç test edilmemişti.",
      ],
      "'The dose given to the volunteers' 'gönüllülere verilen doz', 'was far lower than the doses tested on animals' 'hayvanlarda test edilen dozlardan çok daha düşüktü' karşılığıdır.",
    ],
    [
      "The case raised questions about the right of patients to refuse treatment.",
      [
        "Dava, hastaların tedaviyi reddetme hakkı konusunda soruları gündeme getirdi.",
        "Dava, hastaların tedaviyi reddetme hakkının olmadığını kesin olarak kanıtladı.",
        "Tedaviyi reddetme hakkı bulunan hastalar, davanın sonucunu beklemeden hastaneden ayrılarak tedavilerini başka bir ülkede sürdürmeyi tercih etti.",
        "Dava, tedavinin ücretsiz olması gerektiğini söyledi.",
        "Hastalar davayı hiç duymadı.",
      ],
      "'raised questions about' 'konusunda soruları gündeme getirdi', 'the right of patients to refuse treatment' 'hastaların tedaviyi reddetme hakkı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Testler tanıyı doğrulamak için yirmi dört saat sonra tekrarlanacaktı.",
      [
        "The tests were to be repeated after twenty-four hours to confirm the diagnosis.",
        "The tests were carried out only once to save time.",
        "The diagnosis was confirmed twenty-four hours before the tests were carried out, so it was not necessary to repeat them.",
        "The tests confirmed that the patients were alive.",
        "The tests lasted twenty-four days.",
      ],
      "'tanıyı doğrulamak için' 'to confirm the diagnosis', 'yirmi dört saat sonra tekrarlanacaktı' 'were to be repeated after twenty-four hours' karşılığıdır.",
    ],
    [
      "Mahkeme, insan deneyleri için on ilke belirledi.",
      [
        "The court set out ten principles for experiments on humans.",
        "The court rejected all principles for experiments on humans.",
        "The court considered ten different cases of human experimentation, but it decided not to set out any principles because it lacked the authority to do so.",
        "Ten courts were set up to judge experiments.",
        "Humans set out principles for the court.",
      ],
      "'insan deneyleri için' 'for experiments on humans', 'on ilke belirledi' 'set out ten principles' karşılığıdır.",
    ],
    [
      "Makale, araştırmacılar arasında büyük bir tartışmaya yol açtı.",
      [
        "The article caused a major debate among researchers.",
        "Researchers ignored the article completely.",
        "The article was written after a major debate among researchers had already led to new rules on the protection of patients taking part in studies.",
        "The debate was about a different article.",
        "Researchers wrote the article together.",
      ],
      "'araştırmacılar arasında' 'among researchers', 'büyük bir tartışmaya yol açtı' 'caused a major debate' karşılığıdır.",
    ],
    [
      "Kurul, yedi sıradan yurttaştan oluşuyordu.",
      [
        "The committee was made up of seven ordinary citizens.",
        "The committee was made up of seven doctors.",
        "The committee had been planned to include seven ordinary citizens, but in the end only doctors agreed to serve on it because the decisions were so difficult.",
        "Seven committees were formed.",
        "Ordinary citizens refused to form a committee.",
      ],
      "'yedi sıradan yurttaştan' 'of seven ordinary citizens', 'kurul oluşuyordu' 'the committee was made up' karşılığıdır.",
    ],
    [
      "Gönüllülerin hepsi aynı anda ilacı aldı.",
      [
        "All the volunteers received the drug at the same time.",
        "The volunteers received the drug one after another.",
        "The volunteers were supposed to receive the drug at the same time, but two of them arrived late and were given a placebo instead.",
        "None of the volunteers received the drug.",
        "The drug was given to the researchers.",
      ],
      "'Gönüllülerin hepsi' 'all the volunteers', 'aynı anda ilacı aldı' 'received the drug at the same time' karşılığıdır.",
    ],
    [
      "Kadın, solunum cihazı çıkarıldıktan sonra dokuz yıl daha yaşadı.",
      [
        "The woman lived for another nine years after the respirator was removed.",
        "The woman died immediately after the respirator was removed.",
        "The woman had been kept on a respirator for nine years before her parents asked the court for permission to have it removed.",
        "The respirator was used for nine days.",
        "The woman never used a respirator.",
      ],
      "'solunum cihazı çıkarıldıktan sonra' 'after the respirator was removed', 'dokuz yıl daha yaşadı' 'lived for another nine years' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In June 1966, Henry Beecher, a professor of anaesthesia at Harvard Medical School, published an article in the New England Journal of Medicine titled 'Ethics and Clinical Research'. In it, he described twenty-two studies, all published in respected journals or carried out at leading institutions, in which patients had been exposed to serious risks, often without being told or asked for their consent. In one example, patients with a serious infection were deliberately denied penicillin, a proven treatment, so that researchers could study other methods; in another, mentally disabled children were infected with hepatitis. Beecher did not name the researchers, but he argued that such practices were widespread and that they arose not from bad intentions but from researchers' enthusiasm for knowledge, combined with a lack of clear rules. He insisted that informed consent was essential, although he admitted that it was often difficult to obtain in a meaningful way, and that the most reliable safeguard was the presence of an 'intelligent, informed, conscientious, compassionate, responsible investigator'. The article caused controversy, and some colleagues were angry that he had criticised the profession publicly. However, it contributed to growing pressure for reform, and over the following years the United States introduced rules requiring independent review of research involving human subjects.",
      questions: [
        [
          "According to the passage, the studies Beecher described ----.",
          [
            "had been carried out at prestigious institutions",
            "were all carried out abroad",
            "had never been published",
            "had been approved by independent committees that included patients and members of the public",
            "involved only animals",
          ],
          "Metne göre hepsi saygın dergilerde yayımlanmış ya da önde gelen kurumlarda yapılmıştı.",
        ],
        [
          "Beecher believed that unethical research mainly resulted from ----.",
          [
            "researchers' eagerness for knowledge without proper rules",
            "researchers' desire to harm patients",
            "a lack of funding",
            "pressure from patients who wanted to take part in studies of new treatments",
            "government orders",
          ],
          "Kötü niyetten değil araştırmacıların bilgi tutkusu ile açık kuralların yokluğundan kaynaklandığını savundu.",
        ],
        [
          "It can be understood from the passage that Beecher's article ----.",
          [
            "helped to bring about changes in research rules",
            "was welcomed by all his colleagues",
            "named every researcher",
            "led to the immediate closure of several medical schools in the United States",
            "was ignored",
          ],
          "Reform baskısına katkıda bulundu ve bağımsız inceleme zorunlu hale geldi.",
        ],
      ],
    },
    {
      text:
        "In 1960, Belding Scribner, a doctor in Seattle, invented a device that allowed patients with kidney failure to be connected repeatedly to a dialysis machine, making long-term treatment possible for the first time. In 1962, the Seattle Artificial Kidney Center opened, but it had only a few machines, and there were many more patients who needed treatment than could be accommodated. To decide who would receive dialysis, and therefore who would live, the centre set up an admissions committee consisting of seven anonymous members of the public, including a lawyer, a minister, a housewife and a banker. Doctors first excluded patients considered medically unsuitable, and the committee then chose among the remaining candidates. In making their decisions, members considered factors such as age, marital status, number of children, income, occupation and 'potential for future contribution' to society. In 1962, a magazine published a long article about the committee, which journalists nicknamed the 'God Committee'. The article provoked strong criticism: many argued that judging the value of people's lives according to their social status was deeply unfair and favoured middle-class people. The controversy is often regarded as one of the founding moments of modern bioethics. In 1972, the US Congress agreed to pay for dialysis for almost everyone who needed it, which largely ended the need for such committees.",
      questions: [
        [
          "According to the passage, the committee was necessary because ----.",
          [
            "there were not enough machines for all patients",
            "doctors refused to make decisions",
            "the treatment was dangerous",
            "patients had asked members of the public to choose who should be treated first",
            "Scribner was ill",
          ],
          "Metne göre tedaviye ihtiyacı olan hasta sayısı makine sayısından çok fazlaydı.",
        ],
        [
          "Critics objected to the committee mainly because ----.",
          [
            "it judged people's worth by their social position",
            "its members were doctors",
            "it met in secret",
            "it chose patients who were medically unsuitable for the treatment",
            "it was too slow",
          ],
          "İnsanların yaşamlarının değerini toplumsal statülerine göre yargılamak adaletsiz bulundu.",
        ],
        [
          "It can be understood from the passage that the decision by Congress in 1972 ----.",
          [
            "made such selection committees largely unnecessary",
            "created the God Committee",
            "banned dialysis",
            "required every hospital to set up a committee of ordinary citizens to choose patients",
            "reduced the number of machines",
          ],
          "Diyaliz neredeyse herkes için karşılanınca bu tür kurullara gerek kalmadı.",
        ],
      ],
    },
    {
      text:
        "In April 1975, Karen Ann Quinlan, a twenty-one-year-old woman in New Jersey, stopped breathing after taking a combination of alcohol and sedatives at a party. She was resuscitated but suffered severe brain damage and fell into what doctors described as a persistent vegetative state: her eyes sometimes opened, but she showed no awareness of her surroundings. She was kept alive with a mechanical respirator and fed through a tube. After several months, her parents, who were devout Catholics, asked the doctors to remove the respirator and allow her to die naturally, a decision they believed was supported by their church's teaching. The doctors and the hospital refused, fearing that they might be prosecuted for murder. The family went to court, and in 1976 the New Jersey Supreme Court ruled in their favour, finding that Karen's right to privacy included the right to refuse treatment, and that her father, as her guardian, could exercise that right on her behalf. Unexpectedly, when the respirator was gradually removed, she continued to breathe on her own, and she lived for nine more years in a nursing home, fed through a tube, until her death in 1985. The case attracted worldwide attention and led many hospitals to establish ethics committees and encouraged people to write documents, often called living wills, stating their wishes about treatment.",
      questions: [
        [
          "According to the passage, the doctors refused the parents' request because ----.",
          [
            "they feared criminal charges",
            "they disagreed with the church",
            "Karen was recovering",
            "the hospital had already decided to transfer her to a nursing home in another state",
            "the parents had no right to ask",
          ],
          "Metne göre cinayetle yargılanmaktan korkuyorlardı.",
        ],
        [
          "It can be understood from the passage that the court's ruling ----.",
          [
            "allowed the father to make the decision for his daughter",
            "required the hospital to continue treatment",
            "was overturned",
            "banned the use of respirators for patients in a persistent vegetative state",
            "was made in 1985",
          ],
          "Babasının vasi olarak onun adına tedaviyi reddetme hakkını kullanabileceğine hükmetti.",
        ],
        [
          "The passage suggests that, in the years that followed, the case resulted in ----.",
          [
            "an increase in written instructions about end-of-life care",
            "the closure of nursing homes",
            "a ban on sedatives",
            "a decline in the number of hospitals that were willing to treat patients with brain damage",
            "new laws on alcohol",
          ],
          "İnsanları tedaviyle ilgili isteklerini belirten 'yaşam vasiyeti' yazmaya teşvik etti.",
        ],
      ],
    },
    {
      text:
        "On 13 March 2006, eight healthy young men took part in the first human trial of a new drug, TGN1412, at a private research unit at Northwick Park Hospital in London. The drug, an antibody designed to stimulate certain cells of the immune system, was being developed as a treatment for leukaemia and autoimmune diseases. Tests in animals, including monkeys, had shown no serious problems, and the volunteers were given a dose about five hundred times lower than the highest dose tested on animals. Six of the men received the drug, and two received a placebo. The six were given their doses at intervals of about ten minutes. Within an hour or so, they began to suffer severe headaches, back pain and fever; their immune systems had reacted violently, releasing huge quantities of inflammatory substances. All six were moved to intensive care, where several suffered multiple organ failure. They survived, but some suffered long-term health problems. Investigations found that the human immune system reacted to the drug much more strongly than that of the monkeys, a difference that the animal tests had not revealed. An expert group recommended changes to the way first trials in humans are carried out, including calculating starting doses more cautiously and giving new drugs of this kind to one volunteer at a time, with sufficient intervals between them to observe any reactions.",
      questions: [
        [
          "According to the passage, the dose given to the volunteers was based partly on ----.",
          [
            "the results of animal tests",
            "a previous human trial",
            "the volunteers' weight",
            "the wishes of the volunteers, who had asked for a low dose before agreeing to take part",
            "a calculation by the hospital",
          ],
          "Metne göre hayvanlarda test edilen en yüksek dozdan yaklaşık beş yüz kat düşüktü.",
        ],
        [
          "It can be understood from the passage that the animal tests ----.",
          [
            "failed to predict the human reaction",
            "showed serious side effects",
            "were not carried out",
            "were performed on human cells that had been grown in the laboratory",
            "used higher doses on humans",
          ],
          "İnsan bağışıklık sisteminin maymunlarınkinden çok daha güçlü tepki verdiği hayvan deneylerinde görülmemişti.",
        ],
        [
          "One recommendation made after the trial was that ----.",
          [
            "volunteers should receive new drugs one at a time",
            "animal tests should be stopped",
            "placebos should not be used",
            "all volunteers in a trial should receive their doses together so that results can be compared",
            "trials should be held in public hospitals only",
          ],
          "Bu tür yeni ilaçların gönüllülere aralıklarla tek tek verilmesi önerildi.",
        ],
      ],
    },
    {
      text:
        "In 2010, Susan Reverby, an American historian who had written a book about a notorious syphilis study in Alabama, was examining the papers of John Cutler, a doctor of the US Public Health Service, when she discovered records of experiments carried out in Guatemala between 1946 and 1948. With the cooperation of Guatemalan officials, American researchers had deliberately infected around 1,300 people, including prisoners, soldiers, psychiatric patients and sex workers, with syphilis, gonorrhoea and other sexually transmitted diseases, in order to study how the infections spread and whether penicillin could prevent them. The subjects were not informed about the purpose of the research or asked for their consent, and many did not receive adequate treatment; dozens died during the following years. The experiments took place at the same time as the trial of Nazi doctors in Nuremberg, where the principle of voluntary consent was being set out. When Reverby's findings were published, the US government formally apologised to Guatemala, and President Barack Obama asked a presidential commission to investigate. The commission concluded in 2011 that the researchers had known that their actions were unethical and had tried to keep them secret. Victims and their families later attempted to sue the institutions that had funded the research.",
      questions: [
        [
          "According to the passage, the Guatemala experiments came to light when ----.",
          [
            "a historian examined a doctor's papers",
            "a victim complained",
            "the Guatemalan government reported them",
            "a journalist found a report that had been published by the Public Health Service in 1948",
            "the Nuremberg trial began",
          ],
          "Metne göre bir tarihçi bir doktorun belgelerini incelerken ortaya çıktı.",
        ],
        [
          "The passage mentions the Nuremberg trial in order to emphasise that ----.",
          [
            "the experiments occurred while consent was being established as a principle",
            "the researchers were German",
            "the experiments were legal",
            "the researchers in Guatemala were later put on trial in the same court as the Nazi doctors",
            "penicillin was invented then",
          ],
          "Deneyler gönüllü onay ilkesinin belirlendiği dönemde yapılmıştı; bu çelişkiyi vurgular.",
        ],
        [
          "It can be understood from the passage that the presidential commission found that the researchers ----.",
          [
            "were aware that they were acting wrongly",
            "had followed the rules of the time",
            "had obtained consent",
            "had been forced to carry out the experiments by the government of Guatemala",
            "had cured all the subjects",
          ],
          "Komisyon araştırmacıların eylemlerinin etik dışı olduğunu bildiğini ve gizlemeye çalıştığını belirledi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1908, a woman named Mary Schloendorff agreed to be examined under anaesthesia in a New York hospital but explicitly refused to consent to surgery. ---- In 1914, ruling on her case, the judge Benjamin Cardozo wrote that every adult of sound mind has the right to decide what shall be done with his or her own body.",
      [
        "While she was unconscious, however, surgeons removed a tumour, and she later suffered serious complications.",
        "New York has many hospitals.",
        "Anaesthesia was new at the time.",
        "The hospital argued that it could not be held responsible for the actions of its doctors, since they were not its employees but independent professionals who used its facilities.",
        "Judges wear robes.",
      ],
      "Boşluktan sonra yargıcın kişinin bedeni üzerindeki hakkını vurgulaması gelir; boşluğa hasta bilinçsizken cerrahların onun rızası olmadan ameliyat ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1969, a young man studying at Berkeley told his university therapist that he intended to kill a young woman, Tatiana Tarasoff. ---- In 1976, the California Supreme Court ruled that therapists have a duty to protect people who are threatened by their patients, even if this means breaking confidentiality.",
      [
        "The therapist informed the campus police, but no one warned the woman, and the student later killed her.",
        "California is a large state.",
        "Many students see therapists.",
        "The student had met the woman at a folk dancing class, and he had become obsessed with her after she made it clear that she did not wish to have a relationship with him.",
        "Universities have police forces.",
      ],
      "Boşluktan sonra mahkemenin terapistlerin tehdit edilen kişileri koruma yükümlülüğüne hükmettiği anlatılır; boşluğa kadının uyarılmadığını ve öldürüldüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "In the early 1980s, Victoria Gillick, a British mother of ten, went to court to stop doctors from giving contraceptive advice to girls under sixteen without their parents' consent. ---- This principle, known as 'Gillick competence', is now widely used to judge whether children can consent to medical treatment.",
      [
        "In 1985, the House of Lords ruled against her, deciding that a child who fully understands a proposed treatment can consent to it.",
        "Britain has many courts.",
        "Mothers care for their children.",
        "Gillick had been supported by several religious groups, and her case was widely discussed in newspapers and on television throughout the years that it took to reach a final decision.",
        "Sixteen is a common age limit.",
      ],
      "Boşluktan sonra 'This principle' ifadesi gelir; boşluğa Lordlar Kamarası'nın tedaviyi tam anlayan bir çocuğun onay verebileceğine karar verdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1973, Dax Cowart, a young man in Texas, suffered severe burns over most of his body in a gas explosion that killed his father. ---- He survived and later became a lawyer, but he always maintained that his right to refuse treatment had been violated.",
      [
        "During more than a year of extremely painful treatment, he repeatedly asked to be allowed to die, but his doctors and mother refused.",
        "Texas is a large state.",
        "Burns can be very painful.",
        "Before the accident, Cowart had been a pilot in the air force and a talented athlete, and he had planned to become a commercial airline pilot.",
        "Gas is used for heating.",
      ],
      "Boşluktan sonra tedaviyi reddetme hakkının ihlal edildiğini savunduğu anlatılır; boşluğa tedavi sırasında defalarca ölmesine izin verilmesini istediğini ama reddedildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1964, the World Medical Association adopted the Declaration of Helsinki, a set of ethical principles for medical research involving human subjects. ---- It has been revised several times, most recently to address issues such as the use of placebos and research in poorer countries.",
      [
        "Unlike the Nuremberg Code, which was written by judges, it was drawn up by doctors themselves.",
        "Helsinki is the capital of Finland.",
        "Many doctors attend conferences.",
        "The organisation was founded in 1947, after the Second World War, with the aim of promoting high standards of medical ethics and education among doctors around the world.",
        "Research is expensive.",
      ],
      "Boşluk bildirgenin özelliğini Nürnberg Kodu ile karşılaştıran bir cümle gerektirir; boşluğa yargıçlar yerine doktorların kendilerinin hazırladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1959, the British scientists William Russell and Rex Burch proposed principles for the humane use of animals in research. ---- Known as the 'Three Rs', these principles now form the basis of laws on animal research in many countries.",
      [
        "They argued that researchers should replace animals where possible, reduce the number used and refine methods to minimise suffering.",
        "Animals are used in many experiments.",
        "Britain has many universities.",
        "Russell was a zoologist and Burch a microbiologist, and they had been asked by an animal welfare organisation to study the ethical problems raised by laboratory experiments.",
        "Many people keep pets.",
      ],
      "Boşluktan sonra 'Three Rs' adı gelir; boşluğa hayvanların yerine başka yöntemler kullanılması, sayılarının azaltılması ve yöntemlerin iyileştirilmesi gerektiğini savunduklarını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Many medical schools hold a 'white coat ceremony' for new students.",
        "Students put on their first white coats and recite a professional oath.",
        "Cotton is a common material for clothing.",
        "The ceremony was introduced in the United States in 1993.",
        "It is intended to emphasise the importance of compassion and professionalism from the beginning of training.",
      ],
      odd: 2,
      why: "Parça tıp fakültelerindeki beyaz önlük törenini anlatır. Pamuğun giysiler için yaygın bir malzeme olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1948, the World Medical Association adopted the Declaration of Geneva, a modern version of the Hippocratic Oath.",
        "In it, doctors promise to respect the autonomy and dignity of their patients.",
        "Geneva is home to many international organisations.",
        "The declaration has been updated several times, most recently in 2017.",
        "Many medical schools now use it in graduation ceremonies.",
      ],
      odd: 2,
      why: "Parça Cenevre Bildirgesi'ni anlatır. Cenevre'nin pek çok uluslararası kuruluşa ev sahipliği yaptığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Research ethics committees review proposed studies before they begin.",
        "Their members usually include doctors, scientists and members of the public.",
        "They check that participants will be properly informed and that risks are reasonable.",
        "Many hospitals have large car parks.",
        "Studies cannot start without their approval.",
      ],
      odd: 3,
      why: "Parça araştırma etik kurullarının işlevini anlatır. Pek çok hastanenin büyük otoparkları olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Children cannot usually give legal consent to take part in research.",
        "Instead, their parents give permission on their behalf.",
        "Researchers are also expected to ask for the child's agreement, known as assent.",
        "Many children enjoy science lessons.",
        "If an older child refuses, the child's wishes should normally be respected.",
      ],
      odd: 3,
      why: "Parça çocukların araştırmaya katılımında onay sürecini anlatır. Pek çok çocuğun fen derslerinden hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In some trials, patients receive 'sham' surgery, in which an incision is made but the real procedure is not carried out.",
        "Such trials have shown that some common operations are no more effective than the sham procedure.",
        "Surgeons wear masks and gloves.",
        "Critics argue that exposing patients to the risks of surgery without any benefit is unethical.",
        "Supporters reply that it is the only way to test whether some operations really work.",
      ],
      odd: 2,
      why: "Parça sahte ameliyatlı denemeleri ve etik tartışmayı anlatır. Cerrahların maske ve eldiven taktığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Patients have the right to see the information recorded about them in their medical files.",
        "Mountains are popular with hikers.",
        "In many countries, this right is guaranteed by law.",
        "Doctors may withhold information only in exceptional circumstances.",
        "Increasingly, patients can view their records online.",
      ],
      odd: 1,
      why: "Parça hastaların tıbbi kayıtlarına erişim hakkını anlatır. Dağların yürüyüşçüler arasında popüler olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
