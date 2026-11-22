import type { CambridgeTest } from "./types";

/** A2 Key practice test 17 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_17: CambridgeTest = {
  id: "key-17",
  level: "key",
  no: 17,
  title: "A2 Key · Practice Test 17",
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
                    "COLLEGE",
                    "Evening classes in Spanish start next week.",
                    "Places are still available.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can still join the Spanish class.",
                  "The Spanish class is full.",
                  "Spanish classes are only in the morning.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Dan, the shop has your size in the red trainers. Do you want me to buy them for you? They're £35. Ben",
                  ],
                },
                question: "What does Ben want to know?",
                options: [
                  "what size Dan is",
                  "how much money Dan has",
                  "if Dan wants him to buy the trainers",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM CAFÉ",
                    "Please clear your table when you finish.",
                    "Thank you!",
                  ],
                },
                question: "What should customers do?",
                options: [
                  "pay at the table",
                  "wait for a waiter",
                  "take their things away when they leave",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi team,",
                    "Don't forget: we leave for the match at 8.30 on Saturday. Meet at the school car park. Bring water! Coach",
                  ],
                },
                question: "What does the coach want to remind players about?",
                options: [
                  "when and where to meet",
                  "the result of the last match",
                  "which players are in the team",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "The pool will be closed from 1 to 14 August for repairs.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool closes every August.",
                  "You can't swim there for two weeks in August.",
                  "The pool is being repaired now.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "NEW SHOP OPENING!",
                    "Sports clothes and shoes. Saturday 10 a.m.",
                    "The first 50 customers get a free T-shirt.",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "Some customers will get a present.",
                  "Everything is free on Saturday.",
                  "The shop opens at 10 p.m.",
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
                title: "Ruby",
                text: "I love horse riding. I've had my own pony, Bella, since I was nine. I look after her every day before and after school. I clean her, feed her and ride her. It takes a lot of time, but she's my best friend. We often enter shows together and win ribbons.",
              },
              {
                title: "Kai",
                text: "I'm in a band. I play the keyboard and I write most of our songs. We practise every weekend in my friend's basement. We've recorded five songs and put them online. A local radio station played one of them last month! That was so exciting.",
              },
              {
                title: "Maya",
                text: "I do karate. I've got a brown belt now, and I hope to get my black belt next year. I train at a club in town three times a week. My teacher says I'm one of the best students. I also help teach the younger children on Saturdays.",
              },
            ],
            items: [
              {
                text: "has a responsibility every day?",
                answer: 0,
              },
              {
                text: "creates something original?",
                answer: 1,
              },
              {
                text: "is working towards a goal next year?",
                answer: 2,
              },
              {
                text: "had something they made broadcast?",
                answer: 1,
              },
              {
                text: "has an animal?",
                answer: 0,
              },
              {
                text: "teaches other people?",
                answer: 2,
              },
              {
                text: "practises at someone else's home?",
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
              title: "A trip to space?",
              paragraphs: [
                "Fifteen-year-old Liam O'Connor wants to be an astronaut. Last summer, he went to a space camp in the USA for one week. 'It was the best experience of my life,' he says.",
                "At the camp, Liam learned about rockets and how astronauts live in space. 'We tried special machines that showed us what it feels like to be weightless,' he says. 'It was strange, but really fun.'",
                "Liam also worked in a team to plan a pretend mission to Mars. 'We had to solve lots of problems,' he explains. 'It showed me that teamwork is really important for astronauts.'",
                "Liam's parents paid for the camp, but Liam helped by washing cars in his street for six months. 'It was hard work,' he says. 'But it was worth it. Now I'm studying hard at science so I can follow my dream.'",
              ],
            },
            items: [
              {
                question: "How long was Liam at the space camp?",
                options: [
                  "one month",
                  "seven days",
                  "six months",
                ],
                answer: 1,
              },
              {
                question: "What did the special machines do?",
                options: [
                  "They showed how it feels to float.",
                  "They took students into space.",
                  "They built rockets.",
                ],
                answer: 0,
              },
              {
                question: "What did Liam learn from the Mars mission?",
                options: [
                  "Mars is too far to visit.",
                  "He doesn't like solving problems.",
                  "Working together is very important.",
                ],
                answer: 2,
              },
              {
                question: "How did Liam help to pay for the camp?",
                options: [
                  "He sold his things.",
                  "He worked at the camp.",
                  "He cleaned cars.",
                ],
                answer: 2,
              },
              {
                question: "What is Liam doing now?",
                options: [
                  "working hard at his science studies",
                  "training to be a pilot",
                  "planning another trip to the camp",
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
            title: "Lakes",
            text: [
              "A lake is a large area of water with land all {1} it. There are millions of lakes in the world. Most of them are in the north of the world, in countries like Canada and Finland.",
              "The deepest lake in the world is Lake Baikal in Russia. It is more than 1,600 metres deep! It is also very old. Scientists {2} it is about 25 million years old.",
              "Many lakes are {3} by rivers, but some are made by people. These are called reservoirs, and they {4} water for cities. Lakes are important homes for fish, birds and plants. They are also popular places for {5} activities, like swimming, fishing and sailing. But some lakes are becoming smaller because people {6} too much water from them.",
            ],
            gaps: [
              {
                options: [
                  "around",
                  "about",
                  "over",
                ],
                answer: 0,
              },
              {
                options: [
                  "know",
                  "think",
                  "guess",
                ],
                answer: 1,
              },
              {
                options: [
                  "fed",
                  "full",
                  "given",
                ],
                answer: 0,
              },
              {
                options: [
                  "give",
                  "bring",
                  "provide",
                ],
                answer: 2,
              },
              {
                options: [
                  "spare",
                  "free-time",
                  "empty",
                ],
                answer: 1,
              },
              {
                options: [
                  "bring",
                  "take",
                  "carry",
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
              "Hi Megan,",
              "Guess what! I've got a new puppy. Her name is Daisy, and she's three months old. She's small and brown {1} big ears.",
              "She's very naughty! Yesterday she ate one of my dad's shoes. But she's also very sweet. She sleeps {2} a basket next to my bed.",
              "Every evening, I take her {3} a walk in the park. She loves playing with other dogs. Would you like {4} meet her? You could come to my house {5} Saturday afternoon. Let me know {6} you can come!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "with",
                "and",
              ],
              [
                "in",
              ],
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "if",
                "whether",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just finished your exams. Write an email to your English friend, Lee. Write 25 words or more.",
            prompts: [
              "Say how your exams went.",
              "Say how you feel now.",
              "Say what you want to do next week.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Lee' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Lee,\n\nI finished my exams yesterday! I think most of them went well, but maths was difficult. I feel really happy and relaxed now. Next week, I want to go to the beach with my friends every day.\n\nBye,\nEce",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🍞🏪",
                label: "1",
              },
              {
                e: "👨💰❓",
                label: "2",
              },
              {
                e: "👦💰👨😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One morning, Mr Smith went to the bakery to buy some bread. When he wanted to pay, he realised his wallet wasn't in his pocket. He was very embarrassed. Then a boy came into the shop holding a wallet. 'Is this yours? I found it in the street,' he said. Mr Smith was very happy and he bought the boy a cake to say thank you.",
          },
        },
      ],
    },
  ],
};
