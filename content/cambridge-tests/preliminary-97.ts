import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 97 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_97: CambridgeTest = {
  id: "preliminary-97",
  level: "preliminary",
  no: 97,
  title: "B1 Preliminary · Practice Test 97",
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
                    "LIBRARY",
                    "Children's story time: every Wednesday at 4 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The library closes on Wednesday.",
                  "There are stories for children every Wednesday.",
                  "Story time is for adults.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Emre, I'm stuck in traffic. Start the meeting without me. I'll be there in 20 minutes. Can",
                  ],
                },
                question: "What does Can want Emre to do?",
                options: [
                  "start the meeting",
                  "cancel the meeting",
                  "wait for him",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Use within three days of opening.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "Don't open it for three days.",
                  "It lasts for three weeks.",
                  "After you open it, use it in three days.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Sena,",
                    "I've found a great flat near the university. Do you want to share it with me? Gizem",
                  ],
                },
                question: "Why is Gizem writing?",
                options: [
                  "to sell a flat",
                  "to ask Sena to share a flat",
                  "to visit the university",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "GYM",
                    "Please wipe the machines after use.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Don't use the machines.",
                  "Clean the machines when you finish.",
                  "The machines are broken.",
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
            instruction: "The young people below all want to join a volunteer project. Read the descriptions of eight projects. Decide which project would be the most suitable for each person.",
            options: [
              {
                title: "Beach Clean",
                text: "Collect rubbish from the beach.",
              },
              {
                title: "Reading Buddies",
                text: "Read with young children.",
              },
              {
                title: "Tree Planting",
                text: "Plant trees in the city park.",
              },
              {
                title: "Dog Walkers",
                text: "Walk dogs from the shelter.",
              },
              {
                title: "Food Bank",
                text: "Sort food for families in need.",
              },
              {
                title: "Senior Tech",
                text: "Teach older people to use phones.",
              },
              {
                title: "Sports Coach",
                text: "Help coach a children's football team.",
              },
              {
                title: "Museum Guide",
                text: "Show visitors around the museum.",
              },
            ],
            items: [
              {
                text: "Ilkay loves dogs.",
                answer: 3,
              },
              {
                text: "Koray wants to help older people with technology.",
                answer: 5,
              },
              {
                text: "Leyla wants to read with children.",
                answer: 1,
              },
              {
                text: "Murat wants to coach football.",
                answer: 6,
              },
              {
                text: "Nil wants to plant trees.",
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
              title: "Living on a farm",
              paragraphs: [
                "I've lived on a farm my whole life. We have cows, sheep, chickens and two horses. My parents also grow apples and pears.",
                "People in the city often think farm life is easy and relaxing. But it's actually very hard work. We get up at six every morning, even at weekends, to feed the animals.",
                "My job is to collect the eggs and look after the chickens. In autumn, the whole family helps to pick the fruit. It takes about three weeks, and sometimes my friends come to help too.",
                "The best thing about living on a farm is being outside all the time. I know a lot about animals and nature. But sometimes I wish we lived closer to my friends. The nearest town is fifteen kilometres away.",
              ],
            },
            items: [
              {
                question: "What do the writer's parents grow?",
                options: [
                  "vegetables",
                  "flowers",
                  "apples and pears",
                  "wheat",
                ],
                answer: 2,
              },
              {
                question: "What do city people often think?",
                options: [
                  "Farm life is dangerous.",
                  "Farmers are rich.",
                  "Farm life is easy.",
                  "Farms are noisy.",
                ],
                answer: 2,
              },
              {
                question: "What is the writer's job?",
                options: [
                  "collecting eggs",
                  "milking cows",
                  "riding horses",
                  "selling fruit",
                ],
                answer: 0,
              },
              {
                question: "How long does fruit picking take?",
                options: [
                  "one day",
                  "three months",
                  "a weekend",
                  "about three weeks",
                ],
                answer: 3,
              },
              {
                question: "What does the writer sometimes wish?",
                options: [
                  "to have more animals",
                  "to live closer to friends",
                  "to move to the city forever",
                  "to stop school",
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
            title: "A train through the mountains",
            text: [
              "In Switzerland, there's a train journey that takes passengers through some of the most beautiful scenery in Europe. {1} It's called the Glacier Express.",
              "The journey takes about eight hours. {2} It's often called the slowest express train in the world.",
              "The train travels over 291 bridges and through 91 tunnels. {3} It also climbs to more than 2,000 metres.",
              "The carriages have very large windows. {4} Passengers can see the mountains, lakes and villages clearly.",
              "Many people take the journey in winter, when everything is covered in snow. {5} It's an experience they never forget.",
            ],
            sentences: [
              "Some of them are very high above deep valleys.",
              "There are no windows on the train.",
              "It travels between two famous mountain towns.",
              "They say it looks like a fairy tale.",
              "The journey only takes ten minutes.",
              "The train only goes at about 35 kilometres an hour.",
              "The train is the fastest in the world.",
              "Some of them even go up into the roof.",
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
            title: "The Olympic Games",
            text: [
              "The first Olympic Games took place in ancient Greece nearly 3,000 years ago. They were held every four years in Olympia, in honour of the god Zeus.",
              "In the ancient Games, there were only a few events, including running, wrestling and chariot racing. Only men could {1} part, and the winners received a crown made of olive leaves.",
              "The modern Olympic Games began in Athens in 1896. They were the idea of a Frenchman called Pierre de Coubertin, who believed that sport could bring {2} together. Today, the Summer Olympics have more than 300 events, and athletes from over 200 countries compete. The Winter Olympics, which {3} in 1924, include sports like skiing and ice hockey. The Olympic symbol is five rings of different colours. They {4} the five continents of the world. Hosting the Olympics is very expensive, but cities hope that it will bring tourists and {5} their economy. For athletes, winning an Olympic medal is the greatest {6} of their career.",
            ],
            gaps: [
              {
                options: [
                  "took",
                  "taking",
                  "taken",
                  "take",
                ],
                answer: 3,
              },
              {
                options: [
                  "nations",
                  "national",
                  "nationally",
                  "nationality",
                ],
                answer: 0,
              },
              {
                options: [
                  "start",
                  "starting",
                  "started",
                  "starter",
                ],
                answer: 2,
              },
              {
                options: [
                  "representation",
                  "representative",
                  "represent",
                  "represented",
                ],
                answer: 2,
              },
              {
                options: [
                  "improve",
                  "improvement",
                  "improved",
                  "improving",
                ],
                answer: 0,
              },
              {
                options: [
                  "achieve",
                  "achieved",
                  "achievable",
                  "achievement",
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
            title: "A trip to the mountains",
            text: [
              "Last winter, my class went on a trip to the mountains {1} five days. We stayed in a big wooden house near a ski resort.",
              "Most of us had never skied before, so we had lessons every morning. On the first day, I fell over about twenty times! But by the end of the week, I could ski down the easy slopes {2} falling.",
              "In the afternoons, we went sledging and built snowmen. One afternoon, we walked to a frozen lake. It was so cold that we could see our breath in the air. In the evenings, we played games and sang songs in front of the fire. Our teachers even joined {3}. On the last night, we had a party and gave prizes. I won the prize for the {4} improved skier, which made me very happy. The trip was one of the best experiences I've {5} had. I made new friends and learned a new sport. I can't wait to go skiing {6}.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "without",
              ],
              [
                "in",
              ],
              [
                "most",
              ],
              [
                "ever",
              ],
              [
                "again",
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
            instruction: "Read this email from your English-speaking friend Pat and the notes you have made. Write your email to Pat using all the notes. Write about 100 words.",
            input: {
              from: "Pat",
              subject: "Exams",
              lines: [
                "I've got exams next month and I'm worried. [Reply]",
                "How do you prepare for exams? [Tell Pat]",
                "What should I do the night before? [Give advice]",
                "Shall we study together? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Pat,\n\nDon't worry! I'm sure you'll do well if you start preparing now.\n\nWhen I prepare for exams, I make a timetable and study a little every day. I write short notes on cards and test myself. I also do practice papers, because they show me which topics I need to work on.\n\nThe night before an exam, you shouldn't study too late. Just look at your notes quickly, then relax. Eat a good dinner and go to bed early so you're not tired. Remember to check what you need to bring!\n\nYes, let's study together. We could meet at the library on Saturday mornings. What do you think?\n\nGood luck,\nNazım",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! An unusual hobby",
              lines: [
                "Do you have an unusual hobby?",
                "How did you start it?",
                "Why do you enjoy it?",
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
            sample: "Collecting old keys\n\nMy hobby is quite unusual: I collect old keys. I have more than two hundred of them, from tiny keys for jewellery boxes to huge iron keys for old doors.\n\nI started when I was ten. My grandmother gave me a box of old keys she had found in her house. Each one looked different, and I started wondering what doors they had opened. Since then, I've bought keys at markets and people have given me keys they don't need.\n\nI enjoy my hobby because every key has a story. Some of my keys are more than a hundred years old. I like to imagine the houses, castles and secret boxes they once belonged to. My friends think it's strange, but I think it's fascinating.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'Leyla looked at the ticket in her hand and smiled.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "Leyla looked at the ticket in her hand and smiled. After saving her pocket money for a whole year, she was finally going to see her favourite band in concert.\n\nThe concert hall was huge, and there were thousands of fans. Leyla and her best friend found their seats near the front. When the lights went down, everyone screamed.\n\nThe band played all her favourite songs. Then, in the middle of the concert, the singer asked if anyone wanted to come on stage. Leyla put up her hand, and to her surprise, the singer chose her!\n\nShe sang the chorus of her favourite song with the band. Her legs were shaking, but she didn't care. It was the most amazing night of her life.",
          },
        },
      ],
    },
  ],
};
