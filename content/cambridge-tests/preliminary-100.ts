import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 100 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_100: CambridgeTest = {
  id: "preliminary-100",
  level: "preliminary",
  no: 100,
  title: "B1 Preliminary · Practice Test 100",
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
                    "Congratulations to our basketball team, the new city champions!",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The team lost the final.",
                  "The school basketball team won the city competition.",
                  "Tryouts are on Monday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Yusuf, I've borrowed your umbrella. I'll give it back tomorrow morning. Sorry! Barış",
                  ],
                },
                question: "Why is Barış writing?",
                options: [
                  "to buy an umbrella",
                  "to explain he took Yusuf's umbrella",
                  "to ask about the weather",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Recyclable. Please put in the blue bin.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Throw it in any bin.",
                  "It can't be recycled.",
                  "Put it in the blue bin to be recycled.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ebru,",
                    "The school trip to the castle costs 200 lira. Please pay by Friday. Mr Demir",
                  ],
                },
                question: "What must Ebru do?",
                options: [
                  "pay for the trip by Friday",
                  "bring lunch",
                  "visit the castle alone",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Last entry is one hour before closing time.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The museum is open all night.",
                  "You can't go in during the last hour.",
                  "Entry is free in the last hour.",
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
            instruction: "The young people below all want to go to a camp this summer. Read the descriptions of eight camps. Decide which camp would be the most suitable for each person.",
            options: [
              {
                title: "Music Camp",
                text: "Play in an orchestra for a week.",
              },
              {
                title: "Space Camp",
                text: "Learn what it's like to be an astronaut.",
              },
              {
                title: "Art Camp",
                text: "Paint outdoors in a beautiful village.",
              },
              {
                title: "Sports Camp",
                text: "Try ten different sports.",
              },
              {
                title: "Nature Camp",
                text: "Learn survival skills in the forest.",
              },
              {
                title: "Language Camp",
                text: "Practise English with native speakers.",
              },
              {
                title: "Coding Camp",
                text: "Design your own app.",
              },
              {
                title: "Theatre Camp",
                text: "Write and perform a musical.",
              },
            ],
            items: [
              {
                text: "Can wants to paint landscapes.",
                answer: 2,
              },
              {
                text: "Duygu wants to design an app.",
                answer: 6,
              },
              {
                text: "Efe dreams of going into space.",
                answer: 1,
              },
              {
                text: "Fulya wants to perform in a musical.",
                answer: 7,
              },
              {
                text: "Gökhan wants to learn to survive in the wild.",
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
              title: "Looking back on my school years",
              paragraphs: [
                "This summer, I'll finish school. I've been at the same school for seven years, and I can't believe it's almost over.",
                "When I first arrived, I was shy and didn't speak to anyone. I was scared of the older students and often got lost in the corridors. My first friend was a girl called Ece, who sat next to me in maths.",
                "Over the years, I've changed a lot. I joined the drama club, which helped me become more confident. I've performed in four school plays, and last year I played the main role.",
                "I'll miss my teachers and friends, but I'm also excited about the future. In September, I'll start university, where I'm going to study English literature. I'll always remember my school years as some of the happiest of my life.",
              ],
            },
            items: [
              {
                question: "How long has the writer been at the school?",
                options: [
                  "four years",
                  "one year",
                  "ten years",
                  "seven years",
                ],
                answer: 3,
              },
              {
                question: "What was the writer like when she arrived?",
                options: [
                  "confident",
                  "shy",
                  "noisy",
                  "popular",
                ],
                answer: 1,
              },
              {
                question: "What helped the writer become confident?",
                options: [
                  "the drama club",
                  "maths lessons",
                  "sports",
                  "her older brother",
                ],
                answer: 0,
              },
              {
                question: "What happened last year?",
                options: [
                  "She changed schools.",
                  "She lost her best friend.",
                  "She played the main role in a play.",
                  "She failed her exams.",
                ],
                answer: 2,
              },
              {
                question: "What will the writer study?",
                options: [
                  "drama",
                  "English literature",
                  "maths",
                  "history",
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
            title: "A festival of lights",
            text: [
              "Every year in Lyon, France, the city holds a festival of lights. {1} It lasts for four nights in December.",
              "The festival began more than 150 years ago. {2} Local people put candles in their windows to celebrate.",
              "Today, artists from around the world take part. {3} They project colourful images onto famous buildings.",
              "More than two million people visit the festival every year. {4} Many streets are closed to traffic.",
              "The festival is free for everyone. {5} It's one of the most popular events in France.",
            ],
            sentences: [
              "The festival takes place in summer.",
              "The whole city is filled with light and colour.",
              "The city becomes extremely busy.",
              "The festival costs a lot of money.",
              "It started with a religious celebration.",
              "Only local people can attend.",
              "Some of the light shows are accompanied by music.",
              "Visitors only have to pay for food and drink.",
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
            title: "Libraries of the future",
            text: [
              "Libraries have existed for thousands of years. The ancient Library of Alexandria in Egypt was one of the largest in the world, with hundreds of thousands of scrolls.",
              "Today, libraries are changing. With the internet, people can find information {1} at home, so some people think libraries are no longer necessary.",
              "However, many libraries are finding new ways to be {2}. As well as books, they now offer computers, free Wi-Fi and study spaces. Some libraries have 'makerspaces', where people can use 3D printers and other {3}. Libraries are also important community centres. They run activities for children, classes for adults and clubs for older people. For many people, the library is a {4} place where they can meet others. In some countries, libraries lend more than just books. People can borrow musical instruments, tools and even cameras. The future of libraries is {5}, but one thing is clear: they will continue to play an important {6} in our communities.",
            ],
            gaps: [
              {
                options: [
                  "easy",
                  "ease",
                  "easily",
                  "easier",
                ],
                answer: 2,
              },
              {
                options: [
                  "useful",
                  "use",
                  "usefully",
                  "usage",
                ],
                answer: 0,
              },
              {
                options: [
                  "equip",
                  "equipped",
                  "equipping",
                  "equipment",
                ],
                answer: 3,
              },
              {
                options: [
                  "welcome",
                  "welcoming",
                  "welcomed",
                  "welcomes",
                ],
                answer: 1,
              },
              {
                options: [
                  "uncertain",
                  "certain",
                  "certainly",
                  "certainty",
                ],
                answer: 0,
              },
              {
                options: [
                  "roll",
                  "rolled",
                  "role",
                  "roleplay",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "The end of an adventure",
            text: [
              "Last month, I finished a 100-day challenge. I decided to do one new thing {1} day for a hundred days.",
              "Some of the things were small. I tried a new food, spoke to a stranger or walked home by a different route. Others were much bigger. I gave a speech in front of the whole school and went rock climbing {2} the first time.",
              "Not every day was easy. Some days, I couldn't think of anything new to do, and I had to ask my family {3} ideas. But they always helped me. During the challenge, I kept a diary. When I read it now, I'm surprised by how much I've changed. I used to be afraid of trying new things, but now I feel much {4} confident. The best thing I learned was that most fears are smaller than they seem. If you just try, you usually find that things aren't as difficult {5} you thought. I'd recommend this challenge to everyone. You don't have to do it for a hundred days. Even a week can make a big {6}.",
            ],
            answers: [
              [
                "every",
                "each",
              ],
              [
                "for",
              ],
              [
                "for",
              ],
              [
                "more",
              ],
              [
                "as",
              ],
              [
                "difference",
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
            instruction: "Read this email from your English-speaking friend Taylor and the notes you have made. Write your email to Taylor using all the notes. Write about 100 words.",
            input: {
              from: "Taylor",
              subject: "Celebrating",
              lines: [
                "We passed all our exams! [Reply]",
                "How should we celebrate? [Suggest]",
                "Who should we invite? [Tell Taylor]",
                "When are you free? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Taylor,\n\nThat's brilliant news! We worked so hard, and now it's paid off. Congratulations!\n\nI think we should celebrate with a picnic in the park, followed by a film at the outdoor cinema. If the weather is bad, we could go bowling and then have pizza at the new Italian restaurant.\n\nWe should invite everyone from our study group, because we helped each other so much. Maybe we could also invite our English teacher to the picnic, to say thank you.\n\nI'm free every day next week except Tuesday, when I've got a dentist appointment. How about Saturday? Let me know what you think!\n\nSee you soon,\nIpek",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! Something I've learned this year",
              lines: [
                "What's the most important thing you've learned this year?",
                "How did you learn it?",
                "How will it help you in the future?",
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
            sample: "Learning to ask for help\n\nThe most important thing I've learned this year is that it's OK to ask for help. Before, I always tried to do everything alone, even when I found something very difficult.\n\nAt the start of the year, I was really struggling with maths. I didn't want to tell anyone because I was embarrassed. My marks got worse and worse. Finally, my teacher noticed and asked me to stay after class. She explained the topics again, and a classmate offered to study with me.\n\nIn a few months, my marks improved a lot. I think this lesson will help me in the future, at university and at work. Everyone needs help sometimes, and asking for it shows strength, not weakness.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was the last day of school, and Emre had a secret plan.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was the last day of school, and Emre had a secret plan. For weeks, he and his classmates had been preparing a surprise for their teacher, Mrs Yılmaz, who was retiring after thirty years.\n\nThey had collected photos from every class she had taught and made a video with messages from her old students. Some of them were now doctors, engineers and even teachers themselves.\n\nAt the end of the last lesson, Emre turned off the lights and started the video. Mrs Yılmaz watched in silence as face after face appeared on the screen to thank her.\n\nWhen the video ended, she was crying, but she was smiling too. 'This is the best present I've ever had,' she said. Everyone stood up and clapped.",
          },
        },
      ],
    },
  ],
};
