import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 25 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_25: CambridgeTest = {
  id: "starters-25",
  level: "starters",
  no: 25,
  title: "Pre A1 Starters · Practice Test 25",
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
              { pic: { e: "🐮" }, text: "This is a cow.", answer: true },
              { pic: { e: "🍓" }, text: "This is a strawberry.", answer: true },
              { pic: { e: "⛵" }, text: "This is a bike.", answer: false },
              { pic: { e: "🐦" }, text: "This is a bird.", answer: true },
              { pic: { e: "🎸" }, text: "This is a piano.", answer: false },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: { bg: "classroom", items: [{ e: "👨‍🏫", x: 18, y: 46, size: 3 }, { e: "👦", x: 42, y: 70, size: 2.4 }, { e: "👧", x: 60, y: 70, size: 2.4 }, { e: "👦", x: 78, y: 70, size: 2.4 }, { e: "📕", x: 60, y: 84, size: 1.4 }, { e: "🌵", x: 86, y: 30, size: 1.6 }] },
            items: [
              { text: "There are three children.", answer: true },
              { text: "The girl has got a book.", answer: true },
              { text: "The teacher is a woman.", answer: false },
              { text: "There is a plant in the classroom.", answer: true },
              { text: "There are two girls.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦒" }, answer: "giraffe" },
              { pic: { e: "🍪" }, answer: "cookie" },
              { pic: { e: "🚤" }, answer: "boat" },
              { pic: { e: "👖" }, answer: "jeans" },
              { pic: { e: "⭐" }, answer: "star" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Horses",
            text: ["Horses are big, strong {1}. They have got four long legs and a long tail. They can be white, black or {2}.", "Horses can run very {3}. People ride horses on farms and in parks. Horses eat grass and {4}. They sleep standing up! Baby horses can {5} on their first day."],
            bank: [
              { word: "animals", e: "🐴" },
              { word: "brown", e: "🤎" },
              { word: "fast", e: "💨" },
              { word: "apples", e: "🍎" },
              { word: "walk", e: "🚶" },
              { word: "sing", e: "🎤" },
              { word: "sofas", e: "🛋️" },
            ],
            answers: ["animals", "brown", "fast", "apples", "walk"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: { bg: "street", items: [{ e: "🏠", x: 16, y: 38, size: 3.4 }, { e: "👩", x: 38, y: 62, size: 2.6 }, { e: "🐕", x: 50, y: 80 }, { e: "🛵", x: 72, y: 66, size: 2.6 }, { e: "👨", x: 72, y: 52, size: 2.2 }, { e: "🌙", x: 86, y: 12, size: 2 }] },
            items: [
              { question: "What has the man got?", answers: ["motorbike", "a motorbike", "scooter", "a scooter"] },
              { question: "What animal is with the woman?", answers: ["dog", "a dog"] },
              { question: "What is in the sky?", answers: ["moon", "the moon"] },
              { question: "Is it day or night?", answers: ["night"] },
              { question: "What building is next to the woman?", answers: ["house", "a house"] },
            ],
          },
        },
      ],
    },
  ],
};
