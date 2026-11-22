import type { CambridgeTest } from "./types";

/** A1 Movers practice test 16 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_16: CambridgeTest = {
  id: "movers-16",
  level: "movers",
  no: 16,
  title: "A1 Movers · Practice Test 16",
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
                word: "a postman",
                e: "📮",
              },
              {
                word: "a mirror",
                e: "🪞",
              },
              {
                word: "a swimming pool",
                e: "🏊",
              },
              {
                word: "a field",
                e: "🌾",
              },
              {
                word: "a penguin",
                e: "🐧",
              },
              {
                word: "a spoon",
                e: "🥄",
              },
              {
                word: "a backpack",
                e: "🎒",
              },
              {
                word: "a button",
                e: "🔘",
              },
            ],
            items: [
              {
                text: "This person brings letters to your house.",
                answer: "a postman",
              },
              {
                text: "You can see your face in this.",
                answer: "a mirror",
              },
              {
                text: "This is a place with water where people swim.",
                answer: "a swimming pool",
              },
              {
                text: "This black and white bird can swim but it can't fly.",
                answer: "a penguin",
              },
              {
                text: "You carry your books in this on your back.",
                answer: "a backpack",
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
              "Eva",
              "Charlie",
            ],
            items: [
              {
                line: "Charlie, why are you sad?",
                options: [
                  "I'm eleven.",
                  "I lost my pet hamster.",
                  "It's sunny.",
                ],
                answer: 1,
              },
              {
                line: "Oh no! When did you lose him?",
                options: [
                  "He's brown.",
                  "This morning, before school.",
                  "In a box.",
                ],
                answer: 1,
              },
              {
                line: "Where did you look?",
                options: [
                  "It's a hamster.",
                  "At three o'clock.",
                  "In my bedroom and the kitchen.",
                ],
                answer: 2,
              },
              {
                line: "What about behind the sofa?",
                options: [
                  "I didn't look there!",
                  "It's big.",
                  "Yes, it is.",
                ],
                answer: 0,
              },
              {
                line: "Let's go and look now.",
                options: [
                  "It's my sofa.",
                  "OK, thanks for helping me.",
                  "No, I'm not.",
                ],
                answer: 1,
              },
              {
                line: "Look! There he is!",
                options: [
                  "Hooray! Thank you, Eva!",
                  "It's a sofa.",
                  "He's sleeping in bed.",
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
              "Grace's class grew some {1} in pots at school. Every day, the children gave them some water and put them near the {2}.",
              "After two weeks, Grace saw a little green {3}. It got bigger and bigger. In June, there were big yellow {4} on it!",
              "Grace took her plant home and gave it to her mum. Mum was very {5}. She put it in the garden.",
            ],
            bank: [
              {
                word: "seeds",
                e: "🌱",
              },
              {
                word: "window",
                e: "🪟",
              },
              {
                word: "leaf",
                e: "🍃",
              },
              {
                word: "flowers",
                e: "🌻",
              },
              {
                word: "pleased",
                e: "😊",
              },
              {
                word: "bus",
                e: "🚌",
              },
              {
                word: "socks",
                e: "🧦",
              },
              {
                word: "angry",
                e: "😠",
              },
            ],
            answers: [
              "seeds",
              "window",
              "leaf",
              "flowers",
              "pleased",
            ],
            titleQuestion: {
              options: [
                "A bus to school",
                "Mum's new socks",
                "Grace's sunflower",
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
            title: "Camels",
            text: [
              "Camels live in deserts, where it is very hot {1} dry. They can walk a long way without water.",
              "Camels have got one or two humps on their backs. People often think the humps have water in them, {2} they have fat in them.",
              "Camels have long eyelashes to stop sand getting {3} their eyes. They can close {4} noses too! People use camels to carry things {5} the desert.",
            ],
            gaps: [
              {
                options: [
                  "and",
                  "or",
                  "but",
                ],
                answer: 0,
              },
              {
                options: [
                  "so",
                  "but",
                  "because",
                ],
                answer: 1,
              },
              {
                options: [
                  "into",
                  "onto",
                  "out",
                ],
                answer: 0,
              },
              {
                options: [
                  "its",
                  "them",
                  "their",
                ],
                answer: 2,
              },
              {
                options: [
                  "along",
                  "under",
                  "across",
                ],
                answer: 2,
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
              "Robert loves trains. Last Saturday, he went on a train trip to the city with his grandpa. The train left at eight o'clock in the morning.",
              "On the train, Robert sat by the window. He saw cows, sheep and a big lake. Grandpa bought him a cup of hot chocolate from the café on the train.",
              "In the city, they visited the train museum. Robert's favourite train was a very old green one. He took lots of photos of it with Grandpa's camera.",
            ],
            items: [
              {
                question: "What does Robert love?",
                answers: [
                  "trains",
                ],
              },
              {
                question: "Who did Robert go with?",
                answers: [
                  "his grandpa",
                  "grandpa",
                ],
              },
              {
                question: "What time did the train leave?",
                answers: [
                  "at eight o'clock",
                  "eight o'clock",
                  "8 o'clock",
                  "at eight",
                ],
              },
              {
                question: "Where did Robert sit?",
                answers: [
                  "by the window",
                  "next to the window",
                  "near the window",
                ],
              },
              {
                question: "What did Grandpa buy him?",
                answers: [
                  "a cup of hot chocolate",
                  "hot chocolate",
                  "a hot chocolate",
                ],
              },
              {
                question: "What did they visit in the city?",
                answers: [
                  "the train museum",
                  "a train museum",
                  "train museum",
                ],
              },
              {
                question: "What colour was Robert's favourite train?",
                answers: [
                  "green",
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
              bg: "room",
              items: [
                {
                  e: "🛋️",
                  x: 30,
                  y: 62,
                  size: 3.4,
                },
                {
                  e: "👧",
                  x: 28,
                  y: 52,
                  size: 2.4,
                },
                {
                  e: "📖",
                  x: 36,
                  y: 56,
                  size: 1.4,
                },
                {
                  e: "📺",
                  x: 76,
                  y: 46,
                  size: 2.6,
                },
                {
                  e: "🐕",
                  x: 58,
                  y: 84,
                },
                {
                  e: "🖼️",
                  x: 50,
                  y: 20,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where is the girl?",
              "What is the girl doing?",
              "Where is the dog?",
              "Write one sentence about the television.",
              "Write one sentence about the picture.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The girl is in the living room. She is reading a book on the sofa. The dog is on the floor. The television is next to the window. There is a picture of a mountain on the wall.",
          },
        },
      ],
    },
  ],
};
