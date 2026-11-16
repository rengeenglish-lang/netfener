import type { YokdilDeneme } from "./types";

export const FEN_56: YokdilDeneme = {
  no: 56,
  field: "fen",
  vocab: [
    [
      "The loom could weave extremely ---- patterns automatically, following instructions punched into cards.",
      ["intricate", "silent", "hungry", "ancient", "honest"],
      "Dokuma tezgâhının kartlara delinmiş talimatları izleyerek son derece 'karmaşık/ince işlenmiş' (intricate) desenleri otomatik dokuyabildiği anlatılır.",
    ],
    [
      "The tea company wanted a computer to ---- its accounts and the orders from its shops.",
      ["handle", "paint", "forget", "plant", "cook"],
      "Çay şirketinin hesaplarını ve dükkânlarından gelen siparişleri 'yürütecek' (handle) bir bilgisayar istediği anlatılır.",
    ],
    [
      "Less than forty seconds after launch, the rocket veered off course and ----.",
      ["self-destructed", "landed", "rested", "slept", "improved"],
      "Fırlatıldıktan kırk saniye sonra roketin rotasından sapıp 'kendini imha ettiği' (self-destructed) anlatılır.",
    ],
    [
      "The machine gave several patients ---- doses of radiation that were many times too high.",
      ["massive", "tiny", "pleasant", "careful", "brief"],
      "Makinenin bazı hastalara olması gerekenden kat kat yüksek 'muazzam' (massive) radyasyon dozları verdiği anlatılır.",
    ],
    [
      "Over time, a tiny error in the system's clock ---- until it was large enough to cause a failure.",
      ["accumulated", "vanished", "argued", "travelled", "celebrated"],
      "Zamanla sistem saatindeki küçük bir hatanın arıza çıkaracak kadar büyüyene dek 'biriktiği' (accumulated) anlatılır.",
    ],
    [
      "The code was designed so that it could still be read even if part of it was ---- or damaged.",
      ["torn off", "looked after", "put up", "taken over", "brought up"],
      "Kodun bir kısmı 'koparılsa' (torn off) ya da hasar görse bile okunabilecek biçimde tasarlandığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time computers were invented, punched cards ---- to control looms for more than a century.",
      ["had been used", "are used", "have been used", "will be used", "use"],
      "Geçmişteki bir andan önce süregelmiş edilgen eylem: 'had been used'.",
    ],
    [
      "If the software had been tested with the new rocket's data, the error ---- found.",
      ["might have been", "will be", "is", "had been", "would be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might have been'.",
    ],
    [
      "The first program on the tea company's computer ---- in November 1951.",
      ["was run", "ran out", "has run", "runs", "is running"],
      "Program çalıştırılmıştır; edilgen geçmiş zaman: 'was run'.",
    ],
    [
      "---- the machine displayed an error message, the operators did not realise that patients were in danger.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Hata mesajı görüntülenmesi ile operatörlerin tehlikeyi fark etmemesi zıttır: 'Although'.",
    ],
    [
      "The engineer, ---- team built the code-breaking machine, used his own money to buy parts.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin ekibi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the war had ended ---- the existence of the machines revealed.",
      ["was", "did", "had", "has", "were not"],
      "'Only after' ile devrik yapı; edilgen 'was revealed': 'was'.",
    ],
    [
      "The rocket was destroyed with its cargo of satellites, ---- had taken years to build.",
      ["which", "what", "who", "whose", "where"],
      "Virgülden sonra 'uydular'ı niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
    ],
    [
      "The longer the system ran without being restarted, ---- the error became.",
      ["the larger", "the largest", "larger", "largest", "so large"],
      "'The longer ..., the larger ...' paralel yapısı: 'the larger'.",
    ],
    [
      "The investigators recommended that the software ---- by independent experts.",
      ["be reviewed", "is reviewed", "was reviewing", "to be reviewed", "being reviewed"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be reviewed'.",
    ],
    [
      "The code is said ---- inspired by the board game Go.",
      ["to have been", "being", "to be being", "been", "having"],
      "Geçmişe ait edilgen durum için mastarın geçmiş biçimi: 'to have been'.",
    ],
    [
      "The weaver could change the pattern simply ---- replacing the cards.",
      ["by", "with", "for", "on", "at"],
      "'by doing' yöntem bildirir: 'by'.",
    ],
    [
      "The software failure made the rocket ---- off course.",
      ["turn", "turning", "to turn", "turned", "be turned"],
      "'make sth do sth' kalıbında yalın fiil: 'turn'.",
    ],
    [
      "Had the operators understood the error message, they ---- the treatment.",
      ["might have stopped", "stop", "will stop", "had stopped", "are stopping"],
      "Devrik üçüncü tip koşul cümlesi: 'might have stopped'.",
    ],
    [
      "Neither the rocket nor its satellites ---- recovered after the explosion.",
      ["were", "was being", "be", "to be", "has"],
      "'Neither ... nor' yapısında fiil yakın özneye göre çekimlenir; çoğul özne: 'were'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early nineteenth century, weaving silk with complex patterns was slow and expensive work. A weaver needed an assistant, often a child, who sat on top of the loom {1} lifted particular threads by hand according to the design. In 1804, a weaver from Lyon called Joseph-Marie Jacquard showed a loom that did this automatically. The pattern was recorded as a series of holes punched in a chain of stiff cards. As each card passed through the machine, rods could pass through the holes {2} would be blocked where there was no hole, so that only certain threads were lifted. To change the pattern, the weaver simply changed the cards. The invention greatly increased the speed of production, {3} it was not welcomed by everyone. Some local weavers, worried that they would be put out of work, are said to have attacked the machines {4} even threatened Jacquard himself. Nevertheless, by the 1830s there were thousands of Jacquard looms in France. Recording a sequence of operations as holes in card later appealed to Charles Babbage, who planned to use them in his mechanical computer, {5} until the 1970s programmers still commonly fed data to electronic computers on cards.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Yardımcının tezgâhın üstünde oturması ve iplikleri elle kaldırması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["or", "and", "but", "so", "unless"],
          "Çubukların deliklerden geçmesi ya da engellenmesi iki seçenektir: 'or'.",
        ],
        [
          "(23) ----",
          ["but", "and", "so", "or", "for"],
          "Üretimin hızlanması ile buluşun herkesçe hoş karşılanmaması zıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Makinelere saldırmaları ve Jacquard'ı tehdit etmeleri birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Babbage'ı etkilemesi ve delikli kartların 1970'lere dek kullanılması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "One of the first businesses in the world to use a computer for its everyday work was not a bank or a government department but a British company famous for its tea shops. In the late 1940s, J. Lyons and Company ran hundreds of cafés and needed to process enormous numbers of orders, invoices and payments every day. Its managers visited the United States to learn about new electronic machines, {1} on their return they decided to build their own computer, working with engineers at the University of Cambridge. The machine, called LEO, for Lyons Electronic Office, ran its first business program in 1951. It filled a large room, {2} it used thousands of valves that frequently had to be replaced. Nevertheless, it calculated the weekly costs of bread, cakes and pies from the company's bakeries, {3} it later produced the payroll for its employees, a job that had previously taken clerks many hours. Other organisations soon asked Lyons to do calculations for them, {4} the company set up a separate business to build and sell computers. LEO computers were eventually overtaken by American competitors, {5} the project is now remembered as a pioneering example of the use of computers in business.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Yöneticilerin ABD'yi ziyaret etmesi ve dönüşte kendi bilgisayarlarını yapmaya karar vermesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Büyük bir odayı doldurması ve binlerce lamba kullanması birbirine eklenen iki özelliktir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "so that"],
          "Maliyetleri hesaplaması ve sonra maaş bordrosunu hazırlaması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["so", "but", "or", "unless", "although"],
          "Başka kuruluşların hesap istemesinin sonucu ayrı bir şirket kurulmasıdır: 'so'.",
        ],
        [
          "(30) ----",
          ["but", "and", "so", "or", "for"],
          "LEO'nun Amerikalı rakiplerin gerisinde kalması ile projenin öncü bir örnek olarak anılması zıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the Jacquard loom increased production greatly, ----.",
      [
        "some weavers saw it as a threat to their jobs",
        "silk is soft",
        "Lyon is in France",
        "cards are made of paper",
        "Babbage later planned to use similar cards to give instructions to his calculating engine",
      ],
      "'Although' zıtlık ister: Jacquard tezgâhı üretimi çok artırsa da bazı dokumacılar onu işleri için tehdit olarak gördü.",
    ],
    [
      "If the tea company had bought an American computer, ----.",
      [
        "it might not have built its own machine",
        "cafés serve tea",
        "cakes are sweet",
        "Cambridge has a university",
        "the clerks would have spent many hours calculating the payroll for the employees every week",
      ],
      "Üçüncü tip koşul: çay şirketi Amerikan bilgisayarı satın alsaydı kendi makinesini yapmayabilirdi.",
    ],
    [
      "----, the software tried to convert a very large number into a format that was too small for it.",
      [
        "Shortly after the rocket was launched",
        "Although rockets are tall",
        "Unless satellites are expensive",
        "Since Europe is large",
        "While the engineers were celebrating the successful flights of the earlier versions of the rocket",
      ],
      "Roket fırlatıldıktan kısa süre sonra yazılım çok büyük bir sayıyı onun için fazla küçük bir biçime dönüştürmeye çalıştı.",
    ],
    [
      "The radiation machine was dangerous ----.",
      [
        "because its software could fail without anyone noticing",
        "although hospitals are clean",
        "unless doctors were careful",
        "so that patients could be treated",
        "while the company that made it was building other machines that had hardware safety locks",
      ],
      "Radyasyon makinesi, yazılımı kimse fark etmeden arızalanabildiği için tehlikeliydi.",
    ],
    [
      "Since the missile system had not been restarted for about a hundred hours, ----.",
      [
        "a small error in its clock had become large enough to matter",
        "deserts are hot",
        "missiles are fast",
        "soldiers sleep in barracks",
        "the engineers had already sent a corrected version of the software that arrived the following day",
      ],
      "'Since' neden bildirir: füze sistemi yaklaşık yüz saattir yeniden başlatılmadığından saatindeki küçük bir hata önemli hale gelecek kadar büyümüştü.",
    ],
    [
      "Not only did the code-breaking machine help the Allies during the war, ----.",
      [
        "but it is also regarded as one of the first electronic computers",
        "and wars are long",
        "since codes are secret",
        "so engineers use valves",
        "unless the engineer had used his own money to pay for some of the parts that were needed",
      ],
      "'Not only ... but also' yapısı tamamlanır: şifre kırma makinesi savaşta Müttefiklere yardım etmekle kalmadı, ilk elektronik bilgisayarlardan biri olarak da kabul edilir.",
    ],
    [
      "Once the code could be scanned by smartphones, ----.",
      [
        "it spread far beyond its original use in factories",
        "phones have cameras",
        "factories are large",
        "cars have wheels",
        "the engineer who designed it had been inspired by the black and white stones of a board game",
      ],
      "Kod akıllı telefonlarla taranabilir hale gelince fabrikalardaki ilk kullanımının çok ötesine yayıldı.",
    ],
    [
      "Unless software is tested under realistic conditions, ----.",
      [
        "serious errors may remain hidden",
        "computers are fast",
        "programmers work hard",
        "tests are expensive",
        "the investigators would have found that the rocket's software had been copied from an earlier model",
      ],
      "'Unless' olumsuz koşul: yazılım gerçekçi koşullarda sınanmazsa ciddi hatalar gizli kalabilir.",
    ],
    [
      "The code-breaking machines were kept so secret ----.",
      [
        "that their builders could not tell anyone about their work for decades",
        "although valves are fragile",
        "because the war was long",
        "unless the engineers were famous",
        "while the government was building new computers for its scientists in the years after the war",
      ],
      "Şifre kırma makineleri o kadar gizli tutuldu ki yapımcıları onlarca yıl kimseye çalışmalarını anlatamadı.",
    ],
    [
      "Even though the rocket's software had worked well on earlier rockets, ----.",
      [
        "it failed because the new rocket flew differently",
        "rockets are expensive",
        "software is invisible",
        "satellites orbit the Earth",
        "the engineers had decided to reuse it in order to save money and time during development",
      ],
      "'Even though' zıtlık ister: roketin yazılımı önceki roketlerde iyi çalışmış olsa da yeni roket farklı uçtuğu için başarısız oldu.",
    ],
    [
      "As the code can store much more information than a barcode, ----.",
      [
        "it can hold a complete web address",
        "shops sell goods",
        "lines are black",
        "Japan is an island nation",
        "the company that invented it decided not to charge anyone for using the design",
      ],
      "Kod bir barkoddan çok daha fazla bilgi saklayabildiği için tam bir web adresini tutabilir.",
    ],
  ],
  enTr: [
    [
      "The pattern was recorded as a series of holes punched in cards.",
      [
        "Desen, kartlara delinmiş bir dizi delik olarak kaydedildi.",
        "Kartlar, desene delinmiş bir dizi delik olarak kaydedildi.",
        "Kartlara delinmiş delikler, desenin kaydedilmesini imkânsız kıldı.",
        "Delikler deseni kartlara çizdi.",
        "Desen hiç kaydedilmedi.",
      ],
      "'The pattern was recorded' 'desen kaydedildi', 'as a series of holes punched in cards' 'kartlara delinmiş bir dizi delik olarak' karşılığıdır.",
    ],
    [
      "The computer filled a large room and used thousands of valves.",
      [
        "Bilgisayar büyük bir odayı dolduruyor ve binlerce lamba kullanıyordu.",
        "Bilgisayar küçük bir masaya sığıyor ve hiç lamba kullanmıyordu.",
        "Binlerce lamba kullanan bilgisayar, büyük bir odaya sığmadığı için iki binaya bölündü.",
        "Lambalar odayı bilgisayarla doldurdu.",
        "Bilgisayar hiç yer kaplamıyordu.",
      ],
      "'The computer filled a large room' 'bilgisayar büyük bir odayı dolduruyordu', 'and used thousands of valves' 've binlerce lamba kullanıyordu' karşılığıdır.",
    ],
    [
      "The software had been reused from an earlier rocket without being tested properly.",
      [
        "Yazılım, düzgün biçimde sınanmadan daha önceki bir roketten yeniden kullanılmıştı.",
        "Yazılım, daha önceki bir rokette düzgün biçimde sınanarak geliştirilmişti.",
        "Düzgün biçimde sınanan yazılım, daha önceki roketlerde hiç kullanılmamıştı.",
        "Roket yazılımı sınadı.",
        "Yazılım hiç kullanılmadı.",
      ],
      "'The software had been reused from an earlier rocket' 'yazılım daha önceki bir roketten yeniden kullanılmıştı', 'without being tested properly' 'düzgün biçimde sınanmadan' karşılığıdır.",
    ],
    [
      "Earlier models of the machine had mechanical safety locks.",
      [
        "Makinenin önceki modellerinde mekanik güvenlik kilitleri vardı.",
        "Makinenin sonraki modellerinde mekanik güvenlik kilitleri vardı.",
        "Mekanik güvenlik kilitleri olmayan önceki modeller, hastalara hiç zarar vermedi.",
        "Güvenlik kilitleri makineyi modelledi.",
        "Makinenin hiçbir modeli yoktu.",
      ],
      "'Earlier models of the machine' 'makinenin önceki modelleri', 'had mechanical safety locks' 'mekanik güvenlik kilitleri vardı' karşılığıdır.",
    ],
    [
      "The error in the clock grew larger the longer the system ran.",
      [
        "Sistem ne kadar uzun çalışırsa saatteki hata o kadar büyüdü.",
        "Sistem ne kadar uzun çalışırsa saatteki hata o kadar küçüldü.",
        "Saatteki hata büyüdükçe sistem daha uzun süre çalışabildi.",
        "Saat sistemi büyüttü.",
        "Saatte hiç hata yoktu.",
      ],
      "'The error in the clock grew larger' 'saatteki hata büyüdü', 'the longer the system ran' 'sistem ne kadar uzun çalışırsa' karşılığıdır.",
    ],
    [
      "The code can be read even if part of it is damaged.",
      [
        "Kod, bir kısmı hasar görse bile okunabilir.",
        "Kod, bir kısmı hasar görürse asla okunamaz.",
        "Hasar gören kodlar, okunabilmek için yeniden basılmalıdır.",
        "Hasar kodu okur.",
        "Kod hiç okunamaz.",
      ],
      "'The code can be read' 'kod okunabilir', 'even if part of it is damaged' 'bir kısmı hasar görse bile' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Desen, yalnızca kartlar değiştirilerek değiştirilebiliyordu.",
      [
        "The pattern could be changed simply by changing the cards.",
        "The cards could be changed simply by changing the pattern.",
        "The pattern could not be changed, although the cards were replaced every day.",
        "The cards changed the weaver.",
        "The pattern never changed.",
      ],
      "'Desen değiştirilebiliyordu' 'the pattern could be changed', 'yalnızca kartlar değiştirilerek' 'simply by changing the cards' karşılığıdır.",
    ],
    [
      "Şirket, bilgisayar üretip satmak için ayrı bir işletme kurdu.",
      [
        "The company set up a separate business to build and sell computers.",
        "The company sold its separate business in order to buy computers.",
        "The company planned to build computers, but it never sold any of them to other firms.",
        "Computers set up the company.",
        "The company never built a computer.",
      ],
      "'Şirket ayrı bir işletme kurdu' 'the company set up a separate business', 'bilgisayar üretip satmak için' 'to build and sell computers' karşılığıdır.",
    ],
    [
      "Roket, fırlatıldıktan kırk saniye sonra patladı.",
      [
        "The rocket exploded forty seconds after it was launched.",
        "The rocket was launched forty seconds after it exploded.",
        "The rocket was expected to explode, but it flew safely for forty minutes.",
        "Forty seconds launched the rocket.",
        "The rocket never left the ground.",
      ],
      "'Roket patladı' 'the rocket exploded', 'fırlatıldıktan kırk saniye sonra' 'forty seconds after it was launched' karşılığıdır.",
    ],
    [
      "Operatörler hata mesajının ne anlama geldiğini bilmiyordu.",
      [
        "The operators did not know what the error message meant.",
        "The error message did not know who the operators were.",
        "The operators knew what the message meant, but they chose to ignore it.",
        "The message operated the machine.",
        "There was no error message.",
      ],
      "'Operatörler bilmiyordu' 'the operators did not know', 'hata mesajının ne anlama geldiğini' 'what the error message meant' karşılığıdır.",
    ],
    [
      "Makinelerin varlığı onlarca yıl boyunca gizli tutuldu.",
      [
        "The existence of the machines was kept secret for decades.",
        "The machines kept the secret of their builders for decades.",
        "The existence of the machines was revealed immediately after they had been built.",
        "Decades kept the machines.",
        "The machines never existed.",
      ],
      "'Makinelerin varlığı gizli tutuldu' 'the existence of the machines was kept secret', 'onlarca yıl boyunca' 'for decades' karşılığıdır.",
    ],
    [
      "Kod ilk olarak fabrikalarda araç parçalarını izlemek için kullanıldı.",
      [
        "The code was first used to track car parts in factories.",
        "Car parts were first used to make codes in factories.",
        "The code was designed for factories, but it was never used to track any parts.",
        "Factories tracked the code.",
        "The code was used only in shops.",
      ],
      "'Kod ilk olarak kullanıldı' 'the code was first used', 'fabrikalarda araç parçalarını izlemek için' 'to track car parts in factories' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "On 4 June 1996, the European Space Agency launched the first of a new, more powerful generation of its Ariane rocket from French Guiana, carrying four scientific satellites. About thirty-seven seconds after lift-off, the rocket suddenly turned sideways, began to break apart under the enormous aerodynamic forces, and was destroyed by its automatic self-destruct system. No one was hurt, but the satellites, which had taken a decade to develop, were lost. An inquiry quickly found the cause. Part of the software that guided the rocket had been reused from the earlier, smaller rocket, where it had worked perfectly. The new rocket, however, accelerated much faster, and one of the values measuring its horizontal speed became larger than the program had been designed to handle. When the software tried to store this value in a space in the computer's memory that was too small for it, an error occurred, and the guidance computer shut down. A backup computer, running the same software, had already failed in exactly the same way a fraction of a second earlier. The main computer then interpreted diagnostic data as flight information and steered the rocket violently off course. Ironically, the part of the program that failed served no purpose after lift-off; it had been kept running only because of a decision made for the earlier rocket.",
      questions: [
        [
          "According to the passage, the error occurred because ----.",
          [
            "a value became too large for the space allocated to it",
            "the satellites were too heavy",
            "the weather was bad",
            "the backup computer was running a different program from that of the main computer",
            "an engineer pressed the wrong button",
          ],
          "Metne göre bir değer, onun için ayrılan bellek alanına sığmayacak kadar büyüdü.",
        ],
        [
          "The backup computer did not save the rocket because ----.",
          [
            "it failed in the same way, as it ran the same software",
            "it had been switched off",
            "it was too slow",
            "it interpreted diagnostic data as flight information and steered the rocket",
            "it was not connected",
          ],
          "Aynı yazılımı çalıştırdığı için aynı biçimde arızalanmıştı.",
        ],
        [
          "The writer describes the situation as ironic because ----.",
          [
            "the failed software was not needed during the flight",
            "the rocket was very cheap",
            "no satellites were on board",
            "the earlier rocket had also been destroyed only thirty-seven seconds after its lift-off",
            "the inquiry took many years",
          ],
          "Arızalanan program parçası kalkıştan sonra hiçbir işe yaramıyordu.",
        ],
      ],
    },
    {
      text:
        "Between 1985 and 1987, a radiation therapy machine used to treat cancer gave massive overdoses of radiation to at least six patients in the United States and Canada, several of whom died. The machine could operate in two modes: one used a low-power beam of electrons directed at the patient, while the other used a very high-power beam that was converted into X-rays by a metal plate placed in its path. Earlier models of the machine had mechanical safety locks that made it physically impossible to fire the high-power beam without the plate in place. In the new model, the manufacturer removed these locks and relied entirely on software to ensure safety. Investigators later discovered that if an experienced operator typed instructions very quickly, the software could set the machine to the high-power beam without moving the plate. When this happened, the machine displayed a brief, unexplained error message, which operators had learned to ignore because the machine often produced such messages. Patients reported feeling a burning sensation or an electric shock, but at first the manufacturer insisted that the machine could not have caused their injuries. The case is now studied by engineers around the world as a warning about the dangers of relying on software alone in systems where errors can be fatal.",
      questions: [
        [
          "According to the passage, the new model was more dangerous than earlier ones because ----.",
          [
            "its mechanical safety locks had been removed",
            "it used more powerful X-rays",
            "it had no software",
            "the operators had been trained to type their instructions into the machine more slowly",
            "it was used only in Canada",
          ],
          "Metne göre mekanik güvenlik kilitleri kaldırılmış ve güvenlik tamamen yazılıma bırakılmıştı.",
        ],
        [
          "The operators ignored the error message because ----.",
          [
            "such messages appeared frequently",
            "they could not read it",
            "the manufacturer told them to",
            "patients told them that they had not felt anything unusual during the treatment",
            "it appeared after the treatment",
          ],
          "Makine sık sık bu tür mesajlar verdiğinden görmezden gelmeyi öğrenmişlerdi.",
        ],
        [
          "It can be understood from the passage that the case is used in engineering education to ----.",
          [
            "show the risks of depending only on software for safety",
            "teach people how to treat cancer",
            "demonstrate how X-rays work",
            "explain why operators should type their instructions as quickly as they possibly can",
            "promote the manufacturer",
          ],
          "Hataların ölümcül olabileceği sistemlerde yalnızca yazılıma güvenmenin tehlikesine karşı uyarıdır.",
        ],
      ],
    },
    {
      text:
        "On 25 February 1991, during the Gulf War, a missile fired from Iraq struck an American army barracks in Dhahran, Saudi Arabia, killing twenty-eight soldiers. A Patriot missile defence system nearby had detected the incoming missile but failed to track and intercept it. An investigation found that the cause was a tiny error in the way the system's computer kept time. The computer counted time in tenths of a second, but the number one-tenth cannot be represented exactly in the binary system used by computers, just as one-third cannot be written exactly as a decimal. The small difference was multiplied every tenth of a second. After the system had been running continuously for about a hundred hours, the error in its clock had grown to about a third of a second. Because the incoming missile was travelling at more than 1,600 metres per second, this was enough for the system to look for it in the wrong part of the sky, and it concluded that there was no target. Engineers had in fact already noticed that the system became inaccurate after long periods of operation, and soldiers had been advised that it should be restarted regularly, although they were not told how often. A corrected version of the software arrived in Dhahran the day after the attack.",
      questions: [
        [
          "According to the passage, the error was caused by ----.",
          [
            "the computer's inability to represent one-tenth exactly",
            "a broken radar",
            "an enemy attack on the computer",
            "the speed at which the soldiers had fired the defence missile at the incoming target",
            "bad weather",
          ],
          "Metne göre onda bir sayısı ikili sistemde tam olarak gösterilemez.",
        ],
        [
          "The error became significant because ----.",
          [
            "the system had been running for a long time without being restarted",
            "the missile was very slow",
            "the software was new",
            "the soldiers had been told exactly how often they should restart the system",
            "the barracks was large",
          ],
          "Sistem yaklaşık yüz saat kesintisiz çalıştığından hata büyümüştü.",
        ],
        [
          "It can be understood from the passage that the tragedy ----.",
          [
            "might have been avoided with clearer instructions or earlier software corrections",
            "could not have been prevented",
            "was caused by the soldiers",
            "led the engineers to discover that the system became inaccurate after long periods",
            "happened in Iraq",
          ],
          "Mühendisler sorunu zaten fark etmişti; düzeltilmiş yazılım saldırıdan bir gün sonra geldi.",
        ],
      ],
    },
    {
      text:
        "During the Second World War, British code-breakers at Bletchley Park were struggling to read messages sent by the German high command, which were encrypted by a complex machine known as the Lorenz cipher. A mathematician had worked out a method of breaking the code, but carrying it out by hand was far too slow. An engineer from the Post Office named Tommy Flowers proposed building an electronic machine using about 1,600 valves, the glass tubes used at the time in radios. Many experts doubted that so many valves could work together reliably, since they often burned out, but Flowers knew from his experience in telephone exchanges that valves rarely failed if they were left switched on. When officials were slow to support the project, he paid for some of the parts with his own money. The first machine, named Colossus, began working in early 1944, and an improved version was ready just before the D-Day landings in June of that year. The machines helped the Allies to read messages that revealed German plans. Colossus is now regarded as the first programmable electronic digital computer. After the war, however, most of the machines were destroyed on government orders, and those who had built them were forbidden to speak about their work. Flowers received little recognition until the secret was revealed in the 1970s.",
      questions: [
        [
          "According to the passage, Colossus was needed because ----.",
          [
            "the method of breaking the code was too slow to carry out by hand",
            "the Germans had stopped using codes",
            "valves had become cheaper",
            "the engineer had already paid for all of the parts that were needed with his own money",
            "the Post Office wanted a computer",
          ],
          "Metne göre kodu kırma yöntemi elle uygulanamayacak kadar yavaştı.",
        ],
        [
          "Flowers believed that the machine would be reliable because ----.",
          [
            "valves seldom failed if they were not switched off",
            "valves never burned out",
            "it used very few valves",
            "officials had promised to replace any valves that failed during the operation",
            "it was tested in Germany",
          ],
          "Telefon santrallerindeki deneyiminden lambaların açık bırakılırsa nadiren arızalandığını biliyordu.",
        ],
        [
          "It can be understood from the passage that Flowers was not widely recognised for many years because ----.",
          [
            "his work remained secret",
            "the machine did not work",
            "he left Britain",
            "the government gave all the credit to the mathematician who had worked out the method",
            "he refused to speak to journalists",
          ],
          "Yapımcıların çalışmaları hakkında konuşması yasaklanmıştı; sır 1970'lerde açığa çıktı.",
        ],
      ],
    },
    {
      text:
        "In the early 1990s, workers in Japanese car factories had to scan up to ten barcodes on each box of parts, because a single barcode could hold only about twenty characters of information. In 1994, an engineer named Masahiro Hara at Denso Wave, a company that made barcode readers, developed a new kind of code that could store much more information in a small square. Arranged in a grid of black and white modules, it could hold several thousand characters. One of the main challenges was to make the code easy for a scanner to find, even when it was printed among other text and images. Hara solved this by placing three distinctive squares in three of its corners, which a scanner could recognise from any angle; their proportions were chosen after studying printed material to find a pattern that rarely appeared elsewhere. He is said to have been partly inspired by the pattern of pieces on a Go board. The code was also designed to be read correctly even if part of it was dirty or damaged. Called the QR code, for 'quick response', it was first used to track parts in factories. Crucially, Denso Wave decided against enforcing its patent rights, so anyone could use the design freely. When smartphones with cameras became common, QR codes spread around the world, and today they are used for payments, tickets and restaurant menus.",
      questions: [
        [
          "According to the passage, the new code was developed because ----.",
          [
            "barcodes could hold too little information",
            "scanners were too expensive",
            "smartphones needed it",
            "the company wanted to sell restaurant menus to customers in many different countries",
            "factories wanted colour codes",
          ],
          "Metne göre tek bir barkod yalnızca yaklaşık yirmi karakter tutabiliyordu.",
        ],
        [
          "The three squares in the corners of the code ----.",
          [
            "help scanners to locate it",
            "contain most of the information",
            "show the company's name",
            "make it impossible to read the code if part of it is dirty or damaged",
            "are purely decorative",
          ],
          "Tarayıcının kodu her açıdan tanıyıp bulmasını sağlar.",
        ],
        [
          "It can be understood from the passage that the code spread widely partly because ----.",
          [
            "the company allowed it to be used freely",
            "it was very colourful",
            "it was used only in Japan",
            "the engineer refused to let other companies print it on their products",
            "barcodes were banned",
          ],
          "Denso Wave patent hakkını uygulamamayı seçti; herkes tasarımı özgürce kullanabildi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1972, an American company released a simple arcade game in which two players moved paddles up and down to hit a ball across the screen. ---- Its success helped to launch the video game industry.",
      [
        "The first machine was placed in a bar in California, where it reportedly stopped working because it was overflowing with coins.",
        "Bars sell drinks.",
        "California is a large state.",
        "The company's founders later hired a young man who went on to co-found a famous computer company.",
        "Games are fun.",
      ],
      "Boşluk başarıyı gösteren bir örnek gerektirir; boşluğa ilk makinenin bozulduğu, çünkü bozuk paralarla taştığı söylenen cümle gelmelidir.",
    ],
    [
      "In 1969, two researchers at an American telephone company began writing a new operating system for computers. ---- Its ideas still lie behind many of the systems used today, including those on most smartphones and web servers.",
      [
        "Designed to be simple and flexible, it was later rewritten in a programming language that made it easy to move to different computers.",
        "Telephone companies are large.",
        "Computers need electricity.",
        "The researchers also enjoyed playing games that they had written themselves.",
        "Smartphones are popular.",
      ],
      "Boşluk sistemin özelliklerini anlatan bir cümle gerektirir; boşluğa basit ve esnek tasarlandığını ve farklı bilgisayarlara taşınmasını kolaylaştıran bir dille yeniden yazıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "On 1 August 2012, a mistake in installing new software caused an American trading firm's computers to start buying and selling shares uncontrollably. ---- The company had to be rescued by other investors and was soon taken over.",
      [
        "In about forty-five minutes, before the problem was stopped, the firm lost about 440 million dollars.",
        "Shares are traded on stock markets.",
        "August is a summer month.",
        "Old code that had not been used for years had been accidentally activated on one of its servers.",
        "Investors want profits.",
      ],
      "Boşluk kurtarılma gerekçesini veren bir cümle gerektirir; boşluğa yaklaşık kırk beş dakikada firmanın yaklaşık 440 milyon dolar kaybettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In July 1962, an American space probe heading for Venus had to be destroyed less than five minutes after launch. ---- The incident was famously described by a science fiction writer as 'the most expensive hyphen in history'.",
      [
        "The cause was traced to a tiny mistake in a mathematical formula, in which a single symbol had been left out.",
        "Venus is very hot.",
        "Science fiction is popular.",
        "A second probe was launched a month later and successfully flew past the planet.",
        "Rockets are tall.",
      ],
      "Boşluk 'tire' göndermesine bağlanan bir neden gerektirir; boşluğa nedenin bir formülde tek bir simgenin unutulduğu küçük bir hata olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Many computer systems store time as the number of seconds since the start of 1970, using a number that has a fixed maximum value. ---- Engineers are therefore updating systems to use larger numbers before this happens.",
      [
        "On 19 January 2038, this number will reach its limit, and some systems may suddenly treat the date as being in 1901.",
        "Time passes quickly.",
        "Calendars have twelve months.",
        "A similar problem affected some computers at the end of the twentieth century.",
        "Engineers work long hours.",
      ],
      "Boşluk 'bu olmadan önce' ifadesine bağlanan bir olay gerektirir; boşluğa 2038'de bu sayının sınırına ulaşacağını ve bazı sistemlerin tarihi 1901 sayabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In November 1988, a graduate student released a small program onto the early internet to measure its size. ---- It is regarded as one of the first major computer worms, and its creator became the first person convicted under a new American law on computer misuse.",
      [
        "Because of an error in its design, it copied itself far too often and slowed thousands of computers to a halt.",
        "Students study hard.",
        "The internet was small at the time.",
        "He later became a respected professor of computer science.",
        "Computers can be repaired.",
      ],
      "Boşluk programın neden önemli bir olay haline geldiğini açıklayan bir cümle gerektirir; boşluğa tasarım hatası yüzünden kendini çok sık kopyalayıp binlerce bilgisayarı durdurduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In May 2000, an email with the subject 'ILOVEYOU' spread around the world.",
        "Many people send emails every day.",
        "When users opened its attachment, it sent copies of itself to everyone in their address books.",
        "Within days, it had infected millions of computers.",
        "It caused damage estimated at billions of dollars.",
      ],
      odd: 1,
      why: "Parça 'ILOVEYOU' bilgisayar virüsünü anlatır. Pek çok kişinin her gün e-posta gönderdiğini söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2010, security researchers discovered a highly sophisticated computer worm.",
        "It was designed to damage machines used to enrich uranium.",
        "It made them spin too fast while showing normal readings to operators.",
        "Uranium is a heavy metal.",
        "It is widely believed to have been created by governments.",
      ],
      odd: 3,
      why: "Parça uranyum zenginleştirme makinelerine zarar veren solucanı anlatır. Uranyumun ağır bir metal olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2014, a serious flaw was found in software used to secure many websites.",
        "It allowed attackers to read parts of a server's memory.",
        "This could reveal passwords and other private information.",
        "Websites can be designed in many colours.",
        "Millions of systems had to be updated urgently.",
      ],
      odd: 3,
      why: "Parça web sitelerini güvenceye alan yazılımdaki ciddi açığı anlatır. Web sitelerinin pek çok renkte tasarlanabildiğini söyleyen IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Before computers were common, many offices used rooms full of people to carry out calculations.",
        "These workers were themselves called 'computers'.",
        "Many of them were women.",
        "Offices are often noisy places.",
        "They calculated tables for navigation, engineering and astronomy.",
      ],
      odd: 3,
      why: "Parça hesap yapan insanların 'bilgisayar' olarak adlandırıldığı dönemi anlatır. Ofislerin çoğunlukla gürültülü yerler olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Early computers used glass valves that produced a great deal of heat.",
        "They often burned out and had to be replaced.",
        "Glass is made from sand.",
        "Transistors, which were smaller and more reliable, gradually replaced them.",
        "This allowed computers to become much smaller.",
      ],
      odd: 2,
      why: "Parça ilk bilgisayarlardaki lambaları ve yerlerini alan transistörleri anlatır. Camın kumdan yapıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the 1990s, Australian radio astronomers working on a problem with signals from exploding black holes developed a new technique.",
        "It allowed radio signals to be untangled after bouncing off walls and furniture.",
        "Australia has some of the world's largest radio telescopes.",
        "The technique became a key part of wireless computer networks.",
        "The research organisation later earned large sums from its patents.",
      ],
      odd: 2,
      why: "Parça radyo astronomlarının geliştirip kablosuz ağlarda kullanılan tekniği anlatır. Avustralya'nın en büyük radyo teleskoplarından bazılarına sahip olduğunu söyleyen III. cümle akışı bozar.",
    },
  ],
};
