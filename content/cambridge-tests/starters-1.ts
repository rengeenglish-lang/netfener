import type { CambridgeTest } from "./types";
import { STARTERS_LISTENING } from "./starters-listening";

/** Pre A1 Starters practice test 1. Original Netfener content. */
export const STARTERS_1: CambridgeTest = {
  id: "starters-1",
  level: "starters",
  no: 1,
  title: "Pre A1 Starters · Practice Test 1",
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
              { pic: { e: "🐱" }, text: "This is a cat.", answer: true },
              { pic: { e: "🍌" }, text: "This is an apple.", answer: false },
              { pic: { e: "⚽" }, text: "This is a ball.", answer: true },
              { pic: { e: "🐟" }, text: "This is a bird.", answer: false },
              { pic: { e: "🚗" }, text: "This is a car.", answer: true },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "scene-yesno",
            instruction: "Look at the picture and read. Write yes or no.",
            scene: {
              bg: "park",
              items: [
                { e: "🌳", x: 14, y: 30, size: 3.4 },
                { e: "🌳", x: 86, y: 28, size: 3.4 },
                { e: "☀️", x: 50, y: 10, size: 2.4 },
                { e: "🐕", x: 30, y: 72 },
                { e: "👧", x: 52, y: 66, size: 2.6 },
                { e: "🎈", x: 58, y: 40 },
                { e: "🦆", x: 76, y: 78 },
                { e: "🦆", x: 86, y: 80 },
                { e: "🦆", x: 66, y: 82 },
              ],
            },
            items: [
              { text: "There are two trees in the park.", answer: true },
              { text: "The sun is under a tree.", answer: false },
              { text: "There are three ducks.", answer: true },
              { text: "The girl has got a balloon.", answer: true },
              { text: "There is a cat next to the girl.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐸" }, answer: "frog" },
              { pic: { e: "🍕" }, answer: "pizza" },
              { pic: { e: "🦒" }, answer: "giraffe" },
              { pic: { e: "🪑" }, answer: "chair" },
              { pic: { e: "🍊" }, answer: "orange" },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "word-bank",
            instruction: "Read the text. Choose a word from the box. Write the correct word next to numbers 1–5.",
            title: "Monkeys",
            text: [
              "Monkeys live in {1} in hot countries. They have got two arms, two legs and a long {2}. They love climbing and they can jump from tree to tree.",
              "Monkeys eat fruit, like {3} and mangoes. They sometimes eat flowers and {4} too. Baby monkeys sit on their mother's {5} when she climbs.",
            ],
            bank: [
              { word: "trees", e: "🌳" },
              { word: "tail", e: "🐒" },
              { word: "bananas", e: "🍌" },
              { word: "eggs", e: "🥚" },
              { word: "back", e: "🧍" },
              { word: "shoes", e: "👟" },
              { word: "fish", e: "🐟" },
            ],
            answers: ["trees", "tail", "bananas", "eggs", "back"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "kitchen",
              items: [
                { e: "👩", x: 22, y: 50, size: 3 },
                { e: "👦", x: 72, y: 56, size: 2.6 },
                { e: "🍰", x: 48, y: 62 },
                { e: "🕯️", x: 44, y: 46, size: 1.4 },
                { e: "🕯️", x: 50, y: 46, size: 1.4 },
                { e: "🕯️", x: 56, y: 46, size: 1.4 },
                { e: "🍎", x: 80, y: 82, size: 1.6 },
                { e: "🍎", x: 86, y: 82, size: 1.6 },
                { e: "🐈", x: 14, y: 84 },
              ],
            },
            items: [
              { question: "What is in the middle of the picture?", answers: ["cake", "a cake"] },
              { question: "How many candles are there?", answers: ["three", "3"] },
              { question: "What animal is on the floor?", answers: ["cat", "a cat"] },
              { question: "What fruit can you see?", answers: ["apples", "apple", "an apple"] },
              { question: "Who is next to the cat: the mother or the boy?", answers: ["mother", "the mother", "mum", "the mum"] },
            ],
          },
        },
      ],
    },
    STARTERS_LISTENING[0],
  ],
};
