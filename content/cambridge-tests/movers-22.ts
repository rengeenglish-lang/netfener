import type { CambridgeTest } from "./types";

/** A1 Movers practice test 22 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_22: CambridgeTest = {
  id: "movers-22",
  level: "movers",
  no: 22,
  title: "A1 Movers · Practice Test 22",
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
                word: "a businessman",
                e: "💼",
              },
              {
                word: "a toothbrush",
                e: "🪥",
              },
              {
                word: "a hotel",
                e: "🏨",
              },
              {
                word: "a lake",
                e: "🏞️",
              },
              {
                word: "a goat",
                e: "🐐",
              },
              {
                word: "a cupboard",
                e: "🗄️",
              },
              {
                word: "a wheel",
                e: "☸️",
              },
              {
                word: "a dress",
                e: "👗",
              },
            ],
            items: [
              {
                text: "This man works in an office and has lots of meetings.",
                answer: "a businessman",
              },
              {
                text: "You stay in this place when you are on holiday.",
                answer: "a hotel",
              },
              {
                text: "This is water with land all around it.",
                answer: "a lake",
              },
              {
                text: "You keep plates and cups in this in the kitchen.",
                answer: "a cupboard",
              },
              {
                text: "A car has got four of these.",
                answer: "a wheel",
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
              "Holly",
              "Dad",
            ],
            items: [
              {
                line: "Dad, where are we going on holiday this year?",
                options: [
                  "It's hot.",
                  "On Saturday.",
                  "To Spain, by plane.",
                ],
                answer: 2,
              },
              {
                line: "How long are we staying?",
                options: [
                  "In a hotel.",
                  "By plane.",
                  "Two weeks.",
                ],
                answer: 2,
              },
              {
                line: "Is the hotel near the beach?",
                options: [
                  "Yes, you can see the sea from our room.",
                  "It's big.",
                  "I don't like hotels.",
                ],
                answer: 0,
              },
              {
                line: "Can we go to a water park?",
                options: [
                  "It's wet.",
                  "Maybe one day. It's expensive.",
                  "It's my park.",
                ],
                answer: 1,
              },
              {
                line: "What do I need to pack?",
                options: [
                  "Your swimsuit and some sun cream.",
                  "It's Spain.",
                  "At the airport.",
                ],
                answer: 0,
              },
              {
                line: "I can't wait!",
                options: [
                  "It's a bag.",
                  "Yes, it is.",
                  "Me too!",
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
              "Ann's class had a {1} race on Sports Day. Ann practised every day for a month. She ran around the park with her {2}.",
              "On Sports Day, Ann was very {3}. When the race started, she ran very fast. But then she fell over and hurt her {4}!",
              "Ann got up and finished the race. She came last, but everybody clapped. The teacher gave her a {5} for being brave.",
            ],
            bank: [
              {
                word: "running",
                e: "🏃",
              },
              {
                word: "dad",
                e: "👨",
              },
              {
                word: "nervous",
                e: "😬",
              },
              {
                word: "knee",
                e: "🦵",
              },
              {
                word: "medal",
                e: "🏅",
              },
              {
                word: "swimming",
                e: "🏊",
              },
              {
                word: "cake",
                e: "🎂",
              },
              {
                word: "hungry",
                e: "😋",
              },
            ],
            answers: [
              "running",
              "dad",
              "nervous",
              "knee",
              "medal",
            ],
            titleQuestion: {
              options: [
                "A swimming lesson",
                "Dad's birthday cake",
                "Ann's brave race",
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
            title: "Snakes",
            text: [
              "Snakes are long animals {1} legs. They move by pushing their bodies along the ground.",
              "Snakes can smell with their tongues. They eat mice, birds and eggs. Many snakes can eat animals that are bigger {2} their heads!",
              "Snakes grow new skin and lose the old skin {3} a few times every year. Some snakes are dangerous, but most of them {4} not dangerous to people. You can find snakes in most countries, {5} not in very cold places.",
            ],
            gaps: [
              {
                options: [
                  "with",
                  "without",
                  "of",
                ],
                answer: 1,
              },
              {
                options: [
                  "than",
                  "that",
                  "as",
                ],
                answer: 0,
              },
              {
                options: [
                  "around",
                  "over",
                  "about",
                ],
                answer: 2,
              },
              {
                options: [
                  "is",
                  "are",
                  "be",
                ],
                answer: 1,
              },
              {
                options: [
                  "and",
                  "but",
                  "so",
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
              "Jane's family moved to a new house last month. The new house is in the countryside, next to a big farm. Jane's bedroom is at the top of the house.",
              "From her window, Jane can see horses and cows in the fields. The farmer's daughter, Molly, is the same age as Jane. They are in the same class at school.",
              "On Saturdays, Molly teaches Jane how to ride a horse. Jane's horse is called Star because it has a white star on its head.",
            ],
            items: [
              {
                question: "When did Jane's family move?",
                answers: [
                  "last month",
                ],
              },
              {
                question: "Where is the new house?",
                answers: [
                  "in the countryside",
                  "next to a big farm",
                  "next to a farm",
                ],
              },
              {
                question: "Where is Jane's bedroom?",
                answers: [
                  "at the top of the house",
                  "at the top",
                ],
              },
              {
                question: "What can Jane see from her window?",
                answers: [
                  "horses and cows",
                  "cows and horses",
                ],
              },
              {
                question: "Who is Molly?",
                answers: [
                  "the farmer's daughter",
                  "farmer's daughter",
                ],
              },
              {
                question: "What does Molly teach Jane?",
                answers: [
                  "how to ride a horse",
                  "to ride a horse",
                  "riding",
                ],
              },
              {
                question: "Why is the horse called Star?",
                answers: [
                  "it has a white star on its head",
                  "because it has a white star on its head",
                  "a white star on its head",
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
              bg: "classroom",
              items: [
                {
                  e: "👩‍🏫",
                  x: 16,
                  y: 44,
                  size: 3,
                },
                {
                  e: "👧",
                  x: 42,
                  y: 70,
                  size: 2.4,
                },
                {
                  e: "🧑",
                  x: 62,
                  y: 70,
                  size: 2.4,
                },
                {
                  e: "🎨",
                  x: 42,
                  y: 84,
                  size: 1.6,
                },
                {
                  e: "🪴",
                  x: 84,
                  y: 60,
                  size: 2,
                },
                {
                  e: "🕰️",
                  x: 60,
                  y: 18,
                  size: 2,
                },
              ],
            },
            prompts: [
              "Where are the children?",
              "What is the girl doing?",
              "What is on the wall?",
              "Write one sentence about the teacher.",
              "Write one sentence about the plant.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The children are in the classroom. The girl is painting a picture. There is a clock on the wall. The teacher is standing next to the board. The plant is green and it is in the corner.",
          },
        },
      ],
    },
  ],
};
