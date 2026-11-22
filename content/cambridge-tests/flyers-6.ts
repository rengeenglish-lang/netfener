import type { CambridgeTest } from "./types";

/** A2 Flyers practice test 6 (Reading & Writing). Original Netfener content. Listening is added later. */
export const FLYERS_6: CambridgeTest = {
  id: "flyers-6",
  level: "flyers",
  no: 6,
  title: "A2 Flyers · Practice Test 6",
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
                word: "a journalist",
                e: "📰",
              },
              {
                word: "a passport",
                e: "🛂",
              },
              {
                word: "a castle",
                e: "🏰",
              },
              {
                word: "a stamp",
                e: "📮",
              },
              {
                word: "a torch",
                e: "🔦",
              },
              {
                word: "an engineer",
                e: "👷",
              },
              {
                word: "a jungle",
                e: "🌴",
              },
              {
                word: "a blanket",
                e: "🛏️",
              },
              {
                word: "a diary",
                e: "📔",
              },
              {
                word: "a planet",
                e: "🪐",
              },
              {
                word: "a library",
                e: "📚",
              },
              {
                word: "a ladder",
                e: "🪜",
              },
              {
                word: "a kangaroo",
                e: "🦘",
              },
              {
                word: "a wallet",
                e: "👛",
              },
            ],
            items: [
              {
                text: "This person writes stories for a newspaper.",
                answer: "a journalist",
              },
              {
                text: "You need this to travel to another country.",
                answer: "a passport",
              },
              {
                text: "Kings and queens lived in this big old building.",
                answer: "a castle",
              },
              {
                text: "You put this on an envelope before you post it.",
                answer: "a stamp",
              },
              {
                text: "You can use this to see when it is dark.",
                answer: "a torch",
              },
              {
                text: "This person designs bridges and machines.",
                answer: "an engineer",
              },
              {
                text: "This is a hot place with lots of trees, plants and wild animals.",
                answer: "a jungle",
              },
              {
                text: "Some people write about their day in this every evening.",
                answer: "a diary",
              },
              {
                text: "Earth and Mars are examples of this.",
                answer: "a planet",
              },
              {
                text: "You climb up this to reach high places.",
                answer: "a ladder",
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
              "Harry",
              "Mrs Clark",
            ],
            items: [
              {
                line: "Mrs Clark, could I ask you some questions for my school project?",
                options: [
                  "Of course. What's it about?",
                  "I'm a teacher.",
                  "Yes, I went there.",
                ],
                answer: 0,
              },
              {
                line: "It's about what life was like fifty years ago.",
                options: [
                  "It's a long time.",
                  "I'll do it tomorrow.",
                  "Well, there weren't any mobile phones then!",
                ],
                answer: 2,
              },
              {
                line: "How did you talk to your friends?",
                options: [
                  "In the evening.",
                  "We wrote letters or visited them.",
                  "They were very nice.",
                ],
                answer: 1,
              },
              {
                line: "Did you have a television?",
                options: [
                  "No, I've got a radio now.",
                  "Yes, but it only showed programmes in black and white.",
                  "I watch it every day.",
                ],
                answer: 1,
              },
              {
                line: "Thank you. That's really helpful!",
                options: [
                  "It was a project.",
                  "Yes, I helped.",
                  "You're welcome. Good luck with your project!",
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
              "Last spring, Jack's family went on holiday to a small {1} in the north. They stayed in a wooden house near a forest.",
              "On the second day, Jack and his sister went for a walk. They followed a {2} through the trees. Suddenly, Jack saw something moving behind a rock. It was a young deer! It looked {3} and it couldn't stand up.",
              "Jack ran back to the house to get his dad. Dad called the park {4}, and she came quickly. She looked at the deer's leg. 'It's not broken,' she said. 'It just needs some rest.' The next week, she sent the children a photo of the deer running in the forest. 'Thanks to you, it's {5} now,' she wrote.",
            ],
            bank: [
              {
                word: "village",
                e: "🏘️",
              },
              {
                word: "path",
                e: "🛤️",
              },
              {
                word: "frightened",
                e: "😨",
              },
              {
                word: "ranger",
                e: "👩‍🌾",
              },
              {
                word: "fine",
                e: "👍",
              },
              {
                word: "beach",
                e: "🏖️",
              },
              {
                word: "pleased",
                e: "😊",
              },
              {
                word: "bridge",
                e: "🌉",
              },
            ],
            answers: [
              "village",
              "path",
              "frightened",
              "ranger",
              "fine",
            ],
            titleQuestion: {
              options: [
                "A holiday by the sea",
                "The deer in the forest",
                "Jack's new camera",
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
            title: "Robots",
            text: [
              "Robots are machines {1} can do jobs for people. The first robots were very simple, but today some robots can walk, talk and even play football.",
              "Many robots work {2} factories. They build cars and computers. They never get tired, {3} they can work all day and all night.",
              "Some robots help doctors in hospitals. Others go to places that are too dangerous {4} people, like the bottom of the sea or other planets. A robot called Spirit drove across Mars {5} more than six years.",
              "In the future, robots might do {6} of our housework. Some homes already have robot vacuum cleaners {7} move around the room on their own. Scientists are also making robots that can understand {8} we say.",
              "But robots can't do everything. They aren't as good {9} people at thinking about new ideas. Many people think robots will be our helpers, {10} not our bosses.",
            ],
            gaps: [
              {
                options: [
                  "who",
                  "that",
                  "what",
                ],
                answer: 1,
              },
              {
                options: [
                  "on",
                  "at",
                  "in",
                ],
                answer: 2,
              },
              {
                options: [
                  "so",
                  "but",
                  "because",
                ],
                answer: 0,
              },
              {
                options: [
                  "to",
                  "for",
                  "from",
                ],
                answer: 1,
              },
              {
                options: [
                  "for",
                  "since",
                  "during",
                ],
                answer: 0,
              },
              {
                options: [
                  "many",
                  "lots",
                  "a lot",
                ],
                answer: 2,
              },
              {
                options: [
                  "who",
                  "what",
                  "which",
                ],
                answer: 2,
              },
              {
                options: [
                  "what",
                  "which",
                  "that",
                ],
                answer: 0,
              },
              {
                options: [
                  "than",
                  "as",
                  "like",
                ],
                answer: 1,
              },
              {
                options: [
                  "but",
                  "and",
                  "or",
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
              "Sophie's school had a competition to design a new playground. The winner's design was going to be built in the summer holidays.",
              "Sophie wanted to win, so she asked the younger children what they liked. Most of them wanted a climbing wall and a tree house. Sophie drew her design on a big piece of paper. She also added a small garden where children could grow vegetables.",
              "Two weeks later, the head teacher announced the winner in the school hall. It was Sophie! Everybody clapped. In September, the new playground was ready. The younger children loved the tree house most of all, and Sophie looked after the garden with her friends.",
            ],
            items: [
              {
                question: "The school had a competition to design a new ______.",
                answers: [
                  "playground",
                ],
              },
              {
                question: "The new playground was going to be built in the ______.",
                answers: [
                  "summer holidays",
                  "holidays",
                  "summer",
                ],
              },
              {
                question: "Sophie asked the ______ what they liked.",
                answers: [
                  "younger children",
                  "young children",
                ],
              },
              {
                question: "Most children wanted a climbing wall and ______.",
                answers: [
                  "a tree house",
                  "tree house",
                ],
              },
              {
                question: "Sophie also added a garden where children could ______.",
                answers: [
                  "grow vegetables",
                ],
              },
              {
                question: "The head teacher announced the winner in ______.",
                answers: [
                  "the school hall",
                  "school hall",
                  "the hall",
                ],
              },
              {
                question: "The younger children loved ______ most of all.",
                answers: [
                  "the tree house",
                  "tree house",
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
            title: "A letter from camp",
            text: [
              "Dear Mum and Dad, I'm having a great time {1} camp! Yesterday we went canoeing on the lake. I fell into the water, but it wasn't cold. Today we're going {2} climb a hill and have a picnic at the top. My tent is next to Ben's, so we talk {3} night. The food is OK, but I miss your pizza! I'll see you {4} Saturday. Love, Tom. P.S. Could you send me {5} more socks, please?",
            ],
            answers: [
              [
                "at",
              ],
              [
                "to",
              ],
              [
                "at",
                "every",
                "all",
                "each",
              ],
              [
                "on",
                "next",
                "this",
              ],
              [
                "some",
                "two",
                "three",
                "more",
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
                e: "🧒🎂📦",
                label: "1",
              },
              {
                e: "📦🐶😮",
                label: "2",
              },
              {
                e: "🧒🐶❤️",
                label: "3",
              },
            ],
            minWords: 20,
            checklist: [
              "My story talks about all three pictures.",
              "I used the past simple (went, saw, said …).",
              "I wrote 20 or more words.",
            ],
            sample: "It was Lily's birthday and her parents gave her a big box. When she opened it, a little brown puppy jumped out! Lily was very surprised and happy. She hugged the puppy and called him Teddy. Now they play together every day.",
          },
        },
      ],
    },
  ],
};
