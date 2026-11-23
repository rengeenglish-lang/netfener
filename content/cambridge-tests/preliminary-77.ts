import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 77 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_77: CambridgeTest = {
  id: "preliminary-77",
  level: "preliminary",
  no: 77,
  title: "B1 Preliminary · Practice Test 77",
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
                    "Swimming lessons for adults on Tuesday evenings.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Adults can have swimming lessons.",
                  "Children can have lessons on Tuesday.",
                  "The pool is closed on Tuesday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've just seen your painting at the art exhibition. It's beautiful! Grace",
                  ],
                },
                question: "Why has Grace sent this message?",
                options: [
                  "to invite Lucy somewhere",
                  "to buy a painting",
                  "to praise Lucy's work",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for washing machines.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can machine wash it.",
                  "Don't wash it at all.",
                  "Don't wash it in a machine.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Can you help me with my science project? I don't understand the instructions. Tom",
                  ],
                },
                question: "What does Tom want?",
                options: [
                  "help with a project",
                  "Ben's project",
                  "new instructions",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Free Wi-Fi. Ask staff for the password.",
                  ],
                },
                question: "How can you use the Wi-Fi?",
                options: [
                  "by paying",
                  "by asking staff for the password",
                  "by bringing your own",
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
            instruction: "The young people below all want to choose a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Knitting Club",
                text: "Learn to knit scarves and hats.",
              },
              {
                title: "Debate Club",
                text: "Discuss topics and practise arguing.",
              },
              {
                title: "Climbing Club",
                text: "Climb indoor walls.",
              },
              {
                title: "Bird Club",
                text: "Watch and learn about birds.",
              },
              {
                title: "Comic Club",
                text: "Draw your own comics.",
              },
              {
                title: "Magic Club",
                text: "Learn magic tricks.",
              },
              {
                title: "Puzzle Club",
                text: "Solve puzzles and riddles.",
              },
              {
                title: "Coding Club",
                text: "Make apps and websites.",
              },
            ],
            items: [
              {
                text: "Elif loves drawing cartoons.",
                answer: 4,
              },
              {
                text: "Can wants to learn magic tricks.",
                answer: 5,
              },
              {
                text: "Zeynep loves birds.",
                answer: 3,
              },
              {
                text: "Mert loves solving puzzles.",
                answer: 6,
              },
              {
                text: "Asya wants to make a website.",
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
              title: "A trip to the Arctic",
              paragraphs: [
                "Last winter, I went on a trip to the Arctic with my dad. We travelled to the north of Norway to see the Northern Lights.",
                "It was extremely cold, sometimes minus thirty degrees. We had to wear lots of warm clothes. During the day, it was dark for most of the time because the sun hardly rose above the horizon.",
                "We went dog-sledding through the snow and saw reindeer. We also stayed in a hotel made of ice! The beds were made of ice too, but we slept in warm sleeping bags.",
                "On our last night, we finally saw the Northern Lights. The sky was full of green and purple lights. It was the most beautiful thing I've ever seen. I'll never forget that trip.",
              ],
            },
            items: [
              {
                question: "Why did they go to the Arctic?",
                options: [
                  "to go skiing",
                  "to visit family",
                  "for work",
                  "to see the Northern Lights",
                ],
                answer: 3,
              },
              {
                question: "What was the weather like?",
                options: [
                  "warm",
                  "extremely cold",
                  "rainy",
                  "windy",
                ],
                answer: 1,
              },
              {
                question: "What did they do during the trip?",
                options: [
                  "went swimming",
                  "went shopping",
                  "went to museums",
                  "went dog-sledding",
                ],
                answer: 3,
              },
              {
                question: "What was special about the hotel?",
                options: [
                  "It was made of ice.",
                  "It was very warm.",
                  "It was very big.",
                  "It was in a tree.",
                ],
                answer: 0,
              },
              {
                question: "When did they see the Northern Lights?",
                options: [
                  "on the first night",
                  "every night",
                  "on their last night",
                  "they didn't see them",
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
            title: "A forest in a building",
            text: [
              "In Milan, Italy, there are two tall buildings covered in trees. {1} They're called the Bosco Verticale, which means 'Vertical Forest'.",
              "The buildings have more than 900 trees and thousands of plants on their balconies. {2} This is the same as a forest of 20,000 square metres.",
              "The plants help to clean the air in the city. {3} They also reduce noise and keep the buildings cool in summer.",
              "Birds and insects have also made their homes in the buildings. {4} Scientists have counted more than twenty species of birds.",
              "The idea has been copied in other cities around the world. {5} Architects believe that green buildings are the future.",
            ],
            sentences: [
              "They take in pollution and produce oxygen.",
              "The trees are made of plastic.",
              "They're very unusual apartment buildings.",
              "Similar buildings are being built in China and the Netherlands.",
              "Nobody lives in the buildings.",
              "Each balcony has its own small garden.",
              "The buildings have no plants.",
              "It's like having a nature reserve in the city.",
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
              "The bicycle is one of the most important {1} ever. It's cheap, healthy and good for the environment.",
              "The first bicycle was made in Germany in 1817. It didn't have pedals, so you had to push it with your feet. Later, pedals were added, and bicycles became much more {2}.",
              "Today, there are more than a billion bicycles in the world. In countries like the Netherlands and Denmark, cycling is very popular. Many people cycle to work and school every day. Cycling is a great way to {3} fit. It's good for your heart and your legs. It also doesn't {4} any pollution. Many cities are building more cycle lanes to make cycling {5}. If you ride a bicycle, you should always wear a helmet. You should also use lights at night so that drivers can {6} you.",
            ],
            gaps: [
              {
                options: [
                  "invent",
                  "inventive",
                  "inventions",
                  "inventor",
                ],
                answer: 2,
              },
              {
                options: [
                  "popularity",
                  "popular",
                  "popularly",
                  "populate",
                ],
                answer: 1,
              },
              {
                options: [
                  "keeping",
                  "kept",
                  "keeps",
                  "keep",
                ],
                answer: 3,
              },
              {
                options: [
                  "production",
                  "produce",
                  "productive",
                  "producer",
                ],
                answer: 1,
              },
              {
                options: [
                  "safe",
                  "safety",
                  "safely",
                  "safer",
                ],
                answer: 3,
              },
              {
                options: [
                  "see",
                  "seeing",
                  "seen",
                  "saw",
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
            title: "A special day",
            text: [
              "Last Saturday was a special day {1} my family. My older sister got married!",
              "The wedding was in a beautiful old hotel in the countryside. More than a hundred people came, {2} relatives from abroad.",
              "My sister looked amazing in her white dress. I was a bridesmaid, so I wore a long blue dress and carried flowers. I was very nervous, but everything went well. After the ceremony, we had a big meal. Then there were speeches. My dad gave a speech about my sister, and everyone cried. In the evening, there was a party {3} music and dancing. Everyone danced, even my grandmother! The party finished {4} midnight. I was so tired, but it was the best day {5}. I'm very happy for my sister. I hope she'll be very happy {6} her new husband.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "including",
              ],
              [
                "with",
              ],
              [
                "at",
                "after",
              ],
              [
                "ever",
              ],
              [
                "with",
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
              subject: "A summer holiday",
              lines: [
                "What are you doing in the summer holidays? [Tell Alex]",
                "Where do you like going on holiday? [Explain]",
                "Would you like to visit me in the summer? [Answer]",
                "What should we do if you visit? [Give ideas]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThis summer, I'm going to spend two weeks at the seaside with my family. Then I'm going to a summer camp in the mountains for a week.\n\nI love going on holiday to the beach, because I love swimming and relaxing in the sun. But I also enjoy visiting new cities and exploring museums.\n\nI'd love to visit you in the summer! Maybe I could come at the end of July, after I get back from camp? I'll ask my parents.\n\nIf I visit, we could go to the beach and swim in the sea. We could also go shopping in the city and visit some interesting places. Maybe we could go to a concert!\n\nBye,\nDila",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! What makes a good teacher?",
              lines: [
                "What makes someone a good teacher?",
                "Tell us about a good teacher you've had.",
                "Why are teachers important?",
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
            sample: "The qualities of a great teacher\n\nI think a good teacher is someone who is patient, kind and passionate about their subject. They should make lessons interesting and help students who are struggling.\n\nThe best teacher I've ever had was my primary school teacher, Mr Smith. He made every lesson fun, with games and stories. He always encouraged us to ask questions and never made us feel stupid. When I found maths difficult, he gave me extra help after school.\n\nTeachers are very important because they shape our future. A good teacher can inspire students to follow their dreams. I think teachers deserve more respect for the important work they do.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The plane was flying through a terrible storm.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The plane was flying through a terrible storm. Rain was hitting the windows, and the plane was shaking.\n\nLily held her mother's hand tightly. She had never been so frightened. The other passengers looked worried too. Some of them were praying.\n\nThen the captain spoke. 'Please don't worry,' he said calmly. 'This plane is very safe. We'll be out of the storm in ten minutes.' His voice was so calm that Lily started to relax.\n\nTen minutes later, the storm stopped. The sun came out, and everyone cheered. When they landed, Lily thanked the captain. 'You were very brave,' she said.",
          },
        },
      ],
    },
  ],
};
