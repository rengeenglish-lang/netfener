import type { CambridgeTest } from "./types";

/** A2 Key practice test 26 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_26: CambridgeTest = {
  id: "key-26",
  level: "key",
  no: 26,
  title: "A2 Key · Practice Test 26",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
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
                    "ICE RINK",
                    "Skates can be hired at the entrance.",
                    "Gloves must be worn at all times.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must bring your own skates.",
                  "Gloves can be hired at the entrance.",
                  "Everyone on the ice needs gloves.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Nick, the film was sold out, so I've booked tickets for tomorrow at 8 instead. Is that OK? Pete",
                  ],
                },
                question: "Why has Pete sent this message?",
                options: [
                  "to check a new plan",
                  "to cancel a trip completely",
                  "to ask Nick to buy tickets",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE WAIT HERE",
                    "A member of staff will take you to your table.",
                  ],
                },
                question: "Where would you see this sign?",
                options: [
                  "in a school",
                  "in a restaurant",
                  "in a hospital",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Megan,",
                    "Remember to bring your passport tomorrow – we need it to check in at the airport! See you at 6 a.m. Mum",
                  ],
                },
                question: "What does Mum remind Megan to do?",
                options: [
                  "take an important document",
                  "get up at 6 a.m.",
                  "buy a plane ticket",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Year 10 trip to the theatre: payment of £15 is due by Monday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The trip is free.",
                  "The trip is on Monday.",
                  "Students must pay for the trip soon.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BIKE REPAIRS",
                    "Fast, friendly service. Most repairs done the same day.",
                    "Open Mon–Sat.",
                  ],
                },
                question: "What do we know about the repair shop?",
                options: [
                  "It is open on Sundays.",
                  "It sells new bikes.",
                  "It can often fix bikes quickly.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Jasmine",
                text: "I've been playing the flute for five years. I play in the town orchestra and in a small group with two friends. We play at weddings and earn a little money. In the summer, I'm going to a music camp in Germany for two weeks. I can't wait!",
              },
              {
                title: "Owen",
                text: "My hobby is rock climbing. I started at an indoor wall, but now I climb outside too. My older brother takes me to the mountains at weekends. It's an exciting sport, but you have to be very careful. I always check my equipment twice before I climb.",
              },
              {
                title: "Priya",
                text: "I'm crazy about animals, so I volunteer at a horse rescue centre. Many of the horses were not looked after well before they came. I help to feed and brush them. My favourite horse is called Shadow. He was very shy at first, but now he follows me everywhere.",
              },
            ],
            items: [
              {
                text: "gets paid for their hobby?",
                answer: 0,
              },
              {
                text: "will go abroad soon?",
                answer: 0,
              },
              {
                text: "does their hobby with a brother or sister?",
                answer: 1,
              },
              {
                text: "is very careful about safety?",
                answer: 1,
              },
              {
                text: "helps animals that had a bad life?",
                answer: 2,
              },
              {
                text: "has an animal that trusts them now?",
                answer: 2,
              },
              {
                text: "does their hobby both indoors and outdoors?",
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "A summer job",
              paragraphs: [
                "Last summer, sixteen-year-old Ben Clarke worked at an ice cream shop by the sea. 'I wanted to earn some money for a new laptop,' he says. 'And I love ice cream!'",
                "Ben worked six hours a day, five days a week. 'The shop was really busy, especially when it was hot,' he says. 'Sometimes there were thirty people waiting!'",
                "The job wasn't always easy. 'Some customers were rude when they had to wait,' says Ben. 'But most people were really friendly. I learned to stay calm and smile.'",
                "At the end of the summer, Ben had enough money for his laptop. 'I also learned a lot about working with people,' he says. 'My boss has asked me to come back next year. I think I will!'",
              ],
            },
            items: [
              {
                question: "Why did Ben get the job?",
                options: [
                  "because his parents told him to",
                  "to save money for something",
                  "to learn about ice cream",
                ],
                answer: 1,
              },
              {
                question: "When was the shop busiest?",
                options: [
                  "in the morning",
                  "at weekends",
                  "in hot weather",
                ],
                answer: 2,
              },
              {
                question: "What did Ben learn from difficult customers?",
                options: [
                  "to keep calm",
                  "to work faster",
                  "to make better ice cream",
                ],
                answer: 0,
              },
              {
                question: "What happened at the end of the summer?",
                options: [
                  "Ben lost his job.",
                  "Ben could buy his laptop.",
                  "Ben bought an ice cream shop.",
                ],
                answer: 1,
              },
              {
                question: "What will Ben probably do next year?",
                options: [
                  "work at the shop again",
                  "look for a different job",
                  "study business",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "The Moon",
            text: [
              "The Moon is the Earth's only natural satellite. It {1} around the Earth about once every twenty-seven days. It is about 384,000 kilometres away from us.",
              "The Moon doesn't make its own light. We can see it because the Sun's light {2} off it. As it moves, we see different parts of it. That's why it seems to {3} shape.",
              "Twelve people have walked on the Moon. The first was Neil Armstrong in 1969. Because there is no wind on the Moon, the astronauts' footprints are still {4} today. Scientists are now planning to send people back to the Moon. One day, they might even {5} a base there, where people could live and work. Would you like to {6} a holiday on the Moon?",
            ],
            gaps: [
              {
                options: [
                  "travels",
                  "walks",
                  "rides",
                ],
                answer: 0,
              },
              {
                options: [
                  "shines",
                  "lights",
                  "reflects",
                ],
                answer: 2,
              },
              {
                options: [
                  "move",
                  "turn",
                  "change",
                ],
                answer: 2,
              },
              {
                options: [
                  "there",
                  "here",
                  "then",
                ],
                answer: 0,
              },
              {
                options: [
                  "make",
                  "build",
                  "do",
                ],
                answer: 1,
              },
              {
                options: [
                  "spend",
                  "stay",
                  "pass",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Hi Sophie,",
              "Thank you for the lovely card you sent me {1} my birthday. It was really kind of you.",
              "I had a great day. My parents gave me a new bike, and my brother gave me a book. In the evening, we went {2} an Indian restaurant. The food was delicious, but very spicy!",
              "Are you coming to the beach with us {3} the holidays? My mum says you {4} stay at our house for a few days. That would be so much fun! Ask your parents and let me know. I hope you {5} come. Write {6} soon!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "for",
                "on",
              ],
              [
                "to",
              ],
              [
                "in",
                "during",
              ],
              [
                "can",
                "could",
              ],
              [
                "can",
              ],
              [
                "back",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to have a sleepover at your house. Write an email to your English friend, Ali. Write 25 words or more.",
            prompts: [
              "Invite Ali to the sleepover.",
              "Say what you will do.",
              "Say what Ali should bring.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Ali' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Ali,\n\nWould you like to come to a sleepover at my house on Friday? We will watch films, play video games and eat lots of pizza. Please bring a sleeping bag and your pyjamas.\n\nSee you,\nEmir",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🚲🏫",
                label: "1",
              },
              {
                e: "🚲🔒❌😟",
                label: "2",
              },
              {
                e: "👦👮🚲😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Sam rode his bike to school and left it outside. When he came out after school, his bike wasn't there. He was very upset and went to the police station. Two days later, a police officer called him. They had found his bike in the park. Sam was very happy and decided to buy a better lock.",
          },
        },
      ],
    },
  ],
};
