import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 47 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_47: CambridgeTest = {
  id: "preliminary-47",
  level: "preliminary",
  no: 47,
  title: "B1 Preliminary · Practice Test 47",
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
                    "Children's swimming lessons are on Saturday mornings. Please book at reception.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Adults can have lessons on Saturdays.",
                  "Lessons are free.",
                  "Children can have lessons on Saturday mornings.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, I've got a spare ticket for the football match on Sunday. Do you want it? Dan",
                  ],
                },
                question: "What is Dan offering Jo?",
                options: [
                  "a lift",
                  "a ticket",
                  "a football",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for freezing.",
                    "Defrost thoroughly before cooking.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Cook it while it's frozen.",
                  "You can freeze it.",
                  "Don't freeze it.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "The school concert has been cancelled because the music teacher is ill. We'll have it next month instead. Mrs Clark",
                  ],
                },
                question: "Why was the concert cancelled?",
                options: [
                  "The hall is closed.",
                  "There weren't enough tickets.",
                  "A teacher is ill.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Popcorn and drinks can be bought in the foyer.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can buy snacks in the cinema.",
                  "Food is not allowed.",
                  "Snacks are free.",
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
            instruction: "The young people below all want to go somewhere this weekend. Read the descriptions of eight places. Decide which place would be the most suitable for each person.",
            options: [
              {
                title: "Water Park",
                text: "Slides, pools and a wave machine. Great for families.",
              },
              {
                title: "Art Gallery",
                text: "Modern art exhibitions and free drawing workshops.",
              },
              {
                title: "Zoo",
                text: "More than 500 animals, including lions, elephants and penguins.",
              },
              {
                title: "Climbing Centre",
                text: "Indoor climbing walls for all levels.",
              },
              {
                title: "Farmers' Market",
                text: "Local food, crafts and live music on Saturday mornings.",
              },
              {
                title: "Science Museum",
                text: "Interactive exhibitions and a planetarium.",
              },
              {
                title: "Ice Rink",
                text: "Skating for all ages. Skates can be hired.",
              },
              {
                title: "Cinema",
                text: "The latest films, including a special children's film on Sunday.",
              },
            ],
            items: [
              {
                text: "Defne loves drawing and wants to try a workshop.",
                answer: 1,
              },
              {
                text: "Kaan wants to see wild animals.",
                answer: 2,
              },
              {
                text: "Asya wants to buy fresh food and listen to music.",
                answer: 4,
              },
              {
                text: "Emre wants to try skating but doesn't have skates.",
                answer: 6,
              },
              {
                text: "Lale is interested in space.",
                answer: 5,
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
              title: "My first trip alone",
              paragraphs: [
                "Last summer, when I was seventeen, I travelled alone for the first time. I took a train to Italy to visit my pen friend, Giulia, whom I'd been writing to for three years.",
                "I was very nervous before I left. My parents gave me lots of advice, and I checked my tickets about a hundred times. The journey took twelve hours, and I had to change trains twice.",
                "At one station, I got on the wrong train! I didn't realise until a kind woman told me. She helped me get off at the next station and find the right train. I was very grateful.",
                "When I finally arrived, Giulia was waiting for me at the station. We hugged like old friends. I spent two wonderful weeks with her family. The trip made me much more confident, and I'm already planning my next adventure.",
              ],
            },
            items: [
              {
                question: "Why did the writer go to Italy?",
                options: [
                  "to visit her pen friend",
                  "for a holiday with family",
                  "to study",
                  "to work",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel before she left?",
                options: [
                  "excited",
                  "bored",
                  "relaxed",
                  "nervous",
                ],
                answer: 3,
              },
              {
                question: "What problem did the writer have?",
                options: [
                  "She lost her ticket.",
                  "She got on the wrong train.",
                  "She missed her train.",
                  "She lost her bag.",
                ],
                answer: 1,
              },
              {
                question: "Who helped the writer?",
                options: [
                  "a woman on the train",
                  "Giulia",
                  "her parents",
                  "a police officer",
                ],
                answer: 0,
              },
              {
                question: "How did the trip change the writer?",
                options: [
                  "She decided never to travel again.",
                  "She became more nervous.",
                  "She became more confident.",
                  "She didn't change.",
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
            title: "A forest in the desert",
            text: [
              "In the Sahara Desert, a project called the Great Green Wall is trying to stop the desert from growing. {1} The idea is to plant a wall of trees across Africa.",
              "The desert has been getting bigger for many years. {2} This makes it very difficult for people to grow food.",
              "The Great Green Wall will be about 8,000 kilometres long. {3} When it's finished, it will be the largest living structure on Earth.",
              "So far, millions of trees have been planted. {4} In some areas, farmers can now grow crops again.",
              "The project has also created thousands of jobs. {5} Local people are paid to plant and look after the trees.",
            ],
            sentences: [
              "This has helped to reduce poverty in the region.",
              "Climate change and the cutting down of trees have made the problem worse.",
              "Nobody lives near the Sahara.",
              "It started in 2007 and involves more than twenty countries.",
              "This has helped to bring life back to the land.",
              "The trees are made of plastic.",
              "It will stretch from Senegal in the west to Djibouti in the east.",
              "The desert is getting smaller.",
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
            title: "Dolphins",
            text: [
              "Dolphins are some of the most intelligent animals in the world. They are mammals, which means they breathe air and give birth to live {1}.",
              "Dolphins live in groups called pods, which can have up to a thousand members. They are very {2} animals and like to play together. They communicate using clicks, whistles and body movements.",
              "Dolphins are famous for their {3}. They can learn tricks and solve problems. Scientists have discovered that each dolphin has its own special whistle, which is like a name. Dolphins use echolocation to find food. They send out sounds that {4} off objects and come back to them. This tells them where their food is. Sadly, dolphins face many dangers. Many are {5} in fishing nets, and pollution is damaging their habitats. We need to protect these {6} creatures.",
            ],
            gaps: [
              {
                options: [
                  "baby",
                  "babyish",
                  "babies",
                  "babied",
                ],
                answer: 2,
              },
              {
                options: [
                  "society",
                  "socially",
                  "social",
                  "socialise",
                ],
                answer: 2,
              },
              {
                options: [
                  "intelligence",
                  "intelligent",
                  "intelligently",
                  "intellect up",
                ],
                answer: 0,
              },
              {
                options: [
                  "bouncing",
                  "bounced",
                  "bouncy",
                  "bounce",
                ],
                answer: 3,
              },
              {
                options: [
                  "catch",
                  "caught",
                  "catching",
                  "catches",
                ],
                answer: 1,
              },
              {
                options: [
                  "beautiful",
                  "beauty",
                  "beautifully",
                  "beautify",
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
            title: "My grandmother",
            text: [
              "My grandmother is eighty years old, but she's very active. She goes swimming every morning {1} walks her dog twice a day.",
              "She lives in a small village by the sea, and I visit her every summer. When I'm there, we go for long walks along the beach and collect shells. She tells me stories about {2} she was young.",
              "My grandmother grew up during a difficult time. Her family was very poor, and she had to leave school {3} she was fourteen to help her parents. But she never stopped learning. She reads lots of books and is very interested in science. Last year, she started learning to use a computer. Now she sends me emails every week! I admire her {4} much. She's taught me that you're never too old to learn something new. I hope I'll be {5} active as her when I'm her {6}.",
            ],
            answers: [
              [
                "and",
              ],
              [
                "when",
              ],
              [
                "when",
              ],
              [
                "so",
                "very",
              ],
              [
                "as",
              ],
              [
                "age",
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
            instruction: "Read this email from your English-speaking friend Sam and the notes you have made. Write your email to Sam using all the notes. Write about 100 words.",
            input: {
              from: "Sam",
              subject: "A cooking competition",
              lines: [
                "I'm going to enter a cooking competition next month! [Wow!]",
                "What dish do you think I should cook? [Suggest one]",
                "Have you ever entered a competition? [Tell Sam]",
                "Would you like to come and watch? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Sam,\n\nWow, that's amazing! You're such a good cook, so I'm sure you'll do really well.\n\nI think you should cook your famous chicken curry. Everyone loves it, and it smells delicious. You could also make a chocolate dessert to finish, because judges usually love chocolate!\n\nI entered a drawing competition last year. I drew a picture of my grandmother's garden. I didn't win, but I came third, and my picture was displayed at the town hall.\n\nOf course I'd love to come and watch! Just tell me when and where it is.\n\nGood luck!\nIrmak",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An unusual hobby",
              lines: [
                "Do you have an unusual hobby?",
                "How did you start it?",
                "What do you enjoy about it?",
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
            sample: "Collecting old maps\n\nMy hobby is quite unusual: I collect old maps. I started when I was twelve, when my grandfather gave me a map of our town from 1900. I loved comparing it to how the town looks today.\n\nNow I have more than fifty maps, from all over the world. Some are very old and valuable. I find them at markets, antique shops and online. My favourite is a map of the world from 1850, which shows some countries that don't exist any more.\n\nI enjoy my hobby because it teaches me about history and geography. Every map tells a story about the past. It's also exciting to find rare maps.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Ella opened the box, she couldn't believe what was inside.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Ella opened the box, she couldn't believe what was inside. It was a beautiful old necklace with a red stone in the middle.\n\nThe box had arrived that morning, with a letter from a lawyer. It said that Ella's great-aunt, whom she had never met, had left her the necklace. Ella had never even known she had a great-aunt!\n\nShe showed the necklace to her mother, who explained that her great-aunt had lived in Scotland and had been a famous singer. She had sung all over the world.\n\nElla decided to find out more about her great-aunt. She discovered a whole family history she had never known.",
          },
        },
      ],
    },
  ],
};
