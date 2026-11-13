import type { YokdilDeneme } from "./types";

export const FEN_28: YokdilDeneme = {
  no: 28,
  field: "fen",
  vocab: [
    [
      "Murdoch heated coal in a closed container and ---- the gas it gave off through pipes to light his house.",
      ["led", "froze", "sold", "hid", "painted"],
      "Murdoch'un kömürü kapalı bir kapta ısıtıp çıkan gazı evini aydınlatmak için borularla 'ilettiği' (led) anlatılır.",
    ],
    [
      "Planté's battery could be ---- many times, unlike earlier batteries that had to be thrown away.",
      ["recharged", "destroyed", "decorated", "translated", "ignored"],
      "Planté'nin pilinin, atılması gereken önceki pillerin aksine defalarca 'yeniden şarj edilebildiği' (recharged) anlatılır.",
    ],
    [
      "The hot weather made the smell from the river so ---- that Parliament considered moving out of London.",
      ["unbearable", "pleasant", "faint", "familiar", "useful"],
      "Sıcak havanın nehirden gelen kokuyu o kadar 'dayanılmaz' (unbearable) hâle getirdiği ki Parlamento'nun Londra'dan taşınmayı düşündüğü anlatılır.",
    ],
    [
      "Alternating current could be ---- to high voltages and sent over long distances with little loss.",
      ["stepped up", "given up", "put off", "turned down", "looked after"],
      "Alternatif akımın yüksek gerilimlere 'yükseltilebildiği' (stepped up) ve uzun mesafelere az kayıpla gönderilebildiği anlatılır.",
    ],
    [
      "The failure of a single relay set off a ---- reaction that shut down power across a huge region.",
      ["chain", "chemical", "polite", "delayed", "gentle"],
      "Tek bir rölenin arızasının çok geniş bir bölgede elektriği kesen bir 'zincirleme' (chain) tepkiyi başlattığı anlatılır.",
    ],
    [
      "A passive house is so well insulated that it needs very little energy to ---- comfortable in winter.",
      ["stay", "look", "cost", "move", "grow"],
      "Pasif evin o kadar iyi yalıtıldığı ki kışın rahat 'kalmak' (stay) için çok az enerjiye ihtiyaç duyduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first factory to be lit entirely by gas ---- in Manchester in 1805.",
      ["was opened", "opened it", "has opened", "was opening", "had opened"],
      "Fabrika açılan bir yapıdır ve olay geçmiştedir: edilgen geçmiş zaman 'was opened'.",
    ],
    [
      "If the summer of 1858 had not been so hot, the government ---- so quickly to build new sewers.",
      ["might not have acted", "might not act", "will not act", "did not act", "had not acted"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time power was restored the next morning, millions of people ---- the night in darkness.",
      ["had spent", "have spent", "spend", "will spend", "are spending"],
      "Geçmişteki bir olaydan önce tamamlanmış eylem: Past Perfect 'had spent'.",
    ],
    [
      "Bazalgette, ---- sewers are still in use today, designed the pipes to be much larger than necessary.",
      ["whose", "who", "which", "whom", "where"],
      "Kanalizasyonlar Bazalgette'e aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the World's Fair of 1893 ---- alternating current widely accepted in the United States.",
      ["was", "did", "had", "has", "it was"],
      "'Only after …' ile başlayan cümlede ana cümle devrik olur; edilgen yapıda 'was alternating current accepted' gerekir.",
    ],
    [
      "The tides in the estuary are ---- strong that the water level can change by more than thirteen metres.",
      ["so", "such", "too", "very", "as"],
      "Sıfattan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the tidal power station produces clean electricity, it changed the ecology of the estuary.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Temiz elektrik üretmesi ile haliç ekolojisini değiştirmesi zıttır: 'Although'.",
    ],
    [
      "Edison spent a great deal of effort ---- the public that alternating current was dangerous.",
      ["persuading", "to persuade", "persuade", "persuaded", "to have persuaded"],
      "'spend effort + -ing' kalıbı gerekir: 'persuading'.",
    ],
    [
      "The cholera outbreaks are thought ---- by sewage in the drinking water.",
      ["to have been caused", "to cause", "causing", "to be causing", "to have caused"],
      "Salgınlar neden olunan olaylardır ve geçmişte kalmıştır: 'be thought to have been + V3'.",
    ],
    [
      "The gas ---- in the works was stored in large tanks before being sent through the streets.",
      ["produced", "producing", "which produced", "to produce", "has produced"],
      "Gaz üretilen bir maddedir; edilgen anlamlı geçmiş ortaç 'produced' gerekir.",
    ],
    [
      "Neither the engineers ---- the politicians expected the failure to spread so far.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Passive houses are fitted with special ventilation systems ---- fresh air can enter without heat being lost.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Many people treated the new electric lights as though they ---- a kind of miracle.",
      ["were", "are", "will be", "have been", "being"],
      "'as though' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The higher the voltage, ---- energy is lost as heat in the cables.",
      ["the less", "less", "the least", "fewer", "the fewer"],
      "'The higher …, the less …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "At the end of the eighteenth century, homes and streets were lit mainly by candles and oil lamps, {1} gave a dim, smoky light. William Murdoch, a Scottish engineer working for the steam-engine makers Boulton and Watt in Cornwall, experimented with heating coal in a closed iron container. The process produced a gas that burned with a bright flame, {2} in 1792 he used it to light his own house, becoming one of the first people to do so. Murdoch later installed gas lighting in factories, {3} it allowed work to continue safely after dark and was cheaper than candles. In the early nineteenth century, companies began to build gasworks and to lay networks of pipes under city streets, and in 1813 Westminster Bridge in London became one of the first public places to be lit by gas. By the middle of the century, most large towns in Britain had gas street lights, {4} made the streets safer at night and changed patterns of social life. Gas lighting had disadvantages, however: it produced heat and fumes, and leaks could cause explosions. {5} the end of the century, it was being gradually replaced by electric lighting.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra mum ve gaz lambalarını niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(22) ----",
          ["and", "but", "unless", "although", "or"],
          "Gazın parlak bir alevle yanması ve onu evini aydınlatmak için kullanması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["where", "which", "who", "whose", "what"],
          "Boşluk fabrikaları (yer) niteler ve ardından tam bir cümle gelir: 'where'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki durumu niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["By", "Since", "Despite", "Unless", "Instead of"],
          "'By the end of the century' = 'yüzyılın sonuna gelindiğinde' kalıbı gerekir.",
        ],
      ],
    },
    {
      text:
        "The earliest batteries, developed at the beginning of the nineteenth century, produced electricity through chemical reactions that could not be reversed. Once the chemicals had been used up, the battery was useless. In 1859, the French physicist Gaston Planté invented the first battery {1} could be recharged. It consisted of two sheets of lead separated by strips of rubber, rolled into a spiral and placed in a container of sulphuric acid. When an electric current was passed through it, chemical changes stored energy in the cell, {2} this energy could later be released as electricity. The process could be repeated many times. Planté's battery was heavy and could store only a small amount of energy for its weight, {3} it could deliver a large current when needed. It was improved in the following decades, {4} versions of the lead-acid battery became widely used in telephone exchanges and, later, in cars, where they provided power to start the engine. More than a hundred and sixty years after its invention, the lead-acid battery is still one of the most common rechargeable batteries in the world, {5} newer types, such as lithium-ion batteries, are now used in phones, laptops and electric vehicles.",
      blanks: [
        [
          "(26) ----",
          ["that", "who", "where", "whose", "what"],
          "Boşluk 'the first battery' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Enerjinin depolanması ve sonra elektrik olarak salınabilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["but", "because", "so that", "unless", "since"],
          "Ağır olup az enerji depolaması ile gerektiğinde büyük akım verebilmesi zıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "although", "or"],
          "Geliştirilmesi ve yaygın kullanılması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["although", "because", "so", "unless", "since"],
          "Hâlâ en yaygın pillerden biri olması ile yeni türlerin telefon ve araçlarda kullanılması zıtlık içerir: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Bazalgette's sewers were designed in the 1850s, ----.",
      [
        "they still serve millions of Londoners today",
        "he had worked as an engineer on the railways",
        "the river was very dirty at the time",
        "cholera was spreading in many cities",
        "the work took several years to finish",
      ],
      "'Although' zıtlık ister: kanalizasyonlar 1850'lerde tasarlanmış olsa da bugün hâlâ milyonlarca Londralıya hizmet veriyor.",
    ],
    [
      "If Tesla had not developed a practical motor for alternating current, ----.",
      [
        "Westinghouse might have lost the contest",
        "electricity is used in almost every home today",
        "most power stations will use renewable energy",
        "Edison was a famous American inventor",
        "the lights had been switched on in New York",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Engineers chose the estuary of the Rance for the power station ----.",
      [
        "because its tides are unusually large",
        "although the tides there were weaker than elsewhere",
        "unless the government provided all the money",
        "so that boats could no longer use the river",
        "even if there was no suitable place for a dam",
      ],
      "Halici seçmelerinin nedeni gelgitin alışılmadık ölçüde yükselip alçalmasıdır: 'because'.",
    ],
    [
      "Since the first passive house was built in Germany in 1991, ----.",
      [
        "tens of thousands have been built around the world",
        "architects had designed many energy-efficient homes",
        "most houses would have been heated by oil",
        "energy prices will continue to rise",
        "the house was built in Darmstadt",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'have been built'.",
    ],
    [
      "Unless engineers can isolate a fault quickly, ----.",
      [
        "it may spread through the network and cause a large blackout",
        "the power station would have produced more electricity",
        "most homes had been using gas for lighting",
        "the cables will be buried underground",
        "the lights were switched on at night",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: arıza hızla yalıtılmadıkça şebekeye yayılıp büyük bir kesintiye yol açabilir.",
    ],
    [
      "The smell from the river became so bad ----.",
      [
        "that Parliament considered leaving London",
        "because the summer was very hot and dry",
        "although the river had always been dirty",
        "while engineers were preparing new plans",
        "unless the wind blew the smell away",
      ],
      "'so bad that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Studies have shown that when houses are well insulated, ----.",
      [
        "they need far less energy for heating",
        "they would have been more expensive to build",
        "most of them had been built before the war",
        "the windows will need to be replaced",
        "the walls were very thin",
      ],
      "'when' ile genel bir bulgu anlatılır: evler iyi yalıtıldığında ısınmak için çok daha az enerji gerekir.",
    ],
    [
      "So fierce was the competition between the two systems ----.",
      [
        "that it became known as the 'war of the currents'",
        "because both men wanted to supply electricity",
        "although alternating current was cheaper",
        "while cities were growing rapidly",
        "unless one system failed",
      ],
      "Devrik 'So fierce was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While direct current could not easily be sent over long distances, ----.",
      [
        "alternating current could be sent far at high voltage",
        "electricity is a form of energy",
        "power stations were built near rivers",
        "many cities had gas lighting",
        "Edison had many patents",
      ],
      "'While' iki sistemi karşılaştırır: doğru akım uzak mesafelere kolayca gönderilemezken alternatif akım yüksek gerilimde verimli biçimde iletilebiliyordu.",
    ],
    [
      "Once the new sewers had been completed, ----.",
      [
        "cholera became far rarer in London",
        "the river will be cleaned again",
        "the smell would have returned",
        "sewage contains many bacteria",
        "most of the houses had been rebuilt",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: Londra'da kolera salgınları çok daha seyrekleşti.",
    ],
    [
      "No sooner had the first relay failed ----.",
      [
        "than other lines began to overload",
        "when the engineers had gone home",
        "that the lights will go out",
        "before the system had been built",
        "so the city became quiet",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Gas lighting allowed factories to continue working safely after dark.",
      [
        "Gaz ışığı, fabrikaların karanlıkta güvenle çalışmasını sağladı.",
        "Gazla aydınlatma, fabrikaların gece çalışmasını tamamen yasakladı.",
        "Fabrikalar, karanlıkta çalışmamak için gaz lambalarını söndürdü.",
        "Gaz lambaları fabrikalarda yalnızca gündüz kullanılıyordu.",
        "Fabrikalar, gaz yerine mumla aydınlatılmayı tercih etti.",
      ],
      "'allowed factories to continue working' 'fabrikaların çalışmayı sürdürmesini sağladı', 'safely after dark' 'karanlık çöktükten sonra güvenle' demektir.",
    ],
    [
      "The battery stored energy through chemical changes that could later be reversed.",
      [
        "Pil, enerjiyi tersine çevrilebilen kimyasal değişimlerle depoluyordu.",
        "Pil, enerjiyi hiçbir kimyasal değişim olmadan depoluyordu.",
        "Pilin kimyasal değişimleri hiçbir zaman tersine çevrilemiyordu.",
        "Pil, depoladığı enerjiyi yalnızca bir kez kullanabiliyordu.",
        "Kimyasal değişimler, pilin enerji depolamasını engelliyordu.",
      ],
      "'stored energy through chemical changes' 'enerjiyi kimyasal değişimlerle depoluyordu', 'that could later be reversed' 'daha sonra tersine çevrilebilen' demektir.",
    ],
    [
      "The new sewers intercepted waste before it reached the river and carried it far downstream.",
      [
        "Yeni kanalizasyonlar atıkları nehre ulaşmadan yakalayıp çok aşağılara taşıdı.",
        "Yeni kanalizasyonlar atıkları doğrudan şehrin ortasındaki nehre boşalttı.",
        "Atıklar, yeni kanalizasyonlar sayesinde nehrin kaynağına geri gönderildi.",
        "Nehir, yeni kanalizasyonları atıklardan temizledi.",
        "Yeni kanalizasyonlar atıkların nehre ulaşmasını hızlandırdı.",
      ],
      "'intercepted waste before it reached the river' 'atıkları nehre ulaşmadan yakaladı', 'carried it far downstream' 'çok aşağılara taşıdı' demektir.",
    ],
    [
      "Edison argued that alternating current was too dangerous to be used in homes.",
      [
        "Edison, alternatif akımın evler için fazla tehlikeli olduğunu savundu.",
        "Edison, alternatif akımın evler için en güvenli seçenek olduğunu savundu.",
        "Edison, evlerin elektrik kullanmaması gerektiğini söyledi.",
        "Edison, doğru akımın tehlikeli olduğunu kabul etti.",
        "Edison, alternatif akımı kendi evinde kullanmayı tercih etti.",
      ],
      "'argued that alternating current was too dangerous' 'alternatif akımın fazla tehlikeli olduğunu savundu', 'to be used in homes' 'evlerde kullanılamayacak kadar' demektir.",
    ],
    [
      "The turbines generate electricity both as the tide comes in and as it goes out.",
      [
        "Türbinler gelgit hem yükselirken hem alçalırken elektrik üretir.",
        "Türbinler yalnızca gelgit yükselirken elektrik üretir.",
        "Gelgit, türbinlerin elektrik üretmesini engeller.",
        "Türbinler, gelgiti durdurmak için elektrik kullanır.",
        "Türbinler, deniz durgunken en çok elektriği üretir.",
      ],
      "'generate electricity both as the tide comes in' 'hem gelgit yükselirken elektrik üretir', 'and as it goes out' 've alçalırken' demektir.",
    ],
    [
      "The house is heated mainly by the sun, its occupants and its electrical appliances.",
      [
        "Ev başlıca güneş, sakinleri ve aletleriyle ısınır.",
        "Ev yalnızca büyük bir kömür sobasıyla ısıtılır.",
        "Evde yaşayanlar, ısıyı dışarı atmak için elektrikli aletler kullanır.",
        "Güneş, evin ısınmasını tamamen engeller.",
        "Evde hiçbir elektrikli alet kullanılmaz.",
      ],
      "'is heated mainly by the sun' 'esas olarak güneş tarafından ısıtılır', 'its occupants and its electrical appliances' 'içinde yaşayanlar ve elektrikli aletleri' demektir.",
    ],
  ],
  trEn: [
    [
      "Gazla aydınlatma, geceleri sokakları daha güvenli hâle getirdi.",
      [
        "Gas lighting made the streets safer at night.",
        "Gas lighting made the streets more dangerous at night.",
        "The streets were not lit at night.",
        "Gas lighting was used only during the day.",
        "Gas lighting was banned from the streets.",
      ],
      "'geceleri sokakları daha güvenli hâle getirdi' 'made the streets safer at night' karşılığıdır.",
    ],
    [
      "Kurşun-asit piller hâlâ otomobillerde yaygın olarak kullanılmaktadır.",
      [
        "Lead-acid batteries are still widely used in cars.",
        "Lead-acid batteries are no longer used anywhere.",
        "Cars do not need batteries.",
        "Lead-acid batteries are used only in phones.",
        "Lead-acid batteries were invented for electric cars.",
      ],
      "'hâlâ otomobillerde yaygın olarak kullanılmaktadır' 'are still widely used in cars' karşılığıdır.",
    ],
    [
      "Kanalizasyon sistemi, kolera salgınlarının azalmasına yardım etti.",
      [
        "The sewer system helped to reduce outbreaks of cholera.",
        "The sewer system caused outbreaks of cholera.",
        "Cholera outbreaks increased after the sewers were built.",
        "The sewer system had no effect on cholera.",
        "Cholera was cured by a new drug at the same time.",
      ],
      "'kolera salgınlarının azalmasına yardım etti' 'helped to reduce outbreaks of cholera' karşılığıdır.",
    ],
    [
      "Alternatif akım, uzun mesafelere daha verimli biçimde iletilebilir.",
      [
        "Alternating current travels long distances more efficiently.",
        "Alternating current cannot be transmitted over long distances.",
        "Direct current is always more efficient over long distances.",
        "Alternating current loses all its energy over long distances.",
        "Long distances have no effect on electricity.",
      ],
      "'uzun mesafelere daha verimli biçimde iletilebilir' 'can be transmitted more efficiently over long distances' karşılığıdır.",
    ],
    [
      "Elektrik kesintisi, milyonlarca insanı saatlerce karanlıkta bıraktı.",
      [
        "The power cut left millions in the dark for hours.",
        "The power cut affected only a few homes.",
        "Millions of people caused the power cut.",
        "The lights stayed on during the power cut.",
        "The power cut lasted only a few seconds.",
      ],
      "'milyonlarca insanı saatlerce karanlıkta bıraktı' 'left millions of people in darkness for hours' karşılığıdır.",
    ],
    [
      "Pasif evler, ısınma için çok az enerji gerektirir.",
      [
        "Passive houses need very little energy for heating.",
        "Passive houses need a great deal of energy for heating.",
        "Passive houses cannot be heated at all.",
        "Passive houses are heated only by electricity.",
        "Passive houses are cold in winter.",
      ],
      "'ısınma için çok az enerji gerektirir' 'need very little energy for heating' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the mid-nineteenth century, London's sewage flowed mainly into the River Thames, which was also a major source of drinking water. The river was, in effect, the city's main drain, and the city suffered repeated outbreaks of cholera, a disease that killed tens of thousands of people. Most doctors still blamed the disease on foul-smelling air, or 'miasma'. In the unusually hot summer of 1858, the smell from the river became so overpowering that it was known as 'the Great Stink'. Members of Parliament hung chemically treated sheets over the windows, which stand beside the river, and politicians considered moving elsewhere. Within weeks, Parliament voted the money needed for a scheme drawn up by Joseph Bazalgette. He designed a network of large brick sewers running parallel to the river, which intercepted waste before it reached the Thames and carried it far downstream, east of the city. The project involved building about one hundred and thirty kilometres of main sewers and more than seventeen hundred kilometres of smaller street sewers, as well as embankments along the river. Bazalgette deliberately made the pipes much larger than was needed at the time, anticipating future growth. Ironically, the project was driven by fear of the smell, but it greatly reduced cholera, which was in fact spread by contaminated water.",
      questions: [
        [
          "According to the passage, the government acted quickly in 1858 because ----.",
          [
            "the smell from the river had become intolerable",
            "scientists proved that cholera was spread by water",
            "the river had dried up",
            "Bazalgette paid for the work with his own money",
            "the Houses of Parliament had flooded",
          ],
          "Metne göre nehirden gelen koku o kadar dayanılmaz oldu ki Parlamento haftalar içinde planı onayladı.",
        ],
        [
          "The writer mentions that Bazalgette made the pipes larger than necessary in order to show ----.",
          [
            "that he planned for future growth",
            "that he made a serious mistake",
            "why the project was so cheap",
            "how cholera was spread",
            "that the river was too small",
          ],
          "Boruları o günkü ihtiyaçtan büyük yapması, şehrin gelecekteki büyümesini öngördüğünü gösterir.",
        ],
        [
          "It can be inferred from the passage that the project ----.",
          [
            "cut disease despite resting on a false theory",
            "was based on a correct understanding of cholera",
            "made the cholera outbreaks worse",
            "was abandoned before it was completed",
            "had no effect on public health",
          ],
          "Projenin kokudan korkuyla yapılmasına rağmen aslında su yoluyla yayılan kolerayı büyük ölçüde azaltması, yanlış bir inanca dayansa da hastalığı azaltmayı başardığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In the 1880s, Thomas Edison's company began building electricity networks in American cities using direct current, in which electricity moves steadily one way. Direct current, however, could not easily be changed to higher or lower voltages, and it lost a great deal of energy when sent through long cables, so power stations had to be built within about a kilometre and a half of their customers. The businessman George Westinghouse, using patents bought from the inventor Nikola Tesla, promoted an alternative: alternating current, which constantly reverses direction. With devices called transformers, alternating current could be stepped up to very high voltages for efficient transmission over long distances and then reduced again for safe use in homes. A bitter competition followed. Edison's supporters launched a public campaign claiming that alternating current was deadly, and some even staged demonstrations in which animals were killed with it. In 1893, however, Westinghouse won the contract to light the World's Fair in Chicago, which was illuminated by around a hundred thousand lamps, and soon afterwards his company was chosen to build a major power station at Niagara Falls, sending electricity to the city of Buffalo, more than thirty kilometres away. Alternating current became the standard for electricity supply around the world, although direct current is now returning in some long-distance links and in electronics.",
      questions: [
        [
          "According to the passage, a disadvantage of direct current was that ----.",
          [
            "it travelled poorly over long distances",
            "it constantly reversed direction",
            "it could be used only for lamps",
            "it was invented by Tesla",
            "it required transformers",
          ],
          "Metne göre doğru akım uzun kablolarda çok enerji kaybediyordu ve santrallerin müşterilere yakın kurulması gerekiyordu.",
        ],
        [
          "The writer mentions the demonstrations in which animals were killed in order to show ----.",
          [
            "how far Edison's side went against rivals",
            "that alternating current was completely safe",
            "how transformers worked",
            "why the World's Fair was held in Chicago",
            "that Westinghouse opposed Tesla",
          ],
          "Hayvanların öldürüldüğü gösteriler, Edison taraftarlarının rakiplerini itibarsızlaştırmak için ne kadar ileri gittiğini gösterir.",
        ],
        [
          "It can be understood from the passage that the Niagara Falls project ----.",
          [
            "demonstrated that electricity could be sent to a distant city",
            "used direct current",
            "was built by Edison",
            "failed to produce electricity",
            "supplied power only to the falls",
          ],
          "Elektriğin otuz kilometreden uzak Buffalo şehrine gönderilmesi, elektriğin uzak bir şehre iletilebildiğini gösterdi.",
        ],
      ],
    },
    {
      text:
        "The estuary of the River Rance in Brittany, in north-western France, has some of the largest tides in the world: the difference between high and low water can reach more than thirteen metres. In 1966, after years of construction, a power station was opened across the mouth of the estuary, the first in the world to generate electricity on a large scale from the tides. A barrage about seven hundred and fifty metres long contains twenty-four turbines. As the tide rises, water flows through the turbines into the estuary, and as it falls, the water flows back out, turning them again. The station produces enough electricity for a city of around two hundred thousand people, and, unlike wind and solar power, its output can be predicted years in advance, since the tides depend on the regular movements of the moon and the sun. Building the barrage, however, had significant environmental effects. During construction, the estuary was completely closed off from the sea for about three years, and many species disappeared. Although a new and diverse ecosystem has since developed, it is different from the original one, and silt has built up in parts of the estuary. Partly because of its cost and environmental impact, few similar stations have been built, although one larger station opened in South Korea in 2011.",
      questions: [
        [
          "According to the passage, an advantage of tidal power is that ----.",
          [
            "its output can be forecast long in advance",
            "it has no effect on the environment",
            "it works only during storms",
            "it is cheaper than all other forms of energy",
            "it does not require turbines",
          ],
          "Metne göre gelgitler ay ve güneşin düzenli hareketlerine bağlı olduğu için üretim yıllar önceden tahmin edilebilir.",
        ],
        [
          "The writer mentions that the estuary was closed off for about three years in order to explain ----.",
          [
            "why many species vanished during the work",
            "how the turbines were tested",
            "why the tides are so high",
            "how much electricity was produced",
            "why South Korea built a station",
          ],
          "Haliçin üç yıl kadar denizden tamamen kapatılması, inşaat sırasında pek çok türün neden yok olduğunu açıklar.",
        ],
        [
          "It can be inferred from the passage that the small number of similar stations ----.",
          [
            "is partly explained by their cost and environmental effects",
            "is due to a lack of tides in other countries",
            "shows that the Rance station failed",
            "was caused by opposition from South Korea",
            "means that tidal power is unpredictable",
          ],
          "Metne göre maliyet ve çevresel etki kısmen benzer istasyonların az yapılmasının nedenidir.",
        ],
      ],
    },
    {
      text:
        "Shortly after five o'clock on the evening of 9 November 1965, a small protective device called a relay at a power station in Ontario, Canada, switched off a transmission line, as it was designed to do when the flow of electricity exceeded a certain level. Unfortunately, it had been set incorrectly, and it tripped even though the line was not overloaded. The electricity that had been flowing along that line was automatically diverted onto other lines, which then became overloaded and switched off in turn. Within about thirteen minutes, the failure had spread across a vast area of north-eastern North America, cutting off power to around thirty million people in Ontario and eight American states, including New York City. Hundreds of thousands of commuters were trapped in underground trains or lifts, and traffic lights failed across the region. The night was clear and the moon was nearly full, which helped people to find their way, and there was little crime or panic. Power was restored to most areas within about thirteen hours. The blackout revealed how closely connected the electricity networks had become: the links that allowed regions to share power and support each other could also allow a failure in one place to spread rapidly to others. In response, the industry created new organisations to coordinate the reliability of the grid.",
      questions: [
        [
          "According to the passage, the blackout began when ----.",
          [
            "a badly set relay cut a normal line",
            "a power station exploded in New York",
            "a storm damaged many power lines",
            "the moon caused a surge of electricity",
            "workers deliberately shut down the system",
          ],
          "Metne göre yanlış ayarlanmış bir röle, hat aşırı yüklenmediği hâlde onu kapattı.",
        ],
        [
          "The writer mentions the nearly full moon in order to show ----.",
          [
            "why the night passed fairly calmly",
            "how the relay was set",
            "why power was restored so quickly",
            "that the blackout happened during the day",
            "how electricity is produced",
          ],
          "Gecenin açık ve ayın neredeyse dolunay olması, insanların yolunu bulmasına yardım ederek gecenin büyük bir kargaşa olmadan geçmesinin nedenlerinden biridir.",
        ],
        [
          "It can be inferred from the passage that connecting electricity networks ----.",
          [
            "brings benefits but can also allow failures to spread",
            "has no disadvantages at all",
            "was banned after the blackout",
            "prevents all blackouts",
            "was the direct cause of the faulty relay",
          ],
          "Bölgelerin güç paylaşmasını sağlayan bağlantıların bir yerdeki arızanın hızla yayılmasına da yol açabilmesi, bunun hem yarar hem risk getirdiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "A passive house is a building designed to need very little energy for heating or cooling, while remaining comfortable all year round. The standard was developed in the late 1980s by the German physicist Wolfgang Feist and the Swedish engineer Bo Adamson, and the first example was built in Darmstadt, Germany, in 1991. Instead of relying on large heating systems, passive houses reduce heat loss as much as possible. The walls, roof and floor are covered with thick layers of insulation, the windows usually have three layers of glass, and the building is made almost completely airtight, so that warm air cannot leak out through gaps. Because an airtight building would quickly become stuffy, a mechanical ventilation system supplies a constant flow of fresh air, passing it through a heat exchanger that transfers most of the warmth from the outgoing stale air to the incoming fresh air. Much of the remaining heat comes from sunlight through south-facing windows, from the bodies of the people inside and from appliances such as cookers and computers. Studies have found that passive houses typically use around ninety per cent less energy for heating than ordinary buildings. Building them can cost somewhat more at first, but supporters argue that the savings on energy bills soon make up the difference, and the standard has now been adopted for schools, offices and apartment blocks in many countries.",
      questions: [
        [
          "According to the passage, passive houses need a ventilation system because ----.",
          [
            "the sealed building would otherwise get stuffy",
            "they have no windows",
            "they are always too warm in winter",
            "the insulation produces harmful gases",
            "they are heated by fires",
          ],
          "Metne göre hava geçirmez bir bina çabucak havasız kalacağı için sürekli temiz hava sağlayan bir sistem gerekir.",
        ],
        [
          "The writer mentions the heat exchanger in order to explain ----.",
          [
            "how fresh air comes in without much heat loss",
            "why passive houses are expensive",
            "how sunlight enters the house",
            "where the first passive house was built",
            "why the windows have three layers of glass",
          ],
          "Isı değiştiricinin dışarı çıkan havanın ısısını içeri giren temiz havaya aktarması, temiz havanın fazla ısı kaybı olmadan nasıl sağlandığını açıklar.",
        ],
        [
          "It can be understood from the passage that supporters of passive houses believe ----.",
          [
            "lower energy bills compensate for the higher initial cost",
            "they are cheaper to build than ordinary houses",
            "they should be built only in Germany",
            "they need large heating systems",
            "they are uncomfortable in summer",
          ],
          "Metne göre destekçiler enerji faturalarındaki tasarrufun başlangıçtaki farkı kısa sürede kapattığını savunur.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In some cities, homes are heated not by their own boilers but by hot water piped from a central plant. ---- Such district heating systems are common in Scandinavia, where they supply heat to a large proportion of homes.",
      [
        "The plant may use waste heat from power stations.",
        "Many people prefer to have their own boiler at home.",
        "Winters in Scandinavia are long and dark.",
        "Hot water is also used for washing and cooking.",
        "Some cities have very old buildings in their centres.",
      ],
      "Boşluktan sonra 'Such district heating systems' ile bölgesel ısıtma sistemleri anlatılır; boşluğa merkezî tesisin santral ya da fabrikaların aksi hâlde kaybolacak atık ısısını kullanabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Many electrical devices continue to use a small amount of power even when they appear to be switched off. ---- Unplugging devices that are not in use can therefore reduce electricity bills.",
      [
        "Over a year, this standby power adds up.",
        "Televisions have become much larger in recent years.",
        "Many people charge their phones overnight.",
        "Electricity is measured in kilowatt-hours.",
        "Some devices have small lights that show they are working.",
      ],
      "Boşluktan sonra 'therefore' ile kullanılmayan cihazların fişten çekilmesinin faturayı azaltabileceği söylenir; boşluğa bekleme gücünün bir hanede yıl boyunca önemli bir miktara ulaşabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The demand for electricity is not the same throughout the day. ---- Power companies must therefore keep extra power stations ready to meet these peaks.",
      [
        "It usually peaks in the early evening.",
        "Many power stations burn gas or coal.",
        "Electricity cannot be seen.",
        "Some people work at night.",
        "Electricity prices vary between countries.",
      ],
      "Boşluktan sonra 'therefore' ile zirveleri karşılamak için ek santrallerin hazır tutulduğu söylenir; boşluğa talebin akşamüstü insanlar eve dönüp ışık ve ocakları açtığında keskin biçimde yükseldiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the European Union, many household appliances must carry a label showing how much energy they use. ---- This helps consumers to compare models and choose more efficient ones.",
      [
        "The label grades models from green to red.",
        "Many appliances are made in Asia.",
        "Washing machines have become quieter.",
        "Some shops offer discounts in January.",
        "Refrigerators keep food fresh.",
      ],
      "Boşluktan sonra 'This' ile tüketicilerin modelleri karşılaştırabildiği söylenir; boşluğa etiketin en verimliden en verimsize harf ve renk ölçeği kullandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Before electricity reached rural areas, many families lit their homes with kerosene lamps. ---- In some parts of the world, they are still widely used today.",
      [
        "They were cheap but smoky and a fire risk.",
        "Many villages are far from large towns.",
        "Kerosene is also used as fuel for aircraft.",
        "Some families had large gardens.",
        "Candles were used in churches.",
      ],
      "Boşluktan sonra 'they' ile lambaların bugün hâlâ kullanıldığı söylenir; boşluğa bu lambaların ucuz ama dumanlı ve yangın çıkarmaya yatkın olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "A solar cooker uses reflective surfaces to concentrate sunlight onto a pot. ---- For this reason, it is promoted in sunny regions where wood for cooking is scarce.",
      [
        "It cooks without fuel or smoke.",
        "Many people enjoy cooking outdoors in summer.",
        "Mirrors are made by coating glass with metal.",
        "Some foods take many hours to cook.",
        "Forests provide homes for many animals.",
      ],
      "Boşluktan sonra 'For this reason' ile odun kıt güneşli bölgelerde önerildiği söylenir; boşluğa güneş ocağının yakıtsız ve dumansız pişirebildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Heavy materials such as stone and concrete soak up warmth in the daytime and give it back after dark.",
        "This property, known as thermal mass, helps to keep buildings at a steady temperature.",
        "It is especially useful in climates with hot days and cool nights.",
        "Many famous buildings are made of marble.",
        "Combined with good ventilation, it can reduce the need for air conditioning.",
      ],
      odd: 3,
      why: "Parça ısıl kütleyi anlatır. Pek çok ünlü binanın mermerden yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Dark roofs absorb a great deal of sunlight and become very hot.",
        "Painting them white or covering them with reflective materials can keep buildings much cooler.",
        "Many people paint their houses every few years.",
        "Such 'cool roofs' can reduce the energy needed for air conditioning.",
        "If used across a whole city, they can also lower outdoor temperatures slightly.",
      ],
      odd: 2,
      why: "Parça serin çatıları anlatır. Pek çok kişinin evini birkaç yılda bir boyadığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A flywheel stores energy by spinning a heavy wheel at high speed.",
        "The energy can be released quickly when it is needed.",
        "Some flywheels spin in a vacuum to reduce friction.",
        "Many children enjoy playing with spinning tops.",
        "They are used to help balance supply and demand on electricity networks.",
      ],
      odd: 3,
      why: "Parça volan ile enerji depolamayı anlatır. Pek çok çocuğun topaçla oynamaktan hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Gaps around doors and windows can let a surprising amount of heat escape from a house.",
        "Sealing them with simple strips of foam or rubber is one of the cheapest ways to save energy.",
        "Many old houses have wooden doors.",
        "Care must be taken, however, to make sure that rooms still receive enough fresh air.",
        "This is especially important in rooms with gas cookers or fires.",
      ],
      odd: 2,
      why: "Parça kapı ve pencere aralıklarının yalıtımını anlatır. Pek çok eski evin ahşap kapıları olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some buildings collect rain from their roofs and store it in tanks.",
        "The water can be used for flushing toilets and watering gardens.",
        "This reduces the demand for treated drinking water.",
        "In dry regions, such systems can also help households during droughts.",
        "Many people carry umbrellas in autumn.",
      ],
      odd: 4,
      why: "Parça yağmur suyu toplamayı anlatır. Pek çok kişinin sonbaharda şemsiye taşıdığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Combined heat and power plants generate electricity and use the waste heat at the same time.",
        "In an ordinary power station, more than half of the energy in the fuel is lost as heat.",
        "Capturing this heat for buildings or industry can greatly increase overall efficiency.",
        "Many cities have parks where people can relax.",
        "Such plants are often used in hospitals, universities and factories.",
      ],
      odd: 3,
      why: "Parça birleşik ısı ve güç santrallerini anlatır. Pek çok şehirde insanların dinlenebileceği parklar olduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
