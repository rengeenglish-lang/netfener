import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 19 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_19: CambridgeTest = {
  id: "flyers-19",
  level: "flyers",
  no: 19,
  title: "A2 Flyers · Practice Test 19",
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
                word: "a chef",
                e: "🧑‍🍳",
              },
              {
                word: "a sleeve",
                e: "👕",
              },
              {
                word: "a harbour",
                e: "⚓",
              },
              {
                word: "a sign",
                e: "🪧",
              },
              {
                word: "a screen",
                e: "🖥️",
              },
              {
                word: "a guide",
                e: "🧭",
              },
              {
                word: "a stream",
                e: "💧",
              },
              {
                word: "a pillow",
                e: "🛏️",
              },
              {
                word: "a passport",
                e: "🛂",
              },
              {
                word: "a sunrise",
                e: "🌄",
              },
              {
                word: "a petrol station",
                e: "⛽",
              },
              {
                word: "a sink",
                e: "🚰",
              },
              {
                word: "a flamingo",
                e: "🦩",
              },
              {
                word: "a wallet",
                e: "👛",
              },
            ],
            items: [
              {
                text: "This person is the head cook in a restaurant.",
                answer: "a chef",
              },
              {
                text: "This is the part of a shirt that covers your arm.",
                answer: "a sleeve",
              },
              {
                text: "Boats stay here safely next to the land.",
                answer: "a harbour",
              },
              {
                text: "This tells you which way to go, or what you must not do.",
                answer: "a sign",
              },
              {
                text: "You look at this when you watch TV or use a computer.",
                answer: "a screen",
              },
              {
                text: "This person shows tourists around a city.",
                answer: "a guide",
              },
              {
                text: "This is a very small river.",
                answer: "a stream",
              },
              {
                text: "You can see this early in the morning when the sun comes up.",
                answer: "a sunrise",
              },
              {
                text: "You buy fuel for your car at this place.",
                answer: "a petrol station",
              },
              {
                text: "This pink bird often stands on one leg.",
                answer: "a flamingo",
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
              "Jack",
              "Grandpa",
            ],
            items: [
              {
                line: "Grandpa, can you help me fix my bike?",
                options: [
                  "Of course. What's wrong with it?",
                  "I fixed it.",
                  "It's a nice bike.",
                ],
                answer: 0,
              },
              {
                line: "The chain keeps coming off.",
                options: [
                  "It came off.",
                  "Let me have a look.",
                  "I've got a chain.",
                ],
                answer: 1,
              },
              {
                line: "Do you know how to fix it?",
                options: [
                  "Yes, I used to repair bikes when I was young.",
                  "I'll know tomorrow.",
                  "It's fixed.",
                ],
                answer: 0,
              },
              {
                line: "Really? I didn't know that!",
                options: [
                  "I knew it.",
                  "Yes, really.",
                  "There are lots of things you don't know about me!",
                ],
                answer: 2,
              },
              {
                line: "Thanks, Grandpa! You're amazing!",
                options: [
                  "I'm amazing too.",
                  "Thank you.",
                  "You're welcome. Now let's go for a ride!",
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
              "Hannah's class was going to a {1} for three days. They were going to stay in a big house in the forest.",
              "On the first day, they went on a long walk. Hannah carried a heavy {2} with her water, food and a coat. In the afternoon, they climbed a big hill. From the top, they could see the whole {3}.",
              "In the evening, they sat around a {4} and sang songs. Their teacher told them a scary story about a ghost in the forest. Hannah was {5}, but she loved it. It was the best school trip ever.",
            ],
            bank: [
              {
                word: "camp",
                e: "⛺",
              },
              {
                word: "rucksack",
                e: "🎒",
              },
              {
                word: "valley",
                e: "🏞️",
              },
              {
                word: "campfire",
                e: "🔥",
              },
              {
                word: "scared",
                e: "😨",
              },
              {
                word: "cinema",
                e: "🎬",
              },
              {
                word: "shopping",
                e: "🛍️",
              },
              {
                word: "bored",
                e: "😐",
              },
            ],
            answers: [
              "camp",
              "rucksack",
              "valley",
              "campfire",
              "scared",
            ],
            titleQuestion: {
              options: [
                "A ghost in the classroom",
                "Shopping with Mum",
                "Hannah's school camp",
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
            title: "Mobile phones",
            text: [
              "The first mobile phone call {1} made in 1973. The phone was very big and heavy. It weighed more than a kilo!",
              "In the 1990s, mobile phones became smaller and cheaper, and many people started using {2}. But they could only make calls and send short messages.",
              "Today, smartphones can do {3} more. We can take photos, watch videos, play games and use maps. Some people say their phone is the {4} important thing they own.",
              "But phones can also cause problems. Some people spend too {5} time looking at their screens. Doctors say this can be bad for your eyes and your sleep.",
              "Here are some tips {6} using your phone well. Don't use it {7} you are eating with your family. Turn it off at least an hour before you go to sleep. And when you are walking, look {8} you, not at your phone! Phones are useful, but it's important to {9} time with people too. Why not have a phone-free day {10} week?",
            ],
            gaps: [
              {
                options: [
                  "were",
                  "is",
                  "was",
                ],
                answer: 2,
              },
              {
                options: [
                  "it",
                  "they",
                  "them",
                ],
                answer: 2,
              },
              {
                options: [
                  "much",
                  "many",
                  "lots",
                ],
                answer: 0,
              },
              {
                options: [
                  "more",
                  "most",
                  "much",
                ],
                answer: 1,
              },
              {
                options: [
                  "much",
                  "many",
                  "lot",
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
                  "what",
                  "when",
                  "where",
                ],
                answer: 1,
              },
              {
                options: [
                  "about",
                  "around",
                  "above",
                ],
                answer: 1,
              },
              {
                options: [
                  "spends",
                  "spent",
                  "spend",
                ],
                answer: 2,
              },
              {
                options: [
                  "every",
                  "all",
                  "many",
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
              "Tom's school has a robot club. Every Thursday after school, Tom and his friends build robots in the science lab.",
              "This term, they made a robot that can pick up rubbish. It has two arms and four wheels. They called it Tidy. It took them ten weeks to build. Tom wrote the computer program for it.",
              "In May, the club took Tidy to a national robot competition in Manchester. Tidy picked up more rubbish than any other robot in five minutes. The team won first prize and their photo was in the school magazine.",
            ],
            items: [
              {
                question: "The robot club meets ______ after school.",
                answers: [
                  "every thursday",
                  "on thursdays",
                  "on thursday",
                ],
              },
              {
                question: "They build robots in ______.",
                answers: [
                  "the science lab",
                  "science lab",
                  "the lab",
                ],
              },
              {
                question: "The robot can ______.",
                answers: [
                  "pick up rubbish",
                ],
              },
              {
                question: "The robot has two arms and ______.",
                answers: [
                  "four wheels",
                  "4 wheels",
                ],
              },
              {
                question: "Tom wrote ______ for the robot.",
                answers: [
                  "the computer program",
                  "the program",
                  "computer program",
                ],
              },
              {
                question: "The competition was in ______.",
                answers: [
                  "manchester",
                ],
              },
              {
                question: "The team's photo was in ______.",
                answers: [
                  "the school magazine",
                  "school magazine",
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
            title: "A trip to the mountains",
            text: [
              "Last winter, I went skiing {1} the first time. We stayed in a small hotel in the mountains. There was a lot of snow and it was very cold. On the first day, I fell over {2} time I tried to ski! But my teacher was very patient. By the end of the week, I could ski {3} the mountain without falling. In the evenings, we drank hot chocolate {4} played board games. I can't wait to go {5} next year!",
            ],
            answers: [
              [
                "for",
              ],
              [
                "every",
                "each",
              ],
              [
                "down",
              ],
              [
                "and",
              ],
              [
                "back",
                "again",
                "skiing",
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
                e: "👦⚽🏫",
                label: "1",
              },
              {
                e: "⚽🪟💥",
                label: "2",
              },
              {
                e: "👦🧹😓",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Sam was playing football near his school. He kicked the ball too hard and it broke a classroom window. Sam told his teacher what happened. After school, he helped to clean up the glass.",
          },
        },
      ],
    },
  ],
};
