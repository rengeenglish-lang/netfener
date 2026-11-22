import type { CambridgeTest } from "./types";

/** A1 Movers practice test 12 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_12: CambridgeTest = {
  id: "movers-12",
  level: "movers",
  no: 12,
  title: "A1 Movers · Practice Test 12",
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
                word: "a vet",
                e: "🩺",
              },
              {
                word: "a basket",
                e: "🧺",
              },
              {
                word: "a station",
                e: "🚉",
              },
              {
                word: "a desert",
                e: "🏜️",
              },
              {
                word: "a spider",
                e: "🕷️",
              },
              {
                word: "a kite",
                e: "🪁",
              },
              {
                word: "a moustache",
                e: "👨",
              },
              {
                word: "a pillow",
                e: "🛌",
              },
            ],
            items: [
              {
                text: "This person helps animals when they are sick.",
                answer: "a vet",
              },
              {
                text: "You can carry fruit or bread in this.",
                answer: "a basket",
              },
              {
                text: "You wait for a train in this place.",
                answer: "a station",
              },
              {
                text: "This place is very hot and dry with lots of sand.",
                answer: "a desert",
              },
              {
                text: "You can fly this in the sky on a windy day.",
                answer: "a kite",
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
              "Uncle Bill",
            ],
            items: [
              {
                line: "Uncle Bill, what's your job?",
                options: [
                  "I'm fine, thanks.",
                  "I'm a bus driver.",
                  "It's Tuesday.",
                ],
                answer: 1,
              },
              {
                line: "Do you like it?",
                options: [
                  "Yes, I meet lots of people every day.",
                  "It's a big bus.",
                  "No, it isn't.",
                ],
                answer: 0,
              },
              {
                line: "What time do you start work?",
                options: [
                  "At the station.",
                  "With my friend.",
                  "At six o'clock in the morning.",
                ],
                answer: 2,
              },
              {
                line: "That's very early!",
                options: [
                  "It's late.",
                  "I'm tired of buses.",
                  "Yes, but I finish at two.",
                ],
                answer: 2,
              },
              {
                line: "What do you do in the afternoon?",
                options: [
                  "I go swimming or read the newspaper.",
                  "I'm a driver.",
                  "On the bus.",
                ],
                answer: 0,
              },
              {
                line: "Can I ride on your bus one day?",
                options: [
                  "It's green.",
                  "Of course! You can sit at the front.",
                  "I don't know.",
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
              "Last Sunday, Jim's family went to the {1}. Jim wanted to see the dinosaurs. There was a very big dinosaur in the first {2}.",
              "Jim's little sister, Ella, was {3} of it. 'Don't worry, it isn't real,' said Jim. Then they went to the shop and Jim bought a {4} about dinosaurs.",
              "At home, Jim read the book to Ella. Now she loves dinosaurs too! She wants to go back to the museum next {5}.",
            ],
            bank: [
              {
                word: "museum",
                e: "🏛️",
              },
              {
                word: "room",
                e: "🚪",
              },
              {
                word: "afraid",
                e: "😨",
              },
              {
                word: "book",
                e: "📖",
              },
              {
                word: "weekend",
                e: "📅",
              },
              {
                word: "beach",
                e: "🏖️",
              },
              {
                word: "hungry",
                e: "😋",
              },
              {
                word: "jacket",
                e: "🧥",
              },
            ],
            answers: [
              "museum",
              "room",
              "afraid",
              "book",
              "weekend",
            ],
            titleQuestion: {
              options: [
                "A day at the beach",
                "The dinosaur museum",
                "Ella's new pet",
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
            title: "Elephants",
            text: [
              "Elephants are the biggest animals {1} land. They live in Africa and Asia.",
              "An elephant uses its long nose to pick {2} food and to drink water. Elephants eat leaves, grass and fruit. They eat for about sixteen hours {3} day!",
              "Elephants live in families. The oldest female elephant is the leader. Baby elephants stay {4} their mothers for many years. Elephants are very clever and they {5} remember things for a long time.",
            ],
            gaps: [
              {
                options: [
                  "in",
                  "at",
                  "on",
                ],
                answer: 2,
              },
              {
                options: [
                  "up",
                  "on",
                  "off",
                ],
                answer: 0,
              },
              {
                options: [
                  "an",
                  "a",
                  "the",
                ],
                answer: 1,
              },
              {
                options: [
                  "with",
                  "from",
                  "by",
                ],
                answer: 0,
              },
              {
                options: [
                  "are",
                  "have",
                  "can",
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
              "Tony's grandma lives in a small village by the sea. Tony visits her every summer. Her house is white and it has a blue door.",
              "This year, Grandma taught Tony how to make pancakes. They made twenty pancakes and ate them with honey and bananas. Tony's favourite was the banana pancake.",
              "In the afternoon, they walked on the beach and found some beautiful shells. Tony took them home and put them in a jar in his bedroom.",
            ],
            items: [
              {
                question: "Where does Tony's grandma live?",
                answers: [
                  "in a small village",
                  "in a village",
                  "by the sea",
                  "in a small village by the sea",
                ],
              },
              {
                question: "When does Tony visit her?",
                answers: [
                  "every summer",
                  "in the summer",
                  "in summer",
                ],
              },
              {
                question: "What colour is the door?",
                answers: [
                  "blue",
                ],
              },
              {
                question: "What did Grandma teach Tony?",
                answers: [
                  "how to make pancakes",
                  "to make pancakes",
                  "pancakes",
                ],
              },
              {
                question: "How many pancakes did they make?",
                answers: [
                  "twenty",
                  "20",
                ],
              },
              {
                question: "What did they find on the beach?",
                answers: [
                  "shells",
                  "some shells",
                  "beautiful shells",
                  "some beautiful shells",
                ],
              },
              {
                question: "Where did Tony put the shells?",
                answers: [
                  "in a jar",
                  "in his bedroom",
                  "in a jar in his bedroom",
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
                  e: "👨‍🏫",
                  x: 16,
                  y: 44,
                  size: 3,
                },
                {
                  e: "👦",
                  x: 44,
                  y: 70,
                  size: 2.4,
                },
                {
                  e: "👧",
                  x: 64,
                  y: 70,
                  size: 2.4,
                },
                {
                  e: "🖥️",
                  x: 64,
                  y: 56,
                  size: 1.8,
                },
                {
                  e: "🐢",
                  x: 84,
                  y: 84,
                },
                {
                  e: "🗺️",
                  x: 42,
                  y: 22,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where are the children?",
              "What is in front of the girl?",
              "What animal is in the classroom?",
              "Write one sentence about the teacher.",
              "Write one sentence about the map.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The children are in the classroom. There is a computer in front of the girl. There is a turtle in the classroom. The teacher is standing at the front of the room. The map is on the wall.",
          },
        },
      ],
    },
  ],
};
