import type { CambridgeTest } from "./types";

/** A2 Key practice test 84 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_84: CambridgeTest = {
  id: "key-84",
  level: "key",
  no: 84,
  title: "A2 Key · Practice Test 84",
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
                    "CAFÉ",
                    "We now sell vegan cakes!",
                    "Ask the staff for details.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The café is closing.",
                  "The café has new cakes.",
                  "Cakes are free.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Tom, can you help me move my sofa on Saturday? I'll buy you lunch. Ben",
                  ],
                },
                question: "What does Ben want?",
                options: [
                  "help with something heavy",
                  "to sell his sofa",
                  "to buy Tom lunch on Sunday",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BIRD HIDE",
                    "Please be quiet.",
                  ],
                },
                question: "Why should you be quiet?",
                options: [
                  "because people are sleeping",
                  "because it's a library",
                  "not to frighten the birds",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ruby,",
                    "My party has moved from Saturday to Sunday because my grandma is visiting. Same time! Ella",
                  ],
                },
                question: "Why has the party moved?",
                options: [
                  "The weather is bad.",
                  "Ella is ill.",
                  "A relative is visiting.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Students who arrive after 9 a.m. must sign the late book.",
                  ],
                },
                question: "What should late students do?",
                options: [
                  "write their name in a book",
                  "go home",
                  "wait outside",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "GUITAR LESSONS",
                    "Learn your favourite songs!",
                    "All ages. Lessons in my studio or online.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "They are only for children.",
                  "You can have them on the internet.",
                  "They are only in a studio.",
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
                title: "Ryan",
                text: "I love surfing. I live by the sea and surf every day after school. Last summer, I went to a surf camp in Portugal. I learned to surf really big waves. My dream is to surf in Hawaii, where the biggest waves are.",
              },
              {
                title: "Amy",
                text: "My hobby is reading. I read about four books a week. I'm in two book clubs: one at school and one at the library. I've also started a blog where I write about books. Lots of people read it, and some authors have written to me!",
              },
              {
                title: "Daniel",
                text: "I'm a keen musician. I play the piano and the trumpet. I'm in the school orchestra and a jazz band. Last month, our jazz band played at a big festival. We played in front of a thousand people! I want to study music at university.",
              },
            ],
            items: [
              {
                text: "went to a camp abroad?",
                answer: 0,
              },
              {
                text: "wants to visit a famous place for their hobby?",
                answer: 0,
              },
              {
                text: "belongs to more than one group?",
                answer: 1,
              },
              {
                text: "has been contacted by writers?",
                answer: 1,
              },
              {
                text: "plays more than one instrument?",
                answer: 2,
              },
              {
                text: "performed at a festival?",
                answer: 2,
              },
              {
                text: "does their hobby every day?",
                answer: 0,
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
              title: "The girl who saved her village",
              paragraphs: [
                "In a small village in Kenya, there was no clean water. People had to walk for three hours to get water from a river. Twelve-year-old Grace wanted to help.",
                "'I saw my mother carry heavy water every day,' says Grace. 'It made her very tired. I knew we needed a well in our village.'",
                "Grace wrote letters to charities asking for help. 'Most of them didn't reply,' she says. 'But one charity in England said yes!'",
                "Now the village has a well with clean water. 'Everything is better,' says Grace. 'Girls can go to school because they don't need to walk for water. I'm going to be an engineer and build more wells for other villages.'",
              ],
            },
            items: [
              {
                question: "What was the problem in Grace's village?",
                options: [
                  "There was no clean water.",
                  "There was no school.",
                  "There were no roads.",
                ],
                answer: 0,
              },
              {
                question: "Why did Grace want to help?",
                options: [
                  "Her teacher asked her.",
                  "She saw her mother working hard.",
                  "She wanted to be famous.",
                ],
                answer: 1,
              },
              {
                question: "What did Grace do?",
                options: [
                  "She wrote to charities.",
                  "She dug a well herself.",
                  "She moved to England.",
                ],
                answer: 0,
              },
              {
                question: "What has changed since the well was built?",
                options: [
                  "People walk further.",
                  "The river has dried up.",
                  "Girls can go to school.",
                ],
                answer: 2,
              },
              {
                question: "What does Grace want to be?",
                options: [
                  "a teacher",
                  "a doctor",
                  "an engineer",
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
            title: "Trees in cities",
            text: [
              "Trees are very important in cities. They make the air cleaner by taking in {1} gases and producing oxygen.",
              "Trees also help to keep cities cool. In hot weather, the temperature under a tree can be ten degrees {2} than in the sun. This is very important in summer.",
              "Trees are good for people's health. Studies show that people who live near trees feel happier and less {3}. Trees also give homes to birds, insects and other animals. Many cities are now {4} more trees. In London, there are more than eight million trees! Some cities have special {5} where people can adopt a tree and look after it. If you want to help, why not ask your school to {6} some trees?",
            ],
            gaps: [
              {
                options: [
                  "harm",
                  "harmless",
                  "harmful",
                ],
                answer: 2,
              },
              {
                options: [
                  "cooler",
                  "cool",
                  "coolest",
                ],
                answer: 0,
              },
              {
                options: [
                  "stressing",
                  "stressed",
                  "stress",
                ],
                answer: 1,
              },
              {
                options: [
                  "planting",
                  "putting up",
                  "building",
                ],
                answer: 0,
              },
              {
                options: [
                  "plans up",
                  "ideas up",
                  "programmes",
                ],
                answer: 2,
              },
              {
                options: [
                  "put up",
                  "plant",
                  "build",
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
              "Hi Isla,",
              "I'm so sorry {1} what happened yesterday. I didn't mean to break your phone. I feel really bad.",
              "I've talked to my parents, and they say I {2} pay for a new one. I'm going to use my birthday money.",
              "Can you tell me what kind of phone it was? I'll try to find the same one. If it's very expensive, I'll pay {3} half now and the rest next month. I hope you're not too angry {4} me. You're my best friend, and I don't want to lose you. Please write {5} soon. Sorry again {6}!",
              "Love,",
              "Freya",
            ],
            answers: [
              [
                "about",
                "for",
              ],
              [
                "should",
                "must",
                "can",
                "will",
              ],
              [
                "you",
              ],
              [
                "with",
              ],
              [
                "back",
              ],
              [
                "again",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a new club. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say what the club is.",
              "Say where it is.",
              "Say why you want to go.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nI'm going to join a cooking club at the community centre near my school. It's on Wednesdays after school. I want to go because I love food and I want to learn new recipes.\n\nBye,\nIrem",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🏠🔑",
                label: "1",
              },
              {
                e: "👨🔑❓🪟",
                label: "2",
              },
              {
                e: "👨🪜🪟😅",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One evening, Mr Jones came home from work and realised he had lost his keys. He couldn't get into his house! He looked everywhere, but he couldn't find them. Then he saw that his bedroom window was open. He borrowed a ladder from his neighbour and climbed in through the window. The next day, he found his keys in his car.",
          },
        },
      ],
    },
  ],
};
