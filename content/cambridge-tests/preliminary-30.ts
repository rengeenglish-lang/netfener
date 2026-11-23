import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 30 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_30: CambridgeTest = {
  id: "preliminary-30",
  level: "preliminary",
  no: 30,
  title: "B1 Preliminary · Practice Test 30",
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
                    "The pool will be closed for cleaning every Monday from 8 to 10 a.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't swim on Monday mornings for two hours.",
                  "The pool is closed every day.",
                  "The pool opens at 10 on Sundays.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Dan, I've left my wallet in your car. Can you keep it safe until I see you tomorrow? Ben",
                  ],
                },
                question: "What does Ben want Dan to do?",
                options: [
                  "bring something tonight",
                  "buy a new wallet",
                  "look after something",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Shake before use.",
                    "Keep in a cool place.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You should keep this somewhere warm.",
                  "You should mix this before using it.",
                  "You don't need to shake it.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "The school play has been so popular that we've added an extra show on Sunday afternoon. Tickets are on sale now. Mrs Clark",
                  ],
                },
                question: "What does Mrs Clark say?",
                options: [
                  "The play is cancelled.",
                  "There will be another performance.",
                  "Tickets are sold out.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Please keep dogs on a lead near the children's playground.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Dogs aren't allowed in the park.",
                  "Children can't play with dogs.",
                  "Dogs must be controlled in one area.",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to spend a weekend away. Read the descriptions of eight weekend breaks. Decide which break would be the most suitable for each person.",
            options: [
              {
                title: "Beach Camp",
                text: "Camping on the beach with surfing lessons and barbecues.",
              },
              {
                title: "City Shopping",
                text: "Stay in a hotel in the city centre near the best shops and markets.",
              },
              {
                title: "Farm Stay",
                text: "Stay on a farm and help feed the animals. Fresh food every day.",
              },
              {
                title: "Mountain Hut",
                text: "Hike in the mountains and stay in a simple hut. No electricity.",
              },
              {
                title: "Spa Retreat",
                text: "Relax in a luxury hotel with a spa, pool and massages.",
              },
              {
                title: "Film Festival",
                text: "Watch new films and meet directors in a historic city.",
              },
              {
                title: "Island Adventure",
                text: "Kayak around a small island and explore caves.",
              },
              {
                title: "Theme Park Hotel",
                text: "Stay next to a theme park with free entry for two days.",
              },
            ],
            items: [
              {
                text: "Ece loves animals and wants to try country life.",
                answer: 2,
              },
              {
                text: "Kaan wants to get away from technology completely.",
                answer: 3,
              },
              {
                text: "Lale's mum needs a relaxing weekend after working hard.",
                answer: 4,
              },
              {
                text: "Emre loves rollercoasters.",
                answer: 7,
              },
              {
                text: "Nil is a big film fan and wants to meet people who make films.",
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
              title: "My year as a vegetarian",
              paragraphs: [
                "Last January, I decided to stop eating meat for a year. I'd watched a documentary about how much meat production harms the environment, and I wanted to do something.",
                "My family wasn't very supportive at first. My dad loves meat and thought I was being silly. My mum was worried that I wouldn't get enough protein. I had to learn to cook my own meals.",
                "It was difficult at the beginning, especially at parties and restaurants. But I discovered lots of delicious vegetarian dishes from around the world, like Indian dhal and Mexican bean burritos. I also felt healthier and had more energy.",
                "By the end of the year, my whole family had changed their habits. We now eat meat only twice a week. My dad even admits that some of my vegetarian dishes are better than his meat ones! I've decided to stay vegetarian.",
              ],
            },
            items: [
              {
                question: "Why did the writer stop eating meat?",
                options: [
                  "because she didn't like it",
                  "because her doctor said so",
                  "to help the environment",
                  "to lose weight",
                ],
                answer: 2,
              },
              {
                question: "How did the writer's family react at first?",
                options: [
                  "They weren't very happy.",
                  "They were very supportive.",
                  "They also stopped eating meat.",
                  "They didn't notice.",
                ],
                answer: 0,
              },
              {
                question: "What was difficult at the beginning?",
                options: [
                  "cooking",
                  "buying vegetables",
                  "feeling hungry",
                  "eating out",
                ],
                answer: 3,
              },
              {
                question: "How has the writer's family changed?",
                options: [
                  "They have stopped eating meat.",
                  "They eat less meat.",
                  "They eat more meat.",
                  "They haven't changed.",
                ],
                answer: 1,
              },
              {
                question: "What has the writer decided?",
                options: [
                  "to continue being vegetarian",
                  "to start eating meat again",
                  "to become a chef",
                  "to write a cookbook",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The school with no homework",
            text: [
              "At a secondary school in Finland, students don't get any homework. {1} Instead, they do all their learning during the school day.",
              "The head teacher believes that students need time to relax and enjoy their hobbies after school. {2} She says that tired students don't learn well.",
              "The school day is also shorter than in many other countries. {3} Students have plenty of breaks, and many lessons take place outside.",
              "Some parents were worried at first. {4} But the students' exam results have actually improved since the policy started.",
              "Finland's education system is famous around the world. {5} Teachers from many countries visit Finnish schools to learn their methods.",
            ],
            sentences: [
              "The school gives extra homework at weekends.",
              "They thought their children wouldn't learn enough.",
              "Students have to stay at school until six.",
              "She also thinks family time is very important.",
              "This might sound strange, but it seems to work.",
              "Finnish students often get some of the best results in international tests.",
              "Most students don't like the school.",
              "Lessons usually finish by two o'clock in the afternoon.",
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
            title: "Giraffes",
            text: [
              "Giraffes are the tallest animals in the world. An adult male can {1} up to six metres tall, which is taller than a double-decker bus.",
              "Giraffes live in the grasslands of Africa. Their long necks allow them to reach leaves at the top of trees that other animals can't {2}. Their favourite food is the acacia tree.",
              "Surprisingly, a giraffe's neck has only seven bones, the same {3} as a human neck. But each bone can be more than twenty-five centimetres long. Giraffes don't need much sleep. They usually sleep for less than two hours a day, often standing up. Each giraffe has a unique pattern of spots, like a human fingerprint. No two giraffes look exactly the {4}. Sadly, giraffe numbers have fallen by about 40% in the last thirty years. This is mainly because of habitat {5} and hunting. Conservation groups are now working hard to {6} these beautiful animals.",
            ],
            gaps: [
              {
                options: [
                  "grow",
                  "rise up",
                  "build",
                  "make",
                ],
                answer: 0,
              },
              {
                options: [
                  "arrive",
                  "get up",
                  "reach",
                  "come",
                ],
                answer: 2,
              },
              {
                options: [
                  "amount",
                  "total up",
                  "number",
                  "count",
                ],
                answer: 2,
              },
              {
                options: [
                  "same",
                  "similar",
                  "alike",
                  "equal",
                ],
                answer: 0,
              },
              {
                options: [
                  "lose",
                  "lost",
                  "losing",
                  "loss",
                ],
                answer: 3,
              },
              {
                options: [
                  "guard up",
                  "protect",
                  "keep up",
                  "save up",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My weekend job",
            text: [
              "For the last six months, I've been working at a garden centre {1} Saturdays. I help customers find plants and carry heavy bags to their cars.",
              "I really enjoy it, {2} I love plants and being outside. My boss, Mr Taylor, knows everything about gardening, and he's taught me a lot.",
              "At first, I didn't know the names of many plants, so customers asked me questions I couldn't answer. But now I can give them advice about which plants are best {3} their gardens. The job isn't always easy. On busy days, I'm on my feet for eight hours, and I'm very tired by the evening. But I earn some money, {4} I'm saving for a new laptop. I've also learned how to talk to customers and work in a team. I think it will help me find a better job {5} the future. I'd recommend weekend jobs to {6} teenager.",
            ],
            answers: [
              [
                "on",
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
                "which",
                "and",
              ],
              [
                "in",
              ],
              [
                "any",
                "every",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "Your favourite season",
              lines: [
                "What's your favourite season? [Tell Chris]",
                "What do you usually do at that time of year? [Describe]",
                "What's the weather like in your country in winter? [Explain]",
                "Would you like to visit me in summer? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nMy favourite season is autumn. I love the beautiful colours of the leaves and the cool, fresh air. It's not too hot and not too cold.\n\nIn autumn, I usually go for long walks in the forest with my family. We collect chestnuts and roast them at home. I also enjoy staying inside on rainy days, reading books and drinking hot chocolate.\n\nIn winter, it's usually quite cold in my country, especially in the east, where there's lots of snow. Where I live, it rains a lot, but it doesn't often snow.\n\nI'd love to visit you in summer! Just tell me when is a good time.\n\nBye,\nMira",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A tradition in my country",
              lines: [
                "Tell us about a tradition in your country.",
                "When and how is it celebrated?",
                "What does it mean to you?",
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
            sample: "Sweets and visits\n\nOne of my favourite traditions in my country is the Sugar Festival, which happens at the end of Ramadan. It lasts for three days, and it's a time for families to come together.\n\nOn the first morning, people put on new clothes and visit their older relatives. Children kiss the hands of their grandparents, and in return, they receive sweets or a little money. Families share big meals, and there are always lots of delicious desserts, like baklava.\n\nFor me, this tradition is special because it reminds me how important my family is. It's a time when everyone forgets their problems and enjoys being together.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When the alarm rang, Sara realised she had overslept.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When the alarm rang, Sara realised she had overslept. It was her first day at her new job, and she had to be there in thirty minutes!\n\nShe jumped out of bed, got dressed in a hurry and ran to the bus stop. But the bus had just left. Sara didn't know what to do. Then she saw a neighbour getting into his car.\n\n'Can you help me?' she asked. Luckily, he was going in the same direction and offered her a lift. Sara arrived at the office with two minutes to spare.\n\nHer new boss smiled and said, 'Welcome! You're right on time.' Sara laughed with relief.",
          },
        },
      ],
    },
  ],
};
