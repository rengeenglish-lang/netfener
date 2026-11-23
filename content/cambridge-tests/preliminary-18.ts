import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 18 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_18: CambridgeTest = {
  id: "preliminary-18",
  level: "preliminary",
  no: 18,
  title: "B1 Preliminary · Practice Test 18",
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
                    "Students who want to join the chess club should sign up at the library by Friday.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Students should register for the chess club soon.",
                  "The chess club meets in the library on Friday.",
                  "The chess club is full.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ben, I've left my phone charger at your house. Can you bring it to school tomorrow? Jack",
                  ],
                },
                question: "What does Jack want Ben to do?",
                options: [
                  "buy a new charger",
                  "lend him his phone",
                  "bring something he left",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Contains glass. Handle with care.",
                    "This way up.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "The box is empty.",
                  "Be careful because the contents could break.",
                  "The box can be turned over.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Grace,",
                    "Our English homework is due on Monday, not Friday. Mrs Taylor told us at the end of the lesson. Ella",
                  ],
                },
                question: "What does Ella tell Grace?",
                options: [
                  "The homework is cancelled.",
                  "They have more time to do the homework.",
                  "The homework is due earlier.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "We are now open until 10 p.m. on Fridays and Saturdays.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The café is closed at weekends.",
                  "The café opens at 10 p.m.",
                  "The café stays open later at the weekend.",
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
            instruction: "The young people below all want to choose a book to read on holiday. Read the descriptions of eight books. Decide which book would be the most suitable for each person.",
            options: [
              {
                title: "The Secret Island",
                text: "An adventure story about children who discover a hidden island with dinosaurs.",
              },
              {
                title: "Kitchen Chemistry",
                text: "Science experiments you can do in the kitchen, with clear explanations.",
              },
              {
                title: "Famous Explorers",
                text: "True stories of people who travelled to unknown places, like the Arctic and the Amazon.",
              },
              {
                title: "Laugh Out Loud",
                text: "A collection of jokes and funny stories for all ages.",
              },
              {
                title: "The Last Dragon",
                text: "A fantasy novel about a girl who must save the last dragon in the world.",
              },
              {
                title: "Football Legends",
                text: "Biographies of the greatest footballers of all time, with lots of photos.",
              },
              {
                title: "Draw Anything",
                text: "Step-by-step guides to drawing animals, people and buildings.",
              },
              {
                title: "Mystery at the Museum",
                text: "A detective story about stolen paintings in a big city museum.",
              },
            ],
            items: [
              {
                text: "Emre loves solving crimes and wants to read a story set in a city.",
                answer: 7,
              },
              {
                text: "Asya wants to learn about real people who went on amazing journeys.",
                answer: 2,
              },
              {
                text: "Kaan wants to improve his drawing skills.",
                answer: 6,
              },
              {
                text: "Lale loves stories about magic and imaginary creatures.",
                answer: 4,
              },
              {
                text: "Burak just wants something to make him laugh on the beach.",
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
              title: "Learning to play the drums",
              paragraphs: [
                "I've always loved music, but I didn't start playing an instrument until I was fifteen. I chose the drums because I loved the energy of rock music. My parents weren't very happy about the noise!",
                "At first, I practised on a practice pad, which is a quiet rubber drum. It was boring, but my teacher said it would help me learn the basic rhythms. After three months, I was allowed to start on a real drum kit.",
                "The hardest thing was learning to use my hands and feet at the same time. I often felt clumsy and frustrated. But my teacher was very patient, and she told me that every drummer feels like this at the beginning.",
                "Now, two years later, I play in a band with three friends. We've played at school parties and even at a small festival. My parents have got used to the noise, and they even came to watch us play last month.",
              ],
            },
            items: [
              {
                question: "Why did the writer choose the drums?",
                options: [
                  "Her parents played drums.",
                  "Her teacher suggested it.",
                  "She loved rock music.",
                  "It was cheap.",
                ],
                answer: 2,
              },
              {
                question: "What was the practice pad for?",
                options: [
                  "learning basic rhythms",
                  "playing loudly",
                  "recording music",
                  "performing",
                ],
                answer: 0,
              },
              {
                question: "What was difficult for the writer?",
                options: [
                  "finding a teacher",
                  "learning to read music",
                  "buying drums",
                  "using her hands and feet together",
                ],
                answer: 3,
              },
              {
                question: "What did her teacher say?",
                options: [
                  "She should stop playing.",
                  "All drummers feel this way at first.",
                  "She was very good.",
                  "She should practise less.",
                ],
                answer: 1,
              },
              {
                question: "How do the writer's parents feel now?",
                options: [
                  "They accept the noise.",
                  "They are still unhappy.",
                  "They want her to stop.",
                  "They don't know she plays.",
                ],
                answer: 0,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "gapped-text",
            instruction: "Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.",
            title: "The village that runs on the sun",
            text: [
              "In a small village in India, every house gets its electricity from the sun. {1} Before, the village had no electricity at all.",
              "In 2014, an organisation installed solar panels on the roofs of the houses. {2} The panels store energy in batteries during the day.",
              "This means that families can use lights and charge their phones at night. {3} Children can now do their homework after dark.",
              "The village has also opened a small shop that sells cold drinks, using a solar-powered fridge. {4} Some women in the village have started businesses making clothes with electric sewing machines.",
              "The project has been so successful that hundreds of other villages want to copy it. {5} The organisers say solar power could change the lives of millions of people.",
            ],
            sentences: [
              "The village is in a very rainy area.",
              "This brings in money for the village.",
              "The panels stopped working after a month.",
              "The villagers paid a small amount every month for them.",
              "It is one of the first villages in the country to do this.",
              "Several have already installed their own panels.",
              "Most families prefer oil lamps.",
              "Before, they had to use dangerous oil lamps.",
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
            title: "The Olympic Games",
            text: [
              "The Olympic Games are the world's biggest sporting event. Athletes from more than 200 countries {1} part.",
              "The ancient Olympic Games began in Greece more than 2,700 years ago. They were held every four years in Olympia and were part of a religious festival.",
              "The modern Olympics started in 1896 in Athens. At first, only a few countries took part, and women weren't allowed to {2}. Today, there are more than forty different sports, and both men and women {3}. The Winter Olympics were introduced in 1924, with sports like skiing and ice skating. Hosting the Olympics can be very {4}, but many cities want to do it because it brings tourists and {5} the city's image. For athletes, winning an Olympic gold medal is the {6} achievement of their career.",
            ],
            gaps: [
              {
                options: [
                  "take",
                  "make",
                  "have",
                  "do",
                ],
                answer: 0,
              },
              {
                options: [
                  "fight",
                  "race up",
                  "compete",
                  "play up",
                ],
                answer: 2,
              },
              {
                options: [
                  "part up",
                  "join up",
                  "participate",
                  "attend up",
                ],
                answer: 2,
              },
              {
                options: [
                  "expensive",
                  "cost",
                  "price",
                  "valuable",
                ],
                answer: 0,
              },
              {
                options: [
                  "grows",
                  "rises",
                  "raises up",
                  "improves",
                ],
                answer: 3,
              },
              {
                options: [
                  "great",
                  "greatest",
                  "greater",
                  "greatly",
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
            title: "My first job",
            text: [
              "When I was sixteen, I got a summer job at an ice cream shop by the sea. I worked there {1} five days a week, from ten until six.",
              "The job was harder than I expected. On hot days, there were long queues of people, and I had to work very quickly. My arms ached from scooping ice cream all day! But I enjoyed talking to the customers, {2} were mostly happy families on holiday.",
              "My boss, Mrs Green, was very kind. She let me try every flavour, {3} I soon knew which ones to recommend. My favourite was strawberry. At the end of the summer, I had saved enough money to buy a new laptop. More importantly, I'd learned how to work {4} a team and how to deal {5} difficult customers. I'm going to work there again {6} summer.",
            ],
            answers: [
              [
                "for",
              ],
              [
                "who",
              ],
              [
                "so",
              ],
              [
                "in",
                "as",
              ],
              [
                "with",
              ],
              [
                "next",
                "this",
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
              subject: "A charity event",
              lines: [
                "Our school is organising a charity run next month. [Great idea!]",
                "Would you like to take part? [Answer]",
                "Which charity do you think we should support? [Suggest one]",
                "How can we encourage more people to join? [Give ideas]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nWhat a great idea! I think it's really important to help other people.\n\nYes, I'd love to take part. I'm not a very fast runner, but I'll do my best, and I'll ask my family and neighbours to sponsor me.\n\nI think we should support the children's hospital in our town. They do amazing work, and my little cousin was treated there last year.\n\nTo encourage more people to join, we could put posters around the school and talk about it in assemblies. We could also offer prizes for people who raise the most money.\n\nSee you soon,\nIrem",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A person I'd like to meet",
              lines: [
                "Is there a famous person, alive or from history, that you'd like to meet?",
                "Why would you like to meet them?",
                "What would you ask them?",
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
            sample: "Dinner with an explorer\n\nThe person I'd most like to meet is the explorer Ernest Shackleton. In 1914, he tried to cross Antarctica, but his ship got stuck in the ice. For almost two years, he and his men survived in terrible conditions, and in the end, he saved every member of his team.\n\nI'd like to meet him because he was an incredible leader who never gave up. I'd ask him how he stayed positive when everything was going wrong, and how he made his men trust him.\n\nI think we could all learn a lot from his courage and determination.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was supposed to be a normal day at school.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was supposed to be a normal day at school. But when Leo walked into his classroom, there was a strange man sitting at the teacher's desk.\n\n'Good morning,' the man said with a smile. 'I'm your new teacher for today.' He was wearing a long coat and a funny hat.\n\nThe lesson was the most exciting one Leo had ever had. The man told amazing stories about travelling around the world, and he showed them photos of elephants, volcanoes and ancient cities.\n\nAt the end of the day, the man took off his hat. It was Leo's grandfather! He had come to surprise his grandson's class.",
          },
        },
      ],
    },
  ],
};
