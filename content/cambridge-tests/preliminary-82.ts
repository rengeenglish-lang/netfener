import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 82 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_82: CambridgeTest = {
  id: "preliminary-82",
  level: "preliminary",
  no: 82,
  title: "B1 Preliminary · Practice Test 82",
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
                    "SWIMMING POOL",
                    "Please shower before entering the pool.",
                  ],
                },
                question: "What should you do?",
                options: [
                  "swim before showering",
                  "bring a towel",
                  "shower before swimming",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Lucy, I've got a cold. Can you tell the teacher I won't be at school today? Emma",
                  ],
                },
                question: "What does Emma want Lucy to do?",
                options: [
                  "bring her medicine",
                  "visit her",
                  "tell the teacher something",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not iron.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You shouldn't iron it.",
                  "Iron it on high heat.",
                  "Iron it before wearing.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I've found your wallet in my car. I'll bring it to school tomorrow. Ben",
                  ],
                },
                question: "What has Ben found?",
                options: [
                  "Max's phone",
                  "Max's wallet",
                  "Max's keys",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "The museum shop is open until 6 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can shop until 6.",
                  "The shop opens at 6.",
                  "The shop is closed.",
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
            instruction: "The young people below all want to choose a book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "Cooking for Beginners",
                text: "Easy recipes with step-by-step photos.",
              },
              {
                title: "The Dragon's Egg",
                text: "A fantasy adventure with dragons.",
              },
              {
                title: "Famous Scientists",
                text: "The lives of great scientists.",
              },
              {
                title: "The Football Club",
                text: "A story about a boys' football team.",
              },
              {
                title: "Ghost Stories",
                text: "Scary stories for brave readers.",
              },
              {
                title: "Travel the World",
                text: "A guide to amazing places.",
              },
              {
                title: "Learn to Draw",
                text: "Drawing lessons for beginners.",
              },
              {
                title: "Space Adventures",
                text: "A science-fiction story set in space.",
              },
            ],
            items: [
              {
                text: "Kaan loves dragons and fantasy.",
                answer: 1,
              },
              {
                text: "Defne wants to learn to cook.",
                answer: 0,
              },
              {
                text: "Mert loves football stories.",
                answer: 3,
              },
              {
                text: "Selin wants to read about scientists.",
                answer: 2,
              },
              {
                text: "Burak loves scary stories.",
                answer: 4,
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
              title: "My grandfather",
              paragraphs: [
                "My grandfather is ninety years old, but he's still very active. He goes for a walk every morning and works in his garden every afternoon.",
                "When he was young, my grandfather was a teacher. He taught at the same school for forty years. Many of his old students still visit him.",
                "My grandfather loves telling stories. When I visit him, he tells me about his life. He grew up during a war, and his family was very poor. But he worked very hard and went to university.",
                "My grandfather has taught me many things. He's taught me to work hard, be kind to others and never give up. He's my hero, and I hope I'll be like him when I'm older.",
              ],
            },
            items: [
              {
                question: "What does the grandfather do every morning?",
                options: [
                  "works in the garden",
                  "goes for a walk",
                  "teaches",
                  "reads",
                ],
                answer: 1,
              },
              {
                question: "What was the grandfather's job?",
                options: [
                  "doctor",
                  "farmer",
                  "soldier",
                  "teacher",
                ],
                answer: 3,
              },
              {
                question: "Who still visits the grandfather?",
                options: [
                  "his old students",
                  "his old colleagues",
                  "his friends",
                  "his neighbours",
                ],
                answer: 0,
              },
              {
                question: "What was the grandfather's life like when he was young?",
                options: [
                  "easy",
                  "boring",
                  "difficult",
                  "exciting",
                ],
                answer: 2,
              },
              {
                question: "What has the grandfather taught the writer?",
                options: [
                  "to be a teacher",
                  "to garden",
                  "to work hard and be kind",
                  "to tell stories",
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
            title: "A house on wheels",
            text: [
              "More and more people are choosing to live in houses on wheels. {1} They're called tiny houses.",
              "Tiny houses are very small, usually less than twenty square metres. {2} They have a kitchen, a bathroom and a bed, often on a small upper floor.",
              "Many people choose tiny houses because they're cheap. {3} A normal house can cost hundreds of thousands of pounds.",
              "Tiny houses are also good for the environment. {4} They use less energy and water than normal houses.",
              "Because they're on wheels, tiny houses can be moved easily. {5} Some people travel around the country in their homes.",
            ],
            sentences: [
              "Nobody lives in tiny houses.",
              "Some have solar panels for electricity.",
              "Tiny houses are very expensive.",
              "But they have everything you need.",
              "They're becoming very popular.",
              "This means owners can live anywhere they want.",
              "Tiny houses can't be moved.",
              "Some cost less than £30,000.",
            ],
            answers: [
              4,
              3,
              7,
              1,
              5,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Rainforests",
            text: [
              "Rainforests are thick, wet forests found in tropical areas. They are home to more than half of the world's plants and {1}.",
              "The largest rainforest is the Amazon in South America. It covers an area of more than five million square kilometres. It is sometimes called 'the lungs of the Earth' because it {2} a lot of oxygen.",
              "Rainforests are important for many reasons. They help to control the climate, and many of our {3} come from rainforest plants. Sadly, rainforests are being destroyed. Every year, millions of trees are cut down for wood or to make space for farms. When rainforests are destroyed, many animals lose their homes. Some species are in danger of {4}. Many organisations are working to protect rainforests. You can help by recycling paper and buying products that are {5} for the environment. If we don't protect rainforests, the {6} could be terrible.",
            ],
            gaps: [
              {
                options: [
                  "animal up",
                  "animals",
                  "animated",
                  "animation",
                ],
                answer: 1,
              },
              {
                options: [
                  "production",
                  "productive",
                  "producer",
                  "produces",
                ],
                answer: 3,
              },
              {
                options: [
                  "medical",
                  "medicines",
                  "medicinal",
                  "medic",
                ],
                answer: 1,
              },
              {
                options: [
                  "disappear",
                  "disappeared",
                  "disappearance",
                  "disappearing",
                ],
                answer: 3,
              },
              {
                options: [
                  "friendly",
                  "friend",
                  "friendship",
                  "friendless",
                ],
                answer: 0,
              },
              {
                options: [
                  "consequent",
                  "consequently",
                  "consequences",
                  "consequence up",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A great day",
            text: [
              "Last Saturday was a great day. My family and I went {1} the beach for the first time this summer.",
              "The weather was hot and sunny. We arrived early, {2} we could find a good place on the sand. My dad put up a big umbrella, and my mum laid out our towels.",
              "My brother and I went swimming in the sea. The water was cold at first, but we soon got used to it. We also built a huge sandcastle {3} towers and walls. My dad helped us. For lunch, we had a picnic. My mum had made sandwiches, salad and fruit. After lunch, we played volleyball {4} some other children. In the afternoon, we went for a walk along the beach and collected shells. I found a really big one! We stayed {5} the sun went down. The sunset was beautiful. It was one of the best days {6} the summer.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "so",
              ],
              [
                "with",
              ],
              [
                "with",
              ],
              [
                "until",
                "till",
              ],
              [
                "of",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "Your town",
              lines: [
                "I'd like to visit your town. What is there to do? [Tell Alex]",
                "What's the best time to visit? [Explain]",
                "Where should I stay? [Suggest]",
                "Can you show me around? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's great! There are lots of things to do in my town. There's a beautiful old castle that you can visit, and there's a museum about the history of the town. There's also a big park with a lake where you can go boating.\n\nThe best time to visit is in spring or early summer. The weather is warm but not too hot, and the flowers in the park are beautiful. Summer can be very busy with tourists.\n\nYou could stay at the small hotel near the castle. It's not too expensive, and it's very comfortable. Or you could stay with my family!\n\nOf course I'll show you around! Let me know when you're coming.\n\nBye,\nTuna",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An important invention",
              lines: [
                "What do you think is the most important invention?",
                "Why is it important?",
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
            sample: "The power of electricity\n\nI think the most important invention is the electric light. Before it was invented, people used candles and oil lamps, which were dangerous and didn't give much light.\n\nThe electric light changed the world. It allowed people to work and study at night. It made streets safer and homes more comfortable. Factories could work twenty-four hours a day.\n\nWithout the electric light, life would be very different. We would have to go to bed when it got dark. We couldn't read or study at night. Cities would be dark and dangerous. I think we should be grateful for this amazing invention.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Tom saw the dog, he knew he had to help it.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Tom saw the dog, he knew he had to help it. It was sitting alone in the rain, shaking with cold.\n\nThe dog was very thin, and it had no collar. Tom took off his jacket and wrapped it around the dog. Then he carried it home.\n\nHis mum was surprised when she saw the dog, but she agreed to help. They gave it some food and water and dried it with a towel. The next day, they took it to the vet.\n\nThe vet said the dog was healthy but very hungry. Nobody claimed the dog, so Tom's family decided to keep it. Tom called it Lucky, and they became best friends.",
          },
        },
      ],
    },
  ],
};
