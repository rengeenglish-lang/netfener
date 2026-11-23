import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 32 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_32: CambridgeTest = {
  id: "preliminary-32",
  level: "preliminary",
  no: 32,
  title: "B1 Preliminary · Practice Test 32",
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
                    "The computer room will be closed on Wednesday afternoon for repairs.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't use the computers on Wednesday afternoon.",
                  "The library is closed on Wednesday.",
                  "The computers are new.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've got your book. I'll leave it at the school office for you to collect. Sam",
                  ],
                },
                question: "Where can Max get his book?",
                options: [
                  "at Sam's house",
                  "at the school office",
                  "in the library",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for children under 36 months.",
                    "Small parts could be swallowed.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This isn't safe for very young children.",
                  "This is for babies.",
                  "There are no small parts.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi everyone,",
                    "The class party will be on Friday afternoon instead of Thursday. Please bring some food to share. Mrs Lee",
                  ],
                },
                question: "What should students bring?",
                options: [
                  "presents",
                  "games",
                  "some food",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "Tennis rackets can be hired at reception for £2.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Rackets are free.",
                  "You can rent a racket.",
                  "You must bring your own racket.",
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
            instruction: "The young people below all want to watch a sports event. Read the descriptions of eight events. Decide which event would be the most suitable for each person.",
            options: [
              {
                title: "Football Final",
                text: "The biggest match of the season. Very noisy crowd. Tickets sell out fast.",
              },
              {
                title: "Tennis Tournament",
                text: "Watch top players compete over five days. Quiet audience.",
              },
              {
                title: "Horse Racing",
                text: "Exciting races with famous jockeys. Families welcome.",
              },
              {
                title: "Swimming Gala",
                text: "National swimmers compete in an indoor pool.",
              },
              {
                title: "Marathon",
                text: "Watch thousands of runners race through the city centre. Free to watch.",
              },
              {
                title: "Basketball Game",
                text: "Fast and exciting game with music and dancers.",
              },
              {
                title: "Car Racing",
                text: "Formula 1 cars race around the track. Bring ear protection!",
              },
              {
                title: "Ice Hockey",
                text: "Fast, exciting game on ice. Indoor arena.",
              },
            ],
            items: [
              {
                text: "Elif doesn't have much money and wants to watch an event for free.",
                answer: 4,
              },
              {
                text: "Burak loves fast cars and engines.",
                answer: 6,
              },
              {
                text: "Lale prefers quiet events and loves tennis.",
                answer: 1,
              },
              {
                text: "Kaan loves animals and wants to take his family.",
                answer: 2,
              },
              {
                text: "Asya is a swimmer and wants to watch the best swimmers in the country.",
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
              title: "Starting a new school",
              paragraphs: [
                "When I was fourteen, my family moved to a new city, and I had to change schools. I was really nervous. I'd been at my old school for years, and I had lots of friends there.",
                "On my first day, I didn't know anyone. At lunchtime, I sat alone and felt very lonely. I wanted to go back to my old school.",
                "But in the afternoon, I had a science lesson. The teacher put us in pairs, and I worked with a girl called Emma. We found out that we both loved the same books and films. By the end of the lesson, we were laughing together.",
                "Emma introduced me to her friends, and soon I felt at home. Now, two years later, Emma is my best friend. I've learned that changing schools can be scary, but it can also be a great opportunity to meet new people.",
              ],
            },
            items: [
              {
                question: "How did the writer feel about changing schools?",
                options: [
                  "nervous",
                  "excited",
                  "angry",
                  "happy",
                ],
                answer: 0,
              },
              {
                question: "What happened at lunchtime on the first day?",
                options: [
                  "She met Emma.",
                  "She went home.",
                  "She sat alone.",
                  "She ate with teachers.",
                ],
                answer: 2,
              },
              {
                question: "How did the writer meet Emma?",
                options: [
                  "They sat together at lunch.",
                  "They lived next door.",
                  "They worked together in a lesson.",
                  "They were in the same club.",
                ],
                answer: 2,
              },
              {
                question: "What did the writer and Emma have in common?",
                options: [
                  "They liked the same books and films.",
                  "They both played sports.",
                  "They were the same age.",
                  "They had the same teacher.",
                ],
                answer: 0,
              },
              {
                question: "What has the writer learned?",
                options: [
                  "Changing schools is always bad.",
                  "She should stay at one school.",
                  "Friends are not important.",
                  "Changing schools can be positive.",
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
            title: "The world's largest flower",
            text: [
              "In the rainforests of Indonesia, there's a flower that can grow up to one metre wide. {1} It's called the Rafflesia, and it's the largest single flower in the world.",
              "The Rafflesia is very unusual. {2} It has no leaves, no stem and no roots.",
              "Instead, it lives on another plant and takes all its food and water from it. {3} The flower only blooms for about a week before it dies.",
              "The Rafflesia is also famous for its terrible smell. {4} This attracts flies, which help the plant to reproduce.",
              "Today, the Rafflesia is in danger because the rainforests are being cut down. {5} Scientists and local people are working together to protect it.",
            ],
            sentences: [
              "The Rafflesia smells like roses.",
              "It can weigh up to eleven kilograms.",
              "It smells like rotting meat, which is why it's sometimes called the 'corpse flower'.",
              "The flower lasts for many years.",
              "It doesn't look like most plants.",
              "It's easy to find in any garden.",
              "This makes it very difficult to grow in a garden.",
              "Some kinds are now very rare.",
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
            title: "Chocolate",
            text: [
              "Chocolate is made from the beans of the cacao tree, which grows in hot, rainy countries near the equator. Most of the world's cacao {1} from West Africa.",
              "The ancient Maya and Aztec people of Central America were the first to make a drink from cacao beans. It was bitter, not sweet, and was {2} for special occasions.",
              "When the Spanish brought cacao to Europe in the sixteenth century, they added sugar to make it sweeter. Chocolate drinks quickly became popular {3} rich people. The first chocolate bar was made in England in 1847. Today, people all over the world love chocolate. The Swiss eat more chocolate than {4} else, about nine kilos per person every year! Dark chocolate is healthier than milk chocolate, {5} it contains less sugar and more cacao. But all chocolate should be eaten in {6}.",
            ],
            gaps: [
              {
                options: [
                  "goes",
                  "comes",
                  "arrives up",
                  "brings",
                ],
                answer: 1,
              },
              {
                options: [
                  "done",
                  "taken",
                  "given up",
                  "used",
                ],
                answer: 3,
              },
              {
                options: [
                  "among",
                  "between",
                  "with up",
                  "for up",
                ],
                answer: 0,
              },
              {
                options: [
                  "someone",
                  "no one",
                  "anyone",
                  "everyone",
                ],
                answer: 2,
              },
              {
                options: [
                  "so",
                  "but",
                  "because",
                  "or",
                ],
                answer: 2,
              },
              {
                options: [
                  "moderation",
                  "moderate",
                  "moderately",
                  "modern",
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
            title: "My first concert",
            text: [
              "Last month, I played in my first ever concert. I've been learning the piano {1} I was eight, but I'd never played in front of an audience before.",
              "The concert was at a big hall in the city centre. There were about two hundred people in the audience, {2} my parents and grandparents.",
              "Before I went on stage, I was so nervous that my hands were shaking. My teacher told me to take a deep breath and imagine that I was playing at home. When I sat down at the piano, I {3} my eyes for a moment. Then I started to play. As soon as I heard the music, I felt calmer. I made one small mistake, but I don't think anyone noticed. When I finished, everyone clapped. My grandmother had tears in her eyes. It was {4} of the best moments of my life. I can't wait {5} play in another concert. I'm going to practise even {6}!",
            ],
            answers: [
              [
                "since",
              ],
              [
                "including",
              ],
              [
                "closed",
                "shut",
              ],
              [
                "one",
              ],
              [
                "to",
              ],
              [
                "harder",
                "more",
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "A new phone",
              lines: [
                "I'm going to buy a new phone next week! [Great]",
                "Which phone do you think I should buy? [Give advice]",
                "What do you use your phone for most? [Tell Jamie]",
                "Do you think teenagers spend too much time on their phones? [Give your opinion]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nGreat news! A new phone is always exciting.\n\nI think you should buy one with a really good camera, because you love taking photos. Don't buy the most expensive one, though. The cheaper models are often just as good.\n\nI use my phone mostly for messaging my friends and listening to music. I also use it for school, to check homework and look up information.\n\nI think some teenagers do spend too much time on their phones. I try to put mine away for an hour every evening and do something else, like reading or going for a walk.\n\nBye,\nBora",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best thing about my town",
              lines: [
                "What's the best thing about the place where you live?",
                "Why do you like it?",
                "What would you show a visitor?",
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
            sample: "Why I love my town\n\nI live in a small town by the sea, and the best thing about it is the beach. It's long and sandy, and in summer, the water is warm and clear.\n\nI love it because I can go there whenever I want. After school, my friends and I often go for a swim or play volleyball on the sand. In winter, it's quieter, but I still enjoy walking along the shore.\n\nIf a visitor came to my town, I'd take them to the beach first, of course. Then I'd show them the old harbour, where you can eat fresh fish in small restaurants.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The note on the door said: 'Back in five minutes.'' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The note on the door said: 'Back in five minutes.' Ella had been waiting outside the bookshop for twenty minutes, and nobody had come.\n\nShe was about to leave when an old woman appeared, out of breath. 'I'm so sorry,' she said. 'My cat escaped, and I had to catch him!'\n\nThe woman opened the shop and invited Ella inside. It was full of old books, and it smelled wonderful. Ella found the book she had been looking for and also two more that looked interesting.\n\nThe woman gave her a discount for waiting. Since then, Ella has visited the shop every week.",
          },
        },
      ],
    },
  ],
};
