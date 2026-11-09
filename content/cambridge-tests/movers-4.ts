import type { CambridgeTest } from "./types";

/** A1 Movers practice test 4. Original Netfener content. */
export const MOVERS_4: CambridgeTest = {
  id: "movers-4",
  level: "movers",
  no: 4,
  title: "A1 Movers · Practice Test 4",
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
              { word: "a dentist", e: "🦷" },
              { word: "a kangaroo", e: "🦘" },
              { word: "a blanket", e: "🛏️" },
              { word: "a bottle", e: "🍼" },
              { word: "a farmer", e: "🧑‍🌾" },
              { word: "a map", e: "🗺️" },
              { word: "a dolphin", e: "🐬" },
              { word: "a scarf", e: "🧣" },
            ],
            items: [
              { text: "This person looks after your teeth.", answer: "a dentist" },
              { text: "This animal jumps and carries its baby in a pocket.", answer: "a kangaroo" },
              { text: "You put this on your bed to keep warm at night.", answer: "a blanket" },
              { text: "This person works outside and has cows, sheep and chickens.", answer: "a farmer" },
              { text: "You wear this around your neck when it is cold.", answer: "a scarf" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Dad", "Mia"],
            items: [
              { line: "Mia, how was school today?", options: ["It was great, thanks!", "I go by bus.", "It's on Monday."], answer: 0 },
              { line: "What did you do in your art lesson?", options: ["We painted pictures of animals.", "My teacher is Mrs Green.", "I like art."], answer: 0 },
              { line: "Which animal did you paint?", options: ["It's blue.", "A big orange tiger.", "Yes, I did."], answer: 1 },
              { line: "Can I see it?", options: ["It's in my bag. I'll get it.", "I can see you.", "No, it's a tiger."], answer: 0 },
              { line: "Wow, that's beautiful! Shall we put it on the wall?", options: ["The wall is white.", "Yes, please! In the kitchen.", "I painted it yesterday."], answer: 1 },
              { line: "Are you hungry?", options: ["Yes, can I have an apple?", "I'm nine.", "It's hungry."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "It was Saturday, and Ben's family went to the {1} to have a picnic. Ben's sister, Kim, took her new red kite.",
              "There was a lot of wind, and the kite flew very high. But then the string broke, and the kite flew away! It landed at the top of a tall {2}.",
              "Kim started to {3}. Ben wanted to help, so he asked a man who was working in the park. The man had a long {4}. He climbed up and got the kite. Kim was very {5} and said 'Thank you!'",
            ],
            bank: [
              { word: "park", e: "🏞️" },
              { word: "tree", e: "🌳" },
              { word: "cry", e: "😢" },
              { word: "ladder", e: "🪜" },
              { word: "happy", e: "😊" },
              { word: "bus", e: "🚌" },
              { word: "sleep", e: "😴" },
              { word: "river", e: "🌊" },
            ],
            answers: ["park", "tree", "cry", "ladder", "happy"],
            titleQuestion: { options: ["The kite in the tree", "Ben's new bike", "A rainy Saturday"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Penguins",
            text: [
              "Penguins are birds, but they {1} fly. They live in cold places, and some live on the ice in the south of the world.",
              "Penguins are very good swimmers. They use {2} wings to swim fast under the water. They eat fish, and they can stay under water {3} a long time.",
              "Mother penguins lay one egg. The father keeps the egg warm on {4} feet. Baby penguins have grey feathers, and they are very {5} and soft.",
            ],
            gaps: [
              { options: ["can't", "don't", "aren't"], answer: 0 },
              { options: ["their", "they", "them"], answer: 0 },
              { options: ["for", "at", "since"], answer: 0 },
              { options: ["his", "her", "its"], answer: 0 },
              { options: ["fat", "fast", "tall"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Jim lives in a flat with his mum and his grandpa. Every Sunday, Jim and his grandpa go to the swimming pool. Grandpa is a very good swimmer.",
              "Last Sunday, the swimming pool was closed, so they went to the river instead. They took some bread and gave it to the ducks. Then they sat on a bench and ate sandwiches.",
              "On the way home, it started to snow! Jim and his grandpa made a snowman in front of their building. Jim gave it his hat and grandpa gave it his glasses.",
            ],
            items: [
              { question: "Who does Jim live with?", answers: ["his mum and his grandpa", "his mum and grandpa", "mum and grandpa"] },
              { question: "Where do Jim and his grandpa go every Sunday?", answers: ["the swimming pool", "to the swimming pool", "swimming pool"] },
              { question: "Where did they go last Sunday?", answers: ["the river", "to the river", "river"] },
              { question: "What did they give the ducks?", answers: ["bread", "some bread"] },
              { question: "What did they eat on the bench?", answers: ["sandwiches", "some sandwiches"] },
              { question: "What did they make?", answers: ["a snowman", "snowman"] },
              { question: "What did grandpa give the snowman?", answers: ["his glasses", "glasses"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Look at the picture. Answer the questions, then write two sentences about the picture.",
            scene: {
              bg: "kitchen",
              items: [
                { e: "👩", x: 24, y: 56, size: 2.8 },
                { e: "👦", x: 46, y: 66, size: 2.4 },
                { e: "🎂", x: 60, y: 74, size: 2 },
                { e: "🐕", x: 82, y: 84, size: 1.8 },
                { e: "🍳", x: 30, y: 80, size: 1.6 },
                { e: "🪟", x: 74, y: 24, size: 2.4 },
              ],
            },
            prompts: ["Where are the mother and the boy?", "What is on the table?", "What animal can you see?", "Write one sentence about the boy.", "Write one sentence about the window."],
            minWords: 20,
            checklist: ["I answered each question with a full sentence.", "I used capital letters and full stops.", "I wrote two new sentences about the picture."],
            sample: "They are in the kitchen. There is a birthday cake on the table. I can see a dog. The boy is happy because it is his birthday. The window is big.",
          },
        },
      ],
    },
  ],
};
