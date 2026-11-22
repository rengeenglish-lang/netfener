import type { CambridgeTest } from "./types";

/** A2 Key practice test 48 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_48: CambridgeTest = {
  id: "key-48",
  level: "key",
  no: 48,
  title: "A2 Key · Practice Test 48",
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
                    "Year 7 students: please bring a coat for the walk to the park on Friday.",
                  ],
                },
                question: "What should Year 7 students do?",
                options: [
                  "stay at school on Friday",
                  "bring something warm",
                  "bring a packed lunch",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Max, the concert starts at 8, not 7.30. Let's meet at the café at 7. Dan",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the time of the concert",
                  "the place of the concert",
                  "the day of the concert",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "MUSEUM",
                    "Please do not use your phone in the galleries.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "Phones are sold in the museum.",
                  "You can make calls in the galleries.",
                  "Phones should not be used in some parts of the museum.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Please can you bring your science book to school tomorrow? I left mine at home and I need to check something. Ruby",
                  ],
                },
                question: "Why has Ruby written this email?",
                options: [
                  "She wants to give Ella a book.",
                  "She has lost Ella's book.",
                  "She needs to look at Ella's book.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "BEACH",
                    "Dogs are not allowed on the beach between May and September.",
                  ],
                },
                question: "When can you take your dog to the beach?",
                options: [
                  "in winter",
                  "in summer",
                  "never",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "NEW RESTAURANT",
                    "Opening Friday. 20% off all meals this weekend!",
                  ],
                },
                question: "What does the advertisement say?",
                options: [
                  "The restaurant is closing.",
                  "Meals are cheaper for a short time.",
                  "Meals are free on Friday.",
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
                title: "Freya",
                text: "I'm a keen gardener. I have a vegetable patch at the bottom of our garden. I grow carrots, potatoes and peas. Last year, I won a prize at the village show for the biggest pumpkin! I learned everything from my grandmother, who has been gardening for sixty years.",
              },
              {
                title: "Kai",
                text: "My hobby is surfing. I live near the beach, so I go surfing after school almost every day. In winter, the water is freezing, but I wear a thick wetsuit. I've been surfing for five years. Next year, I want to enter my first competition.",
              },
              {
                title: "Zara",
                text: "I love art. I paint pictures of animals and sell them online. People from all over the world have bought my paintings! I'm saving the money for art college. I also teach a painting class for younger children at the community centre on Saturdays.",
              },
            ],
            items: [
              {
                text: "learned from a grandparent?",
                answer: 0,
              },
              {
                text: "won a prize for something they grew?",
                answer: 0,
              },
              {
                text: "does their hobby in cold conditions?",
                answer: 1,
              },
              {
                text: "hasn't entered a competition yet?",
                answer: 1,
              },
              {
                text: "sells their work to people abroad?",
                answer: 2,
              },
              {
                text: "teaches others?",
                answer: 2,
              },
              {
                text: "is saving for their studies?",
                answer: 2,
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
              title: "Running a café",
              paragraphs: [
                "Sixteen-year-old Leo and his friends run a café at their school every Friday. They sell drinks, cakes and sandwiches to students and teachers.",
                "'We started it last year as a business project,' explains Leo. 'We had to plan everything: what to sell, how much to charge and how to advertise.'",
                "The café has been a big success. 'We sell about two hundred cakes every week,' says Leo. 'My friend Mia makes most of them. She's an amazing baker.'",
                "The students give some of the money to a local charity and use the rest to buy things for the school. 'Last term, we bought new books for the library,' says Leo. 'Running the café has taught me a lot about business. I want to start my own company one day.'",
              ],
            },
            items: [
              {
                question: "When is the café open?",
                options: [
                  "once a week",
                  "every day",
                  "at weekends",
                ],
                answer: 0,
              },
              {
                question: "Why did the students start the café?",
                options: [
                  "to earn pocket money",
                  "for a school project",
                  "because the teachers asked",
                ],
                answer: 1,
              },
              {
                question: "Who makes most of the cakes?",
                options: [
                  "Mia",
                  "Leo",
                  "the teachers",
                ],
                answer: 0,
              },
              {
                question: "What do the students do with the money?",
                options: [
                  "They keep it.",
                  "They buy more cakes.",
                  "They give it to charity and the school.",
                ],
                answer: 2,
              },
              {
                question: "What has Leo learned?",
                options: [
                  "how to bake",
                  "how to be a teacher",
                  "about running a business",
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
            title: "Bees",
            text: [
              "Bees are very important insects. They help plants to grow by carrying pollen from one flower to {1}. Without bees, many fruits and vegetables could not grow.",
              "There are about 20,000 different kinds of bee. The most famous is the honey bee. Honey bees live in large groups, sometimes with more than 50,000 bees in one {2}.",
              "Each hive has one queen. Her job is to {3} eggs. The other bees are workers. They collect food, clean the hive and look after the young bees. Sadly, the number of bees in the world is {4}. This is because of pesticides, illness and the loss of wild flowers. You can help bees by {5} flowers in your garden or on your balcony. Bees especially like purple and blue flowers. Every small {6} helps!",
            ],
            gaps: [
              {
                options: [
                  "other",
                  "others",
                  "another",
                ],
                answer: 2,
              },
              {
                options: [
                  "hive",
                  "nest",
                  "room",
                ],
                answer: 0,
              },
              {
                options: [
                  "put",
                  "lay",
                  "drop",
                ],
                answer: 1,
              },
              {
                options: [
                  "falling",
                  "going",
                  "losing",
                ],
                answer: 0,
              },
              {
                options: [
                  "putting",
                  "building",
                  "planting",
                ],
                answer: 2,
              },
              {
                options: [
                  "act",
                  "action",
                  "make",
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
              "Hi Josh,",
              "Thanks for your message. I'm sorry I can't come to football practice {1} Thursday. I've got a dentist appointment.",
              "Could you tell the coach {2} me? I don't have his phone number. I'll definitely be there next week.",
              "Are we still going to the cinema {3} the weekend? I really want to see the new superhero film. It's had great reviews. We could go {4} Saturday afternoon. My mum can drive us. Let me know what time is good {5} you. See you {6} school tomorrow!",
              "Ben",
            ],
            answers: [
              [
                "on",
                "this",
              ],
              [
                "for",
              ],
              [
                "at",
                "this",
              ],
              [
                "on",
              ],
              [
                "for",
              ],
              [
                "at",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to invite your English friend, Pat, to your house. Write an email to Pat. Write 25 words or more.",
            prompts: [
              "Say when Pat can come.",
              "Say what you can do together.",
              "Say how Pat can get to your house.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Pat' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Pat,\n\nWould you like to come to my house next Saturday? We can play video games, watch a film and make pizza. You can take the number 12 bus from the station. It stops right outside my house.\n\nBye,\nDefne",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎨🖌️",
                label: "1",
              },
              {
                e: "👦🖼️💧😮",
                label: "2",
              },
              {
                e: "👦🖼️✨😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last week, Sam painted a picture of the sea for his art class. When he finished, he went to get a drink. While he was away, his little sister spilled water on the painting! Sam was upset at first. But when he looked again, the colours had mixed together and the painting looked even more beautiful. His teacher loved it.",
          },
        },
      ],
    },
  ],
};
