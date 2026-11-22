import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 16 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_16: CambridgeTest = {
  id: "starters-16",
  level: "starters",
  no: 16,
  title: "Pre A1 Starters · Practice Test 16",
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
              { pic: { e: "🦜" }, text: "This is a parrot.", answer: true },
              { pic: { e: "🍑" }, text: "This is a peach.", answer: true },
              { pic: { e: "🛴" }, text: "This is a bike.", answer: false },
              { pic: { e: "🐃" }, text: "This is a sheep.", answer: false },
              { pic: { e: "📱" }, text: "This is a phone.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "kitchen", items: [{ e: "👩", x: 20, y: 50, size: 3 }, { e: "🍲", x: 40, y: 66, size: 2 }, { e: "👦", x: 62, y: 62, size: 2.4 }, { e: "👧", x: 80, y: 62, size: 2.4 }, { e: "🍞", x: 58, y: 80, size: 1.6 }, { e: "🥤", x: 76, y: 80, size: 1.4 }, { e: "🥤", x: 84, y: 80, size: 1.4 }] },
            items: [
              { text: "The mother is next to the soup.", answer: true },
              { text: "There are two drinks on the table.", answer: true },
              { text: "The boy has got a banana.", answer: false },
              { text: "There is some bread on the table.", answer: true },
              { text: "There are three children in the kitchen.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦀" }, answer: "crab" },
              { pic: { e: "🍇" }, answer: "grapes" },
              { pic: { e: "🚢" }, answer: "ship" },
              { pic: { e: "🥾" }, answer: "boots" },
              { pic: { e: "🌲" }, answer: "tree" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Parrots",
            text: ["Parrots are beautiful {1}. They can be red, blue, yellow or {2}. They have got strong feet and a big beak.", "Parrots live in hot countries, in tall {3}. They eat fruit and nuts. Some parrots can say words, so people love them as {4}. Parrots can live for a very long {5}!"],
            bank: [
              { word: "birds", e: "🐦" },
              { word: "green", e: "💚" },
              { word: "trees", e: "🌳" },
              { word: "pets", e: "🏠" },
              { word: "time", e: "⏳" },
              { word: "fish", e: "🐟" },
              { word: "cars", e: "🚗" },
            ],
            answers: ["birds", "green", "trees", "pets", "time"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "beach", items: [{ e: "👨", x: 24, y: 58, size: 2.8 }, { e: "🎣", x: 34, y: 50, size: 2 }, { e: "🐟", x: 44, y: 40, size: 1.4 }, { e: "👦", x: 62, y: 66, size: 2.4 }, { e: "🏖️", x: 80, y: 70, size: 2.6 }, { e: "🌞", x: 86, y: 12, size: 2.2 }] },
            items: [
              { question: "What is the man doing?", answers: ["fishing"] },
              { question: "What is in the water?", answers: ["fish", "a fish"] },
              { question: "Who is next to the man?", answers: ["boy", "the boy", "a boy"] },
              { question: "What is in the sky?", answers: ["sun", "the sun"] },
              { question: "Where are they?", answers: ["beach", "on the beach", "at the beach"] },
            ],
          },
        },
      ],
    },
  ],
};
