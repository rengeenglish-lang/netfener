import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 14 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_14: CambridgeTest = {
  id: "starters-14",
  level: "starters",
  no: 14,
  title: "Pre A1 Starters · Practice Test 14",
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
              { pic: { e: "🦊" }, text: "This is a dog.", answer: false },
              { pic: { e: "🍒" }, text: "These are cherries.", answer: true },
              { pic: { e: "🚒" }, text: "This is a truck.", answer: true },
              { pic: { e: "🦈" }, text: "This is a shark.", answer: true },
              { pic: { e: "🧸" }, text: "This is a doll.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "street", items: [{ e: "🏪", x: 18, y: 40, size: 3.4 }, { e: "👨", x: 36, y: 62, size: 2.6 }, { e: "👧", x: 48, y: 66, size: 2.2 }, { e: "🐈", x: 64, y: 82 }, { e: "🚌", x: 80, y: 62, size: 3 }, { e: "🌧️", x: 50, y: 12, size: 2.2 }] },
            items: [
              { text: "There is a shop in the street.", answer: true },
              { text: "The man is with a girl.", answer: true },
              { text: "There is a car next to the cat.", answer: false },
              { text: "It is sunny.", answer: false },
              { text: "There is a bus in the street.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐺" }, answer: "wolf" },
              { pic: { e: "🧀" }, answer: "cheese" },
              { pic: { e: "🛶" }, answer: "canoe" },
              { pic: { e: "👒" }, answer: "hat" },
              { pic: { e: "🌈" }, answer: "rainbow" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Rabbits",
            text: ["Rabbits are small animals with long {1}. They have got soft fur. They can be white, grey or {2}.", "Rabbits can run and {3} very fast. They like eating grass, flowers and {4}. A lot of children have a pet rabbit. They live in a small wooden house in the {5}."],
            bank: [
              { word: "ears", e: "👂" },
              { word: "brown", e: "🤎" },
              { word: "jump", e: "🦘" },
              { word: "carrots", e: "🥕" },
              { word: "garden", e: "🏡" },
              { word: "sing", e: "🎤" },
              { word: "phones", e: "📱" },
            ],
            answers: ["ears", "brown", "jump", "carrots", "garden"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "park", items: [{ e: "👩", x: 22, y: 60, size: 2.8 }, { e: "👶", x: 34, y: 72, size: 2 }, { e: "🛝", x: 64, y: 56, size: 3 }, { e: "👦", x: 68, y: 40, size: 2 }, { e: "🍦", x: 30, y: 52, size: 1.2 }, { e: "🌷", x: 86, y: 84 }, { e: "🌷", x: 92, y: 84 }] },
            items: [
              { question: "Who is on the slide?", answers: ["boy", "the boy", "a boy"] },
              { question: "What has the woman got?", answers: ["ice cream", "an ice cream", "a ice cream", "icecream"] },
              { question: "How many flowers are there?", answers: ["two", "2"] },
              { question: "Who is next to the woman?", answers: ["baby", "the baby", "a baby"] },
              { question: "Where are they?", answers: ["park", "in the park", "in a park"] },
            ],
          },
        },
      ],
    },
  ],
};
