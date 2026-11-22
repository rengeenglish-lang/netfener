import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 12 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_12: CambridgeTest = {
  id: "starters-12",
  level: "starters",
  no: 12,
  title: "Pre A1 Starters · Practice Test 12",
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
              { pic: { e: "🐝" }, text: "This is a bee.", answer: true },
              { pic: { e: "🥕" }, text: "This is a carrot.", answer: true },
              { pic: { e: "🚕" }, text: "This is a plane.", answer: false },
              { pic: { e: "🐈" }, text: "This is a cat.", answer: true },
              { pic: { e: "🧤" }, text: "This is a sock.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "classroom", items: [{ e: "👨‍🏫", x: 18, y: 46, size: 3 }, { e: "💻", x: 44, y: 66, size: 2 }, { e: "👧", x: 44, y: 76, size: 2.4 }, { e: "👦", x: 72, y: 74, size: 2.4 }, { e: "🌍", x: 78, y: 26, size: 2 }, { e: "🎒", x: 86, y: 88, size: 1.6 }] },
            items: [
              { text: "The teacher is a man.", answer: true },
              { text: "The girl is next to a computer.", answer: true },
              { text: "There is a map on the floor.", answer: false },
              { text: "The boy has got a bag next to him.", answer: true },
              { text: "There are four children.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦉" }, answer: "owl" },
              { pic: { e: "🍪" }, answer: "cookie" },
              { pic: { e: "🚀" }, answer: "rocket" },
              { pic: { e: "🧣" }, answer: "scarf" },
              { pic: { e: "⭐" }, answer: "star" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Bees",
            text: ["Bees are small insects. They are yellow and {1}. They have got six legs and four small {2}.", "Bees fly from flower to {3} all day. They make {4} and we can eat it on bread. Bees live together in a big family. Their home is called a {5}."],
            bank: [
              { word: "black", e: "🖤" },
              { word: "wings", e: "🪽" },
              { word: "flower", e: "🌸" },
              { word: "honey", e: "🍯" },
              { word: "hive", e: "🐝" },
              { word: "cars", e: "🚗" },
              { word: "pens", e: "🖊️" },
            ],
            answers: ["black", "wings", "flower", "honey", "hive"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "farm", items: [{ e: "🐴", x: 30, y: 64, size: 3 }, { e: "👦", x: 50, y: 62, size: 2.4 }, { e: "🍎", x: 56, y: 54, size: 1.4 }, { e: "🐑", x: 74, y: 80 }, { e: "🐑", x: 82, y: 82 }, { e: "🐑", x: 90, y: 80 }, { e: "🌞", x: 84, y: 12, size: 2.2 }] },
            items: [
              { question: "What animal is next to the boy?", answers: ["horse", "a horse"] },
              { question: "What fruit has the boy got?", answers: ["apple", "an apple", "a apple"] },
              { question: "How many sheep are there?", answers: ["three", "3"] },
              { question: "What is in the sky?", answers: ["sun", "the sun"] },
              { question: "Where is the boy: on a farm or at school?", answers: ["farm", "on a farm", "a farm", "on the farm"] },
            ],
          },
        },
      ],
    },
  ],
};
