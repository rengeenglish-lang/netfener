import type { YokdilDeneme } from "./types";

export const FEN_47: YokdilDeneme = {
  no: 47,
  field: "fen",
  vocab: [
    [
      "The inquiry found that the designer had failed to ---- for the force of strong winds.",
      ["allow", "apply", "apologise", "attend", "ask"],
      "Tasarımcının güçlü rüzgârların kuvvetini 'hesaba katmadığı' anlatılır; 'allow for' kalıbı uygundur.",
    ],
    [
      "Engineers removed small amounts of soil to ---- reduce the tower's tilt.",
      ["gradually", "suddenly", "carelessly", "loudly", "rarely"],
      "Kulenin eğimini 'yavaş yavaş' (gradually) azaltmak için az miktarda toprak çıkarıldığı anlatılır.",
    ],
    [
      "The flood of 1953 ---- the government to build a vast system of sea defences.",
      ["prompted", "prevented", "excused", "accused", "doubted"],
      "1953 selinin hükümeti büyük bir deniz savunma sistemi kurmaya 'sevk ettiği' (prompted) anlatılır.",
    ],
    [
      "The bridge was designed to be ----, so that it could bend slightly during earthquakes.",
      ["flexible", "fragile", "temporary", "decorative", "invisible"],
      "Köprünün depremlerde hafifçe eğilebilmesi için 'esnek' (flexible) tasarlandığı anlatılır.",
    ],
    [
      "The cost of the building rose to fourteen times the original ----.",
      ["estimate", "audience", "landscape", "ceremony", "harvest"],
      "Binanın maliyetinin ilk 'tahminin' (estimate) on dört katına çıktığı anlatılır.",
    ],
    [
      "The builders almost ---- after the second collapse, but the bridge was finally completed in 1917.",
      ["gave up", "took off", "showed up", "looked after", "made out"],
      "İnşaatçıların ikinci çöküşten sonra neredeyse 'vazgeçtiği' (gave up) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The bridge ---- for less than two years when it collapsed.",
      ["had been open", "is open", "has been open", "will be open", "opens"],
      "Geçmişteki bir olaydan önce süregelen durum: 'had been open'.",
    ],
    [
      "If the student had not asked her question, the weakness ---- unnoticed.",
      ["might have gone", "goes", "will go", "had gone", "is going"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have gone'.",
    ],
    [
      "The barrier ---- by Queen Beatrix in 1986.",
      ["was opened", "opened", "has opened", "opens", "is opening"],
      "Bariyer açılmıştır; edilgen geçmiş zaman: 'was opened'.",
    ],
    [
      "---- the tower leans by about four metres, it is no longer in danger of falling.",
      ["Although", "Because", "Unless", "So that", "Once"],
      "Eğik durması ile düşme tehlikesinin kalmaması zıttır: 'Although'.",
    ],
    [
      "The architect, ---- design won the competition, resigned before the building was finished.",
      ["whose", "who", "which", "whom", "where"],
      "Mimarın tasarımı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The engineers worked at night ---- the public would not panic.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "Not until the barrier was finished in 1986 ---- the project considered complete.",
      ["was", "did", "had", "has", "is"],
      "'Not until' ile devrik yapı; edilgen yüklem: 'was'.",
    ],
    [
      "The taller a building is, ---- the wind becomes as a design problem.",
      ["the more important", "the most important", "more important", "most important", "as important"],
      "'The taller ..., the more ...' paralel yapısı: 'the more important'.",
    ],
    [
      "The safety net saved nineteen men, ---- became known as the 'Halfway to Hell Club'.",
      ["who", "which", "whose", "whom", "what"],
      "Adamları niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "The tunnel is said ---- the longest railway tunnel in the world.",
      ["to be", "being", "be", "to being", "been"],
      "'be said to do sth' kalıbı: 'to be'.",
    ],
    [
      "The engineer admitted ---- a serious mistake in his calculations.",
      ["having made", "to make", "make", "made", "to have making"],
      "'admit doing sth'; geçmişteki eylem için 'having made'.",
    ],
    [
      "The bridge would have been shorter ---- the earthquake had not moved the towers apart.",
      ["if", "unless", "so", "because", "although"],
      "Geçmişe yönelik gerçek dışı koşul; deprem kuleleri uzaklaştırmasaydı köprü daha kısa olurdu: 'if'.",
    ],
    [
      "Neither the designer nor the builders ---- the danger posed by the wind.",
      ["understood", "understanding", "to understand", "have understand", "understands"],
      "'Neither ... nor' yapısında fiile yakın özne çoğuldur; geçmiş zaman: 'understood'.",
    ],
    [
      "It was the strong winds ---- caused the train to fall into the river.",
      ["that", "what", "where", "whose", "when"],
      "'It was ... that' vurgulu yapı: 'that'.",
    ],
  ],
  cloze: [
    {
      text:
        "On the stormy evening of 28 December 1879, a train carrying about seventy-five people was crossing the Tay Bridge near Dundee, in Scotland, when the central section of the bridge collapsed. The train plunged into the river, and no one survived. The bridge, designed by the engineer Thomas Bouch, had been opened only nineteen months earlier, {1} at the time it was the longest bridge in the world. Queen Victoria had travelled across it, and Bouch had been knighted for his work. The official investigation decided that the structure had been 'badly designed, badly constructed and badly maintained'. Above all, Bouch had not made adequate allowance for the force of the wind, {2} some of the cast-iron parts were of poor quality. Witnesses also reported that trains often crossed the bridge faster than the permitted speed, {3} may have made the structure shake. Bouch's reputation was ruined, and he died within a year. The disaster had a lasting influence on engineering. The design of the Forth Bridge, {4} Bouch had also been asked to build, was abandoned and replaced by a much stronger steel structure. A second Tay Bridge was built next to the first, {5} the stumps of the original piers can still be seen beside it in the water today.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "until"],
          "Köprünün yakın zamanda açılması ve dünyanın en uzunu olması bilgileri birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "but", "unless", "although", "so that"],
          "Rüzgârın hesaba katılmaması ile dökme demir parçaların kalitesizliği aynı yönde iki kusurdur: 'and'.",
        ],
        [
          "(23) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "whose", "when"],
          "Virgüller arasında köprüyü niteleyen ve nesne görevindeki ilgi zamiri: 'which'.",
        ],
        [
          "(25) ----",
          ["and", "but", "unless", "although", "because"],
          "Yeni köprünün yapılması ve eski ayakların hâlâ görülmesi bilgileri birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Construction of the bell tower of Pisa Cathedral in Italy began in 1173. By the time the builders had reached the third storey, the tower had started to lean, {1} it stood on soft ground made of clay, sand and shells. Work stopped for almost a century, owing to wars, {2} this delay actually saved the tower: it gave the soil time to become firmer under the weight. When building resumed, the masons tried to correct the tilt by making the upper storeys a little higher on one side; as a result, the tower is in fact slightly curved. Over the following centuries, the lean continued to increase, {3} by 1990 the top was about 4.5 metres out of line. Fearing collapse, the authorities closed the tower to the public. A committee of experts, including the British engineer John Burland, considered many solutions. After an attempt to freeze the soil caused an alarming movement, the team chose a method called soil extraction: drilling at an angle beneath the higher side and removing small amounts of earth, {4} the tower would slowly settle back. Between 1999 and 2001, about seventy tonnes of soil were removed, {5} reduced the lean by roughly forty-five centimetres. The tower, which reopened in 2001, should stay safe for two centuries or more, experts believe.",
      blanks: [
        [
          "(26) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Kulenin eğilmesinin nedeni yumuşak zemindir: 'because'.",
        ],
        [
          "(27) ----",
          ["but", "so", "or", "for", "nor"],
          "Gecikme ile bu gecikmenin aslında kuleyi kurtarması arasında beklenmedik bir zıtlık vardır: 'but'.",
        ],
        [
          "(28) ----",
          ["and", "or", "unless", "but", "although"],
          "Eğimin artması ve 1990'daki durumu bilgileri birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["so that", "even though", "unless", "as if", "whereas"],
          "Toprak çıkarmanın amacı kulenin yavaşça geri oturmasıdır: 'so that'.",
        ],
        [
          "(30) ----",
          ["which", "who", "where", "what", "whose"],
          "Virgülden sonra toprak çıkarma işlemini niteleyen ilgi zamiri: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the Tay Bridge was the longest bridge in the world, ----.",
      [
        "it collapsed less than two years after it opened",
        "Dundee is in Scotland",
        "the river is wide",
        "trains are heavy",
        "the engineer who designed it had been asked to build a second bridge across another wide river further south",
      ],
      "'Although' zıtlık ister: dünyanın en uzun köprüsü olmasına rağmen açılıştan iki yıl geçmeden çöktü.",
    ],
    [
      "If the masons had not stopped work for almost a century, ----.",
      [
        "the tower might have fallen down",
        "the tower is in Italy",
        "clay is soft",
        "wars were common",
        "the builders would have made the upper storeys of the tower slightly taller on one side to correct the tilt",
      ],
      "Üçüncü tip koşul: işçiler neredeyse bir yüzyıl ara vermeseydi kule yıkılabilirdi.",
    ],
    [
      "----, the building was strengthened without the public being told.",
      [
        "To avoid causing panic in the city",
        "Although the steel was strong",
        "Unless the wind changed",
        "Because the student was clever",
        "While the architect was designing the church that stands under one corner of the building on the same site",
      ],
      "Şehirde paniğe yol açmamak için bina halka söylenmeden güçlendirildi.",
    ],
    [
      "The Quebec Bridge collapsed during construction ----.",
      [
        "because its weight had been badly underestimated",
        "although it was in Canada",
        "so that the river was crossed",
        "unless the steel arrived",
        "while engineering students at Canadian universities were attending a ceremony in which they received iron rings",
      ],
      "Quebec Köprüsü ağırlığı çok yanlış hesaplandığı için inşaat sırasında çöktü.",
    ],
    [
      "Since the walkways hung from the ceiling on thin steel rods, ----.",
      [
        "the strength of the connections was critical",
        "the hotel had a large lobby",
        "steel is a metal",
        "Kansas City is in Missouri",
        "the guests who had gathered in the lobby for a dance competition were able to watch from the walkways above",
      ],
      "'Since' neden bildirir: geçitler tavana ince çelik çubuklarla asılı olduğu için bağlantıların sağlamlığı kritikti.",
    ],
    [
      "Not only did the 1953 flood kill more than 1,800 people, ----.",
      [
        "but it also led to a vast programme of sea defences",
        "and the Netherlands is flat",
        "since the sea was rough",
        "so the dykes were old",
        "unless the government had already begun planning to close off several estuaries in the south-west of the country",
      ],
      "'Not only ... but also' yapısı tamamlanır: 1953 seli 1.800'den fazla kişiyi öldürmekle kalmadı, büyük bir deniz savunma programına da yol açtı.",
    ],
    [
      "Once the architect had resigned, ----.",
      [
        "the interior was completed by other designers",
        "Sydney is a large city",
        "the roof was white",
        "concert halls need good acoustics",
        "he had been trying for several years to find a way of building the curved shells of the roof at a reasonable cost",
      ],
      "Mimar istifa ettikten sonra iç mekân başka tasarımcılar tarafından tamamlandı.",
    ],
    [
      "Unless engineers make a tall building's shape irregular, ----.",
      [
        "the wind may cause it to sway dangerously",
        "tall buildings are expensive",
        "glass is transparent",
        "Dubai is hot",
        "the lifts that carry visitors to the observation deck near the top will need to travel at very high speeds",
      ],
      "'Unless' olumsuz koşul: mühendisler yüksek binanın şeklini düzensiz yapmazsa rüzgâr onu tehlikeli biçimde sallayabilir.",
    ],
    [
      "The safety net was so effective ----.",
      [
        "that it saved the lives of nineteen workers",
        "although the bridge is red",
        "unless the fog was thick",
        "because San Francisco is foggy",
        "while the chief engineer was trying to persuade the public that a bridge could be built across the strait",
      ],
      "Güvenlik ağı o kadar etkiliydi ki on dokuz işçinin hayatını kurtardı.",
    ],
    [
      "Even though the Kobe earthquake struck during construction, ----.",
      [
        "the bridge's towers were not damaged",
        "Japan has many islands",
        "earthquakes are common",
        "the bridge is long",
        "the engineers had designed the bridge to withstand winds of nearly three hundred kilometres per hour",
      ],
      "'Even though' zıtlık ister: Kobe depremi inşaat sırasında olsa da köprünün kuleleri zarar görmedi.",
    ],
    [
      "As the wheel turns, ----.",
      [
        "the boats in its two arms stay level",
        "Scotland has canals",
        "the wheel is made of steel",
        "boats are popular",
        "the canals that it connects were closed for several decades because there was too little traffic on them",
      ],
      "Çark dönerken iki kolundaki tekneler düz kalır.",
    ],
  ],
  enTr: [
    [
      "The investigation found that the bridge had been poorly designed.",
      [
        "Soruşturma, köprünün kötü tasarlandığı sonucuna vardı.",
        "Soruşturma, köprünün iyi tasarlandığı sonucuna vardı.",
        "Köprüyü tasarlayan mühendis, soruşturmanın sonuçlarını kabul etmeyerek bütün suçu köprüyü inşa eden işçilere yükledi.",
        "Köprü soruşturma tarafından tasarlandı.",
        "Soruşturma hiçbir sonuca varmadı.",
      ],
      "'The investigation found that' 'soruşturma ... sonucuna vardı', 'the bridge had been poorly designed' 'köprünün kötü tasarlandığı' karşılığıdır.",
    ],
    [
      "The delay gave the soil time to become firmer.",
      [
        "Gecikme, toprağa daha sağlam hâle gelmesi için zaman tanıdı.",
        "Gecikme, toprağın yumuşamasına neden oldu.",
        "Toprağın daha sağlam hâle gelmesini beklemek isteyen ustalar, işi bilerek uzun bir süre boyunca durdurmaya karar verdi.",
        "Toprak gecikmeye neden oldu.",
        "Gecikme toprağı etkilemedi.",
      ],
      "'The delay gave the soil time' 'gecikme toprağa zaman tanıdı', 'to become firmer' 'daha sağlam hâle gelmesi için' karşılığıdır.",
    ],
    [
      "A student's question led the engineer to discover a serious weakness.",
      [
        "Bir öğrencinin sorusu, mühendisin ciddi bir zayıflığı keşfetmesine yol açtı.",
        "Mühendis, bir öğrencinin ciddi bir zayıflığını keşfetti.",
        "Mühendisin keşfettiği ciddi zayıflık hakkında soru soran öğrenci, daha sonra bu konuda ünlü bir tez yazdı.",
        "Öğrenci soru sormadı.",
        "Zayıflık mühendis tarafından gizlendi.",
      ],
      "'A student's question led the engineer to discover' 'bir öğrencinin sorusu mühendisin keşfetmesine yol açtı', 'a serious weakness' 'ciddi bir zayıflık' karşılığıdır.",
    ],
    [
      "A small change to the design doubled the load on the connection.",
      [
        "Tasarımda yapılan küçük bir değişiklik, bağlantıdaki yükü iki katına çıkardı.",
        "Tasarımda yapılan küçük bir değişiklik, bağlantıdaki yükü yarıya indirdi.",
        "Bağlantıdaki yükü iki katına çıkaran tasarım, mühendislerin itirazlarına rağmen hiçbir değişiklik yapılmadan uygulandı.",
        "Tasarım bağlantıyı tamamen ortadan kaldırdı.",
        "Yük tasarımı değiştirmedi.",
      ],
      "'A small change to the design' 'tasarımda yapılan küçük bir değişiklik', 'doubled the load on the connection' 'bağlantıdaki yükü iki katına çıkardı' karşılığıdır.",
    ],
    [
      "The barrier's gates are closed only when a storm threatens the coast.",
      [
        "Bariyerin kapakları yalnızca bir fırtına kıyıyı tehdit ettiğinde kapatılır.",
        "Bariyerin kapakları her zaman kapalıdır.",
        "Kıyıyı tehdit eden fırtınalar sırasında açık tutulan bariyer kapakları, deniz sakinleştiğinde yeniden kapatılır.",
        "Fırtınalar bariyerin kapaklarını kırar.",
        "Kapaklar kıyıdan uzakta bulunur.",
      ],
      "'are closed only when' 'yalnızca ... kapatılır', 'a storm threatens the coast' 'bir fırtına kıyıyı tehdit ettiğinde' karşılığıdır.",
    ],
    [
      "The building's shape was chosen partly to reduce the effect of the wind.",
      [
        "Binanın şekli kısmen rüzgârın etkisini azaltmak için seçildi.",
        "Binanın şekli rüzgârla hiçbir ilgisi olmadan seçildi.",
        "Rüzgârın etkisini azaltmak için tasarlanan binalar, genellikle daha alçak ve daha geniş olmaları nedeniyle daha ucuza mal olur.",
        "Rüzgâr binanın şeklini değiştirdi.",
        "Bina rüzgâr enerjisi üretmek için tasarlandı.",
      ],
      "'was chosen partly' 'kısmen seçildi', 'to reduce the effect of the wind' 'rüzgârın etkisini azaltmak için' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kule, yaklaşık iki yüz yıl boyunca dengede kalması beklenen bir şekilde yeniden açıldı.",
      [
        "The tower reopened in a condition that is expected to remain stable for about two hundred years.",
        "The tower was closed for about two hundred years.",
        "The tower reopened, although engineers warned that it would probably fall within a few years unless further work was carried out.",
        "The tower was rebuilt two hundred years ago.",
        "Two hundred towers were reopened.",
      ],
      "'yeniden açıldı' 'reopened', 'yaklaşık iki yüz yıl boyunca dengede kalması beklenen' 'expected to remain stable for about two hundred years' karşılığıdır.",
    ],
    [
      "Mühendis, binayı güçlendirmek için gizlice çalışan kaynakçılar tuttu.",
      [
        "The engineer hired welders who worked secretly to strengthen the building.",
        "The engineer refused to strengthen the building.",
        "The welders discovered a weakness in the building, but the engineer told them to keep it secret and did nothing about it.",
        "The building was built by secret welders.",
        "The engineer worked as a welder.",
      ],
      "'gizlice çalışan kaynakçılar tuttu' 'hired welders who worked secretly', 'binayı güçlendirmek için' 'to strengthen the building' karşılığıdır.",
    ],
    [
      "Geçitler çöktüğünde lobide yüzlerce kişi dans ediyordu.",
      [
        "Hundreds of people were dancing in the lobby when the walkways collapsed.",
        "Nobody was in the lobby when the walkways collapsed.",
        "The walkways collapsed several hours after hundreds of people had finished dancing and left the hotel lobby.",
        "The dancers caused the lobby to collapse.",
        "Hundreds of walkways collapsed.",
      ],
      "'Geçitler çöktüğünde' 'when the walkways collapsed', 'lobide yüzlerce kişi dans ediyordu' 'hundreds of people were dancing in the lobby' karşılığıdır.",
    ],
    [
      "Köprünün iki kulesi deprem nedeniyle yaklaşık bir metre birbirinden uzaklaştı.",
      [
        "The bridge's two towers moved about a metre further apart because of the earthquake.",
        "The bridge's two towers moved a metre closer together.",
        "The earthquake destroyed one of the bridge's two towers, and engineers had to rebuild it about a metre further from the shore.",
        "The bridge was a metre long.",
        "The earthquake did not affect the bridge.",
      ],
      "'Köprünün iki kulesi' 'the bridge's two towers', 'yaklaşık bir metre birbirinden uzaklaştı' 'moved about a metre further apart' karşılığıdır.",
    ],
    [
      "Mimarın tasarımı, inşa edilmesi çok zor olan kavisli kabuklar içeriyordu.",
      [
        "The architect's design included curved shells that were very difficult to build.",
        "The architect's design was very easy to build.",
        "The architect refused to include curved shells in his design because he knew they would be very difficult to build.",
        "The shells were designed by builders.",
        "The design was made of real shells.",
      ],
      "'Mimarın tasarımı içeriyordu' 'the architect's design included', 'inşa edilmesi çok zor olan kavisli kabuklar' 'curved shells that were very difficult to build' karşılığıdır.",
    ],
    [
      "Çark, tekneleri iki kanal arasında yirmi dört metre kaldırır.",
      [
        "The wheel lifts boats twenty-four metres between two canals.",
        "The wheel lowers boats into the sea.",
        "The wheel was built because the two canals were twenty-four metres apart and could not be joined in any other way at all.",
        "Twenty-four boats were lifted.",
        "Boats lift the wheel.",
      ],
      "'Çark tekneleri kaldırır' 'the wheel lifts boats', 'iki kanal arasında yirmi dört metre' 'twenty-four metres between two canals' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "When the Citicorp Center was completed in New York in 1977, it was one of the tallest buildings in the world. Because a church occupied one corner of the site, the structural engineer William LeMessurier designed the fifty-nine-storey tower to stand on four huge columns placed at the middle of each side rather than at the corners. In 1978, after a question from an engineering student, LeMessurier re-examined his calculations and was alarmed by what he found. He had checked the effect of winds blowing directly at the faces of the building, as the building code required, but not winds striking it diagonally, at the corners. Moreover, the builders had joined some of the steel supports with bolts instead of the stronger welds he had specified. His calculations suggested that a storm of a strength expected in New York about once every sixteen years could bring the building down. Rather than keep silent, LeMessurier informed the building's owners. Over the following weeks, welders worked at night to reinforce the joints while the offices were in use during the day, and emergency plans were prepared to evacuate the surrounding area. As a hurricane approached the city, the work was nearly complete. The story was not made public for almost twenty years; it is now taught as an example of professional responsibility.",
      questions: [
        [
          "According to the passage, the columns were placed in an unusual position because ----.",
          [
            "a church stood on one corner of the site",
            "the engineer wanted to save money",
            "the building code required it",
            "the owners had asked for the building to look as different as possible from its neighbours",
            "the ground was soft",
          ],
          "Metne göre arsanın bir köşesinde kilise vardı.",
        ],
        [
          "LeMessurier became alarmed partly because ----.",
          [
            "his original calculations had not considered diagonal winds",
            "a hurricane had damaged the building",
            "the church had been demolished",
            "the welders had refused to work at night while the offices were full of people",
            "the student had found a crack",
          ],
          "Rüzgârların binaya köşeden çapraz çarpmasının etkisini hesaplamamıştı.",
        ],
        [
          "It can be understood from the passage that LeMessurier ----.",
          [
            "chose to reveal his own mistake",
            "blamed the student",
            "denied that there was a problem",
            "made the problem public immediately in the newspapers of New York",
            "left the building unchanged",
          ],
          "Sessiz kalmak yerine binanın sahiplerini bilgilendirdi.",
        ],
      ],
    },
    {
      text:
        "The Quebec Bridge across the St Lawrence River in Canada was intended to be the longest cantilever bridge in the world. On 29 August 1907, during construction, the southern half collapsed into the river in about fifteen seconds, killing seventy-five workers, many of them Mohawk ironworkers from a nearby community. An investigation found that the weight of the bridge had been seriously underestimated: when the design was lengthened to make the main span longer, the calculations had not been fully revised. Theodore Cooper, the distinguished consulting engineer, rarely visited the site because of poor health, and warnings from the engineer on site that some steel members were bending were not acted upon quickly enough. A second attempt also ended in disaster in 1916, when the central span fell while being lifted into place, killing thirteen more men. The bridge was finally completed in 1917 and remains the longest cantilever bridge in the world. The disasters had a lasting cultural effect. In 1925, Canadian engineering schools introduced a ceremony at which graduates promise to act responsibly, and receive an iron ring worn on the little finger of the working hand. A popular story claims that the first rings were made from the steel of the fallen bridge, but this appears to be a myth.",
      questions: [
        [
          "According to the passage, one cause of the 1907 collapse was that ----.",
          [
            "calculations were not updated after the design was changed",
            "the river flooded",
            "the workers were inexperienced",
            "the steel had been made in another country and was of poor quality",
            "an earthquake struck",
          ],
          "Metne göre tasarım uzatıldığında hesaplar tam olarak yenilenmemişti.",
        ],
        [
          "The passage suggests that the consulting engineer ----.",
          [
            "did not supervise the work closely enough",
            "visited the site every day",
            "designed the iron ring",
            "was killed in the collapse of the bridge together with seventy-five workers",
            "warned the workers in time",
          ],
          "Sağlık sorunları nedeniyle şantiyeye nadiren gidiyordu ve uyarılara zamanında tepki verilmedi.",
        ],
        [
          "According to the passage, the claim that the first iron rings came from the bridge ----.",
          [
            "is probably not true",
            "has been proved",
            "was made by Cooper",
            "is printed on every ring that graduates of Canadian engineering schools receive",
            "explains the 1916 collapse",
          ],
          "Bu hikâyenin bir efsane olduğu anlaşılır.",
        ],
      ],
    },
    {
      text:
        "On the evening of 17 July 1981, about 1,600 people had gathered in the lobby of the new Hyatt Regency hotel in Kansas City, Missouri, for a dance. Many were standing on two walkways that crossed the lobby, one on the second floor and one directly above it on the fourth floor, both hanging from the ceiling on steel rods. Shortly after seven o'clock, the fourth-floor walkway gave way and fell onto the lower one, and both crashed onto the crowd below. One hundred and fourteen people were killed and more than two hundred injured, making it the deadliest structural collapse in the history of the United States until 2001. Investigators traced the failure to a detail that had seemed minor. In the original design, single long rods were to pass through the upper walkway and continue down to the lower one, so that each walkway connection carried only its own load. Because such long rods were difficult to install, the steel fabricator proposed using two shorter rods instead, one from the ceiling to the upper walkway and another from the upper walkway to the lower one. The engineers approved the change without checking it carefully. As a result, the connection beneath the upper walkway had to carry the weight of both walkways, and it was later found that even the original design had not met the building code. The engineers involved lost their licences.",
      questions: [
        [
          "According to the passage, the original design was changed because ----.",
          [
            "the long rods would have been hard to install",
            "the hotel owners wanted more walkways",
            "the building code required it",
            "the engineers had discovered that the walkways would not be strong enough to hold large crowds",
            "steel was too expensive",
          ],
          "Metne göre uzun çubukların yerleştirilmesi zordu.",
        ],
        [
          "The change in the design meant that ----.",
          [
            "one connection had to support twice the intended load",
            "the walkways became lighter",
            "fewer people could stand on the walkways",
            "the lower walkway no longer needed any support from the ceiling of the hotel lobby",
            "the rods became longer",
          ],
          "Üst geçidin altındaki bağlantı her iki geçidin ağırlığını taşımak zorunda kaldı.",
        ],
        [
          "It can be understood from the passage that the engineers ----.",
          [
            "were held responsible for failing to check the change",
            "had refused to approve the change",
            "were injured in the collapse",
            "were praised for designing walkways that exceeded the requirements of the building code",
            "built the walkways themselves",
          ],
          "Değişikliği dikkatle kontrol etmeden onayladılar ve lisanslarını kaybettiler.",
        ],
      ],
    },
    {
      text:
        "On the night of 31 January 1953, a severe storm combined with a high spring tide drove the North Sea over the dykes of the south-western Netherlands. More than 1,800 people died, tens of thousands of animals drowned and salt water covered huge stretches of farmland. A few weeks later, a government commission was formed to prevent such a disaster from happening again. Its plan, known as the Delta Works, aimed to shorten the coastline by closing off most of the estuaries of the region with dams and barriers. The final and most ambitious part, the Eastern Scheldt barrier, became the subject of fierce debate. The original plan was to close the estuary completely with a solid dam, but environmental groups and local fishermen protested that a closed estuary would lose its tidal marine life, along with the shellfish farms that relied on it. In response, the government chose a far more expensive design: a nine-kilometre structure fitted with sixty-two enormous steel gates that slide up and down. These normally remain open to allow the tide to flow in and out, and are closed only when a storm threatens. The barrier was opened by Queen Beatrix in 1986. The Delta Works are often cited as one of the greatest engineering achievements of the twentieth century.",
      questions: [
        [
          "The passage states that the Delta Works were mainly intended to ----.",
          [
            "reduce the length of coast exposed to the sea",
            "create new farmland",
            "improve shipping",
            "build a series of barriers that would remain closed throughout the year to keep out the tide",
            "protect oysters",
          ],
          "Metne göre amaç bölgedeki haliçleri kapatarak kıyı şeridini kısaltmaktı.",
        ],
        [
          "The design of the Eastern Scheldt barrier was changed because ----.",
          [
            "a solid dam would have harmed the local environment and fishing",
            "it was too expensive",
            "the Queen objected",
            "engineers believed that a solid dam would not be strong enough to resist a storm like the one of 1953",
            "the estuary was too narrow",
          ],
          "Çevreciler ve balıkçılar kapalı bir barajın tuzlu su ekosistemini ve istiridye endüstrisini yok edeceğini savundu.",
        ],
        [
          "It can be inferred from the passage that the final barrier ----.",
          [
            "balanced safety with environmental concerns",
            "was cheaper than the original plan",
            "is permanently closed",
            "was completed only a few months after the commission had been set up by the government",
            "failed in its purpose",
          ],
          "Kapakları normalde açık, yalnızca fırtınada kapalıdır; hem güvenliği hem çevreyi gözetir.",
        ],
      ],
    },
    {
      text:
        "In 1957, an international competition to design an opera house for Sydney, Australia, was won by Jørn Utzon, a little-known Danish architect. His drawings showed a group of white, sail-like shells rising from a platform on a point of land in the harbour. They were striking, but no one knew how to build them. Construction began in 1959, before the design had been fully worked out, partly because the government wanted to start before public opinion turned against the project. For several years, Utzon and the engineers of the firm Ove Arup struggled to find a geometry for the curved roofs that could be constructed at reasonable cost. The solution, reached in about 1961, was to make every shell from sections of the surface of a single imaginary sphere, so that the concrete ribs could be produced from standard moulds. Meanwhile, costs and delays mounted. In 1966, after a dispute with a new state government over payments and design decisions, Utzon resigned and left Australia, never to return. The interiors were completed by a team of Australian architects, in a style that differed from his intentions. The Opera House opened in 1973, ten years late and at fourteen times the original estimate. In 2007, it was declared a UNESCO World Heritage Site, and Utzon was later invited to help guide future changes.",
      questions: [
        [
          "According to the passage, construction began before the design was complete partly because ----.",
          [
            "the government feared losing public support",
            "Utzon insisted on it",
            "the engineers had already solved the problem of the roof",
            "the costs of the project were lower than had originally been expected",
            "the competition rules required it",
          ],
          "Metne göre hükümet kamuoyu projeye karşı dönmeden başlamak istiyordu.",
        ],
        [
          "The use of a single imaginary sphere solved the problem of ----.",
          [
            "building the curved roofs economically",
            "the building's acoustics",
            "the dispute with the government",
            "choosing a site for the opera house on a point of land in Sydney's harbour",
            "the interior design",
          ],
          "Böylece beton kaburgalar standart kalıplardan üretilebildi.",
        ],
        [
          "It can be understood from the passage that the finished interiors ----.",
          [
            "were not what Utzon had planned",
            "were designed by Utzon",
            "were completed in 1966",
            "were added after the building had been declared a World Heritage Site in 2007",
            "cost less than expected",
          ],
          "İç mekânlar onun niyetlerinden farklı bir tarzda tamamlandı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "During the construction of the Golden Gate Bridge in the 1930s, the chief engineer insisted on unusually strict safety measures. ---- The men it saved called themselves the 'Halfway to Hell Club'.",
      [
        "Most notably, a large net was hung beneath the bridge to catch workers who fell.",
        "San Francisco is often foggy.",
        "The bridge is painted orange.",
        "The bridge's colour, called 'international orange', was selected in part so that it would stay visible in the thick fogs that often cover the strait.",
        "Many tourists visit the bridge.",
      ],
      "Boşluktan sonra 'it' zamiriyle kurtarılan adamlardan söz edilir; boşluğa düşen işçileri yakalamak için köprünün altına büyük bir ağ asıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "The Falkirk Wheel in Scotland, opened in 2002, is the only rotating boat lift in the world. ---- Because the boats displace their own weight of water, the two sides always balance, so turning the wheel uses very little energy.",
      [
        "It lifts boats twenty-four metres between two canals in water-filled containers, or gondolas, at either end of its arms.",
        "Scotland has many lakes.",
        "Boats are used for leisure.",
        "Before it was built, boats travelling between the two canals had to pass through a series of eleven locks, which took most of a day.",
        "Steel is a common material.",
      ],
      "Boşluktan sonra teknelerin ağırlığı ve dengeden söz edilir; boşluğa çarkın tekneleri su dolu haznelerde yirmi dört metre kaldırdığını söyleyen cümle gelmelidir.",
    ],
    [
      "The Akashi Kaikyō Bridge in Japan has the longest central span of any suspension bridge built in the twentieth century. ---- As a result, the span became almost a metre longer than originally designed.",
      [
        "In 1995, while the towers were standing but before the deck was added, the Kobe earthquake moved them apart.",
        "Japan has many islands.",
        "Bridges carry heavy traffic.",
        "The bridge was built after two ferries sank in the strait during a storm, causing many deaths, including those of schoolchildren.",
        "Suspension bridges use cables.",
      ],
      "Boşluktan sonra açıklığın uzadığı sonucu verilir; boşluğa Kobe depreminin kuleleri birbirinden uzaklaştırdığını söyleyen cümle gelmelidir.",
    ],
    [
      "The Seikan Tunnel links the Japanese islands of Honshu and Hokkaido. ---- Its construction took more than twenty years and was hampered by flooding, and thirty-four workers died.",
      [
        "About fifty-four kilometres long, with a section running deep beneath the seabed, it is one of the longest railway tunnels in the world.",
        "Hokkaido has cold winters.",
        "Trains are fast in Japan.",
        "Planning for the tunnel became urgent after a typhoon sank five ferries in the strait in 1954, killing more than a thousand people.",
        "Islands are surrounded by water.",
      ],
      "Boşluk tüneli tanıtan bir cümle gerektirir; boşluğa tünelin uzunluğunu ve deniz tabanının altından geçtiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Dubai's Burj Khalifa, which opened in 2010, rises more than 820 metres. ---- To reduce this effect, its shape changes as it rises, with sections stepping back in a spiral pattern.",
      [
        "At such heights, the wind can form swirling currents that make a building sway.",
        "Dubai is in the desert.",
        "The building has many lifts.",
        "The building's exterior is covered with glass panels that must be cleaned regularly by workers using special machines.",
        "Many people live in Dubai.",
      ],
      "Boşluktan sonra 'this effect' ifadesi gelir; boşluğa bu yükseklikte rüzgârın binayı sallayan girdaplar oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "During the Second World War, the British engineer Donald Bailey designed a bridge made of standard steel panels. ---- Allied armies built thousands of these bridges across Europe.",
      [
        "The panels were light enough to be carried by a few soldiers and could be bolted together without special tools or cranes.",
        "Rivers are common in Europe.",
        "Soldiers wear uniforms.",
        "Bailey is said to have first sketched the design on the back of an envelope while travelling home from a meeting.",
        "Steel is made from iron.",
      ],
      "Boşluk köprünün neden yaygın kullanıldığını açıklayan bir cümle gerektirir; boşluğa panellerin hafif olduğunu ve özel alet olmadan birleştirilebildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The Hoover Dam on the Colorado River was completed in 1936.",
        "Concrete gives off heat as it hardens.",
        "Engineers calculated that, if poured in one piece, the dam would have needed more than a hundred years to cool down.",
        "Las Vegas is famous for its casinos.",
        "So they built it in blocks and ran cold water through pipes embedded in the concrete.",
      ],
      odd: 3,
      why: "Parça Hoover Barajı'nın betonunun soğutulmasını anlatır. Las Vegas'ın kumarhaneleriyle ünlü olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Channel Tunnel between Britain and France opened in 1994.",
        "Teams digging from both sides met beneath the sea in 1990.",
        "French cuisine is admired worldwide.",
        "The two tunnels were only a few centimetres out of line.",
        "The project relied on laser guidance and careful surveying.",
      ],
      odd: 2,
      why: "Parça Manş Tüneli'nin kazılmasını anlatır. Fransız mutfağının dünyada beğenildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Gotthard Base Tunnel through the Swiss Alps opened in 2016.",
        "Measuring roughly fifty-seven kilometres, no rail tunnel on Earth is longer.",
        "Because it runs at a low level, trains do not have to climb steep mountain slopes.",
        "Switzerland is famous for chocolate.",
        "This allows heavy freight trains to cross the Alps faster and with less energy.",
      ],
      odd: 3,
      why: "Parça Gotthard Ana Tüneli'ni anlatır. İsviçre'nin çikolatasıyla ünlü olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The Afsluitdijk is a dam about thirty-two kilometres long in the Netherlands.",
        "Completed in 1932, it closed off a large inlet of the North Sea.",
        "Tulips are grown in the Netherlands.",
        "The inlet behind it gradually became a freshwater lake.",
        "Parts of the former seabed were later drained to create new land.",
      ],
      odd: 2,
      why: "Parça Afsluitdijk barajını anlatır. Hollanda'da lale yetiştirildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The great clock in the tower of the Palace of Westminster is famous for its accuracy.",
        "Coins are made from metal.",
        "Its timing is adjusted by placing or removing old pennies on the pendulum.",
        "Adding a single penny makes the clock gain about two-fifths of a second a day.",
        "This simple method has been used for well over a century.",
      ],
      odd: 1,
      why: "Parça Westminster saatinin ayarlanmasını anlatır. Madeni paraların metalden yapıldığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "China's Three Gorges Dam, built across the Yangtze, can generate more electricity than any other power station.",
        "It was built partly to control the river's frequent floods.",
        "Its reservoir forced more than a million people to move.",
        "Critics also point to damage to the river's ecosystem.",
        "Rice is an important crop in China.",
      ],
      odd: 4,
      why: "Parça Üç Boğaz Barajı'nı ve etkilerini anlatır. Pirincin Çin'de önemli bir ürün olduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
