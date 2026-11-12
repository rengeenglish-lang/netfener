import type { YokdilDeneme } from "./types";

export const SAGLIK_19: YokdilDeneme = {
  no: 19,
  field: "saglik",
  vocab: [
    [
      "Yersin was able to ---- the bacterium responsible for plague from the bodies of victims in Hong Kong in 1894.",
      ["isolate", "invent", "forgive", "decorate", "abandon"],
      "Yersin'in vebaya neden olan bakteriyi kurbanların vücutlarından 'izole ettiği/ayırdığı' (isolate) anlatılır.",
    ],
    [
      "Tsetse flies are ---- to sleeping sickness because they carry the parasite from one person to another.",
      ["central", "immune", "unrelated", "opposed", "grateful"],
      "Çeçe sineklerinin paraziti bir kişiden diğerine taşıdığı için uyku hastalığında 'merkezi' (central) bir rol oynadığı anlatılır.",
    ],
    [
      "People become infected when they wade in fresh water that is ---- with the larvae of the parasite.",
      ["contaminated", "decorated", "equipped", "satisfied", "familiar"],
      "Parazit larvalarıyla 'kirlenmiş' (contaminated) tatlı suya giren insanların enfekte olduğu anlatılır.",
    ],
    [
      "Weigl paid volunteers to ---- lice on their legs, allowing the insects to feed on their blood.",
      ["host", "kill", "draw", "catch", "sell"],
      "Weigl'in gönüllülere bitleri bacaklarında 'barındırmaları' (host) için para ödediği anlatılır.",
    ],
    [
      "The disease is ---- in parts of Latin America, where the insects that spread it live in the walls of simple houses.",
      ["widespread", "unknown", "harmless", "artificial", "temporary"],
      "Hastalığın Latin Amerika'nın bazı bölgelerinde 'yaygın' (widespread) olduğu anlatılır.",
    ],
    [
      "When the vaccine was first tested, some critics feared that it might ---- the very disease it was meant to prevent.",
      ["bring on", "put out", "go off", "fall apart", "take back"],
      "Bazı eleştirmenlerin aşının önlemesi gereken hastalığa 'yol açabileceğinden' (bring on) korktuğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "The plague bacterium ---- after Alexandre Yersin, the Swiss-French scientist who identified it.",
      ["was named", "named", "has named", "was naming", "had named"],
      "Bakteri adlandırılan bir şeydir ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was named'.",
    ],
    [
      "If the vaccine had not been developed, many more people in Poland ---- during the war.",
      ["would have died of typhus", "would die of typhus", "will die of typhus", "died of typhus", "had died of typhus"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'would have + V3' ister.",
    ],
    [
      "By the time Chagas described the disease in 1909, it ---- people in the region for thousands of years.",
      ["had been affecting", "has been affecting", "affects", "will be affecting", "was affected"],
      "Tanımlanmasından (geçmiş) önce binlerce yıldır süren durum: Past Perfect Continuous 'had been affecting'.",
    ],
    [
      "Haffkine, ---- vaccine against cholera was tested on himself first, later developed a plague vaccine in India.",
      ["whose", "who", "which", "whom", "where"],
      "Aşı Haffkine'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Rarely ---- a scientist discovered both the cause of a disease and the insect that spreads it.",
      ["has", "did", "was", "does", "is"],
      "'Rarely' ile başlayan cümle devrik olur; 'discovered' V3 olarak kullanıldığından present perfect yardımcısı 'has' gelir.",
    ],
    [
      "The parasite's life cycle is so complex ---- it passes through both snails and humans.",
      ["that", "which", "as", "such", "than"],
      "'so complex that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- the disease can be treated with a single dose of medicine, millions of people are still infected.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Tek doz ilaçla tedavi edilebilmesi ile milyonlarca kişinin hâlâ enfekte olması zıttır: 'Although'.",
    ],
    [
      "Villagers ---- houses had mud walls were most at risk of being bitten.",
      ["whose", "who", "which", "whom", "where"],
      "Evler köylülere aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Weigl's laboratory is said ---- many members of the Polish resistance by employing them as lice feeders.",
      ["to have protected", "to protect", "protecting", "to be protecting", "to have been protected"],
      "Laboratuvar koruyan taraftır (etken) ve olay geçmişte kalmıştır: 'be said to have + V3'.",
    ],
    [
      "The flies bite people ---- animals, which can also carry the parasite.",
      ["as well as", "instead of", "because of", "rather than", "unless"],
      "Sineklerin hem insanları hem de hayvanları ısırdığı anlatılır: 'as well as'.",
    ],
    [
      "Rats ---- with plague were the main source of infection in the city.",
      ["infected", "infecting", "which infected", "to infect", "have infected"],
      "Fareler enfekte edilmiş canlılardır; edilgen anlamlı geçmiş ortaç 'infected' gerekir.",
    ],
    [
      "Health workers treated the walls of houses with insecticide ---- the bugs could no longer hide there.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Haffkine injected himself with the vaccine as if it ---- completely harmless.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı ya da kanıtlanmamış bir durum anlatılır: 'were'.",
    ],
    [
      "The longer a person stays in contaminated water, ---- the risk of infection becomes.",
      ["the greater", "greater", "the greatest", "more great", "the more great"],
      "'The longer …, the greater …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1894, an outbreak of plague spread from southern China to Hong Kong, then a British colony, where it killed thousands of people. Two scientists travelled there to study it: Kitasato Shibasaburō, who had trained in Germany and was sent by the Japanese government, and Alexandre Yersin, a Swiss-born researcher working for the Pasteur Institute. Kitasato arrived first and was given access to the main hospital, {1} Yersin was forced to work in a simple hut built of straw. {2} these difficulties, Yersin managed to obtain samples from the bodies of victims, sometimes by bribing the sailors {3} job was to bury them. Both men reported finding bacteria, but Kitasato's descriptions were inconsistent, and some of his samples may have been contaminated. Yersin's description was more accurate, and the bacterium is now named Yersinia pestis in his honour. Yersin also suggested that rats played a role in spreading the disease, {4} it was another French scientist, Paul-Louis Simond, who showed in 1898 that fleas carried the infection from rats to humans. {5} the cause and the means of transmission were known, it became possible to control outbreaks by reducing contact with rats and fleas.",
      blanks: [
        [
          "(21) ----",
          ["while", "because", "so that", "unless", "since"],
          "Kitasato'nun ana hastaneye erişmesi ile Yersin'in samandan bir kulübede çalışmak zorunda kalması karşılaştırılır: 'while'.",
        ],
        [
          "(22) ----",
          ["Despite", "Because of", "Thanks to", "Instead of", "As a result of"],
          "Zorluklara 'rağmen' örnek elde etmeyi başardığı anlatılır: 'Despite'.",
        ],
        [
          "(23) ----",
          ["whose", "who", "which", "whom", "where"],
          "İş denizcilere aittir; iyelik bildiren 'whose' gerekir.",
        ],
        [
          "(24) ----",
          ["but", "because", "so", "unless", "since"],
          "Yersin'in farelerin rolünü önermesi ile pirelerin taşıdığını başka bir bilim insanının göstermesi karşıtlıktır: 'but'.",
        ],
        [
          "(25) ----",
          ["Once", "Unless", "Although", "Until", "Whereas"],
          "Neden ve bulaşma yolu bilindikten 'sonra' salgınları kontrol etmek mümkün oldu: 'Once'.",
        ],
      ],
    },
    {
      text:
        "Schistosomiasis, also known as bilharzia, is a disease caused by parasitic worms that live in the blood vessels of humans. It affects more than two hundred million people, mainly in Africa. The parasite has an unusual life cycle {1} involves freshwater snails. Eggs passed in the urine or faeces of infected people hatch when they reach water, and the larvae enter snails, {2} they multiply. The snails then release large numbers of tiny larvae that can penetrate human skin within minutes. As a result, people become infected while washing, swimming, fishing or working in rivers and lakes. Children are particularly affected {3} they often play in water. Over time, the eggs trapped in the body cause damage to the bladder, liver and intestines, and chronic infection can lead to anaemia and poor growth. The disease can be treated with a single dose of a drug called praziquantel, which is now distributed to millions of schoolchildren every year. {4}, people are easily reinfected if they continue to come into contact with contaminated water, {5} improvements in sanitation and access to safe water are essential for long-term control.",
      blanks: [
        [
          "(26) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'an unusual life cycle' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(27) ----",
          ["where", "which", "who", "whose", "what"],
          "Boşluk 'snails' ifadesini niteleyen ve yer bildiren ilgi zarfıdır: 'where' (salyangozların içinde çoğalırlar).",
        ],
        [
          "(28) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Çocukların özellikle etkilenmesinin nedeni sık sık suda oynamalarıdır: 'because'.",
        ],
        [
          "(29) ----",
          ["However", "Therefore", "Similarly", "For example", "In other words"],
          "Tek dozla tedavi edilebilmesi ile kolayca yeniden enfekte olunması karşıtlıktır: 'However'.",
        ],
        [
          "(30) ----",
          ["so", "although", "unless", "whereas", "or"],
          "Yeniden enfeksiyon kolay olduğu için sanitasyon şarttır; sonuç bildiren 'so' gerekir.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Chagas disease often causes no symptoms for many years, ----.",
      [
        "it can eventually damage the heart and digestive system",
        "it is spread by insects that feed on blood at night",
        "it was named after a Brazilian doctor in 1909",
        "the insects live in cracks in the walls of houses",
        "millions of people in Latin America are infected",
      ],
      "'Although' zıtlık ister: Chagas hastalığı yıllarca belirti vermese de sonunda kalbe ve sindirim sistemine zarar verebilir.",
    ],
    [
      "If more villages had access to safe water, ----.",
      [
        "fewer people would be infected with schistosomiasis",
        "the snails had lived in the rivers",
        "children will play in the lakes",
        "the drug was given to schoolchildren",
        "the worms live in the blood",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would be + V3' ister: daha az kişi enfekte olurdu.",
    ],
    [
      "Haffkine tested the cholera vaccine on himself ----.",
      [
        "because he wanted to show that it was safe",
        "so that he could catch the disease",
        "although he was sure it was dangerous",
        "unless other scientists agreed",
        "even if nobody was watching",
      ],
      "Haffkine'in aşıyı kendi üzerinde denemesinin nedeni güvenli olduğunu göstermek istemesidir: 'because'.",
    ],
    [
      "Since the drug was first distributed to schoolchildren on a large scale, ----.",
      [
        "infection rates have fallen in many areas",
        "most children had played in rivers",
        "the snails would have disappeared",
        "the disease will be eradicated",
        "few people knew about it",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have fallen'.",
    ],
    [
      "Unless sleeping sickness is treated, ----.",
      [
        "it is almost always fatal",
        "the patient would have recovered",
        "most flies had bitten animals",
        "the parasite will leave the body",
        "the patient was very tired",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: neredeyse her zaman ölümcüldür.",
    ],
    [
      "The demand for Weigl's vaccine was so great during the war ----.",
      [
        "that his laboratory employed hundreds of people",
        "because typhus spread rapidly in crowded camps",
        "although the vaccine was difficult to produce",
        "unless the soldiers were already immune",
        "while the city was occupied by German forces",
      ],
      "'so great that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Researchers have found that when houses are sprayed with insecticide, ----.",
      [
        "the number of bugs falls sharply",
        "the villagers would have moved",
        "most walls had been painted",
        "the disease will spread",
        "the houses were very old",
      ],
      "'when' ile genel bir bulgu anlatılır: evler böcek ilacıyla ilaçlandığında böcek sayısı hızla düşer.",
    ],
    [
      "So small are the larvae of the parasite ----.",
      [
        "that people cannot see them in the water",
        "because they are released by snails",
        "although they can enter the skin quickly",
        "while people are swimming or fishing",
        "unless the water is very warm",
      ],
      "Devrik 'So small are … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While the early stage of sleeping sickness causes fever and headaches, ----.",
      [
        "the later stage affects the brain",
        "the tsetse fly lives in parts of Africa",
        "many patients live in rural villages",
        "the parasite is carried by flies",
        "cattle can also be infected",
      ],
      "'While' iki evreyi karşılaştırır: erken evre ateş ve baş ağrısına yol açarken sonraki evre beyni etkiler.",
    ],
    [
      "Once Simond had shown that fleas carried the disease, ----.",
      [
        "efforts to control rats and fleas increased",
        "the plague will disappear from India",
        "Yersin would have changed his mind",
        "rats are found in most cities",
        "most patients had recovered",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: fare ve pireleri kontrol etme çabaları arttı.",
    ],
    [
      "No sooner had Haffkine injected himself with the vaccine ----.",
      [
        "than he developed a high fever",
        "when the experiment had ended",
        "that the disease will spread",
        "before he had made it",
        "so he went to bed",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Yersin worked in a simple hut because he was not allowed to use the main hospital.",
      [
        "Yersin, ana hastaneyi kullanmasına izin verilmediği için basit bir kulübede çalıştı.",
        "Yersin, basit bir kulübede çalışmayı tercih ettiği için ana hastaneyi kullanmadı.",
        "Ana hastane, Yersin'in kulübesinden çok daha küçük ve basitti.",
        "Yersin, ana hastanede çalışırken basit bir kulübe inşa etti.",
        "Yersin'in kulübesi, hastaneyi kullanmak isteyenlere kiralandı.",
      ],
      "'worked in a simple hut' 'basit bir kulübede çalıştı', 'because he was not allowed to use the main hospital' 'ana hastaneyi kullanmasına izin verilmediği için' demektir.",
    ],
    [
      "The larvae can penetrate human skin within a few minutes of contact with water.",
      [
        "Larvalar, suyla temastan birkaç dakika sonra insan derisine girebilir.",
        "Larvalar, insan derisine girmeden önce birkaç gün suda beklemek zorundadır.",
        "İnsan derisi, larvaların suya geçmesini birkaç dakika içinde engeller.",
        "Larvalar, suyla temas ettikten sonra birkaç dakika içinde ölür.",
        "Suyla temas, larvaların insan derisine girmesini imkânsız kılar.",
      ],
      "'can penetrate human skin' 'insan derisine girebilir', 'within a few minutes of contact with water' 'suyla temastan birkaç dakika sonra' demektir.",
    ],
    [
      "The insects usually bite people at night while they are asleep.",
      [
        "Böcekler insanları genellikle geceleri uyurken ısırır.",
        "Böcekler insanları yalnızca gündüzleri, uyanıkken ısırır.",
        "İnsanlar, geceleri uyurken böcekleri öldürmeye çalışır.",
        "Böcekler, uyuyan insanları ısırmaktan kaçınır.",
        "Geceleri uyuyan insanlar, böceklerin ısırığına karşı bağışıktır.",
      ],
      "'usually bite people at night' 'insanları genellikle geceleri ısırır', 'while they are asleep' 'uyurken' demektir.",
    ],
    [
      "Many of the people employed to feed lice were protected from arrest by their work.",
      [
        "Bitleri beslemek için çalıştırılan insanların pek çoğu, yaptıkları iş sayesinde tutuklanmaktan korundu.",
        "Bitleri beslemek için çalıştırılan insanların pek çoğu, yaptıkları iş yüzünden tutuklandı.",
        "Tutuklanan insanlar, cezaevinde bitleri beslemek zorunda bırakıldı.",
        "Bitleri besleyen insanlar, işlerini bıraktıktan sonra tutuklanmaktan kurtuldu.",
        "Bitleri beslemek, insanları hastalıklara karşı tamamen korudu.",
      ],
      "'Many of the people employed to feed lice' 'bitleri beslemek için çalıştırılan insanların pek çoğu', 'were protected from arrest by their work' 'yaptıkları iş sayesinde tutuklanmaktan korundu' demektir.",
    ],
    [
      "The disease is spread by the bite of the tsetse fly, which is found only in Africa.",
      [
        "Hastalık, yalnızca Afrika'da bulunan çeçe sineğinin ısırığıyla yayılır.",
        "Hastalık, Afrika dışında da yaygın olan çeçe sineğinin ısırığıyla yayılır.",
        "Çeçe sineği, Afrika'daki hastalardan hastalığı kapar ve ölür.",
        "Hastalık, Afrika'da çeçe sineklerinin ortadan kalkmasına neden oldu.",
        "Çeçe sineğinin ısırığı, hastalığa karşı bağışıklık sağlar.",
      ],
      "'is spread by the bite of the tsetse fly' 'çeçe sineğinin ısırığıyla yayılır', 'which is found only in Africa' 'yalnızca Afrika'da bulunan' demektir.",
    ],
    [
      "Haffkine's vaccines were used on millions of people in India.",
      [
        "Haffkine'in aşıları Hindistan'da milyonlarca insana uygulandı.",
        "Haffkine'in aşıları Hindistan'da yalnızca birkaç kişi üzerinde denendi.",
        "Hindistan'daki milyonlarca insan, Haffkine'in aşılarını reddetti.",
        "Haffkine, Hindistan'daki milyonlarca insandan aşı yapmayı öğrendi.",
        "Haffkine'in aşıları Hindistan'da hiçbir zaman kullanılmadı.",
      ],
      "'were used on millions of people in India' 'Hindistan'da milyonlarca insana uygulandı' demektir.",
    ],
  ],
  trEn: [
    [
      "Veba, pireler aracılığıyla farelerden insanlara bulaşır.",
      [
        "Plague is transmitted from rats to humans by fleas.",
        "Plague is transmitted from humans to rats by fleas.",
        "Fleas are killed by plague when they bite rats.",
        "Plague is transmitted directly from rats to humans without fleas.",
        "Rats protect humans from fleas that carry plague.",
      ],
      "'pireler aracılığıyla' 'by fleas', 'farelerden insanlara bulaşır' 'is transmitted from rats to humans' karşılığıdır.",
    ],
    [
      "Şistozomiyaz, tek doz ilaçla tedavi edilebilir.",
      [
        "Schistosomiasis can be treated with a single dose of medicine.",
        "Schistosomiasis cannot be treated with any medicine.",
        "Schistosomiasis requires many years of treatment with several drugs.",
        "A single dose of medicine can cause schistosomiasis.",
        "Schistosomiasis can only be prevented, not treated.",
      ],
      "'tek doz ilaçla' 'with a single dose of medicine', 'tedavi edilebilir' 'can be treated' karşılığıdır.",
    ],
    [
      "Chagas hastalığı, kalbe yıllar içinde zarar verebilir.",
      [
        "Chagas disease can damage the heart over many years.",
        "Chagas disease can strengthen the heart over many years.",
        "The heart protects the body from Chagas disease for many years.",
        "Chagas disease damages the heart within a few hours.",
        "Chagas disease has no effect on the heart.",
      ],
      "'kalbe … zarar verebilir' 'can damage the heart', 'yıllar içinde' 'over many years' karşılığıdır.",
    ],
    [
      "Weigl'in aşısı, savaş sırasında binlerce hayat kurtardı.",
      [
        "Weigl's vaccine saved thousands of lives during the war.",
        "Weigl's vaccine caused thousands of deaths during the war.",
        "Thousands of people developed Weigl's vaccine during the war.",
        "Weigl's vaccine was not used until long after the war.",
        "The war prevented Weigl from developing any vaccine.",
      ],
      "'savaş sırasında binlerce hayat kurtardı' 'saved thousands of lives during the war' karşılığıdır.",
    ],
    [
      "Uyku hastalığı tedavi edilmezse beyni etkiler.",
      [
        "If sleeping sickness is not treated, it affects the brain.",
        "If sleeping sickness affects the brain, it cannot be treated.",
        "Sleeping sickness is treated by stimulating the brain.",
        "The brain is not affected by sleeping sickness at all.",
        "Sleeping sickness affects the brain only after it has been treated.",
      ],
      "'tedavi edilmezse' 'if … is not treated', 'beyni etkiler' 'affects the brain' karşılığıdır.",
    ],
    [
      "Haffkine, aşının güvenli olduğunu kanıtlamak için onu önce kendisine uyguladı.",
      [
        "Haffkine first gave the vaccine to himself to prove that it was safe.",
        "Haffkine refused to give the vaccine to himself because it was unsafe.",
        "Haffkine proved the vaccine was safe by giving it to animals only.",
        "Haffkine gave the vaccine to himself after it had been proved unsafe.",
        "Haffkine never tested the vaccine before giving it to others.",
      ],
      "'onu önce kendisine uyguladı' 'first gave the vaccine to himself', 'güvenli olduğunu kanıtlamak için' 'to prove that it was safe' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Sleeping sickness, or human African trypanosomiasis, is caused by a microscopic parasite transmitted by the bite of the tsetse fly, which is found only in sub-Saharan Africa. In the first stage of the disease, the parasite multiplies in the blood and lymph, causing fever, headaches and joint pain. In the second stage, it crosses into the brain, leading to confusion, changes in personality and disturbances of sleep, from which the disease takes its name. Without treatment, it is almost always fatal. In the early twentieth century, epidemics killed hundreds of thousands of people, and in some areas whole villages were abandoned. For decades, the main treatment for the second stage was a drug containing arsenic, which was so toxic that it killed around one in twenty patients. Diagnosis was also difficult, as patients needed a painful procedure to check whether the parasite had reached the brain. In recent years, the situation has changed dramatically. New, safer drugs have been introduced, including one that can be taken as tablets, and screening programmes have reached remote communities. The number of reported cases has fallen from tens of thousands a year in the 1990s to fewer than a thousand.",
      questions: [
        [
          "According to the passage, the disease gets its name from ----.",
          [
            "the sleep problems that occur when it reaches the brain",
            "the time of day when the flies usually bite",
            "the fever that patients suffer in the first stage",
            "the drugs that were used to treat it",
            "the villages that were abandoned",
          ],
          "Metne göre ikinci evrede parazit beyne geçer ve hastalığa adını veren uyku bozukluklarına yol açar.",
        ],
        [
          "The writer mentions the drug containing arsenic in order to show ----.",
          [
            "how dangerous the older treatment was",
            "how the parasite was first discovered",
            "why the tsetse fly is found only in Africa",
            "that the disease could not be treated",
            "how screening programmes work",
          ],
          "Arsenik içeren ilacın hastaların yaklaşık yirmide birini öldürmesi, eski tedavinin ne kadar tehlikeli olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that recent progress against the disease ----.",
          [
            "has resulted from better drugs and wider screening",
            "has been caused by the disappearance of the tsetse fly",
            "has made the disease more common",
            "has been limited to large cities",
            "has depended on the use of arsenic",
          ],
          "Daha güvenli ilaçların, tablet tedavinin ve uzak topluluklara ulaşan tarama programlarının vakaları büyük ölçüde azaltması bu sonucu verir.",
        ],
      ],
    },
    {
      text:
        "In 1909, the Brazilian doctor Carlos Chagas was sent to a remote region of Minas Gerais to fight an outbreak of malaria among workers building a railway. While he was there, he learned about a large blood-sucking insect, known locally as the 'barber' because it often bit people on the face, which lived in the cracks of mud-walled houses. Examining the insects, he found a new parasite in their gut. He then found the same parasite in the blood of a two-year-old girl suffering from fever, and identified the disease it caused. Chagas thus became one of the few scientists in history to describe a new disease, its cause, the insect that spreads it and the animals that act as reservoirs, almost single-handedly. The disease that now bears his name affects millions of people in Latin America. In most cases, the early stage is mild, but years or even decades later around a third of infected people develop serious damage to the heart or digestive system. Because the insects live in poor housing, the disease is closely linked to poverty. Spraying houses with insecticide and improving building materials have greatly reduced transmission in several countries.",
      questions: [
        [
          "According to the passage, Chagas went to Minas Gerais in order to ----.",
          [
            "deal with malaria among railway workers",
            "study blood-sucking insects",
            "treat a young girl with fever",
            "build a new railway",
            "improve housing in the region",
          ],
          "Metne göre Chagas demiryolu inşa eden işçiler arasındaki sıtma salgınıyla mücadele etmek için bölgeye gönderilmişti.",
        ],
        [
          "The writer emphasises that Chagas worked 'almost single-handedly' in order to show ----.",
          [
            "how unusual and complete his achievement was",
            "that other scientists refused to help him",
            "why the disease was named after him",
            "that he did not trust his colleagues",
            "how dangerous his work was",
          ],
          "Hastalığı, nedenini, taşıyan böceği ve rezervuar hayvanları neredeyse tek başına tanımlaması, başarısının ne kadar olağandışı ve eksiksiz olduğunu gösterir.",
        ],
        [
          "It can be inferred from the passage that improving housing ----.",
          [
            "helps to prevent the disease by removing places where insects live",
            "has no effect on the spread of the disease",
            "increases the number of insects in houses",
            "is more expensive than treating patients",
            "was suggested by the insects' local name",
          ],
          "Böceklerin yoksul konutlarda yaşaması ve yapı malzemelerinin iyileştirilmesinin bulaşmayı azaltması, böceklerin yaşam alanlarını ortadan kaldırarak hastalığı önlediğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Typhus is a disease spread by body lice, and it has always flourished in conditions of war, poverty and overcrowding. During the First World War, it killed millions of people in Eastern Europe. In the 1920s, the Polish biologist Rudolf Weigl developed a vaccine against it in the city of Lwów, now Lviv in Ukraine. His method was unusual. The bacteria that cause typhus grow inside lice, so Weigl needed large numbers of infected insects. Healthy lice were kept in small boxes that were strapped to the legs of human volunteers, who allowed the lice to feed on their blood. The lice were then infected and their guts were later ground up to make the vaccine. During the Second World War, when the city was occupied, the occupying forces wanted the vaccine for their own soldiers and allowed the laboratory to continue. Weigl used this opportunity to employ academics, students and members of the resistance as lice feeders, giving them documents that protected them from arrest. Some of the vaccine was also secretly sent to people in ghettos. After the war, his method was replaced by more efficient ways of producing vaccines, but his laboratory is remembered as a remarkable place of survival.",
      questions: [
        [
          "According to the passage, Weigl needed human volunteers because ----.",
          [
            "the lice used to produce the vaccine had to feed on blood",
            "the vaccine had to be tested on people first",
            "the bacteria could only grow in human skin",
            "the occupying forces demanded it",
            "the volunteers had already had typhus",
          ],
          "Metne göre sağlıklı bitler gönüllülerin bacaklarına bağlanan kutularda tutuluyor ve onların kanıyla besleniyordu.",
        ],
        [
          "It can be understood from the passage that the occupying forces allowed the laboratory to continue because ----.",
          [
            "they wanted to protect their own troops from the disease",
            "they did not know what the laboratory produced",
            "Weigl agreed to join their army",
            "the laboratory produced weapons",
            "they were trying to help the resistance",
          ],
          "İşgal güçlerinin aşıyı kendi askerleri için istemesi, laboratuvarın çalışmasına bu nedenle izin verdiklerini gösterir.",
        ],
        [
          "The writer describes the laboratory as 'a remarkable place of survival' because ----.",
          [
            "it helped many people to avoid persecution during the war",
            "it was the only building that was not destroyed",
            "it produced the most efficient vaccine ever made",
            "Weigl lived there after the war",
            "the lice were able to survive for many years",
          ],
          "Weigl'in akademisyenleri, öğrencileri ve direniş üyelerini tutuklanmaktan koruyan belgelerle istihdam etmesi, laboratuvarın pek çok kişinin zulümden kurtulmasına yardım ettiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "Waldemar Haffkine was born in Odessa in 1860 and trained as a zoologist. After being prevented from pursuing an academic career in Russia, he moved to Paris and worked at the Pasteur Institute, where he developed an experimental vaccine against cholera. In 1892, he tested it on himself, suffering a high fever but no lasting harm, and then on several volunteers. The following year he travelled to India, where cholera was a major cause of death, and began a large vaccination campaign. When plague broke out in Bombay in 1896, he quickly developed a vaccine against it as well, again testing it first on himself. Hundreds of thousands of people were vaccinated, and the results suggested that the vaccine reduced deaths considerably. In 1902, however, a batch of vaccine became contaminated with tetanus, and nineteen villagers who received it died. Haffkine was blamed and suspended, although an investigation later found that the contamination had occurred because of a mistake by someone else at the site where the vaccine was given. He was eventually cleared, and the laboratory he founded in Bombay was later named the Haffkine Institute in his honour.",
      questions: [
        [
          "According to the passage, Haffkine tested his vaccines on himself ----.",
          [
            "before giving them to other people",
            "only after they had been used on millions",
            "because no volunteers could be found",
            "after he had been suspended",
            "in order to become immune to tetanus",
          ],
          "Metinde Haffkine'in hem kolera hem de veba aşısını önce kendi üzerinde denediği belirtilir.",
        ],
        [
          "The deaths in 1902 were caused by ----.",
          [
            "contamination of a batch of vaccine",
            "an outbreak of plague in Bombay",
            "a high fever caused by the vaccine",
            "cholera spreading in the villages",
            "a lack of vaccine in the region",
          ],
          "Metne göre bir parti aşı tetanozla kirlenmiş ve onu alan on dokuz köylü ölmüştü.",
        ],
        [
          "It can be inferred from the passage that the decision to blame Haffkine ----.",
          [
            "was later shown to be unfair",
            "was supported by the investigation",
            "led to the closure of his laboratory",
            "was made by the villagers themselves",
            "ended his work on vaccines immediately",
          ],
          "Soruşturmanın kirlenmenin başka birinin hatasından kaynaklandığını bulması ve Haffkine'in aklanması, suçlamanın haksız olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "Lymphatic filariasis, often called elephantiasis, is a disease caused by tiny worms transmitted by mosquitoes. The adult worms live in the lymphatic system, the network of vessels that helps to remove fluid from the tissues and fight infection. Over time, they can damage the system, causing severe swelling, particularly of the legs, which may become so large that walking becomes difficult. The swelling is often permanent, and many patients also suffer from repeated skin infections. Because of the visible changes to their bodies, people with the disease frequently face discrimination and may be unable to work or marry. In 2000, the World Health Organization launched a global programme to eliminate the disease as a public health problem. The strategy involves giving entire communities a combination of drugs once a year for several years, which kills the young worms in the blood and prevents mosquitoes from passing them on. Pharmaceutical companies have donated billions of tablets for this purpose. Patients who already have swelling cannot be cured, but simple measures such as washing the affected limb carefully, raising it and exercising it can reduce infections and improve their quality of life. Several countries have now been declared free of the disease.",
      questions: [
        [
          "According to the passage, the swelling caused by the disease results from ----.",
          [
            "damage to the lymphatic system",
            "infections caused by washing",
            "the bite of the mosquito itself",
            "a lack of exercise",
            "the drugs used to treat it",
          ],
          "Metne göre yetişkin solucanlar zamanla lenf sistemine zarar vererek şiddetli şişliğe yol açar.",
        ],
        [
          "The writer mentions discrimination against patients in order to show ----.",
          [
            "that the disease has social as well as physical effects",
            "why the drugs were donated",
            "how the worms are transmitted",
            "that the swelling can be cured",
            "why mosquitoes bite some people more than others",
          ],
          "Hastaların çalışamaması ya da evlenememesi, hastalığın fiziksel olduğu kadar toplumsal etkileri de olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that giving drugs to whole communities ----.",
          [
            "aims to stop the transmission of the disease",
            "cures patients who already have swelling",
            "is carried out only once in a lifetime",
            "is paid for entirely by patients",
            "kills the mosquitoes that carry the worms",
          ],
          "İlaçların kandaki genç solucanları öldürmesi ve sivrisineklerin onları aktarmasını engellemesi, amacın bulaşmayı durdurmak olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Leishmaniasis is a disease spread by the bite of tiny sandflies. ---- The more serious form attacks internal organs such as the liver and spleen and can be fatal if it is not treated.",
      [
        "The most common form causes skin sores that may leave scars.",
        "Sandflies are most active in the evening and at night.",
        "Deserts cover about a fifth of the world's land surface.",
        "Many insects are attracted to bright lights after dark.",
        "The spleen helps the body to filter old blood cells.",
      ],
      "Boşluktan sonra 'The more serious form' (daha ciddi biçim) anlatılır; boşluğa bununla karşılaştırılan en yaygın biçimi, yani yara izi bırakabilen deri yaralarını anlatan cümle gelmelidir.",
    ],
    [
      "Yaws is a bacterial infection that mainly affects children in warm, humid regions. ---- In 2012, researchers showed that a single dose of an antibiotic taken by mouth was just as effective as an injection.",
      [
        "It causes painful sores on the skin and can damage the bones.",
        "Many tropical regions receive heavy rainfall for part of the year.",
        "Children in rural areas often walk long distances to school.",
        "Antibiotics were first used widely in the 1940s.",
        "Some bacteria are useful and help us to digest food.",
      ],
      "Boşluktan önce hastalığın tanımı, sonra tedavisi anlatılır; boşluğa belirtilerini, yani deride ağrılı yaralar ve kemik hasarını anlatan cümle gelmelidir.",
    ],
    [
      "Leptospirosis is a bacterial disease that people can catch from water contaminated with the urine of infected animals, especially rats. ---- For this reason, it often increases after floods.",
      [
        "The bacteria can survive for weeks in wet soil and water.",
        "Rats are found in almost every city in the world.",
        "Many people enjoy swimming in rivers in summer.",
        "Floods can damage houses, roads and bridges.",
        "Urine contains water, salts and waste products.",
      ],
      "Boşluktan sonra 'For this reason' ile sellerden sonra hastalığın arttığı söylenir; boşluğa bakterilerin ıslak toprak ve suda haftalarca yaşayabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Anthrax is a disease that mainly affects grazing animals such as cattle and sheep. ---- People can become infected by handling infected animals or their wool, hides and meat.",
      [
        "The bacteria form tough spores that can survive in the soil for decades.",
        "Sheep have been kept for their wool for thousands of years.",
        "Many farmers move their animals to different fields during the year.",
        "Leather is used to make shoes, bags and furniture.",
        "Cattle are kept for both milk and meat in many countries.",
      ],
      "Boşluktan önce hastalığın otlayan hayvanları etkilediği, sonra insanlara nasıl bulaştığı anlatılır; boşluğa bakterilerin toprakta onlarca yıl yaşayabilen dayanıklı sporlar oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Brucellosis is an infection that people usually catch by drinking milk from infected cows, sheep or goats. ---- This is why the disease has become rare in countries where milk is routinely pasteurised.",
      [
        "Heating the milk kills the bacteria that cause it.",
        "Goats are kept in many mountainous regions of the world.",
        "Cheese has been made in Europe for thousands of years.",
        "Milk contains calcium, which is important for bones.",
        "Many people drink milk with breakfast every day.",
      ],
      "Boşluktan sonra 'This is why' ile sütün pastörize edildiği ülkelerde hastalığın nadirleştiği söylenir; boşluğa sütü ısıtmanın bakterileri öldürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "The BCG vaccine, developed in France in the early 1920s, protects young children against severe forms of tuberculosis. ---- For this reason, many countries now give it only to children at high risk.",
      [
        "However, it offers much less protection against the disease in adults.",
        "Tuberculosis killed huge numbers of city dwellers in Victorian times.",
        "The vaccine is usually given as an injection in the upper arm.",
        "France has a long tradition of research in infectious diseases.",
        "Many children are afraid of injections.",
      ],
      "Boşluktan sonra 'For this reason' ile pek çok ülkenin aşıyı yalnızca yüksek riskli çocuklara verdiği söylenir; boşluğa yetişkinlerde çok daha az koruma sağladığını söyleyen 'However' cümlesi gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Chikungunya is a viral disease spread by mosquitoes.",
        "It causes fever and severe joint pain.",
        "Mosquitoes have existed for millions of years.",
        "The name comes from a word meaning 'to become bent'.",
        "This refers to the stooped posture of patients suffering from the pain.",
      ],
      odd: 2,
      why: "Parça chikungunya hastalığını ve adının kökenini anlatır. Sivrisineklerin milyonlarca yıldır var olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Lassa fever is a viral illness found mainly in West Africa.",
        "It is spread through contact with the urine or droppings of certain rats.",
        "West Africa has several large and fast-growing cities.",
        "Most people who are infected have only mild symptoms.",
        "In severe cases, however, it can cause bleeding and organ failure.",
      ],
      odd: 2,
      why: "Parça Lassa ateşini anlatır. Batı Afrika'nın büyük ve hızla büyüyen kentleri olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Nipah virus was first identified in Malaysia in 1999.",
        "Fruit bats are the natural hosts of the virus.",
        "Many tropical fruits, such as mangoes, are exported around the world.",
        "People can become infected through contact with infected animals or contaminated food.",
        "There is currently no vaccine against the disease.",
      ],
      odd: 2,
      why: "Parça Nipah virüsünü anlatır. Mango gibi tropik meyvelerin dünyaya ihraç edildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hantaviruses are carried by rodents such as mice.",
        "People can be infected by breathing in dust contaminated with their droppings.",
        "This often happens when cleaning sheds or cabins that have been closed for a long time.",
        "Mice are popular pets in some countries.",
        "Wearing a mask and wetting the area before cleaning can reduce the risk.",
      ],
      odd: 3,
      why: "Parça hantavirüs enfeksiyonunu anlatır. Farelerin bazı ülkelerde evcil hayvan olarak sevildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Q fever is an infection caught mainly from farm animals such as sheep and goats.",
        "The bacteria are found in large numbers in the fluids released when animals give birth.",
        "They can be carried long distances by the wind.",
        "Most people have mild flu-like symptoms or none at all.",
        "Farmers often get up very early in the morning.",
      ],
      odd: 4,
      why: "Parça Q humması enfeksiyonunu anlatır. Çiftçilerin sabah çok erken kalktığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Marburg virus causes a severe illness similar to Ebola.",
        "Hospitals in Germany have modern laboratories.",
        "It was first identified in 1967 after laboratory workers in Germany fell ill.",
        "They had been handling tissue from monkeys imported from Uganda.",
        "Fruit bats living in caves are now known to carry the virus.",
      ],
      odd: 1,
      why: "Parça Marburg virüsünü anlatır. Almanya'daki hastanelerin modern laboratuvarları olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
