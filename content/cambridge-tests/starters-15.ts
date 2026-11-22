import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 15 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_15: CambridgeTest = {
  id: "starters-15",
  level: "starters",
  no: 15,
  title: "Pre A1 Starters · Practice Test 15",
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
              { pic: { e: "🐒" }, text: "This is a monkey.", answer: true },
              { pic: { e: "🥐" }, text: "This is an egg.", answer: false },
              { pic: { e: "🚁" }, text: "This is a helicopter.", answer: true },
              { pic: { e: "🐌" }, text: "This is a snail.", answer: true },
              { pic: { e: "🎹" }, text: "This is a guitar.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "garden", items: [{ e: "🏡", x: 18, y: 40, size: 3.4 }, { e: "👵", x: 40, y: 60, size: 2.6 }, { e: "🪴", x: 54, y: 78, size: 1.8 }, { e: "🐦", x: 74, y: 30, size: 1.6 }, { e: "🐈", x: 80, y: 82 }, { e: "🐈", x: 88, y: 84 }, { e: "🍎", x: 66, y: 22, size: 1.4 }] },
            items: [
              { text: "The grandmother is in the garden.", answer: true },
              { text: "There is one cat.", answer: false },
              { text: "There is a bird in the garden.", answer: true },
              { text: "The grandmother has got a dog.", answer: false },
              { text: "There are two cats on the grass.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦋" }, answer: "butterfly" },
              { pic: { e: "🥔" }, answer: "potato" },
              { pic: { e: "🚜" }, answer: "tractor" },
              { pic: { e: "🧥" }, answer: "coat" },
              { pic: { e: "☁️" }, answer: "cloud" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Snails",
            text: ["Snails are very small animals. They have got a shell on their {1}. They haven't got any {2}, so they move very slowly.", "Snails like {3} weather. You can see them in the garden after it rains. They eat {4} and flowers. When they are afraid, they go inside their {5}."],
            bank: [
              { word: "backs", e: "🐌" },
              { word: "legs", e: "🦵" },
              { word: "wet", e: "💧" },
              { word: "leaves", e: "🍃" },
              { word: "shells", e: "🐚" },
              { word: "dry", e: "☀️" },
              { word: "toys", e: "🧸" },
            ],
            answers: ["backs", "legs", "wet", "leaves", "shells"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "classroom", items: [{ e: "👩‍🏫", x: 18, y: 46, size: 3 }, { e: "👧", x: 52, y: 72, size: 2.4 }, { e: "🖍️", x: 46, y: 86, size: 1.4 }, { e: "🖍️", x: 52, y: 86, size: 1.4 }, { e: "🖍️", x: 58, y: 86, size: 1.4 }, { e: "🐠", x: 82, y: 60, size: 1.8 }, { e: "🪟", x: 50, y: 20, size: 2.4 }] },
            items: [
              { question: "How many crayons are there?", answers: ["three", "3"] },
              { question: "What animal is in the classroom?", answers: ["fish", "a fish"] },
              { question: "Who is sitting at the desk?", answers: ["girl", "the girl", "a girl"] },
              { question: "Who is standing at the front?", answers: ["teacher", "the teacher", "a teacher"] },
              { question: "What is on the wall?", answers: ["window", "a window"] },
            ],
          },
        },
      ],
    },
  ],
};
