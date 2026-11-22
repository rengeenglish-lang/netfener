import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 21 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_21: CambridgeTest = {
  id: "starters-21",
  level: "starters",
  no: 21,
  title: "Pre A1 Starters · Practice Test 21",
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
              { pic: { e: "🦁" }, text: "This is a tiger.", answer: false },
              { pic: { e: "🍎" }, text: "This is an apple.", answer: true },
              { pic: { e: "🚜" }, text: "This is a tractor.", answer: true },
              { pic: { e: "🐞" }, text: "This is a bee.", answer: false },
              { pic: { e: "🎂" }, text: "This is a cake.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "classroom", items: [{ e: "👩‍🏫", x: 18, y: 46, size: 3 }, { e: "🧑", x: 44, y: 70, size: 2.4 }, { e: "👧", x: 64, y: 70, size: 2.4 }, { e: "📏", x: 64, y: 84, size: 1.4 }, { e: "🐦", x: 84, y: 30, size: 1.6 }, { e: "🗑️", x: 86, y: 84, size: 1.6 }] },
            items: [
              { text: "The girl has got a ruler.", answer: true },
              { text: "There is a bird in the classroom.", answer: true },
              { text: "The teacher is a man.", answer: false },
              { text: "There are three children.", answer: false },
              { text: "There is a bin next to the girl.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐏" }, answer: "sheep" },
              { pic: { e: "🍋" }, answer: "lemon" },
              { pic: { e: "🚕" }, answer: "taxi" },
              { pic: { e: "👠" }, answer: "shoe" },
              { pic: { e: "🌊" }, answer: "sea" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Tigers",
            text: ["Tigers are big {1}. They are orange with black lines. They have got big teeth and long {2}.", "Tigers live in {3} in Asia. They can swim and they like water. Tigers eat {4}. They sleep a lot in the day. Baby tigers play with their {5}."],
            bank: [
              { word: "cats", e: "🐈" },
              { word: "tails", e: "🐅" },
              { word: "forests", e: "🌲" },
              { word: "meat", e: "🍖" },
              { word: "mothers", e: "👩" },
              { word: "chairs", e: "🪑" },
              { word: "pencils", e: "✏️" },
            ],
            answers: ["cats", "tails", "forests", "meat", "mothers"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "farm", items: [{ e: "🐐", x: 26, y: 70, size: 2.4 }, { e: "🐐", x: 36, y: 72, size: 2.4 }, { e: "👧", x: 56, y: 62, size: 2.4 }, { e: "🌽", x: 72, y: 74, size: 2 }, { e: "🏠", x: 86, y: 40, size: 3 }, { e: "🐈", x: 48, y: 84 }] },
            items: [
              { question: "How many goats are there?", answers: ["two", "2"] },
              { question: "What animal is next to the girl?", answers: ["cat", "a cat"] },
              { question: "What vegetable is there?", answers: ["corn", "sweetcorn"] },
              { question: "What building is there?", answers: ["house", "a house"] },
              { question: "Where are they?", answers: ["farm", "on a farm", "on the farm"] },
            ],
          },
        },
      ],
    },
  ],
};
