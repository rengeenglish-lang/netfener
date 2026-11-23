import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 94 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_94: CambridgeTest = {
  id: "preliminary-94",
  level: "preliminary",
  no: 94,
  title: "B1 Preliminary · Practice Test 94",
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
                    "TRAIN STATION",
                    "The lift is out of order. Please use the stairs or ask staff for help.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The stairs are closed.",
                  "Staff are not available.",
                  "The lift isn't working.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Mum, I'm at Zeynep's house. Her dad will drive me home after dinner. Ece",
                  ],
                },
                question: "Why is Ece writing?",
                options: [
                  "to ask for a lift",
                  "to invite her mum to dinner",
                  "to tell her mum where she is",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Wash before eating.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Clean it before you eat it.",
                  "Don't wash it.",
                  "Cook it first.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ali,",
                    "The concert tickets are sold out. Maybe we can see the band next time they come. Kaan",
                  ],
                },
                question: "What does Kaan tell Ali?",
                options: [
                  "He has bought tickets.",
                  "There are no tickets left.",
                  "The concert is free.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SWIMMING POOL",
                    "Children under 8 must be with an adult at all times.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Young children need an adult with them.",
                  "Children can't swim here.",
                  "Adults can't swim here.",
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
            instruction: "The young people below all want to download an app. Read the descriptions of eight apps. Decide which app would be the most suitable for each person.",
            options: [
              {
                title: "WordUp",
                text: "Learn ten new English words every day.",
              },
              {
                title: "FitKid",
                text: "Short exercises you can do at home.",
              },
              {
                title: "SkyMap",
                text: "Point your phone at the sky to name the stars.",
              },
              {
                title: "ChefMate",
                text: "Video recipes step by step.",
              },
              {
                title: "BirdSong",
                text: "Recognise birds from their songs.",
              },
              {
                title: "PianoPal",
                text: "Learn to play the piano.",
              },
              {
                title: "StudyTimer",
                text: "Plan your homework and revision.",
              },
              {
                title: "CityGuide",
                text: "Maps and tips for travellers.",
              },
            ],
            items: [
              {
                text: "Ayşe wants to organise her revision.",
                answer: 6,
              },
              {
                text: "Barış wants to learn piano.",
                answer: 5,
              },
              {
                text: "Ceren wants to identify birds.",
                answer: 4,
              },
              {
                text: "Doruk wants to exercise at home.",
                answer: 1,
              },
              {
                text: "Esra wants to learn English vocabulary.",
                answer: 0,
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
              title: "My grandfather's boat",
              paragraphs: [
                "My grandfather was a fisherman for more than forty years. He had a small wooden boat called Deniz Yıldızı, which means 'starfish' in Turkish.",
                "When I was a child, he sometimes took me out on the boat early in the morning. We left the harbour before the sun came up and came back with fish for the whole family.",
                "When he stopped working, he didn't want to sell the boat. It was too special to him. Instead, he and I spent two summers repairing and painting it together.",
                "Now the boat looks almost new. My grandfather is too old to go fishing, but we still take the boat out on calm days. He tells me stories about the sea, and I'm learning to sail it myself.",
              ],
            },
            items: [
              {
                question: "What was the grandfather's job?",
                options: [
                  "sailor in the navy",
                  "fisherman",
                  "boat builder",
                  "teacher",
                ],
                answer: 1,
              },
              {
                question: "When did they go out on the boat?",
                options: [
                  "at night",
                  "at lunchtime",
                  "in the evening",
                  "early in the morning",
                ],
                answer: 3,
              },
              {
                question: "Why didn't the grandfather sell the boat?",
                options: [
                  "It was special to him.",
                  "Nobody wanted it.",
                  "It was broken.",
                  "It was too expensive.",
                ],
                answer: 0,
              },
              {
                question: "What did they do for two summers?",
                options: [
                  "went fishing every day",
                  "sailed to other countries",
                  "repaired the boat",
                  "built a house",
                ],
                answer: 2,
              },
              {
                question: "What is the writer learning?",
                options: [
                  "to fish",
                  "to paint",
                  "to sail the boat",
                  "to swim",
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
            title: "A school in the clouds",
            text: [
              "In a mountain village in Nepal, there's a school at more than 4,000 metres above sea level. {1} It's one of the highest schools in the world.",
              "The children who go there live in small villages nearby. {2} Some of them walk for more than an hour each morning.",
              "In winter, temperatures can fall to minus twenty degrees. {3} The classrooms are heated by solar panels.",
              "The school was built with help from mountain climbers. {4} They wanted to thank the local people for helping them.",
              "Today, more than a hundred students study there. {5} Many of them hope to become teachers or doctors.",
            ],
            sentences: [
              "Nobody goes to the school.",
              "Many of them had climbed Mount Everest.",
              "The children arrive by bus.",
              "There are no roads, so they walk to school.",
              "On some days, it's above the clouds.",
              "They learn English, maths and science.",
              "The school is near the sea.",
              "It's often too cold to play outside.",
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
            title: "Recycling plastic",
            text: [
              "Plastic is everywhere. We use it for bottles, bags and packaging. It's cheap and light, but it's also a big problem for the environment.",
              "Plastic takes hundreds of years to {1} down. Much of it ends up in rivers and oceans, where it can harm fish, birds and other sea animals.",
              "Recycling is one way to reduce the problem. When plastic is recycled, it is collected, cleaned and {2} into small pieces. These pieces are then melted and used to make new products, such as clothes, toys or furniture. However, only a small {3} of plastic is recycled. Much of it is thrown away because it is dirty or because people put it in the wrong bin. Experts say that the best solution is to use less plastic {4} the start. Carrying a reusable bag and a water bottle can make a big {5}. Some supermarkets now sell food without plastic packaging. If we all make small changes, we can {6} the amount of plastic in the sea.",
            ],
            gaps: [
              {
                options: [
                  "broken",
                  "break",
                  "breaking",
                  "breakable",
                ],
                answer: 1,
              },
              {
                options: [
                  "cutting",
                  "cutter",
                  "cutlery",
                  "cut",
                ],
                answer: 3,
              },
              {
                options: [
                  "mount",
                  "amount",
                  "amounted",
                  "amounting",
                ],
                answer: 1,
              },
              {
                options: [
                  "since",
                  "by",
                  "at",
                  "from",
                ],
                answer: 3,
              },
              {
                options: [
                  "difference",
                  "different",
                  "differently",
                  "differ",
                ],
                answer: 0,
              },
              {
                options: [
                  "reduction",
                  "reduced",
                  "reduce",
                  "reducing",
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
            title: "My favourite place",
            text: [
              "My favourite place is a small café at the end of my street. It's run {1} an old couple who have lived in our neighbourhood all their lives.",
              "The café isn't very big. There are only six tables, and the walls are covered with old photographs of the city. Most of the customers know each {2}.",
              "I often go there after school with my friends. We sit by the window and order hot chocolate and the café's famous apple cake. The owners always ask {3} our day and remember everyone's name. In winter, it's warm and cosy inside, {4} in summer there are tables outside under a big tree. Sometimes I go there alone to read a book or do my homework. It's much quieter than my house! Last month, the owners told us they might retire next year. I really hope someone will keep the café {5}. It wouldn't be the same neighbourhood {6} it.",
            ],
            answers: [
              [
                "by",
              ],
              [
                "other",
              ],
              [
                "about",
              ],
              [
                "and",
                "while",
              ],
              [
                "open",
              ],
              [
                "without",
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
              subject: "Learning an instrument",
              lines: [
                "I'd like to learn a musical instrument. [Say what you think]",
                "Do you play an instrument? [Tell Alex]",
                "Which instrument should I choose? [Suggest]",
                "How can I practise? [Give advice]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Alex,\n\nThat's a brilliant idea! Playing an instrument is a great way to relax.\n\nI've been playing the guitar for about three years. I had lessons at first, but now I mostly learn songs from videos online. I play with two friends at the weekends.\n\nI think you should choose the guitar or the keyboard. They're both quite easy for beginners, and you can play lots of popular songs on them. A guitar is also easy to carry around.\n\nTry to practise for fifteen or twenty minutes every day, rather than for hours once a week. Choose songs you really like, so you don't get bored.\n\nGood luck!\nDoğa",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A day without technology",
              lines: [
                "Could you live without technology for a day?",
                "What would you miss most?",
                "What would you do instead?",
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
            sample: "A day without screens\n\nLast month, my class tried to spend a whole Saturday without phones, computers or television. At first, I thought it would be impossible, because I use my phone for everything.\n\nThe thing I missed most was chatting with my friends online. I kept wanting to check my messages. I also missed listening to music on my phone while I walked.\n\nInstead, I spent the day doing things I usually forget about. I went for a long bike ride, baked biscuits with my little sister and read half of a novel. In the evening, my family played board games together. In the end, it was one of the best days I'd had for a long time, and I'd like to do it again.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The map was very old, and part of it was missing.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The map was very old, and part of it was missing. Selim had found it inside a book in his grandfather's attic. It showed the village, the river and a big cross next to an old tree.\n\nHe showed the map to his sister, Nil. 'It might be treasure!' she said. They took a spade and walked to the river. After searching for an hour, they found a very old tree.\n\nThey started digging. Soon the spade hit something hard. It was a small metal box. Inside, there were old letters, photos and a medal.\n\nThey took the box to their grandfather. When he saw it, he smiled. He'd buried it there as a boy, seventy years ago, and had forgotten about it.",
          },
        },
      ],
    },
  ],
};
