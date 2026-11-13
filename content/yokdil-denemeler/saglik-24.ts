import type { YokdilDeneme } from "./types";

export const SAGLIK_24: YokdilDeneme = {
  no: 24,
  field: "saglik",
  vocab: [
    [
      "Withering found that the correct dose of foxglove was very ----: too little had no effect, while too much could kill.",
      ["precise", "generous", "obvious", "cheap", "flexible"],
      "Withering'in yüksükotunun doğru dozunun çok 'kesin/hassas' (precise) olduğunu, azının etkisiz, fazlasının öldürücü olabileceğini bulduğu anlatılır.",
    ],
    [
      "Florey's team had to ---- huge volumes of mould broth to obtain enough penicillin to treat a single patient.",
      ["process", "abandon", "describe", "forbid", "advertise"],
      "Florey'nin ekibinin tek bir hastayı tedavi edecek kadar penisilin elde etmek için çok büyük miktarda küf sıvısını 'işlemesi' (process) gerektiği anlatılır.",
    ],
    [
      "The student claimed that his professor had taken ---- credit for a discovery that they had made together.",
      ["unfair", "modest", "accurate", "temporary", "voluntary"],
      "Öğrencinin profesörünün birlikte yaptıkları bir keşif için 'haksız' (unfair) biçimde övgüyü üstlendiğini iddia ettiği anlatılır.",
    ],
    [
      "The ancient text described soaking the plant in cold water rather than boiling it, which turned out to be ----.",
      ["crucial", "useless", "harmful", "illegal", "expensive"],
      "Antik metinde bitkinin kaynatılmak yerine soğuk suda bekletilmesinin anlatıldığı ve bunun 'çok önemli' (crucial) olduğunun anlaşıldığı belirtilir.",
    ],
    [
      "The cattle died because a substance in the spoiled hay prevented their blood from ----.",
      ["clotting", "flowing", "cooling", "spreading", "changing"],
      "Bozulmuş samandaki bir maddenin sığırların kanının 'pıhtılaşmasını' (clotting) engellediği için öldükleri anlatılır.",
    ],
    [
      "Ehrlich and his assistant tested hundreds of compounds before they ---- one that killed the bacteria without harming the patient.",
      ["came across", "put off", "gave up", "turned down", "looked after"],
      "Ehrlich ile asistanının hastaya zarar vermeden bakterileri öldüren bir bileşiğe 'rastlamadan' (came across) önce yüzlerce bileşiği denediği anlatılır.",
    ],
  ],
  grammar: [
    [
      "An Account of the Foxglove ---- in 1785 after ten years of careful observations.",
      ["was published", "published", "has published", "was publishing", "had published"],
      "Kitap yayımlanan bir eserdir ve olay geçmiştedir: edilgen geçmiş zaman 'was published'.",
    ],
    [
      "If Florey's team had had more penicillin in 1941, their first patient ---- .",
      ["might have survived", "might survive", "will survive", "survived", "had survived"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time Tu Youyou received the Nobel Prize in 2015, artemisinin ---- millions of lives.",
      ["had saved", "has saved", "saves", "will save", "is saving"],
      "Geçmişteki bir olaydan önce tamamlanmış eylem: Past Perfect 'had saved'.",
    ],
    [
      "Waksman, ---- laboratory produced several new antibiotics, received the Nobel Prize alone in 1952.",
      ["whose", "who", "which", "whom", "where"],
      "Laboratuvar Waksman'a aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Not until the 1940s ---- penicillin produced on an industrial scale.",
      ["was", "did", "had", "has", "it was"],
      "'Not until' ile başlayan cümlede ana cümle devrik olur; edilgen yapıda 'was penicillin produced' gerekir.",
    ],
    [
      "The bark was ---- valuable that European governments tried to grow the trees in their colonies.",
      ["so", "such", "too", "very", "as"],
      "Sıfattan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the drug was first developed as a rat poison, it is now one of the most widely prescribed medicines.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Fare zehri olarak geliştirilmesi ile bugün en çok reçete edilen ilaçlardan biri olması zıttır: 'Although'.",
    ],
    [
      "Withering's patient had been treated with a family recipe that a local woman was said ---- for years.",
      ["to have used", "using", "to use them", "used", "to be used"],
      "Kadının tarifi yıllardır kullanmış olduğu söylenir: 'be said to have + V3' yapısı 'to have used'.",
    ],
    [
      "The plants ---- in the ancient text were tested one by one in the laboratory.",
      ["mentioned", "mentioning", "which mentioned", "to mention", "have mentioned"],
      "Bitkiler metinde anılan şeylerdir; edilgen anlamlı geçmiş ortaç 'mentioned' gerekir.",
    ],
    [
      "The patient began to recover soon after he ---- the first injections.",
      ["had received", "receives", "will receive", "has received", "is receiving"],
      "İyileşmeye başlamadan önce tamamlanmış eylem: 'had received'.",
    ],
    [
      "Neither the farmers ---- the vets could explain why the cattle were bleeding to death.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Quinine was mixed with sugar and water ---- its bitter taste would be easier to bear.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some doctors prescribed the new drug as if it ---- no side effects at all.",
      ["had", "has", "will have", "having", "has had"],
      "'as if' ile gerçek dışı bir durum anlatıldığında fiil geçmiş zamana kayar: 'had'.",
    ],
    [
      "The larger the dose of foxglove, ---- the risk of poisoning became.",
      ["the greater", "greater", "the greatest", "more great", "the more great"],
      "'The larger …, the greater …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1775, the English doctor William Withering was asked for his opinion on a family remedy for dropsy, a condition in which fluid builds up in the body, often because the heart is failing. The remedy, {1} had reportedly been used by a woman in Shropshire, contained about twenty different herbs. Withering concluded that the active ingredient was probably the foxglove, a common plant with tall purple flowers. Over the next ten years, he treated more than a hundred and fifty patients with preparations of dried foxglove leaves, {2} he carefully recorded the dose, the effects and the outcome in each case. He found that the plant could greatly reduce swelling and slow a racing heart, {3} it was also dangerous: too large a dose caused vomiting, disturbed vision and sometimes death. He therefore advised doctors to start with small amounts and increase them gradually {4} the desired effect was achieved or side effects appeared. His book, An Account of the Foxglove, published in 1785, is regarded as one of the first careful studies of a drug's effects and dangers. {5}, the substance he studied, now called digoxin, is still prescribed today for certain heart conditions.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra 'the remedy' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(22) ----",
          ["and", "but", "unless", "although", "or"],
          "Hastaları tedavi etmesi ve sonuçları kaydetmesi birbirine eklenir: 'and'.",
        ],
        [
          "(23) ----",
          ["but", "because", "so that", "unless", "since"],
          "Bitkinin yararlı etkileri ile tehlikeli olması zıttır: 'but'.",
        ],
        [
          "(24) ----",
          ["until", "unless", "although", "because", "whereas"],
          "Dozun istenen etki ya da yan etki görülene 'kadar' artırılması önerilir: 'until'.",
        ],
        [
          "(25) ----",
          ["Remarkably", "However", "Otherwise", "In contrast", "Instead"],
          "İki yüzyılı aşkın süre sonra maddenin hâlâ kullanılması dikkat çekici bir bilgi olarak sunulur: 'Remarkably'.",
        ],
      ],
    },
    {
      text:
        "Few diseases have claimed as many human lives as malaria, and for centuries Europeans had no effective treatment for it. In the early seventeenth century, Jesuit missionaries in Peru learned that the bark of a tree growing in the Andes could reduce fever, {1} they began sending it to Europe, where it became known as 'Jesuits' powder'. The tree was later named cinchona. At first, many Protestant doctors refused to use the remedy {2} of its connection with the Catholic Church, but its effectiveness gradually overcame this resistance. In 1820, two French chemists, Pierre Pelletier and Joseph Caventou, isolated the active substance, quinine, {3} made it possible to give patients accurate doses. Demand grew enormously in the nineteenth century, when quinine allowed European soldiers and officials to survive in tropical regions. Because wild cinchona trees were being cut down faster than they could grow, the British and the Dutch smuggled seeds out of South America and established plantations in India and Java, {4} the Dutch plantations eventually supplied most of the world's quinine. Today, quinine has largely been replaced by newer drugs, {5} it is still sometimes used to treat severe cases of malaria.",
      blanks: [
        [
          "(26) ----",
          ["and", "but", "unless", "although", "or"],
          "Kabuğun ateşi düşürdüğünü öğrenmeleri ve Avrupa'ya göndermeye başlamaları birbirine eklenir: 'and'.",
        ],
        [
          "(27) ----",
          ["because", "in spite", "instead", "regardless", "in case"],
          "'because of' kalıbı: Katolik Kilisesi ile bağlantısı 'nedeniyle': 'because'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden önceki cümlenin tamamını niteleyen ilgi zamiridir: 'which'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "although", "so that"],
          "Plantasyon kurulması ve Hollanda plantasyonlarının dünya kininini sağlaması birbirine eklenir: 'and'.",
        ],
        [
          "(30) ----",
          ["although", "because", "so", "unless", "since"],
          "Kininin yerini büyük ölçüde yeni ilaçlara bırakması ile hâlâ ağır vakalarda kullanılması zıttır: 'although'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Fleming had discovered penicillin in 1928, ----.",
      [
        "it was more than a decade before it could be used to treat patients",
        "he worked at a hospital in London for most of his career",
        "the mould had appeared on one of his laboratory dishes",
        "many bacteria are killed by substances produced by moulds",
        "he received the Nobel Prize together with two other scientists",
      ],
      "'Although' zıtlık ister: Fleming penisilini 1928'de keşfetmiş olsa da hastalarda kullanılması on yıldan fazla sürdü.",
    ],
    [
      "If Schatz had not tested so many soil bacteria, ----.",
      [
        "streptomycin might not have been discovered so soon",
        "tuberculosis is caused by a type of bacterium",
        "most antibiotics will be produced in factories",
        "Waksman was a professor at a university in New Jersey",
        "the soil had contained many different organisms",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Tu Youyou's team extracted the substance at a low temperature ----.",
      [
        "because heat seemed to destroy its activity",
        "although the ancient text recommended boiling it",
        "unless the plant had been dried in the sun",
        "so that it would taste less bitter to patients",
        "even if the laboratory had no equipment",
      ],
      "Düşük sıcaklıkta çıkarmanın nedeni ısının maddenin etkinliğini yok ediyor gibi görünmesidir: 'because'.",
    ],
    [
      "Since warfarin was approved for use in humans in the 1950s, ----.",
      [
        "it has been used to prevent dangerous blood clots in millions of patients",
        "it had been sold in shops as a poison for rats and mice",
        "most doctors would have refused to prescribe it to their patients",
        "it will soon be replaced by several newer and safer drugs",
        "cattle in North America were dying of unexplained internal bleeding",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has been used'.",
    ],
    [
      "Unless patients taking warfarin have regular blood tests, ----.",
      [
        "their dose may become too high or too low",
        "the drug would have been banned by the health authorities",
        "most of them had already suffered strokes or heart attacks",
        "the clinic will close earlier than usual on weekdays",
        "the hay given to the cattle was spoiled by the rain",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: düzenli kan testi yapılmadıkça doz fazla ya da az olabilir.",
    ],
    [
      "So little penicillin was available at first ----.",
      [
        "that it was recovered from the patient's urine and used again",
        "because the mould produced only tiny amounts of it",
        "although the team worked day and night to produce more",
        "while factories in America were preparing to make it",
        "unless the patient recovered",
      ],
      "'So little … that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Researchers have found that when malaria parasites are exposed to only one drug for many years, ----.",
      [
        "they may become resistant to it",
        "they would have died immediately after the first treatment",
        "most of them had been killed by the immune system",
        "the drug will become stronger and more expensive to produce",
        "the mosquitoes that carried them were very small",
      ],
      "'when' ile genel bir bulgu anlatılır: parazitler uzun yıllar tek bir ilaca maruz kaldığında ona direnç geliştirebilir.",
    ],
    [
      "So many compounds did Ehrlich's team test ----.",
      [
        "that the successful one became known as compound 606",
        "because they were looking for a cure for syphilis",
        "although most of them were harmful to animals",
        "while other scientists in Germany were studying the use of dyes",
        "unless the patients agreed to take part in the experiments",
      ],
      "Devrik 'So many … did … test that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While Waksman received the Nobel Prize for the discovery of streptomycin, ----.",
      [
        "his former student was not included in the award",
        "tuberculosis was a major cause of death in many countries",
        "the prize is awarded every December in Stockholm",
        "many scientists study the bacteria that live in soil",
        "antibiotics are also widely used in agriculture",
      ],
      "'While' zıtlık bildirir: Waksman ödülü alırken eski öğrencisi ödüle dahil edilmedi.",
    ],
    [
      "Once the cinchona plantations in Java had become established, ----.",
      [
        "the price of quinine fell sharply",
        "the trees will be cut down to make room for new farms",
        "the Jesuits would have left Peru and returned to Europe",
        "malaria is spread by the bites of certain mosquitoes",
        "most of the seeds had been lost during the long voyage",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: kininin fiyatı keskin biçimde düştü.",
    ],
    [
      "Hardly had the first patients been treated with Salvarsan ----.",
      [
        "when doctors around the world began to request supplies",
        "than the compound had been made in Ehrlich's laboratory",
        "that the disease will disappear completely within a few years",
        "before Ehrlich had become a doctor in Berlin",
        "so the laboratory closed for several months",
      ],
      "'Hardly had … when' kalıplaşmış bir yapıdır; ikinci kısım 'when' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Withering carefully recorded the dose given to each patient and the effects that followed.",
      [
        "Withering, her hastaya verilen dozu ve ardından gelen etkileri dikkatle kaydetti.",
        "Withering, hastalarına verdiği dozları hiçbir zaman ayrı ayrı kaydetmeye gerek görmedi.",
        "Withering, hastaların kendi dozlarını seçmesine ve sonuçları kendilerinin izlemesine izin verdi.",
        "Withering, etkileri kaydettikten sonra hastalara doz vermeyi bıraktı.",
        "Withering, tüm hastalara aynı dozu verip sonuçları göz ardı etti.",
      ],
      "'carefully recorded the dose given to each patient' 'her hastaya verilen dozu dikkatle kaydetti', 'and the effects that followed' 've ardından gelen etkileri' demektir.",
    ],
    [
      "The team was so short of the drug that they had to collect it from the patient's urine.",
      [
        "Ekibin ilacı o kadar azdı ki onu hastanın idrarından toplamak zorunda kaldılar.",
        "Ekibin o kadar çok ilacı vardı ki bir kısmını atmak zorunda kaldılar.",
        "Hasta, ilacı idrarıyla hızla vücudundan çıkardığı için hiçbir biçimde tedavi edilemedi.",
        "Ekip, ilacı yalnızca hastanın idrarını incelemek için kullandı.",
        "İlaç, hastaların idrarından laboratuvarda özel yöntemlerle üretilen bir maddeydi.",
      ],
      "'was so short of the drug that' 'ilacı o kadar azdı ki', 'had to collect it from the patient's urine' 'onu hastanın idrarından toplamak zorunda kaldılar' demektir.",
    ],
    [
      "The student argued that he deserved a share of the credit and of the money from the patent.",
      [
        "Öğrenci, övgüden ve patentten gelen paradan pay almayı hak ettiğini savundu.",
        "Öğrenci, patentten gelen paranın tamamını profesörüne verdi.",
        "Öğrenci, keşifte hiçbir payı olmadığını ve övgünün profesörüne ait olduğunu kabul etti.",
        "Öğrenci, buluş için herhangi bir patent başvurusu yapılmasına baştan beri karşı çıktı.",
        "Öğrenci, övgüyü istemediğini ama parayı hak ettiğini söyledi.",
      ],
      "'he deserved a share of the credit and of the money from the patent' 'övgüden ve patentten gelen paradan pay almayı hak ettiği' demektir.",
    ],
    [
      "The researchers examined more than two thousand traditional recipes in search of a cure for malaria.",
      [
        "Araştırmacılar, sıtmaya çare bulmak amacıyla iki binden fazla geleneksel tarifi inceledi.",
        "Araştırmacılar, sıtmanın geleneksel tariflerle tedavi edilemeyeceğini kanıtladı.",
        "Araştırmacılar, iki binden fazla sıtma hastasını geleneksel yöntemlerle tedavi etti.",
        "Geleneksel tarifler, sıtmanın nasıl yayıldığını açıklıyordu.",
        "Araştırmacılar, yalnızca birkaç geleneksel tarifi incelemeye vakit buldu.",
      ],
      "'examined more than two thousand traditional recipes' 'iki binden fazla geleneksel tarifi inceledi', 'in search of a cure for malaria' 'sıtmaya çare bulmak amacıyla' demektir.",
    ],
    [
      "A substance formed in mouldy clover stopped the animals' blood from clotting normally.",
      [
        "Küflü yoncada oluşan bir madde, hayvanların kanının normal biçimde pıhtılaşmasını engelledi.",
        "Küflü yonca, hayvanların kanının daha hızlı pıhtılaşmasına yol açtı.",
        "Hayvanlar, küflü yoncayı yemeyi reddettiği için açlıktan zayıf düştü.",
        "Yoncadaki küf, hayvanların kanından ve topraktaki maddelerden oluşuyordu.",
        "Küflü yonca, hayvanları her türlü kanamaya karşı uzun süre korudu.",
      ],
      "'A substance formed in mouldy clover' 'küflü yoncada oluşan bir madde', 'stopped the animals' blood from clotting normally' 'hayvanların kanının normal biçimde pıhtılaşmasını engelledi' demektir.",
    ],
    [
      "Ehrlich hoped to find chemicals that would attack disease-causing organisms while leaving the body unharmed.",
      [
        "Ehrlich, bedene zarar vermeden hastalık yapan organizmalara saldıracak kimyasallar bulmayı umuyordu.",
        "Ehrlich, hem bedene hem de organizmalara saldıracak kimyasallar arıyordu.",
        "Ehrlich, hiçbir kimyasalın hastalıkları tedavi edemeyeceğine ve yalnızca bedene zarar vereceğine inanıyordu.",
        "Ehrlich, bedeni güçlendiren ama organizmalara dokunmayan kimyasallar buldu.",
        "Ehrlich, hastalık yapan organizmaların laboratuvarda kimyasal yollarla üretilebileceğini gösterdi.",
      ],
      "'would attack disease-causing organisms' 'hastalık yapan organizmalara saldıracak', 'while leaving the body unharmed' 'bedene zarar vermeden' demektir.",
    ],
  ],
  trEn: [
    [
      "Yüksükotu, kalp yetmezliği olan hastalarda şişliği azaltabilir.",
      [
        "Foxglove can reduce swelling in patients with heart failure.",
        "Foxglove causes heart failure in most patients.",
        "Patients with heart failure should never be given foxglove.",
        "Swelling helps patients with heart failure to recover.",
        "Foxglove has no effect on patients with heart failure.",
      ],
      "'şişliği azaltabilir' 'can reduce swelling', 'kalp yetmezliği olan hastalarda' 'in patients with heart failure' karşılığıdır.",
    ],
    [
      "Penisilinin büyük ölçekli üretimi, savaş sırasında binlerce askerin hayatını kurtardı.",
      [
        "The large-scale production of penicillin saved the lives of thousands of soldiers during the war.",
        "Penicillin was produced in large amounts only after the war had ended.",
        "Thousands of soldiers were killed by the side effects of penicillin during the war.",
        "Soldiers refused to be treated with penicillin because of its side effects.",
        "The war completely prevented the production of penicillin in every country.",
      ],
      "'büyük ölçekli üretimi' 'the large-scale production', 'binlerce askerin hayatını kurtardı' 'saved the lives of thousands of soldiers' karşılığıdır.",
    ],
    [
      "Streptomisin, tüberküloza karşı etkili olan ilk antibiyotikti.",
      [
        "Streptomycin was the first antibiotic that was effective against tuberculosis.",
        "Streptomycin was the last antibiotic to be discovered from soil bacteria.",
        "Tuberculosis cannot be treated effectively with any of the known antibiotics.",
        "Streptomycin was effective only against minor infections of the skin.",
        "Tuberculosis was identified as a disease only after streptomycin had been found.",
      ],
      "'tüberküloza karşı etkili olan ilk antibiyotikti' 'was the first antibiotic that was effective against tuberculosis' karşılığıdır.",
    ],
    [
      "Artemisinin, eski bir Çin tıp metninde anlatılan bir bitkiden elde edildi.",
      [
        "Artemisinin was obtained from a plant described in an old Chinese medical text.",
        "Artemisinin was first described in a modern Chinese newspaper article.",
        "The old Chinese text warned readers against using the plant in any form.",
        "Artemisinin was made entirely from artificial chemicals in a factory in China.",
        "The plant was discovered by botanists only after artemisinin had been made.",
      ],
      "'eski bir Çin tıp metninde anlatılan bir bitkiden elde edildi' 'was obtained from a plant described in an old Chinese medical text' karşılığıdır.",
    ],
    [
      "Varfarin kullanan hastaların düzenli kan testi yaptırması gerekir.",
      [
        "Patients taking warfarin need to have regular blood tests.",
        "Patients taking warfarin must never have blood tests.",
        "Blood tests are unnecessary for patients taking warfarin.",
        "Warfarin is given only to patients who have blood tests every year.",
        "Regular blood tests replace the need for warfarin.",
      ],
      "'düzenli kan testi yaptırması gerekir' 'need to have regular blood tests' karşılığıdır.",
    ],
    [
      "Kinin, yüzyıllarca sıtmanın tek etkili tedavisiydi.",
      [
        "For centuries, quinine was the only effective treatment for malaria.",
        "Quinine was the main cause of malaria for several centuries.",
        "Malaria had many effective treatments long before quinine was known.",
        "Quinine was never used by doctors to treat patients with malaria.",
        "Quinine was effective only against mild fevers in young children.",
      ],
      "'yüzyıllarca' 'for centuries', 'tek etkili tedavisiydi' 'was the only effective treatment' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Although Alexander Fleming noticed in 1928 that a mould called Penicillium killed bacteria on one of his culture plates, he found the substance difficult to purify and soon turned to other work. It was a team at the University of Oxford, led by Howard Florey and Ernst Chain, that turned penicillin into a usable drug at the start of the Second World War. One of the team, the biochemist Norman Heatley, devised ingenious methods for growing the mould and extracting the drug, using bedpans, milk churns and bathtubs because proper equipment was unavailable in wartime. In 1940, the team showed that penicillin could protect infected mice. In early 1941, they treated their first human patient, a policeman named Albert Alexander, who was dying from an infection that had begun with a scratch. He improved dramatically within days, but there was so little penicillin that the team recovered it from his urine to use again. When the supply ran out, the infection returned, and he died. Realising that British factories, busy with the war, could not produce the drug in large quantities, Florey and Heatley flew to the United States, where companies developed methods of growing the mould in huge tanks. By the time of the Normandy landings in 1944, there was enough penicillin to treat every Allied soldier who needed it.",
      questions: [
        [
          "According to the passage, the Oxford team used bedpans and bathtubs because ----.",
          [
            "suitable laboratory equipment could not be obtained during the war",
            "these containers produced much purer penicillin than glass flasks",
            "they wanted to keep their work secret from scientists in Germany",
            "Fleming had used exactly the same method in his laboratory in 1928",
            "they had no interest in using modern laboratory technology",
          ],
          "Metne göre savaş döneminde uygun ekipman bulunamadığı için bu kaplar kullanıldı.",
        ],
        [
          "The writer mentions the case of Albert Alexander in order to show ----.",
          [
            "that the drug worked but could not yet be made in sufficient quantities",
            "that penicillin was more harmful to humans than to mice",
            "how Fleming had discovered penicillin by accident in London",
            "why policemen at that time often suffered serious infections",
            "that the mice in the earlier experiment had not been protected",
          ],
          "Hastanın hızla iyileşip ilaç bitince ölmesi, ilacın işe yaradığını ama henüz yeterli miktarda üretilemediğini gösterir.",
        ],
        [
          "It can be understood from the passage that large-scale production of penicillin ----.",
          [
            "was achieved with the help of American companies",
            "began in British factories in 1940",
            "was never achieved during the war",
            "depended on Fleming's original equipment",
            "was carried out only in Oxford",
          ],
          "Florey ve Heatley'nin ABD'ye gitmesi ve şirketlerin dev tanklarda üretim yöntemleri geliştirmesi, büyük ölçekli üretimin Amerikan şirketleri sayesinde başarıldığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In 1943, Albert Schatz, a twenty-three-year-old graduate student working in the laboratory of the soil scientist Selman Waksman at Rutgers University in New Jersey, isolated a substance produced by a soil bacterium that could kill the organism responsible for tuberculosis. The substance, named streptomycin, became the first effective antibiotic treatment for the disease, which at that time killed millions of people every year. Streptomycin was soon tested in clinical trials and became widely used. Schatz's name appeared first on the scientific paper announcing the discovery, and he and Waksman were both listed on the patent. However, Waksman increasingly presented the discovery as his own, and Schatz learned that Waksman was receiving a large share of the money paid by companies that produced the drug. In 1950, Schatz took Waksman to court, and the case was settled with an agreement that recognised Schatz as co-discoverer and gave him a share of the payments. Two years later, the Nobel Prize in medicine was awarded to Waksman alone. Schatz's career suffered, partly because many scientists regarded his lawsuit as disloyal. Only decades later did Rutgers University formally honour his contribution. The dispute is often discussed today as an example of the difficulty of deciding who deserves credit for discoveries made by teams.",
      questions: [
        [
          "According to the passage, Schatz went to court because ----.",
          [
            "he felt his role in the discovery was not being properly recognised",
            "Waksman had refused to publish the discovery in a scientific journal",
            "the drug had seriously harmed a number of patients in the trials",
            "he wanted the patent on the drug to be cancelled completely",
            "the university had dismissed him from his position without warning",
          ],
          "Metne göre Waksman keşfi kendi keşfi gibi sunuyor ve gelirden büyük pay alıyordu; Schatz bu yüzden dava açtı.",
        ],
        [
          "It can be understood from the passage that the court case ----.",
          [
            "ended with Schatz being acknowledged as a co-discoverer",
            "was won by Waksman",
            "led to Schatz receiving the Nobel Prize",
            "prevented the drug from being used",
            "was decided after Waksman's death",
          ],
          "Metne göre dava Schatz'ı ortak kâşif olarak tanıyan bir anlaşmayla sonuçlandı.",
        ],
        [
          "The writer suggests that the dispute is still discussed because ----.",
          [
            "it raises questions about how credit should be shared in team research",
            "streptomycin is no longer used to treat any disease today",
            "Waksman clearly did not deserve the Nobel Prize at all",
            "tuberculosis has completely disappeared from the world",
            "Rutgers University has closed its department of soil science",
          ],
          "Metne göre anlaşmazlık, ekiplerce yapılan keşiflerde övgünün kime ait olduğuna karar vermenin güçlüğüne örnek olarak tartışılır.",
        ],
      ],
    },
    {
      text:
        "In 1967, during the Vietnam War, the Chinese government launched a secret research programme to find new treatments for malaria, which was killing large numbers of soldiers because the parasite had become resistant to existing drugs. In 1969, a pharmaceutical chemist named Tu Youyou was appointed to lead a research group. Her team examined more than two thousand recipes from traditional Chinese medicine and tested hundreds of plant extracts on mice infected with malaria. An extract of sweet wormwood showed some promise, but the results were inconsistent. Tu then found a clue in a text written by the scholar Ge Hong in the fourth century, which advised soaking the plant in cold water and drinking the juice. She realised that the usual method of extracting substances by boiling might be destroying the active ingredient, and she developed a method using a solvent that worked at a low temperature. The new extract was completely effective in mice and monkeys. Before testing it on patients, Tu and two colleagues volunteered to take it themselves to check that it was safe. The active substance, artemisinin, is now the basis of the most effective treatments for malaria, and it is estimated to have saved millions of lives, particularly in Africa. In 2015, Tu Youyou became the first Chinese woman to receive a Nobel Prize in a scientific field.",
      questions: [
        [
          "According to the passage, the ancient text helped Tu Youyou by suggesting that ----.",
          [
            "high temperatures might be damaging the active substance",
            "the plant should be boiled in water for several hours",
            "malaria could not be cured by any kind of herbal remedy",
            "mice should not be used in experiments on new drugs",
            "sweet wormwood was poisonous to humans in large amounts",
          ],
          "Metinde bitkinin soğuk suda bekletilmesinin önerilmesi, kaynatmanın etkin maddeyi yok edebileceğini düşünmesini sağladı.",
        ],
        [
          "The writer mentions that Tu and her colleagues took the extract themselves in order to show ----.",
          [
            "how seriously they took the safety of patients",
            "that they were themselves suffering from malaria at the time",
            "that the extract tasted pleasant and was easy to swallow",
            "why the research programme had to be kept secret",
            "that the monkeys in the earlier tests had died",
          ],
          "Hastalarda denemeden önce özütü kendilerinin alması, hasta güvenliğini ne kadar ciddiye aldıklarını gösterir.",
        ],
        [
          "It can be inferred from the passage that the research programme was started because ----.",
          [
            "existing drugs were no longer working well against malaria",
            "traditional medicine had been banned",
            "malaria had disappeared from Asia",
            "Tu Youyou had requested it",
            "the war had ended",
          ],
          "Parazitin mevcut ilaçlara dirençli hâle gelmesi nedeniyle askerlerin ölmesi, programın mevcut ilaçların artık iyi işlememesi yüzünden başlatıldığını gösterir.",
        ],
      ],
    },
    {
      text:
        "In the 1920s, farmers in the northern United States and Canada began to notice that their cattle were dying of internal bleeding, sometimes after only minor injuries or routine operations. Vets eventually linked the deaths to sweet clover hay that had become mouldy, but the cause remained a mystery for years. In 1933, a farmer drove through a snowstorm to the University of Wisconsin with a dead cow, a milk can full of blood that would not clot and a load of spoiled hay, and asked for help. The chemist Karl Paul Link and his team spent several years identifying the substance responsible, a compound formed when mould acted on natural chemicals in the clover. Link's group then made many similar compounds, and in 1948 one of the most powerful was sold as a poison for rats and mice. It was named warfarin, after the Wisconsin Alumni Research Foundation, which funded the work. Doctors were at first reluctant to give a rat poison to humans, but after a man who had tried to kill himself with it recovered with treatment, interest grew. In 1954, warfarin was approved for medical use, and it was later given to President Eisenhower after a heart attack. It became one of the most widely prescribed drugs in the world for preventing dangerous blood clots, although patients need regular blood tests because the right dose varies greatly between individuals.",
      questions: [
        [
          "According to the passage, the cattle died because ----.",
          [
            "a substance in mouldy hay prevented their blood from clotting",
            "they had been given rat poison by farmers by mistake",
            "the snowstorm had killed them on the way to the university",
            "vets had operated on them incorrectly during routine operations",
            "they had eaten far too much fresh clover in the summer",
          ],
          "Metne göre küflü yoncada oluşan bir bileşik kanın pıhtılaşmasını engelleyerek iç kanamaya yol açıyordu.",
        ],
        [
          "The writer mentions the man who tried to kill himself with warfarin in order to show ----.",
          [
            "how evidence emerged that the drug could be used safely in humans",
            "that the drug was always fatal to anyone who took it",
            "why rats were not affected by the poison at all",
            "how the name warfarin was chosen by the foundation",
            "why President Eisenhower had a heart attack in 1955",
          ],
          "Adamın tedaviyle iyileşmesi, ilacın insanlarda güvenle kullanılabileceğine dair kanıtın nasıl ortaya çıktığını gösterir.",
        ],
        [
          "It can be understood from the passage that regular blood tests are needed because ----.",
          [
            "the correct amount of the drug differs from person to person",
            "the drug is always given at the same dose",
            "warfarin causes the blood to clot more quickly",
            "the drug is a poison for cattle",
            "patients often forget to take it",
          ],
          "Metne göre doğru doz kişiden kişiye büyük farklılık gösterdiği için düzenli kan testi gerekir.",
        ],
      ],
    },
    {
      text:
        "Around 1900, the German scientist Paul Ehrlich became fascinated by the way certain dyes stained some types of cells and bacteria but not others. He reasoned that if a chemical could attach itself selectively to a disease-causing organism, it might be possible to design one that would kill the organism while leaving the patient's own cells unharmed. He called such a substance a 'magic bullet'. Ehrlich and his colleagues began testing hundreds of compounds containing arsenic against syphilis, a common and serious sexually transmitted disease for which the main treatment was mercury, which was both dangerous and only partly effective. In 1909, his Japanese assistant Sahachiro Hata found that compound number 606 was highly effective against the syphilis bacterium in infected rabbits. The drug went on sale in 1910 under the name Salvarsan. It was the first modern drug designed to attack a specific microorganism, and it is often described as the beginning of chemotherapy. Salvarsan was not perfect: it had to be prepared carefully and injected, and it could cause serious side effects. Ehrlich also faced public criticism, partly because some people believed that curing syphilis would encourage immoral behaviour. The drug remained the main treatment for syphilis until penicillin became widely available in the 1940s.",
      questions: [
        [
          "According to the passage, Ehrlich's idea of a 'magic bullet' was inspired by ----.",
          [
            "observing that dyes stained only certain cells",
            "the dangerous use of mercury to treat patients with syphilis",
            "an accident involving arsenic in his laboratory in Germany",
            "the earlier work of his Japanese assistant on rabbits",
            "the discovery of penicillin by Fleming in London",
          ],
          "Metne göre bazı boyaların yalnızca belirli hücre ve bakterileri boyaması onu etkilemişti.",
        ],
        [
          "The writer mentions compound number 606 in order to show ----.",
          [
            "how many substances were tested before success was achieved",
            "that the first compound they tested was already effective",
            "how syphilis is transmitted from one person to another",
            "why mercury was such a dangerous treatment for patients",
            "that rabbits cannot be infected with the syphilis bacterium",
          ],
          "Başarılı bileşiğin 606 numaralı olması, başarıya ulaşmadan önce çok sayıda maddenin denendiğini gösterir.",
        ],
        [
          "It can be inferred from the passage that some of the criticism Ehrlich faced ----.",
          [
            "was based on moral rather than medical concerns",
            "came from patients who had been cured",
            "was about the price of the drug",
            "was caused by the use of rabbits",
            "led him to stop his research",
          ],
          "Bazı insanların frenginin tedavisinin ahlaksız davranışı teşvik edeceğine inanması, eleştirinin tıbbi değil ahlaki kaygılara dayandığını gösterir.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "The half-life of a drug is the time it takes for the amount in the body to fall by half. ---- Drugs with a long half-life, on the other hand, may need to be taken only once a day or even less often.",
      [
        "Drugs with a short half-life must usually be taken several times a day to keep their levels steady.",
        "Many drugs are broken down in the liver before they leave the body.",
        "Some patients, especially children, find it difficult to swallow large tablets.",
        "New drugs are usually tested for many years before they are approved for use.",
        "Doctors often ask patients about any other medicines they are currently taking.",
      ],
      "Boşluktan sonra 'on the other hand' ile yarılanma ömrü uzun ilaçlar anlatılır; boşluğa karşıt durumu, kısa ömürlü ilaçların günde birkaç kez alınması gerektiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Every medicine has an expiry date printed on its packaging. ---- For this reason, patients are advised not to use medicines after this date.",
      [
        "After this date, the manufacturer can no longer guarantee that the drug is fully effective and safe.",
        "Many medicines are sold in small cardboard boxes with a leaflet inside.",
        "Some people keep their medicines in the bathroom, where it is often warm and damp.",
        "In many towns, at least one pharmacy stays open late in the evening.",
        "Medicines are usually cheaper when they are bought in large quantities by hospitals.",
      ],
      "Boşluktan sonra 'For this reason' ile son kullanma tarihinden sonra ilaç kullanılmaması tavsiye edilir; boşluğa üreticinin bu tarihten sonra ilacın etkili ve güvenli olduğunu garanti edemediğini söyleyen cümle gelmelidir.",
    ],
    [
      "In many countries, medicines are sold in containers with caps that are difficult for young children to open. ---- Since their introduction, the number of children accidentally poisoned by medicines has fallen considerably.",
      [
        "Adults can open them by pressing down and turning at the same time.",
        "Many young children enjoy playing with small toys and putting them in their mouths.",
        "Some medicines for children are sold as sweet-tasting liquids.",
        "Young children often visit the doctor for routine vaccinations.",
        "Medicine bottles are usually made of plastic or dark brown glass.",
      ],
      "Boşluktan önce çocukların açmakta zorlandığı kapaklar anlatılır; boşluğa yetişkinlerin bunları bastırıp aynı anda çevirerek açabildiğini söyleyen tamamlayıcı cümle gelmelidir.",
    ],
    [
      "Some medicines can be bought without a prescription, from pharmacies or even supermarkets. ---- Even so, they can be harmful if they are taken in large amounts or combined with other drugs.",
      [
        "These are usually drugs that are considered safe for most people when used as directed.",
        "Large supermarkets sell a very wide range of food and household products.",
        "Many older people visit a pharmacy at least once every month.",
        "Some prescriptions must be renewed by a doctor every few months.",
        "Family doctors write prescriptions for dozens of patients each day.",
      ],
      "Boşluktan sonra 'Even so' ile bu ilaçların yine de zararlı olabileceği söylenir; boşluğa bunların talimatlara uygun kullanıldığında çoğu kişi için güvenli kabul edildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Rare diseases may affect only a few thousand people in a country. ---- To encourage research, many governments offer special benefits to companies that develop so-called orphan drugs.",
      [
        "As a result, companies often have little financial reason to develop treatments for them.",
        "Many rare diseases are caused by changes in a single gene.",
        "Some patients with rare diseases travel abroad for specialist treatment.",
        "Doctors may see only one case in their whole career.",
        "Patient groups often organise events to raise money for research.",
      ],
      "Boşluktan sonra 'To encourage research' ile şirketlere teşvik verildiği söylenir; boşluğa şirketlerin bu hastalıklara tedavi geliştirmek için çoğu zaman az mali neden bulduğunu söyleyen 'As a result' cümlesi gelmelidir.",
    ],
    [
      "Many vaccines lose their effectiveness if they become too warm or too cold. ---- This system of refrigerated transport and storage is known as the cold chain.",
      [
        "They must therefore be kept within a narrow range of temperatures from the factory to the clinic.",
        "Most vaccines are given by injection into the muscle of the upper arm.",
        "Some vaccines are given to babies in the first weeks of life.",
        "Many clinics in rural areas have no electricity.",
        "Vaccines have now been developed against dozens of serious diseases.",
      ],
      "Boşluktan sonra 'This system' ile soğuk zincir tanımlanır; boşluğa aşıların fabrikadan kliniğe kadar dar bir sıcaklık aralığında tutulması gerektiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Biological medicines are made from living cells rather than by chemical processes.",
        "When their patents expire, other companies may produce similar versions called biosimilars.",
        "Many cells in the human body are replaced every few weeks.",
        "Regulators require evidence that each biosimilar matches the original medicine closely.",
        "They can greatly reduce the cost of treatment for health services.",
      ],
      odd: 2,
      why: "Parça biyobenzer ilaçları anlatır. İnsan vücudundaki pek çok hücrenin birkaç haftada bir yenilendiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Paracetamol is one of the most widely used painkillers in the world.",
        "It is safe at normal doses.",
        "Taking too much, however, can cause serious damage to the liver.",
        "Alcohol is also broken down mainly by the liver.",
        "For this reason, some countries limit the number of tablets that can be bought at once.",
      ],
      odd: 3,
      why: "Parça parasetamolün güvenli kullanımını anlatır. Alkolün de esas olarak karaciğerde parçalandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Homeopathy is based on the idea that substances diluted many times can cure illness.",
        "In many preparations, the dilution is so great that no molecules of the original substance remain.",
        "Large reviews of research have found no reliable evidence that it works better than a placebo.",
        "Many people drink bottled water instead of tap water.",
        "Some health services have therefore stopped paying for it.",
      ],
      odd: 3,
      why: "Parça homeopatiyi anlatır. Pek çok kişinin musluk suyu yerine şişe suyu içtiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Extracts of the ginkgo tree are widely sold as supplements to improve memory.",
        "Ginkgo trees are often planted along city streets for their fan-shaped leaves.",
        "Large trials, however, have found that it does not prevent dementia.",
        "It may also increase the risk of bleeding in people taking blood-thinning drugs.",
        "Patients are therefore advised to tell their doctor about any supplements they use.",
      ],
      odd: 1,
      why: "Parça ginkgo takviyelerinin etkisi ve riskini anlatır. Ginkgo ağaçlarının yelpaze biçimli yaprakları için şehir caddelerine dikildiğini söyleyen II. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Blister packs hold each tablet in its own small plastic compartment.",
        "They protect the tablets from moisture and air.",
        "They also make it easier for patients to see whether they have taken a dose.",
        "Plastic waste has become a serious environmental problem.",
        "Some packs are printed with the days of the week to help patients remember.",
      ],
      odd: 3,
      why: "Parça blister ambalajları anlatır. Plastik atığın ciddi bir çevre sorunu hâline geldiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Children cannot simply be given smaller versions of adult doses.",
        "Their bodies absorb and break down drugs differently.",
        "Doses for children are therefore often calculated according to their body weight.",
        "Many children grow quickly during their teenage years.",
        "Special liquid forms are also made so that young children can swallow medicines easily.",
      ],
      odd: 3,
      why: "Parça çocuklarda ilaç dozlarını anlatır. Pek çok çocuğun ergenlikte hızla büyüdüğünü söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
