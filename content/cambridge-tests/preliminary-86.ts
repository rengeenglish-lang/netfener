import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 86 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_86: CambridgeTest = {
  id: "preliminary-86",
  level: "preliminary",
  no: 86,
  title: "B1 Preliminary · Practice Test 86",
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
                    "Students must return library books before the summer holidays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed in summer.",
                  "Students can keep books in summer.",
                  "Books must be returned before the holidays.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, the bus is late. I'll meet you at the café at 4.30 instead of 4. Kate",
                  ],
                },
                question: "What does Kate tell Lucy?",
                options: [
                  "She will be late.",
                  "She can't come.",
                  "She is at the café.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Shake well. Keep refrigerated.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it warm.",
                  "Mix it and keep it cold.",
                  "Don't shake it.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I've got two spare tickets for the theatre on Friday. Would you like them? Ben",
                  ],
                },
                question: "What is Ben offering?",
                options: [
                  "theatre tickets",
                  "a lift",
                  "dinner",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Large groups must book in advance.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Groups aren't allowed.",
                  "Booking isn't needed.",
                  "Big groups need to book first.",
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
            instruction: "The young people below all want to watch a film. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              {
                title: "The Brave Knight",
                text: "An adventure about a knight who saves a princess.",
              },
              {
                title: "Laugh Out Loud",
                text: "A comedy about a crazy family.",
              },
              {
                title: "Planet Earth",
                text: "A documentary about nature.",
              },
              {
                title: "The Mystery House",
                text: "A detective story.",
              },
              {
                title: "Robot Wars",
                text: "A science-fiction action film.",
              },
              {
                title: "The Little Mermaid",
                text: "An animated film for children.",
              },
              {
                title: "Heartbreak",
                text: "A romantic drama.",
              },
              {
                title: "The Champion",
                text: "The true story of an Olympic runner.",
              },
            ],
            items: [
              {
                text: "Kaan loves science fiction.",
                answer: 4,
              },
              {
                text: "Defne wants to watch a nature film.",
                answer: 2,
              },
              {
                text: "Mert wants to laugh.",
                answer: 1,
              },
              {
                text: "Selin likes true stories about athletes.",
                answer: 7,
              },
              {
                text: "Burak loves detective stories.",
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
              title: "My life in the mountains",
              paragraphs: [
                "I live in a small village high in the mountains. There are only about a hundred people in the village, and the nearest town is an hour away by car.",
                "Life here is very quiet. There are no shops, cafés or cinemas. In winter, the roads are often closed because of snow, and we can't leave the village for days.",
                "But I love living here. The scenery is beautiful, and the air is very fresh. In summer, I go hiking in the mountains with my friends. In winter, we go skiing and sledging.",
                "When I finish school, I'll have to go to the city to study at university. I'm excited, but I'll miss my village. I'm sure I'll come back here to live one day.",
              ],
            },
            items: [
              {
                question: "How many people live in the village?",
                options: [
                  "about a hundred",
                  "about a thousand",
                  "about ten",
                  "about fifty",
                ],
                answer: 0,
              },
              {
                question: "What happens in winter?",
                options: [
                  "The village is very busy.",
                  "Everyone leaves.",
                  "The roads are often closed.",
                  "The shops open.",
                ],
                answer: 2,
              },
              {
                question: "What does the writer do in summer?",
                options: [
                  "goes skiing",
                  "goes hiking",
                  "goes shopping",
                  "goes to the cinema",
                ],
                answer: 1,
              },
              {
                question: "Why will the writer go to the city?",
                options: [
                  "to work",
                  "to live with family",
                  "for a holiday",
                  "to study at university",
                ],
                answer: 3,
              },
              {
                question: "How does the writer feel about the village?",
                options: [
                  "She hates it.",
                  "She loves it.",
                  "She's bored there.",
                  "She wants to leave forever.",
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
            title: "A museum of toys",
            text: [
              "In Germany, there's a museum full of toys from the last 300 years. {1} It's one of the largest toy museums in the world.",
              "The museum has more than 50,000 toys. {2} There are dolls, trains, teddy bears and board games.",
              "One of the most popular exhibits is a doll's house from the eighteenth century. {3} It has more than 100 tiny pieces of furniture.",
              "The museum also has a room where children can play. {4} Parents often enjoy it as much as their children!",
              "The museum is very popular with families. {5} Many adults say it reminds them of their childhood.",
            ],
            sentences: [
              "Nobody visits the museum.",
              "There are toys from different times to try.",
              "The museum only has modern toys.",
              "They come from all over the world.",
              "It's in the city of Nuremberg.",
              "More than 200,000 people visit every year.",
              "Children aren't allowed to play.",
              "It was made for a rich family's children.",
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
            title: "Tigers",
            text: [
              "Tigers are the largest cats in the world. They live in Asia, in forests and grasslands. Each tiger has a {1} pattern of stripes.",
              "Tigers usually live alone. They are excellent hunters and can catch animals much bigger than themselves. They mostly hunt at night.",
              "Unlike most cats, tigers love water. They are very good {2} and often swim to cool down. A hundred years ago, there were about 100,000 tigers in the wild. Today, there are only about 4,000. Tigers are {3} because people hunt them and destroy their forests. Many countries are working to protect tigers. They have created special parks where tigers can live {4}. In some places, tiger numbers are {5} again. This is good news, but there's still a lot of work to do. We must all help to {6} these beautiful animals.",
            ],
            gaps: [
              {
                options: [
                  "uniquely",
                  "uniqueness",
                  "unify",
                  "unique",
                ],
                answer: 3,
              },
              {
                options: [
                  "swim",
                  "swimmers",
                  "swimming",
                  "swam",
                ],
                answer: 1,
              },
              {
                options: [
                  "endangered",
                  "danger",
                  "dangerous",
                  "dangerously",
                ],
                answer: 0,
              },
              {
                options: [
                  "safe",
                  "safety",
                  "safely",
                  "save",
                ],
                answer: 2,
              },
              {
                options: [
                  "increase",
                  "increasing",
                  "increased",
                  "increasingly",
                ],
                answer: 1,
              },
              {
                options: [
                  "protection",
                  "protective",
                  "protected",
                  "protect",
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
            title: "A special day",
            text: [
              "Last Saturday, my grandmother celebrated her ninetieth birthday. The whole family came together {1} a big party at her house.",
              "More than fifty people came, including cousins I hadn't seen for years. We decorated the house with balloons and flowers. My aunt made a huge cake {2} ninety candles!",
              "After lunch, everyone told stories about my grandmother. She has had an amazing life. She grew up {3} a farm and worked as a nurse for forty years. Then my grandmother gave a speech. She said that her family was the most important thing {4} her life. Everyone cried. In the evening, we danced to old songs that my grandmother loved. She danced too, even at ninety! It was a wonderful day. I hope I'll have {5} happy a life as my grandmother. She's my hero, and I love her very {6}.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "with",
              ],
              [
                "on",
              ],
              [
                "in",
              ],
              [
                "as",
              ],
              [
                "much",
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
              subject: "A holiday",
              lines: [
                "I'm going on holiday next week! [Lucky you!]",
                "Where do you usually go on holiday? [Tell Kim]",
                "What should I take with me? [Give advice]",
                "Will you send me a postcard? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nLucky you! Where are you going? I hope you have a fantastic time.\n\nI usually go on holiday to the seaside with my family. We stay in a small hotel near the beach and spend most of the day swimming and relaxing. Sometimes we go to the mountains instead.\n\nYou should take sun cream, sunglasses and a hat if you're going somewhere hot. Don't forget your camera to take lots of photos. A good book is also a good idea for reading on the beach.\n\nOf course I'll send you a postcard if you send me one! I'd love to hear about your holiday.\n\nBye,\nIrmak",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The best present I've received",
              lines: [
                "What's the best present you've ever received?",
                "Who gave it to you?",
                "Why was it special?",
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
            sample: "A very special watch\n\nThe best present I've ever received is a watch from my grandfather. He gave it to me on my sixteenth birthday.\n\nThe watch isn't new or expensive. It's very old, and it belonged to my grandfather's father. My grandfather wore it every day for fifty years. When he gave it to me, he told me stories about his father and the life they had.\n\nThe watch is special because it connects me to my family's history. Every time I look at it, I think about my grandfather and great-grandfather. I'll take good care of it, and one day I'll give it to my own children.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was the most important football match of the season.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was the most important football match of the season. If Tom's team won, they would be champions. The score was 1–1, and there were only two minutes left.\n\nTom got the ball in the middle of the pitch. He ran towards the goal, past one player, then another. The crowd was shouting his name.\n\nHe was close to the goal. The goalkeeper came towards him. Tom kicked the ball as hard as he could. It flew past the goalkeeper and into the net!\n\nThe crowd went wild. Tom's teammates ran to hug him. They had won the championship! It was the best moment of Tom's life.",
          },
        },
      ],
    },
  ],
};
