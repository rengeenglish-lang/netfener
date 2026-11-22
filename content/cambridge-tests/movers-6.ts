import type { CambridgeTest } from "./types";

/** A1 Movers practice test 6 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_6: CambridgeTest = {
  id: "movers-6",
  level: "movers",
  no: 6,
  title: "A1 Movers · Practice Test 6",
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
              {
                word: "a pilot",
                e: "🧑‍✈️",
              },
              {
                word: "a blanket",
                e: "🛏️",
              },
              {
                word: "a market",
                e: "🛒",
              },
              {
                word: "a nurse",
                e: "🧑‍⚕️",
              },
              {
                word: "a scarf",
                e: "🧣",
              },
              {
                word: "a bowl",
                e: "🥣",
              },
              {
                word: "a river",
                e: "🏞️",
              },
              {
                word: "a puppy",
                e: "🐶",
              },
            ],
            items: [
              {
                text: "This person flies a plane.",
                answer: "a pilot",
              },
              {
                text: "You can put this on your bed to keep warm.",
                answer: "a blanket",
              },
              {
                text: "People buy fruit and vegetables here.",
                answer: "a market",
              },
              {
                text: "You eat soup or cereal from this.",
                answer: "a bowl",
              },
              {
                text: "This is a young dog.",
                answer: "a puppy",
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
              "Mia",
              "Tom",
            ],
            items: [
              {
                line: "Hi, Tom! What are you doing?",
                options: [
                  "I'm making a cake.",
                  "Yes, I can.",
                  "It's in the kitchen.",
                ],
                answer: 0,
              },
              {
                line: "Who is the cake for?",
                options: [
                  "It's chocolate.",
                  "On Sunday.",
                  "For my mum. It's her birthday.",
                ],
                answer: 2,
              },
              {
                line: "Can I help you?",
                options: [
                  "No, it isn't.",
                  "Yes, please! Can you get the eggs?",
                  "I'm ten.",
                ],
                answer: 1,
              },
              {
                line: "Where are the eggs?",
                options: [
                  "They're white.",
                  "In the fridge.",
                  "I like eggs.",
                ],
                answer: 1,
              },
              {
                line: "How many eggs do you need?",
                options: [
                  "Every day.",
                  "It's big.",
                  "Three, please.",
                ],
                answer: 2,
              },
              {
                line: "This cake looks great!",
                options: [
                  "Thanks! Let's eat some later.",
                  "It's a spoon.",
                  "I don't know him.",
                ],
                answer: 0,
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
              "On Friday, Peter's class went to the {1} to see the animals. Peter wanted to see the lions, but they were asleep.",
              "Then Peter saw a little {2} in a tree. It took Peter's {3} and ran away! Everyone laughed, but Peter was {4}.",
              "Later, a zoo keeper found the hat and gave it back. 'Your hat is very {5} for monkeys!' she said.",
            ],
            bank: [
              {
                word: "zoo",
                e: "🦁",
              },
              {
                word: "monkey",
                e: "🐒",
              },
              {
                word: "hat",
                e: "🧢",
              },
              {
                word: "sad",
                e: "😢",
              },
              {
                word: "interesting",
                e: "🤔",
              },
              {
                word: "library",
                e: "📚",
              },
              {
                word: "hungry",
                e: "😋",
              },
              {
                word: "sofa",
                e: "🛋️",
              },
            ],
            answers: [
              "zoo",
              "monkey",
              "hat",
              "sad",
              "interesting",
            ],
            titleQuestion: {
              options: [
                "Peter's new bike",
                "The monkey and the hat",
                "A day at the beach",
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
            title: "Hippos",
            text: [
              "Hippos are very big animals. They live {1} Africa, near rivers and lakes.",
              "Hippos spend most of the day in the water because they {2} like hot sun. At night, they come out of the water {3} eat grass.",
              "A hippo can eat {4} lot of grass in one night! Baby hippos stay close to {5} mothers.",
            ],
            gaps: [
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
                  "doesn't",
                  "isn't",
                  "don't",
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
                  "an",
                  "a",
                  "some",
                ],
                answer: 1,
              },
              {
                options: [
                  "their",
                  "they",
                  "them",
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
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Sam's family has got a big garden behind their house. Every spring, Sam and his grandma plant vegetables there. This year they planted carrots, beans and potatoes.",
              "Sam waters the plants every evening after school. One morning, he saw a rabbit in the garden. It was eating the carrots! Sam ran outside, and the rabbit jumped over the wall.",
              "Grandma laughed. 'Let's put a fence around the vegetables,' she said. Now the vegetables are safe, and the rabbit eats grass in the park.",
            ],
            items: [
              {
                question: "Where is the garden?",
                answers: [
                  "behind their house",
                  "behind the house",
                  "behind sam's house",
                ],
              },
              {
                question: "Who plants vegetables with Sam?",
                answers: [
                  "his grandma",
                  "grandma",
                  "sam's grandma",
                ],
              },
              {
                question: "When does Sam water the plants?",
                answers: [
                  "every evening",
                  "in the evening",
                  "after school",
                ],
              },
              {
                question: "What was eating the carrots?",
                answers: [
                  "a rabbit",
                  "rabbit",
                  "the rabbit",
                ],
              },
              {
                question: "What did the rabbit jump over?",
                answers: [
                  "the wall",
                  "a wall",
                  "wall",
                ],
              },
              {
                question: "What did they put around the vegetables?",
                answers: [
                  "a fence",
                  "fence",
                ],
              },
              {
                question: "What does the rabbit eat now?",
                answers: [
                  "grass",
                  "grass in the park",
                ],
              },
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
                {
                  e: "🌳",
                  x: 14,
                  y: 34,
                  size: 3.2,
                },
                {
                  e: "👦",
                  x: 36,
                  y: 64,
                  size: 2.4,
                },
                {
                  e: "🚲",
                  x: 46,
                  y: 78,
                  size: 2,
                },
                {
                  e: "👧",
                  x: 64,
                  y: 62,
                  size: 2.4,
                },
                {
                  e: "🍦",
                  x: 70,
                  y: 54,
                  size: 1.4,
                },
                {
                  e: "🐕",
                  x: 82,
                  y: 82,
                },
                {
                  e: "☀️",
                  x: 84,
                  y: 12,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where are the children?",
              "What has the boy got?",
              "What is the girl eating?",
              "Write one sentence about the dog.",
              "Write one sentence about the weather.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The children are in the park. The boy has got a bike. The girl is eating an ice cream. The dog is brown and it is next to the girl. It is hot and sunny today.",
          },
        },
      ],
    },
  ],
};
