import type { CambridgeTest } from "./types";

/** A2 Key practice test 63 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_63: CambridgeTest = {
  id: "key-63",
  level: "key",
  no: 63,
  title: "A2 Key · Practice Test 63",
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
                    "SPORTS HALL",
                    "Indoor shoes only. No outdoor shoes allowed.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can wear any shoes.",
                  "Shoes are not allowed.",
                  "You must change your shoes.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Amy, I've just seen your painting in the school hall. It's brilliant! Well done! Ella",
                  ],
                },
                question: "Why has Ella sent this message?",
                options: [
                  "to praise Amy's work",
                  "to ask Amy for a painting",
                  "to tell Amy where the hall is",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "HOTEL POOL",
                    "Open 7 a.m.–9 p.m.",
                    "No lifeguard. Children must be with an adult.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "There is a lifeguard.",
                  "Children can't swim alone.",
                  "The pool is open all night.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ruby,",
                    "I'm making a cake for the school fair. Could you help me decorate it on Friday after school? Holly",
                  ],
                },
                question: "What does Holly want?",
                options: [
                  "help with a cake",
                  "Ruby to make a cake",
                  "to buy a cake",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BUS",
                    "Exact fare only. No change given.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You get change from the driver.",
                  "Buses are free.",
                  "You must have the right money.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "WANTED: Old toys and books for our charity shop.",
                    "Bring them to 25 High Street.",
                  ],
                },
                question: "What does the advertisement ask for?",
                options: [
                  "money for charity",
                  "things people don't need any more",
                  "new toys",
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
                title: "Charlie",
                text: "I love playing chess. I play every day online and at a chess club on Saturdays. Last year, I became the under-14 champion of my city. Now I'm teaching my little sister to play. She's only six, but she's learning fast!",
              },
              {
                title: "Emma",
                text: "My hobby is ice skating. I go to the ice rink every morning before school. My coach says I'm improving a lot. Next month, I'm going to skate in my first big competition. I've practised my routine hundreds of times, but I'm still very nervous.",
              },
              {
                title: "Jamal",
                text: "I'm into nature photography. I take photos of insects, flowers and birds. I use a special camera lens that lets me take very close photos. Last year, I won a prize in a national photography competition. My photo was of a butterfly on a flower.",
              },
            ],
            items: [
              {
                text: "is teaching a family member?",
                answer: 0,
              },
              {
                text: "is the best in their age group in their area?",
                answer: 0,
              },
              {
                text: "trains early in the morning?",
                answer: 1,
              },
              {
                text: "is worried about an upcoming event?",
                answer: 1,
              },
              {
                text: "uses special equipment to see small things?",
                answer: 2,
              },
              {
                text: "won a prize with a photo of an insect?",
                answer: 2,
              },
              {
                text: "does their hobby online?",
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
              title: "The library on a boat",
              paragraphs: [
                "In Norway, there's a library on a boat. It travels along the coast and visits small villages that don't have their own libraries.",
                "The boat is called Epos. It has more than 6,000 books on board. 'It's been sailing for more than fifty years,' says librarian Kari Hansen. 'Many people have grown up with it.'",
                "When the boat arrives in a village, children run to meet it. 'They're so excited,' says Kari. 'They choose books and we read stories to them. Sometimes we have singers or actors on board too.'",
                "The boat visits each village once or twice a year. 'People borrow lots of books,' explains Kari. 'They keep them until we come back. For some children, it's the only way to get new books.'",
              ],
            },
            items: [
              {
                question: "Why does the library boat exist?",
                options: [
                  "There are no roads in Norway.",
                  "It's a tourist attraction.",
                  "Some villages don't have libraries.",
                ],
                answer: 2,
              },
              {
                question: "How long has Epos been sailing?",
                options: [
                  "five years",
                  "ten years",
                  "over fifty years",
                ],
                answer: 2,
              },
              {
                question: "What happens when the boat arrives?",
                options: [
                  "Children come to meet it.",
                  "Villagers sell books.",
                  "The librarians go shopping.",
                ],
                answer: 0,
              },
              {
                question: "How often does the boat visit each village?",
                options: [
                  "every week",
                  "once or twice a year",
                  "every month",
                ],
                answer: 1,
              },
              {
                question: "What do we learn about some children?",
                options: [
                  "The boat is their only source of new books.",
                  "They don't like reading.",
                  "They have lots of books.",
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
            title: "Hot-air balloons",
            text: [
              "The first hot-air balloon flight with people on board {1} place in France in 1783. The balloon was made of paper and silk, and it flew for about twenty-five minutes.",
              "A hot-air balloon works because hot air is lighter than cold air. A burner {2} the air inside the balloon, and the balloon goes up. To come down, the pilot lets the air {3} cool.",
              "Pilots can't steer a balloon. It goes wherever the wind {4} it. But pilots can go higher or lower to find winds that are moving in different directions. Today, hot-air balloon flights are a popular {5} activity. People often fly early in the morning, when the wind is calm. The views from the balloon are {6}, especially over mountains or the sea.",
            ],
            gaps: [
              {
                options: [
                  "took",
                  "had",
                  "made",
                ],
                answer: 0,
              },
              {
                options: [
                  "burns",
                  "fires",
                  "heats",
                ],
                answer: 2,
              },
              {
                options: [
                  "go up",
                  "get",
                  "make up",
                ],
                answer: 1,
              },
              {
                options: [
                  "carries on",
                  "takes",
                  "brings up",
                ],
                answer: 1,
              },
              {
                options: [
                  "trip of",
                  "travel",
                  "holiday",
                ],
                answer: 2,
              },
              {
                options: [
                  "amazing",
                  "amazed",
                  "amazement",
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
              "Hi Lucy,",
              "I'm writing to say thank you {1} helping me move into my new flat. I couldn't have done it {2} you!",
              "I've unpacked most of my boxes now. My bedroom looks great. I've put my posters on the walls and my books on the shelves. The only problem is the kitchen. It's very small, {3} I can't fit everything in it.",
              "Would you like to come for dinner next week? I'll cook {4} you. How about Thursday? I'll make your favourite pasta. Let me know {5} you can come. Thanks again {6} everything!",
              "Love,",
              "Emma",
            ],
            answers: [
              [
                "for",
              ],
              [
                "without",
              ],
              [
                "so",
              ],
              [
                "for",
              ],
              [
                "if",
                "whether",
              ],
              [
                "for",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You visited a zoo last weekend. Write an email to your English friend, Sam. Write 25 words or more.",
            prompts: [
              "Say who you went with.",
              "Say which animals you saw.",
              "Say which animal you liked best.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sam' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sam,\n\nLast Saturday, I went to the zoo with my class. We saw lions, elephants, giraffes and monkeys. I liked the baby elephant best because it was playing in the water.\n\nBye,\nSelin",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🍕🏠",
                label: "1",
              },
              {
                e: "👨📞🍕⏰",
                label: "2",
              },
              {
                e: "👨🍕🚪😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One evening, Mr Brown was very hungry, so he ordered a pizza. He waited for an hour, but it didn't arrive. He called the restaurant, and they said the driver was lost. Mr Brown was getting angry. Finally, the doorbell rang. The driver apologised and gave him the pizza for free. Mr Brown was happy again.",
          },
        },
      ],
    },
  ],
};
