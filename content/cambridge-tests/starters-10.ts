import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 10 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_10: CambridgeTest = {
  id: "starters-10",
  level: "starters",
  no: 10,
  title: "Pre A1 Starters · Practice Test 10",
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
              { pic: { e: "🦓" }, text: "This is a zebra.", answer: true },
              { pic: { e: "🍓" }, text: "This is a potato.", answer: false },
              { pic: { e: "⏰" }, text: "This is a clock.", answer: true },
              { pic: { e: "🐳" }, text: "This is a cat.", answer: false },
              { pic: { e: "🎒" }, text: "This is a bag.", answer: true },
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
                { e: "👩‍🏫", x: 20, y: 46, size: 3 },
                { e: "🧒", x: 48, y: 70, size: 2.4 },
                { e: "👧", x: 66, y: 70, size: 2.4 },
                { e: "👦", x: 84, y: 70, size: 2.4 },
                { e: "🐢", x: 30, y: 84 },
                { e: "🖍️", x: 66, y: 86, size: 1.4 },
              ],
            },
            items: [
              { text: "There are three children.", answer: true },
              { text: "The teacher is sitting on a chair.", answer: false },
              { text: "There is a turtle on the floor.", answer: true },
              { text: "There is a computer on the desk.", answer: false },
              { text: "The girl has got a crayon.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐭" }, answer: "mouse" },
              { pic: { e: "🍅" }, answer: "tomato" },
              { pic: { e: "🚪" }, answer: "door" },
              { pic: { e: "🐞" }, answer: "ladybird" },
              { pic: { e: "🥄" }, answer: "spoon" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Giraffes",
            text: [
              "Giraffes are very tall animals. They have got long legs and a very long {1}. They live in {2}.",
              "Giraffes are yellow and {3}. They eat leaves from the top of {4}. Baby giraffes can stand and walk on their first {5}!",
            ],
            bank: [
              { word: "neck", e: "🦒" },
              { word: "Africa", e: "🌍" },
              { word: "brown", e: "🤎" },
              { word: "trees", e: "🌳" },
              { word: "day", e: "☀️" },
              { word: "rulers", e: "📏" },
              { word: "milk", e: "🥛" },
            ],
            answers: ["neck", "Africa", "brown", "trees", "day"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "beach",
              items: [
                { e: "👩", x: 20, y: 56, size: 2.8 },
                { e: "👶", x: 34, y: 70, size: 2 },
                { e: "🏰", x: 56, y: 76, size: 2.2 },
                { e: "🐚", x: 70, y: 86, size: 1.4 },
                { e: "🐚", x: 76, y: 88, size: 1.4 },
                { e: "🐚", x: 82, y: 86, size: 1.4 },
                { e: "🐬", x: 72, y: 32, size: 2 },
              ],
            },
            items: [
              { question: "What animal is in the sea?", answers: ["dolphin", "a dolphin"] },
              { question: "How many shells are there?", answers: ["three", "3"] },
              { question: "What is next to the baby?", answers: ["sandcastle", "a sandcastle", "castle", "a castle"] },
              { question: "Who is with the baby?", answers: ["mother", "the mother", "mum", "a woman", "woman"] },
              { question: "Where are they?", answers: ["beach", "on the beach", "at the beach"] },
            ],
          },
        },
      ],
    },
  ],
};
