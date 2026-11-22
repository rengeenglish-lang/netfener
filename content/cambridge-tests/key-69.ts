import type { CambridgeTest } from "./types";

/** A2 Key practice test 69 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_69: CambridgeTest = {
  id: "key-69",
  level: "key",
  no: 69,
  title: "A2 Key · Practice Test 69",
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
                    "Students who want to join the school trip must return the form by Friday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The trip is on Friday.",
                  "Students must give back a form to go on the trip.",
                  "All students must go on the trip.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Dan, I'm in the queue for the concert. It's very long. Get here soon! Max",
                  ],
                },
                question: "What does Max want Dan to do?",
                options: [
                  "buy tickets",
                  "go home",
                  "come quickly",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE CLOSE THE GATE",
                    "Sheep in field.",
                  ],
                },
                question: "Why should you close the gate?",
                options: [
                  "to keep the animals in",
                  "because it's private",
                  "because it's dangerous",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Kate,",
                    "The yoga class has moved from Monday to Wednesday. Same time, same place. Sue",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the time of the class",
                  "the day of the class",
                  "the teacher",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Photos allowed without flash.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can take photos, but don't use a flash.",
                  "Photos are not allowed.",
                  "You must use a flash.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SKATEBOARD FOR SALE",
                    "Used, but in good condition.",
                    "Comes with helmet and pads. £40.",
                  ],
                },
                question: "What do we know about the skateboard?",
                options: [
                  "It is new.",
                  "It needs repairing.",
                  "It comes with safety equipment.",
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
                title: "Ellie",
                text: "I'm a keen climber. I go to an indoor climbing wall three times a week. I've been climbing for four years. Last year, I started climbing outdoors on real rocks. It's much more exciting! My dream is to climb in the Alps one day.",
              },
              {
                title: "Noah",
                text: "My hobby is cooking. I cook dinner for my family twice a week. I love trying recipes from different countries. Last month, I made sushi for the first time. It wasn't perfect, but my family liked it. I'm going to a cooking course in the summer holidays.",
              },
              {
                title: "Aria",
                text: "I love drama. I'm in a theatre group, and we put on plays twice a year. Last month, I played the main role in a play about a girl who travels in time. I had to learn hundreds of lines! I'd love to be a professional actress.",
              },
            ],
            items: [
              {
                text: "tried doing their hobby in a new place?",
                answer: 0,
              },
              {
                text: "wants to visit a famous mountain area?",
                answer: 0,
              },
              {
                text: "tried something new recently?",
                answer: 1,
              },
              {
                text: "will learn more in the holidays?",
                answer: 1,
              },
              {
                text: "had a big part?",
                answer: 2,
              },
              {
                text: "had to remember a lot?",
                answer: 2,
              },
              {
                text: "cooks for family?",
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
              title: "A boy and his telescope",
              paragraphs: [
                "When eleven-year-old Leo got a telescope for his birthday, he didn't know it would change his life. 'I looked at the Moon on the first night,' he says. 'I could see craters! I was amazed.'",
                "Now Leo looks at the sky every clear night. 'I've seen Saturn's rings and four of Jupiter's moons,' he says. 'I write everything down in a notebook.'",
                "Last year, Leo saw something strange in the sky. 'It was a comet,' he explains. 'I took a photo and sent it to an astronomy website. They said it was a very good photo and put it on their homepage!'",
                "Leo's dream is to work for a space agency. 'I want to discover new planets,' he says. 'There are so many things in space that we don't know about yet.'",
              ],
            },
            items: [
              {
                question: "What did Leo get for his birthday?",
                options: [
                  "a camera",
                  "a telescope",
                  "a book about space",
                ],
                answer: 1,
              },
              {
                question: "What did Leo see on the first night?",
                options: [
                  "Saturn",
                  "holes on the Moon",
                  "a comet",
                ],
                answer: 1,
              },
              {
                question: "What does Leo do when he looks at the sky?",
                options: [
                  "He takes videos.",
                  "He calls his friends.",
                  "He writes notes.",
                ],
                answer: 2,
              },
              {
                question: "What happened to Leo's comet photo?",
                options: [
                  "It appeared on a website.",
                  "It won a prize.",
                  "It was in a newspaper.",
                ],
                answer: 0,
              },
              {
                question: "What would Leo like to do?",
                options: [
                  "be a teacher",
                  "find new planets",
                  "build telescopes",
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
            title: "The internet",
            text: [
              "The internet has changed the way we live. Today, more than five billion people around the world {1} it.",
              "The internet started in the 1960s as a way for scientists to share information. In 1989, a British scientist called Tim Berners-Lee {2} the World Wide Web. This made the internet much easier to use.",
              "Today, we use the internet for many things. We send messages, watch videos, play games and buy things online. Students use it to {3} information for their homework. However, the internet also has some problems. Some people spend too much time online and don't get enough {4}. It's also important to be careful about what information you {5} online. Never give your address or password to people you don't know. The internet is a wonderful {6}, but we need to use it wisely.",
            ],
            gaps: [
              {
                options: [
                  "make",
                  "use",
                  "do",
                ],
                answer: 1,
              },
              {
                options: [
                  "invented",
                  "discovered",
                  "found up",
                ],
                answer: 0,
              },
              {
                options: [
                  "look",
                  "search up",
                  "find",
                ],
                answer: 2,
              },
              {
                options: [
                  "sport up",
                  "training up",
                  "exercise",
                ],
                answer: 2,
              },
              {
                options: [
                  "share",
                  "tell up",
                  "give up",
                ],
                answer: 0,
              },
              {
                options: [
                  "thing up",
                  "tool",
                  "stuff",
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
              "Hi Grace,",
              "Guess what! My family is going on holiday to Japan this summer! I'm so excited. We're going {1} three weeks.",
              "We're going to visit Tokyo and Kyoto. I really want to see the temples and gardens. I also want to try real Japanese food, like sushi and ramen. I've already started learning {2} Japanese words.",
              "Have you ever {3} to Japan? If you have, can you give me some advice? What should I take {4} me? Is there anything I should know about Japanese culture? Write back {5} you have time. I'll send you lots {6} photos!",
              "Love,",
              "Mia",
            ],
            answers: [
              [
                "for",
              ],
              [
                "some",
              ],
              [
                "been",
              ],
              [
                "with",
              ],
              [
                "when",
                "if",
              ],
              [
                "of",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to meet your English friend, Pat, in town. Write an email to Pat. Write 25 words or more.",
            prompts: [
              "Suggest a day and time.",
              "Say where you will meet.",
              "Say what you can do.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nShall we meet in town on Saturday at two o'clock? We can meet outside the big bookshop. Then we could go shopping and have a milkshake at the new café.\n\nBye,\nIlgın",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🌧️🚌",
                label: "1",
              },
              {
                e: "👩🚌☂️❓",
                label: "2",
              },
              {
                e: "👨☂️👩😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One rainy evening, Mrs Taylor got on the bus to go home. When she got off, she realised she had left her umbrella on the bus. She was very wet when she got home. The next day, she was waiting at the bus stop when the same bus driver arrived. He was holding her umbrella! He had kept it safe for her. Mrs Taylor was very grateful.",
          },
        },
      ],
    },
  ],
};
