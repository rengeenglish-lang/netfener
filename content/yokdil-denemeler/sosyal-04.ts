import type { YokdilDeneme } from "./types";

export const SOSYAL_04: YokdilDeneme = {
  no: 4,
  field: "sosyal",
  vocab: [
    [
      "The government has promised to ---- corruption by introducing stricter controls on public spending.",
      ["tackle", "encourage", "ignore", "celebrate", "imitate"],
      "Kamu harcamalarına sıkı denetim getirmenin amacı yolsuzlukla 'mücadele etmek'tir (tackle). 'encourage' ve 'ignore' amaçla çelişir.",
    ],
    [
      "The film offers a ---- portrait of life in a small village during the 1950s.",
      ["vivid", "vague", "boring", "false", "brief"],
      "Bir dönemi canlı biçimde anlatan film için 'canlı, çarpıcı' (vivid) uygundur. 'vague' (belirsiz) ve 'false' olumsuzdur.",
    ],
    [
      "The economic crisis had a ---- effect on small businesses, many of which were forced to close.",
      ["devastating", "positive", "minor", "temporary", "pleasant"],
      "Pek çok işletmenin kapanması 'yıkıcı' (devastating) bir etkiyi gösterir.",
    ],
    [
      "The committee has decided to ---- the vote until more information is available.",
      ["put off", "take up", "give in", "bring up", "look after"],
      "Daha fazla bilgi gelene kadar oylamanın 'ertelenmesi' (put off) anlatılır.",
    ],
    [
      "Immigrants often face ---- when trying to find work in their new country.",
      ["discrimination", "celebration", "admiration", "relaxation", "recreation"],
      "Göçmenlerin iş ararken karşılaştığı olumsuz durum 'ayrımcılık'tır (discrimination).",
    ],
    [
      "The novel was ---- banned for criticising the government, but it later became a classic.",
      ["initially", "finally", "rarely", "politely", "secretly"],
      "'later became a classic' ile zıtlık kurulur: roman 'başlangıçta' (initially) yasaklandı.",
    ],
  ],
  grammar: [
    [
      "The Ottoman Empire ---- for more than six hundred years before it collapsed after the First World War.",
      ["had lasted", "has lasted", "lasts", "will last", "was lasting"],
      "Çöküşten önce tamamlanmış süreç Past Perfect ile anlatılır: 'had lasted'.",
    ],
    [
      "If public transport were cheaper, more people ---- it instead of driving.",
      ["would use", "will use", "used", "would have used", "use"],
      "Type 2 koşul: if + Past (were), ana cümle 'would + V1'.",
    ],
    [
      "The historian, ---- book on the French Revolution won several awards, will give a lecture tomorrow.",
      ["whose", "who", "which", "whom", "that"],
      "Tarihçinin kitabından söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- the referendum, the country remained deeply divided on the issue.",
      ["After", "Although", "Because", "Unless", "So that"],
      "Ardından isim öbeği gelir ve zaman bildirilir: 'After the referendum'.",
    ],
    [
      "The researchers asked the participants how often ---- social media.",
      ["they used", "did they use", "do they use", "they had been use", "used they"],
      "Dolaylı soruda düz cümle sırası kullanılır: 'how often they used'.",
    ],
    [
      "Not until women gained the right to vote ---- to pay attention to issues such as childcare.",
      ["did politicians begin", "politicians began", "politicians did begin", "began politicians", "had politicians begun"],
      "'Not until …' cümle başına geldiğinde ana cümle devrik olur: 'did politicians begin'.",
    ],
    [
      "The ancient texts are difficult ---- because they were written in a language that is no longer spoken.",
      ["to translate", "translating", "translate", "translated", "for translating"],
      "'difficult to do' kalıbı mastar ister.",
    ],
    [
      "It was in Istanbul ---- the first printing press in the Ottoman Empire was established in Turkish.",
      ["that", "which", "where it", "what", "when"],
      "'It was … that …' vurgu yapısı 'that' ile kurulur.",
    ],
    [
      "The workers demanded that their wages ---- in line with inflation.",
      ["be increased", "are increased", "will be increased", "increased", "have increased"],
      "'demand that' sonrası subjunctive ve edilgen: 'be increased'.",
    ],
    [
      "The city's population doubled between 1950 and 1970, ---- led to a serious housing shortage.",
      ["which", "that", "what", "it", "who"],
      "Virgülden sonra 'which' önceki cümlenin tamamına atıf yapar.",
    ],
    [
      "---- he was born into a poor family, he became one of the country's most successful businessmen.",
      ["Although", "Because", "Since", "Unless", "As long as"],
      "Yoksul bir ailede doğmasına 'rağmen' başarılı olması zıtlıktır.",
    ],
    [
      "The new policy is likely ---- the number of young people leaving rural areas.",
      ["to reduce", "reducing", "reduce", "reduced", "to reducing"],
      "'be likely to do' kalıbı mastar ister.",
    ],
    [
      "So many people attended the protest ---- the police had to close the main square.",
      ["that", "which", "as", "than", "so"],
      "'so many + isim + that' yapısı sonuç bildirir.",
    ],
    [
      "By the end of this decade, more than half of the world's population ---- in Asia.",
      ["will be living", "lived", "has lived", "had lived", "lives"],
      "'By the end of this decade' gelecekte süren bir durumu bildirir: 'will be living'.",
    ],
  ],
  cloze: [
    {
      text:
        "Throughout history, cities have been centres of trade, culture and political power. The first cities appeared in Mesopotamia around 5,000 years ago, {1} the development of agriculture allowed people to produce more food than they needed. This surplus meant that not everyone had to work on farms, {2} new occupations such as craftsmen, priests and officials emerged. Cities also became places where ideas were exchanged, {3} innovations in writing, mathematics and law. {4}, early cities faced many problems, including disease, fire and conflict over resources. Many of these challenges, {5} on a much larger scale, are still faced by cities today.",
      blanks: [
        [
          "(21) ----",
          ["when", "which", "although", "unless", "whose"],
          "Tarımın gelişmesiyle fazla ürün üretilebildiği 'dönemde' şehirler ortaya çıktı: zaman bildiren 'when'.",
        ],
        [
          "(22) ----",
          ["so", "although", "because", "unless", "whereas"],
          "Herkesin tarımda çalışmak zorunda olmamasının sonucu yeni mesleklerin ortaya çıkmasıdır: 'so'.",
        ],
        [
          "(23) ----",
          ["leading to", "despite", "instead of", "apart from", "in case of"],
          "Fikir alışverişinin sonucu yazı, matematik ve hukukta yeniliklerdir: 'leading to'.",
        ],
        [
          "(24) ----",
          ["However", "Therefore", "Similarly", "For example", "As a result"],
          "Şehirlerin olumlu yönlerinden sonra sorunlarına geçilir: 'However'.",
        ],
        [
          "(25) ----",
          ["albeit", "because", "unless", "so that", "since"],
          "'çok daha büyük ölçekte olsa da' anlamında 'albeit' kullanılır; ardından cümle değil öbek gelir.",
        ],
      ],
    },
    {
      text:
        "In many countries, the gap between rich and poor has widened over the past four decades. Economists disagree about the causes, {1} most point to a combination of technological change, globalisation and changes in tax policy. Some argue that inequality is a natural result of a market economy {2} rewards skill and effort. Others warn that high levels of inequality can damage social cohesion and reduce economic mobility, {3} it harder for children from poor families to improve their circumstances. Research has found that countries with greater inequality tend to have higher rates of crime and poorer health outcomes. {4} these findings, many governments have introduced policies {5} at reducing inequality, such as minimum wages and investment in education.",
      blanks: [
        [
          "(26) ----",
          ["but", "so", "because", "unless", "if"],
          "Ekonomistler nedenler konusunda anlaşamaz 'ama' çoğu birkaç etkene işaret eder: 'but'.",
        ],
        [
          "(27) ----",
          ["that", "where", "what", "whose", "who"],
          "'a market economy' sonrası 'rewards' fiilinin öznesini isteyen tanımlayıcı ilgi cümlesi: 'that'.",
        ],
        [
          "(28) ----",
          ["making", "made", "to make", "makes", "having made by"],
          "Eşitsizliğin sonucu virgülden sonra etken ortaçla verilir: 'making it harder'.",
        ],
        [
          "(29) ----",
          ["In response to", "In spite of", "Instead of", "Apart from", "Regardless of"],
          "Bu bulgulara 'yanıt olarak' politikalar geliştirilmiştir.",
        ],
        [
          "(30) ----",
          ["aimed", "aiming", "to aim", "aims", "which aim"],
          "'policies aimed at reducing' kalıbı: 'reducing'i hedefleyen politikalar. 'be aimed at' edilgen ortaçla kullanılır.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the country gained independence in 1960, ----.",
      [
        "it remained economically dependent on its former colonial power for decades",
        "independence celebrations were held in the capital every year afterwards",
        "the new government adopted a constitution based on European models",
        "many people had fought for freedom during the colonial period",
        "the first president was elected by a large majority of voters",
      ],
      "'Although' zıtlık ister: bağımsızlık kazanılsa da ekonomik bağımlılık sürdü.",
    ],
    [
      "Many young people move to large cities ----.",
      [
        "because they offer more job opportunities and better education",
        "which were founded hundreds of years ago by traders",
        "although the cost of living is lower in the countryside",
        "unless their families had already moved there before",
        "so that the population of villages had increased",
      ],
      "Gençlerin büyük şehirlere taşınmasının nedeni daha fazla iş fırsatı ve eğitimdir.",
    ],
    [
      "If the archaeologists had not found the inscription, ----.",
      [
        "the history of the ancient kingdom would still be a mystery",
        "the inscription was written in an ancient language",
        "archaeologists will continue to excavate the site",
        "the kingdom was located near the Mediterranean",
        "historians study ancient kingdoms carefully",
      ],
      "Karma koşul: geçmişteki koşul (had not found), bugünkü sonuç (would still be).",
    ],
    [
      "While some critics praised the novel for its originality, ----.",
      [
        "others found its plot confusing and difficult to follow",
        "it was published by a small company in London",
        "the author had written several novels before it",
        "it tells the story of a family over three generations",
        "it was translated into more than twenty languages",
      ],
      "'While' karşıt görüşleri bağlar: bazıları övdü, diğerleri kafa karıştırıcı buldu.",
    ],
    [
      "The government introduced free school meals ----.",
      [
        "to ensure that no child would go hungry during the school day",
        "which were cooked in the school kitchen every morning",
        "although many parents preferred to prepare lunch at home",
        "because the school year begins in September",
        "unless the children had brought their own food",
      ],
      "Ücretsiz okul yemeğinin amacı hiçbir çocuğun aç kalmamasını sağlamaktır.",
    ],
    [
      "Unless the historic buildings are restored soon, ----.",
      [
        "they may be lost forever",
        "they were built in the sixteenth century",
        "tourists visited them every summer",
        "they had been used as government offices",
        "many people live near them",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: binalar sonsuza dek kaybolabilir.",
    ],
    [
      "Since the internet became widely available, ----.",
      [
        "the way people form friendships has changed in important ways",
        "people wrote letters to friends who lived far away",
        "telephones were found in most homes by the 1970s",
        "many friendships had begun at school or work",
        "people will meet more often in person",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister.",
    ],
    [
      "Even though the treaty ended the war, ----.",
      [
        "tensions between the two countries continued for many years",
        "it was signed in a small town near the border",
        "both sides had suffered heavy losses during the conflict",
        "it was written in two languages",
        "leaders from several countries attended",
      ],
      "'Even though' beklenmedik bir sonuç ister: antlaşma savaşı bitirse de gerilim sürdü.",
    ],
    [
      "The more time children spend reading for pleasure, ----.",
      [
        "the better they tend to perform at school",
        "because reading improves vocabulary",
        "many libraries offer free books",
        "although screens are popular",
        "which is encouraged by teachers",
      ],
      "'The more …, the better …' kalıbı tamamlanmalıdır.",
    ],
    [
      "As more women entered politics, ----.",
      [
        "issues such as childcare and equal pay received more attention",
        "parliaments were built in many capital cities",
        "elections were held every five years",
        "many men had worked as politicians",
        "voting is a basic democratic right",
      ],
      "'As' paralel bir değişim bildirir: kadınlar siyasete girdikçe çocuk bakımı gibi konular daha çok ilgi gördü.",
    ],
    [
      "Scarcely had the new president taken office ----.",
      [
        "when protests broke out in several cities",
        "than he was very popular",
        "because the election was close",
        "although he had a lot of experience",
        "so the people were happy",
      ],
      "'Scarcely … when …' kalıbı 'when' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "The museum holds one of the largest collections of Ottoman manuscripts in the world.",
      [
        "Müze, dünyadaki en büyük Osmanlı el yazması koleksiyonlarından birine sahiptir.",
        "Müzedeki Osmanlı el yazmaları dünyanın en eskileridir.",
        "Dünyadaki tüm Osmanlı el yazmaları bu müzede bulunur.",
        "Müze yalnızca küçük bir Osmanlı koleksiyonuna sahiptir.",
        "Osmanlı el yazmaları dünyanın pek çok müzesinde sergilenmektedir.",
      ],
      "'one of the largest collections' 'en büyük koleksiyonlarından biri' demektir.",
    ],
    [
      "Few historians doubt that the invention of printing transformed European society.",
      [
        "Matbaanın icadının Avrupa toplumunu dönüştürdüğünden şüphe eden tarihçi azdır.",
        "Tarihçilerin çoğu matbaanın Avrupa toplumunu etkilemediğini düşünür.",
        "Matbaanın icadı tarihçiler arasında büyük şüphelere yol açtı.",
        "Birkaç tarihçi matbaanın Avrupa'da icat edildiğinden şüphe eder.",
        "Avrupa toplumu matbaanın icadından önce dönüşmüştü.",
      ],
      "'Few historians doubt that' 'şüphe eden tarihçi azdır', yani çoğu bunu kabul eder.",
    ],
    [
      "Rising housing costs have forced many young adults to live with their parents for longer.",
      [
        "Artan konut maliyetleri pek çok genç yetişkini ebeveynleriyle daha uzun süre yaşamak zorunda bırakmıştır.",
        "Ebeveynleriyle yaşayan gençler konut maliyetlerini artırmaktadır.",
        "Genç yetişkinler ebeveynlerinden daha kısa süre sonra ayrılmaktadır.",
        "Konut maliyetleri düştüğü için gençler ebeveynleriyle yaşamaktadır.",
        "Pek çok genç yetişkin ebeveynlerine ev satın almıştır.",
      ],
      "'have forced … to live with their parents for longer' 'daha uzun süre yaşamak zorunda bırakmıştır' demektir.",
    ],
    [
      "It was not until the nineteenth century that slavery was abolished in most countries.",
      [
        "Kölelik çoğu ülkede ancak on dokuzuncu yüzyılda kaldırıldı.",
        "Kölelik on dokuzuncu yüzyılda pek çok ülkede yaygınlaştı.",
        "Çoğu ülkede kölelik on dokuzuncu yüzyıldan çok önce kaldırılmıştı.",
        "Kölelik hiçbir ülkede on dokuzuncu yüzyılda kaldırılmadı.",
        "On dokuzuncu yüzyılda köleliğin kaldırılması tartışılmadı.",
      ],
      "'It was not until … that' 'ancak … -de' anlamındadır.",
    ],
    [
      "Although the two cultures share many traditions, their languages are completely different.",
      [
        "İki kültür pek çok geleneği paylaşsa da dilleri tamamen farklıdır.",
        "İki kültürün dilleri benzer olduğu için gelenekleri de aynıdır.",
        "İki kültür hiçbir geleneği paylaşmaz ama dilleri aynıdır.",
        "Farklı dilleri olan kültürler gelenek paylaşamaz.",
        "İki kültürün gelenekleri dillerinden daha farklıdır.",
      ],
      "'Although' zıtlık bildirir: gelenekler ortak, diller tamamen farklı.",
    ],
    [
      "Public opinion on the issue has shifted considerably over the past decade.",
      [
        "Kamuoyunun konuya ilişkin görüşü son on yılda önemli ölçüde değişmiştir.",
        "Kamuoyu son on yılda bu konuyla hiç ilgilenmemiştir.",
        "Konu, son on yılda kamuoyunda tartışılmaya başlanmıştır.",
        "Kamuoyunun görüşü on yıl boyunca aynı kalmıştır.",
        "Son on yılda konu hakkında anket yapılmamıştır.",
      ],
      "'has shifted considerably' 'önemli ölçüde değişmiştir' demektir.",
    ],
  ],
  trEn: [
    [
      "Pek çok ülkede kadınlar hâlâ erkeklerden daha az ücret almaktadır.",
      [
        "In many countries, women are still paid less than men.",
        "In many countries, women now earn more than men.",
        "Men and women receive equal pay in most countries.",
        "Women in many countries refuse to work for low wages.",
        "Many countries have abolished wages for women.",
      ],
      "'hâlâ … daha az ücret almaktadır' 'are still paid less than' karşılığıdır.",
    ],
    [
      "Antik kentin kalıntıları, bölgedeki ticaretin ne kadar önemli olduğunu gösteriyor.",
      [
        "The ruins of the ancient city show how important trade was in the region.",
        "Trade in the region destroyed the ancient city.",
        "The ancient city was built to protect the region's trade routes.",
        "The ruins show that there was no trade in the region.",
        "Traders built the ruins of the ancient city.",
      ],
      "'ne kadar önemli olduğunu gösteriyor' 'show how important … was' karşılığıdır.",
    ],
    [
      "Göç, hem kaynak hem de hedef ülkelerin nüfus yapısını değiştirmektedir.",
      [
        "Migration is changing the population structure of both origin and destination countries.",
        "Migration affects only the countries that people move to.",
        "Destination countries prevent migration to protect their populations.",
        "The population structure of most countries has not changed.",
        "Origin countries encourage people to migrate.",
      ],
      "'hem … hem de' 'both … and', 'değiştirmektedir' 'is changing' karşılığıdır.",
    ],
    [
      "Araştırma, sosyal medyanın gençlerin siyasi görüşlerini etkilediğini ortaya koydu.",
      [
        "The research revealed that social media influences young people's political views.",
        "Young people's political views have no effect on social media.",
        "The research showed that young people do not use social media.",
        "Social media was created to influence political views.",
        "The research was published on social media.",
      ],
      "'ortaya koydu' 'revealed', 'etkilediğini' 'influences' karşılığıdır.",
    ],
    [
      "Eğitime yapılan yatırım, uzun vadede ekonomik büyümeyi destekler.",
      [
        "Investment in education supports economic growth in the long term.",
        "Economic growth makes investment in education unnecessary.",
        "Investment in education slows economic growth.",
        "Education has no effect on the economy.",
        "Economic growth is needed only in the short term.",
      ],
      "'uzun vadede … destekler' 'supports … in the long term' karşılığıdır.",
    ],
    [
      "Tarihçiler, bu belgelerin savaştan sonra yazıldığını düşünüyor.",
      [
        "Historians think that these documents were written after the war.",
        "Historians wrote these documents during the war.",
        "These documents caused the war, according to historians.",
        "Historians found these documents before the war.",
        "The war destroyed most of these documents.",
      ],
      "'savaştan sonra yazıldığını düşünüyor' 'think that … were written after the war' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The welfare state, in which the government takes responsibility for providing citizens with health care, education, pensions and unemployment benefits, expanded rapidly in Europe after the Second World War. Its supporters saw it as a way to reduce poverty and create a fairer society after years of conflict and economic hardship. In recent decades, however, welfare states have come under pressure. Ageing populations mean that fewer workers must support a growing number of retirees, and globalisation has made it harder for governments to raise taxes without driving away businesses. Some countries have responded by cutting benefits, while others have tried to encourage more people, especially women and older workers, to stay in the labour force.",
      questions: [
        [
          "According to the passage, the welfare state expanded after the Second World War mainly in order to ----.",
          [
            "reduce poverty and create a fairer society",
            "encourage businesses to move abroad",
            "increase the number of retired people",
            "reduce the power of the government",
            "prepare for future conflicts in Europe",
          ],
          "Destekçileri refah devletini yoksulluğu azaltmanın ve daha adil bir toplum yaratmanın yolu olarak gördü.",
        ],
        [
          "One reason why welfare states are under pressure is that ----.",
          [
            "fewer workers must support more retired people",
            "most citizens no longer want health care",
            "taxes have risen too quickly in all countries",
            "there are too many young people in Europe",
            "governments have stopped paying pensions",
          ],
          "Yaşlanan nüfus daha az çalışanın daha fazla emekliyi desteklemesi anlamına gelir.",
        ],
        [
          "The passage suggests that encouraging women and older people to work ----.",
          [
            "is one way some countries have tried to support the welfare system",
            "has made the welfare state completely unnecessary in Europe",
            "was the main cause of the problems described in the passage",
            "has been rejected by all European governments",
            "reduces the number of people paying taxes",
          ],
          "Bazı ülkeler daha fazla insanın, özellikle kadınların ve yaşlıların çalışmaya devam etmesini teşvik ederek tepki vermiştir.",
        ],
      ],
    },
    {
      text:
        "Coffee houses first appeared in the Ottoman Empire in the sixteenth century and quickly became important social spaces. Men gathered there to drink coffee, play games, listen to storytellers and discuss the news. Because these conversations sometimes turned to politics, the authorities occasionally tried to close them, fearing they could become centres of opposition. Coffee houses spread to Europe in the seventeenth century. In London, they became known as 'penny universities', since for the price of a cup of coffee, anyone could join discussions with merchants, scientists and writers. Some historians argue that these spaces played a role in the development of public debate and even of modern institutions such as insurance companies and stock exchanges.",
      questions: [
        [
          "According to the passage, Ottoman authorities sometimes tried to close coffee houses because ----.",
          [
            "they feared political discussions there could encourage opposition",
            "coffee was considered harmful to health",
            "storytellers charged too much money for their performances",
            "they were becoming too popular with visiting European merchants",
            "they were located too far from the city centre",
          ],
          "Yetkililer konuşmaların bazen siyasete kaydığını ve muhalefet merkezlerine dönüşebileceğinden korktukları için kahvehaneleri kapatmaya çalıştı.",
        ],
        [
          "London coffee houses were called 'penny universities' because ----.",
          [
            "customers could take part in learned discussions for the price of a coffee",
            "they were owned and managed by the city's universities",
            "coffee cost only a penny for students",
            "regular lectures were given there by university professors",
            "they were located near universities",
          ],
          "Bir fincan kahve fiyatına herkes tüccarlar, bilim insanları ve yazarlarla tartışmalara katılabiliyordu.",
        ],
        [
          "Some historians believe that coffee houses ----.",
          [
            "contributed to the growth of public debate and some modern institutions",
            "were the main cause of the decline of the Ottoman Empire",
            "had no real influence on the development of European society",
            "were mainly places for women to meet and discuss family matters",
            "were banned in Europe for two centuries",
          ],
          "Bazı tarihçiler bu mekânların kamusal tartışmanın ve sigorta şirketleri gibi kurumların gelişiminde rol oynadığını savunur.",
        ],
      ],
    },
    {
      text:
        "The 'digital divide' refers to the gap between people who have access to modern information technology and those who do not. Although internet use has grown rapidly worldwide, around a third of the global population still remains offline, most of them in low-income countries and rural areas. Even within wealthy countries, differences persist: older people, those on low incomes and people with less education are less likely to use the internet. The COVID-19 pandemic made this divide more visible, as schools, workplaces and public services moved online. Children without a computer or reliable internet connection at home often struggled to keep up with their lessons. Closing the gap, experts say, requires not only better infrastructure but also training in digital skills.",
      questions: [
        [
          "According to the passage, the digital divide ----.",
          [
            "exists both between and within countries",
            "has disappeared in wealthy countries",
            "affects only people in rural areas",
            "was created by the COVID-19 pandemic",
            "concerns only access to mobile phones",
          ],
          "Parça uçurumun düşük gelirli ülkelerde olduğu kadar zengin ülkelerin içinde de sürdüğünü söyler.",
        ],
        [
          "The pandemic is mentioned in the passage to show that ----.",
          [
            "the consequences of the divide became more obvious when services moved online",
            "most children preferred online lessons to traditional classroom teaching",
            "internet use fell sharply in most countries during 2020",
            "schools stopped using computers",
            "older people learned digital skills quickly",
          ],
          "Okullar ve hizmetler çevrim içine taşındığında uçurum daha görünür hâle gelmiştir.",
        ],
        [
          "According to the experts mentioned, closing the gap requires ----.",
          [
            "both improved infrastructure and digital skills training",
            "only cheaper mobile phones and internet packages for families",
            "closing schools in rural areas",
            "reducing the number of online public services available",
            "banning internet use for children",
          ],
          "Uzmanlara göre yalnızca daha iyi altyapı değil, dijital beceri eğitimi de gerekir.",
        ],
      ],
    },
    {
      text:
        "Language shapes not only how people communicate but also how they think, according to some linguists. A well-known example involves the way languages describe space. Speakers of English typically use relative terms such as 'left' and 'right', while speakers of some Aboriginal Australian languages use absolute directions such as north and south, even for small objects on a table. Studies have found that speakers of such languages have a remarkable sense of direction. Critics, however, caution against exaggerating these effects. They argue that while language may influence certain habits of thought, it does not determine what people are able to think. Most researchers now support a moderate position somewhere between these two views.",
      questions: [
        [
          "The example of Aboriginal Australian languages shows that ----.",
          [
            "some languages describe space using fixed compass directions",
            "all the world's languages use left and right in exactly the same way",
            "English speakers have a better sense of direction",
            "Aboriginal languages have no words for direction",
            "language has no connection with thought",
          ],
          "Bazı Aborijin dilleri küçük nesneler için bile kuzey ve güney gibi mutlak yönler kullanır.",
        ],
        [
          "Critics of the idea that language shapes thought argue that ----.",
          [
            "language may affect habits of thought but does not limit what people can think",
            "speakers of different languages cannot understand each other",
            "English is the best and clearest language for scientific thinking",
            "Aboriginal languages should not be studied",
            "language completely determines how people think",
          ],
          "Eleştirmenler dilin bazı düşünce alışkanlıklarını etkileyebileceğini ama insanların neyi düşünebileceğini belirlemediğini savunur.",
        ],
        [
          "Most researchers today ----.",
          [
            "take a position between the two extreme views",
            "completely reject any link between language and thought",
            "believe that language determines all thought",
            "study only Aboriginal languages",
            "agree that English shapes thought most strongly",
          ],
          "Son cümleye göre araştırmacıların çoğu iki görüş arasında ılımlı bir tutumu destekler.",
        ],
      ],
    },
    {
      text:
        "For centuries, nomadic pastoralists have moved with their herds across the grasslands of Central Asia, the Sahel and other dry regions. Their mobility allows them to make use of scattered water and pasture, which would be difficult to manage through settled farming. However, nomadic communities face growing pressures. National borders, private land ownership and conservation areas have restricted their traditional routes. Climate change has made rainfall less predictable, and governments have often encouraged nomads to settle in permanent villages, where schools and health services are easier to provide. Some researchers argue that these policies overlook the environmental knowledge of pastoralists and that well-managed mobile herding can help protect grasslands.",
      questions: [
        [
          "According to the passage, the mobility of nomadic pastoralists allows them to ----.",
          [
            "use water and pasture that are spread over wide areas",
            "avoid paying taxes to the national governments of the region",
            "grow crops successfully in very dry regions without irrigation",
            "live permanently near large cities",
            "move quickly across national borders",
          ],
          "Göçebelik dağınık su ve meralardan yararlanmalarını sağlar.",
        ],
        [
          "Governments have encouraged nomads to settle mainly because ----.",
          [
            "services such as schools and health care are easier to provide in villages",
            "nomads have destroyed most of the grasslands they use",
            "they want to increase the number and size of the herds",
            "climate change has made settled farming easier",
            "nomads have asked to stop moving",
          ],
          "Kalıcı köylerde okul ve sağlık hizmetleri sunmak daha kolaydır.",
        ],
        [
          "The researchers mentioned in the last sentence believe that ----.",
          [
            "nomadic knowledge and mobile herding can benefit the environment",
            "all nomads should settle in permanent villages as soon as possible",
            "grasslands are best protected by building fences around them",
            "nomadic life has no future in any region",
            "conservation areas should be expanded",
          ],
          "Araştırmacılar politikaların göçebelerin çevre bilgisini göz ardı ettiğini ve iyi yönetilen hareketli hayvancılığın meraları korumaya yardım edebileceğini savunur.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The ancient Greeks held the first Olympic Games in 776 BC. ---- During the games, a truce was declared so that athletes and spectators could travel safely to Olympia.",
      [
        "The games were held every four years in honour of the god Zeus.",
        "Modern athletes train for many years before competing.",
        "Many cities compete to host the Olympic Games today.",
        "Greece is famous for its beautiful islands.",
        "Some sports are more popular in winter.",
      ],
      "Paragraf antik oyunları anlatır; boşlukta oyunların dört yılda bir Zeus onuruna yapıldığı bilgisi akışı sürdürür.",
    ],
    [
      "Many traditional societies passed on their history orally, through songs and stories. ---- As a result, historians increasingly use oral sources alongside written documents.",
      [
        "These accounts often preserve information that was never written down.",
        "Writing was invented in Mesopotamia.",
        "Many stories are told to children at bedtime.",
        "Libraries contain millions of books.",
        "Some songs are very difficult to sing.",
      ],
      "'As a result' bir gerekçe ister: sözlü anlatılar hiç yazılmamış bilgileri korur.",
    ],
    [
      "---- In the 1950s, for example, many Turkish workers moved to Germany to fill labour shortages in factories. Their families later joined them, creating large communities that remain today.",
      [
        "Labour shortages have often been a major cause of migration.",
        "Germany has one of the largest economies in Europe.",
        "Factories produce many different goods.",
        "Many people learn German at school.",
        "Families usually celebrate holidays together.",
      ],
      "Paragraf işgücü açığının göçe yol açtığı bir örnek verir; açılış cümlesi bu genellemeyi yapmalıdır.",
    ],
    [
      "Many economists believe that small businesses are vital for economic growth. ---- In addition, they often introduce new ideas and products to the market.",
      [
        "They create a large share of new jobs.",
        "Some businesses are owned by families.",
        "Large companies have many employees.",
        "Shops are usually closed on Sundays.",
        "Banks lend money to businesses.",
      ],
      "'In addition' bir başka katkıdan önce ilk katkının sayılmasını gerektirir: yeni işlerin büyük bölümünü yaratmaları.",
    ],
    [
      "In the past, most marriages in Europe were arranged by families. ---- Today, by contrast, most people choose their own partners, and marriage is seen primarily as a personal relationship.",
      [
        "They were often based on economic or political considerations.",
        "Weddings are usually held in summer.",
        "Many couples meet online today.",
        "Some people never marry.",
        "Divorce is legal in most countries.",
      ],
      "'Today, by contrast' karşılaştırması, geçmişteki evliliklerin ekonomik ya da siyasi temellere dayandığını söyleyen bir öncül gerektirir.",
    ],
    [
      "Voter turnout among young people is often lower than among older age groups. ---- Some countries have tried to address this by teaching citizenship in schools or allowing people to register to vote online.",
      [
        "Researchers suggest that many young people feel that politics does not reflect their concerns.",
        "Older people often have more free time.",
        "Elections are usually held on Sundays.",
        "Many young people use social media.",
        "Political parties hold conferences every year.",
      ],
      "Ülkelerin aldığı önlemler bir sorunun nedenine yanıttır; boşluk gençlerin siyasetin kendi kaygılarını yansıtmadığını hissetmesini açıklamalıdır.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The Cold War was a period of tension between the United States and the Soviet Union.",
        "It lasted from the end of the Second World War until 1991.",
        "The two superpowers never fought each other directly.",
        "Basketball was invented in the United States in 1891.",
        "Instead, they competed through alliances, propaganda and the arms race.",
      ],
      odd: 3,
      why: "Parça Soğuk Savaş'ı anlatır. Basketbolun icadından söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Social mobility refers to people's ability to move between social classes.",
        "In societies with high mobility, children from poor families can achieve better jobs than their parents.",
        "Education is often seen as the key to mobility.",
        "Many schools have uniforms.",
        "However, studies show that family background still strongly influences success.",
      ],
      odd: 3,
      why: "Parça sosyal hareketliliği anlatır. Okul üniformalarından söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "The Renaissance began in Italy in the fourteenth century.",
        "It marked a renewed interest in classical art and learning.",
        "Pasta is a popular dish in Italy.",
        "Artists such as Leonardo da Vinci produced famous works during this period.",
        "The movement later spread to other parts of Europe.",
      ],
      odd: 2,
      why: "Parça Rönesans'ı anlatır. Makarnanın İtalya'da popüler olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many cities are trying to reduce traffic congestion.",
        "Some have introduced charges for driving into the city centre.",
        "Others have invested in public transport and cycle lanes.",
        "The first cars were built in the late nineteenth century.",
        "These measures have reduced traffic in several cities.",
      ],
      odd: 3,
      why: "Parça şehirlerin trafik sıkışıklığına karşı önlemlerini anlatır. İlk arabaların yapımından söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Volunteering can bring many benefits to communities.",
        "Volunteers help in hospitals, schools and charities.",
        "They also gain new skills and make new friends.",
        "Some studies suggest that volunteering improves mental health.",
        "Many charities were founded in the nineteenth century.",
      ],
      odd: 4,
      why: "Parça gönüllülüğün faydalarını anlatır. Hayır kurumlarının kuruluş tarihinden söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Folk tales were traditionally passed down orally from one generation to the next.",
        "Many of them teach moral lessons.",
        "Similar stories can be found in very different cultures.",
        "Some scholars believe this shows shared human concerns.",
        "Television became common in homes in the 1960s.",
      ],
      odd: 4,
      why: "Parça halk masallarını anlatır. Televizyonun yaygınlaşmasından söz eden V. cümle konu dışıdır.",
    },
  ],
};
