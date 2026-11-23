import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 96 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_96: CambridgeTest = {
  id: "preliminary-96",
  level: "preliminary",
  no: 96,
  title: "B1 Preliminary · Practice Test 96",
  papers: [
    {
      id: "reading",
      name: "Reading",
      minutes: 45,
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
                    "SCHOOL CANTEEN",
                    "From Monday, students must bring their own reusable cup.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Cups are free from Monday.",
                  "Students need to bring a cup they can use again.",
                  "The canteen is closing.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Pelin, the bookshop has your dictionary now. You can collect it any time this week. Gül",
                  ],
                },
                question: "What can Pelin do?",
                options: [
                  "pick up her dictionary",
                  "order a dictionary",
                  "return a dictionary",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Shake before use. Store in a cool place.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it in the sun.",
                  "Don't shake it.",
                  "Shake it and keep it somewhere cool.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Onur,",
                    "I've got a cold, so I won't come to football practice tonight. Tell the coach, please. Ahmet",
                  ],
                },
                question: "What does Ahmet want Onur to do?",
                options: [
                  "bring medicine",
                  "play in his place",
                  "tell the coach he's ill",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "Dogs must be kept on a lead near the playground.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Dogs near the playground must be on a lead.",
                  "Dogs aren't allowed in the park.",
                  "Dogs can run free everywhere.",
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
            instruction: "The young people below all want to watch a sports event. Read the descriptions of eight events. Decide which event would be the most suitable for each person.",
            options: [
              {
                title: "Tennis Open",
                text: "Top players compete on clay courts.",
              },
              {
                title: "Cycle Race",
                text: "Riders race through the city centre.",
              },
              {
                title: "Swimming Gala",
                text: "Young swimmers race at the new pool.",
              },
              {
                title: "Basketball Final",
                text: "The national youth final.",
              },
              {
                title: "Horse Show",
                text: "Show jumping and dressage.",
              },
              {
                title: "Marathon",
                text: "Thousands run through the old town.",
              },
              {
                title: "Beach Volleyball",
                text: "Matches on the sand by the sea.",
              },
              {
                title: "Gymnastics",
                text: "Floor and beam competitions.",
              },
            ],
            items: [
              {
                text: "Ayten loves horses.",
                answer: 4,
              },
              {
                text: "Berk wants to watch a game on the beach.",
                answer: 6,
              },
              {
                text: "Ceyda wants to see a race at the pool.",
                answer: 2,
              },
              {
                text: "Deniz loves cycling.",
                answer: 1,
              },
              {
                text: "Engin wants to watch a basketball final.",
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the text and questions below. For each question, choose the correct answer.",
            text: {
              title: "Building a treehouse",
              paragraphs: [
                "When I was thirteen, my dad and I decided to build a treehouse in the old walnut tree in our garden. Neither of us had ever built anything like it before.",
                "We spent weeks planning. We watched videos, drew designs and visited a carpenter to ask for advice. He told us to make sure the floor was strong and to check the branches carefully.",
                "Building it took the whole summer. We made lots of mistakes. Once, we cut a piece of wood too short and had to buy another one. My dad also hit his thumb with a hammer more than once!",
                "When it was finished, it had a small window, a ladder and a roof that kept out the rain. Now I use it to read and to hang out with my friends. I'm proud that we built it ourselves.",
              ],
            },
            items: [
              {
                question: "What had the writer and his dad done before?",
                options: [
                  "They had built many treehouses.",
                  "They had never built anything similar.",
                  "They worked as carpenters.",
                  "They had built a shed.",
                ],
                answer: 1,
              },
              {
                question: "What did the carpenter advise?",
                options: [
                  "to use a different tree",
                  "to buy a kit",
                  "to build it quickly",
                  "to make the floor strong",
                ],
                answer: 3,
              },
              {
                question: "How long did building take?",
                options: [
                  "one weekend",
                  "the whole summer",
                  "a week",
                  "two years",
                ],
                answer: 1,
              },
              {
                question: "What problem do we learn about?",
                options: [
                  "The tree fell down.",
                  "It rained every day.",
                  "They lost the ladder.",
                  "A piece of wood was too short.",
                ],
                answer: 3,
              },
              {
                question: "How does the writer feel now?",
                options: [
                  "proud",
                  "worried",
                  "bored",
                  "disappointed",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A café where you pay with poems",
            text: [
              "In a town in Spain, there's a small café with an unusual rule. {1} Customers can pay for their coffee with a poem instead of money.",
              "The owner loves poetry and wanted to share it. {2} She thought this would be a fun way to do it.",
              "Customers write their poems on cards. {3} The best ones are put on the walls.",
              "Not everyone is a good writer. {4} The owner says that it's the effort that counts.",
              "The café has become very popular with students. {5} Some of them come every day with a new poem.",
            ],
            sentences: [
              "Poems are not allowed in the café.",
              "Once a week, on Thursdays, poems are accepted.",
              "Some poems are only two lines long.",
              "Nobody has ever written a poem there.",
              "She also wanted people to try writing.",
              "The café only accepts credit cards.",
              "They can be in any language.",
              "They say it helps them to be creative.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Elephants",
            text: [
              "Elephants are the largest land animals on Earth. There are two main types: African elephants and Asian elephants. African elephants are bigger and have larger ears.",
              "An elephant's trunk is a very {1} part of its body. It uses its trunk to breathe, smell, drink and pick up food. It can even use it to say hello to other elephants.",
              "Elephants live in family groups led by the oldest female. They are very {2} animals and can recognise friends after many years apart. They also seem to feel sadness when a family member dies. Adult elephants eat up to 150 kilograms of plants every day. Because they eat so much, they need large areas of land to {3} food. Elephants are in danger because of hunting and because people are {4} their habitats into farms and towns. In many countries, there are now national parks where elephants are {5}. Tourists who visit these parks bring money that helps local people and supports the {6} of elephants.",
            ],
            gaps: [
              {
                options: [
                  "useful",
                  "use",
                  "usefully",
                  "useless",
                ],
                answer: 0,
              },
              {
                options: [
                  "intelligence",
                  "intelligently",
                  "intelligent",
                  "intellect",
                ],
                answer: 2,
              },
              {
                options: [
                  "finding",
                  "find",
                  "found",
                  "finder",
                ],
                answer: 1,
              },
              {
                options: [
                  "turn",
                  "turned",
                  "turns",
                  "turning",
                ],
                answer: 3,
              },
              {
                options: [
                  "protect",
                  "protected",
                  "protection",
                  "protective",
                ],
                answer: 1,
              },
              {
                options: [
                  "survive",
                  "surviving",
                  "survivor",
                  "survival",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "My first day at a new school",
            text: [
              "When my family moved to Izmir, I had to change schools in the middle of the year. I was very worried {1} it.",
              "On my first day, I didn't know anyone. I sat at the back of the classroom and didn't say much. At break time, I stood alone in the corner of the playground.",
              "Then a girl came up to me and asked {2} I wanted to play basketball with her friends. I said yes, even though I'm not very good at it. They were all really friendly, and nobody laughed {3} I missed the basket. After that, everything was easier. The girl, whose name is Defne, showed me {4} the school and helped me with my timetable. We sat together at lunch, and she introduced me to her friends. Now, six months later, Defne is my best friend. I'm glad I said yes to that basketball game. It taught me that one small act of kindness can change {5}. Now I always try to talk to new students {6} they arrive.",
            ],
            answers: [
              [
                "about",
              ],
              [
                "if",
                "whether",
              ],
              [
                "when",
                "if",
              ],
              [
                "around",
                "round",
              ],
              [
                "everything",
              ],
              [
                "when",
              ],
            ],
          },
        },
      ],
    },
    {
      id: "writing",
      name: "Writing",
      minutes: 45,
      parts: [
        {
          title: "Part 1 · Email",
          task: {
            kind: "writing",
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "A film",
              lines: [
                "I watched a great film last night! [Reply]",
                "What's the best film you've seen recently? [Tell Kim]",
                "Do you prefer watching films at home or at the cinema? [Explain]",
                "Shall we watch a film together? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nThat's great! What was it called? I'm always looking for good films to watch.\n\nThe best film I've seen recently is an animated film about a robot who lives alone on an empty planet. It was funny and sad at the same time, and the music was beautiful.\n\nI prefer watching films at the cinema because the screen is huge and the sound is amazing. But watching at home is cheaper, and you can pause the film if you want a snack!\n\nYes, let's watch one together. There's a new comedy at the cinema next week. Shall we go on Friday evening?\n\nSee you,\nTolga",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! What makes a good teacher?",
              lines: [
                "What makes a good teacher?",
                "Tell us about a teacher you liked.",
                "Would you like to be a teacher?",
                "Send us your article!",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "A good teacher\n\nI think a good teacher is someone who is patient, fair and enthusiastic about their subject. A good teacher also listens to students and makes lessons interesting, so that everyone wants to learn.\n\nThe best teacher I've had was my history teacher, Mr Kaya. He told stories about the past as if he had been there himself. He brought old maps and objects to class and let us hold them. Even students who didn't usually like history loved his lessons.\n\nI'm not sure if I'd like to be a teacher. It seems like a very hard job, with lots of marking and planning. But I think it must be wonderful to help young people discover what they love.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The phone rang in the middle of the night.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The phone rang in the middle of the night. Ayla sat up in bed and looked at the clock. It was three o'clock. Who would call at this time?\n\nShe answered nervously. It was her aunt, who lived in Canada. 'I'm so sorry!' her aunt said. 'I forgot about the time difference. I just wanted to tell you some exciting news.'\n\nHer aunt explained that she was getting married next summer, and she wanted Ayla to be a bridesmaid. The wedding would be in a beautiful town by a lake.\n\nAyla was so excited that she couldn't go back to sleep. She had never been to Canada before. She lay in bed until morning, dreaming about the trip.",
          },
        },
      ],
    },
  ],
};
