import type { CambridgeTest } from "./types";
import { STARTERS_LISTENING } from "./starters-listening";

/** Pre A1 Starters practice test 5. Original Netfener content. */
export const STARTERS_5: CambridgeTest = {
  id: "starters-5",
  level: "starters",
  no: 5,
  title: "Pre A1 Starters · Practice Test 5",
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
              { pic: { e: "🐭" }, text: "This is a mouse.", answer: true },
              { pic: { e: "🍔" }, text: "This is a pizza.", answer: false },
              { pic: { e: "🎈" }, text: "This is a balloon.", answer: true },
              { pic: { e: "🧢" }, text: "This is a hat.", answer: true },
              { pic: { e: "🦓" }, text: "This is a horse.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "garden",
              items: [
                { e: "🏡", x: 80, y: 32, size: 3.4 },
                { e: "👵", x: 22, y: 66, size: 2.6 },
                { e: "🌷", x: 40, y: 84, size: 1.6 },
                { e: "🌷", x: 48, y: 84, size: 1.6 },
                { e: "🌷", x: 56, y: 84, size: 1.6 },
                { e: "🦋", x: 46, y: 50, size: 1.6 },
                { e: "🐈", x: 76, y: 76, size: 2 },
                { e: "🌧️", x: 30, y: 14, size: 2.2 },
              ],
            },
            items: [
              { text: "The grandmother is in the garden.", answer: true },
              { text: "There are three flowers.", answer: true },
              { text: "It is sunny.", answer: false },
              { text: "There is a butterfly.", answer: true },
              { text: "The cat is on the house.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦉" }, answer: "owl" },
              { pic: { e: "🍝" }, answer: "pasta" },
              { pic: { e: "🐧" }, answer: "penguin" },
              { pic: { e: "🚪" }, answer: "door" },
              { pic: { e: "🥥" }, answer: "coconut" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Polar bears",
            text: [
              "Polar bears live in very cold places with lots of {1} and snow. They are white, and they have got big feet and a black {2}.",
              "Polar bears are very good {3}. They eat fish and other animals from the sea. Baby polar bears are very small. They stay with their {4} for two years and they play in the {5} together.",
            ],
            bank: [
              { word: "snow", e: "❄️" },
              { word: "nose", e: "👃" },
              { word: "swimmers", e: "🏊" },
              { word: "mother", e: "🐻‍❄️" },
              { word: "ice", e: "🧊" },
              { word: "pens", e: "🖊️" },
              { word: "tables", e: "🪑" },
            ],
            answers: ["ice", "nose", "swimmers", "mother", "snow"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "park",
              items: [
                { e: "🧒", x: 30, y: 70, size: 2.4 },
                { e: "🛴", x: 40, y: 80, size: 1.8 },
                { e: "👩", x: 64, y: 64, size: 2.6 },
                { e: "🍦", x: 70, y: 60, size: 1.4 },
                { e: "🐿️", x: 86, y: 36, size: 1.6 },
                { e: "🌳", x: 88, y: 30, size: 3.2 },
                { e: "🐦", x: 20, y: 22, size: 1.4 },
                { e: "🐦", x: 28, y: 18, size: 1.4 },
              ],
            },
            items: [
              { question: "What is the woman eating?", answers: ["ice cream", "an ice cream", "icecream"] },
              { question: "What has the boy got?", answers: ["scooter", "a scooter"] },
              { question: "What animal is in the tree?", answers: ["squirrel", "a squirrel"] },
              { question: "How many birds are there?", answers: ["two", "2"] },
              { question: "Where are the birds: in the sky or in the water?", answers: ["sky", "in the sky", "the sky"] },
            ],
          },
        },
      ],
    },
    STARTERS_LISTENING[4],
  ],
};
