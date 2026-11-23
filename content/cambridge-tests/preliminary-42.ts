import type { CambridgeTest } from "./types";

/** B1 Preliminary practice test 42 (Reading & Writing). Original Netfener content. Listening is added later. */
export const PRELIMINARY_42: CambridgeTest = {
  id: "preliminary-42",
  level: "preliminary",
  no: 42,
  title: "B1 Preliminary · Practice Test 42",
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
                    "The pool will be closed on Saturday for a competition. It will reopen on Sunday at 8 a.m.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "You can't swim on Saturday.",
                  "The pool is closed on Sunday.",
                  "The competition is on Sunday.",
                ],
                answer: 0,
              },
              {
                notice: {
                  genre: "Message",
                  lines: [
                    "Hi Tom, I can't come to football tonight. I've hurt my ankle. Can you tell the coach? Ben",
                  ],
                },
                question: "Why can't Ben go to football?",
                options: [
                  "He has homework.",
                  "He is busy.",
                  "He is injured.",
                ],
                answer: 2,
              },
              {
                notice: {
                  genre: "Label",
                  lines: [
                    "Recyclable. Please rinse before recycling.",
                  ],
                },
                question: "What does the label say?",
                options: [
                  "It cannot be recycled.",
                  "You should wash it before recycling.",
                  "Throw it away.",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Email",
                  lines: [
                    "Hi Ella,",
                    "Can you bring some music to the party on Saturday? I don't have any good songs. Thanks! Lucy",
                  ],
                },
                question: "What does Lucy want Ella to bring?",
                options: [
                  "food",
                  "music",
                  "drinks",
                ],
                answer: 1,
              },
              {
                notice: {
                  genre: "Notice",
                  lines: [
                    "SHOP",
                    "Back in 10 minutes. Sorry for the delay.",
                  ],
                },
                question: "What does the notice say?",
                options: [
                  "The shop is closed today.",
                  "The shop is closing down.",
                  "The shop assistant will return soon.",
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
            instruction: "The young people below all want to buy a present. Read the descriptions of eight presents. Decide which present would be the most suitable for each person to buy.",
            options: [
              {
                title: "Cookery Book",
                text: "Simple recipes from around the world, with lots of photos.",
              },
              {
                title: "Garden Kit",
                text: "Seeds, pots and tools for growing herbs at home.",
              },
              {
                title: "Headphones",
                text: "Wireless headphones with excellent sound quality.",
              },
              {
                title: "Board Game",
                text: "A strategy game for 2–6 players. Great for families.",
              },
              {
                title: "Art Set",
                text: "Paints, brushes and sketchbooks for beginners.",
              },
              {
                title: "Football",
                text: "An official match ball signed by a famous player.",
              },
              {
                title: "Telescope",
                text: "A small telescope for looking at the Moon and planets.",
              },
              {
                title: "Jigsaw Puzzle",
                text: "A 1,000-piece puzzle of a famous painting.",
              },
            ],
            items: [
              {
                text: "Mert's brother loves football and wants to be a professional player.",
                answer: 5,
              },
              {
                text: "Elif's grandmother wants to grow her own herbs on her balcony.",
                answer: 1,
              },
              {
                text: "Can's sister loves listening to music on the bus.",
                answer: 2,
              },
              {
                text: "Defne's dad loves space and the stars.",
                answer: 6,
              },
              {
                text: "Zeynep's family loves playing games together.",
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
              title: "A year in Australia",
              paragraphs: [
                "When I was sixteen, my family moved to Australia for a year because of my mum's job. I was excited but also worried about leaving my friends.",
                "Australia was very different from home. The weather was much hotter, and there were strange animals everywhere. On my first day, I saw a kangaroo in a park! I also had to get used to Australian English, which has lots of unusual words.",
                "At school, I joined the swimming team. Australians love sport, and most of my classmates were very good swimmers. I trained hard and improved a lot. By the end of the year, I was one of the fastest in the team.",
                "When it was time to go home, I didn't want to leave. I'd made great friends and had amazing experiences. I still keep in touch with my Australian friends, and I hope to go back one day.",
              ],
            },
            items: [
              {
                question: "Why did the family move to Australia?",
                options: [
                  "for a holiday",
                  "to study",
                  "because of a job",
                  "to see family",
                ],
                answer: 2,
              },
              {
                question: "What surprised the writer on her first day?",
                options: [
                  "seeing a kangaroo",
                  "the cold weather",
                  "her new school",
                  "the food",
                ],
                answer: 0,
              },
              {
                question: "What did the writer find different about Australian English?",
                options: [
                  "It was very slow.",
                  "It was very formal.",
                  "It was the same as at home.",
                  "It had unusual words.",
                ],
                answer: 3,
              },
              {
                question: "How did the writer improve at swimming?",
                options: [
                  "by having private lessons",
                  "by training hard",
                  "by swimming in the sea",
                  "by watching videos",
                ],
                answer: 1,
              },
              {
                question: "How did the writer feel about going home?",
                options: [
                  "She didn't want to leave.",
                  "She was very happy.",
                  "She was bored.",
                  "She didn't care.",
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
            title: "A museum of broken relationships",
            text: [
              "In Croatia, there's a very unusual museum. {1} It's called the Museum of Broken Relationships.",
              "The museum was started by two artists after they ended their own relationship. {2} They didn't know what to do with the things they had shared.",
              "Now people from all over the world send objects to the museum. {3} Each object comes with a short story explaining its meaning.",
              "The objects include love letters, clothes and even a garden gnome. {4} Some of the stories are sad, but others are funny.",
              "The museum has become very popular. {5} Many visitors say it helps them to deal with their own sad experiences.",
            ],
            sentences: [
              "The objects are all very expensive.",
              "There's also an axe that someone used to destroy furniture!",
              "The museum only shows paintings.",
              "They decided to show them in an exhibition.",
              "It displays objects from relationships that have ended.",
              "It has won awards and opened a second location in Los Angeles.",
              "Nobody visits the museum.",
              "They are items that remind them of a past relationship.",
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
            title: "The Moon",
            text: [
              "The Moon is about 384,000 kilometres from Earth. It is the only place outside Earth that humans have {1} visited.",
              "Between 1969 and 1972, twelve astronauts walked on the Moon. They collected rocks and did {2} experiments. Their footprints are still there today, because there is no wind on the Moon to blow them away.",
              "The Moon has a big effect on Earth. Its gravity causes the {3} in the oceans. Without the Moon, the Earth would spin much faster, and our days would be much shorter. Scientists think the Moon was formed about 4.5 billion years ago when a huge object {4} into the Earth. Today, many countries are planning new missions to the Moon. Some {5} to build bases there, where astronauts could live for months. One day, the Moon might even be a stop on the {6} to Mars.",
            ],
            gaps: [
              {
                options: [
                  "actually",
                  "actual",
                  "act",
                  "action",
                ],
                answer: 0,
              },
              {
                options: [
                  "science",
                  "scientist",
                  "scientific",
                  "scientifically",
                ],
                answer: 2,
              },
              {
                options: [
                  "tide up",
                  "tidal",
                  "tides",
                  "tidy",
                ],
                answer: 2,
              },
              {
                options: [
                  "crashed",
                  "crash",
                  "crashing",
                  "crashes",
                ],
                answer: 0,
              },
              {
                options: [
                  "hopes up",
                  "hoping",
                  "hopeful",
                  "hope",
                ],
                answer: 3,
              },
              {
                options: [
                  "journeys up",
                  "journey",
                  "journeyed",
                  "journeying",
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
            title: "My favourite teacher",
            text: [
              "My favourite teacher is Mr Ahmed, {1} teaches us science. He's been teaching at my school for twenty years.",
              "What I like most about Mr Ahmed is that he makes science fun. He does lots of experiments in class, and he always explains things clearly. When we don't understand something, he explains it again {2} a different way.",
              "He also has a great sense of humour. He tells funny stories and makes jokes, which makes his lessons enjoyable. But he's also strict when he needs to be. Last year, Mr Ahmed organised a trip {3} the science museum. It was the best school trip I've ever been {4}. He also runs a science club after school, {5} I joined last year. Because of Mr Ahmed, I want to study science at university. He's inspired me {6} much.",
            ],
            answers: [
              [
                "who",
              ],
              [
                "in",
              ],
              [
                "to",
              ],
              [
                "on",
              ],
              [
                "which",
              ],
              [
                "so",
                "very",
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
            instruction: "Read this email from your English-speaking friend Chris and the notes you have made. Write your email to Chris using all the notes. Write about 100 words.",
            input: {
              from: "Chris",
              subject: "A holiday",
              lines: [
                "I'm going on holiday next month! [Lucky you!]",
                "Where do you usually go on holiday? [Tell Chris]",
                "What do you like doing on holiday? [Explain]",
                "Can you recommend a good place to visit? [Suggest one]",
              ],
            },
            minWords: 100,
            checklist: [
              "I answered all four notes.",
              "I used a friendly opening and closing.",
              "I joined my ideas with words like 'because', 'but' and 'so'.",
              "I wrote about 100 words.",
            ],
            sample: "Hi Chris,\n\nLucky you! I hope you have a fantastic time.\n\nMy family usually goes to the seaside in the south of Turkey. My grandparents have a small house there, so we stay with them for two weeks every summer.\n\nOn holiday, I love swimming in the sea and reading books on the beach. I also enjoy exploring old towns and trying local food. In the evenings, we often eat at small restaurants by the sea.\n\nI'd recommend visiting Cappadocia. It's amazing! You can take a hot-air balloon ride over the strange rock formations and stay in a hotel inside a cave.\n\nBye,\nDefne",
          },
        },
        {
          title: "Part 2 · Article (choose this or the story)",
          task: {
            kind: "writing",
            instruction: "You see this announcement on an English-language website for teenagers. Write your article in about 100 words.",
            input: {
              subject: "Articles wanted! A role model",
              lines: [
                "Who is your role model?",
                "Why do you admire them?",
                "How have they influenced your life?",
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
            sample: "My role model\n\nMy role model is my older sister, Ayla. She's twenty-two and works as a doctor in a big hospital. I admire her because she's very hardworking and kind.\n\nWhen she was at school, she studied very hard and always helped her friends. Now she works long hours at the hospital, but she never complains. She says that helping people is the best feeling in the world.\n\nAyla has influenced me a lot. Because of her, I study hard and try to be kind to everyone. She's also taught me that if you really want something, you should never give up. I hope I'll be like her one day.",
          },
        },
        {
          title: "Part 2 · Story (choose this or the article)",
          task: {
            kind: "writing",
            instruction: "Your English teacher has asked you to write a story. Your story must begin with this sentence: 'It was the most important day of Emma's life.' Write your story in about 100 words.",
            minWords: 100,
            checklist: [
              "My story begins with the sentence I was given.",
              "It has a clear beginning, middle and end.",
              "I used past tenses correctly.",
              "I wrote about 100 words.",
            ],
            sample: "It was the most important day of Emma's life. She had been training for the national swimming championships for two years, and now she was standing on the starting block.\n\nThe whistle blew, and Emma dived into the water. She swam as fast as she could. Halfway through the race, she was in third place. She could hear the crowd cheering.\n\nIn the last few metres, she pushed even harder. When she touched the wall, she looked up at the scoreboard. She had won! She had set a new national record.\n\nEmma's coach and her parents were crying with happiness. All her hard work had paid off.",
          },
        },
      ],
    },
  ],
};
