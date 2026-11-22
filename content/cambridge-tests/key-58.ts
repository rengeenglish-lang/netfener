import type { CambridgeTest } from "./types";

/** A2 Key practice test 58 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_58: CambridgeTest = {
  id: "key-58",
  level: "key",
  no: 58,
  title: "A2 Key · Practice Test 58",
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
                    "CINEMA",
                    "Popcorn and a drink: £5 with every ticket bought online.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Popcorn is free.",
                  "Tickets are only sold online.",
                  "There's a special price if you buy online.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, I'm sorry I missed your call. I was in the shower. What did you want? Kim",
                  ],
                },
                question: "Why has Kim sent this message?",
                options: [
                  "to invite Grace somewhere",
                  "to ask Grace for help",
                  "to explain why she didn't answer",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "TOILETS",
                    "For customers only.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Only people who buy something can use the toilets.",
                  "The toilets are closed.",
                  "Toilets are free for everyone.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Remember to bring your swimming costume tomorrow. We're going to the pool after school! Mia",
                  ],
                },
                question: "What should Ella bring?",
                options: [
                  "a towel",
                  "something to swim in",
                  "money for the pool",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOTEL",
                    "Breakfast is served on the terrace when the weather is good.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Breakfast is outside on nice days.",
                  "Breakfast is never outside.",
                  "The terrace is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PET SHOP",
                    "Everything for your pet!",
                    "10% off for first-time customers.",
                  ],
                },
                question: "Who can get a discount?",
                options: [
                  "people with dogs",
                  "children",
                  "new customers",
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
                title: "Jake",
                text: "I'm a big fan of fishing. I go fishing with my grandfather every Saturday morning. We sit by the lake for hours. Sometimes we don't catch anything, but I don't mind. I enjoy talking to my grandfather. He tells me stories about when he was young.",
              },
              {
                title: "Emma",
                text: "I play the violin in a youth orchestra. We practise every Sunday afternoon. Twice a year, we perform in the city's concert hall. Last summer, we went on tour to Italy and played in five different cities. It was the best experience of my life.",
              },
              {
                title: "Sami",
                text: "I love doing parkour. It's a sport where you run, jump and climb over things in the city. It's exciting but can be dangerous. I always practise with a trainer at a special gym. I've been doing it for two years. I'm getting better and stronger every month.",
              },
            ],
            items: [
              {
                text: "doesn't mind if they're not successful?",
                answer: 0,
              },
              {
                text: "enjoys hearing about the past?",
                answer: 0,
              },
              {
                text: "has performed in another country?",
                answer: 1,
              },
              {
                text: "plays in a big building?",
                answer: 1,
              },
              {
                text: "does a sport that can be risky?",
                answer: 2,
              },
              {
                text: "has improved their fitness?",
                answer: 2,
              },
              {
                text: "does their hobby on Sundays?",
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
              title: "A family business",
              paragraphs: [
                "The Lopez family have owned a bakery in the same street in Madrid for more than a hundred years. Now, sixteen-year-old Pablo helps his father run it.",
                "'My great-great-grandfather started the bakery in 1920,' explains Pablo. 'We still use some of his recipes today.'",
                "Pablo works in the bakery on Saturdays and during the holidays. 'I get up at four in the morning to make the bread,' he says. 'It's very early, but I love the smell of fresh bread.'",
                "Pablo hopes to take over the bakery one day. 'I want to keep the old recipes,' he says. 'But I also want to try new things, like cakes from other countries. I think customers would love them.'",
              ],
            },
            items: [
              {
                question: "How long has the family owned the bakery?",
                options: [
                  "more than a century",
                  "fifty years",
                  "since 2020",
                ],
                answer: 0,
              },
              {
                question: "What do they still use today?",
                options: [
                  "the same oven",
                  "the same shop sign",
                  "some old recipes",
                ],
                answer: 2,
              },
              {
                question: "When does Pablo work in the bakery?",
                options: [
                  "every day",
                  "only in summer",
                  "at weekends and in the holidays",
                ],
                answer: 2,
              },
              {
                question: "What does Pablo love about his job?",
                options: [
                  "the smell of bread",
                  "getting up early",
                  "talking to customers",
                ],
                answer: 0,
              },
              {
                question: "What does Pablo want to do in the future?",
                options: [
                  "close the bakery",
                  "add new things to the bakery",
                  "open a restaurant",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Butterflies",
            text: [
              "There are about 17,500 different kinds of butterfly in the world. They live on every continent {1} Antarctica.",
              "A butterfly's life has four stages. First, it is an egg. Then, it {2} into a caterpillar, which eats a lot of leaves. Next, the caterpillar makes a hard case around itself. Finally, it comes out as a butterfly.",
              "Butterflies have beautiful, colourful wings. The colours help them find partners and also {3} birds that they might be poisonous. Butterflies drink nectar from flowers. They {4} it through a long tube, like a straw. Some butterflies travel very long distances. Monarch butterflies fly thousands of kilometres from Canada to Mexico every winter. Sadly, many butterflies are {5} because people are destroying the places where they live. You can help by growing flowers in your garden that butterflies {6}.",
            ],
            gaps: [
              {
                options: [
                  "without",
                  "except",
                  "only",
                ],
                answer: 1,
              },
              {
                options: [
                  "changes",
                  "moves",
                  "goes",
                ],
                answer: 0,
              },
              {
                options: [
                  "tell",
                  "say",
                  "warn",
                ],
                answer: 2,
              },
              {
                options: [
                  "eat",
                  "drink",
                  "bite",
                ],
                answer: 1,
              },
              {
                options: [
                  "losing",
                  "disappearing",
                  "leaving",
                ],
                answer: 1,
              },
              {
                options: [
                  "love to",
                  "want to",
                  "like",
                ],
                answer: 2,
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
              "Hi Hannah,",
              "Guess what? I passed my piano exam! I got {1} highest mark in my group. I was so happy when I heard.",
              "I was really nervous before the exam. My hands {2} shaking. But when I started playing, I felt better.",
              "My teacher says I can start learning more difficult music now. I'm going to practise {3} day. My parents are taking me out {4} dinner on Friday to celebrate. Would you like to come {5} us? We're going to the Chinese restaurant in town. Let me know {6} you're free.",
              "Love,",
              "Chloe",
            ],
            answers: [
              [
                "the",
              ],
              [
                "were",
              ],
              [
                "every",
                "each",
              ],
              [
                "for",
                "to",
              ],
              [
                "with",
              ],
              [
                "if",
                "whether",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going camping. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say where you are going.",
              "Say who you are going with.",
              "Say what you will need to take.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nNext weekend, I'm going camping in the mountains. I'm going with my uncle and my cousins. I need to take a sleeping bag, warm clothes and a torch.\n\nBye,\nCan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🚗🛒",
                label: "1",
              },
              {
                e: "🚗🔑🚪❌",
                label: "2",
              },
              {
                e: "👩👨🔑😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last Saturday, Mrs Taylor drove to the supermarket. When she came back to her car with her shopping, she realised she had locked her keys inside! She didn't know what to do. She called her husband, and he came with the spare keys. Mrs Taylor was very relieved and promised to be more careful in future.",
          },
        },
      ],
    },
  ],
};
