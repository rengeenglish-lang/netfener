import type { CambridgeTest } from "./types";

/** A2 Key practice test 94 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_94: CambridgeTest = {
  id: "key-94",
  level: "key",
  no: 94,
  title: "A2 Key · Practice Test 94",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
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
                    "All students must bring their own water bottle.",
                  ],
                },
                question: "What should students bring?",
                options: [
                  "lunch",
                  "money",
                  "a water bottle",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ella, I've finished early at work. Shall I collect you from school? Mum",
                  ],
                },
                question: "What is Mum offering?",
                options: [
                  "to make dinner",
                  "to go shopping",
                  "to pick Ella up",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MOUNTAIN PATH",
                    "Closed in winter.",
                  ],
                },
                question: "When can you use the path?",
                options: [
                  "when it isn't winter",
                  "only in winter",
                  "never",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Please return my football by Friday. I need it for the match. Tom",
                  ],
                },
                question: "What does Tom want?",
                options: [
                  "a new football",
                  "his football back",
                  "to play a match on Thursday",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Students: half price on Wednesdays.",
                  ],
                },
                question: "When can students pay less?",
                options: [
                  "on Wednesdays",
                  "every day",
                  "at weekends",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PAINTING CLASS",
                    "Learn to paint landscapes.",
                    "Saturdays 2–4 p.m. All materials included.",
                  ],
                },
                question: "What do we know about the class?",
                options: [
                  "It's on Sunday.",
                  "You need to bring paints.",
                  "Materials are provided.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Charlotte",
                text: "I love tennis. I play every day after school. Last year, I played in a tournament in Spain and reached the final. I didn't win, but I learned a lot. My coach says I'm good enough to play professionally one day.",
              },
              {
                title: "Leo",
                text: "My hobby is building model planes. I've built more than twenty. Some of them can really fly! I fly them in the park at weekends with my grandfather. He used to be a pilot, and he helps me.",
              },
              {
                title: "Grace",
                text: "I'm a keen singer. I sing in a choir and have singing lessons. Last month, I sang a solo at my school's concert. Over five hundred people watched. I was very nervous, but I sang well. I want to be a professional singer.",
              },
            ],
            items: [
              {
                text: "reached a final abroad?",
                answer: 0,
              },
              {
                text: "could become a professional athlete?",
                answer: 0,
              },
              {
                text: "does their hobby with a grandparent?",
                answer: 1,
              },
              {
                text: "makes things that can fly?",
                answer: 1,
              },
              {
                text: "sang alone?",
                answer: 2,
              },
              {
                text: "was very nervous?",
                answer: 2,
              },
              {
                text: "has built many things?",
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "The boy who built a library",
              paragraphs: [
                "When ten-year-old Leo saw that his school didn't have a library, he decided to build one. 'I love reading,' he says. 'I wanted everyone to have books.'",
                "Leo asked people to give him their old books. 'I put a message online,' he says. 'Lots of people sent me books!'",
                "With the help of his dad, Leo turned an old classroom into a library. 'We painted the walls and built shelves,' he says. 'It took us two months.'",
                "Now the library has more than 3,000 books. 'Everyone in my school uses it,' says Leo. 'I'm so happy. Reading is the best thing in the world!'",
              ],
            },
            items: [
              {
                question: "Why did Leo build a library?",
                options: [
                  "His school didn't have one.",
                  "His teacher asked him.",
                  "He wanted to sell books.",
                ],
                answer: 0,
              },
              {
                question: "How did Leo get books?",
                options: [
                  "He bought them.",
                  "He wrote them.",
                  "People gave them to him.",
                ],
                answer: 2,
              },
              {
                question: "Who helped Leo?",
                options: [
                  "his teacher",
                  "his friends",
                  "his dad",
                ],
                answer: 2,
              },
              {
                question: "How long did it take to make the library?",
                options: [
                  "two months",
                  "two years",
                  "two weeks",
                ],
                answer: 0,
              },
              {
                question: "How many books does the library have now?",
                options: [
                  "about 300",
                  "more than 3,000",
                  "exactly 1,000",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Recycling",
            text: [
              "Recycling means using old things to {1} new things. For example, old plastic bottles can be made into new bottles or even clothes!",
              "Recycling is very important for the environment. It {2} the amount of rubbish we throw away. It also saves energy and natural materials.",
              "Many things can be recycled, like paper, glass, plastic and metal. In many countries, people put these things into different {3}. Then the rubbish is taken to a recycling centre. It's important to clean your bottles and cans before you recycle them. You can also {4} the environment by using less plastic. For example, you can take your own bag to the shops and use a {5} water bottle. If we all recycle, we can make a big {6} to our planet.",
            ],
            gaps: [
              {
                options: [
                  "do",
                  "make",
                  "build up",
                ],
                answer: 1,
              },
              {
                options: [
                  "reduces",
                  "lowers up",
                  "makes",
                ],
                answer: 0,
              },
              {
                options: [
                  "boxes up",
                  "bags up",
                  "bins",
                ],
                answer: 2,
              },
              {
                options: [
                  "make",
                  "help",
                  "do",
                ],
                answer: 1,
              },
              {
                options: [
                  "use",
                  "reusable",
                  "used",
                ],
                answer: 1,
              },
              {
                options: [
                  "different",
                  "differently",
                  "difference",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Hi Isla,",
              "I'm writing to tell you about my weekend. On Saturday, I went {1} a theme park with my cousins. It was so much fun!",
              "We went on lots of rides. My favourite was the big rollercoaster. It was very fast and high. I screamed {2} the time! My cousin was scared, so she didn't go on it.",
              "After that, we ate burgers and ice cream. We got home very late, {3} I was very tired. What did you do {4} the weekend? Write back {5} tell me. See you {6} Monday!",
              "Love,",
              "Freya",
            ],
            answers: [
              [
                "to",
              ],
              [
                "all",
              ],
              [
                "so",
                "and",
              ],
              [
                "at",
                "on",
                "this",
              ],
              [
                "and",
              ],
              [
                "on",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have a new hobby. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say what your new hobby is.",
              "Say who you do it with.",
              "Say why you like it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nMy new hobby is ice skating! I go to the ice rink with my best friend every Saturday. I like it because it's fun and I'm getting better every week.\n\nBye,\nSelin",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🌳🍎",
                label: "1",
              },
              {
                e: "👦🍎🐿️",
                label: "2",
              },
              {
                e: "👦🐿️🌰😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One autumn day, Tom was picking apples in his grandfather's garden. He saw a small squirrel looking at him from a tree. Tom put an apple on the ground, but the squirrel didn't come down. Then Tom found some nuts in his pocket. He put them on the ground and moved away. The squirrel came down and ate them. Tom was very happy.",
          },
        },
      ],
    },
  ],
};
