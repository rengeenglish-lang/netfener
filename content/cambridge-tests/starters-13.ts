import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 13 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_13: CambridgeTest = {
  id: "starters-13",
  level: "starters",
  no: 13,
  title: "Pre A1 Starters · Practice Test 13",
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
              { pic: { e: "🐧" }, text: "This is a penguin.", answer: true },
              { pic: { e: "🍕" }, text: "This is pizza.", answer: true },
              { pic: { e: "🚲" }, text: "This is a bus.", answer: false },
              { pic: { e: "🐇" }, text: "This is a rabbit.", answer: true },
              { pic: { e: "⚽" }, text: "This is a kite.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "beach", items: [{ e: "🌴", x: 16, y: 40, size: 3.4 }, { e: "👧", x: 40, y: 64, size: 2.6 }, { e: "🪣", x: 50, y: 80, size: 1.6 }, { e: "🐕", x: 62, y: 80 }, { e: "🌊", x: 76, y: 40, size: 2.6 }, { e: "🐦", x: 30, y: 16, size: 1.4 }, { e: "🐦", x: 40, y: 14, size: 1.4 }] },
            items: [
              { text: "There is a tree on the beach.", answer: true },
              { text: "The girl has got a bucket.", answer: true },
              { text: "There are three birds in the sky.", answer: false },
              { text: "The dog is in the sea.", answer: false },
              { text: "There is a dog next to the bucket.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐨" }, answer: "koala" },
              { pic: { e: "🍩" }, answer: "donut" },
              { pic: { e: "🛵" }, answer: "scooter" },
              { pic: { e: "👖" }, answer: "jeans" },
              { pic: { e: "☂️" }, answer: "umbrella" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Penguins",
            text: ["Penguins are birds, but they can't {1}. They are black and {2}. They walk on their two short legs.", "Penguins can swim very well. They catch {3} in the sea and eat them. A lot of penguins live in very {4} places with ice and snow. Baby penguins are grey and they stay with their {5}."],
            bank: [
              { word: "fly", e: "🕊️" },
              { word: "white", e: "🤍" },
              { word: "fish", e: "🐟" },
              { word: "cold", e: "❄️" },
              { word: "parents", e: "👪" },
              { word: "cakes", e: "🍰" },
              { word: "hot", e: "🔥" },
            ],
            answers: ["fly", "white", "fish", "cold", "parents"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "room", items: [{ e: "🛏️", x: 26, y: 66, size: 3.6 }, { e: "👦", x: 30, y: 52, size: 2.4 }, { e: "📖", x: 40, y: 58, size: 1.4 }, { e: "🐹", x: 70, y: 82 }, { e: "🖼️", x: 62, y: 24, size: 2.4 }, { e: "🎮", x: 84, y: 70, size: 1.8 }] },
            items: [
              { question: "Where is the boy?", answers: ["bed", "on the bed", "in bed", "in the bed"] },
              { question: "What is the boy reading?", answers: ["book", "a book"] },
              { question: "What animal is on the floor?", answers: ["hamster", "a hamster"] },
              { question: "What is on the wall?", answers: ["picture", "a picture", "photo", "a photo"] },
              { question: "How many beds are there?", answers: ["one", "1"] },
            ],
          },
        },
      ],
    },
  ],
};
