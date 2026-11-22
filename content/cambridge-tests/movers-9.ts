import type { CambridgeTest } from "./types";

/** A1 Movers practice test 9 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_9: CambridgeTest = {
  id: "movers-9",
  level: "movers",
  no: 9,
  title: "A1 Movers · Practice Test 9",
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
                word: "a clown",
                e: "🤡",
              },
              {
                word: "a fridge",
                e: "🧊",
              },
              {
                word: "a forest",
                e: "🌲",
              },
              {
                word: "a dolphin",
                e: "🐬",
              },
              {
                word: "a bottle",
                e: "🍼",
              },
              {
                word: "a driver",
                e: "🚕",
              },
              {
                word: "a wallet",
                e: "👛",
              },
              {
                word: "a glove",
                e: "🧤",
              },
            ],
            items: [
              {
                text: "This person makes people laugh at the circus.",
                answer: "a clown",
              },
              {
                text: "You keep milk and cheese cold in this.",
                answer: "a fridge",
              },
              {
                text: "There are lots of trees in this place.",
                answer: "a forest",
              },
              {
                text: "This clever animal swims in the sea and can jump high.",
                answer: "a dolphin",
              },
              {
                text: "This person takes people to places in a car or bus.",
                answer: "a driver",
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
              "Sara",
              "Dan",
            ],
            items: [
              {
                line: "Dan, what's your favourite sport?",
                options: [
                  "It's a ball.",
                  "Basketball. I play every week.",
                  "Yes, I do.",
                ],
                answer: 1,
              },
              {
                line: "Where do you play?",
                options: [
                  "With my friends.",
                  "On Tuesdays.",
                  "At the sports centre.",
                ],
                answer: 2,
              },
              {
                line: "Is it difficult?",
                options: [
                  "No, not really. It's fun!",
                  "It's orange.",
                  "I'm tall.",
                ],
                answer: 0,
              },
              {
                line: "Can girls play too?",
                options: [
                  "No, it's Tuesday.",
                  "Yes, of course! Come with me next time.",
                  "It's my team.",
                ],
                answer: 1,
              },
              {
                line: "What do I need to bring?",
                options: [
                  "Some trainers and some water.",
                  "It starts at four.",
                  "My brother.",
                ],
                answer: 0,
              },
              {
                line: "Great! See you on Tuesday.",
                options: [
                  "It's mine.",
                  "I'm hungry.",
                  "See you!",
                ],
                answer: 2,
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
              "On Sunday, Lily and her mum went to the {1} to buy food. Lily pushed the trolley and her mum read the shopping {2}.",
              "They bought bread, milk, apples and a big {3}. Lily wanted some sweets, but Mum said no. Then Lily saw an old man. He dropped his {4} and his money fell on the floor.",
              "Lily helped him pick it up. The man said thank you and gave Lily a {5} with a smile. 'You are a kind girl,' he said.",
            ],
            bank: [
              {
                word: "supermarket",
                e: "🏪",
              },
              {
                word: "list",
                e: "📝",
              },
              {
                word: "watermelon",
                e: "🍉",
              },
              {
                word: "wallet",
                e: "👛",
              },
              {
                word: "lollipop",
                e: "🍭",
              },
              {
                word: "hospital",
                e: "🏥",
              },
              {
                word: "fish",
                e: "🐟",
              },
              {
                word: "castle",
                e: "🏰",
              },
            ],
            answers: [
              "supermarket",
              "list",
              "watermelon",
              "wallet",
              "lollipop",
            ],
            titleQuestion: {
              options: [
                "Lily's birthday cake",
                "A kind girl at the shop",
                "Mum's new car",
              ],
              answer: 1,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Bats",
            text: [
              "Bats are the only animals with fur {1} can fly. They sleep in the day and fly at night.",
              "Bats sleep upside down. They hang from trees or the tops of caves {2} their feet. Many bats eat insects, but {3} eat fruit.",
              "Bats can't see very well in the dark, {4} they use sounds to find their food. People are often afraid of bats, but they {5} very helpful animals.",
            ],
            gaps: [
              {
                options: [
                  "what",
                  "that",
                  "who",
                ],
                answer: 1,
              },
              {
                options: [
                  "with",
                  "by",
                  "for",
                ],
                answer: 0,
              },
              {
                options: [
                  "any",
                  "one",
                  "some",
                ],
                answer: 2,
              },
              {
                options: [
                  "but",
                  "or",
                  "so",
                ],
                answer: 2,
              },
              {
                options: [
                  "are",
                  "is",
                  "be",
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
              "Mary loves painting. Every Thursday after school, she goes to an art class in the town library. Her teacher, Mr Green, is very funny.",
              "Last week, Mr Green asked the children to paint their favourite animal. Mary painted her grandpa's black horse, Thunder. She used a lot of colours for the sky behind him.",
              "Mr Green liked Mary's picture very much. He put it in the library window. Now everybody in the town can see it!",
            ],
            items: [
              {
                question: "When does Mary go to her art class?",
                answers: [
                  "every thursday",
                  "on thursdays",
                  "on thursday",
                  "thursday",
                  "after school",
                ],
              },
              {
                question: "Where is the art class?",
                answers: [
                  "in the town library",
                  "in the library",
                  "the library",
                  "the town library",
                ],
              },
              {
                question: "What is the teacher like?",
                answers: [
                  "very funny",
                  "funny",
                ],
              },
              {
                question: "What did the children paint?",
                answers: [
                  "their favourite animal",
                  "an animal",
                  "favourite animal",
                ],
              },
              {
                question: "What colour is Thunder?",
                answers: [
                  "black",
                ],
              },
              {
                question: "Who has a horse?",
                answers: [
                  "her grandpa",
                  "grandpa",
                  "mary's grandpa",
                ],
              },
              {
                question: "Where did Mr Green put the picture?",
                answers: [
                  "in the library window",
                  "in the window",
                  "the library window",
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
              bg: "street",
              items: [
                {
                  e: "🏪",
                  x: 16,
                  y: 38,
                  size: 3.2,
                },
                {
                  e: "👩",
                  x: 38,
                  y: 62,
                  size: 2.6,
                },
                {
                  e: "🛍️",
                  x: 46,
                  y: 72,
                  size: 1.6,
                },
                {
                  e: "🚌",
                  x: 70,
                  y: 62,
                  size: 3,
                },
                {
                  e: "👦",
                  x: 84,
                  y: 74,
                  size: 2.2,
                },
                {
                  e: "🌧️",
                  x: 50,
                  y: 12,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where is the woman?",
              "What has the woman got?",
              "What is in the street?",
              "Write one sentence about the boy.",
              "Write one sentence about the weather.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The woman is in the street next to a shop. She has got a shopping bag. There is a bus in the street. The boy is waiting for the bus. It is raining today.",
          },
        },
      ],
    },
  ],
};
