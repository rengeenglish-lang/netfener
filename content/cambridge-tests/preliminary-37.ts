import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 37 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_37: CambridgeTest = {
  id: "preliminary-37",
  level: "preliminary",
  no: 37,
  title: "B1 Preliminary · Practice Test 37",
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
                    "TRAIN STATION",
                    "The 8.15 train to London is cancelled. Passengers can take the 8.45 train instead.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There are no trains to London today.",
                  "Passengers should take a later train.",
                  "The 8.15 train is late.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, my brother can give us a lift to the party. Be ready at seven! Kate",
                  ],
                },
                question: "What does Kate tell Jo?",
                options: [
                  "when to be ready for a lift",
                  "where the party is",
                  "what to wear",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Suitable for microwave and oven.",
                    "Remove lid before heating.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can only use a microwave.",
                  "Leave the lid on when heating.",
                  "You should take the lid off before heating.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sam,",
                    "The football club needs a new goalkeeper. Are you interested? Training is on Tuesdays. Coach",
                  ],
                },
                question: "Why has the coach written to Sam?",
                options: [
                  "to cancel training",
                  "to offer him a position",
                  "to tell him about a match",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "DVDs can be borrowed for three days only.",
                  ],
                },
                question: "How long can you keep a DVD?",
                options: [
                  "three weeks",
                  "three days",
                  "one day",
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
            instruction: "The young people below all want to visit a city. Read the descriptions of eight cities. Decide which city would be the most suitable for each person.",
            options: [
              {
                title: "Rome",
                text: "Ancient ruins, beautiful churches and delicious food.",
              },
              {
                title: "Amsterdam",
                text: "Canals, bicycles and world-famous art museums.",
              },
              {
                title: "Barcelona",
                text: "Beaches, amazing architecture and football.",
              },
              {
                title: "Vienna",
                text: "Classical music concerts, palaces and coffee houses.",
              },
              {
                title: "Reykjavik",
                text: "Hot springs, volcanoes and the Northern Lights.",
              },
              {
                title: "London",
                text: "Museums, theatres and shopping.",
              },
              {
                title: "Tokyo",
                text: "Modern technology, temples and great food.",
              },
              {
                title: "New York",
                text: "Skyscrapers, Broadway shows and Central Park.",
              },
            ],
            items: [
              {
                text: "Can wants to see volcanoes and swim in hot water outside.",
                answer: 4,
              },
              {
                text: "Defne loves classical music and wants to visit palaces.",
                answer: 3,
              },
              {
                text: "Mert loves history and wants to see ancient buildings.",
                answer: 0,
              },
              {
                text: "Lale loves cycling and art.",
                answer: 1,
              },
              {
                text: "Arda loves technology and wants to visit Asia.",
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
              title: "My first part-time job",
              paragraphs: [
                "When I was sixteen, I got my first part-time job at a pizza restaurant. I worked there on Friday and Saturday evenings, serving customers and clearing tables.",
                "The first few weeks were very hard. The restaurant was always busy, and I had to remember lots of orders. Sometimes I made mistakes and brought the wrong food to customers. I felt really embarrassed.",
                "But my manager, Sofia, was very understanding. She told me that everyone makes mistakes at the beginning and that I'd soon get better. She also taught me some tricks for remembering orders.",
                "After a few months, I became much more confident. I enjoyed talking to customers, and some of them even asked for me by name! I saved enough money to buy a new bike. The job taught me a lot about responsibility and hard work.",
              ],
            },
            items: [
              {
                question: "What was the writer's job?",
                options: [
                  "cooking pizza",
                  "cleaning",
                  "serving in a restaurant",
                  "delivering pizza",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "cooking",
                  "talking to customers",
                  "remembering orders",
                  "getting to work",
                ],
                answer: 2,
              },
              {
                question: "How did Sofia help the writer?",
                options: [
                  "She was understanding and gave advice.",
                  "She gave him more money.",
                  "She did his work.",
                  "She told him to leave.",
                ],
                answer: 0,
              },
              {
                question: "How did the writer change after a few months?",
                options: [
                  "He became more nervous.",
                  "He stopped working.",
                  "He became a manager.",
                  "He became more confident.",
                ],
                answer: 3,
              },
              {
                question: "What did the writer buy?",
                options: [
                  "a phone",
                  "a bike",
                  "a computer",
                  "clothes",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A school on a boat",
            text: [
              "In Bangladesh, some children go to school on boats. {1} During the rainy season, many villages are flooded, and roads become impossible to use.",
              "The floating schools were started by an architect called Mohammed Rezwan. {2} He wanted to make sure that children could continue their education all year round.",
              "Each boat has a classroom with desks, books and computers. {3} The boats pick up children from their villages and take them to school.",
              "The boats use solar panels to provide electricity. {4} At night, some boats are also used as libraries for adults.",
              "Today, there are more than twenty floating schools. {5} The project has won many international awards.",
            ],
            sentences: [
              "Up to thirty children can study on each boat.",
              "The schools are very expensive.",
              "This is because of the country's geography.",
              "They help thousands of children every year.",
              "Children have to swim to school.",
              "He grew up in the area and knew how difficult life was during floods.",
              "The boats only work in summer.",
              "This means they can work even when there is no electricity on land.",
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
            title: "Football",
            text: [
              "Football is the most popular sport in the world. It is played by more than 250 million people in over 200 countries. Billions of people {1} it on TV.",
              "The modern game started in England in the nineteenth century, when the first official rules were written. However, similar games were played much {2}, in ancient China and Greece.",
              "Today, the biggest football competition is the FIFA World Cup, which takes place every four years. Brazil has won it more times than any other country. Women's football has become {3} popular in recent years. The Women's World Cup now attracts millions of viewers. Football is popular because it's simple and {4}. All you need is a ball and some space. That's why it's played everywhere, from city streets to beaches. Many professional players say they {5} playing as children with their friends. For many people, football is more than just a game; it's a {6}.",
            ],
            gaps: [
              {
                options: [
                  "see up",
                  "look",
                  "view up",
                  "watch",
                ],
                answer: 3,
              },
              {
                options: [
                  "earlier",
                  "early",
                  "earliest",
                  "earlily",
                ],
                answer: 0,
              },
              {
                options: [
                  "increase",
                  "increasing",
                  "increasingly",
                  "increased",
                ],
                answer: 2,
              },
              {
                options: [
                  "cheaply",
                  "cheapen",
                  "cheap",
                  "cheapness",
                ],
                answer: 2,
              },
              {
                options: [
                  "started",
                  "begun up",
                  "made up",
                  "did",
                ],
                answer: 0,
              },
              {
                options: [
                  "passionate",
                  "passionately",
                  "passions up",
                  "passion",
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
            title: "A volunteering trip",
            text: [
              "Last summer, I spent three weeks volunteering in a village in Peru. I worked {1} a group of other teenagers from around the world.",
              "Our job was to help build a new school. We mixed cement, carried bricks and painted walls. It was very hard work, especially because it was so hot. But it felt good to do something useful.",
              "In the evenings, we taught English to the village children. They were so excited to learn, and they always had big smiles on their faces. I made friends with a girl called Rosa, {2} taught me some Spanish in return. We also went on trips at the weekends. We visited Machu Picchu, {3} is an ancient city in the mountains. It was breathtaking. When it was time to leave, I was very sad. I've promised to go back {4} year. The trip changed the way I see the world. I realise now how lucky I am {5} have a good education. I'd recommend volunteering to {6}.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "who",
              ],
              [
                "which",
              ],
              [
                "next",
                "one",
              ],
              [
                "to",
              ],
              [
                "everyone",
                "anyone",
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
              subject: "A pet",
              lines: [
                "My parents have said I can get a pet! [Lucky you!]",
                "Which pet do you think I should get? [Give advice]",
                "Do you have a pet? [Tell Kim]",
                "How should I look after it? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nLucky you! I've always wanted a pet, but my flat is too small.\n\nI think you should get a cat. Cats are very independent, so they don't need as much attention as dogs. They're also very affectionate and fun to play with. But if you have a big garden, a dog might be better.\n\nI don't have a pet at the moment, but my grandmother has a lovely old dog called Max. I take him for walks when I visit her.\n\nTo look after your pet, you need to give it food and water every day and take it to the vet regularly. Most importantly, give it lots of love!\n\nBye,\nNehir",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A perfect holiday",
              lines: [
                "What would your perfect holiday be like?",
                "Where would you go?",
                "What would you do there?",
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
            sample: "My dream holiday\n\nMy perfect holiday would be a trip to Japan with my best friends. I've always been interested in Japanese culture, and I'd love to see it for myself.\n\nWe would start in Tokyo, where we'd visit the famous temples and try lots of different food, especially sushi and ramen. We'd also go shopping in the busy streets and see the amazing technology.\n\nThen we'd take the bullet train to Kyoto, where we'd stay in a traditional Japanese house. We'd visit the beautiful gardens and see the cherry blossoms. It would be the trip of a lifetime, and I hope I can do it one day!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Nobody believed Sam when he said he had seen a wolf.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Nobody believed Sam when he said he had seen a wolf. 'There are no wolves in this forest,' his father laughed. 'You probably saw a big dog.'\n\nBut Sam was sure. The next day, he went back to the forest with his camera. He waited quietly behind a tree for hours. Just as he was about to give up, he heard something moving.\n\nA grey wolf walked slowly out of the trees. Sam held his breath and took several photos. Then the wolf disappeared.\n\nWhen Sam showed the photos to his father, he was amazed. The local newspaper published them, and scientists came to study the area.",
          },
        },
      ],
    },
  ],
};
