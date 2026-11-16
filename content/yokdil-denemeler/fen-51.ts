import type { YokdilDeneme } from "./types";

export const FEN_51: YokdilDeneme = {
  no: 51,
  field: "fen",
  vocab: [
    [
      "The new lens was much thinner and lighter, yet it could ---- light just as effectively as a thick one.",
      ["focus", "absorb", "destroy", "colour", "heat"],
      "Yeni merceğin çok daha ince ve hafif olmasına rağmen ışığı kalın bir mercek kadar etkili biçimde 'odaklayabildiği' (focus) anlatılır.",
    ],
    [
      "As the train approached, the musicians on the platform heard the note become ----.",
      ["higher", "quieter", "slower", "warmer", "shorter"],
      "Tren yaklaşırken perondaki müzisyenlerin notanın 'tizleştiğini' (higher) duyduğu anlatılır.",
    ],
    [
      "Many engineers believed that aircraft would be ---- apart if they tried to fly faster than sound.",
      ["shaken", "painted", "carried", "trained", "invited"],
      "Pek çok mühendisin uçakların sesten hızlı uçmaya çalışırlarsa 'sarsılarak' (shaken) parçalanacağına inandığı anlatılır.",
    ],
    [
      "Layers of air at different temperatures can ---- light, making distant objects appear in the wrong place.",
      ["bend", "freeze", "store", "weigh", "silence"],
      "Farklı sıcaklıktaki hava katmanlarının ışığı 'bükebildiği' (bend) ve uzaktaki nesneleri yanlış yerde gösterebildiği anlatılır.",
    ],
    [
      "The faint blue glow is ---- in the water surrounding the core of a nuclear reactor.",
      ["visible", "edible", "audible", "portable", "flexible"],
      "Soluk mavi ışıltının bir nükleer reaktörün çekirdeğini çevreleyen suda 'görülebildiği' (visible) anlatılır.",
    ],
    [
      "Just as the sun disappears below the horizon, observers may see a brief flash of green ----.",
      ["light up", "give off", "look after", "put off", "turn down"],
      "Güneş ufkun altına inerken gözlemcilerin kısa bir yeşil parıltının 'yandığını' (light up) görebileceği anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the lens was installed, many ships ---- on the rocks near the river mouth.",
      ["had been wrecked", "are wrecked", "have been wrecked", "will be wrecked", "wreck"],
      "Geçmişteki bir andan önce tamamlanmış edilgen eylem: 'had been wrecked'.",
    ],
    [
      "If the pilot had told doctors about his broken ribs, he ---- allowed to fly.",
      ["might not have been", "will not be", "is not", "had not been", "would not be"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might not have been'.",
    ],
    [
      "The experiment ---- on a railway line near Utrecht in 1845.",
      ["was carried out", "carried out", "has carried out", "carries out", "is carrying out"],
      "Deney yapılmıştır; edilgen geçmiş zaman: 'was carried out'.",
    ],
    [
      "---- the sun had not yet risen, the sailors saw it above the horizon.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Güneşin henüz doğmamış olması ile ufkun üzerinde görülmesi zıttır: 'Although'.",
    ],
    [
      "The physicist, ---- name is now given to the glow, first observed it in 1934.",
      ["whose", "who", "which", "whom", "where"],
      "Fizikçinin adı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only when the light faded at dusk ---- the physiologist notice that the red flowers looked darker.",
      ["could", "had", "was", "has", "did not"],
      "'Only when' ile devrik yapı; yeterlilik kipi: 'could'.",
    ],
    [
      "The aircraft reached a speed faster than sound, ---- many experts had thought impossible.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki ifadeyi niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
    ],
    [
      "The faster the train moved, ---- the change in pitch became.",
      ["the greater", "the greatest", "greater", "greatest", "so great"],
      "'The faster ..., the greater ...' paralel yapısı: 'the greater'.",
    ],
    [
      "The engineer recommended that the lens ---- in every major lighthouse.",
      ["be installed", "is installed", "was installed", "to be installed", "being installed"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be installed'.",
    ],
    [
      "Some sailors are said ---- castles floating in the air above the sea.",
      ["to have seen", "seeing", "to see", "seen", "having seen"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have seen'.",
    ],
    [
      "The musicians had perfect pitch ---- they could identify the notes accurately.",
      ["so", "unless", "although", "whereas", "as if"],
      "Kusursuz kulakları olmasının sonucu notaları doğru tanımlayabilmeleridir: 'so'.",
    ],
    [
      "The pilot used a piece of a broom handle to help him ---- the door of the cockpit.",
      ["close", "closing", "to closing", "closed", "be closed"],
      "'help sb (to) do sth' kalıbında yalın fiil: 'close'.",
    ],
    [
      "Had the air been perfectly clear, the observers ---- the flash.",
      ["might have seen", "see", "will see", "had seen", "are seeing"],
      "Devrik üçüncü tip koşul cümlesi: 'might have seen'.",
    ],
    [
      "Neither the old mirrors nor the thick lenses ---- as much light as the new design.",
      ["concentrated", "concentrating", "to concentrate", "have concentrate", "concentrates"],
      "'Neither ... nor' yapısında geçmiş zaman: 'concentrated'.",
    ],
  ],
  cloze: [
    {
      text:
        "Until the early nineteenth century, lighthouses used oil lamps with metal mirrors behind them to send their light out to sea, {1} much of the light was lost, and the beams could often be seen only a short distance away. A thick glass lens could have concentrated the light more effectively, but it would have been extremely heavy and expensive, {2} it would also have absorbed a great deal of light. The French physicist Augustin-Jean Fresnel found an elegant solution. He realised that a lens bends light mainly at its curved surfaces, {3} the glass inside does little except add weight. His design replaced the solid lens with a series of thin, concentric rings of glass, each shaped to bend light in the right direction. In 1823, the first such lens was fitted in a lighthouse standing at the mouth of a river in western France, {4} its beam was visible more than thirty kilometres out to sea. The design was soon adopted around the world, {5} it is thought to have saved countless ships and lives. Fresnel lenses are still used today in car headlights, projectors and solar power devices.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "or", "for"],
          "Lamba ve aynaların kullanılması ile ışığın büyük kısmının kaybolması zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Ağır ve pahalı olması ve çok ışık soğurması aynı yönde iki dezavantajdır: 'and'.",
        ],
        [
          "(23) ----",
          ["while", "because", "unless", "so that", "until"],
          "Kavisli yüzeylerin ışığı bükmesi ile içteki camın çok az iş görmesi karşılaştırılır: 'while'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Merceğin yerleştirilmesi ve ışığının otuz kilometreden görülmesi birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Tasarımın benimsenmesi ve sayısız hayat kurtarması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In 1842, the Austrian physicist Christian Doppler proposed that the frequency of a wave, such as sound or light, should appear to change if its source was moving towards or away from an observer. The idea was controversial, {1} in 1845 the Dutch scientist Christophorus Buys Ballot decided to test it with sound. He arranged for a group of horn players to stand on an open carriage pulled by a steam locomotive along a railway line near Utrecht, {2} they played a single steady note. Other musicians with perfect pitch stood beside the track. As the train approached, they heard the note as slightly higher than it really was, {3} as it moved away, they heard it as lower. The size of the change matched Doppler's predictions reasonably well, {4} Buys Ballot noted that the experiment was difficult because of the noise of the locomotive and the weather. The effect, which explains why the siren of a passing ambulance seems to change pitch, is now used in many technologies. Weather radar uses it to measure the speed of winds in storms, {5} astronomers use the shift in the light of distant galaxies to show that the universe is expanding.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Fikrin tartışmalı olması ve Buys Ballot'un onu sınamaya karar vermesi birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["while", "unless", "although", "so that", "until"],
          "Trenin ilerlemesi ile çalgıcıların nota çalması eşzamanlıdır: 'while'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "so that"],
          "Yaklaşırken tizleşmesi ve uzaklaşırken pesleşmesi birbirine eklenen iki gözlemdir: 'and'.",
        ],
        [
          "(29) ----",
          ["although", "because", "unless", "so that", "until"],
          "Sonuçların öngörülere uyması ile deneyin zor olması zıttır: 'although'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Hava durumu radarı ve gökbilimciler etkiyi kullanan iki örnek olarak birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although a thick glass lens could have concentrated the light, ----.",
      [
        "it would have been too heavy and expensive",
        "lighthouses are tall",
        "France has a long coast",
        "oil lamps burn",
        "the physicist later designed a lens made of thin rings of glass that was installed at the mouth of a river",
      ],
      "'Although' zıtlık ister: kalın bir cam mercek ışığı yoğunlaştırabilirdi ama çok ağır ve pahalı olurdu.",
    ],
    [
      "If the locomotive had been quieter, ----.",
      [
        "the experiment would have been easier to carry out",
        "trains are fast",
        "horns are loud",
        "Utrecht is in the Netherlands",
        "the musicians would have played a different note when the train was standing still in the station",
      ],
      "Üçüncü tip koşul: lokomotif daha sessiz olsaydı deney daha kolay yapılabilirdi.",
    ],
    [
      "----, the pilot did not tell the doctors about his injury.",
      [
        "Afraid that he would not be allowed to make the flight",
        "Although horses are fast",
        "Unless the aircraft was ready",
        "Since the desert is hot",
        "While engineers were preparing the rocket-powered aircraft for its attempt on the record",
      ],
      "Uçuşa izin verilmeyeceğinden korktuğu için pilot doktorlara yaralanmasından söz etmedi.",
    ],
    [
      "The image of a distant ship may appear above the horizon ----.",
      [
        "because warm air above cold water bends light downwards",
        "although ships are large",
        "unless the sea is calm",
        "so that sailors are confused",
        "while sailors in the Middle Ages were telling stories about castles that floated in the air",
      ],
      "Soğuk suyun üzerindeki sıcak hava ışığı aşağı doğru büktüğü için uzaktaki bir geminin görüntüsü ufkun üzerinde görünebilir.",
    ],
    [
      "Since the rods in the eye are most sensitive to blue-green light, ----.",
      [
        "blue objects seem relatively brighter in dim light",
        "eyes are round",
        "Prague is an old city",
        "flowers need sunlight",
        "the physiologist who described the effect also studied fingerprints and the cells of the brain",
      ],
      "'Since' neden bildirir: gözdeki çubuk hücreler mavi-yeşil ışığa en duyarlı olduğu için loş ışıkta mavi nesneler görece daha parlak görünür.",
    ],
    [
      "Not only does the blue glow look striking, ----.",
      [
        "but it is also used to detect particles in large underground experiments",
        "and water is transparent",
        "since reactors are large",
        "so blue is a cold colour",
        "unless the physicist had observed it in bottles of liquid exposed to radiation in the 1930s",
      ],
      "'Not only ... but also' yapısı tamamlanır: mavi ışıltı çarpıcı görünmekle kalmaz, büyük yeraltı deneylerinde parçacıkları saptamak için de kullanılır.",
    ],
    [
      "Once the aircraft passed the speed of sound, ----.",
      [
        "the shaking that the pilot had felt suddenly stopped",
        "aircraft are noisy",
        "the desert was empty",
        "rockets use fuel",
        "the pilot had broken two of his ribs in a riding accident a few days before the flight",
      ],
      "Uçak ses hızını geçince pilotun hissettiği sarsıntı aniden durdu.",
    ],
    [
      "Unless the air near the horizon is very clear, ----.",
      [
        "the green flash is unlikely to be seen",
        "the sun is bright",
        "sunsets are beautiful",
        "green is a colour",
        "the French novelist would not have written a book in which the characters search for the flash",
      ],
      "'Unless' olumsuz koşul: ufkun yakınındaki hava çok açık değilse yeşil parıltının görülmesi olası değildir.",
    ],
    [
      "The new lens was so effective ----.",
      [
        "that its light could be seen far out at sea",
        "although glass is fragile",
        "because rivers flow into the sea",
        "unless the weather was bad",
        "while the physicist was working as an engineer building roads in the south of France",
      ],
      "Yeni mercek o kadar etkiliydi ki ışığı denizde çok uzaklardan görülebiliyordu.",
    ],
    [
      "Even though the sun was still below the horizon, ----.",
      [
        "the crew saw it because its light was bent around the curve of the Earth",
        "the Arctic is cold",
        "ships use maps",
        "winter nights are long",
        "the explorers had spent the winter in a wooden hut that they built from the timbers of their ship",
      ],
      "'Even though' zıtlık ister: güneş hâlâ ufkun altında olsa da ışığı Dünya'nın eğriliği çevresinde büküldüğü için mürettebat onu gördü.",
    ],
    [
      "As the particles travel faster than light can travel in water, ----.",
      [
        "they produce a kind of shock wave of light",
        "water is wet",
        "light is fast",
        "reactors produce energy",
        "the physicist received the Nobel Prize together with two colleagues who explained his observations",
      ],
      "Parçacıklar ışığın sudaki hızından daha hızlı hareket ettiği için bir tür ışık şok dalgası üretir.",
    ],
  ],
  enTr: [
    [
      "The lens bends light mainly at its curved surfaces.",
      [
        "Mercek ışığı esas olarak kavisli yüzeylerinde büker.",
        "Mercek ışığı esas olarak düz yüzeylerinde soğurur.",
        "Kavisli yüzeyleri olmayan mercekler, ışığı daha etkili biçimde bükerek uzaklara gönderir.",
        "Işık merceğin yüzeyini büker.",
        "Mercek ışığı hiç bükmez.",
      ],
      "'The lens bends light' 'mercek ışığı büker', 'mainly at its curved surfaces' 'esas olarak kavisli yüzeylerinde' karşılığıdır.",
    ],
    [
      "The note sounded higher as the train approached.",
      [
        "Tren yaklaşırken nota daha tiz geldi.",
        "Tren uzaklaşırken nota daha tiz geldi.",
        "Trenin yaklaşmasıyla hiçbir değişiklik göstermeyen nota, müzisyenleri şaşırttı.",
        "Tren notayı çaldı.",
        "Nota trenin hızını değiştirdi.",
      ],
      "'The note sounded higher' 'nota daha tiz geldi', 'as the train approached' 'tren yaklaşırken' karşılığıdır.",
    ],
    [
      "The pilot had broken two ribs a few days before the flight.",
      [
        "Pilot, uçuştan birkaç gün önce iki kaburgasını kırmıştı.",
        "Pilot, uçuş sırasında iki kaburgasını kırdı.",
        "Uçuştan birkaç gün önce kaburgasını kıran pilot, uçuşu ertelemek zorunda kaldı.",
        "Uçak pilotun kaburgalarını korudu.",
        "Pilot hiç yaralanmadı.",
      ],
      "'The pilot had broken two ribs' 'pilot iki kaburgasını kırmıştı', 'a few days before the flight' 'uçuştan birkaç gün önce' karşılığıdır.",
    ],
    [
      "The image of the ship appeared upside down above the horizon.",
      [
        "Geminin görüntüsü ufkun üzerinde baş aşağı göründü.",
        "Gemi ufkun altında kayboldu.",
        "Ufkun üzerinde baş aşağı görünen gemiler, kısa süre sonra limana sağ salim ulaştı.",
        "Ufuk geminin üzerinde göründü.",
        "Geminin görüntüsü hiç görülmedi.",
      ],
      "'The image of the ship appeared upside down' 'geminin görüntüsü baş aşağı göründü', 'above the horizon' 'ufkun üzerinde' karşılığıdır.",
    ],
    [
      "The effect is used to detect particles that are otherwise invisible.",
      [
        "Etki, başka türlü görünmez olan parçacıkları saptamak için kullanılır.",
        "Etki, parçacıkları görünmez kılmak için kullanılır.",
        "Başka türlü görünmez olan parçacıklar, bu etki sayesinde yok edilebilir.",
        "Parçacıklar etkiyi saptar.",
        "Etki hiçbir amaçla kullanılmaz.",
      ],
      "'The effect is used to detect particles' 'etki parçacıkları saptamak için kullanılır', 'that are otherwise invisible' 'başka türlü görünmez olan' karşılığıdır.",
    ],
    [
      "The flash usually lasts no more than a second or two.",
      [
        "Parıltı genellikle bir iki saniyeden fazla sürmez.",
        "Parıltı genellikle birkaç saat sürer.",
        "Bir iki saniye süren parıltılar, gözlemcilere göre gün doğumunda daha uzun sürer.",
        "Parıltı iki kez görülür.",
        "Parıltı hiç sona ermez.",
      ],
      "'The flash usually lasts' 'parıltı genellikle sürer', 'no more than a second or two' 'bir iki saniyeden fazla değil' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Fresnel'in tasarımı, katı merceğin yerine bir dizi ince cam halka koydu.",
      [
        "Fresnel's design replaced the solid lens with a series of thin glass rings.",
        "Fresnel's design replaced thin glass rings with a solid lens.",
        "Fresnel tried to replace the solid lens with thin rings, but the design was too expensive to build.",
        "The glass rings designed Fresnel's lens.",
        "Fresnel's lens was made of metal.",
      ],
      "'Fresnel'in tasarımı koydu' 'Fresnel's design replaced', 'katı merceğin yerine bir dizi ince cam halka' 'the solid lens with a series of thin glass rings' karşılığıdır.",
    ],
    [
      "Kusursuz kulağı olan müzisyenler rayların yanında duruyordu.",
      [
        "Musicians with perfect pitch stood beside the track.",
        "Musicians with perfect pitch rode on the train.",
        "Musicians stood beside the track, but none of them could identify the notes accurately.",
        "The track was built by musicians.",
        "The musicians played inside a station.",
      ],
      "'Kusursuz kulağı olan müzisyenler' 'musicians with perfect pitch', 'rayların yanında duruyordu' 'stood beside the track' karşılığıdır.",
    ],
    [
      "Uçak, roket motoruyla çalışıyordu ve daha büyük bir uçaktan bırakıldı.",
      [
        "The aircraft was powered by a rocket engine and was dropped from a larger aircraft.",
        "The aircraft carried a larger aircraft into the sky.",
        "The aircraft was powered by a propeller and took off from a long runway in the desert.",
        "The rocket engine dropped the aircraft.",
        "The aircraft never left the ground.",
      ],
      "'Uçak roket motoruyla çalışıyordu' 'the aircraft was powered by a rocket engine', 've daha büyük bir uçaktan bırakıldı' 'and was dropped from a larger aircraft' karşılığıdır.",
    ],
    [
      "Denizciler bazen ufkun üzerinde havada süzülen kuleler gördüklerini bildirmiştir.",
      [
        "Sailors have sometimes reported seeing towers floating in the air above the horizon.",
        "Sailors have sometimes built towers on the horizon.",
        "Sailors reported towers above the horizon, but scientists have shown that they were all real buildings.",
        "Towers report sailors in the air.",
        "Sailors never look at the horizon.",
      ],
      "'Denizciler bazen bildirmiştir' 'sailors have sometimes reported', 'ufkun üzerinde havada süzülen kuleler gördüklerini' 'seeing towers floating in the air above the horizon' karşılığıdır.",
    ],
    [
      "Alacakaranlıkta kırmızı çiçekler mavi çiçeklerden daha koyu görünmeye başlar.",
      [
        "At dusk, red flowers begin to look darker than blue flowers.",
        "At dawn, blue flowers begin to look darker than red ones.",
        "At dusk, red flowers look brighter, although blue flowers cannot be seen at all in such light.",
        "Blue flowers make red flowers dark.",
        "Flowers lose their colour at noon.",
      ],
      "'Alacakaranlıkta' 'at dusk', 'kırmızı çiçekler mavi çiçeklerden daha koyu görünmeye başlar' 'red flowers begin to look darker than blue flowers' karşılığıdır.",
    ],
    [
      "Fizikçi, ışıltıyı ilk kez radyasyona maruz kalan sıvı şişelerinde gözlemledi.",
      [
        "The physicist first observed the glow in bottles of liquid exposed to radiation.",
        "The physicist produced radiation from bottles of liquid.",
        "The physicist expected to see a glow in the bottles, but he observed nothing unusual.",
        "The bottles observed the physicist.",
        "The glow was first seen in the sky.",
      ],
      "'Fizikçi ışıltıyı ilk kez gözlemledi' 'the physicist first observed the glow', 'radyasyona maruz kalan sıvı şişelerinde' 'in bottles of liquid exposed to radiation' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "During the Second World War, pilots of fast aircraft diving at high speed sometimes found that their planes began to shake violently and became difficult to control as they approached the speed of sound. Some engineers believed that a 'sound barrier' existed that no aircraft could safely cross. After the war, the United States built a small experimental aircraft powered by a rocket engine and shaped, it is said, like a bullet, since bullets were known to travel faster than sound. Because the rocket used fuel very quickly, the aircraft was carried into the sky beneath a large bomber and released at high altitude. On 14 October 1947, over the desert of California, a test pilot named Chuck Yeager flew it to about one and a half times the speed of sound. Two nights earlier, he had fallen from a horse and broken two ribs. Fearing that he would be grounded, he told only a few colleagues, and because the pain made it difficult to close the door of the cockpit, a friend gave him a short piece of broom handle to use as a lever. As the aircraft passed the speed of sound, the shaking stopped and the flight became smooth. On the ground, observers heard a loud bang, the first sonic boom produced by a piloted aircraft in level flight. The achievement was kept secret for several months.",
      questions: [
        [
          "According to the passage, the aircraft was shaped like a bullet because ----.",
          [
            "bullets were known to travel faster than sound",
            "it carried weapons",
            "it was cheap to build",
            "the bomber that carried it could hold only an aircraft of that shape",
            "pilots preferred it",
          ],
          "Metne göre mermilerin sesten hızlı gittiği biliniyordu.",
        ],
        [
          "The piece of broom handle was needed because ----.",
          [
            "the pilot's injury made a simple task painful",
            "the door was broken",
            "the controls had failed",
            "the engineers had forgotten to fit a handle to the outside of the aircraft",
            "it was used to steer",
          ],
          "Kaburga ağrısı kokpit kapısını kapatmayı zorlaştırıyordu.",
        ],
        [
          "It can be understood from the passage that, once the aircraft passed the speed of sound, ----.",
          [
            "it became easier to fly",
            "it broke apart",
            "the engine stopped",
            "the pilot was forced to land immediately in the desert",
            "the shaking increased",
          ],
          "Sarsıntı durdu ve uçuş düzgünleşti.",
        ],
      ],
    },
    {
      text:
        "A mirage is not an illusion of the mind but a real optical effect caused by the bending of light as it passes through layers of air at different temperatures. Because light travels slightly more quickly through warm air than through cold, its path curves whenever it crosses from one layer to another. One striking form occurs over cold seas or ice, where a layer of cold air lies beneath warmer air. Here, light is bent downwards, and objects that are below the horizon, such as distant ships or coastlines, may appear above it, sometimes upside down or stretched upwards into tall shapes. When conditions produce several layers, the images can change rapidly and look like towers or castles. This complex form is called a Fata Morgana, after the enchantress of medieval legend who was believed to create such visions to lure sailors to their deaths. It has been observed for centuries in the Strait of Messina, between Italy and Sicily, and in polar regions, and it may explain some reports of ghost ships and of islands that later could not be found.",
      questions: [
        [
          "According to the passage, a mirage is ----.",
          [
            "a real optical effect rather than a trick of the mind",
            "a kind of dream",
            "an illusion created by the brain",
            "caused only by the heat of the sun shining on the surface of the sea",
            "visible only at night",
          ],
          "Metne göre serap zihnin yanılsaması değil gerçek bir optik etkidir.",
        ],
        [
          "Over cold seas, distant objects may appear above the horizon because ----.",
          [
            "light is bent downwards towards the observer",
            "the objects float",
            "the sea reflects them",
            "the air near the surface is much hotter than the air above it",
            "the observer is high up",
          ],
          "Soğuk hava sıcak havanın altında olduğundan ışık aşağı doğru bükülür.",
        ],
        [
          "It can be understood from the passage that some stories of ghost ships ----.",
          [
            "may have been caused by optical effects",
            "have been proved true",
            "come from Sicily only",
            "were invented by the enchantress of medieval legend",
            "are about real castles",
          ],
          "Hayalet gemi ve sonradan bulunamayan ada hikâyelerini açıklayabilir.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, the Czech physiologist Jan Evangelista Purkinje noticed something odd while walking in a garden at dawn. In the grey early light, the blue flowers seemed bright, while the red ones, which looked vivid at midday, appeared almost black. As the sun rose, the relationship reversed. Purkinje described the observation in 1825, and the shift is now named after him. Its explanation lies in the two kinds of light-sensitive cells in the human retina. Cone cells, which are responsible for colour vision, work well in bright light and are most sensitive to yellowish-green light. Rod cells, by contrast, are far more sensitive and take over in dim conditions, but they cannot distinguish colours and respond best to light of a shorter, more bluish-green wavelength. As light fades in the evening, the eye gradually switches from cones to rods, so blue and green objects seem relatively brighter and red ones darker. The effect has had practical consequences. Because red light has little effect on the rods, red lamps are used on ships at night, in aircraft cockpits and by astronomers, allowing people to read instruments without losing their ability to see in the dark. Some artists have also exploited the effect, knowing that the colours of a painting will appear different in a dim room.",
      questions: [
        [
          "According to the passage, in the early morning light Purkinje noticed that ----.",
          [
            "red flowers looked darker than blue ones",
            "all flowers looked grey",
            "blue flowers disappeared",
            "the colours of the flowers did not change at all when the sun finally rose",
            "red flowers looked brighter",
          ],
          "Metne göre şafakta mavi çiçekler parlak, kırmızılar ise neredeyse siyah görünüyordu.",
        ],
        [
          "The effect occurs because, in dim light, ----.",
          [
            "rod cells, which respond best to bluish light, take over",
            "cone cells become more sensitive",
            "the eye stops working",
            "red light is absorbed by the air before it reaches the eye of the observer",
            "colours become brighter",
          ],
          "Loş ışıkta mavimsi ışığa en iyi yanıt veren çubuk hücreler devreye girer.",
        ],
        [
          "It can be understood from the passage that red lamps are used at night because ----.",
          [
            "they allow people to see without harming their night vision",
            "they are cheaper",
            "they are brighter than other lamps",
            "artists prefer to paint in rooms lit by them during the evening",
            "they frighten animals",
          ],
          "Kırmızı ışık çubuk hücreleri az etkilediğinden karanlıkta görme yeteneği korunur.",
        ],
      ],
    },
    {
      text:
        "Nothing can travel faster than light in a vacuum. Light travels more slowly in water or glass, however, and particles with very high energy can move through these materials faster than light itself can. When an electrically charged particle does so, it produces a faint blue light, in a way similar to that in which an aircraft travelling faster than sound produces a sonic boom. The effect was first observed in 1934 by the Soviet physicist Pavel Cherenkov, who noticed a weak blue glow in bottles of liquid exposed to radiation and showed through careful experiments that it was not caused by any of the known kinds of luminescence. Two of his colleagues soon provided a theoretical explanation, and the three shared the Nobel Prize in Physics in 1958. The glow can be seen in the water that surrounds the cores of certain nuclear reactors, giving it an eerie blue appearance. It also has important practical uses. Because the angle at which the light is emitted depends on the speed of the particle, detectors that record the light can be used to measure particles. Huge tanks of extremely pure water, surrounded by thousands of sensitive light detectors and placed deep underground to shield them from other radiation, use the effect to detect neutrinos, elusive particles that rarely interact with matter.",
      questions: [
        [
          "According to the passage, the blue light is produced when ----.",
          [
            "charged particles move through a material faster than light can in that material",
            "light travels faster than in a vacuum",
            "water is heated",
            "neutrinos are absorbed by the walls of large underground tanks",
            "aircraft fly faster than sound",
          ],
          "Metne göre yüklü parçacıklar o maddede ışıktan hızlı hareket ettiğinde oluşur.",
        ],
        [
          "Cherenkov's experiments showed that the glow ----.",
          [
            "was not a known form of luminescence",
            "was caused by heat",
            "was a kind of fire",
            "could be seen only in the water surrounding nuclear reactors",
            "was harmless",
          ],
          "Bilinen ışıldama türlerinin hiçbirinden kaynaklanmadığını gösterdi.",
        ],
        [
          "It can be understood from the passage that the detectors are placed deep underground in order to ----.",
          [
            "protect them from unwanted radiation",
            "keep the water warm",
            "make them easier to build",
            "allow neutrinos to interact more often with the rock around them",
            "hide them",
          ],
          "Diğer ışınımdan korumak için derin yeraltına yerleştirilir.",
        ],
      ],
    },
    {
      text:
        "On rare occasions, just as the last part of the sun disappears below a clear horizon, observers see a brief flash of green light, usually lasting no more than a second or two. The 'green flash' is a real phenomenon, caused by the way the atmosphere bends light. Air acts rather like a weak prism, bending light of different colours by slightly different amounts. Near the horizon, the light from the sun passes through a great thickness of air, and the different colours are separated slightly, with the green and blue images of the sun appearing a little higher than the red one. As the sun sets, the green image is therefore the last to disappear. Blue light is usually scattered so much by the atmosphere that it cannot be seen, which is why the flash appears green rather than blue. Seeing the flash requires a distant, sharp horizon, such as the sea, and very clear air; layers of air at different temperatures can magnify the effect. The phenomenon became widely known after the French novelist Jules Verne published a novel in 1882 in which the characters travel to Scotland in search of the green flash, believing that whoever sees it will never be deceived in matters of love. It can also be seen at sunrise, though it is harder to catch.",
      questions: [
        [
          "According to the passage, the green flash occurs because ----.",
          [
            "the atmosphere separates the colours of sunlight slightly",
            "the sun changes colour",
            "the sea reflects green light",
            "the novelist's characters travelled to Scotland to search for it",
            "the eye becomes tired",
          ],
          "Metne göre atmosfer bir prizma gibi renkleri biraz ayırır.",
        ],
        [
          "The flash is green rather than blue because ----.",
          [
            "blue light is scattered by the atmosphere",
            "blue light is too bright",
            "the sea absorbs green light",
            "blue images of the sun always appear lower than red ones",
            "green is the sun's real colour",
          ],
          "Mavi ışık atmosferce o kadar saçılır ki görülemez.",
        ],
        [
          "It can be understood from the passage that the best place to see the flash is ----.",
          [
            "where there is a clear, distant horizon",
            "in a city",
            "in a forest",
            "anywhere in Scotland during the winter months",
            "at midday",
          ],
          "Deniz gibi uzak, keskin bir ufuk ve çok açık hava gerekir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Climbers on mountains sometimes see a huge, ghostly figure in the mist below them, surrounded by rings of coloured light. ---- The effect is named after a peak in Germany where it is often observed.",
      [
        "It is in fact their own shadow, cast by the low sun onto the cloud and magnified by the way the eye judges its distance.",
        "Mountains are cold places.",
        "Mist forms in valleys.",
        "Some climbers who saw it in the past believed that it was a sign of bad luck or of approaching danger.",
        "Shadows are dark.",
      ],
      "Boşluk görüntünün ne olduğunu açıklayan bir cümle gerektirir; boşluğa bunun alçak güneşin buluta düşürdüğü kendi gölgeleri olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "On some summer nights far to the north or south, people may notice thin, silvery-blue clouds glowing in the sky long after sunset. ---- They were first reported in 1885, two years after a huge volcanic eruption in Indonesia.",
      [
        "These clouds form about eighty kilometres up, so high that they are still lit by the sun when the ground below is dark.",
        "Summer nights are short.",
        "Clouds bring rain.",
        "Scientists have found that the clouds have become brighter and more common over the past century.",
        "The sky is blue.",
      ],
      "Boşluk bulutların neden parladığını açıklayan bir cümle gerektirir; boşluğa yaklaşık seksen kilometre yükseklikte oluştukları için yer karanlıkken hâlâ güneşle aydınlandıklarını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1597, Dutch explorers spending the winter on the Arctic island of Novaya Zemlya saw the sun appear about two weeks before they expected it. ---- The effect, now named after the island, is caused by light being bent around the curve of the Earth by layers of air.",
      [
        "Their calculations were later shown to be correct; the sun was in fact still below the horizon.",
        "The Arctic is very cold.",
        "Explorers keep diaries.",
        "The crew had been trapped by the ice and had built a hut from the timbers of their ship.",
        "Islands are surrounded by sea.",
      ],
      "Boşluk gözlemin neden şaşırtıcı olduğunu açıklayan bir cümle gerektirir; boşluğa hesaplarının doğru olduğunu ve güneşin hâlâ ufkun altında olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In a few deserts around the world, large sand dunes produce a deep, loud humming sound that can be heard kilometres away. ---- The sound occurs only when the sand is dry and when the grains are of a particular size and shape.",
      [
        "It is produced when sand avalanches down the steep face of a dune, causing millions of grains to move together.",
        "Deserts are dry places.",
        "Sand is made of rock.",
        "Travellers in the past sometimes believed that the sound was made by spirits or by drums buried beneath the sand.",
        "Camels cross deserts.",
      ],
      "Boşluk sesin nasıl oluştuğunu açıklayan bir cümle gerektirir; boşluğa kumun kumulun dik yüzünden çığ gibi kaymasıyla oluştuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In some places, a small proportion of residents report hearing a persistent low humming noise that others cannot hear. ---- One of the best-known cases is in the town of Taos in New Mexico, where investigators in the 1990s were unable to find a source.",
      [
        "Explanations that have been suggested include industrial machinery, electrical equipment and sensitivity of the listener's own ear.",
        "Many towns are noisy.",
        "New Mexico is a desert state.",
        "Some residents have said that the noise prevents them from sleeping and causes headaches.",
        "Sound travels through air.",
      ],
      "Boşluk sesin olası nedenlerini anlatan bir cümle gerektirir; boşluğa önerilen açıklamaların sanayi makineleri, elektrik donanımı ve dinleyicinin kulak duyarlılığı olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "While making ice cream at school in Tanzania in 1963, a pupil called Erasto Mpemba saw that a hot mixture for ice cream froze faster than a cold one. ---- Although many experiments have been carried out, scientists still disagree about whether the effect is real and, if so, what causes it.",
      [
        "His teachers laughed at him, but he later published a paper on the observation with a physicist.",
        "Tanzania is in East Africa.",
        "Ice cream is cold.",
        "Similar observations had been described centuries earlier by the Greek philosopher Aristotle and by other writers.",
        "Freezers keep food cold.",
      ],
      "Boşluk gözlemin sonrasını anlatan bir cümle gerektirir; boşluğa öğretmenlerinin güldüğünü ama daha sonra bir fizikçiyle makale yayımladığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The full moon often seems far larger when it is near the horizon than when it is high in the sky.",
        "Measurements show that its size in the sky is almost exactly the same.",
        "The Moon has many craters.",
        "The effect is an illusion created by the brain.",
        "Scientists still debate exactly how it works.",
      ],
      odd: 2,
      why: "Parça ay yanılsamasını anlatır. Ay'da pek çok krater bulunduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Shortly after sunset, mountain peaks sometimes glow with a soft pink or red light.",
        "This is called alpenglow.",
        "It occurs when sunlight reflected or scattered in the atmosphere lights up the snow after the sun has set.",
        "Many people ski in the Alps.",
        "The effect is most striking on snow-covered peaks.",
      ],
      odd: 3,
      why: "Parça dağ zirvelerindeki pembe ışıltıyı anlatır. Pek çok kişinin Alplerde kayak yaptığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "On very dark nights, a faint triangle of light can sometimes be seen rising from the horizon after sunset.",
        "Known as zodiacal light, it is sunlight scattered by dust in the solar system.",
        "Telescopes are expensive.",
        "It is easiest to see in spring and autumn.",
        "Light pollution has made it invisible in most cities.",
      ],
      odd: 2,
      why: "Parça zodyak ışığını anlatır. Teleskopların pahalı olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "During storms, sailors have long reported a blue glow at the tops of the masts of their ships.",
        "Known as St Elmo's fire, it appears when strong electric fields surround pointed objects.",
        "Ships once had tall wooden masts.",
        "It is a form of plasma, similar to the glow in a neon lamp.",
        "Sailors often regarded it as a good sign.",
      ],
      odd: 2,
      why: "Parça St Elmo ateşini anlatır. Gemilerin bir zamanlar uzun ahşap direkleri olduğunu söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "When the sun is hidden behind clouds, rays of light sometimes appear to spread out across the sky.",
        "These are called crepuscular rays.",
        "They are beams of sunlight passing between clouds, made visible by dust or moisture in the air.",
        "Rainy days can be depressing.",
        "Although the rays appear to spread out, they are in fact almost parallel.",
      ],
      odd: 3,
      why: "Parça bulut aralarından yayılan ışık hüzmelerini anlatır. Yağmurlu günlerin moral bozucu olabileceğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Rainbows form when sunlight is bent and reflected inside raindrops.",
        "Each colour leaves the drops at a slightly different angle.",
        "Sometimes a fainter second rainbow appears outside the first, with its colours reversed.",
        "The region of sky between them appears darker.",
        "Many children enjoy painting rainbows.",
      ],
      odd: 4,
      why: "Parça gökkuşağının oluşumunu anlatır. Pek çok çocuğun gökkuşağı resmi yapmayı sevdiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
