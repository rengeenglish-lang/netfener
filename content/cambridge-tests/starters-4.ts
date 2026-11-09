import type { CambridgeTest } from "./types";
import { STARTERS_LISTENING } from "./starters-listening";

/** Pre A1 Starters practice test 4. Original Netfener content. */
export const STARTERS_4: CambridgeTest = {
  id: "starters-4",
  level: "starters",
  no: 4,
  title: "Pre A1 Starters · Practice Test 4",
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
              { pic: { e: "🐻" }, text: "This is a bear.", answer: true },
              { pic: { e: "🍓" }, text: "This is a pear.", answer: false },
              { pic: { e: "✈️" }, text: "This is a plane.", answer: true },
              { pic: { e: "🐙" }, text: "This is a spider.", answer: false },
              { pic: { e: "👕" }, text: "This is a T-shirt.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "classroom",
              items: [
                { e: "👩‍🏫", x: 16, y: 46, size: 3 },
                { e: "🕒", x: 50, y: 18, size: 2 },
                { e: "👦", x: 46, y: 70, size: 2.4 },
                { e: "👧", x: 70, y: 70, size: 2.4 },
                { e: "🍎", x: 30, y: 80, size: 1.6 },
                { e: "🎒", x: 86, y: 84, size: 1.8 },
                { e: "🪴", x: 88, y: 46, size: 2 },
              ],
            },
            items: [
              { text: "There is a clock on the wall.", answer: true },
              { text: "The teacher is a man.", answer: false },
              { text: "There are two children.", answer: true },
              { text: "There is a cat under the table.", answer: false },
              { text: "There is a plant in the classroom.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐍" }, answer: "snake" },
              { pic: { e: "🥚" }, answer: "egg" },
              { pic: { e: "🐯" }, answer: "tiger" },
              { pic: { e: "🛏️" }, answer: "bed" },
              { pic: { e: "🍉" }, answer: "watermelon" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Crocodiles",
            text: [
              "Crocodiles are big animals with long {1} and very strong teeth. They live in rivers and lakes in hot countries. Crocodiles can swim very well, and they can stay under the {2} for a long time.",
              "They like lying in the {3} on the riverbank. Crocodiles eat fish and {4}. Mother crocodiles lay {5} in the sand, and the babies come out after about three months.",
            ],
            bank: [
              { word: "tails", e: "🐊" },
              { word: "water", e: "💧" },
              { word: "sun", e: "☀️" },
              { word: "birds", e: "🐦" },
              { word: "eggs", e: "🥚" },
              { word: "books", e: "📚" },
              { word: "chairs", e: "🪑" },
            ],
            answers: ["tails", "water", "sun", "birds", "eggs"],
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
                { e: "🚗", x: 26, y: 70, size: 2.8 },
                { e: "🚕", x: 66, y: 70, size: 2.8 },
                { e: "👨", x: 86, y: 40, size: 2.4 },
                { e: "🐕", x: 92, y: 50, size: 1.6 },
                { e: "🏫", x: 22, y: 28, size: 3 },
                { e: "🌳", x: 54, y: 28, size: 2.6 },
              ],
            },
            items: [
              { question: "How many cars are there?", answers: ["two", "2"] },
              { question: "What is next to the man?", answers: ["dog", "a dog"] },
              { question: "What building can you see?", answers: ["school", "a school"] },
              { question: "What colour is the taxi?", answers: ["yellow"] },
              { question: "What is between the school and the man?", answers: ["tree", "a tree"] },
            ],
          },
        },
      ],
    },
    STARTERS_LISTENING[3],
  ],
};
