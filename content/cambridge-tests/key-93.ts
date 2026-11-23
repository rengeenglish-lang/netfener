import type { CambridgeTest } from "./types";

/** A2 Key practice test 93 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_93: CambridgeTest = {
  id: "key-93",
  level: "key",
  no: 93,
  title: "A2 Key · Practice Test 93",
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
                    "No food in the classrooms, please.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Classrooms are closed.",
                  "Don't eat in the classrooms.",
                  "Food is sold in classrooms.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, the film starts at 7.30. Let's meet outside at 7.15. Grace",
                  ],
                },
                question: "When should they meet?",
                options: [
                  "after the film",
                  "at 7.30",
                  "before the film",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "Do not touch the exhibits.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Don't put your hands on the objects.",
                  "You can touch everything.",
                  "The museum is closed.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Shall we go swimming on Saturday? The new pool has just opened. Dan",
                  ],
                },
                question: "What does Dan suggest?",
                options: [
                  "building a pool",
                  "going to the new pool",
                  "going on Sunday",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Dogs must be on a lead near the lake.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Dogs must be controlled near the water.",
                  "Dogs can't go to the park.",
                  "Dogs can swim in the lake.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FREE BOOKS",
                    "Take a book, leave a book!",
                    "Outside the library.",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "You must buy books.",
                  "The library is closed.",
                  "You can swap books.",
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
                title: "Ellie",
                text: "I love swimming. I'm in a swimming team, and I train every morning before school. Last month, I won three gold medals at a competition. Next year, I want to try out for the national team.",
              },
              {
                title: "Sam",
                text: "My hobby is computer programming. I've made a game about a cat who saves the world. More than a thousand people have downloaded it! I learned to code at a summer camp last year.",
              },
              {
                title: "Nadia",
                text: "I'm a keen gardener. I grow flowers and vegetables. My favourite flowers are roses. Last year, I won a prize at a flower show for my beautiful roses. My grandmother taught me everything about gardening.",
              },
            ],
            items: [
              {
                text: "won several medals?",
                answer: 0,
              },
              {
                text: "trains before school?",
                answer: 0,
              },
              {
                text: "made something that lots of people use?",
                answer: 1,
              },
              {
                text: "learned their skill at a camp?",
                answer: 1,
              },
              {
                text: "won a prize for flowers?",
                answer: 2,
              },
              {
                text: "learned from a grandparent?",
                answer: 2,
              },
              {
                text: "wants to be on a national team?",
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
              title: "A cycling family",
              paragraphs: [
                "The Taylor family love cycling. Last summer, Mum, Dad and their two children cycled from France to Italy. It was 1,200 kilometres!",
                "'It took us six weeks,' says thirteen-year-old Jack. 'We cycled about fifty kilometres every day.'",
                "The family camped every night. 'We carried our tents and sleeping bags on our bikes,' says Jack. 'Sometimes it was very hard, especially in the mountains.'",
                "Jack's favourite part was arriving in Italy. 'We ate pizza and ice cream to celebrate!' he says. 'It was the best holiday ever. Next year, we want to cycle around Spain.'",
              ],
            },
            items: [
              {
                question: "How far did the family cycle?",
                options: [
                  "120 kilometres",
                  "1,200 kilometres",
                  "50 kilometres",
                ],
                answer: 1,
              },
              {
                question: "How long did the journey take?",
                options: [
                  "six days",
                  "six weeks",
                  "six months",
                ],
                answer: 1,
              },
              {
                question: "Where did the family sleep?",
                options: [
                  "in hotels",
                  "with friends",
                  "in tents",
                ],
                answer: 2,
              },
              {
                question: "What was difficult?",
                options: [
                  "cycling in the mountains",
                  "finding food",
                  "camping",
                ],
                answer: 0,
              },
              {
                question: "What do they want to do next year?",
                options: [
                  "go to Italy again",
                  "cycle around Spain",
                  "stay at home",
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
            title: "Elephants",
            text: [
              "Elephants are the biggest land animals on Earth. An adult elephant can {1} more than 6,000 kilos!",
              "Elephants live in Africa and Asia. They live in family groups. The oldest female {2} the group. Elephants are very caring. They look after each other and help with the babies.",
              "Elephants have very long noses called trunks. They use them to drink, eat, smell and say hello to each other. Elephants also have very good memories. They can {3} other elephants and places for many years. Elephants eat grass, leaves and fruit. They spend about sixteen hours a day eating! Sadly, elephants are in danger. People {4} them for their ivory, and they are losing their homes. Many countries have made it {5} to buy or sell ivory. This helps to {6} elephants.",
            ],
            gaps: [
              {
                options: [
                  "measure",
                  "weigh",
                  "hold",
                ],
                answer: 1,
              },
              {
                options: [
                  "leads",
                  "guides up",
                  "takes",
                ],
                answer: 0,
              },
              {
                options: [
                  "forget",
                  "know up",
                  "remember",
                ],
                answer: 2,
              },
              {
                options: [
                  "catch up",
                  "shoot up",
                  "hunt",
                ],
                answer: 2,
              },
              {
                options: [
                  "illegal",
                  "legal",
                  "illegally",
                ],
                answer: 0,
              },
              {
                options: [
                  "keep up",
                  "protect",
                  "guard on",
                ],
                answer: 1,
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
              "Hi Lily,",
              "How are you? I hope you're enjoying your new school. I miss you {1} much!",
              "Things are fine here. We have a new teacher {2} English. Her name is Mrs Clark, and she's very nice. She lets us read lots of books.",
              "Are you coming back to visit soon? We could go to the park and have a picnic {3} we used to. Write back and tell me {4} your new school. What are your new friends like? Do you like your teachers? I want to know everything! Love {5} you. Write {6}!",
              "Love,",
              "Amy",
            ],
            answers: [
              [
                "so",
                "very",
              ],
              [
                "for",
                "of",
              ],
              [
                "like",
                "as",
              ],
              [
                "about",
              ],
              [
                "from",
                "to",
              ],
              [
                "soon",
                "back",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a new swimming pool. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say where the pool is.",
              "Say what is special about it.",
              "Invite Alex to come.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nA new swimming pool has opened next to the shopping centre. It has a big slide and a wave machine! Would you like to come with me on Saturday?\n\nBye,\nDeniz",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩📚🏠",
                label: "1",
              },
              {
                e: "👩📚🐕📖",
                label: "2",
              },
              {
                e: "👩😤🐕📖😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Mrs Smith borrowed a book from the library. One evening, she left it on the sofa and went to make dinner. When she came back, her dog was chewing the book! She was very angry. The next day, she took the book back to the library and said sorry. She paid for a new book. Now she always puts her books on a high shelf.",
          },
        },
      ],
    },
  ],
};
