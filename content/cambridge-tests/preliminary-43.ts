import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 43 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_43: CambridgeTest = {
  id: "preliminary-43",
  level: "preliminary",
  no: 43,
  title: "B1 Preliminary · Practice Test 43",
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
                    "SCHOOL",
                    "The canteen will be closed on Friday. Please bring a packed lunch.",
                  ],
                },
                question: "What should students do on Friday?",
                options: [
                  "bring their own food",
                  "eat in the canteen",
                  "go home for lunch",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, I've left my umbrella at your house. Can you bring it to school tomorrow? Kate",
                  ],
                },
                question: "What does Kate want Jo to do?",
                options: [
                  "buy her an umbrella",
                  "return her umbrella",
                  "lend her an umbrella",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not use after the date shown.",
                    "Keep in a dry place.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't use it after a certain date.",
                  "Keep it in a wet place.",
                  "You can use it any time.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "My brother has a spare ticket for the concert. Do you want it? It's free! Sam",
                  ],
                },
                question: "What is Sam offering?",
                options: [
                  "to sell a ticket",
                  "to go with his brother",
                  "a free ticket",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Children's activity trails available at the information desk.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children aren't allowed.",
                  "The desk is closed.",
                  "Children can get an activity at the desk.",
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
            instruction: "The young people below all want to watch a film this weekend. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              {
                title: "Underwater World",
                text: "A documentary about coral reefs and the creatures that live there.",
              },
              {
                title: "The Last Knight",
                text: "An exciting adventure about a knight in medieval England.",
              },
              {
                title: "Space Pirates",
                text: "A funny science-fiction film about pirates in space.",
              },
              {
                title: "Wild Hearts",
                text: "A romantic drama about two teenagers who fall in love.",
              },
              {
                title: "Mystery Manor",
                text: "A detective story set in a big old house.",
              },
              {
                title: "Run!",
                text: "An action film full of car chases and explosions.",
              },
              {
                title: "Little Paws",
                text: "An animated film about a lost puppy finding its way home.",
              },
              {
                title: "The Great Chef",
                text: "The true story of a famous chef's life.",
              },
            ],
            items: [
              {
                text: "Kaan loves action and fast cars.",
                answer: 5,
              },
              {
                text: "Selin wants to watch something with her five-year-old sister.",
                answer: 6,
              },
              {
                text: "Burak loves history and knights.",
                answer: 1,
              },
              {
                text: "Ece wants to learn about life under the sea.",
                answer: 0,
              },
              {
                text: "Arda wants to become a chef and likes true stories.",
                answer: 7,
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
              title: "Making a difference",
              paragraphs: [
                "Two years ago, I saw a news report about how much food is thrown away by supermarkets. I was shocked. At the same time, many families in my town couldn't afford to buy enough food.",
                "I decided to do something. I contacted local supermarkets and asked if they would give me food that they were going to throw away. Most of them said no at first, but one small shop agreed.",
                "Every evening, I collected the food from the shop and took it to a local charity, which gave it to families in need. Soon, other shops wanted to join. Now we collect food from twelve shops.",
                "Last year, we saved more than ten tonnes of food. I've learned that one person really can make a difference. I want to study environmental science at university so I can continue this kind of work.",
              ],
            },
            items: [
              {
                question: "What shocked the writer?",
                options: [
                  "how expensive food was",
                  "how many people were hungry",
                  "how much food supermarkets threw away",
                  "how few shops there were",
                ],
                answer: 2,
              },
              {
                question: "How did most supermarkets react at first?",
                options: [
                  "They agreed immediately.",
                  "They said no.",
                  "They didn't reply.",
                  "They gave money.",
                ],
                answer: 1,
              },
              {
                question: "What did the writer do with the food?",
                options: [
                  "sold it",
                  "ate it",
                  "gave it to friends",
                  "took it to a charity",
                ],
                answer: 3,
              },
              {
                question: "How many shops now give food?",
                options: [
                  "one",
                  "twelve",
                  "two",
                  "fifty",
                ],
                answer: 1,
              },
              {
                question: "What does the writer want to study?",
                options: [
                  "business",
                  "cooking",
                  "medicine",
                  "environmental science",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The tallest statue",
            text: [
              "In India, there's a statue that is taller than any other in the world. {1} It's called the Statue of Unity and is 182 metres tall.",
              "The statue shows Sardar Vallabhbhai Patel, an important leader in India's history. {2} He helped to unite the country after independence in 1947.",
              "Building the statue took nearly four years. {3} More than 3,000 workers helped to build it.",
              "Visitors can take a lift to a viewing gallery inside the statue. {4} From there, they can see the surrounding mountains and river.",
              "The statue has become a popular tourist attraction. {5} About 15,000 people visit it every day.",
            ],
            sentences: [
              "Hotels and restaurants have been built nearby.",
              "He was born in the area where the statue now stands.",
              "The statue is in the middle of a city.",
              "It's almost twice as tall as the Statue of Liberty.",
              "It's at a height of 153 metres.",
              "Nobody is allowed to visit the statue.",
              "It was finished in 2018.",
              "The statue is made of wood.",
            ],
            answers: [
              3,
              1,
              6,
              4,
              0,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Coral reefs",
            text: [
              "Coral reefs are some of the most beautiful places on Earth. They are made by tiny animals called corals, which live {1} in warm, shallow seas.",
              "Coral reefs are home to about a quarter of all ocean species, even though they {2} less than one per cent of the ocean floor. They provide food and shelter for fish, turtles and many other sea creatures.",
              "Reefs are also important for humans. They protect coastlines from storms and provide food and jobs for millions of people. Sadly, coral reefs are in {3}. Rising ocean temperatures cause a problem called coral bleaching, which can kill the corals. Pollution and overfishing also damage reefs. Scientists {4} that we could lose most of the world's reefs by 2050 if we don't act now. There are many ways to help, such as reducing pollution and protecting reefs from {5} fishing. Tourists can also help by not touching corals when they {6} or snorkel.",
            ],
            gaps: [
              {
                options: [
                  "together up",
                  "together",
                  "togetherness",
                  "gather",
                ],
                answer: 1,
              },
              {
                options: [
                  "cover",
                  "covering",
                  "covered",
                  "coverage",
                ],
                answer: 0,
              },
              {
                options: [
                  "dangerous",
                  "dangerously",
                  "danger",
                  "endanger",
                ],
                answer: 2,
              },
              {
                options: [
                  "warning",
                  "warn",
                  "warned up",
                  "warns up",
                ],
                answer: 1,
              },
              {
                options: [
                  "harm",
                  "harmless",
                  "harmfully",
                  "harmful",
                ],
                answer: 3,
              },
              {
                options: [
                  "diving",
                  "dive",
                  "diver",
                  "dived up",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A weekend in the city",
            text: [
              "Last weekend, I visited my aunt, {1} lives in the city. I don't go there very often because it's about two hours away by train.",
              "On Saturday morning, we went shopping. The city has lots of big shops, and I bought a new jacket and some books. Then we had lunch at a Japanese restaurant. I'd never tried sushi {2}, and I loved it!",
              "In the afternoon, we visited a museum about the history of the city. It was very interesting. In the evening, we went {3} the theatre to see a play. It was really funny, and we laughed a lot. On Sunday, we went for a walk in a big park and had a picnic. It was a lovely weekend. I'm going to visit my aunt again {4} the holidays. There are so many things I still want {5} see. Next time, I'd like to go to {6} football match.",
            ],
            answers: [
              [
                "who",
              ],
              [
                "before",
              ],
              [
                "to",
              ],
              [
                "in",
                "during",
              ],
              [
                "to",
              ],
              [
                "a",
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
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "Learning an instrument",
              lines: [
                "I want to learn to play a musical instrument. [Great idea!]",
                "Which instrument do you think I should learn? [Give advice]",
                "Do you play any instruments? [Tell Pat]",
                "How should I practise? [Give tips]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nWhat a great idea! Playing music is so much fun, and it's good for your brain too.\n\nI think you should learn the guitar. It's not too expensive, and you can play lots of different types of music on it. You could also learn the piano, which is great for understanding music.\n\nI play the violin. I started when I was eight, and I'm in the school orchestra now. It was really difficult at first, but now I love it.\n\nThe most important thing is to practise every day, even if it's only for fifteen minutes. Try to learn songs you like, because it makes practising more fun.\n\nGood luck!\nBeril",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A place that makes me happy",
              lines: [
                "Is there a place that makes you feel happy?",
                "Where is it?",
                "Why does it make you feel good?",
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
            sample: "My happy place\n\nThe place that makes me happiest is a small lake near my grandparents' village. It's surrounded by tall trees, and the water is so clear that you can see fish swimming.\n\nI've been going there since I was a child. My grandfather used to take me fishing there, and now I go there whenever I visit my grandparents.\n\nIt makes me happy because it's so peaceful. There are no cars or crowds, just the sound of birds and the wind in the trees. When I feel stressed about school, I imagine I'm sitting by the lake, and it helps me relax. Everyone should have a place like that.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Tom looked out of the window, he saw something incredible.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Tom looked out of the window, he saw something incredible. A huge hot-air balloon was landing in the field behind his house!\n\nHe ran outside with his little sister. The balloon was bright red and yellow, and there were three people in the basket. They waved at Tom and climbed out.\n\n'We had to land because of the wind,' said the pilot. 'Is this your field?' Tom explained that it belonged to his family. The pilot thanked him and asked if he wanted a short ride.\n\nTom couldn't believe his luck. He went up in the balloon and saw his whole village from the sky. It was the best day ever.",
          },
        },
      ],
    },
  ],
};
