import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 17 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_17: CambridgeTest = {
  id: "starters-17",
  level: "starters",
  no: 17,
  title: "Pre A1 Starters · Practice Test 17",
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
              { pic: { e: "🐼" }, text: "This is a panda.", answer: true },
              { pic: { e: "🍉" }, text: "This is a lemon.", answer: false },
              { pic: { e: "🚑" }, text: "This is a car.", answer: true },
              { pic: { e: "🦔" }, text: "This is a cat.", answer: false },
              { pic: { e: "🎨" }, text: "This is paint.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "farm", items: [{ e: "🏚️", x: 16, y: 40, size: 3.4 }, { e: "🐄", x: 40, y: 66, size: 3 }, { e: "👩‍🌾", x: 60, y: 60, size: 2.6 }, { e: "🪣", x: 68, y: 78, size: 1.4 }, { e: "🐕", x: 82, y: 82 }, { e: "🐓", x: 28, y: 84 }, { e: "🐓", x: 20, y: 84 }] },
            items: [
              { text: "The farmer is a woman.", answer: true },
              { text: "There are two chickens.", answer: true },
              { text: "The farmer is next to a horse.", answer: false },
              { text: "There is a dog on the farm.", answer: true },
              { text: "The cow is in the house.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦩" }, answer: "flamingo" },
              { pic: { e: "🍫" }, answer: "chocolate" },
              { pic: { e: "🛸" }, answer: "spaceship" },
              { pic: { e: "🧢" }, answer: "cap" },
              { pic: { e: "🌻" }, answer: "sunflower" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Pandas",
            text: ["Pandas are big black and white {1}. They live in China, in the mountains. They have got black {2} and black legs.", "Pandas eat a plant called bamboo. They eat it all {3}! Pandas can climb {4}. Baby pandas are very small and {5}. They stay with their mothers."],
            bank: [
              { word: "bears", e: "🐻" },
              { word: "ears", e: "👂" },
              { word: "day", e: "☀️" },
              { word: "trees", e: "🌳" },
              { word: "pink", e: "🩷" },
              { word: "fish", e: "🐟" },
              { word: "tables", e: "🪑" },
            ],
            answers: ["bears", "ears", "day", "trees", "pink"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "room", items: [{ e: "👧", x: 30, y: 60, size: 2.6 }, { e: "🎹", x: 50, y: 60, size: 2.8 }, { e: "🐈", x: 74, y: 82 }, { e: "🪟", x: 56, y: 20, size: 2.4 }, { e: "🌷", x: 80, y: 38, size: 1.4 }, { e: "🌷", x: 86, y: 38, size: 1.4 }] },
            items: [
              { question: "What is the girl playing?", answers: ["piano", "the piano", "a piano"] },
              { question: "What animal is on the floor?", answers: ["cat", "a cat"] },
              { question: "How many flowers are there?", answers: ["two", "2"] },
              { question: "Where are the flowers: next to the window or under the bed?", answers: ["window", "next to the window", "the window"] },
              { question: "Who is playing the piano?", answers: ["girl", "the girl", "a girl"] },
            ],
          },
        },
      ],
    },
  ],
};
