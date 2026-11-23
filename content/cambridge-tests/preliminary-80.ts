import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 80 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_80: CambridgeTest = {
  id: "preliminary-80",
  level: "preliminary",
  no: 80,
  title: "B1 Preliminary · Practice Test 80",
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
                    "SCHOOL",
                    "The school library will be closed on Monday for a staff meeting.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't use the library on Monday.",
                  "The library is open on Monday.",
                  "There's no school on Monday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, I've got two tickets for the football match on Saturday. Do you want to come? Sam",
                  ],
                },
                question: "What is Sam offering?",
                options: [
                  "a lift",
                  "a ticket to a match",
                  "a football",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains alcohol. Not for children.",
                  ],
                },
                question: "Who shouldn't use this?",
                options: [
                  "children",
                  "adults",
                  "everyone",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I'm sorry I can't come to your party. My grandparents are visiting that weekend. Emma",
                  ],
                },
                question: "Why can't Emma go to the party?",
                options: [
                  "She is ill.",
                  "She is on holiday.",
                  "Her grandparents are visiting.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SUPERMARKET",
                    "Fresh bread baked every morning.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Bread is free.",
                  "The bread is made every day.",
                  "There's no bread.",
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
            instruction: "The young people below all want to choose a TV series. Read the descriptions of eight series. Decide which series would be the most suitable for each person.",
            options: [
              {
                title: "Medical Drama",
                text: "Doctors save lives in a busy hospital.",
              },
              {
                title: "Cooking Contest",
                text: "Amateur chefs compete.",
              },
              {
                title: "Wildlife Show",
                text: "Animals in their natural habitats.",
              },
              {
                title: "Comedy Show",
                text: "A funny show about a family.",
              },
              {
                title: "Crime Drama",
                text: "Detectives solve crimes.",
              },
              {
                title: "Talent Show",
                text: "People sing and dance to win prizes.",
              },
              {
                title: "History Series",
                text: "The lives of kings and queens.",
              },
              {
                title: "Space Series",
                text: "Astronauts explore distant planets.",
              },
            ],
            items: [
              {
                text: "Elif wants to be a doctor.",
                answer: 0,
              },
              {
                text: "Can loves animals.",
                answer: 2,
              },
              {
                text: "Zeynep loves solving mysteries.",
                answer: 4,
              },
              {
                text: "Mert wants to laugh.",
                answer: 3,
              },
              {
                text: "Asya loves singing and dancing.",
                answer: 5,
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
              title: "My first trip to the mountains",
              paragraphs: [
                "Last winter, my family went on a skiing holiday in the mountains. It was my first time skiing, and I was very nervous.",
                "On the first day, I took a lesson with an instructor. I fell over many times, and I was very cold. I wanted to give up and go back to the hotel.",
                "But my instructor was very patient. She told me that everyone falls at the beginning. She showed me how to stand on my skis and how to stop. By the end of the day, I could ski down a small slope.",
                "By the end of the week, I could ski down the easy slopes without falling. I was very proud of myself. On the last day, I skied with my parents. It was amazing! I can't wait to go skiing again next winter.",
              ],
            },
            items: [
              {
                question: "How did the writer feel before skiing?",
                options: [
                  "nervous",
                  "excited",
                  "bored",
                  "confident",
                ],
                answer: 0,
              },
              {
                question: "What happened on the first day?",
                options: [
                  "She skied perfectly.",
                  "She didn't ski.",
                  "She fell over many times.",
                  "She hurt her leg.",
                ],
                answer: 2,
              },
              {
                question: "What did the instructor tell her?",
                options: [
                  "She should give up.",
                  "She was a natural skier.",
                  "Everyone falls at the beginning.",
                  "She needed better skis.",
                ],
                answer: 2,
              },
              {
                question: "What could the writer do by the end of the week?",
                options: [
                  "ski down easy slopes",
                  "ski down difficult slopes",
                  "teach skiing",
                  "snowboard",
                ],
                answer: 0,
              },
              {
                question: "How does the writer feel about skiing now?",
                options: [
                  "She doesn't like it.",
                  "She's afraid of it.",
                  "She's bored of it.",
                  "She wants to do it again.",
                ],
                answer: 3,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "A school in the forest",
            text: [
              "In Denmark, there are schools where children spend most of the day outside. {1} They're called forest schools.",
              "Children at forest schools learn in the woods, whatever the weather. {2} They climb trees, build shelters and learn about nature.",
              "The teachers believe that learning outside is good for children. {3} Children who go to forest schools are often healthier and more confident.",
              "Forest schools also teach children important skills. {4} They learn to work together and solve problems.",
              "The idea has spread to many other countries. {5} Many parents believe it's the best way for children to learn.",
            ],
            sentences: [
              "Children stay inside all day.",
              "They're becoming very popular.",
              "For example, they learn how to make fires safely.",
              "Nobody likes forest schools.",
              "Even when it's raining or snowing, they go outside.",
              "Forest schools are very dangerous.",
              "Research supports this idea.",
              "There are now forest schools in the UK, Germany and the USA.",
            ],
            answers: [
              1,
              4,
              6,
              2,
              7,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Snow",
            text: [
              "Snow is made of tiny ice crystals that form in clouds when the temperature is very {1}.",
              "Every snowflake has six sides, but no two snowflakes are exactly the same. Scientists have studied snowflakes for hundreds of years, and they're still {2} by their beautiful shapes.",
              "Snow is important for the environment. It {3} the ground and protects plants from very cold temperatures. When snow melts in spring, it provides water for rivers and lakes. Many people enjoy playing in the snow. They build snowmen, have snowball fights and go sledging. Snow is also important for winter sports like skiing and snowboarding. However, too much snow can be {4}. It can block roads and cause accidents. In some places, heavy snow can cause avalanches. Because of climate change, there is {5} snow in many places than there used to be. This is a problem for ski resorts and for the {6}.",
            ],
            gaps: [
              {
                options: [
                  "lower",
                  "low",
                  "lowest",
                  "lowly",
                ],
                answer: 1,
              },
              {
                options: [
                  "amazing",
                  "amaze",
                  "amazement",
                  "amazed",
                ],
                answer: 3,
              },
              {
                options: [
                  "covers",
                  "cover up",
                  "covering",
                  "coverage",
                ],
                answer: 0,
              },
              {
                options: [
                  "danger",
                  "dangerously",
                  "dangerous",
                  "endanger",
                ],
                answer: 2,
              },
              {
                options: [
                  "least",
                  "fewer",
                  "less",
                  "little",
                ],
                answer: 2,
              },
              {
                options: [
                  "environment",
                  "environmental",
                  "environmentally",
                  "environmentalist",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A visit to a museum",
            text: [
              "Last weekend, I visited the Natural History Museum {1} my family. It's one of my favourite places in the city.",
              "The first thing we saw was a huge dinosaur skeleton in the main hall. It was more than twenty metres long! My little brother was very excited. He loves dinosaurs.",
              "Then we visited the ocean gallery. There was a model of a blue whale {2} was hanging from the ceiling. It was enormous! We also saw lots of fish, sharks and other sea creatures. After lunch, we went to the earthquake room. It was a room {3} you could feel what an earthquake is like. The floor shook, and everything moved. It was a bit scary, {4} it was fun! We also visited the gem gallery and saw beautiful diamonds and crystals. I learned so much at the museum. I'd love to go back {5} day. It's free {6} visitors, so anyone can go.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "that",
                "which",
              ],
              [
                "where",
              ],
              [
                "but",
              ],
              [
                "one",
                "some",
              ],
              [
                "for",
                "to",
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
            instruction: "Read this email from your English-speaking friend Jo and the notes you have made. Write your email to Jo using all the notes. Write about 100 words.",
            input: {
              from: "Jo",
              subject: "Your favourite season",
              lines: [
                "What's your favourite season? [Tell Jo]",
                "Why do you like it? [Explain]",
                "What do you do in that season? [Describe]",
                "Do you have any special plans for this season? [Tell Jo]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nMy favourite season is summer. I love the hot weather and the long days.\n\nI like summer because there's no school, so I have lots of free time. I can spend time with my friends and do all the things I love. The weather is also perfect for being outside.\n\nIn summer, I go to the beach a lot. I swim in the sea, play volleyball and eat ice cream. I also go camping with my family in the mountains. In the evenings, we have barbecues in the garden.\n\nThis summer, I'm going on holiday to Italy with my family. I'm very excited! We're going to visit Rome and Venice.\n\nBye,\nEce",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Living in the countryside",
              lines: [
                "What are the advantages of living in the countryside?",
                "What are the disadvantages?",
                "Would you like to live in the countryside?",
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
            sample: "Country life\n\nLiving in the countryside has many advantages. The air is clean and fresh, and it's very quiet and peaceful. You can see beautiful nature every day, like fields, forests and animals. People in the countryside often know their neighbours well, so there's a strong sense of community.\n\nHowever, there are also disadvantages. There aren't many shops, restaurants or cinemas, so it can be boring for young people. Public transport is often poor, so you need a car to get around. It can also be difficult to find a job.\n\nI live in a city, but I'd like to live in the countryside when I'm older. I think it would be a healthier and more relaxing way of life.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When Jack found the old diary, he had no idea it would change his life.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When Jack found the old diary, he had no idea it would change his life. It was hidden in a box in his grandfather's attic.\n\nThe diary belonged to his great-grandfather, who had been an explorer. It described his travels to Africa, South America and the Arctic. There were drawings of animals and maps of places Jack had never heard of.\n\nJack read the diary every night. He was fascinated by his great-grandfather's adventures. He decided that he wanted to be an explorer too.\n\nTwenty years later, Jack is a famous explorer. He has travelled all over the world, just like his great-grandfather. He still keeps the diary on his desk.",
          },
        },
      ],
    },
  ],
};
