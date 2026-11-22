import type { CambridgeTest } from "./types";

/** Pre A1 Starters practice test 6 (Reading & Writing). Original Netfener content. Listening is added later. */
export const STARTERS_6: CambridgeTest = {
  id: "starters-6",
  level: "starters",
  no: 6,
  title: "Pre A1 Starters · Practice Test 6",
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
              { pic: { e: "🍇" }, text: "These are lemons.", answer: false },
              { pic: { e: "🚲" }, text: "This is a bike.", answer: true },
              { pic: { e: "🐔" }, text: "This is a duck.", answer: false },
              { pic: { e: "👟" }, text: "These are shoes.", answer: true },
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
                { e: "☀️", x: 82, y: 12, size: 2.4 },
                { e: "⛱️", x: 24, y: 50, size: 3 },
                { e: "👦", x: 40, y: 66, size: 2.6 },
                { e: "🏐", x: 52, y: 72 },
                { e: "🦀", x: 70, y: 84 },
                { e: "🦀", x: 78, y: 86 },
                { e: "⛵", x: 64, y: 30, size: 2.2 },
              ],
            },
            items: [
              { text: "There is a boat on the sea.", answer: true },
              { text: "The boy has got a kite.", answer: false },
              { text: "There are two crabs on the sand.", answer: true },
              { text: "The sun is in the sky.", answer: true },
              { text: "There are three umbrellas.", answer: false },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "spell",
            instruction: "Look at the pictures. Write the words. Use the letters to help you.",
            items: [
              { pic: { e: "🐴" }, answer: "horse" },
              { pic: { e: "🍞" }, answer: "bread" },
              { pic: { e: "🛏️" }, answer: "bed" },
              { pic: { e: "🐍" }, answer: "snake" },
              { pic: { e: "🥕" }, answer: "carrot" },
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
              "Ducks are birds. They have got two legs and two {1}. They can swim, walk and fly. Ducks like living near water, in parks or on a {2}.",
              "Ducks eat plants, small fish and {3}. Mother ducks have got lots of baby ducks. The babies are small and {4}. They walk behind their mother in a long {5}.",
            ],
            bank: [
              { word: "wings", e: "🪽" },
              { word: "lake", e: "🏞️" },
              { word: "bread", e: "🍞" },
              { word: "yellow", e: "💛" },
              { word: "line", e: "➖" },
              { word: "chairs", e: "🪑" },
              { word: "phones", e: "📱" },
            ],
            answers: ["wings", "lake", "bread", "yellow", "line"],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Look at the picture and read the questions. Write one-word answers.",
            scene: {
              bg: "garden",
              items: [
                { e: "👨", x: 22, y: 50, size: 3 },
                { e: "👧", x: 66, y: 58, size: 2.6 },
                { e: "🌻", x: 44, y: 70 },
                { e: "🌻", x: 50, y: 72 },
                { e: "🌻", x: 56, y: 70 },
                { e: "🐶", x: 80, y: 80 },
                { e: "🦋", x: 48, y: 30, size: 1.6 },
              ],
            },
            items: [
              { question: "How many flowers are there?", answers: ["three", "3"] },
              { question: "What animal is next to the girl?", answers: ["dog", "a dog"] },
              { question: "What is flying over the flowers?", answers: ["butterfly", "a butterfly"] },
              { question: "Who is on the left: the father or the girl?", answers: ["father", "the father", "dad", "the dad"] },
              { question: "Where are they?", answers: ["garden", "in the garden", "in a garden"] },
            ],
          },
        },
      ],
    },
  ],
};
