import type { YokdilDeneme } from "./types";

export const FEN_22: YokdilDeneme = {
  no: 22,
  field: "fen",
  vocab: [
    [
      "Perkin was trying to make an artificial form of quinine when he ---- produced a bright purple dye.",
      ["accidentally", "deliberately", "rarely", "slowly", "secretly"],
      "Perkin'in yapay kinin üretmeye çalışırken 'kazara' (accidentally) parlak mor bir boya elde ettiği anlatılır.",
    ],
    [
      "Wöhler's result ---- the widespread belief that substances from living things could not be made in the laboratory.",
      ["challenged", "confirmed", "ignored", "repeated", "decorated"],
      "Wöhler'in sonucunun canlılardan elde edilen maddelerin laboratuvarda yapılamayacağı yönündeki yaygın inancı 'sarstığı/meydan okuduğu' (challenged) anlatılır.",
    ],
    [
      "Thanks to the new method, factories could turn out enough fertiliser to ---- billions of people.",
      ["feed", "employ", "frighten", "punish", "divide"],
      "Sürecin çok büyük ölçekte gübre üretmeyi mümkün kılarak milyarlarca insanı 'beslemeye' (feed) yardım ettiği anlatılır.",
    ],
    [
      "The liquid was dangerously ----: a sudden knock or jolt could set it off.",
      ["unstable", "valuable", "harmless", "transparent", "heavy"],
      "Sıvının tehlikeli derecede 'kararsız' (unstable) olduğu, ani bir darbe ya da sarsıntının onu patlatabileceği anlatılır.",
    ],
    [
      "Each element gives off light of particular colours when it is heated, which allows it to be ----.",
      ["identified", "destroyed", "hidden", "sold", "invented"],
      "Her elementin ısıtıldığında belirli renklerde ışık yaydığı ve bunun onun 'tanımlanmasını' (identified) sağladığı anlatılır.",
    ],
    [
      "Countries began to ---- leaded petrol after research showed how harmful it was.",
      ["phase out", "look into", "take up", "set up", "make up"],
      "Ülkelerin, araştırmalar ne kadar zararlı olduğunu gösterince kurşunlu benzini 'aşamalı olarak kaldırmaya' (phase out) başladığı anlatılır.",
    ],
  ],
  grammar: [
    [
      "The first synthetic dye ---- in 1856 by an eighteen-year-old student.",
      ["was discovered", "discovered", "has discovered", "was discovering", "had discovered"],
      "Boya keşfedilen bir şeydir ve olay geçmiştedir: edilgen geçmiş zaman 'was discovered'.",
    ],
    [
      "If Patterson had not tried to measure the age of the Earth, he ---- how much lead had polluted the environment.",
      ["might not have realised", "might not realise", "will not realise", "did not realise", "had not realised"],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "By the time a French newspaper published his obituary by mistake, Nobel ---- a fortune from explosives.",
      ["had made", "has made", "makes", "will make", "is making"],
      "Geçmişteki bir olaydan önce tamamlanmış eylem: Past Perfect 'had made'.",
    ],
    [
      "Midgley, ---- inventions included leaded petrol and CFCs, was once described as having had more impact on the atmosphere than any other single organism.",
      ["whose", "who", "which", "whom", "where"],
      "Buluşlar Midgley'ye aittir; iyelik bildiren 'whose' gerekir.",
    ],
    [
      "Only after Bunsen developed a burner with an almost colourless flame ---- it become possible to study the colours produced by different elements clearly.",
      ["did", "was", "had", "has", "it did"],
      "'Only after …' ile başlayan cümlede ana cümle devrik olur; geçmiş zamanda 'did it become' gerekir.",
    ],
    [
      "The new dye was ---- popular that purple became the most fashionable colour in Europe.",
      ["so", "such", "too", "very", "as"],
      "Sıfattan önce sonuç bildiren 'so … that' yapısı gerekir.",
    ],
    [
      "---- the process saved millions from hunger, it was also used to make explosives during the war.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Süreç milyonları açlıktan kurtarırken savaşta patlayıcı yapımında da kullanıldı: 'Although'.",
    ],
    [
      "Kekulé claimed to have imagined a snake ---- its own tail.",
      ["biting", "to bite", "bite", "bitten", "to have bitten"],
      "'imagine + nesne + -ing' yapısı gerekir: 'a snake biting its own tail'.",
    ],
    [
      "Leaded petrol is estimated ---- the health of hundreds of millions of children.",
      ["to have damaged", "to damage", "damaging", "to be damaged", "to have been damaged"],
      "Geçmişte gerçekleşmiş bir etki: 'be estimated to have + V3' yapısı 'to have damaged'.",
    ],
    [
      "The ammonia ---- by the new process was used to make fertiliser.",
      ["produced", "producing", "which produced", "to produce", "has produced"],
      "Amonyak üretilen bir maddedir; edilgen anlamlı geçmiş ortaç 'produced' gerekir.",
    ],
    [
      "Neither Haber ---- Bosch could have achieved the result alone.",
      ["nor", "or", "and", "but", "either"],
      "'Neither … nor' kalıbı gerekir.",
    ],
    [
      "Nobel mixed nitroglycerine with a type of fine clay ---- it could be handled safely.",
      ["so that", "in order to", "because of", "despite", "instead of"],
      "Amaç bildiren ve ardından tam bir cümle alan bağlaç 'so that' gerekir.",
    ],
    [
      "Some scientists treated the new compound as though it ---- completely safe.",
      ["were", "is", "will be", "has been", "being"],
      "'as though' ile gerçek dışı bir durum anlatıldığında 'were' kullanılır.",
    ],
    [
      "The higher the temperature in the reactor, ---- the reaction proceeded.",
      ["the faster", "faster", "the fastest", "more fast", "the more fast"],
      "'The higher …, the faster …' karşılaştırma kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1856, William Henry Perkin, an eighteen-year-old student at the Royal College of Chemistry in London, was working in a small laboratory at his family's home during the Easter holidays. His professor had suggested that it might be possible to make quinine, the costly anti-malaria drug, out of substances present in coal tar, {1} was a cheap waste product of the gas industry. Perkin's experiment failed to produce quinine, {2} when he cleaned out his flask with alcohol, he noticed that it left a beautiful purple solution. He realised that the substance could be used to dye silk, {3} in those days, purple colouring came from costly natural sources such as shellfish. Against his professor's advice, Perkin left college, and with the help of his father and brother he built a factory to produce the dye, {4} became known as mauve. The colour soon became extremely fashionable, worn by Queen Victoria and the French Empress Eugénie. Perkin's discovery started the synthetic dye industry, {5} encouraged chemists to make many other new compounds from coal tar, leading eventually to the development of drugs, perfumes and plastics.",
      blanks: [
        [
          "(21) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra 'coal tar' ifadesini niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(22) ----",
          ["but", "because", "so that", "unless", "since"],
          "Deneyin kinin üretememesi ile mor bir çözelti fark etmesi zıttır: 'but'.",
        ],
        [
          "(23) ----",
          ["and", "but", "unless", "although", "or"],
          "Maddenin ipeği boyamakta kullanılabileceğini fark etmesi ve o zaman mor boyaların pahalı olması birbirine eklenen bilgilerdir: 'and'.",
        ],
        [
          "(24) ----",
          ["which", "who", "where", "whose", "what"],
          "Boşluk virgülden sonra boyayı niteleyen ve özne görevindeki ilgi zamiridir: 'which'.",
        ],
        [
          "(25) ----",
          ["and", "but", "unless", "although", "or"],
          "Endüstriyi başlatması ve kimyacıları yeni bileşikler yapmaya teşvik etmesi birbirine eklenir: 'and'.",
        ],
      ],
    },
    {
      text:
        "In the early nineteenth century, many chemists believed in 'vitalism', the idea that the substances produced by living organisms, known as organic compounds, contained a special 'vital force' and could therefore be made only by living things. In 1828, Friedrich Wöhler, then a young teacher in Berlin, was trying to make a compound called ammonium cyanate {1} he unexpectedly obtained white crystals that turned out to be urea, a substance found in urine. Wöhler wrote excitedly to his teacher, the Swedish chemist Jöns Jacob Berzelius, {2} he could make urea 'without needing kidneys or an animal, either man or dog'. His result is often described as the moment {3} vitalism was disproved. Historians now point out, however, that the story is more complicated. The chemicals Wöhler started with had themselves been obtained partly from animal sources, {4} many chemists continued to believe in some form of vital force for several more decades. {5}, his experiment encouraged others to attempt the synthesis of organic compounds, and by the end of the century chemists had made hundreds of them in the laboratory, laying the foundations of modern organic chemistry.",
      blanks: [
        [
          "(26) ----",
          ["when", "unless", "although", "because", "so that"],
          "Bileşiği hazırlamaya çalışırken beyaz kristaller elde ettiği anlatılır; eşzamanlı olay 'when' ile bağlanır.",
        ],
        [
          "(27) ----",
          ["saying that", "in order that", "unless", "as if", "so as"],
          "Hocasına yazdığı mektubun içeriği aktarılır: 'saying that'.",
        ],
        [
          "(28) ----",
          ["when", "which", "who", "whose", "what"],
          "Boşluk 'the moment' (zaman) ifadesini niteler ve ardından tam bir cümle gelir: 'when'.",
        ],
        [
          "(29) ----",
          ["and", "but", "unless", "although", "or"],
          "Başlangıç maddelerinin hayvansal kaynaklı olması ve kimyacıların yaşam gücüne inanmayı sürdürmesi birbirine eklenen karmaşık durumlardır: 'and'.",
        ],
        [
          "(30) ----",
          ["Nevertheless", "Therefore", "For example", "Similarly", "In other words"],
          "Hikâyenin karmaşık olmasına rağmen deneyin başkalarını teşvik etmesi zıtlık bildirir: 'Nevertheless'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Haber received the Nobel Prize for the synthesis of ammonia, ----.",
      [
        "his role in developing poison gas made him a highly controversial figure",
        "he worked for many years as a professor of chemistry in the city of Karlsruhe",
        "ammonia is a gas made up of one nitrogen atom and three hydrogen atoms",
        "the process required very high temperatures and pressures to work at all",
        "the prize was awarded to him in Stockholm at the end of the First World War",
      ],
      "'Although' zıtlık ister: amonyak sentezi için Nobel almasına rağmen zehirli gaz geliştirmedeki rolü onu tartışmalı biri yaptı.",
    ],
    [
      "If Nobel had not read his own obituary, ----.",
      [
        "he might never have decided to establish the famous prizes",
        "the newspaper is published in Paris every morning",
        "most chemists will work with explosives in the future",
        "his brother had died in Cannes in 1888",
        "dynamite was used to build tunnels and canals",
      ],
      "Geçmişe dair gerçek dışı koşul (Type 3) ana cümlede 'might have + V3' ister.",
    ],
    [
      "Bunsen and Kirchhoff studied the light produced by heated substances ----.",
      [
        "because each element produced its own pattern of coloured lines",
        "although none of the elements gave off any light at all",
        "unless the flame was too hot for the instruments",
        "so that they could make brighter fireworks for festivals",
        "even if the substances were impossible to heat",
      ],
      "Isıtılmış maddelerin ışığını incelemelerinin nedeni her elementin kendine özgü renkli çizgiler üretmesidir: 'because'.",
    ],
    [
      "Since leaded petrol was banned in most countries, ----.",
      [
        "the average level of lead in people's blood has fallen sharply",
        "the additive had been used to stop engines from knocking",
        "most cars would have run more smoothly with lead",
        "petrol will become much cheaper in the future",
        "Midgley was working for a large car company",
      ],
      "'Since' ile geçmişten bugüne uzanan durum Present Perfect ister: 'has fallen'.",
    ],
    [
      "Unless nitroglycerine is handled with extreme care, ----.",
      [
        "it may explode without warning",
        "the factory would have been closed by the government",
        "most workers had been trained in Sweden",
        "the clay will absorb all of the liquid",
        "the explosion was heard many kilometres away",
      ],
      "'Unless' gerçek bir koşul bildirir ve ana cümle sonucu anlatır: son derece dikkatli kullanılmadıkça uyarısız patlayabilir.",
    ],
    [
      "The demand for synthetic fertiliser became so great ----.",
      [
        "that about half of humanity now relies on it for food",
        "because farmers everywhere needed to grow more crops on the same amount of land",
        "although natural fertilisers such as manure were still widely used on farms",
        "while the population of the world continued to grow rapidly",
        "unless governments decided to limit its use on farms",
      ],
      "'so great that' sonuç bildiren yapıdır; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "Chemists have found that when a catalyst is added to a reaction, ----.",
      [
        "the reaction speeds up while the catalyst itself is not used up",
        "it would have produced completely different and more dangerous substances",
        "most of the starting materials had already been destroyed by heat",
        "the products will always be too dangerous for chemists to handle",
        "the temperature in the laboratory was too low for anything to happen",
      ],
      "'when' ile genel bir bulgu anlatılır: bir tepkimeye katalizör eklendiğinde tepkime katalizör tükenmeden çok daha hızlı gerçekleşebilir.",
    ],
    [
      "So convinced was Patterson of the dangers of lead ----.",
      [
        "that he campaigned for years against powerful industries",
        "because he had found it everywhere in his samples",
        "although his research had begun with meteorites",
        "while other scientists were studying the oceans",
        "unless the government listened to him",
      ],
      "Devrik 'So convinced was … that' yapısı sonuç bildirir; ikinci kısım 'that' ile başlamalıdır.",
    ],
    [
      "While Haber worked out how to make ammonia in the laboratory, ----.",
      [
        "it was Bosch who learned to produce it in factories",
        "nitrogen makes up nearly four fifths of the air that we breathe",
        "Germany was one of the most important centres of chemistry in Europe",
        "fertilisers are now used on farms in almost every part of the world",
        "plants need nitrogen and other nutrients in order to grow well",
      ],
      "'While' iki katkıyı karşılaştırır: Haber amonyağın laboratuvarda nasıl yapılacağını bulurken onu endüstriyel ölçekte üretmenin yollarını bulan Bosch'tu.",
    ],
    [
      "Once Bunsen and Kirchhoff had developed their method, ----.",
      [
        "they used it to discover two new elements",
        "the burner will be sold in every shop",
        "the flames would have become brighter",
        "light travels faster than sound",
        "most elements had been discovered already",
      ],
      "'Once' ile geçmişte bir olayın ardından gelen sonuç anlatılır: yöntemi kullanarak iki yeni element keşfettiler.",
    ],
    [
      "No sooner had Perkin noticed the purple colour ----.",
      [
        "than he began to test whether it could be used to dye cloth",
        "when the experiment had been planned by his professor",
        "that the factory will be built near London",
        "before he had started his studies at the college",
        "so he forgot about the quinine",
      ],
      "'No sooner had … than' kalıplaşmış bir yapıdır; ikinci kısım 'than' ile başlamalıdır.",
    ],
  ],
  enTr: [
    [
      "Perkin noticed that the residue in his flask produced a beautiful purple solution.",
      [
        "Perkin, şişesindeki kalıntının güzel mor bir çözelti oluşturduğunu fark etti.",
        "Perkin, şişesindeki mor çözeltinin tamamen renksiz hâle geldiğini fark etti.",
        "Perkin, mor çözeltiyi temizlemek için şişesine kalıntı ekledi.",
        "Perkin, şişesinin kırıldığını ve mor çözeltinin kaybolduğunu gördü.",
        "Perkin, kalıntının kininin ta kendisi olduğunu hemen anladı.",
      ],
      "'noticed that the residue in his flask' 'şişesindeki kalıntının … fark etti', 'produced a beautiful purple solution' 'güzel mor bir çözelti oluşturduğunu' demektir.",
    ],
    [
      "Wöhler showed that a compound found in living things could be made from non-living materials.",
      [
        "Wöhler, canlılarda bulunan bir bileşiğin cansız maddelerden yapılabileceğini gösterdi.",
        "Wöhler, canlılarda bulunan bileşiklerin hiçbir zaman yapay olarak üretilemeyeceğini gösterdi.",
        "Wöhler, cansız maddelerin yalnızca canlıların içinde oluşabileceğini kanıtladı.",
        "Wöhler, bileşiği bir hayvanın böbreklerinden elde etti.",
        "Wöhler, canlılar ile cansız maddeler arasında hiçbir fark olmadığını iddia etti.",
      ],
      "'a compound found in living things' 'canlılarda bulunan bir bileşik', 'could be made from non-living materials' 'cansız maddelerden yapılabileceği' demektir.",
    ],
    [
      "The process combines nitrogen from the air with hydrogen at high pressure.",
      [
        "Süreç, havadaki azotu yüksek basınç altında hidrojenle birleştirir.",
        "Süreç, havadaki azotu hidrojenden düşük basınçla ayırır.",
        "Süreç, hidrojeni havaya salarak azot üretir.",
        "Yüksek basınç, azotun hidrojenle birleşmesini engeller.",
        "Süreç, havadan azot almak yerine topraktan hidrojen çıkarır.",
      ],
      "'combines nitrogen from the air with hydrogen' 'havadaki azotu hidrojenle birleştirir', 'at high pressure' 'yüksek basınç altında' demektir.",
    ],
    [
      "According to the article, he had made his money by inventing new means of killing.",
      [
        "Yazıya göre parasını yeni öldürme yolları icat ederek kazanmıştı.",
        "Yazıya göre servetini insanların hayatını kurtaran buluşlarla kazanmıştı.",
        "Yazı, onun hiçbir buluş yapmadığını ve hiç zengin olmadığını öne sürdü.",
        "Yazıya göre buluşlarından hiç para kazanmamış ve yoksulluk içinde ölmüştü.",
        "Yazı, onu servetini bilime bağışlayan cömert bir mucit olarak tanımladı.",
      ],
      "'According to the article' 'yazıya göre', 'he had made his money by inventing new means of killing' 'parasını yeni öldürme yolları icat ederek kazanmıştı' demektir.",
    ],
    [
      "Lead from petrol had spread throughout the environment, even to remote parts of the ocean.",
      [
        "Benzinden gelen kurşun, okyanusun uzak bölgelerine bile, tüm çevreye yayılmıştı.",
        "Benzinden gelen kurşun, okyanuslara hiç ulaşmadan yalnızca büyük şehirlerin havasında kalmıştı.",
        "Okyanusun uzak bölgeleri, benzinden gelen kurşunun çevreye yayılmasını tamamen engellemişti.",
        "Benzine eklenen kurşun, uzak okyanus bölgelerinden çıkarılan sudan elde ediliyordu.",
        "Çevredeki kurşun miktarı, benzin kullanımı arttıkça tüm bölgelerde azalmıştı.",
      ],
      "'Lead from petrol had spread throughout the environment' 'benzinden gelen kurşun tüm çevreye yayılmıştı', 'even to remote parts of the ocean' 'okyanusun uzak bölgelerine bile' demektir.",
    ],
    [
      "When the light passed through a prism, it was split into a series of bright lines.",
      [
        "Işık bir prizmadan geçtiğinde, bir dizi parlak çizgiye ayrıldı.",
        "Işık bir prizmadan geçtiğinde, tamamen kayboldu.",
        "Prizma, ışığın parlaklığını iki katına çıkardı.",
        "Parlak çizgiler, prizmanın ışığı engellemesine neden oldu.",
        "Işık, prizmadan geçmeden önce çizgilere ayrılmıştı.",
      ],
      "'When the light passed through a prism' 'ışık bir prizmadan geçtiğinde', 'it was split into a series of bright lines' 'bir dizi parlak çizgiye ayrıldı' demektir.",
    ],
  ],
  trEn: [
    [
      "Perkin'in buluşu, yapay boya endüstrisinin doğmasını sağladı.",
      [
        "Perkin's discovery led to the birth of the synthetic dye industry.",
        "Perkin's discovery put an end to the synthetic dye industry.",
        "The synthetic dye industry existed long before Perkin's discovery.",
        "Perkin refused to allow his discovery to be used in industry.",
        "Perkin's discovery was concerned only with natural dyes.",
      ],
      "'yapay boya endüstrisinin doğmasını sağladı' 'led to the birth of the synthetic dye industry' karşılığıdır.",
    ],
    [
      "Nobel, servetinin büyük bölümünü ödüller kurmak için bıraktı.",
      [
        "Nobel left most of his fortune to establish prizes.",
        "Nobel spent all of his fortune on explosives.",
        "Nobel left his fortune to his brother.",
        "Nobel refused to give any of his money to science.",
        "Nobel lost his fortune in a factory explosion.",
      ],
      "'servetinin büyük bölümünü ödüller kurmak için bıraktı' 'left most of his fortune to establish prizes' karşılığıdır.",
    ],
    [
      "Kekulé, benzen molekülünün halka biçiminde olduğunu öne sürdü.",
      [
        "Kekulé proposed that the benzene molecule has the shape of a ring.",
        "Kekulé proved that benzene molecules are arranged in long straight lines.",
        "Kekulé refused to study the shape of molecules for religious reasons.",
        "Kekulé believed that benzene molecules had no definite shape at all.",
        "Kekulé discovered the liquid benzene in a dream about snakes.",
      ],
      "'halka biçiminde olduğunu öne sürdü' 'proposed that … has the shape of a ring' karşılığıdır.",
    ],
    [
      "Kurşunlu benzin, pek çok ülkede yasaklandı.",
      [
        "Leaded petrol was banned in many countries.",
        "Leaded petrol was introduced in many countries.",
        "Leaded petrol is still used in all countries.",
        "Many countries encouraged the use of leaded petrol.",
        "Leaded petrol was never sold outside the United States.",
      ],
      "'pek çok ülkede yasaklandı' 'was banned in many countries' karşılığıdır.",
    ],
    [
      "Bu yöntemle iki yeni element keşfedildi.",
      [
        "Two new elements were discovered with this method.",
        "This method could not be used to discover elements.",
        "Two elements were destroyed by this method.",
        "The method was invented after the two elements had been found.",
        "No new elements have ever been discovered.",
      ],
      "'bu yöntemle iki yeni element keşfedildi' 'two new elements were discovered with this method' karşılığıdır.",
    ],
    [
      "Yapay gübre, dünyadaki tarımsal üretimi büyük ölçüde artırdı.",
      [
        "Synthetic fertiliser greatly increased agricultural production worldwide.",
        "Synthetic fertiliser greatly reduced agricultural production around the world.",
        "Most farmers around the world refused to use synthetic fertiliser.",
        "Agricultural production does not depend in any way on fertiliser.",
        "Synthetic fertiliser is used only in small private gardens.",
      ],
      "'dünyadaki tarımsal üretimi büyük ölçüde artırdı' 'greatly increased agricultural production worldwide' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "Around 1900, many scientists feared that the world would soon run short of food. Crops depend on nitrogen, and even though nearly four fifths of the air consists of it, most plants cannot use it in that form. Farmers relied on natural fertilisers such as manure and on deposits of nitrate mined in Chile, but these supplies were limited. In 1909, Fritz Haber, working at Karlsruhe, discovered how to make ammonia by joining atmospheric nitrogen to hydrogen, which can be turned into fertiliser. The reaction required high pressure, a high temperature and a catalyst to speed it up. Carl Bosch, an engineer at the chemical company BASF, then faced the enormous challenge of scaling the process up, designing steel reactors strong enough to withstand the pressure. By 1913, the first industrial plant was in operation. Many historians rank the Haber–Bosch process among humanity's most consequential achievements: it is estimated that around half of the nitrogen in the bodies of people alive today comes from fertiliser made in this way. The process also had a darker side. During the First World War, it allowed Germany to produce explosives despite a naval blockade, and Haber himself led the development of chemical weapons, including chlorine gas.",
      questions: [
        [
          "According to the passage, the Haber–Bosch process was needed because ----.",
          [
            "existing sources of nitrogen fertiliser were limited",
            "the air contained too little nitrogen",
            "plants could use nitrogen directly from the air",
            "Chile refused to sell nitrates to Europe",
            "manure was harmful to crops",
          ],
          "Metne göre çiftçiler gübre ve Şili'deki nitrat yataklarına dayanıyordu ama bu kaynaklar sınırlıydı.",
        ],
        [
          "The writer mentions the nitrogen in people's bodies in order to show ----.",
          [
            "how much the world's food supply depends on the process",
            "that fertiliser is dangerous to eat",
            "how ammonia is produced in large factories",
            "why Haber received the Nobel Prize for chemistry",
            "that the process needs a catalyst to work",
          ],
          "Bugün yaşayan insanların vücudundaki azotun yaklaşık yarısının bu yolla yapılan gübreden gelmesi, dünyanın besin kaynağının sürece ne kadar bağlı olduğunu gösterir.",
        ],
        [
          "It can be understood from the passage that Bosch's main contribution was ----.",
          [
            "turning a laboratory reaction into an industrial process",
            "discovering how to combine nitrogen and hydrogen",
            "inventing chlorine gas",
            "finding nitrate deposits in Chile",
            "designing a new kind of fertiliser",
          ],
          "Metne göre Bosch süreci büyütmek ve basınca dayanacak çelik reaktörler tasarlamakla uğraştı.",
        ],
      ],
    },
    {
      text:
        "In 1888, the brother of the Swedish chemist and industrialist Alfred Nobel died in Cannes, in the south of France. A French newspaper, mistakenly believing that it was Alfred who had died, printed a harsh obituary that called him a 'merchant of death' and accused him of growing wealthy from inventions that made killing easier. Nobel had made his fortune from dynamite, which he had invented in 1867 by mixing nitroglycerine, a powerful but dangerously unstable liquid, with a type of fine, porous earth. The mixture could be shaped into sticks and handled safely, and it was widely used in mining, quarrying and the construction of railways, tunnels and canals. However, it was also used in warfare. Nobel had experienced the dangers of explosives personally: in 1864, an explosion at his family's factory had killed several people, including his younger brother Emil. According to many accounts, reading his own obituary made Nobel deeply concerned about how he would be remembered. When he died in 1896, his will left the bulk of his enormous fortune to fund annual prizes for those who had conferred 'the greatest benefit on mankind' in physics, chemistry, medicine, literature and peace.",
      questions: [
        [
          "According to the passage, the obituary was published because ----.",
          [
            "a newspaper confused Alfred Nobel with his brother",
            "Alfred Nobel had died in Cannes",
            "Nobel wanted to know what people thought of him",
            "the newspaper supported his work",
            "Nobel's factory had exploded",
          ],
          "Metne göre bir Fransız gazetesi ölenin Alfred olduğunu sanarak yanlışlıkla ölüm ilanı yayımladı.",
        ],
        [
          "The writer mentions the explosion of 1864 in order to show ----.",
          [
            "that Nobel had personal experience of the dangers of explosives",
            "how dynamite was invented a few years later",
            "why the famous prizes were created after his death",
            "that the family factory was completely safe",
            "why Nobel later decided to move to France",
          ],
          "Küçük kardeşinin de öldüğü patlama, Nobel'in patlayıcıların tehlikelerini kişisel olarak yaşadığını gösterir.",
        ],
        [
          "It can be inferred from the passage that the Nobel Prizes ----.",
          [
            "may partly reflect Nobel's wish to be remembered for something positive",
            "were created before dynamite was invented",
            "were funded by the French government",
            "are awarded only for work on explosives",
            "were established by his brother",
          ],
          "Ölüm ilanını okumanın Nobel'i nasıl hatırlanacağı konusunda derin kaygıya sürüklemesi, ödüllerin kısmen olumlu bir şeyle anılma isteğini yansıttığını düşündürür.",
        ],
      ],
    },
    {
      text:
        "In the mid-nineteenth century, chemists knew that benzene, a liquid obtained from coal tar, contained six carbon atoms and six hydrogen atoms, but they could not work out how these atoms were arranged. Each carbon atom was known to form four bonds, and no straight chain of six carbons could explain the formula. In 1865, the German chemist August Kekulé proposed that the carbon atoms formed a closed ring, with alternating single and double bonds between them and one hydrogen atom attached to each carbon. Twenty-five years later, at a celebration held in his honour, Kekulé described how the idea had come to him. He said that he had fallen asleep in front of the fire and had dreamed of chains of atoms twisting like snakes, until one of the snakes seized its own tail. Kekulé's story is one of the most famous accounts of scientific inspiration, although some historians have doubted it, pointing out that other chemists had already suggested ring structures and that Kekulé may have wished to emphasise his own originality. Whatever its origin, the ring structure proved extremely useful, and it helped chemists to understand a large family of compounds, known as aromatic compounds, that are important in dyes, drugs and plastics.",
      questions: [
        [
          "According to the passage, the structure of benzene was a puzzle because ----.",
          [
            "no straight chain of six carbon atoms could account for its formula",
            "benzene was found to contain no carbon atoms",
            "carbon atoms were known to form only two bonds",
            "benzene could not be obtained from coal tar at all",
            "it had far too many hydrogen atoms to count",
          ],
          "Metne göre her karbon dört bağ yapıyordu ve altı karbonluk düz bir zincir formülü açıklayamıyordu.",
        ],
        [
          "The writer mentions the doubts of some historians in order to show ----.",
          [
            "that Kekulé's account of his inspiration may not be fully reliable",
            "that benzene does not really have a ring structure",
            "that Kekulé never actually studied benzene himself",
            "how dyes are made from compounds of benzene",
            "why Kekulé fell asleep in front of the fire",
          ],
          "Başka kimyacıların zaten halka yapıları önermiş olması ve Kekulé'nin özgünlüğünü vurgulamak istemiş olabileceği, anlatımının tam güvenilir olmayabileceğini gösterir.",
        ],
        [
          "It can be understood from the passage that the ring structure ----.",
          [
            "helped chemists understand an important group of compounds",
            "was rejected by all later chemists",
            "had no practical importance",
            "was proposed first by Kekulé's students",
            "applies only to benzene",
          ],
          "Metne göre halka yapısı boya, ilaç ve plastiklerde önemli olan aromatik bileşikler ailesini anlamaya yardım etti.",
        ],
      ],
    },
    {
      text:
        "In 1921, the American engineer Thomas Midgley, working for General Motors, discovered that adding a lead compound to petrol prevented engines from 'knocking', a problem that reduced their power and efficiency. Leaded petrol was soon sold around the world, despite warnings from some public health experts and the deaths of several workers at the factories that produced the additive. In the 1940s and 1950s, the American geochemist Clair Patterson was trying to determine the age of the Earth by measuring lead in meteorites. He found that his samples were constantly contaminated by lead in the environment, and he had to build one of the first ultra-clean laboratories to obtain accurate results. In 1953, he calculated that the Earth was about 4.5 billion years old, a figure still accepted today. His work also led him to investigate how much lead was present in the environment, and he found that levels in the oceans, in ice from Greenland and in people's bodies were far higher than in the past, mainly because of leaded petrol. Patterson campaigned for years against the use of lead, facing strong opposition from the industry. Leaded petrol was gradually banned, first in the United States and later almost everywhere, and the last country stopped selling it in 2021. Average levels of lead in people's blood have since fallen dramatically.",
      questions: [
        [
          "According to the passage, Patterson built an ultra-clean laboratory because ----.",
          [
            "lead in the environment kept contaminating his samples",
            "he wanted to produce a new kind of leaded petrol",
            "meteorites were found to contain no lead",
            "the government asked him to build one",
            "his old laboratory had been destroyed by fire",
          ],
          "Metne göre örnekleri sürekli olarak çevredeki kurşunla kirleniyordu.",
        ],
        [
          "The writer mentions ice from Greenland in order to show ----.",
          [
            "that lead pollution had spread even to remote places",
            "how the age of the Earth was finally measured",
            "that Greenland produces large amounts of lead",
            "why car engines knocked before the additive",
            "that ice protects living things against lead",
          ],
          "Grönland buzundaki yüksek kurşun düzeyi, kirliliğin uzak yerlere bile yayıldığını gösterir.",
        ],
        [
          "It can be inferred from the passage that Patterson's research on lead ----.",
          [
            "began as a side effect of his work on the age of the Earth",
            "was supported by the petrol industry",
            "took place after leaded petrol was banned",
            "had nothing to do with meteorites",
            "was carried out by Midgley",
          ],
          "Dünya'nın yaşını ölçerken örneklerin kirlenmesi onu çevredeki kurşunu araştırmaya yöneltti; dolayısıyla bu araştırma yan bir sonuç olarak başladı.",
        ],
      ],
    },
    {
      text:
        "Around 1860, Robert Bunsen, a chemist, and Gustav Kirchhoff, a physicist,, working together at the University of Heidelberg, developed a powerful new method for identifying chemical elements. Bunsen had perfected a gas burner whose very hot flame was almost invisible. When small amounts of different substances were placed in the flame, they produced characteristic colours: sodium, for example, gave a bright yellow, and copper a green. Kirchhoff suggested passing the light through a prism, which separated it into a series of narrow, brightly coloured lines. Each element, they found, produced its own unique pattern of lines, like a fingerprint, and even extremely small quantities could be detected. In 1860, while examining the water from a mineral spring, they spotted two blue lines that belonged to no element yet identified. They had discovered a new element, which they named caesium, from the Latin word for 'sky blue'. A year later, they discovered another, rubidium, named after its deep red lines. Their method, known as spectroscopy, soon had an even more remarkable application. Kirchhoff showed that the dark lines in the light from the sun corresponded to particular elements, making it possible to study the chemical composition of stars that could never be visited.",
      questions: [
        [
          "The passage explains that the improved burner was valuable since ----.",
          [
            "its flame added almost no colour of its own",
            "it produced a bright yellow light that was easy to see",
            "it could be used without any gas supply",
            "it separated light into narrow coloured lines",
            "it was used to heat water from mineral springs",
          ],
          "Metne göre brülör kendine ait neredeyse hiç rengi olmayan sıcak bir alev üretiyordu.",
        ],
        [
          "By likening each element's lines to a fingerprint, the writer emphasises ----.",
          [
            "that every element has a pattern of its own",
            "that elements leave marks on the glass of the prism",
            "how the police use chemistry to catch criminals",
            "that the lines are always exactly the same colour",
            "why the prism was invented by Kirchhoff",
          ],
          "Parmak izi benzetmesi, her elementin kendine özgü çizgi deseniyle tanımlanabildiğini gösterir.",
        ],
        [
          "It can be understood from the passage that spectroscopy ----.",
          [
            "made it possible to learn what distant stars are made of",
            "was used only to study mineral water",
            "could not detect small amounts of an element",
            "was invented after caesium was found",
            "required a visit to the sun",
          ],
          "Kirchhoff'un güneş ışığındaki karanlık çizgilerin elementlere karşılık geldiğini göstermesi, ziyaret edilemeyecek yıldızların bileşimini incelemeyi mümkün kıldı.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "Steel left exposed to air and water slowly rusts. ---- Even if the coating is scratched, the zinc continues to protect the steel because it corrodes first.",
      [
        "To prevent this, it is often coated with a thin layer of zinc, a process known as galvanising.",
        "Steel production uses a great deal of energy.",
        "Many modern bridges are built from steel and reinforced concrete.",
        "Old iron gates are often painted black.",
        "Zinc is also used in some kinds of batteries and in coins.",
      ],
      "Boşluktan sonra kaplama çizilse bile çinkonun çeliği korumaya devam ettiği söylenir; boşluğa çeliğin ince bir çinko tabakasıyla kaplandığını ve buna galvanizleme dendiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Copper roofs and statues gradually turn from reddish-brown to green over many years. ---- Far from damaging the metal, this layer actually protects it from further corrosion.",
      [
        "This colour comes from a thin layer, called a patina, formed by reaction with air.",
        "Copper is an excellent conductor of electricity and heat.",
        "Many famous statues in city squares are made from bronze.",
        "Green is a popular colour for painting doors and window frames.",
        "Copper has been mined and used by humans for thousands of years.",
      ],
      "Boşluktan sonra 'this layer' ile bir tabakadan söz edilir; boşluğa yeşil rengin bakır havayla ve suyla tepkimeye girerken oluşan patina denen ince tabakadan geldiğini söyleyen cümle gelmelidir.",
    ],
    [
      "When some metal compounds are heated in a flame, they produce bright colours. ---- Chemists use this simple test to identify which metals are present in a sample.",
      [
        "Lithium, for example, gives a red flame, while potassium gives a lilac one.",
        "The hottest part of a flame is usually near its tip.",
        "Many school laboratories use gas burners for experiments.",
        "Some rare metals are extremely expensive to produce.",
        "Any fire needs a supply of oxygen in order to burn.",
      ],
      "Boşluktan sonra kimyacıların bu testi metalleri belirlemek için kullandığı söylenir; boşluğa lityumun kırmızı, potasyumun leylak rengi alev verdiğine dair örnek cümle gelmelidir.",
    ],
    [
      "Chromatography is a technique used to separate the different substances in a mixture. ---- Because each substance travels at a different speed, they gradually move apart.",
      [
        "In a simple version, ink is placed on paper and a liquid soaks up through it.",
        "Ink has been used for writing in many cultures for thousands of years.",
        "Many mixtures of solids and liquids can be separated by filtering.",
        "Most paper is made from wood pulp in large factories.",
        "Some inks fade quickly when they are left in sunlight.",
      ],
      "Boşluktan sonra her maddenin farklı hızda ilerleyip ayrıldığı söylenir; boşluğa basit bir uygulamada mürekkep damlasının kâğıda konup bir sıvının yukarı emilmesine izin verildiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In a titration, a solution of known concentration is added slowly to another solution until a reaction is complete. ---- From the volume added, the chemist can calculate the concentration of the second solution.",
      [
        "A colour-changing indicator shows when this point is reached.",
        "Glassware must be cleaned carefully after every experiment.",
        "Many students find chemistry difficult at first.",
        "Solutions are often stored in labelled glass bottles.",
        "Some chemical reactions produce a great deal of heat.",
      ],
      "Boşluktan sonra eklenen hacimden derişimin hesaplandığı söylenir; boşluğa renk değiştiren bir belirtecin bu noktaya tam ne zaman ulaşıldığını gösterdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "Distillation is used to separate liquids that boil at different temperatures. ---- The vapour is then cooled so that it turns back into a liquid and can be collected.",
      [
        "When it is heated, the liquid with the lower boiling point evaporates first.",
        "Water boils at one hundred degrees Celsius at sea level.",
        "Many perfumes contain alcohol and plant oils.",
        "Some pure liquids are very expensive to buy.",
        "Chemistry laboratories must always be well ventilated.",
      ],
      "Boşluktan sonra 'The vapour' ile buharın soğutulduğu söylenir; boşluğa karışım ısıtıldığında kaynama noktası düşük sıvının önce buhara dönüştüğünü söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Electrolysis uses an electric current to break down a compound into its elements.",
        "It is used, for example, to extract aluminium from its ore.",
        "The process requires very large amounts of electricity.",
        "Aluminium cans are widely recycled in many countries.",
        "For this reason, aluminium plants are often built near sources of cheap power.",
      ],
      odd: 3,
      why: "Parça elektrolizi ve alüminyum üretimini anlatır. Alüminyum kutuların pek çok ülkede geri dönüştürüldüğünü söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A fire needs three things to burn: fuel, heat and oxygen.",
        "Removing any one of these will put the fire out.",
        "Firefighters often wear bright uniforms.",
        "Water cools a fire, while a fire blanket cuts off its supply of oxygen.",
        "Some fires, such as those involving oil, should never be treated with water.",
      ],
      odd: 2,
      why: "Parça yanma üçgenini anlatır. İtfaiyecilerin çoğu zaman parlak üniformalar giydiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A glow stick contains two chemicals kept apart by a thin glass tube.",
        "Bending the stick breaks the tube and allows the chemicals to mix.",
        "The reaction releases energy in the form of light rather than heat.",
        "Many children enjoy parties with music and dancing.",
        "Glow sticks are also used by divers and by emergency services.",
      ],
      odd: 3,
      why: "Parça ışık çubuklarının çalışma ilkesini anlatır. Pek çok çocuğun müzikli ve danslı partilerden hoşlandığını söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In areas with hard water, a white deposit often builds up inside kettles and pipes.",
        "This limescale is formed mainly of calcium carbonate.",
        "It can be removed with mild acids such as vinegar or lemon juice.",
        "Over time, it can reduce the efficiency of heating systems.",
        "Many people drink tea several times a day.",
      ],
      odd: 4,
      why: "Parça kireç birikmesini anlatır. Pek çok kişinin günde birkaç kez çay içtiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A cut apple turns brown when it is exposed to air.",
        "Enzymes in the fruit react with oxygen to produce brown pigments.",
        "Lemon juice slows the process because its acid affects the enzymes.",
        "Keeping the fruit cold also reduces browning.",
        "Apples are grown in many countries with cool climates.",
      ],
      odd: 4,
      why: "Parça kesilen elmanın kararmasını anlatır. Elmanın serin iklimli pek çok ülkede yetiştirildiğini söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "A catalytic converter reduces the harmful gases produced by car engines.",
        "It contains metals such as platinum that speed up chemical reactions.",
        "These reactions change carbon monoxide and other pollutants into less harmful substances.",
        "Platinum is also used to make jewellery.",
        "Most modern cars are required by law to have one.",
      ],
      odd: 3,
      why: "Parça katalitik konvertörü anlatır. Platinin mücevher yapımında da kullanıldığını söyleyen IV. cümle konu dışıdır.",
    },
  ],
};
