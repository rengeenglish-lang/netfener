import type { CambridgeTest } from "./types";

/** A2 Key practice test 60 (Reading & Writing). Original Netfener content. Listening is added later. */
export const KEY_60: CambridgeTest = {
  id: "key-60",
  level: "key",
  no: 60,
  title: "A2 Key · Practice Test 60",
  papers: [
    {
      id: "reading-writing",
      name: "Reading & Writing",
      minutes: 60,
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
                    "SPORTS CENTRE",
                    "The café will be closed for two weeks from Monday.",
                    "Drinks machines are in the main hall.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The sports centre is closed.",
                  "You can still get drinks in another place.",
                  "The café is open on Monday.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Text message",
                  lines: [
                    "Hi Mum, I've forgotten my lunch. Can you bring it to school before 12? It's on the kitchen table. Leo",
                  ],
                },
                question: "What does Leo want Mum to do?",
                options: [
                  "bring his food to school",
                  "buy him lunch",
                  "make him lunch",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Sign",
                  lines: [
                    "THEATRE",
                    "No food or drinks in the theatre, except water.",
                  ],
                },
                question: "What can you take into the theatre?",
                options: [
                  "sweets",
                  "coffee",
                  "water",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Jo,",
                    "I'm going to be late for our meeting. Can we start at 3.30 instead of 3? Ann",
                  ],
                },
                question: "What does Ann want?",
                options: [
                  "to cancel the meeting",
                  "to change the place of the meeting",
                  "to change the time of the meeting",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "MUSEUM",
                    "Last entry 4.30 p.m.",
                    "Museum closes at 5.30 p.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't go in after 4.30.",
                  "The museum closes at 4.30.",
                  "You can stay until 6.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Advertisement",
                  lines: [
                    "WEEKEND WORKSHOP",
                    "Learn to make your own candles!",
                    "All materials provided. Saturday 2–5 p.m.",
                  ],
                },
                question: "What do we know about the workshop?",
                options: [
                  "It's on Sunday.",
                  "You don't need to bring anything.",
                  "It's for two days.",
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
            instruction: "For each question, choose the correct answer. Which person …",
            options: [
              {
                title: "Holly",
                text: "I love surfing. I've been surfing since I was eight. My family has a small house near the beach, and we go there every summer. Last year, I entered my first competition and came third. I want to try surfing in Hawaii one day.",
              },
              {
                title: "Jack",
                text: "My hobby is computer programming. I go to a coding club after school. I've built a website for my dad's business and an app for my school. My teacher says I could study computer science at a top university.",
              },
              {
                title: "Lily",
                text: "I'm a keen photographer. I take photos of people in the street. I find people's faces really interesting. I always ask them first before I take a photo. Last month, I had an exhibition of my photos at a local café. Lots of people came to see it.",
              },
            ],
            items: [
              {
                text: "has a family home by the sea?",
                answer: 0,
              },
              {
                text: "wants to visit a famous place?",
                answer: 0,
              },
              {
                text: "has made something for a family member?",
                answer: 1,
              },
              {
                text: "could study at a good university?",
                answer: 1,
              },
              {
                text: "asks for permission?",
                answer: 2,
              },
              {
                text: "showed their work to the public?",
                answer: 2,
              },
              {
                text: "goes to a club?",
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 3",
          task: {
            kind: "mcq",
            instruction: "Read the article. For each question, choose the correct answer.",
            text: {
              title: "Living in the mountains",
              paragraphs: [
                "Fourteen-year-old Pemba lives in a small village in the mountains of Nepal. It's more than 3,000 metres high, near Mount Everest.",
                "'Life here is very simple,' says Pemba. 'We don't have cars or roads. We walk everywhere. It takes me an hour to walk to school.'",
                "Pemba's father works as a mountain guide. He helps climbers from all over the world reach the top of Everest. 'He has climbed Everest nine times,' says Pemba proudly.",
                "Pemba wants to be a guide too. 'But first, I want to finish school and learn English,' he says. 'Then I can talk to the climbers. I also want to help my village. We need a better school and a hospital.'",
              ],
            },
            items: [
              {
                question: "Where does Pemba live?",
                options: [
                  "in a mountain village",
                  "in a big city",
                  "near the sea",
                ],
                answer: 0,
              },
              {
                question: "How does Pemba get to school?",
                options: [
                  "He goes by car.",
                  "He walks.",
                  "He goes by bus.",
                ],
                answer: 1,
              },
              {
                question: "What does Pemba's father do?",
                options: [
                  "He helps people climb mountains.",
                  "He is a teacher.",
                  "He works in a hospital.",
                ],
                answer: 0,
              },
              {
                question: "What does Pemba want to do before becoming a guide?",
                options: [
                  "climb Everest",
                  "move to a city",
                  "finish his education",
                ],
                answer: 2,
              },
              {
                question: "What does Pemba's village need?",
                options: [
                  "more roads",
                  "more tourists",
                  "a better school and a hospital",
                ],
                answer: 2,
              },
            ],
          },
        },
        {
          title: "Part 4",
          task: {
            kind: "cloze-mc",
            instruction: "Read the article. For each question, choose the correct answer.",
            title: "Chess",
            text: [
              "Chess is one of the oldest board games in the world. It probably {1} in India about 1,500 years ago. Then it spread to Persia, the Arab world and Europe.",
              "Chess is played by two people on a board with sixty-four squares. Each player has sixteen pieces. The aim of the game is to {2} the other player's king.",
              "Chess is a game that needs a lot of thinking. Players must plan their moves carefully and try to {3} what the other player will do. Some games can last for hours! Many people believe that chess is good for the brain. It can help children {4} better at school. Today, millions of people play chess online. Computers can also play chess, and they are very good. In 1997, a computer {5} the world champion for the first time. But for many people, playing chess with friends is still the most {6} way to play.",
            ],
            gaps: [
              {
                options: [
                  "opened",
                  "made",
                  "started",
                ],
                answer: 2,
              },
              {
                options: [
                  "catch",
                  "take up",
                  "hold",
                ],
                answer: 0,
              },
              {
                options: [
                  "know",
                  "guess",
                  "look",
                ],
                answer: 1,
              },
              {
                options: [
                  "concentrate",
                  "attend",
                  "think up",
                ],
                answer: 0,
              },
              {
                options: [
                  "won",
                  "passed",
                  "beat",
                ],
                answer: 2,
              },
              {
                options: [
                  "funny",
                  "fun",
                  "funnily",
                ],
                answer: 1,
              },
            ],
          },
        },
        {
          title: "Part 5",
          task: {
            kind: "open-cloze",
            instruction: "For each question, write the correct answer. Write one word for each gap.",
            title: "Email",
            text: [
              "Hi Max,",
              "Thanks for your email. I'm sorry I didn't reply sooner. I've been really busy {1} homework this week!",
              "You asked me about the weekend. I'm free on Saturday, but I've got a basketball match on Sunday. {2} we go to the park on Saturday afternoon? We could take a ball and play football.",
              "After that, we could go {3} my house for dinner. My mum is making her famous burgers! You can stay the night if you {4}. Ask your parents and tell me {5} you can come. See you {6} the weekend!",
              "Sam",
            ],
            answers: [
              [
                "with",
              ],
              [
                "shall",
                "could",
                "can",
              ],
              [
                "to",
                "back",
              ],
              [
                "want",
                "like",
              ],
              [
                "if",
                "whether",
              ],
              [
                "at",
              ],
            ],
          },
        },
        {
          title: "Part 6",
          task: {
            kind: "writing",
            instruction: "You want to start a club at your school. Write an email to your English friend, Charlie. Write 25 words or more.",
            prompts: [
              "Say what kind of club it is.",
              "Say when it will meet.",
              "Ask Charlie to join.",
            ],
            minWords: 25,
            checklist: [
              "I wrote about all three points.",
              "I started with 'Hi Charlie' and finished with my name.",
              "I wrote 25 words or more.",
            ],
            sample: "Hi Charlie,\n\nI want to start a chess club at my school. It will meet every Wednesday after school in the library. Would you like to join? You don't need to be good at chess!\n\nBye,\nAhmet",
          },
        },
        {
          title: "Part 7",
          task: {
            kind: "writing",
            instruction: "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            pics: [
              {
                e: "👨🌳🏡",
                label: "1",
              },
              {
                e: "👨🪓🌳💥",
                label: "2",
              },
              {
                e: "👨🪵🔥😊",
                label: "3",
              },
            ],
            minWords: 35,
            checklist: [
              "My story talks about all three pictures.",
              "I used past tenses and words like 'first', 'then' and 'finally'.",
              "I wrote 35 words or more.",
            ],
            sample: "Last autumn, a big storm blew down an old tree in Mr Smith's garden. It fell on his fence and broke it. Mr Smith was very upset. The next day, he cut the tree into small pieces. He used the wood to repair the fence and kept the rest for the winter. On cold evenings, he burned the wood in his fireplace and felt warm and happy.",
          },
        },
      ],
    },
  ],
};
