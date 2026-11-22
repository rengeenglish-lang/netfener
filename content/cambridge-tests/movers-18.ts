import type { CambridgeTest } from "./types";

/** A1 Movers practice test 18 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_18: CambridgeTest = {
  id: "movers-18",
  level: "movers",
  no: 18,
  title: "A1 Movers · Practice Test 18",
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
                word: "a photographer",
                e: "📷",
              },
              {
                word: "a calendar",
                e: "📅",
              },
              {
                word: "a bookshop",
                e: "📚",
              },
              {
                word: "a beach",
                e: "🏖️",
              },
              {
                word: "a bat",
                e: "🦇",
              },
              {
                word: "a teapot",
                e: "🫖",
              },
              {
                word: "a blanket",
                e: "🛏️",
              },
              {
                word: "a frog",
                e: "🐸",
              },
            ],
            items: [
              {
                text: "This person takes pictures with a camera.",
                answer: "a photographer",
              },
              {
                text: "You look at this to see the days and the months.",
                answer: "a calendar",
              },
              {
                text: "You can buy books in this place.",
                answer: "a bookshop",
              },
              {
                text: "This animal flies at night and sleeps upside down.",
                answer: "a bat",
              },
              {
                text: "This small green animal can jump and swim.",
                answer: "a frog",
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
              "Tina",
              "Grandpa",
            ],
            items: [
              {
                line: "Grandpa, what did you play when you were young?",
                options: [
                  "Football in the street.",
                  "I'm seventy.",
                  "It's a game.",
                ],
                answer: 0,
              },
              {
                line: "Did you have a computer?",
                options: [
                  "It's grey.",
                  "Yes, please.",
                  "No, there weren't any computers then!",
                ],
                answer: 2,
              },
              {
                line: "What did you do in the evening?",
                options: [
                  "At six o'clock.",
                  "I read books and listened to the radio.",
                  "With my sister.",
                ],
                answer: 1,
              },
              {
                line: "Did you have a television?",
                options: [
                  "It's in the kitchen.",
                  "Not until I was twelve.",
                  "I don't like it.",
                ],
                answer: 1,
              },
              {
                line: "Was school difficult?",
                options: [
                  "It's my school.",
                  "At nine o'clock.",
                  "Some lessons were, but I liked it.",
                ],
                answer: 2,
              },
              {
                line: "I love your stories, Grandpa!",
                options: [
                  "Thank you, Tina.",
                  "It's late.",
                  "No, it isn't.",
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
              "On Monday, there was a new {1} in Jack's class. His name was Leo and he came from Brazil. Leo didn't speak much English, so he was very {2}.",
              "At lunch, Jack sat next to Leo and showed him a {3} of animals. Leo knew all the animals in English! Then they played {4} in the playground. Leo was very good.",
              "Now Leo and Jack play football every day. Leo is teaching Jack some words in {5} too!",
            ],
            bank: [
              {
                word: "student",
                e: "🧒",
              },
              {
                word: "quiet",
                e: "🤫",
              },
              {
                word: "book",
                e: "📖",
              },
              {
                word: "football",
                e: "⚽",
              },
              {
                word: "Portuguese",
                e: "🇧🇷",
              },
              {
                word: "teacher",
                e: "👩‍🏫",
              },
              {
                word: "noisy",
                e: "📢",
              },
              {
                word: "piano",
                e: "🎹",
              },
            ],
            answers: [
              "student",
              "quiet",
              "book",
              "football",
              "Portuguese",
            ],
            titleQuestion: {
              options: [
                "A trip to the zoo",
                "Jack's new friend from Brazil",
                "Leo's lost bag",
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
            title: "Butterflies",
            text: [
              "Butterflies are insects {1} beautiful wings. There are thousands of kinds of butterflies in the world.",
              "A butterfly starts its life as a small egg. A caterpillar comes out of the egg and eats {2} of leaves. Then it makes a hard case and sleeps {3} it.",
              "After a few weeks, a butterfly comes out. Butterflies drink from flowers. They can see colours very well, {4} they love bright flowers. Many butterflies only live {5} a few weeks.",
            ],
            gaps: [
              {
                options: [
                  "of",
                  "with",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "much",
                  "many",
                  "lots",
                ],
                answer: 2,
              },
              {
                options: [
                  "inside",
                  "outside",
                  "under",
                ],
                answer: 0,
              },
              {
                options: [
                  "but",
                  "so",
                  "or",
                ],
                answer: 1,
              },
              {
                options: [
                  "for",
                  "since",
                  "in",
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
              "Last Saturday, Emma went to the funfair with her cousin, Alex. There were lots of rides, games and food stalls.",
              "First, they went on the big wheel. From the top, they could see the whole town. Then they played a game and Alex won a big pink teddy bear. He gave it to Emma.",
              "Before they went home, they ate hot dogs and candyfloss. Emma's dad picked them up at seven o'clock. They were tired but very happy.",
            ],
            items: [
              {
                question: "Where did Emma go last Saturday?",
                answers: [
                  "to the funfair",
                  "the funfair",
                  "a funfair",
                ],
              },
              {
                question: "Who did she go with?",
                answers: [
                  "her cousin",
                  "alex",
                  "her cousin alex",
                ],
              },
              {
                question: "What did they go on first?",
                answers: [
                  "the big wheel",
                  "big wheel",
                ],
              },
              {
                question: "What could they see from the top?",
                answers: [
                  "the whole town",
                  "the town",
                ],
              },
              {
                question: "What did Alex win?",
                answers: [
                  "a teddy bear",
                  "a big pink teddy bear",
                  "a pink teddy bear",
                  "a teddy",
                ],
              },
              {
                question: "What did they eat?",
                answers: [
                  "hot dogs and candyfloss",
                  "hot dogs",
                  "candyfloss",
                ],
              },
              {
                question: "Who picked them up?",
                answers: [
                  "emma's dad",
                  "her dad",
                  "dad",
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
                  e: "🌳",
                  x: 16,
                  y: 34,
                  size: 3.4,
                },
                {
                  e: "🐿️",
                  x: 18,
                  y: 48,
                  size: 1.6,
                },
                {
                  e: "👦",
                  x: 42,
                  y: 64,
                  size: 2.4,
                },
                {
                  e: "🪁",
                  x: 50,
                  y: 24,
                  size: 2,
                },
                {
                  e: "👩",
                  x: 68,
                  y: 60,
                  size: 2.6,
                },
                {
                  e: "🐈",
                  x: 86,
                  y: 84,
                },
              ],
            },
            prompts: [
              "Where are the boy and his mother?",
              "What is in the sky?",
              "What animal is in the tree?",
              "Write one sentence about the boy.",
              "Write one sentence about the cat.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The boy and his mother are in the garden. There is a kite in the sky. There is a squirrel in the tree. The boy is flying his kite. The cat is sitting on the grass.",
          },
        },
      ],
    },
  ],
};
