import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 75 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_75: CambridgeTest = {
  id: "preliminary-75",
  level: "preliminary",
  no: 75,
  title: "B1 Preliminary · Practice Test 75",
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
                    "The school disco will finish at 9 p.m. Parents should collect their children on time.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The disco starts at 9.",
                  "The disco is cancelled.",
                  "Parents should pick up children at 9.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've got a cold, so I can't come to football today. Sorry! Sam",
                  ],
                },
                question: "Why can't Sam go to football?",
                options: [
                  "He is ill.",
                  "He is busy.",
                  "He is on holiday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Use within one week of opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can keep it for months.",
                  "You should use it quickly after opening.",
                  "Use it before opening.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "The library has the book you wanted. They'll keep it for you until Friday. Mum",
                  ],
                },
                question: "What does Mum tell Lucy?",
                options: [
                  "She can collect a book before Friday.",
                  "She must return a book.",
                  "The library is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Students get 20% off with a student card.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Everyone pays less.",
                  "Students can't come in.",
                  "Students pay less with a card.",
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
            instruction: "The young people below all want to choose a weekend activity. Read the descriptions of eight activities. Decide which activity would be the most suitable for each person.",
            options: [
              {
                title: "Ice Skating",
                text: "Skate on the ice rink. Skates provided.",
              },
              {
                title: "Rock Climbing",
                text: "Indoor climbing for all levels.",
              },
              {
                title: "Cooking Class",
                text: "Learn to make pizza.",
              },
              {
                title: "Art Workshop",
                text: "Paint with a local artist.",
              },
              {
                title: "Bike Ride",
                text: "Cycle through the countryside.",
              },
              {
                title: "Swimming",
                text: "Swim in the indoor pool.",
              },
              {
                title: "Bowling",
                text: "Bowl with friends.",
              },
              {
                title: "Museum Tour",
                text: "Learn about local history.",
              },
            ],
            items: [
              {
                text: "Elif wants to learn to make pizza.",
                answer: 2,
              },
              {
                text: "Can wants to try climbing.",
                answer: 1,
              },
              {
                text: "Zeynep loves painting.",
                answer: 3,
              },
              {
                text: "Mert wants to try skating but doesn't have skates.",
                answer: 0,
              },
              {
                text: "Asya loves cycling.",
                answer: 4,
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
              title: "Learning a new skill",
              paragraphs: [
                "Last year, I decided to learn to knit. My grandmother had always knitted, and I wanted to learn from her before it was too late.",
                "At first, it was very difficult. My fingers didn't know what to do, and I kept dropping stitches. My first scarf was full of holes!",
                "But my grandmother was very patient. Every Sunday, we sat together and she showed me what to do. Slowly, I got better. After three months, I could knit a whole scarf without any mistakes.",
                "Now I knit every evening. I've made scarves, hats and gloves for my family and friends. Last month, I sold some of my scarves at a market and gave the money to charity. Knitting has become my favourite hobby, and I love spending time with my grandmother.",
              ],
            },
            items: [
              {
                question: "Why did the writer want to learn to knit?",
                options: [
                  "for school",
                  "to make money",
                  "to win a competition",
                  "to learn from her grandmother",
                ],
                answer: 3,
              },
              {
                question: "What happened to the writer's first scarf?",
                options: [
                  "It had lots of holes.",
                  "It was perfect.",
                  "She sold it.",
                  "She lost it.",
                ],
                answer: 0,
              },
              {
                question: "When did the writer learn with her grandmother?",
                options: [
                  "every day",
                  "on Saturdays",
                  "on Sundays",
                  "in the evenings",
                ],
                answer: 2,
              },
              {
                question: "What did the writer do with the money from the market?",
                options: [
                  "bought more wool",
                  "kept it",
                  "gave it to charity",
                  "gave it to her grandmother",
                ],
                answer: 2,
              },
              {
                question: "How does the writer feel about knitting now?",
                options: [
                  "It's her favourite hobby.",
                  "She doesn't like it.",
                  "It's boring.",
                  "It's too difficult.",
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
            title: "A train in the clouds",
            text: [
              "In India, there's a famous train that climbs high into the mountains. {1} It's called the Darjeeling Himalayan Railway, or the 'Toy Train'.",
              "The railway was built in the nineteenth century. {2} It was used to carry tea from the mountains to the cities.",
              "The train is very small and slow. {3} It travels at about twenty kilometres an hour.",
              "The journey is about eighty-eight kilometres long. {4} The views of the mountains and tea plantations are spectacular.",
              "Today, the railway is a UNESCO World Heritage Site. {5} Thousands of tourists ride it every year.",
            ],
            sentences: [
              "It's very popular with visitors.",
              "Darjeeling is famous for its tea.",
              "The railway was built last year.",
              "It's one of the oldest mountain railways in the world.",
              "It takes about seven hours to complete.",
              "Nobody uses the railway.",
              "That's why people call it the 'Toy Train'.",
              "The train is very fast.",
            ],
            answers: [
              3,
              1,
              6,
              4,
              0,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Rainforests",
            text: [
              "Rainforests are thick forests that grow in hot, wet parts of the world. They {1} only about six per cent of the Earth's surface, but they are home to more than half of all plants and animals.",
              "The largest rainforest is the Amazon in South America. It's so big that it produces about twenty per cent of the world's {2}.",
              "Rainforests are very important for people too. Many medicines come from rainforest plants. They also help to control the world's climate. Sadly, rainforests are being destroyed very {3}. Every minute, an area of rainforest the size of several football pitches is cut down. This is called deforestation. The trees are cut down for wood and to make space for farms. When rainforests are destroyed, many animals lose their {4}. Some species are in danger of disappearing {5}. Many organisations are working to protect rainforests. We can help by buying products that don't {6} the rainforests.",
            ],
            gaps: [
              {
                options: [
                  "covering",
                  "covered",
                  "coverage",
                  "cover",
                ],
                answer: 3,
              },
              {
                options: [
                  "oxygenate",
                  "oxygen",
                  "oxygenated",
                  "oxygenation",
                ],
                answer: 1,
              },
              {
                options: [
                  "quick",
                  "quicker",
                  "quickness",
                  "quickly",
                ],
                answer: 3,
              },
              {
                options: [
                  "homes",
                  "home up",
                  "homeless",
                  "homely",
                ],
                answer: 0,
              },
              {
                options: [
                  "complete",
                  "completion",
                  "completely",
                  "completed",
                ],
                answer: 2,
              },
              {
                options: [
                  "harmful",
                  "harmless",
                  "harm",
                  "harmed",
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
            title: "A great birthday",
            text: [
              "Last month was my sixteenth birthday. My parents organised a surprise party {1} me.",
              "On the day of my birthday, my best friend asked me to go shopping with her. When we came back, the house was dark. I thought nobody was home. But when I opened the door, everyone shouted 'Surprise!'",
              "All my friends and family were there. The house was decorated {2} balloons and lights. There was a huge cake with sixteen candles. I was so surprised that I started crying! We ate delicious food and danced {3} midnight. My friends gave me lots of presents. My favourite was a photo album {4} pictures of all of us. My grandmother gave me a beautiful necklace that had belonged {5} her mother. It was the best birthday {6}. I'll never forget it.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "with",
              ],
              [
                "until",
                "till",
              ],
              [
                "with",
              ],
              [
                "to",
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
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "A trip to the city",
              lines: [
                "I'm going to visit the city next weekend. [Great!]",
                "What should I see there? [Recommend some places]",
                "Where's a good place to eat? [Suggest one]",
                "Would you like to come with me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nThat's great! You'll have a fantastic time.\n\nYou should definitely visit the old town, where there are beautiful old buildings and narrow streets. The castle is also worth seeing, and you can climb the tower for a great view. If you like art, the city museum has an amazing collection.\n\nThere's a lovely Italian restaurant near the main square. The pizza is delicious, and it's not too expensive. There's also a great café by the river where you can have cake and coffee.\n\nI'd love to come with you! I haven't been to the city for months. What time are you leaving?\n\nBye,\nEge",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A family tradition",
              lines: [
                "Tell us about a tradition in your family.",
                "When does it happen?",
                "Why is it important to you?",
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
            sample: "Sunday breakfast\n\nIn my family, we have a special tradition: every Sunday, we have a big breakfast together. It's been happening since before I was born.\n\nMy grandmother starts cooking early in the morning. She makes eggs, bread, cheese, olives and her famous homemade jam. My aunts, uncles and cousins all come to her house. Sometimes there are twenty people around the table!\n\nThis tradition is important to me because it brings our family together. During the week, everyone is busy with work and school. But on Sundays, we can relax, eat and talk. I hope we'll continue this tradition for many years. When I'm older, I want to do it with my own family.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Ben was walking home when he saw smoke coming from a house.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Ben was walking home when he saw smoke coming from a house. He ran closer and saw that the kitchen window was full of smoke.\n\nHe knocked loudly on the door, but nobody answered. Then he heard a dog barking inside. Ben immediately called the fire brigade on his phone.\n\nWhile he waited, he found an open window at the back of the house. He climbed through and found the dog in the living room. He carried it outside to safety.\n\nThe firefighters arrived and put out the fire. The owner came home and thanked Ben for saving her dog. Ben's story was in the local newspaper.",
          },
        },
      ],
    },
  ],
};
