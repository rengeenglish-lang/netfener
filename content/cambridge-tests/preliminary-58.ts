import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 58 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_58: CambridgeTest = {
  id: "preliminary-58",
  level: "preliminary",
  no: 58,
  title: "B1 Preliminary · Practice Test 58",
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
                    "Students who want to learn a musical instrument should speak to Mr Brown in the music room.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Music lessons are cancelled.",
                  "The music room is closed.",
                  "Students interested in music lessons should see Mr Brown.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've just missed the bus. I'll be about twenty minutes late. Sorry! Dan",
                  ],
                },
                question: "What does Dan tell Max?",
                options: [
                  "He has arrived.",
                  "He can't come.",
                  "He will arrive late.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Machine washable at 40°C.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can wash it in a machine.",
                  "You must wash it by hand.",
                  "You can't wash it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Emma,",
                    "The school disco is on Friday at 7. Tickets are £3 and can be bought at the door. Lucy",
                  ],
                },
                question: "How can you get a ticket?",
                options: [
                  "online",
                  "at the entrance on the night",
                  "from the school office",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The playground is for children under 12 only.",
                  ],
                },
                question: "Who can use the playground?",
                options: [
                  "children under 12",
                  "everyone",
                  "adults only",
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
            instruction: "The young people below all want to join a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Chess Club",
                text: "Learn to play chess and enter competitions.",
              },
              {
                title: "Dance Club",
                text: "Learn street dance and perform at school events.",
              },
              {
                title: "Science Club",
                text: "Do experiments and visit science museums.",
              },
              {
                title: "Book Club",
                text: "Read and discuss a book every month.",
              },
              {
                title: "Drama Club",
                text: "Act in plays and learn about theatre.",
              },
              {
                title: "Photography Club",
                text: "Learn to take better photos.",
              },
              {
                title: "Cooking Club",
                text: "Cook healthy meals and learn about nutrition.",
              },
              {
                title: "Running Club",
                text: "Run together and take part in races.",
              },
            ],
            items: [
              {
                text: "Elif loves reading and talking about books.",
                answer: 3,
              },
              {
                text: "Can wants to be an actor.",
                answer: 4,
              },
              {
                text: "Zeynep loves dancing.",
                answer: 1,
              },
              {
                text: "Burak loves experiments.",
                answer: 2,
              },
              {
                text: "Asya wants to get fit by running.",
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
              title: "A year of adventure",
              paragraphs: [
                "When I finished school, I decided to take a year off before going to university. I wanted to travel and see the world.",
                "I started by working in a café for six months to save money. Then I bought a backpack and a plane ticket to Thailand. I was nervous because I'd never travelled alone before.",
                "In Thailand, I stayed in hostels and met people from all over the world. I learned to cook Thai food and went diving in the sea. Then I travelled to Vietnam, Cambodia and Laos.",
                "The year taught me so much. I became more independent and confident. I learned to solve problems on my own and to talk to people from different cultures. Now I'm at university, and I feel much more ready for it than I would have been a year ago.",
              ],
            },
            items: [
              {
                question: "Why did the writer take a year off?",
                options: [
                  "to work",
                  "to travel",
                  "to rest",
                  "to study",
                ],
                answer: 1,
              },
              {
                question: "How did the writer save money?",
                options: [
                  "by asking her parents",
                  "by selling things",
                  "by winning a prize",
                  "by working in a café",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel before leaving?",
                options: [
                  "nervous",
                  "excited",
                  "bored",
                  "angry",
                ],
                answer: 0,
              },
              {
                question: "What did the writer learn in Thailand?",
                options: [
                  "to speak Thai",
                  "to drive",
                  "to cook Thai food",
                  "to sail",
                ],
                answer: 2,
              },
              {
                question: "How has the year helped the writer?",
                options: [
                  "She doesn't want to go to university.",
                  "She wants to travel forever.",
                  "She feels more ready for university.",
                  "She feels tired.",
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
            title: "A hotel in the trees",
            text: [
              "In Sweden, there's a hotel where guests sleep in houses in the trees. {1} It's called the Treehotel.",
              "Each room is designed by a different architect. {2} One looks like a bird's nest, and another is a mirrored box that reflects the forest.",
              "The rooms are about four to six metres above the ground. {3} Guests reach them by stairs, ladders or bridges.",
              "The hotel is in a quiet forest far from any town. {4} Guests can go hiking, fishing or watch the Northern Lights.",
              "The hotel has become very popular with tourists. {5} Many guests say it's the most unusual hotel they've ever stayed in.",
            ],
            sentences: [
              "Nobody stays at the hotel.",
              "There's no traffic noise, only the sound of birds.",
              "The rooms are on the ground.",
              "They all look very different.",
              "It's one of the most unusual hotels in the world.",
              "Rooms are often booked months in advance.",
              "The hotel is in a big city.",
              "They are built around the trees without damaging them.",
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
            title: "Chocolate",
            text: [
              "Chocolate is one of the most popular foods in the world. It's made from cacao beans, which grow on trees in {1} countries.",
              "The ancient Maya and Aztec people of Central America were the first to make chocolate. They made a bitter drink from cacao beans and believed it had special {2}.",
              "When the Spanish brought cacao to Europe in the sixteenth century, they added sugar to make it sweeter. Chocolate became very popular with rich people. The first chocolate bar was made in 1847 in England. Today, Switzerland is famous for its chocolate. Swiss people eat about nine kilograms of chocolate per person every year! Dark chocolate is {3} than milk chocolate because it contains less sugar. Some scientists say it may be good for your heart. However, many cacao farmers are very poor. Some organisations work to make sure farmers {4} a fair price. When you buy chocolate, you can look for products that support {5} farming. This way, you can enjoy chocolate and help farmers {6}.",
            ],
            gaps: [
              {
                options: [
                  "tropic",
                  "tropical",
                  "tropics",
                  "tropically",
                ],
                answer: 1,
              },
              {
                options: [
                  "powerful",
                  "powerless",
                  "powered",
                  "powers",
                ],
                answer: 3,
              },
              {
                options: [
                  "healthy",
                  "healthier",
                  "health",
                  "healthily",
                ],
                answer: 1,
              },
              {
                options: [
                  "reception",
                  "receiver",
                  "receipt",
                  "receive",
                ],
                answer: 3,
              },
              {
                options: [
                  "sustainable",
                  "sustain",
                  "sustaining",
                  "sustained",
                ],
                answer: 0,
              },
              {
                options: [
                  "also up",
                  "as well up",
                  "too",
                  "either",
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
            title: "My first trip abroad",
            text: [
              "When I was fourteen, I went abroad {1} the first time. My family went on holiday to Spain.",
              "We stayed in a hotel near the beach in Barcelona. The weather was hot and sunny every day. We went swimming in the sea and built sandcastles on the beach.",
              "We also visited the city. Barcelona has some amazing buildings, {2} the Sagrada Familia, a huge church that's been under construction {3} more than a hundred years. I tried lots of new food, like paella and tapas. My favourite was churros with chocolate! I also tried to speak some Spanish. I wasn't very good, {4} people were very patient with me. The holiday was amazing, and I want to go back {5} day. Since then, I've been to many other countries, but Spain will always be special {6} me.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "like",
                "including",
              ],
              [
                "for",
              ],
              [
                "but",
              ],
              [
                "one",
                "some",
              ],
              [
                "to",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "Learning to drive",
              lines: [
                "I've just started driving lessons! [Great!]",
                "Have you learned to drive? [Tell Alex]",
                "What advice can you give me? [Give tips]",
                "Where would you like to drive to when you can? [Tell Alex]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's great news! Learning to drive is very exciting.\n\nI haven't learned to drive yet, because I'm only sixteen. But I'm going to start lessons next year. My older brother passed his test last month, and he's been telling me all about it.\n\nMy advice is to stay calm and not to rush. Always check your mirrors, and don't drive too fast. Practise as much as you can, and ask your parents to take you out driving at weekends.\n\nWhen I can drive, I'd like to go on a road trip along the coast with my friends. We'd stop at different beaches and towns.\n\nGood luck!\nEge",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My favourite food",
              lines: [
                "What's your favourite food?",
                "Why do you like it?",
                "Can you cook it?",
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
            sample: "Why I love pizza\n\nMy favourite food is pizza. I could eat it every day! I love the crispy base, the tomato sauce and the melted cheese.\n\nI like pizza because there are so many different types. You can put almost anything on top: vegetables, meat, fish or even fruit. My favourite is a pizza with mushrooms, peppers and olives.\n\nYes, I can cook pizza. My grandmother taught me how to make the base from flour, water and yeast. It takes a long time, but homemade pizza is much better than the ones you buy in shops. Every Friday, my family and I make pizza together. It's my favourite day of the week!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was supposed to be a quiet walk in the woods.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was supposed to be a quiet walk in the woods. But when Lucy and her dog reached the old bridge, the dog suddenly ran off into the trees.\n\nLucy chased after him, calling his name. The dog stopped next to a large rock and started barking. Lucy went closer and saw a small fox cub. It was trapped under a fallen branch.\n\nCarefully, Lucy lifted the branch. The fox cub ran into the bushes, where its mother was waiting. Lucy watched them disappear into the forest.\n\nShe hugged her dog. 'Good boy,' she said. 'You saved that little fox.' They walked home happily.",
          },
        },
      ],
    },
  ],
};
