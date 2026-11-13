import type { YokdilDeneme } from "./types";

export const FEN_38: YokdilDeneme = {
  no: 38,
  field: "fen",
  vocab: [
    [
      "Officials feared that counting the population by hand would take so long that the results would be ---- before they were published.",
      ["outdated", "accurate", "popular", "secret", "expensive"],
      "Yetkililerin nüfusu elle saymanın o kadar uzun süreceğinden ve sonuçların yayımlanmadan 'eskiyeceğinden' (outdated) korktuğu anlatılır.",
    ],
    [
      "The machine used thousands of electrical switches taken from old telephone ----.",
      ["exchanges", "directories", "boxes", "operators", "bills"],
      "Makinenin eski telefon 'santrallerinden' (exchanges) alınmış binlerce elektrik anahtarı kullandığı anlatılır.",
    ],
    [
      "The software was designed to ---- the most important tasks when the computer became overloaded.",
      ["prioritise", "abandon", "ignore", "delay", "duplicate"],
      "Yazılımın bilgisayar aşırı yüklendiğinde en önemli görevlere 'öncelik vermek' (prioritise) üzere tasarlandığı anlatılır.",
    ],
    [
      "Programmers worked for years to ---- the problem before the new century began.",
      ["fix", "create", "hide", "celebrate", "predict"],
      "Programcıların yeni yüzyıl başlamadan sorunu 'düzeltmek' (fix) için yıllarca çalıştığı anlatılır.",
    ],
    [
      "Volunteers around the world ---- improvements to the code, which was freely available.",
      ["contributed", "removed", "purchased", "concealed", "rejected"],
      "Dünyanın dört bir yanından gönüllülerin serbestçe erişilebilen koda iyileştirmeler 'katkıda bulunduğu' (contributed) anlatılır.",
    ],
    [
      "Some users became so attached to the program that they asked to be ---- alone with it.",
      ["left", "made", "set", "put", "kept"],
      "Bazı kullanıcıların programa o kadar bağlandığı ki onunla yalnız 'bırakılmak' (left alone) istediği anlatılır.",
    ],
  ],
  grammar: [
    [
      "Hollerith ---- for the Census Office when he began to think about using machines.",
      ["was working", "has worked", "works", "will work", "had been worked"],
      "Geçmişte süren bir eylem sırasında başka bir olay olmuştur: 'was working'.",
    ],
    [
      "By the time the Z3 was completed, Zuse ---- two earlier machines in his parents' flat.",
      ["had built", "builds", "will build", "is building", "has been built"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had built'.",
    ],
    [
      "If the software had not dropped less important tasks, the landing ---- abandoned.",
      ["might have been", "may be", "is", "had been", "will be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have been'.",
    ],
    [
      "Billions of dollars ---- on preparing computer systems for the year 2000.",
      ["were spent", "spent", "have spent", "are spending", "will spend"],
      "Para harcanmıştır; edilgen geçmiş zaman: 'were spent'.",
    ],
    [
      "---- the student described his project as 'just a hobby', it grew into one of the most important pieces of software in the world.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Hobi olarak tanımlanması ile dünyanın en önemli yazılımlarından birine dönüşmesi zıttır: 'Although'.",
    ],
    [
      "Weizenbaum wrote a program ---- imitated the way a therapist talks to patients.",
      ["that", "who", "whose", "what", "where"],
      "'a program' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
    ],
    [
      "The machine won four of the five games, ---- surprised many experts.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The more games the program played against itself, ---- it became.",
      ["the stronger", "the strongest", "stronger than", "much stronger", "so strong"],
      "'The more ..., the stronger ...' paralel yapısı: 'the stronger'.",
    ],
    [
      "Not until the 1890 census ---- machines used to count the population of a country.",
      ["were", "did", "had", "have", "was"],
      "'Not until' ile devrik yapı; çoğul edilgen geçmiş zaman: 'were'.",
    ],
    [
      "Many programs stored years as two digits ---- save valuable memory.",
      ["to", "for", "so", "by", "as"],
      "Amaç bildiren mastar: 'to save'.",
    ],
    [
      "Users typed messages, and the program replied ---- it understood them.",
      ["as if", "so that", "unless", "whereas", "even if"],
      "Program anlıyormuş gibi yanıt veriyordu; gerçek dışı benzetme: 'as if'.",
    ],
    [
      "Zuse's machine was destroyed ---- an air raid on Berlin in 1943.",
      ["during", "while", "since", "until", "among"],
      "İsim öbeği önünde zaman bildiren edat: 'during'.",
    ],
    [
      "The demonstration was so far ahead of its time ---- many viewers did not realise its importance.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "The company insisted that the code ---- free for anyone to use.",
      ["be", "is being", "was been", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "The United States census of 1880 took almost eight years to process by hand, and officials feared that the 1890 census, with a much larger population, might not be finished {1} it was time for the next one in 1900. Herman Hollerith, a young engineer who had worked on the earlier census, proposed a solution. Information about each person, such as age, sex and place of birth, would be recorded by punching holes in specific positions on a card. The cards were then placed in a machine {2} metal pins were pressed down onto them. Wherever there was a hole, a pin passed through into a small cup of mercury, completing an electrical circuit and moving the hand of a counting dial forward by one. {3} the system, clerks could process thousands of cards a day. The basic count of the 1890 census was completed in a matter of weeks, and the full analysis took only a few years, saving the government a great deal of money. Hollerith went on to sell his machines to other countries and to railway and insurance companies. His business later merged with others to form a company {4} in 1924 took the name International Business Machines, or IBM. Punched cards remained the main way of entering data into computers {5} the 1970s.",
      blanks: [
        [
          "(21) ----",
          ["before", "after", "since", "unless", "while"],
          "Bir sonraki sayım zamanı gelmeden 'önce' bitmeyebileceği anlatılır: 'before'.",
        ],
        [
          "(22) ----",
          ["in which", "which", "whose", "what", "who"],
          "Makinenin içinde iğneler bastırılır; edat + ilgi zamiri: 'in which'.",
        ],
        [
          "(23) ----",
          ["Using", "Used", "To use", "Uses", "Having been used"],
          "Sistemi kullanarak; etken -ing yapısı: 'Using'.",
        ],
        [
          "(24) ----",
          ["that", "what", "who", "whose", "where"],
          "'a company' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(25) ----",
          ["until", "since", "during", "before", "by"],
          "1970'lere 'kadar' ana yöntem olarak kaldığı anlatılır: 'until'.",
        ],
      ],
    },
    {
      text:
        "In the late 1930s, Konrad Zuse, a young German civil engineer, grew tired of the long, repetitive calculations his job required and decided to build a machine to perform them. Working with little money in his parents' flat in Berlin, he built a series of experimental computers. The first, completed in 1938, was entirely mechanical and unreliable. For his third machine, the Z3, {1} he finished in May 1941, Zuse used about 2,600 relays, electrical switches of the kind found in telephone exchanges. The Z3 worked with binary numbers and could be programmed using instructions punched into strips of old cinema film, {2} it is now regarded as the world's first working programmable, fully automatic digital computer. {3}, Zuse received little support. The German authorities did not consider his work important for the war effort, and he had almost no contact with researchers in other countries, {4} were developing their own machines at the same time. The Z3 was destroyed in an air raid in 1943. After the war, Zuse founded a computer company, and a replica of the Z3 is now displayed in a museum in Munich. His achievement was not widely recognised {5} many years later.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgüller arasında Z3'ü niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "yet"],
          "Özelliklerinin sayılması ve ilk bilgisayar sayılması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["Nevertheless", "Therefore", "Similarly", "For example", "In other words"],
          "Önemli başarısına rağmen az destek görmesi zıtlık bildirir: 'Nevertheless'.",
        ],
        [
          "(29) ----",
          ["who", "which", "whose", "where", "what"],
          "Virgülden sonra araştırmacıları niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
        [
          "(30) ----",
          ["until", "since", "during", "before", "by"],
          "Ancak yıllar sonra tanındığı anlatılır: 'not ... until'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Hollerith's machines were expensive, ----.",
      [
        "they saved money",
        "the census is held every ten years",
        "punched cards were made of thin card",
        "Hollerith was a young engineer",
        "mercury is a liquid metal",
      ],
      "'Although' zıtlık ister: Hollerith'in makineleri pahalı olsa da hükümete büyük miktarda para kazandırdı.",
    ],
    [
      "Zuse built his first computers in his parents' flat ----.",
      [
        "because he had very little money",
        "although Berlin was a large city",
        "unless the relays had been delivered",
        "so that the war began in 1939",
        "while the Z3 was completed in 1941",
      ],
      "Zuse ilk bilgisayarlarını çok az parası olduğu için ailesinin dairesinde yaptı.",
    ],
    [
      "If a computer receives more data than it can handle, ----.",
      [
        "it must decide which tasks matter most",
        "the landing took place in July 1969",
        "the astronauts were very experienced",
        "the software was written at MIT",
        "computers were very small at that time",
      ],
      "Birinci tip koşul: bir bilgisayar işleyebileceğinden fazla veri alırsa hangi görevlerin daha önemli olduğuna karar vermelidir.",
    ],
    [
      "----, programmers often stored only the last two digits of a year.",
      [
        "To save expensive computer memory",
        "Although the century was ending",
        "Unless the bank had asked them",
        "Because the year 2000 was a leap year",
        "Since computers use binary numbers",
      ],
      "Pahalı bilgisayar belleğinden tasarruf etmek için programcılar sıklıkla yılın yalnızca son iki hanesini saklıyordu.",
    ],
    [
      "The operating system spread rapidly ----.",
      [
        "as anyone could improve it",
        "although its creator was a student in Finland",
        "unless computers were very powerful",
        "so that the message was posted in 1991",
        "while the student was only twenty-one",
      ],
      "İşletim sistemi, herkes onu ücretsiz kullanıp geliştirebildiği için hızla yayıldı.",
    ],
    [
      "Weizenbaum was disturbed by his program's success ----.",
      [
        "as users trusted it",
        "although he worked at a famous university",
        "unless the users were students",
        "so that he wrote a book",
        "while computers were becoming common",
      ],
      "Weizenbaum, insanlar programa onları anlıyormuş gibi güvendiği için başarısından rahatsız oldu.",
    ],
    [
      "Not only did the program defeat a world champion, ----.",
      [
        "but it also surprised experts",
        "and the match took place in Seoul",
        "since Go is an ancient game",
        "so the champion was Korean",
        "unless the board was very large",
      ],
      "'Not only ... but also' yapısı tamamlanır: program bir dünya şampiyonunu yenmekle kalmadı, uzmanları şaşırtan hamleler de yaptı.",
    ],
    [
      "Since the spreadsheet program made calculations so much easier, ----.",
      [
        "firms bought computers for it",
        "it was written by two programmers",
        "it ran on a small computer",
        "spreadsheets have rows and columns",
        "it was released in 1979",
      ],
      "'Since' neden bildirir: tablo programı hesaplamaları çok kolaylaştırdığı için pek çok işletme yalnızca onu kullanmak için bilgisayar aldı.",
    ],
    [
      "The square codes were designed in a factory ----.",
      [
        "to help workers keep track of car parts",
        "although Japan makes many cars",
        "unless the parts were very small",
        "because smartphones were popular",
        "while the game of Go is very old",
      ],
      "Kare kodlar fabrikada işçilerin otomobil parçalarını izlemesine yardım etmek için tasarlandı.",
    ],
    [
      "Although the arrangement of keys was designed for early typewriters, ----.",
      [
        "it is still used on computer keyboards today",
        "typewriters were invented in the 1870s",
        "many people type with two fingers",
        "keys are arranged in rows",
        "some keyboards are wireless",
      ],
      "'Although' zıtlık ister: tuş düzeni eski daktilolar için tasarlansa da bugün hâlâ bilgisayar klavyelerinde kullanılır.",
    ],
    [
      "Unless software is tested carefully, ----.",
      [
        "hidden errors may cause serious failures",
        "most programs are written in English",
        "computers use electricity",
        "many people work in offices",
        "keyboards have many keys",
      ],
      "'Unless' olumsuz koşul: yazılım dikkatle test edilmezse gizli hatalar ciddi arızalara yol açabilir.",
    ],
  ],
  enTr: [
    [
      "Each hole in the card represented a particular fact about a person.",
      [
        "Karttaki her delik, bir kişiye ilişkin belirli bir bilgiyi temsil ediyordu.",
        "Karttaki delikler, kişilerin bilgilerini gizlemek için açılıyordu.",
        "Her kişi, kartta kendi deliğini açmak zorundaydı.",
        "Karttaki delikler rastgele açılıyordu ve bir anlamı yoktu.",
        "Karttaki her delik, kişinin kimliğini gizlemek için rastgele açılıyordu ve belirli bir anlamı yoktu.",
      ],
      "'Each hole in the card' 'karttaki her delik', 'represented a particular fact about a person' 'bir kişiye ilişkin belirli bir bilgiyi temsil ediyordu' karşılığıdır.",
    ],
    [
      "The machine was destroyed in an air raid only two years after it was completed.",
      [
        "Makine, tamamlanmasından yalnızca iki yıl sonra bir hava saldırısında yok edildi.",
        "Makine, bir hava saldırısından iki yıl sonra tamamlandı.",
        "Hava saldırısı, makinenin tamamlanmasını iki yıl geciktirdi.",
        "Makine, iki yıl boyunca hava saldırılarından korundu.",
        "Makine, tamamlanmasından yalnızca iki yıl önce bir hava saldırısında ağır hasar gördü.",
      ],
      "'was destroyed in an air raid' 'bir hava saldırısında yok edildi', 'only two years after it was completed' 'tamamlanmasından yalnızca iki yıl sonra' karşılığıdır.",
    ],
    [
      "Thanks to the software, the computer continued to carry out the tasks essential for landing.",
      [
        "Yazılım sayesinde bilgisayar iniş için gerekli görevleri yerine getirmeye devam etti.",
        "Yazılım, bilgisayarın iniş görevlerini durdurmasına neden oldu.",
        "Bilgisayar, yazılım olmadan da iniş görevlerini yerine getirebilirdi.",
        "İniş için gerekli görevler, yazılım tarafından iptal edildi.",
        "Yazılım sayesinde bilgisayar iniş sırasında tüm görevleri durdurup yeniden başlamayı reddetti.",
      ],
      "'Thanks to the software' 'yazılım sayesinde', 'continued to carry out the tasks essential for landing' 'iniş için gerekli görevleri yerine getirmeye devam etti' karşılığıdır.",
    ],
    [
      "When the new year arrived, very few computer systems actually failed.",
      [
        "Yeni yıl geldiğinde gerçekte çok az bilgisayar sistemi arızalandı.",
        "Yeni yıl geldiğinde bilgisayar sistemlerinin çoğu arızalandı.",
        "Bilgisayar sistemleri, yeni yıldan önce tamamen kapatıldı.",
        "Yeni yıl, bilgisayarların arızalanması nedeniyle ertelendi.",
        "Arızalanan bilgisayarlar yeni yılda yenileriyle değiştirildi.",
      ],
      "'When the new year arrived' 'yeni yıl geldiğinde', 'very few computer systems actually failed' 'gerçekte çok az bilgisayar sistemi arızalandı' karşılığıdır.",
    ],
    [
      "The program simply turned the user's statements into questions.",
      [
        "Program yalnızca kullanıcının ifadelerini sorulara dönüştürüyordu.",
        "Program, kullanıcının sorularını yanıtlamayı reddediyordu.",
        "Kullanıcılar, programın sorularını ifadelere dönüştürüyordu.",
        "Program, kullanıcıların ne söylediğini tam olarak anlıyordu.",
        "Program yalnızca matematik sorularını yanıtlayabiliyordu.",
      ],
      "'simply turned the user's statements' 'yalnızca kullanıcının ifadelerini dönüştürüyordu', 'into questions' 'sorulara' karşılığıdır.",
    ],
    [
      "The program taught itself by competing against copies of itself over and over again.",
      [
        "Program, kendi kopyalarına karşı tekrar tekrar oynayarak kendi kendine öğrendi.",
        "Program, milyonlarca insanla oynamayı reddetti.",
        "Program yalnızca insanların oyunlarını izleyerek öğrendi.",
        "Milyonlarca oyun, programın öğrenmesini engelledi.",
        "Program, kendisine karşı oynadığı her oyunu kaybetti.",
      ],
      "'taught itself by competing ... over and over again' 'tekrar tekrar oynayarak öğrendi', 'against copies of itself' 'kendisine karşı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Nüfus sayımının temel sonuçları birkaç hafta içinde açıklandı.",
      [
        "The basic results of the census were announced within a few weeks.",
        "The census took several years before any results were announced.",
        "A few weeks were spent preparing the census cards.",
        "The results of the census were never announced.",
        "The census was cancelled after a few weeks.",
      ],
      "'Nüfus sayımının temel sonuçları' 'the basic results of the census', 'birkaç hafta içinde açıklandı' 'were announced within a few weeks' karşılığıdır.",
    ],
    [
      "Yetkililer, bu çalışmanın savaş için önemli olmadığını düşünüyordu.",
      [
        "The authorities did not consider this work important for the war.",
        "The authorities believed that this work would win the war.",
        "The war made this work impossible to carry out.",
        "The authorities paid for the work because of the war.",
        "This work was considered more important than the war.",
      ],
      "'savaş için önemli olmadığını düşünüyordu' 'did not consider this work important for the war' karşılığıdır.",
    ],
    [
      "İnişin son dakikalarında bilgisayar bir dizi uyarı vermeye başladı.",
      [
        "In the final minutes of the landing, the computer began to give a series of alarms.",
        "The computer stopped working in the final minutes of the landing.",
        "The astronauts gave the computer a series of warnings during the landing.",
        "The landing was completed several minutes before the alarms began.",
        "In the final minutes of the landing, the astronauts switched off the computer because of the alarms.",
      ],
      "'İnişin son dakikalarında' 'in the final minutes of the landing', 'bir dizi uyarı vermeye başladı' 'began to give a series of alarms' karşılığıdır.",
    ],
    [
      "Bazı uzmanlar, tehlikenin abartıldığını öne sürdü.",
      [
        "Some experts argued that the danger had been exaggerated.",
        "Some experts argued that the danger had been ignored.",
        "The experts agreed that the danger was greater than expected.",
        "No experts commented on the danger.",
        "The danger was exaggerated by computers.",
      ],
      "'tehlikenin abartıldığını' 'that the danger had been exaggerated', 'öne sürdü' 'argued' karşılığıdır.",
    ],
    [
      "Bu işletim sistemi bugün sunucuların ve akıllı telefonların çoğunda çalışıyor.",
      [
        "This operating system now runs on most servers and smartphones.",
        "This operating system cannot be used on smartphones.",
        "Most servers stopped using this operating system long ago.",
        "Smartphones were designed to replace this operating system.",
        "This operating system runs only on old computers.",
      ],
      "'bugün sunucuların ve akıllı telefonların çoğunda' 'now on most servers and smartphones', 'çalışıyor' 'runs' karşılığıdır.",
    ],
    [
      "Uzmanlar, programın hamlelerinden birinin hata olduğunu düşündü, ancak sonradan bunun dâhice olduğu anlaşıldı.",
      [
        "Experts thought one of the program's moves was a mistake, but it later turned out to be brilliant.",
        "Experts agreed immediately that all of the program's moves were brilliant.",
        "The program made a mistake that experts failed to notice.",
        "Experts later discovered that the program had cheated.",
        "Experts thought that all of the program's moves were brilliant, but one later turned out to be a mistake.",
      ],
      "'hata olduğunu düşündü' 'thought ... was a mistake', 'sonradan bunun dâhice olduğu anlaşıldı' 'it later turned out to be brilliant' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1960s, the mathematician Margaret Hamilton led the team at the Massachusetts Institute of Technology that wrote the software for the computers guiding NASA's Apollo spacecraft to the Moon. At the time, programming was not regarded as a serious engineering discipline, and Hamilton introduced the term 'software engineering' partly to win respect for it. Her team designed the software to be extremely reliable, with the ability to detect errors and recover from them. This proved crucial on 20 July 1969, during the final minutes of Apollo 11's descent to the lunar surface. As the lunar module approached the Moon, the onboard computer began displaying alarm codes that the astronauts did not recognise. A switch had been left in a position that caused a radar to send the computer a stream of unnecessary data, overloading it. Instead of crashing, however, the computer followed the priorities built into its software: it abandoned lower-priority tasks and restarted, continuing to carry out the calculations essential for landing. Engineers in Mission Control quickly confirmed that it was safe to continue, and Neil Armstrong and Buzz Aldrin landed safely. In 2016, Hamilton was awarded the Presidential Medal of Freedom, the highest civilian honour in the United States.",
      questions: [
        [
          "According to the passage, Hamilton introduced the term 'software engineering' partly to ----.",
          [
            "gain respect for programming as a discipline",
            "describe the hardware of the spacecraft",
            "explain how radars work",
            "attract more astronauts to NASA",
            "replace the word 'mathematics'",
          ],
          "Metne göre programcılığın ciddi bir mühendislik dalı olarak saygı görmesini sağlamak için bu terimi kullandı.",
        ],
        [
          "The computer was overloaded during the landing because ----.",
          [
            "a radar was sending it unnecessary data",
            "the astronauts entered the wrong commands",
            "the software contained a serious error",
            "Mission Control sent too many messages",
            "the Moon's gravity affected its electronics",
          ],
          "Yanlış konumda bırakılan bir anahtar radarın bilgisayara gereksiz veri göndermesine yol açtı.",
        ],
        [
          "It can be inferred from the passage that the landing succeeded partly because ----.",
          [
            "the software had been designed to cope with unexpected problems",
            "the astronauts ignored the alarms completely",
            "the computer was switched off",
            "the radar was repaired during the descent",
            "Mission Control took control of the spacecraft",
          ],
          "Yazılım hataları algılayıp onlardan kurtulabilecek şekilde tasarlanmıştı.",
        ],
      ],
    },
    {
      text:
        "Because memory cost a great deal in the early decades of computing, programmers commonly economised by recording years using only their last two digits, writing '75' rather than '1975'. Many of these programs were still in use decades later. As the year 2000 approached, experts warned that computers might interpret '00' as 1900, causing errors in calculations involving dates. Bank accounts might calculate interest wrongly, pension payments might stop, and systems controlling power stations, telephone networks and aircraft might fail. The problem, known as Y2K or the 'millennium bug', led governments and companies around the world to spend years reviewing and repairing millions of lines of code, and estimates of the total cost range up to several hundred billion dollars. When 1 January 2000 arrived, only a small number of minor problems were reported. Some people concluded that the danger had been greatly exaggerated and the money wasted. Others argued that the absence of serious failures showed that the preparations had been successful; they pointed out that, had the work not been done, the problems would have been much worse. The debate illustrates a common difficulty in judging prevention: when a disaster is avoided, it can be hard to prove that it would otherwise have happened.",
      questions: [
        [
          "The passage explains that years were stored with two digits mainly because ----.",
          [
            "memory was costly at the time",
            "they did not expect the year 2000",
            "computers could not handle four digits",
            "banks requested it",
            "it made calculations faster",
          ],
          "Metne göre o dönemde bilgisayar belleği son derece pahalıydı.",
        ],
        [
          "Those who defended the preparations argued that ----.",
          [
            "the lack of problems proved the work had been effective",
            "the danger had been exaggerated",
            "no money had been spent",
            "computers would have fixed themselves",
            "the problem would simply appear a few years later",
          ],
          "Ciddi arızaların olmaması hazırlıkların başarılı olduğunu gösteriyordu.",
        ],
        [
          "The final sentence of the passage suggests that ----.",
          [
            "it is difficult to measure the value of prevention",
            "disasters always happen in the end",
            "computers will never be fully reliable",
            "money spent on software is wasted",
            "programmers should use four digits",
          ],
          "Bir felaket önlendiğinde, aksi halde olacağını kanıtlamak zordur.",
        ],
      ],
    },
    {
      text:
        "On 25 August 1991, a twenty-one-year-old student at the University of Helsinki named Linus Torvalds posted a short message to an online discussion group. He announced that he was writing a free operating system, the basic software that controls a computer, describing it as 'just a hobby' that 'won't be big and professional'. Torvalds made the source code freely available and invited others to suggest improvements. Programmers around the world began to contribute fixes and new features, and Torvalds coordinated their work, deciding which changes to accept. The project, which became known as Linux, was released under a licence that allowed anyone to use, modify and share it, provided that they also shared their changes. This 'open-source' approach was very different from that of companies such as Microsoft, which kept their code secret and sold their software. Many people doubted that a project run largely by volunteers could produce reliable software, but Linux steadily improved. Today it runs the great majority of the world's web servers and all of the most powerful supercomputers, and the Android operating system, used on billions of smartphones, is based on it. The success of Linux has encouraged open-source approaches in many other areas of software development.",
      questions: [
        [
          "According to the passage, Torvalds originally described his project as ----.",
          [
            "a personal hobby",
            "a commercial product",
            "a university requirement",
            "a replacement for Android",
            "a professional system",
          ],
          "Metne göre projesini 'sadece bir hobi' olarak tanımladı.",
        ],
        [
          "The licence under which Linux was released required that ----.",
          [
            "people who changed the code also share their changes",
            "users pay a small fee",
            "the code be kept secret",
            "only students could use it",
            "Microsoft approve all changes before they were shared",
          ],
          "Lisans kodu değiştirenlerin değişikliklerini de paylaşmasını şart koşuyordu.",
        ],
        [
          "It can be understood from the passage that early doubts about Linux ----.",
          [
            "proved to be unfounded",
            "led to the project's failure",
            "were shared by Torvalds himself",
            "came mainly from volunteers",
            "were justified by its poor quality",
          ],
          "Linux istikrarlı biçimde gelişip bugün sunucuların ve süper bilgisayarların çoğunda çalışıyor; şüpheler yersiz çıktı.",
        ],
      ],
    },
    {
      text:
        "In 1966, Joseph Weizenbaum, a computer scientist at the Massachusetts Institute of Technology, created a program called ELIZA that could hold a simple conversation in typed English. Its best-known version imitated a certain type of psychotherapist who encourages patients to talk by reflecting their statements back to them. If a user typed 'My mother doesn't understand me', ELIZA might reply 'Tell me more about your family' or 'Why do you think your mother doesn't understand you?' The program had no understanding of what was said; it simply searched for key words and rearranged phrases according to a set of rules. Weizenbaum was therefore astonished by people's reactions. Many users became emotionally involved in their conversations and confided personal problems to the program. His own secretary, who had watched him write it, once asked him to leave the room so that she could talk to it privately. Some psychiatrists even suggested that programs like ELIZA could one day replace human therapists. Weizenbaum was deeply troubled by these responses. He became one of the earliest and most outspoken critics of artificial intelligence, arguing that there are some tasks, such as caring for people in distress, that computers should never be given, whatever their abilities.",
      questions: [
        [
          "According to the passage, ELIZA produced its replies by ----.",
          [
            "following rules based on key words",
            "understanding the meaning of each sentence",
            "consulting a team of psychiatrists",
            "copying replies from books",
            "learning from millions of conversations",
          ],
          "Program anahtar kelimeleri arayıp kurallara göre ifadeleri yeniden düzenliyordu.",
        ],
        [
          "The writer mentions Weizenbaum's secretary in order to show that ----.",
          [
            "even people who knew how it worked became attached to it",
            "she helped him write the program",
            "the program was used mainly in offices",
            "she disliked computers",
            "the program could understand people's secrets",
          ],
          "Yazılışını izleyen sekreterin bile programla özel konuşmak istemesi bağlanmanın gücünü gösterir.",
        ],
        [
          "It can be inferred from the passage that Weizenbaum believed ----.",
          [
            "some human roles should not be handed over to machines",
            "computers would soon become conscious",
            "therapists should use ELIZA",
            "artificial intelligence was harmless",
            "programs should be taught to understand human emotions",
          ],
          "Sıkıntıdaki insanlara bakmak gibi bazı görevlerin asla bilgisayarlara verilmemesi gerektiğini savundu.",
        ],
      ],
    },
    {
      text:
        "The ancient board game Go, which originated in China more than 2,500 years ago, was long considered one of the greatest challenges for artificial intelligence. Although its rules are simple, the board allows more possible positions than there are atoms in all the stars and galaxies we can observe, so a computer cannot simply calculate every possibility. Strong human players rely heavily on intuition. In March 2016, a program called AlphaGo, developed by the company DeepMind, faced Lee Sedol, one of the world's best players, over five games in Seoul. AlphaGo had first learned from thousands of games played by humans and had then improved by playing millions of games against itself. It won the match four games to one. During game two, the program chose a move that commentators at first thought was a mistake, but which later proved to be decisive; professional players described it as creative and beautiful. Lee won the fourth game with an unexpected move of his own. The result was a landmark in artificial intelligence and caused particular excitement in East Asia, where Go is very popular. In 2019, Lee retired from professional play, saying that artificial intelligence had become an opponent that could not be defeated.",
      questions: [
        [
          "According to the passage, Go was difficult for computers because ----.",
          [
            "there are too many possible positions to calculate",
            "its rules are extremely complicated",
            "it is played only in East Asia",
            "the board is very large",
            "humans refused to play against them in public",
          ],
          "Metne göre olası konum sayısı gözlemlenebilir evrendeki atom sayısından fazladır.",
        ],
        [
          "AlphaGo became strong mainly by ----.",
          [
            "studying human games and then playing against itself",
            "being programmed with every possible move",
            "copying Lee Sedol's style",
            "playing only against beginners",
            "using the intuition of the best human players",
          ],
          "Önce insanların oyunlarından öğrendi, sonra kendisine karşı milyonlarca oyun oynayarak gelişti.",
        ],
        [
          "Lee Sedol's retirement suggests that he ----.",
          [
            "felt that humans could no longer compete with the best programs",
            "had lost interest in Go",
            "wanted to work for DeepMind",
            "was too old to play",
            "had been injured during the match in Seoul",
          ],
          "Yapay zekânın yenilemeyecek bir rakip haline geldiğini söyledi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1979, two young programmers released VisiCalc, a program that allowed users to enter numbers in a grid of rows and columns on the screen. ---- Many businesses bought personal computers simply in order to run it.",
      [
        "When one number was changed, all the related totals were recalculated instantly.",
        "Programmers often work late at night.",
        "Personal computers were expensive in the 1970s.",
        "Grids are used in many board games.",
        "Some programs are released free of charge by their authors.",
      ],
      "Boşluktan sonra işletmelerin yalnızca programı kullanmak için bilgisayar aldığı anlatılır; boşluğa bir sayı değiştiğinde tüm ilgili toplamların anında yeniden hesaplandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In December 1968, the American engineer Douglas Engelbart gave a ninety-minute demonstration to an audience of computer scientists in San Francisco. ---- Many of these ideas did not become widely available until the 1980s and 1990s.",
      [
        "He showed a computer mouse, linked text, windows on a screen and even a video call with a colleague.",
        "San Francisco is famous for its bridges.",
        "Many engineers give public lectures.",
        "Ninety minutes is the length of a football match.",
        "Computer scientists often attend conferences to share ideas.",
      ],
      "Boşluktan sonra 'these ideas' denir; boşluğa Engelbart'ın fare, bağlantılı metin, pencereler ve görüntülü görüşme gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1962, a group of students at the Massachusetts Institute of Technology wrote a program called Spacewar! for one of the university's new computers. ---- Copies of the program spread to other universities, and many historians count it among the earliest real video games.",
      [
        "Two players controlled spaceships that fired at each other around a star.",
        "MIT is one of the most famous universities in the world.",
        "Computers at that time filled whole rooms.",
        "Space exploration was popular in the 1960s.",
        "Many students like to play games in their free time.",
      ],
      "Boşluktan sonra 'Copies of the program' denir; boşluğa iki oyuncunun bir yıldız çevresinde birbirine ateş eden uzay gemilerini kontrol ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1994, the Japanese engineer Masahiro Hara designed a square code to help factory workers track car parts more quickly than ordinary barcodes allowed. ---- His company decided not to charge for its use, and the codes later became popular around the world when smartphones could read them.",
      [
        "He was reportedly inspired by the pattern of black and white stones on a Go board.",
        "Japan is famous for its car industry.",
        "Factory workers often work in shifts.",
        "Barcodes are found on most products.",
        "Smartphones have many uses besides making calls.",
      ],
      "Boşluktan sonra şirketin kodu ücretsiz bıraktığı anlatılır; boşluğa Hara'nın Go tahtasındaki siyah beyaz taşların deseninden esinlendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Many websites ask users to read a distorted word or identify objects in pictures before allowing them to continue. ---- These tests, called CAPTCHAs, were developed in 2000 by researchers at Carnegie Mellon University.",
      [
        "The aim is to tell humans apart from automated programs that might abuse the site.",
        "Many websites sell products online.",
        "Pictures can make websites more attractive.",
        "Some words are difficult to spell.",
        "Universities carry out research in many different fields.",
      ],
      "Boşluktan sonra 'These tests' denir; boşluğa amacın insanları siteyi kötüye kullanabilecek otomatik programlardan ayırmak olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "The arrangement of letters on most English-language keyboards begins with Q, W, E, R, T and Y. ---- Although this problem no longer exists, the layout has remained in use for nearly 150 years.",
      [
        "It was designed for early typewriters, partly to prevent the metal arms carrying the letters from jamming.",
        "English uses twenty-six letters.",
        "Many people learn to type at school.",
        "Keyboards are connected to computers by cables.",
        "Some languages, such as Arabic, are written from right to left.",
      ],
      "Boşluktan sonra 'this problem' denir; boşluğa düzenin eski daktiloların metal kollarının sıkışmasını önlemek için tasarlandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1965, the engineer Gordon Moore predicted that the number of components on a computer chip would double regularly.",
        "He later revised the period to about every two years.",
        "Moore co-founded one of the world's largest chip manufacturers.",
        "Chips are made from silicon, which is found in sand.",
        "For decades, his prediction held remarkably well and became known as Moore's law.",
      ],
      odd: 3,
      why: "Parça Moore yasasını anlatır. Çiplerin kumda bulunan silisyumdan yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1999, the Japanese designer Shigetaka Kurita created a set of 176 tiny pictures for mobile phones.",
        "They allowed users to express emotions and ideas in short messages.",
        "Japan has a long tradition of comic books.",
        "These emoji later spread around the world and are now used by billions of people.",
        "In 2016, the original set was added to the collection of a famous museum in New York.",
      ],
      odd: 2,
      why: "Parça emojilerin ortaya çıkışını anlatır. Japonya'nın köklü bir çizgi roman geleneği olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1991, researchers at a computer laboratory at Cambridge University pointed a camera at a coffee pot in a nearby room.",
        "This allowed them to see whether the pot was full without leaving their desks.",
        "Instant coffee was first sold widely in the 1930s.",
        "In 1993, the images were made available on the web, making it one of the first webcams.",
        "The famous pot was later sold at an online auction.",
      ],
      odd: 2,
      why: "Parça ilk web kameralarından birini anlatır. hazır kahvenin ilk kez 1930'larda yaygın biçimde satıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On 15 March 1985, a computer company registered the internet address symbolics.com.",
        "It was the first domain name ending in '.com'.",
        "In the following years, registrations grew slowly, as few people used the internet.",
        "Many companies use their names as brands.",
        "Today there are well over a hundred million '.com' addresses.",
      ],
      odd: 3,
      why: "Parça ilk '.com' alan adını anlatır. Pek çok şirketin adını marka olarak kullandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 1986, two brothers in Pakistan wrote a program that spread between personal computers on floppy disks.",
        "It is regarded as the first virus to infect the most common type of personal computer.",
        "Pakistan became independent in 1947.",
        "Unusually, the program contained the brothers' names, address and telephone number.",
        "They later said that they had written it to discourage people from copying their software illegally.",
      ],
      odd: 2,
      why: "Parça ilk kişisel bilgisayar virüslerinden birini anlatır. Pakistan'ın 1947'de bağımsız olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the 1970s, the computer scientist Larry Tesler worked on making computers easier for ordinary people to use.",
        "Office workers often write reports and letters.",
        "He helped to develop the now-familiar commands for cutting, copying and pasting text.",
        "He also campaigned against 'modes', in which the same key does different things depending on the situation.",
        "His ideas influenced the design of many later personal computers.",
      ],
      odd: 1,
      why: "Parça Larry Tesler'in kullanıcı dostu bilgisayar komutlarına katkısını anlatır. Ofis çalışanlarının sık sık rapor ve mektup yazdığını söyleyen II. cümle konu dışıdır.",
    },
  ],
};
