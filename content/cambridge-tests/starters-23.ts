import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 23 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_23: CambridgeTest = {
  id: "starters-23",
  level: "starters",
  no: 23,
  title: "Pre A1 Starters · Practice Test 23",
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
              { pic: { e: "🐙" }, text: "This is an octopus.", answer: true },
              { pic: { e: "🍊" }, text: "This is an orange.", answer: true },
              { pic: { e: "🚁" }, text: "This is a plane.", answer: false },
              { pic: { e: "🐑" }, text: "This is a goat.", answer: false },
              { pic: { e: "📚" }, text: "These are books.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "room", items: [{ e: "🖥️", x: 30, y: 52, size: 2.6 }, { e: "👦", x: 30, y: 68, size: 2.4 }, { e: "🛏️", x: 72, y: 66, size: 3.4 }, { e: "🐕", x: 72, y: 56, size: 2 }, { e: "⚽", x: 50, y: 86 }, { e: "🕰️", x: 62, y: 18, size: 2 }] },
            items: [
              { text: "The boy is next to a computer.", answer: true },
              { text: "The dog is on the bed.", answer: true },
              { text: "There is a cat on the bed.", answer: false },
              { text: "There is a ball on the floor.", answer: true },
              { text: "The boy is in bed.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦈" }, answer: "shark" },
              { pic: { e: "🍐" }, answer: "pear" },
              { pic: { e: "🚃" }, answer: "train" },
              { pic: { e: "🧦" }, answer: "socks" },
              { pic: { e: "🌞" }, answer: "sun" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Octopuses",
            text: ["An octopus lives in the {1}. It has got a soft body and eight long {2}. It hasn't got any bones.", "An octopus can change its {3}! It can be red, brown or white. It eats crabs and small {4}. When it is afraid, it can hide in a small {5} between the rocks."],
            bank: [
              { word: "sea", e: "🌊" },
              { word: "arms", e: "💪" },
              { word: "colour", e: "🎨" },
              { word: "fish", e: "🐟" },
              { word: "place", e: "📍" },
              { word: "tree", e: "🌳" },
              { word: "cake", e: "🍰" },
            ],
            answers: ["sea", "arms", "colour", "fish", "place"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "beach", items: [{ e: "👧", x: 24, y: 64, size: 2.4 }, { e: "👦", x: 36, y: 64, size: 2.4 }, { e: "🏐", x: 30, y: 40, size: 1.6 }, { e: "🌴", x: 62, y: 40, size: 3.4 }, { e: "🥥", x: 60, y: 30, size: 1.2 }, { e: "🦀", x: 80, y: 84 }, { e: "🦀", x: 88, y: 84 }, { e: "🦀", x: 84, y: 90 }] },
            items: [
              { question: "What are the children playing with?", answers: ["ball", "a ball"] },
              { question: "How many crabs are there?", answers: ["three", "3"] },
              { question: "What fruit is in the tree?", answers: ["coconut", "a coconut", "coconuts"] },
              { question: "How many children are there?", answers: ["two", "2"] },
              { question: "Where are they?", answers: ["beach", "on the beach", "at the beach"] },
            ],
          },
        },
      ],
    },
  ],
};
