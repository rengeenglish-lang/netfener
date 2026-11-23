import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 63 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_63: CambridgeTest = {
  id: "preliminary-63",
  level: "preliminary",
  no: 63,
  title: "B1 Preliminary · Practice Test 63",
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
                    "The pool is closed for a private party on Saturday evening.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There's a party for everyone.",
                  "The pool is closed all weekend.",
                  "The pool isn't open to the public on Saturday evening.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I can't come to the match today. I've got too much homework. Sorry! Ben",
                  ],
                },
                question: "Why can't Ben go to the match?",
                options: [
                  "He has a lot of schoolwork.",
                  "He is ill.",
                  "He is on holiday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for use near water.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Use it in water.",
                  "You shouldn't use this near water.",
                  "It is waterproof.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I've found a great flat for us to rent near the university. Can you come and see it on Saturday? Emma",
                  ],
                },
                question: "What does Emma want Lucy to do?",
                options: [
                  "look at a flat",
                  "rent a flat",
                  "visit the university",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Sale! Everything 20% off this weekend only.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop is closing.",
                  "Prices will go up.",
                  "Prices are lower for a short time.",
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
            instruction: "The young people below all want to visit a city. Read the descriptions of eight cities. Decide which city would be the most suitable for each person.",
            options: [
              {
                title: "Paris",
                text: "Art galleries, cafés and the Eiffel Tower.",
              },
              {
                title: "London",
                text: "Museums, theatres and royal palaces.",
              },
              {
                title: "Rome",
                text: "Ancient ruins and delicious Italian food.",
              },
              {
                title: "Barcelona",
                text: "Beaches, football and amazing architecture.",
              },
              {
                title: "Amsterdam",
                text: "Canals, bicycles and museums.",
              },
              {
                title: "Vienna",
                text: "Classical music and beautiful palaces.",
              },
              {
                title: "Prague",
                text: "Old buildings and a famous castle.",
              },
              {
                title: "Athens",
                text: "Ancient Greek temples and history.",
              },
            ],
            items: [
              {
                text: "Kaan loves football and the beach.",
                answer: 3,
              },
              {
                text: "Defne wants to see ancient Greek ruins.",
                answer: 7,
              },
              {
                text: "Mert loves classical music.",
                answer: 5,
              },
              {
                text: "Selin loves art and wants to see the Eiffel Tower.",
                answer: 0,
              },
              {
                text: "Can wants to cycle around a city with canals.",
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
              title: "Learning to play the piano",
              paragraphs: [
                "I started learning the piano when I was seven. My mum is a piano teacher, so she taught me at home.",
                "At first, I didn't like it. I wanted to play outside with my friends, not practise scales. I often complained, and sometimes I refused to practise.",
                "When I was twelve, everything changed. I heard a piece of music by Chopin on the radio, and I fell in love with it. I wanted to learn to play it. My mum said it was very difficult, but I practised every day for six months.",
                "Finally, I could play it. I played it at a school concert, and everyone clapped. I felt so proud. Now I'm seventeen, and I'm going to study music at university. I'm very grateful that my mum didn't let me give up.",
              ],
            },
            items: [
              {
                question: "Who taught the writer to play the piano?",
                options: [
                  "a teacher at school",
                  "her dad",
                  "herself",
                  "her mum",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel about the piano at first?",
                options: [
                  "She didn't like it.",
                  "She loved it.",
                  "She found it easy.",
                  "She was excited.",
                ],
                answer: 0,
              },
              {
                question: "What changed when the writer was twelve?",
                options: [
                  "She got a new piano.",
                  "She changed teacher.",
                  "She heard music she loved.",
                  "She won a competition.",
                ],
                answer: 2,
              },
              {
                question: "How long did it take to learn the piece?",
                options: [
                  "one week",
                  "one year",
                  "six months",
                  "two days",
                ],
                answer: 2,
              },
              {
                question: "What will the writer study?",
                options: [
                  "music",
                  "art",
                  "teaching",
                  "history",
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
            title: "An underwater museum",
            text: [
              "Off the coast of Mexico, there's a museum under the sea. {1} It's called the Underwater Museum of Art.",
              "The museum has more than 500 statues on the sea floor. {2} They were made by artists from different countries.",
              "The statues are made from special concrete. {3} Over time, coral and plants grow on them, creating new homes for fish.",
              "The museum was created to protect the coral reefs. {4} Too many divers were damaging the natural reefs, so the museum gives them somewhere else to visit.",
              "Visitors can see the statues by diving, snorkelling or taking a glass-bottomed boat. {5} It's one of the most unusual museums in the world.",
            ],
            sentences: [
              "Thousands of tourists visit every year.",
              "Many of them are statues of people.",
              "The statues are made of metal.",
              "You need to dive or snorkel to see it.",
              "It also helps to bring more fish to the area.",
              "Nobody visits the museum.",
              "This material is safe for sea life.",
              "The museum is on the beach.",
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
            title: "Bees",
            text: [
              "Bees are among the most important insects in the world. They help plants to {1} by carrying pollen from flower to flower.",
              "Without bees, we wouldn't have many of the foods we eat, like apples, strawberries and almonds. About one third of our food {2} on bees.",
              "Honey bees live in large colonies with one queen and thousands of worker bees. The worker bees collect nectar from flowers and {3} it into honey. Honey has been eaten by humans for thousands of years. Sadly, bee populations are {4} around the world. This is caused by pesticides, disease and the loss of wild flowers. To help bees, people can plant flowers in their gardens and avoid using {5} chemicals. Some cities have also started keeping bees on the {6} of buildings.",
            ],
            gaps: [
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
                  "dependent",
                  "depends",
                  "dependence",
                  "depending",
                ],
                answer: 1,
              },
              {
                options: [
                  "turning",
                  "turned",
                  "turns up",
                  "turn",
                ],
                answer: 3,
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
                  "harm",
                  "harmless",
                  "harmful",
                  "harmfully",
                ],
                answer: 2,
              },
              {
                options: [
                  "roof up",
                  "roofing",
                  "roofs",
                  "roofed",
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
            title: "A summer camp",
            text: [
              "Last summer, I went to a summer camp {1} the mountains for two weeks. It was my first time away from home.",
              "On the first day, I felt very homesick. I missed my family and my own bed. But the other campers were very friendly, and soon I made lots of friends.",
              "Every day, we did different activities. We went hiking, swimming and canoeing. We also learned how to build a fire and cook {2} it. My favourite activity was rock climbing. I'd never done it before, {3} I was very nervous. But the instructor was very patient, and I managed to climb to the top! In the evenings, we sat around the campfire and sang songs. We also told scary stories. At the end of the two weeks, I didn't want to leave. I'd had {4} much fun! I've kept in touch {5} my friends from camp, and we're going {6} meet again next summer.",
            ],
            answers: [
              [
                "in",
              ],
              [
                "on",
              ],
              [
                "so",
              ],
              [
                "so",
              ],
              [
                "with",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A day out",
              lines: [
                "Would you like to have a day out together next weekend? [Answer]",
                "Where would you like to go? [Suggest somewhere]",
                "How should we get there? [Give ideas]",
                "What should we bring? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nYes, I'd love to have a day out together! It's been ages since we did something fun.\n\nI think we should go to the beach. The weather forecast says it's going to be sunny and warm. We could swim in the sea and have a picnic on the sand. There's also a nice café where we could get ice cream.\n\nWe could take the train. It's quick and cheap, and the station is close to the beach. Or maybe your dad could drive us?\n\nWe should bring sun cream, towels and swimming costumes. I'll bring sandwiches and drinks, and you could bring some fruit and snacks.\n\nSee you soon,\nIrem",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A childhood memory",
              lines: [
                "Tell us about a happy memory from your childhood.",
                "What happened?",
                "Why do you remember it?",
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
            sample: "The best birthday\n\nOne of my happiest childhood memories is my sixth birthday. My parents organised a party in the garden, and all my friends came.\n\nThere was a clown who did magic tricks and made balloon animals. He made me a balloon dog, which I kept for weeks! We also played games and ate a huge chocolate cake shaped like a castle.\n\nI remember it because I felt so happy and loved. My parents had worked very hard to make it special. Every time I see a photo from that day, I smile. It reminds me how lucky I am to have such a wonderful family.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The storm had cut off all the electricity in the town.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The storm had cut off all the electricity in the town. Sam and his family sat in the living room with candles.\n\nAt first, Sam was bored. He couldn't watch TV or use his phone. But then his dad suggested they play a board game. They played for hours, laughing and joking.\n\nThen his grandmother started telling stories about when she was a child. She told them about how she used to walk five kilometres to school every day, even in the snow. Sam had never heard these stories before.\n\nWhen the electricity came back on, nobody wanted to turn on the TV. They had enjoyed spending time together so much.",
          },
        },
      ],
    },
  ],
};
