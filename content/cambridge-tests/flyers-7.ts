import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 7 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_7: CambridgeTest = {
  id: "flyers-7",
  level: "flyers",
  no: 7,
  title: "A2 Flyers · Practice Test 7",
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
                word: "a chemist",
                e: "💊",
              },
              {
                word: "a bracelet",
                e: "📿",
              },
              {
                word: "a theatre",
                e: "🎭",
              },
              {
                word: "a postcard",
                e: "🖼️",
              },
              {
                word: "a compass",
                e: "🧭",
              },
              {
                word: "an astronaut",
                e: "🧑‍🚀",
              },
              {
                word: "a volcano",
                e: "🌋",
              },
              {
                word: "a pillow",
                e: "🛏️",
              },
              {
                word: "a timetable",
                e: "🗓️",
              },
              {
                word: "a rocket",
                e: "🚀",
              },
              {
                word: "a stadium",
                e: "🏟️",
              },
              {
                word: "a saucepan",
                e: "🍲",
              },
              {
                word: "an octopus",
                e: "🐙",
              },
              {
                word: "a suitcase",
                e: "🧳",
              },
            ],
            items: [
              {
                text: "You can buy medicine from this person.",
                answer: "a chemist",
              },
              {
                text: "You wear this around your wrist.",
                answer: "a bracelet",
              },
              {
                text: "You can watch plays and shows in this building.",
                answer: "a theatre",
              },
              {
                text: "People send this with a picture on it when they are on holiday.",
                answer: "a postcard",
              },
              {
                text: "This shows you which way is north.",
                answer: "a compass",
              },
              {
                text: "This person travels into space.",
                answer: "an astronaut",
              },
              {
                text: "This mountain sometimes has fire and hot rock coming out of the top.",
                answer: "a volcano",
              },
              {
                text: "This tells you when buses or trains leave.",
                answer: "a timetable",
              },
              {
                text: "People watch football matches in this big place.",
                answer: "a stadium",
              },
              {
                text: "This sea animal has got eight long arms.",
                answer: "an octopus",
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
              "Daniel",
            ],
            items: [
              {
                line: "Daniel, have you finished your science homework?",
                options: [
                  "Not yet. It's really difficult.",
                  "Yes, I'd love to.",
                  "It's on Tuesday.",
                ],
                answer: 0,
              },
              {
                line: "Would you like me to help you?",
                options: [
                  "I helped yesterday.",
                  "That would be great, thanks!",
                  "No, it's science.",
                ],
                answer: 1,
              },
              {
                line: "Which question are you on?",
                options: [
                  "The one about the moon.",
                  "It's my homework.",
                  "At half past four.",
                ],
                answer: 0,
              },
              {
                line: "I read a book about the moon last month.",
                options: [
                  "It's very bright.",
                  "I've never read it.",
                  "Really? What did you learn?",
                ],
                answer: 2,
              },
              {
                line: "Shall we go to the library after school?",
                options: [
                  "I don't know the library.",
                  "It was closed.",
                  "Good idea. I'll meet you at the gate.",
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
              "Every year, Oliver's town has a boat race on the river. This year, Oliver and his best friend Kate decided to {1} their own boat.",
              "They used old plastic bottles and some pieces of {2}. It took them three weeks. On the day of the race, the weather was {3}. There was a strong wind and it was raining. Lots of the boats turned over, and people fell into the water.",
              "Oliver and Kate's boat was slow, but it didn't sink. They were the only team that {4} the race! Everybody cheered when they crossed the line. The mayor gave them a {5} for the best boat.",
            ],
            bank: [
              {
                word: "build",
                e: "🔨",
              },
              {
                word: "wood",
                e: "🪵",
              },
              {
                word: "terrible",
                e: "🌧️",
              },
              {
                word: "finished",
                e: "🏁",
              },
              {
                word: "prize",
                e: "🏆",
              },
              {
                word: "paint",
                e: "🎨",
              },
              {
                word: "sunny",
                e: "☀️",
              },
              {
                word: "lost",
                e: "❓",
              },
            ],
            answers: [
              "build",
              "wood",
              "terrible",
              "finished",
              "prize",
            ],
            titleQuestion: {
              options: [
                "A sunny day at the beach",
                "Kate loses her bike",
                "The plastic bottle boat",
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
            title: "Chocolate",
            text: [
              "Chocolate comes from the seeds of the cacao tree. These trees grow in hot countries {1} lots of rain, like Ghana and Brazil.",
              "People in Central America drank chocolate more {2} three thousand years ago. Their chocolate drink wasn't sweet. It was bitter and sometimes they {3} chilli to it!",
              "In the sixteenth century, people brought chocolate {4} Europe. They added sugar, and soon chocolate drinks became very popular. The first chocolate bars {5} made in England in 1847.",
              "Today, people all over the world eat chocolate. The country {6} people eat the most chocolate is Switzerland. Each person there eats about nine kilos {7} year!",
              "Chocolate tastes good, but you shouldn't eat too {8}. It has lots of sugar and fat. Dark chocolate is {9} for you than milk chocolate, because it has less sugar. So next time you {10} a chocolate bar, maybe choose a dark one!",
            ],
            gaps: [
              {
                options: [
                  "of",
                  "by",
                  "with",
                ],
                answer: 2,
              },
              {
                options: [
                  "that",
                  "as",
                  "than",
                ],
                answer: 2,
              },
              {
                options: [
                  "added",
                  "add",
                  "adding",
                ],
                answer: 0,
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
                  "were",
                  "was",
                  "are",
                ],
                answer: 0,
              },
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
                  "the",
                  "a",
                  "one",
                ],
                answer: 1,
              },
              {
                options: [
                  "many",
                  "much",
                  "lot",
                ],
                answer: 1,
              },
              {
                options: [
                  "good",
                  "best",
                  "better",
                ],
                answer: 2,
              },
              {
                options: [
                  "buy",
                  "bought",
                  "buying",
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
              "Nick's grandfather was a famous photographer. When he died, he left Nick an old camera and a box of photos.",
              "Nick looked at the photos for hours. Some of them showed his town a hundred years ago. There were horses in the streets instead of cars, and the market square had a big fountain. Nick decided to take photos of the same places today.",
              "He spent the summer walking around the town with his camera. Then he put the old and new photos next to each other on a website. Lots of people visited the website. The local newspaper wrote a story about Nick, and the town museum asked him to make an exhibition.",
            ],
            items: [
              {
                question: "Nick's grandfather was a famous ______.",
                answers: [
                  "photographer",
                ],
              },
              {
                question: "Nick's grandfather left him an old camera and ______.",
                answers: [
                  "a box of photos",
                  "box of photos",
                  "some photos",
                  "photos",
                ],
              },
              {
                question: "In the old photos, there were ______ in the streets.",
                answers: [
                  "horses",
                ],
              },
              {
                question: "The market square had a ______.",
                answers: [
                  "big fountain",
                  "fountain",
                ],
              },
              {
                question: "Nick spent the summer walking around ______.",
                answers: [
                  "the town",
                  "town",
                ],
              },
              {
                question: "Nick put the photos on ______.",
                answers: [
                  "a website",
                  "website",
                  "the website",
                ],
              },
              {
                question: "The town museum asked Nick to ______.",
                answers: [
                  "make an exhibition",
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
            title: "My hobby",
            text: [
              "My name is Ana and my favourite hobby is skateboarding. I started {1} I was seven years old. At first, I fell off all the time, but now I can do lots {2} tricks. I go to the skate park near my house {3} Saturday with my brother. Last month, I entered a competition and I won second prize! I want to {4} a professional skateboarder one day. My parents say I must always wear {5} helmet.",
            ],
            answers: [
              [
                "when",
              ],
              [
                "of",
              ],
              [
                "every",
                "on",
                "each",
              ],
              [
                "be",
                "become",
              ],
              [
                "a",
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
                e: "👦🌳🐱",
                label: "1",
              },
              {
                e: "🧑‍🚒🪜🌳",
                label: "2",
              },
              {
                e: "👦🐱😊",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "One day, Sam saw a small cat at the top of a tall tree. It couldn't get down. Sam called the firefighters. A firefighter climbed up a ladder and brought the cat down. Sam was very happy and gave the cat some milk.",
          },
        },
      ],
    },
  ],
};
