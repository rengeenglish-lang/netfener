import type { CambridgeTest } from "./types";

/** A2 Key practice test 99 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_99: CambridgeTest = {
  id: "key-99",
  level: "key",
  no: 99,
  title: "A2 Key · Practice Test 99",
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
                    "Year 9 students: your science trip is on Tuesday, not Monday.",
                  ],
                },
                question: "What has changed?",
                options: [
                  "the place of the trip",
                  "the time of the trip",
                  "the day of the trip",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Grace, I've finished my book. Do you want to borrow it? Emma",
                  ],
                },
                question: "What is Emma offering?",
                options: [
                  "to lend Grace a book",
                  "to buy Grace a book",
                  "to read Grace's book",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "PLEASE KEEP OFF THE GRASS",
                  ],
                },
                question: "What does the sign say?",
                options: [
                  "The grass is wet.",
                  "Don't walk on the grass.",
                  "You can play on the grass.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "My birthday party is on Saturday at 3. Please bring your swimming things! Dan",
                  ],
                },
                question: "What should Max bring?",
                options: [
                  "swimming things",
                  "a present",
                  "food",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "We accept cash and cards.",
                  ],
                },
                question: "How can you pay?",
                options: [
                  "only with cash",
                  "only with a card",
                  "with money or a card",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "GUITAR LESSONS",
                    "£15 per hour.",
                    "Learn rock, pop and jazz.",
                  ],
                },
                question: "What do we know about the lessons?",
                options: [
                  "They are free.",
                  "You can learn different styles.",
                  "They are only for rock music.",
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
                text: "I love swimming in the sea. I swim every morning, even in winter. The water is very cold, but I love it. Last year, I swam across a bay to raise money for a children's hospital. I raised £2,000!",
              },
              {
                title: "Ryan",
                text: "My hobby is collecting old video games. I've got more than two hundred games. Some of them are thirty years old! I buy them at markets and online. My favourite game is from the 1980s. It's very rare.",
              },
              {
                title: "Mia",
                text: "I'm a keen gardener. I have my own vegetable garden. I grow tomatoes, carrots and strawberries. Last summer, I sold my vegetables at the farmers' market and made £100. I want to study agriculture.",
              },
            ],
            items: [
              {
                text: "does their hobby in all seasons?",
                answer: 0,
              },
              {
                text: "raised money for charity?",
                answer: 0,
              },
              {
                text: "has something rare?",
                answer: 1,
              },
              {
                text: "buys things online?",
                answer: 1,
              },
              {
                text: "sold food?",
                answer: 2,
              },
              {
                text: "knows what they want to study?",
                answer: 2,
              },
              {
                text: "collects old things?",
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
              title: "A world record",
              paragraphs: [
                "Last year, students at a school in Brazil broke a world record. They made the world's biggest paper aeroplane! It had wings that were eighteen metres wide.",
                "'It took us six months to make,' says fourteen-year-old Pedro. 'We used special paper and lots of glue.'",
                "On the day of the record, hundreds of people came to watch. The students threw the plane from a high hill. 'It flew for about forty metres,' says Pedro. 'Everyone cheered!'",
                "The students were very proud. 'We learned a lot about science and working together,' says Pedro. 'Now we want to try to break another record!'",
              ],
            },
            items: [
              {
                question: "What did the students make?",
                options: [
                  "a paper boat",
                  "a real plane",
                  "a very big paper plane",
                ],
                answer: 2,
              },
              {
                question: "How long did it take?",
                options: [
                  "six days",
                  "six years",
                  "six months",
                ],
                answer: 2,
              },
              {
                question: "Where did they throw the plane from?",
                options: [
                  "a hill",
                  "a building",
                  "a bridge",
                ],
                answer: 0,
              },
              {
                question: "How far did the plane fly?",
                options: [
                  "about four metres",
                  "about forty metres",
                  "about four hundred metres",
                ],
                answer: 1,
              },
              {
                question: "What do the students want to do next?",
                options: [
                  "break another record",
                  "build a real plane",
                  "sell the plane",
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
            title: "Polar bears",
            text: [
              "Polar bears live in the Arctic, near the North Pole. They are the largest land {1} in the world.",
              "Polar bears have thick white fur. This helps them to stay warm and to {2} in the snow. Under their fur, their skin is black!",
              "Polar bears are excellent swimmers. They can swim for many hours without stopping. They mostly eat seals, which they catch on the ice. Polar bears can smell seals from more than a kilometre away. Sadly, polar bears are in danger. The ice in the Arctic is {3} because of climate change. Without ice, polar bears can't {4} seals. Some polar bears have to swim very long distances to find food, and many become very {5}. Scientists say we must {6} climate change to save polar bears.",
            ],
            gaps: [
              {
                options: [
                  "meat-eaters",
                  "plants",
                  "fish",
                ],
                answer: 0,
              },
              {
                options: [
                  "cover up",
                  "keep",
                  "hide",
                ],
                answer: 2,
              },
              {
                options: [
                  "burning",
                  "melting",
                  "breaking up",
                ],
                answer: 1,
              },
              {
                options: [
                  "hold up",
                  "catch",
                  "take up",
                ],
                answer: 1,
              },
              {
                options: [
                  "hunger",
                  "hungrily",
                  "hungry",
                ],
                answer: 2,
              },
              {
                options: [
                  "stop",
                  "end up",
                  "finish up",
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
              "Hi Hannah,",
              "I've got some exciting news! I've been chosen {1} the school basketball team. I'm so happy!",
              "We train every Tuesday and Thursday after school. Our first match is {2} two weeks. It's against a school from another town. I'm a bit nervous, but I'll do my best.",
              "Would you like {3} come and watch? The match is on Saturday at eleven o'clock. My parents are coming too, {4} you can come with them in the car. Let me know {5} you want to come. It would be great {6} see you there!",
              "Love,",
              "Isla",
            ],
            answers: [
              [
                "for",
              ],
              [
                "in",
              ],
              [
                "to",
              ],
              [
                "so",
              ],
              [
                "if",
                "whether",
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
            instruction: "You are going to help in your school garden. Write an email to your English friend, Kim. Write 25 words or more.",
            prompts: [
              "Say when you will help.",
              "Say what you will do.",
              "Ask Kim to join you.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Kim' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Kim,\n\nOn Saturday morning, I'm going to help in my school garden. We are going to plant flowers and vegetables. Would you like to come and help too?\n\nBye,\nAsya",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👦🔭🌙",
                label: "1",
              },
              {
                e: "👦🔭⭐😮",
                label: "2",
              },
              {
                e: "👦📸⭐👨‍🏫😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "One night, Sam was looking at the sky through his new telescope. Suddenly, he saw a very bright light moving slowly across the sky. He took a photo of it. The next day, he showed the photo to his science teacher. She said it was a comet! She was very impressed and asked Sam to talk about it in front of the class.",
          },
        },
      ],
    },
  ],
};
