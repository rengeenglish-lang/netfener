import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 24 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_24: CambridgeTest = {
  id: "flyers-24",
  level: "flyers",
  no: 24,
  title: "A2 Flyers · Practice Test 24",
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
                word: "a cashier",
                e: "💵",
              },
              {
                word: "a hood",
                e: "🧥",
              },
              {
                word: "a lighthouse",
                e: "🗼",
              },
              {
                word: "a receipt",
                e: "🧾",
              },
              {
                word: "a webcam",
                e: "📹",
              },
              {
                word: "a goalkeeper",
                e: "🧤",
              },
              {
                word: "an ocean",
                e: "🌊",
              },
              {
                word: "a shelf",
                e: "🗄️",
              },
              {
                word: "a biography",
                e: "📘",
              },
              {
                word: "an eclipse",
                e: "🌑",
              },
              {
                word: "a library",
                e: "📚",
              },
              {
                word: "a toaster",
                e: "🍞",
              },
              {
                word: "a koala",
                e: "🐨",
              },
              {
                word: "a helmet",
                e: "⛑️",
              },
            ],
            items: [
              {
                text: "This person takes your money in a shop.",
                answer: "a cashier",
              },
              {
                text: "This is the part of a coat that covers your head.",
                answer: "a hood",
              },
              {
                text: "This tells ships where the rocks are at night.",
                answer: "a lighthouse",
              },
              {
                text: "The shop gives you this piece of paper after you pay.",
                answer: "a receipt",
              },
              {
                text: "This small camera lets people see you during a video call.",
                answer: "a webcam",
              },
              {
                text: "This player stops the ball going into the goal.",
                answer: "a goalkeeper",
              },
              {
                text: "This is a very large sea, like the Atlantic.",
                answer: "an ocean",
              },
              {
                text: "This book tells the story of a real person's life.",
                answer: "a biography",
              },
              {
                text: "This happens when the moon moves in front of the sun.",
                answer: "an eclipse",
              },
              {
                text: "This grey animal lives in Australian trees.",
                answer: "a koala",
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
              "Eva",
              "Dad",
            ],
            items: [
              {
                line: "Dad, can I have a sleepover on Saturday?",
                options: [
                  "I slept well.",
                  "How many friends do you want to invite?",
                  "It's Saturday.",
                ],
                answer: 1,
              },
              {
                line: "Just three: Mia, Zoe and Lily.",
                options: [
                  "OK, but you need to ask their parents first.",
                  "I know them.",
                  "They're three.",
                ],
                answer: 0,
              },
              {
                line: "Can we watch a film and eat pizza?",
                options: [
                  "I watched it.",
                  "Pizza is good.",
                  "Yes, but you must go to sleep by eleven.",
                ],
                answer: 2,
              },
              {
                line: "Can we sleep in the living room?",
                options: [
                  "I'm living here.",
                  "It's a room.",
                  "Fine, but you'll have to tidy it the next morning.",
                ],
                answer: 2,
              },
              {
                line: "Thank you, Dad! I'll call them now.",
                options: [
                  "Don't forget to ask their parents!",
                  "I'll call too.",
                  "Thank you, Eva.",
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
              "Last summer, Noah's family went on a {1} across Europe. They travelled by train through five countries.",
              "In France, they climbed the Eiffel Tower. In Italy, they ate the best {2} Noah had ever tasted. In Switzerland, they saw {3} with snow on the top, even in July.",
              "On the last day, in Germany, Noah lost his {4} at the train station. It had all his photos from the trip. He was very upset. But a kind woman found it and gave it to the station {5}. Noah got it back an hour later!",
            ],
            bank: [
              {
                word: "journey",
                e: "🚆",
              },
              {
                word: "pizza",
                e: "🍕",
              },
              {
                word: "mountains",
                e: "⛰️",
              },
              {
                word: "camera",
                e: "📷",
              },
              {
                word: "manager",
                e: "👔",
              },
              {
                word: "cruise",
                e: "🚢",
              },
              {
                word: "rivers",
                e: "🏞️",
              },
              {
                word: "bag",
                e: "👜",
              },
            ],
            answers: [
              "journey",
              "pizza",
              "mountains",
              "camera",
              "manager",
            ],
            titleQuestion: {
              options: [
                "A cruise to Africa",
                "Noah's train journey",
                "Noah's new bag",
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
            title: "The Amazon River",
            text: [
              "The Amazon is the biggest river in the world. It is about 6,400 kilometres long and it flows {1} Peru, Colombia and Brazil to the Atlantic Ocean.",
              "More water flows through the Amazon {2} through any other river. In some places, it is so wide that you can't see the other side!",
              "There are no bridges across the Amazon. People {3} live near the river travel by boat. Some boats are like small floating shops {4} sell food and clothes to people in villages.",
              "The Amazon is home to thousands of kinds of fish, like the piranha, {5} has very sharp teeth. There are also pink river dolphins, giant otters and huge snakes {6} anacondas.",
              "The rainforest around the river is the largest {7} the world. It's sometimes called 'the lungs of the planet' {8} the trees produce so much oxygen. But every year, people cut down parts of the forest. Many scientists are worried about this. They say we must {9} the Amazon for the future of our planet. It's one of the most amazing places {10} Earth.",
            ],
            gaps: [
              {
                options: [
                  "across",
                  "over",
                  "through",
                ],
                answer: 2,
              },
              {
                options: [
                  "than",
                  "that",
                  "as",
                ],
                answer: 0,
              },
              {
                options: [
                  "which",
                  "who",
                  "what",
                ],
                answer: 1,
              },
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
                  "who",
                  "where",
                  "which",
                ],
                answer: 2,
              },
              {
                options: [
                  "calling",
                  "called",
                  "calls",
                ],
                answer: 1,
              },
              {
                options: [
                  "of",
                  "in",
                  "at",
                ],
                answer: 1,
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
                  "protect",
                  "protecting",
                  "protects",
                ],
                answer: 0,
              },
              {
                options: [
                  "in",
                  "on",
                  "at",
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
              "Freya's grandfather is a beekeeper. He has twenty beehives in a field behind his house in the countryside.",
              "Last summer, Freya helped him collect the honey. She wore a special white suit and a hat with a net, so the bees couldn't sting her. Grandpa showed her how to take the honey out of the hive without hurting the bees.",
              "They collected forty jars of honey. Freya made labels for the jars with a picture of a bee. They sold the honey at the village market. Freya used her money to buy a book about insects.",
            ],
            items: [
              {
                question: "Freya's grandfather is ______.",
                answers: [
                  "a beekeeper",
                  "beekeeper",
                ],
              },
              {
                question: "He has twenty beehives in ______.",
                answers: [
                  "a field",
                  "a field behind his house",
                  "the field",
                ],
              },
              {
                question: "Freya wore a special white suit and ______.",
                answers: [
                  "a hat with a net",
                  "a hat",
                ],
              },
              {
                question: "Grandpa showed her how to take the honey out ______.",
                answers: [
                  "without hurting the bees",
                  "of the hive",
                ],
              },
              {
                question: "They collected ______.",
                answers: [
                  "forty jars of honey",
                  "40 jars of honey",
                  "forty jars",
                ],
              },
              {
                question: "Freya made labels with ______.",
                answers: [
                  "a picture of a bee",
                  "a bee",
                ],
              },
              {
                question: "Freya bought ______ with her money.",
                answers: [
                  "a book about insects",
                  "a book",
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
            title: "Our class trip to the farm",
            text: [
              "Last week, our class went {1} a trip to a farm. When we arrived, the farmer showed us {2} the farm. We saw cows, pigs, sheep and lots of chickens. I helped the farmer collect eggs. There were {3} many eggs that I needed two baskets! Then we had a picnic {4} the field. After lunch, we fed the baby lambs with bottles of milk. It was the {5} day of the year!",
            ],
            answers: [
              [
                "on",
              ],
              [
                "around",
                "round",
              ],
              [
                "so",
              ],
              [
                "in",
              ],
              [
                "best",
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
                e: "👧📖🌙",
                label: "1",
              },
              {
                e: "👧😴📖",
                label: "2",
              },
              {
                e: "👩🛏️📖😊",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Ella was reading a book in bed late at night. She was very tired and she fell asleep with the book on her face. Her mum came into the room, took the book away and turned off the light. She smiled at her sleeping daughter.",
          },
        },
      ],
    },
  ],
};
