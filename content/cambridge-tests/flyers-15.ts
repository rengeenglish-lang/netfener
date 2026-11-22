import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 15 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_15: CambridgeTest = {
  id: "flyers-15",
  level: "flyers",
  no: 15,
  title: "A2 Flyers · Practice Test 15",
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
                word: "a reporter",
                e: "🎙️",
              },
              {
                word: "a watch",
                e: "⌚",
              },
              {
                word: "a monument",
                e: "🗽",
              },
              {
                word: "a diary",
                e: "📔",
              },
              {
                word: "a keyboard",
                e: "⌨️",
              },
              {
                word: "a nurse",
                e: "🧑‍⚕️",
              },
              {
                word: "a swamp",
                e: "🐊",
              },
              {
                word: "a lamp",
                e: "💡",
              },
              {
                word: "an encyclopaedia",
                e: "📚",
              },
              {
                word: "a galaxy",
                e: "🌌",
              },
              {
                word: "a hotel",
                e: "🏨",
              },
              {
                word: "a bowl",
                e: "🥣",
              },
              {
                word: "a hedgehog",
                e: "🦔",
              },
              {
                word: "a map",
                e: "🗺️",
              },
            ],
            items: [
              {
                text: "This person tells the news on TV or the radio.",
                answer: "a reporter",
              },
              {
                text: "You wear this on your wrist to know the time.",
                answer: "a watch",
              },
              {
                text: "This is a statue or building to help people remember someone.",
                answer: "a monument",
              },
              {
                text: "You write about your day in this book.",
                answer: "a diary",
              },
              {
                text: "You type on this when you use a computer.",
                answer: "a keyboard",
              },
              {
                text: "This person looks after people in hospital.",
                answer: "a nurse",
              },
              {
                text: "This is wet, soft land where crocodiles sometimes live.",
                answer: "a swamp",
              },
              {
                text: "This big book has information about lots of subjects.",
                answer: "an encyclopaedia",
              },
              {
                text: "You can stay here when you are on holiday.",
                answer: "a hotel",
              },
              {
                text: "This small animal has sharp spines on its back.",
                answer: "a hedgehog",
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
              "Fred",
              "Aunt Sally",
            ],
            items: [
              {
                line: "Aunt Sally, what are you making?",
                options: [
                  "I made it yesterday.",
                  "It's in the oven.",
                  "A cake for your grandpa's birthday.",
                ],
                answer: 2,
              },
              {
                line: "Can I help?",
                options: [
                  "Of course. Can you break the eggs?",
                  "I'm helping you.",
                  "Yes, it's a cake.",
                ],
                answer: 0,
              },
              {
                line: "How many eggs do you need?",
                options: [
                  "In the fridge.",
                  "Four, please.",
                  "They're big.",
                ],
                answer: 1,
              },
              {
                line: "What kind of cake is it?",
                options: [
                  "A lemon cake. It's his favourite.",
                  "It's a big cake.",
                  "It's for Grandpa.",
                ],
                answer: 0,
              },
              {
                line: "I'm sure he'll love it!",
                options: [
                  "He loved it.",
                  "I'm sure.",
                  "I hope so!",
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
              "Last month, Mia's class went on a trip to the {1}. They wanted to see the stars through a big telescope.",
              "When they arrived, it was very {2}. They couldn't see anything in the sky. The children were disappointed. But the scientist who worked there had an idea. She showed them a film about the {3} and the planets.",
              "Later, the clouds moved away. Mia looked through the telescope and saw Saturn with its beautiful {4}. It was amazing! On the bus home, Mia told her teacher, 'I want to be an {5} when I grow up!'",
            ],
            bank: [
              {
                word: "observatory",
                e: "🔭",
              },
              {
                word: "cloudy",
                e: "☁️",
              },
              {
                word: "stars",
                e: "⭐",
              },
              {
                word: "rings",
                e: "💍",
              },
              {
                word: "astronaut",
                e: "🧑‍🚀",
              },
              {
                word: "beach",
                e: "🏖️",
              },
              {
                word: "sunny",
                e: "☀️",
              },
              {
                word: "trees",
                e: "🌳",
              },
            ],
            answers: [
              "observatory",
              "cloudy",
              "stars",
              "rings",
              "astronaut",
            ],
            titleQuestion: {
              options: [
                "A day at the beach",
                "Mia sees Saturn",
                "The lost telescope",
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
            title: "Rainforests",
            text: [
              "Rainforests are thick forests {1} grow in hot, wet places. They are home to more than half of all the plants and animals in the world.",
              "It rains a lot in rainforests. In some places, it rains {2} every day! The trees are very tall, and their leaves stop most of the sunlight {3} reaching the ground.",
              "Many amazing animals live in rainforests, like jaguars, monkeys and colourful birds. Scientists think there are lots of animals there that nobody {4} discovered yet.",
              "Rainforests are very important for our planet. The trees make oxygen, {5} we need to breathe. Many medicines also come {6} rainforest plants.",
              "Sadly, people are cutting down rainforests {7} make space for farms and roads. Every minute, we lose a piece of rainforest {8} big as thirty football pitches! We must protect rainforests, {9} they are disappearing very quickly. You can help {10} using less paper.",
            ],
            gaps: [
              {
                options: [
                  "that",
                  "who",
                  "what",
                ],
                answer: 0,
              },
              {
                options: [
                  "much",
                  "most",
                  "almost",
                ],
                answer: 2,
              },
              {
                options: [
                  "of",
                  "from",
                  "to",
                ],
                answer: 1,
              },
              {
                options: [
                  "have",
                  "has",
                  "had",
                ],
                answer: 1,
              },
              {
                options: [
                  "who",
                  "what",
                  "which",
                ],
                answer: 2,
              },
              {
                options: [
                  "from",
                  "of",
                  "by",
                ],
                answer: 0,
              },
              {
                options: [
                  "for",
                  "to",
                  "so",
                ],
                answer: 1,
              },
              {
                options: [
                  "as",
                  "so",
                  "than",
                ],
                answer: 0,
              },
              {
                options: [
                  "so",
                  "but",
                  "because",
                ],
                answer: 2,
              },
              {
                options: [
                  "with",
                  "for",
                  "by",
                ],
                answer: 2,
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
              "Harry is twelve and he lives in a small town by the sea. His mum is a doctor and his dad works in a bank.",
              "Harry's hobby is collecting stamps. He started when he was six, after his grandfather gave him an old album. Now he has more than three thousand stamps from eighty different countries.",
              "Harry's favourite stamp is from Japan. It shows a red bird flying over a mountain. Last year, Harry entered a stamp competition in London. He won second prize and got a special magnifying glass.",
            ],
            items: [
              {
                question: "Harry lives in a small town ______.",
                answers: [
                  "by the sea",
                  "near the sea",
                ],
              },
              {
                question: "Harry's dad works ______.",
                answers: [
                  "in a bank",
                  "at a bank",
                ],
              },
              {
                question: "Harry started collecting stamps when he was ______.",
                answers: [
                  "six",
                  "6",
                  "six years old",
                ],
              },
              {
                question: "His grandfather gave him ______.",
                answers: [
                  "an old album",
                  "old album",
                  "an album",
                ],
              },
              {
                question: "Harry has stamps from ______ different countries.",
                answers: [
                  "eighty",
                  "80",
                ],
              },
              {
                question: "Harry's favourite stamp shows ______ flying over a mountain.",
                answers: [
                  "a red bird",
                  "red bird",
                ],
              },
              {
                question: "In the competition, Harry won ______.",
                answers: [
                  "second prize",
                  "2nd prize",
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
            title: "A rainy weekend",
            text: [
              "It rained all weekend, {1} we couldn't go to the beach. My sister and I were very bored. Then Dad had a great idea. 'Let's make {2} own film!' he said. We wrote a story about a dragon {3} lived in our garden. My sister was the dragon and I was the knight. Dad filmed {4} with his phone. On Sunday evening, we watched our film. It was so funny! Now I'm happy when it rains {5} the weekend.",
            ],
            answers: [
              [
                "so",
              ],
              [
                "our",
              ],
              [
                "who",
                "that",
              ],
              [
                "us",
                "it",
                "everything",
              ],
              [
                "at",
                "on",
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
                e: "👦🐕🏞️",
                label: "1",
              },
              {
                e: "🐕🏃🦆",
                label: "2",
              },
              {
                e: "👦🐕💦😂",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "One sunny afternoon, Jack took his dog to the lake. The dog saw some ducks and ran after them. It jumped into the water and splashed Jack. Jack was very wet, but he laughed and laughed.",
          },
        },
      ],
    },
  ],
};
