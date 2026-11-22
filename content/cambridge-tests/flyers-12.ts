import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 12 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_12: CambridgeTest = {
  id: "flyers-12",
  level: "flyers",
  no: 12,
  title: "A2 Flyers · Practice Test 12",
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
                word: "an actor",
                e: "🎭",
              },
              {
                word: "a ring",
                e: "💍",
              },
              {
                word: "a skyscraper",
                e: "🏙️",
              },
              {
                word: "a comic",
                e: "💥",
              },
              {
                word: "a battery",
                e: "🔋",
              },
              {
                word: "a librarian",
                e: "📚",
              },
              {
                word: "a forest",
                e: "🌲",
              },
              {
                word: "a cupboard",
                e: "🗄️",
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
                word: "a market",
                e: "🛒",
              },
              {
                word: "a frying pan",
                e: "🍳",
              },
              {
                word: "a tortoise",
                e: "🐢",
              },
              {
                word: "a suitcase",
                e: "🧳",
              },
            ],
            items: [
              {
                text: "This person works in films or plays.",
                answer: "an actor",
              },
              {
                text: "You wear this on your finger.",
                answer: "a ring",
              },
              {
                text: "This is a very tall building in a city.",
                answer: "a skyscraper",
              },
              {
                text: "This is a magazine with stories told in pictures.",
                answer: "a comic",
              },
              {
                text: "You put this in a toy or a torch to make it work.",
                answer: "a battery",
              },
              {
                text: "This person helps you find books.",
                answer: "a librarian",
              },
              {
                text: "There are lots of trees in this place.",
                answer: "a forest",
              },
              {
                text: "This shows you what time your lessons start.",
                answer: "a timetable",
              },
              {
                text: "This takes astronauts into space.",
                answer: "a rocket",
              },
              {
                text: "This animal is very slow and has a hard shell.",
                answer: "a tortoise",
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
              "Ryan",
              "Mum",
            ],
            items: [
              {
                line: "Mum, can I go to the cinema with Leo tonight?",
                options: [
                  "I went last week.",
                  "What film are you going to see?",
                  "It's a big cinema.",
                ],
                answer: 1,
              },
              {
                line: "A new film about pirates.",
                options: [
                  "Is it suitable for children?",
                  "I love pirates.",
                  "It's in the cinema.",
                ],
                answer: 0,
              },
              {
                line: "Yes, it is. Leo's dad is taking us.",
                options: [
                  "It's Leo's dad.",
                  "I'll take you.",
                  "OK then. What time does it finish?",
                ],
                answer: 2,
              },
              {
                line: "At half past eight.",
                options: [
                  "It's eight now.",
                  "I finished it.",
                  "Fine. Don't forget your coat.",
                ],
                answer: 2,
              },
              {
                line: "Thanks, Mum! You're the best!",
                options: [
                  "Have a nice time!",
                  "I'm the best.",
                  "It was good.",
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
              "Last winter, Lily's town had the biggest {1} for fifty years. All the schools were closed and the streets were white.",
              "Lily's neighbour, Mr Jones, was very old and he couldn't go out. Lily was {2} about him, so she knocked on his door. He didn't have any food in his house. Lily went to the shop with her {3} and bought bread, milk and soup for him.",
              "Every day that week, Lily visited Mr Jones. They played chess and he told her {4} about his life. When the snow melted, Mr Jones gave Lily a {5} for being so kind. It was a beautiful old chess set.",
            ],
            bank: [
              {
                word: "snowstorm",
                e: "🌨️",
              },
              {
                word: "worried",
                e: "😟",
              },
              {
                word: "sledge",
                e: "🛷",
              },
              {
                word: "stories",
                e: "📖",
              },
              {
                word: "present",
                e: "🎁",
              },
              {
                word: "sunshine",
                e: "☀️",
              },
              {
                word: "bored",
                e: "😐",
              },
              {
                word: "pizza",
                e: "🍕",
              },
            ],
            answers: [
              "snowstorm",
              "worried",
              "sledge",
              "stories",
              "present",
            ],
            titleQuestion: {
              options: [
                "A summer holiday",
                "Lily and her neighbour",
                "The chess competition",
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
            title: "The Moon",
            text: [
              "The Moon is about 384,000 kilometres {1} Earth. It takes about twenty-seven days to go round our planet.",
              "The Moon doesn't make its own light. We can see it {2} the Sun shines on it. As it moves around Earth, we see different parts of it, so it looks like it changes shape.",
              "There is no air or water on the Moon, {3} nothing can live there. The temperature changes a lot. In the day, it is hotter {4} boiling water, and at night it is very, very cold.",
              "In 1969, two American astronauts became the first people to walk {5} the Moon. Their footprints are still there today, because there is no wind {6} blow them away. Twelve people have walked on the Moon {7} far.",
              "Scientists are planning to send people back to the Moon soon. One day, people {8} live there in special buildings. Would you like to {9} to the Moon? It would be a very {10} journey!",
            ],
            gaps: [
              {
                options: [
                  "of",
                  "to",
                  "from",
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
                  "because",
                  "so",
                  "but",
                ],
                answer: 1,
              },
              {
                options: [
                  "than",
                  "as",
                  "that",
                ],
                answer: 0,
              },
              {
                options: [
                  "in",
                  "at",
                  "on",
                ],
                answer: 2,
              },
              {
                options: [
                  "for",
                  "to",
                  "so",
                ],
                answer: 1,
              },
              {
                options: [
                  "too",
                  "so",
                  "very",
                ],
                answer: 1,
              },
              {
                options: [
                  "must",
                  "should",
                  "might",
                ],
                answer: 2,
              },
              {
                options: [
                  "go",
                  "went",
                  "going",
                ],
                answer: 0,
              },
              {
                options: [
                  "longer",
                  "long",
                  "longest",
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
              "Charlie wanted a dog, but his parents said he was too young. 'You need to show us that you can look after an animal,' his dad said.",
              "So Charlie offered to walk his neighbour's dog, Bella. Every day after school, he took Bella to the park for an hour. He brushed her and gave her water. He did this for six months, even when it was raining.",
              "On his eleventh birthday, Charlie's parents took him to an animal centre. 'Choose a dog,' said his mum. Charlie chose a small black puppy with one white ear. He called it Patch.",
            ],
            items: [
              {
                question: "Charlie's parents said he was ______.",
                answers: [
                  "too young",
                ],
              },
              {
                question: "Charlie offered to walk his ______.",
                answers: [
                  "neighbour's dog",
                  "neighbours dog",
                ],
              },
              {
                question: "Every day, Charlie took Bella to ______.",
                answers: [
                  "the park",
                  "park",
                ],
              },
              {
                question: "Charlie walked Bella for ______.",
                answers: [
                  "six months",
                  "6 months",
                ],
              },
              {
                question: "He walked Bella even when ______.",
                answers: [
                  "it was raining",
                ],
              },
              {
                question: "Charlie's parents took him to ______.",
                answers: [
                  "an animal centre",
                  "animal centre",
                  "the animal centre",
                ],
              },
              {
                question: "The puppy had ______.",
                answers: [
                  "one white ear",
                  "a white ear",
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
            title: "A great day out",
            text: [
              "Last Saturday, my family and I went to the zoo. It was a sunny day, {1} lots of people were there. First, we saw the lions. They were sleeping under a tree. Then we watched the penguins having {2} lunch. A zoo keeper threw fish to them and they caught them in the air! My little brother liked the monkeys {3} of all. One monkey took a man's hat! We {4} a great time. I hope we can go again {5}.",
            ],
            answers: [
              [
                "so",
                "and",
              ],
              [
                "their",
              ],
              [
                "best",
                "most",
              ],
              [
                "had",
              ],
              [
                "soon",
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
                e: "👧🎨🖼️",
                label: "1",
              },
              {
                e: "🖼️🏆👏",
                label: "2",
              },
              {
                e: "👧🏅😀",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Sara painted a beautiful picture of a sunset for a competition. The judges liked it very much and her picture won first prize. Everyone clapped. Sara got a gold medal and she felt very happy and proud.",
          },
        },
      ],
    },
  ],
};
