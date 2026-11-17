import type { YokdilDeneme } from "./types";

export const FEN_70: YokdilDeneme = {
  no: 70,
  field: "fen",
  vocab: [
    [
      "By measuring how the satellite's signal changed in pitch, the two scientists could ---- its exact orbit.",
      ["calculate", "destroy", "ignore", "decorate", "borrow"],
      "Uydunun sinyalinin perdesinin nasıl değiştiğini ölçerek iki bilim insanının tam yörüngesini 'hesaplayabildiği' (calculate) anlatılır.",
    ],
    [
      "The reef was so dangerous that it had ---- dozens of ships before the lighthouse was built.",
      ["wrecked", "rescued", "guided", "attracted only", "painted"],
      "Kayalığın o kadar tehlikeli olduğu anlatılır ki deniz feneri yapılmadan önce düzinelerce gemiyi 'batırmıştı' (wrecked).",
    ],
    [
      "The experiment showed that radio waves ---- from an aircraft could be detected on the ground.",
      ["reflected", "invented", "frozen", "purchased", "forgotten"],
      "Deneyin bir uçaktan 'yansıyan' (reflected) radyo dalgalarının yerde algılanabileceğini gösterdiği anlatılır.",
    ],
    [
      "The engineer noticed a faint hiss that seemed to ---- from a particular part of the sky.",
      ["originate", "escape", "retire", "apologise", "compete"],
      "Mühendisin gökyüzünün belirli bir bölümünden 'kaynaklanıyor' (originate) gibi görünen hafif bir hışırtı fark ettiği anlatılır.",
    ],
    [
      "Without corrections for relativity, the satellites' clocks would ---- from clocks on Earth by microseconds every day.",
      ["drift", "learn", "protect", "borrow", "celebrate"],
      "Görelilik düzeltmeleri olmasaydı uyduların saatlerinin her gün Dünya'daki saatlerden mikrosaniyeler kadar 'kayacağı' (drift) anlatılır.",
    ],
    [
      "Many coastal residents were sad when the last foghorns were ----.",
      ["switched off", "taken after", "looked up", "run into", "given in"],
      "Son sis düdükleri 'kapatıldığında' (switched off) pek çok kıyı sakininin üzüldüğü anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the first satellite navigation system was working, the scientists ---- on the idea for several years.",
      ["had been working", "work", "have been working", "will be working", "are working"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been working'.",
    ],
    [
      "If the satellite had not been launched, the scientists ---- their method.",
      ["might never have developed", "never develop", "will never develop", "had never developed", "would never develop"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might never have developed'.",
    ],
    [
      "The stones of the lighthouse ---- carefully so that they locked together.",
      ["were shaped", "shaped", "have shaped", "shape", "are shaping"],
      "Taşlar biçimlendirilmiştir; edilgen geçmiş zaman: 'were shaped'.",
    ],
    [
      "---- the government had asked for a death ray, the scientists suggested detecting aircraft instead.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Hükümetin ölüm ışını istemesi ile bilim insanlarının uçak saptamayı önermesi zıttır: 'Although'.",
    ],
    [
      "The engineer, ---- antenna rotated on wheels, was studying static on telephone lines.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin anteni; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the deliberate error was removed ---- ordinary users obtain accurate positions.",
      ["could", "had", "were", "have", "does"],
      "'Only after' ile devrik yapı, kip yardımcı fiili: 'could ... obtain'.",
    ],
    [
      "The lighthouse stands on a reef off the Scottish coast, ---- the sea covers the rocks at high tide.",
      ["where", "which", "when", "whose", "that"],
      "'a reef' yer bildirir; deniz orada kayaları örter: 'where'.",
    ],
    [
      "The higher the satellite is, ---- its clock runs compared with clocks on Earth.",
      ["the faster", "the fastest", "faster", "fastest", "so fast"],
      "'The higher ..., the faster ...' paralel yapısı: 'the faster'.",
    ],
    [
      "The navy demanded that the system ---- accurate enough to guide submarines.",
      ["be", "is", "was", "to be", "being"],
      "'demand that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
    [
      "The tower is said ---- more than a hundred metres tall.",
      ["to have been", "being", "to be being", "been", "having"],
      "Geçmişe ait durum için mastarın geçmiş biçimi: 'to have been'.",
    ],
    [
      "The foghorn produced a deep sound ---- it could be heard far out at sea.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Sis düdüğünün derin ses çıkarmasının amacı denizin uzaklarından duyulabilmesidir: 'so that'.",
    ],
    [
      "The engineer had his antenna ---- on a set of old car wheels.",
      ["mounted", "mount", "mounting", "to mount", "mounts"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'mounted'.",
    ],
    [
      "Had the experiment failed, the country ---- an important defence during the war.",
      ["might have lacked", "lacks", "will lack", "had lacked", "is lacking"],
      "Devrik üçüncü tip koşul cümlesi: 'might have lacked'.",
    ],
    [
      "Neither the engineers nor the astronomers ---- interested in the discovery at first.",
      ["were", "was being", "is", "has been", "be"],
      "'Neither ... nor' yapısında fiil yakın özneye (astronomers) uyar: 'were'.",
    ],
  ],
  cloze: [
    {
      text:
        "After its launch in October 1957, the world's first artificial satellite, Sputnik 1, broadcast a simple radio signal that could be picked up by amateurs around the world. At the Applied Physics Laboratory of Johns Hopkins University, in the United States, two young physicists, William Guier and George Weiffenbach, decided to record it. They noticed that, as the satellite approached and then moved away, the frequency of the signal changed, {1} this effect, known as the Doppler shift, is similar to the way the pitch of an ambulance siren seems to fall as it passes. By carefully analysing the changes over a single pass, they found that they could work out the satellite's entire orbit, {2} their director soon asked whether the process could be reversed. If the position of a satellite was known exactly, could a receiver on the ground use the same signals to work out its own position? The answer was yes, {3} the United States Navy, which needed a way for its submarines to find their positions precisely, began developing a system based on the idea. Called Transit, it became operational in 1964, {4} at first it was used only by the military. It was later made available to ships and other civilian users, {5} it remained in service until 1996, by which time it had been replaced by the more accurate Global Positioning System, or GPS.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Frekansın değişmesi ve bu etkinin Doppler kayması olarak bilinmesi birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Yörüngeyi hesaplayabilmeleri ve yöneticilerinin süreci tersine çevirmeyi sorması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "but", "or", "unless", "although"],
          "Yanıtın evet olması ve Donanma'nın sistem geliştirmeye başlaması birbirini izler: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "until"],
          "Sistemin işler hâle gelmesi ve başta yalnızca askerî kullanılması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "Sivillere açılması ve 1996'ya dek hizmette kalması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Some eighteen kilometres out to sea from the Scottish town of Arbroath lies the Bell Rock, a reef that is covered by the sea for all but a few hours each day. For centuries, it was a serious danger to shipping, {1} in one storm in 1799, around seventy ships were lost along the nearby coast. Building a lighthouse there seemed almost impossible, because the rock was underwater for most of the time, {2} workers could only reach it at low tide, often for just two hours. Between 1807 and 1810, the engineer Robert Stevenson led the construction. The workers were housed first aboard a vessel moored close by and afterwards in a temporary wooden barracks built on legs above the rock, {3} they cut the foundation into the reef by hand whenever the tide was out. The granite and sandstone blocks were shaped on land, {4} each was cut so that it fitted tightly into the blocks around it, like the pieces of a puzzle, making the tower extremely strong against the waves. The lighthouse, which is thirty-five metres tall, was first lit in February 1811, {5} it has stood ever since. It is the world's oldest surviving lighthouse built on a rock that is regularly covered by the sea.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Kayalığın büyük tehlike olması ve bir fırtınada yetmiş geminin kaybolması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["so", "but", "or", "unless", "although"],
          "Kayanın çoğunlukla su altında olmasının sonucu işçilerin yalnızca cezirde ulaşabilmesidir: 'so'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "İşçilerin barakada yaşaması ve temeli elle oyması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Blokların karada biçimlendirilmesi ve birbirine sıkıca oturacak biçimde kesilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Fenerin ilk kez yakılması ve o zamandan beri ayakta durması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the satellite's signal was very simple, ----.",
      [
        "it allowed the scientists to calculate its entire orbit",
        "satellites orbit the Earth",
        "radio waves travel fast",
        "amateurs enjoy listening",
        "it had been launched by the Soviet Union in October 1957",
      ],
      "'Although' zıtlık ister: uydunun sinyali çok basit olsa da bilim insanlarının tüm yörüngesini hesaplamasına olanak verdi.",
    ],
    [
      "If the blocks had not been cut to lock together, ----.",
      [
        "the tower might not have survived the waves",
        "granite is hard",
        "Scotland is cold",
        "lighthouses are tall",
        "the workers would have lived in a wooden barracks above the rock",
      ],
      "Üçüncü tip koşul: bloklar birbirine kenetlenecek biçimde kesilmeseydi kule dalgalara dayanamayabilirdi.",
    ],
    [
      "----, the radio waves bounced off the aircraft and were picked up by a receiver.",
      [
        "Sent out by a powerful transmitter",
        "Although the aircraft was small",
        "Unless the weather was fine",
        "Since Britain is an island",
        "While the scientists were being asked to build a weapon",
      ],
      "Güçlü bir vericiden gönderilen radyo dalgaları uçaktan sekip bir alıcı tarafından algılandı.",
    ],
    [
      "The engineer concluded that the hiss came from space ----.",
      [
        "because it appeared four minutes earlier each day, following the stars",
        "although he was not an astronomer",
        "unless the antenna was broken",
        "so that he could win a prize",
        "while his employer was more interested in improving telephone calls",
      ],
      "Mühendis hışırtının her gün dört dakika erken, yıldızları izleyerek ortaya çıkması nedeniyle uzaydan geldiği sonucuna vardı.",
    ],
    [
      "Since the satellites move fast and are far from the Earth's gravity, ----.",
      [
        "their clocks run at a slightly different rate from clocks on the ground",
        "satellites need power",
        "gravity pulls objects down",
        "clocks tell the time",
        "the system was first developed by the military in the 1970s",
      ],
      "'Since' neden bildirir: uydular hızlı hareket ettiğinden ve Dünya'nın çekiminden uzak olduğundan saatleri yerdeki saatlerden biraz farklı hızda işler.",
    ],
    [
      "Not only did the foghorns warn ships of danger, ----.",
      [
        "but they also became a familiar part of life in coastal towns",
        "and fog is grey",
        "since ships are large",
        "so sailors sing",
        "unless they had been replaced by modern electronic navigation systems",
      ],
      "'Not only ... but also' yapısı tamamlanır: sis düdükleri yalnızca gemileri tehlikeye karşı uyarmakla kalmadı, kıyı kasabalarındaki yaşamın tanıdık bir parçası da oldu.",
    ],
    [
      "Once the deliberate error had been removed from the signals, ----.",
      [
        "ordinary receivers became about ten times more accurate",
        "signals travel through space",
        "receivers are small",
        "errors are common",
        "the military had developed the system mainly for its own use",
      ],
      "Sinyallerdeki kasıtlı hata kaldırılınca sıradan alıcılar yaklaşık on kat daha doğru hâle geldi.",
    ],
    [
      "Unless the clocks on the satellites are corrected, ----.",
      [
        "position errors would grow by several kilometres each day",
        "satellites are expensive",
        "clocks are accurate",
        "the Earth rotates",
        "the system would not have replaced an older navigation system in 1996",
      ],
      "'Unless' olumsuz koşul: uydulardaki saatler düzeltilmezse konum hataları her gün birkaç kilometre büyür.",
    ],
    [
      "The light of the ancient tower was so bright ----.",
      [
        "that it was said to be visible from far out at sea",
        "although it was old",
        "because Egypt is sunny",
        "unless it was night",
        "while the city was being built by the successors of Alexander the Great",
      ],
      "Eski kulenin ışığı o kadar parlaktı ki denizin çok uzaklarından görülebildiği söylenirdi.",
    ],
    [
      "Even though the engineer's discovery was important, ----.",
      [
        "he was soon moved to other work and never followed it up",
        "radio is useful",
        "the sky is large",
        "stars are bright",
        "an amateur built a dish-shaped antenna in his garden a few years later",
      ],
      "'Even though' zıtlık ister: mühendisin keşfi önemli olsa da kısa sürede başka bir işe aktarıldı ve keşfin peşinden hiç gitmedi.",
    ],
    [
      "As the reef was underwater for most of the day, ----.",
      [
        "the builders could work only for short periods at low tide",
        "reefs are made of rock",
        "the sea is salty",
        "ships carry goods",
        "the lighthouse was first lit in February 1811",
      ],
      "Kayalık günün büyük bölümünde su altında olduğu için inşaatçılar yalnızca cezirde kısa sürelerle çalışabildi.",
    ],
  ],
  enTr: [
    [
      "The frequency of the signal changed as the satellite passed overhead.",
      [
        "Uydu tepeden geçerken sinyalin frekansı değişti.",
        "Uydu yere inerken sinyalin frekansı hiç değişmedi.",
        "Sinyalin frekansı değişince uydu rotasından çıktı.",
        "Frekans uyduyu tepeden geçirdi.",
        "Uydu hiç sinyal göndermedi.",
      ],
      "'The frequency of the signal changed' 'sinyalin frekansı değişti', 'as the satellite passed overhead' 'uydu tepeden geçerken' karşılığıdır.",
    ],
    [
      "The workers could reach the rock only at low tide.",
      [
        "İşçiler kayaya yalnızca cezirde ulaşabiliyordu.",
        "İşçiler kayaya yalnızca medde ulaşabiliyordu.",
        "İşçiler kayaya hiçbir zaman ulaşamadı.",
        "Kaya işçilere cezirde ulaştı.",
        "Orada hiç kaya yoktu.",
      ],
      "'The workers could reach the rock' 'işçiler kayaya ulaşabiliyordu', 'only at low tide' 'yalnızca cezirde' karşılığıdır.",
    ],
    [
      "A bomber flew back and forth along the path of the radio beam.",
      [
        "Bir bombardıman uçağı radyo ışınının yolu boyunca ileri geri uçtu.",
        "Bir bombardıman uçağı radyo vericisinin üzerine iniş yaptı.",
        "Radyo ışını bombardıman uçağını yere indirdi.",
        "Işın uçağı ileri geri taşıdı.",
        "Hiç uçak kullanılmadı.",
      ],
      "'A bomber flew back and forth' 'bir bombardıman uçağı ileri geri uçtu', 'along the path of the radio beam' 'radyo ışınının yolu boyunca' karşılığıdır.",
    ],
    [
      "The signal seemed to come from the centre of our galaxy.",
      [
        "Sinyal gökadamızın merkezinden geliyor gibi görünüyordu.",
        "Sinyal Dünya'nın merkezinden geliyor gibi görünüyordu.",
        "Gökadamızın merkezi sinyali tamamen engelliyordu.",
        "Gökada sinyali merkeze gönderdi.",
        "Hiç sinyal yoktu.",
      ],
      "'The signal seemed to come' 'sinyal geliyor gibi görünüyordu', 'from the centre of our galaxy' 'gökadamızın merkezinden' karşılığıdır.",
    ],
    [
      "Each satellite carries several extremely accurate clocks.",
      [
        "Her uydu son derece doğru birkaç saat taşır.",
        "Her uydu hiç saat taşımaz.",
        "Son derece doğru saatler uyduları taşır.",
        "Her uydudaki saatler sürekli bozulur.",
        "Uydu yoktur.",
      ],
      "'Each satellite carries' 'her uydu taşır', 'several extremely accurate clocks' 'son derece doğru birkaç saat' karşılığıdır.",
    ],
    [
      "The tower was damaged by a series of earthquakes.",
      [
        "Kule bir dizi depremle hasar gördü.",
        "Kule bir dizi depremi önledi.",
        "Depremlerden etkilenmeyen kule bugün de ayakta.",
        "Depremler kuleyi inşa etti.",
        "Hiç deprem olmadı.",
      ],
      "'The tower was damaged' 'kule hasar gördü', 'by a series of earthquakes' 'bir dizi depremle' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Uydunun konumu biliniyorsa yerdeki bir alıcı kendi konumunu hesaplayabilir.",
      [
        "If the satellite's position is known, a receiver on the ground can calculate its own position.",
        "If the receiver's position is known, the satellite can calculate the ground.",
        "A receiver on the ground can never calculate its position from a satellite.",
        "The ground calculates the satellite's receiver.",
        "There are no satellites.",
      ],
      "'Uydunun konumu biliniyorsa' 'if the satellite's position is known', 'yerdeki bir alıcı kendi konumunu hesaplayabilir' 'a receiver on the ground can calculate its own position' karşılığıdır.",
    ],
    [
      "Deniz feneri iki yüz yılı aşkın süredir ayakta duruyor.",
      [
        "The lighthouse has stood for more than two hundred years.",
        "The lighthouse stood for only two years.",
        "The lighthouse was destroyed two hundred years ago.",
        "Two hundred years built the lighthouse.",
        "There is no lighthouse.",
      ],
      "'Deniz feneri ayakta duruyor' 'the lighthouse has stood', 'iki yüz yılı aşkın süredir' 'for more than two hundred years' karşılığıdır.",
    ],
    [
      "Deney, uçakların radyo dalgalarıyla saptanabileceğini kanıtladı.",
      [
        "The experiment proved that aircraft could be detected with radio waves.",
        "The aircraft proved that radio waves could be detected by experiments.",
        "The experiment showed that aircraft could not be detected.",
        "Radio waves proved the experiment.",
        "There was no experiment.",
      ],
      "'Deney kanıtladı' 'the experiment proved', 'uçakların radyo dalgalarıyla saptanabileceğini' 'that aircraft could be detected with radio waves' karşılığıdır.",
    ],
    [
      "Amatör bir gökbilimci, bahçesinde çanak biçimli bir anten yaptı.",
      [
        "An amateur astronomer built a dish-shaped antenna in his garden.",
        "A dish-shaped antenna built an amateur astronomer's garden.",
        "An amateur astronomer bought a telescope in a shop.",
        "The garden built the antenna.",
        "There was no astronomer.",
      ],
      "'Amatör bir gökbilimci yaptı' 'an amateur astronomer built', 'bahçesinde çanak biçimli bir anten' 'a dish-shaped antenna in his garden' karşılığıdır.",
    ],
    [
      "Hükümet, sinyallere kasıtlı olarak bir hata ekliyordu.",
      [
        "The government was deliberately adding an error to the signals.",
        "The signals were deliberately adding an error to the government.",
        "The government was removing every error from the signals.",
        "The error added the government.",
        "There were no signals.",
      ],
      "'Hükümet ekliyordu' 'the government was adding', 'sinyallere kasıtlı olarak bir hata' 'deliberately an error to the signals' karşılığıdır.",
    ],
    [
      "Dalgıçlar, deniz dibinde kuleden kalmış olabilecek büyük taş bloklar buldu.",
      [
        "Divers found large stone blocks on the seabed that may have come from the tower.",
        "The tower found divers on the seabed.",
        "Divers found nothing on the seabed.",
        "Stone blocks found the divers.",
        "There were no divers.",
      ],
      "'Dalgıçlar buldu' 'divers found', 'deniz dibinde kuleden kalmış olabilecek büyük taş bloklar' 'large stone blocks on the seabed that may have come from the tower' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the early 1930s, as the threat of war grew, British officials were worried that bombers would be able to attack the country with little warning. In 1935, the Air Ministry asked Robert Watson-Watt, a scientist who ran a radio research station, whether it might be possible to build a 'death ray' that would use radio waves to kill pilots or disable aircraft. Watson-Watt asked his assistant, Arnold Wilkins, to do the calculations. Wilkins quickly showed that a death ray was impossible, because it would require far too much power. He also pointed out, however, that aircraft reflected radio waves, and that it might be possible to detect them. On 26 February 1935, the two men carried out a simple test near the town of Daventry, where the BBC had a powerful short-wave radio transmitter. They set up a receiver in a field, and a bomber was flown back and forth along the path of the transmitter's beam. As it passed, the signal on the receiver's screen clearly rose and fell, showing that the aircraft had been detected at a distance of about thirteen kilometres. Impressed, the government provided funding, and within a few years a chain of radar stations had been built along the south and east coasts of Britain. During the Battle of Britain in 1940, these stations gave the Royal Air Force early warning of German attacks, allowing it to send fighters to meet them. Many historians consider radar to have been one of the decisive technologies of the war.",
      questions: [
        [
          "According to the passage, the government originally asked about ----.",
          [
            "a weapon that would use radio waves",
            "a way to detect aircraft",
            "a new radio station",
            "improving the BBC's short-wave transmitter near the town of Daventry",
            "training pilots",
          ],
          "Metne göre Hava Bakanlığı radyo dalgalarıyla pilotları öldürecek bir 'ölüm ışını' yapılıp yapılamayacağını sordu.",
        ],
        [
          "The test near Daventry showed that ----.",
          [
            "an aircraft could be detected by the radio waves it reflected",
            "a death ray could be built",
            "bombers could not fly at night",
            "radio waves kill pilots",
            "the BBC transmitter was too weak",
          ],
          "Uçak geçerken alıcıdaki sinyal yükselip düştü; uçak yaklaşık on üç kilometreden saptandı.",
        ],
        [
          "It can be understood from the passage that radar ----.",
          [
            "played an important role in the defence of Britain",
            "was invented by German scientists",
            "was never used in the war",
            "was developed after 1940",
            "was a type of weapon",
          ],
          "Britanya Savaşı'nda Kraliyet Hava Kuvvetleri'ne erken uyarı verdi; pek çok tarihçi onu belirleyici teknolojilerden sayar.",
        ],
      ],
    },
    {
      text:
        "In 1931, Karl Jansky, a young engineer at Bell Telephone Laboratories in New Jersey, was given the task of identifying sources of static that interfered with radio telephone calls across the Atlantic. He built a large antenna, about thirty metres long, mounted on wheels taken from an old car, so that it could be turned slowly in a circle; his colleagues nicknamed it 'Jansky's merry-go-round'. Over many months, he recorded the static coming from different directions. He found that some of it was caused by nearby and distant thunderstorms, but there was also a faint, steady hiss of unknown origin. At first, it seemed to follow the Sun, but over time Jansky noticed that it reached its peak about four minutes earlier each day. This is exactly the difference between a day measured by the Sun and a day measured by the stars, and it showed that the source was outside the solar system. By 1933, he had concluded that the signal came from the direction of the constellation Sagittarius, towards the centre of our galaxy. His discovery was reported on the front page of the New York Times, but neither Bell Labs, which was interested only in improving telephone services, nor most professional astronomers followed it up, and Jansky was moved to other work. An amateur, Grote Reber, was inspired by the discovery. In 1937, he built a dish-shaped antenna about nine metres wide in the garden of his mother's house in Illinois, and over the following years he made the first maps of radio waves from the sky. Their work founded the science of radio astronomy.",
      questions: [
        [
          "According to the passage, Jansky's original task was to ----.",
          [
            "find the causes of interference with telephone calls",
            "study the stars",
            "build a radio telescope",
            "make maps of radio waves coming from the centre of the galaxy",
            "repair cars",
          ],
          "Metne göre Atlantik ötesi radyo telefon görüşmelerini bozan parazitin kaynaklarını belirlemekti.",
        ],
        [
          "Jansky concluded that the hiss came from outside the solar system because ----.",
          [
            "it followed the timing of the stars rather than the Sun",
            "it was very loud",
            "it came from thunderstorms",
            "it stopped at night",
            "astronomers told him",
          ],
          "Her gün yaklaşık dört dakika erken zirveye ulaşıyordu; bu, yıldızlara göre ölçülen günle uyumludur.",
        ],
        [
          "It can be understood from the passage that Grote Reber ----.",
          [
            "continued research that others had neglected",
            "worked for Bell Labs",
            "discovered static",
            "was a professional astronomer",
            "lived in New Jersey",
          ],
          "Bell Labs ve profesyonel gökbilimciler keşfin peşinden gitmezken amatör Reber araştırmayı sürdürdü.",
        ],
      ],
    },
    {
      text:
        "American military engineers designed the satellite navigation network known as GPS during the 1970s, and it became fully operational in 1995. Some thirty satellites circle roughly 20,000 km overhead, each carrying extremely accurate atomic clocks and continuously broadcasting its position and the time. A receiver on the ground picks up signals from several satellites and, by measuring the tiny differences in the time the signals take to arrive, calculates its own location. Because radio signals travel at the speed of light, a timing mistake as small as a microsecond means an error of about three hundred metres in position. This creates a surprising problem. According to Einstein's theories of relativity, clocks that move fast run slightly slower, while clocks in weaker gravity, far from the Earth, run slightly faster. For the GPS satellites, the second effect is larger, and their clocks gain about thirty-eight millionths of a second a day compared with clocks on the ground. If this were not corrected, position errors would build up by about ten kilometres every day. The satellite clocks are therefore adjusted to run at a slightly different rate before launch. For many years, the military deliberately added errors to the signals available to civilians, so that ordinary receivers were accurate only to about a hundred metres. In May 2000, the American government ended this practice, and civilian accuracy improved immediately to around ten metres, helping to make GPS a part of everyday life in cars and phones.",
      questions: [
        [
          "According to the passage, a GPS receiver works out its position by ----.",
          [
            "measuring differences in the time signals take to arrive",
            "taking photographs of the satellites",
            "measuring the Earth's gravity",
            "comparing its own clock with clocks on the ground in a nearby city",
            "using maps stored in the satellites",
          ],
          "Metne göre birkaç uydudan gelen sinyallerin varış süresindeki küçük farkları ölçer.",
        ],
        [
          "The satellite clocks run faster than clocks on the ground mainly because ----.",
          [
            "gravity is weaker far from the Earth",
            "they move slowly",
            "they are newer",
            "they are made in America",
            "the satellites are cold",
          ],
          "Dünya'dan uzakta yerçekimi daha zayıftır; bu etki daha büyüktür ve saatler günde yaklaşık 38 mikrosaniye ileri gider.",
        ],
        [
          "It can be understood from the passage that before 2000 civilian GPS ----.",
          [
            "was deliberately made less accurate",
            "did not exist",
            "was more accurate than military GPS",
            "was used only in phones",
            "was free of errors",
          ],
          "Ordu sivillere açık sinyallere kasıtlı hatalar ekliyordu; sıradan alıcılar yalnızca yaklaşık yüz metre doğruluktaydı.",
        ],
      ],
    },
    {
      text:
        "For centuries, lighthouses helped sailors to avoid dangerous coasts at night, but in fog their lights could not be seen. Ships and coastal stations used bells, guns and horns to warn of danger, but these were often too quiet to be heard far out at sea. In the nineteenth century, inventors began to develop more powerful sound signals. One story, which may be partly legend, tells of a Scottish engineer in Canada, Robert Foulis, who in the 1850s heard his daughter playing the piano in the evening and noticed that the low notes carried further through the fog than the high ones. He proposed a steam-powered whistle that produced a deep tone. Other inventors developed horns powered by compressed air, and in the early twentieth century a Canadian engineer introduced the diaphone, which used a piston to produce a powerful, low note that ended in a distinctive grunt. Foghorns were placed on lighthouses and headlands around the world, and each station often had its own pattern of blasts, so that sailors could identify their position by sound. For many people living on the coast, the regular, mournful sound of the foghorn on misty nights became a familiar part of life. With the development of radar, radio beacons and satellite navigation, however, foghorns became less necessary. From the 1980s, many were replaced by small electronic horns with a much weaker, higher sound, or switched off altogether. Some communities campaigned to keep them, and in 2013 a composer wrote a piece of music for brass bands, ships' horns and the foghorn at a lighthouse in the north-east of England, which was performed to mark its retirement.",
      questions: [
        [
          "According to the passage, foghorns were needed because ----.",
          [
            "lighthouse lights could not be seen in fog",
            "ships had no lights",
            "bells were too loud",
            "sailors could not read maps of the coast without the sound of a horn",
            "lighthouses were too expensive",
          ],
          "Metne göre sisli havada deniz fenerlerinin ışığı görülemiyordu.",
        ],
        [
          "The story about the piano is used to explain why ----.",
          [
            "foghorns were designed to produce low notes",
            "engineers liked music",
            "steam is powerful",
            "Canada is foggy",
            "foghorns were switched off",
          ],
          "Alçak notaların sisin içinde daha uzağa ulaştığının fark edildiği anlatılır.",
        ],
        [
          "It can be understood from the passage that the decline of foghorns ----.",
          [
            "was caused by new navigation technologies",
            "was welcomed by everyone",
            "happened in the nineteenth century",
            "led to more shipwrecks",
            "was caused by a composer",
          ],
          "Radar, radyo işaretleri ve uydu navigasyonu geliştikçe sis düdükleri daha az gerekli hâle geldi.",
        ],
      ],
    },
    {
      text:
        "In the third century BC, at the mouth of Alexandria's harbour, on an island called Pharos, in Egypt, the rulers of the city built a huge lighthouse. Ancient writers credited its design to an architect named Sostratus. Descriptions suggest that its height exceeded a hundred metres, placing it among the tallest structures built by humans at the time, and it was counted among the Seven Wonders of the Ancient World. Its structure probably rose in three stages, from a square lower part through an octagonal stage to a cylindrical summit, where a fire burned at night. Some accounts claim that a large mirror reflected the light of the fire, making it visible far out at sea, and that it could even be used to set enemy ships on fire, although this is almost certainly an exaggeration. The lighthouse guided ships safely into one of the busiest ports of the ancient world for more than a thousand years. The name of the island became the word for 'lighthouse' in several languages, including the French 'phare' and the Italian 'faro'. Repeated earthquakes weakened the tower, which had largely collapsed by the fourteenth century; in the following century, its stones were used to build a fortress on the same site. In 1994, a team of underwater archaeologists began exploring the waters of the harbour and found hundreds of large stone blocks and statues on the seabed, some possibly belonging to the lighthouse.",
      questions: [
        [
          "According to the passage, the light at the top of the tower came from ----.",
          [
            "a fire",
            "electric lamps",
            "the Sun alone",
            "oil lamps placed in each of the windows of the eight-sided middle section",
            "the stars",
          ],
          "Metne göre yuvarlak tepe bölümünde geceleri bir ateş yanıyordu.",
        ],
        [
          "The writer suggests that the claim about burning enemy ships ----.",
          [
            "is very unlikely to be true",
            "has been proved",
            "was made by Sostratus",
            "explains the tower's name",
            "was recorded by archaeologists",
          ],
          "Bunun neredeyse kesinlikle bir abartı olduğu belirtilir.",
        ],
        [
          "It can be understood from the passage that the lighthouse ----.",
          [
            "left a lasting mark on the languages of Europe",
            "is still standing",
            "was built in the fourteenth century",
            "was never used by ships",
            "was destroyed by enemy ships",
          ],
          "Adanın adı Fransızca 'phare' ve İtalyanca 'faro' gibi birçok dilde 'deniz feneri' sözcüğü oldu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1940, two physicists at the University of Birmingham, John Randall and Harry Boot, built a device called the cavity magnetron. ---- Later that year, a British scientific mission took it to the United States, where it was put into mass production.",
      [
        "It produced powerful microwaves, making it possible to build radar sets small enough to fit inside aircraft.",
        "Birmingham is a large city in England.",
        "Physicists use mathematics.",
        "A similar device is used today in microwave ovens.",
        "The United States has many factories.",
      ],
      "Boşluk aygıtın önemini anlatıp seri üretime bağlanan bir cümle gerektirir; boşluğa güçlü mikrodalgalar üreterek uçaklara sığacak kadar küçük radar setleri yapılmasını olanaklı kıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2016, the European Union's own satellite navigation system, Galileo, began offering services to the public. ---- Most modern smartphones can now receive signals from several of these systems at the same time.",
      [
        "Like the Russian and Chinese systems, it was designed partly so that Europe would not depend entirely on the American GPS.",
        "Galileo was an Italian astronomer.",
        "Satellites are launched by rockets.",
        "Its full set of satellites took many years to complete.",
        "Smartphones are very popular.",
      ],
      "Boşluk sistemlerin çokluğuna zemin hazırlayan bir cümle gerektirir; boşluğa Rus ve Çin sistemleri gibi onun da Avrupa'nın tamamen Amerikan GPS'ine bağımlı olmaması için tasarlandığını söyleyen cümle gelmelidir.",
    ],
    [
      "In October 1957, the large radio telescope at Jodrell Bank, near Manchester, was used to track the rocket that had carried Sputnik 1 into orbit. ---- The telescope's director later said that the publicity it gained helped to save the project from financial difficulties.",
      [
        "It was the only instrument in the West able to do so, and the achievement attracted worldwide attention.",
        "Manchester is in the north of England.",
        "Rockets burn fuel.",
        "The telescope has a dish seventy-six metres wide.",
        "Telescopes are used by astronomers.",
      ],
      "Boşluk 'kazandığı tanınırlık' ifadesine zemin hazırlayan bir cümle gerektirir; boşluğa bunu yapabilen Batı'daki tek alet olduğunu ve başarının dünya çapında ilgi çektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Where it was impossible to build a lighthouse, ships called lightships were anchored near dangerous sandbanks. ---- The crews often spent weeks at a time on board in stormy seas.",
      [
        "They carried powerful lights on their masts and sounded fog signals in bad weather.",
        "Sandbanks change shape over time.",
        "Ships need anchors.",
        "Today, floating buoys with lamps do much of their work.",
        "Sailors wear waterproof clothing.",
      ],
      "Boşluk fener gemilerinin işlevini açıklayan bir cümle gerektirir; boşluğa direklerinde güçlü ışıklar taşıdıklarını ve kötü havada sis işaretleri verdiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "Before the invention of radar, some countries built huge concrete 'sound mirrors' along their coasts. ---- They were soon made obsolete, however, as aircraft became faster and radar was developed.",
      [
        "These curved walls collected the sound of approaching aircraft engines so that listeners could hear them minutes earlier.",
        "Concrete is made from cement.",
        "Coasts are often windy.",
        "Several of them still stand on the coast of southern England.",
        "Engines are noisy.",
      ],
      "Boşluk ses aynalarının işlevini açıklayıp 'ancak' karşıtlığına zemin hazırlayan bir cümle gerektirir; boşluğa bu kavisli duvarların yaklaşan uçak motorlarının sesini toplayıp dinleyicilerin onları dakikalar önce duymasını sağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Modern weather radars do not only show where rain is falling. ---- This allows forecasters to detect rotating storms that may produce tornadoes and to issue warnings earlier.",
      [
        "They can also measure whether raindrops are moving towards or away from the radar, revealing the movement of the wind inside a storm.",
        "Rain is important for crops.",
        "Weather forecasts are shown on television.",
        "Some radars can also detect large flocks of birds.",
        "Storms can be dangerous.",
      ],
      "Boşluk 'yalnızca ... değil' yapısını tamamlayan bir cümle gerektirir; boşluğa yağmur damlalarının radara doğru mu yoksa uzaklaşarak mı hareket ettiğini ölçüp fırtına içindeki rüzgârın hareketini ortaya koyabildiklerini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Pigeons can find their way home over hundreds of kilometres.",
        "They appear to use the position of the Sun, the Earth's magnetic field and even smells.",
        "Pigeons are common in many cities.",
        "During the world wars, they were used to carry messages.",
        "Scientists still do not fully understand how they navigate.",
      ],
      odd: 2,
      why: "Parça güvercinlerin yön bulmasını anlatır. Güvercinlerin pek çok kentte yaygın olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Satellite navigation signals are very weak when they reach the ground.",
        "This makes them easy to block with cheap devices that send out interference.",
        "Some criminals use such devices to stop vehicles from being tracked.",
        "Many people drive to work.",
        "Governments are developing backup systems in case signals are lost.",
      ],
      odd: 3,
      why: "Parça uydu navigasyon sinyallerinin engellenebilmesini anlatır. Pek çok kişinin işe arabayla gittiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Most lighthouses are now automatic.",
        "Their lamps are switched on and off by sensors that detect daylight.",
        "In the past, keepers lived in or beside the lighthouse and tended the light every night.",
        "Many keepers kept detailed records of the weather.",
        "Lighthouses are often painted in bright stripes.",
      ],
      odd: 4,
      why: "Parça deniz fenerlerinin otomatikleşmesini anlatır. Deniz fenerlerinin çoğunlukla parlak çizgilerle boyandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Radar can also be used to study the migration of insects.",
        "Special radars point upwards and detect insects flying high above the ground.",
        "Studies have shown that billions of insects migrate over southern England each year.",
        "Insects have six legs.",
        "Many of them travel at night, using high winds to cover long distances.",
      ],
      odd: 3,
      why: "Parça radarla böcek göçünün incelenmesini anlatır. Böceklerin altı bacağı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Aircraft carry a device that sends out a signal if they crash.",
        "Satellites can detect the signal and locate the wreckage.",
        "Similar devices are carried by ships and some hikers.",
        "Hiking is a popular hobby.",
        "Such systems have helped to rescue tens of thousands of people.",
      ],
      odd: 3,
      why: "Parça kaza durumunda sinyal gönderen cihazları anlatır. Yürüyüşün popüler bir hobi olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some large radio telescopes have been used to send messages into space.",
        "Others have been used to bounce radar signals off the Moon and planets.",
        "Such studies have measured the distances to Venus and Mars very precisely.",
        "Venus is often visible in the evening sky.",
        "They have also revealed the shapes of asteroids passing close to the Earth.",
      ],
      odd: 3,
      why: "Parça radyo teleskoplarının radar çalışmalarında kullanılmasını anlatır. Venüs'ün çoğunlukla akşam gökyüzünde görülebildiğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
