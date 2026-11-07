import type { YokdilDeneme } from "./types";

export const SAGLIK_07: YokdilDeneme = {
  no: 7,
  field: "saglik",
  vocab: [
    [
      "Sepsis can ---- very quickly, so patients with signs of a serious infection need urgent treatment.",
      ["deteriorate", "stabilise", "recover", "disappear", "improve"],
      "Acil tedavi gerektiren durum hızla 'kötüleşebilir' (deteriorate); 'improve' ve 'recover' anlamla çelişir.",
    ],
    [
      "The rash caused by eczema is often extremely ----, and scratching can make it worse.",
      ["itchy", "painless", "invisible", "pleasant", "harmless"],
      "Kaşımanın durumu kötüleştirmesi döküntünün 'kaşıntılı' (itchy) olduğunu gösterir.",
    ],
    [
      "The new guidelines ---- that adults should have their cholesterol checked every five years.",
      ["recommend", "deny", "doubt", "forbid", "regret"],
      "Yönergelerin yetişkinlere kolesterol kontrolü 'önermesi' (recommend) anlamlıdır.",
    ],
    [
      "Health workers had to ---- strict safety procedures when caring for patients with Ebola.",
      ["comply with", "get away with", "look down on", "make up for", "run out of"],
      "Ebola hastalarına bakarken sıkı güvenlik prosedürlerine 'uymak' (comply with) gerekir.",
    ],
    [
      "The discovery of X-rays had an almost ---- impact on medicine, allowing doctors to see inside the body without surgery.",
      ["immediate", "delayed", "invisible", "negative", "minor"],
      "X ışınlarının tıp üzerindeki etkisinin 'neredeyse anında' (immediate) olduğu anlatılır.",
    ],
    [
      "Some parents are ---- to vaccinate their children because of false information they have read online.",
      ["reluctant", "eager", "obliged", "determined", "delighted"],
      "Yanlış bilgiler nedeniyle ebeveynlerin aşı yaptırmaya 'isteksiz' (reluctant) olduğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "Before blood types were discovered, many patients ---- after receiving transfusions.",
      ["had died", "have died", "die", "will die", "are dying"],
      "Kan gruplarının keşfinden önceki geçmiş durum Past Perfect ile anlatılır: 'had died'.",
    ],
    [
      "If sepsis ---- earlier, the patient would probably have survived.",
      ["had been diagnosed", "was diagnosed", "is diagnosed", "would be diagnosed", "has been diagnosed"],
      "Ana cümle 'would have survived' olduğundan Type 3 koşul gerekir: 'had been diagnosed'.",
    ],
    [
      "Röntgen, ---- discovery of X-rays transformed medicine, received the first Nobel Prize in Physics.",
      ["whose", "who", "which", "whom", "that"],
      "Röntgen'in keşfinden söz edilir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "---- its name, 'bad' cholesterol is essential for the body in small amounts.",
      ["Despite", "Because of", "Owing to", "Thanks to", "As a result of"],
      "Adına 'rağmen' vücut için gerekli olması zıtlıktır: 'Despite'.",
    ],
    [
      "Scientists are still trying to understand why some patients ---- more severely than others.",
      ["are affected", "are they affected", "do they affect", "affected they", "they affecting"],
      "Dolaylı soruda düz cümle sırası kullanılır ve hastalar etkilenen taraftır: 'why some patients are affected'.",
    ],
    [
      "Hardly ---- the outbreak been declared over when a new case was reported.",
      ["had", "has", "did", "was", "have"],
      "'Hardly … when' yapısında devrik Past Perfect gerekir: 'Hardly had the outbreak been declared over'.",
    ],
    [
      "Patients with eczema are advised to avoid ---- harsh soaps and hot water.",
      ["using", "to use", "use", "used", "to using"],
      "'avoid' fiili '-ing' ister: 'avoid using'.",
    ],
    [
      "The vaccine ---- in the trial was found to be safe and highly effective.",
      ["tested", "testing", "which tested", "to test", "has tested"],
      "Denemede test edilen aşı edilgen anlamlı geçmiş ortaçla nitelenir: 'tested'.",
    ],
    [
      "The doctor suggested that the patient ---- less saturated fat.",
      ["eat", "eats", "ate", "will eat", "eating"],
      "'suggest that' sonrası subjunctive (yalın fiil) kullanılır: 'the patient eat'.",
    ],
    [
      "The hospital admitted forty patients, several of ---- needed intensive care.",
      ["whom", "who", "them", "which", "they"],
      "'several of' sonrasında insanlara atıf yapan nesne hâlindeki ilgi zamiri 'whom' gerekir.",
    ],
    [
      "---- the vaccine is very safe, some parents still worry about side effects.",
      ["Although", "Because", "Unless", "So that", "In case"],
      "Aşının güvenli olmasına rağmen endişe duyulması zıtlıktır: 'Although'.",
    ],
    [
      "Health workers are required ---- protective equipment at all times.",
      ["to wear", "wearing", "wear", "worn", "to wearing"],
      "'be required to do' kalıbı mastar ister.",
    ],
    [
      "It was ---- a serious outbreak that schools in the region were closed for weeks.",
      ["such", "so", "too", "very", "enough"],
      "'such + a/an + sıfat + isim + that' yapısı sonuç bildirir.",
    ],
    [
      "By the time the trial ends, researchers ---- data from more than five thousand patients.",
      ["will have collected", "have collected", "collected", "had collected", "collect"],
      "Gelecekteki bir ana (ends) kadar tamamlanmış olacak eylem Future Perfect ile anlatılır.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1895, the German physicist Wilhelm Röntgen was experimenting with electrical currents in glass tubes {1} he noticed that a nearby screen had started to glow. He realised that the tube was producing a new kind of invisible ray, {2} he called 'X-rays' because their nature was unknown. Within weeks, he had taken an image of the bones in his wife's hand. The discovery spread rapidly, and {3} a year, doctors around the world were using X-rays to locate broken bones and swallowed objects. At first, however, nobody understood that the rays could be harmful. Many early researchers suffered serious burns, and some developed cancer {4} repeated exposure. Today, X-ray machines use far lower doses, {5} they remain among the most widely used diagnostic tools.",
      blanks: [
        [
          "(21) ----",
          ["when", "unless", "because", "although", "so that"],
          "Deney sırasında beklenmedik bir şeyi fark etme anı anlatılır: 'was experimenting … when he noticed'.",
        ],
        [
          "(22) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra 'a new kind of invisible ray' ifadesine atıf yapan ve 'called' fiilinin nesnesi olan 'which' gerekir.",
        ],
        [
          "(23) ----",
          ["within", "since", "during", "until", "for"],
          "'within a year' 'bir yıl içinde' anlamındadır.",
        ],
        [
          "(24) ----",
          ["as a result of", "in spite of", "instead of", "apart from", "regardless of"],
          "Kanserin nedeni tekrarlanan maruziyettir: 'as a result of'.",
        ],
        [
          "(25) ----",
          ["and", "but", "unless", "because", "although"],
          "Düşük doz kullanımı ve yaygın kullanılmaları birbirine eklenen iki bilgidir: 'and'.",
        ],
      ],
    },
    {
      text:
        "Attempts at blood transfusion go back centuries, but for a long time they were extremely dangerous. Some patients recovered, {1} others suffered severe reactions and died, and doctors could not explain why. The answer came in 1901, when the Austrian scientist Karl Landsteiner discovered that human blood belongs to different groups, which he named A, B and O. He showed that mixing incompatible blood causes the red cells to clump together, {2} can block blood vessels. {3} this discovery, it became possible to match donors and patients safely. Later, the development of methods to store blood made large-scale transfusion practical, {4} during the two World Wars. Today, millions of lives are saved every year {5} donated blood.",
      blanks: [
        [
          "(26) ----",
          ["while", "because", "unless", "so that", "as if"],
          "Bazı hastaların iyileşmesi ile diğerlerinin ölmesi karşılaştırılır: 'while'.",
        ],
        [
          "(27) ----",
          ["which", "who", "what", "whose", "where"],
          "Virgülden sonra önceki olaya (hücrelerin kümelenmesi) atıf yapan 'which' gerekir.",
        ],
        [
          "(28) ----",
          ["Thanks to", "Despite", "Instead of", "In spite of", "Regardless of"],
          "Bu keşif 'sayesinde' güvenli eşleştirme mümkün oldu: 'Thanks to'.",
        ],
        [
          "(29) ----",
          ["especially", "hardly", "rarely", "unlike", "instead"],
          "Büyük ölçekli kan naklinin 'özellikle' dünya savaşlarında uygulanabilir hâle geldiği anlatılır.",
        ],
        [
          "(30) ----",
          ["thanks to", "in spite of", "instead of", "apart from", "rather than"],
          "Bağışlanan kan 'sayesinde' milyonlarca hayat kurtarılır: 'thanks to'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although sepsis is one of the leading causes of death in hospitals, ----.",
      [
        "many people have never even heard of the condition",
        "it is caused by the body's reaction to an infection",
        "patients usually need treatment in intensive care",
        "it can affect people of any age, including children",
        "doctors use antibiotics and fluids to treat it",
      ],
      "'Although' zıtlık ister: hastanelerdeki önde gelen ölüm nedenlerinden olmasına rağmen pek çok kişi adını bile duymamıştır.",
    ],
    [
      "Many dermatologists believe that eczema ----.",
      [
        "results from a combination of genetic and environmental factors",
        "although it often appears in early childhood years",
        "which can be made worse by stress and dry air",
        "unless patients use moisturising creams every day",
        "so that the skin would become dry and red",
      ],
      "'believe that' sonrası tam bir yüklem gerekir; yalnızca 'results from …' cümleyi tamamlar.",
    ],
    [
      "If people ate less saturated fat, ----.",
      [
        "their cholesterol levels would probably fall",
        "cholesterol was discovered in the eighteenth century",
        "the liver produces most of the body's cholesterol",
        "many foods had been fried in butter in the past",
        "doctors will recommend regular blood tests",
      ],
      "Type 2 koşul cümlesi 'would + V1' ile tamamlanır.",
    ],
    [
      "While Ebola spreads less easily than diseases such as measles, ----.",
      [
        "it is far more likely to kill those it infects",
        "it was first identified in Central Africa in 1976",
        "the virus is spread through contact with body fluids",
        "outbreaks have occurred in several African countries",
        "health workers wear protective suits when treating it",
      ],
      "'While' iki karşıt özelliği bağlar: kızamık kadar kolay yayılmasa da enfekte ettiklerini öldürme olasılığı çok daha yüksektir.",
    ],
    [
      "Many countries have launched public information campaigns ----.",
      [
        "in order to correct false claims about vaccines",
        "which parents had been asking for since the 1990s",
        "although most children are already vaccinated",
        "because vaccines were invented in the last century",
        "unless doctors refuse to give vaccinations",
      ],
      "Kampanyaların amacı aşılarla ilgili yanlış iddiaları düzeltmektir: 'in order to'.",
    ],
    [
      "Unless the source of the outbreak is identified quickly, ----.",
      [
        "the disease may spread to neighbouring regions",
        "the first cases were reported in a small village",
        "health workers had arrived in the area by plane",
        "the region has several large hospitals",
        "many people travel there for work",
      ],
      "'Unless' gelecek koşulu gelecekte olası bir sonuç ister: hastalık komşu bölgelere yayılabilir.",
    ],
    [
      "Since X-ray machines became widely available, ----.",
      [
        "doctors have been able to diagnose fractures much more accurately",
        "the first machine had been built in a German laboratory",
        "many early researchers suffered burns from the rays",
        "new machines will use even lower doses of radiation",
        "most hospitals were small and poorly equipped",
      ],
      "'Since' ile bugüne uzanan değişim Present Perfect ister: 'have been able to'.",
    ],
    [
      "Even though blood can now be stored for several weeks, ----.",
      [
        "hospitals still depend on a constant supply of new donations",
        "it is kept in special refrigerators at blood banks",
        "it must be tested for infections before it is used",
        "donors are usually between eighteen and sixty-five",
        "it is separated into red cells, plasma and platelets",
      ],
      "'Even though' beklenmedik bir sonuç ister: kan haftalarca saklanabilse de hastaneler sürekli bağışa muhtaçtır.",
    ],
    [
      "The higher a person's cholesterol level, ----.",
      [
        "the greater their risk of heart disease",
        "because fatty foods raise cholesterol",
        "although some cholesterol is necessary",
        "which can be measured with a blood test",
        "since many people eat fast food",
      ],
      "'The higher …, the greater …' karşılaştırma kalıbı tamamlanmalıdır.",
    ],
    [
      "As vaccination rates fell in some communities, ----.",
      [
        "outbreaks of measles began to occur again",
        "most children had been vaccinated in the past",
        "vaccines are tested carefully before use",
        "doctors work in many different hospitals",
        "measles was common in the nineteenth century",
      ],
      "'As' paralel bir değişim bildirir: aşılama oranları düştükçe kızamık salgınları yeniden görülmeye başladı.",
    ],
    [
      "No sooner had the patient received the transfusion ----.",
      [
        "than his condition began to improve",
        "when he had lost a lot of blood",
        "because the donor had the same blood type",
        "so the nurses checked his temperature",
        "although he was still very weak",
      ],
      "'No sooner … than …' kalıbı 'than' ile tamamlanır.",
    ],
  ],
  enTr: [
    [
      "Sepsis occurs when the body's response to an infection begins to damage its own tissues and organs.",
      [
        "Sepsis, vücudun bir enfeksiyona verdiği tepki kendi doku ve organlarına zarar vermeye başladığında ortaya çıkar.",
        "Sepsis, vücudun doku ve organları enfeksiyona karşı tamamen korunduğunda ortaya çıkar.",
        "Vücudun enfeksiyona verdiği tepki, doku ve organların sepsisten iyileşmesini sağlar.",
        "Sepsis, enfeksiyon sona erdikten sonra organlarda görülen hafif bir rahatsızlıktır.",
        "Doku ve organlardaki hasar, vücudun enfeksiyonlara tepki vermesini engeller.",
      ],
      "'when the body's response to an infection begins to damage its own tissues' 'vücudun enfeksiyona tepkisi kendi dokularına zarar vermeye başladığında' demektir.",
    ],
    [
      "Children with eczema are more likely than other children to develop asthma later in life.",
      [
        "Egzaması olan çocukların ileride astım geliştirme olasılığı diğer çocuklardan daha yüksektir.",
        "Egzaması olan çocuklar ileride astımdan tamamen korunmuş olarak büyür.",
        "Astımı olan çocuklarda egzama görülme olasılığı oldukça düşüktür.",
        "Diğer çocuklar, egzaması olan çocuklardan astımı daha erken öğrenir.",
        "Egzama ve astım, çocukluk döneminde birbirinden bağımsız olarak iyileşir.",
      ],
      "'are more likely than other children to develop asthma' 'astım geliştirme olasılığı diğer çocuklardan daha yüksektir' karşılığıdır.",
    ],
    [
      "Not all cholesterol is harmful; some types actually help protect the heart.",
      [
        "Kolesterolün hepsi zararlı değildir; bazı türleri aslında kalbi korumaya yardımcı olur.",
        "Kolesterolün tüm türleri kalp için zararlıdır ve vücuttan uzaklaştırılmalıdır.",
        "Kalbi koruyan kolesterol türleri vücutta hiçbir zaman üretilmez.",
        "Bazı kolesterol türleri kalbi korur, ancak diğer organlara zarar verir.",
        "Kolesterol, kalp hastalıklarını önlemede hiçbir rol oynamaz.",
      ],
      "'Not all cholesterol is harmful' 'kolesterolün hepsi zararlı değildir', 'actually help protect the heart' 'aslında kalbi korumaya yardımcı olur' demektir.",
    ],
    [
      "The virus is not spread through the air but through direct contact with the body fluids of infected people.",
      [
        "Virüs hava yoluyla değil, enfekte kişilerin vücut sıvılarıyla doğrudan temas yoluyla yayılır.",
        "Virüs hem hava yoluyla hem de vücut sıvılarıyla doğrudan temas yoluyla kolayca yayılır.",
        "Enfekte kişilerin vücut sıvıları virüsün havaya karışmasını engeller.",
        "Virüs yalnızca hava yoluyla yayıldığı için temas tehlikeli değildir.",
        "Doğrudan temas, virüse karşı bağışıklık kazanmanın en güvenli yoludur.",
      ],
      "'not … through the air but through direct contact' 'hava yoluyla değil, doğrudan temas yoluyla' demektir.",
    ],
    [
      "Had Landsteiner not discovered blood groups, transfusions would have remained extremely risky.",
      [
        "Landsteiner kan gruplarını keşfetmemiş olsaydı kan nakilleri son derece riskli olmaya devam ederdi.",
        "Landsteiner kan gruplarını keşfettiği için kan nakilleri daha riskli hâle geldi.",
        "Kan nakilleri, Landsteiner'ın keşfinden önce de tamamen güvenliydi.",
        "Landsteiner, kan nakillerinin riskli olduğunu kanıtlamak için kan gruplarını keşfetti.",
        "Kan gruplarının keşfi, kan nakillerinin yasaklanmasına neden oldu.",
      ],
      "'Had Landsteiner not discovered' devrik Type 3 koşuldur: 'keşfetmemiş olsaydı'; 'would have remained' 'olmaya devam ederdi'.",
    ],
    [
      "Doctors were quick to realise how useful X-rays could be for finding broken bones.",
      [
        "Doktorlar, X ışınlarının kırık kemikleri bulmak için ne kadar yararlı olabileceğini çabucak fark etti.",
        "Doktorlar, X ışınlarının kırık kemikleri bulmada işe yaramadığını uzun süre sonra anladı.",
        "Kırık kemikler, X ışınlarının keşfinden önce kolayca bulunabiliyordu.",
        "Doktorlar, X ışınlarını yalnızca kırık kemikleri tedavi etmek için kullandı.",
        "X ışınları, doktorların kemik kırıklarını önlemesine yardımcı oldu.",
      ],
      "'were quick to realise how useful … could be' '… ne kadar yararlı olabileceğini çabucak fark etti' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Sepsis, erken teşhis edildiğinde genellikle başarılı bir şekilde tedavi edilebilir.",
      [
        "When it is diagnosed early, sepsis can usually be treated successfully.",
        "Even when it is diagnosed early, sepsis can rarely be treated successfully.",
        "Sepsis is usually diagnosed only after treatment has been completed.",
        "Successful treatment of sepsis depends on diagnosing it as late as possible.",
        "When sepsis is diagnosed early, patients usually refuse treatment.",
      ],
      "'erken teşhis edildiğinde' 'when it is diagnosed early', 'genellikle başarılı bir şekilde tedavi edilebilir' 'can usually be treated successfully' karşılığıdır.",
    ],
    [
      "Egzama bulaşıcı değildir, yani başka bir kişiye geçmez.",
      [
        "Eczema is not contagious, which means it cannot be passed to another person.",
        "Eczema is highly contagious, which means it spreads easily between people.",
        "Eczema can be passed to another person only through physical contact.",
        "Eczema is caused by contact with people who have the disease.",
        "People who are not contagious cannot develop eczema.",
      ],
      "'bulaşıcı değildir' 'is not contagious', 'başka bir kişiye geçmez' 'cannot be passed to another person' karşılığıdır.",
    ],
    [
      "Yüksek kolesterol genellikle herhangi bir belirtiye neden olmaz.",
      [
        "High cholesterol does not usually cause any symptoms.",
        "High cholesterol usually causes severe and obvious symptoms.",
        "Symptoms of high cholesterol appear immediately after eating.",
        "Most symptoms are caused by low levels of cholesterol.",
        "High cholesterol can be detected easily without a blood test.",
      ],
      "'genellikle herhangi bir belirtiye neden olmaz' 'does not usually cause any symptoms' karşılığıdır.",
    ],
    [
      "Ebola salgını, sağlık sistemleri zayıf olan ülkelerde çok daha hızlı yayıldı.",
      [
        "The Ebola outbreak spread much faster in countries with weak health systems.",
        "The Ebola outbreak spread more slowly in countries with weak health systems.",
        "Countries with strong health systems were the most affected by the Ebola outbreak.",
        "The Ebola outbreak caused health systems to become stronger in most countries.",
        "Weak health systems prevented the Ebola outbreak from spreading.",
      ],
      "'sağlık sistemleri zayıf olan ülkelerde' 'in countries with weak health systems', 'çok daha hızlı yayıldı' 'spread much faster' karşılığıdır.",
    ],
    [
      "Aşı tereddüdü, Dünya Sağlık Örgütü tarafından küresel sağlığa yönelik başlıca tehditlerden biri olarak tanımlanmıştır.",
      [
        "Vaccine hesitancy has been identified by the World Health Organization as one of the main threats to global health.",
        "Vaccine hesitancy has been ignored by the World Health Organization as a minor problem for local health.",
        "The World Health Organization has identified vaccines as one of the main threats to global health.",
        "The World Health Organization is hesitant to recommend vaccines for global use.",
        "Global health has improved because people are hesitant about vaccines.",
      ],
      "'tarafından … olarak tanımlanmıştır' 'has been identified by … as', 'başlıca tehditlerden biri' 'one of the main threats' karşılığıdır.",
    ],
    [
      "X ışınlarına uzun süre maruz kalmak ciddi sağlık sorunlarına yol açabilir.",
      [
        "Long-term exposure to X-rays can lead to serious health problems.",
        "Short-term exposure to X-rays always causes serious health problems.",
        "Serious health problems can be cured by long-term exposure to X-rays.",
        "X-rays are completely harmless, however long people are exposed to them.",
        "People with serious health problems are not allowed to have X-rays.",
      ],
      "'uzun süre maruz kalmak' 'long-term exposure', 'yol açabilir' 'can lead to' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Sepsis is a life-threatening condition that occurs when the body's response to an infection becomes uncontrolled and starts to damage its own tissues and organs. It can be triggered by almost any type of infection, including pneumonia, urinary tract infections and infected wounds. Early signs can be easy to miss, as they may resemble those of flu: fever or a low temperature, a fast heart rate, rapid breathing and confusion. If not treated quickly, sepsis can lead to septic shock, a dramatic drop in blood pressure that can cause multiple organs to fail. Experts estimate that sepsis is involved in around one in five deaths worldwide. Treatment with antibiotics and intravenous fluids is most effective when started within the first hour.",
      questions: [
        [
          "According to the passage, sepsis occurs when ----.",
          [
            "the body's reaction to an infection begins to harm its own organs",
            "a patient is infected with the flu virus for a second time",
            "antibiotics are taken for too long without a break",
            "the immune system stops responding to infections",
            "blood pressure rises to dangerously high levels",
          ],
          "Sepsis, vücudun enfeksiyona tepkisi kontrolden çıkıp kendi doku ve organlarına zarar vermeye başladığında ortaya çıkar.",
        ],
        [
          "The early signs of sepsis are easy to miss because ----.",
          [
            "they can look similar to the symptoms of flu",
            "they appear only after several weeks of illness",
            "they affect only the skin and the hair of patients",
            "they are noticed only by specially trained nurses",
            "they never include fever or a fast heart rate",
          ],
          "Erken belirtiler grip belirtilerine benzeyebildiği için gözden kaçabilir.",
        ],
        [
          "It can be inferred from the passage that the timing of treatment ----.",
          [
            "is crucial for the patient's chances of survival",
            "has little effect on the outcome of sepsis",
            "should be delayed until symptoms are clear",
            "is less important than the type of antibiotic",
            "depends only on the patient's age",
          ],
          "Tedavi ilk saat içinde başlatıldığında en etkili olduğuna göre zamanlama hayatta kalma şansı için çok önemlidir.",
        ],
      ],
    },
    {
      text:
        "Eczema, also known as atopic dermatitis, is a common skin condition that causes dry, red and intensely itchy patches. It usually begins in early childhood, and although many children grow out of it, it can continue into adulthood. The condition is linked to a weakened skin barrier, which allows moisture to escape and irritants to enter more easily. Genetic factors play an important role, and eczema often occurs in families with a history of asthma or hay fever. Symptoms tend to come and go, with 'flare-ups' triggered by factors such as soaps, certain fabrics, stress and changes in temperature. Although there is no cure, regular use of moisturising creams and, during flare-ups, anti-inflammatory ointments can keep the condition under control.",
      questions: [
        [
          "According to the passage, eczema is associated with ----.",
          [
            "a weakened barrier that lets moisture escape from the skin",
            "an infection that spreads easily between family members",
            "a lack of exercise during the early years of childhood",
            "eating too many fatty foods during the winter months",
            "exposure to strong sunlight over many years",
          ],
          "Egzama, nemin kaçmasına ve tahriş edicilerin girmesine izin veren zayıflamış deri bariyeriyle ilişkilidir.",
        ],
        [
          "The passage states that eczema often occurs in families ----.",
          [
            "with a history of asthma or hay fever",
            "that live in very hot and dry countries",
            "who use too much moisturising cream",
            "where children rarely play outdoors",
            "that eat a lot of dairy products",
          ],
          "Egzama sıklıkla astım ya da saman nezlesi öyküsü olan ailelerde görülür.",
        ],
        [
          "According to the passage, 'flare-ups' of eczema can be triggered by ----.",
          [
            "soaps, certain fabrics, stress and changes in temperature",
            "regular use of moisturising creams on the skin",
            "anti-inflammatory ointments used during treatment",
            "drinking plenty of water every day",
            "spending time with family members",
          ],
          "Alevlenmeler sabunlar, bazı kumaşlar, stres ve sıcaklık değişiklikleriyle tetiklenebilir.",
        ],
      ],
    },
    {
      text:
        "Cholesterol is a waxy substance that the body needs to build cells and produce certain hormones. It is carried in the blood by particles called lipoproteins. Low-density lipoprotein, or LDL, is often called 'bad' cholesterol, because high levels can lead to the build-up of fatty deposits in the arteries, increasing the risk of heart attacks and strokes. High-density lipoprotein, or HDL, is known as 'good' cholesterol, as it helps remove excess cholesterol from the bloodstream. Most of the body's cholesterol is produced by the liver, but diet also plays a role, particularly foods high in saturated fats. Because high cholesterol rarely causes symptoms, doctors recommend regular blood tests, and many patients can lower their levels through diet, exercise and, if necessary, medication.",
      questions: [
        [
          "According to the passage, LDL is called 'bad' cholesterol because ----.",
          [
            "high levels can cause fatty deposits to build up in arteries",
            "it is produced only by eating foods with saturated fats",
            "it removes useful cholesterol from the bloodstream",
            "the body does not need it to build any cells",
            "it causes obvious symptoms such as chest pain",
          ],
          "LDL yüksek düzeylerde atardamarlarda yağlı birikintilere yol açabildiği için 'kötü' kolesterol olarak adlandırılır.",
        ],
        [
          "It is stated in the passage that most of the body's cholesterol ----.",
          [
            "is produced by the liver",
            "comes from foods high in sugar",
            "is removed by the kidneys",
            "is found in the skin",
            "is carried by red blood cells",
          ],
          "Parçaya göre vücuttaki kolesterolün çoğu karaciğer tarafından üretilir.",
        ],
        [
          "Doctors recommend regular blood tests because ----.",
          [
            "high cholesterol rarely causes noticeable symptoms",
            "cholesterol levels change every few hours",
            "blood tests can cure high cholesterol",
            "most people have very low cholesterol",
            "medication is only available after a test",
          ],
          "Yüksek kolesterol nadiren belirti verdiği için doktorlar düzenli kan testi önerir.",
        ],
      ],
    },
    {
      text:
        "Ebola virus disease is a rare but severe illness that was first identified in 1976 near the Ebola River in what is now the Democratic Republic of the Congo. The virus is thought to be carried by fruit bats and can be passed to humans through contact with infected animals. Between people, it spreads through direct contact with the blood or other body fluids of someone who is sick or has died from the disease. This is why health workers and family members caring for patients are at particular risk, and why traditional burial practices that involve touching the body have sometimes contributed to outbreaks. The largest outbreak, in West Africa between 2014 and 2016, caused more than eleven thousand deaths. Since then, effective vaccines and new treatments have been developed.",
      questions: [
        [
          "According to the passage, the Ebola virus is believed to be carried by ----.",
          [
            "fruit bats",
            "mosquitoes",
            "river fish",
            "domestic cats",
            "contaminated water",
          ],
          "Parçaya göre virüsün meyve yarasaları tarafından taşındığı düşünülmektedir.",
        ],
        [
          "Health workers and family members are at particular risk because ----.",
          [
            "they come into direct contact with patients' body fluids",
            "the virus spreads through the air in hospitals",
            "they often travel to areas where bats live",
            "they are rarely vaccinated against the flu",
            "they drink water from the Ebola River",
          ],
          "Hastaların kanı ya da vücut sıvılarıyla doğrudan temas ettikleri için sağlık çalışanları ve aile üyeleri risk altındadır.",
        ],
        [
          "We can understand from the passage that since the West African outbreak ----.",
          [
            "new tools to prevent and treat the disease have become available",
            "the virus has disappeared completely from Africa",
            "traditional burial practices have become more common",
            "no further cases of Ebola have been reported",
            "fruit bats have been removed from the region",
          ],
          "Son cümleye göre o zamandan beri etkili aşılar ve yeni tedaviler geliştirilmiştir.",
        ],
      ],
    },
    {
      text:
        "Vaccines are among the most effective tools in public health, preventing millions of deaths every year. Yet in some communities, a growing number of parents delay or refuse vaccinations for their children, a phenomenon known as vaccine hesitancy. The reasons are complex. Some parents worry about side effects, while others mistrust governments or pharmaceutical companies. Paradoxically, the success of vaccines has also played a role: because diseases such as measles have become rare, many parents have never seen their effects and may underestimate the danger. Misinformation spread on social media has made the problem worse. Research suggests that simply presenting facts is often not enough; conversations with trusted health workers who listen to parents' concerns tend to be more effective in changing attitudes.",
      questions: [
        [
          "According to the passage, vaccine hesitancy refers to ----.",
          [
            "parents delaying or refusing vaccinations for their children",
            "governments limiting the number of vaccines available",
            "doctors refusing to give vaccines to adults",
            "pharmaceutical companies stopping vaccine production",
            "children being afraid of injections",
          ],
          "Aşı tereddüdü, ebeveynlerin çocuklarının aşılarını geciktirmesi ya da reddetmesidir.",
        ],
        [
          "The author describes the role of vaccine success as a paradox because ----.",
          [
            "rare diseases may cause parents to underestimate the risks",
            "vaccines have caused diseases to become more common",
            "successful vaccines are more expensive to produce",
            "parents trust vaccines more when diseases are rare",
            "measles has become more dangerous than before",
          ],
          "Aşılar başarılı olduğu için hastalıklar nadirleşmiş, bu da ebeveynlerin tehlikeyi küçümsemesine yol açmıştır; bu bir paradokstur.",
        ],
        [
          "Research mentioned in the passage suggests that ----.",
          [
            "listening to parents' concerns is more effective than just giving facts",
            "parents should be forced by law to vaccinate their children",
            "social media is the best source of information on vaccines",
            "presenting facts is always enough to change attitudes",
            "health workers should avoid talking to parents",
          ],
          "Araştırmalar, ebeveynlerin kaygılarını dinleyen güvenilir sağlık çalışanlarıyla yapılan konuşmaların yalnızca bilgi sunmaktan daha etkili olduğunu gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In the early twentieth century, many people died from infections caused by small cuts and scratches. ---- The introduction of penicillin in the 1940s, however, made such infections easy to treat.",
      [
        "At that time, there were no effective medicines to kill the bacteria responsible.",
        "Many people at that time worked long hours on farms and in busy factories.",
        "The first aeroplanes were also being developed during the early part of that century.",
        "Small cuts and scratches are very common among children who play outdoors.",
        "Doctors in those days usually visited their patients at home by horse and cart.",
      ],
      "'however' ile penisiline geçilir; boşluk o dönemde bakterileri öldüren etkili ilaçların olmadığını söylemelidir.",
    ],
    [
      "Many people believe that eating late at night causes weight gain. ---- What matters most, they argue, is the total number of calories eaten during the day.",
      [
        "Most nutrition experts, however, say that the timing of meals is less important than often thought.",
        "Some restaurants stay open until very late at night in large cities.",
        "Breakfast is often described as the most important meal of the day.",
        "Many people enjoy having a small snack while watching television.",
        "Weight gain can also be caused by certain types of medication.",
      ],
      "'they argue' bir grup uzmana atıf yapar; boşluk uzmanların öğün zamanlamasının sanıldığı kadar önemli olmadığını söylemesini gerektirir.",
    ],
    [
      "---- In Japan, for example, many people wear masks in public when they have a cold, in order to protect others.",
      [
        "Cultural attitudes towards preventing the spread of illness vary between countries.",
        "Japan has one of the highest life expectancies in the whole world today.",
        "Masks are made from many different materials, including cotton and paper.",
        "Colds are most common during the cold winter months in many countries.",
        "Many people travel to Japan every year to see its famous cherry blossoms.",
      ],
      "'for example' ile verilen Japonya örneği, hastalığın yayılmasını önlemeye yönelik kültürel tutumların ülkeden ülkeye değiştiğini söyleyen bir genelleme gerektirir.",
    ],
    [
      "Regular physical activity has many benefits for older adults. ---- In addition, activities such as dancing or walking in groups can reduce loneliness.",
      [
        "It helps maintain muscle strength and reduces the risk of dangerous falls.",
        "Many older adults enjoy spending time with their grandchildren at weekends.",
        "Some people continue working well past the usual age of retirement.",
        "Dancing has been a popular form of entertainment for many centuries.",
        "Walking shoes should be comfortable and fit the feet properly.",
      ],
      "'In addition' ile ikinci bir yarar eklenir; boşlukta ilk yarar (kas gücünü koruma ve düşme riskini azaltma) yer almalıdır.",
    ],
    [
      "In many low-income countries, there are very few doctors for each patient. ---- As a result, these workers now provide much of the basic care in rural communities.",
      [
        "To address this shortage, some governments have trained community health workers.",
        "Many doctors in these countries studied at universities in Europe or America.",
        "Rural communities often have beautiful landscapes and traditional villages.",
        "Hospitals in large cities are usually better equipped than rural clinics.",
        "Some diseases are more common in tropical regions than in cold ones.",
      ],
      "'these workers' ifadesi öncesinde bu çalışanları tanıtan bir cümle gerektirir: toplum sağlığı çalışanlarının yetiştirilmesi.",
    ],
    [
      "Some hospitals have started to offer patients meals made from fresh, locally grown ingredients. ---- Critics, however, point out that such programmes can be expensive to run.",
      [
        "Supporters argue that better food helps patients recover more quickly.",
        "Many patients complain that hospital meals are served too early in the day.",
        "Local farmers often sell their vegetables at weekly markets in town.",
        "Hospital kitchens must follow strict rules about hygiene and storage.",
        "Fresh fruit and vegetables are an important part of a healthy diet.",
      ],
      "'Critics, however' öncesinde destekçilerin olumlu görüşü gerekir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Kidney stones are hard deposits of minerals that form inside the kidneys.",
        "They can cause severe pain when they move through the urinary tract.",
        "Drinking plenty of water is one of the best ways to prevent them.",
        "The kidneys filter waste products from the blood.",
        "Many people enjoy drinking coffee in the morning.",
      ],
      odd: 4,
      why: "Parça böbrek taşlarını anlatır. Sabah kahvesi içmekten söz eden V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Hand, foot and mouth disease is a common viral infection in young children.",
        "It causes fever, mouth sores and a rash on the hands and feet.",
        "The infection spreads easily in nurseries and schools.",
        "Many schools organise sports days in the summer.",
        "Most children recover without treatment within a week or ten days.",
      ],
      odd: 3,
      why: "Parça el-ayak-ağız hastalığını anlatır. Okulların spor günlerinden söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Hay fever is an allergic reaction to pollen from grasses, trees and flowers.",
        "Symptoms include sneezing, a runny nose and itchy eyes.",
        "Many gardens are designed with colourful flowers.",
        "It is most common in spring and early summer, when pollen levels are high.",
        "Antihistamine tablets can help to relieve the symptoms.",
      ],
      odd: 2,
      why: "Parça saman nezlesini anlatır. Bahçelerin renkli çiçeklerle tasarlanmasından söz eden III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Heatstroke is a serious condition caused by the body overheating.",
        "Football is the most popular sport in many countries.",
        "It can occur after long periods in very hot weather or during intense exercise.",
        "Symptoms include confusion, a high body temperature and loss of consciousness.",
        "Without quick treatment, it can damage the brain and other organs.",
      ],
      odd: 1,
      why: "Parça sıcak çarpmasını anlatır. Futbolun popülerliğinden söz eden II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Anaemia in pregnancy is common in many parts of the world.",
        "It is usually caused by a lack of iron in the diet.",
        "Pregnant women need more iron to support the growing baby.",
        "Many hospitals have special rooms where visitors can wait.",
        "Doctors often recommend iron supplements during pregnancy.",
      ],
      odd: 3,
      why: "Parça gebelikte kansızlığı anlatır. Hastanelerdeki bekleme odalarından söz eden IV. cümle akışı bozar.",
    },
    {
      sentences: [
        "Cataracts cause the lens of the eye to become cloudy.",
        "They develop slowly and are most common in older people.",
        "Vision becomes blurred, and bright lights may cause glare.",
        "Fortunately, a short operation can replace the cloudy lens with an artificial one.",
        "Many people read newspapers on their phones.",
      ],
      odd: 4,
      why: "Parça kataraktı anlatır. Gazetelerin telefonda okunmasından söz eden V. cümle konu dışıdır.",
    },
  ],
};
