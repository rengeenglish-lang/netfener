import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 14 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_14: CambridgeTest = {
  id: "flyers-14",
  level: "flyers",
  no: 14,
  title: "A2 Flyers · Practice Test 14",
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
                word: "an artist",
                e: "🎨",
              },
              {
                word: "a crown",
                e: "👑",
              },
              {
                word: "a lighthouse",
                e: "🗼",
              },
              {
                word: "an email",
                e: "📧",
              },
              {
                word: "a microphone",
                e: "🎤",
              },
              {
                word: "a pilot",
                e: "🧑‍✈️",
              },
              {
                word: "a coast",
                e: "🏖️",
              },
              {
                word: "a mirror",
                e: "🪞",
              },
              {
                word: "an album",
                e: "📒",
              },
              {
                word: "a satellite",
                e: "🛰️",
              },
              {
                word: "a bank",
                e: "🏦",
              },
              {
                word: "a plate",
                e: "🍽️",
              },
              {
                word: "an eagle",
                e: "🦅",
              },
              {
                word: "a tent",
                e: "⛺",
              },
            ],
            items: [
              {
                text: "This person paints or draws pictures.",
                answer: "an artist",
              },
              {
                text: "A king or queen wears this on their head.",
                answer: "a crown",
              },
              {
                text: "This tall building near the sea has a light to help ships.",
                answer: "a lighthouse",
              },
              {
                text: "You can send this message from your computer.",
                answer: "an email",
              },
              {
                text: "A singer uses this to make his or her voice louder.",
                answer: "a microphone",
              },
              {
                text: "This person flies a plane.",
                answer: "a pilot",
              },
              {
                text: "This is where the land meets the sea.",
                answer: "a coast",
              },
              {
                text: "You can keep your photos in this book.",
                answer: "an album",
              },
              {
                text: "This machine goes around the Earth in space.",
                answer: "a satellite",
              },
              {
                text: "This large bird has very good eyes and catches small animals.",
                answer: "an eagle",
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
              "Max",
              "Katy",
            ],
            items: [
              {
                line: "Katy, are you coming to the football match on Saturday?",
                options: [
                  "I played yesterday.",
                  "It's a big ball.",
                  "I'm not sure. Who's playing?",
                ],
                answer: 2,
              },
              {
                line: "Our school team against Hill Street School.",
                options: [
                  "Oh, they're really good!",
                  "I go to school.",
                  "On Saturday.",
                ],
                answer: 0,
              },
              {
                line: "I know, but our team is better.",
                options: [
                  "It's a team.",
                  "I hope you're right!",
                  "Yes, they won.",
                ],
                answer: 1,
              },
              {
                line: "Shall I meet you at the gate at two?",
                options: [
                  "Yes, that's perfect.",
                  "I met you yesterday.",
                  "It's a gate.",
                ],
                answer: 0,
              },
              {
                line: "Don't forget to wear our school colours!",
                options: [
                  "It's my favourite colour.",
                  "I forgot it.",
                  "Don't worry, I'll wear my blue scarf.",
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
              "Grace's family was moving to a new {1} in another city. Grace was sad because she didn't want to leave her friends.",
              "On her first day at the new school, Grace sat at the back of the class. She didn't {2} to anyone. At lunchtime, she sat alone. Then a girl with red {3} sat next to her. 'Hi, I'm Amy,' she said. 'Do you like horses?'",
              "Grace loved horses! Amy invited her to the riding {4} at the weekend. Soon, Grace and Amy were best friends. Grace still writes emails to her old friends, but she's not {5} any more.",
            ],
            bank: [
              {
                word: "house",
                e: "🏠",
              },
              {
                word: "speak",
                e: "🗣️",
              },
              {
                word: "hair",
                e: "💇",
              },
              {
                word: "school",
                e: "🏫",
              },
              {
                word: "lonely",
                e: "😔",
              },
              {
                word: "shop",
                e: "🏪",
              },
              {
                word: "cats",
                e: "🐈",
              },
              {
                word: "hungry",
                e: "😋",
              },
            ],
            answers: [
              "house",
              "speak",
              "hair",
              "school",
              "lonely",
            ],
            titleQuestion: {
              options: [
                "Grace's new friend",
                "A horse called Amy",
                "Moving to the beach",
              ],
              answer: 0,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "The Great Wall of China",
            text: [
              "The Great Wall of China is one of the most famous buildings {1} the world. It is more than 20,000 kilometres long!",
              "People started building the wall more than 2,000 years ago. They built it {2} protect China from enemies. Millions of people worked on the wall, and it took {3} hundreds of years to finish.",
              "The wall is made {4} stone, brick and earth. In some places, it is about eight metres high. There are towers along the wall {5} soldiers used to watch for enemies.",
              "Today, the wall is a popular place for tourists. About ten million people visit it {6} year. Some parts of the wall are in very good condition, {7} other parts are falling down.",
              "Many people say you can see the Great Wall from space, but this isn't true. The wall is very long, but it isn't very {8}. It's {9} narrow to see from so far away. If you go to China, you {10} visit the wall. It's amazing!",
            ],
            gaps: [
              {
                options: [
                  "in",
                  "of",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "for",
                  "so",
                  "to",
                ],
                answer: 2,
              },
              {
                options: [
                  "they",
                  "their",
                  "them",
                ],
                answer: 2,
              },
              {
                options: [
                  "of",
                  "from",
                  "by",
                ],
                answer: 0,
              },
              {
                options: [
                  "which",
                  "where",
                  "when",
                ],
                answer: 1,
              },
              {
                options: [
                  "every",
                  "all",
                  "many",
                ],
                answer: 0,
              },
              {
                options: [
                  "so",
                  "because",
                  "but",
                ],
                answer: 2,
              },
              {
                options: [
                  "width",
                  "wide",
                  "widely",
                ],
                answer: 1,
              },
              {
                options: [
                  "very",
                  "too",
                  "so",
                ],
                answer: 1,
              },
              {
                options: [
                  "would",
                  "shall",
                  "should",
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
              "Every year, Daniel's family goes camping in the mountains. This year, they stayed near a big lake for a week.",
              "On the third night, Daniel heard a strange noise outside the tent. He woke his dad up. They opened the tent very quietly and looked out. A family of foxes was eating the food they had left outside!",
              "Daniel's dad took a photo with his phone. The foxes ran away into the forest. The next morning, Daniel sent the photo to a wildlife magazine. They printed it in the next month's magazine. Daniel was very excited to see his name in it.",
            ],
            items: [
              {
                question: "Daniel's family goes camping in ______.",
                answers: [
                  "the mountains",
                  "mountains",
                ],
              },
              {
                question: "This year, they stayed near ______ for a week.",
                answers: [
                  "a big lake",
                  "a lake",
                  "the lake",
                ],
              },
              {
                question: "Daniel heard a strange noise on ______.",
                answers: [
                  "the third night",
                  "third night",
                ],
              },
              {
                question: "The foxes were eating ______.",
                answers: [
                  "their food",
                  "the food",
                  "the food they had left outside",
                ],
              },
              {
                question: "Daniel's dad took a photo with ______.",
                answers: [
                  "his phone",
                  "a phone",
                  "the phone",
                ],
              },
              {
                question: "The foxes ran away into ______.",
                answers: [
                  "the forest",
                  "forest",
                ],
              },
              {
                question: "Daniel sent the photo to ______.",
                answers: [
                  "a wildlife magazine",
                  "the wildlife magazine",
                  "a magazine",
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
            title: "My birthday party",
            text: [
              "Last Saturday was my eleventh birthday. I had a party {1} the garden with ten of my friends. My mum made a huge chocolate cake {2} eleven candles on it. We played games and danced to music. My best friend, Jack, gave me a book about space. It's {3} best present I've ever had! In the evening, we watched a film {4} ate popcorn. I was very tired when I went {5} bed.",
            ],
            answers: [
              [
                "in",
              ],
              [
                "with",
              ],
              [
                "the",
              ],
              [
                "and",
              ],
              [
                "to",
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
                e: "👧🚲🌳",
                label: "1",
              },
              {
                e: "🚲🪨😢",
                label: "2",
              },
              {
                e: "👩🩹👧",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Lucy was riding her bike in the park. She didn't see a big stone and she fell off her bike. She hurt her knee and started to cry. Her mum came quickly and put a plaster on her knee. Soon Lucy felt better.",
          },
        },
      ],
    },
  ],
};
