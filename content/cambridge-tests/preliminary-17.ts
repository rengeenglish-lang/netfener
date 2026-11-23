import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 17 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_17: CambridgeTest = {
  id: "preliminary-17",
  level: "preliminary",
  no: 17,
  title: "B1 Preliminary · Practice Test 17",
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
                    "LIBRARY",
                    "Children's story time has moved from Saturday mornings to Friday afternoons.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Story time is now on a different day.",
                  "Story time is cancelled.",
                  "Story time is only for adults.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I'm going to the post office. Do you want me to send your parcel? Mum",
                  ],
                },
                question: "What is Mum offering to do?",
                options: [
                  "buy a parcel",
                  "collect a letter",
                  "post something for Lucy",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep away from direct sunlight.",
                    "Store at room temperature.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep this in the fridge.",
                  "Keep this in a hot place.",
                  "Don't keep this in a sunny place.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "Can you remind everyone that the class photo is tomorrow? We need to wear our school jumpers. Thanks! Emma",
                  ],
                },
                question: "What does Emma want Max to do?",
                options: [
                  "tell other students something",
                  "bring his camera",
                  "buy a new jumper",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "The gym is for members over 16 only. Younger people can use the pool and courts.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is only for members.",
                  "People under 16 can't use the gym.",
                  "Everyone can use the gym.",
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
            instruction: "The young people below all want to buy a new phone app. Read the descriptions of eight apps. Decide which app would be the most suitable for each person.",
            options: [
              {
                title: "WordMaster",
                text: "Learn ten new English words every day with fun games and quizzes.",
              },
              {
                title: "FitPlan",
                text: "Personal workout plans with videos. Track your progress over time.",
              },
              {
                title: "StarMap",
                text: "Point your phone at the night sky to find the names of stars and planets.",
              },
              {
                title: "RecipeBox",
                text: "Thousands of recipes, searchable by ingredient. Includes shopping lists.",
              },
              {
                title: "BirdSong",
                text: "Record a bird singing, and the app tells you which bird it is.",
              },
              {
                title: "StudyTimer",
                text: "Helps you plan study sessions and reminds you to take breaks.",
              },
              {
                title: "MusicMaker",
                text: "Create your own songs using different instruments and beats.",
              },
              {
                title: "CityGuide",
                text: "Maps and tips for exploring cities around the world, including offline maps.",
              },
            ],
            items: [
              {
                text: "Mehmet wants to create his own music but doesn't play any instruments.",
                answer: 6,
              },
              {
                text: "Selin is going on holiday to Rome and wants to find her way without the internet.",
                answer: 7,
              },
              {
                text: "Can wants to know what to cook with the food in his fridge.",
                answer: 3,
              },
              {
                text: "Defne loves nature and wants to identify the birds in her garden.",
                answer: 4,
              },
              {
                text: "Arda has exams soon and wants to organise his revision better.",
                answer: 5,
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
              title: "The summer I worked on a farm",
              paragraphs: [
                "Last summer, I worked on an organic farm in Wales for six weeks. I'd grown up in a big city, so I knew nothing about farming. My friends thought I was crazy, but I wanted to try something completely different.",
                "The work was much harder than I'd imagined. We started at six every morning, feeding the animals and milking the cows. Then we spent the day in the fields, picking vegetables or repairing fences. By the evening, I was exhausted.",
                "But I loved it. I learned how to look after animals and grow food without chemicals. The farmer, an old man called Gareth, taught me something new every day. He was strict but very kind.",
                "Since that summer, I've changed the way I think about food. I try to buy local, organic food whenever I can, and I've started a small vegetable garden on my balcony. I'm going back to the farm next year.",
              ],
            },
            items: [
              {
                question: "Why did the writer go to work on a farm?",
                options: [
                  "Her parents told her to.",
                  "She needed money.",
                  "Her friends worked there.",
                  "She wanted a new experience.",
                ],
                answer: 3,
              },
              {
                question: "What surprised the writer about the work?",
                options: [
                  "It was very easy.",
                  "It was very tiring.",
                  "It was boring.",
                  "It was well paid.",
                ],
                answer: 1,
              },
              {
                question: "What does the writer say about Gareth?",
                options: [
                  "He was very rude.",
                  "He didn't teach her anything.",
                  "He was young.",
                  "He was strict but kind.",
                ],
                answer: 3,
              },
              {
                question: "How has the writer changed?",
                options: [
                  "She buys food more carefully.",
                  "She has stopped eating vegetables.",
                  "She has moved to the countryside.",
                  "She doesn't think about food.",
                ],
                answer: 0,
              },
              {
                question: "What is the writer planning?",
                options: [
                  "to buy a farm",
                  "to study farming",
                  "to return to the farm",
                  "to move to Wales",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The longest bridge",
            text: [
              "The Danyang–Kunshan Grand Bridge in China is the longest bridge in the world. {1} It carries a high-speed railway between two big cities.",
              "The bridge took four years to build. {2} About 10,000 workers helped to build it.",
              "Most of the bridge goes over flat land, rice fields and rivers. {3} Building it on land was cheaper than buying the land and building a railway on the ground.",
              "Trains travel across the bridge at speeds of up to 300 kilometres an hour. {4} This makes it possible to travel between the cities in less than an hour.",
              "The bridge has become a symbol of China's fast-growing railway network. {5} Engineers from other countries have visited to study how it was built.",
            ],
            sentences: [
              "Part of it also crosses a large lake.",
              "Many people are afraid to cross it.",
              "It is about 164 kilometres long.",
              "China now has more high-speed railways than any other country.",
              "It was built in only two weeks.",
              "It was finished in 2010 and opened the following year.",
              "The bridge is only for cars.",
              "The trains are among the fastest in the world.",
            ],
            answers: [
              2,
              5,
              0,
              7,
              3,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Saving water",
            text: [
              "Water is one of our most important {1}, but in many parts of the world, there isn't enough of it.",
              "Most of the water on Earth is salty, and only a small amount is fresh water that we can drink. As the population grows, the {2} for fresh water increases.",
              "There are many simple ways we can save water at home. You can turn off the tap while you {3} your teeth, which saves several litres every time. Taking shorter showers {4} of baths also helps. In the garden, you can collect rainwater to water your plants. Fixing taps that drip is another good {5}. A dripping tap can waste thousands of litres a year! If everyone makes small changes, we can make a big {6} to the amount of water we use.",
            ],
            gaps: [
              {
                options: [
                  "things up",
                  "materials up",
                  "resources",
                  "stuffs",
                ],
                answer: 2,
              },
              {
                options: [
                  "want",
                  "demand",
                  "wish",
                  "request",
                ],
                answer: 1,
              },
              {
                options: [
                  "clean up",
                  "wash up",
                  "rub",
                  "brush",
                ],
                answer: 3,
              },
              {
                options: [
                  "rather",
                  "instead",
                  "place",
                  "except",
                ],
                answer: 1,
              },
              {
                options: [
                  "thought up",
                  "plan up",
                  "mind",
                  "idea",
                ],
                answer: 3,
              },
              {
                options: [
                  "difference",
                  "change up",
                  "effect up",
                  "result",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A trip to the mountains",
            text: [
              "Last winter, my family and I spent a week in the mountains. We stayed in a wooden cabin {1} had amazing views of the snow-covered peaks.",
              "Every day, we went skiing. I'd only skied once before, so I took lessons {2} the first three days. My instructor was very patient, and by the end of the week I could ski down the easy slopes on my {3}.",
              "In the evenings, we sat by the fire and played board games. One night, there was a huge snowstorm, and we couldn't leave the cabin {4} the next afternoon. It was {5} of the best holidays I've ever had. I'm already looking forward to going back {6} year.",
            ],
            answers: [
              [
                "which",
                "that",
              ],
              [
                "for",
                "on",
              ],
              [
                "own",
              ],
              [
                "until",
                "till",
              ],
              [
                "one",
              ],
              [
                "next",
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
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "A film recommendation",
              lines: [
                "I'm bored this weekend. Can you recommend a good film? [Recommend one]",
                "What kind of films do you usually like? [Tell Robin]",
                "Where do you usually watch films? [Explain]",
                "Would you like to watch a film together? [Suggest a day]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nI'm sorry you're bored! I'd definitely recommend 'The Lost City'. It's an adventure film about a group of friends who look for a hidden city in the jungle. It's exciting and really funny too.\n\nI usually like action and adventure films, but I also enjoy comedies. I'm not very keen on horror films, because they give me bad dreams!\n\nI usually watch films at home with my family on Friday nights. We make popcorn and turn off the lights. Sometimes I go to the cinema with friends.\n\nWould you like to watch a film together on Saturday afternoon? Let me know!\n\nBye,\nNil",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The most important invention",
              lines: [
                "What do you think is the most important invention in history?",
                "Why is it so important?",
                "How would life be different without it?",
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
            sample: "Why the internet changed everything\n\nIn my opinion, the most important invention in history is the internet. It has completely changed the way we live, work and communicate.\n\nThanks to the internet, we can talk to people anywhere in the world instantly. We can find information about anything in seconds, and many people can now work or study from home.\n\nWithout the internet, life would be much slower. We'd have to write letters, go to libraries for information and visit shops to buy things. Of course, the internet also has problems, like fake news. But overall, I think it has made the world a better place.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Ella opened the envelope, she screamed with joy.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Ella opened the envelope, she screamed with joy. She had been accepted at the dance school in London that she had dreamed about for years.\n\nShe ran downstairs to tell her parents. Her mother started crying, and her father hugged her tightly. They knew how hard Ella had worked. She had practised every day for five years, even when she was tired or injured.\n\nThat evening, the family went out for a special dinner to celebrate. Ella couldn't stop smiling. She knew that moving to London would be difficult, but she was ready for the challenge. Her dream was finally coming true.",
          },
        },
      ],
    },
  ],
};
