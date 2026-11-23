import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 10 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_10: CambridgeTest = {
  id: "preliminary-10",
  level: "preliminary",
  no: 10,
  title: "B1 Preliminary · Practice Test 10",
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
                    "ART GALLERY",
                    "Free guided tours every Saturday at 11 a.m. No booking needed, but places are limited.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You must book a tour in advance.",
                  "Tours cost money on Saturdays.",
                  "You can join a tour without booking if there's space.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lisa, I can't find the address of the party. Can you text it to me? I'll be there about eight. Paul",
                  ],
                },
                question: "What does Paul need?",
                options: [
                  "a lift to the party",
                  "a later start time",
                  "information about where the party is",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Store in a cool, dry place.",
                    "Keep away from children.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Children shouldn't be able to reach this.",
                  "Keep this in the fridge.",
                  "This is suitable for children.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "I've finished reading the book you lent me. Shall I give it back to you at school tomorrow, or do you want me to lend it to Sam? Jack",
                  ],
                },
                question: "What does Jack want to know?",
                options: [
                  "where Tom bought the book",
                  "what to do with the book",
                  "if Tom has another book",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Students may use mobile phones in the canteen but not in classrooms or corridors.",
                  ],
                },
                question: "Where can students use their phones?",
                options: [
                  "in the canteen",
                  "in classrooms",
                  "anywhere in the school",
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
            instruction: "The young people below all want to visit a museum. Read the descriptions of eight museums. Decide which museum would be the most suitable for each person.",
            options: [
              {
                title: "Science World",
                text: "Lots of hands-on experiments and a planetarium where you can learn about stars and planets.",
              },
              {
                title: "Toy Museum",
                text: "Toys from the last 200 years, including dolls, trains and early computer games. Great for families.",
              },
              {
                title: "Natural History Museum",
                text: "Dinosaur skeletons, fossils and a huge collection of animals from around the world.",
              },
              {
                title: "Transport Museum",
                text: "Old buses, trains and planes. You can sit in a real cockpit and drive a train simulator.",
              },
              {
                title: "Art Gallery",
                text: "Paintings from the Middle Ages to today. Free drawing workshops at weekends.",
              },
              {
                title: "Fashion Museum",
                text: "Clothes from different centuries, with a special exhibition on famous designers.",
              },
              {
                title: "War Museum",
                text: "The history of the two world wars, with real letters and photos from soldiers.",
              },
              {
                title: "Music Museum",
                text: "Instruments from around the world. Visitors can try playing some of them.",
              },
            ],
            items: [
              {
                text: "Burak wants to learn about the past and is interested in history. He's particularly interested in real stories from people.",
                answer: 6,
              },
              {
                text: "Elif loves drawing and would like to improve her skills.",
                answer: 4,
              },
              {
                text: "Mert wants to see things related to space.",
                answer: 0,
              },
              {
                text: "Asya is interested in clothes and wants to become a designer.",
                answer: 5,
              },
              {
                text: "Kaan loves machines and wants to feel what it's like to be a pilot.",
                answer: 3,
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
              title: "Climbing Mount Kilimanjaro",
              paragraphs: [
                "Last summer, I climbed Mount Kilimanjaro in Tanzania with my older brother. At 5,895 metres, it's the highest mountain in Africa. I'd never climbed a mountain before, so I trained for six months, running and walking up hills every weekend.",
                "The climb took six days. On the first days, we walked through rainforest and saw monkeys in the trees. It was hot and humid, but the path wasn't too steep.",
                "As we climbed higher, it got much colder, and the air became thin. I had a headache and felt very tired. On the last night, we started climbing at midnight so that we could reach the top for sunrise. It was minus fifteen degrees.",
                "When we reached the top, I cried. The view was incredible, and I felt so proud. I've learned that with enough preparation and determination, you can do things you never thought possible.",
              ],
            },
            items: [
              {
                question: "How did the writer prepare for the climb?",
                options: [
                  "by climbing other mountains",
                  "by training for months",
                  "by reading books",
                  "by doing nothing",
                ],
                answer: 1,
              },
              {
                question: "What was the first part of the climb like?",
                options: [
                  "very cold",
                  "very steep",
                  "dangerous",
                  "warm and not very difficult",
                ],
                answer: 3,
              },
              {
                question: "What problem did the writer have higher up?",
                options: [
                  "She had a headache.",
                  "She lost her brother.",
                  "She saw dangerous animals.",
                  "She broke her leg.",
                ],
                answer: 0,
              },
              {
                question: "Why did they start climbing at midnight?",
                options: [
                  "because it was warmer",
                  "because the guide told them",
                  "to see the sunrise from the top",
                  "to avoid other climbers",
                ],
                answer: 2,
              },
              {
                question: "What did the writer learn?",
                options: [
                  "Mountains are too dangerous.",
                  "She doesn't like climbing.",
                  "Hard work and preparation can achieve a lot.",
                  "She should travel alone.",
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
            title: "A school without classrooms",
            text: [
              "In a small town in Denmark, there's a school where students spend most of their time outside. {1}",
              "The school was started by a group of parents who thought children spent too much time indoors. {2} They believed that learning outside would make children healthier and happier.",
              "Students study maths by measuring trees and learn science by looking at insects and plants. {3} Even in winter, when it's very cold, lessons take place outside.",
              "At first, some people thought it was a crazy idea. {4} But research has shown that students at the school do as well in exams as students at other schools.",
              "Teachers say the students are also more confident and better at working together. {5} Several other schools in Denmark are now trying similar ideas.",
            ],
            sentences: [
              "The school closes in winter.",
              "They worried that students wouldn't learn enough.",
              "The school has very expensive computers.",
              "They were worried about children looking at screens all day.",
              "There are no classrooms, only a small wooden building for very bad weather.",
              "They also get ill less often than children at normal schools.",
              "Most students don't like going outside.",
              "They also write stories and poems inspired by nature.",
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
            title: "Tea",
            text: [
              "Tea is the most popular drink in the world after water. It is {1} from the leaves of a plant that grows in hot, wet places.",
              "People in China have been drinking tea for thousands of years. It {2} to Europe in the seventeenth century, and soon became very popular in Britain.",
              "Today, there are many different kinds of tea. Green tea is popular in Japan and China, while black tea is more common in Europe. In some countries, people add milk and sugar to their tea, but in others they prefer to drink it {3}. Tea contains caffeine, so it can help you feel more {4}. But it has less caffeine than coffee. Scientists say that green tea may be good for your health. It contains substances that can {5} protect your body from illness. So next time you're thirsty, why not {6} a cup of tea?",
            ],
            gaps: [
              {
                options: [
                  "done",
                  "made",
                  "built",
                  "created",
                ],
                answer: 1,
              },
              {
                options: [
                  "reached",
                  "came up",
                  "got",
                  "arrived",
                ],
                answer: 3,
              },
              {
                options: [
                  "pure",
                  "plain",
                  "alone",
                  "simple",
                ],
                answer: 1,
              },
              {
                options: [
                  "waking",
                  "woken",
                  "wake",
                  "awake",
                ],
                answer: 3,
              },
              {
                options: [
                  "help",
                  "make",
                  "let",
                  "allow",
                ],
                answer: 0,
              },
              {
                options: [
                  "eat",
                  "take up",
                  "have",
                  "bring up",
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
            title: "Learning to cook",
            text: [
              "When I was fourteen, my mum started working late, so I had to learn to cook dinner {1} my younger brother and me. At first, I could only make pasta with tomato sauce.",
              "I started watching cooking videos online and trying new recipes. Some of them were disasters! Once, I put {2} much salt in a soup that nobody could eat it.",
              "But slowly, I got better. Now I cook dinner {3} night, and my mum says I'm a better cook than she is. My favourite dish is a chicken curry that my grandmother taught me {4} to make. Cooking has given me confidence, and I enjoy trying food from different countries. I'm thinking {5} studying to become a chef {6} I leave school.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "so",
                "too",
              ],
              [
                "every",
                "each",
              ],
              [
                "how",
              ],
              [
                "about",
                "of",
              ],
              [
                "when",
                "after",
                "once",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "Joining a club",
              lines: [
                "I've just joined a new sports club. [Great!]",
                "Do you belong to any clubs? [Tell Kim]",
                "Which sport would you like to try? [Explain why]",
                "Would you like to come to my club one day? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat's great news! I'm sure you'll have lots of fun and make new friends.\n\nI belong to the drama club at my school. We meet every Wednesday after school, and we're going to perform a play next month. I've got quite a big part, so I'm a bit nervous.\n\nI'd love to try rock climbing, because it looks exciting and it's good exercise. Also, I'm a bit scared of heights, so it would be a good challenge for me.\n\nYes, I'd love to come to your club one day! Let me know when.\n\nLove,\nNil",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day in the future",
              lines: [
                "What do you think a typical day will be like in fifty years?",
                "How will people travel, work and study?",
                "Will life be better or worse?",
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
            sample: "Life in fifty years\n\nIn fifty years, I think life will be very different. Most people will work from home, and they'll have meetings with virtual reality headsets. Children might study at home with robot teachers.\n\nPeople will probably travel in electric cars that drive themselves. In cities, there might be flying taxis! Holidays in space could be possible for rich people.\n\nI think some things will be better. There will be less pollution if everyone uses clean energy. But I'm worried that people will spend even more time with machines and less time with each other. I hope we don't forget how to talk face to face.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Jake heard a strange noise coming from the attic.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Jake heard a strange noise coming from the attic. It was late at night, and everyone else in the house was asleep.\n\nHe took his torch and climbed the old wooden stairs slowly. His heart was beating fast. When he opened the attic door, the noise stopped.\n\nJake shone his torch around the room. There were old boxes and furniture everywhere. Then he saw two small yellow eyes looking at him from behind a box. It was a little cat!\n\nThe cat had come in through a broken window. Jake gave it some milk, and the next day his parents said he could keep it.",
          },
        },
      ],
    },
  ],
};
