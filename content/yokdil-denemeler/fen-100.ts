import type { YokdilDeneme } from "./types";

export const FEN_100: YokdilDeneme = {
  no: 100,
  field: "fen",
  vocab: [
    [
      "Ice crystals briefly ---- the speed sensors, so the computers received contradictory readings.",
      ["blocked", "cleaned", "repaired", "replaced", "heated"],
      "Buz kristallerinin hız sensörlerini kısa süreliğine 'tıkadığı' (blocked) ve bu yüzden bilgisayarların çelişkili veriler aldığı anlatılır.",
    ],
    [
      "Investigators found that the steel cables inside the concrete had been badly ---- by water and salt.",
      ["corroded", "polished", "strengthened", "painted", "cooled"],
      "Müfettişlerin betonun içindeki çelik kabloların su ve tuzla ağır biçimde 'aşındığını, paslandığını' (corroded) bulduğu anlatılır.",
    ],
    [
      "Investigators concluded that a tiny crack in one wheel had grown ---- over many months of use.",
      ["gradually", "suddenly", "loudly", "proudly", "rarely"],
      "Müfettişlerin tekerleklerden birindeki küçük bir çatlağın aylarca süren kullanım boyunca 'yavaş yavaş' (gradually) büyüdüğü sonucuna vardığı anlatılır.",
    ],
    [
      "The pilots were not told about the new system, so they did not know how to ---- it when it malfunctioned.",
      ["override", "install", "admire", "design", "sell"],
      "Pilotlara yeni sistemden söz edilmediği için arızalandığında onu nasıl 'devre dışı bırakacaklarını, geçersiz kılacaklarını' (override) bilmedikleri anlatılır.",
    ],
    [
      "The collapse released a ---- of mud that buried offices, homes and farmland downstream.",
      ["torrent", "trickle", "drop", "pinch", "breeze"],
      "Çöküşün aşağıdaki büroları, evleri ve tarım arazilerini gömen bir çamur 'selini' (torrent) serbest bıraktığı anlatılır.",
    ],
    [
      "The engineers had to ---- a way of stopping the oil without being able to reach the well directly.",
      ["figure out", "look down on", "put up with", "run into", "get over"],
      "Mühendislerin kuyuya doğrudan ulaşamadan petrolü durdurmanın bir yolunu 'bulmak, çözmek' (figure out) zorunda kaldığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the crew realised what was happening, the aircraft ---- thousands of metres.",
      ["had fallen", "falls", "will fall", "has fallen", "is falling"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had fallen'.",
    ],
    [
      "If the aircraft had relied on two sensors instead of one, the crashes ---- prevented.",
      ["might have been", "are", "will be", "had been", "were being"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip) cümlesinin edilgen ana yan cümlesi: 'might have been'.",
    ],
    [
      "The train ---- at about two hundred kilometres an hour when the wheel broke.",
      ["was travelling", "travels", "has travelled", "will travel", "is travelling"],
      "Geçmişte başka bir olayla kesilen süregiden eylem: 'was travelling'.",
    ],
    [
      "---- the bridge had been inspected regularly, nobody predicted that it would collapse.",
      ["Although", "Because", "Unless", "So that", "Until"],
      "Köprünün düzenli denetlenmesi ile kimsenin çökeceğini öngörmemesi zıtlık bildirir: 'Although'.",
    ],
    [
      "The engineer ---- warnings had been ignored later gave evidence to the inquiry.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin uyarıları; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after a second aircraft had crashed ---- the authorities ground the model worldwide.",
      ["did", "had", "were", "have", "do"],
      "'Only after' ile başlayan cümlede devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The village ---- most of the victims lived lay directly below the dam.",
      ["where", "which", "whose", "when", "what"],
      "'The village' yer bildirir ve ilgi cümlesinde yer zarfı görevi görür: 'where'.",
    ],
    [
      "The more complex a software system becomes, ---- it is to test every possible situation.",
      ["the harder", "the hardest", "harder", "hardest", "so hard"],
      "'The more ..., the more ...' paralel yapısı: 'the harder'.",
    ],
    [
      "The inquiry recommended that every new aircraft system ---- to pilots in detail.",
      ["be explained", "is explained", "was explained", "to be explained", "explaining"],
      "'recommend that' sonrasında yalın fiil (subjunctive) kullanılır; edilgen biçimi: 'be explained'.",
    ],
    [
      "The turbine's failure is thought ---- by worn bolts that had not been replaced.",
      ["to have been caused", "causing", "to cause", "was caused", "having cause"],
      "Geçmişte gerçekleşmiş edilgen olay için geçmiş edilgen mastar: 'to have been caused'.",
    ],
    [
      "The lander's legs produced a small vibration as they unfolded, ---- the computer mistook it for a sign of landing.",
      ["and", "although", "unless", "whereas", "as if"],
      "Bacakların titreşim üretmesi ve bilgisayarın bunu iniş işareti sanması birbirini izler: 'and'.",
    ],
    [
      "The company had the software ---- by an outside expert after the accidents.",
      ["reviewed", "review", "reviewing", "to review", "reviews"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç kullanılır: 'reviewed'.",
    ],
    [
      "Had the warning lights worked properly, the workers ---- the danger sooner.",
      ["would have recognised", "recognise", "will recognise", "had recognised", "are recognising"],
      "Devrik üçüncü tip koşul cümlesinin ana yan cümlesi: 'would have recognised'.",
    ],
    [
      "Each of the eleven workers on the platform ---- killed in the explosion.",
      ["was", "were", "have been", "are being", "be"],
      "'Each of' yapısı tekil fiil gerektirir: 'was'.",
    ],
  ],
  cloze: [
    {
      text:
        "On 17 August 2009, Russia's largest hydroelectric power station, the Sayano-Shushenskaya plant on the Yenisei River in Siberia, suffered one of the worst accidents in the history of hydropower. Shortly after eight o'clock in the morning, one of its ten huge turbines, each weighing hundreds of tonnes, was suddenly forced out of its housing by the pressure of the water, {1} water flooded into the turbine hall. The flood destroyed or damaged most of the other turbines, {2} the electrical systems short-circuited, plunging the plant into darkness. Seventy-five people, most of them workers in the turbine hall, were killed. Investigators found that the turbine had been vibrating heavily for months, {3} the bolts holding its cover in place had gradually weakened through metal fatigue. Several of the bolts were found to have been missing their nuts, {4} the remaining ones had been unable to withstand the forces. The investigation criticised the plant's managers for continuing to operate the turbine despite the warning signs. Rebuilding the station took about five years, {5} it was fully restored in 2014 with new turbines.",
      blanks: [
        [
          "(21) ----",
          ["and", "unless", "although", "or", "until"],
          "Türbinin yuvasından fırlaması ve suyun türbin salonunu basması birbirini izler: 'and'.",
        ],
        [
          "(22) ----",
          ["and", "unless", "although", "or", "so that"],
          "Selin diğer türbinleri yok etmesi ve elektrik sistemlerinin kısa devre yapması birbirini izler: 'and'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "although", "or", "until"],
          "Türbinin aylarca titreşmesi ve cıvataların metal yorgunluğuyla zayıflaması birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["so", "although", "unless", "or", "until"],
          "Bazı cıvataların somunlarının eksik olmasının sonucu kalanların kuvvete dayanamamasıdır: 'so'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "although", "or", "until"],
          "Yeniden inşanın beş yıl sürmesi ve santralin 2014'te tamamen onarılması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "On 25 January 2019, a dam holding back waste from an iron ore mine near the town of Brumadinho in south-eastern Brazil suddenly collapsed. The dam was a tailings dam, built not to store water but to contain the wet, muddy waste left over after the ore has been processed, {1} it had been raised over the years by adding new layers on top of the old waste. When it failed, about twelve million cubic metres of mud rushed down the valley, {2} it buried the mine's offices and canteen, where many workers were having lunch. In total, two hundred and seventy people were killed. Investigations found that the waste inside the dam had become saturated with water, {3} it suddenly lost its strength and behaved like a liquid, a process known as liquefaction. The company that operated the mine had been warned that the dam's drainage system was not working properly, {4} it had continued to operate the site. The disaster came only three years after a similar collapse at another of the company's dams in the same state, {5} it led to new laws banning this type of dam in Brazil and to the payment of billions of dollars in compensation.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "although", "or", "until"],
          "Barajın atık tutmak için yapılması ve yıllar içinde yeni katmanlarla yükseltilmesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "unless", "although", "or", "so that"],
          "Çamurun vadiden aşağı akması ve büroları gömmesi birbirini izler: 'and'.",
        ],
        [
          "(28) ----",
          ["so", "although", "unless", "or", "until"],
          "Atığın suya doymasının sonucu aniden dayanımını kaybedip sıvı gibi davranmasıdır: 'so'.",
        ],
        [
          "(29) ----",
          ["but", "because", "so", "unless", "or"],
          "Şirketin uyarılması ile tesisi çalıştırmayı sürdürmesi zıtlık bildirir: 'but'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "although", "or", "until"],
          "Felaketin önceki bir çöküşten üç yıl sonra gelmesi ve yeni yasalara yol açması birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the speed sensors recovered within a minute, ----.",
      [
        "the pilots had already lost control of the aircraft",
        "sensors measure speed",
        "the aircraft was large",
        "the flight left from Brazil",
        "the aircraft had already landed safely in Paris",
      ],
      "'Although' zıtlık ister: hız sensörleri bir dakika içinde düzelse de pilotlar uçağın kontrolünü çoktan kaybetmişti.",
    ],
    [
      "If the wheels had been inspected more carefully, ----.",
      [
        "the crack might have been found before the accident",
        "trains have many wheels",
        "the train was German",
        "steel is strong",
        "the train would have travelled even faster than before",
      ],
      "Üçüncü tip koşul: tekerlekler daha dikkatli denetlenseydi çatlak kazadan önce bulunabilirdi.",
    ],
    [
      "----, the system repeatedly pushed the aircraft's nose down.",
      [
        "Receiving false data from a single faulty sensor",
        "Because aircraft fly high",
        "Unless the weather was bad",
        "In spite of being a system",
        "Since the pilots had switched it off before take-off",
      ],
      "Ana cümleye anlamca bağlanan ortaç yapısı gerekir: tek bir arızalı sensörden yanlış veri alan sistem uçağın burnunu defalarca aşağı itti.",
    ],
    [
      "Because the steel cables were hidden inside concrete, ----.",
      [
        "it was difficult for inspectors to see how badly they had corroded",
        "concrete is grey",
        "the bridge was in Italy",
        "steel is strong",
        "inspectors could easily check every part of them by eye",
      ],
      "Neden-sonuç: çelik kablolar betonun içinde gizli olduğu için müfettişlerin ne kadar paslandıklarını görmesi zordu.",
    ],
    [
      "The lander's engines were switched off too early ----.",
      [
        "because the computer wrongly concluded that it had already touched down",
        "although the lander was on the ground",
        "so that it could fly higher",
        "unless it was windy",
        "since the engineers had decided to land it on its back",
      ],
      "Neden bildiren yapı: bilgisayar yanlışlıkla yere değdiği sonucuna vardığı için iniş aracının motorları çok erken kapatıldı.",
    ],
    [
      "The new bridge was designed by a famous architect from Genoa, ----.",
      [
        "who offered his design to the city without charge",
        "which is a city",
        "that the bridge",
        "whose Genoa",
        "when the old bridge was first built in the 1960s",
      ],
      "İlgi cümlesi mimarı niteler: yeni köprü tasarımını şehre ücretsiz sunan Cenovalı ünlü bir mimar tarafından tasarlandı.",
    ],
    [
      "Unlike most dams, which hold back clean water, ----.",
      [
        "this one held back a mixture of water and mining waste",
        "most dams are large",
        "water is clean",
        "mines produce iron",
        "this one held back no liquid of any kind",
      ],
      "'Unlike' karşıtlık kurar: temiz su tutan çoğu barajın aksine bu baraj su ve maden atığı karışımı tutuyordu.",
    ],
    [
      "The aircraft model was allowed to fly again only in late 2020 ----.",
      [
        "after its software had been redesigned and pilots retrained",
        "although nothing had been changed",
        "so that more crashes could happen",
        "unless the passengers agreed",
        "because the authorities had decided that the system was perfect",
      ],
      "Zaman bildiren yapı: uçak modelinin yeniden uçmasına ancak yazılımı yeniden tasarlanıp pilotlar yeniden eğitildikten sonra, 2020 sonunda izin verildi.",
    ],
    [
      "No sooner had the bridge collapsed ----.",
      [
        "than the government blamed the company responsible for maintaining it",
        "when the bridge",
        "that the government",
        "before the company",
        "than the engineers announced that it had been completely safe",
      ],
      "'No sooner ... than' yapısı: köprü çöker çökmez hükümet bakımından sorumlu şirketi suçladı.",
    ],
    [
      "While the blowout preventer was designed to seal the well in an emergency, ----.",
      [
        "it failed to do so when the explosion occurred",
        "wells are deep",
        "oil is valuable",
        "the Gulf of Mexico is warm",
        "it worked perfectly and no oil escaped into the sea",
      ],
      "'While' zıtlık bildirir: patlama önleyici acil durumda kuyuyu kapatmak için tasarlanmış olsa da patlama olduğunda bunu yapamadı.",
    ],
    [
      "The amount of oil that escaped was so large ----.",
      [
        "that it became the largest accidental marine oil spill in history",
        "because the oil",
        "than the sea",
        "although the engineers",
        "so that nobody noticed it for several years",
      ],
      "'so ... that' sonuç yapısı: sızan petrol miktarı o kadar büyüktü ki tarihin en büyük kaza sonucu deniz petrol sızıntısı oldu.",
    ],
  ],
  enTr: [
    [
      "The wreckage was found on the ocean floor almost two years after the crash.",
      [
        "Enkaz kazadan yaklaşık iki yıl sonra okyanus tabanında bulundu.",
        "Enkaz kazadan iki gün önce okyanusun yüzeyinde görüldü.",
        "Okyanus tabanı iki yıl sonra enkazı buldu.",
        "Hiç enkaz bulunmadı.",
        "Enkaz kazadan hemen sonra bir adanın kıyısına vurdu ve turistler tarafından toplandı.",
      ],
      "'The wreckage was found on the ocean floor' 'enkaz okyanus tabanında bulundu', 'almost two years after the crash' 'kazadan yaklaşık iki yıl sonra' karşılığıdır.",
    ],
    [
      "The co-pilot kept pulling the nose up, which caused the aircraft to stall.",
      [
        "Yardımcı pilot burnu yukarı çekmeyi sürdürdü ve bu uçağın tutunma kaybına uğramasına yol açtı.",
        "Yardımcı pilot burnu aşağı indirerek uçağı kurtardı.",
        "Uçak yardımcı pilotun burnunu yukarı çekti.",
        "Uçakta hiç yardımcı pilot yoktu.",
        "Yardımcı pilot uçağın motorlarını kapattı ve uçak güvenle denize indi.",
      ],
      "'The co-pilot kept pulling the nose up' 'yardımcı pilot burnu yukarı çekmeyi sürdürdü', 'which caused the aircraft to stall' 've bu uçağın tutunma kaybına uğramasına yol açtı' karşılığıdır.",
    ],
    [
      "The system had been added to make the new aircraft handle like the older model.",
      [
        "Sistem yeni uçağın eski model gibi kullanılmasını sağlamak için eklenmişti.",
        "Sistem eski uçağı yeni modele dönüştürmek için kaldırılmıştı.",
        "Eski model yeni uçağa bir sistem eklemişti.",
        "Uçakta hiç sistem yoktu.",
        "Sistem yeni uçağın eski modelden çok daha farklı uçması için tasarlanmıştı.",
      ],
      "'The system had been added' 'sistem eklenmişti', 'to make the new aircraft handle like the older model' 'yeni uçağın eski model gibi kullanılmasını sağlamak için' karşılığıdır.",
    ],
    [
      "A section of the motorway bridge collapsed during a heavy storm, killing forty-three people.",
      [
        "Otoyol köprüsünün bir bölümü şiddetli bir fırtına sırasında çöktü ve kırk üç kişi öldü.",
        "Şiddetli bir fırtına otoyol köprüsünü kırk üç kez sarstı.",
        "Kırk üç kişi otoyol köprüsünü fırtınada yıktı.",
        "Hiç köprü çökmedi.",
        "Otoyol köprüsü güneşli bir günde tamamen çöktü, ancak kimse yaralanmadı.",
      ],
      "'A section of the motorway bridge collapsed during a heavy storm' 'otoyol köprüsünün bir bölümü şiddetli bir fırtına sırasında çöktü', 'killing forty-three people' 've kırk üç kişi öldü' karşılığıdır.",
    ],
    [
      "It took eighty-seven days to seal the well and stop the flow of oil.",
      [
        "Kuyuyu kapatıp petrol akışını durdurmak seksen yedi gün sürdü.",
        "Kuyu seksen yedi dakikada kendiliğinden kapandı.",
        "Petrol akışı kuyuyu seksen yedi gün kapattı.",
        "Kuyudan hiç petrol akmadı.",
        "Kuyuyu kapatmak seksen yedi yıl sürdü ve petrol hâlâ akıyor.",
      ],
      "'It took eighty-seven days' 'seksen yedi gün sürdü', 'to seal the well and stop the flow of oil' 'kuyuyu kapatıp petrol akışını durdurmak' karşılığıdır.",
    ],
    [
      "The company had been warned that the dam's drainage system was not working properly.",
      [
        "Şirket barajın drenaj sisteminin düzgün çalışmadığı konusunda uyarılmıştı.",
        "Şirket barajın drenaj sisteminin kusursuz çalıştığını ilan etmişti.",
        "Drenaj sistemi şirketi baraj konusunda uyarmıştı.",
        "Barajda hiç drenaj sistemi yoktu.",
        "Şirket barajı hiç denetlemedi ve kimse onu herhangi bir tehlikeye karşı uyarmadı.",
      ],
      "'The company had been warned that' 'şirket ... konusunda uyarılmıştı', 'the dam's drainage system was not working properly' 'barajın drenaj sisteminin düzgün çalışmadığı' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Uçak 2009'da Atlantik Okyanusu'na düştü.",
      [
        "The aircraft crashed into the Atlantic Ocean in 2009.",
        "The aircraft landed safely in 2009.",
        "The Atlantic Ocean crashed into the aircraft in 2009.",
        "There was no aircraft.",
        "The aircraft crashed into the Pacific Ocean in 1909.",
      ],
      "'Uçak düştü' 'the aircraft crashed', 'Atlantik Okyanusu'na' 'into the Atlantic Ocean', '2009'da' 'in 2009' karşılığıdır.",
    ],
    [
      "Tren bir köprünün beton ayağına çarptı.",
      [
        "The train struck a concrete pillar of a bridge.",
        "The train passed safely under a bridge.",
        "A bridge struck the train's concrete pillar.",
        "There was no train.",
        "The train stopped a long way from the bridge.",
      ],
      "'Tren çarptı' 'the train struck', 'bir köprünün beton ayağına' 'a concrete pillar of a bridge' karşılığıdır.",
    ],
    [
      "Uçak modeli yaklaşık yirmi ay boyunca yere indirildi.",
      [
        "The aircraft model was grounded for about twenty months.",
        "The aircraft model flew for twenty years without problems.",
        "Twenty months grounded the aircraft.",
        "There was no aircraft.",
        "The aircraft model was grounded for only twenty minutes.",
      ],
      "'Uçak modeli yere indirildi' 'the aircraft model was grounded', 'yaklaşık yirmi ay boyunca' 'for about twenty months' karşılığıdır.",
    ],
    [
      "Yeni köprü 2020'de açıldı.",
      [
        "The new bridge was opened in 2020.",
        "The new bridge collapsed in 2020.",
        "2020 opened the bridge.",
        "There is no new bridge.",
        "The new bridge was opened in 1920 by a king.",
      ],
      "'Yeni köprü açıldı' 'the new bridge was opened', '2020'de' 'in 2020' karşılığıdır.",
    ],
    [
      "Platformda on bir işçi hayatını kaybetti.",
      [
        "Eleven workers lost their lives on the platform.",
        "Eleven workers built the platform.",
        "The platform lost eleven workers' homes.",
        "Nobody worked on the platform.",
        "Eleven hundred workers were rescued from the platform.",
      ],
      "'On bir işçi hayatını kaybetti' 'eleven workers lost their lives', 'platformda' 'on the platform' karşılığıdır.",
    ],
    [
      "Çamur birkaç dakika içinde köyü gömdü.",
      [
        "The mud buried the village within a few minutes.",
        "The mud took several years to reach the village.",
        "The village buried the mud within a few minutes.",
        "There was no mud.",
        "The mud flowed away from the village into the sea.",
      ],
      "'Çamur gömdü' 'the mud buried', 'birkaç dakika içinde köyü' 'the village within a few minutes' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "On the night of 31 May 2009, Air France Flight 447, an Airbus A330 carrying two hundred and twenty-eight people from Rio de Janeiro to Paris, disappeared over the Atlantic Ocean. Some wreckage and bodies were found within days, but the flight recorders, which held the key to understanding what had happened, lay on the ocean floor about four thousand metres deep, and they were recovered only in May 2011, after a long and expensive search using underwater robots. The recordings revealed a chain of events that began with a minor technical problem. As the aircraft flew through a region of thunderstorms at high altitude, ice crystals briefly blocked the tubes that measure the aircraft's speed, so the computers received contradictory readings. The autopilot disconnected, as it was designed to do in such circumstances, and the pilots had to fly the aircraft by hand. The co-pilot at the controls, apparently confused by the situation, pulled the nose of the aircraft upwards, and he continued to do so for most of the following minutes. The aircraft climbed, lost speed and entered a stall, a condition in which the wings no longer produce enough lift. A stall warning sounded dozens of times, but the crew did not seem to recognise what was happening, and they failed to take the simple action needed to recover: pushing the nose down to regain speed. The speed sensors began working again within about a minute, but by then the pilots had lost control, and the aircraft fell for more than three minutes before hitting the sea. The investigators concluded that the pilots had not been adequately trained to fly the aircraft by hand at high altitude, and that crews had become too dependent on automation. The disaster led to changes in training around the world, as well as to the replacement of the speed sensors.",
      questions: [
        [
          "According to the passage, the problem began when ----.",
          [
            "ice crystals briefly blocked the tubes that measure the aircraft's speed",
            "one of the engines caught fire",
            "the aircraft was struck by lightning",
            "the pilots switched off the computers",
            "the aircraft ran out of fuel",
          ],
          "Sorun, buz kristallerinin uçağın hızını ölçen tüpleri kısa süreliğine tıkamasıyla başladı.",
        ],
        [
          "The passage states that the crew failed to recover from the stall because ----.",
          [
            "they did not recognise what was happening and kept the nose up",
            "the stall warning never sounded",
            "the speed sensors never started working again",
            "the autopilot refused to disconnect",
            "the aircraft had lost both its wings",
          ],
          "Mürettebat olanı fark etmedi ve hız kazanmak için burnu aşağı indirmek yerine yukarı tutmayı sürdürdü.",
        ],
        [
          "It can be inferred from the passage that the investigators believed ----.",
          [
            "reliance on automation had weakened pilots' ability to fly by hand",
            "the aircraft had been badly designed in every respect",
            "the weather alone caused the accident",
            "the flight recorders were not useful",
            "pilots should never use the autopilot",
          ],
          "Müfettişler pilotların yüksek irtifada elle uçmak için yeterince eğitilmediğini ve otomasyona fazla bağımlı hale geldiğini düşündü.",
        ],
      ],
    },
    {
      text:
        "On 3 June 1998, a high-speed train travelling from Munich to Hamburg in Germany derailed near the village of Eschede at about two hundred kilometres an hour. A hundred and one people were killed, making it the worst high-speed rail disaster in history. The cause was traced to a single wheel. Unlike the solid steel wheels used on most high-speed trains, the wheels of this train had been designed with a thin rubber layer between the inner part of the wheel and an outer steel ring, known as a tyre. The design had been introduced to reduce vibration and noise, which passengers had complained about, and it had been adapted from wheels used on trams, which travel much more slowly. Over many months of use, the steel tyre on one wheel became thinner and a tiny crack formed inside it, which grew gradually with each revolution. Shortly before the accident, the tyre broke apart and wrapped itself around the wheel. A passenger in the first carriage noticed a piece of metal sticking up through the floor and reported it to a conductor, but the train was not stopped, partly because staff had been instructed to investigate problems before pulling the emergency brake. A few minutes later, as the train approached a road bridge, the damaged wheel derailed at a set of points, and the carriages behind struck the bridge's concrete pillars, bringing the bridge down onto the train. Investigators later found that the wheels had not been tested adequately for the stresses of high-speed travel, and that the equipment used to inspect them was not sensitive enough to detect internal cracks. After the disaster, all such wheels were replaced with solid steel ones, and the rules on emergency stops were changed.",
      questions: [
        [
          "According to the passage, the wheels had been designed with a rubber layer in order to ----.",
          [
            "reduce vibration and noise",
            "allow the train to travel faster",
            "make the wheels cheaper",
            "prevent cracks from forming",
            "make inspections easier",
          ],
          "Lastik katman yolcuların şikâyet ettiği titreşimi ve gürültüyü azaltmak için eklenmişti.",
        ],
        [
          "The passage states that, shortly before the accident, a passenger ----.",
          [
            "reported a piece of metal sticking up through the floor",
            "pulled the emergency brake",
            "noticed that the bridge was damaged",
            "saw the driver leave the train",
            "heard an announcement about a problem",
          ],
          "Birinci vagondaki bir yolcu zeminden çıkan bir metal parçasını fark edip kondüktöre bildirdi.",
        ],
        [
          "It can be inferred from the passage that the wheel design was risky partly because ----.",
          [
            "it had been adapted from vehicles that travel much more slowly",
            "it had been tested thoroughly at high speed",
            "it was made entirely of rubber",
            "it was used only on the first carriage",
            "it had already been used safely on high-speed trains for decades",
          ],
          "Tasarım çok daha yavaş giden tramvayların tekerleklerinden uyarlanmıştı ve yüksek hızın gerilimleri için yeterince sınanmamıştı.",
        ],
      ],
    },
    {
      text:
        "In October 2018 and March 2019, two new Boeing 737 MAX aircraft, operated by airlines in Indonesia and Ethiopia, crashed shortly after take-off, killing all three hundred and forty-six people on board. Investigators found that both crashes involved a system called MCAS. The 737 MAX had larger, more fuel-efficient engines than earlier versions of the 737, and because they had to be mounted further forward and higher on the wings, they tended to push the aircraft's nose upwards in certain situations. MCAS had been added to automatically push the nose down in such cases, so that the new aircraft would handle like the older model, which meant that pilots who were already qualified to fly the older aircraft would need only minimal extra training. In both crashes, however, a single faulty sensor sent false data indicating that the nose was pointing too high, and MCAS repeatedly pushed the nose down, even as the pilots struggled to pull it up. The system relied on only one of the aircraft's two sensors, and many pilots had not been told that it existed. After the second crash, aviation authorities around the world grounded the aircraft, and it remained grounded for about twenty months. Investigations by the US Congress concluded that the company had played down the importance of the system in order to avoid costly training requirements, and that the US aviation regulator had allowed the company itself to carry out much of the work of certifying the aircraft as safe. The aircraft was allowed to fly again in late 2020, after its software had been redesigned to use both sensors and to limit how strongly it could push the nose down, and after pilots had been retrained. The company paid billions of dollars in fines and compensation.",
      questions: [
        [
          "According to the passage, MCAS was added to the 737 MAX because ----.",
          [
            "its new engines tended to push the aircraft's nose upwards",
            "pilots had requested a new automatic system",
            "the older model had crashed several times",
            "it allowed the aircraft to carry more passengers",
            "it reduced the amount of fuel used",
          ],
          "Daha büyük motorlar kanatlarda daha önde ve yukarıda olduğundan bazı durumlarda burnu yukarı itiyordu; MCAS bunu dengelemek için eklendi.",
        ],
        [
          "The passage states that, in both crashes, MCAS ----.",
          [
            "acted on false data from a single faulty sensor",
            "was switched off by the pilots before take-off",
            "used information from both sensors correctly",
            "pushed the nose of the aircraft upwards",
            "worked exactly as the pilots expected",
          ],
          "Her iki kazada tek bir arızalı sensör burnun çok yüksek olduğunu gösteren yanlış veri gönderdi ve MCAS burnu defalarca aşağı itti.",
        ],
        [
          "It can be inferred from the passage that the company played down the importance of MCAS mainly in order to ----.",
          [
            "avoid the cost of extra pilot training",
            "make the aircraft faster",
            "hide the use of larger engines",
            "reduce the number of sensors",
            "sell the aircraft only to Asian airlines",
          ],
          "Kongre soruşturmaları şirketin maliyetli eğitim gerekliliklerinden kaçınmak için sistemin önemini küçümsediği sonucuna vardı.",
        ],
      ],
    },
    {
      text:
        "On 14 August 2018, during a heavy rainstorm, a section of the Morandi Bridge, which carried a motorway high above the Italian city of Genoa, suddenly collapsed. About two hundred metres of the deck fell, together with dozens of vehicles, onto the railway lines, river and warehouses below, and forty-three people were killed. The bridge, completed in 1967 and named after its designer, the engineer Riccardo Morandi, had an unusual design. Its deck was supported by a small number of stays, which ran from the tops of tall towers, but instead of using exposed steel cables, Morandi had encased the steel inside concrete, believing that this would protect it from corrosion. In practice, the concrete cracked over time, allowing water and salty air from the sea to reach the steel, and because the cables were hidden inside the concrete, it was difficult for inspectors to see how badly they had corroded. Concerns about the bridge's condition had been raised for decades, and Morandi himself had warned in the 1980s that it required constant maintenance. One of the towers had been strengthened in the 1990s, but the one that collapsed had not. After the disaster, the Italian government blamed the private company that operated the motorway, and dozens of people, including its former executives, were put on trial. The remains of the bridge were demolished in 2019, and a new bridge, designed by the Genoese architect Renzo Piano, who offered his design without charge, was built in about a year and opened in 2020. It is equipped with sensors and robots that monitor its condition continuously. The collapse prompted inspections of many other ageing bridges in Italy.",
      questions: [
        [
          "According to the passage, Morandi encased the steel stays in concrete because ----.",
          [
            "he believed it would protect them from corrosion",
            "steel was too expensive at the time",
            "he wanted the bridge to look more modern",
            "concrete made the bridge lighter",
            "the government required it",
          ],
          "Morandi çeliği betonun içine yerleştirmenin onu korozyondan koruyacağına inanıyordu.",
        ],
        [
          "The passage states that the tower which collapsed ----.",
          [
            "had not been strengthened, unlike one of the others",
            "had been completely rebuilt in the 1990s",
            "was the newest part of the bridge",
            "had no steel inside it",
            "was designed by Renzo Piano",
          ],
          "Kulelerden biri 1990'larda güçlendirilmişti, ancak çöken kule güçlendirilmemişti.",
        ],
        [
          "It can be inferred from the passage that the new bridge's sensors and robots are intended to ----.",
          [
            "detect problems early, before they become dangerous",
            "collect tolls from drivers",
            "replace the need for any engineers",
            "make the bridge move in strong winds",
            "film the city for tourists",
          ],
          "Köprünün durumunu sürekli izleyen sensörler, eski köprüde gözden kaçan bozulmaların erken fark edilmesi içindir.",
        ],
      ],
    },
    {
      text:
        "On the evening of 20 April 2010, a drilling rig called Deepwater Horizon was completing work on an oil well about eighty kilometres off the coast of the US state of Louisiana, in water about one and a half kilometres deep. During the final stages, the cement that was supposed to seal the bottom of the well failed, and oil and gas began to rise up the pipe towards the rig. The crew misinterpreted the results of a pressure test that should have warned them of the problem. When the gas reached the rig, it ignited, causing a huge explosion and fire that killed eleven workers. The blowout preventer, a massive set of valves on the seabed designed to seal the well in an emergency, failed to close it completely, and two days later the burning rig sank. For the following eighty-seven days, oil gushed from the broken well into the Gulf of Mexico. Engineers, unable to reach the well directly, tried a series of methods to stop it, using robot submarines to operate equipment on the seabed, before finally capping it in July. In all, about four million barrels of oil escaped, making it the largest accidental marine oil spill in history. The oil spread across thousands of square kilometres of sea, killed large numbers of birds, turtles and dolphins, and reached the coasts of several states, damaging fisheries and tourism. A government commission concluded that the disaster had been caused by a series of decisions by the companies involved to save time and money, as well as by inadequate regulation. The company that owned the well agreed to pay more than sixty billion dollars in fines, compensation and clean-up costs, and new safety rules for offshore drilling were introduced.",
      questions: [
        [
          "According to the passage, the oil and gas began to rise towards the rig because ----.",
          [
            "the cement at the bottom of the well had failed",
            "the rig was struck by a ship",
            "a storm damaged the pipe",
            "the blowout preventer was opened on purpose",
            "the well was drilled too close to the coast",
          ],
          "Kuyunun dibini kapatması gereken çimento başarısız oldu ve petrol ile gaz borudan yukarı çıkmaya başladı.",
        ],
        [
          "The passage states that the engineers stopped the flow of oil by ----.",
          [
            "using robot submarines to operate equipment on the seabed",
            "sending divers to close the valves by hand",
            "setting fire to the oil on the surface",
            "pumping sea water into the rig",
            "towing the rig back to Louisiana",
          ],
          "Kuyuya doğrudan ulaşamayan mühendisler deniz tabanındaki donanımı robot denizaltılarla kullanıp sonunda kuyuyu kapattı.",
        ],
        [
          "It can be inferred from the passage that the government commission believed that ----.",
          [
            "pressure to save time and money had contributed to the disaster",
            "the disaster could not have been prevented",
            "the workers alone were responsible",
            "the oil spill caused no damage to wildlife",
            "regulation of drilling had been too strict",
          ],
          "Komisyon felaketin şirketlerin zaman ve para kazanmak için aldığı kararlardan ve yetersiz denetimden kaynaklandığı sonucuna vardı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In December 1999, NASA lost contact with the Mars Polar Lander as it descended towards the surface of Mars. ---- As a result, the engines may have been switched off while the lander was still about forty metres above the ground.",
      [
        "Investigators concluded that a vibration in its legs as they unfolded had probably been mistaken by the computer for the moment of touchdown.",
        "Mars is a red planet.",
        "NASA has launched many spacecraft.",
        "Only a few months earlier, another spacecraft had been lost because two teams had used different units of measurement.",
        "Legs are used for walking.",
      ],
      "Boşluk 'As a result' ile motorların erken kapanmasına bağlanacak bir neden gerektirir; boşluğa bacaklardaki titreşimin bilgisayarca yere değme anı sanılmış olabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In June 2021, part of a twelve-storey apartment building in Surfside, near Miami, suddenly collapsed in the middle of the night, killing ninety-eight people. ---- Repairs had been planned, but residents had argued for years about how to pay for them.",
      [
        "An engineer had warned three years earlier of major structural damage to the concrete slab below the pool deck.",
        "Miami is in Florida.",
        "Apartments have many rooms.",
        "After the collapse, Florida introduced stricter rules requiring regular inspections of older buildings.",
        "Concrete is a common material.",
      ],
      "Boşluk 'Repairs had been planned' ifadesine zemin hazırlayan önceki bir uyarıyı tanıtan cümle gerektirir; boşluğa bir mühendisin üç yıl önce havuz katının altındaki beton döşemede ciddi yapısal hasar konusunda uyardığını söyleyen cümle gelmelidir.",
    ],
    [
      "On 5 June 1976, the newly completed Teton Dam in the US state of Idaho failed as its reservoir was being filled for the first time. ---- Investigators later concluded that the dam had been built on fractured volcanic rock that allowed water to leak through the foundations.",
      [
        "Water burst through the earth embankment, flooding towns downstream and killing eleven people.",
        "Idaho is famous for potatoes.",
        "Dams store water.",
        "The dam was never rebuilt, and its remains can still be seen in the valley today.",
        "Rivers flow downhill.",
      ],
      "Boşluk barajın nasıl çöktüğünü ve sonuçlarını anlatıp soruşturmanın bulgusuna bağlanan bir cümle gerektirir; boşluğa suyun toprak setten fışkırıp aşağıdaki kasabaları su altında bıraktığını söyleyen cümle gelmelidir.",
    ],
    [
      "In July 1988, a series of explosions destroyed Piper Alpha, an oil and gas platform in the North Sea, killing a hundred and sixty-seven men. ---- When the night shift restarted the pump without knowing this, gas leaked out and ignited.",
      [
        "Earlier that day, a safety valve had been removed from one of the pumps for maintenance, but the paperwork recording this was not passed on.",
        "The North Sea lies between Britain and Norway.",
        "Platforms are large.",
        "The disaster led to major changes in the way safety is managed on offshore platforms in Britain.",
        "Gas is used for heating.",
      ],
      "Boşluk 'without knowing this' ifadesinin gönderme yapacağı bilgiyi tanıtan bir cümle gerektirir; boşluğa o gün bir pompanın güvenlik vanasının bakım için söküldüğünü ama bunu kaydeden belgelerin iletilmediğini söyleyen cümle gelmelidir.",
    ],
    [
      "On 19 July 2024, millions of computers around the world suddenly crashed and displayed a blue error screen. ---- Airlines cancelled thousands of flights, and hospitals, banks and television stations were also affected.",
      [
        "The cause was a faulty update sent out by a cybersecurity company whose software ran on many of the machines.",
        "Computers are used in offices.",
        "Blue is a colour.",
        "Most of the affected computers had to be repaired by hand, one at a time, which took several days.",
        "Airlines carry passengers.",
      ],
      "Boşluk çöküşün nedenini açıklayıp etkilerine bağlanan bir cümle gerektirir; boşluğa nedenin pek çok makinede çalışan yazılımı olan bir siber güvenlik şirketinin gönderdiği hatalı güncelleme olduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "From 1999 onwards, hundreds of people who ran local post offices in Britain were accused of stealing money after a new computer system showed shortfalls in their accounts. ---- Many were prosecuted, and some were sent to prison, before it became clear that the system itself contained errors.",
      [
        "The Post Office insisted that the system was reliable and that the missing money must have been taken by staff.",
        "Britain has many post offices.",
        "Computers store information.",
        "In 2024, a television drama about the scandal led to widespread public anger and new laws.",
        "Money is kept in banks.",
      ],
      "Boşluk suçlamaların nasıl sürdürüldüğünü açıklayıp kovuşturmalara bağlanan bir cümle gerektirir; boşluğa Posta İdaresi'nin sistemin güvenilir olduğunu ve eksik paranın çalışanlarca alınmış olması gerektiğinde ısrar ettiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Engineers often learn more from failures than from successes.",
        "Investigations into disasters can reveal hidden weaknesses in designs and procedures.",
        "Their findings frequently lead to new safety rules.",
        "Many engineers enjoy designing bridges.",
        "Some universities teach courses based entirely on famous failures.",
      ],
      odd: 3,
      why: "Parça mühendislerin başarısızlıklardan nasıl ders çıkardığını anlatır. Pek çok mühendisin köprü tasarlamaktan hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Software errors can be extremely difficult to find.",
        "Some appear only under rare combinations of conditions.",
        "Programmers often write code late at night.",
        "Testing every possible situation is usually impossible.",
        "Engineers therefore try to design systems that fail safely when errors occur.",
      ],
      odd: 2,
      why: "Parça yazılım hatalarını bulmanın güçlüğünü ve alınan önlemleri anlatır. Programcıların sık sık gece geç saatlerde kod yazdığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many serious accidents are caused by a chain of small failures rather than a single cause.",
        "Each failure on its own might be harmless.",
        "Together, however, they can allow a disaster to occur.",
        "Chains are made of metal links.",
        "Safety experts therefore try to build several independent barriers against each danger.",
      ],
      odd: 3,
      why: "Parça ciddi kazaların küçük hatalar zincirinden kaynaklanmasını anlatır. Zincirlerin metal halkalardan yapıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Concrete structures can deteriorate over time.",
        "Water seeping into cracks can cause the steel inside to rust.",
        "As the steel rusts, it expands and cracks the concrete further.",
        "Regular inspection and maintenance are therefore essential.",
        "Concrete was widely used by the ancient Romans.",
      ],
      odd: 4,
      why: "Parça beton yapıların zamanla bozulmasını ve bakımın önemini anlatır. Betonun eski Romalılarca yaygın kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Automation has made many machines safer and more efficient.",
        "However, it can also make operators less alert.",
        "When an automatic system suddenly fails, people may not know how to respond.",
        "Robots are increasingly used in factories.",
        "Training is therefore essential, even when machines usually work on their own.",
      ],
      odd: 3,
      why: "Parça otomasyonun operatörler üzerindeki etkisini ve eğitimin önemini anlatır. Robotların fabrikalarda giderek daha çok kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some failures are caused by mixing up units of measurement.",
        "Engineers in one team may use metres, while another uses feet.",
        "If the difference is not noticed, calculations can be badly wrong.",
        "Many countries have adopted the metric system.",
        "Careful checks are therefore needed whenever teams share data.",
      ],
      odd: 3,
      why: "Parça ölçü birimlerinin karıştırılmasından kaynaklanan hataları anlatır. Pek çok ülkenin metrik sistemi benimsediğini söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
