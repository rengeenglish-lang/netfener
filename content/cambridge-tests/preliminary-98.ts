import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 98 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_98: CambridgeTest = {
  id: "preliminary-98",
  level: "preliminary",
  no: 98,
  title: "B1 Preliminary · Practice Test 98",
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
                    "The school play has been moved from the hall to the garden.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The play is cancelled.",
                  "The garden is closed.",
                  "The play will be in the garden now.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Esra, don't forget to bring your swimming things tomorrow. We're going to the pool after lunch. Hande",
                  ],
                },
                question: "What should Esra bring?",
                options: [
                  "swimming things",
                  "lunch",
                  "a towel only",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep frozen. Do not refreeze after defrosting.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it warm.",
                  "Keep it in the freezer, and don't freeze it again once it's defrosted.",
                  "You can freeze it many times.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Volkan,",
                    "I'm selling my old bike. It's in very good condition. Are you still interested? Ilker",
                  ],
                },
                question: "What is Ilker selling?",
                options: [
                  "a bike",
                  "a car",
                  "a computer",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "HOSPITAL",
                    "Visitors are welcome between 2 p.m. and 8 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Visits are only in the morning.",
                  "No visitors are allowed.",
                  "You can visit in the afternoon and evening.",
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
            instruction: "The young people below all want to go on holiday. Read the descriptions of eight holidays. Decide which holiday would be the most suitable for each person.",
            options: [
              {
                title: "Island Escape",
                text: "Relax on quiet beaches.",
              },
              {
                title: "City Break",
                text: "Museums and shopping in a capital city.",
              },
              {
                title: "Safari",
                text: "See lions and elephants in Africa.",
              },
              {
                title: "Ski Week",
                text: "Ski in the Alps.",
              },
              {
                title: "Cruise",
                text: "Visit five countries by ship.",
              },
              {
                title: "Camping",
                text: "Sleep under the stars in the forest.",
              },
              {
                title: "Theme Park",
                text: "Rides and shows for all the family.",
              },
              {
                title: "Language Trip",
                text: "Study English in London.",
              },
            ],
            items: [
              {
                text: "Ozan wants to see wild animals.",
                answer: 2,
              },
              {
                text: "Pınar wants to improve her English.",
                answer: 7,
              },
              {
                text: "Rüzgar wants to go on exciting rides.",
                answer: 6,
              },
              {
                text: "Sude wants to sleep in a tent.",
                answer: 5,
              },
              {
                text: "Tarık wants to visit many countries by sea.",
                answer: 4,
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
              title: "My experience as a young journalist",
              paragraphs: [
                "Last year, I won a competition to work for a week at a local newspaper. I've always wanted to be a journalist, so I was very excited.",
                "On the first day, the editor gave me a tour of the office and introduced me to the team. Everyone was very busy, and the phones never stopped ringing.",
                "My first task was to write a short article about a new park in the town. I had to interview the mayor and some local residents. I was very nervous during the interview with the mayor, but he was friendly and patient.",
                "At the end of the week, my article was printed in the newspaper with my name on it! I bought ten copies for my family. The experience showed me that journalism is hard work, but I still want to do it.",
              ],
            },
            items: [
              {
                question: "How did the writer get the job?",
                options: [
                  "by winning a competition",
                  "through her parents",
                  "by applying online",
                  "through school",
                ],
                answer: 0,
              },
              {
                question: "What was the office like?",
                options: [
                  "very quiet",
                  "empty",
                  "very busy",
                  "small and dark",
                ],
                answer: 2,
              },
              {
                question: "What was the article about?",
                options: [
                  "a football match",
                  "a new park",
                  "the mayor's family",
                  "a school",
                ],
                answer: 1,
              },
              {
                question: "How did the writer feel during the interview?",
                options: [
                  "bored",
                  "angry",
                  "sleepy",
                  "nervous",
                ],
                answer: 3,
              },
              {
                question: "What happened at the end of the week?",
                options: [
                  "She lost her job.",
                  "Her article was printed.",
                  "She met a famous writer.",
                  "She won a prize.",
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
            title: "A house made of bottles",
            text: [
              "In Argentina, a man built his whole house using plastic bottles. {1} It took him seven years to finish.",
              "He collected more than a million bottles. {2} Many came from his neighbours and local shops.",
              "The bottles were filled with sand and used like bricks. {3} The walls are very strong and keep the house cool in summer.",
              "Even the furniture is made from bottles. {4} There's a sofa, a bed and even a small swimming pool.",
              "Today, the house is a tourist attraction. {5} Visitors come to learn about recycling.",
            ],
            sentences: [
              "Nobody visits the house.",
              "He used bottles of different colours to decorate it.",
              "The house is made of glass.",
              "People gave him bottles they didn't need.",
              "He wanted to show that plastic waste can be useful.",
              "The man shows people around himself.",
              "The man bought new bottles.",
              "He held them together with cement.",
            ],
            answers: [
              4,
              3,
              7,
              1,
              5,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "The Amazon rainforest",
            text: [
              "The Amazon is the largest rainforest in the world. It covers about 5.5 million square kilometres, mostly in Brazil, but also in eight other countries.",
              "The rainforest is home to an {1} number of plants and animals. Scientists believe that about ten per cent of all the species on Earth live there. Many of them haven't been discovered yet.",
              "The Amazon is sometimes called 'the lungs of the planet' because its trees {2} carbon dioxide and produce oxygen. It also affects weather around the world. Millions of people live in the Amazon, including many indigenous groups who have lived there for thousands of years. They depend on the forest for food, medicine and {3}. Unfortunately, large parts of the rainforest are being cut down every year. The land is used for farming and cattle. This {4} is a serious threat to wildlife and to the climate. Many organisations are working to protect the Amazon. They believe that it is {5} to save the forest before it is too late. Everyone can help by choosing products that don't {6} the rainforest.",
            ],
            gaps: [
              {
                options: [
                  "incredibly",
                  "credit",
                  "incredulous",
                  "incredible",
                ],
                answer: 3,
              },
              {
                options: [
                  "absorbent",
                  "absorb",
                  "absorption",
                  "absorbed",
                ],
                answer: 1,
              },
              {
                options: [
                  "shelter",
                  "sheltered",
                  "sheltering",
                  "shelterless",
                ],
                answer: 0,
              },
              {
                options: [
                  "destroy",
                  "destructive",
                  "destruction",
                  "destroyed",
                ],
                answer: 2,
              },
              {
                options: [
                  "essence",
                  "essential",
                  "essentially",
                  "essentials",
                ],
                answer: 1,
              },
              {
                options: [
                  "damaged",
                  "damaging",
                  "damages",
                  "damage",
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
            title: "Learning to cook",
            text: [
              "Until last year, I couldn't cook anything except toast. Then my mum got a new job and started working late, so I decided it was time {1} learn.",
              "At first, I followed simple recipes from the internet. My first meal was pasta with tomato sauce. It wasn't perfect, but my family ate it all!",
              "Slowly, I started making more difficult dishes. I learned to make soup, rice and even bread. My grandmother taught me some traditional recipes, {2} as stuffed peppers and lentil balls. Of course, I made some mistakes. Once, I put salt in a cake {3} of sugar. Another time, I burned the rice so badly that we had to open all the windows! Now I cook dinner for my family twice a week. I really enjoy it, and my parents are very happy. I'm thinking {4} doing a cooking course next summer. Maybe one day I'll have my {5} restaurant. Cooking is a skill that everyone should learn, and it's much {6} fun than I expected.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "such",
              ],
              [
                "instead",
              ],
              [
                "about",
                "of",
              ],
              [
                "own",
              ],
              [
                "more",
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
            instruction: "Read this email from your English-speaking friend Lee and the notes you have made. Write your email to Lee using all the notes. Write about 100 words.",
            input: {
              from: "Lee",
              subject: "A new hobby",
              lines: [
                "I've just started a new hobby: photography! [Reply]",
                "What hobbies do you have? [Tell Lee]",
                "What photos should I take first? [Suggest]",
                "Can I show you my photos? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Lee,\n\nThat's fantastic news! Photography is such a creative hobby.\n\nMy main hobby is playing the drums. I practise every day after school and play in a band with three friends. I also enjoy drawing, especially cartoons.\n\nFor your first photos, you could take pictures of nature, like flowers, trees and the sky at sunset. Photos of people in the street can also be very interesting. Try taking photos at different times of day to see how the light changes.\n\nOf course you can show me your photos! Bring them when you come to my house on Saturday, and we can look at them together.\n\nBest wishes,\nKaya",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My dream job",
              lines: [
                "What would your dream job be?",
                "Why would you like to do it?",
                "What would you need to do to get it?",
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
            sample: "Becoming a marine biologist\n\nMy dream job is to be a marine biologist. Marine biologists study the animals and plants that live in the sea, and many of them work to protect the ocean.\n\nI've loved the sea since I was very young. My family spends every summer by the coast, and I always go snorkelling to look at fish and other creatures. I'd love to dive in coral reefs and discover new species. I also want to help stop plastic pollution, which is destroying the ocean.\n\nTo get this job, I'll need to study biology at university and learn to dive properly. I'm already working hard at science at school, and I'm planning to do a diving course next summer.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The bus had already left by the time Murat arrived at the stop.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The bus had already left by the time Murat arrived at the stop. It was the last bus of the day, and his house was ten kilometres away.\n\nHe tried to call his parents, but his phone battery was dead. It was getting dark, and it was starting to rain. Murat didn't know what to do.\n\nThen a car stopped next to him. It was his football coach. 'Murat? What are you doing here?' he asked. Murat explained what had happened. 'Get in,' said the coach. 'I'll take you home.'\n\nWhen Murat got home, his parents were very worried. They thanked the coach, and the next day they bought Murat a new phone charger to keep in his bag.",
          },
        },
      ],
    },
  ],
};
