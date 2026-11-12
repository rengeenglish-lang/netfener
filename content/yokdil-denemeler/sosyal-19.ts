import type { YokdilDeneme } from "./types";

export const SOSYAL_19: YokdilDeneme = {
  no: 19,
  field: "sosyal",
  vocab: [
    [
      "The first Ottoman printing press was allowed to publish secular books, but religious texts were ---- from its list.",
      ["excluded", "selected", "copied", "praised", "translated"],
      "İlk Osmanlı matbaasının dünyevi kitaplar basabildiği, ancak dinî metinlerin listesinden 'çıkarıldığı' (excluded) anlatılır.",
    ],
    [
      "People often continue a failing project simply because they have already ---- so much time and money in it.",
      ["invested", "saved", "borrowed", "wasted away", "refused"],
      "İnsanların başarısız bir projeye zaten çok zaman ve para 'yatırdıkları' (invested) için devam ettiği anlatılır.",
    ],
    [
      "The famine ---- a wave of emigration that reduced Ireland's population for decades.",
      ["set off", "put off", "turned down", "looked into", "got over"],
      "Kıtlığın İrlanda nüfusunu on yıllarca azaltan bir göç dalgasını 'başlattığı' (set off) anlatılır.",
    ],
    [
      "Although it was extremely ----, the walled city had low crime rates and a strong sense of community.",
      ["overcrowded", "deserted", "luxurious", "isolated", "orderly"],
      "Kentin son derece 'aşırı kalabalık' (overcrowded) olmasına rağmen suç oranlarının düşük olduğu anlatılır.",
    ],
    [
      "In the game, players often ---- offers they consider unfair, even though this means they receive nothing.",
      ["reject", "accept", "propose", "double", "ignore"],
      "Oyunda oyuncuların hiçbir şey almayacak olsalar bile adaletsiz buldukları teklifleri 'reddettiği' (reject) anlatılır.",
    ],
    [
      "The company was the first to issue shares that could be freely ---- on a public exchange.",
      ["traded", "hidden", "printed", "destroyed", "copied"],
      "Şirketin halka açık bir borsada serbestçe 'alınıp satılabilen' (traded) hisse senetleri çıkaran ilk şirket olduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first book printed by the Ottoman press, a dictionary, ---- in 1729.",
      ["was published", "published", "has published", "was publishing", "had published"],
      "Kitap yayımlanan bir şeydir ve olay geçmişte olmuştur: edilgen 'was published'.",
    ],
    [
      "If the company had abandoned the project earlier, it ---- millions of dollars.",
      ["might have saved", "might save", "will save", "saved", "had saved"],
      "Type 3 koşul cümlesi ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time the famine ended, around a million people ---- and another million had emigrated.",
      ["had died", "have died", "die", "will die", "were dying"],
      "Kıtlığın bitişinden (geçmiş) önce tamamlanmış eylem: Past Perfect 'had died'.",
    ],
    [
      "The researchers, ---- fake patients were admitted to psychiatric hospitals, published their findings in 1973.",
      ["whose", "who", "which", "whom", "where"],
      "Sahte hastalar araştırmacılara aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Never before ---- so many people lived in such a small area.",
      ["had", "did", "was", "has", "would"],
      "'Never before' ile başlayan cümle devrik olur ve geçmişteki bir andan önceki durum için 'had' kullanılır.",
    ],
    [
      "The company's profits were so large ---- its shareholders received enormous dividends.",
      ["that", "which", "as", "so", "than"],
      "'so large that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- economic theory predicts that people should accept any offer, many refuse small ones.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Kuramın her teklifin kabul edilmesini öngörmesi ile pek çoğunun küçük teklifleri reddetmesi zıttır: 'Although'.",
    ],
    [
      "Families ---- crops had failed were often evicted from their land.",
      ["whose", "who", "which", "whom", "where"],
      "Ürünler ailelere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "The fake patients are reported ---- normally once they had been admitted.",
      ["to have behaved", "to behave", "behaving", "to be behaving", "having behaved"],
      "Geçmişte gerçekleştiği bildirilen bir davranış: 'be reported to have + V3', 'to have behaved'.",
    ],
    [
      "The press operated for only a short time ---- printed fewer than twenty books.",
      ["and", "but", "or", "unless", "so that"],
      "İki olgu birbirine eklenir: 'and'.",
    ],
    [
      "Buildings ---- without official permission rose to fourteen storeys.",
      ["constructed", "constructing", "which constructed", "to construct", "have constructed"],
      "Binalar inşa edilen yapılardır; edilgen anlamlı geçmiş ortaç 'constructed' gerekir.",
    ],
    [
      "Investors bought shares ---- they could share in the profits of the trade.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Many managers act as if the money already spent ---- still be recovered.",
      ["could", "can be", "will", "has", "is"],
      "'as if' ile gerçek dışı bir benzetme yapılır; geçmiş biçimli kip 'could' kullanılır.",
    ],
    [
      "The more money a company has spent on a project, ---- it is to abandon it.",
      ["the harder", "harder", "the hardest", "more hard", "the more hard"],
      "'The more …, the harder …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Printing with movable type spread rapidly across Europe in the fifteenth century, but in the Ottoman Empire, the first press to print books in Turkish did not open until 1727. Its founder, İbrahim Müteferrika, was a scholar and diplomat {1} believed that printing would help the empire to keep up with European advances in knowledge. He obtained permission from the sultan and religious authorities on condition that the press would not print the Qur'an or other religious texts. Between 1729 and 1742, the press produced seventeen works, {2} dictionaries, histories, geographies and a book on military science. The books were beautifully made, but they sold slowly and were expensive. Historians have offered several explanations for the late arrival of printing. Some point to opposition from the large community of scribes {3} made a living from copying manuscripts, {4} others emphasise that handwritten books were highly valued as works of art. Whatever the reasons, printing became widespread in the empire only in the nineteenth century, {5} newspapers and schools created a much larger demand for printed material.",
      blanks: [
        [
          "(21) ----",
          ["who", "which", "whose", "whom", "where"],
          "Boşluk 'a scholar and diplomat' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'who'.",
        ],
        [
          "(22) ----",
          ["including", "included", "to include", "includes", "having included"],
          "Basılan eserler sıralanır; örnek veren 'including' gerekir.",
        ],
        [
          "(23) ----",
          ["who", "which", "where", "what", "whose"],
          "Boşluk 'scribes' kişilerini niteleyen ve özne görevindeki ilgi zamiridir: 'who'.",
        ],
        [
          "(24) ----",
          ["while", "because", "unless", "so that", "until"],
          "Bazı tarihçilerin açıklaması ile diğerlerininki karşılaştırılır: 'while'.",
        ],
        [
          "(25) ----",
          ["when", "which", "where", "who", "whose"],
          "Virgülden sonra 'the nineteenth century' dönemini niteleyen zaman bildiren ilgi zamiri 'when' gerekir.",
        ],
      ],
    },
    {
      text:
        "Imagine that you have paid a lot for a concert ticket, but when the night arrives you feel ill and the weather is terrible. Many people would still go, reasoning that otherwise the money would be wasted. Economists call this the 'sunk cost fallacy'. A sunk cost is money, time or effort that has already been spent and cannot be recovered. {1} it cannot be recovered, it should not affect future decisions: the only question is whether going to the concert will now be more enjoyable than staying at home. Yet people find it very difficult to ignore what they have already invested. The fallacy affects not only individuals but also companies and governments. A famous example is the Concorde supersonic aircraft, {2} the British and French governments continued to fund long after it had become clear that it would never make a profit. {3} this reason, the fallacy is sometimes called the 'Concorde effect'. Psychologists suggest that people continue with failing projects partly {4} abandoning them would mean admitting that they had made a mistake. Organisations can reduce the risk {5} regularly reviewing projects and asking whether they would start them today.",
      blanks: [
        [
          "(26) ----",
          ["Since", "Unless", "Although", "Until", "Whereas"],
          "Batık maliyet geri alınamadığı 'için' gelecekteki kararları etkilememelidir: neden bildiren 'Since'.",
        ],
        [
          "(27) ----",
          ["which", "who", "where", "what", "whose"],
          "Virgülden sonra 'the Concorde supersonic aircraft' ifadesini niteleyen ve nesne görevindeki ilgi zamiri 'which' gerekir.",
        ],
        [
          "(28) ----",
          ["For", "By", "With", "In", "At"],
          "'For this reason' = 'bu nedenle' kalıplaşmış bir ifadedir: 'For'.",
        ],
        [
          "(29) ----",
          ["because", "although", "unless", "whereas", "despite"],
          "İnsanların başarısız projelere devam etmesinin nedeni hata yaptıklarını kabul etmek istememeleridir: 'because'.",
        ],
        [
          "(30) ----",
          ["by", "for", "with", "from", "at"],
          "'by + -ing' bir şeyin nasıl yapıldığını anlatır: 'by regularly reviewing'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Müteferrika's books were carefully produced, ----.",
      [
        "they were expensive and sold slowly",
        "his press printed dictionaries and histories",
        "he received permission from the sultan",
        "he had worked as a diplomat",
        "the press opened in Istanbul in 1727",
      ],
      "'Although' zıtlık ister: kitaplar özenle üretilse de pahalıydı ve yavaş satıldı.",
    ],
    [
      "If people ignored money they had already spent, ----.",
      [
        "they would make more rational decisions about the future",
        "the concert had been cancelled because of the weather",
        "most tickets are sold several months in advance",
        "the aircraft will fly faster than the speed of sound",
        "economists studied the problem in the 1980s",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + yalın fiil' ister: gelecek hakkında daha akılcı kararlar verirlerdi.",
    ],
    [
      "Many Irish families emigrated to the United States during the famine ----.",
      [
        "because they could no longer feed themselves at home",
        "so that the potato crop could recover more quickly",
        "although food was plentiful in most parts of Ireland",
        "unless their landlords offered them better farms",
        "even if the journey across the ocean was free",
      ],
      "Ailelerin göç etmesinin nedeni artık kendilerini evde besleyememeleridir: 'because'.",
    ],
    [
      "Since the walled city was demolished in the early 1990s, ----.",
      [
        "a public park has been built on the site",
        "thousands of people had lived in its narrow streets",
        "most of its buildings would have been rebuilt",
        "the government will build new apartments there",
        "residents ran small factories inside it",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has been built'.",
    ],
    [
      "Unless the responder accepts the offer, ----.",
      [
        "neither player receives any money at all",
        "the proposer would have offered half",
        "most players had been university students",
        "the game will be played in many countries",
        "economists predicted a different result",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle geniş zamanla bir kuralı anlatır: cevap veren kabul etmezse iki oyuncu da para almaz.",
    ],
    [
      "The Dutch company raised money from thousands of ordinary investors ----.",
      [
        "in order to finance expensive voyages to Asia",
        "because it wanted to reduce its trade with Asia",
        "although it had no plans to send any ships",
        "so that investors would lose all their money",
        "unless the government provided the funds",
      ],
      "Şirketin binlerce sıradan yatırımcıdan para toplamasının amacı Asya'ya pahalı seferleri finanse etmektir: 'in order to'.",
    ],
    [
      "The fake patients found that once they had been labelled as mentally ill, ----.",
      [
        "staff interpreted their normal behaviour as a sign of illness",
        "they will be released from hospital immediately",
        "they would have told the doctors the truth",
        "most hospitals had been built in the countryside",
        "the study is taught in psychology courses",
      ],
      "'once' ile geçmişte bir durumun ardından gelen sonuç anlatılır: personel onların normal davranışlarını hastalık belirtisi olarak yorumladı.",
    ],
    [
      "So dependent were many Irish families on the potato ----.",
      [
        "that the failure of the crop left them with almost nothing to eat",
        "because it grew well in poor soil",
        "although they also kept some animals",
        "while landlords exported other crops",
        "unless the weather was very dry",
      ],
      "Devrik 'So dependent were … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While economists expected players to accept any offer greater than zero, ----.",
      [
        "many players rejected offers they thought were unfair",
        "the game was played with real money in some studies",
        "the proposer decided how to divide the money",
        "the experiment was repeated in several countries",
        "most players were students at the time",
      ],
      "'While' iki durumu karşılaştırır: ekonomistler sıfırdan büyük her teklifin kabulünü beklerken pek çok oyuncu adaletsiz bulduğu teklifleri reddetti.",
    ],
    [
      "Once the company's shares could be bought and sold freely, ----.",
      [
        "investors were able to sell without waiting for a voyage to end",
        "the ships will sail to Asia every year",
        "the company would have gone bankrupt",
        "most traders had worked in Amsterdam",
        "the shares are kept in museums",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: yatırımcılar bir seferin bitmesini beklemeden satış yapabildi.",
    ],
    [
      "No sooner had the potato blight reached Ireland ----.",
      [
        "than crops across the country began to rot",
        "when farmers had planted their fields",
        "that the government will send help",
        "before the famine had begun",
        "so many families left for America",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "The press could operate only if it avoided printing religious works.",
      [
        "Matbaa, ancak dinî eser basmaması şartıyla faaliyet gösterebildi.",
        "Matbaa, yalnızca dinî metin bastığı için faaliyet göstermeye devam edebildi.",
        "Dinî metinler basıldığı sürece matbaanın faaliyet göstermesi yasaklandı.",
        "Matbaa, dinî metin basma izni alamadığı için kısa sürede kapandı.",
        "Matbaanın hangi kitapları basacağı konusunda hiçbir kural yoktu.",
      ],
      "'could operate only if it avoided printing religious works' 'dinî eser basmaması şartıyla faaliyet gösterebildi' anlamına gelir.",
    ],
    [
      "Money that has already been spent should not influence decisions about the future.",
      [
        "Önceden harcanmış olan para, gelecekle ilgili kararları etkilememelidir.",
        "Gelecekte harcanacak para, önceden alınan kararları değiştirmelidir.",
        "Önceden harcanan para, gelecekteki kararlar için en önemli etkendir.",
        "Gelecekle ilgili kararlar, harcanan paranın geri alınmasını sağlar.",
        "Para harcamak her zaman kötü kararlara yol açar.",
      ],
      "'Money that has already been spent' 'önceden harcanmış olan para', 'should not influence' 'etkilememelidir' demektir.",
    ],
    [
      "Even while people were starving, large quantities of food continued to be exported from Ireland.",
      [
        "İnsanlar açlıktan ölürken bile İrlanda'dan büyük miktarda yiyecek ihraç edilmeye devam etti.",
        "İnsanlar açlıktan öldüğü için İrlanda'ya büyük miktarda yiyecek ithal edildi.",
        "İrlanda'dan yiyecek ihracatı, açlık başlamadan önce tamamen durduruldu.",
        "Açlıktan ölen insanlar, ihraç edilen yiyecekleri geri almaya çalıştı.",
        "İrlanda o dönemde hiç yiyecek ihraç etmedi.",
      ],
      "'Even while people were starving' 'insanlar açlıktan ölürken bile', 'continued to be exported' 'ihraç edilmeye devam etti' demektir.",
    ],
    [
      "Despite the lack of planning, residents of the walled city developed their own systems for water and rubbish.",
      [
        "Planlama eksikliğine rağmen surlu kentin sakinleri su ve çöp için kendi sistemlerini geliştirdi.",
        "Surlu kentin sakinleri, planlama eksikliği nedeniyle suya ve çöp toplamaya hiç erişemedi.",
        "Hükümet, surlu kentin su ve çöp sistemlerini sakinler adına dikkatle planladı.",
        "Surlu kentin sakinleri, kendi sistemlerini geliştirmek yerine kenti terk etti.",
        "Kentte su ve çöp sorunu hiç yaşanmadı.",
      ],
      "'Despite the lack of planning' 'planlama eksikliğine rağmen', 'developed their own systems' 'kendi sistemlerini geliştirdi' demektir.",
    ],
    [
      "The results suggest that people care about fairness, not only about their own gain.",
      [
        "Sonuçlar, insanların yalnızca kendi kazançlarını değil adaleti de önemsediğini düşündürüyor.",
        "Sonuçlar, insanların adaleti değil yalnızca kendi kazançlarını önemsediğini gösteriyor.",
        "İnsanlar, kendi kazançları arttığında adaleti tamamen unutur.",
        "Sonuçlar, adaletin insanların kazançlarını her zaman azalttığını kanıtlıyor.",
        "İnsanlar ne adaleti ne de kazancı önemser.",
      ],
      "'care about fairness, not only about their own gain' 'yalnızca kendi kazançlarını değil adaleti de önemsediğini' anlamına gelir.",
    ],
    [
      "The company's charter gave it the right to wage war and make treaties in Asia.",
      [
        "Şirketin tüzüğü ona Asya'da savaş açma ve antlaşma yapma hakkı tanıyordu.",
        "Şirketin tüzüğü, Asya'da savaş açmasını ve antlaşma yapmasını açıkça yasaklıyordu.",
        "Asyalı hükümdarlar, şirkete tüzüğünü değiştirmesi için baskı yaptı.",
        "Şirket, Asya'daki savaşlar nedeniyle tüzüğünü kaybetti.",
        "Şirketin yalnızca ticaret yapma hakkı vardı.",
      ],
      "'gave it the right to wage war and make treaties' 'ona savaş açma ve antlaşma yapma hakkı tanıyordu' demektir.",
    ],
  ],
  trEn: [
    [
      "İlk Türkçe matbaa, Avrupa'daki matbaalardan yaklaşık üç yüz yıl sonra kuruldu.",
      [
        "The first Turkish press was founded about three hundred years after the presses in Europe.",
        "The first presses in Europe were founded about three hundred years after the Turkish press.",
        "The first Turkish press closed about three hundred years after it was founded.",
        "European printers founded the first Turkish press three hundred years ago.",
        "The first Turkish press was founded at the same time as those in Europe.",
      ],
      "'Avrupa'daki matbaalardan yaklaşık üç yüz yıl sonra' 'about three hundred years after the presses in Europe' karşılığıdır.",
    ],
    [
      "Batık maliyet yanılgısı, başarısız projelerin uzun süre devam etmesine yol açabilir.",
      [
        "The sunk cost fallacy can cause failing projects to continue for a long time.",
        "The sunk cost fallacy helps companies to end failing projects quickly.",
        "Failing projects are the main cause of the sunk cost fallacy.",
        "Successful projects are rarely affected by decisions about cost.",
        "The sunk cost fallacy has nothing to do with projects.",
      ],
      "'başarısız projelerin uzun süre devam etmesine yol açabilir' 'can cause failing projects to continue for a long time' karşılığıdır.",
    ],
    [
      "Patates hastalığı, İrlanda'da büyük bir kıtlığa neden oldu.",
      [
        "The potato disease caused a great famine in Ireland.",
        "The famine in Ireland caused a disease among potatoes.",
        "Potatoes protected Ireland from a great famine.",
        "A great famine in Ireland ended the potato disease.",
        "Ireland did not grow potatoes at that time.",
      ],
      "'Patates hastalığı' 'the potato disease', 'büyük bir kıtlığa neden oldu' 'caused a great famine' karşılığıdır.",
    ],
    [
      "Surlu kent, yaklaşık otuz bin kişiye ev sahipliği yapıyordu.",
      [
        "The walled city was home to about thirty thousand people.",
        "About thirty thousand people built the walls of the city.",
        "The walled city was designed for about thirty thousand visitors.",
        "About thirty thousand people left the walled city every year.",
        "Nobody lived inside the walled city.",
      ],
      "'yaklaşık otuz bin kişiye ev sahipliği yapıyordu' 'was home to about thirty thousand people' karşılığıdır.",
    ],
    [
      "Oyuncular, adaletsiz buldukları teklifleri sıklıkla reddetti.",
      [
        "Players often rejected offers that they considered unfair.",
        "Players always accepted offers, however unfair they were.",
        "Players made unfair offers in order to win more money.",
        "Unfair offers were removed from the game by the researchers.",
        "Players were not allowed to reject offers.",
      ],
      "'adaletsiz buldukları teklifleri' 'offers that they considered unfair', 'sıklıkla reddetti' 'often rejected' karşılığıdır.",
    ],
    [
      "Sahte hastalar hastaneye kabul edildikten sonra normal davrandı.",
      [
        "After being admitted to hospital, the fake patients behaved normally.",
        "The fake patients were admitted because they behaved strangely in hospital.",
        "The doctors behaved strangely after the fake patients were admitted.",
        "The fake patients refused to enter the hospital.",
        "The fake patients were never admitted to any hospital.",
      ],
      "'hastaneye kabul edildikten sonra' 'after being admitted to hospital', 'normal davrandı' 'behaved normally' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1840s, roughly one in three Irish people lived mainly on potatoes. The crop grew well in poor soil and could feed a large family from a small plot of land. In 1845, a disease known as potato blight, caused by a fungus-like organism, arrived from North America and destroyed much of the harvest. It returned in the following years, and between 1845 and 1852 around a million people died from hunger and related diseases. Another million or more emigrated, mainly to Britain and North America. The disaster was made worse by government policy. The British authorities provided some relief, but they were reluctant to interfere with the free market, and large quantities of grain and livestock continued to be exported from Ireland throughout the famine. Many tenants who could not pay their rent were evicted. Ireland's population continued to fall for decades and has never returned to its pre-famine level.",
      questions: [
        [
          "According to the passage, many Irish people depended on the potato because ----.",
          [
            "it could produce a lot of food from little land",
            "it was the only crop that could be exported",
            "it was resistant to most plant diseases",
            "it had been introduced by the government",
            "it was cheaper to buy than to grow",
          ],
          "Metne göre patates verimsiz toprakta iyi yetişiyor ve küçük bir araziden büyük bir aileyi besleyebiliyordu.",
        ],
        [
          "The writer mentions food exports in order to show that ----.",
          [
            "government policy worsened the effects of the famine",
            "Ireland had no other crops besides potatoes",
            "most food was sent from Britain to Ireland",
            "the famine ended quickly in most regions",
            "the blight affected grain as well as potatoes",
          ],
          "Kıtlık boyunca tahıl ve hayvan ihracatının sürmesi, hükümet politikasının felaketi daha da kötüleştirdiğini göstermek için anılır.",
        ],
        [
          "It can be understood from the passage that the famine ----.",
          [
            "had long-lasting effects on Ireland's population",
            "lasted for only one year",
            "was caused mainly by emigration",
            "affected only a small number of people",
            "led to an increase in Ireland's population",
          ],
          "İrlanda nüfusunun on yıllarca düşmeye devam etmesi ve kıtlık öncesi düzeye hiç dönmemesi, uzun süreli etkilerini gösterir.",
        ],
      ],
    },
    {
      text:
        "For much of the twentieth century, a small area in Hong Kong known as the Kowloon Walled City was one of the most densely populated places on Earth. Because of a historical dispute between Britain and China over who governed it, the area was largely ignored by the authorities. As a result, buildings were constructed without official permission, rising to fourteen storeys and pressed so closely together that many alleys never saw daylight. At its peak, around thirty thousand people lived in an area of less than three hectares. The city had a reputation for crime, but it was also home to small factories, shops, schools and unlicensed doctors and dentists, and many residents described a strong sense of community. Residents organised their own systems for supplying water and removing rubbish. In 1993, the governments of Britain and China agreed to demolish the city, and the site was turned into a public park.",
      questions: [
        [
          "According to the passage, the walled city developed as it did mainly because ----.",
          [
            "neither government took clear responsibility for it",
            "it was carefully planned by the British authorities",
            "it was located far from the centre of Hong Kong",
            "its residents were not allowed to build",
            "it was used mainly as a military base",
          ],
          "Metne göre İngiltere ile Çin arasındaki yönetim anlaşmazlığı nedeniyle bölge yetkililerce büyük ölçüde görmezden gelinmiştir.",
        ],
        [
          "The writer suggests that life in the walled city ----.",
          [
            "was not as negative as its reputation suggested",
            "was dominated entirely by criminals",
            "had no economic activity at all",
            "was well organised by the government",
            "was similar to life in a wealthy suburb",
          ],
          "Suç ününe rağmen fabrikalar, okullar ve güçlü bir topluluk duygusu olduğunun belirtilmesi, yaşamın ününün düşündürdüğü kadar olumsuz olmadığını gösterir.",
        ],
        [
          "According to the passage, residents of the walled city ----.",
          [
            "arranged basic services for themselves",
            "relied entirely on the government for water",
            "were forced to leave in the 1950s",
            "lived in buildings of one or two storeys",
            "were mostly doctors and dentists",
          ],
          "Metinde sakinlerin su temini ve çöp toplama için kendi sistemlerini oluşturduğu belirtilir.",
        ],
      ],
    },
    {
      text:
        "In the ultimatum game, a simple experiment used by economists and psychologists, two players must divide a sum of money. The first player, the proposer, decides how to split it, and the second player, the responder, can either accept or reject the offer. If the offer is accepted, the money is divided as proposed; if it is rejected, neither player receives anything. Traditional economic theory predicts that the proposer will offer the smallest possible amount and that the responder will accept it, since a little money is better than none. In practice, however, most proposers offer between forty and fifty per cent, and responders frequently reject offers below about twenty per cent. These results suggest that people are motivated by fairness and are willing to pay a cost to punish behaviour they regard as unfair. Studies in different societies have found considerable variation, which suggests that ideas of fairness are shaped by culture.",
      questions: [
        [
          "According to traditional economic theory, the responder should ----.",
          [
            "accept any amount of money that is offered",
            "reject any offer below fifty per cent",
            "demand an equal share of the money",
            "make a counter-offer to the proposer",
            "refuse to take part in the game",
          ],
          "Metne göre geleneksel kuram, biraz paranın hiç yoktan iyi olduğu için cevap verenin en küçük miktarı bile kabul edeceğini öngörür.",
        ],
        [
          "The fact that responders reject low offers suggests that they ----.",
          [
            "are prepared to lose money to punish unfairness",
            "do not understand the rules of the game",
            "want the proposer to receive more money",
            "prefer to receive nothing in every case",
            "have been told to reject all offers",
          ],
          "Metinde insanların adaletsiz gördükleri davranışı cezalandırmak için bedel ödemeye istekli olduğu belirtilir.",
        ],
        [
          "According to the passage, studies in different societies have shown that ----.",
          [
            "notions of fairness differ from culture to culture",
            "people everywhere behave in exactly the same way",
            "the game cannot be played outside universities",
            "economic theory is correct in most societies",
            "proposers always offer half of the money",
          ],
          "Metnin sonunda farklı toplumlarda önemli farklılıklar bulunduğu ve adalet anlayışının kültürce şekillendiği belirtilir.",
        ],
      ],
    },
    {
      text:
        "In 1602, the Dutch government granted a group of merchants a monopoly on trade between the Netherlands and Asia, creating the Dutch East India Company, known by its Dutch initials as the VOC. To pay for its expensive and risky voyages, the company sold shares to the public. Unlike earlier trading ventures, which raised money for a single voyage and then divided the profits, the VOC was a permanent company, and its shares could be bought and sold on the Amsterdam stock exchange. For this reason, historians frequently call it the earliest true joint-stock company. The VOC became enormously powerful. It was allowed to build forts, maintain armies, make treaties and even wage war, and it controlled much of the spice trade from what is now Indonesia. Its methods were often brutal, including the violent conquest of islands to secure control of valuable spices. The company declined in the eighteenth century and was dissolved in 1799.",
      questions: [
        [
          "According to the passage, the VOC differed from earlier trading ventures because it ----.",
          [
            "existed permanently and had shares that could be traded",
            "raised money for only one voyage at a time",
            "was owned entirely by the Dutch government",
            "did not sell shares to the public",
            "traded only within Europe",
          ],
          "Metne göre VOC kalıcı bir şirketti ve hisseleri Amsterdam borsasında alınıp satılabiliyordu.",
        ],
        [
          "It can be understood from the passage that the VOC ----.",
          [
            "had powers usually held by governments",
            "was a small company with little influence",
            "was not involved in the spice trade",
            "refused to use military force",
            "was founded in Indonesia",
          ],
          "Kale inşa etme, ordu bulundurma, antlaşma yapma ve savaş açma yetkisi, devletlere özgü yetkilere sahip olduğunu gösterir.",
        ],
        [
          "The writer's attitude towards the VOC's methods is ----.",
          [
            "critical",
            "admiring",
            "indifferent",
            "humorous",
            "uncertain",
          ],
          "Yazar şirketin yöntemlerini 'often brutal' (çoğu zaman acımasız) ve adaların şiddetle fethi olarak niteler; bu eleştirel bir tutumdur.",
        ],
      ],
    },
    {
      text:
        "In 1973, the American psychologist David Rosenhan published a study that shocked the psychiatric profession. He and several volunteers, none of whom had any history of mental illness, presented themselves at different psychiatric hospitals, claiming to hear voices. All were admitted. Once inside, they stopped reporting any symptoms and behaved normally, yet they were kept in hospital for an average of nineteen days, and most were discharged with a diagnosis of schizophrenia 'in remission'. Staff often interpreted ordinary behaviour, such as taking notes, as a sign of illness. Rosenhan argued that psychiatric diagnosis was unreliable and that once a person had been labelled, the label shaped how others saw them. The study contributed to major changes in diagnostic methods. In recent years, however, a writer who examined Rosenhan's records raised serious questions about whether all the details had been reported accurately.",
      questions: [
        [
          "According to the passage, the volunteers in Rosenhan's study ----.",
          [
            "had no previous history of mental illness",
            "were all doctors working in the hospitals",
            "continued to report symptoms in hospital",
            "were refused admission by most hospitals",
            "were released after a single day",
          ],
          "Metne göre gönüllülerin hiçbirinin akıl hastalığı geçmişi yoktu.",
        ],
        [
          "The writer mentions note-taking in order to show that ----.",
          [
            "normal actions were seen through the lens of a diagnosis",
            "the volunteers were secretly writing a book",
            "the hospitals encouraged patients to write",
            "the staff were interested in the volunteers' notes",
            "the volunteers had forgotten their instructions",
          ],
          "Not almak gibi sıradan davranışların hastalık belirtisi olarak yorumlanması, normal eylemlerin teşhis merceğinden görüldüğünü gösterir.",
        ],
        [
          "According to the last sentence, recent investigations ----.",
          [
            "have cast doubt on the accuracy of the study",
            "have confirmed every detail of the study",
            "have shown that the volunteers were ill",
            "have found that the hospitals did not exist",
            "have ignored Rosenhan's records",
          ],
          "Son cümlede Rosenhan'ın kayıtlarını inceleyen bir yazarın tüm ayrıntıların doğru bildirilip bildirilmediğine dair ciddi sorular ortaya attığı belirtilir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Every Ottoman sultan had his own tuğra, an elaborate calligraphic emblem containing his name and titles. ---- Because it was so complex, it was also difficult to forge.",
      [
        "It marked official papers, coins and buildings with his authority.",
        "Calligraphy was considered one of the most important arts in the Islamic world.",
        "Many Ottoman sultans also wrote poetry under special pen names.",
        "Official documents were usually written on high-quality paper.",
        "Some museums in Istanbul display collections of Ottoman documents.",
      ],
      "Boşluktan sonra karmaşık olduğu için taklit edilmesinin de zor olduğu söylenir; boşluğa tuğranın işlevini, yani resmî belgelerde ve paralarda otorite işareti olarak kullanıldığını anlatan cümle gelmelidir.",
    ],
    [
      "On Lake Titicaca, on the border between Peru and Bolivia, the Uros people live on floating islands made of reeds. ---- Because the reeds at the bottom gradually rot away, the islanders must constantly add new layers on top.",
      [
        "They build the islands by tying together thick mats of the plant.",
        "Lake Titicaca is one of the highest navigable lakes in the world.",
        "Many tourists visit the lake by boat from nearby towns.",
        "Fish are an important part of the local diet.",
        "Peru and Bolivia share a long border in the Andes.",
      ],
      "Boşluktan sonra alttaki sazların çürüdüğü ve üste yeni katman eklendiği anlatılır; boşluğa adaların nasıl yapıldığını, yani kalın saz katmanlarının birbirine bağlandığını anlatan cümle gelmelidir.",
    ],
    [
      "In the 1950s, international organisations adopted a standard spelling alphabet in which each letter is represented by a word, such as 'Alpha' for A and 'Bravo' for B. ---- It is still used today by pilots, sailors, soldiers and emergency services.",
      [
        "This reduced misunderstandings when messages were sent by radio or telephone.",
        "Radio was first used for communication at sea at the beginning of the century.",
        "Many languages use alphabets that are very different from English.",
        "Some pilots learn several foreign languages during their training.",
        "Telephones became common in homes after the Second World War.",
      ],
      "Boşluktan sonra 'It' ile alfabenin bugün de kullanıldığı söylenir; boşluğa alfabenin amacını, yani telsiz ve telefon iletişiminde yanlış anlamaları azalttığını anlatan cümle gelmelidir.",
    ],
    [
      "Roman roads were marked at regular intervals by stone pillars known as milestones. ---- Travellers could therefore calculate how far they had gone and how far they still had to go.",
      [
        "Each one showed the distance to the nearest town or to Rome.",
        "The Romans built thousands of kilometres of roads across their empire.",
        "Many Roman roads were built by soldiers.",
        "Stone was cut from quarries near the roads.",
        "Some modern roads follow the routes of Roman ones.",
      ],
      "Boşluktan sonra 'therefore' ile yolcuların mesafeyi hesaplayabildiği söylenir; boşluğa mil taşlarının en yakın kente ya da Roma'ya uzaklığı gösterdiğini anlatan cümle gelmelidir.",
    ],
    [
      "Around 122 CE, Emperor Hadrian had a fortified wall built across the north of Roman Britain. ---- Historians now believe that, as well as providing defence, it was used to control movement and collect taxes on goods crossing the frontier.",
      [
        "It stretched for more than a hundred kilometres from coast to coast.",
        "Britain was one of the most distant provinces of the Roman Empire.",
        "Many soldiers stationed in Britain came from other parts of the empire.",
        "Parts of the wall are now popular with walkers.",
        "The weather in northern Britain is often cold and wet.",
      ],
      "Boşluktan önce duvarın yapımı, sonra işlevleri anlatılır; boşluğa duvarın kıyıdan kıyıya yüz kilometreden uzun olduğunu anlatan, betimlemeyi sürdüren cümle gelmelidir.",
    ],
    [
      "The handshake is a common greeting in many parts of the world. ---- Whatever its origins, customs differ widely: in some cultures a firm grip is expected, while in others a gentle touch is considered more polite.",
      [
        "One theory says it began as a way of showing an empty, weaponless hand.",
        "Some people prefer to bow or kiss when they meet.",
        "Hands contain many small bones and muscles.",
        "Business meetings often begin with a handshake.",
        "Children learn greetings from their parents.",
      ],
      "Boşluktan sonra 'Whatever its origins' (kökeni ne olursa olsun) ifadesi gelir; boşluğa tokalaşmanın kökenine dair bir kuramı anlatan cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Money boxes shaped like pigs have been popular for centuries.",
        "Some historians link the name to a type of clay called 'pygg' used for pots.",
        "People kept coins in pots made from this clay.",
        "Pigs are intelligent animals that can learn to recognise their names.",
        "Over time, potters began making the containers in the shape of the animal.",
      ],
      odd: 3,
      why: "Parça domuz şeklindeki kumbaraların kökenini anlatır. Domuzların zeki hayvanlar olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In Tibet, colourful prayer flags are hung on mountain passes and rooftops.",
        "Each flag is printed with prayers and symbols.",
        "Mount Everest lies on the border between Nepal and China.",
        "Believers hold that the wind carries the prayers across the land.",
        "The five colours of the flags represent different natural elements.",
      ],
      odd: 2,
      why: "Parça Tibet dua bayraklarını anlatır. Everest Dağı'nın konumunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Clothing sizes were not standardised until the twentieth century.",
        "Before then, most clothes were made to measure by tailors or at home.",
        "Mass production required a system of sizes based on average body measurements.",
        "Cotton shirts are comfortable in hot weather.",
        "Even today, sizes differ considerably between countries and brands.",
      ],
      odd: 3,
      why: "Parça giysi bedenlerinin standartlaşmasını anlatır. Pamuklu gömleklerin sıcakta rahat olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Before newspapers were common, town criers announced official news in public places.",
        "Church bells were often rung on Sundays.",
        "They rang a bell to attract attention and then read proclamations aloud.",
        "Their announcements included new laws, market days and local events.",
        "Some towns still appoint a town crier for ceremonial occasions.",
      ],
      odd: 1,
      why: "Parça münadileri (çığırtkanları) anlatır. Kilise çanlarının pazar günleri çaldığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Fortune cookies are often associated with Chinese restaurants in the United States.",
        "However, they are rarely found in China itself.",
        "Historians believe that they were developed by Japanese immigrants in California.",
        "They became popular in Chinese restaurants in the mid-twentieth century.",
        "Rice is the main crop in many parts of Asia.",
      ],
      odd: 4,
      why: "Parça şans kurabiyelerinin kökenini anlatır. Pirincin Asya'nın pek çok yerinde ana ürün olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Anthropologists have studied how different societies care for elderly people.",
        "In some cultures, older relatives traditionally live with their children's families.",
        "Many people enjoy watching football on television.",
        "In others, the elderly are more likely to live alone or in care homes.",
        "These differences reflect economic conditions as well as cultural values.",
      ],
      odd: 2,
      why: "Parça farklı toplumların yaşlılara nasıl baktığını anlatır. Futbol izlemekten söz eden III. cümle konu dışıdır.",
    },
  ],
};
