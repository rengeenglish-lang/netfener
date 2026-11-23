import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 60 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_60: CambridgeTest = {
  id: "preliminary-60",
  level: "preliminary",
  no: 60,
  title: "B1 Preliminary · Practice Test 60",
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
                    "Students taking the bus to the match should meet at the main gate at 1 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "There's no bus to the match.",
                  "Students going to the match should meet at a certain place.",
                  "The match is at 1 p.m.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ben, I've finished my part of the project. I'll email it to you tonight. Tom",
                  ],
                },
                question: "What will Tom do tonight?",
                options: [
                  "send Ben his work",
                  "start the project",
                  "meet Ben",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Use before the date shown on the lid.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You can use it any time.",
                  "The date is on the bottom.",
                  "You should use it before a certain date.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Lucy,",
                    "I'm sorry I can't come to your party. I'm going to my cousin's wedding that day. Have fun! Emma",
                  ],
                },
                question: "Why can't Emma go to the party?",
                options: [
                  "She is ill.",
                  "She is busy with homework.",
                  "She has another event.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "CAFÉ",
                    "Hot drinks half price before 9 a.m.",
                  ],
                },
                question: "When are hot drinks cheaper?",
                options: [
                  "early in the morning",
                  "in the afternoon",
                  "in the evening",
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
            instruction: "The young people below all want to watch a film. Read the descriptions of eight films. Decide which film would be the most suitable for each person.",
            options: [
              {
                title: "Ocean Deep",
                text: "A documentary about deep-sea creatures.",
              },
              {
                title: "Space Wars",
                text: "A science-fiction action film.",
              },
              {
                title: "The Comedy Club",
                text: "A funny film about stand-up comedians.",
              },
              {
                title: "Dancing Queen",
                text: "A musical about a girl who loves dancing.",
              },
              {
                title: "The Haunted House",
                text: "A scary horror film.",
              },
              {
                title: "Little Bear",
                text: "An animated film for young children.",
              },
              {
                title: "Champion",
                text: "A true story about a famous boxer.",
              },
              {
                title: "Love Story",
                text: "A romantic drama.",
              },
            ],
            items: [
              {
                text: "Kaan loves science fiction.",
                answer: 1,
              },
              {
                text: "Defne loves the sea.",
                answer: 0,
              },
              {
                text: "Burak wants to laugh.",
                answer: 2,
              },
              {
                text: "Asya loves musicals.",
                answer: 3,
              },
              {
                text: "Mert wants to watch something with his four-year-old brother.",
                answer: 5,
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
              title: "My first marathon",
              paragraphs: [
                "Last year, I ran my first marathon. It was the hardest thing I've ever done.",
                "I started training six months before the race. At first, I could only run five kilometres. But I gradually increased the distance, and by the end, I could run thirty kilometres.",
                "Training was very difficult. I had to run four times a week, even when it was raining or cold. Sometimes my legs hurt so much that I wanted to give up. But my running club encouraged me to keep going.",
                "On the day of the marathon, I was very nervous. The race was 42 kilometres long. The last ten kilometres were terrible, and I almost stopped. But the crowd cheered for me, and I kept going. When I crossed the finish line, I cried with happiness. I'm already training for my next marathon.",
              ],
            },
            items: [
              {
                question: "How long did the writer train?",
                options: [
                  "one month",
                  "six months",
                  "one year",
                  "two weeks",
                ],
                answer: 1,
              },
              {
                question: "How far could the writer run at first?",
                options: [
                  "thirty kilometres",
                  "forty-two kilometres",
                  "one kilometre",
                  "five kilometres",
                ],
                answer: 3,
              },
              {
                question: "What helped the writer keep going?",
                options: [
                  "her family",
                  "her running club",
                  "her coach",
                  "music",
                ],
                answer: 1,
              },
              {
                question: "When was the race most difficult?",
                options: [
                  "at the start",
                  "in the middle",
                  "after the race",
                  "in the last ten kilometres",
                ],
                answer: 3,
              },
              {
                question: "What is the writer doing now?",
                options: [
                  "training for another marathon",
                  "resting",
                  "coaching others",
                  "writing a book",
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
            title: "A museum of ice cream",
            text: [
              "In New York, there's a museum dedicated to ice cream. {1} It's called the Museum of Ice Cream.",
              "The museum has colourful rooms full of fun things to do. {2} There's even a swimming pool filled with plastic sprinkles!",
              "Visitors can also taste different ice cream flavours. {3} Some are very unusual, like ice cream that tastes like cereal.",
              "The museum is especially popular on social media. {4} Thousands of people post photos of the colourful rooms every day.",
              "The museum has been so successful that it has opened in other cities. {5} It shows that museums can be fun as well as educational.",
            ],
            sentences: [
              "The museum doesn't sell ice cream.",
              "It opened in 2016 and became popular very quickly.",
              "The rooms are perfect for taking photos.",
              "Photos are not allowed.",
              "Every room is designed to look like a different dessert.",
              "The museum is very boring.",
              "They're included in the ticket price.",
              "There are now museums in San Francisco and Singapore.",
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
            title: "The Olympic Games",
            text: [
              "The Olympic Games are the world's biggest sports event. They take place every four years, and athletes from more than 200 countries {1} part.",
              "The first Olympic Games were held in ancient Greece more than 2,700 years ago. They were part of a religious {2} in honour of the god Zeus.",
              "The modern Olympic Games began in Athens in 1896. At first, only men could compete, but women were allowed to take part in 1900. Today, there are Summer and Winter Olympics. The Summer Olympics include sports like swimming, athletics and gymnastics. The Winter Olympics include skiing and ice skating. The Olympic rings are a famous {3}. The five rings represent the five continents. Athletes who win receive gold, silver or bronze {4}. For many athletes, competing at the Olympics is the {5} of their careers. It's also a chance for people from different countries to come together in {6}.",
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
                  "festive",
                  "festivity",
                  "festival",
                  "festively",
                ],
                answer: 2,
              },
              {
                options: [
                  "symbolic",
                  "symbol",
                  "symbolise",
                  "symbolically",
                ],
                answer: 1,
              },
              {
                options: [
                  "medal up",
                  "medallist",
                  "medallion",
                  "medals",
                ],
                answer: 3,
              },
              {
                options: [
                  "high",
                  "highlight",
                  "highly",
                  "heightened",
                ],
                answer: 1,
              },
              {
                options: [
                  "peaceful",
                  "peacefully",
                  "pieces",
                  "peace",
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
            title: "A school trip",
            text: [
              "Last month, my class went on a school trip {1} the science museum in London. It was a long journey, but it was worth it.",
              "When we arrived, we were divided into small groups. Each group had a guide {2} showed us around. My favourite part was the space gallery. We saw a real rocket and learned about astronauts.",
              "Then we went to a workshop {3} we made our own robots. My robot could walk and pick up small objects! I was very proud of it. After lunch, we watched a 3D film about the planets. It was amazing. Before we left, we visited the museum shop. I bought a book {4} space for my little brother. On the way home, everyone was talking about the trip. It was the best school trip I've ever been {5}. I'd love to go back {6} my family.",
            ],
            answers: [
              [
                "to",
              ],
              [
                "who",
                "that",
              ],
              [
                "where",
              ],
              [
                "about",
                "on",
              ],
              [
                "on",
              ],
              [
                "with",
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
            instruction: "Read this email from your English-speaking friend Robin and the notes you have made. Write your email to Robin using all the notes. Write about 100 words.",
            input: {
              from: "Robin",
              subject: "A school project",
              lines: [
                "We have to do a project about another country. [Interesting!]",
                "Which country do you think I should choose? [Suggest one]",
                "How can I find information? [Give advice]",
                "Could you help me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Robin,\n\nThat sounds really interesting! I love learning about other countries.\n\nI think you should choose Japan. It has a fascinating culture, with ancient temples and modern technology. You could write about Japanese food, festivals and the history of the samurai.\n\nTo find information, you could use the internet, but make sure the websites are reliable. You should also go to the library and look for books about Japan. If you know anyone who has been to Japan, you could interview them.\n\nOf course I'll help you! I went to Japan last year, so I can show you my photos and tell you about my trip.\n\nBye,\nMira",
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
                "What job would you like to do?",
                "Why does it interest you?",
                "What do you need to do to get it?",
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
            sample: "Becoming an architect\n\nMy dream job is to be an architect. I've always been interested in buildings and how they're designed. When I travel, I love looking at different styles of architecture.\n\nI'd like to design buildings that are beautiful and good for the environment. I think it's important to use materials that don't damage the planet and to create buildings that use less energy.\n\nTo become an architect, I need to study for about seven years at university. I'll need to be good at maths and art. I'm working hard at school, and I'm also taking an art course at the weekends. I know it will be difficult, but I'm determined to succeed.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The parcel had arrived, but it wasn't what Leo expected.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The parcel had arrived, but it wasn't what Leo expected. He had ordered a new phone online, but when he opened the box, there was a small brown puppy inside!\n\nLeo couldn't believe it. The puppy looked up at him with big brown eyes. There was a note: 'Happy birthday, Leo! Love, Mum and Dad.'\n\nLeo ran downstairs. His parents were laughing. 'We told the delivery company to make it a surprise,' his dad said. 'Your phone is coming tomorrow!'\n\nLeo hugged his parents and then the puppy. He called it Buddy. It was the best birthday present he'd ever had.",
          },
        },
      ],
    },
  ],
};
