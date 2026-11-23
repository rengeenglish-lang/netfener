import type { CambridgeTest } from "./types";

/** A2 Key practice test 95 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_95: CambridgeTest = {
  id: "key-95",
  level: "key",
  no: 95,
  title: "A2 Key · Practice Test 95",
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
                    "Parents can talk to teachers on Thursday from 4 to 7 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "School closes at 4 on Thursday.",
                  "Students must stay late.",
                  "Parents can meet teachers on Thursday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, I'm sorry I can't come to football tonight. I've got a cold. Dan",
                  ],
                },
                question: "Why can't Dan go to football?",
                options: [
                  "He is busy.",
                  "He is ill.",
                  "He forgot.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO PHOTOGRAPHY",
                    "In this gallery.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can take photos anywhere.",
                  "You can't take photos here.",
                  "Cameras are sold here.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "I've got your book. I'll bring it to school tomorrow. Sorry I kept it so long! Jo",
                  ],
                },
                question: "Why has Jo written this email?",
                options: [
                  "to borrow a book",
                  "to buy a book",
                  "to say she will return a book",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Swimming lessons for adults every Monday evening.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Adults can learn to swim on Mondays.",
                  "Children can swim on Mondays.",
                  "The pool is closed on Mondays.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "NEW SHOP",
                    "Second-hand clothes at low prices!",
                    "High Street. Open every day.",
                  ],
                },
                question: "What do we know about the shop?",
                options: [
                  "It sells new clothes.",
                  "It sells cheap clothes.",
                  "It's closed on Sundays.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Harry",
                text: "I love basketball. I play for my school and a local club. I'm very tall, which helps! Last season, I was the top scorer in our league. A coach from a university in the USA wants me to play for them.",
              },
              {
                title: "Molly",
                text: "My hobby is cooking. I love making cakes and biscuits. I sell them at a café in my town. The owner says my chocolate cake is the most popular cake in the café! I want to open my own café one day.",
              },
              {
                title: "Jacob",
                text: "I'm interested in photography. I take photos of wildlife. Last year, I went to Africa with my family and took photos of lions and elephants. One of my photos won a competition in a magazine!",
              },
            ],
            items: [
              {
                text: "has a height advantage?",
                answer: 0,
              },
              {
                text: "has been offered a place abroad?",
                answer: 0,
              },
              {
                text: "sells things to a business?",
                answer: 1,
              },
              {
                text: "wants their own business?",
                answer: 1,
              },
              {
                text: "travelled to another continent?",
                answer: 2,
              },
              {
                text: "won a magazine competition?",
                answer: 2,
              },
              {
                text: "was the best scorer?",
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
              title: "The longest train journey",
              paragraphs: [
                "The Trans-Siberian Railway is the longest railway in the world. It goes from Moscow to Vladivostok, a distance of about 9,300 kilometres.",
                "The journey takes seven days without stopping. 'It's an amazing experience,' says traveller Tom. 'You see forests, mountains and lakes. The views are incredible.'",
                "Passengers sleep on the train in small rooms. 'There's a restaurant on the train,' says Tom. 'But at the stations, people sell food on the platforms. I tried lots of new things!'",
                "Tom made friends with people from many countries on the train. 'We played cards and talked for hours,' he says. 'It was the best journey of my life.'",
              ],
            },
            items: [
              {
                question: "How long is the Trans-Siberian Railway?",
                options: [
                  "about 9,300 kilometres",
                  "about 930 kilometres",
                  "about 93,000 kilometres",
                ],
                answer: 0,
              },
              {
                question: "How long does the journey take?",
                options: [
                  "seven hours",
                  "seven weeks",
                  "seven days",
                ],
                answer: 2,
              },
              {
                question: "Where do passengers sleep?",
                options: [
                  "in hotels",
                  "on the train",
                  "at stations",
                ],
                answer: 1,
              },
              {
                question: "Where can you buy food?",
                options: [
                  "only on the train",
                  "on the train and at stations",
                  "only in Moscow",
                ],
                answer: 1,
              },
              {
                question: "What did Tom do with other passengers?",
                options: [
                  "slept",
                  "read books",
                  "played cards and talked",
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
            title: "Kangaroos",
            text: [
              "Kangaroos live in Australia. They are famous for {1} very far. Some can jump more than eight metres!",
              "Kangaroos have very strong back legs and a long tail. They use their tail to {2} their balance when they jump.",
              "Female kangaroos have a pouch on their stomach. Baby kangaroos, called joeys, live in the pouch for about six months. Kangaroos eat grass and plants. They usually eat in the {3} and at night, when it is cooler. There are more kangaroos than people in Australia! They are a {4} of Australia, and you can see them on Australian money. If you drive in Australia, you need to be {5} at night. Kangaroos often jump across roads. Drivers must {6} slowly.",
            ],
            gaps: [
              {
                options: [
                  "walking",
                  "flying",
                  "jumping",
                ],
                answer: 2,
              },
              {
                options: [
                  "keep",
                  "make up",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "morning up",
                  "evening",
                  "day up",
                ],
                answer: 1,
              },
              {
                options: [
                  "symbol",
                  "sign",
                  "mark",
                ],
                answer: 0,
              },
              {
                options: [
                  "care",
                  "carefully",
                  "careful",
                ],
                answer: 2,
              },
              {
                options: [
                  "ride",
                  "walk",
                  "drive",
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
              "I'm writing to say thank you for helping me {1} my history project. I got an A!",
              "I couldn't have done it {2} you. You explained everything so well.",
              "I want to say thank you. Would you like to go {3} the cinema with me on Saturday? I'll buy the tickets and popcorn! There's a new film about space that looks really good. We {4} meet outside the cinema at two o'clock. Let me know {5} you're free. Thanks again {6} your help!",
              "Love,",
              "Mia",
            ],
            answers: [
              [
                "with",
              ],
              [
                "without",
              ],
              [
                "to",
              ],
              [
                "could",
                "can",
              ],
              [
                "if",
                "whether",
              ],
              [
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a sports camp. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say where the camp is.",
              "Say what sports you will do.",
              "Say how long you will stay.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nNext month, I'm going to a sports camp in the mountains. I will do climbing, swimming and canoeing. I'm going to stay there for two weeks.\n\nBye,\nAhmet",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎂👵",
                label: "1",
              },
              {
                e: "👧🍰⬇️😢",
                label: "2",
              },
              {
                e: "👵🍰🤝👧😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "It was Grandma's birthday, and Lily made her a beautiful cake. When she was carrying it to the table, she tripped and the cake fell on the floor. Lily started to cry. But Grandma hugged her and said it didn't matter. They made a new cake together, and it was even better than the first one. It was the best birthday Grandma ever had.",
          },
        },
      ],
    },
  ],
};
