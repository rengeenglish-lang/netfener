import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 25 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_25: CambridgeTest = {
  id: "flyers-25",
  level: "flyers",
  no: 25,
  title: "A2 Flyers · Practice Test 25",
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
                word: "a scientist",
                e: "🧑‍🔬",
              },
              {
                word: "a bracelet",
                e: "📿",
              },
              {
                word: "a bridge",
                e: "🌉",
              },
              {
                word: "a postcard",
                e: "🖼️",
              },
              {
                word: "a keyboard",
                e: "⌨️",
              },
              {
                word: "an architect",
                e: "📐",
              },
              {
                word: "a jungle",
                e: "🌴",
              },
              {
                word: "a cushion",
                e: "🛋️",
              },
              {
                word: "an encyclopaedia",
                e: "📚",
              },
              {
                word: "a planet",
                e: "🪐",
              },
              {
                word: "a museum",
                e: "🏛️",
              },
              {
                word: "a frying pan",
                e: "🍳",
              },
              {
                word: "a chameleon",
                e: "🦎",
              },
              {
                word: "a passport",
                e: "🛂",
              },
            ],
            items: [
              {
                text: "This person does experiments to find out new things.",
                answer: "a scientist",
              },
              {
                text: "You wear this around your wrist as jewellery.",
                answer: "a bracelet",
              },
              {
                text: "This helps people cross over a river.",
                answer: "a bridge",
              },
              {
                text: "You can send this card with a photo of your holiday.",
                answer: "a postcard",
              },
              {
                text: "You use this to type letters on a computer.",
                answer: "a keyboard",
              },
              {
                text: "This person draws plans for new buildings.",
                answer: "an architect",
              },
              {
                text: "Monkeys and parrots live in this hot, green place.",
                answer: "a jungle",
              },
              {
                text: "You can look things up in this big book.",
                answer: "an encyclopaedia",
              },
              {
                text: "You can see dinosaur bones in this building.",
                answer: "a museum",
              },
              {
                text: "This animal can change colour.",
                answer: "a chameleon",
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
              "Mrs Jones",
            ],
            items: [
              {
                line: "Mrs Jones, can I ask you about the school trip?",
                options: [
                  "I went on a trip.",
                  "Of course, Max. What would you like to know?",
                  "It's a school.",
                ],
                answer: 1,
              },
              {
                line: "Where are we going?",
                options: [
                  "To the science museum in the city.",
                  "On Friday.",
                  "By coach.",
                ],
                answer: 0,
              },
              {
                line: "How long is the journey?",
                options: [
                  "It's very long.",
                  "In the morning.",
                  "About an hour and a half.",
                ],
                answer: 2,
              },
              {
                line: "Do we need to bring lunch?",
                options: [
                  "I had lunch.",
                  "Yes, bring a packed lunch and some water.",
                  "It's lunchtime.",
                ],
                answer: 1,
              },
              {
                line: "Great, I'm really looking forward to it!",
                options: [
                  "I looked at it.",
                  "Me too. It'll be fun!",
                  "It's forward.",
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
              "Zara's family lived in a {1} on the twentieth floor. From her window, Zara could see the whole city.",
              "One evening, there was a power cut. All the lights went out and the {2} stopped working. Zara and her brother were {3}. 'Let's look out of the window,' said Mum.",
              "Zara couldn't believe it. Without the city lights, she could see thousands of {4} in the sky. Mum told them the names of some of them. They watched the sky for two hours. When the lights came back on, Zara was a bit {5}. 'Can we have another power cut tomorrow?' she asked.",
            ],
            bank: [
              {
                word: "flat",
                e: "🏢",
              },
              {
                word: "lift",
                e: "🛗",
              },
              {
                word: "frightened",
                e: "😨",
              },
              {
                word: "stars",
                e: "⭐",
              },
              {
                word: "disappointed",
                e: "😞",
              },
              {
                word: "garden",
                e: "🏡",
              },
              {
                word: "cars",
                e: "🚗",
              },
              {
                word: "hungry",
                e: "😋",
              },
            ],
            answers: [
              "flat",
              "lift",
              "frightened",
              "stars",
              "disappointed",
            ],
            titleQuestion: {
              options: [
                "A new garden for Zara",
                "The broken car",
                "Stars in the city",
              ],
              answer: 2,
            },
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text. Choose the right words.",
            title: "Hot-air ballooning",
            text: [
              "Flying in a hot-air balloon is an exciting experience. But how {1} a balloon fly?",
              "A hot-air balloon has three parts: the envelope, the burner and the basket. The envelope is the big colourful bag {2} holds the air. The burner heats the air inside the envelope. The basket is where the passengers stand.",
              "Hot air is lighter {3} cold air. When the pilot heats the air in the envelope, the balloon goes up. When the air gets cooler, the balloon comes {4}.",
              "Pilots can't steer a balloon. The wind decides {5} the balloon goes! But pilots can go higher or lower to find winds that are blowing in different directions.",
              "Most balloon flights take place early in the morning or in the evening, {6} the wind is usually calmer. A flight usually lasts about an hour. Passengers often see amazing views {7} mountains, rivers and towns.",
              "There are balloon festivals all over the world. At {8} festivals, hundreds of balloons fly at the same time. Some are in unusual shapes, like animals or cartoon characters. If you {9} the chance, you should try it. But don't forget to wear warm clothes; it can be very cold {10} up in the sky!",
            ],
            gaps: [
              {
                options: [
                  "do",
                  "does",
                  "is",
                ],
                answer: 1,
              },
              {
                options: [
                  "who",
                  "that",
                  "what",
                ],
                answer: 1,
              },
              {
                options: [
                  "as",
                  "that",
                  "than",
                ],
                answer: 2,
              },
              {
                options: [
                  "down",
                  "up",
                  "off",
                ],
                answer: 0,
              },
              {
                options: [
                  "which",
                  "where",
                  "what",
                ],
                answer: 1,
              },
              {
                options: [
                  "when",
                  "where",
                  "which",
                ],
                answer: 0,
              },
              {
                options: [
                  "from",
                  "for",
                  "of",
                ],
                answer: 2,
              },
              {
                options: [
                  "any",
                  "much",
                  "some",
                ],
                answer: 2,
              },
              {
                options: [
                  "get",
                  "got",
                  "getting",
                ],
                answer: 0,
              },
              {
                options: [
                  "higher",
                  "high",
                  "height",
                ],
                answer: 1,
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
              "Oscar's class is doing a project about their town's history. Their teacher took them to visit the oldest person in the town, Mrs Wood. She is a hundred and two years old.",
              "Mrs Wood told them that when she was a girl, there was no electricity in her house. Her family used candles and a fire for light. She walked five kilometres to school every day, even in the snow.",
              "The children asked her lots of questions. Mrs Wood showed them her old school photos and her first doll. Oscar wrote everything down. Later, the class made a short film about Mrs Wood's life.",
            ],
            items: [
              {
                question: "Oscar's class is doing a project about ______.",
                answers: [
                  "their town's history",
                  "the town's history",
                  "history",
                ],
              },
              {
                question: "Mrs Wood is ______ years old.",
                answers: [
                  "a hundred and two",
                  "one hundred and two",
                  "102",
                ],
              },
              {
                question: "When Mrs Wood was a girl, there was no ______ in her house.",
                answers: [
                  "electricity",
                ],
              },
              {
                question: "Her family used candles and ______ for light.",
                answers: [
                  "a fire",
                  "fire",
                ],
              },
              {
                question: "Mrs Wood walked ______ to school every day.",
                answers: [
                  "five kilometres",
                  "5 kilometres",
                  "5 km",
                ],
              },
              {
                question: "Mrs Wood showed them her old school photos and ______.",
                answers: [
                  "her first doll",
                  "her doll",
                  "a doll",
                ],
              },
              {
                question: "The class made ______ about Mrs Wood's life.",
                answers: [
                  "a short film",
                  "a film",
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
            title: "Learning to cook",
            text: [
              "Last year, my dad taught me how {1} cook. The first thing I made was scrambled eggs. It was easy! Then I learned how to make pasta {2} tomato sauce. Now I can cook lots of different meals. Every Sunday, I cook lunch {3} my whole family. Last week, I made a vegetable curry. Everyone said it {4} delicious. When I'm older, I'd like to have {5} own restaurant.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "with",
              ],
              [
                "for",
              ],
              [
                "was",
              ],
              [
                "my",
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
                e: "👦🌱🪴",
                label: "1",
              },
              {
                e: "🪴☀️💧",
                label: "2",
              },
              {
                e: "👦🌻😀",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Leo planted a small seed in a pot. Every day, he put the pot in the sun and gave it some water. After a few weeks, a big sunflower grew from the seed. Leo was very proud of his beautiful flower.",
          },
        },
      ],
    },
  ],
};
