import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 18 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_18: CambridgeTest = {
  id: "flyers-18",
  level: "flyers",
  no: 18,
  title: "A2 Flyers · Practice Test 18",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 40,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "definitions",
            instruction: "Look and read. Choose the correct word for each sentence. There are some extra words.",
            bank: [
              {
                word: "a builder",
                e: "👷",
              },
              {
                word: "a pocket",
                e: "👖",
              },
              {
                word: "a fountain",
                e: "⛲",
              },
              {
                word: "a label",
                e: "🏷️",
              },
              {
                word: "a printer",
                e: "🖨️",
              },
              {
                word: "a lifeguard",
                e: "🛟",
              },
              {
                word: "a field",
                e: "🌾",
              },
              {
                word: "a radiator",
                e: "🔥",
              },
              {
                word: "a guidebook",
                e: "📘",
              },
              {
                word: "a moon",
                e: "🌙",
              },
              {
                word: "a gym",
                e: "🏋️",
              },
              {
                word: "a mug",
                e: "☕",
              },
              {
                word: "a jellyfish",
                e: "🪼",
              },
              {
                word: "a scarf",
                e: "🧣",
              },
            ],
            items: [
              {
                text: "This person makes houses and walls.",
                answer: "a builder",
              },
              {
                text: "You can keep small things in this part of your jacket.",
                answer: "a pocket",
              },
              {
                text: "Water comes out of this in a square or a park.",
                answer: "a fountain",
              },
              {
                text: "This small piece of paper tells you the price or the size of something.",
                answer: "a label",
              },
              {
                text: "This machine puts words and pictures from your computer onto paper.",
                answer: "a printer",
              },
              {
                text: "This person watches swimmers and helps them if they are in danger.",
                answer: "a lifeguard",
              },
              {
                text: "Farmers grow plants in this.",
                answer: "a field",
              },
              {
                text: "Tourists read this book to find out about a city.",
                answer: "a guidebook",
              },
              {
                text: "People go to this place to do exercise.",
                answer: "a gym",
              },
              {
                text: "This sea animal has a soft body and can sting you.",
                answer: "a jellyfish",
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "dialogue",
            instruction: "Read the conversation and choose the best answer.",
            speakers: [
              "Oliver",
              "Mrs Taylor",
            ],
            items: [
              {
                line: "Mrs Taylor, I've lost my homework.",
                options: [
                  "Oh dear. Where did you last see it?",
                  "I found it.",
                  "It's homework.",
                ],
                answer: 0,
              },
              {
                line: "I think I left it on the bus.",
                options: [
                  "I took the bus.",
                  "It's a big bus.",
                  "Did you call the bus company?",
                ],
                answer: 2,
              },
              {
                line: "Not yet. I'll call them after school.",
                options: [
                  "I'll call you.",
                  "Good idea. Can you bring it on Thursday?",
                  "After school is good.",
                ],
                answer: 1,
              },
              {
                line: "Yes, and if they don't find it, I'll do it again.",
                options: [
                  "I did it.",
                  "That's very sensible, Oliver.",
                  "They found it.",
                ],
                answer: 1,
              },
              {
                line: "Thank you for understanding.",
                options: [
                  "I understand it.",
                  "Thank you.",
                  "That's OK. These things happen.",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "word-bank",
            instruction: "Read the story. Choose a word from the box. Then choose the best name for the story.",
            text: [
              "Every Saturday, Mia goes to the {1} with her grandfather. They buy fresh fruit and vegetables there.",
              "Last Saturday, Mia saw a woman selling beautiful handmade {2}. They were made of wood and painted in bright colours. Mia wanted to buy one for her mother's birthday, but she didn't have enough {3}.",
              "The woman saw that Mia was disappointed. 'You can help me at my stall today,' she said. 'Then you can choose one for {4}.' Mia worked all morning. She chose a blue box with yellow flowers. Her mother {5} it!",
            ],
            bank: [
              {
                word: "market",
                e: "🛒",
              },
              {
                word: "boxes",
                e: "📦",
              },
              {
                word: "money",
                e: "💰",
              },
              {
                word: "free",
                e: "🆓",
              },
              {
                word: "loved",
                e: "❤️",
              },
              {
                word: "library",
                e: "📚",
              },
              {
                word: "hats",
                e: "🎩",
              },
              {
                word: "time",
                e: "⏰",
              },
            ],
            answers: [
              "market",
              "boxes",
              "money",
              "free",
              "loved",
            ],
            titleQuestion: {
              options: [
                "A day at the library",
                "Mia's present for Mum",
                "Grandpa buys a hat",
              ],
              answer: 1,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Trees",
            text: [
              "Trees are the oldest living things {1} Earth. Some trees in California are more than four thousand years old!",
              "Trees are very important for people and animals. They give us wood, fruit and nuts. They also make the oxygen {2} we breathe. Birds and insects live in their branches, {3} many animals eat their leaves.",
              "Trees can also help us {4} hot weather. On a sunny day, it's much cooler under a tree. In cities, trees make the air cleaner and stop {5} getting too hot.",
              "How do we know how old a tree is? When you cut a tree down, you can see rings {6} the trunk. Each ring shows one year, so if you count the rings, you know {7} age.",
              "The tallest tree in the world is about 116 metres high. That's {8} than a thirty-floor building! Sadly, people cut down millions of trees every year. We should plant more trees to {9} our planet. Why don't you plant a tree in your garden? It will {10} for years and years.",
            ],
            gaps: [
              {
                options: [
                  "in",
                  "on",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "who",
                  "what",
                  "that",
                ],
                answer: 2,
              },
              {
                options: [
                  "and",
                  "but",
                  "or",
                ],
                answer: 0,
              },
              {
                options: [
                  "on",
                  "in",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "cities",
                  "city",
                  "city's",
                ],
                answer: 0,
              },
              {
                options: [
                  "outside",
                  "under",
                  "inside",
                ],
                answer: 2,
              },
              {
                options: [
                  "their",
                  "it's",
                  "its",
                ],
                answer: 2,
              },
              {
                options: [
                  "taller",
                  "tall",
                  "tallest",
                ],
                answer: 0,
              },
              {
                options: [
                  "protects",
                  "protect",
                  "protecting",
                ],
                answer: 1,
              },
              {
                options: [
                  "grow",
                  "grows",
                  "growing",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "short-answer",
            instruction: "Read the story. Complete the sentences. Write 1, 2, 3 or 4 words.",
            text: [
              "Every summer, Jack's family goes to stay in a small cottage by a lake in Scotland. The cottage belongs to Jack's uncle.",
              "This year, Jack learned to swim in the lake. The water was very cold, but Jack didn't mind. His uncle taught him how to catch fish with a net. On Wednesday, they caught six fish and cooked them on a fire.",
              "On the last night, Jack saw strange green lights in the sky. His uncle said they were the Northern Lights. Jack took lots of photos. He showed them to his class when he went back to school.",
            ],
            items: [
              {
                question: "Jack's family stays in a small cottage ______.",
                answers: [
                  "by a lake",
                  "by a lake in scotland",
                  "in scotland",
                ],
              },
              {
                question: "The cottage belongs to ______.",
                answers: [
                  "jack's uncle",
                  "his uncle",
                ],
              },
              {
                question: "This year, Jack learned to ______.",
                answers: [
                  "swim",
                  "swim in the lake",
                ],
              },
              {
                question: "Jack's uncle taught him how to catch fish ______.",
                answers: [
                  "with a net",
                ],
              },
              {
                question: "On Wednesday, they caught ______.",
                answers: [
                  "six fish",
                  "6 fish",
                ],
              },
              {
                question: "They cooked the fish ______.",
                answers: [
                  "on a fire",
                ],
              },
              {
                question: "On the last night, Jack saw ______ in the sky.",
                answers: [
                  "strange green lights",
                  "green lights",
                  "the northern lights",
                ],
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "Read the text and write the missing words. Write one word on each line.",
            title: "Our new classroom",
            text: [
              "This year, we moved into a new classroom. It's much bigger {1} our old one, and it has big windows. There are lots of plants {2} the windows. We have a reading corner with soft cushions and hundreds {3} books. There's also a big screen on the wall. Our teacher uses it to show us videos. My favourite thing is the fish tank. There are ten fish in it and we take turns {4} feed them. I really enjoy {5} to school now!",
            ],
            answers: [
              [
                "than",
              ],
              [
                "by",
                "near",
                "under",
                "in",
              ],
              [
                "of",
              ],
              [
                "to",
              ],
              [
                "going",
                "coming",
              ],
            ],
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write about this story. Write 20 or more words.",
            pics: [
              {
                e: "👧🎁🐱",
                label: "1",
              },
              {
                e: "🐱🧶😹",
                label: "2",
              },
              {
                e: "👧🐱🧶💤",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Emma got a little kitten for her birthday. She gave it a ball of wool and the kitten played with it all afternoon. In the evening, the tired kitten fell asleep on the wool. Emma thought it was very funny.",
          },
        },
      ],
    },
  ],
};
