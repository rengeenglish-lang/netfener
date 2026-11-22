import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 24 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_24: CambridgeTest = {
  id: "starters-24",
  level: "starters",
  no: 24,
  title: "Pre A1 Starters · Practice Test 24",
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
              { pic: { e: "🐆" }, text: "This is a cat.", answer: false },
              { pic: { e: "🍌" }, text: "This is a banana.", answer: true },
              { pic: { e: "🚓" }, text: "This is a police car.", answer: true },
              { pic: { e: "🦋" }, text: "This is a butterfly.", answer: true },
              { pic: { e: "🪁" }, text: "This is a ball.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "park", items: [{ e: "🌳", x: 16, y: 34, size: 3.4 }, { e: "🐿️", x: 18, y: 46, size: 1.6 }, { e: "👩", x: 42, y: 62, size: 2.6 }, { e: "🛒", x: 54, y: 70, size: 1.8 }, { e: "👶", x: 52, y: 62, size: 1.8 }, { e: "🦆", x: 78, y: 80 }, { e: "🌞", x: 86, y: 12, size: 2.2 }] },
            items: [
              { text: "There is a squirrel in the tree.", answer: true },
              { text: "The baby is with the woman.", answer: true },
              { text: "There are two ducks.", answer: false },
              { text: "It is raining.", answer: false },
              { text: "There is a duck near the water.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐹" }, answer: "hamster" },
              { pic: { e: "🍅" }, answer: "tomato" },
              { pic: { e: "🚌" }, answer: "bus" },
              { pic: { e: "👟" }, answer: "shoes" },
              { pic: { e: "❄️" }, answer: "snow" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Butterflies",
            text: ["Butterflies are beautiful {1}. They have got four big wings. Their wings can be blue, orange, yellow or {2}.", "Butterflies fly from flower to flower. They like {3} days. They drink water from {4}. A baby butterfly is a {5}. It eats leaves and grows very quickly."],
            bank: [
              { word: "insects", e: "🐜" },
              { word: "purple", e: "💜" },
              { word: "sunny", e: "☀️" },
              { word: "flowers", e: "🌼" },
              { word: "caterpillar", e: "🐛" },
              { word: "snowy", e: "❄️" },
              { word: "doors", e: "🚪" },
            ],
            answers: ["insects", "purple", "sunny", "flowers", "caterpillar"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "kitchen", items: [{ e: "👨", x: 22, y: 52, size: 3 }, { e: "🍕", x: 46, y: 74, size: 2 }, { e: "👧", x: 68, y: 60, size: 2.4 }, { e: "🧃", x: 76, y: 76, size: 1.4 }, { e: "🐈", x: 86, y: 86 }, { e: "🍴", x: 56, y: 76, size: 1.4 }] },
            items: [
              { question: "What food is on the table?", answers: ["pizza", "a pizza"] },
              { question: "What animal is in the kitchen?", answers: ["cat", "a cat"] },
              { question: "What has the girl got to drink?", answers: ["juice", "a juice", "some juice"] },
              { question: "Who is on the left?", answers: ["father", "the father", "dad", "the dad", "man", "a man"] },
              { question: "Where are they?", answers: ["kitchen", "in the kitchen", "in a kitchen"] },
            ],
          },
        },
      ],
    },
  ],
};
