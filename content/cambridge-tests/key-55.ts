import type { CambridgeTest } from "./types";

/** A2 Key practice test 55 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_55: CambridgeTest = {
  id: "key-55",
  level: "key",
  no: 55,
  title: "A2 Key · Practice Test 55",
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
                    "SCHOOL",
                    "The canteen is closed today.",
                    "Please bring a packed lunch.",
                  ],
                },
                question: "What should students do today?",
                options: [
                  "bring their own food",
                  "eat in the canteen",
                  "go home for lunch",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, I can't find my keys. Did I leave them at your house last night? Kate",
                  ],
                },
                question: "Why has Kate sent this message?",
                options: [
                  "She wants to borrow Jo's keys.",
                  "She thinks she left something at Jo's house.",
                  "She found Jo's keys.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BEACH",
                    "Lifeguard on duty.",
                    "Swim between the flags.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You should swim in a certain area.",
                  "There is no lifeguard.",
                  "Swimming is not allowed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Can you come to my house earlier on Saturday? Let's say 1 instead of 3. My mum wants to take us somewhere. Dan",
                  ],
                },
                question: "What does Dan want Max to do?",
                options: [
                  "bring his mum",
                  "go to a different place",
                  "arrive at a different time",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "POOL",
                    "Children's swimming lessons are full.",
                    "Please ask about the waiting list.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lessons are cancelled.",
                  "Children can join any time.",
                  "There are no places left right now.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SCHOOL BOOK FAIR",
                    "New and used books for all ages.",
                    "School hall, Friday after school.",
                  ],
                },
                question: "What do we know about the book fair?",
                options: [
                  "It sells both new and second-hand books.",
                  "It is only for children.",
                  "It is on Saturday.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Charlotte",
                text: "I love writing poems. I write about nature, my family and my feelings. Last year, one of my poems was published in a magazine for young writers. I also perform my poems at a café in town once a month. At first, I was very shy, but now I enjoy it.",
              },
              {
                title: "George",
                text: "My hobby is model building. I build models of famous buildings, like the Eiffel Tower and Big Ben. Some of them take months to finish. My biggest model is more than a metre tall! My grandfather and I often work on them together in his garage.",
              },
              {
                title: "Aisha",
                text: "I'm a keen footballer. I play for a girls' team, and we train twice a week. I'm the goalkeeper. Last season, we won the regional cup. Next month, our team is going to play in a tournament in Spain. We're all very excited!",
              },
            ],
            items: [
              {
                text: "has become more confident?",
                answer: 0,
              },
              {
                text: "performs for an audience?",
                answer: 0,
              },
              {
                text: "spends a long time on each project?",
                answer: 1,
              },
              {
                text: "does their hobby with a relative?",
                answer: 1,
              },
              {
                text: "plays in a particular position?",
                answer: 2,
              },
              {
                text: "will travel abroad with a team?",
                answer: 2,
              },
              {
                text: "had their work printed?",
                answer: 0,
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
              title: "The island school",
              paragraphs: [
                "Thirteen-year-old Ewan lives on a tiny island in Scotland. There are only forty people on the island, and only four children go to the island school.",
                "'It's very different from a big school,' says Ewan. 'We all have lessons together in one room. The teacher knows exactly what each of us is good at.'",
                "There are no shops or cafés on the island. 'We get food by boat once a week,' explains Ewan. 'If the weather is bad, the boat can't come, so we have to plan carefully.'",
                "Ewan loves living on the island. 'I can go fishing and explore the beaches,' he says. 'I see seals and dolphins all the time.' But next year, he will have to go to secondary school on the mainland. 'I'll stay there during the week and come home at weekends,' he says.",
              ],
            },
            items: [
              {
                question: "How many children go to the island school?",
                options: [
                  "forty",
                  "fourteen",
                  "four",
                ],
                answer: 2,
              },
              {
                question: "What does Ewan say about his teacher?",
                options: [
                  "She understands each student well.",
                  "She is very strict.",
                  "She teaches only one subject.",
                ],
                answer: 0,
              },
              {
                question: "How does food arrive on the island?",
                options: [
                  "by plane",
                  "by boat",
                  "from the island shop",
                ],
                answer: 1,
              },
              {
                question: "What does Ewan like about the island?",
                options: [
                  "He can see wild animals.",
                  "There are many shops.",
                  "It is very busy.",
                ],
                answer: 0,
              },
              {
                question: "What will happen next year?",
                options: [
                  "Ewan will leave school.",
                  "Ewan's family will move.",
                  "Ewan will stay on the mainland during the week.",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Trees",
            text: [
              "Trees are very important for life on Earth. They give us oxygen, which we need to {1}. They also take in carbon dioxide, which is one of the gases that {2} climate change.",
              "Trees are home to many animals, birds and insects. They also give us wood, fruit, nuts and medicine. In cities, trees help to keep the air clean and {3} streets cooler in summer.",
              "The oldest tree in the world is in California, in the USA. It is more than 4,800 years old! The tallest tree is also in California. It is about 116 metres tall. Every year, people cut down millions of trees. This is a big problem {4} the environment. That's why many people are planting new trees. In some countries, children plant a tree when they {5} school. You can help too. Why not plant a tree in your garden? It will {6} for many years.",
            ],
            gaps: [
              {
                options: [
                  "live",
                  "eat",
                  "breathe",
                ],
                answer: 2,
              },
              {
                options: [
                  "make",
                  "give",
                  "cause",
                ],
                answer: 2,
              },
              {
                options: [
                  "make",
                  "do",
                  "let",
                ],
                answer: 0,
              },
              {
                options: [
                  "of",
                  "for",
                  "with",
                ],
                answer: 1,
              },
              {
                options: [
                  "start",
                  "open",
                  "enter in",
                ],
                answer: 0,
              },
              {
                options: [
                  "rise",
                  "build",
                  "grow",
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
              "Hi Zoe,",
              "I'm writing to invite you {1} my sister's wedding next month. She asked me to invite my best friend, and that's you!",
              "The wedding is on Saturday 15th July. It's {2} a beautiful old hotel in the countryside. There will be a big party in the evening {3} lots of dancing.",
              "You'll need to wear something smart. I'm going to wear a long blue dress. We can go shopping together {4} you need something new. My parents can drive you there and back, so you don't need to worry {5} transport. Please say yes! Write back {6} let me know.",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "to",
              ],
              [
                "at",
                "in",
              ],
              [
                "with",
              ],
              [
                "if",
              ],
              [
                "about",
              ],
              [
                "and",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You went to a new restaurant with your family. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say where the restaurant is.",
              "Say what you ate.",
              "Say if you would go again.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nLast night, my family and I went to a new Italian restaurant in the town centre. I ate a delicious pizza with mushrooms and cheese. I would definitely go again because the food was great.\n\nBye,\nDoruk",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧📚🏫",
                label: "1",
              },
              {
                e: "👧📖🌙",
                label: "2",
              },
              {
                e: "👧🏆📚😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Sara wanted to win the school's reading competition. The student who read the most books in a month would win. Every evening, Sara read for two hours before bed. At the end of the month, she had read twenty books! The head teacher announced that she was the winner. Sara got a prize of new books and felt very proud.",
          },
        },
      ],
    },
  ],
};
