import type { CambridgeTest } from "./types";

/** A1 Movers practice test 14 (Reading & Writing). Original Netfener content. Listening is added later. */
export const MOVERS_14: CambridgeTest = {
  id: "movers-14",
  level: "movers",
  no: 14,
  title: "A1 Movers · Practice Test 14",
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
                word: "a doctor",
                e: "🧑‍⚕️",
              },
              {
                word: "a comb",
                e: "🪮",
              },
              {
                word: "a cinema",
                e: "🎬",
              },
              {
                word: "an island",
                e: "🏝️",
              },
              {
                word: "a dolphin",
                e: "🐬",
              },
              {
                word: "a fork",
                e: "🍴",
              },
              {
                word: "a bicycle",
                e: "🚲",
              },
              {
                word: "a beard",
                e: "🧔",
              },
            ],
            items: [
              {
                text: "This person helps you when you feel ill.",
                answer: "a doctor",
              },
              {
                text: "You use this to make your hair tidy.",
                answer: "a comb",
              },
              {
                text: "You go here to watch a new film.",
                answer: "a cinema",
              },
              {
                text: "This is land in the sea with water all around it.",
                answer: "an island",
              },
              {
                text: "You eat your dinner with this and a knife.",
                answer: "a fork",
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
              "Amy",
              "Peter",
            ],
            items: [
              {
                line: "Peter, what are you doing this weekend?",
                options: [
                  "I'm ten.",
                  "It's Friday.",
                  "I'm going to the mountains.",
                ],
                answer: 2,
              },
              {
                line: "Who are you going with?",
                options: [
                  "My mum and dad.",
                  "By car.",
                  "Tomorrow.",
                ],
                answer: 0,
              },
              {
                line: "What are you going to do there?",
                options: [
                  "It's very high.",
                  "We're going to climb and have a picnic.",
                  "Yes, I am.",
                ],
                answer: 1,
              },
              {
                line: "Is it cold in the mountains?",
                options: [
                  "Yes, so I'm taking my warm jacket.",
                  "It's green.",
                  "No, it's a picnic.",
                ],
                answer: 0,
              },
              {
                line: "Can you take some photos for me?",
                options: [
                  "It's my camera.",
                  "I like mountains.",
                  "Sure! I'll show you on Monday.",
                ],
                answer: 2,
              },
              {
                line: "Have a great time!",
                options: [
                  "It's late.",
                  "No, I'm not.",
                  "Thanks, Amy!",
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
              "Sophie wanted a pet, but her flat was very small. 'What about a {1}?' said Dad. 'It doesn't need a lot of space.'",
              "They went to the pet shop and bought a little orange fish and a glass {2}. Sophie put some small stones and a green {3} in it.",
              "She called the fish Sunny. Every morning, she gives Sunny some {4}. Sunny swims to the top when he sees Sophie. 'I think he likes me!' she says. Sophie is very {5} with her new pet.",
            ],
            bank: [
              {
                word: "fish",
                e: "🐠",
              },
              {
                word: "bowl",
                e: "🫙",
              },
              {
                word: "plant",
                e: "🌿",
              },
              {
                word: "food",
                e: "🍽️",
              },
              {
                word: "happy",
                e: "😀",
              },
              {
                word: "horse",
                e: "🐴",
              },
              {
                word: "garden",
                e: "🏡",
              },
              {
                word: "bored",
                e: "😐",
              },
            ],
            answers: [
              "fish",
              "bowl",
              "plant",
              "food",
              "happy",
            ],
            titleQuestion: {
              options: [
                "Sophie's new fish",
                "A big horse for Dad",
                "The broken window",
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
            title: "Pandas",
            text: [
              "Pandas live in the mountains {1} China. They have got black and white fur.",
              "Pandas eat bamboo. They eat {2} lot of it, about twelve kilos every day! They can climb trees, {3} they spend most of their time on the ground.",
              "Baby pandas are very small {4} they are born. They are pink and they {5} got any fur at first.",
            ],
            gaps: [
              {
                options: [
                  "of",
                  "for",
                  "at",
                ],
                answer: 0,
              },
              {
                options: [
                  "an",
                  "the",
                  "a",
                ],
                answer: 2,
              },
              {
                options: [
                  "because",
                  "so",
                  "but",
                ],
                answer: 2,
              },
              {
                options: [
                  "when",
                  "what",
                  "where",
                ],
                answer: 0,
              },
              {
                options: [
                  "hasn't",
                  "haven't",
                  "don't",
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
            instruction: "Read the story and answer the questions. Write 1, 2 or 3 words.",
            text: [
              "Harry plays the guitar in a band with his friends, Ali and Rose. They practise every Wednesday evening in Rose's garage.",
              "Last month, their school had a music competition. Harry's band played a song about the sea. Harry was nervous, but he played very well.",
              "Harry's band came second in the competition. They won a big chocolate cake and a certificate. Their teacher was very proud of them.",
            ],
            items: [
              {
                question: "What does Harry play?",
                answers: [
                  "the guitar",
                  "guitar",
                ],
              },
              {
                question: "When does the band practise?",
                answers: [
                  "every wednesday evening",
                  "on wednesday evenings",
                  "wednesday evening",
                  "every wednesday",
                ],
              },
              {
                question: "Where do they practise?",
                answers: [
                  "in rose's garage",
                  "rose's garage",
                  "in a garage",
                  "in the garage",
                ],
              },
              {
                question: "What was the band's song about?",
                answers: [
                  "the sea",
                  "sea",
                ],
              },
              {
                question: "How did Harry feel?",
                answers: [
                  "nervous",
                ],
              },
              {
                question: "What place did the band come in the competition?",
                answers: [
                  "second",
                  "2nd",
                ],
              },
              {
                question: "What did they win?",
                answers: [
                  "a chocolate cake",
                  "a big chocolate cake",
                  "a cake",
                  "a big chocolate cake and a certificate",
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
              bg: "street",
              items: [
                {
                  e: "🏥",
                  x: 16,
                  y: 38,
                  size: 3.2,
                },
                {
                  e: "🚑",
                  x: 40,
                  y: 64,
                  size: 2.8,
                },
                {
                  e: "👩‍⚕️",
                  x: 62,
                  y: 62,
                  size: 2.6,
                },
                {
                  e: "🌳",
                  x: 84,
                  y: 36,
                  size: 3,
                },
                {
                  e: "🐈",
                  x: 80,
                  y: 84,
                },
                {
                  e: "🌙",
                  x: 50,
                  y: 12,
                  size: 2,
                },
              ],
            },
            prompts: [
              "What building is in the street?",
              "Who is next to the ambulance?",
              "What animal is in the street?",
              "Write one sentence about the tree.",
              "Write one sentence about the sky.",
            ],
            minWords: 20,
            checklist: [
              "I answered each question with a full sentence.",
              "I started each sentence with a capital letter and ended with a full stop.",
              "I wrote two new sentences about the picture.",
            ],
            sample: "There is a hospital in the street. A doctor is next to the ambulance. There is a cat in the street. The tree is big and green. The moon is in the sky because it is night.",
          },
        },
      ],
    },
  ],
};
