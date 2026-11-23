import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 61 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_61: CambridgeTest = {
  id: "preliminary-61",
  level: "preliminary",
  no: 61,
  title: "B1 Preliminary · Practice Test 61",
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
                    "The school library has new opening hours: 8 a.m. to 5 p.m., Monday to Friday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library is closed at weekends only in summer.",
                  "The library is open at different times now.",
                  "The library opens at 9.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Jo, can you feed my cat while I'm on holiday? I'll leave the key with my neighbour. Ann",
                  ],
                },
                question: "What does Ann want Jo to do?",
                options: [
                  "look after her pet",
                  "go on holiday with her",
                  "buy a cat",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Avoid contact with skin.",
                    "Wear gloves when using.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can touch it.",
                  "Gloves aren't needed.",
                  "You should protect your hands.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I left my jacket in your car yesterday. Could you bring it to school tomorrow? Sam",
                  ],
                },
                question: "What does Sam want Max to do?",
                options: [
                  "buy him a jacket",
                  "return his jacket",
                  "drive him to school",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SPORTS CENTRE",
                    "Members can bring a friend for free on Fridays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Everyone is free on Fridays.",
                  "Members' friends don't pay on Fridays.",
                  "The centre is closed on Fridays.",
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
            instruction: "The young people below all want to go to a festival. Read the descriptions of eight festivals. Decide which festival would be the most suitable for each person.",
            options: [
              {
                title: "Jazz Festival",
                text: "Three days of live jazz music in the park.",
              },
              {
                title: "Food Festival",
                text: "Try food from around the world.",
              },
              {
                title: "Film Festival",
                text: "Watch new films and meet the directors.",
              },
              {
                title: "Book Festival",
                text: "Meet authors and attend writing workshops.",
              },
              {
                title: "Science Festival",
                text: "Interactive experiments and talks.",
              },
              {
                title: "Dance Festival",
                text: "Watch and learn different styles of dance.",
              },
              {
                title: "Comic Festival",
                text: "Meet comic artists and dress up as characters.",
              },
              {
                title: "Art Festival",
                text: "Exhibitions and painting workshops.",
              },
            ],
            items: [
              {
                text: "Ece loves trying new food.",
                answer: 1,
              },
              {
                text: "Mert wants to meet a famous writer.",
                answer: 3,
              },
              {
                text: "Lale loves comics and dressing up.",
                answer: 6,
              },
              {
                text: "Can loves experiments.",
                answer: 4,
              },
              {
                text: "Zeynep loves jazz music.",
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
              title: "A holiday in the mountains",
              paragraphs: [
                "Last summer, my family went on a hiking holiday in the Alps. We walked for ten days and stayed in mountain huts every night.",
                "The first day was very difficult. We walked for eight hours, and my legs were very tired. I complained a lot, and I wanted to go home.",
                "But each day, it got easier. My legs got stronger, and I started to enjoy the walks. The views were incredible. We saw glaciers, lakes and snow-covered mountains. One day, we even saw a group of mountain goats.",
                "The huts were simple but comfortable. We slept in small rooms with other hikers. In the evenings, we ate together and talked about our day. By the end of the holiday, I didn't want to leave. I'd become much fitter and more confident.",
              ],
            },
            items: [
              {
                question: "Where did the family stay?",
                options: [
                  "in hotels",
                  "in tents",
                  "in mountain huts",
                  "with friends",
                ],
                answer: 2,
              },
              {
                question: "How did the writer feel on the first day?",
                options: [
                  "She was excited.",
                  "She was relaxed.",
                  "She wanted to go home.",
                  "She was bored.",
                ],
                answer: 2,
              },
              {
                question: "What happened each day?",
                options: [
                  "It got easier.",
                  "It got harder.",
                  "The weather got worse.",
                  "They walked less.",
                ],
                answer: 0,
              },
              {
                question: "What did the writer see one day?",
                options: [
                  "bears",
                  "wolves",
                  "eagles",
                  "mountain goats",
                ],
                answer: 3,
              },
              {
                question: "How had the writer changed by the end?",
                options: [
                  "She was more tired.",
                  "She was fitter and more confident.",
                  "She was bored.",
                  "She was ill.",
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
            title: "A village in the clouds",
            text: [
              "In Peru, there's a village that's so high up in the mountains that it's often above the clouds. {1} It's called Machu Picchu.",
              "The village was built by the Incas in the fifteenth century. {2} It was hidden for hundreds of years until it was rediscovered in 1911.",
              "The buildings are made of stone blocks that fit together perfectly. {3} The Incas didn't use any cement.",
              "Today, Machu Picchu is one of the most famous tourist attractions in the world. {4} Visitors can walk there on a four-day trail or take a train.",
              "Because of the large number of tourists, the government has introduced rules. {5} This helps to protect the site for future generations.",
            ],
            sentences: [
              "Some of the stones weigh more than fifty tonnes.",
              "The buildings are made of wood.",
              "It's about 2,400 metres above sea level.",
              "Only a limited number of visitors are allowed each day.",
              "Anyone can visit at any time.",
              "It was probably a home for the Inca emperor.",
              "The village is next to the sea.",
              "About 1.5 million people visit every year.",
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
            title: "Coffee",
            text: [
              "Coffee is one of the world's most popular drinks. Every day, people around the world drink more than two billion {1} of coffee.",
              "Coffee comes from the seeds of a plant that grows in tropical countries. Brazil is the largest {2} of coffee in the world.",
              "According to a legend, coffee was discovered in Ethiopia by a goat herder. He noticed that his goats became very {3} after eating the berries. Coffee contains caffeine, which helps people feel more awake. That's why many people drink it in the morning. However, too much caffeine can cause {4} problems and make you feel nervous. Doctors recommend that adults drink no more than four cups a day. Coffee shops have become very popular places to meet friends, study or work. In some cities, there's a coffee shop on almost every {5}. Many people say they couldn't live {6} their morning coffee!",
            ],
            gaps: [
              {
                options: [
                  "cup up",
                  "cupful",
                  "cupping",
                  "cups",
                ],
                answer: 3,
              },
              {
                options: [
                  "producer",
                  "produce",
                  "production",
                  "productive",
                ],
                answer: 0,
              },
              {
                options: [
                  "energy",
                  "energise",
                  "energetic",
                  "energetically",
                ],
                answer: 2,
              },
              {
                options: [
                  "sleepy",
                  "sleeping",
                  "sleep",
                  "sleepless",
                ],
                answer: 2,
              },
              {
                options: [
                  "corner",
                  "corners up",
                  "cornered",
                  "cornering",
                ],
                answer: 0,
              },
              {
                options: [
                  "with",
                  "within",
                  "withdraw",
                  "without",
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
            title: "A wonderful present",
            text: [
              "For my sixteenth birthday, my parents gave me the best present ever: a trip to London to see my favourite band in concert.",
              "We travelled {1} train, and the journey took three hours. When we arrived, we went sightseeing. We saw Big Ben, Buckingham Palace and the London Eye. It was my first time in London, {2} I was very excited.",
              "In the evening, we went to the concert. The venue was huge, and there were thousands of people. When the band came on stage, everyone screamed. They played all my favourite songs, {3} I sang along to every one. It was the {4} night of my life. After the concert, we went to a restaurant for dinner. I couldn't stop talking about the concert! The next day, we visited the British Museum before going home. I'll never forget that weekend. I'm so grateful {5} my parents for giving me such {6} amazing present.",
            ],
            answers: [
              [
                "by",
              ],
              [
                "so",
                "and",
              ],
              [
                "and",
              ],
              [
                "best",
                "greatest",
              ],
              [
                "to",
              ],
              [
                "an",
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
            instruction: "Read this email from your English-speaking friend Kim and the notes you have made. Write your email to Kim using all the notes. Write about 100 words.",
            input: {
              from: "Kim",
              subject: "A hobby",
              lines: [
                "I've started a new hobby: knitting! [Interesting!]",
                "Do you have any hobbies? [Tell Kim]",
                "Why do you think hobbies are important? [Give your opinion]",
                "Would you like to try knitting? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Kim,\n\nKnitting? That's really interesting! I've never tried it. What are you making?\n\nI have a few hobbies. I love playing tennis, and I play every weekend with my dad. I also enjoy drawing and reading. Recently, I started learning to play the ukulele.\n\nI think hobbies are very important, because they help us relax and forget about school or work. They're also a great way to meet people with the same interests. And learning a new skill makes you feel proud of yourself.\n\nYes, I'd love to try knitting! Maybe you could teach me? We could make scarves for the winter.\n\nBye,\nLara",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! The perfect day",
              lines: [
                "Describe your perfect day.",
                "Where would you be?",
                "Who would you spend it with?",
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
            sample: "My perfect day\n\nMy perfect day would start with breakfast on a balcony overlooking the sea. I'd have pancakes with fresh fruit and a big glass of orange juice.\n\nThen I'd spend the morning at the beach with my best friends. We'd swim, play volleyball and build sandcastles. For lunch, we'd have a picnic under the trees.\n\nIn the afternoon, I'd go shopping in a small town with my family and visit a museum. In the evening, we'd have dinner at a restaurant by the sea and watch the sunset. Finally, we'd sit on the beach and look at the stars. It would be the perfect end to a perfect day.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The old house at the end of the street had been empty for years.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The old house at the end of the street had been empty for years. Everyone said it was haunted. One evening, Tom and his friends decided to explore it.\n\nThey pushed open the creaky door and went inside. It was dark and dusty. Suddenly, they heard footsteps upstairs! Everyone froze. Then a light came on.\n\nAn old woman appeared at the top of the stairs. 'Hello,' she said kindly. 'I've just moved in. Would you like some tea?' The boys were very surprised. She was the new owner!\n\nThey sat in her kitchen and drank tea. She told them stories about the house. It wasn't haunted after all.",
          },
        },
      ],
    },
  ],
};
