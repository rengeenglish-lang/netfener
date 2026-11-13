import type { YokdilDeneme } from "./types";

export const SAGLIK_42: YokdilDeneme = {
  no: 42,
  field: "saglik",
  vocab: [
    [
      "The plague spread rapidly along the railway, carried by workers who were ---- home for the holidays.",
      ["travelling", "staying", "building", "selling", "cleaning"],
      "Vebanın tatil için eve 'yolculuk eden' (travelling) işçiler tarafından demiryolu boyunca hızla yayıldığı anlatılır.",
    ],
    [
      "The doctor designed a simple mask made from ---- of cotton and gauze.",
      ["layers", "bottles", "drops", "slices", "rolls"],
      "Doktorun pamuk ve gazlı bez 'katmanlarından' (layers) basit bir maske tasarladığı anlatılır.",
    ],
    [
      "The boy was ---- from his school after he was diagnosed with the virus.",
      ["banned", "graduated", "rewarded", "elected", "transferred"],
      "Çocuğun virüs teşhisi konduktan sonra okulundan 'men edildiği' (banned) anlatılır.",
    ],
    [
      "For years, the authorities ---- that the deaths had been caused by contaminated meat.",
      ["claimed", "denied", "forgot", "proved", "regretted"],
      "Yetkililerin yıllarca ölümlerin kirli etten kaynaklandığını 'iddia ettiği' (claimed) anlatılır.",
    ],
    [
      "Genetic analysis showed that the cholera strain was almost ---- to one found in South Asia.",
      ["identical", "opposite", "unrelated", "harmless", "inferior"],
      "Genetik analizin kolera suşunun Güney Asya'da bulunan bir suşla neredeyse 'aynı' (identical) olduğunu gösterdiği anlatılır.",
    ],
    [
      "To stop the virus spreading, the government decided to ---- all the chickens in the city.",
      ["get rid of", "look after", "take after", "put up with", "run into"],
      "Virüsün yayılmasını durdurmak için hükümetin kentteki tüm tavuklardan 'kurtulmaya' (get rid of) karar verdiği anlatılır.",
    ],
  ],
  grammar: [
    [
      "Wu ---- medicine at Cambridge before he was asked to lead the response to the plague.",
      ["had studied", "studies", "has studied", "will study", "is studying"],
      "Veba müdahalesine liderlik etmesi istenmeden önce tamamlanmış eylem: 'had studied'.",
    ],
    [
      "By the time the epidemic ended in 1911, it ---- around sixty thousand people.",
      ["had killed", "kills", "will kill", "is killing", "has been killed"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had killed'.",
    ],
    [
      "If the sewage had been treated properly, the epidemic ----.",
      ["might never have started", "will never start", "never starts", "had never started", "is never starting"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might never have started'.",
    ],
    [
      "The boy ---- the virus through a contaminated blood product used to treat his haemophilia.",
      ["was infected with", "infected with", "has infected", "is infecting", "infects"],
      "Çocuk virüsle enfekte olmuştur; edilgen geçmiş zaman: 'was infected with'.",
    ],
    [
      "---- the government denied any leak for years, the truth emerged in 1992.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Hükümetin sızıntıyı inkâr etmesi ile gerçeğin ortaya çıkması zıttır: 'Although'.",
    ],
    [
      "The workers, ---- factory was downwind of the laboratory, were among the first to fall ill.",
      ["whose", "which", "who", "whom", "where"],
      "İşçilerin fabrikası; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The virus killed six of the eighteen people it infected, ---- alarmed health officials around the world.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer a tampon was left in place, ---- the risk of infection became.",
      ["the greater", "the greatest", "greater than", "more great", "so great"],
      "'The longer ..., the greater ...' paralel yapısı: 'the greater'.",
    ],
    [
      "Not until 2016 ---- the United Nations accept some responsibility for the epidemic.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Medical workers wore masks ---- they would not breathe in the infected droplets.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The authorities ordered the markets ---- for cleaning and disinfection.",
      ["to close", "closing", "close", "closed", "to closing"],
      "'order sb to do sth' kalıbı: 'to close'.",
    ],
    [
      "The disease is thought ---- by eating the brains of dead relatives during funeral ceremonies.",
      ["to have been spread", "spreading", "to spread", "spread", "to be spreading"],
      "Geçmişe ait edilgen durum için mastarın geçmiş edilgen biçimi: 'to have been spread'.",
    ],
    [
      "The outbreak was so severe ---- hospitals ran out of beds.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Health experts insisted that the new drug ---- available to all patients regardless of cost.",
      ["be made", "is made", "was made", "to be made", "making"],
      "'insist that' sonrası yalın fiil (subjunctive), edilgen: 'be made'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the autumn of 1910, an epidemic of pneumonic plague, a form of the disease that infects the lungs and spreads through droplets in the air, broke out in Manchuria, in north-eastern China. It spread rapidly along the new railway lines, {1} thousands of migrant workers were travelling home for the New Year. The Chinese government asked Wu Lien-teh, a young doctor who had been born in Malaya and trained at Cambridge, to lead the response. Arriving in the city of Harbin in December, Wu carried out a post-mortem examination on a victim, {2} was then highly unusual in China, and confirmed that the disease was plague. He concluded that, unlike the more common form spread by fleas, it was passing directly from person to person, and he designed a simple mask made of layers of cotton and gauze {3} medical workers and the public could wear. Some foreign doctors doubted that masks were necessary; one French doctor who refused to wear one died of the disease within days. Wu also persuaded the authorities to impose quarantine, to restrict rail travel and, {4} the frozen ground made burial impossible, to cremate thousands of bodies, a measure that went against strong cultural traditions. By the spring of 1911, the epidemic was over, although it had killed some sixty thousand people. Wu went on to modernise public health in China, and he is often credited as one of the pioneers of the face mask {5} is still used to prevent the spread of respiratory infections.",
      blanks: [
        [
          "(21) ----",
          ["as", "unless", "although", "until", "so that"],
          "Binlerce göçmen işçinin eve dönmekte olduğu 'sırada': 'as'.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra otopsi yapılmasının tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(23) ----",
          ["that", "what", "whose", "where", "whom"],
          "Maskeyi niteleyen ve nesne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(24) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Donmuş toprağın gömmeyi imkânsız kılması yakma kararının nedenidir: 'because'.",
        ],
        [
          "(25) ----",
          ["that", "what", "whose", "where", "whom"],
          "Yüz maskesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
      ],
    },
    {
      text:
        "In December 1984, Ryan White, a thirteen-year-old boy from Kokomo, Indiana, was diagnosed with AIDS. He had haemophilia, an inherited condition in which the blood does not clot properly, and he had been infected with HIV through a contaminated blood product {1} he had received as part of his treatment. Doctors told his family that he had about six months to live. When Ryan wanted to return to school the following year, many parents and teachers objected, fearing that he might infect other children, {2} medical experts explained that HIV could not be spread through ordinary contact. The school board refused to admit him, and his family began a long legal battle. Although he eventually won the right to attend, he faced hostility: some families withdrew their children from the school, he was insulted in the street, and a bullet was fired through the window of his family's home. {3}, Ryan spoke calmly in interviews about his illness, {4} helped to change public attitudes towards people with HIV. In 1987 the family moved to the town of Cicero, Indiana, where he was welcomed by students who had been educated about the disease. Ryan lived for more than five years after his diagnosis and died in April 1990, a month before his high-school graduation. Later that year, the United States Congress passed a law named {5} him, which provides funding for the care of people with HIV who have low incomes.",
      blanks: [
        [
          "(26) ----",
          ["that", "what", "whose", "where", "whom"],
          "Kan ürününü niteleyen ve nesne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(27) ----",
          ["although", "because", "unless", "so that", "once"],
          "Velilerin korkması ile uzmanların virüsün sıradan temasla bulaşmadığını açıklaması zıttır: 'although'.",
        ],
        [
          "(28) ----",
          ["Despite this", "Because of this", "Thanks to this", "In addition", "As a result"],
          "Düşmanlığa 'rağmen' sakin konuşması: 'Despite this'.",
        ],
        [
          "(29) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki eylemin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(30) ----",
          ["after", "before", "from", "with", "against"],
          "'be named after sb' kalıbı: 'after'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although some foreign doctors doubted the value of masks, ----.",
      [
        "Wu insisted that they be worn",
        "Harbin is in Manchuria",
        "plague is caused by bacteria",
        "the railway was new",
        "thousands of migrant workers were travelling home along the railway lines to celebrate the New Year",
      ],
      "'Although' zıtlık ister: bazı yabancı doktorlar maskelerin değerinden şüphe etse de Wu takılmaları konusunda ısrar etti.",
    ],
    [
      "----, other parents feared that Ryan could infect their children.",
      [
        "Because little was then understood about HIV",
        "Although Indiana is in the Midwest",
        "Unless the school agreed",
        "Since Ryan was thirteen",
        "While Ryan's family was preparing to move to another town where the students had been taught about the disease",
      ],
      "O dönemde HIV hakkında çok az şey bilindiği için diğer veliler Ryan'ın çocuklarına bulaştırabileceğinden korkuyordu.",
    ],
    [
      "If the wind had been blowing in a different direction, ----.",
      [
        "the town might have been spared",
        "anthrax is a bacterium",
        "the laboratory was secret",
        "the Soviet Union was large",
        "the government would have needed to find other explanations for the illnesses that were reported to doctors",
      ],
      "Üçüncü tip koşul: rüzgâr farklı yönde esseydi kasaba kurtulabilirdi.",
    ],
    [
      "Doctors linked the cases to tampons ----.",
      [
        "because most victims were menstruating women",
        "although the bacteria were common",
        "unless the products were new",
        "so that the company withdrew them",
        "while some of the patients had been admitted to hospitals in several different states with very high fevers",
      ],
      "Doktorlar kurbanların çoğu adet gören kadınlar olduğu için vakaları tamponlarla ilişkilendirdi.",
    ],
    [
      "Not only did the epidemic kill thousands of people, ----.",
      [
        "but it also damaged trust in the peacekeepers",
        "and Haiti is a Caribbean country",
        "since cholera spreads in water",
        "so the earthquake was severe",
        "unless the soldiers had been tested for the disease before they arrived from their home country",
      ],
      "'Not only ... but also' yapısı tamamlanır: salgın binlerce kişiyi öldürmekle kalmadı, barış güçlerine güveni de zedeledi.",
    ],
    [
      "Once the virus had been identified, ----.",
      [
        "researchers could begin developing treatments",
        "the liver is a large organ",
        "blood is red",
        "the company was in California",
        "many people who had received blood transfusions before the discovery had already been infected without knowing it",
      ],
      "Virüs tanımlandıktan sonra araştırmacılar tedavi geliştirmeye başlayabildi.",
    ],
    [
      "The government killed all the chickens in Hong Kong ----.",
      [
        "to prevent the virus from spreading to people",
        "although chickens are popular",
        "unless the farmers agreed",
        "because the markets were large",
        "while scientists in several countries were comparing the virus with the strain that had caused the 1918 pandemic",
      ],
      "Hükümet virüsün insanlara yayılmasını önlemek için Hong Kong'daki tüm tavukları öldürdü.",
    ],
    [
      "Since the virus found in the monkeys did not make humans ill, ----.",
      [
        "the outbreak caused no human deaths",
        "monkeys live in forests",
        "Reston is near Washington",
        "the laboratory was large",
        "the story of the outbreak was later told in a best-selling book that frightened many readers",
      ],
      "'Since' neden bildirir: maymunlarda bulunan virüs insanları hasta etmediği için salgın insan ölümüne yol açmadı.",
    ],
    [
      "Unless the funeral practices had changed, ----.",
      [
        "kuru would have continued to spread",
        "Papua New Guinea is mountainous",
        "the disease affects the brain",
        "the Fore people are farmers",
        "the scientist who studied the disease would not have been awarded the Nobel Prize in medicine",
      ],
      "'Unless' olumsuz koşul: cenaze uygulamaları değişmeseydi kuru yayılmaya devam ederdi.",
    ],
    [
      "The study linking the vaccine to autism was retracted ----.",
      [
        "because its data had been falsified",
        "although it was published",
        "unless parents complained",
        "so that the journal was famous",
        "while vaccination rates in several countries had already fallen and outbreaks of measles had begun to occur",
      ],
      "Aşıyı otizmle ilişkilendiren çalışma verileri tahrif edildiği için geri çekildi.",
    ],
    [
      "Even though the first cases were birds, ----.",
      [
        "the virus soon infected people",
        "crows are intelligent",
        "New York is a large city",
        "mosquitoes bite at night",
        "zoo staff noticed that several exotic birds in their collection had died suddenly during the hot summer",
      ],
      "'Even though' zıtlık ister: ilk vakalar kuşlarda görülse de virüs kısa sürede insanları da enfekte etti.",
    ],
  ],
  enTr: [
    [
      "The disease cannot be passed directly from one person to another.",
      [
        "Hastalık bir kişiden diğerine doğrudan bulaşamaz.",
        "Hastalık yalnızca bir kişiden diğerine doğrudan bulaşır.",
        "Bir kişiden diğerine doğrudan bulaşan hastalık, bu nedenle kalabalık yerlerde çok hızlı yayılarak kısa sürede binlerce kişiyi etkileyebilir.",
        "Hastalık, kişiler arasında hiç görülmez.",
        "Hastalık, yalnızca hayvanlardan insanlara bulaşmaz.",
      ],
      "'cannot be passed directly' 'doğrudan bulaşamaz', 'from one person to another' 'bir kişiden diğerine' karşılığıdır.",
    ],
    [
      "Medical experts explained that the virus could not be spread through ordinary contact.",
      [
        "Tıp uzmanları, virüsün sıradan temas yoluyla yayılamayacağını açıkladı.",
        "Tıp uzmanları, virüsün yalnızca sıradan temas yoluyla yayıldığını açıkladı.",
        "Sıradan temasla yayılan virüs hakkında bilgi veren tıp uzmanları, insanların okullarda ve iş yerlerinde birbirinden uzak durması gerektiğini söyledi.",
        "Tıp uzmanları, virüs hakkında hiçbir açıklama yapmadı.",
        "Virüs, tıp uzmanları arasında yayıldı.",
      ],
      "'explained that the virus could not be spread' 'virüsün yayılamayacağını açıkladı', 'through ordinary contact' 'sıradan temas yoluyla' karşılığıdır.",
    ],
    [
      "The leak was kept secret for more than a decade.",
      [
        "Sızıntı on yıldan uzun süre gizli tutuldu.",
        "Sızıntı hemen kamuoyuna duyuruldu.",
        "On yıldan uzun süre gizli tutulan laboratuvar, sızıntıdan sonra kapatılarak tüm çalışanları başka kentlere gönderildi.",
        "Sızıntı, on yıl sonra yeniden yaşandı.",
        "Sızıntı hakkında hiçbir sır yoktu.",
      ],
      "'The leak was kept secret' 'sızıntı gizli tutuldu', 'for more than a decade' 'on yıldan uzun süre' karşılığıdır.",
    ],
    [
      "The bacteria produce a toxin that can cause a sudden fall in blood pressure.",
      [
        "Bakteriler, kan basıncında ani bir düşüşe neden olabilecek bir toksin üretir.",
        "Bakteriler, kan basıncını yükselten bir ilaç üretir.",
        "Kan basıncında ani bir düşüş yaşayan hastaların vücudunda bakteriler hızla çoğalarak toksin üretmeye başlar ve organlara zarar verir.",
        "Toksin, bakterileri yok eder.",
        "Bakteriler kan basıncını etkilemez.",
      ],
      "'produce a toxin' 'bir toksin üretir', 'that can cause a sudden fall in blood pressure' 'kan basıncında ani bir düşüşe neden olabilecek' karşılığıdır.",
    ],
    [
      "The disease spread rapidly because many people lacked access to clean water.",
      [
        "Pek çok kişinin temiz suya erişimi olmadığı için hastalık hızla yayıldı.",
        "Hastalık, pek çok kişinin temiz su içmesi nedeniyle yavaşladı.",
        "Temiz suya erişimi olan pek çok kişi, hastalığın yayılmasını önlemek için suyu kaynatarak içmeye başladı ve salgın kısa sürede sona erdi.",
        "Temiz su, hastalığın yayılmasına neden oldu.",
        "Hastalık, yalnızca temiz su bulunan bölgelerde görüldü.",
      ],
      "'spread rapidly' 'hızla yayıldı', 'because many people lacked access to clean water' 'pek çok kişinin temiz suya erişimi olmadığı için' karşılığıdır.",
    ],
    [
      "New drugs can now cure the infection in most patients within a few months.",
      [
        "Yeni ilaçlar artık enfeksiyonu çoğu hastada birkaç ay içinde iyileştirebiliyor.",
        "Yeni ilaçlar enfeksiyonu yalnızca birkaç hastada iyileştirebiliyor.",
        "Birkaç ay içinde iyileşen hastalar, enfeksiyonun geri dönmesini önlemek için ömür boyu yeni ilaçları kullanmak zorunda kalmaktadır.",
        "Yeni ilaçlar enfeksiyona neden olur.",
        "Enfeksiyon, ilaç kullanılmadan birkaç ayda geçer.",
      ],
      "'New drugs can now cure the infection' 'yeni ilaçlar artık enfeksiyonu iyileştirebiliyor', 'in most patients within a few months' 'çoğu hastada birkaç ay içinde' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Donmuş toprak, cesetlerin gömülmesini imkânsız hale getirmişti.",
      [
        "The frozen ground had made it impossible to bury the bodies.",
        "The bodies were buried before the ground froze.",
        "The ground had been frozen for so long that the authorities decided to wait until the spring before trying to bury the bodies of the victims.",
        "The bodies froze because they were not buried.",
        "Burying the bodies made the ground freeze.",
      ],
      "'Donmuş toprak' 'the frozen ground', 'cesetlerin gömülmesini imkânsız hale getirmişti' 'had made it impossible to bury the bodies' karşılığıdır.",
    ],
    [
      "Ryan, teşhisinden sonra beş yıldan fazla yaşadı.",
      [
        "Ryan lived for more than five years after his diagnosis.",
        "Ryan died five months after his diagnosis.",
        "Ryan was diagnosed more than five years after he had first been infected with the virus through a blood product used in his treatment.",
        "Ryan was diagnosed at the age of five.",
        "Ryan's diagnosis was made after his death.",
      ],
      "'teşhisinden sonra' 'after his diagnosis', 'beş yıldan fazla yaşadı' 'lived for more than five years' karşılığıdır.",
    ],
    [
      "Kurbanların çoğu laboratuvarın rüzgâr yönündeki dar bir alanda yaşıyordu.",
      [
        "Most of the victims lived in a narrow zone downwind of the laboratory.",
        "Most of the victims worked inside the laboratory.",
        "The victims lived in many different parts of the city, which made it difficult for investigators to work out where the disease had come from.",
        "The laboratory was built downwind of the town.",
        "None of the victims lived near the laboratory.",
      ],
      "'laboratuvarın rüzgâr yönündeki dar bir alanda' 'in a narrow zone downwind of the laboratory', 'kurbanların çoğu yaşıyordu' 'most of the victims lived' karşılığıdır.",
    ],
    [
      "Şirket, ürünü piyasadan çekti.",
      [
        "The company withdrew the product from the market.",
        "The company introduced the product to the market.",
        "The company refused to withdraw the product from the market, arguing that there was no evidence that it was responsible for any of the illnesses.",
        "The market bought the company.",
        "The product was never sold.",
      ],
      "'ürünü piyasadan' 'the product from the market', 'çekti' 'withdrew' karşılığıdır.",
    ],
    [
      "Salgın, ülkenin daha önce kolera görmediği bir dönemde başladı.",
      [
        "The epidemic began at a time when the country had not seen cholera before.",
        "The country had suffered many cholera epidemics before.",
        "The epidemic ended shortly after the country received help from abroad to build new systems for supplying clean water and removing sewage.",
        "Cholera was common in the country.",
        "The epidemic began before the country existed.",
      ],
      "'ülkenin daha önce kolera görmediği bir dönemde' 'at a time when the country had not seen cholera before', 'salgın başladı' 'the epidemic began' karşılığıdır.",
    ],
    [
      "Virüs, kümes hayvanı pazarlarındaki tavuklardan insanlara bulaşmıştı.",
      [
        "The virus had passed to people from chickens in poultry markets.",
        "People had passed the virus to chickens in poultry markets.",
        "The virus was found in wild birds living far from any poultry market, and scientists concluded that it could not have come from chickens.",
        "Poultry markets were closed before the virus appeared.",
        "Chickens were immune to the virus.",
      ],
      "'kümes hayvanı pazarlarındaki tavuklardan insanlara' 'to people from chickens in poultry markets', 'bulaşmıştı' 'had passed' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In April 1979, dozens of people in the Soviet city of Sverdlovsk, now Yekaterinburg, fell ill with high fever and breathing difficulties, and at least sixty-six of them died. The Soviet authorities stated that the deaths had been caused by eating meat from cattle infected with anthrax, a bacterial disease of grazing animals that can also affect humans. Western intelligence agencies suspected otherwise, because a secret military facility in the city was believed to be producing biological weapons, which were banned under an international treaty that the Soviet Union had signed. For more than a decade, the official explanation remained unchanged. In 1992, after the collapse of the Soviet Union, the Russian president Boris Yeltsin admitted that the outbreak had been caused by an accident at the military facility. In the same year, a team of American and Russian scientists led by Matthew Meselson, a Harvard biologist, investigated the outbreak. By mapping where the victims had been on the day the illness began, they showed that almost all of them had lived or worked in a narrow zone extending downwind from the facility, and that livestock in villages further along the same line had also died. Their analysis indicated that a small amount of anthrax spores had been released into the air, probably because a filter had not been replaced.",
      questions: [
        [
          "According to the passage, the Soviet authorities claimed that the deaths were caused by ----.",
          [
            "eating infected meat",
            "a military accident",
            "polluted water",
            "an illness that had been brought into the city by foreign visitors earlier that spring",
            "a new virus",
          ],
          "Metne göre yetkililer şarbonlu sığırların etinin yenmesinden kaynaklandığını açıkladı.",
        ],
        [
          "The scientists' map was important because it showed that ----.",
          [
            "the victims were concentrated along a line from the facility",
            "all the victims had eaten the same meat",
            "the cattle died before the people",
            "the outbreak had begun in villages far from the city and then moved slowly towards the centre",
            "the facility had been closed",
          ],
          "Kurbanların neredeyse tamamı tesisten rüzgâr yönünde uzanan dar bir alanda yaşıyor ya da çalışıyordu.",
        ],
        [
          "It can be inferred from the passage that the release of spores ----.",
          [
            "may have resulted from a maintenance error",
            "was deliberate",
            "was very large",
            "was ordered by Yeltsin in order to test the effects of the weapons on the population",
            "came from cattle",
          ],
          "Muhtemelen bir filtre değiştirilmediği için olmuştu; bakım hatası olabilir.",
        ],
      ],
    },
    {
      text:
        "In 1980, doctors in the United States noticed a sharp increase in cases of a severe illness that caused high fever, vomiting, a rash and a dangerous fall in blood pressure, sometimes leading to organ failure and death. The condition, called toxic shock syndrome, had first been described two years earlier in children, but now the great majority of cases were occurring in young women during menstruation. Investigators at the Centers for Disease Control found that the illness was strongly associated with the use of tampons, particularly new 'super-absorbent' products made from synthetic materials, one of which was being heavily advertised. The illness was caused by toxins produced by Staphylococcus aureus, a common bacterium that many people carry harmlessly on their skin. Researchers believed that the new materials created conditions in which the bacteria could multiply and produce toxins, especially if a tampon was left in place for a long time. In September 1980, the manufacturer of the product most closely linked to the cases withdrew it from the market. Over the following years, the absorbency of tampons was reduced, manufacturers were required to print warnings and advice on packages, and the number of cases fell sharply. Although toxic shock syndrome remains rare, doctors stress that it can also occur in men, children and women who do not use tampons, for example after surgery or skin infections.",
      questions: [
        [
          "According to the passage, the 1980 cases were unusual because ----.",
          [
            "most patients were women who were menstruating",
            "they affected only children",
            "the illness was caused by a virus",
            "the illness had never been seen before anywhere in the world in any group of patients",
            "no patients died",
          ],
          "Metne göre vakaların büyük çoğunluğu adet dönemindeki genç kadınlarda görülüyordu.",
        ],
        [
          "The passage indicates that Staphylococcus aureus ----.",
          [
            "is often present without causing harm",
            "is found only in tampons",
            "was discovered in 1980",
            "can be killed easily by the synthetic materials that were used in the new super-absorbent products",
            "causes the rash directly",
          ],
          "Pek çok kişinin cildinde zararsız biçimde taşıdığı yaygın bir bakteridir.",
        ],
        [
          "It can be understood from the passage that the measures taken after 1980 ----.",
          [
            "led to a big drop in cases",
            "had no effect",
            "made tampons more absorbent",
            "were opposed by the Centers for Disease Control, which believed that the risk had been exaggerated",
            "banned all tampons",
          ],
          "Önlemlerden sonra vaka sayısı hızla düştü.",
        ],
      ],
    },
    {
      text:
        "In January 2010, a powerful earthquake devastated Haiti, killing tens of thousands of people and destroying much of the capital's infrastructure. Nine months later, cholera, a waterborne disease that causes severe diarrhoea and can kill within hours, broke out in the country for the first time in about a century. Because the population had no immunity and many people lacked access to clean water and sanitation, the disease spread rapidly, and over the following years it infected more than 800,000 people and killed nearly 10,000. Suspicion soon fell on a camp of United Nations peacekeeping troops from Nepal, where cholera was present, situated beside a tributary of the Artibonite River, the country's longest. Journalists found evidence that sewage from the camp had been leaking into the river. Genetic studies later showed that the Haitian cholera strain was almost identical to a strain circulating in Nepal, strongly supporting the theory that the troops had unknowingly brought the disease. For years, the UN refused to accept responsibility, citing legal immunity, which caused widespread anger in Haiti. In 2016, the UN Secretary-General finally apologised and announced a plan to support the victims and improve water and sanitation, although the fund received only a small fraction of the money promised. The last confirmed case of that epidemic was recorded in 2019.",
      questions: [
        [
          "According to the passage, cholera spread rapidly in Haiti partly because ----.",
          [
            "people had not been exposed to it before",
            "the earthquake contaminated wells",
            "the UN refused to treat patients",
            "the disease had been common in Haiti for about a century before the earthquake",
            "the river was very long",
          ],
          "Metne göre halkın bağışıklığı yoktu ve temiz suya erişim eksikti.",
        ],
        [
          "The genetic studies mentioned in the passage ----.",
          [
            "supported the link with the peacekeepers",
            "disproved the theory about the troops",
            "showed the strain was new",
            "showed that the cholera had come from a different camp of soldiers from another South American country",
            "were carried out in 2019",
          ],
          "Suşun Nepal'deki suşla neredeyse aynı olduğunu göstererek teoriyi destekledi.",
        ],
        [
          "It can be understood from the passage that the UN's response ----.",
          [
            "was slow and its funding fell short",
            "was immediate and generous",
            "was welcomed in Haiti",
            "included arresting the soldiers who had been responsible for allowing the sewage to leak into the river",
            "ended the epidemic in 2010",
          ],
          "BM yıllarca sorumluluğu kabul etmedi; vaat edilen paranın küçük bir kısmı toplandı.",
        ],
      ],
    },
    {
      text:
        "By the 1970s, doctors had identified the viruses responsible for hepatitis A and hepatitis B, two forms of liver inflammation. However, they noticed that many patients who developed hepatitis after receiving blood transfusions were infected with neither virus. This mysterious condition was called 'non-A, non-B hepatitis'. In 1975, the American researcher Harvey Alter and his colleagues showed that it could be transmitted to chimpanzees through blood, proving that an infectious agent was involved, but for more than a decade all attempts to identify it failed. In 1989, Michael Houghton and his colleagues at a California biotechnology company, working with the US Centers for Disease Control, finally isolated genetic material from the virus, which was named hepatitis C. A blood test was soon developed, and screening of donated blood virtually eliminated new infections through transfusion in countries that adopted it. Many people infected earlier, however, did not know they carried the virus, because it often causes no symptoms for decades while slowly damaging the liver, leading eventually to cirrhosis or liver cancer. Treatment was initially difficult, involving long courses of injections with serious side effects. In the 2010s, new antiviral drugs were introduced that cure more than ninety-five per cent of patients in two to three months, although their very high prices initially limited access in many countries.",
      questions: [
        [
          "According to the passage, doctors in the 1970s were puzzled because ----.",
          [
            "some transfusion patients had hepatitis caused by neither known virus",
            "hepatitis B had disappeared",
            "chimpanzees could not be infected",
            "patients with hepatitis A and B were not responding to the treatments that were available at the time",
            "the liver was not affected",
          ],
          "Metne göre kan nakli sonrası hepatit gelişen pek çok hastada bilinen iki virüs de yoktu.",
        ],
        [
          "It can be understood from the passage that many people with hepatitis C ----.",
          [
            "are unaware of their infection for a long time",
            "become ill immediately",
            "recover without treatment",
            "were infected through vaccines that were given to them before the virus had been identified in 1989",
            "have no liver damage",
          ],
          "Virüs onlarca yıl belirti vermeyebildiği için pek çok kişi taşıdığını bilmez.",
        ],
        [
          "The passage suggests that the main problem with the new drugs was ----.",
          [
            "their cost",
            "their side effects",
            "their low success rate",
            "the length of the treatment, which often required injections every day for more than a year",
            "their availability in hospitals",
          ],
          "Çok yüksek fiyatları başlangıçta pek çok ülkede erişimi sınırladı.",
        ],
      ],
    },
    {
      text:
        "In May 1997, a three-year-old boy in Hong Kong died of a respiratory illness. Tests showed that he had been infected with an influenza virus, H5N1, that had previously been known only in birds. It was the first time this strain had been shown to infect humans. Over the following months, eighteen people in Hong Kong were infected, and six of them died, a very high death rate for influenza. Health experts were alarmed, fearing that the virus might acquire the ability to spread easily between people and cause a pandemic. Investigators found that most patients had visited live poultry markets, where chickens, ducks and other birds from many farms were kept together in crowded conditions, allowing viruses to spread and mix. In late December 1997, the Hong Kong government took the drastic step of slaughtering all the poultry in the territory, about 1.5 million birds, within three days. No further human cases were reported in that outbreak, and the action is widely believed to have prevented a wider epidemic. Hong Kong later introduced measures such as regular closure and cleaning of markets and separating ducks from chickens. However, H5N1 reappeared in Asia in 2003 and has since spread among birds on several continents, occasionally infecting people who have close contact with poultry. So far, it has not developed the ability to pass easily from person to person.",
      questions: [
        [
          "According to the passage, the 1997 case was significant because it ----.",
          [
            "showed that a bird virus could infect humans",
            "was the first case of influenza",
            "occurred in a farm worker",
            "proved that H5N1 could spread easily from one person to another in crowded cities",
            "was caused by ducks",
          ],
          "Metne göre yalnızca kuşlarda bilinen suşun insanları enfekte edebildiği ilk kez gösterildi.",
        ],
        [
          "Live poultry markets were considered dangerous because ----.",
          [
            "birds from many sources were kept close together",
            "they sold only ducks",
            "they were closed every day",
            "the people who worked in them had been vaccinated against all forms of influenza",
            "they were outdoors",
          ],
          "Birçok çiftlikten gelen kuşlar kalabalık koşullarda bir arada tutuluyor, virüsler yayılıp karışabiliyordu.",
        ],
        [
          "It can be understood from the passage that the slaughter of poultry ----.",
          [
            "is thought to have stopped the outbreak",
            "failed to stop human infections",
            "took several months",
            "was opposed by health experts, who believed that the virus would soon disappear by itself",
            "ended H5N1 permanently",
          ],
          "Sonrasında yeni insan vakası görülmedi ve daha geniş bir salgını önlediğine inanılıyor.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1989, monkeys imported from the Philippines began dying at a research facility in Reston, Virginia, close to Washington. ---- To everyone's relief, however, this new strain caused no illness in the humans who were exposed to it, although it was deadly to the monkeys.",
      [
        "Tests revealed that they were infected with a virus closely related to Ebola.",
        "Virginia is a state in the eastern United States.",
        "Monkeys are used in research.",
        "Soldiers wearing protective suits were sent to the building, which was later demolished, and the events were described in a best-selling book that frightened many readers.",
        "The Philippines consists of many islands.",
      ],
      "Boşluktan sonra 'this new strain' ifadesi gelir; boşluğa maymunların Ebola ile yakından ilişkili bir virüsle enfekte olduğunu gösteren testlerden söz eden cümle gelmelidir.",
    ],
    [
      "In the 1950s, a fatal brain disease called kuru was common among the Fore people of Papua New Guinea, especially among women and children. ---- When this custom was abandoned under pressure from the authorities, the disease gradually disappeared.",
      [
        "Researchers concluded that it was spread through the practice of eating the bodies of dead relatives as a mark of respect.",
        "Papua New Guinea has many mountains.",
        "Many people live in villages.",
        "The American researcher who studied the disease, Carleton Gajdusek, later received the Nobel Prize, although his reputation was damaged by a criminal conviction in the 1990s.",
        "Brain diseases are difficult to treat.",
      ],
      "Boşluktan sonra 'this custom' ifadesi gelir; boşluğa hastalığın ölen akrabaların bedenlerini yeme geleneği yoluyla yayıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1980s, a Canadian flight attendant was widely described in the media as 'Patient Zero', the man who had brought HIV to North America. ---- Genetic analysis published in 2016 showed that the virus had arrived in the United States around 1970, years before he could have spread it.",
      [
        "The label originally came from a misreading of a study, where 'O' meant 'outside California', not zero.",
        "Flight attendants travel widely.",
        "Many diseases cross borders.",
        "Before his death in 1984, he had cooperated fully with researchers and had provided the names of many of his partners so that scientists could trace the spread of the disease.",
        "Canada is a large country.",
      ],
      "Boşluk lakabın kaynağını açıklayan bir cümle gerektirir; boşluğa etiketin bir çalışmanın yanlış okunmasından geldiğini, 'O'nun 'Kaliforniya dışı' anlamına geldiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1998, a medical journal published a study of twelve children that suggested a link between the MMR vaccine and autism. ---- The journal retracted the paper in 2010, and its lead author lost his licence to practise medicine, but vaccination rates had already fallen in several countries.",
      [
        "Later investigations found that the data had been manipulated and that the author had undisclosed financial conflicts of interest.",
        "Autism affects many children.",
        "Vaccines are given in childhood.",
        "Many parents who had read about the study in newspapers decided to delay vaccinating their children or to have them vaccinated separately against each disease.",
        "Medical journals publish many papers.",
      ],
      "Boşluktan sonra derginin makaleyi geri çektiği anlatılır; boşluğa sonraki soruşturmaların verilerin manipüle edildiğini ortaya koyduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In the summer of 1999, an unusual number of crows died in New York City, and a few weeks later several elderly people fell ill with brain inflammation. ---- It was the first time the virus, which is spread by mosquitoes, had been found in the Western Hemisphere, and within a few years it had spread across North America.",
      [
        "A veterinary pathologist at the Bronx Zoo, where exotic birds had also died, helped to identify the cause as West Nile virus.",
        "Crows are intelligent birds.",
        "New York has many parks.",
        "Health officials sprayed insecticides over large parts of the city from helicopters and trucks, and residents were advised to stay indoors in the evening and to wear long sleeves.",
        "Mosquitoes breed in water.",
      ],
      "Boşluktan sonra 'the virus' ifadesi gelir; boşluğa hayvanat bahçesindeki bir patoloğun nedeni Batı Nil virüsü olarak belirlediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In May 1993, a young, healthy Navajo man collapsed and died while travelling to his fiancée's funeral in New Mexico; she too had died suddenly of breathing problems. ---- Investigators, helped by Navajo elders who recalled similar outbreaks after wet years, linked it to deer mice, whose numbers had increased after heavy rain.",
      [
        "The cause turned out to be a previously unknown hantavirus.",
        "New Mexico is in the south-west.",
        "Mice live in many habitats.",
        "The region is famous for its desert landscapes and for the point at which four states meet, which attracts many tourists every year.",
        "Rain is rare in deserts.",
      ],
      "Boşluk ölümlerin nedenini açıklayan bir cümle gerektirir; boşluğa nedenin daha önce bilinmeyen bir hantavirüs olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Norovirus is a common cause of vomiting and diarrhoea.",
        "Outbreaks often occur on cruise ships, where many people share dining areas and facilities.",
        "Cruise ships often visit the Caribbean.",
        "The virus can survive on surfaces for days and is not easily killed by some hand gels.",
        "Thorough handwashing with soap and water is the best way to prevent its spread.",
      ],
      odd: 2,
      why: "Parça norovirüsü ve yayılmasını anlatır. Yolcu gemilerinin sık sık Karayipler'e uğradığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The word 'influenza' comes from Italian.",
        "In the Middle Ages, outbreaks of the illness were blamed on the influence of the stars.",
        "Italian is spoken by about sixty million people.",
        "English speakers adopted the word during an epidemic in the eighteenth century.",
        "It is now usually shortened to 'flu'.",
      ],
      odd: 2,
      why: "Parça 'influenza' sözcüğünün kökenini anlatır. İtalyancanın yaklaşık altmış milyon kişi tarafından konuşulduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1978, a medical photographer named Janet Parker became the last person known to have died of smallpox.",
        "She worked in a building above a laboratory at the University of Birmingham where the virus was being studied.",
        "Birmingham is the second-largest city in England.",
        "Investigators believed that the virus had travelled through air ducts.",
        "After her death, remaining stocks of the virus were transferred to just two laboratories in the world.",
      ],
      odd: 2,
      why: "Parça çiçek hastalığından ölen son kişiyi anlatır. Birmingham'ın İngiltere'nin ikinci büyük kenti olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ships arriving in port traditionally flew a yellow flag to show that there was no disease on board and request clearance.",
        "If disease was present, the ship had to wait offshore until officials inspected it.",
        "Passengers and crew might be kept in isolation for weeks.",
        "Flags are made of cloth.",
        "Modern ships now send health declarations electronically instead.",
      ],
      odd: 3,
      why: "Parça gemilerin sağlık bildirimi ve karantina uygulamalarını anlatır. Bayrakların kumaştan yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Epidemiologists use a number called R to describe how quickly a disease spreads.",
        "It represents the average number of people infected by each case.",
        "If R is above one, the outbreak grows; if it is below one, it shrinks.",
        "Mathematics was taught in ancient Babylon.",
        "Measures such as vaccination and isolation aim to push R below one.",
      ],
      odd: 3,
      why: "Parça salgınların yayılma hızını gösteren R sayısını anlatır. Matematiğin eski Babil'de öğretildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The World Health Organization was founded in 1948 as an agency of the United Nations.",
        "Geneva is famous for its large lake.",
        "Its goals include fighting infectious diseases and improving health worldwide.",
        "It coordinated the successful campaign to eradicate smallpox.",
        "It also sets international standards for medicines and vaccines.",
      ],
      odd: 1,
      why: "Parça Dünya Sağlık Örgütü'nü anlatır. Cenevre'nin büyük gölüyle ünlü olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
