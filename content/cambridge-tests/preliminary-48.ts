import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 48 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_48: CambridgeTest = {
  id: "preliminary-48",
  level: "preliminary",
  no: 48,
  title: "B1 Preliminary · Practice Test 48",
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
                    "The library will be closed next week for painting. Students can use the study room instead.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The study room is closed.",
                  "Students can study in another room.",
                  "The library will be open next week.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've just finished the book you lent me. It was brilliant! Shall I bring it back tomorrow? Lucy",
                  ],
                },
                question: "What does Lucy want to know?",
                options: [
                  "if she should return the book",
                  "where Grace bought the book",
                  "if Grace has another book",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for dishwashers.",
                    "Wash by hand.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can put it in a dishwasher.",
                  "Don't wash it.",
                  "You shouldn't put it in a dishwasher.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I can't meet you at the station at 5. Can we meet at 5.30 instead? Ben",
                  ],
                },
                question: "What does Ben want?",
                options: [
                  "to meet earlier",
                  "to cancel the meeting",
                  "to meet later",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Last entry is 30 minutes before closing time.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't go in just before the museum closes.",
                  "The museum closes early.",
                  "You can go in at any time.",
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
            instruction: "The young people below all want to join an online course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Digital Art",
                text: "Learn to draw and paint on a tablet.",
              },
              {
                title: "Video Editing",
                text: "Learn to make and edit videos for social media.",
              },
              {
                title: "Healthy Eating",
                text: "Learn about nutrition and how to plan healthy meals.",
              },
              {
                title: "Chess",
                text: "Improve your chess skills with a grandmaster.",
              },
              {
                title: "Mandarin Chinese",
                text: "Learn basic Chinese with a native speaker.",
              },
              {
                title: "Music Production",
                text: "Create electronic music on your computer.",
              },
              {
                title: "Photography",
                text: "Learn to take better photos with your camera.",
              },
              {
                title: "Public Speaking",
                text: "Gain confidence speaking in front of others.",
              },
            ],
            items: [
              {
                text: "Can wants to make better videos for his channel.",
                answer: 1,
              },
              {
                text: "Elif wants to learn a language spoken in China.",
                answer: 4,
              },
              {
                text: "Burak is a good chess player and wants to get better.",
                answer: 3,
              },
              {
                text: "Zeynep loves drawing but wants to try it on a computer.",
                answer: 0,
              },
              {
                text: "Mert wants to create his own music.",
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
              title: "Learning to ski",
              paragraphs: [
                "Last winter, my family went on a skiing holiday in the Alps. I'd never skied before, so I took lessons every morning for a week.",
                "On the first day, I fell over about fifty times! My legs were very tired, and I wanted to give up. But my instructor, Hans, was very patient. He told me that everyone falls at the beginning.",
                "By the third day, I could ski down the easy slopes without falling. I felt really proud of myself. On the fifth day, Hans took us to a more difficult slope. I was scared, but I managed to get down safely.",
                "On the last day, I skied with my parents down a long red slope. It was amazing! I'd learned so much in just one week. I can't wait to go skiing again next winter.",
              ],
            },
            items: [
              {
                question: "Why did the writer take lessons?",
                options: [
                  "Her parents made her.",
                  "She had never skied before.",
                  "She wanted to be a teacher.",
                  "She was very good.",
                ],
                answer: 1,
              },
              {
                question: "How did the writer feel on the first day?",
                options: [
                  "She was confident.",
                  "She was excited.",
                  "She was bored.",
                  "She wanted to stop.",
                ],
                answer: 3,
              },
              {
                question: "What did Hans tell her?",
                options: [
                  "She should give up.",
                  "Everyone falls at first.",
                  "She was the best.",
                  "She needed new skis.",
                ],
                answer: 1,
              },
              {
                question: "What happened on the fifth day?",
                options: [
                  "She fell and hurt herself.",
                  "She stopped skiing.",
                  "She skied with her parents.",
                  "She went on a harder slope.",
                ],
                answer: 3,
              },
              {
                question: "How does the writer feel about skiing now?",
                options: [
                  "She wants to do it again.",
                  "She doesn't like it.",
                  "She's afraid of it.",
                  "She's bored of it.",
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
            title: "A café for cats",
            text: [
              "In many cities around the world, you can find cat cafés. {1} Customers can drink coffee and play with cats at the same time.",
              "The first cat café opened in Taiwan in 1998. {2} Since then, they have become popular in Japan, Europe and the USA.",
              "Many people who visit cat cafés can't have pets at home. {3} Spending time with cats helps them relax and feel happier.",
              "Most cat cafés work with animal shelters. {4} If customers fall in love with a cat, they can adopt it.",
              "Cat cafés have strict rules to protect the cats. {5} The cats must always be treated gently.",
            ],
            sentences: [
              "Cats are not allowed in the cafés.",
              "These are cafés where cats live.",
              "The cats are waiting for new homes.",
              "Customers must bring their own cats.",
              "It quickly became very popular with tourists.",
              "Cat cafés only serve cat food.",
              "They might live in small flats or work long hours.",
              "For example, customers mustn't wake sleeping cats.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Space travel",
            text: [
              "Space travel has always fascinated people. In 1961, the Russian astronaut Yuri Gagarin became the first person to {1} into space.",
              "Eight years later, in 1969, Neil Armstrong became the first person to walk on the Moon. About 600 million people watched it {2} on TV.",
              "Today, astronauts live and work on the International Space Station, which {3} the Earth every ninety minutes. They do scientific experiments to learn more about space and how it affects the human body. In recent years, private companies have started to offer {4} to space for tourists. However, tickets are very expensive, costing millions of dollars. Scientists are now planning missions to Mars. They hope that people could {5} on Mars within the next twenty years. Space travel could help us {6} more about our universe.",
            ],
            gaps: [
              {
                options: [
                  "travel",
                  "traveller",
                  "travelling",
                  "travelled",
                ],
                answer: 0,
              },
              {
                options: [
                  "lively",
                  "living",
                  "live",
                  "lives up",
                ],
                answer: 2,
              },
              {
                options: [
                  "orbit",
                  "orbits",
                  "orbiting",
                  "orbital",
                ],
                answer: 1,
              },
              {
                options: [
                  "trip up",
                  "tripped",
                  "tripping",
                  "trips",
                ],
                answer: 3,
              },
              {
                options: [
                  "landing",
                  "land",
                  "landed",
                  "lands up",
                ],
                answer: 1,
              },
              {
                options: [
                  "learning",
                  "learned up",
                  "learner",
                  "learn",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A summer job",
            text: [
              "Last summer, I worked {1} a lifeguard at a swimming pool. I'd done a lifeguard course the year before, so I was qualified.",
              "My job was to watch the swimmers and make sure they were safe. It was a big responsibility, {2} I took it very seriously. I had to concentrate all the time.",
              "Most days were quiet, but one day, a little boy started having difficulty in the deep end. I jumped into the water and pulled him out. He was fine, but his parents were very scared. They thanked me many times. That day, I realised how important my job was. I also learned a lot about working {3} a team. The other lifeguards were very friendly, and we had lots of fun together. I earned enough money {4} buy a new laptop. I'm going to work there again {5} summer. It's the best job I've {6} had.",
            ],
            answers: [
              [
                "as",
              ],
              [
                "so",
              ],
              [
                "in",
                "as",
              ],
              [
                "to",
              ],
              [
                "next",
                "this",
              ],
              [
                "ever",
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
                "My school is going on a trip abroad next year! [Exciting!]",
                "Which country do you think we should visit? [Suggest one]",
                "Have you ever been abroad? [Tell Robin]",
                "What should I bring? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThat's so exciting! I'm sure it will be an amazing experience.\n\nI think you should visit Italy. There are so many interesting places to see, like the Colosseum in Rome and the canals in Venice. The food is also delicious!\n\nYes, I've been abroad twice. Last year, I went to Spain with my family. We visited Barcelona and Madrid. Two years ago, I went to Greece on a school trip.\n\nYou should bring comfortable shoes, because you'll walk a lot. Don't forget your passport, and bring some money for souvenirs. A camera would be good too!\n\nBye,\nYiğit",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A person who changed the world",
              lines: [
                "Who is someone who changed the world?",
                "What did they do?",
                "Why do you admire them?",
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
            sample: "Marie Curie: a true hero\n\nOne person who changed the world was Marie Curie. She was a scientist who lived more than a hundred years ago. She discovered two new elements and did important research on radioactivity.\n\nMarie Curie was the first woman to win a Nobel Prize, and she's still the only person to win Nobel Prizes in two different sciences. Her work helped to develop X-rays, which are now used in hospitals all over the world.\n\nI admire her because she worked very hard at a time when women weren't allowed to study at many universities. She showed that women could be great scientists. She inspires me to follow my dreams.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The train had stopped, and nobody knew why.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The train had stopped, and nobody knew why. Lucy looked out of the window. They were in the middle of a forest, far from any station.\n\nAfter twenty minutes, the driver made an announcement. A tree had fallen across the track because of the storm. They would have to wait until it was removed.\n\nThe passengers started talking to each other. Lucy sat next to an old man who had been a train driver for forty years. He told her amazing stories about his journeys around the country.\n\nTwo hours later, the train started moving again. Lucy was almost sad. She had enjoyed listening to the old man's stories.",
          },
        },
      ],
    },
  ],
};
