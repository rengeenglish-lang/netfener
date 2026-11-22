import type { CambridgeTest } from "./types";

/** A1 Movers practice test 10 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_10: CambridgeTest = {
  id: "movers-10",
  level: "movers",
  no: 10,
  title: "A1 Movers · Practice Test 10",
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
                word: "a cup",
                e: "☕",
              },
              {
                word: "a lake",
                e: "🏞️",
              },
              {
                word: "an octopus",
                e: "🐙",
              },
              {
                word: "a ladder",
                e: "🪜",
              },
              {
                word: "a sweater",
                e: "🧶",
              },
              {
                word: "a bat",
                e: "🦇",
              },
              {
                word: "a hospital",
                e: "🏥",
              },
            ],
            items: [
              {
                text: "This person looks after your teeth.",
                answer: "a dentist",
              },
              {
                text: "You drink tea or coffee from this.",
                answer: "a cup",
              },
              {
                text: "This animal has got eight arms.",
                answer: "an octopus",
              },
              {
                text: "You climb this to get to high places.",
                answer: "a ladder",
              },
              {
                text: "Sick people go to this place to see a doctor.",
                answer: "a hospital",
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
              "Nick",
              "Mum",
            ],
            items: [
              {
                line: "Mum, I can't find my school bag.",
                options: [
                  "It's blue.",
                  "Yes, I can.",
                  "Did you look under your bed?",
                ],
                answer: 2,
              },
              {
                line: "Yes, but it isn't there.",
                options: [
                  "It's a bed.",
                  "At school.",
                  "What about the living room?",
                ],
                answer: 2,
              },
              {
                line: "I found it! But where's my pencil case?",
                options: [
                  "It's on the kitchen table.",
                  "It's new.",
                  "I like pencils.",
                ],
                answer: 0,
              },
              {
                line: "Thanks! What time is it now?",
                options: [
                  "It's Monday.",
                  "It's half past eight.",
                  "On the bus.",
                ],
                answer: 1,
              },
              {
                line: "Oh no! I'm late!",
                options: [
                  "Don't worry. I can drive you to school.",
                  "It's late.",
                  "I'm Mum.",
                ],
                answer: 0,
              },
              {
                line: "Thank you, Mum!",
                options: [
                  "It's a car.",
                  "I'm tired.",
                  "You're welcome. Get in the car!",
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
              "One day, Ben found a small, wet {1} outside his house. It was crying because it was lost. Ben took it inside and gave it some {2} to drink.",
              "Ben's dad made a poster with a photo of the cat and put it on a {3} in the street. The next day, a girl knocked on the {4}.",
              "'That's my cat, Snowy!' she said. She was very {5}. She hugged the cat and thanked Ben. Now Ben and the girl are friends.",
            ],
            bank: [
              {
                word: "kitten",
                e: "🐈",
              },
              {
                word: "milk",
                e: "🥛",
              },
              {
                word: "tree",
                e: "🌳",
              },
              {
                word: "door",
                e: "🚪",
              },
              {
                word: "happy",
                e: "😀",
              },
              {
                word: "juice",
                e: "🧃",
              },
              {
                word: "window",
                e: "🪟",
              },
              {
                word: "angry",
                e: "😠",
              },
            ],
            answers: [
              "kitten",
              "milk",
              "tree",
              "door",
              "happy",
            ],
            titleQuestion: {
              options: [
                "A new school bag",
                "Dad's birthday present",
                "Ben finds a kitten",
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
            title: "Bees",
            text: [
              "Bees are small insects {1} live together in big families. One family can have thousands of bees!",
              "Bees fly from flower to flower {2} collect food. They take it back to {3} home and make honey.",
              "Bees are very important {4} people. They help plants and fruit trees grow. Without bees, we {5} have lots of fruit.",
            ],
            gaps: [
              {
                options: [
                  "who",
                  "which",
                  "where",
                ],
                answer: 1,
              },
              {
                options: [
                  "to",
                  "for",
                  "of",
                ],
                answer: 0,
              },
              {
                options: [
                  "its",
                  "our",
                  "their",
                ],
                answer: 2,
              },
              {
                options: [
                  "with",
                  "for",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "don't",
                  "can't",
                  "isn't",
                ],
                answer: 1,
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
              "Vicky's family went camping in the countryside last weekend. They put up their tent next to a river. Vicky's little brother, Sam, wanted to catch fish.",
              "In the evening, Dad made a fire and they cooked sausages. Then they looked at the stars. Vicky saw a shooting star and made a wish.",
              "In the night, it started to rain and the tent got wet. In the morning, the sun came out, and they put their clothes on a tree to dry.",
            ],
            items: [
              {
                question: "When did the family go camping?",
                answers: [
                  "last weekend",
                  "at the weekend",
                ],
              },
              {
                question: "Where did they put up their tent?",
                answers: [
                  "next to a river",
                  "next to the river",
                  "by a river",
                  "near a river",
                ],
              },
              {
                question: "What did Sam want to do?",
                answers: [
                  "catch fish",
                  "to catch fish",
                  "go fishing",
                ],
              },
              {
                question: "Who made a fire?",
                answers: [
                  "dad",
                  "vicky's dad",
                  "her dad",
                ],
              },
              {
                question: "What did they cook?",
                answers: [
                  "sausages",
                ],
              },
              {
                question: "What did Vicky see in the sky?",
                answers: [
                  "a shooting star",
                  "shooting star",
                  "stars",
                  "the stars",
                ],
              },
              {
                question: "Where did they put their clothes?",
                answers: [
                  "on a tree",
                  "on the tree",
                  "in a tree",
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
                  e: "🏠",
                  x: 14,
                  y: 38,
                  size: 3.2,
                },
                {
                  e: "👨‍🌾",
                  x: 36,
                  y: 60,
                  size: 2.6,
                },
                {
                  e: "🐄",
                  x: 56,
                  y: 66,
                  size: 3,
                },
                {
                  e: "🐑",
                  x: 76,
                  y: 80,
                },
                {
                  e: "🐑",
                  x: 84,
                  y: 82,
                },
                {
                  e: "🚜",
                  x: 80,
                  y: 48,
                  size: 2.4,
                },
                {
                  e: "☁️",
                  x: 50,
                  y: 12,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where is the farmer?",
              "What animal is next to the farmer?",
              "How many sheep are there?",
              "Write one sentence about the tractor.",
              "Write one sentence about the sky.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The farmer is on the farm. There is a cow next to the farmer. There are two sheep in the field. The tractor is red and it is behind the sheep. There is a white cloud in the sky.",
          },
        },
      ],
    },
  ],
};
