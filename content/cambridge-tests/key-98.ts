import type { CambridgeTest } from "./types";

/** A2 Key practice test 98 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_98: CambridgeTest = {
  id: "key-98",
  level: "key",
  no: 98,
  title: "A2 Key · Practice Test 98",
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
                    "Students can borrow sports equipment at lunchtime.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Sports equipment is for sale.",
                  "There's no lunch break.",
                  "Students can use sports things at lunch.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, my sister has the flu, so I can't come to your house today. Sorry! Ann",
                  ],
                },
                question: "Why can't Ann visit Jo?",
                options: [
                  "Her sister is ill.",
                  "She's ill.",
                  "She has homework.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "DO NOT FEED THE ANIMALS",
                  ],
                },
                question: "Where would you probably see this sign?",
                options: [
                  "in a supermarket",
                  "at a zoo",
                  "in a school",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Can you lend me your bike on Saturday? Mine has a flat tyre. Tom",
                  ],
                },
                question: "What does Tom want?",
                options: [
                  "to borrow Ben's bike",
                  "to repair Ben's bike",
                  "to buy a bike",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CINEMA",
                    "Children under 12 must be with an adult for this film.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children can't watch this film.",
                  "Adults can't watch this film.",
                  "Young children need an adult.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "COMPUTER CLASSES",
                    "Learn to use the internet and email.",
                    "For older people. Free.",
                  ],
                },
                question: "Who are the classes for?",
                options: [
                  "children",
                  "students",
                  "older people",
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
                title: "Daisy",
                text: "I love horse riding. I go riding every weekend at a farm near my house. Last year, I won a competition with a horse called Pepper. I'd love to have my own horse, but they're very expensive.",
              },
              {
                title: "Mark",
                text: "My hobby is playing the trumpet. I play in a brass band. We play at festivals and in the park in summer. Last month, we played at a big concert in London. Thousands of people came to watch us!",
              },
              {
                title: "Aisha",
                text: "I'm interested in coding. I've made a website for my school and an app that helps students learn new words. My teacher says I'm very talented. I want to work for a technology company when I'm older.",
              },
            ],
            items: [
              {
                text: "would like to own an animal?",
                answer: 0,
              },
              {
                text: "won a competition?",
                answer: 0,
              },
              {
                text: "performs outdoors?",
                answer: 1,
              },
              {
                text: "played in a capital city?",
                answer: 1,
              },
              {
                text: "made something for their school?",
                answer: 2,
              },
              {
                text: "knows what job they want?",
                answer: 2,
              },
              {
                text: "rides every weekend?",
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
              title: "A school on a boat",
              paragraphs: [
                "In Bangladesh, there are schools on boats! During the rainy season, many villages are flooded, and children can't walk to school. So the schools go to them.",
                "Each boat has a classroom for about thirty children. 'The boat picks up children from their villages,' explains teacher Rahim. 'Then we have lessons on the boat.'",
                "The boats have computers and books. They use solar power for electricity. 'Some children have never seen a computer before,' says Rahim. 'They're very excited to learn.'",
                "There are now more than twenty school boats. 'Education is very important,' says Rahim. 'With these boats, children can go to school even when there's a flood.'",
              ],
            },
            items: [
              {
                question: "Why are there schools on boats?",
                options: [
                  "There are no buildings.",
                  "Floods stop children walking to school.",
                  "Children like boats.",
                ],
                answer: 1,
              },
              {
                question: "How many children can each classroom have?",
                options: [
                  "about three",
                  "about three hundred",
                  "about thirty",
                ],
                answer: 2,
              },
              {
                question: "How do the boats get electricity?",
                options: [
                  "from the sun",
                  "from petrol",
                  "from the river",
                ],
                answer: 0,
              },
              {
                question: "What do some children see for the first time?",
                options: [
                  "a boat",
                  "a computer",
                  "a teacher",
                ],
                answer: 1,
              },
              {
                question: "How many school boats are there now?",
                options: [
                  "more than twenty",
                  "two",
                  "about a hundred",
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
            title: "Bicycles",
            text: [
              "The bicycle was invented about 200 years ago. The first bicycles didn't have pedals. People sat on them and {1} along the ground with their feet.",
              "Later, bicycles had a very big front wheel and a small back wheel. They were very {2} to ride, and people often fell off.",
              "The modern bicycle, with two wheels of the same size, was invented in the 1880s. It quickly became very popular. Today, there are more than a billion bicycles in the world. Cycling is good for your health because it makes your heart and legs {3}. It's also good for the environment, because bicycles don't {4} any pollution. In many cities, people cycle to work every day. Some cities have special lanes for bicycles to make cycling {5}. If you ride a bicycle, remember to always {6} a helmet.",
            ],
            gaps: [
              {
                options: [
                  "pushed",
                  "pulled up",
                  "drove",
                ],
                answer: 0,
              },
              {
                options: [
                  "hard work",
                  "heavy",
                  "difficult",
                ],
                answer: 2,
              },
              {
                options: [
                  "strong",
                  "strongest",
                  "stronger",
                ],
                answer: 2,
              },
              {
                options: [
                  "produce",
                  "make up",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "safe",
                  "safer",
                  "safety",
                ],
                answer: 1,
              },
              {
                options: [
                  "wear",
                  "put up",
                  "dress",
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
              "Hi Sophie,",
              "Thank you {1} the photos you sent me from your holiday. The beach looks beautiful!",
              "I'm on holiday too. We're staying with my grandparents in the countryside. It's very quiet here, but I like it. I go for walks {2} day and help my grandfather in the garden.",
              "When are you coming back? I'd love to see you. Maybe we could go to the cinema {3} the holidays finish. There's a new film {4} I really want to see. Let me know {5} you're home. Have a great time, and see you {6}!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "for",
              ],
              [
                "every",
                "each",
              ],
              [
                "before",
              ],
              [
                "that",
                "which",
              ],
              [
                "when",
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
            instruction: "You visited your grandparents last weekend. Write an email to your English friend, Alex. Write 25 words or more.",
            prompts: [
              "Say where your grandparents live.",
              "Say what you did together.",
              "Say how you felt.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Alex' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Alex,\n\nLast weekend, I visited my grandparents. They live in a village near the mountains. We went for a long walk and cooked dinner together. I felt very happy and relaxed.\n\nBye,\nDila",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🛹🏞️",
                label: "1",
              },
              {
                e: "👦🛹🌧️",
                label: "2",
              },
              {
                e: "👦🛹🏠📺😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday, Leo wanted to go to the skate park. But when he arrived, it started to rain, and the skate park closed. Leo was disappointed. He went home and watched a film about skateboarding instead. He learned some new tricks from the film. The next day, the sun came out, and Leo tried the new tricks at the skate park. He was very pleased.",
          },
        },
      ],
    },
  ],
};
