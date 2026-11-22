import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 18 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_18: CambridgeTest = {
  id: "starters-18",
  level: "starters",
  no: 18,
  title: "Pre A1 Starters · Practice Test 18",
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
              { pic: { e: "🐫" }, text: "This is a camel.", answer: true },
              { pic: { e: "🌽" }, text: "This is corn.", answer: true },
              { pic: { e: "🚂" }, text: "This is a boat.", answer: false },
              { pic: { e: "🦎" }, text: "This is a lizard.", answer: true },
              { pic: { e: "🧦" }, text: "These are shoes.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "park", items: [{ e: "⛲", x: 46, y: 46, size: 3.2 }, { e: "👦", x: 24, y: 64, size: 2.4 }, { e: "🛹", x: 24, y: 80, size: 1.6 }, { e: "👧", x: 68, y: 64, size: 2.4 }, { e: "🐕", x: 80, y: 80 }, { e: "🌳", x: 88, y: 30, size: 3.2 }] },
            items: [
              { text: "There is a skateboard in the park.", answer: true },
              { text: "The girl has got a dog.", answer: true },
              { text: "There are two trees.", answer: false },
              { text: "The boy is in the water.", answer: false },
              { text: "There is water in the middle of the park.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦢" }, answer: "swan" },
              { pic: { e: "🥥" }, answer: "coconut" },
              { pic: { e: "🚤" }, answer: "boat" },
              { pic: { e: "🩳" }, answer: "shorts" },
              { pic: { e: "🌵" }, answer: "cactus" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Camels",
            text: ["Camels are big brown animals. They live in hot, dry {1}. They have got long legs and long {2}.", "Camels can walk for days without any {3}. They carry people and bags on their {4}. Some camels have got one hump and some camels have got {5}."],
            bank: [
              { word: "deserts", e: "🏜️" },
              { word: "necks", e: "🦒" },
              { word: "water", e: "💧" },
              { word: "backs", e: "🐫" },
              { word: "two", e: "2️⃣" },
              { word: "snow", e: "❄️" },
              { word: "books", e: "📚" },
            ],
            answers: ["deserts", "necks", "water", "backs", "two"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "street", items: [{ e: "🏫", x: 20, y: 36, size: 3.6 }, { e: "👧", x: 42, y: 64, size: 2.4 }, { e: "👦", x: 54, y: 64, size: 2.4 }, { e: "🚲", x: 70, y: 78, size: 2 }, { e: "🚦", x: 86, y: 40, size: 2.2 }, { e: "🌂", x: 48, y: 52, size: 1.6 }] },
            items: [
              { question: "What building is in the street?", answers: ["school", "a school", "the school"] },
              { question: "How many children are there?", answers: ["two", "2"] },
              { question: "What is next to the children?", answers: ["bike", "a bike", "bicycle", "a bicycle"] },
              { question: "What have the children got?", answers: ["umbrella", "an umbrella", "a umbrella"] },
              { question: "Where are they: in the street or at the beach?", answers: ["street", "in the street", "the street"] },
            ],
          },
        },
      ],
    },
  ],
};
