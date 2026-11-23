import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 57 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_57: CambridgeTest = {
  id: "preliminary-57",
  level: "preliminary",
  no: 57,
  title: "B1 Preliminary · Practice Test 57",
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
                    "LIBRARY",
                    "Children under 10 must be with an adult.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't come in.",
                  "Young children need an adult with them.",
                  "Adults can't come in.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've got a cold. Can you get me the homework from the maths lesson? Thanks! Ella",
                  ],
                },
                question: "What does Ella want Lucy to do?",
                options: [
                  "bring her medicine",
                  "visit her",
                  "get her homework",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "For adults only.",
                    "Not suitable for children.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Children shouldn't use this.",
                  "It's for children.",
                  "Everyone can use it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "I've booked the tennis court for 4 o'clock tomorrow. Don't forget your racket! Ben",
                  ],
                },
                question: "What does Ben remind Tom?",
                options: [
                  "to book a court",
                  "to bring his racket",
                  "to arrive at 5",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Free delivery for orders over £50.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Big orders are delivered free.",
                  "Delivery costs £50.",
                  "There's no delivery.",
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
            instruction: "The young people below all want to choose a weekend activity. Read the descriptions of eight activities. Decide which activity would be the most suitable for each person.",
            options: [
              {
                title: "Horse Riding",
                text: "Ride through the forest. Lessons for beginners.",
              },
              {
                title: "Kayaking",
                text: "Paddle down the river. You must be a good swimmer.",
              },
              {
                title: "Cooking Class",
                text: "Learn to make Thai food.",
              },
              {
                title: "Bowling",
                text: "Fun for groups of friends.",
              },
              {
                title: "Painting",
                text: "Paint landscapes with a local artist.",
              },
              {
                title: "Rock Climbing",
                text: "Indoor climbing wall for all levels.",
              },
              {
                title: "Cinema",
                text: "Watch the latest films.",
              },
              {
                title: "Museum Visit",
                text: "Learn about history at the city museum.",
              },
            ],
            items: [
              {
                text: "Kaan is a good swimmer and wants an adventure on water.",
                answer: 1,
              },
              {
                text: "Defne loves animals and has never ridden a horse.",
                answer: 0,
              },
              {
                text: "Burak wants to learn to cook Asian food.",
                answer: 2,
              },
              {
                text: "Asya loves art and the countryside.",
                answer: 4,
              },
              {
                text: "Mert wants to do something fun with a group of friends.",
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
              title: "My grandmother's garden",
              paragraphs: [
                "My grandmother has the most beautiful garden in our village. She has been gardening for more than fifty years.",
                "When I was little, I spent every summer with her. She taught me the names of all the flowers and showed me how to plant seeds. My favourite job was picking strawberries, although I usually ate more than I picked!",
                "Last year, my grandmother hurt her back and couldn't work in the garden. I was worried that her garden would be ruined. So every weekend, I went to her house to look after it.",
                "It was hard work, but I loved it. My grandmother sat in her chair and gave me advice. By the summer, the garden was as beautiful as ever. Now I have my own small garden at home, and I've decided to study plant science at university.",
              ],
            },
            items: [
              {
                question: "How long has the grandmother been gardening?",
                options: [
                  "five years",
                  "more than fifty years",
                  "ten years",
                  "twenty years",
                ],
                answer: 1,
              },
              {
                question: "What was the writer's favourite job?",
                options: [
                  "picking strawberries",
                  "planting seeds",
                  "watering plants",
                  "cutting grass",
                ],
                answer: 0,
              },
              {
                question: "Why couldn't the grandmother work in the garden?",
                options: [
                  "She was on holiday.",
                  "She was too busy.",
                  "She hurt her back.",
                  "She didn't want to.",
                ],
                answer: 2,
              },
              {
                question: "What did the grandmother do while the writer worked?",
                options: [
                  "cooked",
                  "gave advice",
                  "slept",
                  "watched TV",
                ],
                answer: 1,
              },
              {
                question: "What has the writer decided to study?",
                options: [
                  "history",
                  "art",
                  "medicine",
                  "plant science",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The library on a bus",
            text: [
              "In some parts of the world, libraries travel on buses. {1} These are called mobile libraries.",
              "Mobile libraries are especially important in the countryside. {2} Many villages don't have their own library.",
              "The bus visits each village once a week. {3} People can borrow and return books, just like in a normal library.",
              "Some mobile libraries also have computers with internet access. {4} This is very useful for people who don't have a computer at home.",
              "In some countries, mobile libraries also visit schools and hospitals. {5} They help people who can't easily travel to a library.",
            ],
            sentences: [
              "It stops in the same place at the same time.",
              "You can't borrow books from mobile libraries.",
              "They bring books to people who live far from towns.",
              "Some even visit old people's homes.",
              "The buses are very old.",
              "The nearest town might be many kilometres away.",
              "Mobile libraries are only in big cities.",
              "People can use them to search for jobs or send emails.",
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
            title: "Bicycles",
            text: [
              "The bicycle is one of the most popular ways to travel in the world. There are more than a billion bicycles, about twice as many as {1}.",
              "The first bicycle was invented in Germany in 1817. It didn't have pedals, so riders had to push it along with their feet. Later, pedals were added, and bicycles became more {2}.",
              "Cycling is good for your health. It makes your heart and lungs stronger and helps you stay {3}. It's also good for the environment, because bicycles don't produce any {4}. In many cities, people are being encouraged to cycle instead of driving. Cities like Amsterdam and Copenhagen have special cycle lanes that make cycling {5}. If you ride a bicycle, it's important to wear a helmet and follow the rules of the road. You should also make sure your bicycle is in good {6}.",
            ],
            gaps: [
              {
                options: [
                  "cars",
                  "car up",
                  "carry",
                  "carriage",
                ],
                answer: 0,
              },
              {
                options: [
                  "popularity",
                  "popularly",
                  "populate",
                  "popular",
                ],
                answer: 3,
              },
              {
                options: [
                  "fitness",
                  "fit",
                  "fitted",
                  "fitting",
                ],
                answer: 1,
              },
              {
                options: [
                  "pollution",
                  "pollute",
                  "polluted",
                  "polluting",
                ],
                answer: 0,
              },
              {
                options: [
                  "safe",
                  "safety",
                  "safer",
                  "safely",
                ],
                answer: 2,
              },
              {
                options: [
                  "conditional",
                  "condition",
                  "conditioned",
                  "conditioning",
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
            title: "A great day out",
            text: [
              "Last Saturday, my family and I went to the zoo. It was my little sister's birthday, {1} she wanted to see the animals.",
              "We arrived early, so there weren't many people. First, we went to see the lions. They were sleeping in the sun. Then we watched the penguins being fed. They were so funny!",
              "My sister's favourite animals were the monkeys. They jumped from tree to tree and played {2} each other. One monkey even took a man's hat! We all laughed. After lunch, we visited the reptile house. I'm a bit scared {3} snakes, so I didn't stay long. In the afternoon, we watched a show {4} birds flew over our heads. It was amazing. My sister said it was the best birthday {5}. We didn't get home {6} six o'clock.",
            ],
            answers: [
              [
                "so",
              ],
              [
                "with",
              ],
              [
                "of",
              ],
              [
                "where",
              ],
              [
                "ever",
              ],
              [
                "until",
                "till",
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
              subject: "A concert",
              lines: [
                "I've got two tickets for a concert next month! Would you like to come? [Answer]",
                "What kind of music do you like? [Tell Kim]",
                "How should we get there? [Suggest]",
                "What should we wear? [Give your opinion]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThank you so much! I'd love to come to the concert with you. Who's playing?\n\nI like lots of different kinds of music, but my favourite is pop. I also enjoy rock music and some classical music. I listen to music every day, especially when I'm doing my homework.\n\nI think we should take the bus to the concert. It's cheaper than a taxi, and the bus stop is near the concert hall. We could ask my dad to pick us up afterwards, because it will be late.\n\nI think we should wear comfortable clothes and shoes, because we'll probably be standing and dancing all night!\n\nBye,\nNehir",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A place I'd love to live",
              lines: [
                "Where would you most like to live?",
                "Why would you like to live there?",
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
            sample: "My dream home\n\nIf I could live anywhere in the world, I'd choose a small village by the sea in Greece. I visited one last summer, and I fell in love with it.\n\nThe houses are white with blue doors and windows, and the sea is clear and warm. The people are very friendly, and the food is delicious. It's also very peaceful, with no traffic or noise.\n\nMy life there would be very relaxing. I'd wake up early and swim in the sea before breakfast. Then I'd work from home or in a café. In the evenings, I'd eat fresh fish with friends and watch the sunset. It would be perfect!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Sam had always wanted to fly.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Sam had always wanted to fly. When he was a little boy, he spent hours watching planes take off at the airport near his house.\n\nOn his eighteenth birthday, his parents gave him a special present: a flying lesson! Sam couldn't believe it. He was so excited that he couldn't sleep the night before.\n\nThe instructor was a friendly woman called Kate. She explained everything carefully and then let Sam take control of the plane. At first, he was nervous, but soon he felt confident. Flying over the fields and towns was the most amazing feeling.\n\nWhen they landed, Sam knew what he wanted to do. He was going to become a pilot.",
          },
        },
      ],
    },
  ],
};
