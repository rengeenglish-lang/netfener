import type { CambridgeTest } from "./types";

/** A1 Movers practice test 1. Original Netfener content. */
export const MOVERS_1: CambridgeTest = {
  id: "movers-1",
  level: "movers",
  no: 1,
  title: "A1 Movers · Practice Test 1",
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
              { word: "a bottle", e: "🍼" },
              { word: "a library", e: "📚" },
              { word: "a farmer", e: "🧑‍🌾" },
              { word: "a jacket", e: "🧥" },
              { word: "a sandwich", e: "🥪" },
              { word: "an island", e: "🏝️" },
              { word: "a kitten", e: "🐈" },
            ],
            items: [
              { text: "This person looks after your teeth.", answer: "a dentist" },
              { text: "You can borrow books from this place.", answer: "a library" },
              { text: "This is land with water all around it.", answer: "an island" },
              { text: "You put this on when it is cold outside.", answer: "a jacket" },
              { text: "This is a young cat.", answer: "a kitten" },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: ["Daisy", "Ben"],
            items: [
              { line: "Hi, Ben! Where are you going?", options: ["To the swimming pool.", "Yes, I am.", "It's my bike."], answer: 0 },
              { line: "Can I come with you?", options: ["It's very big.", "Of course! Bring your towel.", "I swim on Saturdays."], answer: 1 },
              { line: "How do you get there?", options: ["By bus. It's quicker.", "At ten o'clock.", "With my brother."], answer: 0 },
              { line: "What time does the pool close?", options: ["It's next to the park.", "I like the big pool.", "At six o'clock."], answer: 2 },
              { line: "Are you hungry? I've got some apples.", options: ["No, it isn't.", "Yes, please! Thank you.", "I'm eight."], answer: 1 },
              { line: "Let's go! The bus is coming.", options: ["Wait for me!", "I don't like buses.", "It's blue."], answer: 0 },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Last Saturday, Sally and her grandpa went to the {1} to catch fish. They took sandwiches, some juice and a big {2} for the fish.",
              "They sat by the water for two hours, but they didn't catch anything. Sally was {3} and wanted to go home. Then grandpa laughed. 'Look!' he said. A big fish jumped out of the water and fell into Sally's {4}!",
              "Sally was very surprised. They took a photo of the fish and then put it back in the water. 'That was the {5} day!' said Sally.",
            ],
            bank: [
              { word: "lake", e: "🏞️" },
              { word: "bucket", e: "🪣" },
              { word: "bored", e: "😐" },
              { word: "lap", e: "🧒" },
              { word: "best", e: "⭐" },
              { word: "kitchen", e: "🍳" },
              { word: "angry", e: "😠" },
              { word: "cinema", e: "🎬" },
            ],
            answers: ["lake", "bucket", "bored", "lap", "best"],
            titleQuestion: { options: ["A fish for Sally", "Grandpa's new boat", "Lunch at the cinema"], answer: 0 },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Penguins",
            text: [
              "Penguins are birds, but they {1} fly. They live in cold places, and most of them live {2} the ice in the south of the world.",
              "Penguins are very good swimmers. They use {3} wings to swim fast in the sea. They eat fish, and they {4} catch them under the water.",
              "Mother and father penguins both look after {5} babies. They keep the eggs warm on their feet!",
            ],
            gaps: [
              { options: ["can't", "doesn't", "isn't"], answer: 0 },
              { options: ["on", "at", "of"], answer: 0 },
              { options: ["its", "their", "them"], answer: 1 },
              { options: ["can", "is", "has"], answer: 0 },
              { options: ["they", "theirs", "their"], answer: 2 },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Jim lives in a small house near the beach with his mum, his dad and his little sister, Vicky. On Sunday morning, the weather was hot and sunny, so the family went to the beach.",
              "Jim and Vicky built a big sandcastle. Dad went swimming, and Mum read a book under a green umbrella. Then a dog ran onto the beach and jumped on the sandcastle! Vicky started to cry.",
              "The dog's owner, an old man with a hat, said sorry and helped the children build a new castle. It was bigger than the first one. Then everyone ate ice cream.",
            ],
            items: [
              { question: "Where is Jim's house?", answers: ["near the beach", "by the beach", "near beach"] },
              { question: "What was the weather like on Sunday?", answers: ["hot and sunny", "sunny and hot", "sunny", "hot"] },
              { question: "What did the children build?", answers: ["a sandcastle", "a big sandcastle", "sandcastle", "a castle"] },
              { question: "Where did Mum read her book?", answers: ["under a green umbrella", "under an umbrella", "under the umbrella", "under a umbrella"] },
              { question: "What jumped on the sandcastle?", answers: ["a dog", "dog", "the dog"] },
              { question: "Who helped the children?", answers: ["an old man", "the old man", "the dog's owner", "old man"] },
              { question: "What did everyone eat at the end?", answers: ["ice cream", "ice creams", "an ice cream"] },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Look at the picture. Answer the questions, then write two sentences about the picture.",
            scene: {
              bg: "classroom",
              items: [
                { e: "👩‍🏫", x: 18, y: 44, size: 3 },
                { e: "🧒", x: 50, y: 70, size: 2.4 },
                { e: "👧", x: 70, y: 70, size: 2.4 },
                { e: "🐠", x: 86, y: 40 },
                { e: "🌍", x: 40, y: 28 },
                { e: "✏️", x: 60, y: 84, size: 1.4 },
                { e: "📖", x: 52, y: 86, size: 1.4 },
              ],
            },
            prompts: ["Where are the children?", "Who is standing at the front?", "What is in the tank?", "Write one sentence about the girl.", "Write one sentence about the picture on the wall."],
            minWords: 20,
            checklist: ["I answered each question with a full sentence.", "I started each sentence with a capital letter and ended with a full stop.", "I wrote two new sentences about the picture."],
            sample: "The children are in the classroom. The teacher is standing at the front. There is a fish in the tank. The girl is reading a book. There is a picture of the world on the wall.",
          },
        },
      ],
    },
  ],
};
