import type { CambridgeTest } from "./types";

/** A1 Movers practice test 25 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_25: CambridgeTest = {
  id: "movers-25",
  level: "movers",
  no: 25,
  title: "A1 Movers · Practice Test 25",
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
                word: "a police officer",
                e: "👮",
              },
              {
                word: "a passport",
                e: "🛂",
              },
              {
                word: "an airport",
                e: "🛫",
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
                word: "a pot",
                e: "🍯",
              },
              {
                word: "a shoe",
                e: "👞",
              },
              {
                word: "a nest",
                e: "🪺",
              },
            ],
            items: [
              {
                text: "This person helps people and catches thieves.",
                answer: "a police officer",
              },
              {
                text: "You need this when you travel to another country.",
                answer: "a passport",
              },
              {
                text: "This is the place where you get on a plane.",
                answer: "an airport",
              },
              {
                text: "This animal has got eight legs and makes webs.",
                answer: "a spider",
              },
              {
                text: "A bird makes this and lays its eggs in it.",
                answer: "a nest",
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
              "Rose",
              "Grandma",
            ],
            items: [
              {
                line: "Grandma, can you teach me to knit?",
                options: [
                  "It's wool.",
                  "Of course! Come and sit next to me.",
                  "I'm seventy.",
                ],
                answer: 1,
              },
              {
                line: "What can I make first?",
                options: [
                  "A scarf. It's easy.",
                  "It's blue.",
                  "On Monday.",
                ],
                answer: 0,
              },
              {
                line: "What colour wool can I use?",
                options: [
                  "It's long.",
                  "In the box.",
                  "Choose any colour you like.",
                ],
                answer: 2,
              },
              {
                line: "I like this purple one.",
                options: [
                  "It's purple.",
                  "Good choice! It's very pretty.",
                  "I don't like it.",
                ],
                answer: 1,
              },
              {
                line: "How long does it take to make a scarf?",
                options: [
                  "It's long.",
                  "About two weeks.",
                  "With needles.",
                ],
                answer: 1,
              },
              {
                line: "Thank you, Grandma. This is fun!",
                options: [
                  "It's a scarf.",
                  "No, it isn't.",
                  "I'm happy you like it.",
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
              "Ollie lives in a big city. He wanted to see a real {1}, so his mum took him to a farm in the countryside. The farmer's name was Mr Green.",
              "Mr Green showed Ollie how to milk a cow. Then Ollie gave some {2} to the hens and collected their {3}. He found twelve!",
              "In the afternoon, Ollie rode on the {4} with Mr Green. It was very loud. 'I want to be a farmer when I'm {5}!' Ollie told his mum.",
            ],
            bank: [
              {
                word: "farm",
                e: "🐄",
              },
              {
                word: "seeds",
                e: "🌾",
              },
              {
                word: "eggs",
                e: "🥚",
              },
              {
                word: "tractor",
                e: "🚜",
              },
              {
                word: "older",
                e: "🧑",
              },
              {
                word: "shop",
                e: "🏪",
              },
              {
                word: "bus",
                e: "🚌",
              },
              {
                word: "hats",
                e: "🎩",
              },
            ],
            answers: [
              "farm",
              "seeds",
              "eggs",
              "tractor",
              "older",
            ],
            titleQuestion: {
              options: [
                "A new shop in town",
                "Ollie's bus trip",
                "Ollie's day on the farm",
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
            title: "Hippos",
            text: [
              "Hippos are very big animals. They live in Africa, {1} rivers and lakes. Their name means 'river horse'.",
              "Hippos spend most of the day in water. This helps them stay cool {2} the hot sun. At night, they come out of the water to eat grass.",
              "Hippos can't swim, {3} they can walk under water! They can hold their breath for about five minutes. Hippos look slow, but they can run {4} than people. They {5} very dangerous animals.",
            ],
            gaps: [
              {
                options: [
                  "at",
                  "near",
                  "of",
                ],
                answer: 1,
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
                  "so",
                  "because",
                  "but",
                ],
                answer: 2,
              },
              {
                options: [
                  "faster",
                  "fast",
                  "fastest",
                ],
                answer: 0,
              },
              {
                options: [
                  "is",
                  "are",
                  "be",
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
              "Last month, Hannah's school had a book week. Every child dressed up as a person from a book. Hannah dressed up as a pirate. She wore a black hat and a big coat.",
              "Her best friend, Leo, was a dragon. His mum made his costume with green paper and old boxes. Everyone said it was the best costume.",
              "On Friday, a writer came to the school. She read a story about a cat who lived on the moon. Then she wrote her name in Hannah's book.",
            ],
            items: [
              {
                question: "What did the school have last month?",
                answers: [
                  "a book week",
                  "book week",
                ],
              },
              {
                question: "What did Hannah dress up as?",
                answers: [
                  "a pirate",
                  "pirate",
                ],
              },
              {
                question: "What did Hannah wear?",
                answers: [
                  "a black hat and a big coat",
                  "a black hat",
                  "a big coat",
                ],
              },
              {
                question: "What was Leo?",
                answers: [
                  "a dragon",
                  "dragon",
                ],
              },
              {
                question: "Who made Leo's costume?",
                answers: [
                  "his mum",
                  "leo's mum",
                  "mum",
                ],
              },
              {
                question: "Who came to the school on Friday?",
                answers: [
                  "a writer",
                  "writer",
                  "the writer",
                ],
              },
              {
                question: "Where did the cat in the story live?",
                answers: [
                  "on the moon",
                  "the moon",
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
                  e: "👵",
                  x: 20,
                  y: 50,
                  size: 3,
                },
                {
                  e: "🍲",
                  x: 40,
                  y: 64,
                  size: 2,
                },
                {
                  e: "👦",
                  x: 62,
                  y: 62,
                  size: 2.4,
                },
                {
                  e: "🍞",
                  x: 58,
                  y: 80,
                  size: 1.6,
                },
                {
                  e: "🐈",
                  x: 84,
                  y: 86,
                },
                {
                  e: "🪟",
                  x: 50,
                  y: 18,
                  size: 2.4,
                },
              ],
            },
            prompts: [
              "Where are the grandmother and the boy?",
              "What is the grandmother cooking?",
              "What is on the table?",
              "Write one sentence about the cat.",
              "Write one sentence about the boy.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The grandmother and the boy are in the kitchen. The grandmother is cooking soup. There is some bread on the table. The cat is sleeping under the table. The boy is hungry and he wants some soup.",
          },
        },
      ],
    },
  ],
};
