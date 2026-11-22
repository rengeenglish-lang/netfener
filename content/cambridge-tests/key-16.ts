import type { CambridgeTest } from "./types";

/** A2 Key practice test 16 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_16: CambridgeTest = {
  id: "key-16",
  level: "key",
  no: 16,
  title: "A2 Key · Practice Test 16",
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
                    "SCHOOL GATES",
                    "Gates close at 8.45 a.m.",
                    "Late students must go to the main office.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The school opens at 8.45 a.m.",
                  "Students who arrive late should report to the office.",
                  "Late students cannot come into school.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Zoe, can you lend me your blue dress for the party? I'll bring it back on Monday. Amy",
                  ],
                },
                question: "What does Amy want?",
                options: [
                  "to buy a new dress",
                  "to borrow some clothes",
                  "to invite Zoe to a party",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "RESTAURANT",
                    "Kids eat free on Sundays with every adult meal.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The restaurant is only open on Sundays.",
                  "Adults eat free on Sundays.",
                  "Children don't pay on Sundays if an adult eats too.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Dear students,",
                    "The school concert is now on 12 May, not 5 May, because the hall is being painted. Ms Price",
                  ],
                },
                question: "Why has the concert date changed?",
                options: [
                  "There is work in the hall.",
                  "The teacher is ill.",
                  "The students need more practice.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BIKE HIRE",
                    "£5 an hour or £20 for the whole day.",
                    "Helmets included.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You need to bring your own helmet.",
                  "It's cheaper to hire a bike for a full day.",
                  "You can only hire a bike for an hour.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "LOST CAT",
                    "Grey with white paws. Answers to 'Smoky'.",
                    "Please call 07711 456789 if you see him.",
                  ],
                },
                question: "What does the advertisement ask people to do?",
                options: [
                  "phone if they find the cat",
                  "give the cat food",
                  "bring a cat to the shop",
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
                title: "Ethan",
                text: "I've been skiing since I was four. My family goes to the mountains every winter for two weeks. This year, I started snowboarding too. It's harder than skiing, and I fell over a lot at first! I'd love to work as a ski teacher when I'm older.",
              },
              {
                title: "Sofia",
                text: "My hobby is photography. I take photos of buildings and streets in my city. I've got an old camera that uses film, not a digital one. My aunt has a darkroom in her house, and she shows me how to develop the photos. It takes time, but the results are beautiful.",
              },
              {
                title: "Max",
                text: "I play in a basketball team. We train three times a week and play matches on Sundays. I'm the captain, so I have to help the younger players. Last season, our team won every match. I'm also learning to be a referee.",
              },
            ],
            items: [
              {
                text: "tried something new this year?",
                answer: 0,
              },
              {
                text: "uses old technology?",
                answer: 1,
              },
              {
                text: "has a special responsibility in a group?",
                answer: 2,
              },
              {
                text: "learns from a family member at their home?",
                answer: 1,
              },
              {
                text: "goes on a holiday every year for their hobby?",
                answer: 0,
              },
              {
                text: "had a very successful year?",
                answer: 2,
              },
              {
                text: "is training for a different role in their sport?",
                answer: 2,
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
              title: "The young chef",
              paragraphs: [
                "Thirteen-year-old Ana Costa is already a famous chef in her town. Every Sunday, she cooks lunch for twenty old people at a community centre.",
                "'I started cooking with my grandmother when I was little,' says Ana. 'She taught me all her recipes. When she moved into a care home, I wanted to cook for her and her friends.'",
                "Ana plans the menu every week. 'I try to make healthy food,' she explains. 'But I always make a dessert too, because everyone loves something sweet!' Local shops give her the vegetables for free.",
                "The old people love Ana's food. 'She's a wonderful cook,' says eighty-five-year-old Mr Davies. 'And she's always smiling.' Ana hopes to go to cooking school one day. 'I want to have my own restaurant,' she says.",
              ],
            },
            items: [
              {
                question: "What does Ana do every Sunday?",
                options: [
                  "She goes to a cooking school.",
                  "She works in a restaurant.",
                  "She makes a meal for older people.",
                ],
                answer: 2,
              },
              {
                question: "Why did Ana start cooking for the community centre?",
                options: [
                  "Her teacher asked her to.",
                  "Her grandmother had gone to live there.",
                  "She wanted to earn money.",
                ],
                answer: 1,
              },
              {
                question: "What does Ana always include on the menu?",
                options: [
                  "meat",
                  "something sweet",
                  "soup",
                ],
                answer: 1,
              },
              {
                question: "How does Ana get her vegetables?",
                options: [
                  "She grows them herself.",
                  "Her grandmother buys them.",
                  "Shops give them to her.",
                ],
                answer: 2,
              },
              {
                question: "What does Mr Davies say about Ana?",
                options: [
                  "She is cheerful.",
                  "She cooks too much.",
                  "She is too young.",
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
            title: "Rainbows",
            text: [
              "A rainbow is one of the most beautiful things in nature. You can see one when the sun {1} through drops of rain in the air. The light separates into seven colours: red, orange, yellow, green, blue, indigo and violet.",
              "To see a rainbow, you must have the sun {2} you and the rain in front of you. That's why rainbows often {3} in the late afternoon, after a storm.",
              "Sometimes you can see two rainbows at the same time. The second rainbow is {4} and its colours are in the opposite order. In some {5}, people believe there is gold at the end of a rainbow. But you can never reach it, because the rainbow {6} as you move!",
            ],
            gaps: [
              {
                options: [
                  "shines",
                  "lights",
                  "burns",
                ],
                answer: 0,
              },
              {
                options: [
                  "after",
                  "behind",
                  "under",
                ],
                answer: 1,
              },
              {
                options: [
                  "appear",
                  "show",
                  "come",
                ],
                answer: 0,
              },
              {
                options: [
                  "thinner",
                  "lighter",
                  "weaker",
                ],
                answer: 2,
              },
              {
                options: [
                  "lands",
                  "places",
                  "countries",
                ],
                answer: 2,
              },
              {
                options: [
                  "moves",
                  "runs",
                  "goes",
                ],
                answer: 0,
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
              "Hi Daniel,",
              "I'm sorry, but I can't come to your house {1} Saturday. My grandparents are visiting us from Scotland, and my mum wants me {2} stay at home.",
              "Could we meet on Sunday instead? We {3} go to the park and play tennis. I've got a new racket. I think you'll like it!",
              "Let me know {4} Sunday is OK for you. If it's not, we can meet one day next week {5} school. Say hello to your brother {6} me.",
              "Liam",
            ],
            answers: [
              [
                "on",
                "this",
              ],
              [
                "to",
              ],
              [
                "could",
                "can",
              ],
              [
                "if",
                "whether",
              ],
              [
                "after",
              ],
              [
                "for",
                "from",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to the cinema with your English friend, Chris. Write an email to Chris. Write 25 words or more.",
            prompts: [
              "Say which day you want to go.",
              "Say where you will meet.",
              "Say what you will do after the film.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Chris' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Chris,\n\nShall we go to the cinema on Saturday? We can meet outside the cinema at two o'clock. After the film, we could go to the burger restaurant next door for lunch.\n\nSee you,\nArda",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🌊🏖️",
                label: "1",
              },
              {
                e: "👧🐚🧜",
                label: "2",
              },
              {
                e: "👧📷🐚😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Maya was walking on the beach with her family. She found a big, beautiful shell in the sand. When she held it to her ear, she could hear the sound of the sea! She was very excited. She took a photo of it and showed it to her parents. Now the shell is on the shelf in her bedroom.",
          },
        },
      ],
    },
  ],
};
