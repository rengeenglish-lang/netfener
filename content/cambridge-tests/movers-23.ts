import type { CambridgeTest } from "./types";

/** A1 Movers practice test 23 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_23: CambridgeTest = {
  id: "movers-23",
  level: "movers",
  no: 23,
  title: "A1 Movers · Practice Test 23",
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
                word: "a painter",
                e: "🎨",
              },
              {
                word: "an envelope",
                e: "✉️",
              },
              {
                word: "a restaurant",
                e: "🍽️",
              },
              {
                word: "a jungle",
                e: "🌴",
              },
              {
                word: "a crocodile",
                e: "🐊",
              },
              {
                word: "a bowl",
                e: "🥣",
              },
              {
                word: "a tooth",
                e: "🦷",
              },
              {
                word: "a skirt",
                e: "👗",
              },
            ],
            items: [
              {
                text: "This person makes pictures with colours.",
                answer: "a painter",
              },
              {
                text: "You put a letter in this before you send it.",
                answer: "an envelope",
              },
              {
                text: "You go here to eat a meal that someone cooks for you.",
                answer: "a restaurant",
              },
              {
                text: "This hot place has lots of trees and plants.",
                answer: "a jungle",
              },
              {
                text: "This dangerous animal lives in rivers and has big teeth.",
                answer: "a crocodile",
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
              "Ella",
              "Sam",
            ],
            items: [
              {
                line: "Sam, what did you do at the weekend?",
                options: [
                  "I'm fine.",
                  "It's Sunday.",
                  "I went to the cinema with my cousins.",
                ],
                answer: 2,
              },
              {
                line: "What film did you see?",
                options: [
                  "At three o'clock.",
                  "A film about a robot.",
                  "With popcorn.",
                ],
                answer: 1,
              },
              {
                line: "Was it good?",
                options: [
                  "It's long.",
                  "Yes, it was very funny.",
                  "No, I'm not.",
                ],
                answer: 1,
              },
              {
                line: "Did you eat anything?",
                options: [
                  "At the cinema.",
                  "It's dark.",
                  "Popcorn and an orange juice.",
                ],
                answer: 2,
              },
              {
                line: "I want to see it too!",
                options: [
                  "You can come with me next week.",
                  "It's a robot.",
                  "I don't know.",
                ],
                answer: 0,
              },
              {
                line: "Great, thanks!",
                options: [
                  "It's a film.",
                  "You're welcome.",
                  "Yes, it is.",
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
              "Bill is a little brown {1}. He lives on a farm with lots of other animals. Every day, Bill plays with the farmer's {2}, Lucy.",
              "One day, Bill went into the forest. He chased a {3}, but it ran up a tree. Then it got dark and Bill was {4}. He didn't know the way home.",
              "Then he heard Lucy calling his name. Bill barked and Lucy found him. She took him home and gave him a big {5} for dinner.",
            ],
            bank: [
              {
                word: "dog",
                e: "🐕",
              },
              {
                word: "daughter",
                e: "👧",
              },
              {
                word: "squirrel",
                e: "🐿️",
              },
              {
                word: "scared",
                e: "😨",
              },
              {
                word: "bone",
                e: "🦴",
              },
              {
                word: "cinema",
                e: "🎬",
              },
              {
                word: "pencil",
                e: "✏️",
              },
              {
                word: "bored",
                e: "😐",
              },
            ],
            answers: [
              "dog",
              "daughter",
              "squirrel",
              "scared",
              "bone",
            ],
            titleQuestion: {
              options: [
                "Bill gets lost",
                "A day at the cinema",
                "Lucy's new pencil",
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
              "Penguins are birds, but they can't fly. Most penguins live in the south of the world, {1} it is very cold.",
              "Penguins swim very well. They use their wings {2} swim and their feet to change direction. They can stay under the water for {3} twenty minutes.",
              "Penguins live in big groups. In winter, they stand close {4} each other to keep warm. Father penguins look after the eggs {5} the mothers find food.",
            ],
            gaps: [
              {
                options: [
                  "which",
                  "who",
                  "where",
                ],
                answer: 2,
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
                  "on",
                  "about",
                  "in",
                ],
                answer: 1,
              },
              {
                options: [
                  "to",
                  "at",
                  "in",
                ],
                answer: 0,
              },
              {
                options: [
                  "because",
                  "so",
                  "while",
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
              "Mark's grandpa has got a small boat. Every Saturday in summer, they go fishing on the lake near Grandpa's house.",
              "Last Saturday, they went out early in the morning. The water was very quiet. After an hour, Mark caught a big silver fish. It was the biggest fish he ever caught!",
              "Grandpa took a photo of Mark with the fish. Then they put the fish back in the water. At home, Grandma made pancakes for breakfast.",
            ],
            items: [
              {
                question: "What has Mark's grandpa got?",
                answers: [
                  "a small boat",
                  "a boat",
                  "boat",
                ],
              },
              {
                question: "Where do they go fishing?",
                answers: [
                  "on the lake",
                  "the lake",
                  "on the lake near grandpa's house",
                ],
              },
              {
                question: "When did they go out last Saturday?",
                answers: [
                  "early in the morning",
                  "in the morning",
                  "early",
                ],
              },
              {
                question: "When did Mark catch the fish?",
                answers: [
                  "after an hour",
                ],
              },
              {
                question: "What colour was the fish?",
                answers: [
                  "silver",
                ],
              },
              {
                question: "What did they do with the fish?",
                answers: [
                  "put it back in the water",
                  "put it back",
                  "put the fish back in the water",
                ],
              },
              {
                question: "What did Grandma make?",
                answers: [
                  "pancakes",
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
                  e: "⛱️",
                  x: 18,
                  y: 50,
                  size: 3,
                },
                {
                  e: "👴",
                  x: 22,
                  y: 66,
                  size: 2.6,
                },
                {
                  e: "👦",
                  x: 46,
                  y: 66,
                  size: 2.4,
                },
                {
                  e: "🪣",
                  x: 56,
                  y: 80,
                  size: 1.6,
                },
                {
                  e: "⛵",
                  x: 72,
                  y: 30,
                  size: 2.2,
                },
                {
                  e: "🐬",
                  x: 84,
                  y: 46,
                  size: 1.8,
                },
              ],
            },
            prompts: [
              "Who is under the umbrella?",
              "What has the boy got?",
              "What animal is in the sea?",
              "Write one sentence about the boat.",
              "Write one sentence about the boy.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "The grandfather is under the umbrella. The boy has got a bucket. There is a dolphin in the sea. The boat is white and it is on the sea. The boy is playing with the sand.",
          },
        },
      ],
    },
  ],
};
