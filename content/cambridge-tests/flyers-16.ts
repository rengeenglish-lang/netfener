import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 16 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_16: CambridgeTest = {
  id: "flyers-16",
  level: "flyers",
  no: 16,
  title: "A2 Flyers · Practice Test 16",
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
                word: "a designer",
                e: "✏️",
              },
              {
                word: "a tie",
                e: "👔",
              },
              {
                word: "a bridge",
                e: "🌉",
              },
              {
                word: "a poster",
                e: "🪧",
              },
              {
                word: "a remote control",
                e: "🎛️",
              },
              {
                word: "a police officer",
                e: "👮",
              },
              {
                word: "a cliff",
                e: "🪨",
              },
              {
                word: "a curtain",
                e: "🪟",
              },
              {
                word: "a novel",
                e: "📗",
              },
              {
                word: "an astronaut",
                e: "🧑‍🚀",
              },
              {
                word: "a post office",
                e: "🏤",
              },
              {
                word: "a kettle",
                e: "🫖",
              },
              {
                word: "a peacock",
                e: "🦚",
              },
              {
                word: "a key",
                e: "🔑",
              },
            ],
            items: [
              {
                text: "This person makes plans and drawings for new clothes or buildings.",
                answer: "a designer",
              },
              {
                text: "Some men wear this around their neck with a shirt.",
                answer: "a tie",
              },
              {
                text: "This goes over a river so people can cross it.",
                answer: "a bridge",
              },
              {
                text: "You can put this big picture on your bedroom wall.",
                answer: "a poster",
              },
              {
                text: "You use this to change the channel on the television.",
                answer: "a remote control",
              },
              {
                text: "This person helps when there is a crime.",
                answer: "a police officer",
              },
              {
                text: "This is high rock next to the sea.",
                answer: "a cliff",
              },
              {
                text: "You close this over the window at night.",
                answer: "a curtain",
              },
              {
                text: "You use this to boil water for tea.",
                answer: "a kettle",
              },
              {
                text: "This bird has beautiful long blue and green feathers.",
                answer: "a peacock",
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
              "Lucy",
              "Dad",
            ],
            items: [
              {
                line: "Dad, can we get a cat?",
                options: [
                  "I've got a dog.",
                  "Hmm. Who's going to look after it?",
                  "It's black.",
                ],
                answer: 1,
              },
              {
                line: "I will! I'll feed it every day.",
                options: [
                  "It eats fish.",
                  "And who will clean up after it?",
                  "I fed it yesterday.",
                ],
                answer: 1,
              },
              {
                line: "Me too, I promise.",
                options: [
                  "I promised.",
                  "It's a promise.",
                  "OK, let's talk to Mum about it.",
                ],
                answer: 2,
              },
              {
                line: "Can we go to the animal centre this weekend?",
                options: [
                  "Maybe on Sunday, if Mum agrees.",
                  "We went there.",
                  "It's very big.",
                ],
                answer: 0,
              },
              {
                line: "Thank you, Dad!",
                options: [
                  "Thank you too.",
                  "Don't thank me yet!",
                  "It was nothing.",
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
              "Sam's grandfather was a {1} when he was young. He sailed all over the world on big ships.",
              "One rainy afternoon, Sam found a {2} in Grandpa's attic. It was full of old photos and maps. There was a picture of Grandpa standing next to a huge {3} in India. 'I rode that elephant!' laughed Grandpa.",
              "Grandpa told Sam lots of exciting {4} about his travels. Sam wrote them all down in a notebook. At school, he gave a {5} about his grandfather's adventures. His teacher gave him the best mark in the class.",
            ],
            bank: [
              {
                word: "sailor",
                e: "⚓",
              },
              {
                word: "trunk",
                e: "🧳",
              },
              {
                word: "elephant",
                e: "🐘",
              },
              {
                word: "stories",
                e: "📖",
              },
              {
                word: "talk",
                e: "🗣️",
              },
              {
                word: "doctor",
                e: "🩺",
              },
              {
                word: "tiger",
                e: "🐯",
              },
              {
                word: "songs",
                e: "🎵",
              },
            ],
            answers: [
              "sailor",
              "trunk",
              "elephant",
              "stories",
              "talk",
            ],
            titleQuestion: {
              options: [
                "A visit to India",
                "Sam's new notebook",
                "Grandpa's adventures",
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
            title: "Sleep",
            text: [
              "Everybody needs sleep. Children need about ten hours of sleep {1} night, but adults only need about eight.",
              "When we sleep, our bodies rest and grow. Our brains also sort out everything we learned {2} the day. That's why sleep is important {3} students!",
              "If we don't sleep enough, we feel tired and we can't think clearly. We might also feel angry or sad {4} easily.",
              "Animals sleep too, but in different ways. Some animals, like dolphins, only sleep with half of {5} brain at a time. Giraffes only sleep about two hours a day, {6} koalas can sleep for twenty-two hours!",
              "Here are some tips for good sleep. Go to bed at the same time every night. Don't use your phone {7} bed, because the light keeps you awake. Make sure your bedroom is dark {8} quiet. And don't eat a big meal just {9} you go to bed. Sweet {10}!",
            ],
            gaps: [
              {
                options: [
                  "every",
                  "the",
                  "many",
                ],
                answer: 0,
              },
              {
                options: [
                  "for",
                  "during",
                  "while",
                ],
                answer: 1,
              },
              {
                options: [
                  "for",
                  "to",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "most",
                  "much",
                  "more",
                ],
                answer: 2,
              },
              {
                options: [
                  "its",
                  "they",
                  "their",
                ],
                answer: 2,
              },
              {
                options: [
                  "but",
                  "so",
                  "because",
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
                  "and",
                  "or",
                  "but",
                ],
                answer: 0,
              },
              {
                options: [
                  "after",
                  "until",
                  "before",
                ],
                answer: 2,
              },
              {
                options: [
                  "dream",
                  "dreams",
                  "dreaming",
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
              "Ruby's town was having a big birthday party. It was five hundred years old! Everyone in the town was invited to a picnic in the main square.",
              "Ruby's class made a giant cake for the party. It was in the shape of the town's old castle. It took them three days to make. They used fifty eggs and ten kilos of flour.",
              "At the party, the mayor cut the cake. There was enough for four hundred people! In the evening, there were fireworks over the river. Ruby said it was the best day she could remember.",
            ],
            items: [
              {
                question: "Ruby's town was ______ years old.",
                answers: [
                  "five hundred",
                  "500",
                ],
              },
              {
                question: "The picnic was in ______.",
                answers: [
                  "the main square",
                  "main square",
                ],
              },
              {
                question: "Ruby's class made ______ for the party.",
                answers: [
                  "a giant cake",
                  "a cake",
                  "giant cake",
                ],
              },
              {
                question: "The cake was in the shape of ______.",
                answers: [
                  "the town's old castle",
                  "the old castle",
                  "a castle",
                  "the castle",
                ],
              },
              {
                question: "It took the class ______ to make the cake.",
                answers: [
                  "three days",
                  "3 days",
                ],
              },
              {
                question: "______ cut the cake at the party.",
                answers: [
                  "the mayor",
                  "mayor",
                ],
              },
              {
                question: "In the evening, there were fireworks ______.",
                answers: [
                  "over the river",
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
            title: "My grandmother",
            text: [
              "My grandmother is eighty years old, but she is very active. She goes swimming every morning and she walks {1} the park with her dog every afternoon. She has lived in the same house {2} fifty years. Her garden is full {3} beautiful flowers. When I visit her, she always makes me a cup of hot chocolate. She tells me stories about when she {4} a girl. I love spending time {5} her.",
            ],
            answers: [
              [
                "in",
                "around",
                "through",
                "to",
              ],
              [
                "for",
              ],
              [
                "of",
              ],
              [
                "was",
              ],
              [
                "with",
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
                e: "👩🛒🍎",
                label: "1",
              },
              {
                e: "🍎🍎🍎⬇️😮",
                label: "2",
              },
              {
                e: "👦🍎🤝👩",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Mrs Smith was shopping at the market. Suddenly, her bag broke and all her apples fell on the ground. A boy saw this and helped her pick up the apples. Mrs Smith thanked him and gave him an apple.",
          },
        },
      ],
    },
  ],
};
