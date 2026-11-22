import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 22 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_22: CambridgeTest = {
  id: "starters-22",
  level: "starters",
  no: 22,
  title: "Pre A1 Starters · Practice Test 22",
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
              { pic: { e: "🐔" }, text: "This is a chicken.", answer: true },
              { pic: { e: "🥚" }, text: "This is an egg.", answer: true },
              { pic: { e: "🛶" }, text: "This is a car.", answer: false },
              { pic: { e: "🐍" }, text: "This is a snake.", answer: true },
              { pic: { e: "🧢" }, text: "This is a dress.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "street", items: [{ e: "🏥", x: 20, y: 36, size: 3.4 }, { e: "🚑", x: 44, y: 64, size: 3 }, { e: "👩‍⚕️", x: 68, y: 62, size: 2.6 }, { e: "👴", x: 80, y: 64, size: 2.6 }, { e: "🐕", x: 88, y: 80 }, { e: "🌳", x: 14, y: 72, size: 2.4 }] },
            items: [
              { text: "There is a hospital in the street.", answer: true },
              { text: "The doctor is a woman.", answer: true },
              { text: "There is a motorbike in the street.", answer: false },
              { text: "The old man has got a dog.", answer: true },
              { text: "There are two trees.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐋" }, answer: "whale" },
              { pic: { e: "🍞" }, answer: "bread" },
              { pic: { e: "🚀" }, answer: "rocket" },
              { pic: { e: "👕" }, answer: "shirt" },
              { pic: { e: "🌸" }, answer: "flower" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Chickens",
            text: ["Chickens are farm {1}. They have got two legs and two wings, but they can't fly very well. Chickens can be white, brown or {2}.", "Chickens eat seeds and {3}. They walk around the farm all day. Mother chickens give us {4}. Baby chickens are small and yellow. They say 'cheep cheep' and follow their {5}."],
            bank: [
              { word: "birds", e: "🐦" },
              { word: "black", e: "🖤" },
              { word: "insects", e: "🐛" },
              { word: "eggs", e: "🥚" },
              { word: "mother", e: "🐔" },
              { word: "cars", e: "🚗" },
              { word: "songs", e: "🎵" },
            ],
            answers: ["birds", "black", "insects", "eggs", "mother"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "garden", items: [{ e: "👨", x: 20, y: 56, size: 3 }, { e: "💧", x: 34, y: 64, size: 1.4 }, { e: "🌹", x: 46, y: 76 }, { e: "🌹", x: 54, y: 78 }, { e: "👦", x: 72, y: 62, size: 2.4 }, { e: "⚽", x: 80, y: 80 }, { e: "🐝", x: 50, y: 46, size: 1.4 }] },
            items: [
              { question: "What is the boy playing with?", answers: ["ball", "a ball", "football", "a football"] },
              { question: "How many flowers are there?", answers: ["two", "2"] },
              { question: "What insect is over the flowers?", answers: ["bee", "a bee"] },
              { question: "Who is next to the boy?", answers: ["father", "the father", "dad", "the dad", "man", "a man"] },
              { question: "Where are they?", answers: ["garden", "in the garden", "in a garden"] },
            ],
          },
        },
      ],
    },
  ],
};
