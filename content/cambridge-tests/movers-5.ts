import type { CambridgeTest } from "./types";

/** A1 Movers practice test 5. Original Netfener content. */
export const MOVERS_5: CambridgeTest = {
  id: "movers-5",
  level: "movers",
  no: 5,
  title: "A1 Movers · Practice Test 5",
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
              { word: "a nurse", e: "🧑‍⚕️" },
              { word: "a whale", e: "🐋" },
              { word: "a cinema", e: "🎬" },
              { word: "a key", e: "🔑" },
              { word: "a cook", e: "🧑‍🍳" },
              { word: "a parrot", e: "🦜" },
              { word: "a bridge", e: "🌉" },
              { word: "a sweater", e: "🧶" },
            ],
            items: [
              { text: "This person helps the doctor in a hospital.", answer: "a nurse" },
              { text: "This is the biggest animal in the sea.", answer: "a whale" },
              { text: "You go here to watch a film on a big screen.", answer: "a cinema" },
              { text: "You need this to open a door.", answer: "a key" },
              { text: "This bird has lots of colours and it can talk.", answer: "a parrot" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Mrs Brown", "Sam"],
            items: [
              { line: "Hello, Sam. Where are you going?", options: ["To the library.", "Yes, I am.", "On Tuesday."], answer: 0 },
              { line: "What do you want to read?", options: ["A book about space.", "I can read.", "It's a big library."], answer: 0 },
              { line: "Do you often go to the library?", options: ["Yes, every Saturday.", "It's next to the park.", "I went yesterday morning to the shops."], answer: 0 },
              { line: "Who are you going with?", options: ["By bike.", "With my cousin, Lucy.", "At ten o'clock."], answer: 1 },
              { line: "That's nice. What's your favourite book?", options: ["It's about pirates on an island.", "It's on the table.", "I don't like it."], answer: 0 },
              { line: "Have a good time!", options: ["Thank you. Goodbye!", "Yes, it's good.", "I'm fine."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Anna has a little brown {1} called Coco. Coco lives in a cage in Anna's bedroom and loves eating carrots.",
              "One morning, Anna opened the cage to give Coco some food, but Coco wasn't there! Anna looked under the {2} and behind the cupboard, but she couldn't find him.",
              "Then Anna heard a noise in the {3}. She ran downstairs. Coco was sitting next to the fridge, eating a big {4}! Anna laughed and picked him up. 'You're very {5}, Coco!' she said.",
            ],
            bank: [
              { word: "rabbit", e: "🐇" },
              { word: "bed", e: "🛏️" },
              { word: "kitchen", e: "🍽️" },
              { word: "carrot", e: "🥕" },
              { word: "clever", e: "💡" },
              { word: "garden", e: "🌻" },
              { word: "fish", e: "🐟" },
              { word: "sad", e: "😢" },
            ],
            answers: ["rabbit", "bed", "kitchen", "carrot", "clever"],
            titleQuestion: { options: ["Where is Coco?", "Anna's new bedroom", "A trip to the farm"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Giraffes",
            text: [
              "Giraffes are the {1} animals in the world. They live in Africa and they have very long necks and legs.",
              "Giraffes eat leaves from tall trees. They {2} need to drink a lot of water, because they get water from the leaves.",
              "A baby giraffe is very tall too. It can walk {3} it is only one hour old! Giraffes sleep for only a short time every day, and they often sleep standing {4}.",
              "Giraffes have got long, dark tongues. They use {5} to take leaves from the trees.",
            ],
            gaps: [
              { options: ["tallest", "taller", "tall"], answer: 0 },
              { options: ["don't", "doesn't", "aren't"], answer: 0 },
              { options: ["when", "what", "where"], answer: 0 },
              { options: ["up", "on", "in"], answer: 0 },
              { options: ["them", "it", "they"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Nick and his sister Jane went to the farm with their aunt in the holidays. They travelled there by car. The farm was big, and there were lots of animals.",
              "In the morning, Jane helped their aunt with the cows. Nick fed the chickens and found six eggs. In the afternoon, they rode horses in the field.",
              "In the evening, their aunt cooked dinner, and the children made a fruit salad. Nick's favourite animal on the farm was a small black goat.",
            ],
            items: [
              { question: "Who did Nick and Jane go to the farm with?", answers: ["their aunt", "aunt", "with their aunt"] },
              { question: "How did they travel to the farm?", answers: ["by car", "car"] },
              { question: "Which animals did Jane help with?", answers: ["the cows", "cows"] },
              { question: "How many eggs did Nick find?", answers: ["six", "6", "six eggs", "6 eggs"] },
              { question: "Where did they ride horses?", answers: ["in the field", "the field", "field"] },
              { question: "What did the children make?", answers: ["a fruit salad", "fruit salad"] },
              { question: "What was Nick's favourite animal?", answers: ["a small black goat", "a goat", "goat", "the goat", "a black goat"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Look at the picture. Answer the questions, then write two sentences about the picture.",
            scene: {
              bg: "park",
              items: [
                { e: "👧", x: 26, y: 70, size: 2.4 },
                { e: "🚲", x: 38, y: 78, size: 2.2 },
                { e: "👴", x: 66, y: 62, size: 2.6 },
                { e: "🐕", x: 76, y: 80, size: 1.8 },
                { e: "🌳", x: 88, y: 32, size: 3 },
                { e: "🌈", x: 34, y: 16, size: 2.4 },
              ],
            },
            prompts: ["Where are the people?", "What has the girl got?", "Who is with the dog?", "Write one sentence about the sky.", "Write one sentence about the tree."],
            minWords: 20,
            checklist: ["I answered each question with a full sentence.", "I used capital letters and full stops.", "I wrote two new sentences about the picture."],
            sample: "The people are in the park. The girl has got a bike. The grandfather is with the dog. There is a rainbow in the sky. The tree is very big and green.",
          },
        },
      ],
    },
  ],
};
