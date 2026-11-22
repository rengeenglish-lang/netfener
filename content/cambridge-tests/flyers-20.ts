import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 20 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_20: CambridgeTest = {
  id: "flyers-20",
  level: "flyers",
  no: 20,
  title: "A2 Flyers · Practice Test 20",
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
                word: "an inventor",
                e: "💡",
              },
              {
                word: "a collar",
                e: "👔",
              },
              {
                word: "a pier",
                e: "🌊",
              },
              {
                word: "a notice",
                e: "📌",
              },
              {
                word: "a speaker",
                e: "🔊",
              },
              {
                word: "a referee",
                e: "🧑‍⚖️",
              },
              {
                word: "a canyon",
                e: "🏜️",
              },
              {
                word: "a mattress",
                e: "🛏️",
              },
              {
                word: "a textbook",
                e: "📚",
              },
              {
                word: "a constellation",
                e: "✨",
              },
              {
                word: "a chemist's",
                e: "💊",
              },
              {
                word: "a teapot",
                e: "🫖",
              },
              {
                word: "a crab",
                e: "🦀",
              },
              {
                word: "a glove",
                e: "🧤",
              },
            ],
            items: [
              {
                text: "This person thinks of and makes new machines.",
                answer: "an inventor",
              },
              {
                text: "This is the part of a shirt that goes around your neck.",
                answer: "a collar",
              },
              {
                text: "This is a long platform that goes out from the beach into the sea.",
                answer: "a pier",
              },
              {
                text: "This piece of paper on the wall gives people information.",
                answer: "a notice",
              },
              {
                text: "You need this to hear music from your computer.",
                answer: "a speaker",
              },
              {
                text: "This person makes sure players follow the rules in a match.",
                answer: "a referee",
              },
              {
                text: "This is a deep valley with high rock walls.",
                answer: "a canyon",
              },
              {
                text: "This is the soft part of a bed.",
                answer: "a mattress",
              },
              {
                text: "Students use this book to study a subject at school.",
                answer: "a textbook",
              },
              {
                text: "This sea animal walks sideways on the sand.",
                answer: "a crab",
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
              "Sophie",
              "Mr Green",
            ],
            items: [
              {
                line: "Mr Green, could I join the school orchestra?",
                options: [
                  "Of course! Which instrument do you play?",
                  "I've joined it.",
                  "It's a big orchestra.",
                ],
                answer: 0,
              },
              {
                line: "I play the violin.",
                options: [
                  "I like the violin.",
                  "Wonderful! We need more violins.",
                  "I played it.",
                ],
                answer: 1,
              },
              {
                line: "How often do you practise?",
                options: [
                  "Every Monday and Wednesday at lunchtime.",
                  "For an hour.",
                  "In the music room.",
                ],
                answer: 0,
              },
              {
                line: "Will there be a concert this year?",
                options: [
                  "I went to the concert.",
                  "It's this year.",
                  "Yes, at Christmas. You'll need to work hard!",
                ],
                answer: 2,
              },
              {
                line: "I'll do my best!",
                options: [
                  "Your best is good.",
                  "I'm sure you will.",
                  "I did my best.",
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
              "Max's grandmother gave him an old {1} for his birthday. It was a box camera from 1950.",
              "Max didn't know how to use it, so he went to a {2} in town. The man there showed him how to put the film in. 'You can only take twelve photos with each film,' he {3}.",
              "Max thought carefully about every photo. He took pictures of his family, his dog and the old bridge in the town. When the photos were ready, they were in black and white. They looked very {4}. Max's grandmother cried when she saw them. 'They look like the photos from when I was {5},' she said.",
            ],
            bank: [
              {
                word: "camera",
                e: "📷",
              },
              {
                word: "shop",
                e: "🏪",
              },
              {
                word: "explained",
                e: "💬",
              },
              {
                word: "special",
                e: "✨",
              },
              {
                word: "young",
                e: "👧",
              },
              {
                word: "bike",
                e: "🚲",
              },
              {
                word: "library",
                e: "📚",
              },
              {
                word: "angry",
                e: "😠",
              },
            ],
            answers: [
              "camera",
              "shop",
              "explained",
              "special",
              "young",
            ],
            titleQuestion: {
              options: [
                "Max's old camera",
                "A new bike for Max",
                "Grandma's library",
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
            title: "Chess",
            text: [
              "Chess is one of the oldest games in the world. People started playing it in India about 1,500 years {1}.",
              "It's a game for two players. Each player has sixteen pieces: one king, one queen, two castles, two knights, two bishops {2} eight pawns. The aim is to catch the other player's king.",
              "Each piece moves in a different way. The queen is the {3} powerful piece because she can move in any direction. The knight is the only piece {4} can jump over other pieces.",
              "Chess is good for your brain. It helps you think carefully and {5} problems. Some schools teach chess in lessons, {6} it helps children with maths.",
              "Today, millions of people play chess. Some play {7} friends at home, and others play online with people from other countries. Computers can play chess too. In 1997, a computer {8} the world champion for the first time. If you want to learn chess, ask a friend or family member to {9} you. It's not easy, but it's lots of fun {10} you know the rules!",
            ],
            gaps: [
              {
                options: [
                  "before",
                  "past",
                  "ago",
                ],
                answer: 2,
              },
              {
                options: [
                  "or",
                  "and",
                  "but",
                ],
                answer: 1,
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
                  "who",
                  "what",
                  "that",
                ],
                answer: 2,
              },
              {
                options: [
                  "solve",
                  "solves",
                  "solving",
                ],
                answer: 0,
              },
              {
                options: [
                  "so",
                  "because",
                  "but",
                ],
                answer: 1,
              },
              {
                options: [
                  "with",
                  "by",
                  "for",
                ],
                answer: 0,
              },
              {
                options: [
                  "won",
                  "lost",
                  "beat",
                ],
                answer: 2,
              },
              {
                options: [
                  "learn",
                  "study",
                  "teach",
                ],
                answer: 2,
              },
              {
                options: [
                  "once",
                  "until",
                  "before",
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
              "Isla lives on a small island in Scotland. There are only two hundred people on the island and there aren't any cars.",
              "Isla goes to a very small school. There are only eight children in her class. Every morning, she walks to school along the beach with her dog, Rocky. Rocky waits outside the school all day.",
              "Once a week, a boat brings food and letters from the mainland. When the weather is bad, the boat can't come. Isla's favourite day is when the boat brings new library books.",
            ],
            items: [
              {
                question: "Isla lives on ______ in Scotland.",
                answers: [
                  "a small island",
                  "an island",
                  "small island",
                ],
              },
              {
                question: "There are ______ people on the island.",
                answers: [
                  "two hundred",
                  "200",
                  "only two hundred",
                ],
              },
              {
                question: "There are only ______ in Isla's class.",
                answers: [
                  "eight children",
                  "8 children",
                ],
              },
              {
                question: "Every morning, Isla walks to school ______.",
                answers: [
                  "along the beach",
                  "on the beach",
                ],
              },
              {
                question: "Rocky waits ______ all day.",
                answers: [
                  "outside the school",
                  "outside school",
                ],
              },
              {
                question: "A boat brings food and letters ______.",
                answers: [
                  "once a week",
                  "from the mainland",
                ],
              },
              {
                question: "Isla's favourite day is when the boat brings ______.",
                answers: [
                  "new library books",
                  "library books",
                  "books",
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
            title: "My favourite sport",
            text: [
              "My favourite sport is basketball. I play {1} my school team. We practise twice a week, on Tuesdays and Fridays. Our coach is very strict, but he is also very funny. Last month, we played {2} our biggest match of the year. The other team was very good, {3} we won by two points! I scored the last basket. Everyone shouted my name. It was the {4} exciting moment of my life. I want {5} play basketball for my country one day.",
            ],
            answers: [
              [
                "for",
                "in",
                "on",
              ],
              [
                "in",
              ],
              [
                "but",
              ],
              [
                "most",
              ],
              [
                "to",
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
                e: "👧🌧️☂️",
                label: "1",
              },
              {
                e: "☂️💨😮",
                label: "2",
              },
              {
                e: "👧💦😂",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "Lily was walking home in the rain with her red umbrella. Suddenly, a strong wind blew her umbrella away. Lily got very wet, but she wasn't sad. She laughed and jumped in the puddles all the way home.",
          },
        },
      ],
    },
  ],
};
