import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 9 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_9: CambridgeTest = {
  id: "starters-9",
  level: "starters",
  no: 9,
  title: "Pre A1 Starters · Practice Test 9",
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
              { pic: { e: "🐯" }, text: "This is a tiger.", answer: true },
              { pic: { e: "🥭" }, text: "This is a mango.", answer: true },
              { pic: { e: "🚁" }, text: "This is a train.", answer: false },
              { pic: { e: "🐙" }, text: "This is a spider.", answer: false },
              { pic: { e: "📕" }, text: "This is a book.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "kitchen",
              items: [
                { e: "👨", x: 24, y: 50, size: 3 },
                { e: "🍳", x: 44, y: 60, size: 2 },
                { e: "👦", x: 68, y: 60, size: 2.4 },
                { e: "🥛", x: 76, y: 74, size: 1.6 },
                { e: "🍌", x: 54, y: 78, size: 1.6 },
                { e: "🍌", x: 60, y: 78, size: 1.6 },
                { e: "🐈", x: 86, y: 86 },
              ],
            },
            items: [
              { text: "The father is cooking.", answer: true },
              { text: "There are three bananas on the table.", answer: false },
              { text: "The boy has got a glass of milk.", answer: true },
              { text: "There is a cat in the kitchen.", answer: true },
              { text: "The boy is cooking eggs.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🦆" }, answer: "duck" },
              { pic: { e: "🍐" }, answer: "pear" },
              { pic: { e: "🧢" }, answer: "cap" },
              { pic: { e: "🐐" }, answer: "goat" },
              { pic: { e: "🪁" }, answer: "kite" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Spiders",
            text: [
              "Spiders are small animals. They have got eight {1}. Some spiders are very small, but some are big and {2}.",
              "Spiders make webs. They catch {3} in their webs and eat them. You can find spiders in the garden, in trees and sometimes in your {4}! A lot of people are {5} of spiders.",
            ],
            bank: [
              { word: "legs", e: "🦵" },
              { word: "black", e: "🖤" },
              { word: "flies", e: "🪰" },
              { word: "house", e: "🏠" },
              { word: "afraid", e: "😨" },
              { word: "happy", e: "😀" },
              { word: "apples", e: "🍎" },
            ],
            answers: ["legs", "black", "flies", "house", "afraid"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "park",
              items: [
                { e: "👧", x: 30, y: 64, size: 2.6 },
                { e: "🪁", x: 40, y: 24, size: 2 },
                { e: "👦", x: 64, y: 66, size: 2.6 },
                { e: "⚽", x: 72, y: 82 },
                { e: "🌳", x: 88, y: 34, size: 3.4 },
                { e: "🐦", x: 86, y: 20, size: 1.4 },
                { e: "🐦", x: 92, y: 22, size: 1.4 },
              ],
            },
            items: [
              { question: "What has the girl got?", answers: ["kite", "a kite"] },
              { question: "What is the boy playing with?", answers: ["ball", "a ball", "football", "a football"] },
              { question: "How many birds are in the tree?", answers: ["two", "2"] },
              { question: "Where are the children?", answers: ["park", "in the park", "in a park"] },
              { question: "Is the kite in the sky or on the grass?", answers: ["sky", "in the sky", "the sky"] },
            ],
          },
        },
      ],
    },
  ],
};
