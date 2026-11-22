import type { CambridgeTest } from "./types";

/** A2 Key practice test 74 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_74: CambridgeTest = {
  id: "key-74",
  level: "key",
  no: 74,
  title: "A2 Key · Practice Test 74",
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
                    "Lost property will be given to charity at the end of term.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lost property is kept forever.",
                  "You can buy lost property.",
                  "Students should collect lost things before the end of term.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Dan, I can't find my phone charger. Did I leave it at your house? Josh",
                  ],
                },
                question: "What does Josh want to know?",
                options: [
                  "if he left something at Dan's house",
                  "if Dan has a new charger",
                  "where the shop is",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "DANGER",
                    "Falling rocks. Keep away from the cliff.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can climb the cliff.",
                  "It is dangerous near the cliff.",
                  "The cliff is closed for repairs.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lily,",
                    "Can you help me with my English homework? I don't understand the grammar. Rosie",
                  ],
                },
                question: "Why has Rosie written this email?",
                options: [
                  "She needs help with her homework.",
                  "She wants to give Lily homework.",
                  "She's finished her homework.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Children's activity trail available at reception.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The museum is only for children.",
                  "Children can't come in.",
                  "Children can get an activity from the front desk.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SALE: Children's clothes half price!",
                    "This weekend only.",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "All clothes are free.",
                  "The sale is for a month.",
                  "Some clothes are cheaper for a short time.",
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
                title: "Lucas",
                text: "I love sailing. My family has a boat, and we sail every weekend in summer. Last year, I sailed my own small boat in a race and came second. I'm learning to sail bigger boats now. One day, I want to sail around the world.",
              },
              {
                title: "Chloe",
                text: "My hobby is singing. I sing in a choir and have singing lessons every week. Last year, I sang the national anthem at a big football match. There were thirty thousand people there! I was terrified, but it was an amazing experience.",
              },
              {
                title: "Kai",
                text: "I'm interested in technology. I build computers from different parts. I've built three computers so far: one for me, one for my brother and one for my school. I also help my neighbours when their computers have problems.",
              },
            ],
            items: [
              {
                text: "does their hobby with family?",
                answer: 0,
              },
              {
                text: "has a big dream?",
                answer: 0,
              },
              {
                text: "performed at a sports event?",
                answer: 1,
              },
              {
                text: "felt very nervous?",
                answer: 1,
              },
              {
                text: "made something for their school?",
                answer: 2,
              },
              {
                text: "helps people who live nearby?",
                answer: 2,
              },
              {
                text: "came second in a race?",
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
              title: "The young scientist",
              paragraphs: [
                "When fourteen-year-old Priya noticed that the plants in her school garden were dying, she wanted to find out why. 'I did some tests on the soil,' she says. 'I found that it didn't have enough of some important things.'",
                "Priya decided to make a natural fertiliser from food waste. 'I collected fruit and vegetable peels from the school canteen,' she explains. 'Then I mixed them with soil and left them for a few weeks.'",
                "After a month, Priya put the new soil in the garden. 'The plants grew much better,' she says. 'They were greener and stronger.'",
                "Priya entered her project in a national science competition and won first prize. 'I want to be a scientist,' she says. 'I want to find ways to help farmers grow more food without damaging the planet.'",
              ],
            },
            items: [
              {
                question: "What did Priya notice?",
                options: [
                  "The canteen was dirty.",
                  "Plants at school were dying.",
                  "There were no plants.",
                ],
                answer: 1,
              },
              {
                question: "What did Priya use to make fertiliser?",
                options: [
                  "chemicals",
                  "water",
                  "food waste",
                ],
                answer: 2,
              },
              {
                question: "How long did Priya leave the mixture?",
                options: [
                  "a few weeks",
                  "a few hours",
                  "a year",
                ],
                answer: 0,
              },
              {
                question: "What happened when Priya used the new soil?",
                options: [
                  "The plants died.",
                  "The plants grew better.",
                  "Nothing changed.",
                ],
                answer: 1,
              },
              {
                question: "What does Priya want to do in the future?",
                options: [
                  "help farmers",
                  "be a cook",
                  "work in a school",
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
            title: "Chocolate",
            text: [
              "Chocolate is one of the most popular foods in the world. It is made from cacao beans, which {1} on trees in hot countries.",
              "The ancient Maya and Aztec people of Central America were the first to use cacao. They made a bitter drink from the beans. They also used cacao beans as {2}!",
              "In the sixteenth century, the Spanish brought cacao to Europe. People started adding sugar to make it sweeter. The first chocolate bar was made in England in 1847. Today, Switzerland is famous for its chocolate. Swiss people eat more chocolate than {3} else in the world, about nine kilos each a year! Chocolate contains a little caffeine, so it can make you feel more {4}. Dark chocolate is {5} for you than milk chocolate because it has less sugar. But remember: too much chocolate is bad for your {6}!",
            ],
            gaps: [
              {
                options: [
                  "grow",
                  "make",
                  "build",
                ],
                answer: 0,
              },
              {
                options: [
                  "coins up",
                  "cash up",
                  "money",
                ],
                answer: 2,
              },
              {
                options: [
                  "everyone",
                  "someone",
                  "anyone",
                ],
                answer: 2,
              },
              {
                options: [
                  "awake",
                  "waking",
                  "wake",
                ],
                answer: 0,
              },
              {
                options: [
                  "good",
                  "better",
                  "best",
                ],
                answer: 1,
              },
              {
                options: [
                  "teeth",
                  "tooth",
                  "toothy",
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
              "Hi Hannah,",
              "Thank you for the lovely birthday present! I really like the book. I've already started reading {1}.",
              "My birthday was great. In the morning, my family took me {2} breakfast at a café. Then in the afternoon, I had a party with my friends. We went to the cinema and then ate pizza. I'm sorry you couldn't come.",
              "Are you free next weekend? I'd love to see you. Maybe we could go shopping together. There's a new shop {3} sells really nice clothes. Let me know {4} you think. Thanks again {5} the present. See you {6}!",
              "Love,",
              "Isla",
            ],
            answers: [
              [
                "it",
              ],
              [
                "for",
                "to",
              ],
              [
                "that",
                "which",
              ],
              [
                "what",
              ],
              [
                "for",
              ],
              [
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You went to a wedding last weekend. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say whose wedding it was.",
              "Say what you wore.",
              "Say what you enjoyed most.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nLast Saturday, I went to my aunt's wedding. I wore a long green dress and new shoes. I enjoyed the dancing most because everyone was so happy and the music was great.\n\nBye,\nAyça",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🏊🏆",
                label: "1",
              },
              {
                e: "👦🏊⬇️🤕",
                label: "2",
              },
              {
                e: "👦🏊🏅😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Ben was training for a big swimming competition. A week before the race, he hurt his shoulder. The doctor told him to rest, and Ben was very worried that he couldn't swim. But he did exercises every day, and his shoulder got better. On the day of the race, he swam really fast and won a gold medal. He was very happy.",
          },
        },
      ],
    },
  ],
};
