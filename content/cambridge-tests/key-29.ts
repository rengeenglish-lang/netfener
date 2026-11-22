import type { CambridgeTest } from "./types";

/** A2 Key practice test 29 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_29: CambridgeTest = {
  id: "key-29",
  level: "key",
  no: 29,
  title: "A2 Key · Practice Test 29",
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
                    "SCHOOL",
                    "Students must wear school uniform on the trip.",
                    "Bring your own lunch.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students should bring food with them.",
                  "Students can wear their own clothes.",
                  "Lunch will be provided.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Sarah, I'm outside your house. Can you open the door? The bell isn't working. Ella",
                  ],
                },
                question: "What is the problem?",
                options: [
                  "Ella is late.",
                  "Sarah has lost her key.",
                  "Ella can't ring the doorbell.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BEACH CAFÉ",
                    "Open daily in summer.",
                    "Weekends only in winter.",
                  ],
                },
                question: "When is the café open in winter?",
                options: [
                  "every day",
                  "never",
                  "on Saturdays and Sundays",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jake,",
                    "The bus to the match leaves at 9, not 10. Please be at the school by 8.45. Coach",
                  ],
                },
                question: "What does the coach tell Jake?",
                options: [
                  "the new time to arrive",
                  "the result of the match",
                  "which bus to take",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Buy one, get one free on all fruit juices this week.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Fruit juice is free this week.",
                  "You can get two juices for the price of one.",
                  "All fruit is half price.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "HOUSE CLEANER WANTED",
                    "Two mornings a week. Must be reliable. Good pay.",
                  ],
                },
                question: "What do we know about the job?",
                options: [
                  "It is part-time.",
                  "It is in the evening.",
                  "It is badly paid.",
                ],
                answer: 0,
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
                title: "Maisie",
                text: "I love making jewellery. I make necklaces and bracelets with beads and sell them at a craft market once a month. I've earned enough money to buy a new phone! I learned by watching my aunt, who has her own jewellery shop.",
              },
              {
                title: "Tyler",
                text: "I've been doing judo for six years. I train at a club four times a week. I've won lots of competitions, and last year I became the national champion for my age group. My coach says I could go to the Olympics one day.",
              },
              {
                title: "Ivy",
                text: "I'm into bird-watching. I go to the woods near my house every weekend with my binoculars and a notebook. I've seen more than eighty kinds of birds. I also put food out for birds in my garden, and I count how many come every day.",
              },
            ],
            items: [
              {
                text: "bought something with money from their hobby?",
                answer: 0,
              },
              {
                text: "learned from a relative?",
                answer: 0,
              },
              {
                text: "could compete at the highest level?",
                answer: 1,
              },
              {
                text: "does their hobby in their garden?",
                answer: 2,
              },
              {
                text: "keeps written records?",
                answer: 2,
              },
              {
                text: "does their hobby many times a week?",
                answer: 1,
              },
              {
                text: "sells their work?",
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
              title: "A dog called Hero",
              paragraphs: [
                "When Mia Clarke was walking in the mountains with her family last winter, she fell and hurt her leg. 'I couldn't walk,' she remembers. 'It was snowing and getting dark. I was very scared.'",
                "Her family called the mountain rescue team. Two hours later, a dog called Hero found Mia under a tree. 'He started barking until the rescuers came,' says Mia. 'He stayed next to me and kept me warm.'",
                "Hero is a special rescue dog. He has been trained for three years to find people in the snow. 'Dogs have an amazing sense of smell,' explains his owner, Tom. 'Hero can find people even when they're under the snow.'",
                "Mia's leg is better now. 'I visit Hero every month,' she says. 'He saved my life. I want to train rescue dogs when I'm older.'",
              ],
            },
            items: [
              {
                question: "What happened to Mia?",
                options: [
                  "She lost her family.",
                  "She injured her leg.",
                  "She got lost in a town.",
                ],
                answer: 1,
              },
              {
                question: "What did Hero do when he found Mia?",
                options: [
                  "He made a noise to call the rescuers.",
                  "He carried her down the mountain.",
                  "He ran away.",
                ],
                answer: 0,
              },
              {
                question: "What do we learn about Hero?",
                options: [
                  "He is Mia's dog.",
                  "He is very young.",
                  "He has had a lot of training.",
                ],
                answer: 2,
              },
              {
                question: "Why are dogs good at rescue work?",
                options: [
                  "They are very fast.",
                  "They like the snow.",
                  "They can smell very well.",
                ],
                answer: 2,
              },
              {
                question: "What does Mia want to do in the future?",
                options: [
                  "train dogs to help people",
                  "become a doctor",
                  "climb more mountains",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Penguins",
            text: [
              "There are about eighteen kinds of penguin in the world. They all live in the southern half of the Earth. Some live in very cold places, like Antarctica, but others live in {1} warmer places, like South Africa.",
              "Penguins can't fly, but they are {2} swimmers. They use their wings like flippers. Some penguins can swim at more than thirty kilometres an hour.",
              "Penguins live in large groups called colonies. Some colonies have more than a million penguins! Penguins usually {3} one egg or two eggs at a time. The mother and father take turns to keep the eggs warm. When the babies are born, both parents {4} them. Sadly, some kinds of penguin are in danger because of climate change and {5}. Scientists are working hard to {6} them.",
            ],
            gaps: [
              {
                options: [
                  "much",
                  "many",
                  "more",
                ],
                answer: 0,
              },
              {
                options: [
                  "perfect",
                  "excellent",
                  "clever",
                ],
                answer: 1,
              },
              {
                options: [
                  "lay",
                  "put",
                  "make",
                ],
                answer: 0,
              },
              {
                options: [
                  "eat",
                  "give",
                  "feed",
                ],
                answer: 2,
              },
              {
                options: [
                  "dirty",
                  "pollution",
                  "rubbish",
                ],
                answer: 1,
              },
              {
                options: [
                  "keep",
                  "protect",
                  "guard",
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
              "Hi Hannah,",
              "I'm writing to ask {1} you want to come camping with my family next month. We're going to a campsite by a lake {2} four days.",
              "We'll sleep in tents and cook on a fire. There are lots of things to do. We can go swimming, canoeing and walking in the forest. I went there last year, {3} it was brilliant!",
              "You'll need to bring a sleeping bag and some warm clothes, because it gets cold {4} night. Ask your parents {5} let me know. I really hope you {6} come!",
              "Love,",
              "Isla",
            ],
            answers: [
              [
                "if",
                "whether",
              ],
              [
                "for",
              ],
              [
                "and",
              ],
              [
                "at",
              ],
              [
                "and",
              ],
              [
                "can",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You didn't go to school yesterday. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say why you didn't go.",
              "Say what you did instead.",
              "Ask Kim about the homework.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nI didn't go to school yesterday because I had a bad cold. I stayed in bed all day and watched films. Did the teacher give us any homework? Please tell me.\n\nThanks,\nAylin",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🌊🏄",
                label: "1",
              },
              {
                e: "🏄🌊💥😱",
                label: "2",
              },
              {
                e: "👨🚤🧑‍🚒😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Mark went surfing at the beach. The waves were very big that day. Suddenly, a huge wave knocked him off his board, and he couldn't swim back because the water was too strong. A lifeguard saw him and came quickly in a boat. She pulled Mark out of the water. Mark was very grateful and decided to take more surfing lessons.",
          },
        },
      ],
    },
  ],
};
