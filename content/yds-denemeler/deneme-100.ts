import type { Deneme } from "./types";

export const DENEME_100: Deneme = {
  no: 100,
  vocab: [
    [
      "Most people are ---- when they hear a recording of their own voice for the first time.",
      ["surprised", "delighted", "relieved", "bored", "proud"],
      "Çoğu insanın kendi sesinin kaydını ilk kez duyduğunda 'şaşırdığı' (surprised) anlatılır.",
    ],
    [
      "During puberty, a boy's vocal folds grow longer and thicker, causing his voice to ---- by about an octave.",
      ["deepen", "brighten", "vanish", "accelerate", "harden"],
      "Ergenlikte ses tellerinin uzayıp kalınlaşmasıyla erkek çocuğun sesinin yaklaşık bir oktav 'kalınlaştığı' (deepen) anlatılır.",
    ],
    [
      "Teachers, singers and call-centre workers are particularly ---- to voice problems because they speak for long periods.",
      ["vulnerable", "immune", "indifferent", "grateful", "opposed"],
      "Uzun süre konuştukları için öğretmenlerin, şarkıcıların ve çağrı merkezi çalışanlarının ses sorunlarına özellikle 'yatkın/savunmasız' (vulnerable) olduğu anlatılır.",
    ],
    [
      "The study found that listeners could ---- a speaker's emotions from just a few seconds of speech.",
      ["identify", "ignore", "conceal", "postpone", "exaggerate"],
      "Dinleyicilerin konuşmacının duygularını birkaç saniyelik konuşmadan 'saptayabildiği' (identify) anlatılır.",
    ],
    [
      "After shouting at the football match all afternoon, he could hardly speak and had to ---- his voice for several days.",
      ["rest", "raise", "record", "lose", "test"],
      "Bütün öğleden sonra maçta bağıran kişinin neredeyse konuşamadığı ve sesini birkaç gün 'dinlendirmek' (rest) zorunda kaldığı anlatılır.",
    ],
    [
      "When people are nervous, they often speak more ---- and at a higher pitch than usual.",
      ["rapidly", "calmly", "rarely", "softly", "slowly"],
      "İnsanların gergin olduklarında genellikle her zamankinden daha 'hızlı' (rapidly) ve daha yüksek perdeden konuştuğu anlatılır.",
    ],
  ],
  grammar: [
    [
      "The sound of our voice ---- partly through the bones of our skull, which is why it sounds different to us.",
      ["is carried", "carries", "has carried", "is carrying", "carried"],
      "Ses taşıyan değil taşınan şeydir; genel bir doğru için geniş zamanlı edilgen 'is carried' gerekir.",
    ],
    [
      "If we could hear our voices as others hear them, we ---- so surprised by recordings.",
      ["would not be", "will not be", "were not", "would not have been", "are not"],
      "İkinci tip koşul (If + could hear) ana cümlede 'would + V1' ister; 'would not be' gerekir.",
    ],
    [
      "Patients ---- voices are expected to fail because of illness can record them in advance.",
      ["whose", "who", "which", "whom", "that"],
      "Sesler hastalara aittir; iyelik bildiren ilgi zamiri 'whose' gerekir.",
    ],
    [
      "Most of us laugh far more often ---- we are in company than when nobody else is around.",
      ["when", "unless", "although", "until", "whereas"],
      "Çoğumuzun başkalarıyla birlikteyken, yanımızda kimse yokken olduğundan çok daha sık güldüğü anlatılır; zaman bildiren 'when' gerekir.",
    ],
    [
      "---- whispering seems gentle, it can actually put strain on the vocal folds.",
      ["Although", "Because", "Unless", "So that", "Since"],
      "Fısıldamanın nazik görünmesine 'rağmen' ses tellerini zorlayabildiği anlatılır; 'Although' gerekir.",
    ],
    [
      "By the age of six months, babies ---- to recognise the voices of the people who care for them.",
      ["have learned", "had learned", "learn to", "were learning", "will learn"],
      "Genel bir doğru olarak altı aylığa kadar tamamlanmış öğrenme present perfect ile anlatılır; 'have learned' gerekir.",
    ],
    [
      "Researchers asked volunteers ---- how trustworthy each speaker sounded.",
      ["to judge", "judging", "judge", "judged", "to be judged"],
      "'ask someone to do something' kalıbı mastar ister; 'to judge' gerekir.",
    ],
    [
      "Not until the twentieth century ---- possible for people to hear recordings of their own voices.",
      ["was it", "it was", "did it", "had it", "it had been"],
      "'Not until ...' ile başlayan cümlede ana cümle devrik olur; 'was it possible' gerekir.",
    ],
    [
      "The singer cancelled the concert ---- damaging her voice before an important tour.",
      ["to avoid", "avoiding", "avoid", "avoided", "for avoid"],
      "Amaç bildiren mastar gerekir: sesine zarar vermekten 'kaçınmak için' (to avoid).",
    ],
    [
      "The more people use their voices without rest, ---- the risk of injury becomes.",
      ["the greater", "the great", "greater", "the greatest", "so greater"],
      "'The more ..., the greater ...' kalıbı gerekir.",
    ],
  ],
  cloze: [
    {
      text:
        "Many people believe that whispering is the best way to protect a sore or tired voice. Surprisingly, this is not always true. When we speak normally, the vocal folds in the larynx come together and vibrate as air from the lungs passes between them. When we whisper, the folds do not vibrate, but in many people they are held tightly in a particular position, {1} can create tension and strain. Studies using small cameras inserted through the nose have shown that a large proportion of people squeeze their larynx {2} they whisper, especially when they try to whisper loudly. For this reason, voice specialists usually advise patients recovering from voice problems or surgery to avoid {3} as well as shouting. The best approach, they say, is complete vocal rest for a short period, followed by gentle speaking at a comfortable volume. Drinking plenty of water also helps, {4} the vocal folds work best when they are well lubricated. Some activities that people expect to be harmless, such as frequently clearing the throat, can also irritate the folds. Instead, specialists recommend swallowing or taking a sip of water, {5} produces the same effect without the strain.",
      blanks: [
        [
          "(17) ----",
          ["which", "what", "who", "where", "whose"],
          "Virgülden sonra önceki cümlenin tamamını (ses tellerinin sıkıca tutulması) niteleyen ilgi zamiri 'which' gerekir.",
        ],
        [
          "(18) ----",
          ["when", "unless", "until", "although", "so that"],
          "İnsanların fısıldadıklarında gırtlaklarını sıktığı anlatılır; zaman bildiren 'when' gerekir.",
        ],
        [
          "(19) ----",
          ["whispering", "to whisper", "whisper", "whispered", "whispers"],
          "'avoid' fiilinden sonra '-ing' gelir; 'avoid whispering' gerekir.",
        ],
        [
          "(20) ----",
          ["because", "although", "unless", "so that", "whereas"],
          "Bol su içmenin yardımcı olmasının nedeni ses tellerinin iyi nemlendiğinde en iyi çalışmasıdır; 'because' gerekir.",
        ],
        [
          "(21) ----",
          ["which", "what", "that", "who", "it"],
          "Virgülden sonra önceki eylemi (yutkunma ya da su yudumlama) niteleyen ilgi zamiri 'which' gerekir.",
        ],
      ],
    },
    {
      text:
        "Studies suggest that the average pitch of women's voices in some countries has fallen noticeably over the past several decades. In one well-known study, Australian researchers compared recordings of young women made in the 1940s with recordings of women of the same age made in the 1990s. They found that the average pitch had dropped significantly, {1} the difference between men's and women's voices had become smaller. The researchers suggested that the change was largely social rather than biological. As women have taken on more roles in work and public life that were once dominated by men, they may have adopted lower voices, consciously or unconsciously, {2} sound more authoritative. Other research has found that both men and women with lower voices are often perceived {3} more competent and better suited to leadership, {4} such judgements are not necessarily accurate. Some studies have even found that political candidates with deeper voices tend to receive more votes. Critics warn that these preferences may disadvantage people whose voices are naturally higher, and that they reflect stereotypes {5} than real differences in ability.",
      blanks: [
        [
          "(22) ----",
          ["and", "but", "or", "unless", "although"],
          "Ortalama perdenin düştüğü ve buna ek olarak kadın ve erkek sesleri arasındaki farkın azaldığı anlatılır; ekleme bildiren 'and' gerekir.",
        ],
        [
          "(23) ----",
          ["to", "for", "so", "in", "by"],
          "Amaç bildiren mastar gerekir: daha otoriter görünmek 'için' (to sound).",
        ],
        [
          "(24) ----",
          ["as", "like", "for", "with", "by"],
          "'be perceived as' = '... olarak algılanmak'; 'as' gerekir.",
        ],
        [
          "(25) ----",
          ["although", "because", "so", "unless", "since"],
          "Alçak sesli kişilerin daha yetkin algılanmasına karşın bu yargıların doğru olmayabileceği anlatılır; zıtlık bildiren 'although' gerekir.",
        ],
        [
          "(26) ----",
          ["rather", "more", "less", "sooner", "other"],
          "'rather than' = '... yerine, ... değil'; tercihlerin gerçek yetenek farkları yerine kalıp yargıları yansıttığı anlatılır.",
        ],
      ],
    },
  ],
  completion: [
    [
      "Although the human voice is produced by a small structure in the throat, ----.",
      [
        "it can express an extraordinary range of emotions and meanings",
        "many people enjoy singing in the shower or in the car",
        "some people would have preferred a deeper voice",
        "most recordings are made using digital equipment",
        "children usually learn to speak before they can read",
      ],
      "'Although' zıtlık kurar: insan sesi boğazdaki küçük bir yapıyla üretilse de olağanüstü çeşitlilikte duygu ve anlam ifade edebilmesi beklenmedik bir durumdur.",
    ],
    [
      "If you use your voice for many hours without a break, ----.",
      [
        "you may become hoarse or even lose it temporarily",
        "you would have been able to sing much higher notes",
        "the teacher had already finished the lesson",
        "most people were listening to the radio",
        "your voice will have become deeper by next year",
      ],
      "Birinci tip koşul (If + use) ana cümlede geniş/olasılık bildiren 'may + V1' ister; sesin kısılabileceği ya da geçici olarak kaybolabileceği anlatılır.",
    ],
    [
      "Our own voice sounds deeper to us than it does to others ----.",
      [
        "because we hear it partly through the bones of our head",
        "although we rarely hear our own voice at all",
        "unless we speak in a very quiet room",
        "so that we can recognise it more easily",
        "as soon as we start to speak in public",
      ],
      "Kendi sesimizin bize daha kalın gelmesinin nedeni onu kısmen kafatası kemikleri aracılığıyla duymamızdır; 'because' gerekir.",
    ],
    [
      "The recordings that the patient made before losing her voice ----.",
      [
        "were used to build a computer voice that sounded like hers",
        "which she had made over a period of several months",
        "because her illness was expected to get worse",
        "although she found it tiring to speak for long",
        "that included hundreds of different sentences",
      ],
      "Özne 'The recordings that the patient made before losing her voice' çekimli bir yüklem gerektirir; yalnızca 'were used to create ...' tam bir cümle kurar.",
    ],
    [
      "----, listeners were able to judge how trustworthy a speaker seemed.",
      [
        "After hearing just a single word",
        "Unless they had met the speaker before",
        "Even if the speaker had not said anything",
        "In case the recording was too quiet",
        "As long as the speaker was a famous person",
      ],
      "Dinleyicilerin bir konuşmacının ne kadar güvenilir göründüğünü yalnızca tek bir sözcük duyduktan sonra yargılayabildiği anlatılır; anlamca 'After hearing just a single word' uygundur.",
    ],
    [
      "Laughter is so contagious ----.",
      [
        "that people often start laughing simply because others are laughing",
        "because it is usually caused by jokes and funny stories",
        "although most people laugh only when they are alone",
        "unless the joke is told by a professional comedian",
        "so comedians would always tell the same jokes",
      ],
      "'so contagious ... that' yapısı sonuç bildirir: kahkaha o kadar bulaşıcıdır ki insanlar çoğu zaman sırf başkaları güldüğü için gülmeye başlar.",
    ],
    [
      "Since voice assistants became common in homes, ----.",
      [
        "researchers have studied our reactions to artificial voices",
        "most people had never spoken to a computer",
        "voices would have been recorded on tapes",
        "people were afraid of using new technology",
        "voice assistants will understand every language",
      ],
      "'Since' burada 'den beri' anlamındadır ve ana cümlede present perfect gerektirir: 'have studied'.",
    ],
    [
      "Babies can recognise their mother's voice soon after birth ----.",
      [
        "because they have already heard it while in the womb",
        "although they cannot hear anything until they are six months old",
        "unless their mother speaks a different language",
        "so that they will learn to speak more quickly",
        "as if they had heard it for the first time",
      ],
      "Bebeklerin doğumdan hemen sonra annelerinin sesini tanıyabilmesinin nedeni onu rahimdeyken zaten duymuş olmalarıdır; 'because' gerekir.",
    ],
    [
      "Had the singer rested her voice after the infection, ----.",
      [
        "she might not have needed an operation",
        "she will need an operation next month",
        "she sings in many famous concert halls",
        "her voice is one of the best in the world",
        "she would cancel her concert tomorrow",
      ],
      "Devrik üçüncü tip koşul (Had the singer rested) ana cümlede 'might not have + V3' ister; 'might not have needed' gerekir.",
    ],
    [
      "Unlike the voices of most other animals, ----.",
      [
        "the human voice can produce all the sounds of speech",
        "many birds can copy the sounds they hear around them",
        "dogs bark to warn their owners of danger",
        "some whales sing songs that last for hours",
        "most mammals use their voices to communicate",
      ],
      "'Unlike the voices of most other animals' ile diğer hayvanların seslerinden farklı bir şey karşılaştırılmalıdır; yalnızca insan sesinden söz eden seçenek bunu yapar.",
    ],
  ],
  enTr: [
    [
      "Most people dislike hearing recordings of their own voice because it sounds higher and thinner than they expect.",
      [
        "Çoğu insan kendi sesinin kayıtlarını duymaktan hoşlanmaz, çünkü ses bekledikleri kadar kalın ve dolgun değil, daha ince ve tiz gelir.",
        "Çoğu insan kendi sesini kayıtta duyduğunda, sesi beklediğinden çok daha kalın ve güçlü bulduğu için şaşırır.",
        "İnsanların çoğu, kendi seslerini kayıtta duyduklarında başkalarının seslerinden daha çok sever.",
        "Kendi sesinin kaydını dinleyen insanlar, sesin her zamankinden daha yüksek olduğunu fark eder.",
        "Çoğu insan, kendi sesini yalnızca bir kayıtta dikkatle dinlediğinde tanıyabilir ve sever.",
      ],
      "'Most people dislike hearing recordings of their own voice' = 'Çoğu insan kendi sesinin kayıtlarını duymaktan hoşlanmaz'; 'because it sounds higher and thinner than they expect' = 'çünkü bekledikleri kadar kalın ve dolgun değil, daha ince ve tiz gelir'.",
    ],
    [
      "People who have lost the ability to speak can now use computer voices created from recordings of their own speech.",
      [
        "Konuşma yeteneğini kaybetmiş insanlar artık kendi konuşma kayıtlarından oluşturulmuş bilgisayar seslerini kullanabiliyor.",
        "Konuşma yeteneğini kaybeden insanlar, bilgisayarlara kendi seslerini kaydetmeyi öğreniyor.",
        "Bilgisayar sesleri, konuşma yeteneğini kaybetmiş insanların konuşmasını kaydetmek için kullanılıyor.",
        "Konuşma yeteneğini kaybetmiş insanlar, bilgisayar seslerini kendi seslerine tercih ediyor.",
        "Kendi konuşma kayıtlarını dinleyen insanlar konuşma yeteneklerini yeniden kazanabiliyor.",
      ],
      "'People who have lost the ability to speak' = 'Konuşma yeteneğini kaybetmiş insanlar'; 'can now use computer voices created from recordings of their own speech' = 'artık kendi konuşma kayıtlarından oluşturulmuş bilgisayar seslerini kullanabiliyor'.",
    ],
    [
      "Researchers found that people laugh far more often in conversation than in response to jokes.",
      [
        "Araştırmacılar, insanların şakalara tepki olarak olduğundan çok daha sık sohbet sırasında güldüğünü buldu.",
        "Araştırmacılar, insanların sohbet sırasında anlatılan şakalara neredeyse hiç gülmediğini buldu.",
        "İnsanlar, araştırmacıların anlattığı şakalara günlük sohbetlerden çok daha fazla güldü.",
        "Araştırmacılar, sohbet eden insanların eskiye göre daha az şaka yaptığını gözlemledi.",
        "İnsanların sohbet sırasında gülmesi, şakaların daha komik olmasını sağlar.",
      ],
      "'Researchers found that' = 'Araştırmacılar ... buldu'; 'people laugh far more often in conversation than in response to jokes' = 'insanların şakalara tepki olarak olduğundan çok daha sık sohbet sırasında güldüğünü'.",
    ],
  ],
  trEn: [
    [
      "Ses telleri, akciğerlerden gelen hava aralarından geçerken titreşerek ses üretir.",
      [
        "The vocal folds produce sound by vibrating as air from the lungs passes between them.",
        "Air from the lungs prevents the vocal folds from vibrating when we speak.",
        "The lungs produce sound when the vocal folds stop vibrating.",
        "The vocal folds vibrate only when we breathe air into the lungs.",
        "Sound is produced in the lungs and carried to the vocal folds by air.",
      ],
      "'Ses telleri ... titreşerek ses üretir' = The vocal folds produce sound by vibrating; 'akciğerlerden gelen hava aralarından geçerken' = as air from the lungs passes between them.",
    ],
    [
      "Bazı araştırmalar, alçak sesli kişilerin daha güvenilir ve yetkin olarak algılandığını gösteriyor.",
      [
        "Some research shows that people with lower voices are perceived as more trustworthy and competent.",
        "Some research shows that people with higher voices are more trustworthy and competent.",
        "People who are trustworthy and competent usually develop lower voices.",
        "Some research has found no link between the voice and how people are perceived.",
        "Competent people try to lower their voices so that others will trust them.",
      ],
      "'Bazı araştırmalar ... gösteriyor' = Some research shows; 'alçak sesli kişilerin daha güvenilir ve yetkin olarak algılandığını' = that people with lower voices are perceived as more trustworthy and competent.",
    ],
    [
      "Öğretmenler, gün boyu konuştukları için ses sorunları yaşama riski en yüksek meslek grupları arasındadır.",
      [
        "Teachers are among the professional groups most at risk of voice problems because they talk all day.",
        "Teachers rarely have any voice problems, even though they talk for most of the day.",
        "Teachers talk all day because they want to avoid voice problems.",
        "Members of professional groups who talk all day are more likely to become teachers.",
        "Voice problems prevent most teachers from talking to their classes all day.",
      ],
      "'Öğretmenler ... meslek grupları arasındadır' = Teachers are among the professional groups; 'ses sorunları yaşama riski en yüksek' = most at risk of voice problems; 'gün boyu konuştukları için' = because they talk all day.",
    ],
  ],
  reading: [
    {
      text:
        "Few experiences are as universally uncomfortable as hearing a recording of one's own voice. Many people find it higher, thinner and less pleasant than they expected, and some refuse to listen at all. The explanation lies in the way we normally hear ourselves. When other people speak, their voices reach us only through the air. When we speak, however, the sound reaches our inner ears by two routes: through the air, like everyone else's voice, and through the bones and tissues of the head. This internal route, known as bone conduction, tends to strengthen the lower frequencies, making our voices sound deeper and fuller to us than they really are. A recording removes this effect, so we hear our voices as others hear them, and the difference can be disturbing. Psychologists believe that the discomfort is not only a matter of sound quality. Because our voices are closely linked to our sense of identity, hearing an unfamiliar version can feel like a challenge to how we see ourselves. Interestingly, in one study, people who were asked to rate the attractiveness of a series of recorded voices, without knowing that one of them was their own, often gave their own voice a higher score than the others did. This suggests that the problem lies mainly in recognising the voice as ours.",
      questions: [
        [
          "According to the passage, when we speak, the sound reaches our inner ears ----.",
          [
            "through both the air and the bones of the head",
            "only through the bones and tissues of the head",
            "only through the air, as other voices do",
            "after it has been reflected by nearby walls",
            "more slowly than other people's voices",
          ],
          "Konuştuğumuzda sesin iç kulağımıza hem havadan hem de kafanın kemikleri ve dokuları aracılığıyla iki yoldan ulaştığı belirtilir.",
        ],
        [
          "It is stated in the passage that bone conduction ----.",
          [
            "makes our voices sound deeper to ourselves",
            "is removed when we speak in a quiet room",
            "makes our voices sound higher than they are",
            "only affects people who sing professionally",
            "is the reason why recordings sound pleasant",
          ],
          "Kemik iletiminin düşük frekansları güçlendirdiği ve sesimizi bize olduğundan daha kalın ve dolgun gösterdiği belirtilir.",
        ],
        [
          "According to psychologists, the discomfort people feel is partly caused by ----.",
          [
            "the strong link between the voice and a person's identity",
            "the poor quality of most of the recording equipment people use",
            "the fact that recordings are always too loud",
            "a general dislike of modern technology among older people",
            "the use of headphones when listening",
          ],
          "Sesimizin kimlik duygumuzla yakından bağlantılı olduğu, alışılmadık bir versiyonunu duymanın kendimizi nasıl gördüğümüze meydan okuma gibi gelebileceği belirtilir.",
        ],
        [
          "The study described at the end of the passage suggests that people ----.",
          [
            "may like their voice if they do not know it is theirs",
            "always give their own voice the lowest score",
            "can easily recognise their own voice in any recording",
            "prefer the voices of strangers to those of friends",
            "find all recorded voices equally unattractive",
          ],
          "Kendi sesleri olduğunu bilmeden insanların kendi seslerine çoğu zaman diğerlerinden daha yüksek puan verdiği belirtilir; yani sesi kendileri olarak tanımadıklarında beğenebilirler.",
        ],
      ],
    },
    {
      text:
        "The human voice is produced in the larynx, a small structure in the neck often called the voice box. Inside it are two folds of tissue, the vocal folds, which open when we breathe and close when we speak. As air is pushed up from the lungs, it causes the closed folds to vibrate hundreds of times a second, producing a buzzing sound. This sound is then shaped by the throat, mouth, tongue, lips and nose, which act together like the body of a musical instrument to produce the vowels and consonants of speech. The pitch of the voice depends mainly on the length, thickness and tension of the vocal folds. In adult men, they are typically longer and thicker than in women, which is why men's voices are usually deeper. During puberty, the larynx of boys grows rapidly, and the folds lengthen considerably, causing the voice to 'break' and fall by around an octave. Girls' voices also deepen during this period, but much less. The voice continues to change throughout life. In older age, women's voices often become slightly lower, while men's voices may become slightly higher and weaker, partly because the vocal folds lose some of their muscle and elasticity. Regular use, such as singing, can help to keep the voice strong.",
      questions: [
        [
          "According to the passage, the vocal folds ----.",
          [
            "vibrate when air from the lungs passes through them",
            "are located in the mouth behind the tongue",
            "remain open while a person is speaking",
            "produce vowels and consonants on their own",
            "are the same size in men and women",
          ],
          "Akciğerlerden gelen havanın kapalı ses tellerini saniyede yüzlerce kez titreştirdiği belirtilir.",
        ],
        [
          "The comparison with a musical instrument is used to explain ----.",
          [
            "how the mouth and throat shape the basic sound",
            "why some people are better singers than others",
            "how the lungs push air into the larynx",
            "why men have deeper voices than women",
            "how the voice changes during puberty",
          ],
          "Boğaz, ağız, dil, dudaklar ve burnun bir çalgının gövdesi gibi birlikte çalışarak sesi şekillendirdiği anlatılır.",
        ],
        [
          "It is stated in the passage that during puberty ----.",
          [
            "boys' voices deepen much more than girls' voices",
            "girls' voices become much higher",
            "the vocal folds of boys become shorter",
            "the voices of boys and girls change equally",
            "the larynx stops growing",
          ],
          "Erkek çocukların sesinin yaklaşık bir oktav düştüğü, kızların sesinin de kalınlaştığı ama çok daha az olduğu belirtilir.",
        ],
        [
          "According to the passage, in older age ----.",
          [
            "men's and women's voices may change in different directions",
            "all voices become much deeper and stronger",
            "the voice no longer changes at all",
            "women's voices become much higher than before",
            "regular singing can damage the voice permanently",
          ],
          "Yaşlılıkta kadınların sesinin biraz kalınlaşabildiği, erkeklerin sesinin ise biraz incelip zayıflayabildiği belirtilir; yani farklı yönlerde değişebilir.",
        ],
      ],
    },
    {
      text:
        "How quickly do we form impressions of people from their voices? In a study published in 2014, researchers at the University of Glasgow recorded sixty-four people saying a single word, 'hello', and played the recordings to volunteers. The volunteers were asked to rate each voice on a range of qualities, including trustworthiness, dominance, attractiveness and warmth. Remarkably, their judgements were highly consistent with one another, even though they had heard less than a second of speech. Voices that rose in pitch towards the end of the word were often rated as more trustworthy, while lower voices were generally judged to be more dominant. Other studies have found that listeners can identify a speaker's approximate age, sex, emotional state and sometimes even social background from very short samples of speech. These rapid judgements may have been useful in human evolution, helping our ancestors to decide quickly whether a stranger was likely to be friendly or hostile. However, researchers stress that such first impressions are not necessarily accurate. A voice that sounds trustworthy does not prove that a person is honest. Nevertheless, these impressions can have real consequences, influencing decisions in job interviews, elections and even court cases. Some experts therefore suggest that people should be made more aware of how strongly voices can affect their judgements.",
      questions: [
        [
          "According to the passage, the volunteers in the 2014 study ----.",
          [
            "agreed closely in their judgements after hearing one word",
            "disagreed strongly about which voices were trustworthy",
            "were able to identify each speaker by name",
            "listened to each voice for several minutes",
            "were asked to record their own voices",
          ],
          "Dinleyicilerin bir saniyeden kısa konuşma duymalarına rağmen yargılarının birbiriyle büyük ölçüde tutarlı olduğu belirtilir.",
        ],
        [
          "It is stated in the passage that voices which rose in pitch at the end of the word ----.",
          [
            "were often judged to be more trustworthy",
            "were usually rated as more dominant",
            "were considered less attractive",
            "belonged mainly to older speakers",
            "were difficult for volunteers to hear",
          ],
          "Sözcüğün sonuna doğru perdesi yükselen seslerin sıklıkla daha güvenilir olarak derecelendirildiği belirtilir.",
        ],
        [
          "According to the passage, the ability to judge people quickly from their voices ----.",
          [
            "may have helped early humans to avoid danger",
            "has been proved to be completely accurate",
            "developed only in the twentieth century",
            "is found only among professional listeners",
            "has no effect on important decisions",
          ],
          "Bu hızlı yargıların atalarımızın bir yabancının dost mu düşman mı olduğuna hızla karar vermesine yardım etmiş olabileceği belirtilir.",
        ],
        [
          "The researchers' main warning is that ----.",
          [
            "first impressions based on voices can be misleading but still influential",
            "people should never trust a person with a low voice",
            "job interviews should in future be carried out only in writing",
            "voices cannot reveal anything useful about a speaker",
            "elections should be decided by recordings",
          ],
          "Araştırmacıların bu ilk izlenimlerin doğru olmayabileceğini ama iş görüşmelerinden mahkeme davalarına kadar gerçek sonuçlar doğurabileceğini vurguladığı belirtilir.",
        ],
      ],
    },
    {
      text:
        "For people with conditions such as motor neurone disease, which gradually weakens the muscles, losing the ability to speak can be one of the most painful consequences. Many eventually rely on computers that turn typed text into speech. For decades, however, these devices offered only a small choice of standard voices, often sounding robotic and unrelated to the user's age, sex or accent. Using such a voice could feel like losing a part of one's identity. A technique known as voice banking now offers an alternative. While they can still speak clearly, patients record themselves reading hundreds of sentences. These recordings are then used to build a synthetic voice that sounds like their own and can be used with their communication device. Advances in artificial intelligence have made the process much quicker; some systems can now produce a convincing voice from less than an hour of recordings, or even from old home videos and voicemail messages if the person has already lost much of their speech. Users often describe the experience of hearing their own voice again as deeply emotional. Families also value it, since it allows them to continue hearing a familiar voice. Researchers warn, however, that the same technology can be misused to imitate people's voices without permission, and they are working on ways to prevent this.",
      questions: [
        [
          "According to the passage, older text-to-speech devices ----.",
          [
            "offered few voices that often did not suit the user",
            "were able to copy the voice of any person",
            "were too expensive for most patients to use",
            "could only be used by doctors in hospitals",
            "produced voices that sounded completely natural",
          ],
          "Bu cihazların yıllarca kullanıcının yaşı, cinsiyeti ya da aksanıyla ilgisiz, robotik sesler sunduğu belirtilir.",
        ],
        [
          "It is stated in the passage that in voice banking, patients ----.",
          [
            "record many sentences while they can still speak well",
            "choose a voice from a list of famous people",
            "learn to speak again using special exercises",
            "type their messages more quickly than before",
            "have an operation to protect their vocal folds",
          ],
          "Hastaların hâlâ net konuşabilirken yüzlerce cümle okuyarak kendilerini kaydettiği belirtilir.",
        ],
        [
          "According to the passage, artificial intelligence has ----.",
          [
            "made it possible to create a voice from fewer recordings",
            "cured patients with motor neurone disease",
            "made communication devices unnecessary",
            "made voice banking much more expensive",
            "replaced the need for any recordings at all",
          ],
          "Yapay zekâdaki gelişmelerin süreci hızlandırdığı, bazı sistemlerin bir saatten az kayıttan ya da eski videolardan ikna edici bir ses üretebildiği belirtilir.",
        ],
        [
          "The researchers mentioned at the end of the passage are concerned that ----.",
          [
            "the technology could be used to copy voices dishonestly",
            "patients will stop using communication devices",
            "families do not like hearing synthetic voices",
            "voice banking takes too long to complete",
            "most people will lose their voices in the future",
          ],
          "Araştırmacıların aynı teknolojinin insanların seslerini izinsiz taklit etmek için kötüye kullanılabileceği konusunda uyardığı belirtilir.",
        ],
      ],
    },
    {
      text:
        "We tend to think of laughter as a response to something funny, but research suggests that this is only a small part of the story. In the 1990s, the American psychologist Robert Provine and his students listened to more than a thousand ordinary conversations in public places such as shopping centres and university campuses, noting each time someone laughed and what had just been said. They found that only about ten to twenty per cent of laughter followed anything that could be described as a joke. Most laughter came after remarks such as 'See you later' or 'I know', which were not funny at all. They also found that speakers laughed more than their listeners, and that laughter was roughly thirty times as frequent in company as in solitude. Provine concluded that laughter is above all a social signal, used to show friendliness, reduce tension and strengthen relationships. Laughter is also highly contagious: hearing others laugh makes us more likely to laugh ourselves, which is why television comedies have often used recorded laughter. Similar sounds have been observed in other animals. Chimpanzees and other great apes make panting noises during play, and some researchers believe that human laughter evolved from such play sounds.",
      questions: [
        [
          "According to Provine's research, most laughter ----.",
          [
            "did not follow anything particularly funny",
            "was caused by jokes and amusing stories",
            "happened when people were alone",
            "came from listeners rather than speakers",
            "occurred only in shopping centres",
          ],
          "Gülmenin yalnızca yüzde on ile yirmisinin şaka sayılabilecek bir şeyden sonra geldiği, çoğunun hiç komik olmayan sözlerden sonra geldiği belirtilir.",
        ],
        [
          "It is stated in the passage that people ----.",
          [
            "laugh much more in company than when they are alone",
            "laugh more when they are listening than when speaking",
            "never laugh when they are by themselves",
            "laugh only at people they do not know",
            "laugh less in public places than at home",
          ],
          "İnsanların başkalarıyla birlikteyken yalnız olduklarına göre yaklaşık otuz kat daha fazla güldüğü belirtilir.",
        ],
        [
          "Provine concluded that laughter is mainly ----.",
          [
            "a way of communicating and building social bonds",
            "a reaction to things that are surprising",
            "a sign that a person is nervous",
            "a habit learned from television",
            "a response to physical pain",
          ],
          "Provine'in gülmenin her şeyden önce dostluğu göstermek, gerginliği azaltmak ve ilişkileri güçlendirmek için kullanılan sosyal bir sinyal olduğu sonucuna vardığı belirtilir.",
        ],
        [
          "The writer mentions chimpanzees in order to suggest that ----.",
          [
            "human laughter may have developed from sounds made during play",
            "apes are able to understand human jokes",
            "chimpanzees laugh more often than humans",
            "laughter is found only in humans and other primates",
            "television comedies are popular with some animals",
          ],
          "Şempanzelerin oyun sırasında soluyarak ses çıkardığı ve bazı araştırmacıların insan kahkahasının bu oyun seslerinden evrimleştiğine inandığı belirtilir.",
        ],
      ],
    },
  ],
  dialogue: [
    [
      "Deniz: I hate listening to recordings of myself. I sound so strange.\nEmre: ----\nDeniz: Really? So everyone else hears the voice I don't like.",
      [
        "That's because you normally hear your voice through the bones of your head too.",
        "I usually record my lessons on my phone so that I can listen to them again later.",
        "My new phone has a very good microphone for recording voices.",
        "I think you should try singing in a choir.",
        "The quality of recordings was much worse in the past than it is now.",
      ],
      "Deniz 'Gerçekten mi? Yani herkes benim sevmediğim sesi duyuyor' der; Emre sesini normalde kafa kemiklerinden de duyduğu için böyle olduğunu söylemiş olmalıdır.",
    ],
    [
      "Patient: My voice has been hoarse for three weeks now.\nDoctor: ----\nPatient: All right. I'll make an appointment with a specialist.",
      [
        "That's quite long; you should have your throat examined.",
        "Many people catch colds and lose their voices in the winter months.",
        "You should probably drink a little more coffee every morning.",
        "Your voice sounds much deeper than mine.",
        "I've been working as a doctor at this clinic for almost ten years.",
      ],
      "Hasta 'Peki, bir uzmandan randevu alacağım' der; doktor bunun oldukça uzun bir süre olduğunu ve boğazın muayene ettirilmesinin en iyisi olacağını söylemiş olmalıdır.",
    ],
    [
      "Teacher: I've lost my voice again after a week of lessons.\nColleague: ----\nTeacher: Not yet, but I will. Perhaps the school could buy one for me.",
      [
        "Have you thought about using a small microphone in class?",
        "How many students are there in your class?",
        "Which subjects do you teach this year?",
        "Did you go anywhere nice during the holidays?",
        "The school will be closed next Monday.",
      ],
      "Öğretmen 'Henüz değil ama düşüneceğim; belki okul bana bir tane alabilir' der; meslektaşı sınıfta küçük bir mikrofon kullanmayı düşünüp düşünmediğini sormuş olmalıdır.",
    ],
    [
      "Journalist: How did you feel when you heard your synthetic voice for the first time?\nPatient: ----\nJournalist: It must mean a lot to your family as well.",
      [
        "I cried; it really sounded like me before I became ill.",
        "I recorded the sentences over about two months.",
        "The device is quite light and easy to carry.",
        "My doctor recommended the technique to me.",
        "I usually type my messages on a tablet.",
      ],
      "Gazeteci 'Bu aileniz için de çok şey ifade ediyor olmalı' der; hasta ağladığını ve sesin gerçekten hastalanmadan önceki sesi gibi geldiğini söylemiş olmalıdır.",
    ],
    [
      "Student: Why do we laugh at things that aren't even funny?\nProfessor: ----\nStudent: So laughing is more about relationships than about jokes.",
      [
        "Because laughter is mostly a way of connecting with other people.",
        "Some people find it very difficult to tell jokes well in front of others.",
        "Professional comedians often spend many years developing their performances.",
        "Children usually laugh more than adults do.",
        "There are many different kinds of humour in different cultures around the world.",
      ],
      "Öğrenci 'Demek ki gülmek şakalardan çok ilişkilerle ilgili' der; profesör gülmenin esas olarak dostluk göstermenin ve başkalarıyla bağ kurmanın bir yolu olduğunu söylemiş olmalıdır.",
    ],
  ],
  restatement: [
    [
      "Strange as it may seem, the voice we hear when we speak is not the one other people hear.",
      [
        "Surprisingly, our own voice sounds different to us from how it sounds to others.",
        "Other people hear exactly the same voice that we hear when we speak.",
        "Our voices sound rather strange to other people but completely normal to us.",
        "We cannot hear our own voices when we speak.",
        "Other people's voices always sound much stranger to us than our own voices do.",
      ],
      "'Strange as it may seem' = 'ne kadar tuhaf görünse de'; konuşurken duyduğumuz ses başkalarının duyduğu ses değildir.",
    ],
    [
      "Had the patient not recorded her voice in advance, she would have had to use a standard computer voice.",
      [
        "Recording her voice beforehand allowed the patient to avoid using a standard computer voice.",
        "The patient used a standard computer voice although she had recorded her own.",
        "The patient recorded her voice after she had started using a computer voice.",
        "The patient refused to record her voice in advance.",
        "Standard computer voices are always better than recorded ones.",
      ],
      "Devrik üçüncü tip koşul: hasta sesini önceden kaydetmeseydi standart bir bilgisayar sesi kullanmak zorunda kalırdı; yani önceden kayıt yapması bundan kaçınmasını sağladı.",
    ],
    [
      "It is not the jokes themselves but the presence of other people that makes us laugh most.",
      [
        "We laugh most because others are with us rather than because something is funny.",
        "Jokes are the main reason why people laugh in company.",
        "People generally laugh more at jokes when they are on their own.",
        "The presence of other people usually stops us from laughing at jokes.",
        "Funny jokes are always more important than company.",
      ],
      "'not ... but ...' yapısıyla bizi en çok güldürenin şakaların kendisi değil başkalarının varlığı olduğu vurgulanır.",
    ],
    [
      "So quickly do we judge voices that a single word can be enough to form an impression.",
      [
        "We judge voices so rapidly that hearing just one word may be enough to form an opinion.",
        "We need to hear many sentences before forming an impression of a voice.",
        "A single word is never enough for anyone to judge another person's voice.",
        "We form our impressions of voices slowly over the course of many conversations.",
        "Our impressions of voices change after every word we hear.",
      ],
      "Devrik 'So quickly do we judge voices that' = 'sesleri o kadar hızlı yargılarız ki'; tek bir sözcük izlenim oluşturmaya yetebilir.",
    ],
  ],
  paragraph: [
    [
      "Babies begin to learn about voices even before they are born. ---- Studies have shown that newborns prefer the sound of their mother's voice to that of a stranger, and that they respond differently to the language their mother spoke during pregnancy than to an unfamiliar one.",
      [
        "Midway through pregnancy, they can already hear sounds from outside.",
        "Many parents choose names for their babies long before they are actually born.",
        "Babies usually sleep for most of the day during their first weeks.",
        "Some mothers like to listen to relaxing music during the months of pregnancy.",
        "Most babies are born after about forty weeks of pregnancy.",
      ],
      "Boşluktan önce bebeklerin doğmadan sesleri öğrenmeye başladığı, sonra yenidoğanların annelerinin sesini tercih ettiği anlatılır; boşluğa gebeliğin yaklaşık yirmi beşinci haftasından itibaren rahim dışından sesleri duyabildiklerini söyleyen cümle gelmelidir.",
    ],
    [
      "It is often claimed that a powerful singer can shatter a wine glass with their voice. ---- In 2005, a television programme tested the idea with a rock singer, who managed to break a glass after several attempts, but only by singing extremely loudly at exactly the right pitch, very close to the glass.",
      [
        "For years, there was little proof that this could really happen.",
        "Wine glasses are usually made from very thin glass so that they look elegant.",
        "Some professional singers practise for several hours every single day.",
        "Rock music became popular in the 1950s and 1960s.",
        "Many people enjoy listening to music on television.",
      ],
      "Boşluktan sonra 2005'te bir televizyon programının bu fikri test ettiği anlatılır; öncesinde uzun yıllar bunun mümkün olduğuna dair güvenilir kanıt bulunmadığını söyleyen cümle gelmelidir.",
    ],
    [
      "Our voices change with our emotions in ways that others can easily detect. ---- When we are sad, by contrast, our voices tend to become quieter, slower and lower, with less variation in pitch.",
      [
        "When we are happy, we usually speak faster and at a higher pitch.",
        "Emotions are often expressed through facial expressions and body language as well.",
        "Some people find it difficult to talk openly about their feelings with others.",
        "Music can have a strong effect on our emotions.",
        "Actors often spend many years learning how to control their voices on stage.",
      ],
      "Boşluktan sonra 'by contrast' ile üzgünken sesin nasıl değiştiği anlatılır; öncesinde mutlu ya da heyecanlıyken daha hızlı ve daha yüksek, değişken perdeden konuştuğumuzu söyleyen karşıt cümle gelmelidir.",
    ],
    [
      "Smart speakers and phones now allow millions of people to control devices simply by talking to them. ---- Researchers have found that people tend to speak more slowly and loudly to these assistants, much as they might speak to a young child or someone who does not understand their language well.",
      [
        "This has changed the way we speak as well as how we use machines.",
        "The first telephones were invented in the nineteenth century.",
        "Many people now prefer to send text messages.",
        "Some devices can also play music and answer questions.",
        "Smart speakers are usually kept in the kitchen or living room.",
      ],
      "Boşluktan sonra insanların bu asistanlarla daha yavaş ve yüksek sesle konuştuğu anlatılır; boşluğa bunun yalnızca teknolojiyi kullanma biçimimizi değil konuşma biçimimizi de değiştirdiğini söyleyen cümle gelmelidir.",
    ],
  ],
  irrelevant: [
    {
      sentences: [
        "Professional singers take great care of their voices.",
        "Before a performance, they usually warm up with gentle exercises.",
        "Many avoid cold drinks, smoky places and shouting.",
        "Concert tickets have become increasingly expensive in recent years.",
        "Some even stop talking for a whole day before an important concert.",
      ],
      odd: 3,
      why: "Parça profesyonel şarkıcıların seslerini nasıl koruduğunu anlatır. Konser biletlerinin pahalılaştığını söyleyen IV. cümle konudan sapar.",
    },
    {
      sentences: [
        "Ventriloquists are performers who make it seem as if their voice is coming from somewhere else.",
        "They speak without moving their lips, usually while operating a puppet.",
        "Puppets have been used in theatre for thousands of years.",
        "Our brains tend to link a voice to whatever seems to be moving at the same time.",
        "This is why the audience believes that the puppet is speaking.",
      ],
      odd: 2,
      why: "Parça vantrilokların sesi başka bir yerden geliyormuş gibi göstermesini ve bunun nedenini anlatır. Kuklaların binlerce yıldır tiyatroda kullanıldığını söyleyen III. cümle akışı bozar.",
    },
    {
      sentences: [
        "Accents can reveal where a person grew up.",
        "Children usually adopt the accent of the people around them rather than that of their parents.",
        "Adults who move to a new region often find it much harder to change their accent.",
        "Some regions are famous for their traditional food.",
        "This suggests that the early years are especially important for learning how to speak.",
      ],
      odd: 3,
      why: "Parça aksanların nasıl edinildiğini ve erken yaşların önemini anlatır. Bazı bölgelerin geleneksel yemekleriyle ünlü olduğunu söyleyen IV. cümle konudan sapar.",
    },
    {
      sentences: [
        "Many animals can recognise individual voices.",
        "Dogs, for example, respond differently to the voices of their owners than to those of strangers.",
        "Penguin chicks can find their parents among thousands of birds by listening to their calls.",
        "Penguins cannot fly, but they are excellent swimmers.",
        "Even goats appear to recognise the calls of their own young.",
      ],
      odd: 3,
      why: "Parça pek çok hayvanın bireysel sesleri tanıyabildiğini anlatır. Penguenlerin uçamadığını ama iyi yüzdüğünü söyleyen IV. cümle konudan sapar.",
    },
    {
      sentences: [
        "Stammering affects around one per cent of adults worldwide.",
        "People who stammer may repeat sounds, stretch them out or get stuck on words.",
        "Research has shown that genes play an important role in the condition.",
        "Speech therapy can help many people to speak more fluently.",
        "Reading aloud is a popular activity in many primary schools.",
      ],
      odd: 4,
      why: "Parça kekemeliği, belirtilerini, nedenlerini ve tedavisini anlatır. Sesli okumanın ilkokullarda popüler bir etkinlik olduğunu söyleyen V. cümle konudan sapar.",
    },
  ],
};
