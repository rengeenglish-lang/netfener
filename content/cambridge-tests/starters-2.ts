import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 2. Original Netfener content. */
export const STARTERS_2: CambridgeTest = {
  id: "starters-2",
  level: "starters",
  no: 2,
  title: "Pre A1 Starters · Practice Test 2",
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
              { pic: { e: "🐘" }, text: "This is an elephant.", answer: true },
              { pic: { e: "🍦" }, text: "This is a cake.", answer: false },
              { pic: { e: "🚲" }, text: "This is a bike.", answer: true },
              { pic: { e: "🐴" }, text: "This is a cow.", answer: false },
              { pic: { e: "📚" }, text: "These are books.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "beach",
              items: [
                { e: "☀️", x: 84, y: 12, size: 2.4 },
                { e: "⛵", x: 30, y: 46, size: 2.4 },
                { e: "🐟", x: 60, y: 52, size: 1.6 },
                { e: "🐟", x: 70, y: 56, size: 1.6 },
                { e: "👦", x: 40, y: 80, size: 2.6 },
                { e: "🏖️", x: 76, y: 80, size: 2.4 },
                { e: "🦀", x: 18, y: 88 },
                { e: "⚽", x: 54, y: 86, size: 1.6 },
              ],
            },
            items: [
              { text: "There is a boat on the sea.", answer: true },
              { text: "There are three fish in the water.", answer: false },
              { text: "The boy is next to a ball.", answer: true },
              { text: "There is a crab on the sand.", answer: true },
              { text: "There are two boats.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐝" }, answer: "bee" },
              { pic: { e: "🍞" }, answer: "bread" },
              { pic: { e: "🦁" }, answer: "lion" },
              { pic: { e: "🎸" }, answer: "guitar" },
              { pic: { e: "🌙" }, answer: "moon" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Ducks",
            text: [
              "Ducks are birds. They can fly, and they can swim in the {1} too. Ducks have got two short legs and big orange {2}. Their feet help them swim.",
              "Ducks like eating plants, small {3} and bread. Baby ducks are small and {4}. They walk behind their mother in a long line. Children love giving ducks food in the {5}.",
            ],
            bank: [
              { word: "water", e: "💧" },
              { word: "feet", e: "🦶" },
              { word: "fish", e: "🐟" },
              { word: "yellow", e: "💛" },
              { word: "park", e: "🌳" },
              { word: "hats", e: "🧢" },
              { word: "trains", e: "🚆" },
            ],
            answers: ["water", "feet", "fish", "yellow", "park"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "room",
              items: [
                { e: "🛏️", x: 24, y: 62, size: 3.4 },
                { e: "🧸", x: 22, y: 50, size: 1.8 },
                { e: "👧", x: 58, y: 66, size: 2.6 },
                { e: "📖", x: 64, y: 74, size: 1.4 },
                { e: "🪟", x: 80, y: 30, size: 2.6 },
                { e: "🐦", x: 82, y: 28, size: 1.4 },
                { e: "🎒", x: 86, y: 84, size: 1.8 },
              ],
            },
            items: [
              { question: "What is the girl reading?", answers: ["book", "a book"] },
              { question: "What toy is on the bed?", answers: ["bear", "teddy", "teddy bear", "a teddy", "a teddy bear", "a bear"] },
              { question: "What animal is at the window?", answers: ["bird", "a bird"] },
              { question: "What is on the floor next to the girl?", answers: ["bag", "a bag", "schoolbag", "a schoolbag", "backpack", "a backpack"] },
              { question: "Where is the bird: in the window or under the bed?", answers: ["window", "in the window", "the window"] },
            ],
          },
        },
      ],
    },
  ],
};
