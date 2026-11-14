import type { YokdilDeneme } from "./types";

export const SAGLIK_57: YokdilDeneme = {
  no: 57,
  field: "saglik",
  vocab: [
    [
      "The town's supply of antitoxin had ----, and new supplies had to be brought from far away.",
      ["expired", "multiplied", "improved", "arrived", "doubled"],
      "Kasabanın antitoksin stokunun 'süresinin dolduğu' (expired) ve uzaktan yeni stok getirilmesi gerektiği anlatılır.",
    ],
    [
      "Thousands of residents ---- the city to escape the epidemic.",
      ["abandoned", "decorated", "governed", "visited", "rebuilt"],
      "Binlerce sakinin salgından kaçmak için şehri 'terk ettiği' (abandoned) anlatılır.",
    ],
    [
      "The cattle disease was so ---- that it killed most of the animals it infected.",
      ["deadly", "mild", "rare", "slow", "harmless"],
      "Sığır hastalığının bulaştığı hayvanların çoğunu öldürecek kadar 'ölümcül' (deadly) olduğu anlatılır.",
    ],
    [
      "Rumours spread faster than the disease and caused widespread ----.",
      ["panic", "comfort", "boredom", "wealth", "silence"],
      "Söylentilerin hastalıktan daha hızlı yayıldığı ve yaygın 'paniğe' (panic) yol açtığı anlatılır.",
    ],
    [
      "The scientist's work received little public ----, although it saved millions of lives.",
      ["recognition", "criticism", "funding", "opposition", "competition"],
      "Bilim insanının çalışmasının milyonlarca hayat kurtarmasına rağmen kamuoyunda çok az 'tanınırlık' (recognition) kazandığı anlatılır.",
    ],
    [
      "Health officials struggled to ---- the outbreak before it reached other countries.",
      ["bring under control", "look forward to", "put up with", "come up with", "run out of"],
      "Sağlık yetkililerinin salgını başka ülkelere ulaşmadan 'kontrol altına almak' (bring under control) için uğraştığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the serum reached the town, the teams of dogs ---- more than a thousand kilometres.",
      ["had covered", "cover", "have covered", "will cover", "are covering"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had covered'.",
    ],
    [
      "If the frost had come earlier, fewer people ---- in the epidemic.",
      ["might have died", "will die", "die", "had died", "are dying"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might have died'.",
    ],
    [
      "The cattle disease ---- eradicated in 2011.",
      ["was declared", "declared", "has declared", "declares", "is declaring"],
      "Hastalık ilan edilmiştir; edilgen geçmiş zaman: 'was declared'.",
    ],
    [
      "---- the number of deaths was small, the outbreak caused enormous economic damage.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Ölüm sayısının az olması ile ekonomik zararın büyük olması zıttır: 'Although'.",
    ],
    [
      "The scientist, ---- daughter's illness provided the virus for one vaccine, developed dozens of vaccines.",
      ["whose", "who", "which", "whom", "where"],
      "Bilim insanının kızı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only when the cold weather arrived ---- the epidemic finally end.",
      ["did", "had", "was", "has", "does"],
      "'Only when' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "Most of the government left the city, ---- made it difficult to organise a response.",
      ["which", "what", "who", "that", "where"],
      "Virgülden sonra önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer the outbreak lasted, ---- people fled.",
      ["the more", "the most", "more", "most", "so many"],
      "'The longer ..., the more ...' paralel yapısı: 'the more'.",
    ],
    [
      "Experts recommended that vaccines ---- shared more fairly with affected countries.",
      ["be", "are", "were", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
    [
      "The pandemic is estimated ---- between one and four million lives worldwide.",
      ["to have claimed", "claiming", "to claim", "claimed", "having claimed"],
      "Geçmişte gerçekleşmiş bir olay için mastarın geçmiş biçimi: 'to have claimed'.",
    ],
    [
      "The mushers travelled day and night ---- the medicine would arrive in time.",
      ["so that", "even though", "unless", "as if", "whereas"],
      "Amaç bildiren bağlaç: 'so that'.",
    ],
    [
      "The doctor recommended ---- patients' blood to treat the fever.",
      ["draining", "to drain", "drain", "drained", "to draining"],
      "'recommend doing sth' kalıbı: 'draining'.",
    ],
    [
      "Had the vaccine not been developed, the disease ---- millions more cattle.",
      ["might have killed", "kills", "will kill", "had killed", "is killing"],
      "Devrik üçüncü tip koşul cümlesi: 'might have killed'.",
    ],
    [
      "Neither the doctors nor the government ---- what caused the fever.",
      ["understood", "understanding", "to understand", "have understand", "understands"],
      "'Neither ... nor' yapısında geçmiş zaman: 'understood'.",
    ],
  ],
  cloze: [
    {
      text:
        "In January 1925, a doctor in Nome, a remote town in Alaska, realised that an outbreak of diphtheria was beginning among the town's children. Diphtheria, a bacterial infection of the throat, could be treated with an antitoxin, {1} the town's supply had expired, and the closest available supply lay in Anchorage, over a thousand kilometres to the south-east. Winter storms made flying impossible, and the sea was frozen. Officials therefore decided to send the antitoxin by train to the town of Nenana, {2} it would be carried the rest of the way by teams of sled dogs. About twenty drivers, or mushers, and their dogs took part in the relay, passing the package from team to team, {3} temperatures fell far below minus forty degrees. The journey, which normally took about three weeks, was finished by the relay in under six days. The last team, led by a dog named Balto, arrived in Nome on 2 February, {4} the outbreak was brought under control. Balto became famous, and a statue of him was placed in a park in New York. Many mushers, however, argued that another dog, Togo, deserved more credit, {5} he had led his team over by far the longest and riskiest stretch of the trail. Today, a famous annual sled-dog race in Alaska partly commemorates the relay.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "or", "for"],
          "Antitoksinle tedavi edilebilmesi ile kasabadaki stokun süresinin dolması zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["where", "which", "when", "whose", "who"],
          "Nenana kasabasını (yer) niteleyen ilgi zamiri: 'where'.",
        ],
        [
          "(23) ----",
          ["while", "unless", "so that", "whereas", "until"],
          "Paketin aktarılması sırasında sıcaklıkların düşmesi; eşzamanlılık bildiren 'while'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Takımın varması ve salgının kontrol altına alınması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Togo'nun daha çok övgüyü hak etmesinin nedeni en uzun ve tehlikeli bölümü kat etmesidir: 'because'.",
        ],
      ],
    },
    {
      text:
        "In the summer of 1793, Philadelphia, then the capital of the United States, was struck by an epidemic of yellow fever. Victims suffered high fever, yellowing of the skin and internal bleeding, {1} many died within days. At the time, no one knew that the disease was spread by mosquitoes, which had multiplied in the city's stagnant water during an unusually hot and dry summer. Doctors argued bitterly about its causes and treatment. The prominent physician Benjamin Rush believed in draining large amounts of blood from patients, {2} other doctors favoured rest and fluids. Around twenty thousand residents, including most members of the federal government, fled the city, {3} trade and public services largely collapsed. Leaders of the Free African Society, an organisation of free Black residents, were asked to help nurse the sick and bury the dead, partly because of a mistaken belief that Black people were immune to the disease. Many volunteers died, {4} their contribution was later questioned in a pamphlet that accused some of them of profiting from the crisis, an accusation they strongly rejected. The epidemic ended in November, when cold weather killed the mosquitoes, {5} it had killed about five thousand people, roughly a tenth of the city's population.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "until"],
          "Belirtiler ve pek çoğunun günler içinde ölmesi birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["while", "because", "unless", "so that", "until"],
          "Rush'ın yöntemi ile diğer doktorların tercihi karşılaştırılır: 'while'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "although"],
          "Sakinlerin kaçması ve kamu hizmetlerinin çökmesi birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "so", "or", "for"],
          "Gönüllülerin ölmesi ve katkılarının sorgulanması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["by which time", "unless", "so that", "in case", "whereas"],
          "Salgın sona erdiğinde o zamana kadar beş bin kişiyi öldürmüştü: 'by which time'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Balto became the most famous dog of the relay, ----.",
      [
        "many mushers believed that another dog deserved more credit",
        "Alaska is very cold",
        "dogs pull sleds",
        "diphtheria affects the throat",
        "a statue of the dog was placed in a park in New York in the year after the relay had been completed",
      ],
      "'Although' zıtlık ister: Balto koşunun en ünlü köpeği olsa da pek çok sürücü başka bir köpeğin daha fazla övgüyü hak ettiğine inanıyordu.",
    ],
    [
      "If doctors in 1793 had known that mosquitoes spread the disease, ----.",
      [
        "they might have taken more effective measures",
        "Philadelphia was the capital",
        "summers are hot",
        "fever is dangerous",
        "the federal government would have moved to a different city several years earlier",
      ],
      "Üçüncü tip koşul: 1793'teki doktorlar hastalığı sivrisineklerin yaydığını bilseydi daha etkili önlemler alabilirlerdi.",
    ],
    [
      "----, the cattle plague caused famine in many parts of Africa.",
      [
        "By killing most of the animals on which people depended",
        "Although cattle are large",
        "Unless farmers moved",
        "Since grass is green",
        "While a vaccine was being developed by a scientist working in East Africa in the 1960s",
      ],
      "İnsanların bağımlı olduğu hayvanların çoğunu öldürerek sığır vebası Afrika'nın pek çok yerinde kıtlığa yol açtı.",
    ],
    [
      "The city's authorities launched a major clean-up campaign ----.",
      [
        "to prevent such an outbreak from happening again",
        "although the city was large",
        "unless the rains came",
        "because India is hot",
        "while hundreds of thousands of residents were fleeing to other parts of the country",
      ],
      "Şehir yönetimi böyle bir salgının yeniden olmasını önlemek için büyük bir temizlik kampanyası başlattı.",
    ],
    [
      "Since the 1968 pandemic caused relatively little disruption, ----.",
      [
        "it is much less remembered than other pandemics",
        "influenza is common",
        "Hong Kong is a city",
        "vaccines were developed",
        "a large music festival took place in the United States while the virus was spreading",
      ],
      "'Since' neden bildirir: 1968 pandemisi görece az aksamaya yol açtığı için diğer pandemilerden çok daha az hatırlanır.",
    ],
    [
      "Not only did the scientist develop more than forty vaccines, ----.",
      [
        "but he also received little public recognition for his work",
        "and vaccines are injected",
        "since his daughter was ill",
        "so measles is dangerous",
        "unless the company had already produced vaccines against several other diseases",
      ],
      "'Not only ... but also' yapısı tamamlanır: bilim insanı kırktan fazla aşı geliştirmekle kalmadı, çalışması için kamuoyunda çok az tanınırlık da kazandı.",
    ],
    [
      "Once the disease spread to many countries outside Africa, ----.",
      [
        "it suddenly attracted international attention",
        "Africa is large",
        "viruses are small",
        "vaccines exist",
        "the disease had been present in parts of central and western Africa for many decades",
      ],
      "Hastalık Afrika dışındaki pek çok ülkeye yayılınca birden uluslararası ilgi çekti.",
    ],
    [
      "Unless every herd in an infected area is vaccinated, ----.",
      [
        "the disease may continue to circulate",
        "cattle need grass",
        "farmers are busy",
        "vaccines are cheap",
        "the scientist who developed the vaccine will not receive any recognition for his work",
      ],
      "'Unless' olumsuz koşul: enfekte bölgedeki her sürü aşılanmazsa hastalık dolaşmaya devam edebilir.",
    ],
    [
      "The panic was so great ----.",
      [
        "that hundreds of thousands of people left the city within days",
        "although the city was clean",
        "because plague is old",
        "unless flights were cancelled",
        "while the number of confirmed deaths from the disease remained relatively small",
      ],
      "Panik o kadar büyüktü ki yüz binlerce kişi günler içinde şehri terk etti.",
    ],
    [
      "Even though the relay was carried out in extreme cold, ----.",
      [
        "the medicine reached the town in less than a week",
        "dogs have thick fur",
        "Alaska is large",
        "trains are fast",
        "the drivers and their dogs had been chosen because they knew the trails of the region well",
      ],
      "'Even though' zıtlık ister: koşu aşırı soğukta yapılsa da ilaç kasabaya bir haftadan kısa sürede ulaştı.",
    ],
    [
      "As vaccines were not available in the African countries most affected, ----.",
      [
        "the response raised concerns about global health inequality",
        "Africa has many countries",
        "vaccines are stored cold",
        "viruses change",
        "the World Health Organization had declared an international emergency for the disease in 2022",
      ],
      "En çok etkilenen Afrika ülkelerinde aşı bulunmadığı için müdahale küresel sağlık eşitsizliği konusunda kaygılara yol açtı.",
    ],
  ],
  enTr: [
    [
      "Winter storms made flying impossible.",
      [
        "Kış fırtınaları uçmayı imkânsız kıldı.",
        "Kış fırtınaları uçuşu kolaylaştırdı.",
        "Uçmayı imkânsız kılan kış fırtınaları, birkaç saat içinde dinerek uçakların kalkmasına izin verdi.",
        "Uçaklar kış fırtınalarına neden oldu.",
        "Kışın hiç fırtına olmadı.",
      ],
      "'Winter storms' 'kış fırtınaları', 'made flying impossible' 'uçmayı imkânsız kıldı' karşılığıdır.",
    ],
    [
      "Many volunteers died while caring for the sick.",
      [
        "Pek çok gönüllü hastalara bakarken öldü.",
        "Gönüllülerin hiçbiri hastalanmadı.",
        "Hastalara bakan gönüllüler, salgından korunmak için şehri terk etmeye karar verdi.",
        "Hastalar gönüllülere baktı.",
        "Gönüllüler hastalara bakmayı reddetti.",
      ],
      "'Many volunteers died' 'pek çok gönüllü öldü', 'while caring for the sick' 'hastalara bakarken' karşılığıdır.",
    ],
    [
      "It was only the second disease ever to be eradicated.",
      [
        "Bu, şimdiye kadar yok edilen yalnızca ikinci hastalıktı.",
        "Bu, ortadan kaldırılamayan ilk hastalıktı.",
        "Yok edilen ikinci hastalık, birkaç yıl sonra yeniden ortaya çıkarak pek çok ülkeye yayıldı.",
        "İki hastalık aynı anda yok edildi.",
        "Hiçbir hastalık yok edilemedi.",
      ],
      "'It was only the second disease' 'yalnızca ikinci hastalıktı', 'ever to be eradicated' 'şimdiye kadar yok edilen' karşılığıdır.",
    ],
    [
      "Several countries halted flights to and from India.",
      [
        "Birkaç ülke Hindistan'a giden ve oradan gelen uçuşları durdurdu.",
        "Birkaç ülke Hindistan'a daha fazla uçuş ekledi.",
        "Hindistan'a uçuşları durduran ülkeler, salgının boyutunu abartan raporlar nedeniyle eleştirilmedi.",
        "Hindistan bütün uçuşlarını iptal etti.",
        "Uçuşlar salgından etkilenmedi.",
      ],
      "'Several countries halted flights' 'birkaç ülke uçuşları durdurdu', 'to and from India' 'Hindistan'a giden ve oradan gelen' karşılığıdır.",
    ],
    [
      "The vaccines arrived too late to make much difference.",
      [
        "Aşılar, büyük bir fark yaratamayacak kadar geç geldi.",
        "Aşılar, salgını önleyecek kadar erken geldi.",
        "Çok geç gelen aşılar, salgının ikinci dalgasını tamamen önlemeyi başardı.",
        "Aşılar hiç üretilmedi.",
        "Aşılar farkı ortadan kaldırdı.",
      ],
      "'The vaccines arrived too late' 'aşılar çok geç geldi', 'to make much difference' 'büyük bir fark yaratamayacak kadar' karşılığıdır.",
    ],
    [
      "The disease was renamed to avoid stigma.",
      [
        "Hastalık, damgalanmayı önlemek için yeniden adlandırıldı.",
        "Hastalık, ünlü olmak için yeniden adlandırıldı.",
        "Damgalanmaya yol açan hastalığın adı, uzmanların itirazları nedeniyle hiçbir zaman değiştirilmedi.",
        "Damgalanma hastalığa neden oldu.",
        "Hastalığın adı yoktu.",
      ],
      "'The disease was renamed' 'hastalık yeniden adlandırıldı', 'to avoid stigma' 'damgalanmayı önlemek için' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Yolculuk normalde yaklaşık üç hafta sürüyordu.",
      [
        "The journey normally took about three weeks.",
        "The journey normally took about three days.",
        "The journey was expected to take three weeks, but it was cancelled because of the weather.",
        "Three journeys were made each week.",
        "The journey had never been made before.",
      ],
      "'Yolculuk normalde sürüyordu' 'the journey normally took', 'yaklaşık üç hafta' 'about three weeks' karşılığıdır.",
    ],
    [
      "Doktorlar hastalığın nedenleri konusunda şiddetle tartıştı.",
      [
        "Doctors argued bitterly about the causes of the disease.",
        "Doctors agreed completely about the causes of the disease.",
        "Doctors wanted to discuss the causes of the disease, but the government forbade them to do so.",
        "The disease caused doctors to argue with patients.",
        "Doctors did not discuss the disease.",
      ],
      "'Doktorlar şiddetle tartıştı' 'doctors argued bitterly', 'hastalığın nedenleri konusunda' 'about the causes of the disease' karşılığıdır.",
    ],
    [
      "Aşı, sığırlar için ucuz ve etkili bir koruma sağladı.",
      [
        "The vaccine provided cheap and effective protection for cattle.",
        "The vaccine was expensive and gave cattle little protection.",
        "The vaccine was expected to protect cattle, but farmers refused to use it because of its high price.",
        "Cattle produced the vaccine.",
        "The vaccine was given to farmers.",
      ],
      "'Aşı sağladı' 'the vaccine provided', 'sığırlar için ucuz ve etkili bir koruma' 'cheap and effective protection for cattle' karşılığıdır.",
    ],
    [
      "Şehir daha sonra ülkenin en temiz şehirlerinden biri oldu.",
      [
        "The city later became one of the cleanest in the country.",
        "The city later became the dirtiest in the country.",
        "The city tried to become one of the cleanest in the country, but its efforts failed.",
        "The country was cleaned by the city.",
        "The city was abandoned.",
      ],
      "'Şehir daha sonra oldu' 'the city later became', 'ülkenin en temiz şehirlerinden biri' 'one of the cleanest in the country' karşılığıdır.",
    ],
    [
      "Bilim insanı, kabakulak aşısı için virüsü kızının boğazından aldı.",
      [
        "The scientist took the virus for the mumps vaccine from his daughter's throat.",
        "The scientist's daughter developed the mumps vaccine.",
        "The scientist's daughter caught mumps, but he was unable to obtain the virus from her.",
        "The vaccine was tested on the scientist's throat.",
        "The scientist had no children.",
      ],
      "'Bilim insanı virüsü aldı' 'the scientist took the virus', 'kabakulak aşısı için kızının boğazından' 'for the mumps vaccine from his daughter's throat' karşılığıdır.",
    ],
    [
      "Zengin ülkeler aşıları kendi nüfusları için satın aldı.",
      [
        "Wealthy countries bought the vaccines for their own populations.",
        "Wealthy countries gave all their vaccines to poorer countries.",
        "Wealthy countries planned to buy the vaccines, but they decided that their populations were not at risk.",
        "The vaccines bought wealthy countries.",
        "No vaccines were available.",
      ],
      "'Zengin ülkeler satın aldı' 'wealthy countries bought', 'aşıları kendi nüfusları için' 'the vaccines for their own populations' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Rinderpest, or cattle plague, was a viral disease that affected cattle, buffalo and many wild animals, and most infected animals died. It had devastated herds in Europe and Asia for centuries. In the 1890s, it reached Africa, probably with cattle imported to feed soldiers, and spread rapidly across the continent, killing up to ninety per cent of the cattle in some regions as well as huge numbers of wild animals such as buffalo and giraffe. Because many African communities depended on cattle for food, transport and wealth, the result was widespread famine, and it has been estimated that a third of the population of Ethiopia died in the years that followed. Effective vaccines were developed during the twentieth century, and in the 1960s a British veterinary scientist, Walter Plowright, working in Kenya, developed a cheap, safe and long-lasting vaccine that could be produced in large quantities. International campaigns vaccinated vast numbers of animals. A version of the vaccine that did not need to be kept cold made it possible to reach herds in remote areas, where local people were trained as vaccinators. The last confirmed case occurred in Kenya in 2001, and in 2011 the disease was officially declared eradicated, the only animal disease, and only the second disease of any kind after smallpox, to have been wiped out.",
      questions: [
        [
          "According to the passage, rinderpest caused famine in Africa because ----.",
          [
            "it destroyed animals that people depended on",
            "it infected people directly",
            "it damaged crops",
            "soldiers took cattle away from local communities to feed their armies",
            "it caused drought",
          ],
          "Metne göre yiyecek, ulaşım ve servet için bağımlı olunan sığırları yok etti.",
        ],
        [
          "The vaccine that did not need to be kept cold was important because ----.",
          [
            "it made it possible to vaccinate herds far from cities",
            "it was more effective",
            "it was cheaper to transport by air",
            "it could also be used to protect wild animals such as giraffes",
            "it cured infected animals",
          ],
          "Soğukta tutulması gerekmediği için uzak bölgelerdeki sürülere ulaşmak mümkün oldu.",
        ],
        [
          "It can be understood from the passage that the eradication of rinderpest ----.",
          [
            "is a very rare achievement",
            "took only a few years",
            "has been followed by many others",
            "was achieved without the help of local people",
            "was unimportant",
          ],
          "Çiçek hastalığından sonra yok edilen yalnızca ikinci hastalıktır.",
        ],
      ],
    },
    {
      text:
        "In September 1994, reports emerged of an outbreak of plague in Surat, an industrial city in western India. The city had recently suffered severe flooding, and rubbish and dead animals had accumulated in its streets, providing conditions in which rats and their fleas could multiply. Some patients were said to have pneumonic plague, a form that affects the lungs and can spread directly from person to person. Within days, rumours spread faster than the disease. An estimated several hundred thousand residents, including many doctors, fled the city, some of them potentially carrying the infection to other regions. Pharmacies ran out of antibiotics as people bought them in panic. Abroad, several countries suspended flights to and from India, and exports were blocked, causing economic losses estimated at hundreds of millions of dollars. In the end, the number of deaths officially attributed to plague was around fifty, and some scientists later questioned whether all of the cases had really been plague. The episode showed how fear and poor information can magnify the effects of an epidemic. It also had a lasting positive consequence. The city's new municipal commissioner launched a vigorous campaign to improve sanitation, clear the streets and enforce regulations, and within a few years Surat had gone from one of the dirtiest cities in India to one of the cleanest.",
      questions: [
        [
          "According to the passage, conditions in Surat favoured the outbreak because ----.",
          [
            "flooding had left waste that attracted rats",
            "the city had no hospitals",
            "doctors had left",
            "large numbers of people had arrived from other parts of India",
            "the weather was cold",
          ],
          "Metne göre sel sonrası sokaklarda biriken çöp ve hayvan ölüleri farelerin çoğalmasına uygundu.",
        ],
        [
          "The writer suggests that the panic ----.",
          [
            "made the consequences of the outbreak worse",
            "was entirely justified",
            "helped to stop the disease",
            "was caused mainly by the decision of other countries to stop flights",
            "was limited to a few people",
          ],
          "Korku ve yetersiz bilgi salgının etkilerini büyüttü; kaçanlar enfeksiyonu taşıyabilirdi.",
        ],
        [
          "It can be understood from the passage that, after the outbreak, Surat ----.",
          [
            "improved its public health conditions dramatically",
            "remained dirty",
            "was abandoned",
            "banned all exports in order to protect its economy",
            "suffered more outbreaks",
          ],
          "Birkaç yıl içinde Hindistan'ın en kirli şehirlerinden en temizlerinden birine dönüştü.",
        ],
      ],
    },
    {
      text:
        "In July 1968, a new strain of influenza was identified in Hong Kong. It was a combination of genes from an earlier human virus and a virus found in birds, and because few people had immunity to it, it spread rapidly around the world. By the time the pandemic subsided in 1970, it is estimated to have killed between one and four million people, many of them elderly. In some countries, the second wave in the winter of 1969 was more severe than the first. Yet the pandemic is now largely forgotten. Schools and businesses generally remained open, and large public events took place as usual; a famous music festival attended by hundreds of thousands of people was held in the United States in August 1969. Several factors may explain the limited disruption. The death rate was lower than in the catastrophic influenza pandemic of 1918, antibiotics were available to treat the bacterial infections that often follow influenza, and medical care had improved. In addition, public expectations were different, and deaths among older people received less attention. A vaccine was developed quickly by the American scientist Maurice Hilleman and others, but it became widely available only after the first wave had peaked. Descendants of the 1968 virus continue to circulate as one of the seasonal influenza strains today.",
      questions: [
        [
          "According to the passage, the 1968 virus spread rapidly because ----.",
          [
            "few people were immune to it",
            "it was carried by birds",
            "vaccines were unavailable everywhere",
            "the music festival in the United States brought together huge crowds from many countries",
            "it began in winter",
          ],
          "Metne göre çok az insanın ona karşı bağışıklığı vardı.",
        ],
        [
          "The music festival is mentioned to illustrate ----.",
          [
            "how little ordinary life was disrupted",
            "how the virus spread",
            "the age of the victims",
            "the speed with which the vaccine was developed",
            "the popularity of music",
          ],
          "Gündelik hayatın ne kadar az aksadığını gösterir.",
        ],
        [
          "It can be understood from the passage that the vaccine ----.",
          [
            "came too late to prevent the first wave",
            "was never developed",
            "stopped the pandemic immediately",
            "was developed only in Hong Kong",
            "caused the second wave",
          ],
          "İlk dalga zirveye ulaştıktan sonra yaygın biçimde kullanılabildi.",
        ],
      ],
    },
    {
      text:
        "Maurice Hilleman, who grew up on a farm in Montana, became one of the most productive vaccine scientists in history, yet his name is little known outside medicine. Working mainly for a pharmaceutical company, he developed more than forty vaccines, including eight of the vaccines routinely recommended for children in the United States, such as those against measles, mumps, hepatitis B and a bacterium that causes meningitis. One of his best-known achievements began in 1963, when his five-year-old daughter, Jeryl Lynn, woke him in the night with a sore throat and swollen glands caused by mumps. He took a sample from her throat, returned to his laboratory and used it to grow and weaken the virus. The resulting strain, named after her, became the basis of the mumps vaccine still used in many parts of the world. Hilleman also played an important role in combining vaccines against measles, mumps and rubella into a single injection in 1971. Colleagues described him as demanding and blunt, but extraordinarily determined. It has been estimated that his vaccines save millions of lives every year. Unlike some other scientists, he never sought publicity and did not name vaccines after himself, which may partly explain why he received relatively little public recognition before his death in 2005.",
      questions: [
        [
          "According to the passage, Hilleman's mumps vaccine was developed from ----.",
          [
            "a sample taken from his own daughter",
            "a farm animal",
            "a patient in hospital",
            "a virus provided by another company that was working on measles",
            "his own throat",
          ],
          "Metne göre kızı Jeryl Lynn'in boğazından alınan örnekten geliştirildi.",
        ],
        [
          "The writer mentions the combined injection of 1971 to show ----.",
          [
            "another important contribution Hilleman made",
            "that he disliked single vaccines",
            "his early career",
            "that his colleagues found him difficult to work with",
            "the failure of his work",
          ],
          "Hilleman'ın yaptığı başka bir önemli katkıyı gösterir.",
        ],
        [
          "The writer suggests that Hilleman was not widely known partly because ----.",
          [
            "he did not seek attention for his work",
            "his vaccines failed",
            "he worked in Montana",
            "he named all of his vaccines after members of his family",
            "he died young",
          ],
          "Hiç tanıtım peşinde koşmadı ve aşılara kendi adını vermedi.",
        ],
      ],
    },
    {
      text:
        "For decades, mpox, a viral disease related to smallpox that causes fever and a painful rash, was found mainly in parts of central and western Africa, where it was usually caught from animals and caused occasional outbreaks. It received little international attention. In May 2022, however, cases began to appear in many countries in Europe, the Americas and elsewhere, spreading mainly through close physical contact between people. Within months, there were tens of thousands of cases in more than a hundred countries, and in July the World Health Organization declared a public health emergency of international concern. Wealthy countries responded quickly, using an existing smallpox vaccine that also protects against mpox, and cases fell. In the same year, the disease's earlier name was changed, partly because of concern that it was misleading and contributed to stigma. Critics pointed out, however, that the response highlighted inequality: for years, African countries where the disease was common had received little help, and when vaccines became available, few were sent to them. In 2024, the organisation declared a new emergency after a more severe variant spread rapidly in the Democratic Republic of the Congo and neighbouring countries, where vaccines were again in short supply.",
      questions: [
        [
          "According to the passage, before 2022 mpox ----.",
          [
            "attracted little attention outside the regions where it occurred",
            "was common in Europe",
            "had been eradicated",
            "was spread mainly through close contact between people in many countries",
            "had no vaccine",
          ],
          "Metne göre esas olarak Orta ve Batı Afrika'da görülüyordu ve uluslararası ilgi görmüyordu.",
        ],
        [
          "Wealthy countries were able to respond quickly because ----.",
          [
            "they used an existing vaccine",
            "the disease was mild",
            "they developed a new vaccine",
            "African countries sent them their supplies of vaccines",
            "cases were few",
          ],
          "Mpox'a karşı da koruyan mevcut bir çiçek aşısını kullandılar.",
        ],
        [
          "It can be understood from the passage that the 2024 emergency ----.",
          [
            "showed that unequal access to vaccines remained a problem",
            "was in Europe",
            "involved a milder variant",
            "led to the eradication of the disease in central Africa",
            "was declared in 2022",
          ],
          "Aşılar yine yetersizdi; eşitsizlik sorunu sürüyordu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In July 1518, a woman in the city of Strasbourg began dancing in the street and continued for days. ---- Historians still debate the cause of this 'dancing plague', suggesting mass hysteria brought on by famine and disease.",
      [
        "Within weeks, dozens and possibly hundreds of others had joined her, and some reportedly collapsed from exhaustion.",
        "Dancing is a form of exercise.",
        "Strasbourg is near the German border.",
        "The city authorities at first believed that more dancing would cure the victims, and they even hired musicians.",
        "Streets were narrow in medieval cities.",
      ],
      "Boşluk olayın nasıl büyüdüğünü anlatan bir cümle gerektirir; boşluğa haftalar içinde onlarca ya da yüzlerce kişinin ona katıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Between 1485 and 1551, England suffered several outbreaks of a mysterious illness known as the sweating sickness. ---- The disease disappeared as suddenly as it had appeared, and its cause remains unknown.",
      [
        "It caused fever, heavy sweating and exhaustion, and victims could die within hours of the first symptoms.",
        "England has a mild climate.",
        "Sweat cools the body.",
        "It seemed to affect wealthy young men more than other groups, and the king himself fled from London to avoid it.",
        "Many diseases cause fever.",
      ],
      "Boşluk hastalığın belirtilerini anlatan bir cümle gerektirir; boşluğa ateş, yoğun terleme ve saatler içinde ölüme yol açtığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1545, an epidemic known as cocoliztli swept through Mexico, killing a large proportion of the indigenous population. ---- In 2018, a study of DNA from victims' teeth suggested that a type of salmonella bacteria may have been responsible.",
      [
        "For centuries, its cause was uncertain, since accounts described symptoms that did not match any single known disease.",
        "Mexico has many mountains.",
        "Teeth contain DNA.",
        "Spanish colonial officials recorded the epidemic in detail, noting that it spread quickly through towns and villages.",
        "Bacteria are very small.",
      ],
      "Boşluk nedeninin belirsizliğini anlatan bir cümle gerektirir; boşluğa betimlenen belirtilerin bilinen tek bir hastalığa uymadığını söyleyen cümle gelmelidir.",
    ],
    [
      "In about 165 AD, Roman soldiers returning from a war in the east brought back an epidemic that spread across the empire. ---- The Greek physician Galen described its symptoms, which suggest that it was probably smallpox.",
      [
        "Known as the Antonine Plague, it may have killed millions of people over the following years.",
        "Soldiers wear armour.",
        "The Roman Empire was large.",
        "The emperor of the time was a philosopher who wrote a famous book of reflections while on military campaigns.",
        "Wars cause damage.",
      ],
      "Boşluk salgını tanımlayan bir cümle gerektirir; boşluğa Antonin Vebası olarak bilindiğini ve milyonlarca kişiyi öldürmüş olabileceğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 541 AD, a devastating epidemic struck Constantinople, the capital of the eastern Roman Empire, during the reign of the emperor Justinian. ---- In 2013, researchers confirmed this by finding the DNA of the plague bacterium in skeletons from the period.",
      [
        "Historians had long suspected that it was an early outbreak of bubonic plague.",
        "Constantinople was a wealthy city.",
        "Skeletons can be studied.",
        "The emperor himself caught the disease but recovered, and he continued to rule for many more years.",
        "Emperors had great power.",
      ],
      "Boşluktan sonra 'this' doğrulanır; boşluğa tarihçilerin bunun erken bir hıyarcıklı veba salgını olduğundan uzun süredir şüphelendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 1665, London suffered its last major outbreak of plague, which killed about a hundred thousand people, a quarter of the city's population. ---- The following year, the Great Fire destroyed much of the city.",
      [
        "Many wealthy residents left for the countryside, while the poor, who could not afford to leave, suffered most.",
        "London is on the River Thames.",
        "Plague is caused by bacteria.",
        "Officials published weekly lists of deaths, which allowed residents to follow the progress of the epidemic.",
        "Fires can spread quickly.",
      ],
      "Boşluk salgının toplumsal etkisini anlatan bir cümle gerektirir; boşluğa zenginlerin kırsala kaçarken yoksulların en çok acı çektiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "A cordon sanitaire is a barrier that prevents people from leaving an area affected by disease.",
        "Troops have sometimes been used to enforce such barriers.",
        "Soldiers often march in formation.",
        "The measure can slow the spread of infection.",
        "However, it may also trap healthy people with the sick.",
      ],
      odd: 2,
      why: "Parça sağlık kordonunu anlatır. Askerlerin genellikle düzen içinde yürüdüğünü söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In the fifteenth century, Venice established an island hospital where people with plague were isolated.",
        "Venice is famous for its gondolas.",
        "Such institutions became known as lazarettos.",
        "Archaeologists have found mass graves containing thousands of skeletons on the island.",
        "The model was copied by many other ports.",
      ],
      odd: 1,
      why: "Parça Venedik'teki karantina hastanesini anlatır. Venedik'in gondollarıyla ünlü olduğunu söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many people believe that the children's rhyme 'Ring a ring o' roses' refers to the plague.",
        "Folklorists, however, reject this explanation.",
        "The rhyme was first printed only in the nineteenth century.",
        "Children enjoy singing in groups.",
        "The plague interpretation appeared in the twentieth century.",
      ],
      odd: 3,
      why: "Parça bir tekerlemenin vebayla ilişkisi efsanesini anlatır. Çocukların grup hâlinde şarkı söylemekten hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The mummy of the Egyptian pharaoh Ramses V has marks on its face.",
        "Some researchers believe that they are scars caused by smallpox.",
        "This would make it one of the earliest possible pieces of evidence of the disease.",
        "Pharaohs were buried with many treasures.",
        "Others argue that the marks have different causes.",
      ],
      odd: 3,
      why: "Parça Ramses V'in mumyasındaki olası çiçek hastalığı izlerini anlatır. Firavunların pek çok hazineyle gömüldüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Since 2013, the United Nations has marked World Toilet Day each November.",
        "Billions of people still lack access to safe toilets.",
        "Poor sanitation spreads diseases such as cholera and typhoid.",
        "November is the eleventh month.",
        "The day aims to encourage action to improve sanitation.",
      ],
      odd: 3,
      why: "Parça Dünya Tuvalet Günü'nü anlatır. Kasımın yılın on birinci ayı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Epidemics have often changed the course of history.",
        "They have weakened armies and empires.",
        "They have also led to improvements in public health, such as better water supplies.",
        "Some have encouraged scientific research into the causes of disease.",
        "History is taught in schools.",
      ],
      odd: 4,
      why: "Parça salgınların tarihe etkisini anlatır. Tarihin okullarda öğretildiğini söyleyen V. cümle konu dışıdır.",
    },
  ],
};
