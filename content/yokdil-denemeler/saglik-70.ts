import type { YokdilDeneme } from "./types";

export const SAGLIK_70: YokdilDeneme = {
  no: 70,
  field: "saglik",
  vocab: [
    [
      "The researcher ---- a hormone in the lizard's saliva that was similar to one found in the human gut.",
      ["identified", "abandoned", "prohibited", "concealed", "inherited"],
      "Araştırmacının kertenkelenin salyasında insan bağırsağındakine benzer bir hormonu 'tanımladığı' (identified) anlatılır.",
    ],
    [
      "The rats are trained to ---- the smell of the bacteria that cause tuberculosis.",
      ["recognise", "ignore", "produce", "destroy", "remember to avoid"],
      "Sıçanların verem bakterilerinin kokusunu 'tanımak' (recognise) üzere eğitildiği anlatılır.",
    ],
    [
      "Mussels can ---- firmly to wet rocks even when they are struck by powerful waves.",
      ["attach", "object", "belong", "refer", "apply for"],
      "Midyelerin güçlü dalgalar çarpsa bile ıslak kayalara sıkıca 'tutunabildiği' (attach) anlatılır.",
    ],
    [
      "The pattern on the surface makes it difficult for bacteria to form ----.",
      ["colonies", "opinions", "agreements", "speeches", "complaints"],
      "Yüzeydeki desenin bakterilerin 'koloniler' (colonies) oluşturmasını zorlaştırdığı anlatılır.",
    ],
    [
      "The quills enter the skin easily but are very hard to ----.",
      ["remove", "notice", "describe", "imagine", "admire"],
      "Okların deriye kolayca girdiği ama 'çıkarılmasının' (remove) çok zor olduğu anlatılır.",
    ],
    [
      "The dog kept ---- at a spot on its owner's leg, which turned out to be a cancer.",
      ["sniffing", "giving up", "running out", "looking after", "putting off"],
      "Köpeğin sahibinin bacağındaki bir noktayı sürekli 'kokladığı' (sniffing) ve bunun kanser çıktığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "By the time the drug was approved, the scientist ---- on the lizard hormone for more than a decade.",
      ["had been working", "works", "has been working", "will be working", "is working"],
      "Geçmişteki bir andan önce süregelmiş eylem: 'had been working'.",
    ],
    [
      "If the researcher had not studied the venom of the lizard, the drug ---- so soon.",
      ["might not have been discovered", "will not be discovered", "is not discovered", "had not been discovered", "would not be discovered"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip), edilgen: 'might not have been discovered'.",
    ],
    [
      "The rats ---- with small pieces of banana when they identify a positive sample.",
      ["are rewarded", "reward", "have rewarded", "rewarding", "are rewarding"],
      "Sıçanlar ödüllendirilir; edilgen geniş zaman: 'are rewarded'.",
    ],
    [
      "---- the substance worked well in animals, it failed to help patients in later trials.",
      ["Although", "Because", "Unless", "Since", "So that"],
      "Maddenin hayvanlarda işe yaraması ile hastalarda başarısız olması zıttır: 'Although'.",
    ],
    [
      "The engineer, ---- company developed the patterned surface, was inspired by sharks.",
      ["whose", "who", "which", "whom", "where"],
      "Mühendisin şirketi; iyelik bildiren ilgi zamiri: 'whose'.",
    ],
    [
      "Only after the dog had repeatedly sniffed the mole ---- the woman go to a doctor.",
      ["did", "had", "was", "has", "does"],
      "'Only after' ile devrik yapı, geçmiş zaman yardımcı fiili: 'did'.",
    ],
    [
      "The rats work in laboratories in Tanzania, ---- they test samples from local clinics.",
      ["where", "which", "when", "whose", "that"],
      "'laboratories in Tanzania' yer bildirir; örnekleri orada test ederler: 'where'.",
    ],
    [
      "The rougher the surface was, ---- bacteria could grow on it.",
      ["the fewer", "the fewest", "fewer", "fewest", "so few"],
      "'The rougher ..., the fewer ...' paralel yapısı: 'the fewer'.",
    ],
    [
      "The doctors recommended that the glue ---- tested on more patients.",
      ["be", "is", "was", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'be tested'.",
    ],
    [
      "The rat is said ---- more than a hundred landmines during its career.",
      ["to have found", "finding", "to be finding", "found", "having find"],
      "Geçmişe ait durum için mastarın geçmiş biçimi: 'to have found'.",
    ],
    [
      "The quill has backward-facing barbs ---- it stays firmly in the skin of an attacker.",
      ["so that", "unless", "although", "whereas", "as if"],
      "Okun geriye dönük dikenlerinin amacı saldırganın derisinde sıkıca kalmasıdır: 'so that'.",
    ],
    [
      "The researchers had the samples ---- by rats before testing them with a microscope.",
      ["checked", "check", "checking", "to check", "checks"],
      "'have sth done' ettirgen edilgen yapısında geçmiş ortaç: 'checked'.",
    ],
    [
      "Had the dog not noticed the tumour, the woman ---- to see a doctor.",
      ["might not have gone", "goes", "will go", "had gone", "is going"],
      "Devrik üçüncü tip koşul cümlesi: 'might not have gone'.",
    ],
    [
      "Neither the dogs nor their trainer ---- why some samples smelled different.",
      ["knew", "knowing", "to know", "have known to", "know to"],
      "'Neither ... nor' yapısında geçmiş zaman: 'knew'.",
    ],
  ],
  cloze: [
    {
      text:
        "The Gila monster is a large, slow-moving lizard that lives in the deserts of the south-western United States and northern Mexico. It eats only a few times a year, {1} it can consume up to a third of its body weight in a single meal. In the early 1990s, John Eng, an endocrinologist at a veterans' hospital in New York, was searching for new hormones in the venom of various animals. In 1992, he discovered in the Gila monster's saliva a substance, which he named exendin-4, that was similar to a human hormone called GLP-1. In people, GLP-1 is released by the gut after a meal, {2} it stimulates the pancreas to produce insulin and makes people feel full. Researchers had already tried to use the human hormone to treat diabetes, {3} it broke down in the body within minutes. The lizard version, however, lasted for hours. Eng patented his discovery, {4} a synthetic form of it, called exenatide, was approved for the treatment of type 2 diabetes in 2005. Its success encouraged the development of longer-lasting drugs based on GLP-1, which were later found to cause significant weight loss, {5} demand for them has grown enormously around the world.",
      blanks: [
        [
          "(21) ----",
          ["but", "and", "so", "because", "unless"],
          "Yılda yalnızca birkaç kez yemesi ile tek öğünde vücut ağırlığının üçte birini yiyebilmesi zıttır: 'but'.",
        ],
        [
          "(22) ----",
          ["and", "but", "or", "unless", "until"],
          "Hormonun salınması ve pankreası uyarması birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["but", "and", "so", "because", "since"],
          "İnsan hormonunu kullanmayı denemeleri ile hormonun dakikalar içinde parçalanması zıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["and", "but", "or", "unless", "although"],
          "Patent alması ve sentetik biçiminin onaylanması birbirini izler: 'and'.",
        ],
        [
          "(25) ----",
          ["and", "but", "or", "unless", "until"],
          "İlaçların kilo kaybına yol açması ve onlara olan talebin büyük ölçüde artması birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "The African giant pouched rat is about the size of a small cat and has an extremely sensitive sense of smell. In the 1990s, Bart Weetjens, a Belgian engineer who had kept rats as a child, wondered whether they could be trained to detect landmines, {1} he set up an organisation to test the idea, later based at an agricultural university in Tanzania. The rats proved to be ideal: they are light enough not to set off mines, {2} they can search an area of two hundred square metres in about twenty minutes, a task that would take a person with a metal detector several days. The organisation later began training rats to detect tuberculosis, a disease that kills more than a million people a year, {3} it is often missed by the microscope tests used in many poor countries. Samples of sputum, the thick fluid coughed up from the lungs, are collected from clinics and placed under a row of holes in a cage. A rat moves along the row, sniffing each one, {4} it pauses at those that smell of the bacteria and is rewarded with food. A rat can check a hundred samples in about twenty minutes. Samples identified by the rats are then tested again in a laboratory, {5} in this way thousands of additional cases have been found that the clinics had missed.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "or", "unless", "although"],
          "Fikri merak etmesi ve bir kuruluş kurması birbirini izler: 'and'.",
        ],
        [
          "(27) ----",
          ["and", "but", "or", "unless", "until"],
          "Mayınları patlatmayacak kadar hafif olmaları ve geniş alanı hızla taramaları birbirine eklenir: 'and'.",
        ],
        [
          "(28) ----",
          ["and", "but", "or", "unless", "until"],
          "Veremin çok kişiyi öldürmesi ve testlerde gözden kaçması birbirine eklenir: 'and'.",
        ],
        [
          "(29) ----",
          ["and", "but", "or", "unless", "although"],
          "Her birini koklaması ve bakteri kokanlarda durması birbirini izler: 'and'.",
        ],
        [
          "(30) ----",
          ["and", "but", "or", "unless", "until"],
          "Örneklerin yeniden test edilmesi ve binlerce ek vaka bulunması birbirini izler: 'and'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the human hormone broke down within minutes, ----.",
      [
        "the version found in the lizard lasted for hours",
        "hormones are chemicals",
        "lizards live in deserts",
        "diabetes is common",
        "researchers had already tried to use it as a treatment for patients with type 2 diabetes",
      ],
      "'Although' zıtlık ister: insan hormonu dakikalar içinde parçalansa da kertenkeledeki biçimi saatlerce dayandı.",
    ],
    [
      "If the rats were heavier, ----.",
      [
        "they might set off the mines they were searching for",
        "rats eat bananas",
        "Tanzania is in Africa",
        "mines are dangerous",
        "a person with a metal detector would need several days to search the same area",
      ],
      "İkinci tip koşul: sıçanlar daha ağır olsaydı aradıkları mayınları patlatabilirlerdi.",
    ],
    [
      "----, mussels produce a sticky substance that hardens under water.",
      [
        "To hold on to rocks in the sea",
        "Although mussels are small",
        "Unless the water is warm",
        "Since mussels can be eaten",
        "While surgeons were looking for better ways to close wounds inside the body",
      ],
      "Denizdeki kayalara tutunmak için midyeler su altında sertleşen yapışkan bir madde üretir.",
    ],
    [
      "The patterned surface reduces infections in hospitals ----.",
      [
        "without using chemicals that kill bacteria",
        "because hospitals are large",
        "unless patients are ill",
        "so that sharks can swim",
        "while the engineer was studying the growth of algae on the bottom of navy ships",
      ],
      "Desenli yüzey bakterileri öldüren kimyasallar kullanmadan hastanelerdeki enfeksiyonları azaltır.",
    ],
    [
      "Since the substance in the bat's saliva dissolves blood clots, ----.",
      [
        "researchers hoped it could be used to treat strokes",
        "bats fly at night",
        "blood is red",
        "saliva contains water",
        "vampire bats feed on the blood of cattle and horses in Central and South America",
      ],
      "'Since' neden bildirir: yarasanın salyasındaki madde kan pıhtılarını çözdüğünden araştırmacılar onun felç tedavisinde kullanılabileceğini umdu.",
    ],
    [
      "Not only do the barbs help the quill enter the skin, ----.",
      [
        "but they also make it difficult to pull out",
        "and porcupines are rodents",
        "since quills are sharp",
        "so animals avoid them",
        "unless the researchers had measured the force needed to push quills into muscle tissue",
      ],
      "'Not only ... but also' yapısı tamamlanır: dikenler okun deriye girmesine yardım etmekle kalmaz, çekip çıkarılmasını da zorlaştırır.",
    ],
    [
      "Once the dogs had been trained on samples from patients, ----.",
      [
        "they could identify the disease with surprising accuracy",
        "dogs like walks",
        "samples are kept cold",
        "patients visit hospitals",
        "a woman had written to a medical journal about her own dog's behaviour many years earlier",
      ],
      "Köpekler hastalardan alınan örneklerle eğitildikten sonra hastalığı şaşırtıcı bir doğrulukla tanıyabildi.",
    ],
    [
      "Unless the rats' results are confirmed in a laboratory, ----.",
      [
        "patients are not given a diagnosis of tuberculosis",
        "rats are clever",
        "laboratories are expensive",
        "tuberculosis is common",
        "they would not have been trained to detect landmines in several countries in Africa and Asia",
      ],
      "'Unless' olumsuz koşul: sıçanların sonuçları laboratuvarda doğrulanmadıkça hastalara verem tanısı konmaz.",
    ],
    [
      "The new drugs proved so effective at reducing appetite ----.",
      [
        "that demand for them soon exceeded supply",
        "although diets are difficult",
        "because the lizard was slow",
        "unless patients were hungry",
        "while the scientist was searching for hormones in the venom of other animals",
      ],
      "Yeni ilaçlar iştahı azaltmada o kadar etkili oldu ki onlara olan talep kısa sürede arzı aştı.",
    ],
    [
      "Even though the substance from the bat seemed promising, ----.",
      [
        "it failed to help patients in large clinical trials",
        "bats are mammals",
        "strokes are serious",
        "trials take time",
        "it was named after a famous character from a novel about a vampire",
      ],
      "'Even though' zıtlık ister: yarasadan elde edilen madde umut verici görünse de büyük klinik deneylerde hastalara yardım edemedi.",
    ],
    [
      "As the glue works even on wet surfaces, ----.",
      [
        "it could be used to seal wounds inside the body",
        "water is wet",
        "glue is sticky",
        "mussels live in the sea",
        "the researchers had studied the chemistry of mussels for many years before making it",
      ],
      "Yapıştırıcı ıslak yüzeylerde bile işe yaradığından vücut içindeki yaraları kapatmak için kullanılabilir.",
    ],
  ],
  enTr: [
    [
      "The lizard eats only a few times a year.",
      [
        "Kertenkele yılda yalnızca birkaç kez yemek yer.",
        "Kertenkele günde birkaç kez yemek yer.",
        "Yılda birkaç kez yemek yiyen kertenkele, kış boyunca hiç uyumaz.",
        "Yıl kertenkeleyi birkaç kez yer.",
        "Kertenkele hiç yemek yemez.",
      ],
      "'The lizard eats' 'kertenkele yemek yer', 'only a few times a year' 'yılda yalnızca birkaç kez' karşılığıdır.",
    ],
    [
      "A rat can check a hundred samples in about twenty minutes.",
      [
        "Bir sıçan yaklaşık yirmi dakikada yüz örneği kontrol edebilir.",
        "Bir sıçan yaklaşık yüz dakikada yirmi örneği kontrol edebilir.",
        "Yüz örneği kontrol eden bir sıçan yirmi dakika dinlenmek zorundadır.",
        "Yüz örnek bir sıçanı yirmi dakikada kontrol eder.",
        "Sıçanlar örnekleri kontrol edemez.",
      ],
      "'A rat can check a hundred samples' 'bir sıçan yüz örneği kontrol edebilir', 'in about twenty minutes' 'yaklaşık yirmi dakikada' karşılığıdır.",
    ],
    [
      "The glue hardens when it comes into contact with water.",
      [
        "Yapıştırıcı suyla temas ettiğinde sertleşir.",
        "Yapıştırıcı suyla temas ettiğinde erir.",
        "Sudan uzak tutulan yapıştırıcı hemen sertleşir.",
        "Su yapıştırıcıyla temas edince sertleşir.",
        "Yapıştırıcı hiç sertleşmez.",
      ],
      "'The glue hardens' 'yapıştırıcı sertleşir', 'when it comes into contact with water' 'suyla temas ettiğinde' karşılığıdır.",
    ],
    [
      "Bacteria find it difficult to settle on the patterned surface.",
      [
        "Bakteriler desenli yüzeye yerleşmekte zorlanır.",
        "Bakteriler desenli yüzeye kolayca yerleşir.",
        "Desenli yüzey bakterilerin hızla çoğalmasını sağlar.",
        "Desenli yüzey bakterilere yerleşir.",
        "Yüzeyde hiç desen yoktur.",
      ],
      "'Bacteria find it difficult to settle' 'bakteriler yerleşmekte zorlanır', 'on the patterned surface' 'desenli yüzeye' karşılığıdır.",
    ],
    [
      "The quill needs less force to enter the skin than a needle of the same size.",
      [
        "Ok, deriye girmek için aynı boyuttaki bir iğneden daha az kuvvete ihtiyaç duyar.",
        "Ok, deriye girmek için aynı boyuttaki bir iğneden daha fazla kuvvete ihtiyaç duyar.",
        "Aynı boyuttaki bir iğne, deriye hiç kuvvet uygulamadan girer.",
        "Deri, oka iğneden daha az kuvvet uygular.",
        "Ok deriye giremez.",
      ],
      "'The quill needs less force to enter the skin' 'ok deriye girmek için daha az kuvvete ihtiyaç duyar', 'than a needle of the same size' 'aynı boyuttaki bir iğneden' karşılığıdır.",
    ],
    [
      "The dogs are trained to sit down when they detect the smell.",
      [
        "Köpekler, kokuyu algıladıklarında oturmak üzere eğitilir.",
        "Köpekler, kokuyu algılamadıklarında havlamak üzere eğitilir.",
        "Kokuyu algılayan köpekler, hemen koşarak uzaklaşır.",
        "Koku köpekleri oturmak üzere eğitir.",
        "Köpekler eğitilemez.",
      ],
      "'The dogs are trained to sit down' 'köpekler oturmak üzere eğitilir', 'when they detect the smell' 'kokuyu algıladıklarında' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Kertenkelenin salyasında insan hormonuna benzer bir madde bulundu.",
      [
        "A substance similar to a human hormone was found in the lizard's saliva.",
        "A human hormone was found to be similar to the lizard's skin.",
        "No substance similar to human hormones has ever been found in lizards.",
        "The lizard found a hormone in human saliva.",
        "The lizard has no saliva.",
      ],
      "'Bir madde bulundu' 'a substance was found', 'kertenkelenin salyasında insan hormonuna benzer' 'similar to a human hormone in the lizard's saliva' karşılığıdır.",
    ],
    [
      "Sıçanlar, mayınları patlatmayacak kadar hafiftir.",
      [
        "The rats are light enough not to set off the mines.",
        "The mines are light enough not to harm the rats.",
        "The rats are so heavy that they often set off the mines.",
        "The mines set off the rats.",
        "Rats cannot find mines.",
      ],
      "'Sıçanlar ... kadar hafiftir' 'the rats are light enough', 'mayınları patlatmayacak' 'not to set off the mines' karşılığıdır.",
    ],
    [
      "Araştırmacılar, midyelerin kayalara nasıl tutunduğunu inceledi.",
      [
        "The researchers studied how mussels attach themselves to rocks.",
        "The mussels studied how researchers attach rocks.",
        "The researchers studied why rocks are covered with mussels in winter.",
        "The rocks attached the researchers.",
        "Nobody studied mussels.",
      ],
      "'Araştırmacılar inceledi' 'the researchers studied', 'midyelerin kayalara nasıl tutunduğunu' 'how mussels attach themselves to rocks' karşılığıdır.",
    ],
    [
      "Desen, köpekbalığı derisindeki küçük pullardan esinlenmiştir.",
      [
        "The pattern was inspired by the tiny scales on shark skin.",
        "Shark skin was inspired by the tiny scales of the pattern.",
        "The pattern was copied from the large fins of sharks.",
        "The scales inspired the shark.",
        "Sharks have no scales.",
      ],
      "'Desen esinlenmiştir' 'the pattern was inspired', 'köpekbalığı derisindeki küçük pullardan' 'by the tiny scales on shark skin' karşılığıdır.",
    ],
    [
      "Madde, büyük klinik deneylerde hastalara yardım etmedi.",
      [
        "The substance did not help patients in large clinical trials.",
        "The patients did not help the substance in small trials.",
        "The substance helped every patient in the large clinical trials.",
        "The trials helped the substance.",
        "There were no trials.",
      ],
      "'Madde hastalara yardım etmedi' 'the substance did not help patients', 'büyük klinik deneylerde' 'in large clinical trials' karşılığıdır.",
    ],
    [
      "Köpeği sürekli olarak bacağındaki bir beni kokluyordu.",
      [
        "Her dog kept sniffing at a mole on her leg.",
        "She kept sniffing at a mole on her dog's leg.",
        "Her dog refused to come near the mole on her leg.",
        "The mole kept sniffing her dog.",
        "She had no dog.",
      ],
      "'Köpeği sürekli olarak kokluyordu' 'her dog kept sniffing', 'bacağındaki bir beni' 'at a mole on her leg' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Mussels are small shellfish that live on rocky coasts, where they must hold on to wet surfaces while being struck by waves. They do this by producing threads tipped with tiny pads of a sticky material, which hardens within minutes under water. Most man-made glues fail when they are wet, so scientists have long been interested in how mussels manage it. Research in the 1980s and later showed that the mussels' adhesive proteins contain large amounts of an unusual amino acid called DOPA, which can bond strongly to many different surfaces, including rock, metal, wood and even Teflon, and which helps the material to harden. Doctors were particularly interested because closing wounds inside the body is difficult. Stitches and staples can damage delicate tissues, such as blood vessels, nerves or the walls of a baby's heart, and most existing surgical glues either do not stick well to wet, moving tissue or can be toxic. Since the early 2000s, research teams in several countries have developed adhesives that copy the chemistry of mussel proteins. Some are made by attaching DOPA-like groups to synthetic polymers, while others use proteins produced by genetically modified bacteria. In tests on animals, such glues have been used to seal holes in blood vessels and in the membrane that surrounds the foetus during surgery in the womb, and to fix tiny pieces of broken bone. Some of these materials are now being tested in people, although researchers say that more work is needed to ensure that they are safe and break down naturally in the body.",
      questions: [
        [
          "According to the passage, scientists have been interested in mussels because ----.",
          [
            "their adhesive works on wet surfaces",
            "they are easy to farm",
            "they can survive out of water",
            "they produce a substance that kills bacteria in wounds",
            "their shells are very strong",
          ],
          "Metne göre insan yapımı yapıştırıcıların çoğu ıslakken başarısız olurken midyeler ıslak yüzeylere tutunabilir.",
        ],
        [
          "The writer mentions stitches and staples in order to show that ----.",
          [
            "existing methods can damage delicate tissues",
            "they are better than glue",
            "they are made from mussels",
            "surgeons prefer them",
            "they are cheap",
          ],
          "Dikiş ve zımbaların kan damarları ya da sinirler gibi hassas dokulara zarar verebildiğini gösterir.",
        ],
        [
          "It can be understood from the passage that mussel-inspired glues ----.",
          [
            "show promise but still need further testing",
            "are already used in every hospital",
            "are toxic to animals",
            "do not stick to bone",
            "were abandoned in the 1980s",
          ],
          "Hayvan deneylerinde umut verici sonuçlar alındı, ancak güvenlik için daha fazla çalışma gerekiyor.",
        ],
      ],
    },
    {
      text:
        "In 2002, Anthony Brennan, a materials engineer at the University of Florida, was asked by the United States Navy to find a way of preventing algae and barnacles from growing on the bottoms of ships, which slows them down and increases fuel costs. During a visit to a naval base, he noticed that slow-moving sharks, unlike whales, are rarely covered with such organisms. Shark skin is made up of millions of tiny, tooth-like scales arranged in a diamond pattern with ridges on them. Brennan designed a plastic surface with a similar microscopic pattern, and he found that it reduced the settlement of algae by about eighty-five per cent. The pattern, it turned out, was also difficult for bacteria to colonise. Bacteria that land on a surface usually begin to form a biofilm, a slimy community that protects them and makes them harder to remove or kill, and the pattern seems to interfere with this process. The surface was later marketed for use in hospitals, on objects that are frequently touched, such as bed rails, door handles and medical devices. In laboratory tests, it reduced the growth of several dangerous bacteria, including the antibiotic-resistant strain known as MRSA, by large amounts. An important advantage is that it works physically, without chemicals that kill bacteria, so bacteria are unlikely to develop resistance to it. However, critics point out that most of the evidence comes from laboratory studies, and that it is not yet clear how much such surfaces reduce infections among patients in real hospitals.",
      questions: [
        [
          "According to the passage, Brennan was originally trying to ----.",
          [
            "stop organisms growing on ships",
            "reduce infections in hospitals",
            "study the behaviour of sharks",
            "design faster submarines for the navy using the shape of whales",
            "make new antibiotics",
          ],
          "Metne göre Donanma için gemi altlarında yosun ve midye türlerinin büyümesini önlemenin bir yolunu arıyordu.",
        ],
        [
          "The pattern is thought to work by ----.",
          [
            "making it hard for bacteria to form biofilms",
            "releasing chemicals",
            "heating the surface",
            "killing sharks",
            "attracting bacteria",
          ],
          "Desen bakterilerin biyofilm oluşturma sürecini engelliyor gibi görünmektedir.",
        ],
        [
          "It can be understood from the passage that one weakness of the evidence is that ----.",
          [
            "it comes mainly from laboratories rather than hospitals",
            "it is too old",
            "it was collected by the navy",
            "it shows that bacteria become resistant",
            "it concerns only whales",
          ],
          "Kanıtların çoğu laboratuvar çalışmalarından gelir; gerçek hastanelerdeki etkisi henüz açık değildir.",
        ],
      ],
    },
    {
      text:
        "Vampire bats, which live in Central and South America, feed only on blood, usually from cattle, horses and other animals. Using sharp teeth, a bat makes a small cut in the skin of a sleeping animal and then laps up the blood that flows out. To keep the blood flowing for twenty minutes or more, the bat's saliva contains several substances that prevent clotting. One of these, discovered in the late 1980s, was named draculin, after the vampire in Bram Stoker's novel. Another is an enzyme that activates a natural process in the blood which breaks down clots. Researchers became interested in this enzyme because most strokes are caused by a blood clot blocking an artery in the brain. The existing clot-dissolving drug had to be given within a few hours of a stroke, and it could cause dangerous bleeding in the brain. The bat enzyme seemed to work only in the presence of a clot and to be less likely to cause bleeding, so it was hoped that it could be used later after a stroke and more safely. A synthetic version, called desmoteplase, was produced, and early trials in the 2000s gave encouraging results. However, larger trials involving hundreds of patients found that it did not improve recovery compared with a placebo, and its development was eventually stopped. Scientists say that the story is a reminder that a drug that works well in small studies may fail in larger ones, although research on substances from bat saliva continues.",
      questions: [
        [
          "According to the passage, the bat's saliva contains substances that ----.",
          [
            "keep blood from clotting",
            "put animals to sleep",
            "make the bat's teeth sharp",
            "help the bat to digest the blood of large animals more quickly",
            "kill bacteria",
          ],
          "Metne göre salyada pıhtılaşmayı önleyen birkaç madde bulunur.",
        ],
        [
          "Researchers hoped the bat enzyme would be better than the existing drug because it ----.",
          [
            "seemed less likely to cause bleeding and could perhaps be given later",
            "was cheaper",
            "could cure all strokes",
            "came from the brain",
            "was easier to produce",
          ],
          "Yalnızca pıhtı varlığında çalışıyor gibi görünüyordu; kanamaya yol açma olasılığı daha düşük ve daha geç verilebilirdi.",
        ],
        [
          "It can be understood from the passage that desmoteplase ----.",
          [
            "failed in larger trials despite early success",
            "is now widely used",
            "was never tested in people",
            "caused bats to stop feeding",
            "was discovered by Bram Stoker",
          ],
          "Erken denemeler umut verici olsa da büyük denemelerde plaseboya göre iyileşmeyi artırmadı.",
        ],
      ],
    },
    {
      text:
        "The North American porcupine is covered with around thirty thousand quills, which it uses for defence. Anyone who has tried to remove quills from a dog's nose knows that they are easy to push in but very difficult to pull out. In 2012, a team led by Jeffrey Karp, a bioengineer at a Boston hospital, published a study explaining why. Each quill has a tip covered with hundreds of microscopic barbs that point backwards. The researchers measured the forces involved by pushing quills into pieces of animal muscle and pulling them out again. They found that the barbs reduced the force needed to push the quill in by more than half compared with a smooth quill, probably because they concentrate the force on small areas, rather like the teeth of a serrated knife. At the same time, once the quill was inside the tissue, the barbs caught on it and roughly quadrupled the force needed to remove it. The researchers suggested that the design could be copied to produce medical devices. Needles that penetrate the skin more easily might cause less pain and tissue damage. Barbed patches or staples, meanwhile, could hold tissues together firmly after surgery, or keep a patch attached to the skin to deliver drugs. In early experiments, they produced plastic patches covered with tiny barbed spikes and found that they gripped tissue more strongly than smooth versions. Similar ideas have been explored for devices inspired by the spiny-headed worm, a parasite that attaches itself to the intestines of fish.",
      questions: [
        [
          "According to the passage, the barbs on the quill ----.",
          [
            "make it easier to push in and harder to pull out",
            "make it harder to push in",
            "fall off when the quill enters the skin",
            "are found only on the quills of young porcupines that live in North America",
            "are smooth",
          ],
          "Metne göre dikenler okun deriye girmesi için gereken kuvveti azaltır, çıkarmak için gereken kuvveti ise artırır.",
        ],
        [
          "The writer compares the barbs to the teeth of a serrated knife in order to explain ----.",
          [
            "how they reduce the force needed to enter tissue",
            "why porcupines eat meat",
            "how quills are made",
            "why dogs are attacked",
            "why quills break",
          ],
          "Kuvveti küçük alanlarda yoğunlaştırarak deriye girmeyi kolaylaştırmalarını açıklar.",
        ],
        [
          "It can be understood from the passage that the research might lead to ----.",
          [
            "less painful needles and stronger surgical patches",
            "new porcupine farms",
            "the end of surgery",
            "better treatments for dogs only",
            "smoother needles",
          ],
          "Deriye daha kolay giren iğneler ve dokuları sıkıca tutan yamalar geliştirilebilir.",
        ],
      ],
    },
    {
      text:
        "In 1989, two doctors in London wrote a short letter to a medical journal describing an unusual case. A woman had come to see them because her dog kept sniffing at a mole on her leg and once even tried to bite it off. The mole turned out to be a melanoma, a dangerous form of skin cancer, and it was removed before it had spread. The letter attracted little attention at first, but over the following years other people reported similar experiences, and researchers began to investigate whether dogs could really detect disease. Cancers and some other illnesses are thought to change the mixture of chemicals that the body releases into breath, urine and sweat, and dogs, whose sense of smell is many thousands of times more sensitive than ours, may be able to recognise these changes. In 2004, a study in Britain found that dogs trained on urine samples could identify those from patients with bladder cancer more often than would be expected by chance. One of the researchers, Claire Guest, later set up a charity to train dogs to detect diseases. She has said that one of her own dogs, Daisy, repeatedly nudged her chest, which led to the discovery of an early breast cancer. Dogs have since been trained to detect malaria, Parkinson's disease and COVID-19, and to warn people with diabetes when their blood sugar is falling dangerously low. However, the accuracy of dogs varies, and they need long training, so many scientists hope that the research will help to identify the chemicals involved, which could then be detected by electronic devices.",
      questions: [
        [
          "According to the passage, the 1989 letter described a dog that ----.",
          [
            "repeatedly sniffed a mole that turned out to be cancer",
            "had cancer itself",
            "was trained to detect disease",
            "worked in a London hospital",
            "bit a doctor",
          ],
          "Metne göre köpek sahibinin bacağındaki bir beni sürekli koklamış; ben melanom çıkmıştır.",
        ],
        [
          "Dogs may be able to detect disease because ----.",
          [
            "illnesses change the chemicals the body releases",
            "sick people behave differently",
            "dogs can see tumours",
            "patients smell of medicine",
            "dogs are often ill",
          ],
          "Kanser ve bazı hastalıklar bedenin nefes, idrar ve tere saldığı kimyasalların karışımını değiştirir.",
        ],
        [
          "It can be understood from the passage that many scientists hope eventually to ----.",
          [
            "develop electronic devices that detect the same chemicals",
            "replace doctors with dogs",
            "stop training dogs",
            "use dogs only for malaria",
            "breed dogs with a weaker sense of smell",
          ],
          "İlgili kimyasalları belirleyip onları elektronik cihazlarla algılamayı umuyorlar.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "When a tick bites, it may stay attached to its host for several days while it feeds. ---- Researchers are studying these substances as possible treatments for conditions involving inflammation and blood clots.",
      [
        "Its saliva contains a mixture of proteins that stop the blood from clotting and prevent the host from feeling pain or itching.",
        "Ticks are related to spiders.",
        "Many people walk in forests.",
        "Some ticks can spread serious diseases to humans.",
        "Ticks are very small.",
      ],
      "Boşluk 'bu maddeler' ifadesine bağlanan bir cümle gerektirir; boşluğa salyasının kanın pıhtılaşmasını önleyen ve konakçının acı ya da kaşıntı hissetmesini engelleyen proteinler içerdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In 2017, researchers described a 'tough adhesive' inspired by the defensive slime produced by a type of slug. ---- In tests, it was used to seal a hole in a pig's heart that was beating normally.",
      [
        "Like the slime, it stuck strongly to wet surfaces and remained flexible as the tissue moved.",
        "Slugs are common in gardens.",
        "Pigs are farm animals.",
        "Some slugs are brightly coloured.",
        "Hearts beat about seventy times a minute.",
      ],
      "Boşluk testteki başarıyı açıklayan bir cümle gerektirir; boşluğa yapıştırıcının da tıpkı salgı gibi ıslak yüzeylere güçlü biçimde yapıştığını ve doku hareket ederken esnek kaldığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 2016, a giant pouched rat named Magawa began working in Cambodia, searching for landmines left from decades of conflict. ---- In 2020, he became the first rat to receive a gold medal from a British animal charity for bravery.",
      [
        "Over five years, he found more than a hundred mines and other explosives.",
        "Cambodia is in South-East Asia.",
        "Rats can live in many environments.",
        "He was born in Tanzania in 2013.",
        "Medals are made of metal.",
      ],
      "Boşluk ödülü hak ettiren başarıyı anlatan bir cümle gerektirir; boşluğa beş yılda yüzden fazla mayın ve patlayıcı bulduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "Cats often purr when they are relaxed, but they also purr when they are injured or giving birth. ---- However, there is so far little scientific evidence that purring actually helps the healing of bones or tissues.",
      [
        "Some researchers have suggested that the low-frequency vibrations of purring might help cats to heal.",
        "Cats are popular pets around the world.",
        "Lions and tigers cannot purr.",
        "Kittens begin to purr when they are a few days old.",
        "Cats sleep for many hours a day.",
      ],
      "Boşluk 'ancak ... çok az kanıt vardır' ifadesine zemin hazırlayan bir cümle gerektirir; boşluğa bazı araştırmacıların mırlamanın düşük frekanslı titreşimlerinin kedilerin iyileşmesine yardım edebileceğini öne sürdüğünü söyleyen cümle gelmelidir.",
    ],
    [
      "Some dogs are trained to help people with epilepsy. ---- Some owners report that their dogs even seem to warn them before a seizure begins.",
      [
        "During a seizure, they may stay close to their owner, press an alarm button or fetch help.",
        "Dogs are popular pets.",
        "Epilepsy affects the brain.",
        "Training a dog can take more than a year.",
        "Dogs need regular exercise.",
      ],
      "Boşluk köpeklerin nöbet sırasında ne yaptığını anlatıp 'hatta' ile bağlanan bir cümle gerektirir; boşluğa nöbet sırasında sahiplerinin yanında kalabildiklerini, alarm düğmesine basabildiklerini ya da yardım çağırabildiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "In the 1990s, researchers found that the octopus can grip smooth, wet surfaces using the suckers on its arms. ---- Similar patches might one day be used to attach medical sensors or bandages without damaging the skin.",
      [
        "Engineers have since designed adhesive patches covered with tiny suction cups that stick under water.",
        "Octopuses have eight arms.",
        "The sea covers most of the Earth.",
        "Octopuses can also change colour.",
        "Bandages are used to cover wounds.",
      ],
      "Boşluk 'benzer yamalar' ifadesine bağlanan bir cümle gerektirir; boşluğa mühendislerin su altında yapışan küçük vantuzlarla kaplı yamalar tasarladığını söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Before modern tests, doctors sometimes tasted the urine of patients.",
        "Sweet urine was a sign of diabetes.",
        "The name of the disease comes partly from a Latin word meaning 'sweet as honey'.",
        "Honey is produced by bees.",
        "Today, the same information is obtained from simple test strips.",
      ],
      odd: 3,
      why: "Parça idrarın tadına bakılarak diyabet tanısı konmasını anlatır. Balın arılar tarafından üretildiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A mosquito can pierce human skin without being noticed.",
        "Its mouthparts vibrate and have tiny serrated edges.",
        "Engineers in Japan have copied this design to make a less painful needle.",
        "Mosquitoes are most active in the evening.",
        "Such needles could be useful for patients who need frequent injections.",
      ],
      odd: 3,
      why: "Parça sivrisinekten esinlenen ağrısız iğneyi anlatır. Sivrisineklerin en çok akşamları etkin olduğunu söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Like people, dogs sometimes need blood transfusions after accidents or operations.",
        "Some veterinary hospitals therefore run blood banks for animals.",
        "Healthy pet dogs are brought in by their owners to donate.",
        "Many dogs enjoy riding in cars.",
        "One donation can help to save the lives of several other dogs.",
      ],
      odd: 3,
      why: "Parça köpekler için kan bankalarını anlatır. Pek çok köpeğin arabaya binmekten hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Scientists study naturally occurring diseases in pet dogs to learn about human illness.",
        "Dogs develop many of the same cancers as people.",
        "Because they live with humans, they are exposed to similar environments.",
        "Their lives are also shorter, so results can be obtained more quickly.",
        "Many dogs enjoy chasing balls.",
      ],
      odd: 4,
      why: "Parça evcil köpeklerdeki hastalıkların insan hastalıklarını anlamak için incelenmesini anlatır. Pek çok köpeğin top kovalamaktan hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Some scientists study animals that rarely get cancer.",
        "Elephants, for example, have many copies of a gene that helps to destroy damaged cells.",
        "Elephants live in Africa and Asia.",
        "This may explain why they rarely develop cancer despite their large size.",
        "Researchers hope this knowledge may lead to new treatments.",
      ],
      odd: 2,
      why: "Parça nadiren kansere yakalanan hayvanların incelenmesini anlatır. Fillerin Afrika ve Asya'da yaşadığını söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Camels and llamas produce unusually small antibodies.",
        "Pigeons are found in most cities.",
        "These tiny antibodies are stable and can reach places that larger ones cannot.",
        "Scientists have used them to develop a drug for a rare blood-clotting disorder.",
        "They are also being studied as possible treatments for viral infections.",
      ],
      odd: 1,
      why: "Parça develer ve lamaların ürettiği küçük antikorların tıpta kullanımını anlatır. Güvercinlerin çoğu kentte bulunduğunu söyleyen II. cümle konu dışıdır.",
    },
  ],
};
