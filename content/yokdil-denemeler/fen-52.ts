import type { YokdilDeneme } from "./types";

export const FEN_52: YokdilDeneme = {
  no: 52,
  field: "fen",
  vocab: [
    [
      "Ivory was becoming so scarce and expensive that manufacturers began looking for a ---- material.",
      ["substitute", "fragile", "visible", "liquid", "sacred"],
      "Fildişi azalıp pahalılaştığı için üreticilerin 'yerine geçecek' (substitute) bir malzeme aradığı anlatılır.",
    ],
    [
      "The film was ---- to water vapour, so it kept food fresh for much longer.",
      ["resistant", "attractive", "similar", "grateful", "loyal"],
      "Filmin su buharına 'dayanıklı' (resistant) olduğu ve yiyecekleri daha uzun süre taze tuttuğu anlatılır.",
    ],
    [
      "The head of the glass drop can ---- blows from a hammer without breaking.",
      ["withstand", "deliver", "invent", "measure", "paint"],
      "Cam damlasının baş kısmının çekiç darbelerine kırılmadan 'dayanabildiği' (withstand) anlatılır.",
    ],
    [
      "Copper wires laid under the sea had to be ---- so that the electric current would not leak into the water.",
      ["insulated", "decorated", "polished", "abandoned", "magnified"],
      "Deniz altına döşenen bakır tellerin akımın suya kaçmaması için 'yalıtılması' (insulated) gerektiği anlatılır.",
    ],
    [
      "Adding wood pulp to the ice made it much stronger and slowed the rate at which it ----.",
      ["melted", "spoke", "grew", "flew", "argued"],
      "Buza odun hamuru eklenmesinin onu güçlendirdiği ve 'erime' (melted) hızını yavaşlattığı anlatılır.",
    ],
    [
      "The chemists had to ---- dozens of different formulas before they found one that worked.",
      ["try out", "put off", "look up", "give in", "turn down"],
      "Kimyacıların işe yarayan bir formül bulmadan önce düzinelerce formülü 'denemek' (try out) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the 1860s, so many elephants ---- for their tusks that ivory had become very expensive.",
      ["had been killed", "are killed", "have been killed", "will be killed", "kill"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been killed'.",
    ],
    [
      "If the chemist had not spilled wine on the tablecloth, he ---- the idea for the new film.",
      ["might never have had", "will never have", "never has", "had never had", "would never have"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might never have had'.",
    ],
    [
      "The drops ---- by letting molten glass fall into cold water.",
      ["are made", "make", "have made", "are making", "made"],
      "Damlalar yapılır; genel geçer edilgen yapı: 'are made'.",
    ],
    [
      "---- the head of the drop is extremely strong, its thin tail breaks easily.",
      ["Whereas", "Because", "Unless", "So that", "Since"],
      "Başın çok güçlü olması ile kuyruğun kolayca kırılması karşılaştırılır: 'Whereas'.",
    ],
    [
      "The engineer, ---- idea was to build a ship out of ice, presented it to Churchill.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin fikri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until the material was used to insulate cables ---- it become widely known in Europe.",
      ["did", "had", "was", "has", "does not"],
      "'Not until' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The product was named after the fortieth formula, ---- was the first to work.",
      ["which", "what", "who", "whose", "where"],
      "Virgülden sonra 'kırkıncı formül'ü niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
    ],
    [
      "The more wood pulp was added, ---- the ice became.",
      ["the stronger", "the strongest", "stronger", "strongest", "so strong"],
      "'The more ..., the stronger ...' paralel yapısı: 'the stronger'.",
    ],
    [
      "The admiral insisted that the block of ice ---- with a bullet to test its strength.",
      ["be shot", "is shot", "was shooting", "to be shot", "being shot"],
      "'insist that' sonrası yalın fiil (subjunctive), edilgen: 'be shot'.",
    ],
    [
      "The rubber substitute is known ---- in many wetsuits worn by divers.",
      ["to be used", "using", "to use", "used", "having used"],
      "'is known to be used' kalıbında edilgen mastar: 'to be used'.",
    ],
    [
      "The cable failed after only a few weeks ---- the insulation had been damaged.",
      ["because", "unless", "although", "whereas", "so that"],
      "Kablonun arızalanmasının nedeni yalıtımın zarar görmüş olmasıdır: 'because'.",
    ],
    [
      "The chemist spent years trying to make the film ---- moisture.",
      ["resist", "resisting", "to resisting", "resisted", "be resisted"],
      "'make sth do sth' kalıbında yalın fiil: 'resist'.",
    ],
    [
      "Had the war continued for longer, the ice ship ---- built.",
      ["might have been", "is", "will be", "had been", "is being"],
      "Devrik üçüncü tip koşul cümlesi: 'might have been'.",
    ],
    [
      "Both the billiard balls and the false teeth ---- from the new plastic.",
      ["were made", "was made", "making", "to make", "has made"],
      "'Both ... and' çoğul özne alır, edilgen geçmiş: 'were made'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the 1860s, billiards was hugely popular in the United States, and the best balls were made from ivory. However, each elephant tusk could produce only a few balls, {1} the growing demand made ivory increasingly scarce. A company that made billiard balls offered a prize of ten thousand dollars to anyone who could find a suitable substitute. A printer named John Wesley Hyatt took up the challenge, {2} after years of experiments he and his brother developed a material they called celluloid, made from cellulose, camphor and other chemicals. It could be moulded when warm and became hard when it cooled, {3} it was one of the first commercially successful plastics. The early balls were not perfect, {4} according to one story, they sometimes made a loud crack like a gunshot when they struck each other. Celluloid was soon used for combs, collars and false teeth, {5} its most important use came later, when it was used to make photographic and cinema film. Unfortunately, it was also highly flammable, and many early films have been lost in fires.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "until"],
          "Her dişin az top vermesi ve artan talebin fildişini azaltması aynı yönde iki bilgidir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Meydan okumayı kabul etmesi ve yıllar süren deneylerin ardından malzemeyi geliştirmesi birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Kalıplanabilmesi ve ilk başarılı plastiklerden biri olması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "so that"],
          "İlk topların kusurlu olması ve bir anlatıya göre silah sesi gibi çatırdaması birbirini destekler: 'and'.",
        ],
        [
          "(25) ----",
          ["but", "and", "so", "or", "for"],
          "Taraklar ve yakalar gibi kullanımlar ile en önemli kullanımın daha sonra gelmesi karşılaştırılır: 'but'.",
        ],
      ],
    },
    {
      text:
        "In about 1900, the Swiss chemist Jacques Brandenberger was sitting in a restaurant when a customer at a nearby table spilled wine on the tablecloth. Watching the waiter replace it, he began to think about how to make a cloth that would repel liquids {1} could simply be wiped clean. He tried spraying cloth with a coating of viscose, a liquid form of cellulose, {2} the result was stiff and unattractive. However, he noticed that the coating peeled away from the cloth as a clear, thin film. Brandenberger abandoned the idea of the tablecloth {3} began to develop the film itself. By 1912 he had built a machine to produce it in sheets, and he called it cellophane, combining 'cellulose' with the French word for 'transparent'. At first, it was used to make the eyepieces of gas masks, {4} sales remained modest. The great breakthrough came in the late 1920s, when chemists at an American company found a way to make it resistant to moisture. Shops began to wrap sweets, bread and cigarettes in it, {5} customers liked being able to see what they were buying. Today, cellophane has largely been replaced by plastic films made from oil, although it is still valued because it can break down naturally.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Sıvıları itmesi ve silinerek temizlenebilmesi istenen iki özelliktir: 'and'.",
        ],
        [
          "(27) ----",
          ["but", "and", "so", "or", "for"],
          "Kaplamayı denemesi ile sonucun sert ve çirkin olması zıttır: 'but'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "Masa örtüsü fikrinden vazgeçmesi ve filmin kendisini geliştirmeye başlaması birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["but", "and", "so", "or", "since"],
          "Gaz maskelerinde kullanılması ile satışların sınırlı kalması zıttır: 'but'.",
        ],
        [
          "(30) ----",
          ["because", "unless", "although", "until", "so that"],
          "Dükkânların ürünleri ona sarmasının nedeni müşterilerin ne aldığını görmek istemesidir: 'because'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although celluloid could replace ivory, ----.",
      [
        "it had the serious disadvantage of catching fire easily",
        "elephants are large",
        "billiards is a game",
        "printers use ink",
        "the company that made the billiard balls offered a large prize to anyone who could find a substitute",
      ],
      "'Although' zıtlık ister: selüloit fildişinin yerini alabiliyordu ama kolay alev alma gibi ciddi bir kusuru vardı.",
    ],
    [
      "If the coating had not peeled away from the cloth, ----.",
      [
        "Brandenberger might not have discovered the film",
        "restaurants are busy",
        "wine is red",
        "waiters clean tables",
        "the chemist would have stopped going to restaurants where customers spilled wine on the tablecloths",
      ],
      "Üçüncü tip koşul: kaplama kumaştan soyulmasaydı Brandenberger filmi keşfetmeyebilirdi.",
    ],
    [
      "----, the drop shatters into powder.",
      [
        "As soon as its thin tail is snapped",
        "Although glass is old",
        "Unless water is cold",
        "Since kings were curious",
        "While the head of the drop is being struck repeatedly with a hammer by a curious scientist",
      ],
      "Damlanın ince kuyruğu kırılır kırılmaz damla toz haline gelir.",
    ],
    [
      "The first telegraph cable across the Channel worked ----.",
      [
        "because its copper wire was protected by a coating of gutta-percha",
        "although cables are long",
        "unless the sea was rough",
        "so that ships could sail",
        "while the British Empire was importing large quantities of rubber and other materials from its colonies",
      ],
      "Kanal'ı geçen ilk telgraf kablosu, bakır teli gütaperka kaplamayla korunduğu için çalıştı.",
    ],
    [
      "Since steel was in short supply during the war, ----.",
      [
        "an engineer proposed building ships from a mixture of ice and wood pulp",
        "wars are expensive",
        "ice is cold",
        "Canada has lakes",
        "the prime minister was said to have placed a block of the material in his bath to watch it melt",
      ],
      "'Since' neden bildirir: savaş sırasında çelik kıt olduğundan bir mühendis buz ve odun hamuru karışımından gemi yapmayı önerdi.",
    ],
    [
      "Not only was the spray used to protect missiles, ----.",
      [
        "but it also became a popular product in homes",
        "and rockets are fast",
        "since rust is red",
        "so chemists work in laboratories",
        "unless the company had sold the product to the public in aerosol cans in the late 1950s",
      ],
      "'Not only ... but also' yapısı tamamlanır: sprey yalnızca füzeleri korumak için kullanılmadı, evlerde de popüler bir ürün oldu.",
    ],
    [
      "As soon as the rubber substitute could be produced in a factory, ----.",
      [
        "it was used for gloves, hoses and later wetsuits",
        "rubber is elastic",
        "trees grow slowly",
        "factories are large",
        "the price of natural rubber had risen sharply because supplies came mainly from distant plantations",
      ],
      "Kimyacılar kauçuk yerine geçen maddeyi yapmanın yolunu bulunca eldivenlerde, hortumlarda ve daha sonra dalgıç giysilerinde kullanıldı.",
    ],
    [
      "Unless cellophane is treated with a special coating, ----.",
      [
        "it allows moisture to pass through",
        "it is clear",
        "shops sell sweets",
        "paper is cheap",
        "the chemists in America would have found a way to make it resistant to water much earlier than they did",
      ],
      "'Unless' olumsuz koşul: selofan özel bir kaplamayla işlenmezse nemin geçmesine izin verir.",
    ],
    [
      "The tension inside the glass drop is so great ----.",
      [
        "that the whole drop explodes when the tail is broken",
        "although glass is clear",
        "because water is cold",
        "unless the drop is small",
        "while scientists in the seventeenth century were trying to explain why the head was so strong",
      ],
      "Cam damlasının içindeki gerilim o kadar büyüktür ki kuyruk kırıldığında tüm damla patlar.",
    ],
    [
      "Even though the ice ship was never built, ----.",
      [
        "a small prototype was tested on a lake in Canada",
        "ice floats",
        "ships are heavy",
        "winters are long",
        "the engineer who proposed it had earlier escaped from a prison camp during the First World War",
      ],
      "'Even though' zıtlık ister: buz gemi hiç inşa edilmese de küçük bir prototip Kanada'daki bir gölde denendi.",
    ],
    [
      "As the material could be moulded into almost any shape when hot, ----.",
      [
        "it was ideal for insulating cables and making small objects",
        "trees produce sap",
        "the material is brown",
        "Malaysia is hot",
        "dentists had been using it to fill the roots of teeth since the nineteenth century",
      ],
      "Malzeme ısıtıldığında neredeyse her şekle sokulabildiği için kabloları yalıtmak ve küçük nesneler yapmak için idealdi.",
    ],
  ],
  enTr: [
    [
      "Celluloid could be moulded when warm and became hard when it cooled.",
      [
        "Selüloit ılıkken kalıplanabiliyor ve soğuyunca sertleşiyordu.",
        "Selüloit soğukken kalıplanabiliyor ve ısınınca sertleşiyordu.",
        "Soğuyunca sertleşen selüloit, hiçbir biçimde kalıplanamadığı için kısa sürede terk edildi.",
        "Sıcaklık selüloiti kalıpladı.",
        "Selüloit hiç sertleşmezdi.",
      ],
      "'Celluloid could be moulded when warm' 'selüloit ılıkken kalıplanabiliyordu', 'and became hard when it cooled' 've soğuyunca sertleşiyordu' karşılığıdır.",
    ],
    [
      "The coating peeled away from the cloth as a clear, thin film.",
      [
        "Kaplama kumaştan şeffaf, ince bir film halinde soyuldu.",
        "Kumaş kaplamadan kalın bir katman halinde soyuldu.",
        "Şeffaf ve ince bir film olan kaplama, kumaşa sıkıca yapıştı ve hiç çıkmadı.",
        "Film kumaşı kapladı.",
        "Kaplama hiç soyulmadı.",
      ],
      "'The coating peeled away from the cloth' 'kaplama kumaştan soyuldu', 'as a clear, thin film' 'şeffaf, ince bir film halinde' karşılığıdır.",
    ],
    [
      "The head of the drop can withstand blows from a hammer.",
      [
        "Damlanın baş kısmı çekiç darbelerine dayanabilir.",
        "Damlanın kuyruğu çekiç darbelerine dayanabilir.",
        "Çekiç darbelerine dayanamayan damlanın baş kısmı, hafif bir dokunuşla toza dönüşür.",
        "Çekiç damlanın başını yaptı.",
        "Damla hiçbir darbeye dayanamaz.",
      ],
      "'The head of the drop' 'damlanın baş kısmı', 'can withstand blows from a hammer' 'çekiç darbelerine dayanabilir' karşılığıdır.",
    ],
    [
      "Without gutta-percha, the first undersea telegraph cables could not have been laid.",
      [
        "Gütaperka olmasaydı ilk denizaltı telgraf kabloları döşenemezdi.",
        "Gütaperka sayesinde ilk telgraf kabloları karada döşendi.",
        "İlk denizaltı telgraf kablolarının döşenmesi, gütaperkanın bulunmasını gereksiz kıldı.",
        "Telgraf kabloları gütaperkayı döşedi.",
        "Gütaperka hiçbir zaman kullanılmadı.",
      ],
      "'Without gutta-percha' 'gütaperka olmasaydı', 'the first undersea telegraph cables could not have been laid' 'ilk denizaltı telgraf kabloları döşenemezdi' karşılığıdır.",
    ],
    [
      "The material melted far more slowly than ordinary ice.",
      [
        "Malzeme sıradan buzdan çok daha yavaş eridi.",
        "Malzeme sıradan buzdan çok daha hızlı eridi.",
        "Sıradan buz kadar hızlı eriyen malzeme, gemi yapımında kullanılamayacak kadar zayıftı.",
        "Sıradan buz malzemeyi eritti.",
        "Malzeme hiç erimedi.",
      ],
      "'The material melted' 'malzeme eridi', 'far more slowly than ordinary ice' 'sıradan buzdan çok daha yavaş' karşılığıdır.",
    ],
    [
      "The name refers to the fortieth attempt to find the right formula.",
      [
        "Ad, doğru formülü bulmaya yönelik kırkıncı denemeye gönderme yapar.",
        "Ad, formülü bulan kırk kimyacıya gönderme yapar.",
        "Doğru formülü bulmak için yapılan kırk denemenin hepsi başarısızlıkla sonuçlandı.",
        "Formül adı kırk kez denedi.",
        "Adın hiçbir anlamı yoktur.",
      ],
      "'The name refers to' 'ad gönderme yapar', 'the fortieth attempt to find the right formula' 'doğru formülü bulmaya yönelik kırkıncı deneme' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Bir bilardo topu şirketi, fildişinin yerine geçecek bir malzeme bulana ödül teklif etti.",
      [
        "A maker of billiard balls promised a reward to whoever discovered a material to replace ivory.",
        "A billiard ball company offered ivory as a prize to the best player.",
        "A billiard ball company tried to find a substitute for ivory, but it refused to pay the prize.",
        "Ivory offered a prize to the company.",
        "The company made balls from wood.",
      ],
      "'Bir bilardo topu şirketi ödül teklif etti' 'a billiard ball company offered a prize', 'fildişinin yerine geçecek bir malzeme bulana' 'to anyone who could find a substitute for ivory' karşılığıdır.",
    ],
    [
      "Müşteriler ne satın aldıklarını görebilmekten hoşlanıyordu.",
      [
        "Customers liked being able to see what they were buying.",
        "Customers liked buying things they could not see.",
        "Customers wanted to see what they were buying, but shops refused to wrap goods in clear film.",
        "Shops liked seeing their customers.",
        "Customers never bought sweets.",
      ],
      "'Müşteriler hoşlanıyordu' 'customers liked', 'ne satın aldıklarını görebilmekten' 'being able to see what they were buying' karşılığıdır.",
    ],
    [
      "Damlalar, erimiş camın soğuk suya düşürülmesiyle oluşur.",
      [
        "The drops are formed when molten glass is dropped into cold water.",
        "Cold water is formed when glass drops melt.",
        "The drops are formed by heating glass, but they break as soon as they touch water.",
        "Water drops the glass into the fire.",
        "The drops are made of ice.",
      ],
      "'Damlalar oluşur' 'the drops are formed', 'erimiş camın soğuk suya düşürülmesiyle' 'when molten glass is dropped into cold water' karşılığıdır.",
    ],
    [
      "Gütaperka, Güneydoğu Asya'da yetişen ağaçların özsuyundan elde edilir.",
      [
        "Gutta-percha is obtained from the sap of trees that grow in South-East Asia.",
        "Trees in South-East Asia are grown from gutta-percha.",
        "Gutta-percha was once obtained from trees, but it is now produced only in laboratories in Europe.",
        "The sap obtains trees from Asia.",
        "Gutta-percha is a kind of metal.",
      ],
      "'Gütaperka elde edilir' 'gutta-percha is obtained', 'Güneydoğu Asya'da yetişen ağaçların özsuyundan' 'from the sap of trees that grow in South-East Asia' karşılığıdır.",
    ],
    [
      "Proje, savaşın gidişatı değiştiği için iptal edildi.",
      [
        "The project was cancelled because the course of the war had changed.",
        "The war was cancelled because the project had changed.",
        "The project was expected to change the course of the war, but it was completed too late.",
        "The course of the war cancelled the ship.",
        "The project was never started.",
      ],
      "'Proje iptal edildi' 'the project was cancelled', 'savaşın gidişatı değiştiği için' 'because the course of the war had changed' karşılığıdır.",
    ],
    [
      "Sprey, metal yüzeylerdeki nemi uzaklaştırarak paslanmayı önler.",
      [
        "The spray prevents rust by removing moisture from metal surfaces.",
        "The spray causes rust by adding moisture to metal surfaces.",
        "The spray removes rust from metal, although it cannot prevent moisture from forming again.",
        "Metal surfaces remove the spray.",
        "The spray is used only on wood.",
      ],
      "'Sprey paslanmayı önler' 'the spray prevents rust', 'metal yüzeylerdeki nemi uzaklaştırarak' 'by removing moisture from metal surfaces' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1640s, curious glass objects began to circulate among the courts of Europe. They were made by letting drops of molten glass fall into a bucket of cold water, where they cooled into the shape of a tadpole, with a rounded head and a long, thin tail. Their properties seemed almost magical. The head was so strong that it could be struck with a hammer without breaking, yet if the tip of the tail was snapped, the entire drop instantly exploded into fine powder. Prince Rupert of the Rhine brought some to England in 1660 and gave them to King Charles II, who passed them to the newly founded Royal Society for investigation, and they have been known as Prince Rupert's drops ever since. A full explanation, however, took more than three centuries. When the drop falls into the water, its outer surface cools and hardens almost immediately, while the inside is still molten. As the interior cools, it shrinks and pulls on the hard outer layer, leaving the surface under enormous compression and the core under tension. Because cracks cannot easily spread through glass that is being squeezed, the head is extremely strong. Breaking the tail, however, releases the tension inside, and a crack races through the drop at more than a kilometre per second. The same principle is used to make toughened glass for car windows and phone screens.",
      questions: [
        [
          "According to the passage, the drops were made by ----.",
          [
            "dropping molten glass into cold water",
            "blowing glass into moulds",
            "heating sand in a fire",
            "squeezing hot glass between two plates of metal until it became thin",
            "cutting glass with a hammer",
          ],
          "Metne göre erimiş camın soğuk suya damlatılmasıyla yapılırdı.",
        ],
        [
          "The head of the drop is very strong because ----.",
          [
            "its surface is under strong compression",
            "it is made of thicker glass",
            "it contains metal",
            "the tail absorbs the force of any blow that is aimed at the head",
            "it is cooled slowly",
          ],
          "Yüzey büyük bir sıkışma altında olduğundan çatlaklar kolayca yayılamaz.",
        ],
        [
          "It can be understood from the passage that toughened glass ----.",
          [
            "relies on a similar distribution of stresses",
            "was invented by Prince Rupert",
            "is made from powder",
            "explodes whenever its surface is struck by a hammer or any other hard object",
            "is weaker than ordinary glass",
          ],
          "Aynı ilke sertleştirilmiş cam yapımında kullanılır.",
        ],
      ],
    },
    {
      text:
        "In the 1840s, scientists in Britain became interested in gutta-percha, a hard, rubbery substance obtained from the sap of trees that grow in South-East Asia. Local people had long used it to make handles for knives and other tools. Unlike natural rubber, which becomes sticky in heat and brittle in cold, gutta-percha softens when placed in hot water, can be moulded into almost any shape, and becomes hard again when it cools. Crucially, it does not conduct electricity and is not damaged by salt water. These properties made it ideal for a new technology. The electric telegraph was spreading rapidly on land, but there was no way of carrying a signal across the sea, because water would cause the current to leak away. In 1850, a copper wire coated in gutta-percha was laid across the English Channel between England and France. It worked, but a fisherman is said to have caught it in his nets and cut off a piece, believing that it was a strange kind of seaweed with gold in its centre. A stronger, armoured cable was laid the following year, and within two decades, gutta-percha cables linked Europe with America, India and Australia. The demand was so great that huge numbers of trees were cut down, and by the end of the century the species was in danger. Gutta-percha was eventually replaced by plastics, though dentists still use it to fill the roots of teeth.",
      questions: [
        [
          "According to the passage, gutta-percha was ideal for undersea cables because ----.",
          [
            "it did not conduct electricity and resisted salt water",
            "it was very cheap",
            "it was a metal",
            "it became sticky in heat and could therefore be attached easily to the copper wire",
            "it was light",
          ],
          "Metne göre elektriği iletmiyor ve tuzlu suya dayanıklıydı.",
        ],
        [
          "The story of the fisherman suggests that ----.",
          [
            "the first cable was not well protected",
            "fishermen supported the telegraph",
            "the cable was made of gold",
            "seaweed in the English Channel was often confused with cables laid by engineers",
            "the cable was easy to repair",
          ],
          "Balıkçının kabloyu kesebilmesi ilk kablonun iyi korunmadığını düşündürür; bir yıl sonra zırhlı kablo döşenmiştir.",
        ],
        [
          "It can be understood from the passage that the success of undersea cables ----.",
          [
            "had serious effects on the trees that produced gutta-percha",
            "ended the use of plastics",
            "was limited to Europe",
            "led dentists to stop using gutta-percha in their treatment of teeth",
            "made rubber cheaper",
          ],
          "Talep çok büyük olduğundan pek çok ağaç kesildi ve tür tehlikeye girdi.",
        ],
      ],
    },
    {
      text:
        "During the Second World War, German submarines were sinking huge numbers of ships in the Atlantic Ocean, partly because there were areas in the middle of the ocean that aircraft based on land could not reach. A British inventor named Geoffrey Pyke came up with an extraordinary solution: an enormous floating airfield made of ice. Ordinary ice is brittle and melts relatively quickly, but scientists working with Pyke found that a frozen mixture of water and about fourteen per cent wood pulp was much stronger, broke far less easily and melted very slowly, because the wood fibres insulated it. The material was named 'pykrete'. According to a famous story, when the British military leader Lord Mountbatten demonstrated it to senior officers at a conference, he fired a pistol at a block of pykrete, and the bullet bounced off and narrowly missed someone. In 1943, a small prototype ship was built on a lake in Canada, and it survived through the summer. The full-sized design, however, would have been more than six hundred metres long and would have needed refrigeration equipment to keep it frozen. As the cost rose, and as long-range aircraft and bases in the Azores made the floating airfield unnecessary, the project, known as Habakkuk, was abandoned. Pykrete is still occasionally studied as a building material for cold regions.",
      questions: [
        [
          "According to the passage, the floating airfield was proposed in order to ----.",
          [
            "allow aircraft to protect ships in the middle of the ocean",
            "transport ice to Britain",
            "attack Canada",
            "test the strength of wood pulp mixed with water in the middle of summer",
            "store food",
          ],
          "Metne göre karadan kalkan uçakların erişemediği okyanus ortasında gemileri korumak için önerildi.",
        ],
        [
          "Adding wood pulp to the ice ----.",
          [
            "made it stronger and slowed its melting",
            "made it lighter",
            "made it melt faster",
            "made it impossible to keep the material frozen without refrigeration equipment",
            "made it softer",
          ],
          "Odun lifleri yalıtım sağladığından buz daha güçlü oldu ve daha yavaş eridi.",
        ],
        [
          "It can be understood from the passage that the project was abandoned because ----.",
          [
            "it became too expensive and no longer necessary",
            "the prototype sank",
            "pykrete was too weak",
            "Lord Mountbatten was injured during the demonstration that was given at a conference",
            "the war ended",
          ],
          "Maliyet arttı ve uzun menzilli uçaklarla Azor üsleri projeyi gereksiz kıldı.",
        ],
      ],
    },
    {
      text:
        "In 1953, a small company in San Diego called the Rocket Chemical Company set out to develop a substance that would protect the outer skin of missiles from rust and corrosion. Rust forms when water reacts with iron, so the three chemists working on the project aimed to create a liquid that would displace water from the surface of the metal. According to the company's own account, they succeeded on their fortieth attempt, and the product was therefore named WD-40, standing for 'Water Displacement, 40th formula'. The formula was never patented, because a patent would have required it to be made public; instead, it has been kept as a trade secret, and it is said that only a few people in the company know it. Workers at the aerospace firm that used it soon began taking cans home for their own use, which suggested that it might have a wider market. In 1958, it was sold to the public for the first time in aerosol cans. Since then, it has been used for countless purposes, from loosening rusty bolts and silencing squeaky doors to removing chewing gum. Despite its popularity, experts point out that it is not really a long-lasting lubricant, and that for some tasks, such as oiling bicycle chains, other products work better.",
      questions: [
        [
          "The passage states that the chemists first created the product to ----.",
          [
            "protect missiles from corrosion",
            "clean houses",
            "repair bicycles",
            "remove chewing gum from the clothes of people who worked in the factory",
            "make aerosol cans",
          ],
          "Metne göre füzelerin dış yüzeyini pas ve korozyondan korumak için geliştirildi.",
        ],
        [
          "The formula was not patented because ----.",
          [
            "the company wanted to keep it secret",
            "it did not work",
            "patents were too expensive",
            "the chemists who developed it had already left the company by the time it was sold",
            "the government refused",
          ],
          "Patent formülün kamuya açıklanmasını gerektireceğinden ticari sır olarak tutuldu.",
        ],
        [
          "It can be understood from the passage that the product's potential for ordinary consumers ----.",
          [
            "became clear when workers took it home",
            "was planned from the start",
            "was never realised",
            "was first recognised by experts in the repair of bicycle chains and other machines",
            "was limited to San Diego",
          ],
          "İşçilerin kutuları evlerine götürmesi daha geniş bir pazar olabileceğini düşündürdü.",
        ],
      ],
    },
    {
      text:
        "Natural rubber comes from the sap of a tree that is native to South America, but by the early twentieth century, the bulk of it was grown on plantations in South-East Asia. Industrial countries depended heavily on it for tyres, hoses and many other products, and its price could rise sharply. Chemists therefore tried to create a synthetic substitute. In 1930, a chemist at the American company DuPont, working with a compound developed by a university priest who had studied the chemistry of acetylene, noticed that one of his samples had solidified into a material that bounced like rubber. It was the first commercially successful synthetic rubber, and it was eventually given the name neoprene. Neoprene had important advantages over the natural material: it was more resistant to oil, heat, sunlight and chemicals, and it remained flexible over a wide range of temperatures. During the Second World War, when Japan occupied the plantations of South-East Asia and cut off supplies to the Allies, synthetic rubbers became essential. Neoprene was later found to be ideal for wetsuits, because it can be made with tiny bubbles of gas trapped inside, which insulate the body against cold water. It is also used in laptop cases, gaskets and orthopaedic braces.",
      questions: [
        [
          "According to the passage, chemists tried to make synthetic rubber because ----.",
          [
            "natural rubber came from distant places and its price was unstable",
            "rubber trees had died out",
            "natural rubber was too strong",
            "the priest who studied acetylene asked them to find a substitute for natural rubber",
            "tyres were no longer needed",
          ],
          "Metne göre doğal kauçuk uzak plantasyonlardan geliyor ve fiyatı keskin biçimde artabiliyordu.",
        ],
        [
          "Neoprene was better than natural rubber in that ----.",
          [
            "it resisted oil, heat and chemicals more effectively",
            "it was cheaper to grow",
            "it came from trees",
            "it could be produced only in South-East Asia, close to the plantations",
            "it was harder",
          ],
          "Yağa, ısıya, güneş ışığına ve kimyasallara daha dayanıklıydı.",
        ],
        [
          "It can be understood from the passage that neoprene is useful for wetsuits because ----.",
          [
            "gas bubbles inside it reduce the loss of body heat",
            "it absorbs water",
            "it is very heavy",
            "it was first developed for the navy during the Second World War",
            "it is transparent",
          ],
          "İçinde hapsolan küçük gaz kabarcıkları vücudu soğuk suya karşı yalıtır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1941, a researcher at an American chemical company accidentally found a way to make polystyrene into a light foam filled with tiny bubbles. ---- At first, it was used to make life rafts and to insulate buildings, and only later for cups and packaging.",
      [
        "The material, later sold under the name Styrofoam, was about thirty times lighter than solid plastic and an excellent insulator.",
        "Chemists work in laboratories.",
        "Plastic is made from oil.",
        "Environmental groups have criticised the material because it takes hundreds of years to break down.",
        "Cups hold drinks.",
      ],
      "Boşluk malzemenin özelliklerini anlatan bir cümle gerektirir; boşluğa malzemenin katı plastikten yaklaşık otuz kat hafif ve mükemmel bir yalıtkan olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1860s, an English inventor noticed that a skin formed on the surface of a can of oil paint. ---- His product, called linoleum, became one of the most popular floor coverings in the world.",
      [
        "He experimented with the oxidised linseed oil and eventually spread it with cork dust over a backing of cloth.",
        "Paint is used on walls.",
        "England is a rainy country.",
        "Many people later preferred floors made of vinyl because they were cheaper to produce.",
        "Floors are flat.",
      ],
      "Boşluk gözlemden ürüne geçişi anlatan bir cümle gerektirir; boşluğa mucidin oksitlenmiş keten tohumu yağıyla deneyler yapıp onu mantar tozuyla bir kumaş tabana yaydığını söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1960s, an engineer working on a project for NASA developed a foam that slowly returned to its original shape after being pressed. ---- Since then, it has been used in mattresses, pillows and the seats of cars.",
      [
        "It was intended to improve the cushioning of aircraft seats and to protect passengers in a crash.",
        "Engineers solve problems.",
        "NASA is based in the United States.",
        "Some people find the material too warm to sleep on comfortably during the summer.",
        "Seats are made of many materials.",
      ],
      "Boşluk köpüğün amacını anlatan bir cümle gerektirir; boşluğa uçak koltuklarının yastıklamasını iyileştirmek ve bir kazada yolcuları korumak için tasarlandığını söyleyen cümle gelmelidir.",
    ],
    [
      "During the Second World War, soldiers needed a strong, waterproof tape to seal boxes of ammunition. ---- After the war, it became popular for repairing almost anything, from pipes to car parts.",
      [
        "The tape that was developed had a cloth backing coated with rubber adhesive and could be torn by hand.",
        "Soldiers carry weapons.",
        "Boxes are made of cardboard.",
        "Engineers have shown that it is not actually a good material for sealing the ducts of heating systems.",
        "Wars are long.",
      ],
      "Boşluk bantın nasıl geliştirildiğini anlatan bir cümle gerektirir; boşluğa kauçuk yapıştırıcıyla kaplı kumaş tabanlı ve elle yırtılabilen bir bant geliştirildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the late nineteenth century, chemists tried to produce an artificial version of silk, which was very expensive. ---- The fabric, later called rayon, became widely used for clothing in the 1920s.",
      [
        "They succeeded by dissolving cellulose from wood pulp and forcing it through tiny holes to form threads.",
        "Silk comes from China.",
        "Clothes keep people warm.",
        "Early versions of the fabric were highly flammable and were nicknamed 'mother-in-law silk'.",
        "Fashion changes quickly.",
      ],
      "Boşluk yapay ipeğin nasıl üretildiğini anlatan bir cümle gerektirir; boşluğa odun hamurundaki selülozun çözülüp küçük deliklerden geçirilerek iplik oluşturulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1888, an Austrian botanist studying a substance from carrots noticed that it appeared to have two different melting points. ---- Almost a century later, such 'liquid crystals' became the basis of the screens used in watches, calculators and televisions.",
      [
        "At one temperature it melted into a cloudy liquid, and at a higher temperature the liquid suddenly became clear.",
        "Carrots are orange.",
        "Austria is in Europe.",
        "He sent samples to a German physicist, who studied them with a special microscope.",
        "Botanists study plants.",
      ],
      "Boşluk iki erime noktasını açıklayan bir cümle gerektirir; boşluğa maddenin bir sıcaklıkta bulanık sıvıya dönüştüğünü, daha yüksek sıcaklıkta ise aniden berraklaştığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1958, a chemist at DuPont invented an elastic fibre called spandex.",
        "It can stretch to several times its length and return to its original shape.",
        "It was quickly adopted for sportswear, swimsuits and underwear.",
        "Many athletes train for years before the Olympic Games.",
        "Today it is found in a large proportion of clothing.",
      ],
      odd: 3,
      why: "Parça esnek lif spandeksi anlatır. Pek çok sporcunun Olimpiyatlardan önce yıllarca antrenman yaptığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some eyeglass lenses darken automatically in bright sunlight.",
        "They contain molecules that change shape when exposed to ultraviolet light.",
        "Spectacles have a history going back about seven hundred years.",
        "When the light fades, the molecules return to their original form and the lenses become clear.",
        "They often work less well inside cars, because windscreens block ultraviolet light.",
      ],
      odd: 2,
      why: "Parça ışıkta kararan gözlük camlarını anlatır. Gözlüğün on üçüncü yüzyılda İtalya'da icat edildiğini söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Smart glass can change from clear to opaque at the flick of a switch.",
        "In one type, tiny particles align when an electric current is applied, letting light through.",
        "Windows let fresh air into buildings.",
        "The glass is used in offices, hospitals and the windows of some aircraft.",
        "Buildings that use it may need less cooling in hot weather.",
      ],
      odd: 2,
      why: "Parça akıllı camı anlatır. Pencerelerin binalara temiz hava aldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some spacecraft are wrapped in a thin, golden-coloured plastic film.",
        "The film can withstand extremely high and low temperatures.",
        "It protects instruments from the harsh conditions of space.",
        "It is also used in flexible electronic circuits on Earth.",
        "Gold jewellery is popular in many cultures.",
      ],
      odd: 4,
      why: "Parça uzay araçlarını saran ince plastik filmi anlatır. Altının binlerce yıldır değer gördüğünü söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The space shuttle was protected from the heat of re-entry by thousands of special tiles.",
        "The tiles were made mostly of very pure silica fibres.",
        "Astronauts train for many years.",
        "They lost heat so quickly that they could be held by the edges seconds after coming out of a furnace.",
        "Each tile had a unique shape and position on the shuttle.",
      ],
      odd: 2,
      why: "Parça uzay mekiğini ısıdan koruyan karoları anlatır. Astronotların yıllarca eğitim aldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Corrugated cardboard was first patented in England in the 1850s.",
        "It was used at first to line the inside of tall hats.",
        "Later, it was found to make strong and light boxes for shipping.",
        "Its wavy inner layer gives it great strength for its weight.",
        "Many people collect old hats.",
      ],
      odd: 4,
      why: "Parça oluklu kartonun tarihini anlatır. Pek çok kişinin eski şapka biriktirdiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
