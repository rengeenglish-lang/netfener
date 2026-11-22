import type { CambridgeTest } from "./types";

/** A1 Movers practice test 17 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_17: CambridgeTest = {
  id: "movers-17",
  level: "movers",
  no: 17,
  title: "A1 Movers · Practice Test 17",
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
                word: "a firefighter",
                e: "🧑‍🚒",
              },
              {
                word: "a sock",
                e: "🧦",
              },
              {
                word: "a bus station",
                e: "🚏",
              },
              {
                word: "a hill",
                e: "⛰️",
              },
              {
                word: "a lion",
                e: "🦁",
              },
              {
                word: "a pan",
                e: "🍳",
              },
              {
                word: "a phone",
                e: "📱",
              },
              {
                word: "a cushion",
                e: "🛋️",
              },
            ],
            items: [
              {
                text: "This person helps when there is a fire.",
                answer: "a firefighter",
              },
              {
                text: "You wear this on your foot inside your shoe.",
                answer: "a sock",
              },
              {
                text: "This is a small mountain.",
                answer: "a hill",
              },
              {
                text: "This big wild cat has got a lot of hair around its head.",
                answer: "a lion",
              },
              {
                text: "You can cook eggs in this.",
                answer: "a pan",
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
              "Ben",
              "Mrs Lee",
            ],
            items: [
              {
                line: "Mrs Lee, I can't do this maths homework.",
                options: [
                  "Which question is difficult?",
                  "It's maths.",
                  "I'm a teacher.",
                ],
                answer: 0,
              },
              {
                line: "Number five. It's about money.",
                options: [
                  "I like money.",
                  "It's Tuesday.",
                  "Let's look at it together.",
                ],
                answer: 2,
              },
              {
                line: "I don't understand the word 'change'.",
                options: [
                  "It's red.",
                  "Yes, it is.",
                  "It's the money you get back in a shop.",
                ],
                answer: 2,
              },
              {
                line: "Oh! Now I understand.",
                options: [
                  "Good! Try the next one.",
                  "It's a shop.",
                  "No, it isn't.",
                ],
                answer: 0,
              },
              {
                line: "Can I finish it at home?",
                options: [
                  "It's homework.",
                  "Yes, but bring it on Friday.",
                  "On the bus.",
                ],
                answer: 1,
              },
              {
                line: "Thank you for your help!",
                options: [
                  "You're welcome, Ben.",
                  "It's five.",
                  "I'm fine.",
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
              "Nina's family has a little boat. One sunny morning, they sailed to a small {1}. They took a picnic and some {2} for swimming.",
              "On the island, Nina found a strange old {3} in the sand. It was very heavy. Her dad opened it with a stone. Inside, there were lots of old {4}!",
              "They took the coins to a museum. The museum said they were three hundred years old! Nina's photo was in the {5} the next day.",
            ],
            bank: [
              {
                word: "island",
                e: "🏝️",
              },
              {
                word: "towels",
                e: "🧺",
              },
              {
                word: "box",
                e: "📦",
              },
              {
                word: "coins",
                e: "🪙",
              },
              {
                word: "newspaper",
                e: "📰",
              },
              {
                word: "supermarket",
                e: "🏪",
              },
              {
                word: "trousers",
                e: "👖",
              },
              {
                word: "teacher",
                e: "👩‍🏫",
              },
            ],
            answers: [
              "island",
              "towels",
              "box",
              "coins",
              "newspaper",
            ],
            titleQuestion: {
              options: [
                "Treasure on the island",
                "Nina's first day at school",
                "A picnic in the rain",
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
            title: "Sharks",
            text: [
              "There are more {1} five hundred kinds of shark. Some sharks are very big, but others are smaller than your hand.",
              "Sharks have got lots of teeth. When they lose a tooth, a new one grows {2} its place. Some sharks lose thousands of teeth {3} their lives!",
              "Most sharks eat fish. Sharks can smell food from very far away. People are often afraid {4} sharks, but sharks don't usually attack people. We need {5} protect sharks.",
            ],
            gaps: [
              {
                options: [
                  "than",
                  "that",
                  "then",
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
                  "in",
                  "at",
                  "for",
                ],
                answer: 0,
              },
              {
                options: [
                  "from",
                  "with",
                  "of",
                ],
                answer: 2,
              },
              {
                options: [
                  "for",
                  "to",
                  "at",
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
              "Mike's mum works in a hospital. She is a nurse. Sometimes she works at night and sleeps in the day, so Mike and his sister have to be very quiet.",
              "Last week, Mike had a bad cold. He couldn't go to school. His mum gave him some medicine and made him chicken soup.",
              "Mike stayed in bed for three days and watched cartoons. On Friday, he felt better and went back to school. His friends were happy to see him.",
            ],
            items: [
              {
                question: "Where does Mike's mum work?",
                answers: [
                  "in a hospital",
                  "a hospital",
                  "at a hospital",
                ],
              },
              {
                question: "What is her job?",
                answers: [
                  "a nurse",
                  "nurse",
                ],
              },
              {
                question: "When does she sometimes work?",
                answers: [
                  "at night",
                ],
              },
              {
                question: "What did Mike have last week?",
                answers: [
                  "a bad cold",
                  "a cold",
                  "cold",
                ],
              },
              {
                question: "What did Mum make him?",
                answers: [
                  "chicken soup",
                  "soup",
                ],
              },
              {
                question: "How long did Mike stay in bed?",
                answers: [
                  "three days",
                  "for three days",
                  "3 days",
                ],
              },
              {
                question: "When did Mike go back to school?",
                answers: [
                  "on friday",
                  "friday",
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
                  e: "🏚️",
                  x: 14,
                  y: 38,
                  size: 3.2,
                },
                {
                  e: "🐴",
                  x: 40,
                  y: 64,
                  size: 3,
                },
                {
                  e: "👧",
                  x: 58,
                  y: 60,
                  size: 2.4,
                },
                {
                  e: "🍎",
                  x: 62,
                  y: 52,
                  size: 1.2,
                },
                {
                  e: "🐔",
                  x: 80,
                  y: 82,
                },
                {
                  e: "🐔",
                  x: 86,
                  y: 84,
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
              "What animal is next to the girl?",
              "What is the girl giving to the horse?",
              "How many chickens are there?",
              "Write one sentence about the barn.",
              "Write one sentence about the weather.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "There is a horse next to the girl. The girl is giving the horse an apple. There are two chickens on the farm. The barn is old and brown. It is raining on the farm.",
          },
        },
      ],
    },
  ],
};
