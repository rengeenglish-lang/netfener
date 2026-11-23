import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 33 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_33: CambridgeTest = {
  id: "preliminary-33",
  level: "preliminary",
  no: 33,
  title: "B1 Preliminary · Practice Test 33",
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
                    "Year 11 students can leave school at 2 p.m. on Friday to prepare for their exams.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "All students finish at 2 p.m.",
                  "Some students can go home early on Friday.",
                  "Exams are on Friday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ella, the bus has broken down. I'll be about 30 minutes late. Start without me! Mia",
                  ],
                },
                question: "What does Mia want Ella to do?",
                options: [
                  "wait for her",
                  "call her",
                  "begin without her",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Once opened, keep refrigerated and eat within 5 days.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You must eat it within five days after opening.",
                  "You can keep it for months.",
                  "You don't need to put it in the fridge.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jack,",
                    "Thanks for offering to help with the school fair. Could you bring some old books to sell? Mrs Brown",
                  ],
                },
                question: "What does Mrs Brown want Jack to bring?",
                options: [
                  "cakes",
                  "books",
                  "toys",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "PARK",
                    "The lake is closed for swimming today because of the cold weather.",
                  ],
                },
                question: "Why can't you swim today?",
                options: [
                  "It's too cold.",
                  "The lake is dirty.",
                  "There's no lifeguard.",
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
            instruction: "The young people below all want to join a volunteering project. Read the descriptions of eight projects. Decide which project would be the most suitable for each person.",
            options: [
              {
                title: "Animal Shelter",
                text: "Help look after dogs and cats waiting for new homes. Weekends.",
              },
              {
                title: "Reading Buddies",
                text: "Read with young children at a primary school. Weekday afternoons.",
              },
              {
                title: "Beach Clean",
                text: "Collect rubbish from the beach. Once a month on Saturdays.",
              },
              {
                title: "Food Bank",
                text: "Sort food donations for families in need. Flexible hours.",
              },
              {
                title: "Tree Planting",
                text: "Plant trees in local parks. Hard physical work outdoors.",
              },
              {
                title: "Hospital Helper",
                text: "Visit patients and bring them books and magazines.",
              },
              {
                title: "Tech Support",
                text: "Help older people learn to use smartphones. Evenings.",
              },
              {
                title: "Charity Shop",
                text: "Help sell second-hand clothes and books. Saturday mornings.",
              },
            ],
            items: [
              {
                text: "Emre loves children and enjoys reading.",
                answer: 1,
              },
              {
                text: "Asya is good with technology and is free in the evenings.",
                answer: 6,
              },
              {
                text: "Burak is strong and wants to help the environment outdoors.",
                answer: 4,
              },
              {
                text: "Elif loves animals and is free at weekends.",
                answer: 0,
              },
              {
                text: "Mehmet is busy but wants to help people who don't have enough food.",
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
              title: "A dream come true",
              paragraphs: [
                "Ever since I was a little girl, I'd wanted to see the Northern Lights. I'd seen photos of them in books, and they looked like magic.",
                "Last winter, my parents surprised me with a trip to Norway for my sixteenth birthday. We stayed in a small wooden cabin far from any city. It was very cold, minus twenty degrees, and there was snow everywhere.",
                "For the first three nights, the sky was cloudy, and we didn't see anything. I was so disappointed. I thought I'd never see the lights.",
                "On the last night, the sky was clear. Suddenly, green lights appeared and began to dance across the sky. It was even more beautiful than I'd imagined. I stood outside for two hours, even though I was freezing. It was the best birthday present ever.",
              ],
            },
            items: [
              {
                question: "Where had the writer seen the Northern Lights before?",
                options: [
                  "on TV",
                  "in photos",
                  "in a museum",
                  "in real life",
                ],
                answer: 1,
              },
              {
                question: "Why did the writer go to Norway?",
                options: [
                  "It was a birthday present.",
                  "She won a competition.",
                  "Her school organised it.",
                  "She was visiting family.",
                ],
                answer: 0,
              },
              {
                question: "What was the problem for the first three nights?",
                options: [
                  "It was too cold.",
                  "They got lost.",
                  "It was cloudy.",
                  "They were ill.",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel before the last night?",
                options: [
                  "excited",
                  "disappointed",
                  "bored",
                  "angry",
                ],
                answer: 1,
              },
              {
                question: "What does the writer say about the Northern Lights?",
                options: [
                  "They were disappointing.",
                  "They were too short.",
                  "They were not very colourful.",
                  "They were better than she expected.",
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
            title: "A village of artists",
            text: [
              "In a small village in the south of France, almost everyone is an artist. {1} The village has more than fifty art galleries.",
              "It all began about a hundred years ago, when a famous painter moved to the village. {2} Soon, other artists followed him.",
              "Today, the village attracts thousands of tourists every year. {3} Visitors can watch artists at work and buy paintings, sculptures and pottery.",
              "Many of the artists also teach classes. {4} Some people stay for a week or more to learn new skills.",
              "The village has become one of the most popular tourist destinations in the region. {5} But the local people say it still feels like a small, friendly community.",
            ],
            sentences: [
              "They come to walk through the narrow streets and visit the galleries.",
              "The village is in the middle of a big city.",
              "There are painters, sculptors and photographers.",
              "Hotels and restaurants have opened to welcome the visitors.",
              "Artists are not allowed to sell their work.",
              "He loved the light and the colours of the countryside.",
              "Nobody in the village likes art.",
              "These are popular with both beginners and experienced artists.",
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
            title: "Sleep",
            text: [
              "Sleep is very important for our health. When we sleep, our bodies {1} themselves and our brains process the information we learned during the day.",
              "Teenagers need about eight to ten hours of sleep a night. However, many teenagers don't get enough. This can {2} them feel tired, moody and unable to concentrate at school.",
              "One reason teenagers don't sleep enough is technology. The blue light from phones and computers makes it harder to fall asleep. Experts recommend {3} screens at least an hour before bed. Another reason is that teenagers' body clocks change. They naturally feel more awake {4} at night and want to sleep later in the morning. Some schools have started lessons later so that students can get more sleep. The results have been very {5}. Students are more alert and their marks have {6}.",
            ],
            gaps: [
              {
                options: [
                  "repair",
                  "fix up",
                  "mend up",
                  "build",
                ],
                answer: 0,
              },
              {
                options: [
                  "do",
                  "let up",
                  "give",
                  "make",
                ],
                answer: 3,
              },
              {
                options: [
                  "refusing",
                  "avoiding",
                  "stopping up",
                  "missing",
                ],
                answer: 1,
              },
              {
                options: [
                  "later",
                  "late",
                  "latest",
                  "lately",
                ],
                answer: 0,
              },
              {
                options: [
                  "positively",
                  "positivity",
                  "positive",
                  "positiveness",
                ],
                answer: 2,
              },
              {
                options: [
                  "grown",
                  "improved",
                  "risen up",
                  "raised",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "A visit to London",
            text: [
              "Last summer, I visited London {1} the first time. I went with my aunt, who has lived there for ten years.",
              "On the first day, we took a boat trip along the River Thames. We saw lots of famous buildings, {2} Big Ben and the Tower of London. Then we went on the London Eye. The view from the top was amazing!",
              "The next day, we visited the British Museum. It's {3} of the biggest museums in the world, and it's free! I saw mummies from ancient Egypt and lots of other interesting things. In the evening, we went to see a musical. It was {4} good that I want to see it again. I also loved the red buses and the black taxis. London is very busy, but there's so much to do. I'd love to go back {5} I'm older. Maybe I'll even live there {6} day!",
            ],
            answers: [
              [
                "for",
              ],
              [
                "like",
                "including",
              ],
              [
                "one",
              ],
              [
                "so",
              ],
              [
                "when",
                "once",
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
            instruction: "Read this email from your English-speaking friend Alex and the notes you have made. Write your email to Alex using all the notes. Write about 100 words.",
            input: {
              from: "Alex",
              subject: "Learning to cook",
              lines: [
                "I want to learn how to cook. [Good idea]",
                "What's the first dish I should try to make? [Suggest one]",
                "Who taught you to cook? [Tell Alex]",
                "Could you teach me sometime? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's a really good idea! Cooking is a very useful skill, and it's fun too.\n\nI think the first dish you should try is pasta with tomato sauce. It's very simple, and you only need a few ingredients. Once you can do that, you could try making a soup or a curry.\n\nMy grandmother taught me to cook when I was about ten. Every weekend, I helped her in the kitchen, and she showed me all her recipes. She's an amazing cook!\n\nOf course I could teach you! Why don't you come to my house on Saturday? We could make pizza together.\n\nBye,\nSelin",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! What I'd change about my school",
              lines: [
                "If you could change one thing about your school, what would it be?",
                "Why would you change it?",
                "How would it help students?",
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
            sample: "A better school day\n\nIf I could change one thing about my school, I'd make the lunch break longer. At the moment, we only have thirty minutes, which isn't enough time to eat and relax.\n\nI'd change it because students need time to rest during the day. With a longer break, we could eat slowly, chat with friends and even do some sport outside. This would help us feel more relaxed and energetic in the afternoon.\n\nI think it would also help students concentrate better in lessons. When you're tired and hungry, it's very difficult to learn. A longer break would make everyone happier and healthier.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The last thing Tom expected was to find a puppy on his doorstep.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The last thing Tom expected was to find a puppy on his doorstep. It was a cold, rainy morning, and the little dog was shaking.\n\nTom picked it up carefully and took it inside. He wrapped it in a towel and gave it some milk. The puppy had no collar, so Tom didn't know who it belonged to.\n\nHe put up posters around the neighbourhood and asked his neighbours, but nobody knew anything about the dog. After two weeks, his parents said he could keep it.\n\nTom called the puppy Lucky, because he was lucky to be found. Now they are best friends and go everywhere together.",
          },
        },
      ],
    },
  ],
};
