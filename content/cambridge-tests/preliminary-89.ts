import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 89 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_89: CambridgeTest = {
  id: "preliminary-89",
  level: "preliminary",
  no: 89,
  title: "B1 Preliminary · Practice Test 89",
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
                    "SCHOOL",
                    "The sports hall will be closed on Wednesday for a school event.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't use the sports hall on Wednesday.",
                  "There's no school on Wednesday.",
                  "The sports hall is new.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, the restaurant is full. Shall we go to the one next door? Ben",
                  ],
                },
                question: "What does Ben suggest?",
                options: [
                  "going home",
                  "waiting",
                  "going to a different restaurant",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains eggs.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This food has no eggs.",
                  "This is egg-free.",
                  "This food has eggs in it.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I've finished the book you lent me. It was great! I'll give it back tomorrow. Emma",
                  ],
                },
                question: "What will Emma do?",
                options: [
                  "return a book",
                  "buy a book",
                  "borrow another book",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "The café is on the second floor.",
                  ],
                },
                question: "Where is the café?",
                options: [
                  "on the ground floor",
                  "on the second floor",
                  "outside",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "The young people below all want to take a class. Read the descriptions of eight classes. Decide which class would be the most suitable for each person.",
            options: [
              {
                title: "Pottery",
                text: "Make cups and bowls.",
              },
              {
                title: "Guitar",
                text: "Learn to play the guitar.",
              },
              {
                title: "Karate",
                text: "Learn self-defence.",
              },
              {
                title: "Cooking",
                text: "Learn to cook Japanese food.",
              },
              {
                title: "Photography",
                text: "Take better photos.",
              },
              {
                title: "Yoga",
                text: "Relax and stretch.",
              },
              {
                title: "French",
                text: "Learn French for beginners.",
              },
              {
                title: "Drawing",
                text: "Learn to draw people.",
              },
            ],
            items: [
              {
                text: "Kaan wants to learn to cook sushi.",
                answer: 3,
              },
              {
                text: "Defne wants to relax.",
                answer: 5,
              },
              {
                text: "Mert wants to learn French before his trip to Paris.",
                answer: 6,
              },
              {
                text: "Selin wants to make cups.",
                answer: 0,
              },
              {
                text: "Burak wants to learn to draw faces.",
                answer: 7,
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
              title: "My first part-time job",
              paragraphs: [
                "When I was sixteen, I started working at a bookshop on Saturdays. I'd always loved books, so it was the perfect job for me.",
                "At first, I was very nervous. I didn't know where all the books were, and I was worried about making mistakes. But the manager was very kind and helped me.",
                "My favourite part of the job was recommending books to customers. Many of them asked me for advice, and I loved talking to them about my favourite books.",
                "After a year, I knew the shop very well. I'd also read lots of new books, because I got a discount! The job taught me a lot about working with people. I'm going to study literature at university, and I hope to work in publishing one day.",
              ],
            },
            items: [
              {
                question: "Why was the job perfect for the writer?",
                options: [
                  "It was near her house.",
                  "It was well paid.",
                  "Her friend worked there.",
                  "She loved books.",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel at first?",
                options: [
                  "excited",
                  "nervous",
                  "bored",
                  "confident",
                ],
                answer: 1,
              },
              {
                question: "What was the writer's favourite part of the job?",
                options: [
                  "stacking shelves",
                  "using the till",
                  "cleaning",
                  "recommending books",
                ],
                answer: 3,
              },
              {
                question: "Why did the writer read lots of books?",
                options: [
                  "She got a discount.",
                  "She had to.",
                  "They were free.",
                  "Her manager told her.",
                ],
                answer: 0,
              },
              {
                question: "What does the writer hope to do?",
                options: [
                  "open a bookshop",
                  "become a teacher",
                  "work in publishing",
                  "write books",
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
            title: "A hotel made of salt",
            text: [
              "In Bolivia, there's a hotel made almost entirely of salt. {1} The walls, floors and furniture are all made from salt blocks.",
              "The hotel is next to the Salar de Uyuni, the largest salt flat in the world. {2} It looks like a huge white desert.",
              "The salt blocks are cut from the salt flat. {3} When it rains, workers repair the walls with new salt.",
              "Guests are asked not to lick the walls! {4} The hotel has a restaurant, a spa and thirty rooms.",
              "During the rainy season, the salt flat becomes a giant mirror. {5} It's one of the most beautiful sights in the world.",
            ],
            sentences: [
              "The salt is very strong and lasts a long time.",
              "The salt flat is very small.",
              "It's one of the most unusual hotels in the world.",
              "It reflects the sky perfectly.",
              "Nobody stays at the hotel.",
              "It covers more than 10,000 square kilometres.",
              "The hotel is made of wood.",
              "Many people are tempted to do it.",
            ],
            answers: [
              2,
              5,
              0,
              7,
              3,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Honey bees",
            text: [
              "Honey bees are very important insects. They live in large groups called {1}, with one queen and thousands of workers.",
              "The queen bee lays all the eggs. She can lay up to 2,000 eggs a day! The worker bees are all female. They collect {2} and pollen from flowers.",
              "Worker bees also make honey. They {3} the nectar into honey inside the hive. To make one jar of honey, bees need to visit about two million flowers! Bees communicate with each other by dancing. When a bee finds good flowers, it does a special dance to tell the others where they are. Sadly, bee numbers are {4}. This is because of pesticides, disease and the loss of wild flowers. Without bees, many plants couldn't {5}. We can help by planting flowers and not using {6} chemicals in our gardens.",
            ],
            gaps: [
              {
                options: [
                  "colonised",
                  "colonial",
                  "colonies",
                  "colonise",
                ],
                answer: 2,
              },
              {
                options: [
                  "nectarine",
                  "nectar",
                  "nectarous",
                  "nectared",
                ],
                answer: 1,
              },
              {
                options: [
                  "turning",
                  "turned",
                  "turner",
                  "turn",
                ],
                answer: 3,
              },
              {
                options: [
                  "fall",
                  "falling",
                  "fell",
                  "fallen",
                ],
                answer: 1,
              },
              {
                options: [
                  "reproduction",
                  "reproductive",
                  "reproduced",
                  "reproduce",
                ],
                answer: 3,
              },
              {
                options: [
                  "harmful",
                  "harm",
                  "harmless",
                  "harmfully",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My grandmother's kitchen",
            text: [
              "My grandmother's kitchen is my favourite place in the world. It always smells {1} fresh bread and coffee.",
              "When I was little, I spent hours in her kitchen, watching her cook. She taught me how to make bread, cakes and traditional dishes from our country. Her recipes have been in our family {2} generations.",
              "Every Sunday, the whole family comes to her house for lunch. She cooks a huge meal, and we all sit around the big wooden table. There's always lots of laughing and talking. My favourite dish is her stuffed vine leaves. They take hours to make, {3} they're delicious! Now that I'm older, I help her cook. She's teaching me all her secret recipes. She says that one day I'll {4} the family cook. I hope I'll be {5} good a cook as her. Her kitchen will always be special {6} me.",
            ],
            answers: [
              [
                "of",
              ],
              [
                "for",
              ],
              [
                "but",
              ],
              [
                "be",
                "become",
              ],
              [
                "as",
              ],
              [
                "to",
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
              subject: "A trip abroad",
              lines: [
                "My school is organising a trip abroad. Where should we go? [Suggest a place]",
                "What should we do there? [Give ideas]",
                "Have you ever been abroad? [Tell Robin]",
                "What should I take? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThat sounds amazing! I think you should go to Rome. It's a beautiful city with lots of history, and the food is delicious.\n\nIn Rome, you could visit the Colosseum, the Vatican and the Trevi Fountain. You should also eat real Italian pizza and ice cream. If you have time, you could take a day trip to Florence or Pompeii.\n\nYes, I've been abroad a few times. Last year, I went to Spain with my family. We visited Barcelona and stayed by the beach.\n\nYou should take comfortable shoes, because you'll walk a lot. Don't forget your passport and some money for souvenirs!\n\nBye,\nEfe",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A hobby I'd like to try",
              lines: [
                "What hobby would you like to try?",
                "Why does it interest you?",
                "How would you start?",
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
            sample: "Trying photography\n\nA hobby I'd love to try is photography. I've always admired beautiful photos in magazines and online, and I'd love to be able to take photos like that.\n\nPhotography interests me because it's creative and it helps you see the world differently. When you're taking photos, you notice details that you might usually miss, like the light on a building or the expression on someone's face.\n\nTo start, I'd use my phone camera and watch online tutorials. Then, if I enjoyed it, I'd save money to buy a proper camera. I'd also like to join a photography club to learn from other people and share my photos.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The train stopped suddenly in the middle of a tunnel.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The train stopped suddenly in the middle of a tunnel. The lights went out, and everything was dark. Some passengers started to panic.\n\nLeo sat quietly next to an old woman. She was very frightened. Leo took out his phone and turned on the torch. 'Don't worry,' he said kindly. 'I'm sure we'll be moving again soon.'\n\nThe old woman told Leo about her grandchildren, and he told her about his school. They talked and laughed, and she forgot to be afraid.\n\nAfter half an hour, the lights came back on, and the train started moving again. When they arrived at the station, the old woman thanked Leo and gave him a hug.",
          },
        },
      ],
    },
  ],
};
