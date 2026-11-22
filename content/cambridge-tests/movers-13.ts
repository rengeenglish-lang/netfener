import type { CambridgeTest } from "./types";

/** A1 Movers practice test 13 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_13: CambridgeTest = {
  id: "movers-13",
  level: "movers",
  no: 13,
  title: "A1 Movers · Practice Test 13",
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
                word: "a singer",
                e: "🎤",
              },
              {
                word: "a necklace",
                e: "📿",
              },
              {
                word: "a café",
                e: "☕",
              },
              {
                word: "a waterfall",
                e: "🌊",
              },
              {
                word: "a parrot",
                e: "🦜",
              },
              {
                word: "a bowl",
                e: "🥣",
              },
              {
                word: "a sandwich",
                e: "🥪",
              },
              {
                word: "a tent",
                e: "⛺",
              },
            ],
            items: [
              {
                text: "This person sings songs at concerts.",
                answer: "a singer",
              },
              {
                text: "You wear this around your neck.",
                answer: "a necklace",
              },
              {
                text: "You can have a drink and a cake in this place.",
                answer: "a café",
              },
              {
                text: "This is water falling from a high place.",
                answer: "a waterfall",
              },
              {
                text: "You sleep in this when you go camping.",
                answer: "a tent",
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
              "Paul",
              "Mrs Smith",
            ],
            items: [
              {
                line: "Excuse me, Mrs Smith. Can I go to the library?",
                options: [
                  "It's a book.",
                  "Yes, but come back before eleven.",
                  "I'm a teacher.",
                ],
                answer: 1,
              },
              {
                line: "What time is it now?",
                options: [
                  "It's half past ten.",
                  "On Monday.",
                  "It's in the library.",
                ],
                answer: 0,
              },
              {
                line: "Can I borrow two books?",
                options: [
                  "They're red.",
                  "I'm reading.",
                  "Yes, you can take three.",
                ],
                answer: 2,
              },
              {
                line: "Do I need my library card?",
                options: [
                  "It's blue.",
                  "Yes, don't forget it!",
                  "At school.",
                ],
                answer: 1,
              },
              {
                line: "Where is my card? Oh, here it is!",
                options: [
                  "It's my card.",
                  "Good. Off you go!",
                  "No, I'm not.",
                ],
                answer: 1,
              },
              {
                line: "Thank you, Mrs Smith!",
                options: [
                  "It's eleven.",
                  "Yes, it is.",
                  "You're welcome, Paul.",
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
              "It was Grandpa's birthday. Kate and her brother wanted to make him a {1}. They got flour, eggs, sugar and some {2} from the kitchen.",
              "They mixed everything in a big {3} and put it in the oven. Then they played a game and forgot about the cake! The kitchen smelled of {4}.",
              "The cake was black! Kate was very sad. But Grandpa laughed and took them all out for pizza. 'This is the {5} birthday!' he said.",
            ],
            bank: [
              {
                word: "cake",
                e: "🎂",
              },
              {
                word: "chocolate",
                e: "🍫",
              },
              {
                word: "bowl",
                e: "🥣",
              },
              {
                word: "smoke",
                e: "💨",
              },
              {
                word: "funniest",
                e: "😂",
              },
              {
                word: "garden",
                e: "🏡",
              },
              {
                word: "water",
                e: "💧",
              },
              {
                word: "tired",
                e: "😴",
              },
            ],
            answers: [
              "cake",
              "chocolate",
              "bowl",
              "smoke",
              "funniest",
            ],
            titleQuestion: {
              options: [
                "A new game for Grandpa",
                "Kate's school trip",
                "The black birthday cake",
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
            title: "Giraffes",
            text: [
              "Giraffes are the tallest animals {1} the world. They have got very long necks and legs.",
              "Giraffes live in Africa. They eat leaves from the tops {2} tall trees. A giraffe's tongue is very long {3} it is dark blue!",
              "Giraffes don't sleep very much. They sleep {4} only a few hours every day. Baby giraffes are about two metres tall when they {5} born.",
            ],
            gaps: [
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
                  "from",
                  "of",
                  "for",
                ],
                answer: 1,
              },
              {
                options: [
                  "or",
                  "but",
                  "and",
                ],
                answer: 2,
              },
              {
                options: [
                  "for",
                  "since",
                  "on",
                ],
                answer: 0,
              },
              {
                options: [
                  "is",
                  "are",
                  "have",
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
              "Lucy got a puppy for her ninth birthday. It was small and brown with white ears. She called it Biscuit.",
              "Every morning before school, Lucy takes Biscuit for a walk in the park. Biscuit loves running after birds, but he never catches them.",
              "One day, Biscuit ran away in the park. Lucy looked for him for an hour. Then she found him under a bench, playing with a little boy's ball. Lucy gave Biscuit a big hug.",
            ],
            items: [
              {
                question: "When did Lucy get her puppy?",
                answers: [
                  "for her ninth birthday",
                  "on her ninth birthday",
                  "her ninth birthday",
                  "her birthday",
                ],
              },
              {
                question: "What colour are the puppy's ears?",
                answers: [
                  "white",
                ],
              },
              {
                question: "What is the puppy's name?",
                answers: [
                  "biscuit",
                ],
              },
              {
                question: "When does Lucy walk the dog?",
                answers: [
                  "every morning",
                  "before school",
                  "every morning before school",
                ],
              },
              {
                question: "What does Biscuit like running after?",
                answers: [
                  "birds",
                ],
              },
              {
                question: "How long did Lucy look for him?",
                answers: [
                  "an hour",
                  "for an hour",
                  "one hour",
                ],
              },
              {
                question: "Where did Lucy find Biscuit?",
                answers: [
                  "under a bench",
                  "under the bench",
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
                  e: "🎡",
                  x: 18,
                  y: 36,
                  size: 3.2,
                },
                {
                  e: "👩",
                  x: 40,
                  y: 62,
                  size: 2.6,
                },
                {
                  e: "👶",
                  x: 48,
                  y: 74,
                  size: 1.8,
                },
                {
                  e: "🦆",
                  x: 70,
                  y: 82,
                },
                {
                  e: "🦆",
                  x: 78,
                  y: 84,
                },
                {
                  e: "🦆",
                  x: 86,
                  y: 82,
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
              "Where are the woman and the baby?",
              "How many ducks are there?",
              "What is in the sky?",
              "Write one sentence about the baby.",
              "Write one sentence about the big wheel.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The woman and the baby are in the park. There are three ducks near the water. The sun is in the sky. The baby is sitting next to the woman. The big wheel is behind them.",
          },
        },
      ],
    },
  ],
};
