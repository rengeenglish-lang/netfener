import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 7 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_7: CambridgeTest = {
  id: "starters-7",
  level: "starters",
  no: 7,
  title: "Pre A1 Starters · Practice Test 7",
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
              { pic: { e: "🦁" }, text: "This is a lion.", answer: true },
              { pic: { e: "🍦" }, text: "This is a cake.", answer: false },
              { pic: { e: "🚌" }, text: "This is a bus.", answer: true },
              { pic: { e: "🐢" }, text: "This is a mouse.", answer: false },
              { pic: { e: "🎸" }, text: "This is a guitar.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "room",
              items: [
                { e: "🛋️", x: 30, y: 62, size: 3.4 },
                { e: "👵", x: 28, y: 52, size: 2.6 },
                { e: "📺", x: 76, y: 46, size: 2.8 },
                { e: "🐈", x: 50, y: 84 },
                { e: "🧸", x: 82, y: 82 },
                { e: "🪟", x: 52, y: 22, size: 2.4 },
              ],
            },
            items: [
              { text: "The grandmother is on the sofa.", answer: true },
              { text: "There is a dog under the window.", answer: false },
              { text: "There is a television in the room.", answer: true },
              { text: "The cat is on the sofa.", answer: false },
              { text: "There is a teddy bear on the floor.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐵" }, answer: "monkey" },
              { pic: { e: "🍉" }, answer: "watermelon" },
              { pic: { e: "🚂" }, answer: "train" },
              { pic: { e: "👕" }, answer: "shirt" },
              { pic: { e: "🐻" }, answer: "bear" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Fish",
            text: [
              "Fish live in {1}. They can't walk because they haven't got {2}. They swim with their tails.",
              "Some fish are very small and some are very big. Fish can be orange, blue or {3}. People sometimes have fish at home in a glass {4}. Pet fish eat a little {5} every day.",
            ],
            bank: [
              { word: "water", e: "💧" },
              { word: "legs", e: "🦵" },
              { word: "green", e: "💚" },
              { word: "box", e: "📦" },
              { word: "food", e: "🍽️" },
              { word: "hats", e: "🎩" },
              { word: "trains", e: "🚂" },
            ],
            answers: ["water", "legs", "green", "box", "food"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "classroom",
              items: [
                { e: "👩‍🏫", x: 18, y: 46, size: 3 },
                { e: "👦", x: 50, y: 70, size: 2.4 },
                { e: "👧", x: 72, y: 70, size: 2.4 },
                { e: "📚", x: 48, y: 86, size: 1.6 },
                { e: "📚", x: 54, y: 86, size: 1.6 },
                { e: "🕐", x: 80, y: 22, size: 2 },
                { e: "🍎", x: 30, y: 82, size: 1.6 },
              ],
            },
            items: [
              { question: "Who is standing at the front?", answers: ["teacher", "the teacher", "a teacher"] },
              { question: "How many books are on the desk?", answers: ["two", "2"] },
              { question: "What fruit is on the teacher's desk?", answers: ["apple", "an apple", "a apple"] },
              { question: "What is on the wall?", answers: ["clock", "a clock"] },
              { question: "How many children are there?", answers: ["two", "2"] },
            ],
          },
        },
      ],
    },
  ],
};
