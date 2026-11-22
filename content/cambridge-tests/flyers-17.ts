import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 17 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_17: CambridgeTest = {
  id: "flyers-17",
  level: "flyers",
  no: 17,
  title: "A2 Flyers · Practice Test 17",
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
                word: "a programmer",
                e: "💻",
              },
              {
                word: "a uniform",
                e: "👔",
              },
              {
                word: "a tower",
                e: "🗼",
              },
              {
                word: "a brochure",
                e: "📄",
              },
              {
                word: "a laptop",
                e: "💻",
              },
              {
                word: "a coach",
                e: "🏋️",
              },
              {
                word: "a hill",
                e: "⛰️",
              },
              {
                word: "a carpet",
                e: "🧶",
              },
              {
                word: "a cookbook",
                e: "📕",
              },
              {
                word: "a sunset",
                e: "🌅",
              },
              {
                word: "a garage",
                e: "🚗",
              },
              {
                word: "a tray",
                e: "🍱",
              },
              {
                word: "a seal",
                e: "🦭",
              },
              {
                word: "an umbrella",
                e: "☂️",
              },
            ],
            items: [
              {
                text: "This person writes instructions for computers.",
                answer: "a programmer",
              },
              {
                text: "Some children wear this to school.",
                answer: "a uniform",
              },
              {
                text: "This is a tall, narrow building.",
                answer: "a tower",
              },
              {
                text: "This small book tells you about a hotel or a holiday.",
                answer: "a brochure",
              },
              {
                text: "This person helps a sports team get better.",
                answer: "a coach",
              },
              {
                text: "This is smaller than a mountain.",
                answer: "a hill",
              },
              {
                text: "This covers the floor of a room.",
                answer: "a carpet",
              },
              {
                text: "This book has lots of recipes in it.",
                answer: "a cookbook",
              },
              {
                text: "People keep their cars in this.",
                answer: "a garage",
              },
              {
                text: "This sea animal has a round head and lies on rocks.",
                answer: "a seal",
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
              "Anna",
              "Ben",
            ],
            items: [
              {
                line: "Ben, what are you reading?",
                options: [
                  "A book about volcanoes.",
                  "I read it last year.",
                  "It's mine.",
                ],
                answer: 0,
              },
              {
                line: "Is it interesting?",
                options: [
                  "It's a big book.",
                  "I'm interested.",
                  "Yes, very! Did you know there are volcanoes under the sea?",
                ],
                answer: 2,
              },
              {
                line: "No, I didn't! Where did you get it?",
                options: [
                  "In the morning.",
                  "Last week.",
                  "From the school library.",
                ],
                answer: 2,
              },
              {
                line: "Can I borrow it when you've finished?",
                options: [
                  "Sure. I'll give it to you on Friday.",
                  "I've finished it.",
                  "It's borrowed.",
                ],
                answer: 0,
              },
              {
                line: "Thanks, that's really kind.",
                options: [
                  "You're kind.",
                  "No problem!",
                  "It's nice.",
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
              "When Leo was ten, he found a small {1} in the woods near his house. Its wing was hurt and it couldn't fly.",
              "Leo carried the bird home in his {2} and showed it to his mum. They put it in a box with some soft grass. Every day, Leo gave it seeds and {3}. He called the bird Sky.",
              "After three weeks, Sky's wing was better. Leo took the box to the woods and opened it. Sky flew up into a {4} and sang. Leo felt sad but happy at the same time. Now, every spring, a little bird {5} in the tree in Leo's garden. Leo thinks it's Sky.",
            ],
            bank: [
              {
                word: "bird",
                e: "🐦",
              },
              {
                word: "hat",
                e: "🧢",
              },
              {
                word: "water",
                e: "💧",
              },
              {
                word: "tree",
                e: "🌳",
              },
              {
                word: "sings",
                e: "🎶",
              },
              {
                word: "box",
                e: "📦",
              },
              {
                word: "milk",
                e: "🥛",
              },
              {
                word: "swims",
                e: "🏊",
              },
            ],
            answers: [
              "bird",
              "hat",
              "water",
              "tree",
              "sings",
            ],
            titleQuestion: {
              options: [
                "Leo and Sky",
                "A new hat for Leo",
                "The bird that swam",
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
            title: "Ice cream",
            text: [
              "Nobody knows exactly {1} invented ice cream. More than two thousand years ago, people in China mixed snow {2} fruit and honey.",
              "In the seventeenth century, ice cream was a special food {3} only rich people could eat. It was very difficult to make because there were no fridges.",
              "Today, ice cream is popular all over the world. The country {4} people eat the most ice cream is New Zealand. People there eat about twenty-eight litres each a year!",
              "The most popular flavour {5} the world is vanilla. Chocolate and strawberry are also very popular. But there are some strange flavours too, {6} cheese, garlic and even fish!",
              "The biggest ice cream cone ever was {7} than three metres tall. It was made in Norway in 2015. If you want to make ice cream at home, you only need milk, cream, sugar and {8} flavour you like. But be careful: eating ice cream too quickly can give you a headache! It's {9} 'brain freeze'. So eat it slowly and {10} it!",
            ],
            gaps: [
              {
                options: [
                  "who",
                  "which",
                  "what",
                ],
                answer: 0,
              },
              {
                options: [
                  "by",
                  "with",
                  "of",
                ],
                answer: 1,
              },
              {
                options: [
                  "that",
                  "what",
                  "who",
                ],
                answer: 0,
              },
              {
                options: [
                  "which",
                  "when",
                  "where",
                ],
                answer: 2,
              },
              {
                options: [
                  "on",
                  "in",
                  "of",
                ],
                answer: 1,
              },
              {
                options: [
                  "as",
                  "like",
                  "such",
                ],
                answer: 1,
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
                  "any",
                  "some",
                  "every",
                ],
                answer: 0,
              },
              {
                options: [
                  "calls",
                  "called",
                  "calling",
                ],
                answer: 1,
              },
              {
                options: [
                  "enjoy",
                  "enjoys",
                  "enjoying",
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
              "Nina's mum is a vet. She works at an animal hospital near the station. On Saturdays, Nina sometimes goes to work with her.",
              "Last Saturday, a farmer brought in a baby goat. It wasn't eating and it was very weak. Nina's mum gave it some medicine. Nina fed it milk from a bottle every two hours.",
              "By the evening, the goat was much better. It stood up and walked around the room. The farmer was very happy. He said Nina could visit the goat at his farm any time. Nina named the goat Lucky.",
            ],
            items: [
              {
                question: "Nina's mum works at ______ near the station.",
                answers: [
                  "an animal hospital",
                  "the animal hospital",
                  "animal hospital",
                ],
              },
              {
                question: "Nina sometimes goes to work with her mum ______.",
                answers: [
                  "on saturdays",
                  "on saturday",
                ],
              },
              {
                question: "A farmer brought in ______.",
                answers: [
                  "a baby goat",
                  "baby goat",
                  "a goat",
                ],
              },
              {
                question: "Nina's mum gave the goat ______.",
                answers: [
                  "some medicine",
                  "medicine",
                ],
              },
              {
                question: "Nina fed the goat milk ______.",
                answers: [
                  "from a bottle",
                  "every two hours",
                  "from a bottle every two hours",
                ],
              },
              {
                question: "By the evening, the goat ______.",
                answers: [
                  "was much better",
                  "was better",
                  "stood up",
                ],
              },
              {
                question: "Nina called the goat ______.",
                answers: [
                  "lucky",
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
            title: "The school play",
            text: [
              "This year, our class did a play {1} the end of term. It was about a princess who lived in a tower. I was the princess, and my friend Tom was the dragon. We practised {2} week for two months. On the night of the play, I was {3} nervous that I forgot my first line! But then I remembered it and everything went well. Our parents clapped for a long time. I'd love to be in {4} play next year. Maybe I'll {5} the dragon!",
            ],
            answers: [
              [
                "at",
              ],
              [
                "every",
                "each",
                "all",
                "this",
              ],
              [
                "so",
              ],
              [
                "another",
                "the",
                "a",
              ],
              [
                "be",
                "play",
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
                e: "👨⛺🌲",
                label: "1",
              },
              {
                e: "🐻🍯⛺😮",
                label: "2",
              },
              {
                e: "👨🏃🐻",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Mr Brown went camping in the forest. In the night, a bear came near his tent because it smelled his honey. Mr Brown was very frightened. He ran away quickly and the bear ate all the honey.",
          },
        },
      ],
    },
  ],
};
