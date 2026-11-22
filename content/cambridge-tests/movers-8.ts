import type { CambridgeTest } from "./types";

/** A1 Movers practice test 8 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_8: CambridgeTest = {
  id: "movers-8",
  level: "movers",
  no: 8,
  title: "A1 Movers · Practice Test 8",
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
                word: "a waiter",
                e: "🤵",
              },
              {
                word: "a helmet",
                e: "⛑️",
              },
              {
                word: "a map",
                e: "🗺️",
              },
              {
                word: "a field",
                e: "🌾",
              },
              {
                word: "a whale",
                e: "🐋",
              },
              {
                word: "a fork",
                e: "🍴",
              },
              {
                word: "a pillow",
                e: "🛏️",
              },
              {
                word: "a supermarket",
                e: "🏪",
              },
            ],
            items: [
              {
                text: "This person brings food to your table in a restaurant.",
                answer: "a waiter",
              },
              {
                text: "You wear this on your head when you ride a bike.",
                answer: "a helmet",
              },
              {
                text: "This helps you find places in a new town.",
                answer: "a map",
              },
              {
                text: "This is the biggest animal in the sea.",
                answer: "a whale",
              },
              {
                text: "You put your head on this in bed.",
                answer: "a pillow",
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
              "Jack",
              "Grandma",
            ],
            items: [
              {
                line: "Grandma, can we go to the park today?",
                options: [
                  "Yes, after lunch.",
                  "It's a park.",
                  "I'm fine.",
                ],
                answer: 0,
              },
              {
                line: "What's for lunch?",
                options: [
                  "At one o'clock.",
                  "Chicken and rice.",
                  "In the kitchen.",
                ],
                answer: 1,
              },
              {
                line: "Can I invite Ben?",
                options: [
                  "Of course. Call him now.",
                  "He's eight.",
                  "Yes, it is.",
                ],
                answer: 0,
              },
              {
                line: "Do I need my coat?",
                options: [
                  "It's blue.",
                  "I don't like coats.",
                  "Yes, it's cold today.",
                ],
                answer: 2,
              },
              {
                line: "Can we take my football?",
                options: [
                  "It's very round.",
                  "Yes, but don't kick it near the flowers!",
                  "No, it's Monday.",
                ],
                answer: 1,
              },
              {
                line: "You're the best grandma!",
                options: [
                  "She's at home.",
                  "Thank you, Jack!",
                  "It's sunny.",
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
              "Last winter, there was lots of {1} in Tom's village. Tom and his sister Kim put on their warm coats and went outside.",
              "They made a big snowman in the {2}. They gave it a carrot for a {3} and two stones for its eyes. Kim put her red {4} on the snowman.",
              "The next day, the sun came out and the snowman got smaller and smaller. 'Next year we can make a {5} one!' said Kim.",
            ],
            bank: [
              {
                word: "snow",
                e: "❄️",
              },
              {
                word: "garden",
                e: "🏡",
              },
              {
                word: "nose",
                e: "👃",
              },
              {
                word: "scarf",
                e: "🧣",
              },
              {
                word: "bigger",
                e: "⬆️",
              },
              {
                word: "beach",
                e: "🏖️",
              },
              {
                word: "mouth",
                e: "👄",
              },
              {
                word: "sandwich",
                e: "🥪",
              },
            ],
            answers: [
              "snow",
              "garden",
              "nose",
              "scarf",
              "bigger",
            ],
            titleQuestion: {
              options: [
                "The snowman in the garden",
                "A hot day at the beach",
                "Kim's new red coat",
              ],
              answer: 0,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Kangaroos",
            text: [
              "Kangaroos live in Australia. They {1} got strong back legs and a long tail.",
              "Kangaroos can't walk, {2} they can jump very far. Mother kangaroos carry their babies in a pocket {3} the front of their bodies.",
              "A baby kangaroo is very small when it {4} born. It stays in the pocket for about six months. Kangaroos eat grass and {5} sleep in the day.",
            ],
            gaps: [
              {
                options: [
                  "has",
                  "are",
                  "have",
                ],
                answer: 2,
              },
              {
                options: [
                  "and",
                  "but",
                  "because",
                ],
                answer: 1,
              },
              {
                options: [
                  "on",
                  "at",
                  "of",
                ],
                answer: 1,
              },
              {
                options: [
                  "was",
                  "has",
                  "is",
                ],
                answer: 2,
              },
              {
                options: [
                  "they",
                  "their",
                  "them",
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
              "Fred's uncle works at a farm near the mountains. In the summer holidays, Fred stayed there for a week. Every morning, he helped his uncle give food to the cows and the goats.",
              "On Wednesday, a little goat was missing. Fred and his uncle looked everywhere. Then Fred heard a noise in the barn. The goat was asleep in a box of hay!",
              "At the end of the week, his uncle gave Fred a present: a photo of Fred with the little goat. Fred put it on the wall in his bedroom.",
            ],
            items: [
              {
                question: "Where is the farm?",
                answers: [
                  "near the mountains",
                  "near mountains",
                ],
              },
              {
                question: "How long did Fred stay?",
                answers: [
                  "a week",
                  "one week",
                  "for a week",
                ],
              },
              {
                question: "What animals did Fred give food to?",
                answers: [
                  "cows and goats",
                  "the cows and the goats",
                  "cows and the goats",
                ],
              },
              {
                question: "When was the goat missing?",
                answers: [
                  "on wednesday",
                  "wednesday",
                ],
              },
              {
                question: "Where did Fred hear a noise?",
                answers: [
                  "in the barn",
                  "the barn",
                  "barn",
                ],
              },
              {
                question: "Where was the goat sleeping?",
                answers: [
                  "in a box of hay",
                  "in a box",
                  "in the hay",
                ],
              },
              {
                question: "Where did Fred put the photo?",
                answers: [
                  "on the wall",
                  "on his bedroom wall",
                  "in his bedroom",
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
              bg: "beach",
              items: [
                {
                  e: "⛱️",
                  x: 20,
                  y: 50,
                  size: 3,
                },
                {
                  e: "👨",
                  x: 24,
                  y: 66,
                  size: 2.6,
                },
                {
                  e: "👧",
                  x: 52,
                  y: 66,
                  size: 2.4,
                },
                {
                  e: "🏰",
                  x: 62,
                  y: 80,
                  size: 2,
                },
                {
                  e: "⛵",
                  x: 70,
                  y: 30,
                  size: 2.2,
                },
                {
                  e: "🐚",
                  x: 84,
                  y: 86,
                  size: 1.4,
                },
                {
                  e: "🐚",
                  x: 90,
                  y: 86,
                  size: 1.4,
                },
              ],
            },
            prompts: [
              "Where are they?",
              "What is the girl making?",
              "What is on the sea?",
              "Write one sentence about the man.",
              "Write one sentence about the shells.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "They are on the beach. The girl is making a sandcastle. There is a boat on the sea. The man is sitting under the umbrella. There are two shells on the sand.",
          },
        },
      ],
    },
  ],
};
