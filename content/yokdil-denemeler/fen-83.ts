import type { YokdilDeneme } from "./types";

export const FEN_83: YokdilDeneme = {
  no: 83,
  field: "fen",
  vocab: [
    [
      "Within a few weeks, over fifty per cent of all the antelopes on Earth had ----.",
      ["perished", "migrated", "multiplied", "recovered", "hidden"],
      "Birkaç hafta içinde antilopun dünya nüfusunun yarısından fazlasının 'öldüğü' (perished) anlatılır.",
    ],
    [
      "The cancer is ---- from one animal to another when they bite each other during fights.",
      ["transmitted", "removed", "prevented", "copied", "measured"],
      "Kanserin hayvanlar kavga sırasında birbirini ısırdığında birinden diğerine 'bulaştığı' (transmitted) anlatılır.",
    ],
    [
      "The horses had been ---- in the wild, and the species survived only in zoos.",
      ["wiped out", "set up", "looked after", "brought up", "taken over"],
      "Atların doğada 'yok edildiği' (wiped out) ve türün yalnızca hayvanat bahçelerinde hayatta kaldığı anlatılır.",
    ],
    [
      "Because the animals were slow and ----, hunters could kill them easily.",
      ["defenceless", "aggressive", "invisible", "poisonous", "rare"],
      "Hayvanlar yavaş ve 'savunmasız' (defenceless) olduğu için avcıların onları kolayca öldürebildiği anlatılır.",
    ],
    [
      "During hibernation, the squirrel's body temperature can fall below the ---- point of water.",
      ["freezing", "boiling", "melting", "starting", "turning"],
      "Kış uykusu sırasında sincabın vücut sıcaklığının suyun 'donma' (freezing) noktasının altına düşebildiği anlatılır.",
    ],
    [
      "Every litter consists of four young that are genetically ----.",
      ["identical", "unrelated", "damaged", "rare", "artificial"],
      "Her batında genetik olarak 'özdeş' (identical) dört yavru bulunduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time scientists arrived, thousands of the animals ---- in the grasslands.",
      ["had died", "die", "have died", "will die", "are dying"],
      "Geçmişteki bir andan önce tamamlanan eylem: 'had died'.",
    ],
    [
      "If the weather had not been so hot and humid, the bacteria ---- so dangerous.",
      ["might not have become", "do not become", "will not become", "had not become", "are not becoming"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'might not have become'.",
    ],
    [
      "The disease ---- for the first time in 1996.",
      ["was observed", "observed", "has observed", "observes", "is observing"],
      "Hastalık gözlemlenmiştir; edilgen geçmiş zaman: 'was observed'.",
    ],
    [
      "---- the horses are often described as truly wild, genetic studies suggest a different history.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Atların gerçekten yabani diye tanımlanması ile genetik çalışmaların farklı bir tarih göstermesi zıttır: 'Although'.",
    ],
    [
      "The naturalist, ---- description is the only detailed account of the animal, travelled with the expedition.",
      ["whose", "who", "which", "whom", "where"],
      "Doğa bilimcinin tanımı; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Not until 1936 ---- the last known animal of the species die.",
      ["did", "was", "had", "has", "were"],
      "'Not until' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The devils were moved to an island ---- the disease had never been found.",
      ["where", "which", "when", "whose", "that"],
      "'an island' yer bildirir; hastalık orada hiç görülmemişti: 'where'.",
    ],
    [
      "The colder the squirrel's body becomes, ---- energy it uses.",
      ["the less", "the least", "less", "least", "so little"],
      "'The ... -er, the less ...' paralel yapısı: 'the less'.",
    ],
    [
      "Experts recommended that healthy animals ---- kept in places free of the disease.",
      ["be", "are", "were being", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive), edilgen: 'be kept'.",
    ],
    [
      "The sea cow is known ---- extinct within thirty years of its discovery.",
      ["to have become", "becoming", "to be become", "became", "having become to"],
      "Geçmişte gerçekleşen durum için mastarın geçmiş biçimi: 'to have become'.",
    ],
    [
      "The squirrels prepare for winter by eating large amounts ---- they can survive months without food.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Çok yemelerinin amacı aylarca yiyeceksiz hayatta kalabilmeleridir: 'so that'.",
    ],
    [
      "The researchers had samples of the dead animals' tissues ---- for bacteria.",
      ["tested", "test", "testing", "to test", "tests"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'tested'.",
    ],
    [
      "Had the hunters not killed so many, the sea cow ---- survived.",
      ["might have", "has", "will have", "had", "is"],
      "Devrik üçüncü tip koşul cümlesi: 'might have'.",
    ],
    [
      "Not only the young ---- also the adults were affected by the disease.",
      ["but", "nor", "or", "either", "and so"],
      "'Not only ... but also' bağlacı: 'but'.",
    ],
  ],
  cloze: [
    {
      text:
        "The saiga is a small antelope with a large, flexible nose that lives on the dry grasslands of Central Asia. Each spring, females gather in large groups to give birth, {1} in May 2015, scientists working in Kazakhstan witnessed a disaster at several of these gatherings. Within a few weeks, more than two hundred thousand saigas died, which amounted to well over half of all the saigas alive. The animals appeared healthy one day, {2} they became weak, stopped eating and died within hours. Every animal in the affected herds died, including the newborn calves. Tests of the dead animals showed that they had been killed by blood poisoning caused by a type of bacterium that normally lives harmlessly in the tonsils of many saigas, {3} the question was why it had suddenly become deadly. Researchers found that the deaths had occurred during a period of unusually warm and humid weather, {4} they discovered that similar mass deaths in the past had also followed such conditions. They concluded that high temperatures and humidity had probably allowed the bacteria to multiply and spread into the animals' blood. The finding raised concerns that more frequent hot and humid periods, as a result of climate change, could cause further disasters. The saiga had already suffered a dramatic decline in the 1990s and 2000s, when it was hunted heavily for its horns, which are used in traditional medicine. Since 2015, however, its population has recovered remarkably, {5} by the early 2020s there were more than a million saigas in Kazakhstan, partly because of stronger protection against hunting.",
      blanks: [
        [
          "(21) ----",
          ["and", "unless", "or", "although", "so that"],
          "Dişilerin doğum için toplanması ve bilim insanlarının bir felakete tanık olması birbirine eklenir: 'and'.",
        ],
        [
          "(22) ----",
          ["but", "and", "so", "because", "unless"],
          "Hayvanların bir gün sağlıklı görünmesi ile ertesi gün ölmeleri karşıttır: 'but'.",
        ],
        [
          "(23) ----",
          ["and", "unless", "or", "although", "until"],
          "Bakterinin zararsız yaşaması ve sorunun neden ölümcül olduğu birbirine eklenir: 'and'.",
        ],
        [
          "(24) ----",
          ["and", "unless", "or", "although", "until"],
          "Ölümlerin sıcak ve nemli dönemde olması ve geçmişte de benzer koşullar bulunması birbirine eklenir: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "unless", "or", "although", "until"],
          "Nüfusun toparlanması ve bir milyonu aşması birbirini izler: 'and'.",
        ],
      ],
    },
    {
      text:
        "The Tasmanian devil is a meat-eating marsupial about the size of a small dog that now lives in the wild only on the Australian island of Tasmania. In 1996, a photographer noticed devils with large lumps on their faces, {1} over the following years scientists found that the lumps were caused by a type of cancer that was spreading rapidly through the population. Most cancers cannot be passed from one individual to another, because the immune system recognises the cells as foreign, {2} this cancer is unusual. Devils often bite each other on the face during fights over food and mates, {3} living cancer cells are transferred from one animal to another through the bites. The cancer cells somehow avoid being detected by the immune system of the new host, and the tumours grow so large that the animals cannot eat, {4} most die within months. In areas where the disease was found, devil populations fell by around eighty per cent, and scientists feared that the species might become extinct. Conservationists responded by setting up groups of healthy devils in zoos and on a small island where the disease was absent, as an insurance against extinction. Recent research, however, has given some cause for hope. Studies have found that in some areas devils appear to be evolving genetic changes that help them to resist the cancer, {5} some animals have recovered after their tumours shrank. A second, separate cancer of the same kind was discovered in 2014, which suggests that devils may be particularly vulnerable to cancers of this type.",
      blanks: [
        [
          "(26) ----",
          ["and", "unless", "or", "although", "so that"],
          "Fotoğrafçının şişlikleri fark etmesi ve bilim insanlarının nedeni bulması birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["but", "and", "so", "because", "unless"],
          "Çoğu kanserin bulaşmaması ile bu kanserin olağandışı olması karşıttır: 'but'.",
        ],
        [
          "(28) ----",
          ["and", "unless", "or", "although", "until"],
          "Hayvanların yüzlerinden ısırması ve kanser hücrelerinin aktarılması birbirini izler: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "unless", "or", "although", "until"],
          "Tümörlerin hayvanların yiyemeyeceği kadar büyümesi ve çoğunun ölmesi birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "unless", "or", "although", "until"],
          "Direnç geliştiren genetik değişiklikler ve bazı hayvanların iyileşmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the bacterium normally lives harmlessly in many saigas, ----.",
      [
        "it suddenly became deadly during a period of hot and humid weather",
        "saigas live on grasslands",
        "the females gather to give birth",
        "the antelope has a large nose",
        "the population later recovered",
      ],
      "'Although' zıtlık ister: bakteri normalde pek çok saygada zararsız yaşasa da sıcak ve nemli bir dönemde birden ölümcül oldu.",
    ],
    [
      "If the devils did not bite each other on the face, ----.",
      [
        "the cancer would probably not spread so easily",
        "devils eat meat",
        "Tasmania is an island",
        "photographers take pictures",
        "the disease would have been discovered in 1996",
      ],
      "İkinci tip koşul: şeytanlar birbirlerini yüzlerinden ısırmasaydı kanser muhtemelen bu kadar kolay yayılmazdı.",
    ],
    [
      "----, the horses had to be rebuilt from a very small number of animals kept in zoos.",
      [
        "Having disappeared completely from the wild",
        "Although horses run fast",
        "Unless the zoos agreed",
        "Since Mongolia is a large country with many grasslands",
        "While scientists were studying ancient bones",
      ],
      "Doğadan tamamen yok olan atların hayvanat bahçelerindeki çok az sayıda hayvandan yeniden çoğaltılması gerekti.",
    ],
    [
      "The sea cow disappeared very quickly ----.",
      [
        "because it was slow, defenceless and easy for hunters to kill",
        "although it was very large",
        "unless sailors were hungry",
        "so that scientists could study it",
        "while the expedition was returning home",
      ],
      "Deniz ineği çok hızlı yok oldu, çünkü yavaş, savunmasız ve avcıların öldürmesi kolaydı.",
    ],
    [
      "Since the squirrel's body temperature falls below zero, ----.",
      [
        "scientists have studied how its cells avoid being damaged by ice",
        "squirrels eat seeds",
        "the Arctic is cold",
        "winter is long",
        "the animal wakes up every few weeks",
      ],
      "'Since' neden bildirir: sincabın vücut sıcaklığı sıfırın altına düştüğünden bilim insanları hücrelerinin buzdan nasıl zarar görmediğini incelemiştir.",
    ],
    [
      "Not only does the armadillo give birth to identical quadruplets, ----.",
      [
        "but it can also carry the bacterium that causes leprosy",
        "and armadillos have shells",
        "since Texas is large",
        "so the young are small",
        "unless it had been studied by scientists",
      ],
      "'Not only ... but also' yapısı tamamlanır: armadillo yalnızca özdeş dördüzler doğurmakla kalmaz, cüzzama yol açan bakteriyi de taşıyabilir.",
    ],
    [
      "Once the last known animal had died in a zoo, ----.",
      [
        "the species was eventually declared extinct",
        "zoos keep many animals",
        "Tasmania is an island",
        "animals need food",
        "farmers had been paid to kill the animals",
      ],
      "Bilinen son hayvan bir hayvanat bahçesinde öldükten sonra tür sonunda soyu tükenmiş ilan edildi.",
    ],
    [
      "Unless the devils develop resistance to the cancer, ----.",
      [
        "their populations may continue to decline",
        "devils live in forests",
        "cancer is a disease",
        "bites can be painful",
        "conservationists would not have set up insurance groups",
      ],
      "'Unless' olumsuz koşul: şeytanlar kansere direnç geliştirmedikçe nüfusları azalmaya devam edebilir.",
    ],
    [
      "The deaths happened so quickly ----.",
      [
        "that entire herds died within a few days",
        "although the weather was warm",
        "because the animals were young",
        "unless scientists were present",
        "while the population was recovering",
      ],
      "Ölümler o kadar hızlı oldu ki bütün sürüler birkaç gün içinde öldü.",
    ],
    [
      "Even though the species has been declared extinct, ----.",
      [
        "people still report seeing the animal in remote areas",
        "animals live in forests",
        "zoos have many visitors",
        "Tasmania is cold",
        "the last animal died in 1936",
      ],
      "'Even though' zıtlık ister: tür soyu tükenmiş ilan edilse de insanlar hâlâ uzak bölgelerde hayvanı gördüklerini bildirir.",
    ],
    [
      "As all four young in a litter are genetically identical, ----.",
      [
        "armadillos have been useful in scientific research",
        "armadillos dig burrows",
        "the young are born in spring",
        "the animals eat insects",
        "the species has spread northwards",
      ],
      "Bir batındaki dört yavrunun hepsi genetik olarak özdeş olduğu için armadillolar bilimsel araştırmada yararlı olmuştur.",
    ],
  ],
  enTr: [
    [
      "Every animal in the affected herds died.",
      [
        "Etkilenen sürülerdeki her hayvan öldü.",
        "Etkilenen sürülerdeki hiçbir hayvan ölmedi.",
        "Hayvanlar sürüleri etkiledi.",
        "Yalnızca yaşlı hayvanlar öldü.",
        "Sürü yoktu.",
      ],
      "'Every animal in the affected herds' 'etkilenen sürülerdeki her hayvan', 'died' 'öldü' karşılığıdır.",
    ],
    [
      "The cancer cells avoid being detected by the immune system.",
      [
        "Kanser hücreleri bağışıklık sistemince saptanmaktan kaçınır.",
        "Bağışıklık sistemi kanser hücrelerini kolayca saptar.",
        "Kanser hücreleri bağışıklık sistemini yok eder.",
        "Bağışıklık sistemi kanser hücreleri üretir.",
        "Kanser hücreleri bağışıklık sistemince hemen saptanır ve birkaç gün içinde tamamen yok edilir.",
      ],
      "'The cancer cells avoid being detected' 'kanser hücreleri saptanmaktan kaçınır', 'by the immune system' 'bağışıklık sistemince' karşılığıdır.",
    ],
    [
      "The horses were released into a national park in Mongolia.",
      [
        "Atlar Moğolistan'daki bir milli parka salındı.",
        "Atlar Moğolistan'daki bir milli parktan yakalandı.",
        "Milli park atları Moğolistan'a gönderdi.",
        "Atlar hiç salınmadı.",
        "At yoktu.",
      ],
      "'The horses were released' 'atlar salındı', 'into a national park in Mongolia' 'Moğolistan'daki bir milli parka' karşılığıdır.",
    ],
    [
      "The animal was discovered by an expedition that was shipwrecked on an island.",
      [
        "Hayvan bir adada gemisi batan bir keşif heyeti tarafından keşfedildi.",
        "Hayvan bir keşif heyetinin gemisini batırdı.",
        "Ada hayvanı keşif heyetine gösterdi.",
        "Keşif heyeti hayvanı hiç görmedi.",
        "Hayvan, adaya güvenle ulaşan bir keşif heyetinin ardından gelen balıkçılar tarafından bulundu.",
      ],
      "'The animal was discovered by an expedition' 'hayvan bir keşif heyeti tarafından keşfedildi', 'that was shipwrecked on an island' 'bir adada gemisi batan' karşılığıdır.",
    ],
    [
      "Farmers were paid a reward for every animal they killed.",
      [
        "Çiftçilere öldürdükleri her hayvan için ödül verildi.",
        "Çiftçiler öldürdükleri her hayvan için para ödedi.",
        "Hayvanlar çiftçilere ödül verdi.",
        "Çiftçilerin hayvan öldürmesi yasaktı.",
        "Çiftçi yoktu.",
      ],
      "'Farmers were paid a reward' 'çiftçilere ödül verildi', 'for every animal they killed' 'öldürdükleri her hayvan için' karşılığıdır.",
    ],
    [
      "The squirrel wakes up briefly every few weeks during the winter.",
      [
        "Sincap kış boyunca birkaç haftada bir kısa süreliğine uyanır.",
        "Sincap kış boyunca hiç uyanmaz.",
        "Kış sincabı birkaç haftada bir uyandırır.",
        "Sincap her gün uyanır ve yiyecek arar.",
        "Sincap yoktur.",
      ],
      "'The squirrel wakes up briefly' 'sincap kısa süreliğine uyanır', 'every few weeks during the winter' 'kış boyunca birkaç haftada bir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Ölümler alışılmadık derecede sıcak ve nemli bir dönemde gerçekleşti.",
      [
        "The deaths occurred during a period of unusually warm and humid weather.",
        "The deaths occurred during a period of unusually cold and dry weather.",
        "The weather caused the deaths to stop.",
        "There were no deaths during the warm period.",
        "There was no weather.",
      ],
      "'Ölümler gerçekleşti' 'the deaths occurred', 'alışılmadık derecede sıcak ve nemli bir dönemde' 'during a period of unusually warm and humid weather' karşılığıdır.",
    ],
    [
      "Sağlıklı hayvanlar hastalığın olmadığı bir adaya taşındı.",
      [
        "Healthy animals were moved to an island where the disease was absent.",
        "Sick animals were moved to an island where the disease was common.",
        "The island moved the healthy animals.",
        "Healthy animals were kept with sick ones.",
        "All the animals were moved to the mainland, where the disease had already spread widely.",
      ],
      "'Sağlıklı hayvanlar taşındı' 'healthy animals were moved', 'hastalığın olmadığı bir adaya' 'to an island where the disease was absent' karşılığıdır.",
    ],
    [
      "Bugünkü atların hepsi az sayıda hayvandan türemiştir.",
      [
        "All of today's horses are descended from a small number of animals.",
        "Today's horses are descended from a very large population.",
        "A small number of animals descended from today's horses.",
        "Today's horses have no ancestors.",
        "There are no horses today.",
      ],
      "'Bugünkü atların hepsi türemiştir' 'all of today's horses are descended', 'az sayıda hayvandan' 'from a small number of animals' karşılığıdır.",
    ],
    [
      "Deniz ineği yosunla beslenen dev bir hayvandı.",
      [
        "The sea cow was a giant animal that fed on seaweed.",
        "The sea cow was a small animal that fed on fish.",
        "Seaweed fed on the sea cow.",
        "The sea cow ate nothing.",
        "The sea cow was a fast predator that hunted seals and fish in the open ocean.",
      ],
      "'Deniz ineği dev bir hayvandı' 'the sea cow was a giant animal', 'yosunla beslenen' 'that fed on seaweed' karşılığıdır.",
    ],
    [
      "Bilim insanları hayvanın DNA'sını incelemek için korunmuş örnekleri kullandı.",
      [
        "Scientists used preserved specimens to study the animal's DNA.",
        "Scientists used the animal's DNA to preserve specimens.",
        "The specimens studied the scientists.",
        "No specimens were preserved.",
        "There were no scientists.",
      ],
      "'Bilim insanları korunmuş örnekleri kullandı' 'scientists used preserved specimens', 'hayvanın DNA'sını incelemek için' 'to study the animal's DNA' karşılığıdır.",
    ],
    [
      "Armadillolar cüzzam bakterisini insanlara geçirebilir.",
      [
        "Armadillos can pass the leprosy bacterium to humans.",
        "Humans can pass leprosy to armadillos only.",
        "The leprosy bacterium can pass armadillos.",
        "Armadillos cannot carry any bacteria.",
        "There are no armadillos.",
      ],
      "'Armadillolar geçirebilir' 'armadillos can pass', 'cüzzam bakterisini insanlara' 'the leprosy bacterium to humans' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Przewalski's horse, a stocky horse with a short, upright mane, is named after a Russian explorer who described it in the 1870s after travelling in the grasslands of Central Asia. For more than a century, it was regarded as the last truly wild horse, a species that, unlike the ancestors of domestic horses, had never been tamed by humans. Its numbers declined rapidly in the twentieth century as a result of hunting, harsh winters and competition with domestic animals for grazing land and water, and the last wild horses were seen in Mongolia in 1969. Fortunately, a number had been captured and taken to zoos in Europe and North America, and all of the several thousand Przewalski's horses alive today are descended from only around a dozen of these animals. Because of the danger of inbreeding, zoos coordinated their breeding programmes carefully, exchanging animals to keep the population as genetically varied as possible. From 1992, horses bred in zoos were transported to Mongolia and released into protected areas, where they have since established breeding herds. In 2018, however, a study of ancient DNA challenged the idea that the horses had always been wild. Researchers examined bones from a site in Kazakhstan where people had lived about five and a half thousand years ago and where there was evidence of some of the earliest horse keeping, including traces of mare's milk in pottery. They found that the horses kept there were not the ancestors of modern domestic horses, as had been assumed, but of Przewalski's horses. This suggests that Przewalski's horses are descended from horses that were once kept by humans and later returned to the wild, in the same way that wild mustangs in America descend from escaped domestic horses.",
      questions: [
        [
          "According to the passage, Przewalski's horse disappeared from the wild because of ----.",
          [
            "hunting, harsh winters and competition with domestic animals",
            "a disease spread by zoos",
            "the activities of the Russian explorer",
            "breeding programmes coordinated by zoos in Europe and North America",
            "inbreeding",
          ],
          "Metne göre avlanma, sert kışlar ve evcil hayvanlarla otlak ve su rekabeti sonucunda sayıları hızla düştü.",
        ],
        [
          "Zoos exchanged animals with each other in order to ----.",
          [
            "keep the population as genetically varied as possible",
            "sell them",
            "train them",
            "study their milk",
            "reduce their numbers",
          ],
          "Akrabalı yetiştirme tehlikesi nedeniyle nüfusu genetik açıdan olabildiğince çeşitli tutmak için.",
        ],
        [
          "It can be understood from the passage that the 2018 study suggested that Przewalski's horses ----.",
          [
            "are descended from horses once kept by humans",
            "were never in contact with humans",
            "are the ancestors of modern domestic horses",
            "came from America",
            "were first described in Kazakhstan",
          ],
          "Bir zamanlar insanlarca beslenen ve sonra doğaya dönen atlardan türedikleri anlaşıldı.",
        ],
      ],
    },
    {
      text:
        "In 1741, a Russian expedition led by the Danish explorer Vitus Bering, which had been sent to explore the seas between Asia and North America, was shipwrecked on an uninhabited island near the coast of Kamchatka. Among the survivors was a German naturalist named Georg Wilhelm Steller, who, while the crew spent the winter on the island, studied its wildlife. In the shallow coastal waters, he observed enormous animals feeding on seaweed. They were relatives of the manatees and dugongs of warmer waters, but much larger, reaching lengths of perhaps eight or nine metres and weighing several tonnes. They had thick, rough skin, small heads and no teeth, using hard plates in their mouths to grind the seaweed. They moved slowly near the surface and seemed to show no fear of humans. Steller wrote a detailed description of the animal's appearance and behaviour, which remains the only scientific account of it by someone who saw it alive. The survivors of the expedition hunted the animals for their meat, which they described as excellent. When they eventually built a boat from the wreck and returned to Kamchatka, news of the island's rich wildlife spread, and hunters seeking sea otters and seals began to visit the area. They also killed the sea cows for food during their voyages. Because the animals were slow, defenceless and already rare, they were wiped out with astonishing speed. The last known sea cow was killed around 1768, only twenty-seven years after Steller had first described it. Scientists have since used bones and preserved specimens to study the animal's DNA, which suggests that its population had already been declining long before the arrival of Bering's expedition, perhaps because of earlier human hunting along the coasts of the North Pacific.",
      questions: [
        [
          "According to the passage, Steller's description of the sea cow is important because ----.",
          [
            "it is the only scientific account by someone who saw the animal alive",
            "it was written by Bering",
            "it describes the animal's teeth",
            "it was written after the hunters from Kamchatka had begun visiting the island",
            "it proved the animal lived in warm waters",
          ],
          "Metne göre hayvanı canlı gören birinin yazdığı tek bilimsel anlatımdır.",
        ],
        [
          "Hunters began to visit the island after ----.",
          [
            "news of its rich wildlife spread",
            "the sea cows became extinct",
            "the government ordered them to",
            "Steller asked them to",
            "the island became inhabited",
          ],
          "Keşif heyeti Kamçatka'ya döndükten sonra adanın zengin yaban hayatı haberi yayıldı.",
        ],
        [
          "It can be understood from the passage that DNA studies suggest that the sea cow ----.",
          [
            "had already been declining before Bering's expedition arrived",
            "was still common in 1768",
            "lived in warm waters",
            "was not related to manatees",
            "was never hunted before 1741",
          ],
          "DNA çalışmaları nüfusun Bering'in heyeti gelmeden çok önce azalmaya başladığını düşündürür.",
        ],
      ],
    },
    {
      text:
        "The thylacine, often called the Tasmanian tiger because of the dark stripes across its lower back, was the largest meat-eating marsupial of modern times. It looked somewhat like a dog, although it was more closely related to kangaroos and koalas, and, like them, the female carried her young in a pouch. Thylacines once lived across mainland Australia and New Guinea, but they disappeared from the mainland around three thousand years ago, possibly because of competition from dingoes, wild dogs brought by humans, and changes in climate. By the time Europeans arrived, they survived only on the island of Tasmania. After European settlers introduced sheep to the island in the nineteenth century, thylacines were blamed for killing livestock, although historians now believe that their role was greatly exaggerated and that wild dogs and poor farm management caused many of the losses. The government and private companies paid rewards for every thylacine killed, and more than two thousand rewards were paid between 1888 and 1909. Habitat loss and disease may also have contributed to their decline. The last known thylacine died in a zoo in Hobart in September 1936, only weeks after the animal had finally been given legal protection. Because some people believed that thylacines might survive in remote forests, the species was not officially declared extinct until 1986. Since then, there have been many reported sightings, but none has been confirmed by clear photographs or physical evidence. In recent years, a company has announced a project to bring back the thylacine by editing the genes of a related living marsupial, using DNA recovered from preserved specimens. Many scientists doubt that the project can succeed and argue that efforts would be better directed towards protecting species that are still alive.",
      questions: [
        [
          "According to the passage, the thylacine was more closely related to ----.",
          [
            "kangaroos and koalas than to dogs",
            "dogs than to kangaroos",
            "tigers than to koalas",
            "the dingoes brought to Australia by humans around three thousand years ago",
            "sheep than to marsupials",
          ],
          "Metne göre köpeğe benzese de kangurular ve koalalarla daha yakın akrabaydı.",
        ],
        [
          "The writer suggests that the thylacine's role in killing sheep ----.",
          [
            "was greatly exaggerated",
            "was the main cause of farm losses",
            "was never discussed",
            "was proved by photographs",
            "led to protection in 1888",
          ],
          "Tarihçiler rolünün büyük ölçüde abartıldığını ve kayıpların çoğuna yaban köpekleri ile kötü çiftlik yönetiminin yol açtığını düşünür.",
        ],
        [
          "It can be understood from the passage that the species was declared extinct only in 1986 because ----.",
          [
            "some people believed that thylacines might still survive in remote forests",
            "the last animal died in 1986",
            "rewards were still being paid",
            "the zoo refused to report the death",
            "the company planned to bring it back",
          ],
          "Bazı insanlar uzak ormanlarda hayatta kalmış olabileceklerine inandığı için resmi açıklama 1986'ya kadar yapılmadı.",
        ],
      ],
    },
    {
      text:
        "The Arctic ground squirrel, which lives in the far north of North America and Siberia, survives the long, harsh winter by hibernating for seven or eight months each year in a burrow dug into the frozen ground. Before hibernation, the squirrels eat large amounts of food and build up their fat reserves, which provide the energy they need during the winter. During hibernation, their heart rate falls from around two hundred beats per minute to fewer than ten, their breathing slows dramatically and their bodies use only a tiny fraction of their normal energy. Most remarkable of all, their body temperature can fall below zero degrees Celsius, reaching nearly minus three degrees in some cases, which is the lowest body temperature ever recorded in a living mammal. Normally, water in the body would freeze at this temperature, forming ice crystals that would destroy the animal's cells. The squirrels survive because their body fluids become 'supercooled', remaining liquid below their normal freezing point as long as there is nothing to trigger the formation of ice. Scientists are still trying to understand exactly how they avoid freezing. Every two or three weeks, the squirrels wake up briefly and warm their bodies back to normal temperature for less than a day before returning to deep hibernation. These periods of waking use a large share of the energy spent during the winter, and their purpose is not fully understood, although they may help the brain and immune system to recover. Researchers are interested in the squirrels for medical reasons. If doctors could learn how the animals protect their brains and other organs from the effects of low temperatures and reduced blood flow, they might be able to develop better ways of protecting patients after strokes or heart attacks, or of preserving organs for transplants.",
      questions: [
        [
          "According to the passage, the squirrels' bodies do not freeze because ----.",
          [
            "their body fluids become supercooled and remain liquid below their normal freezing point",
            "their burrows are warm",
            "they wake up every day",
            "their heart rate rises to two hundred beats per minute during the winter",
            "they eat large amounts of food during the winter",
          ],
          "Metne göre vücut sıvıları 'aşırı soğumuş' hale gelir ve normal donma noktalarının altında sıvı kalır.",
        ],
        [
          "The writer mentions the periods of waking in order to show that ----.",
          [
            "they use a large share of energy and their purpose is not fully understood",
            "the squirrels stop hibernating",
            "the squirrels eat during the winter",
            "the burrows become too cold",
            "the squirrels' brains are damaged",
          ],
          "Bu uyanma dönemleri kış boyunca harcanan enerjinin büyük bölümünü kullanır ve amacı tam anlaşılmamıştır.",
        ],
        [
          "It can be understood from the passage that researchers hope the squirrels might help to ----.",
          [
            "develop better ways of protecting patients' organs",
            "cure the common cold",
            "make people hibernate for months",
            "find new sources of food",
            "warm the Arctic",
          ],
          "Hayvanların beyin ve organlarını nasıl koruduğunu öğrenmek felç ya da kalp krizi sonrası hastaları korumaya veya organ saklamaya yardım edebilir.",
        ],
      ],
    },
    {
      text:
        "The nine-banded armadillo, a small mammal covered in a shell of bony plates, is common in the southern United States and much of Latin America. Over the past century and a half, it has spread steadily northwards from Mexico into Texas and beyond, helped by milder winters, the clearing of forests and the absence of many of its natural predators. The armadillo has two unusual biological features that have made it important to scientists. The first is its way of reproducing. After a female mates, a single fertilised egg splits into four, so that she almost always gives birth to four young of the same sex that are genetically identical. Because each litter consists of four identical individuals, armadillos have been used in studies that compare how identical animals develop in different conditions. The second feature is the armadillo's low body temperature, which is cooler than that of most mammals. This makes it one of the few animals other than humans in which the bacterium that causes leprosy can grow, since the bacterium prefers cooler parts of the body. For decades, researchers used armadillos to grow the bacterium for the development of tests and vaccines. It was also discovered that wild armadillos in some parts of the southern United States are naturally infected with leprosy. In 2011, a genetic study showed that the strain of the bacterium found in many armadillos was the same as that found in a number of American patients who had never travelled abroad, suggesting that some people had caught the disease from the animals, probably by handling or eating them. The risk of infection is very low, and leprosy can now be cured with antibiotics, but health officials advise people to avoid contact with wild armadillos.",
      questions: [
        [
          "According to the passage, the armadillo has spread northwards partly because of ----.",
          [
            "milder winters and the absence of many natural predators",
            "the spread of leprosy",
            "the work of scientists",
            "its low body temperature, which helps the bacterium that causes leprosy to grow",
            "an increase in forests",
          ],
          "Metne göre ılıman kışlar, ormanların açılması ve pek çok doğal yırtıcının yokluğu yayılmasına yardım etti.",
        ],
        [
          "Armadillos have been useful for growing the leprosy bacterium because ----.",
          [
            "their body temperature is lower than that of most mammals",
            "they have four young",
            "they live in Texas",
            "they have bony plates",
            "they eat insects",
          ],
          "Vücut sıcaklıkları çoğu memeliden düşüktür ve bakteri vücudun daha serin bölgelerini tercih eder.",
        ],
        [
          "It can be understood from the passage that the 2011 study suggested that ----.",
          [
            "some American patients had caught leprosy from armadillos",
            "armadillos cannot carry leprosy",
            "leprosy cannot be cured",
            "the patients had caught the disease abroad",
            "armadillos are immune to bacteria",
          ],
          "Yurt dışına hiç gitmemiş bazı hastalarda armadillolardakiyle aynı bakteri suşu bulundu.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The giraffe's long neck contains only seven bones, the same number as in most other mammals, including humans. ---- However, some scientists argue that the neck may also have evolved because males use it as a weapon when fighting for females.",
      [
        "It has long been assumed that the neck evolved to allow giraffes to reach leaves high in trees.",
        "Giraffes live in Africa.",
        "Humans have long necks.",
        "Each of the bones is very large, sometimes more than twenty-five centimetres long.",
        "Trees have many leaves.",
      ],
      "Boşluk boynun evrimine ilişkin geleneksel açıklamayı anlatıp 'However' ile başka bir görüşe bağlanan bir cümle gerektirir; boşluğa boynun ağaçların yüksek yapraklarına ulaşmak için evrimleştiğinin uzun süre varsayıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Echidnas, which live in Australia and New Guinea, are among the very few mammals that lay eggs. ---- The young, called puggles, remain there until their spines begin to grow.",
      [
        "After laying a single egg, the female keeps it in a pouch on her belly until it hatches.",
        "Australia has many unusual animals.",
        "Many birds lay eggs.",
        "Echidnas use a long, sticky tongue to collect the insects on which they feed.",
        "Spines protect many animals.",
      ],
      "Boşluk yumurtanın nerede tutulduğunu anlatıp yavruların orada kalmasına bağlanan bir cümle gerektirir; boşluğa dişinin tek bir yumurtayı yumurtadan çıkana kadar karnındaki kesede tuttuğunu söyleyen cümle gelmelidir.",
    ],
    [
      "It is widely believed that lemmings commit mass suicide by jumping off cliffs. ---- The scenes had in fact been staged by the film makers.",
      [
        "The belief was spread by a nature film made in 1958, which showed lemmings throwing themselves into the sea.",
        "Lemmings are small rodents.",
        "Cliffs are found on many coasts.",
        "Lemming populations do rise and fall dramatically, and large numbers sometimes migrate in search of food.",
        "Many people enjoy nature films.",
      ],
      "Boşluk inancın nasıl yayıldığını anlatıp sahnelerin kurgulandığına bağlanan bir cümle gerektirir; boşluğa inancın lemmingleri denize atlarken gösteren 1958 yapımı bir doğa filmiyle yayıldığını söyleyen cümle gelmelidir.",
    ],
    [
      "Many people picture spotted hyenas as animals that live on what lions leave behind. ---- In some areas, lions actually steal more food from hyenas than hyenas steal from lions.",
      [
        "Studies have shown, however, that they kill most of their own food by hunting in groups.",
        "Lions live in Africa.",
        "Many animals eat meat.",
        "In hyena groups, the females are larger than the males and are usually dominant.",
        "Hyenas make many different sounds.",
      ],
      "Boşluk yaygın görüşü düzeltip aslanların sırtlanlardan daha çok yiyecek çalmasına bağlanan bir cümle gerektirir; boşluğa çalışmaların sırtlanların yiyeceklerinin çoğunu grup halinde avlanarak öldürdüğünü gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "The capybara of South America is the largest rodent in the world, weighing as much as an adult human. ---- Its eyes, ears and nostrils are placed high on its head, so that it can remain almost completely hidden under water.",
      [
        "It spends much of its time in rivers and lakes and is an excellent swimmer.",
        "South America has many rivers.",
        "Rodents include mice and rats.",
        "Capybaras live in groups and are often seen with birds perched on their backs.",
        "Many animals can swim.",
      ],
      "Boşluk kapibaranın suyla ilişkisini anlatıp göz, kulak ve burun deliklerinin konumuna bağlanan bir cümle gerektirir; boşluğa zamanının çoğunu nehir ve göllerde geçirdiğini ve çok iyi yüzdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "Manatees in Florida cannot survive for long in water colder than about twenty degrees Celsius. ---- When some of these plants closed, conservationists had to find other ways to keep the animals warm.",
      [
        "In winter, many gather in the warm water released by power stations.",
        "Florida is a popular holiday destination.",
        "Water freezes at zero degrees.",
        "Many manatees are killed or injured each year when they are struck by boats.",
        "Power stations produce electricity.",
      ],
      "Boşluk deniz ineklerinin kışın nerede toplandığını anlatıp bu santrallerin kapanmasına bağlanan bir cümle gerektirir; boşluğa kışın pek çoğunun elektrik santrallerinden salınan ılık suda toplandığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Many koalas in Australia are infected with a bacterial disease that can cause blindness and infertility.",
        "The disease has contributed to the decline of koala populations in some areas.",
        "Researchers have developed a vaccine to protect the animals.",
        "Koalas feed almost entirely on eucalyptus leaves.",
        "Early trials suggest that the vaccine can reduce the effects of the disease.",
      ],
      odd: 3,
      why: "Parça koalalardaki bakteriyel hastalığı ve aşı çalışmalarını anlatır. Koalaların neredeyse yalnızca okaliptüs yapraklarıyla beslendiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Meerkats live in groups in the deserts of southern Africa.",
        "While the others search for food, one member of the group often stands guard.",
        "Deserts receive very little rain.",
        "If it sees a predator, it gives an alarm call.",
        "Different calls are used for threats from the air and from the ground.",
      ],
      odd: 2,
      why: "Parça grup halinde yaşayan mirketleri ve nöbetçi davranışını anlatır. Çöllere çok az yağmur düştüğünü söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The quagga was a type of zebra with stripes only on the front part of its body.",
        "It became extinct in the nineteenth century.",
        "Since the 1980s, a project in South Africa has bred zebras with reduced stripes.",
        "Zebras live in herds.",
        "The aim is to produce animals that look like the extinct quagga.",
      ],
      odd: 3,
      why: "Parça soyu tükenmiş kuaggaya benzeyen zebralar yetiştirme projesini anlatır. Zebraların sürüler halinde yaşadığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Honey badgers are small but extremely fierce animals that live in Africa and Asia.",
        "They do not hesitate to confront far bigger animals.",
        "They have thick, loose skin that protects them from bites and stings.",
        "They often raid bees' nests to eat the larvae.",
        "Honey is used in many recipes.",
      ],
      odd: 4,
      why: "Parça bal porsuklarının saldırganlığını ve kalın derisini anlatır. Balın pek çok tarifte kullanıldığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Weddell seals live farther south than any other mammal, under the sea ice around Antarctica.",
        "To breathe, they must keep holes in the ice open throughout the winter.",
        "They do this by scraping away the ice with their teeth.",
        "Antarctica is covered by a thick sheet of ice.",
        "Over the years, the scraping wears down their teeth, which can shorten their lives.",
      ],
      odd: 3,
      why: "Parça buzdaki nefes deliklerini dişleriyle açık tutan Weddell foklarını anlatır. Antarktika'nın kalın bir buz tabakasıyla kaplı olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Many marsupials give birth to tiny, undeveloped young.",
        "The newborn crawls into its mother's pouch, where it feeds on milk.",
        "It remains in the pouch for weeks or months while it develops.",
        "Pouches are also found on some clothing.",
        "Most marsupials live in Australia and the Americas.",
      ],
      odd: 3,
      why: "Parça keseli hayvanların yavrularını anlatır. Bazı giysilerde de cep bulunduğunu söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
