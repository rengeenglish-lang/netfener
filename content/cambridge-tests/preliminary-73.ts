import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 73 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_73: CambridgeTest = {
  id: "preliminary-73",
  level: "preliminary",
  no: 73,
  title: "B1 Preliminary · Practice Test 73",
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
                    "Students must bring a calculator to the maths exam.",
                  ],
                },
                question: "What should students bring?",
                options: [
                  "a dictionary",
                  "a calculator",
                  "a pen only",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Max, the bus is late. I'll be at the cinema at 8.15. Start without me! Ben",
                  ],
                },
                question: "What does Ben want Max to do?",
                options: [
                  "begin watching without him",
                  "wait for him",
                  "buy him a ticket",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Keep refrigerated after opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Keep it warm.",
                  "Don't put it in the fridge.",
                  "Put it in the fridge after opening.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I've lost my bag on the bus. Has anyone found a blue bag? Emma",
                  ],
                },
                question: "Why has Emma written this email?",
                options: [
                  "to sell a bag",
                  "to ask about a lost bag",
                  "to buy a bag",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Buy two coffees, get one free.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "All coffee is free.",
                  "You get a free coffee if you buy two.",
                  "Coffee is half price.",
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
            instruction: "The young people below all want to join a club. Read the descriptions of eight clubs. Decide which club would be the most suitable for each person.",
            options: [
              {
                title: "Gardening Club",
                text: "Grow vegetables and flowers.",
              },
              {
                title: "Cooking Club",
                text: "Learn to cook healthy food.",
              },
              {
                title: "Photography Club",
                text: "Learn to take great photos.",
              },
              {
                title: "Chess Club",
                text: "Play chess and enter competitions.",
              },
              {
                title: "Drama Club",
                text: "Act in plays.",
              },
              {
                title: "Choir",
                text: "Sing in a group.",
              },
              {
                title: "Film Club",
                text: "Watch and discuss films.",
              },
              {
                title: "Robotics Club",
                text: "Build and program robots.",
              },
            ],
            items: [
              {
                text: "Elif wants to grow her own food.",
                answer: 0,
              },
              {
                text: "Can loves singing.",
                answer: 5,
              },
              {
                text: "Zeynep wants to learn to cook.",
                answer: 1,
              },
              {
                text: "Mert loves technology and building things.",
                answer: 7,
              },
              {
                text: "Asya wants to enter chess competitions.",
                answer: 3,
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
              title: "A year in France",
              paragraphs: [
                "When I was sixteen, I spent a year studying in France. I lived with a French family in a small town near Paris.",
                "At first, it was very difficult. I couldn't understand what people were saying, because they spoke so fast. I felt lonely and homesick.",
                "But my host family was very kind. They helped me with my French, and they took me to lots of interesting places. I also made friends at school. They were very patient with me.",
                "By the end of the year, I could speak French fluently. I'd learned so much about French culture and food. I'd also become more independent and confident. I still keep in touch with my host family, and I visit them every summer.",
              ],
            },
            items: [
              {
                question: "Where did the writer live in France?",
                options: [
                  "in a hotel",
                  "in a flat alone",
                  "with a French family",
                  "in a school",
                ],
                answer: 2,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "the food",
                  "the weather",
                  "understanding people",
                  "the school",
                ],
                answer: 2,
              },
              {
                question: "How did the host family help?",
                options: [
                  "with her French",
                  "with money",
                  "with her homework",
                  "by driving her to school",
                ],
                answer: 0,
              },
              {
                question: "What could the writer do by the end of the year?",
                options: [
                  "cook French food",
                  "drive",
                  "teach French",
                  "speak French fluently",
                ],
                answer: 3,
              },
              {
                question: "What does the writer do every summer?",
                options: [
                  "works in France",
                  "visits her host family",
                  "studies French",
                  "stays at home",
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
            title: "A restaurant in the dark",
            text: [
              "In some cities, there are restaurants where you eat in complete darkness. {1} The idea is to help people understand what it's like to be blind.",
              "The waiters in these restaurants are usually blind. {2} They help customers find their seats and bring them their food.",
              "Customers can't see what they're eating. {3} Many say that their sense of taste and smell becomes much stronger.",
              "Eating in the dark can be difficult at first. {4} But most customers say it's an amazing experience.",
              "The restaurants also help blind people find jobs. {5} They show that blind people can do many things successfully.",
            ],
            sentences: [
              "They have to guess using their other senses.",
              "Customers can see everything.",
              "You can't even see your own hand.",
              "Many of them find it difficult to get work elsewhere.",
              "The waiters can see perfectly.",
              "They are used to moving around without seeing.",
              "The restaurants are very bright.",
              "Some people spill their drinks or drop their food.",
            ],
            answers: [
              2,
              5,
              0,
              7,
              3,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Elephants",
            text: [
              "Elephants are the largest land animals on Earth. There are two main {1}: African and Asian elephants.",
              "African elephants are larger and have bigger ears. They live in the grasslands and forests of Africa. Asian elephants are smaller and live in the forests of Asia.",
              "Elephants are very intelligent animals. They have excellent {2} and can remember other elephants for many years. They also show emotions like happiness and sadness. Elephants live in family groups led by the oldest female. They are very {3} and look after each other. Sadly, elephants are in {4}. People hunt them for their ivory tusks, and their habitats are being destroyed. In the last century, the number of elephants has fallen {5}. Many countries are working to protect elephants and stop the illegal ivory {6}.",
            ],
            gaps: [
              {
                options: [
                  "typical",
                  "typing",
                  "typed",
                  "types",
                ],
                answer: 3,
              },
              {
                options: [
                  "memories",
                  "memory up",
                  "memorise",
                  "memorable",
                ],
                answer: 0,
              },
              {
                options: [
                  "care",
                  "careful",
                  "caring",
                  "carefully",
                ],
                answer: 2,
              },
              {
                options: [
                  "dangerous",
                  "dangerously",
                  "danger",
                  "endanger",
                ],
                answer: 2,
              },
              {
                options: [
                  "dramatically",
                  "dramatic",
                  "drama",
                  "dramatise",
                ],
                answer: 0,
              },
              {
                options: [
                  "trader",
                  "trading up",
                  "traded",
                  "trade",
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
            title: "My first holiday abroad",
            text: [
              "When I was twelve, I went abroad {1} the first time. My family went on holiday to Greece.",
              "We stayed in a hotel on a beautiful island. The beach was right in front of our hotel, {2} we could swim in the sea every day. The water was so clear that you could see the fish.",
              "We also visited some ancient ruins. My dad told me about the history of ancient Greece. It was very interesting. The food was delicious. I tried lots of new dishes, like moussaka and souvlaki. My favourite was a sweet called baklava. One evening, we went to a restaurant {3} there was live music and dancing. Everyone danced, even my dad! I didn't want to go home {4} the end of the holiday. Since then, I've been to many other countries, but Greece will always be special {5} me. I'd love to go back {6} day.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "so",
              ],
              [
                "where",
              ],
              [
                "at",
              ],
              [
                "to",
                "for",
              ],
              [
                "one",
                "some",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A school play",
              lines: [
                "Our school is putting on a play! [Sounds fun]",
                "Would you like to come and watch? [Answer]",
                "Have you ever acted in a play? [Tell Chris]",
                "What kind of plays do you enjoy? [Explain]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nThat sounds really fun! What's the play about?\n\nI'd love to come and watch! Just tell me the date and time, and I'll ask my parents if they can take me. I'm sure you'll be brilliant.\n\nYes, I acted in a play last year. It was a comedy about a family on holiday. I played the dad! I was very nervous before the first show, but once I was on stage, I enjoyed it. Everyone laughed at the funny parts.\n\nI enjoy comedies the most, because I love laughing. I also like musicals with good songs and dancing.\n\nBye,\nMert",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An amazing journey",
              lines: [
                "Tell us about an amazing journey you've made.",
                "Where did you go?",
                "What made it special?",
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
            sample: "A train across Europe\n\nLast summer, I travelled across Europe by train with my older sister. We started in London and finished in Rome, stopping in Paris, Amsterdam, Berlin and Vienna.\n\nThe journey took three weeks. We stayed in hostels and met people from all over the world. In each city, we visited museums, ate local food and explored the streets.\n\nWhat made it special was the freedom. We could decide where to go and what to do every day. I also loved watching the countryside from the train window. The mountains in Switzerland were incredible.\n\nIt was the best journey of my life, and I learned so much about different cultures.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'When the lights went out, the whole school went silent.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "When the lights went out, the whole school went silent. It was the middle of a maths lesson, and it was very dark outside because of a storm.\n\nThe teacher told everyone to stay calm. Some students turned on their phone torches. Outside, the thunder was very loud, and the rain was falling heavily.\n\nAfter a few minutes, the head teacher came in with a torch. She said the electricity would be back soon, but school would finish early. Everyone cheered!\n\nThe students' parents came to collect them. When Lily got home, the electricity was back on. She sat by the window and watched the storm with her family.",
          },
        },
      ],
    },
  ],
};
