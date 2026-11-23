import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 67 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_67: CambridgeTest = {
  id: "preliminary-67",
  level: "preliminary",
  no: 67,
  title: "B1 Preliminary · Practice Test 67",
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
                    "Students must not bring mobile phones into the exam room.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Phones aren't allowed in exams.",
                  "Phones must be on in exams.",
                  "Students can use phones in exams.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've lost my keys. Did I leave them at your house? Lucy",
                  ],
                },
                question: "What does Lucy want to know?",
                options: [
                  "where Grace lives",
                  "if she left her keys at Grace's",
                  "if Grace has new keys",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Remove from packaging before heating.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Take it out of the packaging first.",
                  "Heat it in the packaging.",
                  "Don't heat it.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "I'm having a barbecue on Saturday. Can you come? Bring your swimming things! Max",
                  ],
                },
                question: "What should Ben bring?",
                options: [
                  "food",
                  "drinks",
                  "swimming things",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The lake is closed for swimming today.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The park is closed.",
                  "Swimming is allowed.",
                  "You can't swim in the lake today.",
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
            instruction: "The young people below all want to buy a present. Read the descriptions of eight shops. Decide which shop would be the most suitable for each person.",
            options: [
              {
                title: "Book World",
                text: "Thousands of books for all ages.",
              },
              {
                title: "Sports Shop",
                text: "Equipment for all sports.",
              },
              {
                title: "Music Store",
                text: "Instruments and music accessories.",
              },
              {
                title: "Garden Centre",
                text: "Plants and gardening tools.",
              },
              {
                title: "Toy Shop",
                text: "Toys and games for children.",
              },
              {
                title: "Clothes Shop",
                text: "Fashionable clothes for teenagers.",
              },
              {
                title: "Art Supplies",
                text: "Paints, brushes and drawing materials.",
              },
              {
                title: "Tech Shop",
                text: "Phones, computers and gadgets.",
              },
            ],
            items: [
              {
                text: "Mert's sister loves painting.",
                answer: 6,
              },
              {
                text: "Elif's grandmother loves gardening.",
                answer: 3,
              },
              {
                text: "Can's little brother is five.",
                answer: 4,
              },
              {
                text: "Zeynep's friend plays the guitar.",
                answer: 2,
              },
              {
                text: "Burak's dad loves new technology.",
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
              title: "A sailing adventure",
              paragraphs: [
                "Last summer, I spent two weeks sailing around the Greek islands with my family. It was my first time on a sailing boat, and I was very excited.",
                "At first, I didn't know anything about sailing. My dad, who is an experienced sailor, taught me how to use the ropes and steer the boat. It was difficult, but I learned quickly.",
                "Every day, we sailed to a different island. We swam in beautiful bays and explored small villages. One day, we saw dolphins swimming next to the boat. It was amazing!",
                "One night, there was a storm. The waves were very big, and the boat moved a lot. I was scared, but my dad stayed calm. The next morning, the sea was calm again. The trip was the best holiday I've ever had. I want to learn more about sailing.",
              ],
            },
            items: [
              {
                question: "Who taught the writer to sail?",
                options: [
                  "her mum",
                  "an instructor",
                  "her dad",
                  "nobody",
                ],
                answer: 2,
              },
              {
                question: "What did they do every day?",
                options: [
                  "stayed in one place",
                  "sailed to a different island",
                  "went fishing",
                  "went shopping",
                ],
                answer: 1,
              },
              {
                question: "What did the writer see one day?",
                options: [
                  "whales",
                  "sharks",
                  "turtles",
                  "dolphins",
                ],
                answer: 3,
              },
              {
                question: "How did the writer feel during the storm?",
                options: [
                  "excited",
                  "scared",
                  "bored",
                  "happy",
                ],
                answer: 1,
              },
              {
                question: "What does the writer want to do now?",
                options: [
                  "never sail again",
                  "buy a boat",
                  "become a fisherman",
                  "learn more about sailing",
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
            title: "The longest bridge in Europe",
            text: [
              "In Portugal, there's a bridge that is more than seventeen kilometres long. {1} It's called the Vasco da Gama Bridge.",
              "The bridge was opened in 1998. {2} It was built to reduce traffic on another bridge in Lisbon.",
              "The bridge crosses the River Tagus. {3} It takes about ten minutes to drive across it.",
              "The bridge was designed to survive strong earthquakes. {4} Lisbon was destroyed by a big earthquake in 1755.",
              "The bridge has become a famous landmark. {5} Many people take photos of it, especially at sunset.",
            ],
            sentences: [
              "It's beautiful when it's lit up at night.",
              "It took eighteen months to build.",
              "The bridge is very short.",
              "It's the longest bridge in the European Union.",
              "This was very important because of the city's history.",
              "Nobody uses the bridge.",
              "The river is very wide at this point.",
              "The bridge is only for trains.",
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
            title: "Giraffes",
            text: [
              "Giraffes are the tallest animals on Earth. An adult giraffe can be up to six metres tall. Their long necks help them reach leaves at the top of {1} trees.",
              "Giraffes live in the grasslands of Africa. They spend most of the day eating. An adult giraffe can eat up to forty-five kilograms of leaves a day!",
              "Giraffes have very long tongues, about fifty centimetres long. They use their tongues to {2} leaves from branches. Giraffes don't need much sleep. They usually sleep for only about two hours a day. Each giraffe has a {3} pattern of spots. No two giraffes look exactly the same. Sadly, giraffes are in danger. Their {4} has fallen by almost forty per cent in the last thirty years. This is because people are destroying their habitats and hunting them. Many organisations are working to {5} giraffes and their homes. We need to act now before it's too {6}.",
            ],
            gaps: [
              {
                options: [
                  "tallest",
                  "tall",
                  "taller",
                  "tallness",
                ],
                answer: 1,
              },
              {
                options: [
                  "pull",
                  "pulling",
                  "pulled",
                  "pulls",
                ],
                answer: 0,
              },
              {
                options: [
                  "uniquely",
                  "uniqueness",
                  "unique",
                  "unify",
                ],
                answer: 2,
              },
              {
                options: [
                  "popular",
                  "population",
                  "populate",
                  "popularity",
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
              {
                options: [
                  "lately",
                  "late",
                  "later",
                  "lateness",
                ],
                answer: 1,
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
              "When I was fourteen, I went to my first concert {1} my best friend, Ali. It was our favourite band, and we'd been waiting {2} months.",
              "The concert was in a huge stadium. There were thousands of people, and everyone was very excited. We arrived early so that we could get good places near the stage.",
              "When the band came on stage, everyone screamed. The music was so loud that I could feel the ground shaking! We sang {3} to every song. My favourite moment was when the singer threw his guitar pick into the crowd. Ali caught it! He was so happy. The concert lasted three hours, but it felt {4} only ten minutes. When we got home, we couldn't stop talking about it. We've been to lots of concerts since then, but that one was the {5} special. Ali still keeps the guitar pick in a special box {6} his bedroom.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "for",
              ],
              [
                "along",
              ],
              [
                "like",
              ],
              [
                "most",
              ],
              [
                "in",
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
              subject: "A sports day",
              lines: [
                "Our school sports day is next week! [Sounds fun]",
                "Which events should I enter? [Give advice]",
                "Are you good at sport? [Tell Alex]",
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
            sample: "Hi Alex,\n\nThat sounds like a lot of fun! I love sports days.\n\nI think you should enter the 100 metres, because you're very fast. You could also try the long jump. Don't enter too many events, or you'll be very tired!\n\nI'm quite good at sport. I play basketball for my school team, and I'm good at swimming. I'm not very good at running, though. I always come last in races!\n\nI'd love to come and watch! Just tell me the date and time, and I'll ask my mum if she can take me. I'll cheer for you!\n\nBye,\nSu",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A difficult decision",
              lines: [
                "Tell us about a difficult decision you made.",
                "What were the options?",
                "What did you decide and why?",
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
            sample: "Choosing my future\n\nLast year, I had to make a very difficult decision. I had to choose between studying science or art at college.\n\nI've always loved art. I paint every day, and I've won several competitions. But my parents wanted me to study science, because they thought it would give me better job opportunities.\n\nI thought about it for weeks. I talked to my teachers, my friends and my family. In the end, I decided to study art. I knew I wouldn't be happy doing something I didn't love. My parents weren't happy at first, but now they support me. I think it was the right decision.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The forest was dark and silent.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The forest was dark and silent. Ben had been walking for hours, and he was completely lost.\n\nHe had gone for a walk with his dog, but the dog had run after a rabbit. Ben had followed him, and now he didn't know where he was. His phone had no signal.\n\nBen sat down on a log and tried not to panic. Then he heard a bark. His dog came running out of the trees! Ben was so happy to see him.\n\nThe dog started walking, and Ben followed him. Twenty minutes later, they were back on the path. The dog had found the way home!",
          },
        },
      ],
    },
  ],
};
