import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 78 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_78: CambridgeTest = {
  id: "preliminary-78",
  level: "preliminary",
  no: 78,
  title: "B1 Preliminary · Practice Test 78",
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
                    "Students must not eat in the classrooms.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can't eat in classrooms.",
                  "Students can eat anywhere.",
                  "The canteen is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I'm going to be late. Can you save me a seat? Ben",
                  ],
                },
                question: "What does Ben want Max to do?",
                options: [
                  "wait outside",
                  "buy a ticket",
                  "keep a seat for him",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep away from heat.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it warm.",
                  "Don't keep it near hot things.",
                  "Heat it before use.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "The concert tickets are sold out. I'm sorry! Maybe we can go next time. Emma",
                  ],
                },
                question: "What does Emma tell Lucy?",
                options: [
                  "She has bought tickets.",
                  "They can't get tickets.",
                  "The concert is cancelled.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Children under 5 enter free.",
                  ],
                },
                question: "Who doesn't pay?",
                options: [
                  "students",
                  "adults",
                  "very young children",
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
            instruction: "The young people below all want to buy a present. Read the descriptions of eight presents. Decide which present would be the most suitable for each person to buy.",
            options: [
              {
                title: "Puzzle Book",
                text: "Hundreds of crosswords and puzzles.",
              },
              {
                title: "Cookbook",
                text: "Easy recipes for beginners.",
              },
              {
                title: "Football Shirt",
                text: "Shirt of a famous football team.",
              },
              {
                title: "Plant Pot",
                text: "A beautiful pot for indoor plants.",
              },
              {
                title: "Headphones",
                text: "High-quality headphones for music.",
              },
              {
                title: "Board Game",
                text: "A fun game for the whole family.",
              },
              {
                title: "Sketchbook",
                text: "A book for drawing.",
              },
              {
                title: "Camera",
                text: "A small camera for beginners.",
              },
            ],
            items: [
              {
                text: "Mert's brother loves football.",
                answer: 2,
              },
              {
                text: "Elif's mum loves plants.",
                answer: 3,
              },
              {
                text: "Can's sister loves listening to music.",
                answer: 4,
              },
              {
                text: "Zeynep's grandfather loves crosswords.",
                answer: 0,
              },
              {
                text: "Burak's friend wants to start taking photos.",
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
              title: "A summer in Spain",
              paragraphs: [
                "Last summer, I spent a month in Spain studying Spanish. I stayed with a Spanish family in Seville.",
                "At first, I found it difficult to understand people because they spoke very fast. But my host family was very patient and spoke slowly to me. They also corrected my mistakes kindly.",
                "Every morning, I had Spanish lessons at a language school. In the afternoons, I explored the city with other students. We visited palaces, churches and beautiful gardens.",
                "The best thing about my trip was the food. My host mother was an amazing cook. She made paella, tortilla and gazpacho. By the end of the month, my Spanish had improved a lot. I'd love to go back to Spain next summer.",
              ],
            },
            items: [
              {
                question: "Why did the writer go to Spain?",
                options: [
                  "for a holiday",
                  "to visit family",
                  "to study Spanish",
                  "to work",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "understanding people",
                  "the food",
                  "the weather",
                  "the lessons",
                ],
                answer: 0,
              },
              {
                question: "What did the writer do in the mornings?",
                options: [
                  "explored the city",
                  "slept",
                  "cooked",
                  "had Spanish lessons",
                ],
                answer: 3,
              },
              {
                question: "What was the best thing about the trip?",
                options: [
                  "the lessons",
                  "the food",
                  "the weather",
                  "the beaches",
                ],
                answer: 1,
              },
              {
                question: "How has the writer's Spanish changed?",
                options: [
                  "It has improved a lot.",
                  "It hasn't changed.",
                  "It has got worse.",
                  "She has forgotten it.",
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
            title: "A bridge of glass",
            text: [
              "In China, there's a bridge with a glass floor. {1} It's 430 metres long and 300 metres above the ground.",
              "Walking across the bridge is very scary. {2} You can see all the way down to the valley below.",
              "The bridge was opened in 2016. {3} Thousands of tourists visit it every day.",
              "Some people are too frightened to walk across. {4} Others crawl across on their hands and knees!",
              "The bridge is very safe. {5} The glass is very thick and can hold the weight of many people.",
            ],
            sentences: [
              "Nobody visits the bridge.",
              "They turn back before they reach the middle.",
              "The bridge is very low.",
              "Some visitors say they feel like they're walking on air.",
              "It was the longest glass bridge in the world when it opened.",
              "Engineers tested it by hitting it with hammers.",
              "The bridge is made of wood.",
              "It quickly became a popular attraction.",
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
            title: "Bees",
            text: [
              "Bees are very important for our planet. They help plants to {1} by carrying pollen from one flower to another.",
              "Without bees, many fruits and vegetables couldn't grow. About one third of the food we eat depends on bees.",
              "There are about 20,000 {2} of bees in the world. Honey bees are the most famous. They live in large groups called colonies. Each colony has one queen and thousands of worker bees. Worker bees collect nectar from flowers and {3} it into honey. Sadly, bee populations are {4}. This is because of pesticides, disease and the loss of wild flowers. We can help bees by planting {5} in our gardens and not using chemicals. Some people also keep bees in their gardens. If we don't protect bees, we could face serious food {6}.",
            ],
            gaps: [
              {
                options: [
                  "reproduce",
                  "reproduction",
                  "reproductive",
                  "reproduced",
                ],
                answer: 0,
              },
              {
                options: [
                  "specie",
                  "special",
                  "species",
                  "specially",
                ],
                answer: 2,
              },
              {
                options: [
                  "turning",
                  "turned",
                  "turn",
                  "turns up",
                ],
                answer: 2,
              },
              {
                options: [
                  "declining",
                  "decline",
                  "declined",
                  "declines up",
                ],
                answer: 0,
              },
              {
                options: [
                  "flower up",
                  "flowering",
                  "flowery",
                  "flowers",
                ],
                answer: 3,
              },
              {
                options: [
                  "short",
                  "shortages",
                  "shortly",
                  "shorten",
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
            title: "My best friend",
            text: [
              "My best friend is called Elif. We've been friends {1} we were five years old.",
              "Elif is very kind and funny. She always makes me laugh, even when I'm feeling sad. She's also very clever and helps me {2} my homework.",
              "We have a lot in common. We both love reading and watching films. We also play in the same volleyball team. Every weekend, we spend time together. Sometimes we go to the cinema, and sometimes we just stay at home and talk. Last year, Elif's family moved to another city. I was very sad, but we still talk {3} the phone every day. We also visit each other {4} the holidays. Our friendship is very important to me. I don't know what I'd do {5} her. I hope we'll be friends {6} ever.",
            ],
            answers: [
              [
                "since",
              ],
              [
                "with",
              ],
              [
                "on",
              ],
              [
                "in",
                "during",
              ],
              [
                "without",
              ],
              [
                "for",
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
              subject: "A new school",
              lines: [
                "I've just started at a new school. [How is it?]",
                "How did you feel on your first day at a new school? [Tell Robin]",
                "What can I do to make new friends? [Give advice]",
                "Can you visit me soon? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nHow is your new school? I hope you're enjoying it!\n\nWhen I started at a new school two years ago, I felt very nervous. I didn't know anyone, and the school was much bigger than my old one. At lunchtime, I sat alone. But after a few days, I started to make friends.\n\nTo make new friends, you could join a club or a sports team. You could also smile and say hello to people in your class. Ask them questions about themselves, because people like talking about their interests.\n\nI'd love to visit you soon! Maybe next weekend? I'll ask my parents.\n\nBye,\nCan",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An animal I'd like to be",
              lines: [
                "If you could be any animal, what would you be?",
                "Why would you choose this animal?",
                "What would your life be like?",
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
            sample: "Life as an eagle\n\nIf I could be any animal, I'd be an eagle. I've always been fascinated by birds, and eagles are the most powerful and beautiful of all.\n\nI'd choose to be an eagle because I'd be able to fly. I'd love to soar high above the mountains and see the world from the sky. Eagles also have amazing eyesight. They can see small animals from more than a kilometre away!\n\nMy life would be very exciting. I'd build my nest at the top of a tall tree or on a cliff. I'd spend my days flying over forests, rivers and mountains. It would be the most amazing feeling of freedom.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The old woman knocked on the door at midnight.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The old woman knocked on the door at midnight. Sam opened it nervously. Outside, it was raining heavily.\n\n'I'm sorry to disturb you,' the woman said. 'My car has broken down, and my phone isn't working. Could I use your phone?' Sam invited her inside and gave her a towel.\n\nWhile she was phoning her son, Sam made her a cup of tea. She told him that she was going to visit her new grandson in the hospital.\n\nHalf an hour later, her son arrived to collect her. Before she left, she thanked Sam warmly. A week later, Sam received a card with a photo of the baby. It said: 'Thank you for your kindness.'",
          },
        },
      ],
    },
  ],
};
