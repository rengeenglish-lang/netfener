import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 23 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_23: CambridgeTest = {
  id: "flyers-23",
  level: "flyers",
  no: 23,
  title: "A2 Flyers · Practice Test 23",
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
                word: "a lawyer",
                e: "⚖️",
              },
              {
                word: "a zip",
                e: "🤐",
              },
              {
                word: "a skyscraper",
                e: "🏙️",
              },
              {
                word: "a menu",
                e: "📜",
              },
              {
                word: "headphones",
                e: "🎧",
              },
              {
                word: "a pilot",
                e: "🧑‍✈️",
              },
              {
                word: "a glacier",
                e: "🧊",
              },
              {
                word: "a sofa",
                e: "🛋️",
              },
              {
                word: "an atlas",
                e: "🗺️",
              },
              {
                word: "a satellite",
                e: "🛰️",
              },
              {
                word: "a hospital",
                e: "🏥",
              },
              {
                word: "a microwave",
                e: "📟",
              },
              {
                word: "an ostrich",
                e: "🦤",
              },
              {
                word: "a ticket",
                e: "🎟️",
              },
            ],
            items: [
              {
                text: "This person helps people with problems about the law.",
                answer: "a lawyer",
              },
              {
                text: "You pull this up to close a jacket.",
                answer: "a zip",
              },
              {
                text: "This building is so tall it almost touches the clouds.",
                answer: "a skyscraper",
              },
              {
                text: "You read this in a restaurant to choose your food.",
                answer: "a menu",
              },
              {
                text: "This person flies passengers to different countries.",
                answer: "a pilot",
              },
              {
                text: "This is a large river of ice that moves slowly.",
                answer: "a glacier",
              },
              {
                text: "This is a book of maps.",
                answer: "an atlas",
              },
              {
                text: "This goes around the Earth and helps us watch TV and use phones.",
                answer: "a satellite",
              },
              {
                text: "Doctors and nurses work in this building.",
                answer: "a hospital",
              },
              {
                text: "This very large bird can't fly, but it can run very fast.",
                answer: "an ostrich",
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
              "Sam",
              "Mrs Lee",
            ],
            items: [
              {
                line: "Good morning, Mrs Lee. I'm sorry I'm late.",
                options: [
                  "I'm late too.",
                  "Good morning.",
                  "That's OK, Sam. What happened?",
                ],
                answer: 2,
              },
              {
                line: "The bus broke down on the way.",
                options: [
                  "I took the bus.",
                  "Oh dear. How did you get here?",
                  "It's broken.",
                ],
                answer: 1,
              },
              {
                line: "I walked the rest of the way.",
                options: [
                  "I walked here.",
                  "Well done. Sit down and open your book.",
                  "It was a long way.",
                ],
                answer: 1,
              },
              {
                line: "What page are we on?",
                options: [
                  "We're on the bus.",
                  "It's a big book.",
                  "Page forty-two. We're reading about the Romans.",
                ],
                answer: 2,
              },
              {
                line: "Thank you, Mrs Lee.",
                options: [
                  "You're welcome.",
                  "Thank you, Sam.",
                  "It's page forty.",
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
              "Every August, Rosie stays with her grandparents on their {1} in Wales. They have sheep, cows and three horses.",
              "This year, one of the horses, Star, had a baby. Rosie was there when the {2} was born. It was very wobbly and it couldn't stand up at first. But after an hour, it was walking around the {3}.",
              "Rosie's grandfather said she could choose a name for the baby horse. She thought for a long time. Finally, she chose 'Comet' because it had a white {4} on its face. Rosie can't wait to {5} Comet when he's older.",
            ],
            bank: [
              {
                word: "farm",
                e: "🚜",
              },
              {
                word: "foal",
                e: "🐴",
              },
              {
                word: "field",
                e: "🌾",
              },
              {
                word: "stripe",
                e: "➖",
              },
              {
                word: "ride",
                e: "🏇",
              },
              {
                word: "flat",
                e: "🏢",
              },
              {
                word: "kitten",
                e: "🐈",
              },
              {
                word: "swim",
                e: "🏊",
              },
            ],
            answers: [
              "farm",
              "foal",
              "field",
              "stripe",
              "ride",
            ],
            titleQuestion: {
              options: [
                "A new foal called Comet",
                "Rosie's swimming lesson",
                "A flat in the city",
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
            title: "Penguins",
            text: [
              "There are eighteen kinds of penguin, and they all live in the southern half of the world. Some live in very cold places, like Antarctica, {1} others live in warmer places, like South Africa.",
              "Penguins can't fly, but they are excellent swimmers. They use their wings {2} flippers. The fastest penguins can swim at about thirty-five kilometres an hour.",
              "Emperor penguins are the biggest. They can be more than a metre tall. They live in Antarctica, {3} the temperature can be minus sixty degrees! To stay warm, they stand close together in big groups.",
              "Emperor penguin fathers look {4} the eggs. They hold the egg on their feet for about two months and they don't eat {5} this time. The mothers go to the sea to find food.",
              "Sadly, some kinds of penguin are in danger. The ice {6} they live on is melting because the world is getting {7}. Also, people catch too {8} fish, so penguins can't find enough food. We need to protect penguins {9} it is too late. We don't want them {10} disappear.",
            ],
            gaps: [
              {
                options: [
                  "so",
                  "or",
                  "but",
                ],
                answer: 2,
              },
              {
                options: [
                  "like",
                  "as",
                  "than",
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
                  "after",
                  "for",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "while",
                  "since",
                  "during",
                ],
                answer: 2,
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
                  "warmer",
                  "warm",
                  "warmest",
                ],
                answer: 0,
              },
              {
                options: [
                  "much",
                  "many",
                  "lot",
                ],
                answer: 1,
              },
              {
                options: [
                  "before",
                  "after",
                  "until",
                ],
                answer: 0,
              },
              {
                options: [
                  "for",
                  "of",
                  "to",
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
              "Last year, Lucas's school started a vegetable garden. Lucas's class was in charge of the tomatoes and the carrots.",
              "Every morning before lessons, Lucas watered the plants with his friend Mia. At the weekends, the head teacher's husband looked after the garden. In July, they picked more than two hundred tomatoes.",
              "The school cook used the vegetables to make soup and salads for lunch. Lucas didn't like tomatoes before, but now he loves them. He has started his own small vegetable garden at home with his dad.",
            ],
            items: [
              {
                question: "Lucas's class looked after the tomatoes and ______.",
                answers: [
                  "the carrots",
                  "carrots",
                ],
              },
              {
                question: "Lucas watered the plants every morning ______.",
                answers: [
                  "before lessons",
                  "with his friend mia",
                  "with mia",
                ],
              },
              {
                question: "At the weekends, ______ looked after the garden.",
                answers: [
                  "the head teacher's husband",
                  "head teacher's husband",
                ],
              },
              {
                question: "In July, they picked more than ______.",
                answers: [
                  "two hundred tomatoes",
                  "200 tomatoes",
                ],
              },
              {
                question: "The school cook used the vegetables to make ______.",
                answers: [
                  "soup and salads",
                  "salads and soup",
                  "soup",
                ],
              },
              {
                question: "Before, Lucas didn't like ______.",
                answers: [
                  "tomatoes",
                ],
              },
              {
                question: "Lucas has started a vegetable garden at home ______.",
                answers: [
                  "with his dad",
                  "with dad",
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
            title: "My pet rabbit",
            text: [
              "I have a pet rabbit called Snowy. She's white with pink eyes. She lives {1} a big wooden house in our garden. Every morning, I give her fresh vegetables {2} water. Her favourite food is carrots, of course! In the afternoon, she runs around the garden. Last week, she dug a hole under the fence and ran {3} the neighbour's garden! We looked for her for {4} hour. Finally, we found her eating the neighbour's lettuce. Our neighbour wasn't very {5}!",
            ],
            answers: [
              [
                "in",
              ],
              [
                "and",
              ],
              [
                "into",
                "to",
              ],
              [
                "an",
                "one",
                "half",
              ],
              [
                "happy",
                "pleased",
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
                e: "👨‍👩‍👧🧺🌳",
                label: "1",
              },
              {
                e: "🐜🧺😱",
                label: "2",
              },
              {
                e: "👨‍👩‍👧🏠🥪",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "A family went to the park for a picnic. They put their food on a blanket under a tree. Then lots of ants came and climbed into the food basket. The family laughed and went home to eat their sandwiches in the kitchen.",
          },
        },
      ],
    },
  ],
};
