import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 21 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_21: CambridgeTest = {
  id: "flyers-21",
  level: "flyers",
  no: 21,
  title: "A2 Flyers · Practice Test 21",
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
                word: "a musician",
                e: "🎻",
              },
              {
                word: "a button",
                e: "🔘",
              },
              {
                word: "a statue",
                e: "🗿",
              },
              {
                word: "a brochure",
                e: "📄",
              },
              {
                word: "a mouse",
                e: "🖱️",
              },
              {
                word: "a soldier",
                e: "💂",
              },
              {
                word: "a pond",
                e: "🦆",
              },
              {
                word: "a drawer",
                e: "🗄️",
              },
              {
                word: "a comic",
                e: "💥",
              },
              {
                word: "a spaceship",
                e: "🛸",
              },
              {
                word: "a bus station",
                e: "🚏",
              },
              {
                word: "a fridge",
                e: "🧊",
              },
              {
                word: "a parrot",
                e: "🦜",
              },
              {
                word: "a torch",
                e: "🔦",
              },
            ],
            items: [
              {
                text: "This person plays an instrument.",
                answer: "a musician",
              },
              {
                text: "You use this to close your coat or shirt.",
                answer: "a button",
              },
              {
                text: "This is a model of a person, made of stone or metal.",
                answer: "a statue",
              },
              {
                text: "You move this with your hand to use a computer.",
                answer: "a mouse",
              },
              {
                text: "This person is in the army.",
                answer: "a soldier",
              },
              {
                text: "This is a small area of water. Ducks often swim in it.",
                answer: "a pond",
              },
              {
                text: "You can keep socks and T-shirts in this.",
                answer: "a drawer",
              },
              {
                text: "People might travel to other planets in this one day.",
                answer: "a spaceship",
              },
              {
                text: "You keep milk and butter cold in this.",
                answer: "a fridge",
              },
              {
                text: "This colourful bird can copy what people say.",
                answer: "a parrot",
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
              "Kate",
              "Mum",
            ],
            items: [
              {
                line: "Mum, I want to start learning the guitar.",
                options: [
                  "I play the guitar.",
                  "That's a great idea! Who will teach you?",
                  "It's very loud.",
                ],
                answer: 1,
              },
              {
                line: "My friend's brother gives lessons.",
                options: [
                  "He's my friend.",
                  "I gave a lesson.",
                  "How much does he charge?",
                ],
                answer: 2,
              },
              {
                line: "Ten pounds for an hour.",
                options: [
                  "That sounds fair. When can you start?",
                  "It's an hour.",
                  "I've got ten pounds.",
                ],
                answer: 0,
              },
              {
                line: "Next Tuesday, after school.",
                options: [
                  "It's Tuesday today.",
                  "OK, but you must practise every day.",
                  "I started yesterday.",
                ],
                answer: 1,
              },
              {
                line: "I promise I will!",
                options: [
                  "Good. Let's find you a guitar then.",
                  "I promised.",
                  "You will.",
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
              "George was the {1} boy in his class. He never spoke in lessons and he always sat alone at lunch.",
              "One day, the teacher asked everyone to bring something {2} to show the class. George brought a small box. Inside, there was a {3} that he found on the beach. It was about a hundred million years old!",
              "Everyone wanted to know more. George explained how he found it and how scientists study old rocks. The other children listened {4}. After that day, lots of children sat with George at lunch. He started a rock {5} at school, and now it has twenty members.",
            ],
            bank: [
              {
                word: "quietest",
                e: "🤫",
              },
              {
                word: "interesting",
                e: "🤔",
              },
              {
                word: "fossil",
                e: "🦴",
              },
              {
                word: "carefully",
                e: "👂",
              },
              {
                word: "club",
                e: "🏢",
              },
              {
                word: "noisiest",
                e: "📢",
              },
              {
                word: "sandwich",
                e: "🥪",
              },
              {
                word: "party",
                e: "🎉",
              },
            ],
            answers: [
              "quietest",
              "interesting",
              "fossil",
              "carefully",
              "club",
            ],
            titleQuestion: {
              options: [
                "The noisiest boy in school",
                "George's fossil",
                "A sandwich for lunch",
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
            title: "Sharks",
            text: [
              "Sharks have lived in the oceans {1} more than four hundred million years. That's longer than dinosaurs!",
              "There are more {2} five hundred kinds of shark. The whale shark is the biggest. It can grow up to eighteen metres long, but it only eats very small animals and plants. The smallest shark is shorter {3} your hand.",
              "Sharks have amazing senses. They can smell blood {4} far away, and they can feel tiny movements in the water. Most sharks have to keep swimming all the time. If they stop, they can't breathe!",
              "Many people are afraid of sharks, but sharks don't usually attack people. In fact, people are much {5} dangerous to sharks. Every year, people kill millions of sharks {6} fishing.",
              "Scientists say sharks are very important for the ocean. They keep other fish populations healthy. That's {7} we need to protect them. Some countries have stopped people {8} catching sharks. If we want our oceans to stay healthy, we must look {9} sharks. They are not monsters; they are beautiful animals {10} deserve our respect.",
            ],
            gaps: [
              {
                options: [
                  "since",
                  "for",
                  "during",
                ],
                answer: 1,
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
                  "as",
                  "that",
                  "than",
                ],
                answer: 2,
              },
              {
                options: [
                  "of",
                  "by",
                  "from",
                ],
                answer: 2,
              },
              {
                options: [
                  "more",
                  "most",
                  "many",
                ],
                answer: 0,
              },
              {
                options: [
                  "with",
                  "by",
                  "for",
                ],
                answer: 1,
              },
              {
                options: [
                  "why",
                  "because",
                  "so",
                ],
                answer: 0,
              },
              {
                options: [
                  "to",
                  "of",
                  "from",
                ],
                answer: 2,
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
                  "who",
                  "that",
                  "where",
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
              "Every winter, Ella's village has an ice-skating competition on the frozen lake. Ella has wanted to win it since she was six.",
              "This year, Ella practised every morning before school. Her coach was her aunt, who was a skating champion when she was young. She taught Ella how to spin and jump.",
              "On the day of the competition, it was snowing. Ella was the last skater. She did a perfect jump, and the crowd cheered. She won the competition! Her prize was a pair of new silver skates.",
            ],
            items: [
              {
                question: "The competition takes place on ______.",
                answers: [
                  "the frozen lake",
                  "a frozen lake",
                  "the lake",
                ],
              },
              {
                question: "Ella has wanted to win since she was ______.",
                answers: [
                  "six",
                  "6",
                ],
              },
              {
                question: "Ella practised every morning ______.",
                answers: [
                  "before school",
                ],
              },
              {
                question: "Ella's coach was ______.",
                answers: [
                  "her aunt",
                  "ella's aunt",
                ],
              },
              {
                question: "Her aunt taught her how to ______.",
                answers: [
                  "spin and jump",
                  "jump and spin",
                ],
              },
              {
                question: "On the day of the competition, ______.",
                answers: [
                  "it was snowing",
                ],
              },
              {
                question: "Ella's prize was ______.",
                answers: [
                  "a pair of new silver skates",
                  "new silver skates",
                  "silver skates",
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
            title: "Saving energy",
            text: [
              "We all use energy every day. We use it to light our homes, cook our food {1} watch TV. But making energy can be bad for the planet. Here are some easy ways to save energy. Turn {2} the lights when you leave a room. Don't leave your computer or TV on {3} you're not using it. Have a shower instead {4} a bath. If everybody does these small things, we can make a big difference {5} our planet.",
            ],
            answers: [
              [
                "and",
              ],
              [
                "off",
              ],
              [
                "when",
                "if",
              ],
              [
                "of",
              ],
              [
                "to",
                "for",
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
                e: "👦🎈🎪",
                label: "1",
              },
              {
                e: "🎈💨☁️",
                label: "2",
              },
              {
                e: "👦🤡🎈😊",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Tom went to the circus with his family and his dad bought him a red balloon. Suddenly, Tom let go of the balloon and it flew up into the sky. Tom was sad, but a funny clown came and gave him a new balloon.",
          },
        },
      ],
    },
  ],
};
