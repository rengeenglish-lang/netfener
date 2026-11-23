import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 38 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_38: CambridgeTest = {
  id: "preliminary-38",
  level: "preliminary",
  no: 38,
  title: "B1 Preliminary · Practice Test 38",
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
                    "Students taking part in the school play should meet in the hall at 4 p.m. on Thursday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The play is on Thursday.",
                  "The hall is closed on Thursday.",
                  "Some students need to go to the hall on Thursday.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Mia, I've finished my homework early. Do you want to go to the park? Ella",
                  ],
                },
                question: "What is Ella suggesting?",
                options: [
                  "going out together",
                  "doing homework together",
                  "staying at home",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Use within 24 hours of opening.",
                    "Keep cool.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It lasts a week after opening.",
                  "You should use it the day you open it.",
                  "Keep it in a warm place.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Tom,",
                    "Don't forget to bring your passport for the trip on Friday. We'll check them at the airport. Mrs Hill",
                  ],
                },
                question: "What does Mrs Hill remind Tom to do?",
                options: [
                  "bring his passport",
                  "arrive early",
                  "pack his bag",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Cash only. Sorry, no card payments.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can pay by card.",
                  "Food is free.",
                  "You can only pay with money.",
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
            instruction: "The young people below all want to buy a new book. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Haunted Castle",
                text: "A ghost story set in an old Scottish castle. Very spooky!",
              },
              {
                title: "Wild Kitchen",
                text: "Recipes using plants and herbs you can find in nature.",
              },
              {
                title: "Planet Earth",
                text: "Amazing photos of nature from around the world.",
              },
              {
                title: "The Football Diaries",
                text: "A funny story about a boy who dreams of playing professional football.",
              },
              {
                title: "Rocket Science",
                text: "An easy guide to how rockets and space travel work.",
              },
              {
                title: "Detective Lily",
                text: "A mystery about a girl who solves crimes in her village.",
              },
              {
                title: "World History",
                text: "The history of the world from ancient times to today.",
              },
              {
                title: "Learn to Draw",
                text: "Step-by-step drawing lessons for beginners.",
              },
            ],
            items: [
              {
                text: "Kerem loves football and funny stories.",
                answer: 3,
              },
              {
                text: "Asya loves solving mysteries.",
                answer: 5,
              },
              {
                text: "Burak wants to become an astronaut.",
                answer: 4,
              },
              {
                text: "Lale loves scary stories.",
                answer: 0,
              },
              {
                text: "Emre is interested in nature photography.",
                answer: 2,
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
              title: "A month without sugar",
              paragraphs: [
                "Last year, I decided to stop eating sugar for a month. I'd read an article about how much sugar teenagers eat, and I was shocked. I wanted to see if I could do it.",
                "The first week was terrible. I had headaches and I felt tired all the time. I really missed chocolate and sweets. My friends kept offering me biscuits, which didn't help!",
                "In the second week, I started to feel better. I had more energy, and I wasn't hungry between meals. I discovered lots of healthy snacks, like fruit and nuts. I also learned to read food labels carefully, because sugar is in almost everything.",
                "By the end of the month, I felt much healthier. My skin was clearer, and I was sleeping better. I still eat sugar sometimes now, but much less than before. I think everyone should try a month without sugar.",
              ],
            },
            items: [
              {
                question: "Why did the writer stop eating sugar?",
                options: [
                  "She read an article about it.",
                  "Her doctor told her to.",
                  "Her parents asked her to.",
                  "She was ill.",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel in the first week?",
                options: [
                  "full of energy",
                  "happy",
                  "tired and unwell",
                  "hungry",
                ],
                answer: 2,
              },
              {
                question: "What did the writer's friends do?",
                options: [
                  "stopped eating sugar too",
                  "offered her biscuits",
                  "gave her fruit",
                  "told her to stop",
                ],
                answer: 1,
              },
              {
                question: "What did the writer learn?",
                options: [
                  "Fruit has no sugar.",
                  "Biscuits are healthy.",
                  "Food labels are wrong.",
                  "Sugar is in most food.",
                ],
                answer: 3,
              },
              {
                question: "What does the writer do now?",
                options: [
                  "eats no sugar",
                  "eats less sugar",
                  "eats more sugar",
                  "eats only sweets",
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
            title: "A railway through the clouds",
            text: [
              "In Argentina, there's a train that travels so high that it passes through the clouds. {1} It's called the Tren a las Nubes, which means 'Train to the Clouds'.",
              "The railway was built more than seventy years ago. {2} It was originally used to carry goods between Argentina and Chile.",
              "The journey takes about fifteen hours. {3} At its highest point, the train is more than 4,000 metres above sea level.",
              "Because the air is so thin at that height, some passengers feel ill. {4} There's even a doctor on board, just in case.",
              "Today, the train is mainly used by tourists. {5} The views of the mountains and valleys are spectacular.",
            ],
            sentences: [
              "Passengers can sleep on the train.",
              "Oxygen is available for anyone who needs it.",
              "The train is very fast.",
              "It took nearly thirty years to finish.",
              "It's one of the highest railways in the world.",
              "It's one of the most popular tourist attractions in the country.",
              "The railway is only ten kilometres long.",
              "The train crosses bridges and goes through tunnels in the Andes mountains.",
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
            title: "Bees",
            text: [
              "Bees are among the most important insects on Earth. They {1} plants to reproduce by carrying pollen from one flower to another. This is called pollination.",
              "About a third of the food we eat depends on pollination by bees, {2} fruits, vegetables and nuts. Without bees, many of these foods would disappear.",
              "Honey bees live in large colonies of up to 60,000 bees. Each colony has one queen, who lays all the eggs. Worker bees collect nectar from flowers and turn it into honey. To make just one jar of honey, bees must {3} about two million flowers! Sadly, bee populations around the world are {4}. This is caused by pesticides, disease and the loss of wild flowers. Many people are now {5} action to help bees. They plant bee-friendly flowers and avoid using chemicals in their gardens. If we want to {6} our food supply, we must protect bees.",
            ],
            gaps: [
              {
                options: [
                  "make",
                  "let",
                  "have",
                  "help",
                ],
                answer: 3,
              },
              {
                options: [
                  "include",
                  "including",
                  "included",
                  "inclusion",
                ],
                answer: 1,
              },
              {
                options: [
                  "visit",
                  "see up",
                  "go up",
                  "travel",
                ],
                answer: 0,
              },
              {
                options: [
                  "decline",
                  "declined",
                  "declining",
                  "declines up",
                ],
                answer: 2,
              },
              {
                options: [
                  "making",
                  "taking",
                  "doing",
                  "having",
                ],
                answer: 1,
              },
              {
                options: [
                  "save up",
                  "guard up",
                  "keep up",
                  "protect",
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
            title: "My grandmother's garden",
            text: [
              "My grandmother has a beautiful garden. She's been looking {1} it for more than forty years, and it's full of flowers, vegetables and fruit trees.",
              "When I was little, I spent every summer at her house. She taught me how to plant seeds, water the plants and pick fruit. My favourite job was collecting strawberries, {2} I usually ate more than I collected!",
              "Last year, my grandmother hurt her back and couldn't work in the garden. So I went there every weekend to help her. It was hard work, {3} I enjoyed it. My grandmother sat in her chair and told me what to do. By the end of the summer, the garden looked {4} beautiful as ever. My grandmother was so happy. Now I have my own small garden at home. I grow tomatoes and herbs. Gardening is {5} of my favourite hobbies, and I have my grandmother to thank {6} that.",
            ],
            answers: [
              [
                "after",
              ],
              [
                "although",
                "but",
                "though",
              ],
              [
                "but",
              ],
              [
                "as",
              ],
              [
                "one",
              ],
              [
                "for",
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "A new hobby",
              lines: [
                "I want to start a new hobby, but I don't know what to choose. [I can help]",
                "What hobbies do you have? [Tell Jamie]",
                "Which hobby do you think I would enjoy? [Suggest one]",
                "Could we do a hobby together? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nDon't worry, I can help you choose! There are so many fun hobbies to try.\n\nMy main hobby is playing tennis. I play three times a week at a club near my house. I also enjoy painting, especially landscapes. At the weekend, I sometimes go hiking with my family.\n\nI think you would enjoy photography. You're very creative, and you love travelling, so you could take amazing photos of the places you visit. You don't need an expensive camera to start; you can use your phone.\n\nYes, we could definitely do a hobby together! Maybe we could join a dance class? It would be fun.\n\nBye,\nDuru",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Technology and education",
              lines: [
                "How has technology changed the way students learn?",
                "Do you think it's a good thing?",
                "How do you use technology for your studies?",
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
            sample: "Learning in the digital age\n\nTechnology has completely changed the way students learn. Today, we can find information about anything in seconds, watch video lessons and even take online courses from top universities.\n\nI think this is mostly a good thing. Technology makes learning more interesting and accessible. Students who can't go to school can still study at home. It also helps us practise skills like typing and research.\n\nHowever, there are some problems. Some students spend too much time on social media instead of studying. I use technology for research and to practise English with apps. But I still prefer reading books and writing by hand when I'm revising.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The door was open, but the house was completely silent.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The door was open, but the house was completely silent. Lucy stood outside, feeling worried. Her friend Emma had invited her for lunch, but nobody was answering.\n\nShe stepped inside and called Emma's name. There was no reply. Then she heard a quiet noise from the kitchen. She walked slowly towards it, her heart beating fast.\n\nWhen she opened the kitchen door, the lights suddenly came on. 'Surprise!' shouted a crowd of people. Emma and all their friends were there, with balloons and a big birthday cake.\n\nLucy had completely forgotten that it was her birthday! She laughed and hugged her friends.",
          },
        },
      ],
    },
  ],
};
