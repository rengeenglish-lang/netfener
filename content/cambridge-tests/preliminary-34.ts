import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 34 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_34: CambridgeTest = {
  id: "preliminary-34",
  level: "preliminary",
  no: 34,
  title: "B1 Preliminary · Practice Test 34",
  papers: [
    {
      id: "reading",
      name: "Reading",
      minutes: 45,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "mcq",
            instruction: "For each question, choose the correct answer.",
            items: [
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Diving is not allowed in the shallow end.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Diving is allowed everywhere.",
                  "The pool is too deep.",
                  "You can't dive in one part of the pool.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, can you remind me what time the party starts? I've lost the invitation. Jo",
                  ],
                },
                question: "What does Jo want to know?",
                options: [
                  "the address",
                  "what to bring",
                  "the start time",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep frozen.",
                    "Cook from frozen for 20 minutes.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You don't need to defrost it before cooking.",
                  "You must defrost it first.",
                  "It can be kept in the fridge.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I've booked the tennis court for Saturday at 10. Don't be late, because we only have it for an hour! Ben",
                  ],
                },
                question: "What does Ben tell Max?",
                options: [
                  "to bring a racket",
                  "to arrive on time",
                  "to book a court",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Free entry for students on the first Sunday of every month.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students don't pay on one day each month.",
                  "The museum is free every Sunday.",
                  "Students can't visit on Sundays.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to choose a magazine to read. Read the descriptions of eight magazines. Decide which magazine would be the most suitable for each person.",
            options: [
              {
                title: "Nature Today",
                text: "Articles about wildlife, the environment and amazing places around the world.",
              },
              {
                title: "Tech Teen",
                text: "News about the latest gadgets, apps and games.",
              },
              {
                title: "Cook It!",
                text: "Easy recipes for teenagers, with step-by-step photos.",
              },
              {
                title: "Sports World",
                text: "News, interviews and stats from all major sports.",
              },
              {
                title: "Fashion Forward",
                text: "The latest trends, celebrity style and shopping tips.",
              },
              {
                title: "History Now",
                text: "Stories about famous people and events from the past.",
              },
              {
                title: "Music Mix",
                text: "Interviews with bands, album reviews and concert news.",
              },
              {
                title: "Science Explorer",
                text: "Experiments, discoveries and space news.",
              },
            ],
            items: [
              {
                text: "Kerem wants to read about the newest phones.",
                answer: 1,
              },
              {
                text: "Lale loves animals and nature.",
                answer: 0,
              },
              {
                text: "Ece wants to learn how to cook simple meals.",
                answer: 2,
              },
              {
                text: "Mert wants to know about upcoming concerts.",
                answer: 6,
              },
              {
                text: "Zeynep is interested in kings and queens from long ago.",
                answer: 5,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "A winter adventure",
              paragraphs: [
                "Last winter, I went on a dog-sledding trip in Finland with my dad. It was something I'd always wanted to do, ever since I saw a documentary about it.",
                "On the first day, we met our guide and the dogs. There were six huskies for each sled, and they were so excited that they couldn't stop jumping and barking. Our guide taught us how to control the sled and look after the dogs.",
                "For the next four days, we travelled through snowy forests and across frozen lakes. It was very cold, sometimes minus thirty degrees, but we wore special clothes. Every night, we stayed in a small wooden cabin with a fire.",
                "The best moment was when we saw a herd of reindeer running across the snow. The dogs got very excited, and it was difficult to control them! It was an incredible experience, and I'd love to do it again.",
              ],
            },
            items: [
              {
                question: "Why did the writer want to go dog-sledding?",
                options: [
                  "Her dad suggested it.",
                  "She saw a programme about it.",
                  "Her friend did it.",
                  "She won a prize.",
                ],
                answer: 1,
              },
              {
                question: "How did the dogs behave when they met them?",
                options: [
                  "They were tired.",
                  "They were frightened.",
                  "They were angry.",
                  "They were very excited.",
                ],
                answer: 3,
              },
              {
                question: "What did the guide teach them?",
                options: [
                  "how to control the sled",
                  "how to cook",
                  "how to make a fire",
                  "how to catch reindeer",
                ],
                answer: 0,
              },
              {
                question: "Where did they sleep?",
                options: [
                  "in a tent",
                  "in a hotel",
                  "in a cabin",
                  "outside",
                ],
                answer: 2,
              },
              {
                question: "What happened when they saw the reindeer?",
                options: [
                  "The reindeer attacked them.",
                  "The dogs ran away.",
                  "The dogs were hard to control.",
                  "They took photos.",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A town that runs on rubbish",
            text: [
              "In Sweden, a town has found an unusual way to produce energy. {1} It burns rubbish to make electricity and heat homes.",
              "The town, called Borås, used to send most of its rubbish to landfill sites. {2} So the council decided to build a special power station.",
              "Today, the power station burns about 100,000 tonnes of rubbish every year. {3} This provides heating for about 20,000 homes.",
              "The town is so successful that it now imports rubbish from other countries. {4} Countries like Norway and the UK pay Sweden to take their waste.",
              "Environmental groups say it's better to reduce rubbish in the first place. {5} But for now, Borås has shown that rubbish can be useful.",
            ],
            sentences: [
              "The power station closed after a year.",
              "It doesn't produce enough rubbish of its own.",
              "The town has no electricity.",
              "This was bad for the environment and took up a lot of space.",
              "It's become a model for other towns around the world.",
              "They want people to recycle more and buy less.",
              "Burning rubbish is not allowed in Sweden.",
              "The heat produced is used to warm water, which is sent to homes through pipes.",
            ],
            answers: [
              4,
              3,
              7,
              1,
              5,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Kangaroos",
            text: [
              "Kangaroos are found only in Australia. They are famous for {1} using their powerful back legs, and they can jump up to nine metres in one go!",
              "Kangaroos are marsupials, which means the females carry their babies in a pouch. A baby kangaroo, called a joey, is only about two centimetres long when it is {2}. It stays in its mother's pouch for about six months.",
              "Kangaroos live in groups called mobs. They eat grass and leaves and can go for a long time without drinking water. In the hottest part of the day, they rest in the shade and come out to {3} in the evening. There are more kangaroos in Australia than people! They are a {4} symbol and appear on the country's coat of arms. However, kangaroos can be a problem for drivers, because they often jump {5} roads at night. Drivers are advised to drive carefully, {6} at dawn and dusk.",
            ],
            gaps: [
              {
                options: [
                  "walking",
                  "hopping",
                  "flying",
                  "swimming",
                ],
                answer: 1,
              },
              {
                options: [
                  "bear",
                  "bore",
                  "birth",
                  "born",
                ],
                answer: 3,
              },
              {
                options: [
                  "eat up",
                  "feed",
                  "food",
                  "feeding",
                ],
                answer: 1,
              },
              {
                options: [
                  "nation",
                  "nationally",
                  "nationality",
                  "national",
                ],
                answer: 3,
              },
              {
                options: [
                  "across",
                  "through up",
                  "over up",
                  "along up",
                ],
                answer: 0,
              },
              {
                options: [
                  "special",
                  "specially up",
                  "especially",
                  "specialist",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My new hobby",
            text: [
              "About six months ago, I started rock climbing. A friend invited me to an indoor climbing centre {1} her birthday, and I loved it.",
              "At first, I was a bit scared {2} heights. But the instructor was very patient and showed me how to use the ropes safely. By the end of the day, I'd climbed to the top of the wall!",
              "Now I go climbing twice a week. I've made lots of new friends at the centre, and I've become much {3} and fitter. Climbing is a great way to exercise because you use all the muscles in your body. It's also good for your mind, {4} you have to concentrate and solve problems. Next month, I'm going to climb outdoors {5} the first time. I'm a bit nervous, but also very excited. I'd recommend climbing to {6} who wants to try something new.",
            ],
            answers: [
              [
                "for",
                "on",
              ],
              [
                "of",
              ],
              [
                "stronger",
              ],
              [
                "because",
                "as",
                "since",
              ],
              [
                "for",
              ],
              [
                "anyone",
                "everyone",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      minutes: 45,
      parts: [
        {
          title: "Part 1 · Email",
          task: {
            kind: "writing",
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "Holiday photos",
              lines: [
                "I've just got back from holiday! I'll send you some photos. [Great!]",
                "Where did you go on holiday this year? [Tell Robin]",
                "What was the best thing about your holiday? [Describe]",
                "Where would you like to go next year? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nGreat! I can't wait to see your photos. I hope you had a fantastic time.\n\nThis year, my family went to the mountains in the east of Turkey. We stayed in a small village and went hiking every day. The scenery was beautiful, and the air was so fresh.\n\nThe best thing about the holiday was climbing a mountain that was more than 3,000 metres high. It took us all day, but the view from the top was incredible. I felt really proud.\n\nNext year, I'd like to go to Italy. I've always wanted to see Rome and eat real Italian pizza!\n\nBye,\nEge",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Why sport is important",
              lines: [
                "Do you think sport is important for young people?",
                "What sports do you do?",
                "How has sport helped you?",
                "Send us your article!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "Why everyone should do sport\n\nI think sport is very important for young people. It keeps us healthy and fit, and it's a great way to reduce stress, especially when we have exams.\n\nI play volleyball for my school team and go swimming twice a week. I've been playing volleyball for four years, and it's my favourite sport.\n\nSport has helped me in many ways. It's taught me how to work in a team and how to deal with losing. It's also helped me make lots of friends. When I feel sad or stressed, playing sport always makes me feel better. I think every school should give students more time for sport.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Sara heard a strange noise coming from the garden.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Sara heard a strange noise coming from the garden. It was late at night, and her parents were asleep. She looked out of the window but couldn't see anything.\n\nShe took a torch and went outside carefully. The noise was coming from behind the garden shed. When she shone her torch there, she saw a hedgehog stuck in some old netting.\n\nSara went back inside, woke her dad and asked him to help. Together, they carefully cut the netting and freed the little animal. The hedgehog looked at them for a moment and then walked slowly away into the bushes.\n\nSara felt very happy that she had saved it.",
          },
        },
      ],
    },
  ],
};
