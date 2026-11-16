import type { YokdilDeneme } from "./types";

export const FEN_58: YokdilDeneme = {
  no: 58,
  field: "fen",
  vocab: [
    [
      "The supply ship ---- a hole in the wall of one of the station's modules, and air began to leak out.",
      ["punctured", "painted", "borrowed", "repaired", "ignored"],
      "İkmal gemisinin istasyon modüllerinden birinin duvarını 'deldiği' (punctured) ve havanın sızmaya başladığı anlatılır.",
    ],
    [
      "The surface of Venus is hot enough to ---- lead, and the pressure is crushing.",
      ["melt", "freeze", "paint", "plant", "polish"],
      "Venüs'ün yüzeyinin kurşunu 'eritecek' (melt) kadar sıcak olduğu anlatılır.",
    ],
    [
      "In the photograph, the Earth appears as a ---- dot, less than a single pixel in size.",
      ["tiny", "noisy", "furious", "generous", "wooden"],
      "Fotoğrafta Dünya'nın tek bir pikselden küçük 'minicik' (tiny) bir nokta olarak göründüğü anlatılır.",
    ],
    [
      "Despite a series of failures, the spacecraft managed to ---- to Earth with a few grains of dust from the asteroid.",
      ["return", "vanish", "argue", "dissolve", "explode"],
      "Bir dizi arızaya rağmen uzay aracının asteroitten birkaç toz tanesiyle Dünya'ya 'geri dönmeyi' (return) başardığı anlatılır.",
    ],
    [
      "The lander was protected by huge airbags, which allowed it to ---- across the ground before coming to a stop.",
      ["bounce", "swim", "whisper", "sleep", "weave"],
      "İniş aracının büyük hava yastıklarıyla korunduğu ve durmadan önce yerde 'zıplayabildiği' (bounce) anlatılır.",
    ],
    [
      "Thirty-six seconds after launch, the rocket was struck by lightning, and many of the spacecraft's instruments suddenly ----.",
      ["went dead", "looked up", "took after", "gave in", "brought about"],
      "Fırlatmadan otuz altı saniye sonra roketin yıldırım çarpmasına uğradığı ve aracın pek çok göstergesinin aniden 'kapandığı/söndüğü' (went dead) anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the station was brought down, it ---- by more than a hundred astronauts.",
      ["had been visited", "is visited", "has been visited", "will be visited", "visits"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been visited'.",
    ],
    [
      "If the engineer had not remembered the obscure switch, the mission ---- abandoned.",
      ["might have been", "will be", "is", "had been", "would be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might have been'.",
    ],
    [
      "The fire ---- by a canister that produced oxygen.",
      ["was caused", "caused", "has caused", "causes", "is causing"],
      "Yangın neden olunmuştur; edilgen geçmiş zaman: 'was caused'.",
    ],
    [
      "---- the lander survived for less than an hour, it sent back the first colour pictures from Venus.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "İniş aracının bir saatten az dayanması ile ilk renkli fotoğrafları göndermesi zıttır: 'Although'.",
    ],
    [
      "The astronomer, ---- idea it was to turn the camera around, had to persuade NASA officials.",
      ["whose", "who", "which", "whom", "where"],
      "Gökbilimcinin fikri; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only in 2015 ---- the missing lander finally located on the surface of Mars.",
      ["was", "did", "had", "has", "were"],
      "'Only in 2015' ile devrik yapı; edilgen 'was located': 'was'.",
    ],
    [
      "The capsule landed in the Australian desert, ---- it was collected by scientists.",
      ["where", "which", "when", "whose", "that"],
      "'Australian desert' yer bildirir; orada bilim insanlarınca alındı: 'where'.",
    ],
    [
      "The farther the spacecraft travelled, ---- the signals it sent became.",
      ["the weaker", "the weakest", "weaker", "weakest", "so weak"],
      "'The farther ..., the weaker ...' paralel yapısı: 'the weaker'.",
    ],
    [
      "The flight controller suggested that the crew ---- the switch to a backup position.",
      ["move", "moves", "moved", "to move", "moving"],
      "'suggest that' sonrası yalın fiil (subjunctive): 'move'.",
    ],
    [
      "The lander is believed ---- safely but failed to open all its solar panels.",
      ["to have landed", "landing", "to land", "landed", "having landed"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have landed'.",
    ],
    [
      "The engineers designed the airbags ---- the lander would not be damaged on impact.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Hava yastıklarının tasarlanma amacı aracın zarar görmemesidir: 'so that'.",
    ],
    [
      "The controllers watched the spacecraft ---- away from the asteroid.",
      ["drift", "to drifting", "drifted", "be drifted", "to have drifted"],
      "Algı fiili 'watch sb/sth do sth' kalıbında yalın fiil: 'drift'.",
    ],
    [
      "Had the camera pointed directly at the sun, its instruments ---- damaged.",
      ["might have been", "are", "will be", "had been", "are being"],
      "Devrik üçüncü tip koşul cümlesi, edilgen: 'might have been'.",
    ],
    [
      "Neither the first lander nor the second ---- longer than two hours on the surface.",
      ["survived", "surviving", "to survive", "have survive", "survives to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'survived'.",
    ],
  ],
  cloze: [
    {
      text:
        "The Soviet space station Mir was launched in 1986 and was designed to last about five years, {1} it remained in orbit for fifteen. In 1997, however, it suffered two of the most serious emergencies in the history of human spaceflight. In February, a canister that produced oxygen by burning chemicals caught fire, {2} flames more than a metre long filled one of the modules with thick smoke. The crew, which included an American astronaut, put on masks and fought the fire with extinguishers for about fourteen minutes before it burned out. A few months later, in June, a cosmonaut was guiding an unmanned supply ship towards the station by remote control during a test of a new docking system. He could not judge its speed and distance accurately, {3} the supply ship crashed into one of the station's modules, puncturing its wall and damaging its solar panels. As air began to leak out, the crew quickly cut through cables {4} sealed the damaged module by closing its hatch. They spent the following weeks working in partial darkness because of the reduced power. Despite these problems, Mir continued to operate until 2001, {5} it was finally guided into the Pacific Ocean.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "or", "for"],
          "Beş yıl için tasarlanması ile on beş yıl yörüngede kalması zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Kutunun alev alması ve modülün dumanla dolması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["so", "but", "or", "unless", "although"],
          "Hızı ve uzaklığı doğru kestirememesinin sonucu ikmal gemisinin çarpmasıdır: 'so'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Kabloları kesmeleri ve modülü kapatmaları birbirine eklenen iki eylemdir: 'and'.",
        ],
        [
          "(25) ----",
          ["when", "unless", "although", "because", "so that"],
          "İstasyonun 2001'e dek çalışması ve o yıl Pasifik'e indirilmesi zaman bildirir: 'when'.",
        ],
      ],
    },
    {
      text:
        "Venus is almost the same size as the Earth, and in the early twentieth century some scientists imagined that its thick clouds might hide warm, swampy forests. The reality proved very different. Between 1961 and 1984, the Soviet Union sent a series of spacecraft called Venera to the planet, {1} several of them landed on its surface. The first attempts failed, because the landers were crushed by the enormous pressure of the atmosphere before they reached the ground. Engineers learned from each failure {2} built stronger and stronger capsules. In 1970, Venera 7 became the first spacecraft to send back data from the surface of another planet, {3} its signal was extremely weak. The measurements showed that the temperature was about 475 degrees Celsius {4} that the pressure was about ninety times that on Earth, similar to that found about a kilometre beneath the ocean. In 1975, Venera 9 sent back the first photographs from the surface, showing flat, sharp-edged rocks. In 1982, Venera 13 returned colour images, {5} it survived for more than two hours, far longer than it had been designed to last. No spacecraft has landed on Venus since 1985.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Araçların gönderilmesi ve bazılarının yüzeye inmesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Mühendislerin her başarısızlıktan ders alması ve daha güçlü kapsüller yapması birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["although", "because", "unless", "so that", "until"],
          "Yüzeyden veri gönderen ilk araç olması ile sinyalinin çok zayıf olması zıttır: 'although'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Sıcaklığa ve basınca ilişkin iki ölçüm birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Renkli görüntü göndermesi ve iki saatten fazla dayanması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the station had been designed to last only five years, ----.",
      [
        "it remained in orbit for fifteen",
        "space is dark",
        "stations have modules",
        "the Soviet Union was large",
        "a supply ship crashed into one of its modules during a test of a new docking system in 1997",
      ],
      "'Although' zıtlık ister: istasyon yalnızca beş yıl dayanacak biçimde tasarlanmış olsa da on beş yıl yörüngede kaldı.",
    ],
    [
      "If the Venera landers had not been made stronger, ----.",
      [
        "they would have been crushed before reaching the surface",
        "Venus is hot",
        "clouds are thick",
        "rockets are expensive",
        "the scientists would have imagined that the clouds of Venus hid warm and swampy forests",
      ],
      "Üçüncü tip koşul: Venera iniş araçları güçlendirilmeseydi yüzeye ulaşmadan ezilirlerdi.",
    ],
    [
      "----, Voyager 1 turned its camera back towards the Earth.",
      [
        "Shortly before its cameras were switched off for good",
        "Although planets are round",
        "Unless the sun was bright",
        "Since Saturn has rings",
        "While engineers in California were building the spacecraft in the middle of the 1970s",
      ],
      "Kameraları kalıcı olarak kapatılmadan kısa süre önce Voyager 1 kamerasını Dünya'ya çevirdi.",
    ],
    [
      "The Japanese spacecraft returned to Earth three years late ----.",
      [
        "because a series of technical problems had delayed its journey",
        "although asteroids are small",
        "unless the engines were working",
        "so that scientists could study dust",
        "while the capsule was being collected from the desert by a team of scientists",
      ],
      "Japon uzay aracı bir dizi teknik sorun yolculuğunu geciktirdiği için Dünya'ya üç yıl gecikmeyle döndü.",
    ],
    [
      "Since the airbags allowed the lander to bounce safely, ----.",
      [
        "engineers did not need to use expensive rockets to slow it down completely",
        "Mars is red",
        "rovers have wheels",
        "dust storms are common",
        "the small rover drove off the lander and studied the rocks near the landing site for several weeks",
      ],
      "'Since' neden bildirir: hava yastıkları iniş aracının güvenle zıplamasını sağladığından mühendislerin onu tamamen yavaşlatmak için pahalı roketler kullanması gerekmedi.",
    ],
    [
      "Not only was the British lander lost for more than ten years, ----.",
      [
        "but it was later found to have landed almost successfully",
        "and Mars is cold",
        "since landers are small",
        "so Britain is an island",
        "unless the orbiting spacecraft had taken high-resolution photographs of the area in 2015",
      ],
      "'Not only ... but also' yapısı tamamlanır: İngiliz iniş aracı on yıldan uzun süre kayıp kalmakla kalmadı, daha sonra neredeyse başarılı biçimde indiği anlaşıldı.",
    ],
    [
      "Once the controller told the crew to move the switch, ----.",
      [
        "the instruments came back to life",
        "switches are small",
        "the moon is far away",
        "lightning is bright",
        "the rocket had been struck twice by lightning within the first minute of its flight",
      ],
      "Kontrolör mürettebata anahtarı hareket ettirmesini söyleyince göstergeler yeniden çalıştı.",
    ],
    [
      "Unless the airbags had deflated properly, ----.",
      [
        "the rover could not have driven off the lander",
        "Mars has two moons",
        "rocks are hard",
        "engineers work in teams",
        "the lander would have sent back the first photographs from the surface of Venus in the 1970s",
      ],
      "'Unless' olumsuz koşul: hava yastıkları düzgün sönmeseydi gezici iniş aracından inemezdi.",
    ],
    [
      "The Earth appears so small in the photograph ----.",
      [
        "that it is difficult to see without being told where to look",
        "although cameras are powerful",
        "because the sun is bright",
        "unless the image is printed",
        "while the spacecraft was travelling beyond the orbit of Neptune and out of the solar system",
      ],
      "Dünya fotoğrafta o kadar küçük görünür ki nereye bakılacağı söylenmeden görmek zordur.",
    ],
    [
      "Even though the spacecraft had lost several of its engines, ----.",
      [
        "it managed to bring a few grains of asteroid dust back to Earth",
        "asteroids orbit the sun",
        "engines need fuel",
        "Japan has many scientists",
        "the controllers had lost contact with it for seven weeks after it touched the surface of the asteroid",
      ],
      "'Even though' zıtlık ister: uzay aracı motorlarının birkaçını kaybetmiş olsa da Dünya'ya birkaç asteroit toz tanesi getirmeyi başardı.",
    ],
    [
      "As the lander's solar panels had not all opened, ----.",
      [
        "its antenna was blocked and it could not send signals",
        "panels are flat",
        "Mars is far away",
        "the sun is hot",
        "the scientist who led the project had campaigned for years to raise money for the mission",
      ],
      "İniş aracının güneş panellerinin hepsi açılmadığından anteni kapanmıştı ve sinyal gönderemedi.",
    ],
  ],
  enTr: [
    [
      "The crew fought the fire with extinguishers for about fourteen minutes.",
      [
        "Mürettebat yangınla yaklaşık on dört dakika boyunca söndürücülerle mücadele etti.",
        "Mürettebat yangını yaklaşık on dört saat boyunca izledi.",
        "Söndürücüler çalışmadığı için mürettebat yangınla mücadele edemedi.",
        "Söndürücüler mürettebatla on dört dakika mücadele etti.",
        "İstasyonda hiç yangın çıkmadı.",
      ],
      "'The crew fought the fire with extinguishers' 'mürettebat yangınla söndürücülerle mücadele etti', 'for about fourteen minutes' 'yaklaşık on dört dakika boyunca' karşılığıdır.",
    ],
    [
      "The first landers were crushed by the pressure before they reached the ground.",
      [
        "İlk iniş araçları yere ulaşmadan önce basınç tarafından ezildi.",
        "İlk iniş araçları yere ulaştıktan sonra basıncı ezdi.",
        "Basınç tarafından ezilmeyen ilk iniş araçları, yere sağ salim ulaştı.",
        "Yer iniş araçlarını basınçla ezdi.",
        "İlk iniş araçları hiç fırlatılmadı.",
      ],
      "'The first landers were crushed by the pressure' 'ilk iniş araçları basınç tarafından ezildi', 'before they reached the ground' 'yere ulaşmadan önce' karşılığıdır.",
    ],
    [
      "The photograph was taken from a distance of about six billion kilometres.",
      [
        "Fotoğraf yaklaşık altı milyar kilometre uzaklıktan çekildi.",
        "Fotoğraf yaklaşık altı kilometre uzaklıktan çekildi.",
        "Altı milyar kilometre uzaklıktan çekilmesi planlanan fotoğraf, hiç çekilemedi.",
        "Uzaklık fotoğrafı çekti.",
        "Fotoğraf Dünya'dan çekildi.",
      ],
      "'The photograph was taken' 'fotoğraf çekildi', 'from a distance of about six billion kilometres' 'yaklaşık altı milyar kilometre uzaklıktan' karşılığıdır.",
    ],
    [
      "The capsule contained tiny grains of dust from the surface of the asteroid.",
      [
        "Kapsül, asteroidin yüzeyinden alınmış küçük toz taneleri içeriyordu.",
        "Asteroit, kapsülün yüzeyinden alınmış toz taneleri içeriyordu.",
        "Kapsülün içinde asteroide ait hiçbir toz tanesi bulunamadığı için görev başarısız sayıldı.",
        "Toz taneleri kapsülü içeriyordu.",
        "Kapsül boştu.",
      ],
      "'The capsule contained tiny grains of dust' 'kapsül küçük toz taneleri içeriyordu', 'from the surface of the asteroid' 'asteroidin yüzeyinden alınmış' karşılığıdır.",
    ],
    [
      "The small rover was the first wheeled vehicle to travel on Mars.",
      [
        "Küçük gezici, Mars'ta yol alan ilk tekerlekli araçtı.",
        "Küçük gezici, Ay'da yol alan son tekerlekli araçtı.",
        "Mars'ta yol alan ilk tekerlekli araç, birkaç metre gittikten sonra bozuldu.",
        "Mars küçük geziciyi taşıdı.",
        "Küçük gezicinin tekerlekleri yoktu.",
      ],
      "'The small rover was the first wheeled vehicle' 'küçük gezici ilk tekerlekli araçtı', 'to travel on Mars' 'Mars'ta yol alan' karşılığıdır.",
    ],
    [
      "The rocket was struck by lightning twice within a minute of launch.",
      [
        "Roket, fırlatıldıktan sonraki bir dakika içinde iki kez yıldırım çarpmasına uğradı.",
        "Roket, fırlatılmadan bir dakika önce iki kez yıldırım üretti.",
        "Yıldırım çarpmasına uğramayan roket, bir dakika içinde yörüngeye ulaştı.",
        "Yıldırım roketi iki kez fırlattı.",
        "Rokete hiç yıldırım çarpmadı.",
      ],
      "'The rocket was struck by lightning twice' 'roket iki kez yıldırım çarpmasına uğradı', 'within a minute of launch' 'fırlatıldıktan sonraki bir dakika içinde' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Mürettebat, azalan güç nedeniyle haftalarca yarı karanlıkta çalıştı.",
      [
        "The crew worked in partial darkness for weeks because of the reduced power.",
        "The reduced power worked in the darkness for weeks because of the crew.",
        "The crew had plenty of power, so the station remained brightly lit for weeks.",
        "Darkness reduced the crew for weeks.",
        "The crew never worked on the station.",
      ],
      "'Mürettebat haftalarca yarı karanlıkta çalıştı' 'the crew worked in partial darkness for weeks', 'azalan güç nedeniyle' 'because of the reduced power' karşılığıdır.",
    ],
    [
      "Venüs'ün yüzeyindeki basınç, Dünya'dakinin yaklaşık doksan katıdır.",
      [
        "The pressure on the surface of Venus is about ninety times that on Earth.",
        "The pressure on Earth is about ninety times that on the surface of Venus.",
        "The pressure on the surface of Venus is similar to that on Earth, although it is much hotter.",
        "Ninety Earths press on Venus.",
        "There is no pressure on Venus.",
      ],
      "'Venüs'ün yüzeyindeki basınç' 'the pressure on the surface of Venus', 'Dünya'dakinin yaklaşık doksan katıdır' 'is about ninety times that on Earth' karşılığıdır.",
    ],
    [
      "Gökbilimci, NASA'yı kamerayı Dünya'ya çevirmeye ikna etti.",
      [
        "The astronomer persuaded NASA to turn the camera towards the Earth.",
        "NASA persuaded the astronomer to turn the Earth towards the camera.",
        "The astronomer tried to persuade NASA, but the camera was never turned towards the Earth.",
        "The camera persuaded the astronomer.",
        "NASA had no camera.",
      ],
      "'Gökbilimci NASA'yı ikna etti' 'the astronomer persuaded NASA', 'kamerayı Dünya'ya çevirmeye' 'to turn the camera towards the Earth' karşılığıdır.",
    ],
    [
      "Kapsül, Avustralya çölüne paraşütle indi.",
      [
        "The capsule landed by parachute in the Australian desert.",
        "The Australian desert landed on the capsule by parachute.",
        "The capsule was supposed to land in Australia, but it fell into the ocean.",
        "The parachute landed the desert.",
        "The capsule never returned.",
      ],
      "'Kapsül indi' 'the capsule landed', 'Avustralya çölüne paraşütle' 'by parachute in the Australian desert' karşılığıdır.",
    ],
    [
      "İniş aracı, durmadan önce yaklaşık on beş kez sekti.",
      [
        "The lander bounced about fifteen times before coming to a stop.",
        "The lander stopped about fifteen times before it bounced.",
        "The lander stopped immediately without bouncing, as the engineers had planned.",
        "Fifteen landers bounced.",
        "The lander never landed.",
      ],
      "'İniş aracı yaklaşık on beş kez sekti' 'the lander bounced about fifteen times', 'durmadan önce' 'before coming to a stop' karşılığıdır.",
    ],
    [
      "Kayıp iniş aracı, yörüngedeki bir uzay aracının çektiği fotoğraflarda bulundu.",
      [
        "The missing lander was found in photographs taken by an orbiting spacecraft.",
        "The missing spacecraft took photographs of an orbiting lander.",
        "The missing lander was never found, although many photographs were taken.",
        "Photographs found the spacecraft in orbit.",
        "The lander was never lost.",
      ],
      "'Kayıp iniş aracı bulundu' 'the missing lander was found', 'yörüngedeki bir uzay aracının çektiği fotoğraflarda' 'in photographs taken by an orbiting spacecraft' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In February 1990, the spacecraft Voyager 1, launched in 1977, had completed its visits to Jupiter and Saturn and was heading out of the solar system, about six billion kilometres from the sun. For years, the American astronomer Carl Sagan, a member of the mission's team, had been urging NASA to turn the spacecraft's camera back towards home and take a picture of the Earth. Some engineers were reluctant, partly because pointing the camera so close to the sun risked damaging it, and partly because the image would be of little scientific value. Eventually, shortly before the cameras were switched off to save power, the request was approved. Voyager took a series of sixty images, forming a 'family portrait' of the solar system. In one of them, the Earth appears as a tiny point of light, less than a single pixel in size, caught in a band of sunlight scattered within the camera. Sagan called it the 'Pale Blue Dot' and later wrote a famous passage reflecting on its meaning. Everyone who has ever lived, he observed, had lived on that speck of dust, and all the wars fought over territory had been fought over a tiny fraction of it. For him, the image showed how fragile our world is and how important it is to take care of it. The photograph remains one of the most widely reproduced images in the history of space exploration.",
      questions: [
        [
          "According to the passage, some engineers were reluctant to take the photograph because ----.",
          [
            "it might damage the camera and had little scientific value",
            "the spacecraft had no camera",
            "it would cost too much fuel",
            "Sagan had not yet joined the team responsible for the mission",
            "the Earth was too bright",
          ],
          "Metne göre kamerayı güneşe yakın çevirmek risk taşıyordu ve görüntünün bilimsel değeri azdı.",
        ],
        [
          "In the image, the Earth ----.",
          [
            "appears as an extremely small point of light",
            "fills most of the picture",
            "cannot be seen at all",
            "is shown together with Jupiter and Saturn in a single large photograph",
            "appears red",
          ],
          "Dünya tek bir pikselden küçük bir ışık noktası olarak görünür.",
        ],
        [
          "It can be understood from the passage that, for Sagan, the photograph ----.",
          [
            "had an important message about humanity and the planet",
            "was a scientific failure",
            "showed new details of the Earth's surface",
            "proved that the camera could safely be pointed directly at the sun",
            "was not worth publishing",
          ],
          "Dünyanın ne kadar kırılgan olduğunu ve ona özen göstermenin önemini gösterdi.",
        ],
      ],
    },
    {
      text:
        "In May 2003, Japan launched a small spacecraft called Hayabusa, meaning 'peregrine falcon', with an ambitious aim: to collect material from the surface of an asteroid and bring it back to Earth. It was powered by ion engines, which produce a very gentle but highly efficient thrust. After a journey of more than two years, it reached the asteroid Itokawa, a peanut-shaped body only about five hundred metres long. The mission was plagued by problems. A small robot that was supposed to hop across the surface was released at the wrong moment and drifted away into space. When the spacecraft touched down to collect samples, a device designed to fire a small metal bullet into the ground apparently failed. Soon afterwards, a fuel leak sent it spinning, and contact was lost for seven weeks. Two of its four ion engines broke down, and engineers had to combine working parts from two damaged engines to keep it going. As a result, its return was delayed by three years. In June 2010, the capsule carrying the samples landed by parachute in the Australian desert, while the main spacecraft burned up in the atmosphere. When scientists opened it, they found about 1,500 tiny grains of dust, most smaller than a tenth of a millimetre. It was the first time material had been brought back from the surface of an asteroid, and the mission's success inspired a second, more successful Hayabusa mission.",
      questions: [
        [
          "According to the passage, the small robot ----.",
          [
            "was lost because it was released at the wrong time",
            "hopped across the asteroid successfully",
            "collected most of the samples",
            "was used to fire a small metal bullet into the surface of the asteroid",
            "returned to Earth",
          ],
          "Metne göre yanlış anda bırakıldı ve uzaya sürüklendi.",
        ],
        [
          "The engineers kept the spacecraft going by ----.",
          [
            "combining parts from two damaged engines",
            "replacing all of its engines",
            "sending astronauts to repair it",
            "allowing the main spacecraft to burn up in the atmosphere over Australia",
            "using solar sails",
          ],
          "İki hasarlı motorun çalışan parçalarını birleştirdiler.",
        ],
        [
          "It can be understood from the passage that, despite its problems, the mission ----.",
          [
            "achieved something that had never been done before",
            "returned large rocks",
            "was a complete failure",
            "was cancelled after the fuel leak caused the spacecraft to spin out of control",
            "arrived early",
          ],
          "Bir asteroit yüzeyinden ilk kez malzeme getirildi.",
        ],
      ],
    },
    {
      text:
        "On 4 July 1997, a NASA spacecraft called Mars Pathfinder arrived at Mars using a landing method that had never been tried before. Previous landers had used rockets to slow down and settle gently on the surface, which was expensive and complicated. Pathfinder, however, was designed as a low-cost mission, and engineers decided on a cheaper solution. After a heat shield and a parachute had slowed the spacecraft, a cluster of large airbags inflated around it, and rockets fired briefly just above the surface to bring it almost to a stop. The lander, wrapped in its airbags like a ball, then dropped to the ground and bounced about fifteen times, rising as high as fifteen metres, before rolling to a halt. Once it had stopped, the airbags were deflated and pulled in, and the lander opened like the petals of a flower. A few days later, a small six-wheeled rover called Sojourner, about the size of a microwave oven, drove down a ramp onto the surface. It was the first wheeled vehicle to travel on another planet. Over the following weeks it studied the rocks near the landing site, which appeared to have been deposited by an ancient flood. The mission lasted much longer than planned, and the airbag method was later used to land two larger rovers in 2004.",
      questions: [
        [
          "According to the passage, the airbag method was chosen because ----.",
          [
            "it was cheaper than landing with rockets alone",
            "it was faster",
            "rockets did not work on Mars",
            "the rover was too large to fit inside a lander that used rockets to slow down",
            "earlier airbag landings had been successful",
          ],
          "Metne göre düşük maliyetli bir görev olarak tasarlanmıştı ve daha ucuz bir çözüm seçildi.",
        ],
        [
          "The lander opened 'like the petals of a flower' ----.",
          [
            "after the airbags had been deflated",
            "before it reached the ground",
            "while it was bouncing",
            "when the heat shield and the parachute were slowing it down in the atmosphere",
            "a year after landing",
          ],
          "Hava yastıkları söndürülüp içeri çekildikten sonra açıldı.",
        ],
        [
          "It can be understood from the passage that the success of Pathfinder ----.",
          [
            "led to the use of the same method in later missions",
            "ended interest in Mars",
            "showed that rovers are not useful",
            "proved that Mars had never experienced a flood",
            "was not repeated",
          ],
          "Hava yastığı yöntemi 2004'te iki büyük geziciyi indirmek için de kullanıldı.",
        ],
      ],
    },
    {
      text:
        "Beagle 2 was a small British spacecraft, named after the ship on which Charles Darwin had sailed, that was designed to land on Mars and search for signs of life. It was the idea of a planetary scientist named Colin Pillinger, who campaigned energetically to raise money for it from the government, universities and companies, even persuading a famous band to record a signal for it to transmit after landing. The lander was carried to Mars by a European spacecraft, from which it separated on 19 December 2003. It was due to land on Christmas Day, but no signal was ever received, and after weeks of attempts to contact it, the mission was declared lost. For more than a decade, its fate remained a mystery. Then, in January 2015, scientists studying high-resolution photographs taken by an American spacecraft orbiting Mars announced that they had found it. The images showed that Beagle 2 had in fact landed safely and had partly opened. However, it seems that one or more of its solar panels had failed to unfold completely, blocking the antenna that it needed to communicate with Earth. Pillinger had died the previous year and so did not learn that his lander had come very close to success. Many scientists said the discovery showed how much of the mission had worked.",
      questions: [
        [
          "According to the passage, Pillinger ----.",
          [
            "worked hard to obtain funding for the mission",
            "was the captain of a ship",
            "built the spacecraft that carried the lander",
            "took the high-resolution photographs that showed where the lander was",
            "opposed the project",
          ],
          "Metne göre hükümet, üniversiteler ve şirketlerden para toplamak için yoğun kampanya yürüttü.",
        ],
        [
          "The photographs taken in 2015 showed that the lander ----.",
          [
            "had landed but could not communicate",
            "had crashed into the surface",
            "had never reached Mars",
            "had sent signals that nobody had received because of a problem on Earth",
            "had been moved by the wind",
          ],
          "Güvenle inmişti ama güneş panelleri anteni kapattığından iletişim kuramadı.",
        ],
        [
          "It can be understood from the passage that the discovery was bittersweet because ----.",
          [
            "the man behind the mission did not live to see it",
            "the lander was destroyed",
            "the band refused to record a signal",
            "the European spacecraft that carried the lander had also been lost in 2003",
            "it showed the mission was a total failure",
          ],
          "Pillinger bir önceki yıl öldüğü için aracının başarıya ne kadar yaklaştığını öğrenemedi.",
        ],
      ],
    },
    {
      text:
        "On 14 November 1969, Apollo 12 lifted off from Florida in heavy rain on the second mission to land astronauts on the moon. Thirty-six seconds after launch, the rocket was struck by lightning, and sixteen seconds later it was struck again. The tall rocket and the trail of hot exhaust behind it had acted like a lightning conductor, creating a path for the electricity to reach the ground. The rocket's own guidance system kept working, but in the command module, warning lights came on, many instruments went dead, and the data being sent to the control centre turned into meaningless numbers. Mission controllers had only seconds to decide whether to abort the flight. A young flight controller named John Aaron recognised the strange pattern of numbers, which he had seen once before during a test. He told the crew to move a little-known switch, labelled 'SCE', to its backup position. Few people in the control room even knew what the switch did, but one of the astronauts remembered where it was and moved it. Immediately, the data returned to normal, and the crew were able to restore power to the spacecraft. After checks in Earth orbit to make sure that nothing had been seriously damaged, the mission continued, and the astronauts landed on the moon five days later.",
      questions: [
        [
          "According to the passage, lightning struck the rocket because ----.",
          [
            "the rocket and its exhaust trail created a path for electricity",
            "it was made of metal",
            "the astronauts had switched on the instruments",
            "the flight controller told the crew to move a little-known switch to its backup position",
            "it was launched at night",
          ],
          "Metne göre roket ve arkasındaki sıcak egzoz izi elektriğin yere ulaşması için bir yol oluşturdu.",
        ],
        [
          "John Aaron was able to solve the problem because ----.",
          [
            "he had seen the same pattern of data during a test",
            "he had designed the rocket",
            "he was on board the spacecraft",
            "most people in the control room knew exactly what the switch did",
            "the data was easy to understand",
          ],
          "Garip sayı örüntüsünü daha önce bir test sırasında görmüştü.",
        ],
        [
          "It can be understood from the passage that, after the problem was solved, ----.",
          [
            "the mission was able to proceed",
            "the mission was cancelled",
            "the rocket was struck again",
            "the astronauts returned immediately to Florida because of the damage",
            "the crew landed on Mars",
          ],
          "Yörüngedeki kontrollerin ardından görev sürdü ve astronotlar beş gün sonra Ay'a indi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In January 2019, the Chinese spacecraft Chang'e 4 became the first to make a soft landing on the far side of the moon. ---- To solve this problem, China had earlier placed a relay satellite in a position beyond the moon.",
      [
        "Because the moon blocks radio signals, a lander on the far side cannot communicate directly with Earth.",
        "China has a large population.",
        "The moon has no air.",
        "The mission also carried seeds, one of which sprouted briefly inside a small container.",
        "Rockets are launched from many countries.",
      ],
      "Boşluk 'bu sorun' ifadesine bağlanan bir sorun gerektirir; boşluğa Ay radyo sinyallerini engellediğinden arka yüzdeki bir aracın Dünya ile doğrudan iletişim kuramadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In October 2020, the American spacecraft OSIRIS-REx touched the surface of the asteroid Bennu for a few seconds to collect a sample. ---- Scientists had to store the material quickly, because some of it was escaping into space.",
      [
        "The surface was so loose that the sampling head sank deeply, and it collected so much material that its lid was jammed open.",
        "Asteroids are made of rock.",
        "Spacecraft are expensive.",
        "The sample returned to Earth in 2023 and was found to contain water and carbon.",
        "Bennu orbits the sun.",
      ],
      "Boşluk 'malzemenin bir kısmının kaçması' ifadesine bağlanan bir neden gerektirir; boşluğa yüzeyin gevşek olduğunu ve o kadar çok malzeme toplandığını ki kapağın açık sıkıştığını söyleyen cümle gelmelidir.",
    ],
    [
      "In March 1986, a European spacecraft called Giotto flew within about six hundred kilometres of the centre of Halley's Comet. ---- The images it sent back before its camera was damaged showed that the comet's core was darker than coal.",
      [
        "It was struck by many particles of dust travelling at about seventy kilometres per second.",
        "Comets have long tails.",
        "Europe has many space agencies.",
        "The spacecraft was named after an Italian painter who had painted the comet in 1301.",
        "Halley was an English astronomer.",
      ],
      "Boşluk 'kamerası hasar görmeden önce' ifadesine bağlanan bir neden gerektirir; boşluğa saniyede yaklaşık yetmiş kilometre hızla giden pek çok toz parçacığının araca çarptığını söyleyen cümle gelmelidir.",
    ],
    [
      "The largest known meteorite on Earth lies on a farm in Namibia, where it was found by a farmer ploughing his field in 1920. ---- Unusually, it has never been moved from the place where it landed.",
      [
        "Made mostly of iron, it weighs about sixty tonnes.",
        "Farmers grow crops.",
        "Namibia is in Africa.",
        "Visitors have chipped pieces off it, so it has been declared a national monument.",
        "Meteors are seen at night.",
      ],
      "Boşluk 'hiç yerinden oynatılmamış olması'nı anlamlı kılan bir bilgi gerektirir; boşluğa çoğunlukla demirden oluştuğunu ve yaklaşık altmış ton ağırlığında olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In January 1961, a chimpanzee named Ham was launched in an American capsule on a short flight into space. ---- His success helped to convince NASA that a human could perform tasks during spaceflight.",
      [
        "He had been trained to pull levers in response to flashing lights, and he did so correctly during the flight.",
        "Chimpanzees live in Africa.",
        "Capsules are small.",
        "After the flight, he lived for many years in a zoo in Washington and later in North Carolina.",
        "Space is very cold.",
      ],
      "Boşluk 'başarısı' ifadesine bağlanan bir bilgi gerektirir; boşluğa yanıp sönen ışıklara yanıt olarak kol çekmek için eğitildiğini ve uçuşta bunu doğru yaptığını söyleyen cümle gelmelidir.",
    ],
    [
      "In June 1971, three Soviet cosmonauts died while returning to Earth after spending more than three weeks aboard a space station. ---- Since then, astronauts and cosmonauts have worn pressure suits during launch and re-entry.",
      [
        "A valve had opened accidentally, allowing the air in their capsule to escape into space.",
        "Space stations orbit the Earth.",
        "Their names were later given to features on the moon.",
        "They had been the first crew to live on a space station.",
        "Spacecraft need fuel.",
      ],
      "Boşluk basınçlı giysi kullanımının nedenini veren bir cümle gerektirir; boşluğa bir valfin yanlışlıkla açılıp kapsüldeki havanın uzaya kaçtığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1999, a NASA lander was lost as it approached the south polar region of Mars.",
        "Investigators concluded that its engines had probably shut down too early.",
        "Vibrations from its legs may have been mistaken for a signal that it had touched down.",
        "Mars has polar ice caps.",
        "It probably fell about forty metres to the surface.",
      ],
      odd: 3,
      why: "Parça Mars'ın güney kutbuna inerken kaybolan aracı anlatır. Mars'ın kutup buzullarının bulunduğunu söyleyen IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "In 1994, a small spacecraft spent two months mapping the moon.",
        "Its data suggested that ice might exist in dark craters near the moon's poles.",
        "Many people enjoy looking at the moon.",
        "Later missions confirmed that water ice is present there.",
        "This could be important for future bases on the moon.",
      ],
      odd: 2,
      why: "Parça Ay'ın kutup kraterlerinde buz bulunmasını anlatır. Pek çok kişinin Ay'a bakmaktan hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A comet that could be seen without a telescope for about a year and a half appeared in 1997.",
        "Millions of people around the world saw it.",
        "It had been discovered two years earlier by two amateur astronomers.",
        "Its nucleus was unusually large.",
        "Amateur astronomy is a popular hobby.",
      ],
      odd: 4,
      why: "Parça 1997'de görülen parlak kuyruklu yıldızı anlatır. Amatör gökbilimin popüler bir hobi olduğunu söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A NASA spacecraft has been orbiting Jupiter since 2016.",
        "It has shown that the planet's poles are covered with huge storms.",
        "Jupiter is named after the king of the Roman gods.",
        "It has also measured the planet's gravity to study its interior.",
        "Its findings suggest that the core is larger and less dense than expected.",
      ],
      odd: 2,
      why: "Parça Jüpiter'in yörüngesindeki uzay aracının bulgularını anlatır. Jüpiter'in Roma tanrılarının kralının adını taşıdığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A European spacecraft has measured the positions of more than a billion stars.",
        "It can detect tiny movements in their positions.",
        "This allows astronomers to calculate how far away the stars are.",
        "Stars are often visible on clear nights.",
        "The data has produced the most detailed map of our galaxy ever made.",
      ],
      odd: 3,
      why: "Parça bir milyardan fazla yıldızın konumunu ölçen uzay aracını anlatır. Yıldızların açık gecelerde sıklıkla görülebildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In 2008, India's first mission to the moon was launched.",
        "One of its instruments was designed to study minerals on the surface.",
        "Cricket is a popular sport in India.",
        "It detected signs of water molecules spread across the moon's surface.",
        "The finding surprised many scientists.",
      ],
      odd: 2,
      why: "Parça Hindistan'ın ilk Ay görevini ve bulgusunu anlatır. Kriketin Hindistan'da popüler bir spor olduğunu söyleyen III. cümle konu dışıdır.",
    },
  ],
};
