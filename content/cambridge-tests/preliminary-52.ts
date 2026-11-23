import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 52 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_52: CambridgeTest = {
  id: "preliminary-52",
  level: "preliminary",
  no: 52,
  title: "B1 Preliminary · Practice Test 52",
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
                    "Lockers must be emptied by the end of the day. Anything left will be removed.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Lockers can be used overnight.",
                  "You must take your things out of the lockers before you leave.",
                  "The lockers are broken.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I can't find the address of the restaurant. Can you send it to me? Lucy",
                  ],
                },
                question: "What does Lucy need?",
                options: [
                  "a lift",
                  "the restaurant's address",
                  "the restaurant's phone number",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Ready to eat.",
                    "No cooking required.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You must cook it.",
                  "It's raw.",
                  "You don't need to cook it.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "I've finished reading your book. It was great! I'll give it back on Monday. Max",
                  ],
                },
                question: "What does Max say?",
                options: [
                  "He will return the book.",
                  "He wants to buy the book.",
                  "He didn't like the book.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "Please talk quietly in this area.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't talk at all.",
                  "You should speak softly here.",
                  "You can talk loudly.",
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
            instruction: "The young people below all want to choose a summer course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Film Making",
                text: "Make a short film with a team. Cameras provided.",
              },
              {
                title: "Sailing",
                text: "Learn to sail on the sea. Must be a good swimmer.",
              },
              {
                title: "Fashion Design",
                text: "Design and make your own clothes.",
              },
              {
                title: "Rock Climbing",
                text: "Climb on real rocks in the mountains.",
              },
              {
                title: "Cooking",
                text: "Learn to cook dishes from around the world.",
              },
              {
                title: "Robotics",
                text: "Build and program your own robot.",
              },
              {
                title: "Creative Writing",
                text: "Write stories and poems with a famous author.",
              },
              {
                title: "Horse Riding",
                text: "Learn to ride and look after horses.",
              },
            ],
            items: [
              {
                text: "Elif loves making her own clothes.",
                answer: 2,
              },
              {
                text: "Can wants to make a movie with friends.",
                answer: 0,
              },
              {
                text: "Burak loves technology and building things.",
                answer: 5,
              },
              {
                text: "Zeynep is a strong swimmer who loves the sea.",
                answer: 1,
              },
              {
                text: "Asya loves animals, especially horses.",
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
              title: "A life-changing trip",
              paragraphs: [
                "When I was seventeen, I went on a school trip to Kenya. We spent two weeks helping to build a school in a small village. It was my first time in Africa, and I didn't know what to expect.",
                "The village was very poor. Most families lived in small houses with no electricity or running water. The children had to walk for hours to get to the nearest school.",
                "We worked hard every day, carrying bricks and mixing cement. In the evenings, we played football with the local children. Even though they had very little, they were always smiling and laughing.",
                "On our last day, the school was finished. The children sang a song to thank us. I cried because I was so moved. The trip made me realise how lucky I am. Now I'm studying to become a teacher, and I hope to go back to Kenya one day.",
              ],
            },
            items: [
              {
                question: "What did the students do in Kenya?",
                options: [
                  "went on safari",
                  "taught English",
                  "visited museums",
                  "helped build a school",
                ],
                answer: 3,
              },
              {
                question: "What problem did the children have?",
                options: [
                  "They didn't like school.",
                  "The school was far away.",
                  "They had no books.",
                  "They were ill.",
                ],
                answer: 1,
              },
              {
                question: "What did the students do in the evenings?",
                options: [
                  "played football",
                  "studied",
                  "watched TV",
                  "went shopping",
                ],
                answer: 0,
              },
              {
                question: "Why did the writer cry on the last day?",
                options: [
                  "She was sad to leave.",
                  "She was hurt.",
                  "She was very moved.",
                  "She was tired.",
                ],
                answer: 2,
              },
              {
                question: "What is the writer doing now?",
                options: [
                  "working in Kenya",
                  "studying to be a teacher",
                  "building schools",
                  "studying medicine",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A train that goes through the sea",
            text: [
              "Between England and France, there's a tunnel under the sea. {1} It's called the Channel Tunnel.",
              "The tunnel was opened in 1994. {2} It took six years to build and cost billions of pounds.",
              "The tunnel is about fifty kilometres long. {3} Of these, about thirty-eight kilometres are under the sea.",
              "Trains travel through the tunnel at speeds of up to 160 kilometres an hour. {4} The journey from London to Paris now takes just over two hours.",
              "The tunnel has made travel between the two countries much easier. {5} About ten million passengers use it every year.",
            ],
            sentences: [
              "The tunnel is only for cars.",
              "Trains carry passengers and cars from one country to the other.",
              "This is much faster than going by boat.",
              "Nobody uses the tunnel.",
              "More than 13,000 workers helped to build it.",
              "The tunnel was built in a week.",
              "It's one of the longest underwater tunnels in the world.",
              "Many people now go to France just for the day.",
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
            title: "Recycling plastic",
            text: [
              "Plastic is one of the most useful materials ever invented. It's cheap, light and strong. But it's also a big {1} for the environment.",
              "Every year, millions of tonnes of plastic end up in the oceans. It can take hundreds of years to {2} down. Sea animals often mistake plastic for food, which can make them ill or kill them.",
              "Recycling plastic is one way to help. When plastic is recycled, it can be {3} into new products, like clothes, bags and even furniture. However, only about 9% of all plastic has ever been recycled. Many people are now trying to use less plastic. They take their own bags to the shops and use reusable water bottles. Some countries have {4} single-use plastic bags. Scientists are also developing new types of plastic that {5} more quickly. If we all make small changes, we can help {6} our planet.",
            ],
            gaps: [
              {
                options: [
                  "problematic",
                  "problems up",
                  "problem",
                  "problematically",
                ],
                answer: 2,
              },
              {
                options: [
                  "break",
                  "breaking",
                  "broke",
                  "broken",
                ],
                answer: 0,
              },
              {
                options: [
                  "making",
                  "make",
                  "makes",
                  "made",
                ],
                answer: 3,
              },
              {
                options: [
                  "ban",
                  "banned",
                  "banning",
                  "bans",
                ],
                answer: 1,
              },
              {
                options: [
                  "decompose",
                  "decomposition",
                  "decomposing",
                  "decomposed",
                ],
                answer: 0,
              },
              {
                options: [
                  "protection",
                  "protective",
                  "protect",
                  "protected",
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
            title: "A special birthday",
            text: [
              "Last month, my grandfather celebrated his ninetieth birthday. The whole family came together {1} a big party at his house.",
              "More than forty people came, including cousins from abroad {2} I hadn't seen for years. We decorated the house with balloons and made a big banner that said 'Happy 90th Birthday!'",
              "My grandmother made his favourite cake, a chocolate cake {3} cherries on top. We also showed a video with photos from his life. He laughed and cried {4} the same time. Then my grandfather gave a speech. He said that his family was the most important thing in his life. Everyone clapped. In the evening, we danced to old songs {5} he loved when he was young. It was a wonderful day. I hope I'll have such a happy life {6} he has had.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "whom",
                "who",
                "that",
              ],
              [
                "with",
              ],
              [
                "at",
              ],
              [
                "that",
                "which",
              ],
              [
                "as",
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
              subject: "A sports club",
              lines: [
                "I've just joined a new sports club! [Great!]",
                "What sports do you do? [Tell Alex]",
                "Which sport do you think I would enjoy? [Suggest one]",
                "Would you like to try my sport with me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's great news! Joining a club is a good way to keep fit and make new friends.\n\nI do lots of sports. I play football for my school team and go swimming every Saturday morning. I also enjoy cycling in the countryside with my dad.\n\nI think you would enjoy tennis. You're very fast and have good reactions, so you'd probably be good at it. It's also a sport you can play with just one other person, so it's easy to organise.\n\nYes, I'd love to try your sport with you! Just tell me when and where, and I'll come along.\n\nBye,\nEmre",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An important lesson",
              lines: [
                "Tell us about an important lesson you've learned.",
                "How did you learn it?",
                "How has it changed you?",
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
            sample: "The value of kindness\n\nThe most important lesson I've learned is that small acts of kindness can make a big difference. I learned this when I was thirteen.\n\nI was having a very bad day. I'd failed a test and argued with my best friend. On the bus home, I was crying. An old woman sitting next to me gave me a tissue and asked if I was OK. We talked for the whole journey, and by the end, I felt much better.\n\nSince then, I've tried to be kind to everyone, even strangers. I smile at people, help my neighbours and listen to my friends. I've learned that kindness costs nothing but means everything.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The lights went out, and the whole house was dark.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The lights went out, and the whole house was dark. Emma was alone at home, and outside, a storm was raging.\n\nShe felt for her phone and turned on the torch. Her heart was beating fast. She heard a loud noise from the kitchen. Something had fallen over!\n\nEmma walked slowly towards the kitchen. When she opened the door, she saw her cat sitting on the table, looking guilty. It had knocked a glass onto the floor.\n\nEmma laughed with relief. She found some candles and lit them. Then she sat on the sofa with her cat and waited for the storm to pass. When her parents came home, she told them the story.",
          },
        },
      ],
    },
  ],
};
