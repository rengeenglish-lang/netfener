import type { CambridgeTest } from "./types";

/** A1 Movers practice test 21 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_21: CambridgeTest = {
  id: "movers-21",
  level: "movers",
  no: 21,
  title: "A1 Movers · Practice Test 21",
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
                word: "a mechanic",
                e: "🔧",
              },
              {
                word: "a clock",
                e: "🕰️",
              },
              {
                word: "a sports centre",
                e: "🏟️",
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
                word: "a knife",
                e: "🔪",
              },
              {
                word: "a hat",
                e: "🎩",
              },
              {
                word: "a rabbit",
                e: "🐇",
              },
            ],
            items: [
              {
                text: "This person repairs cars.",
                answer: "a mechanic",
              },
              {
                text: "This tells you the time.",
                answer: "a clock",
              },
              {
                text: "You can play basketball and swim in this place.",
                answer: "a sports centre",
              },
              {
                text: "This place has lots of trees and wild animals.",
                answer: "a forest",
              },
              {
                text: "You cut bread with this.",
                answer: "a knife",
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
              "Dan",
              "Aunt Mary",
            ],
            items: [
              {
                line: "Aunt Mary, can you help me with my project?",
                options: [
                  "It's paper.",
                  "Of course. What is it about?",
                  "I'm your aunt.",
                ],
                answer: 1,
              },
              {
                line: "It's about animals in the jungle.",
                options: [
                  "I like the beach.",
                  "It's Monday.",
                  "Great! Let's look on the computer.",
                ],
                answer: 2,
              },
              {
                line: "Which animal should I choose?",
                options: [
                  "What about monkeys? They're funny.",
                  "It's green.",
                  "At school.",
                ],
                answer: 0,
              },
              {
                line: "Good idea! What do monkeys eat?",
                options: [
                  "In trees.",
                  "Fruit, leaves and insects.",
                  "Every day.",
                ],
                answer: 1,
              },
              {
                line: "Can I print some pictures?",
                options: [
                  "Yes, but only five, please.",
                  "It's a printer.",
                  "No, it's a monkey.",
                ],
                answer: 0,
              },
              {
                line: "Thanks! You're very kind.",
                options: [
                  "It's a project.",
                  "I'm tired.",
                  "No problem, Dan.",
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
              "Every summer, Sue goes to stay with her uncle at his {1} by the sea. Her uncle is a fisherman. He goes out in his {2} every morning.",
              "This summer, Sue went with him for the first time. She wore a big orange {3} because she couldn't swim very well. They caught lots of fish.",
              "Then Sue saw something big in the water. It was a {4}! It swam around the boat and then went under the water. Sue couldn't {5} it. 'Nobody at school will believe me!' she said.",
            ],
            bank: [
              {
                word: "house",
                e: "🏠",
              },
              {
                word: "boat",
                e: "🚤",
              },
              {
                word: "life jacket",
                e: "🦺",
              },
              {
                word: "seal",
                e: "🦭",
              },
              {
                word: "believe",
                e: "😮",
              },
              {
                word: "school",
                e: "🏫",
              },
              {
                word: "pizza",
                e: "🍕",
              },
              {
                word: "skirt",
                e: "👗",
              },
            ],
            answers: [
              "house",
              "boat",
              "life jacket",
              "seal",
              "believe",
            ],
            titleQuestion: {
              options: [
                "A new school for Sue",
                "Sue's day on the boat",
                "Pizza for dinner",
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
            title: "Koalas",
            text: [
              "Koalas live in trees {1} Australia. They have got grey fur, big ears and black noses.",
              "Koalas eat leaves from one kind of tree. They don't drink much water, {2} they get water from the leaves. Koalas sleep {3} about twenty hours every day!",
              "Baby koalas live in their mothers' pockets for six months. {4} that, they ride on their mothers' backs. People often call koalas bears, but they {5} bears.",
            ],
            gaps: [
              {
                options: [
                  "at",
                  "in",
                  "on",
                ],
                answer: 1,
              },
              {
                options: [
                  "because",
                  "but",
                  "or",
                ],
                answer: 0,
              },
              {
                options: [
                  "since",
                  "in",
                  "for",
                ],
                answer: 2,
              },
              {
                options: [
                  "Before",
                  "When",
                  "After",
                ],
                answer: 2,
              },
              {
                options: [
                  "aren't",
                  "isn't",
                  "don't",
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
              "Peter and his friends made a band at school. Peter plays the drums, Sara plays the guitar and Tim sings. They practise in the school hall every Monday.",
              "Last week, they played at the school concert. Lots of parents came to watch. Peter's drums were very loud, and some little children covered their ears!",
              "After the concert, the head teacher said the band was fantastic. Now they want to play at the town festival in the summer.",
            ],
            items: [
              {
                question: "What does Peter play?",
                answers: [
                  "the drums",
                  "drums",
                ],
              },
              {
                question: "Who sings in the band?",
                answers: [
                  "tim",
                ],
              },
              {
                question: "Where do they practise?",
                answers: [
                  "in the school hall",
                  "the school hall",
                  "school hall",
                ],
              },
              {
                question: "When do they practise?",
                answers: [
                  "every monday",
                  "on mondays",
                  "monday",
                  "on monday",
                ],
              },
              {
                question: "Who came to watch the concert?",
                answers: [
                  "parents",
                  "lots of parents",
                  "the parents",
                ],
              },
              {
                question: "What did some little children cover?",
                answers: [
                  "their ears",
                  "ears",
                ],
              },
              {
                question: "Where do they want to play in the summer?",
                answers: [
                  "at the town festival",
                  "the town festival",
                  "town festival",
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
              bg: "park",
              items: [
                {
                  e: "🌳",
                  x: 14,
                  y: 34,
                  size: 3.2,
                },
                {
                  e: "👩",
                  x: 36,
                  y: 62,
                  size: 2.6,
                },
                {
                  e: "🐕",
                  x: 48,
                  y: 80,
                },
                {
                  e: "👧",
                  x: 66,
                  y: 64,
                  size: 2.4,
                },
                {
                  e: "🛴",
                  x: 76,
                  y: 80,
                  size: 1.8,
                },
                {
                  e: "🐦",
                  x: 16,
                  y: 18,
                  size: 1.4,
                },
              ],
            },
            prompts: [
              "Where are the woman and the girl?",
              "What has the girl got?",
              "What animal is with the woman?",
              "Write one sentence about the tree.",
              "Write one sentence about the bird.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The woman and the girl are in the park. The girl has got a scooter. There is a dog with the woman. The tree is tall and green. The bird is flying over the tree.",
          },
        },
      ],
    },
  ],
};
