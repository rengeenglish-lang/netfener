import type { YokdilDeneme } from "./types";

export const FEN_43: YokdilDeneme = {
  no: 43,
  field: "fen",
  vocab: [
    [
      "As the balloon rose higher, the air became so thin that the scientist could barely ----.",
      ["breathe", "write", "sing", "run", "swim"],
      "Balon yükseldikçe havanın o kadar incelmesi ki bilim insanının zar zor 'nefes alabildiği' (breathe) anlatılır.",
    ],
    [
      "The rotation of the Earth ---- the winds so that they blow from the east near the equator.",
      ["deflects", "freezes", "prevents", "colours", "doubles"],
      "Dünya'nın dönüşünün rüzgârları ekvator yakınında doğudan esecek şekilde 'saptırdığı' (deflects) anlatılır.",
    ],
    [
      "The meteorologist advised the general to ---- the invasion by twenty-four hours.",
      ["postpone", "cancel", "celebrate", "advertise", "accelerate"],
      "Meteoroloğun generale çıkarmayı yirmi dört saat 'ertelemesini' (postpone) önerdiği anlatılır.",
    ],
    [
      "The storm surge ---- the low-lying island city, destroying thousands of homes.",
      ["flooded", "warmed", "lit", "dried", "measured"],
      "Fırtına kabarmasının alçak ada kentini 'su altında bıraktığı' (flooded) ve binlerce evi yıktığı anlatılır.",
    ],
    [
      "The scientist was able to ---- the strength of a tornado by studying the damage it left behind.",
      ["estimate", "prevent", "create", "hide", "ignore"],
      "Bilim insanının bir hortumun gücünü bıraktığı hasarı inceleyerek 'tahmin edebildiği' (estimate) anlatılır.",
    ],
    [
      "The forecaster told viewers not to worry, but a few hours later the storm ----.",
      ["broke out", "took after", "looked up", "gave away", "put off"],
      "Hava durumu sunucusunun izleyicilere endişelenmemelerini söylediği ama birkaç saat sonra fırtınanın 'patlak verdiği' (broke out) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before the 1862 flights, no scientist ---- measurements at such a great height.",
      ["had made", "makes", "has made", "will make", "is making"],
      "1862 uçuşlarından önceki durum: 'had made'.",
    ],
    [
      "By the time Hadley published his explanation, sailors ---- the trade winds for centuries.",
      ["had been using", "use", "will use", "are using", "have been used"],
      "Geçmişteki bir andan önce süregelen eylem: 'had been using'.",
    ],
    [
      "If the invasion had gone ahead on 5 June, it ---- in disaster.",
      ["might have ended", "will end", "ends", "had ended", "is ending"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have ended'.",
    ],
    [
      "A sea wall ---- after the disaster to protect the city from future storms.",
      ["was built", "built", "has built", "is building", "builds"],
      "Duvar inşa edilmiştir; edilgen geçmiş zaman: 'was built'.",
    ],
    [
      "---- the Japanese scientist discovered the fast winds in the 1920s, his work was largely unknown abroad.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Keşfin yapılması ile yurt dışında bilinmemesi zıttır: 'Although'.",
    ],
    [
      "The meteorologist, ---- forecast changed the course of the war, was a Scottish expert on the atmosphere.",
      ["whose", "which", "who", "whom", "where"],
      "Meteoroloğun tahmini; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "The storm struck at night, ---- meant that few people saw it coming.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The higher the balloon climbed, ---- the temperature fell.",
      ["the further", "the furthest", "further than", "much further", "so far"],
      "'The higher ..., the further ...' paralel yapısı: 'the further'.",
    ],
    [
      "Only after he had studied the damage from the air ---- Fujita propose his scale.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The satellite sent images back to Earth ---- forecasters could track storms over the oceans.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The general decided ---- the forecaster's advice.",
      ["to follow", "following", "follow", "followed", "to following"],
      "'decide to do sth' kalıbı: 'to follow'.",
    ],
    [
      "The tornado is believed ---- for more than three hours without stopping.",
      ["to have travelled", "travelling", "to travel", "travelled", "to be travelling"],
      "Geçmişe ait bir eylem için mastarın geçmiş biçimi: 'to have travelled'.",
    ],
    [
      "The winds were so strong ---- millions of trees were blown down in a single night.",
      ["that", "as", "than", "which", "so"],
      "'so ... that' sonuç yapısı: 'that'.",
    ],
    [
      "Experts recommend that people ---- indoors during a thunderstorm.",
      ["stay", "stays", "stayed", "to stay", "staying"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'stay'.",
    ],
  ],
  cloze: [
    {
      text:
        "In the nineteenth century, scientists knew very little about the upper atmosphere. In 1862, the British meteorologist James Glaisher and the balloonist Henry Coxwell began a series of flights in a gas-filled balloon to measure temperature, humidity and air pressure at different heights. On 5 September, they took off from Wolverhampton and rose rapidly. Above about eight thousand metres, the air became extremely cold and thin, {1} Glaisher found it increasingly difficult to read his instruments. His arms became paralysed, and he lost consciousness. The valve rope that controlled the balloon's height had become tangled, {2} Coxwell, whose hands were frozen, had to climb into the rigging and pull the rope with his teeth to release gas and begin the descent. The balloon is thought to have reached a height of around eleven thousand metres, {3} higher than any human had been before, although the exact figure is disputed {4} Glaisher was unconscious at the highest point. Both men survived. Over many flights, Glaisher's measurements showed that temperature falls steadily with height and that the air becomes much drier, overturning some earlier assumptions. His work was a pioneering contribution to the scientific study of the atmosphere, {5} later in the century unmanned balloons carrying instruments made such dangerous flights unnecessary.",
      blanks: [
        [
          "(21) ----",
          ["and", "but", "or", "unless", "although"],
          "Havanın soğuk ve ince olması ve okumanın zorlaşması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["so", "but", "or", "yet", "nor"],
          "İpin dolaşmasının sonucu olarak Coxwell tırmanmak zorunda kaldı: 'so'.",
        ],
        [
          "(23) ----",
          ["probably", "hardly", "rarely", "never", "scarcely"],
          "Daha önce hiçbir insanın çıkmadığı kadar yükseğe 'muhtemelen' çıkıldı: 'probably'.",
        ],
        [
          "(24) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Rakamın tartışmalı olmasının nedeni Glaisher'in en yüksek noktada bilinçsiz olmasıdır: 'because'.",
        ],
        [
          "(25) ----",
          ["although", "because", "unless", "so that", "once"],
          "Çalışmanın öncü olması ile sonradan insansız balonların bu uçuşları gereksiz kılması zıtlık bildirir: 'although'.",
        ],
      ],
    },
    {
      text:
        "For centuries, sailors crossing the Atlantic relied on the trade winds, steady winds that blow towards the equator from the north-east in the Northern Hemisphere and from the south-east in the Southern Hemisphere. In 1686, the astronomer Edmond Halley suggested that the winds were caused by the sun heating the air near the equator more strongly than elsewhere: the warm air rises, {1} cooler air flows in from north and south to replace it. His explanation could not account, however, for the fact that the winds blew from the east. In 1735, George Hadley, an English lawyer and amateur scientist, proposed a solution. He pointed out that the Earth rotates from west to east, {2} the surface near the equator moves faster than the surface at higher latitudes. Air moving towards the equator from the north would therefore lag behind the ground beneath it, {3} to an observer on Earth it would appear to come from the east. Hadley's paper attracted little attention at the time, and the same idea was later proposed independently by others. Today, the large circulation of air in which warm air rises near the equator, flows towards the poles at high altitude, sinks around thirty degrees of latitude {4} returns towards the equator near the surface is known as the Hadley cell, in his honour. Hadley's reasoning about rotation was not completely correct in its details, {5} it was an important step towards understanding the Earth's winds.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "until"],
          "Sıcak havanın yükselmesi ve serin havanın yerine akması birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["so", "but", "or", "yet", "nor"],
          "Dünya'nın dönmesinin sonucu olarak ekvatordaki yüzey daha hızlı hareket eder: 'so'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Havanın geride kalması ve doğudan geliyormuş gibi görünmesi birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "until"],
          "Hareketler sıralanırken son öğe eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["but", "so", "or", "because", "unless"],
          "Ayrıntılarda tam doğru olmaması ile önemli bir adım olması zıttır: 'but'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Glaisher lost consciousness during the flight, ----.",
      [
        "both men returned safely",
        "the balloon was filled with gas",
        "Wolverhampton is in England",
        "the air was cold",
        "the instruments that he had taken with him were designed to measure temperature, humidity and air pressure",
      ],
      "'Although' zıtlık ister: Glaisher uçuş sırasında bilincini kaybetse de iki adam da güvenle döndü.",
    ],
    [
      "----, Hadley could explain why the trade winds blew from the east.",
      [
        "By taking the Earth's rotation into account",
        "Although he was a lawyer",
        "Unless sailors agreed",
        "Since Halley was an astronomer",
        "While other scientists were measuring the temperature of the air at different heights above the ground",
      ],
      "Dünya'nın dönüşünü hesaba katarak Hadley alize rüzgârlarının neden doğudan estiğini açıklayabildi.",
    ],
    [
      "If the weather is too stormy, ----.",
      [
        "landing craft may be unable to reach the beaches",
        "Normandy is in France",
        "ships are large",
        "the war began in 1939",
        "the general would have needed to find another meteorologist whose forecasts he could trust more fully",
      ],
      "Birinci tip koşul: hava çok fırtınalı olursa çıkarma gemileri kumsallara ulaşamayabilir.",
    ],
    [
      "So many people died in Galveston ----.",
      [
        "because the city lay only a few metres above the sea",
        "although Texas is large",
        "unless the warnings were heard",
        "so that the hurricane was named",
        "while scientists in Cuba had been warning that the storm would strike the coast of Texas rather than Florida",
      ],
      "Galveston'da kent deniz seviyesinin yalnızca birkaç metre üzerinde olduğu için çok fazla insan öldü.",
    ],
    [
      "Not only did Ooishi discover the fast winds, ----.",
      [
        "but he also published his results in Esperanto",
        "and Japan is an island nation",
        "since balloons are light",
        "so the winds were strong",
        "unless the military had used the winds to send balloons carrying bombs across the Pacific Ocean",
      ],
      "'Not only ... but also' yapısı tamamlanır: Ooishi hızlı rüzgârları keşfetmekle kalmadı, sonuçlarını Esperanto dilinde de yayımladı.",
    ],
    [
      "Once the storm had passed, ----.",
      [
        "millions of fallen trees had to be cleared",
        "England has many forests",
        "October is in autumn",
        "the forecaster was famous",
        "the national weather service decided to improve the way it collected information from ships and aircraft",
      ],
      "Fırtına geçtikten sonra milyonlarca devrilmiş ağacın temizlenmesi gerekti.",
    ],
    [
      "Fujita based his scale on the damage tornadoes caused ----.",
      [
        "because wind speeds were rarely measured directly",
        "although he was Japanese",
        "unless buildings were strong",
        "so that he lived in Chicago",
        "while other scientists were trying to build instruments that could survive inside the centre of a tornado",
      ],
      "Fujita ölçeğini rüzgâr hızları nadiren doğrudan ölçüldüğü için hortumların yol açtığı hasara dayandırdı.",
    ],
    [
      "Since the satellite could see clouds from space, ----.",
      [
        "forecasters could follow storms over the ocean",
        "satellites orbit the Earth",
        "the launch was in 1960",
        "clouds are white",
        "the images that it sent back to Earth were not very clear, and many of them were difficult to interpret",
      ],
      "'Since' neden bildirir: uydu bulutları uzaydan görebildiği için meteorologlar okyanus üzerindeki fırtınaları izleyebiliyordu.",
    ],
    [
      "Unless the tornado had stayed on the ground for so long, ----.",
      [
        "it would not have caused so many deaths",
        "Missouri is a state",
        "tornadoes are dangerous",
        "the year was 1925",
        "the newspapers would have reported the event in a few lines on the inside pages rather than on the front page",
      ],
      "'Unless' olumsuz koşul: hortum bu kadar uzun süre yerde kalmasaydı bu kadar çok ölüme yol açmazdı.",
    ],
    [
      "Scientists find ball lightning hard to study ----.",
      [
        "because it appears rarely and unpredictably",
        "although it is bright",
        "unless it is raining",
        "so that it is round",
        "while many witnesses have described seeing glowing spheres that floated slowly through rooms and then disappeared",
      ],
      "Bilim insanları top yıldırımını nadiren ve öngörülemez biçimde ortaya çıktığı için incelemekte zorlanır.",
    ],
    [
      "Even though Sullivan was struck by lightning seven times, ----.",
      [
        "he survived every strike",
        "lightning is dangerous",
        "he was a park ranger",
        "Virginia has forests",
        "his hat, which had been burned during one of the strikes, is now displayed in a museum of unusual records",
      ],
      "'Even though' zıtlık ister: Sullivan'a yedi kez yıldırım çarpsa da her birinden sağ kurtuldu.",
    ],
  ],
  enTr: [
    [
      "Glaisher's measurements showed that temperature falls steadily with height.",
      [
        "Glaisher'in ölçümleri sıcaklığın yükseklikle birlikte düzenli olarak düştüğünü gösterdi.",
        "Glaisher'in ölçümleri sıcaklığın yükseklikle arttığını gösterdi.",
        "Yükseklikle birlikte düzenli olarak düşen sıcaklığı ölçmek isteyen Glaisher, balonun çok yükseğe çıkamaması nedeniyle hiçbir sonuç elde edemedi.",
        "Sıcaklık, Glaisher'in ölçümlerini etkiledi.",
        "Glaisher hiç ölçüm yapmadı.",
      ],
      "'measurements showed that temperature falls' 'ölçümleri sıcaklığın düştüğünü gösterdi', 'steadily with height' 'yükseklikle birlikte düzenli olarak' karşılığıdır.",
    ],
    [
      "Air moving towards the equator appears to come from the east because of the Earth's rotation.",
      [
        "Ekvatora doğru hareket eden hava, Dünya'nın dönüşü nedeniyle doğudan geliyormuş gibi görünür.",
        "Ekvatordan uzaklaşan hava, Dünya'nın dönüşünü yavaşlatır.",
        "Dünya'nın dönüşünü inceleyen bilim insanları, ekvatora doğru hareket eden havanın her zaman batıdan geldiğini ve bunun hiç değişmediğini gösterdi.",
        "Dünya'nın dönüşü havanın hareketini engeller.",
        "Hava, ekvatorda hiç hareket etmez.",
      ],
      "'Air moving towards the equator appears to come from the east' 'ekvatora doğru hareket eden hava doğudan geliyormuş gibi görünür', 'because of the Earth's rotation' 'Dünya'nın dönüşü nedeniyle' karşılığıdır.",
    ],
    [
      "The forecaster predicted a short break in the bad weather.",
      [
        "Hava durumu uzmanı kötü havada kısa bir ara olacağını öngördü.",
        "Hava durumu uzmanı kötü havanın haftalarca süreceğini öngördü.",
        "Kötü havada kısa bir ara olacağını öngöremeyen uzman, generale çıkarmayı birkaç hafta ertelemesini önererek tüm planların değişmesine neden oldu.",
        "Kötü hava uzmanın tahminini bozdu.",
        "Uzman hiçbir tahminde bulunmadı.",
      ],
      "'predicted a short break' 'kısa bir ara olacağını öngördü', 'in the bad weather' 'kötü havada' karşılığıdır.",
    ],
    [
      "The entire city was raised by several metres after the disaster.",
      [
        "Felaketten sonra kentin tamamı birkaç metre yükseltildi.",
        "Felaketten sonra kent birkaç metre aşağıya taşındı.",
        "Felaketten önce birkaç metre yükseltilen kent, fırtınanın gücü karşısında yine de korunamadı ve büyük ölçüde yıkıldı.",
        "Kent, felaketten sonra tamamen terk edildi.",
        "Felaket, kentin yüksekliğini değiştirmedi.",
      ],
      "'The entire city was raised by several metres' 'kentin tamamı birkaç metre yükseltildi', 'after the disaster' 'felaketten sonra' karşılığıdır.",
    ],
    [
      "The scale estimates wind speed from the damage done to buildings and trees.",
      [
        "Ölçek, rüzgâr hızını binalara ve ağaçlara verilen hasardan tahmin eder.",
        "Ölçek, binaların ve ağaçların yaşını tahmin eder.",
        "Binalara ve ağaçlara verilen hasarı önlemek için geliştirilen ölçek, mühendislerin daha dayanıklı yapılar tasarlamasına yardım etmek amacıyla kullanılır.",
        "Rüzgâr hızı ölçeği bozar.",
        "Ölçek, yalnızca deniz üzerindeki rüzgârları ölçer.",
      ],
      "'estimates wind speed' 'rüzgâr hızını tahmin eder', 'from the damage done to buildings and trees' 'binalara ve ağaçlara verilen hasardan' karşılığıdır.",
    ],
    [
      "The storm was the worst to hit the region for nearly three hundred years.",
      [
        "Fırtına, bölgeyi yaklaşık üç yüz yıldır vuran en kötü fırtınaydı.",
        "Fırtına, bölgeyi üç yüz yıl sonra yeniden vurdu.",
        "Bölgeyi yaklaşık üç yüz yıl boyunca her yıl vuran fırtınalar, yerel halkın evlerini daha sağlam yapmasına neden olmuştu.",
        "Bölgede hiç fırtına görülmemişti.",
        "Fırtına yalnızca birkaç dakika sürdü.",
      ],
      "'the worst to hit the region' 'bölgeyi vuran en kötü fırtına', 'for nearly three hundred years' 'yaklaşık üç yüz yıldır' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Coxwell, ipi dişleriyle çekerek balonu alçaltmayı başardı.",
      [
        "Coxwell managed to bring the balloon down by pulling the rope with his teeth.",
        "Coxwell's teeth were damaged when the balloon came down.",
        "Coxwell tried to pull the rope with his teeth, but he was unable to release the gas, and the balloon continued to rise until it burst.",
        "The rope pulled Coxwell out of the balloon.",
        "Coxwell never touched the rope.",
      ],
      "'ipi dişleriyle çekerek' 'by pulling the rope with his teeth', 'balonu alçaltmayı başardı' 'managed to bring the balloon down' karşılığıdır.",
    ],
    [
      "Hadley'nin makalesi o dönemde pek ilgi görmedi.",
      [
        "Hadley's paper attracted little attention at the time.",
        "Hadley's paper was widely praised at the time.",
        "Hadley's paper was not published until many years after his death, when his family found it among his private papers.",
        "Hadley did not write any papers.",
        "Hadley's paper was about law.",
      ],
      "'o dönemde' 'at the time', 'Hadley'nin makalesi pek ilgi görmedi' 'Hadley's paper attracted little attention' karşılığıdır.",
    ],
    [
      "Çıkarma, kötü hava nedeniyle bir gün ertelendi.",
      [
        "The invasion was postponed by one day because of bad weather.",
        "The invasion took place a day earlier than planned.",
        "The invasion was planned for a day of bad weather, because the generals believed that the enemy would not expect an attack in such conditions.",
        "Bad weather was caused by the invasion.",
        "The invasion was cancelled.",
      ],
      "'kötü hava nedeniyle' 'because of bad weather', 'çıkarma bir gün ertelendi' 'the invasion was postponed by one day' karşılığıdır.",
    ],
    [
      "Kasırga altı bin ile on iki bin arasında insanın ölümüne yol açtı.",
      [
        "The hurricane killed between six thousand and twelve thousand people.",
        "Twelve thousand people survived the hurricane without injury.",
        "The hurricane was expected to kill thousands of people, but in the end only a few died because everyone had left the city in time.",
        "The hurricane lasted twelve days.",
        "Six thousand houses were built after the hurricane.",
      ],
      "'altı bin ile on iki bin arasında insanın' 'between six thousand and twelve thousand people', 'ölümüne yol açtı' 'killed' karşılığıdır.",
    ],
    [
      "Japonya, savaş sırasında bu rüzgârları Pasifik üzerinden balon göndermek için kullandı.",
      [
        "During the war, Japan used these winds to send balloons across the Pacific.",
        "Japan stopped these winds during the war.",
        "During the war, Japan tried to use balloons to measure these winds, but most of the balloons were lost over the Pacific before they could send back any data.",
        "The Pacific sent balloons to Japan.",
        "Japan had no balloons.",
      ],
      "'savaş sırasında' 'during the war', 'bu rüzgârları Pasifik üzerinden balon göndermek için kullandı' 'used these winds to send balloons across the Pacific' karşılığıdır.",
    ],
    [
      "Hortum, üç eyaleti geçerek yaklaşık 350 kilometre yol aldı.",
      [
        "The tornado travelled about 350 kilometres across three states.",
        "The tornado lasted for three days.",
        "The tornado was first seen in one state, but it disappeared after only a few kilometres and caused little damage to buildings.",
        "Three tornadoes struck the same state.",
        "The tornado did not move.",
      ],
      "'üç eyaleti geçerek' 'across three states', 'yaklaşık 350 kilometre yol aldı' 'travelled about 350 kilometres' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "The Allied invasion of Normandy in June 1944 depended heavily on the weather. The landings required a full moon for night operations, low tides at dawn, calm seas for landing craft and clear skies for aircraft, and these conditions occurred only on a few days each month. The chief meteorologist advising General Eisenhower was James Stagg, a Scottish scientist who led a team of forecasters from the British and American services. The invasion was planned for 5 June. On 3 June, however, Stagg's team predicted strong winds, high waves and low cloud for that day, and Eisenhower agreed to postpone the operation. The forecasters then detected that a short period of better weather would follow on 6 June, as a gap opened between two weather systems moving across the Atlantic. Some of the American forecasters disagreed, but Stagg presented the prediction to Eisenhower, who decided to proceed. The landings went ahead on 6 June in conditions that, although difficult, were acceptable. German forecasters, who lacked access to weather reports from the western Atlantic, had expected the storms to continue, and several senior German commanders were away from their posts. Historians have noted that if the invasion had been delayed until the next suitable dates, in mid-June, it would have encountered one of the worst Channel storms for decades.",
      questions: [
        [
          "According to the passage, the invasion could take place only on a few days each month because ----.",
          [
            "several natural conditions had to occur together",
            "aircraft were in short supply",
            "the forecasters were busy",
            "Eisenhower preferred to attack only at weekends when the enemy was less prepared",
            "the moon was always full",
          ],
          "Metne göre dolunay, şafakta alçak gelgit, sakin deniz ve açık gökyüzü bir arada gerekiyordu.",
        ],
        [
          "It can be understood from the passage that the German forecasters ----.",
          [
            "had less information about Atlantic weather",
            "predicted the break in the weather",
            "advised their commanders to stay at their posts",
            "worked together with Stagg's team in order to share information about the conditions",
            "were more accurate",
          ],
          "Batı Atlantik'ten hava raporlarına erişimleri yoktu.",
        ],
        [
          "According to the historians mentioned in the passage, ----.",
          [
            "delaying the invasion further could have been disastrous",
            "June has calm weather",
            "the storm was predicted accurately",
            "the invasion was actually carried out in the middle of June after a long delay",
            "the Channel is always stormy",
          ],
          "Haziran ortasına ertelenseydi on yılların en kötü fırtınalarından biriyle karşılaşılacaktı.",
        ],
      ],
    },
    {
      text:
        "In 1900, Galveston was one of the most prosperous cities in Texas, a busy port built on a low, sandy island in the Gulf of Mexico; no part of it rose much more than two or three metres out of the water. Some residents had proposed building a sea wall, but the idea had been rejected as unnecessary. In early September, a hurricane crossed Cuba and entered the Gulf. American forecasters at the national Weather Bureau, who distrusted the Cuban meteorologists, believed that the storm would move north towards Florida, and they did not issue strong warnings to Texas. On 8 September, the hurricane struck Galveston with winds estimated at more than two hundred kilometres per hour. A storm surge, a rise in sea level driven by the wind, flooded the entire island to a depth of several metres. Buildings were swept away, and between six thousand and twelve thousand people died, more than in any other natural catastrophe ever recorded in America. After the disaster, the city built a concrete sea wall more than five metres high and, in a remarkable engineering project, raised the level of much of the city by pumping sand underneath buildings, some of which were lifted on jacks. The disaster also led to improvements in hurricane forecasting and communication.",
      questions: [
        [
          "According to the passage, Galveston was especially vulnerable because ----.",
          [
            "it lay very close to sea level",
            "it was far from the sea",
            "it had a sea wall",
            "its buildings had been designed to resist strong winds but not earthquakes",
            "it was in Florida",
          ],
          "Metne göre en yüksek noktası deniz seviyesinin üç metreden azı üzerindeydi.",
        ],
        [
          "It can be understood from the passage that the American forecasters ----.",
          [
            "misjudged the hurricane's path",
            "warned Texas in good time",
            "trusted the Cuban scientists",
            "predicted that the storm would strike Galveston several days before it arrived",
            "did not know about the storm",
          ],
          "Fırtınanın Florida'ya gideceğini sanarak yolunu yanlış değerlendirdiler.",
        ],
        [
          "After the disaster, the city ----.",
          [
            "invested heavily in defences against the sea",
            "was abandoned",
            "moved to the mainland",
            "decided that a sea wall would be too expensive and relied instead on warnings",
            "stopped trading",
          ],
          "Beton deniz duvarı inşa etti ve kentin büyük bölümünü yükseltti.",
        ],
      ],
    },
    {
      text:
        "In the 1920s, Wasaburo Ooishi, a Japanese meteorologist, released weather balloons from an observatory near Mount Fuji and tracked them with telescopes. He discovered that at high altitudes, over Japan, there were extremely strong westerly winds blowing throughout the year, especially in winter. Unusually, Ooishi published his results in Esperanto, an international language that he supported, and his work received little attention outside Japan. Western scientists became aware of such winds only later. In the 1930s, the American pilot Wiley Post noticed that his aircraft flew much faster at high altitudes in certain conditions, and in 1944 and 1945, US air force crews on missions over Japan encountered winds so strong that their planes almost stood still. Meteorologists called these narrow bands of fast-moving air 'jet streams'. During the war, Japan made use of Ooishi's findings. Between 1944 and 1945, the military launched more than nine thousand paper balloons carrying bombs into the jet stream, expecting them to cross the Pacific and land in North America. A few hundred reached the United States and Canada, but they caused little damage; the only deaths occurred when a woman and five children found one in a forest in Oregon in 1945. Today, jet streams are studied closely because they influence weather patterns and pilots ride them on eastbound flights to cut journey times.",
      questions: [
        [
          "According to the passage, Ooishi's discovery remained little known abroad partly because ----.",
          [
            "he published it in Esperanto",
            "it was a military secret",
            "his balloons were lost",
            "Western scientists had already discovered the winds several years earlier",
            "he worked in Oregon",
          ],
          "Metne göre sonuçlarını Esperanto dilinde yayımladı.",
        ],
        [
          "The experiences of American bomber crews showed that ----.",
          [
            "the winds at high altitude could be extremely strong",
            "Japan had no winds",
            "balloons were dangerous",
            "aircraft could fly faster than the winds in every part of the sky above Japan",
            "Ooishi was wrong",
          ],
          "Uçakları neredeyse durduracak kadar güçlü rüzgârlarla karşılaştılar.",
        ],
        [
          "It can be understood from the passage that the balloon bombs ----.",
          [
            "had limited effect",
            "destroyed many cities",
            "never reached America",
            "were designed to collect information about the weather over the Pacific Ocean",
            "were launched from America",
          ],
          "Birkaç yüzü ulaştı ama az hasar verdi.",
        ],
      ],
    },
    {
      text:
        "On the evening of 15 October 1987, a British television weather forecaster, Michael Fish, told viewers that a woman had called to say she had heard a hurricane was on the way, but reassured them that there would not be one. That night, a powerful storm swept across southern England and northern France, with gusts of more than 180 kilometres per hour. Strictly speaking, Fish was right: the storm was not a hurricane, which forms only over warm tropical seas. Nevertheless, it was the worst storm to strike south-east England for nearly three hundred years. About fifteen million trees were blown down, including many ancient trees in parks and gardens such as Kew, roads and railways were blocked, and hundreds of thousands of homes lost power. Eighteen people died in England. Because the storm struck at night, when few people were outside, the death toll was lower than it might have been. The forecast became notorious, although Fish later pointed out that he had been referring to a different storm in the western Atlantic. An official inquiry found that the computer models had underestimated the storm's strength and track, partly because of a shortage of observations from the Bay of Biscay. The Met Office subsequently improved its observation network and computer models, and introduced a system of severe weather warnings.",
      questions: [
        [
          "According to the passage, the forecaster's statement was technically accurate because ----.",
          [
            "the storm did not meet the definition of a hurricane",
            "the winds were light",
            "the storm hit France only",
            "hurricanes had already been recorded in England many times before 1987",
            "the woman was mistaken about the date",
          ],
          "Metne göre kasırgalar yalnızca sıcak tropik denizlerde oluşur; fırtına teknik olarak kasırga değildi.",
        ],
        [
          "It can be understood from the passage that the timing of the storm ----.",
          [
            "reduced the number of deaths",
            "increased the damage to trees",
            "was predicted correctly",
            "meant that most people were travelling on the roads when it struck",
            "had no effect",
          ],
          "Gece vurduğu ve dışarıda az kişi olduğu için ölü sayısı daha düşük kaldı.",
        ],
        [
          "The inquiry concluded that the forecast went wrong partly because ----.",
          [
            "there were not enough observations from one sea area",
            "the forecaster ignored the models",
            "computers were not used",
            "the storm changed direction suddenly after crossing the coast of northern France",
            "the warning system was too sensitive",
          ],
          "Biscay Körfezi'nden yeterli gözlem yoktu.",
        ],
      ],
    },
    {
      text:
        "Tetsuya Theodore Fujita, born in Japan in 1920, studied the damage caused by the atomic bombs at Hiroshima and Nagasaki shortly after the war, measuring the patterns of scorched and flattened objects to work out how the blasts had spread. In the 1950s, he moved to the University of Chicago, where he built an international reputation as a specialist in violent storms. Since tornadoes usually destroy instruments in their path, and few direct measurements of their winds existed, Fujita developed a method of estimating their strength from the damage they caused. In 1971, he introduced a six-level scale, from F0 for light damage, such as broken branches, to F5 for incredible damage, in which well-built houses are swept away. He spent many hours flying over damaged areas, taking photographs and mapping the patterns of fallen trees and debris. This work led him to another important discovery. After the crash of a passenger aircraft in New York in 1975, he concluded that it had been caused by a sudden, powerful downdraft of air from a thunderstorm, which he called a 'microburst'. Many meteorologists were sceptical at first, but research using radar confirmed his theory, and airports introduced systems to detect such dangerous winds. In 2007, the Fujita scale was revised in the United States to take better account of different types of buildings.",
      questions: [
        [
          "According to the passage, Fujita's early experience in Japan involved ----.",
          [
            "analysing damage patterns",
            "flying aircraft",
            "studying tornadoes",
            "designing radar systems for airports in Japan and the United States",
            "teaching at Chicago",
          ],
          "Metne göre atom bombası hasarının desenlerini ölçerek patlamanın nasıl yayıldığını inceledi.",
        ],
        [
          "Fujita estimated tornado strength from damage because ----.",
          [
            "direct measurements of the winds were rarely available",
            "damage is easy to repair",
            "he did not trust instruments",
            "the government required all scientists to use photographs instead of measurements",
            "tornadoes are rare",
          ],
          "Hortumlar yollarındaki aletleri genellikle yok ettiği için doğrudan ölçüm nadirdi.",
        ],
        [
          "It can be understood from the passage that Fujita's theory about the 1975 crash ----.",
          [
            "was eventually confirmed and improved safety",
            "was rejected permanently",
            "concerned a tornado",
            "was proposed by the airline before Fujita examined the evidence from the site",
            "had no practical effect",
          ],
          "Radar araştırmaları teoriyi doğruladı ve havalimanları algılama sistemleri kurdu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "On 1 April 1960, the United States launched TIROS-1, the first weather satellite. ---- Although the pictures were crude and the satellite worked for only seventy-eight days, they showed that observing weather from space was possible.",
      [
        "Its television cameras sent back thousands of images of clouds over large areas of the Earth.",
        "Satellites orbit the Earth.",
        "April is in spring.",
        "The satellite was shaped like a hat box and was covered with more than nine thousand solar cells that provided its electrical power.",
        "Television was popular in 1960.",
      ],
      "Boşluktan sonra 'the pictures' ifadesi gelir; boşluğa televizyon kameralarının binlerce bulut görüntüsü gönderdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "On 18 March 1925, a tornado crossed the states of Missouri, Illinois and Indiana. ---- With 695 deaths, it remains the deadliest tornado in the history of the United States.",
      [
        "It travelled about 350 kilometres in three and a half hours, destroying several towns along its path.",
        "Missouri is in the Midwest.",
        "Tornadoes form in spring.",
        "At the time, forecasters were not allowed to use the word 'tornado' in public warnings, because officials feared that it would cause unnecessary panic.",
        "Illinois has many farms.",
      ],
      "Boşluk hortumun ölçeğini anlatan bir cümle gerektirir; boşluğa üç buçuk saatte yaklaşık 350 km yol alıp birkaç kasabayı yok ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "For centuries, people have reported seeing glowing spheres of light during thunderstorms, a phenomenon known as ball lightning. ---- In 2012, Chinese scientists studying ordinary lightning happened to record ball lightning with their instruments, obtaining the first scientific data on its light.",
      [
        "Because it is rare and unpredictable, many scientists long doubted that it existed.",
        "Thunderstorms are common in summer.",
        "Light travels very fast.",
        "Witnesses have described the spheres as being about the size of a football, often floating slowly through rooms or along wires before disappearing silently or with a bang.",
        "China is a large country.",
      ],
      "Boşluktan sonra ilk bilimsel verilerin elde edildiği anlatılır; boşluğa nadir olduğu için pek çok bilim insanının varlığından şüphe ettiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Roy Sullivan, a park ranger in Shenandoah National Park in Virginia, was struck by lightning seven times between 1942 and 1977. ---- He holds the world record for the number of lightning strikes survived by a person.",
      [
        "He survived every strike, although he suffered burns and once lost his hair.",
        "Virginia has many parks.",
        "Lightning is hot.",
        "As a ranger, he spent much of his time working outdoors in the mountains, which are frequently affected by thunderstorms during the summer months.",
        "Rangers wear uniforms.",
      ],
      "Boşluktan sonra hayatta kalma rekoru anlatılır; boşluğa her çarpmadan yanıklar olsa da sağ kurtulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1835, the French scientist Gaspard-Gustave de Coriolis described how objects moving on a rotating surface appear to be deflected. ---- This effect causes large storms to rotate anticlockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere.",
      [
        "On the Earth, moving air is deflected to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.",
        "France has many famous scientists.",
        "Storms can be very large.",
        "Contrary to a popular belief, the effect is far too weak to determine the direction in which water drains from a sink or bath in an ordinary home.",
        "The Earth is round.",
      ],
      "Boşluktan sonra 'This effect' ifadesi gelir; boşluğa hareket eden havanın kuzey yarımkürede sağa, güneyde sola saptığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1885, Wilson Bentley, a young farmer in Vermont, became the first person to photograph a single snowflake. ---- His photographs showed the extraordinary variety of snow crystals and helped to popularise the idea that no two snowflakes are alike.",
      [
        "Over the following decades, he took more than five thousand pictures by attaching a camera to a microscope.",
        "Vermont has cold winters.",
        "Snow is frozen water.",
        "Many of his neighbours considered his hobby a waste of time, and he never married, living on the family farm for his entire life.",
        "Farmers grow crops.",
      ],
      "Boşluktan sonra 'His photographs' ifadesi gelir; boşluğa mikroskoba kamera bağlayarak beş binden fazla fotoğraf çektiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "The pleasant smell that often follows rain after a dry spell is known as petrichor.",
        "It is produced partly by oils released by plants and by a chemical made by soil bacteria.",
        "Many perfumes are made in France.",
        "Raindrops hitting the ground release tiny bubbles that carry the smell into the air.",
        "Humans are extremely sensitive to the chemical and can detect it in tiny amounts.",
      ],
      odd: 2,
      why: "Parça yağmur sonrası kokunun nedenlerini anlatır. Pek çok parfümün Fransa'da üretildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Strong winds sometimes carry dust from the Sahara thousands of kilometres north.",
        "When the dust falls with rain or snow, it can turn cars and mountains orange.",
        "Camels are well adapted to desert life.",
        "In 2022, Saharan dust turned the sky over parts of Spain an orange colour.",
        "The dust also carries nutrients that fertilise distant oceans and forests.",
      ],
      odd: 2,
      why: "Parça Sahra tozunun uzak bölgelere taşınmasını anlatır. Develerin çöl yaşamına iyi uyum sağladığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In July 1913, a temperature of 56.7 degrees Celsius was recorded in Death Valley, California.",
        "It is officially recognised as the highest air temperature ever measured on Earth.",
        "California produces much of the country's fruit.",
        "Some scientists, however, have questioned the accuracy of the old measurement.",
        "The valley lies below sea level and is surrounded by mountains that trap hot air.",
      ],
      odd: 2,
      why: "Parça Ölüm Vadisi'nde ölçülen rekor sıcaklığı anlatır. Kaliforniya'nın ülkenin meyvesinin çoğunu ürettiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A popular saying claims that cows lie down when rain is coming.",
        "Researchers have found little evidence to support this belief.",
        "Cows are more likely to lie down when they are tired or when the ground is dry.",
        "Milk contains calcium.",
        "Many other traditional weather sayings have also proved unreliable.",
      ],
      odd: 3,
      why: "Parça ineklerin yağmuru haber verdiği inancını anlatır. Sütün kalsiyum içerdiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Sun dogs are bright spots of light that sometimes appear on either side of the sun.",
        "They are caused by sunlight passing through flat ice crystals in high, thin clouds.",
        "Dogs were domesticated from wolves.",
        "They are most visible when the sun is low in the sky.",
        "Similar effects can appear around the moon.",
      ],
      odd: 2,
      why: "Parça güneş köpekleri denen ışık olayını anlatır. Köpeklerin kurtlardan evcilleştirildiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hailstones form when strong upward winds in thunderstorms carry raindrops high into freezing air.",
        "Cricket is popular in England and India.",
        "The drops freeze and gather new layers of ice as they rise and fall repeatedly.",
        "Once the ice grows too heavy to be held up, it drops out of the cloud.",
        "The largest hailstone on record, found in South Dakota in 2010, was twenty centimetres across.",
      ],
      odd: 1,
      why: "Parça dolu tanelerinin oluşumunu anlatır. Kriketin İngiltere ve Hindistan'da popüler olduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
