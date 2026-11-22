import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 20 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_20: CambridgeTest = {
  id: "starters-20",
  level: "starters",
  no: 20,
  title: "Pre A1 Starters · Practice Test 20",
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
              { pic: { e: "🦉" }, text: "This is an owl.", answer: true },
              { pic: { e: "🍔" }, text: "This is a burger.", answer: true },
              { pic: { e: "🚌" }, text: "This is a train.", answer: false },
              { pic: { e: "🐊" }, text: "This is a fish.", answer: false },
              { pic: { e: "👓" }, text: "These are glasses.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "beach", items: [{ e: "⛱️", x: 22, y: 50, size: 3 }, { e: "👩", x: 26, y: 66, size: 2.6 }, { e: "📚", x: 36, y: 74, size: 1.4 }, { e: "👦", x: 58, y: 66, size: 2.4 }, { e: "⚽", x: 64, y: 80 }, { e: "🐚", x: 80, y: 86, size: 1.4 }, { e: "⛵", x: 76, y: 30, size: 2.2 }] },
            items: [
              { text: "The mother is under the umbrella.", answer: true },
              { text: "The mother has got a book.", answer: true },
              { text: "The boy is playing with a ball.", answer: true },
              { text: "There are two boats on the sea.", answer: false },
              { text: "There are three shells on the sand.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐻" }, answer: "bear" },
              { pic: { e: "🍍" }, answer: "pineapple" },
              { pic: { e: "✈️" }, answer: "plane" },
              { pic: { e: "👚" }, answer: "shirt" },
              { pic: { e: "🔥" }, answer: "fire" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Owls",
            text: ["Owls are birds. They have got big round {1} and small beaks. They are brown, grey or {2}.", "Owls sleep in the day and fly at {3}. They can see very well in the dark. Owls eat mice and small {4}. They live in old trees and old {5}."],
            bank: [
              { word: "eyes", e: "👀" },
              { word: "white", e: "🤍" },
              { word: "night", e: "🌙" },
              { word: "animals", e: "🐭" },
              { word: "buildings", e: "🏚️" },
              { word: "morning", e: "🌅" },
              { word: "pencils", e: "✏️" },
            ],
            answers: ["eyes", "white", "night", "animals", "buildings"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "park", items: [{ e: "👴", x: 22, y: 62, size: 2.8 }, { e: "🪑", x: 22, y: 74, size: 2.4 }, { e: "🐕", x: 36, y: 80 }, { e: "👧", x: 62, y: 62, size: 2.4 }, { e: "🎈", x: 62, y: 34, size: 1.6 }, { e: "🎈", x: 68, y: 30, size: 1.6 }, { e: "🎈", x: 74, y: 34, size: 1.6 }] },
            items: [
              { question: "How many balloons has the girl got?", answers: ["three", "3"] },
              { question: "Where is the grandfather sitting?", answers: ["chair", "on a chair", "on the chair", "bench", "on a bench", "on the bench"] },
              { question: "What animal is next to the grandfather?", answers: ["dog", "a dog"] },
              { question: "Who has got the balloons?", answers: ["girl", "the girl", "a girl"] },
              { question: "Where are they?", answers: ["park", "in the park", "in a park"] },
            ],
          },
        },
      ],
    },
  ],
};
