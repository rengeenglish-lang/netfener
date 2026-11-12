import type { YokdilDeneme } from "./types";

export const FEN_16: YokdilDeneme = {
  no: 16,
  field: "fen",
  vocab: [
    [
      "Hopper believed that programs could be written in words close to English and then ---- automatically into the code a computer understands.",
      ["translated", "hidden", "printed", "deleted", "repaired"],
      "Hopper'ın programların İngilizceye yakın sözcüklerle yazılıp bilgisayarın anladığı koda otomatik olarak 'çevrilebileceğine' (translated) inandığı anlatılır.",
    ],
    [
      "Kilby's chip ---- all the parts of an electronic circuit on a single piece of semiconductor material.",
      ["combined", "separated", "destroyed", "cooled", "replaced"],
      "Kilby'nin çipinin bir elektronik devrenin tüm parçalarını tek bir yarı iletken parçada 'birleştirdiği' (combined) anlatılır.",
    ],
    [
      "By changing frequency many times a second, the signal became almost impossible to ----.",
      ["intercept", "send", "describe", "repeat", "invent"],
      "Saniyede birçok kez frekans değiştirilerek sinyalin 'ele geçirilmesinin/dinlenmesinin' (intercept) neredeyse imkânsız hâle geldiği anlatılır.",
    ],
    [
      "The first message sent over the network was ---- after only two letters, when the system crashed.",
      ["interrupted", "completed", "translated", "encrypted", "approved"],
      "Ağ üzerinden gönderilen ilk mesajın sistem çöktüğü için yalnızca iki harften sonra 'kesintiye uğradığı' (interrupted) anlatılır.",
    ],
    [
      "Data centres must be kept cool, because the servers ---- large amounts of heat.",
      ["generate", "absorb", "prevent", "store", "lose"],
      "Sunucuların büyük miktarda ısı 'ürettiği' (generate) için veri merkezlerinin serin tutulması gerektiği anlatılır.",
    ],
    [
      "When demand for electricity is low, cheap power is used to pump water uphill so that it can ---- later when it is needed.",
      ["be drawn on", "be given up", "be turned down", "be put off", "be looked after"],
      "Elektrik talebi düşükken suyun yukarı pompalandığı ve gerektiğinde 'kullanılabileceği' (be drawn on) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first compiler ---- by Grace Hopper and her team in the early 1950s.",
      ["was developed", "developed", "has developed", "was developing", "had developed"],
      "Derleyici geliştirilen bir programdır ve olay geçmişte olmuştur: edilgen geçmiş zaman 'was developed'.",
    ],
    [
      "If the navy had taken Lamarr's invention seriously, it ---- during the Second World War.",
      ["might have been used", "might be used", "will be used", "was used", "had been used"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have been + V3' ister.",
    ],
    [
      "By the time the public learned about the method in 1976, British government researchers ---- a similar system in secret.",
      ["had already developed", "have already developed", "already develop", "will already develop", "were already developed"],
      "Yöntemin kamuoyunca öğrenilmesinden (geçmiş) önce tamamlanmış eylem: Past Perfect 'had already developed'.",
    ],
    [
      "Kilby, ---- invention made modern electronics possible, received the Nobel Prize in 2000.",
      ["whose", "who", "which", "whom", "where"],
      "Buluş Kilby'ye aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after the system had been restarted ---- able to send the complete word.",
      ["were the researchers", "the researchers were", "were researchers the", "the researchers are", "are the researchers"],
      "'Only after' ile başlayan cümlede ana cümle devrik olur: 'were the researchers'.",
    ],
    [
      "The early computers were so large ---- they filled entire rooms.",
      ["that", "which", "as", "such", "than"],
      "'so large that' sonuç bildiren yapıdır: 'that'.",
    ],
    [
      "---- data centres use huge amounts of electricity, many are becoming more efficient.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Çok elektrik kullanmaları ile daha verimli hâle gelmeleri zıttır: 'Although'.",
    ],
    [
      "Users ---- messages are encrypted can communicate without fear of being overheard.",
      ["whose", "who", "which", "whom", "where"],
      "Mesajlar kullanıcılara aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Lamarr is said ---- the idea while sitting at a piano with the composer George Antheil.",
      ["to have developed", "to develop", "developing", "to be developing", "to have been developed"],
      "Lamarr fikri geliştiren taraftır (etken) ve olay geçmişte kalmıştır: 'be said to have + V3'.",
    ],
    [
      "The chip was small ---- reliable, which made it ideal for spacecraft.",
      ["and", "but", "or", "unless", "so that"],
      "İki olumlu özellik birbirine eklenir: 'and'.",
    ],
    [
      "Water ---- in the upper reservoir can be released within minutes.",
      ["stored", "storing", "which stores", "to store", "has stored"],
      "Su depolanan bir şeydir; edilgen anlamlı geçmiş ortaç 'stored' gerekir.",
    ],
    [
      "Some companies build data centres in cold countries ---- they can use outside air for cooling.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Hopper explained the speed of computers as if a nanosecond ---- something people could hold in their hands.",
      ["were", "is", "will be", "has", "be"],
      "'as if' ile gerçek dışı bir durum anlatılır: 'were'.",
    ],
    [
      "The longer the encryption key is, ---- it is to break the code.",
      ["the harder", "harder", "the hardest", "more hard", "the more hard"],
      "'The longer …, the harder …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early days of computing, programmers had to write instructions in machine code, long strings of numbers {1} were difficult to read and easy to get wrong. Grace Hopper, a mathematician who had joined the United States Navy during the Second World War, believed that this was unnecessary. She argued that programs could be written in words resembling English and then converted automatically into machine code by another program. Many of her colleagues doubted that this was possible, {2} they believed that computers could only do arithmetic. In 1952, Hopper and her team produced one of the first compilers, a program {3} translates instructions written in a human-readable language into machine code. Her work later contributed to the development of COBOL, a programming language {4} became widely used in business and government and is still found in some banking systems today. Hopper was also famous for her lively lectures. To explain how fast computers worked, she handed out pieces of wire about thirty centimetres long, the distance light travels in a billionth of a second. {5} she retired from the navy at the age of seventy-nine, she was the oldest serving officer in the United States armed forces.",
      blanks: [
        [
          "(21) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'long strings of numbers' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(22) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Meslektaşlarının şüphe etmesinin nedeni bilgisayarların yalnızca aritmetik yapabileceğine inanmalarıdır: 'because'.",
        ],
        [
          "(23) ----",
          ["that", "who", "where", "what", "whose"],
          "Boşluk 'a program' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'that'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk 'a programming language' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["When", "Unless", "Although", "Until", "Whereas"],
          "Donanmadan emekli olduğu 'zaman' en yaşlı görevli subay olduğu anlatılır: 'When'.",
        ],
      ],
    },
    {
      text:
        "By the late 1950s, electronic devices were being built from individual components such as transistors, resistors and capacitors, {1} had to be connected by hand with wires. As circuits became more complex, this process became slow, expensive and unreliable, a problem engineers called 'the tyranny of numbers'. In the summer of 1958, Jack Kilby, a new employee at Texas Instruments, had to stay at work while most of his colleagues were on holiday, {2} he used the time to think about the problem. He realised that all the components of a circuit could be made from the same semiconductor material and formed on a single piece of it. In September, he demonstrated a simple working circuit built on a small piece of germanium. A few months later, Robert Noyce at another company developed a similar idea independently, {3} his design, based on silicon, was easier to manufacture in large numbers. The integrated circuit, or microchip, allowed electronic devices to become smaller, cheaper and more powerful. {4}, it made possible everything from pocket calculators to smartphones. Noyce died in 1990, {5} Kilby lived long enough to receive the Nobel Prize in Physics in 2000.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "what", "whose"],
          "Boşluk bileşenleri niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "İşte kalması ve zamanı sorunu düşünmek için kullanması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["but", "because", "so", "unless", "since"],
          "Noyce'un benzer bir fikir geliştirmesi ile tasarımının üretiminin daha kolay olması karşıtlık bildirir: 'but'.",
        ],
        [
          "(29) ----",
          ["Eventually", "Previously", "Instead", "Otherwise", "Meanwhile"],
          "Mikroçipin 'sonunda' hesap makinelerinden akıllı telefonlara kadar her şeyi mümkün kıldığı anlatılır: 'Eventually'.",
        ],
        [
          "(30) ----",
          ["while", "because", "unless", "so that", "since"],
          "Noyce'un 1990'da ölmesi ile Kilby'nin Nobel almaya yetecek kadar yaşaması karşılaştırılır: 'while'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Lamarr was famous as a film star, ----.",
      [
        "she also co-invented a method of secure radio communication",
        "she was born in Austria and moved to the United States",
        "she appeared in many films during the 1930s and 1940s",
        "her films were popular in Europe and America",
        "she worked with the composer George Antheil",
      ],
      "'Although' zıtlık ister: Lamarr bir film yıldızı olarak ünlü olsa da güvenli bir telsiz iletişim yöntemini birlikte icat etti.",
    ],
    [
      "If data centres did not use cooling systems, ----.",
      [
        "the servers would overheat",
        "the computers had been switched off",
        "most companies will build them",
        "the buildings were very large",
        "electricity is expensive",
      ],
      "Type 2 koşul cümlesi ana cümlede 'would + yalın fiil' ister: sunucular aşırı ısınırdı.",
    ],
    [
      "The network was designed with many connections between computers ----.",
      [
        "so that messages could avoid failed links",
        "because the computers were all in the same building",
        "although nobody planned to use it",
        "unless the government paid for it",
        "even if there were no computers",
      ],
      "Ağın birçok bağlantıyla tasarlanmasının amacı bir bağlantı koptuğunda mesajların başka bir yol bulabilmesidir: 'so that'.",
    ],
    [
      "Since the first integrated circuit was demonstrated in 1958, ----.",
      [
        "chips have grown far more complex",
        "engineers had connected parts by hand",
        "most devices would have become larger",
        "chips will be made of silicon",
        "few people owned computers",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has grown'.",
    ],
    [
      "Unless the private key is kept secret, ----.",
      [
        "anyone could read the encrypted messages",
        "the code would have been broken",
        "most users had shared their keys",
        "the message will be sent twice",
        "the system was very slow",
      ],
      "'Unless' gerçek bir koşulu bildirir ve ana cümle olası bir sonucu anlatır: herkes şifreli mesajları okuyabilir.",
    ],
    [
      "Pumped storage plants can respond so quickly ----.",
      [
        "that they can supply extra power within minutes",
        "because water flows downhill under gravity",
        "although they need two large reservoirs",
        "unless the weather is very dry",
        "while they use cheap electricity at night",
      ],
      "'so quickly that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Engineers have found that when servers are placed in cooler locations, ----.",
      [
        "less energy is needed to keep them running",
        "the data would have been lost",
        "most centres had moved abroad",
        "the servers will work faster",
        "the buildings were very old",
      ],
      "'when' ile genel bir bulgu anlatılır: sunucular daha serin yerlere konduğunda onları çalışır tutmak için daha az enerji gerekir.",
    ],
    [
      "So complex had electronic circuits become by the late 1950s ----.",
      [
        "that wiring them by hand was hard",
        "because transistors had replaced vacuum tubes",
        "although many devices were still quite large",
        "while engineers worked long hours",
        "unless the parts were very small",
      ],
      "Devrik 'So complex had … become that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While machine code consists of long strings of numbers, ----.",
      [
        "languages such as COBOL use words that resemble English",
        "computers can perform millions of calculations a second",
        "many programmers learned their skills in the navy",
        "early computers used punched cards",
        "Hopper worked on several famous computers",
      ],
      "'While' iki dili karşılaştırır: makine kodu uzun sayı dizilerinden oluşurken COBOL gibi diller İngilizceye benzeyen sözcükler kullanır.",
    ],
    [
      "Once demand for electricity rises in the evening, ----.",
      [
        "the water is released to drive the turbines",
        "the pumps will start working",
        "the reservoir would have been empty",
        "electricity is cheap at night",
        "most people had gone to bed",
      ],
      "'Once' ile bir olayın ardından gelen sonuç anlatılır: su türbinleri çalıştırmak için bırakılır.",
    ],
    [
      "No sooner had the researchers typed the first two letters ----.",
      [
        "than the receiving computer crashed",
        "when the network had been built",
        "that the message will arrive",
        "before they had switched on the computers",
        "so they sent another message",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Hopper believed that programs should be written in a language that people could understand easily.",
      [
        "Hopper, programların insanların kolayca anlayabileceği bir dilde yazılması gerektiğine inanıyordu.",
        "Hopper, programların yalnızca bilgisayarların anlayabileceği bir dilde yazılması gerektiğine inanıyordu.",
        "İnsanlar, Hopper'ın yazdığı programları anlamakta büyük zorluk çekti.",
        "Hopper, programlama dillerinin öğrenilmesinin gereksiz olduğunu düşünüyordu.",
        "Hopper, insanların bilgisayar programı yazmaması gerektiğine inanıyordu.",
      ],
      "'programs should be written in a language' 'programların bir dilde yazılması gerektiği', 'that people could understand easily' 'insanların kolayca anlayabileceği' demektir.",
    ],
    [
      "The integrated circuit allowed electronic devices to become smaller and cheaper.",
      [
        "Entegre devre, elektronik cihazların daha küçük ve ucuz hâle gelmesini sağladı.",
        "Entegre devre, elektronik cihazların daha büyük ve pahalı hâle gelmesine neden oldu.",
        "Elektronik cihazlar küçüldükçe entegre devrenin fiyatı arttı.",
        "Entegre devre, elektronik cihazların üretimini tamamen durdurdu.",
        "Küçük ve ucuz cihazlar, entegre devrenin icadını engelledi.",
      ],
      "'allowed electronic devices to become smaller and cheaper' 'elektronik cihazların daha küçük ve ucuz hâle gelmesini sağladı' demektir.",
    ],
    [
      "The technique is now used in Wi-Fi and Bluetooth.",
      [
        "Bu teknik bugün Wi-Fi ve Bluetooth'ta kullanılmaktadır.",
        "Bu teknik, Wi-Fi ve Bluetooth icat edildikten sonra terk edilmiştir.",
        "Wi-Fi ve Bluetooth, bu tekniğin kullanılmasını engeller.",
        "Bu teknik yalnızca askeri amaçlarla kullanılmaktadır.",
        "Wi-Fi ve Bluetooth, bu teknikten çok önce geliştirilmiştir.",
      ],
      "'is now used in Wi-Fi and Bluetooth' 'bugün Wi-Fi ve Bluetooth'ta kullanılmaktadır' demektir.",
    ],
    [
      "Public-key cryptography allows two people to communicate securely without first meeting to share a secret code.",
      [
        "Açık anahtarlı şifreleme, iki kişinin gizli bir kod paylaşmak için önce buluşmadan güvenli biçimde iletişim kurmasını sağlar.",
        "Açık anahtarlı şifreleme, iki kişinin güvenli iletişim kurabilmesi için önce buluşmasını zorunlu kılar.",
        "İki kişi, gizli bir kod paylaşmadan hiçbir zaman güvenli biçimde iletişim kuramaz.",
        "Açık anahtarlı şifreleme, iki kişinin iletişimini herkese açık hâle getirir.",
        "Gizli kodlar, açık anahtarlı şifrelemenin icadından sonra yasaklandı.",
      ],
      "'allows two people to communicate securely' 'iki kişinin güvenli biçimde iletişim kurmasını sağlar', 'without first meeting to share a secret code' 'gizli bir kod paylaşmak için önce buluşmadan' demektir.",
    ],
    [
      "Data centres already account for a significant share of the world's electricity use.",
      [
        "Veri merkezleri, dünyadaki elektrik kullanımının şimdiden önemli bir bölümünü oluşturmaktadır.",
        "Veri merkezleri, dünyadaki elektrik kullanımının çok küçük ve önemsiz bir bölümünü oluşturmaktadır.",
        "Dünyadaki elektriğin büyük bölümü veri merkezlerinde üretilmektedir.",
        "Veri merkezleri, elektrik kullanmadan çalışabilmektedir.",
        "Elektrik kullanımı, veri merkezleri kapandıktan sonra artmıştır.",
      ],
      "'already account for a significant share' 'şimdiden önemli bir bölümünü oluşturmaktadır', 'of the world's electricity use' 'dünyadaki elektrik kullanımının' demektir.",
    ],
    [
      "Pumped storage works like a giant rechargeable battery.",
      [
        "Pompalı depolama, dev bir şarj edilebilir pil gibi çalışır.",
        "Pompalı depolama, dev pillerin şarj edilmesini engeller.",
        "Şarj edilebilir piller, pompalı depolama tesislerinde üretilir.",
        "Pompalı depolama, pillerden çok daha az enerji depolar.",
        "Pompalı depolama, pil kullanmadan çalışamaz.",
      ],
      "'works like a giant rechargeable battery' 'dev bir şarj edilebilir pil gibi çalışır' demektir.",
    ],
  ],
  trEn: [
    [
      "Hopper, ilk derleyicilerden birini geliştirdi.",
      [
        "Hopper developed one of the first compilers.",
        "Hopper used one of the first compilers developed by others.",
        "Hopper refused to develop a compiler.",
        "The first compilers were developed long after Hopper retired.",
        "Hopper developed the last compiler ever made.",
      ],
      "'ilk derleyicilerden birini geliştirdi' 'developed one of the first compilers' karşılığıdır.",
    ],
    [
      "Entegre devre, bir devrenin tüm parçalarını tek bir çip üzerinde birleştirir.",
      [
        "The integrated circuit combines all the parts of a circuit on a single chip.",
        "The integrated circuit separates the parts of a circuit onto many chips.",
        "A single chip cannot contain more than one part of a circuit.",
        "The parts of a circuit are connected by hand on an integrated circuit.",
        "Integrated circuits do not contain any electronic parts.",
      ],
      "'bir devrenin tüm parçalarını tek bir çip üzerinde birleştirir' 'combines all the parts of a circuit on a single chip' karşılığıdır.",
    ],
    [
      "Lamarr'ın buluşu, sinyallerin dinlenmesini zorlaştırıyordu.",
      [
        "Lamarr's invention made it difficult for signals to be intercepted.",
        "Lamarr's invention made it easy for signals to be intercepted.",
        "Lamarr's invention was intercepted by enemy forces.",
        "Signals made Lamarr's invention difficult to understand.",
        "Lamarr's invention prevented signals from being sent.",
      ],
      "'sinyallerin dinlenmesini zorlaştırıyordu' 'made it difficult for signals to be intercepted' karşılığıdır.",
    ],
    [
      "ARPANET, internetin öncüsü olarak kabul edilir.",
      [
        "ARPANET is regarded as the forerunner of the internet.",
        "ARPANET was developed long after the internet.",
        "The internet was used to create ARPANET.",
        "ARPANET has nothing to do with the internet.",
        "ARPANET replaced the internet in the 1970s.",
      ],
      "'internetin öncüsü olarak kabul edilir' 'is regarded as the forerunner of the internet' karşılığıdır.",
    ],
    [
      "Şifreleme, çevrimiçi alışverişin güvenli olmasını sağlar.",
      [
        "Encryption makes online shopping secure.",
        "Encryption makes online shopping impossible.",
        "Online shopping makes encryption unnecessary.",
        "Encryption is used only by governments.",
        "Online shopping was secure before encryption was invented.",
      ],
      "'çevrimiçi alışverişin güvenli olmasını sağlar' 'makes online shopping secure' karşılığıdır.",
    ],
    [
      "Pompalı depolama tesisleri, fazla elektriği daha sonra kullanmak üzere depolar.",
      [
        "Pumped storage plants store surplus electricity for later use.",
        "Pumped storage plants waste surplus electricity.",
        "Surplus electricity is used to build pumped storage plants.",
        "Pumped storage plants produce more electricity than they store.",
        "Pumped storage plants cannot store any electricity.",
      ],
      "'fazla elektriği daha sonra kullanmak üzere depolar' 'store surplus electricity for later use' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Hedy Lamarr, born in Vienna in 1914, became one of the most famous film stars in Hollywood in the 1940s. Few of her fans knew that she was also a keen inventor. During the Second World War, she learned that radio-controlled torpedoes could easily be jammed by the enemy, who only had to find the frequency being used and broadcast noise on it. Together with her neighbour, the composer George Antheil, she devised a solution: the transmitter and the receiver would switch rapidly between many different frequencies in the same pre-arranged sequence, so that the signal would never stay on one frequency long enough to be blocked or overheard. Antheil had experience of synchronising mechanical pianos, and the pair proposed using a similar mechanism with eighty-eight frequencies, the same as the number of keys on a piano. They received a patent in 1942 and offered the idea to the United States Navy, which did not use it during the war. Decades later, however, the principle of 'frequency hopping' was adopted in military communications, and a related technique is used today in Wi-Fi, Bluetooth and GPS. Lamarr's contribution was recognised only late in her life.",
      questions: [
        [
          "According to the passage, the problem Lamarr wanted to solve was that ----.",
          [
            "enemies could jam torpedo signals",
            "torpedoes were too slow to reach their targets",
            "pianos could not be synchronised",
            "radio signals could not travel long distances",
            "films could not be shown during the war",
          ],
          "Metne göre telsizle kontrol edilen torpidolar, düşmanın kullanılan frekansı bulup gürültü yayınlamasıyla kolayca bozulabiliyordu.",
        ],
        [
          "The writer mentions the number of keys on a piano in order to show ----.",
          [
            "how music shaped the design",
            "why the navy rejected the idea",
            "how many films Lamarr appeared in",
            "how torpedoes were built",
            "that the invention was a joke",
          ],
          "Seksen sekiz frekansın piyanodaki tuş sayısıyla aynı olması, Antheil'ın müzik bilgisinin tasarımı nasıl etkilediğini gösterir.",
        ],
        [
          "It can be understood from the passage that Lamarr's invention ----.",
          [
            "became important only many years after it was patented",
            "was used immediately by the navy",
            "was never put into practice",
            "was developed by the navy itself",
            "made Lamarr famous as a film star",
          ],
          "Donanmanın savaş sırasında kullanmaması ama ilkenin onlarca yıl sonra benimsenmesi, buluşun ancak patentten yıllar sonra önem kazandığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In the 1960s, the United States Department of Defense funded research into ways of connecting computers at different universities so that researchers could share resources. The result was ARPANET, a network that used a new method called packet switching. Instead of sending a message along a single dedicated line, as in a telephone call, the message was divided into small pieces, or packets, each of which could travel by a different route and be reassembled at the destination. This made the network more efficient and more robust, because if one connection failed, the packets could be sent another way. On 29 October 1969, a student at the University of California, Los Angeles, attempted to log in to a computer at Stanford Research Institute, more than five hundred kilometres away. He typed the letter 'L' and then 'O', but the system crashed before he could finish the word 'LOGIN'. About an hour later, the connection was restored and the full word was sent. Over the following years, ARPANET grew to include dozens of institutions, and email became its most popular use. In 1983, it adopted the communication rules that still form the basis of the internet today.",
      questions: [
        [
          "According to the passage, packet switching made the network more robust because ----.",
          [
            "packets could take another route if a connection failed",
            "messages were sent along a single line",
            "it used telephone lines",
            "it was faster than email",
            "packets could not be lost",
          ],
          "Metne göre bir bağlantı koptuğunda paketler başka bir yoldan gönderilebiliyordu.",
        ],
        [
          "It can be understood from the passage that the first message sent over ARPANET ----.",
          [
            "was only partly received at first",
            "was an email about the war",
            "travelled by telephone",
            "was sent from Stanford to Los Angeles",
            "contained a complete sentence",
          ],
          "Öğrencinin 'L' ve 'O' harflerini yazdıktan sonra sistemin çökmesi, ilk mesajın başta yalnızca kısmen alındığını gösterir.",
        ],
        [
          "The writer mentions the year 1983 in order to show ----.",
          [
            "when lasting rules were adopted",
            "when email was invented",
            "when ARPANET was closed down",
            "when the first message was sent",
            "when universities were first connected",
          ],
          "1983 yılının anılması, ARPANET'in bugün internetin temelini oluşturan iletişim kurallarını benimsediği zamanı gösterir.",
        ],
      ],
    },
    {
      text:
        "For most of history, secret communication depended on both the sender and the receiver knowing the same key, which was used to scramble and unscramble messages. The difficulty was distributing the key safely: if it was intercepted, the code could be broken. In 1976, the American researchers Whitfield Diffie and Martin Hellman published a radical solution, known as public-key cryptography. In this system, each person has two mathematically linked keys. One, the public key, can be shared openly and is used to encrypt messages, while the other, the private key, is kept secret and is the only way to decrypt them. Although the two keys are related, it is practically impossible to work out the private key from the public one, because doing so would require solving mathematical problems that would take even the fastest computers thousands of years. Public-key cryptography made it possible for people who had never met to communicate securely, and it now protects online banking, shopping and messaging. It later emerged that researchers at the British intelligence agency GCHQ had developed a similar system several years earlier, but their work had been kept secret until 1997.",
      questions: [
        [
          "According to the passage, the main weakness of traditional secret codes was that ----.",
          [
            "the shared key might be intercepted",
            "messages could not be scrambled",
            "computers could not process them",
            "they required two different keys",
            "they were too easy to understand",
          ],
          "Metne göre güçlük anahtarın güvenle dağıtılmasıydı; anahtar ele geçirilirse kod çözülebiliyordu.",
        ],
        [
          "It can be understood from the passage that the private key ----.",
          [
            "cannot realistically be calculated from the public key",
            "is shared openly with everyone",
            "is used to encrypt messages",
            "was invented by GCHQ in 1997",
            "is identical to the public key",
          ],
          "Özel anahtarı açık anahtardan çıkarmanın en hızlı bilgisayarlarla bile binlerce yıl süreceği belirtilir.",
        ],
        [
          "The writer mentions GCHQ in order to show that ----.",
          [
            "others had the idea first in secret",
            "Diffie and Hellman worked for British intelligence",
            "the system was invented in 1997",
            "public-key cryptography is not secure",
            "British researchers opposed the idea",
          ],
          "GCHQ araştırmacılarının birkaç yıl önce benzer bir sistem geliştirdiği ama çalışmalarının 1997'ye kadar gizli tutulduğu belirtilir.",
        ],
      ],
    },
    {
      text:
        "Every time people send an email, stream a film or use an online service, their data passes through data centres, large buildings filled with thousands of computers called servers. These centres consume enormous amounts of electricity, not only to run the servers but also to cool them, as the machines produce a great deal of heat and can fail if they become too hot. In some older centres, cooling has accounted for almost as much energy as the computing itself. In recent years, companies have found several ways to reduce this. Some have built data centres in cold places such as northern Scandinavia, where outside air or seawater can be used for cooling. Others use artificial intelligence to adjust cooling systems continuously, or place servers in tanks of special liquids that carry heat away more efficiently than air. In a few cities, the heat produced by data centres is captured and used to warm nearby homes. Despite these improvements, the rapid growth of online services, especially artificial intelligence, means that the total electricity used by data centres is rising quickly, and experts warn that this could make it harder for countries to meet their climate targets.",
      questions: [
        [
          "According to the passage, data centres use a lot of energy partly because ----.",
          [
            "the servers must be kept from overheating",
            "they are located in warm countries",
            "they are open only at night",
            "they use old types of computers",
            "they produce their own electricity",
          ],
          "Metne göre enerji yalnızca sunucuları çalıştırmak için değil, aşırı ısınmamaları için onları soğutmak için de kullanılır.",
        ],
        [
          "The writer mentions homes being warmed by data centres in order to show ----.",
          [
            "one way of making use of waste heat",
            "why data centres are built in cities",
            "how servers are cooled with liquids",
            "that data centres use little energy",
            "how artificial intelligence works",
          ],
          "Veri merkezlerinin ürettiği ısının yakındaki evleri ısıtmak için kullanılması, atık ısıdan yararlanma yollarından birini gösterir.",
        ],
        [
          "It can be inferred from the passage that improvements in efficiency ----.",
          [
            "have not been enough to stop total energy use from rising",
            "have solved the problem of energy use completely",
            "have made data centres unnecessary",
            "have reduced the number of online services",
            "have only been made in Scandinavia",
          ],
          "İyileştirmelere rağmen çevrimiçi hizmetlerin hızlı büyümesiyle toplam elektrik kullanımının hızla artması, verimlilik artışlarının yeterli olmadığını gösterir.",
        ],
      ],
    },
    {
      text:
        "One of the main challenges of renewable energy is that the wind does not always blow and the Sun does not always shine, so electricity must be stored for times when demand is high or generation is low. The most widely used method of storing large amounts of electricity is pumped storage hydropower. A pumped storage plant has two reservoirs at different heights. When electricity is plentiful and cheap, for example at night or on windy days, it is used to pump water from the lower reservoir to the upper one. When extra power is needed, the water is released downhill through turbines, generating electricity within minutes. Although some energy is lost in the process, around three-quarters of the electricity used for pumping is recovered. Pumped storage accounts for more than ninety per cent of the world's grid energy storage capacity. However, building new plants requires suitable sites with large differences in height, and the construction of dams and reservoirs can damage the environment and displace communities. For this reason, engineers are also developing alternatives, such as large batteries, and even systems that use old mines or lift heavy blocks to store energy.",
      questions: [
        [
          "According to the passage, water is pumped to the upper reservoir when ----.",
          [
            "electricity is cheap and plentiful",
            "demand for electricity is at its highest",
            "there is no wind or sunshine",
            "the turbines need repairing",
            "the lower reservoir is empty",
          ],
          "Metne göre elektrik bol ve ucuz olduğunda, örneğin geceleri ya da rüzgârlı günlerde, su yukarıdaki hazneye pompalanır.",
        ],
        [
          "It can be understood from the passage that pumped storage ----.",
          [
            "recovers most, but not all, of the energy used",
            "produces more energy than it uses",
            "loses almost all the energy used",
            "does not require any electricity",
            "is used only in a few countries",
          ],
          "Pompalamada kullanılan elektriğin yaklaşık dörtte üçünün geri kazanılması, enerjinin çoğunun ama tamamının değil geri alındığını gösterir.",
        ],
        [
          "The writer mentions old mines and heavy blocks in order to show ----.",
          [
            "that engineers are exploring other ways of storing energy",
            "how pumped storage plants are built",
            "why dams damage the environment",
            "where wind farms are located",
            "how batteries are recycled",
          ],
          "Eski madenler ve ağır blokların kullanıldığı sistemler, mühendislerin enerji depolamanın başka yollarını araştırdığını göstermek için anılır.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Many smartphone screens use a technology that detects the small electrical charge in a person's finger. ---- This is why they often do not respond when users are wearing ordinary gloves.",
      [
        "When the finger touches the glass, it changes the electrical field at that point.",
        "Smartphones have become one of the most widely used devices in the world.",
        "Screens are made from strong glass that resists scratches.",
        "Some people prefer to use a keyboard rather than a touchscreen.",
        "The first mobile phones were large and heavy.",
      ],
      "Boşluktan sonra 'This is why' ile eldivenle ekranın tepki vermediği söylenir; boşluğa parmağın cama dokunduğunda o noktadaki elektrik alanını değiştirdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The wireless technology known as Bluetooth was named after a tenth-century Danish king, Harald Bluetooth. ---- In the same way, the engineers hoped their technology would unite different devices.",
      [
        "He was famous for uniting several warring tribes into a single kingdom.",
        "Denmark is one of the oldest kingdoms in Europe.",
        "Many technologies are named after their inventors.",
        "Wireless headphones have become very popular.",
        "The Vikings travelled widely across Europe.",
      ],
      "Boşluktan sonra 'In the same way' ile mühendislerin teknolojinin farklı cihazları birleştirmesini umduğu söylenir; boşluğa kralın savaşan kabileleri tek bir krallıkta birleştirmesiyle ünlü olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "A flywheel stores energy in the form of a heavy wheel spinning at high speed. ---- Flywheels are used, for example, to keep the power supply stable in some electricity networks.",
      [
        "When energy is needed, the spinning wheel can drive a generator.",
        "Wheels were invented in Mesopotamia thousands of years ago.",
        "Many machines contain gears made of metal.",
        "Electricity networks must balance supply and demand at all times.",
        "Some toys contain small spinning wheels.",
      ],
      "Boşluktan önce volanın enerjiyi nasıl depoladığı, sonra kullanım alanı anlatılır; boşluğa enerji gerektiğinde dönen tekerin bir jeneratörü çalıştırabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Biofuels are fuels made from plants or other biological material. ---- However, critics argue that growing crops for fuel can take land away from food production.",
      [
        "Supporters say they can reduce dependence on fossil fuels.",
        "Plants use sunlight to produce their own food.",
        "Many farmers grow wheat, maize and soya beans.",
        "Fuel prices have risen sharply in some years.",
        "Cars were first powered by petrol at the end of the nineteenth century.",
      ],
      "Boşluktan sonra 'However' ile eleştirmenlerin görüşü verilir; boşluğa bununla karşıtlık oluşturan destekçilerin görüşünü, yani fosil yakıtlara bağımlılığı azaltabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "Wave power devices capture energy from the up-and-down motion of ocean waves. ---- As a result, few wave power projects have yet produced electricity on a commercial scale.",
      [
        "However, the devices must survive powerful storms and constant corrosion by seawater.",
        "Waves are usually largest along coasts facing the open ocean.",
        "Surfers travel around the world in search of large waves.",
        "Tides are caused mainly by the gravity of the Moon.",
        "Many coastal towns depend on fishing and tourism.",
      ],
      "Boşluktan sonra 'As a result' ile az sayıda projenin ticari ölçekte elektrik ürettiği söylenir; boşluğa cihazların güçlü fırtınalara ve deniz suyunun aşındırmasına dayanmak zorunda olduğunu söyleyen 'However' cümlesi gelmelidir.",
    ],
    [
      "Cloud computing allows people and companies to store data and run programs on remote servers rather than on their own computers. ---- Critics point out, however, that users depend on the service provider and must trust it to keep their data safe.",
      [
        "This can reduce costs and make it easy to access files from anywhere.",
        "Clouds are formed when water vapour in the air condenses.",
        "Many people still keep paper copies of important documents.",
        "Personal computers became common in the 1980s.",
        "Some companies employ thousands of programmers.",
      ],
      "Boşluktan sonra 'however' ile eleştiriler verilir; boşluğa bulut bilişimin maliyeti düşürüp dosyalara her yerden erişimi kolaylaştırdığını söyleyen avantaj cümlesi gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Barcodes allow shops to identify products quickly at the checkout.",
        "A scanner reads the pattern of black and white lines.",
        "The code is linked to a database containing the product's name and price.",
        "Many supermarkets are open twenty-four hours a day.",
        "This system has also made it easier to keep track of stock.",
      ],
      odd: 3,
      why: "Parça barkodların nasıl çalıştığını anlatır. Pek çok süpermarketin yirmi dört saat açık olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Discarded electronic devices are piling up around the world.",
        "Old phones and computers contain valuable metals such as gold and copper.",
        "Gold has been used to make jewellery for thousands of years.",
        "However, they also contain toxic substances such as lead and mercury.",
        "Only a small proportion of electronic waste is currently recycled.",
      ],
      odd: 2,
      why: "Parça elektronik atıkları anlatır. Altının binlerce yıldır takı yapımında kullanıldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "GPS receivers calculate their position using signals from satellites.",
        "Each satellite carries an extremely accurate clock.",
        "By comparing the time signals from several satellites, the receiver can work out how far away each one is.",
        "Many people use maps on their phones when travelling abroad.",
        "Even tiny errors in timing would lead to large errors in position.",
      ],
      odd: 3,
      why: "Parça GPS alıcılarının konumu nasıl hesapladığını anlatır. Pek çok kişinin yurt dışında telefonlarında harita kullandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Quantum dots are tiny crystals only a few nanometres across.",
        "Their colour depends on their size.",
        "Painters in the past made colours from minerals and plants.",
        "Smaller dots give off blue light, while larger ones give off red light.",
        "They are now used in some television screens to produce brighter colours.",
      ],
      odd: 2,
      why: "Parça kuantum noktalarını anlatır. Geçmişte ressamların renkleri mineral ve bitkilerden yaptığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Smart meters record how much electricity a household uses.",
        "They send the information automatically to the energy company.",
        "Customers can see their use in real time and find ways to save energy.",
        "Energy companies can also use the data to plan supply more efficiently.",
        "Many families watch television together in the evening.",
      ],
      odd: 4,
      why: "Parça akıllı sayaçları anlatır. Pek çok ailenin akşamları birlikte televizyon izlediğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Fibre-optic cables carry most of the world's internet traffic under the sea.",
        "Sharks have occasionally been filmed biting the cables.",
        "To protect them, the cables near the shore are covered with steel and buried.",
        "Many fish live in shallow coastal waters.",
        "Damage to a single cable can slow internet connections for whole countries.",
      ],
      odd: 3,
      why: "Parça denizaltı fiber optik kablolarını ve korunmalarını anlatır. Pek çok balığın sığ kıyı sularında yaşadığını söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
