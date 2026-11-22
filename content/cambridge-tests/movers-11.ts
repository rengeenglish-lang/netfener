import type { CambridgeTest } from "./types";

/** A1 Movers practice test 11 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_11: CambridgeTest = {
  id: "movers-11",
  level: "movers",
  no: 11,
  title: "A1 Movers · Practice Test 11",
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
                word: "a farmer",
                e: "🧑‍🌾",
              },
              {
                word: "a toothbrush",
                e: "🪥",
              },
              {
                word: "a library",
                e: "📚",
              },
              {
                word: "a jungle",
                e: "🌴",
              },
              {
                word: "a shark",
                e: "🦈",
              },
              {
                word: "a plate",
                e: "🍽️",
              },
              {
                word: "a mountain",
                e: "⛰️",
              },
              {
                word: "a uniform",
                e: "👔",
              },
            ],
            items: [
              {
                text: "This person grows vegetables and has animals.",
                answer: "a farmer",
              },
              {
                text: "You use this to clean your teeth.",
                answer: "a toothbrush",
              },
              {
                text: "There are lots of trees and wild animals in this hot place.",
                answer: "a jungle",
              },
              {
                text: "This is very high and sometimes has snow on the top.",
                answer: "a mountain",
              },
              {
                text: "Children wear these same clothes at some schools.",
                answer: "a uniform",
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
              "Fred",
              "Katy",
            ],
            items: [
              {
                line: "Katy, do you want to come to my party?",
                options: [
                  "It's a party.",
                  "I'm nine.",
                  "Yes, I'd love to! When is it?",
                ],
                answer: 2,
              },
              {
                line: "It's on Saturday afternoon.",
                options: [
                  "I don't like Saturday.",
                  "Great! Where is it?",
                  "It's a cake.",
                ],
                answer: 1,
              },
              {
                line: "At my house. Do you know where I live?",
                options: [
                  "It's big.",
                  "Yes, next to the library.",
                  "On Sunday.",
                ],
                answer: 1,
              },
              {
                line: "What would you like for your birthday?",
                options: [
                  "Twelve.",
                  "Yes, please.",
                  "A new football, please!",
                ],
                answer: 2,
              },
              {
                line: "Can my sister come too?",
                options: [
                  "Of course! Bring her with you.",
                  "She's tall.",
                  "No, it's red.",
                ],
                answer: 0,
              },
              {
                line: "Thanks for inviting me!",
                options: [
                  "It's my house.",
                  "That's OK. See you on Saturday!",
                  "I'm hungry.",
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
              "Max loves the sea. Last summer, he went on a boat {1} with his aunt. They saw lots of {2} jumping out of the water.",
              "Then the {3} started to blow and the sea got rough. Max felt {4}, so he sat down and drank some water.",
              "After an hour, the sea was quiet again. Max looked over the side of the boat and saw a big {5} swimming below. 'Wow! This is the best trip ever!' he said.",
            ],
            bank: [
              {
                word: "trip",
                e: "⛵",
              },
              {
                word: "dolphins",
                e: "🐬",
              },
              {
                word: "wind",
                e: "🌬️",
              },
              {
                word: "sick",
                e: "🤢",
              },
              {
                word: "turtle",
                e: "🐢",
              },
              {
                word: "cinema",
                e: "🎬",
              },
              {
                word: "happy",
                e: "😀",
              },
              {
                word: "rain",
                e: "🌧️",
              },
            ],
            answers: [
              "trip",
              "dolphins",
              "wind",
              "sick",
              "turtle",
            ],
            titleQuestion: {
              options: [
                "Max's trip on the sea",
                "A cold day in the mountains",
                "Max's new bike",
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
            title: "Crocodiles",
            text: [
              "Crocodiles are big animals with long tails and lots {1} teeth. They live in hot countries.",
              "Crocodiles spend a lot of time in rivers. They swim very well, {2} they can also walk on land.",
              "Crocodiles eat fish, birds and other animals. They can stay under water {3} a long time. Mother crocodiles lay {4} eggs in the sand, and they {5} the babies when they come out.",
            ],
            gaps: [
              {
                options: [
                  "for",
                  "with",
                  "of",
                ],
                answer: 2,
              },
              {
                options: [
                  "but",
                  "or",
                  "so",
                ],
                answer: 0,
              },
              {
                options: [
                  "since",
                  "for",
                  "on",
                ],
                answer: 1,
              },
              {
                options: [
                  "their",
                  "they",
                  "them",
                ],
                answer: 0,
              },
              {
                options: [
                  "looks after",
                  "looking after",
                  "look after",
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
              "Jenny lives in a flat in the city centre. Her flat is on the tenth floor, so she can see the whole city from her bedroom window.",
              "On Saturday, the lift stopped working. Jenny and her dad had to walk up all the stairs with their shopping. They were very tired when they got home.",
              "In the evening, Jenny's neighbour, Mrs White, brought them a big apple pie. 'You need this after all those stairs!' she said. They ate it with ice cream.",
            ],
            items: [
              {
                question: "Where does Jenny live?",
                answers: [
                  "in a flat",
                  "in the city centre",
                  "in a flat in the city centre",
                ],
              },
              {
                question: "Which floor is the flat on?",
                answers: [
                  "the tenth floor",
                  "tenth floor",
                  "the tenth",
                  "tenth",
                ],
              },
              {
                question: "What can Jenny see from her window?",
                answers: [
                  "the whole city",
                  "the city",
                ],
              },
              {
                question: "What stopped working on Saturday?",
                answers: [
                  "the lift",
                  "lift",
                  "a lift",
                ],
              },
              {
                question: "What did they carry up the stairs?",
                answers: [
                  "their shopping",
                  "shopping",
                  "the shopping",
                ],
              },
              {
                question: "Who is Mrs White?",
                answers: [
                  "jenny's neighbour",
                  "her neighbour",
                  "a neighbour",
                  "their neighbour",
                  "the neighbour",
                ],
              },
              {
                question: "What did they eat with the pie?",
                answers: [
                  "ice cream",
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
              bg: "garden",
              items: [
                {
                  e: "🏡",
                  x: 14,
                  y: 38,
                  size: 3.2,
                },
                {
                  e: "👴",
                  x: 36,
                  y: 62,
                  size: 2.6,
                },
                {
                  e: "🌷",
                  x: 50,
                  y: 80,
                },
                {
                  e: "🌷",
                  x: 56,
                  y: 82,
                },
                {
                  e: "🌷",
                  x: 62,
                  y: 80,
                },
                {
                  e: "👧",
                  x: 76,
                  y: 62,
                  size: 2.4,
                },
                {
                  e: "🦋",
                  x: 64,
                  y: 36,
                  size: 1.6,
                },
              ],
            },
            prompts: [
              "Who is in the garden?",
              "How many flowers are there?",
              "What is flying over the flowers?",
              "Write one sentence about the girl.",
              "Write one sentence about the house.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The grandfather and the girl are in the garden. There are three flowers. A butterfly is flying over the flowers. The girl is smiling at her grandfather. The house is behind the grandfather.",
          },
        },
      ],
    },
  ],
};
