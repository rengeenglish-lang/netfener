import type { CambridgeTest } from "./types";

/** A2 Key practice test 47 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_47: CambridgeTest = {
  id: "key-47",
  level: "key",
  no: 47,
  title: "A2 Key · Practice Test 47",
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
                    "CAFÉ",
                    "Today's special: vegetable soup and bread, £4.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Soup is free today.",
                  "The café is closed today.",
                  "There is a special meal today.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lucy, I've got your jacket. You left it in my car. I'll bring it on Monday. Dad",
                  ],
                },
                question: "What does Dad tell Lucy?",
                options: [
                  "He has bought her a jacket.",
                  "He will return something she forgot.",
                  "He will pick her up on Monday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "DANGER",
                    "Deep water. No swimming.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Swimming lessons are here.",
                  "It's not safe to swim here.",
                  "You can swim here.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sophie,",
                    "The bus to the concert leaves from outside the school at 6. Don't be late! Mrs Grant",
                  ],
                },
                question: "What does Mrs Grant tell Sophie?",
                options: [
                  "what to wear to the concert",
                  "how much the concert costs",
                  "where and when to get the bus",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "DVDs can be borrowed for one week.",
                  ],
                },
                question: "How long can you keep a DVD?",
                options: [
                  "seven days",
                  "two weeks",
                  "one day",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BIKE FOR SALE",
                    "Mountain bike, 21 gears, blue.",
                    "Needs new tyres. £60.",
                  ],
                },
                question: "What do we know about the bike?",
                options: [
                  "It is brand new.",
                  "It needs some repairs.",
                  "It is red.",
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
                title: "Daniel",
                text: "I love playing the saxophone. I started three years ago at school. Now I'm in a jazz band that plays at a café in town every Friday night. We don't get paid, but we get free food! The other members are much older than me. They've taught me a lot.",
              },
              {
                title: "Molly",
                text: "My hobby is horse riding. I have lessons every Sunday, and I help at the stables on Saturdays to pay for them. I've been riding since I was seven. Last year, I won a jumping competition with a horse called Star. It was the best day ever.",
              },
              {
                title: "Tom",
                text: "I'm interested in politics. I'm a member of the youth council in my town. We meet once a month and talk about problems young people have. Last year, we asked the town for a new skate park, and they agreed! It opens next month.",
              },
            ],
            items: [
              {
                text: "gets something for free?",
                answer: 0,
              },
              {
                text: "plays with people older than them?",
                answer: 0,
              },
              {
                text: "works to pay for their hobby?",
                answer: 1,
              },
              {
                text: "has won a competition?",
                answer: 1,
              },
              {
                text: "has helped change something in their town?",
                answer: 2,
              },
              {
                text: "meets with a group monthly?",
                answer: 2,
              },
              {
                text: "started at school?",
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
              title: "Growing up in a hotel",
              paragraphs: [
                "Fifteen-year-old Isla's parents own a small hotel by the sea in Cornwall. 'I've lived here all my life,' she says. 'It's a bit like living in a very busy house!'",
                "In the summer, the hotel is full of guests. 'I help in the restaurant at breakfast time,' says Isla. 'I serve tea and coffee and clear the tables. Sometimes I'm very tired before school.'",
                "Isla meets lots of interesting people. 'Last year, a family from Japan stayed for two weeks,' she says. 'Their daughter was my age, and we became friends. We still send each other messages.'",
                "In winter, the hotel is quiet. 'That's my favourite time,' says Isla. 'We have the whole place to ourselves. I can use the swimming pool every day!'",
              ],
            },
            items: [
              {
                question: "Where does Isla live?",
                options: [
                  "in her parents' hotel",
                  "in a house by the sea",
                  "in Japan",
                ],
                answer: 0,
              },
              {
                question: "What does Isla do in the summer?",
                options: [
                  "She works as a cook.",
                  "She cleans the rooms.",
                  "She helps at breakfast.",
                ],
                answer: 2,
              },
              {
                question: "What happened last year?",
                options: [
                  "Isla went to Japan.",
                  "Isla made friends with a guest.",
                  "Isla stopped working.",
                ],
                answer: 1,
              },
              {
                question: "Why does Isla like winter?",
                options: [
                  "There are lots of guests.",
                  "The hotel is quiet.",
                  "It snows a lot.",
                ],
                answer: 1,
              },
              {
                question: "What can Isla do in winter?",
                options: [
                  "visit her friend",
                  "go skiing",
                  "swim in the pool every day",
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
            title: "The Statue of Liberty",
            text: [
              "The Statue of Liberty stands on an island in New York Harbour. It was a {1} from the people of France to the people of the USA in 1886.",
              "The statue is of a woman holding a torch in her right hand. It is ninety-three metres tall, {2} the base. It was designed by a French artist called Frédéric Bartholdi.",
              "The statue was made in France and then {3} to the USA in 350 pieces! It took four months to put it together. At first, the statue was brown, the colour of copper. But over time, the weather {4} it green. Today, about four million people visit the statue every year. You can take a boat to the island and climb {5} to the crown. The view of New York from the top is {6}.",
            ],
            gaps: [
              {
                options: [
                  "prize",
                  "price",
                  "present",
                ],
                answer: 2,
              },
              {
                options: [
                  "including",
                  "adding",
                  "counting on",
                ],
                answer: 0,
              },
              {
                options: [
                  "posted",
                  "sent",
                  "given",
                ],
                answer: 1,
              },
              {
                options: [
                  "turned",
                  "became",
                  "got",
                ],
                answer: 0,
              },
              {
                options: [
                  "on",
                  "over",
                  "up",
                ],
                answer: 2,
              },
              {
                options: [
                  "wonder",
                  "wondering",
                  "wonderful",
                ],
                answer: 2,
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
              "Hi Hannah,",
              "I'm writing to ask {1} help. I want to make a birthday cake for my mum, but I'm not very good at baking. You make amazing cakes!",
              "Could you come to my house {2} Saturday morning and help me? My mum will be at work, so it will be a surprise.",
              "I've got flour, eggs and sugar, but I'm not sure {3} else I need. Could you bring the recipe? We could make a chocolate cake, because that's {4} favourite. I'll make lunch for you {5} say thank you. Let me know {6} you can come.",
              "Thanks,",
              "Lily",
            ],
            answers: [
              [
                "for",
              ],
              [
                "on",
                "this",
                "next",
              ],
              [
                "what",
              ],
              [
                "her",
              ],
              [
                "to",
              ],
              [
                "if",
                "whether",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You have just come back from a holiday. Write an email to your English friend, Ali. Write 25 words or more.",
            prompts: [
              "Say where you went.",
              "Say what the weather was like.",
              "Say what you enjoyed most.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Ali' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Ali,\n\nI've just come back from a holiday in Bodrum with my family. The weather was hot and sunny every day. I enjoyed swimming in the sea most because the water was clear and warm.\n\nBye,\nKaan",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👩🏪🛒",
                label: "1",
              },
              {
                e: "👩🥚⬇️💥",
                label: "2",
              },
              {
                e: "👩🥚😮👨😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "On Saturday, Mrs Brown went to the supermarket to buy some eggs. On the way home, she tripped and dropped the bag. She was sure that all the eggs were broken. When she got home, she opened the box carefully. Only one egg was broken! Her husband laughed and said it was her lucky day.",
          },
        },
      ],
    },
  ],
};
