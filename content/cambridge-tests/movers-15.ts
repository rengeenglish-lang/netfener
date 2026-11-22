import type { CambridgeTest } from "./types";

/** A1 Movers practice test 15 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_15: CambridgeTest = {
  id: "movers-15",
  level: "movers",
  no: 15,
  title: "A1 Movers · Practice Test 15",
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
                word: "a pirate",
                e: "🏴‍☠️",
              },
              {
                word: "a key",
                e: "🔑",
              },
              {
                word: "a bank",
                e: "🏦",
              },
              {
                word: "a village",
                e: "🏘️",
              },
              {
                word: "a kangaroo",
                e: "🦘",
              },
              {
                word: "a glass",
                e: "🥛",
              },
              {
                word: "an umbrella",
                e: "☂️",
              },
              {
                word: "a ring",
                e: "💍",
              },
            ],
            items: [
              {
                text: "This person sails a ship and looks for treasure in stories.",
                answer: "a pirate",
              },
              {
                text: "You use this to open a door.",
                answer: "a key",
              },
              {
                text: "This is a small place in the countryside with a few houses.",
                answer: "a village",
              },
              {
                text: "This animal jumps and carries its baby in a pocket.",
                answer: "a kangaroo",
              },
              {
                text: "You take this with you when it rains.",
                answer: "an umbrella",
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
              "Zoe",
              "Dad",
            ],
            items: [
              {
                line: "Dad, can we have pizza for dinner?",
                options: [
                  "It's round.",
                  "Yes, I'm Dad.",
                  "We had pizza yesterday.",
                ],
                answer: 2,
              },
              {
                line: "What about pasta then?",
                options: [
                  "OK. Can you help me cook?",
                  "It's in the bag.",
                  "No, it's a fork.",
                ],
                answer: 0,
              },
              {
                line: "Sure! What do I need to do?",
                options: [
                  "It's hot.",
                  "Wash the tomatoes, please.",
                  "I'm cooking.",
                ],
                answer: 1,
              },
              {
                line: "Can I put cheese on the pasta?",
                options: [
                  "Yes, lots of cheese!",
                  "It's yellow.",
                  "In the fridge.",
                ],
                answer: 0,
              },
              {
                line: "When is dinner ready?",
                options: [
                  "At the table.",
                  "With Mum.",
                  "In twenty minutes.",
                ],
                answer: 2,
              },
              {
                line: "I'm so hungry!",
                options: [
                  "It's pasta.",
                  "Me too. Let's be quick!",
                  "No, thanks.",
                ],
                answer: 1,
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
              "Every year, there is a big {1} in Mark's town. There is music, dancing and lots of food. This year, Mark went with his best {2}, Leo.",
              "They watched a man who could do magic. He took a {3} out of his hat! Then they ate {4} and danced to the music.",
              "In the evening, there were beautiful fireworks in the {5}. 'This is the best night of the year!' said Leo.",
            ],
            bank: [
              {
                word: "festival",
                e: "🎉",
              },
              {
                word: "friend",
                e: "🤝",
              },
              {
                word: "rabbit",
                e: "🐇",
              },
              {
                word: "candyfloss",
                e: "🍭",
              },
              {
                word: "sky",
                e: "🌌",
              },
              {
                word: "kitchen",
                e: "🍳",
              },
              {
                word: "hospital",
                e: "🏥",
              },
              {
                word: "cold",
                e: "🥶",
              },
            ],
            answers: [
              "festival",
              "friend",
              "rabbit",
              "candyfloss",
              "sky",
            ],
            titleQuestion: {
              options: [
                "Mark's new bike",
                "A night at the festival",
                "Leo is sick",
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
            title: "Owls",
            text: [
              "Owls are birds that usually fly {1} night. They have got big eyes and they can see very well in the dark.",
              "Owls can turn their heads a long way round, {2} they can't move their eyes. They have got soft feathers, so they fly very {3}.",
              "Owls eat mice and other small animals. They {4} in trees, old buildings and sometimes in barns. People often think owls are clever {5} they look very wise.",
            ],
            gaps: [
              {
                options: [
                  "at",
                  "in",
                  "on",
                ],
                answer: 0,
              },
              {
                options: [
                  "and",
                  "so",
                  "but",
                ],
                answer: 2,
              },
              {
                options: [
                  "quiet",
                  "quietly",
                  "quieter",
                ],
                answer: 1,
              },
              {
                options: [
                  "lives",
                  "live",
                  "living",
                ],
                answer: 1,
              },
              {
                options: [
                  "but",
                  "or",
                  "because",
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
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Olivia and her class went on a school trip to a chocolate factory. They went there by bus, and the trip took one hour.",
              "At the factory, a woman showed them how to make chocolate. Then the children made their own chocolate bars. Olivia put nuts and strawberries in hers.",
              "At the end of the trip, every child got a box of chocolates. Olivia gave her box to her grandma, because Grandma loves chocolate more than anyone.",
            ],
            items: [
              {
                question: "Where did the class go?",
                answers: [
                  "to a chocolate factory",
                  "a chocolate factory",
                  "the chocolate factory",
                ],
              },
              {
                question: "How did they get there?",
                answers: [
                  "by bus",
                  "bus",
                  "on a bus",
                ],
              },
              {
                question: "How long did the trip take?",
                answers: [
                  "one hour",
                  "an hour",
                  "1 hour",
                ],
              },
              {
                question: "Who showed them how to make chocolate?",
                answers: [
                  "a woman",
                  "the woman",
                  "woman",
                ],
              },
              {
                question: "What did Olivia put in her chocolate?",
                answers: [
                  "nuts and strawberries",
                  "strawberries and nuts",
                ],
              },
              {
                question: "What did every child get?",
                answers: [
                  "a box of chocolates",
                  "box of chocolates",
                  "chocolates",
                ],
              },
              {
                question: "Who did Olivia give her box to?",
                answers: [
                  "her grandma",
                  "grandma",
                  "to her grandma",
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
              bg: "beach",
              items: [
                {
                  e: "🌴",
                  x: 14,
                  y: 40,
                  size: 3.2,
                },
                {
                  e: "👦",
                  x: 36,
                  y: 66,
                  size: 2.4,
                },
                {
                  e: "🏄",
                  x: 62,
                  y: 40,
                  size: 2.4,
                },
                {
                  e: "🐕",
                  x: 48,
                  y: 80,
                },
                {
                  e: "🦀",
                  x: 80,
                  y: 86,
                },
                {
                  e: "🍉",
                  x: 28,
                  y: 82,
                  size: 1.6,
                },
                {
                  e: "☀️",
                  x: 86,
                  y: 12,
                  size: 2.2,
                },
              ],
            },
            prompts: [
              "Where is the boy?",
              "What animal is next to the boy?",
              "What is the man in the sea doing?",
              "Write one sentence about the fruit.",
              "Write one sentence about the weather.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The boy is on the beach. There is a dog next to the boy. The man in the sea is surfing. There is a watermelon on the sand. It is hot and sunny.",
          },
        },
      ],
    },
  ],
};
