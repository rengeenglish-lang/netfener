import type { CambridgeTest } from "./types";

/** A1 Movers practice test 20 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_20: CambridgeTest = {
  id: "movers-20",
  level: "movers",
  no: 20,
  title: "A1 Movers · Practice Test 20",
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
                word: "a hairdresser",
                e: "💇",
              },
              {
                word: "a ruler",
                e: "📏",
              },
              {
                word: "a playground",
                e: "🛝",
              },
              {
                word: "a cave",
                e: "🕳️",
              },
              {
                word: "a parrot",
                e: "🦜",
              },
              {
                word: "a bottle",
                e: "🍾",
              },
              {
                word: "a helmet",
                e: "⛑️",
              },
              {
                word: "a snail",
                e: "🐌",
              },
            ],
            items: [
              {
                text: "This person cuts your hair.",
                answer: "a hairdresser",
              },
              {
                text: "You use this to draw straight lines.",
                answer: "a ruler",
              },
              {
                text: "Children play on slides and swings in this place.",
                answer: "a playground",
              },
              {
                text: "This is a big hole in a mountain or under the ground.",
                answer: "a cave",
              },
              {
                text: "This small animal carries its house on its back.",
                answer: "a snail",
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
              "Alice",
              "Mum",
            ],
            items: [
              {
                line: "Mum, can I have a party for my birthday?",
                options: [
                  "Yes, of course. How many friends?",
                  "It's a cake.",
                  "I'm Mum.",
                ],
                answer: 0,
              },
              {
                line: "About ten. Can we have it in the garden?",
                options: [
                  "It's green.",
                  "Yes, if it doesn't rain.",
                  "No, it's ten.",
                ],
                answer: 1,
              },
              {
                line: "What food can we have?",
                options: [
                  "Pizza, sandwiches and a big cake.",
                  "At three o'clock.",
                  "In the garden.",
                ],
                answer: 0,
              },
              {
                line: "Can we play music too?",
                options: [
                  "It's a radio.",
                  "I like music.",
                  "Yes, but not too loud!",
                ],
                answer: 2,
              },
              {
                line: "Can Dad do some magic tricks?",
                options: [
                  "He's tall.",
                  "Let's ask him. He loves magic!",
                  "It's a party.",
                ],
                answer: 1,
              },
              {
                line: "This is going to be the best party!",
                options: [
                  "It's Saturday.",
                  "I hope so!",
                  "No, thank you.",
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
              "Tom's grandma has an old {1} in her garden. In the autumn, there are lots of red apples on it. Tom and his grandma pick them every {2}.",
              "This year, they picked three big {3} of apples. Grandma made apple pie, apple {4} and apple cake. There were too many apples for the family!",
              "So Tom gave some apples to his {5} in the street. Everyone was happy. 'Thank you, Tom!' they said.",
            ],
            bank: [
              {
                word: "tree",
                e: "🌳",
              },
              {
                word: "October",
                e: "🍂",
              },
              {
                word: "baskets",
                e: "🧺",
              },
              {
                word: "juice",
                e: "🧃",
              },
              {
                word: "neighbours",
                e: "🏘️",
              },
              {
                word: "car",
                e: "🚗",
              },
              {
                word: "pens",
                e: "🖊️",
              },
              {
                word: "swimming",
                e: "🏊",
              },
            ],
            answers: [
              "tree",
              "October",
              "baskets",
              "juice",
              "neighbours",
            ],
            titleQuestion: {
              options: [
                "Grandma's apple tree",
                "Tom's new car",
                "A swimming race",
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
            title: "Frogs",
            text: [
              "Frogs are small animals {1} can live in water and on land. They have got long back legs, so they can jump very far.",
              "Frogs start their lives {2} eggs in the water. Then the eggs change into tadpoles. Tadpoles have got tails, but they {3} got any legs.",
              "Slowly, the tadpoles grow legs and lose their tails. Then they are frogs! Frogs eat insects. They catch them {4} their long tongues. Some frogs are very colourful, {5} they can be dangerous.",
            ],
            gaps: [
              {
                options: [
                  "what",
                  "where",
                  "that",
                ],
                answer: 2,
              },
              {
                options: [
                  "like",
                  "as",
                  "for",
                ],
                answer: 1,
              },
              {
                options: [
                  "hasn't",
                  "haven't",
                  "don't",
                ],
                answer: 1,
              },
              {
                options: [
                  "by",
                  "from",
                  "with",
                ],
                answer: 2,
              },
              {
                options: [
                  "and",
                  "or",
                  "than",
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
              "Every Tuesday, Ryan has a piano lesson after school. His teacher, Miss Rose, lives in a big yellow house near the station.",
              "Ryan started learning the piano last year. At first, it was very difficult, but now he can play ten songs. His favourite song is about a little boat.",
              "Next month, Ryan is going to play in a concert at the town hall. His mum and dad and his grandparents are going to watch him. Ryan is a bit nervous but very excited.",
            ],
            items: [
              {
                question: "When does Ryan have a piano lesson?",
                answers: [
                  "every tuesday",
                  "on tuesdays",
                  "tuesday",
                  "after school",
                  "on tuesday",
                ],
              },
              {
                question: "Who is his teacher?",
                answers: [
                  "miss rose",
                ],
              },
              {
                question: "What colour is the teacher's house?",
                answers: [
                  "yellow",
                ],
              },
              {
                question: "When did Ryan start learning the piano?",
                answers: [
                  "last year",
                ],
              },
              {
                question: "How many songs can Ryan play?",
                answers: [
                  "ten",
                  "10",
                  "ten songs",
                ],
              },
              {
                question: "Where is the concert?",
                answers: [
                  "at the town hall",
                  "the town hall",
                  "town hall",
                ],
              },
              {
                question: "How does Ryan feel about the concert?",
                answers: [
                  "nervous but excited",
                  "excited",
                  "nervous",
                  "a bit nervous",
                  "very excited",
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
              bg: "kitchen",
              items: [
                {
                  e: "👨",
                  x: 20,
                  y: 50,
                  size: 3,
                },
                {
                  e: "🍰",
                  x: 46,
                  y: 72,
                  size: 2,
                },
                {
                  e: "👧",
                  x: 66,
                  y: 60,
                  size: 2.4,
                },
                {
                  e: "👦",
                  x: 82,
                  y: 60,
                  size: 2.4,
                },
                {
                  e: "🎈",
                  x: 58,
                  y: 24,
                  size: 1.6,
                },
                {
                  e: "🎈",
                  x: 66,
                  y: 22,
                  size: 1.6,
                },
                {
                  e: "🎁",
                  x: 50,
                  y: 86,
                  size: 1.6,
                },
              ],
            },
            prompts: [
              "Where are the people?",
              "What is on the table?",
              "How many balloons are there?",
              "Write one sentence about the present.",
              "Write one sentence about the children.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The people are in the kitchen. There is a cake on the table. There are two balloons. The present is on the floor next to the table. The children are happy because it is a birthday party.",
          },
        },
      ],
    },
  ],
};
