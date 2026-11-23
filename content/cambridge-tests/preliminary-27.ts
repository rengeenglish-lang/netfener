import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 27 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_27: CambridgeTest = {
  id: "preliminary-27",
  level: "preliminary",
  no: 27,
  title: "B1 Preliminary · Practice Test 27",
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
                    "The library will be closed next Monday for a public holiday. Books due that day can be returned on Tuesday without a fine.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed all week.",
                  "You must return books before Monday.",
                  "You won't pay extra if you return books a day late.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Joe, the match has been moved to the other pitch because ours is too wet. See you there at 10. Coach",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the place of the match",
                  "the time of the match",
                  "the coach",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep out of reach of pets.",
                    "Dangerous if swallowed.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "This is food for pets.",
                  "Animals shouldn't be able to get to this.",
                  "It's safe to swallow.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Emma,",
                    "I'm sorry I can't come to your birthday party. My family is going away that weekend. I'll give you your present on Monday. Lucy",
                  ],
                },
                question: "Why can't Lucy go to the party?",
                options: [
                  "She will be away.",
                  "She is ill.",
                  "She hasn't got a present.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "The swimming pool will open at 6 a.m. instead of 7 a.m. from next week.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The pool will close earlier.",
                  "The pool will be closed.",
                  "The pool will open earlier.",
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
            instruction: "The young people below all want to go to a museum. Read the descriptions of eight museums. Decide which museum would be the most suitable for each person.",
            options: [
              {
                title: "Car Museum",
                text: "Over 200 classic cars, plus a race simulator where you can drive a Formula 1 car.",
              },
              {
                title: "Ocean World",
                text: "Huge aquariums with sharks, rays and tropical fish. Feeding shows twice a day.",
              },
              {
                title: "Viking Centre",
                text: "Learn about Viking life, try on armour and see a real Viking ship.",
              },
              {
                title: "Modern Art Gallery",
                text: "Paintings and sculptures by artists from the last fifty years.",
              },
              {
                title: "Toy Museum",
                text: "Toys from the past 300 years, with a play area for children.",
              },
              {
                title: "Computer History",
                text: "The story of computers, from the first huge machines to smartphones.",
              },
              {
                title: "Music Museum",
                text: "Instruments from around the world, with a recording studio you can use.",
              },
              {
                title: "Space Centre",
                text: "Real rockets, a moon rock and a planetarium show.",
              },
            ],
            items: [
              {
                text: "Can loves sea creatures and wants to see animals being fed.",
                answer: 1,
              },
              {
                text: "Selin wants to record a song she has written.",
                answer: 6,
              },
              {
                text: "Arda is fascinated by history and loves stories about warriors.",
                answer: 2,
              },
              {
                text: "Zeynep is interested in technology and how it has changed.",
                answer: 5,
              },
              {
                text: "Kaan loves fast cars and wants to experience racing.",
                answer: 0,
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
              title: "Learning to dance",
              paragraphs: [
                "I've always loved watching people dance, but I was too shy to try it myself. I thought I had no rhythm, and I was worried that people would laugh at me.",
                "Last year, my best friend persuaded me to go to a salsa class with her. I almost didn't go, but she said she wouldn't go without me. The first class was a disaster. I kept stepping on my partner's feet, and I felt really embarrassed.",
                "But the teacher was wonderful. She told us that everyone feels awkward at first and that the most important thing is to enjoy yourself. Slowly, I started to relax and have fun.",
                "Now I go to classes twice a week, and I've even performed in a show. Dancing has made me much more confident, not just on the dance floor but in other parts of my life too. I'm so glad my friend didn't let me give up.",
              ],
            },
            items: [
              {
                question: "Why didn't the writer try dancing before?",
                options: [
                  "She didn't like music.",
                  "She had no time.",
                  "She couldn't find a class.",
                  "She was too shy.",
                ],
                answer: 3,
              },
              {
                question: "Why did the writer go to the first class?",
                options: [
                  "Her friend insisted.",
                  "Her teacher told her to.",
                  "Her parents made her go.",
                  "She wanted to perform.",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel in the first class?",
                options: [
                  "confident",
                  "bored",
                  "embarrassed",
                  "excited",
                ],
                answer: 2,
              },
              {
                question: "What did the teacher tell the students?",
                options: [
                  "to practise every day",
                  "to stop if they were bad",
                  "to enjoy themselves",
                  "to buy new shoes",
                ],
                answer: 2,
              },
              {
                question: "How has dancing changed the writer?",
                options: [
                  "She is more confident in general.",
                  "She wants to be a teacher.",
                  "She has stopped being friends with her friend.",
                  "She doesn't like it any more.",
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
            title: "The town that loves cats",
            text: [
              "In the Japanese town of Aoshima, there are more cats than people. {1} About 120 cats live there, but only around fifteen people.",
              "The cats were brought to the island many years ago to catch mice on fishing boats. {2} When most of the fishermen left, the cats stayed.",
              "Today, the island has become a popular place for tourists. {3} They take a ferry from the mainland to spend the day with the cats.",
              "There are no shops, restaurants or hotels on the island. {4} Visitors have to bring their own food and water.",
              "The few people who still live on the island are mostly elderly. {5} Volunteers come regularly to help feed the cats and give them medical care.",
            ],
            sentences: [
              "They worry about who will look after the cats in the future.",
              "At that time, more than 900 people lived on the island.",
              "The island has a large cat hotel.",
              "It's known as 'Cat Island'.",
              "There aren't even any cars.",
              "Cats are not allowed on the ferry.",
              "Cat lovers come from all over the world.",
              "The cats are very dangerous.",
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
            title: "Recycling",
            text: [
              "Recycling means turning waste into new products. It is one of the best ways to {1} the amount of rubbish we send to landfill sites.",
              "Many materials can be recycled, including paper, glass, plastic and metal. For example, old newspapers can be turned into new paper, and plastic bottles can be {2} into clothes or furniture.",
              "Recycling saves energy and natural resources. Making a can from recycled metal uses 95% less energy than making a new one. However, not everything can be recycled, and it's important to {3} your rubbish carefully. Many countries have different coloured bins for different materials. Some countries are much better at recycling than others. Germany, for example, recycles about two thirds of its rubbish. But recycling is only part of the {4}. We also need to reduce the amount of things we buy and {5} things whenever possible. Small changes can make a big {6}.",
            ],
            gaps: [
              {
                options: [
                  "lower up",
                  "fall",
                  "drop up",
                  "reduce",
                ],
                answer: 3,
              },
              {
                options: [
                  "done",
                  "made",
                  "built up",
                  "created up",
                ],
                answer: 1,
              },
              {
                options: [
                  "choose up",
                  "pick",
                  "order up",
                  "sort",
                ],
                answer: 3,
              },
              {
                options: [
                  "solution",
                  "answer up",
                  "result",
                  "key up",
                ],
                answer: 0,
              },
              {
                options: [
                  "refill up",
                  "replace",
                  "reuse",
                  "return up",
                ],
                answer: 2,
              },
              {
                options: [
                  "different",
                  "differently",
                  "difference",
                  "differ",
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
            title: "A great day out",
            text: [
              "Last weekend, my family and I went {1} a trip to a castle in the countryside. It's more than 800 years old and is one of the best-preserved castles in the country.",
              "We arrived early, {2} there weren't many visitors yet. A guide dressed as a knight showed us around. He told us lots of interesting stories about the people who had lived there.",
              "My favourite part was climbing to the top of the tower. The stairs were very narrow and steep, but the view from the top was amazing. We {3} see for miles! After the tour, we had a picnic in the castle gardens. In the afternoon, there was a show {4} men in armour fought with swords. It was really exciting. My little brother loved it so much that he wants to be a knight {5} he grows up! We all had {6} wonderful time.",
            ],
            answers: [
              [
                "on",
              ],
              [
                "so",
              ],
              [
                "could",
              ],
              [
                "where",
              ],
              [
                "when",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "Learning English",
              lines: [
                "I'm finding it really hard to learn English! [I understand]",
                "What do you do to improve your English? [Give advice]",
                "Do you watch any English TV programmes? [Recommend one]",
                "Could we practise together? [Suggest how]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nI understand how you feel. Learning a new language is really difficult, but you're doing well!\n\nTo improve my English, I read books and magazines in English every day. I also write new words in a notebook and try to use them. Listening to English songs helps me too.\n\nYes, I watch a series called 'Friends'. It's very funny, and the English isn't too difficult. I watch it with English subtitles, which helps me understand.\n\nWe could definitely practise together! Maybe we could have a video call once a week and only speak English. What do you think?\n\nBye,\nNil",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My dream house",
              lines: [
                "What would your dream house be like?",
                "Where would it be?",
                "What special features would it have?",
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
            sample: "My dream home by the sea\n\nMy dream house would be on a cliff by the sea, with huge windows so I could watch the waves all day. It would be made of wood and glass, and it would have a garden full of flowers.\n\nInside, there would be a big kitchen where I could cook for my friends and family. I'd also love a library with thousands of books and comfortable chairs. My bedroom would be at the top, with a balcony where I could watch the sunset.\n\nThe best feature would be a swimming pool on the roof. I could swim and look at the stars at the same time!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The phone rang just as Tom was leaving the house.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The phone rang just as Tom was leaving the house. It was his best friend, Ben, and he sounded very excited.\n\n'You'll never guess what's happened!' Ben said. 'I've won a competition. The prize is two tickets to see the World Cup final, and I want you to come with me!'\n\nTom couldn't believe it. He had always dreamed of watching the World Cup live. The final was in another country, and they would fly there the following week.\n\nThe match was incredible. Their team won, and the stadium was full of noise and celebration. It was the best day of Tom's life.",
          },
        },
      ],
    },
  ],
};
