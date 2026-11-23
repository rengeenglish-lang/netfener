import type { CambridgeTest } from "./types";

/** A2 Key practice test 90 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_90: CambridgeTest = {
  id: "key-90",
  level: "key",
  no: 90,
  title: "A2 Key · Practice Test 90",
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
                    "Year 10 students: please collect your exam timetable from the office.",
                  ],
                },
                question: "What should Year 10 students do?",
                options: [
                  "get their timetable",
                  "take an exam",
                  "go home early",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Jo, I'm at the bookshop. Do you want me to buy the book for our English class? Kim",
                  ],
                },
                question: "What is Kim asking?",
                options: [
                  "where the bookshop is",
                  "what time the class is",
                  "if she should buy a book for Jo",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "DANGER",
                    "Electricity. Keep out.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You can go in.",
                  "Don't go in because it's dangerous.",
                  "There's no electricity.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ben,",
                    "Remember to bring your passport tomorrow. We need it for the trip. Mr Hill",
                  ],
                },
                question: "What should Ben bring?",
                options: [
                  "money",
                  "his passport",
                  "his phone",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The playground is closed for repairs until Friday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The playground is closed forever.",
                  "The playground is new.",
                  "The playground will open again on Friday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "DOG WALKER",
                    "I'll walk your dog when you're at work.",
                    "Reliable and friendly. Call Lisa.",
                  ],
                },
                question: "What does Lisa offer?",
                options: [
                  "to walk dogs",
                  "to sell dogs",
                  "to train dogs",
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
                title: "Lucy",
                text: "I love skiing. My family goes skiing every winter. Last year, I started racing and won my first competition. I train on a dry slope near my home in summer. I'd love to ski in the Winter Olympics one day.",
              },
              {
                title: "Tom",
                text: "My hobby is cooking. I cook dinner for my family three times a week. I love trying new recipes. Last month, I made a Japanese meal for my parents' anniversary. They said it was delicious! I want to be a chef.",
              },
              {
                title: "Grace",
                text: "I'm interested in animals. I volunteer at a zoo every Saturday. I help feed the animals and clean their homes. My favourite animals are the penguins. When I'm older, I want to be a zookeeper.",
              },
            ],
            items: [
              {
                text: "trains in a different place in summer?",
                answer: 0,
              },
              {
                text: "dreams of a big international event?",
                answer: 0,
              },
              {
                text: "cooks for family?",
                answer: 1,
              },
              {
                text: "made food from another country?",
                answer: 1,
              },
              {
                text: "helps at a zoo?",
                answer: 2,
              },
              {
                text: "has a favourite animal?",
                answer: 2,
              },
              {
                text: "wants to be a chef?",
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
              title: "A long swim",
              paragraphs: [
                "Last summer, seventeen-year-old Emily swam across the English Channel from England to France. It's about thirty-four kilometres.",
                "'I've always loved swimming,' says Emily. 'I wanted to do something really difficult. So I decided to swim the Channel.'",
                "Emily trained for two years. 'I swam in the sea every day, even in winter,' she says. 'The water was very cold, but I needed to get used to it.'",
                "The swim took Emily thirteen hours. 'It was very hard,' she says. 'I was so tired. But my family was on a boat next to me. They cheered me on. When I reached France, I cried!' Emily raised £5,000 for a children's charity.",
              ],
            },
            items: [
              {
                question: "How far is the swim across the Channel?",
                options: [
                  "about three kilometres",
                  "about thirty-four kilometres",
                  "about a hundred kilometres",
                ],
                answer: 1,
              },
              {
                question: "Why did Emily decide to swim the Channel?",
                options: [
                  "She wanted a challenge.",
                  "Her coach told her.",
                  "She wanted to visit France.",
                ],
                answer: 0,
              },
              {
                question: "Why did Emily swim in the sea in winter?",
                options: [
                  "to win a race",
                  "because the pool was closed",
                  "to get used to cold water",
                ],
                answer: 2,
              },
              {
                question: "Who was with Emily during the swim?",
                options: [
                  "her coach",
                  "her family",
                  "nobody",
                ],
                answer: 1,
              },
              {
                question: "What did Emily do with the money she raised?",
                options: [
                  "bought a boat",
                  "gave it to a charity",
                  "kept it",
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
            title: "Owls",
            text: [
              "Owls are birds that usually hunt at night. They have large eyes that help them see in the {1}.",
              "Owls can turn their heads almost all the way around. This is because they can't move their eyes. They have to turn their heads to {2} around.",
              "Owls have very good hearing. They can hear a mouse moving under the snow! Their feathers are very soft, so they can fly {3} making any noise. There are about 200 kinds of owl in the world. The smallest owl is about the {4} of a sparrow. The biggest owl has wings that are almost two metres wide. In many stories, owls are wise and clever. But scientists say owls are not {5} cleverer than other birds. Sadly, some owls are in danger because people are cutting down the trees where they {6}.",
            ],
            gaps: [
              {
                options: [
                  "black",
                  "dark",
                  "night up",
                ],
                answer: 1,
              },
              {
                options: [
                  "see up",
                  "watch up",
                  "look",
                ],
                answer: 2,
              },
              {
                options: [
                  "without",
                  "except",
                  "with",
                ],
                answer: 0,
              },
              {
                options: [
                  "big",
                  "size",
                  "large",
                ],
                answer: 1,
              },
              {
                options: [
                  "really",
                  "real",
                  "reality",
                ],
                answer: 0,
              },
              {
                options: [
                  "stay up",
                  "sit",
                  "live",
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
              "I'm writing to say thank you {1} the lovely present you sent me. I love the scarf! It's so warm and soft.",
              "My birthday was great. My parents took me {2} a restaurant for dinner. I had pasta and a big chocolate ice cream. Then we went to the cinema.",
              "I'm sorry you couldn't come. I hope you're feeling better {3}. When can we meet? Maybe we could go ice skating next weekend. There's a new ice rink {4} town. Let me know {5} you think. Thanks again, and see you {6}!",
              "Love,",
              "Mia",
            ],
            answers: [
              [
                "for",
              ],
              [
                "to",
              ],
              [
                "now",
              ],
              [
                "in",
              ],
              [
                "what",
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
            instruction: "You helped at a school event. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say what the event was.",
              "Say what you did.",
              "Say how you felt.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nLast Saturday, I helped at my school's summer fair. I sold cakes and drinks and helped with the games. I felt really happy because we raised lots of money for the school.\n\nBye,\nEge",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🚗❄️",
                label: "1",
              },
              {
                e: "🚗❄️🛑😟",
                label: "2",
              },
              {
                e: "👨👨‍🌾🚜🚗😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One winter morning, Mr Brown was driving to work. It had snowed a lot, and his car got stuck in the snow. He couldn't move it. He waited for a long time and felt very cold. Then a farmer came along in his tractor. He pulled Mr Brown's car out of the snow. Mr Brown thanked him and drove slowly to work.",
          },
        },
      ],
    },
  ],
};
