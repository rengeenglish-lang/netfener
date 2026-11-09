import type { CambridgeTest } from "./types";

/** A1 Movers practice test 3. Original Netfener content. */
export const MOVERS_3: CambridgeTest = {
  id: "movers-3",
  level: "movers",
  no: 3,
  title: "A1 Movers · Practice Test 3",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 30,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "definitions",
            instruction: "Look and read. Choose the correct word for each sentence.",
            bank: [
              { word: "a pirate", e: "🏴‍☠️" },
              { word: "a towel", e: "🛁" },
              { word: "a waterfall", e: "💦" },
              { word: "a clown", e: "🤡" },
              { word: "a ticket", e: "🎟️" },
              { word: "a basket", e: "🧺" },
              { word: "a bat", e: "🦇" },
              { word: "a pharmacy", e: "💊" },
            ],
            items: [
              { text: "This person wears funny clothes and makes people laugh at the circus.", answer: "a clown" },
              { text: "You need this to get on a train or go into a cinema.", answer: "a ticket" },
              { text: "This animal flies at night and sleeps upside down.", answer: "a bat" },
              { text: "Water falls from the top of a hill or mountain here.", answer: "a waterfall" },
              { text: "This person sails on the sea and looks for treasure.", answer: "a pirate" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Grandma", "Alex"],
            items: [
              { line: "Alex, what would you like to do today?", options: ["Can we go to the zoo?", "I'm ten today.", "It was great."], answer: 0 },
              { line: "Which animals do you want to see?", options: ["The monkeys and the penguins!", "Yes, I want to.", "At the zoo."], answer: 0 },
              { line: "Shall we take a picnic?", options: ["It's a big picnic.", "Good idea! I'll make the sandwiches.", "I had lunch yesterday."], answer: 1 },
              { line: "Do you want cheese or egg in your sandwich?", options: ["Cheese, please.", "In my bag.", "I don't like the zoo."], answer: 0 },
              { line: "Don't forget your jacket. It's cold today.", options: ["It's my jacket.", "OK, I'll get it now.", "It's sunny tomorrow."], answer: 1 },
              { line: "Are you ready?", options: ["Yes, let's go!", "I'm Alex.", "It's ready yesterday."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Paul lives near the sea. One windy morning, he went down to the {1} with his little dog, Spot. They ran along the sand and looked for shells.",
              "Suddenly, Spot started to bark at something in the water. It was a small {2}! It couldn't swim back to the sea because it was {3} in a fishing net.",
              "Paul called his mum, and she phoned a man from the animal hospital. The man came quickly and cut the {4}. The seal swam away happily. 'Spot is a {5}!' said Paul's mum.",
            ],
            bank: [
              { word: "beach", e: "🏖️" },
              { word: "seal", e: "🦭" },
              { word: "stuck", e: "🕸️" },
              { word: "net", e: "🥅" },
              { word: "hero", e: "🦸" },
              { word: "mountain", e: "⛰️" },
              { word: "hungry", e: "🍽️" },
              { word: "tree", e: "🌳" },
            ],
            answers: ["beach", "seal", "stuck", "net", "hero"],
            titleQuestion: { options: ["Spot helps a seal", "Paul goes fishing", "A day at the mountain"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Bees",
            text: [
              "Bees are small insects that live together in big groups. A group of bees lives {1} a hive. There is one queen bee, and she is {2} biggest bee in the hive.",
              "Bees fly from flower to flower {3} collect food. They make honey, and people love {4} it on bread. Bees are very important, because they help plants and fruit grow.",
              "Bees can see colours, and they like blue and yellow flowers. When a bee finds good flowers, it does a special dance to tell {5} other bees where they are!",
            ],
            gaps: [
              { options: ["in", "on", "at"], answer: 0 },
              { options: ["the", "a", "an"], answer: 0 },
              { options: ["to", "for", "of"], answer: 0 },
              { options: ["eating", "eat", "ate"], answer: 0 },
              { options: ["the", "them", "their"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Lily's class went on a school trip to a museum in the city. They travelled there by train. Lily sat next to her best friend, Sara, and they played games on the journey.",
              "In the museum, there were dinosaur bones and old cars, but Lily liked the room with the planets best. A teacher told them that Jupiter is the biggest planet.",
              "At lunchtime, the children ate their sandwiches in the museum garden. Then it started to rain, so they went back inside and drew pictures. Lily drew a rocket. When she got home, she showed the picture to her brother.",
            ],
            items: [
              { question: "Where did Lily's class go?", answers: ["to a museum", "a museum", "museum", "to the museum"] },
              { question: "How did they travel there?", answers: ["by train", "train"] },
              { question: "Who did Lily sit next to?", answers: ["sara", "her best friend", "her best friend sara"] },
              { question: "Which room did Lily like best?", answers: ["the room with the planets", "the planets room", "the planet room", "the planets"] },
              { question: "Where did the children eat lunch?", answers: ["in the museum garden", "in the garden", "the museum garden"] },
              { question: "What did Lily draw?", answers: ["a rocket", "rocket"] },
              { question: "Who did she show her picture to?", answers: ["her brother", "brother"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Look at the picture. Answer the questions, then write two sentences about the picture.",
            scene: {
              bg: "beach",
              items: [
                { e: "👨‍👩‍👧", x: 30, y: 78, size: 2.8 },
                { e: "⛱️", x: 18, y: 72, size: 2.4 },
                { e: "🏄", x: 62, y: 50, size: 2.2 },
                { e: "🐬", x: 82, y: 50, size: 2 },
                { e: "🍉", x: 46, y: 88, size: 1.6 },
                { e: "☀️", x: 86, y: 14, size: 2.2 },
              ],
            },
            prompts: ["Where is the family?", "What is the man in the sea doing?", "What animal can you see in the water?", "Write one sentence about the food.", "Write one sentence about the weather."],
            minWords: 20,
            checklist: ["I answered each question with a full sentence.", "I used capital letters and full stops.", "I wrote two new sentences about the picture."],
            sample: "The family is at the beach. The man in the sea is surfing. There is a dolphin in the water. They are eating watermelon. It is hot and sunny.",
          },
        },
      ],
    },
  ],
};
