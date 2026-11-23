import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 25 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_25: CambridgeTest = {
  id: "preliminary-25",
  level: "preliminary",
  no: 25,
  title: "B1 Preliminary · Practice Test 25",
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
                    "Students must not use their phones during exams. Phones will be collected at the door.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can use their phones in exams.",
                  "Students will have to give their phones to someone before exams.",
                  "Phones are not allowed in school.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Sophie, the restaurant is fully booked tonight. Shall we try the Chinese one on the corner instead? Kate",
                  ],
                },
                question: "What does Kate suggest?",
                options: [
                  "going to a different restaurant",
                  "eating at home",
                  "going another night",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "For external use only.",
                    "If it gets in your eyes, rinse with water.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can drink this.",
                  "Put it in your eyes.",
                  "You should only use this on the outside of your body.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Thanks for lending me your tent. I'll bring it back on Monday, cleaned and dried. Tom",
                  ],
                },
                question: "What will Tom do on Monday?",
                options: [
                  "borrow Ben's tent",
                  "return something he borrowed",
                  "go camping",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Bring your own bags. Plastic bags cost 10p.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Plastic bags are free.",
                  "You will pay for a plastic bag.",
                  "The supermarket doesn't have bags.",
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
            instruction: "The young people below all want to join an after-school activity. Read the descriptions of eight activities. Decide which activity would be the most suitable for each person.",
            options: [
              {
                title: "Drama Club",
                text: "Act in plays and learn stage skills. Performances twice a year.",
              },
              {
                title: "Coding Club",
                text: "Learn to make websites and games. No experience needed.",
              },
              {
                title: "Choir",
                text: "Sing different styles of music with other students. Concerts at Christmas.",
              },
              {
                title: "Debate Society",
                text: "Discuss important topics and practise public speaking.",
              },
              {
                title: "Gardening Group",
                text: "Grow vegetables and flowers in the school garden.",
              },
              {
                title: "Art Club",
                text: "Painting, drawing and sculpture. Exhibitions in the school hall.",
              },
              {
                title: "Chess Club",
                text: "Play chess and take part in tournaments with other schools.",
              },
              {
                title: "Cooking Club",
                text: "Learn to make simple, healthy meals. Take home what you cook.",
              },
            ],
            items: [
              {
                text: "Arda loves strategy games and wants to compete against other schools.",
                answer: 6,
              },
              {
                text: "Selin loves singing and wants to perform in front of an audience.",
                answer: 2,
              },
              {
                text: "Can wants to grow his own food.",
                answer: 4,
              },
              {
                text: "Ece wants to learn how to create her own computer game.",
                answer: 1,
              },
              {
                text: "Mehmet wants to become more confident speaking in front of people.",
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
              title: "A holiday that changed my life",
              paragraphs: [
                "When I was sixteen, my parents took me on a holiday to Kenya. We went on a safari in a national park, and I saw lions, elephants and giraffes in the wild. It was the most amazing experience of my life.",
                "But what really changed me was our guide, Joseph. He told us about the problems facing the animals. Every year, people hunt elephants and rhinos illegally, and many species are in danger of disappearing.",
                "Joseph had spent his whole life protecting the animals. He worked long hours for very little money, but he loved his job. 'These animals are our future,' he told me.",
                "When I got home, I couldn't stop thinking about what he'd said. I started raising money for a wildlife charity, and I've now decided to study zoology at university. I want to spend my life protecting animals, just like Joseph.",
              ],
            },
            items: [
              {
                question: "What did the writer see on the safari?",
                options: [
                  "a zoo",
                  "a city",
                  "wild animals",
                  "a beach",
                ],
                answer: 2,
              },
              {
                question: "What did Joseph tell the writer about?",
                options: [
                  "his family",
                  "the weather",
                  "dangers to the animals",
                  "his holidays",
                ],
                answer: 2,
              },
              {
                question: "What does the writer say about Joseph's job?",
                options: [
                  "He loved it despite the low pay.",
                  "He was very rich.",
                  "He didn't like it.",
                  "He only worked a few hours.",
                ],
                answer: 0,
              },
              {
                question: "What did the writer do after the holiday?",
                options: [
                  "went back to Kenya",
                  "became a guide",
                  "stopped studying",
                  "started raising money",
                ],
                answer: 3,
              },
              {
                question: "What does the writer want to study?",
                options: [
                  "tourism",
                  "zoology",
                  "history",
                  "medicine",
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
            title: "The library on a bicycle",
            text: [
              "In a city in Colombia, a librarian rides a special bicycle around the streets. {1} It's a mobile library that brings books to children in poor neighbourhoods.",
              "The idea came from a teacher called Luis. {2} He noticed that many children in his city had never visited a library.",
              "Every weekend, Luis rides to a different neighbourhood. {3} Children can borrow books for a week and return them the next time he comes.",
              "Luis also reads stories aloud and organises games. {4} He says that seeing the children's faces when they get a new book is the best part of his week.",
              "The project has been so popular that the city has given Luis money for more bicycles. {5} Now there are ten bike libraries in the city.",
            ],
            sentences: [
              "He parks in a square, and children come running to meet him.",
              "Most children prefer playing video games.",
              "On the back, there's a large box full of books.",
              "Volunteers have been trained to ride them.",
              "Luis only reads books to adults.",
              "Their families couldn't afford to buy books either.",
              "The bicycle is very old and slow.",
              "Many children have started reading every day because of him.",
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
            title: "Bees",
            text: [
              "Bees are very important insects. They help plants to {1} by carrying pollen from flower to flower. Without bees, many fruits and vegetables couldn't grow.",
              "There are about 20,000 kinds of bee in the world. Honey bees are the most well known. They live in large groups called colonies, which can have up to 60,000 bees.",
              "Each colony has one queen bee, whose job is to lay eggs. The worker bees, which are all {2}, collect food and look after the hive. Bees {3} with each other by dancing. When a bee finds flowers, it does a special dance to show the others where they are. Sadly, bee numbers have {4} a lot in recent years. This is because of pesticides, disease and the loss of wild flowers. We can help bees by planting flowers that they like and {5} using chemicals in our gardens. Bees need our help, {6} we need them too!",
            ],
            gaps: [
              {
                options: [
                  "grow up",
                  "make up",
                  "build",
                  "reproduce",
                ],
                answer: 3,
              },
              {
                options: [
                  "female",
                  "woman",
                  "girls",
                  "feminine",
                ],
                answer: 0,
              },
              {
                options: [
                  "talk up",
                  "speak up",
                  "communicate",
                  "tell",
                ],
                answer: 2,
              },
              {
                options: [
                  "fell",
                  "fall",
                  "fallen",
                  "falling",
                ],
                answer: 2,
              },
              {
                options: [
                  "avoiding",
                  "stopping up",
                  "refusing",
                  "missing",
                ],
                answer: 0,
              },
              {
                options: [
                  "or",
                  "unless",
                  "than",
                  "and",
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
            title: "An amazing day",
            text: [
              "Last Saturday was one of the {1} exciting days of my life. My dad took me to watch a Formula 1 race. I've been a fan of motor racing {2} I was little, but I'd never seen a race in person.",
              "The noise of the cars was incredible! They went past so fast that I could hardly see them. We had seats near the finish line, {3} we had a great view.",
              "My favourite driver started in tenth place, but he drove brilliantly and overtook car {4} car. On the last lap, he passed the leader and won the race! Everyone in the crowd jumped up and cheered. After the race, we went to a special area {5} we could see the cars up close. I even got a photo with a mechanic. It was a day I'll never {6}.",
            ],
            answers: [
              [
                "most",
              ],
              [
                "since",
              ],
              [
                "so",
              ],
              [
                "after",
              ],
              [
                "where",
              ],
              [
                "forget",
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
              subject: "Living abroad",
              lines: [
                "My family might move abroad next year. [Really?]",
                "Have you ever thought about living in another country? [Tell Pat]",
                "What do you think would be the hardest thing? [Explain]",
                "How could we stay in touch? [Suggest ideas]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nReally? That's big news! How do you feel about it? I'd be excited but also a bit nervous.\n\nI've often thought about living in another country, especially Spain or Italy. I love the idea of learning a new language and trying different food. Maybe I'll study abroad when I'm older.\n\nI think the hardest thing would be leaving my friends and family. It would also be difficult to start a new school where I didn't know anyone.\n\nIf you move, we could have video calls every week and send each other messages. And I could come and visit you in the summer holidays!\n\nMiss you already,\nSu",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day I'll never forget",
              lines: [
                "Tell us about a day you will always remember.",
                "What happened?",
                "Why was it so memorable?",
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
            sample: "The day I met my hero\n\nThe day I'll never forget was when I met my favourite footballer. I was eleven, and my uncle had got tickets to watch our team train before a big match.\n\nAfter the training, the players came to sign autographs. When my hero walked towards me, I was so nervous that I couldn't speak. He smiled, signed my shirt and asked me what position I played. Then he gave me a high five!\n\nIt was memorable because he was so kind and friendly. It showed me that famous people can also be humble. I still have the shirt on my bedroom wall.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Jack heard the knock on the door, he didn't expect to see his old friend.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Jack heard the knock on the door, he didn't expect to see his old friend. Sam had moved to Australia five years ago, and they had lost touch.\n\n'I'm back!' Sam said with a big smile. 'My family has moved back here. We're living just around the corner.'\n\nJack couldn't believe it. They spent the whole afternoon talking about everything that had happened. Sam told him about surfing on Australian beaches and seeing kangaroos. Jack told him about his new school and his football team.\n\nBy the evening, it felt as if Sam had never left. Jack was so happy to have his best friend back.",
          },
        },
      ],
    },
  ],
};
