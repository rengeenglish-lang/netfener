import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 8 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_8: CambridgeTest = {
  id: "flyers-8",
  level: "flyers",
  no: 8,
  title: "A2 Flyers · Practice Test 8",
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
                word: "a necklace",
                e: "📿",
              },
              {
                word: "a museum",
                e: "🏛️",
              },
              {
                word: "a newspaper",
                e: "📰",
              },
              {
                word: "a map",
                e: "🗺️",
              },
              {
                word: "a mechanic",
                e: "🔧",
              },
              {
                word: "a desert",
                e: "🏜️",
              },
              {
                word: "a pyramid",
                e: "🔺",
              },
              {
                word: "a magazine",
                e: "📖",
              },
              {
                word: "a comet",
                e: "☄️",
              },
              {
                word: "a factory",
                e: "🏭",
              },
              {
                word: "a helmet",
                e: "⛑️",
              },
              {
                word: "a penguin",
                e: "🐧",
              },
              {
                word: "an envelope",
                e: "✉️",
              },
            ],
            items: [
              {
                text: "This person does experiments in a laboratory.",
                answer: "a scientist",
              },
              {
                text: "You wear this around your neck.",
                answer: "a necklace",
              },
              {
                text: "You can see very old things in this building.",
                answer: "a museum",
              },
              {
                text: "You read this every day to find out the news.",
                answer: "a newspaper",
              },
              {
                text: "This helps you find your way in a new place.",
                answer: "a map",
              },
              {
                text: "This person repairs cars and motorbikes.",
                answer: "a mechanic",
              },
              {
                text: "This is a very dry place with lots of sand.",
                answer: "a desert",
              },
              {
                text: "People in Egypt built these a long time ago.",
                answer: "a pyramid",
              },
              {
                text: "People make cars or clothes in this big building.",
                answer: "a factory",
              },
              {
                text: "You should wear this on your head when you ride a bike.",
                answer: "a helmet",
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
              "Emma",
              "Mr Wood",
            ],
            items: [
              {
                line: "Excuse me, Mr Wood. Is it true that you used to be a pilot?",
                options: [
                  "Yes, I flew planes for thirty years.",
                  "I'm flying tomorrow.",
                  "It's a big plane.",
                ],
                answer: 0,
              },
              {
                line: "Which countries did you visit?",
                options: [
                  "By plane.",
                  "Almost every country in the world!",
                  "For a week.",
                ],
                answer: 1,
              },
              {
                line: "What was your favourite place?",
                options: [
                  "Japan. The mountains are beautiful.",
                  "I've been to the airport.",
                  "I liked flying.",
                ],
                answer: 0,
              },
              {
                line: "Was it difficult to become a pilot?",
                options: [
                  "It's very high.",
                  "I don't fly any more.",
                  "Yes, I had to study for a long time.",
                ],
                answer: 2,
              },
              {
                line: "I'd like to be a pilot one day.",
                options: [
                  "I'm a pilot.",
                  "Work hard and you can do it!",
                  "It's a long way.",
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
              "Mia loved animals, so she was very excited when her aunt invited her to {1} at the animal hospital where she worked.",
              "On Monday morning, a man brought in a large {2}. It had a bad leg after a car hit it. Mia's aunt looked after it carefully. Mia gave it food and {3} every day.",
              "After two weeks, the bird was much {4}. Mia and her aunt took it to a field near the forest. When they opened the box, the bird flew high into the sky. Mia felt very {5}. 'I want to be a vet like you,' she told her aunt.",
            ],
            bank: [
              {
                word: "help",
                e: "🤝",
              },
              {
                word: "owl",
                e: "🦉",
              },
              {
                word: "water",
                e: "💧",
              },
              {
                word: "better",
                e: "👍",
              },
              {
                word: "proud",
                e: "😊",
              },
              {
                word: "rabbit",
                e: "🐇",
              },
              {
                word: "worse",
                e: "👎",
              },
              {
                word: "bored",
                e: "😐",
              },
            ],
            answers: [
              "help",
              "owl",
              "water",
              "better",
              "proud",
            ],
            titleQuestion: {
              options: [
                "Mia helps an owl",
                "A trip to the zoo",
                "Mia's aunt buys a car",
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
            title: "Volcanoes",
            text: [
              "A volcano is a mountain {1} hot liquid rock comes out from under the ground. This hot rock is called lava.",
              "There are about 1,500 active volcanoes in the world. Many of them are {2} the Pacific Ocean. Some volcanoes are under the sea, {3} they can make new islands!",
              "When a volcano erupts, lava, smoke and ash come out {4} the top. Lava is very hot. It can be more than 1,000 degrees. It destroys everything {5} its way.",
              "Scientists study volcanoes to understand when they might erupt. They use special machines to measure {6} the ground is moving. This helps them warn people {7} live near the volcano.",
              "Volcanoes are dangerous, but they are also useful. The ground near a volcano is very good {8} growing fruit and vegetables. Lots of tourists visit volcanoes every year {9} they are amazing to see. Mount Etna in Italy is one of the most {10} volcanoes in Europe.",
            ],
            gaps: [
              {
                options: [
                  "which",
                  "what",
                  "where",
                ],
                answer: 2,
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
                  "but",
                  "and",
                  "or",
                ],
                answer: 1,
              },
              {
                options: [
                  "off",
                  "from",
                  "of",
                ],
                answer: 2,
              },
              {
                options: [
                  "in",
                  "on",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "that",
                  "if",
                  "what",
                ],
                answer: 1,
              },
              {
                options: [
                  "who",
                  "which",
                  "where",
                ],
                answer: 0,
              },
              {
                options: [
                  "at",
                  "to",
                  "for",
                ],
                answer: 2,
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
                  "famous",
                  "fame",
                  "famously",
                ],
                answer: 0,
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
              "Ben lives in a small village in the mountains. There isn't a secondary school in his village, so he has to travel to the town every day.",
              "Every morning, Ben gets up at six o'clock. He walks down the hill to the bus stop with his friend Tim. The bus journey takes forty-five minutes. Ben usually reads a book or does his homework on the bus.",
              "In winter, there is a lot of snow. Sometimes the bus can't drive up the mountain road. On those days, Ben has lessons on his computer at home. He likes this, but he misses his friends.",
            ],
            items: [
              {
                question: "There isn't a secondary school in ______.",
                answers: [
                  "his village",
                  "ben's village",
                  "the village",
                ],
              },
              {
                question: "Ben gets up at ______ every morning.",
                answers: [
                  "six o'clock",
                  "6 o'clock",
                  "six",
                  "6",
                ],
              },
              {
                question: "Ben walks to the bus stop with ______.",
                answers: [
                  "his friend tim",
                  "tim",
                  "his friend",
                ],
              },
              {
                question: "The bus journey takes ______.",
                answers: [
                  "forty-five minutes",
                  "45 minutes",
                  "forty five minutes",
                ],
              },
              {
                question: "On the bus, Ben reads a book or ______.",
                answers: [
                  "does his homework",
                  "does homework",
                ],
              },
              {
                question: "In winter, there is ______.",
                answers: [
                  "a lot of snow",
                  "lots of snow",
                  "snow",
                ],
              },
              {
                question: "When the bus can't come, Ben has lessons ______.",
                answers: [
                  "on his computer",
                  "at home",
                  "on his computer at home",
                  "on the computer",
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
            title: "Our class trip",
            text: [
              "Last Friday, our class went on a trip to the science museum. We travelled there {1} train. In the museum, we saw a real rocket and a model of the moon. My favourite part {2} the room about dinosaurs. There was a dinosaur skeleton that was taller {3} a house! We had lunch in the museum garden. I'd {4} to go back there with my family. It was the {5} school trip ever!",
            ],
            answers: [
              [
                "by",
              ],
              [
                "was",
              ],
              [
                "than",
              ],
              [
                "like",
                "love",
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
                e: "👧🏖️🏰",
                label: "1",
              },
              {
                e: "🌊🏰😢",
                label: "2",
              },
              {
                e: "👧👨🏰😀",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Anna built a big sandcastle on the beach. Then a big wave came and destroyed it. Anna was very sad and started to cry. Her dad helped her build a new sandcastle far from the sea. It was even bigger than the first one.",
          },
        },
      ],
    },
  ],
};
