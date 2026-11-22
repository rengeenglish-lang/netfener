import type { CambridgeTest } from "./types";

/** A2 Key practice test 21 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_21: CambridgeTest = {
  id: "key-21",
  level: "key",
  no: 21,
  title: "A2 Key · Practice Test 21",
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
                    "ART ROOM",
                    "Wash your brushes before you leave.",
                    "Thank you!",
                  ],
                },
                question: "What should students do?",
                options: [
                  "bring their own brushes",
                  "clean their brushes",
                  "leave the brushes on the table",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Lisa, I've got a spare ticket for the theatre tonight. Would you like to come? It starts at 7.30. Kate",
                  ],
                },
                question: "Why has Kate sent this message?",
                options: [
                  "to ask Lisa for a ticket",
                  "to tell Lisa the show is cancelled",
                  "to invite Lisa to a show",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "FARM SHOP",
                    "Fresh eggs – help yourself and leave the money in the box.",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "You pay without a shop assistant.",
                  "The eggs are free.",
                  "Ask the farmer for eggs.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jim,",
                    "I'm going to be away next week, so I can't come to the football training. Can you tell the coach? Thanks, Leo",
                  ],
                },
                question: "What does Leo want Jim to do?",
                options: [
                  "go to training for him",
                  "give a message to the coach",
                  "go away with him",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SCHOOL",
                    "Year 9 students: your exam results will be available on Friday from the office.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can get their results at the end of the week.",
                  "Exams start on Friday.",
                  "The office is closed on Friday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "FOR SALE",
                    "Child's bicycle, suitable for ages 6–9.",
                    "Hardly used. £25.",
                  ],
                },
                question: "What do we know about the bicycle?",
                options: [
                  "It is for adults.",
                  "It costs more than £30.",
                  "It is almost like new.",
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
                title: "Thomas",
                text: "I love astronomy. I've got a telescope in my bedroom, and on clear nights I look at the stars and planets. I've seen Saturn's rings and the moons of Jupiter! I belong to an astronomy club, and we sometimes go to the countryside where the sky is darker.",
              },
              {
                title: "Erin",
                text: "I'm a dancer. I do ballet and modern dance. I have classes five evenings a week, and I'm often very tired. But it's worth it. Last year, I got a place at a famous dance school in London for a summer course. I want to dance professionally.",
              },
              {
                title: "Sami",
                text: "I enjoy cooking for my friends. Every month, I invite four or five of them to my house and cook a meal from a different country. Last time, I made Mexican food. I find recipes online and buy unusual ingredients at the market. My friends always want to come back!",
              },
            ],
            items: [
              {
                text: "does their hobby only when the weather is good?",
                answer: 0,
              },
              {
                text: "travels away from towns for their hobby?",
                answer: 0,
              },
              {
                text: "often feels tired?",
                answer: 1,
              },
              {
                text: "was chosen for a special course?",
                answer: 1,
              },
              {
                text: "tries food from other countries?",
                answer: 2,
              },
              {
                text: "buys things for their hobby?",
                answer: 2,
              },
              {
                text: "has a clear plan for a career?",
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
              title: "A long walk",
              paragraphs: [
                "Last summer, fifteen-year-old Ellie Walsh and her father walked across England from coast to coast. The walk was 300 kilometres long and took them fourteen days.",
                "'My dad has always wanted to do this walk,' says Ellie. 'When he asked me to come, I said yes immediately. I thought it would be an adventure.'",
                "But it wasn't always easy. 'On the third day, it rained all day and my feet hurt,' she remembers. 'I wanted to give up. But my dad told me jokes and we kept going.'",
                "The best part was the scenery. 'We walked through mountains, valleys and small villages,' she says. 'Every evening, we stayed in a different place. I learned that I'm stronger than I thought.' Now Ellie wants to walk across Scotland.",
              ],
            },
            items: [
              {
                question: "How long did the walk take?",
                options: [
                  "three days",
                  "two weeks",
                  "three hundred days",
                ],
                answer: 1,
              },
              {
                question: "Why did Ellie go on the walk?",
                options: [
                  "Her school organised it.",
                  "She thought it would be exciting.",
                  "She wanted to get fit.",
                ],
                answer: 1,
              },
              {
                question: "What happened on the third day?",
                options: [
                  "Ellie hurt her father.",
                  "They got lost.",
                  "Ellie felt like stopping.",
                ],
                answer: 2,
              },
              {
                question: "How did Ellie's father help?",
                options: [
                  "He made her laugh.",
                  "He carried her bag.",
                  "He gave her new shoes.",
                ],
                answer: 0,
              },
              {
                question: "What did Ellie learn about herself?",
                options: [
                  "She doesn't like walking.",
                  "She is stronger than she believed.",
                  "She prefers big cities.",
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
            title: "Pizza",
            text: [
              "Pizza is one of the most popular foods in the world. It first {1} in Naples, in Italy, more than 200 years ago. At first, it was a cheap food for poor people.",
              "In 1889, a cook made a special pizza for the Queen of Italy. It had tomatoes, cheese and basil, the colours of the Italian {2}. This pizza is now called the Margherita, after the queen.",
              "When Italian people moved to the USA, they {3} pizza with them. It quickly became very popular there. Today, people eat pizza with many different {4}, from mushrooms to pineapple. In Japan, some people even {5} squid on their pizza! The world's {6} pizza was made in Rome in 2012. It was more than 1,200 square metres!",
            ],
            gaps: [
              {
                options: [
                  "showed",
                  "appeared",
                  "arrived",
                ],
                answer: 1,
              },
              {
                options: [
                  "flag",
                  "sign",
                  "picture",
                ],
                answer: 0,
              },
              {
                options: [
                  "carried",
                  "sent",
                  "took",
                ],
                answer: 2,
              },
              {
                options: [
                  "tops",
                  "covers",
                  "toppings",
                ],
                answer: 2,
              },
              {
                options: [
                  "put",
                  "add",
                  "place",
                ],
                answer: 0,
              },
              {
                options: [
                  "longest",
                  "biggest",
                  "tallest",
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
              "Hi Oscar,",
              "I'm writing to tell you some good news. I've {1} chosen for the school basketball team! I'm so happy. I've been practising really hard {2} months.",
              "Our first match is next Saturday {3} 10 o'clock. It's against a school from the next town. They're very good, so I'm a bit nervous.",
              "Would you like {4} come and watch? My parents are coming, so you could come {5} them in the car. It would be great to see you there! Let me know {6} Thursday.",
              "Bye,",
              "Dan",
            ],
            answers: [
              [
                "been",
              ],
              [
                "for",
              ],
              [
                "at",
              ],
              [
                "to",
              ],
              [
                "with",
              ],
              [
                "by",
                "before",
                "on",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "Your English friend, Sasha, is coming to your town. Write an email to Sasha. Write 25 words or more.",
            prompts: [
              "Suggest a place to visit.",
              "Say why Sasha will like it.",
              "Say how you will get there.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Sasha' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Sasha,\n\nWhen you come, let's visit the old castle on the hill. You will like it because it's very old and there's a great view of the sea from the top. We can go there by bus from my house.\n\nSee you soon,\nZeynep",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🎒🏕️",
                label: "1",
              },
              {
                e: "⛺🌧️💨😟",
                label: "2",
              },
              {
                e: "👦☀️🌈⛺😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last weekend, Ben went camping with his friends in the forest. In the night, there was a terrible storm. It rained a lot and the wind was very strong. The boys were frightened that the tent would blow away. In the morning, the storm stopped and the sun came out. There was a beautiful rainbow in the sky. The boys laughed and had breakfast together.",
          },
        },
      ],
    },
  ],
};
