import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 19 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_19: CambridgeTest = {
  id: "starters-19",
  level: "starters",
  no: 19,
  title: "Pre A1 Starters · Practice Test 19",
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
              { pic: { e: "🐬" }, text: "This is a dolphin.", answer: true },
              { pic: { e: "🥒" }, text: "This is a banana.", answer: false },
              { pic: { e: "🛻" }, text: "This is a truck.", answer: true },
              { pic: { e: "🐁" }, text: "This is a mouse.", answer: true },
              { pic: { e: "🪀" }, text: "This is a ball.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "garden", items: [{ e: "👨", x: 22, y: 56, size: 3 }, { e: "🌳", x: 50, y: 30, size: 3.4 }, { e: "🍐", x: 46, y: 24, size: 1.4 }, { e: "🍐", x: 54, y: 26, size: 1.4 }, { e: "👦", x: 72, y: 66, size: 2.4 }, { e: "🐢", x: 86, y: 84 }] },
            items: [
              { text: "There are two pears in the tree.", answer: true },
              { text: "The boy is next to a turtle.", answer: true },
              { text: "The father is in the tree.", answer: false },
              { text: "There is a cat in the garden.", answer: false },
              { text: "The tree is between the father and the boy.", answer: true },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐿️" }, answer: "squirrel" },
              { pic: { e: "🍓" }, answer: "strawberry" },
              { pic: { e: "🚲" }, answer: "bike" },
              { pic: { e: "🧤" }, answer: "gloves" },
              { pic: { e: "🌧️" }, answer: "rain" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Dolphins",
            text: ["Dolphins live in the {1}. They are grey and they have got a long nose. They can swim very {2}.", "Dolphins are very clever. They play together and they love {3} out of the water. They eat {4}. Dolphins talk to each other with sounds. They are very {5} animals."],
            bank: [
              { word: "sea", e: "🌊" },
              { word: "fast", e: "💨" },
              { word: "jumping", e: "🦘" },
              { word: "fish", e: "🐟" },
              { word: "friendly", e: "😊" },
              { word: "sad", e: "😢" },
              { word: "hats", e: "🎩" },
            ],
            answers: ["sea", "fast", "jumping", "fish", "friendly"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "kitchen", items: [{ e: "👵", x: 22, y: 52, size: 2.8 }, { e: "🥛", x: 40, y: 72, size: 1.6 }, { e: "🍪", x: 50, y: 76, size: 1.2 }, { e: "🍪", x: 56, y: 76, size: 1.2 }, { e: "🍪", x: 62, y: 76, size: 1.2 }, { e: "🍪", x: 68, y: 76, size: 1.2 }, { e: "👧", x: 80, y: 62, size: 2.4 }] },
            items: [
              { question: "How many cookies are there?", answers: ["four", "4"] },
              { question: "What can you drink?", answers: ["milk", "the milk"] },
              { question: "Who is on the left?", answers: ["grandmother", "the grandmother", "grandma", "granny"] },
              { question: "Who is on the right?", answers: ["girl", "the girl", "a girl"] },
              { question: "Where are they?", answers: ["kitchen", "in the kitchen", "in a kitchen"] },
            ],
          },
        },
      ],
    },
  ],
};
