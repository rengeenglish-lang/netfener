import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 59 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_59: CambridgeTest = {
  id: "preliminary-59",
  level: "preliminary",
  no: 59,
  title: "B1 Preliminary · Practice Test 59",
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
                    "The deep end is closed today for cleaning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool is closed all day.",
                  "The pool is being painted.",
                  "Part of the pool is closed today.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Grace, I've got some great news! I passed my driving test. Let's celebrate! Emma",
                  ],
                },
                question: "Why has Emma sent this message?",
                options: [
                  "to ask for a lift",
                  "to share some good news",
                  "to cancel a plan",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains caffeine.",
                    "Not recommended for children or pregnant women.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Everyone can have this.",
                  "Some people shouldn't have this.",
                  "This is for children.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "The basketball match on Saturday has been moved to Sunday because of the weather. Coach",
                  ],
                },
                question: "Why has the match been moved?",
                options: [
                  "because the coach is ill",
                  "because the hall is closed",
                  "because of the weather",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Free entry every Monday.",
                  ],
                },
                question: "When is entry free?",
                options: [
                  "on Mondays",
                  "every day",
                  "at weekends",
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
            instruction: "The young people below all want to buy a book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Lost Island",
                text: "An adventure story about a group of children shipwrecked on an island.",
              },
              {
                title: "Healthy Recipes",
                text: "Easy, healthy meals for teenagers.",
              },
              {
                title: "The Football Star",
                text: "The life story of a famous footballer.",
              },
              {
                title: "Space Travel",
                text: "A guide to the history of space exploration.",
              },
              {
                title: "Learn French",
                text: "A course for beginners with audio.",
              },
              {
                title: "The Detective",
                text: "A mystery about a teenage detective.",
              },
              {
                title: "Draw Animals",
                text: "How to draw dogs, cats and other animals.",
              },
              {
                title: "Ancient Rome",
                text: "History of the Roman Empire.",
              },
            ],
            items: [
              {
                text: "Ece wants to learn French before her trip to Paris.",
                answer: 4,
              },
              {
                text: "Kaan loves football and wants to read about a famous player.",
                answer: 2,
              },
              {
                text: "Selin wants to learn to cook healthy food.",
                answer: 1,
              },
              {
                text: "Mert loves mysteries.",
                answer: 5,
              },
              {
                text: "Defne wants to improve her drawing.",
                answer: 6,
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
              title: "My life as a dancer",
              paragraphs: [
                "I've been dancing since I was four years old. I started with ballet, and then I tried jazz and modern dance. Now I'm seventeen, and I want to be a professional dancer.",
                "Being a dancer is very hard work. I train for four hours every day after school. My body is often very tired, and sometimes I get injured. Last year, I hurt my ankle and couldn't dance for two months.",
                "But I love dancing more than anything. When I'm on stage, I feel free and happy. Dancing is a way to express my feelings without words.",
                "Last month, I auditioned for a famous dance school in London. There were more than five hundred dancers, and only thirty places. I was so nervous. But last week, I got a letter saying I'd been accepted! I start in September. It's a dream come true.",
              ],
            },
            items: [
              {
                question: "When did the writer start dancing?",
                options: [
                  "when she was four",
                  "when she was seventeen",
                  "last year",
                  "last month",
                ],
                answer: 0,
              },
              {
                question: "How long does the writer train every day?",
                options: [
                  "one hour",
                  "two hours",
                  "all day",
                  "four hours",
                ],
                answer: 3,
              },
              {
                question: "What happened last year?",
                options: [
                  "She won a competition.",
                  "She hurt her ankle.",
                  "She stopped dancing.",
                  "She moved to London.",
                ],
                answer: 1,
              },
              {
                question: "How does the writer feel on stage?",
                options: [
                  "free and happy",
                  "nervous",
                  "bored",
                  "tired",
                ],
                answer: 0,
              },
              {
                question: "What happened last week?",
                options: [
                  "She hurt herself.",
                  "She danced in London.",
                  "She got a place at a dance school.",
                  "She stopped dancing.",
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
            title: "A city of canals",
            text: [
              "Venice, in Italy, is famous for its canals. {1} Instead of roads, people travel by boat.",
              "The city was built on more than a hundred small islands. {2} The islands are connected by about 400 bridges.",
              "The most famous boats in Venice are gondolas. {3} They are long, black boats that are moved by a man with a long pole.",
              "Today, Venice faces a serious problem. {4} When the sea level rises, parts of the city are flooded.",
              "Venice is one of the most popular tourist destinations in the world. {5} But some people worry that there are too many tourists.",
            ],
            sentences: [
              "About twenty million people visit every year.",
              "It was built more than 1,500 years ago.",
              "Nobody visits Venice.",
              "There are no cars in the city centre.",
              "The city is slowly sinking into the sea.",
              "Venice is in the mountains.",
              "In the past, they were the main way of travelling around the city.",
              "Venice has lots of roads.",
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
            title: "Sharks",
            text: [
              "Sharks are some of the oldest animals on Earth. They have been {1} in the oceans for more than 400 million years.",
              "There are more than 500 species of shark. The largest is the whale shark, which can grow up to eighteen metres long. Despite its size, it's completely {2} to humans.",
              "Sharks have amazing senses. They can smell blood from very far away and can {3} electrical signals from other animals. Many people are afraid of sharks, but shark attacks are very rare. You are more likely to be struck by {4} than attacked by a shark! In fact, humans are much more dangerous to sharks. Every year, millions of sharks are killed for their fins. As a result, many species are now {5}. Sharks are very important for the health of the ocean. Without them, the balance of {6} life would be destroyed.",
            ],
            gaps: [
              {
                options: [
                  "live",
                  "lived",
                  "living",
                  "lives",
                ],
                answer: 2,
              },
              {
                options: [
                  "harm",
                  "harmful",
                  "harmless",
                  "harmed",
                ],
                answer: 2,
              },
              {
                options: [
                  "detect",
                  "detection",
                  "detective",
                  "detected",
                ],
                answer: 0,
              },
              {
                options: [
                  "light",
                  "lighting",
                  "lightly",
                  "lightning",
                ],
                answer: 3,
              },
              {
                options: [
                  "danger",
                  "endangered",
                  "dangerous",
                  "dangerously",
                ],
                answer: 1,
              },
              {
                options: [
                  "marine",
                  "marina",
                  "mariner",
                  "marinate",
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
            title: "A visit to my grandparents",
            text: [
              "Every summer, I visit my grandparents in their village in the mountains. It's very different {1} life in the city.",
              "My grandparents have a small farm with chickens, goats and a cow. Every morning, I help my grandfather feed the animals. Then my grandmother makes breakfast with fresh eggs and milk from the farm.",
              "In the afternoons, I go walking in the mountains with my cousins. We swim in the river and pick wild berries. In the evenings, we sit {2} the fire and my grandfather tells us stories about the past. He's a great storyteller! There's no internet in the village, {3} I don't use my phone much. At first, I found it difficult, but now I enjoy it. I feel much more relaxed. I always feel sad {4} I have to leave. My grandparents are getting older, so I want to spend as much time {5} them as possible. I love them very {6}.",
            ],
            answers: [
              [
                "from",
              ],
              [
                "by",
                "around",
                "near",
              ],
              [
                "so",
              ],
              [
                "when",
              ],
              [
                "with",
              ],
              [
                "much",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "Your school",
              lines: [
                "Tell me about your school. [Describe it]",
                "What's your favourite subject? [Explain why]",
                "What do you do at lunchtime? [Tell Chris]",
                "Would you like to change anything about your school? [Give your opinion]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nMy school is quite big. There are about a thousand students. It has a big sports hall, a swimming pool and a library. The teachers are mostly friendly, and I have lots of friends there.\n\nMy favourite subject is history, because I love learning about the past. Our teacher makes the lessons really interesting by telling stories and showing videos.\n\nAt lunchtime, I usually eat in the canteen with my friends. Then we play football outside or sit and chat. Sometimes I go to the library to read.\n\nI'd like to change the school timetable. I think school should start later, because I'm always tired in the morning!\n\nBye,\nAsya",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A famous place",
              lines: [
                "Tell us about a famous place you've visited.",
                "What did you see there?",
                "Would you recommend it?",
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
            sample: "Visiting the Eiffel Tower\n\nLast summer, I visited the Eiffel Tower in Paris with my family. I'd seen it in photos many times, but seeing it in real life was amazing. It's much bigger than I expected!\n\nWe took the lift to the top. The view of Paris was incredible. We could see the River Seine, Notre-Dame and lots of other famous buildings. At night, the tower is lit up with thousands of lights, which sparkle every hour.\n\nI would definitely recommend visiting the Eiffel Tower. However, it's very busy, so you should book your tickets in advance. Try to go early in the morning or late in the evening, when there are fewer people.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When the plane landed, Emma looked out of the window and gasped.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When the plane landed, Emma looked out of the window and gasped. Everything was covered in snow. She was in Canada for the first time, visiting her aunt.\n\nHer aunt met her at the airport with a big warm coat. 'You'll need this,' she laughed. It was minus twenty degrees outside!\n\nThe next day, they went skiing in the mountains. Emma had never skied before, and she fell over many times. But by the end of the day, she could ski down the easy slopes.\n\nIn the evening, they sat by the fire and drank hot chocolate. Emma looked at the snow falling outside and smiled. It was going to be an amazing holiday.",
          },
        },
      ],
    },
  ],
};
