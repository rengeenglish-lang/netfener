import type { CambridgeTest } from "./types";

/** A1 Movers practice test 19 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_19: CambridgeTest = {
  id: "movers-19",
  level: "movers",
  no: 19,
  title: "A1 Movers · Practice Test 19",
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
                word: "a lamp",
                e: "💡",
              },
              {
                word: "a car park",
                e: "🅿️",
              },
              {
                word: "a river",
                e: "🏞️",
              },
              {
                word: "a whale",
                e: "🐋",
              },
              {
                word: "a sandwich",
                e: "🥪",
              },
              {
                word: "a jacket",
                e: "🧥",
              },
              {
                word: "a tiger",
                e: "🐯",
              },
            ],
            items: [
              {
                text: "This person makes meals in a kitchen.",
                answer: "a cook",
              },
              {
                text: "This gives you light at night.",
                answer: "a lamp",
              },
              {
                text: "You leave your car in this place.",
                answer: "a car park",
              },
              {
                text: "This is long water that goes to the sea.",
                answer: "a river",
              },
              {
                text: "This big wild cat is orange and black.",
                answer: "a tiger",
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
              "Jim",
              "Lily",
            ],
            items: [
              {
                line: "Lily, would you like to play tennis after school?",
                options: [
                  "Sorry, I can't. I'm going to the dentist.",
                  "It's a ball.",
                  "Yes, it is.",
                ],
                answer: 0,
              },
              {
                line: "What about tomorrow?",
                options: [
                  "At the dentist.",
                  "Tomorrow is fine.",
                  "It's Thursday.",
                ],
                answer: 1,
              },
              {
                line: "What time can you play?",
                options: [
                  "At four o'clock.",
                  "Every day.",
                  "With my racket.",
                ],
                answer: 0,
              },
              {
                line: "Have you got a racket?",
                options: [
                  "It's tennis.",
                  "No, I'm not.",
                  "Yes, it's new.",
                ],
                answer: 2,
              },
              {
                line: "Where shall we meet?",
                options: [
                  "Tomorrow.",
                  "It's big.",
                  "In front of the sports centre.",
                ],
                answer: 2,
              },
              {
                line: "Great! See you tomorrow.",
                options: [
                  "See you, Jim!",
                  "It's my racket.",
                  "I'm hungry.",
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
              "Fred wanted to be a {1} when he grew up. He loved the stars and the {2}. Every night, he looked at the sky from his bedroom window.",
              "For his birthday, his parents gave him a {3}. That night, Fred saw the moon very clearly. He saw big round holes on it! He also saw a bright red {4}. 'That's Mars,' said Dad.",
              "Now Fred reads books about space every day. He wants to {5} to Mars one day!",
            ],
            bank: [
              {
                word: "astronaut",
                e: "🧑‍🚀",
              },
              {
                word: "moon",
                e: "🌙",
              },
              {
                word: "telescope",
                e: "🔭",
              },
              {
                word: "planet",
                e: "🪐",
              },
              {
                word: "fly",
                e: "🚀",
              },
              {
                word: "farmer",
                e: "🧑‍🌾",
              },
              {
                word: "sandwich",
                e: "🥪",
              },
              {
                word: "swim",
                e: "🏊",
              },
            ],
            answers: [
              "astronaut",
              "moon",
              "telescope",
              "planet",
              "fly",
            ],
            titleQuestion: {
              options: [
                "A day on the farm",
                "Fred's new swimming pool",
                "Fred and the stars",
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
            title: "Polar bears",
            text: [
              "Polar bears live {1} very cold places near the North Pole. They have got thick white fur.",
              "Polar bears are very good swimmers. They can swim {2} many hours without stopping. They eat fish and seals, {3} they catch on the ice.",
              "Under its white fur, a polar bear's skin is black! This helps it stay warm. Baby polar bears are born in winter, {4} they stay with their mothers {5} about two years.",
            ],
            gaps: [
              {
                options: [
                  "at",
                  "on",
                  "in",
                ],
                answer: 2,
              },
              {
                options: [
                  "since",
                  "on",
                  "for",
                ],
                answer: 2,
              },
              {
                options: [
                  "which",
                  "who",
                  "where",
                ],
                answer: 0,
              },
              {
                options: [
                  "but",
                  "and",
                  "or",
                ],
                answer: 1,
              },
              {
                options: [
                  "for",
                  "in",
                  "at",
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
              "Sally helps her dad at his café every Sunday. The café is in the market square and it opens at nine o'clock.",
              "Sally carries cups of tea and plates of cake to the tables. Her favourite customer is old Mr Jones. He always has a coffee and a piece of lemon cake, and he tells funny stories.",
              "Last Sunday, Mr Jones gave Sally a small present. It was a book about cakes! Sally wants to make a lemon cake for Mr Jones next week.",
            ],
            items: [
              {
                question: "When does Sally help her dad?",
                answers: [
                  "every sunday",
                  "on sundays",
                  "sunday",
                  "on sunday",
                ],
              },
              {
                question: "Where is the café?",
                answers: [
                  "in the market square",
                  "the market square",
                  "market square",
                ],
              },
              {
                question: "What time does the café open?",
                answers: [
                  "at nine o'clock",
                  "nine o'clock",
                  "9 o'clock",
                  "at nine",
                ],
              },
              {
                question: "Who is Sally's favourite customer?",
                answers: [
                  "mr jones",
                  "old mr jones",
                ],
              },
              {
                question: "What does Mr Jones always eat?",
                answers: [
                  "lemon cake",
                  "a piece of lemon cake",
                ],
              },
              {
                question: "What did Mr Jones give Sally?",
                answers: [
                  "a book about cakes",
                  "a book",
                  "a present",
                  "a small present",
                ],
              },
              {
                question: "What does Sally want to make?",
                answers: [
                  "a lemon cake",
                  "lemon cake",
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
                  e: "🏫",
                  x: 18,
                  y: 36,
                  size: 3.4,
                },
                {
                  e: "👦",
                  x: 38,
                  y: 64,
                  size: 2.4,
                },
                {
                  e: "👧",
                  x: 50,
                  y: 64,
                  size: 2.4,
                },
                {
                  e: "🚌",
                  x: 74,
                  y: 62,
                  size: 3,
                },
                {
                  e: "🚦",
                  x: 88,
                  y: 36,
                  size: 2.2,
                },
                {
                  e: "☀️",
                  x: 50,
                  y: 10,
                  size: 2,
                },
              ],
            },
            prompts: [
              "Where are the children?",
              "What is in the street?",
              "What building is behind the children?",
              "Write one sentence about the girl.",
              "Write one sentence about the traffic light.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The children are in the street next to the school. There is a bus in the street. The school is behind the children. The girl is waiting for the bus with her brother. The traffic light is red.",
          },
        },
      ],
    },
  ],
};
