import type { YokdilDeneme } from "./types";

export const SAGLIK_31: YokdilDeneme = {
  no: 31,
  field: "saglik",
  vocab: [
    [
      "Under the microscope, the doctor saw tiny moving bodies that had never been ---- before.",
      ["described", "prescribed", "forbidden", "inherited", "postponed"],
      "Doktorun mikroskopta daha önce hiç 'tanımlanmamış' (described) küçük hareketli cisimler gördüğü anlatılır.",
    ],
    [
      "Insects that carry disease from one person to another are known as ----.",
      ["vectors", "symptoms", "remedies", "surgeons", "antibodies"],
      "Hastalığı bir kişiden diğerine taşıyan böceklere 'vektör' (vectors) denir.",
    ],
    [
      "Patients stopped passing on the disease once their lice had been ----.",
      ["eliminated", "examined", "multiplied", "collected", "described"],
      "Bitler 'yok edildiğinde' (eliminated) hastaların hastalığı bulaştırmayı bıraktığı anlatılır.",
    ],
    [
      "The vaccine gives ---- protection after a single dose.",
      ["lifelong", "temporary", "partial", "doubtful", "careless"],
      "Aşının tek dozdan sonra 'ömür boyu' (lifelong) koruma sağladığı anlatılır.",
    ],
    [
      "Workers drained ponds and covered water barrels to stop mosquitoes from ----.",
      ["breeding", "sleeping", "singing", "migrating", "hiding"],
      "İşçilerin sivrisineklerin 'üremesini' (breeding) önlemek için gölleri kurutup su fıçılarını örttüğü anlatılır.",
    ],
    [
      "The researcher became infected while studying the disease and eventually ---- it.",
      ["died of", "made up", "took after", "put off", "looked over"],
      "Araştırmacının hastalığı incelerken enfekte olup sonunda bu hastalıktan 'öldüğü' (died of) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Laveran ---- the blood of a sick soldier when he noticed the moving parasites.",
      ["was examining", "has examined", "examines", "will examine", "had been examined"],
      "Geçmişte süren bir eylem sırasında başka bir olay olmuştur: 'was examining'.",
    ],
    [
      "By the time Ross found the parasite in a mosquito, he ---- hundreds of insects.",
      ["had dissected", "dissects", "will dissect", "is dissecting", "has been dissected"],
      "Geçmişteki bir andan önce tamamlanmış eylem: 'had dissected'.",
    ],
    [
      "If the patients had not been washed and given clean clothes, they ---- the other patients.",
      ["would have infected", "will infect", "infect", "had infected", "are infecting"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'would have infected'.",
    ],
    [
      "Thousands of workers ---- by yellow fever before the canal project was taken over.",
      ["had been killed", "killed", "have killed", "are killing", "were killing"],
      "İşçiler hastalık tarafından öldürülmüştür; geçmiş mükemmel edilgen: 'had been killed'.",
    ],
    [
      "---- the vaccine was developed in the 1930s, it is still used today.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "1930'larda geliştirilmesi ile bugün hâlâ kullanılması zıttır: 'Although'.",
    ],
    [
      "Manson showed that mosquitoes could take up worms from the blood of a person ---- was infected.",
      ["who", "which", "whose", "whom", "where"],
      "'a person' sözcüğünü niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
    ],
    [
      "The worms appear in the blood mainly at night, ---- is when mosquitoes feed.",
      ["which", "what", "who", "where", "that"],
      "Önceki bilgiyi niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The closer people live to breeding sites, ---- they are to be bitten.",
      ["the more likely", "the most likely", "more likely than", "much likely", "so likely"],
      "'The closer ..., the more likely ...' paralel yapısı: 'the more likely'.",
    ],
    [
      "Not until 1897 ---- anyone find the malaria parasite inside a mosquito.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The flies were exposed to radiation so that they ---- produce offspring.",
      ["could not", "must not", "need not", "should not", "may not"],
      "'so that' sonrası olanak/yetenek: 'could not'.",
    ],
    [
      "Pregnant women are advised to avoid ---- cat litter.",
      ["handling", "to handle", "handle", "handled", "be handled"],
      "'avoid' fiilinden sonra -ing gelir: 'handling'.",
    ],
    [
      "The scientist was awarded the Nobel Prize ---- his work on typhus.",
      ["for", "with", "by", "of", "on"],
      "'be awarded a prize for something' kalıbı: 'for'.",
    ],
    [
      "Neither Laveran ---- his colleagues could at first explain how the parasite entered the body.",
      ["nor", "or", "and", "but", "yet"],
      "'Neither ... nor' bağlacı: 'nor'.",
    ],
    [
      "Ricketts insisted that every tick ---- examined under the microscope.",
      ["be", "is being", "was been", "to be", "being"],
      "'insist that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "For centuries, malaria was believed to be caused by 'bad air' rising from swamps, {1} its name, which comes from the Italian words for 'bad air'. In November 1880, Alphonse Laveran, a French army doctor working in the Algerian city of Constantine, was examining a drop of blood from a feverish soldier when he saw something unexpected. Inside the red blood cells were small, crescent-shaped bodies, and as he watched, thin threads began to whip about at their edges. Laveran realised that he was looking at a living organism and {2} it must be the cause of the disease. He found the same bodies in the blood of many other patients, but never in healthy people. {3}, his claim was received with great scepticism, partly because he was not a well-known scientist and partly because many researchers were convinced that bacteria caused most diseases. It was only after Italian researchers had confirmed his observations in the late 1880s {4} his discovery was widely accepted. In 1907 Laveran was awarded the Nobel Prize, and he gave half of the money to {5} a laboratory of tropical medicine at the Pasteur Institute in Paris.",
      blanks: [
        [
          "(21) ----",
          ["hence", "unless", "although", "despite", "whereas"],
          "Hastalığın adı bu inançtan gelir; 'bu yüzden' anlamında: 'hence'.",
        ],
        [
          "(22) ----",
          ["that", "what", "which", "whose", "whether"],
          "'realised that' isim cümleciği: 'that'.",
        ],
        [
          "(23) ----",
          ["At first", "In short", "As a result", "For example", "Likewise"],
          "İddianın başlangıçta şüpheyle karşılandığı anlatılır: 'At first'.",
        ],
        [
          "(24) ----",
          ["that", "when", "which", "what", "since"],
          "'It was only after ... that ...' vurgu yapısı: 'that'.",
        ],
        [
          "(25) ----",
          ["establish", "abandon", "inspect", "destroy", "repeat"],
          "Paranın yarısını bir laboratuvar 'kurmak' için verdiği anlatılır: 'establish'.",
        ],
      ],
    },
    {
      text:
        "Laveran had found the malaria parasite in human blood, but no one knew how it passed from one person to another. In London, the physician Patrick Manson suspected that mosquitoes were involved, and he encouraged Ronald Ross, a British army doctor serving in India, to test the idea. For more than two years, Ross paid patients to let mosquitoes feed on them and then dissected the insects, searching their bodies under the microscope. Progress was slow, {1} he was using the wrong kinds of mosquito. On 20 August 1897, in the city of Secunderabad, he finally found small round cysts in the stomach wall of a mosquito {2} had fed on an infected patient. Ross was then transferred to Calcutta, where there were few human cases, so he turned to birds, {3} also suffer from a form of malaria. Using infected sparrows, he showed that the parasite developed inside the mosquito and travelled to its salivary glands, {4} which it was injected into a new host when the insect bit. Ross received the Nobel Prize in 1902, {5} Italian scientists, who proved the same cycle in human malaria at about the same time, argued that they deserved a share of the credit.",
      blanks: [
        [
          "(26) ----",
          ["partly because", "even though", "so that", "as long as", "in case"],
          "İlerlemenin yavaş olmasının nedeni yanlış sivrisinek türünü kullanmasıdır: 'partly because'.",
        ],
        [
          "(27) ----",
          ["that", "what", "who", "whose", "where"],
          "'a mosquito' sözcüğünü niteleyen ve özne görevindeki ilgi zamiri: 'that'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra 'birds' sözcüğünü niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["from", "to", "by", "at", "on"],
          "'from which' (oradan) yeni konağa enjekte edildiği anlatılır: 'from'.",
        ],
        [
          "(30) ----",
          ["although", "because", "unless", "so", "since"],
          "Ödülü alması ile İtalyanların pay istemesi zıtlık bildirir: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Laveran saw the parasite in many patients, ----.",
      [
        "other scientists were slow to accept his claim",
        "he was working in the city of Constantine",
        "malaria is common in hot countries",
        "the soldiers were suffering from fever",
        "he used a simple microscope",
      ],
      "'Although' zıtlık ister: paraziti pek çok hastada görse de diğer bilim insanları iddiasını kabul etmekte yavaş davrandı.",
    ],
    [
      "Ross turned to bird malaria ----.",
      [
        "as he had few human cases",
        "although sparrows are common in India",
        "unless the mosquitoes had bitten people",
        "so that he had won the Nobel Prize",
        "while Manson lived in London",
      ],
      "Ross, bulunduğu yerde insan vakaları az olduğu için kuş sıtmasına yöneldi.",
    ],
    [
      "If lice spread typhus, ----.",
      [
        "removing them should stop it spreading",
        "the disease was first described in Tunis",
        "most patients were poor farm workers",
        "Nicolle had worked at the Pasteur Institute",
        "chimpanzees are closely related to humans",
      ],
      "Birinci tip koşul: bitler tifüsü yayıyorsa onları yok etmek hastalığın yayılmasını durdurmalıdır.",
    ],
    [
      "----, Gorgas set out to destroy the places where mosquitoes bred.",
      [
        "Convinced that the insects carried yellow fever",
        "Although the canal was being built by the French",
        "Unless the workers had arrived from abroad",
        "Because Panama has a dry climate",
        "Since he had never visited Cuba",
      ],
      "Böceklerin sarı hummayı taşıdığına inandığı için Gorgas sivrisineklerin üreme yerlerini yok etmeye koyuldu.",
    ],
    [
      "The virus was grown again and again in tissue cultures ----.",
      [
        "until it became too weak to cause illness",
        "although it was discovered in Africa",
        "unless the mice had been infected",
        "because Theiler was born in South Africa",
        "so that the Nobel Prize was awarded in 1951",
      ],
      "Virüs hastalık yapamayacak kadar zayıflayana kadar doku kültürlerinde tekrar tekrar üretildi.",
    ],
    [
      "Manson took blood samples at night ----.",
      [
        "since the worms were more numerous then",
        "because his gardener worked during the day",
        "although mosquitoes rarely bite at night",
        "unless the patients were asleep",
        "while he lived in southern China",
      ],
      "Manson, solucanlar gece daha çok olduğu için kan örneklerini gece aldı.",
    ],
    [
      "Not only did Ricketts identify the tick that spread the disease, ----.",
      [
        "but he also studied typhus in Mexico",
        "and the valley was in Montana",
        "since he was born in Ohio",
        "so the bacteria were named after him",
        "unless the ticks were very small",
      ],
      "'Not only ... but also' yapısı tamamlanır: Ricketts hastalığı yayan keneyi bulmakla kalmamış, Meksika'da tifüsü de incelemişti.",
    ],
    [
      "When sterile male flies mate with wild females, ----.",
      [
        "the eggs that are laid do not hatch",
        "the flies were released from aircraft",
        "the method was tested on an island",
        "cattle are often attacked by the flies",
        "the radiation was produced in a laboratory",
      ],
      "Kısır erkek sinekler yabani dişilerle çiftleştiğinde bırakılan yumurtalar açılmaz.",
    ],
    [
      "Since the scabies mite is too small to see with the naked eye, ----.",
      [
        "its role in the disease was long unknown",
        "it lives in the upper layers of the skin",
        "the itching is worse at night",
        "Bonomo worked in the port of Livorno",
        "the condition is common in crowded places",
      ],
      "'Since' neden bildirir: uyuz akarı çıplak gözle görülemeyecek kadar küçük olduğu için hastalıktaki rolü uzun süre bilinmedi.",
    ],
    [
      "Although most people infected with Toxoplasma have no symptoms, ----.",
      [
        "it can be harmful in pregnancy",
        "cats are the parasite's main host",
        "it was first found in a rodent",
        "many people keep cats as pets",
        "the parasite can live in soil",
      ],
      "'Although' zıtlık ister: enfekte kişilerin çoğunda belirti olmasa da parazit hamilelikte tehlikeli olabilir.",
    ],
    [
      "Unless the breeding sites of mosquitoes are removed, ----.",
      [
        "spraying adults helps only briefly",
        "the canal was opened in 1914",
        "yellow fever is caused by a virus",
        "many workers came from the Caribbean",
        "Gorgas was promoted to general",
      ],
      "'Unless' olumsuz koşul: sivrisineklerin üreme yerleri ortadan kaldırılmazsa yetişkin böcekleri ilaçlamanın etkisi geçici olur.",
    ],
  ],
  enTr: [
    [
      "The parasite was found in the blood of sick patients but never in that of healthy people.",
      [
        "Parazit hasta kişilerin kanında bulundu, ancak sağlıklı insanlarınkinde hiç bulunmadı.",
        "Parazit hem hasta hem de sağlıklı kişilerin kanında bulundu.",
        "Sağlıklı insanların kanının, hasta kişilerin kanında bulunan parazite karşı güçlü bir koruma sağladığı görüldü.",
        "Parazit, hasta kişilerin kanından sağlıklı insanlara geçti.",
        "Hasta kişilerin kanında parazitten başka bir şey bulunmadı.",
      ],
      "'was found in the blood of sick patients' 'hasta kişilerin kanında bulundu', 'but never in that of healthy people' 'ancak sağlıklı insanlarınkinde hiç bulunmadı' karşılığıdır.",
    ],
    [
      "Ross spent more than two years examining mosquitoes before he made his discovery.",
      [
        "Ross, keşfini yapmadan önce iki yıldan fazla sivrisinek incelemekle uğraştı.",
        "Ross, keşfini yaptıktan sonra iki yıl daha sivrisinek inceledi.",
        "Ross'un keşfi, sivrisinekleri iki yıl incelemesini gereksiz kıldı.",
        "Ross, sivrisinekleri incelemeye iki yıl ara verdi.",
        "Ross, sivrisinekleri incelediği iki yıldan fazla süre içinde birçok yeni sivrisinek türü keşfetti.",
      ],
      "'spent more than two years examining' 'iki yıldan fazla incelemekle uğraştı', 'before he made his discovery' 'keşfini yapmadan önce' karşılığıdır.",
    ],
    [
      "Patients stopped spreading typhus once they had been bathed and given clean clothes.",
      [
        "Hastalar, yıkanıp temiz giysiler verildikten sonra tifüsü yaymayı bıraktı.",
        "Hastalar, temiz giysiler giydikleri halde tifüsü yaymaya devam etti.",
        "Tifüs, hastaların giysileri yıkandığında daha hızlı yayıldı.",
        "Hastalar, tifüsü yaymamak için giysilerini yıkamayı reddetti.",
        "Temiz giysiler, tifüsün tedavisinde hiçbir işe yaramadı.",
      ],
      "'stopped spreading typhus' 'tifüsü yaymayı bıraktı', 'once they had been bathed and given clean clothes' 'yıkanıp temiz giysiler verildikten sonra' karşılığıdır.",
    ],
    [
      "Disease had killed thousands of workers during the earlier attempt to build the canal.",
      [
        "Kanalı inşa etmeye yönelik önceki girişim sırasında hastalık binlerce işçinin ölümüne yol açmıştı.",
        "Kanal inşaatı, binlerce işçinin hastalanması nedeniyle hiç başlamadı.",
        "Önceki girişimde işçiler, hastalıkların yayılmasını önlemeyi başarmıştı.",
        "Binlerce işçi, kanalı inşa ettikten sonra hastalandı.",
        "Kanalı inşa etmeye yönelik önceki girişim sırasında hastalıklar, işçileri ve inşaatı hiçbir şekilde etkilemedi.",
      ],
      "'had killed thousands of workers' 'binlerce işçinin ölümüne yol açmıştı', 'during the earlier attempt to build the canal' 'kanalı inşa etmeye yönelik önceki girişim sırasında' karşılığıdır.",
    ],
    [
      "This was the first time a Nobel Prize had been given for a vaccine against a virus.",
      [
        "Bu, bir virüse karşı geliştirilen aşı için ilk kez Nobel Ödülü verilmesiydi.",
        "Nobel Ödülü, virüslere karşı geliştirilen aşılar için hiç verilmedi.",
        "Bu, virüsler hakkında yapılan ilk Nobel ödüllü çalışmaydı.",
        "Aşıyı geliştiren bilim insanı, Nobel Ödülü'nü reddetti.",
        "Bu, bir virüsün ilk kez aşıyla yok edilmesiydi.",
      ],
      "'the first time a Nobel Prize had been given' 'ilk kez Nobel Ödülü verilmesi', 'for a vaccine against a virus' 'bir virüse karşı geliştirilen aşı için' karşılığıdır.",
    ],
    [
      "Releasing sterile insects can wipe out a pest without the use of chemicals.",
      [
        "Kısır böcekleri salmak, kimyasal kullanmadan bir zararlıyı yok edebilir.",
        "Kısır böcekler, kimyasallarla birlikte kullanıldığında daha etkilidir.",
        "Zararlılar, kimyasallar olmadan kısır hale getirilemez.",
        "Kısır böcekleri salmak, zararlıların sayısını artırabilir.",
        "Kimyasallar, kısır böceklerden daha etkili bir yöntemdir.",
      ],
      "'Releasing sterile insects' 'kısır böcekleri salmak', 'can wipe out a pest without the use of chemicals' 'kimyasal kullanmadan bir zararlıyı yok edebilir' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Pek çok bilim insanı, o dönemde hastalıkların çoğunun bakterilerden kaynaklandığına inanıyordu.",
      [
        "At that time, many scientists believed that most diseases were caused by bacteria.",
        "At that time, few scientists believed that bacteria could cause disease.",
        "Many scientists believed that bacteria were destroyed by most diseases.",
        "Bacteria were first discovered at that time by scientists who were studying a few rare tropical diseases.",
        "Most scientists at that time had never heard of bacteria.",
      ],
      "'o dönemde' 'at that time', 'hastalıkların çoğunun bakterilerden kaynaklandığına' 'most diseases were caused by bacteria' karşılığıdır.",
    ],
    [
      "Parazit, sivrisineğin içinde gelişerek tükürük bezlerine ulaşır.",
      [
        "The parasite develops inside the mosquito and reaches its salivary glands.",
        "The mosquito's salivary glands destroy the parasite before it develops.",
        "The parasite develops in human blood before entering the mosquito.",
        "The mosquito reaches the parasite through its salivary glands.",
        "The parasite cannot survive inside the body of a mosquito.",
      ],
      "'sivrisineğin içinde gelişerek' 'develops inside the mosquito', 'tükürük bezlerine ulaşır' 'reaches its salivary glands' karşılığıdır.",
    ],
    [
      "Bitlerin yok edilmesi, savaş sırasında tifüs salgınlarının önlenmesine yardım etti.",
      [
        "Getting rid of lice helped to prevent outbreaks of typhus during the war.",
        "Typhus outbreaks during the war were caused by efforts to remove lice.",
        "Lice spread more quickly during the war because of typhus.",
        "The war made it impossible to get rid of lice.",
        "Outbreaks of typhus helped soldiers to get rid of lice.",
      ],
      "'Bitlerin yok edilmesi' 'getting rid of lice', 'tifüs salgınlarının önlenmesine yardım etti' 'helped to prevent outbreaks of typhus' karşılığıdır.",
    ],
    [
      "İşçiler, sivrisineklerin yumurta bırakmasını önlemek için durgun suların yüzeyine yağ döktü.",
      [
        "Workers poured oil onto the surface of still water to stop mosquitoes from laying eggs.",
        "Workers collected mosquito eggs from the surface of still water.",
        "Mosquitoes laid their eggs in oil that workers had poured into the water.",
        "Workers drank still water after removing the oil from its surface.",
        "Oil was poured onto the surface of still water in order to help the mosquitoes breed more quickly.",
      ],
      "'durgun suların yüzeyine yağ döktü' 'poured oil onto the surface of still water', 'yumurta bırakmasını önlemek için' 'to stop mosquitoes from laying eggs' karşılığıdır.",
    ],
    [
      "Kan örnekleri, solucanların en çok bulunduğu gece saatlerinde alındı.",
      [
        "Blood samples were taken at night, when the worms were most numerous.",
        "The worms were most numerous in blood samples taken during the day.",
        "Blood samples were taken during the day because the worms hid at night.",
        "The worms left the blood at night and returned in the morning.",
        "Blood samples could not be taken at night.",
      ],
      "'gece saatlerinde alındı' 'were taken at night', 'solucanların en çok bulunduğu' 'when the worms were most numerous' karşılığıdır.",
    ],
    [
      "Hamile kadınların çiğ ya da az pişmiş et yemekten kaçınmaları önerilir.",
      [
        "Pregnant women are advised to avoid eating raw or undercooked meat.",
        "Pregnant women are advised to eat raw meat rather than cooked meat.",
        "Raw meat is recommended for women who want to become pregnant.",
        "Pregnant women are advised to cook meat for their families.",
        "Undercooked meat is safer than raw meat for pregnant women.",
      ],
      "'kaçınmaları önerilir' 'are advised to avoid', 'çiğ ya da az pişmiş et yemekten' 'eating raw or undercooked meat' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Epidemic typhus, a disease that causes high fever, a dark rash and often death, has followed armies, prisons and famine for centuries. In 1909, Charles Nicolle, the director of the Pasteur Institute in Tunis, made an observation that solved one of its mysteries. Patients with typhus regularly spread the disease to people around them while they waited to be admitted to hospital, and even laundry workers who handled their clothes fell ill. Yet once the patients had been admitted, bathed and dressed in clean hospital clothes, they no longer infected anyone, even though they were placed in ordinary wards. Nicolle concluded that something on the patients' bodies or clothes, rather than the patients themselves, carried the disease, and he suspected the body louse. To test the idea, he infected a chimpanzee with typhus, transferred lice from it to a healthy monkey, and showed that the second animal developed the disease. His discovery explained why typhus flourished in crowded, unwashed conditions, and it led to the widespread use of delousing during the First World War. Nicolle received the Nobel Prize in Medicine in 1928.",
      questions: [
        [
          "According to the passage, Nicolle's key observation was that patients ----.",
          [
            "stopped being infectious after they had been washed",
            "became more dangerous once they entered hospital",
            "infected only the doctors who examined them",
            "recovered quickly when they were given clean clothes",
            "caught typhus from laundry workers",
          ],
          "Metne göre hastalar yıkanıp temiz giysiler giydirildikten sonra kimseyi enfekte etmiyordu.",
        ],
        [
          "The experiment with the chimpanzee and the monkey was designed to ----.",
          [
            "show that lice could pass the disease on",
            "find a vaccine for typhus",
            "prove that monkeys never catch typhus",
            "compare the clothing of different animals",
            "test a new type of soap",
          ],
          "Bitlerin şempanzeden sağlıklı maymuna aktarılması, bitlerin hastalığı bulaştırabildiğini göstermek içindi.",
        ],
        [
          "It can be inferred from the passage that typhus was common in wartime because ----.",
          [
            "soldiers often lived in crowded and dirty conditions",
            "armies deliberately spread the disease",
            "hospitals were closed during the war",
            "chimpanzees were used in battle",
            "doctors refused to treat soldiers",
          ],
          "Keşif tifüsün kalabalık ve yıkanmamış koşullarda neden yaygınlaştığını açıklamaktadır.",
        ],
      ],
    },
    {
      text:
        "When France began building a canal across Panama in 1881, the project was overwhelmed by disease. Yellow fever and malaria killed an estimated 22,000 workers, and the effort was abandoned within a decade. In 1904, the United States took over the project and appointed William Gorgas, an army doctor, as its chief sanitary officer. Gorgas had recently helped to eliminate yellow fever from Havana after Walter Reed's commission had shown that the disease was spread by mosquitoes, and he intended to apply the same methods in Panama. At first, the canal's administrators were unconvinced; one commissioner reportedly regarded the mosquito theory as nonsense and tried to have Gorgas removed. With the support of President Theodore Roosevelt, however, Gorgas was allowed to proceed. His teams fumigated houses, installed wire screens on windows, drained swamps, cut back vegetation and spread oil on ponds where mosquito larvae lived. Containers of standing water, which the yellow fever mosquito favoured for laying its eggs, were removed or covered. By 1906, yellow fever had been eliminated from the Canal Zone, and deaths from malaria fell sharply. When the canal opened in 1914, Gorgas's work was widely recognised as one of the conditions that had made it possible.",
      questions: [
        [
          "According to the passage, the French attempt to build the canal ----.",
          [
            "failed largely because of disease",
            "was completed by 1891",
            "was supported by Gorgas",
            "lost few workers to illness",
            "was stopped by the United States",
          ],
          "Metne göre proje hastalıklar yüzünden çökmüş ve on yıl içinde terk edilmişti.",
        ],
        [
          "The commissioner mentioned in the passage ----.",
          [
            "doubted the idea that mosquitoes spread disease",
            "was the first to propose the mosquito theory",
            "had worked with Reed in Havana",
            "helped Gorgas drain the swamps",
            "became ill with yellow fever",
          ],
          "Komiser sivrisinek kuramını saçmalık olarak görmüş ve Gorgas'ı görevden aldırmaya çalışmıştı.",
        ],
        [
          "It can be understood from the passage that removing containers of water ----.",
          [
            "deprived mosquitoes of places to lay eggs",
            "was done mainly to provide drinking water",
            "increased the number of mosquitoes",
            "was opposed by President Roosevelt",
            "had no effect on yellow fever",
          ],
          "Durgun su kapları sarı humma sivrisineğinin yumurta bıraktığı yerlerdi; bunların kaldırılması üreme yerlerini ortadan kaldırdı.",
        ],
      ],
    },
    {
      text:
        "Yellow fever, a viral disease spread by mosquitoes, was one of the most feared illnesses of the tropics, capable of killing a large proportion of those it infected. In the 1920s and 1930s, researchers working for the Rockefeller Foundation set out to develop a vaccine. A crucial early step was taken by Max Theiler, a South African-born scientist, who showed that the virus could infect mice, which were far cheaper and easier to work with than the monkeys used until then. Theiler and his colleagues then tried to weaken the virus so that it would stimulate immunity without causing disease. They grew it repeatedly in cultures of animal tissue, transferring it from one culture to the next more than two hundred times. At some point, by chance, the virus underwent changes that made it much less dangerous, and the resulting strain, known as 17D, was tested in humans in 1937. It proved both safe and highly effective, and a single injection was found to give protection that lasts for many years, probably for life. Millions of doses were given during the Second World War. In 1951, Theiler received the Nobel Prize, the first ever awarded for the development of a vaccine against a virus. The 17D vaccine is still in use today.",
      questions: [
        [
          "According to the passage, Theiler's work with mice was important because ----.",
          [
            "it made research cheaper and easier",
            "mice do not catch yellow fever",
            "it proved that mosquitoes spread the virus",
            "mice were used to produce the vaccine",
            "it replaced the need for human trials",
          ],
          "Metne göre fareler o zamana kadar kullanılan maymunlardan çok daha ucuz ve kolaydı.",
        ],
        [
          "The passage suggests that the weakening of the virus ----.",
          [
            "was not fully planned or understood",
            "happened after only a few transfers",
            "was achieved by heating the virus",
            "made the vaccine dangerous",
            "required the use of monkeys",
          ],
          "'At some point, by chance' ifadesi zayıflamanın tesadüfen gerçekleştiğini gösterir.",
        ],
        [
          "It can be understood from the passage that the 17D vaccine ----.",
          [
            "has remained useful for a long time",
            "requires several injections",
            "was abandoned after the war",
            "was first tested on soldiers",
            "protects against all tropical diseases",
          ],
          "Aşı 1937'den beri kullanılmaktadır; uzun süredir yararlıdır.",
        ],
      ],
    },
    {
      text:
        "Patrick Manson, a Scottish doctor who worked for more than twenty years in southern China, is often called the father of tropical medicine. In the port city of Amoy, he treated many patients with elephantiasis, a condition in which the legs or other parts of the body become enormously swollen. It was known that the disease was associated with tiny worms in the blood, but no one understood how they spread. Manson suspected that a blood-sucking insect might be responsible. In 1877, he allowed mosquitoes to feed on his gardener, who was infected, and then dissected the insects. Inside them he found the worms, which had begun to develop. This was the first demonstration that an insect could serve as a host in which a human parasite passes part of its life. Manson also discovered that the worms appeared in the blood in large numbers only at night, when the mosquitoes that carried them were most active. He wrongly believed that people became infected by drinking water in which infected mosquitoes had died, but his central insight proved enormously influential. After returning to Britain, Manson encouraged Ronald Ross's research on malaria and helped to found the London School of Tropical Medicine in 1899.",
      questions: [
        [
          "According to the passage, Manson's experiment with his gardener showed that ----.",
          [
            "the worms could develop inside mosquitoes",
            "the gardener had caught the disease from water",
            "elephantiasis was caused by bacteria",
            "mosquitoes avoided infected people",
            "the worms could live without a host",
          ],
          "Sivrisineklerin içinde gelişmeye başlamış solucanlar bulunmuştur.",
        ],
        [
          "The discovery that the worms appeared at night ----.",
          [
            "fitted the idea that mosquitoes transmitted them",
            "proved that the worms were harmless",
            "showed that the gardener slept badly",
            "contradicted Manson's earlier theory about the role of insects",
            "explained the swelling of the legs",
          ],
          "Solucanların sivrisineklerin en etkin olduğu gece çoğalması, onları sivrisineklerin taşıdığı fikriyle uyumludur.",
        ],
        [
          "It can be understood from the passage that Manson ----.",
          [
            "was partly mistaken about how infection occurred",
            "opposed Ross's work on malaria",
            "never returned to Britain",
            "discovered the cure for elephantiasis",
            "spent his whole career in London",
          ],
          "Manson enfeksiyonun su içerek olduğunu yanlış biçimde düşünüyordu; yani kısmen yanılmıştı.",
        ],
      ],
    },
    {
      text:
        "In the early twentieth century, settlers in the Bitterroot Valley of Montana were terrified of a disease that caused high fever and a spotted rash and killed many of those it struck. In 1906, Howard Taylor Ricketts, a young researcher from the University of Chicago, began to study what was known as Rocky Mountain spotted fever. Working in a tent laboratory, he showed that the disease could be passed to guinea pigs by the bite of a particular kind of tick, and that infected female ticks could pass the organism on to their offspring through their eggs. He also observed tiny organisms, smaller than ordinary bacteria, in the blood of infected animals and in the ticks themselves. In 1909, Ricketts travelled to Mexico City to study typhus, which was then causing a severe epidemic there. He confirmed that it was spread by lice and identified similar tiny organisms in their bodies. Shortly before he was due to return home, he caught typhus himself and died in May 1910, at the age of thirty-nine. The group of organisms that cause both diseases was later named Rickettsia in his honour, and a laboratory established in the valley where he worked became a major centre for research on infectious diseases.",
      questions: [
        [
          "According to the passage, Ricketts showed that the ticks ----.",
          [
            "could pass the organism to the next generation",
            "were completely harmless to the guinea pigs he used",
            "caught the disease from lice",
            "lived only in Mexico",
            "were killed by the disease",
          ],
          "Metne göre enfekte dişi keneler organizmayı yumurtaları aracılığıyla yavrularına aktarabiliyordu.",
        ],
        [
          "The organisms Ricketts observed were unusual because they ----.",
          [
            "were smaller than typical bacteria",
            "could be seen without a microscope",
            "were found only in humans",
            "caused no illness in animals",
            "lived outside the body",
          ],
          "Gözlemlediği organizmalar sıradan bakterilerden daha küçüktü.",
        ],
        [
          "It can be inferred from the passage that Ricketts's death ----.",
          [
            "resulted from the work he was doing",
            "occurred in the Bitterroot Valley",
            "was caused by a tick bite",
            "happened before he reached Mexico",
            "led to the closure of his laboratory",
          ],
          "Tifüsü incelerken tifüse yakalanıp ölmesi ölümünün yaptığı çalışmadan kaynaklandığını gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Scabies causes intense itching, especially at night, and has been known since ancient times. ---- In 1687, however, two Italian naturalists in Livorno used a microscope to show that it was caused by a tiny mite burrowing into the skin.",
      [
        "Doctors long blamed it on unbalanced body fluids.",
        "Livorno has been an important trading port on the coast of Tuscany for centuries.",
        "Many people scratch when they feel anxious.",
        "Microscopes were improved in the seventeenth century.",
        "Itching can be relieved with cool water.",
      ],
      "Boşluktan sonra 'however' ile akarın gösterildiği anlatılır; boşluğa yüzyıllarca doktorların hastalığı vücut sıvılarındaki dengesizliğe bağladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1894, the British army doctor David Bruce was sent to Zululand to investigate a disease that was killing cattle and horses. ---- He showed that these were carried from wild animals to livestock by the bite of the tsetse fly.",
      [
        "In the blood of the sick animals he found tiny parasites called trypanosomes.",
        "Zululand is now part of South Africa.",
        "At that time, horses were widely used by the British army for transport and for cavalry.",
        "Many farmers keep cattle for milk and meat.",
        "Flies are attracted to warm places.",
      ],
      "Boşluktan sonra 'these' ile taşınan bir şeyden söz edilir; boşluğa hasta hayvanların kanında tripanozom bulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "The screwworm fly lays its eggs in wounds on cattle, and its larvae feed on living flesh. ---- In 1954, the American scientist Edward Knipling released millions of flies sterilised by radiation on the island of Curaçao, and within months the pest had disappeared.",
      [
        "Insecticides had failed to control the pest.",
        "Curaçao is a small island in the Caribbean.",
        "Many cattle are raised in Texas.",
        "Radiation is also used in hospitals.",
        "Some flies live for only a few days.",
      ],
      "Boşluktan sonra yeni bir yöntemin başarısı anlatılır; boşluğa böcek ilaçlarının zararlıyı kontrol edemediğini söyleyen cümle gelmelidir.",
    ],
    [
      "Kala-azar is a serious disease that causes fever, weight loss and swelling of the spleen. ---- The organism was named Leishmania after one of them, and it is now known to be spread by the bite of sandflies.",
      [
        "In 1903, two British doctors working separately identified the parasite that causes it.",
        "The spleen is an organ located on the upper left side of the abdomen, near the stomach.",
        "Many patients lose weight during long illnesses.",
        "Sandflies are smaller than mosquitoes.",
        "Fever is a common symptom of infection.",
      ],
      "Boşluktan sonra 'one of them' ile iki kişiden söz edilir; boşluğa 1903'te iki İngiliz doktorun paraziti ayrı ayrı tanımladığını söyleyen cümle gelmelidir.",
    ],
    [
      "Toxoplasma gondii is a parasite that can infect almost all warm-blooded animals, including humans. ---- People usually become infected by eating undercooked meat or by contact with soil or litter contaminated by cats.",
      [
        "Its life cycle can only be completed inside the cat family.",
        "Many people keep dogs as pets.",
        "Warm-blooded animals keep their body temperature constant whatever the weather.",
        "Meat is an important source of iron.",
        "Some parasites live in water.",
      ],
      "Boşluktan sonra kedilerin kirlettiği toprak ya da kumdan söz edilir; boşluğa parazitin yaşam döngüsünü yalnızca kedigiller içinde tamamlayabildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Hydatid disease is caused by the larvae of a small tapeworm that lives in the intestines of dogs. ---- Inside the human body, the larvae slowly form fluid-filled cysts, usually in the liver or lungs, which may grow for years before causing symptoms.",
      [
        "People can become infected by swallowing eggs passed in dog faeces.",
        "Dogs have lived alongside people for many thousands of years.",
        "The liver performs hundreds of different jobs, including storing energy.",
        "Many families keep dogs as pets, especially in the countryside.",
        "Sheep farming is an important industry in many parts of the world.",
      ],
      "Boşluktan sonra larvaların insan vücudunda kist oluşturduğu anlatılır; boşluğa insanların köpek dışkısıyla atılan yumurtaları yutarak enfekte olduğunu söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "In 1939, the Swiss chemist Paul Müller discovered that DDT was a powerful insecticide.",
        "In the 1940s, armies used it to kill the lice that spread typhus among soldiers and refugees.",
        "Switzerland remained neutral during the war.",
        "Müller received the Nobel Prize in 1948 for his discovery.",
        "Later, concerns about its effects on wildlife led many countries to ban its use in farming.",
      ],
      odd: 2,
      why: "Parça Paul Müller ve DDT'yi anlatır. İsviçre'nin savaş sırasında tarafsız kaldığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In October 1977, a hospital cook named Ali Maow Maalin fell ill in the Somali town of Merca.",
        "He turned out to be the last person in the world to catch smallpox naturally.",
        "Somalia has the longest coastline in mainland Africa.",
        "He recovered and later worked as a volunteer in the campaign to eradicate polio.",
        "In 1980, the World Health Organization declared that smallpox had been eradicated.",
      ],
      odd: 2,
      why: "Parça son doğal çiçek vakasını anlatır. Somali'nin Afrika anakarasındaki en uzun kıyı şeridine sahip olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "The pork tapeworm can infect people who eat undercooked pork containing its larvae.",
        "If its eggs are swallowed, the larvae may form cysts in the muscles and brain.",
        "Pork is the most widely eaten meat in many countries.",
        "Cysts in the brain are a leading cause of epilepsy in some parts of the world.",
        "Cooking meat thoroughly and improving sanitation can prevent infection.",
      ],
      odd: 2,
      why: "Parça domuz tenyasını anlatır. Domuz etinin pek çok ülkede en çok tüketilen et olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Elizabeth Kenny was an Australian nurse who developed a new way of treating polio.",
        "At the time, doctors usually kept paralysed limbs still in splints for long periods.",
        "Kenny instead used hot cloths to relax the muscles and gentle exercises to keep them working.",
        "Australia has many unique animals, such as the kangaroo.",
        "Although doctors were at first sceptical, her methods influenced modern physiotherapy.",
      ],
      odd: 3,
      why: "Parça Elizabeth Kenny'nin çocuk felci tedavisini anlatır. Avustralya'nın kanguru gibi kendine özgü hayvanlarından söz eden IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Pinworms are small white worms that are among the most common parasites in children.",
        "Washing machines became common in homes in the 1950s.",
        "They cause itching around the anus, especially at night, when the females lay their eggs.",
        "The eggs are easily spread on hands, bedding and toys.",
        "Doctors usually recommend treating the whole family at the same time.",
      ],
      odd: 1,
      why: "Parça kıl kurtlarını anlatır. Çamaşır makinelerinin 1950'lerde evlerde yaygınlaştığını söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Bedbugs had become rare in many wealthy countries by the middle of the twentieth century.",
        "Since the late 1990s, however, they have returned in large numbers.",
        "Increased international travel and resistance to insecticides are thought to be responsible.",
        "Their bites can cause itching and anxiety, although they are not known to spread disease.",
        "Many hotels now offer free breakfast to their guests.",
      ],
      odd: 4,
      why: "Parça tahtakurularının geri dönüşünü anlatır. Pek çok otelin konuklarına ücretsiz kahvaltı sunduğunu söyleyen V. cümle konu dışıdır.",
    },
  ],
};
