import type { CambridgeTest } from "./types";

/** A2 Key practice test 97 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_97: CambridgeTest = {
  id: "key-97",
  level: "key",
  no: 97,
  title: "A2 Key · Practice Test 97",
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
                    "LIBRARY",
                    "Children's books are on the ground floor.",
                  ],
                },
                question: "Where can you find children's books?",
                options: [
                  "upstairs",
                  "on the ground floor",
                  "in the basement",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ben, I'm stuck in traffic. Can you start the meeting without me? Jack",
                  ],
                },
                question: "What does Jack want Ben to do?",
                options: [
                  "begin the meeting",
                  "wait for him",
                  "cancel the meeting",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THEATRE",
                    "Mobile phones must be switched off.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can use your phone.",
                  "Phones are sold here.",
                  "Turn your phone off.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "I've bought two tickets for the zoo on Saturday. Do you want to come with me? Emma",
                  ],
                },
                question: "What is Emma doing?",
                options: [
                  "asking Kate for a ticket",
                  "inviting Kate to the zoo",
                  "telling Kate the zoo is closed",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Picnic tables available near the lake.",
                  ],
                },
                question: "Where can you have a picnic?",
                options: [
                  "in the playground",
                  "near the lake",
                  "nowhere",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BABYSITTER WANTED",
                    "For one child, age 3. Two evenings a week.",
                    "Must like children!",
                  ],
                },
                question: "What do we know about the job?",
                options: [
                  "It's for three children.",
                  "It's every day.",
                  "It's for two evenings.",
                ],
                answer: 2,
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
                title: "Oscar",
                text: "I love rowing. I'm in a rowing club, and we train on the river every morning at six o'clock. It's very hard work, but I love it. Last year, our team won a big race. I want to row at university.",
              },
              {
                title: "Lily",
                text: "My hobby is making videos. I make funny videos with my cat and post them online. My cat is very famous now! Some of my videos have more than a million views. A pet food company wants to work with me.",
              },
              {
                title: "Kofi",
                text: "I'm interested in languages. I speak English, French and Twi. Now I'm learning Chinese. I study every day using an app, and I have a Chinese pen friend. Next summer, I'm going to visit him in Beijing.",
              },
            ],
            items: [
              {
                text: "trains early in the morning?",
                answer: 0,
              },
              {
                text: "hopes to continue at university?",
                answer: 0,
              },
              {
                text: "has a famous pet?",
                answer: 1,
              },
              {
                text: "has been contacted by a company?",
                answer: 1,
              },
              {
                text: "is learning a fourth language?",
                answer: 2,
              },
              {
                text: "will travel to visit someone?",
                answer: 2,
              },
              {
                text: "won a race with a team?",
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
              title: "The flying car",
              paragraphs: [
                "For many years, people have dreamed about flying cars. Now, some companies are making them!",
                "One of these cars was made in Slovakia. It looks like a normal car, but it has wings that come out of the sides. 'It takes about three minutes to change from a car into a plane,' explains engineer Peter.",
                "The flying car can fly for about 1,000 kilometres without stopping. It can travel at about 170 kilometres an hour in the air. 'You need a pilot's licence to fly it,' says Peter. 'And you need a runway to take off.'",
                "Flying cars are very expensive now. 'But in the future, they might be cheaper,' says Peter. 'Maybe one day, everyone will have one!'",
              ],
            },
            items: [
              {
                question: "Where was the flying car made?",
                options: [
                  "Slovakia",
                  "the USA",
                  "Japan",
                ],
                answer: 0,
              },
              {
                question: "How long does it take to change into a plane?",
                options: [
                  "about thirty minutes",
                  "about three minutes",
                  "about three hours",
                ],
                answer: 1,
              },
              {
                question: "How far can the flying car fly?",
                options: [
                  "about 1,000 kilometres",
                  "about 100 kilometres",
                  "about 10,000 kilometres",
                ],
                answer: 0,
              },
              {
                question: "What do you need to fly it?",
                options: [
                  "a special helmet",
                  "a big garage",
                  "a pilot's licence",
                ],
                answer: 2,
              },
              {
                question: "What does Peter say about the future?",
                options: [
                  "Flying cars will disappear.",
                  "Flying cars might become cheaper.",
                  "Flying cars will be more expensive.",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Sunflowers",
            text: [
              "Sunflowers are tall plants with big yellow flowers. They can {1} up to three metres tall! Some sunflowers have grown even taller.",
              "Young sunflowers do something very interesting. They turn their flowers to {2} the sun as it moves across the sky. When they get older, they usually face east.",
              "Sunflowers first grew in North America. Native Americans used them for food and medicine thousands of years ago. Today, sunflowers are grown all over the world. Their seeds are very {3}. People eat them as a snack and use them to make oil. Birds also love to eat sunflower seeds. Sunflowers are good for the environment too. They help bees, {4} they have lots of pollen. If you want to grow sunflowers, plant the seeds in spring in a {5} place. Water them often, and they will {6} quickly!",
            ],
            gaps: [
              {
                options: [
                  "rise",
                  "grow",
                  "build",
                ],
                answer: 1,
              },
              {
                options: [
                  "see up",
                  "follow",
                  "look up",
                ],
                answer: 1,
              },
              {
                options: [
                  "health",
                  "healthily",
                  "healthy",
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
                  "sun",
                  "sunny",
                  "sunshine",
                ],
                answer: 1,
              },
              {
                options: [
                  "grow",
                  "rise up",
                  "build",
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
              "Hi Max,",
              "I'm writing to tell you about my new football boots. My parents bought them {1} me for my birthday. They're blue and white, and they're really comfortable.",
              "I wore them for the first time {2} Saturday. I scored two goals! I think they're lucky boots.",
              "Are you coming to football training on Wednesday? I want to show them {3} you. After training, we could go to my house and play video games. My mum says you can stay {4} dinner. Let me know {5} you can come. See you {6}!",
              "Josh",
            ],
            answers: [
              [
                "for",
              ],
              [
                "on",
                "last",
              ],
              [
                "to",
              ],
              [
                "for",
              ],
              [
                "if",
                "whether",
              ],
              [
                "soon",
                "then",
                "wednesday",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are planning a party. Write an email to your English friend, Pat. Write 25 words or more.",
            prompts: [
              "Say why you are having a party.",
              "Say when it is.",
              "Ask Pat to help you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nI'm having a party because I've finished my exams! It's next Saturday evening at my house. Could you help me get the food ready on Saturday afternoon?\n\nBye,\nNehir",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🎒🏫",
                label: "1",
              },
              {
                e: "👧🌧️☂️❌",
                label: "2",
              },
              {
                e: "👧🧥👩‍🏫😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Mia walked to school without an umbrella. Suddenly, it started to rain heavily, and she got completely wet. When she arrived at school, she was cold and unhappy. Her teacher saw her and gave her a warm jumper from the lost property box. Mia felt much better. She thanked her teacher and decided to always check the weather before leaving home.",
          },
        },
      ],
    },
  ],
};
