import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 11 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_11: CambridgeTest = {
  id: "preliminary-11",
  level: "preliminary",
  no: 11,
  title: "B1 Preliminary · Practice Test 11",
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
                    "SCHOOL LIBRARY",
                    "Students may borrow up to three books at a time. Dictionaries must not be taken out of the library.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students can borrow as many books as they like.",
                  "Dictionaries can be borrowed for a day.",
                  "Some books must stay in the library.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Emma, my flight's been delayed by two hours, so don't come to the airport at six. I'll text you when I land. Grace",
                  ],
                },
                question: "What does Grace want Emma to do?",
                options: [
                  "come to the airport earlier",
                  "wait for another message",
                  "book a new flight",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Shake well before use.",
                    "Apply to clean, dry skin twice a day.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You should use it once a week.",
                  "You should mix the product before using it.",
                  "You should put it on wet skin.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi all,",
                    "Unfortunately, the band practice room is being repaired this week. We'll practise in the music room instead. Same time. Mr Davis",
                  ],
                },
                question: "What has changed?",
                options: [
                  "when the band will practise",
                  "who will lead the practice",
                  "where the band will practise",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CYCLE HIRE",
                    "Bikes must be returned by 6 p.m. Late returns will be charged an extra £5.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You'll pay more if you bring a bike back late.",
                  "Bikes can be kept overnight.",
                  "Bikes cost £5 an hour.",
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
            instruction: "The young people below all want to choose a holiday activity. Read the descriptions of eight activities. Decide which one would be the most suitable for each person.",
            options: [
              {
                title: "River Rafting",
                text: "An exciting day on a fast river in a group boat. You must be over 14 and able to swim.",
              },
              {
                title: "Pottery Workshop",
                text: "Make your own cups and plates from clay. Three afternoon sessions. Take your work home at the end.",
              },
              {
                title: "Bird-Watching Walk",
                text: "A quiet early-morning walk with an expert to spot and identify local birds. Binoculars provided.",
              },
              {
                title: "Cooking Masterclass",
                text: "A professional chef teaches you to make a three-course meal. Evening session, food included.",
              },
              {
                title: "Horse Riding Trek",
                text: "A two-hour ride through the forest. Suitable for beginners. Helmets provided.",
              },
              {
                title: "Escape Room",
                text: "Work in a team to solve puzzles and escape from a locked room in one hour. Great for groups of friends.",
              },
              {
                title: "Night Sky Tour",
                text: "Look at stars and planets through big telescopes with an astronomer. Starts at 10 p.m.",
              },
              {
                title: "Graffiti Art Class",
                text: "Learn street art techniques and paint a legal wall with other young artists.",
              },
            ],
            items: [
              {
                text: "Ömer loves solving problems and wants to do something fun with three friends.",
                answer: 5,
              },
              {
                text: "Lale is very creative and would like to make something useful that she can keep.",
                answer: 1,
              },
              {
                text: "Kerem is a strong swimmer and is looking for an adventure.",
                answer: 0,
              },
              {
                text: "Zehra is interested in nature and doesn't mind getting up early.",
                answer: 2,
              },
              {
                text: "Arda is fascinated by space and doesn't mind staying up late.",
                answer: 6,
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
              title: "Starting a business at fifteen",
              paragraphs: [
                "When I was fifteen, I started making and selling candles. It began as a hobby; I made a few as presents for my family at Christmas, and everyone loved them. My aunt suggested that I try to sell them online.",
                "At first, I sold only a few candles a month, mainly to friends of my parents. I spent hours taking photos and writing descriptions for my website. It was frustrating, and I nearly gave up.",
                "Then a popular blogger wrote about my candles, and suddenly I had hundreds of orders. I had to ask my mum and my best friend to help me. We worked every evening and weekend for two months.",
                "Running a business has taught me a lot about money and time management. It's hard to do with schoolwork, so now I only make candles during the holidays. I'm saving the money for university, where I want to study business.",
              ],
            },
            items: [
              {
                question: "How did the writer's business start?",
                options: [
                  "She made gifts for her family.",
                  "She took a business course.",
                  "Her aunt sold candles.",
                  "She worked in a shop.",
                ],
                answer: 0,
              },
              {
                question: "How did the writer feel at first?",
                options: [
                  "very successful",
                  "bored",
                  "confident",
                  "disappointed with the results",
                ],
                answer: 3,
              },
              {
                question: "What happened after the blogger's article?",
                options: [
                  "The writer stopped selling.",
                  "The writer got many orders.",
                  "The website closed.",
                  "The writer's friend left.",
                ],
                answer: 1,
              },
              {
                question: "How has the writer changed the business?",
                options: [
                  "She only works on it in the holidays.",
                  "She has opened a shop.",
                  "She sells it to her aunt.",
                  "She works on it every evening.",
                ],
                answer: 0,
              },
              {
                question: "What will the writer do with the money?",
                options: [
                  "buy a car",
                  "give it to her mum",
                  "use it for her studies",
                  "travel abroad",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The village that saved its school",
            text: [
              "A few years ago, a small primary school in a village in the Scottish Highlands was going to close. {1} The local council said it was too expensive to keep it open.",
              "The parents were very worried. {2} Without the school, families with young children would have to move away.",
              "So the villagers came up with an idea. {3} They offered houses at low rents to families who would move to the village and send their children to the school.",
              "The plan worked better than anyone expected. {4} The school now has twenty-five pupils and two new teachers.",
              "Other villages in Scotland are now trying the same idea. {5} The villagers are proud that they have saved not only their school but also their community.",
            ],
            sentences: [
              "Some have already welcomed new families too.",
              "The nearest other school was more than an hour away by car.",
              "Most families prefer living in big cities.",
              "It had only six pupils, all from three families.",
              "Within two years, eight new families had arrived.",
              "The children didn't want to go to school.",
              "They advertised in national newspapers for families who wanted a quieter life.",
              "The council decided to build a bigger school in the town.",
            ],
            answers: [
              3,
              1,
              6,
              4,
              0,
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "cloze-mc",
            instruction: "Read the text below and choose the correct word for each space.",
            title: "Sleep and teenagers",
            text: [
              "Most teenagers need between eight and ten hours of sleep a night, but many get much {1}. Scientists say there are several reasons for this.",
              "One reason is that teenagers' body clocks change. They naturally feel sleepy later in the evening and want to wake up later in the morning. {2}, schools usually start early.",
              "Another reason is technology. The light from phones and computers can make it harder to {3} asleep. Not getting enough sleep can {4} problems at school. Tired students find it difficult to concentrate and remember things. Some schools have started lessons later, and the results have been {5}. Students are happier and get better marks. Experts {6} that teenagers turn off their screens an hour before bed.",
            ],
            gaps: [
              {
                options: [
                  "fewer",
                  "little",
                  "less",
                  "smaller",
                ],
                answer: 2,
              },
              {
                options: [
                  "Although",
                  "Despite",
                  "However",
                  "Even",
                ],
                answer: 2,
              },
              {
                options: [
                  "fall",
                  "go",
                  "get",
                  "drop",
                ],
                answer: 0,
              },
              {
                options: [
                  "make",
                  "do",
                  "give",
                  "cause",
                ],
                answer: 3,
              },
              {
                options: [
                  "positively",
                  "positive",
                  "positivity",
                  "positiveness",
                ],
                answer: 1,
              },
              {
                options: [
                  "recommend",
                  "tell",
                  "say",
                  "order",
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
            title: "My first concert",
            text: [
              "Last month, I went {1} my first rock concert with my older sister. It was in a huge stadium, and there were more than fifty thousand people there.",
              "We arrived two hours early {2} that we could get good places near the stage. While we were waiting, we talked to people from all over the country.",
              "When the band came on stage, everyone screamed. The music was so loud that I could feel it {3} my chest. My favourite moment was when the singer asked the audience to sing a song {4} her. Thousands of people singing together was amazing. We didn't get home {5} two o'clock in the morning, but it was worth it. I can't wait {6} go to another concert!",
            ],
            answers: [
              [
                "to",
              ],
              [
                "so",
              ],
              [
                "in",
              ],
              [
                "with",
              ],
              [
                "until",
                "till",
              ],
              [
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
            instruction: "Read this email from your English-speaking friend Jamie and the notes you have made. Write your email to Jamie using all the notes. Write about 100 words.",
            input: {
              from: "Jamie",
              subject: "Visiting your country",
              lines: [
                "I'm planning to visit your country next summer. [Great!]",
                "Which city do you think I should visit first? [Recommend one]",
                "What's the weather like there in summer? [Describe]",
                "Could we meet while I'm there? [Suggest an idea]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jamie,\n\nThat's great news! I'm sure you'll love it here.\n\nI think you should visit Istanbul first. It's a really exciting city with amazing history, and you can see beautiful mosques, palaces and markets. You should also take a boat trip on the Bosphorus.\n\nIn summer, the weather is usually very hot and sunny, so bring light clothes and sun cream. It doesn't rain much at all.\n\nOf course we can meet! I could show you around my city, and then we could go to the beach together. My parents would love to meet you too.\n\nLove,\nAslı",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An unforgettable journey",
              lines: [
                "Tell us about a journey you will never forget.",
                "Where did you go, and how did you travel?",
                "What happened?",
                "Write an article and we'll publish the best ones.",
              ],
            },
            minWords: 100,
            checklist: [
              "My article has an interesting title.",
              "I answered the questions in the announcement.",
              "I gave my opinions and reasons.",
              "I wrote about 100 words.",
            ],
            sample: "A night on the train\n\nThe most unforgettable journey I've ever made was a night train from Istanbul to a small town in the east of Turkey. I travelled with my grandfather, who wanted to show me the village where he grew up.\n\nWe shared a small sleeping compartment, and Grandpa told me stories about his childhood all evening. I hardly slept because I was so excited.\n\nIn the morning, I looked out of the window and saw snowy mountains in the sunrise. It was the most beautiful view I'd ever seen. That journey made me feel much closer to my grandfather.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The letter had been hidden in the old book for fifty years.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The letter had been hidden in the old book for fifty years. Emma found it while she was helping her grandmother clear out the attic.\n\nThe envelope was yellow and very old. On the front, it said 'To my dear Rose'. Rose was her grandmother's name.\n\nEmma took it downstairs and gave it to her grandmother. As she read it, her grandmother began to smile. 'It's from your grandfather,' she said. 'He wrote it before he asked me to marry him. I never knew he'd written it!'\n\nThey sat together and read the letter again and again. It was a very special afternoon.",
          },
        },
      ],
    },
  ],
};
