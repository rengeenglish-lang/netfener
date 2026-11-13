import type { YokdilDeneme } from "./types";

export const FEN_33: YokdilDeneme = {
  no: 33,
  field: "fen",
  vocab: [
    [
      "In the new lecture hall, every word seemed to ---- for several seconds, so students could hardly follow the speaker.",
      ["echo", "vanish", "freeze", "shrink", "sparkle"],
      "Yeni amfide her sözcüğün birkaç saniye boyunca 'yankılandığı' (echo) ve öğrencilerin konuşmacıyı zor takip ettiği anlatılır.",
    ],
    [
      "The sand gathered along lines where the plate did not ----.",
      ["vibrate", "glow", "melt", "rust", "bend"],
      "Kumun levhanın 'titreşmediği' (vibrate) çizgiler boyunca toplandığı anlatılır.",
    ],
    [
      "Bats emit high-pitched calls that are ---- to the human ear.",
      ["inaudible", "pleasant", "harmful", "familiar", "visible"],
      "Yarasaların insan kulağının 'duyamayacağı' (inaudible) tiz sesler çıkardığı anlatılır.",
    ],
    [
      "In the blind test, most violinists could not ---- between old and new instruments.",
      ["distinguish", "choose", "travel", "argue", "compete"],
      "Kör testte çoğu kemancının eski ve yeni çalgıları birbirinden 'ayırt edemediği' (distinguish) anlatılır.",
    ],
    [
      "Elephants can communicate using very low sounds that travel ---- distances.",
      ["considerable", "negligible", "dangerous", "narrow", "sudden"],
      "Fillerin 'kayda değer' (considerable) mesafeler kat eden çok alçak seslerle iletişim kurabildiği anlatılır.",
    ],
    [
      "The inventor shouted a short rhyme into the machine and then ---- it to hear his own voice.",
      ["played back", "turned down", "gave up", "set off", "looked after"],
      "Mucidin makineye kısa bir tekerleme bağırıp ardından kendi sesini duymak için onu 'geri çaldığı' (played back) anlatılır.",
    ],
  ],
  grammar: [
    [
      "Sabine ---- the reverberation in the hall for months before he found a solution.",
      ["had been measuring", "measures", "will measure", "is measuring", "has been measured"],
      "Geçmişteki bir olaydan önce süregelen eylem: 'had been measuring'.",
    ],
    [
      "Chladni ---- his experiments to audiences in many European cities.",
      ["demonstrated", "has demonstrated", "demonstrates", "will demonstrate", "was demonstrated"],
      "Geçmişte tamamlanmış eylem: 'demonstrated'.",
    ],
    [
      "If Griffin had not used a special detector, he ---- the bats' calls.",
      ["could not have heard", "cannot hear", "will not hear", "had not heard", "does not hear"],
      "Geçmişe yönelik gerçek dışı koşul (üçüncü tip): 'could not have heard'.",
    ],
    [
      "The violinists ---- to wear goggles so that they could not see the instruments.",
      ["were asked", "asked", "have asked", "are asking", "will ask"],
      "Kemancılardan istenmiştir; edilgen geçmiş zaman: 'were asked'.",
    ],
    [
      "---- the chamber was designed to be completely silent, Cage still heard two sounds.",
      ["Although", "Because", "Since", "Unless", "So that"],
      "Odanın tamamen sessiz tasarlanması ile iki ses duyulması zıttır: 'Although'.",
    ],
    [
      "Payne felt a throbbing in the air ---- she could not explain at first.",
      ["that", "who", "whose", "what", "where"],
      "'a throbbing' ifadesini niteleyen ve nesne görevindeki ilgi zamiri: 'that'.",
    ],
    [
      "The machine reproduced Edison's voice clearly, ---- astonished everyone who heard it.",
      ["which", "what", "who", "that", "where"],
      "Önceki cümlenin tamamını niteleyen ilgi zamiri: 'which'.",
    ],
    [
      "The longer a string is, ---- the note it produces.",
      ["the lower", "the lowest", "lower than", "much lower", "so low"],
      "'The longer ..., the lower ...' paralel yapısı: 'the lower'.",
    ],
    [
      "Not until 1938 ---- anyone actually hear the calls that bats use to find their way.",
      ["did", "had", "was", "has", "does"],
      "'Not until' ile devrik yapı; geçmiş zaman: 'did'.",
    ],
    [
      "The theremin is played ---- the performer touching it at all.",
      ["without", "despite", "unless", "although", "instead"],
      "Edat + isim öbeği; dokunmadan: 'without'.",
    ],
    [
      "Visitors are often surprised that a whisper can be heard clearly ---- the other side of the dome.",
      ["on", "at", "in", "by", "for"],
      "'on the other side' kalıbı: 'on'.",
    ],
    [
      "Sound cannot travel through space ---- there is no air to carry it.",
      ["because", "although", "unless", "so that", "whereas"],
      "Neden bildiren bağlaç: 'because'.",
    ],
    [
      "Each resonator was designed ---- respond to only one particular frequency.",
      ["to", "for", "by", "at", "with"],
      "'be designed to do' yapısı: 'to'.",
    ],
    [
      "The committee recommended that the standard pitch ---- fixed at 440 vibrations per second.",
      ["be", "is being", "was been", "to be", "being"],
      "'recommend that' sonrası yalın fiil (subjunctive): 'be'.",
    ],
  ],
  cloze: [
    {
      text:
        "In 1895, Wallace Sabine, a young physics lecturer at Harvard University, was asked to solve a problem in a newly built lecture hall. The acoustics were so poor that speech could hardly be understood, {1} each sound continued to echo around the room for several seconds. Sabine had no previous experience of acoustics, but he approached the problem methodically. Working late at night, {2} the building was quiet, he sounded an organ pipe and measured with a stopwatch how long the sound took to fade away. He then borrowed hundreds of seat cushions from a nearby theatre and carried them into the hall in different quantities, repeating his measurements each time. From his results he worked out a mathematical relationship between the volume of a room, the amount of absorbing material in it and the time {3} sound takes to die away. Using this formula, he was able to improve the hall by adding sound-absorbing felt to the walls. In 1900, he applied his principles to the design of Boston's new Symphony Hall, which is still considered one of the finest concert halls in the world. Sabine is regarded {4} the founder of architectural acoustics, and a unit of sound absorption is named {5} him.",
      blanks: [
        [
          "(21) ----",
          ["because", "although", "unless", "whereas", "so that"],
          "Konuşmanın anlaşılmamasının nedeni sesin saniyelerce yankılanmasıdır: 'because'.",
        ],
        [
          "(22) ----",
          ["when", "which", "where", "whose", "who"],
          "'late at night' zamanını niteleyen ilgi zarfı: 'when'.",
        ],
        [
          "(23) ----",
          ["that", "what", "who", "whose", "where"],
          "'the time' ifadesini niteleyen ilgi zamiri: 'that'.",
        ],
        [
          "(24) ----",
          ["as", "for", "like", "to", "with"],
          "Sabine'in kurucu olarak görüldüğü anlatılır; 'be regarded as' kalıbı: 'as'.",
        ],
        [
          "(25) ----",
          ["after", "by", "from", "for", "on"],
          "'be named after somebody' kalıbı: 'after'.",
        ],
      ],
    },
    {
      text:
        "In 1787, the German physicist and musician Ernst Chladni published a book describing a striking way of making sound visible. He scattered fine sand over a thin metal plate fixed at its centre and then drew a violin bow along one edge. As the plate began to vibrate and produce a musical note, the sand jumped away from the parts that were moving most and collected along the lines {1} the plate remained still. The result was a beautiful symmetrical pattern, {2} changed when the plate was bowed at a different point or produced a different note. Chladni travelled widely to demonstrate his experiments, {3} attracted large audiences. In 1809 he performed in Paris before Napoleon, who was so impressed that he offered a prize for a mathematical explanation of the patterns. {4} many leading mathematicians considered the problem, the prize was eventually won in 1816 by Sophie Germain, a largely self-taught woman {5} had been excluded from formal university education. Chladni figures are still used today to study the vibrations of guitars, violins and other instruments.",
      blanks: [
        [
          "(26) ----",
          ["where", "which", "when", "whose", "who"],
          "'the lines' yer bildirdiği için: 'where'.",
        ],
        [
          "(27) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra 'pattern' sözcüğünü niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(28) ----",
          ["which", "who", "where", "whose", "what"],
          "Virgülden sonra deneyleri niteleyen ilgi zamiri: 'which'.",
        ],
        [
          "(29) ----",
          ["Although", "Because", "Unless", "Once", "So that"],
          "Pek çok matematikçinin uğraşması ile ödülü bir kadının kazanması zıtlık bildirir: 'Although'.",
        ],
        [
          "(30) ----",
          ["who", "which", "whose", "whom", "where"],
          "'a ... woman' ifadesini niteleyen ve özne görevindeki ilgi zamiri: 'who'.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although Sabine had never studied acoustics before, ----.",
      [
        "his experiments solved it",
        "the hall was part of a famous university",
        "Boston has many concert halls",
        "he borrowed cushions from a theatre",
        "organ pipes produce clear notes",
      ],
      "'Although' zıtlık ister: Sabine daha önce akustik çalışmamış olsa da sorunu dikkatli deneylerle çözdü.",
    ],
    [
      "Chladni scattered sand on the plate ----.",
      [
        "to reveal the pattern of its vibrations",
        "although he was also a musician",
        "unless the bow was made of wood",
        "because Napoleon offered a prize",
        "while Sophie Germain studied mathematics",
      ],
      "Chladni levhanın titreşim desenini ortaya çıkarmak için üzerine kum serpti.",
    ],
    [
      "If a bat's ears are blocked, ----.",
      [
        "it collides with obstacles in the dark",
        "the experiment took place in Italy",
        "bats sleep during the day",
        "many bats eat insects",
        "the detector was built at Harvard",
      ],
      "Birinci tip koşul: bir yarasanın kulakları tıkanırsa karanlıkta engellere çarpar.",
    ],
    [
      "----, the violinists played both old and new instruments.",
      [
        "Unable to see the violins",
        "Although violins are made of wood",
        "Unless the room was very large",
        "Because Stradivari lived in Italy",
        "Since music is popular worldwide",
      ],
      "Hangi çalgıyı tuttuklarını göremeyen kemancılar hem eski hem yeni çalgıları çaldı.",
    ],
    [
      "Cage concluded that there is no such thing as complete silence ----.",
      [
        "after a visit to a silent room",
        "although he was a composer",
        "unless the room was very small",
        "because pianos make loud sounds",
        "while the chamber was at Harvard",
      ],
      "Cage, sessiz olacak şekilde tasarlanmış bir odada sesler duyduktan sonra tam sessizliğin olmadığı sonucuna vardı.",
    ],
    [
      "Payne suspected that the elephants were communicating ----.",
      [
        "with sounds too low for humans to hear",
        "although they lived in a zoo",
        "unless they were very young",
        "because elephants are large animals",
        "so that the recordings were made",
      ],
      "Payne fillerin insanların duyamayacağı kadar alçak seslerle iletiştiğinden şüphelendi.",
    ],
    [
      "Not only could the phonograph record sounds, ----.",
      [
        "but it could also play them back",
        "and it was invented in 1877",
        "since Edison was an inventor",
        "so the cylinder was covered in foil",
        "unless the horn was large",
      ],
      "'Not only ... but also' yapısı tamamlanır: fonograf yalnızca ses kaydetmekle kalmıyor, sesi geri de çalabiliyordu.",
    ],
    [
      "Since the theremin is played without being touched, ----.",
      [
        "players move their hands in the air",
        "it was invented in Russia",
        "it has two metal antennas",
        "it is used in many films",
        "Theremin was a physicist",
      ],
      "'Since' neden bildirir: theremin dokunulmadan çalındığı için icracılar onu ellerini havada hareket ettirerek kontrol etmelidir.",
    ],
    [
      "A whisper can be heard on the far side of the dome ----.",
      [
        "as sound follows the wall",
        "although the cathedral is very old",
        "unless many tourists are present",
        "so that Rayleigh explained it",
        "while the dome is made of stone",
      ],
      "Fısıltı, ses kavisli duvar boyunca ilerlediği için kubbenin karşı tarafından duyulabilir.",
    ],
    [
      "Although astronauts can see explosions in space, ----.",
      [
        "they cannot hear them",
        "rockets are very powerful",
        "space is very cold",
        "stars give off light",
        "the Moon has no air",
      ],
      "'Although' zıtlık ister: astronotlar uzaydaki patlamaları görebilse de onları duyamazlar.",
    ],
    [
      "Unless people protect their ears from loud noise, ----.",
      [
        "they may suffer permanent hearing loss",
        "sound travels faster in water",
        "many concerts are held outdoors",
        "the ear contains tiny bones",
        "music is played in shops",
      ],
      "'Unless' olumsuz koşul: insanlar kulaklarını yüksek sesten korumazsa kalıcı işitme kaybı yaşayabilir.",
    ],
  ],
  enTr: [
    [
      "He measured how long it took for a sound to fade away in the empty hall.",
      [
        "Boş salonda bir sesin sönüp gitmesinin ne kadar sürdüğünü ölçtü.",
        "Boş salonda sesin ne kadar uzağa gittiğini ölçtü.",
        "Salonun boşalmasının ne kadar sürdüğünü ölçtü.",
        "Boş salonda sesin hiç sönmediğini fark etti.",
        "Salondaki sesin ne kadar uzağa gidebildiğini ve duvarlardan nasıl yansıdığını ölçmeye çalıştı.",
      ],
      "'measured how long it took' 'ne kadar sürdüğünü ölçtü', 'for a sound to fade away' 'bir sesin sönüp gitmesinin' karşılığıdır.",
    ],
    [
      "The patterns changed whenever the plate was made to produce a different note.",
      [
        "Levhaya farklı bir nota çıkartıldığında desenler değişiyordu.",
        "Desenler değiştiğinde levha farklı bir nota çıkarıyordu.",
        "Levha hangi notayı çıkarırsa çıkarsın desenler aynı kalıyordu.",
        "Farklı notalar, levhanın kırılmasına neden oluyordu.",
        "Desenler, yalnızca levha sessizken görülüyordu.",
      ],
      "'The patterns changed' 'desenler değişiyordu', 'whenever the plate was made to produce a different note' 'levhaya farklı bir nota çıkartıldığında' karşılığıdır.",
    ],
    [
      "Bats can locate tiny insects in complete darkness by listening to the echoes of their calls.",
      [
        "Yarasalar, çağrılarının yankılarını dinleyerek zifiri karanlıkta küçük böceklerin yerini bulabilir.",
        "Yarasalar, karanlıkta böceklerin çıkardığı sesleri taklit eder.",
        "Böcekler, yarasaların çağrılarını duyarak karanlıkta kaçabilir.",
        "Yarasalar, yalnızca ışıkta böcek avlayabilir.",
        "Yarasalar, çağrılarının yankılarını dinleyerek karanlıkta böceklerden kaçmayı ve saklanmayı öğrenir.",
      ],
      "'can locate tiny insects in complete darkness' 'zifiri karanlıkta küçük böceklerin yerini bulabilir', 'by listening to the echoes of their calls' 'çağrılarının yankılarını dinleyerek' karşılığıdır.",
    ],
    [
      "Several of the players preferred a modern violin to the famous old instruments.",
      [
        "Çalıcıların birçoğu, ünlü eski çalgılar yerine modern bir kemanı tercih etti.",
        "Çalıcıların hepsi ünlü eski çalgıları modern kemanlara tercih etti.",
        "Modern kemanlar, ünlü eski çalgıların kopyasıydı.",
        "Çalıcılar, modern kemanları çalmayı reddetti.",
        "Çalıcıların birçoğu, modern bir keman yerine ünlü eski çalgılardan birini çalmayı tercih etti.",
      ],
      "'Several of the players' 'çalıcıların birçoğu', 'preferred a modern violin to the famous old instruments' 'ünlü eski çalgılar yerine modern bir kemanı tercih etti' karşılığıdır.",
    ],
    [
      "The low calls of elephants can be detected by other elephants several kilometres away.",
      [
        "Fillerin alçak çağrıları, kilometrelerce uzaktaki diğer filler tarafından algılanabilir.",
        "Filler, kilometrelerce uzaktaki sesleri duyamaz.",
        "Diğer filler, alçak çağrıları yalnızca yakından duyabilir.",
        "Fillerin çağrıları, insanlar tarafından kilometrelerce uzaktan duyulur.",
        "Fillerin alçak çağrıları, kilometrelerce uzaktaki insanlar tarafından kolayca duyulabilir.",
      ],
      "'can be detected by other elephants' 'diğer filler tarafından algılanabilir', 'several kilometres away' 'kilometrelerce uzaktaki' karşılığıdır.",
    ],
    [
      "For the first time, a human voice had been recorded and reproduced by a machine.",
      [
        "İlk kez bir insan sesi bir makine tarafından kaydedilip yeniden üretilmişti.",
        "Bir makine ilk kez insan sesini taklit etmeyi denedi.",
        "İnsanlar ilk kez bir makinenin sesini kaydetti.",
        "Makine, insan sesini kaydedemedi ama yeniden üretebildi.",
        "Bir insan sesi, makine icat edilmeden çok önce ilk kez kaydedilip yeniden üretilmişti.",
      ],
      "'For the first time' 'ilk kez', 'had been recorded and reproduced by a machine' 'bir makine tarafından kaydedilip yeniden üretilmişti' karşılığıdır.",
    ],
  ],
  trEn: [
    [
      "Salon, duvarlara ses emici keçe eklenerek iyileştirildi.",
      [
        "The hall was improved by adding sound-absorbing felt to the walls.",
        "The walls of the hall were removed to improve the sound.",
        "Felt was taken off the walls because it absorbed too much sound.",
        "The hall became noisier after felt was added.",
        "The walls were painted to reflect sound better.",
      ],
      "'duvarlara ses emici keçe eklenerek' 'by adding sound-absorbing felt to the walls', 'iyileştirildi' 'was improved' karşılığıdır.",
    ],
    [
      "Napolyon, desenlerin matematiksel açıklaması için bir ödül koydu.",
      [
        "Napoleon offered a prize for a mathematical explanation of the patterns.",
        "Napoleon won a prize for explaining the patterns.",
        "The patterns were designed by Napoleon's mathematicians.",
        "Napoleon refused to reward anyone for explaining the patterns.",
        "Napoleon offered a prize to anyone who could create new and more beautiful patterns with sand.",
      ],
      "'bir ödül koydu' 'offered a prize', 'desenlerin matematiksel açıklaması için' 'for a mathematical explanation of the patterns' karşılığıdır.",
    ],
    [
      "Kulakları tıkanan yarasalar karanlıkta engellere çarptı.",
      [
        "Bats whose ears had been blocked collided with obstacles in the dark.",
        "Bats blocked the obstacles with their ears in the dark.",
        "Bats avoided obstacles better when their ears were blocked.",
        "Obstacles in the dark blocked the bats' ears.",
        "Bats could not see the obstacles because their eyes were closed.",
      ],
      "'Kulakları tıkanan yarasalar' 'bats whose ears had been blocked', 'karanlıkta engellere çarptı' 'collided with obstacles in the dark' karşılığıdır.",
    ],
    [
      "Besteciye göre, dinleyicilerin çıkardığı sesler eserin bir parçası haline geliyordu.",
      [
        "According to the composer, the sounds made by the audience became part of the work.",
        "The composer asked the audience to remain completely silent.",
        "The audience refused to make any sound during the performance.",
        "The composer believed that audiences should not hear the music.",
        "The composer insisted that the work should be performed only in an empty hall without an audience.",
      ],
      "'Besteciye göre' 'according to the composer', 'dinleyicilerin çıkardığı sesler eserin bir parçası haline geliyordu' 'the sounds made by the audience became part of the work' karşılığıdır.",
    ],
    [
      "Kulak, farklı frekansları iç kulaktaki zarın farklı noktalarında algılar.",
      [
        "The ear detects different frequencies at different points on a membrane in the inner ear.",
        "All frequencies are detected at the same point in the inner ear.",
        "The membrane in the inner ear blocks high frequencies.",
        "The ear cannot detect frequencies below a certain level.",
        "Different frequencies damage different parts of the membrane in the inner ear over time.",
      ],
      "'farklı frekansları' 'different frequencies', 'iç kulaktaki zarın farklı noktalarında algılar' 'detects at different points on a membrane in the inner ear' karşılığıdır.",
    ],
    [
      "Işık neredeyse anında ulaştığı için şimşek gök gürültüsünden önce görülür.",
      [
        "Because light arrives almost instantly, lightning is seen before thunder is heard.",
        "Thunder is heard before lightning because sound travels faster.",
        "Lightning and thunder always arrive at exactly the same moment.",
        "Light travels more slowly than sound during storms.",
        "Because sound arrives almost instantly, thunder is always heard before lightning is seen.",
      ],
      "'Işık neredeyse anında ulaştığı için' 'because light arrives almost instantly', 'şimşek gök gürültüsünden önce görülür' 'lightning is seen before thunder is heard' karşılığıdır.",
    ],
  ],
  reading: [
    {
      text:
        "In the 1790s, the Italian scientist Lazzaro Spallanzani noticed that bats could fly through a dark room without hitting anything, whereas owls in the same room crashed into obstacles. He then performed a series of cruel experiments in which he blinded bats, and found that they still flew skilfully and caught insects. A Swiss colleague, Louis Jurine, showed that when the bats' ears were blocked with wax, they flew helplessly into walls and threads stretched across the room. The two men concluded that bats somehow 'saw' with their ears, but since the animals appeared to be silent, the idea was ridiculed and largely forgotten for more than a century. In 1938, Donald Griffin, an undergraduate at Harvard University who studied bats, took them to the laboratory of the physicist G. W. Pierce, who had built a device that could detect sounds above the range of human hearing. When the bats were released in front of it, the device registered a stream of high-pitched calls. Griffin and his colleague Robert Galambos went on to show that bats use the echoes of these calls to build up a detailed picture of their surroundings. In 1944, Griffin coined the term 'echolocation' to describe this ability.",
      questions: [
        [
          "According to the passage, Spallanzani's idea was not accepted at the time mainly because ----.",
          [
            "bats seemed to make no sound",
            "his experiments could not be repeated",
            "owls were found to use the same method",
            "Jurine disagreed with his results",
            "bats were believed to be blind",
          ],
          "Metne göre hayvanlar sessiz göründüğü için fikir alaya alındı.",
        ],
        [
          "Pierce's device was important because it ----.",
          [
            "could detect sounds that humans cannot hear",
            "helped bats to fly in the dark",
            "blocked the bats' ears",
            "was designed to catch insects",
            "measured the size and weight of the bats",
          ],
          "Cihaz insan işitme aralığının üstündeki sesleri algılayabiliyordu.",
        ],
        [
          "The writer describes Spallanzani's experiments as 'cruel' because ----.",
          [
            "he deliberately blinded the animals",
            "he released bats into owl cages",
            "he kept bats without food",
            "he blocked the bats' ears with wax",
            "he killed many owls",
          ],
          "Yarasaları kasıtlı olarak kör etmesi deneyleri zalimce kılar.",
        ],
      ],
    },
    {
      text:
        "The violins made by Antonio Stradivari and a few other Italian craftsmen between about 1650 and 1750 now sell for prices that few other instruments can match, and many musicians believe that their sound has never been equalled. In 2010, the French researcher Claudia Fritz and the American violin maker Joseph Curtin decided to test this belief. At a violin competition in Indianapolis, they asked twenty-one experienced violinists to play six instruments: three new violins of high quality and three old Italian instruments, including two by Stradivari, worth together many millions of dollars. The players wore modified welders' goggles so that they could not see which instrument they were holding, and the room was dimly lit. The results surprised many people. Most players could not reliably tell the old instruments from the new ones, and the violin they chose most often as the one they would like to take home was a modern instrument. The least preferred was one of the Stradivaris. Later studies, including one with leading soloists in Paris and others in which audiences listened in concert halls, produced similar results. The researchers concluded that the special reputation of the old violins may owe as much to their history and price as to their sound.",
      questions: [
        [
          "According to the passage, the players wore goggles in order to ----.",
          [
            "prevent them from identifying the instruments",
            "protect their eyes from bright light",
            "make the test more difficult to play",
            "copy the conditions of a concert",
            "help them concentrate fully on the music they were playing",
          ],
          "Gözlükler hangi çalgıyı tuttuklarını görmelerini engellemek içindi.",
        ],
        [
          "What many people found unexpected was that ----.",
          [
            "a modern violin was chosen most often",
            "all players recognised the Stradivaris",
            "the old violins were preferred by everyone",
            "the test took place in a competition",
            "the instruments were very valuable",
          ],
          "En çok tercih edilen çalgı modern bir kemandı.",
        ],
        [
          "It can be inferred from the passage that the reputation of the old violins ----.",
          [
            "may be partly due to factors other than sound",
            "has been proved to be completely deserved",
            "depends only on the skill of the player",
            "has increased since the study",
            "was created by the researchers",
          ],
          "Araştırmacılar ünün sesle olduğu kadar tarih ve fiyatla da ilgili olabileceği sonucuna vardı.",
        ],
      ],
    },
    {
      text:
        "An anechoic chamber is a room designed to absorb almost all sound, so that no echoes are produced and no noise enters from outside. Its walls, floor and ceiling are covered with wedges of sound-absorbing material, and visitors often find the experience strange or even uncomfortable. In 1951, the American composer John Cage visited such a chamber at Harvard University, expecting to experience total silence. Instead, he heard two sounds, one high and one low. When he described them to the engineer in charge, he was told that the high sound was his nervous system working and the low one was his blood circulating. Cage later said that the experience convinced him that there is no such thing as silence. The following year, he presented his most famous and controversial work, 4′33″. At its first performance, the pianist David Tudor walked onto the stage, sat at the piano, and opened and closed the lid to mark the beginning and end of three movements, without playing a single note. The 'music' consisted of whatever sounds happened during that time, such as rain on the roof, the wind and the audience moving in their seats. Some listeners walked out in anger, but the piece has had an enormous influence on later composers.",
      questions: [
        [
          "According to the passage, Cage was surprised in the anechoic chamber because ----.",
          [
            "he heard sounds where he expected silence",
            "the room was full of echoes",
            "the engineer refused to speak to him",
            "he could hear people outside",
            "the walls were covered in wood",
          ],
          "Tam sessizlik beklerken iki ses duydu.",
        ],
        [
          "At the first performance of 4′33″, the pianist ----.",
          [
            "played no notes at all",
            "played very quietly",
            "played a famous sonata",
            "asked the audience to leave",
            "repaired the piano",
          ],
          "Piyanist tek bir nota çalmadan yalnızca kapağı açıp kapattı.",
        ],
        [
          "It can be understood from the passage that the 'music' of 4′33″ ----.",
          [
            "is different at every performance",
            "was written down note by note",
            "is always performed in silence",
            "must be played in an anechoic chamber",
            "was composed by David Tudor",
          ],
          "Müzik o süre içinde olan seslerden oluştuğu için her performansta farklıdır.",
        ],
      ],
    },
    {
      text:
        "In 1984, the American biologist Katy Payne, who had spent years studying the songs of humpback whales, was watching elephants at a zoo in Portland, Oregon, when she noticed something unusual. Every so often she felt a faint throbbing in the air, similar to the sensation of standing near a large pipe organ playing its lowest notes, although she could hear nothing. Suspecting that the elephants were producing sounds below the range of human hearing, she returned with colleagues and equipment capable of recording very low frequencies. When the recordings were played back at higher speed, they revealed a rich variety of calls that had been completely inaudible. Later studies in Africa showed that these low-frequency sounds, known as infrasound, can travel several kilometres through the air and possibly further through the ground, because low sounds are absorbed less than high ones. Elephants appear to use them to keep in contact with distant members of their group, to coordinate movements and to find mates. The discovery helped to explain how widely separated herds seemed to behave in a coordinated way, and it showed that even animals that have been studied for centuries can still surprise scientists.",
      questions: [
        [
          "According to the passage, Payne first suspected the existence of the sounds because she ----.",
          [
            "felt vibrations she could not hear",
            "heard the elephants calling loudly",
            "read about them in a book",
            "saw the elephants moving together",
            "recorded them by accident",
          ],
          "Metne göre hiçbir şey duymadığı halde havada hafif bir titreşim hissetti.",
        ],
        [
          "The recordings were played back at higher speed in order to ----.",
          [
            "make the sounds audible to humans",
            "save time during analysis",
            "frighten the elephants",
            "remove background noise",
            "compare them with whale songs",
          ],
          "Hızlandırılarak çalınan kayıtlar duyulamayan çağrıları ortaya çıkardı.",
        ],
        [
          "It can be understood from the passage that low-frequency sounds ----.",
          [
            "travel further than high-frequency sounds",
            "cannot pass through the ground",
            "are used only by whales",
            "are louder than other sounds",
            "are easily absorbed by air",
          ],
          "Alçak sesler yüksek seslerden daha az soğurulduğu için daha uzağa gider.",
        ],
      ],
    },
    {
      text:
        "In December 1877, a small group gathered in the New York office of the magazine Scientific American to see a new machine brought by the inventor Thomas Edison. It consisted of a metal cylinder covered with tinfoil, which could be turned by a handle, and a mouthpiece connected to a thin disc with a needle attached. When a person spoke into the mouthpiece while the cylinder turned, the disc vibrated and the needle pressed a pattern of tiny marks into the foil. When the needle was then run over the marks again, the process worked in reverse, and the machine reproduced the sound through a horn. Edison had first tested it by reciting a children's rhyme, and he was reportedly startled when his own voice came back. The phonograph caused a sensation; it was the first device that could both record sound and play it back. Edison imagined many uses for it, including dictating letters, recording books for blind people and preserving the last words of the dying. The tinfoil could be played only a few times before it wore out, however, and it was not until the following decade that improved machines using wax cylinders made recorded music a commercial success.",
      questions: [
        [
          "According to the passage, the needle made marks in the foil when ----.",
          [
            "the disc vibrated in response to the voice",
            "the cylinder was heated",
            "the horn was removed",
            "the handle was turned backwards",
            "the foil wore out after several uses",
          ],
          "Konuşulduğunda disk titreşiyor ve iğne folyoya izler bastırıyordu.",
        ],
        [
          "The phonograph was considered remarkable because it ----.",
          [
            "could both record and reproduce sound",
            "was the first machine invented by Edison",
            "could play music for many years",
            "used wax cylinders",
            "was very cheap to produce",
          ],
          "Sesi hem kaydedip hem geri çalabilen ilk cihazdı.",
        ],
        [
          "It can be inferred from the passage that the early tinfoil phonograph ----.",
          [
            "was not durable enough for commercial music",
            "was used mainly by blind people",
            "made Edison very rich immediately",
            "could record only music",
            "was invented by Scientific American",
          ],
          "Folyo birkaç kez çalındıktan sonra aşınıyordu; ticari müzik başarısı sonraki on yılda geldi.",
        ],
      ],
    },
  ],
  paragraph: [
    [
      "In 1636, the French scholar Marin Mersenne published a large book on music and sound. ---- He also tried to measure the speed of sound by timing the echo of a gunshot from a distant wall.",
      [
        "In it, he described how the pitch of a vibrating string depends on its length, tension and thickness.",
        "France was ruled by a powerful king at that time.",
        "Many scholars of the period were also priests.",
        "Guns were used in many wars of the seventeenth century.",
        "Music was an important part of religious life in seventeenth-century France.",
      ],
      "Boşluktan sonra 'also' ile ses hızını ölçmeye çalıştığı eklenir; boşluğa kitabında telin perdesinin uzunluk, gerginlik ve kalınlığa bağlı olduğunu açıkladığını söyleyen cümle gelmelidir.",
    ],
    [
      "In 1920, the Russian physicist Léon Theremin invented one of the first electronic musical instruments. ---- Its eerie, wavering sound later became popular in science-fiction films.",
      [
        "It is played without being touched: the performer moves their hands near two metal antennas to control pitch and volume.",
        "Russia has produced many famous composers.",
        "Physicists often enjoy playing music.",
        "Electricity was spreading rapidly at that time.",
        "Science-fiction films were very popular in many countries during the 1950s.",
      ],
      "Boşluktan sonra 'Its eerie sound' denir; boşluğa çalgının dokunulmadan, antenlerin yanında el hareketleriyle çalındığını anlatan cümle gelmelidir.",
    ],
    [
      "In the 1860s, the German scientist Hermann von Helmholtz used a set of hollow brass spheres, each with a small opening, to study sound. ---- By listening through them, he could pick out the individual tones that make up a complex sound such as a vowel or a musical note.",
      [
        "Each sphere resonated strongly at only one particular frequency.",
        "Brass is an alloy of copper and zinc.",
        "Helmholtz also studied the eye and vision.",
        "Germany had many excellent universities.",
        "Vowels are pronounced quite differently in different languages and regions.",
      ],
      "Boşluktan sonra kürelerle karmaşık seslerin bileşenlerinin ayırt edildiği anlatılır; boşluğa her kürenin yalnızca belirli bir frekansta güçlü biçimde rezonansa girdiğini söyleyen cümle gelmelidir.",
    ],
    [
      "In the dome of St Paul's Cathedral in London, a whisper spoken close to the wall can be heard clearly on the opposite side, more than thirty metres away. ---- He showed that the sound waves cling to the curved surface of the wall and travel around it with very little loss of energy.",
      [
        "This effect was explained in 1878 by the physicist Lord Rayleigh.",
        "St Paul's Cathedral was designed by Christopher Wren.",
        "Many tourists visit London every year.",
        "Domes are difficult structures to build.",
        "Whispering is considered rude in some places, such as during a performance.",
      ],
      "Boşluktan sonra 'He showed' denir; boşluğa etkinin 1878'de Lord Rayleigh tarafından açıklandığını söyleyen cümle gelmelidir.",
    ],
    [
      "Using ears taken from human cadavers, the Hungarian physicist Georg von Békésy studied how the inner ear responds to sound. ---- High notes produce the largest movement near the base of the membrane and low notes near its tip, so that different pitches are detected in different places.",
      [
        "He found that sound creates a wave that travels along a membrane inside the cochlea.",
        "Hungary is a country in central Europe.",
        "Cadavers are also used to train surgeons.",
        "Many physicists study light rather than sound.",
        "Ears can be permanently damaged by listening to very loud music for long periods.",
      ],
      "Boşluktan sonra yüksek ve alçak notaların zarın farklı yerlerinde algılandığı anlatılır; boşluğa sesin salyangoz içindeki bir zar boyunca ilerleyen bir dalga oluşturduğunu söyleyen cümle gelmelidir.",
    ],
    [
      "In 1711, John Shore, a trumpeter at the English royal court, invented a simple two-pronged steel device that produced a pure, steady note when struck. ---- Tuning forks are still used today by musicians, as well as by doctors testing patients' hearing.",
      [
        "Musicians could use it to make sure their instruments were in tune.",
        "Trumpets were used in royal ceremonies.",
        "Steel was expensive in the eighteenth century.",
        "England had many musicians at that time.",
        "Some notes sound higher than others because they vibrate faster.",
      ],
      "Boşluktan sonra akort çatallarının bugün de kullanıldığı anlatılır; boşluğa müzisyenlerin onu çalgılarının akordunu kontrol etmek için kullanabildiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Sound is a vibration that must travel through a material such as air, water or rock.",
        "In the near-vacuum of space, there is almost no material to carry it.",
        "As a result, even a huge explosion in space would make no sound.",
        "Astronauts on spacewalks communicate with each other by radio.",
        "Many people enjoy watching films set in space.",
      ],
      odd: 4,
      why: "Parça uzayda sesin yayılamamasını anlatır. Pek çok kişinin uzayda geçen filmleri izlemekten hoşlandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "During a storm, lightning and thunder happen at the same moment.",
        "However, light travels almost instantly, while sound covers about one kilometre every three seconds.",
        "Storms are more common in summer in many countries.",
        "By counting the seconds between the flash and the thunder, people can estimate how far away the storm is.",
        "If the gap becomes shorter, the storm is getting closer.",
      ],
      odd: 2,
      why: "Parça şimşek ile gök gürültüsü arasındaki süreyi anlatır. Fırtınaların pek çok ülkede yazın daha yaygın olduğunu söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "In caves in southern Germany, archaeologists have found flutes made from bird bones and mammoth ivory.",
        "They are more than 40,000 years old, making them the oldest known musical instruments.",
        "Mammoths became extinct thousands of years ago.",
        "The flutes have several finger holes, showing that they could play different notes.",
        "Their discovery suggests that music played an important role in the lives of early modern humans.",
      ],
      odd: 2,
      why: "Parça en eski flütleri anlatır. Mamutların binlerce yıl önce nesli tükendiğini söyleyen III. cümle konu dışıdır.",
    },
    {
      sentences: [
        "People with absolute pitch can name a musical note without hearing any reference note.",
        "The ability is rare in Western countries, affecting perhaps one person in ten thousand.",
        "It is much more common among people who began music lessons at an early age.",
        "It is also more common among speakers of languages such as Mandarin, in which pitch changes the meaning of words.",
        "Mandarin uses characters rather than an alphabet.",
      ],
      odd: 4,
      why: "Parça mutlak kulağı anlatır. Mandarin dilinin alfabe yerine karakterler kullandığını söyleyen V. cümle konu dışıdır.",
    },
    {
      sentences: [
        "As people age, they gradually lose the ability to hear very high-pitched sounds.",
        "Most adults over the age of about twenty-five cannot hear sounds above around seventeen thousand vibrations per second.",
        "Some shop owners have used devices that emit such sounds to discourage teenagers from gathering outside.",
        "Teenagers often spend their free time with friends.",
        "Critics argue that the devices unfairly target young people.",
      ],
      odd: 3,
      why: "Parça yaşla yüksek frekanslı sesleri duyamamayı ve bunun kullanımını anlatır. Gençlerin boş zamanlarını genellikle arkadaşlarıyla geçirdiğini söyleyen IV. cümle konu dışıdır.",
    },
    {
      sentences: [
        "Ultrasonic cleaners use high-frequency sound waves to clean small objects.",
        "Jewellery is often made of gold or silver.",
        "The waves create millions of tiny bubbles in a liquid, which then collapse violently.",
        "This action removes dirt from places that are difficult to reach with a brush.",
        "The method is widely used to clean jewellery and surgical instruments.",
      ],
      odd: 1,
      why: "Parça ultrasonik temizleyicileri anlatır. Mücevherlerin genellikle altın ya da gümüşten yapıldığını söyleyen II. cümle konu dışıdır.",
    },
  ],
};
