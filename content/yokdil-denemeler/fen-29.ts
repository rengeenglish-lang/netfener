import type { YokdilDeneme } from "./types";

export const FEN_29: YokdilDeneme = {
  no: 29,
  field: "fen",
  vocab: [
    [
      "Torricelli noticed that the height of the mercury column ---- slightly from day to day.",
      ["varied", "vanished", "froze", "doubled", "escaped"],
      "Torricelli'nin cıva sütununun yüksekliğinin günden güne hafifçe 'değiştiğini' (varied) fark ettiği anlatılır.",
    ],
    [
      "Two teams of horses were unable to ---- the hemispheres once the air had been pumped out.",
      ["separate", "decorate", "measure", "carry", "polish"],
      "Hava boşaltıldıktan sonra iki at ekibinin yarım küreleri 'ayıramadığı' (separate) anlatılır.",
    ],
    [
      "Beaufort's scale allowed sailors to ---- the strength of the wind by observing its effect on the sea and the sails.",
      ["estimate", "ignore", "increase", "prevent", "imitate"],
      "Beaufort ölçeğinin denizcilerin rüzgârın gücünü denize ve yelkenlere etkisini gözleyerek 'tahmin etmesini' (estimate) sağladığı anlatılır.",
    ],
    [
      "FitzRoy began issuing storm warnings after a ship was ---- in a gale with the loss of hundreds of lives.",
      ["wrecked", "launched", "repaired", "painted", "rescued"],
      "FitzRoy'un yüzlerce kişinin öldüğü bir fırtınada bir geminin 'batmasından' (wrecked) sonra fırtına uyarıları yayımlamaya başladığı anlatılır.",
    ],
    [
      "Lorenz found that tiny differences in the starting numbers could produce ---- different forecasts.",
      ["completely", "slightly", "rarely", "politely", "silently"],
      "Lorenz'in başlangıç sayılarındaki küçük farkların 'tamamen' (completely) farklı tahminler üretebildiğini bulduğu anlatılır.",
    ],
    [
      "Richardson ---- his calculations while serving as an ambulance driver in France.",
      ["carried out", "gave up", "put off", "turned down", "ran out of"],
      "Richardson'un hesaplamalarını Fransa'da ambulans şoförü olarak görev yaparken 'gerçekleştirdiği' (carried out) anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first barometer ---- by Evangelista Torricelli in 1643.",
      ["was invented", "invented", "has invented", "was inventing", "had invented"],
      "Barometre icat edilen bir alettir ve olay geçmiştedir: edilgen geçmiş zaman 'was invented'.",
    ],
    [
      "If the warnings had been taken more seriously, many ships ---- in the storm.",
      ["might not have been lost", "might not be lost", "will not be lost", "were not lost", "had not been lost"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might not have been + V3' ister.",
    ],
    [
      "By the time Richardson published his book in 1922, he ---- years working on a single forecast.",
      ["had spent", "has spent", "spends", "will spend", "is spending"],
      "Geçmişteki bir olaydan önce tamamlanmış eylem: Past Perfect 'had spent'.",
    ],
    [
      "FitzRoy, ---- forecasts were often wrong, was mocked by newspapers and scientists.",
      ["whose", "who", "which", "whom", "where"],
      "Tahminler FitzRoy'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until electronic computers were developed ---- numerical forecasting become practical.",
      ["did", "was", "had", "has", "it did"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur; geçmiş zamanda 'did … become' gerekir.",
    ],
    [
      "The hemispheres were held together ---- tightly that sixteen horses could not pull them apart.",
      ["so", "such", "too", "very", "as"],
      "Zarftan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- Richardson's forecast was badly wrong, his method later became the basis of modern weather prediction.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Tahminin çok yanlış çıkması ile yönteminin sonradan modern tahminin temeli olması zıttır: 'Although'.",
    ],
    [
      "Lorenz decided to save time by ---- a number that had been rounded off.",
      ["entering", "to enter", "enter", "entered", "to have entered"],
      "'by' edatından sonra fiil '-ing' alır: 'entering'.",
    ],
    [
      "Guericke is said ---- his demonstration before the emperor in 1654.",
      ["to have performed", "to perform", "performing", "to be performed", "to have been performed"],
      "Geçmişte yaptığı eylem: 'be said to have + V3' yapısı 'to have performed'.",
    ],
    [
      "Readings ---- at stations around the coast were sent to London by telegraph.",
      ["taken", "taking", "which took", "to take", "have taken"],
      "Ölçümler alınan verilerdir; edilgen anlamlı geçmiş ortaç 'taken' gerekir.",
    ],
    [
      "Neither the sailors ---- the officers had a standard way of describing the wind before Beaufort.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Lorenz printed the results with fewer decimal places ---- they would fit on the page.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some critics wrote about FitzRoy's forecasts as though he ---- to predict the future by magic.",
      ["were trying", "is trying", "will try", "has tried", "trying"],
      "'as though' ile gerçek dışı bir durum anlatıldığında fiil geçmiş zamana kayar: 'were trying'.",
    ],
    [
      "The higher you climb, ---- the air pressure becomes.",
      ["the lower", "lower", "the lowest", "more low", "the more low"],
      "'The higher …, the lower …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In the early seventeenth century, engineers in Italy had noticed that suction pumps could not raise water more than about ten metres, {1} nobody could explain why. Many scholars believed, following Aristotle, that nature 'abhors a vacuum' and that water rose in the pump to prevent empty space from forming. In 1643, Evangelista Torricelli, a former student of Galileo, carried out an experiment to test a different idea. He took a metre-long glass tube sealed at one end and filled it with mercury, {2} is much heavier than water. Then, keeping the mouth covered, he inverted it in a bowl of mercury. The mercury in the tube fell until its column was about seventy-six centimetres high, with nothing but empty space above it. Torricelli argued that the column was supported not by any 'horror' of the vacuum but by the atmosphere bearing down on the surface of the bowl, {3} we live 'at the bottom of an ocean of air'. He further observed small daily rises and falls in the mercury level, {4} later scientists linked these changes to the weather. A few years later, the French scientist Blaise Pascal arranged for a barometer to be carried up a mountain, {5} the mercury fell as it climbed, confirming that the air pressure decreases with height.",
      blanks: [
        [
          "(21) ----",
          ["but", "because", "so that", "unless", "since"],
          "Mühendislerin bunu fark etmesi ile kimsenin nedenini açıklayamaması zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra cıvayı niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(23) ----",
          ["adding that", "so as", "unless", "in case", "as if"],
          "Torricelli'nin savına ek bir ifade eklenir: 'adding that'.",
        ],
        [
          "(24) ----",
          ["and", "but", "unless", "although", "or"],
          "Sütun yüksekliğinin değişmesi ve sonraki bilim insanlarının bunu havayla ilişkilendirmesi birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["where", "which", "who", "whose", "what"],
          "Boşluk dağı (yer) niteler ve ardından tam bir cümle gelir: 'where'.",
        ],
      ],
    },
    {
      text:
        "Otto von Guericke was the mayor of the German city of Magdeburg and an enthusiastic amateur scientist. In the 1650s, he invented one of the first air pumps, {1} allowed him to remove most of the air from a container. To show the enormous force exerted by the atmosphere, he designed a famous demonstration. Two large copper hemispheres, about fifty centimetres across, were fitted together to form a sphere, {2} the air inside was pumped out. With no air inside to push outwards, the pressure of the atmosphere on the outside held the two halves together with tremendous force. In front of an audience, two teams of horses were harnessed to the hemispheres and driven in opposite directions, {3} they were unable to pull them apart. Yet as soon as a valve was opened and air was allowed back in, the hemispheres fell apart easily. Guericke also used his pump to show that a bell ringing inside a container became silent {4} the air was removed, demonstrating that sound needs air to travel, and that a candle would not burn without it. His experiments, {5} were described in a book published in 1672, helped to convince scientists that a vacuum could exist and that the air has weight.",
      blanks: [
        [
          "(26) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra hava pompasını niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(27) ----",
          ["and", "but", "unless", "although", "or"],
          "Yarım kürelerin birleştirilmesi ve içindeki havanın boşaltılması birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["but", "because", "so that", "unless", "since"],
          "Atların ters yönlere sürülmesi ile yarım küreleri ayıramaması zıttır: 'but'.",
        ],
        [
          "(29) ----",
          ["when", "unless", "although", "because", "whereas"],
          "Hava boşaltıldığı 'zaman' zilin sessizleştiği anlatılır: 'when'.",
        ],
        [
          "(30) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgüller arasında deneyleri niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Beaufort originally designed his scale for use at sea, ----.",
      [
        "it was later adapted for use on land",
        "he was an officer in the Royal Navy",
        "the scale has thirteen numbered levels",
        "sailors had always described the wind",
        "storms often damaged ships at the time",
      ],
      "'Although' zıtlık ister: ölçeği başta denizde kullanılmak üzere tasarlasa da sonradan karada kullanıma uyarlandı.",
    ],
    [
      "If Lorenz had entered the full number instead of a rounded one, ----.",
      [
        "he might not have noticed how sensitive the system was",
        "computers are used to forecast the weather today",
        "most meteorologists will study chaos theory",
        "he was working at a university in Massachusetts",
        "the computer had been very slow",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "FitzRoy set up a network of weather stations around the coast ----.",
      [
        "so that warnings could be sent to ports before storms arrived",
        "although he did not believe storms could be predicted",
        "unless the government refused to pay for them",
        "because he wanted to measure the depth of the sea",
        "even if no telegraph lines were available",
      ],
      "Kıyıda istasyon ağı kurmasının amacı fırtınalar gelmeden limanlara uyarı gönderilebilmesidir: 'so that'.",
    ],
    [
      "Since the first computer forecast was produced in 1950, ----.",
      [
        "forecasts have become far more accurate",
        "Richardson had calculated a forecast by hand",
        "most forecasts would have been made by sailors",
        "computers will become much more powerful",
        "the calculation took about twenty-four hours",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has improved'.",
    ],
    [
      "Unless air is allowed back into the sphere, ----.",
      [
        "the two halves remain firmly pressed together",
        "the horses would have pulled them apart",
        "most of the copper had been melted",
        "the bell will ring more loudly",
        "the pump was very small",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: küreye hava geri girmedikçe iki yarı sıkıca birbirine bastırılmış kalır.",
    ],
    [
      "Richardson's calculations were so slow ----.",
      [
        "that one forecast took him weeks",
        "because he had to do them all by hand",
        "although he worked on them whenever he could",
        "while the war continued around him",
        "unless he had help from others",
      ],
      "'so slow that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Scientists have found that when a system is chaotic, ----.",
      [
        "tiny changes can have huge effects",
        "it would have been easy to predict",
        "most of its parts had stopped moving",
        "the results will always be the same",
        "the computer was broken",
      ],
      "'when' ile genel bir bulgu anlatılır: bir sistem kaotik olduğunda çok küçük değişiklikler çok büyük etkilere yol açabilir.",
    ],
    [
      "So impressive was Guericke's demonstration ----.",
      [
        "that it was repeated before the emperor",
        "because the hemispheres were made of copper",
        "although the horses were very strong",
        "while the audience watched in silence",
        "unless the pump failed",
      ],
      "Devrik 'So impressive was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While FitzRoy's critics mocked his forecasts, ----.",
      [
        "many sailors valued his storm warnings",
        "the weather is difficult to predict",
        "Britain is an island",
        "newspapers were popular",
        "telegraph lines were new",
      ],
      "'While' zıtlık bildirir: eleştirmenler tahminleriyle alay ederken pek çok denizci ve balıkçı fırtına uyarılarını yararlı buldu.",
    ],
    [
      "Once the barometer had been carried to the top of the mountain, ----.",
      [
        "the mercury stood several centimetres lower",
        "the weather will change",
        "the climbers would have rested",
        "mountains are cold places",
        "most of the mercury had been lost",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: cıvanın birkaç santimetre daha alçakta olduğu görüldü.",
    ],
    [
      "Hardly had Lorenz returned from his coffee break ----.",
      [
        "when he saw that the results had changed",
        "than the computer had been switched on",
        "that the forecast will be correct",
        "before he had entered the numbers",
        "so he went home",
      ],
      "'Hardly had … when' kalıplaşmış bir yapıdır; ikinci kısım 'when' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Torricelli claimed that air pressing down kept the mercury raised.",
      [
        "Torricelli, aşağı bastıran havanın cıvayı yukarıda tuttuğunu öne sürdü.",
        "Torricelli, cıva sütununun boşluk korkusuyla yükseldiğini savundu.",
        "Torricelli, havanın hiçbir ağırlığı olmadığını kanıtladı.",
        "Torricelli, cıvanın havadan daha hafif olduğunu ileri sürdü.",
        "Torricelli, cıva sütununu kendi eliyle yukarıda tuttu.",
      ],
      "'air pressing down' 'aşağı bastıran havanın', 'kept the mercury raised' 'cıvayı yukarıda tuttuğu' demektir.",
    ],
    [
      "A bell ringing inside the container could no longer be heard once the air had been removed.",
      [
        "Kabın içinde çalan bir zil, hava boşaltıldıktan sonra artık duyulamıyordu.",
        "Kabın içindeki zil, hava boşaltılınca çok daha yüksek sesle çaldı.",
        "Zil, kabın içine hava doldurulduğunda sustu.",
        "Hava boşaltıldıktan sonra zil kendiliğinden kırıldı.",
        "Zilin sesi, kabın dışındaki havayı boşalttı.",
      ],
      "'A bell ringing inside the container' 'kabın içinde çalan bir zil', 'could no longer be heard once the air had been removed' 'hava boşaltıldıktan sonra artık duyulamıyordu' demektir.",
    ],
    [
      "Each level describes the wind's effect on sea and sails.",
      [
        "Her düzey, rüzgârın denize ve yelkenlere etkisini tanımlar.",
        "Ölçeğin her düzeyi, denizin rüzgârı nasıl durdurduğunu anlatır.",
        "Geminin yelkenleri, ölçeğin düzeylerini değiştirmek için kullanılır.",
        "Ölçek, rüzgârın yalnızca karadaki etkilerini tanımlar.",
        "Ölçeğin düzeyleri, geminin hızına göre belirlenir.",
      ],
      "'Each level describes' 'her düzey tanımlar', 'the wind's effect on sea and sails' 'rüzgârın denize ve yelkenlere etkisini' demektir.",
    ],
    [
      "FitzRoy introduced the word 'forecast' to describe his predictions of the weather.",
      [
        "FitzRoy, hava öngörüleri için 'tahmin' sözcüğünü kullanıma soktu.",
        "FitzRoy, hava durumunu öngörmenin imkânsız olduğunu söyledi.",
        "FitzRoy, 'tahmin' sözcüğünün kullanılmasını yasakladı.",
        "FitzRoy, öngörülerini yalnızca denizcilere gizlice anlattı.",
        "FitzRoy, hava durumunu tahmin etmek için yıldızları kullandı.",
      ],
      "'introduced the word forecast' ''tahmin' sözcüğünü kullanıma soktu', 'to describe his predictions of the weather' 'hava durumuna ilişkin öngörülerini tanımlamak için' demektir.",
    ],
    [
      "Richardson imagined a huge hall in which thousands of people would calculate the weather together.",
      [
        "Richardson, binlerce kişinin birlikte hava hesabı yapacağı bir salon hayal etti.",
        "Richardson, hava durumunu tek başına bir salonda hesapladı.",
        "Richardson, binlerce insanın hava durumunu tahmin etmesini yasakladı.",
        "Richardson, büyük bir salonda bir bilgisayar inşa etti.",
        "Richardson, hava durumunun hiçbir zaman hesaplanamayacağını düşündü.",
      ],
      "'imagined a huge hall' 'büyük bir salon hayal etti', 'in which thousands of people would calculate the weather together' 'binlerce insanın hava durumunu birlikte hesaplayacağı' demektir.",
    ],
    [
      "Lorenz realised that long-range weather forecasts might never be completely reliable.",
      [
        "Lorenz, uzun vadeli tahminlerin hiç tam güvenilir olmayabileceğini fark etti.",
        "Lorenz, uzun vadeli hava tahminlerinin her zaman doğru olduğunu kanıtladı.",
        "Lorenz, kısa vadeli tahminlerin imkânsız olduğunu fark etti.",
        "Lorenz, hava tahmininin bilgisayarla yapılamayacağını savundu.",
        "Lorenz, uzun vadeli tahminleri tamamen güvenilir hâle getirdi.",
      ],
      "'realised that long-range weather forecasts' 'uzun vadeli hava tahminlerinin … fark etti', 'might never be completely reliable' 'hiçbir zaman tamamen güvenilir olmayabileceğini' demektir.",
    ],
  ],
  trEn: [
    [
      "Hava basıncı yükseklikle birlikte azalır.",
      [
        "Air pressure decreases with height.",
        "Air pressure increases with height.",
        "Air pressure does not change with height.",
        "Height decreases as air pressure rises.",
        "Air has no pressure at high altitudes.",
      ],
      "'yükseklikle birlikte azalır' 'decreases with height' karşılığıdır.",
    ],
    [
      "Guericke'nin deneyi, havanın ne kadar güçlü bir basınç uyguladığını gösterdi.",
      [
        "Guericke's experiment showed how much pressure the air exerts.",
        "Guericke's experiment showed that air has no pressure.",
        "Guericke's experiment was designed to test horses.",
        "Guericke proved that a vacuum cannot exist.",
        "Guericke's experiment failed in front of the audience.",
      ],
      "'havanın ne kadar güçlü bir basınç uyguladığını gösterdi' 'showed how much pressure the air exerts' karşılığıdır.",
    ],
    [
      "Beaufort ölçeği, rüzgârın gücünü sıfırdan on ikiye kadar sınıflandırır.",
      [
        "The Beaufort scale rates wind strength from 0 to 12.",
        "The Beaufort scale measures the temperature of the sea.",
        "The Beaufort scale has only three levels.",
        "The Beaufort scale is used to measure earthquakes.",
        "The Beaufort scale classifies clouds by their shape.",
      ],
      "'rüzgârın gücünü sıfırdan on ikiye kadar sınıflandırır' 'classifies the strength of the wind from zero to twelve' karşılığıdır.",
    ],
    [
      "FitzRoy'un fırtına uyarıları pek çok denizcinin hayatını kurtardı.",
      [
        "FitzRoy's storm warnings saved many sailors.",
        "FitzRoy's storm warnings caused many shipwrecks.",
        "Sailors ignored all of FitzRoy's warnings.",
        "FitzRoy's warnings were sent only to farmers.",
        "FitzRoy refused to issue storm warnings.",
      ],
      "'pek çok denizcinin hayatını kurtardı' 'saved the lives of many sailors' karşılığıdır.",
    ],
    [
      "Richardson'un tahmini, gerçekleşen hava durumundan çok farklıydı.",
      [
        "Richardson's forecast was far from the real weather.",
        "Richardson's forecast was exactly correct.",
        "Richardson refused to publish his forecast.",
        "The weather changed to match Richardson's forecast.",
        "Richardson's forecast was made by a computer.",
      ],
      "'gerçekleşen hava durumundan çok farklıydı' 'was very different from the weather that actually occurred' karşılığıdır.",
    ],
    [
      "Kelebek etkisi, küçük değişikliklerin büyük sonuçlar doğurabileceğini anlatır.",
      [
        "The butterfly effect: small changes, big results.",
        "The butterfly effect describes how butterflies change the weather.",
        "The butterfly effect shows that small changes never matter.",
        "The butterfly effect was discovered by studying insects.",
        "The butterfly effect makes weather easy to predict.",
      ],
      "'küçük değişikliklerin büyük sonuçlar doğurabileceğini anlatır' 'describes how small changes can have large consequences' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Before the nineteenth century, sailors had no standard way of describing the strength of the wind. One captain's 'stiff breeze' might be another's 'gale', which made it difficult to compare reports or give clear instructions. In 1805, Francis Beaufort, an officer in the British Royal Navy, drew up a numbered scale running from 0, flat calm, up to 12, hurricane force. At first, each level was defined by the effect of the wind on a fully rigged warship, for example by how much sail it could carry; later versions described the appearance of the sea instead, such as the size of the waves and the amount of white foam. The great advantage of the scale was that it required no instruments: any experienced observer could use it simply by looking around. The Royal Navy officially adopted it in 1838, and it was used in the log of Charles Darwin's voyage on HMS Beagle, whose captain, Robert FitzRoy, later became a pioneer of weather forecasting. In the twentieth century, the scale was adapted for use on land, with descriptions such as 'smoke rises vertically' for calm and 'large branches in motion' for a strong breeze, and wind speeds were assigned to each level. The Beaufort scale is still widely used in weather forecasts for ships today.",
      questions: [
        [
          "According to the passage, the Beaufort scale was useful because ----.",
          [
            "it needed no instruments",
            "it measured the temperature of the wind",
            "it was designed for use on land",
            "it had only three levels",
            "it was invented by Darwin",
          ],
          "Metne göre ölçeğin büyük avantajı hiçbir alet gerektirmemesi ve deneyimli bir gözlemcinin etrafına bakarak kullanabilmesiydi.",
        ],
        [
          "The writer mentions the 'stiff breeze' and the 'gale' in order to show ----.",
          [
            "the confusion of having no standard terms",
            "that sailors exaggerated the weather",
            "how the scale was adapted for land",
            "why Beaufort joined the navy",
            "how storms damage ships",
          ],
          "Bir kaptanın 'sert esintisinin' diğerinin 'fırtınası' olabilmesi, standart bir tanım olmamasının yol açtığı karışıklığı gösterir.",
        ],
        [
          "It can be understood from the passage that the descriptions in the scale ----.",
          [
            "changed over time from sails to the sea and later to effects on land",
            "have never been changed since 1805",
            "were based only on wind speeds",
            "describe only hurricanes",
            "were written by FitzRoy",
          ],
          "Metne göre tanımlar önce savaş gemisinin yelkenine, sonra denizin görünüşüne dayandı ve yirminci yüzyılda karaya uyarlandı.",
        ],
      ],
    },
    {
      text:
        "In October 1859, a violent storm struck the coasts of Britain, and the passenger ship Royal Charter was wrecked off the coast of Wales with the loss of around four hundred and fifty lives. The disaster deeply affected Robert FitzRoy, a former naval captain who had commanded HMS Beagle on Charles Darwin's famous voyage and who was then head of a new government department collecting weather data for ships. FitzRoy believed that storms could be predicted if information about the weather was gathered quickly from many places. Using the recently invented electric telegraph, he set up a network of stations around the coast that sent him readings of air pressure, temperature and wind each morning. From these he drew weather maps, and in 1861 his office began telegraphing storm alerts to harbours, which hoisted signal cones for passing vessels. Soon afterwards, he began publishing daily predictions in The Times newspaper, which he called 'forecasts'. Many of them turned out to be wrong, and FitzRoy was mocked by newspapers and criticised by scientists, who argued that his methods had no proper scientific basis. Under heavy pressure and suffering from depression, he took his own life in 1865. The forecasts were stopped soon after his death, but the storm warnings were restored after complaints from sailors and ship owners, and FitzRoy is now regarded as a founder of modern weather forecasting.",
      questions: [
        [
          "According to the passage, FitzRoy's system depended on ----.",
          [
            "collecting data quickly by telegraph",
            "observations made from balloons",
            "computer calculations",
            "reports from passengers on ships",
            "the study of ancient weather records",
          ],
          "Metne göre yeni icat edilen elektrikli telgrafla kıyıdaki istasyonlardan her sabah ölçümler toplanıyordu.",
        ],
        [
          "The writer mentions the wreck of the Royal Charter in order to explain ----.",
          [
            "what led FitzRoy to start storm warnings",
            "how Darwin travelled around the world",
            "why the telegraph was invented",
            "how forecasts were published",
            "why FitzRoy was criticised",
          ],
          "Royal Charter'ın batması FitzRoy'u derinden etkilemiş ve fırtına uyarıları geliştirmeye yöneltmiştir.",
        ],
        [
          "It can be inferred from the passage that the restoration of the storm warnings shows ----.",
          [
            "that those who used them valued them despite the criticism",
            "that FitzRoy's critics were proved right",
            "that the warnings were never useful",
            "that the forecasts were always correct",
            "that scientists supported FitzRoy from the start",
          ],
          "Uyarıların denizci ve armatörlerin şikâyeti üzerine yeniden başlatılması, eleştirilere rağmen kullananların onlara değer verdiğini gösterir.",
        ],
      ],
    },
    {
      text:
        "During the First World War, the British mathematician Lewis Fry Richardson, a Quaker who had refused to fight, served as an ambulance driver in France. In his spare time, sitting in a rest area behind the front line, he attempted something no one had done before: to forecast the weather by calculation. Using the laws of physics that describe how air moves, heats and cools, he divided the atmosphere over central Europe into a grid of boxes and worked out, step by step, how the pressure and wind in each box would change over six hours. Working with pencil and paper, he took about six weeks to complete the calculation. The result was a disaster: he predicted an enormous rise in air pressure that did not happen. Nevertheless, in 1922 he published his method in a book, explaining what had gone wrong and how it might be improved. He also imagined a vast 'forecast factory', a hall in which sixty-four thousand people would carry out calculations together, coordinated by a conductor, in order to keep pace with the real weather. His dream became practical only with the invention of electronic computers. In 1950, a team in the United States used one of the first computers to produce a successful twenty-four-hour forecast using methods similar to Richardson's. Today, all major weather forecasts are based on this approach.",
      questions: [
        [
          "According to the passage, Richardson's first forecast ----.",
          [
            "predicted a pressure change that never came",
            "was completely accurate",
            "was calculated by a computer",
            "was never published",
            "took only a few hours to complete",
          ],
          "Metne göre gerçekleşmeyen çok büyük bir basınç artışı öngördü.",
        ],
        [
          "The writer mentions the 'forecast factory' in order to show ----.",
          [
            "how much calculation a timely forecast needs",
            "that Richardson built a large hall",
            "how ambulances were organised",
            "why Richardson refused to fight",
            "that computers were invented in a factory",
          ],
          "Altmış dört bin kişinin birlikte hesap yapacağı salon, havayı zamanında tahmin etmek için ne kadar hesaplama gerektiğini gösterir.",
        ],
        [
          "It can be understood from the passage that Richardson's method ----.",
          [
            "became the basis of modern forecasting once computers were available",
            "was abandoned after his first failure",
            "was never used by anyone else",
            "required no knowledge of physics",
            "was used only during the war",
          ],
          "Metne göre yöntem elektronik bilgisayarlarla uygulanabilir hâle geldi ve bugün tüm büyük tahminler bu yaklaşıma dayanır.",
        ],
      ],
    },
    {
      text:
        "In 1961, the American meteorologist Edward Lorenz was running a simple computer model of the weather at the Massachusetts Institute of Technology. Wanting to examine one result more closely, he decided to repeat part of a run, but to save time he started it from the middle, typing in numbers from an earlier printout. He then went to get a cup of coffee. When he returned about an hour later, he found that the new results, which should have been identical to the old ones, had drifted further and further away from them until they bore no resemblance at all. The reason, he discovered, was that the printout showed numbers to three decimal places, while the computer stored them to six. The tiny difference, less than one part in a thousand, had grown until it changed the whole outcome. Lorenz realised that if the real atmosphere behaved in the same way, long-range weather forecasting might be impossible, since it would never be possible to measure the state of the atmosphere with perfect accuracy. In 1972, he gave a talk with the title 'Does the flap of a butterfly's wings in Brazil set off a tornado in Texas?', and the idea became known as the 'butterfly effect'. His work helped to found the field of chaos theory, which studies systems whose behaviour is extremely sensitive to their starting conditions.",
      questions: [
        [
          "According to the passage, the new results were different from the old ones because ----.",
          [
            "the starting numbers had been slightly rounded",
            "the computer was broken",
            "Lorenz used a different model",
            "the weather had changed outside",
            "Lorenz spilt his coffee on the computer",
          ],
          "Metne göre çıktı sayıları üç ondalık basamakla gösteriyordu, bilgisayar ise altı basamakla saklıyordu; bu küçük fark sonucu değiştirdi.",
        ],
        [
          "The writer mentions the title of Lorenz's 1972 talk in order to show ----.",
          [
            "where the term 'butterfly effect' came from",
            "that butterflies cause tornadoes",
            "that Lorenz studied insects",
            "why the computer was slow",
            "how Lorenz travelled to Brazil",
          ],
          "Konuşmanın başlığı, 'kelebek etkisi' adının nereden geldiğini gösterir.",
        ],
        [
          "It can be inferred from the passage that Lorenz's discovery suggested that ----.",
          [
            "there are limits to how far ahead the weather can be predicted",
            "weather forecasting would soon become perfect",
            "computers are not useful for studying the weather",
            "small differences never matter",
            "the atmosphere is easy to measure",
          ],
          "Atmosferin durumunu kusursuz ölçmek mümkün olmadığından uzun vadeli tahminin imkânsız olabileceği, tahminin sınırları olduğunu gösterir.",
        ],
      ],
    },
    {
      text:
        "At the beginning of the nineteenth century, clouds had no generally accepted names. In December 1802, Luke Howard, a young English pharmacist and amateur meteorologist, spoke to a modest group of science enthusiasts in London in which he proposed a simple system for classifying them. Following the example of the Swedish naturalist Carl Linnaeus, who had used Latin names to classify plants and animals, Howard suggested three main types: 'cirrus', a Latin word for a lock of hair, for thin, wispy clouds high in the sky; 'cumulus', meaning a heap, for rounded, piled-up clouds; and 'stratus', meaning a layer, for flat sheets of cloud. He combined these names to describe intermediate forms, such as 'cirrostratus', and added a fourth term, 'nimbus', for rain clouds. Howard's key insight was that clouds, although constantly changing, could be grouped according to their form and that these forms were linked to the processes in the atmosphere that produced them. His system was quickly adopted by scientists and also attracted great interest from artists and writers: the painter John Constable made many careful studies of clouds, and the German poet Goethe wrote poems in Howard's honour. With some additions, Howard's names are still used in the international system of cloud classification today.",
      questions: [
        [
          "According to the passage, Howard's system was based on ----.",
          [
            "the shapes of clouds",
            "the colours of clouds",
            "the temperature of the air",
            "the height of mountains",
            "the speed of the wind",
          ],
          "Metne göre bulutlar biçimlerine göre gruplandırılabilirdi.",
        ],
        [
          "The writer mentions Linnaeus in order to show ----.",
          [
            "why Howard chose Latin names",
            "that Linnaeus studied clouds",
            "why Howard was a pharmacist",
            "how plants affect the weather",
            "that Howard visited Sweden",
          ],
          "Linnaeus'un bitki ve hayvanları Latince adlarla sınıflandırması, Howard'ın Latince ad kullanma fikrinin nereden geldiğini gösterir.",
        ],
        [
          "It can be understood from the passage that Howard's classification ----.",
          [
            "had an influence beyond science",
            "was rejected by most scientists",
            "was replaced soon afterwards",
            "included only one type of cloud",
            "was invented by Goethe",
          ],
          "Ressam Constable'ın bulut çalışmaları ve Goethe'nin şiirleri, sınıflandırmanın bilimin ötesinde etkisi olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "An anemometer is an instrument used to measure the speed of the wind. ---- The faster the wind blows, the faster they spin.",
      [
        "The usual type has small cups that spin on a rod.",
        "Many weather stations are located at airports.",
        "Wind can be very strong near the coast.",
        "Some instruments are very expensive.",
        "The wind often changes direction.",
      ],
      "Boşluktan sonra 'they' ile kapların dönüşünden söz edilir; boşluğa en yaygın türün dikey bir çubuk etrafında dönen üç ya da dört kap içerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Twice a day, at hundreds of sites around the world, meteorologists release balloons carrying small instrument packages. ---- The data are sent back by radio and used in computer forecasts.",
      [
        "As they rise, the instruments record conditions.",
        "Balloons are popular at children's parties.",
        "Some balloons are filled with helium.",
        "Weather forecasts are shown on television.",
        "Radio was invented more than a century ago.",
      ],
      "Boşluktan sonra 'The data' ile verilerin radyoyla gönderildiği söylenir; boşluğa balonlar yükselirken aletlerin farklı yüksekliklerde sıcaklık, nem ve basıncı ölçtüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "Cloud seeding is a technique that attempts to increase rainfall. ---- Scientists still disagree about how effective the method really is.",
      [
        "Particles of silver iodide are released into clouds.",
        "Many farmers depend on rain for their crops.",
        "Some regions receive very little rainfall.",
        "Clouds can be seen from aircraft.",
        "Silver is a valuable metal.",
      ],
      "Boşluktan sonra yöntemin etkinliğinin tartışmalı olduğu söylenir; boşluğa gümüş iyodür gibi parçacıkların damlacık oluşumuna yardım etmek için bulutlara salındığını açıklayan cümle gelmelidir.",
    ],
    [
      "When warm, moist air cools at night, it may reach a temperature at which it can no longer hold all its water vapour. ---- This temperature is known as the dew point.",
      [
        "The extra water condenses on cool surfaces.",
        "Many plants need water to grow.",
        "Nights are often cooler than days.",
        "Some people enjoy walking early in the morning.",
        "Grass grows quickly in spring.",
      ],
      "Boşluktan sonra 'This temperature' ile çiy noktası tanımlanır; boşluğa fazla suyun çimen gibi serin yüzeylerde küçük damlacıklara yoğunlaştığını söyleyen cümle gelmelidir.",
    ],
    [
      "On a cold, windy day, people often feel much colder than the thermometer suggests. ---- Weather forecasts therefore often give a 'feels like' temperature as well as the actual one.",
      [
        "The wind strips away warm air next to the skin.",
        "Many people wear coats in winter.",
        "Thermometers were invented in the seventeenth century.",
        "Some countries have very long winters.",
        "Snow falls in many parts of the world.",
      ],
      "Boşluktan sonra 'therefore' ile 'hissedilen' sıcaklığın verildiği söylenir; boşluğa rüzgârın deriye yakın ince sıcak hava katmanını uzaklaştırdığını açıklayan cümle gelmelidir.",
    ],
    [
      "Pilots use an instrument called an altimeter to measure how high their aircraft is flying. ---- For this reason, it must be adjusted according to the local air pressure before take-off and landing.",
      [
        "Most altimeters measure air pressure, which also varies with weather.",
        "Long-haul flights often cross several time zones.",
        "Pilots must pass many examinations.",
        "Airports are often very busy.",
        "Some aircraft carry hundreds of passengers.",
      ],
      "Boşluktan sonra 'For this reason' ile altimetrenin yerel basınca göre ayarlanması gerektiği söylenir; boşluğa çoğu altimetrenin hem yükseklikle hem havayla değişen basıncı ölçtüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A hygrometer tells us how damp the air is.",
        "Early versions used a human hair, which becomes longer when the air is damp.",
        "Many people have their hair cut every month.",
        "Modern hygrometers usually use electronic sensors.",
        "They are important in weather stations, museums and factories.",
      ],
      odd: 2,
      why: "Parça higrometreyi anlatır. Pek çok kişinin her ay saçını kestirdiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A hydraulic press uses a liquid to multiply force.",
        "A small force applied to a narrow piston creates pressure in the liquid.",
        "This pressure acts on a much wider piston, producing a much larger force.",
        "Many factories make car parts.",
        "Car brakes and heavy lifting machines work on the same principle.",
      ],
      odd: 3,
      why: "Parça hidrolik presin çalışma ilkesini anlatır. Pek çok fabrikanın otomobil parçası ürettiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A siphon is a tube that can carry liquid uphill and then down to a lower level.",
        "It works as long as the outlet is lower than the surface of the liquid in the container.",
        "Siphons were used in ancient Egypt and Greece.",
        "Many people keep fish in tanks at home.",
        "Today they are used to empty tanks and to move water in irrigation systems.",
      ],
      odd: 3,
      why: "Parça sifonu anlatır. Pek çok kişinin evinde akvaryumda balık beslediğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A rain gauge is one of the simplest weather instruments.",
        "It collects rain in a container with a funnel of known width.",
        "Many people enjoy walking in the rain.",
        "The amount collected is measured each day in millimetres.",
        "Records from rain gauges going back hundreds of years help scientists study climate change.",
      ],
      odd: 2,
      why: "Parça yağmur ölçeri anlatır. Pek çok kişinin yağmurda yürümekten hoşlandığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In hot, humid weather, sweat evaporates more slowly from the skin.",
        "As a result, the body finds it harder to cool down.",
        "Forecasters therefore use a heat index that combines temperature and humidity.",
        "It shows how hot conditions actually feel to the human body.",
        "Many people buy ice cream in summer.",
      ],
      odd: 4,
      why: "Parça sıcaklık indeksini anlatır. Pek çok kişinin yazın dondurma aldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Weather satellites provide images of clouds and storms from space.",
        "Some stay above the same point on the equator, while others orbit over the poles.",
        "They allow forecasters to track hurricanes as they form over the ocean.",
        "Many people use satellite television.",
        "Their data have greatly improved warnings of dangerous weather.",
      ],
      odd: 3,
      why: "Parça hava durumu uydularını anlatır. Pek çok kişinin uydu televizyonu kullandığını söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
