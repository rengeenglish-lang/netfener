import type { CambridgeTest } from "./types";

/** A2 Key practice test 20 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_20: CambridgeTest = {
  id: "key-20",
  level: "key",
  no: 20,
  title: "A2 Key · Practice Test 20",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
      parts: [
        {
          title: "Part 1",
          task: {
            kind: "mcq",
            instruction: "For each question, choose the correct answer.",
            items: [
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Swimming lessons for adults on Tuesday evenings.",
                    "Ask at reception.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Adults can learn to swim here.",
                  "The pool is closed on Tuesdays.",
                  "Only children can have lessons.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Mike, I'm at the station. My train is delayed by an hour. I'll call you when I get on it. Sarah",
                  ],
                },
                question: "What does Sarah tell Mike?",
                options: [
                  "She has missed her train.",
                  "She will be late.",
                  "She is on the train now.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PRIVATE ROAD",
                    "No parking. Cars will be removed.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You must not leave your car here.",
                  "You can park here for free.",
                  "Only private cars can park here.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi everyone,",
                    "The class party is on Friday. Please bring some food to share – sandwiches, cakes or fruit. Miss Clark",
                  ],
                },
                question: "What should students do for the party?",
                options: [
                  "buy tickets",
                  "help to decorate the room",
                  "bring something to eat",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "THEATRE",
                    "Latecomers will not be allowed in until the interval.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The show starts late.",
                  "If you are late, you must wait to go in.",
                  "You can come in at any time.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER JOB",
                    "Ice cream seller wanted at the beach.",
                    "Must be 16 or over. Weekends only.",
                  ],
                },
                question: "What do we know about the job?",
                options: [
                  "It is for children.",
                  "It is not during the week.",
                  "It is in a shop in town.",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 2",
          task: {
            kind: "matching",
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Isabel",
                text: "I play the cello in a youth orchestra. We rehearse every Saturday morning for three hours. Twice a year, we give concerts in the city's concert hall. Last year, we travelled to Vienna and played there. It was the most amazing trip of my life.",
              },
              {
                title: "Henry",
                text: "I like fixing things. When something breaks at home, I always try to repair it. I've fixed my bike, the toaster and my grandma's old radio. I watch videos online to learn how. I'd like to be an engineer when I leave school.",
              },
              {
                title: "Lily",
                text: "I do yoga. I started because I was very stressed about exams. Now I do it every morning for twenty minutes. It helps me feel calm and relaxed. I go to classes at the sports centre with my mum once a week too.",
              },
            ],
            items: [
              {
                text: "has played abroad?",
                answer: 0,
              },
              {
                text: "learns from the internet?",
                answer: 1,
              },
              {
                text: "started their hobby to deal with a problem?",
                answer: 2,
              },
              {
                text: "does their hobby with a parent?",
                answer: 2,
              },
              {
                text: "has helped family members?",
                answer: 1,
              },
              {
                text: "performs in a big venue?",
                answer: 0,
              },
              {
                text: "knows what job they want?",
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "The boy who plants trees",
              paragraphs: [
                "When Felix was nine years old, he did a school project about the environment. 'I learned that trees are really important for our planet,' he says. 'So I decided to plant some.'",
                "Felix started by planting one tree at his school. Then he asked other children to help. 'I told them: let's plant a million trees in every country,' he remembers.",
                "Felix's idea became very popular. Children all over the world started planting trees. Today, Felix is nineteen, and his organisation has planted more than fifteen billion trees!",
                "Felix often speaks at big conferences. 'Adults talk a lot, but children act,' he says. 'Everyone can do something to help. You don't have to be old or important.'",
              ],
            },
            items: [
              {
                question: "How did Felix get the idea to plant trees?",
                options: [
                  "from his parents",
                  "from a TV programme",
                  "from a school project",
                ],
                answer: 2,
              },
              {
                question: "What did Felix do after planting his first tree?",
                options: [
                  "He asked other children to join him.",
                  "He planted a million trees alone.",
                  "He started a business.",
                ],
                answer: 0,
              },
              {
                question: "What has Felix's organisation done?",
                options: [
                  "built schools",
                  "planted billions of trees",
                  "cleaned rivers",
                ],
                answer: 1,
              },
              {
                question: "What does Felix often do now?",
                options: [
                  "He gives talks.",
                  "He teaches at a school.",
                  "He works in a forest.",
                ],
                answer: 0,
              },
              {
                question: "What does Felix believe?",
                options: [
                  "Only important people can help.",
                  "Adults do more than children.",
                  "Young people can make a difference.",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Kites",
            text: [
              "People have been flying kites for more than 2,000 years. The first kites were {1} in China, using silk and bamboo. Later, kites spread to other countries in Asia.",
              "In the past, kites were not just toys. People used them to {2} messages and to measure the weather. Scientists also used kites to study the wind.",
              "Today, kite flying is a {3} hobby all over the world. In some countries, there are big kite festivals where people {4} their kites. Kites can be many different shapes, like birds, fish or dragons. The {5} kite ever flown was more than 1,000 square metres! Flying a kite is easy. You just need a {6} day and an open space.",
            ],
            gaps: [
              {
                options: [
                  "done",
                  "put",
                  "made",
                ],
                answer: 2,
              },
              {
                options: [
                  "post",
                  "send",
                  "give",
                ],
                answer: 1,
              },
              {
                options: [
                  "known",
                  "popular",
                  "famous",
                ],
                answer: 1,
              },
              {
                options: [
                  "tell",
                  "look",
                  "show",
                ],
                answer: 2,
              },
              {
                options: [
                  "largest",
                  "longest",
                  "tallest",
                ],
                answer: 0,
              },
              {
                options: [
                  "rainy",
                  "windy",
                  "cloudy",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Dear Aunt Mary,",
              "Thank you {1} much for my birthday present. I love the book about animals! I've already read half of {2}.",
              "I had a great birthday. In the morning, my parents took me to the zoo. I saw {3} tigers and a baby elephant. In the evening, my friends came to my house {4} a party. We ate pizza and played games.",
              "When are you coming to visit us? I'd like to show you my new bedroom. I painted the walls blue {5} myself! I hope to see you {6}.",
              "Love,",
              "Sam",
            ],
            answers: [
              [
                "very",
                "so",
              ],
              [
                "it",
              ],
              [
                "some",
                "two",
                "the",
              ],
              [
                "for",
              ],
              [
                "by",
              ],
              [
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You lost your phone yesterday. Write an email to your English friend, Ali. Write 25 words or more.",
            prompts: [
              "Say where you lost it.",
              "Say how you felt.",
              "Ask Ali to contact you by email.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Ali' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Ali,\n\nYesterday I lost my phone on the bus on the way home from school. I felt really upset because it was new. Please send me an email if you need to talk to me this week.\n\nThanks,\nKerem",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🌧️🚗",
                label: "1",
              },
              {
                e: "🚗🛞💨😩",
                label: "2",
              },
              {
                e: "👨🧑🔧🚗😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last week, Mr Brown was driving to work in the rain. Suddenly, there was a loud noise and the car stopped. One of the tyres was flat. Mr Brown didn't know how to change it, and he felt very frustrated. Then a young woman stopped her car and helped him. They changed the tyre together, and Mr Brown thanked her.",
          },
        },
      ],
    },
  ],
};
