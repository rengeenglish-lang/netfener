import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 24 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_24: CambridgeTest = {
  id: "preliminary-24",
  level: "preliminary",
  no: 24,
  title: "B1 Preliminary · Practice Test 24",
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
                    "SWIMMING POOL",
                    "Children under 8 must be accompanied by an adult in the water.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "Children under 8 can't swim.",
                  "Young children need an adult with them in the pool.",
                  "Adults can't swim with children.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Ella, I've finished the history project. I'll send it to you tonight so you can check it. Ruby",
                  ],
                },
                question: "What will Ruby do tonight?",
                options: [
                  "send Ella some work to look at",
                  "start the project",
                  "meet Ella",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Recyclable packaging.",
                    "Please put in the correct bin.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "The packaging can't be recycled.",
                  "Throw the packaging away.",
                  "The packaging can be recycled.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Max,",
                    "I'm going to be late for football practice. Can you tell the coach I'll be there at half past four? Jack",
                  ],
                },
                question: "What does Jack want Max to do?",
                options: [
                  "go to practice early",
                  "cancel practice",
                  "give the coach a message",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "The museum café is closed for repairs. Drinks are available from machines in the main hall.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can still get a drink in the museum.",
                  "The museum is closed.",
                  "The café sells drinks.",
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
            instruction: "The young people below all want to buy a present for a friend. Read the descriptions of eight shops. Decide which shop would be the most suitable for each person.",
            options: [
              {
                title: "Tech World",
                text: "Phones, headphones and computer games. Student discounts available.",
              },
              {
                title: "Book Corner",
                text: "New and second-hand books for all ages. Gift wrapping free.",
              },
              {
                title: "Garden Centre",
                text: "Plants, flowers and gardening tools. Expert advice available.",
              },
              {
                title: "Sports Plus",
                text: "Clothes and equipment for all sports, including football and tennis.",
              },
              {
                title: "Art Supplies",
                text: "Paints, brushes, sketchbooks and craft materials.",
              },
              {
                title: "Music Store",
                text: "Instruments, sheet music and accessories. Guitar lessons upstairs.",
              },
              {
                title: "Sweet Treats",
                text: "Handmade chocolates and sweets. Personalised boxes available.",
              },
              {
                title: "Fashion Fix",
                text: "Trendy clothes and accessories for teenagers.",
              },
            ],
            items: [
              {
                text: "Mert's friend loves drawing and painting.",
                answer: 4,
              },
              {
                text: "Elif's friend has just started learning the guitar.",
                answer: 5,
              },
              {
                text: "Kerem's friend loves chocolate, and he wants to put his friend's name on the box.",
                answer: 6,
              },
              {
                text: "Lale's friend loves reading, and Lale wants the present wrapped.",
                answer: 1,
              },
              {
                text: "Burak's friend plays tennis every weekend.",
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
              title: "Living without a car",
              paragraphs: [
                "Two years ago, my family decided to sell our car. My parents wanted to save money and do something good for the environment. I was thirteen, and I thought it was a terrible idea.",
                "At first, life was difficult. We had to plan everything carefully. Shopping took longer, because we had to carry everything home on foot or by bike. On rainy days, I really missed the car.",
                "But slowly, we got used to it. I started cycling to school, and I became much fitter. My parents found that they had more money for holidays and hobbies. We also spent more time together as a family, walking and cycling.",
                "Now I don't miss the car at all. When we need to travel long distances, we take the train, which is more relaxing anyway. I think more families should try living without a car. It's easier than you think.",
              ],
            },
            items: [
              {
                question: "Why did the family sell their car?",
                options: [
                  "because it was broken",
                  "to save money and help the environment",
                  "because nobody could drive",
                  "to buy a new one",
                ],
                answer: 1,
              },
              {
                question: "What did the writer think at first?",
                options: [
                  "It was a great idea.",
                  "It didn't matter.",
                  "It was funny.",
                  "It was a bad idea.",
                ],
                answer: 3,
              },
              {
                question: "What was difficult at first?",
                options: [
                  "They couldn't go to school.",
                  "Shopping took more time.",
                  "They had no money.",
                  "They had no bikes.",
                ],
                answer: 1,
              },
              {
                question: "What advantage did the writer's parents find?",
                options: [
                  "They had more free time.",
                  "They worked less.",
                  "They could sleep more.",
                  "They had more money.",
                ],
                answer: 3,
              },
              {
                question: "How do they travel long distances now?",
                options: [
                  "by train",
                  "by car",
                  "by plane",
                  "by bike",
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
            title: "A festival of light",
            text: [
              "Every November, people in many parts of India celebrate Diwali, the festival of lights. {1} It lasts for five days and is one of the most important festivals of the year.",
              "Before the festival, families clean and decorate their homes. {2} They also buy new clothes and prepare special sweets.",
              "On the main night of Diwali, people light small oil lamps called diyas. {3} The lamps are placed in windows, doorways and gardens.",
              "In the evening, there are spectacular fireworks displays. {4} Families also visit friends and relatives and exchange presents.",
              "Diwali is now celebrated by Indian communities all over the world. {5} In cities like London and Toronto, thousands of people come to watch the celebrations.",
            ],
            sentences: [
              "Diwali is only celebrated in small villages.",
              "It celebrates the victory of light over darkness.",
              "The sky is filled with colour and noise until late at night.",
              "Fireworks are not allowed during Diwali.",
              "They often draw colourful patterns called rangoli on the floor.",
              "The festival takes place in summer.",
              "These are believed to bring good luck to the home.",
              "Some cities organise big public events.",
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
            title: "The Moon",
            text: [
              "The Moon is Earth's only natural satellite. It is about 384,000 kilometres away, and it takes about twenty-seven days to {1} the Earth.",
              "The Moon doesn't produce its own light. We can see it because it {2} light from the Sun. As it moves around the Earth, we see different parts of it lit up, which is why it seems to change shape.",
              "The Moon has a strong effect on the Earth. Its gravity {3} the tides in the oceans. Twelve astronauts have walked on the Moon, the first in 1969. Because there is no wind on the Moon, their footprints are still there today. Scientists are now planning to send people back to the Moon. They hope to build a {4} base where astronauts can live and work. One day, the Moon might even be used as a {5} point for journeys to Mars. Who knows? Perhaps you'll {6} it one day!",
            ],
            gaps: [
              {
                options: [
                  "orbit",
                  "turn",
                  "spin",
                  "move up",
                ],
                answer: 0,
              },
              {
                options: [
                  "shines",
                  "lights up",
                  "reflects",
                  "throws",
                ],
                answer: 2,
              },
              {
                options: [
                  "makes up",
                  "causes",
                  "does",
                  "gives",
                ],
                answer: 1,
              },
              {
                options: [
                  "forever",
                  "always",
                  "lasting up",
                  "permanent",
                ],
                answer: 3,
              },
              {
                options: [
                  "beginning up",
                  "starting",
                  "first",
                  "opening",
                ],
                answer: 1,
              },
              {
                options: [
                  "see up",
                  "go",
                  "travel up",
                  "visit",
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
            title: "My grandmother's village",
            text: [
              "Every summer, I spend two weeks at my grandmother's house in a small village in the mountains. It's very different {1} my life in the city.",
              "There's no shop, no cinema and the internet is very slow. But I love it. Every morning, I help my grandmother feed the chickens and collect the eggs. Then we have breakfast in the garden.",
              "In the afternoons, I go swimming in the river with the other children from the village. We also explore the forest and build dens. In the evenings, my grandmother tells me stories {2} her childhood. She grew up in the same house! She says life was much harder then, {3} people were happier. I always feel sad {4} I have to leave. My grandmother is getting older, {5} I want to spend as much time with her {6} possible.",
            ],
            answers: [
              [
                "from",
              ],
              [
                "about",
                "of",
              ],
              [
                "but",
              ],
              [
                "when",
              ],
              [
                "so",
                "and",
              ],
              [
                "as",
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
            instruction: "Read this email from your English-speaking friend Charlie and the notes you have made. Write your email to Charlie using all the notes. Write about 100 words.",
            input: {
              from: "Charlie",
              subject: "Going to a concert",
              lines: [
                "My favourite band is playing in our city next month! [Great!]",
                "Would you like to come with me? [Answer]",
                "How should we get there? [Suggest]",
                "What should we do after the concert? [Give ideas]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Charlie,\n\nThat's great news! I know how much you love that band.\n\nI'd love to come with you, thank you for asking! I've heard their new album, and it's really good. How much are the tickets? I'll need to ask my parents for some money.\n\nI think we should take the underground to the concert. It's quicker than the bus, and we won't have to worry about traffic. The station is right next to the stadium.\n\nAfter the concert, we could go for a burger at the restaurant near the station. Then my dad could pick us up.\n\nSee you soon,\nEmir",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! How to be happy",
              lines: [
                "What makes you happy?",
                "Do you think money can make people happy?",
                "What advice would you give to someone who feels sad?",
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
            sample: "The secret of happiness\n\nFor me, happiness comes from simple things: spending time with my family, laughing with friends and walking in nature. I feel happiest when I'm with people I love.\n\nI don't think money can make people truly happy. Of course, you need enough money to live comfortably, but expensive things don't make you feel good for long. Experiences, like travelling or learning something new, are much more important.\n\nIf someone feels sad, I would advise them to talk to someone they trust. It also helps to do some exercise, go outside and do something kind for someone else. Small things can make a big difference.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'The bus driver looked at Mia and said, 'This is the last stop.'' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "The bus driver looked at Mia and said, 'This is the last stop.' Mia looked out of the window. She didn't recognise anything. She had fallen asleep and missed her stop!\n\nIt was getting dark, and her phone battery was dead. Mia felt panic rising inside her. She got off the bus and looked around. There was only a small café.\n\nShe went inside and explained her problem to the woman behind the counter. The woman lent Mia her phone so she could call her parents. While she waited, the woman gave her a hot chocolate.\n\nHalf an hour later, her dad arrived. Mia promised herself she would never fall asleep on a bus again.",
          },
        },
      ],
    },
  ],
};
