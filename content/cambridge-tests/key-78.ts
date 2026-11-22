import type { CambridgeTest } from "./types";

/** A2 Key practice test 78 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_78: CambridgeTest = {
  id: "key-78",
  level: "key",
  no: 78,
  title: "A2 Key · Practice Test 78",
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
                    "Choir practice moved to Room 15 this week.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Choir practice is in a different room.",
                  "Choir practice is cancelled.",
                  "Choir practice is at a new time.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, I'm making pizza for dinner. What toppings do you want? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "what time Lucy is coming home",
                  "if Lucy is hungry",
                  "what Lucy wants on her pizza",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "FIRST AID ROOM",
                    "Ring the bell if you need help.",
                  ],
                },
                question: "What should you do if you need help?",
                options: [
                  "call a doctor",
                  "ring the bell",
                  "go to reception",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I've found your watch in the changing room. I'll give it to you tomorrow. Sam",
                  ],
                },
                question: "What has Sam done?",
                options: [
                  "bought Max a watch",
                  "found something Max lost",
                  "lost Max's watch",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOTEL",
                    "Breakfast served 7–10 a.m.",
                    "Late breakfast available on request.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Breakfast is only until 9.",
                  "There's no breakfast.",
                  "You can ask for breakfast after 10.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BAND WANTED",
                    "Our school needs a band for the summer party.",
                    "Contact Mr Green.",
                  ],
                },
                question: "What does the advertisement ask for?",
                options: [
                  "musicians to play at a party",
                  "party food",
                  "people to dance",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Jasmine",
                text: "I love playing basketball. I'm the tallest girl in my class, which helps! I play for my school and a club. Last year, my team won the national schools championship. I want to play basketball at a university in the USA.",
              },
              {
                title: "Ben",
                text: "My hobby is keeping bees. My grandfather has bees, and he taught me how to look after them. Now I have two hives of my own. Last summer, I collected twenty jars of honey. I gave some to my teachers, and they loved it!",
              },
              {
                title: "Zara",
                text: "I'm a keen photographer. I take photos of buildings and architecture. I've been to lots of cities with my parents and taken photos there. Last year, one of my photos was used in a travel magazine. I was paid fifty pounds for it!",
              },
            ],
            items: [
              {
                text: "has a physical advantage?",
                answer: 0,
              },
              {
                text: "hopes to study abroad?",
                answer: 0,
              },
              {
                text: "learned from a relative?",
                answer: 1,
              },
              {
                text: "gave presents to teachers?",
                answer: 1,
              },
              {
                text: "travels with family?",
                answer: 2,
              },
              {
                text: "was paid for their work?",
                answer: 2,
              },
              {
                text: "won a national competition?",
                answer: 0,
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
              title: "Learning to swim at sixty",
              paragraphs: [
                "When Margaret Brown was sixty years old, she decided to learn to swim. 'I was always afraid of the water,' she says. 'But my grandchildren love swimming, and I wanted to swim with them.'",
                "Margaret's first lesson was very difficult. 'I was so scared,' she remembers. 'I couldn't put my face in the water. But my teacher was very patient.'",
                "Margaret went to lessons twice a week for six months. 'Slowly, I got better,' she says. 'After three months, I could swim one length of the pool.'",
                "Now Margaret is sixty-five and swims every morning. 'Last summer, I swam in the sea with my grandchildren,' she says. 'It was one of the best days of my life. You're never too old to learn something new!'",
              ],
            },
            items: [
              {
                question: "Why did Margaret want to learn to swim?",
                options: [
                  "to win competitions",
                  "to swim with her grandchildren",
                  "because her doctor told her to",
                ],
                answer: 1,
              },
              {
                question: "How did Margaret feel at her first lesson?",
                options: [
                  "very frightened",
                  "excited",
                  "bored",
                ],
                answer: 0,
              },
              {
                question: "How often did Margaret have lessons?",
                options: [
                  "every day",
                  "once a month",
                  "twice a week",
                ],
                answer: 2,
              },
              {
                question: "What could Margaret do after three months?",
                options: [
                  "swim in the sea",
                  "swim one length",
                  "teach swimming",
                ],
                answer: 1,
              },
              {
                question: "What does Margaret believe?",
                options: [
                  "Swimming is only for young people.",
                  "Age doesn't stop you learning.",
                  "The sea is dangerous.",
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
            title: "Tea",
            text: [
              "Tea is one of the most popular drinks in the world. Every day, people drink about three billion cups of {1}.",
              "Tea comes from the leaves of a plant that grows in hot, wet countries, like China, India and Kenya. The leaves are {2}, dried and then sent all over the world.",
              "According to a Chinese story, an emperor discovered tea about 5,000 years ago. Some leaves fell into his hot water, and he liked the {3}! There are many different kinds of tea, such as green tea, black tea and white tea. In Britain, people usually {4} their tea with milk. In Morocco, they drink it with mint and lots of sugar. In Turkey, tea is {5} in small glasses. Tea contains caffeine, but less than coffee. Some people think green tea is very good {6} your health.",
            ],
            gaps: [
              {
                options: [
                  "them",
                  "it",
                  "its",
                ],
                answer: 1,
              },
              {
                options: [
                  "chosen",
                  "taken up",
                  "picked",
                ],
                answer: 2,
              },
              {
                options: [
                  "taste",
                  "smell",
                  "look",
                ],
                answer: 0,
              },
              {
                options: [
                  "eat",
                  "drink",
                  "fill",
                ],
                answer: 1,
              },
              {
                options: [
                  "served",
                  "given up",
                  "fed",
                ],
                answer: 0,
              },
              {
                options: [
                  "to",
                  "at",
                  "for",
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
              "Hi Daniel,",
              "How are you? I hope you're enjoying your summer holidays. I'm having a great time.",
              "Last week, I went camping {1} my scout group. We camped in a forest next to a lake. We went swimming, canoeing and fishing. At night, we sat around a campfire and told scary stories!",
              "Next week, I'm going {2} visit my cousins in the city. They're going to take me to a theme park. I've never been on a rollercoaster before, {3} I'm a bit nervous. What {4} you doing this summer? Have you been away? Write back and tell me {5} about it. See you {6} September!",
              "Jack",
            ],
            answers: [
              [
                "with",
              ],
              [
                "to",
              ],
              [
                "so",
              ],
              [
                "are",
              ],
              [
                "all",
                "everything",
              ],
              [
                "in",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have a new teacher at school. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say which subject the teacher teaches.",
              "Describe the teacher.",
              "Say why you like them.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nWe have a new teacher for history. Her name is Ms Kaya. She's young and has short dark hair. I like her because her lessons are really interesting and she tells funny stories.\n\nBye,\nArda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🌷🏡",
                label: "1",
              },
              {
                e: "👧🌷🐌😟",
                label: "2",
              },
              {
                e: "👧🐌🥬😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Lily planted some beautiful flowers in her garden. But every morning, she found holes in the leaves. One night, she went outside with a torch and saw lots of snails eating her flowers! She didn't want to hurt them, so she put some old lettuce leaves at the end of the garden. The snails went there instead, and her flowers were safe.",
          },
        },
      ],
    },
  ],
};
