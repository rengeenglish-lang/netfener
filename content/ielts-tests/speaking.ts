import type { SpeakingModule, SpeakingPart } from "./types";

/**
 * IELTS Speaking for every practice test (original Netfener content). The examiner's words are
 * turned into MP3s by scripts/build-ielts-audio.mts; the candidate's answers are recorded in the browser.
 */

type QA = [question: string, sample: string];
type Spec = {
  examiner: string;
  /** Two Part 1 topics with three questions each. */
  p1: { topic: string; qs: QA[] }[];
  /** Part 2 card; `describe` completes "I'd like you to describe …". */
  p2: { topic: string; describe: string; points: string[]; sample: string; followUp: QA };
  /** Part 3: the wider theme of the Part 2 topic. */
  p3: { theme: string; qs: QA[] };
};

const P1_SECONDS = 30;
const P2_SECONDS = 120;
const FOLLOW_UP_SECONDS = 30;
const P3_SECONDS = 50;

function build(testId: string, spec: Spec): SpeakingModule {
  const dir = `/audio/ielts/${testId}/speaking`;
  const [t1, t2] = spec.p1;
  const part1: SpeakingPart = {
    title: "Part 1",
    intro: `Good afternoon. This is the IELTS Speaking test. In this first part, I'd like to ask you some questions about yourself. Let's talk about ${t1.topic}.`,
    introAudio: `${dir}/p1-intro.mp3`,
    prompts: [...t1.qs, ...t2.qs].map(([text, sample], i) => ({
      text,
      spoken: i === t1.qs.length ? `Now let's talk about ${t2.topic}. ${text}` : undefined,
      seconds: P1_SECONDS,
      sample,
      audio: `${dir}/p1-q${i + 1}.mp3`,
    })),
  };
  const part2: SpeakingPart = {
    title: "Part 2",
    intro: `Now I'm going to give you a topic, and I'd like you to talk about it for one to two minutes. Before you talk, you'll have one minute to think about what you're going to say. You can make some notes if you wish. Here is your topic. I'd like you to describe ${spec.p2.describe}.`,
    introAudio: `${dir}/p2-intro.mp3`,
    cueCard: { topic: spec.p2.topic, points: spec.p2.points, prepSeconds: 60 },
    prompts: [
      {
        text: spec.p2.topic,
        spoken: "All right? Remember, you have one to two minutes for this, so don't worry if I stop you. I'll tell you when the time is up. Can you start speaking now, please?",
        seconds: P2_SECONDS,
        sample: spec.p2.sample,
        audio: `${dir}/p2-q1.mp3`,
      },
      {
        text: spec.p2.followUp[0],
        spoken: `Thank you. ${spec.p2.followUp[0]}`,
        seconds: FOLLOW_UP_SECONDS,
        sample: spec.p2.followUp[1],
        audio: `${dir}/p2-q2.mp3`,
      },
    ],
  };
  const part3: SpeakingPart = {
    title: "Part 3",
    intro: `We've been talking about ${spec.p2.describe}, and I'd like to discuss with you one or two more general questions related to this. Let's consider ${spec.p3.theme}.`,
    introAudio: `${dir}/p3-intro.mp3`,
    prompts: spec.p3.qs.map(([text, sample], i) => ({ text, seconds: P3_SECONDS, sample, audio: `${dir}/p3-q${i + 1}.mp3` })),
  };
  return {
    id: "speaking",
    minutes: 15,
    examiner: spec.examiner,
    parts: [part1, part2, part3],
    outro: "Thank you very much. That is the end of the Speaking test.",
    outroAudio: `${dir}/outro.mp3`,
  };
}

export const SPEAKING: Record<string, SpeakingModule> = {
  "academic-1": build("academic-1", {
    examiner: "en-GB-RyanNeural",
    p1: [
      {
        topic: "where you live",
        qs: [
          ["Do you live in a house or a flat?", "I live in a flat on the fourth floor of a fairly new building. It's not very big, but it gets a lot of light in the morning, which I really appreciate, especially in winter."],
          ["What is your favourite room in your home, and why?", "Probably the living room. It's where my family spends most of the evening together, and there's a big window with a view of the hills, so it feels relaxing after a long day."],
          ["Would you like to change anything about your home?", "If I could, I'd add a small balcony. At the moment there's nowhere to sit outside, and I think it would be lovely to have breakfast in the fresh air when the weather's nice."],
        ],
      },
      {
        topic: "music",
        qs: [
          ["What kind of music do you enjoy listening to?", "I listen to quite a mix, but mostly indie and acoustic music. I find it calming, and I like songs where you can actually hear the lyrics clearly."],
          ["When do you usually listen to music?", "Mainly when I'm travelling, on the bus or walking to class. I also put something quiet on in the background when I'm studying, as long as it doesn't have words."],
          ["Did you learn to play a musical instrument as a child?", "Yes, I had guitar lessons for about two years when I was ten. I wasn't very dedicated, to be honest, but I can still play a few simple songs, and I'd like to start again one day."],
        ],
      },
    ],
    p2: {
      topic: "Describe a time when you helped someone.",
      describe: "a time when you helped someone",
      points: ["who you helped", "what the situation was", "how you helped them", "and explain how you felt about helping this person"],
      sample: "I'd like to talk about a time last year when I helped my neighbour, an elderly man called Mr Aydın, who lives alone in the flat below ours. One winter he slipped on the ice outside our building and hurt his wrist quite badly, so for about a month he couldn't carry anything heavy or do much cooking. When I found out, I offered to do his weekly shopping. Every Saturday morning I'd go to the market with his list, and then I'd sit with him for a while and have a cup of tea. At first he was a bit embarrassed and kept apologising, but after a few weeks we started chatting about all sorts of things, and he told me fascinating stories about the city when he was young. I also helped him set up video calls with his daughter, who lives abroad. Honestly, I felt really good about it. It didn't take much time, but it made a real difference to him, and I ended up gaining a friend. It also made me realise how isolated older people can be, even in a busy building.",
      followUp: ["Do you often help other people?", "I try to, in small ways. I'm not doing anything dramatic, but I help friends with their English homework, and I'll always give directions if a tourist looks lost."],
    },
    p3: {
      theme: "helping others in society",
      qs: [
        ["Why do some people do voluntary work?", "There are a few reasons. Some people genuinely want to give something back to their community, while others, especially younger people, see it as a way to gain experience for their CV. And I think for many retired people it's about staying active and feeling useful."],
        ["Do you think people help their neighbours less than they did in the past?", "In big cities, probably yes. People move more often and work longer hours, so they simply don't get to know the people next door. In smaller towns, though, I think neighbours still look out for each other quite a lot."],
        ["Should schools teach children to help others?", "I think so, yes. Schools could organise community projects, like visiting care homes or cleaning up parks. If children experience how good it feels to help, they're more likely to keep doing it as adults."],
        ["Is it the government's responsibility to help people in need, or the responsibility of individuals?", "I'd say it's both. The government has to provide the basic safety net, such as healthcare and support for people without work, because individuals can't do that on a large scale. But individuals can offer the personal contact and kindness that no government system can really replace."],
      ],
    },
  }),

  "academic-2": build("academic-2", {
    examiner: "en-GB-SoniaNeural",
    p1: [
      {
        topic: "your work or studies",
        qs: [
          ["Do you work or are you a student?", "I'm a student. I'm in my second year at university, studying civil engineering, and I'm also preparing for IELTS because I'd like to do a master's degree abroad."],
          ["Why did you choose this subject?", "I've always been interested in how things are built, especially bridges. My uncle is an engineer, and when I was younger he took me to see some of his projects, which really inspired me."],
          ["What do you find most difficult about your studies?", "The maths, definitely. Some of the modules are very theoretical, and it can be hard to see how they connect to real projects. I usually have to study with friends to understand them properly."],
        ],
      },
      {
        topic: "the weather",
        qs: [
          ["What kind of weather do you like best?", "I love those clear, sunny days in autumn when it's not too hot. You can walk around comfortably, and everything looks very bright and fresh."],
          ["Does the weather affect your mood?", "Yes, quite a lot. When it's grey and rainy for several days, I find it harder to concentrate and I feel a bit tired. A bit of sunshine makes me much more energetic."],
          ["Has the weather in your country changed in recent years?", "I think so. The summers seem to be getting hotter, and we get sudden heavy storms more often than when I was a child. A lot of older people say the winters used to be much colder too."],
        ],
      },
    ],
    p2: {
      topic: "Describe a place you would like to visit in the future.",
      describe: "a place you would like to visit in the future",
      points: ["where the place is", "how you know about it", "what you would do there", "and explain why you would like to visit this place"],
      sample: "The place I'd most like to visit is Kyoto, in Japan. I first became interested in it a few years ago when I watched a documentary about traditional Japanese architecture, and since then I've read quite a lot about it and followed some travel bloggers who live there. What attracts me is the combination of old and new. Kyoto has hundreds of temples and shrines, some of them more than a thousand years old, and beautiful gardens that change completely with the seasons. If I went, I'd love to go in spring, when the cherry blossom is out, although I know it gets very crowded then. I'd visit the famous bamboo forest early in the morning, before the tourists arrive, and I'd like to stay one night in a traditional inn, sleeping on a futon and eating a proper Japanese breakfast. I'd also try to take a short cooking class. The main reason I want to go is that the culture feels so different from mine, and I think travelling somewhere like that really broadens your mind. I'm saving up for it now, so hopefully I'll get there in the next couple of years.",
      followUp: ["Do you prefer to travel alone or with other people?", "With other people, generally. It's more fun to share the experience, and it's safer too. But I can see the appeal of travelling alone, because you're completely free to do what you want."],
    },
    p3: {
      theme: "tourism and travel",
      qs: [
        ["Why do you think people enjoy travelling to other countries?", "I think the main reason is curiosity. People want to see places they've only seen in pictures, try different food and experience another way of life. For many people it's also simply a break from their routine and the stress of work."],
        ["What are the advantages of tourism for a country?", "The most obvious advantage is economic. Tourism creates jobs in hotels, restaurants and transport, and it brings in foreign currency. It can also help to protect historic buildings, because there's money available to maintain them."],
        ["Can tourism cause problems for local people?", "Definitely. In very popular places, house prices and rents go up because so many properties become holiday rentals, so local people are pushed out. There can also be problems with noise, rubbish and overcrowded public transport."],
        ["How do you think travel will change in the future?", "I suspect people will travel less often by plane, partly because of concerns about climate change and partly because of cost. Train travel might become more popular, at least for shorter distances. And technology like virtual reality might let people explore places without actually going there, although I don't think it will ever replace the real thing."],
      ],
    },
  }),

  "academic-3": build("academic-3", {
    examiner: "en-GB-ThomasNeural",
    p1: [
      {
        topic: "your hometown",
        qs: [
          ["Where is your hometown?", "I'm from Eskişehir, which is a medium-sized city in the north-west of Turkey, roughly halfway between Istanbul and Ankara. It's known as a student city because it has two big universities."],
          ["What do you like most about your hometown?", "I like how lively it is. Because there are so many students, there are always concerts, festivals and new cafés opening. And the river through the centre makes it a really pleasant place to walk."],
          ["Has your hometown changed much since you were a child?", "Yes, quite a lot. There's a new tram system now, and the centre has been made more pedestrian-friendly. It's also much bigger than it was, with lots of new apartment blocks on the edges of the city."],
        ],
      },
      {
        topic: "reading",
        qs: [
          ["Do you enjoy reading?", "I do, although I don't read as much as I'd like to. I mostly read in bed before I go to sleep, because it helps me switch off from my phone."],
          ["What kind of books do you prefer?", "Mainly novels, especially crime and mystery stories. I like trying to work out what happened before the end of the book, although I'm usually wrong!"],
          ["Do you prefer reading printed books or e-books?", "Printed books, definitely. I like the feel of the paper, and I find it easier to concentrate. I do use e-books when I'm travelling, though, because they're much lighter to carry."],
        ],
      },
    ],
    p2: {
      topic: "Describe a piece of technology that you find useful.",
      describe: "a piece of technology that you find useful",
      points: ["what it is", "when you got it", "how you use it", "and explain why you find it useful"],
      sample: "I'm going to talk about my noise-cancelling headphones, which I'd honestly say are the most useful thing I own after my phone. I bought them about two years ago, when I started commuting to university by train every day. The journey takes about forty-five minutes each way, and the carriages are often really crowded and noisy, so I was finding it impossible to study. A friend recommended this particular model, and although they were quite expensive, I decided to treat myself after I got my first part-time job. I use them almost every day. On the train, I either listen to podcasts or turn on the noise cancellation without any music at all, which makes it much easier to read my lecture notes. I also wear them in the library and sometimes at home when my younger brothers are playing loudly. What makes them so useful is that they basically give me a quiet space wherever I am. I've noticed that I get much more work done on my commute than before, and I arrive home less tired. The battery lasts for days as well, which is very convenient.",
      followUp: ["Is there any technology you would like to buy in the future?", "I'd like a better laptop. Mine is about five years old now and quite slow, which is frustrating when I'm working on engineering software for my course."],
    },
    p3: {
      theme: "technology and daily life",
      qs: [
        ["How has technology changed the way people communicate?", "It's made communication much faster and cheaper. We can talk to people on the other side of the world instantly, for free. On the other hand, a lot of conversation now happens through short messages rather than face to face, and some people feel that relationships have become more superficial as a result."],
        ["Do you think older people find it difficult to use new technology?", "Some do, yes, mainly because they didn't grow up with it and the technology changes so quickly. But I think it depends on the person. My grandmother uses video calls and online banking without any problems, because she was motivated to learn so she could see her grandchildren."],
        ["Are there any disadvantages to relying on technology?", "One big disadvantage is that we become vulnerable when it fails. If the internet goes down, many businesses simply stop working. There's also the issue of privacy, since we share so much personal information with technology companies, often without realising it."],
        ["What kind of technology do you think will be important in the future?", "I think artificial intelligence will become part of almost everything we do, from healthcare to education. Renewable energy technology will also be crucial if we're going to deal with climate change, things like better batteries for storing solar and wind power."],
      ],
    },
  }),

  "academic-4": build("academic-4", {
    examiner: "en-GB-LibbyNeural",
    p1: [
      {
        topic: "your daily routine",
        qs: [
          ["What is the busiest part of your day?", "Definitely the morning. I have to get ready, have breakfast and catch the bus by half past seven, so it's always a bit of a rush. The afternoons are usually much calmer."],
          ["Do you prefer to do the same things every day, or do you like change?", "I like having a basic routine, because it helps me be productive. But I get bored if every day is exactly the same, so I try to do something different at the weekend."],
          ["Is there anything you would like to change about your daily routine?", "I'd like to get up a bit earlier and do some exercise before work. At the moment I always say I'll go to the gym in the evening, but I'm usually too tired."],
        ],
      },
      {
        topic: "food",
        qs: [
          ["What is your favourite kind of food?", "I love my mother's home cooking, especially stuffed vegetables. When I'm out, I usually choose Italian food, because I really like pasta dishes."],
          ["Do you enjoy cooking?", "Yes, I've started enjoying it more recently. I used to find it stressful, but now I find it relaxing to cook something on a Sunday evening while listening to music."],
          ["Have your eating habits changed since you were younger?", "They have. I eat much less sugar than I did as a teenager, and I try to eat more vegetables. I also eat out less now, partly to save money."],
        ],
      },
    ],
    p2: {
      topic: "Describe a teacher who has influenced you.",
      describe: "a teacher who has influenced you",
      points: ["who the teacher was", "what subject they taught", "what they were like", "and explain how this teacher influenced you"],
      sample: "The teacher I want to talk about is Ms Demir, who taught me English in my last two years of high school. Before her class, English was honestly one of my weakest subjects. I could do grammar exercises, but I was terrified of speaking. Ms Demir was quite young, very energetic and, most importantly, incredibly patient. She never made fun of anyone's mistakes, and she always said that making mistakes was simply proof that you were trying. What made her lessons different was that she got us speaking from the very first day. We did debates, role plays and short presentations about topics we actually cared about, like music and football, instead of just doing exercises from the book. She also lent me novels in English and encouraged me to watch films with English subtitles. The biggest influence she had on me was on my confidence. By the end of the second year, I actually volunteered to give a presentation in front of the whole school. She's also the reason I'm interested in studying abroad now. Without her encouragement, I don't think I'd be taking this exam.",
      followUp: ["Do you still keep in touch with this teacher?", "Yes, occasionally. We follow each other on social media, and I sent her a message when I got into university. She was really pleased to hear from me."],
    },
    p3: {
      theme: "education",
      qs: [
        ["What qualities make a good teacher?", "I'd say patience is the most important quality, along with the ability to explain things clearly. A good teacher also needs to be enthusiastic about their subject, because if the teacher is bored, the students will be bored too."],
        ["Do you think teachers are respected enough in your country?", "Not as much as they used to be, in my opinion. People still say that teaching is an important job, but salaries are relatively low and teachers often have very large classes, which suggests that society doesn't really value them as much as it claims."],
        ["Will technology ever replace teachers?", "I don't think it will replace them completely. Technology is great for practising skills and accessing information, but students also need motivation, encouragement and someone who notices when they're struggling. That human side of teaching is very difficult to automate."],
        ["Is it better to study in a classroom or online?", "I think it depends on the learner. Online study is flexible and suits people who are disciplined and have busy lives. But for most young people, I'd say the classroom is better, because they benefit from interacting with classmates and having a clear structure."],
      ],
    },
  }),

  "academic-5": build("academic-5", {
    examiner: "en-GB-OliverNeural",
    p1: [
      {
        topic: "friends",
        qs: [
          ["Do you have a lot of friends?", "Not a huge number, but I have a small group of really close friends. We've known each other since primary school, so they feel almost like family."],
          ["What do you usually do with your friends?", "We usually meet at a café or someone's house and just chat. In summer we sometimes go camping or have a barbecue by the lake."],
          ["Is it easy to make new friends as an adult?", "I think it's harder than when you're at school, because everyone is busy with work. The easiest way is probably through shared hobbies, like joining a sports team or a club."],
        ],
      },
      {
        topic: "sport",
        qs: [
          ["Do you play any sports?", "I play basketball once a week with some friends from work. I'm not particularly good, but it's a great way to stay fit and relieve stress."],
          ["Did you do much sport at school?", "Yes, quite a bit. We had PE twice a week, and I was in the school volleyball team for a couple of years, which I really enjoyed."],
          ["Do you prefer watching sport or playing it?", "Playing, definitely. Watching can be exciting, especially big football matches, but I'd rather be active myself than sit on the sofa for two hours."],
        ],
      },
    ],
    p2: {
      topic: "Describe an important decision you made.",
      describe: "an important decision you made",
      points: ["what the decision was", "when you made it", "how you made the decision", "and explain why it was important"],
      sample: "One of the most important decisions I've ever made was to change my university course after my first year. I'd originally started studying law, mainly because my parents thought it would lead to a secure, well-paid job, and to be honest I didn't really know what I wanted at eighteen. But within a few months I realised I wasn't enjoying it at all. I found the reading very dry, and I was much more interested in the psychology module I was taking as an option. The decision took me a long time. I spoke to my tutors, and to a couple of older students who had switched courses, and I made a list of the pros and cons. The hardest part was telling my parents, because I knew they'd be worried. In the end, they were more supportive than I expected, especially after I showed them the career options in psychology. It was important because it changed the whole direction of my life. I'm now in my final year of psychology, my marks have improved a lot, and I'm genuinely excited about my future career. It also taught me to trust my own judgement.",
      followUp: ["Do you usually make decisions quickly or slowly?", "Slowly, I'd say, at least for big decisions. I like to think things through and ask other people for advice. For small things, like what to eat, I'm actually quite quick."],
    },
    p3: {
      theme: "making decisions",
      qs: [
        ["What kinds of decisions do young people have to make today?", "Young people face a lot of big decisions quite early, such as what to study, which career to follow and whether to move abroad. I think there's more choice than in the past, which is positive, but it can also make the decisions more stressful."],
        ["Should parents make important decisions for their children?", "When children are young, yes, of course. But as they get older, I think parents should advise rather than decide. If young people are never allowed to make their own choices, they won't learn to be responsible."],
        ["Why do some people find it difficult to make decisions?", "Often it's because they're afraid of making the wrong choice and regretting it later. Having too many options can also be paralysing. If you have twenty different courses to choose from, it's much harder than if you have three."],
        ["Do you think people make better decisions when they are older?", "Generally, yes, because they have more experience and can learn from past mistakes. However, older people can also be more cautious and less willing to take risks, so they might miss out on opportunities that a younger person would take."],
      ],
    },
  }),

  "academic-6": build("academic-6", {
    examiner: "en-GB-OliviaNeural",
    p1: [
      {
        topic: "shopping",
        qs: [
          ["Do you enjoy going shopping?", "It depends what I'm buying. I enjoy browsing in bookshops, but I find clothes shopping quite tiring, especially in big shopping centres at the weekend."],
          ["Do you prefer shopping online or in shops?", "For everyday things I mostly shop online now because it saves time. But for clothes and shoes I prefer going to a shop, so I can try things on."],
          ["Did you go shopping a lot when you were a child?", "Not really. My mother usually did the shopping on her own, but I remember going with her to the market on Saturdays, which I loved because of all the colours and noise."],
        ],
      },
      {
        topic: "the internet",
        qs: [
          ["How often do you use the internet?", "Pretty much all day, to be honest. I use it for my studies, for messaging friends and for watching videos in the evening."],
          ["What do you mainly use the internet for?", "Mostly for studying. I watch online lectures, read articles and use language-learning apps. I also use it a lot for planning trips and finding recipes."],
          ["Do you think you spend too much time online?", "Probably, yes. I've noticed that I sometimes pick up my phone without any reason, so recently I've started turning off notifications in the evening."],
        ],
      },
    ],
    p2: {
      topic: "Describe a goal you hope to achieve in the future.",
      describe: "a goal you hope to achieve in the future",
      points: ["what the goal is", "when you decided on it", "what you are doing to achieve it", "and explain why this goal is important to you"],
      sample: "A goal I really hope to achieve in the next few years is to work as a doctor with an international medical charity, providing healthcare in areas where it's hard to find. I decided on this when I was about sixteen, after reading a book written by a doctor who had worked in refugee camps. Her stories about how much difference basic medical care could make really stayed with me. At the moment, I'm in the third year of medical school, so I still have a long way to go. Apart from my studies, I'm doing a few things to prepare. I'm improving my English, which is why I'm taking IELTS, because most of these organisations work in English. I've also started learning French, since a lot of their projects are in French-speaking countries. And last summer I volunteered at a health clinic in a rural area of my own country, which gave me a small taste of the challenges involved. This goal is important to me because I don't just want a comfortable career. I want to feel that my work genuinely helps people who need it most.",
      followUp: ["Do you think it is important to have goals?", "Yes, I think goals give you direction and motivation. Without them, it's easy to drift. But I also think it's important to be flexible and change your goals if your situation changes."],
    },
    p3: {
      theme: "ambition and success",
      qs: [
        ["What does success mean to most people in your country?", "For many people, success still means having a well-paid, secure job and being able to buy a home. But I think younger people increasingly see success in terms of doing something they enjoy and having a good work-life balance."],
        ["Is it good to be very ambitious?", "Ambition is generally positive, because it pushes people to work hard and improve. But if someone is too ambitious, they might neglect their health or their relationships, or even behave unfairly towards others to get what they want."],
        ["Do you think famous people are good role models for young people?", "Some are, and some definitely aren't. Athletes who have worked hard for years can be excellent role models. However, many celebrities are famous mainly for their lifestyle, and they can give young people unrealistic ideas about money and appearance."],
        ["Is success more about hard work or luck?", "I'd say mostly hard work, but luck plays a bigger role than people like to admit. Being born into a supportive family or meeting the right person at the right time can make a huge difference. Hard work is necessary, but on its own it isn't always enough."],
      ],
    },
  }),

  "general-1": build("general-1", {
    examiner: "en-GB-NoahNeural",
    p1: [
      {
        topic: "your neighbourhood",
        qs: [
          ["What is your neighbourhood like?", "It's a quiet residential area on the edge of the city. There are lots of trees and a small park, and most of the people living there are families with children."],
          ["Do you know many of your neighbours?", "I know a few of them quite well, especially the family next door. We sometimes help each other, for example by watering plants when someone is away."],
          ["Is there anything you would like to improve in your neighbourhood?", "I'd like more shops and cafés within walking distance. At the moment you need a car for almost everything, which isn't very convenient."],
        ],
      },
      {
        topic: "holidays",
        qs: [
          ["What do you usually do on holiday?", "I usually go back to my grandparents' village for a week in summer, and then try to have a short trip somewhere new, usually by the sea."],
          ["Do you prefer relaxing holidays or active holidays?", "A mixture, really. I like to relax on the beach for a couple of days, but after that I get bored and want to explore, go hiking or visit museums."],
          ["Where did you go on holiday when you were a child?", "We almost always went to the same seaside town on the Aegean coast. We rented a small house there every August, so I have lots of happy memories of it."],
        ],
      },
    ],
    p2: {
      topic: "Describe a celebration that you enjoyed.",
      describe: "a celebration that you enjoyed",
      points: ["what the celebration was", "where it took place", "who was there", "and explain why you enjoyed it"],
      sample: "I'd like to talk about my cousin's wedding, which took place last September in my family's hometown. It was a really big event. There must have been about three hundred guests, including relatives I hadn't seen for years, some of whom had travelled from Germany and the Netherlands. The celebration lasted for two days. On the first evening there was a henna night, which is a traditional event for the bride and the women of the family, with music and singing. The wedding itself was held the following evening in a large garden outside the town, decorated with thousands of small lights. There was a live band, a huge dinner and, of course, a lot of dancing. I think I danced for about five hours without stopping! What I enjoyed most was seeing my whole extended family together in one place, all happy and relaxed. Since I moved to the city for work, I don't see many of them very often, so it felt like a reunion as well as a wedding. It was also lovely to see my cousin so happy, because we grew up together and are very close.",
      followUp: ["Do you prefer big celebrations or small ones?", "I enjoy big ones occasionally, like weddings, but generally I prefer small celebrations with close friends. You can have proper conversations and it's much less tiring."],
    },
    p3: {
      theme: "festivals and traditions",
      qs: [
        ["Why do people celebrate special occasions?", "Celebrations bring people together and mark important moments in life, like a marriage or the birth of a child. They also give people a break from their everyday routine and a chance to feel part of a community."],
        ["Are traditional festivals as important as they used to be?", "In some ways they're less important, especially in cities, where people are busier and families are more spread out. But many traditional festivals are still very popular, and in some cases young people are rediscovering them as a way of connecting with their culture."],
        ["Do you think celebrations have become too commercial?", "Yes, to some extent. Shops start advertising holiday products months in advance, and there's a lot of pressure to buy expensive gifts. I think that can make people forget what the celebration is really about."],
        ["How might celebrations change in the future?", "They might become smaller and more personal, partly because of the cost of big events. Technology will probably play a bigger role too. For example, relatives abroad already join weddings by video call, and that will probably become completely normal."],
      ],
    },
  }),

  "general-2": build("general-2", {
    examiner: "en-GB-HollieNeural",
    p1: [
      {
        topic: "transport",
        qs: [
          ["How do you usually travel to work or school?", "I usually take the metro. It takes about twenty minutes, and it's much faster than driving because the traffic in the city centre is terrible."],
          ["Is public transport good where you live?", "It's quite good in the centre, with frequent buses and metro trains. But in the suburbs the buses are less reliable, especially in the evenings."],
          ["Would you like to change the way you travel?", "I'd like to cycle more. There are some new cycle lanes near my home, so I'm thinking of buying a bike and cycling to work when the weather's good."],
        ],
      },
      {
        topic: "cooking",
        qs: [
          ["How often do you cook?", "I cook most evenings, usually something quick and simple. At the weekend I have more time, so I like to try new recipes."],
          ["Who taught you to cook?", "Mainly my father, actually. He's a really good cook, and when I was a teenager he made me help him in the kitchen every Sunday."],
          ["Do you think children should learn to cook at school?", "Yes, I do. Cooking is such a useful life skill, and it would help children understand more about healthy eating."],
        ],
      },
    ],
    p2: {
      topic: "Describe a job you would like to do in the future.",
      describe: "a job you would like to do in the future",
      points: ["what the job is", "what skills it requires", "how you could get this job", "and explain why you would like to do it"],
      sample: "The job I'd really love to do in the future is to work as a physiotherapist, helping people recover from injuries. At the moment I work in an office, doing administration for a logistics company, and although it's a stable job, I don't find it very rewarding. I became interested in physiotherapy a couple of years ago, after I injured my knee playing football. I had about three months of treatment, and I was really impressed by how much the physiotherapist knew and how she motivated me when I was frustrated. The job requires a good understanding of anatomy and how the body moves, so you need proper training. It also needs strong communication skills and a lot of patience, because recovery can be slow and patients often feel discouraged. To get the job, I'd need to do a degree in physiotherapy, which takes three or four years. I'm planning to study part-time while I continue working, and I'm already taking an evening course in human biology to prepare. I'd like to do this job because I think it would be satisfying to see people get their lives back to normal.",
      followUp: ["Do you think it is easy to change careers?", "Not really. It usually means retraining, which takes time and money, and you might have to start at a lower salary. But I think it's worth it if you're unhappy in your current job."],
    },
    p3: {
      theme: "work and careers",
      qs: [
        ["What do people consider when choosing a job?", "Salary is obviously important, but people also think about job security, working hours and whether the work is interesting. More and more people also consider whether they can work from home, at least some of the time."],
        ["Is it better to stay in one job for a long time or to change jobs often?", "Both have advantages. Staying in one job gives you security and the chance to become an expert. But changing jobs every few years can help you learn new skills and often leads to a higher salary."],
        ["How has technology changed the way people work?", "Technology has made many tasks faster and allowed people to work from almost anywhere. However, it has also blurred the line between work and home life, since many people now check emails in the evenings and at weekends."],
        ["Which jobs do you think will be most important in the future?", "I think jobs in healthcare will be very important, because populations are ageing in many countries. Jobs related to technology and renewable energy will also be in high demand."],
      ],
    },
  }),

  "general-3": build("general-3", {
    examiner: "en-GB-ElliotNeural",
    p1: [
      {
        topic: "photographs",
        qs: [
          ["Do you like taking photos?", "Yes, I take photos almost every day with my phone, mostly of food, nature and my friends. I'm not a serious photographer, though."],
          ["What do you do with the photos you take?", "Most of them just stay on my phone, to be honest. I post a few on social media, and once a year I print my favourites and put them in an album."],
          ["Do you have any old family photos at home?", "Yes, my parents have several boxes of old photos. I love looking through them, especially the ones of my grandparents when they were young."],
        ],
      },
      {
        topic: "parks",
        qs: [
          ["Is there a park near where you live?", "Yes, there's a large park about ten minutes' walk from my flat. It has a lake and a lot of walking paths."],
          ["What do people usually do in parks in your country?", "People go jogging, walk their dogs and have picnics with their families, especially at the weekend. In summer many people play football or volleyball."],
          ["Did you often go to parks as a child?", "Yes, all the time. My grandmother used to take me to the playground almost every afternoon after school, and on Sundays the whole family would go there for a picnic."],
        ],
      },
    ],
    p2: {
      topic: "Describe a film or book that you enjoyed.",
      describe: "a film or book that you enjoyed",
      points: ["what it was", "when you watched or read it", "what it was about", "and explain why you enjoyed it"],
      sample: "I'd like to talk about a film called Up, an animated film by Pixar that I first watched with my younger sister a few years ago. I'd heard it was good, but I didn't expect it to have such an impact on me. The film tells the story of an elderly man called Carl, who has recently lost his wife. When they were young, they always dreamed of travelling to a remote waterfall in South America, but they never managed it because real life kept getting in the way. So, at the age of seventy-eight, he ties thousands of balloons to his house and flies away to finally make the journey. Accidentally, he takes a young boy scout with him, and the two of them have all sorts of adventures. The reason I enjoyed it so much is that it's funny and exciting, but also really emotional. The first ten minutes, which show Carl's whole married life without any words, are some of the most moving minutes I've ever seen in a film. It made me think about not postponing your dreams for too long. I've watched it several times since.",
      followUp: ["Do you prefer watching films at home or at the cinema?", "Usually at home, because it's cheaper and more comfortable. But for big action films I prefer the cinema, because of the huge screen and the sound."],
    },
    p3: {
      theme: "entertainment and media",
      qs: [
        ["Why do you think people enjoy watching films?", "Films allow people to escape from their everyday lives for a couple of hours. They can also make us laugh, help us relax or make us think about important issues. And watching a film is often a social activity that people share with friends or family."],
        ["Do you think children read less than they used to?", "Probably, yes. There's so much competition from video games, social media and streaming services that reading books seems less exciting to many children. However, some book series are still extremely popular, so I think children will read if the stories are engaging."],
        ["Should the government support the film industry?", "I think it should, to some extent. Without support, it's difficult for smaller countries to compete with big Hollywood productions, and local films are important for preserving a country's culture and language."],
        ["How might entertainment change in the future?", "Entertainment will probably become more interactive and personalised. We might see more films where viewers can choose what happens next, and virtual reality could make games and concerts feel much more realistic."],
      ],
    },
  }),

  "general-4": build("general-4", {
    examiner: "en-GB-MiaNeural",
    p1: [
      {
        topic: "mornings",
        qs: [
          ["Are you a morning person?", "Not really. I find it hard to get up early, and I need at least one cup of coffee before I can have a proper conversation."],
          ["What do you usually do in the morning?", "On weekdays I get up at seven, have a quick shower and breakfast, and leave for work at around eight. At the weekend I like to have a long, slow breakfast."],
          ["Do you do anything differently on weekend mornings?", "Yes, at weekends I sleep later and often go for a walk in the park before lunch. Sometimes I meet friends for brunch."],
        ],
      },
      {
        topic: "clothes",
        qs: [
          ["What kind of clothes do you usually wear?", "Mostly casual clothes, like jeans and T-shirts. For work I have to dress a bit more smartly, so I wear shirts and trousers."],
          ["Do you spend a lot of money on clothes?", "Not much. I prefer to buy a few good-quality items that last a long time rather than lots of cheap clothes."],
          ["Have the clothes people wear in your country changed in recent years?", "Yes, people dress much more casually than before, even at work. Trainers are now acceptable almost everywhere, which wasn't the case when I was a child."],
        ],
      },
    ],
    p2: {
      topic: "Describe a person in your family whom you admire.",
      describe: "a person in your family whom you admire",
      points: ["who this person is", "what they are like", "what they have done in their life", "and explain why you admire them"],
      sample: "The person in my family I admire most is my grandmother on my mother's side. She's eighty-two now and still lives on her own in the small town where she was born. She had a difficult start in life. Her father died when she was young, so she had to leave school at fourteen to help her mother on the family farm. Despite that, she was always determined to educate herself. She read every book she could find, and in her forties, after raising four children, she went back to evening school and finally got her high school diploma. After that, she started a small business making traditional jams and pickles, which she sold at local markets and eventually to shops in the city. She ran it for over twenty years. As a person, she's warm and funny, but also very honest. She'll always tell you what she thinks, even if it's not what you want to hear. I admire her because she never let her circumstances stop her, and she always believed it was never too late to learn. Whenever I feel like giving up on something, I think of her.",
      followUp: ["Do you spend much time with your family?", "Less than I'd like, because I work long hours. But we always have Sunday lunch together, and we talk on the phone most days."],
    },
    p3: {
      theme: "family life",
      qs: [
        ["How have families changed in your country in recent decades?", "Families have become smaller, and it's much more common for young couples to live separately from their parents. In the past, it was normal for three generations to live together in the same house, but now that's quite rare in cities."],
        ["What are the advantages of growing up in a large family?", "Children in large families always have someone to play with, and they learn to share and cooperate from an early age. There's also a strong support network, since there are many people to help in difficult times."],
        ["Who should take care of elderly people: families or the state?", "Ideally, I think families should play the main role, because elderly people usually prefer to be with people they love. But the state also needs to provide good care homes and support, because not every family is able to look after an elderly relative, especially if they have serious health needs."],
        ["Do you think the role of grandparents is important?", "Yes, very important. In many families, grandparents help with childcare, which allows parents to work. They also pass on family history and traditions, and they often have more time and patience than busy parents."],
      ],
    },
  }),
};
