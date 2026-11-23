import type { CambridgeTest } from "./types";

/** A2 Key practice test 96 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_96: CambridgeTest = {
  id: "key-96",
  level: "key",
  no: 96,
  title: "A2 Key · Practice Test 96",
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
                    "The school bus will not run on Friday because of the strike.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "School is closed on Friday.",
                  "There will be no school bus on Friday.",
                  "The bus leaves early on Friday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, I've left my maths book on your desk. Can you bring it tomorrow? Zoe",
                  ],
                },
                question: "What does Zoe want Lucy to do?",
                options: [
                  "bring her book",
                  "buy a maths book",
                  "help with her homework",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "BEACH",
                    "No dogs between May and September.",
                  ],
                },
                question: "When can dogs go on the beach?",
                options: [
                  "in summer",
                  "never",
                  "from October to April",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "The concert has been moved to the big hall because so many people bought tickets. Max",
                  ],
                },
                question: "Why has the concert moved?",
                options: [
                  "The small hall is closed.",
                  "The band asked for it.",
                  "It's very popular.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Buy 9 coffees and get the 10th free.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Regular customers get a free drink.",
                  "Coffee is free today.",
                  "You can only buy 10 coffees.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "PHOTOGRAPHY COURSE",
                    "Learn to use your camera.",
                    "Six evening classes. Beginners welcome.",
                  ],
                },
                question: "What do we know about the course?",
                options: [
                  "It's for professionals.",
                  "People who are new to photography can join.",
                  "It's in the morning.",
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
                title: "Eva",
                text: "I love ice hockey. I play in a girls' team and train four times a week. It's a fast and exciting sport. Last year, our team won the national championship. I was the captain. Now I want to play for my country.",
              },
              {
                title: "Noah",
                text: "My hobby is writing stories about space. I've written more than fifty stories. Last year, one of my stories was read on the radio! I was so excited. I'm now writing a longer book. I hope to finish it by the end of the year.",
              },
              {
                title: "Rosa",
                text: "I'm a keen volunteer. I help at a home for older people every Sunday. I play games with them and help them use computers. Many of them want to talk to their grandchildren online. I love hearing their stories about the past.",
              },
            ],
            items: [
              {
                text: "was the leader of a winning team?",
                answer: 0,
              },
              {
                text: "hopes to represent their nation?",
                answer: 0,
              },
              {
                text: "had their work broadcast?",
                answer: 1,
              },
              {
                text: "has a deadline for a project?",
                answer: 1,
              },
              {
                text: "teaches people to use technology?",
                answer: 2,
              },
              {
                text: "enjoys hearing about the past?",
                answer: 2,
              },
              {
                text: "trains several times a week?",
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
              title: "Saving the bees",
              paragraphs: [
                "In a small town in England, a group of teenagers have built a 'bee hotel' in their school garden. It's a wooden box with lots of small holes where wild bees can live.",
                "'Bees are in danger,' says fifteen-year-old Lily, who started the project. 'We wanted to help them. They're really important for growing fruit and vegetables.'",
                "The students also planted lots of flowers that bees like. 'We chose purple and yellow flowers,' explains Lily. 'Bees love those colours.'",
                "Now there are hundreds of bees in the school garden. 'It's amazing to watch them,' says Lily. 'Other schools have asked us how to build a bee hotel. We're going to make a video to show them.'",
              ],
            },
            items: [
              {
                question: "What is a bee hotel?",
                options: [
                  "a box where bees can live",
                  "a place where people stay",
                  "a shop that sells honey",
                ],
                answer: 0,
              },
              {
                question: "Why did Lily start the project?",
                options: [
                  "to win a prize",
                  "to help bees",
                  "to sell honey",
                ],
                answer: 1,
              },
              {
                question: "What colour flowers did they plant?",
                options: [
                  "purple and yellow",
                  "red and white",
                  "blue and green",
                ],
                answer: 0,
              },
              {
                question: "How many bees are there now?",
                options: [
                  "a few",
                  "none",
                  "hundreds",
                ],
                answer: 2,
              },
              {
                question: "What will the students do next?",
                options: [
                  "build a bigger hotel",
                  "sell bees",
                  "make a video",
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
            title: "The Great Wall of China",
            text: [
              "The Great Wall of China is one of the most famous buildings in the world. It is more than 21,000 kilometres long and {1} across northern China.",
              "The wall was built over many hundreds of years. People started building it more than 2,000 years ago to {2} China from enemies.",
              "Millions of workers helped to build the wall. They used stone, bricks, earth and wood. The work was very hard, and many workers died. Today, the Great Wall is a popular {3} attraction. About ten million people visit it every year. Some parts of the wall are in very good {4}, but other parts are old and broken. Many people say you can see the Great Wall from space, but this is not {5}. It's too narrow to see without a {6}.",
            ],
            gaps: [
              {
                options: [
                  "pulls up",
                  "goes up",
                  "stretches",
                ],
                answer: 2,
              },
              {
                options: [
                  "protect",
                  "keep up",
                  "guard on",
                ],
                answer: 0,
              },
              {
                options: [
                  "tour",
                  "tourist",
                  "touring",
                ],
                answer: 1,
              },
              {
                options: [
                  "condition",
                  "state up",
                  "shape up",
                ],
                answer: 0,
              },
              {
                options: [
                  "right",
                  "real",
                  "true",
                ],
                answer: 2,
              },
              {
                options: [
                  "camera up",
                  "telescope",
                  "window",
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
              "Hi Ella,",
              "I'm sorry I couldn't come to your house yesterday. I had to look {1} my little brother because my mum was at work.",
              "Can we meet another day? I'm free {2} Saturday. Maybe we could go to the shopping centre. There's a big sale at the clothes shop.",
              "My mum says she can drive us there. We could have lunch {3} the café too. Let me know what time is good {4} you. I can't wait {5} see you. Sorry again {6} yesterday!",
              "Love,",
              "Lily",
            ],
            answers: [
              [
                "after",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "at",
                "in",
              ],
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "about",
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just come back from a school trip. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say where you went.",
              "Say what you did.",
              "Say what you enjoyed most.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nI've just come back from a school trip to a science museum in Ankara. We did experiments and watched a film about space. I enjoyed the planetarium most because I love stars.\n\nBye,\nKerem",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🏃🌳",
                label: "1",
              },
              {
                e: "👨🏃🐕",
                label: "2",
              },
              {
                e: "👨🐕🏠😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Every morning, Mr Smith goes running in the park. One morning, a small dog started running next to him. It followed him all the way home. Mr Smith looked for the dog's owner, but he couldn't find anyone. He took the dog to the vet, who found that it didn't have an owner. So Mr Smith kept the dog. Now they go running together every day.",
          },
        },
      ],
    },
  ],
};
