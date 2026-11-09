import type { CambridgeTest } from "./types";
import { STARTERS_LISTENING } from "./starters-listening";

/** Pre A1 Starters practice test 3. Original Netfener content. */
export const STARTERS_3: CambridgeTest = {
  id: "starters-3",
  level: "starters",
  no: 3,
  title: "Pre A1 Starters · Practice Test 3",
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
              { pic: { e: "🐢" }, text: "This is a snake.", answer: false },
              { pic: { e: "🍇" }, text: "These are grapes.", answer: true },
              { pic: { e: "🚂" }, text: "This is a train.", answer: true },
              { pic: { e: "🧦" }, text: "These are shoes.", answer: false },
              { pic: { e: "🐔" }, text: "This is a chicken.", answer: true },
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
                { e: "🏠", x: 18, y: 34, size: 3.4 },
                { e: "🌳", x: 84, y: 30, size: 3 },
                { e: "🐄", x: 40, y: 66, size: 2.8 },
                { e: "🐑", x: 66, y: 72, size: 2.2 },
                { e: "🐑", x: 78, y: 74, size: 2.2 },
                { e: "🧑‍🌾", x: 22, y: 74, size: 2.6 },
                { e: "🐓", x: 54, y: 86, size: 1.6 },
                { e: "☁️", x: 50, y: 12, size: 2.4 },
              ],
            },
            items: [
              { text: "There is one cow.", answer: true },
              { text: "There are three sheep.", answer: false },
              { text: "The farmer is next to the house.", answer: true },
              { text: "The sun is in the sky.", answer: false },
              { text: "There is a tree.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦆" }, answer: "duck" },
              { pic: { e: "🥕" }, answer: "carrot" },
              { pic: { e: "🐵" }, answer: "monkey" },
              { pic: { e: "⌚" }, answer: "watch" },
              { pic: { e: "🍋" }, answer: "lemon" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Hippos",
            text: [
              "Hippos are very big animals. They live in Africa. They have got a big {1} and very small ears. Hippos love water, and they sleep in {2} in the day.",
              "At night, they walk on the {3} and eat a lot of grass. Baby hippos drink their mother's {4}. Hippos look happy, but they can be dangerous, so don't go near their big {5}!",
            ],
            bank: [
              { word: "mouth", e: "👄" },
              { word: "rivers", e: "🏞️" },
              { word: "land", e: "🌍" },
              { word: "milk", e: "🥛" },
              { word: "teeth", e: "🦷" },
              { word: "phones", e: "📱" },
              { word: "pencils", e: "✏️" },
            ],
            answers: ["mouth", "rivers", "land", "milk", "teeth"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "garden",
              items: [
                { e: "👨", x: 24, y: 58, size: 2.8 },
                { e: "🪴", x: 12, y: 80, size: 1.8 },
                { e: "👧", x: 60, y: 66, size: 2.4 },
                { e: "🪁", x: 64, y: 24, size: 2.2 },
                { e: "🐇", x: 84, y: 84, size: 1.8 },
                { e: "🐇", x: 92, y: 84, size: 1.8 },
                { e: "🌻", x: 44, y: 80, size: 1.8 },
              ],
            },
            items: [
              { question: "What is in the sky?", answers: ["kite", "a kite"] },
              { question: "How many rabbits are there?", answers: ["two", "2"] },
              { question: "Who has got the kite: the man or the girl?", answers: ["girl", "the girl"] },
              { question: "What colour is the big flower?", answers: ["yellow"] },
              { question: "Where is the plant: in the garden or in the kitchen?", answers: ["garden", "in the garden", "the garden"] },
            ],
          },
        },
      ],
    },
    STARTERS_LISTENING[2],
  ],
};
