import type { CambridgeTest } from "./types";

/** A2 Key practice test 67 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_67: CambridgeTest = {
  id: "key-67",
  level: "key",
  no: 67,
  title: "A2 Key · Practice Test 67",
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
                    "TRAIN",
                    "Seats in this carriage must be booked in advance.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You need a reservation to sit here.",
                  "This carriage is free.",
                  "Anyone can sit here.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, I'm going to be home late. Can you start dinner? The recipe is on the fridge. Mum",
                  ],
                },
                question: "What does Mum want Jo to do?",
                options: [
                  "buy food",
                  "begin cooking",
                  "wait for her",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "NO PARKING",
                    "Fire exit. Keep clear at all times.",
                  ],
                },
                question: "Why can't you park here?",
                options: [
                  "It's an emergency exit.",
                  "It's private.",
                  "It costs too much.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "My computer is working again! Thanks for fixing it. I owe you a pizza! Ben",
                  ],
                },
                question: "Why has Ben written this email?",
                options: [
                  "to ask Max for help",
                  "to invite Max to dinner tomorrow",
                  "to thank Max",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Adults only: 7–9 p.m. on Tuesdays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed on Tuesdays.",
                  "Only children can swim on Tuesdays.",
                  "Children can't swim on Tuesday evenings.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "ROOM FOR STUDENT",
                    "Quiet house near the college.",
                    "Meals included. £350 a month.",
                  ],
                },
                question: "What do we know about the room?",
                options: [
                  "Food is part of the price.",
                  "It is far from the college.",
                  "It costs £350 a week.",
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
                title: "Jessica",
                text: "I'm crazy about tennis. I've been playing for six years. I train every day after school with my coach. Last year, I played at a junior tournament in London and got to the semi-final. I'd love to play at Wimbledon one day.",
              },
              {
                title: "Ryan",
                text: "My hobby is drawing. I draw comics about superheroes I've invented. I've drawn more than a hundred pages! I post them on a website for young artists. Some people have asked me to draw pictures for them, and they pay me a little money.",
              },
              {
                title: "Zoe",
                text: "I love music, especially singing. I sing in a choir at my church every Sunday. We also give concerts at Christmas and Easter. I'm the youngest member. The others are adults, but they're really kind to me. I'm learning a lot from them.",
              },
            ],
            items: [
              {
                text: "trains daily?",
                answer: 0,
              },
              {
                text: "reached the last four in a competition?",
                answer: 0,
              },
              {
                text: "invented characters?",
                answer: 1,
              },
              {
                text: "earns money from their hobby?",
                answer: 1,
              },
              {
                text: "is younger than the others in their group?",
                answer: 2,
              },
              {
                text: "performs at special times of year?",
                answer: 2,
              },
              {
                text: "dreams of playing somewhere famous?",
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
              title: "A different holiday",
              paragraphs: [
                "Last summer, fifteen-year-old Amir and his family didn't go to a hotel. They went on a working holiday on an organic farm in Italy.",
                "'We helped the farmer in exchange for food and a room,' explains Amir. 'We picked tomatoes and grapes, and we fed the chickens.'",
                "Amir found the work hard at first. 'It was very hot, and we started at six in the morning,' he says. 'But in the afternoon, we had free time. We swam in a lake and visited small villages.'",
                "The best part for Amir was the food. 'Everything was so fresh,' he says. 'The farmer's wife taught me to make pasta. Now I make it at home every week. It was the best holiday ever.'",
              ],
            },
            items: [
              {
                question: "What kind of holiday did Amir's family have?",
                options: [
                  "They stayed in a hotel.",
                  "They went camping.",
                  "They worked on a farm.",
                ],
                answer: 2,
              },
              {
                question: "What did they get in exchange for their work?",
                options: [
                  "food and a place to sleep",
                  "money",
                  "a free car",
                ],
                answer: 0,
              },
              {
                question: "Why did Amir find the work hard?",
                options: [
                  "The farmer was unkind.",
                  "It was hot and early.",
                  "He didn't like animals.",
                ],
                answer: 1,
              },
              {
                question: "What did Amir do in his free time?",
                options: [
                  "swam and explored",
                  "worked more",
                  "slept",
                ],
                answer: 0,
              },
              {
                question: "What did Amir learn to make?",
                options: [
                  "bread",
                  "pizza",
                  "pasta",
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
            title: "Coral reefs",
            text: [
              "Coral reefs are underwater structures made by tiny animals called corals. They are found in warm, shallow seas around the world. They are {1} called the 'rainforests of the sea'.",
              "About a quarter of all sea animals live in coral reefs, even though reefs {2} less than one per cent of the ocean floor. Fish, turtles, sharks and many other animals depend on them.",
              "Coral reefs are also important for people. They protect coastlines from storms and {3} food and jobs for millions of people. Sadly, coral reefs are in danger. Climate change is making the sea warmer, and this {4} the corals. Pollution and fishing also damage reefs. Scientists say we could lose most of the world's reefs {5} we don't act soon. People are trying to help by growing new corals and putting them back in the sea. You can help too by not touching coral when you {6} snorkelling.",
            ],
            gaps: [
              {
                options: [
                  "sometime",
                  "some times",
                  "sometimes",
                ],
                answer: 2,
              },
              {
                options: [
                  "fill",
                  "hold",
                  "cover",
                ],
                answer: 2,
              },
              {
                options: [
                  "provide",
                  "give up",
                  "make up",
                ],
                answer: 0,
              },
              {
                options: [
                  "breaks up",
                  "harms",
                  "cuts",
                ],
                answer: 1,
              },
              {
                options: [
                  "if",
                  "so",
                  "because",
                ],
                answer: 0,
              },
              {
                options: [
                  "do",
                  "make",
                  "go",
                ],
                answer: 2,
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
              "Hi Tom,",
              "I'm sorry I couldn't come to your party on Saturday. I was ill {1} a bad cold. How was it? I'm sure it was great!",
              "I've bought you a present. It's a video game I think you'll like. I'll give it to you {2} school tomorrow.",
              "Are you free next weekend? Maybe we could go to the cinema together. There's a new action film {3} looks really good. My dad can drive us there. Let me know what you think. Sorry again {4} missing your party. I hope you had {5} brilliant time. See you {6}!",
              "Josh",
            ],
            answers: [
              [
                "with",
              ],
              [
                "at",
              ],
              [
                "that",
                "which",
              ],
              [
                "for",
                "about",
              ],
              [
                "a",
              ],
              [
                "tomorrow",
                "soon",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to borrow a bike from your English friend, Alex. Write an email to Alex. Write 25 words or more.",
            prompts: [
              "Say why you need a bike.",
              "Say when you need it.",
              "Say how long you will keep it.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nCould I borrow your bike, please? My cousin is visiting and we want to cycle to the lake. I need it on Saturday morning. I will give it back to you on Sunday evening.\n\nThanks,\nOnur",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👧🛒🍌",
                label: "1",
              },
              {
                e: "👧🍌🐒😮",
                label: "2",
              },
              {
                e: "👧🐒🍌😂",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last summer, Lucy went on holiday to a country with lots of monkeys. One day, she bought some bananas at the market. While she was walking back to the hotel, a monkey jumped down from a tree and took a banana from her bag! Lucy was surprised, but then she laughed. She gave the monkey another banana and took a photo of it.",
          },
        },
      ],
    },
  ],
};
