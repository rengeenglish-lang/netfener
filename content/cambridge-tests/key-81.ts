import type { CambridgeTest } from "./types";

/** A2 Key practice test 81 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_81: CambridgeTest = {
  id: "key-81",
  level: "key",
  no: 81,
  title: "A2 Key · Practice Test 81",
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
                    "Please bring old newspapers to the art room for our project.",
                  ],
                },
                question: "What does the notice ask students to do?",
                options: [
                  "buy newspapers",
                  "bring something for an art project",
                  "read the newspapers",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Ella, I can't find my keys. Are they in your bag? Mum",
                  ],
                },
                question: "What does Mum want to know?",
                options: [
                  "where Ella is",
                  "when Ella is coming home",
                  "if Ella has her keys",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE DO NOT LEAN ON THE GLASS",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Don't push against the glass.",
                  "The glass is broken.",
                  "Clean the glass.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Football training is cancelled on Monday. The coach is ill. Pass it on! Tom",
                  ],
                },
                question: "Why is training cancelled?",
                options: [
                  "The weather is bad.",
                  "The coach is unwell.",
                  "The field is closed.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "TRAIN",
                    "Bicycles allowed in the first carriage only.",
                  ],
                },
                question: "Where can you take your bike?",
                options: [
                  "in one part of the train",
                  "anywhere on the train",
                  "nowhere on the train",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "SUMMER CAMP",
                    "Outdoor adventures for ages 10–15.",
                    "Canoeing, climbing, camping and more!",
                  ],
                },
                question: "What do we know about the camp?",
                options: [
                  "It's for adults.",
                  "It's indoors.",
                  "It offers outdoor activities.",
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
                title: "Oliver",
                text: "I love cycling. I cycle to school every day and go on long rides at weekends. Last summer, I cycled from London to Edinburgh with my uncle. It was 650 kilometres! It took us eight days. I raised £1,000 for a children's hospital.",
              },
              {
                title: "Mia",
                text: "My hobby is acting. I've been in lots of plays at school. Last year, I got a small part in a TV programme. I had to wear a costume from the 1800s. It was very exciting to see myself on TV! I've joined an acting agency now.",
              },
              {
                title: "Kai",
                text: "I'm interested in nature. I go bird-watching in the woods near my house. I've also built a pond in my garden. Now frogs, newts and dragonflies live there. I count the animals every week and send the information to a wildlife charity.",
              },
            ],
            items: [
              {
                text: "travelled a long way?",
                answer: 0,
              },
              {
                text: "collected money for a good cause?",
                answer: 0,
              },
              {
                text: "appeared on television?",
                answer: 1,
              },
              {
                text: "wore clothes from the past?",
                answer: 1,
              },
              {
                text: "made something for animals?",
                answer: 2,
              },
              {
                text: "shares information with an organisation?",
                answer: 2,
              },
              {
                text: "does their hobby with a relative?",
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
              title: "A cat called Bob",
              paragraphs: [
                "James was a street musician in London. He had very little money and no home. One day, he found an injured ginger cat outside his flat.",
                "'I took him to the vet and spent all my money on medicine,' says James. 'I called him Bob. When he was better, he followed me everywhere.'",
                "Bob started going to work with James. He sat on James's shoulder while he played the guitar. 'People loved Bob,' says James. 'They stopped to take photos and gave me more money.'",
                "James wrote a book about Bob. It became very famous and was made into a film. 'Bob changed my life,' says James. 'He gave me a reason to keep going.'",
              ],
            },
            items: [
              {
                question: "What was James's job?",
                options: [
                  "vet",
                  "street musician",
                  "writer",
                ],
                answer: 1,
              },
              {
                question: "What did James do when he found Bob?",
                options: [
                  "gave him to the police",
                  "took him to the vet",
                  "left him in the street",
                ],
                answer: 1,
              },
              {
                question: "Where did Bob sit while James played?",
                options: [
                  "on the ground",
                  "in a box",
                  "on James's shoulder",
                ],
                answer: 2,
              },
              {
                question: "Why did people give James more money?",
                options: [
                  "They liked Bob.",
                  "James played better.",
                  "James asked them.",
                ],
                answer: 0,
              },
              {
                question: "What happened to James's book?",
                options: [
                  "Nobody read it.",
                  "It became a film.",
                  "He sold it to Bob.",
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
            title: "Volcanoes",
            text: [
              "A volcano is a mountain with a hole at the top. Sometimes hot liquid rock, called lava, comes out of the hole. This is called an {1}.",
              "There are about 1,500 active volcanoes in the world. The {2} active volcano is Kilauea in Hawaii. It has been erupting almost all the time since 1983.",
              "Volcanoes can be dangerous. When a volcano erupts, it can destroy towns and villages. But volcanoes are also useful. The soil near volcanoes is very good for {3} crops. In some countries, like Iceland, people use the heat from volcanoes to make electricity. Scientists {4} volcanoes carefully. They use special machines to {5} when a volcano might erupt. This helps them to warn people so they can {6} the area safely.",
            ],
            gaps: [
              {
                options: [
                  "explosion up",
                  "eruption",
                  "fire",
                ],
                answer: 1,
              },
              {
                options: [
                  "most",
                  "more",
                  "much",
                ],
                answer: 0,
              },
              {
                options: [
                  "making",
                  "building",
                  "growing",
                ],
                answer: 2,
              },
              {
                options: [
                  "learn up",
                  "read up",
                  "study",
                ],
                answer: 2,
              },
              {
                options: [
                  "predict",
                  "tell up",
                  "say up",
                ],
                answer: 0,
              },
              {
                options: [
                  "go up",
                  "leave",
                  "stay",
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
              "Hi Sophie,",
              "How {1} you? I hope you're well. I'm writing to tell you about my new part-time job.",
              "I've started working at a pet shop on Saturdays. I look after the animals and help customers. It's really fun! My favourite animals {2} the rabbits.",
              "I earn £30 every Saturday. I'm saving {3} money to buy a new laptop. I hope to have enough by Christmas. Do you have a part-time job? If not, maybe you could get one {4} the pet shop too! They need more people. Let me know {5} you're interested. Write back {6}!",
              "Love,",
              "Holly",
            ],
            answers: [
              [
                "are",
              ],
              [
                "are",
              ],
              [
                "my",
                "the",
                "this",
                "some",
              ],
              [
                "at",
                "in",
              ],
              [
                "if",
                "whether",
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
            instruction: "You visited a castle last weekend. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say where the castle is.",
              "Say what you saw there.",
              "Say what you liked best.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nLast weekend, I visited an old castle near the sea. We saw old rooms, swords and a big tower. I liked the tower best because the view of the sea from the top was amazing.\n\nBye,\nEfe",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🚴🌳",
                label: "1",
              },
              {
                e: "🚴🐕🏃",
                label: "2",
              },
              {
                e: "👦🐕🏠😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One afternoon, Max was riding his bike in the countryside. Suddenly, a small dog started running after him. Max stopped and saw that the dog was wearing a collar with an address. He took the dog to the house. An old man opened the door and was very happy to see his dog. He had been looking for it all day. He gave Max some lemonade to say thank you.",
          },
        },
      ],
    },
  ],
};
