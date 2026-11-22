import type { CambridgeTest } from "./types";

/** A2 Key practice test 64 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_64: CambridgeTest = {
  id: "key-64",
  level: "key",
  no: 64,
  title: "A2 Key · Practice Test 64",
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
                    "The art room is open at lunchtime for students who want to finish their projects.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The art room is closed.",
                  "Students can work on art projects at lunch.",
                  "Art lessons are at lunchtime.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Kate, I left my umbrella at your house. Can you bring it to school tomorrow? Jo",
                  ],
                },
                question: "What does Jo want?",
                options: [
                  "Kate to buy an umbrella",
                  "Kate to return something",
                  "to borrow Kate's umbrella",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "CAMPSITE",
                    "Check-in after 2 p.m.",
                    "Check-out before 11 a.m.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can arrive at any time.",
                  "You must leave after 2 p.m.",
                  "You must leave before 11 in the morning.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "Mum says you can stay for dinner after the match on Saturday. She's making lasagne! Dan",
                  ],
                },
                question: "What is Dan doing?",
                options: [
                  "inviting Tom for a meal",
                  "asking Tom to cook",
                  "telling Tom about a match result",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "LIBRARY",
                    "New: you can now borrow e-books from our website.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closing.",
                  "You can borrow books online.",
                  "You must buy e-books.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "BICYCLE REPAIR CLASS",
                    "Learn to fix your own bike!",
                    "Tuesday evenings. Bring your bike.",
                  ],
                },
                question: "What should you take to the class?",
                options: [
                  "your bicycle",
                  "tools",
                  "money",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Rosie",
                text: "I love horses. I've had riding lessons for five years. Last summer, I worked at a horse farm in the countryside for two weeks. I helped look after the horses and taught younger children to ride. It was hard work, but I loved every minute.",
              },
              {
                title: "Tom",
                text: "My hobby is making videos about history. I visit castles and museums and film them. Then I explain the history in my videos. I've got about three thousand subscribers. My history teacher shows my videos to her classes.",
              },
              {
                title: "Mia",
                text: "I'm a keen swimmer. I swim for my school and for a club. My best event is the butterfly. Last year, I broke the club record for the 100 metres. I train six days a week. It doesn't leave much time for other things, but I don't mind.",
              },
            ],
            items: [
              {
                text: "worked during the holidays?",
                answer: 0,
              },
              {
                text: "taught children?",
                answer: 0,
              },
              {
                text: "has a large online audience?",
                answer: 1,
              },
              {
                text: "has their work used in lessons?",
                answer: 1,
              },
              {
                text: "set a new record?",
                answer: 2,
              },
              {
                text: "trains almost every day?",
                answer: 2,
              },
              {
                text: "visits historical places?",
                answer: 1,
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
              title: "The young farmer",
              paragraphs: [
                "Sixteen-year-old Owen lives on a sheep farm in Wales with his parents. 'I've always wanted to be a farmer,' he says. 'I love being outside with the animals.'",
                "Owen gets up at five every morning to help his father. 'We check the sheep and give them food,' he explains. 'Then I have breakfast and go to school.'",
                "Spring is the busiest time on the farm. 'That's when the lambs are born,' says Owen. 'Sometimes we work all night. It's tiring, but it's amazing to see new lambs.'",
                "Owen goes to an agricultural college one day a week. 'I'm learning about new farming methods,' he says. 'Farming is changing. We need to look after the environment and use less energy. I want to make our farm more modern.'",
              ],
            },
            items: [
              {
                question: "Why does Owen want to be a farmer?",
                options: [
                  "His parents told him to.",
                  "He wants to earn money.",
                  "He enjoys outdoor work with animals.",
                ],
                answer: 2,
              },
              {
                question: "What does Owen do before school?",
                options: [
                  "goes running",
                  "helps with the sheep",
                  "does his homework",
                ],
                answer: 1,
              },
              {
                question: "Why is spring busy?",
                options: [
                  "It rains a lot.",
                  "Baby sheep are born.",
                  "There is a lot of harvesting.",
                ],
                answer: 1,
              },
              {
                question: "How often does Owen go to college?",
                options: [
                  "every day",
                  "once a month",
                  "once a week",
                ],
                answer: 2,
              },
              {
                question: "What does Owen want to do?",
                options: [
                  "modernise the farm",
                  "sell the farm",
                  "move to a city",
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
            title: "Sharks",
            text: [
              "Sharks have lived in the oceans for more than 400 million years. That's {1} than dinosaurs!",
              "There are more than 500 kinds of shark. The whale shark is the biggest fish in the world. It can be up to eighteen metres long. {2}, it only eats tiny animals and plants.",
              "Sharks have very good senses. They can smell blood from a long way away and can {3} movements in the water. Many people are afraid of sharks, but shark attacks are very rare. In fact, you are more likely to be hit {4} lightning than attacked by a shark! Sadly, people kill millions of sharks every year. Some kinds of shark are now in danger of {5}. Many scientists are working to protect sharks because they are very {6} for the health of the oceans.",
            ],
            gaps: [
              {
                options: [
                  "longer",
                  "more long",
                  "long",
                ],
                answer: 0,
              },
              {
                options: [
                  "Although",
                  "However",
                  "Because",
                ],
                answer: 1,
              },
              {
                options: [
                  "feel",
                  "touch up",
                  "hold",
                ],
                answer: 0,
              },
              {
                options: [
                  "with",
                  "from",
                  "by",
                ],
                answer: 2,
              },
              {
                options: [
                  "losing",
                  "finishing",
                  "disappearing",
                ],
                answer: 2,
              },
              {
                options: [
                  "important",
                  "importance",
                  "importantly",
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
              "Hi Isla,",
              "I hope you are well. I'm writing to tell you about my new job. I've started working {1} a café near my house on Saturdays.",
              "I make coffee and serve cakes. It's quite busy, especially {2} lunchtime. My boss is really nice, and the other staff are friendly too.",
              "I'm saving my money for a trip to Paris next summer. I've always wanted to go {3}! Have you ever been? If you have, can you tell me {4} places I should visit? I want to see the Eiffel Tower, of course. Write back {5} you have time. Speak {6} soon!",
              "Love,",
              "Freya",
            ],
            answers: [
              [
                "at",
                "in",
              ],
              [
                "at",
              ],
              [
                "there",
              ],
              [
                "which",
                "what",
                "some",
                "the",
              ],
              [
                "when",
                "if",
              ],
              [
                "to",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You are going to a music festival. Write an email to your English friend, Robin. Write 25 words or more.",
            prompts: [
              "Say where the festival is.",
              "Say which bands are playing.",
              "Say how you will get there.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Robin' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Robin,\n\nNext month, I'm going to a music festival in a big park outside the city. My favourite rock band and some pop singers are playing. We are going to take the train there with my brother.\n\nBye,\nKerem",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦⚽🌳",
                label: "1",
              },
              {
                e: "⚽🌳⬆️😮",
                label: "2",
              },
              {
                e: "👦👴🪜⚽😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One afternoon, Sam was playing football in the park. He kicked the ball very high, and it got stuck in a tree. Sam tried to get it down, but the tree was too tall. An old man who was walking his dog saw this. He went home and came back with a ladder. He climbed up and got the ball for Sam. Sam thanked him very much.",
          },
        },
      ],
    },
  ],
};
