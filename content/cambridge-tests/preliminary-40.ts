import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 40 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_40: CambridgeTest = {
  id: "preliminary-40",
  level: "preliminary",
  no: 40,
  title: "B1 Preliminary · Practice Test 40",
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
                    "Students who want to join the football team should sign up on the list outside the sports hall.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The football team is full.",
                  "Students should write their names on a list to join the team.",
                  "Trials are in the sports hall.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've got a cold, so I won't be at school tomorrow. Can you tell Mrs Brown? Thanks, Emma",
                  ],
                },
                question: "What does Emma want Lucy to do?",
                options: [
                  "bring her homework",
                  "give a message to a teacher",
                  "visit her",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Not suitable for children under 3.",
                    "Contains small parts.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This is for babies.",
                  "This has no small parts.",
                  "This isn't safe for very young children.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "The school trip has been cancelled because of the snow. We'll try again next month. Mr Grey",
                  ],
                },
                question: "Why was the trip cancelled?",
                options: [
                  "the weather",
                  "the coach broke down",
                  "the teacher was ill",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Audio guides are available in five languages for £3.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Audio guides are free.",
                  "You can pay for a guide in different languages.",
                  "Audio guides are only in English.",
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
            instruction: "The young people below all want to choose a TV series to watch. Read the descriptions of eight series. Decide which series would be the most suitable for each person.",
            options: [
              {
                title: "Wild Earth",
                text: "Documentary series about animals in the most extreme places.",
              },
              {
                title: "The Detectives",
                text: "A crime drama about two police officers solving mysteries in London.",
              },
              {
                title: "Cook Off",
                text: "Teenage chefs compete in exciting cooking challenges.",
              },
              {
                title: "Space Race",
                text: "A drama about the first astronauts to walk on the Moon.",
              },
              {
                title: "Funny Family",
                text: "A comedy about a big, noisy family.",
              },
              {
                title: "History Mysteries",
                text: "Experts investigate unsolved mysteries from the past.",
              },
              {
                title: "Dance Stars",
                text: "Young dancers compete to win a place at a top dance school.",
              },
              {
                title: "Tech Talk",
                text: "Reviews of the latest gadgets and technology.",
              },
            ],
            items: [
              {
                text: "Mert loves crime stories set in big cities.",
                answer: 1,
              },
              {
                text: "Ece wants to learn more about animals.",
                answer: 0,
              },
              {
                text: "Can is a big fan of cooking competitions.",
                answer: 2,
              },
              {
                text: "Defne is interested in astronauts and the history of space travel.",
                answer: 3,
              },
              {
                text: "Lale wants something to make her laugh.",
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
              title: "My grandfather's farm",
              paragraphs: [
                "My grandfather has a small farm in the countryside. He grows vegetables and keeps chickens, goats and two cows. I've spent every summer there since I was a baby.",
                "When I was little, I loved feeding the animals and collecting eggs. My grandfather taught me the names of all the plants and birds. He also showed me how to milk the cows, which was much harder than it looked!",
                "As I got older, I started helping with harder jobs, like repairing fences and harvesting potatoes. My grandfather is eighty now, and he can't do as much as he used to. So my help is really important.",
                "I love spending time on the farm. It's peaceful, and I feel close to nature. When I finish school, I want to study agriculture. One day, I hope to take over my grandfather's farm and keep his traditions alive.",
              ],
            },
            items: [
              {
                question: "How long has the writer been visiting the farm?",
                options: [
                  "for two years",
                  "since last summer",
                  "for a month",
                  "since she was a baby",
                ],
                answer: 3,
              },
              {
                question: "What did the writer find difficult?",
                options: [
                  "feeding the animals",
                  "milking the cows",
                  "collecting eggs",
                  "learning bird names",
                ],
                answer: 1,
              },
              {
                question: "Why is the writer's help important now?",
                options: [
                  "Her grandfather is older and can do less.",
                  "The farm has more animals.",
                  "Her grandfather is ill.",
                  "Her parents asked her.",
                ],
                answer: 0,
              },
              {
                question: "How does the writer feel on the farm?",
                options: [
                  "bored",
                  "lonely",
                  "peaceful",
                  "stressed",
                ],
                answer: 2,
              },
              {
                question: "What does the writer hope to do in the future?",
                options: [
                  "sell the farm",
                  "take over the farm",
                  "become a vet",
                  "move to the city",
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
            title: "An island with no cars",
            text: [
              "On the Greek island of Hydra, there are no cars. {1} Instead, people walk or use donkeys to carry things.",
              "The island's narrow, steep streets are not suitable for cars. {2} So the people decided to keep the island car-free.",
              "Donkeys are used to carry everything, from food to furniture. {3} There are more than a thousand donkeys on the island.",
              "The island is very peaceful and has no traffic noise or pollution. {4} Many famous artists and writers have lived there.",
              "Today, Hydra is a popular destination for tourists who want a quiet holiday. {5} Visitors arrive by boat from Athens.",
            ],
            sentences: [
              "Cars are very popular on the island.",
              "Even motorbikes are not allowed.",
              "This has made it attractive to people looking for inspiration.",
              "Visitors must arrive by plane.",
              "They also wanted to protect the island's traditional character.",
              "There are no animals on the island.",
              "They can even carry building materials up the hills.",
              "The journey takes about two hours.",
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
            title: "The Internet",
            text: [
              "The internet has changed the world in many ways. Today, more than five billion people use it to {1}, work, shop and learn.",
              "The internet began in the 1960s as a way for scientists to share information. In 1989, a British scientist called Tim Berners-Lee {2} the World Wide Web, which made the internet much easier to use.",
              "Today, we can find information about almost anything in seconds. We can also talk to people anywhere in the world through video calls. Many people now {3} from home, thanks to the internet. However, the internet also has disadvantages. Some people spend too much time online and {4} addicted to their phones. There's also a lot of false information, so it's important to check {5}. Cyberbullying is another serious problem. It's important to use the internet {6} and responsibly.",
            ],
            gaps: [
              {
                options: [
                  "communication",
                  "communicative",
                  "communicate",
                  "communicator",
                ],
                answer: 2,
              },
              {
                options: [
                  "invented",
                  "invention",
                  "inventive",
                  "inventor",
                ],
                answer: 0,
              },
              {
                options: [
                  "worker",
                  "working",
                  "worked up",
                  "work",
                ],
                answer: 3,
              },
              {
                options: [
                  "becoming",
                  "become",
                  "became up",
                  "becomes up",
                ],
                answer: 1,
              },
              {
                options: [
                  "sources",
                  "source up",
                  "sauce",
                  "sourcing",
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
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Learning to surf",
            text: [
              "Last summer, I learned to surf. I'd always wanted to try it, {1} I'd never had the chance.",
              "My family went on holiday to a beach in Portugal, and there was a surf school there. I signed up for a week of lessons. On the first day, I spent most of the time falling {2} my board! The waves were very strong, and I got water in my nose and mouth.",
              "But my instructor, Pedro, was very patient. He showed me how to stand up on the board and how to balance. By the third day, I {3} stand up for a few seconds. By the end of the week, I could ride small waves all the way to the beach. It was the {4} feeling in the world! I'm going back to Portugal next summer to practise {5}. I'd recommend surfing to {6} who loves the sea.",
            ],
            answers: [
              [
                "but",
              ],
              [
                "off",
              ],
              [
                "could",
              ],
              [
                "best",
                "greatest",
              ],
              [
                "again",
                "more",
              ],
              [
                "anyone",
                "everyone",
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
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "A new school club",
              lines: [
                "I'm thinking of starting a new club at school. [Great idea]",
                "What kind of club do you think would be popular? [Suggest one]",
                "How could I get people to join? [Give ideas]",
                "Would you join? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nWhat a great idea! Starting a club is a fantastic way to meet new people.\n\nI think a film club would be really popular. You could watch films together every week and then discuss them. You could even make your own short films!\n\nTo get people to join, you could put posters around the school and talk about it in assembly. You could also offer free popcorn at the first meeting. Everyone loves free food!\n\nI'd definitely join if I went to your school. I love watching films, especially comedies and adventure films. Good luck with your club!\n\nBye,\nAda",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The perfect school",
              lines: [
                "What would the perfect school be like?",
                "What subjects would you study?",
                "What facilities would it have?",
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
            sample: "My dream school\n\nThe perfect school would start at ten o'clock in the morning, because teenagers need more sleep! Lessons would be shorter, and there would be more breaks to relax.\n\nStudents would study traditional subjects like maths and science, but also practical ones, like cooking, first aid and how to manage money. I think these skills are very important for life.\n\nThe school would have a big library, a swimming pool, a music studio and a garden where students could grow vegetables. There would also be a quiet room where students could rest. Most importantly, the teachers would be kind and encourage every student to follow their dreams.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The old map had been hidden in the attic for years.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The old map had been hidden in the attic for years. Jack found it while he was looking for his old toys. It showed his village, with a big red X near the river.\n\nJack called his best friend, Ali, and they decided to follow the map. They walked along the river until they found an old tree with a strange mark on it. They started digging.\n\nAfter an hour, they found a small wooden box. Inside, there was a letter from Jack's great-grandfather. It said: 'The real treasure is friendship.'\n\nThe boys laughed. They hadn't found gold, but they'd had a great adventure together.",
          },
        },
      ],
    },
  ],
};
