import type { CambridgeTest } from "./types";

/** A1 Movers practice test 24 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_24: CambridgeTest = {
  id: "movers-24",
  level: "movers",
  no: 24,
  title: "A1 Movers · Practice Test 24",
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
                word: "a dentist",
                e: "🦷",
              },
              {
                word: "a torch",
                e: "🔦",
              },
              {
                word: "a zoo",
                e: "🦁",
              },
              {
                word: "a waterfall",
                e: "🌊",
              },
              {
                word: "a bee",
                e: "🐝",
              },
              {
                word: "a cup",
                e: "☕",
              },
              {
                word: "a sweater",
                e: "🧶",
              },
              {
                word: "a ship",
                e: "🚢",
              },
            ],
            items: [
              {
                text: "You can see lions and elephants in this place.",
                answer: "a zoo",
              },
              {
                text: "You use this to see in the dark.",
                answer: "a torch",
              },
              {
                text: "This small insect makes honey.",
                answer: "a bee",
              },
              {
                text: "This is a very big boat.",
                answer: "a ship",
              },
              {
                text: "You wear this to keep warm. It is made of wool.",
                answer: "a sweater",
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
              "Kim",
              "Mr Hill",
            ],
            items: [
              {
                line: "Excuse me, Mr Hill. Where's the music room?",
                options: [
                  "It's music.",
                  "It's upstairs, next to the library.",
                  "I'm a teacher.",
                ],
                answer: 1,
              },
              {
                line: "Thank you. Is the music lesson at ten?",
                options: [
                  "No, it's at eleven today.",
                  "It's a guitar.",
                  "Yes, I'm fine.",
                ],
                answer: 0,
              },
              {
                line: "Oh! Can I go to the library first?",
                options: [
                  "It's upstairs.",
                  "I like books.",
                  "Yes, but don't be late.",
                ],
                answer: 2,
              },
              {
                line: "Do you know where my friend Sally is?",
                options: [
                  "She's eight.",
                  "It's her bag.",
                  "She's in the playground.",
                ],
                answer: 2,
              },
              {
                line: "I'll go and find her.",
                options: [
                  "OK. See you later.",
                  "It's a playground.",
                  "No, thank you.",
                ],
                answer: 0,
              },
              {
                line: "Thanks, Mr Hill!",
                options: [
                  "It's eleven.",
                  "You're welcome, Kim.",
                  "I'm busy.",
                ],
                answer: 1,
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
              "Last Wednesday, there was a big {1} in Ben's town. All the streets were white. There was no school, so Ben and his sister went to the {2} with their sledge.",
              "They went down the hill again and again. It was very {3}! Then Ben's sister threw a {4} at him. Soon all the children were playing.",
              "In the afternoon, they were very cold and wet. They went home and Mum made them hot {5}. It was the best snow day ever!",
            ],
            bank: [
              {
                word: "snowstorm",
                e: "🌨️",
              },
              {
                word: "hill",
                e: "⛰️",
              },
              {
                word: "exciting",
                e: "🤩",
              },
              {
                word: "snowball",
                e: "⚪",
              },
              {
                word: "chocolate",
                e: "🍫",
              },
              {
                word: "beach",
                e: "🏖️",
              },
              {
                word: "tired",
                e: "😴",
              },
              {
                word: "lemonade",
                e: "🍋",
              },
            ],
            answers: [
              "snowstorm",
              "hill",
              "exciting",
              "snowball",
              "chocolate",
            ],
            titleQuestion: {
              options: [
                "A hot day at the beach",
                "A snow day",
                "Ben's birthday",
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
            title: "Bears",
            text: [
              "There are eight kinds of bear {1} the world. Some bears are black, some are brown and some are white.",
              "Bears eat lots of different food. They like fish, fruit, nuts and honey. In autumn, they eat a lot {2} they get fat.",
              "In winter, many bears sleep {3} caves for months. They don't eat {4} drink anything at that time. Baby bears are born in winter, {5} they are very small.",
            ],
            gaps: [
              {
                options: [
                  "on",
                  "at",
                  "in",
                ],
                answer: 2,
              },
              {
                options: [
                  "so",
                  "but",
                  "or",
                ],
                answer: 0,
              },
              {
                options: [
                  "on",
                  "in",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "or",
                  "and",
                  "but",
                ],
                answer: 0,
              },
              {
                options: [
                  "but",
                  "so",
                  "and",
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
              "Emily loves cooking. Every Friday evening, she cooks dinner for her family. Her mum helps her to cut the vegetables.",
              "Last Friday, Emily made spaghetti with tomato sauce. She put lots of cheese on the top. For dessert, she made a strawberry ice cream.",
              "Her little brother, Joe, didn't want to eat the spaghetti at first, but then he ate two plates! Now Emily wants to cook a new meal every week.",
            ],
            items: [
              {
                question: "What does Emily love?",
                answers: [
                  "cooking",
                ],
              },
              {
                question: "When does she cook dinner?",
                answers: [
                  "every friday evening",
                  "on friday evenings",
                  "friday evening",
                  "on friday",
                ],
              },
              {
                question: "Who helps her cut the vegetables?",
                answers: [
                  "her mum",
                  "mum",
                ],
              },
              {
                question: "What did Emily make last Friday?",
                answers: [
                  "spaghetti",
                  "spaghetti with tomato sauce",
                ],
              },
              {
                question: "What did she put on the top?",
                answers: [
                  "cheese",
                  "lots of cheese",
                ],
              },
              {
                question: "What was the dessert?",
                answers: [
                  "strawberry ice cream",
                  "a strawberry ice cream",
                  "ice cream",
                ],
              },
              {
                question: "How many plates did Joe eat?",
                answers: [
                  "two",
                  "2",
                  "two plates",
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
              bg: "farm",
              items: [
                {
                  e: "🌳",
                  x: 14,
                  y: 34,
                  size: 3.2,
                },
                {
                  e: "🐄",
                  x: 34,
                  y: 66,
                  size: 3,
                },
                {
                  e: "🐖",
                  x: 56,
                  y: 80,
                },
                {
                  e: "👨‍🌾",
                  x: 70,
                  y: 60,
                  size: 2.6,
                },
                {
                  e: "🐕",
                  x: 84,
                  y: 80,
                },
                {
                  e: "🌞",
                  x: 84,
                  y: 12,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where is the farmer?",
              "What animals are on the farm?",
              "What is next to the farmer?",
              "Write one sentence about the tree.",
              "Write one sentence about the weather.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The farmer is on the farm. There is a cow, a pig and a dog on the farm. The dog is next to the farmer. The tree is big and it is next to the cow. It is a hot and sunny day.",
          },
        },
      ],
    },
  ],
};
