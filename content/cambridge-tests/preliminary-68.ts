import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 68 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_68: CambridgeTest = {
  id: "preliminary-68",
  level: "preliminary",
  no: 68,
  title: "B1 Preliminary · Practice Test 68",
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
                    "SWIMMING POOL",
                    "Children under 8 must be accompanied by an adult.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Young children need an adult with them.",
                  "Children can't swim.",
                  "Adults can't swim.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've finished the book you lent me. Shall I bring it to school tomorrow? Ben",
                  ],
                },
                question: "What does Ben want to know?",
                options: [
                  "where Max bought the book",
                  "if he should return the book",
                  "if Max has another book",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Best served warm.",
                    "Heat in the microwave for 2 minutes.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It's better to eat it warm.",
                  "Eat it cold.",
                  "Don't heat it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I've got a cold, so I can't come to the party. Have a great time! Emma",
                  ],
                },
                question: "Why can't Emma go to the party?",
                options: [
                  "She is busy.",
                  "She is on holiday.",
                  "She is ill.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Open 24 hours a day, 7 days a week.",
                  ],
                },
                question: "When is the shop open?",
                options: [
                  "only during the day",
                  "all the time",
                  "only at weekends",
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
            instruction: "The young people below all want to join a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Science Club",
                text: "Experiments and visits to museums.",
              },
              {
                title: "Art Club",
                text: "Painting and drawing.",
              },
              {
                title: "Music Club",
                text: "Learn to play instruments.",
              },
              {
                title: "Sports Club",
                text: "Football, basketball and tennis.",
              },
              {
                title: "Drama Club",
                text: "Acting and theatre.",
              },
              {
                title: "Book Club",
                text: "Reading and discussing books.",
              },
              {
                title: "Computer Club",
                text: "Coding and making games.",
              },
              {
                title: "Nature Club",
                text: "Walks and learning about plants and animals.",
              },
            ],
            items: [
              {
                text: "Elif wants to be an actress.",
                answer: 4,
              },
              {
                text: "Can wants to make computer games.",
                answer: 6,
              },
              {
                text: "Zeynep loves plants and animals.",
                answer: 7,
              },
              {
                text: "Mert loves reading.",
                answer: 5,
              },
              {
                text: "Asya wants to learn the piano.",
                answer: 2,
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
              title: "Learning to swim",
              paragraphs: [
                "I didn't learn to swim until I was fourteen. When I was a child, I was afraid of water, and I always refused to go to the swimming pool.",
                "Last year, my friends were going on a beach holiday, and I didn't want to miss it. So I decided to take swimming lessons.",
                "My first lesson was terrible. I was so scared that I couldn't put my face in the water. But my teacher was very patient. She told me to take it slowly.",
                "After two months, I could swim a whole length of the pool. On holiday, I swam in the sea with my friends. It was the best feeling in the world! I've learned that it's never too late to learn something new and that you can overcome your fears.",
              ],
            },
            items: [
              {
                question: "When did the writer learn to swim?",
                options: [
                  "at fourteen",
                  "as a child",
                  "last month",
                  "never",
                ],
                answer: 0,
              },
              {
                question: "Why did the writer decide to learn?",
                options: [
                  "for school",
                  "for a competition",
                  "to go on holiday with friends",
                  "her parents told her",
                ],
                answer: 2,
              },
              {
                question: "How was the first lesson?",
                options: [
                  "easy",
                  "fun",
                  "very difficult",
                  "boring",
                ],
                answer: 2,
              },
              {
                question: "What could the writer do after two months?",
                options: [
                  "swim a length",
                  "swim in the sea",
                  "dive",
                  "teach swimming",
                ],
                answer: 0,
              },
              {
                question: "What has the writer learned?",
                options: [
                  "Swimming is dangerous.",
                  "She should stay away from water.",
                  "Lessons are boring.",
                  "It's never too late to learn.",
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
            title: "A village of bicycles",
            text: [
              "In the Netherlands, there's a village where everyone rides a bicycle. {1} There are no cars allowed in the village centre.",
              "The village decided to ban cars about twenty years ago. {2} The streets were very busy, and the air was polluted.",
              "Now people cycle everywhere: to work, to school and to the shops. {3} Even older people ride bicycles, some of them into their nineties!",
              "The village is much quieter and cleaner now. {4} Children can play safely in the streets.",
              "Tourists love visiting the village. {5} Many of them hire bicycles to explore the area.",
            ],
            sentences: [
              "Everyone drives a car.",
              "It's one of the most bicycle-friendly places in the world.",
              "The air is much fresher.",
              "The village is very noisy.",
              "There were too many cars.",
              "Bicycles are not allowed.",
              "Some families have special bicycles to carry their children.",
              "It's become a popular destination.",
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
            title: "Honey",
            text: [
              "Honey is a sweet food made by bees. People have been eating honey for thousands of years. In ancient Egypt, it was used as {1} as well as food.",
              "Bees make honey from the nectar of flowers. A single bee produces only about a twelfth of a teaspoon of honey in its whole {2}!",
              "The colour and taste of honey {3} on the flowers the bees visit. Some honey is light and sweet, while other honey is dark and strong. Honey never goes bad. Archaeologists have found honey in Egyptian tombs that is more than 3,000 years old, and it's still safe to eat! Honey is also good for your {4}. It can help with coughs and sore throats. Many people put honey in hot water with lemon when they have a cold. Today, bees are in danger, so honey is becoming more {5}. We need to protect bees so that we can continue to {6} honey.",
            ],
            gaps: [
              {
                options: [
                  "medical",
                  "medicine",
                  "medicinal",
                  "medic",
                ],
                answer: 1,
              },
              {
                options: [
                  "live",
                  "living",
                  "lively",
                  "life",
                ],
                answer: 3,
              },
              {
                options: [
                  "depend",
                  "dependent",
                  "dependence",
                  "depending",
                ],
                answer: 0,
              },
              {
                options: [
                  "healthy",
                  "healthily",
                  "health",
                  "healthier",
                ],
                answer: 2,
              },
              {
                options: [
                  "expense",
                  "expensively",
                  "expensive",
                  "expend",
                ],
                answer: 2,
              },
              {
                options: [
                  "enjoy",
                  "enjoyment",
                  "enjoyable",
                  "enjoyed",
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
            title: "A great holiday",
            text: [
              "Last summer, my family went on holiday to Italy. We stayed in a small village {1} the sea for two weeks.",
              "Every morning, we had breakfast on the balcony of our apartment. We could see the sea {2} our window. Then we went to the beach to swim and sunbathe.",
              "We also visited some famous cities. In Rome, we saw the Colosseum, {3} is an ancient stadium. In Florence, we visited art galleries and ate the best ice cream I've ever tasted. One day, we went on a boat trip to a small island. We swam in a beautiful cave {4} the water was bright blue. It was amazing! The food in Italy was delicious. I ate pizza and pasta every day! I didn't want to go home {5} the end of the holiday. I'd love to go back to Italy {6} day.",
            ],
            answers: [
              [
                "by",
                "near",
              ],
              [
                "from",
              ],
              [
                "which",
              ],
              [
                "where",
              ],
              [
                "at",
              ],
              [
                "one",
                "some",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A sleepover",
              lines: [
                "Would you like to come to my house for a sleepover on Saturday? [Answer]",
                "What would you like to do? [Give ideas]",
                "What should you bring? [Ask]",
                "What time should you arrive? [Ask]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nThank you for inviting me! I'd love to come for a sleepover on Saturday. It will be so much fun!\n\nWe could watch some films and eat popcorn. Maybe we could play video games or board games too. If the weather is nice, we could have a barbecue in the garden.\n\nWhat should I bring? I'll bring my sleeping bag and pyjamas, of course. Should I bring some snacks or drinks? Do you have any games I could play?\n\nAlso, what time should I arrive? I have football practice on Saturday morning, but I'll be free after lunch. Is two o'clock OK?\n\nSee you soon,\nOnur",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day without technology",
              lines: [
                "Could you live without technology for a day?",
                "What would you miss most?",
                "What would you do instead?",
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
            sample: "A day without screens\n\nI think I could live without technology for a day, but it would be difficult. I use my phone every day to talk to my friends, listen to music and watch videos.\n\nI would miss my phone most, because I use it to keep in touch with my friends. I'd also miss watching my favourite TV shows.\n\nInstead, I would spend more time doing things I don't usually have time for. I'd read a book, go for a walk in the park and play board games with my family. I might even try cooking a new recipe. I think it would be a nice change, and I might even enjoy it!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Sarah woke up, she heard a strange noise outside her window.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Sarah woke up, she heard a strange noise outside her window. It sounded like someone was crying.\n\nShe looked out and saw a small bird sitting on the windowsill. One of its wings was hurt, and it couldn't fly.\n\nSarah carefully picked up the bird and put it in a box with some soft cloth. She gave it some water and seeds. Then she called the local animal hospital.\n\nThe vet looked after the bird for two weeks. When its wing was better, Sarah went to collect it. She took it to the park and opened the box. The bird flew up into the sky. Sarah felt very happy.",
          },
        },
      ],
    },
  ],
};
