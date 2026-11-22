import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 11 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_11: CambridgeTest = {
  id: "flyers-11",
  level: "flyers",
  no: 11,
  title: "A2 Flyers · Practice Test 11",
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
                word: "a photographer",
                e: "📷",
              },
              {
                word: "a belt",
                e: "🪢",
              },
              {
                word: "a castle",
                e: "🏰",
              },
              {
                word: "a magazine",
                e: "📖",
              },
              {
                word: "a thermometer",
                e: "🌡️",
              },
              {
                word: "a businesswoman",
                e: "💼",
              },
              {
                word: "a waterfall",
                e: "🌊",
              },
              {
                word: "a wardrobe",
                e: "🚪",
              },
              {
                word: "a dictionary",
                e: "📕",
              },
              {
                word: "a planet",
                e: "🪐",
              },
              {
                word: "a bakery",
                e: "🥖",
              },
              {
                word: "a bucket",
                e: "🪣",
              },
              {
                word: "a gorilla",
                e: "🦍",
              },
              {
                word: "a passport",
                e: "🛂",
              },
            ],
            items: [
              {
                text: "This person takes pictures for newspapers and magazines.",
                answer: "a photographer",
              },
              {
                text: "You wear this around your waist to stop your trousers falling down.",
                answer: "a belt",
              },
              {
                text: "This old building has thick walls and towers.",
                answer: "a castle",
              },
              {
                text: "This tells you how hot or cold something is.",
                answer: "a thermometer",
              },
              {
                text: "This woman works in an office and often travels for meetings.",
                answer: "a businesswoman",
              },
              {
                text: "This is water falling down from a high place.",
                answer: "a waterfall",
              },
              {
                text: "You hang your clothes in this.",
                answer: "a wardrobe",
              },
              {
                text: "You look in this book to find what a word means.",
                answer: "a dictionary",
              },
              {
                text: "You can buy fresh bread in this shop.",
                answer: "a bakery",
              },
              {
                text: "This big, strong animal lives in African forests.",
                answer: "a gorilla",
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
              "Holly",
              "Uncle Peter",
            ],
            items: [
              {
                line: "Uncle Peter, how was your trip to Canada?",
                options: [
                  "I'm going next month.",
                  "It's very far.",
                  "Amazing! I saw a bear!",
                ],
                answer: 2,
              },
              {
                line: "Weren't you frightened?",
                options: [
                  "No, it was cold.",
                  "A bit, but it was a long way away.",
                  "Yes, it's a bear.",
                ],
                answer: 1,
              },
              {
                line: "What else did you do there?",
                options: [
                  "For two weeks.",
                  "I went canoeing on a lake.",
                  "With my friend.",
                ],
                answer: 1,
              },
              {
                line: "Did you take any photos?",
                options: [
                  "No, I'll take them tomorrow.",
                  "It's my camera.",
                  "Hundreds! Would you like to see them?",
                ],
                answer: 2,
              },
              {
                line: "Yes, please! Can I come round tomorrow?",
                options: [
                  "Of course. Come after lunch.",
                  "I came yesterday.",
                  "It's round.",
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
              "Tom had always wanted to learn to {1}. Every summer, he watched the people on the lake in their small boats with white sails.",
              "For his twelfth birthday, his parents paid for a course at the sailing {2}. On the first day, Tom was nervous. The instructor, Jenny, gave him a life jacket and showed him how to {3} the boat.",
              "By the end of the week, Tom could sail alone. On the last day, there was a race. Tom wasn't the fastest, but he didn't {4} over once! Jenny said he was a natural sailor. Now Tom wants to sail across the {5} one day.",
            ],
            bank: [
              {
                word: "sail",
                e: "⛵",
              },
              {
                word: "club",
                e: "🏢",
              },
              {
                word: "steer",
                e: "🧭",
              },
              {
                word: "fall",
                e: "⬇️",
              },
              {
                word: "ocean",
                e: "🌊",
              },
              {
                word: "cook",
                e: "🍳",
              },
              {
                word: "desert",
                e: "🏜️",
              },
              {
                word: "sing",
                e: "🎤",
              },
            ],
            answers: [
              "sail",
              "club",
              "steer",
              "fall",
              "ocean",
            ],
            titleQuestion: {
              options: [
                "Tom learns to sail",
                "A birthday cake for Jenny",
                "Tom's trip to the desert",
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
            title: "Honey bees",
            text: [
              "Honey bees live together in large groups {1} colonies. One colony can have more than fifty thousand bees.",
              "Each colony has one queen bee. Her job is to lay eggs. She can lay up {2} two thousand eggs a day! Most of the other bees are worker bees. They look {3} the young bees and collect food.",
              "Worker bees fly from flower to flower {4} collect nectar. They bring it back to the hive and turn it into honey. To make one jar of honey, bees have to visit about two million flowers!",
              "Bees are very important {5} the world. They help plants make seeds and fruit. Without bees, we {6} not have apples, strawberries or many other foods.",
              "Sadly, there are fewer bees {7} there were fifty years ago. You can help bees by growing flowers in your garden. Bees love bright colours, {8} choose yellow, purple and blue flowers. Never kill a bee, because they are much more useful {9} you think! Bees only sting when they are {10}.",
            ],
            gaps: [
              {
                options: [
                  "calls",
                  "calling",
                  "called",
                ],
                answer: 2,
              },
              {
                options: [
                  "to",
                  "for",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "for",
                  "after",
                  "at",
                ],
                answer: 1,
              },
              {
                options: [
                  "to",
                  "for",
                  "so",
                ],
                answer: 0,
              },
              {
                options: [
                  "to",
                  "at",
                  "for",
                ],
                answer: 2,
              },
              {
                options: [
                  "will",
                  "shall",
                  "would",
                ],
                answer: 2,
              },
              {
                options: [
                  "than",
                  "that",
                  "then",
                ],
                answer: 0,
              },
              {
                options: [
                  "but",
                  "so",
                  "because",
                ],
                answer: 1,
              },
              {
                options: [
                  "than",
                  "as",
                  "that",
                ],
                answer: 0,
              },
              {
                options: [
                  "frightening",
                  "fright",
                  "frightened",
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
              "Kim's grandmother is ninety years old. She lives in a small flat on the third floor of a building in the city centre. Kim visits her every Sunday after lunch.",
              "Last Sunday, Grandma showed Kim some old letters. They were from Grandma's pen friend in Australia. The two women started writing to each other when they were ten years old, and they never met.",
              "Kim had an idea. She found the pen friend on the internet and organised a video call. When Grandma saw her friend's face on the computer, she cried with happiness. Now they talk every week.",
            ],
            items: [
              {
                question: "Kim's grandmother is ______ years old.",
                answers: [
                  "ninety",
                  "90",
                ],
              },
              {
                question: "Grandma's flat is on ______ of the building.",
                answers: [
                  "the third floor",
                  "third floor",
                ],
              },
              {
                question: "Kim visits her grandmother every Sunday ______.",
                answers: [
                  "after lunch",
                ],
              },
              {
                question: "The letters were from Grandma's pen friend in ______.",
                answers: [
                  "australia",
                ],
              },
              {
                question: "The two women started writing when they were ______.",
                answers: [
                  "ten years old",
                  "ten",
                  "10",
                  "10 years old",
                ],
              },
              {
                question: "Kim found the pen friend ______.",
                answers: [
                  "on the internet",
                  "online",
                ],
              },
              {
                question: "When Grandma saw her friend, she ______.",
                answers: [
                  "cried with happiness",
                  "cried",
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
            title: "Our school garden",
            text: [
              "At my school, we have a big garden {1} we grow fruit and vegetables. Every class has its own part of the garden. My class is growing tomatoes and beans this year. We water the plants every morning {2} lessons start. Last week, we picked our first tomatoes and {3} them in a salad. They were delicious! Our teacher says that food tastes better when you grow it {4}. Next year, I'd like {5} grow strawberries.",
            ],
            answers: [
              [
                "where",
              ],
              [
                "before",
              ],
              [
                "ate",
                "used",
                "put",
                "had",
              ],
              [
                "yourself",
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
                e: "👦📚😴",
                label: "1",
              },
              {
                e: "⏰🏃🚌",
                label: "2",
              },
              {
                e: "🚌👋😟",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Ben was reading a book late at night and fell asleep. In the morning, he woke up late. He ran very fast to the bus stop, but the bus was leaving. Ben was very worried because he was late for school.",
          },
        },
      ],
    },
  ],
};
