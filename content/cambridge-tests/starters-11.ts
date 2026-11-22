import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 11 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_11: CambridgeTest = {
  id: "starters-11",
  level: "starters",
  no: 11,
  title: "Pre A1 Starters · Practice Test 11",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 20,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "picture-yesno",
            instruction: "Look at the picture and read. Is the sentence right? Choose ✔ or ✘.",
            items: [
              { pic: { e: "🐸" }, text: "This is a frog.", answer: true },
              { pic: { e: "🍊" }, text: "This is an apple.", answer: false },
              { pic: { e: "🚗" }, text: "This is a car.", answer: true },
              { pic: { e: "🦒" }, text: "This is a horse.", answer: false },
              { pic: { e: "🪑" }, text: "This is a chair.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "park", items: [{ e: "🌳", x: 14, y: 34, size: 3.4 }, { e: "👴", x: 30, y: 62, size: 2.6 }, { e: "🐕", x: 44, y: 78 }, { e: "🦆", x: 70, y: 80 }, { e: "🦆", x: 78, y: 82 }, { e: "🎈", x: 56, y: 30, size: 1.8 }] },
            items: [
              { text: "The old man is under the tree.", answer: true },
              { text: "There are three ducks.", answer: false },
              { text: "There is a dog next to the old man.", answer: true },
              { text: "The balloon is on the grass.", answer: false },
              { text: "There are two ducks near the water.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐷" }, answer: "pig" },
              { pic: { e: "🍌" }, answer: "banana" },
              { pic: { e: "⛵" }, answer: "boat" },
              { pic: { e: "👗" }, answer: "dress" },
              { pic: { e: "🌙" }, answer: "moon" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Frogs",
            text: ["Frogs are small green or {1} animals. They have got big eyes and long {2}. They can jump very well.", "Frogs live near water. They like swimming in {3} and lakes. Frogs eat flies with their long {4}. Baby frogs live in the water and they have got {5} like fish."],
            bank: [
              { word: "brown", e: "🤎" },
              { word: "legs", e: "🦵" },
              { word: "ponds", e: "🏞️" },
              { word: "tongues", e: "👅" },
              { word: "tails", e: "🐟" },
              { word: "windows", e: "🪟" },
              { word: "shoes", e: "👟" },
            ],
            answers: ["brown", "legs", "ponds", "tongues", "tails"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "kitchen", items: [{ e: "👩", x: 22, y: 50, size: 3 }, { e: "🎂", x: 50, y: 70, size: 2.4 }, { e: "👧", x: 72, y: 60, size: 2.6 }, { e: "🕯️", x: 46, y: 60, size: 1.4 }, { e: "🕯️", x: 54, y: 60, size: 1.4 }, { e: "🐶", x: 86, y: 84 }] },
            items: [
              { question: "What is on the table?", answers: ["cake", "a cake"] },
              { question: "How many candles are on the cake?", answers: ["two", "2"] },
              { question: "What animal is in the kitchen?", answers: ["dog", "a dog"] },
              { question: "Who is next to the dog?", answers: ["girl", "the girl", "a girl"] },
              { question: "Where are they?", answers: ["kitchen", "in the kitchen", "in a kitchen"] },
            ],
          },
        },
      ],
    },
  ],
};
