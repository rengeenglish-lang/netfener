import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 70 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_70: CambridgeTest = {
  id: "preliminary-70",
  level: "preliminary",
  no: 70,
  title: "B1 Preliminary · Practice Test 70",
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
                    "Students who want to join the choir should come to the music room on Wednesday lunchtime.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The choir is full.",
                  "The music room is closed.",
                  "Students interested in singing should go to the music room.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ella, can you lend me your notes from the history lesson? I was ill yesterday. Kate",
                  ],
                },
                question: "What does Kate want?",
                options: [
                  "to help Ella",
                  "to buy notes",
                  "to borrow Ella's notes",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Do not freeze.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "You shouldn't put it in the freezer.",
                  "Keep it frozen.",
                  "It can be frozen.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I'm selling my old bike. It's in good condition. Do you want to buy it? Ben",
                  ],
                },
                question: "What is Ben doing?",
                options: [
                  "asking to borrow a bike",
                  "offering to sell his bike",
                  "asking for help",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Photos are allowed, but please don't use flash.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can take photos without a flash.",
                  "Photos are not allowed.",
                  "You must use a flash.",
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
            instruction: "The young people below all want to take a holiday course. Read the descriptions of eight courses. Decide which course would be the most suitable for each person.",
            options: [
              {
                title: "Surfing",
                text: "Learn to surf on the beach. Must be a good swimmer.",
              },
              {
                title: "Cooking",
                text: "Learn to cook Italian dishes.",
              },
              {
                title: "Photography",
                text: "Learn to take great photos.",
              },
              {
                title: "Art",
                text: "Painting and drawing classes.",
              },
              {
                title: "Language",
                text: "Learn Spanish in a week.",
              },
              {
                title: "Music",
                text: "Learn to play the guitar.",
              },
              {
                title: "Dance",
                text: "Learn hip hop and street dance.",
              },
              {
                title: "Science",
                text: "Experiments and robotics.",
              },
            ],
            items: [
              {
                text: "Kaan is a good swimmer and loves the sea.",
                answer: 0,
              },
              {
                text: "Defne wants to learn to take better photos.",
                answer: 2,
              },
              {
                text: "Mert wants to learn a new language.",
                answer: 4,
              },
              {
                text: "Selin loves dancing.",
                answer: 6,
              },
              {
                text: "Can wants to build robots.",
                answer: 7,
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
              title: "A summer job",
              paragraphs: [
                "Last summer, I worked at an ice cream shop by the beach. It was my first job, and I was very excited.",
                "The shop was always very busy, especially on hot days. Sometimes there were long queues of people waiting for ice cream. I had to work very quickly.",
                "At first, I found it difficult to remember all the flavours. There were more than thirty! But after a few days, I learned them all. My favourite was chocolate and mint.",
                "I really enjoyed the job. I met lots of interesting people, and the other staff were very friendly. I saved enough money to buy a new phone. The job taught me how to work hard and be responsible. I'm going to work there again next summer.",
              ],
            },
            items: [
              {
                question: "Where was the ice cream shop?",
                options: [
                  "in the city",
                  "by the beach",
                  "at the airport",
                  "in a shopping centre",
                ],
                answer: 1,
              },
              {
                question: "When was the shop busiest?",
                options: [
                  "in the morning",
                  "at weekends",
                  "in winter",
                  "on hot days",
                ],
                answer: 3,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "remembering the flavours",
                  "using the till",
                  "serving customers",
                  "making ice cream",
                ],
                answer: 0,
              },
              {
                question: "What did the writer buy?",
                options: [
                  "a bike",
                  "clothes",
                  "a phone",
                  "a laptop",
                ],
                answer: 2,
              },
              {
                question: "What will the writer do next summer?",
                options: [
                  "go on holiday",
                  "get a different job",
                  "work at the shop again",
                  "study",
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
            title: "A city built on water",
            text: [
              "In Mexico, there's a city that was built on a lake. {1} It's called Mexico City, and it's one of the largest cities in the world.",
              "The city was originally built by the Aztecs in the fourteenth century. {2} They called it Tenochtitlan.",
              "The Aztecs built islands and canals in the lake. {3} They grew food on floating gardens.",
              "When the Spanish arrived in the sixteenth century, they drained the lake. {4} Today, the city is slowly sinking because it's built on soft ground.",
              "Some of the old canals still exist in the south of the city. {5} Tourists can take colourful boats along them.",
            ],
            sentences: [
              "Nobody lives in the city.",
              "They built new buildings on top of the old ones.",
              "The city is in the desert.",
              "It was the capital of their empire.",
              "The lake has almost completely disappeared now.",
              "They're a popular tourist attraction.",
              "The city was built last century.",
              "People travelled around the city by boat.",
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
            title: "Tea",
            text: [
              "Tea is the second most popular drink in the world after water. It's made from the leaves of the tea plant, which grows in hot, wet {1}.",
              "Tea was first drunk in China about 5,000 years ago. According to a legend, an emperor discovered it when some leaves fell into his cup of hot water.",
              "Tea later {2} to Japan, India and Europe. In Britain, tea became very popular in the eighteenth century. Today, the British drink about 100 million cups of tea every day! There are many different {3} of tea, such as green tea, black tea and white tea. Each type has a different {4}. In some countries, tea is an important part of the culture. In Japan, there are special tea ceremonies. In Turkey, tea is served in small glasses and is a sign of {5}. Scientists say that green tea may be good for your health, because it contains {6} that protect your body.",
            ],
            gaps: [
              {
                options: [
                  "climate up",
                  "climates",
                  "climatic",
                  "climatically",
                ],
                answer: 1,
              },
              {
                options: [
                  "spreading",
                  "spreads",
                  "spreader",
                  "spread",
                ],
                answer: 3,
              },
              {
                options: [
                  "typical",
                  "types",
                  "typing",
                  "typed",
                ],
                answer: 1,
              },
              {
                options: [
                  "flavoured",
                  "flavouring",
                  "flavourful",
                  "flavour",
                ],
                answer: 3,
              },
              {
                options: [
                  "hospitality",
                  "hospital",
                  "hospitable",
                  "hospitably",
                ],
                answer: 0,
              },
              {
                options: [
                  "substance up",
                  "substantial",
                  "substances",
                  "substantially",
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
            title: "A visit to London",
            text: [
              "Last year, I visited London {1} my school. It was my first time in the city, and I was very excited.",
              "We travelled there by coach, and the journey took four hours. When we arrived, we went straight to our hotel, which was near the British Museum.",
              "On the first day, we visited the Tower of London. We saw the Crown Jewels, {2} are very beautiful. Then we went on a boat trip along the River Thames. We saw lots of famous buildings, like the Houses of Parliament and Big Ben. On the second day, we visited the Natural History Museum. My favourite part was the dinosaur gallery. In the evening, we went to see a musical. It was amazing! The trip was the best school trip I've {3} been on. I learned so much {4} the history of London. I'd love to go back {5} my family {6} day.",
            ],
            answers: [
              [
                "with",
              ],
              [
                "which",
              ],
              [
                "ever",
              ],
              [
                "about",
              ],
              [
                "with",
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
            instruction: "Read this email from your English-speaking friend Jo and the notes you have made. Write your email to Jo using all the notes. Write about 100 words.",
            input: {
              from: "Jo",
              subject: "Moving house",
              lines: [
                "My family is moving to a new house next month! [Exciting!]",
                "What do you think I should do in my new bedroom? [Give ideas]",
                "How can I make new friends in my new area? [Give advice]",
                "Will you come and visit me? [Answer]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Jo,\n\nThat's so exciting! A new house is a fresh start.\n\nIn your new bedroom, you could paint the walls a bright colour and put up posters of your favourite bands. You could also buy some plants to make it feel more homely. A comfortable chair for reading would be nice too!\n\nTo make new friends, you could join a club or a sports team in your new area. You could also say hello to your neighbours and introduce yourself. If there are children nearby, invite them to play.\n\nOf course I'll come and visit you! Just tell me when you've moved in.\n\nBye,\nEce",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! My favourite book",
              lines: [
                "What's your favourite book?",
                "What is it about?",
                "Why do you like it?",
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
            sample: "The best book I've ever read\n\nMy favourite book is 'Harry Potter and the Philosopher's Stone' by J.K. Rowling. It's about a boy called Harry who discovers on his eleventh birthday that he's a wizard. He goes to a school for magic called Hogwarts, where he makes friends and has amazing adventures.\n\nI like this book because it's full of magic and imagination. The characters are very interesting, and I feel like I know them. The story is also exciting, with lots of mysteries and surprises.\n\nI first read it when I was nine, and I've read it many times since then. It always makes me happy. I'd recommend it to everyone!",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The phone rang, and Emma's heart began to beat faster.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The phone rang, and Emma's heart began to beat faster. She had been waiting for this call all day. It was from the university.\n\nShe answered nervously. 'Hello, is that Emma Smith?' a voice said. 'I'm calling to tell you that you've been accepted to study medicine at our university.'\n\nEmma screamed with happiness. She had worked so hard for this. She had studied every evening and every weekend for two years.\n\nShe ran downstairs to tell her parents. They hugged her and cried. 'We're so proud of you,' her mother said. That evening, the whole family went out for a special dinner to celebrate.",
          },
        },
      ],
    },
  ],
};
