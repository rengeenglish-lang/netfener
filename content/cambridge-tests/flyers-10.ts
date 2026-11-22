import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 10 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_10: CambridgeTest = {
  id: "flyers-10",
  level: "flyers",
  no: 10,
  title: "A2 Flyers · Practice Test 10",
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
                word: "a waiter",
                e: "🤵",
              },
              {
                word: "a scarf",
                e: "🧣",
              },
              {
                word: "a cathedral",
                e: "⛪",
              },
              {
                word: "a postcard",
                e: "🖼️",
              },
              {
                word: "a microscope",
                e: "🔬",
              },
              {
                word: "a firefighter",
                e: "🧑‍🚒",
              },
              {
                word: "a cave",
                e: "🕳️",
              },
              {
                word: "a cushion",
                e: "🛋️",
              },
              {
                word: "a recipe",
                e: "📝",
              },
              {
                word: "a moon",
                e: "🌙",
              },
              {
                word: "a pharmacy",
                e: "💊",
              },
              {
                word: "a knife",
                e: "🔪",
              },
              {
                word: "a camel",
                e: "🐫",
              },
              {
                word: "a ticket",
                e: "🎟️",
              },
            ],
            items: [
              {
                text: "This person brings you your food in a restaurant.",
                answer: "a waiter",
              },
              {
                text: "You wear this around your neck to keep warm.",
                answer: "a scarf",
              },
              {
                text: "This is a very large and important church.",
                answer: "a cathedral",
              },
              {
                text: "Scientists use this to look at very small things.",
                answer: "a microscope",
              },
              {
                text: "This person puts out fires.",
                answer: "a firefighter",
              },
              {
                text: "This is a large hole in the side of a mountain.",
                answer: "a cave",
              },
              {
                text: "This tells you how to cook something.",
                answer: "a recipe",
              },
              {
                text: "You can see this in the sky at night. It goes around the Earth.",
                answer: "a moon",
              },
              {
                text: "This animal carries people across the desert.",
                answer: "a camel",
              },
              {
                text: "You need to buy this before you get on a train.",
                answer: "a ticket",
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
              "Sara",
              "Mr Black",
            ],
            items: [
              {
                line: "Good morning. I'd like to join the tennis club.",
                options: [
                  "I play every day.",
                  "It's a good club.",
                  "Great! How old are you?",
                ],
                answer: 2,
              },
              {
                line: "I'm eleven.",
                options: [
                  "I was eleven last year.",
                  "It's twelve o'clock.",
                  "Then you can join the junior group.",
                ],
                answer: 2,
              },
              {
                line: "When does the junior group meet?",
                options: [
                  "On Tuesdays and Thursdays after school.",
                  "In the sports centre.",
                  "For two hours.",
                ],
                answer: 0,
              },
              {
                line: "Do I need to bring my own racket?",
                options: [
                  "It's a new racket.",
                  "No, we can lend you one.",
                  "Yes, I've got one.",
                ],
                answer: 1,
              },
              {
                line: "Can I start next week?",
                options: [
                  "Of course. See you on Tuesday!",
                  "I started last week.",
                  "It's not my racket.",
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
              "Jim's class was studying the {1}. Their teacher, Mrs Hall, took them on a trip to the beach to look at the animals that lived there.",
              "The children looked in the rock pools. They found crabs, small fish and lots of beautiful {2}. Jim found a starfish. It was orange and it had five {3}.",
              "Then Mrs Hall saw a lot of {4} on the beach: plastic bottles, bags and old fishing nets. 'These are very dangerous for sea animals,' she explained. The children spent the afternoon cleaning the beach. They filled twelve big bags! The next week, there was a photo of the class in the local newspaper. Everyone was very {5}.",
            ],
            bank: [
              {
                word: "sea",
                e: "🌊",
              },
              {
                word: "shells",
                e: "🐚",
              },
              {
                word: "arms",
                e: "💪",
              },
              {
                word: "rubbish",
                e: "🗑️",
              },
              {
                word: "proud",
                e: "😊",
              },
              {
                word: "mountains",
                e: "⛰️",
              },
              {
                word: "legs",
                e: "🦵",
              },
              {
                word: "angry",
                e: "😠",
              },
            ],
            answers: [
              "sea",
              "shells",
              "arms",
              "rubbish",
              "proud",
            ],
            titleQuestion: {
              options: [
                "A day in the mountains",
                "Jim's new pet fish",
                "Cleaning the beach",
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
            title: "Bicycles",
            text: [
              "The first bicycles were made about two hundred years ago. They didn't have pedals, so people pushed them along {1} their feet.",
              "Later, bicycles had a very big front wheel and a small back wheel. They were difficult {2} ride and people often fell off. In the 1880s, bicycles started to look more {3} the bikes we have today.",
              "Today, there are more {4} one billion bicycles in the world. In some cities, like Amsterdam, there are more bikes than people! Many people ride bikes {5} work every day.",
              "Riding a bike is good for you. It makes your heart and legs {6}. It's also good for the planet, {7} bikes don't use petrol and don't make the air dirty.",
              "If you ride a bike, you should always wear a helmet. You should also {8} lights on your bike at night, so drivers can see you. And remember to look after your bike. Check the tyres often, {9} keep your bike clean. A good bike can {10} for many years.",
            ],
            gaps: [
              {
                options: [
                  "by",
                  "with",
                  "on",
                ],
                answer: 1,
              },
              {
                options: [
                  "to",
                  "for",
                  "of",
                ],
                answer: 0,
              },
              {
                options: [
                  "as",
                  "than",
                  "like",
                ],
                answer: 2,
              },
              {
                options: [
                  "that",
                  "than",
                  "as",
                ],
                answer: 1,
              },
              {
                options: [
                  "at",
                  "to",
                  "in",
                ],
                answer: 1,
              },
              {
                options: [
                  "strong",
                  "strongest",
                  "stronger",
                ],
                answer: 2,
              },
              {
                options: [
                  "because",
                  "so",
                  "but",
                ],
                answer: 0,
              },
              {
                options: [
                  "has",
                  "have",
                  "having",
                ],
                answer: 1,
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
                  "lasts",
                  "lasting",
                  "last",
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
              "Amy's family runs a small hotel by the sea. Every summer, lots of tourists stay there. Amy helps her parents in the school holidays.",
              "Her job is to welcome the guests and carry their bags to their rooms. She also helps in the kitchen at breakfast time. Amy's mum makes delicious pancakes, and the guests love them.",
              "Last summer, a famous writer stayed at the hotel for a month. She was writing a new book. Before she left, she gave Amy a signed copy of her first book. Amy read it in two days and now she wants to be a writer too.",
            ],
            items: [
              {
                question: "Amy's family has a small hotel ______.",
                answers: [
                  "by the sea",
                  "near the sea",
                ],
              },
              {
                question: "Amy helps her parents in ______.",
                answers: [
                  "the school holidays",
                  "the holidays",
                  "school holidays",
                  "the summer",
                ],
              },
              {
                question: "Amy carries the guests' bags to ______.",
                answers: [
                  "their rooms",
                  "the rooms",
                ],
              },
              {
                question: "Amy also helps in the kitchen at ______.",
                answers: [
                  "breakfast time",
                  "breakfast",
                ],
              },
              {
                question: "The guests love Amy's mum's ______.",
                answers: [
                  "pancakes",
                ],
              },
              {
                question: "The famous writer stayed at the hotel for ______.",
                answers: [
                  "a month",
                  "one month",
                ],
              },
              {
                question: "The writer gave Amy ______ of her first book.",
                answers: [
                  "a signed copy",
                  "a copy",
                  "signed copy",
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
            title: "Amazing animals",
            text: [
              "Did you know that an octopus has three hearts? Or that a snail can sleep {1} three years? Animals are amazing! The cheetah is the fastest animal {2} land. It can run at more than a hundred kilometres an hour. The blue whale is the biggest animal that has {3} lived. Its heart is as big {4} a small car! Elephants can't jump, but they {5} hear sounds through their feet.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "on",
              ],
              [
                "ever",
              ],
              [
                "as",
              ],
              [
                "can",
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
                e: "👧🐦🌳",
                label: "1",
              },
              {
                e: "🐦🪺🥚",
                label: "2",
              },
              {
                e: "👧🐣😊",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Kate saw a bird building a nest in the tree outside her window. A few days later, there were three small blue eggs in the nest. Kate watched them every day. One morning, three baby birds came out of the eggs. Kate was very excited.",
          },
        },
      ],
    },
  ],
};
