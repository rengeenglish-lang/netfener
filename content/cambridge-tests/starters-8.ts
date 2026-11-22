import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 8 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_8: CambridgeTest = {
  id: "starters-8",
  level: "starters",
  no: 8,
  title: "Pre A1 Starters · Practice Test 8",
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
              { pic: { e: "🐄" }, text: "This is a cow.", answer: true },
              { pic: { e: "🍔" }, text: "This is a burger.", answer: true },
              { pic: { e: "✈️" }, text: "This is a boat.", answer: false },
              { pic: { e: "🐑" }, text: "This is a sheep.", answer: true },
              { pic: { e: "🕶️" }, text: "This is a hat.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "farm",
              items: [
                { e: "🏠", x: 16, y: 40, size: 3.4 },
                { e: "🚜", x: 70, y: 60, size: 3 },
                { e: "👨‍🌾", x: 56, y: 56, size: 2.6 },
                { e: "🐖", x: 30, y: 80 },
                { e: "🐖", x: 40, y: 82 },
                { e: "🐓", x: 84, y: 84 },
                { e: "☁️", x: 48, y: 12, size: 2.4 },
              ],
            },
            items: [
              { text: "There are two pigs.", answer: true },
              { text: "The farmer is next to the tractor.", answer: true },
              { text: "There is a horse on the farm.", answer: false },
              { text: "There is a cloud in the sky.", answer: true },
              { text: "The chicken is in the house.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐊" }, answer: "crocodile" },
              { pic: { e: "🥚" }, answer: "egg" },
              { pic: { e: "🧦" }, answer: "socks" },
              { pic: { e: "🐦" }, answer: "bird" },
              { pic: { e: "🍋" }, answer: "lemon" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Cows",
            text: [
              "Cows are big animals. They live on {1}. They have got four legs, two ears and a long {2}.",
              "Cows eat {3} all day. They are black and white or brown. Cows give us {4}. We can drink it, or we can make {5} with it.",
            ],
            bank: [
              { word: "farms", e: "🚜" },
              { word: "tail", e: "🐄" },
              { word: "grass", e: "🌿" },
              { word: "milk", e: "🥛" },
              { word: "cheese", e: "🧀" },
              { word: "pencils", e: "✏️" },
              { word: "doors", e: "🚪" },
            ],
            answers: ["farms", "tail", "grass", "milk", "cheese"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "street",
              items: [
                { e: "🚗", x: 24, y: 70, size: 2.8 },
                { e: "🚦", x: 50, y: 40, size: 2.4 },
                { e: "👩", x: 72, y: 60, size: 2.8 },
                { e: "🐕", x: 82, y: 78 },
                { e: "🌳", x: 88, y: 30, size: 3 },
                { e: "🚲", x: 40, y: 82, size: 2 },
              ],
            },
            items: [
              { question: "What animal is with the woman?", answers: ["dog", "a dog"] },
              { question: "What is under the traffic light: a car or a bike?", answers: ["bike", "a bike"] },
              { question: "What is behind the woman?", answers: ["tree", "a tree"] },
              { question: "How many cars are there?", answers: ["one", "1"] },
              { question: "Where are they: in the street or in the park?", answers: ["street", "in the street", "the street"] },
            ],
          },
        },
      ],
    },
  ],
};
