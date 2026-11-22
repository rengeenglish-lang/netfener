import type { CambridgeTest } from "./types";

/** A1 Movers practice test 7 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_7: CambridgeTest = {
  id: "movers-7",
  level: "movers",
  no: 7,
  title: "A1 Movers · Practice Test 7",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 30,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "definitions",
            instruction: "Look and read. Choose the correct word for each sentence.",
            bank: [
              {
                word: "a cook",
                e: "🧑‍🍳",
              },
              {
                word: "a tooth",
                e: "🦷",
              },
              {
                word: "a ticket",
                e: "🎟️",
              },
              {
                word: "a towel",
                e: "🧺",
              },
              {
                word: "a shelf",
                e: "🗄️",
              },
              {
                word: "a castle",
                e: "🏰",
              },
              {
                word: "a cave",
                e: "🕳️",
              },
              {
                word: "a camel",
                e: "🐫",
              },
            ],
            items: [
              {
                text: "This person makes food in a restaurant.",
                answer: "a cook",
              },
              {
                text: "You need this to see a film at the cinema.",
                answer: "a ticket",
              },
              {
                text: "You use this to dry your body after a shower.",
                answer: "a towel",
              },
              {
                text: "Kings and queens lived in this big building.",
                answer: "a castle",
              },
              {
                text: "This animal lives in the desert and has got a hump.",
                answer: "a camel",
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: [
              "Lucy",
              "Mr Brown",
            ],
            items: [
              {
                line: "Good morning, Mr Brown. Is this the bus to the zoo?",
                options: [
                  "Yes, it is. Get on!",
                  "It's red.",
                  "I'm the driver.",
                ],
                answer: 0,
              },
              {
                line: "How much is a ticket?",
                options: [
                  "At nine o'clock.",
                  "Two pounds, please.",
                  "On the left.",
                ],
                answer: 1,
              },
              {
                line: "How long does it take to get there?",
                options: [
                  "About twenty minutes.",
                  "It's very long.",
                  "Yesterday.",
                ],
                answer: 0,
              },
              {
                line: "Can I sit at the front?",
                options: [
                  "It's my bus.",
                  "I don't like seats.",
                  "Yes, there's a seat there.",
                ],
                answer: 2,
              },
              {
                line: "Does the bus stop near the gate?",
                options: [
                  "I like gates.",
                  "No, thank you.",
                  "Yes, right next to it.",
                ],
                answer: 2,
              },
              {
                line: "Thanks for your help!",
                options: [
                  "You're welcome. Have fun!",
                  "It's a zoo.",
                  "Yes, I am.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "It was Anna's first day at a new school. She was {1} because she didn't know anyone. In the classroom, she sat next to a girl with long, curly {2}.",
              "'Hi, I'm Zoe,' said the girl. 'Do you want to play with me at {3}?' Anna smiled and said yes. In the playground, they played football with Zoe's {4}.",
              "After school, Anna told her mum, 'I've got a new {5}! I love my new school!'",
            ],
            bank: [
              {
                word: "worried",
                e: "😟",
              },
              {
                word: "hair",
                e: "💇",
              },
              {
                word: "break",
                e: "⏰",
              },
              {
                word: "brother",
                e: "👦",
              },
              {
                word: "friend",
                e: "🤝",
              },
              {
                word: "bathroom",
                e: "🛁",
              },
              {
                word: "cheese",
                e: "🧀",
              },
              {
                word: "tired",
                e: "😴",
              },
            ],
            answers: [
              "worried",
              "hair",
              "break",
              "brother",
              "friend",
            ],
            titleQuestion: {
              options: [
                "A football match on TV",
                "Zoe's birthday party",
                "Anna's new friend",
              ],
              answer: 2,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Parrots",
            text: [
              "Parrots are colourful birds. Many of them live {1} hot forests in South America.",
              "Parrots have got strong beaks, and they use {2} to open nuts. Some parrots can say words, {3} they can't understand them.",
              "Parrots like being with other parrots. They {4} live for a very long time, sometimes more {5} fifty years!",
            ],
            gaps: [
              {
                options: [
                  "at",
                  "to",
                  "in",
                ],
                answer: 2,
              },
              {
                options: [
                  "they",
                  "their",
                  "them",
                ],
                answer: 2,
              },
              {
                options: [
                  "but",
                  "because",
                  "so",
                ],
                answer: 0,
              },
              {
                options: [
                  "are",
                  "can",
                  "does",
                ],
                answer: 1,
              },
              {
                options: [
                  "than",
                  "that",
                  "then",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Every Saturday, Ella goes to the swimming pool with her dad. Last Saturday, it was very cold and windy, but the pool was warm.",
              "Ella swam ten lengths. Then her dad taught her how to dive. The first time, she was scared, but the second time it was easy. Her dad said she was a great swimmer.",
              "After swimming, they were hungry, so they went to a café. Ella had a hot chocolate and a cheese sandwich. Her dad drank a coffee.",
            ],
            items: [
              {
                question: "When does Ella go swimming?",
                answers: [
                  "every saturday",
                  "on saturdays",
                  "on saturday",
                  "saturday",
                ],
              },
              {
                question: "Who does Ella go with?",
                answers: [
                  "her dad",
                  "dad",
                  "her father",
                ],
              },
              {
                question: "What was the weather like last Saturday?",
                answers: [
                  "cold and windy",
                  "very cold and windy",
                  "windy and cold",
                ],
              },
              {
                question: "How many lengths did Ella swim?",
                answers: [
                  "ten",
                  "10",
                  "ten lengths",
                ],
              },
              {
                question: "What did her dad teach her?",
                answers: [
                  "how to dive",
                  "to dive",
                  "diving",
                ],
              },
              {
                question: "Where did they go after swimming?",
                answers: [
                  "a café",
                  "to a café",
                  "café",
                  "the café",
                  "a cafe",
                  "cafe",
                  "to a cafe",
                ],
              },
              {
                question: "What did Ella drink?",
                answers: [
                  "a hot chocolate",
                  "hot chocolate",
                ],
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Look at the picture. Answer the questions, then write two sentences about the picture.",
            scene: {
              bg: "kitchen",
              items: [
                {
                  e: "👩",
                  x: 20,
                  y: 50,
                  size: 3,
                },
                {
                  e: "🍳",
                  x: 40,
                  y: 62,
                  size: 2,
                },
                {
                  e: "👦",
                  x: 62,
                  y: 62,
                  size: 2.4,
                },
                {
                  e: "🍊",
                  x: 70,
                  y: 78,
                  size: 1.4,
                },
                {
                  e: "🍊",
                  x: 76,
                  y: 78,
                  size: 1.4,
                },
                {
                  e: "🐈",
                  x: 86,
                  y: 86,
                },
                {
                  e: "🪟",
                  x: 50,
                  y: 18,
                  size: 2.4,
                },
              ],
            },
            prompts: [
              "Where are they?",
              "What is the mother doing?",
              "How many oranges are on the table?",
              "Write one sentence about the boy.",
              "Write one sentence about the cat.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "They are in the kitchen. The mother is cooking eggs. There are two oranges on the table. The boy is hungry and he is waiting for breakfast. The cat is sleeping on the floor.",
          },
        },
      ],
    },
  ],
};
