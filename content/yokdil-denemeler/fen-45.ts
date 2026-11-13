import type { YokdilDeneme } from "./types";

export const FEN_45: YokdilDeneme = {
  no: 45,
  field: "fen",
  vocab: [
    [
      "Radio operators around the world could ---- the satellite's simple beeping signal.",
      ["detect", "repair", "destroy", "translate", "invent"],
      "Dünyanın dört bir yanındaki radyo operatörlerinin uydunun basit bip sinyalini 'algılayabildiği' (detect) anlatılır.",
    ],
    [
      "The teacher calculated that a rocket's final speed depends on the speed of its exhaust and the ---- of its fuel.",
      ["mass", "colour", "price", "taste", "age"],
      "Öğretmenin bir roketin son hızının egzoz hızına ve yakıtının 'kütlesine' (mass) bağlı olduğunu hesapladığı anlatılır.",
    ],
    [
      "After the explosion, the crew had to ---- power and water to survive the journey home.",
      ["conserve", "waste", "export", "sell", "increase"],
      "Patlamadan sonra mürettebatın eve dönüş yolculuğunda hayatta kalmak için enerji ve suyu 'idareli kullanmak' (conserve) zorunda olduğu anlatılır.",
    ],
    [
      "The astronaut insisted that the mathematician ---- the computer's figures by hand before the flight.",
      ["check", "ignore", "delete", "copy", "print"],
      "Astronotun uçuştan önce matematikçinin bilgisayarın rakamlarını elle 'kontrol etmesinde' (check) ısrar ettiği anlatılır.",
    ],
    [
      "The lander ---- twice before coming to rest in the shadow of a cliff.",
      ["bounced", "melted", "exploded", "sank", "flew"],
      "İniş aracının bir uçurumun gölgesinde durmadan önce iki kez 'sektiği' (bounced) anlatılır.",
    ],
    [
      "The engineers had to ---- the problem of flying in an atmosphere much thinner than the Earth's.",
      ["deal with", "take after", "run out of", "look down on", "put up with"],
      "Mühendislerin Dünya'nınkinden çok daha ince bir atmosferde uçma sorunuyla 'başa çıkmak' (deal with) zorunda olduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before Sputnik was launched, no human-made object ---- the Earth.",
      ["had orbited", "orbits", "has orbited", "will orbit", "is orbiting"],
      "Fırlatmadan önceki durum: 'had orbited'.",
    ],
    [
      "By the time rockets were actually built, Tsiolkovsky ---- the basic principles of spaceflight for decades.",
      ["had been describing", "describes", "will describe", "is describing", "has been described"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been describing'.",
    ],
    [
      "If the explosion had occurred on the way back from the Moon, the crew ---- able to use the lunar module.",
      ["would not have been", "will not be", "are not", "had not been", "are not being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would not have been'.",
    ],
    [
      "The calculations ---- by hand by a team of women mathematicians.",
      ["were carried out", "carried out", "have carried out", "are carrying out", "carry out"],
      "Hesaplar yapılmıştır; edilgen geçmiş zaman: 'were carried out'.",
    ],
    [
      "---- the lander's harpoons failed to fire, it still sent back valuable data.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Zıpkınların ateşlenmemesi ile değerli veri göndermesi zıttır: 'Although'.",
    ],
    [
      "The engineer, ---- identity was kept secret during his lifetime, led the Soviet space programme.",
      ["whose", "which", "who", "whom", "where"],
      "Mühendisin kimliği; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "One team used metric units and the other used imperial units, ---- caused the spacecraft to be lost.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The thinner the air, ---- the helicopter's blades had to spin.",
      ["the faster", "the fastest", "faster than", "more fast", "so fast"],
      "'The thinner ..., the faster ...' paralel yapısı: 'the faster'.",
    ],
    [
      "No sooner had the satellite reached orbit ---- radio stations began broadcasting its signal.",
      ["than", "when", "until", "since", "while"],
      "'No sooner ... than' yapısı: 'than'.",
    ],
    [
      "The crew moved into the lunar module ---- they could use its supplies of oxygen and power.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The company aimed ---- the cost of spaceflight by reusing rockets.",
      ["to reduce", "reducing", "reduce", "reduced", "to reducing"],
      "'aim to do sth' kalıbı: 'to reduce'.",
    ],
    [
      "The dog is now known ---- within a few hours of the launch.",
      ["to have died", "dying", "to die", "died", "to be dying"],
      "Geçmişe ait bir olay için mastarın geçmiş biçimi: 'to have died'.",
    ],
    [
      "The station was so heavy ---- parts of it survived re-entry and fell on Australia.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Investigators recommended that all teams ---- the same system of units.",
      ["use", "uses", "used", "to use", "using"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'use'.",
    ],
  ],
  cloze: [
    {
      text:
        "On 4 October 1957, the Soviet Union launched Sputnik 1, the first artificial satellite, from a site in what is now Kazakhstan. The satellite was a polished metal sphere about fifty-eight centimetres across, with four long antennas, and it weighed about eighty-four kilograms. It orbited the Earth once every ninety-six minutes, {1} its radio transmitters sent out a simple beeping signal that could be picked up by amateur radio operators around the world. The batteries ran out after three weeks, and the satellite burned up when it fell back into the atmosphere in January 1958. Although Sputnik carried no scientific instruments apart from its radio, its launch had enormous political consequences. In the United States, {2} the Cold War with the Soviet Union was at its height, many people were shocked that their rival had taken the lead in space. If the Soviets could launch a satellite, they reasoned, they could also launch nuclear missiles that could reach America. The 'Sputnik crisis' led the American government to increase spending on science and education dramatically, {3} in 1958 it created NASA, a civilian space agency. A month after Sputnik 1, the Soviets launched Sputnik 2, {4} carried a dog named Laika. The competition between the two superpowers, {5} became known as the Space Race, culminated in the American Moon landing of 1969.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Yörüngede dönmesi ve sinyal göndermesi birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["where", "which", "whose", "when", "who"],
          "ABD'yi (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "until"],
          "Harcamaların artırılması ve NASA'nın kurulması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra Sputnik 2'yi niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(25) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgüller arasında rekabeti niteleyen ve özne görevindeki ilgi zamiri: 'which'.",
        ],
      ],
    },
    {
      text:
        "Konstantin Tsiolkovsky, born in 1857 in a village in Russia, lost most of his hearing after an illness at the age of ten and was largely self-educated, studying science and mathematics in libraries in Moscow. He worked for most of his life as a schoolteacher in the provincial town of Kaluga, {1} he carried out research in his spare time, often with little money or recognition. Inspired partly by the novels of Jules Verne, he became fascinated by the idea of travelling into space. In 1903, he published an article that set out the basic mathematics of rocket flight. He demonstrated mathematically that rockets would function even where there is no air, {2} it pushes against its own exhaust rather than against the air. His famous equation relates the change in a rocket's speed to the speed of its exhaust gases and the ratio of its mass with and without fuel. From this, he concluded that a rocket powered by liquid fuel, {3} as hydrogen and oxygen, would be needed to reach orbit, and that multi-stage rockets, which drop empty fuel tanks as they climb, would be more efficient. He also wrote about space stations, airlocks and the possibility of humans living in space. His work was little known outside Russia during his lifetime, {4} after his death in 1935 he was honoured by the Soviet state as a founder of cosmonautics. His often-quoted remark that the Earth is the cradle of humanity, but one cannot live in the cradle {5}, has inspired generations of space scientists.",
      blanks: [
        [
          "(26) ----",
          ["where", "which", "whose", "when", "who"],
          "Kaluga'yı (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(27) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Roketin boşlukta çalışabilmesinin nedeni kendi egzozuna itmesidir: 'because'.",
        ],
        [
          "(28) ----",
          ["such", "so", "like", "as", "for"],
          "'Örneğin' anlamında örnek veren 'such as' kalıbı gerekir: 'such'.",
        ],
        [
          "(29) ----",
          ["but", "so", "or", "because", "unless"],
          "Yaşarken az bilinmesi ile ölümünden sonra onurlandırılması zıttır: 'but'.",
        ],
        [
          "(30) ----",
          ["forever", "yet", "already", "still", "ever since"],
          "Beşikte 'sonsuza dek' yaşanamaz: 'forever'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Sputnik carried no scientific instruments, ----.",
      [
        "its political impact was enormous",
        "it was made of metal",
        "it had four antennas",
        "Kazakhstan is a large country",
        "amateur radio operators in many countries tried to record its signal and send the recordings to newspapers",
      ],
      "'Although' zıtlık ister: Sputnik bilimsel alet taşımasa da siyasi etkisi çok büyüktü.",
    ],
    [
      "----, Tsiolkovsky educated himself in libraries.",
      [
        "Having lost much of his hearing as a child",
        "Although Kaluga is a town",
        "Unless rockets were built",
        "Since Jules Verne wrote novels",
        "While the Soviet government was honouring him as one of the founders of cosmonautics after his death",
      ],
      "Çocukken işitmesinin çoğunu kaybetmiş olan Tsiolkovsky kendini kütüphanelerde eğitti.",
    ],
    [
      "If a spacecraft is damaged far from Earth, ----.",
      [
        "the crew may have to improvise solutions",
        "the Moon has no air",
        "rockets use fuel",
        "space is very cold",
        "the engineers on the ground would have needed several months to design and build a replacement for the damaged part",
      ],
      "Birinci tip koşul: bir uzay aracı Dünya'dan uzakta hasar görürse mürettebat çözümler üretmek zorunda kalabilir.",
    ],
    [
      "Glenn asked for Johnson to check the computer's calculations ----.",
      [
        "because he trusted her more than the new machines",
        "although she was a mathematician",
        "unless the flight was delayed",
        "so that he was an astronaut",
        "while NASA was preparing to send astronauts on longer and more complicated missions around the Moon",
      ],
      "Glenn yeni makinelerden çok ona güvendiği için Johnson'ın bilgisayarın hesaplarını kontrol etmesini istedi.",
    ],
    [
      "Not only did Philae land on a comet, ----.",
      [
        "but it also sent back data from its surface",
        "and comets have tails",
        "since the journey was long",
        "so the mission was European",
        "unless the scientists had chosen a landing site that was in sunlight for most of the comet's day",
      ],
      "'Not only ... but also' yapısı tamamlanır: Philae bir kuyruklu yıldıza inmekle kalmadı, yüzeyinden veri de gönderdi.",
    ],
    [
      "Once Ingenuity had made its first flight, ----.",
      [
        "engineers planned many more flights",
        "Mars is red",
        "helicopters have blades",
        "the rover was large",
        "the scientists who designed it had tested it in a chamber on Earth that imitated the thin Martian air",
      ],
      "Ingenuity ilk uçuşunu yaptıktan sonra mühendisler çok daha fazla uçuş planladı.",
    ],
    [
      "The spacecraft was lost ----.",
      [
        "because two teams used different units of measurement",
        "although Mars is far away",
        "unless the engines failed",
        "so that it was expensive",
        "while scientists were waiting for it to begin studying the climate and the atmosphere of the planet",
      ],
      "Uzay aracı iki ekip farklı ölçü birimleri kullandığı için kayboldu.",
    ],
    [
      "Since Laika's capsule was not designed to return to Earth, ----.",
      [
        "she was never expected to survive",
        "dogs are loyal",
        "Moscow is cold",
        "she was small",
        "the scientists who trained her had chosen her partly because she had lived on the streets and was used to the cold",
      ],
      "'Since' neden bildirir: Laika'nın kapsülü Dünya'ya dönecek şekilde tasarlanmadığı için hayatta kalması hiç beklenmiyordu.",
    ],
    [
      "Unless the booster could land safely, ----.",
      [
        "it could not be reused",
        "rockets are tall",
        "Florida is warm",
        "the company is private",
        "the satellites that it was carrying would have needed to be launched by another company at a much higher cost",
      ],
      "'Unless' olumsuz koşul: itici roket güvenle inemeseydi yeniden kullanılamazdı.",
    ],
    [
      "Korolev's name was kept secret ----.",
      [
        "to protect him from foreign agents",
        "although he was famous",
        "unless he retired",
        "because rockets are dangerous",
        "while the Soviet Union was launching satellites and sending the first human into orbit around the Earth",
      ],
      "Korolev'in adı onu yabancı ajanlardan korumak için gizli tutuldu.",
    ],
    [
      "Even though Skylab fell over a remote area, ----.",
      [
        "some pieces landed near a small town",
        "Australia is large",
        "the station was American",
        "it orbited for years",
        "the space agency had originally planned to use the space shuttle to raise its orbit and keep it in space",
      ],
      "'Even though' zıtlık ister: Skylab ıssız bir bölgeye düşse de bazı parçalar küçük bir kasabanın yakınına indi.",
    ],
  ],
  enTr: [
    [
      "The satellite's signal could be picked up by amateur radio operators around the world.",
      [
        "Uydunun sinyali dünyanın dört bir yanındaki amatör radyo operatörleri tarafından alınabiliyordu.",
        "Uydunun sinyali yalnızca Sovyet bilim insanlarınca alınabiliyordu.",
        "Dünyanın dört bir yanındaki amatör radyo operatörleri, uyduya kendi sinyallerini göndermeye çalıştı ama hiçbir yanıt alamadı.",
        "Uydu radyo operatörlerinin sinyallerini kaydetti.",
        "Sinyal hiçbir zaman alınamadı.",
      ],
      "'The satellite's signal could be picked up' 'uydunun sinyali alınabiliyordu', 'by amateur radio operators around the world' 'dünyanın dört bir yanındaki amatör radyo operatörleri tarafından' karşılığıdır.",
    ],
    [
      "A rocket works in space because it pushes against its own exhaust.",
      [
        "Bir roket kendi egzozuna ittiği için uzayda çalışır.",
        "Bir roket uzayda havaya ittiği için çalışır.",
        "Kendi egzozuna itemeyen roketler, uzayda hareket edebilmek için güneş ışığından ve yıldızların çekim gücünden yararlanmak zorundadır.",
        "Roketler uzayda çalışamaz.",
        "Egzoz roketi durdurur.",
      ],
      "'A rocket works in space' 'bir roket uzayda çalışır', 'because it pushes against its own exhaust' 'kendi egzozuna ittiği için' karşılığıdır.",
    ],
    [
      "The crew used the lunar module as a lifeboat.",
      [
        "Mürettebat ay modülünü cankurtaran sandalı olarak kullandı.",
        "Mürettebat ay modülünü Ay'a inmek için kullandı.",
        "Cankurtaran sandalı olarak tasarlanan ay modülü, mürettebatın Ay yüzeyinde daha uzun süre kalmasını sağlamak amacıyla geliştirildi.",
        "Ay modülü mürettebatı terk etti.",
        "Mürettebat hiçbir modül kullanmadı.",
      ],
      "'used the lunar module' 'ay modülünü kullandı', 'as a lifeboat' 'cankurtaran sandalı olarak' karşılığıdır.",
    ],
    [
      "Her calculations were trusted even after electronic computers were introduced.",
      [
        "Elektronik bilgisayarlar kullanılmaya başlandıktan sonra bile onun hesaplarına güvenildi.",
        "Elektronik bilgisayarlar onun hesaplarını yanlış buldu.",
        "Elektronik bilgisayarlar kullanılmaya başlanmadan önce hesaplarına güvenilmeyen matematikçi, makinelerin gelişiyle birlikte işinden ayrılmak zorunda kaldı.",
        "Onun hesapları bilgisayarlar tarafından yapıldı.",
        "Bilgisayarlar hiç kullanılmadı.",
      ],
      "'Her calculations were trusted' 'onun hesaplarına güvenildi', 'even after electronic computers were introduced' 'elektronik bilgisayarlar kullanılmaya başlandıktan sonra bile' karşılığıdır.",
    ],
    [
      "The lander's batteries ran out after about sixty hours on the surface.",
      [
        "İniş aracının pilleri yüzeyde yaklaşık altmış saat sonra tükendi.",
        "İniş aracının pilleri yüzeyde altmış gün boyunca çalıştı.",
        "Yüzeyde altmış saat kalması planlanan iniş aracı, pilleri dolu olmasına rağmen iletişim kuramadığı için hiçbir veri gönderemedi.",
        "Piller yüzeye inmeden önce şarj edildi.",
        "İniş aracının pili yoktu.",
      ],
      "'The lander's batteries ran out' 'iniş aracının pilleri tükendi', 'after about sixty hours on the surface' 'yüzeyde yaklaşık altmış saat sonra' karşılığıdır.",
    ],
    [
      "No aircraft had ever made a controlled, engine-driven flight anywhere but Earth before.",
      [
        "Bu, başka bir gezegende yapılan ilk motorlu ve kontrollü uçuştu.",
        "Bu, Dünya'da yapılan son uçuştu.",
        "Başka bir gezegende yapılması planlanan ilk motorlu uçuş, ince atmosfer nedeniyle gerçekleştirilemedi ve proje iptal edildi.",
        "Uçuş, kontrol edilemeyen bir balonla yapıldı.",
        "Başka gezegenlerde uçuş imkânsızdır.",
      ],
      "Cümle anlamca 'daha önce hiçbir hava aracı Dünya dışında motorlu ve kontrollü bir uçuş yapmamıştı', yani 'bu, başka bir gezegende yapılan ilk motorlu ve kontrollü uçuştu' demektir.",
    ],
  ],
  trEn: [
    [
      "Sputnik'in fırlatılması Amerika'da büyük bir şok yarattı.",
      [
        "The launch of Sputnik caused a great shock in America.",
        "America launched Sputnik to shock the Soviet Union.",
        "The launch of Sputnik was hardly noticed in America, because most newspapers were reporting on other events at the time.",
        "Sputnik was launched from America.",
        "The shock caused Sputnik to fall.",
      ],
      "'Sputnik'in fırlatılması' 'the launch of Sputnik', 'Amerika'da büyük bir şok yarattı' 'caused a great shock in America' karşılığıdır.",
    ],
    [
      "Tsiolkovsky, çok aşamalı roketlerin daha verimli olacağını öne sürdü.",
      [
        "Tsiolkovsky suggested that multi-stage rockets would be more efficient.",
        "Tsiolkovsky built the first multi-stage rocket.",
        "Tsiolkovsky believed that multi-stage rockets would be too heavy to reach orbit and recommended building very large single rockets instead.",
        "Multi-stage rockets were invented before Tsiolkovsky.",
        "Tsiolkovsky never wrote about rockets.",
      ],
      "'çok aşamalı roketlerin daha verimli olacağını' 'that multi-stage rockets would be more efficient', 'öne sürdü' 'suggested' karşılığıdır.",
    ],
    [
      "Mürettebat, Dünya'ya güvenle döndü.",
      [
        "The crew returned safely to Earth.",
        "The crew never returned to Earth.",
        "The crew was unable to return to Earth for several months and had to wait for a rescue mission to be sent from the ground.",
        "The crew landed on the Moon.",
        "The Earth returned the crew.",
      ],
      "'Dünya'ya' 'to Earth', 'güvenle döndü' 'returned safely' karşılığıdır.",
    ],
    [
      "Johnson'ın yörünge hesapları uzay görevlerinin başarısında hayati rol oynadı.",
      [
        "Johnson's orbital calculations played a vital role in the success of space missions.",
        "Johnson's calculations caused space missions to fail.",
        "Johnson's calculations were never used in space missions, because NASA preferred to rely entirely on electronic computers from the beginning.",
        "Space missions calculated Johnson's orbit.",
        "Johnson flew on space missions.",
      ],
      "'Johnson'ın yörünge hesapları' 'Johnson's orbital calculations', 'uzay görevlerinin başarısında hayati rol oynadı' 'played a vital role in the success of space missions' karşılığıdır.",
    ],
    [
      "Uzay aracı on yıllık bir yolculuktan sonra kuyruklu yıldıza ulaştı.",
      [
        "The spacecraft reached the comet after a ten-year journey.",
        "The comet reached the spacecraft ten years later.",
        "The spacecraft was supposed to reach the comet after ten years, but it was destroyed by dust soon after leaving the Earth.",
        "The journey to the comet took ten days.",
        "The spacecraft was launched from the comet.",
      ],
      "'on yıllık bir yolculuktan sonra' 'after a ten-year journey', 'uzay aracı kuyruklu yıldıza ulaştı' 'the spacecraft reached the comet' karşılığıdır.",
    ],
    [
      "Helikopter, planlanan beş uçuş yerine yetmiş iki uçuş yaptı.",
      [
        "The helicopter made seventy-two flights instead of the five that had been planned.",
        "The helicopter made only five of the seventy-two planned flights.",
        "The helicopter was planned to make seventy-two flights, but it crashed after the fifth one and could not be repaired.",
        "Seventy-two helicopters were sent.",
        "The helicopter never flew.",
      ],
      "'planlanan beş uçuş yerine' 'instead of the five that had been planned', 'yetmiş iki uçuş yaptı' 'made seventy-two flights' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "On 13 April 1970, Apollo 13 was about fifty-six hours into its journey to the Moon when an oxygen tank in the service module exploded, damaging the spacecraft's main supply of electricity, water and oxygen. The commander, Jim Lovell, reported the problem with the words 'Houston, we've had a problem.' The planned Moon landing had to be abandoned, and the immediate question was whether the three astronauts could survive the journey back to Earth. Engineers at mission control in Houston decided that the crew should move into the lunar module, the small craft designed to land on the Moon, and use it as a 'lifeboat', since its systems were undamaged. The module, however, had been designed to support two men for about two days, not three men for four. Power and water had to be strictly rationed, the temperature fell to near freezing, and carbon dioxide began to build up dangerously in the cabin because the filters in the lunar module were not compatible with those from the main spacecraft: one was square, the other round. Engineers on the ground devised a way of connecting them using materials available on board, including plastic bags, cardboard and tape, and read the instructions to the crew. The spacecraft swung around the Moon and returned, and on 17 April the astronauts landed safely in the Pacific Ocean.",
      questions: [
        [
          "According to the passage, the crew used the lunar module because ----.",
          [
            "its systems had not been damaged",
            "it was larger than the main spacecraft",
            "they wanted to land on the Moon",
            "it had been designed to carry three astronauts for a long journey back to Earth",
            "it had more fuel",
          ],
          "Metne göre sistemleri hasar görmemişti.",
        ],
        [
          "The problem with the carbon dioxide filters arose because ----.",
          [
            "the filters from the two craft had different shapes",
            "the filters had been lost",
            "the astronauts forgot to change them",
            "the engineers on the ground had sent the wrong instructions to the crew",
            "the explosion destroyed them",
          ],
          "Biri kare biri yuvarlak olduğu için filtreler uyumlu değildi.",
        ],
        [
          "It can be understood from the passage that the solution to the filter problem ----.",
          [
            "relied on improvised materials",
            "required new equipment from Earth",
            "was found by the astronauts alone",
            "was planned before the mission in case such an accident ever occurred",
            "failed",
          ],
          "Gemide bulunan plastik torba, karton ve bant gibi malzemelerle çözüldü.",
        ],
      ],
    },
    {
      text:
        "Katherine Johnson, born in West Virginia in 1918, showed a remarkable talent for mathematics from an early age and graduated from university at eighteen. In 1953, she joined a group of African American women employed as 'computers' at the National Advisory Committee for Aeronautics, which later became NASA, in Hampton, Virginia. At the time, the state's laws required racial segregation, and the Black mathematicians worked in a separate office and used separate facilities. Johnson's skill in analytic geometry soon led to her being assigned to a team of engineers working on flight research. When the United States began its human spaceflight programme, she calculated the trajectory for Alan Shepard's flight in 1961, the first American journey into space. In 1962, as the astronaut John Glenn prepared to become the first American to orbit the Earth, NASA used electronic computers to calculate his flight path. Glenn, however, reportedly asked engineers to 'get the girl' to check the figures by hand, saying that if she said they were good, he was ready to go. She later worked on calculations for the Apollo missions to the Moon. Her contribution, and that of her colleagues, received little public recognition for decades, until a book and a popular film in 2016 told their story. In 2015, at the age of ninety-seven, she was awarded the Presidential Medal of Freedom.",
      questions: [
        [
          "According to the passage, the Black mathematicians at Hampton ----.",
          [
            "worked under segregated conditions",
            "were the only computers at NASA",
            "designed the electronic computers",
            "were allowed to work alongside the engineers from the very first day they joined",
            "were all astronauts",
          ],
          "Metne göre eyalet yasaları ırk ayrımını zorunlu kıldığı için ayrı ofiste çalışıyorlardı.",
        ],
        [
          "Glenn's request suggests that he ----.",
          [
            "had great confidence in Johnson's accuracy",
            "did not trust Johnson",
            "had calculated the orbit himself",
            "preferred to rely entirely on the electronic computers that NASA had just bought",
            "wanted to delay the flight",
          ],
          "Onun onaylaması halinde uçuşa hazır olduğunu söylemesi büyük güven duyduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that recognition of Johnson's work ----.",
          [
            "came late in her life",
            "was immediate",
            "was limited to the Apollo missions",
            "came mainly from the astronauts who had flown on the missions that she helped to plan",
            "never came",
          ],
          "Katkıları onlarca yıl kamuoyunca pek tanınmadı; 2015 ve 2016'da tanındı.",
        ],
      ],
    },
    {
      text:
        "In 2004, the European Space Agency launched the Rosetta spacecraft towards a comet, a small icy body known as 67P. After a ten-year journey of more than six billion kilometres, during which it swung past the Earth and Mars to gain speed, Rosetta reached the comet in August 2014 and began to orbit it, studying its surface and the gas and dust surrounding it. The comet turned out to have an unusual shape, with two lobes joined by a narrow neck, which some compared to a rubber duck. On 12 November 2014, Rosetta released a small lander, Philae, which descended slowly towards the surface. Because the comet's gravity is extremely weak, Philae was designed to fire harpoons into the ground to anchor itself, but they failed to work. As a result, the lander bounced twice, travelling about a kilometre, and came to rest in a shadowed area near a cliff, where its solar panels received too little sunlight to recharge its batteries. Nevertheless, during about sixty hours of operation on its primary battery, Philae carried out most of its planned experiments and sent back data, including the detection of organic molecules. It then fell silent. In 2016, Rosetta's cameras finally located the lander wedged in a crack, and the mission ended when Rosetta itself was guided to a controlled landing on the comet.",
      questions: [
        [
          "According to the passage, Rosetta passed the Earth and Mars in order to ----.",
          [
            "increase its speed",
            "take photographs",
            "test its instruments",
            "drop off a small lander that would study the surfaces of the two planets",
            "avoid the comet",
          ],
          "Metne göre hız kazanmak için Dünya ve Mars'ın yanından geçti.",
        ],
        [
          "Philae bounced after landing because ----.",
          [
            "its anchoring harpoons did not work",
            "the comet's gravity was very strong",
            "its batteries were flat",
            "Rosetta released it from too great a height above the surface of the comet",
            "it landed on ice",
          ],
          "Zıpkınlar çalışmadığı için kendini sabitleyemedi.",
        ],
        [
          "It can be understood from the passage that Philae's location ----.",
          [
            "prevented it from recharging",
            "was chosen in advance",
            "was in full sunlight",
            "allowed it to operate for many months after the landing",
            "was never discovered",
          ],
          "Gölgede kaldığı için güneş panelleri pillerini şarj edecek kadar ışık alamadı.",
        ],
      ],
    },
    {
      text:
        "On 19 April 2021, a small helicopter named Ingenuity lifted off from the surface of Mars, rose about three metres, hovered for around thirty seconds and landed again. It was the first powered, controlled flight by an aircraft on another planet. Flying on Mars is extremely difficult because the atmosphere is only about one per cent as dense as the Earth's at sea level, so there is little air for rotor blades to push against. To generate enough lift, Ingenuity, which weighed only 1.8 kilograms, had two sets of long carbon-fibre blades that spun in opposite directions at about 2,500 revolutions per minute, several times faster than those of a typical helicopter on Earth. Because radio signals take several minutes to travel between Earth and Mars, the helicopter could not be controlled in real time; it flew automatically, using cameras and sensors to navigate. It also had to survive nights on Mars, when temperatures fall below minus eighty degrees Celsius, using a small heater powered by its solar-charged batteries. Ingenuity had been designed as a technology demonstration expected to make up to five flights over about a month. Instead, it made seventy-two flights over nearly three years, scouting routes for the Perseverance rover that had carried it to Mars, before damage to its blades ended the mission in January 2024.",
      questions: [
        [
          "According to the passage, flying on Mars is difficult mainly because ----.",
          [
            "the atmosphere is very thin",
            "gravity is very strong",
            "the surface is rocky",
            "the helicopter was too heavy to be lifted by blades of any size on the planet",
            "there is too much wind",
          ],
          "Metne göre atmosfer Dünya'nınkinin yaklaşık yüzde biri yoğunluğundadır.",
        ],
        [
          "Ingenuity flew automatically because ----.",
          [
            "signals take too long to travel between the planets",
            "its pilots were on Mars",
            "it had no cameras",
            "the engineers preferred not to control it in order to save electricity",
            "it was too small",
          ],
          "Radyo sinyalleri Dünya ile Mars arasında birkaç dakikada gittiği için gerçek zamanlı kontrol edilemiyordu.",
        ],
        [
          "It can be understood from the passage that the mission ----.",
          [
            "greatly exceeded expectations",
            "failed after the first flight",
            "lasted exactly one month",
            "was planned from the beginning to make more than seventy flights over several years",
            "did not help the rover",
          ],
          "Beş uçuş beklenirken üç yılda yetmiş iki uçuş yaptı.",
        ],
      ],
    },
    {
      text:
        "In December 1998, NASA launched the Mars Climate Orbiter, a spacecraft designed to study the Martian weather and climate and to act as a communications relay for a lander that was to follow. After a journey of more than nine months, the spacecraft reached Mars on 23 September 1999 and fired its engine to enter orbit. Shortly afterwards, contact was lost, and it was never heard from again. An investigation found that the spacecraft had approached the planet far too closely, at an altitude of about fifty-seven kilometres instead of the planned one hundred and fifty, and had probably been destroyed in the atmosphere or skipped back into space. The cause was surprisingly simple. The software used by the company that built the spacecraft calculated the force of the small thruster firings that adjusted its course in imperial units, pound-force seconds, while NASA's navigation team expected the figures in metric units, newton-seconds. Because one pound-force is about 4.45 newtons, the effect of each firing had been consistently underestimated, and small errors accumulated over the long journey. Some members of the navigation team had noticed discrepancies during the flight, but their concerns were not fully investigated. The loss of the 125-million-dollar mission led NASA to review its procedures for checking data and communication between teams.",
      questions: [
        [
          "According to the passage, the spacecraft was lost because it ----.",
          [
            "came much closer to Mars than intended",
            "ran out of fuel",
            "collided with the lander",
            "was hit by a small rock while it was travelling between the Earth and Mars",
            "was never launched",
          ],
          "Metne göre planlanandan çok daha alçaktan gezegene yaklaştı.",
        ],
        [
          "It can be understood from the passage that the error resulted from ----.",
          [
            "a mismatch in units between two groups",
            "a broken engine",
            "bad weather on Mars",
            "a decision to change the planned orbit after the spacecraft had arrived at the planet",
            "faulty cameras",
          ],
          "Bir ekip emperyal, diğeri metrik birim kullanıyordu.",
        ],
        [
          "The passage suggests that the disaster might have been avoided if ----.",
          [
            "earlier warning signs had been taken more seriously",
            "the spacecraft had been larger",
            "NASA had not built it",
            "the mission had been launched several years later, when better rockets were available",
            "the lander had gone first",
          ],
          "Uçuş sırasında fark edilen tutarsızlıklar tam olarak araştırılmamıştı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In November 1957, the Soviet Union launched Sputnik 2, carrying a small dog named Laika, who had been found living on the streets of Moscow. ---- For decades, officials claimed that she had lived for several days, but in 2002 it was revealed that she had died of overheating within a few hours.",
      [
        "She became the first animal to orbit the Earth, but the capsule had not been designed to return.",
        "Moscow has cold winters.",
        "Dogs are loyal animals.",
        "Scientists had chosen stray dogs for the programme because they believed that animals used to living on the streets would cope better with cold and hunger.",
        "Many dogs live in cities.",
      ],
      "Boşluktan sonra öldüğü anlatılır; boşluğa yörüngeye çıkan ilk hayvan olduğunu ama kapsülün dönüş için tasarlanmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "On 16 June 1963, Valentina Tereshkova, a former textile worker and amateur parachutist, was launched into space aboard Vostok 6. ---- It would be nineteen years before another woman went into space.",
      [
        "During nearly three days in orbit, she circled the Earth forty-eight times, becoming the first woman in space.",
        "Textiles are made in factories.",
        "Parachutes slow a fall.",
        "She had been selected from more than four hundred applicants, partly because of her experience of parachuting, since cosmonauts had to leave the capsule and land separately.",
        "June is in summer.",
      ],
      "Boşluk uçuşun önemini anlatan bir cümle gerektirir; boşluğa yaklaşık üç günde kırk sekiz tur atarak uzaydaki ilk kadın olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Sergei Korolev was the chief designer of the Soviet rockets that launched Sputnik and sent Yuri Gagarin into orbit in 1961. ---- Only after his death in 1966 was his name revealed to the public.",
      [
        "During his lifetime, however, his identity was kept a state secret, and he was referred to only as the 'Chief Designer'.",
        "Rockets are very powerful.",
        "The Soviet Union was a large country.",
        "In 1938, he had been arrested during Stalin's purges and sent to a labour camp in Siberia, where he lost several teeth and nearly died before being released to work on weapons.",
        "Gagarin was a pilot.",
      ],
      "Boşluktan sonra adının ancak ölümünden sonra açıklandığı anlatılır; boşluğa yaşarken kimliğinin devlet sırrı olarak tutulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "For decades, the huge first stages of launch vehicles were simply thrown away after a single flight. ---- Reusing boosters has since greatly reduced the cost of sending satellites into orbit.",
      [
        "In December 2015, a private company landed a booster upright on the ground in Florida after a launch, for the first time.",
        "Florida has a warm climate.",
        "Satellites orbit the Earth.",
        "Engineers had spent years trying to solve the problem, and several earlier attempts to land boosters on a floating platform at sea had ended in spectacular explosions.",
        "The sea is very deep.",
      ],
      "Boşluktan sonra itici roketlerin yeniden kullanımı anlatılır; boşluğa Aralık 2015'te bir itici roketin ilk kez dik olarak karaya indirildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Skylab, the first American space station, was launched in 1973 and hosted three crews of astronauts. ---- In July 1979, it re-entered the atmosphere, and pieces fell over the Indian Ocean and Western Australia.",
      [
        "After the last crew left in 1974, its orbit gradually decayed, and NASA could not prevent it from falling.",
        "Space stations orbit the Earth.",
        "Australia is a large country.",
        "A local council in Western Australia jokingly sent NASA a fine for littering, which was finally paid thirty years later by a radio presenter who collected money from listeners.",
        "Astronauts train for many years.",
      ],
      "Boşluktan sonra istasyonun atmosfere girdiği anlatılır; boşluğa son mürettebat ayrıldıktan sonra yörüngesinin giderek alçaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "On 18 March 1965, the Soviet cosmonaut Alexei Leonov left his spacecraft and became the first person to walk in space. ---- He survived only by secretly releasing some of the air from his suit, a risky decision that he reported to mission control only later.",
      [
        "After about twelve minutes outside, he found that his suit had swollen so much in the vacuum that he could not get back through the hatch.",
        "Space is a vacuum.",
        "Cosmonauts train in water tanks.",
        "Leonov was also a talented artist, and he later produced paintings of space scenes, some of which were made into postage stamps in the Soviet Union.",
        "March is in spring.",
      ],
      "Boşluktan sonra giysisindeki havayı bırakarak kurtulduğu anlatılır; boşluğa giysisinin boşlukta şişip kapaktan geçemediğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "On Christmas Eve 1968, the crew of Apollo 8 became the first people to see the Earth rise above the Moon's horizon.",
        "The astronaut Bill Anders quickly took a colour photograph of the scene.",
        "Christmas is celebrated in many countries.",
        "The image, known as 'Earthrise', showed the Earth as a small, fragile blue planet in the darkness of space.",
        "It is often credited with helping to inspire the environmental movement.",
      ],
      odd: 2,
      why: "Parça 'Dünya'nın Doğuşu' fotoğrafını anlatır. Noel'in pek çok ülkede kutlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A popular story claims that NASA spent millions developing a pen that could write in space, while Soviet cosmonauts simply used pencils.",
        "In fact, the 'space pen' was developed privately by a pen company.",
        "Pencils were considered unsafe because broken tips and graphite dust could float into equipment.",
        "Pens have been used since ancient times.",
        "Both American and Soviet crews later used the pressurised pen.",
      ],
      odd: 3,
      why: "Parça uzay kalemiyle ilgili yaygın hikâyenin gerçeğini anlatır. Kalemlerin antik çağlardan beri kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The International Space Station can often be seen from the ground without a telescope.",
        "It appears as a bright, steady point of light moving quickly across the sky.",
        "Many people enjoy watching the stars.",
        "It is visible because it reflects sunlight while the ground below is in darkness.",
        "Websites tell observers when it will pass over their location.",
      ],
      odd: 2,
      why: "Parça Uluslararası Uzay İstasyonu'nun yerden görülmesini anlatır. Pek çok kişinin yıldızları izlemekten hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Food in space must not produce crumbs, which could float into equipment or astronauts' eyes.",
        "For this reason, astronauts often eat tortillas instead of bread.",
        "Tortillas are a traditional food in Mexico.",
        "Salt and pepper are supplied in liquid form.",
        "Astronauts also report that food tastes blander in space, possibly because fluids shift towards the head.",
      ],
      odd: 2,
      why: "Parça uzaydaki yemek kurallarını anlatır. Tortillanın Meksika'nın geleneksel yiyeceği olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Astronauts returning from spacewalks often report that space has a distinctive smell.",
        "They describe it as similar to burnt metal, gunpowder or seared steak.",
        "Steak is a popular dish in many restaurants.",
        "The smell probably comes from particles that stick to spacesuits and react with the air inside the station.",
        "One company has even produced a perfume designed to imitate it.",
      ],
      odd: 2,
      why: "Parça uzayın kokusunu anlatır. Bifteğin pek çok restoranda popüler bir yemek olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On the International Space Station, astronauts sleep in small cabins about the size of a telephone box.",
        "Rivers often flood in spring.",
        "Each person is zipped into a sleeping bag fastened to the wall of the cabin.",
        "Fans circulate the air, because without gravity exhaled carbon dioxide can collect around a sleeper's head.",
        "Many astronauts find it difficult to sleep during their first nights in orbit.",
      ],
      odd: 1,
      why: "Parça astronotların uzay istasyonunda nasıl uyuduğunu anlatır. Nehirlerin ilkbaharda sık sık taştığını söyleyen II. cümle konu dışıdır.",
    },
  ],
};
