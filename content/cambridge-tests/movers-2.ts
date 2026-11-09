import type { CambridgeTest } from "./types";

/** A1 Movers practice test 2. Original Netfener content. */
export const MOVERS_2: CambridgeTest = {
  id: "movers-2",
  level: "movers",
  no: 2,
  title: "A1 Movers · Practice Test 2",
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
              { word: "a map", e: "🗺️" },
              { word: "a parrot", e: "🦜" },
              { word: "a cinema", e: "🎬" },
              { word: "a scarf", e: "🧣" },
              { word: "a river", e: "🏞️" },
              { word: "a bus stop", e: "🚏" },
              { word: "a whale", e: "🐋" },
            ],
            items: [
              { text: "This person helps doctors and looks after people in hospital.", answer: "a nurse" },
              { text: "This bird has got beautiful colours and can learn to say words.", answer: "a parrot" },
              { text: "You can watch films in this place.", answer: "a cinema" },
              { text: "This shows you where places are.", answer: "a map" },
              { text: "This is the biggest animal in the sea.", answer: "a whale" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Mrs Clark", "Peter"],
            items: [
              { line: "Hello, Peter. Why are you late for school today?", options: ["Sorry, I missed the bus.", "I'm nine.", "It's Monday."], answer: 0 },
              { line: "What did you do after that?", options: ["I'm walking.", "I walked here with my dad.", "My dad is a farmer."], answer: 1 },
              { line: "Have you got your homework?", options: ["Yes, here it is.", "It's very hot.", "No, thank you."], answer: 0 },
              { line: "Did you find it difficult?", options: ["It's in my bag.", "A little, but I finished it.", "I don't like apples."], answer: 1 },
              { line: "Good. Now, which book do you need?", options: ["The blue one, please.", "On the table.", "Yes, I do."], answer: 0 },
              { line: "Please sit next to Lucy.", options: ["She's my sister.", "OK. Thank you, Mrs Clark.", "I sit at home."], answer: 1 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "It was Mia's birthday, and her family planned a {1} in the garden. Grandma made a chocolate cake, and Dad put lots of {2} in the trees.",
              "In the afternoon, Mia's friends arrived. They played games and danced to {3}. Then the sky became dark, and it started to {4}! Everyone ran inside the house.",
              "'Oh no!' said Mia. But Grandma laughed and said, 'Let's have the party in the {5}!' They pushed the chairs to the walls and danced again. It was the best birthday ever.",
            ],
            bank: [
              { word: "party", e: "🎉" },
              { word: "balloons", e: "🎈" },
              { word: "music", e: "🎵" },
              { word: "rain", e: "🌧️" },
              { word: "living room", e: "🛋️" },
              { word: "car", e: "🚗" },
              { word: "snow", e: "❄️" },
              { word: "shoes", e: "👟" },
            ],
            answers: ["party", "balloons", "music", "rain", "living room"],
            titleQuestion: { options: ["A party inside the house", "Mia's new bike", "Grandma goes shopping"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Owls",
            text: [
              "Owls are birds that usually sleep in the day and fly {1} night. They have got very big eyes, and they can see well in the dark.",
              "An owl can turn {2} head a long way to look behind it. Owls eat small animals, like mice. They {3} very quietly, so the mice don't hear them.",
              "Many owls live in trees, but some live in old buildings. {4} are about two hundred kinds of owl in the world. The smallest owl is {5} than a pencil!",
            ],
            gaps: [
              { options: ["at", "in", "on"], answer: 0 },
              { options: ["its", "it's", "their"], answer: 0 },
              { options: ["fly", "flies", "flying"], answer: 0 },
              { options: ["There", "They", "Their"], answer: 0 },
              { options: ["shorter", "short", "shortest"], answer: 0 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Fred lives in a flat in the city with his parents. His favourite animals are horses, but he can't have a horse in a flat!",
              "Last summer, Fred's family went to visit his uncle, who has a farm in the mountains. On the first morning, his uncle took him to see a young horse called Star. Star was brown with a white face.",
              "Every day, Fred gave Star some carrots and brushed her hair. At the end of the week, his uncle helped him ride Star around the field. Fred was a bit scared, but Star walked slowly. When they went home, Fred drew a picture of Star and put it on his bedroom wall.",
            ],
            items: [
              { question: "Where does Fred live?", answers: ["in a flat", "in the city", "in a flat in the city", "a flat"] },
              { question: "What are Fred's favourite animals?", answers: ["horses", "horse"] },
              { question: "Who has a farm in the mountains?", answers: ["his uncle", "fred's uncle", "uncle"] },
              { question: "What colour was Star's face?", answers: ["white"] },
              { question: "What did Fred give Star every day?", answers: ["carrots", "some carrots"] },
              { question: "How did Star walk?", answers: ["slowly"] },
              { question: "Where did Fred put his picture?", answers: ["on his bedroom wall", "on the wall", "on his wall", "on the bedroom wall"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Look at the picture. Answer the questions, then write two sentences about the picture.",
            scene: {
              bg: "street",
              items: [
                { e: "🏪", x: 20, y: 32, size: 3.4 },
                { e: "🚌", x: 56, y: 66, size: 3 },
                { e: "👵", x: 84, y: 64, size: 2.4 },
                { e: "🐕", x: 90, y: 80, size: 1.6 },
                { e: "🌧️", x: 70, y: 14, size: 2.2 },
                { e: "☂️", x: 84, y: 46, size: 1.8 },
                { e: "🚲", x: 22, y: 80, size: 1.8 },
              ],
            },
            prompts: ["What is the weather like?", "What is the old woman holding?", "What animal is with the old woman?", "Write one sentence about the bus.", "Write one sentence about the shop."],
            minWords: 20,
            checklist: ["I answered each question with a full sentence.", "I used capital letters and full stops.", "I wrote two new sentences about the picture."],
            sample: "It is raining. The old woman is holding an umbrella. There is a dog next to her. The bus is in the middle of the street. There is a bike in front of the shop.",
          },
        },
      ],
    },
  ],
};
