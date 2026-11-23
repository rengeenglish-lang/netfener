import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 36 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_36: CambridgeTest = {
  id: "preliminary-36",
  level: "preliminary",
  no: 36,
  title: "B1 Preliminary · Practice Test 36",
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
                    "The art room is open at lunchtime for students who want to finish their projects.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Art lessons are at lunchtime.",
                  "Students can work on art at lunch.",
                  "The art room is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ben, the shop didn't have the game you wanted. Shall I order it online? Dad",
                  ],
                },
                question: "What does Dad want to know?",
                options: [
                  "if he should buy the game on the internet",
                  "which shop to go to",
                  "how much the game costs",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Wash fruit before eating.",
                    "Store in the fridge.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "The fruit is ready to eat.",
                  "Keep it in a warm place.",
                  "You should clean the fruit first.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I've found your scarf in my car. I'll bring it to school tomorrow. Holly",
                  ],
                },
                question: "What will Holly do?",
                options: [
                  "buy Lucy a scarf",
                  "drive Lucy to school",
                  "return something Lucy forgot",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK CAFÉ",
                    "Open daily in summer. Weekends only from October to March.",
                  ],
                },
                question: "When is the café open in winter?",
                options: [
                  "only at weekends",
                  "every day",
                  "never",
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
            instruction: "The young people below all want to take a class at the community centre. Read the descriptions of eight classes. Decide which class would be the most suitable for each person.",
            options: [
              {
                title: "Pottery",
                text: "Make bowls and cups on a potter's wheel. Wednesday evenings.",
              },
              {
                title: "Self-Defence",
                text: "Learn basic self-defence skills. Saturday mornings.",
              },
              {
                title: "Photography",
                text: "Take better photos with your phone. Monday evenings.",
              },
              {
                title: "Guitar",
                text: "Group lessons for beginners. Instruments can be borrowed. Thursday evenings.",
              },
              {
                title: "First Aid",
                text: "Learn how to help in an emergency. One-day course on Sunday.",
              },
              {
                title: "Yoga",
                text: "Relax and improve your flexibility. Tuesday mornings.",
              },
              {
                title: "Creative Writing",
                text: "Write stories and poems with a published author. Friday evenings.",
              },
              {
                title: "Coding",
                text: "Make simple apps and games. Laptops provided. Saturday afternoons.",
              },
            ],
            items: [
              {
                text: "Defne wants to learn to play an instrument but doesn't have one.",
                answer: 3,
              },
              {
                text: "Burak wants to know what to do if someone is hurt and is free on Sunday.",
                answer: 4,
              },
              {
                text: "Selin loves making things with her hands and is free on Wednesday evenings.",
                answer: 0,
              },
              {
                text: "Kaan wants to make a game but doesn't have a computer.",
                answer: 7,
              },
              {
                text: "Elif wants to write a story and get advice from a real writer.",
                answer: 6,
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
              title: "Learning a new language",
              paragraphs: [
                "When I was fifteen, I decided to learn Japanese. I'd always loved Japanese films and comics, and I wanted to understand them without subtitles. My friends thought I was crazy, because Japanese is one of the hardest languages to learn.",
                "At first, it was very difficult. Japanese uses three different writing systems, and there are thousands of characters to learn. I spent hours every evening practising writing them.",
                "After a few months, I found a Japanese student online who wanted to improve her English. We started having video calls twice a week. She helped me with my Japanese, and I helped her with her English.",
                "Now, three years later, I can read simple books and have conversations in Japanese. Last summer, I visited Japan for the first time. Being able to speak to people in their own language was amazing. Learning Japanese has been the best decision I've ever made.",
              ],
            },
            items: [
              {
                question: "Why did the writer want to learn Japanese?",
                options: [
                  "for school",
                  "to understand Japanese films and comics",
                  "because her parents told her",
                  "to get a job",
                ],
                answer: 1,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "finding a teacher",
                  "speaking",
                  "listening",
                  "learning the writing systems",
                ],
                answer: 3,
              },
              {
                question: "How did the writer practise?",
                options: [
                  "at a language school",
                  "with a Japanese student online",
                  "in Japan",
                  "with her family",
                ],
                answer: 1,
              },
              {
                question: "What can the writer do now?",
                options: [
                  "teach Japanese",
                  "write novels in Japanese",
                  "speak perfectly",
                  "read simple books in Japanese",
                ],
                answer: 3,
              },
              {
                question: "How does the writer feel about learning Japanese?",
                options: [
                  "It was the right choice.",
                  "She regrets it.",
                  "It was too difficult.",
                  "She has stopped.",
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
            title: "The library in a phone box",
            text: [
              "In many villages in England, old red telephone boxes are no longer used for phone calls. {1} Instead, some of them have been turned into tiny libraries.",
              "The idea started in a small village in Somerset. {2} Local people put shelves inside the phone box and filled them with books.",
              "Anyone can take a book from the library or leave one they've finished reading. {3} There's no need for a library card or opening hours.",
              "The idea has become very popular, and there are now hundreds of phone box libraries across the country. {4} Some also have DVDs and children's toys.",
              "Villagers say the libraries have brought their communities closer together. {5} People often stop to chat when they're choosing a book.",
            ],
            sentences: [
              "You have to pay to use the libraries.",
              "Most people now have mobile phones.",
              "Some are decorated with flowers and paintings.",
              "The libraries are only open on Sundays.",
              "It had lost its village shop and wanted somewhere to share books.",
              "Phone boxes are still used for calls.",
              "The library works on trust.",
              "They have become meeting places for neighbours.",
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
            title: "Elephants",
            text: [
              "Elephants are the largest land animals on Earth. There are two main {1}: African elephants and Asian elephants. African elephants are bigger and have larger ears.",
              "Elephants live in family groups led by the oldest female. They are very intelligent animals and have excellent memories. They can remember other elephants and places for many years.",
              "An elephant's trunk is very {2}. Elephants use it to breathe, smell, drink, pick up food and even say hello. Elephants eat a lot. An adult can eat up to 150 kilograms of food a day! They spend about sixteen hours a day {3}. Sadly, elephants are in danger. People hunt them for their ivory tusks, and their habitats are being {4}. In some countries, the number of elephants has fallen {5}. Many organisations are working to protect elephants and {6} ivory trade.",
            ],
            gaps: [
              {
                options: [
                  "types",
                  "type",
                  "typical",
                  "typing",
                ],
                answer: 0,
              },
              {
                options: [
                  "use",
                  "usefully",
                  "useful",
                  "usage",
                ],
                answer: 2,
              },
              {
                options: [
                  "eat",
                  "eating",
                  "ate",
                  "eaten",
                ],
                answer: 1,
              },
              {
                options: [
                  "destroy",
                  "destroying",
                  "destruction",
                  "destroyed",
                ],
                answer: 3,
              },
              {
                options: [
                  "dramatic",
                  "dramatically",
                  "drama",
                  "dramatise",
                ],
                answer: 1,
              },
              {
                options: [
                  "end up",
                  "finish up",
                  "close up",
                  "stop",
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
            title: "A special weekend",
            text: [
              "Last weekend was my grandparents' fiftieth wedding anniversary. To celebrate, the whole family went {1} a big hotel by the sea.",
              "More than thirty people came, including cousins I hadn't seen {2} years. On Saturday, we had a huge lunch in the hotel restaurant. Then my grandfather gave a speech. He told us how he met my grandmother {3} they were both eighteen. It was very romantic!",
              "In the evening, there was a party with music and dancing. My grandparents danced together, and everyone clapped. On Sunday, we went for a walk along the beach and took lots of photos. My grandmother said it was the {4} day of her life. I hope I'll have a marriage {5} happy as theirs one day. It was a weekend I'll {6} forget.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "for",
                "in",
              ],
              [
                "when",
              ],
              [
                "best",
                "happiest",
              ],
              [
                "as",
              ],
              [
                "never",
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
            instruction: "Read this email from your English-speaking friend Charlie and the notes you have made. Write your email to Charlie using all the notes. Write about 100 words.",
            input: {
              from: "Charlie",
              subject: "A school play",
              lines: [
                "Our school is putting on a play next month. [Great!]",
                "Would you like to come and watch? [Answer]",
                "Have you ever been in a play? [Tell Charlie]",
                "What kind of plays do you enjoy? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Charlie,\n\nThat's great! I love going to the theatre, so I'm sure it will be fun.\n\nI'd love to come and watch. Can you tell me the date and time? I'll ask my mum if she can drive me there.\n\nI was in a play once, when I was ten. I played a tree in a play about a magic forest! I didn't have any lines, but I enjoyed being on stage. Since then, I've preferred watching plays rather than acting in them.\n\nI enjoy funny plays the most, because I love laughing. I also like musicals, especially ones with good songs.\n\nSee you soon,\nZeynep",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The most important person in my life",
              lines: [
                "Who is the most important person in your life?",
                "Why are they important to you?",
                "What have you learned from them?",
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
            sample: "My mum, my hero\n\nThe most important person in my life is my mum. She works very hard as a nurse, often doing night shifts, but she always finds time for me and my brother.\n\nShe's important to me because she always supports me, whatever I do. When I failed a maths test last year, she didn't get angry. Instead, she helped me study every evening until I improved.\n\nFrom my mum, I've learned to be kind and to never give up. She always says that if you work hard and help other people, good things will happen. I hope I can be as strong and caring as she is one day.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The ship had been sailing for three days when the storm began.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The ship had been sailing for three days when the storm began. Huge waves crashed against the sides, and the wind howled.\n\nTom was a young sailor on his first journey. He was terrified, but the captain stayed calm. 'Everyone, hold on tight!' she shouted. 'We'll get through this.'\n\nFor hours, the crew worked together to keep the ship safe. Tom helped to tie down the cargo and pump water out of the ship. He was cold, wet and exhausted, but he didn't stop.\n\nWhen the sun finally came out, the sea was calm again. The captain smiled at Tom. 'You did well,' she said. Tom felt very proud.",
          },
        },
      ],
    },
  ],
};
